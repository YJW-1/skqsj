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


    @property(cc.Label)
    num: cc.Label = null;


    id: number = 1;


    @property(cc.Sprite)
    sp: cc.Sprite = null;

    init(id) {
        this.id = id;
        if (this.id == 0) {
            this.num.string = cocosz.dataMgr.BoomNum.toString();
            this.sp.spriteFrame = cocosz.resMgr.getRes("boom", cc.SpriteFrame);
            this.coin.string = "1000";
        }
        else if (this.id == 1) {
            this.num.string = cocosz.dataMgr.SkinVedioNum.toString();
            this.sp.spriteFrame = cocosz.resMgr.getRes("skipVideo", cc.SpriteFrame);
            this.coin.string = "1500";
        }


    }
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.buy.on(cc.Node.EventType.TOUCH_END, (() => {
            if (this.id == 0) {

                if (cocosz.dataMgr.CoinCount >= 1000) {
                    cocosz.dataMgr.BoomNum++;
                    cocosz.dataMgr.CoinCount -= 1000;
                    cc.game.emit(Constant.E_MAP_FINISH);

                    cc.game.emit(Constant.E_UPDATE_COIN)
                    Msg.Show("购买炸弹成功");
                }
                else {
                    Msg.Show("金币不足,先去冒险获得金币吧");
                }
            }
            else {

                if (cocosz.dataMgr.CoinCount >= 1500) {
                    cocosz.dataMgr.SkinVedioNum++;

                    cocosz.dataMgr.CoinCount -= 1500;
                    cc.game.emit(Constant.E_MAP_FINISH);

                    cc.game.emit(Constant.E_UPDATE_COIN)
                    Msg.Show("购买跳过卡成功");
                }
                else {
                    Msg.Show("金币不足,先去冒险获得金币吧");
                }
            }

        }))


        cc.game.on(Constant.E_MAP_FINISH, () => {
            this.init(this.id);
        }, this)
    }

    // update (dt) {}
}
