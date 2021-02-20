"use strict";
cc._RF.push(module, '4caefW3dnRIo7Gw7Klc9X5+', 'tt');
// script/ysqszc/tt.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.a = null;
        _this.istrue = false;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        cc.log(other.sensor);
        if (this.istrue)
            return;
        this.a = other;
        this.istrue = true;
        this.scheduleOnce(function () {
            // this.a = other.node.getComponent(cc.RigidBody);
            // let v = this.a.linearVelocity;
            // v.y = 10;
            // this.a.linearVelocity = v;
            // cc.tween(other.node)
            //     .by(1,{position:cc.v2(0,-100)})
            //     .start()
            other.sensor = true;
            other.apply();
            _this.scheduleOnce(function () {
                other.sensor = false;
                other.apply();
            }, 1);
        }, 1);
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        // this.a = this.node.getComponent(cc.PhysicsBoxCollider);
    };
    NewClass.prototype.start = function () {
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();