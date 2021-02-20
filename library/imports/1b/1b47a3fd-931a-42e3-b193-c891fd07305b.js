"use strict";
cc._RF.push(module, '1b47aP9kxpC47GTyJH9BzBb', 'laser');
// script/Game/laser.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var laser = /** @class */ (function (_super) {
    __extends(laser, _super);
    function laser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.laserEffect = null;
        _this.isDes = false;
        return _this;
    }
    laser.prototype.onRayCast = function () {
        var _this = this;
        if (this.isDes)
            return;
        var startPos = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
        var endPos = cc.v2(0, 0);
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 71 || CocosZ_1.cocosz.dataMgr.CurLevelId == 79 || CocosZ_1.cocosz.dataMgr.CurLevelId == 87 ||
            CocosZ_1.cocosz.dataMgr.CurLevelId == 90 || CocosZ_1.cocosz.dataMgr.CurLevelId == 95 || CocosZ_1.cocosz.dataMgr.CurLevelId == 96) {
            if (CocosZ_1.cocosz.dataMgr.CurLevelId == 95) {
                if (this.node.parent.angle != 180) {
                    this.node.parent.angle = 270;
                }
            }
            else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 96) {
                if (this.node.parent.angle != 0) {
                    this.node.parent.angle = 270;
                }
            }
            else {
                this.node.parent.angle = 270;
            }
        }
        if (this.node.parent.angle == 0) {
            endPos = cc.v2(startPos.x + 1500, startPos.y);
        }
        else if (this.node.parent.angle == 180) {
            endPos = cc.v2(startPos.x - 1500, startPos.y);
        }
        else if (this.node.parent.angle == 90) {
            endPos = cc.v2(startPos.x, startPos.y + 1500);
        }
        else if (this.node.parent.angle == 270) {
            endPos = cc.v2(startPos.x, startPos.y - 1500);
        }
        var result = CocosZ_1.cocosz.gameMgr.onRayCast(startPos, endPos);
        // cc.log(this.node.parent.angle, startPos.x, startPos.y, endPos.x, endPos.y, result[0].collider.node.name);
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var rb = result_1[_i];
            var CTag = rb.collider.tag;
            var node = rb.collider.node;
            if (CTag == 0 || CTag == Constant_1.tag.moveFloor || CTag == Constant_1.tag.stone || CTag == Constant_1.tag.stone3 || CTag == Constant_1.tag.cloud || (CTag == Constant_1.tag.floorThorn && node.name == "floor19")) {
                var point = rb.point;
                var w = startPos.x - point.x;
                if (this.node.parent.angle == 90 || this.node.parent.angle == 270) {
                    w = startPos.y - point.y;
                }
                this.node.width = Math.abs(w) / this.node.parent.scaleX;
                this.laserEffect.x = this.node.width + 45 + 7;
                return;
            }
            else if (CTag == Constant_1.tag.balloon || CTag == Constant_1.tag.rope || CTag == Constant_1.tag.player) {
                if (CTag == Constant_1.tag.balloon && node.parent.parent.name == "role") {
                    var sc = node.getComponent("balloon");
                    sc.onDesByLaser();
                }
                else if (CTag == Constant_1.tag.rope) {
                    var sc = node.getChildByName("balloon").getComponent("balloon");
                    sc.onDesByLaser();
                }
                else if (CTag == Constant_1.tag.player) {
                    var parent = node.parent;
                    if (parent.name != "role") {
                        parent = parent.parent;
                    }
                    for (var _a = 0, _b = node.parent.children; _a < _b.length; _a++) {
                        var child = _b[_a];
                        if (child.name == "right_balloon" || child.name == "left_balloon")
                            continue;
                        child.color = cc.color(0, 0, 0, 255);
                        for (var _c = 0, _d = child.children; _c < _d.length; _c++) {
                            var child2 = _d[_c];
                            child2.color = cc.color(0, 0, 0, 255);
                            if (child.children.length > 0) {
                                for (var _e = 0, _f = child2.children; _e < _f.length; _e++) {
                                    var child3 = _f[_e];
                                    child3.color = cc.color(0, 0, 0, 255);
                                }
                            }
                        }
                    }
                    cc.game.emit(Constant_1.default.E_GAME_FAID);
                }
            }
            else if (CTag == Constant_1.tag.thorn || (CTag == Constant_1.tag.floorThorn && node.name != "floor19") || CTag == Constant_1.tag.honeybee) {
                var point = rb.point;
                var pos = this.node.parent.convertToNodeSpaceAR(point);
                var prefab = CocosZ_1.cocosz.resMgr.getRes("laserEffect", cc.Prefab);
                var node2 = cc.instantiate(prefab);
                node2.setPosition(pos);
                this.node.parent.addChild(node2);
                node.destroy();
            }
            else if (CTag == Constant_1.tag.balloon2) {
                node.destroy();
            }
            else if (CTag == Constant_1.tag.laser) {
                cc.log("激光销毁--------------------");
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 135)
                    return;
                cc.log("激光销毁2--------------------");
                this.isDes = true;
                this.scheduleOnce(function () {
                    _this.node.parent.destroy();
                }, 0.1);
            }
        }
        this.node.width = 1975;
    };
    // LIFE-CYCLE CALLBACKS:
    laser.prototype.onEnable = function () {
        var box = this.node.parent.getComponent(cc.PhysicsBoxCollider);
        box.apply();
    };
    laser.prototype.onDestroy = function () {
        cc.log("激光销毁----");
    };
    laser.prototype.onLoad = function () {
        this.laserEffect = this.node.parent.getChildByName("laserEffect");
    };
    laser.prototype.start = function () {
    };
    laser.prototype.update = function (dt) {
        this.onRayCast();
    };
    laser = __decorate([
        ccclass
    ], laser);
    return laser;
}(cc.Component));
exports.default = laser;

cc._RF.pop();