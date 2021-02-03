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
    btn: cc.Node = null;
    btnSelect: cc.Node = null;
    isStop: boolean = false;
    isFirstMove = false;



    onInitDistance() {
        if (cocosz.dataMgr.CurLevelId == 5) {
            this.minDistance = -158;
            this.maxDistance = -70;
        }
        if (cocosz.dataMgr.CurLevelId == 114 || cocosz.dataMgr.CurLevelId == 115 || cocosz.dataMgr.CurLevelId == 117) {
            this.minDistance = -175;
            this.maxDistance = -20;
        }
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.btn = this.node.getChildByName("btn");
        this.floor = this.node.getChildByName("floor");
        this.btnSelect = this.btn.getChildByName("btnSelect");
        cc.log(this.floor.x, this.floor.y)
    }



    start() {
        this.onInitDistance();
        this.btn.on(cc.Node.EventType.TOUCH_START, (event) => {
            let pos2 = this.node.parent.convertToNodeSpaceAR(event.getLocation());
            let pos = cc.v2((Math.ceil(this.node.x - pos2.x)), Math.ceil(this.node.y - pos2.y));
            this.pos = pos;
            this.btnSelect.active = true;
        })
        this.btn.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            let pos2 = this.node.parent.convertToNodeSpaceAR(event.getLocation());
            let pos = cc.v2(this.node.x - pos2.x, this.node.y - pos2.y);
            let hd = pos.signAngle(this.pos);
            let angle = Math.ceil(hd / Math.PI * 180);
            this.pos = pos;

            this.btn.angle -= angle;
            let dis = 0;
            if (this.floor) {
                dis = this.floor.y + angle * 0.1;
            }

            // cc.log(angle, dis, this.floor.y, "-------------angle");
            if (angle == 0 || angle == -0) return
            if (dis >= this.minDistance && dis <= this.maxDistance) {
                if (this.floor) {
                    this.floor.y = dis;
                }
            }
        })
        this.btn.on(cc.Node.EventType.TOUCH_CANCEL, (event) => {
            this.btnSelect.active = false;
        })
        this.btn.on(cc.Node.EventType.TOUCH_END, (event) => {
            this.btnSelect.active = false;
        })

        if (cocosz.dataMgr.CurLevelId == 5) {
            this.node.getChildByName("direction").scaleX *= -1;
        }
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
