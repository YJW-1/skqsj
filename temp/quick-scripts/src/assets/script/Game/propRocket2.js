"use strict";
cc._RF.push(module, '9a1d0bV3D9EyKJKef71wk3d', 'propRocket2');
// script/Game/propRocket2.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var propRocket = /** @class */ (function (_super) {
    __extends(propRocket, _super);
    function propRocket() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDis = false;
        return _this;
    }
    propRocket.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (this.isDis)
            return;
        // cc.log(other.tag)
        if (CocosZ_1.cocosz.sceneMgr.sceneName == "rewardLevel2") {
            if (other.tag == Constant_1.tag.honeybee) {
                // this.scheduleOnce(() => {
                this.node.destroy();
                // }, 0.1)
                // other.node.destroy();
                var prefab = CocosZ_1.cocosz.resMgr.getRes("rocketEffect2", cc.Prefab);
                var node = cc.instantiate(prefab);
                other.node.parent.addChild(node);
                node.setPosition(other.node.getPosition());
            }
            contact.disabled = true;
            return;
        }
        if (other.tag == Constant_1.tag.stone || other.tag == Constant_1.tag.stone3 || other.tag == Constant_1.tag.rocket || other.tag == Constant_1.tag.wooldenBox2 || (other.tag == Constant_1.tag.thorn && CocosZ_1.cocosz.dataMgr.CurLevelId == 104)) {
            this.isDis = true;
            CocosZ_1.cocosz.audioMgr.playRocketEffect2();
            // this.scheduleOnce(() => {
            // }, 0.1)
            this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
            other.node.destroy();
            var prefab = CocosZ_1.cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            var node = cc.instantiate(prefab);
            other.node.parent.addChild(node);
            node.setPosition(other.node.getPosition());
            this.node.destroy();
        }
        else if (other.tag == Constant_1.tag.bat) {
            this.isDis = true;
            CocosZ_1.cocosz.audioMgr.playRocketEffect2();
            this.node.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
            this.scheduleOnce(function () {
                _this.node.destroy();
            }, 0.1);
            other.node.destroy();
            var prefab = CocosZ_1.cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            var node = cc.instantiate(prefab);
            other.node.parent.addChild(node);
            node.setPosition(other.node.getPosition());
        }
        else if (other.tag == Constant_1.tag.thorn) {
            // this.isDis = true;
            // cocosz.audioMgr.playRocketEffect2();
            // this.scheduleOnce(() => {
            //     this.node.destroy();
            // }, 0.1)
            // other.node.destroy();
            // let prefab = cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            // let node = cc.instantiate(prefab);
            // this.node.parent.addChild(node);
            // node.setPosition(this.node.getPosition());
            other.node.destroy();
            contact.disabled = true;
        }
        else if (other.tag == Constant_1.tag.balloon || other.tag == Constant_1.tag.balloon2) {
            if (other.node.parent != "prop") {
                other.node.parent.destroy();
            }
        }
        else if (other.tag == Constant_1.tag.rope) {
            contact.disabled = true;
        }
        else if (other.tag == Constant_1.tag.player) {
            var node = other.node;
            var parent = node.parent;
            contact.disabled = true;
            if (parent.name != "role") {
                parent = parent.parent;
            }
            if (parent.name != "role") {
                parent = parent.parent;
            }
            for (var _i = 0, _a = node.parent.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (child.name == "right_balloon" || child.name == "left_balloon")
                    continue;
                child.color = cc.color(0, 0, 0, 255);
                for (var _b = 0, _c = child.children; _b < _c.length; _b++) {
                    var child2 = _c[_b];
                    child2.color = cc.color(0, 0, 0, 255);
                    if (child.children.length > 0) {
                        for (var _d = 0, _e = child2.children; _d < _e.length; _d++) {
                            var child3 = _e[_d];
                            child3.color = cc.color(0, 0, 0, 255);
                        }
                    }
                }
            }
            var prefab = CocosZ_1.cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            var node2 = cc.instantiate(prefab);
            this.node.parent.addChild(node2);
            // cc.log(this.node.x,this.node.y)
            node2.setPosition(cc.v2(this.node.x, this.node.y));
            this.scheduleOnce(function () {
                _this.node.destroy();
            }, 0.01);
            cc.game.emit(Constant_1.default.E_GAME_FAID);
        }
        else if (other.tag == 0 || other.tag == 7) {
            this.isDis = true;
            CocosZ_1.cocosz.audioMgr.playRocketEffect2();
            this.scheduleOnce(function () {
                _this.node.destroy();
            }, 0.1);
            var prefab = CocosZ_1.cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            var node = cc.instantiate(prefab);
            this.node.parent.addChild(node);
            node.setPosition(this.node.getPosition());
        }
        else if (other.tag == Constant_1.tag.bigFan) {
            this.isDis = true;
            CocosZ_1.cocosz.audioMgr.playRocketEffect2();
            this.scheduleOnce(function () {
                _this.node.destroy();
            }, 0.01);
            var script = other.node.getComponent("propBigFan");
            script.onDamaged();
            var prefab = CocosZ_1.cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            var node = cc.instantiate(prefab);
            other.node.parent.addChild(node);
            node.setPosition(other.node.getPosition());
        }
        else if (other.tag == Constant_1.tag.rocketFloor) {
            // cc.log("--------------------10")
            contact.disabled = true;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    propRocket.prototype.start = function () {
        var _this = this;
        // this.node.on(cc.Node.EventType.TOUCH_START, () => {
        //     cocosz.audioMgr.playRocketEffect1();
        //     let rb = this.node.getComponent(cc.RigidBody);
        //     let v = rb.linearVelocity;
        //     let direction = this.node.parent.angle == 0 ? 1 : -1
        //     v.x = 700 * direction;
        //     rb.linearVelocity = v;
        //     this.node.off(cc.Node.EventType.TOUCH_START);
        // })
        this.scheduleOnce(function () {
            var rb = _this.node.getComponent(cc.RigidBody);
            if (!rb)
                return;
            _this.node.destroy();
        }, 4);
    };
    propRocket.prototype.update = function (dt) {
        // if (cocosz.sceneMgr.sceneName == "rewardLevel2") {
        //     // cc.log(this.node.y)
        //     if (this.node.y > 20) {
        //         cc.log("---------------销毁")
        //         this.node.destroy();
        //     }
        // }
        // if (cocosz.gameMgr.isGameOver) {
        //     this.unscheduleAllCallbacks()
        // }
    };
    propRocket = __decorate([
        ccclass
    ], propRocket);
    return propRocket;
}(cc.Component));
exports.default = propRocket;

cc._RF.pop();