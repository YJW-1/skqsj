import { cocosz } from "../Framework/CocosZ";
import { tag } from "../Framework/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class propMoveFloor3 extends cc.Component {

    minDistance: number = 0;
    maxDistance: number = 0;
    pos: any = 0;
    floor: cc.Node = null;
    role: cc.Node = null;
    btn: cc.Node = null;
    rb: cc.RigidBody = null;
    btnSelect: cc.Node = null;
    isStop: boolean = false;
    onInitDistance() {
        if (cocosz.dataMgr.CurLevelId == 15) {
            this.minDistance = -300;
            this.maxDistance = 1;
        }
    }


    onBeginContact(contact, self, other) {
        // cc.log(other.node);
        if (other.node.name == "node_dirty") {

            this.rb.angularVelocity = 0;
        }
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.btn = this.node.parent.getChildByName("btn");
        this.floor = this.node.parent.getChildByName("floor");
        this.rb = this.floor.getComponent(cc.RigidBody);
        this.btnSelect = this.btn.getChildByName("btnSelect");
    }


    start() {
        this.onInitDistance()
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
            let dis = angle * 0.3;

            if (angle == 0 || angle == -0) return
            // if (dis >= this.minDistance && dis <= this.maxDistance) {
            //     this.floor.x = dis;
            // }
            // this.floor.angle -= dis;
            this.rb.angularVelocity += dis
        })
        this.btn.on(cc.Node.EventType.TOUCH_CANCEL, (event) => {
            this.btnSelect.active = false;
        })
        this.btn.on(cc.Node.EventType.TOUCH_END, (event) => {
            this.btnSelect.active = false;
        })
    }

    // update (dt) {}
}
