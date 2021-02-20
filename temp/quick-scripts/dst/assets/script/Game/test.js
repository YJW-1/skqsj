
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/test.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFx0ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBNkM7QUFDN0Msa0RBQTZDO0FBRXZDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFFNUMsSUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLElBQU0sWUFBWSxHQUFHLENBQUMsQ0FBQztBQUN2QixJQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQztBQUU1QixJQUFJLGlCQUFpQixHQUFHLENBQUMsQ0FBQztBQUMxQixJQUFJLGVBQWUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7QUFDaEUsSUFBSSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztBQUN2QyxJQUFJLGdCQUFnQixHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQ3ZDLElBQUksUUFBUSxDQUFDO0FBRWI7SUFBa0Msd0JBQVk7SUFEOUM7UUFBQSxxRUErZ0JDO1FBNWdCRyxnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixnQ0FBZ0M7UUFFaEMsVUFBSSxHQUFnQixJQUFJLENBQUM7UUFDekIsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFDN0IsZUFBUyxHQUFnQixJQUFJLENBQUM7UUFLOUIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdyQixXQUFLLEdBQWdCLElBQUksQ0FBQztRQUUxQixXQUFLLEdBQWdCLElBQUksQ0FBQztRQUkxQixXQUFLLEdBQVksSUFBSSxDQUFDO1FBSXRCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsV0FBSyxHQUFRLElBQUksQ0FBQztRQUNsQixZQUFNLEdBQVEsSUFBSSxDQUFDO1FBR25CLFdBQUssR0FBUSxJQUFJLENBQUE7UUFDVCxjQUFRLEdBQWlCLEVBQUUsQ0FBQztRQUM1QixlQUFT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Q0FBQTtJQUVYLENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFHRCxxQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUNuQjtJQUNMLENBQUM7SUEzZ0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ1M7SUFXM0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzQ0FDRztJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO3VDQUNJO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7dUNBQ0k7SUFJMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt1Q0FDSTtJQUl0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUNLO0lBMUJOLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E4Z0J4QjtJQUFELFdBQUM7Q0E5Z0JELEFBOGdCQyxDQTlnQmlDLEVBQUUsQ0FBQyxTQUFTLEdBOGdCN0M7a0JBOWdCb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29jb3NaXCI7XHJcbmltcG9ydCBDb25zdGFudCBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvbnN0YW50XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuY29uc3QgRElHX1JBRElVUyA9IDQwO1xyXG5jb25zdCBESUdfRlJBR01FTlQgPSA4O1xyXG5jb25zdCBESUdfT1BUSU1JWkVfU0laRSA9IDE7XHJcblxyXG52YXIgZWFydGhSYWRpdXNNZXRlcnMgPSAxO1xyXG52YXIgbWV0ZXJzUGVyRGVncmVlID0gMi4wICogTWF0aC5QSSAqIGVhcnRoUmFkaXVzTWV0ZXJzIC8gMzYwLjA7XHJcbnZhciByYWRpYW5zUGVyRGVncmVlID0gTWF0aC5QSSAvIDE4MC4wO1xyXG52YXIgZGVncmVlc1BlclJhZGlhbiA9IDE4MC4wIC8gTWF0aC5QSTtcclxudmFyIHBvaW50QXJyO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzYW5kIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgbm9kZV9kaXJ0eTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gZ3JhcGhpY3M6IGNjLkdyYXBoaWNzID0gbnVsbDtcclxuXHJcbiAgICBlZGdlOiBjYy5HcmFwaGljcyA9IG51bGw7XHJcbiAgICBncmFwaGljczogY2MuR3JhcGhpY3MgPSBudWxsO1xyXG4gICAgVGdyYXBoaWNzOiBjYy5HcmFwaGljcyA9IG51bGw7XHJcblxyXG4gICAgbGluZVdpZHRoOiA2MDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTWFzaylcclxuICAgIG1hc2s6IGNjLk1hc2sgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5HcmFwaGljcylcclxuICAgIGxpbmUxOiBjYy5HcmFwaGljcyA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuR3JhcGhpY3MpXHJcbiAgICBsaW5lMjogY2MuR3JhcGhpY3MgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTWFzaylcclxuICAgIFRtYXNrOiBjYy5NYXNrID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0ZW46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHBvaW50OiBhbnkgPSBudWxsO1xyXG4gICAgcG9pbnQyOiBhbnkgPSBudWxsO1xyXG5cclxuXHJcbiAgICBldmVudDogYW55ID0gbnVsbFxyXG4gICAgcHJpdmF0ZSBfcmVnaW9uczogbnVtYmVyW11bXVtdID0gW107XHJcbiAgICBwcml2YXRlIF9yZWdpb25zMjogYW55ID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfcmVnaW9uc1RlbXA6IGFueSA9IFtdO1xyXG4gICAgaXNGcmlzdDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBpZDogYW55ID0gLTE7XHJcblxyXG4gICAgaXNEcmF3OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgdGltZTogbnVtYmVyID0gMDtcclxuXHJcblxyXG4gICAgaXNFbmJhbGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgbGlzdDogYW55ID0gbnVsbDtcclxuXHJcbiAgICBmcmVxdWVuY3k6IG51bWJlciA9IDA7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8q5bmz6Z2i5aSa6L655b2i6Z2i56evKi9cclxuICAgIFBsYW5hclBvbHlnb25BcmVhTWV0ZXJzMihwb2ludHMpIHtcclxuICAgICAgICB2YXIgYSA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgdmFyIGogPSAoaSArIDEpICUgcG9pbnRzLmxlbmd0aDtcclxuICAgICAgICAgICAgdmFyIHhpID0gcG9pbnRzW2ldWzBdICogbWV0ZXJzUGVyRGVncmVlICogTWF0aC5jb3MocG9pbnRzW2ldWzFdICogcmFkaWFuc1BlckRlZ3JlZSk7XHJcbiAgICAgICAgICAgIHZhciB5aSA9IHBvaW50c1tpXVsxXSAqIG1ldGVyc1BlckRlZ3JlZTtcclxuICAgICAgICAgICAgdmFyIHhqID0gcG9pbnRzW2pdWzBdICogbWV0ZXJzUGVyRGVncmVlICogTWF0aC5jb3MocG9pbnRzW2pdWzFdICogcmFkaWFuc1BlckRlZ3JlZSk7XHJcbiAgICAgICAgICAgIHZhciB5aiA9IHBvaW50c1tqXVsxXSAqIG1ldGVyc1BlckRlZ3JlZTtcclxuICAgICAgICAgICAgYSArPSB4aSAqIHlqIC0geGogKiB5aTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKGEgLyAyKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIGluaXQobGlzdCkge1xyXG4gICAgICAgIHRoaXMuVGdyYXBoaWNzLm1vdmVUbyhsaXN0WzBdWzBdLCBsaXN0WzBdWzFdKTtcclxuICAgICAgICBmb3IgKGxldCBpZHggb2YgbGlzdCkge1xyXG4gICAgICAgICAgICB0aGlzLlRncmFwaGljcy5saW5lVG8oaWR4WzBdLCBpZHhbMV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLlRncmFwaGljcy5saW5lVG8obGlzdFswXVswXSwgbGlzdFswXVsxXSk7XHJcbiAgICAgICAgdGhpcy5UZ3JhcGhpY3MuZmlsbCgpO1xyXG4gICAgICAgIC8vIHRoaXMuVGdyYXBoaWNzLnN0cm9rZSgpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5saW5lMS5tb3ZlVG8obGlzdFswXVswXSwgbGlzdFswXVsxXSk7XHJcbiAgICAgICAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgbGlzdC5sZW5ndGg7IGlkeCsrKSB7XHJcbiAgICAgICAgICAgIGlmIChpZHggPT0gMCkgY29udGludWU7XHJcbiAgICAgICAgICAgIHRoaXMubGluZTEubGluZVRvKGxpc3RbaWR4XVswXSwgbGlzdFtpZHhdWzFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5saW5lMS5saW5lVG8obGlzdFswXVswXSwgbGlzdFswXVsxXSk7XHJcbiAgICAgICAgdGhpcy5saW5lMS5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgLy8gaWYgKCF0aGlzLmlzRHJhdykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmlzRHJhdyA9IHRydWU7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXNldChsaXN0KSB7XHJcbiAgICAgICAgdGhpcy5wb2ludCA9IGxpc3Q7XHJcbiAgICAgICAgdGhpcy5wb2ludDIgPSBsaXN0O1xyXG4gICAgICAgIHRoaXMuX3JlZ2lvbnMgPSBbXHJcblxyXG4gICAgICAgIF07XHJcbiAgICAgICAgY2MubG9nKGxpc3QsIHRoaXMubm9kZS5wYXJlbnQueSlcclxuICAgICAgICBsZXQgbGlzdDMgPSBbXTtcclxuICAgICAgICBsZXQgbGlzdDQgPSBbXTtcclxuXHJcbiAgICAgICAgbGV0IG51bSA9IDE7XHJcbiAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gNTcgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxNiB8fCBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDQwIHx8XHJcbiAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMzQgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMDggfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA2MCB8fFxyXG4gICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDYxIHx8IGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gNjMgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA2NiB8fFxyXG4gICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDg2IHx8IGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gOTAgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA5MiB8fFxyXG4gICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDk2IHx8IGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gOTkgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMDMgfHxcclxuICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMTQgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMTkgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMjIgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMzAgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMzYgfHxcclxuICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMzQgfHwgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTM2ICYmIHRoaXMubm9kZS5wYXJlbnQueSAhPSAwKSB8fFxyXG4gICAgICAgICAgICAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMzkgJiYgdGhpcy5ub2RlLnBhcmVudC55ID09IDE0NDApKSBudW0rKztcclxuXHJcbiAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMzIpIG51bSArPSAyO1xyXG4gICAgICAgIGZvciAobGV0IGlkeCBvZiBsaXN0KSB7XHJcbiAgICAgICAgICAgIGxldCBsbDIgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaWR4MiBvZiBpZHgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsbCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIGxsLnB1c2goaWR4Mi54KTtcclxuICAgICAgICAgICAgICAgIGxsLnB1c2goaWR4Mi55KTtcclxuICAgICAgICAgICAgICAgIGxsMi5wdXNoKGxsKTsvLy0yODcuNzUxNiAgIC0yMzcuMjM3NFxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKG51bSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KFwiRHJhd01hc2tTYzNcIikuaW5pdChsbDIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0KGxsMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0My5wdXNoKGxsMilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBudW0tLTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3JlZ2lvbnMucHVzaChsbDIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBsaXN0IG9mIGxpc3QzKSB7XHJcbiAgICAgICAgICAgIGxldCBhID0gbGlzdC5tYXAoKHYsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHYyID0gY2MudjIodlswXSwgdlsxXSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB2MjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxpc3Q0LnB1c2goYSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9yZWdpb25zMiA9IGxpc3Q0O1xyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0t5rKZXCIpXHJcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IHRoaXMubWFzay5fZ3JhcGhpY3M7XHJcbiAgICAgICAgdGhpcy5UZ3JhcGhpY3MgPSB0aGlzLlRtYXNrLl9ncmFwaGljcztcclxuXHJcblxyXG4gICAgICAgIHRoaXMuVGdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuQkxVRTtcclxuICAgICAgICAvLyB0aGlzLlRncmFwaGljcy5saW5lV2lkdGggPSA1O1xyXG4gICAgICAgIHRoaXMuVGdyYXBoaWNzLmxpbmVDYXAgPSBjYy5HcmFwaGljcy5MaW5lQ2FwLlJPVU5EO1xyXG4gICAgICAgIHRoaXMuVGdyYXBoaWNzLmxpbmVKb2luID0gY2MuR3JhcGhpY3MuTGluZUpvaW4uUk9VTkQ7XHJcbiAgICAgICAgdGhpcy5UZ3JhcGhpY3MuY2xlYXIoKTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgMjA7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgYyA9IHRoaXMubm9kZV9kaXJ0eS5hZGRDb21wb25lbnQoY2MuUGh5c2ljc0NoYWluQ29sbGlkZXIpO1xyXG4gICAgICAgICAgICBjLmxvb3AgPSB0cnVlO1xyXG4gICAgICAgICAgICBjLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5zdHJva2VDb2xvciA9IGNjLkNvbG9yLkJMVUU7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5maWxsQ29sb3IgPSBjYy5Db2xvci5CTFVFO1xyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5saW5lQ2FwID0gY2MuR3JhcGhpY3MuTGluZUNhcC5ST1VORDtcclxuICAgICAgICB0aGlzLmdyYXBoaWNzLmxpbmVKb2luID0gY2MuR3JhcGhpY3MuTGluZUpvaW4uUk9VTkQ7XHJcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMubGluZTEubGluZVdpZHRoID0gNztcclxuICAgICAgICB0aGlzLmxpbmUyLmxpbmVXaWR0aCA9IDc7XHJcbiAgICAgICAgdGhpcy5saW5lMS5zdHJva2VDb2xvciA9IGNjLmNvbG9yKDExNywgMTAyLCA2MywgMjU1KTtcclxuICAgICAgICB0aGlzLmxpbmUyLnN0cm9rZUNvbG9yID0gY2MuY29sb3IoMTE3LCAxMDIsIDYzLCAyNTUpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmdyYXBoaWNzLmNsb3NlKCk7XHJcbiAgICAgICAgLy8gdGhpcy5UZ3JhcGhpY3MuY2xvc2UoKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5ub2RlX2RpcnR5LmNoaWxkcmVuWzBdLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLl90b3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZV9kaXJ0eS5jaGlsZHJlblswXS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLl90b3VjaE1vdmUsIHRoaXMpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmxpc3Rlbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5fdG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLmxpc3Rlbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLl90b3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMubGlzdGVuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fdG91Y2hFTm5kLCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLmxpc3Rlbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMuX3RvdWNoRU5uZCwgdGhpcyk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9nYW1lQmdcIikub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuX3RvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9nYW1lQmdcIikub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5fdG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2dhbWVCZ1wiKS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX3RvdWNoRU5uZCwgdGhpcyk7XHJcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9nYW1lQmdcIikub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLl90b3VjaEVObmQsIHRoaXMpO1xyXG4gICAgICAgIC8vIGNjLmZpbmQoXCJDYW52YXNcIikub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl90b3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIC8vIGNjLmZpbmQoXCJDYW52YXNcIikub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLl90b3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMubGlzdGVuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLl90b3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMubGlzdGVuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMuX3RvdWNoTW92ZSwgdGhpcyk7XHJcblxyXG4gICAgfVxyXG4gICAgX3RvdWNoRU5uZCh0b3VjaDogY2MuVG91Y2gpIHtcclxuICAgICAgICBpZiAodGhpcy5pZCA9PSB0b3VjaC5nZXRJRCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaWQgPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5mcmVxdWVuY3kgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIF90b3VjaE1vdmUodG91Y2g6IGNjLlRvdWNoKSB7XHJcbiAgICAgICAgLy8gY2MubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0t5YiS5rKZ5a2QLVwiLClcclxuICAgICAgICAvLyBjYy5sb2coXCItLS0tLS0tMTExMTExMTExMTExMVwiLCB0b3VjaC5nZXRJRCgpKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLea7keWKqOaymeWtkFwiKVxyXG4gICAgICAgIC8vIGlmICh0b3VjaC5nZXRJRCgpICE9IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5mcmVxdWVuY3krKztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZnJlcXVlbmN5ICUgMiAhPSAxKSB7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhcIi0tLS0tLS0tLS0tLS1hc2RmXCIpXHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pZCA9PSAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLmlkID0gdG91Y2guZ2V0SUQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlkICE9IHRvdWNoLmdldElEKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZWdpb25zID0gW1tdXTtcclxuXHJcbiAgICAgICAgbGV0IHBwID0gdG91Y2guZ2V0TG9jYXRpb24oKTtcclxuXHJcbiAgICAgICAgcHAueSArPSAxNjAwICogY29jb3N6LmdhbWVNZ3IudG91Y2hOdW07XHJcblxyXG4gICAgICAgIGNvbnN0IHBvcyA9IHRoaXMubm9kZV9kaXJ0eS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwcCk7XHJcbiAgICAgICAgbGV0IHJldCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IGxpc3Qgb2YgdGhpcy5fcmVnaW9uczIpIHtcclxuICAgICAgICAgICAgaWYgKGNjLkludGVyc2VjdGlvbi5wb2ludEluUG9seWdvbihwb3MsIGxpc3QpKSB7XHJcbiAgICAgICAgICAgICAgICByZXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmV0KSByZXR1cm47XHJcblxyXG5cclxuICAgICAgICAvLyBjb25zdCByZWdpb25zID0gW1tdXTtcclxuICAgICAgICAvLyBjb25zdCBwb3MgPSB0aGlzLmdyYXBoaWNzLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2guZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgY29uc3QgZGVsdGEgPSB0b3VjaC5nZXREZWx0YSgpO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gRElHX0ZSQUdNRU5UO1xyXG4gICAgICAgIGlmIChkZWx0YS5tYWcoKSA8IDUpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByID0gMiAqIE1hdGguUEkgKiBpbmRleCAvIGNvdW50O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeCA9IHBvcy54ICsgRElHX1JBRElVUyAqIE1hdGguY29zKHIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeSA9IHBvcy55ICsgRElHX1JBRElVUyAqIE1hdGguc2luKHIpO1xyXG4gICAgICAgICAgICAgICAgcmVnaW9uc1swXS5wdXNoKHRoaXMuX29wdGltaXplUG9pbnQoW3gsIHldKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFBvcyA9IHBvcy5zdWIoZGVsdGEpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY291bnQ7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHIgPSAyICogTWF0aC5QSSAqIGluZGV4IC8gY291bnQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmVjX3ggPSBESUdfUkFESVVTICogTWF0aC5jb3Mocik7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmVjX3kgPSBESUdfUkFESVVTICogTWF0aC5zaW4ocik7XHJcbiAgICAgICAgICAgICAgICBsZXQgeCwgeTtcclxuICAgICAgICAgICAgICAgIGlmIChkZWx0YS5kb3QoY2MudjIodmVjX3gsIHZlY195KSkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgeCA9IHBvcy54ICsgdmVjX3g7XHJcbiAgICAgICAgICAgICAgICAgICAgeSA9IHBvcy55ICsgdmVjX3k7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHggPSBzdGFydFBvcy54ICsgdmVjX3g7XHJcbiAgICAgICAgICAgICAgICAgICAgeSA9IHN0YXJ0UG9zLnkgKyB2ZWNfeTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlZ2lvbnNbMF0ucHVzaCh0aGlzLl9vcHRpbWl6ZVBvaW50KFt4LCB5XSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIGNvY29zei5hdWRpb01nci5wbGF5c2FuZEVmZmVjdCgpO1xyXG4gICAgICAgIC8vIGNvbnN0IGNvdW50ID0gRElHX0ZSQUdNRU5UO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgIC8vICAgICBjb25zdCByID0gMiAqIE1hdGguUEkgKiBpbmRleCAvIGNvdW50O1xyXG4gICAgICAgIC8vICAgICBjb25zdCB4ID0gcG9zLnggKyBESUdfUkFESVVTICogTWF0aC5jb3Mocik7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHkgPSBwb3MueSArIERJR19SQURJVVMgKiBNYXRoLnNpbihyKTtcclxuICAgICAgICAvLyAgICAgcmVnaW9uc1swXS5wdXNoKFt4LCB5XSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuXHJcbiAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0gUG9seUJvb2wuZGlmZmVyZW5jZSh7XHJcbiAgICAgICAgLy8gICAgIHJlZ2lvbnM6IHRoaXMuX3JlZ2lvbnMsXHJcbiAgICAgICAgLy8gICAgIGludmVydGVkOiBmYWxzZVxyXG4gICAgICAgIC8vIH0sIHtcclxuICAgICAgICAvLyAgICAgcmVnaW9ucyxcclxuICAgICAgICAvLyAgICAgaW52ZXJ0ZWQ6IGZhbHNlXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gY2MubG9nKHJlc3VsdC5yZWdpb25zLnRvU3RyaW5nKCkgPT0gdGhpcy5fcmVnaW9ucy50b1N0cmluZygpLCByZXN1bHQucmVnaW9ucywgdGhpcy5fcmVnaW9ucylcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IHNlZzEgPSBQb2x5Qm9vbC5zZWdtZW50cyh7XHJcbiAgICAgICAgICAgIHJlZ2lvbnM6IHRoaXMuX3JlZ2lvbnMsXHJcbiAgICAgICAgICAgIGludmVydGVkOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHNlZzIgPSBQb2x5Qm9vbC5zZWdtZW50cyh7XHJcbiAgICAgICAgICAgIHJlZ2lvbnMsXHJcbiAgICAgICAgICAgIGludmVydGVkOiBmYWxzZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGNvbWIgPSBQb2x5Qm9vbC5jb21iaW5lKHNlZzEsIHNlZzIpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFBvbHlCb29sLnBvbHlnb24oUG9seUJvb2wuc2VsZWN0RGlmZmVyZW5jZShjb21iKSk7XHJcbiAgICAgICAgLy8gY2MubG9nKHNlZzEsIHNlZzIsIGNvbWIsIHJlc3VsdCwgdGhpcy5fcmVnaW9ucylcclxuICAgICAgICBpZiAocmVzdWx0LnJlZ2lvbnMudG9TdHJpbmcoKSA9PSB0aGlzLl9yZWdpb25zLnRvU3RyaW5nKCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5fcmVnaW9ucyA9IHJlc3VsdC5yZWdpb25zO1xyXG4gICAgICAgIHRoaXMuaW5pdChyZWdpb25zWzBdKVxyXG5cclxuICAgICAgICBpZiAodGhpcy50aW1lIDw9IDApIHtcclxuICAgICAgICAgICAgbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwic2FuZEVmZmVjdFwiLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgICAgICBsZXQgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICBsZXQgcHAgPSBjYW52YXMuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2guZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24ocHApO1xyXG4gICAgICAgICAgICBjYW52YXMuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZSA9IDAuMjtcclxuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KENvbnN0YW50LkVfVElQU19ORVhUKVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmb3IgKGxldCBjaGlsZCBvZiBub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHRoaXMuX3JlZ2lvbnNUZW1wXHJcblxyXG4gICAgICAgIC8vIGNjLmxvZyh0aGlzLnBvaW50LCBcIi0tLS0tLS0tLXRoaXMucG9pbnRcIilcclxuICAgICAgICAvLyBsZXQgbGlzdDIgPSBbXTtcclxuICAgICAgICAvLyBjYy5sb2codGhpcy5fcmVnaW9ucyk7XHJcbiAgICAgICAgLy8gbGV0IGEgPSBbXTtcclxuICAgICAgICAvLyBmb3IgKGxldCBsaXN0IG9mIHRoaXMuX3JlZ2lvbnMpIHtcclxuICAgICAgICAvLyAgICAgbGV0IGIgPSB0aGlzLlBsYW5hclBvbHlnb25BcmVhTWV0ZXJzMihsaXN0KTtcclxuICAgICAgICAvLyAgICAgaWYgKGIgPiAwLjAwOSkge1xyXG4gICAgICAgIC8vICAgICAgICAgYS5wdXNoKGxpc3QpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhiLCBcIi0tLS0tLS0tLS0tLS0tLVBsYW5hciBQb2x5Z29uIEFyZWEgTWV0ZXJzMlwiKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuX3JlZ2lvbnMgPSBhO1xyXG4gICAgICAgIC8vIGNjLmxvZyh0aGlzLl9yZWdpb25zKTtcclxuICAgICAgICAvLyB0aGlzLl9vcHRpbWl6ZVJlZ2lvbnMoKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuZHJhdygpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgX3RvdWNoU3RhcnQodG91Y2g6IGNjLlRvdWNoKSB7XHJcbiAgICAgICAgdGhpcy5fdG91Y2hNb3ZlKHRvdWNoKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVnaW9ucyA9IFtbXV07XHJcbiAgICAgICAgY29uc3QgcG9zID0gdGhpcy5ub2RlX2RpcnR5LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRvdWNoLmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIGNvbnN0IGNvdW50ID0gRElHX0ZSQUdNRU5UO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCByID0gMiAqIE1hdGguUEkgKiBpbmRleCAvIGNvdW50O1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gcG9zLnggKyBESUdfUkFESVVTICogTWF0aC5jb3Mocik7XHJcbiAgICAgICAgICAgIGNvbnN0IHkgPSBwb3MueSArIERJR19SQURJVVMgKiBNYXRoLnNpbihyKTtcclxuICAgICAgICAgICAgcmVnaW9uc1swXS5wdXNoKFt4LCB5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGxldCBwb2ludHMgPSByZWdpb25zWzBdLm1hcCgodiwgaSkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zdCB2MiA9IGNjLnYyKHZbMF0sIHZbMV0pXHJcbiAgICAgICAgLy8gICAgIHJldHVybiB2MjtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICB0aGlzLmluaXQocmVnaW9uc1swXSlcclxuICAgICAgICAvLyBjYy5sb2cocG9pbnRzKVxyXG5cclxuICAgIH1cclxuICAgIGRyYXcoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0t5Z2Q5qCH6K6h566XXCIpXHJcbiAgICAgICAgLy8gdGhpcy5vdGhlckNhbWNvbnNvbGUubG9nKGVyYS5yZW5kZXIodGhpcy5vdGhlckNhbWVyYS5ub2RlKTtcclxuICAgICAgICBjb25zdCBlbmFibGVkX2NoYWluc19wb2ludHMgPSBbXVxyXG4gICAgICAgIGNvbnN0IGNoYWlucyA9IHRoaXMubm9kZV9kaXJ0eS5nZXRDb21wb25lbnRzKGNjLlBoeXNpY3NDaGFpbkNvbGxpZGVyKTtcclxuICAgICAgICBjaGFpbnMuZm9yRWFjaCgoYykgPT4ge1xyXG4gICAgICAgICAgICBjLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9yZWdpb25zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLl9yZWdpb25zW2luZGV4XTtcclxuICAgICAgICAgICAgbGV0IHBvbHkgPSBjaGFpbnNbaW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFwb2x5KSB7XHJcbiAgICAgICAgICAgICAgICBwb2x5ID0gdGhpcy5ub2RlX2RpcnR5LmFkZENvbXBvbmVudChjYy5QaHlzaWNzQ2hhaW5Db2xsaWRlcik7XHJcbiAgICAgICAgICAgICAgICBwb2x5Lmxvb3AgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBvbHkucG9pbnRzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgIHBvbHkucG9pbnRzID0gcG9zLm1hcCgodiwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdjIgPSBjYy52Mih2WzBdLCB2WzFdKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHYyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcG9seS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgZW5hYmxlZF9jaGFpbnNfcG9pbnRzW2luZGV4XSA9IHBvbHkucG9pbnRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5wb2ludCA9IGVuYWJsZWRfY2hhaW5zX3BvaW50c1xyXG4gICAgICAgIC8vY2MubG9nKGVuYWJsZWRfY2hhaW5zX3BvaW50cyxjaGFpbnMsXCItLS0tLS0tLS0tY2hhaW5zXCIpXHJcblxyXG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIodHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgZW5hYmxlZF9jaGFpbnNfcG9pbnRzX3NvcnQgPSBlbmFibGVkX2NoYWluc19wb2ludHMubWFwKChjdXJQb2x5LCBjdXJQb2x5X2kpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY291bnQgPSBlbmFibGVkX2NoYWluc19wb2ludHMucmVkdWNlKChwcmUsIG5leHRQb2x5LCBuZXh0UG9seV9pKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGN1clBvbHlfaSAhPSBuZXh0UG9seV9pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IGN1clBvbHkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcDAgPSBjdXJQb2x5W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNjLkludGVyc2VjdGlvbi5wb2ludEluUG9seWdvbihwMCwgbmV4dFBvbHkpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZSArIDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJlO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7IGN1clBvbHksIGNvdW50IH07XHJcbiAgICAgICAgfSkuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5jb3VudCAtIGIuY291bnQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBlbmFibGVkX2NoYWluc19wb2ludHNfc29ydC5mb3JFYWNoKCh7IGN1clBvbHksIGNvdW50IH0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ncmFwaGljcy5maWxsQ29sb3IgPSBjb3VudCAlIDIgPT09IDAgPyBjYy5Db2xvci5PUkFOR0UgOiBjYy5Db2xvci5CTEFDSztcclxuICAgICAgICAgICAgdGhpcy5fZHJhd1BvbHkodGhpcy5ncmFwaGljcywgY3VyUG9seSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYXdQb2x5KHRoaXMubGluZTIsIGN1clBvbHkpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmZpbGwoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubGluZTIuc3Ryb2tlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBpZiAodGhpcy5pc0ZyaXN0KSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaXNGcmlzdCA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICBlbmFibGVkX2NoYWluc19wb2ludHNfc29ydC5mb3JFYWNoKCh7IGN1clBvbHksIGNvdW50IH0pID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuZ3JhcGhpY3MuZmlsbENvbG9yID0gY291bnQgJSAyID09PSAwID8gY2MuQ29sb3IuT1JBTkdFIDogY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9kcmF3UG9seSh0aGlzLmdyYXBoaWNzLCBjdXJQb2x5KTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuZ3JhcGhpY3MuZmlsbCgpO1xyXG4gICAgICAgIC8vICAgICAgICAgY2MubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tZHJhd1wiKVxyXG4gICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgX2RyYXdQb2x5KGN0eDogY2MuR3JhcGhpY3MsIHBvbHkpIHtcclxuICAgICAgICBwb2x5LmZvckVhY2goKHBvcywgaSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaSA9PT0gMClcclxuICAgICAgICAgICAgICAgIGN0eC5tb3ZlVG8ocG9zLngsIHBvcy55KTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgY3R4LmxpbmVUbyhwb3MueCwgcG9zLnkpO1xyXG4gICAgICAgICAgICBjdHguY2xvc2UoKTtcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxuICAgIHByaXZhdGUgX2RyYXdQb2x5MihjdHg6IGNjLkdyYXBoaWNzLCBwb2x5KSB7XHJcbiAgICAgICAgcG9seS5mb3JFYWNoKChwb3MsIGkpID0+IHtcclxuICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5c2FuZEVmZmVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBfb3B0aW1pemVQb2ludChwb2ludCkge1xyXG4gICAgICAgIHJldHVybiBbTWF0aC5mbG9vcihwb2ludFswXSAqIERJR19PUFRJTUlaRV9TSVpFKSAvIERJR19PUFRJTUlaRV9TSVpFLCBNYXRoLmZsb29yKHBvaW50WzFdICogRElHX09QVElNSVpFX1NJWkUpIC8gRElHX09QVElNSVpFX1NJWkVdO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIF9vcHRpbWl6ZVJlZ2lvbnMoKSB7XHJcbiAgICAgICAgY29uc3QgcmVnaW9ucyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9yZWdpb25zLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLl9yZWdpb25zW2luZGV4XTtcclxuICAgICAgICAgICAgY29uc3QgbmV3UG9zID0gW107XHJcbiAgICAgICAgICAgIHBvcy5mb3JFYWNoKChwLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBwID0gdGhpcy5fb3B0aW1pemVQb2ludChwKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBfcHJlID0gdGhpcy5fb3B0aW1pemVQb2ludChwb3NbKGkgLSAxICsgcG9zLmxlbmd0aCkgJSBwb3MubGVuZ3RoXSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwX25leHQgPSB0aGlzLl9vcHRpbWl6ZVBvaW50KHBvc1soaSArIDEpICUgcG9zLmxlbmd0aF0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmVjMSA9IGNjLnYyKHBbMF0gLSBwX3ByZVswXSwgcFsxXSAtIHBfcHJlWzFdKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZlYzIgPSBjYy52MihwX25leHRbMF0gLSBwWzBdLCBwX25leHRbMV0gLSBwWzFdKTtcclxuICAgICAgICAgICAgICAgIGlmICh2ZWMxLm1hZygpICE9IDAgJiYgdmVjMi5tYWcoKSAhPSAwICYmIHZlYzEuY3Jvc3ModmVjMikgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1Bvcy5wdXNoKHApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChuZXdQb3MubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgcmVnaW9ucy5wdXNoKG5ld1Bvcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmVnaW9ucyA9IHJlZ2lvbnM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRW5iYWxlZCA9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzRW5iYWxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLlRncmFwaGljcy5jbGVhcigpO1xyXG4gICAgICAgICAgICB0aGlzLmdyYXBoaWNzLmNsZWFyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlc2V0KHRoaXMucG9pbnQyKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBtYXNrOiBjYy5NYXNrID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoY2MuTWFzayk7XHJcbiAgICAgICAgICAgIGxldCBncmFwaGljcyA9IG1hc2suX2dyYXBoaWNzO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgcG9pbnQgb2YgdGhpcy5wb2ludDIpIHtcclxuICAgICAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyhwb2ludFswXS54LCBwb2ludFswXS55KTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHYyIG9mIHBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKHYyLngsIHYyLnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgfSwgMC4xKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lIC09IGR0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=