import { cocosz } from "../Framework/CocosZ";
import Constant, { tag } from "../Framework/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class propRocket extends cc.Component {

    isDis: boolean = false;


    onBeginContact(contact, self, other) {
        if (this.isDis) return
        if (this.isDis) return
        cc.log(other.tag)
        if (other.tag == tag.stone || other.tag == tag.stone3 || other.tag == tag.rocket) {
            this.isDis = true;
            cocosz.audioMgr.playRocketEffect2();
            this.scheduleOnce(() => {
                this.node.destroy();
            }, 0.1)
            other.node.destroy();
            let prefab = cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            let node = cc.instantiate(prefab);
            other.node.parent.addChild(node);
            node.setPosition(other.node.getPosition());
        }
        else if (other.tag == tag.bat || other.tag == 81) {
            this.isDis = true;
            cocosz.audioMgr.playRocketEffect2();
            this.scheduleOnce(() => {
                this.node.destroy();
            }, 0.1)
            other.node.destroy();
            let prefab = cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            let node = cc.instantiate(prefab);
            other.node.parent.addChild(node);
            node.setPosition(other.node.getPosition());
        }


        else if (other.tag == tag.player) {
            let node = other.node;
            let parent = node.parent;
            contact.disabled = true;
            if (parent.name != "role") {
                parent = parent.parent;
            }
            for (let child of node.parent.children) {
                if (child.name == "right_balloon" || child.name == "left_balloon") continue;
                child.color = cc.color(0, 0, 0, 255);
                for (let child2 of child.children) {
                    child2.color = cc.color(0, 0, 0, 255);
                    if (child.children.length > 0) {
                        for (let child3 of child2.children) {
                            child3.color = cc.color(0, 0, 0, 255);
                        }
                    }
                }
            }
            let prefab = cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            let node2 = cc.instantiate(prefab);
            this.node.parent.addChild(node2);
            node.setPosition(this.node.getPosition());
            this.node.destroy();
            cc.game.emit(Constant.E_GAME_FAID)
        }
        // else if (other.tag == tag.thorn) {
        //     this.isDis = true;
        //     cocosz.audioMgr.playRocketEffect2();
        //     this.scheduleOnce(() => {
        //         this.node.destroy();
        //     }, 0.1)
        //     other.node.destroy();
        //     let prefab = cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
        //     let node = cc.instantiate(prefab);
        //     this.node.parent.addChild(node);
        //     node.setPosition(this.node.getPosition());
        // }
        else if (other.tag == 0 || other.tag == 7) {
            this.isDis = true;
            cocosz.audioMgr.playRocketEffect2();
            this.scheduleOnce(() => {
                this.node.destroy();
            }, 0.1)
            let prefab = cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            let node = cc.instantiate(prefab);
            this.node.parent.addChild(node);
            node.setPosition(this.node.getPosition());
        }
        else if (other.tag == tag.bigFan) {
            this.isDis = true;
            cocosz.audioMgr.playRocketEffect2();
            this.scheduleOnce(() => {
                this.node.destroy();
            }, 0.01)
            let script = other.node.getComponent("propBigFan");
            script.onDamaged();

            let prefab = cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            let node = cc.instantiate(prefab);
            other.node.parent.addChild(node);
            node.setPosition(other.node.getPosition());
        }
        else if (other.tag == tag.rocketFloor) {
            cc.log("--------------------10")
            contact.disabled = true;
        }
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.node.on(cc.Node.EventType.TOUCH_START, () => {
            cocosz.audioMgr.playRocketEffect1();
            let rb = this.node.getComponent(cc.RigidBody);
            let v = rb.linearVelocity;
            if (this.node.parent.angle == 0 || this.node.parent.angle == 180) {
                let direction = this.node.parent.angle == 0 ? 1 : -1
                v.x = 1000 * direction;
                rb.linearVelocity = v;

            }
            else if (this.node.parent.angle == 90 || this.node.parent.angle == 270) {
                let direction = this.node.parent.angle == 90 ? 1 : -1
                v.y = 500 * direction;
                if (cocosz.dataMgr.CurLevelId == 93) {
                    v.y += 500 * direction;
                }
                if (cocosz.dataMgr.CurLevelId == 54||cocosz.dataMgr.CurLevelId == 133) {
                    v.y -= 400 * direction;
                }
                rb.linearVelocity = v;
            }
            this.node.off(cc.Node.EventType.TOUCH_START);
        })
    }

    // update (dt) {}
}
