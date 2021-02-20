
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/propCacTus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a24b0bw62NKK6VlS3eBOukU', 'propCacTus');
// script/Game/propCacTus.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var propCacTus = /** @class */ (function (_super) {
    __extends(propCacTus, _super);
    function propCacTus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hand1 = null;
        _this.hand2 = null;
        _this.l1 = null;
        _this.isDes = false;
        _this.action = null;
        _this.isAction = false;
        _this.angle = null;
        return _this;
    }
    propCacTus.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (other.tag == Constant_1.tag.thorn && (this.node.name == "cactus3" || this.node.name == "cactus2")) {
            if (this.node.parent.name == "rewardLevel") {
                contact.disabled = true;
                return;
            }
            var rb = this.l1.getComponent(cc.RigidBody);
            var v = this.l1.getComponent(cc.RigidBody).linearVelocity;
            v.x = 50;
            rb.linearVelocity = v;
        }
        else if (other.tag == Constant_1.tag.bigFan) {
            if (this.isDes)
                return;
            this.isDes = true;
            this.scheduleOnce(function () {
                _this.node.destroy();
            }, 0.3);
        }
    };
    // LIFE-CYCLE CALLBACKS:
    propCacTus.prototype.onDestroy = function () {
        this.unscheduleAllCallbacks();
    };
    propCacTus.prototype.onLoad = function () {
        if (this.node.name == "cactus3" || this.node.name == "cactus2") {
            this.hand1 = this.node.getChildByName("scale").getChildByName("hand1");
            this.hand2 = this.node.getChildByName("scale").getChildByName("hand2");
            this.l1 = this.node.getChildByName("l1");
        }
        else if (this.node.name == "cactus5") {
            this.hand1 = this.node.getChildByName("sp").getChildByName("hand1");
            this.hand2 = this.node.getChildByName("sp").getChildByName("hand2");
        }
        else {
            this.hand1 = this.node.getChildByName("hand1");
            this.hand2 = this.node.getChildByName("hand2");
        }
    };
    propCacTus.prototype.onThorn = function () {
        var prefab = CocosZ_1.cocosz.resMgr.getRes("thorn", cc.Prefab);
        var node = cc.instantiate(prefab);
        var hd = this.angle / 180 * Math.PI;
        // cc.log(this.angle);
        node.y = Math.random() * 12 - 6 - 10;
        node.x = 30;
        node.angle = this.angle;
        node.scale = 1.5;
        this.node.addChild(node);
        var rb = node.getComponent(cc.RigidBody);
        var v = rb.linearVelocity;
        // this.angle = Math.ceil(hd / Math.PI * 180);
        // cc.log(Math.sin(hd), Math.cos(hd))
        v.x = 700 * Math.cos(hd);
        v.y = 700 * Math.sin(hd);
        rb.linearVelocity = v;
        CocosZ_1.cocosz.audioMgr.playmCactusEffect2();
        this.isAction = false;
    };
    propCacTus.prototype.start = function () {
        // let rb = this.l1.getComponent(cc.RigidBody);
        // let v = this.l1.getComponent(cc.RigidBody).linearVelocity;
        // v.x = 100;
        // rb.linearVelocity = v;
        var _this = this;
        if (this.node.parent.name == "rewardLevel") {
            var a_1 = cc.tween().sequence(cc.tween().call(function () {
                _this.isAction = true;
                cc.tween(_this.hand2)
                    .by(0.03, { position: cc.v2(4, 0) })
                    .by(0.03, { position: cc.v2(-4, 0) })
                    .start();
                cc.tween(_this.hand1)
                    .by(0.03, { position: cc.v2(-4, 0) })
                    .by(0.03, { position: cc.v2(4, 0) })
                    .start();
            }), cc.tween().delay(0.12), cc.tween().call(function () {
                _this.onThorn();
            }));
            // this.action = cc.tween(this.node)
            //     .repeatForever(a)
            //     .start()
            this.schedule(function () {
                _this.action = cc.tween(_this.node)
                    .call(function () {
                    _this.isAction = true;
                    cc.tween(_this.hand2)
                        .by(0.03, { position: cc.v2(4, 0) })
                        .by(0.03, { position: cc.v2(-4, 0) })
                        .start();
                    cc.tween(_this.hand1)
                        .by(0.03, { position: cc.v2(-4, 0) })
                        .by(0.03, { position: cc.v2(4, 0) })
                        .start();
                })
                    .delay(0.12)
                    .call(function () {
                    _this.onThorn();
                })
                    .start();
            }, 0.15);
            this.scheduleOnce(function () {
                _this.unscheduleAllCallbacks();
            }, 25);
            this.node.parent.on(cc.Node.EventType.TOUCH_MOVE, (function (touch) {
                if (CocosZ_1.cocosz.gameMgr.isGameOver)
                    return;
                if (_this.isAction)
                    return;
                var pp = touch.getLocation();
                var pos2 = _this.node.parent.convertToNodeSpaceAR(pp);
                var pos = cc.v2(499 + pos2.x, pos2.y);
                var hd = pos.signAngle(cc.v2(100, 0));
                _this.angle = -hd / Math.PI * 180;
                _this.angle = _this.angle > 80 ? 80 : _this.angle;
                // cc.log(this.angle);
                // this.action.start();
            }));
            this.node.parent.on(cc.Node.EventType.TOUCH_START, (function (touch) {
                if (CocosZ_1.cocosz.gameMgr.isGameOver)
                    return;
                if (_this.isAction)
                    return;
                var pp = touch.getLocation();
                var pos2 = _this.node.parent.convertToNodeSpaceAR(pp);
                var pos = cc.v2(499 + pos2.x, pos2.y);
                var hd = pos.signAngle(cc.v2(100, 0));
                _this.angle = -hd / Math.PI * 180;
                _this.angle = _this.angle > 80 ? 80 : _this.angle;
                // this.action.start();
            }));
            return;
        }
        var a = cc.tween().sequence(cc.tween().by(0.2, { position: cc.v2(-4, 0) }), cc.tween().by(0.2, { position: cc.v2(4, 0) }));
        cc.tween(this.hand1)
            .repeatForever(a)
            .start();
        var b = cc.tween().sequence(cc.tween().by(0.2, { position: cc.v2(4, 0) }), cc.tween().by(0.2, { position: cc.v2(-4, 0) }));
        cc.tween(this.hand2)
            .repeatForever(b)
            .start();
        this.schedule(function () {
            var prefab = CocosZ_1.cocosz.resMgr.getRes("thorn", cc.Prefab);
            var node = cc.instantiate(prefab);
            node.zIndex -= 1009;
            // if (this.node.y >= 1000 || this.node.y <= -1000) {
            //     this.node.destroy();
            // }
            if (CocosZ_1.cocosz.dataMgr.CurLevelId == 136 && CocosZ_1.cocosz.gameMgr.surplusLevelNum > 0)
                return;
            if (_this.node.name == "cactus3" || _this.node.name == "cactus2") {
                node.y = Math.random() * 12 - 6 - 10;
                node.x = -30;
                node.angle = 180;
                _this.node.getChildByName("scale").addChild(node);
                var rb = node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                var angle = Math.PI / 180 * _this.node.angle;
                var sin = Math.sin(angle);
                var cos = Math.cos(angle);
                // cc.log(sin,cos,this.node.angle)
                CocosZ_1.cocosz.audioMgr.playmCactusEffect2();
                v.x = -700 * cos;
                v.y = -700 * sin;
                rb.linearVelocity = v;
            }
            else {
                node.y = Math.random() * 12 - 6 - 10;
                node.x = 30;
                _this.node.addChild(node);
                var rb = node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                v.x = 700 * _this.node.scaleX / Math.abs(_this.node.scaleX);
                rb.linearVelocity = v;
                CocosZ_1.cocosz.audioMgr.playmCactusEffect2();
            }
        }, 0.1);
    };
    propCacTus.prototype.update = function (dt) {
        // let rb = this.node.getComponent(cc.RigidBody)
        // let v = rb.linearVelocity;
        // v.x = 50;
        // rb.linearVelocity = v;
        // if (this.node.x >= 800) {
        //     this.node.destroy();
        // }
    };
    propCacTus = __decorate([
        ccclass
    ], propCacTus);
    return propCacTus;
}(cc.Component));
exports.default = propCacTus;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxwcm9wQ2FjVHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSw4Q0FBNkM7QUFDN0Msa0RBQTRDO0FBRXRDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFEcEQ7UUFBQSxxRUFxUUM7UUFsUUcsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLFFBQUUsR0FBWSxJQUFJLENBQUM7UUFDbkIsV0FBSyxHQUFZLEtBQUssQ0FBQztRQUV2QixZQUFNLEdBQVEsSUFBSSxDQUFDO1FBRW5CLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFFMUIsV0FBSyxHQUFRLElBQUksQ0FBQzs7SUF3UHRCLENBQUM7SUFuUEcsbUNBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUFuQyxpQkFvQkM7UUFuQkcsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLGNBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLEVBQUU7WUFDeEYsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksYUFBYSxFQUFFO2dCQUN4QyxPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDeEIsT0FBTTthQUNUO1lBRUQsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxjQUFjLENBQUM7WUFDMUQsQ0FBQyxDQUFDLENB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LFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuaW1wb3J0IHsgdGFnIH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHByb3BDYWNUdXMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIGhhbmQxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGhhbmQyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBsMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBpc0RlczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGFjdGlvbjogYW55ID0gbnVsbDtcclxuXHJcbiAgICBpc0FjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGFuZ2xlOiBhbnkgPSBudWxsO1xyXG5cclxuXHJcblxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSB0YWcudGhvcm4gJiYgKHRoaXMubm9kZS5uYW1lID09IFwiY2FjdHVzM1wiIHx8IHRoaXMubm9kZS5uYW1lID09IFwiY2FjdHVzMlwiKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLnBhcmVudC5uYW1lID09IFwicmV3YXJkTGV2ZWxcIikge1xyXG4gICAgICAgICAgICAgICAgY29udGFjdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHJiID0gdGhpcy5sMS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgbGV0IHYgPSB0aGlzLmwxLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgICAgICB2LnggPSA1MDtcclxuICAgICAgICAgICAgcmIubGluZWFyVmVsb2NpdHkgPSB2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChvdGhlci50YWcgPT0gdGFnLmJpZ0Zhbikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0RlcykgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLmlzRGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSwgMC4zKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PSBcImNhY3R1czNcIiB8fCB0aGlzLm5vZGUubmFtZSA9PSBcImNhY3R1czJcIikge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5oYW5kMSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNjYWxlXCIpLmdldENoaWxkQnlOYW1lKFwiaGFuZDFcIik7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZDIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzY2FsZVwiKS5nZXRDaGlsZEJ5TmFtZShcImhhbmQyXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmwxID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibDFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMubm9kZS5uYW1lID09IFwiY2FjdHVzNVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZDEgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcFwiKS5nZXRDaGlsZEJ5TmFtZShcImhhbmQxXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmQyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BcIikuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kMlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZDEgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJoYW5kMVwiKTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kMiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImhhbmQyXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgb25UaG9ybigpIHtcclxuXHJcbiAgICAgICAgbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwidGhvcm5cIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcblxyXG4gICAgICAgIGxldCBoZCA9IHRoaXMuYW5nbGUgLyAxODAgKiBNYXRoLlBJO1xyXG4gICAgICAgIC8vIGNjLmxvZyh0aGlzLmFuZ2xlKTtcclxuICAgICAgICBub2RlLnkgPSBNYXRoLnJhbmRvbSgpICogMTIgLSA2IC0gMTA7XHJcbiAgICAgICAgbm9kZS54ID0gMzA7XHJcbiAgICAgICAgbm9kZS5hbmdsZSA9IHRoaXMuYW5nbGU7XHJcbiAgICAgICAgbm9kZS5zY2FsZSA9IDEuNTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgbGV0IHJiID0gbm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBsZXQgdiA9IHJiLmxpbmVhclZlbG9jaXR5O1xyXG5cclxuICAgICAgICAvLyB0aGlzLmFuZ2xlID0gTWF0aC5jZWlsKGhkIC8gTWF0aC5QSSAqIDE4MCk7XHJcbiAgICAgICAgLy8gY2MubG9nKE1hdGguc2luKGhkKSwgTWF0aC5jb3MoaGQpKVxyXG4gICAgICAgIHYueCA9IDcwMCAqIE1hdGguY29zKGhkKTtcclxuICAgICAgICB2LnkgPSA3MDAgKiBNYXRoLnNpbihoZCk7XHJcbiAgICAgICAgcmIubGluZWFyVmVsb2NpdHkgPSB2O1xyXG4gICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5bUNhY3R1c0VmZmVjdDIoKVxyXG5cclxuICAgICAgICB0aGlzLmlzQWN0aW9uID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuXHJcbiAgICAgICAgLy8gbGV0IHJiID0gdGhpcy5sMS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAvLyBsZXQgdiA9IHRoaXMubDEuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgLy8gdi54ID0gMTAwO1xyXG4gICAgICAgIC8vIHJiLmxpbmVhclZlbG9jaXR5ID0gdjtcclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50Lm5hbWUgPT0gXCJyZXdhcmRMZXZlbFwiKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgYSA9IGNjLnR3ZWVuKCkuc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuaGFuZDIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ieSgwLjAzLCB7IHBvc2l0aW9uOiBjYy52Mig0LCAwKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnkoMC4wMywgeyBwb3NpdGlvbjogY2MudjIoLTQsIDApIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5oYW5kMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ5KDAuMDMsIHsgcG9zaXRpb246IGNjLnYyKC00LCAwKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnkoMC4wMywgeyBwb3NpdGlvbjogY2MudjIoNCwgMCkgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS5kZWxheSgwLjEyKSxcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblRob3JuKCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMuYWN0aW9uID0gY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAvLyAgICAgLnJlcGVhdEZvcmV2ZXIoYSlcclxuICAgICAgICAgICAgLy8gICAgIC5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbiA9IGNjLnR3ZWVuKHRoaXMubm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNBY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmhhbmQyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ5KDAuMDMsIHsgcG9zaXRpb246IGNjLnYyKDQsIDApIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYnkoMC4wMywgeyBwb3NpdGlvbjogY2MudjIoLTQsIDApIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmhhbmQxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ5KDAuMDMsIHsgcG9zaXRpb246IGNjLnYyKC00LCAwKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmJ5KDAuMDMsIHsgcG9zaXRpb246IGNjLnYyKDQsIDApIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuMTIpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uVGhvcm4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgIH0sIDAuMTUpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKVxyXG4gICAgICAgICAgICB9LCAyNSlcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsICgodG91Y2g6IGNjLlRvdWNoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29jb3N6LmdhbWVNZ3IuaXNHYW1lT3ZlcikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNBY3Rpb24pIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcHAgPSB0b3VjaC5nZXRMb2NhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwb3MyID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwcCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gY2MudjIoNDk5ICsgcG9zMi54LCBwb3MyLnkpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGhkID0gcG9zLnNpZ25BbmdsZShjYy52MigxMDAsIDApKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuZ2xlID0gLWhkIC8gTWF0aC5QSSAqIDE4MDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgPSB0aGlzLmFuZ2xlID4gODAgPyA4MCA6IHRoaXMuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2codGhpcy5hbmdsZSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmFjdGlvbi5zdGFydCgpO1xyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCh0b3VjaDogY2MuVG91Y2gpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb2Nvc3ouZ2FtZU1nci5pc0dhbWVPdmVyKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0FjdGlvbikgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwcCA9IHRvdWNoLmdldExvY2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHBvczIgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBwKTtcclxuICAgICAgICAgICAgICAgIGxldCBwb3MgPSBjYy52Mig0OTkgKyBwb3MyLngsIHBvczIueSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaGQgPSBwb3Muc2lnbkFuZ2xlKGNjLnYyKDEwMCwgMCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYW5nbGUgPSAtaGQgLyBNYXRoLlBJICogMTgwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmdsZSA9IHRoaXMuYW5nbGUgPiA4MCA/IDgwIDogdGhpcy5hbmdsZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5hY3Rpb24uc3RhcnQoKTtcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IGEgPSBjYy50d2VlbigpLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICBjYy50d2VlbigpLmJ5KDAuMiwgeyBwb3NpdGlvbjogY2MudjIoLTQsIDApIH0pLFxyXG4gICAgICAgICAgICBjYy50d2VlbigpLmJ5KDAuMiwgeyBwb3NpdGlvbjogY2MudjIoNCwgMCkgfSlcclxuICAgICAgICApXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5oYW5kMSlcclxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoYSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgYiA9IGNjLnR3ZWVuKCkuc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKCkuYnkoMC4yLCB7IHBvc2l0aW9uOiBjYy52Mig0LCAwKSB9KSxcclxuICAgICAgICAgICAgY2MudHdlZW4oKS5ieSgwLjIsIHsgcG9zaXRpb246IGNjLnYyKC00LCAwKSB9KVxyXG4gICAgICAgIClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLmhhbmQyKVxyXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihiKVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcInRob3JuXCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgbm9kZS56SW5kZXggLT0gMTAwOTtcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMubm9kZS55ID49IDEwMDAgfHwgdGhpcy5ub2RlLnkgPD0gLTEwMDApIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTM2ICYmIGNvY29zei5nYW1lTWdyLnN1cnBsdXNMZXZlbE51bSA+IDApIHJldHVyblxyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLm5hbWUgPT0gXCJjYWN0dXMzXCIgfHwgdGhpcy5ub2RlLm5hbWUgPT0gXCJjYWN0dXMyXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLnkgPSBNYXRoLnJhbmRvbSgpICogMTIgLSA2IC0gMTA7XHJcbiAgICAgICAgICAgICAgICBub2RlLnggPSAtMzA7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFuZ2xlID0gMTgwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic2NhbGVcIikuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmIgPSBub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSByYi5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgICAgIGxldCBhbmdsZSA9IE1hdGguUEkgLyAxODAgKiB0aGlzLm5vZGUuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2luID0gTWF0aC5zaW4oYW5nbGUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvcyA9IE1hdGguY29zKGFuZ2xlKTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhzaW4sY29zLHRoaXMubm9kZS5hbmdsZSlcclxuICAgICAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5bUNhY3R1c0VmZmVjdDIoKVxyXG4gICAgICAgICAgICAgICAgdi54ID0gLTcwMCAqIGNvcztcclxuICAgICAgICAgICAgICAgIHYueSA9IC03MDAgKiBzaW47XHJcbiAgICAgICAgICAgICAgICByYi5saW5lYXJWZWxvY2l0eSA9IHY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLnkgPSBNYXRoLnJhbmRvbSgpICogMTIgLSA2IC0gMTA7XHJcbiAgICAgICAgICAgICAgICBub2RlLnggPSAzMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIGxldCByYiA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IHJiLmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgICAgICAgICAgdi54ID0gNzAwICogdGhpcy5ub2RlLnNjYWxlWCAvIE1hdGguYWJzKHRoaXMubm9kZS5zY2FsZVgpO1xyXG4gICAgICAgICAgICAgICAgcmIubGluZWFyVmVsb2NpdHkgPSB2O1xyXG4gICAgICAgICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXltQ2FjdHVzRWZmZWN0MigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAwLjEpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy8gbGV0IHJiID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpXHJcbiAgICAgICAgLy8gbGV0IHYgPSByYi5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAvLyB2LnggPSA1MDtcclxuICAgICAgICAvLyByYi5saW5lYXJWZWxvY2l0eSA9IHY7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMubm9kZS54ID49IDgwMCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufVxyXG4iXX0=