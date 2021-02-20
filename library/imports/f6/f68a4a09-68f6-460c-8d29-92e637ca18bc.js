"use strict";
cc._RF.push(module, 'f68a4oJaPZGDI0pkuY3yhi8', 'Lottery');
// script/Ui/Lottery.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var Msg_1 = require("../Framework/Msg");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.box1 = null;
        _this.box2 = null;
        _this.box3 = null;
        _this.box4 = null;
        _this.mask = null;
        _this.YRight = null;
        _this.btnStart = null;
        _this.btnVideo = null;
        _this.btnBack = null;
        _this.WRight = null;
        _this.prop = null;
        _this.ing = null;
        _this.prop2 = null;
        _this.prop3 = null;
        _this.prop1 = null;
        _this.prop4 = null;
        _this.rod = null;
        _this.coin = null;
        _this.num = 1;
        _this.result = 1;
        _this.result2 = 1;
        _this.result3 = 1;
        _this.result4 = 1;
        _this.isRead = false;
        _this.isRead2 = false;
        _this.isRead3 = false;
        _this.isRead4 = false;
        _this.time = 0.5;
        _this.time2 = 50;
        _this.time3 = 1;
        _this.speed = 1;
        _this.speed2 = 1;
        _this.speed3 = 1;
        _this.speed4 = 1;
        _this.isStart = false;
        _this.isAddSpeed = true;
        _this.action = false;
        _this.roleSkinID = 0;
        _this.balloonSkinID = 0;
        _this.propID = 0;
        _this.lotteryList = [];
        _this.action1 = null;
        _this.action2 = null;
        _this.action3 = null;
        _this.action4 = null;
        _this.delayTime = 3;
        _this.isEnd = false;
        _this.rewardList1 = [];
        _this.rewardList2 = [];
        _this.rewardList3 = [];
        _this.rewardList4 = [];
        _this.skin = [];
        return _this;
    }
    NewClass.prototype.onPush = function (num) {
        cc.log(num, this.lotteryList[num]);
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
    };
    NewClass.prototype.onLottery = function () {
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
            .start();
        // if (this.skin.length > 0) {
        // this.rewardList1=this.skin[0][]
        // }
        if (Math.random() < 0.1) {
            for (var i = 0; i < this.lotteryList.length; i++) {
                if (this.lotteryList[i][0] == 4) {
                    this.result = i;
                    this.result2 = i;
                    this.result3 = i;
                    this.result4 = i;
                    this.rewardList1 = [];
                    this.rewardList2 = [];
                    this.rewardList3 = [];
                    this.rewardList4 = [];
                    this.rewardList4.push(this.lotteryList[i][1]);
                    this.rewardList4.push(this.lotteryList[i][1]);
                    this.rewardList4.push(this.lotteryList[i][1]);
                    this.rewardList4.push(this.lotteryList[i][1]);
                    break;
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
                    this.rewardList3.push(this.lotteryList[i][1]);
                    this.rewardList3.push(this.lotteryList[i][1]);
                    this.rewardList3.push(this.lotteryList[i][1]);
                    this.rewardList3.push(this.lotteryList[i][1]);
                    break;
                }
            }
        }
    };
    NewClass.prototype.onTips = function (msg) {
        Msg_1.default.Show(msg);
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onDestroy = function () {
        cc.game.targetOff(this);
    };
    // onLoad () {}
    NewClass.prototype.start = function () {
        var _this = this;
        CocosZ_1.cocosz.gameMgr.LevelNum2 = 0;
        this.coin.string = CocosZ_1.cocosz.dataMgr.CoinCount.toString();
        cc.game.on(Constant_1.default.E_UPDATE_COIN, function () {
            _this.coin.string = CocosZ_1.cocosz.dataMgr.CoinCount.toString();
        }, this);
        this.WRight.active = false;
        this.schedule(function () {
            _this.WRight.active = !_this.WRight.active;
            _this.YRight.active = !_this.YRight.active;
        }, 0.5);
        this.btnStart.on(cc.Node.EventType.TOUCH_END, function () {
            if (_this.isStart)
                return;
            _this.WRight.active = true;
            _this.YRight.active = true;
            _this.isStart = true;
            _this.ing.active = true;
            _this.btnStart.active = false;
            _this.onLottery();
        });
        this.btnVideo.on(cc.Node.EventType.TOUCH_END, function () {
            if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                _this.WRight.active = true;
                _this.YRight.active = true;
                _this.isStart = true;
                _this.ing.active = true;
                _this.btnStart.active = false;
                _this.btnVideo.active = false;
                _this.rewardList1 = [];
                _this.rewardList2 = [];
                _this.rewardList3 = [];
                _this.rewardList4 = [];
                _this.result = 1;
                _this.result2 = 1;
                _this.result3 = 1;
                _this.result4 = 1;
                _this.isRead = false;
                _this.isRead2 = false;
                _this.isRead3 = false;
                _this.isRead4 = false;
                _this.time = 0.5;
                _this.time2 = 50;
                _this.time3 = 1;
                _this.speed = 1;
                _this.speed2 = 1;
                _this.speed3 = 1;
                _this.speed4 = 1;
                _this.isAddSpeed = true;
                _this.isEnd = false;
                _this.onLottery();
                return;
            }
            else if (cc.sys.platform === cc.sys.OPPO_GAME || cc.sys.platform === cc.sys.VIVO_GAME) {
                lieyou_SdkManager.showRewardedVideoAd(function (res) {
                    CocosZ_1.cocosz.audioMgr.resumAllMusic();
                    if (res) {
                        _this.WRight.active = true;
                        _this.YRight.active = true;
                        _this.isStart = true;
                        _this.ing.active = true;
                        _this.btnStart.active = false;
                        _this.btnVideo.active = false;
                        _this.rewardList1 = [];
                        _this.rewardList2 = [];
                        _this.rewardList3 = [];
                        _this.rewardList4 = [];
                        _this.result = 1;
                        _this.result2 = 1;
                        _this.result3 = 1;
                        _this.result4 = 1;
                        _this.isRead = false;
                        _this.isRead2 = false;
                        _this.isRead3 = false;
                        _this.isRead4 = false;
                        _this.time = 0.5;
                        _this.time2 = 50;
                        _this.time3 = 1;
                        _this.speed = 1;
                        _this.speed2 = 1;
                        _this.speed3 = 1;
                        _this.speed4 = 1;
                        _this.isAddSpeed = true;
                        _this.isEnd = false;
                        _this.onLottery();
                        _this.onTips('获取视频奖励成功');
                    }
                    else {
                        _this.onTips('视频播放完成才能获取奖励');
                    }
                });
            }
        });
        this.btnBack.on(cc.Node.EventType.TOUCH_END, function () {
            CocosZ_1.cocosz.audioMgr.playbtnEffect();
            // this.scheduleOnce(() => {
            CocosZ_1.cocosz.uiMgr.openPanel(Constant_1.PanelName.UiBeforeSucceed);
            // }, 1.5)
            _this.node.destroy();
        }, this);
        this.roleSkinID = CocosZ_1.cocosz.dataMgr.getRandomLockSkin();
        this.balloonSkinID = CocosZ_1.cocosz.dataMgr.getRandomLockBalloonSkin();
        this.propID = Math.random() > 0.5 ? 0 : 1;
        cc.log(this.roleSkinID, this.balloonSkinID, this.propID);
        for (var i = 0; i < 15; i++) {
            var num = Math.random();
            if (num > 0.25) {
                var num_1 = 20 * Math.floor(Math.random() * 10) + 50;
                var a = [];
                a.push(1);
                a.push(num_1);
                this.lotteryList.push(a);
                var node_1 = cc.instantiate(this.prop2.getChildByName("coin"));
                node_1.x = 0;
                node_1.y = -200 * i;
                node_1.getChildByName("num").getComponent(cc.Label).string = num_1 + "";
                this.prop.addChild(node_1);
            }
            else if (num > 0.1) {
                var propid = Math.random() > 0.5 ? 0 : 1;
                var a = [];
                a.push(2);
                a.push(propid);
                this.lotteryList.push(a);
                var node_2 = cc.instantiate(this.prop2.getChildByName("prop"));
                node_2.x = 0;
                node_2.y = -200 * i;
                if (propid == 0) {
                    node_2.getComponent(cc.Sprite).spriteFrame = CocosZ_1.cocosz.resMgr.getRes("boom", cc.SpriteFrame);
                }
                else if (propid == 1) {
                    node_2.getComponent(cc.Sprite).spriteFrame = CocosZ_1.cocosz.resMgr.getRes("skipVideo", cc.SpriteFrame);
                }
                this.prop.addChild(node_2);
            }
            else if (num > 0.05) {
                var a = [];
                a.push(3);
                a.push(this.roleSkinID);
                this.lotteryList.push(a);
                var node_3 = cc.instantiate(this.prop2.getChildByName("role"));
                node_3.x = 0;
                node_3.y = -200 * i;
                node_3.getComponent(cc.Sprite).spriteFrame = CocosZ_1.cocosz.resMgr.getRes("role" + a[1], cc.SpriteFrame);
                this.prop.addChild(node_3);
                // this.skin.push(a);
            }
            else if (num > 0) {
                var a = [];
                a.push(4);
                a.push(this.balloonSkinID);
                this.lotteryList.push(a);
                var node_4 = cc.instantiate(this.prop2.getChildByName("balloon"));
                node_4.x = 0;
                node_4.y = -200 * i;
                node_4.getComponent(cc.Sprite).spriteFrame = CocosZ_1.cocosz.resMgr.getRes("balloon" + (a[1] + 1), cc.SpriteFrame);
                this.prop.addChild(node_4);
                // this.skin.push(a);
            }
        }
        cc.log(this.lotteryList);
        this.prop3 = cc.instantiate(this.prop);
        this.prop4 = cc.instantiate(this.prop);
        this.prop2 = cc.instantiate(this.prop);
        this.prop.parent.addChild(this.prop3);
        this.prop.parent.addChild(this.prop2);
        this.prop.parent.addChild(this.prop4);
        var node = this.prop.children[0];
        var node1 = cc.instantiate(node);
        var node2 = cc.instantiate(node);
        var node3 = cc.instantiate(node);
        var node4 = cc.instantiate(node);
        this.prop.addChild(node1);
        node1.y = -200 * 15;
        this.prop2.addChild(node2);
        node2.y = -200 * 15;
        this.prop3.addChild(node3);
        node3.y = -200 * 15;
        this.prop4.addChild(node4);
        node4.y = -200 * 15;
        this.prop.x = -321;
        this.prop2.x = -107;
        this.prop3.x = 107;
        this.prop4.x = 321;
    };
    NewClass.prototype.getRandom = function () {
        var num = Math.floor(this.lotteryList.length * Math.random());
        this.onPush(num);
        return num;
    };
    NewClass.prototype.update = function (dt) {
        if (this.isEnd)
            return;
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
                        this.prop.y = this.result * 200;
                    }
                }
                if (Math.abs(this.result2 * 200 - 3000 - this.prop2.x) <= 3000 && this.speed2 > 7) {
                    this.speed2 -= 0.1;
                }
                else {
                    if (this.prop2.y >= this.result2 * 200 && Math.abs(this.prop2.y - this.result2 * 200) <= this.speed2) {
                        this.isRead2 = true;
                        this.prop2.y = this.result2 * 200;
                    }
                }
                if (Math.abs(this.result3 * 200 - 3000 - this.prop3.x) <= 3000 && this.speed3 > 7) {
                    this.speed3 -= 0.1;
                }
                else {
                    if (this.prop3.y >= this.result3 * 200 && Math.abs(this.prop3.y - this.result3 * 200) <= this.speed3) {
                        this.isRead3 = true;
                        this.prop3.y = this.result3 * 200;
                    }
                }
                if (Math.abs(this.result4 * 200 - 3000 - this.prop4.x) <= 3000 && this.speed4 > 7) {
                    this.speed4 -= 0.1;
                }
                else {
                    if (this.prop4.y >= this.result4 * 200 && Math.abs(this.prop4.y - this.result4 * 200) <= this.speed4) {
                        this.isRead4 = true;
                        this.prop4.y = this.result4 * 200;
                    }
                }
                if (this.isRead && this.isRead2 && this.isRead3 && this.isRead4) {
                    this.isEnd = true;
                    var msg = "恭喜获得";
                    this.btnVideo.active = true;
                    this.ing.active = false;
                    var coin = 0;
                    if (this.rewardList1.length > 0) {
                        for (var _i = 0, _a = this.rewardList1; _i < _a.length; _i++) {
                            var idx = _a[_i];
                            coin += idx;
                        }
                    }
                    if (this.rewardList2.length > 0) {
                        var boomNum = 0;
                        var CardNum = 0;
                        for (var _b = 0, _c = this.rewardList2; _b < _c.length; _b++) {
                            var idx = _c[_b];
                            if (idx == 0) {
                                boomNum++;
                                CocosZ_1.cocosz.dataMgr.BoomNum++;
                            }
                            else if (idx == 1) {
                                CardNum++;
                                CocosZ_1.cocosz.dataMgr.SkinVedioNum++;
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
                        for (var _d = 0, _e = this.rewardList3; _d < _e.length; _d++) {
                            var idx = _e[_d];
                            coin += 300;
                        }
                    }
                    if (this.rewardList4.length > 0 && this.rewardList4.length != 4) {
                        for (var _f = 0, _g = this.rewardList4; _f < _g.length; _f++) {
                            var idx = _g[_f];
                            coin += 300;
                        }
                    }
                    if (this.rewardList3.length >= 4) {
                        var info = CocosZ_1.cocosz.dataMgr.getSkinInfo(this.rewardList3[1]);
                        var price = info.Price;
                        cc.log(info);
                        if (info.State == 1 || info.State == 2) {
                            CocosZ_1.cocosz.dataMgr.CoinCount += price;
                            cc.game.emit(Constant_1.default.E_UPDATE_COIN);
                            Msg_1.default.Show("该皮肤已拥有,转换成对应的金币*" + price);
                            return;
                        }
                        CocosZ_1.cocosz.dataMgr.CurSkinId = this.rewardList3[1];
                        msg = "恭喜获得稀有奖励人物皮肤一套";
                    }
                    if (this.rewardList4.length >= 4) {
                        var info = CocosZ_1.cocosz.dataMgr.getBallbonSkinInfo(this.rewardList4[1]);
                        var price = info.Price;
                        cc.log(info);
                        if (info.State == 1 || info.State == 2) {
                            CocosZ_1.cocosz.dataMgr.CoinCount += price;
                            cc.game.emit(Constant_1.default.E_UPDATE_COIN);
                            Msg_1.default.Show("该皮肤已拥有,转换成对应的金币*" + price);
                            return;
                        }
                        CocosZ_1.cocosz.dataMgr.CurBallbonSkinId = this.rewardList4[1];
                        msg = "恭喜获得稀有奖励气球皮肤一套";
                    }
                    if (coin > 0) {
                        CocosZ_1.cocosz.dataMgr.CoinCount += coin;
                        msg += " 金币*" + coin + " ";
                    }
                    Msg_1.default.Show(msg);
                    cc.game.emit(Constant_1.default.E_UPDATE_COIN);
                }
                // }
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "box1", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "box2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "box3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "box4", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "mask", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "YRight", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnStart", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnVideo", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "btnBack", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "WRight", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "prop", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "ing", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "prop2", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "prop3", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "rod", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "coin", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();