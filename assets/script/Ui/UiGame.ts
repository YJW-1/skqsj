import UIPage from "./UIPage";
import { cocosz } from "../Framework/CocosZ";
import Constant, { tag, PageName, PanelName, Direction } from "../Framework/Constant";
import Msg from "../Framework/Msg";
// import { BannerLocation } from "../common-plugin/Scripts/YZ_Constant";
// import { utils } from "../common-plugin/Scripts/Utils";

const { ccclass, property } = cc._decorator;
export let uiGame: UiGame = null;
@ccclass
export default class UiGame extends UIPage {

    private BtnPause: cc.Node = null;
    private BtnSkip: cc.Node = null;
    private BtnBoom: cc.Node = null;
    private boom: cc.Node = null;
    private LevelLabel: cc.Label = null;
    private Win: cc.Node = null;
    private man: cc.Node = null;
    private Label: cc.Label = null;
    public ProgressBar: cc.ProgressBar = null;
    public Fraction: number = 1000;
    public node: cc.Node = null;
    public handTips: cc.Node = null;

    public skinVideoCard: cc.Label = null;

    action: any = null;

    public boomNum: cc.Label = null;
    public set fraction(number: number) {
        // cc.log("--------fraction-", number)
        cocosz.gameMgr.game2Fraction = number;
        this.Label.string = number.toString();
    }


    public get fraction() {
        return cocosz.gameMgr.game2Fraction;
    }

    public isFaid: any = 0;

    constructor() {
        super();
        uiGame = this;
        this._init();
    }

    private _init() {
        let Game: cc.Prefab = cocosz.resMgr.getRes(PageName.UiGame, cc.Prefab);
        if (Game) {
            let node: cc.Node = cc.instantiate(Game);
            if (node) {
                this._page = node;
                // if (cocosz.sceneMgr.sceneName == "Game2") {
                cc.find("Canvas/ui").addChild(node);
                // }
                // else {
                //     cc.find("Canvas").addChild(node);
                // }
                node.active = false;
                node.position = cc.Vec2.ZERO;
                this._onLoad();
            }
        }
    }

    private _onLoad() {
        cc.director.getScheduler().enableForTarget(this);
        this.BtnPause = cc.find("Canvas/ui/UiGame/BtnPause");
        this.BtnSkip = cc.find("Canvas/ui/UiGame/BtnSkip");
        this.BtnBoom = cc.find("Canvas/ui/UiGame/BtnBoom");
        this.boom = cc.find("Canvas/ui/UiGame/boom");
        this.handTips = cc.find("Canvas/ui/UiGame/handTips");
        this.node = cc.find("Canvas/ui/UiGame");
        this.Label = cc.find("Canvas/ui/UiGame/Coin/num").getComponent(cc.Label);
        this.LevelLabel = cc.find("Canvas/ui/UiGame/BtnPause/level/num").getComponent(cc.Label);
        this.skinVideoCard = cc.find("Canvas/ui/UiGame/SkinVideoCard/num").getComponent(cc.Label);

        this.boomNum = cc.find("Canvas/ui/UiGame/BtnBoom/num").getComponent(cc.Label);

        // this.man=cc.find"Canvas/ui/UiGame/BtnSkip")
        this._Start();

    }




