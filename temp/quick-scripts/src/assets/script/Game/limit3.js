"use strict";
cc._RF.push(module, 'd1431mCQeNKs4jMVZwI6b3P', 'limit3');
// script/Game/limit3.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var limit = /** @class */ (function (_super) {
    __extends(limit, _super);
    function limit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.num = 0;
        _this.label = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    limit.prototype.onLoad = function () {
        this.label = this.node.getChildByName("num").getComponent(cc.Label);
    };
    limit.prototype.start = function () {
        if (this.node.name == "limit3") {
            this.num = 20;
        }
        else if (this.node.name == "limit4") {
            this.num = 100;
        }
    };
    limit.prototype.update = function (dt) {
        if (this.num > 0) {
            // cc.log(this.label);
            this.label.string = Math.ceil(this.num).toString();
            this.num -= dt;
            if (this.num <= 0) {
                this.label.string = "0";
                var floor = this.node.parent.getChildByName("floor5");
                if (floor) {
                    cc.tween(floor)
                        .by(0.5, { position: cc.v2(-130, 0) })
                        .start();
                    return;
                }
                floor = this.node.parent.getChildByName("floor22");
                if (floor) {
                    cc.tween(floor)
                        .by(0.5, { position: cc.v2(-130, 0) })
                        .start();
                    return;
                }
            }
        }
    };
    limit = __decorate([
        ccclass
    ], limit);
    return limit;
}(cc.Component));
exports.default = limit;

cc._RF.pop();