
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Ui/UiLoad.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bdda5pc7c5A+7g6p/fTW7Xk', 'UiLoad');
// script/Ui/UiLoad.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIPage_1 = require("./UIPage");
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UiLoad = /** @class */ (function (_super) {
    __extends(UiLoad, _super);
    function UiLoad() {
        var _this = _super.call(this) || this;
        _this._progress = null;
        _this.package1 = false;
        _this.package2 = false;
        _this.num = null;
        _this._init();
        return _this;
    }
    UiLoad.prototype._init = function () {
        lieyou_SdkManager.init(console.log("广告初始化完成！"));
        var Game = CocosZ_1.cocosz.resMgr.getRes(Constant_1.PageName.UiLoad, cc.Prefab);
        if (Game) {
            var node = cc.instantiate(Game);
            if (node) {
                this._page = node;
                cc.find("Canvas").addChild(node);
                node.active = false;
                node.position = cc.Vec3.ZERO;
                this._onLoad();
            }
        }
    };
    UiLoad.prototype.loadSubpackage = function (func) {
        var subpackages = [];
        var file_max = 0; //需要加载的文件总数
        var file_ach = 0; //已加载的文件数
        var _subpackages = cc.loader.downloader._subpackages;
        for (var a in _subpackages) {
            var subpackage = _subpackages[a];
            var len = 1;
            if (subpackage.uuids) {
                len = subpackage.uuids.length;
            }
            file_max += len;
            subpackages.push({ name: subpackage.name, file_num: len });
        }
        var loadsub = function (index) {
            if (subpackages.length == index) {
                func && func(1); //加载完成回调
                return;
            }
            console.log('加载分包', subpackages[index].name);
            cc.loader.downloader.loadSubpackage(subpackages[index].name, function (res) {
                //(已加载的文件数+当前分包加载进度*当前包文件数)/文件总数
                if (res) {
                    var progress = (file_ach + (res.progress / 100) * subpackages[index].file_num) / file_max;
                    if (progress < 1)
                        (func && func(progress)); //防止出现两次加载完成回调
                }
                else {
                    file_ach += subpackages[index].file_num;
                    var progress = (file_ach) / file_max;
                    if (progress < 1)
                        (func && func(progress)); //防止出现两次加载完成回调
                    loadsub(index + 1);
                }
            }, function (err) {
                if (err) {
                    console.log(err);
                    func && func(0);
                }
                else {
                    file_ach += subpackages[index].file_num;
                    var progress = (file_ach) / file_max;
                    if (progress < 1)
                        (func && func(progress)); //防止出现两次加载完成回调
                    loadsub(index + 1);
                }
            });
        };
        loadsub(0);
    };
    UiLoad.prototype._onLoad = function () {
        this._progress = this._page.getChildByName("scaleNode").getChildByName("ProgressBar").getComponent(cc.ProgressBar);
        this.num = this._page.getChildByName("scaleNode").getChildByName("num").getComponent(cc.Label);
        this._updateProgress(0);
        this.loadSubpackage(function (percent) {
            cc.game.emit(Constant_1.default.E_GAME_LOGIC, { type: Constant_1.default.E_UPDATE_PROGRESS, data: percent });
            if (percent == 1) {
                console.log("完成分包加载！");
                cc.game.emit(Constant_1.default.E_LOAD_RES);
            }
        });
        // if (cc.sys.platform !== cc.sys.WECHAT_GAME) {
        //     lieyou_SdkManager.init();
        // }
        // cc.debug.setDisplayStats(true);
    };
    UiLoad.prototype._updateProgress = function (percent) {
        this._progress.progress = percent;
        this.num.string = Math.round(percent * 100) + "%";
    };
    UiLoad.prototype.onOpen = function () {
        this._registerEvent();
    };
    UiLoad.prototype.onClose = function () {
        this._unregisterEvent();
    };
    UiLoad.prototype.onDestroy = function () {
        cc.game.targetOff(this);
    };
    UiLoad.prototype._registerEvent = function () {
        cc.game.on(Constant_1.default.E_GAME_LOGIC, this._onGameMessageHandler, this);
    };
    UiLoad.prototype._unregisterEvent = function () {
        cc.game.targetOff(this);
    };
    UiLoad.prototype._onGameMessageHandler = function (event) {
        switch (event.type) {
            case Constant_1.default.E_UPDATE_PROGRESS: {
                this._updateProgress(event.data);
                break;
            }
        }
    };
    UiLoad = __decorate([
        ccclass
    ], UiLoad);
    return UiLoad;
}(UIPage_1.default));
exports.default = UiLoad;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxVaVxcVWlMb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFDOUIsOENBQTZDO0FBQzdDLGtEQUEyRDtBQUVyRCxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFNO0lBT3RDO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBUk8sZUFBUyxHQUFtQixJQUFJLENBQUM7UUFDakMsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLFNBQUcsR0FBYSxJQUFJLENBQUM7UUFHekIsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDOztJQUNqQixDQUFDO0lBQ08sc0JBQUssR0FBYjtRQUNJLGlCQUFpQixDQUFDLElBQUksQ0FDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FDMUIsQ0FBQztRQUNGLElBQUksSUFBSSxHQUFjLGVBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLG1CQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RSxJQUFJLElBQUksRUFBRTtZQUNOLElBQUksSUFBSSxHQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekMsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDN0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2xCO1NBQ0o7SUFDTCxDQUFD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LENBQUM7SUFDMUIsQ0FBQztJQUVTLHdCQUFPLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVTLDBCQUFTLEdBQW5CO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVPLCtCQUFjLEdBQXRCO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQVEsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTyxpQ0FBZ0IsR0FBeEI7UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU8sc0NBQXFCLEdBQTdCLFVBQThCLEtBQVU7UUFDcEMsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ2hCLEtBQUssa0JBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakMsTUFBTTthQUNUO1NBQ0o7SUFDTCxDQUFDO0lBL0hnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBaUkxQjtJQUFELGFBQUM7Q0FqSUQsQUFpSUMsQ0FqSW1DLGdCQUFNLEdBaUl6QztrQkFqSW9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlQYWdlIGZyb20gXCIuL1VJUGFnZVwiO1xyXG5pbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5pbXBvcnQgQ29uc3RhbnQsIHsgUGFnZU5hbWUgfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvbnN0YW50XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVWlMb2FkIGV4dGVuZHMgVUlQYWdlIHtcclxuXHJcbiAgICBwcml2YXRlIF9wcm9ncmVzczogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBwYWNrYWdlMTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBwYWNrYWdlMjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgbnVtOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX2luaXQoKSB7XHJcbiAgICAgICAgbGlleW91X1Nka01hbmFnZXIuaW5pdChcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlub/lkYrliJ3lp4vljJblrozmiJDvvIFcIilcclxuICAgICAgICApO1xyXG4gICAgICAgIGxldCBHYW1lOiBjYy5QcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhQYWdlTmFtZS5VaUxvYWQsIGNjLlByZWZhYik7XHJcbiAgICAgICAgaWYgKEdhbWUpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZShHYW1lKTtcclxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhZ2UgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gY2MuVmVjMy5aRVJPO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb25Mb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFN1YnBhY2thZ2UoZnVuYykge1xyXG4gICAgICAgIHZhciBzdWJwYWNrYWdlcyA9IFtdO1xyXG4gICAgICAgIHZhciBmaWxlX21heCA9IDA7Ly/pnIDopoHliqDovb3nmoTmlofku7bmgLvmlbBcclxuICAgICAgICB2YXIgZmlsZV9hY2ggPSAwOy8v5bey5Yqg6L2955qE5paH5Lu25pWwXHJcbiAgICAgICAgdmFyIF9zdWJwYWNrYWdlcyA9IGNjLmxvYWRlci5kb3dubG9hZGVyLl9zdWJwYWNrYWdlcztcclxuICAgICAgICBmb3IgKHZhciBhIGluIF9zdWJwYWNrYWdlcykge1xyXG4gICAgICAgICAgICB2YXIgc3VicGFja2FnZSA9IF9zdWJwYWNrYWdlc1thXTtcclxuICAgICAgICAgICAgdmFyIGxlbiA9IDE7XHJcbiAgICAgICAgICAgIGlmIChzdWJwYWNrYWdlLnV1aWRzKSB7XHJcbiAgICAgICAgICAgICAgICBsZW4gPSBzdWJwYWNrYWdlLnV1aWRzLmxlbmd0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmaWxlX21heCArPSBsZW47XHJcbiAgICAgICAgICAgIHN1YnBhY2thZ2VzLnB1c2goeyBuYW1lOiBzdWJwYWNrYWdlLm5hbWUsIGZpbGVfbnVtOiBsZW4gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsb2Fkc3ViID0gKGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdWJwYWNrYWdlcy5sZW5ndGggPT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGZ1bmMgJiYgZnVuYygxKTsvL+WKoOi9veWujOaIkOWbnuiwg1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfliqDovb3liIbljIUnLCBzdWJwYWNrYWdlc1tpbmRleF0ubmFtZSk7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5kb3dubG9hZGVyLmxvYWRTdWJwYWNrYWdlKHN1YnBhY2thZ2VzW2luZGV4XS5uYW1lLCAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyjlt7LliqDovb3nmoTmlofku7bmlbAr5b2T5YmN5YiG5YyF5Yqg6L296L+b5bqmKuW9k+WJjeWMheaWh+S7tuaVsCkv5paH5Lu25oC75pWwXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gKGZpbGVfYWNoICsgKHJlcy5wcm9ncmVzcyAvIDEwMCkgKiBzdWJwYWNrYWdlc1tpbmRleF0uZmlsZV9udW0pIC8gZmlsZV9tYXg7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzIDwgMSkgKGZ1bmMgJiYgZnVuYyhwcm9ncmVzcykpOy8v6Ziy5q2i5Ye6546w5Lik5qyh5Yqg6L295a6M5oiQ5Zue6LCDXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlX2FjaCArPSBzdWJwYWNrYWdlc1tpbmRleF0uZmlsZV9udW07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gKGZpbGVfYWNoKSAvIGZpbGVfbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA8IDEpIChmdW5jICYmIGZ1bmMocHJvZ3Jlc3MpKTsvL+mYsuatouWHuueOsOS4pOasoeWKoOi9veWujOaIkOWbnuiwg1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRzdWIoaW5kZXggKyAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgZnVuYyAmJiBmdW5jKDApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlX2FjaCArPSBzdWJwYWNrYWdlc1tpbmRleF0uZmlsZV9udW07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gKGZpbGVfYWNoKSAvIGZpbGVfbWF4O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA8IDEpIChmdW5jICYmIGZ1bmMocHJvZ3Jlc3MpKTsvL+mYsuatouWHuueOsOS4pOasoeWKoOi9veWujOaIkOWbnuiwg1xyXG4gICAgICAgICAgICAgICAgICAgIGxvYWRzdWIoaW5kZXggKyAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvYWRzdWIoMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX3Byb2dyZXNzID0gdGhpcy5fcGFnZS5nZXRDaGlsZEJ5TmFtZShcInNjYWxlTm9kZVwiKS5nZXRDaGlsZEJ5TmFtZShcIlByb2dyZXNzQmFyXCIpLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0Jhcik7XHJcbiAgICAgICAgdGhpcy5udW0gPSB0aGlzLl9wYWdlLmdldENoaWxkQnlOYW1lKFwic2NhbGVOb2RlXCIpLmdldENoaWxkQnlOYW1lKFwibnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5fdXBkYXRlUHJvZ3Jlc3MoMCk7XHJcblxyXG4gICAgICAgIHRoaXMubG9hZFN1YnBhY2thZ2UoKHBlcmNlbnQpID0+IHtcclxuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KENvbnN0YW50LkVfR0FNRV9MT0dJQywgeyB0eXBlOiBDb25zdGFudC5FX1VQREFURV9QUk9HUkVTUywgZGF0YTogcGVyY2VudCB9KTtcclxuICAgICAgICAgICAgaWYgKHBlcmNlbnQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlrozmiJDliIbljIXliqDovb3vvIFcIilcclxuICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX0xPQURfUkVTKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGlmIChjYy5zeXMucGxhdGZvcm0gIT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgIC8vICAgICBsaWV5b3VfU2RrTWFuYWdlci5pbml0KCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHModHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdXBkYXRlUHJvZ3Jlc3MocGVyY2VudDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3MucHJvZ3Jlc3MgPSBwZXJjZW50O1xyXG4gICAgICAgIHRoaXMubnVtLnN0cmluZyA9IE1hdGgucm91bmQocGVyY2VudCAqIDEwMCkgKyBcIiVcIlxyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbk9wZW4oKSB7XHJcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJFdmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkNsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuX3VucmVnaXN0ZXJFdmVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY2MuZ2FtZS50YXJnZXRPZmYodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVnaXN0ZXJFdmVudCgpIHtcclxuICAgICAgICBjYy5nYW1lLm9uKENvbnN0YW50LkVfR0FNRV9MT0dJQywgdGhpcy5fb25HYW1lTWVzc2FnZUhhbmRsZXIsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3VucmVnaXN0ZXJFdmVudCgpIHtcclxuICAgICAgICBjYy5nYW1lLnRhcmdldE9mZih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbkdhbWVNZXNzYWdlSGFuZGxlcihldmVudDogYW55KSB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RhbnQuRV9VUERBVEVfUFJPR1JFU1M6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVByb2dyZXNzKGV2ZW50LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==