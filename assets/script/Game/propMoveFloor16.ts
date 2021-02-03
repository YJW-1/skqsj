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


    // onBeginContact(contact, self, other) {
    //     // cc.log(other.node);
    //     if (other.node.name == "node_dirty") {

    //         this.rb.angularVelocity = 0;
    //     }
    // }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.btn = this.node.getChildByName("btn");
        this.floor = this.node.getChildByName("wheel");
        this.rb = this.floor.getComponent(cc.RigidBody);
        this.btnSelect = this.btn.getChildByName("btnSelect");
    }


    start() {
        this.onInitDistance()
        // this.btn.on(cc.Node.EventType.TOUCH_START, (event:cc.Touch) => {
        //     // let pos2 = this.btn.convertTouchToNodeSpaceAR(event);
        //     // let pos3=this.btn.parent.convertToWorldSpaceAR(event.getLocation())
        //     // let pos2 = this.btn.parent.convertToNodeSpaceAR(pos3);
        //     // let pos = cc.v2((Math.ceil(this.btn.x - pos2.x)), Math.ceil(this.btn.y - pos2.y));

        //     let pos2 = this.node.parent.convertToNodeSpaceAR(event.getLocation());
        //     let pos = cc.v2((this.node.x - pos2.x), this.node.y - pos2.y);
        //     this.pos = pos;
        //     this.btnSelect.active = true;
        // })
        // this.btn.on(cc.Node.EventType.TOUCH_MOVE, (event) => {

        //     // let pos2 = this.btn.convertTouchToNodeSpaceAR(event);

        //     // let pos3=this.btn.parent.convertToWorldSpaceAR(event.getLocation())
        //     // let pos2 = this.btn.parent.convertToNodeSpaceAR(pos3);
        //     // let pos = cc.v2(this.btn.x - pos2.x, this.btn.y - pos2.y);

        //     let pos2 = this.node.parent.convertToNodeSpaceAR(event.getLocation());
        //     let pos = cc.v2(this.node.x - pos2.x, this.node.y - pos2.y);
        //     let hd = pos.signAngle(this.pos);
        //     let angle = Math.ceil(hd / Math.PI * 180);

        //     // cc.log(pos.x, pos.y, this.pos.x, this.pos.y,pos2.x,pos2.y,this.btn.x,this.btn.y);
        //     this.pos = pos;

        //     this.btn.angle -= angle;

        //     if (angle == 0 || angle == -0) return;
        //     let rb = this.floor.getComponent(cc.RigidBody);
        //     rb.angularVelocity = 30 * angle / Math.abs(angle);
        // })


        this.btn.on(cc.Node.EventType.TOUCH_START, (event) => {
            let pp = event.getLocation();

            pp.y += 1600 * cocosz.gameMgr.touchNum;
            let pos2 = this.btn.parent.convertToNodeSpaceAR(pp);
            let pos = cc.v2((Math.ceil(this.btn.x - pos2.x)), Math.ceil(this.btn.y - pos2.y));
            this.pos = pos;
            this.btnSelect.active = true;
        })
        this.btn.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            let pp = event.getLocation();
            pp.y += 1600 * cocosz.gameMgr.touchNum;
            let pos2 = this.btn.parent.convertToNodeSpaceAR(pp);
            let pos = cc.v2(this.btn.x - pos2.x, this.btn.y - pos2.y);
            let hd = pos.signAngle(this.pos);
            let angle = Math.ceil(hd / Math.PI * 180);
            this.pos = pos;

            this.btn.angle -= angle;

            if (angle == 0 || angle == -0) return;
            let rb = null
            if (this.floor) {
                rb = this.floor.getComponent(cc.RigidBody);
            }

            rb.angularVelocity = 30 * angle / Math.abs(angle);
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
