import { cocosz } from "../Framework/CocosZ";
import { tag } from "../Framework/Constant";


const { ccclass, property } = cc._decorator;

@ccclass
export default class propMoveFloor21 extends cc.Component {
    rb: cc.RigidBody = null;


    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.rb = this.node.getComponent(cc.RigidBody);
        if (cocosz.dataMgr.CurLevelId == 78) {
            this.rb.gravityScale = 0.5;
        }
        
        if (cocosz.dataMgr.CurLevelId == 137) {
            this.rb.gravityScale = 0.5;
        }
    }


    start() {
    }

    update(dt) {
    }
}
