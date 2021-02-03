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

    rb: cc.RigidBody = null;

    // LIFE-CYCLE CALLBACKS:


    onDestroy(){
        cc.log("--------des")
    }
    onLoad() {
        this.rb = this.node.getComponent(cc.RigidBody);
    }

    start() {
        if (cocosz.dataMgr.CurLevelId == 42) {
            this.rb.gravityScale = 1;
        }
        // if (cocosz.dataMgr.CurLevelId == 81) {
        //     this.rb.gravityScale = 0.1;
        // }
        else if (cocosz.dataMgr.CurLevelId == 22 || cocosz.dataMgr.CurLevelId == 124) {
            let poly = this.node.getComponent(cc.PhysicsPolygonCollider);
            poly.friction = 0;
            poly.apply()
        }
    }

    // update (dt) {}
}
