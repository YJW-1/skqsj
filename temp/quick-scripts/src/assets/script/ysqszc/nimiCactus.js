"use strict";
cc._RF.push(module, '8eca90SzpVNWL80hiyevwUe', 'nimiCactus');
// script/ysqszc/nimiCactus.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var nimiCactus = /** @class */ (function (_super) {
    __extends(nimiCactus, _super);
    function nimiCactus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rb = null;
        return _this;
    }
    nimiCactus.prototype.onBeginContact = function (contact, self, other) {
        // if (other.tag == tag.ball) {
        this.node.getComponent(cc.RigidBody).gravityScale = 1;
        // }
    };
    // LIFE-CYCLE CALLBACKS:
    nimiCactus.prototype.onLoad = function () {
        this.rb = this.node.getComponent(cc.RigidBody);
    };
    nimiCactus.prototype.start = function () {
    };
    nimiCactus.prototype.update = function (dt) {
        var v = this.rb.linearVelocity;
        if (v.y < -300) {
            v.y = -300;
            this.rb.linearVelocity = v;
        }
    };
    nimiCactus = __decorate([
        ccclass
    ], nimiCactus);
    return nimiCactus;
}(cc.Component));
exports.default = nimiCactus;

cc._RF.pop();