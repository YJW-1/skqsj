// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { cocosz } from "../Framework/CocosZ";
import { tag } from "../Framework/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    onFinish() {
        this.node.destroy();
    }


    onBeginContact(contact, self, other) {
        // cc.log(other.tag)
        if (cocosz.sceneMgr.sceneName == "rewardLevel2") {
            if (other.tag == tag.honeybee) {
                let parent = cc.find("Canvas/rewardLevel/Coin");


                if (other.node.scale == 3.5) {
                    let node = cc.instantiate(cc.find("Canvas/rewardBigBee"));
                    cc.find("Canvas").addChild(node);
                    cocosz.dataMgr.CoinCount += 300;
                    parent.getChildByName("num").getComponent(cc.Label).string = cocosz.dataMgr.CoinCount.toString();
                    node.scale = 0;
                    cc.tween(node)
                        .to(0.3, { scale: 1 })
                        .delay(0.5)
                        .to(0.2, { scale: 0 })


                        .call(() => {
                            node.destroy();
                        })
                        .start()




                    cc.tween(node.getChildByName("game_halo_bigbee"))
                        .repeatForever(cc.tween().by(5, { angle: 360 }))
                        .start()

                    other.node.destroy();

                    return;
                }

                let node = cc.instantiate(parent.getChildByName("gold"));

                let pos = other.node.convertToWorldSpaceAR(cc.v2(0, 0));
                let pp = parent.convertToNodeSpaceAR(pos)
                parent.addChild(node);
                node.setPosition(pp);
                node.scale = 0.5;
                cocosz.dataMgr.CoinCount += 10;
                parent.getChildByName("num").getComponent(cc.Label).string = cocosz.dataMgr.CoinCount.toString();
                let pos2 = cc.v2(-pp.x - 19.766, -pp.y + 3.866)

                cc.tween(node)
                    .parallel(
                        cc.tween().by(1, { x: pos2.x }, { easing: 'sineOut' }),
                        cc.tween().sequence(
                            cc.tween().by(0.3, { y: -50 }, { easing: 'sineOut' }),
                            cc.tween().by(0.7, { y: pos2.y + 50 }, { easing: 'sineOut' })
                        )
                    )
                    .delay(1)
                    .call(() => {
                        node.destroy();
                    })
                    .start()
                other.node.destroy();
            }

            contact.disabled = true;
        }
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

        if (cc.sys.platform === cc.sys.WECHAT_GAME && cocosz.dataMgr.ShockOn) {
            window["wx"].vibrateShort();
            window["wx"].vibrateShort();
        }
    }

    // update (dt) {}
}
