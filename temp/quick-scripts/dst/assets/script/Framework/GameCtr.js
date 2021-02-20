
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/GameCtr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4c324IjPKZJZIuHbLP+C/UL', 'GameCtr');
// script/Framework/GameCtr.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("./CocosZ");
var Constant_1 = require("./Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameCtr = /** @class */ (function (_super) {
    __extends(GameCtr, _super);
    function GameCtr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gameState = Constant_1.GameState.None;
        return _this;
    }
    GameCtr.prototype.onLoad = function () {
        // cc.director.getPhysicsManager().debugDrawFlags = 1;
        var _this = this;
        var widget = this.node.addComponent(cc.Widget);
        widget.isAlignTop = true;
        widget.isAlignBottom = true;
        widget.isAlignLeft = true;
        widget.isAlignRight = true;
        widget.top = 0;
        widget.bottom = 0;
        widget.left = 0;
        widget.right = 0;
        this.node.width = cc.find("Canvas").width;
        this.node.height = cc.find("Canvas").height;
        cc.game.on(Constant_1.default.E_TOUCH_SCREEN, function () {
            if (_this._gameState == Constant_1.GameState.Prepare || _this._gameState == Constant_1.GameState.Start) {
                _this._handleInput();
            }
        }, this);
        cc.game.on(Constant_1.default.E_MUSIC_STOP, function (tips) {
            console.log("-----------------关闭音乐");
            CocosZ_1.cocosz.audioMgr.stopAll();
        }, this);
    };
    GameCtr.prototype._handleInput = function () { };
    GameCtr = __decorate([
        ccclass
    ], GameCtr);
    return GameCtr;
}(cc.Component));
exports.default = GameCtr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXEdhbWVDdHIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFrQztBQUNsQyx1Q0FBaUQ7QUFFM0MsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQURqRDtRQUFBLHFFQXFDQztRQWpDYSxnQkFBVSxHQUFjLG9CQUFTLENBQUMsSUFBSSxDQUFDOztJQWlDckQsQ0FBQztJQS9CRyx3QkFBTSxHQUFOO1FBQ0ksc0RBQXNEO1FBRDFELGlCQTJCQztRQXhCRyxJQUFJLE1BQU0sR0FBYyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUQsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsTUFBTSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDNUIsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDMUIsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDM0IsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDZixNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNsQixNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNoQixNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVqQixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUU1QyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxrQkFBUSxDQUFDLGNBQWMsRUFBRTtZQUNoQyxJQUFJLEtBQUksQ0FBQyxVQUFVLElBQUksb0JBQVMsQ0FBQyxPQUFPLElBQUksS0FBSSxDQUFDLFVBQVUsSUFBSSxvQkFBUyxDQUFDLEtBQUssRUFBRTtnQkFDNUUsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3ZCO1FBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBR1QsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQVEsQ0FBQyxZQUFZLEVBQUUsVUFBQyxJQUFJO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtZQUNwQyxlQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFUyw4QkFBWSxHQUF0QixjQUEyQixDQUFDO0lBbENYLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FvQzNCO0lBQUQsY0FBQztDQXBDRCxBQW9DQyxDQXBDb0MsRUFBRSxDQUFDLFNBQVMsR0FvQ2hEO2tCQXBDb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuL0NvY29zWlwiO1xyXG5pbXBvcnQgQ29uc3RhbnQsIHsgR2FtZVN0YXRlIH0gZnJvbSBcIi4vQ29uc3RhbnRcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ3RyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIF9nYW1lU3RhdGU6IEdhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5Ob25lO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gMTtcclxuXHJcbiAgICAgICAgbGV0IHdpZGdldDogY2MuV2lkZ2V0ID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5XaWRnZXQpO1xyXG4gICAgICAgIHdpZGdldC5pc0FsaWduVG9wID0gdHJ1ZTtcclxuICAgICAgICB3aWRnZXQuaXNBbGlnbkJvdHRvbSA9IHRydWU7XHJcbiAgICAgICAgd2lkZ2V0LmlzQWxpZ25MZWZ0ID0gdHJ1ZTtcclxuICAgICAgICB3aWRnZXQuaXNBbGlnblJpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICB3aWRnZXQudG9wID0gMDtcclxuICAgICAgICB3aWRnZXQuYm90dG9tID0gMDtcclxuICAgICAgICB3aWRnZXQubGVmdCA9IDA7XHJcbiAgICAgICAgd2lkZ2V0LnJpZ2h0ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLndpZHRoID0gY2MuZmluZChcIkNhbnZhc1wiKS53aWR0aDtcclxuICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gY2MuZmluZChcIkNhbnZhc1wiKS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGNjLmdhbWUub24oQ29uc3RhbnQuRV9UT1VDSF9TQ1JFRU4sICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWVTdGF0ZSA9PSBHYW1lU3RhdGUuUHJlcGFyZSB8fCB0aGlzLl9nYW1lU3RhdGUgPT0gR2FtZVN0YXRlLlN0YXJ0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVJbnB1dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG5cclxuICAgICAgICBjYy5nYW1lLm9uKENvbnN0YW50LkVfTVVTSUNfU1RPUCwgKHRpcHMpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLeWFs+mXremfs+S5kFwiKVxyXG4gICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3Iuc3RvcEFsbCgpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBfaGFuZGxlSW5wdXQoKSB7IH1cclxuXHJcbn1cclxuIl19