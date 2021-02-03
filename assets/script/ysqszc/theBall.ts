// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { cocosz } from "../Framework/CocosZ";
import Constant, { tag } from "../Framework/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class theBall extends cc.Component {


    @property(cc.Node)
    ball: cc.Node = null;

    @property(cc.Node)
    camera: cc.Node = null;

    @property(cc.Node)
    listen: cc.Node = null;

    @property(cc.RigidBody)
    rb: cc.RigidBody = null

    @property(cc.ParticleSystem)
    particle: cc.ParticleSystem = null


    pos: any = null;

    isMove: boolean = false;

    moveNum: number = 0;

    onBeginContact(contact, self, other) {
        cc.log(other.tag, other.node.name, other.node.parent.name,)
        if (other.tag == tag.balloon || other.tag == tag.player || other.tag == tag.rope) {
            // contact.disabled = true;

            let v = this.rb.linearVelocity;
            v.x = 0;
            v.y = 0;
            this.rb.linearVelocity = v;
        }
        else if (other.tag == tag.stone || other.tag == tag.thorn || other.tag == tag.bat || other.node.name == "wooldenBox3") {
            // cc.log(other.node.getComponent(cc.RigidBody).gravityScale, "---------other.gravityScale")

            if (other.node.getComponent(cc.RigidBody).gravityScale == 0) {
                other.node.getComponent(cc.RigidBody).gravityScale = 1;
            }
            if (other.node.getComponent(cc.RigidBody).type == cc.RigidBodyType.Kinematic) {
                // cc.log(other.node);
                // if(other.tag=="")
                // return
                cocosz.scheduleOnce(() => {
                    // cc.log(other.node);
                    if (!other.node) return
                    other.node.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic;
                    if (other.node.name == "sBoard") {
                        other.node.getComponent(cc.PhysicsBoxCollider).apply()
                    }
                }, 0.1)
            }
        }
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        // this.listen.zIndex += 9999;
        this.listen.on(cc.Node.EventType.TOUCH_START, (event: cc.Touch) => {
            if (+cocosz.dataMgr.isNovice == 0) return;
            // cc.game.emit(Constant.E_GAME_START);
        }, this)

        this.listen.on(cc.Node.EventType.TOUCH_MOVE, (event: cc.Touch) => {
            let pos = event.getDelta();
            // this.ball.x += pos.x;
            // this.ball.y += pos.y
            if (((this.ball.x < -cc.winSize.width / 2 + 50) && pos.x < 0) || ((this.ball.x > cc.winSize.width / 2 - 50) && pos.x > 0)) return
            if (((this.ball.y < -cc.winSize.height / 2 + 50) && pos.y < 0) || ((this.ball.y > cc.winSize.height / 2 - 50) && pos.y > 0)) return
            let v = this.rb.linearVelocity;
            // cc.log(v.x, v.y)
            v.x = pos.x * 130;
            v.y = pos.y * 130;
            // cc.log(v.x, v.y)
            this.rb.linearVelocity = v
            // if (this.isMove) return;

            this.isMove = true
            this.moveNum++;



            // if (this.moveNum > 3) {
            //     this.moveNum = 0;
            //     this.particle.resetSystem();
            // }
            // this.schedule(() => {
            //     this.particle.resetSystem();
            // }, 1)

        }, this)

        this.listen.on(cc.Node.EventType.TOUCH_END, (event: cc.Touch) => {

            this.isMove = false
            this.rb.linearVelocity = cc.v2(0, 0)
        }, this)

        this.listen.on(cc.Node.EventType.TOUCH_CANCEL, (event: cc.Touch) => {

            this.isMove = false
            this.rb.linearVelocity = cc.v2(0, 0)
        }, this)

        this.pos = this.camera.getPosition();


    }

    lateUpdate(dt) {
        // if (!this.isMove) {
        let v = this.rb.linearVelocity;

        if (v.x != 0 || v.y != 0) {

            let prefab = cocosz.resMgr.getRes("ballParticle", cc.Prefab);
            let node = cc.instantiate(prefab);
            // node.x -= 10;
            // node.y += 10
            this.node.addChild(node);
            node.zIndex -= 100;
        }

        this.rb.linearVelocity = cc.v2(0, 0)
        // }
        // let x = this.camera.x - this.pos.x;
        // let y = this.camera.y - this.pos.y;
        // this.ball.x += x; this.ball.y += y;
        // this.pos = this.camera.getPosition();

        // this.ball.y += 0.000000001;
        // if (cocosz.sceneMgr.sceneName == "Game2") {
        //     if (this.node.y <= -3000 || Math.abs(this.node.x) > 500) {
        //         this.node.destroy()
        //         return
        //     };
        // }
    }
}
