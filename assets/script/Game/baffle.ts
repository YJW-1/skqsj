import { threadId } from "worker_threads";
import { cocosz } from "../Framework/CocosZ";
import Constant, { tag, PanelName } from "../Framework/Constant";
const { ccclass, property } = cc._decorator;

@ccclass
export default class baffle extends cc.Component {


    onBeginContact(contact, self, other) {
        // if (other.tag == tag.thorn || other.tag == tag.stone || other.tag == tag.honeybee ||
        //     other.tag == tag.carton || other.tag == tag.rain || other.tag == tag.stone3 ||
        //     other.tag == tag.wooldenBox || other.tag == tag.wooldenBox2 ||other.tag == tag.balloon2||other.tag == tag.rope ||
        //     other.tag == 777 || other.tag == 0) {
        //     contact.disabled = true;
        // }
        if (other.tag != tag.balloon) {
            contact.disabled = true;
        }
    }


    // LIFE-CYCLE CALLBACKS:

    onDestroy() {
        cc.game.targetOff(this);
    }

    // onLoad () {}

    start() {
        if (this.node.name == "baffle2") return;
        cc.game.on(Constant.E_ROLE_MOVE, () => {
            let role = this.node.parent.getChildByName("role").getChildByName("body");
            // let pos2 = role.convertToWorldSpaceAR(role.getPosition());

            // let pos = role.parent.convertToWorldSpaceAR(this.node.getPosition())
            // cc.log(Math.abs(pos.y - this.node.y), "this.node.y:" + this.node.y, "pos.y:" + pos.y, "pos2.y:" + pos2.y, "role.y:" + role.y, "--------Math.abs(role.getChildByName().y - this.node.y)")
            cc.log((role.y + role.parent.y) - this.node.y)
            if (Math.abs((role.y + role.parent.y) - this.node.y) < 300) {
                this.node.destroy();
                cc.game.targetOff(this);
            }
        }, this)
    }

    // update (dt) {}
}
