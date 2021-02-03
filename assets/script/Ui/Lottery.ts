import { cocosz } from "../Framework/CocosZ";
import Constant, { PageName, PanelName } from "../Framework/Constant";
import Msg from "../Framework/Msg";
import balloon from "../Game/balloon";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    box1: cc.Node = null;
    @property(cc.Node)
    box2: cc.Node = null;
    @property(cc.Node)
    box3: cc.Node = null;
    @property(cc.Node)
    box4: cc.Node = null;

    @property(cc.Node)
    mask: cc.Node = null;

    @property(cc.Node)
    YRight: cc.Node = null;


    @property(cc.Node)
    btnStart: cc.Node = null;
    @property(cc.Node)
    btnVideo: cc.Node = null;
    @property(cc.Node)
    btnBack: cc.Node = null;

    @property(cc.Node)
    WRight: cc.Node = null;



    @property(cc.Node)
    prop: cc.Node = null;

    @property(cc.Node)
    ing: cc.Node = null;
    @property(cc.Node)
    prop2: cc.Node = null;
    @property(cc.Node)
    prop3: cc.Node = null;

    prop1: cc.Node = null;
    prop4: cc.Node = null;

    @property(cc.Node)
    rod: cc.Node = null;

    @property(cc.Label)
    coin: cc.Label = null;


    num: number = 1;



    result: number = 1;

    result2: number = 1;
    result3: number = 1;
    result4: number = 1;



    isRead: boolean = false;

    isRead2: boolean = false;
    isRead3: boolean = false;
    isRead4: boolean = false;


    time: number = 0.5;

    time2: number = 50;

    time3: number = 1;

    speed: number = 1;
    speed2: number = 1;
    speed3: number = 1;
    speed4: number = 1;

    isStart: boolean = false;

    isAddSpeed: boolean = true
    action: boolean = false

    roleSkinID: number = 0;

    balloonSkinID: number = 0;

    propID: number = 0;


    lotteryList: any = [];


    action1: any = null

    action2: any = null
    action3: any = null
    action4: any = null
    delayTime: number = 3;


    isEnd: boolean = false;


    rewardList1: any = [];
    rewardList2: any = [];
    rewardList3: any = [];
    rewardList4: any = [];


    skin: any = [];


    onPush(num) {
        cc.log(num, this.lotteryList[num])
        switch (this.lotteryList[num][0]) {
            case 1: {
                this.rewardList1.push(this.lotteryList[num][1]);
                break;
            }
            case 2: {
                this.rewardList2.push(this.lotteryList[num][1]);
                break;
            }
            case 3: {
                this.rewardList3.push(this.lotteryList[num][1]);
                break;
            }
            case 4: {
                this.rewardList4.push(this.lotteryList[num][1]);
                break;
            }
        }
    }


    onLottery() {
        this.result = this.getRandom();
        this.result2 = this.getRandom();
        this.result3 = this.getRandom();
        this.result4 = this.getRandom();

        cc.log(this.result, this.result2, this.result3, this.result4);

        // if (this.lotteryList[this.result][0] == 1) {

        // }
        cc.log(this.rewardList1, this.rewardList2, this.rewardList3, this.rewardList4);

        cc.tween(this.rod)
            .by(0.3, { angle: -50 })
            .by(0.3, { angle: 50 })
            .start()

        // if (this.skin.length > 0) {
        // this.rewardList1=this.skin[0][]
        // }


        if (Math.random() < 0.1) {
            for (let i = 0; i < this.lotteryList.length; i++) {
                if (this.lotteryList[i][0] == 4) {
                    this.result = i;
                    this.result2 = i;
                    this.result3 = i;
                    this.result4 = i;

                    this.rewardList1 = [];
                    this.rewardList2 = [];
                    this.rewardList3 = [];
                    this.rewardList4 = [];

                    this.rewardList4.push(this.lotteryList[i][1])
                    this.rewardList4.push(this.lotteryList[i][1])
                    this.rewardList4.push(this.lotteryList[i][1])
                    this.rewardList4.push(this.lotteryList[i][1])

                    break
                }



                else if (this.lotteryList[i][0] == 3) {
                    this.result = i;
                    this.result2 = i;
                    this.result3 = i;
                    this.result4 = i;

                    this.rewardList1 = [];
                    this.rewardList2 = [];
                    this.rewardList3 = [];
                    this.rewardList4 = [];

                    this.rewardList3.push(this.lotteryList[i][1])
                    this.rewardList3.push(this.lotteryList[i][1])
                    this.rewardList3.push(this.lotteryList[i][1])
                    this.rewardList3.push(this.lotteryList[i][1])

                    break
                }
            }
        }
    }


    onTips(msg) {
        Msg.Show(msg);
    }
    // LIFE-CYCLE CALLBACKS:

    onDestroy() {
        cc.game.targetOff(this);
    }

    // onLoad () {}

    start() {
        cocosz.gameMgr.LevelNum2 = 0;
        this.coin.string = cocosz.dataMgr.CoinCount.toString();

        cc.game.on(Constant.E_UPDATE_COIN, () => {
            this.coin.string = cocosz.dataMgr.CoinCount.toString();
        }, this);
        this.WRight.active = false;

        this.schedule(() => {
            this.WRight.active = !this.WRight.active;
            this.YRight.active = !this.YRight.active;
        }, 0.5)

        this.btnStart.on(cc.Node.EventType.TOUCH_END, () => {
            if (this.isStart) return;
            this.WRight.active = true;
            this.YRight.active = true;
            this.isStart = true;
            this.ing.active = true;
            this.btnStart.active = false;
            this.onLottery();

        })
        this.btnVideo.on(cc.Node.EventType.TOUCH_END, () => {



            if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                this.WRight.active = true;
                this.YRight.active = true;
                this.isStart = true;
                this.ing.active = true;
                this.btnStart.active = false;
                this.btnVideo.active = false;
                this.rewardList1 = [];
                this.rewardList2 = [];
                this.rewardList3 = [];
                this.rewardList4 = [];


                this.result = 1;

                this.result2 = 1;
                this.result3 = 1;
                this.result4 = 1;



                this.isRead = false;

                this.isRead2 = false;
                this.isRead3 = false;
                this.isRead4 = false;

                this.time = 0.5;

                this.time2 = 50;

                this.time3 = 1;

                this.speed = 1;
                this.speed2 = 1;
                this.speed3 = 1;
                this.speed4 = 1;


                this.isAddSpeed = true

                this.isEnd = false

                this.onLottery();

                return;
            }
            else if (cc.sys.platform === cc.sys.OPPO_GAME || cc.sys.platform === cc.sys.VIVO_GAME) {

                lieyou_SdkManager.showRewardedVideoAd((res) => {
                    cocosz.audioMgr.resumAllMusic();
                    if (res) {
                        this.WRight.active = true;
                        this.YRight.active = true;
                        this.isStart = true;
                        this.ing.active = true;
                        this.btnStart.active = false;
                        this.btnVideo.active = false;
                        this.rewardList1 = [];
                        this.rewardList2 = [];
                        this.rewardList3 = [];
                        this.rewardList4 = [];


                        this.result = 1;

                        this.result2 = 1;
                        this.result3 = 1;
                        this.result4 = 1;



                        this.isRead = false;

                        this.isRead2 = false;
                        this.isRead3 = false;
                        this.isRead4 = false;

                        this.time = 0.5;

                        this.time2 = 50;

                        this.time3 = 1;

                        this.speed = 1;
                        this.speed2 = 1;
                        this.speed3 = 1;
                        this.speed4 = 1;


                        this.isAddSpeed = true

                        this.isEnd = false

                        this.onLottery();


                        this.onTips('获取视频奖励成功');

                    } else {
                        this.onTips('视频播放完成才能获取奖励');
                    }
                });

            }






        })


        this.btnBack.on(cc.Node.EventType.TOUCH_END, () => {
            cocosz.audioMgr.playbtnEffect();
            // this.scheduleOnce(() => {
            cocosz.uiMgr.openPanel(PanelName.UiBeforeSucceed);
            // }, 1.5)
            this.node.destroy();
        }, this)

        this.roleSkinID = cocosz.dataMgr.getRandomLockSkin();
        this.balloonSkinID = cocosz.dataMgr.getRandomLockBalloonSkin();
        this.propID = Math.random() > 0.5 ? 0 : 1;





        cc.log(this.roleSkinID, this.balloonSkinID, this.propID)

        for (let i = 0; i < 15; i++) {
            let num = Math.random();
            if (num > 0.25) {
                let num = 20 * Math.floor(Math.random() * 10) + 50;
                let a = [];
                a.push(1);
                a.push(num);
                this.lotteryList.push(a);


                let node = cc.instantiate(this.prop2.getChildByName("coin"));
                node.x = 0;
                node.y = -200 * i;
                node.getChildByName("num").getComponent(cc.Label).string = num + "";
                this.prop.addChild(node);

            }
            else if (num > 0.1) {
                let propid = Math.random() > 0.5 ? 0 : 1;
                let a = [];
                a.push(2);
                a.push(propid);
                this.lotteryList.push(a);

                let node = cc.instantiate(this.prop2.getChildByName("prop"));
                node.x = 0;
                node.y = -200 * i;
                if (propid == 0) {
                    node.getComponent(cc.Sprite).spriteFrame = cocosz.resMgr.getRes("boom", cc.SpriteFrame);
                }
                else if (propid == 1) {
                    node.getComponent(cc.Sprite).spriteFrame = cocosz.resMgr.getRes("skipVideo", cc.SpriteFrame);
                }

                this.prop.addChild(node);


            }
            else if (num > 0.05) {
                let a = [];
                a.push(3);
                a.push(this.roleSkinID);
                this.lotteryList.push(a);

                let node = cc.instantiate(this.prop2.getChildByName("role"));
                node.x = 0;
                node.y = -200 * i;

                node.getComponent(cc.Sprite).spriteFrame = cocosz.resMgr.getRes("role" + a[1], cc.SpriteFrame);

                this.prop.addChild(node);


                // this.skin.push(a);
            }
            else if (num > 0) {
                let a = [];
                a.push(4);
                a.push(this.balloonSkinID);
                this.lotteryList.push(a);

                let node = cc.instantiate(this.prop2.getChildByName("balloon"));
                node.x = 0;
                node.y = -200 * i;
                node.getComponent(cc.Sprite).spriteFrame = cocosz.resMgr.getRes("balloon" + (a[1] + 1), cc.SpriteFrame);
                this.prop.addChild(node);

                // this.skin.push(a);

            }
        }
        cc.log(this.lotteryList)

        this.prop3 = cc.instantiate(this.prop);
        this.prop4 = cc.instantiate(this.prop);
        this.prop2 = cc.instantiate(this.prop);

        this.prop.parent.addChild(this.prop3);
        this.prop.parent.addChild(this.prop2);
        this.prop.parent.addChild(this.prop4);


        let node = this.prop.children[0];
        let node1 = cc.instantiate(node);
        let node2 = cc.instantiate(node);
        let node3 = cc.instantiate(node);
        let node4 = cc.instantiate(node);
        this.prop.addChild(node1);
        node1.y = -200 * 15;
        this.prop2.addChild(node2);
        node2.y = -200 * 15;
        this.prop3.addChild(node3);
        node3.y = -200 * 15;
        this.prop4.addChild(node4);
        node4.y = -200 * 15;



        this.prop.x = -321
        this.prop2.x = -107
        this.prop3.x = 107
        this.prop4.x = 321
    }


    getRandom() {
        let num = Math.floor(this.lotteryList.length * Math.random())
        this.onPush(num);
        return num


    }


    update(dt) {

        if (this.isEnd) return;

        if (!this.isStart) {
            if (this.prop.y >= 3000) {
                this.prop.y = 0;
                this.prop2.y = 0;
                this.prop3.y = 0;
                this.prop4.y = 0;
            }


            this.prop.y += Math.floor(this.speed2);
            this.prop2.y += Math.floor(this.speed2);
            this.prop3.y += Math.floor(this.speed2);
            this.prop4.y += Math.floor(this.speed2);
        }

        else {

            if (this.isAddSpeed == true && this.speed < 20) {
                this.speed += 0.1 * Math.random() * 2;
                this.speed2 += 0.1 * Math.random() * 2;
                this.speed3 += 0.1 * Math.random() * 2;
                this.speed4 += 0.1 * Math.random() * 2;

                if (this.isRead == false) {
                    this.prop.y += Math.floor(this.speed);
                    if (this.prop.y >= 3000) {
                        this.prop.y = 0;
                    }
                }
                if (this.isRead2 == false) {

                    this.prop2.y += Math.floor(this.speed2);
                    if (this.prop2.y >= 3000) {
                        this.prop2.y = 0;
                    }
                }
                if (this.isRead3 == false) {

                    this.prop3.y += Math.floor(this.speed3);
                    if (this.prop3.y >= 3000) {
                        this.prop3.y = 0;
                    }
                }
                if (this.isRead4 == false) {

                    this.prop4.y += Math.floor(this.speed4);
                    if (this.prop4.y >= 3000) {
                        this.prop4.y = 0;
                    }
                }
            }
            else {
                this.isAddSpeed = false;
            }



            // this.prop2.y += Math.floor(this.speed2);
            // this.prop3.y += Math.floor(this.speed2);
            // this.prop4.y += Math.floor(this.speed2);

            // cc.log(this.delayTime, Math.floor(this.prop.x), this.speed2);
            if (this.isAddSpeed == false) {
                // this.delayTime -= dt * 3;
                // if (this.delayTime > 0) return;
                // if (this.delayTime <= 0) {
                if (this.isRead == false) {
                    this.prop.y += Math.floor(this.speed);
                    if (this.prop.y >= 3000) {
                        this.prop.y = 0;
                    }
                }
                if (this.isRead2 == false) {

                    this.prop2.y += Math.floor(this.speed2);
                    if (this.prop2.y >= 3000) {
                        this.prop2.y = 0;
                    }
                }
                if (this.isRead3 == false) {

                    this.prop3.y += Math.floor(this.speed3);
                    if (this.prop3.y >= 3000) {
                        this.prop3.y = 0;
                    }
                }
                if (this.isRead4 == false) {

                    this.prop4.y += Math.floor(this.speed4);
                    if (this.prop4.y >= 3000) {
                        this.prop4.y = 0;
                    }
                }
                // cc.log(this.prop.y, this.result * 200)
                // cc.log(this.prop2.y, this.result2 * 200)
                // cc.log(this.prop3.y, this.result3 * 200)
                // cc.log(this.prop4.y, this.result4 * 200)

                if (Math.abs(this.result * 200 - 3000 - this.prop.x) <= 3000 && this.speed > 7) {
                    this.speed -= 0.1;
                }

                else {
                    if (this.prop.y >= this.result * 200 && Math.abs(this.prop.y - this.result * 200) <= this.speed) {
                        this.isRead = true;
                        this.prop.y = this.result * 200
                    }
                }


                if (Math.abs(this.result2 * 200 - 3000 - this.prop2.x) <= 3000 && this.speed2 > 7) {
                    this.speed2 -= 0.1;
                }
                else {
                    if (this.prop2.y >= this.result2 * 200 && Math.abs(this.prop2.y - this.result2 * 200) <= this.speed2) {
                        this.isRead2 = true;
                        this.prop2.y = this.result2 * 200
                    }
                }

                if (Math.abs(this.result3 * 200 - 3000 - this.prop3.x) <= 3000 && this.speed3 > 7) {
                    this.speed3 -= 0.1;
                }
                else {
                    if (this.prop3.y >= this.result3 * 200 && Math.abs(this.prop3.y - this.result3 * 200) <= this.speed3) {
                        this.isRead3 = true;
                        this.prop3.y = this.result3 * 200
                    }
                }

                if (Math.abs(this.result4 * 200 - 3000 - this.prop4.x) <= 3000 && this.speed4 > 7) {
                    this.speed4 -= 0.1;
                }
                else {
                    if (this.prop4.y >= this.result4 * 200 && Math.abs(this.prop4.y - this.result4 * 200) <= this.speed4) {
                        this.isRead4 = true;
                        this.prop4.y = this.result4 * 200
                    }

                }




                if (this.isRead && this.isRead2 && this.isRead3 && this.isRead4) {
                    this.isEnd = true;
                    let msg = "恭喜获得";

                    this.btnVideo.active = true;
                    this.ing.active = false;
                    let coin = 0;
                    if (this.rewardList1.length > 0) {
                        for (let idx of this.rewardList1) {
                            coin += idx;
                        }
                    }

                    if (this.rewardList2.length > 0) {
                        let boomNum = 0;
                        let CardNum = 0;


                        for (let idx of this.rewardList2) {
                            if (idx == 0) {
                                boomNum++;
                                cocosz.dataMgr.BoomNum++;
                            }
                            else if (idx == 1) {
                                CardNum++;
                                cocosz.dataMgr.SkinVedioNum++;
                            }
                        }

                        if (boomNum > 0) {
                            msg += " 炸弹*" + boomNum + " ";
                        }
                        if (CardNum > 0) {
                            msg += " 跳过卡*" + CardNum + " ";
                        }
                    }

                    if (this.rewardList3.length > 0 && this.rewardList3.length != 4) {
                        for (let idx of this.rewardList3) {
                            coin += 300;
                        }
                    }

                    if (this.rewardList4.length > 0 && this.rewardList4.length != 4) {
                        for (let idx of this.rewardList4) {
                            coin += 300;
                        }
                    }

                    if (this.rewardList3.length >= 4) {
                        let info = cocosz.dataMgr.getSkinInfo(this.rewardList3[1]);
                        let price = info.Price;
                        cc.log(info);
                        if (info.State == 1 || info.State == 2) {
                            cocosz.dataMgr.CoinCount += price;
                            cc.game.emit(Constant.E_UPDATE_COIN)
                            Msg.Show("该皮肤已拥有,转换成对应的金币*" + price);
                            return;
                        }
                        cocosz.dataMgr.CurSkinId = this.rewardList3[1];
                        msg = "恭喜获得稀有奖励人物皮肤一套";
                    }
                    if (this.rewardList4.length >= 4) {
                        let info = cocosz.dataMgr.getBallbonSkinInfo(this.rewardList4[1]);
                        let price = info.Price;
                        cc.log(info);
                        if (info.State == 1 || info.State == 2) {
                            cocosz.dataMgr.CoinCount += price;
                            cc.game.emit(Constant.E_UPDATE_COIN)
                            Msg.Show("该皮肤已拥有,转换成对应的金币*" + price);
                            return;
                        }
                        cocosz.dataMgr.CurBallbonSkinId = this.rewardList4[1];

                        msg = "恭喜获得稀有奖励气球皮肤一套";
                    }

                    if (coin > 0) {
                        cocosz.dataMgr.CoinCount += coin;
                        msg += " 金币*" + coin + " ";
                    }
                    Msg.Show(msg);
                    cc.game.emit(Constant.E_UPDATE_COIN);

                }
                // }
            }
        }
    }
}
