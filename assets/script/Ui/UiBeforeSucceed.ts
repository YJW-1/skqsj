import UIMgr from "../Framework/UIMgr";
import UIPage from "./UIPage";
import Constant, { PageName, PanelName } from "../Framework/Constant";
import { cocosz } from "../Framework/CocosZ";
import Msg from "../Framework/Msg";

import { uiGame } from "../Ui/UiGame";
const { ccclass, property } = cc._decorator;

@ccclass
export default class UiBeforeSucceed extends UIPage {

    scaleNode: cc.Node = null;
    btnNext: cc.Node = null;
    btnLevelNext: cc.Node = null;
    btnDouble: cc.Node = null;
    btnAgain: cc.Node = null;
    fraction: cc.Node = null;

    curFraction: cc.Label = null;
    maxFraction: cc.Label = null;
    coin: cc.Label = null;
    rCoin: cc.Label = null;
    coinSp: cc.Node = null;
    gold: cc.Node = null;


    isture: boolean = false;

    constructor() {
        super();
        this._init();
    }

    private _init() {
        let Game: cc.Prefab = cocosz.resMgr.getRes(PanelName.UiBeforeSucceed, cc.Prefab);
        if (Game) {
            let node: cc.Node = cc.instantiate(Game);
            if (node) {
                this._page = node;
                cc.find("Canvas/ui").addChild(node);
                node.active = true;
                node.position = cc.Vec2.ZERO;
                this._onLoad();
            }
        }
    }
    private _onLoad() {
        this.scaleNode = this._page.getChildByName("ScaleNode");
        // this.isWeChat = this.scaleNode.getChildByName("isWeChat");
        // this.isNotWeChat = this.scaleNode.getChildByName("isNotWeChat");

        this.btnDouble = this.scaleNode.getChildByName("BtnDouble");
        // this.btnContinue = this.isNotWeChat.getChildByName("BtnContinue");

        this.btnNext = this.scaleNode.getChildByName("BtnNext");
        this.btnLevelNext = this.scaleNode.getChildByName("BtnLevelNext");
        this.fraction = this.scaleNode.getChildByName("fraction");
        // this.btnBack = this.isWeChat.getChildByName("BtnBack");
        this.btnAgain = this.scaleNode.getChildByName("BtnAgain");

        this.curFraction = this.scaleNode.getChildByName("fraction").getChildByName("curFraction").getComponent(cc.Label);
        this.maxFraction = this.scaleNode.getChildByName("fraction").getChildByName("maxFraction").getComponent(cc.Label);
        this.coin = this.scaleNode.getChildByName("Coin").getChildByName("num").getComponent(cc.Label);
        this.gold = this.scaleNode.getChildByName("Coin").getChildByName("gold2");
        this.rCoin = this.scaleNode.getChildByName("rCoin").getChildByName("num").getComponent(cc.Label);
        this.coinSp = this.scaleNode.getChildByName("rCoin").getChildByName("coinSp");
        // this.coin = this.scaleNode.getChildByName("Coin").getChildByName("num").getComponent(cc.Label);

        this._Start();

        // if (cc.sys.platform === cc.sys.WECHAT_GAME) {
        //     this.isWeChat.active = true;
        //     this.isNotWeChat.active = false;
        // }

    }



    private _Start() {

        this._page.zIndex += 99999;
        this.btnDouble.on(cc.Node.EventType.TOUCH_START, () => {
            this.onBtnDouble();
        });
        this.btnLevelNext.on(cc.Node.EventType.TOUCH_END, () => {
            this.onBtnContinue();
        });
        this.btnNext.on(cc.Node.EventType.TOUCH_END, () => {
            this.onBtnNext();
        });
        // this.btnBack.on(cc.Node.EventType.TOUCH_START, () => {
        //     this.onBtnBack();
        // });
        this.btnAgain.on(cc.Node.EventType.TOUCH_START, () => {
            this.onBtnAgain();
        });
        window.onGameSuccess(1, (cocosz.gameMgr.curLevelID + 1));

        cocosz.dataMgr.CurLevelId = cocosz.gameMgr.curLevelID;

        cocosz.dataMgr.LevelUnLock(cocosz.dataMgr.CurLevelId);

        cc.game.on(Constant.E_ADClOSE, () => {
            lieyou_SdkManager.showBanner();
            console.log("-----------------------showBannerSucceed")
        }, this)

        cocosz.gameMgr.LevelNum++;
        cocosz.gameMgr.LevelNum2++;

    }

    onDestroy() {
        cc.game.targetOff(this);
    }

