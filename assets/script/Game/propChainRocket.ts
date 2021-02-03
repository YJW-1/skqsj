// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    switch: cc.Node = null;


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.switch.on(cc.Node.EventType.TOUCH_END, () => {
            this.switch.off(cc.Node.EventType.TOUCH_END)
            for (let child of this.node.children) {
                if (child.name == "rocket") {
                    let rb = child.addComponent(cc.RigidBody);
                    rb.enabledContactListener = true
                    rb.type = cc.RigidBodyType.Kinematic;

                    let boxPhy = child.addComponent(cc.PhysicsBoxCollider);
                    boxPhy.tag = 31;
                    boxPhy.size.width = 60;
                    boxPhy.size.height = 30;
                    boxPhy.apply();


                    let v = rb.linearVelocity;
                    v.x = 1000 * -1;
                    if (this.node.name == "chainRocket2") {
                        v.x = 500;
                    }
                    rb.linearVelocity = v;
                }
            }
        })
    }

    // update (dt) {}
}
