"use strict";
cc._RF.push(module, '50166BYVs5N7Kvw8u25M9Km', 'UiSign');
// script/Ui/UiSign.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIPage_1 = require("./UIPage");
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var Msg_1 = require("../Framework/Msg");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UiSign = /** @class */ (function (_super) {
    __extends(UiSign, _super);
    function UiSign() {
        var _this = _super.call(this) || this;
        _this.scaleNode = null;
        _this.btnGet = null;
        _this.btnBack = null;
        _this.lib = null;
        _this.lib1 = null;
        _this.lib2 = null;
        _this.prop = null;
        _this.text = null;
        _this.box = null;
        _this.halo = null;
        _this.halo2 = null;
        _this.halo3 = null;
        _this.num = null;
        _this._init();
        return _this;
    }
    UiSign.prototype._init = function () {
        var Game = CocosZ_1.cocosz.resMgr.getRes(Constant_1.PanelName.UiSign, cc.Prefab);
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
    UiSign.prototype._onLoad = function () {
        this.scaleNode = this._page.getChildByName("scaleNode");
        this.btnGet = this.scaleNode.getChildByName("btn_get");
        this.prop = this.scaleNode.getChildByName("prop");
        this.btnBack = this.scaleNode.getChildByName("btn_back");
        this.halo = this.scaleNode.getChildByName("gift_icon_halo");
        this.halo2 = this.scaleNode.getChildByName("gift_icon_halo2");
        this.halo3 = this.scaleNode.getChildByName("gift_icon_halo2").getChildByName("gift_icon_halo3");
        this.lib = this.scaleNode.getChildByName("lid");
        this.lib1 = this.scaleNode.getChildByName("lid").getChildByName("gift_icon_lid_1");
        this.lib2 = this.scaleNode.getChildByName("lid").getChildByName("gift_icon_lid_2");
        this.box = this.scaleNode.getChildByName("lid").getChildByName("gift_icon_box");
        this._Start();
    };
    UiSign.prototype._checkCanBonus = function () {
        var curDate = new Date();
        var a = curDate.toDateString() != CocosZ_1.cocosz.dataMgr.LastBonusTime;
        // cocosz.dataMgr.LastBonusTime = curDate.toDateString();
        return a;
    };
    UiSign.prototype._Start = function () {
        var _this = this;
        this.btnBack.on(cc.Node.EventType.TOUCH_END, function () {
            _this.onBack();
        });
        this.btnGet.on(cc.Node.EventType.TOUCH_END, function () {
            _this.onGet();
        });
        if ((cc.sys.platform === cc.sys.VIVO_GAME)) {
            lieyou_SdkManager.showSpotByPause();
        }
        else if (cc.sys.platform === cc.sys.OPPO_GAME) {
            this.scaleNode.x = -341;
            var sp = CocosZ_1.cocosz.resMgr.getRes("ss", cc.SpriteFrame);
            lieyou_SdkManager.showNativeAd_big({
                node: this.scaleNode.getChildByName("nativePos"), "titleColor": cc.color(255, 255, 255, 255),
                "descColor": cc.color(255, 255, 255, 255), bgPath: 'texture/ss', texture: sp, scale: 0.9, insetTop: 10, insetBottom: 10, insetLeft: 10, insetRight: 10
            });
        }
    };
    UiSign.prototype.onOpen = function () {
        var _this = this;
        this.scaleNode.scale = 0;
        this.btnGet.scale = 0;
        // if ((cc.sys.platform === cc.sys.VIVO_GAME || cc.sys.platform === cc.sys.OPPO_GAME)) {
        //     lieyou_SdkManager.hideBanner();
        // }
        cc.tween(this.scaleNode)
            .to(0.2, { scale: 1.4 })
            .to(0.1, { scale: 1 })
            .call(function () {
            cc.tween(_this.lib)
                .by(0.15, { angle: 10 })
                .by(0.15, { angle: -10 })
                .by(0.1, { angle: 9 })
                .by(0.1, { angle: -9 })
                .by(0.07, { angle: 8 })
                .by(0.07, { angle: -8 })
                .by(0.07, { angle: 7 })
                .by(0.07, { angle: -7 })
                .by(0.07, { angle: 6 })
                .by(0.07, { angle: -6 })
                .by(0.07, { angle: 5 })
                .start();
        })
            .delay(1)
            .call(function () {
            cc.tween(_this.lib1)
                .by(1, { position: cc.v2(0, 150) })
                .call(function () {
                _this.lib1.opacity = 0;
                _this.prop.active = true;
                _this.prop.scale = 0;
                // this.text.active = true;
                cc.tween(_this.prop)
                    .to(0.2, { scale: 1 })
                    .start();
            })
                .start();
            _this.lib2.y += 150;
            cc.tween(_this.halo2)
                .to(1, { opacity: 255, scale: 2.5 })
                .call(function () {
                _this.lib2.active = true;
                _this.halo.active = true;
            })
                .to(1, { opacity: 0, scale: 1 })
                .start();
            cc.tween(_this.btnGet)
                .to(0.7, { scale: 1 })
                .start();
        })
            .start();
        cc.tween(this.halo)
            .repeatForever(cc.tween().by(3, { angle: 360 }))
            .start();
        cc.tween(this.halo3)
            .repeatForever(cc.tween().by(3, { angle: 360 }))
            .start();
        // lieyou_SdkManager.showBannerByBottom();
        // if (cc.sys.platform === cc.sys.VIVO_GAME) {
        //     lieyou_SdkManager.showSpotByFinish();
        // }
    };
    UiSign.prototype.onGet = function () {
        if (!this._checkCanBonus()) {
            Msg_1.default.Show("今日奖励领取完毕，请明日再来");
            return;
        }
        var curDate = new Date();
        CocosZ_1.cocosz.dataMgr.LastBonusTime = curDate.toDateString();
        cc.log(CocosZ_1.cocosz.dataMgr.SkinVedioNum, "cocosz.dataMgr.SkinVedioNum");
        CocosZ_1.cocosz.dataMgr.SkinVedioNum += 5;
        Msg_1.default.Show("恭喜获得5个关卡跳过卡");
    };
    UiSign.prototype.onBack = function () {
        var _this = this;
        cc.tween(this.scaleNode)
            .to(0.2, { scale: 0 })
            .call(function () {
            _this._page.destroy();
        })
            .start();
    };
    UiSign.prototype.onClose = function () {
        cc.game.targetOff(this);
    };
    UiSign.prototype.onDestroy = function () {
        cc.game.targetOff(this);
    };
    UiSign.prototype._getRanDom = function () {
        var num = Math.random();
        if (num > 0.8) {
            return 0;
        }
        else if (num > 0.65) {
            return 1;
        }
        else if (num > 0.5) {
            return 2;
        }
        else if (num > 0.3) {
            return 3;
        }
        else if (num > 0.2) {
            return 4;
        }
        else if (num > 0.1) {
            return 5;
        }
        else if (num > 0.02) {
            return 6;
        }
        else if (num > 0) {
            return 7;
        }
    };
    UiSign = __decorate([
        ccclass
    ], UiSign);
    return UiSign;
}(UIPage_1.default));
exports.default = UiSign;

cc._RF.pop();