
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/gameBg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eead0ic9U1L47q+Ct7L9ofh', 'gameBg');
// script/Game/gameBg.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var gameBg = /** @class */ (function (_super) {
    __extends(gameBg, _super);
    function gameBg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    gameBg.prototype.onLoad = function () {
    };
    gameBg.prototype.start = function () {
        var _this = this;
        this.node.zIndex -= 9999;
        cc.log("---------------------背景生成");
        var d = null;
        if (CocosZ_1.cocosz.sceneMgr.sceneName == "Game") {
            d = cc.tween().sequence(cc.tween().call(function () {
                var cNode1 = cc.instantiate(_this._Cloud1);
                var cNode2 = cc.instantiate(_this._Cloud2);
                _this._Cloud1.parent.addChild(cNode1);
                _this._Cloud1.parent.addChild(cNode2);
                cNode1.y = Math.random() * 360;
                cNode2.y = Math.random() * 360;
                if (cNode1.x < 0) {
                    cNode1.x -= Math.random() * 360;
                }
                else {
                    cNode1.x += Math.random() * 360;
                }
                if (cNode2.x < 0) {
                    cNode2.x -= Math.random() * 360;
                }
                else {
                    cNode2.x += Math.random() * 360;
                }
                var pos1 = cc.v2((2500 + Math.random() * 500) * cNode1.scaleX, 0);
                var pos2 = cc.v2((2500 + Math.random() * 500) * cNode2.scaleX, 0);
                if (Math.random() > 0.4) {
                    cNode1.x *= -1;
                    cNode1.scaleX *= -1;
                    pos1.x *= -1;
                }
                cc.tween(cNode1)
                    .by(50 + 5 * Math.random(), { position: pos1 })
                    .call(function () {
                    cNode1.destroy();
                })
                    .start();
                cc.tween(cNode2)
                    .by(50 + 5 * Math.random(), { position: pos2 })
                    .call(function () {
                    cNode2.destroy();
                })
                    .start();
            }), cc.tween().delay(50));
        }
        else {
            d = cc.tween().sequence(cc.tween().call(function () {
                var node = cc.instantiate(_this.node.getChildByName("sCloud" + Math.floor(Math.random() * 7)));
                node.x = Math.random() * 500 - 250;
                _this.node.addChild(node);
                cc.tween(node)
                    .by(20, { position: cc.v2(0, -3000) })
                    .call(function () {
                    node.destroy();
                })
                    .start();
            }), cc.tween().delay(7));
            cc.tween(this.node)
                .repeatForever(d)
                .start();
        }
        cc.log(d);
    };
    gameBg.prototype.onDestroy = function () {
        cc.log("---------------------背景销毁");
    };
    gameBg = __decorate([
        ccclass
    ], gameBg);
    return gameBg;
}(cc.Component));
exports.default = gameBg;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxnYW1lQmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUV2QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEOztJQThGQSxDQUFDO0lBM0ZHLHdCQUF3QjtJQUV4Qix1QkFBTSxHQUFOO0lBQ0EsQ0FBQztJQUVELHNCQUFLLEdBQUw7UUFBQSxpQkErRUM7UUE5RUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDO1FBRXpCLEVBQUUsQ0FBQyxHQUFHLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLGVBQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLE1BQU0sRUFBRTtZQUNyQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FDbkIsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztnQkFDWixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNyQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7Z0JBQy9CLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQztn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Q0FBQyxFQUFFLENBQUM7cUJBQ3JDLElBQUksQ0FBQztvQkFDRixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JBQ2xCLENBQUMsQ0FBQztxQkFDRCxLQUFLLEVBQUUsQ0FBQTtZQUVoQixDQUFDLENBQUMsRUFDRixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUN0QixDQUFBO1lBQ0QsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2lCQUNkLGFBQWEsQ0FBQyxDQUFDLENBQUM7aUJBQ2hCLEtBQUssRUFBRSxDQUFBO1NBQ2Y7UUFHRCxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztJQUVELDBCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDeEMsQ0FBQztJQTNGZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQThGMUI7SUFBRCxhQUFDO0NBOUZELEFBOEZDLENBOUZtQyxFQUFFLENBQUMsU0FBUyxHQThGL0M7a0JBOUZvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBnYW1lQmcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCAtPSA5OTk5O1xyXG5cclxuICAgICAgICBjYy5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS3og4zmma/nlJ/miJBcIik7XHJcbiAgICAgICAgbGV0IGQgPSBudWxsO1xyXG4gICAgICAgIGlmIChjb2Nvc3ouc2NlbmVNZ3Iuc2NlbmVOYW1lID09IFwiR2FtZVwiKSB7XHJcbiAgICAgICAgICAgIGQgPSBjYy50d2VlbigpLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY05vZGUxID0gY2MuaW5zdGFudGlhdGUodGhpcy5fQ2xvdWQxKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY05vZGUyID0gY2MuaW5zdGFudGlhdGUodGhpcy5fQ2xvdWQyKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9DbG91ZDEucGFyZW50LmFkZENoaWxkKGNOb2RlMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fQ2xvdWQxLnBhcmVudC5hZGRDaGlsZChjTm9kZTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNOb2RlMS55ID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgICAgICAgICAgICAgICAgICBjTm9kZTIueSA9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNOb2RlMS54IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjTm9kZTEueCAtPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY05vZGUxLnggKz0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjTm9kZTIueCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY05vZGUyLnggLT0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNOb2RlMi54ICs9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvczEgPSBjYy52MigoMjUwMCArIE1hdGgucmFuZG9tKCkgKiA1MDApICogY05vZGUxLnNjYWxlWCwgMClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvczIgPSBjYy52MigoMjUwMCArIE1hdGgucmFuZG9tKCkgKiA1MDApICogY05vZGUyLnNjYWxlWCwgMClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY05vZGUxLnggKj0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNOb2RlMS5zY2FsZVggKj0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvczEueCAqPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNOb2RlMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ5KDUwICsgNSAqIE1hdGgucmFuZG9tKCksIHsgcG9zaXRpb246IHBvczEgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY05vZGUxLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oY05vZGUyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnkoNTAgKyA1ICogTWF0aC5yYW5kb20oKSwgeyBwb3NpdGlvbjogcG9zMiB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjTm9kZTIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpLmRlbGF5KDUwKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkID0gY2MudHdlZW4oKS5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzQ2xvdWRcIiArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDcpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS54ID0gTWF0aC5yYW5kb20oKSAqIDUwMCAtIDI1MDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmJ5KDIwLCB7IHBvc2l0aW9uOiBjYy52MigwLCAtMzAwMCkgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5kZXN0cm95KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuZGVsYXkoNylcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihkKVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjYy5sb2coZCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNjLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLeiDjOaZr+mUgOavgVwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==