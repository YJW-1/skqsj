import { timeStamp } from "console";
import { cocosz } from "../Framework/CocosZ";
import { tag } from "../Framework/Constant";
import levelNum from "./levelNum";

const { ccclass, property } = cc._decorator;

@ccclass
export default class bat extends cc.Component {

    rb: cc.RigidBody = null;

    action: any = null
    startPos: any = null

    isStart: boolean = false;

    isTwo: boolean = false;

    isRight: boolean = false

    isFirst: boolean = false;



    onBeginContact(contact, self, other) {
        if (this.node.getComponent(cc.RigidBody).gravityScale == 0) {
            this.node.getComponent(cc.RigidBody).gravityScale = 1;

        }
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.rb = this.node.getComponent(cc.RigidBody);
    }

    start() {
        // this.rb.linearVelocity = cc.v2(0, -200)

        // let a = cc.tween().sequence(
        //     cc.tween().by(1, { position: cc.v2(0, 15) }),
        //     cc.tween().by(1, { position: cc.v2(0, -15) })
        // )

        // this.action = cc.tween(this.node)
        //     .repeatForever(a)
        //     .start()



        let b = cc.tween().sequence(
            cc.tween().by(0.1, { angle: 30 }),
            cc.tween().by(0.1, { angle: -30 })
        )


        cc.tween(this.node.getChildByName("bat_wing1"))
            .repeatForever(b)
            .start()

        let c = cc.tween().sequence(
            cc.tween().by(0.1, { angle: -30 }),
            cc.tween().by(0.1, { angle: 30 })
        )


        cc.tween(this.node.getChildByName("bat_wing2"))
            .repeatForever(c)
            .start()
    }

    update(dt) {
        // this.rb.linearVelocity = cc.v2(0, -200)
        // cc.log(this.node.y)
        if (this.node.y < -100 && !this.isStart) {
            this.isStart = true;

            // this.rb.linearVelocity = cc.v2(0, -500);

            // if(this.node.parent.getComponent("levelNum").curLevel)
            // this.scheduleOnce(() => {
            // }, 1)

            cc.log(this.node.x);
            if (Math.floor(this.node.x) % 300 == 0 && this.node.parent.getComponent("levelNum").curLevel == 18) {
                this.scheduleOnce(() => {
                    this.rb.linearVelocity = cc.v2(-100 * this.node.x / Math.abs(this.node.x), -500);
                }, 1)
            }
            else {
                this.rb.linearVelocity = cc.v2(0, -500);

            }
        }
    }
}
