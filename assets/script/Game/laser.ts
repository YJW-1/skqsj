import { cocosz } from "../Framework/CocosZ";
import Constant, { tag } from "../Framework/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class laser extends cc.Component {


    laserEffect: cc.Node = null;
    isDes: boolean = false;
    onRayCast() {
        if (this.isDes) return;
        let startPos = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
        let endPos = cc.v2(0, 0);
        if (cocosz.dataMgr.CurLevelId == 71 || cocosz.dataMgr.CurLevelId == 79 || cocosz.dataMgr.CurLevelId == 87 ||
            cocosz.dataMgr.CurLevelId == 90 || cocosz.dataMgr.CurLevelId == 95 || cocosz.dataMgr.CurLevelId == 96) {
            if (cocosz.dataMgr.CurLevelId == 95) {
                if (this.node.parent.angle != 180) {
                    this.node.parent.angle = 270;
                }
            }
            else if (cocosz.dataMgr.CurLevelId == 96) {
                if (this.node.parent.angle != 0) {
                    this.node.parent.angle = 270;
                }
            }
            else {
                this.node.parent.angle = 270;
            }
        }
        if (this.node.parent.angle == 0) {
            endPos = cc.v2(startPos.x + 1500, startPos.y);
        }
        else if (this.node.parent.angle == 180) {
            endPos = cc.v2(startPos.x - 1500, startPos.y);
        }
        else if (this.node.parent.angle == 90) {
            endPos = cc.v2(startPos.x, startPos.y + 1500);
        }
        else if (this.node.parent.angle == 270) {
            endPos = cc.v2(startPos.x, startPos.y - 1500);
        }
        let result = cocosz.gameMgr.onRayCast(startPos, endPos);
        // cc.log(this.node.parent.angle, startPos.x, startPos.y, endPos.x, endPos.y, result[0].collider.node.name);

        for (let rb of result) {
            let CTag = rb.collider.tag;
            let node = rb.collider.node;
            if (CTag == 0 || CTag == tag.moveFloor || CTag == tag.stone || CTag == tag.stone3 || CTag == tag.cloud || (CTag == tag.floorThorn && node.name == "floor19")) {
                let point = rb.point;
                let w = startPos.x - point.x;
                if (this.node.parent.angle == 90 || this.node.parent.angle == 270) {
                    w = startPos.y - point.y;
                }
                this.node.width = Math.abs(w) / this.node.parent.scaleX;
                this.laserEffect.x = this.node.width + 45 + 7
                return;
            }
            else if (CTag == tag.balloon || CTag == tag.rope || CTag == tag.player) {
                if (CTag == tag.balloon && node.parent.parent.name == "role") {
                    let sc = node.getComponent("balloon");
                    sc.onDesByLaser();
                }
                else if (CTag == tag.rope) {
                    let sc = node.getChildByName("balloon").getComponent("balloon");
                    sc.onDesByLaser();
                }
                else if (CTag == tag.player) {
                    let parent = node.parent;
                    if (parent.name != "role") {
                        parent = parent.parent;
                    }
                    for (let child of node.parent.children) {
                        if (child.name == "right_balloon" || child.name == "left_balloon") continue;
                        child.color = cc.color(0, 0, 0, 255);
                        for (let child2 of child.children) {
                            child2.color = cc.color(0, 0, 0, 255);
                            if (child.children.length > 0) {
                                for (let child3 of child2.children) {
                                    child3.color = cc.color(0, 0, 0, 255);
                                }
                            }
                        }
                    }
                    cc.game.emit(Constant.E_GAME_FAID)
                }
            }
            else if (CTag == tag.thorn || (CTag == tag.floorThorn && node.name != "floor19") || CTag == tag.honeybee) {
                let point = rb.point;
                let pos = this.node.parent.convertToNodeSpaceAR(point);
                let prefab = cocosz.resMgr.getRes("laserEffect", cc.Prefab);
                let node2 = cc.instantiate(prefab);
                node2.setPosition(pos);
                this.node.parent.addChild(node2);
                node.destroy();
            }
            else if (CTag == tag.balloon2) {
                node.destroy();
            }
            else if (CTag == tag.laser) {
                cc.log("激光销毁--------------------")
                if (cocosz.dataMgr.CurLevelId == 135) return;
                cc.log("激光销毁2--------------------")
                this.isDes = true;
                this.scheduleOnce(() => {
                    this.node.parent.destroy();
                }, 0.1)
            }
        }
        this.node.width = 1975;
    }

    // LIFE-CYCLE CALLBACKS:

    onEnable() {
        let box = this.node.parent.getComponent(cc.PhysicsBoxCollider);
        box.apply();
    }
    onDestroy() {
        cc.log("激光销毁----")
    }

    onLoad() {
        this.laserEffect = this.node.parent.getChildByName("laserEffect");
    }

    start() {

    }

    update(dt) {
        this.onRayCast();
    }
}
