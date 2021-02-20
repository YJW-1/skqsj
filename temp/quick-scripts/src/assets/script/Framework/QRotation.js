"use strict";
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