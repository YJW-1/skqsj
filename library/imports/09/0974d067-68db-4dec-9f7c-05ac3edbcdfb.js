"use strict";
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