import { cocosz } from "../Framework/CocosZ";
import Constant, { tag } from "../Framework/Constant";

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

    }
    onLoad() {
        this.rb = this.node.getComponent(cc.RigidBody);
    }

    start() {
    }

    update(dt) {
        if (cocosz.gameMgr.isGameOver) return;
        let pos = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
        if ((pos.x < 0 || pos.x > cc.winSize.width) || (pos.y < 0 || pos.y > cc.winSize.height)) {
            this.node.destroy()
            cc.game.emit(Constant.E_GAME_START)

        }
    }
}
