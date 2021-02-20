
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/laser.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1b47aP9kxpC47GTyJH9BzBb', 'laser');
// script/Game/laser.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var laser = /** @class */ (function (_super) {
    __extends(laser, _super);
    function laser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.laserEffect = null;
        _this.isDes = false;
        return _this;
    }
    laser.prototype.onRayCast = function () {
        var _this = this;
        if (this.isDes)
            return;
        var startPos = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
        var endPos = cc.v2(0, 0);
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 71 || CocosZ_1.cocosz.dataMgr.CurLevelId == 79 || CocosZ_1.cocosz.dataMgr.CurLevelId == 87 ||
            CocosZ_1.cocosz.dataMgr.CurLevelId == 90 || CocosZ_1.cocosz.dataMgr.CurLevelId == 95 || CocosZ_1.cocosz.dataMgr.CurLevelId == 96) {
            if (CocosZ_1.cocosz.dataMgr.CurLevelId == 95) {
                if (this.node.parent.angle != 180) {
                    this.node.parent.angle = 270;
                }
            }
            else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 96) {
                if (this.node.parent.angle != 0) {
                    this.node.parent.angle = 270;
                }
            }
            else {
                this.node.parent.angle = 270;
            }
        }
        if (this.node.parent.angle == 0) {
            endPos = cc.v2(startPos.x + 1500, startPos.y);
        }
        else if (this.node.parent.angle == 180) {
            endPos = cc.v2(startPos.x - 1500, startPos.y);
        }
        else if (this.node.parent.angle == 90) {
            endPos = cc.v2(startPos.x, startPos.y + 1500);
        }
        else if (this.node.parent.angle == 270) {
            endPos = cc.v2(startPos.x, startPos.y - 1500);
        }
        var result = CocosZ_1.cocosz.gameMgr.onRayCast(startPos, endPos);
        // cc.log(this.node.parent.angle, startPos.x, startPos.y, endPos.x, endPos.y, result[0].collider.node.name);
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var rb = result_1[_i];
            var CTag = rb.collider.tag;
            var node = rb.collider.node;
            if (CTag == 0 || CTag == Constant_1.tag.moveFloor || CTag == Constant_1.tag.stone || CTag == Constant_1.tag.stone3 || CTag == Constant_1.tag.cloud || (CTag == Constant_1.tag.floorThorn && node.name == "floor19")) {
                var point = rb.point;
                var w = startPos.x - point.x;
                if (this.node.parent.angle == 90 || this.node.parent.angle == 270) {
                    w = startPos.y - point.y;
                }
                this.node.width = Math.abs(w) / this.node.parent.scaleX;
                this.laserEffect.x = this.node.width + 45 + 7;
                return;
            }
            else if (CTag == Constant_1.tag.balloon || CTag == Constant_1.tag.rope || CTag == Constant_1.tag.player) {
                if (CTag == Constant_1.tag.balloon && node.parent.parent.name == "role") {
                    var sc = node.getComponent("balloon");
                    sc.onDesByLaser();
                }
                else if (CTag == Constant_1.tag.rope) {
                    var sc = node.getChildByName("balloon").getComponent("balloon");
                    sc.onDesByLaser();
                }
                else if (CTag == Constant_1.tag.player) {
                    var parent = node.parent;
                    if (parent.name != "role") {
                        parent = parent.parent;
                    }
                    for (var _a = 0, _b = node.parent.children; _a < _b.length; _a++) {
                        var child = _b[_a];
                        if (child.name == "right_balloon" || child.name == "left_balloon")
                            continue;
                        child.color = cc.color(0, 0, 0, 255);
                        for (var _c = 0, _d = child.children; _c < _d.length; _c++) {
                            var child2 = _d[_c];
                            child2.color = cc.color(0, 0, 0, 255);
                            if (child.children.length > 0) {
                                for (var _e = 0, _f = child2.children; _e < _f.length; _e++) {
                                    var child3 = _f[_e];
                                    child3.color = cc.color(0, 0, 0, 255);
                                }
                            }
                        }
                    }
                    cc.game.emit(Constant_1.default.E_GAME_FAID);
                }
            }
            else if (CTag == Constant_1.tag.thorn || (CTag == Constant_1.tag.floorThorn && node.name != "floor19") || CTag == Constant_1.tag.honeybee) {
                var point = rb.point;
                var pos = this.node.parent.convertToNodeSpaceAR(point);
                var prefab = CocosZ_1.cocosz.resMgr.getRes("laserEffect", cc.Prefab);
                var node2 = cc.instantiate(prefab);
                node2.setPosition(pos);
                this.node.parent.addChild(node2);
                node.destroy();
            }
            else if (CTag == Constant_1.tag.balloon2) {
                node.destroy();
            }
            else if (CTag == Constant_1.tag.laser) {
                cc.log("激光销毁--------------------");
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 135)
                    return;
                cc.log("激光销毁2--------------------");
                this.isDes = true;
                this.scheduleOnce(function () {
                    _this.node.parent.destroy();
                }, 0.1);
            }
        }
        this.node.width = 1975;
    };
    // LIFE-CYCLE CALLBACKS:
    laser.prototype.onEnable = function () {
        var box = this.node.parent.getComponent(cc.PhysicsBoxCollider);
        box.apply();
    };
    laser.prototype.onDestroy = function () {
        cc.log("激光销毁----");
    };
    laser.prototype.onLoad = function () {
        this.laserEffect = this.node.parent.getChildByName("laserEffect");
    };
    laser.prototype.start = function () {
    };
    laser.prototype.update = function (dt) {
        this.onRayCast();
    };
    laser = __decorate([
        ccclass
    ], laser);
    return laser;
}(cc.Component));
exports.default = laser;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxsYXNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQTZDO0FBQzdDLGtEQUFzRDtBQUVoRCxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBRC9DO1FBQUEscUVBaUlDO1FBN0hHLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLFdBQUssR0FBWSxLQUFLLENBQUM7O0lBNEgzQixDQUFDO0lBM0hHLHlCQUFTLEdBQVQ7UUFBQSxpQkFvR0M7UUFuR0csSUFBSSxJQUFJLENBQUMsS0FBSztZQUFFLE9BQU87UUFDdkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksRUFBRSxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUUsSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxFQUFFO1lBQ3JHLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUUsSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxFQUFFLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksRUFBRSxFQUFFO1lBQ3ZHLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksRUFBRSxFQUFFO2dCQUNqQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxHQUFHLEVBQUU7b0JBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsTUFB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QUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3RCLENBQUM7SUFFRCxzQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELHFCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQsc0JBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQS9IZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQWdJekI7SUFBRCxZQUFDO0NBaElELEFBZ0lDLENBaElrQyxFQUFFLENBQUMsU0FBUyxHQWdJOUM7a0JBaElvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuaW1wb3J0IENvbnN0YW50LCB7IHRhZyB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uc3RhbnRcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsYXNlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cclxuICAgIGxhc2VyRWZmZWN0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGlzRGVzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBvblJheUNhc3QoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEZXMpIHJldHVybjtcclxuICAgICAgICBsZXQgc3RhcnRQb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgbGV0IGVuZFBvcyA9IGNjLnYyKDAsIDApO1xyXG4gICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDcxIHx8IGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gNzkgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA4NyB8fFxyXG4gICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDkwIHx8IGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gOTUgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA5Nikge1xyXG4gICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA5NSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnQuYW5nbGUgIT0gMTgwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hbmdsZSA9IDI3MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDk2KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlLnBhcmVudC5hbmdsZSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hbmdsZSA9IDI3MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuYW5nbGUgPSAyNzA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnQuYW5nbGUgPT0gMCkge1xyXG4gICAgICAgICAgICBlbmRQb3MgPSBjYy52MihzdGFydFBvcy54ICsgMTUwMCwgc3RhcnRQb3MueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMubm9kZS5wYXJlbnQuYW5nbGUgPT0gMTgwKSB7XHJcbiAgICAgICAgICAgIGVuZFBvcyA9IGNjLnYyKHN0YXJ0UG9zLnggLSAxNTAwLCBzdGFydFBvcy55KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5ub2RlLnBhcmVudC5hbmdsZSA9PSA5MCkge1xyXG4gICAgICAgICAgICBlbmRQb3MgPSBjYy52MihzdGFydFBvcy54LCBzdGFydFBvcy55ICsgMTUwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMubm9kZS5wYXJlbnQuYW5nbGUgPT0gMjcwKSB7XHJcbiAgICAgICAgICAgIGVuZFBvcyA9IGNjLnYyKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkgLSAxNTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGNvY29zei5nYW1lTWdyLm9uUmF5Q2FzdChzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICAvLyBjYy5sb2codGhpcy5ub2RlLnBhcmVudC5hbmdsZSwgc3RhcnRQb3MueCwgc3RhcnRQb3MueSwgZW5kUG9zLngsIGVuZFBvcy55LCByZXN1bHRbMF0uY29sbGlkZXIubm9kZS5uYW1lKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgcmIgb2YgcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGxldCBDVGFnID0gcmIuY29sbGlkZXIudGFnO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IHJiLmNvbGxpZGVyLm5vZGU7XHJcbiAgICAgICAgICAgIGlmIChDVGFnID09IDAgfHwgQ1RhZyA9PSB0YWcubW92ZUZsb29yIHx8IENUYWcgPT0gdGFnLnN0b25lIHx8IENUYWcgPT0gdGFnLnN0b25lMyB8fCBDVGFnID09IHRhZy5jbG91ZCB8fCAoQ1RhZyA9PSB0YWcuZmxvb3JUaG9ybiAmJiBub2RlLm5hbWUgPT0gXCJmbG9vcjE5XCIpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9pbnQgPSByYi5wb2ludDtcclxuICAgICAgICAgICAgICAgIGxldCB3ID0gc3RhcnRQb3MueCAtIHBvaW50Lng7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlLnBhcmVudC5hbmdsZSA9PSA5MCB8fCB0aGlzLm5vZGUucGFyZW50LmFuZ2xlID09IDI3MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHcgPSBzdGFydFBvcy55IC0gcG9pbnQueTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS53aWR0aCA9IE1hdGguYWJzKHcpIC8gdGhpcy5ub2RlLnBhcmVudC5zY2FsZVg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc2VyRWZmZWN0LnggPSB0aGlzLm5vZGUud2lkdGggKyA0NSArIDdcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChDVGFnID09IHRhZy5iYWxsb29uIHx8IENUYWcgPT0gdGFnLnJvcGUgfHwgQ1RhZyA9PSB0YWcucGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQ1RhZyA9PSB0YWcuYmFsbG9vbiAmJiBub2RlLnBhcmVudC5wYXJlbnQubmFtZSA9PSBcInJvbGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzYyA9IG5vZGUuZ2V0Q29tcG9uZW50KFwiYmFsbG9vblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzYy5vbkRlc0J5TGFzZXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKENUYWcgPT0gdGFnLnJvcGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2MgPSBub2RlLmdldENoaWxkQnlOYW1lKFwiYmFsbG9vblwiKS5nZXRDb21wb25lbnQoXCJiYWxsb29uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjLm9uRGVzQnlMYXNlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoQ1RhZyA9PSB0YWcucGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmVudCA9IG5vZGUucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnQubmFtZSAhPSBcInJvbGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBub2RlLnBhcmVudC5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQubmFtZSA9PSBcInJpZ2h0X2JhbGxvb25cIiB8fCBjaGlsZC5uYW1lID09IFwibGVmdF9iYWxsb29uXCIpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5jb2xvciA9IGNjLmNvbG9yKDAsIDAsIDAsIDI1NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkMiBvZiBjaGlsZC5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQyLmNvbG9yID0gY2MuY29sb3IoMCwgMCwgMCwgMjU1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQzIG9mIGNoaWxkMi5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZDMuY29sb3IgPSBjYy5jb2xvcigwLCAwLCAwLCAyNTUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9HQU1FX0ZBSUQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoQ1RhZyA9PSB0YWcudGhvcm4gfHwgKENUYWcgPT0gdGFnLmZsb29yVGhvcm4gJiYgbm9kZS5uYW1lICE9IFwiZmxvb3IxOVwiKSB8fCBDVGFnID09IHRhZy5ob25leWJlZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvaW50ID0gcmIucG9pbnQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb2ludCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJsYXNlckVmZmVjdFwiLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUyID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIG5vZGUyLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKG5vZGUyKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKENUYWcgPT0gdGFnLmJhbGxvb24yKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChDVGFnID09IHRhZy5sYXNlcikge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwi5r+A5YWJ6ZSA5q+BLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcclxuICAgICAgICAgICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDEzNSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwi5r+A5YWJ6ZSA5q+BMi0tLS0tLS0tLS0tLS0tLS0tLS0tXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0sIDAuMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUud2lkdGggPSAxOTc1O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIGxldCBib3ggPSB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xyXG4gICAgICAgIGJveC5hcHBseSgpO1xyXG4gICAgfVxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNjLmxvZyhcIua/gOWFiemUgOavgS0tLS1cIilcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5sYXNlckVmZmVjdCA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJsYXNlckVmZmVjdFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgdGhpcy5vblJheUNhc3QoKTtcclxuICAgIH1cclxufVxyXG4iXX0=