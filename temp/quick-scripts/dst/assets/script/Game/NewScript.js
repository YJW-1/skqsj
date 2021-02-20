
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/NewScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f82fZGCwpGGJUqhpdyViZl', 'NewScript');
// script/Game/NewScript.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.initPhysics = function () {
        var count = Math.ceil(this.colliderNode.width / GameData.COLLIDER_SPACE);
        for (var i = 0; i < count; i++) {
            var cld = this.colliderNode.addComponent(cc.PhysicsChainCollider);
            cld.points = [
                cc.v2(-360 + i * GameData.COLLIDER_SPACE, 0),
                cc.v2(-360 + i * GameData.COLLIDER_SPACE, -this.colliderNode.height)
            ];
            cld['apply']();
        }
        // let leftX = this.leftSide.points[0].x;
        // this.leftSide.points = [cc.v2(leftX, this.mapNode.height * (1 - this.mapNode.anchorY)), cc.v2(leftX, this.mapNode.height * (-this.mapNode.anchorY))];
        // this.leftSide['apply']();
        // let rightX = this.rightSide.points[0].x;
        // this.rightSide.points = [cc.v2(rightX, this.mapNode.height * (1 - this.mapNode.anchorY)), cc.v2(rightX, this.mapNode.height * (-this.mapNode.anchorY))];
        // this.rightSide['apply']();
    };
    NewClass.prototype.onTouchStart = function (event) {
        if (event.getTouches().length > 1)
            return;
        // if (this.guideFinger.active) {
        //     this.guideFinger.active = false;
        // }
        this.brush.apply();
        var location = event.getLocation();
        var pos = this.mapNode.convertToNodeSpaceAR(location);
        pos.y += this.gameCamera.node.y;
        this.makeEraser(pos);
    };
    NewClass.prototype.onTouchMove = function (event) {
        if (event.getTouches().length > 1)
            return;
        var location = event.getLocation();
        var pos = this.mapNode.convertToNodeSpaceAR(location);
        pos.y += this.gameCamera.node.y;
        this.makeEraser(pos);
    };
    NewClass.prototype.onTouchEnd = function (event) {
        if (event.getTouches().length > 1)
            return;
        this.brush.apply();
    };
    NewClass.prototype.checkInMaskView = function (pos) {
        if (pos.x < (this.maskNode.width * -this.maskNode.anchorX) ||
            pos.x > (this.maskNode.width * (1 - this.maskNode.anchorX)) ||
            pos.y < (this.maskNode.height * (-this.maskNode.anchorY)) ||
            pos.y > (this.maskNode.height * (1 - this.maskNode.anchorY))) {
            return false;
        }
        return true;
    };
    NewClass.prototype.makeEraser = function (pos, radius, isLine) {
        if (radius === void 0) { radius = 45; }
        if (isLine === void 0) { isLine = false; }
        if (!isLine && !this.checkInMaskView(pos)) {
            return;
        }
        var ep = pos;
        var pointList = this.brush.draw({
            graphics: this.maskEraser.getGraphics(),
            x: pos.x,
            y: pos.y,
            radius: radius,
        });
        for (var i = 0; i < pointList.length; i++) {
            this.eraserLine(pointList[i], radius);
            // this.drawMaskCircle(pointList[i], radius);
        }
    };
    NewClass.prototype.eraserLine = function (pos, radius) {
        var clds = this.colliderNode.getComponents(cc.PhysicsChainCollider);
        var colliderNode = this.colliderNode;
        if (clds && clds.length > 0) {
            for (var i = 0; i < clds.length; i++) {
                var cld = clds[i];
                if (cld.points.length > 0) {
                    var p0 = cld.points[0], p1 = cld.points[1];
                    if (cc.Intersection.pointLineDistance(pos, p0, p1, true) <= radius) {
                        if (p0.x > colliderNode.width * (1 - colliderNode.anchorX) ||
                            p0.x < colliderNode.width * -colliderNode.anchorX) {
                            return;
                        }
                        if (this.lineCircle(p0, p1, pos, radius) == 1) {
                            cld.points = [];
                            cld['apply']();
                        }
                        else if (this.lineCircle(p0, p1, pos, radius) == 2) {
                            var height = Math.sqrt(radius * radius - (p0.x - pos.x) * (p0.x - pos.x));
                            var in1 = this.pointInLine(cc.v2(p0.x, height + pos.y), p0, p1);
                            var in2 = this.pointInLine(cc.v2(p0.x, -height + pos.y), p0, p1);
                            if (in1 && in2) {
                                var newCld = colliderNode.addComponent(cc.PhysicsChainCollider);
                                newCld.points = [p0, cc.v2(p0.x, height + pos.y)];
                                newCld['apply']();
                                cld.points = [cc.v2(p1.x, -height + pos.y), p1];
                                cld['apply']();
                            }
                            else if (!in1 && in2) {
                                cld.points = [cc.v2(p1.x, -height + pos.y), p1];
                                cld['apply']();
                            }
                            else if (in1 && !in2) {
                                cld.points = [cc.v2(p0), cc.v2(p0.x, height + pos.y)];
                                cld['apply']();
                            }
                        }
                    }
                }
            }
        }
    };
    NewClass.prototype.pointInCircle = function (point, center, radius) {
        return point.sub(center).magSqr() < (radius * radius);
    };
    NewClass.prototype.lineCircle = function (pos1, pos2, center, radius) {
        //在里面
        var in1 = this.pointInCircle(pos1, center, radius);
        var in2 = this.pointInCircle(pos2, center, radius);
        if (in1 && in2) {
            return 1;
        }
        if (!in1 && in2) {
            return 2;
        }
        if (in1 && !in2) {
            return 2;
        }
        if (cc.Intersection.pointLineDistance(center, pos1, pos2, true) <= radius) {
            return 2;
        }
        return 0;
    };
    NewClass.prototype.pointInLine = function (point, pos1, pos2) {
        return pos1.sub(point).mag() + pos2.sub(point).mag() <= pos1.sub(pos2).mag() + 1;
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxOZXdTY3JpcHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7O0FBRTVFLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFEbEQ7UUFBQSxxRUE4SkM7UUExSkcsV0FBSyxHQUFhLElBQUksQ0FBQzs7UUF5SnZCLGlCQUFpQjtJQUNyQixDQUFDO0lBeEpHLDhCQUFXLEdBQVg7UUFDSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN6RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVCLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2xFLEdBQUcsQ0FBQyxNQUFNLEdBQUc7Z0JBQ1QsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7Z0JBQzVDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQzthQUN2RSxDQUFDO1lBQ0YsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7U0FDbEI7UUFFRCx5Q0FBeUM7UUFDekMsd0pBQXdKO1FBQ3hKLDRCQUE0QjtRQUM1QiwyQ0FBMkM7UUFDM0MsMkpB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QTZKNUI7SUFBRCxlQUFDO0NBN0pELEFBNkpDLENBN0pxQyxFQUFFLENBQUMsU0FBUyxHQTZKakQ7a0JBN0pvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIGluaXRQaHlzaWNzKCkge1xyXG4gICAgICAgIGxldCBjb3VudCA9IE1hdGguY2VpbCh0aGlzLmNvbGxpZGVyTm9kZS53aWR0aCAvIEdhbWVEYXRhLkNPTExJREVSX1NQQUNFKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNsZCA9IHRoaXMuY29sbGlkZXJOb2RlLmFkZENvbXBvbmVudChjYy5QaHlzaWNzQ2hhaW5Db2xsaWRlcik7XHJcbiAgICAgICAgICAgIGNsZC5wb2ludHMgPSBbXHJcbiAgICAgICAgICAgICAgICBjYy52MigtMzYwICsgaSAqIEdhbWVEYXRhLkNPTExJREVSX1NQQUNFLCAwKSxcclxuICAgICAgICAgICAgICAgIGNjLnYyKC0zNjAgKyBpICogR2FtZURhdGEuQ09MTElERVJfU1BBQ0UsIC10aGlzLmNvbGxpZGVyTm9kZS5oZWlnaHQpXHJcbiAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIGNsZFsnYXBwbHknXSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gbGV0IGxlZnRYID0gdGhpcy5sZWZ0U2lkZS5wb2ludHNbMF0ueDtcclxuICAgICAgICAvLyB0aGlzLmxlZnRTaWRlLnBvaW50cyA9IFtjYy52MihsZWZ0WCwgdGhpcy5tYXBOb2RlLmhlaWdodCAqICgxIC0gdGhpcy5tYXBOb2RlLmFuY2hvclkpKSwgY2MudjIobGVmdFgsIHRoaXMubWFwTm9kZS5oZWlnaHQgKiAoLXRoaXMubWFwTm9kZS5hbmNob3JZKSldO1xyXG4gICAgICAgIC8vIHRoaXMubGVmdFNpZGVbJ2FwcGx5J10oKTtcclxuICAgICAgICAvLyBsZXQgcmlnaHRYID0gdGhpcy5yaWdodFNpZGUucG9pbnRzWzBdLng7XHJcbiAgICAgICAgLy8gdGhpcy5yaWdodFNpZGUucG9pbnRzID0gW2NjLnYyKHJpZ2h0WCwgdGhpcy5tYXBOb2RlLmhlaWdodCAqICgxIC0gdGhpcy5tYXBOb2RlLmFuY2hvclkpKSwgY2MudjIocmlnaHRYLCB0aGlzLm1hcE5vZGUuaGVpZ2h0ICogKC10aGlzLm1hcE5vZGUuYW5jaG9yWSkpXTtcclxuICAgICAgICAvLyB0aGlzLnJpZ2h0U2lkZVsnYXBwbHknXSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hTdGFydChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQuZ2V0VG91Y2hlcygpLmxlbmd0aCA+IDEpIHJldHVybjtcclxuICAgICAgICAvLyBpZiAodGhpcy5ndWlkZUZpbmdlci5hY3RpdmUpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5ndWlkZUZpbmdlci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5icnVzaC5hcHBseSgpO1xyXG4gICAgICAgIGxldCBsb2NhdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubWFwTm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihsb2NhdGlvbik7XHJcbiAgICAgICAgcG9zLnkgKz0gdGhpcy5nYW1lQ2FtZXJhLm5vZGUueTtcclxuICAgICAgICB0aGlzLm1ha2VFcmFzZXIocG9zKTtcclxuXHJcbiAgICB9XHJcbiAgICBvblRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmIChldmVudC5nZXRUb3VjaGVzKCkubGVuZ3RoID4gMSkgcmV0dXJuO1xyXG4gICAgICAgIGxldCBsb2NhdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubWFwTm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihsb2NhdGlvbik7XHJcbiAgICAgICAgcG9zLnkgKz0gdGhpcy5nYW1lQ2FtZXJhLm5vZGUueTtcclxuICAgICAgICB0aGlzLm1ha2VFcmFzZXIocG9zKTtcclxuICAgIH1cclxuICAgIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcclxuICAgICAgICBpZiAoZXZlbnQuZ2V0VG91Y2hlcygpLmxlbmd0aCA+IDEpIHJldHVybjtcclxuICAgICAgICB0aGlzLmJydXNoLmFwcGx5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJbk1hc2tWaWV3KHBvczogY2MuVmVjMikge1xyXG4gICAgICAgIGlmIChwb3MueCA8ICh0aGlzLm1hc2tOb2RlLndpZHRoICogLXRoaXMubWFza05vZGUuYW5jaG9yWCkgfHxcclxuICAgICAgICAgICAgcG9zLnggPiAodGhpcy5tYXNrTm9kZS53aWR0aCAqICgxIC0gdGhpcy5tYXNrTm9kZS5hbmNob3JYKSkgfHxcclxuICAgICAgICAgICAgcG9zLnkgPCAodGhpcy5tYXNrTm9kZS5oZWlnaHQgKiAoLXRoaXMubWFza05vZGUuYW5jaG9yWSkpIHx8XHJcbiAgICAgICAgICAgIHBvcy55ID4gKHRoaXMubWFza05vZGUuaGVpZ2h0ICogKDEgLSB0aGlzLm1hc2tOb2RlLmFuY2hvclkpKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VFcmFzZXIocG9zOiBjYy5WZWMyLCByYWRpdXMgPSA0NSwgaXNMaW5lID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAoIWlzTGluZSAmJiAhdGhpcy5jaGVja0luTWFza1ZpZXcocG9zKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBlcCA9IHBvc1xyXG4gICAgICAgIGxldCBwb2ludExpc3QgPSB0aGlzLmJydXNoLmRyYXcoe1xyXG4gICAgICAgICAgICBncmFwaGljczogdGhpcy5tYXNrRXJhc2VyLmdldEdyYXBoaWNzKCksXHJcbiAgICAgICAgICAgIHg6IHBvcy54LFxyXG4gICAgICAgICAgICB5OiBwb3MueSxcclxuICAgICAgICAgICAgcmFkaXVzOiByYWRpdXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5lcmFzZXJMaW5lKHBvaW50TGlzdFtpXSwgcmFkaXVzKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5kcmF3TWFza0NpcmNsZShwb2ludExpc3RbaV0sIHJhZGl1cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXJhc2VyTGluZShwb3M6IGNjLlZlYzIsIHJhZGl1czogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IGNsZHMgPSB0aGlzLmNvbGxpZGVyTm9kZS5nZXRDb21wb25lbnRzKGNjLlBoeXNpY3NDaGFpbkNvbGxpZGVyKTtcclxuICAgICAgICBsZXQgY29sbGlkZXJOb2RlID0gdGhpcy5jb2xsaWRlck5vZGU7XHJcbiAgICAgICAgaWYgKGNsZHMgJiYgY2xkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNsZDogY2MuUGh5c2ljc0NoYWluQ29sbGlkZXIgPSBjbGRzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNsZC5wb2ludHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwMCA9IGNsZC5wb2ludHNbMF0sIHAxID0gY2xkLnBvaW50c1sxXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2MuSW50ZXJzZWN0aW9uLnBvaW50TGluZURpc3RhbmNlKHBvcywgcDAsIHAxLCB0cnVlKSA8PSByYWRpdXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHAwLnggPiBjb2xsaWRlck5vZGUud2lkdGggKiAoMSAtIGNvbGxpZGVyTm9kZS5hbmNob3JYKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcDAueCA8IGNvbGxpZGVyTm9kZS53aWR0aCAqIC1jb2xsaWRlck5vZGUuYW5jaG9yWCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxpbmVDaXJjbGUocDAsIHAxLCBwb3MsIHJhZGl1cykgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xkLnBvaW50cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xkWydhcHBseSddKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5saW5lQ2lyY2xlKHAwLCBwMSwgcG9zLCByYWRpdXMpID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoZWlnaHQgPSBNYXRoLnNxcnQocmFkaXVzICogcmFkaXVzIC0gKHAwLnggLSBwb3MueCkgKiAocDAueCAtIHBvcy54KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW4xID0gdGhpcy5wb2ludEluTGluZShjYy52MihwMC54LCBoZWlnaHQgKyBwb3MueSksIHAwLCBwMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW4yID0gdGhpcy5wb2ludEluTGluZShjYy52MihwMC54LCAtaGVpZ2h0ICsgcG9zLnkpLCBwMCwgcDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluMSAmJiBpbjIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Q2xkID0gY29sbGlkZXJOb2RlLmFkZENvbXBvbmVudChjYy5QaHlzaWNzQ2hhaW5Db2xsaWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2xkLnBvaW50cyA9IFtwMCwgY2MudjIocDAueCwgaGVpZ2h0ICsgcG9zLnkpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdDbGRbJ2FwcGx5J10oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGQucG9pbnRzID0gW2NjLnYyKHAxLngsIC1oZWlnaHQgKyBwb3MueSksIHAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGRbJ2FwcGx5J10oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWluMSAmJiBpbjIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGQucG9pbnRzID0gW2NjLnYyKHAxLngsIC1oZWlnaHQgKyBwb3MueSksIHAxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGRbJ2FwcGx5J10oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW4xICYmICFpbjIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGQucG9pbnRzID0gW2NjLnYyKHAwKSwgY2MudjIocDAueCwgaGVpZ2h0ICsgcG9zLnkpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGRbJ2FwcGx5J10oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwb2ludEluQ2lyY2xlKHBvaW50LCBjZW50ZXIsIHJhZGl1cykge1xyXG4gICAgICAgIHJldHVybiBwb2ludC5zdWIoY2VudGVyKS5tYWdTcXIoKSA8IChyYWRpdXMgKiByYWRpdXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxpbmVDaXJjbGUocG9zMSwgcG9zMiwgY2VudGVyLCByYWRpdXMpIHtcclxuICAgICAgICAvL+WcqOmHjOmdolxyXG4gICAgICAgIGxldCBpbjEgPSB0aGlzLnBvaW50SW5DaXJjbGUocG9zMSwgY2VudGVyLCByYWRpdXMpO1xyXG4gICAgICAgIGxldCBpbjIgPSB0aGlzLnBvaW50SW5DaXJjbGUocG9zMiwgY2VudGVyLCByYWRpdXMpXHJcbiAgICAgICAgaWYgKGluMSAmJiBpbjIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghaW4xICYmIGluMikge1xyXG4gICAgICAgICAgICByZXR1cm4gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGluMSAmJiAhaW4yKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNjLkludGVyc2VjdGlvbi5wb2ludExpbmVEaXN0YW5jZShjZW50ZXIsIHBvczEsIHBvczIsIHRydWUpIDw9IHJhZGl1cykge1xyXG4gICAgICAgICAgICByZXR1cm4gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgcG9pbnRJbkxpbmUocG9pbnQsIHBvczEsIHBvczIpIHtcclxuICAgICAgICByZXR1cm4gcG9zMS5zdWIocG9pbnQpLm1hZygpICsgcG9zMi5zdWIocG9pbnQpLm1hZygpIDw9IHBvczEuc3ViKHBvczIpLm1hZygpICsgMTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19