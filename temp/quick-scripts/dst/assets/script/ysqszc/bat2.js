
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ysqszc/bat2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1c44wn+fBEHqdq6pDfr5NR', 'bat2');
// script/ysqszc/bat2.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var bat = /** @class */ (function (_super) {
    __extends(bat, _super);
    function bat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rb = null;
        _this.action = null;
        _this.startPos = null;
        _this.isStart = false;
        _this.isTwo = false;
        _this.isRight = false;
        _this.isFirst = false;
        return _this;
    }
    bat.prototype.onBeginContact = function (contact, self, other) {
        if (this.node.getComponent(cc.RigidBody).gravityScale == 0) {
            this.node.getComponent(cc.RigidBody).gravityScale = 1;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    bat.prototype.onLoad = function () {
        this.rb = this.node.getComponent(cc.RigidBody);
    };
    bat.prototype.start = function () {
        // this.rb.linearVelocity = cc.v2(0, -200)
        // let a = cc.tween().sequence(
        //     cc.tween().by(1, { position: cc.v2(0, 15) }),
        //     cc.tween().by(1, { position: cc.v2(0, -15) })
        // )
        // this.action = cc.tween(this.node)
        //     .repeatForever(a)
        //     .start()
        var b = cc.tween().sequence(cc.tween().by(0.1, { angle: 30 }), cc.tween().by(0.1, { angle: -30 }));
        cc.tween(this.node.getChildByName("bat_wing1"))
            .repeatForever(b)
            .start();
        var c = cc.tween().sequence(cc.tween().by(0.1, { angle: -30 }), cc.tween().by(0.1, { angle: 30 }));
        cc.tween(this.node.getChildByName("bat_wing2"))
            .repeatForever(c)
            .start();
    };
    bat.prototype.update = function (dt) {
        var _this = this;
        // this.rb.linearVelocity = cc.v2(0, -200)
        // cc.log(this.node.y)
        if (this.node.y < -100 && !this.isStart) {
            this.isStart = true;
            // this.rb.linearVelocity = cc.v2(0, -500);
            // if(this.node.parent.getComponent("levelNum").curLevel)
            // this.scheduleOnce(() => {
            // }, 1)
            cc.log(this.node.x);
            if (Math.floor(this.node.x) % 300 == 0 && this.node.parent.getComponent("levelNum").curLevel == 18) {
                this.scheduleOnce(function () {
                    _this.rb.linearVelocity = cc.v2(-100 * _this.node.x / Math.abs(_this.node.x), -500);
                }, 1);
            }
            else {
                this.rb.linearVelocity = cc.v2(0, -500);
            }
        }
    };
    bat = __decorate([
        ccclass
    ], bat);
    return bat;
}(cc.Component));
exports.default = bat;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx5c3FzemNcXGJhdDIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUtNLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBaUMsdUJBQVk7SUFEN0M7UUFBQSxxRUEwRkM7UUF2RkcsUUFBRSxHQUFpQixJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFRLElBQUksQ0FBQTtRQUNsQixjQUFRLEdBQVEsSUFBSSxDQUFBO1FBRXBCLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUV2QixhQUFPLEdBQVksS0FBSyxDQUFBO1FBRXhCLGFBQU8sR0FBWSxLQUFLLENBQUM7O0lBNEU3QixDQUFDO0lBeEVHLDRCQUFjLEdBQWQsVUFBZSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDL0IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsRUFBRTtZQUN4RCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztTQUV6RDtJQUNMLENBQUM7SUFFRCx3QkFBd0I7SUFFeEIsb0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxtQkFBSyxHQUFMO1FBQ0ksMENBQTBDO1FBRTFDLCtCQUErQjtRQUMvQixvREFBb0Q7UUFDcEQsb0RBQW9EO1FBQ3BELElBQUk7UUFFSixvQ0FBb0M7UUFDcEMsd0JBQXdCO1FBQ3hCLGVBQWU7UUFJZixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUN2QixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUNqQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQ3JDLENBQUE7UUFHRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7YUFDaEIsS0FBSyxFQUFFLENBQUE7UUFFWixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUN2QixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQ2xDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQ3BDLENBQUE7UUFHRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7YUFDaEIsS0FBSyxFQUFFLENBQUE7SUFDaEIsQ0FBQztJQUVELG9CQUFNLEdBQU4sVUFBTyxFQUFFO1FBQVQsaUJBdUJDO1FBdEJHLDBDQUEwQztRQUMxQyxzQkFBc0I7UUFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFFcEIsMkNBQTJDO1lBRTNDLHlEQUF5RDtZQUN6RCw0QkFBNEI7WUFDNUIsUUFBUTtZQUVSLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLElBQUksRUFBRSxFQUFFO2dCQUNoRyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNkLEtBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JGLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTthQUNSO2lCQUNJO2dCQUNELElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7YUFFM0M7U0FDSjtJQUNMLENBQUM7SUF4RmdCLEdBQUc7UUFEdkIsT0FBTztPQUNhLEdBQUcsQ0F5RnZCO0lBQUQsVUFBQztDQXpGRCxBQXlGQyxDQXpGZ0MsRUFBRSxDQUFDLFNBQVMsR0F5RjVDO2tCQXpGb0IsR0FBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRpbWVTdGFtcCB9IGZyb20gXCJjb25zb2xlXCI7XHJcbmltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29jb3NaXCI7XHJcbmltcG9ydCB7IHRhZyB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uc3RhbnRcIjtcclxuaW1wb3J0IGxldmVsTnVtIGZyb20gXCIuL2xldmVsTnVtXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgYmF0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICByYjogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuXHJcbiAgICBhY3Rpb246IGFueSA9IG51bGxcclxuICAgIHN0YXJ0UG9zOiBhbnkgPSBudWxsXHJcblxyXG4gICAgaXNTdGFydDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGlzVHdvOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgaXNSaWdodDogYm9vbGVhbiA9IGZhbHNlXHJcblxyXG4gICAgaXNGaXJzdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmdyYXZpdHlTY2FsZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5ncmF2aXR5U2NhbGUgPSAxO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucmIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5yYi5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIC0yMDApXHJcblxyXG4gICAgICAgIC8vIGxldCBhID0gY2MudHdlZW4oKS5zZXF1ZW5jZShcclxuICAgICAgICAvLyAgICAgY2MudHdlZW4oKS5ieSgxLCB7IHBvc2l0aW9uOiBjYy52MigwLCAxNSkgfSksXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkuYnkoMSwgeyBwb3NpdGlvbjogY2MudjIoMCwgLTE1KSB9KVxyXG4gICAgICAgIC8vIClcclxuXHJcbiAgICAgICAgLy8gdGhpcy5hY3Rpb24gPSBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgLy8gICAgIC5yZXBlYXRGb3JldmVyKGEpXHJcbiAgICAgICAgLy8gICAgIC5zdGFydCgpXHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IGIgPSBjYy50d2VlbigpLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICBjYy50d2VlbigpLmJ5KDAuMSwgeyBhbmdsZTogMzAgfSksXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKCkuYnkoMC4xLCB7IGFuZ2xlOiAtMzAgfSlcclxuICAgICAgICApXHJcblxyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiYXRfd2luZzFcIikpXHJcbiAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKGIpXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcblxyXG4gICAgICAgIGxldCBjID0gY2MudHdlZW4oKS5zZXF1ZW5jZShcclxuICAgICAgICAgICAgY2MudHdlZW4oKS5ieSgwLjEsIHsgYW5nbGU6IC0zMCB9KSxcclxuICAgICAgICAgICAgY2MudHdlZW4oKS5ieSgwLjEsIHsgYW5nbGU6IDMwIH0pXHJcbiAgICAgICAgKVxyXG5cclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmF0X3dpbmcyXCIpKVxyXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihjKVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAtMjAwKVxyXG4gICAgICAgIC8vIGNjLmxvZyh0aGlzLm5vZGUueSlcclxuICAgICAgICBpZiAodGhpcy5ub2RlLnkgPCAtMTAwICYmICF0aGlzLmlzU3RhcnQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1N0YXJ0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAtNTAwKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmKHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFwibGV2ZWxOdW1cIikuY3VyTGV2ZWwpXHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gfSwgMSlcclxuXHJcbiAgICAgICAgICAgIGNjLmxvZyh0aGlzLm5vZGUueCk7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLmZsb29yKHRoaXMubm9kZS54KSAlIDMwMCA9PSAwICYmIHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFwibGV2ZWxOdW1cIikuY3VyTGV2ZWwgPT0gMTgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoLTEwMCAqIHRoaXMubm9kZS54IC8gTWF0aC5hYnModGhpcy5ub2RlLngpLCAtNTAwKTtcclxuICAgICAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgLTUwMCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==