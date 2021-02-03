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

    isFirstMove = false
    onRayCast(num1, num2) {
        let startPos = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
        let endPos = cc.v2(startPos.x + 1000 * num1, startPos.y + 1000 * num2);
        let result = cocosz.gameMgr.onRayCast(startPos, endPos);
        return result;
    }



    onInitDistance() {
        let d1 = this.node.parent.getChildByName("limit1").x
        let d2 = this.node.parent.getChildByName("limit2").x
        if (this.node.angle == 90) {

            d1 = this.node.parent.getChildByName("limit1").y
            d2 = this.node.parent.getChildByName("limit2").y
        }
        let rope = this.node.parent.getChildByName("rope");
        if (d1 > d2) {
            // this.minDistance = d2 + (50 * (this.node.scaleX / 2) * (rope.scaleX / 2));
            // this.maxDistance = d1 - (50 * (this.node.scaleX / 2) * (rope.scaleX / 2));
            this.minDistance = d2 + 115;
            this.maxDistance = d1 - 115;
            if (this.node.scale == 1.5) {

                this.minDistance = d2 + 115 - 18;
                this.maxDistance = d1 - 115 + 18;
            }
        }
        else {
            // this.minDistance = d1 + (50 * (this.node.scaleX / 2) * (rope.scaleX / 2));
            // this.maxDistance = d2 - (50 * (this.node.scaleX / 2) * (rope.scaleX / 2));
            this.minDistance = d1 + 115;
            this.maxDistance = d2 - 115;
            if (this.node.scale == 1.5) {
                this.minDistance = d1 + 115 - 18;
                this.maxDistance = d2 - 115 + 18;
            }
        }
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.floor = this.node.getChildByName("floor");
        this.rb = this.node.getComponent(cc.RigidBody);
        // if (cocosz.dataMgr.CurLevelId == 79) {
        //     let a = this.node.getComponent(cc.PhysicsBoxCollider);
        //     a.friction = 200;
        //     a.apply();
        // }
    }


    // onBeginContact(contact, self, other) {
    //     cc.log(other.tag, self.tag)
    //     if (other.tag == tag.player || other.tag == tag.rope || other.tag == tag.balloon) {
    //         this.isStop = true;
    //     }
    // }

    // onEndContact(contact, self, other) {
    //     cc.log(other.tag, self.tag)
    //     if (other.tag == tag.player || other.tag == tag.rope || other.tag == tag.balloon) {
    //         this.isStop = false;
    //     }
    // }  

    onCollisionEnter(other, self) {
        // cc.log("-----------碰撞进入--", other.tag)
        if (other.tag == tag.player || other.tag == tag.rope || other.tag == tag.balloon|| other.tag == tag.balloon2) {
            if (other.tag == tag.player) {
                // cc.log(other.node, other.node.parent.name == "role", other.node.parent.parent.name == "role", other.node.parent.parent.parent.name == "role");
                if (other.node.parent.name == "role") {
                    this.role = other.node.parent.getChildByName("body");
                }
                else if (other.node.parent.parent.name == "role") {
                    this.role = other.node.parent.parent.getChildByName("body");
                }
                else if (other.node.parent.parent.parent.name == "role") {
                    this.role = other.node.parent.parent.parent.getChildByName("body");
                }
            }
            // cc.log(this.role)
            this.isStop = true;
        }
    }
    onCollisionExit(other, self) {
        // cc.log("-----------碰撞离开--")
        if (other.tag == tag.player || other.tag == tag.rope || other.tag == tag.balloon|| other.tag == tag.balloon2) {
            this.isStop = false;
        }
    }
    start() {
        if (cocosz.dataMgr.CurLevelId == 14) return;
        this.onInitDistance();
        this.node.on(cc.Node.EventType.TOUCH_START, (event) => {
            let pos = this.node.parent.convertToNodeSpaceAR(event.getLocation());
            this.pos = pos;
            this.node.getChildByName("floor").active = true;
            this.isTouch = true;
        })
        this.node.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
            // cc.log("000000000000000000")
            cc.game.emit(Constant.E_TIPS_NEXT)
            let pos = this.node.parent.convertToNodeSpaceAR(event.getLocation());
            if (this.node.angle == 0) {

                let dis = this.pos.x - pos.x;
                this.pos = pos;
                let x = 0 + this.node.x;

                if (x - dis <= this.maxDistance && x - dis >= this.minDistance) {
                    let result = null
                    if (dis < 0) {
                        result = this.onRayCast(1, 0);

                        // if (result) {

                        //     let point = result[0].point;
                        //     let pos = this.node.parent.convertToNodeSpaceAR(point);
                        //     if (Math.abs(this.node.x - pos.x) < (this.node.width / 2 * 1.8)) return;
                        // }
                    }
                    else if (dis > 0) {

                        result = this.onRayCast(-1, 0);
                    }

                    if (result) {

                        let point = result[0].point;
                        let pos = this.node.parent.convertToNodeSpaceAR(point);
                        if (Math.abs(this.node.x - pos.x) < (this.node.width / 2 * 1.8)) return;
                    }
                    if (!this.isFirstMove) {
                        this.isFirstMove = true;
                        cocosz.audioMgr.playMoveFloorEffect();
                    }
                    this.node.x = x - dis;
                    // this.x = x - dis
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
                // cc.log(y - dis, this.maxDistance, this.minDistance)
                if (y - dis <= this.maxDistance && y - dis >= this.minDistance) {
                    this.node.y = y - dis;
                    if (!this.isFirstMove) {
                        this.isFirstMove = true;
                        cocosz.audioMgr.playMoveFloorEffect();
                    }
                    // this.y = y - dis
                }
            }
        })
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, (event) => {
              
            if(this.floor){
                this.floor.active = false;
            }
            this.isTouch = false;
            this.isFirstMove = false;
        })
        this.node.on(cc.Node.EventType.TOUCH_END, (event) => {  
            if(this.floor){
                this.floor.active = false;
            }
            this.isTouch = false;
            this.isFirstMove = false;
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
