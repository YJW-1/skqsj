
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ysqszc/tt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4caefW3dnRIo7Gw7Klc9X5+', 'tt');
// script/ysqszc/tt.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.a = null;
        _this.istrue = false;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        cc.log(other.sensor);
        if (this.istrue)
            return;
        this.a = other;
        this.istrue = true;
        this.scheduleOnce(function () {
            // this.a = other.node.getComponent(cc.RigidBody);
            // let v = this.a.linearVelocity;
            // v.y = 10;
            // this.a.linearVelocity = v;
            // cc.tween(other.node)
            //     .by(1,{position:cc.v2(0,-100)})
            //     .start()
            other.sensor = true;
            other.apply();
            _this.scheduleOnce(function () {
                other.sensor = false;
                other.apply();
            }, 1);
        }, 1);
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        // this.a = this.node.getComponent(cc.PhysicsBoxCollider);
    };
    NewClass.prototype.start = function () {
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx5c3FzemNcXHR0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOztBQUU1RSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBRGxEO1FBQUEscUVBd0NDO1FBdENHLE9BQUMsR0FBaUIsSUFBSSxDQUFDO1FBQ3ZCLFlBQU0sR0FBWSxLQUFLLENBQUE7O1FBb0N2QixpQkFBaUI7SUFDckIsQ0FBQztJQW5DRyxpQ0FBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQW5DLGlCQXFCQztRQXBCRyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNwQixJQUFJLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTTtRQUN2QixJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRW5CLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxrREFBa0Q7WUFDbEQsaUNBQWlDO1lBQ2pDLFlBQVk7WUFDWiw2QkFBNkI7WUFDN0IsdUJBQXVCO1lBQ3ZCLHNDQUFzQztZQUN0QyxlQUFlO1lBQ2YsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDcEIsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFlBQVksQ0FBQztnQkFDZCxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDckIsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2xCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNULENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNULENBQUM7SUFHRCx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLDBEQUEwRDtJQUM5RCxDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUVBLENBQUM7SUFwQ2dCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0F1QzVCO0lBQUQsZUFBQztDQXZDRCxBQXVDQyxDQXZDcUMsRUFBRSxDQUFDLFNBQVMsR0F1Q2pEO2tCQXZDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBhOiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG4gICAgaXN0cnVlOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIGNjLmxvZyhvdGhlci5zZW5zb3IpXHJcbiAgICAgICAgaWYgKHRoaXMuaXN0cnVlKSByZXR1cm5cclxuICAgICAgICB0aGlzLmEgPSBvdGhlcjtcclxuICAgICAgICB0aGlzLmlzdHJ1ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gdGhpcy5hID0gb3RoZXIubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgLy8gbGV0IHYgPSB0aGlzLmEubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgIC8vIHYueSA9IDEwO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmEubGluZWFyVmVsb2NpdHkgPSB2O1xyXG4gICAgICAgICAgICAvLyBjYy50d2VlbihvdGhlci5ub2RlKVxyXG4gICAgICAgICAgICAvLyAgICAgLmJ5KDEse3Bvc2l0aW9uOmNjLnYyKDAsLTEwMCl9KVxyXG4gICAgICAgICAgICAvLyAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgb3RoZXIuc2Vuc29yID0gdHJ1ZTtcclxuICAgICAgICAgICAgb3RoZXIuYXBwbHkoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3RoZXIuc2Vuc29yID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBvdGhlci5hcHBseSgpO1xyXG4gICAgICAgICAgICB9LCAxKVxyXG4gICAgICAgIH0sIDEpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvLyB0aGlzLmEgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19