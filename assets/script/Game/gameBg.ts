import { cocosz } from "../Framework/CocosZ";

const { ccclass, property } = cc._decorator;

@ccclass
export default class gameBg extends cc.Component {


    // LIFE-CYCLE CALLBACKS:

    onLoad() {
    }

    start() {
        this.node.zIndex -= 9999;

        cc.log("---------------------背景生成");
        let d = null;
        if (cocosz.sceneMgr.sceneName == "Game") {
            d = cc.tween().sequence(
                cc.tween().call(() => {
                    let cNode1 = cc.instantiate(this._Cloud1);
                    let cNode2 = cc.instantiate(this._Cloud2);
                    this._Cloud1.parent.addChild(cNode1);
                    this._Cloud1.parent.addChild(cNode2);
                    cNode1.y = Math.random() * 360;
                    cNode2.y = Math.random() * 360;
                    if (cNode1.x < 0) {
                        cNode1.x -= Math.random() * 360;
                    }
                    else {
                        cNode1.x += Math.random() * 360;
                    }

                    if (cNode2.x < 0) {
                        cNode2.x -= Math.random() * 360;
                    }
                    else {
                        cNode2.x += Math.random() * 360;
                    }


                    let pos1 = cc.v2((2500 + Math.random() * 500) * cNode1.scaleX, 0)

                    let pos2 = cc.v2((2500 + Math.random() * 500) * cNode2.scaleX, 0)

                    if (Math.random() > 0.4) {
                        cNode1.x *= -1;
                        cNode1.scaleX *= -1;
                        pos1.x *= -1;
                    }

                    cc.tween(cNode1)
                        .by(50 + 5 * Math.random(), { position: pos1 })
                        .call(() => {
                            cNode1.destroy();
                        })
                        .start()

                    cc.tween(cNode2)
                        .by(50 + 5 * Math.random(), { position: pos2 })
                        .call(() => {
                            cNode2.destroy();
                        })
                        .start()
                }),
                cc.tween().delay(50)
            )
        }
        else {
            d = cc.tween().sequence(
                cc.tween().call(() => {
                    let node = cc.instantiate(this.node.getChildByName("sCloud" + Math.floor(Math.random() * 7)));
                    node.x = Math.random() * 500 - 250;
                    this.node.addChild(node);
                    cc.tween(node)
                        .by(20, { position: cc.v2(0, -3000) })
                        .call(() => {
                            node.destroy()
                        })
                        .start()

                }),
                cc.tween().delay(7)
            )
            cc.tween(this.node)
                .repeatForever(d)
                .start()
        }


        cc.log(d);
    }

    onDestroy() {
        cc.log("---------------------背景销毁");
    }

    // update (dt) {}
}
