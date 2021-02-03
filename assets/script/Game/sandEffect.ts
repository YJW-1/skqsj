
const { ccclass, property } = cc._decorator;

@ccclass
export default class sandEffect extends cc.Component {



    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        for (let child of this.node.children) {
            let rb = child.getComponent(cc.RigidBody);
            // rb.linearVelocity=cc.v2()
            let v = rb.linearVelocity;
            v.x = Math.random() * 400 - 200;
            rb.linearVelocity = v;
            if (Math.random() > 0.4) {
                rb.angularVelocity = Math.random() * 200 - 100;
            }
        }

        this.scheduleOnce(() => {
            this.node.destroy();
        }, 1)
    }

    // update (dt) {}
}
