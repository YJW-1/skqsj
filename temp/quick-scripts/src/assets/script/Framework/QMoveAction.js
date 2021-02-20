"use strict";
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