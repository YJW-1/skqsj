
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/QScaleAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0974dBnaNtN7J98Baw+2837', 'QScaleAction');
// script/Framework/QScaleAction.ts

Object.defineProperty(exports, "__esModule", { value: true });
var QEasing_1 = require("./QEasing");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var QScaleAction = /** @class */ (function (_super) {
    __extends(QScaleAction, _super);
    function QScaleAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delay = 0;
        _this.fromScale = cc.Vec2.ZERO;
        _this.targetScale = cc.Vec2.ZERO;
        _this.duration = 0;
        _this.loop = false;
        _this.revert = false;
        _this._tween = null;
        return _this;
    }
    QScaleAction.prototype.onLoad = function () {
        this.node.scaleX = this.fromScale.x;
        this.node.scaleY = this.fromScale.y;
        var delayTween = cc.tween();
        delayTween.delay(this.delay);
        var actionTween = cc.tween();
        if (this.revert) {
            actionTween.to(this.duration * 0.5, { scaleX: this.targetScale.x, scaleY: this.targetScale.y }, { easing: this._getEase() });
            actionTween.to(this.duration * 0.5, { scaleX: this.fromScale.x, scaleY: this.fromScale.y }, { easing: this._getEase() });
        }
        else {
            actionTween.to(this.duration, { scaleX: this.targetScale.x, scaleY: this.targetScale.y }, { easing: this._getEase() });
        }
        this._tween = cc.tween(this.node);
        this._tween.then(delayTween);
        this._tween.then(actionTween);
        if (this.loop) {
            this._tween.repeatForever();
        }
    };
    QScaleAction.prototype.onEnable = function () {
        this.node.scaleX = this.fromScale.x;
        this.node.scaleY = this.fromScale.y;
        this._tween.start();
    };
    __decorate([
        property()
    ], QScaleAction.prototype, "delay", void 0);
    __decorate([
        property()
    ], QScaleAction.prototype, "fromScale", void 0);
    __decorate([
        property(cc.Vec2)
    ], QScaleAction.prototype, "targetScale", void 0);
    __decorate([
        property()
    ], QScaleAction.prototype, "duration", void 0);
    __decorate([
        property()
    ], QScaleAction.prototype, "loop", void 0);
    __decorate([
        property()
    ], QScaleAction.prototype, "revert", void 0);
    QScaleAction = __decorate([
        ccclass
    ], QScaleAction);
    return QScaleAction;
}(QEasing_1.default));
exports.default = QScaleAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFFTY2FsZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQThDO0FBRXhDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBMEMsZ0NBQU87SUFEakQ7UUFBQSxxRUFvREM7UUEvQ0csV0FBSyxHQUFXLENBQUMsQ0FBQztRQUdsQixlQUFTLEdBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFHbEMsaUJBQVcsR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUdwQyxjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLFVBQUksR0FBWSxLQUFLLENBQUM7UUFHdEIsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUVoQixZQUFNLEdBQWEsSUFBSSxDQUFDOztJQThCcEMsQ0FBQztJQTVCRyw2QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFFcEMsSUFBSSxVQUFVLEdBQWEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTdCLElBQUksV0FBVyxHQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QyxJQUFHLElBQUksQ0FBQyxNQUFNLEVBQUM7WUFDWCxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsR0FBRyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQyxDQUFDLENBQUM7WUFDdkgsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLEdBQUcsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1NBQ3RIO2FBQUk7WUFDRCxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFDLENBQUMsQ0FBQztTQUN0SDtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUIsSUFBRyxJQUFJLENBQUMsSUFBSSxFQUFDO1lBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBOUNEO1FBREMsUUFBUSxFQUFFOytDQUNPO0lBR2xCO1FBREMsUUFBUSxFQUFFO21EQUN1QjtJQUdsQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNrQjtJQUdwQztRQURDLFFBQVEsRUFBRTtrREFDVTtJQUdyQjtRQURDLFFBQVEsRUFBRTs4Q0FDVztJQUd0QjtRQURDLFFBQVEsRUFBRTtnREFDYTtJQW5CUCxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBbURoQztJQUFELG1CQUFDO0NBbkRELEFBbURDLENBbkR5QyxpQkFBTyxHQW1EaEQ7a0JBbkRvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFFFYXNpbmcsIHsgRWFzZVR5cGUgfSBmcm9tIFwiLi9RRWFzaW5nXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUVNjYWxlQWN0aW9uIGV4dGVuZHMgUUVhc2luZyB7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBkZWxheTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoKVxyXG4gICAgZnJvbVNjYWxlOiBjYy5WZWMyID0gY2MuVmVjMi5aRVJPO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5WZWMyKVxyXG4gICAgdGFyZ2V0U2NhbGU6IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk87XHJcblxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIGR1cmF0aW9uOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBsb29wOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIHJldmVydDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX3R3ZWVuOiBjYy5Ud2VlbiA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IHRoaXMuZnJvbVNjYWxlLng7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWSA9IHRoaXMuZnJvbVNjYWxlLnk7XHJcblxyXG4gICAgICAgIGxldCBkZWxheVR3ZWVuOiBjYy5Ud2VlbiA9IGNjLnR3ZWVuKCk7XHJcbiAgICAgICAgZGVsYXlUd2Vlbi5kZWxheSh0aGlzLmRlbGF5KTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvblR3ZWVuOiBjYy5Ud2VlbiA9IGNjLnR3ZWVuKCk7XHJcbiAgICAgICAgaWYodGhpcy5yZXZlcnQpe1xyXG4gICAgICAgICAgICBhY3Rpb25Ud2Vlbi50byh0aGlzLmR1cmF0aW9uKjAuNSwge3NjYWxlWDogdGhpcy50YXJnZXRTY2FsZS54LCBzY2FsZVk6IHRoaXMudGFyZ2V0U2NhbGUueX0sIHtlYXNpbmc6IHRoaXMuX2dldEVhc2UoKX0pO1xyXG4gICAgICAgICAgICBhY3Rpb25Ud2Vlbi50byh0aGlzLmR1cmF0aW9uKjAuNSwge3NjYWxlWDogdGhpcy5mcm9tU2NhbGUueCwgc2NhbGVZOiB0aGlzLmZyb21TY2FsZS55fSwge2Vhc2luZzogdGhpcy5fZ2V0RWFzZSgpfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFjdGlvblR3ZWVuLnRvKHRoaXMuZHVyYXRpb24sIHtzY2FsZVg6IHRoaXMudGFyZ2V0U2NhbGUueCwgc2NhbGVZOiB0aGlzLnRhcmdldFNjYWxlLnl9LCB7ZWFzaW5nOiB0aGlzLl9nZXRFYXNlKCl9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3R3ZWVuID0gY2MudHdlZW4odGhpcy5ub2RlKTtcclxuICAgICAgICB0aGlzLl90d2Vlbi50aGVuKGRlbGF5VHdlZW4pO1xyXG4gICAgICAgIHRoaXMuX3R3ZWVuLnRoZW4oYWN0aW9uVHdlZW4pO1xyXG4gICAgICAgIGlmKHRoaXMubG9vcCl7XHJcbiAgICAgICAgICAgIHRoaXMuX3R3ZWVuLnJlcGVhdEZvcmV2ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWCA9IHRoaXMuZnJvbVNjYWxlLng7XHJcbiAgICAgICAgdGhpcy5ub2RlLnNjYWxlWSA9IHRoaXMuZnJvbVNjYWxlLnk7XHJcbiAgICAgICAgdGhpcy5fdHdlZW4uc3RhcnQoKTtcclxuICAgIH1cclxufVxyXG4iXX0=