"use strict";
cc._RF.push(module, '3e39aisc1tH7LgRPE+6PuAR', 'sBoard');
// script/ysqszc/sBoard.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (this.node.getComponent(cc.RigidBody).gravityScale == 0) {
            this.node.getComponent(cc.RigidBody).gravityScale = 1;
        }
        if (this.node.getComponent(cc.RigidBody).type == cc.RigidBodyType.Kinematic) {
            CocosZ_1.cocosz.scheduleOnce(function () {
                _this.node.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic;
                if (_this.node.name == "sBoard") {
                    _this.node.getComponent(cc.PhysicsBoxCollider).apply();
                }
            }, 0.02);
        }
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        cc.log(this.node.parent.y, "---------");
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();