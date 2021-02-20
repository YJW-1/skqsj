"use strict";
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