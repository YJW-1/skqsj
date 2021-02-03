import { cocosz } from "../Framework/CocosZ";
import Constant, { tag } from "../Framework/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class propMoveFloor2 extends cc.Component {

    minDistance: number = 0;
    maxDistance: number = 0;
    pos: any = 0;
    floor: cc.Node = null;
    role: cc.Node = null;
    btn: cc.Node = null;
    btnSelect: cc.Node = null;
    isStop: boolean = false;
    isFirstMove = false;
    onInitDistance() {
        // let d1 = this.node.parent.getChildByName("limit1").x
        // let d2 = this.node.parent.getChildByName("limit2").x
        // if (this.node.angle == 90) {
        //     d1 = this.node.parent.getChildByName("limit1").y
        //     d2 = this.node.parent.getChildByName("limit2").y
        // }
        // let rope = this.node.parent.getChildByName("rope");
        // if (d1 > d2) {
        //     this.minDistance = d2 + 115;
        //     this.maxDistance = d1 - 115;
        // }
        // else {
        //     this.minDistance = d1 + 115;
        //     this.maxDistance = d2 - 115;
        // }
        if (this.node.angle == 0 || this.node.angle == 180) {
            this.minDistance = this.floor.x;
            this.maxDistance = -this.floor.x;
        }
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.btn = this.node.getChildByName("btn");
        this.floor = this.node.getChildByName("floor");
        this.btnSelect = this.btn.getChildByName("btnSelect");
    }


    onCollisionEnter(other, self) {
    }
    onCollisionExit(other, self) {
    }
    start() {
        this.onInitDistance()
        this.node.on(cc.Node.EventType.TOUCH_START, (event) => {
            let pp = event.getLocation();

            pp.y += 1600 * cocosz.gameMgr.touchNum;
            let pos2 = this.node.parent.convertToNodeSpaceAR(pp);
            let pos = cc.v2((Math.ceil(this.node.x - pos2.x)), Math.ceil(this.node.y - pos2.y));
            this.pos = pos;
            this.btnSelect.active = true;
        })
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            let pp = event.getLocation();

            pp.y += 1600 * cocosz.gameMgr.touchNum;
            let pos2 = this.node.parent.convertToNodeSpaceAR(pp);
            let pos = cc.v2(this.node.x - pos2.x, this.node.y - pos2.y);
            let hd = pos.signAngle(this.pos);
            let angle = Math.ceil(hd / Math.PI * 180);
            this.pos = pos;

            this.btn.angle -= angle;
            let dis = this.floor.x + angle * 0.1;

            // cc.log(angle, dis, "-------------angle");
            if (angle == 0 || angle == -0) return
            if (dis >= this.minDistance && dis <= this.maxDistance) {
                this.floor.x = dis;
            }
            return;
            if (this.node.angle == 0) {

                let dis = this.pos.x - pos.x;
                this.pos = pos;
                let x = 0 + this.node.x;
                if (this.role) {
                    let pos2 = this.node.convertToWorldSpaceAR(this.role.getPosition())
                    let pos = this.node.parent.convertToNodeSpaceAR(pos2);
                    // cc.log(this.node.x, pos.x, dis,this.node.y - pos.y);
                    if (this.isStop && this.node.y - pos.y <= 50) {
                        if (this.node.x >= pos.x && dis > 0) {
                            return;
                        }
                        if (this.node.x <= pos.x && dis < 0) {
                            return;
                        }
                    }
                }
                if (x - dis <= this.maxDistance && x - dis >= this.minDistance) {
                    this.node.x = x - dis;
                }
            }
            else {

                let dis = this.pos.y - pos.y;
                this.pos = pos;
                let y = 0 + this.node.y;
                if (this.role) {
                    let pos2 = this.node.convertToWorldSpaceAR(this.role.getPosition())
                    let pos = this.node.parent.convertToNodeSpaceAR(pos2);
                    // cc.log(this.node.x, pos.x, dis,this.node.y - pos.y);
                    // if (this.isStop && this.node.y - pos.y <= 50) {
                    //     if (this.node.x >= pos.x && dis > 0) {
                    //         return;
                    //     }
                    //     if (this.node.x <= pos.x && dis < 0) {
                    //         return;
                    //     }
                    // }
                }
                if (y - dis <= this.maxDistance && y - dis >= this.minDistance) {
                    this.node.y = y - dis;
                }
            }
        })
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, (event) => {
            this.btnSelect.active = false;
            // this.isFirstMove = false;
        })
        this.node.on(cc.Node.EventType.TOUCH_END, (event) => {
            this.btnSelect.active = false;
            // this.isFirstMove = false;
        })
    }

    // update (dt) {}
}
