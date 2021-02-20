"use strict";
cc._RF.push(module, '1d271xhEtxJZ58wu71UN92q', 'levelNum');
// script/ysqszc/levelNum.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var levelNum = /** @class */ (function (_super) {
    __extends(levelNum, _super);
    function levelNum() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property(cc.Label)
        _this.levelNum = null;
        // @property(cc.Node)
        _this.mask = null;
        _this.curLevel = 0;
        return _this;
        // update (dt) {}
    }
    levelNum.prototype.initGame1 = function () {
        var prefab = CocosZ_1.cocosz.resMgr.getRes("level" + this.curLevel, cc.Prefab);
        for (var _i = 0, _a = prefab.data.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child.name == "mapMask2") {
                var component = child.getComponents(cc.PhysicsPolygonCollider);
                var list = [];
                for (var _b = 0, component_1 = component; _b < component_1.length; _b++) {
                    var poly = component_1[_b];
                    if (poly.points) {
                        list.push(poly.points);
                    }
                }
                var prefab_1 = CocosZ_1.cocosz.resMgr.getRes("mapMask", cc.Prefab);
                var node_1 = cc.instantiate(prefab_1);
                var graphics2 = node_1.getChildByName("line").getComponent(cc.Graphics);
                this.node.addChild(node_1);
                node_1.setPosition(child.getPosition());
                node_1.zIndex -= 999;
                node_1.scaleX = child.scaleX;
                node_1.scaleY = child.scaleY;
                node_1.angle = child.angle;
                var mask = node_1.getComponent(cc.Mask);
                var graphics = mask._graphics;
                var rb = node_1.addComponent(cc.RigidBody);
                rb.type = cc.RigidBodyType.Kinematic;
                rb.gravityScale = 0;
                for (var _c = 0, list_1 = list; _c < list_1.length; _c++) {
                    var point = list_1[_c];
                    var collider = node_1.addComponent(cc.PhysicsPolygonCollider);
                    // cc.log(collider.tag, "----------collider.tag");
                    collider.tag = 0;
                    collider.points = [].concat(point);
                    collider.apply();
                    graphics.moveTo(point[0].x, point[0].y);
                    for (var _d = 0, point_1 = point; _d < point_1.length; _d++) {
                        var v2 = point_1[_d];
                        graphics.lineTo(v2.x, v2.y);
                    }
                    graphics.fill();
                    graphics2.lineWidth = 10;
                    graphics2.strokeColor = new cc.Color(40, 33, 13, 255);
                    graphics2.moveTo(point[0].x, point[0].y);
                    for (var _e = 0, point_2 = point; _e < point_2.length; _e++) {
                        var v2 = point_2[_e];
                        graphics2.lineTo(v2.x, v2.y);
                    }
                    graphics2.lineTo(point[0].x, point[0].y);
                    graphics2.stroke();
                }
                continue;
            }
            else if (child.name == "levelNum") {
                var prefab_2 = CocosZ_1.cocosz.resMgr.getRes("levelNum", cc.Prefab);
                var node_2 = cc.instantiate(prefab_2);
                this.node.addChild(node_2);
                node_2.setPosition(child.getPosition());
                node_2.getChildByName("num").getComponent(cc.Label).string = CocosZ_1.cocosz.gameMgr.curGame2LevelID + "";
                continue;
            }
            var prefab_3 = CocosZ_1.cocosz.resMgr.getRes(child.name, cc.Prefab);
            var node = cc.instantiate(prefab_3);
            node.scaleX = child.scaleX;
            node.scaleY = child.scaleY;
            node.angle = child.angle;
            node.setPosition(child.getPosition());
            this.node.addChild(node);
        }
    };
    levelNum.prototype.initGame2 = function () {
        var prefab = CocosZ_1.cocosz.resMgr.getRes("MapData", cc.JsonAsset).json["level" + this.curLevel];
        for (var _i = 0, prefab_4 = prefab; _i < prefab_4.length; _i++) {
            var child = prefab_4[_i];
            // cc.log(child);
            if (child.name == "mapMask2") {
                // let component = child.getComponents(cc.PhysicsPolygonCollider);
                var list = child.list;
                // for (let poly of component) {
                //     if (poly.points) {
                //         list.push(poly.points)
                //     }
                // }
                var prefab_5 = CocosZ_1.cocosz.resMgr.getRes("mapMask", cc.Prefab);
                var node_3 = cc.instantiate(prefab_5);
                var graphics2 = node_3.getChildByName("line").getComponent(cc.Graphics);
                this.node.addChild(node_3);
                node_3.x = child.x;
                node_3.y = child.y;
                node_3.zIndex -= 999;
                node_3.scaleX = child.scaleX;
                node_3.scaleY = child.scaleY;
                node_3.angle = child.angle;
                var mask = node_3.getComponent(cc.Mask);
                var graphics = mask._graphics;
                var rb = node_3.addComponent(cc.RigidBody);
                rb.type = cc.RigidBodyType.Kinematic;
                rb.gravityScale = 0;
                for (var _a = 0, list_2 = list; _a < list_2.length; _a++) {
                    var point = list_2[_a];
                    var collider = node_3.addComponent(cc.PhysicsPolygonCollider);
                    // cc.log(collider.tag, "----------collider.tag");
                    collider.tag = 0;
                    var bb = [];
                    for (var _b = 0, point_3 = point; _b < point_3.length; _b++) {
                        var aa = point_3[_b];
                        bb.push(cc.v2(aa.x, aa.y));
                    }
                    point = bb;
                    collider.points = [].concat(point);
                    collider.apply();
                    graphics.moveTo(point[0].x, point[0].y);
                    for (var _c = 0, point_4 = point; _c < point_4.length; _c++) {
                        var v2 = point_4[_c];
                        graphics.lineTo(v2.x, v2.y);
                    }
                    graphics.fill();
                    graphics2.lineWidth = 10;
                    graphics2.strokeColor = new cc.Color(40, 33, 13, 255);
                    graphics2.moveTo(point[0].x, point[0].y);
                    for (var _d = 0, point_5 = point; _d < point_5.length; _d++) {
                        var v2 = point_5[_d];
                        graphics2.lineTo(v2.x, v2.y);
                    }
                    graphics2.lineTo(point[0].x, point[0].y);
                    graphics2.stroke();
                }
                continue;
            }
            else if (child.name == "levelNum") {
                var prefab_6 = CocosZ_1.cocosz.resMgr.getRes("levelNum", cc.Prefab);
                var node_4 = cc.instantiate(prefab_6);
                this.node.addChild(node_4);
                node_4.x = child.x;
                node_4.y = child.y;
                node_4.getChildByName("num").getComponent(cc.Label).string = CocosZ_1.cocosz.gameMgr.curGame2LevelID + "";
                continue;
            }
            var prefab_7 = CocosZ_1.cocosz.resMgr.getRes(child.name, cc.Prefab);
            var node = cc.instantiate(prefab_7);
            node.scaleX = child.scaleX;
            node.scaleY = child.scaleY;
            node.angle = child.angle;
            node.x = child.x;
            node.y = child.y;
            this.node.addChild(node);
        }
    };
    // LIFE-CYCLE CALLBACKS:
    levelNum.prototype.onLoad = function () {
    };
    levelNum.prototype.start = function () {
        // cc.log(this.curLevel)
        var _this = this;
        this.initGame2();
        this.scheduleOnce(function () {
            for (var _i = 0, _a = _this.node.children; _i < _a.length; _i++) {
                var child = _a[_i];
                var rb = child.getComponent(cc.RigidBody);
                if (!rb || child.name == "cactus6") {
                    cc.log(child.name, "---------child");
                    continue;
                }
                ;
                rb.gravityScale = 0;
                if ((_this.curLevel == 10 && child.name == "nimiCactus12") || (_this.curLevel == 13 && child.name == "stone") || (_this.curLevel == 16 && child.name == "stone")) {
                    rb.gravityScale = 1;
                    if (child.getComponent(cc.PhysicsCircleCollider)) {
                        child.getComponent(cc.PhysicsCircleCollider).friction = 0.05;
                    }
                }
                else {
                    rb.linearVelocity = cc.v2(0, -200);
                    if (child.name == "sBoard") {
                        var rb_1 = child.getComponent(cc.RigidBody);
                        var v = rb_1.linearVelocity;
                        v = cc.v2(0, -200);
                        rb_1.linearVelocity = v;
                        rb_1.angularVelocity = 100;
                    }
                    else if (_this.curLevel == 6 && child.name == "stone") {
                        rb.linearVelocity = cc.v2(-child.x / 10, -200);
                    }
                    else if (_this.curLevel == 16 && child.name == "stone") {
                        rb.linearVelocity = cc.v2(0, -200);
                    }
                }
                // if (rb) {
                cc.log(child.name);
                // }
            }
        }, 0.5);
        this.scheduleOnce(function () {
            _this.node.destroy();
        }, 40);
        // this.mask.removeFromParent();
    };
    levelNum = __decorate([
        ccclass
    ], levelNum);
    return levelNum;
}(cc.Component));
exports.default = levelNum;

cc._RF.pop();