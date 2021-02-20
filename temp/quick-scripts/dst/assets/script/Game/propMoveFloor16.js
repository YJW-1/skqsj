
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/propMoveFloor16.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxwcm9wTW92ZUZsb29yMTYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUd2QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQTRDLGtDQUFZO0lBRHhEO1FBQUEscUVBaUhDO1FBOUdHLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLFNBQUcsR0FBUSxDQUFDLENBQUM7UUFDYixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUNwQixRQUFFLEdBQWlCLElBQUksQ0FBQztRQUN4QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLFlBQU0sR0FBWSxLQUFLLENBQUM7O1FBcUd4QixpQkFBaUI7SUFDckIsQ0FBQztJQXJHRyx1Q0FBYyxHQUFkO1FBQ0ksSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxFQUFFLEVBQUU7WUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztTQUN4QjtJQUNMLENBQUM7SUFHRCx5Q0FBeUM7SUFDekMsNkJBQTZCO0lBQzdCLDZDQUE2QztJQUU3Qyx1Q0FBdUM7SUFDdkMsUUFBUTtJQUNSLElBQUk7SUFFSix3QkFBd0I7SUFFeEIsK0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FB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QUFDLENBQUM7Z0JBQUUsT0FBTztZQUN0QyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUE7WUFDYixJQUFJLEtBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ1osRUFBRSxHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM5QztZQUVELEVBQUUsQ0FBQyxlQUFlLEdBQUcsRUFBRSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFVBQUMsS0FBSztZQUM5QyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsVUFBQyxLQUFLO1lBQzNDLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUE3R2dCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FnSGxDO0lBQUQscUJBQUM7Q0FoSEQsQUFnSEMsQ0FoSDJDLEVBQUUsQ0FBQyxTQUFTLEdBZ0h2RDtrQkFoSG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5pbXBvcnQgeyB0YWcgfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvbnN0YW50XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcHJvcE1vdmVGbG9vcjMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIG1pbkRpc3RhbmNlOiBudW1iZXIgPSAwO1xyXG4gICAgbWF4RGlzdGFuY2U6IG51bWJlciA9IDA7XHJcbiAgICBwb3M6IGFueSA9IDA7XHJcbiAgICBmbG9vcjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICByb2xlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGJ0bjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICByYjogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuICAgIGJ0blNlbGVjdDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBpc1N0b3A6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIG9uSW5pdERpc3RhbmNlKCkge1xyXG4gICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDE1KSB7XHJcbiAgICAgICAgICAgIHRoaXMubWluRGlzdGFuY2UgPSAtMzAwO1xyXG4gICAgICAgICAgICB0aGlzLm1heERpc3RhbmNlID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIG9uQmVnaW5Db250YWN0KGNvbnRhY3QsIHNlbGYsIG90aGVyKSB7XHJcbiAgICAvLyAgICAgLy8gY2MubG9nKG90aGVyLm5vZGUpO1xyXG4gICAgLy8gICAgIGlmIChvdGhlci5ub2RlLm5hbWUgPT0gXCJub2RlX2RpcnR5XCIpIHtcclxuXHJcbiAgICAvLyAgICAgICAgIHRoaXMucmIuYW5ndWxhclZlbG9jaXR5ID0gMDtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuYnRuID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYnRuXCIpO1xyXG4gICAgICAgIHRoaXMuZmxvb3IgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ3aGVlbFwiKTtcclxuICAgICAgICB0aGlzLnJiID0gdGhpcy5mbG9vci5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICB0aGlzLmJ0blNlbGVjdCA9IHRoaXMuYnRuLmdldENoaWxkQnlOYW1lKFwiYnRuU2VsZWN0XCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLm9uSW5pdERpc3RhbmNlKClcclxuICAgICAgICAvLyB0aGlzLmJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKGV2ZW50OmNjLlRvdWNoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIC8vIGxldCBwb3MyID0gdGhpcy5idG4uY29udmVydFRvdWNoVG9Ob2RlU3BhY2VBUihldmVudCk7XHJcbiAgICAgICAgLy8gICAgIC8vIGxldCBwb3MzPXRoaXMuYnRuLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSlcclxuICAgICAgICAvLyAgICAgLy8gbGV0IHBvczIgPSB0aGlzLmJ0bi5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zMyk7XHJcbiAgICAgICAgLy8gICAgIC8vIGxldCBwb3MgPSBjYy52MigoTWF0aC5jZWlsKHRoaXMuYnRuLnggLSBwb3MyLngpKSwgTWF0aC5jZWlsKHRoaXMuYnRuLnkgLSBwb3MyLnkpKTtcclxuXHJcbiAgICAgICAgLy8gICAgIGxldCBwb3MyID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihldmVudC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICAvLyAgICAgbGV0IHBvcyA9IGNjLnYyKCh0aGlzLm5vZGUueCAtIHBvczIueCksIHRoaXMubm9kZS55IC0gcG9zMi55KTtcclxuICAgICAgICAvLyAgICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYnRuU2VsZWN0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyB0aGlzLmJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAoZXZlbnQpID0+IHtcclxuXHJcbiAgICAgICAgLy8gICAgIC8vIGxldCBwb3MyID0gdGhpcy5idG4uY29udmVydFRvdWNoVG9Ob2RlU3BhY2VBUihldmVudCk7XHJcblxyXG4gICAgICAgIC8vICAgICAvLyBsZXQgcG9zMz10aGlzLmJ0bi5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpXHJcbiAgICAgICAgLy8gICAgIC8vIGxldCBwb3MyID0gdGhpcy5idG4ucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvczMpO1xyXG4gICAgICAgIC8vICAgICAvLyBsZXQgcG9zID0gY2MudjIodGhpcy5idG4ueCAtIHBvczIueCwgdGhpcy5idG4ueSAtIHBvczIueSk7XHJcblxyXG4gICAgICAgIC8vICAgICBsZXQgcG9zMiA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgLy8gICAgIGxldCBwb3MgPSBjYy52Mih0aGlzLm5vZGUueCAtIHBvczIueCwgdGhpcy5ub2RlLnkgLSBwb3MyLnkpO1xyXG4gICAgICAgIC8vICAgICBsZXQgaGQgPSBwb3Muc2lnbkFuZ2xlKHRoaXMucG9zKTtcclxuICAgICAgICAvLyAgICAgbGV0IGFuZ2xlID0gTWF0aC5jZWlsKGhkIC8gTWF0aC5QSSAqIDE4MCk7XHJcblxyXG4gICAgICAgIC8vICAgICAvLyBjYy5sb2cocG9zLngsIHBvcy55LCB0aGlzLnBvcy54LCB0aGlzLnBvcy55LHBvczIueCxwb3MyLnksdGhpcy5idG4ueCx0aGlzLmJ0bi55KTtcclxuICAgICAgICAvLyAgICAgdGhpcy5wb3MgPSBwb3M7XHJcblxyXG4gICAgICAgIC8vICAgICB0aGlzLmJ0bi5hbmdsZSAtPSBhbmdsZTtcclxuXHJcbiAgICAgICAgLy8gICAgIGlmIChhbmdsZSA9PSAwIHx8IGFuZ2xlID09IC0wKSByZXR1cm47XHJcbiAgICAgICAgLy8gICAgIGxldCByYiA9IHRoaXMuZmxvb3IuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgLy8gICAgIHJiLmFuZ3VsYXJWZWxvY2l0eSA9IDMwICogYW5nbGUgLyBNYXRoLmFicyhhbmdsZSk7XHJcbiAgICAgICAgLy8gfSlcclxuXHJcblxyXG4gICAgICAgIHRoaXMuYnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBwID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIHBwLnkgKz0gMTYwMCAqIGNvY29zei5nYW1lTWdyLnRvdWNoTnVtO1xyXG4gICAgICAgICAgICBsZXQgcG9zMiA9IHRoaXMuYnRuLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwcCk7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBjYy52MigoTWF0aC5jZWlsKHRoaXMuYnRuLnggLSBwb3MyLngpKSwgTWF0aC5jZWlsKHRoaXMuYnRuLnkgLSBwb3MyLnkpKTtcclxuICAgICAgICAgICAgdGhpcy5wb3MgPSBwb3M7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuU2VsZWN0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IHBwID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgICAgICAgcHAueSArPSAxNjAwICogY29jb3N6LmdhbWVNZ3IudG91Y2hOdW07XHJcbiAgICAgICAgICAgIGxldCBwb3MyID0gdGhpcy5idG4ucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBwKTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IGNjLnYyKHRoaXMuYnRuLnggLSBwb3MyLngsIHRoaXMuYnRuLnkgLSBwb3MyLnkpO1xyXG4gICAgICAgICAgICBsZXQgaGQgPSBwb3Muc2lnbkFuZ2xlKHRoaXMucG9zKTtcclxuICAgICAgICAgICAgbGV0IGFuZ2xlID0gTWF0aC5jZWlsKGhkIC8gTWF0aC5QSSAqIDE4MCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zID0gcG9zO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5idG4uYW5nbGUgLT0gYW5nbGU7XHJcblxyXG4gICAgICAgICAgICBpZiAoYW5nbGUgPT0gMCB8fCBhbmdsZSA9PSAtMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBsZXQgcmIgPSBudWxsXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZsb29yKSB7XHJcbiAgICAgICAgICAgICAgICByYiA9IHRoaXMuZmxvb3IuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJiLmFuZ3VsYXJWZWxvY2l0eSA9IDMwICogYW5nbGUgLyBNYXRoLmFicyhhbmdsZSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGhpcy5idG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5idG5TZWxlY3QuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJ0blNlbGVjdC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19