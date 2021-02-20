
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/boom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '21e2a9JhIRJhbJhkiczo7Wy', 'boom');
// script/Game/boom.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boom = null;
        _this.anim = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onFinish = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.node.destroy();
        }, 0.1);
    };
    NewClass.prototype.onBeginContact = function (contact, self, other) {
        cc.log(other.tag);
        if (this.node.scale < 4)
            return;
        if (other.tag == Constant_1.tag.thorn || other.tag == Constant_1.tag.bat || other.tag == Constant_1.tag.rocket || other.tag == Constant_1.tag.honeybee || other.tag == Constant_1.tag.floorThorn ||
            other.tag == Constant_1.tag.cloud || other.tag == Constant_1.tag.wooldenBox || other.tag == Constant_1.tag.laser || other.tag == Constant_1.tag.wooldenBox2 || other.tag == Constant_1.tag.stone3 || other.tag == Constant_1.tag.stone || other.tag == 777) {
            other.node.active = false;
        }
        else if (other.tag == Constant_1.tag.bigFan) {
            var prefab = CocosZ_1.cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
            var node = cc.instantiate(prefab);
            other.node.addChild(node);
            other.node.getComponent("propBigFan").onDamaged();
        }
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        var _this = this;
        cc.tween(this.boom)
            .by(1, { scale: 0.15 })
            .call(function () {
            _this.boom.active = false;
            _this.anim.node.active = true;
            _this.anim.play();
            _this.node.scale = 4;
            _this.node.getComponent(cc.PhysicsCircleCollider).enabled = true;
        })
            .start();
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "boom", void 0);
    __decorate([
        property(cc.Animation)
    ], NewClass.prototype, "anim", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxib29tLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOztBQUVsRiw4Q0FBNkM7QUFDN0Msa0RBQTRDO0FBRXRDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFEbEQ7UUFBQSxxRUFvREM7UUFoREcsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixVQUFJLEdBQWlCLElBQUksQ0FBQzs7UUE2QzFCLGlCQUFpQjtJQUNyQixDQUFDO0lBM0NHLDJCQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3hCLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNYLENBQUM7SUFFRCxpQ0FBYyxHQUFkLFVBQWUsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLO1FBQy9CLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ2pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztZQUFFLE9BQU87UUFDaEMsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLGNBQUcsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxjQUFHLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksY0FBRyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLGNBQUcsQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxjQUFHLENBQUMsVUFBVTtZQUNySSxLQUFLLENBQUMsR0FBRyxJQUFJLGNBQUcsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxjQUFHLENBQUMsVUFBVSxJQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksY0FBRyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLGNBQUcsQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxjQUFHLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksY0FBRyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRTtZQUN6TCxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDN0I7YUFDSSxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksY0FBRyxDQUFDLE1BQU0sRUFBRTtZQUM5QixJQUFJLE1BQU0sR0FBRyxlQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUE7U0FDcEQ7SUFDTCxDQUFDO0lBRUQsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO1FBQUEsaUJBZUM7UUFkRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDZCxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO2FBQ3RCLElBQUksQ0FBQztZQUNGLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN6QixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzdCLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDakIsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO1lBQ25CLEtBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEUsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUE7SUFLaEIsQ0FBQztJQTdDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7MENBQ0c7SUFMVCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBbUQ1QjtJQUFELGVBQUM7Q0FuREQsQUFtREMsQ0FuRHFDLEVBQUUsQ0FBQyxTQUFTLEdBbURqRDtrQkFuRG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5pbXBvcnQgeyB0YWcgfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvbnN0YW50XCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYm9vbTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxyXG4gICAgYW5pbTogY2MuQW5pbWF0aW9uID0gbnVsbDtcclxuXHJcblxyXG4gICAgb25GaW5pc2goKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH0sIDAuMSlcclxuICAgIH1cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIGNjLmxvZyhvdGhlci50YWcpXHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5zY2FsZSA8IDQpIHJldHVybjtcclxuICAgICAgICBpZiAob3RoZXIudGFnID09IHRhZy50aG9ybiB8fCBvdGhlci50YWcgPT0gdGFnLmJhdCB8fCBvdGhlci50YWcgPT0gdGFnLnJvY2tldCB8fCBvdGhlci50YWcgPT0gdGFnLmhvbmV5YmVlIHx8IG90aGVyLnRhZyA9PSB0YWcuZmxvb3JUaG9ybiB8fFxyXG4gICAgICAgICAgICBvdGhlci50YWcgPT0gdGFnLmNsb3VkIHx8IG90aGVyLnRhZyA9PSB0YWcud29vbGRlbkJveHx8IG90aGVyLnRhZyA9PSB0YWcubGFzZXIgfHwgb3RoZXIudGFnID09IHRhZy53b29sZGVuQm94MiB8fCBvdGhlci50YWcgPT0gdGFnLnN0b25lMyB8fCBvdGhlci50YWcgPT0gdGFnLnN0b25lIHx8IG90aGVyLnRhZyA9PSA3NzcpIHtcclxuICAgICAgICAgICAgb3RoZXIubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAob3RoZXIudGFnID09IHRhZy5iaWdGYW4pIHtcclxuICAgICAgICAgICAgbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwicm9ja2V0RWZmZWN0XCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgb3RoZXIubm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgb3RoZXIubm9kZS5nZXRDb21wb25lbnQoXCJwcm9wQmlnRmFuXCIpLm9uRGFtYWdlZCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuYm9vbSlcclxuICAgICAgICAgICAgLmJ5KDEsIHsgc2NhbGU6IDAuMTUgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ib29tLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSA0XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcikuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcblxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19