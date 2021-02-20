"use strict";
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