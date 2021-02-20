"use strict";
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