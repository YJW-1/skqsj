import { cocosz } from "../Framework/CocosZ";
import { tag } from "../Framework/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    onBeginContact(contact, self, other) {
        if (cocosz.sceneMgr.sceneName == "Game2") {

            let rb = this.node.getComponent(cc.RigidBody);
            rb.gravityScale = 0.5;
            return;
        }
        if (cocosz.dataMgr.CurLevelId == 113 && (other.tag == tag.balloon || other.tag == tag.balloon2)) {
            let rb = this.node.getComponent(cc.RigidBody);
            rb.gravityScale = 0.5;
            let v = rb.linearVelocity;
            v.x = 0, v.y = 0;
            rb.linearVelocity = v;
        }
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {


        if (cocosz.sceneMgr.sceneName == "Game" && this.node.name == "wooldenBox3") {
            let rb = this.node.getComponent(cc.RigidBody);
            rb.gravityScale = 1;
        }

        this.node.on(cc.Node.EventType.TOUCH_START, () => {
            if (cocosz.dataMgr.CurLevelId == 113 || cocosz.dataMgr.CurLevelId == 90) {
                return;
            }

            this.node.destroy();
            cocosz.audioMgr.playBoxEffect();
            let prefab = cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            let node = cc.instantiate(prefab);
            this.node.parent.addChild(node);
            node.setPosition(this.node.getPosition());
        })

        if (cocosz.dataMgr.CurLevelId == 73) {
            this.node.getComponent(cc.PhysicsBoxCollider).friction = 0;
            this.node.getComponent(cc.PhysicsBoxCollider).apply();
        }

        else if (cocosz.dataMgr.CurLevelId == 81) {
            this.node.getComponent(cc.RigidBody).gravityScale = 0;
        }

        else if (cocosz.dataMgr.CurLevelId == 115) {
            this.node.getComponent(cc.RigidBody).fixedRotation = true;
        }
    }

    update(dt) {
        // if (this.node.y >= 500) {
        //     this.node.destroy();
        // }
    }
}
