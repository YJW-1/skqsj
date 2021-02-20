"use strict";
cc._RF.push(module, '565fdRo1N9Kg4acwIGwexbK', 'rain');
// script/Game/rain.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var rain = /** @class */ (function (_super) {
    __extends(rain, _super);
    function rain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDes = false;
        return _this;
    }
    rain.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (this.isDes)
            return;
        this.isDes = true;
        cc.tween(this.node)
            .to(1, { scale: 0.75, opacity: 0 })
            .call(function () {
            _this.node.destroy();
        })
            .start();
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    rain.prototype.start = function () {
    };
    rain.prototype.update = function (dt) {
        if (this.node.y <= -1000) {
            this.node.destroy();
        }
    };
    rain = __decorate([
        ccclass
    ], rain);
    return rain;
}(cc.Component));
exports.default = rain;

cc._RF.pop();