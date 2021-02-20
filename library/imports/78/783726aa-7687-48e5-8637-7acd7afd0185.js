"use strict";
cc._RF.push(module, '78372aqdodI5YY3es16/QGF', 'mapMask');
// script/Game/mapMask.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var mapMask = /** @class */ (function (_super) {
    __extends(mapMask, _super);
    function mapMask() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFirst = false;
        return _this;
        // update (dt) {}
    }
    mapMask.prototype.onEnable = function () {
        var component = this.node.getComponents(cc.PhysicsPolygonCollider);
        var list = [];
        for (var _i = 0, component_1 = component; _i < component_1.length; _i++) {
            var poly = component_1[_i];
            if (poly.points) {
                list.push(poly.points);
            }
        }
        cc.log("----------------------------地图启用", this.node.y, list);
        if (!this.isFirst) {
            this.isFirst = true;
            return;
        }
        ;
        cc.log("----------------------------地图启用2");
        var mask = this.node.getComponent(cc.Mask);
        cc.log(mask, this.node.parent, list);
        var graphics = mask._graphics;
        for (var _a = 0, list_1 = list; _a < list_1.length; _a++) {
            var point = list_1[_a];
            graphics.moveTo(point[0].x, point[0].y);
            for (var _b = 0, point_1 = point; _b < point_1.length; _b++) {
                var v2 = point_1[_b];
                graphics.lineTo(v2.x, v2.y);
            }
            graphics.fill();
        }
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    mapMask.prototype.start = function () {
    };
    mapMask = __decorate([
        ccclass
    ], mapMask);
    return mapMask;
}(cc.Component));
exports.default = mapMask;

cc._RF.pop();