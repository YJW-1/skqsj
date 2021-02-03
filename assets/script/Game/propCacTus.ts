
import { cocosz } from "../Framework/CocosZ";
import { tag } from "../Framework/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class propCacTus extends cc.Component {

    hand1: cc.Node = null;
    hand2: cc.Node = null;

    l1: cc.Node = null;
    isDes: boolean = false;

    action: any = null;

    isAction: boolean = false;

    angle: any = null;




    onBeginContact(contact, self, other) {
        if (other.tag == tag.thorn && (this.node.name == "cactus3" || this.node.name == "cactus2")) {
            if (this.node.parent.name == "rewardLevel") {
                contact.disabled = true;
                return
            }

            let rb = this.l1.getComponent(cc.RigidBody);
            let v = this.l1.getComponent(cc.RigidBody).linearVelocity;
            v.x = 50;
            rb.linearVelocity = v;
        }
        else if (other.tag == tag.bigFan) {
            if (this.isDes) return;
            this.isDes = true;
            this.scheduleOnce(() => {
                this.node.destroy();
            }, 0.3)
        }

    }
    // LIFE-CYCLE CALLBACKS:

    onDestroy() {
        this.unscheduleAllCallbacks();
    }

    onLoad() {
        if (this.node.name == "cactus3" || this.node.name == "cactus2") {

            this.hand1 = this.node.getChildByName("scale").getChildByName("hand1");
            this.hand2 = this.node.getChildByName("scale").getChildByName("hand2");
            this.l1 = this.node.getChildByName("l1");
        }
        else if (this.node.name == "cactus5") {
            this.hand1 = this.node.getChildByName("sp").getChildByName("hand1");
            this.hand2 = this.node.getChildByName("sp").getChildByName("hand2");
        }
        else {
            this.hand1 = this.node.getChildByName("hand1");
            this.hand2 = this.node.getChildByName("hand2");
        }
    }


    onThorn() {

        let prefab = cocosz.resMgr.getRes("thorn", cc.Prefab);
        let node = cc.instantiate(prefab);

        let hd = this.angle / 180 * Math.PI;
        // cc.log(this.angle);
        node.y = Math.random() * 12 - 6 - 10;
        node.x = 30;
        node.angle = this.angle;
        node.scale = 1.5;
        this.node.addChild(node);
        let rb = node.getComponent(cc.RigidBody);
        let v = rb.linearVelocity;

        // this.angle = Math.ceil(hd / Math.PI * 180);
        // cc.log(Math.sin(hd), Math.cos(hd))
        v.x = 700 * Math.cos(hd);
        v.y = 700 * Math.sin(hd);
        rb.linearVelocity = v;
        cocosz.audioMgr.playmCactusEffect2()

        this.isAction = false;
    }


    start() {


        // let rb = this.l1.getComponent(cc.RigidBody);
        // let v = this.l1.getComponent(cc.RigidBody).linearVelocity;
        // v.x = 100;
        // rb.linearVelocity = v;


        if (this.node.parent.name == "rewardLevel") {

            let a = cc.tween().sequence(
                cc.tween().call(() => {
                    this.isAction = true;
                    cc.tween(this.hand2)
                        .by(0.03, { position: cc.v2(4, 0) })
                        .by(0.03, { position: cc.v2(-4, 0) })
                        .start()
                    cc.tween(this.hand1)
                        .by(0.03, { position: cc.v2(-4, 0) })
                        .by(0.03, { position: cc.v2(4, 0) })
                        .start()
                }),
                cc.tween().delay(0.12),
                cc.tween().call(() => {
                    this.onThorn();
                })


            )

            // this.action = cc.tween(this.node)
            //     .repeatForever(a)
            //     .start()

            this.schedule(() => {

                this.action = cc.tween(this.node)
                    .call(() => {
                        this.isAction = true;
                        cc.tween(this.hand2)
                            .by(0.03, { position: cc.v2(4, 0) })
                            .by(0.03, { position: cc.v2(-4, 0) })
                            .start()
                        cc.tween(this.hand1)
                            .by(0.03, { position: cc.v2(-4, 0) })
                            .by(0.03, { position: cc.v2(4, 0) })
                            .start()
                    })
                    .delay(0.12)
                    .call(() => {
                        this.onThorn();
                    })
                    .start()
            }, 0.15)

            this.scheduleOnce(() => {
                this.unscheduleAllCallbacks()
            }, 25)





            this.node.parent.on(cc.Node.EventType.TOUCH_MOVE, ((touch: cc.Touch) => {
                if (cocosz.gameMgr.isGameOver) return;
                if (this.isAction) return;

                let pp = touch.getLocation();

                let pos2 = this.node.parent.convertToNodeSpaceAR(pp);
                let pos = cc.v2(499 + pos2.x, pos2.y);



                let hd = pos.signAngle(cc.v2(100, 0));

                this.angle = -hd / Math.PI * 180;
                this.angle = this.angle > 80 ? 80 : this.angle;
                // cc.log(this.angle);
                // this.action.start();
            }))
            this.node.parent.on(cc.Node.EventType.TOUCH_START, ((touch: cc.Touch) => {
                if (cocosz.gameMgr.isGameOver) return;
                if (this.isAction) return;

                let pp = touch.getLocation();

                let pos2 = this.node.parent.convertToNodeSpaceAR(pp);
                let pos = cc.v2(499 + pos2.x, pos2.y);



                let hd = pos.signAngle(cc.v2(100, 0));

                this.angle = -hd / Math.PI * 180;
                this.angle = this.angle > 80 ? 80 : this.angle;


                // this.action.start();
            }))
            return;
        }



        let a = cc.tween().sequence(
            cc.tween().by(0.2, { position: cc.v2(-4, 0) }),
            cc.tween().by(0.2, { position: cc.v2(4, 0) })
        )
        cc.tween(this.hand1)
            .repeatForever(a)
            .start()



        let b = cc.tween().sequence(
            cc.tween().by(0.2, { position: cc.v2(4, 0) }),
            cc.tween().by(0.2, { position: cc.v2(-4, 0) })
        )
        cc.tween(this.hand2)
            .repeatForever(b)
            .start()


        this.schedule(() => {
            let prefab = cocosz.resMgr.getRes("thorn", cc.Prefab);
            let node = cc.instantiate(prefab);
            node.zIndex -= 1009;
            // if (this.node.y >= 1000 || this.node.y <= -1000) {
            //     this.node.destroy();
            // }
            if (cocosz.dataMgr.CurLevelId == 136 && cocosz.gameMgr.surplusLevelNum > 0) return
            if (this.node.name == "cactus3" || this.node.name == "cactus2") {

                node.y = Math.random() * 12 - 6 - 10;
                node.x = -30;
                node.angle = 180;
                this.node.getChildByName("scale").addChild(node);
                let rb = node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                let angle = Math.PI / 180 * this.node.angle;
                let sin = Math.sin(angle);
                let cos = Math.cos(angle);
                // cc.log(sin,cos,this.node.angle)
                cocosz.audioMgr.playmCactusEffect2()
                v.x = -700 * cos;
                v.y = -700 * sin;
                rb.linearVelocity = v;
            }
            else {
                node.y = Math.random() * 12 - 6 - 10;
                node.x = 30;
                this.node.addChild(node);
                let rb = node.getComponent(cc.RigidBody);
                let v = rb.linearVelocity;
                v.x = 700 * this.node.scaleX / Math.abs(this.node.scaleX);
                rb.linearVelocity = v;
                cocosz.audioMgr.playmCactusEffect2()
            }
        }, 0.1)
    }

    update(dt) {
        // let rb = this.node.getComponent(cc.RigidBody)
        // let v = rb.linearVelocity;
        // v.x = 50;
        // rb.linearVelocity = v;
        // if (this.node.x >= 800) {
        //     this.node.destroy();
        // }
    }
}
