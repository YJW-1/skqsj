
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/SceneMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFNjZW5lTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBa0M7QUFHNUIsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQURBO1FBWVksaUJBQVksR0FBVyxFQUFFLENBQUM7UUFDMUIsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFDM0IsY0FBUyxHQUFXLEVBQUUsQ0FBQztJQTJCbEMsQ0FBQztpQkF4Q29CLFFBQVE7SUFJekIsc0JBQWtCLGdCQUFJO2FBQXRCO1lBQ0ksSUFBSSxDQUFDLFVBQVEsQ0FBQyxLQUFLLEVBQUU7Z0JBQ2pCLFVBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxVQUFRLEVBQUUsQ0FBQzthQUNuQztZQUNELE9BQU8sVUFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQU1NLDRCQUFTLEdBQWhCLFVBQWlCLElBQVksRUFBRSxPQUFpQjtRQUM1QywwQkFBMEI7UUFDMUIsa0NBQWtDO1FBQ2xDLGVBQU0sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ2hDLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLEVBQUU7WUFDM0IsSUFBSSxPQUFPLEdBQVcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDN0MsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEVBQUU7Z0JBQ3JDLE9BQU87YUFDVjtTQUNKO1FBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksRUFBRTtZQUMzQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLElBQUksSUFBSSxNQUFNLEVBQUU7WUFDaEIsNkJBQTZCO1lBQzdCLG1DQUFtQztTQUN0QzthQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sRUFBRTtZQUN2QixtQ0FBbUM7WUFDbkMsbUNBQW1DO1NBQ3RDO1FBQ0QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFBO0lBQ3RDLENBQUM7O0lBdkNnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBd0M1QjtJQUFELGVBQUM7Q0F4Q0QsQUF3Q0MsSUFBQTtrQkF4Q29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi9Db2Nvc1pcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NlbmVNZ3Ige1xyXG5cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdDogU2NlbmVNZ3I7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0KCk6IFNjZW5lTWdyIHtcclxuICAgICAgICBpZiAoIVNjZW5lTWdyLl9pbnN0KSB7XHJcbiAgICAgICAgICAgIFNjZW5lTWdyLl9pbnN0ID0gbmV3IFNjZW5lTWdyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBTY2VuZU1nci5faW5zdDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9hY3RpdmVTY2VuZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgX3RpbWVJbnRlcnZhbDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBzY2VuZU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgcHVibGljIGxvYWRTY2VuZShuYW1lOiBzdHJpbmcsIG9uTHVuY2g6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgLy8gY29jb3N6LmdhbWVNZ3IuTnVtID0gMDtcclxuICAgICAgICAvLyBjb2Nvc3ouZ2FtZU1nci5QbGF0Zm9ybU51bSA9IDA7XHJcbiAgICAgICAgY29jb3N6LnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICBpZiAodGhpcy5fYWN0aXZlU2NlbmUgPT0gbmFtZSkge1xyXG4gICAgICAgICAgICBsZXQgY3VyVGltZTogbnVtYmVyID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgaWYgKGN1clRpbWUgLSB0aGlzLl90aW1lSW50ZXJ2YWwgPCAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdGltZUludGVydmFsID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUobmFtZSwgb25MdW5jaCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZVNjZW5lID09IG5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobmFtZSA9PSBcIkhvbWVcIikge1xyXG4gICAgICAgICAgICAvLyBjb2Nvc3ouYXVkaW9NZ3Iuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICAvLyBjb2Nvc3ouYXVkaW9NZ3IucGxheUhvbWVNdXNpYygpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PSBcIkdhbWVcIikge1xyXG4gICAgICAgICAgICAvLyBjb2Nvc3ouYXVkaW9NZ3IucGxheUdhbWVNdXNpYygpO1xyXG4gICAgICAgICAgICAvLyBjb2Nvc3ouYXVkaW9NZ3IucGxheUhvbWVNdXNpYygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9hY3RpdmVTY2VuZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5zY2VuZU5hbWUgPSB0aGlzLl9hY3RpdmVTY2VuZVxyXG4gICAgfVxyXG59XHJcbiJdfQ==