    private _Start() {
        this.BtnPause.on(cc.Node.EventType.TOUCH_END, this._Pause, this);

        this.BtnSkip.on(cc.Node.EventType.TOUCH_END, this._onBtnSkip, this);


        this.BtnBoom.on(cc.Node.EventType.TOUCH_START, (touch) => {
            this.boom.active = true;

            let pp = touch.getLocation();

            pp.y += 720 * cocosz.gameMgr.touchNum;

            // pp = this.BtnBoom.parent.convertToWorldSpaceAR(pp)
            const pos = this.BtnBoom.parent.convertToNodeSpaceAR(pp);
            // cc.log(pp.x, pp.y)

            this.boom.setPosition(pos);

        }, this);

        this.BtnBoom.on(cc.Node.EventType.TOUCH_MOVE, (touch) => {

            let pp = touch.getLocation();
            pp.y += 720 * cocosz.gameMgr.touchNum;
            // pp = this.BtnBoom.parent.convertToWorldSpaceAR(pp)

            const pos = this.BtnBoom.parent.convertToNodeSpaceAR(pp);
            // cc.log(pp.x, pp.y)

            this.boom.setPosition(pos);




        }, this);

        this.BtnBoom.on(cc.Node.EventType.TOUCH_END, () => {
            this.boom.active = false;
        }, this);


        this.BtnBoom.on(cc.Node.EventType.TOUCH_CANCEL, () => {
            if (this.BtnBoom.getChildByName("game_btn_noboom").active == true) return;
            let Prefab = cocosz.resMgr.getRes("boom", cc.Prefab);
            let node = cc.instantiate(Prefab);
            node.setPosition(this.boom.getPosition());
            this.boom.parent.addChild(node);
            cc.log(node)
            this.boom.active = false;

            cocosz.dataMgr.BoomNum--;
            cc.game.emit(Constant.E_UPDATE_COIN);



            if (this.action) {
                this.action.stop();
                this.handTips.active = false;
            }
        }, this);




        this.BtnBoom.getChildByName("game_btn_noboom").on(cc.Node.EventType.TOUCH_START, () => {
            cocosz.audioMgr.playbtnEffect();

            if (cocosz.dataMgr.CurLevelId == 4 && cocosz.dataMgr.BoomNum <= 0) {
                cocosz.dataMgr.BoomNum++;
                cc.game.emit(Constant.E_UPDATE_COIN);
                this.onTips('恭喜获得炸弹*1');
                return;
            }
            if (cc.sys.platform == cc.sys.WECHAT_GAME) {
                cocosz.dataMgr.BoomNum++;
                cc.game.emit(Constant.E_UPDATE_COIN);
                this.onTips('恭喜获得炸弹*1');
                return;
            }
            lieyou_SdkManager.showRewardedVideoAd((res) => {
                cocosz.audioMgr.resumAllMusic();
                if (res) {
                    cocosz.dataMgr.BoomNum++;
                    cc.game.emit(Constant.E_UPDATE_COIN);
                    this.onTips('恭喜获得炸弹*1');
                } else {
                    this.onTips('视频播放完成才能获取奖励');
                }
            });
            cc.game.emit(Constant.E_UPDATE_COIN)
        }, this);







        this.BtnSkip.active = false;
        let num = 5
        if (cocosz.gameMgr.isLevelOpen) {
            num = 1;
        }
        cocosz.scheduleOnce(() => {
            if (cocosz.sceneMgr.sceneName == "Game2") return;
            this.BtnSkip.active = true;
        }, num)


        cc.game.on(Constant.E_UPDATE_COIN, () => {
            this.skinVideoCard.string = cocosz.dataMgr.SkinVedioNum + "";
            this.boomNum.string = cocosz.dataMgr.BoomNum + "";
            if (cocosz.dataMgr.BoomNum <= 0) {
                this.BtnBoom.getChildByName("game_btn_noboom").active = true;
                this.BtnBoom.getComponent(cc.Sprite).enabled = false;
                this.boomNum.node.active = false;
            }
            else {
                this.BtnBoom.getChildByName("game_btn_noboom").active = false;
                this.BtnBoom.getComponent(cc.Sprite).enabled = true;
                this.boomNum.node.active = true;
            }
        }, this);


        lieyou_SdkManager.showBannerByBottom();

        cocosz.scheduleOnce(() => {
            lieyou_SdkManager.hideBanner();
        }, 2)

        cc.log("---------start")
    }


    onTips(msg) {
        Msg.Show(msg);
    }

