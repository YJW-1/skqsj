
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/QMoveAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5090d6Sv0FLILG+ctiSUELg', 'QMoveAction');
// script/Framework/QMoveAction.ts

Object.defineProperty(exports, "__esModule", { value: true });
var QEasing_1 = require("./QEasing");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var QMoveAction = /** @class */ (function (_super) {
    __extends(QMoveAction, _super);
    function QMoveAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delay = 0;
        _this.delPos = cc.Vec2.ZERO;
        _this.duration = 0;
        _this.interval = 0;
        _this.loop = false;
        _this.revert = false;
        _this._tween = null;
        _this._originPos = cc.Vec2.ZERO;
        return _this;
    }
    QMoveAction.prototype.onLoad = function () {
        var _this = this;
        this._originPos = cc.v2(this.node.x, this.node.y);
        this.node.position = cc.v2(this._originPos.x - this.delPos.x, this._originPos.y - this.delPos.y);
        var widget = this.getComponent(cc.Widget);
        if (widget) {
            widget.enabled = false;
        }
        var delayTween = cc.tween().delay(this.delay);
        var actionTween = cc.tween();
        actionTween.call(function () {
            _this.node.position = cc.v2(_this._originPos.x - _this.delPos.x, _this._originPos.y - _this.delPos.y);
        });
        if (this.revert) {
            actionTween.by(this.duration * 0.5, { position: cc.v2(this.delPos.x, this.delPos.y) }, { easing: this._getEase() });
            actionTween.by(this.duration * 0.5, { position: cc.v2(-this.delPos.x, -this.delPos.y) }, { easing: this._getEase() });
        }
        else {
            actionTween.by(this.duration, { position: cc.v2(this.delPos.x, this.delPos.y) }, { easing: this._getEase() });
        }
        actionTween.delay(this.interval);
        this._tween = cc.tween(this.node);
        this._tween.then(delayTween);
        this._tween.then(actionTween);
        if (this.loop) {
            this._tween.repeatForever();
        }
    };
    QMoveAction.prototype.onEnable = function () {
        this.node.position = cc.v2(this._originPos.x - this.delPos.x, this._originPos.y - this.delPos.y);
        this._tween.start();
    };
    __decorate([
        property()
    ], QMoveAction.prototype, "delay", void 0);
    __decorate([
        property(cc.Vec2)
    ], QMoveAction.prototype, "delPos", void 0);
    __decorate([
        property()
    ], QMoveAction.prototype, "duration", void 0);
    __decorate([
        property()
    ], QMoveAction.prototype, "interval", void 0);
    __decorate([
        property()
    ], QMoveAction.prototype, "loop", void 0);
    __decorate([
        property()
    ], QMoveAction.prototype, "revert", void 0);
    QMoveAction = __decorate([
        ccclass
    ], QMoveAction);
    return QMoveAction;
}(QEasing_1.default));
exports.default = QMoveAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFFNb3ZlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBOEM7QUFFeEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUk1QztJQUF5QywrQkFBTztJQURoRDtRQUFBLHFFQThEQztRQXpERyxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLFlBQU0sR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUcvQixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFHckIsVUFBSSxHQUFZLEtBQUssQ0FBQztRQUd0QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBRWhCLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFDeEIsZ0JBQVUsR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzs7SUF1Qy9DLENBQUM7SUFyQ0csNEJBQU0sR0FBTjtRQUFBLGlCQTRCQztRQTNCRyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFakcsSUFBSSxNQUFNLEdBQWMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsSUFBSSxNQUFNLEVBQUU7WUFDUixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUMxQjtRQUVELElBQUksVUFBVSxHQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hELElBQUksV0FBVyxHQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQ2IsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JHLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3BILFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDekg7YUFBTTtZQUNILFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ2pIO1FBQ0QsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUVELDhCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBckREO1FBREMsUUFBUSxFQUFFOzhDQUNPO0lBR2xCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ2E7SUFHL0I7UUFEQyxRQUFRLEVBQUU7aURBQ1U7SUFHckI7UUFEQyxRQUFRLEVBQUU7aURBQ1U7SUFHckI7UUFEQyxRQUFRLEVBQUU7NkNBQ1c7SUFHdEI7UUFEQyxRQUFRLEVBQUU7K0NBQ2E7SUFuQlAsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTZEL0I7SUFBRCxrQkFBQztDQTdERCxBQTZEQyxDQTdEd0MsaUJBQU8sR0E2RC9DO2tCQTdEb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBRRWFzaW5nLCB7IEVhc2VUeXBlIH0gZnJvbSBcIi4vUUVhc2luZ1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRTW92ZUFjdGlvbiBleHRlbmRzIFFFYXNpbmcge1xyXG5cclxuIFxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIGRlbGF5OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5WZWMyKVxyXG4gICAgZGVsUG9zOiBjYy5WZWMyID0gY2MuVmVjMi5aRVJPO1xyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBkdXJhdGlvbjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgaW50ZXJ2YWw6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIGxvb3A6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgcmV2ZXJ0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBfdHdlZW46IGNjLlR3ZWVuID0gbnVsbDtcclxuICAgIHByaXZhdGUgX29yaWdpblBvczogY2MuVmVjMiA9IGNjLlZlYzIuWkVSTztcclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICB0aGlzLl9vcmlnaW5Qb3MgPSBjYy52Mih0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYyKHRoaXMuX29yaWdpblBvcy54IC0gdGhpcy5kZWxQb3MueCwgdGhpcy5fb3JpZ2luUG9zLnkgLSB0aGlzLmRlbFBvcy55KTtcclxuXHJcbiAgICAgICAgbGV0IHdpZGdldDogY2MuV2lkZ2V0ID0gdGhpcy5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgICAgICBpZiAod2lkZ2V0KSB7XHJcbiAgICAgICAgICAgIHdpZGdldC5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGVsYXlUd2VlbjogY2MuVHdlZW4gPSBjYy50d2VlbigpLmRlbGF5KHRoaXMuZGVsYXkpO1xyXG4gICAgICAgIGxldCBhY3Rpb25Ud2VlbjogY2MuVHdlZW4gPSBjYy50d2VlbigpO1xyXG4gICAgICAgIGFjdGlvblR3ZWVuLmNhbGwoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjIodGhpcy5fb3JpZ2luUG9zLnggLSB0aGlzLmRlbFBvcy54LCB0aGlzLl9vcmlnaW5Qb3MueSAtIHRoaXMuZGVsUG9zLnkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICh0aGlzLnJldmVydCkge1xyXG4gICAgICAgICAgICBhY3Rpb25Ud2Vlbi5ieSh0aGlzLmR1cmF0aW9uICogMC41LCB7IHBvc2l0aW9uOiBjYy52Mih0aGlzLmRlbFBvcy54LCB0aGlzLmRlbFBvcy55KSB9LCB7IGVhc2luZzogdGhpcy5fZ2V0RWFzZSgpIH0pO1xyXG4gICAgICAgICAgICBhY3Rpb25Ud2Vlbi5ieSh0aGlzLmR1cmF0aW9uICogMC41LCB7IHBvc2l0aW9uOiBjYy52MigtdGhpcy5kZWxQb3MueCwgLXRoaXMuZGVsUG9zLnkpIH0sIHsgZWFzaW5nOiB0aGlzLl9nZXRFYXNlKCkgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWN0aW9uVHdlZW4uYnkodGhpcy5kdXJhdGlvbiwgeyBwb3NpdGlvbjogY2MudjIodGhpcy5kZWxQb3MueCwgdGhpcy5kZWxQb3MueSkgfSwgeyBlYXNpbmc6IHRoaXMuX2dldEVhc2UoKSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYWN0aW9uVHdlZW4uZGVsYXkodGhpcy5pbnRlcnZhbCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3R3ZWVuID0gY2MudHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICB0aGlzLl90d2Vlbi50aGVuKGRlbGF5VHdlZW4pO1xyXG4gICAgICAgIHRoaXMuX3R3ZWVuLnRoZW4oYWN0aW9uVHdlZW4pO1xyXG4gICAgICAgIGlmICh0aGlzLmxvb3ApIHtcclxuICAgICAgICAgICAgdGhpcy5fdHdlZW4ucmVwZWF0Rm9yZXZlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBjYy52Mih0aGlzLl9vcmlnaW5Qb3MueCAtIHRoaXMuZGVsUG9zLngsIHRoaXMuX29yaWdpblBvcy55IC0gdGhpcy5kZWxQb3MueSk7XHJcbiAgICAgICAgdGhpcy5fdHdlZW4uc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbn1cclxuIl19