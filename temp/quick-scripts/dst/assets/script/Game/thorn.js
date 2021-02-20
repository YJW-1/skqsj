
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/thorn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a43adeh2CFFe5gw/1731VJ4', 'thorn');
// script/Game/thorn.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rb = null;
        return _this;
    }
    NewClass.prototype.onBeginContact = function (contact, other, self) {
        this.node.destroy();
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        // this.rb = this.node.getComponent(cc.RigidBody);
    };
    NewClass.prototype.start = function () {
        // let v = this.rb.linearVelocity;
        // v.x = 400 * this.node.parent.scaleX;
        // this.rb.linearVelocity = v;
        // cc.log(v)
    };
    NewClass.prototype.update = function (dt) {
        var pos = this.node.convertToWorldSpaceAR(this.node.getPosition());
        // cc.log(pos.x, pos.y);
        if ((pos.x < -300 || pos.x > cc.winSize.width * 2) || (pos.y < 0 || pos.y > cc.winSize.height * 2)) {
            this.node.destroy();
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFx0aG9ybi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQURsRDtRQUFBLHFFQStCQztRQTVCRyxRQUFFLEdBQWlCLElBQUksQ0FBQzs7SUE0QjVCLENBQUM7SUF4QkcsaUNBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSTtRQUMvQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLGtEQUFrRDtJQUN0RCxDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUNJLGtDQUFrQztRQUNsQyx1Q0FBdUM7UUFDdkMsOEJBQThCO1FBQzlCLFlBQVk7SUFDaEIsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUE7UUFDbEUsd0JBQXdCO1FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2hHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7U0FDdEI7SUFDTCxDQUFDO0lBN0JnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBOEI1QjtJQUFELGVBQUM7Q0E5QkQsQUE4QkMsQ0E5QnFDLEVBQUUsQ0FBQyxTQUFTLEdBOEJqRDtrQkE5Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICByYjogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuXHJcblxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5yYiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBsZXQgdiA9IHRoaXMucmIubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgLy8gdi54ID0gNDAwICogdGhpcy5ub2RlLnBhcmVudC5zY2FsZVg7XHJcbiAgICAgICAgLy8gdGhpcy5yYi5saW5lYXJWZWxvY2l0eSA9IHY7XHJcbiAgICAgICAgLy8gY2MubG9nKHYpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpXHJcbiAgICAgICAgLy8gY2MubG9nKHBvcy54LCBwb3MueSk7XHJcbiAgICAgICAgaWYgKChwb3MueCA8IC0zMDAgfHwgcG9zLnggPiBjYy53aW5TaXplLndpZHRoICogMikgfHwgKHBvcy55IDwgMCB8fCBwb3MueSA+IGNjLndpblNpemUuaGVpZ2h0ICogMikpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=