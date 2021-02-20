"use strict";
cc._RF.push(module, 'adf79Wz1HZBJoJco10PxZPH', 'UiShop');
// script/Ui/UiShop.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIPage_1 = require("./UIPage");
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var Msg_1 = require("../Framework/Msg");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UiShop = /** @class */ (function (_super) {
    __extends(UiShop, _super);
    function UiShop() {
        var _this = _super.call(this) || this;
        _this.back_btn = null;
        _this.prop_btn = null;
        _this.role_btn = null;
        _this.buy_btn = null;
        _this.ballbon_btn = null;
        _this.getCoin_btn = null;
        _this.role = null;
        _this.prop = null;
        _this.isRolePage = true;
        // private prop_telescope_buy: cc.Node = null;
        _this.prop_shield_buy = null;
        _this.prop_video = null;
        // private prop_telescope_num: cc.Label = null;
        _this.prop_shield_num = null;
        _this.scaleNode = null;
        _this.propScroll = null;
        _this.roleScroll = null;
        _this.ballbonScroll = null;
        _this.information = null;
        _this.coinLabel = null;
        _this.curSkinID = 0;
        _this.curBalloonSkinID = 0;
        _this._init();
        return _this;
    }
    UiShop.prototype._init = function () {
        var Game = CocosZ_1.cocosz.resMgr.getRes(Constant_1.PanelName.UiShop, cc.Prefab);
        if (Game) {
            var node = cc.instantiate(Game);
            if (node) {
                this._page = node;
                cc.find("Canvas/ui").addChild(node);
                node.active = true;
                node.position = cc.Vec2.ZERO;
                this._onLoad();
            }
        }
    };
    UiShop.prototype._onLoad = function () {
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
    };
    UiShop.prototype._Start = function () {
        var _this = this;
        // this._initShop();
        this.back_btn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.onBack();
        }, this);
        this.prop_btn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.onProp();
        }, this);
        this.role_btn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.onRole();
        }, this);
        this.ballbon_btn.on(cc.Node.EventType.TOUCH_START, function () {
            _this.onBallbon();
        }, this);
        var btnBuy = this.information.getChildByName("btnBuySkin");
        var btnChange = this.information.getChildByName("btnChangeSkin");
        btnBuy.on(cc.Node.EventType.TOUCH_START, function () {
            _this.onBuySkin();
        }, this);
        btnChange.on(cc.Node.EventType.TOUCH_START, function () {
            _this.onChangeSkin();
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
            var sp = CocosZ_1.cocosz.resMgr.getRes("ss", cc.SpriteFrame);
            lieyou_SdkManager.hideBanner();
            lieyou_SdkManager.showNativeAd_small({
                node: this.scaleNode.getChildByName("nativePos"), "titleColor": cc.color(255, 255, 255, 255),
                "descColor": cc.color(255, 255, 255, 255), bgPath: 'texture/ss', texture: sp, scale: 0.9, insetTop: 10, insetBottom: 10, insetLeft: 10, insetRight: 10
            });
        }
        this.coinLabel.string = CocosZ_1.cocosz.dataMgr.CoinCount + "";
        cc.log(CocosZ_1.cocosz.dataMgr.CoinCount);
        CocosZ_1.cocosz.schedule(function () {
            _this.coinLabel.string = CocosZ_1.cocosz.dataMgr.CoinCount + "";
            // cc.log(this.roleScroll.x);
            if (_this.role_btn.getChildByName("shop_btn_select_cloth").active == true) {
                var num = Math.floor(Math.abs(_this.roleScroll.x + 337.5 - 100) / 225);
                // cc.log(num)
                _this.curSkinID = num;
                var sp = _this.information.getChildByName("role").getChildByName("sp");
                sp.getComponent(cc.Sprite).spriteFrame = _this.roleScroll.getChildByName("role" + num).getComponent(cc.Sprite).spriteFrame;
                sp.scale = 1;
                var btnBuy_1 = _this.information.getChildByName("btnBuySkin");
                var btnChange_1 = _this.information.getChildByName("btnChangeSkin");
                var box = _this.information.getChildByName("box");
                var using = _this.information.getChildByName("using");
                var sprice = _this.information.getChildByName("sprice").getComponent(cc.Label);
                var info = CocosZ_1.cocosz.dataMgr.getSkinInfo(num);
                sprice.string = info.Price;
                switch (info.State) {
                    case 0: {
                        sprice.node.active = true;
                        using.active = false;
                        box.active = true;
                        btnChange_1.active = false;
                        btnBuy_1.active = true;
                        break;
                    }
                    case 1: {
                        sprice.node.active = false;
                        using.active = false;
                        box.active = false;
                        btnChange_1.active = true;
                        btnBuy_1.active = false;
                        break;
                    }
                    case 2: {
                        sprice.node.active = false;
                        using.active = true;
                        box.active = false;
                        btnChange_1.active = false;
                        btnBuy_1.active = false;
                        break;
                    }
                }
            }
            else {
                var num = Math.floor(Math.abs(_this.ballbonScroll.x + 337.5 - 100) / 225);
                _this.curBalloonSkinID = num;
                var sp = _this.information.getChildByName("role").getChildByName("sp");
                sp.getComponent(cc.Sprite).spriteFrame = _this.ballbonScroll.getChildByName("balloon" + (num + 1)).getComponent(cc.Sprite).spriteFrame;
                sp.scale = 1.4;
                var btnBuy_2 = _this.information.getChildByName("btnBuySkin");
                var btnChange_2 = _this.information.getChildByName("btnChangeSkin");
                var box = _this.information.getChildByName("box");
                var using = _this.information.getChildByName("using");
                var sprice = _this.information.getChildByName("sprice").getComponent(cc.Label);
                var info = CocosZ_1.cocosz.dataMgr.getBallbonSkinInfo(num);
                sprice.string = info.Price;
                switch (info.State) {
                    case 0: {
                        sprice.node.active = true;
                        using.active = false;
                        box.active = true;
                        btnChange_2.active = false;
                        btnBuy_2.active = true;
                        break;
                    }
                    case 1: {
                        sprice.node.active = false;
                        using.active = false;
                        box.active = false;
                        btnChange_2.active = true;
                        btnBuy_2.active = false;
                        break;
                    }
                    case 2: {
                        sprice.node.active = false;
                        using.active = true;
                        box.active = false;
                        btnChange_2.active = false;
                        btnBuy_2.active = false;
                        break;
                    }
                }
            }
        }, 0.025);
    };
    UiShop.prototype._initShop = function () {
        this.onRole();
        var prefab1 = CocosZ_1.cocosz.resMgr.getRes("ballbonItem", cc.Prefab);
        var prefab2 = CocosZ_1.cocosz.resMgr.getRes("roleItem", cc.Prefab);
        var prefab3 = CocosZ_1.cocosz.resMgr.getRes("propItem", cc.Prefab);
        this.ballbonScroll.removeAllChildren();
        this.roleScroll.removeAllChildren();
        for (var i = 0; i < 7; i++) {
            var node = cc.instantiate(prefab1);
            node.x = 100 + i * 200;
            this.ballbonScroll.addChild(node);
            node.getComponent("shopItem").init(i);
        }
        for (var i = 0; i < 6; i++) {
            var node = cc.instantiate(prefab2);
            node.x = 100 + i * 200;
            this.roleScroll.addChild(node);
            node.getComponent("shopItem").init(i);
        }
        for (var i = 0; i < 2; i++) {
            var node = cc.instantiate(prefab3);
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
    };
    UiShop.prototype.onUpdatePropNum = function () {
        // this.prop_telescope_num.string = cocosz.dataMgr.Telescope + "";
        // this.prop_shield_num.string = cocosz.dataMgr.Shield + "";
    };
    UiShop.prototype.onBuySkin = function () {
        if (this.role_btn.getChildByName("shop_btn_select_cloth").active == true) {
            var info = CocosZ_1.cocosz.dataMgr.getSkinInfo(this.curSkinID);
            var price = info.Price;
            if (price > CocosZ_1.cocosz.dataMgr.CoinCount) {
                this.onTips("金币不足");
                return;
            }
            CocosZ_1.cocosz.dataMgr.CoinCount -= price;
            CocosZ_1.cocosz.dataMgr.CurSkinId = this.curSkinID;
            this.onTips("购买皮肤成功");
        }
        else {
            var info = CocosZ_1.cocosz.dataMgr.getBallbonSkinInfo(this.curSkinID);
            var price = info.Price;
            if (price > CocosZ_1.cocosz.dataMgr.CoinCount) {
                this.onTips("金币不足");
                return;
            }
            CocosZ_1.cocosz.dataMgr.CoinCount -= price;
            CocosZ_1.cocosz.dataMgr.CurBallbonSkinId = this.curBalloonSkinID;
            this.onTips("购买皮肤成功");
        }
    };
    UiShop.prototype.onChangeSkin = function () {
        if (this.role_btn.getChildByName("shop_btn_select_cloth").active == true) {
            var info = CocosZ_1.cocosz.dataMgr.getSkinInfo(this.curSkinID);
            CocosZ_1.cocosz.dataMgr.CurSkinId = this.curSkinID;
            this.onTips("更换皮肤成功");
        }
        else {
            var info = CocosZ_1.cocosz.dataMgr.getBallbonSkinInfo(this.curSkinID);
            CocosZ_1.cocosz.dataMgr.CurBallbonSkinId = this.curBalloonSkinID;
            this.onTips("更换皮肤成功");
        }
    };
    UiShop.prototype.onBuyShield = function () {
        if (CocosZ_1.cocosz.dataMgr.CoinCount >= 600) {
            CocosZ_1.cocosz.dataMgr.CoinCount -= 600;
            CocosZ_1.cocosz.dataMgr.Shield++;
            Msg_1.default.Show("恭喜获得金钟罩");
            cc.game.emit(Constant_1.default.E_UPDATE_COIN);
            this.onUpdatePropNum();
        }
        else {
            Msg_1.default.Show("金币不足");
        }
    };
    UiShop.prototype.onGetPropByVideo = function () {
        var _this = this;
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        lieyou_SdkManager.showRewardedVideoAd(function (res) {
            CocosZ_1.cocosz.audioMgr.resumAllMusic();
            if (res) {
                CocosZ_1.cocosz.dataMgr.Shield++;
                cc.game.emit(Constant_1.default.E_UPDATE_COIN);
                _this.onUpdatePropNum();
                _this.onTips("恭喜获得1个金钟罩");
            }
            else {
                _this.onTips("视频播放完成才能获取奖励");
            }
        });
    };
    UiShop.prototype.onBuyTelescope = function () {
        if (CocosZ_1.cocosz.dataMgr.CoinCount >= 800) {
            CocosZ_1.cocosz.dataMgr.CoinCount -= 800;
            CocosZ_1.cocosz.dataMgr.Telescope++;
            Msg_1.default.Show("恭喜获得千里眼");
            cc.game.emit(Constant_1.default.E_UPDATE_COIN);
            this.onUpdatePropNum();
        }
        else {
            Msg_1.default.Show("金币不足");
        }
    };
    UiShop.prototype.onBuyRole = function () {
        var info = CocosZ_1.cocosz.dataMgr.getSkinInfo(CocosZ_1.cocosz.gameMgr.curShopSkinID);
        if (info.State == 1 || info.State == 2) {
            Msg_1.default.Show("该皮肤已拥有");
        }
        else if (CocosZ_1.cocosz.dataMgr.CoinCount >= info.Price && info.Price != -1 && info.Price != -999) {
            CocosZ_1.cocosz.dataMgr.CoinCount -= info.Price;
            CocosZ_1.cocosz.dataMgr.CurSkinId = CocosZ_1.cocosz.gameMgr.curShopSkinID;
            Msg_1.default.Show("皮肤解锁成功");
            cc.game.emit(Constant_1.default.E_UPDATE_COIN);
            cc.game.emit(Constant_1.default.E_UPDATE_SKIN);
        }
        else {
            Msg_1.default.Show("金币不足");
        }
    };
    UiShop.prototype.onTips = function (tips) {
        Msg_1.default.Show(tips);
    };
    UiShop.prototype.onGetCoinByVideo = function () {
        var _this = this;
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        // Msg.Show("视频播放失败!");
        lieyou_SdkManager.showRewardedVideoAd(function (res) {
            CocosZ_1.cocosz.audioMgr.resumAllMusic();
            if (res) {
                CocosZ_1.cocosz.dataMgr.CoinCount += 200;
                cc.game.emit(Constant_1.default.E_UPDATE_COIN);
                _this.onTips("恭喜获得200金币");
            }
            else {
                _this.onTips("视频播放完成才能获取奖励");
            }
        });
    };
    UiShop.prototype.onRole = function () {
        // this.role.active = true;
        this.role_btn.getChildByName("shop_btn_select_cloth").active = true;
        // this.prop.active = false;
        this.ballbon_btn.getChildByName("shop_btn_select_ballboon").active = false;
        // this.prop.active = false;
        this.prop_btn.getChildByName("shop_btn_select__prop").active = false;
        // this.buy_btn.active = true;
        // this.getCoin_btn.active = true;
    };
    UiShop.prototype.onProp = function () {
        // this.role.active = false;
        this.role_btn.getChildByName("shop_btn_select_cloth").active = false;
        // this.prop.active = true;
        this.ballbon_btn.getChildByName("shop_btn_select_ballboon").active = false;
        // this.prop.active = false;
        this.prop_btn.getChildByName("shop_btn_select__prop").active = true;
    };
    UiShop.prototype.onBallbon = function () {
        // this.role.active = false;
        this.role_btn.getChildByName("shop_btn_select_cloth").active = false;
        // this.prop.active = false;
        this.ballbon_btn.getChildByName("shop_btn_select_ballboon").active = true;
        // this.prop.active = true;
        this.prop_btn.getChildByName("shop_btn_select__prop").active = false;
    };
    UiShop.prototype.onBack = function () {
        var _this = this;
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        CocosZ_1.cocosz.unscheduleAllCallbacks();
        cc.tween(this.scaleNode)
            .to(0.2, { scale: 0 })
            .call(function () {
            lieyou_SdkManager.showMoreGameByBanner();
            _this._page.destroy();
        })
            .start();
    };
    UiShop.prototype.onOpen = function () {
        this.onUpdatePropNum();
        this.scaleNode.scale = 0;
        cc.tween(this.scaleNode)
            .to(0.2, { scale: 1 })
            .start();
        if ((cc.sys.platform === cc.sys.VIVO_GAME)) {
            lieyou_SdkManager.showSpotByPause();
        }
        else if (cc.sys.platform === cc.sys.OPPO_GAME) {
            this.scaleNode.y = 80;
            var sp = CocosZ_1.cocosz.resMgr.getRes("ss", cc.SpriteFrame);
            lieyou_SdkManager.showNativeAd_small({
                node: this.scaleNode.getChildByName("nativePos"), "titleColor": cc.color(255, 255, 255, 255),
                "descColor": cc.color(255, 255, 255, 255), bgPath: 'texture/ss', texture: sp, scale: 1, insetTop: 10, insetBottom: 10, insetLeft: 10, insetRight: 10
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
    };
    UiShop.prototype.onClose = function () {
        cc.game.targetOff(this);
    };
    UiShop.prototype.onDestroy = function () {
        cc.game.targetOff(this);
    };
    UiShop = __decorate([
        ccclass
    ], UiShop);
    return UiShop;
}(UIPage_1.default));
exports.default = UiShop;

cc._RF.pop();