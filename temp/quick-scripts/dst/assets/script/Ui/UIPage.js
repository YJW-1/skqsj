
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Ui/UIPage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1a96e45OxdFxJTgY0QzMXt9', 'UIPage');
// script/Ui/UIPage.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UIPage = /** @class */ (function () {
    function UIPage() {
        this._page = null;
    }
    UIPage.prototype.open = function () {
        if (this._page) {
            this._page.active = true;
            this.onOpen();
        }
        else {
            console.log("_page为空,没有界面");
        }
    };
    /**关闭 */
    UIPage.prototype.close = function () {
        if (this._page) {
            this._page.active = false;
        }
        this.onClose();
    };
    UIPage.prototype.destroy = function () {
        if (this._page) {
            this._page.destroy();
        }
        this.onDestroy();
    };
    UIPage.prototype.getUIRoot = function () {
        return cc.find("Canvas");
    };
    UIPage.prototype.isValid = function () {
        return this._page && this._page.isValid;
    };
    UIPage.prototype.onOpen = function () { };
    UIPage.prototype.onClose = function () { };
    UIPage.prototype.onDestroy = function () { };
    UIPage = __decorate([
        ccclass
    ], UIPage);
    return UIPage;
}());
exports.default = UIPage;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxVaVxcVUlQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBREE7UUFFYyxVQUFLLEdBQVksSUFBSSxDQUFDO0lBc0NwQyxDQUFDO0lBcENVLHFCQUFJLEdBQVg7UUFDSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2pCO2FBQU07WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUNELFFBQVE7SUFDRCxzQkFBSyxHQUFaO1FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQzdCO1FBQ0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTSx3QkFBTyxHQUFkO1FBQ0ksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRVMsMEJBQVMsR0FBbkI7UUFDSSxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVNLHdCQUFPLEdBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDNUMsQ0FBQztJQUVTLHVCQUFNLEdBQWhCLGNBQTJCLENBQUM7SUFDbEIsd0JBQU8sR0FBakIsY0FBNEIsQ0FBQztJQUNuQiwwQkFBUyxHQUFuQixjQUE4QixDQUFDO0lBcENkLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0F1QzFCO0lBQUQsYUFBQztDQXZDRCxBQXVDQyxJQUFBO2tCQXZDb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVBhZ2Uge1xyXG4gICAgcHJvdGVjdGVkIF9wYWdlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgb3BlbigpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5fcGFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9wYWdlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMub25PcGVuKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJfcGFnZeS4uuepuizmsqHmnInnlYzpnaJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoq5YWz6ZetICovXHJcbiAgICBwdWJsaWMgY2xvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGFnZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fcGFnZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25EZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldFVJUm9vdCgpOiBjYy5Ob2RlIHtcclxuICAgICAgICByZXR1cm4gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNWYWxpZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGFnZSAmJiB0aGlzLl9wYWdlLmlzVmFsaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uT3BlbigpOiB2b2lkIHsgfVxyXG4gICAgcHJvdGVjdGVkIG9uQ2xvc2UoKTogdm9pZCB7IH1cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKTogdm9pZCB7IH1cclxuXHJcblxyXG59XHJcbiJdfQ==