
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ysqszc/nimiCactus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8eca90SzpVNWL80hiyevwUe', 'nimiCactus');
// script/ysqszc/nimiCactus.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var nimiCactus = /** @class */ (function (_super) {
    __extends(nimiCactus, _super);
    function nimiCactus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rb = null;
        return _this;
    }
    nimiCactus.prototype.onBeginContact = function (contact, self, other) {
        // if (other.tag == tag.ball) {
        this.node.getComponent(cc.RigidBody).gravityScale = 1;
        // }
    };
    // LIFE-CYCLE CALLBACKS:
    nimiCactus.prototype.onLoad = function () {
        this.rb = this.node.getComponent(cc.RigidBody);
    };
    nimiCactus.prototype.start = function () {
    };
    nimiCactus.prototype.update = function (dt) {
        var v = this.rb.linearVelocity;
        if (v.y < -300) {
            v.y = -300;
            this.rb.linearVelocity = v;
        }
    };
    nimiCactus = __decorate([
        ccclass
    ], nimiCactus);
    return nimiCactus;
}(cc.Component));
exports.default = nimiCactus;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx5c3FzemNcXG5pbWlDYWN0dXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7O0FBSTVFLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFEcEQ7UUFBQSxxRUE0QkM7UUF6QkcsUUFBRSxHQUFpQixJQUFJLENBQUM7O0lBeUI1QixDQUFDO0lBdkJHLG1DQUFjLEdBQWQsVUFBZSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDL0IsK0JBQStCO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RELElBQUk7SUFDUixDQUFDO0lBRUQsd0JBQXdCO0lBRXhCLDJCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsMEJBQUssR0FBTDtJQUVBLENBQUM7SUFFRCwyQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFBO1FBQzlCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNaLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDWCxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBMUJnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBMkI5QjtJQUFELGlCQUFDO0NBM0JELEFBMkJDLENBM0J1QyxFQUFFLENBQUMsU0FBUyxHQTJCbkQ7a0JBM0JvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHsgdGFnIH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG5pbWlDYWN0dXMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHJiOiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAgICAgLy8gaWYgKG90aGVyLnRhZyA9PSB0YWcuYmFsbCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5ncmF2aXR5U2NhbGUgPSAxO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5yYiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgbGV0IHYgPSB0aGlzLnJiLmxpbmVhclZlbG9jaXR5XHJcbiAgICAgICAgaWYgKHYueSA8IC0zMDApIHtcclxuICAgICAgICAgICAgdi55ID0gLTMwMDtcclxuICAgICAgICAgICAgdGhpcy5yYi5saW5lYXJWZWxvY2l0eSA9IHY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==