"use strict";
cc._RF.push(module, '9cc76oPqN1OuYBQft3yjhK2', 'stone');
// script/Game/stone.ts

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
        var _this = this;
        if (CocosZ_1.cocosz.sceneMgr.sceneName == "Game2") {
            this.rb.gravityScale = 0.5;
        }
        if (other.tag == Constant_1.tag.bigFan) {
            if (this.isDes)
                return;
            this.isDes = true;
            this.scheduleOnce(function () {
                _this.node.destroy();
            }, 0.05);
        }
    };
    stone.prototype.onLoad = function () {
        this.rb = this.node.getComponent(cc.RigidBody);
    };
    stone.prototype.start = function () {
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 55 || CocosZ_1.cocosz.dataMgr.CurLevelId == 136) {
            this.rb.gravityScale = 9;
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 42) {
            this.rb.gravityScale = 5;
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 35 || CocosZ_1.cocosz.dataMgr.CurLevelId == 124) {
            this.rb.gravityScale = 5;
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 11) {
            this.rb.gravityScale = 8;
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 94) {
            this.rb.gravityScale = 1;
        }
        // else if (cocosz.dataMgr.CurLevelId == 80) {
        //     this.rb.gravityScale = 0.3;
        // }
    };
    stone.prototype.update = function (dt) {
        var v = this.rb.linearVelocity;
        if (this.node.parent.name != "levelMgr" || this.node.parent.getComponent("levelNum").curLevel == 13)
            return;
        if (v.y <= -500) {
            this.rb.linearVelocity = cc.v2(0, -500);
        }
    };
    stone = __decorate([
        ccclass
    ], stone);
    return stone;
}(cc.Component));
exports.default = stone;

cc._RF.pop();