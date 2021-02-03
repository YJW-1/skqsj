import { cocosz } from "../Framework/CocosZ";
import { tag } from "../Framework/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    private _rigidBody: cc.RigidBody = null;
    private coinSp: cc.Node = null;

    onBeginContact(contact, self, other) {

        if (this.node.parent.parent.parent.name == "coinMgr") {

            if (other.tag == tag.thorn) {
                contact.disabled = true;
                this.node.parent.parent.destroy();
                cocosz.audioMgr.playMetalStoneEffect2();
                // cocosz.gameMgr.coinNum++;



                let node = cc.instantiate(this.coinSp);
                let parent = this.node.parent.parent.parent.parent.getChildByName("rewardLevel").getChildByName("Coin");
                // let c = parent.getChildByName("gold")
                // cc.log(parent);
                let sss = this.coinSp.parent.getPosition()
                // let pos = parent.convertToWorldSpaceAR(cc.v2(sss.x - this.node.parent.parent.x,sss.y - this.node.parent.parent.y,));
                let pos = this.coinSp.parent.convertToWorldSpaceAR(cc.v2(0, 0));
                let pp = parent.convertToNodeSpaceAR(pos)
                parent.addChild(node);
                node.setPosition(pp);
                node.scale = 0.5;
                // cc.log(pos.x, pos.y, pp.x, pp.y)


                // let pos = this.gold.parent.convertToWorldSpaceAR(this.coinSp.getPosition());
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
            }
            else if (other.tag == tag.desPoint) {
                if (this.node.parent.parent.name == "cactus5" || this.node.parent.parent.name == "coin") {
                    this.node.parent.parent.destroy();
                }
            }
            return;
        }
        if (other.tag == tag.stone || other.tag == tag.honeybee || other.tag == tag.floorThorn || other.tag == tag.rain || other.tag == tag.bat || other.tag == tag.bigFan) {
            cocosz.audioMgr.playMetalStoneEffect2();
            if (this.node.parent.name != "prop") {
                this.node.parent.destroy();
            }
            else {
                // if (cocosz.dataMgr.CurLevelId == 32) {
                //     this.node.parent.parent.destroy();
                //     return;
                // }
                this.node.destroy();
            }
        }
        else if (other.tag == tag.thorn) {
            contact.disabled = true;
            if (this.node.parent.name != "prop") {
                this.node.parent.destroy();
            }
            else {
                this.node.destroy();
            }
            cocosz.audioMgr.playMetalStoneEffect2();
        }
        else if (other.tag == tag.succeedPoint || other.tag == tag.faidPoint) {
            contact.disabled = true;
        }
        else if (other.tag == tag.desPoint) {
            if (this.node.parent.parent.name == "cactus5" || this.node.parent.parent.name == "coin") {
                this.node.parent.parent.destroy();
            }
        }
    }
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this._rigidBody = this.node.getComponent(cc.RigidBody);
        if (this.node.parent.parent.parent.name == "coinMgr") {
            this.coinSp = this.node.parent.parent.getChildByName("nimiCactus").getChildByName("gold")
        }
    }

    start() {
        // cc.log(this.node.parent.parent.parent.name)
        if (this.node.parent.parent.parent.name == "ScaleNode") {

            this._rigidBody.gravityScale = -2;
            // cc.log(this._rigidBody.gravityScale, "this._rigidBody.gravityScale")
            this.node.getComponent(cc.PhysicsCircleCollider).apply()
            return;
        }
        if (this.node.parent.parent.parent.name == "coinMgr") {
            // this.node.on(cc.Node.EventType.TOUCH_START, (() => {
            //     this.node.parent.parent.destroy();
            // }))

            return;
        }
        if (cocosz.dataMgr.CurLevelId == 76 || cocosz.dataMgr.CurLevelId == 137) {
            this._rigidBody.gravityScale = -2.8;
            let a = this.node.getComponent(cc.PhysicsCircleCollider);
            a.apply()
        }
        else if (cocosz.dataMgr.CurLevelId == 81) {
            this._rigidBody.gravityScale = -3;
        }
        else if (cocosz.dataMgr.CurLevelId == 90) {
            this._rigidBody.gravityScale = -4;
        }
        else if (cocosz.dataMgr.CurLevelId == 115) {
            this._rigidBody.gravityScale = -6;
            let a = this.node.getComponent(cc.PhysicsCircleCollider);
            a.friction += 5;
        }
    }

    // update (dt) {}
}
