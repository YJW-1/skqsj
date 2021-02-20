"use strict";
cc._RF.push(module, 'ed69aY8n+ZCVaCGAMUET+/k', 'theBall');
// script/ysqszc/theBall.ts

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
var theBall = /** @class */ (function (_super) {
    __extends(theBall, _super);
    function theBall() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ball = null;
        _this.camera = null;
        _this.listen = null;
        _this.rb = null;
        _this.particle = null;
        _this.pos = null;
        _this.isMove = false;
        _this.moveNum = 0;
        return _this;
    }
    theBall.prototype.onBeginContact = function (contact, self, other) {
        cc.log(other.tag, other.node.name, other.node.parent.name);
        if (other.tag == Constant_1.tag.balloon || other.tag == Constant_1.tag.player || other.tag == Constant_1.tag.rope) {
            // contact.disabled = true;
            var v = this.rb.linearVelocity;
            v.x = 0;
            v.y = 0;
            this.rb.linearVelocity = v;
        }
        else if (other.tag == Constant_1.tag.stone || other.tag == Constant_1.tag.thorn || other.tag == Constant_1.tag.bat || other.node.name == "wooldenBox3") {
            // cc.log(other.node.getComponent(cc.RigidBody).gravityScale, "---------other.gravityScale")
            if (other.node.getComponent(cc.RigidBody).gravityScale == 0) {
                other.node.getComponent(cc.RigidBody).gravityScale = 1;
            }
            if (other.node.getComponent(cc.RigidBody).type == cc.RigidBodyType.Kinematic) {
                // cc.log(other.node);
                // if(other.tag=="")
                // return
                CocosZ_1.cocosz.scheduleOnce(function () {
                    // cc.log(other.node);
                    if (!other.node)
                        return;
                    other.node.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic;
                    if (other.node.name == "sBoard") {
                        other.node.getComponent(cc.PhysicsBoxCollider).apply();
                    }
                }, 0.1);
            }
        }
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    theBall.prototype.start = function () {
        var _this = this;
        // this.listen.zIndex += 9999;
        this.listen.on(cc.Node.EventType.TOUCH_START, function (event) {
            if (+CocosZ_1.cocosz.dataMgr.isNovice == 0)
                return;
            // cc.game.emit(Constant.E_GAME_START);
        }, this);
        this.listen.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var pos = event.getDelta();
            // this.ball.x += pos.x;
            // this.ball.y += pos.y
            if (((_this.ball.x < -cc.winSize.width / 2 + 50) && pos.x < 0) || ((_this.ball.x > cc.winSize.width / 2 - 50) && pos.x > 0))
                return;
            if (((_this.ball.y < -cc.winSize.height / 2 + 50) && pos.y < 0) || ((_this.ball.y > cc.winSize.height / 2 - 50) && pos.y > 0))
                return;
            var v = _this.rb.linearVelocity;
            // cc.log(v.x, v.y)
            v.x = pos.x * 130;
            v.y = pos.y * 130;
            // cc.log(v.x, v.y)
            _this.rb.linearVelocity = v;
            // if (this.isMove) return;
            _this.isMove = true;
            _this.moveNum++;
            // if (this.moveNum > 3) {
            //     this.moveNum = 0;
            //     this.particle.resetSystem();
            // }
            // this.schedule(() => {
            //     this.particle.resetSystem();
            // }, 1)
        }, this);
        this.listen.on(cc.Node.EventType.TOUCH_END, function (event) {
            _this.isMove = false;
            _this.rb.linearVelocity = cc.v2(0, 0);
        }, this);
        this.listen.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            _this.isMove = false;
            _this.rb.linearVelocity = cc.v2(0, 0);
        }, this);
        this.pos = this.camera.getPosition();
    };
    theBall.prototype.lateUpdate = function (dt) {
        // if (!this.isMove) {
        var v = this.rb.linearVelocity;
        if (v.x != 0 || v.y != 0) {
            var prefab = CocosZ_1.cocosz.resMgr.getRes("ballParticle", cc.Prefab);
            var node = cc.instantiate(prefab);
            // node.x -= 10;
            // node.y += 10
            this.node.addChild(node);
            node.zIndex -= 100;
        }
        this.rb.linearVelocity = cc.v2(0, 0);
        // }
        // let x = this.camera.x - this.pos.x;
        // let y = this.camera.y - this.pos.y;
        // this.ball.x += x; this.ball.y += y;
        // this.pos = this.camera.getPosition();
        // this.ball.y += 0.000000001;
        // if (cocosz.sceneMgr.sceneName == "Game2") {
        //     if (this.node.y <= -3000 || Math.abs(this.node.x) > 500) {
        //         this.node.destroy()
        //         return
        //     };
        // }
    };
    __decorate([
        property(cc.Node)
    ], theBall.prototype, "ball", void 0);
    __decorate([
        property(cc.Node)
    ], theBall.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], theBall.prototype, "listen", void 0);
    __decorate([
        property(cc.RigidBody)
    ], theBall.prototype, "rb", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], theBall.prototype, "particle", void 0);
    theBall = __decorate([
        ccclass
    ], theBall);
    return theBall;
}(cc.Component));
exports.default = theBall;

cc._RF.pop();