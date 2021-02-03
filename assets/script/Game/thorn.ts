
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    rb: cc.RigidBody = null;



    onBeginContact(contact, other, self) {
        this.node.destroy();
    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // this.rb = this.node.getComponent(cc.RigidBody);
    }

    start() {
        // let v = this.rb.linearVelocity;
        // v.x = 400 * this.node.parent.scaleX;
        // this.rb.linearVelocity = v;
        // cc.log(v)
    }

    update(dt) {
        let pos = this.node.convertToWorldSpaceAR(this.node.getPosition())
        // cc.log(pos.x, pos.y);
        if ((pos.x < -300 || pos.x > cc.winSize.width * 2) || (pos.y < 0 || pos.y > cc.winSize.height * 2)) {
            this.node.destroy()
        }
    }
}
