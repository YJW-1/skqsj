import { cocosz } from "../Framework/CocosZ";
import { tag } from "../Framework/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class fan extends cc.Component {

    fanBlade: cc.Node = null;
    btn: cc.Node = null;
    btnSelect: cc.Node = null;
    pos: any = null;
    action: any = null;

    isRight: boolean = false;
    isLeft: boolean = false;
    isAnimation: boolean = false;
    anim: cc.Animation = null
    spFrame: cc.SpriteFrame = null
    spCom: cc.Sprite = null;



    isFirstMove = false;

    audioID: any = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.fanBlade = this.node.getChildByName("fanBlade");
        this.btn = this.node.getChildByName("btn");
        this.btnSelect = this.btn.getChildByName("btnSelect");
        this.anim = this.fanBlade.getComponent(cc.Animation);
        this.spFrame = this.fanBlade.getComponent(cc.Sprite).spriteFrame;
        this.spCom = this.fanBlade.getComponent(cc.Sprite);
    }


    onFanRight() {
        if (Math.random() > 0.5) {
            // let prefab = cocosz.resMgr.getRes("fanLiZi", cc.Prefab);
            // let node = cc.instantiate(prefab);
            // let Game = cc.find("Canvas/Game/gameBg");
            // let p1 = this.node.parent.convertToWorldSpaceAR(this.node.getPosition())
            // let p2 = Game.convertToNodeSpaceAR(p1);
            // node.setPosition(p2);
            // node.x += -100 - 100 * Math.random()-300;
            // node.y += 100 * Math.random() - 50;
            // node.scale = 1;
            // Game.addChild(node);
            // node.zIndex -= 99;
            // cc.tween(node)
            //     .by(0.4, { opacity: 150, position: cc.v2(150, 0) })
            //     .by(0.4, { opacity: -150, position: cc.v2(150, 0) })
            //     .call(() => {
            //         node.destroy();
            //     })
            //     .start()

            let prefab = cocosz.resMgr.getRes("fanLiZi", cc.Prefab);
            let node = cc.instantiate(prefab);
            node.x = -30 - 100 * Math.random() - 200;
            node.y = 60 * Math.random() - 30;
            this.node.addChild(node);
            cc.tween(node)
                .by(0.4, { opacity: 150, position: cc.v2(100, 0) })
                .by(0.4, { opacity: -150, position: cc.v2(100, 0) })
                .call(() => {
                    node.destroy();
                })
                .start()
        }
        let hd = Math.PI / 180 * this.node.angle;
        let cos = Math.cos(hd);
        let sin = Math.sin(hd);
        let startPos = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
        let startPos2 = cc.v2(startPos.x, startPos.y + 60);
        let startPos3 = cc.v2(startPos.x, startPos.y - 60);
        let endPos = cc.v2(startPos.x - 1000 * cos, startPos.y + (300 * sin));
        let endPos2 = cc.v2(startPos.x - 1000 * cos, startPos.y + (300 * sin) + 60);
        let endPos3 = cc.v2(startPos.x - 1000 * cos, startPos.y + (300 * sin) - 60);

        if (cocosz.dataMgr.CurLevelId == 14) {
            endPos = cc.v2(startPos.x - 1500 * cos, startPos.y + (300 * sin));
            endPos2 = cc.v2(startPos.x - 1500 * cos, startPos.y + (300 * sin) + 60);
            endPos3 = cc.v2(startPos.x - 1500 * cos, startPos.y + (300 * sin) - 60);
        }
        if (cocosz.dataMgr.CurLevelId == 103) {
            endPos = cc.v2(startPos.x - 1500 * cos, startPos.y + (300 * sin));
            endPos2 = cc.v2(startPos.x - 1500 * cos, startPos.y + (300 * sin) + 60);
            endPos3 = cc.v2(startPos.x - 1500 * cos, startPos.y + (300 * sin) - 60);
        }
        let result = cocosz.gameMgr.onRayCast(startPos, endPos);
        let result2 = cocosz.gameMgr.onRayCast(startPos2, endPos2);
        let result3 = cocosz.gameMgr.onRayCast(startPos3, endPos3);


        // //cc.log(cos, sin, "onFanRight", startPos.x, startPos.y, endPos.x, endPos.y, endPos2.x, endPos2.y, endPos3.x, endPos3.y);
        //cc.log(result2[0].collider.tag, result[0].collider.tag, result3[0].collider.tag, "----------------TAG");


        for (let physics of result) {
            let cTag = physics.collider.tag;
            if (cTag == tag.thorn || cTag == tag.honeybee) {
                let rb = physics.collider.node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                v.x += 20 * cos;
                if (v.x <= 400 * cos) {
                    v.x += 10 * cos;
                }
                if (cocosz.dataMgr.CurLevelId == 73 && cTag == tag.honeybee) {
                    v.x += 500 * cos;
                    v.y = 0;
                    let node = physics.collider.node;
                    let sc = node.getComponent("propHoneybee");
                    sc.isFan = true;
                    physics.collider.restitution = 0;
                }


                if (cocosz.dataMgr.CurLevelId == 103 && cTag == tag.thorn) {
                    v.x += 1000 * cos;
                }
                rb.linearVelocity = v;
            }
            else if (cTag == tag.stone || cTag == tag.stone3 || cTag == tag.cloud) {

                let rb = physics.collider.node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                v.x += 15 * cos;
                if (v.x <= 400 * cos) {
                    v.x += 15 * cos;

                }
                rb.linearVelocity = v;
                return;
            }
            else if (cTag == 0) {
                //cc.log("-------------return")
                break;
            }
            else if (cTag == tag.player || cTag == tag.rope || cTag == tag.balloon) {
                let rb = physics.collider.node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                v.x += 5 * cos;
                if (cTag == tag.rope) {
                    v.x += 10 * cos;

                }
                rb.linearVelocity = v;
            }
        }
        for (let physics of result2) {
            let cTag = physics.collider.tag;
            if (cTag == tag.thorn || cTag == tag.honeybee) {
                let rb = physics.collider.node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                v.x += 20 * cos;
                if (v.x <= 400 * cos) {
                    v.x += 10 * cos;

                }
                if (cocosz.dataMgr.CurLevelId == 73 && cTag == tag.honeybee) {
                    v.x += 500 * cos;
                    v.y = 0;
                    let node = physics.collider.node;
                    let sc = node.getComponent("propHoneybee");
                    sc.isFan = true;
                    physics.collider.restitution = 0;
                }

                if (v.x <= 700 && cocosz.dataMgr.CurLevelId == 40) {
                    v.x += 100 * cos;

                }
                if (cocosz.dataMgr.CurLevelId == 103 && cTag == tag.thorn) {
                    v.x += 1000 * cos;
                }
                rb.linearVelocity = v;
            }
            else if (cTag == tag.stone || cTag == tag.stone3 || cTag == tag.cloud) {

                let rb = physics.collider.node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                v.x += 15 * cos;
                if (v.x <= 400 * cos) {
                    v.x += 15 * cos;

                }

                if (v.x <= 700 && cocosz.dataMgr.CurLevelId == 40) {
                    v.x += 100 * cos;

                }
                rb.linearVelocity = v;
                return;
            }
            else if (cTag == 0) {
                break;
            }
            else if (cTag == tag.player || cTag == tag.rope || cTag == tag.balloon) {
                let rb = physics.collider.node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                v.x += 5 * cos;
                if (cTag == tag.rope) {
                    v.x += 10 * cos;

                }
                rb.linearVelocity = v;
            }
        }
        for (let physics of result3) {
            let cTag = physics.collider.tag;
            if (cTag == tag.thorn || cTag == tag.honeybee) {
                let rb = physics.collider.node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                v.x += 20 * cos;
                if (v.x <= 400 * cos) {
                    v.x += 10 * cos;

                }
                if (cocosz.dataMgr.CurLevelId == 73 && cTag == tag.honeybee) {
                    v.x += 500 * cos;
                    v.y = 0;
                    let node = physics.collider.node;
                    let sc = node.getComponent("propHoneybee");
                    sc.isFan = true;
                    physics.collider.restitution = 0;
                }

                if (v.x <= 700 && cocosz.dataMgr.CurLevelId == 40) {
                    v.x += 100 * cos;

                }
                if (cocosz.dataMgr.CurLevelId == 103 && cTag == tag.thorn) {
                    v.x += 1000 * cos;
                }
                rb.linearVelocity = v;
            }
            else if (cTag == tag.stone || cTag == tag.stone3 || cTag == tag.cloud) {

                let rb = physics.collider.node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                v.x += 15 * cos;
                if (v.x <= 400 * cos) {
                    v.x += 15 * cos;

                }
                rb.linearVelocity = v;
                return;
            }
            else if (cTag == 0) {
                break;
            }
            else if (cTag == tag.player || cTag == tag.rope || cTag == tag.balloon) {
                let rb = physics.collider.node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                v.x += 5 * cos;
                if (cTag == tag.rope) {
                    v.x += 10 * cos;

                }
                rb.linearVelocity = v;
            }
        }
    }

    onFanLeft() {
        if (Math.random() > 0.5) {
            // let prefab = cocosz.resMgr.getRes("fanLiZi", cc.Prefab);
            // let node = cc.instantiate(prefab);

            // let Game = cc.find("Canvas/Game/gameBg");
            // let p1 = this.node.parent.convertToWorldSpaceAR(this.node.getPosition())
            // let p2 = Game.convertToNodeSpaceAR(p1);
            // node.setPosition(p2);
            // node.x += -100 - 100 * Math.random();
            // node.y += 100 * Math.random() - 50;
            // node.scale = 1;

            // Game.addChild(node);
            // node.zIndex -= 99;

            // cc.tween(node)
            //     .by(0.4, { opacity: 150, position: cc.v2(-150, 0) })
            //     .by(0.4, { opacity: -150, position: cc.v2(-150, 0) })
            //     .call(() => {
            //         node.destroy();
            //     })
            //     .start()
            let prefab = cocosz.resMgr.getRes("fanLiZi", cc.Prefab);
            let node = cc.instantiate(prefab);
            node.x = -30 - 100 * Math.random();
            node.y = 60 * Math.random() - 30;
            this.node.addChild(node);
            cc.tween(node)
                .by(0.4, { opacity: 150, position: cc.v2(-100, 0) })
                .by(0.4, { opacity: -150, position: cc.v2(-100, 0) })
                .call(() => {
                    node.destroy();
                })
                .start()
        }
        let hd = Math.PI / 180 * this.node.angle;
        let cos = Math.cos(hd);
        let sin = Math.sin(hd);
        let startPos = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
        let startPos2 = cc.v2(startPos.x, startPos.y + 60);
        let startPos3 = cc.v2(startPos.x, startPos.y - 60);
        let endPos = cc.v2(startPos.x - 1000 * cos, startPos.y + (300 * sin));
        let endPos2 = cc.v2(startPos.x - 1000 * cos, startPos.y + (300 * sin) + 60);
        let endPos3 = cc.v2(startPos.x - 1000 * cos, startPos.y + (300 * sin) - 60);

        if (cocosz.dataMgr.CurLevelId == 14) {
            endPos = cc.v2(startPos.x - 1500 * cos, startPos.y + (300 * sin));
            endPos2 = cc.v2(startPos.x - 1500 * cos, startPos.y + (300 * sin) + 60);
            endPos3 = cc.v2(startPos.x - 1500 * cos, startPos.y + (300 * sin) - 60);
        }
        let result = cocosz.gameMgr.onRayCast(startPos, endPos);
        let result2 = cocosz.gameMgr.onRayCast(startPos2, endPos2);
        let result3 = cocosz.gameMgr.onRayCast(startPos3, endPos3);
        // cc.log(cos, sin, "onFanLeft", startPos.x, startPos.y, endPos.x, endPos.y, endPos2.x, endPos2.y, endPos3.x, endPos3.y);
        // //cc.log(result2[0].collider.tag, result[0].collider.tag, result3[0].collider.tag, "----------------TAG")
        // let prefab = cocosz.resMgr.getRes("rope", cc.Prefab);

        // let node1 = cc.instantiate(prefab);
        // let node2 = cc.instantiate(prefab);
        // let node3 = cc.instantiate(prefab);

        // this.node.addChild(node1);
        // this.node.addChild(node2);
        // this.node.addChild(node3);


        // node1.setPosition(this.node.convertToNodeSpaceAR(startPos))
        // node2.setPosition(this.node.convertToNodeSpaceAR(startPos2))
        // node3.setPosition(this.node.convertToNodeSpaceAR(startPos3))
        for (let physics of result) {
            let cTag = physics.collider.tag;
            if (cTag == tag.thorn || cTag == tag.honeybee) {
                let rb = physics.collider.node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                v.x -= 20 * cos;
                if (v.x >= -400 * cos) {
                    v.x -= 10 * cos;

                }
                if (cocosz.dataMgr.CurLevelId == 58 && cTag == tag.thorn) {
                    v.x -= 150 * cos;
                }
                rb.linearVelocity = v;
            }
            else if (cTag == tag.stone || cTag == tag.stone3 || cTag == tag.cloud) {
                let rb = physics.collider.node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                v.x -= 15 * cos;
                if (v.x >= -400 * cos) {
                    v.x -= 15 * cos;
                }
                rb.linearVelocity = v;
                return;
            }
            else if (cTag == 0) {
                break;
            }
            else if (cTag == tag.player || cTag == tag.rope || cTag == tag.balloon) {
                let rb = physics.collider.node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                v.x -= 5 * cos;
                if (cTag == tag.rope) {
                    v.x -= 10 * cos;

                }
                rb.linearVelocity = v;
            }
        }
        for (let physics of result2) {
            let cTag = physics.collider.tag;
            if (cTag == tag.thorn || cTag == tag.honeybee) {
                let rb = physics.collider.node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                v.x -= 20 * cos;
                if (cocosz.dataMgr.CurLevelId == 73 && cTag == tag.honeybee) {
                    v.x -= 1000 * cos;
                }
                if (v.x >= -400 * cos) {
                    v.x -= 10 * cos;
                }
                if (cocosz.dataMgr.CurLevelId == 58 && cTag == tag.thorn) {
                    v.x -= 150 * cos;
                }
                rb.linearVelocity = v;
            }
            else if (cTag == tag.stone || cTag == tag.stone3 || cTag == tag.cloud) {

                let rb = physics.collider.node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                v.x -= 15 * cos;
                if (v.x >= -400 * cos) {
                    v.x -= 15 * cos;

                }
                rb.linearVelocity = v;
                return;
            }
            else if (cTag == 0) {
                break;
            }
            else if (cTag == tag.player || cTag == tag.rope || cTag == tag.balloon) {
                let rb = physics.collider.node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                v.x -= 5 * cos;
                if (cTag == tag.rope) {
                    v.x -= 10 * cos;

                }
                rb.linearVelocity = v;
            }
        }
        for (let physics of result3) {
            let cTag = physics.collider.tag;
            if (cTag == tag.thorn || cTag == tag.honeybee) {
                let rb = physics.collider.node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                v.x -= 20 * cos;
                if (v.x >= -400 * cos) {
                    v.x -= 10 * cos;
                }
                if (cocosz.dataMgr.CurLevelId == 58 && cTag == tag.thorn) {
                    v.x -= 150 * cos;
                }
                rb.linearVelocity = v;
            }
            else if (cTag == tag.stone || cTag == tag.stone3 || cTag == tag.cloud) {
                let rb = physics.collider.node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                v.x -= 15 * cos;
                if (v.x >= -400 * cos) {
                    v.x -= 15 * cos;
                }
                rb.linearVelocity = v;
                return;
            }
            else if (cTag == 0) {
                break;
            }
            else if (cTag == tag.player || cTag == tag.rope || cTag == tag.balloon) {
                let rb = physics.collider.node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                v.x -= 5 * cos;
                if (cTag == tag.rope) {
                    v.x -= 10 * cos;

                }
                rb.linearVelocity = v;
            }
        }
    }
    // onFanOpen() {
    //     this.schedule(() => {
    //     }, 0.02)
    // }

    onFanClose() {
        this.unscheduleAllCallbacks();
    }
    start() {
        this.btn.on(cc.Node.EventType.TOUCH_START, (event) => {
            if (this.action) {
                this.action.stop()
            }
            let pos = this.btn.parent.convertToNodeSpaceAR(event.getLocation());
            this.pos = pos;
            this.btnSelect.active = true;
        })
        this.btn.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            if (this.action) {
                this.action.stop()
            }
            let pos = this.btn.parent.convertToNodeSpaceAR(event.getLocation());
            let dis = this.pos.x - pos.x;
            this.pos = pos;
            let x = 0 + this.btn.x;
            if (x - dis <= 22 && x - dis >= 0) {
                this.btn.x = x - dis;

                if (!this.isRight && !this.isLeft) {
                    if (this.btn.x <= 22 && this.btn.x >= 20) {
                        this.isRight = true;
                        if (!this.isFirstMove && cocosz.dataMgr.AudioEffectOn) {
                            this.isFirstMove = true;
                            let clip: cc.AudioClip = cocosz.resMgr.getRes("mFan", cc.AudioClip);
                            this.audioID = cc.audioEngine.play(clip, true, 0.7)
                        }
                    }
                    else if (this.btn.x <= 2 && this.btn.x >= 0) {
                        this.isLeft = true;
                        if (!this.isFirstMove && cocosz.dataMgr.AudioEffectOn) {
                            this.isFirstMove = true;
                            let clip: cc.AudioClip = cocosz.resMgr.getRes("mFan", cc.AudioClip);
                            this.audioID = cc.audioEngine.play(clip, true, 0.7)
                        }
                    }
                }
            }
        })
        this.btn.on(cc.Node.EventType.TOUCH_CANCEL, (event) => {
            this.onFanClose()
            this.anim.stop();
            this.spCom.spriteFrame = this.spFrame;
            this.isAnimation = false;
            this.isRight = false;
            this.isLeft = false;
            this.action = cc.tween(this.btn)
                .to(0.3, { position: cc.v2(11, 0) })
                .start()
            this.btnSelect.active = false;
            this.isFirstMove = false;

            if (this.audioID) {
                cc.audioEngine.stop(this.audioID);
            }

        })
        this.btn.on(cc.Node.EventType.TOUCH_END, (event) => {
            this.onFanClose()
            this.anim.stop();
            this.isAnimation = false;
            this.isRight = false;
            this.isLeft = false;
            this.action = cc.tween(this.btn)
                .to(0.3, { position: cc.v2(11, 0) })
                .start()
            this.btnSelect.active = false;
            this.isFirstMove = false;

            if (this.audioID) {
                cc.audioEngine.stop(this.audioID);
            }

        })
    }

    update(dt) {
        if (this.isLeft || this.isRight) {
            // this.isLeft = true
            // this.onFanOpen();
            if (this.isRight) {
                this.onFanRight();
            }
            else {
                this.onFanLeft();
            }
            if (!this.isAnimation) {
                this.anim.play()
            };
            this.isAnimation = true;
        }
    }
}
