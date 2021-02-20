
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/fan.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxmYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUM3QyxrREFBNEM7QUFFdEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFpQyx1QkFBWTtJQUQ3QztRQUFBLHFFQTBpQkM7UUF2aUJHLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUNwQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLFNBQUcsR0FBUSxJQUFJLENBQUM7UUFDaEIsWUFBTSxHQUFRLElBQUksQ0FBQztRQUVuQixhQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsaUJBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsVUFBSSxHQUFpQixJQUFJLENBQUE7UUFDekIsYUFBTyxHQUFtQixJQUFJLENBQUE7UUFDOUIsV0FBSyxHQUFjLElBQUksQ0FBQztRQUl4QixpQkFBVyxHQUFHLEtBQUssQ0FBQztRQUVwQixhQUFPLEdBQVEsSUFBSSxDQUFDOztJQXNoQnhCLENBQUM7SUFyaEJHLHdCQUF3QjtJQUV4QixvQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFD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R0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFFNUUsSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxFQUFFLEVBQUU7WUFDakMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsRSxPQUFPLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUN4RSxPQUFPLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUMzRTtRQUNELElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksR0FBRyxFQUFFO1lBQ2xDLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FB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QyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNuRCxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNuRCxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUM1RSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBRTVFLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksRUFBRSxFQUFFO1lBQ2pDLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEUsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDeEUs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QTthQUNuQjtZQUFBLENBQUM7WUFDRixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUMzQjtJQUNMLENBQUM7SUF4aUJnQixHQUFHO1FBRHZCLE9BQU87T0FDYSxHQUFHLENBeWlCdkI7SUFBRCxVQUFDO0NBemlCRCxBQXlpQkMsQ0F6aUJnQyxFQUFFLENBQUMsU0FBUyxHQXlpQjVDO2tCQXppQm9CLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5pbXBvcnQgeyB0YWcgfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvbnN0YW50XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZmFuIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBmYW5CbGFkZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBidG46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgYnRuU2VsZWN0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHBvczogYW55ID0gbnVsbDtcclxuICAgIGFjdGlvbjogYW55ID0gbnVsbDtcclxuXHJcbiAgICBpc1JpZ2h0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc0xlZnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzQW5pbWF0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBhbmltOiBjYy5BbmltYXRpb24gPSBudWxsXHJcbiAgICBzcEZyYW1lOiBjYy5TcHJpdGVGcmFtZSA9IG51bGxcclxuICAgIHNwQ29tOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuXHJcblxyXG4gICAgaXNGaXJzdE1vdmUgPSBmYWxzZTtcclxuXHJcbiAgICBhdWRpb0lEOiBhbnkgPSBudWxsO1xyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuZmFuQmxhZGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmYW5CbGFkZVwiKTtcclxuICAgICAgICB0aGlzLmJ0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0blwiKTtcclxuICAgICAgICB0aGlzLmJ0blNlbGVjdCA9IHRoaXMuYnRuLmdldENoaWxkQnlOYW1lKFwiYnRuU2VsZWN0XCIpO1xyXG4gICAgICAgIHRoaXMuYW5pbSA9IHRoaXMuZmFuQmxhZGUuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcbiAgICAgICAgdGhpcy5zcEZyYW1lID0gdGhpcy5mYW5CbGFkZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcclxuICAgICAgICB0aGlzLnNwQ29tID0gdGhpcy5mYW5CbGFkZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25GYW5SaWdodCgpIHtcclxuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xyXG4gICAgICAgICAgICAvLyBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJmYW5MaVppXCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgIC8vIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgLy8gbGV0IEdhbWUgPSBjYy5maW5kKFwiQ2FudmFzL0dhbWUvZ2FtZUJnXCIpO1xyXG4gICAgICAgICAgICAvLyBsZXQgcDEgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSlcclxuICAgICAgICAgICAgLy8gbGV0IHAyID0gR2FtZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwMSk7XHJcbiAgICAgICAgICAgIC8vIG5vZGUuc2V0UG9zaXRpb24ocDIpO1xyXG4gICAgICAgICAgICAvLyBub2RlLnggKz0gLTEwMCAtIDEwMCAqIE1hdGgucmFuZG9tKCktMzAwO1xyXG4gICAgICAgICAgICAvLyBub2RlLnkgKz0gMTAwICogTWF0aC5yYW5kb20oKSAtIDUwO1xyXG4gICAgICAgICAgICAvLyBub2RlLnNjYWxlID0gMTtcclxuICAgICAgICAgICAgLy8gR2FtZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgLy8gbm9kZS56SW5kZXggLT0gOTk7XHJcbiAgICAgICAgICAgIC8vIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgIC8vICAgICAuYnkoMC40LCB7IG9wYWNpdHk6IDE1MCwgcG9zaXRpb246IGNjLnYyKDE1MCwgMCkgfSlcclxuICAgICAgICAgICAgLy8gICAgIC5ieSgwLjQsIHsgb3BhY2l0eTogLTE1MCwgcG9zaXRpb246IGNjLnYyKDE1MCwgMCkgfSlcclxuICAgICAgICAgICAgLy8gICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgIC8vICAgICAuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiZmFuTGlaaVwiLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgIG5vZGUueCA9IC0zMCAtIDEwMCAqIE1hdGgucmFuZG9tKCkgLSAyMDA7XHJcbiAgICAgICAgICAgIG5vZGUueSA9IDYwICogTWF0aC5yYW5kb20oKSAtIDMwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgICAgICAuYnkoMC40LCB7IG9wYWNpdHk6IDE1MCwgcG9zaXRpb246IGNjLnYyKDEwMCwgMCkgfSlcclxuICAgICAgICAgICAgICAgIC5ieSgwLjQsIHsgb3BhY2l0eTogLTE1MCwgcG9zaXRpb246IGNjLnYyKDEwMCwgMCkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaGQgPSBNYXRoLlBJIC8gMTgwICogdGhpcy5ub2RlLmFuZ2xlO1xyXG4gICAgICAgIGxldCBjb3MgPSBNYXRoLmNvcyhoZCk7XHJcbiAgICAgICAgbGV0IHNpbiA9IE1hdGguc2luKGhkKTtcclxuICAgICAgICBsZXQgc3RhcnRQb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgbGV0IHN0YXJ0UG9zMiA9IGNjLnYyKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkgKyA2MCk7XHJcbiAgICAgICAgbGV0IHN0YXJ0UG9zMyA9IGNjLnYyKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkgLSA2MCk7XHJcbiAgICAgICAgbGV0IGVuZFBvcyA9IGNjLnYyKHN0YXJ0UG9zLnggLSAxMDAwICogY29zLCBzdGFydFBvcy55ICsgKDMwMCAqIHNpbikpO1xyXG4gICAgICAgIGxldCBlbmRQb3MyID0gY2MudjIoc3RhcnRQb3MueCAtIDEwMDAgKiBjb3MsIHN0YXJ0UG9zLnkgKyAoMzAwICogc2luKSArIDYwKTtcclxuICAgICAgICBsZXQgZW5kUG9zMyA9IGNjLnYyKHN0YXJ0UG9zLnggLSAxMDAwICogY29zLCBzdGFydFBvcy55ICsgKDMwMCAqIHNpbikgLSA2MCk7XHJcblxyXG4gICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDE0KSB7XHJcbiAgICAgICAgICAgIGVuZFBvcyA9IGNjLnYyKHN0YXJ0UG9zLnggLSAxNTAwICogY29zLCBzdGFydFBvcy55ICsgKDMwMCAqIHNpbikpO1xyXG4gICAgICAgICAgICBlbmRQb3MyID0gY2MudjIoc3RhcnRQb3MueCAtIDE1MDAgKiBjb3MsIHN0YXJ0UG9zLnkgKyAoMzAwICogc2luKSArIDYwKTtcclxuICAgICAgICAgICAgZW5kUG9zMyA9IGNjLnYyKHN0YXJ0UG9zLnggLSAxNTAwICogY29zLCBzdGFydFBvcy55ICsgKDMwMCAqIHNpbikgLSA2MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDEwMykge1xyXG4gICAgICAgICAgICBlbmRQb3MgPSBjYy52MihzdGFydFBvcy54IC0gMTUwMCAqIGNvcywgc3RhcnRQb3MueSArICgzMDAgKiBzaW4pKTtcclxuICAgICAgICAgICAgZW5kUG9zMiA9IGNjLnYyKHN0YXJ0UG9zLnggLSAxNTAwICogY29zLCBzdGFydFBvcy55ICsgKDMwMCAqIHNpbikgKyA2MCk7XHJcbiAgICAgICAgICAgIGVuZFBvczMgPSBjYy52MihzdGFydFBvcy54IC0gMTUwMCAqIGNvcywgc3RhcnRQb3MueSArICgzMDAgKiBzaW4pIC0gNjApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzdWx0ID0gY29jb3N6LmdhbWVNZ3Iub25SYXlDYXN0KHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgIGxldCByZXN1bHQyID0gY29jb3N6LmdhbWVNZ3Iub25SYXlDYXN0KHN0YXJ0UG9zMiwgZW5kUG9zMik7XHJcbiAgICAgICAgbGV0IHJlc3VsdDMgPSBjb2Nvc3ouZ2FtZU1nci5vblJheUNhc3Qoc3RhcnRQb3MzLCBlbmRQb3MzKTtcclxuXHJcblxyXG4gICAgICAgIC8vIC8vY2MubG9nKGNvcywgc2luLCBcIm9uRmFuUmlnaHRcIiwgc3RhcnRQb3MueCwgc3RhcnRQb3MueSwgZW5kUG9zLngsIGVuZFBvcy55LCBlbmRQb3MyLngsIGVuZFBvczIueSwgZW5kUG9zMy54LCBlbmRQb3MzLnkpO1xyXG4gICAgICAgIC8vY2MubG9nKHJlc3VsdDJbMF0uY29sbGlkZXIudGFnLCByZXN1bHRbMF0uY29sbGlkZXIudGFnLCByZXN1bHQzWzBdLmNvbGxpZGVyLnRhZywgXCItLS0tLS0tLS0tLS0tLS0tVEFHXCIpO1xyXG5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgcGh5c2ljcyBvZiByZXN1bHQpIHtcclxuICAgICAgICAgICAgbGV0IGNUYWcgPSBwaHlzaWNzLmNvbGxpZGVyLnRhZztcclxuICAgICAgICAgICAgaWYgKGNUYWcgPT0gdGFnLnRob3JuIHx8IGNUYWcgPT0gdGFnLmhvbmV5YmVlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmIgPSBwaHlzaWNzLmNvbGxpZGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IHJiLmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgICAgICAgICAgdi54ICs9IDIwICogY29zO1xyXG4gICAgICAgICAgICAgICAgaWYgKHYueCA8PSA0MDAgKiBjb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB2LnggKz0gMTAgKiBjb3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA3MyAmJiBjVGFnID09IHRhZy5ob25leWJlZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHYueCArPSA1MDAgKiBjb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgdi55ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHBoeXNpY3MuY29sbGlkZXIubm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2MgPSBub2RlLmdldENvbXBvbmVudChcInByb3BIb25leWJlZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzYy5pc0ZhbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGh5c2ljcy5jb2xsaWRlci5yZXN0aXR1dGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDEwMyAmJiBjVGFnID09IHRhZy50aG9ybikge1xyXG4gICAgICAgICAgICAgICAgICAgIHYueCArPSAxMDAwICogY29zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmIubGluZWFyVmVsb2NpdHkgPSB2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNUYWcgPT0gdGFnLnN0b25lIHx8IGNUYWcgPT0gdGFnLnN0b25lMyB8fCBjVGFnID09IHRhZy5jbG91ZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCByYiA9IHBoeXNpY3MuY29sbGlkZXIubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gcmIubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgICAgICB2LnggKz0gMTUgKiBjb3M7XHJcbiAgICAgICAgICAgICAgICBpZiAodi54IDw9IDQwMCAqIGNvcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHYueCArPSAxNSAqIGNvcztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByYi5saW5lYXJWZWxvY2l0eSA9IHY7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY1RhZyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NjLmxvZyhcIi0tLS0tLS0tLS0tLS1yZXR1cm5cIilcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNUYWcgPT0gdGFnLnBsYXllciB8fCBjVGFnID09IHRhZy5yb3BlIHx8IGNUYWcgPT0gdGFnLmJhbGxvb24pIHtcclxuICAgICAgICAgICAgICAgIGxldCByYiA9IHBoeXNpY3MuY29sbGlkZXIubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gcmIubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgICAgICB2LnggKz0gNSAqIGNvcztcclxuICAgICAgICAgICAgICAgIGlmIChjVGFnID09IHRhZy5yb3BlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdi54ICs9IDEwICogY29zO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJiLmxpbmVhclZlbG9jaXR5ID0gdjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBwaHlzaWNzIG9mIHJlc3VsdDIpIHtcclxuICAgICAgICAgICAgbGV0IGNUYWcgPSBwaHlzaWNzLmNvbGxpZGVyLnRhZztcclxuICAgICAgICAgICAgaWYgKGNUYWcgPT0gdGFnLnRob3JuIHx8IGNUYWcgPT0gdGFnLmhvbmV5YmVlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmIgPSBwaHlzaWNzLmNvbGxpZGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IHJiLmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgICAgICAgICAgdi54ICs9IDIwICogY29zO1xyXG4gICAgICAgICAgICAgICAgaWYgKHYueCA8PSA0MDAgKiBjb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB2LnggKz0gMTAgKiBjb3M7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gNzMgJiYgY1RhZyA9PSB0YWcuaG9uZXliZWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2LnggKz0gNTAwICogY29zO1xyXG4gICAgICAgICAgICAgICAgICAgIHYueSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBwaHlzaWNzLmNvbGxpZGVyLm5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjID0gbm9kZS5nZXRDb21wb25lbnQoXCJwcm9wSG9uZXliZWVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2MuaXNGYW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBoeXNpY3MuY29sbGlkZXIucmVzdGl0dXRpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh2LnggPD0gNzAwICYmIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gNDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2LnggKz0gMTAwICogY29zO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDEwMyAmJiBjVGFnID09IHRhZy50aG9ybikge1xyXG4gICAgICAgICAgICAgICAgICAgIHYueCArPSAxMDAwICogY29zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmIubGluZWFyVmVsb2NpdHkgPSB2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNUYWcgPT0gdGFnLnN0b25lIHx8IGNUYWcgPT0gdGFnLnN0b25lMyB8fCBjVGFnID09IHRhZy5jbG91ZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCByYiA9IHBoeXNpY3MuY29sbGlkZXIubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gcmIubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgICAgICB2LnggKz0gMTUgKiBjb3M7XHJcbiAgICAgICAgICAgICAgICBpZiAodi54IDw9IDQwMCAqIGNvcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHYueCArPSAxNSAqIGNvcztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHYueCA8PSA3MDAgJiYgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA0MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHYueCArPSAxMDAgKiBjb3M7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmIubGluZWFyVmVsb2NpdHkgPSB2O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNUYWcgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY1RhZyA9PSB0YWcucGxheWVyIHx8IGNUYWcgPT0gdGFnLnJvcGUgfHwgY1RhZyA9PSB0YWcuYmFsbG9vbikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJiID0gcGh5c2ljcy5jb2xsaWRlci5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSByYi5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgICAgIHYueCArPSA1ICogY29zO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNUYWcgPT0gdGFnLnJvcGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2LnggKz0gMTAgKiBjb3M7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmIubGluZWFyVmVsb2NpdHkgPSB2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IHBoeXNpY3Mgb2YgcmVzdWx0Mykge1xyXG4gICAgICAgICAgICBsZXQgY1RhZyA9IHBoeXNpY3MuY29sbGlkZXIudGFnO1xyXG4gICAgICAgICAgICBpZiAoY1RhZyA9PSB0YWcudGhvcm4gfHwgY1RhZyA9PSB0YWcuaG9uZXliZWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCByYiA9IHBoeXNpY3MuY29sbGlkZXIubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gcmIubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgICAgICB2LnggKz0gMjAgKiBjb3M7XHJcbiAgICAgICAgICAgICAgICBpZiAodi54IDw9IDQwMCAqIGNvcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHYueCArPSAxMCAqIGNvcztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA3MyAmJiBjVGFnID09IHRhZy5ob25leWJlZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHYueCArPSA1MDAgKiBjb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgdi55ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IHBoeXNpY3MuY29sbGlkZXIubm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2MgPSBub2RlLmdldENvbXBvbmVudChcInByb3BIb25leWJlZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBzYy5pc0ZhbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGh5c2ljcy5jb2xsaWRlci5yZXN0aXR1dGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHYueCA8PSA3MDAgJiYgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA0MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHYueCArPSAxMDAgKiBjb3M7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTAzICYmIGNUYWcgPT0gdGFnLnRob3JuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdi54ICs9IDEwMDAgKiBjb3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByYi5saW5lYXJWZWxvY2l0eSA9IHY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY1RhZyA9PSB0YWcuc3RvbmUgfHwgY1RhZyA9PSB0YWcuc3RvbmUzIHx8IGNUYWcgPT0gdGFnLmNsb3VkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJiID0gcGh5c2ljcy5jb2xsaWRlci5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSByYi5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgICAgIHYueCArPSAxNSAqIGNvcztcclxuICAgICAgICAgICAgICAgIGlmICh2LnggPD0gNDAwICogY29zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdi54ICs9IDE1ICogY29zO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJiLmxpbmVhclZlbG9jaXR5ID0gdjtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjVGFnID09IDApIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNUYWcgPT0gdGFnLnBsYXllciB8fCBjVGFnID09IHRhZy5yb3BlIHx8IGNUYWcgPT0gdGFnLmJhbGxvb24pIHtcclxuICAgICAgICAgICAgICAgIGxldCByYiA9IHBoeXNpY3MuY29sbGlkZXIubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gcmIubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgICAgICB2LnggKz0gNSAqIGNvcztcclxuICAgICAgICAgICAgICAgIGlmIChjVGFnID09IHRhZy5yb3BlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdi54ICs9IDEwICogY29zO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJiLmxpbmVhclZlbG9jaXR5ID0gdjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkZhbkxlZnQoKSB7XHJcbiAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcclxuICAgICAgICAgICAgLy8gbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiZmFuTGlaaVwiLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgICAgICAvLyBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcblxyXG4gICAgICAgICAgICAvLyBsZXQgR2FtZSA9IGNjLmZpbmQoXCJDYW52YXMvR2FtZS9nYW1lQmdcIik7XHJcbiAgICAgICAgICAgIC8vIGxldCBwMSA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKVxyXG4gICAgICAgICAgICAvLyBsZXQgcDIgPSBHYW1lLmNvbnZlcnRUb05vZGVTcGFjZUFSKHAxKTtcclxuICAgICAgICAgICAgLy8gbm9kZS5zZXRQb3NpdGlvbihwMik7XHJcbiAgICAgICAgICAgIC8vIG5vZGUueCArPSAtMTAwIC0gMTAwICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgLy8gbm9kZS55ICs9IDEwMCAqIE1hdGgucmFuZG9tKCkgLSA1MDtcclxuICAgICAgICAgICAgLy8gbm9kZS5zY2FsZSA9IDE7XHJcblxyXG4gICAgICAgICAgICAvLyBHYW1lLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAvLyBub2RlLnpJbmRleCAtPSA5OTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgIC8vICAgICAuYnkoMC40LCB7IG9wYWNpdHk6IDE1MCwgcG9zaXRpb246IGNjLnYyKC0xNTAsIDApIH0pXHJcbiAgICAgICAgICAgIC8vICAgICAuYnkoMC40LCB7IG9wYWNpdHk6IC0xNTAsIHBvc2l0aW9uOiBjYy52MigtMTUwLCAwKSB9KVxyXG4gICAgICAgICAgICAvLyAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICAgLy8gICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgIGxldCBwcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcImZhbkxpWmlcIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICBub2RlLnggPSAtMzAgLSAxMDAgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICBub2RlLnkgPSA2MCAqIE1hdGgucmFuZG9tKCkgLSAzMDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAgICAgLmJ5KDAuNCwgeyBvcGFjaXR5OiAxNTAsIHBvc2l0aW9uOiBjYy52MigtMTAwLCAwKSB9KVxyXG4gICAgICAgICAgICAgICAgLmJ5KDAuNCwgeyBvcGFjaXR5OiAtMTUwLCBwb3NpdGlvbjogY2MudjIoLTEwMCwgMCkgfSlcclxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaGQgPSBNYXRoLlBJIC8gMTgwICogdGhpcy5ub2RlLmFuZ2xlO1xyXG4gICAgICAgIGxldCBjb3MgPSBNYXRoLmNvcyhoZCk7XHJcbiAgICAgICAgbGV0IHNpbiA9IE1hdGguc2luKGhkKTtcclxuICAgICAgICBsZXQgc3RhcnRQb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgbGV0IHN0YXJ0UG9zMiA9IGNjLnYyKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkgKyA2MCk7XHJcbiAgICAgICAgbGV0IHN0YXJ0UG9zMyA9IGNjLnYyKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkgLSA2MCk7XHJcbiAgICAgICAgbGV0IGVuZFBvcyA9IGNjLnYyKHN0YXJ0UG9zLnggLSAxMDAwICogY29zLCBzdGFydFBvcy55ICsgKDMwMCAqIHNpbikpO1xyXG4gICAgICAgIGxldCBlbmRQb3MyID0gY2MudjIoc3RhcnRQb3MueCAtIDEwMDAgKiBjb3MsIHN0YXJ0UG9zLnkgKyAoMzAwICogc2luKSArIDYwKTtcclxuICAgICAgICBsZXQgZW5kUG9zMyA9IGNjLnYyKHN0YXJ0UG9zLnggLSAxMDAwICogY29zLCBzdGFydFBvcy55ICsgKDMwMCAqIHNpbikgLSA2MCk7XHJcblxyXG4gICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDE0KSB7XHJcbiAgICAgICAgICAgIGVuZFBvcyA9IGNjLnYyKHN0YXJ0UG9zLnggLSAxNTAwICogY29zLCBzdGFydFBvcy55ICsgKDMwMCAqIHNpbikpO1xyXG4gICAgICAgICAgICBlbmRQb3MyID0gY2MudjIoc3RhcnRQb3MueCAtIDE1MDAgKiBjb3MsIHN0YXJ0UG9zLnkgKyAoMzAwICogc2luKSArIDYwKTtcclxuICAgICAgICAgICAgZW5kUG9zMyA9IGNjLnYyKHN0YXJ0UG9zLnggLSAxNTAwICogY29zLCBzdGFydFBvcy55ICsgKDMwMCAqIHNpbikgLSA2MCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXN1bHQgPSBjb2Nvc3ouZ2FtZU1nci5vblJheUNhc3Qoc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgbGV0IHJlc3VsdDIgPSBjb2Nvc3ouZ2FtZU1nci5vblJheUNhc3Qoc3RhcnRQb3MyLCBlbmRQb3MyKTtcclxuICAgICAgICBsZXQgcmVzdWx0MyA9IGNvY29zei5nYW1lTWdyLm9uUmF5Q2FzdChzdGFydFBvczMsIGVuZFBvczMpO1xyXG4gICAgICAgIC8vIGNjLmxvZyhjb3MsIHNpbiwgXCJvbkZhbkxlZnRcIiwgc3RhcnRQb3MueCwgc3RhcnRQb3MueSwgZW5kUG9zLngsIGVuZFBvcy55LCBlbmRQb3MyLngsIGVuZFBvczIueSwgZW5kUG9zMy54LCBlbmRQb3MzLnkpO1xyXG4gICAgICAgIC8vIC8vY2MubG9nKHJlc3VsdDJbMF0uY29sbGlkZXIudGFnLCByZXN1bHRbMF0uY29sbGlkZXIudGFnLCByZXN1bHQzWzBdLmNvbGxpZGVyLnRhZywgXCItLS0tLS0tLS0tLS0tLS0tVEFHXCIpXHJcbiAgICAgICAgLy8gbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwicm9wZVwiLCBjYy5QcmVmYWIpO1xyXG5cclxuICAgICAgICAvLyBsZXQgbm9kZTEgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgIC8vIGxldCBub2RlMiA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgLy8gbGV0IG5vZGUzID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLmFkZENoaWxkKG5vZGUxKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZTIpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5hZGRDaGlsZChub2RlMyk7XHJcblxyXG5cclxuICAgICAgICAvLyBub2RlMS5zZXRQb3NpdGlvbih0aGlzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoc3RhcnRQb3MpKVxyXG4gICAgICAgIC8vIG5vZGUyLnNldFBvc2l0aW9uKHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihzdGFydFBvczIpKVxyXG4gICAgICAgIC8vIG5vZGUzLnNldFBvc2l0aW9uKHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihzdGFydFBvczMpKVxyXG4gICAgICAgIGZvciAobGV0IHBoeXNpY3Mgb2YgcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGxldCBjVGFnID0gcGh5c2ljcy5jb2xsaWRlci50YWc7XHJcbiAgICAgICAgICAgIGlmIChjVGFnID09IHRhZy50aG9ybiB8fCBjVGFnID09IHRhZy5ob25leWJlZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJiID0gcGh5c2ljcy5jb2xsaWRlci5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSByYi5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgICAgIHYueCAtPSAyMCAqIGNvcztcclxuICAgICAgICAgICAgICAgIGlmICh2LnggPj0gLTQwMCAqIGNvcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHYueCAtPSAxMCAqIGNvcztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA1OCAmJiBjVGFnID09IHRhZy50aG9ybikge1xyXG4gICAgICAgICAgICAgICAgICAgIHYueCAtPSAxNTAgKiBjb3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByYi5saW5lYXJWZWxvY2l0eSA9IHY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY1RhZyA9PSB0YWcuc3RvbmUgfHwgY1RhZyA9PSB0YWcuc3RvbmUzIHx8IGNUYWcgPT0gdGFnLmNsb3VkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmIgPSBwaHlzaWNzLmNvbGxpZGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IHJiLmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgICAgICAgICAgdi54IC09IDE1ICogY29zO1xyXG4gICAgICAgICAgICAgICAgaWYgKHYueCA+PSAtNDAwICogY29zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdi54IC09IDE1ICogY29zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmIubGluZWFyVmVsb2NpdHkgPSB2O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNUYWcgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY1RhZyA9PSB0YWcucGxheWVyIHx8IGNUYWcgPT0gdGFnLnJvcGUgfHwgY1RhZyA9PSB0YWcuYmFsbG9vbikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJiID0gcGh5c2ljcy5jb2xsaWRlci5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSByYi5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgICAgIHYueCAtPSA1ICogY29zO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNUYWcgPT0gdGFnLnJvcGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2LnggLT0gMTAgKiBjb3M7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmIubGluZWFyVmVsb2NpdHkgPSB2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IHBoeXNpY3Mgb2YgcmVzdWx0Mikge1xyXG4gICAgICAgICAgICBsZXQgY1RhZyA9IHBoeXNpY3MuY29sbGlkZXIudGFnO1xyXG4gICAgICAgICAgICBpZiAoY1RhZyA9PSB0YWcudGhvcm4gfHwgY1RhZyA9PSB0YWcuaG9uZXliZWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCByYiA9IHBoeXNpY3MuY29sbGlkZXIubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gcmIubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgICAgICB2LnggLT0gMjAgKiBjb3M7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA3MyAmJiBjVGFnID09IHRhZy5ob25leWJlZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHYueCAtPSAxMDAwICogY29zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHYueCA+PSAtNDAwICogY29zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdi54IC09IDEwICogY29zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gNTggJiYgY1RhZyA9PSB0YWcudGhvcm4pIHtcclxuICAgICAgICAgICAgICAgICAgICB2LnggLT0gMTUwICogY29zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmIubGluZWFyVmVsb2NpdHkgPSB2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNUYWcgPT0gdGFnLnN0b25lIHx8IGNUYWcgPT0gdGFnLnN0b25lMyB8fCBjVGFnID09IHRhZy5jbG91ZCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCByYiA9IHBoeXNpY3MuY29sbGlkZXIubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gcmIubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgICAgICB2LnggLT0gMTUgKiBjb3M7XHJcbiAgICAgICAgICAgICAgICBpZiAodi54ID49IC00MDAgKiBjb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB2LnggLT0gMTUgKiBjb3M7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmIubGluZWFyVmVsb2NpdHkgPSB2O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNUYWcgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY1RhZyA9PSB0YWcucGxheWVyIHx8IGNUYWcgPT0gdGFnLnJvcGUgfHwgY1RhZyA9PSB0YWcuYmFsbG9vbikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJiID0gcGh5c2ljcy5jb2xsaWRlci5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSByYi5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgICAgIHYueCAtPSA1ICogY29zO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNUYWcgPT0gdGFnLnJvcGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2LnggLT0gMTAgKiBjb3M7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmIubGluZWFyVmVsb2NpdHkgPSB2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IHBoeXNpY3Mgb2YgcmVzdWx0Mykge1xyXG4gICAgICAgICAgICBsZXQgY1RhZyA9IHBoeXNpY3MuY29sbGlkZXIudGFnO1xyXG4gICAgICAgICAgICBpZiAoY1RhZyA9PSB0YWcudGhvcm4gfHwgY1RhZyA9PSB0YWcuaG9uZXliZWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCByYiA9IHBoeXNpY3MuY29sbGlkZXIubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gcmIubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgICAgICB2LnggLT0gMjAgKiBjb3M7XHJcbiAgICAgICAgICAgICAgICBpZiAodi54ID49IC00MDAgKiBjb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB2LnggLT0gMTAgKiBjb3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA1OCAmJiBjVGFnID09IHRhZy50aG9ybikge1xyXG4gICAgICAgICAgICAgICAgICAgIHYueCAtPSAxNTAgKiBjb3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByYi5saW5lYXJWZWxvY2l0eSA9IHY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY1RhZyA9PSB0YWcuc3RvbmUgfHwgY1RhZyA9PSB0YWcuc3RvbmUzIHx8IGNUYWcgPT0gdGFnLmNsb3VkKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmIgPSBwaHlzaWNzLmNvbGxpZGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IHJiLmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgICAgICAgICAgdi54IC09IDE1ICogY29zO1xyXG4gICAgICAgICAgICAgICAgaWYgKHYueCA+PSAtNDAwICogY29zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdi54IC09IDE1ICogY29zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmIubGluZWFyVmVsb2NpdHkgPSB2O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNUYWcgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY1RhZyA9PSB0YWcucGxheWVyIHx8IGNUYWcgPT0gdGFnLnJvcGUgfHwgY1RhZyA9PSB0YWcuYmFsbG9vbikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJiID0gcGh5c2ljcy5jb2xsaWRlci5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSByYi5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgICAgIHYueCAtPSA1ICogY29zO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNUYWcgPT0gdGFnLnJvcGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2LnggLT0gMTAgKiBjb3M7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmIubGluZWFyVmVsb2NpdHkgPSB2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gb25GYW5PcGVuKCkge1xyXG4gICAgLy8gICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgLy8gICAgIH0sIDAuMDIpXHJcbiAgICAvLyB9XHJcblxyXG4gICAgb25GYW5DbG9zZSgpIHtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuYnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbi5zdG9wKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5idG4ucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnBvcyA9IHBvcztcclxuICAgICAgICAgICAgdGhpcy5idG5TZWxlY3QuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuYnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uLnN0b3AoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLmJ0bi5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgICAgIGxldCBkaXMgPSB0aGlzLnBvcy54IC0gcG9zLng7XHJcbiAgICAgICAgICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgICAgICAgICBsZXQgeCA9IDAgKyB0aGlzLmJ0bi54O1xyXG4gICAgICAgICAgICBpZiAoeCAtIGRpcyA8PSAyMiAmJiB4IC0gZGlzID49IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuLnggPSB4IC0gZGlzO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc1JpZ2h0ICYmICF0aGlzLmlzTGVmdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmJ0bi54IDw9IDIyICYmIHRoaXMuYnRuLnggPj0gMjApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1JpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3RNb3ZlICYmIGNvY29zei5kYXRhTWdyLkF1ZGlvRWZmZWN0T24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJzdE1vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNsaXA6IGNjLkF1ZGlvQ2xpcCA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwibUZhblwiLCBjYy5BdWRpb0NsaXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLCB0cnVlLCAwLjcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5idG4ueCA8PSAyICYmIHRoaXMuYnRuLnggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTGVmdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpcnN0TW92ZSAmJiBjb2Nvc3ouZGF0YU1nci5BdWRpb0VmZmVjdE9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3RNb3ZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjbGlwOiBjYy5BdWRpb0NsaXAgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcIm1GYW5cIiwgY2MuQXVkaW9DbGlwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXVkaW9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoY2xpcCwgdHJ1ZSwgMC43KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uRmFuQ2xvc2UoKVxyXG4gICAgICAgICAgICB0aGlzLmFuaW0uc3RvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNwQ29tLnNwcml0ZUZyYW1lID0gdGhpcy5zcEZyYW1lO1xyXG4gICAgICAgICAgICB0aGlzLmlzQW5pbWF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlzTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbiA9IGNjLnR3ZWVuKHRoaXMuYnRuKVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMywgeyBwb3NpdGlvbjogY2MudjIoMTEsIDApIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLmJ0blNlbGVjdC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0TW92ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuYXVkaW9JRCkge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLmF1ZGlvSUQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5idG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbkZhbkNsb3NlKClcclxuICAgICAgICAgICAgdGhpcy5hbmltLnN0b3AoKTtcclxuICAgICAgICAgICAgdGhpcy5pc0FuaW1hdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlzUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc0xlZnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb24gPSBjYy50d2Vlbih0aGlzLmJ0bilcclxuICAgICAgICAgICAgICAgIC50bygwLjMsIHsgcG9zaXRpb246IGNjLnYyKDExLCAwKSB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgdGhpcy5idG5TZWxlY3QuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdE1vdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmF1ZGlvSUQpIHtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5hdWRpb0lEKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzTGVmdCB8fCB0aGlzLmlzUmlnaHQpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5pc0xlZnQgPSB0cnVlXHJcbiAgICAgICAgICAgIC8vIHRoaXMub25GYW5PcGVuKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25GYW5SaWdodCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkZhbkxlZnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNBbmltYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KClcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5pc0FuaW1hdGlvbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==