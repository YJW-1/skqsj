
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ysqszc/stone2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4e0dj+jF9KJJiFbxrDLH9z', 'stone2');
// script/ysqszc/stone2.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var stone = /** @class */ (function (_super) {
    __extends(stone, _super);
    function stone() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rb = null;
        _this.isDes = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    stone.prototype.onDestroy = function () {
        cc.log("------------stone被销毁");
    };
    stone.prototype.onBeginContact = function (contact, self, other) {
        if (CocosZ_1.cocosz.sceneMgr.sceneName == "Game2") {
            this.rb.gravityScale = 0.5;
        }
    };
    stone.prototype.onLoad = function () {
        this.rb = this.node.getComponent(cc.RigidBody);
    };
    stone.prototype.start = function () {
    };
    stone.prototype.update = function (dt) {
        if (CocosZ_1.cocosz.gameMgr.isGameOver)
            return;
        var pos = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
        if ((pos.x < 0 || pos.x > cc.winSize.width) || (pos.y < 0 || pos.y > cc.winSize.height)) {
            this.node.destroy();
            cc.game.emit(Constant_1.default.E_GAME_START);
        }
    };
    stone = __decorate([
        ccclass
    ], stone);
    return stone;
}(cc.Component));
exports.default = stone;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx5c3FzemNcXHN0b25lMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQTZDO0FBQzdDLGtEQUFzRDtBQUVoRCxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBRC9DO1FBQUEscUVBa0NDO1FBL0JHLFFBQUUsR0FBaUIsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBWSxLQUFLLENBQUM7O0lBNkIzQixDQUFDO0lBNUJHLHdCQUF3QjtJQUV4Qix5QkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUFFRCw4QkFBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQy9CLElBQUksZUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUksT0FBTyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztTQUM5QjtJQUVMLENBQUM7SUFDRCxzQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHFCQUFLLEdBQUw7SUFDQSxDQUFDO0lBRUQsc0JBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVTtZQUFFLE9BQU87UUFDdEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDckYsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtZQUNuQixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBUSxDQUFDLFlBQVksQ0FBQyxDQUFBO1NBRXRDO0lBQ0wsQ0FBQztJQWhDZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQWlDekI7SUFBRCxZQUFDO0NBakNELEFBaUNDLENBakNrQyxFQUFFLENBQUMsU0FBUyxHQWlDOUM7a0JBakNvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuaW1wb3J0IENvbnN0YW50LCB7IHRhZyB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uc3RhbnRcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzdG9uZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgcmI6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcblxyXG4gICAgaXNEZXM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjYy5sb2coXCItLS0tLS0tLS0tLS1zdG9uZeiiq+mUgOavgVwiKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAgICAgaWYgKGNvY29zei5zY2VuZU1nci5zY2VuZU5hbWUgPT0gXCJHYW1lMlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmIuZ3Jhdml0eVNjYWxlID0gMC41O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5yYiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAoY29jb3N6LmdhbWVNZ3IuaXNHYW1lT3ZlcikgcmV0dXJuO1xyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgaWYgKChwb3MueCA8IDAgfHwgcG9zLnggPiBjYy53aW5TaXplLndpZHRoKSB8fCAocG9zLnkgPCAwIHx8IHBvcy55ID4gY2Mud2luU2l6ZS5oZWlnaHQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KClcclxuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KENvbnN0YW50LkVfR0FNRV9TVEFSVClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==