"use strict";
cc._RF.push(module, '785b3mkgW5FhJt3csMxQfm4', 'propMoveFloor14');
// script/Game/propMoveFloor14.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var propMoveFloor = /** @class */ (function (_super) {
    __extends(propMoveFloor, _super);
    function propMoveFloor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn = null;
        _this.floor1 = null;
        _this.floor2 = null;
        _this.isFirst = false;
        return _this;
    }
    propMoveFloor.prototype.onBeginContact = function (contact, self, other) {
        if (this.isFirst)
            return;
        if (other.tag == Constant_1.tag.thorn) {
            this.isFirst = true;
            contact.disabled = true;
            cc.tween(this.floor1)
                .to(1, { position: cc.v2(181, -78.5) })
                .start();
            cc.tween(this.floor2)
                .to(1, { position: cc.v2(-121, -78.5) })
                .start();
            cc.tween(this.btn)
                .to(0.1, { position: cc.v2(-325, 98) })
                .start();
            cc.log(this.floor1, this.floor2);
        }
    };
    // LIFE-CYCLE CALLBACKS:
    propMoveFloor.prototype.onLoad = function () {
        this.btn = this.node.getChildByName("btn").getChildByName("btn1");
        this.floor1 = this.node.getChildByName("sp").getChildByName("floor1");
        this.floor2 = this.node.getChildByName("sp").getChildByName("floor2");
    };
    propMoveFloor.prototype.start = function () {
    };
    propMoveFloor.prototype.update = function (dt) {
    };
    propMoveFloor = __decorate([
        ccclass
    ], propMoveFloor);
    return propMoveFloor;
}(cc.Component));
exports.default = propMoveFloor;

cc._RF.pop();