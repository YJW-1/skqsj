"use strict";
cc._RF.push(module, 'ac6acjneXZCc556wpxq4Ogv', 'propChainRocket');
// script/Game/propChainRocket.ts

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
        _this.switch = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        var _this = this;
        this.switch.on(cc.Node.EventType.TOUCH_END, function () {
            _this.switch.off(cc.Node.EventType.TOUCH_END);
            for (var _i = 0, _a = _this.node.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (child.name == "rocket") {
                    var rb = child.addComponent(cc.RigidBody);
                    rb.enabledContactListener = true;
                    rb.type = cc.RigidBodyType.Kinematic;
                    var boxPhy = child.addComponent(cc.PhysicsBoxCollider);
                    boxPhy.tag = 31;
                    boxPhy.size.width = 60;
                    boxPhy.size.height = 30;
                    boxPhy.apply();
                    var v = rb.linearVelocity;
                    v.x = 1000 * -1;
                    if (_this.node.name == "chainRocket2") {
                        v.x = 500;
                    }
                    rb.linearVelocity = v;
                }
            }
        });
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "switch", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();