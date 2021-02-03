import { cocosz } from "../Framework/CocosZ";
import Constant, { tag } from "../Framework/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class propMoveFloor extends cc.Component {
    btn: cc.Node = null;
    floor1: cc.Node = null;
    floor2: cc.Node = null;

    isFirst: boolean = false;


    onBeginContact(contact, self, other) {
        if (this.isFirst) return
        if (other.tag == tag.thorn) {
            this.isFirst = true;
            contact.disabled = true;
            cc.tween(this.floor1)
                .to(1, { position: cc.v2(181, -78.5) })
                .start()

            cc.tween(this.floor2)
                .to(1, { position: cc.v2(-121, -78.5) })
                .start()

            cc.tween(this.btn)
                .to(0.1, { position: cc.v2(-325, 98) })
                .start()

                cc.log(this.floor1,this.floor2)
        }
    }


    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.btn = this.node.getChildByName("btn").getChildByName("btn1");
        this.floor1 = this.node.getChildByName("sp").getChildByName("floor1");
        this.floor2 = this.node.getChildByName("sp").getChildByName("floor2");

    }



    start() {
    }

    update(dt) {
    }
}
