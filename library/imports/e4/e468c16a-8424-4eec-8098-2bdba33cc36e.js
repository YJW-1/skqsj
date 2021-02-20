"use strict";
cc._RF.push(module, 'e468cFqhCRO7ICYK9ujPMNu', 'QEasing');
// script/Framework/QEasing.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var EaseType;
(function (EaseType) {
    EaseType[EaseType["none"] = 0] = "none";
    EaseType[EaseType["easeIn"] = 1] = "easeIn";
    EaseType[EaseType["easeOut"] = 2] = "easeOut";
    EaseType[EaseType["easeInOut"] = 3] = "easeInOut";
    EaseType[EaseType["easeExponentialIn"] = 4] = "easeExponentialIn";
    EaseType[EaseType["easeExponentialOut"] = 5] = "easeExponentialOut";
    EaseType[EaseType["easeExponentialInOut"] = 6] = "easeExponentialInOut";
    EaseType[EaseType["easeSineIn"] = 7] = "easeSineIn";
    EaseType[EaseType["easeSineOut"] = 8] = "easeSineOut";
    EaseType[EaseType["easeSineInOut"] = 9] = "easeSineInOut";
    EaseType[EaseType["easeElasticIn"] = 10] = "easeElasticIn";
    EaseType[EaseType["easeElasticOut"] = 11] = "easeElasticOut";
    EaseType[EaseType["easeElasticInOut"] = 12] = "easeElasticInOut";
    EaseType[EaseType["easeBounceIn"] = 13] = "easeBounceIn";
    EaseType[EaseType["easeBounceOut"] = 14] = "easeBounceOut";
    EaseType[EaseType["easeBounceInOut"] = 15] = "easeBounceInOut";
    EaseType[EaseType["easeBackIn"] = 16] = "easeBackIn";
    EaseType[EaseType["easeBackOut"] = 17] = "easeBackOut";
    EaseType[EaseType["easeBackInOut"] = 18] = "easeBackInOut";
    EaseType[EaseType["easeBezierAction"] = 19] = "easeBezierAction";
    EaseType[EaseType["easeQuadraticActionIn"] = 20] = "easeQuadraticActionIn";
    EaseType[EaseType["easeQuadraticActionOut"] = 21] = "easeQuadraticActionOut";
    EaseType[EaseType["easeQuadraticActionInOut"] = 22] = "easeQuadraticActionInOut";
    EaseType[EaseType["easeQuarticActionIn"] = 23] = "easeQuarticActionIn";
    EaseType[EaseType["easeQuarticActionOut"] = 24] = "easeQuarticActionOut";
    EaseType[EaseType["easeQuarticActionInOut"] = 25] = "easeQuarticActionInOut";
    EaseType[EaseType["easeQuinticActionIn"] = 26] = "easeQuinticActionIn";
    EaseType[EaseType["easeQuinticActionOut"] = 27] = "easeQuinticActionOut";
    EaseType[EaseType["easeQuinticActionInOut"] = 28] = "easeQuinticActionInOut";
    EaseType[EaseType["easeCircleActionIn"] = 29] = "easeCircleActionIn";
    EaseType[EaseType["easeCircleActionOut"] = 30] = "easeCircleActionOut";
    EaseType[EaseType["easeCircleActionInOut"] = 31] = "easeCircleActionInOut";
    EaseType[EaseType["easeCubicActionIn"] = 32] = "easeCubicActionIn";
    EaseType[EaseType["easeCubicActionOut"] = 33] = "easeCubicActionOut";
    EaseType[EaseType["easeCubicActionInOut"] = 34] = "easeCubicActionInOut";
})(EaseType = exports.EaseType || (exports.EaseType = {}));
var QEasing = /** @class */ (function (_super) {
    __extends(QEasing, _super);
    function QEasing() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.easeType = EaseType.none;
        return _this;
    }
    QEasing.prototype._getEase = function () {
        switch (this.easeType) {
            case EaseType.none: {
                return "linear";
            }
            case EaseType.easeOut: {
                return "easeOut";
            }
            case EaseType.easeInOut: {
                return "easeInOut";
            }
            case EaseType.easeExponentialIn: {
                return "easeExponentialIn";
            }
            case EaseType.easeExponentialOut: {
                return "easeExponentialOut";
            }
            case EaseType.easeExponentialInOut: {
                return "easeExponentialInOut";
            }
            case EaseType.easeSineIn: {
                return "sineIn";
            }
            case EaseType.easeSineOut: {
                return "sineOut";
            }
            case EaseType.easeSineInOut: {
                return "sineInOut";
            }
            case EaseType.easeElasticIn: {
                return "elasticIn";
            }
            case EaseType.easeElasticOut: {
                return "elasticOut";
            }
            case EaseType.easeElasticInOut: {
                return "elasticInOut";
            }
            case EaseType.easeBounceIn: {
                return "bounceIn";
            }
            case EaseType.easeBounceOut: {
                return "bounceOut";
            }
            case EaseType.easeBackIn: {
                return "backIn";
            }
            case EaseType.easeBackOut: {
                return 'backOut';
            }
            case EaseType.easeBackInOut: {
                return "backInOut";
            }
            case EaseType.easeQuadraticActionIn: {
                return "quadraticActionIn";
            }
            case EaseType.easeQuadraticActionOut: {
                return "quadraticActionOut";
            }
            case EaseType.easeQuadraticActionInOut: {
                return "quadraticActionInOut";
            }
            case EaseType.easeQuarticActionIn: {
                return "quarticActionIn";
            }
            case EaseType.easeQuarticActionOut: {
                return "quarticActionOut";
            }
            case EaseType.easeQuarticActionInOut: {
                return "quarticActionInOut";
            }
            case EaseType.easeQuinticActionIn: {
                return "quinticActionIn";
            }
            case EaseType.easeQuinticActionOut: {
                return "quinticActionOut";
            }
            case EaseType.easeQuinticActionInOut: {
                return "quinticActionInOut";
            }
            case EaseType.easeCircleActionIn: {
                return "easeCircleActionIn";
            }
            case EaseType.easeCircleActionOut: {
                return "circleActionOut";
            }
            case EaseType.easeCircleActionInOut: {
                return "circleActionInOut";
            }
            case EaseType.easeCubicActionIn: {
                return "cubicActionIn";
            }
            case EaseType.easeCubicActionOut: {
                return "cubicActionOut";
            }
            case EaseType.easeCubicActionInOut: {
                return "cubicActionInOut";
            }
        }
    };
    __decorate([
        property({ type: cc.Enum(EaseType) })
    ], QEasing.prototype, "easeType", void 0);
    QEasing = __decorate([
        ccclass
    ], QEasing);
    return QEasing;
}(cc.Component));
exports.default = QEasing;

cc._RF.pop();