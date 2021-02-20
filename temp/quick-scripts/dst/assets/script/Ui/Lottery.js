
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Ui/Lottery.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxVaVxcTG90dGVyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQTZDO0FBQzdDLGtEQUFzRTtBQUN0RSx3Q0FBbUM7QUFHN0IsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFzQyw0QkFBWTtJQURsRDtRQUFBLHFFQTB0QkM7UUF0dEJHLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdyQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBSXZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBR3hCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFLdkIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdyQixTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUV0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBQ3RCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFHdEIsU0FBRyxHQUFZLElBQUksQ0FBQztRQUdwQixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBR3RCLFNBQUcsR0FBVyxDQUFDLENBQUM7UUFJaEIsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUVuQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsYUFBTyxHQUFXLENBQUMsQ0FBQztRQUlwQixZQUFNLEdBQVksS0FBSyxDQUFDO1FBRXhCLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsYUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6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SUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBSXBCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFBO1FBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtRQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUE7SUFDdEIsQ0FBQztJQUdELDRCQUFTLEdBQVQ7UUFDSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO1FBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsT0FBTyxHQUFHLENBQUE7SUFH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IGNvY29zeiB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29jb3NaXCI7XHJcbmltcG9ydCBDb25zdGFudCwgeyBQYWdlTmFtZSwgUGFuZWxOYW1lIH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG5pbXBvcnQgTXNnIGZyb20gXCIuLi9GcmFtZXdvcmsvTXNnXCI7XHJcbmltcG9ydCBiYWxsb29uIGZyb20gXCIuLi9HYW1lL2JhbGxvb25cIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdDbGFzcyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBib3gxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYm94MjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJveDM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBib3g0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIG1hc2s6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgWVJpZ2h0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBidG5TdGFydDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ0blZpZGVvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYnRuQmFjazogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBXUmlnaHQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcm9wOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGluZzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByb3AyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJvcDM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByb3AxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByb3A0OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHJvZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgY29pbjogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuXHJcbiAgICBudW06IG51bWJlciA9IDE7XHJcblxyXG5cclxuXHJcbiAgICByZXN1bHQ6IG51bWJlciA9IDE7XHJcblxyXG4gICAgcmVzdWx0MjogbnVtYmVyID0gMTtcclxuICAgIHJlc3VsdDM6IG51bWJlciA9IDE7XHJcbiAgICByZXN1bHQ0OiBudW1iZXIgPSAxO1xyXG5cclxuXHJcblxyXG4gICAgaXNSZWFkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgaXNSZWFkMjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNSZWFkMzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNSZWFkNDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICB0aW1lOiBudW1iZXIgPSAwLjU7XHJcblxyXG4gICAgdGltZTI6IG51bWJlciA9IDUwO1xyXG5cclxuICAgIHRpbWUzOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHNwZWVkOiBudW1iZXIgPSAxO1xyXG4gICAgc3BlZWQyOiBudW1iZXIgPSAxO1xyXG4gICAgc3BlZWQzOiBudW1iZXIgPSAxO1xyXG4gICAgc3BlZWQ0OiBudW1iZXIgPSAxO1xyXG5cclxuICAgIGlzU3RhcnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBpc0FkZFNwZWVkOiBib29sZWFuID0gdHJ1ZVxyXG4gICAgYWN0aW9uOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICByb2xlU2tpbklEOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGJhbGxvb25Ta2luSUQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgcHJvcElEOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICBsb3R0ZXJ5TGlzdDogYW55ID0gW107XHJcblxyXG5cclxuICAgIGFjdGlvbjE6IGFueSA9IG51bGxcclxuXHJcbiAgICBhY3Rpb24yOiBhbnkgPSBudWxsXHJcbiAgICBhY3Rpb24zOiBhbnkgPSBudWxsXHJcbiAgICBhY3Rpb240OiBhbnkgPSBudWxsXHJcbiAgICBkZWxheVRpbWU6IG51bWJlciA9IDM7XHJcblxyXG5cclxuICAgIGlzRW5kOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIHJld2FyZExpc3QxOiBhbnkgPSBbXTtcclxuICAgIHJld2FyZExpc3QyOiBhbnkgPSBbXTtcclxuICAgIHJld2FyZExpc3QzOiBhbnkgPSBbXTtcclxuICAgIHJld2FyZExpc3Q0OiBhbnkgPSBbXTtcclxuXHJcblxyXG4gICAgc2tpbjogYW55ID0gW107XHJcblxyXG5cclxuICAgIG9uUHVzaChudW0pIHtcclxuICAgICAgICBjYy5sb2cobnVtLCB0aGlzLmxvdHRlcnlMaXN0W251bV0pXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmxvdHRlcnlMaXN0W251bV1bMF0pIHtcclxuICAgICAgICAgICAgY2FzZSAxOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJld2FyZExpc3QxLnB1c2godGhpcy5sb3R0ZXJ5TGlzdFtudW1dWzFdKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMjoge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXdhcmRMaXN0Mi5wdXNoKHRoaXMubG90dGVyeUxpc3RbbnVtXVsxXSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDM6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmV3YXJkTGlzdDMucHVzaCh0aGlzLmxvdHRlcnlMaXN0W251bV1bMV0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSA0OiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJld2FyZExpc3Q0LnB1c2godGhpcy5sb3R0ZXJ5TGlzdFtudW1dWzFdKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkxvdHRlcnkoKSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bHQgPSB0aGlzLmdldFJhbmRvbSgpO1xyXG4gICAgICAgIHRoaXMucmVzdWx0MiA9IHRoaXMuZ2V0UmFuZG9tKCk7XHJcbiAgICAgICAgdGhpcy5yZXN1bHQzID0gdGhpcy5nZXRSYW5kb20oKTtcclxuICAgICAgICB0aGlzLnJlc3VsdDQgPSB0aGlzLmdldFJhbmRvbSgpO1xyXG5cclxuICAgICAgICBjYy5sb2codGhpcy5yZXN1bHQsIHRoaXMucmVzdWx0MiwgdGhpcy5yZXN1bHQzLCB0aGlzLnJlc3VsdDQpO1xyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5sb3R0ZXJ5TGlzdFt0aGlzLnJlc3VsdF1bMF0gPT0gMSkge1xyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgY2MubG9nKHRoaXMucmV3YXJkTGlzdDEsIHRoaXMucmV3YXJkTGlzdDIsIHRoaXMucmV3YXJkTGlzdDMsIHRoaXMucmV3YXJkTGlzdDQpO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLnJvZClcclxuICAgICAgICAgICAgLmJ5KDAuMywgeyBhbmdsZTogLTUwIH0pXHJcbiAgICAgICAgICAgIC5ieSgwLjMsIHsgYW5nbGU6IDUwIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLnNraW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vIHRoaXMucmV3YXJkTGlzdDE9dGhpcy5za2luWzBdW11cclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA8IDAuMSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubG90dGVyeUxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvdHRlcnlMaXN0W2ldWzBdID09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQyID0gaTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdDMgPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0NCA9IGk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV3YXJkTGlzdDEgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJld2FyZExpc3QyID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXdhcmRMaXN0MyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV3YXJkTGlzdDQgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXdhcmRMaXN0NC5wdXNoKHRoaXMubG90dGVyeUxpc3RbaV1bMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXdhcmRMaXN0NC5wdXNoKHRoaXMubG90dGVyeUxpc3RbaV1bMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXdhcmRMaXN0NC5wdXNoKHRoaXMubG90dGVyeUxpc3RbaV1bMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXdhcmRMaXN0NC5wdXNoKHRoaXMubG90dGVyeUxpc3RbaV1bMV0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLmxvdHRlcnlMaXN0W2ldWzBdID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQyID0gaTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdDMgPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0NCA9IGk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV3YXJkTGlzdDEgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJld2FyZExpc3QyID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXdhcmRMaXN0MyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV3YXJkTGlzdDQgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXdhcmRMaXN0My5wdXNoKHRoaXMubG90dGVyeUxpc3RbaV1bMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXdhcmRMaXN0My5wdXNoKHRoaXMubG90dGVyeUxpc3RbaV1bMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXdhcmRMaXN0My5wdXNoKHRoaXMubG90dGVyeUxpc3RbaV1bMV0pXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXdhcmRMaXN0My5wdXNoKHRoaXMubG90dGVyeUxpc3RbaV1bMV0pXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uVGlwcyhtc2cpIHtcclxuICAgICAgICBNc2cuU2hvdyhtc2cpO1xyXG4gICAgfVxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNjLmdhbWUudGFyZ2V0T2ZmKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvY29zei5nYW1lTWdyLkxldmVsTnVtMiA9IDA7XHJcbiAgICAgICAgdGhpcy5jb2luLnN0cmluZyA9IGNvY29zei5kYXRhTWdyLkNvaW5Db3VudC50b1N0cmluZygpO1xyXG5cclxuICAgICAgICBjYy5nYW1lLm9uKENvbnN0YW50LkVfVVBEQVRFX0NPSU4sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb2luLnN0cmluZyA9IGNvY29zei5kYXRhTWdyLkNvaW5Db3VudC50b1N0cmluZygpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuV1JpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5XUmlnaHQuYWN0aXZlID0gIXRoaXMuV1JpZ2h0LmFjdGl2ZTtcclxuICAgICAgICAgICAgdGhpcy5ZUmlnaHQuYWN0aXZlID0gIXRoaXMuWVJpZ2h0LmFjdGl2ZTtcclxuICAgICAgICB9LCAwLjUpXHJcblxyXG4gICAgICAgIHRoaXMuYnRuU3RhcnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3RhcnQpIHJldHVybjtcclxuICAgICAgICAgICAgdGhpcy5XUmlnaHQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ZUmlnaHQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc1N0YXJ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pbmcuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5idG5TdGFydC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5vbkxvdHRlcnkoKTtcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmJ0blZpZGVvLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKCkgPT4ge1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuV1JpZ2h0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLllSaWdodC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1N0YXJ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5nLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0blN0YXJ0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5WaWRlby5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmV3YXJkTGlzdDEgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmV3YXJkTGlzdDIgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmV3YXJkTGlzdDMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmV3YXJkTGlzdDQgPSBbXTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0MiA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdDMgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQ0ID0gMTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNSZWFkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1JlYWQyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVhZDMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNSZWFkNCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudGltZSA9IDAuNTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUyID0gNTA7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lMyA9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkMiA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkMyA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkNCA9IDE7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNBZGRTcGVlZCA9IHRydWVcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRW5kID0gZmFsc2VcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTG90dGVyeSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5PUFBPX0dBTUUgfHwgY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuVklWT19HQU1FKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuc2hvd1Jld2FyZGVkVmlkZW9BZCgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnJlc3VtQWxsTXVzaWMoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuV1JpZ2h0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuWVJpZ2h0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTdGFydCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5nLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuU3RhcnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuVmlkZW8uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmV3YXJkTGlzdDEgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXdhcmRMaXN0MiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJld2FyZExpc3QzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmV3YXJkTGlzdDQgPSBbXTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdCA9IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdDIgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdDMgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdDQgPSAxO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUmVhZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1JlYWQyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNSZWFkMyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUmVhZDQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZSA9IDAuNTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZTIgPSA1MDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZTMgPSAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQyID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZDMgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkNCA9IDE7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0FkZFNwZWVkID0gdHJ1ZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0VuZCA9IGZhbHNlXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTG90dGVyeSgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25UaXBzKCfojrflj5bop4bpopHlpZblirHmiJDlip8nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblRpcHMoJ+inhumikeaSreaUvuWujOaIkOaJjeiDveiOt+WPluWlluWKsScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICB0aGlzLmJ0bkJhY2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5YnRuRWZmZWN0KCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYW5lbChQYW5lbE5hbWUuVWlCZWZvcmVTdWNjZWVkKTtcclxuICAgICAgICAgICAgLy8gfSwgMS41KVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgIH0sIHRoaXMpXHJcblxyXG4gICAgICAgIHRoaXMucm9sZVNraW5JRCA9IGNvY29zei5kYXRhTWdyLmdldFJhbmRvbUxvY2tTa2luKCk7XHJcbiAgICAgICAgdGhpcy5iYWxsb29uU2tpbklEID0gY29jb3N6LmRhdGFNZ3IuZ2V0UmFuZG9tTG9ja0JhbGxvb25Ta2luKCk7XHJcbiAgICAgICAgdGhpcy5wcm9wSUQgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gMCA6IDE7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBjYy5sb2codGhpcy5yb2xlU2tpbklELCB0aGlzLmJhbGxvb25Ta2luSUQsIHRoaXMucHJvcElEKVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE1OyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG51bSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIGlmIChudW0gPiAwLjI1KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbnVtID0gMjAgKiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyA1MDtcclxuICAgICAgICAgICAgICAgIGxldCBhID0gW107XHJcbiAgICAgICAgICAgICAgICBhLnB1c2goMSk7XHJcbiAgICAgICAgICAgICAgICBhLnB1c2gobnVtKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG90dGVyeUxpc3QucHVzaChhKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByb3AyLmdldENoaWxkQnlOYW1lKFwiY29pblwiKSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnggPSAwO1xyXG4gICAgICAgICAgICAgICAgbm9kZS55ID0gLTIwMCAqIGk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwibnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gbnVtICsgXCJcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcC5hZGRDaGlsZChub2RlKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobnVtID4gMC4xKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvcGlkID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IDAgOiAxO1xyXG4gICAgICAgICAgICAgICAgbGV0IGEgPSBbXTtcclxuICAgICAgICAgICAgICAgIGEucHVzaCgyKTtcclxuICAgICAgICAgICAgICAgIGEucHVzaChwcm9waWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3R0ZXJ5TGlzdC5wdXNoKGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcm9wMi5nZXRDaGlsZEJ5TmFtZShcInByb3BcIikpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS54ID0gMDtcclxuICAgICAgICAgICAgICAgIG5vZGUueSA9IC0yMDAgKiBpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BpZCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiYm9vbVwiLCBjYy5TcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9waWQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcInNraXBWaWRlb1wiLCBjYy5TcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wLmFkZENoaWxkKG5vZGUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobnVtID4gMC4wNSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGEgPSBbXTtcclxuICAgICAgICAgICAgICAgIGEucHVzaCgzKTtcclxuICAgICAgICAgICAgICAgIGEucHVzaCh0aGlzLnJvbGVTa2luSUQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb3R0ZXJ5TGlzdC5wdXNoKGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcm9wMi5nZXRDaGlsZEJ5TmFtZShcInJvbGVcIikpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS54ID0gMDtcclxuICAgICAgICAgICAgICAgIG5vZGUueSA9IC0yMDAgKiBpO1xyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcInJvbGVcIiArIGFbMV0sIGNjLlNwcml0ZUZyYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3AuYWRkQ2hpbGQobm9kZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2tpbi5wdXNoKGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBhID0gW107XHJcbiAgICAgICAgICAgICAgICBhLnB1c2goNCk7XHJcbiAgICAgICAgICAgICAgICBhLnB1c2godGhpcy5iYWxsb29uU2tpbklEKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubG90dGVyeUxpc3QucHVzaChhKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJvcDIuZ2V0Q2hpbGRCeU5hbWUoXCJiYWxsb29uXCIpKTtcclxuICAgICAgICAgICAgICAgIG5vZGUueCA9IDA7XHJcbiAgICAgICAgICAgICAgICBub2RlLnkgPSAtMjAwICogaTtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcImJhbGxvb25cIiArIChhWzFdICsgMSksIGNjLlNwcml0ZUZyYW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcC5hZGRDaGlsZChub2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNraW4ucHVzaChhKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2MubG9nKHRoaXMubG90dGVyeUxpc3QpXHJcblxyXG4gICAgICAgIHRoaXMucHJvcDMgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByb3ApO1xyXG4gICAgICAgIHRoaXMucHJvcDQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByb3ApO1xyXG4gICAgICAgIHRoaXMucHJvcDIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByb3ApO1xyXG5cclxuICAgICAgICB0aGlzLnByb3AucGFyZW50LmFkZENoaWxkKHRoaXMucHJvcDMpO1xyXG4gICAgICAgIHRoaXMucHJvcC5wYXJlbnQuYWRkQ2hpbGQodGhpcy5wcm9wMik7XHJcbiAgICAgICAgdGhpcy5wcm9wLnBhcmVudC5hZGRDaGlsZCh0aGlzLnByb3A0KTtcclxuXHJcblxyXG4gICAgICAgIGxldCBub2RlID0gdGhpcy5wcm9wLmNoaWxkcmVuWzBdO1xyXG4gICAgICAgIGxldCBub2RlMSA9IGNjLmluc3RhbnRpYXRlKG5vZGUpO1xyXG4gICAgICAgIGxldCBub2RlMiA9IGNjLmluc3RhbnRpYXRlKG5vZGUpO1xyXG4gICAgICAgIGxldCBub2RlMyA9IGNjLmluc3RhbnRpYXRlKG5vZGUpO1xyXG4gICAgICAgIGxldCBub2RlNCA9IGNjLmluc3RhbnRpYXRlKG5vZGUpO1xyXG4gICAgICAgIHRoaXMucHJvcC5hZGRDaGlsZChub2RlMSk7XHJcbiAgICAgICAgbm9kZTEueSA9IC0yMDAgKiAxNTtcclxuICAgICAgICB0aGlzLnByb3AyLmFkZENoaWxkKG5vZGUyKTtcclxuICAgICAgICBub2RlMi55ID0gLTIwMCAqIDE1O1xyXG4gICAgICAgIHRoaXMucHJvcDMuYWRkQ2hpbGQobm9kZTMpO1xyXG4gICAgICAgIG5vZGUzLnkgPSAtMjAwICogMTU7XHJcbiAgICAgICAgdGhpcy5wcm9wNC5hZGRDaGlsZChub2RlNCk7XHJcbiAgICAgICAgbm9kZTQueSA9IC0yMDAgKiAxNTtcclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLnByb3AueCA9IC0zMjFcclxuICAgICAgICB0aGlzLnByb3AyLnggPSAtMTA3XHJcbiAgICAgICAgdGhpcy5wcm9wMy54ID0gMTA3XHJcbiAgICAgICAgdGhpcy5wcm9wNC54ID0gMzIxXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFJhbmRvbSgpIHtcclxuICAgICAgICBsZXQgbnVtID0gTWF0aC5mbG9vcih0aGlzLmxvdHRlcnlMaXN0Lmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpXHJcbiAgICAgICAgdGhpcy5vblB1c2gobnVtKTtcclxuICAgICAgICByZXR1cm4gbnVtXHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzRW5kKSByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc1N0YXJ0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3AueSA+PSAzMDAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3AueSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3AyLnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wMy55ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcDQueSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLnByb3AueSArPSBNYXRoLmZsb29yKHRoaXMuc3BlZWQyKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9wMi55ICs9IE1hdGguZmxvb3IodGhpcy5zcGVlZDIpO1xyXG4gICAgICAgICAgICB0aGlzLnByb3AzLnkgKz0gTWF0aC5mbG9vcih0aGlzLnNwZWVkMik7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcDQueSArPSBNYXRoLmZsb29yKHRoaXMuc3BlZWQyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNBZGRTcGVlZCA9PSB0cnVlICYmIHRoaXMuc3BlZWQgPCAyMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZCArPSAwLjEgKiBNYXRoLnJhbmRvbSgpICogMjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQyICs9IDAuMSAqIE1hdGgucmFuZG9tKCkgKiAyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlZDMgKz0gMC4xICogTWF0aC5yYW5kb20oKSAqIDI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkNCArPSAwLjEgKiBNYXRoLnJhbmRvbSgpICogMjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1JlYWQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3AueSArPSBNYXRoLmZsb29yKHRoaXMuc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3AueSA+PSAzMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcC55ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1JlYWQyID09IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcDIueSArPSBNYXRoLmZsb29yKHRoaXMuc3BlZWQyKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wMi55ID49IDMwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wMi55ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1JlYWQzID09IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcDMueSArPSBNYXRoLmZsb29yKHRoaXMuc3BlZWQzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wMy55ID49IDMwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wMy55ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1JlYWQ0ID09IGZhbHNlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcDQueSArPSBNYXRoLmZsb29yKHRoaXMuc3BlZWQ0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wNC55ID49IDMwMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wNC55ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWRkU3BlZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyB0aGlzLnByb3AyLnkgKz0gTWF0aC5mbG9vcih0aGlzLnNwZWVkMik7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucHJvcDMueSArPSBNYXRoLmZsb29yKHRoaXMuc3BlZWQyKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5wcm9wNC55ICs9IE1hdGguZmxvb3IodGhpcy5zcGVlZDIpO1xyXG5cclxuICAgICAgICAgICAgLy8gY2MubG9nKHRoaXMuZGVsYXlUaW1lLCBNYXRoLmZsb29yKHRoaXMucHJvcC54KSwgdGhpcy5zcGVlZDIpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0FkZFNwZWVkID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmRlbGF5VGltZSAtPSBkdCAqIDM7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5kZWxheVRpbWUgPiAwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5kZWxheVRpbWUgPD0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNSZWFkID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wLnkgKz0gTWF0aC5mbG9vcih0aGlzLnNwZWVkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wLnkgPj0gMzAwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3AueSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNSZWFkMiA9PSBmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3AyLnkgKz0gTWF0aC5mbG9vcih0aGlzLnNwZWVkMik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcDIueSA+PSAzMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcDIueSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNSZWFkMyA9PSBmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3AzLnkgKz0gTWF0aC5mbG9vcih0aGlzLnNwZWVkMyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcDMueSA+PSAzMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcDMueSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNSZWFkNCA9PSBmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3A0LnkgKz0gTWF0aC5mbG9vcih0aGlzLnNwZWVkNCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJvcDQueSA+PSAzMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcDQueSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKHRoaXMucHJvcC55LCB0aGlzLnJlc3VsdCAqIDIwMClcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLnByb3AyLnksIHRoaXMucmVzdWx0MiAqIDIwMClcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLnByb3AzLnksIHRoaXMucmVzdWx0MyAqIDIwMClcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLnByb3A0LnksIHRoaXMucmVzdWx0NCAqIDIwMClcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnModGhpcy5yZXN1bHQgKiAyMDAgLSAzMDAwIC0gdGhpcy5wcm9wLngpIDw9IDMwMDAgJiYgdGhpcy5zcGVlZCA+IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkIC09IDAuMTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcm9wLnkgPj0gdGhpcy5yZXN1bHQgKiAyMDAgJiYgTWF0aC5hYnModGhpcy5wcm9wLnkgLSB0aGlzLnJlc3VsdCAqIDIwMCkgPD0gdGhpcy5zcGVlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUmVhZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcC55ID0gdGhpcy5yZXN1bHQgKiAyMDBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnJlc3VsdDIgKiAyMDAgLSAzMDAwIC0gdGhpcy5wcm9wMi54KSA8PSAzMDAwICYmIHRoaXMuc3BlZWQyID4gNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQyIC09IDAuMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3AyLnkgPj0gdGhpcy5yZXN1bHQyICogMjAwICYmIE1hdGguYWJzKHRoaXMucHJvcDIueSAtIHRoaXMucmVzdWx0MiAqIDIwMCkgPD0gdGhpcy5zcGVlZDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1JlYWQyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wMi55ID0gdGhpcy5yZXN1bHQyICogMjAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnJlc3VsdDMgKiAyMDAgLSAzMDAwIC0gdGhpcy5wcm9wMy54KSA8PSAzMDAwICYmIHRoaXMuc3BlZWQzID4gNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQzIC09IDAuMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3AzLnkgPj0gdGhpcy5yZXN1bHQzICogMjAwICYmIE1hdGguYWJzKHRoaXMucHJvcDMueSAtIHRoaXMucmVzdWx0MyAqIDIwMCkgPD0gdGhpcy5zcGVlZDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1JlYWQzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wMy55ID0gdGhpcy5yZXN1bHQzICogMjAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyh0aGlzLnJlc3VsdDQgKiAyMDAgLSAzMDAwIC0gdGhpcy5wcm9wNC54KSA8PSAzMDAwICYmIHRoaXMuc3BlZWQ0ID4gNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQ0IC09IDAuMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByb3A0LnkgPj0gdGhpcy5yZXN1bHQ0ICogMjAwICYmIE1hdGguYWJzKHRoaXMucHJvcDQueSAtIHRoaXMucmVzdWx0NCAqIDIwMCkgPD0gdGhpcy5zcGVlZDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1JlYWQ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wNC55ID0gdGhpcy5yZXN1bHQ0ICogMjAwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1JlYWQgJiYgdGhpcy5pc1JlYWQyICYmIHRoaXMuaXNSZWFkMyAmJiB0aGlzLmlzUmVhZDQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbXNnID0gXCLmga3llpzojrflvpdcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5WaWRlby5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5nLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2luID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXdhcmRMaXN0MS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGlkeCBvZiB0aGlzLnJld2FyZExpc3QxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2luICs9IGlkeDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmV3YXJkTGlzdDIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYm9vbU51bSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBDYXJkTnVtID0gMDtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpZHggb2YgdGhpcy5yZXdhcmRMaXN0Mikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkeCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9vbU51bSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkJvb21OdW0rKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlkeCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FyZE51bSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLlNraW5WZWRpb051bSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9vbU51bSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZyArPSBcIiDngrjlvLkqXCIgKyBib29tTnVtICsgXCIgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKENhcmROdW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgKz0gXCIg6Lez6L+H5Y2hKlwiICsgQ2FyZE51bSArIFwiIFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXdhcmRMaXN0My5sZW5ndGggPiAwICYmIHRoaXMucmV3YXJkTGlzdDMubGVuZ3RoICE9IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaWR4IG9mIHRoaXMucmV3YXJkTGlzdDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvaW4gKz0gMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXdhcmRMaXN0NC5sZW5ndGggPiAwICYmIHRoaXMucmV3YXJkTGlzdDQubGVuZ3RoICE9IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaWR4IG9mIHRoaXMucmV3YXJkTGlzdDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvaW4gKz0gMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXdhcmRMaXN0My5sZW5ndGggPj0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5mbyA9IGNvY29zei5kYXRhTWdyLmdldFNraW5JbmZvKHRoaXMucmV3YXJkTGlzdDNbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpY2UgPSBpbmZvLlByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coaW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmZvLlN0YXRlID09IDEgfHwgaW5mby5TdGF0ZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5Db2luQ291bnQgKz0gcHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9VUERBVEVfQ09JTilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1zZy5TaG93KFwi6K+l55qu6IKk5bey5oul5pyJLOi9rOaNouaIkOWvueW6lOeahOmHkeW4gSpcIiArIHByaWNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJTa2luSWQgPSB0aGlzLnJld2FyZExpc3QzWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBcIuaBreWWnOiOt+W+l+eogOacieWlluWKseS6uueJqeearuiCpOS4gOWll1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXdhcmRMaXN0NC5sZW5ndGggPj0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5mbyA9IGNvY29zei5kYXRhTWdyLmdldEJhbGxib25Ta2luSW5mbyh0aGlzLnJld2FyZExpc3Q0WzFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByaWNlID0gaW5mby5QcmljZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKGluZm8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5mby5TdGF0ZSA9PSAxIHx8IGluZm8uU3RhdGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ29pbkNvdW50ICs9IHByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KENvbnN0YW50LkVfVVBEQVRFX0NPSU4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNc2cuU2hvdyhcIuivpeearuiCpOW3suaLpeaciSzovazmjaLmiJDlr7nlupTnmoTph5HluIEqXCIgKyBwcmljZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ3VyQmFsbGJvblNraW5JZCA9IHRoaXMucmV3YXJkTGlzdDRbMV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBcIuaBreWWnOiOt+W+l+eogOacieWlluWKseawlOeQg+earuiCpOS4gOWll1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvaW4gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkNvaW5Db3VudCArPSBjb2luO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtc2cgKz0gXCIg6YeR5biBKlwiICsgY29pbiArIFwiIFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBNc2cuU2hvdyhtc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX1VQREFURV9DT0lOKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19