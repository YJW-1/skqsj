
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/propBigFan.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1e0cc7liQRICY3hDgZS8v10', 'propBigFan');
// script/Game/propBigFan.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var propBigFan = /** @class */ (function (_super) {
    __extends(propBigFan, _super);
    function propBigFan() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.intact = null;
        _this.Damaged = null;
        _this.isDamaged = false;
        _this.action = null;
        _this.isFloor = false;
        return _this;
    }
    propBigFan.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (this.intact.active == false)
            return;
        if (other.tag == Constant_1.tag.player || other.tag == Constant_1.tag.rope || other.tag == Constant_1.tag.balloon || other.tag == Constant_1.tag.balloon2 || other.tag == Constant_1.tag.thorn || other.node.name == "cactus5") {
            // cc.log(contact)
            contact.disabled = true;
            this.scheduleOnce(function () {
                _this.intact.getChildByName("fanBlade").getChildByName("sp").active = true;
            }, 0.5);
        }
        else if (other.tag == Constant_1.tag.stone || other.tag == Constant_1.tag.stone3) {
            if (CocosZ_1.cocosz.dataMgr.CurLevelId == 92)
                return;
            contact.disabled = true;
            // this.scheduleOnce(() => {
            //     other.node.destroy();
            // }, 0.05)
            var prefab = CocosZ_1.cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            var node = cc.instantiate(prefab);
            this.node.addChild(node);
            this.onDamaged();
        }
    };
    //由火箭调
    propBigFan.prototype.onDamaged = function () {
        if (this.action) {
            this.action.stop();
        }
        this.intact.active = false;
        this.Damaged.active = true;
        cc.tween(this.Damaged.getChildByName("fanBlade"))
            .by(3, { angle: 360 })
            .repeatForever()
            .start();
        this.unscheduleAllCallbacks();
    };
    propBigFan.prototype.onFanRight = function () {
        if (Math.random() > 0.5 && this.isFloor == false) {
            var prefab = CocosZ_1.cocosz.resMgr.getRes("fanLiZi", cc.Prefab);
            var node_1 = cc.instantiate(prefab);
            if (this.node.angle == 180) {
                var Game = cc.find("Canvas/gameBg");
                var p1 = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
                var p2 = Game.convertToNodeSpaceAR(p1);
                node_1.setPosition(p2);
                node_1.x += -100 - 100 * Math.random() - 450;
                node_1.y += 100 * Math.random() - 50;
                node_1.scale = 1;
                Game.addChild(node_1);
                cc.tween(node_1)
                    .by(0.4, { opacity: 150, position: cc.v2(150, 0) })
                    .by(0.4, { opacity: -150, position: cc.v2(150, 0) })
                    .call(function () {
                    node_1.destroy();
                })
                    .start();
            }
            else if (this.node.angle == 90) {
                // cc.log("---90----")
                var Game = cc.find("Canvas/gameBg");
                var p1 = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
                var p2 = Game.convertToNodeSpaceAR(p1);
                node_1.setPosition(p2);
                node_1.x += 100 * Math.random() - 50;
                node_1.y += 100 * Math.random() + 450;
                node_1.scale = 1;
                Game.addChild(node_1);
                cc.tween(node_1)
                    .by(0.4, { opacity: 150, position: cc.v2(0, -150) })
                    .by(0.4, { opacity: -150, position: cc.v2(0, -150) })
                    .call(function () {
                    node_1.destroy();
                })
                    .start();
            }
            else {
                var Game = cc.find("Canvas/gameBg");
                var p1 = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
                var p2 = Game.convertToNodeSpaceAR(p1);
                node_1.setPosition(p2);
                node_1.x += -100 - 100 * Math.random() + 450;
                node_1.y += 100 * Math.random() - 50;
                node_1.scale = 1;
                Game.addChild(node_1);
                node_1.zIndex -= 99;
                cc.tween(node_1)
                    .by(0.4, { opacity: 150, position: cc.v2(+150, 0) })
                    .by(0.4, { opacity: -150, position: cc.v2(+150, 0) })
                    .call(function () {
                    node_1.destroy();
                })
                    .start();
            }
        }
        var hd = Math.PI / 180 * this.node.angle;
        var cos = Math.cos(hd);
        var sin = Math.sin(hd);
        var startPos = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
        var endPos = cc.v2(startPos.x + 1000 * cos, startPos.y + 300 * sin);
        var endPos2 = cc.v2(startPos.x + 1000 * cos, startPos.y + 300 * sin + 100);
        var endPos3 = cc.v2(startPos.x + 1000 * cos, startPos.y + 300 * sin - 100);
        if (this.node.angle == 90) {
            endPos = cc.v2(startPos.x + 300 * cos, startPos.y + 1000 * sin);
            endPos2 = cc.v2(startPos.x + 300 * cos + 100, startPos.y + 1000 * sin);
            endPos3 = cc.v2(startPos.x + 300 * cos - 100, startPos.y + 1000 * sin);
        }
        if (this.node.angle == 92) {
            endPos = cc.v2(startPos.x + 500 * cos, startPos.y + 300 * sin);
            endPos2 = cc.v2(startPos.x + 500 * cos, startPos.y + 300 * sin + 100);
            endPos3 = cc.v2(startPos.x + 500 * cos, startPos.y + 300 * sin - 100);
        }
        var result = CocosZ_1.cocosz.gameMgr.onRayCast(startPos, endPos);
        var result2 = CocosZ_1.cocosz.gameMgr.onRayCast(startPos, endPos2);
        var result3 = CocosZ_1.cocosz.gameMgr.onRayCast(startPos, endPos3);
        // cc.log("--------------------", startPos.x, startPos.y, endPos.x, endPos.y, endPos2.x, endPos2.y, endPos3.x, endPos3.y);
        // if (result.length > 0) {
        //     cc.log("--------------------", result[0].collider.tag);
        // }
        // if (result2.length > 0) {
        //     cc.log("--------------------", result2[0].collider.tag);
        // } if (result3.length > 0) {
        //     cc.log("--------------------", result3[0].collider.tag,);
        // }
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var physics = result_1[_i];
            var cTag = physics.collider.tag;
            var point = physics.point;
            var d = Math.abs(point.x - startPos.x);
            if (cTag == Constant_1.tag.player || cTag == Constant_1.tag.balloon || cTag == Constant_1.tag.thorn || cTag == Constant_1.tag.honeybee || cTag == Constant_1.tag.stone) {
                // if (this.isFloor == false) {
                if (cTag == Constant_1.tag.stone && CocosZ_1.cocosz.dataMgr.CurLevelId == 92)
                    break;
                this.isFloor = false;
                var rb = physics.collider.node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                // if (cocosz.dataMgr.CurLevelId == 12 || cocosz.dataMgr.CurLevelId == 30) {
                //     if (v.y < 0) {
                //         v.y = 0
                //     }
                //     v.x += 100;
                // }
                // else if (cocosz.dataMgr.CurLevelId == 51) {
                //     v.y -= 300; v.x = 0
                //     if (cTag == tag.player) {
                //         v.y -= 100
                //     }
                // }
                // else {
                if (this.node.angle == 90) {
                    v.y -= 100;
                    rb.linearVelocity = v;
                    if (CocosZ_1.cocosz.dataMgr.CurLevelId == 101 || CocosZ_1.cocosz.dataMgr.CurLevelId == 105) {
                        v.y += 150;
                    }
                    break;
                }
                ;
                v.x += 100;
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 12) {
                    v.x += 200;
                }
                // }
                rb.linearVelocity = v;
                break;
                // }
            }
            else if (cTag == Constant_1.tag.moveFloor && (d < 250 || CocosZ_1.cocosz.dataMgr.CurLevelId == 80)) {
                this.isFloor = true;
                return;
            }
            // else if (cTag == tag.stone) {
            //     return;
            // }
            else if (cTag == 0 && (d < 250 || CocosZ_1.cocosz.dataMgr.CurLevelId == 80)) {
                this.isFloor = true;
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 51) {
                    this.isFloor = false;
                }
                break;
            }
        }
        for (var _a = 0, result2_1 = result2; _a < result2_1.length; _a++) {
            var physics = result2_1[_a];
            var cTag = physics.collider.tag;
            var point = physics.point;
            var d = Math.abs(point.x - startPos.x);
            if (cTag == Constant_1.tag.player || cTag == Constant_1.tag.balloon || cTag == Constant_1.tag.thorn || cTag == Constant_1.tag.honeybee || cTag == Constant_1.tag.stone) {
                // if (this.isFloor == false) {
                if (cTag == Constant_1.tag.stone && CocosZ_1.cocosz.dataMgr.CurLevelId == 92)
                    break;
                var rb = physics.collider.node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                // if (cocosz.dataMgr.CurLevelId == 12 || cocosz.dataMgr.CurLevelId == 30) {
                //     if (v.y < 0) {
                //         v.y = 0
                //     }
                //     v.x += 100;
                // }
                // else if (cocosz.dataMgr.CurLevelId == 51) {
                //     v.y -= 300; v.x = 0
                //     if (cTag == tag.player) {
                //         v.y -= 100
                //     }
                // }
                // else {
                if (this.node.angle == 90) {
                    v.y -= 100;
                    rb.linearVelocity = v;
                    if (CocosZ_1.cocosz.dataMgr.CurLevelId == 101 || CocosZ_1.cocosz.dataMgr.CurLevelId == 105) {
                        v.y += 150;
                    }
                    break;
                }
                ;
                v.x += 100;
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 12) {
                    v.x += 200;
                }
                // }
                rb.linearVelocity = v;
                break;
                // }
            }
            else if (cTag == Constant_1.tag.moveFloor && (d < 250 || CocosZ_1.cocosz.dataMgr.CurLevelId == 80)) {
                this.isFloor = true;
                return;
            }
            else if (cTag == 0 && (d < 250 || CocosZ_1.cocosz.dataMgr.CurLevelId == 80)) {
                this.isFloor = true;
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 51) {
                    this.isFloor = false;
                }
                return;
            }
        }
        for (var _b = 0, result3_1 = result3; _b < result3_1.length; _b++) {
            var physics = result3_1[_b];
            var cTag = physics.collider.tag;
            var point = physics.point;
            var d = Math.abs(point.x - startPos.x);
            if (cTag == Constant_1.tag.player || cTag == Constant_1.tag.balloon || cTag == Constant_1.tag.thorn || cTag == Constant_1.tag.honeybee || cTag == Constant_1.tag.stone) {
                // if (this.isFloor == false) {
                if (cTag == Constant_1.tag.stone && CocosZ_1.cocosz.dataMgr.CurLevelId == 92)
                    break;
                // cc.log(cTag == tag.player)
                var rb = physics.collider.node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                // if (cocosz.dataMgr.CurLevelId == 12 || cocosz.dataMgr.CurLevelId == 30) {
                //     if (v.y < 0) {
                //         v.y = 0
                //     }
                //     v.x += 100;
                // }
                // else if (cocosz.dataMgr.CurLevelId == 51) {
                //     v.y -= 300; v.x = 0;
                //     if (cTag == tag.player) {
                //         v.y -= 100
                //     }
                // }
                // else {
                if (this.node.angle == 90) {
                    v.y -= 100;
                    rb.linearVelocity = v;
                    if (CocosZ_1.cocosz.dataMgr.CurLevelId == 101 || CocosZ_1.cocosz.dataMgr.CurLevelId == 105) {
                        v.y += 150;
                    }
                    break;
                }
                ;
                v.x += 100;
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 12) {
                    v.x += 200;
                }
                // }
                rb.linearVelocity = v;
                break;
                // 
                // }
            }
            else if (cTag == Constant_1.tag.moveFloor && (d < 250 || CocosZ_1.cocosz.dataMgr.CurLevelId == 80)) {
                this.isFloor = true;
                return;
            }
            else if (cTag == 0 && (d < 250 || CocosZ_1.cocosz.dataMgr.CurLevelId == 80)) {
                this.isFloor = true;
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 51) {
                    this.isFloor = false;
                }
                return;
            }
        }
        this.isFloor = false;
    };
    propBigFan.prototype.onFanLeft = function () {
        if (Math.random() > 0.5 && this.isFloor == false && CocosZ_1.cocosz.dataMgr.CurLevelId != 11) {
            var prefab = CocosZ_1.cocosz.resMgr.getRes("fanLiZi", cc.Prefab);
            var node_2 = cc.instantiate(prefab);
            if (this.node.angle == 0) {
                var Game = cc.find("Canvas/gameBg");
                var p1 = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
                var p2 = Game.convertToNodeSpaceAR(p1);
                node_2.setPosition(p2);
                node_2.x += -100 - 100 * Math.random() + 750;
                node_2.y += 100 * Math.random() - 50;
                node_2.scale = 1;
                Game.addChild(node_2);
                cc.tween(node_2)
                    .by(0.4, { opacity: 150, position: cc.v2(-150, 0) })
                    .by(0.4, { opacity: -150, position: cc.v2(-150, 0) })
                    .call(function () {
                    node_2.destroy();
                })
                    .start();
            }
            else if (this.node.angle == 90) {
                // cc.log("---90----")
                var Game = cc.find("Canvas/gameBg");
                var p1 = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
                var p2 = Game.convertToNodeSpaceAR(p1);
                node_2.setPosition(p2);
                node_2.x += 100 * Math.random() - 50;
                node_2.y += 100 * Math.random() + 100;
                node_2.scale = 1;
                Game.addChild(node_2);
                cc.tween(node_2)
                    .by(0.4, { opacity: 150, position: cc.v2(0, +150) })
                    .by(0.4, { opacity: -150, position: cc.v2(0, +150) })
                    .call(function () {
                    node_2.destroy();
                })
                    .start();
            }
            else {
                var Game = cc.find("Canvas/gameBg");
                var p1 = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
                // cc.log(this.node, "--------------",p1);
                var p2 = Game.convertToNodeSpaceAR(p1);
                node_2.setPosition(p2);
                node_2.x += -100 - 100 * Math.random();
                node_2.y += 100 * Math.random() - 50;
                node_2.scale = 1;
                // node.zIndex -= 998;
                Game.addChild(node_2);
                cc.tween(node_2)
                    .by(0.4, { opacity: 150, position: cc.v2(-150, 0) })
                    .by(0.4, { opacity: -150, position: cc.v2(-150, 0) })
                    .call(function () {
                    node_2.destroy();
                })
                    .start();
            }
        }
        var hd = Math.PI / 180 * this.node.angle;
        var cos = Math.cos(hd);
        var sin = Math.sin(hd);
        var startPos = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
        var endPos = cc.v2(startPos.x + 1000 * cos, startPos.y + 300 * sin);
        var endPos2 = cc.v2(startPos.x + 1000 * cos, startPos.y + 300 * sin + 100);
        var endPos3 = cc.v2(startPos.x + 1000 * cos, startPos.y + 300 * sin - 100);
        if (this.node.angle == 92) {
            endPos = cc.v2(startPos.x + 500 * cos, startPos.y + 300 * sin);
            endPos2 = cc.v2(startPos.x + 500 * cos, startPos.y + 300 * sin + 100);
            endPos3 = cc.v2(startPos.x + 500 * cos, startPos.y + 300 * sin - 100);
        }
        var result = CocosZ_1.cocosz.gameMgr.onRayCast(startPos, endPos);
        var result2 = CocosZ_1.cocosz.gameMgr.onRayCast(startPos, endPos2);
        var result3 = CocosZ_1.cocosz.gameMgr.onRayCast(startPos, endPos3);
        // cc.log(startPos.x, startPos.y, endPos.x, endPos.y)
        for (var _i = 0, result_2 = result; _i < result_2.length; _i++) {
            var physics = result_2[_i];
            var cTag = physics.collider.tag;
            var point = physics.point;
            var d = Math.abs(point.x - startPos.x);
            if (cTag == Constant_1.tag.player || cTag == Constant_1.tag.balloon || cTag == Constant_1.tag.thorn || cTag == Constant_1.tag.honeybee || cTag == Constant_1.tag.stone) {
                if (cTag == Constant_1.tag.stone && CocosZ_1.cocosz.dataMgr.CurLevelId == 92)
                    break;
                this.isFloor = false;
                var rb = physics.collider.node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                v.x -= 300;
                if (this.node.angle == 90 && (CocosZ_1.cocosz.dataMgr.CurLevelId == 101 || CocosZ_1.cocosz.dataMgr.CurLevelId == 105)) {
                    v.x += 300;
                    if (v.y < 300) {
                        v.y += 300;
                    }
                }
                rb.linearVelocity = v;
                break;
            }
            else if (cTag == Constant_1.tag.moveFloor && (d < 250 || CocosZ_1.cocosz.dataMgr.CurLevelId == 80)) {
                this.isFloor = true;
                return;
            }
            else if (cTag == 0 && (d < 250 || CocosZ_1.cocosz.dataMgr.CurLevelId == 80)) {
                break;
            }
        }
        for (var _a = 0, result2_2 = result2; _a < result2_2.length; _a++) {
            var physics = result2_2[_a];
            var cTag = physics.collider.tag;
            var point = physics.point;
            var d = Math.abs(point.x - startPos.x);
            if (cTag == Constant_1.tag.player || cTag == Constant_1.tag.balloon || cTag == Constant_1.tag.thorn || cTag == Constant_1.tag.honeybee || cTag == Constant_1.tag.stone) {
                if (cTag == Constant_1.tag.stone && CocosZ_1.cocosz.dataMgr.CurLevelId == 92)
                    break;
                this.isFloor = false;
                var rb = physics.collider.node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                v.x -= 300;
                if (this.node.angle == 90 && (CocosZ_1.cocosz.dataMgr.CurLevelId == 101 || CocosZ_1.cocosz.dataMgr.CurLevelId == 105)) {
                    v.x += 300;
                    if (v.y < 300) {
                        v.y += 300;
                    }
                }
                rb.linearVelocity = v;
                break;
            }
            else if (cTag == Constant_1.tag.moveFloor && (d < 250 || CocosZ_1.cocosz.dataMgr.CurLevelId == 80)) {
                this.isFloor = true;
                return;
            }
            else if (cTag == 0 && (d < 250 || CocosZ_1.cocosz.dataMgr.CurLevelId == 80)) {
                break;
            }
        }
        for (var _b = 0, result3_2 = result3; _b < result3_2.length; _b++) {
            var physics = result3_2[_b];
            var cTag = physics.collider.tag;
            var point = physics.point;
            var d = Math.abs(point.x - startPos.x);
            if (cTag == Constant_1.tag.player || cTag == Constant_1.tag.balloon || cTag == Constant_1.tag.thorn || cTag == Constant_1.tag.honeybee || cTag == Constant_1.tag.stone) {
                if (cTag == Constant_1.tag.stone && CocosZ_1.cocosz.dataMgr.CurLevelId == 92)
                    break;
                this.isFloor = false;
                var rb = physics.collider.node.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                v.x -= 300;
                if (this.node.angle == 90 && (CocosZ_1.cocosz.dataMgr.CurLevelId == 101 || CocosZ_1.cocosz.dataMgr.CurLevelId == 105)) {
                    v.x += 300;
                    if (v.y < 300) {
                        v.y += 300;
                    }
                }
                rb.linearVelocity = v;
                break;
            }
            else if (cTag == Constant_1.tag.moveFloor && (d < 250 || CocosZ_1.cocosz.dataMgr.CurLevelId == 80)) {
                this.isFloor = true;
                return;
            }
            else if (cTag == 0 && (d < 250 || CocosZ_1.cocosz.dataMgr.CurLevelId == 80)) {
                break;
            }
        }
        this.isFloor = false;
    };
    // LIFE-CYCLE CALLBACKS:
    propBigFan.prototype.onLoad = function () {
        this.intact = this.node.getChildByName("Intact");
        this.Damaged = this.node.getChildByName("Damaged");
        this.Damaged.active = false;
    };
    propBigFan.prototype.start = function () {
        this.action = cc.tween(this.intact.getChildByName("fanBlade"))
            .by(0.3, { angle: 360 })
            .repeatForever()
            .start();
        // cc.log(this.node.angle)
        // this.schedule(() => {
        //     if (this.node.angle == 0) {
        //         this.onFanRight();
        //     }
        //     else {
        //         this.onFanLeft();
        //     }
        // }, 0.02)
    };
    propBigFan.prototype.update = function (dt) {
        if (this.Damaged.active == true)
            return;
        if (this.node.angle == 0) {
            if (CocosZ_1.cocosz.dataMgr.CurLevelId == 10 || CocosZ_1.cocosz.dataMgr.CurLevelId == 80 || CocosZ_1.cocosz.dataMgr.CurLevelId == 101 || CocosZ_1.cocosz.dataMgr.CurLevelId == 105) {
                this.onFanLeft();
                return;
            }
            else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 92 && this.node.y <= 0) {
                this.onFanLeft();
                return;
            }
            this.onFanRight();
        }
        else {
            if (CocosZ_1.cocosz.dataMgr.CurLevelId == 30 || CocosZ_1.cocosz.dataMgr.CurLevelId == 51 || CocosZ_1.cocosz.dataMgr.CurLevelId == 84 || CocosZ_1.cocosz.dataMgr.CurLevelId == 114 || CocosZ_1.cocosz.dataMgr.CurLevelId == 117 || (this.node.angle == 180 && CocosZ_1.cocosz.dataMgr.CurLevelId == 105) || (this.node.angle == 180 && CocosZ_1.cocosz.dataMgr.CurLevelId == 101)) {
                this.onFanRight();
                return;
            }
            this.onFanLeft();
        }
    };
    propBigFan = __decorate([
        ccclass
    ], propBigFan);
    return propBigFan;
}(cc.Component));
exports.default = propBigFan;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxwcm9wQmlnRmFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBNkM7QUFDN0Msa0RBQTRDO0FBRXRDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVk7SUFEcEQ7UUFBQSxxRUFzaEJDO1FBbmhCRyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixZQUFNLEdBQVEsSUFBSSxDQUFBO1FBRWxCLGFBQU8sR0FBWSxLQUFLLENBQUM7O0lBNmdCN0IsQ0FBQztJQTNnQkcsbUNBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUFuQyxpQkFvQkM7UUFuQkcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxLQUFLO1lBQUUsT0FBTztRQUN4QyxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksY0FBRyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLGNBQUcsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxjQUFHLENBQUMsT0FBTyxJQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksY0FBRyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLGNBQUcsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFFO1lBQ3BLLGtCQUFrQjtZQUNsQixPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDO2dCQUNkLEtBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzlF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QUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzNFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFFO1lBQ3ZCLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNoRSxPQUFPLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZFLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDMUU7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRTtZQUN2QixNQUFNLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDL0QsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUN0RSxPQUFPLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FB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QyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3BFLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUMzRSxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDM0UsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUU7WUFDdkIsTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQy9ELE9BQU8sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDdEUsT0FBTyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUN6RTtRQUNELElBQUksTUFBTSxHQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN4RCxJQUFJLE9BQU8s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QUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxHQUFHLENBQUMsRUFBRTtnQkFFL1MsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNsQixPQUFPO2FBQ1Y7WUFDRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBcGhCZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXFoQjlCO0lBQUQsaUJBQUM7Q0FyaEJELEFBcWhCQyxDQXJoQnVDLEVBQUUsQ0FBQyxTQUFTLEdBcWhCbkQ7a0JBcmhCb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29jb3NaXCI7XHJcbmltcG9ydCB7IHRhZyB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uc3RhbnRcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwcm9wQmlnRmFuIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBpbnRhY3Q6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgRGFtYWdlZDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBpc0RhbWFnZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBhY3Rpb246IGFueSA9IG51bGxcclxuXHJcbiAgICBpc0Zsb29yOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnRhY3QuYWN0aXZlID09IGZhbHNlKSByZXR1cm47XHJcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSB0YWcucGxheWVyIHx8IG90aGVyLnRhZyA9PSB0YWcucm9wZSB8fCBvdGhlci50YWcgPT0gdGFnLmJhbGxvb258fCBvdGhlci50YWcgPT0gdGFnLmJhbGxvb24yIHx8IG90aGVyLnRhZyA9PSB0YWcudGhvcm4gfHwgb3RoZXIubm9kZS5uYW1lID09IFwiY2FjdHVzNVwiKSB7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhjb250YWN0KVxyXG4gICAgICAgICAgICBjb250YWN0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRhY3QuZ2V0Q2hpbGRCeU5hbWUoXCJmYW5CbGFkZVwiKS5nZXRDaGlsZEJ5TmFtZShcInNwXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIDAuNSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAob3RoZXIudGFnID09IHRhZy5zdG9uZSB8fCBvdGhlci50YWcgPT0gdGFnLnN0b25lMykge1xyXG4gICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA5MikgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb250YWN0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgb3RoZXIubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIC8vIH0sIDAuMDUpXHJcbiAgICAgICAgICAgIGxldCBwcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcInJvY2tldEVmZmVjdFwiLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgdGhpcy5vbkRhbWFnZWQoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+eUseeBq+eureiwg1xyXG4gICAgcHVibGljIG9uRGFtYWdlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5hY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb24uc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmludGFjdC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkRhbWFnZWQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjYy50d2Vlbih0aGlzLkRhbWFnZWQuZ2V0Q2hpbGRCeU5hbWUoXCJmYW5CbGFkZVwiKSlcclxuICAgICAgICAgICAgLmJ5KDMsIHsgYW5nbGU6IDM2MCB9KVxyXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcigpXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBvbkZhblJpZ2h0KCkge1xyXG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41ICYmIHRoaXMuaXNGbG9vciA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJmYW5MaVppXCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5hbmdsZSA9PSAxODApIHtcclxuICAgICAgICAgICAgICAgIGxldCBHYW1lID0gY2MuZmluZChcIkNhbnZhcy9nYW1lQmdcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgcDEgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSlcclxuICAgICAgICAgICAgICAgIGxldCBwMiA9IEdhbWUuY29udmVydFRvTm9kZVNwYWNlQVIocDEpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwMik7XHJcbiAgICAgICAgICAgICAgICBub2RlLnggKz0gLTEwMCAtIDEwMCAqIE1hdGgucmFuZG9tKCkgLSA0NTA7XHJcbiAgICAgICAgICAgICAgICBub2RlLnkgKz0gMTAwICogTWF0aC5yYW5kb20oKSAtIDUwO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zY2FsZSA9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgR2FtZS5hZGRDaGlsZChub2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5ieSgwLjQsIHsgb3BhY2l0eTogMTUwLCBwb3NpdGlvbjogY2MudjIoMTUwLCAwKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5ieSgwLjQsIHsgb3BhY2l0eTogLTE1MCwgcG9zaXRpb246IGNjLnYyKDE1MCwgMCkgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLm5vZGUuYW5nbGUgPT0gOTApIHtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhcIi0tLTkwLS0tLVwiKVxyXG4gICAgICAgICAgICAgICAgbGV0IEdhbWUgPSBjYy5maW5kKFwiQ2FudmFzL2dhbWVCZ1wiKTtcclxuICAgICAgICAgICAgICAgIGxldCBwMSA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKVxyXG4gICAgICAgICAgICAgICAgbGV0IHAyID0gR2FtZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwMSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHAyKTtcclxuICAgICAgICAgICAgICAgIG5vZGUueCArPSAxMDAgKiBNYXRoLnJhbmRvbSgpIC0gNTA7XHJcbiAgICAgICAgICAgICAgICBub2RlLnkgKz0gMTAwICogTWF0aC5yYW5kb20oKSArIDQ1MDtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIEdhbWUuYWRkQ2hpbGQobm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAuYnkoMC40LCB7IG9wYWNpdHk6IDE1MCwgcG9zaXRpb246IGNjLnYyKDAsIC0xNTApIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ5KDAuNCwgeyBvcGFjaXR5OiAtMTUwLCBwb3NpdGlvbjogY2MudjIoMCwgLTE1MCkgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBHYW1lID0gY2MuZmluZChcIkNhbnZhcy9nYW1lQmdcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgcDEgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSlcclxuICAgICAgICAgICAgICAgIGxldCBwMiA9IEdhbWUuY29udmVydFRvTm9kZVNwYWNlQVIocDEpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwMik7XHJcbiAgICAgICAgICAgICAgICBub2RlLnggKz0gLTEwMCAtIDEwMCAqIE1hdGgucmFuZG9tKCkgKyA0NTA7XHJcbiAgICAgICAgICAgICAgICBub2RlLnkgKz0gMTAwICogTWF0aC5yYW5kb20oKSAtIDUwO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zY2FsZSA9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgR2FtZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuekluZGV4IC09IDk5O1xyXG5cclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ5KDAuNCwgeyBvcGFjaXR5OiAxNTAsIHBvc2l0aW9uOiBjYy52MigrMTUwLCAwKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5ieSgwLjQsIHsgb3BhY2l0eTogLTE1MCwgcG9zaXRpb246IGNjLnYyKCsxNTAsIDApIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGhkID0gTWF0aC5QSSAvIDE4MCAqIHRoaXMubm9kZS5hbmdsZTtcclxuICAgICAgICBsZXQgY29zID0gTWF0aC5jb3MoaGQpO1xyXG4gICAgICAgIGxldCBzaW4gPSBNYXRoLnNpbihoZCk7XHJcbiAgICAgICAgbGV0IHN0YXJ0UG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIGxldCBlbmRQb3MgPSBjYy52MihzdGFydFBvcy54ICsgMTAwMCAqIGNvcywgc3RhcnRQb3MueSArIDMwMCAqIHNpbik7XHJcbiAgICAgICAgbGV0IGVuZFBvczIgPSBjYy52MihzdGFydFBvcy54ICsgMTAwMCAqIGNvcywgc3RhcnRQb3MueSArIDMwMCAqIHNpbiArIDEwMCk7XHJcbiAgICAgICAgbGV0IGVuZFBvczMgPSBjYy52MihzdGFydFBvcy54ICsgMTAwMCAqIGNvcywgc3RhcnRQb3MueSArIDMwMCAqIHNpbiAtIDEwMCk7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5hbmdsZSA9PSA5MCkge1xyXG4gICAgICAgICAgICBlbmRQb3MgPSBjYy52MihzdGFydFBvcy54ICsgMzAwICogY29zLCBzdGFydFBvcy55ICsgMTAwMCAqIHNpbik7XHJcbiAgICAgICAgICAgIGVuZFBvczIgPSBjYy52MihzdGFydFBvcy54ICsgMzAwICogY29zICsgMTAwLCBzdGFydFBvcy55ICsgMTAwMCAqIHNpbik7XHJcbiAgICAgICAgICAgIGVuZFBvczMgPSBjYy52MihzdGFydFBvcy54ICsgMzAwICogY29zIC0gMTAwLCBzdGFydFBvcy55ICsgMTAwMCAqIHNpbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuYW5nbGUgPT0gOTIpIHtcclxuICAgICAgICAgICAgZW5kUG9zID0gY2MudjIoc3RhcnRQb3MueCArIDUwMCAqIGNvcywgc3RhcnRQb3MueSArIDMwMCAqIHNpbik7XHJcbiAgICAgICAgICAgIGVuZFBvczIgPSBjYy52MihzdGFydFBvcy54ICsgNTAwICogY29zLCBzdGFydFBvcy55ICsgMzAwICogc2luICsgMTAwKTtcclxuICAgICAgICAgICAgZW5kUG9zMyA9IGNjLnYyKHN0YXJ0UG9zLnggKyA1MDAgKiBjb3MsIHN0YXJ0UG9zLnkgKyAzMDAgKiBzaW4gLSAxMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVzdWx0ID0gY29jb3N6LmdhbWVNZ3Iub25SYXlDYXN0KHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgIGxldCByZXN1bHQyID0gY29jb3N6LmdhbWVNZ3Iub25SYXlDYXN0KHN0YXJ0UG9zLCBlbmRQb3MyKTtcclxuICAgICAgICBsZXQgcmVzdWx0MyA9IGNvY29zei5nYW1lTWdyLm9uUmF5Q2FzdChzdGFydFBvcywgZW5kUG9zMyk7XHJcblxyXG4gICAgICAgIC8vIGNjLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tXCIsIHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnksIGVuZFBvcy54LCBlbmRQb3MueSwgZW5kUG9zMi54LCBlbmRQb3MyLnksIGVuZFBvczMueCwgZW5kUG9zMy55KTtcclxuICAgICAgICAvLyBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcclxuXHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tXCIsIHJlc3VsdFswXS5jb2xsaWRlci50YWcpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiAocmVzdWx0Mi5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICAgIC8vICAgICBjYy5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCByZXN1bHQyWzBdLmNvbGxpZGVyLnRhZyk7XHJcbiAgICAgICAgLy8gfSBpZiAocmVzdWx0My5sZW5ndGggPiAwKSB7XHJcblxyXG4gICAgICAgIC8vICAgICBjYy5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCByZXN1bHQzWzBdLmNvbGxpZGVyLnRhZywpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBmb3IgKGxldCBwaHlzaWNzIG9mIHJlc3VsdCkge1xyXG4gICAgICAgICAgICBsZXQgY1RhZyA9IHBoeXNpY3MuY29sbGlkZXIudGFnO1xyXG4gICAgICAgICAgICBsZXQgcG9pbnQgPSBwaHlzaWNzLnBvaW50O1xyXG4gICAgICAgICAgICBsZXQgZCA9IE1hdGguYWJzKHBvaW50LnggLSBzdGFydFBvcy54KTtcclxuICAgICAgICAgICAgaWYgKGNUYWcgPT0gdGFnLnBsYXllciB8fCBjVGFnID09IHRhZy5iYWxsb29uIHx8IGNUYWcgPT0gdGFnLnRob3JuIHx8IGNUYWcgPT0gdGFnLmhvbmV5YmVlIHx8IGNUYWcgPT0gdGFnLnN0b25lKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5pc0Zsb29yID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY1RhZyA9PSB0YWcuc3RvbmUgJiYgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA5MikgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmxvb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxldCByYiA9IHBoeXNpY3MuY29sbGlkZXIubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gcmIubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMiB8fCBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDMwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHYueSA8IDApIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdi55ID0gMFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICAgICB2LnggKz0gMTAwO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gZWxzZSBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA1MSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYueSAtPSAzMDA7IHYueCA9IDBcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZiAoY1RhZyA9PSB0YWcucGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHYueSAtPSAxMDBcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuYW5nbGUgPT0gOTApIHtcclxuICAgICAgICAgICAgICAgICAgICB2LnkgLT0gMTAwXHJcbiAgICAgICAgICAgICAgICAgICAgcmIubGluZWFyVmVsb2NpdHkgPSB2O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDEwMSB8fCBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDEwNSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LnkgKz0gMTUwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdi54ICs9IDEwMDtcclxuICAgICAgICAgICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDEyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdi54ICs9IDIwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIHJiLmxpbmVhclZlbG9jaXR5ID0gdjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNUYWcgPT0gdGFnLm1vdmVGbG9vciAmJiAoZCA8IDI1MCB8fCBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDgwKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0Zsb29yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBlbHNlIGlmIChjVGFnID09IHRhZy5zdG9uZSkge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjVGFnID09IDAgJiYgKGQgPCAyNTAgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA4MCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGbG9vciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA1MSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNGbG9vciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgcGh5c2ljcyBvZiByZXN1bHQyKSB7XHJcbiAgICAgICAgICAgIGxldCBjVGFnID0gcGh5c2ljcy5jb2xsaWRlci50YWc7XHJcbiAgICAgICAgICAgIGxldCBwb2ludCA9IHBoeXNpY3MucG9pbnQ7XHJcbiAgICAgICAgICAgIGxldCBkID0gTWF0aC5hYnMocG9pbnQueCAtIHN0YXJ0UG9zLngpO1xyXG4gICAgICAgICAgICBpZiAoY1RhZyA9PSB0YWcucGxheWVyIHx8IGNUYWcgPT0gdGFnLmJhbGxvb24gfHwgY1RhZyA9PSB0YWcudGhvcm4gfHwgY1RhZyA9PSB0YWcuaG9uZXliZWUgfHwgY1RhZyA9PSB0YWcuc3RvbmUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmlzRmxvb3IgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjVGFnID09IHRhZy5zdG9uZSAmJiBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDkyKSBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcmIgPSBwaHlzaWNzLmNvbGxpZGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IHJiLmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTIgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAzMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vICAgICBpZiAodi55IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB2LnkgPSAwXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYueCArPSAxMDA7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBlbHNlIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDUxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdi55IC09IDMwMDsgdi54ID0gMFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmIChjVGFnID09IHRhZy5wbGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdi55IC09IDEwMFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5hbmdsZSA9PSA5MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHYueSAtPSAxMDBcclxuICAgICAgICAgICAgICAgICAgICByYi5saW5lYXJWZWxvY2l0eSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTAxIHx8IGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYueSArPSAxNTBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB2LnggKz0gMTAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2LnggKz0gMjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgcmIubGluZWFyVmVsb2NpdHkgPSB2O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY1RhZyA9PSB0YWcubW92ZUZsb29yICYmIChkIDwgMjUwIHx8IGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gODApKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmxvb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNUYWcgPT0gMCAmJiAoZCA8IDI1MCB8fCBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDgwKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0Zsb29yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDUxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0Zsb29yID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgcGh5c2ljcyBvZiByZXN1bHQzKSB7XHJcbiAgICAgICAgICAgIGxldCBjVGFnID0gcGh5c2ljcy5jb2xsaWRlci50YWc7XHJcbiAgICAgICAgICAgIGxldCBwb2ludCA9IHBoeXNpY3MucG9pbnQ7XHJcbiAgICAgICAgICAgIGxldCBkID0gTWF0aC5hYnMocG9pbnQueCAtIHN0YXJ0UG9zLngpO1xyXG4gICAgICAgICAgICBpZiAoY1RhZyA9PSB0YWcucGxheWVyIHx8IGNUYWcgPT0gdGFnLmJhbGxvb24gfHwgY1RhZyA9PSB0YWcudGhvcm4gfHwgY1RhZyA9PSB0YWcuaG9uZXliZWUgfHwgY1RhZyA9PSB0YWcuc3RvbmUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmlzRmxvb3IgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjVGFnID09IHRhZy5zdG9uZSAmJiBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDkyKSBicmVhaztcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhjVGFnID09IHRhZy5wbGF5ZXIpXHJcbiAgICAgICAgICAgICAgICBsZXQgcmIgPSBwaHlzaWNzLmNvbGxpZGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IHJiLmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTIgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAzMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmICh2LnkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHYueSA9IDBcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdi54ICs9IDEwMDtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGVsc2UgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gNTEpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB2LnkgLT0gMzAwOyB2LnggPSAwO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGlmIChjVGFnID09IHRhZy5wbGF5ZXIpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdi55IC09IDEwMFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5hbmdsZSA9PSA5MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHYueSAtPSAxMDBcclxuICAgICAgICAgICAgICAgICAgICByYi5saW5lYXJWZWxvY2l0eSA9IHY7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTAxIHx8IGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYueSArPSAxNTBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB2LnggKz0gMTAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2LnggKz0gMjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgcmIubGluZWFyVmVsb2NpdHkgPSB2O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAvLyBcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjVGFnID09IHRhZy5tb3ZlRmxvb3IgJiYgKGQgPCAyNTAgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA4MCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGbG9vciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY1RhZyA9PSAwICYmIChkIDwgMjUwIHx8IGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gODApKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmxvb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gNTEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRmxvb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlzRmxvb3IgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkZhbkxlZnQoKSB7XHJcbiAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUgJiYgdGhpcy5pc0Zsb29yID09IGZhbHNlICYmIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgIT0gMTEpIHtcclxuICAgICAgICAgICAgbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiZmFuTGlaaVwiLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLmFuZ2xlID09IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgR2FtZSA9IGNjLmZpbmQoXCJDYW52YXMvZ2FtZUJnXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHAxID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpXHJcbiAgICAgICAgICAgICAgICBsZXQgcDIgPSBHYW1lLmNvbnZlcnRUb05vZGVTcGFjZUFSKHAxKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24ocDIpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS54ICs9IC0xMDAgLSAxMDAgKiBNYXRoLnJhbmRvbSgpICsgNzUwO1xyXG4gICAgICAgICAgICAgICAgbm9kZS55ICs9IDEwMCAqIE1hdGgucmFuZG9tKCkgLSA1MDtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIEdhbWUuYWRkQ2hpbGQobm9kZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgICAgICAgICAgICAgICAuYnkoMC40LCB7IG9wYWNpdHk6IDE1MCwgcG9zaXRpb246IGNjLnYyKC0xNTAsIDApIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ5KDAuNCwgeyBvcGFjaXR5OiAtMTUwLCBwb3NpdGlvbjogY2MudjIoLTE1MCwgMCkgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5ub2RlLmFuZ2xlID09IDkwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCItLS05MC0tLS1cIilcclxuICAgICAgICAgICAgICAgIGxldCBHYW1lID0gY2MuZmluZChcIkNhbnZhcy9nYW1lQmdcIik7XHJcbiAgICAgICAgICAgICAgICBsZXQgcDEgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSlcclxuICAgICAgICAgICAgICAgIGxldCBwMiA9IEdhbWUuY29udmVydFRvTm9kZVNwYWNlQVIocDEpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwMik7XHJcbiAgICAgICAgICAgICAgICBub2RlLnggKz0gMTAwICogTWF0aC5yYW5kb20oKSAtIDUwO1xyXG4gICAgICAgICAgICAgICAgbm9kZS55ICs9IDEwMCAqIE1hdGgucmFuZG9tKCkgKyAxMDA7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNjYWxlID0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICBHYW1lLmFkZENoaWxkKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ5KDAuNCwgeyBvcGFjaXR5OiAxNTAsIHBvc2l0aW9uOiBjYy52MigwLCArMTUwKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5ieSgwLjQsIHsgb3BhY2l0eTogLTE1MCwgcG9zaXRpb246IGNjLnYyKDAsICsxNTApIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgR2FtZSA9IGNjLmZpbmQoXCJDYW52YXMvZ2FtZUJnXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHAxID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpXHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2codGhpcy5ub2RlLCBcIi0tLS0tLS0tLS0tLS0tXCIscDEpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHAyID0gR2FtZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwMSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHAyKTtcclxuICAgICAgICAgICAgICAgIG5vZGUueCArPSAtMTAwIC0gMTAwICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgICAgIG5vZGUueSArPSAxMDAgKiBNYXRoLnJhbmRvbSgpIC0gNTA7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNjYWxlID0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBub2RlLnpJbmRleCAtPSA5OTg7XHJcbiAgICAgICAgICAgICAgICBHYW1lLmFkZENoaWxkKG5vZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmJ5KDAuNCwgeyBvcGFjaXR5OiAxNTAsIHBvc2l0aW9uOiBjYy52MigtMTUwLCAwKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5ieSgwLjQsIHsgb3BhY2l0eTogLTE1MCwgcG9zaXRpb246IGNjLnYyKC0xNTAsIDApIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGhkID0gTWF0aC5QSSAvIDE4MCAqIHRoaXMubm9kZS5hbmdsZTtcclxuICAgICAgICBsZXQgY29zID0gTWF0aC5jb3MoaGQpO1xyXG4gICAgICAgIGxldCBzaW4gPSBNYXRoLnNpbihoZCk7XHJcbiAgICAgICAgbGV0IHN0YXJ0UG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIGxldCBlbmRQb3MgPSBjYy52MihzdGFydFBvcy54ICsgMTAwMCAqIGNvcywgc3RhcnRQb3MueSArIDMwMCAqIHNpbik7XHJcbiAgICAgICAgbGV0IGVuZFBvczIgPSBjYy52MihzdGFydFBvcy54ICsgMTAwMCAqIGNvcywgc3RhcnRQb3MueSArIDMwMCAqIHNpbiArIDEwMCk7XHJcbiAgICAgICAgbGV0IGVuZFBvczMgPSBjYy52MihzdGFydFBvcy54ICsgMTAwMCAqIGNvcywgc3RhcnRQb3MueSArIDMwMCAqIHNpbiAtIDEwMCk7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5hbmdsZSA9PSA5Mikge1xyXG4gICAgICAgICAgICBlbmRQb3MgPSBjYy52MihzdGFydFBvcy54ICsgNTAwICogY29zLCBzdGFydFBvcy55ICsgMzAwICogc2luKTtcclxuICAgICAgICAgICAgZW5kUG9zMiA9IGNjLnYyKHN0YXJ0UG9zLnggKyA1MDAgKiBjb3MsIHN0YXJ0UG9zLnkgKyAzMDAgKiBzaW4gKyAxMDApO1xyXG4gICAgICAgICAgICBlbmRQb3MzID0gY2MudjIoc3RhcnRQb3MueCArIDUwMCAqIGNvcywgc3RhcnRQb3MueSArIDMwMCAqIHNpbiAtIDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXN1bHQgPSBjb2Nvc3ouZ2FtZU1nci5vblJheUNhc3Qoc3RhcnRQb3MsIGVuZFBvcyk7XHJcbiAgICAgICAgbGV0IHJlc3VsdDIgPSBjb2Nvc3ouZ2FtZU1nci5vblJheUNhc3Qoc3RhcnRQb3MsIGVuZFBvczIpO1xyXG4gICAgICAgIGxldCByZXN1bHQzID0gY29jb3N6LmdhbWVNZ3Iub25SYXlDYXN0KHN0YXJ0UG9zLCBlbmRQb3MzKTtcclxuICAgICAgICAvLyBjYy5sb2coc3RhcnRQb3MueCwgc3RhcnRQb3MueSwgZW5kUG9zLngsIGVuZFBvcy55KVxyXG4gICAgICAgIGZvciAobGV0IHBoeXNpY3Mgb2YgcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGxldCBjVGFnID0gcGh5c2ljcy5jb2xsaWRlci50YWc7XHJcbiAgICAgICAgICAgIGxldCBwb2ludCA9IHBoeXNpY3MucG9pbnQ7XHJcbiAgICAgICAgICAgIGxldCBkID0gTWF0aC5hYnMocG9pbnQueCAtIHN0YXJ0UG9zLngpO1xyXG4gICAgICAgICAgICBpZiAoY1RhZyA9PSB0YWcucGxheWVyIHx8IGNUYWcgPT0gdGFnLmJhbGxvb24gfHwgY1RhZyA9PSB0YWcudGhvcm4gfHwgY1RhZyA9PSB0YWcuaG9uZXliZWUgfHwgY1RhZyA9PSB0YWcuc3RvbmUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjVGFnID09IHRhZy5zdG9uZSAmJiBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDkyKSBicmVhaztcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGbG9vciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJiID0gcGh5c2ljcy5jb2xsaWRlci5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSByYi5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgICAgIHYueCAtPSAzMDA7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlLmFuZ2xlID09IDkwICYmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDEwMSB8fCBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDEwNSkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdi54ICs9IDMwMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodi55IDwgMzAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYueSArPSAzMDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByYi5saW5lYXJWZWxvY2l0eSA9IHY7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjVGFnID09IHRhZy5tb3ZlRmxvb3IgJiYgKGQgPCAyNTAgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA4MCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGbG9vciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY1RhZyA9PSAwICYmIChkIDwgMjUwIHx8IGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gODApKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBwaHlzaWNzIG9mIHJlc3VsdDIpIHtcclxuICAgICAgICAgICAgbGV0IGNUYWcgPSBwaHlzaWNzLmNvbGxpZGVyLnRhZztcclxuICAgICAgICAgICAgbGV0IHBvaW50ID0gcGh5c2ljcy5wb2ludDtcclxuICAgICAgICAgICAgbGV0IGQgPSBNYXRoLmFicyhwb2ludC54IC0gc3RhcnRQb3MueCk7XHJcbiAgICAgICAgICAgIGlmIChjVGFnID09IHRhZy5wbGF5ZXIgfHwgY1RhZyA9PSB0YWcuYmFsbG9vbiB8fCBjVGFnID09IHRhZy50aG9ybiB8fCBjVGFnID09IHRhZy5ob25leWJlZSB8fCBjVGFnID09IHRhZy5zdG9uZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNUYWcgPT0gdGFnLnN0b25lICYmIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gOTIpIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0Zsb29yID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmIgPSBwaHlzaWNzLmNvbGxpZGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdiA9IHJiLmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgICAgICAgICAgdi54IC09IDMwMDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuYW5nbGUgPT0gOTAgJiYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTAxIHx8IGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTA1KSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2LnggKz0gMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2LnkgPCAzMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdi55ICs9IDMwMFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJiLmxpbmVhclZlbG9jaXR5ID0gdjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNUYWcgPT0gdGFnLm1vdmVGbG9vciAmJiAoZCA8IDI1MCB8fCBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDgwKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0Zsb29yID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjVGFnID09IDAgJiYgKGQgPCAyNTAgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA4MCkpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IHBoeXNpY3Mgb2YgcmVzdWx0Mykge1xyXG4gICAgICAgICAgICBsZXQgY1RhZyA9IHBoeXNpY3MuY29sbGlkZXIudGFnO1xyXG4gICAgICAgICAgICBsZXQgcG9pbnQgPSBwaHlzaWNzLnBvaW50O1xyXG4gICAgICAgICAgICBsZXQgZCA9IE1hdGguYWJzKHBvaW50LnggLSBzdGFydFBvcy54KTtcclxuICAgICAgICAgICAgaWYgKGNUYWcgPT0gdGFnLnBsYXllciB8fCBjVGFnID09IHRhZy5iYWxsb29uIHx8IGNUYWcgPT0gdGFnLnRob3JuIHx8IGNUYWcgPT0gdGFnLmhvbmV5YmVlIHx8IGNUYWcgPT0gdGFnLnN0b25lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY1RhZyA9PSB0YWcuc3RvbmUgJiYgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA5MikgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmxvb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxldCByYiA9IHBoeXNpY3MuY29sbGlkZXIubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgICAgIGxldCB2ID0gcmIubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgICAgICB2LnggLT0gMzAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5hbmdsZSA9PSA5MCAmJiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMDEgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMDUpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHYueCArPSAzMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYueSA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2LnkgKz0gMzAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmIubGluZWFyVmVsb2NpdHkgPSB2O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY1RhZyA9PSB0YWcubW92ZUZsb29yICYmIChkIDwgMjUwIHx8IGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gODApKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmxvb3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNUYWcgPT0gMCAmJiAoZCA8IDI1MCB8fCBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDgwKSkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc0Zsb29yID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuaW50YWN0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiSW50YWN0XCIpO1xyXG4gICAgICAgIHRoaXMuRGFtYWdlZCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkRhbWFnZWRcIik7XHJcblxyXG4gICAgICAgIHRoaXMuRGFtYWdlZC5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmFjdGlvbiA9IGNjLnR3ZWVuKHRoaXMuaW50YWN0LmdldENoaWxkQnlOYW1lKFwiZmFuQmxhZGVcIikpXHJcbiAgICAgICAgICAgIC5ieSgwLjMsIHsgYW5nbGU6IDM2MCB9KVxyXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcigpXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgLy8gY2MubG9nKHRoaXMubm9kZS5hbmdsZSlcclxuXHJcbiAgICAgICAgLy8gdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLm5vZGUuYW5nbGUgPT0gMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5vbkZhblJpZ2h0KCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm9uRmFuTGVmdCgpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSwgMC4wMilcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAodGhpcy5EYW1hZ2VkLmFjdGl2ZSA9PSB0cnVlKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5hbmdsZSA9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDEwIHx8IGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gODAgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMDEgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMDUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRmFuTGVmdCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gOTIgJiYgdGhpcy5ub2RlLnkgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkZhbkxlZnQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm9uRmFuUmlnaHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDMwIHx8IGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gNTEgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA4NCB8fCBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDExNCB8fCBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDExNyB8fCAodGhpcy5ub2RlLmFuZ2xlID09IDE4MCAmJiBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDEwNSkgfHwgKHRoaXMubm9kZS5hbmdsZSA9PSAxODAgJiYgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMDEpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkZhblJpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vbkZhbkxlZnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19