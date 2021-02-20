"use strict";
cc._RF.push(module, 'a43adeh2CFFe5gw/1731VJ4', 'thorn');
// script/Game/thorn.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rb = null;
        return _this;
    }
    NewClass.prototype.onBeginContact = function (contact, other, self) {
        this.node.destroy();
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        // this.rb = this.node.getComponent(cc.RigidBody);
    };
    NewClass.prototype.start = function () {
        // let v = this.rb.linearVelocity;
        // v.x = 400 * this.node.parent.scaleX;
        // this.rb.linearVelocity = v;
        // cc.log(v)
    };
    NewClass.prototype.update = function (dt) {
        var pos = this.node.convertToWorldSpaceAR(this.node.getPosition());
        // cc.log(pos.x, pos.y);
        if ((pos.x < -300 || pos.x > cc.winSize.width * 2) || (pos.y < 0 || pos.y > cc.winSize.height * 2)) {
            this.node.destroy();
        }
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();