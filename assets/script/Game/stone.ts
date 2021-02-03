import { cocosz } from "../Framework/CocosZ";
import { tag } from "../Framework/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class stone extends cc.Component {

    rb: cc.RigidBody = null;

    isDes: boolean = false;
    // LIFE-CYCLE CALLBACKS:

    onDestroy() {
        cc.log("------------stone被销毁")
    }

    onBeginContact(contact, self, other) {
        if (cocosz.sceneMgr.sceneName == "Game2") {

            this.rb.gravityScale = 0.5;
        }
        if (other.tag == tag.bigFan) {
            if (this.isDes) return;
            this.isDes = true;
            this.scheduleOnce(() => {
                this.node.destroy();
            }, 0.05)
        }

    }
    onLoad() {
        this.rb = this.node.getComponent(cc.RigidBody);
    }

    start() {
        if (cocosz.dataMgr.CurLevelId == 55 || cocosz.dataMgr.CurLevelId == 136) {
            this.rb.gravityScale = 9;
        }
        else if (cocosz.dataMgr.CurLevelId == 42) {
            this.rb.gravityScale = 5;
        }
        else if (cocosz.dataMgr.CurLevelId == 35 || cocosz.dataMgr.CurLevelId == 124) {
            this.rb.gravityScale = 5;
        }
        else if (cocosz.dataMgr.CurLevelId == 11) {
            this.rb.gravityScale = 8;
        }
        else if (cocosz.dataMgr.CurLevelId == 94) {
            this.rb.gravityScale = 1;
        }
        // else if (cocosz.dataMgr.CurLevelId == 80) {
        //     this.rb.gravityScale = 0.3;
        // }
    }

    update(dt) {
        let v = this.rb.linearVelocity;
        if (this.node.parent.name != "levelMgr" || this.node.parent.getComponent("levelNum").curLevel == 13) return;
        if (v.y <= -500) {
            this.rb.linearVelocity = cc.v2(0, -500)
        }
    }
}
