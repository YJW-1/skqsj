"use strict";
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