
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/QEasing.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFFFYXNpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUMsSUFBWSxRQW9DWDtBQXBDRCxXQUFZLFFBQVE7SUFDaEIsdUNBQVEsQ0FBQTtJQUNSLDJDQUFNLENBQUE7SUFDTiw2Q0FBTyxDQUFBO0lBQ1AsaURBQVMsQ0FBQTtJQUNULGlFQUFpQixDQUFBO0lBQ2pCLG1FQUFrQixDQUFBO0lBQ2xCLHVFQUFvQixDQUFBO0lBQ3BCLG1EQUFVLENBQUE7SUFDVixxREFBVyxDQUFBO0lBQ1gseURBQWEsQ0FBQTtJQUNiLDBEQUFhLENBQUE7SUFDYiw0REFBYyxDQUFBO0lBQ2QsZ0VBQWdCLENBQUE7SUFDaEIsd0RBQVksQ0FBQTtJQUNaLDBEQUFhLENBQUE7SUFDYiw4REFBZSxDQUFBO0lBQ2Ysb0RBQVUsQ0FBQTtJQUNWLHNEQUFXLENBQUE7SUFDWCwwREFBYSxDQUFBO0lBQ2IsZ0VBQWdCLENBQUE7SUFDaEIsMEVBQXFCLENBQUE7SUFDckIsNEVBQXNCLENBQUE7SUFDdEIsZ0ZBQXdCLENBQUE7SUFDeEIsc0VBQW1CLENBQUE7SUFDbkIsd0VBQW9CLENBQUE7SUFDcEIsNEVBQXNCLENBQUE7SUFDdEIsc0VBQW1CLENBQUE7SUFDbkIsd0VBQW9CLENBQUE7SUFDcEIsNEVBQXNCLENBQUE7SUFDdEIsb0VBQWtCLENBQUE7SUFDbEIsc0VBQW1CLENBQUE7SUFDbkIsMEVBQXFCLENBQUE7SUFDckIsa0VBQWlCLENBQUE7SUFDakIsb0VBQWtCLENBQUE7SUFDbEIsd0VBQW9CLENBQUE7QUFDeEIsQ0FBQyxFQXBDVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQW9DbkI7QUFHRDtJQUFxQywyQkFBWTtJQURqRDtRQUFBLHFFQTJHQztRQXZHRyxjQUFRLEdBQWEsUUFBUSxDQUFDLElBQUks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QUFPLG9CQUFvQixDQUFDO2FBQy9CO1lBQ0QsS0FBSyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDL0IsT0FBTyxpQkFBaUIsQ0FBQzthQUM1QjtZQUNELEtBQUssUUFBUSxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQ2pDLE9BQU8sbUJBQW1CLENBQUM7YUFDOUI7WUFDRCxLQUFLLFFBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUM3QixPQUFPLGVBQWUsQ0FBQzthQUMxQjtZQUNELEtBQUssUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQzlCLE9BQU8sZ0JBQWdCLENBQUM7YUFDM0I7WUFDRCxLQUFLLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLGtCQUFrQixDQUFDO2FBQzdCO1NBQ0o7SUFDTCxDQUFDO0lBckdEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQzs2Q0FDSDtJQUhsQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBMEczQjtJQUFELGNBQUM7Q0ExR0QsQUEwR0MsQ0ExR29DLEVBQUUsQ0FBQyxTQUFTLEdBMEdoRDtrQkExR29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcblxyXG5leHBvcnQgZW51bSBFYXNlVHlwZSB7XHJcbiAgICBub25lID0gMCxcclxuICAgIGVhc2VJbixcclxuICAgIGVhc2VPdXQsXHJcbiAgICBlYXNlSW5PdXQsXHJcbiAgICBlYXNlRXhwb25lbnRpYWxJbixcclxuICAgIGVhc2VFeHBvbmVudGlhbE91dCxcclxuICAgIGVhc2VFeHBvbmVudGlhbEluT3V0LFxyXG4gICAgZWFzZVNpbmVJbixcclxuICAgIGVhc2VTaW5lT3V0LFxyXG4gICAgZWFzZVNpbmVJbk91dCxcclxuICAgIGVhc2VFbGFzdGljSW4sXHJcbiAgICBlYXNlRWxhc3RpY091dCxcclxuICAgIGVhc2VFbGFzdGljSW5PdXQsXHJcbiAgICBlYXNlQm91bmNlSW4sXHJcbiAgICBlYXNlQm91bmNlT3V0LFxyXG4gICAgZWFzZUJvdW5jZUluT3V0LFxyXG4gICAgZWFzZUJhY2tJbixcclxuICAgIGVhc2VCYWNrT3V0LFxyXG4gICAgZWFzZUJhY2tJbk91dCxcclxuICAgIGVhc2VCZXppZXJBY3Rpb24sXHJcbiAgICBlYXNlUXVhZHJhdGljQWN0aW9uSW4sXHJcbiAgICBlYXNlUXVhZHJhdGljQWN0aW9uT3V0LFxyXG4gICAgZWFzZVF1YWRyYXRpY0FjdGlvbkluT3V0LFxyXG4gICAgZWFzZVF1YXJ0aWNBY3Rpb25JbixcclxuICAgIGVhc2VRdWFydGljQWN0aW9uT3V0LFxyXG4gICAgZWFzZVF1YXJ0aWNBY3Rpb25Jbk91dCxcclxuICAgIGVhc2VRdWludGljQWN0aW9uSW4sXHJcbiAgICBlYXNlUXVpbnRpY0FjdGlvbk91dCxcclxuICAgIGVhc2VRdWludGljQWN0aW9uSW5PdXQsXHJcbiAgICBlYXNlQ2lyY2xlQWN0aW9uSW4sXHJcbiAgICBlYXNlQ2lyY2xlQWN0aW9uT3V0LFxyXG4gICAgZWFzZUNpcmNsZUFjdGlvbkluT3V0LFxyXG4gICAgZWFzZUN1YmljQWN0aW9uSW4sXHJcbiAgICBlYXNlQ3ViaWNBY3Rpb25PdXQsXHJcbiAgICBlYXNlQ3ViaWNBY3Rpb25Jbk91dFxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBRRWFzaW5nIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5FbnVtKEVhc2VUeXBlKSB9KVxyXG4gICAgZWFzZVR5cGU6IEVhc2VUeXBlID0gRWFzZVR5cGUubm9uZTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgX2dldEVhc2UoKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmVhc2VUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRWFzZVR5cGUubm9uZToge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibGluZWFyXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBFYXNlVHlwZS5lYXNlT3V0OiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJlYXNlT3V0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBFYXNlVHlwZS5lYXNlSW5PdXQ6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImVhc2VJbk91dFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgRWFzZVR5cGUuZWFzZUV4cG9uZW50aWFsSW46IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImVhc2VFeHBvbmVudGlhbEluXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBFYXNlVHlwZS5lYXNlRXhwb25lbnRpYWxPdXQ6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImVhc2VFeHBvbmVudGlhbE91dFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgRWFzZVR5cGUuZWFzZUV4cG9uZW50aWFsSW5PdXQ6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImVhc2VFeHBvbmVudGlhbEluT3V0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBFYXNlVHlwZS5lYXNlU2luZUluOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJzaW5lSW5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEVhc2VUeXBlLmVhc2VTaW5lT3V0OiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJzaW5lT3V0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBFYXNlVHlwZS5lYXNlU2luZUluT3V0OiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJzaW5lSW5PdXRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEVhc2VUeXBlLmVhc2VFbGFzdGljSW46IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImVsYXN0aWNJblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgRWFzZVR5cGUuZWFzZUVsYXN0aWNPdXQ6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImVsYXN0aWNPdXRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEVhc2VUeXBlLmVhc2VFbGFzdGljSW5PdXQ6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImVsYXN0aWNJbk91dFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgRWFzZVR5cGUuZWFzZUJvdW5jZUluOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJib3VuY2VJblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgRWFzZVR5cGUuZWFzZUJvdW5jZU91dDoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYm91bmNlT3V0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBFYXNlVHlwZS5lYXNlQmFja0luOiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJiYWNrSW5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEVhc2VUeXBlLmVhc2VCYWNrT3V0OiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2JhY2tPdXQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgRWFzZVR5cGUuZWFzZUJhY2tJbk91dDoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYmFja0luT3V0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBFYXNlVHlwZS5lYXNlUXVhZHJhdGljQWN0aW9uSW46IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInF1YWRyYXRpY0FjdGlvbkluXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBFYXNlVHlwZS5lYXNlUXVhZHJhdGljQWN0aW9uT3V0OiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJxdWFkcmF0aWNBY3Rpb25PdXRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEVhc2VUeXBlLmVhc2VRdWFkcmF0aWNBY3Rpb25Jbk91dDoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicXVhZHJhdGljQWN0aW9uSW5PdXRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEVhc2VUeXBlLmVhc2VRdWFydGljQWN0aW9uSW46IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInF1YXJ0aWNBY3Rpb25JblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgRWFzZVR5cGUuZWFzZVF1YXJ0aWNBY3Rpb25PdXQ6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInF1YXJ0aWNBY3Rpb25PdXRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIEVhc2VUeXBlLmVhc2VRdWFydGljQWN0aW9uSW5PdXQ6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInF1YXJ0aWNBY3Rpb25Jbk91dFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgRWFzZVR5cGUuZWFzZVF1aW50aWNBY3Rpb25Jbjoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicXVpbnRpY0FjdGlvbkluXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBFYXNlVHlwZS5lYXNlUXVpbnRpY0FjdGlvbk91dDoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicXVpbnRpY0FjdGlvbk91dFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgRWFzZVR5cGUuZWFzZVF1aW50aWNBY3Rpb25Jbk91dDoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicXVpbnRpY0FjdGlvbkluT3V0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBFYXNlVHlwZS5lYXNlQ2lyY2xlQWN0aW9uSW46IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImVhc2VDaXJjbGVBY3Rpb25JblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgRWFzZVR5cGUuZWFzZUNpcmNsZUFjdGlvbk91dDoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY2lyY2xlQWN0aW9uT3V0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBFYXNlVHlwZS5lYXNlQ2lyY2xlQWN0aW9uSW5PdXQ6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImNpcmNsZUFjdGlvbkluT3V0XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBFYXNlVHlwZS5lYXNlQ3ViaWNBY3Rpb25Jbjoge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY3ViaWNBY3Rpb25JblwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgRWFzZVR5cGUuZWFzZUN1YmljQWN0aW9uT3V0OiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjdWJpY0FjdGlvbk91dFwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgRWFzZVR5cGUuZWFzZUN1YmljQWN0aW9uSW5PdXQ6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImN1YmljQWN0aW9uSW5PdXRcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuIl19