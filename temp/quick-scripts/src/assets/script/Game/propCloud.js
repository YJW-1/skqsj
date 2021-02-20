"use strict";
cc._RF.push(module, 'a42fbMQoztEdqtxd93ZsPjR', 'propCloud');
// script/Game/propCloud.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sp1 = null;
        _this.sp2 = null;
        _this.sp3 = null;
        _this.pp = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        var _this = this;
        var a = cc.tween().sequence(cc.tween().by(2, { scale: 0.03, position: cc.v2(2, 4) }), cc.tween().by(2, { scale: -0.03, position: cc.v2(-2, -4) }));
        cc.tween(this.sp1)
            .repeatForever(a)
            .start();
        var b = cc.tween().sequence(cc.tween().by(1, { scale: 0.03, position: cc.v2(4, 4) }), cc.tween().by(1, { scale: -0.03, position: cc.v2(-4, -4) }));
        cc.tween(this.sp2)
            .repeatForever(b)
            .start();
        var c = cc.tween().sequence(cc.tween().by(0.8, { scale: 0.03, position: cc.v2(12, 0) }), cc.tween().by(0.8, { scale: -0.03, position: cc.v2(-12, 0) }));
        cc.tween(this.sp3)
            .repeatForever(c)
            .start();
        this.schedule(function () {
            var num = 2;
            while (num-- > 0) {
                var node = cc.instantiate(_this.pp);
                node.zIndex -= 10;
                _this.node.addChild(node);
                node.active = true;
                node.x = Math.random() * 60 - 30;
                // node.getComponent(cc.PhysicsCircleCollider).apply()
            }
        }, 0.25);
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "sp1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "sp2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "sp3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pp", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();