    private onBtnNext() {
        cocosz.audioMgr.playbtnEffect();

        // cocosz.dataMgr.CoinCount += 100;
        // this.coin.string = cocosz.dataMgr.CoinCount.toString();

        cocosz.schedule(() => {
            if (this.rCoin.string == "0") {
                cocosz.unscheduleAllCallbacks();
                cc.tween(this.rCoin.node.parent)
                    .delay(0.2)
                    .to(0.3, { opacity: 0 })
                    .start()


                cc.tween(this.btnLevelNext)
                    .call(() => {
                        this.btnLevelNext.active = true;
                    })
                    .to(0.3, { opacity: 255 })
                    .start()


                cc.tween(this.btnAgain)
                    .call(() => {
                        this.btnAgain.active = true;
                    })
                    .to(0.3, { opacity: 255 })
                    .start()
                return;
            }
            let node = cc.instantiate(this.coinSp);
            let pos = this.scaleNode.getChildByName("Coin").convertToWorldSpaceAR(node.getPosition());
            let pp = this.scaleNode.getChildByName("Coin").convertToNodeSpaceAR(pos)
            node.setPosition(pp);
            // cc.log(pos, pp)
            this.scaleNode.getChildByName("Coin").addChild(node);

            // let pos = this.gold.parent.convertToWorldSpaceAR(this.coinSp.getPosition());
            cocosz.dataMgr.CoinCount += 5;
            this.coin.string = cocosz.dataMgr.CoinCount.toString();

            let num = +this.rCoin.string;
            num -= 5;
            this.rCoin.string = num.toString();
            cc.tween(node)
                .to(0.2, { scale: 0.5, position: cc.v2(237, 494) })
                .call(() => {
                    node.destroy();
                })
                .start()
        }, 0.05)

        this.btnNext.off(cc.Node.EventType.TOUCH_END)
        this.btnDouble.off(cc.Node.EventType.TOUCH_START)
        cc.tween(this.btnNext)
            .to(0.4, { opacity: 0 })
            .call(() => {

                if (cc.sys.platform === cc.sys.OPPO_GAME) {
                    // this.scaleNode.x = 110
                    this.scaleNode.getChildByName("nativePos").removeAllChildren();
                    window["lieyou_SdkManager"].showMoreGameMiddle_three({ "node": this.scaleNode.getChildByName("nativePos"), "bgPath": "texture/ss", "scale": 0.75 });
                }
                this.btnNext.active = false;
            })
            .start()
        cc.tween(this.btnDouble)
            .to(0.4, { opacity: 0 })
            .call(() => {
                this.btnDouble.active = false;
            })
            .start()


        return;
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
    }
    private onBtnBack() {
        cocosz.audioMgr.playbtnEffect();
        cocosz.sceneMgr.loadScene("Home", () => {
            cocosz.uiMgr.openPage(PageName.UiHome);
        });
    }
    private onBtnAgain() {
        if (this.isture) return

        cocosz.dataMgr.CurLevelId = cocosz.gameMgr.curLevelID
        cocosz.gameMgr.curLevelID = cocosz.dataMgr.CurLevelId
        cocosz.audioMgr.playbtnEffect();
        cocosz.sceneMgr.loadScene("Game", () => {
            cocosz.uiMgr.openPage(PageName.UiGame);
            cocosz.gameMgr.initGame();
        });
    }

    onTips(msg) {
        Msg.Show(msg);
    }
    private onBtnDouble() {
        if (this.isture) return


        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            cocosz.dataMgr.CoinCount += 200;
            this.coin.string = cocosz.dataMgr.CoinCount.toString();
            this.isture = true
            cocosz.audioMgr.playbtnEffect();
            Msg.Show('获取双倍奖励成功');
            cocosz.scheduleOnce(() => {
                cocosz.dataMgr.CurLevelId++;
                cocosz.sceneMgr.loadScene("Game", () => {
                    cocosz.uiMgr.openPage(PageName.UiGame);
                    cocosz.gameMgr.initGame();
                });
            }, 1)
            return;
        }
        else if (cc.sys.platform === cc.sys.OPPO_GAME || cc.sys.platform === cc.sys.VIVO_GAME) {

            lieyou_SdkManager.showRewardedVideoAd((res) => {
                cocosz.audioMgr.resumAllMusic();
                if (res) {
                    this.isture = true
                    cocosz.dataMgr.CoinCount += 200;

                    this.coin.string = cocosz.dataMgr.CoinCount.toString();
                    cocosz.audioMgr.playbtnEffect();
                    this.onTips('获取双倍奖励成功');
                    cocosz.scheduleOnce(() => {
                        cocosz.dataMgr.CurLevelId++;
                        cocosz.sceneMgr.loadScene("Game", () => {
                            cocosz.uiMgr.openPage(PageName.UiGame);
                            cocosz.gameMgr.initGame();
                        });
                    }, 1)
                } else {
                    this.onTips('视频播放完成才能获取奖励');
                }
            });

        }


