
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Ui/LevelItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dad3eybfDZGHqZE9IMhnklp', 'LevelItem');
// script/Ui/LevelItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var Msg_1 = require("../Framework/Msg");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelItem = /** @class */ (function (_super) {
    __extends(LevelItem, _super);
    function LevelItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ID = 0;
        _this.State = 0;
        _this.LevelNum = null;
        _this.Lock = null;
        return _this;
    }
    LevelItem.prototype.onLoad = function () {
        this.LevelNum = this.node.getChildByName("LevelNum").getComponent(cc.Label);
        this.Lock = this.node.getChildByName("Lock");
    };
    LevelItem.prototype.start = function () {
        // let State = cocosz.dataMgr.getLevelInfo(this.ID).State;
        // switch (num) {
        //     case 0: {
        //         this.LevelNum.node.setPosition(cc.v2(132, 78));
        //         this.pro.setPosition(cc.v2(132, 78));
        //         this.StarNode.setPosition(cc.v2(0, -202));
        //         break;
        //     }
        //     case 1: {
        //         this.LevelNum.node.setPosition(cc.v2(0, -94.5));
        //         this.pro.setPosition(cc.v2(0, -94.5));
        //         this.StarNode.setPosition(cc.v2(0, -202));
        //         break;
        //     }
        //     case 2: {
        //         this.LevelNum.node.setPosition(cc.v2(-102, 22));
        //         this.pro.setPosition(cc.v2(-102, 22));
        //         this.StarNode.setPosition(cc.v2(0, -202));
        //         break;
        //     }
        // }
        // cc.log("---------------")
        this.node.on(cc.Node.EventType.TOUCH_END, this.OnStartGame, this);
    };
    LevelItem.prototype.onEnable = function () {
        // return;
        this.Init();
    };
    /**点击关卡 */
    LevelItem.prototype.OnStartGame = function () {
        // cc.log("------------开始游戏")
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        // if (this.ID > 105) {
        //     Msg.Show("尽请期待!!!");
        //     return;
        // }
        if (this.State == 0 && !CocosZ_1.cocosz.gameMgr.isLevelOpen) {
            Msg_1.default.Show("需解锁前置关卡!!!");
            return;
        }
        CocosZ_1.cocosz.dataMgr.CurLevelId = this.ID;
        CocosZ_1.cocosz.gameMgr.curLevelID = CocosZ_1.cocosz.dataMgr.CurLevelId;
        // cocosz.dataMgr.CurLevelId += 120
        CocosZ_1.cocosz.sceneMgr.loadScene("Game", function () {
            CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UiGame);
            CocosZ_1.cocosz.gameMgr.initGame();
        });
        // cocosz.sceneMgr.loadScene("LoadGame", () => {
        //     cocosz.uiMgr.openPage(PageName.UiLoadGame);
        // });
    };
    LevelItem.prototype.Init = function () {
        // if (this.ID < 9) {
        //     this.LevelNum.string = "0" + (this.ID + 1);
        // } else {
        this.LevelNum.string = (this.ID + 1).toString();
        // }
        // cc.log(cocosz.dataMgr.getLevelInfo(this.ID))
        if (!CocosZ_1.cocosz.dataMgr.getLevelInfo(this.ID)) {
            return;
        }
        this.State = CocosZ_1.cocosz.dataMgr.getLevelInfo(this.ID).State;
        // console.log(this.State, this.ID);
        // cc.log(this.State);
        // cc.log(this.ID, this.State)
        switch (this.State) {
            case 0:
                this.Lock.active = true;
                this.LevelNum.node.active = false;
                break;
            case 1:
                this.Lock.active = false;
                this.LevelNum.node.active = true;
                break;
            case 2:
                this.Lock.active = false;
                this.LevelNum.node.active = true;
                break;
            case 3:
                this.Lock.active = false;
                this.LevelNum.node.active = true;
                break;
            default: {
            }
        }
    };
    LevelItem = __decorate([
        ccclass
    ], LevelItem);
    return LevelItem;
}(cc.Component));
exports.default = LevelItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxVaVxcTGV2ZWxJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSw4Q0FBNkM7QUFDN0Msa0RBQTJEO0FBQzNELHdDQUFtQztBQUU3QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBRG5EO1FBQUEscUVBaUhDO1FBOUdVLFFBQUUsR0FBVyxDQUFDLENBQUM7UUFDZCxXQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFDMUIsVUFBSSxHQUFZLElBQUksQ0FBQzs7SUEyR2pDLENBQUM7SUF4R0csMEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCx5QkFBSyxHQUFMO1FBQ0ksMERBQTBEO1FBQzFELGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsMERBQTBEO1FBQzFELGdEQUFnRDtRQUNoRCxxREFBcUQ7UUFDckQsaUJBQWlCO1FBQ2pCLFFBQVE7UUFDUixnQkFBZ0I7UUFDaEIsMkRBQTJEO1FBQzNELGlEQUFpRDtRQUNqRCxxREFBcUQ7UUFFckQsaUJBQWlCO1FBQ2pCLFFBQVE7UUFDUixnQkFBZ0I7UUFDaEIsMkRBQTJEO1FBQzNELGlEQUFpRDtRQUNqRCxxREFBcUQ7UUFFckQsaUJBQWlCO1FBQ2pCLFFBQVE7UUFDUixJQUFJO1FBQ0osNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMs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U0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5pbXBvcnQgQ29uc3RhbnQsIHsgUGFnZU5hbWUgfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvbnN0YW50XCI7XHJcbmltcG9ydCBNc2cgZnJvbSBcIi4uL0ZyYW1ld29yay9Nc2dcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMZXZlbEl0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIHB1YmxpYyBJRDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgU3RhdGU6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIExldmVsTnVtOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIExvY2s6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5MZXZlbE51bSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkxldmVsTnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5Mb2NrID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiTG9ja1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICAvLyBsZXQgU3RhdGUgPSBjb2Nvc3ouZGF0YU1nci5nZXRMZXZlbEluZm8odGhpcy5JRCkuU3RhdGU7XHJcbiAgICAgICAgLy8gc3dpdGNoIChudW0pIHtcclxuICAgICAgICAvLyAgICAgY2FzZSAwOiB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLkxldmVsTnVtLm5vZGUuc2V0UG9zaXRpb24oY2MudjIoMTMyLCA3OCkpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wcm8uc2V0UG9zaXRpb24oY2MudjIoMTMyLCA3OCkpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5TdGFyTm9kZS5zZXRQb3NpdGlvbihjYy52MigwLCAtMjAyKSk7XHJcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBjYXNlIDE6IHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuTGV2ZWxOdW0ubm9kZS5zZXRQb3NpdGlvbihjYy52MigwLCAtOTQuNSkpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wcm8uc2V0UG9zaXRpb24oY2MudjIoMCwgLTk0LjUpKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuU3Rhck5vZGUuc2V0UG9zaXRpb24oY2MudjIoMCwgLTIwMikpO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGNhc2UgMjoge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5MZXZlbE51bS5ub2RlLnNldFBvc2l0aW9uKGNjLnYyKC0xMDIsIDIyKSk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnByby5zZXRQb3NpdGlvbihjYy52MigtMTAyLCAyMikpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5TdGFyTm9kZS5zZXRQb3NpdGlvbihjYy52MigwLCAtMjAyKSk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY2MubG9nKFwiLS0tLS0tLS0tLS0tLS0tXCIpXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5PblN0YXJ0R2FtZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuSW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKueCueWHu+WFs+WNoSAqL1xyXG4gICAgcHJpdmF0ZSBPblN0YXJ0R2FtZSgpIHtcclxuICAgICAgICAvLyBjYy5sb2coXCItLS0tLS0tLS0tLS3lvIDlp4vmuLjmiI9cIilcclxuICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheWJ0bkVmZmVjdCgpO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLklEID4gMTA1KSB7XHJcbiAgICAgICAgLy8gICAgIE1zZy5TaG93KFwi5bC96K+35pyf5b6FISEhXCIpO1xyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5TdGF0ZSA9PSAwICYmICFjb2Nvc3ouZ2FtZU1nci5pc0xldmVsT3Blbikge1xyXG4gICAgICAgICAgICBNc2cuU2hvdyhcIumcgOino+mUgeWJjee9ruWFs+WNoSEhIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID0gdGhpcy5JRDtcclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci5jdXJMZXZlbElEID0gY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZFxyXG4gICAgICAgIC8vIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgKz0gMTIwXHJcbiAgICAgICAgY29jb3N6LnNjZW5lTWdyLmxvYWRTY2VuZShcIkdhbWVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhZ2UoUGFnZU5hbWUuVWlHYW1lKTtcclxuICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3IuaW5pdEdhbWUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBjb2Nvc3ouc2NlbmVNZ3IubG9hZFNjZW5lKFwiTG9hZEdhbWVcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhZ2UoUGFnZU5hbWUuVWlMb2FkR2FtZSk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgSW5pdCgpIHtcclxuICAgICAgICAvLyBpZiAodGhpcy5JRCA8IDkpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5MZXZlbE51bS5zdHJpbmcgPSBcIjBcIiArICh0aGlzLklEICsgMSk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICB0aGlzLkxldmVsTnVtLnN0cmluZyA9ICh0aGlzLklEICsgMSkudG9TdHJpbmcoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY2MubG9nKGNvY29zei5kYXRhTWdyLmdldExldmVsSW5mbyh0aGlzLklEKSlcclxuICAgICAgICBpZiAoIWNvY29zei5kYXRhTWdyLmdldExldmVsSW5mbyh0aGlzLklEKSkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5TdGF0ZSA9IGNvY29zei5kYXRhTWdyLmdldExldmVsSW5mbyh0aGlzLklEKS5TdGF0ZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLlN0YXRlLCB0aGlzLklEKTtcclxuICAgICAgICAvLyBjYy5sb2codGhpcy5TdGF0ZSk7XHJcbiAgICAgICAgLy8gY2MubG9nKHRoaXMuSUQsIHRoaXMuU3RhdGUpXHJcblxyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuU3RhdGUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5Mb2NrLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkxldmVsTnVtLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5Mb2NrLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5MZXZlbE51bS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5Mb2NrLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5MZXZlbE51bS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5Mb2NrLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5MZXZlbE51bS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=