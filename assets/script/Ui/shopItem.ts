import { cocosz } from "../Framework/CocosZ";
import Constant from "../Framework/Constant";
import Msg from "../Framework/Msg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    buy: cc.Node = null;

    @property(cc.Node)
    change: cc.Node = null;

    @property(cc.Node)
    alreadyWear: cc.Node = null;


    @property(cc.Label)
    coin: cc.Label = null;


    id: number = 1;


    sp: cc.Sprite = null;

    init(id) {
        this.id = id;
        let info = cocosz.dataMgr.getBallbonSkinInfo(this.id);
        if (this.node.name == "ballbonItem") {
            this.sp = this.node.getChildByName("sp").getComponent(cc.Sprite);
            let sp = cocosz.resMgr.getRes("balloon" + (this.id + 1), cc.SpriteFrame);
            this.sp.spriteFrame = sp;
            this.coin.string = info.Price;
        }
        else if (this.node.name == "roleItem") {
            info = cocosz.dataMgr.getSkinInfo(this.id)
            this.sp = this.node.getChildByName("sp").getComponent(cc.Sprite);
            let sp = cocosz.resMgr.getRes("role" + (this.id), cc.SpriteFrame);
            this.sp.spriteFrame = sp;
            this.coin.string = info.Price;
        }


        cc.log(info, this.node.x);


        switch (info.State) {
            case 0: {
                this.buy.active = true;
                this.change.active = false;
                this.alreadyWear.active = false;
                break;
            }
            case 1: {
                this.buy.active = false;
                this.change.active = true;
                this.alreadyWear.active = false;
                this.coin.node.parent.active = false;
                break;
            }
            case 2: {
                this.buy.active = false;
                this.change.active = false;
                this.alreadyWear.active = true;
                this.coin.node.parent.active = false;
                break;
            }
        }
    }

    // LIFE-CYCLE CALLBACKS:

    onDestroy() {
        cc.game.targetOff(this);
    }

    // onDisable() {
    //     cc.game.targetOff(this);
    // }
    // onDisable() {
    //     cc.game.targetOff(this);
    // }

    onLoad() {
    }

    start() {
        if (this.node.name == "ballbonItem") {

            this.buy.on(cc.Node.EventType.TOUCH_END, (() => {
                let info = cocosz.dataMgr.getBallbonSkinInfo(this.id)
                let price = info.Price;
                cc.log(info);
                if (info.State == 1 || info.State == 2) {
                    Msg.Show("该皮肤已拥有")
                    return;
                }
                if (cocosz.dataMgr.CoinCount >= price) {
                    cocosz.dataMgr.CurBallbonSkinId = this.id;
                    cocosz.dataMgr.CoinCount -= price;
                    cc.game.emit(Constant.E_MAP_FINISH);

                    cc.game.emit(Constant.E_UPDATE_COIN)
                    Msg.Show("购买皮肤成功");
                }
                else {
                    Msg.Show("金币不足,先去冒险获得金币吧");
                }
            }))


            this.change.on(cc.Node.EventType.TOUCH_END, (() => {
                cocosz.dataMgr.CurBallbonSkinId = this.id;
                cc.game.emit(Constant.E_MAP_FINISH);
                Msg.Show("更换皮肤成功")

            }))
        }
        else if (this.node.name == "roleItem") {

            this.buy.on(cc.Node.EventType.TOUCH_END, (() => {
                let price = cocosz.dataMgr.getSkinInfo(this.id).Price;
                cc.log(price);

                if (cocosz.dataMgr.CoinCount >= price) {
                    cocosz.dataMgr.CurSkinId = this.id;
                    cocosz.dataMgr.CoinCount -= price;
                    cc.game.emit(Constant.E_MAP_FINISH);

                    cc.game.emit(Constant.E_UPDATE_COIN)

                    Msg.Show("购买皮肤成功");
                }
                else {
                    Msg.Show("金币不足,先去冒险获得金币吧");
                }
            }))
            this.change.on(cc.Node.EventType.TOUCH_END, (() => {
                cocosz.dataMgr.CurSkinId = this.id;
                cc.game.emit(Constant.E_MAP_FINISH);
                Msg.Show("更换皮肤成功")
            }))

        }



        cc.game.on(Constant.E_MAP_FINISH, () => {
            this.init(this.id);
        }, this)

    }

    // update (dt) {}
}
