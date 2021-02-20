"use strict";
cc._RF.push(module, '3827dE6V/5IqbaasK4OhI4v', 'sandEffect');
// script/Game/sandEffect.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var sandEffect = /** @class */ (function (_super) {
    __extends(sandEffect, _super);
    function sandEffect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    sandEffect.prototype.start = function () {
        var _this = this;
        for (var _i = 0, _a = this.node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            var rb = child.getComponent(cc.RigidBody);
            // rb.linearVelocity=cc.v2()
            var v = rb.linearVelocity;
            v.x = Math.random() * 400 - 200;
            rb.linearVelocity = v;
            if (Math.random() > 0.4) {
                rb.angularVelocity = Math.random() * 200 - 100;
            }
        }
        this.scheduleOnce(function () {
            _this.node.destroy();
        }, 1);
    };
    sandEffect = __decorate([
        ccclass
    ], sandEffect);
    return sandEffect;
}(cc.Component));
exports.default = sandEffect;

cc._RF.pop();