    private _onBtnSkip() {

        cocosz.audioMgr.playbtnEffect();
        if (cocosz.dataMgr.SkinVedioNum) {
            cocosz.dataMgr.SkinVedioNum--
            this.skinVideoCard.string = cocosz.dataMgr.SkinVedioNum + "";
            Msg.Show("您拥有关卡跳过卡，本次消耗该道具直接获得奖励")

            this.BtnSkip.active = false;
            cocosz.scheduleOnce(() => {
                cocosz.dataMgr.CurLevelId = cocosz.gameMgr.curLevelID;
                window.onGameEvent(2, "跳过关卡", (cocosz.dataMgr.CurLevelId + 1));

                cocosz.dataMgr.LevelUnLock(cocosz.dataMgr.CurLevelId);
                cocosz.dataMgr.CurLevelId++;
                cocosz.sceneMgr.loadScene("Game", () => {
                    cocosz.uiMgr.openPage(PageName.UiGame);
                    cocosz.gameMgr.initGame();
                });
            }, 1)
        }
        else if (cc.sys.platform === cc.sys.WECHAT_GAME) {

            this.BtnSkip.active = false;
            cocosz.scheduleOnce(() => {
                cocosz.dataMgr.CurLevelId = cocosz.gameMgr.curLevelID;
                window.onGameEvent(2, "跳过关卡", (cocosz.dataMgr.CurLevelId + 1));

                cocosz.dataMgr.LevelUnLock(cocosz.dataMgr.CurLevelId);
                cocosz.dataMgr.CurLevelId++;
                cocosz.sceneMgr.loadScene("Game", () => {
                    cocosz.uiMgr.openPage(PageName.UiGame);
                    cocosz.gameMgr.initGame();
                });
            }, 1)
        }
        else if ((cc.sys.platform === cc.sys.VIVO_GAME || cc.sys.platform === cc.sys.OPPO_GAME)) {

            lieyou_SdkManager.showRewardedVideoAd((res) => {
                cocosz.audioMgr.resumAllMusic();
                if (res) {

                    this.BtnSkip.active = false;
                    cocosz.scheduleOnce(() => {
                        cocosz.dataMgr.CurLevelId = cocosz.gameMgr.curLevelID;
                        window.onGameEvent(2, "跳过关卡", (cocosz.dataMgr.CurLevelId + 1));

                        cocosz.dataMgr.LevelUnLock(cocosz.dataMgr.CurLevelId);
                        cocosz.dataMgr.CurLevelId++;
                        cocosz.sceneMgr.loadScene("Game", () => {
                            cocosz.uiMgr.openPage(PageName.UiGame);
                            cocosz.gameMgr.initGame();
                        });
                    }, 1)
                    this.onTips("跳过关卡成功");
                } else {
                    this.onTips('视频播放完成才能获取奖励');
                }
            });

        }


        if (cocosz.dataMgr.SkinVedioNum <= 0) {
            this.BtnSkip.getChildByName("video").active = true;
            this.BtnSkip.getChildByName("stipCard").active = false;
        }
        else {
            this.BtnSkip.getChildByName("video").active = false;
            this.BtnSkip.getChildByName("stipCard").active = true;
            this.BtnSkip.getChildByName("stipCard").getChildByName("number").getComponent(cc.Label).string = cocosz.dataMgr.SkinVedioNum + "";
        }

        return;
        // }

        return;
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

    private _OnBoom() {

    }


    public onStartGame() {

        cocosz.schedule(() => {
            this.LevelLabel.string = cocosz.gameMgr.curGame2LevelID + ""
            this.fraction++;
        }, 0.2)
    }

    private _Pause() {
        cc.log("----------暂停")
        cocosz.audioMgr.playbtnEffect();
        cocosz.uiMgr.openPanel(PanelName.PausePanel);
    }
    protected onOpen() {
        cc.log("--------cocosz.gameMgr.game2Fraction----open", cocosz.gameMgr.game2Fraction)
        this.fraction = cocosz.gameMgr.game2Fraction
        this.LevelLabel.string = cocosz.gameMgr.curGame2LevelID + ""
        // if (cocosz.dataMgr.CurLevelId == 4) {

        //     this.handTips.active = true
        //     this.handTips.opacity = 0;
        //     cocosz.scheduleOnce(() => {
        //         let pos = this.handTips.getPosition();
        //         let a = cc.tween().sequence(
        //             cc.tween().call(() => {
        //                 this.handTips.setPosition(pos);
        //                 this.handTips.opacity = 255;
        //             }),
        //             cc.tween().to(2, { position: cc.v2(126, 180) }),
        //             cc.tween().to(1, { position: cc.v2(126, 180), opacity: 0 }),
        //             cc.tween().delay(4)

        //         )
        //         this.action = cc.tween(this.handTips)
        //             .repeatForever(a)
        //             .start()
        //     }, 1)
        // }

        this.LevelLabel.string = (cocosz.dataMgr.CurLevelId + 1).toString();
        cocosz.gameMgr.curLevelID = cocosz.dataMgr.CurLevelId;

        // cocosz.scheduleOnce(() => {
        //     lieyou_SdkManager.hideBanner();
        // }, 1)

        if (cocosz.sceneMgr.sceneName == "Game") {

            this.fraction = 1000;
            cocosz.schedule(() => {
                if (this.fraction <= 0) {
                    cc.game.emit(Constant.E_GAME_FAID)
                    cocosz.unscheduleAllCallbacks();
                    return;
                };
                this.fraction--;
            }, 0.2)
        }
        else {
            this.BtnBoom.active = false;
            this.LevelLabel.string = cocosz.gameMgr.curGame2LevelID + ""
            if (!cocosz.gameMgr.isGame2Resurrection) {
                this.fraction = 0;
            }

            // cc.game.on(Constant.E_GAME_START, () => {

            //     cocosz.schedule(() => {
            //         this.LevelLabel.string = cocosz.gameMgr.curGame2LevelID + ""
            //         this.fraction++;
            //     }, 0.2)
            // }, this)
        }

        this.skinVideoCard.string = cocosz.dataMgr.SkinVedioNum + "";
        this.boomNum.string = cocosz.dataMgr.BoomNum + "";
        if (cocosz.dataMgr.BoomNum <= 0) {
            this.BtnBoom.getChildByName("game_btn_noboom").active = true;
            this.BtnBoom.getComponent(cc.Sprite).enabled = false;
            this.boomNum.node.active = false;
        }
        else {
            this.BtnBoom.getChildByName("game_btn_noboom").active = false;
            this.BtnBoom.getComponent(cc.Sprite).enabled = true;
            this.boomNum.node.active = true;
        }



        if (cocosz.dataMgr.SkinVedioNum <= 0) {
            this.BtnSkip.getChildByName("video").active = true;
            this.BtnSkip.getChildByName("stipCard").active = false;
        }
        else {
            this.BtnSkip.getChildByName("video").active = false;
            this.BtnSkip.getChildByName("stipCard").active = true;
            this.BtnSkip.getChildByName("stipCard").getChildByName("number").getComponent(cc.Label).string = cocosz.dataMgr.SkinVedioNum + "";
        }


    }

    protected onClose() {
        cc.director.getScheduler().unscheduleAllForTarget(this);
        cocosz.unscheduleAllCallbacks();
        cc.game.targetOff(this);
    }

    protected onDestroy() {
        cc.director.getScheduler().unscheduleAllForTarget(this);
        cocosz.unscheduleAllCallbacks();
        cc.game.targetOff(this);
    }
}
