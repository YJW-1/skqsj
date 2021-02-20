"use strict";
cc._RF.push(module, 'cf038LC4F5NqberSWNnNf5c', 'propMoveFloor16');
// script/Game/propMoveFloor16.ts

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
    // onBeginContact(contact, self, other) {
    //     // cc.log(other.node);
    //     if (other.node.name == "node_dirty") {
    //         this.rb.angularVelocity = 0;
    //     }
    // }
    // LIFE-CYCLE CALLBACKS:
    propMoveFloor3.prototype.onLoad = function () {
        this.btn = this.node.getChildByName("btn");
        this.floor = this.node.getChildByName("wheel");
        this.rb = this.floor.getComponent(cc.RigidBody);
        this.btnSelect = this.btn.getChildByName("btnSelect");
    };
    propMoveFloor3.prototype.start = function () {
        var _this = this;
        this.onInitDistance();
        // this.btn.on(cc.Node.EventType.TOUCH_START, (event:cc.Touch) => {
        //     // let pos2 = this.btn.convertTouchToNodeSpaceAR(event);
        //     // let pos3=this.btn.parent.convertToWorldSpaceAR(event.getLocation())
        //     // let pos2 = this.btn.parent.convertToNodeSpaceAR(pos3);
        //     // let pos = cc.v2((Math.ceil(this.btn.x - pos2.x)), Math.ceil(this.btn.y - pos2.y));
        //     let pos2 = this.node.parent.convertToNodeSpaceAR(event.getLocation());
        //     let pos = cc.v2((this.node.x - pos2.x), this.node.y - pos2.y);
        //     this.pos = pos;
        //     this.btnSelect.active = true;
        // })
        // this.btn.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
        //     // let pos2 = this.btn.convertTouchToNodeSpaceAR(event);
        //     // let pos3=this.btn.parent.convertToWorldSpaceAR(event.getLocation())
        //     // let pos2 = this.btn.parent.convertToNodeSpaceAR(pos3);
        //     // let pos = cc.v2(this.btn.x - pos2.x, this.btn.y - pos2.y);
        //     let pos2 = this.node.parent.convertToNodeSpaceAR(event.getLocation());
        //     let pos = cc.v2(this.node.x - pos2.x, this.node.y - pos2.y);
        //     let hd = pos.signAngle(this.pos);
        //     let angle = Math.ceil(hd / Math.PI * 180);
        //     // cc.log(pos.x, pos.y, this.pos.x, this.pos.y,pos2.x,pos2.y,this.btn.x,this.btn.y);
        //     this.pos = pos;
        //     this.btn.angle -= angle;
        //     if (angle == 0 || angle == -0) return;
        //     let rb = this.floor.getComponent(cc.RigidBody);
        //     rb.angularVelocity = 30 * angle / Math.abs(angle);
        // })
        this.btn.on(cc.Node.EventType.TOUCH_START, function (event) {
            var pp = event.getLocation();
            pp.y += 1600 * CocosZ_1.cocosz.gameMgr.touchNum;
            var pos2 = _this.btn.parent.convertToNodeSpaceAR(pp);
            var pos = cc.v2((Math.ceil(_this.btn.x - pos2.x)), Math.ceil(_this.btn.y - pos2.y));
            _this.pos = pos;
            _this.btnSelect.active = true;
        });
        this.btn.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var pp = event.getLocation();
            pp.y += 1600 * CocosZ_1.cocosz.gameMgr.touchNum;
            var pos2 = _this.btn.parent.convertToNodeSpaceAR(pp);
            var pos = cc.v2(_this.btn.x - pos2.x, _this.btn.y - pos2.y);
            var hd = pos.signAngle(_this.pos);
            var angle = Math.ceil(hd / Math.PI * 180);
            _this.pos = pos;
            _this.btn.angle -= angle;
            if (angle == 0 || angle == -0)
                return;
            var rb = null;
            if (_this.floor) {
                rb = _this.floor.getComponent(cc.RigidBody);
            }
            rb.angularVelocity = 30 * angle / Math.abs(angle);
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