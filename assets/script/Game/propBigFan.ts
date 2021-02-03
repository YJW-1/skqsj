import { cocosz } from "../Framework/CocosZ";
import { tag } from "../Framework/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class propBigFan extends cc.Component {

    intact: cc.Node = null;
    Damaged: cc.Node = null;
    isDamaged: boolean = false;

    action: any = null

    isFloor: boolean = false;

    onBeginContact(contact, self, other) {
        if (this.intact.active == false) return;
        if (other.tag == tag.player || other.tag == tag.rope || other.tag == tag.balloon|| other.tag == tag.balloon2 || other.tag == tag.thorn || other.node.name == "cactus5") {
            // cc.log(contact)
            contact.disabled = true;
            this.scheduleOnce(() => {
                this.intact.getChildByName("fanBlade").getChildByName("sp").active = true;
            }, 0.5)
        }
        else if (other.tag == tag.stone || other.tag == tag.stone3) {
            if (cocosz.dataMgr.CurLevelId == 92) return;
            contact.disabled = true;
            // this.scheduleOnce(() => {
            //     other.node.destroy();
            // }, 0.05)
            let prefab = cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            let node = cc.instantiate(prefab);
            this.node.addChild(node);
            this.onDamaged()
        }
    }

    //由火箭调
    public onDamaged() {
        if (this.action) {
            this.action.stop();
        }
        this.intact.active = false;
        this.Damaged.active = true;
        cc.tween(this.Damaged.getChildByName("fanBlade"))
            .by(3, { angle: 360 })
            .repeatForever()
            .start()
        this.unscheduleAllCallbacks();
    }



    onFanRight() {
        if (Math.random() > 0.5 && this.isFloor == false) {
            let prefab = cocosz.resMgr.getRes("fanLiZi", cc.Prefab);
            let node = cc.instantiate(prefab);
            if (this.node.angle == 180) {
                let Game = cc.find("Canvas/gameBg");
                let p1 = this.node.parent.convertToWorldSpaceAR(this.node.getPosition())
                let p2 = Game.convertToNodeSpaceAR(p1);
                node.setPosition(p2);
                node.x += -100 - 100 * Math.random() - 450;
                node.y += 100 * Math.random() - 50;
                node.scale = 1;

                Game.addChild(node);

                cc.tween(node)
                    .by(0.4, { opacity: 150, position: cc.v2(150, 0) })
                    .by(0.4, { opacity: -150, position: cc.v2(150, 0) })
                    .call(() => {
                        node.destroy();
                    })
                    .start()
            }
            else if (this.node.angle == 90) {
                // cc.log("---90----")
                let Game = cc.find("Canvas/gameBg");
                let p1 = this.node.parent.convertToWorldSpaceAR(this.node.getPosition())
                let p2 = Game.convertToNodeSpaceAR(p1);
                node.setPosition(p2);
                node.x += 100 * Math.random() - 50;
                node.y += 100 * Math.random() + 450;
                node.scale = 1;

                Game.addChild(node);

                cc.tween(node)
                    .by(0.4, { opacity: 150, position: cc.v2(0, -150) })
                    .by(0.4, { opacity: -150, position: cc.v2(0, -150) })
                    .call(() => {
                        node.destroy();
                    })
                    .start()
            }
            else {
                let Game = cc.find("Canvas/gameBg");
                let p1 = this.node.parent.convertToWorldSpaceAR(this.node.getPosition())
                let p2 = Game.convertToNodeSpaceAR(p1);
                node.setPosition(p2);
                node.x += -100 - 100 * Math.random() + 450;
                node.y += 100 * Math.random() - 50;
                node.scale = 1;

                Game.addChild(node);
                node.zIndex -= 99;

                cc.tween(node)
                    .by(0.4, { opacity: 150, position: cc.v2(+150, 0) })
                    .by(0.4, { opacity: -150, position: cc.v2(+150, 0) })
                    .call(() => {
                        node.destroy();
                    })
                    .start()
            }
        }
        let hd = Math.PI / 180 * this.node.angle;
        let cos = Math.cos(hd);
        let sin = Math.sin(hd);
        let startPos = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
        let endPos = cc.v2(startPos.x + 1000 * cos, startPos.y + 300 * sin);
        let endPos2 = cc.v2(startPos.x + 1000 * cos, startPos.y + 300 * sin + 100);
        let endPos3 = cc.v2(startPos.x + 1000 * cos, startPos.y + 300 * sin - 100);
        if (this.node.angle == 90) {
            endPos = cc.v2(startPos.x + 300 * cos, startPos.y + 1000 * sin);
            endPos2 = cc.v2(startPos.x + 300 * cos + 100, startPos.y + 1000 * sin);
            endPos3 = cc.v2(startPos.x + 300 * cos - 100, startPos.y + 1000 * sin);
        }
        if (this.node.angle == 92) {
            endPos = cc.v2(startPos.x + 500 * cos, startPos.y + 300 * sin);
            endPos2 = cc.v2(startPos.x + 500 * cos, startPos.y + 300 * sin + 100);
            endPos3 = cc.v2(startPos.x + 500 * cos, startPos.y + 300 * sin - 100);
        }
        let result = cocosz.gameMgr.onRayCast(startPos, endPos);
        let result2 = cocosz.gameMgr.onRayCast(startPos, endPos2);
        let result3 = cocosz.gameMgr.onRayCast(startPos, endPos3);

        // cc.log("--------------------", startPos.x, startPos.y, endPos.x, endPos.y, endPos2.x, endPos2.y, endPos3.x, endPos3.y);
        // if (result.length > 0) {

        //     cc.log("--------------------", result[0].collider.tag);
        // }
        // if (result2.length > 0) {

        //     cc.log("--------------------", result2[0].collider.tag);
        // } if (result3.length > 0) {

        //     cc.log("--------------------", result3[0].collider.tag,);
        // }
        for (let physics of result) {
            let cTag = physics.collider.tag;
            let point = physics.point;
            let d = Math.abs(point.x - startPos.x);
            if (cTag == tag.player || cTag == tag.balloon || cTag == tag.thorn || cTag == tag.honeybee || cTag == tag.stone) {
                // if (this.isFloor == false) {
                if (cTag == tag.stone && cocosz.dataMgr.CurLevelId == 92) break;
                this.isFloor = false;
                let rb = physics.collider.node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                // if (cocosz.dataMgr.CurLevelId == 12 || cocosz.dataMgr.CurLevelId == 30) {
                //     if (v.y < 0) {
                //         v.y = 0
                //     }
                //     v.x += 100;
                // }
                // else if (cocosz.dataMgr.CurLevelId == 51) {
                //     v.y -= 300; v.x = 0
                //     if (cTag == tag.player) {
                //         v.y -= 100
                //     }
                // }
                // else {
                if (this.node.angle == 90) {
                    v.y -= 100
                    rb.linearVelocity = v;
                    if (cocosz.dataMgr.CurLevelId == 101 || cocosz.dataMgr.CurLevelId == 105) {
                        v.y += 150
                    }
                    break
                };
                v.x += 100;
                if (cocosz.dataMgr.CurLevelId == 12) {
                    v.x += 200;
                }
                // }
                rb.linearVelocity = v;
                break;
                // }
            }
            else if (cTag == tag.moveFloor && (d < 250 || cocosz.dataMgr.CurLevelId == 80)) {
                this.isFloor = true;
                return;
            }
            // else if (cTag == tag.stone) {

            //     return;
            // }
            else if (cTag == 0 && (d < 250 || cocosz.dataMgr.CurLevelId == 80)) {
                this.isFloor = true;
                if (cocosz.dataMgr.CurLevelId == 51) {
                    this.isFloor = false;
                }
                break;
            }
        }
        for (let physics of result2) {
            let cTag = physics.collider.tag;
            let point = physics.point;
            let d = Math.abs(point.x - startPos.x);
            if (cTag == tag.player || cTag == tag.balloon || cTag == tag.thorn || cTag == tag.honeybee || cTag == tag.stone) {
                // if (this.isFloor == false) {
                if (cTag == tag.stone && cocosz.dataMgr.CurLevelId == 92) break;

                let rb = physics.collider.node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                // if (cocosz.dataMgr.CurLevelId == 12 || cocosz.dataMgr.CurLevelId == 30) {

                //     if (v.y < 0) {
                //         v.y = 0
                //     }
                //     v.x += 100;
                // }
                // else if (cocosz.dataMgr.CurLevelId == 51) {
                //     v.y -= 300; v.x = 0
                //     if (cTag == tag.player) {
                //         v.y -= 100
                //     }
                // }
                // else {
                if (this.node.angle == 90) {
                    v.y -= 100
                    rb.linearVelocity = v;
                    if (cocosz.dataMgr.CurLevelId == 101 || cocosz.dataMgr.CurLevelId == 105) {
                        v.y += 150
                    }
                    break
                };
                v.x += 100;
                if (cocosz.dataMgr.CurLevelId == 12) {
                    v.x += 200;
                }
                // }
                rb.linearVelocity = v;
                break;
                // }
            }
            else if (cTag == tag.moveFloor && (d < 250 || cocosz.dataMgr.CurLevelId == 80)) {
                this.isFloor = true;
                return;
            }
            else if (cTag == 0 && (d < 250 || cocosz.dataMgr.CurLevelId == 80)) {
                this.isFloor = true;
                if (cocosz.dataMgr.CurLevelId == 51) {
                    this.isFloor = false;
                }
                return;
            }
        }
        for (let physics of result3) {
            let cTag = physics.collider.tag;
            let point = physics.point;
            let d = Math.abs(point.x - startPos.x);
            if (cTag == tag.player || cTag == tag.balloon || cTag == tag.thorn || cTag == tag.honeybee || cTag == tag.stone) {
                // if (this.isFloor == false) {
                if (cTag == tag.stone && cocosz.dataMgr.CurLevelId == 92) break;
                // cc.log(cTag == tag.player)
                let rb = physics.collider.node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                // if (cocosz.dataMgr.CurLevelId == 12 || cocosz.dataMgr.CurLevelId == 30) {
                //     if (v.y < 0) {
                //         v.y = 0
                //     }
                //     v.x += 100;
                // }
                // else if (cocosz.dataMgr.CurLevelId == 51) {
                //     v.y -= 300; v.x = 0;
                //     if (cTag == tag.player) {
                //         v.y -= 100
                //     }
                // }
                // else {
                if (this.node.angle == 90) {
                    v.y -= 100
                    rb.linearVelocity = v;
                    if (cocosz.dataMgr.CurLevelId == 101 || cocosz.dataMgr.CurLevelId == 105) {
                        v.y += 150
                    }
                    break
                };
                v.x += 100;
                if (cocosz.dataMgr.CurLevelId == 12) {
                    v.x += 200;
                }
                // }
                rb.linearVelocity = v;
                break;
                // 
                // }
            }
            else if (cTag == tag.moveFloor && (d < 250 || cocosz.dataMgr.CurLevelId == 80)) {
                this.isFloor = true;
                return;
            }
            else if (cTag == 0 && (d < 250 || cocosz.dataMgr.CurLevelId == 80)) {
                this.isFloor = true;
                if (cocosz.dataMgr.CurLevelId == 51) {
                    this.isFloor = false;
                }
                return;
            }
        }
        this.isFloor = false;
    }

    onFanLeft() {
        if (Math.random() > 0.5 && this.isFloor == false && cocosz.dataMgr.CurLevelId != 11) {
            let prefab = cocosz.resMgr.getRes("fanLiZi", cc.Prefab);
            let node = cc.instantiate(prefab);

            if (this.node.angle == 0) {

                let Game = cc.find("Canvas/gameBg");
                let p1 = this.node.parent.convertToWorldSpaceAR(this.node.getPosition())
                let p2 = Game.convertToNodeSpaceAR(p1);
                node.setPosition(p2);
                node.x += -100 - 100 * Math.random() + 750;
                node.y += 100 * Math.random() - 50;
                node.scale = 1;

                Game.addChild(node);

                cc.tween(node)
                    .by(0.4, { opacity: 150, position: cc.v2(-150, 0) })
                    .by(0.4, { opacity: -150, position: cc.v2(-150, 0) })
                    .call(() => {
                        node.destroy();
                    })
                    .start()

            }
            else if (this.node.angle == 90) {
                // cc.log("---90----")
                let Game = cc.find("Canvas/gameBg");
                let p1 = this.node.parent.convertToWorldSpaceAR(this.node.getPosition())
                let p2 = Game.convertToNodeSpaceAR(p1);
                node.setPosition(p2);
                node.x += 100 * Math.random() - 50;
                node.y += 100 * Math.random() + 100;
                node.scale = 1;

                Game.addChild(node);

                cc.tween(node)
                    .by(0.4, { opacity: 150, position: cc.v2(0, +150) })
                    .by(0.4, { opacity: -150, position: cc.v2(0, +150) })
                    .call(() => {
                        node.destroy();
                    })
                    .start()
            }
            else {
                let Game = cc.find("Canvas/gameBg");
                let p1 = this.node.parent.convertToWorldSpaceAR(this.node.getPosition())
                // cc.log(this.node, "--------------",p1);
                let p2 = Game.convertToNodeSpaceAR(p1);
                node.setPosition(p2);
                node.x += -100 - 100 * Math.random();
                node.y += 100 * Math.random() - 50;
                node.scale = 1;

                // node.zIndex -= 998;
                Game.addChild(node);

                cc.tween(node)
                    .by(0.4, { opacity: 150, position: cc.v2(-150, 0) })
                    .by(0.4, { opacity: -150, position: cc.v2(-150, 0) })
                    .call(() => {
                        node.destroy();
                    })
                    .start()



            }
        }
        let hd = Math.PI / 180 * this.node.angle;
        let cos = Math.cos(hd);
        let sin = Math.sin(hd);
        let startPos = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
        let endPos = cc.v2(startPos.x + 1000 * cos, startPos.y + 300 * sin);
        let endPos2 = cc.v2(startPos.x + 1000 * cos, startPos.y + 300 * sin + 100);
        let endPos3 = cc.v2(startPos.x + 1000 * cos, startPos.y + 300 * sin - 100);
        if (this.node.angle == 92) {
            endPos = cc.v2(startPos.x + 500 * cos, startPos.y + 300 * sin);
            endPos2 = cc.v2(startPos.x + 500 * cos, startPos.y + 300 * sin + 100);
            endPos3 = cc.v2(startPos.x + 500 * cos, startPos.y + 300 * sin - 100);
        }
        let result = cocosz.gameMgr.onRayCast(startPos, endPos);
        let result2 = cocosz.gameMgr.onRayCast(startPos, endPos2);
        let result3 = cocosz.gameMgr.onRayCast(startPos, endPos3);
        // cc.log(startPos.x, startPos.y, endPos.x, endPos.y)
        for (let physics of result) {
            let cTag = physics.collider.tag;
            let point = physics.point;
            let d = Math.abs(point.x - startPos.x);
            if (cTag == tag.player || cTag == tag.balloon || cTag == tag.thorn || cTag == tag.honeybee || cTag == tag.stone) {
                if (cTag == tag.stone && cocosz.dataMgr.CurLevelId == 92) break;
                this.isFloor = false;
                let rb = physics.collider.node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                v.x -= 300;
                if (this.node.angle == 90 && (cocosz.dataMgr.CurLevelId == 101 || cocosz.dataMgr.CurLevelId == 105)) {

                    v.x += 300;
                    if (v.y < 300) {
                        v.y += 300
                    }
                }
                rb.linearVelocity = v;
                break;
            }
            else if (cTag == tag.moveFloor && (d < 250 || cocosz.dataMgr.CurLevelId == 80)) {
                this.isFloor = true;
                return;
            }
            else if (cTag == 0 && (d < 250 || cocosz.dataMgr.CurLevelId == 80)) {
                break;
            }
        }
        for (let physics of result2) {
            let cTag = physics.collider.tag;
            let point = physics.point;
            let d = Math.abs(point.x - startPos.x);
            if (cTag == tag.player || cTag == tag.balloon || cTag == tag.thorn || cTag == tag.honeybee || cTag == tag.stone) {
                if (cTag == tag.stone && cocosz.dataMgr.CurLevelId == 92) break;
                this.isFloor = false;
                let rb = physics.collider.node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                v.x -= 300;
                if (this.node.angle == 90 && (cocosz.dataMgr.CurLevelId == 101 || cocosz.dataMgr.CurLevelId == 105)) {

                    v.x += 300;
                    if (v.y < 300) {
                        v.y += 300
                    }
                }
                rb.linearVelocity = v;
                break;
            }
            else if (cTag == tag.moveFloor && (d < 250 || cocosz.dataMgr.CurLevelId == 80)) {
                this.isFloor = true;
                return;
            }
            else if (cTag == 0 && (d < 250 || cocosz.dataMgr.CurLevelId == 80)) {
                break;
            }
        }
        for (let physics of result3) {
            let cTag = physics.collider.tag;
            let point = physics.point;
            let d = Math.abs(point.x - startPos.x);
            if (cTag == tag.player || cTag == tag.balloon || cTag == tag.thorn || cTag == tag.honeybee || cTag == tag.stone) {
                if (cTag == tag.stone && cocosz.dataMgr.CurLevelId == 92) break;
                this.isFloor = false;
                let rb = physics.collider.node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                v.x -= 300;
                if (this.node.angle == 90 && (cocosz.dataMgr.CurLevelId == 101 || cocosz.dataMgr.CurLevelId == 105)) {

                    v.x += 300;
                    if (v.y < 300) {
                        v.y += 300
                    }
                }
                rb.linearVelocity = v;
                break;
            }
            else if (cTag == tag.moveFloor && (d < 250 || cocosz.dataMgr.CurLevelId == 80)) {
                this.isFloor = true;
                return;
            }
            else if (cTag == 0 && (d < 250 || cocosz.dataMgr.CurLevelId == 80)) {
                break;
            }
        }
        this.isFloor = false;
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.intact = this.node.getChildByName("Intact");
        this.Damaged = this.node.getChildByName("Damaged");

        this.Damaged.active = false;
    }

    start() {
        this.action = cc.tween(this.intact.getChildByName("fanBlade"))
            .by(0.3, { angle: 360 })
            .repeatForever()
            .start()
        // cc.log(this.node.angle)

        // this.schedule(() => {
        //     if (this.node.angle == 0) {
        //         this.onFanRight();
        //     }
        //     else {
        //         this.onFanLeft();
        //     }
        // }, 0.02)
    }

    update(dt) {
        if (this.Damaged.active == true) return;
        if (this.node.angle == 0) {
            if (cocosz.dataMgr.CurLevelId == 10 || cocosz.dataMgr.CurLevelId == 80 || cocosz.dataMgr.CurLevelId == 101 || cocosz.dataMgr.CurLevelId == 105) {

                this.onFanLeft();
                return;
            }
            else if (cocosz.dataMgr.CurLevelId == 92 && this.node.y <= 0) {
                this.onFanLeft();
                return;
            }
            this.onFanRight();
        }
        else {
            if (cocosz.dataMgr.CurLevelId == 30 || cocosz.dataMgr.CurLevelId == 51 || cocosz.dataMgr.CurLevelId == 84 || cocosz.dataMgr.CurLevelId == 114 || cocosz.dataMgr.CurLevelId == 117 || (this.node.angle == 180 && cocosz.dataMgr.CurLevelId == 105) || (this.node.angle == 180 && cocosz.dataMgr.CurLevelId == 101)) {

                this.onFanRight();
                return;
            }
            this.onFanLeft();
        }
    }
}
