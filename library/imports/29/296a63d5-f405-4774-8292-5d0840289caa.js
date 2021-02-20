"use strict";
cc._RF.push(module, '296a6PV9AVHdIKSXQhAKJyq', 'cactus');
// script/Game/cactus.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rb = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onDestroy = function () {
        cc.log("--------des");
    };
    NewClass.prototype.onLoad = function () {
        this.rb = this.node.getComponent(cc.RigidBody);
    };
    NewClass.prototype.start = function () {
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 42) {
            this.rb.gravityScale = 1;
        }
        // if (cocosz.dataMgr.CurLevelId == 81) {
        //     this.rb.gravityScale = 0.1;
        // }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 22 || CocosZ_1.cocosz.dataMgr.CurLevelId == 124) {
            var poly = this.node.getComponent(cc.PhysicsPolygonCollider);
            poly.friction = 0;
            poly.apply();
        }
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();