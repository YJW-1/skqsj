
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/otherCamera.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4134bimWMVCiK9LF5nFjPnk', 'otherCamera');
// script/Game/otherCamera.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.otherCamera = null;
        _this.mask = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.mask = this.node.getComponent(cc.Mask);
        var sp = new cc.SpriteFrame;
        // sp.setTexture(this.otherCamera.targetTexture);
        // cc.log(this.mask);
        // cc.log(this.otherCamera.targetTexture)
        // this.mask.spriteFrame = sp;
        var texture = new cc.RenderTexture();
        texture.initWithSize(1280, 720);
        var spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(texture);
        this.otherCamera.targetTexture = texture;
        this.mask.spriteFrame = spriteFrame;
    };
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "otherCamera", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxvdGhlckNhbWVyYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQURsRDtRQUFBLHFFQW1DQztRQS9CRyxpQkFBVyxHQUFjLElBQUksQ0FBQztRQUc5QixVQUFJLEdBQVksSUFBSSxDQUFDOztRQTJCckIsaUJBQWlCO0lBQ3JCLENBQUM7SUExQkcsd0JBQXdCO0lBRXhCLHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFFNUIsaURBQWlEO1FBQ2pELHFCQUFxQjtRQUNyQix5Q0FBeUM7UUFDekMsOEJBQThCO1FBSTlCLElBQU0sT0FBTyxHQUFHLElBQUksRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQU0sV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUV4QyxDQUFDO0lBRUQsd0JBQUssR0FBTDtJQUNBLENBQUM7SUE1QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFDVTtJQUhiLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FrQzVCO0lBQUQsZUFBQztDQWxDRCxBQWtDQyxDQWxDcUMsRUFBRSxDQUFDLFNBQVMsR0FrQ2pEO2tCQWxDb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBvdGhlckNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuXHJcblxyXG4gICAgbWFzazogY2MuTWFzayA9IG51bGw7XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubWFzayA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTWFzayk7XHJcbiAgICAgICAgbGV0IHNwID0gbmV3IGNjLlNwcml0ZUZyYW1lO1xyXG5cclxuICAgICAgICAvLyBzcC5zZXRUZXh0dXJlKHRoaXMub3RoZXJDYW1lcmEudGFyZ2V0VGV4dHVyZSk7XHJcbiAgICAgICAgLy8gY2MubG9nKHRoaXMubWFzayk7XHJcbiAgICAgICAgLy8gY2MubG9nKHRoaXMub3RoZXJDYW1lcmEudGFyZ2V0VGV4dHVyZSlcclxuICAgICAgICAvLyB0aGlzLm1hc2suc3ByaXRlRnJhbWUgPSBzcDtcclxuXHJcblxyXG5cclxuICAgICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IGNjLlJlbmRlclRleHR1cmUoKTtcclxuICAgICAgICB0ZXh0dXJlLmluaXRXaXRoU2l6ZSgxMjgwLDcyMCk7XHJcbiAgICAgICAgY29uc3Qgc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUoKTtcclxuICAgICAgICBzcHJpdGVGcmFtZS5zZXRUZXh0dXJlKHRleHR1cmUpO1xyXG4gICAgICAgIHRoaXMub3RoZXJDYW1lcmEudGFyZ2V0VGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgICAgICAgdGhpcy5tYXNrLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19