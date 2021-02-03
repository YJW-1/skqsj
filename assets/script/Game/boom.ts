// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { cocosz } from "../Framework/CocosZ";
import { tag } from "../Framework/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    boom: cc.Node = null;
    @property(cc.Animation)
    anim: cc.Animation = null;


    onFinish() {
        this.scheduleOnce(() => {
            this.node.destroy();
        }, 0.1)
    }

    onBeginContact(contact, self, other) {
        cc.log(other.tag)
        if (this.node.scale < 4) return;
        if (other.tag == tag.thorn || other.tag == tag.bat || other.tag == tag.rocket || other.tag == tag.honeybee || other.tag == tag.floorThorn ||
            other.tag == tag.cloud || other.tag == tag.wooldenBox|| other.tag == tag.laser || other.tag == tag.wooldenBox2 || other.tag == tag.stone3 || other.tag == tag.stone || other.tag == 777) {
            other.node.active = false;
        }
        else if (other.tag == tag.bigFan) {
            let prefab = cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            let node = cc.instantiate(prefab);
            other.node.addChild(node);
            other.node.getComponent("propBigFan").onDamaged()
        }
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        cc.tween(this.boom)
            .by(1, { scale: 0.15 })
            .call(() => {
                this.boom.active = false;
                this.anim.node.active = true;
                this.anim.play();
                this.node.scale = 4
                this.node.getComponent(cc.PhysicsCircleCollider).enabled = true;
            })
            .start()




    }

    // update (dt) {}
}
