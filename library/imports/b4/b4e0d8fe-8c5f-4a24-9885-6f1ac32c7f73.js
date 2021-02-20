"use strict";
cc._RF.push(module, 'b4e0dj+jF9KJJiFbxrDLH9z', 'stone2');
// script/ysqszc/stone2.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var stone = /** @class */ (function (_super) {
    __extends(stone, _super);
    function stone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rb = null;
        _this.isDes = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    stone.prototype.onDestroy = function () {
        cc.log("------------stone被销毁");
    };
    stone.prototype.onBeginContact = function (contact, self, other) {
        if (CocosZ_1.cocosz.sceneMgr.sceneName == "Game2") {
            this.rb.gravityScale = 0.5;
        }
    };
    stone.prototype.onLoad = function () {
        this.rb = this.node.getComponent(cc.RigidBody);
    };
    stone.prototype.start = function () {
    };
    stone.prototype.update = function (dt) {
        if (CocosZ_1.cocosz.gameMgr.isGameOver)
            return;
        var pos = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
        if ((pos.x < 0 || pos.x > cc.winSize.width) || (pos.y < 0 || pos.y > cc.winSize.height)) {
            this.node.destroy();
            cc.game.emit(Constant_1.default.E_GAME_START);
        }
    };
    stone = __decorate([
        ccclass
    ], stone);
    return stone;
}(cc.Component));
exports.default = stone;

cc._RF.pop();