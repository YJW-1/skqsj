"use strict";
cc._RF.push(module, 'c768b0R8kxF7Kr4+jxlcz5f', 'UiFailed');
// script/Ui/UiFailed.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIPage_1 = require("./UIPage");
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var Msg_1 = require("../Framework/Msg");
// import { utils } from "../statistic/Utils";
// import { BannerLocation } from "../common-plugin/Scripts/YZ_Constant";
// import { utils } from "../common-plugin/Scripts/Utils";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UiFailed = /** @class */ (function (_super) {
    __extends(UiFailed, _super);
    function UiFailed() {
        var _this = _super.call(this) || this;
        _this.btnAgain = null;
        _this.btnSkip = null;
        _this.btnBack = null;
        _this.curFraction = null;
        _this.maxFraction = null;
        _this.scaleNode = null;
        _this._Ske = null;
        // private coin: cc.Label = null;
        _this.man = null;
        _this._init();
        return _this;
    }
    UiFailed.prototype._init = function () {
        var Game = CocosZ_1.cocosz.resMgr.getRes(Constant_1.PanelName.UiFailed, cc.Prefab);
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
    UiFailed.prototype._onLoad = function () {
        this.btnAgain = cc.find("Canvas/ui/UiFailed/ScaleNode/BtnAgain");
        this.btnSkip = cc.find("Canvas/ui/UiFailed/ScaleNode/BtnSkip");
        this.btnBack = cc.find("Canvas/ui/UiFailed/ScaleNode/BtnBack");
        this.curFraction = cc.find("Canvas/ui/UiFailed/ScaleNode/fraction/curFraction").getComponent(cc.Label);
        this.maxFraction = cc.find("Canvas/ui/UiFailed/ScaleNode/fraction/maxFraction").getComponent(cc.Label);
        this.scaleNode = cc.find("Canvas/ui/UiFailed/ScaleNode");
        this.man = cc.find("Canvas/ui/UiFailed/ScaleNode/man/man").getComponent(dragonBones.ArmatureDisplay);
        // this.coin = cc.find("Canvas/ui/UiFailed/ScaleNode/Coin/num").getComponent(cc.Label);
        this._Ske = this.scaleNode.getChildByName("bg").getChildByName("ske").getComponent(dragonBones.ArmatureDisplay);
        this._Start();
    };
    UiFailed.prototype._Start = function () {
        this._page.zIndex += 99999;
        this.btnAgain.on(cc.Node.EventType.TOUCH_END, this._Again, this);
        this.btnSkip.on(cc.Node.EventType.TOUCH_END, this._Skip, this);
        this.btnBack.on(cc.Node.EventType.TOUCH_END, this._Back, this);
        CocosZ_1.cocosz.dataMgr.CurLevelId = CocosZ_1.cocosz.gameMgr.curLevelID;
        cc.game.on(Constant_1.default.E_ADClOSE, function () {
            lieyou_SdkManager.showBanner();
            console.log("-----------------------showBannerSucceed");
        }, this);
    };
    UiFailed.prototype._Back = function () {
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        CocosZ_1.cocosz.sceneMgr.loadScene("Home", function () {
            CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UiHome);
        });
    };
    UiFailed.prototype._Again = function () {
        // cocosz.audioMgr.playbtnEffect();
        // cocosz.sceneMgr.loadScene("LoadGame", () => {
        //     cocosz.uiMgr.openPage(PageName.UiLoadGame);
        //     cc.game.emit(Constant.E_GAME_LOGIC, { type: Constant.E_LEVEL_FAILED });
        // });
        // cocosz.dataMgr.CurSkinId
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        CocosZ_1.cocosz.sceneMgr.loadScene(CocosZ_1.cocosz.sceneMgr.sceneName, function () {
            CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UiGame);
            CocosZ_1.cocosz.gameMgr.initGame();
        });
    };
    UiFailed.prototype.onTips = function (msg) {
        Msg_1.default.Show(msg);
    };
    UiFailed.prototype._Skip = function () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            // this.BtnSkip.active = false;
            // cocosz.scheduleOnce(() => {
            CocosZ_1.cocosz.dataMgr.CurLevelId = CocosZ_1.cocosz.gameMgr.curLevelID;
            window.onGameEvent(2, "跳过关卡", (CocosZ_1.cocosz.dataMgr.CurLevelId + 1));
            CocosZ_1.cocosz.dataMgr.LevelUnLock(CocosZ_1.cocosz.dataMgr.CurLevelId);
            CocosZ_1.cocosz.dataMgr.CurLevelId++;
            CocosZ_1.cocosz.sceneMgr.loadScene("Game", function () {
                CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UiGame);
                CocosZ_1.cocosz.gameMgr.initGame();
            });
            // }, 1)
            return;
        }
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        // if (cocosz.dataMgr.SkinVedioNum > 0) {
        //     cocosz.dataMgr.SkinVedioNum--;
        //     Msg.Show("您拥有关卡跳过卡，本次消耗该道具直接获得奖励")
        //     cocosz.dataMgr.CurLevelId = cocosz.gameMgr.curLevelID;
        //     window.onGameEvent(2, "跳过关卡", (cocosz.dataMgr.CurLevelId + 1));
        //     cocosz.dataMgr.LevelUnLock(cocosz.dataMgr.CurLevelId);
        //     cocosz.dataMgr.CurLevelId++;
        //     cocosz.sceneMgr.loadScene("Game", () => {
        //         cocosz.uiMgr.openPage(PageName.UiGame);
        //         cocosz.gameMgr.initGame();
        //     });
        // }
        // if (cc.sys.platform === cc.sys.WECHAT_GAME) {
        //     cocosz.dataMgr.CurLevelId = cocosz.gameMgr.curLevelID;
        //     window.onGameEvent(2, "跳过关卡", (cocosz.dataMgr.CurLevelId + 1));
        //     cocosz.dataMgr.LevelUnLock(cocosz.dataMgr.CurLevelId);
        //     cocosz.dataMgr.CurLevelId++;
        //     cocosz.sceneMgr.loadScene("Game", () => {
        //         cocosz.uiMgr.openPage(PageName.UiGame);
        //         cocosz.gameMgr.initGame();
        //     });
        // }
        // else if ((cc.sys.platform === cc.sys.VIVO_GAME || cc.sys.platform === cc.sys.OPPO_GAME)) {
        //     lieyou_SdkManager.showRewardedVideoAd((res) => {
        //         cocosz.audioMgr.resumAllMusic();
        //         if (res) {
        //             cocosz.dataMgr.CurLevelId = cocosz.gameMgr.curLevelID;
        //             window.onGameEvent(2, "跳过关卡", (cocosz.dataMgr.CurLevelId + 1));
        //             cocosz.dataMgr.LevelUnLock(cocosz.dataMgr.CurLevelId);
        //             cocosz.dataMgr.CurLevelId++;
        //             cocosz.sceneMgr.loadScene("Game", () => {
        //                 cocosz.uiMgr.openPage(PageName.UiGame);
        //                 cocosz.gameMgr.initGame();
        //             });
        //             this.onTips("跳过关卡成功");
        //         } else {
        //             this.onTips('视频播放完成才能获取奖励');
        //         }
        //     });
        // }
        // return;
        CocosZ_1.cocosz.audioMgr.stopAll();
        lieyou_SdkManager.showRewardedVideoAd(function (res) {
            CocosZ_1.cocosz.audioMgr.resumAllMusic();
            if (res) {
                Msg_1.default.Show('获取视频奖励成功');
                window.onGameEvent(2, "跳过关卡", (CocosZ_1.cocosz.dataMgr.CurLevelId + 1));
                // this.BtnSkip.off(cc.Node.EventType.TOUCH_END);
                CocosZ_1.cocosz.dataMgr.LevelUnLock(CocosZ_1.cocosz.dataMgr.CurLevelId);
                CocosZ_1.cocosz.audioMgr.playbtnEffect();
                if (CocosZ_1.cocosz.dataMgr.CurLevelId >= 119) {
                    Msg_1.default.Show("敬请期待更多关卡!!!");
                    CocosZ_1.cocosz.scheduleOnce(function () {
                        CocosZ_1.cocosz.dataMgr.CurLevelId = 119;
                        CocosZ_1.cocosz.sceneMgr.loadScene("Game", function () {
                            CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UiGame);
                            CocosZ_1.cocosz.gameMgr.initGame();
                        });
                    }, 1.5);
                    return;
                }
                CocosZ_1.cocosz.dataMgr.CurLevelId++;
                CocosZ_1.cocosz.sceneMgr.loadScene("Game", function () {
                    CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UiGame);
                    CocosZ_1.cocosz.gameMgr.initGame();
                });
                // Msg.Show("---------跳过关卡--------------------")
            }
            else {
                Msg_1.default.Show('视频播放完成才能获取奖励');
            }
        });
    };
    UiFailed.prototype.onOpen = function () {
        // utils.GameFail((cocosz.dataMgr.CurLevelId + 1).toString());
        // utils.adManager.ShowInterstitial(BannerLocation.Over);
        // cocosz.audioMgr.stopAll();
        // cc.log(this._Ske.armature())
        // this._Ske.armature().getSlot("ribbon").displayIndex = 1;
        // let dragon: dragonBones.ArmatureDisplay = cc.instantiate(this._Ske)
        // let robotArmature = this._Ske.armature();
        // let robotSlot = robotArmature.getSlot("weapon_hand_r");
        // let factory = dragonBones.CCFactory.getInstance();
        // factory.replaceSlotDisplay(
        //     dragon.getArmatureKey(),
        //     "weapon",
        //     "weapon_r",
        //     "weapon_1004c_r",
        //     robotSlot
        // );
        var _this = this;
        // if (cc.sys.platform === cc.sys.VIVO_GAME) {
        //     lieyou_SdkManager.showSpotByFinish();
        // }
        // lieyou_SdkManager.showBanner();
        // if (cc.sys.platform === cc.sys.WECHAT_GAME) {
        //     lieyou_SdkManager.showMoreGameMiddle_three({ "node": this.scaleNode.getChildByName("nativePos"), "bgPath": "texture/ss", "scale": 0.9 });
        //     // this.scaleNode.x+=170;
        // }
        // else if ((cc.sys.platform === cc.sys.VIVO_GAME)) {
        //     lieyou_SdkManager.showSpotByPause();
        // }
        // else if (cc.sys.platform === cc.sys.OPPO_GAME) {
        //     this.scaleNode.x = -357;
        //     let sp = cocosz.resMgr.getRes("ss", cc.SpriteFrame);
        //     lieyou_SdkManager.showNativeAd_big({
        //         node: this.scaleNode.getChildByName("nativePos"), "titleColor": cc.color(255, 255, 255, 255,),
        //         "descColor": cc.color(255, 255, 255, 255,), bgPath: 'texture/ss', texture: sp, scale: 0.9, insetTop: 10, insetBottom: 10, insetLeft: 10, insetRight: 10
        //     });
        // }
        this.curFraction.string = CocosZ_1.cocosz.gameMgr.game2Fraction.toString();
        if (CocosZ_1.cocosz.gameMgr.game2Fraction > CocosZ_1.cocosz.dataMgr.fraction) {
            CocosZ_1.cocosz.dataMgr.fraction = CocosZ_1.cocosz.gameMgr.game2Fraction;
        }
        this.maxFraction.string = CocosZ_1.cocosz.dataMgr.fraction;
        cc.log(CocosZ_1.cocosz.sceneMgr.sceneName, "ocosz.sceneMgr.sceneName");
        if (CocosZ_1.cocosz.sceneMgr.sceneName == "Game") {
            this.curFraction.node.parent.active = false;
            this.btnSkip.active = true;
            window.onGameFail(1, (CocosZ_1.cocosz.gameMgr.curLevelID + 1));
        }
        else if (CocosZ_1.cocosz.sceneMgr.sceneName == "Game2") {
            window.onGameEvent(4, "无尽关卡失败", (CocosZ_1.cocosz.gameMgr.curLevelID + 1) + "-" + CocosZ_1.cocosz.dataMgr.fraction);
        }
        cc.tween(this.scaleNode.getChildByName("bg").getChildByName("2"))
            .repeatForever(cc.tween().by(3, { angle: 360 }))
            .start();
        cc.tween(this.scaleNode.getChildByName("bg").getChildByName("3"))
            .repeatForever(cc.tween().by(3, { angle: -360 }))
            .start();
        CocosZ_1.cocosz.audioMgr.playFeildEffect();
        this.btnAgain.active = false;
        this.btnAgain.opacity = 0;
        cc.tween(this.scaleNode)
            .by(0.4, { position: cc.v2(0, -850) })
            .call(function () {
            _this._Ske.playAnimation("ani_in", 1);
            _this._Ske.on(dragonBones.EventObject.LOOP_COMPLETE, function () {
                _this._Ske.off(dragonBones.EventObject.LOOP_COMPLETE);
                _this._Ske.playAnimation("ani_idle", 0);
            }, _this);
            _this.man.playAnimation("lose01", 1);
            _this.man.on(dragonBones.EventObject.LOOP_COMPLETE, function () {
                _this.man.off(dragonBones.EventObject.LOOP_COMPLETE);
                _this.man.playAnimation("lose02", 0);
            }, _this);
            CocosZ_1.cocosz.scheduleOnce(function () {
                _this.btnAgain.active = true;
                _this.btnAgain.opacity = 0;
                cc.tween(_this.btnAgain)
                    .to(0.3, { opacity: 255 })
                    .start();
            }, 0.4);
        })
            .start();
        // this.scaleNode.scale = 0;
        // cc.tween(this.scaleNode)
        //     .to(0.2, { scale: 1.5 })
        //     .start()
        // cocosz.gameMgr.tweeBtn(this.btnSkip, 1.05, 1);
        // let num = Math.floor(Math.random() * 4);
        // this.randomNum(num);
        // cocosz.dataMgr.LevelFaild(cocosz.dataMgr.CurLevelId);
        // let coinNum = cocosz.gameMgr.bigCoin > 2 ? cocosz.gameMgr.bigCoin : 2;
        // cocosz.dataMgr.CoinCount += coinNum * 10;
        // this.coin.string = (coinNum * 10).toString();
        cc.game.emit(Constant_1.default.E_UPDATE_COIN);
        // this.scaleNode.getChildByName("a").y = -cc.winSize.height / 3;
    };
    UiFailed.prototype.randomNum = function (num) {
        if (num <= 0 || num > 3) {
            num = Math.floor(Math.random() * 4);
            this.randomNum(num);
        }
        else {
            CocosZ_1.cocosz.dataMgr.setFaceNum(CocosZ_1.cocosz.dataMgr.CurLevelId, num);
        }
    };
    UiFailed.prototype.onClose = function () {
        cc.game.targetOff(this);
    };
    UiFailed.prototype.onDestroy = function () {
        cc.game.targetOff(this);
    };
    UiFailed = __decorate([
        ccclass
    ], UiFailed);
    return UiFailed;
}(UIPage_1.default));
exports.default = UiFailed;

cc._RF.pop();