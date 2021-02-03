// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    a: cc.RigidBody = null;
    istrue: boolean = false

    onBeginContact(contact, self, other) {
        cc.log(other.sensor)
        if (this.istrue) return
        this.a = other;
        this.istrue = true;

        this.scheduleOnce(() => {
            // this.a = other.node.getComponent(cc.RigidBody);
            // let v = this.a.linearVelocity;
            // v.y = 10;
            // this.a.linearVelocity = v;
            // cc.tween(other.node)
            //     .by(1,{position:cc.v2(0,-100)})
            //     .start()
            other.sensor = true;
            other.apply();
            this.scheduleOnce(() => {
                other.sensor = false;
                other.apply();
            }, 1)
        }, 1)
    }


    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // this.a = this.node.getComponent(cc.PhysicsBoxCollider);
    }

    start() {

    }

    // update (dt) {}
}
