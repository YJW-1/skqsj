import { cocosz } from "../Framework/CocosZ";
import Constant, { tag } from "../Framework/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class propMoveFloor extends cc.Component {
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

    onRayCast(num1, num2) {
        let startPos = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
        let endPos = cc.v2(startPos.x + 1000 * num1, startPos.y + 1000 * num2);
        let result = cocosz.gameMgr.onRayCast(startPos, endPos);
        return result;
    }



    onInitDistance() {
        let d1 = this.node.parent.getChildByName("limit1").y
        let d2 = this.node.parent.getChildByName("limit2").y
        let limit = this.node.parent.getChildByName("limit2")
        let scaleX = this.node.parent.getChildByName("limit2").scaleX
        if (this.node.angle == 90) {

            d1 = this.node.parent.getChildByName("limit1").x
            d2 = this.node.parent.getChildByName("limit2").x
        }
        let rope = this.node.parent.getChildByName("rope");
        if (d1 > d2) {
            this.minDistance = d2 + (this.node.width * this.node.scaleX + 30);
            this.maxDistance = d1 - (this.node.width * this.node.scaleX + 30);
        }
        else {
            this.minDistance = d1 + (this.node.width * this.node.scaleX + 30);
            this.maxDistance = d2 - (this.node.width * this.node.scaleX + 30);
        }
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
                        cocosz.audioMgr.playMoveFloorEffect();
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
                        cocosz.audioMgr.playMoveFloorEffect();
                    }
                }
            }
        })
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, (event) => {
            this.floor.active = false;
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
            if (this.moveDis <= 5 && !this.isLaunch) {
                this.isLaunch = true;
                // let r = Math.PI * 180 / this.rocket.angle;
                // let x = Math.cos(r);
                // let y = Math.sin(r);
                let rb = this.rocket.addComponent(cc.RigidBody);
                rb.enabledContactListener = true
                rb.type = cc.RigidBodyType.Kinematic;

                let boxPhy = this.rocket.addComponent(cc.PhysicsBoxCollider);
                boxPhy.tag = 31;
                boxPhy.size.width = 60;
                boxPhy.size.height = 30;
                boxPhy.sensor = true;
                boxPhy.apply();


                let v = rb.linearVelocity;
                v.x = 1000 * this.rocket.scaleX / 3;
                if (cocosz.dataMgr.CurLevelId == 38 || cocosz.dataMgr.CurLevelId == 121 || (cocosz.dataMgr.CurLevelId == 128 && this.node.angle == 90)) {
                    v.x = 0;
                    v.y = -1000;
                }
                rb.linearVelocity = v;
            }
            this.moveDis = 0;
        })
    }

    update(dt) {
        // if (this.isTouch) return;
        // if (this.x > -999) {
        //     if (this.x > this.node.x) {
        //         let v = this.rb.linearVelocity;
        //         v.x = 100;
        //     }
        // }
    }
}
