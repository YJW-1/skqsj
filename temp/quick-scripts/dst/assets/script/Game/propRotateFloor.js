
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/propRotateFloor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '40496lkSGxEooXkFLCc4CQ5', 'propRotateFloor');
// script/Game/propRotateFloor.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var propMoveFloor10 = /** @class */ (function (_super) {
    __extends(propMoveFloor10, _super);
    function propMoveFloor10() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.minAngle = 0;
        _this.maxAngle = 0;
        _this.pos = 0;
        _this.floor = null;
        _this.role = null;
        _this.btn = null;
        _this.btnSelect = null;
        _this.isStop = false;
        return _this;
        // update (dt) {}
    }
    propMoveFloor10.prototype.onInitDistance = function () {
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 44) {
            this.minAngle = -55;
            this.maxAngle = 90;
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 74) {
            this.minAngle = -180;
            this.maxAngle = -90;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    propMoveFloor10.prototype.onLoad = function () {
        this.btnSelect = this.node.getChildByName("btn").getChildByName("btnSelect");
        this.btn = this.node.getChildByName("btn");
        this.floor = this.node.getChildByName("floor");
    };
    propMoveFloor10.prototype.start = function () {
        var _this = this;
        this.onInitDistance();
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            var pp = event.getLocation();
            pp.y += 1600 * CocosZ_1.cocosz.gameMgr.touchNum;
            var pos2 = _this.node.parent.convertToNodeSpaceAR(pp);
            var pos = cc.v2((Math.ceil(_this.node.x - pos2.x)), Math.ceil(_this.node.y - pos2.y));
            _this.pos = pos;
            _this.btnSelect.active = true;
        });
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var pp = event.getLocation();
            pp.y += 1600 * CocosZ_1.cocosz.gameMgr.touchNum;
            var pos2 = _this.node.parent.convertToNodeSpaceAR(pp);
            var pos = cc.v2(_this.node.x - pos2.x, _this.node.y - pos2.y);
            var hd = pos.signAngle(_this.pos);
            var angle = Math.ceil(hd / Math.PI * 180);
            _this.pos = pos;
            _this.btn.angle -= angle;
            // cc.log(pos.x, pos.y, angle)
            if (angle == 0 || angle == -0)
                return;
            if (CocosZ_1.cocosz.dataMgr.CurLevelId == 44 || CocosZ_1.cocosz.dataMgr.CurLevelId == 74) {
                // cc.log(this.floor.angle, this.minAngle, this.maxAngle, angle)
                if (_this.floor) {
                    if ((_this.floor.angle <= _this.minAngle && angle > 0) || (_this.floor.angle >= _this.maxAngle && angle < 0))
                        return;
                }
            }
            var rb = null;
            if (_this.floor) {
                rb = _this.floor.getComponent(cc.RigidBody);
            }
            rb.angularVelocity = 30 * angle / Math.abs(angle);
            // if (cocosz.dataMgr.CurLevelId == 85) {
            //     rb.angularVelocity = 70 * angle / Math.abs(angle);
            // }
            // cc.log(angle, rb.angularVelocity, "----------")
        });
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            _this.btnSelect.active = false;
        });
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            _this.btnSelect.active = false;
        });
    };
    propMoveFloor10 = __decorate([
        ccclass
    ], propMoveFloor10);
    return propMoveFloor10;
}(cc.Component));
exports.default = propMoveFloor10;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxwcm9wUm90YXRlRmxvb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUd2QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBRHpEO1FBQUEscUVBd0ZDO1FBckZHLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsY0FBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixTQUFHLEdBQVEsQ0FBQyxDQUFDO1FBQ2IsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFDcEIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixZQUFNLEdBQVksS0FBSyxDQUFDOztRQTZFeEIsaUJBQWlCO0lBQ3JCLENBQUM7SUE3RUcsd0NBQWMsR0FBZDtRQUNJLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7U0FDdEI7YUFDSSxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUM7U0FDdkI7SUFDTCxDQUFDO0lBRUQsd0JBQXdCO0lBRXhCLGdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENB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cEg7YUFDSjtZQUdELElBQUksRUFBRSxHQUFHLElBQUksQ0FBQTtZQUNiLElBQUksS0FBSSxDQUFDLEtBQUssRUFBRTtnQkFDWixFQUFFLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQzlDO1lBQ0QsRUFBRSxDQUFDLGVBQWUsR0FBRyxFQUFFLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEQseUNBQXlDO1lBRXpDLHlEQUF5RDtZQUN6RCxJQUFJO1lBQ0osa0RBQWtEO1FBQ3RELENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFVBQUMsS0FBSztZQUMvQyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsVUFBQyxLQUFLO1lBQzVDLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFwRmdCLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0F1Rm5DO0lBQUQsc0JBQUM7Q0F2RkQsQUF1RkMsQ0F2RjRDLEVBQUUsQ0FBQyxTQUFTLEdBdUZ4RDtrQkF2Rm9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5pbXBvcnQgeyB0YWcgfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvbnN0YW50XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJvcE1vdmVGbG9vcjEwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBtaW5BbmdsZTogbnVtYmVyID0gMDtcclxuICAgIG1heEFuZ2xlOiBudW1iZXIgPSAwO1xyXG4gICAgcG9zOiBhbnkgPSAwO1xyXG4gICAgZmxvb3I6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcm9sZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBidG46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgYnRuU2VsZWN0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGlzU3RvcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgb25Jbml0RGlzdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gNDQpIHtcclxuICAgICAgICAgICAgdGhpcy5taW5BbmdsZSA9IC01NTtcclxuICAgICAgICAgICAgdGhpcy5tYXhBbmdsZSA9IDkwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDc0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWluQW5nbGUgPSAtMTgwO1xyXG4gICAgICAgICAgICB0aGlzLm1heEFuZ2xlID0gLTkwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5idG5TZWxlY3QgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5cIikuZ2V0Q2hpbGRCeU5hbWUoXCJidG5TZWxlY3RcIik7XHJcbiAgICAgICAgdGhpcy5idG4gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5cIik7XHJcbiAgICAgICAgdGhpcy5mbG9vciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImZsb29yXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm9uSW5pdERpc3RhbmNlKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQ6IGNjLlRvdWNoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwcCA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIHBwLnkgKz0gMTYwMCAqIGNvY29zei5nYW1lTWdyLnRvdWNoTnVtO1xyXG4gICAgICAgICAgICBsZXQgcG9zMiA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocHApO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gY2MudjIoKE1hdGguY2VpbCh0aGlzLm5vZGUueCAtIHBvczIueCkpLCBNYXRoLmNlaWwodGhpcy5ub2RlLnkgLSBwb3MyLnkpKTtcclxuICAgICAgICAgICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuU2VsZWN0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwcCA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBwcC55ICs9IDE2MDAgKiBjb2Nvc3ouZ2FtZU1nci50b3VjaE51bTtcclxuICAgICAgICAgICAgbGV0IHBvczIgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBwKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBjYy52Mih0aGlzLm5vZGUueCAtIHBvczIueCwgdGhpcy5ub2RlLnkgLSBwb3MyLnkpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgaGQgPSBwb3Muc2lnbkFuZ2xlKHRoaXMucG9zKTtcclxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5jZWlsKGhkIC8gTWF0aC5QSSAqIDE4MCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zID0gcG9zO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5idG4uYW5nbGUgLT0gYW5nbGU7XHJcblxyXG4gICAgICAgICAgICAvLyBjYy5sb2cocG9zLngsIHBvcy55LCBhbmdsZSlcclxuICAgICAgICAgICAgaWYgKGFuZ2xlID09IDAgfHwgYW5nbGUgPT0gLTApIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gNDQgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA3NCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKHRoaXMuZmxvb3IuYW5nbGUsIHRoaXMubWluQW5nbGUsIHRoaXMubWF4QW5nbGUsIGFuZ2xlKVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZsb29yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCh0aGlzLmZsb29yLmFuZ2xlIDw9IHRoaXMubWluQW5nbGUgJiYgYW5nbGUgPiAwKSB8fCAodGhpcy5mbG9vci5hbmdsZSA+PSB0aGlzLm1heEFuZ2xlICYmIGFuZ2xlIDwgMCkpIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCByYiA9IG51bGxcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmxvb3IpIHtcclxuICAgICAgICAgICAgICAgIHJiID0gdGhpcy5mbG9vci5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByYi5hbmd1bGFyVmVsb2NpdHkgPSAzMCAqIGFuZ2xlIC8gTWF0aC5hYnMoYW5nbGUpO1xyXG4gICAgICAgICAgICAvLyBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA4NSkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgIHJiLmFuZ3VsYXJWZWxvY2l0eSA9IDcwICogYW5nbGUgLyBNYXRoLmFicyhhbmdsZSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gY2MubG9nKGFuZ2xlLCByYi5hbmd1bGFyVmVsb2NpdHksIFwiLS0tLS0tLS0tLVwiKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuU2VsZWN0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuU2VsZWN0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=