
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/propMoveFloor2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d15ed1yXBMFYlAavCq6DIS', 'propMoveFloor2');
// script/Game/propMoveFloor2.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var propMoveFloor2 = /** @class */ (function (_super) {
    __extends(propMoveFloor2, _super);
    function propMoveFloor2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.minDistance = 0;
        _this.maxDistance = 0;
        _this.pos = 0;
        _this.floor = null;
        _this.role = null;
        _this.btn = null;
        _this.btnSelect = null;
        _this.isStop = false;
        _this.isFirstMove = false;
        return _this;
        // update (dt) {}
    }
    propMoveFloor2.prototype.onInitDistance = function () {
        // let d1 = this.node.parent.getChildByName("limit1").x
        // let d2 = this.node.parent.getChildByName("limit2").x
        // if (this.node.angle == 90) {
        //     d1 = this.node.parent.getChildByName("limit1").y
        //     d2 = this.node.parent.getChildByName("limit2").y
        // }
        // let rope = this.node.parent.getChildByName("rope");
        // if (d1 > d2) {
        //     this.minDistance = d2 + 115;
        //     this.maxDistance = d1 - 115;
        // }
        // else {
        //     this.minDistance = d1 + 115;
        //     this.maxDistance = d2 - 115;
        // }
        if (this.node.angle == 0 || this.node.angle == 180) {
            this.minDistance = this.floor.x;
            this.maxDistance = -this.floor.x;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    propMoveFloor2.prototype.onLoad = function () {
        this.btn = this.node.getChildByName("btn");
        this.floor = this.node.getChildByName("floor");
        this.btnSelect = this.btn.getChildByName("btnSelect");
    };
    propMoveFloor2.prototype.onCollisionEnter = function (other, self) {
    };
    propMoveFloor2.prototype.onCollisionExit = function (other, self) {
    };
    propMoveFloor2.prototype.start = function () {
        var _this = this;
        this.onInitDistance();
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            var pp = event.getLocation();
            pp.y += 1600 * CocosZ_1.cocosz.gameMgr.touchNum;
            var pos2 = _this.node.parent.convertToNodeSpaceAR(pp);
            var pos = cc.v2((Math.ceil(_this.node.x - pos2.x)), Math.ceil(_this.node.y - pos2.y));
            _this.pos = pos;
            _this.btnSelect.active = true;
        });
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var pp = event.getLocation();
            pp.y += 1600 * CocosZ_1.cocosz.gameMgr.touchNum;
            var pos2 = _this.node.parent.convertToNodeSpaceAR(pp);
            var pos = cc.v2(_this.node.x - pos2.x, _this.node.y - pos2.y);
            var hd = pos.signAngle(_this.pos);
            var angle = Math.ceil(hd / Math.PI * 180);
            _this.pos = pos;
            _this.btn.angle -= angle;
            var dis = _this.floor.x + angle * 0.1;
            // cc.log(angle, dis, "-------------angle");
            if (angle == 0 || angle == -0)
                return;
            if (dis >= _this.minDistance && dis <= _this.maxDistance) {
                _this.floor.x = dis;
            }
            return;
            if (_this.node.angle == 0) {
                var dis_1 = _this.pos.x - pos.x;
                _this.pos = pos;
                var x = 0 + _this.node.x;
                if (_this.role) {
                    var pos2_1 = _this.node.convertToWorldSpaceAR(_this.role.getPosition());
                    var pos_1 = _this.node.parent.convertToNodeSpaceAR(pos2_1);
                    // cc.log(this.node.x, pos.x, dis,this.node.y - pos.y);
                    if (_this.isStop && _this.node.y - pos_1.y <= 50) {
                        if (_this.node.x >= pos_1.x && dis_1 > 0) {
                            return;
                        }
                        if (_this.node.x <= pos_1.x && dis_1 < 0) {
                            return;
                        }
                    }
                }
                if (x - dis_1 <= _this.maxDistance && x - dis_1 >= _this.minDistance) {
                    _this.node.x = x - dis_1;
                }
            }
            else {
                var dis_2 = _this.pos.y - pos.y;
                _this.pos = pos;
                var y = 0 + _this.node.y;
                if (_this.role) {
                    var pos2_2 = _this.node.convertToWorldSpaceAR(_this.role.getPosition());
                    var pos_2 = _this.node.parent.convertToNodeSpaceAR(pos2_2);
                    // cc.log(this.node.x, pos.x, dis,this.node.y - pos.y);
                    // if (this.isStop && this.node.y - pos.y <= 50) {
                    //     if (this.node.x >= pos.x && dis > 0) {
                    //         return;
                    //     }
                    //     if (this.node.x <= pos.x && dis < 0) {
                    //         return;
                    //     }
                    // }
                }
                if (y - dis_2 <= _this.maxDistance && y - dis_2 >= _this.minDistance) {
                    _this.node.y = y - dis_2;
                }
            }
        });
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            _this.btnSelect.active = false;
            // this.isFirstMove = false;
        });
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            _this.btnSelect.active = false;
            // this.isFirstMove = false;
        });
    };
    propMoveFloor2 = __decorate([
        ccclass
    ], propMoveFloor2);
    return propMoveFloor2;
}(cc.Component));
exports.default = propMoveFloor2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxwcm9wTW92ZUZsb29yMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQTZDO0FBR3ZDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFEeEQ7UUFBQSxxRUFxSUM7UUFsSUcsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsU0FBRyxHQUFRLENBQUMsQ0FBQztRQUNiLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUNyQixTQUFHLEdBQVksSUFBSSxDQUFDO1FBQ3BCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUN4QixpQkFBVyxHQUFHLEtBQUssQ0FBQzs7UUF5SHBCLGlCQUFpQjtJQUNyQixDQUFDO0lBekhHLHVDQUFjLEdBQWQ7UUFDSSx1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELCtCQUErQjtRQUMvQix1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELElBQUk7UUFDSixzREFBc0Q7UUFDdEQsaUJBQWlCO1FBQ2pCLG1DQUFtQztRQUNuQyxtQ0FBbUM7UUFDbkMsSUFBSTtRQUNKLFNBQVM7UUFDVCxtQ0FBbUM7UUFDbkMsbUNBQW1DO1FBQ25DLElBQUk7UUFDSixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBRUQsd0JBQXdCO0lB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QVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzlCLDRCQUE0QjtRQUNoQyxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxVQUFDLEtBQUs7WUFDNUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzlCLDRCQUE0QjtRQUNoQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFqSWdCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FvSWxDO0lBQUQscUJBQUM7Q0FwSUQsQUFvSUMsQ0FwSTJDLEVBQUUsQ0FBQyxTQUFTLEdBb0l2RDtrQkFwSW9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5pbXBvcnQgQ29uc3RhbnQsIHsgdGFnIH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHByb3BNb3ZlRmxvb3IyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBtaW5EaXN0YW5jZTogbnVtYmVyID0gMDtcclxuICAgIG1heERpc3RhbmNlOiBudW1iZXIgPSAwO1xyXG4gICAgcG9zOiBhbnkgPSAwO1xyXG4gICAgZmxvb3I6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcm9sZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBidG46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgYnRuU2VsZWN0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGlzU3RvcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNGaXJzdE1vdmUgPSBmYWxzZTtcclxuICAgIG9uSW5pdERpc3RhbmNlKCkge1xyXG4gICAgICAgIC8vIGxldCBkMSA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJsaW1pdDFcIikueFxyXG4gICAgICAgIC8vIGxldCBkMiA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJsaW1pdDJcIikueFxyXG4gICAgICAgIC8vIGlmICh0aGlzLm5vZGUuYW5nbGUgPT0gOTApIHtcclxuICAgICAgICAvLyAgICAgZDEgPSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwibGltaXQxXCIpLnlcclxuICAgICAgICAvLyAgICAgZDIgPSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwibGltaXQyXCIpLnlcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gbGV0IHJvcGUgPSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwicm9wZVwiKTtcclxuICAgICAgICAvLyBpZiAoZDEgPiBkMikge1xyXG4gICAgICAgIC8vICAgICB0aGlzLm1pbkRpc3RhbmNlID0gZDIgKyAxMTU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubWF4RGlzdGFuY2UgPSBkMSAtIDExNTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubWluRGlzdGFuY2UgPSBkMSArIDExNTtcclxuICAgICAgICAvLyAgICAgdGhpcy5tYXhEaXN0YW5jZSA9IGQyIC0gMTE1O1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZiAodGhpcy5ub2RlLmFuZ2xlID09IDAgfHwgdGhpcy5ub2RlLmFuZ2xlID09IDE4MCkge1xyXG4gICAgICAgICAgICB0aGlzLm1pbkRpc3RhbmNlID0gdGhpcy5mbG9vci54O1xyXG4gICAgICAgICAgICB0aGlzLm1heERpc3RhbmNlID0gLXRoaXMuZmxvb3IueDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuYnRuID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuXCIpO1xyXG4gICAgICAgIHRoaXMuZmxvb3IgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKTtcclxuICAgICAgICB0aGlzLmJ0blNlbGVjdCA9IHRoaXMuYnRuLmdldENoaWxkQnlOYW1lKFwiYnRuU2VsZWN0XCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XHJcbiAgICB9XHJcbiAgICBvbkNvbGxpc2lvbkV4aXQob3RoZXIsIHNlbGYpIHtcclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMub25Jbml0RGlzdGFuY2UoKVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwcCA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBwcC55ICs9IDE2MDAgKiBjb2Nvc3ouZ2FtZU1nci50b3VjaE51bTtcclxuICAgICAgICAgICAgbGV0IHBvczIgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBwKTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IGNjLnYyKChNYXRoLmNlaWwodGhpcy5ub2RlLnggLSBwb3MyLngpKSwgTWF0aC5jZWlsKHRoaXMubm9kZS55IC0gcG9zMi55KSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgICAgICAgICB0aGlzLmJ0blNlbGVjdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHAgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgcHAueSArPSAxNjAwICogY29jb3N6LmdhbWVNZ3IudG91Y2hOdW07XHJcbiAgICAgICAgICAgIGxldCBwb3MyID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwcCk7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBjYy52Mih0aGlzLm5vZGUueCAtIHBvczIueCwgdGhpcy5ub2RlLnkgLSBwb3MyLnkpO1xyXG4gICAgICAgICAgICBsZXQgaGQgPSBwb3Muc2lnbkFuZ2xlKHRoaXMucG9zKTtcclxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5jZWlsKGhkIC8gTWF0aC5QSSAqIDE4MCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zID0gcG9zO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5idG4uYW5nbGUgLT0gYW5nbGU7XHJcbiAgICAgICAgICAgIGxldCBkaXMgPSB0aGlzLmZsb29yLnggKyBhbmdsZSAqIDAuMTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhhbmdsZSwgZGlzLCBcIi0tLS0tLS0tLS0tLS1hbmdsZVwiKTtcclxuICAgICAgICAgICAgaWYgKGFuZ2xlID09IDAgfHwgYW5nbGUgPT0gLTApIHJldHVyblxyXG4gICAgICAgICAgICBpZiAoZGlzID49IHRoaXMubWluRGlzdGFuY2UgJiYgZGlzIDw9IHRoaXMubWF4RGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmxvb3IueCA9IGRpcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuYW5nbGUgPT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkaXMgPSB0aGlzLnBvcy54IC0gcG9zLng7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvcyA9IHBvcztcclxuICAgICAgICAgICAgICAgIGxldCB4ID0gMCArIHRoaXMubm9kZS54O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm9sZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3MyID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnJvbGUuZ2V0UG9zaXRpb24oKSlcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MyKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2codGhpcy5ub2RlLngsIHBvcy54LCBkaXMsdGhpcy5ub2RlLnkgLSBwb3MueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTdG9wICYmIHRoaXMubm9kZS55IC0gcG9zLnkgPD0gNTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZS54ID49IHBvcy54ICYmIGRpcyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlLnggPD0gcG9zLnggJiYgZGlzIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHggLSBkaXMgPD0gdGhpcy5tYXhEaXN0YW5jZSAmJiB4IC0gZGlzID49IHRoaXMubWluRGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCA9IHggLSBkaXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGRpcyA9IHRoaXMucG9zLnkgLSBwb3MueTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgICAgICAgICAgICAgbGV0IHkgPSAwICsgdGhpcy5ub2RlLnk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yb2xlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvczIgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMucm9sZS5nZXRQb3NpdGlvbigpKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvczIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLm5vZGUueCwgcG9zLngsIGRpcyx0aGlzLm5vZGUueSAtIHBvcy55KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5pc1N0b3AgJiYgdGhpcy5ub2RlLnkgLSBwb3MueSA8PSA1MCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAodGhpcy5ub2RlLnggPj0gcG9zLnggJiYgZGlzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmICh0aGlzLm5vZGUueCA8PSBwb3MueCAmJiBkaXMgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoeSAtIGRpcyA8PSB0aGlzLm1heERpc3RhbmNlICYmIHkgLSBkaXMgPj0gdGhpcy5taW5EaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ID0geSAtIGRpcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuU2VsZWN0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmlzRmlyc3RNb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5idG5TZWxlY3QuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuaXNGaXJzdE1vdmUgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19