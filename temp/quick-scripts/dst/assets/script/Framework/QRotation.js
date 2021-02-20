
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/QRotation.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e503W6rPJD46Z7ULKoVkiE', 'QRotation');
// script/Framework/QRotation.ts

Object.defineProperty(exports, "__esModule", { value: true });
var QEasing_1 = require("./QEasing");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var QRotateAction = /** @class */ (function (_super) {
    __extends(QRotateAction, _super);
    function QRotateAction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.delay = 0;
        _this.angle = 0;
        _this.duration = 0;
        _this.loop = false;
        _this.revert = false;
        _this._originAngle = 0;
        _this._tween = null;
        return _this;
    }
    QRotateAction.prototype.onLoad = function () {
        this._originAngle = this.node.angle;
        var delayTween = cc.tween().delay(this.delay);
        var actionTween = cc.tween();
        if (this.revert) {
            actionTween.by(this.duration / 2, { angle: this.angle }).by(this.duration / 2, { angle: -this.angle }, { easing: this._getEase() });
        }
        else {
            actionTween.by(this.duration, { angle: this.angle }, { easing: this._getEase() });
        }
        this._tween = cc.tween(this.node);
        this._tween.then(delayTween);
        this._tween.then(actionTween);
        if (this.loop) {
            this._tween.repeatForever();
        }
    };
    QRotateAction.prototype.onEnable = function () {
        this.node.angle = this._originAngle;
        this._tween.start();
    };
    __decorate([
        property()
    ], QRotateAction.prototype, "delay", void 0);
    __decorate([
        property({ tooltip: "初始角度，顺时针为负数" })
    ], QRotateAction.prototype, "angle", void 0);
    __decorate([
        property()
    ], QRotateAction.prototype, "duration", void 0);
    __decorate([
        property()
    ], QRotateAction.prototype, "loop", void 0);
    __decorate([
        property()
    ], QRotateAction.prototype, "revert", void 0);
    QRotateAction = __decorate([
        ccclass
    ], QRotateAction);
    return QRotateAction;
}(QEasing_1.default));
exports.default = QRotateAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFFSb3RhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQThDO0FBRXhDLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBMkMsaUNBQU87SUFEbEQ7UUFBQSxxRUEyQ0M7UUF2Q0csV0FBSyxHQUFXLENBQUMsQ0FBQztRQUdsQixXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFHckIsVUFBSSxHQUFZLEtBQUssQ0FBQztRQUd0QixZQUFNLEdBQVksS0FBSyxDQUFDO1FBRWhCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBQ3pCLFlBQU0sR0FBYSxJQUFJLENBQUM7O0lBd0JwQyxDQUFDO0lBdEJHLDhCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BDLElBQUksVUFBVSxHQUFZLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZELElBQUksV0FBVyxHQUFhLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QyxJQUFHLElBQUksQ0FBQyxNQUFNLEVBQUM7WUFDWCxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUMsQ0FBQyxFQUFDLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFDLENBQUMsRUFBRSxFQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1NBQzVIO2FBQUk7WUFDRCxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQyxDQUFDLENBQUM7U0FDakY7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlCLElBQUcsSUFBSSxDQUFDLElBQUksRUFBQztZQUNULElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDL0I7SUFDTCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBdENEO1FBREMsUUFBUSxFQUFFO2dEQUNPO0lBR2xCO1FBREMsUUFBUSxDQUFDLEVBQUMsT0FBTyxFQUFFLGFBQWEsRUFBQyxDQUFDO2dEQUNqQjtJQUdsQjtRQURDLFFBQVEsRUFBRTttREFDVTtJQUdyQjtRQURDLFFBQVEsRUFBRTsrQ0FDVztJQUd0QjtRQURDLFFBQVEsRUFBRTtpREFDYTtJQWZQLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0EwQ2pDO0lBQUQsb0JBQUM7Q0ExQ0QsQUEwQ0MsQ0ExQzBDLGlCQUFPLEdBMENqRDtrQkExQ29CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUUVhc2luZywgeyBFYXNlVHlwZSB9IGZyb20gXCIuL1FFYXNpbmdcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUVJvdGF0ZUFjdGlvbiBleHRlbmRzIFFFYXNpbmcge1xyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBkZWxheTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoe3Rvb2x0aXA6IFwi5Yid5aeL6KeS5bqm77yM6aG65pe26ZKI5Li66LSf5pWwXCJ9KVxyXG4gICAgYW5nbGU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIGR1cmF0aW9uOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSgpXHJcbiAgICBsb29wOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQHByb3BlcnR5KClcclxuICAgIHJldmVydDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX29yaWdpbkFuZ2xlOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBfdHdlZW46IGNjLlR3ZWVuID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICB0aGlzLl9vcmlnaW5BbmdsZSA9IHRoaXMubm9kZS5hbmdsZTtcclxuICAgICAgICBsZXQgZGVsYXlUd2VlbjpjYy5Ud2VlbiA9IGNjLnR3ZWVuKCkuZGVsYXkodGhpcy5kZWxheSk7XHJcbiAgICAgICAgbGV0IGFjdGlvblR3ZWVuOiBjYy5Ud2VlbiA9IGNjLnR3ZWVuKCk7XHJcbiAgICAgICAgaWYodGhpcy5yZXZlcnQpe1xyXG4gICAgICAgICAgICBhY3Rpb25Ud2Vlbi5ieSh0aGlzLmR1cmF0aW9uLzIse2FuZ2xlOiB0aGlzLmFuZ2xlfSkuYnkodGhpcy5kdXJhdGlvbi8yLCB7YW5nbGU6IC10aGlzLmFuZ2xlfSwge2Vhc2luZzogdGhpcy5fZ2V0RWFzZSgpfSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGFjdGlvblR3ZWVuLmJ5KHRoaXMuZHVyYXRpb24sIHthbmdsZTogdGhpcy5hbmdsZX0sIHtlYXNpbmc6IHRoaXMuX2dldEVhc2UoKX0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fdHdlZW4gPSBjYy50d2Vlbih0aGlzLm5vZGUpO1xyXG4gICAgICAgIHRoaXMuX3R3ZWVuLnRoZW4oZGVsYXlUd2Vlbik7XHJcbiAgICAgICAgdGhpcy5fdHdlZW4udGhlbihhY3Rpb25Ud2Vlbik7XHJcbiAgICAgICAgaWYodGhpcy5sb29wKXtcclxuICAgICAgICAgICAgdGhpcy5fdHdlZW4ucmVwZWF0Rm9yZXZlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkVuYWJsZSgpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hbmdsZSA9IHRoaXMuX29yaWdpbkFuZ2xlO1xyXG4gICAgICAgIHRoaXMuX3R3ZWVuLnN0YXJ0KCk7XHJcbiAgICB9XHJcbn1cclxuIl19