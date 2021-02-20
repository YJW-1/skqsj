"use strict";
cc._RF.push(module, 'a24b0bw62NKK6VlS3eBOukU', 'propCacTus');
// script/Game/propCacTus.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var propCacTus = /** @class */ (function (_super) {
    __extends(propCacTus, _super);
    function propCacTus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hand1 = null;
        _this.hand2 = null;
        _this.l1 = null;
        _this.isDes = false;
        _this.action = null;
        _this.isAction = false;
        _this.angle = null;
        return _this;
    }
    propCacTus.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (other.tag == Constant_1.tag.thorn && (this.node.name == "cactus3" || this.node.name == "cactus2")) {
            if (this.node.parent.name == "rewardLevel") {
                contact.disabled = true;
                return;
            }
            var rb = this.l1.getComponent(cc.RigidBody);
            var v = this.l1.getComponent(cc.RigidBody).linearVelocity;
            v.x = 50;
            rb.linearVelocity = v;
        }
        else if (other.tag == Constant_1.tag.bigFan) {
            if (this.isDes)
                return;
            this.isDes = true;
            this.scheduleOnce(function () {
                _this.node.destroy();
            }, 0.3);
        }
    };
    // LIFE-CYCLE CALLBACKS:
    propCacTus.prototype.onDestroy = function () {
        this.unscheduleAllCallbacks();
    };
    propCacTus.prototype.onLoad = function () {
        if (this.node.name == "cactus3" || this.node.name == "cactus2") {
            this.hand1 = this.node.getChildByName("scale").getChildByName("hand1");
            this.hand2 = this.node.getChildByName("scale").getChildByName("hand2");
            this.l1 = this.node.getChildByName("l1");
        }
        else if (this.node.name == "cactus5") {
            this.hand1 = this.node.getChildByName("sp").getChildByName("hand1");
            this.hand2 = this.node.getChildByName("sp").getChildByName("hand2");
        }
        else {
            this.hand1 = this.node.getChildByName("hand1");
            this.hand2 = this.node.getChildByName("hand2");
        }
    };
    propCacTus.prototype.onThorn = function () {
        var prefab = CocosZ_1.cocosz.resMgr.getRes("thorn", cc.Prefab);
        var node = cc.instantiate(prefab);
        var hd = this.angle / 180 * Math.PI;
        // cc.log(this.angle);
        node.y = Math.random() * 12 - 6 - 10;
        node.x = 30;
        node.angle = this.angle;
        node.scale = 1.5;
        this.node.addChild(node);
        var rb = node.getComponent(cc.RigidBody);
        var v = rb.linearVelocity;
        // this.angle = Math.ceil(hd / Math.PI * 180);
        // cc.log(Math.sin(hd), Math.cos(hd))
        v.x = 700 * Math.cos(hd);
        v.y = 700 * Math.sin(hd);
        rb.linearVelocity = v;
        CocosZ_1.cocosz.audioMgr.playmCactusEffect2();
        this.isAction = false;
    };
    propCacTus.prototype.start = function () {
        // let rb = this.l1.getComponent(cc.RigidBody);
        // let v = this.l1.getComponent(cc.RigidBody).linearVelocity;
        // v.x = 100;
        // rb.linearVelocity = v;
        var _this = this;
        if (this.node.parent.name == "rewardLevel") {
            var a_1 = cc.tween().sequence(cc.tween().call(function () {
                _this.isAction = true;
                cc.tween(_this.hand2)
                    .by(0.03, { position: cc.v2(4, 0) })
                    .by(0.03, { position: cc.v2(-4, 0) })
                    .start();
                cc.tween(_this.hand1)
                    .by(0.03, { position: cc.v2(-4, 0) })
                    .by(0.03, { position: cc.v2(4, 0) })
                    .start();
            }), cc.tween().delay(0.12), cc.tween().call(function () {
                _this.onThorn();
            }));
            // this.action = cc.tween(this.node)
            //     .repeatForever(a)
            //     .start()
            this.schedule(function () {
                _this.action = cc.tween(_this.node)
                    .call(function () {
                    _this.isAction = true;
                    cc.tween(_this.hand2)
                        .by(0.03, { position: cc.v2(4, 0) })
                        .by(0.03, { position: cc.v2(-4, 0) })
                        .start();
                    cc.tween(_this.hand1)
                        .by(0.03, { position: cc.v2(-4, 0) })
                        .by(0.03, { position: cc.v2(4, 0) })
                        .start();
                })
                    .delay(0.12)
                    .call(function () {
                    _this.onThorn();
                })
                    .start();
            }, 0.15);
            this.scheduleOnce(function () {
                _this.unscheduleAllCallbacks();
            }, 25);
            this.node.parent.on(cc.Node.EventType.TOUCH_MOVE, (function (touch) {
                if (CocosZ_1.cocosz.gameMgr.isGameOver)
                    return;
                if (_this.isAction)
                    return;
                var pp = touch.getLocation();
                var pos2 = _this.node.parent.convertToNodeSpaceAR(pp);
                var pos = cc.v2(499 + pos2.x, pos2.y);
                var hd = pos.signAngle(cc.v2(100, 0));
                _this.angle = -hd / Math.PI * 180;
                _this.angle = _this.angle > 80 ? 80 : _this.angle;
                // cc.log(this.angle);
                // this.action.start();
            }));
            this.node.parent.on(cc.Node.EventType.TOUCH_START, (function (touch) {
                if (CocosZ_1.cocosz.gameMgr.isGameOver)
                    return;
                if (_this.isAction)
                    return;
                var pp = touch.getLocation();
                var pos2 = _this.node.parent.convertToNodeSpaceAR(pp);
                var pos = cc.v2(499 + pos2.x, pos2.y);
                var hd = pos.signAngle(cc.v2(100, 0));
                _this.angle = -hd / Math.PI * 180;
                _this.angle = _this.angle > 80 ? 80 : _this.angle;
                // this.action.start();
            }));
            return;
        }
        var a = cc.tween().sequence(cc.tween().by(0.2, { position: cc.v2(-4, 0) }), cc.tween().by(0.2, { position: cc.v2(4, 0) }));
        cc.tween(this.hand1)
            .repeatForever(a)
            .start();
        var b = cc.tween().sequence(cc.tween().by(0.2, { position: cc.v2(4, 0) }), cc.tween().by(0.2, { position: cc.v2(-4, 0) }));
        cc.tween(this.hand2)
            .repeatForever(b)
            .start();
        this.schedule(function () {
            var prefab = CocosZ_1.cocosz.resMgr.getRes("thorn", cc.Prefab);
            var node = cc.instantiate(prefab);
            node.zIndex -= 1009;
            // if (this.node.y >= 1000 || this.node.y <= -1000) {
            //     this.node.destroy();
            // }
            if (CocosZ_1.cocosz.dataMgr.CurLevelId == 136 && CocosZ_1.cocosz.gameMgr.surplusLevelNum > 0)
                return;
            if (_this.node.name == "cactus3" || _this.node.name == "cactus2") {
                node.y = Math.random() * 12 - 6 - 10;
                node.x = -30;
                node.angle = 180;
                _this.node.getChildByName("scale").addChild(node);
                var rb = node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                var angle = Math.PI / 180 * _this.node.angle;
                var sin = Math.sin(angle);
                var cos = Math.cos(angle);
                // cc.log(sin,cos,this.node.angle)
                CocosZ_1.cocosz.audioMgr.playmCactusEffect2();
                v.x = -700 * cos;
                v.y = -700 * sin;
                rb.linearVelocity = v;
            }
            else {
                node.y = Math.random() * 12 - 6 - 10;
                node.x = 30;
                _this.node.addChild(node);
                var rb = node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                v.x = 700 * _this.node.scaleX / Math.abs(_this.node.scaleX);
                rb.linearVelocity = v;
                CocosZ_1.cocosz.audioMgr.playmCactusEffect2();
            }
        }, 0.1);
    };
    propCacTus.prototype.update = function (dt) {
        // let rb = this.node.getComponent(cc.RigidBody)
        // let v = rb.linearVelocity;
        // v.x = 50;
        // rb.linearVelocity = v;
        // if (this.node.x >= 800) {
        //     this.node.destroy();
        // }
    };
    propCacTus = __decorate([
        ccclass
    ], propCacTus);
    return propCacTus;
}(cc.Component));
exports.default = propCacTus;

cc._RF.pop();