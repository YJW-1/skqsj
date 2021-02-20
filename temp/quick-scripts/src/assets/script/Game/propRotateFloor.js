"use strict";
cc._RF.push(module, '40496lkSGxEooXkFLCc4CQ5', 'propRotateFloor');
// script/Game/propRotateFloor.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var propMoveFloor10 = /** @class */ (function (_super) {
    __extends(propMoveFloor10, _super);
    function propMoveFloor10() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.minAngle = 0;
        _this.maxAngle = 0;
        _this.pos = 0;
        _this.floor = null;
        _this.role = null;
        _this.btn = null;
        _this.btnSelect = null;
        _this.isStop = false;
        return _this;
        // update (dt) {}
    }
    propMoveFloor10.prototype.onInitDistance = function () {
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 44) {
            this.minAngle = -55;
            this.maxAngle = 90;
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 74) {
            this.minAngle = -180;
            this.maxAngle = -90;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    propMoveFloor10.prototype.onLoad = function () {
        this.btnSelect = this.node.getChildByName("btn").getChildByName("btnSelect");
        this.btn = this.node.getChildByName("btn");
        this.floor = this.node.getChildByName("floor");
    };
    propMoveFloor10.prototype.start = function () {
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
            // cc.log(pos.x, pos.y, angle)
            if (angle == 0 || angle == -0)
                return;
            if (CocosZ_1.cocosz.dataMgr.CurLevelId == 44 || CocosZ_1.cocosz.dataMgr.CurLevelId == 74) {
                // cc.log(this.floor.angle, this.minAngle, this.maxAngle, angle)
                if (_this.floor) {
                    if ((_this.floor.angle <= _this.minAngle && angle > 0) || (_this.floor.angle >= _this.maxAngle && angle < 0))
                        return;
                }
            }
            var rb = null;
            if (_this.floor) {
                rb = _this.floor.getComponent(cc.RigidBody);
            }
            rb.angularVelocity = 30 * angle / Math.abs(angle);
            // if (cocosz.dataMgr.CurLevelId == 85) {
            //     rb.angularVelocity = 70 * angle / Math.abs(angle);
            // }
            // cc.log(angle, rb.angularVelocity, "----------")
        });
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            _this.btnSelect.active = false;
        });
        this.node.on(cc.Node.EventType.TOUCH_END, function (event) {
            _this.btnSelect.active = false;
        });
    };
    propMoveFloor10 = __decorate([
        ccclass
    ], propMoveFloor10);
    return propMoveFloor10;
}(cc.Component));
exports.default = propMoveFloor10;

cc._RF.pop();