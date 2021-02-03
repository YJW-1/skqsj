// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { cocosz } from "../Framework/CocosZ";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {


    onBeginContact(contact, self, other) {
        if (this.node.getComponent(cc.RigidBody).gravityScale == 0) {
            this.node.getComponent(cc.RigidBody).gravityScale = 1;
        }
        if (this.node.getComponent(cc.RigidBody).type == cc.RigidBodyType.Kinematic) {
            cocosz.scheduleOnce(() => {
                this.node.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic;
                if (this.node.name == "sBoard") {
                    this.node.getComponent(cc.PhysicsBoxCollider).apply()
                }
            }, 0.02)
        }

    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        cc.log(this.node.parent.y, "---------")
    }

    // update (dt) {}
}
