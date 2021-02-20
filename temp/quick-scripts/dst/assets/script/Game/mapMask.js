
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/mapMask.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxtYXBNYXNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXFDLDJCQUFZO0lBRGpEO1FBQUEscUVBMkNDO1FBekNHLGFBQU8sR0FBRyxLQUFLLENBQUM7O1FBd0NoQixpQkFBaUI7SUFDckIsQ0FBQztJQXZDRywwQkFBUSxHQUFSO1FBQ0ksSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbkUsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsS0FBaUIsVUFBUyxFQUFULHVCQUFTLEVBQVQsdUJBQVMsRUFBVCxJQUFTLEVBQUU7WUFBdkIsSUFBSSxJQUFJLGtCQUFBO1lBQ1QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBQ3pCO1NBQ0o7UUFFRCxFQUFFLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxFQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFBO1FBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsT0FBTTtTQUNUO1FBQUEsQ0FBQztRQUVGLEVBQUUsQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQTtRQUMzQyxJQUFJLElBQUksR0FBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLENBQUE7UUFDbEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUc5QixLQUFrQixVQUFJLEVBQUosYUFBSSxFQUFKLGtCQUFJLEVBQUosSUFBSSxFQUFFO1lBQW5CLElBQUksS0FBSyxhQUFBO1lBQ1YsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxLQUFlLFVBQUssRUFBTCxlQUFLLEVBQUwsbUJBQUssRUFBTCxJQUFLLEVBQUU7Z0JBQWpCLElBQUksRUFBRSxjQUFBO2dCQUNQLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDL0I7WUFDRCxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkI7SUFDTCxDQUFDO0lBR0Qsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix1QkFBSyxHQUFMO0lBQ0EsQ0FBQztJQXZDZ0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTBDM0I7SUFBRCxjQUFDO0NBMUNELEFBMENDLENBMUNvQyxFQUFFLENBQUMsU0FBUyxHQTBDaEQ7a0JBMUNvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtYXBNYXNrIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIGlzRmlyc3QgPSBmYWxzZTtcclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudHMoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XHJcbiAgICAgICAgbGV0IGxpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBwb2x5IG9mIGNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICBpZiAocG9seS5wb2ludHMpIHtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaChwb2x5LnBvaW50cylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2MubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWcsOWbvuWQr+eUqFwiLHRoaXMubm9kZS55LGxpc3QpXHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY2MubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWcsOWbvuWQr+eUqDJcIilcclxuICAgICAgICBsZXQgbWFzazogY2MuTWFzayA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTWFzayk7XHJcbiAgICAgICAgY2MubG9nKG1hc2ssdGhpcy5ub2RlLnBhcmVudCxsaXN0KVxyXG4gICAgICAgIGxldCBncmFwaGljcyA9IG1hc2suX2dyYXBoaWNzO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBmb3IgKGxldCBwb2ludCBvZiBsaXN0KSB7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyhwb2ludFswXS54LCBwb2ludFswXS55KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgdjIgb2YgcG9pbnQpIHtcclxuICAgICAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyh2Mi54LCB2Mi55KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBncmFwaGljcy5maWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==