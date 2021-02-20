"use strict";
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