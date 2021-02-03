import { cocosz } from "../Framework/CocosZ";
import Constant, { tag } from "../Framework/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class propRocket extends cc.Component {

    isDis: boolean = false;


    onBeginContact(contact, self, other) {
        if (this.isDis) return
        // cc.log(other.tag)
        if (cocosz.sceneMgr.sceneName == "rewardLevel2") {
            if (other.tag == tag.honeybee) {

                // this.scheduleOnce(() => {
                this.node.destroy();
                // }, 0.1)
                // other.node.destroy();
                let prefab = cocosz.resMgr.getRes("rocketEffect2", cc.Prefab);
                let node = cc.instantiate(prefab);
                other.node.parent.addChild(node);
                node.setPosition(other.node.getPosition());
            }

            contact.disabled = true;
            return;
        }
        if (other.tag == tag.stone || other.tag == tag.stone3 || other.tag == tag.rocket || other.tag == tag.wooldenBox2 || (other.tag == tag.thorn && cocosz.dataMgr.CurLevelId == 104)) {
            this.isDis = true;
            cocosz.audioMgr.playRocketEffect2();

            // this.scheduleOnce(() => {
            // }, 0.1)
            this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
            other.node.destroy();
            let prefab = cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            let node = cc.instantiate(prefab);
            other.node.parent.addChild(node);
            node.setPosition(other.node.getPosition());
            this.node.destroy();
        }
        else if (other.tag == tag.bat) {
            this.isDis = true;
            cocosz.audioMgr.playRocketEffect2();
            this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
            this.scheduleOnce(() => {
                this.node.destroy();
            }, 0.1)
            other.node.destroy();
            let prefab = cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            let node = cc.instantiate(prefab);
            other.node.parent.addChild(node);
            node.setPosition(other.node.getPosition());
        }
        else if (other.tag == tag.thorn) {
            // this.isDis = true;
            // cocosz.audioMgr.playRocketEffect2();
            // this.scheduleOnce(() => {
            //     this.node.destroy();
            // }, 0.1)
            // other.node.destroy();
            // let prefab = cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            // let node = cc.instantiate(prefab);
            // this.node.parent.addChild(node);
            // node.setPosition(this.node.getPosition());
            other.node.destroy();
            contact.disabled = true;
        }
        else if (other.tag == tag.balloon || other.tag == tag.balloon2) {
            if (other.node.parent != "prop") {
                other.node.parent.destroy()
            }
        }
        else if (other.tag == tag.rope) {
            contact.disabled = true;
        }
        else if (other.tag == tag.player) {
            let node = other.node;
            let parent = node.parent;
            contact.disabled = true;
            if (parent.name != "role") {
                parent = parent.parent;
            }
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
            // cc.log(this.node.x,this.node.y)
            node2.setPosition(cc.v2(this.node.x, this.node.y));
            this.scheduleOnce(() => {
                this.node.destroy();
            }, 0.01)
            cc.game.emit(Constant.E_GAME_FAID)
        }
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
            // cc.log("--------------------10")
            contact.disabled = true;
        }
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        // this.node.on(cc.Node.EventType.TOUCH_START, () => {
        //     cocosz.audioMgr.playRocketEffect1();
        //     let rb = this.node.getComponent(cc.RigidBody);
        //     let v = rb.linearVelocity;
        //     let direction = this.node.parent.angle == 0 ? 1 : -1
        //     v.x = 700 * direction;
        //     rb.linearVelocity = v;
        //     this.node.off(cc.Node.EventType.TOUCH_START);
        // })
        this.scheduleOnce(() => {
            let rb = this.node.getComponent(cc.RigidBody);
            if (!rb) return;
            this.node.destroy()
        }, 4)
    }

    update(dt) {
        // if (cocosz.sceneMgr.sceneName == "rewardLevel2") {
        //     // cc.log(this.node.y)
        //     if (this.node.y > 20) {
        //         cc.log("---------------销毁")
        //         this.node.destroy();
        //     }
        // }
        // if (cocosz.gameMgr.isGameOver) {
        //     this.unscheduleAllCallbacks()
        // }
    }
}
