
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/listen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxsaXN0ZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUE2QztBQUd2QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEOztJQWtCQSxDQUFDO0lBaEJHLG1DQUFnQixHQUFoQixVQUFpQixLQUFLLEVBQUUsSUFBSTtRQUN4QixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBUSxDQUFDLHFCQUFxQixFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBQ0QseUNBQXlDO0lBQ3pDLHdFQUF3RTtJQUN4RSxJQUFJO0lBRUosd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO0lBRUEsQ0FBQztJQWZnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBa0I1QjtJQUFELGVBQUM7Q0FsQkQsQUFrQkMsQ0FsQnFDLEVBQUUsQ0FBQyxTQUFTLEdBa0JqRDtrQkFsQm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29uc3RhbnQgZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xyXG4gICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX1JPTEVfQ09MTElTSU9ORU5URVIsIG90aGVyLCBzZWxmKTtcclxuICAgIH1cclxuICAgIC8vIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAvLyAgICAgY2MuZ2FtZS5lbWl0KENvbnN0YW50LkVfUk9MRV9DT05UQUNURU5URVIsIGNvbnRhY3QsIHNlbGYsIG90aGVyKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=