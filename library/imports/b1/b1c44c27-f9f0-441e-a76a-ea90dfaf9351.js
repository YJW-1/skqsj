"use strict";
cc._RF.push(module, 'b1c44wn+fBEHqdq6pDfr5NR', 'bat2');
// script/ysqszc/bat2.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var bat = /** @class */ (function (_super) {
    __extends(bat, _super);
    function bat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rb = null;
        _this.action = null;
        _this.startPos = null;
        _this.isStart = false;
        _this.isTwo = false;
        _this.isRight = false;
        _this.isFirst = false;
        return _this;
    }
    bat.prototype.onBeginContact = function (contact, self, other) {
        if (this.node.getComponent(cc.RigidBody).gravityScale == 0) {
            this.node.getComponent(cc.RigidBody).gravityScale = 1;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    bat.prototype.onLoad = function () {
        this.rb = this.node.getComponent(cc.RigidBody);
    };
    bat.prototype.start = function () {
        // this.rb.linearVelocity = cc.v2(0, -200)
        // let a = cc.tween().sequence(
        //     cc.tween().by(1, { position: cc.v2(0, 15) }),
        //     cc.tween().by(1, { position: cc.v2(0, -15) })
        // )
        // this.action = cc.tween(this.node)
        //     .repeatForever(a)
        //     .start()
        var b = cc.tween().sequence(cc.tween().by(0.1, { angle: 30 }), cc.tween().by(0.1, { angle: -30 }));
        cc.tween(this.node.getChildByName("bat_wing1"))
            .repeatForever(b)
            .start();
        var c = cc.tween().sequence(cc.tween().by(0.1, { angle: -30 }), cc.tween().by(0.1, { angle: 30 }));
        cc.tween(this.node.getChildByName("bat_wing2"))
            .repeatForever(c)
            .start();
    };
    bat.prototype.update = function (dt) {
        var _this = this;
        // this.rb.linearVelocity = cc.v2(0, -200)
        // cc.log(this.node.y)
        if (this.node.y < -100 && !this.isStart) {
            this.isStart = true;
            // this.rb.linearVelocity = cc.v2(0, -500);
            // if(this.node.parent.getComponent("levelNum").curLevel)
            // this.scheduleOnce(() => {
            // }, 1)
            cc.log(this.node.x);
            if (Math.floor(this.node.x) % 300 == 0 && this.node.parent.getComponent("levelNum").curLevel == 18) {
                this.scheduleOnce(function () {
                    _this.rb.linearVelocity = cc.v2(-100 * _this.node.x / Math.abs(_this.node.x), -500);
                }, 1);
            }
            else {
                this.rb.linearVelocity = cc.v2(0, -500);
            }
        }
    };
    bat = __decorate([
        ccclass
    ], bat);
    return bat;
}(cc.Component));
exports.default = bat;

cc._RF.pop();