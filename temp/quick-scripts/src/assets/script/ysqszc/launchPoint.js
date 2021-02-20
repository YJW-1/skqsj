"use strict";
cc._RF.push(module, '8a47bGbDM5OhY3aDJg3NKY+', 'launchPoint');
// script/ysqszc/launchPoint.ts

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
        _this.isStart = false;
        _this.number = 0;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.unscheduleAllCallbacks();
        }, 24);
    };
    NewClass.prototype.update = function (dt) {
        var _this = this;
        if (this.isStart)
            return;
        if (this.node.parent.getComponent("levelNum").curLevel == 20) {
            // cc.log(this.node.y, "-----------thsi.node.y==300")
            if (this.node.y <= 300) {
                this.isStart = true;
                this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
                this.schedule(function () {
                    var prefab = CocosZ_1.cocosz.resMgr.getRes("stone", cc.Prefab);
                    var node = cc.instantiate(prefab);
                    node.x = Math.random() * 400 - 200;
                    _this.node.addChild(node);
                    var rb = node.getComponent(cc.RigidBody);
                    rb.gravityScale = 1;
                    rb.linearVelocity = cc.v2(0, -200 * Math.random() - 100);
                }, 1);
            }
            return;
        }
        if (this.node.y + this.node.parent.y + this.node.parent.parent.y < 1300) {
            this.isStart = true;
            cc.log(this.node.y);
            this.schedule(function () {
                var prefab = CocosZ_1.cocosz.resMgr.getRes("stone", cc.Prefab);
                var node = cc.instantiate(prefab);
                _this.node.addChild(node);
                var rb = node.getComponent(cc.RigidBody);
                rb.gravityScale = 1;
                cc.log(_this.node.parent.getComponent("levelNum").curLevel);
                rb.linearVelocity = cc.v2(-300 * _this.node.x / Math.abs(_this.node.x), 300);
                if (_this.node.parent.getComponent("levelNum").curLevel == 15) {
                    rb.linearVelocity = cc.v2(-380 * _this.node.x / Math.abs(_this.node.x), -300);
                    // return
                }
            }, 1.5);
        }
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();