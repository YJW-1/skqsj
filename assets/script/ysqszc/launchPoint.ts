// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { timeStamp } from "console";
import { reverse } from "dns";
import { cocosz } from "../Framework/CocosZ";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    isStart: Boolean = false;

    number: number = 0;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.scheduleOnce(() => {
            this.unscheduleAllCallbacks();
        }, 24)
    }

    update(dt) {
        if (this.isStart) return;
        if (this.node.parent.getComponent("levelNum").curLevel == 20) {
            // cc.log(this.node.y, "-----------thsi.node.y==300")
            if (this.node.y <= 300) {
                this.isStart = true;
                this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);

                this.schedule(() => {
                    let prefab = cocosz.resMgr.getRes("stone", cc.Prefab);
                    let node = cc.instantiate(prefab);

                    node.x = Math.random() * 400 - 200;

                    this.node.addChild(node);
                    let rb: cc.RigidBody = node.getComponent(cc.RigidBody);
                    rb.gravityScale = 1;

                    rb.linearVelocity = cc.v2(0, -200 * Math.random() - 100);
                }, 1)


            }
            return;
        }
        if (this.node.y + this.node.parent.y + this.node.parent.parent.y < 1300) {
            this.isStart = true;
            cc.log(this.node.y)
            this.schedule(() => {
                let prefab = cocosz.resMgr.getRes("stone", cc.Prefab);
                let node = cc.instantiate(prefab);
                this.node.addChild(node);
                let rb: cc.RigidBody = node.getComponent(cc.RigidBody);
                rb.gravityScale = 1;
                cc.log(this.node.parent.getComponent("levelNum").curLevel)
                rb.linearVelocity = cc.v2(-300 * this.node.x / Math.abs(this.node.x), 300);

                if (this.node.parent.getComponent("levelNum").curLevel == 15) {
                    rb.linearVelocity = cc.v2(-380 * this.node.x / Math.abs(this.node.x), -300)
                    // return
                }
            }, 1.5)
        }
    }
}
