"use strict";
cc._RF.push(module, '848ffDJ+7lBMaQYJ0UtOogf', 'propMoveFloor18');
// script/Game/propMoveFloor18.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var propMoveFloor18 = /** @class */ (function (_super) {
    __extends(propMoveFloor18, _super);
    function propMoveFloor18() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isTrue = false;
        return _this;
    }
    propMoveFloor18.prototype.onBeginContact = function (contact, self, other) {
        if (this.isTrue)
            return;
        if (other.tag == Constant_1.tag.thorn || other.tag == Constant_1.tag.balloon || other.tag == Constant_1.tag.balloon2 || other.tag == Constant_1.tag.stone) {
            this.isTrue = true;
            cc.log(CocosZ_1.cocosz.dataMgr.CurLevelId);
            if (CocosZ_1.cocosz.dataMgr.CurLevelId == 108) {
                // let floor1
                for (var _i = 0, _a = this.node.parent.children; _i < _a.length; _i++) {
                    var child = _a[_i];
                    if (child.name == "floor19") {
                        if (child.angle == 0) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(128.8, -173.5) })
                                .start();
                        }
                        else if (child.angle == 180) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(-339, 271.5) })
                                .start();
                        }
                    }
                }
                var btn = this.node.getChildByName("btn1");
                cc.tween(btn)
                    .to(1, { position: cc.v2(0, -22) })
                    .start();
            }
            else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 58) {
                // let floor1
                for (var _b = 0, _c = this.node.parent.children; _b < _c.length; _b++) {
                    var child = _c[_b];
                    if (child.name == "floor19") {
                        if (child.angle == 0) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(337, 213.5) })
                                .start();
                        }
                        else if (child.angle == 180) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(-337, 213.5) })
                                .start();
                        }
                    }
                }
                var btn = this.node.getChildByName("btn1");
                cc.tween(btn)
                    .to(1, { position: cc.v2(0, -22) })
                    .start();
            }
            else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 67 || CocosZ_1.cocosz.dataMgr.CurLevelId == 138) {
                // let floor1
                var btn = this.node.getChildByName("btn1");
                cc.tween(btn)
                    .to(1, { position: cc.v2(0, -22) })
                    .start();
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 138) {
                    for (var _d = 0, _e = this.node.parent.children; _d < _e.length; _d++) {
                        var child = _e[_d];
                        if (CocosZ_1.cocosz.gameMgr.isOpen == false) {
                            CocosZ_1.cocosz.gameMgr.isOpen = true;
                            return;
                        }
                        if (child.name == "floor19") {
                            if (child.angle == 0) {
                                cc.tween(child)
                                    .to(1, { position: cc.v2(218, -113) })
                                    .start();
                            }
                            else if (child.angle == 180) {
                                cc.tween(child)
                                    .to(1, { position: cc.v2(-217, -113) })
                                    .start();
                            }
                        }
                    }
                    return;
                }
                for (var _f = 0, _g = this.node.parent.children; _f < _g.length; _f++) {
                    var child = _g[_f];
                    if (CocosZ_1.cocosz.gameMgr.isOpen == false) {
                        CocosZ_1.cocosz.gameMgr.isOpen = true;
                        return;
                    }
                    if (child.name == "floor19") {
                        if (child.angle == 0) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(276, 269) })
                                .start();
                        }
                        else if (child.angle == 180) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(-283, 268) })
                                .start();
                        }
                    }
                }
            }
            else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 86) {
                for (var _h = 0, _j = this.node.parent.children; _h < _j.length; _h++) {
                    var child = _j[_h];
                    if (child.name == "floor19") {
                        cc.tween(child)
                            .to(1, { position: cc.v2(-318, 283) })
                            .start();
                    }
                }
                var btn = this.node.getChildByName("btn1");
                cc.tween(btn)
                    .to(1, { position: cc.v2(0, -22) })
                    .start();
            }
            else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 91) {
                // let floor1
                for (var _k = 0, _l = this.node.parent.children; _k < _l.length; _k++) {
                    var child = _l[_k];
                    if (CocosZ_1.cocosz.gameMgr.isOpen == false) {
                        CocosZ_1.cocosz.gameMgr.isOpen = true;
                        var btn_1 = this.node.getChildByName("btn1");
                        cc.tween(btn_1)
                            .to(1, { position: cc.v2(0, -22) })
                            .start();
                        return;
                    }
                    if (child.name == "floor19") {
                        if (child.angle == 0) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(269, 284.5) })
                                .start();
                        }
                        else if (child.angle == 180) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(-276, 281.5) })
                                .start();
                        }
                    }
                }
                var btn = this.node.getChildByName("btn1");
                cc.tween(btn)
                    .to(1, { position: cc.v2(0, -22) })
                    .start();
            }
            else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 131) {
                // let floor1
                for (var _m = 0, _o = this.node.parent.children; _m < _o.length; _m++) {
                    var child = _o[_m];
                    if (CocosZ_1.cocosz.gameMgr.isOpen == false) {
                        CocosZ_1.cocosz.gameMgr.isOpen = true;
                        var btn_2 = this.node.getChildByName("btn1");
                        cc.tween(btn_2)
                            .to(1, { position: cc.v2(0, -22) })
                            .start();
                        return;
                    }
                    if (child.name == "floor19") {
                        if (child.angle == 0) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(214, -440) })
                                .start();
                        }
                        else if (child.angle == 180) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(-208, -443) })
                                .start();
                        }
                    }
                }
                var btn = this.node.getChildByName("btn1");
                cc.tween(btn)
                    .to(1, { position: cc.v2(0, -22) })
                    .start();
            }
            else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 97) {
                // let floor1
                for (var _p = 0, _q = this.node.parent.children; _p < _q.length; _p++) {
                    var child = _q[_p];
                    if (CocosZ_1.cocosz.gameMgr.isOpen == false) {
                        CocosZ_1.cocosz.gameMgr.isOpen = true;
                        var btn_3 = this.node.getChildByName("btn1");
                        cc.tween(btn_3)
                            .to(1, { position: cc.v2(0, -22) })
                            .start();
                        return;
                    }
                    if (child.name == "floor19") {
                        if (child.angle == 0) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(269, 284.5) })
                                .start();
                        }
                        else if (child.angle == 180) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(200, 266) })
                                .start();
                        }
                    }
                }
                var btn = this.node.getChildByName("btn1");
                cc.tween(btn)
                    .to(1, { position: cc.v2(0, -22) })
                    .start();
            }
            else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 99) {
                // let floor1
                for (var _r = 0, _s = this.node.parent.children; _r < _s.length; _r++) {
                    var child = _s[_r];
                    if (CocosZ_1.cocosz.gameMgr.isOpen == false) {
                        CocosZ_1.cocosz.gameMgr.isOpen = true;
                        var btn_4 = this.node.getChildByName("btn1");
                        cc.tween(btn_4)
                            .to(1, { position: cc.v2(0, -22) })
                            .start();
                        return;
                    }
                    if (child.name == "floor19") {
                        if (child.angle == 0) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(-104, 295) })
                                .start();
                        }
                        else if (child.angle == 180) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(55, 295) })
                                .start();
                        }
                    }
                }
                var btn = this.node.getChildByName("btn1");
                cc.tween(btn)
                    .to(1, { position: cc.v2(0, -22) })
                    .start();
            }
            else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 103) {
                for (var _t = 0, _u = this.node.parent.children; _t < _u.length; _t++) {
                    var child = _u[_t];
                    if (CocosZ_1.cocosz.gameMgr.isOpen == false) {
                        CocosZ_1.cocosz.gameMgr.isOpen = true;
                        var btn_5 = this.node.getChildByName("btn1");
                        cc.tween(btn_5)
                            .to(1, { position: cc.v2(0, -22) })
                            .start();
                        return;
                    }
                    if (child.name == "floor22") {
                        if (child.angle == 0) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(183, 283) })
                                .start();
                        }
                        else if (child.angle == 180) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(-282, 283) })
                                .start();
                        }
                    }
                }
                var btn = this.node.getChildByName("btn1");
                cc.tween(btn)
                    .to(1, { position: cc.v2(0, -22) })
                    .start();
            }
        }
    };
    // LIFE-CYCLE CALLBACKS:
    propMoveFloor18.prototype.onLoad = function () {
    };
    propMoveFloor18.prototype.start = function () {
    };
    propMoveFloor18.prototype.update = function (dt) {
    };
    propMoveFloor18 = __decorate([
        ccclass
    ], propMoveFloor18);
    return propMoveFloor18;
}(cc.Component));
exports.default = propMoveFloor18;

cc._RF.pop();