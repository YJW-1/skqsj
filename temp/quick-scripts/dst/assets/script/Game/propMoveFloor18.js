
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/propMoveFloor18.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxwcm9wTW92ZUZsb29yMTgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUM3QyxrREFBNEM7QUFHdEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUE2QyxtQ0FBWTtJQUR6RDtRQUFBLHFFQWlTQztRQTlSRyxZQUFNLEdBQVksS0FBSyxDQUFDOztJQThSNUIsQ0FBQztJQTdSRyx3Q0FBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQy9CLElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFPO1FBQ3hCLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxjQUFHLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksY0FBRyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLGNBQUcsQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxjQUFHLENBQUMsS0FBSyxFQUFFO1lBQzNHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUNqQyxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEdBQUcsRUFBRTtnQkFDbEMsYUFBYTtnQkFDYixLQUFrQixVQUF5QixFQUF6QixLQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBekIsY0FBeUIsRUFBekIsSUFBeUIsRUFBRTtvQkFBeEMsSUFBSSxLQUFLLFNBQUE7b0JBQ1YsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLFNBQVMsRUFBRTt3QkFDekIsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTs0QkFDbEIsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENB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QUFPO09BQ2EsZUFBZSxDQWdTbkM7SUFBRCxzQkFBQztDQWhTRCxBQWdTQyxDQWhTNEMsRUFBRSxDQUFDLFNBQVMsR0FnU3hEO2tCQWhTb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29jb3NaXCI7XHJcbmltcG9ydCB7IHRhZyB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uc3RhbnRcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJvcE1vdmVGbG9vcjE4IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBpc1RydWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUcnVlKSByZXR1cm47XHJcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSB0YWcudGhvcm4gfHwgb3RoZXIudGFnID09IHRhZy5iYWxsb29uIHx8IG90aGVyLnRhZyA9PSB0YWcuYmFsbG9vbjIgfHwgb3RoZXIudGFnID09IHRhZy5zdG9uZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzVHJ1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLmxvZyhjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkKVxyXG4gICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMDgpIHtcclxuICAgICAgICAgICAgICAgIC8vIGxldCBmbG9vcjFcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubm9kZS5wYXJlbnQuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQubmFtZSA9PSBcImZsb29yMTlcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQuYW5nbGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hpbGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IGNjLnYyKDEyOC44LCAtMTczLjUpIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGlsZC5hbmdsZSA9PSAxODApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiBjYy52MigtMzM5LCAyNzEuNSkgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuMVwiKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oYnRuKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiBjYy52MigwLCAtMjIpIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWxzZSBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA1OCkge1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGZsb29yMVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5ub2RlLnBhcmVudC5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC5uYW1lID09IFwiZmxvb3IxOVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC5hbmdsZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihjaGlsZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogY2MudjIoMzM3LCAyMTMuNSkgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkLmFuZ2xlID09IDE4MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hpbGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IGNjLnYyKC0zMzcsIDIxMy41KSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bjFcIilcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGJ0bilcclxuICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogY2MudjIoMCwgLTIyKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA2NyB8fCBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDEzOCkge1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGZsb29yMVxyXG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bjFcIilcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGJ0bilcclxuICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogY2MudjIoMCwgLTIyKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTM4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5ub2RlLnBhcmVudC5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29jb3N6LmdhbWVNZ3IuaXNPcGVuID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pc09wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZC5uYW1lID09IFwiZmxvb3IxOVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQuYW5nbGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogY2MudjIoMjE4LCAtMTEzKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQuYW5nbGUgPT0gMTgwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hpbGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiBjYy52MigtMjE3LCAtMTEzKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubm9kZS5wYXJlbnQuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29jb3N6LmdhbWVNZ3IuaXNPcGVuID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvY29zei5nYW1lTWdyLmlzT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5hbWUgPT0gXCJmbG9vcjE5XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmFuZ2xlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiBjYy52MigyNzYsIDI2OSkgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkLmFuZ2xlID09IDE4MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hpbGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IGNjLnYyKC0yODMsIDI2OCkgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDg2KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLm5vZGUucGFyZW50LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5hbWUgPT0gXCJmbG9vcjE5XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hpbGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogY2MudjIoLTMxOCwgMjgzKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bjFcIilcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGJ0bilcclxuICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogY2MudjIoMCwgLTIyKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA5MSkge1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGZsb29yMVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5ub2RlLnBhcmVudC5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2Nvc3ouZ2FtZU1nci5pc09wZW4gPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3IuaXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bjFcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oYnRuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IGNjLnYyKDAsIC0yMikgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5hbWUgPT0gXCJmbG9vcjE5XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmFuZ2xlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiBjYy52MigyNjksIDI4NC41KSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQuYW5nbGUgPT0gMTgwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihjaGlsZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogY2MudjIoLTI3NiwgMjgxLjUpIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuMVwiKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oYnRuKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiBjYy52MigwLCAtMjIpIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBlbHNlIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDEzMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGZsb29yMVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5ub2RlLnBhcmVudC5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2Nvc3ouZ2FtZU1nci5pc09wZW4gPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3IuaXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bjFcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oYnRuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IGNjLnYyKDAsIC0yMikgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5hbWUgPT0gXCJmbG9vcjE5XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmFuZ2xlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiBjYy52MigyMTQsIC00NDApIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGlsZC5hbmdsZSA9PSAxODApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiBjYy52MigtMjA4LCAtNDQzKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bjFcIilcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGJ0bilcclxuICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogY2MudjIoMCwgLTIyKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA5Nykge1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGZsb29yMVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5ub2RlLnBhcmVudC5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2Nvc3ouZ2FtZU1nci5pc09wZW4gPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3IuaXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bjFcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oYnRuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IGNjLnYyKDAsIC0yMikgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5hbWUgPT0gXCJmbG9vcjE5XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmFuZ2xlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiBjYy52MigyNjksIDI4NC41KSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQuYW5nbGUgPT0gMTgwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihjaGlsZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogY2MudjIoMjAwLCAyNjYpIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuMVwiKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oYnRuKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiBjYy52MigwLCAtMjIpIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDk5KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgZmxvb3IxXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLm5vZGUucGFyZW50LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvY29zei5nYW1lTWdyLmlzT3BlbiA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pc09wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYnRuID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuMVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbihidG4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogY2MudjIoMCwgLTIyKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQubmFtZSA9PSBcImZsb29yMTlcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQuYW5nbGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hpbGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IGNjLnYyKC0xMDQsIDI5NSkgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkLmFuZ2xlID09IDE4MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hpbGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IGNjLnYyKDU1LCAyOTUpIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuMVwiKVxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oYnRuKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiBjYy52MigwLCAtMjIpIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDEwMykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5ub2RlLnBhcmVudC5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2Nvc3ouZ2FtZU1nci5pc09wZW4gPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3IuaXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bjFcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oYnRuKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IGNjLnYyKDAsIC0yMikgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5hbWUgPT0gXCJmbG9vcjIyXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLmFuZ2xlID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGNoaWxkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygxLCB7IHBvc2l0aW9uOiBjYy52MigxODMsIDI4MykgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkLmFuZ2xlID09IDE4MCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oY2hpbGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDEsIHsgcG9zaXRpb246IGNjLnYyKC0yODIsIDI4MykgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bjFcIilcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGJ0bilcclxuICAgICAgICAgICAgICAgICAgICAudG8oMSwgeyBwb3NpdGlvbjogY2MudjIoMCwgLTIyKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGFydCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICB9XHJcbn1cclxuIl19