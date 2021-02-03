import { cocosz } from "../Framework/CocosZ";
import { tag } from "../Framework/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class propMoveFloor10 extends cc.Component {

    minDistance: number = 0;
    maxDistance: number = 0;
    pos: any = 0;
    floor: cc.Node = null;
    role: cc.Node = null;
    isStop: boolean = false;
    onInitDistance() {
        if (cocosz.dataMgr.CurLevelId == 13) {
            this.minDistance = -155;
            this.maxDistance = 175;
        }
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.floor = this.node.getChildByName("btn").getChildByName("btnSelect");
    }


    start() {
        this.onInitDistance()
        this.node.on(cc.Node.EventType.TOUCH_START, (event) => {
            let pos = this.node.parent.convertToNodeSpaceAR(event.getLocation());
            this.pos = pos;
            if (this.floor) {
                this.floor.active = true;
            }
        })
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            let pos = this.node.parent.convertToNodeSpaceAR(event.getLocation());

            let dis = this.pos.y - pos.y;
            this.pos = pos;
            let y = 0 + this.node.y;
            // cc.log(y - dis, this.maxDistance, this.minDistance)
            if (y - dis <= this.maxDistance && y - dis >= this.minDistance) {
                this.node.y = y - dis;
            }
        })
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, (event) => {
            if (this.floor) {
                this.floor.active = false;
            }
        })
        this.node.on(cc.Node.EventType.TOUCH_END, (event) => {
            if (this.floor) {
                this.floor.active = false;
            }
        })
    }

    // update (dt) {}
}
