
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/propChainRocket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ac6acjneXZCc556wpxq4Ogv', 'propChainRocket');
// script/Game/propChainRocket.ts

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
        _this.switch = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        var _this = this;
        this.switch.on(cc.Node.EventType.TOUCH_END, function () {
            _this.switch.off(cc.Node.EventType.TOUCH_END);
            for (var _i = 0, _a = _this.node.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (child.name == "rocket") {
                    var rb = child.addComponent(cc.RigidBody);
                    rb.enabledContactListener = true;
                    rb.type = cc.RigidBodyType.Kinematic;
                    var boxPhy = child.addComponent(cc.PhysicsBoxCollider);
                    boxPhy.tag = 31;
                    boxPhy.size.width = 60;
                    boxPhy.size.height = 30;
                    boxPhy.apply();
                    var v = rb.linearVelocity;
                    v.x = 1000 * -1;
                    if (_this.node.name == "chainRocket2") {
                        v.x = 500;
                    }
                    rb.linearVelocity = v;
                }
            }
        });
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "switch", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxwcm9wQ2hhaW5Sb2NrZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7O0FBRTVFLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFEbEQ7UUFBQSxxRUF1Q0M7UUFuQ0csWUFBTSxHQUFZLElBQUksQ0FBQzs7UUFrQ3ZCLGlCQUFpQjtJQUNyQixDQUFDO0lBaENHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUFBLGlCQXlCQztRQXhCRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDeEMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDNUMsS0FBa0IsVUFBa0IsRUFBbEIsS0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtnQkFBakMsSUFBSSxLQUFLLFNBQUE7Z0JBQ1YsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLFFBQVEsRUFBRTtvQkFDeEIsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzFDLEVBQUUsQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUE7b0JBQ2hDLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7b0JBRXJDLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUM7b0JBQ3ZELE1BQU0sQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO29CQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztvQkFDeEIsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUdmLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUM7b0JBQzFCLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUNoQixJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLGNBQWMsRUFBRTt3QkFDbEMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7cUJBQ2I7b0JBQ0QsRUFBRSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7aUJBQ3pCO2FBQ0o7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFoQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDSztJQUhOLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FzQzVCO0lBQUQsZUFBQztDQXRDRCxBQXNDQyxDQXRDcUMsRUFBRSxDQUFDLFNBQVMsR0FzQ2pEO2tCQXRDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzd2l0Y2g6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnN3aXRjaC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zd2l0Y2gub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORClcclxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5ub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQubmFtZSA9PSBcInJvY2tldFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJiID0gY2hpbGQuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmIuZW5hYmxlZENvbnRhY3RMaXN0ZW5lciA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICByYi50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5LaW5lbWF0aWM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBib3hQaHkgPSBjaGlsZC5hZGRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBib3hQaHkudGFnID0gMzE7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94UGh5LnNpemUud2lkdGggPSA2MDtcclxuICAgICAgICAgICAgICAgICAgICBib3hQaHkuc2l6ZS5oZWlnaHQgPSAzMDtcclxuICAgICAgICAgICAgICAgICAgICBib3hQaHkuYXBwbHkoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2ID0gcmIubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgdi54ID0gMTAwMCAqIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PSBcImNoYWluUm9ja2V0MlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYueCA9IDUwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmIubGluZWFyVmVsb2NpdHkgPSB2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==