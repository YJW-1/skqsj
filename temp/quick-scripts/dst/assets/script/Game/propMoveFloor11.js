
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/propMoveFloor11.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '90f71Vqoe9P/YwshRehtx8J', 'propMoveFloor11');
// script/Game/propMoveFloor11.ts

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
        var d1 = this.node.parent.getChildByName("limit1").y;
        var d2 = this.node.parent.getChildByName("limit2").y;
        var limit = this.node.parent.getChildByName("limit2");
        var scaleX = this.node.parent.getChildByName("limit2").scaleX;
        if (this.node.angle == 90) {
            d1 = this.node.parent.getChildByName("limit1").x;
            d2 = this.node.parent.getChildByName("limit2").x;
        }
        var rope = this.node.parent.getChildByName("rope");
        if (d1 > d2) {
            this.minDistance = d2 + (this.node.width * this.node.scaleX + 30);
            this.maxDistance = d1 - (this.node.width * this.node.scaleX + 30);
        }
        else {
            this.minDistance = d1 + (this.node.width * this.node.scaleX + 30);
            this.maxDistance = d2 - (this.node.width * this.node.scaleX + 30);
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
            _this.floor.active = false;
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
            if (_this.moveDis <= 5 && !_this.isLaunch) {
                _this.isLaunch = true;
                // let r = Math.PI * 180 / this.rocket.angle;
                // let x = Math.cos(r);
                // let y = Math.sin(r);
                var rb = _this.rocket.addComponent(cc.RigidBody);
                rb.enabledContactListener = true;
                rb.type = cc.RigidBodyType.Kinematic;
                var boxPhy = _this.rocket.addComponent(cc.PhysicsBoxCollider);
                boxPhy.tag = 31;
                boxPhy.size.width = 60;
                boxPhy.size.height = 30;
                boxPhy.sensor = true;
                boxPhy.apply();
                var v = rb.linearVelocity;
                v.x = 1000 * _this.rocket.scaleX / 3;
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 38 || CocosZ_1.cocosz.dataMgr.CurLevelId == 121 || (CocosZ_1.cocosz.dataMgr.CurLevelId == 128 && _this.node.angle == 90)) {
                    v.x = 0;
                    v.y = -1000;
                }
                rb.linearVelocity = v;
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxwcm9wTW92ZUZsb29yMTEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUd2QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQTJDLGlDQUFZO0lBRHZEO1FBQUEscUVBcUtDO1FBbktHLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLFNBQUcsR0FBUSxDQUFDLENBQUM7UUFDYixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixhQUFPLEdBQVksS0FBSyxDQUFDO1FBR3pCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsT0FBQyxHQUFXLENBQUMsSUFBSSxDQUFDO1FBRWxCLE9BQUMsR0FBVyxDQUFDLElBQUksQ0FBQztRQUVsQixRQUFFLEdBQWlCLElBQUksQ0FBQTtRQUV2QixpQkFBVyxHQUFHLEtBQUssQ0FBQztRQUVwQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFHdEIsY0FBUSxHQUFZLEtBQUssQ0FBQzs7SUEwSTlCLENBQUM7SUF4SUcsaUNBQVMsR0FBVCxVQUFVLElBQUksRUFBRSxJQUFJO1FBQ2hCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUMvRSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztRQUN2RSxJQUFJLE1BQU0sR0FBRyxlQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDeEQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUlELHNDQUFjLEdBQWQ7UUFDSSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3BELElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDcEQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3JELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUE7UUFDN0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUU7WUFFdkIsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDaEQsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDbkQ7UUFDRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkQsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ1QsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNsRSxJQUFJLENBQUMsV0FB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QUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksR0FBRyxJQUFJLENBQUMsZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksR0FBRyxJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxFQUFFO29CQUNwSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDUixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO2lCQUNmO2dCQUNELEVBQUUsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO2FBQ3pCO1lBQ0QsS0FBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCw0QkFBNEI7UUFDNUIsdUJBQXVCO1FBQ3ZCLGtDQUFrQztRQUNsQywwQ0FBMEM7UUFDMUMscUJBQXFCO1FBQ3JCLFFBQVE7UUFDUixJQUFJO0lBQ1IsQ0FBQztJQW5LZ0IsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQW9LakM7SUFBRCxvQkFBQztDQXBLRCxBQW9LQyxDQXBLMEMsRUFBRSxDQUFDLFNBQVMsR0FvS3REO2tCQXBLb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29jb3NaXCI7XHJcbmltcG9ydCBDb25zdGFudCwgeyB0YWcgfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvbnN0YW50XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJvcE1vdmVGbG9vciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBtaW5EaXN0YW5jZTogbnVtYmVyID0gMDtcclxuICAgIG1heERpc3RhbmNlOiBudW1iZXIgPSAwO1xyXG4gICAgcG9zOiBhbnkgPSAwO1xyXG4gICAgZmxvb3I6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcm9sZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBpc1N0b3A6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBpc1RvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIGVuZFBvczogbnVtYmVyID0gMDtcclxuXHJcbiAgICB4OiBudW1iZXIgPSAtOTk5OTtcclxuXHJcbiAgICB5OiBudW1iZXIgPSAtOTk5OTtcclxuXHJcbiAgICByYjogY2MuUmlnaWRCb2R5ID0gbnVsbFxyXG5cclxuICAgIGlzRmlyc3RNb3ZlID0gZmFsc2U7XHJcblxyXG4gICAgbW92ZURpczogbnVtYmVyID0gMDtcclxuXHJcbiAgICByb2NrZXQ6IGNjLk5vZGUgPSBudWxsXHJcblxyXG5cclxuICAgIGlzTGF1bmNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgb25SYXlDYXN0KG51bTEsIG51bTIpIHtcclxuICAgICAgICBsZXQgc3RhcnRQb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgbGV0IGVuZFBvcyA9IGNjLnYyKHN0YXJ0UG9zLnggKyAxMDAwICogbnVtMSwgc3RhcnRQb3MueSArIDEwMDAgKiBudW0yKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gY29jb3N6LmdhbWVNZ3Iub25SYXlDYXN0KHN0YXJ0UG9zLCBlbmRQb3MpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBvbkluaXREaXN0YW5jZSgpIHtcclxuICAgICAgICBsZXQgZDEgPSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwibGltaXQxXCIpLnlcclxuICAgICAgICBsZXQgZDIgPSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwibGltaXQyXCIpLnlcclxuICAgICAgICBsZXQgbGltaXQgPSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwibGltaXQyXCIpXHJcbiAgICAgICAgbGV0IHNjYWxlWCA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJsaW1pdDJcIikuc2NhbGVYXHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5hbmdsZSA9PSA5MCkge1xyXG5cclxuICAgICAgICAgICAgZDEgPSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwibGltaXQxXCIpLnhcclxuICAgICAgICAgICAgZDIgPSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwibGltaXQyXCIpLnhcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJvcGUgPSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwicm9wZVwiKTtcclxuICAgICAgICBpZiAoZDEgPiBkMikge1xyXG4gICAgICAgICAgICB0aGlzLm1pbkRpc3RhbmNlID0gZDIgKyAodGhpcy5ub2RlLndpZHRoICogdGhpcy5ub2RlLnNjYWxlWCArIDMwKTtcclxuICAgICAgICAgICAgdGhpcy5tYXhEaXN0YW5jZSA9IGQxIC0gKHRoaXMubm9kZS53aWR0aCAqIHRoaXMubm9kZS5zY2FsZVggKyAzMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1pbkRpc3RhbmNlID0gZDEgKyAodGhpcy5ub2RlLndpZHRoICogdGhpcy5ub2RlLnNjYWxlWCArIDMwKTtcclxuICAgICAgICAgICAgdGhpcy5tYXhEaXN0YW5jZSA9IGQyIC0gKHRoaXMubm9kZS53aWR0aCAqIHRoaXMubm9kZS5zY2FsZVggKyAzMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmZsb29yID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZmxvb3JcIik7XHJcbiAgICAgICAgdGhpcy5yb2NrZXQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyb2NrZXRcIik7XHJcbiAgICAgICAgdGhpcy5yYiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMub25Jbml0RGlzdGFuY2UoKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICAgICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImZsb29yXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUb3VjaCA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX1RJUFNfTkVYVClcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuYW5nbGUgPT0gOTApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzID0gdGhpcy5wb3MueCAtIHBvcy54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICAgICAgICAgICAgICBsZXQgeCA9IDAgKyB0aGlzLm5vZGUueDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoeCAtIGRpcyA8PSB0aGlzLm1heERpc3RhbmNlICYmIHggLSBkaXMgPj0gdGhpcy5taW5EaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpcnN0TW92ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3RNb3ZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlNb3ZlRmxvb3JFZmZlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggPSB4IC0gZGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURpcysrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHRoaXMucG9zLnkgLSBwb3MueTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgICAgICAgICAgICAgbGV0IHkgPSAwICsgdGhpcy5ub2RlLnk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coeSAtIGRpcywgdGhpcy5tYXhEaXN0YW5jZSwgdGhpcy5taW5EaXN0YW5jZSlcclxuICAgICAgICAgICAgICAgIGlmICh5IC0gZGlzIDw9IHRoaXMubWF4RGlzdGFuY2UgJiYgeSAtIGRpcyA+PSB0aGlzLm1pbkRpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSB5IC0gZGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURpcysrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBwcCA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgcHAyID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBwKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJvY2tldC5zZXRQb3NpdGlvbihwcDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucm9ja2V0LnkgPSB0aGlzLm5vZGUueSAqIHRoaXMubm9kZS5zY2FsZVlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdE1vdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0ZpcnN0TW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5TW92ZUZsb29yRWZmZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5mbG9vci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc1RvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdE1vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRGlzID0gMDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5mbG9vcikge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZmxvb3IuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pc1RvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdE1vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubW92ZURpcyA8PSA1ICYmICF0aGlzLmlzTGF1bmNoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzTGF1bmNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCByID0gTWF0aC5QSSAqIDE4MCAvIHRoaXMucm9ja2V0LmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IHggPSBNYXRoLmNvcyhyKTtcclxuICAgICAgICAgICAgICAgIC8vIGxldCB5ID0gTWF0aC5zaW4ocik7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmIgPSB0aGlzLnJvY2tldC5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgICAgIHJiLmVuYWJsZWRDb250YWN0TGlzdGVuZXIgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICByYi50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5LaW5lbWF0aWM7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGJveFBoeSA9IHRoaXMucm9ja2V0LmFkZENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xyXG4gICAgICAgICAgICAgICAgYm94UGh5LnRhZyA9IDMxO1xyXG4gICAgICAgICAgICAgICAgYm94UGh5LnNpemUud2lkdGggPSA2MDtcclxuICAgICAgICAgICAgICAgIGJveFBoeS5zaXplLmhlaWdodCA9IDMwO1xyXG4gICAgICAgICAgICAgICAgYm94UGh5LnNlbnNvciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBib3hQaHkuYXBwbHkoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSByYi5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgICAgIHYueCA9IDEwMDAgKiB0aGlzLnJvY2tldC5zY2FsZVggLyAzO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMzggfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMjEgfHwgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTI4ICYmIHRoaXMubm9kZS5hbmdsZSA9PSA5MCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2LnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHYueSA9IC0xMDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmIubGluZWFyVmVsb2NpdHkgPSB2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubW92ZURpcyA9IDA7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5pc1RvdWNoKSByZXR1cm47XHJcbiAgICAgICAgLy8gaWYgKHRoaXMueCA+IC05OTkpIHtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMueCA+IHRoaXMubm9kZS54KSB7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgdiA9IHRoaXMucmIubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgLy8gICAgICAgICB2LnggPSAxMDA7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn1cclxuIl19