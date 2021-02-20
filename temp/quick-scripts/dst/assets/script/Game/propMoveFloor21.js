
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/propMoveFloor21.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e524fkQ73JJm6RaQyDSlLBK', 'propMoveFloor21');
// script/Game/propMoveFloor21.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var propMoveFloor21 = /** @class */ (function (_super) {
    __extends(propMoveFloor21, _super);
    function propMoveFloor21() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rb = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    propMoveFloor21.prototype.onLoad = function () {
        this.rb = this.node.getComponent(cc.RigidBody);
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 78) {
            this.rb.gravityScale = 0.5;
        }
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 137) {
            this.rb.gravityScale = 0.5;
        }
    };
    propMoveFloor21.prototype.start = function () {
    };
    propMoveFloor21.prototype.update = function (dt) {
    };
    propMoveFloor21 = __decorate([
        ccclass
    ], propMoveFloor21);
    return propMoveFloor21;
}(cc.Component));
exports.default = propMoveFloor21;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxwcm9wTW92ZUZsb29yMjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUl2QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQTZDLG1DQUFZO0lBRHpEO1FBQUEscUVBd0JDO1FBdEJHLFFBQUUsR0FBaUIsSUFBSSxDQUFDOztJQXNCNUIsQ0FBQztJQW5CRyx3QkFBd0I7SUFFeEIsZ0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztTQUM5QjtRQUVELElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksR0FBRyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFHRCwrQkFBSyxHQUFMO0lBQ0EsQ0FBQztJQUVELGdDQUFNLEdBQU4sVUFBTyxFQUFFO0lBQ1QsQ0FBQztJQXRCZ0IsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXVCbkM7SUFBRCxzQkFBQztDQXZCRCxBQXVCQyxDQXZCNEMsRUFBRSxDQUFDLFNBQVMsR0F1QnhEO2tCQXZCb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29jb3NaXCI7XHJcbmltcG9ydCB7IHRhZyB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uc3RhbnRcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJvcE1vdmVGbG9vcjIxIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHJiOiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5yYiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA3OCkge1xyXG4gICAgICAgICAgICB0aGlzLnJiLmdyYXZpdHlTY2FsZSA9IDAuNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTM3KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmIuZ3Jhdml0eVNjYWxlID0gMC41O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICB9XHJcbn1cclxuIl19