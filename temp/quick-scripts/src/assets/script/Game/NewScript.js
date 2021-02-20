"use strict";
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