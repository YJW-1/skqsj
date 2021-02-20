
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/propRocket2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a1d0bV3D9EyKJKef71wk3d', 'propRocket2');
// script/Game/propRocket2.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var propRocket = /** @class */ (function (_super) {
    __extends(propRocket, _super);
    function propRocket() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDis = false;
        return _this;
    }
    propRocket.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (this.isDis)
            return;
        // cc.log(other.tag)
        if (CocosZ_1.cocosz.sceneMgr.sceneName == "rewardLevel2") {
            if (other.tag == Constant_1.tag.honeybee) {
                // this.scheduleOnce(() => {
                this.node.destroy();
                // }, 0.1)
                // other.node.destroy();
                var prefab = CocosZ_1.cocosz.resMgr.getRes("rocketEffect2", cc.Prefab);
                var node = cc.instantiate(prefab);
                other.node.parent.addChild(node);
                node.setPosition(other.node.getPosition());
            }
            contact.disabled = true;
            return;
        }
        if (other.tag == Constant_1.tag.stone || other.tag == Constant_1.tag.stone3 || other.tag == Constant_1.tag.rocket || other.tag == Constant_1.tag.wooldenBox2 || (other.tag == Constant_1.tag.thorn && CocosZ_1.cocosz.dataMgr.CurLevelId == 104)) {
            this.isDis = true;
            CocosZ_1.cocosz.audioMgr.playRocketEffect2();
            // this.scheduleOnce(() => {
            // }, 0.1)
            this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
            other.node.destroy();
            var prefab = CocosZ_1.cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            var node = cc.instantiate(prefab);
            other.node.parent.addChild(node);
            node.setPosition(other.node.getPosition());
            this.node.destroy();
        }
        else if (other.tag == Constant_1.tag.bat) {
            this.isDis = true;
            CocosZ_1.cocosz.audioMgr.playRocketEffect2();
            this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
            this.scheduleOnce(function () {
                _this.node.destroy();
            }, 0.1);
            other.node.destroy();
            var prefab = CocosZ_1.cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            var node = cc.instantiate(prefab);
            other.node.parent.addChild(node);
            node.setPosition(other.node.getPosition());
        }
        else if (other.tag == Constant_1.tag.thorn) {
            // this.isDis = true;
            // cocosz.audioMgr.playRocketEffect2();
            // this.scheduleOnce(() => {
            //     this.node.destroy();
            // }, 0.1)
            // other.node.destroy();
            // let prefab = cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            // let node = cc.instantiate(prefab);
            // this.node.parent.addChild(node);
            // node.setPosition(this.node.getPosition());
            other.node.destroy();
            contact.disabled = true;
        }
        else if (other.tag == Constant_1.tag.balloon || other.tag == Constant_1.tag.balloon2) {
            if (other.node.parent != "prop") {
                other.node.parent.destroy();
            }
        }
        else if (other.tag == Constant_1.tag.rope) {
            contact.disabled = true;
        }
        else if (other.tag == Constant_1.tag.player) {
            var node = other.node;
            var parent = node.parent;
            contact.disabled = true;
            if (parent.name != "role") {
                parent = parent.parent;
            }
            if (parent.name != "role") {
                parent = parent.parent;
            }
            for (var _i = 0, _a = node.parent.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (child.name == "right_balloon" || child.name == "left_balloon")
                    continue;
                child.color = cc.color(0, 0, 0, 255);
                for (var _b = 0, _c = child.children; _b < _c.length; _b++) {
                    var child2 = _c[_b];
                    child2.color = cc.color(0, 0, 0, 255);
                    if (child.children.length > 0) {
                        for (var _d = 0, _e = child2.children; _d < _e.length; _d++) {
                            var child3 = _e[_d];
                            child3.color = cc.color(0, 0, 0, 255);
                        }
                    }
                }
            }
            var prefab = CocosZ_1.cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            var node2 = cc.instantiate(prefab);
            this.node.parent.addChild(node2);
            // cc.log(this.node.x,this.node.y)
            node2.setPosition(cc.v2(this.node.x, this.node.y));
            this.scheduleOnce(function () {
                _this.node.destroy();
            }, 0.01);
            cc.game.emit(Constant_1.default.E_GAME_FAID);
        }
        else if (other.tag == 0 || other.tag == 7) {
            this.isDis = true;
            CocosZ_1.cocosz.audioMgr.playRocketEffect2();
            this.scheduleOnce(function () {
                _this.node.destroy();
            }, 0.1);
            var prefab = CocosZ_1.cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            var node = cc.instantiate(prefab);
            this.node.parent.addChild(node);
            node.setPosition(this.node.getPosition());
        }
        else if (other.tag == Constant_1.tag.bigFan) {
            this.isDis = true;
            CocosZ_1.cocosz.audioMgr.playRocketEffect2();
            this.scheduleOnce(function () {
                _this.node.destroy();
            }, 0.01);
            var script = other.node.getComponent("propBigFan");
            script.onDamaged();
            var prefab = CocosZ_1.cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            var node = cc.instantiate(prefab);
            other.node.parent.addChild(node);
            node.setPosition(other.node.getPosition());
        }
        else if (other.tag == Constant_1.tag.rocketFloor) {
            // cc.log("--------------------10")
            contact.disabled = true;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    propRocket.prototype.start = function () {
        var _this = this;
        // this.node.on(cc.Node.EventType.TOUCH_START, () => {
        //     cocosz.audioMgr.playRocketEffect1();
        //     let rb = this.node.getComponent(cc.RigidBody);
        //     let v = rb.linearVelocity;
        //     let direction = this.node.parent.angle == 0 ? 1 : -1
        //     v.x = 700 * direction;
        //     rb.linearVelocity = v;
        //     this.node.off(cc.Node.EventType.TOUCH_START);
        // })
        this.scheduleOnce(function () {
            var rb = _this.node.getComponent(cc.RigidBody);
            if (!rb)
                return;
            _this.node.destroy();
        }, 4);
    };
    propRocket.prototype.update = function (dt) {
        // if (cocosz.sceneMgr.sceneName == "rewardLevel2") {
        //     // cc.log(this.node.y)
        //     if (this.node.y > 20) {
        //         cc.log("---------------销毁")
        //         this.node.destroy();
        //     }
        // }
        // if (cocosz.gameMgr.isGameOver) {
        //     this.unscheduleAllCallbacks()
        // }
    };
    propRocket = __decorate([
        ccclass
    ], propRocket);
    return propRocket;
}(cc.Component));
exports.default = propRocket;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxwcm9wUm9ja2V0Mi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQTZDO0FBQzdDLGtEQUFzRDtBQUVoRCxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBRHBEO1FBQUEscUVBMEtDO1FBdktHLFdBQUssR0FBWSxLQUFLLENBQUM7O0lBdUszQixDQUFDO0lBcEtHLG1DQUFjLEdBQWQsVUFBZSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFBbkMsaUJBaUlDO1FBaElHLElBQUksSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFNO1FBQ3RCLG9CQUFvQjtRQUNwQixJQUFJLGVBQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLGNBQWMsRUFBRTtZQUM3QyxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksY0FBRyxDQUFDLFFBQVEsRUFBRTtnQkFFM0IsNEJBQTRCO2dCQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNwQixVQUFVO2dCQUNWLHdCQUF3QjtnQkFDeEIsSUFBSSxNQUFNLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDOUQsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQzthQUM5QztZQUVELE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLE9BQU87U0FDVjtRQUNELElBQUksS0FBSyxDQUFDLEdBQUcsSUFB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QyxFQUFFLENBQUMsU0FBUyxHQXlLbkQ7a0JBektvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuaW1wb3J0IENvbnN0YW50LCB7IHRhZyB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uc3RhbnRcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwcm9wUm9ja2V0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBpc0RpczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGlzKSByZXR1cm5cclxuICAgICAgICAvLyBjYy5sb2cob3RoZXIudGFnKVxyXG4gICAgICAgIGlmIChjb2Nvc3ouc2NlbmVNZ3Iuc2NlbmVOYW1lID09IFwicmV3YXJkTGV2ZWwyXCIpIHtcclxuICAgICAgICAgICAgaWYgKG90aGVyLnRhZyA9PSB0YWcuaG9uZXliZWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gfSwgMC4xKVxyXG4gICAgICAgICAgICAgICAgLy8gb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJyb2NrZXRFZmZlY3QyXCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBvdGhlci5ub2RlLnBhcmVudC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24ob3RoZXIubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29udGFjdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSB0YWcuc3RvbmUgfHwgb3RoZXIudGFnID09IHRhZy5zdG9uZTMgfHwgb3RoZXIudGFnID09IHRhZy5yb2NrZXQgfHwgb3RoZXIudGFnID09IHRhZy53b29sZGVuQm94MiB8fCAob3RoZXIudGFnID09IHRhZy50aG9ybiAmJiBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDEwNCkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0RpcyA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5Um9ja2V0RWZmZWN0MigpO1xyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB9LCAwLjEpXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgICAgICBvdGhlci5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwicm9ja2V0RWZmZWN0XCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgb3RoZXIubm9kZS5wYXJlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24ob3RoZXIubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAob3RoZXIudGFnID09IHRhZy5iYXQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0RpcyA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5Um9ja2V0RWZmZWN0MigpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSwgMC4xKVxyXG4gICAgICAgICAgICBvdGhlci5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwicm9ja2V0RWZmZWN0XCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgb3RoZXIubm9kZS5wYXJlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24ob3RoZXIubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAob3RoZXIudGFnID09IHRhZy50aG9ybikge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmlzRGlzID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gY29jb3N6LmF1ZGlvTWdyLnBsYXlSb2NrZXRFZmZlY3QyKCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIC8vIH0sIDAuMSlcclxuICAgICAgICAgICAgLy8gb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIC8vIGxldCBwcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcInJvY2tldEVmZmVjdFwiLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgICAgICAvLyBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIC8vIG5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICBvdGhlci5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgY29udGFjdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG90aGVyLnRhZyA9PSB0YWcuYmFsbG9vbiB8fCBvdGhlci50YWcgPT0gdGFnLmJhbGxvb24yKSB7XHJcbiAgICAgICAgICAgIGlmIChvdGhlci5ub2RlLnBhcmVudCAhPSBcInByb3BcIikge1xyXG4gICAgICAgICAgICAgICAgb3RoZXIubm9kZS5wYXJlbnQuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAob3RoZXIudGFnID09IHRhZy5yb3BlKSB7XHJcbiAgICAgICAgICAgIGNvbnRhY3QuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChvdGhlci50YWcgPT0gdGFnLnBsYXllcikge1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IG90aGVyLm5vZGU7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSBub2RlLnBhcmVudDtcclxuICAgICAgICAgICAgY29udGFjdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnQubmFtZSAhPSBcInJvbGVcIikge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocGFyZW50Lm5hbWUgIT0gXCJyb2xlXCIpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2Ygbm9kZS5wYXJlbnQuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5uYW1lID09IFwicmlnaHRfYmFsbG9vblwiIHx8IGNoaWxkLm5hbWUgPT0gXCJsZWZ0X2JhbGxvb25cIikgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5jb2xvciA9IGNjLmNvbG9yKDAsIDAsIDAsIDI1NSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZDIgb2YgY2hpbGQuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZDIuY29sb3IgPSBjYy5jb2xvcigwLCAwLCAwLCAyNTUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkMyBvZiBjaGlsZDIuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkMy5jb2xvciA9IGNjLmNvbG9yKDAsIDAsIDAsIDI1NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwicm9ja2V0RWZmZWN0XCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgIGxldCBub2RlMiA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQobm9kZTIpO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2codGhpcy5ub2RlLngsdGhpcy5ub2RlLnkpXHJcbiAgICAgICAgICAgIG5vZGUyLnNldFBvc2l0aW9uKGNjLnYyKHRoaXMubm9kZS54LCB0aGlzLm5vZGUueSkpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9LCAwLjAxKVxyXG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9HQU1FX0ZBSUQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG90aGVyLnRhZyA9PSAwIHx8IG90aGVyLnRhZyA9PSA3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEaXMgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheVJvY2tldEVmZmVjdDIoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSwgMC4xKVxyXG4gICAgICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJyb2NrZXRFZmZlY3RcIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAob3RoZXIudGFnID09IHRhZy5iaWdGYW4pIHtcclxuICAgICAgICAgICAgdGhpcy5pc0RpcyA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5Um9ja2V0RWZmZWN0MigpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9LCAwLjAxKVxyXG4gICAgICAgICAgICBsZXQgc2NyaXB0ID0gb3RoZXIubm9kZS5nZXRDb21wb25lbnQoXCJwcm9wQmlnRmFuXCIpO1xyXG4gICAgICAgICAgICBzY3JpcHQub25EYW1hZ2VkKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJyb2NrZXRFZmZlY3RcIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICBvdGhlci5ub2RlLnBhcmVudC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihvdGhlci5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChvdGhlci50YWcgPT0gdGFnLnJvY2tldEZsb29yKSB7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tMTBcIilcclxuICAgICAgICAgICAgY29udGFjdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheVJvY2tldEVmZmVjdDEoKTtcclxuICAgICAgICAvLyAgICAgbGV0IHJiID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIC8vICAgICBsZXQgdiA9IHJiLmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgIC8vICAgICBsZXQgZGlyZWN0aW9uID0gdGhpcy5ub2RlLnBhcmVudC5hbmdsZSA9PSAwID8gMSA6IC0xXHJcbiAgICAgICAgLy8gICAgIHYueCA9IDcwMCAqIGRpcmVjdGlvbjtcclxuICAgICAgICAvLyAgICAgcmIubGluZWFyVmVsb2NpdHkgPSB2O1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJUKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJiID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICBpZiAoIXJiKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KClcclxuICAgICAgICB9LCA0KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vIGlmIChjb2Nvc3ouc2NlbmVNZ3Iuc2NlbmVOYW1lID09IFwicmV3YXJkTGV2ZWwyXCIpIHtcclxuICAgICAgICAvLyAgICAgLy8gY2MubG9nKHRoaXMubm9kZS55KVxyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5ub2RlLnkgPiAyMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgY2MubG9nKFwiLS0tLS0tLS0tLS0tLS0t6ZSA5q+BXCIpXHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmIChjb2Nvc3ouZ2FtZU1nci5pc0dhbWVPdmVyKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==