import UIPage from "./UIPage";
import CocosZ, { cocosz } from "../Framework/CocosZ";
import Constant, { PageName, PanelName } from "../Framework/Constant";
import Msg from "../Framework/Msg";
// import { utils } from "../statistic/Utils";
// import { BannerLocation } from "../common-plugin/Scripts/YZ_Constant";
// import { utils } from "../common-plugin/Scripts/Utils";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UiSucceed extends UIPage {
    /**下一关 */
    private _BtnNext: cc.Node = null;
    private _BtnBack: cc.Node = null;
    private _BtnAgain: cc.Node = null;

    private ScaleNode: cc.Node = null;
    /**星星父节点 */
    // private StarNode: cc.Node[] = [];
    // private reward: cc.Node;
    // private prograss: cc.ProgressBar;
    private action: any = null

    // private prograss: cc.ProgressBar;





    constructor() {
        super();
        this._init();
    }
    private _init() {

        let Game: cc.Prefab = cocosz.resMgr.getRes(PanelName.UiSucceed, cc.Prefab);
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
    }
    private _Start() {
        this._BtnNext.on(cc.Node.EventType.TOUCH_END, this._Next, this);
        this._BtnBack.on(cc.Node.EventType.TOUCH_END, this._Back, this);
        this._BtnAgain.on(cc.Node.EventType.TOUCH_END, this._Again, this);
        cc.director.getScheduler().enableForTarget(this);
        cocosz.dataMgr.CurLevelId = cocosz.gameMgr.curLevelID;
        cc.log(cocosz.dataMgr.CurLevelId, "------------succeed")
        cocosz.dataMgr.LevelUnLock(cocosz.dataMgr.CurLevelId);

        // cocosz.dataMgr.setStarNum(cocosz.dataMgr.CurLevelId, cocosz.gameMgr.star)
        // this.Star();
    }

    protected onOpen() {
        // utils.adManager.ShowBanner(BannerLocation.Home);
        // utils.adManager.ShowInterstitial(BannerLocation.Over);
        window.onGameSuccess(1, (cocosz.dataMgr.CurLevelId + 1));

        this._page.zIndex += 100
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
    }

    // private _FaceSpMove() {
    //     this.FaceSp.node.runAction(cc.spawn(cc.fadeTo(0.5, 255), cc.scaleTo(0.5, 0.94)));
    // }

    private _Again() {
        cocosz.audioMgr.playbtnEffect();
        // cocosz.sceneMgr.loadScene("LoadGame", () => {
        //     cocosz.uiMgr.openPage(PageName.UiLoadGame);
        //     cc.game.emit(Constant.E_GAME_LOGIC, { type: Constant.E_LEVEL_FAILED });
        // });
        cocosz.sceneMgr.loadScene("Game", () => {
            cocosz.uiMgr.openPage(PageName.UiGame);
            cocosz.gameMgr.initGame();
        });
    }
    private _Double() {
        if (cocosz.gameMgr.LevelNum >= 5) {
            cocosz.gameMgr.LevelNum = 0;
            return;
        }
        cocosz.audioMgr.playbtnEffect();
        Msg.Show("视频播放失败!");
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

    }

    private _Next() {
        cc.log("-------------------_Next-----")
        cocosz.audioMgr.playbtnEffect();
        // utils.adManager.ShowBanner(BannerLocation.Home);
        if (cocosz.dataMgr.CurLevelId >= 79) {
            Msg.Show("敬请期待更多关卡!!!");
            cocosz.scheduleOnce(() => {
                cocosz.sceneMgr.loadScene("Home", () => {
                    cocosz.dataMgr.CurLevelId = 79;
                    cocosz.uiMgr.openPage(PageName.UiHome);
                });
            }, 1.5);
            return;
        }
        if (this.action) {
            this.action.stop()
        }
        cc.director.getScheduler().unscheduleAllForTarget(this);
        cocosz.dataMgr.CurLevelId++;
        cocosz.sceneMgr.loadScene("LoadGame", () => {
            cocosz.uiMgr.openPage(PageName.UiLoadGame);
            cc.game.emit(Constant.E_GAME_LOGIC, { type: Constant.E_LEVEL_FAILED });
        });

    }
    private _Back() {
        cocosz.audioMgr.playbtnEffect();
        cc.log("-------------------Home-----");
        cocosz.sceneMgr.loadScene("Home", () => {
            cocosz.uiMgr.openPage(PageName.UiHome);
        });

    }

    private Star() {
        let node = cc.find("Canvas/ui/UiSucceed/ScaleNode/StarNode");
        let num = 0.2;
        cc.log("----------------", cocosz.dataMgr.getStarInfo(cocosz.dataMgr.CurLevelId))
        // switch (cocosz.dataMgr.getStarInfo(cocosz.dataMgr.CurLevelId) == 0 ? 3 : 3) {
        switch (cocosz.dataMgr.getStarInfo(cocosz.dataMgr.CurLevelId)) {
            case 0: {
                for (let index = 0; index < node.childrenCount; index++) {
                    this.StarNode[index].children[0].active = false;
                }
                break;
            }
            case 1: {
                for (let index = 0; index < node.childrenCount; index++) {
                    if (index == 0) {
                        this.StarNode[index].children[0].active = true;
                        cc.tween(this.StarNode[index].children[0])
                            .delay(num + (index * 0.3))
                            .to(0.2, { scale: 4, angle: 360, opacity: 255 })
                            .delay(0.2)

                            .to(0.1, { scale: 1, })
                            .call(() => {
                                let prefab = cocosz.resMgr.getRes("starLizi", cc.Prefab);
                                let node = cc.instantiate(prefab);
                                node.zIndex -= 10;
                                this.StarNode[index].addChild(node);
                                if (index == 0) {
                                    cocosz.audioMgr.playSucceedStar1Effect();
                                }
                                else if (index == 1) {
                                    cocosz.audioMgr.playSucceedStar2Effect();
                                }
                                else if (index == 2) {
                                    cocosz.audioMgr.playSucceedStar3Effect();
                                }
                            })
                            .start()
                    } else {
                        this.StarNode[index].children[0].active = false;
                    }
                }
                break;
            }
            case 2: {
                for (let index = 0; index < node.childrenCount; index++) {
                    if (index >= 0 && index < 2) {
                        this.StarNode[index].children[0].active = true;
                        cc.tween(this.StarNode[index].children[0])
                            .delay(num + (index * 0.3))
                            .to(0.2, { scale: 4, angle: 360, opacity: 255 })
                            .delay(0.2)

                            .to(0.1, { scale: 1, })
                            .call(() => {
                                let prefab = cocosz.resMgr.getRes("starLizi", cc.Prefab);
                                let node = cc.instantiate(prefab);
                                node.zIndex -= 10;
                                this.StarNode[index].addChild(node);
                                if (index == 0) {
                                    cocosz.audioMgr.playSucceedStar1Effect();
                                }
                                else if (index == 1) {
                                    cocosz.audioMgr.playSucceedStar2Effect();
                                }
                                else if (index == 2) {
                                    cocosz.audioMgr.playSucceedStar3Effect();
                                }
                            })
                            .start()
                    } else {
                        this.StarNode[index].children[0].active = false;
                    }
                }
                break;
            }
            case 3: {
                for (let index = 0; index < node.childrenCount; index++) {
                    this.StarNode[index].children[0].active = true;
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

                    cc.tween(this.StarNode[index].children[0])
                        .delay(num + (index * 0.3))
                        .to(0.2, { scale: 4, angle: 360, opacity: 255 })
                        .delay(0.2)

                        .to(0.1, { scale: 1, })
                        .call(() => {
                            let prefab = cocosz.resMgr.getRes("starLizi", cc.Prefab);
                            let node = cc.instantiate(prefab);
                            node.zIndex -= 10;
                            this.StarNode[index].addChild(node);
                            if (index == 0) {
                                cocosz.audioMgr.playSucceedStar1Effect();
                            }
                            else if (index == 1) {
                                cocosz.audioMgr.playSucceedStar2Effect();
                            }
                            else if (index == 2) {
                                cocosz.audioMgr.playSucceedStar3Effect();
                            }
                        })
                        .start()
                }
                break;
            }
        }
    }



    protected onClose() {
        cc.game.targetOff(this);
        if (this.action) {
            this.action.stop()
        }
        cc.director.getScheduler().unscheduleAllForTarget(this);
    }

    protected onDestroy() {
        cc.game.targetOff(this);
        if (this.action) {
            this.action.stop()
        }
        cc.director.getScheduler().unscheduleAllForTarget(this);
    }
}
