"use strict";
cc._RF.push(module, '99e0aI/H+pFlb4HghrzitKi', 'SceneMgr');
// script/Framework/SceneMgr.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("./CocosZ");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SceneMgr = /** @class */ (function () {
    function SceneMgr() {
        this._activeScene = "";
        this._timeInterval = 0;
        this.sceneName = "";
    }
    SceneMgr_1 = SceneMgr;
    Object.defineProperty(SceneMgr, "inst", {
        get: function () {
            if (!SceneMgr_1._inst) {
                SceneMgr_1._inst = new SceneMgr_1();
            }
            return SceneMgr_1._inst;
        },
        enumerable: true,
        configurable: true
    });
    SceneMgr.prototype.loadScene = function (name, onLunch) {
        // cocosz.gameMgr.Num = 0;
        // cocosz.gameMgr.PlatformNum = 0;
        CocosZ_1.cocosz.unscheduleAllCallbacks();
        if (this._activeScene == name) {
            var curTime = (new Date()).getTime();
            if (curTime - this._timeInterval < 1000) {
                return;
            }
        }
        this._timeInterval = (new Date()).getTime();
        cc.director.loadScene(name, onLunch);
        if (this._activeScene == name) {
            return;
        }
        if (name == "Home") {
            // cocosz.audioMgr.stopAll();
            // cocosz.audioMgr.playHomeMusic();
        }
        else if (name == "Game") {
            // cocosz.audioMgr.playGameMusic();
            // cocosz.audioMgr.playHomeMusic();
        }
        this._activeScene = name;
        this.sceneName = this._activeScene;
    };
    var SceneMgr_1;
    SceneMgr = SceneMgr_1 = __decorate([
        ccclass
    ], SceneMgr);
    return SceneMgr;
}());
exports.default = SceneMgr;

cc._RF.pop();