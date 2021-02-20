"use strict";
cc._RF.push(module, '9974f7J8y5O95L7g6xLV0cB', 'UIMgr');
// script/Framework/UIMgr.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Constant_1 = require("./Constant");
var UiFailed_1 = require("../Ui/UiFailed");
var UiHome_1 = require("../Ui/UiHome");
var UiLoad_1 = require("../Ui/UiLoad");
var UiShop_1 = require("../Ui/UiShop");
var UiSucceed_1 = require("../Ui/UiSucceed");
var UiGame_1 = require("../Ui/UiGame");
var PausePanel_1 = require("../Ui/PausePanel");
// import CoinTipsPanel from "../Ui/CoinTipsPanel";
var UiSign_1 = require("../Ui/UiSign");
// import TrialPanel from "../Ui/TrialPanel";
var UiSet_1 = require("../Ui/UiSet");
var LevelPanel_1 = require("../Ui/LevelPanel");
var UiLottery_1 = require("../Ui/UiLottery");
var UiBeforeSucceed_1 = require("../Ui/UiBeforeSucceed");
var UiResurrection_1 = require("../Ui/UiResurrection");
// import UiLoadGame from "../Ui/UiLoadGame";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIMgr = /** @class */ (function (_super) {
    __extends(UIMgr, _super);
    function UIMgr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._pageDict = {};
        _this._panelDict = {};
        return _this;
    }
    UIMgr_1 = UIMgr;
    Object.defineProperty(UIMgr, "inst", {
        get: function () {
            if (!UIMgr_1._inst) {
                UIMgr_1._inst = new UIMgr_1();
            }
            return UIMgr_1._inst;
        },
        enumerable: true,
        configurable: true
    });
    /**打开界面*/
    UIMgr.prototype.openPage = function (name) {
        this.closeAllPanel();
        cc.log(name, "----打开界面---------");
        for (var key in this._pageDict) {
            if (key && this._pageDict[key]) {
                this._pageDict[key].close();
            }
        }
        if (this._pageDict[name] && this._pageDict[name].isValid()) {
            this._pageDict[name].open();
        }
        else {
            var page = this._createUI(name);
            if (page) {
                this._pageDict[name] = page;
                page.open();
            }
        }
    };
    //打开弹窗
    UIMgr.prototype.openPanel = function (name) {
        if (this._panelDict[name] && this._panelDict[name].isValid()) {
            this._panelDict[name].open();
        }
        else {
            var panel = this._createUI(name);
            if (panel) {
                this._panelDict[name] = panel;
                panel.open();
            }
        }
    };
    UIMgr.prototype.closeAllPanel = function () {
        for (var key in this._panelDict) {
            if (key && this._panelDict[key]) {
                this._panelDict[key].close();
            }
        }
    };
    UIMgr.prototype.closePanel = function (name) {
        if (this._panelDict[name] && this._panelDict[name].isValid()) {
            this._panelDict[name].close();
        }
    };
    UIMgr.prototype._createUI = function (name) {
        switch (name) {
            case Constant_1.PanelName.UiFailed: {
                return new UiFailed_1.default();
            }
            case Constant_1.PageName.UiHome: {
                return new UiHome_1.default();
            }
            case Constant_1.PageName.UiLoad: {
                return new UiLoad_1.default();
            }
            case Constant_1.PanelName.UiSucceed: {
                return new UiSucceed_1.default();
            }
            case Constant_1.PageName.UiGame: {
                return new UiGame_1.default();
            }
            case Constant_1.PanelName.UiShop: {
                return new UiShop_1.default();
            }
            case Constant_1.PanelName.UiSet: {
                return new UiSet_1.default();
            }
            case Constant_1.PanelName.LevelPanel: {
                return new LevelPanel_1.default();
            }
            case Constant_1.PanelName.PausePanel: {
                return new PausePanel_1.default();
            }
            case Constant_1.PanelName.CoinTipsPanel: {
                return new CoinTipsPanel();
            }
            case Constant_1.PanelName.UiSign: {
                return new UiSign_1.default();
            }
            case Constant_1.PanelName.TrialPanel: {
                return new TrialPanel();
            }
            case Constant_1.PanelName.UiLottery: {
                return new UiLottery_1.default();
            }
            case Constant_1.PanelName.UiBeforeSucceed: {
                return new UiBeforeSucceed_1.default();
            }
            case Constant_1.PanelName.UiResurrection: {
                return new UiResurrection_1.default();
            }
            case Constant_1.PageName.UiLoadGame: {
                return new UiLoadGame();
            }
            default: {
                return null;
            }
        }
    };
    var UIMgr_1;
    UIMgr = UIMgr_1 = __decorate([
        ccclass
    ], UIMgr);
    return UIMgr;
}(cc.Component));
exports.default = UIMgr;

cc._RF.pop();