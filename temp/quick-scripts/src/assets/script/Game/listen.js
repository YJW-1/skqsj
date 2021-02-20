"use strict";
cc._RF.push(module, '11eb7pFQQNKoqWglsKvL8Fw', 'listen');
// script/Game/listen.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.onCollisionEnter = function (other, self) {
        cc.game.emit(Constant_1.default.E_ROLE_COLLISIONENTER, other, self);
    };
    // onBeginContact(contact, self, other) {
    //     cc.game.emit(Constant.E_ROLE_CONTACTENTER, contact, self, other);
    // }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();