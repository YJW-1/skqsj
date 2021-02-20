
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/propMoveFloor12.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cc271gnmXNFOZJHJJTBz+4Q', 'propMoveFloor12');
// script/Game/propMoveFloor12.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var propMoveFloor = /** @class */ (function (_super) {
    __extends(propMoveFloor, _super);
    function propMoveFloor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.minDistance = 0;
        _this.maxDistance = 0;
        _this.pos = 0;
        _this.floor = null;
        _this.role = null;
        _this.btn = null;
        _this.btnSelect = null;
        _this.isStop = false;
        _this.isFirstMove = false;
        return _this;
    }
    propMoveFloor.prototype.onInitDistance = function () {
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 5) {
            this.minDistance = -158;
            this.maxDistance = -70;
        }
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 114 || CocosZ_1.cocosz.dataMgr.CurLevelId == 115 || CocosZ_1.cocosz.dataMgr.CurLevelId == 117) {
            this.minDistance = -175;
            this.maxDistance = -20;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    propMoveFloor.prototype.onLoad = function () {
        this.btn = this.node.getChildByName("btn");
        this.floor = this.node.getChildByName("floor");
        this.btnSelect = this.btn.getChildByName("btnSelect");
        cc.log(this.floor.x, this.floor.y);
    };
    propMoveFloor.prototype.start = function () {
        var _this = this;
        this.onInitDistance();
        this.btn.on(cc.Node.EventType.TOUCH_START, function (event) {
            var pos2 = _this.node.parent.convertToNodeSpaceAR(event.getLocation());
            var pos = cc.v2((Math.ceil(_this.node.x - pos2.x)), Math.ceil(_this.node.y - pos2.y));
            _this.pos = pos;
            _this.btnSelect.active = true;
        });
        this.btn.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var pos2 = _this.node.parent.convertToNodeSpaceAR(event.getLocation());
            var pos = cc.v2(_this.node.x - pos2.x, _this.node.y - pos2.y);
            var hd = pos.signAngle(_this.pos);
            var angle = Math.ceil(hd / Math.PI * 180);
            _this.pos = pos;
            _this.btn.angle -= angle;
            var dis = 0;
            if (_this.floor) {
                dis = _this.floor.y + angle * 0.1;
            }
            // cc.log(angle, dis, this.floor.y, "-------------angle");
            if (angle == 0 || angle == -0)
                return;
            if (dis >= _this.minDistance && dis <= _this.maxDistance) {
                if (_this.floor) {
                    _this.floor.y = dis;
                }
            }
        });
        this.btn.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            _this.btnSelect.active = false;
        });
        this.btn.on(cc.Node.EventType.TOUCH_END, function (event) {
            _this.btnSelect.active = false;
        });
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 5) {
            this.node.getChildByName("direction").scaleX *= -1;
        }
    };
    propMoveFloor.prototype.update = function (dt) {
        // if (this.isTouch) return;
        // if (this.x > -999) {
        //     if (this.x > this.node.x) {
        //         let v = this.rb.linearVelocity;
        //         v.x = 100;
        //     }
        // }
    };
    propMoveFloor = __decorate([
        ccclass
    ], propMoveFloor);
    return propMoveFloor;
}(cc.Component));
exports.default = propMoveFloor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxwcm9wTW92ZUZsb29yMTIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUd2QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBRHZEO1FBQUEscUVBc0ZDO1FBcEZHLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLFNBQUcsR0FBUSxDQUFDLENBQUM7UUFDYixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUNwQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsaUJBQVcsR0FBRyxLQUFLLENBQUM7O0lBNEV4QixDQUFDO0lBeEVHLHNDQUFjLEdBQWQ7UUFDSSxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxFQUFFLENBQUM7U0FDMUI7UUFDRCxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEdBQUcsSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxHQUFHLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksR0FBRyxFQUFFO1lBQzFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLEVBQUUsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFFRCx3QkFBd0I7SUFFeEIsOEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElB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QUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFVBQUMsS0FBSztZQUM5QyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsVUFBQyxLQUFLO1lBQzNDLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQztTQUN0RDtJQUNMLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLDRCQUE0QjtRQUM1Qix1QkFBdUI7UUFDdkIsa0NBQWtDO1FBQ2xDLDBDQUEwQztRQUMxQyxxQkFBcUI7UUFDckIsUUFBUTtRQUNSLElBQUk7SUFDUixDQUFDO0lBcEZnQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBcUZqQztJQUFELG9CQUFDO0NBckZELEFBcUZDLENBckYwQyxFQUFFLENBQUMsU0FBUyxHQXFGdEQ7a0JBckZvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuaW1wb3J0IENvbnN0YW50LCB7IHRhZyB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uc3RhbnRcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwcm9wTW92ZUZsb29yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIG1pbkRpc3RhbmNlOiBudW1iZXIgPSAwO1xyXG4gICAgbWF4RGlzdGFuY2U6IG51bWJlciA9IDA7XHJcbiAgICBwb3M6IGFueSA9IDA7XHJcbiAgICBmbG9vcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICByb2xlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGJ0bjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBidG5TZWxlY3Q6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgaXNTdG9wOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc0ZpcnN0TW92ZSA9IGZhbHNlO1xyXG5cclxuXHJcblxyXG4gICAgb25Jbml0RGlzdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gNSkge1xyXG4gICAgICAgICAgICB0aGlzLm1pbkRpc3RhbmNlID0gLTE1ODtcclxuICAgICAgICAgICAgdGhpcy5tYXhEaXN0YW5jZSA9IC03MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTE0IHx8IGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTE1IHx8IGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTE3KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWluRGlzdGFuY2UgPSAtMTc1O1xyXG4gICAgICAgICAgICB0aGlzLm1heERpc3RhbmNlID0gLTIwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5idG4gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5cIik7XHJcbiAgICAgICAgdGhpcy5mbG9vciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImZsb29yXCIpO1xyXG4gICAgICAgIHRoaXMuYnRuU2VsZWN0ID0gdGhpcy5idG4uZ2V0Q2hpbGRCeU5hbWUoXCJidG5TZWxlY3RcIik7XHJcbiAgICAgICAgY2MubG9nKHRoaXMuZmxvb3IueCwgdGhpcy5mbG9vci55KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5vbkluaXREaXN0YW5jZSgpO1xyXG4gICAgICAgIHRoaXMuYnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBvczIgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gY2MudjIoKE1hdGguY2VpbCh0aGlzLm5vZGUueCAtIHBvczIueCkpLCBNYXRoLmNlaWwodGhpcy5ub2RlLnkgLSBwb3MyLnkpKTtcclxuICAgICAgICAgICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuU2VsZWN0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBvczIgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gY2MudjIodGhpcy5ub2RlLnggLSBwb3MyLngsIHRoaXMubm9kZS55IC0gcG9zMi55KTtcclxuICAgICAgICAgICAgbGV0IGhkID0gcG9zLnNpZ25BbmdsZSh0aGlzLnBvcyk7XHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IE1hdGguY2VpbChoZCAvIE1hdGguUEkgKiAxODApO1xyXG4gICAgICAgICAgICB0aGlzLnBvcyA9IHBvcztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnRuLmFuZ2xlIC09IGFuZ2xlO1xyXG4gICAgICAgICAgICBsZXQgZGlzID0gMDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmxvb3IpIHtcclxuICAgICAgICAgICAgICAgIGRpcyA9IHRoaXMuZmxvb3IueSArIGFuZ2xlICogMC4xO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjYy5sb2coYW5nbGUsIGRpcywgdGhpcy5mbG9vci55LCBcIi0tLS0tLS0tLS0tLS1hbmdsZVwiKTtcclxuICAgICAgICAgICAgaWYgKGFuZ2xlID09IDAgfHwgYW5nbGUgPT0gLTApIHJldHVyblxyXG4gICAgICAgICAgICBpZiAoZGlzID49IHRoaXMubWluRGlzdGFuY2UgJiYgZGlzIDw9IHRoaXMubWF4RGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZsb29yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mbG9vci55ID0gZGlzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJ0blNlbGVjdC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuYnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuU2VsZWN0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDUpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZGlyZWN0aW9uXCIpLnNjYWxlWCAqPSAtMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaXNUb3VjaCkgcmV0dXJuO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnggPiAtOTk5KSB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnggPiB0aGlzLm5vZGUueCkge1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IHYgPSB0aGlzLnJiLmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgIC8vICAgICAgICAgdi54ID0gMTAwO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==