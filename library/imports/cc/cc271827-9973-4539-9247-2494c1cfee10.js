"use strict";
cc._RF.push(module, 'cc271gnmXNFOZJHJJTBz+4Q', 'propMoveFloor12');
// script/Game/propMoveFloor12.ts

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
        _this.btn = null;
        _this.btnSelect = null;
        _this.isStop = false;
        _this.isFirstMove = false;
        return _this;
    }
    propMoveFloor.prototype.onInitDistance = function () {
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 5) {
            this.minDistance = -158;
            this.maxDistance = -70;
        }
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 114 || CocosZ_1.cocosz.dataMgr.CurLevelId == 115 || CocosZ_1.cocosz.dataMgr.CurLevelId == 117) {
            this.minDistance = -175;
            this.maxDistance = -20;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    propMoveFloor.prototype.onLoad = function () {
        this.btn = this.node.getChildByName("btn");
        this.floor = this.node.getChildByName("floor");
        this.btnSelect = this.btn.getChildByName("btnSelect");
        cc.log(this.floor.x, this.floor.y);
    };
    propMoveFloor.prototype.start = function () {
        var _this = this;
        this.onInitDistance();
        this.btn.on(cc.Node.EventType.TOUCH_START, function (event) {
            var pos2 = _this.node.parent.convertToNodeSpaceAR(event.getLocation());
            var pos = cc.v2((Math.ceil(_this.node.x - pos2.x)), Math.ceil(_this.node.y - pos2.y));
            _this.pos = pos;
            _this.btnSelect.active = true;
        });
        this.btn.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var pos2 = _this.node.parent.convertToNodeSpaceAR(event.getLocation());
            var pos = cc.v2(_this.node.x - pos2.x, _this.node.y - pos2.y);
            var hd = pos.signAngle(_this.pos);
            var angle = Math.ceil(hd / Math.PI * 180);
            _this.pos = pos;
            _this.btn.angle -= angle;
            var dis = 0;
            if (_this.floor) {
                dis = _this.floor.y + angle * 0.1;
            }
            // cc.log(angle, dis, this.floor.y, "-------------angle");
            if (angle == 0 || angle == -0)
                return;
            if (dis >= _this.minDistance && dis <= _this.maxDistance) {
                if (_this.floor) {
                    _this.floor.y = dis;
                }
            }
        });
        this.btn.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            _this.btnSelect.active = false;
        });
        this.btn.on(cc.Node.EventType.TOUCH_END, function (event) {
            _this.btnSelect.active = false;
        });
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 5) {
            this.node.getChildByName("direction").scaleX *= -1;
        }
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