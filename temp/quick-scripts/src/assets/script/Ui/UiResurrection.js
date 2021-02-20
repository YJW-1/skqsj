"use strict";
cc._RF.push(module, '1f673Tw+0pKFpl5wjJLEuWB', 'UiResurrection');
// script/Ui/UiResurrection.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIPage_1 = require("./UIPage");
var Constant_1 = require("../Framework/Constant");
var CocosZ_1 = require("../Framework/CocosZ");
var Msg_1 = require("../Framework/Msg");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UiResurrection = /** @class */ (function (_super) {
    __extends(UiResurrection, _super);
    function UiResurrection() {
        var _this = _super.call(this) || this;
        _this._ScaleNode = null;
        _this._BtnResurrection = null;
        _this._Ske = null;
        _this._BtnCannel = null;
        _this._Circle4 = null;
        _this._Circle3 = null;
        _this._Circle2 = null;
        _this._DelayTimeLable = null;
        _this._ResurrectionDelayTime = 5;
        _this._ActionList = [];
        _this._init();
        return _this;
    }
    UiResurrection.prototype._init = function () {
        var Game = CocosZ_1.cocosz.resMgr.getRes(Constant_1.PanelName.UiResurrection, cc.Prefab);
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
    UiResurrection.prototype._onLoad = function () {
        this._ScaleNode = this._page.getChildByName("ScaleNode");
        this._BtnResurrection = this._ScaleNode.getChildByName("BtnResurrection");
        this._BtnCannel = this._ScaleNode.getChildByName("BtnCannel");
        this._Circle4 = this._ScaleNode.getChildByName("Time").getChildByName("circle_4").getComponent(cc.Sprite);
        this._Circle3 = this._ScaleNode.getChildByName("Time").getChildByName("circle_3").getComponent(cc.Sprite);
        this._Circle2 = this._ScaleNode.getChildByName("Time").getChildByName("circle_2").getComponent(cc.Sprite);
        this._DelayTimeLable = this._ScaleNode.getChildByName("Time").getChildByName("num").getComponent(cc.Label);
        this._Start();
    };
    UiResurrection.prototype._Start = function () {
        var _this = this;
        this._BtnResurrection.on(cc.Node.EventType.TOUCH_START, function () {
            _this.onBtnResurrection();
        });
        this._BtnCannel.on(cc.Node.EventType.TOUCH_START, function () {
            _this.onBtnCannel();
        });
    };
    UiResurrection.prototype.onBtnResurrection = function () {
        cc.log("00-------------");
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        Msg_1.default.Show("视频播放失败!");
    };
    UiResurrection.prototype.onBtnCannel = function () {
        cc.log("00-------222------");
        for (var _i = 0, _a = this._ActionList; _i < _a.length; _i++) {
            var action = _a[_i];
            if (action) {
                action.stop();
            }
        }
        CocosZ_1.cocosz.unscheduleAllCallbacks();
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        CocosZ_1.cocosz.uiMgr.openPanel(Constant_1.PanelName.UiFailed);
        cc.game.emit(Constant_1.default.E_UPDATE_COIN);
        this._page.destroy();
    };
    UiResurrection.prototype.onOpen = function () {
        var _this = this;
        CocosZ_1.cocosz.schedule(function () {
            if (Math.ceil(Math.abs(_this._Circle2.fillRange * 5 + 5)) > 0) {
                _this._DelayTimeLable.string = Math.ceil(Math.abs(_this._Circle2.fillRange * 5 + 5)).toString();
            }
        }, 0.01);
        var action1 = cc.tween(this._Circle2)
            .to(5, { fillRange: -1 })
            .call(function () {
            _this.onBtnCannel();
        })
            .start();
        var action2 = cc.tween(this._ScaleNode.getChildByName("Bg").getChildByName("DelayBox"))
            .to(1, { opacity: 0 })
            .to(1, { opacity: 255 })
            .to(1, { opacity: 0 })
            .to(1, { opacity: 255 })
            .to(1, { opacity: 0 })
            .start();
        var height = this._Circle3.node.height;
        var width = this._Circle3.node.width;
        var action3 = cc.tween(this._Circle3.node)
            .call(function () {
            _this._Circle3.node.height = _this._Circle2.node.height;
            _this._Circle3.node.width = _this._Circle2.node.width;
            _this._Circle3.node.opacity = 255;
        })
            .to(0.75, { height: height + 150, width: width + 150, opacity: 0 })
            .delay(0.25)
            .call(function () {
            _this._Circle3.node.height = _this._Circle2.node.height;
            _this._Circle3.node.width = _this._Circle2.node.width;
            _this._Circle3.node.opacity = 255;
        })
            .to(0.75, { height: height + 150, width: width + 150, opacity: 0 })
            .delay(0.25)
            .call(function () {
            _this._Circle3.node.height = _this._Circle2.node.height;
            _this._Circle3.node.width = _this._Circle2.node.width;
            _this._Circle3.node.opacity = 255;
        })
            .to(0.75, { height: height + 150, width: width + 150, opacity: 0 })
            .delay(0.25)
            .call(function () {
            _this._Circle3.node.height = _this._Circle2.node.height;
            _this._Circle3.node.width = _this._Circle2.node.width;
            _this._Circle3.node.opacity = 255;
        })
            .to(0.75, { height: height + 150, width: width + 150, opacity: 0 })
            .delay(0.25)
            .call(function () {
            _this._Circle3.node.height = _this._Circle2.node.height;
            _this._Circle3.node.width = _this._Circle2.node.width;
            _this._Circle3.node.opacity = 255;
        })
            .to(0.75, { height: height + 150, width: width + 150, opacity: 0 })
            .delay(0.25)
            .start();
        height = this._Circle4.node.height;
        width = this._Circle4.node.width;
        var action4 = cc.tween(this._Circle4.node)
            .call(function () {
            _this._Circle4.node.height = _this._Circle2.node.height;
            _this._Circle4.node.width = _this._Circle2.node.width;
            _this._Circle4.node.opacity = 255;
        })
            .to(0.75, { height: height + 75, width: width + 75, opacity: 0 })
            .delay(0.25)
            .call(function () {
            _this._Circle4.node.height = _this._Circle2.node.height;
            _this._Circle4.node.width = _this._Circle2.node.width;
            _this._Circle4.node.opacity = 255;
        })
            .to(0.75, { height: height + 75, width: width + 75, opacity: 0 })
            .delay(0.25)
            .call(function () {
            _this._Circle4.node.height = _this._Circle2.node.height;
            _this._Circle4.node.width = _this._Circle2.node.width;
            _this._Circle4.node.opacity = 255;
        })
            .to(0.75, { height: height + 75, width: width + 75, opacity: 0 })
            .delay(0.25)
            .call(function () {
            _this._Circle4.node.height = _this._Circle2.node.height;
            _this._Circle4.node.width = _this._Circle2.node.width;
            _this._Circle4.node.opacity = 255;
        })
            .to(0.75, { height: height + 75, width: width + 75, opacity: 0 })
            .delay(0.25)
            .call(function () {
            _this._Circle4.node.height = _this._Circle2.node.height;
            _this._Circle4.node.width = _this._Circle2.node.width;
            _this._Circle4.node.opacity = 255;
        })
            .to(0.75, { height: height + 75, width: width + 75, opacity: 0 })
            .delay(0.25)
            .start();
        this._ActionList.push(action1);
        this._ActionList.push(action2);
        this._ActionList.push(action3);
        this._ActionList.push(action4);
    };
    UiResurrection.prototype.onClose = function () {
        CocosZ_1.cocosz.unscheduleAllCallbacks();
        cc.game.targetOff(this);
    };
    UiResurrection.prototype.onDestroy = function () {
        CocosZ_1.cocosz.unscheduleAllCallbacks();
        cc.game.targetOff(this);
    };
    UiResurrection = __decorate([
        ccclass
    ], UiResurrection);
    return UiResurrection;
}(UIPage_1.default));
exports.default = UiResurrection;

cc._RF.pop();