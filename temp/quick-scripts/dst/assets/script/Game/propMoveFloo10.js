
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/propMoveFloo10.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3a1b2eCM8pKprFl5lxXCwC2', 'propMoveFloo10');
// script/Game/propMoveFloo10.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var propMoveFloor10 = /** @class */ (function (_super) {
    __extends(propMoveFloor10, _super);
    function propMoveFloor10() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.minDistance = 0;
        _this.maxDistance = 0;
        _this.pos = 0;
        _this.floor = null;
        _this.role = null;
        _this.isStop = false;
        return _this;
        // update (dt) {}
    }
    propMoveFloor10.prototype.onInitDistance = function () {
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 13) {
            this.minDistance = -155;
            this.maxDistance = 175;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    propMoveFloor10.prototype.onLoad = function () {
        this.floor = this.node.getChildByName("btn").getChildByName("btnSelect");
    };
    propMoveFloor10.prototype.start = function () {
        var _this = this;
        this.onInitDistance();
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            var pos = _this.node.parent.convertToNodeSpaceAR(event.getLocation());
            _this.pos = pos;
            if (_this.floor) {
                _this.floor.active = true;
            }
        });
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var pos = _this.node.parent.convertToNodeSpaceAR(event.getLocation());
            var dis = _this.pos.y - pos.y;
            _this.pos = pos;
            var y = 0 + _this.node.y;
            // cc.log(y - dis, this.maxDistance, this.minDistance)
            if (y - dis <= _this.maxDistance && y - dis >= _this.minDistance) {
                _this.node.y = y - dis;
            }
        });
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            if (_this.floor) {
                _this.floor.active = false;
            }
        });
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            if (_this.floor) {
                _this.floor.active = false;
            }
        });
    };
    propMoveFloor10 = __decorate([
        ccclass
    ], propMoveFloor10);
    return propMoveFloor10;
}(cc.Component));
exports.default = propMoveFloor10;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxwcm9wTW92ZUZsb28xMC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQTZDO0FBR3ZDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVk7SUFEekQ7UUFBQSxxRUF3REM7UUFyREcsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsU0FBRyxHQUFRLENBQUMsQ0FBQztRQUNiLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUNyQixZQUFNLEdBQVksS0FBSyxDQUFDOztRQStDeEIsaUJBQWlCO0lBQ3JCLENBQUM7SUEvQ0csd0NBQWMsR0FBZDtRQUNJLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBRUQsd0JBQXdCO0lBRXhCLGdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBR0QsK0JBQUssR0FBTDtRQUFBLGlCQThCQztRQTdCRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBSztZQUM5QyxJQUFJLEdBQUcsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUNyRSxLQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNmLElBQUksS0FBSSxDQUFDLEtBQUssRUFBRTtnQkFDWixLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDNUI7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxVQUFDLEtBQUs7WUFDN0MsSUFBSSxHQUFHLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFFckUsSUFBSSxHQUFHLEdBQUcsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM3QixLQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4QixzREFBc0Q7WUFDdEQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEtBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxLQUFJLENBQUMsV0FBVyxFQUFFO2dCQUM1RCxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO2FBQ3pCO1FBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsVUFBQyxLQUFLO1lBQy9DLElBQUksS0FBSSxDQUFDLEtBQUssRUFBRTtnQkFDWixLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDN0I7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxVQUFDLEtBQUs7WUFDNUMsSUFBSSxLQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNaLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUM3QjtRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQXBEZ0IsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQXVEbkM7SUFBRCxzQkFBQztDQXZERCxBQXVEQyxDQXZENEMsRUFBRSxDQUFDLFNBQVMsR0F1RHhEO2tCQXZEb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29jb3NaXCI7XHJcbmltcG9ydCB7IHRhZyB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uc3RhbnRcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwcm9wTW92ZUZsb29yMTAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG1pbkRpc3RhbmNlOiBudW1iZXIgPSAwO1xyXG4gICAgbWF4RGlzdGFuY2U6IG51bWJlciA9IDA7XHJcbiAgICBwb3M6IGFueSA9IDA7XHJcbiAgICBmbG9vcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICByb2xlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGlzU3RvcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgb25Jbml0RGlzdGFuY2UoKSB7XHJcbiAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTMpIHtcclxuICAgICAgICAgICAgdGhpcy5taW5EaXN0YW5jZSA9IC0xNTU7XHJcbiAgICAgICAgICAgIHRoaXMubWF4RGlzdGFuY2UgPSAxNzU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmZsb29yID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuXCIpLmdldENoaWxkQnlOYW1lKFwiYnRuU2VsZWN0XCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm9uSW5pdERpc3RhbmNlKClcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICAgICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZsb29yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZsb29yLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGlzID0gdGhpcy5wb3MueSAtIHBvcy55O1xyXG4gICAgICAgICAgICB0aGlzLnBvcyA9IHBvcztcclxuICAgICAgICAgICAgbGV0IHkgPSAwICsgdGhpcy5ub2RlLnk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyh5IC0gZGlzLCB0aGlzLm1heERpc3RhbmNlLCB0aGlzLm1pbkRpc3RhbmNlKVxyXG4gICAgICAgICAgICBpZiAoeSAtIGRpcyA8PSB0aGlzLm1heERpc3RhbmNlICYmIHkgLSBkaXMgPj0gdGhpcy5taW5EaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSB5IC0gZGlzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmxvb3IpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmxvb3IuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5mbG9vcikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbG9vci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=