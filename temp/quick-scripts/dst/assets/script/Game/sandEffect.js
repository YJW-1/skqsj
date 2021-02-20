
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/sandEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxzYW5kRWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEOztJQTBCQSxDQUFDO0lBdEJHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsMEJBQUssR0FBTDtRQUFBLGlCQWVDO1FBZEcsS0FBa0IsVUFBa0IsRUFBbEIsS0FBQSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtZQUFqQyxJQUFJLEtBQUssU0FBQTtZQUNWLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLDRCQUE0QjtZQUM1QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDaEMsRUFBRSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7WUFDdEIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFO2dCQUNyQixFQUFFLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO2FBQ2xEO1NBQ0o7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDVCxDQUFDO0lBdkJnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBMEI5QjtJQUFELGlCQUFDO0NBMUJELEFBMEJDLENBMUJ1QyxFQUFFLENBQUMsU0FBUyxHQTBCbkQ7a0JBMUJvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzYW5kRWZmZWN0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBsZXQgcmIgPSBjaGlsZC5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgLy8gcmIubGluZWFyVmVsb2NpdHk9Y2MudjIoKVxyXG4gICAgICAgICAgICBsZXQgdiA9IHJiLmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgICAgICB2LnggPSBNYXRoLnJhbmRvbSgpICogNDAwIC0gMjAwO1xyXG4gICAgICAgICAgICByYi5saW5lYXJWZWxvY2l0eSA9IHY7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC40KSB7XHJcbiAgICAgICAgICAgICAgICByYi5hbmd1bGFyVmVsb2NpdHkgPSBNYXRoLnJhbmRvbSgpICogMjAwIC0gMTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfSwgMSlcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==