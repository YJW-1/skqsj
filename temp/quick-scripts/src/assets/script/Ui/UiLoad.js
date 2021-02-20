"use strict";
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