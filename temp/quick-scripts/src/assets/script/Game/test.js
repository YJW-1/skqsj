"use strict";
cc._RF.push(module, '91a0fv8OhtH1JMoNB0uJWoQ', 'test');
// script/Game/test.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DIG_RADIUS = 40;
var DIG_FRAGMENT = 8;
var DIG_OPTIMIZE_SIZE = 1;
var earthRadiusMeters = 1;
var metersPerDegree = 2.0 * Math.PI * earthRadiusMeters / 360.0;
var radiansPerDegree = Math.PI / 180.0;
var degreesPerRadian = 180.0 / Math.PI;
var pointArr;
var sand = /** @class */ (function (_super) {
    __extends(sand, _super);
    function sand() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.node_dirty = null;
        // graphics: cc.Graphics = null;
        _this.edge = null;
        _this.graphics = null;
        _this.Tgraphics = null;
        _this.mask = null;
        _this.line1 = null;
        _this.line2 = null;
        _this.Tmask = null;
        _this.listen = null;
        _this.point = null;
        _this.point2 = null;
        _this.event = null;
        _this._regions = [];
        _this._regions2 = [];
        _this._regionsTemp = [];
        _this.isFrist = true;
        _this.id = -1;
        _this.isDraw = false;
        _this.time = 0;
        _this.isEnbaled = false;
        _this.list = null;
        _this.frequency = 0;
        return _this;
    }
    /*平面多边形面积*/
    sand.prototype.PlanarPolygonAreaMeters2 = function (points) {
        var a = 0;
        for (var i = 0; i < points.length; ++i) {
            var j = (i + 1) % points.length;
            var xi = points[i][0] * metersPerDegree * Math.cos(points[i][1] * radiansPerDegree);
            var yi = points[i][1] * metersPerDegree;
            var xj = points[j][0] * metersPerDegree * Math.cos(points[j][1] * radiansPerDegree);
            var yj = points[j][1] * metersPerDegree;
            a += xi * yj - xj * yi;
        }
        return Math.abs(a / 2);
    };
    sand.prototype.init = function (list) {
        this.Tgraphics.moveTo(list[0][0], list[0][1]);
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var idx = list_1[_i];
            this.Tgraphics.lineTo(idx[0], idx[1]);
        }
        this.Tgraphics.lineTo(list[0][0], list[0][1]);
        this.Tgraphics.fill();
        // this.Tgraphics.stroke();
        this.line1.moveTo(list[0][0], list[0][1]);
        for (var idx = 0; idx < list.length; idx++) {
            if (idx == 0)
                continue;
            this.line1.lineTo(list[idx][0], list[idx][1]);
        }
        this.line1.lineTo(list[0][0], list[0][1]);
        this.line1.stroke();
        // if (!this.isDraw) {
        //     this.isDraw = true;
        // }
    };
    sand.prototype.reset = function (list) {
        this.point = list;
        this.point2 = list;
        this._regions = [];
        cc.log(list, this.node.parent.y);
        var list3 = [];
        var list4 = [];
        var num = 1;
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 57 || CocosZ_1.cocosz.dataMgr.CurLevelId == 16 || CocosZ_1.cocosz.dataMgr.CurLevelId == 40 ||
            CocosZ_1.cocosz.dataMgr.CurLevelId == 34 || CocosZ_1.cocosz.dataMgr.CurLevelId == 108 || CocosZ_1.cocosz.dataMgr.CurLevelId == 60 ||
            CocosZ_1.cocosz.dataMgr.CurLevelId == 61 || CocosZ_1.cocosz.dataMgr.CurLevelId == 63 || CocosZ_1.cocosz.dataMgr.CurLevelId == 66 ||
            CocosZ_1.cocosz.dataMgr.CurLevelId == 86 || CocosZ_1.cocosz.dataMgr.CurLevelId == 90 || CocosZ_1.cocosz.dataMgr.CurLevelId == 92 ||
            CocosZ_1.cocosz.dataMgr.CurLevelId == 96 || CocosZ_1.cocosz.dataMgr.CurLevelId == 99 || CocosZ_1.cocosz.dataMgr.CurLevelId == 103 ||
            CocosZ_1.cocosz.dataMgr.CurLevelId == 114 || CocosZ_1.cocosz.dataMgr.CurLevelId == 119 || CocosZ_1.cocosz.dataMgr.CurLevelId == 122 || CocosZ_1.cocosz.dataMgr.CurLevelId == 130 || CocosZ_1.cocosz.dataMgr.CurLevelId == 136 ||
            CocosZ_1.cocosz.dataMgr.CurLevelId == 134 || (CocosZ_1.cocosz.dataMgr.CurLevelId == 136 && this.node.parent.y != 0) ||
            (CocosZ_1.cocosz.dataMgr.CurLevelId == 139 && this.node.parent.y == 1440))
            num++;
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 32)
            num += 2;
        for (var _i = 0, list_2 = list; _i < list_2.length; _i++) {
            var idx = list_2[_i];
            var ll2 = [];
            for (var _a = 0, idx_1 = idx; _a < idx_1.length; _a++) {
                var idx2 = idx_1[_a];
                var ll = [];
                ll.push(idx2.x);
                ll.push(idx2.y);
                ll2.push(ll); //-287.7516   -237.2374
            }
            if (num <= 0) {
                // this.node.getComponent("DrawMaskSc3").init(ll2);
                this.init(ll2);
            }
            else {
                list3.push(ll2);
            }
            num--;
            this._regions.push(ll2);
        }
        for (var _b = 0, list3_1 = list3; _b < list3_1.length; _b++) {
            var list_3 = list3_1[_b];
            var a = list_3.map(function (v, i) {
                var v2 = cc.v2(v[0], v[1]);
                return v2;
            });
            list4.push(a);
        }
        this._regions2 = list4;
    };
    sand.prototype.onLoad = function () {
        console.log("---------------------沙");
        this.graphics = this.mask._graphics;
        this.Tgraphics = this.Tmask._graphics;
        this.Tgraphics.strokeColor = cc.Color.BLUE;
        // this.Tgraphics.lineWidth = 5;
        this.Tgraphics.lineCap = cc.Graphics.LineCap.ROUND;
        this.Tgraphics.lineJoin = cc.Graphics.LineJoin.ROUND;
        this.Tgraphics.clear();
        for (var index = 0; index < 20; index++) {
            var c = this.node_dirty.addComponent(cc.PhysicsChainCollider);
            c.loop = true;
            c.enabled = false;
        }
        this.graphics.strokeColor = cc.Color.BLUE;
        this.graphics.fillColor = cc.Color.BLUE;
        this.graphics.lineWidth = this.lineWidth;
        this.graphics.lineCap = cc.Graphics.LineCap.ROUND;
        this.graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
        this.graphics.clear();
        this.line1.lineWidth = 7;
        this.line2.lineWidth = 7;
        this.line1.strokeColor = cc.color(117, 102, 63, 255);
        this.line2.strokeColor = cc.color(117, 102, 63, 255);
        // this.graphics.close();
        // this.Tgraphics.close();
        // this.node_dirty.children[0].on(cc.Node.EventType.TOUCH_START, this._touchMove, this);
        // this.node_dirty.children[0].on(cc.Node.EventType.TOUCH_MOVE, this._touchMove, this);
        // this.listen.on(cc.Node.EventType.TOUCH_START, this._touchMove, this);
        // this.listen.on(cc.Node.EventType.TOUCH_MOVE, this._touchMove, this);
        // this.listen.on(cc.Node.EventType.TOUCH_END, this._touchENnd, this);
        // this.listen.on(cc.Node.EventType.TOUCH_CANCEL, this._touchENnd, this);
        cc.find("Canvas/gameBg").on(cc.Node.EventType.TOUCH_START, this._touchMove, this);
        cc.find("Canvas/gameBg").on(cc.Node.EventType.TOUCH_MOVE, this._touchMove, this);
        cc.find("Canvas/gameBg").on(cc.Node.EventType.TOUCH_END, this._touchENnd, this);
        cc.find("Canvas/gameBg").on(cc.Node.EventType.TOUCH_CANCEL, this._touchENnd, this);
        // cc.find("Canvas").on(cc.Node.EventType.TOUCH_END, this._touchMove, this);
        // cc.find("Canvas").on(cc.Node.EventType.TOUCH_CANCEL, this._touchMove, this);
        // this.listen.on(cc.Node.EventType.TOUCH_START, this._touchMove, this);
        // this.listen.on(cc.Node.EventType.TOUCH_MOVE, this._touchMove, this);
    };
    sand.prototype._touchENnd = function (touch) {
        if (this.id == touch.getID()) {
            this.id = -1;
            this.frequency = 0;
        }
    };
    sand.prototype._touchMove = function (touch) {
        // cc.log("------------------划沙子-",)
        // cc.log("-------1111111111111", touch.getID());
        // console.log("---------------------滑动沙子")
        // if (touch.getID() != 0) return;
        this.frequency++;
        if (this.frequency % 2 != 1) {
            // cc.log("-------------asdf")
            return;
        }
        if (this.id == -1) {
            this.id = touch.getID();
        }
        else {
            if (this.id != touch.getID()) {
                return;
            }
        }
        var regions = [[]];
        var pp = touch.getLocation();
        pp.y += 1600 * CocosZ_1.cocosz.gameMgr.touchNum;
        var pos = this.node_dirty.convertToNodeSpaceAR(pp);
        var ret = false;
        for (var _i = 0, _a = this._regions2; _i < _a.length; _i++) {
            var list = _a[_i];
            if (cc.Intersection.pointInPolygon(pos, list)) {
                ret = true;
            }
        }
        if (!ret)
            return;
        // const regions = [[]];
        // const pos = this.graphics.node.convertToNodeSpaceAR(touch.getLocation());
        var delta = touch.getDelta();
        var count = DIG_FRAGMENT;
        if (delta.mag() < 5) {
            for (var index = 0; index < count; index++) {
                var r = 2 * Math.PI * index / count;
                var x = pos.x + DIG_RADIUS * Math.cos(r);
                var y = pos.y + DIG_RADIUS * Math.sin(r);
                regions[0].push(this._optimizePoint([x, y]));
            }
        }
        else {
            var startPos = pos.sub(delta);
            for (var index = 0; index < count; index++) {
                var r = 2 * Math.PI * index / count;
                var vec_x = DIG_RADIUS * Math.cos(r);
                var vec_y = DIG_RADIUS * Math.sin(r);
                var x = void 0, y = void 0;
                if (delta.dot(cc.v2(vec_x, vec_y)) > 0) {
                    x = pos.x + vec_x;
                    y = pos.y + vec_y;
                }
                else {
                    x = startPos.x + vec_x;
                    y = startPos.y + vec_y;
                }
                regions[0].push(this._optimizePoint([x, y]));
            }
        }
        // cocosz.audioMgr.playsandEffect();
        // const count = DIG_FRAGMENT;
        // for (let index = 0; index < count; index++) {
        //     const r = 2 * Math.PI * index / count;
        //     const x = pos.x + DIG_RADIUS * Math.cos(r);
        //     const y = pos.y + DIG_RADIUS * Math.sin(r);
        //     regions[0].push([x, y]);
        // }
        // const result = PolyBool.difference({
        //     regions: this._regions,
        //     inverted: false
        // }, {
        //     regions,
        //     inverted: false
        // });
        // cc.log(result.regions.toString() == this._regions.toString(), result.regions, this._regions)
        var seg1 = PolyBool.segments({
            regions: this._regions,
            inverted: false
        });
        var seg2 = PolyBool.segments({
            regions: regions,
            inverted: false
        });
        var comb = PolyBool.combine(seg1, seg2);
        var result = PolyBool.polygon(PolyBool.selectDifference(comb));
        // cc.log(seg1, seg2, comb, result, this._regions)
        if (result.regions.toString() == this._regions.toString())
            return;
        this._regions = result.regions;
        this.init(regions[0]);
        if (this.time <= 0) {
            var prefab = CocosZ_1.cocosz.resMgr.getRes("sandEffect", cc.Prefab);
            var canvas = cc.find("Canvas");
            var node = cc.instantiate(prefab);
            var pp_1 = canvas.convertToNodeSpaceAR(touch.getLocation());
            node.setPosition(pp_1);
            canvas.addChild(node);
            this.time = 0.2;
            cc.game.emit(Constant_1.default.E_TIPS_NEXT);
        }
        // for (let child of node.children) {
        // }
        // this._regionsTemp
        // cc.log(this.point, "---------this.point")
        // let list2 = [];
        // cc.log(this._regions);
        // let a = [];
        // for (let list of this._regions) {
        //     let b = this.PlanarPolygonAreaMeters2(list);
        //     if (b > 0.009) {
        //         a.push(list);
        //     }
        //     cc.log(b, "---------------Planar Polygon Area Meters2");
        // }
        // this._regions = a;
        // cc.log(this._regions);
        // this._optimizeRegions();
        this.draw();
    };
    sand.prototype._touchStart = function (touch) {
        this._touchMove(touch);
        var regions = [[]];
        var pos = this.node_dirty.convertToNodeSpaceAR(touch.getLocation());
        var count = DIG_FRAGMENT;
        for (var index = 0; index < count; index++) {
            var r = 2 * Math.PI * index / count;
            var x = pos.x + DIG_RADIUS * Math.cos(r);
            var y = pos.y + DIG_RADIUS * Math.sin(r);
            regions[0].push([x, y]);
        }
        // let points = regions[0].map((v, i) => {
        //     const v2 = cc.v2(v[0], v[1])
        //     return v2;
        // });
        this.init(regions[0]);
        // cc.log(points)
    };
    sand.prototype.draw = function () {
        var _this = this;
        // console.log("----------------------坐标计算")
        // this.otherCamconsole.log(era.render(this.otherCamera.node);
        var enabled_chains_points = [];
        var chains = this.node_dirty.getComponents(cc.PhysicsChainCollider);
        chains.forEach(function (c) {
            c.enabled = false;
        });
        for (var index = 0; index < this._regions.length; index++) {
            var pos = this._regions[index];
            var poly = chains[index];
            if (!poly) {
                poly = this.node_dirty.addComponent(cc.PhysicsChainCollider);
                poly.loop = true;
            }
            poly.points.length = 0;
            poly.points = pos.map(function (v, i) {
                var v2 = cc.v2(v[0], v[1]);
                return v2;
            });
            poly.enabled = true;
            enabled_chains_points[index] = poly.points;
        }
        // this.point = enabled_chains_points
        //cc.log(enabled_chains_points,chains,"----------chains")
        this.graphics.clear(true);
        var enabled_chains_points_sort = enabled_chains_points.map(function (curPoly, curPoly_i) {
            var count = enabled_chains_points.reduce(function (pre, nextPoly, nextPoly_i) {
                if ((curPoly_i != nextPoly_i)) {
                    var length = curPoly.length;
                    for (var i = 0; i < length; ++i) {
                        var p0 = curPoly[i];
                        if (!cc.Intersection.pointInPolygon(p0, nextPoly))
                            return pre;
                    }
                    return pre + 1;
                }
                return pre;
            }, 0);
            return { curPoly: curPoly, count: count };
        }).sort(function (a, b) {
            return a.count - b.count;
        });
        enabled_chains_points_sort.forEach(function (_a) {
            var curPoly = _a.curPoly, count = _a.count;
            _this.graphics.fillColor = count % 2 === 0 ? cc.Color.ORANGE : cc.Color.BLACK;
            _this._drawPoly(_this.graphics, curPoly);
            _this._drawPoly(_this.line2, curPoly);
            _this.graphics.fill();
            _this.line2.stroke();
        });
        // if (this.isFrist) {
        //     this.isFrist = false;
        //     enabled_chains_points_sort.forEach(({ curPoly, count }) => {
        //         this.graphics.fillColor = count % 2 === 0 ? cc.Color.ORANGE : cc.color(255, 255, 255, 0);
        //         this._drawPoly(this.graphics, curPoly);
        //         this.graphics.fill();
        //         cc.log("---------------------draw")
        //     })
        // }
    };
    sand.prototype._drawPoly = function (ctx, poly) {
        poly.forEach(function (pos, i) {
            if (i === 0)
                ctx.moveTo(pos.x, pos.y);
            else
                ctx.lineTo(pos.x, pos.y);
            ctx.close();
        });
    };
    ;
    sand.prototype._drawPoly2 = function (ctx, poly) {
        poly.forEach(function (pos, i) {
            if (i === 0) {
                CocosZ_1.cocosz.audioMgr.playsandEffect();
            }
        });
    };
    ;
    sand.prototype._optimizePoint = function (point) {
        return [Math.floor(point[0] * DIG_OPTIMIZE_SIZE) / DIG_OPTIMIZE_SIZE, Math.floor(point[1] * DIG_OPTIMIZE_SIZE) / DIG_OPTIMIZE_SIZE];
    };
    sand.prototype._optimizeRegions = function () {
        var _this = this;
        var regions = [];
        var _loop_1 = function (index) {
            var pos = this_1._regions[index];
            var newPos = [];
            pos.forEach(function (p, i) {
                p = _this._optimizePoint(p);
                var p_pre = _this._optimizePoint(pos[(i - 1 + pos.length) % pos.length]);
                var p_next = _this._optimizePoint(pos[(i + 1) % pos.length]);
                var vec1 = cc.v2(p[0] - p_pre[0], p[1] - p_pre[1]);
                var vec2 = cc.v2(p_next[0] - p[0], p_next[1] - p[1]);
                if (vec1.mag() != 0 && vec2.mag() != 0 && vec1.cross(vec2) != 0) {
                    newPos.push(p);
                }
            });
            if (newPos.length > 2) {
                regions.push(newPos);
            }
        };
        var this_1 = this;
        for (var index = 0; index < this._regions.length; index++) {
            _loop_1(index);
        }
        this._regions = regions;
    };
    sand.prototype.onEnable = function () {
        var _this = this;
        if (this.isEnbaled == false) {
            this.isEnbaled = true;
            return;
        }
        this.scheduleOnce(function () {
            _this.Tgraphics.clear();
            _this.graphics.clear();
            _this.reset(_this.point2);
            var mask = _this.node.parent.getComponent(cc.Mask);
            var graphics = mask._graphics;
            for (var _i = 0, _a = _this.point2; _i < _a.length; _i++) {
                var point = _a[_i];
                graphics.moveTo(point[0].x, point[0].y);
                for (var _b = 0, point_1 = point; _b < point_1.length; _b++) {
                    var v2 = point_1[_b];
                    graphics.lineTo(v2.x, v2.y);
                }
                graphics.fill();
            }
            _this.draw();
        }, 0.1);
    };
    sand.prototype.start = function () {
        this.draw();
    };
    sand.prototype.update = function (dt) {
        if (this.time > 0) {
            this.time -= dt;
        }
    };
    __decorate([
        property(cc.Node)
    ], sand.prototype, "node_dirty", void 0);
    __decorate([
        property(cc.Mask)
    ], sand.prototype, "mask", void 0);
    __decorate([
        property(cc.Graphics)
    ], sand.prototype, "line1", void 0);
    __decorate([
        property(cc.Graphics)
    ], sand.prototype, "line2", void 0);
    __decorate([
        property(cc.Mask)
    ], sand.prototype, "Tmask", void 0);
    __decorate([
        property(cc.Node)
    ], sand.prototype, "listen", void 0);
    sand = __decorate([
        ccclass
    ], sand);
    return sand;
}(cc.Component));
exports.default = sand;

cc._RF.pop();