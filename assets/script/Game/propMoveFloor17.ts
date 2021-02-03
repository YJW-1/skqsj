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
    dis: number = -1;
    onInitDistance() {
        if (this.node.angle == 0 || this.node.angle == 180 || this.node.angle == 90) {
            this.minDistance = 0;
            this.maxDistance = this.floor.width;
            // this.maxDistance = -this.floor.x;
        }
        if (cocosz.dataMgr.CurLevelId == 82 || cocosz.dataMgr.CurLevelId == 98) {
            this.maxDistance -= this.floor.width * 0.2;
        }
        if (cocosz.dataMgr.CurLevelId == 90 || cocosz.dataMgr.CurLevelId == 97) {
            this.maxDistance -= this.floor.width * 0.4;
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
            if (this.node.angle == 180) {
                dis = this.floor.x - angle * 0.1
            }

            // cc.log(angle, Math.round(dis), this.minDistance, this.maxDistance, Math.round(dis) >= this.minDistance, Math.round(dis) <= this.maxDistance, "-------------angle");
            if (angle == 0 || angle == -0) return
            if ((Math.round(dis) >= this.minDistance && Math.round(dis) <= this.maxDistance) || Math.round(dis) == -0) {
                let rb = this.floor.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                v.x += angle * 5;
                // if (this.node.angle == 0) {
                //     v.x = 0;
                //     v.y += angle * 5;
                // }
                rb.linearVelocity = v;
                // let a: number = +dis.toFixed(2)
                // this.dis = this.floor.x - a;
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

    update(dt) {
        let rb = this.floor.getComponent(cc.RigidBody);
        let v = rb.linearVelocity;
        // if (this.floor.x.toFixed(2) == this.dis) {
        if (this.node.angle == 180) {
            if ((this.floor.x <= 0 && v.x > 0) || (this.floor.x >= 167 && v.x < 0)) {
                if (this.floor.x < 0) {
                    this.floor.setPosition(0, this.floor.y);
                }
                else if (this.floor.x > 167) {
                    this.floor.setPosition(167, this.floor.y);
                }
                v.x = 0;
                rb.linearVelocity = v;
            }
        }
        else if (this.node.angle == 0) {

            if ((this.floor.x <= 0 && v.x < 0) || (this.floor.x >= 167 && v.x > 0)) {
                if (this.floor.x < 0) {
                    this.floor.setPosition(0, this.floor.y);
                }
                else if (this.floor.x > 167) {
                    this.floor.setPosition(167, this.floor.y);
                }
                v.x = 0;
                rb.linearVelocity = v;
            }
        }
        else if (this.node.angle == 90) {

            if ((this.floor.x <= 0 && v.x < 0) || (this.floor.x >= 167 && v.x > 0)) {
                if (this.floor.x < 0) {
                    this.floor.setPosition(0, this.floor.y);
                }
                else if (this.floor.x > 167) {
                    this.floor.setPosition(167, this.floor.y);
                }
                v.x = 0;
                rb.linearVelocity = v;
            }
        }
    }
}
