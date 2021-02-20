
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/rain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '565fdRo1N9Kg4acwIGwexbK', 'rain');
// script/Game/rain.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var rain = /** @class */ (function (_super) {
    __extends(rain, _super);
    function rain() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDes = false;
        return _this;
    }
    rain.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (this.isDes)
            return;
        this.isDes = true;
        cc.tween(this.node)
            .to(1, { scale: 0.75, opacity: 0 })
            .call(function () {
            _this.node.destroy();
        })
            .start();
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    rain.prototype.start = function () {
    };
    rain.prototype.update = function (dt) {
        if (this.node.y <= -1000) {
            this.node.destroy();
        }
    };
    rain = __decorate([
        ccclass
    ], rain);
    return rain;
}(cc.Component));
exports.default = rain;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxyYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBRDlDO1FBQUEscUVBK0JDO1FBNUJHLFdBQUssR0FBWSxLQUFLLENBQUM7O0lBNEIzQixDQUFDO0lBekJHLDZCQUFjLEdBQWQsVUFBZSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFBbkMsaUJBU0M7UUFSRyxJQUFJLElBQUksQ0FBQyxLQUFLO1lBQUUsT0FBTztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNsQixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDbEMsSUFBSSxDQUFDO1lBQ0YsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUN2QixDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQTtJQUNoQixDQUFDO0lBRUQsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZixvQkFBSyxHQUFMO0lBRUEsQ0FBQztJQUVELHFCQUFNLEdBQU4sVUFBTyxFQUFFO1FBRUwsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3ZCO0lBQ0wsQ0FBQztJQTdCZ0IsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQThCeEI7SUFBRCxXQUFDO0NBOUJELEFBOEJDLENBOUJpQyxFQUFFLENBQUMsU0FBUyxHQThCN0M7a0JBOUJvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByYWluIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBpc0RlczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVzKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5pc0RlcyA9IHRydWU7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAudG8oMSwgeyBzY2FsZTogMC43NSwgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5ub2RlLnkgPD0gLTEwMDApIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19