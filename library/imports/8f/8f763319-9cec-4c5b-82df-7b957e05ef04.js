"use strict";
cc._RF.push(module, '8f763MZnOxMW4Lfe5V+Be8E', 'propRocket');
// script/Game/propRocket.ts

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
        // update (dt) {}
    }
    propRocket.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (this.isDis)
            return;
        if (this.isDis)
            return;
        cc.log(other.tag);
        if (other.tag == Constant_1.tag.stone || other.tag == Constant_1.tag.stone3 || other.tag == Constant_1.tag.rocket) {
            this.isDis = true;
            CocosZ_1.cocosz.audioMgr.playRocketEffect2();
            this.scheduleOnce(function () {
                _this.node.destroy();
            }, 0.1);
            other.node.destroy();
            var prefab = CocosZ_1.cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            var node = cc.instantiate(prefab);
            other.node.parent.addChild(node);
            node.setPosition(other.node.getPosition());
        }
        else if (other.tag == Constant_1.tag.bat || other.tag == 81) {
            this.isDis = true;
            CocosZ_1.cocosz.audioMgr.playRocketEffect2();
            this.scheduleOnce(function () {
                _this.node.destroy();
            }, 0.1);
            other.node.destroy();
            var prefab = CocosZ_1.cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            var node = cc.instantiate(prefab);
            other.node.parent.addChild(node);
            node.setPosition(other.node.getPosition());
        }
        else if (other.tag == Constant_1.tag.player) {
            var node = other.node;
            var parent = node.parent;
            contact.disabled = true;
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
            node.setPosition(this.node.getPosition());
            this.node.destroy();
            cc.game.emit(Constant_1.default.E_GAME_FAID);
        }
        // else if (other.tag == tag.thorn) {
        //     this.isDis = true;
        //     cocosz.audioMgr.playRocketEffect2();
        //     this.scheduleOnce(() => {
        //         this.node.destroy();
        //     }, 0.1)
        //     other.node.destroy();
        //     let prefab = cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
        //     let node = cc.instantiate(prefab);
        //     this.node.parent.addChild(node);
        //     node.setPosition(this.node.getPosition());
        // }
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
            cc.log("--------------------10");
            contact.disabled = true;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    propRocket.prototype.start = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            CocosZ_1.cocosz.audioMgr.playRocketEffect1();
            var rb = _this.node.getComponent(cc.RigidBody);
            var v = rb.linearVelocity;
            if (_this.node.parent.angle == 0 || _this.node.parent.angle == 180) {
                var direction = _this.node.parent.angle == 0 ? 1 : -1;
                v.x = 1000 * direction;
                rb.linearVelocity = v;
            }
            else if (_this.node.parent.angle == 90 || _this.node.parent.angle == 270) {
                var direction = _this.node.parent.angle == 90 ? 1 : -1;
                v.y = 500 * direction;
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 93) {
                    v.y += 500 * direction;
                }
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 54 || CocosZ_1.cocosz.dataMgr.CurLevelId == 133) {
                    v.y -= 400 * direction;
                }
                rb.linearVelocity = v;
            }
            _this.node.off(cc.Node.EventType.TOUCH_START);
        });
    };
    propRocket = __decorate([
        ccclass
    ], propRocket);
    return propRocket;
}(cc.Component));
exports.default = propRocket;

cc._RF.pop();