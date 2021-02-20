
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/propCloud.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a42fbMQoztEdqtxd93ZsPjR', 'propCloud');
// script/Game/propCloud.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sp1 = null;
        _this.sp2 = null;
        _this.sp3 = null;
        _this.pp = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        var _this = this;
        var a = cc.tween().sequence(cc.tween().by(2, { scale: 0.03, position: cc.v2(2, 4) }), cc.tween().by(2, { scale: -0.03, position: cc.v2(-2, -4) }));
        cc.tween(this.sp1)
            .repeatForever(a)
            .start();
        var b = cc.tween().sequence(cc.tween().by(1, { scale: 0.03, position: cc.v2(4, 4) }), cc.tween().by(1, { scale: -0.03, position: cc.v2(-4, -4) }));
        cc.tween(this.sp2)
            .repeatForever(b)
            .start();
        var c = cc.tween().sequence(cc.tween().by(0.8, { scale: 0.03, position: cc.v2(12, 0) }), cc.tween().by(0.8, { scale: -0.03, position: cc.v2(-12, 0) }));
        cc.tween(this.sp3)
            .repeatForever(c)
            .start();
        this.schedule(function () {
            var num = 2;
            while (num-- > 0) {
                var node = cc.instantiate(_this.pp);
                node.zIndex -= 10;
                _this.node.addChild(node);
                node.active = true;
                node.x = Math.random() * 60 - 30;
                // node.getComponent(cc.PhysicsCircleCollider).apply()
            }
        }, 0.25);
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "sp1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "sp2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "sp3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "pp", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxwcm9wQ2xvdWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFEbEQ7UUFBQSxxRUEwREM7UUF0REcsU0FBRyxHQUFZLElBQUksQ0FBQztRQUdwQixTQUFHLEdBQVksSUFBSSxDQUFDO1FBR3BCLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFHcEIsUUFBRSxHQUFZLElBQUksQ0FBQzs7UUE0Q25CLGlCQUFpQjtJQUNyQixDQUFDO0lBM0NHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUFBLGlCQW9DQztRQW5DRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUN2QixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFDeEQsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQzlELENBQUE7UUFDRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDYixhQUFhLENBQUMsQ0FBQyxDQUFDO2FBQ2hCLEtBQUssRUFBRSxDQUFBO1FBQ1osSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FDdkIsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQ3hELEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUM5RCxDQUFBO1FBQ0QsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ2IsYUFBYSxDQUFDLENBQUMsQ0FBQzthQUNoQixLQUFLLEVBQUUsQ0FBQTtRQUNaLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQ3ZCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUMzRCxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQ2hFLENBQUE7UUFDRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDYixhQUFhLENBQUMsQ0FBQyxDQUFDO2FBQ2hCLEtBQUssRUFBRSxDQUFBO1FBR1osSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNWLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNaLE9BQU8sR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFO2dCQUNkLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO2dCQUVqQyxzREFBc0Q7YUFDekQ7UUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDWixDQUFDO0lBbkREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0U7SUFHcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDRTtJQUdwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNFO0lBR3BCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7d0NBQ0M7SUFaRixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBeUQ1QjtJQUFELGVBQUM7Q0F6REQsQUF5REMsQ0F6RHFDLEVBQUUsQ0FBQyxTQUFTLEdBeURqRDtrQkF6RG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHNwMTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzcDI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc3AzOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHBwOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBsZXQgYSA9IGNjLnR3ZWVuKCkuc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKCkuYnkoMiwgeyBzY2FsZTogMC4wMywgcG9zaXRpb246IGNjLnYyKDIsIDQpIH0pLFxyXG4gICAgICAgICAgICBjYy50d2VlbigpLmJ5KDIsIHsgc2NhbGU6IC0wLjAzLCBwb3NpdGlvbjogY2MudjIoLTIsIC00KSB9KVxyXG4gICAgICAgIClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnNwMSlcclxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoYSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICBsZXQgYiA9IGNjLnR3ZWVuKCkuc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKCkuYnkoMSwgeyBzY2FsZTogMC4wMywgcG9zaXRpb246IGNjLnYyKDQsIDQpIH0pLFxyXG4gICAgICAgICAgICBjYy50d2VlbigpLmJ5KDEsIHsgc2NhbGU6IC0wLjAzLCBwb3NpdGlvbjogY2MudjIoLTQsIC00KSB9KVxyXG4gICAgICAgIClcclxuICAgICAgICBjYy50d2Vlbih0aGlzLnNwMilcclxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoYilcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICBsZXQgYyA9IGNjLnR3ZWVuKCkuc2VxdWVuY2UoXHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKCkuYnkoMC44LCB7IHNjYWxlOiAwLjAzLCBwb3NpdGlvbjogY2MudjIoMTIsIDApIH0pLFxyXG4gICAgICAgICAgICBjYy50d2VlbigpLmJ5KDAuOCwgeyBzY2FsZTogLTAuMDMsIHBvc2l0aW9uOiBjYy52MigtMTIsIDApIH0pXHJcbiAgICAgICAgKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc3AzKVxyXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihjKVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBudW0gPSAyO1xyXG4gICAgICAgICAgICB3aGlsZSAobnVtLS0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHApO1xyXG4gICAgICAgICAgICAgICAgbm9kZS56SW5kZXggLT0gMTA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBub2RlLnggPSBNYXRoLnJhbmRvbSgpICogNjAgLSAzMDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBub2RlLmdldENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpLmFwcGx5KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDAuMjUpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=