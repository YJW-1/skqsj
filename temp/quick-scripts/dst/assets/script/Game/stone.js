
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/stone.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9cc76oPqN1OuYBQft3yjhK2', 'stone');
// script/Game/stone.ts

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
        var _this = this;
        if (CocosZ_1.cocosz.sceneMgr.sceneName == "Game2") {
            this.rb.gravityScale = 0.5;
        }
        if (other.tag == Constant_1.tag.bigFan) {
            if (this.isDes)
                return;
            this.isDes = true;
            this.scheduleOnce(function () {
                _this.node.destroy();
            }, 0.05);
        }
    };
    stone.prototype.onLoad = function () {
        this.rb = this.node.getComponent(cc.RigidBody);
    };
    stone.prototype.start = function () {
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 55 || CocosZ_1.cocosz.dataMgr.CurLevelId == 136) {
            this.rb.gravityScale = 9;
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 42) {
            this.rb.gravityScale = 5;
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 35 || CocosZ_1.cocosz.dataMgr.CurLevelId == 124) {
            this.rb.gravityScale = 5;
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 11) {
            this.rb.gravityScale = 8;
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 94) {
            this.rb.gravityScale = 1;
        }
        // else if (cocosz.dataMgr.CurLevelId == 80) {
        //     this.rb.gravityScale = 0.3;
        // }
    };
    stone.prototype.update = function (dt) {
        var v = this.rb.linearVelocity;
        if (this.node.parent.name != "levelMgr" || this.node.parent.getComponent("levelNum").curLevel == 13)
            return;
        if (v.y <= -500) {
            this.rb.linearVelocity = cc.v2(0, -500);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxzdG9uZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQTZDO0FBQzdDLGtEQUE0QztBQUV0QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBRC9DO1FBQUEscUVBMERDO1FBdkRHLFFBQUUsR0FBaUIsSUFBSSxDQUFDO1FBRXhCLFdBQUssR0FBWSxLQUFLLENBQUM7O0lBcUQzQixDQUFDO0lBcERHLHdCQUF3QjtJQUV4Qix5QkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO0lBQ2xDLENBQUM7SUFFRCw4QkFBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQW5DLGlCQWFDO1FBWkcsSUFBSSxlQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsSUFBSSxPQUFPLEVBQUU7WUFFdEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLGNBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDekIsSUFBSSxJQUFJLENBQUMsS0FBSztnQkFBRSxPQUFPO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN4QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7U0FDWDtJQUVMLENBQUM7SUFDRCxzQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHFCQUFLLEdBQUw7UUFDSSxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUUsSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxHQUFHLEVBQUU7WUFDckUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO2FBQ0ksSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1NBQzVCO2FBQ0ksSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxFQUFFLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksR0FBRyxFQUFFO1lBQzFFLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztTQUM1QjthQUNJLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztTQUM1QjthQUNJLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztTQUM1QjtRQUNELDhDQUE4QztRQUM5QyxrQ0FBa0M7UUFDbEMsSUFBSTtJQUNSLENBQUM7SUFFRCxzQkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLFVBQVUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxJQUFJLEVBQUU7WUFBRSxPQUFPO1FBQzVHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUE7U0FDMUM7SUFDTCxDQUFDO0lBeERnQixLQUFLO1FBRHpCLE9BQU87T0FDYSxLQUFLLENBeUR6QjtJQUFELFlBQUM7Q0F6REQsQUF5REMsQ0F6RGtDLEVBQUUsQ0FBQyxTQUFTLEdBeUQ5QztrQkF6RG9CLEtBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5pbXBvcnQgeyB0YWcgfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvbnN0YW50XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mgc3RvbmUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHJiOiBjYy5SaWdpZEJvZHkgPSBudWxsO1xyXG5cclxuICAgIGlzRGVzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY2MubG9nKFwiLS0tLS0tLS0tLS0tc3RvbmXooqvplIDmr4FcIilcclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIGlmIChjb2Nvc3ouc2NlbmVNZ3Iuc2NlbmVOYW1lID09IFwiR2FtZTJcIikge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yYi5ncmF2aXR5U2NhbGUgPSAwLjU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvdGhlci50YWcgPT0gdGFnLmJpZ0Zhbikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0RlcykgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLmlzRGVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSwgMC4wNSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMucmIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gNTUgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMzYpIHtcclxuICAgICAgICAgICAgdGhpcy5yYi5ncmF2aXR5U2NhbGUgPSA5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDQyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmIuZ3Jhdml0eVNjYWxlID0gNTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAzNSB8fCBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDEyNCkge1xyXG4gICAgICAgICAgICB0aGlzLnJiLmdyYXZpdHlTY2FsZSA9IDU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTEpIHtcclxuICAgICAgICAgICAgdGhpcy5yYi5ncmF2aXR5U2NhbGUgPSA4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDk0KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmIuZ3Jhdml0eVNjYWxlID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZWxzZSBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA4MCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnJiLmdyYXZpdHlTY2FsZSA9IDAuMztcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgbGV0IHYgPSB0aGlzLnJiLmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50Lm5hbWUgIT0gXCJsZXZlbE1nclwiIHx8IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFwibGV2ZWxOdW1cIikuY3VyTGV2ZWwgPT0gMTMpIHJldHVybjtcclxuICAgICAgICBpZiAodi55IDw9IC01MDApIHtcclxuICAgICAgICAgICAgdGhpcy5yYi5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIC01MDApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==