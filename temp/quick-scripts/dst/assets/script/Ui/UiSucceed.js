
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Ui/UiSucceed.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ad30f1TyldFgoW5vJlt+Cu/', 'UiSucceed');
// script/Ui/UiSucceed.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIPage_1 = require("./UIPage");
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var Msg_1 = require("../Framework/Msg");
// import { utils } from "../statistic/Utils";
// import { BannerLocation } from "../common-plugin/Scripts/YZ_Constant";
// import { utils } from "../common-plugin/Scripts/Utils";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UiSucceed = /** @class */ (function (_super) {
    __extends(UiSucceed, _super);
    // private prograss: cc.ProgressBar;
    function UiSucceed() {
        var _this = _super.call(this) || this;
        /**下一关 */
        _this._BtnNext = null;
        _this._BtnBack = null;
        _this._BtnAgain = null;
        _this.ScaleNode = null;
        /**星星父节点 */
        // private StarNode: cc.Node[] = [];
        // private reward: cc.Node;
        // private prograss: cc.ProgressBar;
        _this.action = null;
        _this._init();
        return _this;
    }
    UiSucceed.prototype._init = function () {
        var Game = CocosZ_1.cocosz.resMgr.getRes(Constant_1.PanelName.UiSucceed, cc.Prefab);
        if (Game) {
            var node = cc.instantiate(Game);
            if (node) {
                this._page = node;
                cc.find("Canvas/ui").addChild(node);
                node.active = false;
                node.position = cc.Vec2.ZERO;
                this._onLoad();
            }
        }
    };
    UiSucceed.prototype._onLoad = function () {
        this.ScaleNode = cc.find("Canvas/ui/UiSucceed/ScaleNode");
        this._BtnNext = cc.find("Canvas/ui/UiSucceed/ScaleNode/BtnNext");
        this._BtnBack = cc.find("Canvas/ui/UiSucceed/ScaleNode/BtnBack");
        this._BtnAgain = cc.find("Canvas/ui/UiSucceed/ScaleNode/BtnAgain");
        // this.prograss = cc.find("Canvas/ui/UiSucceed/ScaleNode/prop/ProgressBar").getComponent(cc.ProgressBar);
        // this.reward = cc.find("Canvas/ui/UiSucceed/ScaleNode/reward");
        // let node = cc.find("Canvas/ui/UiSucceed/ScaleNode/StarNode");
        // for (let index = 0; index < node.childrenCount; index++) {
        //     this.StarNode.push(node.children[index]);
        // }
        this._Start();
    };
    UiSucceed.prototype._Start = function () {
        this._BtnNext.on(cc.Node.EventType.TOUCH_END, this._Next, this);
        this._BtnBack.on(cc.Node.EventType.TOUCH_END, this._Back, this);
        this._BtnAgain.on(cc.Node.EventType.TOUCH_END, this._Again, this);
        cc.director.getScheduler().enableForTarget(this);
        CocosZ_1.cocosz.dataMgr.CurLevelId = CocosZ_1.cocosz.gameMgr.curLevelID;
        cc.log(CocosZ_1.cocosz.dataMgr.CurLevelId, "------------succeed");
        CocosZ_1.cocosz.dataMgr.LevelUnLock(CocosZ_1.cocosz.dataMgr.CurLevelId);
        // cocosz.dataMgr.setStarNum(cocosz.dataMgr.CurLevelId, cocosz.gameMgr.star)
        // this.Star();
    };
    UiSucceed.prototype.onOpen = function () {
        // utils.adManager.ShowBanner(BannerLocation.Home);
        // utils.adManager.ShowInterstitial(BannerLocation.Over);
        window.onGameSuccess(1, (CocosZ_1.cocosz.dataMgr.CurLevelId + 1));
        this._page.zIndex += 100;
        // this.ScaleNode.scale = 0;
        // cc.tween(this.ScaleNode)
        //     .to(0.2, { scale: 1.5 })
        //     .start()
        // this.reward.getChildByName("halo").active = false;
        // cocosz.gameMgr.tweeBtn(this._BtnNext, 1.05, 1);
        // let random = Math.random();
        // let bool = random > 0.5;
        // let coin = this.reward.getChildByName("coin");
        // let cover = this.reward.getChildByName("cover");
        // coin.active = bool;
        // cover.active = !bool;
        // if (cocosz.gameMgr.coinPrograss >= 1) {
        //     if (bool) {
        //         cocosz.dataMgr.CoinCount += 100;
        //     }
        //     else {
        //         cocosz.dataMgr.Shield++;
        //     }
        // }
        // this.action = cc.tween(this.prograss)
        //     .to(1.5, { progress: cocosz.gameMgr.coinPrograss })
        //     .call(() => {
        //         if (cocosz.gameMgr.coinPrograss >= 1) {
        //             // this.reward.getChildByName("halo").active = true;
        //             // let c = cc.tween().by(3, { angle: 360 });
        //             // cc.tween(this.reward.getChildByName("halo"))
        //                 // .repeatForever(c)
        //                 // .start()
        //             if (bool) {
        //                 Msg.Show("挑战成功! 获得100金币!");
        //                 cc.game.emit(Constant.E_UPDATE_COIN);
        //             }
        //             else {
        //                 Msg.Show("挑战成功! 获得1个金刚罩!");
        //                 cc.game.emit(Constant.E_UPDATE_COIN);
        //             }
        //         }
        //     })
        //     .start()
        // cc.tween(this.ScaleNode.getChildByName("role"))
        //     .to(0.7, { scale: 1, position: cc.v2(0, 0) })
        //     .start()
        // cc.tween(this.ScaleNode.getChildByName("prop").getChildByName("light"))
        //     .by(1.5, { position: cc.v2(363 * cocosz.gameMgr.coinPrograss, 0) })
        //     .start()
        cc.tween(this.ScaleNode)
            .to(0.4, { position: cc.v2(0, 0) })
            .start();
    };
    // private _FaceSpMove() {
    //     this.FaceSp.node.runAction(cc.spawn(cc.fadeTo(0.5, 255), cc.scaleTo(0.5, 0.94)));
    // }
    UiSucceed.prototype._Again = function () {
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        // cocosz.sceneMgr.loadScene("LoadGame", () => {
        //     cocosz.uiMgr.openPage(PageName.UiLoadGame);
        //     cc.game.emit(Constant.E_GAME_LOGIC, { type: Constant.E_LEVEL_FAILED });
        // });
        CocosZ_1.cocosz.sceneMgr.loadScene("Game", function () {
            CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UiGame);
            CocosZ_1.cocosz.gameMgr.initGame();
        });
    };
    UiSucceed.prototype._Double = function () {
        if (CocosZ_1.cocosz.gameMgr.LevelNum >= 5) {
            CocosZ_1.cocosz.gameMgr.LevelNum = 0;
            return;
        }
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        Msg_1.default.Show("视频播放失败!");
        return;
        // utils.adManager.HideBanner(BannerLocation.Home);
        // cocosz.audioMgr.stopAll();
        // cocosz.gameMgr.audioBg = false;
        // utils.adManager.ShowVideo((ret: boolean, msg: string) => {
        //     cocosz.gameMgr.audioBg = true;
        //     utils.adManager.ShowBanner(BannerLocation.Home);
        //     cocosz.audioMgr.HomeBtnEffect(() => { }, 0);
        //     cocosz.audioMgr.resumAllMusic();
        //     if (ret) {
        //         cocosz.dataMgr.CoinCount += 200 * 3;
        //         Msg.Show(`恭喜获得${Constant.Money[cocosz.dataMgr.LastBonusIndex - 1] * 3}金币`);
        //         this._Next();
        //     } else {
        //         if (!msg) {
        //             msg = "暂无视频广告!";
        //         }
        //         Msg.Show(msg);
        //     }
        // });
        //Msg.Show("暂时没有视频广告!!!");
    };
    UiSucceed.prototype._Next = function () {
        cc.log("-------------------_Next-----");
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        // utils.adManager.ShowBanner(BannerLocation.Home);
        if (CocosZ_1.cocosz.dataMgr.CurLevelId >= 79) {
            Msg_1.default.Show("敬请期待更多关卡!!!");
            CocosZ_1.cocosz.scheduleOnce(function () {
                CocosZ_1.cocosz.sceneMgr.loadScene("Home", function () {
                    CocosZ_1.cocosz.dataMgr.CurLevelId = 79;
                    CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UiHome);
                });
            }, 1.5);
            return;
        }
        if (this.action) {
            this.action.stop();
        }
        cc.director.getScheduler().unscheduleAllForTarget(this);
        CocosZ_1.cocosz.dataMgr.CurLevelId++;
        CocosZ_1.cocosz.sceneMgr.loadScene("LoadGame", function () {
            CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UiLoadGame);
            cc.game.emit(Constant_1.default.E_GAME_LOGIC, { type: Constant_1.default.E_LEVEL_FAILED });
        });
    };
    UiSucceed.prototype._Back = function () {
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        cc.log("-------------------Home-----");
        CocosZ_1.cocosz.sceneMgr.loadScene("Home", function () {
            CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UiHome);
        });
    };
    UiSucceed.prototype.Star = function () {
        var _this = this;
        var node = cc.find("Canvas/ui/UiSucceed/ScaleNode/StarNode");
        var num = 0.2;
        cc.log("----------------", CocosZ_1.cocosz.dataMgr.getStarInfo(CocosZ_1.cocosz.dataMgr.CurLevelId));
        // switch (cocosz.dataMgr.getStarInfo(cocosz.dataMgr.CurLevelId) == 0 ? 3 : 3) {
        switch (CocosZ_1.cocosz.dataMgr.getStarInfo(CocosZ_1.cocosz.dataMgr.CurLevelId)) {
            case 0: {
                for (var index = 0; index < node.childrenCount; index++) {
                    this.StarNode[index].children[0].active = false;
                }
                break;
            }
            case 1: {
                var _loop_1 = function (index) {
                    if (index == 0) {
                        this_1.StarNode[index].children[0].active = true;
                        cc.tween(this_1.StarNode[index].children[0])
                            .delay(num + (index * 0.3))
                            .to(0.2, { scale: 4, angle: 360, opacity: 255 })
                            .delay(0.2)
                            .to(0.1, { scale: 1, })
                            .call(function () {
                            var prefab = CocosZ_1.cocosz.resMgr.getRes("starLizi", cc.Prefab);
                            var node = cc.instantiate(prefab);
                            node.zIndex -= 10;
                            _this.StarNode[index].addChild(node);
                            if (index == 0) {
                                CocosZ_1.cocosz.audioMgr.playSucceedStar1Effect();
                            }
                            else if (index == 1) {
                                CocosZ_1.cocosz.audioMgr.playSucceedStar2Effect();
                            }
                            else if (index == 2) {
                                CocosZ_1.cocosz.audioMgr.playSucceedStar3Effect();
                            }
                        })
                            .start();
                    }
                    else {
                        this_1.StarNode[index].children[0].active = false;
                    }
                };
                var this_1 = this;
                for (var index = 0; index < node.childrenCount; index++) {
                    _loop_1(index);
                }
                break;
            }
            case 2: {
                var _loop_2 = function (index) {
                    if (index >= 0 && index < 2) {
                        this_2.StarNode[index].children[0].active = true;
                        cc.tween(this_2.StarNode[index].children[0])
                            .delay(num + (index * 0.3))
                            .to(0.2, { scale: 4, angle: 360, opacity: 255 })
                            .delay(0.2)
                            .to(0.1, { scale: 1, })
                            .call(function () {
                            var prefab = CocosZ_1.cocosz.resMgr.getRes("starLizi", cc.Prefab);
                            var node = cc.instantiate(prefab);
                            node.zIndex -= 10;
                            _this.StarNode[index].addChild(node);
                            if (index == 0) {
                                CocosZ_1.cocosz.audioMgr.playSucceedStar1Effect();
                            }
                            else if (index == 1) {
                                CocosZ_1.cocosz.audioMgr.playSucceedStar2Effect();
                            }
                            else if (index == 2) {
                                CocosZ_1.cocosz.audioMgr.playSucceedStar3Effect();
                            }
                        })
                            .start();
                    }
                    else {
                        this_2.StarNode[index].children[0].active = false;
                    }
                };
                var this_2 = this;
                for (var index = 0; index < node.childrenCount; index++) {
                    _loop_2(index);
                }
                break;
            }
            case 3: {
                var _loop_3 = function (index) {
                    this_3.StarNode[index].children[0].active = true;
                    // this.StarNode[index].children[0].runAction(cc.spawn(cc.fadeTo((num + (index * 0.5)), 255), cc.scaleTo((num + (index * 0.3)), 3), cc.rotateBy((num + (index * 0.5)), 360), cc.callFunc(() => {
                    //     if (index == 0) {
                    //         cocosz.audioMgr.playSucceedStar1Effect();
                    //     }
                    //     else if (index == 1) {
                    //         cocosz.audioMgr.playSucceedStar2Effect();
                    //     }
                    //     else if (index == 2) {
                    //         cocosz.audioMgr.playSucceedStar3Effect();
                    //     }
                    // })));
                    cc.tween(this_3.StarNode[index].children[0])
                        .delay(num + (index * 0.3))
                        .to(0.2, { scale: 4, angle: 360, opacity: 255 })
                        .delay(0.2)
                        .to(0.1, { scale: 1, })
                        .call(function () {
                        var prefab = CocosZ_1.cocosz.resMgr.getRes("starLizi", cc.Prefab);
                        var node = cc.instantiate(prefab);
                        node.zIndex -= 10;
                        _this.StarNode[index].addChild(node);
                        if (index == 0) {
                            CocosZ_1.cocosz.audioMgr.playSucceedStar1Effect();
                        }
                        else if (index == 1) {
                            CocosZ_1.cocosz.audioMgr.playSucceedStar2Effect();
                        }
                        else if (index == 2) {
                            CocosZ_1.cocosz.audioMgr.playSucceedStar3Effect();
                        }
                    })
                        .start();
                };
                var this_3 = this;
                for (var index = 0; index < node.childrenCount; index++) {
                    _loop_3(index);
                }
                break;
            }
        }
    };
    UiSucceed.prototype.onClose = function () {
        cc.game.targetOff(this);
        if (this.action) {
            this.action.stop();
        }
        cc.director.getScheduler().unscheduleAllForTarget(this);
    };
    UiSucceed.prototype.onDestroy = function () {
        cc.game.targetOff(this);
        if (this.action) {
            this.action.stop();
        }
        cc.director.getScheduler().unscheduleAllForTarget(this);
    };
    UiSucceed = __decorate([
        ccclass
    ], UiSucceed);
    return UiSucceed;
}(UIPage_1.default));
exports.default = UiSucceed;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxVaVxcVWlTdWNjZWVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFDOUIsOENBQXFEO0FBQ3JELGtEQUFzRTtBQUN0RSx3Q0FBbUM7QUFDbkMsOENBQThDO0FBQzlDLHlFQUF5RTtBQUN6RSwwREFBMEQ7QUFFcEQsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUF1Qyw2QkFBTTtJQWF6QyxvQ0FBb0M7SUFNcEM7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUFyQkQsU0FBUztRQUNELGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDbEMsV0FBVztRQUNYLG9DQUFvQztRQUNwQywyQkFBMkI7UUFDM0Isb0NBQW9DO1FBQzVCLFlBQU0sR0FBUSxJQUFJLENBQUE7UUFVdEIsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDOztJQUNqQixDQUFDO0lBQ08seUJBQUssR0FBYjtRQUVJLElBQUksSUFBSSxHQUFjLGVBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLG9CQUFTLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzRSxJQUFJLElBQUksRUFBRTtZQUNOLElBQUksSUFBSSxHQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekMsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDcEIsSUFBSSxDQUFDLFFBQVEsR0FB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aEIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFOzRCQUE5QyxLQUFLO2lCQW9DYjtnQkFDRCxNQUFNO2FBQ1Q7U0FDSjtJQUNMLENBQUM7SUFJUywyQkFBTyxHQUFqQjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUE7U0FDckI7UUFDRCxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFUyw2QkFBUyxHQUFuQjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUE7U0FDckI7UUFDRCxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUF2VmdCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0F3VjdCO0lBQUQsZ0JBQUM7Q0F4VkQsQUF3VkMsQ0F4VnNDLGdCQUFNLEdBd1Y1QztrQkF4Vm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlQYWdlIGZyb20gXCIuL1VJUGFnZVwiO1xyXG5pbXBvcnQgQ29jb3NaLCB7IGNvY29zeiB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29jb3NaXCI7XHJcbmltcG9ydCBDb25zdGFudCwgeyBQYWdlTmFtZSwgUGFuZWxOYW1lIH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG5pbXBvcnQgTXNnIGZyb20gXCIuLi9GcmFtZXdvcmsvTXNnXCI7XHJcbi8vIGltcG9ydCB7IHV0aWxzIH0gZnJvbSBcIi4uL3N0YXRpc3RpYy9VdGlsc1wiO1xyXG4vLyBpbXBvcnQgeyBCYW5uZXJMb2NhdGlvbiB9IGZyb20gXCIuLi9jb21tb24tcGx1Z2luL1NjcmlwdHMvWVpfQ29uc3RhbnRcIjtcclxuLy8gaW1wb3J0IHsgdXRpbHMgfSBmcm9tIFwiLi4vY29tbW9uLXBsdWdpbi9TY3JpcHRzL1V0aWxzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVWlTdWNjZWVkIGV4dGVuZHMgVUlQYWdlIHtcclxuICAgIC8qKuS4i+S4gOWFsyAqL1xyXG4gICAgcHJpdmF0ZSBfQnRuTmV4dDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9CdG5CYWNrOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgX0J0bkFnYWluOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIFNjYWxlTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvKirmmJ/mmJ/niLboioLngrkgKi9cclxuICAgIC8vIHByaXZhdGUgU3Rhck5vZGU6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgLy8gcHJpdmF0ZSByZXdhcmQ6IGNjLk5vZGU7XHJcbiAgICAvLyBwcml2YXRlIHByb2dyYXNzOiBjYy5Qcm9ncmVzc0JhcjtcclxuICAgIHByaXZhdGUgYWN0aW9uOiBhbnkgPSBudWxsXHJcblxyXG4gICAgLy8gcHJpdmF0ZSBwcm9ncmFzczogY2MuUHJvZ3Jlc3NCYXI7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfaW5pdCgpIHtcclxuXHJcbiAgICAgICAgbGV0IEdhbWU6IGNjLlByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFBhbmVsTmFtZS5VaVN1Y2NlZWQsIGNjLlByZWZhYik7XHJcbiAgICAgICAgaWYgKEdhbWUpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZShHYW1lKTtcclxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhZ2UgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy91aVwiKS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb25Mb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9vbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5TY2FsZU5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL3VpL1VpU3VjY2VlZC9TY2FsZU5vZGVcIik7XHJcbiAgICAgICAgdGhpcy5fQnRuTmV4dCA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlTdWNjZWVkL1NjYWxlTm9kZS9CdG5OZXh0XCIpO1xyXG4gICAgICAgIHRoaXMuX0J0bkJhY2sgPSBjYy5maW5kKFwiQ2FudmFzL3VpL1VpU3VjY2VlZC9TY2FsZU5vZGUvQnRuQmFja1wiKTtcclxuICAgICAgICB0aGlzLl9CdG5BZ2FpbiA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlTdWNjZWVkL1NjYWxlTm9kZS9CdG5BZ2FpblwiKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5wcm9ncmFzcyA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlTdWNjZWVkL1NjYWxlTm9kZS9wcm9wL1Byb2dyZXNzQmFyXCIpLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0Jhcik7XHJcbiAgICAgICAgLy8gdGhpcy5yZXdhcmQgPSBjYy5maW5kKFwiQ2FudmFzL3VpL1VpU3VjY2VlZC9TY2FsZU5vZGUvcmV3YXJkXCIpO1xyXG5cclxuICAgICAgICAvLyBsZXQgbm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlTdWNjZWVkL1NjYWxlTm9kZS9TdGFyTm9kZVwiKTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbm9kZS5jaGlsZHJlbkNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuU3Rhck5vZGUucHVzaChub2RlLmNoaWxkcmVuW2luZGV4XSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHRoaXMuX1N0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9TdGFydCgpIHtcclxuICAgICAgICB0aGlzLl9CdG5OZXh0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fTmV4dCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fQnRuQmFjay5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX0JhY2ssIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX0J0bkFnYWluLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fQWdhaW4sIHRoaXMpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLmVuYWJsZUZvclRhcmdldCh0aGlzKTtcclxuICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID0gY29jb3N6LmdhbWVNZ3IuY3VyTGV2ZWxJRDtcclxuICAgICAgICBjYy5sb2coY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCwgXCItLS0tLS0tLS0tLS1zdWNjZWVkXCIpXHJcbiAgICAgICAgY29jb3N6LmRhdGFNZ3IuTGV2ZWxVbkxvY2soY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCk7XHJcblxyXG4gICAgICAgIC8vIGNvY29zei5kYXRhTWdyLnNldFN0YXJOdW0oY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCwgY29jb3N6LmdhbWVNZ3Iuc3RhcilcclxuICAgICAgICAvLyB0aGlzLlN0YXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25PcGVuKCkge1xyXG4gICAgICAgIC8vIHV0aWxzLmFkTWFuYWdlci5TaG93QmFubmVyKEJhbm5lckxvY2F0aW9uLkhvbWUpO1xyXG4gICAgICAgIC8vIHV0aWxzLmFkTWFuYWdlci5TaG93SW50ZXJzdGl0aWFsKEJhbm5lckxvY2F0aW9uLk92ZXIpO1xyXG4gICAgICAgIHdpbmRvdy5vbkdhbWVTdWNjZXNzKDEsIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkICsgMSkpO1xyXG5cclxuICAgICAgICB0aGlzLl9wYWdlLnpJbmRleCArPSAxMDBcclxuICAgICAgICAvLyB0aGlzLlNjYWxlTm9kZS5zY2FsZSA9IDA7XHJcbiAgICAgICAgLy8gY2MudHdlZW4odGhpcy5TY2FsZU5vZGUpXHJcbiAgICAgICAgLy8gICAgIC50bygwLjIsIHsgc2NhbGU6IDEuNSB9KVxyXG4gICAgICAgIC8vICAgICAuc3RhcnQoKVxyXG4gICAgICAgIC8vIHRoaXMucmV3YXJkLmdldENoaWxkQnlOYW1lKFwiaGFsb1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyBjb2Nvc3ouZ2FtZU1nci50d2VlQnRuKHRoaXMuX0J0bk5leHQsIDEuMDUsIDEpO1xyXG5cclxuICAgICAgICAvLyBsZXQgcmFuZG9tID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAvLyBsZXQgYm9vbCA9IHJhbmRvbSA+IDAuNTtcclxuICAgICAgICAvLyBsZXQgY29pbiA9IHRoaXMucmV3YXJkLmdldENoaWxkQnlOYW1lKFwiY29pblwiKTtcclxuICAgICAgICAvLyBsZXQgY292ZXIgPSB0aGlzLnJld2FyZC5nZXRDaGlsZEJ5TmFtZShcImNvdmVyXCIpO1xyXG4gICAgICAgIC8vIGNvaW4uYWN0aXZlID0gYm9vbDtcclxuICAgICAgICAvLyBjb3Zlci5hY3RpdmUgPSAhYm9vbDtcclxuXHJcbiAgICAgICAgLy8gaWYgKGNvY29zei5nYW1lTWdyLmNvaW5Qcm9ncmFzcyA+PSAxKSB7XHJcbiAgICAgICAgLy8gICAgIGlmIChib29sKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb2Nvc3ouZGF0YU1nci5Db2luQ291bnQgKz0gMTAwO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgY29jb3N6LmRhdGFNZ3IuU2hpZWxkKys7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gdGhpcy5hY3Rpb24gPSBjYy50d2Vlbih0aGlzLnByb2dyYXNzKVxyXG4gICAgICAgIC8vICAgICAudG8oMS41LCB7IHByb2dyZXNzOiBjb2Nvc3ouZ2FtZU1nci5jb2luUHJvZ3Jhc3MgfSlcclxuICAgICAgICAvLyAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKGNvY29zei5nYW1lTWdyLmNvaW5Qcm9ncmFzcyA+PSAxKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gdGhpcy5yZXdhcmQuZ2V0Q2hpbGRCeU5hbWUoXCJoYWxvXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gbGV0IGMgPSBjYy50d2VlbigpLmJ5KDMsIHsgYW5nbGU6IDM2MCB9KTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyBjYy50d2Vlbih0aGlzLnJld2FyZC5nZXRDaGlsZEJ5TmFtZShcImhhbG9cIikpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIC5yZXBlYXRGb3JldmVyKGMpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIC5zdGFydCgpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGJvb2wpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgTXNnLlNob3coXCLmjJHmiJjmiJDlip8hIOiOt+W+lzEwMOmHkeW4gSFcIik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX1VQREFURV9DT0lOKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIE1zZy5TaG93KFwi5oyR5oiY5oiQ5YqfISDojrflvpcx5Liq6YeR5Yia572pIVwiKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KENvbnN0YW50LkVfVVBEQVRFX0NPSU4pO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyAgICAgLnN0YXJ0KClcclxuXHJcblxyXG4gICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuU2NhbGVOb2RlLmdldENoaWxkQnlOYW1lKFwicm9sZVwiKSlcclxuICAgICAgICAvLyAgICAgLnRvKDAuNywgeyBzY2FsZTogMSwgcG9zaXRpb246IGNjLnYyKDAsIDApIH0pXHJcbiAgICAgICAgLy8gICAgIC5zdGFydCgpXHJcbiAgICAgICAgLy8gY2MudHdlZW4odGhpcy5TY2FsZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9wXCIpLmdldENoaWxkQnlOYW1lKFwibGlnaHRcIikpXHJcbiAgICAgICAgLy8gICAgIC5ieSgxLjUsIHsgcG9zaXRpb246IGNjLnYyKDM2MyAqIGNvY29zei5nYW1lTWdyLmNvaW5Qcm9ncmFzcywgMCkgfSlcclxuICAgICAgICAvLyAgICAgLnN0YXJ0KClcclxuXHJcblxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuU2NhbGVOb2RlKVxyXG4gICAgICAgICAgICAudG8oMC40LCB7IHBvc2l0aW9uOiBjYy52MigwLCAwKSB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcml2YXRlIF9GYWNlU3BNb3ZlKCkge1xyXG4gICAgLy8gICAgIHRoaXMuRmFjZVNwLm5vZGUucnVuQWN0aW9uKGNjLnNwYXduKGNjLmZhZGVUbygwLjUsIDI1NSksIGNjLnNjYWxlVG8oMC41LCAwLjk0KSkpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHByaXZhdGUgX0FnYWluKCkge1xyXG4gICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5YnRuRWZmZWN0KCk7XHJcbiAgICAgICAgLy8gY29jb3N6LnNjZW5lTWdyLmxvYWRTY2VuZShcIkxvYWRHYW1lXCIsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgY29jb3N6LnVpTWdyLm9wZW5QYWdlKFBhZ2VOYW1lLlVpTG9hZEdhbWUpO1xyXG4gICAgICAgIC8vICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9HQU1FX0xPR0lDLCB7IHR5cGU6IENvbnN0YW50LkVfTEVWRUxfRkFJTEVEIH0pO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIGNvY29zei5zY2VuZU1nci5sb2FkU2NlbmUoXCJHYW1lXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYWdlKFBhZ2VOYW1lLlVpR2FtZSk7XHJcbiAgICAgICAgICAgIGNvY29zei5nYW1lTWdyLmluaXRHYW1lKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9Eb3VibGUoKSB7XHJcbiAgICAgICAgaWYgKGNvY29zei5nYW1lTWdyLkxldmVsTnVtID49IDUpIHtcclxuICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3IuTGV2ZWxOdW0gPSAwO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5YnRuRWZmZWN0KCk7XHJcbiAgICAgICAgTXNnLlNob3coXCLop4bpopHmkq3mlL7lpLHotKUhXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyB1dGlscy5hZE1hbmFnZXIuSGlkZUJhbm5lcihCYW5uZXJMb2NhdGlvbi5Ib21lKTtcclxuICAgICAgICAvLyBjb2Nvc3ouYXVkaW9NZ3Iuc3RvcEFsbCgpO1xyXG4gICAgICAgIC8vIGNvY29zei5nYW1lTWdyLmF1ZGlvQmcgPSBmYWxzZTtcclxuICAgICAgICAvLyB1dGlscy5hZE1hbmFnZXIuU2hvd1ZpZGVvKChyZXQ6IGJvb2xlYW4sIG1zZzogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvY29zei5nYW1lTWdyLmF1ZGlvQmcgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICB1dGlscy5hZE1hbmFnZXIuU2hvd0Jhbm5lcihCYW5uZXJMb2NhdGlvbi5Ib21lKTtcclxuICAgICAgICAvLyAgICAgY29jb3N6LmF1ZGlvTWdyLkhvbWVCdG5FZmZlY3QoKCkgPT4geyB9LCAwKTtcclxuICAgICAgICAvLyAgICAgY29jb3N6LmF1ZGlvTWdyLnJlc3VtQWxsTXVzaWMoKTtcclxuICAgICAgICAvLyAgICAgaWYgKHJldCkge1xyXG4gICAgICAgIC8vICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ29pbkNvdW50ICs9IDIwMCAqIDM7XHJcbiAgICAgICAgLy8gICAgICAgICBNc2cuU2hvdyhg5oGt5Zac6I635b6XJHtDb25zdGFudC5Nb25leVtjb2Nvc3ouZGF0YU1nci5MYXN0Qm9udXNJbmRleCAtIDFdICogM33ph5HluIFgKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX05leHQoKTtcclxuICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIGlmICghbXNnKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbXNnID0gXCLmmoLml6Dop4bpopHlub/lkYohXCI7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICBNc2cuU2hvdyhtc2cpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy9Nc2cuU2hvdyhcIuaaguaXtuayoeacieinhumikeW5v+WRiiEhIVwiKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfTmV4dCgpIHtcclxuICAgICAgICBjYy5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tX05leHQtLS0tLVwiKVxyXG4gICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5YnRuRWZmZWN0KCk7XHJcbiAgICAgICAgLy8gdXRpbHMuYWRNYW5hZ2VyLlNob3dCYW5uZXIoQmFubmVyTG9jYXRpb24uSG9tZSk7XHJcbiAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPj0gNzkpIHtcclxuICAgICAgICAgICAgTXNnLlNob3coXCLmlazor7fmnJ/lvoXmm7TlpJrlhbPljaEhISFcIik7XHJcbiAgICAgICAgICAgIGNvY29zei5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29jb3N6LnNjZW5lTWdyLmxvYWRTY2VuZShcIkhvbWVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPSA3OTtcclxuICAgICAgICAgICAgICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhZ2UoUGFnZU5hbWUuVWlIb21lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCAxLjUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmFjdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbi5zdG9wKClcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkudW5zY2hlZHVsZUFsbEZvclRhcmdldCh0aGlzKTtcclxuICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkKys7XHJcbiAgICAgICAgY29jb3N6LnNjZW5lTWdyLmxvYWRTY2VuZShcIkxvYWRHYW1lXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYWdlKFBhZ2VOYW1lLlVpTG9hZEdhbWUpO1xyXG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9HQU1FX0xPR0lDLCB7IHR5cGU6IENvbnN0YW50LkVfTEVWRUxfRkFJTEVEIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICAgIHByaXZhdGUgX0JhY2soKSB7XHJcbiAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlidG5FZmZlY3QoKTtcclxuICAgICAgICBjYy5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tSG9tZS0tLS0tXCIpO1xyXG4gICAgICAgIGNvY29zei5zY2VuZU1nci5sb2FkU2NlbmUoXCJIb21lXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYWdlKFBhZ2VOYW1lLlVpSG9tZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgU3RhcigpIHtcclxuICAgICAgICBsZXQgbm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlTdWNjZWVkL1NjYWxlTm9kZS9TdGFyTm9kZVwiKTtcclxuICAgICAgICBsZXQgbnVtID0gMC4yO1xyXG4gICAgICAgIGNjLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS1cIiwgY29jb3N6LmRhdGFNZ3IuZ2V0U3RhckluZm8oY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCkpXHJcbiAgICAgICAgLy8gc3dpdGNoIChjb2Nvc3ouZGF0YU1nci5nZXRTdGFySW5mbyhjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkKSA9PSAwID8gMyA6IDMpIHtcclxuICAgICAgICBzd2l0Y2ggKGNvY29zei5kYXRhTWdyLmdldFN0YXJJbmZvKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQpKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDoge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG5vZGUuY2hpbGRyZW5Db3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU3Rhck5vZGVbaW5kZXhdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAxOiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbm9kZS5jaGlsZHJlbkNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TdGFyTm9kZVtpbmRleF0uY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5TdGFyTm9kZVtpbmRleF0uY2hpbGRyZW5bMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkobnVtICsgKGluZGV4ICogMC4zKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjIsIHsgc2NhbGU6IDQsIGFuZ2xlOiAzNjAsIG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuMilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4xLCB7IHNjYWxlOiAxLCB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcInN0YXJMaXppXCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuekluZGV4IC09IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU3Rhck5vZGVbaW5kZXhdLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5U3VjY2VlZFN0YXIxRWZmZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGluZGV4ID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlTdWNjZWVkU3RhcjJFZmZlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaW5kZXggPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheVN1Y2NlZWRTdGFyM0VmZmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU3Rhck5vZGVbaW5kZXhdLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMjoge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG5vZGUuY2hpbGRyZW5Db3VudDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlN0YXJOb2RlW2luZGV4XS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLlN0YXJOb2RlW2luZGV4XS5jaGlsZHJlblswXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheShudW0gKyAoaW5kZXggKiAwLjMpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRvKDAuMiwgeyBzY2FsZTogNCwgYW5nbGU6IDM2MCwgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMC4yKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgc2NhbGU6IDEsIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwic3RhckxpemlcIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS56SW5kZXggLT0gMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TdGFyTm9kZVtpbmRleF0uYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlTdWNjZWVkU3RhcjFFZmZlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaW5kZXggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheVN1Y2NlZWRTdGFyMkVmZmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpbmRleCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5U3VjY2VlZFN0YXIzRWZmZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TdGFyTm9kZVtpbmRleF0uY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAzOiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbm9kZS5jaGlsZHJlbkNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TdGFyTm9kZVtpbmRleF0uY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLlN0YXJOb2RlW2luZGV4XS5jaGlsZHJlblswXS5ydW5BY3Rpb24oY2Muc3Bhd24oY2MuZmFkZVRvKChudW0gKyAoaW5kZXggKiAwLjUpKSwgMjU1KSwgY2Muc2NhbGVUbygobnVtICsgKGluZGV4ICogMC4zKSksIDMpLCBjYy5yb3RhdGVCeSgobnVtICsgKGluZGV4ICogMC41KSksIDM2MCksIGNjLmNhbGxGdW5jKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGluZGV4ID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5U3VjY2VlZFN0YXIxRWZmZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZWxzZSBpZiAoaW5kZXggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlTdWNjZWVkU3RhcjJFZmZlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBlbHNlIGlmIChpbmRleCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheVN1Y2NlZWRTdGFyM0VmZmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfSkpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5TdGFyTm9kZVtpbmRleF0uY2hpbGRyZW5bMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheShudW0gKyAoaW5kZXggKiAwLjMpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiA0LCBhbmdsZTogMzYwLCBvcGFjaXR5OiAyNTUgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDAuMilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjEsIHsgc2NhbGU6IDEsIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcInN0YXJMaXppXCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnpJbmRleCAtPSAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU3Rhck5vZGVbaW5kZXhdLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheVN1Y2NlZWRTdGFyMUVmZmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaW5kZXggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5U3VjY2VlZFN0YXIyRWZmZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpbmRleCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlTdWNjZWVkU3RhcjNFZmZlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIG9uQ2xvc2UoKSB7XHJcbiAgICAgICAgY2MuZ2FtZS50YXJnZXRPZmYodGhpcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uLnN0b3AoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS51bnNjaGVkdWxlQWxsRm9yVGFyZ2V0KHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY2MuZ2FtZS50YXJnZXRPZmYodGhpcyk7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uLnN0b3AoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS51bnNjaGVkdWxlQWxsRm9yVGFyZ2V0KHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==