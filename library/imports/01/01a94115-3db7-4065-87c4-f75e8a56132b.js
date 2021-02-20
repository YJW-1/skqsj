"use strict";
cc._RF.push(module, '01a94EVPbdAZYfE916KVhMr', 'propWooldenBox');
// script/Game/propWooldenBox.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.onBeginContact = function (contact, self, other) {
        if (CocosZ_1.cocosz.sceneMgr.sceneName == "Game2") {
            var rb = this.node.getComponent(cc.RigidBody);
            rb.gravityScale = 0.5;
            return;
        }
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 113 && (other.tag == Constant_1.tag.balloon || other.tag == Constant_1.tag.balloon2)) {
            var rb = this.node.getComponent(cc.RigidBody);
            rb.gravityScale = 0.5;
            var v = rb.linearVelocity;
            v.x = 0, v.y = 0;
            rb.linearVelocity = v;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        var _this = this;
        if (CocosZ_1.cocosz.sceneMgr.sceneName == "Game" && this.node.name == "wooldenBox3") {
            var rb = this.node.getComponent(cc.RigidBody);
            rb.gravityScale = 1;
        }
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            if (CocosZ_1.cocosz.dataMgr.CurLevelId == 113 || CocosZ_1.cocosz.dataMgr.CurLevelId == 90) {
                return;
            }
            _this.node.destroy();
            CocosZ_1.cocosz.audioMgr.playBoxEffect();
            var prefab = CocosZ_1.cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            var node = cc.instantiate(prefab);
            _this.node.parent.addChild(node);
            node.setPosition(_this.node.getPosition());
        });
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 73) {
            this.node.getComponent(cc.PhysicsBoxCollider).friction = 0;
            this.node.getComponent(cc.PhysicsBoxCollider).apply();
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 81) {
            this.node.getComponent(cc.RigidBody).gravityScale = 0;
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 115) {
            this.node.getComponent(cc.RigidBody).fixedRotation = true;
        }
    };
    NewClass.prototype.update = function (dt) {
        // if (this.node.y >= 500) {
        //     this.node.destroy();
        // }
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();