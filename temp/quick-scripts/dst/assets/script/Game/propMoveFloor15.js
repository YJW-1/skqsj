
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/propMoveFloor15.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d209YhKBBBRJd0fJlyKRgr', 'propMoveFloor15');
// script/Game/propMoveFloor15.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var propMoveFloor = /** @class */ (function (_super) {
    __extends(propMoveFloor, _super);
    function propMoveFloor() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.minDistance = 0;
        _this.maxDistance = 0;
        _this.pos = 0;
        _this.floor = null;
        _this.role = null;
        _this.isStop = false;
        _this.isTouch = false;
        _this.endPos = 0;
        _this.x = -9999;
        _this.y = -9999;
        _this.rb = null;
        _this.isFirstMove = false;
        _this.moveDis = 0;
        _this.rocket = null;
        _this.isLaunch = false;
        return _this;
    }
    propMoveFloor.prototype.onRayCast = function (num1, num2) {
        var startPos = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
        var endPos = cc.v2(startPos.x + 1000 * num1, startPos.y + 1000 * num2);
        var result = CocosZ_1.cocosz.gameMgr.onRayCast(startPos, endPos);
        return result;
    };
    propMoveFloor.prototype.onInitDistance = function () {
        // let d1 = this.node.parent.getChildByName("limit1").y
        // let d2 = this.node.parent.getChildByName("limit2").y
        // let limit = this.node.parent.getChildByName("limit2")
        // let scaleX = this.node.parent.getChildByName("limit2").scaleX
        // if (this.node.angle == 90) {
        //     d1 = this.node.parent.getChildByName("limit1").x
        //     d2 = this.node.parent.getChildByName("limit2").x
        // }
        // let rope = this.node.parent.getChildByName("rope");
        // if (d1 > d2) {
        //     this.minDistance = d2 + (this.node.width * this.node.scaleX + 30);
        //     this.maxDistance = d1 - (this.node.width * this.node.scaleX + 30);
        // }
        // else {
        //     this.minDistance = d1 + (this.node.width * this.node.scaleX + 30);
        //     this.maxDistance = d2 - (this.node.width * this.node.scaleX + 30);
        // }
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 31) {
            this.minDistance = -159;
            this.maxDistance = 136;
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 45) {
            this.minDistance = -120;
            this.maxDistance = 218;
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 130) {
            this.minDistance = -407;
            this.maxDistance = -130;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    propMoveFloor.prototype.onLoad = function () {
        this.floor = this.node.getChildByName("floor");
        this.rocket = this.node.getChildByName("rocket");
        this.rb = this.node.getComponent(cc.RigidBody);
    };
    propMoveFloor.prototype.start = function () {
        var _this = this;
        this.onInitDistance();
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            var pos = _this.node.parent.convertToNodeSpaceAR(event.getLocation());
            _this.pos = pos;
            _this.node.getChildByName("floor").active = true;
            _this.isTouch = true;
        });
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            // cc.game.emit(Constant.E_TIPS_NEXT)
            var pos = _this.node.parent.convertToNodeSpaceAR(event.getLocation());
            if (_this.node.angle == 90) {
                var dis = _this.pos.x - pos.x;
                _this.pos = pos;
                var x = 0 + _this.node.x;
                if (x - dis <= _this.maxDistance && x - dis >= _this.minDistance) {
                    if (!_this.isFirstMove) {
                        _this.isFirstMove = true;
                        CocosZ_1.cocosz.audioMgr.playMoveFloorEffect();
                    }
                    _this.node.x = x - dis;
                    _this.moveDis++;
                }
            }
            else {
                var dis = _this.pos.y - pos.y;
                _this.pos = pos;
                var y = 0 + _this.node.y;
                // cc.log(y - dis, this.maxDistance, this.minDistance)
                if (y - dis <= _this.maxDistance && y - dis >= _this.minDistance) {
                    _this.node.y = y - dis;
                    _this.moveDis++;
                    // let pp = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
                    // let pp2 = this.node.convertToNodeSpaceAR(pp);
                    // this.rocket.setPosition(pp2);
                    // this.rocket.y = this.node.y * this.node.scaleY
                    if (!_this.isFirstMove) {
                        _this.isFirstMove = true;
                        CocosZ_1.cocosz.audioMgr.playMoveFloorEffect();
                    }
                }
            }
        });
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            if (_this.floor) {
                _this.floor.active = false;
            }
            _this.isTouch = false;
            _this.isFirstMove = false;
            _this.moveDis = 0;
        });
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            if (_this.floor) {
                _this.floor.active = false;
            }
            _this.isTouch = false;
            _this.isFirstMove = false;
            // if (this.moveDis <= 0 && !this.isLaunch) {
            //     this.isLaunch = true;
            //     // let r = Math.PI * 180 / this.rocket.angle;
            //     // let x = Math.cos(r);
            //     // let y = Math.sin(r);
            //     let rb = this.rocket.addComponent(cc.RigidBody);
            //     rb.enabledContactListener = true
            //     rb.type = cc.RigidBodyType.Kinematic;
            //     let boxPhy = this.rocket.addComponent(cc.PhysicsBoxCollider);
            //     boxPhy.tag = 31;
            //     boxPhy.size.width=60;
            //     boxPhy.size.height=30;
            //     boxPhy.apply();
            //     let v = rb.linearVelocity;
            //     v.x = 1000 * this.rocket.scaleX/3;
            //     rb.linearVelocity = v;
            // }
            _this.moveDis = 0;
        });
    };
    propMoveFloor.prototype.update = function (dt) {
        // if (this.isTouch) return;
        // if (this.x > -999) {
        //     if (this.x > this.node.x) {
        //         let v = this.rb.linearVelocity;
        //         v.x = 100;
        //     }
        // }
    };
    propMoveFloor = __decorate([
        ccclass
    ], propMoveFloor);
    return propMoveFloor;
}(cc.Component));
exports.default = propMoveFloor;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxwcm9wTW92ZUZsb29yMTUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUd2QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBRHZEO1FBQUEscUVBb0xDO1FBbExHLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLFNBQUcsR0FBUSxDQUFDLENBQUM7UUFDYixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixhQUFPLEdBQVksS0FBSyxDQUFDO1FBR3pCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsT0FBQyxHQUFXLENBQUMsSUFBSSxDQUFDO1FBRWxCLE9BQUMsR0FBVyxDQUFDLElBQUksQ0FBQztRQUVsQixRQUFFLEdBQWlCLElBQUksQ0FBQTtRQUV2QixpQkFBVyxHQUFHLEtBQUssQ0FBQztRQUVwQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFHdEIsY0FBUSxHQUFZLEtBQUssQ0FBQzs7SUF5SjlCLENBQUM7SUF2SkcsaUNBQVMsR0FBVCxVQUFVLElBQUksRUFBRSxJQUFJO1FBQ2hCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUMvRSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN2RSxJQUFJLE1BQU0s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O1FBQzFDLHFCQUFxQjtRQUNyQixRQUFRO1FBQ1IsSUFBSTtJQUNSLENBQUM7SUFsTGdCLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FtTGpDO0lBQUQsb0JBQUM7Q0FuTEQsQUFtTEMsQ0FuTDBDLEVBQUUsQ0FBQyxTQUFTLEdBbUx0RDtrQkFuTG9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5pbXBvcnQgQ29uc3RhbnQsIHsgdGFnIH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHByb3BNb3ZlRmxvb3IgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgbWluRGlzdGFuY2U6IG51bWJlciA9IDA7XHJcbiAgICBtYXhEaXN0YW5jZTogbnVtYmVyID0gMDtcclxuICAgIHBvczogYW55ID0gMDtcclxuICAgIGZsb29yOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHJvbGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgaXNTdG9wOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgaXNUb3VjaDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBlbmRQb3M6IG51bWJlciA9IDA7XHJcblxyXG4gICAgeDogbnVtYmVyID0gLTk5OTk7XHJcblxyXG4gICAgeTogbnVtYmVyID0gLTk5OTk7XHJcblxyXG4gICAgcmI6IGNjLlJpZ2lkQm9keSA9IG51bGxcclxuXHJcbiAgICBpc0ZpcnN0TW92ZSA9IGZhbHNlO1xyXG5cclxuICAgIG1vdmVEaXM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcm9ja2V0OiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuXHJcbiAgICBpc0xhdW5jaDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uUmF5Q2FzdChudW0xLCBudW0yKSB7XHJcbiAgICAgICAgbGV0IHN0YXJ0UG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIGxldCBlbmRQb3MgPSBjYy52MihzdGFydFBvcy54ICsgMTAwMCAqIG51bTEsIHN0YXJ0UG9zLnkgKyAxMDAwICogbnVtMik7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGNvY29zei5nYW1lTWdyLm9uUmF5Q2FzdChzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgb25Jbml0RGlzdGFuY2UoKSB7XHJcbiAgICAgICAgLy8gbGV0IGQxID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImxpbWl0MVwiKS55XHJcbiAgICAgICAgLy8gbGV0IGQyID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImxpbWl0MlwiKS55XHJcbiAgICAgICAgLy8gbGV0IGxpbWl0ID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImxpbWl0MlwiKVxyXG4gICAgICAgIC8vIGxldCBzY2FsZVggPSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwibGltaXQyXCIpLnNjYWxlWFxyXG4gICAgICAgIC8vIGlmICh0aGlzLm5vZGUuYW5nbGUgPT0gOTApIHtcclxuXHJcbiAgICAgICAgLy8gICAgIGQxID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImxpbWl0MVwiKS54XHJcbiAgICAgICAgLy8gICAgIGQyID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImxpbWl0MlwiKS54XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGxldCByb3BlID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcInJvcGVcIik7XHJcbiAgICAgICAgLy8gaWYgKGQxID4gZDIpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5taW5EaXN0YW5jZSA9IGQyICsgKHRoaXMubm9kZS53aWR0aCAqIHRoaXMubm9kZS5zY2FsZVggKyAzMCk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubWF4RGlzdGFuY2UgPSBkMSAtICh0aGlzLm5vZGUud2lkdGggKiB0aGlzLm5vZGUuc2NhbGVYICsgMzApO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5taW5EaXN0YW5jZSA9IGQxICsgKHRoaXMubm9kZS53aWR0aCAqIHRoaXMubm9kZS5zY2FsZVggKyAzMCk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubWF4RGlzdGFuY2UgPSBkMiAtICh0aGlzLm5vZGUud2lkdGggKiB0aGlzLm5vZGUuc2NhbGVYICsgMzApO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAzMSkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5taW5EaXN0YW5jZSA9IC0xNTlcclxuICAgICAgICAgICAgdGhpcy5tYXhEaXN0YW5jZSA9IDEzNlxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDQ1KSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1pbkRpc3RhbmNlID0gLTEyMFxyXG4gICAgICAgICAgICB0aGlzLm1heERpc3RhbmNlID0gMjE4XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTMwKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1pbkRpc3RhbmNlID0gLTQwN1xyXG4gICAgICAgICAgICB0aGlzLm1heERpc3RhbmNlID0gLTEzMFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5mbG9vciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImZsb29yXCIpO1xyXG4gICAgICAgIHRoaXMucm9ja2V0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwicm9ja2V0XCIpO1xyXG4gICAgICAgIHRoaXMucmIgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm9uSW5pdERpc3RhbmNlKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9USVBTX05FWFQpXHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLmFuZ2xlID09IDkwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHRoaXMucG9zLnggLSBwb3MueDtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgICAgICAgICAgICAgbGV0IHggPSAwICsgdGhpcy5ub2RlLng7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHggLSBkaXMgPD0gdGhpcy5tYXhEaXN0YW5jZSAmJiB4IC0gZGlzID49IHRoaXMubWluRGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdE1vdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0ZpcnN0TW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5TW92ZUZsb29yRWZmZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ID0geCAtIGRpcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXMrKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBkaXMgPSB0aGlzLnBvcy55IC0gcG9zLnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvcyA9IHBvcztcclxuICAgICAgICAgICAgICAgIGxldCB5ID0gMCArIHRoaXMubm9kZS55O1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKHkgLSBkaXMsIHRoaXMubWF4RGlzdGFuY2UsIHRoaXMubWluRGlzdGFuY2UpXHJcbiAgICAgICAgICAgICAgICBpZiAoeSAtIGRpcyA8PSB0aGlzLm1heERpc3RhbmNlICYmIHkgLSBkaXMgPj0gdGhpcy5taW5EaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ID0geSAtIGRpcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVEaXMrKztcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgcHAgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHBwMiA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yb2NrZXQuc2V0UG9zaXRpb24ocHAyKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJvY2tldC55ID0gdGhpcy5ub2RlLnkgKiB0aGlzLm5vZGUuc2NhbGVZXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3RNb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJzdE1vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheU1vdmVGbG9vckVmZmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZsb29yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZsb29yLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzVG91Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0TW92ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVEaXMgPSAwO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZsb29yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZsb29yLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzVG91Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0TW92ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5tb3ZlRGlzIDw9IDAgJiYgIXRoaXMuaXNMYXVuY2gpIHtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmlzTGF1bmNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gICAgIC8vIGxldCByID0gTWF0aC5QSSAqIDE4MCAvIHRoaXMucm9ja2V0LmFuZ2xlO1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gbGV0IHggPSBNYXRoLmNvcyhyKTtcclxuICAgICAgICAgICAgLy8gICAgIC8vIGxldCB5ID0gTWF0aC5zaW4ocik7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgcmIgPSB0aGlzLnJvY2tldC5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgLy8gICAgIHJiLmVuYWJsZWRDb250YWN0TGlzdGVuZXIgPSB0cnVlXHJcbiAgICAgICAgICAgIC8vICAgICByYi50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5LaW5lbWF0aWM7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgbGV0IGJveFBoeSA9IHRoaXMucm9ja2V0LmFkZENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xyXG4gICAgICAgICAgICAvLyAgICAgYm94UGh5LnRhZyA9IDMxO1xyXG4gICAgICAgICAgICAvLyAgICAgYm94UGh5LnNpemUud2lkdGg9NjA7XHJcbiAgICAgICAgICAgIC8vICAgICBib3hQaHkuc2l6ZS5oZWlnaHQ9MzA7XHJcbiAgICAgICAgICAgIC8vICAgICBib3hQaHkuYXBwbHkoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyAgICAgbGV0IHYgPSByYi5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgLy8gICAgIHYueCA9IDEwMDAgKiB0aGlzLnJvY2tldC5zY2FsZVgvMztcclxuICAgICAgICAgICAgLy8gICAgIHJiLmxpbmVhclZlbG9jaXR5ID0gdjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB0aGlzLm1vdmVEaXMgPSAwO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaXNUb3VjaCkgcmV0dXJuO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnggPiAtOTk5KSB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnggPiB0aGlzLm5vZGUueCkge1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IHYgPSB0aGlzLnJiLmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgIC8vICAgICAgICAgdi54ID0gMTAwO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==