        return;
        cocosz.audioMgr.playbtnEffect();
        cocosz.audioMgr.stopAll();
        lieyou_SdkManager.showRewardedVideoAd(function (res) {
            cocosz.audioMgr.resumAllMusic();
            if (res) {

                cocosz.dataMgr.CoinCount += 200;
                // this.coin.string = cocosz.dataMgr.CoinCount.toString();

                cocosz.audioMgr.playbtnEffect();
                Msg.Show('获取视频奖励成功');
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
    private onBtnContinue() {
        if (this.isture) return
        cocosz.dataMgr.CurLevelId++;
        cocosz.sceneMgr.loadScene("Game", () => {
            cocosz.uiMgr.openPage(PageName.UiGame);
            cocosz.gameMgr.initGame();
        });
    }
    protected onOpen() {
        cocosz.unscheduleAllCallbacks();
        cocosz.audioMgr.playVectoryEffect();


        cocosz.gameMgr.playGameNum++;


        // if (cc.sys.platform === cc.sys.WECHAT_GAME) {
        //     // this.scaleNode.x = 110
        //     window["lieyou_SdkManager"].showMoreGameMiddle_three({ "node": this.scaleNode.getChildByName("nativePos"), "bgPath": "texture/ss", "scale": 0.8 });
        // }
        // else if ((cc.sys.platform === cc.sys.VIVO_GAME)) {
        //     lieyou_SdkManager.showSpotByPause();
        // }
        // else if (cc.sys.platform === cc.sys.OPPO_GAME) {
        //     // this.scaleNode.x = 110;
        //     let sp = cocosz.resMgr.getRes("ss", cc.SpriteFrame)
        //     lieyou_SdkManager.showNativeAd_big({
        //         node: this.scaleNode.getChildByName("nativePos"), "titleColor": cc.color(255, 255, 255, 255,),
        //         "descColor": cc.color(255, 255, 255, 255,), bgPath: 'texture/ss', texture: sp, scale: 0.8, insetTop: 10, insetBottom: 10, insetLeft: 10, insetRight: 10
        //     });
        // }



        this.btnNext.active = false;




        // this._Ske.armature().getSlot("ribbon").displayIndex = 2;
        // this.scaleNode.scale = 0;
        // cocosz.gameMgr.tweeBtn(this.btnDouble, 1.05, 1);
        // cc.tween(this.scaleNode)
        //     .to(0.2, { scale: 1.5 })
        //     .call(() => {
        //     })
        //     .start()

        // let num = cocosz.gameMgr.bigCoin > 5 ? cocosz.gameMgr.bigCoin : 5
        // this.coin.string = (num * 10).toString();

        cc.tween(this.scaleNode)
            .to(0.4, { position: cc.v2(0, 0) })
            .call(() => {
                // cc.tween(this._page.getChildByName("man"))
                //     .to(0.3, { position: cc.v2(-220, -220) })
                //     .call(() => {
                let dragon = this.scaleNode.getChildByName("man").getChildByName("man").getComponent(dragonBones.ArmatureDisplay);
                dragon.playAnimation("win", 0);
                let a = cc.tween().sequence(
                    cc.tween().delay(1),
                    cc.tween().call(() => {
                        cocosz.audioMgr.playGunEffect();
                    }),
                    cc.tween().delay(0.4),
                    cc.tween().call(() => {
                        cocosz.audioMgr.playGunEffect();
                    }),
                    cc.tween().delay(0.9),
                )

                cc.tween(this._page)
                    .repeatForever(a)
                    .start()
                // })
                // .start()
                cocosz.scheduleOnce(() => {
                    this.btnNext.active = true;
                    this.btnNext.opacity = 0;
                    cc.tween(this.btnNext)
                        .to(0.3, { opacity: 255 })
                        .start();
                }, 0.4)

                let b = cc.tween().sequence(
                    cc.tween().to(3, { angle: -7 }),

                    cc.tween().to(3, { angle: 7 })
                )
                cc.tween(this.fraction)
                    .repeatForever(b)
                    .start()
            })
            .start()

        // if (uiGame.fraction) {
        cc.log(cocosz.dataMgr.CurLevelId, "cocosz.dataMgr.CurLevelId")
        let fraction = cocosz.dataMgr.getStarInfo(cocosz.dataMgr.CurLevelId);
        this.curFraction.string = cocosz.gameMgr.fraction.toString();

        if (cocosz.gameMgr.fraction > fraction) {
            cocosz.dataMgr.setStarNum(cocosz.dataMgr.CurLevelId, cocosz.gameMgr.fraction)
            this.maxFraction.string = cocosz.gameMgr.fraction.toString();
        }
        else {
            this.maxFraction.string = fraction.toString();
        }
        // }



        this.coin.string = cocosz.dataMgr.CoinCount.toString();

    }

    // update (dt) {}
}
