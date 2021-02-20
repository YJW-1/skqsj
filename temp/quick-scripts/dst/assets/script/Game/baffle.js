
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/baffle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3be3eoSA9pL/ZgW1w+Y4hTb', 'baffle');
// script/Game/baffle.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var baffle = /** @class */ (function (_super) {
    __extends(baffle, _super);
    function baffle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    baffle.prototype.onBeginContact = function (contact, self, other) {
        // if (other.tag == tag.thorn || other.tag == tag.stone || other.tag == tag.honeybee ||
        //     other.tag == tag.carton || other.tag == tag.rain || other.tag == tag.stone3 ||
        //     other.tag == tag.wooldenBox || other.tag == tag.wooldenBox2 ||other.tag == tag.balloon2||other.tag == tag.rope ||
        //     other.tag == 777 || other.tag == 0) {
        //     contact.disabled = true;
        // }
        if (other.tag != Constant_1.tag.balloon) {
            contact.disabled = true;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    baffle.prototype.onDestroy = function () {
        cc.game.targetOff(this);
    };
    // onLoad () {}
    baffle.prototype.start = function () {
        var _this = this;
        if (this.node.name == "baffle2")
            return;
        cc.game.on(Constant_1.default.E_ROLE_MOVE, function () {
            var role = _this.node.parent.getChildByName("role").getChildByName("body");
            // let pos2 = role.convertToWorldSpaceAR(role.getPosition());
            // let pos = role.parent.convertToWorldSpaceAR(this.node.getPosition())
            // cc.log(Math.abs(pos.y - this.node.y), "this.node.y:" + this.node.y, "pos.y:" + pos.y, "pos2.y:" + pos2.y, "role.y:" + role.y, "--------Math.abs(role.getChildByName().y - this.node.y)")
            cc.log((role.y + role.parent.y) - _this.node.y);
            if (Math.abs((role.y + role.parent.y) - _this.node.y) < 300) {
                _this.node.destroy();
                cc.game.targetOff(_this);
            }
        }, this);
    };
    baffle = __decorate([
        ccclass
    ], baffle);
    return baffle;
}(cc.Component));
exports.default = baffle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxiYWZmbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLGtEQUFpRTtBQUMzRCxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFZO0lBQWhEOztJQXlDQSxDQUFDO0lBdENHLCtCQUFjLEdBQWQsVUFBZSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDL0IsdUZBQXVGO1FBQ3ZGLHFGQUFxRjtRQUNyRix3SEFBd0g7UUFDeEgsNENBQTRDO1FBQzVDLCtCQUErQjtRQUMvQixJQUFJO1FBQ0osSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLGNBQUcsQ0FBQyxPQUFPLEVBQUU7WUFDMUIsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBR0Qsd0JBQXdCO0lBRXhCLDBCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsZUFBZTtJQUVmLHNCQUFLLEdBQUw7UUFBQSxpQkFjQztRQWJHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUztZQUFFLE9BQU87UUFDeEMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQVEsQ0FBQyxXQUFXLEVBQUU7WUFDN0IsSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxRSw2REFBNkQ7WUFFN0QsdUVBQXVFO1lBQ3ZFLDJMQUEyTDtZQUMzTCxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDOUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFO2dCQUN4RCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUNwQixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsQ0FBQzthQUMzQjtRQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUNaLENBQUM7SUF0Q2dCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0F5QzFCO0lBQUQsYUFBQztDQXpDRCxBQXlDQyxDQXpDbUMsRUFBRSxDQUFDLFNBQVMsR0F5Qy9DO2tCQXpDb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRocmVhZElkIH0gZnJvbSBcIndvcmtlcl90aHJlYWRzXCI7XHJcbmltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29jb3NaXCI7XHJcbmltcG9ydCBDb25zdGFudCwgeyB0YWcsIFBhbmVsTmFtZSB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uc3RhbnRcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGJhZmZsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAgICAgLy8gaWYgKG90aGVyLnRhZyA9PSB0YWcudGhvcm4gfHwgb3RoZXIudGFnID09IHRhZy5zdG9uZSB8fCBvdGhlci50YWcgPT0gdGFnLmhvbmV5YmVlIHx8XHJcbiAgICAgICAgLy8gICAgIG90aGVyLnRhZyA9PSB0YWcuY2FydG9uIHx8IG90aGVyLnRhZyA9PSB0YWcucmFpbiB8fCBvdGhlci50YWcgPT0gdGFnLnN0b25lMyB8fFxyXG4gICAgICAgIC8vICAgICBvdGhlci50YWcgPT0gdGFnLndvb2xkZW5Cb3ggfHwgb3RoZXIudGFnID09IHRhZy53b29sZGVuQm94MiB8fG90aGVyLnRhZyA9PSB0YWcuYmFsbG9vbjJ8fG90aGVyLnRhZyA9PSB0YWcucm9wZSB8fFxyXG4gICAgICAgIC8vICAgICBvdGhlci50YWcgPT0gNzc3IHx8IG90aGVyLnRhZyA9PSAwKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnRhY3QuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZiAob3RoZXIudGFnICE9IHRhZy5iYWxsb29uKSB7XHJcbiAgICAgICAgICAgIGNvbnRhY3QuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNjLmdhbWUudGFyZ2V0T2ZmKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PSBcImJhZmZsZTJcIikgcmV0dXJuO1xyXG4gICAgICAgIGNjLmdhbWUub24oQ29uc3RhbnQuRV9ST0xFX01PVkUsICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJvbGUgPSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwicm9sZVwiKS5nZXRDaGlsZEJ5TmFtZShcImJvZHlcIik7XHJcbiAgICAgICAgICAgIC8vIGxldCBwb3MyID0gcm9sZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocm9sZS5nZXRQb3NpdGlvbigpKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGxldCBwb3MgPSByb2xlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpXHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhNYXRoLmFicyhwb3MueSAtIHRoaXMubm9kZS55KSwgXCJ0aGlzLm5vZGUueTpcIiArIHRoaXMubm9kZS55LCBcInBvcy55OlwiICsgcG9zLnksIFwicG9zMi55OlwiICsgcG9zMi55LCBcInJvbGUueTpcIiArIHJvbGUueSwgXCItLS0tLS0tLU1hdGguYWJzKHJvbGUuZ2V0Q2hpbGRCeU5hbWUoKS55IC0gdGhpcy5ub2RlLnkpXCIpXHJcbiAgICAgICAgICAgIGNjLmxvZygocm9sZS55ICsgcm9sZS5wYXJlbnQueSkgLSB0aGlzLm5vZGUueSlcclxuICAgICAgICAgICAgaWYgKE1hdGguYWJzKChyb2xlLnkgKyByb2xlLnBhcmVudC55KSAtIHRoaXMubm9kZS55KSA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIGNjLmdhbWUudGFyZ2V0T2ZmKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcylcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==