
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/propRocket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f763MZnOxMW4Lfe5V+Be8E', 'propRocket');
// script/Game/propRocket.ts

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
        // update (dt) {}
    }
    propRocket.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (this.isDis)
            return;
        if (this.isDis)
            return;
        cc.log(other.tag);
        if (other.tag == Constant_1.tag.stone || other.tag == Constant_1.tag.stone3 || other.tag == Constant_1.tag.rocket) {
            this.isDis = true;
            CocosZ_1.cocosz.audioMgr.playRocketEffect2();
            this.scheduleOnce(function () {
                _this.node.destroy();
            }, 0.1);
            other.node.destroy();
            var prefab = CocosZ_1.cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            var node = cc.instantiate(prefab);
            other.node.parent.addChild(node);
            node.setPosition(other.node.getPosition());
        }
        else if (other.tag == Constant_1.tag.bat || other.tag == 81) {
            this.isDis = true;
            CocosZ_1.cocosz.audioMgr.playRocketEffect2();
            this.scheduleOnce(function () {
                _this.node.destroy();
            }, 0.1);
            other.node.destroy();
            var prefab = CocosZ_1.cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            var node = cc.instantiate(prefab);
            other.node.parent.addChild(node);
            node.setPosition(other.node.getPosition());
        }
        else if (other.tag == Constant_1.tag.player) {
            var node = other.node;
            var parent = node.parent;
            contact.disabled = true;
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
            node.setPosition(this.node.getPosition());
            this.node.destroy();
            cc.game.emit(Constant_1.default.E_GAME_FAID);
        }
        // else if (other.tag == tag.thorn) {
        //     this.isDis = true;
        //     cocosz.audioMgr.playRocketEffect2();
        //     this.scheduleOnce(() => {
        //         this.node.destroy();
        //     }, 0.1)
        //     other.node.destroy();
        //     let prefab = cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
        //     let node = cc.instantiate(prefab);
        //     this.node.parent.addChild(node);
        //     node.setPosition(this.node.getPosition());
        // }
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
            cc.log("--------------------10");
            contact.disabled = true;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    propRocket.prototype.start = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            CocosZ_1.cocosz.audioMgr.playRocketEffect1();
            var rb = _this.node.getComponent(cc.RigidBody);
            var v = rb.linearVelocity;
            if (_this.node.parent.angle == 0 || _this.node.parent.angle == 180) {
                var direction = _this.node.parent.angle == 0 ? 1 : -1;
                v.x = 1000 * direction;
                rb.linearVelocity = v;
            }
            else if (_this.node.parent.angle == 90 || _this.node.parent.angle == 270) {
                var direction = _this.node.parent.angle == 90 ? 1 : -1;
                v.y = 500 * direction;
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 93) {
                    v.y += 500 * direction;
                }
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 54 || CocosZ_1.cocosz.dataMgr.CurLevelId == 133) {
                    v.y -= 400 * direction;
                }
                rb.linearVelocity = v;
            }
            _this.node.off(cc.Node.EventType.TOUCH_START);
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxwcm9wUm9ja2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBNkM7QUFDN0Msa0RBQXNEO0FBRWhELElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFEcEQ7UUFBQSxxRUF3SUM7UUFySUcsV0FBSyxHQUFZLEtBQUssQ0FBQzs7UUFvSXZCLGlCQUFpQjtJQUNyQixDQUFDO0lBbElHLG1DQUFjLEdBQWQsVUFBZSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFBbkMsaUJBaUdDO1FBaEdHLElBQUksSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFNO1FBQ3RCLElBQUksSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFNO1FBQ3RCLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2pCLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxjQUFHLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksY0FBRyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLGNBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDOUUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsZUFBTSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDUCxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JCLElBQUksTUFBTSxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0QsSUFBSSxJQUFJLEdBQUcs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LE9BQU8sQ0FBQyxVQUFVLElBQUksRUFBRSxJQUFFLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEdBQUcsRUFBRTtvQkFDbkUsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDO2lCQUMxQjtnQkFDRCxFQUFFLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQzthQUN6QjtZQUNELEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQXBJZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXVJOUI7SUFBRCxpQkFBQztDQXZJRCxBQXVJQyxDQXZJdUMsRUFBRSxDQUFDLFNBQVMsR0F1SW5EO2tCQXZJb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29jb3NaXCI7XHJcbmltcG9ydCBDb25zdGFudCwgeyB0YWcgfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvbnN0YW50XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJvcFJvY2tldCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgaXNEaXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0RpcykgcmV0dXJuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNEaXMpIHJldHVyblxyXG4gICAgICAgIGNjLmxvZyhvdGhlci50YWcpXHJcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSB0YWcuc3RvbmUgfHwgb3RoZXIudGFnID09IHRhZy5zdG9uZTMgfHwgb3RoZXIudGFnID09IHRhZy5yb2NrZXQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0RpcyA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5Um9ja2V0RWZmZWN0MigpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9LCAwLjEpXHJcbiAgICAgICAgICAgIG90aGVyLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJyb2NrZXRFZmZlY3RcIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICBvdGhlci5ub2RlLnBhcmVudC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihvdGhlci5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChvdGhlci50YWcgPT0gdGFnLmJhdCB8fCBvdGhlci50YWcgPT0gODEpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0RpcyA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5Um9ja2V0RWZmZWN0MigpO1xyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9LCAwLjEpXHJcbiAgICAgICAgICAgIG90aGVyLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJyb2NrZXRFZmZlY3RcIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICBvdGhlci5ub2RlLnBhcmVudC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihvdGhlci5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGVsc2UgaWYgKG90aGVyLnRhZyA9PSB0YWcucGxheWVyKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gb3RoZXIubm9kZTtcclxuICAgICAgICAgICAgbGV0IHBhcmVudCA9IG5vZGUucGFyZW50O1xyXG4gICAgICAgICAgICBjb250YWN0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHBhcmVudC5uYW1lICE9IFwicm9sZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIG5vZGUucGFyZW50LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQubmFtZSA9PSBcInJpZ2h0X2JhbGxvb25cIiB8fCBjaGlsZC5uYW1lID09IFwibGVmdF9iYWxsb29uXCIpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQuY29sb3IgPSBjYy5jb2xvcigwLCAwLCAwLCAyNTUpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQyIG9mIGNoaWxkLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQyLmNvbG9yID0gY2MuY29sb3IoMCwgMCwgMCwgMjU1KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZDMgb2YgY2hpbGQyLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZDMuY29sb3IgPSBjYy5jb2xvcigwLCAwLCAwLCAyNTUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcInJvY2tldEVmZmVjdFwiLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZTIgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKG5vZGUyKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX0dBTUVfRkFJRClcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZWxzZSBpZiAob3RoZXIudGFnID09IHRhZy50aG9ybikge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmlzRGlzID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlSb2NrZXRFZmZlY3QyKCk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgLy8gICAgIH0sIDAuMSlcclxuICAgICAgICAvLyAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgLy8gICAgIGxldCBwcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcInJvY2tldEVmZmVjdFwiLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgIC8vICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgLy8gICAgIG5vZGUuc2V0UG9zaXRpb24odGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBlbHNlIGlmIChvdGhlci50YWcgPT0gMCB8fCBvdGhlci50YWcgPT0gNykge1xyXG4gICAgICAgICAgICB0aGlzLmlzRGlzID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlSb2NrZXRFZmZlY3QyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0sIDAuMSlcclxuICAgICAgICAgICAgbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwicm9ja2V0RWZmZWN0XCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG90aGVyLnRhZyA9PSB0YWcuYmlnRmFuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNEaXMgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheVJvY2tldEVmZmVjdDIoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSwgMC4wMSlcclxuICAgICAgICAgICAgbGV0IHNjcmlwdCA9IG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KFwicHJvcEJpZ0ZhblwiKTtcclxuICAgICAgICAgICAgc2NyaXB0Lm9uRGFtYWdlZCgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwicm9ja2V0RWZmZWN0XCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgb3RoZXIubm9kZS5wYXJlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24ob3RoZXIubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAob3RoZXIudGFnID09IHRhZy5yb2NrZXRGbG9vcikge1xyXG4gICAgICAgICAgICBjYy5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLTEwXCIpXHJcbiAgICAgICAgICAgIGNvbnRhY3QuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICgpID0+IHtcclxuICAgICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlSb2NrZXRFZmZlY3QxKCk7XHJcbiAgICAgICAgICAgIGxldCByYiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgbGV0IHYgPSByYi5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnQuYW5nbGUgPT0gMCB8fCB0aGlzLm5vZGUucGFyZW50LmFuZ2xlID09IDE4MCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHRoaXMubm9kZS5wYXJlbnQuYW5nbGUgPT0gMCA/IDEgOiAtMVxyXG4gICAgICAgICAgICAgICAgdi54ID0gMTAwMCAqIGRpcmVjdGlvbjtcclxuICAgICAgICAgICAgICAgIHJiLmxpbmVhclZlbG9jaXR5ID0gdjtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5ub2RlLnBhcmVudC5hbmdsZSA9PSA5MCB8fCB0aGlzLm5vZGUucGFyZW50LmFuZ2xlID09IDI3MCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHRoaXMubm9kZS5wYXJlbnQuYW5nbGUgPT0gOTAgPyAxIDogLTFcclxuICAgICAgICAgICAgICAgIHYueSA9IDUwMCAqIGRpcmVjdGlvbjtcclxuICAgICAgICAgICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDkzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdi55ICs9IDUwMCAqIGRpcmVjdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDU0fHxjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDEzMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHYueSAtPSA0MDAgKiBkaXJlY3Rpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByYi5saW5lYXJWZWxvY2l0eSA9IHY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==