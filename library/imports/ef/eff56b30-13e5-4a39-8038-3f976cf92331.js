"use strict";
cc._RF.push(module, 'eff56swE+VKOYA4P5ds+SMx', 'UiSet');
// script/Ui/UiSet.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIPage_1 = require("./UIPage");
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UiSet = /** @class */ (function (_super) {
    __extends(UiSet, _super);
    function UiSet() {
        var _this = _super.call(this) || this;
        _this.scaleNode = null;
        _this.btnMusic = null;
        _this.btnEffect = null;
        _this.btnShork = null;
        _this.btnBack = null;
        _this.num = null;
        _this._init();
        return _this;
    }
    UiSet.prototype._init = function () {
        var Game = CocosZ_1.cocosz.resMgr.getRes(Constant_1.PanelName.UiSet, cc.Prefab);
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
    UiSet.prototype._onLoad = function () {
        this.scaleNode = this._page.getChildByName("scaleNode");
        this.btnMusic = this.scaleNode.getChildByName("btn_music");
        this.btnEffect = this.scaleNode.getChildByName("btn_effect");
        this.btnShork = this.scaleNode.getChildByName("btn_shock");
        this.btnBack = this.scaleNode.getChildByName("btn_back");
        this._Start();
    };
    UiSet.prototype._Start = function () {
        var _this = this;
        this.btnMusic.getChildByName("btnBg").on(cc.Node.EventType.TOUCH_END, function () {
            CocosZ_1.cocosz.dataMgr.AudioOn = !CocosZ_1.cocosz.dataMgr.AudioOn;
            if (CocosZ_1.cocosz.dataMgr.AudioOn) {
                CocosZ_1.cocosz.audioMgr.playGameMusic();
            }
            else {
                CocosZ_1.cocosz.audioMgr.stopAll();
            }
            _this.initBtnState();
        });
        this.btnEffect.getChildByName("btnBg").on(cc.Node.EventType.TOUCH_END, function () {
            CocosZ_1.cocosz.dataMgr.AudioEffectOn = !CocosZ_1.cocosz.dataMgr.AudioEffectOn;
            _this.initBtnState();
        });
        this.btnShork.getChildByName("btnBg").on(cc.Node.EventType.TOUCH_END, function () {
            CocosZ_1.cocosz.dataMgr.ShockOn = !CocosZ_1.cocosz.dataMgr.ShockOn;
            _this.initBtnState();
        });
        this.btnBack.on(cc.Node.EventType.TOUCH_END, function () {
            _this.onBack();
        });
        this.scaleNode.getChildByName("box_bg").on(cc.Node.EventType.TOUCH_END, function () {
            _this.num++;
            if (_this.num > 10) {
                CocosZ_1.cocosz.dataMgr.LastBonusTime = "0";
                // cocosz.dataMgr.CoinCount += 99999;
                cc.game.emit(Constant_1.default.E_UPDATE_COIN);
                CocosZ_1.cocosz.gameMgr.isLevelOpen = true;
            }
        });
    };
    UiSet.prototype.onOpen = function () {
        this.initBtnState();
        this.scaleNode.scale = 0;
        cc.tween(this.scaleNode)
            .to(0.2, { scale: 1.4 })
            .to(0.1, { scale: 1.2 })
            .call(function () {
        })
            .start();
        if ((cc.sys.platform === cc.sys.VIVO_GAME)) {
            lieyou_SdkManager.showSpotByPause();
        }
        else if (cc.sys.platform === cc.sys.OPPO_GAME) {
            lieyou_SdkManager.hideBanner();
            this.scaleNode.x = -355;
            var sp = CocosZ_1.cocosz.resMgr.getRes("ss", cc.SpriteFrame);
            lieyou_SdkManager.showNativeAd_big({
                node: this.scaleNode.getChildByName("nativePos"), "titleColor": cc.color(255, 255, 255, 255),
                "descColor": cc.color(255, 255, 255, 255), bgPath: 'texture/ss', texture: sp, scale: 0.85, insetTop: 10, insetBottom: 10, insetLeft: 10, insetRight: 10
            });
        }
        // lieyou_SdkManager.showBannerByBottom();
        // if (cc.sys.platform === cc.sys.VIVO_GAME) {
        //     lieyou_SdkManager.showSpotByFinish();
        // }
    };
    UiSet.prototype.initBtnState = function () {
        // if (cocosz.dataMgr.AudioOn) {
        var x = CocosZ_1.cocosz.dataMgr.AudioOn == true ? 204 : 100;
        var pos = cc.v2(x, 0);
        var node = this.btnMusic.getChildByName("set_btn");
        if (node.x != x) {
            cc.tween(node)
                .to(0.2, { position: pos })
                .start();
        }
        var x2 = CocosZ_1.cocosz.dataMgr.AudioEffectOn == true ? 204 : 100;
        var pos2 = cc.v2(x2, 0);
        var node2 = this.btnEffect.getChildByName("set_btn");
        if (node2.x != x2) {
            cc.tween(node2)
                .to(0.2, { position: pos2 })
                .start();
        }
        var x3 = CocosZ_1.cocosz.dataMgr.ShockOn == true ? 204 : 100;
        var pos3 = cc.v2(x3, 0);
        var node3 = this.btnShork.getChildByName("set_btn");
        if (node3.x != x3) {
            cc.tween(node3)
                .to(0.2, { position: pos3 })
                .start();
        }
        // }
        // this.btnMusic.getChildByName("btn_on").active = cocosz.dataMgr.AudioOn;
        // this.btnMusic.getChildByName("btn_off").active = !cocosz.dataMgr.AudioOn;
        // this.btnEffect.getChildByName("btn_on").active = cocosz.dataMgr.AudioEffectOn;
        // this.btnEffect.getChildByName("btn_off").active = !cocosz.dataMgr.AudioEffectOn;
        // this.btnShork.getChildByName("btn_on").active = cocosz.dataMgr.ShockOn;
        // this.btnShork.getChildByName("btn_off").active = !cocosz.dataMgr.ShockOn;
    };
    UiSet.prototype.onBack = function () {
        var _this = this;
        cc.tween(this.scaleNode)
            .to(0.2, { scale: 0 })
            .call(function () {
            lieyou_SdkManager.showMoreGameByBanner();
            _this._page.destroy();
        })
            .start();
    };
    UiSet.prototype.onClose = function () {
        cc.game.targetOff(this);
    };
    UiSet.prototype.onDestroy = function () {
        cc.game.targetOff(this);
    };
    UiSet.prototype._getRanDom = function () {
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
    UiSet = __decorate([
        ccclass
    ], UiSet);
    return UiSet;
}(UIPage_1.default));
exports.default = UiSet;

cc._RF.pop();