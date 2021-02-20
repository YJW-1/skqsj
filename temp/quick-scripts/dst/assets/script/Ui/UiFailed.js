
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Ui/UiFailed.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxVaVxcVWlGYWlsZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUE4QjtBQUM5Qiw4Q0FBNkM7QUFDN0Msa0RBQXNFO0FBQ3RFLHdDQUFtQztBQUNuQyw4Q0FBOEM7QUFDOUMseUVBQXlFO0FBQ3pFLDBEQUEwRDtBQUVwRCxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFNO0lBa0J4QztRQUFBLFlBQ0ksaUJBQU8sU0FFVjtRQW5CTyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUM3QixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUc3QixlQUFTLEdBQVksSUFBSSxDQUFBO1FBQ3pCLFVBQUksR0FBZ0MsSUFBSSxDQUFDO1FBQ2pELGlDQUFpQztRQUV6QixTQUFHLEdBQWdDLElBQUksQ0FBQztRQUs1QyxLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7O0lBQ2pCLENBQUM7SUFDTyx3QkFBSyxHQUFiO1FBRUksSUFBSSxJQUFJLEdBQWMsZUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsb0JBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFFLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxJQUFJLEdBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxJQUFJLElBQUksRUFBRTtnQkFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDbEIsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dC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QUcsQ0FBQyxDQUFBO1FBQ1gsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUE7UUFDWiw0QkFBNEI7UUFFNUIsMkJBQTJCO1FBQzNCLCtCQUErQjtRQUMvQixlQUFlO1FBR2YsaURBQWlEO1FBQ2pELDJDQUEyQztRQUMzQyx1QkFBdUI7UUFDdkIsd0RBQXdEO1FBR3hELHlFQUF5RTtRQUN6RSw0Q0FBNEM7UUFDNUMsZ0RBQWdEO1FBQ2hELEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDckMsaUVBQWlFO0lBQ3JFLENBQUM7SUFFTyw0QkFBUyxHQUFqQixVQUFrQixHQUFXO1FBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO2FBQU07WUFDSCxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM3RDtJQUNMLENBQUM7SUFDUywwQkFBTyxHQUFqQjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFUyw0QkFBUyxHQUFuQjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUE1VWdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E2VTVCO0lBQUQsZUFBQztDQTdVRCxBQTZVQyxDQTdVcUMsZ0JBQU0sR0E2VTNDO2tCQTdVb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSVBhZ2UgZnJvbSBcIi4vVUlQYWdlXCI7XHJcbmltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29jb3NaXCI7XHJcbmltcG9ydCBDb25zdGFudCwgeyBQYWdlTmFtZSwgUGFuZWxOYW1lIH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG5pbXBvcnQgTXNnIGZyb20gXCIuLi9GcmFtZXdvcmsvTXNnXCI7XHJcbi8vIGltcG9ydCB7IHV0aWxzIH0gZnJvbSBcIi4uL3N0YXRpc3RpYy9VdGlsc1wiO1xyXG4vLyBpbXBvcnQgeyBCYW5uZXJMb2NhdGlvbiB9IGZyb20gXCIuLi9jb21tb24tcGx1Z2luL1NjcmlwdHMvWVpfQ29uc3RhbnRcIjtcclxuLy8gaW1wb3J0IHsgdXRpbHMgfSBmcm9tIFwiLi4vY29tbW9uLXBsdWdpbi9TY3JpcHRzL1V0aWxzXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVWlGYWlsZWQgZXh0ZW5kcyBVSVBhZ2Uge1xyXG5cclxuICAgIHByaXZhdGUgYnRuQWdhaW46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgYnRuU2tpcDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGJ0bkJhY2s6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgY3VyRnJhY3Rpb246IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIHByaXZhdGUgbWF4RnJhY3Rpb246IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzY2FsZU5vZGU6IGNjLk5vZGUgPSBudWxsXHJcbiAgICBwcml2YXRlIF9Ta2U6IGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIGNvaW46IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIG1hbjogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5ID0gbnVsbDtcclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9pbml0KCkge1xyXG5cclxuICAgICAgICBsZXQgR2FtZTogY2MuUHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoUGFuZWxOYW1lLlVpRmFpbGVkLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgIGlmIChHYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUoR2FtZSk7XHJcbiAgICAgICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWdlID0gbm9kZTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvdWlcIikuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICAgICAgICAgIHRoaXMuX29uTG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuYnRuQWdhaW4gPSBjYy5maW5kKFwiQ2FudmFzL3VpL1VpRmFpbGVkL1NjYWxlTm9kZS9CdG5BZ2FpblwiKTtcclxuICAgICAgICB0aGlzLmJ0blNraXAgPSBjYy5maW5kKFwiQ2FudmFzL3VpL1VpRmFpbGVkL1NjYWxlTm9kZS9CdG5Ta2lwXCIpO1xyXG4gICAgICAgIHRoaXMuYnRuQmFjayA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlGYWlsZWQvU2NhbGVOb2RlL0J0bkJhY2tcIik7XHJcbiAgICAgICAgdGhpcy5jdXJGcmFjdGlvbiA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlGYWlsZWQvU2NhbGVOb2RlL2ZyYWN0aW9uL2N1ckZyYWN0aW9uXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5tYXhGcmFjdGlvbiA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlGYWlsZWQvU2NhbGVOb2RlL2ZyYWN0aW9uL21heEZyYWN0aW9uXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5zY2FsZU5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL3VpL1VpRmFpbGVkL1NjYWxlTm9kZVwiKTtcclxuICAgICAgICB0aGlzLm1hbiA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlGYWlsZWQvU2NhbGVOb2RlL21hbi9tYW5cIikuZ2V0Q29tcG9uZW50KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSk7XHJcbiAgICAgICAgLy8gdGhpcy5jb2luID0gY2MuZmluZChcIkNhbnZhcy91aS9VaUZhaWxlZC9TY2FsZU5vZGUvQ29pbi9udW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLl9Ta2UgPSB0aGlzLnNjYWxlTm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwic2tlXCIpLmdldENvbXBvbmVudChkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkpO1xyXG4gICAgICAgIHRoaXMuX1N0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9TdGFydCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5fcGFnZS56SW5kZXggKz0gOTk5OTk7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuQWdhaW4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl9BZ2FpbiwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5idG5Ta2lwLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fU2tpcCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5idG5CYWNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fQmFjaywgdGhpcyk7XHJcblxyXG5cclxuICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID0gY29jb3N6LmdhbWVNZ3IuY3VyTGV2ZWxJRDtcclxuXHJcbiAgICAgICAgY2MuZ2FtZS5vbihDb25zdGFudC5FX0FEQ2xPU0UsICgpID0+IHtcclxuICAgICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuc2hvd0Jhbm5lcigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tc2hvd0Jhbm5lclN1Y2NlZWRcIilcclxuICAgICAgICB9LCB0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX0JhY2soKSB7XHJcbiAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlidG5FZmZlY3QoKTtcclxuXHJcbiAgICAgICAgY29jb3N6LnNjZW5lTWdyLmxvYWRTY2VuZShcIkhvbWVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhZ2UoUGFnZU5hbWUuVWlIb21lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9BZ2FpbigpIHtcclxuICAgICAgICAvLyBjb2Nvc3ouYXVkaW9NZ3IucGxheWJ0bkVmZmVjdCgpO1xyXG4gICAgICAgIC8vIGNvY29zei5zY2VuZU1nci5sb2FkU2NlbmUoXCJMb2FkR2FtZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvY29zei51aU1nci5vcGVuUGFnZShQYWdlTmFtZS5VaUxvYWRHYW1lKTtcclxuICAgICAgICAvLyAgICAgY2MuZ2FtZS5lbWl0KENvbnN0YW50LkVfR0FNRV9MT0dJQywgeyB0eXBlOiBDb25zdGFudC5FX0xFVkVMX0ZBSUxFRCB9KTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgLy8gY29jb3N6LmRhdGFNZ3IuQ3VyU2tpbklkXHJcbiAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlidG5FZmZlY3QoKTtcclxuICAgICAgICBjb2Nvc3ouc2NlbmVNZ3IubG9hZFNjZW5lKGNvY29zei5zY2VuZU1nci5zY2VuZU5hbWUsICgpID0+IHtcclxuICAgICAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYWdlKFBhZ2VOYW1lLlVpR2FtZSk7XHJcbiAgICAgICAgICAgIGNvY29zei5nYW1lTWdyLmluaXRHYW1lKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25UaXBzKG1zZykge1xyXG4gICAgICAgIE1zZy5TaG93KG1zZyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgX1NraXAoKSB7XHJcblxyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5CdG5Ta2lwLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyBjb2Nvc3ouc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9IGNvY29zei5nYW1lTWdyLmN1ckxldmVsSUQ7XHJcbiAgICAgICAgICAgIHdpbmRvdy5vbkdhbWVFdmVudCgyLCBcIui3s+i/h+WFs+WNoVwiLCAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCArIDEpKTtcclxuXHJcbiAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkxldmVsVW5Mb2NrKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQpO1xyXG4gICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkKys7XHJcbiAgICAgICAgICAgIGNvY29zei5zY2VuZU1nci5sb2FkU2NlbmUoXCJHYW1lXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvY29zei51aU1nci5vcGVuUGFnZShQYWdlTmFtZS5VaUdhbWUpO1xyXG4gICAgICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3IuaW5pdEdhbWUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIH0sIDEpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5YnRuRWZmZWN0KCk7XHJcbiAgICAgICAgLy8gaWYgKGNvY29zei5kYXRhTWdyLlNraW5WZWRpb051bSA+IDApIHtcclxuICAgICAgICAvLyAgICAgY29jb3N6LmRhdGFNZ3IuU2tpblZlZGlvTnVtLS07XHJcbiAgICAgICAgLy8gICAgIE1zZy5TaG93KFwi5oKo5oul5pyJ5YWz5Y2h6Lez6L+H5Y2h77yM5pys5qyh5raI6ICX6K+l6YGT5YW355u05o6l6I635b6X5aWW5YqxXCIpXHJcblxyXG4gICAgICAgIC8vICAgICBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID0gY29jb3N6LmdhbWVNZ3IuY3VyTGV2ZWxJRDtcclxuICAgICAgICAvLyAgICAgd2luZG93Lm9uR2FtZUV2ZW50KDIsIFwi6Lez6L+H5YWz5Y2hXCIsIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkICsgMSkpO1xyXG5cclxuICAgICAgICAvLyAgICAgY29jb3N6LmRhdGFNZ3IuTGV2ZWxVbkxvY2soY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCk7XHJcbiAgICAgICAgLy8gICAgIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQrKztcclxuICAgICAgICAvLyAgICAgY29jb3N6LnNjZW5lTWdyLmxvYWRTY2VuZShcIkdhbWVcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYWdlKFBhZ2VOYW1lLlVpR2FtZSk7XHJcbiAgICAgICAgLy8gICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pbml0R2FtZSgpO1xyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgLy8gICAgIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPSBjb2Nvc3ouZ2FtZU1nci5jdXJMZXZlbElEO1xyXG4gICAgICAgIC8vICAgICB3aW5kb3cub25HYW1lRXZlbnQoMiwgXCLot7Pov4flhbPljaFcIiwgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgKyAxKSk7XHJcblxyXG4gICAgICAgIC8vICAgICBjb2Nvc3ouZGF0YU1nci5MZXZlbFVuTG9jayhjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkKTtcclxuICAgICAgICAvLyAgICAgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCsrO1xyXG4gICAgICAgIC8vICAgICBjb2Nvc3ouc2NlbmVNZ3IubG9hZFNjZW5lKFwiR2FtZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhZ2UoUGFnZU5hbWUuVWlHYW1lKTtcclxuICAgICAgICAvLyAgICAgICAgIGNvY29zei5nYW1lTWdyLmluaXRHYW1lKCk7XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIGlmICgoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuVklWT19HQU1FIHx8IGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLk9QUE9fR0FNRSkpIHtcclxuXHJcbiAgICAgICAgLy8gICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dSZXdhcmRlZFZpZGVvQWQoKHJlcykgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnJlc3VtQWxsTXVzaWMoKTtcclxuICAgICAgICAvLyAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID0gY29jb3N6LmdhbWVNZ3IuY3VyTGV2ZWxJRDtcclxuICAgICAgICAvLyAgICAgICAgICAgICB3aW5kb3cub25HYW1lRXZlbnQoMiwgXCLot7Pov4flhbPljaFcIiwgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgKyAxKSk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkxldmVsVW5Mb2NrKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQrKztcclxuICAgICAgICAvLyAgICAgICAgICAgICBjb2Nvc3ouc2NlbmVNZ3IubG9hZFNjZW5lKFwiR2FtZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvY29zei51aU1nci5vcGVuUGFnZShQYWdlTmFtZS5VaUdhbWUpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pbml0R2FtZSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMub25UaXBzKFwi6Lez6L+H5YWz5Y2h5oiQ5YqfXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLm9uVGlwcygn6KeG6aKR5pKt5pS+5a6M5oiQ5omN6IO96I635Y+W5aWW5YqxJyk7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG5cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIHJldHVybjtcclxuXHJcbiAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnN0b3BBbGwoKTtcclxuICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93UmV3YXJkZWRWaWRlb0FkKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnJlc3VtQWxsTXVzaWMoKTtcclxuICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgTXNnLlNob3coJ+iOt+WPluinhumikeWlluWKseaIkOWKnycpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cub25HYW1lRXZlbnQoMiwgXCLot7Pov4flhbPljaFcIiwgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgKyAxKSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLkJ0blNraXAub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5MZXZlbFVuTG9jayhjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkKTtcclxuICAgICAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5YnRuRWZmZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA+PSAxMTkpIHtcclxuICAgICAgICAgICAgICAgICAgICBNc2cuU2hvdyhcIuaVrOivt+acn+W+heabtOWkmuWFs+WNoSEhIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9IDExOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LnNjZW5lTWdyLmxvYWRTY2VuZShcIkdhbWVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYWdlKFBhZ2VOYW1lLlVpR2FtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pbml0R2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkKys7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouc2NlbmVNZ3IubG9hZFNjZW5lKFwiR2FtZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYWdlKFBhZ2VOYW1lLlVpR2FtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3IuaW5pdEdhbWUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE1zZy5TaG93KFwiLS0tLS0tLS0t6Lez6L+H5YWz5Y2hLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIE1zZy5TaG93KCfop4bpopHmkq3mlL7lrozmiJDmiY3og73ojrflj5blpZblirEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25PcGVuKCkge1xyXG4gICAgICAgIC8vIHV0aWxzLkdhbWVGYWlsKChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkICsgMSkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgLy8gdXRpbHMuYWRNYW5hZ2VyLlNob3dJbnRlcnN0aXRpYWwoQmFubmVyTG9jYXRpb24uT3Zlcik7XHJcbiAgICAgICAgLy8gY29jb3N6LmF1ZGlvTWdyLnN0b3BBbGwoKTtcclxuICAgICAgICAvLyBjYy5sb2codGhpcy5fU2tlLmFybWF0dXJlKCkpXHJcbiAgICAgICAgLy8gdGhpcy5fU2tlLmFybWF0dXJlKCkuZ2V0U2xvdChcInJpYmJvblwiKS5kaXNwbGF5SW5kZXggPSAxO1xyXG4gICAgICAgIC8vIGxldCBkcmFnb246IGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuX1NrZSlcclxuICAgICAgICAvLyBsZXQgcm9ib3RBcm1hdHVyZSA9IHRoaXMuX1NrZS5hcm1hdHVyZSgpO1xyXG4gICAgICAgIC8vIGxldCByb2JvdFNsb3QgPSByb2JvdEFybWF0dXJlLmdldFNsb3QoXCJ3ZWFwb25faGFuZF9yXCIpO1xyXG4gICAgICAgIC8vIGxldCBmYWN0b3J5ID0gZHJhZ29uQm9uZXMuQ0NGYWN0b3J5LmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgLy8gZmFjdG9yeS5yZXBsYWNlU2xvdERpc3BsYXkoXHJcbiAgICAgICAgLy8gICAgIGRyYWdvbi5nZXRBcm1hdHVyZUtleSgpLFxyXG4gICAgICAgIC8vICAgICBcIndlYXBvblwiLFxyXG4gICAgICAgIC8vICAgICBcIndlYXBvbl9yXCIsXHJcbiAgICAgICAgLy8gICAgIFwid2VhcG9uXzEwMDRjX3JcIixcclxuICAgICAgICAvLyAgICAgcm9ib3RTbG90XHJcbiAgICAgICAgLy8gKTtcclxuXHJcbiAgICAgICAgLy8gaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLlZJVk9fR0FNRSkge1xyXG4gICAgICAgIC8vICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93U3BvdEJ5RmluaXNoKCk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBsaWV5b3VfU2RrTWFuYWdlci5zaG93QmFubmVyKCk7XHJcblxyXG4gICAgICAgIC8vIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgIC8vICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93TW9yZUdhbWVNaWRkbGVfdGhyZWUoeyBcIm5vZGVcIjogdGhpcy5zY2FsZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJuYXRpdmVQb3NcIiksIFwiYmdQYXRoXCI6IFwidGV4dHVyZS9zc1wiLCBcInNjYWxlXCI6IDAuOSB9KTtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5zY2FsZU5vZGUueCs9MTcwO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIGlmICgoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuVklWT19HQU1FKSkge1xyXG4gICAgICAgIC8vICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93U3BvdEJ5UGF1c2UoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuT1BQT19HQU1FKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2NhbGVOb2RlLnggPSAtMzU3O1xyXG4gICAgICAgIC8vICAgICBsZXQgc3AgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcInNzXCIsIGNjLlNwcml0ZUZyYW1lKTtcclxuICAgICAgICAvLyAgICAgbGlleW91X1Nka01hbmFnZXIuc2hvd05hdGl2ZUFkX2JpZyh7XHJcbiAgICAgICAgLy8gICAgICAgICBub2RlOiB0aGlzLnNjYWxlTm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5hdGl2ZVBvc1wiKSwgXCJ0aXRsZUNvbG9yXCI6IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSwpLFxyXG4gICAgICAgIC8vICAgICAgICAgXCJkZXNjQ29sb3JcIjogY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1LCksIGJnUGF0aDogJ3RleHR1cmUvc3MnLCB0ZXh0dXJlOiBzcCwgc2NhbGU6IDAuOSwgaW5zZXRUb3A6IDEwLCBpbnNldEJvdHRvbTogMTAsIGluc2V0TGVmdDogMTAsIGluc2V0UmlnaHQ6IDEwXHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuY3VyRnJhY3Rpb24uc3RyaW5nID0gY29jb3N6LmdhbWVNZ3IuZ2FtZTJGcmFjdGlvbi50b1N0cmluZygpXHJcblxyXG4gICAgICAgIGlmIChjb2Nvc3ouZ2FtZU1nci5nYW1lMkZyYWN0aW9uID4gY29jb3N6LmRhdGFNZ3IuZnJhY3Rpb24pIHtcclxuICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuZnJhY3Rpb24gPSBjb2Nvc3ouZ2FtZU1nci5nYW1lMkZyYWN0aW9uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tYXhGcmFjdGlvbi5zdHJpbmcgPSBjb2Nvc3ouZGF0YU1nci5mcmFjdGlvbjtcclxuICAgICAgICBjYy5sb2coY29jb3N6LnNjZW5lTWdyLnNjZW5lTmFtZSwgXCJvY29zei5zY2VuZU1nci5zY2VuZU5hbWVcIilcclxuICAgICAgICBpZiAoY29jb3N6LnNjZW5lTWdyLnNjZW5lTmFtZSA9PSBcIkdhbWVcIikge1xyXG4gICAgICAgICAgICB0aGlzLmN1ckZyYWN0aW9uLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJ0blNraXAuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5vbkdhbWVGYWlsKDEsIChjb2Nvc3ouZ2FtZU1nci5jdXJMZXZlbElEICsgMSkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoY29jb3N6LnNjZW5lTWdyLnNjZW5lTmFtZSA9PSBcIkdhbWUyXCIpIHtcclxuXHJcbiAgICAgICAgICAgIHdpbmRvdy5vbkdhbWVFdmVudCg0LCBcIuaXoOWwveWFs+WNoeWksei0pVwiLCAoY29jb3N6LmdhbWVNZ3IuY3VyTGV2ZWxJRCArIDEpICsgXCItXCIgKyBjb2Nvc3ouZGF0YU1nci5mcmFjdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5zY2FsZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5nZXRDaGlsZEJ5TmFtZShcIjJcIikpXHJcbiAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKGNjLnR3ZWVuKCkuYnkoMywgeyBhbmdsZTogMzYwIH0pKVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLnNjYWxlTm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmdldENoaWxkQnlOYW1lKFwiM1wiKSlcclxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoY2MudHdlZW4oKS5ieSgzLCB7IGFuZ2xlOiAtMzYwIH0pKVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG5cclxuXHJcbiAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlGZWlsZEVmZmVjdCgpO1xyXG5cclxuICAgICAgICB0aGlzLmJ0bkFnYWluLmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmJ0bkFnYWluLm9wYWNpdHkgPSAwO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLnNjYWxlTm9kZSlcclxuICAgICAgICAgICAgLmJ5KDAuNCwgeyBwb3NpdGlvbjogY2MudjIoMCwgLTg1MCkgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fU2tlLnBsYXlBbmltYXRpb24oXCJhbmlfaW5cIiwgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9Ta2Uub24oZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuTE9PUF9DT01QTEVURSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX1NrZS5vZmYoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuTE9PUF9DT01QTEVURSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX1NrZS5wbGF5QW5pbWF0aW9uKFwiYW5pX2lkbGVcIiwgMCk7XHJcbiAgICAgICAgICAgICAgICB9LCB0aGlzKVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMubWFuLnBsYXlBbmltYXRpb24oXCJsb3NlMDFcIiwgMSlcclxuICAgICAgICAgICAgICAgIHRoaXMubWFuLm9uKGRyYWdvbkJvbmVzLkV2ZW50T2JqZWN0LkxPT1BfQ09NUExFVEUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hbi5vZmYoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuTE9PUF9DT01QTEVURSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYW4ucGxheUFuaW1hdGlvbihcImxvc2UwMlwiLCAwKTtcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMpXHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0bkFnYWluLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5BZ2Fpbi5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmJ0bkFnYWluKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudG8oMC4zLCB7IG9wYWNpdHk6IDI1NSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH0sIDAuNClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAvLyB0aGlzLnNjYWxlTm9kZS5zY2FsZSA9IDA7XHJcblxyXG4gICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuc2NhbGVOb2RlKVxyXG4gICAgICAgIC8vICAgICAudG8oMC4yLCB7IHNjYWxlOiAxLjUgfSlcclxuICAgICAgICAvLyAgICAgLnN0YXJ0KClcclxuXHJcblxyXG4gICAgICAgIC8vIGNvY29zei5nYW1lTWdyLnR3ZWVCdG4odGhpcy5idG5Ta2lwLCAxLjA1LCAxKTtcclxuICAgICAgICAvLyBsZXQgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCk7XHJcbiAgICAgICAgLy8gdGhpcy5yYW5kb21OdW0obnVtKTtcclxuICAgICAgICAvLyBjb2Nvc3ouZGF0YU1nci5MZXZlbEZhaWxkKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gbGV0IGNvaW5OdW0gPSBjb2Nvc3ouZ2FtZU1nci5iaWdDb2luID4gMiA/IGNvY29zei5nYW1lTWdyLmJpZ0NvaW4gOiAyO1xyXG4gICAgICAgIC8vIGNvY29zei5kYXRhTWdyLkNvaW5Db3VudCArPSBjb2luTnVtICogMTA7XHJcbiAgICAgICAgLy8gdGhpcy5jb2luLnN0cmluZyA9IChjb2luTnVtICogMTApLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgY2MuZ2FtZS5lbWl0KENvbnN0YW50LkVfVVBEQVRFX0NPSU4pO1xyXG4gICAgICAgIC8vIHRoaXMuc2NhbGVOb2RlLmdldENoaWxkQnlOYW1lKFwiYVwiKS55ID0gLWNjLndpblNpemUuaGVpZ2h0IC8gMztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJhbmRvbU51bShudW06IG51bWJlcikge1xyXG4gICAgICAgIGlmIChudW0gPD0gMCB8fCBudW0gPiAzKSB7XHJcbiAgICAgICAgICAgIG51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpO1xyXG4gICAgICAgICAgICB0aGlzLnJhbmRvbU51bShudW0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLnNldEZhY2VOdW0oY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCwgbnVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25DbG9zZSgpIHtcclxuICAgICAgICBjYy5nYW1lLnRhcmdldE9mZih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNjLmdhbWUudGFyZ2V0T2ZmKHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==