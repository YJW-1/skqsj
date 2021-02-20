import UIPage from "./UIPage";
import { cocosz } from "../Framework/CocosZ";
import Constant, { PageName, PanelName, FloorType } from "../Framework/Constant";
import Msg from "../Framework/Msg";
import { truncateSync } from "fs";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UiShop extends UIPage {

    private back_btn: cc.Node = null;
    private prop_btn: cc.Node = null;
    private role_btn: cc.Node = null;
    private buy_btn: cc.Node = null;
    private ballbon_btn: cc.Node = null;
    private getCoin_btn: cc.Node = null;
    private role: cc.Node = null;
    private prop: cc.Node = null;
    private isRolePage: boolean = true;

    // private prop_telescope_buy: cc.Node = null;
    private prop_shield_buy: cc.Node = null;
    private prop_video: cc.Node = null;


    // private prop_telescope_num: cc.Label = null;
    private prop_shield_num: cc.Label = null;
    private scaleNode: cc.Node = null;


    private propScroll: cc.Node = null;
    private roleScroll: cc.Node = null;
    private ballbonScroll: cc.Node = null;
    private information: cc.Node = null;


    private coinLabel: cc.Label = null;

    curSkinID: number = 0;

    curBalloonSkinID: number = 0;

    constructor() {
        super();
        this._init();
    }

    private _init() {
        let Game: cc.Prefab = cocosz.resMgr.getRes(PanelName.UiShop, cc.Prefab);
        if (Game) {
            let node: cc.Node = cc.instantiate(Game);
            if (node) {
                this._page = node;
                cc.find("Canvas/ui").addChild(node);
                node.active = true;
                node.position = cc.Vec2.ZERO;
                this._onLoad();
            }
        }
    }
    private _onLoad() {
        this.back_btn = cc.find("Canvas/ui/UiShop/ScaleNode/btn_back");
        this.prop_btn = cc.find("Canvas/ui/UiShop/ScaleNode/shop_btn_prop");

        this.role_btn = cc.find("Canvas/ui/UiShop/ScaleNode/shop_btn_cloth");

        this.ballbon_btn = cc.find("Canvas/ui/UiShop/ScaleNode/shop_btn_ballbon");

        this.buy_btn = cc.find("Canvas/ui/UiShop/ScaleNode/btn_buy");
        this.getCoin_btn = cc.find("Canvas/ui/UiShop/ScaleNode/btn_video");

        this.scaleNode = cc.find("Canvas/ui/UiShop/ScaleNode");
        this.coinLabel = cc.find("Canvas/ui/UiShop/ScaleNode/Coin/num").getComponent(cc.Label);
        // this.role = cc.find("Canvas/ui/UiShop/ScaleNode/role");
        this.information = cc.find("Canvas/ui/UiShop/ScaleNode/information");

        // this.prop_shield_buy = cc.find("Canvas/ui/UiShop/ScaleNode/prop/shield/btn_buy");
        // this.prop_shield_num = cc.find("Canvas/ui/UiShop/ScaleNode/prop/shield/num").getComponent(cc.Label);
        // this.prop_video = cc.find("Canvas/ui/UiShop/ScaleNode/prop/btn");
        this.roleScroll = this.role_btn.getChildByName("shop_btn_select_cloth").getChildByName("ScrollView").getChildByName("view").getChildByName("content");
        // this.propScroll = this.prop_btn.getChildByName("shop_btn_select__prop").getChildByName("ScrollView").getChildByName("view").getChildByName("content");
        this.ballbonScroll = this.ballbon_btn.getChildByName("shop_btn_select_ballboon").getChildByName("ScrollView").getChildByName("view").getChildByName("content");



        this._Start();
    }


    private _Start() {
        // this._initShop();
        this.back_btn.on(cc.Node.EventType.TOUCH_START, () => {
            this.onBack();
        }, this);
        this.prop_btn.on(cc.Node.EventType.TOUCH_START, () => {
            this.onProp();
        }, this);
        this.role_btn.on(cc.Node.EventType.TOUCH_START, () => {
            this.onRole();
        }, this);
        this.ballbon_btn.on(cc.Node.EventType.TOUCH_START, () => {
            this.onBallbon();
        }, this);

        let btnBuy = this.information.getChildByName("btnBuySkin");
        let btnChange = this.information.getChildByName("btnChangeSkin");

        btnBuy.on(cc.Node.EventType.TOUCH_START, () => {
            this.onBuySkin();
        }, this);

        btnChange.on(cc.Node.EventType.TOUCH_START, () => {
            this.onChangeSkin();
        }, this);


        // this.buy_btn.on(cc.Node.EventType.TOUCH_START, () => {
        //     this.onBuyRole();
        // }, this);
        // this.getCoin_btn.on(cc.Node.EventType.TOUCH_START, () => {
        //     this.onGetCoinByVideo();
        // }, this);
        // this.prop_telescope_buy.on(cc.Node.EventType.TOUCH_START, () => {
        //     this.onBuyTelescope();
        // }, this);
        // this.prop_shield_buy.on(cc.Node.EventType.TOUCH_START, () => {
        //     this.onBuyShield();
        // }, this);
        // this.prop_video.on(cc.Node.EventType.TOUCH_START, () => {
        //     this.onGetPropByVideo();
        // }, this);



        if ((cc.sys.platform === cc.sys.VIVO_GAME)) {
            lieyou_SdkManager.showBannerByBottom();
        }
        else if (cc.sys.platform === cc.sys.OPPO_GAME) {
            let sp = cocosz.resMgr.getRes("ss", cc.SpriteFrame);
            lieyou_SdkManager.hideBanner();
            lieyou_SdkManager.showNativeAd_small({
                node: this.scaleNode.getChildByName("nativePos"), "titleColor": cc.color(255, 255, 255, 255,),
                "descColor": cc.color(255, 255, 255, 255,), bgPath: 'texture/ss', texture: sp, scale: 0.9, insetTop: 10, insetBottom: 10, insetLeft: 10, insetRight: 10
            });
        }


        this.coinLabel.string = cocosz.dataMgr.CoinCount + "";
        cc.log(cocosz.dataMgr.CoinCount)
        cocosz.schedule(() => {

            this.coinLabel.string = cocosz.dataMgr.CoinCount + "";
            // cc.log(this.roleScroll.x);

            if (this.role_btn.getChildByName("shop_btn_select_cloth").active == true) {
                let num = Math.floor(Math.abs(this.roleScroll.x + 337.5 - 100) / 225);
                // cc.log(num)
                this.curSkinID = num;
                let sp = this.information.getChildByName("role").getChildByName("sp");
                sp.getComponent(cc.Sprite).spriteFrame = this.roleScroll.getChildByName("role" + num).getComponent(cc.Sprite).spriteFrame;

                sp.scale = 1;
                let btnBuy = this.information.getChildByName("btnBuySkin");
                let btnChange = this.information.getChildByName("btnChangeSkin");
                let box = this.information.getChildByName("box");
                let using = this.information.getChildByName("using");
                let sprice = this.information.getChildByName("sprice").getComponent(cc.Label);


                let info = cocosz.dataMgr.getSkinInfo(num);

                sprice.string = info.Price;

                switch (info.State) {
                    case 0: {
                        sprice.node.active = true;
                        using.active = false;
                        box.active = true;
                        btnChange.active = false;
                        btnBuy.active = true;
                        break;
                    }
                    case 1: {
                        sprice.node.active = false;
                        using.active = false;
                        box.active = false;
                        btnChange.active = true;
                        btnBuy.active = false;
                        break;
                    }
                    case 2: {
                        sprice.node.active = false;
                        using.active = true;
                        box.active = false;
                        btnChange.active = false;
                        btnBuy.active = false;
                        break;
                    }
                }
            }
            else {
                let num = Math.floor(Math.abs(this.ballbonScroll.x + 337.5 - 100) / 225);
                this.curBalloonSkinID = num;

                let sp = this.information.getChildByName("role").getChildByName("sp");

                sp.getComponent(cc.Sprite).spriteFrame = this.ballbonScroll.getChildByName("balloon" + (num + 1)).getComponent(cc.Sprite).spriteFrame;

                sp.scale = 1.4;
                let btnBuy = this.information.getChildByName("btnBuySkin");
                let btnChange = this.information.getChildByName("btnChangeSkin");
                let box = this.information.getChildByName("box");
                let using = this.information.getChildByName("using");
                let sprice = this.information.getChildByName("sprice").getComponent(cc.Label);

                let info = cocosz.dataMgr.getBallbonSkinInfo(num);

                sprice.string = info.Price;

                switch (info.State) {
                    case 0: {
                        sprice.node.active = true;
                        using.active = false;
                        box.active = true;
                        btnChange.active = false;
                        btnBuy.active = true;
                        break;
                    }
                    case 1: {
                        sprice.node.active = false;
                        using.active = false;
                        box.active = false;
                        btnChange.active = true;
                        btnBuy.active = false;
                        break;
                    }
                    case 2: {
                        sprice.node.active = false;
                        using.active = true;
                        box.active = false;
                        btnChange.active = false;
                        btnBuy.active = false;
                        break;
                    }
                }


            }
        }, 0.025)

    }

    private _initShop() {
        this.onRole();

        let prefab1 = cocosz.resMgr.getRes("ballbonItem", cc.Prefab);
        let prefab2 = cocosz.resMgr.getRes("roleItem", cc.Prefab);
        let prefab3 = cocosz.resMgr.getRes("propItem", cc.Prefab);

        this.ballbonScroll.removeAllChildren();
        this.roleScroll.removeAllChildren();
        for (let i = 0; i < 7; i++) {
            let node = cc.instantiate(prefab1);
            node.x = 100 + i * 200;
            this.ballbonScroll.addChild(node);
            node.getComponent("shopItem").init(i);

        }


        for (let i = 0; i < 6; i++) {
            let node = cc.instantiate(prefab2);
            node.x = 100 + i * 200;
            this.roleScroll.addChild(node);
            node.getComponent("shopItem").init(i);
        }



        for (let i = 0; i < 2; i++) {
            let node = cc.instantiate(prefab3);
            node.x = 100 + i * 200;
            this.propScroll.addChild(node);
            node.getComponent("propItem").init(i);
        }


        // cc.log( this.ballbonScroll)
        // this.role.active = true;
        // this.prop.active = false;
        // this.role_btn.getChildByName("btn_tab_1").active = true;
        // this.prop_btn.getChildByName("btn_tab_1").active = false;
        // this.role.removeAllChildren();
        // for (let i = 0; i < 9; i++) {
        //     let prefab = cocosz.resMgr.getRes("shopRole", cc.Prefab);
        //     let node = cc.instantiate(prefab);
        //     this.role.addChild(node);
        //     node.getComponent("shopRole").onInit(i);
        // }
    }

    onUpdatePropNum() {
        // this.prop_telescope_num.string = cocosz.dataMgr.Telescope + "";
        // this.prop_shield_num.string = cocosz.dataMgr.Shield + "";
    }

    onBuySkin() {
        if (this.role_btn.getChildByName("shop_btn_select_cloth").active == true) {
            let info = cocosz.dataMgr.getSkinInfo(this.curSkinID);
            let price = info.Price;
            if (price > cocosz.dataMgr.CoinCount) {
                this.onTips("金币不足");
                return;
            }

            cocosz.dataMgr.CoinCount -= price;
            cocosz.dataMgr.CurSkinId = this.curSkinID;
            this.onTips("购买皮肤成功");

        }
        else {

            let info = cocosz.dataMgr.getBallbonSkinInfo(this.curSkinID);
            let price = info.Price;
            if (price > cocosz.dataMgr.CoinCount) {
                this.onTips("金币不足");
                return;
            }

            cocosz.dataMgr.CoinCount -= price;
            cocosz.dataMgr.CurBallbonSkinId = this.curBalloonSkinID;
            this.onTips("购买皮肤成功");
        }

    }




    onChangeSkin() {
        if (this.role_btn.getChildByName("shop_btn_select_cloth").active == true) {
            let info = cocosz.dataMgr.getSkinInfo(this.curSkinID);
            cocosz.dataMgr.CurSkinId = this.curSkinID;
            this.onTips("更换皮肤成功");
        }
        else {
            let info = cocosz.dataMgr.getBallbonSkinInfo(this.curSkinID);
            cocosz.dataMgr.CurBallbonSkinId = this.curBalloonSkinID;
            this.onTips("更换皮肤成功");

        }
    }





    private onBuyShield() {
        if (cocosz.dataMgr.CoinCount >= 600) {
            cocosz.dataMgr.CoinCount -= 600;
            cocosz.dataMgr.Shield++;
            Msg.Show("恭喜获得金钟罩");
            cc.game.emit(Constant.E_UPDATE_COIN);
            this.onUpdatePropNum();
        }
        else {
            Msg.Show("金币不足");
        }
    }

    private onGetPropByVideo() {
        cocosz.audioMgr.playbtnEffect();
        lieyou_SdkManager.showRewardedVideoAd((res) => {
            cocosz.audioMgr.resumAllMusic();
            if (res) {
                cocosz.dataMgr.Shield++;
                cc.game.emit(Constant.E_UPDATE_COIN);
                this.onUpdatePropNum();
                this.onTips("恭喜获得1个金钟罩");
            } else {
                this.onTips("视频播放完成才能获取奖励");
            }
        });
    }

    private onBuyTelescope() {
        if (cocosz.dataMgr.CoinCount >= 800) {
            cocosz.dataMgr.CoinCount -= 800;
            cocosz.dataMgr.Telescope++;
            Msg.Show("恭喜获得千里眼");
            cc.game.emit(Constant.E_UPDATE_COIN);
            this.onUpdatePropNum();
        }
        else {
            Msg.Show("金币不足");
        }
    }


    private onBuyRole() {
        let info = cocosz.dataMgr.getSkinInfo(cocosz.gameMgr.curShopSkinID);
        if (info.State == 1 || info.State == 2) {
            Msg.Show("该皮肤已拥有");
        }
        else if (cocosz.dataMgr.CoinCount >= info.Price && info.Price != -1 && info.Price != -999) {
            cocosz.dataMgr.CoinCount -= info.Price;
            cocosz.dataMgr.CurSkinId = cocosz.gameMgr.curShopSkinID;
            Msg.Show("皮肤解锁成功");

            cc.game.emit(Constant.E_UPDATE_COIN);
            cc.game.emit(Constant.E_UPDATE_SKIN);
        }
        else {
            Msg.Show("金币不足");
        }
    }
    onTips(tips) {
        Msg.Show(tips);
    }
    private onGetCoinByVideo() {

        cocosz.audioMgr.playbtnEffect();
        // Msg.Show("视频播放失败!");

        lieyou_SdkManager.showRewardedVideoAd((res) => {
            cocosz.audioMgr.resumAllMusic();
            if (res) {
                cocosz.dataMgr.CoinCount += 200;
                cc.game.emit(Constant.E_UPDATE_COIN);
                this.onTips("恭喜获得200金币");
            } else {
                this.onTips("视频播放完成才能获取奖励");
            }
        });

    }
    private onRole() {
        // this.role.active = true;
        this.role_btn.getChildByName("shop_btn_select_cloth").active = true;
        // this.prop.active = false;
        this.ballbon_btn.getChildByName("shop_btn_select_ballboon").active = false;
        // this.prop.active = false;
        this.prop_btn.getChildByName("shop_btn_select__prop").active = false;

        // this.buy_btn.active = true;
        // this.getCoin_btn.active = true;

    }

    private onProp() {
        // this.role.active = false;
        this.role_btn.getChildByName("shop_btn_select_cloth").active = false;
        // this.prop.active = true;
        this.ballbon_btn.getChildByName("shop_btn_select_ballboon").active = false;
        // this.prop.active = false;
        this.prop_btn.getChildByName("shop_btn_select__prop").active = true;

    }
    private onBallbon() {
        // this.role.active = false;
        this.role_btn.getChildByName("shop_btn_select_cloth").active = false;
        // this.prop.active = false;
        this.ballbon_btn.getChildByName("shop_btn_select_ballboon").active = true;
        // this.prop.active = true;
        this.prop_btn.getChildByName("shop_btn_select__prop").active = false;

    }


    private onBack() {
        cocosz.audioMgr.playbtnEffect();
        cocosz.unscheduleAllCallbacks()
        cc.tween(this.scaleNode)
            .to(0.2, { scale: 0 })
            .call(() => {
                lieyou_SdkManager.showMoreGameByBanner();
                this._page.destroy();
            })
            .start()
    }
    protected onOpen() {
        this.onUpdatePropNum();
        this.scaleNode.scale = 0;
        cc.tween(this.scaleNode)
            .to(0.2, { scale: 1 })
            .start()


        if ((cc.sys.platform === cc.sys.VIVO_GAME)) {
            lieyou_SdkManager.showSpotByPause();
        }
        else if (cc.sys.platform === cc.sys.OPPO_GAME) {
            this.scaleNode.y = 80;
            let sp = cocosz.resMgr.getRes("ss", cc.SpriteFrame)
            lieyou_SdkManager.showNativeAd_small({
                node: this.scaleNode.getChildByName("nativePos"), "titleColor": cc.color(255, 255, 255, 255,),
                "descColor": cc.color(255, 255, 255, 255,), bgPath: 'texture/ss', texture: sp, scale: 1, insetTop: 10, insetBottom: 10, insetLeft: 10, insetRight: 10
            });
        }
        // cocosz.audioMgr.playHomeMusic();
        // utils.hideTryGamesWidget();////*
        // utils.hideMoreGamesWidget();
        // utils.hideCreateShortcutWidget();
        // utils.adManager.hideRewardInsert();
        // utils.AdAgentCocosplay.hideInterstitialAd(); 

        // this.ScaleNode.scale = 0;
        // cocosz.gameMgr.tweeNode(this.ScaleNode);
    }

    protected onClose() {
        cc.game.targetOff(this);
    }

    protected onDestroy() {
        cc.game.targetOff(this);
    }
}
