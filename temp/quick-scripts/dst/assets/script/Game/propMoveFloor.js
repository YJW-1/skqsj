
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/propMoveFloor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b3b2ur1NdLB5D8SbdA/Xsy', 'propMoveFloor');
// script/Game/propMoveFloor.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
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
        return _this;
    }
    propMoveFloor.prototype.onRayCast = function (num1, num2) {
        var startPos = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
        var endPos = cc.v2(startPos.x + 1000 * num1, startPos.y + 1000 * num2);
        var result = CocosZ_1.cocosz.gameMgr.onRayCast(startPos, endPos);
        return result;
    };
    propMoveFloor.prototype.onInitDistance = function () {
        var d1 = this.node.parent.getChildByName("limit1").x;
        var d2 = this.node.parent.getChildByName("limit2").x;
        if (this.node.angle == 90) {
            d1 = this.node.parent.getChildByName("limit1").y;
            d2 = this.node.parent.getChildByName("limit2").y;
        }
        var rope = this.node.parent.getChildByName("rope");
        if (d1 > d2) {
            // this.minDistance = d2 + (50 * (this.node.scaleX / 2) * (rope.scaleX / 2));
            // this.maxDistance = d1 - (50 * (this.node.scaleX / 2) * (rope.scaleX / 2));
            this.minDistance = d2 + 115;
            this.maxDistance = d1 - 115;
            if (this.node.scale == 1.5) {
                this.minDistance = d2 + 115 - 18;
                this.maxDistance = d1 - 115 + 18;
            }
        }
        else {
            // this.minDistance = d1 + (50 * (this.node.scaleX / 2) * (rope.scaleX / 2));
            // this.maxDistance = d2 - (50 * (this.node.scaleX / 2) * (rope.scaleX / 2));
            this.minDistance = d1 + 115;
            this.maxDistance = d2 - 115;
            if (this.node.scale == 1.5) {
                this.minDistance = d1 + 115 - 18;
                this.maxDistance = d2 - 115 + 18;
            }
        }
    };
    // LIFE-CYCLE CALLBACKS:
    propMoveFloor.prototype.onLoad = function () {
        this.floor = this.node.getChildByName("floor");
        this.rb = this.node.getComponent(cc.RigidBody);
        // if (cocosz.dataMgr.CurLevelId == 79) {
        //     let a = this.node.getComponent(cc.PhysicsBoxCollider);
        //     a.friction = 200;
        //     a.apply();
        // }
    };
    // onBeginContact(contact, self, other) {
    //     cc.log(other.tag, self.tag)
    //     if (other.tag == tag.player || other.tag == tag.rope || other.tag == tag.balloon) {
    //         this.isStop = true;
    //     }
    // }
    // onEndContact(contact, self, other) {
    //     cc.log(other.tag, self.tag)
    //     if (other.tag == tag.player || other.tag == tag.rope || other.tag == tag.balloon) {
    //         this.isStop = false;
    //     }
    // }  
    propMoveFloor.prototype.onCollisionEnter = function (other, self) {
        // cc.log("-----------碰撞进入--", other.tag)
        if (other.tag == Constant_1.tag.player || other.tag == Constant_1.tag.rope || other.tag == Constant_1.tag.balloon || other.tag == Constant_1.tag.balloon2) {
            if (other.tag == Constant_1.tag.player) {
                // cc.log(other.node, other.node.parent.name == "role", other.node.parent.parent.name == "role", other.node.parent.parent.parent.name == "role");
                if (other.node.parent.name == "role") {
                    this.role = other.node.parent.getChildByName("body");
                }
                else if (other.node.parent.parent.name == "role") {
                    this.role = other.node.parent.parent.getChildByName("body");
                }
                else if (other.node.parent.parent.parent.name == "role") {
                    this.role = other.node.parent.parent.parent.getChildByName("body");
                }
            }
            // cc.log(this.role)
            this.isStop = true;
        }
    };
    propMoveFloor.prototype.onCollisionExit = function (other, self) {
        // cc.log("-----------碰撞离开--")
        if (other.tag == Constant_1.tag.player || other.tag == Constant_1.tag.rope || other.tag == Constant_1.tag.balloon || other.tag == Constant_1.tag.balloon2) {
            this.isStop = false;
        }
    };
    propMoveFloor.prototype.start = function () {
        var _this = this;
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 14)
            return;
        this.onInitDistance();
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            var pos = _this.node.parent.convertToNodeSpaceAR(event.getLocation());
            _this.pos = pos;
            _this.node.getChildByName("floor").active = true;
            _this.isTouch = true;
        });
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            // cc.log("000000000000000000")
            cc.game.emit(Constant_1.default.E_TIPS_NEXT);
            var pos = _this.node.parent.convertToNodeSpaceAR(event.getLocation());
            if (_this.node.angle == 0) {
                var dis = _this.pos.x - pos.x;
                _this.pos = pos;
                var x = 0 + _this.node.x;
                if (x - dis <= _this.maxDistance && x - dis >= _this.minDistance) {
                    var result = null;
                    if (dis < 0) {
                        result = _this.onRayCast(1, 0);
                        // if (result) {
                        //     let point = result[0].point;
                        //     let pos = this.node.parent.convertToNodeSpaceAR(point);
                        //     if (Math.abs(this.node.x - pos.x) < (this.node.width / 2 * 1.8)) return;
                        // }
                    }
                    else if (dis > 0) {
                        result = _this.onRayCast(-1, 0);
                    }
                    if (result) {
                        var point = result[0].point;
                        var pos_1 = _this.node.parent.convertToNodeSpaceAR(point);
                        if (Math.abs(_this.node.x - pos_1.x) < (_this.node.width / 2 * 1.8))
                            return;
                    }
                    if (!_this.isFirstMove) {
                        _this.isFirstMove = true;
                        CocosZ_1.cocosz.audioMgr.playMoveFloorEffect();
                    }
                    _this.node.x = x - dis;
                    // this.x = x - dis
                }
            }
            else {
                var dis = _this.pos.y - pos.y;
                _this.pos = pos;
                var y = 0 + _this.node.y;
                if (_this.role) {
                    var pos2 = _this.node.convertToWorldSpaceAR(_this.role.getPosition());
                    var pos_2 = _this.node.parent.convertToNodeSpaceAR(pos2);
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
                // cc.log(y - dis, this.maxDistance, this.minDistance)
                if (y - dis <= _this.maxDistance && y - dis >= _this.minDistance) {
                    _this.node.y = y - dis;
                    if (!_this.isFirstMove) {
                        _this.isFirstMove = true;
                        CocosZ_1.cocosz.audioMgr.playMoveFloorEffect();
                    }
                    // this.y = y - dis
                }
            }
        });
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            if (_this.floor) {
                _this.floor.active = false;
            }
            _this.isTouch = false;
            _this.isFirstMove = false;
        });
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            if (_this.floor) {
                _this.floor.active = false;
            }
            _this.isTouch = false;
            _this.isFirstMove = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxwcm9wTW92ZUZsb29yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBNkM7QUFDN0Msa0RBQXNEO0FBRWhELElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBMkMsaUNBQVk7SUFEdkQ7UUFBQSxxRUE0TkM7UUF6TkcsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsU0FBRyxHQUFRLENBQUMsQ0FBQztRQUNiLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUNyQixZQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFHekIsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUVuQixPQUFDLEdBQVcsQ0FBQyxJQUFJLENBQUM7UUFFbEIsT0FBQyxHQUFXLENBQUMsSUFBSSxDQUFDO1FBRWxCLFFBQUUsR0FBaUIsSUFBSSxDQUFBO1FBRXZCLGlCQUFXLEdBQUcsS0FBSyxDQUFBOztJQXVNdkIsQ0FBQztJQXRNRyxpQ0FBUyxHQUFULFVBQVUsSUFBSSxFQUFFLElBQUk7UUFDaEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQy9FLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3ZFLElBQUksTUFBTSxHQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN4RCxP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QUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFVBQUMsS0FBSztZQUUvQyxJQUFHLEtBQUksQ0FBQyxLQUFLLEVBQUM7Z0JBQ1YsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQzdCO1lBQ0QsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsVUFBQyxLQUFLO1lBQzVDLElBQUcsS0FBSSxDQUFDLEtBQUssRUFBQztnQkFDVixLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDN0I7WUFDRCxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCw4QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLDRCQUE0QjtRQUM1Qix1QkFBdUI7UUFDdkIsa0NBQWtDO1FBQ2xDLDBDQUEwQztRQUMxQyxxQkFBcUI7UUFDckIsUUFBUTtRQUNSLElBQUk7SUFDUixDQUFDO0lBMU5nQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBMk5qQztJQUFELG9CQUFDO0NBM05ELEFBMk5DLENBM04wQyxFQUFFLENBQUMsU0FBUyxHQTJOdEQ7a0JBM05vQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuaW1wb3J0IENvbnN0YW50LCB7IHRhZyB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uc3RhbnRcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBwcm9wTW92ZUZsb29yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBtaW5EaXN0YW5jZTogbnVtYmVyID0gMDtcclxuICAgIG1heERpc3RhbmNlOiBudW1iZXIgPSAwO1xyXG4gICAgcG9zOiBhbnkgPSAwO1xyXG4gICAgZmxvb3I6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcm9sZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBpc1N0b3A6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBpc1RvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIGVuZFBvczogbnVtYmVyID0gMDtcclxuXHJcbiAgICB4OiBudW1iZXIgPSAtOTk5OTtcclxuXHJcbiAgICB5OiBudW1iZXIgPSAtOTk5OTtcclxuXHJcbiAgICByYjogY2MuUmlnaWRCb2R5ID0gbnVsbFxyXG5cclxuICAgIGlzRmlyc3RNb3ZlID0gZmFsc2VcclxuICAgIG9uUmF5Q2FzdChudW0xLCBudW0yKSB7XHJcbiAgICAgICAgbGV0IHN0YXJ0UG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5ub2RlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIGxldCBlbmRQb3MgPSBjYy52MihzdGFydFBvcy54ICsgMTAwMCAqIG51bTEsIHN0YXJ0UG9zLnkgKyAxMDAwICogbnVtMik7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGNvY29zei5nYW1lTWdyLm9uUmF5Q2FzdChzdGFydFBvcywgZW5kUG9zKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgb25Jbml0RGlzdGFuY2UoKSB7XHJcbiAgICAgICAgbGV0IGQxID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImxpbWl0MVwiKS54XHJcbiAgICAgICAgbGV0IGQyID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImxpbWl0MlwiKS54XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5hbmdsZSA9PSA5MCkge1xyXG5cclxuICAgICAgICAgICAgZDEgPSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwibGltaXQxXCIpLnlcclxuICAgICAgICAgICAgZDIgPSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwibGltaXQyXCIpLnlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJvcGUgPSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwicm9wZVwiKTtcclxuICAgICAgICBpZiAoZDEgPiBkMikge1xyXG4gICAgICAgICAgICAvLyB0aGlzLm1pbkRpc3RhbmNlID0gZDIgKyAoNTAgKiAodGhpcy5ub2RlLnNjYWxlWCAvIDIpICogKHJvcGUuc2NhbGVYIC8gMikpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm1heERpc3RhbmNlID0gZDEgLSAoNTAgKiAodGhpcy5ub2RlLnNjYWxlWCAvIDIpICogKHJvcGUuc2NhbGVYIC8gMikpO1xyXG4gICAgICAgICAgICB0aGlzLm1pbkRpc3RhbmNlID0gZDIgKyAxMTU7XHJcbiAgICAgICAgICAgIHRoaXMubWF4RGlzdGFuY2UgPSBkMSAtIDExNTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5zY2FsZSA9PSAxLjUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1pbkRpc3RhbmNlID0gZDIgKyAxMTUgLSAxODtcclxuICAgICAgICAgICAgICAgIHRoaXMubWF4RGlzdGFuY2UgPSBkMSAtIDExNSArIDE4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyB0aGlzLm1pbkRpc3RhbmNlID0gZDEgKyAoNTAgKiAodGhpcy5ub2RlLnNjYWxlWCAvIDIpICogKHJvcGUuc2NhbGVYIC8gMikpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm1heERpc3RhbmNlID0gZDIgLSAoNTAgKiAodGhpcy5ub2RlLnNjYWxlWCAvIDIpICogKHJvcGUuc2NhbGVYIC8gMikpO1xyXG4gICAgICAgICAgICB0aGlzLm1pbkRpc3RhbmNlID0gZDEgKyAxMTU7XHJcbiAgICAgICAgICAgIHRoaXMubWF4RGlzdGFuY2UgPSBkMiAtIDExNTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5zY2FsZSA9PSAxLjUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWluRGlzdGFuY2UgPSBkMSArIDExNSAtIDE4O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXhEaXN0YW5jZSA9IGQyIC0gMTE1ICsgMTg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuZmxvb3IgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKTtcclxuICAgICAgICB0aGlzLnJiID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIC8vIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDc5KSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBhID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5QaHlzaWNzQm94Q29sbGlkZXIpO1xyXG4gICAgICAgIC8vICAgICBhLmZyaWN0aW9uID0gMjAwO1xyXG4gICAgICAgIC8vICAgICBhLmFwcGx5KCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgLy8gICAgIGNjLmxvZyhvdGhlci50YWcsIHNlbGYudGFnKVxyXG4gICAgLy8gICAgIGlmIChvdGhlci50YWcgPT0gdGFnLnBsYXllciB8fCBvdGhlci50YWcgPT0gdGFnLnJvcGUgfHwgb3RoZXIudGFnID09IHRhZy5iYWxsb29uKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNTdG9wID0gdHJ1ZTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gb25FbmRDb250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAvLyAgICAgY2MubG9nKG90aGVyLnRhZywgc2VsZi50YWcpXHJcbiAgICAvLyAgICAgaWYgKG90aGVyLnRhZyA9PSB0YWcucGxheWVyIHx8IG90aGVyLnRhZyA9PSB0YWcucm9wZSB8fCBvdGhlci50YWcgPT0gdGFnLmJhbGxvb24pIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5pc1N0b3AgPSBmYWxzZTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9ICBcclxuXHJcbiAgICBvbkNvbGxpc2lvbkVudGVyKG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgLy8gY2MubG9nKFwiLS0tLS0tLS0tLS3norDmkp7ov5vlhaUtLVwiLCBvdGhlci50YWcpXHJcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSB0YWcucGxheWVyIHx8IG90aGVyLnRhZyA9PSB0YWcucm9wZSB8fCBvdGhlci50YWcgPT0gdGFnLmJhbGxvb258fCBvdGhlci50YWcgPT0gdGFnLmJhbGxvb24yKSB7XHJcbiAgICAgICAgICAgIGlmIChvdGhlci50YWcgPT0gdGFnLnBsYXllcikge1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKG90aGVyLm5vZGUsIG90aGVyLm5vZGUucGFyZW50Lm5hbWUgPT0gXCJyb2xlXCIsIG90aGVyLm5vZGUucGFyZW50LnBhcmVudC5uYW1lID09IFwicm9sZVwiLCBvdGhlci5ub2RlLnBhcmVudC5wYXJlbnQucGFyZW50Lm5hbWUgPT0gXCJyb2xlXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKG90aGVyLm5vZGUucGFyZW50Lm5hbWUgPT0gXCJyb2xlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvbGUgPSBvdGhlci5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImJvZHlcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChvdGhlci5ub2RlLnBhcmVudC5wYXJlbnQubmFtZSA9PSBcInJvbGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9sZSA9IG90aGVyLm5vZGUucGFyZW50LnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImJvZHlcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChvdGhlci5ub2RlLnBhcmVudC5wYXJlbnQucGFyZW50Lm5hbWUgPT0gXCJyb2xlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvbGUgPSBvdGhlci5ub2RlLnBhcmVudC5wYXJlbnQucGFyZW50LmdldENoaWxkQnlOYW1lKFwiYm9keVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjYy5sb2codGhpcy5yb2xlKVxyXG4gICAgICAgICAgICB0aGlzLmlzU3RvcCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25Db2xsaXNpb25FeGl0KG90aGVyLCBzZWxmKSB7XHJcbiAgICAgICAgLy8gY2MubG9nKFwiLS0tLS0tLS0tLS3norDmkp7nprvlvIAtLVwiKVxyXG4gICAgICAgIGlmIChvdGhlci50YWcgPT0gdGFnLnBsYXllciB8fCBvdGhlci50YWcgPT0gdGFnLnJvcGUgfHwgb3RoZXIudGFnID09IHRhZy5iYWxsb29ufHwgb3RoZXIudGFnID09IHRhZy5iYWxsb29uMikge1xyXG4gICAgICAgICAgICB0aGlzLmlzU3RvcCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDE0KSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5vbkluaXREaXN0YW5jZSgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnBvcyA9IHBvcztcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiZmxvb3JcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc1RvdWNoID0gdHJ1ZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgLy8gY2MubG9nKFwiMDAwMDAwMDAwMDAwMDAwMDAwXCIpXHJcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX1RJUFNfTkVYVClcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUuYW5nbGUgPT0gMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBkaXMgPSB0aGlzLnBvcy54IC0gcG9zLng7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvcyA9IHBvcztcclxuICAgICAgICAgICAgICAgIGxldCB4ID0gMCArIHRoaXMubm9kZS54O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh4IC0gZGlzIDw9IHRoaXMubWF4RGlzdGFuY2UgJiYgeCAtIGRpcyA+PSB0aGlzLm1pbkRpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IG51bGxcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLm9uUmF5Q2FzdCgxLCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChyZXN1bHQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgcG9pbnQgPSByZXN1bHRbMF0ucG9pbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb2ludCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAoTWF0aC5hYnModGhpcy5ub2RlLnggLSBwb3MueCkgPCAodGhpcy5ub2RlLndpZHRoIC8gMiAqIDEuOCkpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkaXMgPiAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLm9uUmF5Q2FzdCgtMSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9pbnQgPSByZXN1bHRbMF0ucG9pbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvaW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMubm9kZS54IC0gcG9zLngpIDwgKHRoaXMubm9kZS53aWR0aCAvIDIgKiAxLjgpKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0ZpcnN0TW92ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3RNb3ZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlNb3ZlRmxvb3JFZmZlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggPSB4IC0gZGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMueCA9IHggLSBkaXNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzID0gdGhpcy5wb3MueSAtIHBvcy55O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICAgICAgICAgICAgICBsZXQgeSA9IDAgKyB0aGlzLm5vZGUueTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zMiA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5yb2xlLmdldFBvc2l0aW9uKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zMik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKHRoaXMubm9kZS54LCBwb3MueCwgZGlzLHRoaXMubm9kZS55IC0gcG9zLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmlzU3RvcCAmJiB0aGlzLm5vZGUueSAtIHBvcy55IDw9IDUwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmICh0aGlzLm5vZGUueCA+PSBwb3MueCAmJiBkaXMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHRoaXMubm9kZS54IDw9IHBvcy54ICYmIGRpcyA8IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyh5IC0gZGlzLCB0aGlzLm1heERpc3RhbmNlLCB0aGlzLm1pbkRpc3RhbmNlKVxyXG4gICAgICAgICAgICAgICAgaWYgKHkgLSBkaXMgPD0gdGhpcy5tYXhEaXN0YW5jZSAmJiB5IC0gZGlzID49IHRoaXMubWluRGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSA9IHkgLSBkaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzRmlyc3RNb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJzdE1vdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheU1vdmVGbG9vckVmZmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnkgPSB5IC0gZGlzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0aGlzLmZsb29yKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmxvb3IuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pc1RvdWNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNGaXJzdE1vdmUgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChldmVudCkgPT4geyAgXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZmxvb3Ipe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mbG9vci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzVG91Y2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pc0ZpcnN0TW92ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaXNUb3VjaCkgcmV0dXJuO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnggPiAtOTk5KSB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnggPiB0aGlzLm5vZGUueCkge1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IHYgPSB0aGlzLnJiLmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgIC8vICAgICAgICAgdi54ID0gMTAwO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==