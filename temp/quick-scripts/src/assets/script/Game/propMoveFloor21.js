"use strict";
cc._RF.push(module, 'e524fkQ73JJm6RaQyDSlLBK', 'propMoveFloor21');
// script/Game/propMoveFloor21.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var propMoveFloor21 = /** @class */ (function (_super) {
    __extends(propMoveFloor21, _super);
    function propMoveFloor21() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rb = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    propMoveFloor21.prototype.onLoad = function () {
        this.rb = this.node.getComponent(cc.RigidBody);
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 78) {
            this.rb.gravityScale = 0.5;
        }
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 137) {
            this.rb.gravityScale = 0.5;
        }
    };
    propMoveFloor21.prototype.start = function () {
    };
    propMoveFloor21.prototype.update = function (dt) {
    };
    propMoveFloor21 = __decorate([
        ccclass
    ], propMoveFloor21);
    return propMoveFloor21;
}(cc.Component));
exports.default = propMoveFloor21;

cc._RF.pop();