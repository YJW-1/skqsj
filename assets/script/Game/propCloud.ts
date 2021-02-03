
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    sp1: cc.Node = null;

    @property(cc.Node)
    sp2: cc.Node = null;

    @property(cc.Node)
    sp3: cc.Node = null;

    @property(cc.Node)
    pp: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        let a = cc.tween().sequence(
            cc.tween().by(2, { scale: 0.03, position: cc.v2(2, 4) }),
            cc.tween().by(2, { scale: -0.03, position: cc.v2(-2, -4) })
        )
        cc.tween(this.sp1)
            .repeatForever(a)
            .start()
        let b = cc.tween().sequence(
            cc.tween().by(1, { scale: 0.03, position: cc.v2(4, 4) }),
            cc.tween().by(1, { scale: -0.03, position: cc.v2(-4, -4) })
        )
        cc.tween(this.sp2)
            .repeatForever(b)
            .start()
        let c = cc.tween().sequence(
            cc.tween().by(0.8, { scale: 0.03, position: cc.v2(12, 0) }),
            cc.tween().by(0.8, { scale: -0.03, position: cc.v2(-12, 0) })
        )
        cc.tween(this.sp3)
            .repeatForever(c)
            .start()


        this.schedule(() => {
            let num = 2;
            while (num-- > 0) {
                let node = cc.instantiate(this.pp);
                node.zIndex -= 10;
                this.node.addChild(node);
                node.active = true;
                node.x = Math.random() * 60 - 30;

                // node.getComponent(cc.PhysicsCircleCollider).apply()
            }
        }, 0.25)
    }

    // update (dt) {}
}
