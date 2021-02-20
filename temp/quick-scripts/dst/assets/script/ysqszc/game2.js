
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ysqszc/game2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'db634D3HsBJUKj/tMSoN4cp', 'game2');
// script/ysqszc/game2.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var UiGame_1 = require("../Ui/UiGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var game2 = /** @class */ (function (_super) {
    __extends(game2, _super);
    function game2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.ui = null;
        _this.gameBg = null;
        _this.startGame = null;
        _this.listen = null;
        _this.handTips = null;
        _this.stone = null;
        _this.handStartPos = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    game2.prototype.start = function () {
        // this.schedule(() => {
        // let stone = cocosz.resMgr.getRes("stone", cc.Prefab);
        // let node = cc.instantiate(stone);
        // node.setPosition(cc.v2(0, 0))
        // node.getComponent(cc.RigidBody).gravityScale = 0;
        // this.node.addChild(node);
        // }, 2)
        var _this = this;
        cc.log(CocosZ_1.cocosz.dataMgr.isNovice, "cocosz.dataMgr.isNovice");
        // if (+cocosz.dataMgr.isNovice == 0) {
        this.startGame.getComponent(cc.Label).string = "       向指示方向滑动";
        this.handStartPos = this.handTips.getPosition();
        cc.tween(this.handTips)
            .repeatForever(cc.tween().sequence(cc.tween().call(function () {
            _this.handTips.setPosition(_this.handStartPos);
        }), cc.tween().to(0.3, { opacity: 255 }), cc.tween().by(1, { x: -150 }), cc.tween().to(0.3, { opacity: 0 }), cc.tween().delay(2)))
            .start();
        // }
        // else {
        //     this.handTips.active = false;
        //     this.stone.active = false;
        // }
        if (CocosZ_1.cocosz.gameMgr.isGame2Resurrection) {
            CocosZ_1.cocosz.gameMgr.isGame2Resurrection = false;
        }
        else {
            CocosZ_1.cocosz.gameMgr.curGame2LevelID = 0;
        }
        cc.game.on(Constant_1.default.E_GAME_START, function () {
            window.onGameEvent(4, "无尽关卡开始");
            // if (+cocosz.dataMgr.isNovice == 0) {
            CocosZ_1.cocosz.dataMgr.isNovice = "1";
            _this.handTips.active = false;
            // }
            _this.listen.active = false;
            _this.startGame.active = false;
            UiGame_1.uiGame.onStartGame();
            var num = Math.floor(Math.random() * 20) + 1;
            num = CocosZ_1.cocosz.dataMgr.Game2LevelList;
            CocosZ_1.cocosz.gameMgr.curLevelJson = num;
            cc.log(num);
            var prefab = CocosZ_1.cocosz.resMgr.getRes("levelMgr", cc.Prefab);
            var level = cc.instantiate(prefab);
            level.getComponent("levelNum").curLevel = num;
            _this.node.addChild(level);
            CocosZ_1.cocosz.gameMgr.curGame2LevelID++;
            _this.ui.y = _this.camera.y;
            _this.gameBg.y = _this.camera.y;
            _this.schedule(function () {
                CocosZ_1.cocosz.gameMgr.curGame2LevelID++;
                var num = Math.floor(Math.random() * 20) + 1;
                num = CocosZ_1.cocosz.dataMgr.Game2LevelList;
                CocosZ_1.cocosz.gameMgr.curLevelJson = num;
                cc.log(num);
                var prefab = CocosZ_1.cocosz.resMgr.getRes("levelMgr", cc.Prefab);
                var level = cc.instantiate(prefab);
                level.getComponent("levelNum").curLevel = num;
                _this.node.addChild(level);
            }, 18);
            cc.game.off(Constant_1.default.E_GAME_START);
        }, this);
        cc.tween(this.startGame)
            .repeatForever(cc.tween().sequence(cc.tween().by(0.3, { scale: 0.1 }), cc.tween().by(0.3, { scale: -0.1 })))
            .start();
    };
    game2.prototype.update = function (dt) {
        if (CocosZ_1.cocosz.gameMgr.isGameOver) {
            // for (let child of this.node.children) {
            //     if (child.name == "levelMgr") {
            //         child.destroy();
            //     }
            // }
            this.unscheduleAllCallbacks();
            return;
        }
    };
    __decorate([
        property(cc.Node)
    ], game2.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], game2.prototype, "ui", void 0);
    __decorate([
        property(cc.Node)
    ], game2.prototype, "gameBg", void 0);
    __decorate([
        property(cc.Node)
    ], game2.prototype, "startGame", void 0);
    __decorate([
        property(cc.Node)
    ], game2.prototype, "listen", void 0);
    __decorate([
        property(cc.Node)
    ], game2.prototype, "handTips", void 0);
    __decorate([
        property(cc.Node)
    ], game2.prototype, "stone", void 0);
    game2 = __decorate([
        ccclass
    ], game2);
    return game2;
}(cc.Component));
exports.default = game2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx5c3FzemNcXGdhbWUyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSw4Q0FBNkM7QUFDN0Msa0RBQTZDO0FBQzdDLHVDQUFzQztBQUVoQyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW1DLHlCQUFZO0lBRC9DO1FBQUEscUVBZ0pDO1FBN0lHLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUduQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBSXZCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBSXpCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsa0JBQVksR0FBUSxJQUFJLENBQUM7O0lBdUg3QixDQUFDO0lBdEhHLHdCQUF3QjtJQUV4QixlQUFlO0lBRWYscUJBQUssR0FBTDtRQUNJLHdCQUF3QjtRQUN4Qix3REFBd0Q7UUFDeEQsb0NBQW9DO1FBQ3BDLGdDQUFnQztRQUNoQyxvREFBb0Q7UUFDcEQsNEJBQTRCO1FBQzVCLFFBQVE7UUFQWixpQkFxR0M7UUExRkcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDO1FBRTNELHVDQUF1QztRQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDO1FBQ2hFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoRCxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDbEIsYUFBYSxDQUNWLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxR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QUEwQztZQUMxQyxzQ0FBc0M7WUFDdEMsMkJBQTJCO1lBQzNCLFFBQVE7WUFDUixJQUFJO1lBQ0osSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFDOUIsT0FBTTtTQUNUO0lBQ0wsQ0FBQztJQTVJRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cUNBQ0M7SUFHbkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDSztJQUl2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNRO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDTztJQUl6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUNJO0lBdEJMLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0ErSXpCO0lBQUQsWUFBQztDQS9JRCxBQStJQyxDQS9Ja0MsRUFBRSxDQUFDLFNBQVMsR0ErSTlDO2tCQS9Jb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRpbWVTdGFtcCB9IGZyb20gXCJjb25zb2xlXCI7XHJcbmltcG9ydCB7IE9fQ1JFQVQgfSBmcm9tIFwiY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IGNoZGlyIH0gZnJvbSBcInByb2Nlc3NcIjtcclxuaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuaW1wb3J0IENvbnN0YW50IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uc3RhbnRcIjtcclxuaW1wb3J0IHsgdWlHYW1lIH0gZnJvbSBcIi4uL1VpL1VpR2FtZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGdhbWUyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgY2FtZXJhOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHVpOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGdhbWVCZzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc3RhcnRHYW1lOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGxpc3RlbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBoYW5kVGlwczogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgc3RvbmU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIGhhbmRTdGFydFBvczogYW55ID0gbnVsbDtcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgIC8vIGxldCBzdG9uZSA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwic3RvbmVcIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICAvLyBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHN0b25lKTtcclxuICAgICAgICAvLyBub2RlLnNldFBvc2l0aW9uKGNjLnYyKDAsIDApKVxyXG4gICAgICAgIC8vIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkuZ3Jhdml0eVNjYWxlID0gMDtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgLy8gfSwgMilcclxuXHJcblxyXG5cclxuICAgICAgICBjYy5sb2coY29jb3N6LmRhdGFNZ3IuaXNOb3ZpY2UsIFwiY29jb3N6LmRhdGFNZ3IuaXNOb3ZpY2VcIik7XHJcblxyXG4gICAgICAgIC8vIGlmICgrY29jb3N6LmRhdGFNZ3IuaXNOb3ZpY2UgPT0gMCkge1xyXG4gICAgICAgIHRoaXMuc3RhcnRHYW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIgICAgICAg5ZCR5oyH56S65pa55ZCR5ruR5YqoXCI7XHJcbiAgICAgICAgdGhpcy5oYW5kU3RhcnRQb3MgPSB0aGlzLmhhbmRUaXBzLmdldFBvc2l0aW9uKCk7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5oYW5kVGlwcylcclxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoXHJcbiAgICAgICAgICAgICAgICBjYy50d2VlbigpLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRUaXBzLnNldFBvc2l0aW9uKHRoaXMuaGFuZFN0YXJ0UG9zKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuMywgeyBvcGFjaXR5OiAyNTUgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS5ieSgxLCB7IHg6IC0xNTAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS50bygwLjMsIHsgb3BhY2l0eTogMCB9KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLmRlbGF5KDIpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuaGFuZFRpcHMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc3RvbmUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmIChjb2Nvc3ouZ2FtZU1nci5pc0dhbWUyUmVzdXJyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvY29zei5nYW1lTWdyLmlzR2FtZTJSZXN1cnJlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvY29zei5nYW1lTWdyLmN1ckdhbWUyTGV2ZWxJRCA9IDA7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2MuZ2FtZS5vbihDb25zdGFudC5FX0dBTUVfU1RBUlQsICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93Lm9uR2FtZUV2ZW50KDQsIFwi5peg5bC95YWz5Y2h5byA5aeLXCIsKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmICgrY29jb3N6LmRhdGFNZ3IuaXNOb3ZpY2UgPT0gMCkge1xyXG4gICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5pc05vdmljZSA9IFwiMVwiO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRUaXBzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGVuLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRHYW1lLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB1aUdhbWUub25TdGFydEdhbWUoKVxyXG4gICAgICAgICAgICBsZXQgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjApICsgMTtcclxuXHJcbiAgICAgICAgICAgIG51bSA9IGNvY29zei5kYXRhTWdyLkdhbWUyTGV2ZWxMaXN0O1xyXG4gICAgICAgICAgICBjb2Nvc3ouZ2FtZU1nci5jdXJMZXZlbEpzb24gPSBudW07XHJcbiAgICAgICAgICAgIGNjLmxvZyhudW0pO1xyXG5cclxuICAgICAgICAgICAgbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwibGV2ZWxNZ3JcIiwgY2MuUHJlZmFiKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBsZXZlbCA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgIGxldmVsLmdldENvbXBvbmVudChcImxldmVsTnVtXCIpLmN1ckxldmVsID0gbnVtO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobGV2ZWwpO1xyXG5cclxuICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3IuY3VyR2FtZTJMZXZlbElEKys7XHJcbiAgICAgICAgICAgIHRoaXMudWkueSA9IHRoaXMuY2FtZXJhLnk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZUJnLnkgPSB0aGlzLmNhbWVyYS55O1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3IuY3VyR2FtZTJMZXZlbElEKys7XHJcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjApICsgMTtcclxuXHJcbiAgICAgICAgICAgICAgICBudW0gPSBjb2Nvc3ouZGF0YU1nci5HYW1lMkxldmVsTGlzdDtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouZ2FtZU1nci5jdXJMZXZlbEpzb24gPSBudW07XHJcbiAgICAgICAgICAgICAgICBjYy5sb2cobnVtKVxyXG4gICAgICAgICAgICAgICAgbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwibGV2ZWxNZ3JcIiwgY2MuUHJlZmFiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbGV2ZWwgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgbGV2ZWwuZ2V0Q29tcG9uZW50KFwibGV2ZWxOdW1cIikuY3VyTGV2ZWwgPSBudW07XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobGV2ZWwpO1xyXG4gICAgICAgICAgICB9LCAxOClcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgY2MuZ2FtZS5vZmYoQ29uc3RhbnQuRV9HQU1FX1NUQVJUKVxyXG4gICAgICAgIH0sIHRoaXMpXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5zdGFydEdhbWUpXHJcbiAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKFxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4oKS5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLmJ5KDAuMywgeyBzY2FsZTogMC4xIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYnkoMC4zLCB7IHNjYWxlOiAtMC4xIH0pXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYgKGNvY29zei5nYW1lTWdyLmlzR2FtZU92ZXIpIHtcclxuICAgICAgICAgICAgLy8gZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5ub2RlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoY2hpbGQubmFtZSA9PSBcImxldmVsTWdyXCIpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=