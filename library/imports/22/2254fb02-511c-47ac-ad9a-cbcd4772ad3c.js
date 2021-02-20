"use strict";
cc._RF.push(module, '2254fsCURxHrK2ay81Hcq08', 'propMoveFloor9');
// script/Game/propMoveFloor9.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var propMoveFloor3 = /** @class */ (function (_super) {
    __extends(propMoveFloor3, _super);
    function propMoveFloor3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.minDistance = 0;
        _this.maxDistance = 0;
        _this.pos = 0;
        _this.floor = null;
        _this.role = null;
        _this.btn = null;
        _this.rb = null;
        _this.btnSelect = null;
        _this.isStop = false;
        return _this;
        // update (dt) {}
    }
    propMoveFloor3.prototype.onInitDistance = function () {
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 15) {
            this.minDistance = -300;
            this.maxDistance = 1;
        }
    };
    propMoveFloor3.prototype.onBeginContact = function (contact, self, other) {
        // cc.log(other.node);
        if (other.node.name == "node_dirty") {
            this.rb.angularVelocity = 0;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    propMoveFloor3.prototype.onLoad = function () {
        this.btn = this.node.parent.getChildByName("btn");
        this.floor = this.node.parent.getChildByName("floor");
        this.rb = this.floor.getComponent(cc.RigidBody);
        this.btnSelect = this.btn.getChildByName("btnSelect");
    };
    propMoveFloor3.prototype.start = function () {
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
            var dis = angle * 0.3;
            if (angle == 0 || angle == -0)
                return;
            // if (dis >= this.minDistance && dis <= this.maxDistance) {
            //     this.floor.x = dis;
            // }
            // this.floor.angle -= dis;
            _this.rb.angularVelocity += dis;
        });
        this.btn.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            _this.btnSelect.active = false;
        });
        this.btn.on(cc.Node.EventType.TOUCH_END, function (event) {
            _this.btnSelect.active = false;
        });
    };
    propMoveFloor3 = __decorate([
        ccclass
    ], propMoveFloor3);
    return propMoveFloor3;
}(cc.Component));
exports.default = propMoveFloor3;

cc._RF.pop();