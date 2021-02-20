"use strict";
cc._RF.push(module, '61ffcREE6BEN5PYvo8embjf', 'fan');
// script/Game/fan.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var fan = /** @class */ (function (_super) {
    __extends(fan, _super);
    function fan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fanBlade = null;
        _this.btn = null;
        _this.btnSelect = null;
        _this.pos = null;
        _this.action = null;
        _this.isRight = false;
        _this.isLeft = false;
        _this.isAnimation = false;
        _this.anim = null;
        _this.spFrame = null;
        _this.spCom = null;
        _this.isFirstMove = false;
        _this.audioID = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    fan.prototype.onLoad = function () {
        this.fanBlade = this.node.getChildByName("fanBlade");
        this.btn = this.node.getChildByName("btn");
        this.btnSelect = this.btn.getChildByName("btnSelect");
        this.anim = this.fanBlade.getComponent(cc.Animation);
        this.spFrame = this.fanBlade.getComponent(cc.Sprite).spriteFrame;
        this.spCom = this.fanBlade.getComponent(cc.Sprite);
    };
    fan.prototype.onFanRight = function () {
        if (Math.random() > 0.5) {
            // let prefab = cocosz.resMgr.getRes("fanLiZi", cc.Prefab);
            // let node = cc.instantiate(prefab);
            // let Game = cc.find("Canvas/Game/gameBg");
            // let p1 = this.node.parent.convertToWorldSpaceAR(this.node.getPosition())
            // let p2 = Game.convertToNodeSpaceAR(p1);
            // node.setPosition(p2);
            // node.x += -100 - 100 * Math.random()-300;
            // node.y += 100 * Math.random() - 50;
            // node.scale = 1;
            // Game.addChild(node);
            // node.zIndex -= 99;
            // cc.tween(node)
            //     .by(0.4, { opacity: 150, position: cc.v2(150, 0) })
            //     .by(0.4, { opacity: -150, position: cc.v2(150, 0) })
            //     .call(() => {
            //         node.destroy();
            //     })
            //     .start()
            var prefab = CocosZ_1.cocosz.resMgr.getRes("fanLiZi", cc.Prefab);
            var node_1 = cc.instantiate(prefab);
            node_1.x = -30 - 100 * Math.random() - 200;
            node_1.y = 60 * Math.random() - 30;
            this.node.addChild(node_1);
            cc.tween(node_1)
                .by(0.4, { opacity: 150, position: cc.v2(100, 0) })
                .by(0.4, { opacity: -150, position: cc.v2(100, 0) })
                .call(function () {
                node_1.destroy();
            })
                .start();
        }
        var hd = Math.PI / 180 * this.node.angle;
        var cos = Math.cos(hd);
        var sin = Math.sin(hd);
        var startPos = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
        var startPos2 = cc.v2(startPos.x, startPos.y + 60);
        var startPos3 = cc.v2(startPos.x, startPos.y - 60);
        var endPos = cc.v2(startPos.x - 1000 * cos, startPos.y + (300 * sin));
        var endPos2 = cc.v2(startPos.x - 1000 * cos, startPos.y + (300 * sin) + 60);
        var endPos3 = cc.v2(startPos.x - 1000 * cos, startPos.y + (300 * sin) - 60);
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 14) {
            endPos = cc.v2(startPos.x - 1500 * cos, startPos.y + (300 * sin));
            endPos2 = cc.v2(startPos.x - 1500 * cos, startPos.y + (300 * sin) + 60);
            endPos3 = cc.v2(startPos.x - 1500 * cos, startPos.y + (300 * sin) - 60);
        }
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 103) {
            endPos = cc.v2(startPos.x - 1500 * cos, startPos.y + (300 * sin));
            endPos2 = cc.v2(startPos.x - 1500 * cos, startPos.y + (300 * sin) + 60);
            endPos3 = cc.v2(startPos.x - 1500 * cos, startPos.y + (300 * sin) - 60);
        }
        var result = CocosZ_1.cocosz.gameMgr.onRayCast(startPos, endPos);
        var result2 = CocosZ_1.cocosz.gameMgr.onRayCast(startPos2, endPos2);
        var result3 = CocosZ_1.cocosz.gameMgr.onRayCast(startPos3, endPos3);
        // //cc.log(cos, sin, "onFanRight", startPos.x, startPos.y, endPos.x, endPos.y, endPos2.x, endPos2.y, endPos3.x, endPos3.y);
        //cc.log(result2[0].collider.tag, result[0].collider.tag, result3[0].collider.tag, "----------------TAG");
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var physics = result_1[_i];
            var cTag = physics.collider.tag;
            if (cTag == Constant_1.tag.thorn || cTag == Constant_1.tag.honeybee) {
                var rb = physics.collider.node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                v.x += 20 * cos;
                if (v.x <= 400 * cos) {
                    v.x += 10 * cos;
                }
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 73 && cTag == Constant_1.tag.honeybee) {
                    v.x += 500 * cos;
                    v.y = 0;
                    var node = physics.collider.node;
                    var sc = node.getComponent("propHoneybee");
                    sc.isFan = true;
                    physics.collider.restitution = 0;
                }
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 103 && cTag == Constant_1.tag.thorn) {
                    v.x += 1000 * cos;
                }
                rb.linearVelocity = v;
            }
            else if (cTag == Constant_1.tag.stone || cTag == Constant_1.tag.stone3 || cTag == Constant_1.tag.cloud) {
                var rb = physics.collider.node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                v.x += 15 * cos;
                if (v.x <= 400 * cos) {
                    v.x += 15 * cos;
                }
                rb.linearVelocity = v;
                return;
            }
            else if (cTag == 0) {
                //cc.log("-------------return")
                break;
            }
            else if (cTag == Constant_1.tag.player || cTag == Constant_1.tag.rope || cTag == Constant_1.tag.balloon) {
                var rb = physics.collider.node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                v.x += 5 * cos;
                if (cTag == Constant_1.tag.rope) {
                    v.x += 10 * cos;
                }
                rb.linearVelocity = v;
            }
        }
        for (var _a = 0, result2_1 = result2; _a < result2_1.length; _a++) {
            var physics = result2_1[_a];
            var cTag = physics.collider.tag;
            if (cTag == Constant_1.tag.thorn || cTag == Constant_1.tag.honeybee) {
                var rb = physics.collider.node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                v.x += 20 * cos;
                if (v.x <= 400 * cos) {
                    v.x += 10 * cos;
                }
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 73 && cTag == Constant_1.tag.honeybee) {
                    v.x += 500 * cos;
                    v.y = 0;
                    var node = physics.collider.node;
                    var sc = node.getComponent("propHoneybee");
                    sc.isFan = true;
                    physics.collider.restitution = 0;
                }
                if (v.x <= 700 && CocosZ_1.cocosz.dataMgr.CurLevelId == 40) {
                    v.x += 100 * cos;
                }
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 103 && cTag == Constant_1.tag.thorn) {
                    v.x += 1000 * cos;
                }
                rb.linearVelocity = v;
            }
            else if (cTag == Constant_1.tag.stone || cTag == Constant_1.tag.stone3 || cTag == Constant_1.tag.cloud) {
                var rb = physics.collider.node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                v.x += 15 * cos;
                if (v.x <= 400 * cos) {
                    v.x += 15 * cos;
                }
                if (v.x <= 700 && CocosZ_1.cocosz.dataMgr.CurLevelId == 40) {
                    v.x += 100 * cos;
                }
                rb.linearVelocity = v;
                return;
            }
            else if (cTag == 0) {
                break;
            }
            else if (cTag == Constant_1.tag.player || cTag == Constant_1.tag.rope || cTag == Constant_1.tag.balloon) {
                var rb = physics.collider.node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                v.x += 5 * cos;
                if (cTag == Constant_1.tag.rope) {
                    v.x += 10 * cos;
                }
                rb.linearVelocity = v;
            }
        }
        for (var _b = 0, result3_1 = result3; _b < result3_1.length; _b++) {
            var physics = result3_1[_b];
            var cTag = physics.collider.tag;
            if (cTag == Constant_1.tag.thorn || cTag == Constant_1.tag.honeybee) {
                var rb = physics.collider.node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                v.x += 20 * cos;
                if (v.x <= 400 * cos) {
                    v.x += 10 * cos;
                }
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 73 && cTag == Constant_1.tag.honeybee) {
                    v.x += 500 * cos;
                    v.y = 0;
                    var node = physics.collider.node;
                    var sc = node.getComponent("propHoneybee");
                    sc.isFan = true;
                    physics.collider.restitution = 0;
                }
                if (v.x <= 700 && CocosZ_1.cocosz.dataMgr.CurLevelId == 40) {
                    v.x += 100 * cos;
                }
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 103 && cTag == Constant_1.tag.thorn) {
                    v.x += 1000 * cos;
                }
                rb.linearVelocity = v;
            }
            else if (cTag == Constant_1.tag.stone || cTag == Constant_1.tag.stone3 || cTag == Constant_1.tag.cloud) {
                var rb = physics.collider.node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                v.x += 15 * cos;
                if (v.x <= 400 * cos) {
                    v.x += 15 * cos;
                }
                rb.linearVelocity = v;
                return;
            }
            else if (cTag == 0) {
                break;
            }
            else if (cTag == Constant_1.tag.player || cTag == Constant_1.tag.rope || cTag == Constant_1.tag.balloon) {
                var rb = physics.collider.node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                v.x += 5 * cos;
                if (cTag == Constant_1.tag.rope) {
                    v.x += 10 * cos;
                }
                rb.linearVelocity = v;
            }
        }
    };
    fan.prototype.onFanLeft = function () {
        if (Math.random() > 0.5) {
            // let prefab = cocosz.resMgr.getRes("fanLiZi", cc.Prefab);
            // let node = cc.instantiate(prefab);
            // let Game = cc.find("Canvas/Game/gameBg");
            // let p1 = this.node.parent.convertToWorldSpaceAR(this.node.getPosition())
            // let p2 = Game.convertToNodeSpaceAR(p1);
            // node.setPosition(p2);
            // node.x += -100 - 100 * Math.random();
            // node.y += 100 * Math.random() - 50;
            // node.scale = 1;
            // Game.addChild(node);
            // node.zIndex -= 99;
            // cc.tween(node)
            //     .by(0.4, { opacity: 150, position: cc.v2(-150, 0) })
            //     .by(0.4, { opacity: -150, position: cc.v2(-150, 0) })
            //     .call(() => {
            //         node.destroy();
            //     })
            //     .start()
            var prefab = CocosZ_1.cocosz.resMgr.getRes("fanLiZi", cc.Prefab);
            var node_2 = cc.instantiate(prefab);
            node_2.x = -30 - 100 * Math.random();
            node_2.y = 60 * Math.random() - 30;
            this.node.addChild(node_2);
            cc.tween(node_2)
                .by(0.4, { opacity: 150, position: cc.v2(-100, 0) })
                .by(0.4, { opacity: -150, position: cc.v2(-100, 0) })
                .call(function () {
                node_2.destroy();
            })
                .start();
        }
        var hd = Math.PI / 180 * this.node.angle;
        var cos = Math.cos(hd);
        var sin = Math.sin(hd);
        var startPos = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
        var startPos2 = cc.v2(startPos.x, startPos.y + 60);
        var startPos3 = cc.v2(startPos.x, startPos.y - 60);
        var endPos = cc.v2(startPos.x - 1000 * cos, startPos.y + (300 * sin));
        var endPos2 = cc.v2(startPos.x - 1000 * cos, startPos.y + (300 * sin) + 60);
        var endPos3 = cc.v2(startPos.x - 1000 * cos, startPos.y + (300 * sin) - 60);
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 14) {
            endPos = cc.v2(startPos.x - 1500 * cos, startPos.y + (300 * sin));
            endPos2 = cc.v2(startPos.x - 1500 * cos, startPos.y + (300 * sin) + 60);
            endPos3 = cc.v2(startPos.x - 1500 * cos, startPos.y + (300 * sin) - 60);
        }
        var result = CocosZ_1.cocosz.gameMgr.onRayCast(startPos, endPos);
        var result2 = CocosZ_1.cocosz.gameMgr.onRayCast(startPos2, endPos2);
        var result3 = CocosZ_1.cocosz.gameMgr.onRayCast(startPos3, endPos3);
        // cc.log(cos, sin, "onFanLeft", startPos.x, startPos.y, endPos.x, endPos.y, endPos2.x, endPos2.y, endPos3.x, endPos3.y);
        // //cc.log(result2[0].collider.tag, result[0].collider.tag, result3[0].collider.tag, "----------------TAG")
        // let prefab = cocosz.resMgr.getRes("rope", cc.Prefab);
        // let node1 = cc.instantiate(prefab);
        // let node2 = cc.instantiate(prefab);
        // let node3 = cc.instantiate(prefab);
        // this.node.addChild(node1);
        // this.node.addChild(node2);
        // this.node.addChild(node3);
        // node1.setPosition(this.node.convertToNodeSpaceAR(startPos))
        // node2.setPosition(this.node.convertToNodeSpaceAR(startPos2))
        // node3.setPosition(this.node.convertToNodeSpaceAR(startPos3))
        for (var _i = 0, result_2 = result; _i < result_2.length; _i++) {
            var physics = result_2[_i];
            var cTag = physics.collider.tag;
            if (cTag == Constant_1.tag.thorn || cTag == Constant_1.tag.honeybee) {
                var rb = physics.collider.node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                v.x -= 20 * cos;
                if (v.x >= -400 * cos) {
                    v.x -= 10 * cos;
                }
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 58 && cTag == Constant_1.tag.thorn) {
                    v.x -= 150 * cos;
                }
                rb.linearVelocity = v;
            }
            else if (cTag == Constant_1.tag.stone || cTag == Constant_1.tag.stone3 || cTag == Constant_1.tag.cloud) {
                var rb = physics.collider.node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                v.x -= 15 * cos;
                if (v.x >= -400 * cos) {
                    v.x -= 15 * cos;
                }
                rb.linearVelocity = v;
                return;
            }
            else if (cTag == 0) {
                break;
            }
            else if (cTag == Constant_1.tag.player || cTag == Constant_1.tag.rope || cTag == Constant_1.tag.balloon) {
                var rb = physics.collider.node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                v.x -= 5 * cos;
                if (cTag == Constant_1.tag.rope) {
                    v.x -= 10 * cos;
                }
                rb.linearVelocity = v;
            }
        }
        for (var _a = 0, result2_2 = result2; _a < result2_2.length; _a++) {
            var physics = result2_2[_a];
            var cTag = physics.collider.tag;
            if (cTag == Constant_1.tag.thorn || cTag == Constant_1.tag.honeybee) {
                var rb = physics.collider.node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                v.x -= 20 * cos;
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 73 && cTag == Constant_1.tag.honeybee) {
                    v.x -= 1000 * cos;
                }
                if (v.x >= -400 * cos) {
                    v.x -= 10 * cos;
                }
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 58 && cTag == Constant_1.tag.thorn) {
                    v.x -= 150 * cos;
                }
                rb.linearVelocity = v;
            }
            else if (cTag == Constant_1.tag.stone || cTag == Constant_1.tag.stone3 || cTag == Constant_1.tag.cloud) {
                var rb = physics.collider.node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                v.x -= 15 * cos;
                if (v.x >= -400 * cos) {
                    v.x -= 15 * cos;
                }
                rb.linearVelocity = v;
                return;
            }
            else if (cTag == 0) {
                break;
            }
            else if (cTag == Constant_1.tag.player || cTag == Constant_1.tag.rope || cTag == Constant_1.tag.balloon) {
                var rb = physics.collider.node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                v.x -= 5 * cos;
                if (cTag == Constant_1.tag.rope) {
                    v.x -= 10 * cos;
                }
                rb.linearVelocity = v;
            }
        }
        for (var _b = 0, result3_2 = result3; _b < result3_2.length; _b++) {
            var physics = result3_2[_b];
            var cTag = physics.collider.tag;
            if (cTag == Constant_1.tag.thorn || cTag == Constant_1.tag.honeybee) {
                var rb = physics.collider.node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                v.x -= 20 * cos;
                if (v.x >= -400 * cos) {
                    v.x -= 10 * cos;
                }
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 58 && cTag == Constant_1.tag.thorn) {
                    v.x -= 150 * cos;
                }
                rb.linearVelocity = v;
            }
            else if (cTag == Constant_1.tag.stone || cTag == Constant_1.tag.stone3 || cTag == Constant_1.tag.cloud) {
                var rb = physics.collider.node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                v.x -= 15 * cos;
                if (v.x >= -400 * cos) {
                    v.x -= 15 * cos;
                }
                rb.linearVelocity = v;
                return;
            }
            else if (cTag == 0) {
                break;
            }
            else if (cTag == Constant_1.tag.player || cTag == Constant_1.tag.rope || cTag == Constant_1.tag.balloon) {
                var rb = physics.collider.node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                v.x -= 5 * cos;
                if (cTag == Constant_1.tag.rope) {
                    v.x -= 10 * cos;
                }
                rb.linearVelocity = v;
            }
        }
    };
    // onFanOpen() {
    //     this.schedule(() => {
    //     }, 0.02)
    // }
    fan.prototype.onFanClose = function () {
        this.unscheduleAllCallbacks();
    };
    fan.prototype.start = function () {
        var _this = this;
        this.btn.on(cc.Node.EventType.TOUCH_START, function (event) {
            if (_this.action) {
                _this.action.stop();
            }
            var pos = _this.btn.parent.convertToNodeSpaceAR(event.getLocation());
            _this.pos = pos;
            _this.btnSelect.active = true;
        });
        this.btn.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            if (_this.action) {
                _this.action.stop();
            }
            var pos = _this.btn.parent.convertToNodeSpaceAR(event.getLocation());
            var dis = _this.pos.x - pos.x;
            _this.pos = pos;
            var x = 0 + _this.btn.x;
            if (x - dis <= 22 && x - dis >= 0) {
                _this.btn.x = x - dis;
                if (!_this.isRight && !_this.isLeft) {
                    if (_this.btn.x <= 22 && _this.btn.x >= 20) {
                        _this.isRight = true;
                        if (!_this.isFirstMove && CocosZ_1.cocosz.dataMgr.AudioEffectOn) {
                            _this.isFirstMove = true;
                            var clip = CocosZ_1.cocosz.resMgr.getRes("mFan", cc.AudioClip);
                            _this.audioID = cc.audioEngine.play(clip, true, 0.7);
                        }
                    }
                    else if (_this.btn.x <= 2 && _this.btn.x >= 0) {
                        _this.isLeft = true;
                        if (!_this.isFirstMove && CocosZ_1.cocosz.dataMgr.AudioEffectOn) {
                            _this.isFirstMove = true;
                            var clip = CocosZ_1.cocosz.resMgr.getRes("mFan", cc.AudioClip);
                            _this.audioID = cc.audioEngine.play(clip, true, 0.7);
                        }
                    }
                }
            }
        });
        this.btn.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            _this.onFanClose();
            _this.anim.stop();
            _this.spCom.spriteFrame = _this.spFrame;
            _this.isAnimation = false;
            _this.isRight = false;
            _this.isLeft = false;
            _this.action = cc.tween(_this.btn)
                .to(0.3, { position: cc.v2(11, 0) })
                .start();
            _this.btnSelect.active = false;
            _this.isFirstMove = false;
            if (_this.audioID) {
                cc.audioEngine.stop(_this.audioID);
            }
        });
        this.btn.on(cc.Node.EventType.TOUCH_END, function (event) {
            _this.onFanClose();
            _this.anim.stop();
            _this.isAnimation = false;
            _this.isRight = false;
            _this.isLeft = false;
            _this.action = cc.tween(_this.btn)
                .to(0.3, { position: cc.v2(11, 0) })
                .start();
            _this.btnSelect.active = false;
            _this.isFirstMove = false;
            if (_this.audioID) {
                cc.audioEngine.stop(_this.audioID);
            }
        });
    };
    fan.prototype.update = function (dt) {
        if (this.isLeft || this.isRight) {
            // this.isLeft = true
            // this.onFanOpen();
            if (this.isRight) {
                this.onFanRight();
            }
            else {
                this.onFanLeft();
            }
            if (!this.isAnimation) {
                this.anim.play();
            }
            ;
            this.isAnimation = true;
        }
    };
    fan = __decorate([
        ccclass
    ], fan);
    return fan;
}(cc.Component));
exports.default = fan;

cc._RF.pop();