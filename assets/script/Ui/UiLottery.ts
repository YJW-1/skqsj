import UIPage from "./UIPage";
import { cocosz } from "../Framework/CocosZ";
import Constant, { PanelName } from "../Framework/Constant";
import Msg from "../Framework/Msg";
import { timeStamp } from "console";
const { ccclass, property } = cc._decorator;
let rewardList = [-1, 100, 200, -2, 500, 999];
// let rewardList = [5, 2000, 300, 3, 500, 1000, 2000, 5];
@ccclass
export default class UiLottery extends UIPage {

    btnFree: cc.Node = null;
    btnVideo: cc.Node = null;
    lottery: cc.Node = null;
    btnBack: cc.Node = null;

    scaleNode: cc.Node = null;
    action: any = null;
    isAction: any = null;

    num: number = -1;


    /**
     *  max: 15,
        min: 2,
     */
    maxSpeed: number = 12;

    /**
     * 减速前旋转时间
     *  max: 5,
        min: 1,
     */
    duration: number = 1.5;


    /**
     * 加速度
     *  max: 0.2,
        min: 0.01,
     */
    acc: number = 0.1;

    /**
     * 指定结束时的齿轮
     *  max: 17,
        min: 0,
     */
    targetID: number = 0;

    /**
     * 旋转结束是否回弹
     * 
     */
    springback: boolean = false;


    skinID: number = -1;
    skinID2: number = -1;




    wheelState = 0;
    curSpeed = 0;
    spinTime = 0;                   //减速前旋转时间
    gearNum = 6;
    defaultAngle = 0;        //修正默认角度
    gearAngle = 360 / this.gearNum;   //每个齿轮的角度

    finalAngle = 0;                 //最终结果指定的角度
    effectFlag = 0;                 //用于音效播放
    audioID = 0;
    decAngle = 0;

    constructor() {
        super();
        this._init();
    }

    private _init() {
        let Game: cc.Prefab = cocosz.resMgr.getRes(PanelName.UiLottery, cc.Prefab);
        if (Game) {
            let node: cc.Node = cc.instantiate(Game);
            if (node) {
                this._page = node;
                cc.find("Canvas").addChild(node);
                node.active = false;
                node.position = cc.Vec2.ZERO;
                this._onLoad();
            }
        }
    }
    private _onLoad() {
        this.scaleNode = cc.find("Canvas/UiLottery/ScaleNode");
        this.btnFree = this.scaleNode.getChildByName("BtnFree");
        this.lottery = this.scaleNode.getChildByName("Lottery");
        this.btnVideo = this.scaleNode.getChildByName("BtnVideo");
        this.btnBack = this.scaleNode.getChildByName("BtnBack");

        this._Start();
    }


    private _Start() {
        this.btnFree.on(cc.Node.EventType.TOUCH_START, () => {
            this.onReward();
        });
        this.btnVideo.on(cc.Node.EventType.TOUCH_START, () => {
            this.onVideo()
        });
        this.btnBack.on(cc.Node.EventType.TOUCH_START, () => {
            this.onBack();
        });

        cocosz.schedule(() => {
            if (this.wheelState === 0) {
                return;
            }
            // 播放音效有可能卡
            this.effectFlag += this.curSpeed;
            if (this.effectFlag >= this.gearAngle) {

                cocosz.audioMgr.playLotteryEffect();
                this.effectFlag = 0;
            }


            if (this.wheelState == 1) {
                // cc.log('....加速,speed:' + this.curSpeed);
                this.spinTime += 0.005;
                this.lottery.angle = this.lottery.angle + this.curSpeed;
                if (this.curSpeed <= this.maxSpeed) {
                    this.curSpeed += this.acc;
                }
                else {
                    if (this.spinTime < this.duration) {
                        return;
                    }
                    // cc.log('....开始减速');
                    //设置目标角度
                    if (Math.abs(Math.abs(Math.floor(this.lottery.angle) % 360) - Math.abs(Math.floor(360 - this.targetID * this.gearAngle + this.defaultAngle) % 360)) < 5) {
                        this.finalAngle = 360 - this.targetID * this.gearAngle + this.defaultAngle;
                        this.maxSpeed = this.curSpeed;
                        // if (this.springback) {
                        //     this.finalAngle += this.gearAngle;
                        // }
                        this.lottery.angle = this.finalAngle;
                        this.wheelState = 2;

                    }
                }
            }
            else if (this.wheelState == 2) {
                // cc.log('......减速');
                var curRo = this.lottery.angle; //应该等于finalAngle
                var hadRo = curRo - this.finalAngle;
                this.curSpeed = this.maxSpeed * ((this.decAngle - hadRo) / this.decAngle) + 0.2;
                this.lottery.angle = curRo + this.curSpeed;

                if ((this.decAngle - hadRo) <= 0) {
                    // cc.log('....停止');
                    this.wheelState = 0;
                    this.lottery.angle = this.finalAngle;
                    // if (this.springback) {
                    //     //倒转一个齿轮
                    //     // var act = new cc.rotateBy(0.6, -this.gearAngle);
                    //     var act = cc.rotateBy(0.6, -this.gearAngle);
                    //     var seq = cc.sequence(cc.delayTime(0.2), act, cc.callFunc(this.showRes, this));
                    //     this.lottery.runAction(seq);
                    // }
                    // else {
                    this.showRes();
                    // }
                }
            }

        }, 0.005)
    }

