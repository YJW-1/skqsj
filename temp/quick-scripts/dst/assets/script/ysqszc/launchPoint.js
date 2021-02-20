
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ysqszc/launchPoint.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8a47bGbDM5OhY3aDJg3NKY+', 'launchPoint');
// script/ysqszc/launchPoint.ts

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
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isStart = false;
        _this.number = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.unscheduleAllCallbacks();
        }, 24);
    };
    NewClass.prototype.update = function (dt) {
        var _this = this;
        if (this.isStart)
            return;
        if (this.node.parent.getComponent("levelNum").curLevel == 20) {
            // cc.log(this.node.y, "-----------thsi.node.y==300")
            if (this.node.y <= 300) {
                this.isStart = true;
                this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
                this.schedule(function () {
                    var prefab = CocosZ_1.cocosz.resMgr.getRes("stone", cc.Prefab);
                    var node = cc.instantiate(prefab);
                    node.x = Math.random() * 400 - 200;
                    _this.node.addChild(node);
                    var rb = node.getComponent(cc.RigidBody);
                    rb.gravityScale = 1;
                    rb.linearVelocity = cc.v2(0, -200 * Math.random() - 100);
                }, 1);
            }
            return;
        }
        if (this.node.y + this.node.parent.y + this.node.parent.parent.y < 1300) {
            this.isStart = true;
            cc.log(this.node.y);
            this.schedule(function () {
                var prefab = CocosZ_1.cocosz.resMgr.getRes("stone", cc.Prefab);
                var node = cc.instantiate(prefab);
                _this.node.addChild(node);
                var rb = node.getComponent(cc.RigidBody);
                rb.gravityScale = 1;
                cc.log(_this.node.parent.getComponent("levelNum").curLevel);
                rb.linearVelocity = cc.v2(-300 * _this.node.x / Math.abs(_this.node.x), 300);
                if (_this.node.parent.getComponent("levelNum").curLevel == 15) {
                    rb.linearVelocity = cc.v2(-380 * _this.node.x / Math.abs(_this.node.x), -300);
                    // return
                }
            }, 1.5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx5c3FzemNcXGxhdW5jaFBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOztBQUlsRiw4Q0FBNkM7QUFFdkMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQURsRDtRQUFBLHFFQTZEQztRQTFERyxhQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLFlBQU0sR0FBVyxDQUFDLENBQUM7O0lBd0R2QixDQUFDO0lBdERHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUFBLGlCQUlDO1FBSEcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ2xDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUFULGlCQTJDQztRQTFDRyxJQUFJLElBQUksQ0FBQyxPQUFPO1lBQUUsT0FBTztRQUN6QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLElBQUksRUFBRSxFQUFFO1lBQzFELHFEQUFxRDtZQUNyRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRWxFLElBQUksQ0FBQyxRQUFRLENBQUM7b0JB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Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgeyB0aW1lU3RhbXAgfSBmcm9tIFwiY29uc29sZVwiO1xyXG5pbXBvcnQgeyByZXZlcnNlIH0gZnJvbSBcImRuc1wiO1xyXG5pbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBpc1N0YXJ0OiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgbnVtYmVyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgfSwgMjQpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTdGFydCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcImxldmVsTnVtXCIpLmN1ckxldmVsID09IDIwKSB7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLm5vZGUueSwgXCItLS0tLS0tLS0tLXRoc2kubm9kZS55PT0zMDBcIilcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS55IDw9IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1N0YXJ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcInN0b25lXCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBub2RlLnggPSBNYXRoLnJhbmRvbSgpICogNDAwIC0gMjAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJiOiBjYy5SaWdpZEJvZHkgPSBub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJiLmdyYXZpdHlTY2FsZSA9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJiLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgLTIwMCAqIE1hdGgucmFuZG9tKCkgLSAxMDApO1xyXG4gICAgICAgICAgICAgICAgfSwgMSlcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS55ICsgdGhpcy5ub2RlLnBhcmVudC55ICsgdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQueSA8IDEzMDApIHtcclxuICAgICAgICAgICAgdGhpcy5pc1N0YXJ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MubG9nKHRoaXMubm9kZS55KVxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBwcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcInN0b25lXCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmI6IGNjLlJpZ2lkQm9keSA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgICAgICByYi5ncmF2aXR5U2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFwibGV2ZWxOdW1cIikuY3VyTGV2ZWwpXHJcbiAgICAgICAgICAgICAgICByYi5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKC0zMDAgKiB0aGlzLm5vZGUueCAvIE1hdGguYWJzKHRoaXMubm9kZS54KSwgMzAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoXCJsZXZlbE51bVwiKS5jdXJMZXZlbCA9PSAxNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJiLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoLTM4MCAqIHRoaXMubm9kZS54IC8gTWF0aC5hYnModGhpcy5ub2RlLngpLCAtMzAwKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxLjUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==