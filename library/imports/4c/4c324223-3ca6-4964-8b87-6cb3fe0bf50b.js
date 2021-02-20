"use strict";
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