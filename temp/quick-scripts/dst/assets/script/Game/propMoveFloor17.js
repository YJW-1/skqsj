
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/propMoveFloor17.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ec730MzOFND+LBEv/Yh5H6+', 'propMoveFloor17');
// script/Game/propMoveFloor17.ts

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
        _this.dis = -1;
        return _this;
    }
    propMoveFloor2.prototype.onInitDistance = function () {
        if (this.node.angle == 0 || this.node.angle == 180 || this.node.angle == 90) {
            this.minDistance = 0;
            this.maxDistance = this.floor.width;
            // this.maxDistance = -this.floor.x;
        }
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 82 || CocosZ_1.cocosz.dataMgr.CurLevelId == 98) {
            this.maxDistance -= this.floor.width * 0.2;
        }
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 90 || CocosZ_1.cocosz.dataMgr.CurLevelId == 97) {
            this.maxDistance -= this.floor.width * 0.4;
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
            if (_this.node.angle == 180) {
                dis = _this.floor.x - angle * 0.1;
            }
            // cc.log(angle, Math.round(dis), this.minDistance, this.maxDistance, Math.round(dis) >= this.minDistance, Math.round(dis) <= this.maxDistance, "-------------angle");
            if (angle == 0 || angle == -0)
                return;
            if ((Math.round(dis) >= _this.minDistance && Math.round(dis) <= _this.maxDistance) || Math.round(dis) == -0) {
                var rb = _this.floor.getComponent(cc.RigidBody);
                var v = rb.linearVelocity;
                v.x += angle * 5;
                // if (this.node.angle == 0) {
                //     v.x = 0;
                //     v.y += angle * 5;
                // }
                rb.linearVelocity = v;
                // let a: number = +dis.toFixed(2)
                // this.dis = this.floor.x - a;
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
    propMoveFloor2.prototype.update = function (dt) {
        var rb = this.floor.getComponent(cc.RigidBody);
        var v = rb.linearVelocity;
        // if (this.floor.x.toFixed(2) == this.dis) {
        if (this.node.angle == 180) {
            if ((this.floor.x <= 0 && v.x > 0) || (this.floor.x >= 167 && v.x < 0)) {
                if (this.floor.x < 0) {
                    this.floor.setPosition(0, this.floor.y);
                }
                else if (this.floor.x > 167) {
                    this.floor.setPosition(167, this.floor.y);
                }
                v.x = 0;
                rb.linearVelocity = v;
            }
        }
        else if (this.node.angle == 0) {
            if ((this.floor.x <= 0 && v.x < 0) || (this.floor.x >= 167 && v.x > 0)) {
                if (this.floor.x < 0) {
                    this.floor.setPosition(0, this.floor.y);
                }
                else if (this.floor.x > 167) {
                    this.floor.setPosition(167, this.floor.y);
                }
                v.x = 0;
                rb.linearVelocity = v;
            }
        }
        else if (this.node.angle == 90) {
            if ((this.floor.x <= 0 && v.x < 0) || (this.floor.x >= 167 && v.x > 0)) {
                if (this.floor.x < 0) {
                    this.floor.setPosition(0, this.floor.y);
                }
                else if (this.floor.x > 167) {
                    this.floor.setPosition(167, this.floor.y);
                }
                v.x = 0;
                rb.linearVelocity = v;
            }
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxwcm9wTW92ZUZsb29yMTcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUd2QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFZO0lBRHhEO1FBQUEscUVBa0xDO1FBL0tHLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLFNBQUcsR0FBUSxDQUFDLENBQUM7UUFDYixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUNwQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFDeEIsaUJBQVcsR0FBRyxLQUFLLENBQUM7UUFDcEIsU0FBRyxHQUFXLENBQUMsQ0FBQyxDQUFDOztJQXNLckIsQ0FBQztJQXJLRyx1Q0FBYyxHQUFkO1FBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRTtZQUN6RSxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3BDLG9DQUFvQztTQUN2QztRQUNELElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksRUFBRSxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUUsRUFBRTtZQUNwRSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztTQUM5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QUMsQ0FBQyxDQUFDO2lCQUM3QztnQkFDRCxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDUixFQUFFLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQzthQUN6QjtTQUNKO0lBQ0wsQ0FBQztJQWhMZ0IsY0FBYztRQURsQyxPQUFPO09BQ2EsY0FBYyxDQWlMbEM7SUFBRCxxQkFBQztDQWpMRCxBQWlMQyxDQWpMMkMsRUFBRSxDQUFDLFNBQVMsR0FpTHZEO2tCQWpMb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29jb3NaXCI7XHJcbmltcG9ydCBDb25zdGFudCwgeyB0YWcgfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvbnN0YW50XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJvcE1vdmVGbG9vcjIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG1pbkRpc3RhbmNlOiBudW1iZXIgPSAwO1xyXG4gICAgbWF4RGlzdGFuY2U6IG51bWJlciA9IDA7XHJcbiAgICBwb3M6IGFueSA9IDA7XHJcbiAgICBmbG9vcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICByb2xlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGJ0bjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBidG5TZWxlY3Q6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgaXNTdG9wOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc0ZpcnN0TW92ZSA9IGZhbHNlO1xyXG4gICAgZGlzOiBudW1iZXIgPSAtMTtcclxuICAgIG9uSW5pdERpc3RhbmNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuYW5nbGUgPT0gMCB8fCB0aGlzLm5vZGUuYW5nbGUgPT0gMTgwIHx8IHRoaXMubm9kZS5hbmdsZSA9PSA5MCkge1xyXG4gICAgICAgICAgICB0aGlzLm1pbkRpc3RhbmNlID0gMDtcclxuICAgICAgICAgICAgdGhpcy5tYXhEaXN0YW5jZSA9IHRoaXMuZmxvb3Iud2lkdGg7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubWF4RGlzdGFuY2UgPSAtdGhpcy5mbG9vci54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA4MiB8fCBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDk4KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF4RGlzdGFuY2UgLT0gdGhpcy5mbG9vci53aWR0aCAqIDAuMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gOTAgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA5Nykge1xyXG4gICAgICAgICAgICB0aGlzLm1heERpc3RhbmNlIC09IHRoaXMuZmxvb3Iud2lkdGggKiAwLjQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmJ0biA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0blwiKTtcclxuICAgICAgICB0aGlzLmZsb29yID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZmxvb3JcIik7XHJcbiAgICAgICAgdGhpcy5idG5TZWxlY3QgPSB0aGlzLmJ0bi5nZXRDaGlsZEJ5TmFtZShcImJ0blNlbGVjdFwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZikge1xyXG4gICAgfVxyXG4gICAgb25Db2xsaXNpb25FeGl0KG90aGVyLCBzZWxmKSB7XHJcbiAgICB9XHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm9uSW5pdERpc3RhbmNlKClcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHAgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICBwcC55ICs9IDE2MDAgKiBjb2Nvc3ouZ2FtZU1nci50b3VjaE51bTtcclxuICAgICAgICAgICAgbGV0IHBvczIgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBwKTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IGNjLnYyKChNYXRoLmNlaWwodGhpcy5ub2RlLnggLSBwb3MyLngpKSwgTWF0aC5jZWlsKHRoaXMubm9kZS55IC0gcG9zMi55KSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zID0gcG9zO1xyXG4gICAgICAgICAgICB0aGlzLmJ0blNlbGVjdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcHAgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICBwcC55ICs9IDE2MDAgKiBjb2Nvc3ouZ2FtZU1nci50b3VjaE51bTtcclxuICAgICAgICAgICAgbGV0IHBvczIgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBwKTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IGNjLnYyKHRoaXMubm9kZS54IC0gcG9zMi54LCB0aGlzLm5vZGUueSAtIHBvczIueSk7XHJcbiAgICAgICAgICAgIGxldCBoZCA9IHBvcy5zaWduQW5nbGUodGhpcy5wb3MpO1xyXG4gICAgICAgICAgICBsZXQgYW5nbGUgPSBNYXRoLmNlaWwoaGQgLyBNYXRoLlBJICogMTgwKTtcclxuICAgICAgICAgICAgdGhpcy5wb3MgPSBwb3M7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ0bi5hbmdsZSAtPSBhbmdsZTtcclxuICAgICAgICAgICAgbGV0IGRpcyA9IHRoaXMuZmxvb3IueCArIGFuZ2xlICogMC4xO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLmFuZ2xlID09IDE4MCkge1xyXG4gICAgICAgICAgICAgICAgZGlzID0gdGhpcy5mbG9vci54IC0gYW5nbGUgKiAwLjFcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gY2MubG9nKGFuZ2xlLCBNYXRoLnJvdW5kKGRpcyksIHRoaXMubWluRGlzdGFuY2UsIHRoaXMubWF4RGlzdGFuY2UsIE1hdGgucm91bmQoZGlzKSA+PSB0aGlzLm1pbkRpc3RhbmNlLCBNYXRoLnJvdW5kKGRpcykgPD0gdGhpcy5tYXhEaXN0YW5jZSwgXCItLS0tLS0tLS0tLS0tYW5nbGVcIik7XHJcbiAgICAgICAgICAgIGlmIChhbmdsZSA9PSAwIHx8IGFuZ2xlID09IC0wKSByZXR1cm5cclxuICAgICAgICAgICAgaWYgKChNYXRoLnJvdW5kKGRpcykgPj0gdGhpcy5taW5EaXN0YW5jZSAmJiBNYXRoLnJvdW5kKGRpcykgPD0gdGhpcy5tYXhEaXN0YW5jZSkgfHwgTWF0aC5yb3VuZChkaXMpID09IC0wKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmIgPSB0aGlzLmZsb29yLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHYgPSByYi5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgICAgIHYueCArPSBhbmdsZSAqIDU7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5ub2RlLmFuZ2xlID09IDApIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB2LnggPSAwO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHYueSArPSBhbmdsZSAqIDU7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICByYi5saW5lYXJWZWxvY2l0eSA9IHY7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgYTogbnVtYmVyID0gK2Rpcy50b0ZpeGVkKDIpXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmRpcyA9IHRoaXMuZmxvb3IueCAtIGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLmFuZ2xlID09IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzID0gdGhpcy5wb3MueCAtIHBvcy54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICAgICAgICAgICAgICBsZXQgeCA9IDAgKyB0aGlzLm5vZGUueDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zMiA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5yb2xlLmdldFBvc2l0aW9uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zMik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKHRoaXMubm9kZS54LCBwb3MueCwgZGlzLHRoaXMubm9kZS55IC0gcG9zLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU3RvcCAmJiB0aGlzLm5vZGUueSAtIHBvcy55IDw9IDUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUueCA+PSBwb3MueCAmJiBkaXMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZS54IDw9IHBvcy54ICYmIGRpcyA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh4IC0gZGlzIDw9IHRoaXMubWF4RGlzdGFuY2UgJiYgeCAtIGRpcyA+PSB0aGlzLm1pbkRpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggPSB4IC0gZGlzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkaXMgPSB0aGlzLnBvcy55IC0gcG9zLnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvcyA9IHBvcztcclxuICAgICAgICAgICAgICAgIGxldCB5ID0gMCArIHRoaXMubm9kZS55O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm9sZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3MyID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLnJvbGUuZ2V0UG9zaXRpb24oKSlcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MyKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2codGhpcy5ub2RlLngsIHBvcy54LCBkaXMsdGhpcy5ub2RlLnkgLSBwb3MueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuaXNTdG9wICYmIHRoaXMubm9kZS55IC0gcG9zLnkgPD0gNTApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHRoaXMubm9kZS54ID49IHBvcy54ICYmIGRpcyA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAodGhpcy5ub2RlLnggPD0gcG9zLnggJiYgZGlzIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHkgLSBkaXMgPD0gdGhpcy5tYXhEaXN0YW5jZSAmJiB5IC0gZGlzID49IHRoaXMubWluRGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSA9IHkgLSBkaXM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJ0blNlbGVjdC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gdGhpcy5pc0ZpcnN0TW92ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuU2VsZWN0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmlzRmlyc3RNb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBsZXQgcmIgPSB0aGlzLmZsb29yLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGxldCB2ID0gcmIubGluZWFyVmVsb2NpdHk7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuZmxvb3IueC50b0ZpeGVkKDIpID09IHRoaXMuZGlzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5hbmdsZSA9PSAxODApIHtcclxuICAgICAgICAgICAgaWYgKCh0aGlzLmZsb29yLnggPD0gMCAmJiB2LnggPiAwKSB8fCAodGhpcy5mbG9vci54ID49IDE2NyAmJiB2LnggPCAwKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmxvb3IueCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZsb29yLnNldFBvc2l0aW9uKDAsIHRoaXMuZmxvb3IueSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmZsb29yLnggPiAxNjcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZsb29yLnNldFBvc2l0aW9uKDE2NywgdGhpcy5mbG9vci55KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHYueCA9IDA7XHJcbiAgICAgICAgICAgICAgICByYi5saW5lYXJWZWxvY2l0eSA9IHY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5ub2RlLmFuZ2xlID09IDApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICgodGhpcy5mbG9vci54IDw9IDAgJiYgdi54IDwgMCkgfHwgKHRoaXMuZmxvb3IueCA+PSAxNjcgJiYgdi54ID4gMCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZsb29yLnggPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mbG9vci5zZXRQb3NpdGlvbigwLCB0aGlzLmZsb29yLnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5mbG9vci54ID4gMTY3KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mbG9vci5zZXRQb3NpdGlvbigxNjcsIHRoaXMuZmxvb3IueSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2LnggPSAwO1xyXG4gICAgICAgICAgICAgICAgcmIubGluZWFyVmVsb2NpdHkgPSB2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMubm9kZS5hbmdsZSA9PSA5MCkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCh0aGlzLmZsb29yLnggPD0gMCAmJiB2LnggPCAwKSB8fCAodGhpcy5mbG9vci54ID49IDE2NyAmJiB2LnggPiAwKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmxvb3IueCA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZsb29yLnNldFBvc2l0aW9uKDAsIHRoaXMuZmxvb3IueSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmZsb29yLnggPiAxNjcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZsb29yLnNldFBvc2l0aW9uKDE2NywgdGhpcy5mbG9vci55KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHYueCA9IDA7XHJcbiAgICAgICAgICAgICAgICByYi5saW5lYXJWZWxvY2l0eSA9IHY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19