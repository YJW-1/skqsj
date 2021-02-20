
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/propMoveFloor3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2b219cPUXtIvokkluPjdwzj', 'propMoveFloor3');
// script/Game/propMoveFloor3.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var propMoveFloor3 = /** @class */ (function (_super) {
    __extends(propMoveFloor3, _super);
    function propMoveFloor3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.minDistance = 0;
        _this.maxDistance = 0;
        _this.pos = 0;
        _this.floor = null;
        _this.role = null;
        _this.btn = null;
        _this.btnSelect = null;
        _this.isStop = false;
        return _this;
        // update (dt) {}
    }
    propMoveFloor3.prototype.onInitDistance = function () {
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 15) {
            this.minDistance = -300;
            this.maxDistance = 1;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    propMoveFloor3.prototype.onLoad = function () {
        this.btn = this.node.getChildByName("btn");
        this.floor = this.node.parent.getChildByName("floor7");
        this.btnSelect = this.btn.getChildByName("btnSelect");
    };
    propMoveFloor3.prototype.start = function () {
        var _this = this;
        this.onInitDistance();
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            var pos2 = _this.node.parent.convertToNodeSpaceAR(event.getLocation());
            var pos = cc.v2((Math.ceil(_this.node.x - pos2.x)), Math.ceil(_this.node.y - pos2.y));
            _this.pos = pos;
            _this.btnSelect.active = true;
        });
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var pos2 = _this.node.parent.convertToNodeSpaceAR(event.getLocation());
            var pos = cc.v2(_this.node.x - pos2.x, _this.node.y - pos2.y);
            var hd = pos.signAngle(_this.pos);
            var angle = Math.ceil(hd / Math.PI * 180);
            _this.pos = pos;
            _this.btn.angle -= angle;
            var dis = 0;
            if (_this.floor) {
                dis = _this.floor.x + angle * 0.1;
            }
            // cc.log(dis, "-------------angle");
            if (angle == 0 || angle == -0)
                return;
            if (dis >= _this.minDistance && dis <= _this.maxDistance) {
                if (_this.floor) {
                    _this.floor.x = dis;
                }
            }
        });
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            _this.btnSelect.active = false;
        });
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            _this.btnSelect.active = false;
        });
    };
    propMoveFloor3 = __decorate([
        ccclass
    ], propMoveFloor3);
    return propMoveFloor3;
}(cc.Component));
exports.default = propMoveFloor3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxwcm9wTW92ZUZsb29yMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQTZDO0FBR3ZDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFEeEQ7UUFBQSxxRUFpRUM7UUE5REcsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsU0FBRyxHQUFRLENBQUMsQ0FBQztRQUNiLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUNyQixTQUFHLEdBQVksSUFBSSxDQUFDO1FBQ3BCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsWUFBTSxHQUFZLEtBQUssQ0FBQzs7UUFzRHhCLGlCQUFpQjtJQUNyQixDQUFDO0lBdERHLHVDQUFjLEdBQWQ7UUFDSSxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUVELHdCQUF3QjtJQUV4QiwrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFHRCw4QkFBSyxHQUFMO1FBQUEsaUJBbUNDO1FBbENHLElBQUksQ0FB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bEM7SUFBRCxxQkFBQztDQWhFRCxBQWdFQyxDQWhFMkMsRUFBRSxDQUFDLFNBQVMsR0FnRXZEO2tCQWhFb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29jb3NaXCI7XHJcbmltcG9ydCB7IHRhZyB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uc3RhbnRcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwcm9wTW92ZUZsb29yMyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgbWluRGlzdGFuY2U6IG51bWJlciA9IDA7XHJcbiAgICBtYXhEaXN0YW5jZTogbnVtYmVyID0gMDtcclxuICAgIHBvczogYW55ID0gMDtcclxuICAgIGZsb29yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHJvbGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgYnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGJ0blNlbGVjdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBpc1N0b3A6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG9uSW5pdERpc3RhbmNlKCkge1xyXG4gICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDE1KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWluRGlzdGFuY2UgPSAtMzAwO1xyXG4gICAgICAgICAgICB0aGlzLm1heERpc3RhbmNlID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuYnRuID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuXCIpO1xyXG4gICAgICAgIHRoaXMuZmxvb3IgPSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwiZmxvb3I3XCIpO1xyXG4gICAgICAgIHRoaXMuYnRuU2VsZWN0ID0gdGhpcy5idG4uZ2V0Q2hpbGRCeU5hbWUoXCJidG5TZWxlY3RcIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMub25Jbml0RGlzdGFuY2UoKVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwb3MyID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IGNjLnYyKChNYXRoLmNlaWwodGhpcy5ub2RlLnggLSBwb3MyLngpKSwgTWF0aC5jZWlsKHRoaXMubm9kZS55IC0gcG9zMi55KSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgICAgICAgICB0aGlzLmJ0blNlbGVjdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcG9zMiA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBjYy52Mih0aGlzLm5vZGUueCAtIHBvczIueCwgdGhpcy5ub2RlLnkgLSBwb3MyLnkpO1xyXG4gICAgICAgICAgICBsZXQgaGQgPSBwb3Muc2lnbkFuZ2xlKHRoaXMucG9zKTtcclxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5jZWlsKGhkIC8gTWF0aC5QSSAqIDE4MCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zID0gcG9zO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5idG4uYW5nbGUgLT0gYW5nbGU7XHJcbiAgICAgICAgICAgIGxldCBkaXMgPSAwXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZsb29yKSB7XHJcbiAgICAgICAgICAgICAgICBkaXMgPSB0aGlzLmZsb29yLnggKyBhbmdsZSAqIDAuMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gY2MubG9nKGRpcywgXCItLS0tLS0tLS0tLS0tYW5nbGVcIik7XHJcbiAgICAgICAgICAgIGlmIChhbmdsZSA9PSAwIHx8IGFuZ2xlID09IC0wKSByZXR1cm5cclxuICAgICAgICAgICAgaWYgKGRpcyA+PSB0aGlzLm1pbkRpc3RhbmNlICYmIGRpcyA8PSB0aGlzLm1heERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mbG9vcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmxvb3IueCA9IGRpcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuU2VsZWN0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuU2VsZWN0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=