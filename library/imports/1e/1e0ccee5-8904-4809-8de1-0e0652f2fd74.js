"use strict";
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