
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Ui/UiShop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxVaVxcVWlTaG9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFDOUIsOENBQTZDO0FBQzdDLGtEQUFpRjtBQUNqRix3Q0FBbUM7QUFHN0IsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFvQywwQkFBTTtJQWtDdEM7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUFuQ08sY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFbkMsOENBQThDO1FBQ3RDLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBR25DLCtDQUErQztRQUN2QyxxQkFBZSxHQUFhLElBQUksQ0FBQztRQUNqQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFbkMsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUV0QixzQkFBZ0IsR0FBVyxDQUFDLENBQUM7UUFJekIsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDOztJQUNqQixDQUFDO0lBRU8sc0JBQUssR0FBYjtRQUNJLElBQUksSUFBSSxHQUFjLGVBQU0sQ0FBQyxNQUFNLENBQUMsTUFB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RUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFO2FBQ3hKLENBQUMsQ0FBQztTQUNOO1FBQ0QsbUNBQW1DO1FBQ25DLG1DQUFtQztRQUNuQywrQkFBK0I7UUFDL0Isb0NBQW9DO1FBQ3BDLHNDQUFzQztRQUN0QyxnREFBZ0Q7UUFFaEQsNEJBQTRCO1FBQzVCLDJDQUEyQztJQUMvQyxDQUFDO0lBRVMsd0JBQU8sR0FBakI7UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRVMsMEJBQVMsR0FBbkI7UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBNWZnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBNmYxQjtJQUFELGFBQUM7Q0E3ZkQsQUE2ZkMsQ0E3Zm1DLGdCQUFNLEdBNmZ6QztrQkE3Zm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlQYWdlIGZyb20gXCIuL1VJUGFnZVwiO1xyXG5pbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5pbXBvcnQgQ29uc3RhbnQsIHsgUGFnZU5hbWUsIFBhbmVsTmFtZSwgRmxvb3JUeXBlIH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG5pbXBvcnQgTXNnIGZyb20gXCIuLi9GcmFtZXdvcmsvTXNnXCI7XHJcbmltcG9ydCB7IHRydW5jYXRlU3luYyB9IGZyb20gXCJmc1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVpU2hvcCBleHRlbmRzIFVJUGFnZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBiYWNrX2J0bjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHByb3BfYnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgcm9sZV9idG46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBidXlfYnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgYmFsbGJvbl9idG46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBnZXRDb2luX2J0bjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHJvbGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBwcm9wOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgaXNSb2xlUGFnZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBwcm9wX3RlbGVzY29wZV9idXk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBwcm9wX3NoaWVsZF9idXk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBwcm9wX3ZpZGVvOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy8gcHJpdmF0ZSBwcm9wX3RlbGVzY29wZV9udW06IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIHByaXZhdGUgcHJvcF9zaGllbGRfbnVtOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIHNjYWxlTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgcHJvcFNjcm9sbDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHJvbGVTY3JvbGw6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBiYWxsYm9uU2Nyb2xsOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgaW5mb3JtYXRpb246IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGNvaW5MYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIGN1clNraW5JRDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBjdXJCYWxsb29uU2tpbklEOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2luaXQoKSB7XHJcbiAgICAgICAgbGV0IEdhbWU6IGNjLlByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFBhbmVsTmFtZS5VaVNob3AsIGNjLlByZWZhYik7XHJcbiAgICAgICAgaWYgKEdhbWUpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZShHYW1lKTtcclxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhZ2UgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy91aVwiKS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSBjYy5WZWMyLlpFUk87XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vbkxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgX29uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmJhY2tfYnRuID0gY2MuZmluZChcIkNhbnZhcy91aS9VaVNob3AvU2NhbGVOb2RlL2J0bl9iYWNrXCIpO1xyXG4gICAgICAgIHRoaXMucHJvcF9idG4gPSBjYy5maW5kKFwiQ2FudmFzL3VpL1VpU2hvcC9TY2FsZU5vZGUvc2hvcF9idG5fcHJvcFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5yb2xlX2J0biA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlTaG9wL1NjYWxlTm9kZS9zaG9wX2J0bl9jbG90aFwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5iYWxsYm9uX2J0biA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlTaG9wL1NjYWxlTm9kZS9zaG9wX2J0bl9iYWxsYm9uXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmJ1eV9idG4gPSBjYy5maW5kKFwiQ2FudmFzL3VpL1VpU2hvcC9TY2FsZU5vZGUvYnRuX2J1eVwiKTtcclxuICAgICAgICB0aGlzLmdldENvaW5fYnRuID0gY2MuZmluZChcIkNhbnZhcy91aS9VaVNob3AvU2NhbGVOb2RlL2J0bl92aWRlb1wiKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2FsZU5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL3VpL1VpU2hvcC9TY2FsZU5vZGVcIik7XHJcbiAgICAgICAgdGhpcy5jb2luTGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL3VpL1VpU2hvcC9TY2FsZU5vZGUvQ29pbi9udW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAvLyB0aGlzLnJvbGUgPSBjYy5maW5kKFwiQ2FudmFzL3VpL1VpU2hvcC9TY2FsZU5vZGUvcm9sZVwiKTtcclxuICAgICAgICB0aGlzLmluZm9ybWF0aW9uID0gY2MuZmluZChcIkNhbnZhcy91aS9VaVNob3AvU2NhbGVOb2RlL2luZm9ybWF0aW9uXCIpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnByb3Bfc2hpZWxkX2J1eSA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlTaG9wL1NjYWxlTm9kZS9wcm9wL3NoaWVsZC9idG5fYnV5XCIpO1xyXG4gICAgICAgIC8vIHRoaXMucHJvcF9zaGllbGRfbnVtID0gY2MuZmluZChcIkNhbnZhcy91aS9VaVNob3AvU2NhbGVOb2RlL3Byb3Avc2hpZWxkL251bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIC8vIHRoaXMucHJvcF92aWRlbyA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlTaG9wL1NjYWxlTm9kZS9wcm9wL2J0blwiKTtcclxuICAgICAgICB0aGlzLnJvbGVTY3JvbGwgPSB0aGlzLnJvbGVfYnRuLmdldENoaWxkQnlOYW1lKFwic2hvcF9idG5fc2VsZWN0X2Nsb3RoXCIpLmdldENoaWxkQnlOYW1lKFwiU2Nyb2xsVmlld1wiKS5nZXRDaGlsZEJ5TmFtZShcInZpZXdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJjb250ZW50XCIpO1xyXG4gICAgICAgIC8vIHRoaXMucHJvcFNjcm9sbCA9IHRoaXMucHJvcF9idG4uZ2V0Q2hpbGRCeU5hbWUoXCJzaG9wX2J0bl9zZWxlY3RfX3Byb3BcIikuZ2V0Q2hpbGRCeU5hbWUoXCJTY3JvbGxWaWV3XCIpLmdldENoaWxkQnlOYW1lKFwidmlld1wiKS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRcIik7XHJcbiAgICAgICAgdGhpcy5iYWxsYm9uU2Nyb2xsID0gdGhpcy5iYWxsYm9uX2J0bi5nZXRDaGlsZEJ5TmFtZShcInNob3BfYnRuX3NlbGVjdF9iYWxsYm9vblwiKS5nZXRDaGlsZEJ5TmFtZShcIlNjcm9sbFZpZXdcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWV3XCIpLmdldENoaWxkQnlOYW1lKFwiY29udGVudFwiKTtcclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLl9TdGFydCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIF9TdGFydCgpIHtcclxuICAgICAgICAvLyB0aGlzLl9pbml0U2hvcCgpO1xyXG4gICAgICAgIHRoaXMuYmFja19idG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbkJhY2soKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB0aGlzLnByb3BfYnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25Qcm9wKCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5yb2xlX2J0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uUm9sZSgpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYmFsbGJvbl9idG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbkJhbGxib24oKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgbGV0IGJ0bkJ1eSA9IHRoaXMuaW5mb3JtYXRpb24uZ2V0Q2hpbGRCeU5hbWUoXCJidG5CdXlTa2luXCIpO1xyXG4gICAgICAgIGxldCBidG5DaGFuZ2UgPSB0aGlzLmluZm9ybWF0aW9uLmdldENoaWxkQnlOYW1lKFwiYnRuQ2hhbmdlU2tpblwiKTtcclxuXHJcbiAgICAgICAgYnRuQnV5Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25CdXlTa2luKCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGJ0bkNoYW5nZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlU2tpbigpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gdGhpcy5idXlfYnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMub25CdXlSb2xlKCk7XHJcbiAgICAgICAgLy8gfSwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5nZXRDb2luX2J0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLm9uR2V0Q29pbkJ5VmlkZW8oKTtcclxuICAgICAgICAvLyB9LCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLnByb3BfdGVsZXNjb3BlX2J1eS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLm9uQnV5VGVsZXNjb3BlKCk7XHJcbiAgICAgICAgLy8gfSwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5wcm9wX3NoaWVsZF9idXkub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5vbkJ1eVNoaWVsZCgpO1xyXG4gICAgICAgIC8vIH0sIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMucHJvcF92aWRlby5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLm9uR2V0UHJvcEJ5VmlkZW8oKTtcclxuICAgICAgICAvLyB9LCB0aGlzKTtcclxuXHJcblxyXG5cclxuICAgICAgICBpZiAoKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLlZJVk9fR0FNRSkpIHtcclxuICAgICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuc2hvd0Jhbm5lckJ5Qm90dG9tKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLk9QUE9fR0FNRSkge1xyXG4gICAgICAgICAgICBsZXQgc3AgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcInNzXCIsIGNjLlNwcml0ZUZyYW1lKTtcclxuICAgICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuaGlkZUJhbm5lcigpO1xyXG4gICAgICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93TmF0aXZlQWRfc21hbGwoe1xyXG4gICAgICAgICAgICAgICAgbm9kZTogdGhpcy5zY2FsZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJuYXRpdmVQb3NcIiksIFwidGl0bGVDb2xvclwiOiBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUsKSxcclxuICAgICAgICAgICAgICAgIFwiZGVzY0NvbG9yXCI6IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSwpLCBiZ1BhdGg6ICd0ZXh0dXJlL3NzJywgdGV4dHVyZTogc3AsIHNjYWxlOiAwLjksIGluc2V0VG9wOiAxMCwgaW5zZXRCb3R0b206IDEwLCBpbnNldExlZnQ6IDEwLCBpbnNldFJpZ2h0OiAxMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLmNvaW5MYWJlbC5zdHJpbmcgPSBjb2Nvc3ouZGF0YU1nci5Db2luQ291bnQgKyBcIlwiO1xyXG4gICAgICAgIGNjLmxvZyhjb2Nvc3ouZGF0YU1nci5Db2luQ291bnQpXHJcbiAgICAgICAgY29jb3N6LnNjaGVkdWxlKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29pbkxhYmVsLnN0cmluZyA9IGNvY29zei5kYXRhTWdyLkNvaW5Db3VudCArIFwiXCI7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLnJvbGVTY3JvbGwueCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5yb2xlX2J0bi5nZXRDaGlsZEJ5TmFtZShcInNob3BfYnRuX3NlbGVjdF9jbG90aFwiKS5hY3RpdmUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG51bSA9IE1hdGguZmxvb3IoTWF0aC5hYnModGhpcy5yb2xlU2Nyb2xsLnggKyAzMzcuNSAtIDEwMCkgLyAyMjUpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKG51bSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyU2tpbklEID0gbnVtO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNwID0gdGhpcy5pbmZvcm1hdGlvbi5nZXRDaGlsZEJ5TmFtZShcInJvbGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzcFwiKTtcclxuICAgICAgICAgICAgICAgIHNwLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5yb2xlU2Nyb2xsLmdldENoaWxkQnlOYW1lKFwicm9sZVwiICsgbnVtKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICBzcC5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuQnV5ID0gdGhpcy5pbmZvcm1hdGlvbi5nZXRDaGlsZEJ5TmFtZShcImJ0bkJ1eVNraW5cIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuQ2hhbmdlID0gdGhpcy5pbmZvcm1hdGlvbi5nZXRDaGlsZEJ5TmFtZShcImJ0bkNoYW5nZVNraW5cIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm94ID0gdGhpcy5pbmZvcm1hdGlvbi5nZXRDaGlsZEJ5TmFtZShcImJveFwiKTtcclxuICAgICAgICAgICAgICAgIGxldCB1c2luZyA9IHRoaXMuaW5mb3JtYXRpb24uZ2V0Q2hpbGRCeU5hbWUoXCJ1c2luZ1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBzcHJpY2UgPSB0aGlzLmluZm9ybWF0aW9uLmdldENoaWxkQnlOYW1lKFwic3ByaWNlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBpbmZvID0gY29jb3N6LmRhdGFNZ3IuZ2V0U2tpbkluZm8obnVtKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzcHJpY2Uuc3RyaW5nID0gaW5mby5QcmljZTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGluZm8uU3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaWNlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNpbmcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG5DaGFuZ2UuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bkJ1eS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcmljZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2luZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG5DaGFuZ2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuQnV5LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcmljZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2luZy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bkNoYW5nZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuQnV5LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gTWF0aC5mbG9vcihNYXRoLmFicyh0aGlzLmJhbGxib25TY3JvbGwueCArIDMzNy41IC0gMTAwKSAvIDIyNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1ckJhbGxvb25Ta2luSUQgPSBudW07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHNwID0gdGhpcy5pbmZvcm1hdGlvbi5nZXRDaGlsZEJ5TmFtZShcInJvbGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJzcFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzcC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuYmFsbGJvblNjcm9sbC5nZXRDaGlsZEJ5TmFtZShcImJhbGxvb25cIiArIChudW0gKyAxKSkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgc3Auc2NhbGUgPSAxLjQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuQnV5ID0gdGhpcy5pbmZvcm1hdGlvbi5nZXRDaGlsZEJ5TmFtZShcImJ0bkJ1eVNraW5cIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuQ2hhbmdlID0gdGhpcy5pbmZvcm1hdGlvbi5nZXRDaGlsZEJ5TmFtZShcImJ0bkNoYW5nZVNraW5cIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm94ID0gdGhpcy5pbmZvcm1hdGlvbi5nZXRDaGlsZEJ5TmFtZShcImJveFwiKTtcclxuICAgICAgICAgICAgICAgIGxldCB1c2luZyA9IHRoaXMuaW5mb3JtYXRpb24uZ2V0Q2hpbGRCeU5hbWUoXCJ1c2luZ1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBzcHJpY2UgPSB0aGlzLmluZm9ybWF0aW9uLmdldENoaWxkQnlOYW1lKFwic3ByaWNlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGluZm8gPSBjb2Nvc3ouZGF0YU1nci5nZXRCYWxsYm9uU2tpbkluZm8obnVtKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzcHJpY2Uuc3RyaW5nID0gaW5mby5QcmljZTtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGluZm8uU3RhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaWNlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNpbmcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG5DaGFuZ2UuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bkJ1eS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcmljZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2luZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidG5DaGFuZ2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuQnV5LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcmljZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2luZy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3guYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bkNoYW5nZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuQnV5LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDAuMDI1KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pbml0U2hvcCgpIHtcclxuICAgICAgICB0aGlzLm9uUm9sZSgpO1xyXG5cclxuICAgICAgICBsZXQgcHJlZmFiMSA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiYmFsbGJvbkl0ZW1cIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICBsZXQgcHJlZmFiMiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwicm9sZUl0ZW1cIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICBsZXQgcHJlZmFiMyA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwicHJvcEl0ZW1cIiwgY2MuUHJlZmFiKTtcclxuXHJcbiAgICAgICAgdGhpcy5iYWxsYm9uU2Nyb2xsLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5yb2xlU2Nyb2xsLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIxKTtcclxuICAgICAgICAgICAgbm9kZS54ID0gMTAwICsgaSAqIDIwMDtcclxuICAgICAgICAgICAgdGhpcy5iYWxsYm9uU2Nyb2xsLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChcInNob3BJdGVtXCIpLmluaXQoaSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiMik7XHJcbiAgICAgICAgICAgIG5vZGUueCA9IDEwMCArIGkgKiAyMDA7XHJcbiAgICAgICAgICAgIHRoaXMucm9sZVNjcm9sbC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoXCJzaG9wSXRlbVwiKS5pbml0KGkpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYjMpO1xyXG4gICAgICAgICAgICBub2RlLnggPSAxMDAgKyBpICogMjAwO1xyXG4gICAgICAgICAgICB0aGlzLnByb3BTY3JvbGwuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KFwicHJvcEl0ZW1cIikuaW5pdChpKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBjYy5sb2coIHRoaXMuYmFsbGJvblNjcm9sbClcclxuICAgICAgICAvLyB0aGlzLnJvbGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyB0aGlzLnByb3AuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy5yb2xlX2J0bi5nZXRDaGlsZEJ5TmFtZShcImJ0bl90YWJfMVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vIHRoaXMucHJvcF9idG4uZ2V0Q2hpbGRCeU5hbWUoXCJidG5fdGFiXzFcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy5yb2xlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwic2hvcFJvbGVcIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICAvLyAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnJvbGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgLy8gICAgIG5vZGUuZ2V0Q29tcG9uZW50KFwic2hvcFJvbGVcIikub25Jbml0KGkpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBvblVwZGF0ZVByb3BOdW0oKSB7XHJcbiAgICAgICAgLy8gdGhpcy5wcm9wX3RlbGVzY29wZV9udW0uc3RyaW5nID0gY29jb3N6LmRhdGFNZ3IuVGVsZXNjb3BlICsgXCJcIjtcclxuICAgICAgICAvLyB0aGlzLnByb3Bfc2hpZWxkX251bS5zdHJpbmcgPSBjb2Nvc3ouZGF0YU1nci5TaGllbGQgKyBcIlwiO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQnV5U2tpbigpIHtcclxuICAgICAgICBpZiAodGhpcy5yb2xlX2J0bi5nZXRDaGlsZEJ5TmFtZShcInNob3BfYnRuX3NlbGVjdF9jbG90aFwiKS5hY3RpdmUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBsZXQgaW5mbyA9IGNvY29zei5kYXRhTWdyLmdldFNraW5JbmZvKHRoaXMuY3VyU2tpbklEKTtcclxuICAgICAgICAgICAgbGV0IHByaWNlID0gaW5mby5QcmljZTtcclxuICAgICAgICAgICAgaWYgKHByaWNlID4gY29jb3N6LmRhdGFNZ3IuQ29pbkNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uVGlwcyhcIumHkeW4geS4jei2s1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ29pbkNvdW50IC09IHByaWNlO1xyXG4gICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJTa2luSWQgPSB0aGlzLmN1clNraW5JRDtcclxuICAgICAgICAgICAgdGhpcy5vblRpcHMoXCLotK3kubDnmq7ogqTmiJDlip9cIik7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbmZvID0gY29jb3N6LmRhdGFNZ3IuZ2V0QmFsbGJvblNraW5JbmZvKHRoaXMuY3VyU2tpbklEKTtcclxuICAgICAgICAgICAgbGV0IHByaWNlID0gaW5mby5QcmljZTtcclxuICAgICAgICAgICAgaWYgKHByaWNlID4gY29jb3N6LmRhdGFNZ3IuQ29pbkNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uVGlwcyhcIumHkeW4geS4jei2s1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ29pbkNvdW50IC09IHByaWNlO1xyXG4gICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJCYWxsYm9uU2tpbklkID0gdGhpcy5jdXJCYWxsb29uU2tpbklEO1xyXG4gICAgICAgICAgICB0aGlzLm9uVGlwcyhcIui0reS5sOearuiCpOaIkOWKn1wiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIG9uQ2hhbmdlU2tpbigpIHtcclxuICAgICAgICBpZiAodGhpcy5yb2xlX2J0bi5nZXRDaGlsZEJ5TmFtZShcInNob3BfYnRuX3NlbGVjdF9jbG90aFwiKS5hY3RpdmUgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBsZXQgaW5mbyA9IGNvY29zei5kYXRhTWdyLmdldFNraW5JbmZvKHRoaXMuY3VyU2tpbklEKTtcclxuICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ3VyU2tpbklkID0gdGhpcy5jdXJTa2luSUQ7XHJcbiAgICAgICAgICAgIHRoaXMub25UaXBzKFwi5pu05o2i55qu6IKk5oiQ5YqfXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGluZm8gPSBjb2Nvc3ouZGF0YU1nci5nZXRCYWxsYm9uU2tpbkluZm8odGhpcy5jdXJTa2luSUQpO1xyXG4gICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJCYWxsYm9uU2tpbklkID0gdGhpcy5jdXJCYWxsb29uU2tpbklEO1xyXG4gICAgICAgICAgICB0aGlzLm9uVGlwcyhcIuabtOaNouearuiCpOaIkOWKn1wiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIG9uQnV5U2hpZWxkKCkge1xyXG4gICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5Db2luQ291bnQgPj0gNjAwKSB7XHJcbiAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkNvaW5Db3VudCAtPSA2MDA7XHJcbiAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLlNoaWVsZCsrO1xyXG4gICAgICAgICAgICBNc2cuU2hvdyhcIuaBreWWnOiOt+W+l+mHkemSn+e9qVwiKTtcclxuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KENvbnN0YW50LkVfVVBEQVRFX0NPSU4pO1xyXG4gICAgICAgICAgICB0aGlzLm9uVXBkYXRlUHJvcE51bSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgTXNnLlNob3coXCLph5HluIHkuI3otrNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25HZXRQcm9wQnlWaWRlbygpIHtcclxuICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheWJ0bkVmZmVjdCgpO1xyXG4gICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dSZXdhcmRlZFZpZGVvQWQoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucmVzdW1BbGxNdXNpYygpO1xyXG4gICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5TaGllbGQrKztcclxuICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX1VQREFURV9DT0lOKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25VcGRhdGVQcm9wTnVtKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uVGlwcyhcIuaBreWWnOiOt+W+lzHkuKrph5Hpkp/nvalcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uVGlwcyhcIuinhumikeaSreaUvuWujOaIkOaJjeiDveiOt+WPluWlluWKsVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25CdXlUZWxlc2NvcGUoKSB7XHJcbiAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkNvaW5Db3VudCA+PSA4MDApIHtcclxuICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ29pbkNvdW50IC09IDgwMDtcclxuICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuVGVsZXNjb3BlKys7XHJcbiAgICAgICAgICAgIE1zZy5TaG93KFwi5oGt5Zac6I635b6X5Y2D6YeM55y8XCIpO1xyXG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9VUERBVEVfQ09JTik7XHJcbiAgICAgICAgICAgIHRoaXMub25VcGRhdGVQcm9wTnVtKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBNc2cuU2hvdyhcIumHkeW4geS4jei2s1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgb25CdXlSb2xlKCkge1xyXG4gICAgICAgIGxldCBpbmZvID0gY29jb3N6LmRhdGFNZ3IuZ2V0U2tpbkluZm8oY29jb3N6LmdhbWVNZ3IuY3VyU2hvcFNraW5JRCk7XHJcbiAgICAgICAgaWYgKGluZm8uU3RhdGUgPT0gMSB8fCBpbmZvLlN0YXRlID09IDIpIHtcclxuICAgICAgICAgICAgTXNnLlNob3coXCLor6Xnmq7ogqTlt7Lmi6XmnIlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNvY29zei5kYXRhTWdyLkNvaW5Db3VudCA+PSBpbmZvLlByaWNlICYmIGluZm8uUHJpY2UgIT0gLTEgJiYgaW5mby5QcmljZSAhPSAtOTk5KSB7XHJcbiAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkNvaW5Db3VudCAtPSBpbmZvLlByaWNlO1xyXG4gICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJTa2luSWQgPSBjb2Nvc3ouZ2FtZU1nci5jdXJTaG9wU2tpbklEO1xyXG4gICAgICAgICAgICBNc2cuU2hvdyhcIuearuiCpOino+mUgeaIkOWKn1wiKTtcclxuXHJcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX1VQREFURV9DT0lOKTtcclxuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KENvbnN0YW50LkVfVVBEQVRFX1NLSU4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgTXNnLlNob3coXCLph5HluIHkuI3otrNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25UaXBzKHRpcHMpIHtcclxuICAgICAgICBNc2cuU2hvdyh0aXBzKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgb25HZXRDb2luQnlWaWRlbygpIHtcclxuXHJcbiAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlidG5FZmZlY3QoKTtcclxuICAgICAgICAvLyBNc2cuU2hvdyhcIuinhumikeaSreaUvuWksei0pSFcIik7XHJcblxyXG4gICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dSZXdhcmRlZFZpZGVvQWQoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucmVzdW1BbGxNdXNpYygpO1xyXG4gICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5Db2luQ291bnQgKz0gMjAwO1xyXG4gICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KENvbnN0YW50LkVfVVBEQVRFX0NPSU4pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblRpcHMoXCLmga3llpzojrflvpcyMDDph5HluIFcIik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uVGlwcyhcIuinhumikeaSreaUvuWujOaIkOaJjeiDveiOt+WPluWlluWKsVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIHByaXZhdGUgb25Sb2xlKCkge1xyXG4gICAgICAgIC8vIHRoaXMucm9sZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucm9sZV9idG4uZ2V0Q2hpbGRCeU5hbWUoXCJzaG9wX2J0bl9zZWxlY3RfY2xvdGhcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyB0aGlzLnByb3AuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5iYWxsYm9uX2J0bi5nZXRDaGlsZEJ5TmFtZShcInNob3BfYnRuX3NlbGVjdF9iYWxsYm9vblwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLnByb3AuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wcm9wX2J0bi5nZXRDaGlsZEJ5TmFtZShcInNob3BfYnRuX3NlbGVjdF9fcHJvcFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5idXlfYnRuLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy5nZXRDb2luX2J0bi5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uUHJvcCgpIHtcclxuICAgICAgICAvLyB0aGlzLnJvbGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yb2xlX2J0bi5nZXRDaGlsZEJ5TmFtZShcInNob3BfYnRuX3NlbGVjdF9jbG90aFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLnByb3AuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmJhbGxib25fYnRuLmdldENoaWxkQnlOYW1lKFwic2hvcF9idG5fc2VsZWN0X2JhbGxib29uXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMucHJvcC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnByb3BfYnRuLmdldENoaWxkQnlOYW1lKFwic2hvcF9idG5fc2VsZWN0X19wcm9wXCIpLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvbkJhbGxib24oKSB7XHJcbiAgICAgICAgLy8gdGhpcy5yb2xlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucm9sZV9idG4uZ2V0Q2hpbGRCeU5hbWUoXCJzaG9wX2J0bl9zZWxlY3RfY2xvdGhcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy5wcm9wLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmFsbGJvbl9idG4uZ2V0Q2hpbGRCeU5hbWUoXCJzaG9wX2J0bl9zZWxlY3RfYmFsbGJvb25cIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyB0aGlzLnByb3AuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnByb3BfYnRuLmdldENoaWxkQnlOYW1lKFwic2hvcF9idG5fc2VsZWN0X19wcm9wXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBvbkJhY2soKSB7XHJcbiAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlidG5FZmZlY3QoKTtcclxuICAgICAgICBjb2Nvc3oudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5zY2FsZU5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjIsIHsgc2NhbGU6IDAgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuc2hvd01vcmVHYW1lQnlCYW5uZXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhZ2UuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uT3BlbigpIHtcclxuICAgICAgICB0aGlzLm9uVXBkYXRlUHJvcE51bSgpO1xyXG4gICAgICAgIHRoaXMuc2NhbGVOb2RlLnNjYWxlID0gMDtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnNjYWxlTm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMSB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG5cclxuXHJcbiAgICAgICAgaWYgKChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5WSVZPX0dBTUUpKSB7XHJcbiAgICAgICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dTcG90QnlQYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5PUFBPX0dBTUUpIHtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZU5vZGUueSA9IDgwO1xyXG4gICAgICAgICAgICBsZXQgc3AgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcInNzXCIsIGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93TmF0aXZlQWRfc21hbGwoe1xyXG4gICAgICAgICAgICAgICAgbm9kZTogdGhpcy5zY2FsZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJuYXRpdmVQb3NcIiksIFwidGl0bGVDb2xvclwiOiBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUsKSxcclxuICAgICAgICAgICAgICAgIFwiZGVzY0NvbG9yXCI6IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSwpLCBiZ1BhdGg6ICd0ZXh0dXJlL3NzJywgdGV4dHVyZTogc3AsIHNjYWxlOiAxLCBpbnNldFRvcDogMTAsIGluc2V0Qm90dG9tOiAxMCwgaW5zZXRMZWZ0OiAxMCwgaW5zZXRSaWdodDogMTBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvY29zei5hdWRpb01nci5wbGF5SG9tZU11c2ljKCk7XHJcbiAgICAgICAgLy8gdXRpbHMuaGlkZVRyeUdhbWVzV2lkZ2V0KCk7Ly8vLypcclxuICAgICAgICAvLyB1dGlscy5oaWRlTW9yZUdhbWVzV2lkZ2V0KCk7XHJcbiAgICAgICAgLy8gdXRpbHMuaGlkZUNyZWF0ZVNob3J0Y3V0V2lkZ2V0KCk7XHJcbiAgICAgICAgLy8gdXRpbHMuYWRNYW5hZ2VyLmhpZGVSZXdhcmRJbnNlcnQoKTtcclxuICAgICAgICAvLyB1dGlscy5BZEFnZW50Q29jb3NwbGF5LmhpZGVJbnRlcnN0aXRpYWxBZCgpOyBcclxuXHJcbiAgICAgICAgLy8gdGhpcy5TY2FsZU5vZGUuc2NhbGUgPSAwO1xyXG4gICAgICAgIC8vIGNvY29zei5nYW1lTWdyLnR3ZWVOb2RlKHRoaXMuU2NhbGVOb2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25DbG9zZSgpIHtcclxuICAgICAgICBjYy5nYW1lLnRhcmdldE9mZih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNjLmdhbWUudGFyZ2V0T2ZmKHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==