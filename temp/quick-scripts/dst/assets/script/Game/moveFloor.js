
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/moveFloor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6db6a5v+0tA1ZOgLy/brtSH', 'moveFloor');
// script/Game/moveFloor.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selelt = null;
        _this.default = null;
        _this.notStop = null;
        _this.tagList = [];
        _this.isFirst = true;
        _this.isEnd = false;
        return _this;
    }
    NewClass.prototype.onBeginContact = function (contact, self, other) {
        // if (this.default.active == true) return;
        // if (this.selelt.active == false) return;
        if (other.tag == Constant_1.tag.thorn || other.tag == Constant_1.tag.invisibleFloor) {
            contact.disabled = true;
            return;
        }
        if (this.isEnd)
            return;
        contact.disabled = true;
        // if (this.isFirst) {
        //     this.isFirst = false;
        //     return
        // }
        // cc.log(other.tag);
        for (var _i = 0, _a = this.tagList; _i < _a.length; _i++) {
            var idx = _a[_i];
            if (idx.tag == other.tag) {
                return;
            }
        }
        this.tagList.push(other);
        // cc.log(this.tagList);
        // if (this.tagList.length > 1) {
        this.notStop.active = true;
        this.node.color = cc.color(255, 0, 0, 150);
        // }
        if (this.tagList.length == 1 && (this.tagList[0].tag == Constant_1.tag.wooldenBox || this.tagList[0].tag == 81)) {
            if (this.tagList[0].node.name == "wooldenBox11" && CocosZ_1.cocosz.dataMgr.CurLevelId == 52)
                return;
            this.notStop.active = false;
            this.node.color = cc.color(255, 255, 255, 255);
        }
    };
    NewClass.prototype.onEndContact = function (contact, self, other) {
        if (other.tag == Constant_1.tag.thorn)
            return;
        if (this.isEnd)
            return;
        var list = [];
        for (var _i = 0, _a = this.tagList; _i < _a.length; _i++) {
            var idx = _a[_i];
            if (idx.tag == other.tag)
                continue;
            list.push(idx);
        }
        this.tagList = list;
        this.notStop.active = true;
        this.node.color = cc.color(255, 0, 0, 150);
        if (this.tagList.length == 1 && (this.tagList[0].tag == Constant_1.tag.wooldenBox || this.tagList[0].tag == 81)) {
            if (this.tagList[0].node.name == "wooldenBox11" && CocosZ_1.cocosz.dataMgr.CurLevelId == 52)
                return;
            this.notStop.active = false;
            this.node.color = cc.color(255, 255, 255, 255);
        }
        // cc.log(this.tagList, "----------onEndContact");
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.default = this.node.getChildByName("default");
        this.selelt = this.node.getChildByName("selelt");
        this.notStop = this.node.getChildByName("notStop");
        var circle = null;
        if (this.node.name == "moveFloor2" || this.node.name == "moveFloor4") {
            circle = this.node.getComponent(cc.PhysicsBoxCollider);
        }
        else if (this.node.name == "moveFloor1") {
            circle = this.node.getComponent(cc.PhysicsCircleCollider);
        }
        else if (this.node.name == "moveFloor3" || this.node.name == "moveFloor5") {
            circle = this.node.getComponent(cc.PhysicsPolygonCollider);
        }
        circle.enabled = false;
    };
    NewClass.prototype.start = function () {
        var _this = this;
        this.node.zIndex += 1001;
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            _this.default.active = false;
            _this.notStop.active = true;
            _this.node.color = cc.color(255, 0, 0, 150);
            var circle = null;
            if (_this.node.name == "moveFloor2" || _this.node.name == "moveFloor4") {
                circle = _this.node.getComponent(cc.PhysicsBoxCollider);
            }
            else if (_this.node.name == "moveFloor1") {
                circle = _this.node.getComponent(cc.PhysicsCircleCollider);
            }
            else if (_this.node.name == "moveFloor3" || _this.node.name == "moveFloor5") {
                circle = _this.node.getComponent(cc.PhysicsPolygonCollider);
            }
            circle.enabled = true;
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (touch) {
            var pos = touch.getDelta();
            _this.node.x += pos.x;
            _this.node.y += pos.y;
            // cc.log(pos.x, pos.y, "---------")
            // let v = this.node.getComponent(cc.RigidBody).linearVelocity;
            // v.x += pos.x * 10;
            // v.y += pos.y * 10;
            // this.node.getComponent(cc.RigidBody).linearVelocity = v;
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            // cc.log(this.tagList);
            if (_this.tagList.length == 1 && (_this.tagList[0].tag == Constant_1.tag.wooldenBox || _this.tagList[0].tag == 81)) {
                if (_this.tagList[0].node.name == "wooldenBox11" && CocosZ_1.cocosz.dataMgr.CurLevelId == 52)
                    return;
                _this.node.targetOff(_this);
                _this.isEnd = true;
                _this.node.color = cc.color(255, 255, 255, 255);
                var weld = null;
                if (_this.tagList[0].node.name == "wooldenBox12") {
                    cc.log("------------------this.");
                    weld = _this.node.addComponent(cc.RevoluteJoint);
                }
                else {
                    weld = _this.node.addComponent(cc.WeldJoint);
                }
                weld.connectedBody = _this.tagList[0].node.getComponent(cc.RigidBody);
                // cc.log(this.tagList[0].node.scaleX, this.tagList[0].node.scaleY)
                // weld.connectedAnchor.x = (this.node.x - this.tagList[0].node.x) / this.tagList[0].node.scaleX;
                // weld.connectedAnchor.y = (this.node.y - this.tagList[0].node.y) / this.tagList[0].node.scaleY;
                weld.connectedAnchor.x = (_this.node.x - _this.tagList[0].node.x);
                weld.connectedAnchor.y = (_this.node.y - _this.tagList[0].node.y);
                if (_this.node.name == "moveFloor5") {
                    // weld.connectedAnchor.x = 0
                    // weld.connectedAnchor.y = 0
                    // weld.anchor.x = (this.node.x - this.tagList[0].node.x);
                    // weld.anchor.y = (this.node.y - this.tagList[0].node.y);
                }
                weld.apply();
                // cc.log(this.tagList[0].node)
                var rb = _this.node.getComponent(cc.RigidBody);
                rb.type = cc.RigidBodyType.Dynamic;
                var circle = null;
                if (_this.node.name == "moveFloor2" || _this.node.name == "moveFloor4") {
                    circle = _this.node.getComponent(cc.PhysicsBoxCollider);
                }
                else if (_this.node.name == "moveFloor1") {
                    circle = _this.node.getComponent(cc.PhysicsCircleCollider);
                }
                else if (_this.node.name == "moveFloor3" || _this.node.name == "moveFloor5") {
                    circle = _this.node.getComponent(cc.PhysicsPolygonCollider);
                }
                _this.selelt.active = false;
                rb.gravityScale = 2;
                if (_this.node.name == "moveFloor5") {
                    rb.gravityScale = 1;
                }
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 113 || CocosZ_1.cocosz.dataMgr.CurLevelId == 115) {
                    rb.gravityScale = 0;
                }
                circle.apply();
                if (_this.node.name == "moveFloor5")
                    return;
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 113) {
                    return;
                }
                _this.node.on(cc.Node.EventType.TOUCH_START, function () {
                    _this.node.destroy();
                    CocosZ_1.cocosz.audioMgr.playBoxEffect();
                    var prefab = CocosZ_1.cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
                    var node = cc.instantiate(prefab);
                    _this.node.parent.addChild(node);
                    node.setPosition(_this.node.getPosition());
                });
            }
        }, this);
    };
    NewClass.prototype.update = function (dt) {
        if (this.node.y >= 500) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxtb3ZlRmxvb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7O0FBRWxGLDhDQUE2QztBQUM3QyxrREFBNEM7QUFFdEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQURsRDtRQUFBLHFFQTRNQztRQTFNRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixhQUFPLEdBQVEsRUFBRSxDQUFDO1FBRWxCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsV0FBSyxHQUFZLEtBQUssQ0FBQzs7SUFrTTNCLENBQUM7SUEvTEcsaUNBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUMvQiwyQ0FBMkM7UUFDM0MsMkNBQTJDO1FBQzNDLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxjQUFHLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksY0FBRyxDQUFDLGNBQWMsRUFBRTtZQUMzRCxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUN4QixPQUFNO1NBQ1Q7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUV2QixPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUN4QixzQkFBc0I7UUFDdEIsNEJBQTRCO1FBQzVCLGFBQWE7UUFDYixJQUFJO1FBQ0oscUJBQXFCO1FBQ3JCLEtBQWdCLFVBQVksRUFBWixLQUFBLElBQUksQ0FBQyxPQUFPLEVBQVosY0FBWSxFQUFaLElBQVksRUFBRTtZQUF6QixJQUFJLEdBQUcsU0FBQTtZQUNSLElBQUks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ZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuaW1wb3J0IHsgdGFnIH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHNlbGVsdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBkZWZhdWx0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIG5vdFN0b3A6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHRhZ0xpc3Q6IGFueSA9IFtdO1xyXG5cclxuICAgIGlzRmlyc3Q6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIGlzRW5kOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuZGVmYXVsdC5hY3RpdmUgPT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnNlbGVsdC5hY3RpdmUgPT0gZmFsc2UpIHJldHVybjtcclxuICAgICAgICBpZiAob3RoZXIudGFnID09IHRhZy50aG9ybiB8fCBvdGhlci50YWcgPT0gdGFnLmludmlzaWJsZUZsb29yKSB7XHJcbiAgICAgICAgICAgIGNvbnRhY3QuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmQpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29udGFjdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaXNGaXJzdCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmlzRmlyc3QgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgcmV0dXJuXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNjLmxvZyhvdGhlci50YWcpO1xyXG4gICAgICAgIGZvciAobGV0IGlkeCBvZiB0aGlzLnRhZ0xpc3QpIHtcclxuICAgICAgICAgICAgaWYgKGlkeC50YWcgPT0gb3RoZXIudGFnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50YWdMaXN0LnB1c2gob3RoZXIpO1xyXG4gICAgICAgIC8vIGNjLmxvZyh0aGlzLnRhZ0xpc3QpO1xyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy50YWdMaXN0Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgICB0aGlzLm5vdFN0b3AuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5jb2xvcigyNTUsIDAsIDAsIDE1MCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmICh0aGlzLnRhZ0xpc3QubGVuZ3RoID09IDEgJiYgKHRoaXMudGFnTGlzdFswXS50YWcgPT0gdGFnLndvb2xkZW5Cb3ggfHwgdGhpcy50YWdMaXN0WzBdLnRhZyA9PSA4MSkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGFnTGlzdFswXS5ub2RlLm5hbWUgPT0gXCJ3b29sZGVuQm94MTFcIiAmJiBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDUyKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMubm90U3RvcC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmRDb250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSB0YWcudGhvcm4pIHJldHVyblxyXG4gICAgICAgIGlmICh0aGlzLmlzRW5kKSByZXR1cm47XHJcbiAgICAgICAgbGV0IGxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpZHggb2YgdGhpcy50YWdMaXN0KSB7XHJcbiAgICAgICAgICAgIGlmIChpZHgudGFnID09IG90aGVyLnRhZykgY29udGludWU7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChpZHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRhZ0xpc3QgPSBsaXN0O1xyXG5cclxuICAgICAgICB0aGlzLm5vdFN0b3AuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5jb2xvcigyNTUsIDAsIDAsIDE1MCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRhZ0xpc3QubGVuZ3RoID09IDEgJiYgKHRoaXMudGFnTGlzdFswXS50YWcgPT0gdGFnLndvb2xkZW5Cb3ggfHwgdGhpcy50YWdMaXN0WzBdLnRhZyA9PSA4MSkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGFnTGlzdFswXS5ub2RlLm5hbWUgPT0gXCJ3b29sZGVuQm94MTFcIiAmJiBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDUyKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMubm90U3RvcC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBjYy5sb2codGhpcy50YWdMaXN0LCBcIi0tLS0tLS0tLS1vbkVuZENvbnRhY3RcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImRlZmF1bHRcIik7XHJcbiAgICAgICAgdGhpcy5zZWxlbHQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzZWxlbHRcIik7XHJcbiAgICAgICAgdGhpcy5ub3RTdG9wID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibm90U3RvcFwiKTtcclxuXHJcbiAgICAgICAgbGV0IGNpcmNsZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09IFwibW92ZUZsb29yMlwiIHx8IHRoaXMubm9kZS5uYW1lID09IFwibW92ZUZsb29yNFwiKSB7XHJcbiAgICAgICAgICAgIGNpcmNsZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5ub2RlLm5hbWUgPT0gXCJtb3ZlRmxvb3IxXCIpIHtcclxuICAgICAgICAgICAgY2lyY2xlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLm5vZGUubmFtZSA9PSBcIm1vdmVGbG9vcjNcIiB8fCB0aGlzLm5vZGUubmFtZSA9PSBcIm1vdmVGbG9vcjVcIikge1xyXG4gICAgICAgICAgICBjaXJjbGUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjaXJjbGUuZW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggKz0gMTAwMTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubm90U3RvcC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5jb2xvcigyNTUsIDAsIDAsIDE1MCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgY2lyY2xlID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09IFwibW92ZUZsb29yMlwiIHx8IHRoaXMubm9kZS5uYW1lID09IFwibW92ZUZsb29yNFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjaXJjbGUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5ub2RlLm5hbWUgPT0gXCJtb3ZlRmxvb3IxXCIpIHtcclxuICAgICAgICAgICAgICAgIGNpcmNsZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLm5vZGUubmFtZSA9PSBcIm1vdmVGbG9vcjNcIiB8fCB0aGlzLm5vZGUubmFtZSA9PSBcIm1vdmVGbG9vcjVcIikge1xyXG4gICAgICAgICAgICAgICAgY2lyY2xlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2lyY2xlLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0sIHRoaXMpXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsICh0b3VjaDogY2MuVG91Y2gpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRvdWNoLmdldERlbHRhKCk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ICs9IHBvcy54O1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueSArPSBwb3MueTtcclxuICAgICAgICAgICAgLy8gY2MubG9nKHBvcy54LCBwb3MueSwgXCItLS0tLS0tLS1cIilcclxuICAgICAgICAgICAgLy8gbGV0IHYgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgIC8vIHYueCArPSBwb3MueCAqIDEwO1xyXG4gICAgICAgICAgICAvLyB2LnkgKz0gcG9zLnkgKiAxMDtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gdjtcclxuICAgICAgICB9LCB0aGlzKVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gY2MubG9nKHRoaXMudGFnTGlzdCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhZ0xpc3QubGVuZ3RoID09IDEgJiYgKHRoaXMudGFnTGlzdFswXS50YWcgPT0gdGFnLndvb2xkZW5Cb3ggfHwgdGhpcy50YWdMaXN0WzBdLnRhZyA9PSA4MSkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRhZ0xpc3RbMF0ubm9kZS5uYW1lID09IFwid29vbGRlbkJveDExXCIgJiYgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA1MikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnRhcmdldE9mZih0aGlzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNFbmQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvciA9IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHdlbGQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGFnTGlzdFswXS5ub2RlLm5hbWUgPT0gXCJ3b29sZGVuQm94MTJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLXRoaXMuXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgd2VsZCA9IHRoaXMubm9kZS5hZGRDb21wb25lbnQoY2MuUmV2b2x1dGVKb2ludCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB3ZWxkID0gdGhpcy5ub2RlLmFkZENvbXBvbmVudChjYy5XZWxkSm9pbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgd2VsZC5jb25uZWN0ZWRCb2R5ID0gdGhpcy50YWdMaXN0WzBdLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2codGhpcy50YWdMaXN0WzBdLm5vZGUuc2NhbGVYLCB0aGlzLnRhZ0xpc3RbMF0ubm9kZS5zY2FsZVkpXHJcbiAgICAgICAgICAgICAgICAvLyB3ZWxkLmNvbm5lY3RlZEFuY2hvci54ID0gKHRoaXMubm9kZS54IC0gdGhpcy50YWdMaXN0WzBdLm5vZGUueCkgLyB0aGlzLnRhZ0xpc3RbMF0ubm9kZS5zY2FsZVg7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gd2VsZC5jb25uZWN0ZWRBbmNob3IueSA9ICh0aGlzLm5vZGUueSAtIHRoaXMudGFnTGlzdFswXS5ub2RlLnkpIC8gdGhpcy50YWdMaXN0WzBdLm5vZGUuc2NhbGVZO1xyXG4gICAgICAgICAgICAgICAgd2VsZC5jb25uZWN0ZWRBbmNob3IueCA9ICh0aGlzLm5vZGUueCAtIHRoaXMudGFnTGlzdFswXS5ub2RlLngpO1xyXG5cclxuICAgICAgICAgICAgICAgIHdlbGQuY29ubmVjdGVkQW5jaG9yLnkgPSAodGhpcy5ub2RlLnkgLSB0aGlzLnRhZ0xpc3RbMF0ubm9kZS55KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PSBcIm1vdmVGbG9vcjVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlbGQuY29ubmVjdGVkQW5jaG9yLnggPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2VsZC5jb25uZWN0ZWRBbmNob3IueSA9IDBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2VsZC5hbmNob3IueCA9ICh0aGlzLm5vZGUueCAtIHRoaXMudGFnTGlzdFswXS5ub2RlLngpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdlbGQuYW5jaG9yLnkgPSAodGhpcy5ub2RlLnkgLSB0aGlzLnRhZ0xpc3RbMF0ubm9kZS55KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB3ZWxkLmFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2codGhpcy50YWdMaXN0WzBdLm5vZGUpXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJiID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICAgICAgcmIudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcclxuICAgICAgICAgICAgICAgIGxldCBjaXJjbGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09IFwibW92ZUZsb29yMlwiIHx8IHRoaXMubm9kZS5uYW1lID09IFwibW92ZUZsb29yNFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2lyY2xlID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5ub2RlLm5hbWUgPT0gXCJtb3ZlRmxvb3IxXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaXJjbGUgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLm5vZGUubmFtZSA9PSBcIm1vdmVGbG9vcjNcIiB8fCB0aGlzLm5vZGUubmFtZSA9PSBcIm1vdmVGbG9vcjVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNpcmNsZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlbHQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICByYi5ncmF2aXR5U2NhbGUgPSAyO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09IFwibW92ZUZsb29yNVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmIuZ3Jhdml0eVNjYWxlID0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDExMyB8fCBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDExNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJiLmdyYXZpdHlTY2FsZSA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjaXJjbGUuYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PSBcIm1vdmVGbG9vcjVcIikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDExMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlCb3hFZmZlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJyb2NrZXRFZmZlY3RcIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH0sIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS55ID49IDUwMCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=