
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/propMoveFloor9.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxwcm9wTW92ZUZsb29yOS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQTZDO0FBR3ZDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBNEMsa0NBQVk7SUFEeEQ7UUFBQSxxRUF3RUM7UUFyRUcsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFDeEIsU0FBRyxHQUFRLENBQUMsQ0FBQztRQUNiLFdBQUssR0FBWSxJQUFJLENBQUM7UUFDdEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUNyQixTQUFHLEdBQVksSUFBSSxDQUFDO1FBQ3BCLFFBQUUsR0FBaUIsSUFBSSxDQUFDO1FBQ3hCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsWUFBTSxHQUFZLEtBQUssQ0FBQzs7UUE0RHhCLGlCQUFpQjtJQUNyQixDQUFDO0lBNURHLHVDQUFjLEdBQWQ7UUFDSSxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUdELHVDQUFjLEdBQWQsVUFBZSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDL0Isc0JBQXNCO1FBQ3RCLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksWUFBWSxFQUFFO1lBRWpDLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztTQUMvQjtJQUNMLENBQUM7SUFFRCx3QkFBd0I7SUFFeEIsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUdELDhCQUFLLEdBQUw7UUFBQSxpQkErQkM7UUE5QkcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQUs7WUFDN0MsSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDdEUsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRixLQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNmLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxVQUFDLEtBQUs7WUFDNUMsSUFBSSxJQUFJLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDdEUsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RCxJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzFDLEtBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBRWYsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDO1lBQ3hCLElBQUksR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7WUFFdEIsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUM7Z0JBQUUsT0FBTTtZQUNyQyw0REFBNEQ7WUFDNUQsMEJBQTBCO1lBQzFCLElBQUk7WUFDSiwyQkFBMkI7WUFDM0IsS0FBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLElBQUksR0FBRyxDQUFBO1FBQ2xDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFVBQUMsS0FBSztZQUM5QyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsVUFBQyxLQUFLO1lBQzNDLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFwRWdCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0F1RWxDO0lBQUQscUJBQUM7Q0F2RUQsQUF1RUMsQ0F2RTJDLEVBQUUsQ0FBQyxTQUFTLEdBdUV2RDtrQkF2RW9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5pbXBvcnQgeyB0YWcgfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvbnN0YW50XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJvcE1vdmVGbG9vcjMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG1pbkRpc3RhbmNlOiBudW1iZXIgPSAwO1xyXG4gICAgbWF4RGlzdGFuY2U6IG51bWJlciA9IDA7XHJcbiAgICBwb3M6IGFueSA9IDA7XHJcbiAgICBmbG9vcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICByb2xlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGJ0bjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICByYjogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuICAgIGJ0blNlbGVjdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBpc1N0b3A6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG9uSW5pdERpc3RhbmNlKCkge1xyXG4gICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDE1KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWluRGlzdGFuY2UgPSAtMzAwO1xyXG4gICAgICAgICAgICB0aGlzLm1heERpc3RhbmNlID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAgICAgLy8gY2MubG9nKG90aGVyLm5vZGUpO1xyXG4gICAgICAgIGlmIChvdGhlci5ub2RlLm5hbWUgPT0gXCJub2RlX2RpcnR5XCIpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmIuYW5ndWxhclZlbG9jaXR5ID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuYnRuID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImJ0blwiKTtcclxuICAgICAgICB0aGlzLmZsb29yID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImZsb29yXCIpO1xyXG4gICAgICAgIHRoaXMucmIgPSB0aGlzLmZsb29yLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIHRoaXMuYnRuU2VsZWN0ID0gdGhpcy5idG4uZ2V0Q2hpbGRCeU5hbWUoXCJidG5TZWxlY3RcIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMub25Jbml0RGlzdGFuY2UoKVxyXG4gICAgICAgIHRoaXMuYnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBvczIgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gY2MudjIoKE1hdGguY2VpbCh0aGlzLm5vZGUueCAtIHBvczIueCkpLCBNYXRoLmNlaWwodGhpcy5ub2RlLnkgLSBwb3MyLnkpKTtcclxuICAgICAgICAgICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuU2VsZWN0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBvczIgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgICAgICBsZXQgcG9zID0gY2MudjIodGhpcy5ub2RlLnggLSBwb3MyLngsIHRoaXMubm9kZS55IC0gcG9zMi55KTtcclxuICAgICAgICAgICAgbGV0IGhkID0gcG9zLnNpZ25BbmdsZSh0aGlzLnBvcyk7XHJcbiAgICAgICAgICAgIGxldCBhbmdsZSA9IE1hdGguY2VpbChoZCAvIE1hdGguUEkgKiAxODApO1xyXG4gICAgICAgICAgICB0aGlzLnBvcyA9IHBvcztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnRuLmFuZ2xlIC09IGFuZ2xlO1xyXG4gICAgICAgICAgICBsZXQgZGlzID0gYW5nbGUgKiAwLjM7XHJcblxyXG4gICAgICAgICAgICBpZiAoYW5nbGUgPT0gMCB8fCBhbmdsZSA9PSAtMCkgcmV0dXJuXHJcbiAgICAgICAgICAgIC8vIGlmIChkaXMgPj0gdGhpcy5taW5EaXN0YW5jZSAmJiBkaXMgPD0gdGhpcy5tYXhEaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5mbG9vci54ID0gZGlzO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZmxvb3IuYW5nbGUgLT0gZGlzO1xyXG4gICAgICAgICAgICB0aGlzLnJiLmFuZ3VsYXJWZWxvY2l0eSArPSBkaXNcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuYnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuU2VsZWN0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5idG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5idG5TZWxlY3QuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==