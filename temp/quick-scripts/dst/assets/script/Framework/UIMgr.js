
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/UIMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFVJTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx1Q0FBcUU7QUFFckUsMkNBQXNDO0FBQ3RDLHVDQUFrQztBQUNsQyx1Q0FBa0M7QUFDbEMsdUNBQWtDO0FBQ2xDLDZDQUF3QztBQUN4Qyx1Q0FBa0M7QUFDbEMsK0NBQTBDO0FBQzFDLG1EQUFtRDtBQUNuRCx1Q0FBa0M7QUFDbEMsNkNBQTZDO0FBQzdDLHFDQUFnQztBQUNoQywrQ0FBMEM7QUFDMUMsNkNBQXdDO0FBQ3hDLHlEQUFvRDtBQUNwRCx1REFBa0Q7QUFDbEQsNkNBQTZDO0FBSXZDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFEL0M7UUFBQSxxRUFzSEM7UUF6R1csZUFBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQixnQkFBVSxHQUFRLEVBQUUsQ0FBQzs7SUF3R2pDLENBQUM7Y0FySG9CLEtBQUs7SUFLdEIsc0JBQWtCLGFBQUk7YUFBdEI7WUFDSSxJQUFJLENBQUMsT0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDZCxPQUFLLENBQUMsS0FBSyxHQUFHLElBQUksT0FBSyxFQUFFLENBQUM7YUFDN0I7WUFDRCxPQUFPLE9BQUssQ0FBQyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFNRCxTQUFTO0lBQ0Ysd0JBQVEsR0FBZixVQUFnQixJQUFZO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2xDLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM1QixJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FB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S0FBSyxvQkFBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN2QixPQUFPLElBQUksb0JBQVUsRUFBRSxDQUFDO2FBQzNCO1lBQ0QsS0FBSyxvQkFBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUMxQixPQUFPLElBQUksYUFBYSxFQUFFLENBQUM7YUFDOUI7WUFDRCxLQUFLLG9CQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ25CLE9BQU8sSUFBSSxnQkFBTSxFQUFFLENBQUM7YUFDdkI7WUFDRCxLQUFLLG9CQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3ZCLE9BQU8sSUFBSSxVQUFVLEVBQUUsQ0FBQzthQUMzQjtZQUNELEtBQUssb0JBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdEIsT0FBTyxJQUFJLG1CQUFTLEVBQUUsQ0FBQzthQUMxQjtZQUNELEtBQUssb0JBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDNUIsT0FBTyxJQUFJLHlCQUFlLEVBQUUsQ0FBQzthQUNoQztZQUNELEtBQUssb0JBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDM0IsT0FBTyxJQUFJLHdCQUFjLEVBQUUsQ0FBQzthQUMvQjtZQUNELEtBQUssbUJBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdEIsT0FBTyxJQUFJLFVBQVUsRUFBRSxDQUFDO2FBQzNCO1lBQ0QsT0FBTyxDQUFDLENBQUM7Z0JBQ0wsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO0lBQ0wsQ0FBQzs7SUFwSGdCLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0FxSHpCO0lBQUQsWUFBQztDQXJIRCxBQXFIQyxDQXJIa0MsRUFBRSxDQUFDLFNBQVMsR0FxSDlDO2tCQXJIb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgQ29uc3RhbnQsIHsgUGFnZU5hbWUsIFNraW5JbmZvLCBQYW5lbE5hbWUgfSBmcm9tIFwiLi9Db25zdGFudFwiO1xyXG5pbXBvcnQgVUlQYWdlIGZyb20gXCIuLi9VaS9VSVBhZ2VcIjtcclxuaW1wb3J0IFVpRmFpbGVkIGZyb20gXCIuLi9VaS9VaUZhaWxlZFwiO1xyXG5pbXBvcnQgVWlIb21lIGZyb20gXCIuLi9VaS9VaUhvbWVcIjtcclxuaW1wb3J0IFVpTG9hZCBmcm9tIFwiLi4vVWkvVWlMb2FkXCI7XHJcbmltcG9ydCBVaVNob3AgZnJvbSBcIi4uL1VpL1VpU2hvcFwiO1xyXG5pbXBvcnQgVWlTdWNjZWVkIGZyb20gXCIuLi9VaS9VaVN1Y2NlZWRcIjtcclxuaW1wb3J0IFVpR2FtZSBmcm9tIFwiLi4vVWkvVWlHYW1lXCI7XHJcbmltcG9ydCBQYXVzZVBhbmVsIGZyb20gXCIuLi9VaS9QYXVzZVBhbmVsXCI7XHJcbi8vIGltcG9ydCBDb2luVGlwc1BhbmVsIGZyb20gXCIuLi9VaS9Db2luVGlwc1BhbmVsXCI7XHJcbmltcG9ydCBVSVNpZ24gZnJvbSBcIi4uL1VpL1VpU2lnblwiO1xyXG4vLyBpbXBvcnQgVHJpYWxQYW5lbCBmcm9tIFwiLi4vVWkvVHJpYWxQYW5lbFwiO1xyXG5pbXBvcnQgVWlTZXQgZnJvbSBcIi4uL1VpL1VpU2V0XCI7XHJcbmltcG9ydCBMZXZlbFBhbmVsIGZyb20gXCIuLi9VaS9MZXZlbFBhbmVsXCI7XHJcbmltcG9ydCBVaUxvdHRlcnkgZnJvbSBcIi4uL1VpL1VpTG90dGVyeVwiO1xyXG5pbXBvcnQgVWlCZWZvcmVTdWNjZWVkIGZyb20gXCIuLi9VaS9VaUJlZm9yZVN1Y2NlZWRcIjtcclxuaW1wb3J0IFVpUmVzdXJyZWN0aW9uIGZyb20gXCIuLi9VaS9VaVJlc3VycmVjdGlvblwiO1xyXG4vLyBpbXBvcnQgVWlMb2FkR2FtZSBmcm9tIFwiLi4vVWkvVWlMb2FkR2FtZVwiO1xyXG5cclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlNZ3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIFxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0OiBVSU1ncjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3QoKTogVUlNZ3Ige1xyXG4gICAgICAgIGlmICghVUlNZ3IuX2luc3QpIHtcclxuICAgICAgICAgICAgVUlNZ3IuX2luc3QgPSBuZXcgVUlNZ3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFVJTWdyLl9pbnN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3BhZ2VEaWN0OiBhbnkgPSB7fTtcclxuICAgIHByaXZhdGUgX3BhbmVsRGljdDogYW55ID0ge307XHJcblxyXG5cclxuICAgIC8qKuaJk+W8gOeVjOmdoiovXHJcbiAgICBwdWJsaWMgb3BlblBhZ2UobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZUFsbFBhbmVsKCk7XHJcbiAgICAgICAgY2MubG9nKG5hbWUsIFwiLS0tLeaJk+W8gOeVjOmdoi0tLS0tLS0tLVwiKTtcclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fcGFnZURpY3QpIHtcclxuICAgICAgICAgICAgaWYgKGtleSAmJiB0aGlzLl9wYWdlRGljdFtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWdlRGljdFtrZXldLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3BhZ2VEaWN0W25hbWVdICYmIHRoaXMuX3BhZ2VEaWN0W25hbWVdLmlzVmFsaWQoKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9wYWdlRGljdFtuYW1lXS5vcGVuKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHBhZ2U6IFVJUGFnZSA9IHRoaXMuX2NyZWF0ZVVJKG5hbWUpO1xyXG4gICAgICAgICAgICBpZiAocGFnZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFnZURpY3RbbmFtZV0gPSBwYWdlO1xyXG4gICAgICAgICAgICAgICAgcGFnZS5vcGVuKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvL+aJk+W8gOW8ueeql1xyXG4gICAgcHVibGljIG9wZW5QYW5lbChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5fcGFuZWxEaWN0W25hbWVdICYmIHRoaXMuX3BhbmVsRGljdFtuYW1lXS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGFuZWxEaWN0W25hbWVdLm9wZW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgcGFuZWw6IFVJUGFnZSA9IHRoaXMuX2NyZWF0ZVVJKG5hbWUpO1xyXG4gICAgICAgICAgICBpZiAocGFuZWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhbmVsRGljdFtuYW1lXSA9IHBhbmVsO1xyXG4gICAgICAgICAgICAgICAgcGFuZWwub3BlbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZUFsbFBhbmVsKCkge1xyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiB0aGlzLl9wYW5lbERpY3QpIHtcclxuICAgICAgICAgICAgaWYgKGtleSAmJiB0aGlzLl9wYW5lbERpY3Rba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFuZWxEaWN0W2tleV0uY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VQYW5lbChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5fcGFuZWxEaWN0W25hbWVdICYmIHRoaXMuX3BhbmVsRGljdFtuYW1lXS5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGFuZWxEaWN0W25hbWVdLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NyZWF0ZVVJKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFBhbmVsTmFtZS5VaUZhaWxlZDoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVaUZhaWxlZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgUGFnZU5hbWUuVWlIb21lOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFVpSG9tZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgUGFnZU5hbWUuVWlMb2FkOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFVpTG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgUGFuZWxOYW1lLlVpU3VjY2VlZDoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVaVN1Y2NlZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFBhZ2VOYW1lLlVpR2FtZToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVaUdhbWUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFBhbmVsTmFtZS5VaVNob3A6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVWlTaG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBQYW5lbE5hbWUuVWlTZXQ6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVWlTZXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFBhbmVsTmFtZS5MZXZlbFBhbmVsOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExldmVsUGFuZWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFBhbmVsTmFtZS5QYXVzZVBhbmVsOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFBhdXNlUGFuZWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFBhbmVsTmFtZS5Db2luVGlwc1BhbmVsOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvaW5UaXBzUGFuZWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFBhbmVsTmFtZS5VaVNpZ246IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVUlTaWduKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBQYW5lbE5hbWUuVHJpYWxQYW5lbDoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUcmlhbFBhbmVsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBQYW5lbE5hbWUuVWlMb3R0ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFVpTG90dGVyeSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgUGFuZWxOYW1lLlVpQmVmb3JlU3VjY2VlZDoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVaUJlZm9yZVN1Y2NlZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFBhbmVsTmFtZS5VaVJlc3VycmVjdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVaVJlc3VycmVjdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgUGFnZU5hbWUuVWlMb2FkR2FtZToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVaUxvYWRHYW1lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0=