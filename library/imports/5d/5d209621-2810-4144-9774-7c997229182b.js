"use strict";
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