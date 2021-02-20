
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/propWooldenBox.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '01a94EVPbdAZYfE916KVhMr', 'propWooldenBox');
// script/Game/propWooldenBox.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.onBeginContact = function (contact, self, other) {
        if (CocosZ_1.cocosz.sceneMgr.sceneName == "Game2") {
            var rb = this.node.getComponent(cc.RigidBody);
            rb.gravityScale = 0.5;
            return;
        }
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 113 && (other.tag == Constant_1.tag.balloon || other.tag == Constant_1.tag.balloon2)) {
            var rb = this.node.getComponent(cc.RigidBody);
            rb.gravityScale = 0.5;
            var v = rb.linearVelocity;
            v.x = 0, v.y = 0;
            rb.linearVelocity = v;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        var _this = this;
        if (CocosZ_1.cocosz.sceneMgr.sceneName == "Game" && this.node.name == "wooldenBox3") {
            var rb = this.node.getComponent(cc.RigidBody);
            rb.gravityScale = 1;
        }
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            if (CocosZ_1.cocosz.dataMgr.CurLevelId == 113 || CocosZ_1.cocosz.dataMgr.CurLevelId == 90) {
                return;
            }
            _this.node.destroy();
            CocosZ_1.cocosz.audioMgr.playBoxEffect();
            var prefab = CocosZ_1.cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            var node = cc.instantiate(prefab);
            _this.node.parent.addChild(node);
            node.setPosition(_this.node.getPosition());
        });
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 73) {
            this.node.getComponent(cc.PhysicsBoxCollider).friction = 0;
            this.node.getComponent(cc.PhysicsBoxCollider).apply();
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 81) {
            this.node.getComponent(cc.RigidBody).gravityScale = 0;
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 115) {
            this.node.getComponent(cc.RigidBody).fixedRotation = true;
        }
    };
    NewClass.prototype.update = function (dt) {
        // if (this.node.y >= 500) {
        //     this.node.destroy();
        // }
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxwcm9wV29vbGRlbkJveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQTZDO0FBQzdDLGtEQUE0QztBQUV0QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBQWxEOztJQThEQSxDQUFDO0lBNURHLGlDQUFjLEdBQWQsVUFBZSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUs7UUFDL0IsSUFBSSxlQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsSUFBSSxPQUFPLEVBQUU7WUFFdEMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlDLEVBQUUsQ0FBQyxZQUFZLEdBQUcsR0FBRyxDQUFDO1lBQ3RCLE9BQU87U0FDVjtRQUNELElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxjQUFHLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksY0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzdGLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM5QyxFQUFFLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztZQUN0QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQzFCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLEVBQUUsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVELHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUFBLGlCQWlDQztRQTlCRyxJQUFJLGVBQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxhQUFhLEVBQUU7WUFDeEUsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzlDLEVBQUUsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFO1lBQ3hDLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksR0FBRyxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUUsRUFBRTtnQkFDckUsT0FBTzthQUNWO1lBRUQsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQixlQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2hDLElBQUksTUFBTSxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDN0QsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNsQyxLQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1lBQzNELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3pEO2FBRUksSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7U0FDekQ7YUFFSSxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEdBQUcsRUFBRTtZQUN2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUM3RDtJQUNMLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLDRCQUE0QjtRQUM1QiwyQkFBMkI7UUFDM0IsSUFBSTtJQUNSLENBQUM7SUE3RGdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E4RDVCO0lBQUQsZUFBQztDQTlERCxBQThEQyxDQTlEcUMsRUFBRSxDQUFDLFNBQVMsR0E4RGpEO2tCQTlEb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29jb3NaXCI7XHJcbmltcG9ydCB7IHRhZyB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uc3RhbnRcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICBpZiAoY29jb3N6LnNjZW5lTWdyLnNjZW5lTmFtZSA9PSBcIkdhbWUyXCIpIHtcclxuXHJcbiAgICAgICAgICAgIGxldCByYiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgcmIuZ3Jhdml0eVNjYWxlID0gMC41O1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDExMyAmJiAob3RoZXIudGFnID09IHRhZy5iYWxsb29uIHx8IG90aGVyLnRhZyA9PSB0YWcuYmFsbG9vbjIpKSB7XHJcbiAgICAgICAgICAgIGxldCByYiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgcmIuZ3Jhdml0eVNjYWxlID0gMC41O1xyXG4gICAgICAgICAgICBsZXQgdiA9IHJiLmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgICAgICB2LnggPSAwLCB2LnkgPSAwO1xyXG4gICAgICAgICAgICByYi5saW5lYXJWZWxvY2l0eSA9IHY7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuXHJcbiAgICAgICAgaWYgKGNvY29zei5zY2VuZU1nci5zY2VuZU5hbWUgPT0gXCJHYW1lXCIgJiYgdGhpcy5ub2RlLm5hbWUgPT0gXCJ3b29sZGVuQm94M1wiKSB7XHJcbiAgICAgICAgICAgIGxldCByYiA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgcmIuZ3Jhdml0eVNjYWxlID0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMTMgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA5MCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheUJveEVmZmVjdCgpO1xyXG4gICAgICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJyb2NrZXRFZmZlY3RcIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHRoaXMubm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA3Mykge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcikuZnJpY3Rpb24gPSAwO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NCb3hDb2xsaWRlcikuYXBwbHkoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2UgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gODEpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmdyYXZpdHlTY2FsZSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDExNSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkuZml4ZWRSb3RhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLm5vZGUueSA+PSA1MDApIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn1cclxuIl19