import UIPage from "./UIPage";
import { cocosz } from "../Framework/CocosZ";
import Constant, { PageName, PanelName } from "../Framework/Constant";
import Msg from "../Framework/Msg";
// import { utils } from "../statistic/Utils";
// import { BannerLocation } from "../common-plugin/Scripts/YZ_Constant";
// import { utils } from "../common-plugin/Scripts/Utils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UiFailed extends UIPage {

    private btnAgain: cc.Node = null;

    private btnSkip: cc.Node = null;
    private btnBack: cc.Node = null;

    private curFraction: cc.Label = null;
    private maxFraction: cc.Label = null;


    private scaleNode: cc.Node = null
    private _Ske: dragonBones.ArmatureDisplay = null;
    // private coin: cc.Label = null;

    private man: dragonBones.ArmatureDisplay = null;


    constructor() {
        super();
        this._init();
    }
    private _init() {

        let Game: cc.Prefab = cocosz.resMgr.getRes(PanelName.UiFailed, cc.Prefab);
        if (Game) {
            let node: cc.Node = cc.instantiate(Game);
            if (node) {
                this._page = node;
                cc.find("Canvas/ui").addChild(node);
                node.active = false;
                node.position = cc.Vec2.ZERO;
                this._onLoad();
            }
        }
    }
    private _onLoad() {
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
    }
    private _Start() {

        this._page.zIndex += 99999;

        this.btnAgain.on(cc.Node.EventType.TOUCH_END, this._Again, this);
        this.btnSkip.on(cc.Node.EventType.TOUCH_END, this._Skip, this);
        this.btnBack.on(cc.Node.EventType.TOUCH_END, this._Back, this);


        cocosz.dataMgr.CurLevelId = cocosz.gameMgr.curLevelID;

        cc.game.on(Constant.E_ADClOSE, () => {
            lieyou_SdkManager.showBanner();
            console.log("-----------------------showBannerSucceed")
        }, this)
    }

    private _Back() {
        cocosz.audioMgr.playbtnEffect();

        cocosz.sceneMgr.loadScene("Home", () => {
            cocosz.uiMgr.openPage(PageName.UiHome);
        });
    }

    private _Again() {
        // cocosz.audioMgr.playbtnEffect();
        // cocosz.sceneMgr.loadScene("LoadGame", () => {
        //     cocosz.uiMgr.openPage(PageName.UiLoadGame);
        //     cc.game.emit(Constant.E_GAME_LOGIC, { type: Constant.E_LEVEL_FAILED });
        // });

        // cocosz.dataMgr.CurSkinId
        cocosz.audioMgr.playbtnEffect();
        cocosz.sceneMgr.loadScene(cocosz.sceneMgr.sceneName, () => {
            cocosz.uiMgr.openPage(PageName.UiGame);
            cocosz.gameMgr.initGame();
        });
    }

    onTips(msg) {
        Msg.Show(msg);
    }


    private _Skip() {

        if (cc.sys.platform === cc.sys.WECHAT_GAME) {

            // this.BtnSkip.active = false;
            // cocosz.scheduleOnce(() => {
            cocosz.dataMgr.CurLevelId = cocosz.gameMgr.curLevelID;
            window.onGameEvent(2, "跳过关卡", (cocosz.dataMgr.CurLevelId + 1));

            cocosz.dataMgr.LevelUnLock(cocosz.dataMgr.CurLevelId);
            cocosz.dataMgr.CurLevelId++;
            cocosz.sceneMgr.loadScene("Game", () => {
                cocosz.uiMgr.openPage(PageName.UiGame);
                cocosz.gameMgr.initGame();
            });
            // }, 1)
            return;
        }

        cocosz.audioMgr.playbtnEffect();
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

        cocosz.audioMgr.stopAll();
        lieyou_SdkManager.showRewardedVideoAd(function (res) {
            cocosz.audioMgr.resumAllMusic();
            if (res) {
                Msg.Show('获取视频奖励成功');


                window.onGameEvent(2, "跳过关卡", (cocosz.dataMgr.CurLevelId + 1));
                // this.BtnSkip.off(cc.Node.EventType.TOUCH_END);
                cocosz.dataMgr.LevelUnLock(cocosz.dataMgr.CurLevelId);
                cocosz.audioMgr.playbtnEffect();
                if (cocosz.dataMgr.CurLevelId >= 119) {
                    Msg.Show("敬请期待更多关卡!!!");
                    cocosz.scheduleOnce(() => {
                        cocosz.dataMgr.CurLevelId = 119;
                        cocosz.sceneMgr.loadScene("Game", () => {
                            cocosz.uiMgr.openPage(PageName.UiGame);
                            cocosz.gameMgr.initGame();
                        });
                    }, 1.5);
                    return;
                }

                cocosz.dataMgr.CurLevelId++;
                cocosz.sceneMgr.loadScene("Game", () => {
                    cocosz.uiMgr.openPage(PageName.UiGame);
                    cocosz.gameMgr.initGame();
                });

                // Msg.Show("---------跳过关卡--------------------")
            } else {
                Msg.Show('视频播放完成才能获取奖励');
            }
        });

    }

    protected onOpen() {
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


        this.curFraction.string = cocosz.gameMgr.game2Fraction.toString()

        if (cocosz.gameMgr.game2Fraction > cocosz.dataMgr.fraction) {
            cocosz.dataMgr.fraction = cocosz.gameMgr.game2Fraction;
        }

        this.maxFraction.string = cocosz.dataMgr.fraction;
        cc.log(cocosz.sceneMgr.sceneName, "ocosz.sceneMgr.sceneName")
        if (cocosz.sceneMgr.sceneName == "Game") {
            this.curFraction.node.parent.active = false;
            this.btnSkip.active = true;

            window.onGameFail(1, (cocosz.gameMgr.curLevelID + 1));
        } else if (cocosz.sceneMgr.sceneName == "Game2") {

            window.onGameEvent(4, "无尽关卡失败", (cocosz.gameMgr.curLevelID + 1) + "-" + cocosz.dataMgr.fraction);
        }


        cc.tween(this.scaleNode.getChildByName("bg").getChildByName("2"))
            .repeatForever(cc.tween().by(3, { angle: 360 }))
            .start()

        cc.tween(this.scaleNode.getChildByName("bg").getChildByName("3"))
            .repeatForever(cc.tween().by(3, { angle: -360 }))
            .start()


        cocosz.audioMgr.playFeildEffect();

        this.btnAgain.active = false;

        this.btnAgain.opacity = 0;

        cc.tween(this.scaleNode)
            .by(0.4, { position: cc.v2(0, -850) })
            .call(() => {
                this._Ske.playAnimation("ani_in", 1);
                this._Ske.on(dragonBones.EventObject.LOOP_COMPLETE, () => {
                    this._Ske.off(dragonBones.EventObject.LOOP_COMPLETE);

                    this._Ske.playAnimation("ani_idle", 0);
                }, this)

                this.man.playAnimation("lose01", 1)
                this.man.on(dragonBones.EventObject.LOOP_COMPLETE, () => {
                    this.man.off(dragonBones.EventObject.LOOP_COMPLETE);
                    this.man.playAnimation("lose02", 0);
                }, this)
                cocosz.scheduleOnce(() => {
                    this.btnAgain.active = true;
                    this.btnAgain.opacity = 0;
                    cc.tween(this.btnAgain)
                        .to(0.3, { opacity: 255 })
                        .start();
                }, 0.4)
            })
            .start()
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
        cc.game.emit(Constant.E_UPDATE_COIN);
        // this.scaleNode.getChildByName("a").y = -cc.winSize.height / 3;
    }

    private randomNum(num: number) {
        if (num <= 0 || num > 3) {
            num = Math.floor(Math.random() * 4);
            this.randomNum(num);
        } else {
            cocosz.dataMgr.setFaceNum(cocosz.dataMgr.CurLevelId, num);
        }
    }
    protected onClose() {
        cc.game.targetOff(this);
    }

    protected onDestroy() {
        cc.game.targetOff(this);
    }
}
