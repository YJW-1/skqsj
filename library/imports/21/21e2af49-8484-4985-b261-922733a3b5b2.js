"use strict";
cc._RF.push(module, '21e2a9JhIRJhbJhkiczo7Wy', 'boom');
// script/Game/boom.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boom = null;
        _this.anim = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onFinish = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.node.destroy();
        }, 0.1);
    };
    NewClass.prototype.onBeginContact = function (contact, self, other) {
        cc.log(other.tag);
        if (this.node.scale < 4)
            return;
        if (other.tag == Constant_1.tag.thorn || other.tag == Constant_1.tag.bat || other.tag == Constant_1.tag.rocket || other.tag == Constant_1.tag.honeybee || other.tag == Constant_1.tag.floorThorn ||
            other.tag == Constant_1.tag.cloud || other.tag == Constant_1.tag.wooldenBox || other.tag == Constant_1.tag.laser || other.tag == Constant_1.tag.wooldenBox2 || other.tag == Constant_1.tag.stone3 || other.tag == Constant_1.tag.stone || other.tag == 777) {
            other.node.active = false;
        }
        else if (other.tag == Constant_1.tag.bigFan) {
            var prefab = CocosZ_1.cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            var node = cc.instantiate(prefab);
            other.node.addChild(node);
            other.node.getComponent("propBigFan").onDamaged();
        }
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        var _this = this;
        cc.tween(this.boom)
            .by(1, { scale: 0.15 })
            .call(function () {
            _this.boom.active = false;
            _this.anim.node.active = true;
            _this.anim.play();
            _this.node.scale = 4;
            _this.node.getComponent(cc.PhysicsCircleCollider).enabled = true;
        })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "boom", void 0);
    __decorate([
        property(cc.Animation)
    ], NewClass.prototype, "anim", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();