    protected onOpen() {
        this.scaleNode.scale = 0;
        cc.tween(this.scaleNode)
            .to(0.2, { scale: 1 })
            .call(() => {
                // this.action = cc.tween(this.lottery)
                //     .repeatForever(cc.tween().by(45, { angle: 360 }))
                // this.action.start();
            })
            .start();
        cc.log("-------cocosz.dataMgr.Lottery-------", cocosz.dataMgr.Lottery)
        if (cocosz.dataMgr.Lottery <= 0) {
            this.btnFree.active = false;
            this.btnVideo.active = true;
        }
        else {
            this.btnFree.active = true;
            this.btnVideo.active = false;
        }

        if ((cc.sys.platform === cc.sys.VIVO_GAME)) {
            lieyou_SdkManager.showBannerByBottom();
        }
        else if (cc.sys.platform === cc.sys.OPPO_GAME) {
            this.scaleNode.y = 200;
            let sp = cocosz.resMgr.getRes("ss", cc.SpriteFrame)
            lieyou_SdkManager.showNativeAd_big({
                node: this.scaleNode.getChildByName("nativePos"), "titleColor": cc.color(255, 255, 255, 255,),
                "descColor": cc.color(255, 255, 255, 255,), bgPath: 'texture/ss', texture: sp, scale: 0.9, insetTop: 10, insetBottom: 10, insetLeft: 10, insetRight: 10
            });
        }


        this.skinID2 = cocosz.dataMgr.getRandomLockBalloonSkin();
        this.skinID = cocosz.dataMgr.getRandomLockSkin();


        this.lottery.getChildByName("Lottery").children[0].getChildByName("gold_1").getComponent(cc.Sprite).spriteFrame = cocosz.resMgr.getRes("role" + this.skinID, cc.SpriteFrame);
        this.lottery.getChildByName("Lottery").children[3].getChildByName("gold_1").getComponent(cc.Sprite).spriteFrame = cocosz.resMgr.getRes("balloon" + (this.skinID2 + 1), cc.SpriteFrame);
    }
    showRes() {

        // cocosz.audioMgr.playGetCoin();

        if (cocosz.dataMgr.Lottery <= 0) {
            this.btnFree.active = false;
            this.btnVideo.active = true;
        }
        if (rewardList[this.targetID] > 0) {
            Msg.Show(`恭喜获得${rewardList[this.targetID]}金币`);
            cocosz.dataMgr.CoinCount += rewardList[this.targetID]
        }
        else if (rewardList[this.targetID] >= -1) {
            let info = cocosz.dataMgr.getSkinInfo(this.skinID);
            if (info.State == 1 || info.State == 2) {
                Msg.Show(`该皮肤已解锁，转化成${info.Price}金币`);
                cocosz.dataMgr.CoinCount += info.Price
                return;
            }

            Msg.Show(`皮肤解锁成功`);
            cocosz.dataMgr.CurSkinId = this.skinID;
        }
        else if (rewardList[this.targetID] >= -2) {
            let info = cocosz.dataMgr.getBallbonSkinInfo(this.skinID);
            cc.log(info)
            if (info.State == 1 || info.State == 2) {
                Msg.Show(`该皮肤已解锁，转化成${info.Price}金币`);
                cocosz.dataMgr.CoinCount += info.Price
                return;
            }

            Msg.Show(`皮肤解锁成功`);
            cocosz.dataMgr.CurBallbonSkinId = this.skinID2;
        }
        // cocosz.dataMgr.Lottery--;
    }

