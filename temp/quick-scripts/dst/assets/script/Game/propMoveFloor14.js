
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/propMoveFloor14.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '785b3mkgW5FhJt3csMxQfm4', 'propMoveFloor14');
// script/Game/propMoveFloor14.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var propMoveFloor = /** @class */ (function (_super) {
    __extends(propMoveFloor, _super);
    function propMoveFloor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn = null;
        _this.floor1 = null;
        _this.floor2 = null;
        _this.isFirst = false;
        return _this;
    }
    propMoveFloor.prototype.onBeginContact = function (contact, self, other) {
        if (this.isFirst)
            return;
        if (other.tag == Constant_1.tag.thorn) {
            this.isFirst = true;
            contact.disabled = true;
            cc.tween(this.floor1)
                .to(1, { position: cc.v2(181, -78.5) })
                .start();
            cc.tween(this.floor2)
                .to(1, { position: cc.v2(-121, -78.5) })
                .start();
            cc.tween(this.btn)
                .to(0.1, { position: cc.v2(-325, 98) })
                .start();
            cc.log(this.floor1, this.floor2);
        }
    };
    // LIFE-CYCLE CALLBACKS:
    propMoveFloor.prototype.onLoad = function () {
        this.btn = this.node.getChildByName("btn").getChildByName("btn1");
        this.floor1 = this.node.getChildByName("sp").getChildByName("floor1");
        this.floor2 = this.node.getChildByName("sp").getChildByName("floor2");
    };
    propMoveFloor.prototype.start = function () {
    };
    propMoveFloor.prototype.update = function (dt) {
    };
    propMoveFloor = __decorate([
        ccclass
    ], propMoveFloor);
    return propMoveFloor;
}(cc.Component));
exports.default = propMoveFloor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxwcm9wTW92ZUZsb29yMTQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUFzRDtBQUVoRCxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBRHZEO1FBQUEscUVBK0NDO1FBN0NHLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFDcEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGFBQU8sR0FBWSxLQUFLLENBQUM7O0lBeUM3QixDQUFDO0lBdENHLHNDQUFjLEdBQWQsVUFBZSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDL0IsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU07UUFDeEIsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLGNBQUcsQ0FBQyxLQUFLLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDeEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2lCQUNoQixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztpQkFDdEMsS0FBSyxFQUFFLENBQUE7WUFFWixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQ2hCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7aUJBQ3ZDLEtBQUssRUFBRSxDQUFBO1lBRVosRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2lCQUNiLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO2lCQUN0QyxLQUFLLEVBQUUsQ0FBQTtZQUVSLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDdEM7SUFDTCxDQUFDO0lBR0Qsd0JBQXdCO0lBRXhCLDhCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUUxRSxDQUFDO0lBSUQsNkJBQUssR0FBTDtJQUNBLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sRUFBRTtJQUNULENBQUM7SUE3Q2dCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0E4Q2pDO0lBQUQsb0JBQUM7Q0E5Q0QsQUE4Q0MsQ0E5QzBDLEVBQUUsQ0FBQyxTQUFTLEdBOEN0RDtrQkE5Q29CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5pbXBvcnQgQ29uc3RhbnQsIHsgdGFnIH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHByb3BNb3ZlRmxvb3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgYnRuOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGZsb29yMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBmbG9vcjI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGlzRmlyc3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0ZpcnN0KSByZXR1cm5cclxuICAgICAgICBpZiAob3RoZXIudGFnID09IHRhZy50aG9ybikge1xyXG4gICAgICAgICAgICB0aGlzLmlzRmlyc3QgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb250YWN0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5mbG9vcjEpXHJcbiAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogY2MudjIoMTgxLCAtNzguNSkgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmZsb29yMilcclxuICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiBjYy52MigtMTIxLCAtNzguNSkgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmJ0bilcclxuICAgICAgICAgICAgICAgIC50bygwLjEsIHsgcG9zaXRpb246IGNjLnYyKC0zMjUsIDk4KSB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgICAgICBjYy5sb2codGhpcy5mbG9vcjEsdGhpcy5mbG9vcjIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5idG4gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5cIikuZ2V0Q2hpbGRCeU5hbWUoXCJidG4xXCIpO1xyXG4gICAgICAgIHRoaXMuZmxvb3IxID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BcIikuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vcjFcIik7XHJcbiAgICAgICAgdGhpcy5mbG9vcjIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcFwiKS5nZXRDaGlsZEJ5TmFtZShcImZsb29yMlwiKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgIH1cclxufVxyXG4iXX0=