"use strict";
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