// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { cocosz } from "../Framework/CocosZ";

const { ccclass, property } = cc._decorator;

@ccclass
export default class rewardRocket extends cc.Component {
    minDistance: number = 0;
    maxDistance: number = 0;
    pos: any = 0;
    floor: cc.Node = null;
    role: cc.Node = null;
    isStop: boolean = false;

    isTouch: boolean = false;


    endPos: number = 0;

    x: number = -9999;

    y: number = -9999;

    rb: cc.RigidBody = null

    isFirstMove = false;

    moveDis: number = 0;

    rocket: cc.Node = null


    isLaunch: boolean = false;

    onInitDistance() {
        this.minDistance = -435
        this.maxDistance = 430
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        this.floor = this.node.getChildByName("floor");
        this.rocket = this.node.getChildByName("rocket");
        this.rb = this.node.getComponent(cc.RigidBody);
    }

    start() {
        this.onInitDistance();
        this.node.on(cc.Node.EventType.TOUCH_START, (event) => {
            let pos = this.node.parent.convertToNodeSpaceAR(event.getLocation());
            this.pos = pos;
            this.node.getChildByName("floor").active = true;
            this.isTouch = true;
        })
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            // cc.game.emit(Constant.E_TIPS_NEXT)
            let pos = this.node.parent.convertToNodeSpaceAR(event.getLocation());
            if (this.node.angle == 90) {

                let dis = this.pos.x - pos.x;
                this.pos = pos;
                let x = 0 + this.node.x;

                if (x - dis <= this.maxDistance && x - dis >= this.minDistance) {
                    if (!this.isFirstMove) {
                        this.isFirstMove = true;
                    }
                    this.node.x = x - dis;
                    this.moveDis++;
                }
            }
            else {
                let dis = this.pos.y - pos.y;
                this.pos = pos;
                let y = 0 + this.node.y;
                // cc.log(y - dis, this.maxDistance, this.minDistance)
                if (y - dis <= this.maxDistance && y - dis >= this.minDistance) {
                    this.node.y = y - dis;
                    this.moveDis++;
                    // let pp = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
                    // let pp2 = this.node.convertToNodeSpaceAR(pp);
                    // this.rocket.setPosition(pp2);
                    // this.rocket.y = this.node.y * this.node.scaleY
                    if (!this.isFirstMove) {
                        this.isFirstMove = true;
                    }
                }
            }
        })
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, (event) => {
            if (this.floor) {
                this.floor.active = false;
            }
            this.isTouch = false;
            this.isFirstMove = false;
            this.moveDis = 0;
        })
        this.node.on(cc.Node.EventType.TOUCH_END, (event) => {
            if (this.floor) {
                this.floor.active = false;
            }
            this.isTouch = false;
            this.isFirstMove = false;
            this.moveDis = 0;
        })


        this.schedule(() => {
            let node = cc.instantiate(this.rocket);
            this.rocket.parent.addChild(node);
            let rb = node.addComponent(cc.RigidBody);
            rb.enabledContactListener = true
            rb.type = cc.RigidBodyType.Kinematic;

            let boxPhy = node.addComponent(cc.PhysicsBoxCollider);
            boxPhy.tag = 31;
            boxPhy.size.width = 60;
            boxPhy.size.height = 30;
            boxPhy.apply();


            let v = rb.linearVelocity;
            v.y = 1000;
            rb.linearVelocity = v;
        }, 0.3)
    }

    update(dt) {

        if (cocosz.gameMgr.isGameOver) {
            this.unscheduleAllCallbacks()
        }
    }
}
