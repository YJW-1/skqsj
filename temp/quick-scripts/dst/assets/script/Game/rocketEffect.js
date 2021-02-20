
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/rocketEffect.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fcb70iqEH1AW6a52obWq5EC', 'rocketEffect');
// script/Game/rocketEffect.ts

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
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.onFinish = function () {
        this.node.destroy();
    };
    NewClass.prototype.onBeginContact = function (contact, self, other) {
        // cc.log(other.tag)
        if (CocosZ_1.cocosz.sceneMgr.sceneName == "rewardLevel2") {
            if (other.tag == Constant_1.tag.honeybee) {
                var parent = cc.find("Canvas/rewardLevel/Coin");
                if (other.node.scale == 3.5) {
                    var node_1 = cc.instantiate(cc.find("Canvas/rewardBigBee"));
                    cc.find("Canvas").addChild(node_1);
                    CocosZ_1.cocosz.dataMgr.CoinCount += 300;
                    parent.getChildByName("num").getComponent(cc.Label).string = CocosZ_1.cocosz.dataMgr.CoinCount.toString();
                    node_1.scale = 0;
                    cc.tween(node_1)
                        .to(0.3, { scale: 1 })
                        .delay(0.5)
                        .to(0.2, { scale: 0 })
                        .call(function () {
                        node_1.destroy();
                    })
                        .start();
                    cc.tween(node_1.getChildByName("game_halo_bigbee"))
                        .repeatForever(cc.tween().by(5, { angle: 360 }))
                        .start();
                    other.node.destroy();
                    return;
                }
                var node_2 = cc.instantiate(parent.getChildByName("gold"));
                var pos = other.node.convertToWorldSpaceAR(cc.v2(0, 0));
                var pp = parent.convertToNodeSpaceAR(pos);
                parent.addChild(node_2);
                node_2.setPosition(pp);
                node_2.scale = 0.5;
                CocosZ_1.cocosz.dataMgr.CoinCount += 10;
                parent.getChildByName("num").getComponent(cc.Label).string = CocosZ_1.cocosz.dataMgr.CoinCount.toString();
                var pos2 = cc.v2(-pp.x - 19.766, -pp.y + 3.866);
                cc.tween(node_2)
                    .parallel(cc.tween().by(1, { x: pos2.x }, { easing: 'sineOut' }), cc.tween().sequence(cc.tween().by(0.3, { y: -50 }, { easing: 'sineOut' }), cc.tween().by(0.7, { y: pos2.y + 50 }, { easing: 'sineOut' })))
                    .delay(1)
                    .call(function () {
                    node_2.destroy();
                })
                    .start();
                other.node.destroy();
            }
            contact.disabled = true;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME && CocosZ_1.cocosz.dataMgr.ShockOn) {
            window["wx"].vibrateShort();
            window["wx"].vibrateShort();
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxyb2NrZXRFZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7O0FBRWxGLDhDQUE2QztBQUM3QyxrREFBNEM7QUFFdEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQUFsRDs7SUF1RkEsQ0FBQztJQXJGRywyQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBR0QsaUNBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUMvQixvQkFBb0I7UUFDcEIsSUFBSSxlQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsSUFBSSxjQUFjLEVBQUU7WUFDN0MsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLGNBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQzNCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztnQkFHaEQsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLEVBQUU7b0JBQ3pCLElBQUksTUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7b0JBQzFELEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQUksQ0FBQyxDQUFDO29CQUNqQyxlQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxHQUFHLENBQUM7b0JBQ2hDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMs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LENBQUMsQ0FBQztxQkFDRCxLQUFLLEVBQUUsQ0FBQTtnQkFDWixLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3hCO1lBRUQsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBRUQsd0JBQXdCO0lBRXhCLGVBQWU7SUFFZix3QkFBSyxHQUFMO1FBRUksSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQXBGZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVGNUI7SUFBRCxlQUFDO0NBdkZELEFBdUZDLENBdkZxQyxFQUFFLENBQUMsU0FBUyxHQXVGakQ7a0JBdkZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuaW1wb3J0IHsgdGFnIH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBvbkZpbmlzaCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIC8vIGNjLmxvZyhvdGhlci50YWcpXHJcbiAgICAgICAgaWYgKGNvY29zei5zY2VuZU1nci5zY2VuZU5hbWUgPT0gXCJyZXdhcmRMZXZlbDJcIikge1xyXG4gICAgICAgICAgICBpZiAob3RoZXIudGFnID09IHRhZy5ob25leWJlZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXMvcmV3YXJkTGV2ZWwvQ29pblwiKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG90aGVyLm5vZGUuc2NhbGUgPT0gMy41KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShjYy5maW5kKFwiQ2FudmFzL3Jld2FyZEJpZ0JlZVwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5Db2luQ291bnQgKz0gMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNvY29zei5kYXRhTWdyLkNvaW5Db3VudC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjMsIHsgc2NhbGU6IDEgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuNSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogMCB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlLmdldENoaWxkQnlOYW1lKFwiZ2FtZV9oYWxvX2JpZ2JlZVwiKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoY2MudHdlZW4oKS5ieSg1LCB7IGFuZ2xlOiAzNjAgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG90aGVyLm5vZGUuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJnb2xkXCIpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gb3RoZXIubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBwID0gcGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgICAgICAgICAgICAgIHBhcmVudC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24ocHApO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zY2FsZSA9IDAuNTtcclxuICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkNvaW5Db3VudCArPSAxMDtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNvY29zei5kYXRhTWdyLkNvaW5Db3VudC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBvczIgPSBjYy52MigtcHAueCAtIDE5Ljc2NiwgLXBwLnkgKyAzLjg2NilcclxuXHJcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5wYXJhbGxlbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS5ieSgxLCB7IHg6IHBvczIueCB9LCB7IGVhc2luZzogJ3NpbmVPdXQnIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS5ieSgwLjMsIHsgeTogLTUwIH0sIHsgZWFzaW5nOiAnc2luZU91dCcgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLmJ5KDAuNywgeyB5OiBwb3MyLnkgKyA1MCB9LCB7IGVhc2luZzogJ3NpbmVPdXQnIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDEpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICBvdGhlci5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29udGFjdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG5cclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUgJiYgY29jb3N6LmRhdGFNZ3IuU2hvY2tPbikge1xyXG4gICAgICAgICAgICB3aW5kb3dbXCJ3eFwiXS52aWJyYXRlU2hvcnQoKTtcclxuICAgICAgICAgICAgd2luZG93W1wid3hcIl0udmlicmF0ZVNob3J0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19