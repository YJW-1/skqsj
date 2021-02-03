// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { tag } from "../Framework/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class nimiCactus extends cc.Component {

    rb: cc.RigidBody = null;

    onBeginContact(contact, self, other) {
        // if (other.tag == tag.ball) {
        this.node.getComponent(cc.RigidBody).gravityScale = 1;
        // }
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.rb = this.node.getComponent(cc.RigidBody);
    }

    start() {

    }

    update(dt) {
        let v = this.rb.linearVelocity
        if (v.y < -300) {
            v.y = -300;
            this.rb.linearVelocity = v;
        }
    }
}
