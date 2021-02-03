import { cocosz } from "../Framework/CocosZ";
import { tag } from "../Framework/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class propMoveFloor10 extends cc.Component {

    minAngle: number = 0;
    maxAngle: number = 0;
    pos: any = 0;
    floor: cc.Node = null;
    role: cc.Node = null;
    btn: cc.Node = null;
    btnSelect: cc.Node = null;
    isStop: boolean = false;
    onInitDistance() {
        if (cocosz.dataMgr.CurLevelId == 44) {
            this.minAngle = -55;
            this.maxAngle = 90;
        }
        else if (cocosz.dataMgr.CurLevelId == 74) {
            this.minAngle = -180;
            this.maxAngle = -90;
        }
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.btnSelect = this.node.getChildByName("btn").getChildByName("btnSelect");
        this.btn = this.node.getChildByName("btn");
        this.floor = this.node.getChildByName("floor");
    }


    start() {
        this.onInitDistance();
        this.node.on(cc.Node.EventType.TOUCH_START, (event: cc.Touch) => {
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

            // cc.log(pos.x, pos.y, angle)
            if (angle == 0 || angle == -0) return;
            if (cocosz.dataMgr.CurLevelId == 44 || cocosz.dataMgr.CurLevelId == 74) {
                // cc.log(this.floor.angle, this.minAngle, this.maxAngle, angle)

                if (this.floor) {
                    if ((this.floor.angle <= this.minAngle && angle > 0) || (this.floor.angle >= this.maxAngle && angle < 0)) return;
                }
            }


            let rb = null
            if (this.floor) {
                rb = this.floor.getComponent(cc.RigidBody);
            }
            rb.angularVelocity = 30 * angle / Math.abs(angle);
            // if (cocosz.dataMgr.CurLevelId == 85) {

            //     rb.angularVelocity = 70 * angle / Math.abs(angle);
            // }
            // cc.log(angle, rb.angularVelocity, "----------")
        })
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, (event) => {
            this.btnSelect.active = false;
        })
        this.node.on(cc.Node.EventType.TOUCH_END, (event) => {
            this.btnSelect.active = false;
        })
    }

    // update (dt) {}
}
