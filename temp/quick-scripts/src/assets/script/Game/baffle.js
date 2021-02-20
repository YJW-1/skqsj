"use strict";
cc._RF.push(module, '3be3eoSA9pL/ZgW1w+Y4hTb', 'baffle');
// script/Game/baffle.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var baffle = /** @class */ (function (_super) {
    __extends(baffle, _super);
    function baffle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    baffle.prototype.onBeginContact = function (contact, self, other) {
        // if (other.tag == tag.thorn || other.tag == tag.stone || other.tag == tag.honeybee ||
        //     other.tag == tag.carton || other.tag == tag.rain || other.tag == tag.stone3 ||
        //     other.tag == tag.wooldenBox || other.tag == tag.wooldenBox2 ||other.tag == tag.balloon2||other.tag == tag.rope ||
        //     other.tag == 777 || other.tag == 0) {
        //     contact.disabled = true;
        // }
        if (other.tag != Constant_1.tag.balloon) {
            contact.disabled = true;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    baffle.prototype.onDestroy = function () {
        cc.game.targetOff(this);
    };
    // onLoad () {}
    baffle.prototype.start = function () {
        var _this = this;
        if (this.node.name == "baffle2")
            return;
        cc.game.on(Constant_1.default.E_ROLE_MOVE, function () {
            var role = _this.node.parent.getChildByName("role").getChildByName("body");
            // let pos2 = role.convertToWorldSpaceAR(role.getPosition());
            // let pos = role.parent.convertToWorldSpaceAR(this.node.getPosition())
            // cc.log(Math.abs(pos.y - this.node.y), "this.node.y:" + this.node.y, "pos.y:" + pos.y, "pos2.y:" + pos2.y, "role.y:" + role.y, "--------Math.abs(role.getChildByName().y - this.node.y)")
            cc.log((role.y + role.parent.y) - _this.node.y);
            if (Math.abs((role.y + role.parent.y) - _this.node.y) < 300) {
                _this.node.destroy();
                cc.game.targetOff(_this);
            }
        }, this);
    };
    baffle = __decorate([
        ccclass
    ], baffle);
    return baffle;
}(cc.Component));
exports.default = baffle;

cc._RF.pop();