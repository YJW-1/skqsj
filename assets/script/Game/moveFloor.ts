// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { cocosz } from "../Framework/CocosZ";
import { tag } from "../Framework/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    selelt: cc.Node = null;
    default: cc.Node = null;
    notStop: cc.Node = null;

    tagList: any = [];

    isFirst: boolean = true;

    isEnd: boolean = false;


    onBeginContact(contact, self, other) {
        // if (this.default.active == true) return;
        // if (this.selelt.active == false) return;
        if (other.tag == tag.thorn || other.tag == tag.invisibleFloor) {
            contact.disabled = true;
            return
        }
        if (this.isEnd) return;

        contact.disabled = true;
        // if (this.isFirst) {
        //     this.isFirst = false;
        //     return
        // }
        // cc.log(other.tag);
        for (let idx of this.tagList) {
            if (idx.tag == other.tag) {
                return;
            }
        }
        this.tagList.push(other);
        // cc.log(this.tagList);

        // if (this.tagList.length > 1) {
        this.notStop.active = true;
        this.node.color = cc.color(255, 0, 0, 150);
        // }
        if (this.tagList.length == 1 && (this.tagList[0].tag == tag.wooldenBox || this.tagList[0].tag == 81)) {
            if (this.tagList[0].node.name == "wooldenBox11" && cocosz.dataMgr.CurLevelId == 52) return;
            this.notStop.active = false;
            this.node.color = cc.color(255, 255, 255, 255);
        }
    }

    onEndContact(contact, self, other) {
        if (other.tag == tag.thorn) return
        if (this.isEnd) return;
        let list = [];
        for (let idx of this.tagList) {
            if (idx.tag == other.tag) continue;
            list.push(idx);
        }
        this.tagList = list;

        this.notStop.active = true;
        this.node.color = cc.color(255, 0, 0, 150);

        if (this.tagList.length == 1 && (this.tagList[0].tag == tag.wooldenBox || this.tagList[0].tag == 81)) {
            if (this.tagList[0].node.name == "wooldenBox11" && cocosz.dataMgr.CurLevelId == 52) return;
            this.notStop.active = false;
            this.node.color = cc.color(255, 255, 255, 255);
        }


        // cc.log(this.tagList, "----------onEndContact");
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.default = this.node.getChildByName("default");
        this.selelt = this.node.getChildByName("selelt");
        this.notStop = this.node.getChildByName("notStop");

        let circle = null;
        if (this.node.name == "moveFloor2" || this.node.name == "moveFloor4") {
            circle = this.node.getComponent(cc.PhysicsBoxCollider);
        }
        else if (this.node.name == "moveFloor1") {
            circle = this.node.getComponent(cc.PhysicsCircleCollider);
        }
        else if (this.node.name == "moveFloor3" || this.node.name == "moveFloor5") {
            circle = this.node.getComponent(cc.PhysicsPolygonCollider);
        }
        circle.enabled = false;
    }

    start() {
        this.node.zIndex += 1001;

        this.node.on(cc.Node.EventType.TOUCH_START, () => {
            this.default.active = false;

            this.notStop.active = true;
            this.node.color = cc.color(255, 0, 0, 150);

            let circle = null;
            if (this.node.name == "moveFloor2" || this.node.name == "moveFloor4") {
                circle = this.node.getComponent(cc.PhysicsBoxCollider);
            }
            else if (this.node.name == "moveFloor1") {
                circle = this.node.getComponent(cc.PhysicsCircleCollider);
            }
            else if (this.node.name == "moveFloor3" || this.node.name == "moveFloor5") {
                circle = this.node.getComponent(cc.PhysicsPolygonCollider);
            }

            circle.enabled = true;
        }, this)
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (touch: cc.Touch) => {
            let pos = touch.getDelta();
            this.node.x += pos.x;
            this.node.y += pos.y;
            // cc.log(pos.x, pos.y, "---------")
            // let v = this.node.getComponent(cc.RigidBody).linearVelocity;
            // v.x += pos.x * 10;
            // v.y += pos.y * 10;
            // this.node.getComponent(cc.RigidBody).linearVelocity = v;
        }, this)
        this.node.on(cc.Node.EventType.TOUCH_END, () => {
            // cc.log(this.tagList);
            if (this.tagList.length == 1 && (this.tagList[0].tag == tag.wooldenBox || this.tagList[0].tag == 81)) {
                if (this.tagList[0].node.name == "wooldenBox11" && cocosz.dataMgr.CurLevelId == 52) return;
                this.node.targetOff(this);
                this.isEnd = true;

                this.node.color = cc.color(255, 255, 255, 255);

                let weld = null;
                if (this.tagList[0].node.name == "wooldenBox12") {
                    cc.log("------------------this.")
                    weld = this.node.addComponent(cc.RevoluteJoint);
                }
                else {
                    weld = this.node.addComponent(cc.WeldJoint);
                }
                weld.connectedBody = this.tagList[0].node.getComponent(cc.RigidBody);
                // cc.log(this.tagList[0].node.scaleX, this.tagList[0].node.scaleY)
                // weld.connectedAnchor.x = (this.node.x - this.tagList[0].node.x) / this.tagList[0].node.scaleX;

                // weld.connectedAnchor.y = (this.node.y - this.tagList[0].node.y) / this.tagList[0].node.scaleY;
                weld.connectedAnchor.x = (this.node.x - this.tagList[0].node.x);

                weld.connectedAnchor.y = (this.node.y - this.tagList[0].node.y);
                if (this.node.name == "moveFloor5") {
                    // weld.connectedAnchor.x = 0
                    // weld.connectedAnchor.y = 0

                    // weld.anchor.x = (this.node.x - this.tagList[0].node.x);
                    // weld.anchor.y = (this.node.y - this.tagList[0].node.y);
                }

                weld.apply();
                // cc.log(this.tagList[0].node)

                let rb = this.node.getComponent(cc.RigidBody);
                rb.type = cc.RigidBodyType.Dynamic;
                let circle = null;
                if (this.node.name == "moveFloor2" || this.node.name == "moveFloor4") {
                    circle = this.node.getComponent(cc.PhysicsBoxCollider);
                }
                else if (this.node.name == "moveFloor1") {
                    circle = this.node.getComponent(cc.PhysicsCircleCollider);
                }
                else if (this.node.name == "moveFloor3" || this.node.name == "moveFloor5") {
                    circle = this.node.getComponent(cc.PhysicsPolygonCollider);
                }

                this.selelt.active = false;
                rb.gravityScale = 2;
                if (this.node.name == "moveFloor5") {
                    rb.gravityScale = 1;
                }
                if (cocosz.dataMgr.CurLevelId == 113 || cocosz.dataMgr.CurLevelId == 115) {
                    rb.gravityScale = 0;
                }
                circle.apply();
                if (this.node.name == "moveFloor5") return;

                if (cocosz.dataMgr.CurLevelId == 113) {
                    return;
                }
                this.node.on(cc.Node.EventType.TOUCH_START, () => {
                    this.node.destroy();
                    cocosz.audioMgr.playBoxEffect();
                    let prefab = cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
                    let node = cc.instantiate(prefab);
                    this.node.parent.addChild(node);
                    node.setPosition(this.node.getPosition());
                })
            }


        }, this)
    }

    update(dt) {
        if (this.node.y >= 500) {
            this.node.destroy();
        }
    }
}
