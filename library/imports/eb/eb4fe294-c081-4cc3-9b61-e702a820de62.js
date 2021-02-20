"use strict";
cc._RF.push(module, 'eb4feKUwIFMw5th5wKoIN5i', 'UiLottery');
// script/Ui/UiLottery.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIPage_1 = require("./UIPage");
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var Msg_1 = require("../Framework/Msg");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var rewardList = [-1, 100, 200, -2, 500, 999];
// let rewardList = [5, 2000, 300, 3, 500, 1000, 2000, 5];
var UiLottery = /** @class */ (function (_super) {
    __extends(UiLottery, _super);
    function UiLottery() {
        var _this = _super.call(this) || this;
        _this.btnFree = null;
        _this.btnVideo = null;
        _this.lottery = null;
        _this.btnBack = null;
        _this.scaleNode = null;
        _this.action = null;
        _this.isAction = null;
        _this.num = -1;
        /**
         *  max: 15,
            min: 2,
         */
        _this.maxSpeed = 12;
        /**
         * 减速前旋转时间
         *  max: 5,
            min: 1,
         */
        _this.duration = 1.5;
        /**
         * 加速度
         *  max: 0.2,
            min: 0.01,
         */
        _this.acc = 0.1;
        /**
         * 指定结束时的齿轮
         *  max: 17,
            min: 0,
         */
        _this.targetID = 0;
        /**
         * 旋转结束是否回弹
         *
         */
        _this.springback = false;
        _this.skinID = -1;
        _this.skinID2 = -1;
        _this.wheelState = 0;
        _this.curSpeed = 0;
        _this.spinTime = 0; //减速前旋转时间
        _this.gearNum = 6;
        _this.defaultAngle = 0; //修正默认角度
        _this.gearAngle = 360 / _this.gearNum; //每个齿轮的角度
        _this.finalAngle = 0; //最终结果指定的角度
        _this.effectFlag = 0; //用于音效播放
        _this.audioID = 0;
        _this.decAngle = 0;
        _this._init();
        return _this;
    }
    UiLottery.prototype._init = function () {
        var Game = CocosZ_1.cocosz.resMgr.getRes(Constant_1.PanelName.UiLottery, cc.Prefab);
        if (Game) {
            var node = cc.instantiate(Game);
            if (node) {
                this._page = node;
                cc.find("Canvas").addChild(node);
                node.active = false;
                node.position = cc.Vec2.ZERO;
                this._onLoad();
            }
        }
    };
    UiLottery.prototype._onLoad = function () {
        this.scaleNode = cc.find("Canvas/UiLottery/ScaleNode");
        this.btnFree = this.scaleNode.getChildByName("BtnFree");
        this.lottery = this.scaleNode.getChildByName("Lottery");
        this.btnVideo = this.scaleNode.getChildByName("BtnVideo");
        this.btnBack = this.scaleNode.getChildByName("BtnBack");
        this._Start();
    };
    UiLottery.prototype._Start = function () {
        var _this = this;
        this.btnFree.on(cc.Node.EventType.TOUCH_START, function () {
            _this.onReward();
        });
        this.btnVideo.on(cc.Node.EventType.TOUCH_START, function () {
            _this.onVideo();
        });
        this.btnBack.on(cc.Node.EventType.TOUCH_START, function () {
            _this.onBack();
        });
        CocosZ_1.cocosz.schedule(function () {
            if (_this.wheelState === 0) {
                return;
            }
            // 播放音效有可能卡
            _this.effectFlag += _this.curSpeed;
            if (_this.effectFlag >= _this.gearAngle) {
                CocosZ_1.cocosz.audioMgr.playLotteryEffect();
                _this.effectFlag = 0;
            }
            if (_this.wheelState == 1) {
                // cc.log('....加速,speed:' + this.curSpeed);
                _this.spinTime += 0.005;
                _this.lottery.angle = _this.lottery.angle + _this.curSpeed;
                if (_this.curSpeed <= _this.maxSpeed) {
                    _this.curSpeed += _this.acc;
                }
                else {
                    if (_this.spinTime < _this.duration) {
                        return;
                    }
                    // cc.log('....开始减速');
                    //设置目标角度
                    if (Math.abs(Math.abs(Math.floor(_this.lottery.angle) % 360) - Math.abs(Math.floor(360 - _this.targetID * _this.gearAngle + _this.defaultAngle) % 360)) < 5) {
                        _this.finalAngle = 360 - _this.targetID * _this.gearAngle + _this.defaultAngle;
                        _this.maxSpeed = _this.curSpeed;
                        // if (this.springback) {
                        //     this.finalAngle += this.gearAngle;
                        // }
                        _this.lottery.angle = _this.finalAngle;
                        _this.wheelState = 2;
                    }
                }
            }
            else if (_this.wheelState == 2) {
                // cc.log('......减速');
                var curRo = _this.lottery.angle; //应该等于finalAngle
                var hadRo = curRo - _this.finalAngle;
                _this.curSpeed = _this.maxSpeed * ((_this.decAngle - hadRo) / _this.decAngle) + 0.2;
                _this.lottery.angle = curRo + _this.curSpeed;
                if ((_this.decAngle - hadRo) <= 0) {
                    // cc.log('....停止');
                    _this.wheelState = 0;
                    _this.lottery.angle = _this.finalAngle;
                    // if (this.springback) {
                    //     //倒转一个齿轮
                    //     // var act = new cc.rotateBy(0.6, -this.gearAngle);
                    //     var act = cc.rotateBy(0.6, -this.gearAngle);
                    //     var seq = cc.sequence(cc.delayTime(0.2), act, cc.callFunc(this.showRes, this));
                    //     this.lottery.runAction(seq);
                    // }
                    // else {
                    _this.showRes();
                    // }
                }
            }
        }, 0.005);
    };
    UiLottery.prototype.onOpen = function () {
        this.scaleNode.scale = 0;
        cc.tween(this.scaleNode)
            .to(0.2, { scale: 1 })
            .call(function () {
            // this.action = cc.tween(this.lottery)
            //     .repeatForever(cc.tween().by(45, { angle: 360 }))
            // this.action.start();
        })
            .start();
        cc.log("-------cocosz.dataMgr.Lottery-------", CocosZ_1.cocosz.dataMgr.Lottery);
        if (CocosZ_1.cocosz.dataMgr.Lottery <= 0) {
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
            var sp = CocosZ_1.cocosz.resMgr.getRes("ss", cc.SpriteFrame);
            lieyou_SdkManager.showNativeAd_big({
                node: this.scaleNode.getChildByName("nativePos"), "titleColor": cc.color(255, 255, 255, 255),
                "descColor": cc.color(255, 255, 255, 255), bgPath: 'texture/ss', texture: sp, scale: 0.9, insetTop: 10, insetBottom: 10, insetLeft: 10, insetRight: 10
            });
        }
        this.skinID2 = CocosZ_1.cocosz.dataMgr.getRandomLockBalloonSkin();
        this.skinID = CocosZ_1.cocosz.dataMgr.getRandomLockSkin();
        this.lottery.getChildByName("Lottery").children[0].getChildByName("gold_1").getComponent(cc.Sprite).spriteFrame = CocosZ_1.cocosz.resMgr.getRes("role" + this.skinID, cc.SpriteFrame);
        this.lottery.getChildByName("Lottery").children[3].getChildByName("gold_1").getComponent(cc.Sprite).spriteFrame = CocosZ_1.cocosz.resMgr.getRes("balloon" + (this.skinID2 + 1), cc.SpriteFrame);
    };
    UiLottery.prototype.showRes = function () {
        // cocosz.audioMgr.playGetCoin();
        if (CocosZ_1.cocosz.dataMgr.Lottery <= 0) {
            this.btnFree.active = false;
            this.btnVideo.active = true;
        }
        if (rewardList[this.targetID] > 0) {
            Msg_1.default.Show("\u606D\u559C\u83B7\u5F97" + rewardList[this.targetID] + "\u91D1\u5E01");
            CocosZ_1.cocosz.dataMgr.CoinCount += rewardList[this.targetID];
        }
        else if (rewardList[this.targetID] >= -1) {
            var info = CocosZ_1.cocosz.dataMgr.getSkinInfo(this.skinID);
            if (info.State == 1 || info.State == 2) {
                Msg_1.default.Show("\u8BE5\u76AE\u80A4\u5DF2\u89E3\u9501\uFF0C\u8F6C\u5316\u6210" + info.Price + "\u91D1\u5E01");
                CocosZ_1.cocosz.dataMgr.CoinCount += info.Price;
                return;
            }
            Msg_1.default.Show("\u76AE\u80A4\u89E3\u9501\u6210\u529F");
            CocosZ_1.cocosz.dataMgr.CurSkinId = this.skinID;
        }
        else if (rewardList[this.targetID] >= -2) {
            var info = CocosZ_1.cocosz.dataMgr.getBallbonSkinInfo(this.skinID);
            cc.log(info);
            if (info.State == 1 || info.State == 2) {
                Msg_1.default.Show("\u8BE5\u76AE\u80A4\u5DF2\u89E3\u9501\uFF0C\u8F6C\u5316\u6210" + info.Price + "\u91D1\u5E01");
                CocosZ_1.cocosz.dataMgr.CoinCount += info.Price;
                return;
            }
            Msg_1.default.Show("\u76AE\u80A4\u89E3\u9501\u6210\u529F");
            CocosZ_1.cocosz.dataMgr.CurBallbonSkinId = this.skinID2;
        }
        // cocosz.dataMgr.Lottery--;
    };
    UiLottery.prototype.onReward = function () {
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
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        if (this.wheelState !== 0) {
            Msg_1.default.Show("正在抽奖中");
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
        CocosZ_1.cocosz.dataMgr.Lottery--;
        this.targetID = this._getRanDom();
        this.decAngle = 2 * 360; // 减速旋转两圈
        this.wheelState = 1;
        this.curSpeed = 0;
        this.spinTime = 0;
    };
    UiLottery.prototype.onTips = function (tips) {
        Msg_1.default.Show(tips);
    };
    UiLottery.prototype.onBack = function () {
        var _this = this;
        cc.log("-----sceneName--", CocosZ_1.cocosz.sceneMgr.sceneName);
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        CocosZ_1.cocosz.unscheduleAllCallbacks();
        cc.tween(this.scaleNode)
            .to(0.2, { scale: 0 })
            .call(function () {
            if (_this.wheelState == 1 || _this.wheelState == 2) {
                CocosZ_1.cocosz.dataMgr.Lottery++;
            }
            if (CocosZ_1.cocosz.sceneMgr.sceneName == "Game") {
                CocosZ_1.cocosz.uiMgr.openPanel(Constant_1.PanelName.UiBeforeSucceed);
                _this._page.destroy();
            }
            else {
                lieyou_SdkManager.showMoreGameByBanner();
                _this._page.destroy();
            }
        })
            .start();
    };
    UiLottery.prototype.onVideo = function () {
        var _this = this;
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        // Msg.Show("视频播放失败!");
        if (cc.sys.platform === cc.sys.WECHAT_GAME || !cc.sys.isMobile) {
            CocosZ_1.cocosz.dataMgr.Lottery++;
            this.onTips("抽奖次数+1");
            if (CocosZ_1.cocosz.dataMgr.Lottery <= 0) {
                this.btnFree.active = false;
                this.btnVideo.active = true;
            }
            else {
                this.btnFree.active = true;
                this.btnVideo.active = false;
            }
            this.onReward();
            return;
        }
        if (CocosZ_1.cocosz.gameMgr.isDelay) {
            return;
        }
        ;
        CocosZ_1.cocosz.gameMgr.isDelay = true;
        CocosZ_1.cocosz.audioMgr.stopAll();
        CocosZ_1.cocosz.scheduleOnce(function () {
            CocosZ_1.cocosz.gameMgr.isDelay = false;
        }, 1.5);
        lieyou_SdkManager.showRewardedVideoAd(function (res) {
            CocosZ_1.cocosz.audioMgr.resumAllMusic();
            if (res) {
                CocosZ_1.cocosz.dataMgr.Lottery++;
                _this.onTips("抽奖次数+1");
                if (CocosZ_1.cocosz.dataMgr.Lottery <= 0) {
                    _this.btnFree.active = false;
                    _this.btnVideo.active = true;
                }
                else {
                    _this.btnFree.active = true;
                    _this.btnVideo.active = false;
                }
                _this.onReward();
            }
            else {
                _this.onTips("视频播放完成才能获取奖励");
            }
        });
    };
    UiLottery.prototype.onClose = function () {
        cc.game.targetOff(this);
    };
    UiLottery.prototype.onDestroy = function () {
        CocosZ_1.cocosz.unscheduleAllCallbacks();
        cc.game.targetOff(this);
    };
    UiLottery.prototype._getRanDom = function () {
        var num = Math.random();
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
    };
    UiLottery = __decorate([
        ccclass
    ], UiLottery);
    return UiLottery;
}(UIPage_1.default));
exports.default = UiLottery;

cc._RF.pop();