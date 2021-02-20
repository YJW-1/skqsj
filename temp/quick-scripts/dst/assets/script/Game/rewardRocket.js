
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/rewardRocket.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '094bdTkyU1B26A9pqX2IYEx', 'rewardRocket');
// script/Game/rewardRocket.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var rewardRocket = /** @class */ (function (_super) {
    __extends(rewardRocket, _super);
    function rewardRocket() {
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
    rewardRocket.prototype.onInitDistance = function () {
        this.minDistance = -435;
        this.maxDistance = 430;
    };
    // LIFE-CYCLE CALLBACKS:
    rewardRocket.prototype.onLoad = function () {
        this.floor = this.node.getChildByName("floor");
        this.rocket = this.node.getChildByName("rocket");
        this.rb = this.node.getComponent(cc.RigidBody);
    };
    rewardRocket.prototype.start = function () {
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
            _this.moveDis = 0;
        });
        this.schedule(function () {
            var node = cc.instantiate(_this.rocket);
            _this.rocket.parent.addChild(node);
            var rb = node.addComponent(cc.RigidBody);
            rb.enabledContactListener = true;
            rb.type = cc.RigidBodyType.Kinematic;
            var boxPhy = node.addComponent(cc.PhysicsBoxCollider);
            boxPhy.tag = 31;
            boxPhy.size.width = 60;
            boxPhy.size.height = 30;
            boxPhy.apply();
            var v = rb.linearVelocity;
            v.y = 1000;
            rb.linearVelocity = v;
        }, 0.3);
    };
    rewardRocket.prototype.update = function (dt) {
        if (CocosZ_1.cocosz.gameMgr.isGameOver) {
            this.unscheduleAllCallbacks();
        }
    };
    rewardRocket = __decorate([
        ccclass
    ], rewardRocket);
    return rewardRocket;
}(cc.Component));
exports.default = rewardRocket;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxyZXdhcmRSb2NrZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7O0FBRWxGLDhDQUE2QztBQUV2QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQTBDLGdDQUFZO0lBRHREO1FBQUEscUVBa0lDO1FBaElHLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLFNBQUcsR0FBUSxDQUFDLENBQUM7UUFDYixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUV4QixhQUFPLEdBQVksS0FBSyxDQUFDO1FBR3pCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsT0FBQyxHQUFXLENBQUMsSUFBSSxDQUFDO1FBRWxCLE9BQUMsR0FBVyxDQUFDLElBQUksQ0FBQztRQUVsQixRQUFFLEdBQWlCLElBQUksQ0FBQTtRQUV2QixpQkFBVyxHQUFHLEtBQUssQ0FBQztRQUVwQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBRXBCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFHdEIsY0FBUSxHQUFZLEtBQUssQ0FBQzs7SUF1RzlCLENBQUM7SUFyR0cscUNBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUE7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUE7SUFDMUIsQ0FBQztJQUVELHdCQUF3QjtJQUV4Qiw2QkFBTSxHQUFOO1FBRUksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMv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LEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUN0RCxNQUFNLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUdmLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDMUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDWCxFQUFFLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUMxQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDWCxDQUFDO0lBRUQsNkJBQU0sR0FBTixVQUFPLEVBQUU7UUFFTCxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQzNCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFBO1NBQ2hDO0lBQ0wsQ0FBQztJQWhJZ0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQWlJaEM7SUFBRCxtQkFBQztDQWpJRCxBQWlJQyxDQWpJeUMsRUFBRSxDQUFDLFNBQVMsR0FpSXJEO2tCQWpJb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29jb3NaXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmV3YXJkUm9ja2V0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIG1pbkRpc3RhbmNlOiBudW1iZXIgPSAwO1xyXG4gICAgbWF4RGlzdGFuY2U6IG51bWJlciA9IDA7XHJcbiAgICBwb3M6IGFueSA9IDA7XHJcbiAgICBmbG9vcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICByb2xlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGlzU3RvcDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGlzVG91Y2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgZW5kUG9zOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHg6IG51bWJlciA9IC05OTk5O1xyXG5cclxuICAgIHk6IG51bWJlciA9IC05OTk5O1xyXG5cclxuICAgIHJiOiBjYy5SaWdpZEJvZHkgPSBudWxsXHJcblxyXG4gICAgaXNGaXJzdE1vdmUgPSBmYWxzZTtcclxuXHJcbiAgICBtb3ZlRGlzOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHJvY2tldDogY2MuTm9kZSA9IG51bGxcclxuXHJcblxyXG4gICAgaXNMYXVuY2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBvbkluaXREaXN0YW5jZSgpIHtcclxuICAgICAgICB0aGlzLm1pbkRpc3RhbmNlID0gLTQzNVxyXG4gICAgICAgIHRoaXMubWF4RGlzdGFuY2UgPSA0MzBcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuZmxvb3IgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKTtcclxuICAgICAgICB0aGlzLnJvY2tldCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInJvY2tldFwiKTtcclxuICAgICAgICB0aGlzLnJiID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMub25Jbml0RGlzdGFuY2UoKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICAgICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImZsb29yXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUb3VjaCA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX1RJUFNfTkVYVClcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuYW5nbGUgPT0gOTApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzID0gdGhpcy5wb3MueCAtIHBvcy54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICAgICAgICAgICAgICBsZXQgeCA9IDAgKyB0aGlzLm5vZGUueDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoeCAtIGRpcyA8PSB0aGlzLm1heERpc3RhbmNlICYmIHggLSBkaXMgPj0gdGhpcy5taW5EaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpcnN0TW92ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3RNb3ZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggPSB4IC0gZGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURpcysrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHRoaXMucG9zLnkgLSBwb3MueTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgICAgICAgICAgICAgbGV0IHkgPSAwICsgdGhpcy5ub2RlLnk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coeSAtIGRpcywgdGhpcy5tYXhEaXN0YW5jZSwgdGhpcy5taW5EaXN0YW5jZSlcclxuICAgICAgICAgICAgICAgIGlmICh5IC0gZGlzIDw9IHRoaXMubWF4RGlzdGFuY2UgJiYgeSAtIGRpcyA+PSB0aGlzLm1pbkRpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSB5IC0gZGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZURpcysrO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBwcCA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgcHAyID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBwKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJvY2tldC5zZXRQb3NpdGlvbihwcDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucm9ja2V0LnkgPSB0aGlzLm5vZGUueSAqIHRoaXMubm9kZS5zY2FsZVlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNGaXJzdE1vdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0ZpcnN0TW92ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmxvb3IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmxvb3IuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pc1RvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdE1vdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlRGlzID0gMDtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5mbG9vcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbG9vci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzVG91Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0TW92ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVEaXMgPSAwO1xyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnJvY2tldCk7XHJcbiAgICAgICAgICAgIHRoaXMucm9ja2V0LnBhcmVudC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgbGV0IHJiID0gbm9kZS5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgcmIuZW5hYmxlZENvbnRhY3RMaXN0ZW5lciA9IHRydWVcclxuICAgICAgICAgICAgcmIudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuS2luZW1hdGljO1xyXG5cclxuICAgICAgICAgICAgbGV0IGJveFBoeSA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcik7XHJcbiAgICAgICAgICAgIGJveFBoeS50YWcgPSAzMTtcclxuICAgICAgICAgICAgYm94UGh5LnNpemUud2lkdGggPSA2MDtcclxuICAgICAgICAgICAgYm94UGh5LnNpemUuaGVpZ2h0ID0gMzA7XHJcbiAgICAgICAgICAgIGJveFBoeS5hcHBseSgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCB2ID0gcmIubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgICAgIHYueSA9IDEwMDA7XHJcbiAgICAgICAgICAgIHJiLmxpbmVhclZlbG9jaXR5ID0gdjtcclxuICAgICAgICB9LCAwLjMpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcblxyXG4gICAgICAgIGlmIChjb2Nvc3ouZ2FtZU1nci5pc0dhbWVPdmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==