    protected onReward() {
        // if (this.isAction) return;
        // this.isAction = true;
        // let num = this._getRanDom();
        // this.action.stop();
        // cc.tween(this.lottery)
        //     .call(() => {
        //         this.lottery.angle = this.lottery.angle % 360;
        //     })
        //     .to(5, { angle: (360 * 10 + 22.5) }, { easing: "circIn" })
        //     .by(num * 45 / 360 + 1, { angle: (num * 45 + 360) }, { easing: "circOut" })
        //     .call(() => {
        //         this.isAction = false;
        //         this._page.angle = this._page.angle % 360

        //         // cocosz.scheduleOnce(() => {
        //         // this.action.start();
        //         // 
        //         // }, 1)
        //     })
        //     .start()
        cocosz.audioMgr.playbtnEffect();
        if (this.wheelState !== 0) {
            Msg.Show("正在抽奖中")
            return;
        }
        // if (cocosz.dataMgr.Lottery <= 0) {
        // utils.adManager.ShowVideo((ret, msg) => {
        //     if (ret) {
        //         this.turntableCount = 1;
        //         this.startTurnTable();
        //     } else {
        //         utils.showMsg("观看完整视频可以获取一次抽奖机会！");
        //         this.onClose();
        //     }
        // })

        //     return;
        // }
        cocosz.dataMgr.Lottery--;
        this.targetID = this._getRanDom();
        this.decAngle = 2 * 360;  // 减速旋转两圈
        this.wheelState = 1;
        this.curSpeed = 0;
        this.spinTime = 0;
    }

    onTips(tips) {
        Msg.Show(tips);
    }

    protected onBack() {
        cc.log("-----sceneName--", cocosz.sceneMgr.sceneName)

        cocosz.audioMgr.playbtnEffect();


        cocosz.unscheduleAllCallbacks();
        cc.tween(this.scaleNode)
            .to(0.2, { scale: 0 })
            .call(() => {


                if (this.wheelState == 1 || this.wheelState == 2) {
                    cocosz.dataMgr.Lottery++;
                }

                if (cocosz.sceneMgr.sceneName == "Game") {
                    cocosz.uiMgr.openPanel(PanelName.UiBeforeSucceed);

                    this._page.destroy();
                }
                else {
                    lieyou_SdkManager.showMoreGameByBanner();
                    this._page.destroy();
                }



            })
            .start();

    }
    protected onVideo() {

        cocosz.audioMgr.playbtnEffect();
        // Msg.Show("视频播放失败!");

        if (cc.sys.platform === cc.sys.WECHAT_GAME || !cc.sys.isMobile) {

            cocosz.dataMgr.Lottery++;

            this.onTips("抽奖次数+1");

            if (cocosz.dataMgr.Lottery <= 0) {
                this.btnFree.active = false;
                this.btnVideo.active = true;
            }
            else {
                this.btnFree.active = true;
                this.btnVideo.active = false;
            }

            this.onReward()
            return;
        }

        if (cocosz.gameMgr.isDelay) { return };
        cocosz.gameMgr.isDelay = true;
        cocosz.audioMgr.stopAll();
        cocosz.scheduleOnce(() => {
            cocosz.gameMgr.isDelay = false;
        }, 1.5)


        lieyou_SdkManager.showRewardedVideoAd((res) => {
            cocosz.audioMgr.resumAllMusic();
            if (res) {
                cocosz.dataMgr.Lottery++;

                this.onTips("抽奖次数+1");

                if (cocosz.dataMgr.Lottery <= 0) {
                    this.btnFree.active = false;
                    this.btnVideo.active = true;
                }
                else {
                    this.btnFree.active = true;
                    this.btnVideo.active = false;
                }
                this.onReward()
            } else {
                this.onTips("视频播放完成才能获取奖励");
            }
        });
    }
    protected onClose() {
        cc.game.targetOff(this);
    }

    protected onDestroy() {
        cocosz.unscheduleAllCallbacks();
        cc.game.targetOff(this);
    }


    private _getRanDom() {
        let num = Math.random();

        // return 3
        if (num > 0.7) {
            return 1;
        }
        else if (num > 0.5) {
            return 2;
        }
        else if (num > 0.3) {
            return 4;
        }
        else if (num > 0.1) {
            return 5;
        }
        else if (num > 0.05) {
            return 3;
        }
        else if (num > 0) {
            return 0;
        }

    }
}
