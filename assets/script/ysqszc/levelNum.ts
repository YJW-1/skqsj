import { captureRejectionSymbol } from "events";
import { chdir } from "process";
import { cocosz } from "../Framework/CocosZ";
import theBall from "./theBall";

const { ccclass, property } = cc._decorator;

@ccclass
export default class levelNum extends cc.Component {

    // @property(cc.Label)
    levelNum: cc.Label = null;
    // @property(cc.Node)
    mask: cc.Node = null

    curLevel: number = 0;


    initGame1() {


        let prefab = cocosz.resMgr.getRes("level" + this.curLevel, cc.Prefab);

        for (let child of prefab.data.children) {
            if (child.name == "mapMask2") {
                let component = child.getComponents(cc.PhysicsPolygonCollider);
                let list = [];
                for (let poly of component) {
                    if (poly.points) {
                        list.push(poly.points)
                    }
                }

                let prefab = cocosz.resMgr.getRes("mapMask", cc.Prefab);
                let node = cc.instantiate(prefab);
                let graphics2: cc.Graphics = node.getChildByName("line").getComponent(cc.Graphics);
                this.node.addChild(node);
                node.setPosition(child.getPosition());
                node.zIndex -= 999;
                node.scaleX = child.scaleX;
                node.scaleY = child.scaleY;
                node.angle = child.angle;
                let mask: cc.Mask = node.getComponent(cc.Mask);
                let graphics = mask._graphics;
                let rb = node.addComponent(cc.RigidBody);
                rb.type = cc.RigidBodyType.Kinematic;
                rb.gravityScale = 0;

                for (let point of list) {
                    let collider = node.addComponent(cc.PhysicsPolygonCollider);
                    // cc.log(collider.tag, "----------collider.tag");
                    collider.tag = 0;
                    collider.points = [].concat(point);
                    collider.apply();

                    graphics.moveTo(point[0].x, point[0].y);
                    for (let v2 of point) {
                        graphics.lineTo(v2.x, v2.y);
                    }
                    graphics.fill();



                    graphics2.lineWidth = 10;
                    graphics2.strokeColor = new cc.Color(40, 33, 13, 255);
                    graphics2.moveTo(point[0].x, point[0].y);
                    for (let v2 of point) {
                        graphics2.lineTo(v2.x, v2.y);
                    }
                    graphics2.lineTo(point[0].x, point[0].y);

                    graphics2.stroke();

                }
                continue;
            }
            else if (child.name == "levelNum") {
                let prefab = cocosz.resMgr.getRes("levelNum", cc.Prefab);
                let node = cc.instantiate(prefab);
                this.node.addChild(node);
                node.setPosition(child.getPosition());
                node.getChildByName("num").getComponent(cc.Label).string = cocosz.gameMgr.curGame2LevelID + "";
                continue;
            }

            let prefab = cocosz.resMgr.getRes(child.name, cc.Prefab);
            let node = cc.instantiate(prefab);
            node.scaleX = child.scaleX;
            node.scaleY = child.scaleY;
            node.angle = child.angle;
            node.setPosition(child.getPosition());
            this.node.addChild(node);
        }


    }

    initGame2() {

        let prefab = cocosz.resMgr.getRes("MapData", cc.JsonAsset).json["level" + this.curLevel];
        for (let child of prefab) {
            // cc.log(child);
            if (child.name == "mapMask2") {
                // let component = child.getComponents(cc.PhysicsPolygonCollider);
                let list = child.list;

                // for (let poly of component) {
                //     if (poly.points) {
                //         list.push(poly.points)
                //     }
                // }

                let prefab = cocosz.resMgr.getRes("mapMask", cc.Prefab);
                let node = cc.instantiate(prefab);
                let graphics2: cc.Graphics = node.getChildByName("line").getComponent(cc.Graphics);
                this.node.addChild(node);
                node.x = child.x;
                node.y = child.y;
                node.zIndex -= 999;
                node.scaleX = child.scaleX;
                node.scaleY = child.scaleY;
                node.angle = child.angle;
                let mask: cc.Mask = node.getComponent(cc.Mask);
                let graphics = mask._graphics;
                let rb = node.addComponent(cc.RigidBody);
                rb.type = cc.RigidBodyType.Kinematic;
                rb.gravityScale = 0;

                for (let point of list) {
                    let collider = node.addComponent(cc.PhysicsPolygonCollider);
                    // cc.log(collider.tag, "----------collider.tag");
                    collider.tag = 0;
                    let bb = [];
                    for (let aa of point) {
                        bb.push(cc.v2(aa.x, aa.y))
                    }
                    point = bb
                    collider.points = [].concat(point);
                    collider.apply();

                    graphics.moveTo(point[0].x, point[0].y);
                    for (let v2 of point) {
                        graphics.lineTo(v2.x, v2.y);
                    }
                    graphics.fill();



                    graphics2.lineWidth = 10;
                    graphics2.strokeColor = new cc.Color(40, 33, 13, 255);
                    graphics2.moveTo(point[0].x, point[0].y);
                    for (let v2 of point) {
                        graphics2.lineTo(v2.x, v2.y);
                    }
                    graphics2.lineTo(point[0].x, point[0].y);

                    graphics2.stroke();

                }
                continue;
            }
            else if (child.name == "levelNum") {
                let prefab = cocosz.resMgr.getRes("levelNum", cc.Prefab);
                let node = cc.instantiate(prefab);
                this.node.addChild(node);
                node.x = child.x;
                node.y = child.y;
                node.getChildByName("num").getComponent(cc.Label).string = cocosz.gameMgr.curGame2LevelID + "";
                continue;
            }

            let prefab = cocosz.resMgr.getRes(child.name, cc.Prefab);
            let node = cc.instantiate(prefab);
            node.scaleX = child.scaleX;
            node.scaleY = child.scaleY;
            node.angle = child.angle;
            node.x = child.x;
            node.y = child.y;
            this.node.addChild(node);
        }

    }


    // LIFE-CYCLE CALLBACKS:

    onLoad() {
    }

    start() {
        // cc.log(this.curLevel)


        this.initGame2()


        this.scheduleOnce(() => {
            for (let child of this.node.children) {
                let rb = child.getComponent(cc.RigidBody);
                if (!rb || child.name == "cactus6") {
                    cc.log(child.name, "---------child")
                    continue
                };
                rb.gravityScale = 0;
                if ((this.curLevel == 10 && child.name == "nimiCactus12") || (this.curLevel == 13 && child.name == "stone") || (this.curLevel == 16 && child.name == "stone")) {
                    rb.gravityScale = 1;
                    if (child.getComponent(cc.PhysicsCircleCollider)) {
                        child.getComponent(cc.PhysicsCircleCollider).friction = 0.05;
                    }
                }
                else {
                    rb.linearVelocity = cc.v2(0, -200);
                    if (child.name == "sBoard") {
                        let rb = child.getComponent(cc.RigidBody);
                        let v = rb.linearVelocity;
                        v = cc.v2(0, -200);
                        rb.linearVelocity = v;
                        rb.angularVelocity = 100;
                    }
                    else if (this.curLevel == 6 && child.name == "stone") {
                        rb.linearVelocity = cc.v2(-child.x / 10, -200);
                    }
                    else if (this.curLevel == 16 && child.name == "stone") {
                        rb.linearVelocity = cc.v2(0, -200);
                    }
                }
                // if (rb) {
                cc.log(child.name)
                // }
            }
        }, 0.5)

        this.scheduleOnce(() => {
            this.node.destroy();
        }, 40)


        // this.mask.removeFromParent();

    }

    // update (dt) {}
}
