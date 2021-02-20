"use strict";
cc._RF.push(module, 'fa417o2CPJJ5K6p5dWTbmLQ', 'UiBeforeSucceed');
// script/Ui/UiBeforeSucceed.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIPage_1 = require("./UIPage");
var Constant_1 = require("../Framework/Constant");
var CocosZ_1 = require("../Framework/CocosZ");
var Msg_1 = require("../Framework/Msg");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UiBeforeSucceed = /** @class */ (function (_super) {
    __extends(UiBeforeSucceed, _super);
    function UiBeforeSucceed() {
        var _this = _super.call(this) || this;
        _this.scaleNode = null;
        _this.btnNext = null;
        _this.btnLevelNext = null;
        _this.btnDouble = null;
        _this.btnAgain = null;
        _this.fraction = null;
        _this.curFraction = null;
        _this.maxFraction = null;
        _this.coin = null;
        _this.rCoin = null;
        _this.coinSp = null;
        _this.gold = null;
        _this.isture = false;
        _this._init();
        return _this;
    }
    UiBeforeSucceed.prototype._init = function () {
        var Game = CocosZ_1.cocosz.resMgr.getRes(Constant_1.PanelName.UiBeforeSucceed, cc.Prefab);
        if (Game) {
            var node = cc.instantiate(Game);
            if (node) {
                this._page = node;
                cc.find("Canvas/ui").addChild(node);
                node.active = true;
                node.position = cc.Vec2.ZERO;
                this._onLoad();
            }
        }
    };
    UiBeforeSucceed.prototype._onLoad = function () {
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
    };
    UiBeforeSucceed.prototype._Start = function () {
        var _this = this;
        this._page.zIndex += 99999;
        this.btnDouble.on(cc.Node.EventType.TOUCH_START, function () {
            _this.onBtnDouble();
        });
        this.btnLevelNext.on(cc.Node.EventType.TOUCH_END, function () {
            _this.onBtnContinue();
        });
        this.btnNext.on(cc.Node.EventType.TOUCH_END, function () {
            _this.onBtnNext();
        });
        // this.btnBack.on(cc.Node.EventType.TOUCH_START, () => {
        //     this.onBtnBack();
        // });
        this.btnAgain.on(cc.Node.EventType.TOUCH_START, function () {
            _this.onBtnAgain();
        });
        window.onGameSuccess(1, (CocosZ_1.cocosz.gameMgr.curLevelID + 1));
        CocosZ_1.cocosz.dataMgr.CurLevelId = CocosZ_1.cocosz.gameMgr.curLevelID;
        CocosZ_1.cocosz.dataMgr.LevelUnLock(CocosZ_1.cocosz.dataMgr.CurLevelId);
        cc.game.on(Constant_1.default.E_ADClOSE, function () {
            lieyou_SdkManager.showBanner();
            console.log("-----------------------showBannerSucceed");
        }, this);
        CocosZ_1.cocosz.gameMgr.LevelNum++;
        CocosZ_1.cocosz.gameMgr.LevelNum2++;
    };
    UiBeforeSucceed.prototype.onDestroy = function () {
        cc.game.targetOff(this);
    };
    UiBeforeSucceed.prototype.onBtnNext = function () {
        var _this = this;
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        // cocosz.dataMgr.CoinCount += 100;
        // this.coin.string = cocosz.dataMgr.CoinCount.toString();
        CocosZ_1.cocosz.schedule(function () {
            if (_this.rCoin.string == "0") {
                CocosZ_1.cocosz.unscheduleAllCallbacks();
                cc.tween(_this.rCoin.node.parent)
                    .delay(0.2)
                    .to(0.3, { opacity: 0 })
                    .start();
                cc.tween(_this.btnLevelNext)
                    .call(function () {
                    _this.btnLevelNext.active = true;
                })
                    .to(0.3, { opacity: 255 })
                    .start();
                cc.tween(_this.btnAgain)
                    .call(function () {
                    _this.btnAgain.active = true;
                })
                    .to(0.3, { opacity: 255 })
                    .start();
                return;
            }
            var node = cc.instantiate(_this.coinSp);
            var pos = _this.scaleNode.getChildByName("Coin").convertToWorldSpaceAR(node.getPosition());
            var pp = _this.scaleNode.getChildByName("Coin").convertToNodeSpaceAR(pos);
            node.setPosition(pp);
            // cc.log(pos, pp)
            _this.scaleNode.getChildByName("Coin").addChild(node);
            // let pos = this.gold.parent.convertToWorldSpaceAR(this.coinSp.getPosition());
            CocosZ_1.cocosz.dataMgr.CoinCount += 5;
            _this.coin.string = CocosZ_1.cocosz.dataMgr.CoinCount.toString();
            var num = +_this.rCoin.string;
            num -= 5;
            _this.rCoin.string = num.toString();
            cc.tween(node)
                .to(0.2, { scale: 0.5, position: cc.v2(237, 494) })
                .call(function () {
                node.destroy();
            })
                .start();
        }, 0.05);
        this.btnNext.off(cc.Node.EventType.TOUCH_END);
        this.btnDouble.off(cc.Node.EventType.TOUCH_START);
        cc.tween(this.btnNext)
            .to(0.4, { opacity: 0 })
            .call(function () {
            if (cc.sys.platform === cc.sys.OPPO_GAME) {
                // this.scaleNode.x = 110
                _this.scaleNode.getChildByName("nativePos").removeAllChildren();
                window["lieyou_SdkManager"].showMoreGameMiddle_three({ "node": _this.scaleNode.getChildByName("nativePos"), "bgPath": "texture/ss", "scale": 0.75 });
            }
            _this.btnNext.active = false;
        })
            .start();
        cc.tween(this.btnDouble)
            .to(0.4, { opacity: 0 })
            .call(function () {
            _this.btnDouble.active = false;
        })
            .start();
        return;
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
    };
    UiBeforeSucceed.prototype.onBtnBack = function () {
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        CocosZ_1.cocosz.sceneMgr.loadScene("Home", function () {
            CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UiHome);
        });
    };
    UiBeforeSucceed.prototype.onBtnAgain = function () {
        if (this.isture)
            return;
        CocosZ_1.cocosz.dataMgr.CurLevelId = CocosZ_1.cocosz.gameMgr.curLevelID;
        CocosZ_1.cocosz.gameMgr.curLevelID = CocosZ_1.cocosz.dataMgr.CurLevelId;
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        CocosZ_1.cocosz.sceneMgr.loadScene("Game", function () {
            CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UiGame);
            CocosZ_1.cocosz.gameMgr.initGame();
        });
    };
    UiBeforeSucceed.prototype.onTips = function (msg) {
        Msg_1.default.Show(msg);
    };
    UiBeforeSucceed.prototype.onBtnDouble = function () {
        var _this = this;
        if (this.isture)
            return;
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            CocosZ_1.cocosz.dataMgr.CoinCount += 200;
            this.coin.string = CocosZ_1.cocosz.dataMgr.CoinCount.toString();
            this.isture = true;
            CocosZ_1.cocosz.audioMgr.playbtnEffect();
            Msg_1.default.Show('获取双倍奖励成功');
            CocosZ_1.cocosz.scheduleOnce(function () {
                CocosZ_1.cocosz.dataMgr.CurLevelId++;
                CocosZ_1.cocosz.sceneMgr.loadScene("Game", function () {
                    CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UiGame);
                    CocosZ_1.cocosz.gameMgr.initGame();
                });
            }, 1);
            return;
        }
        else if (cc.sys.platform === cc.sys.OPPO_GAME || cc.sys.platform === cc.sys.VIVO_GAME) {
            lieyou_SdkManager.showRewardedVideoAd(function (res) {
                CocosZ_1.cocosz.audioMgr.resumAllMusic();
                if (res) {
                    _this.isture = true;
                    CocosZ_1.cocosz.dataMgr.CoinCount += 200;
                    _this.coin.string = CocosZ_1.cocosz.dataMgr.CoinCount.toString();
                    CocosZ_1.cocosz.audioMgr.playbtnEffect();
                    _this.onTips('获取双倍奖励成功');
                    CocosZ_1.cocosz.scheduleOnce(function () {
                        CocosZ_1.cocosz.dataMgr.CurLevelId++;
                        CocosZ_1.cocosz.sceneMgr.loadScene("Game", function () {
                            CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UiGame);
                            CocosZ_1.cocosz.gameMgr.initGame();
                        });
                    }, 1);
                }
                else {
                    _this.onTips('视频播放完成才能获取奖励');
                }
            });
        }
        return;
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        CocosZ_1.cocosz.audioMgr.stopAll();
        lieyou_SdkManager.showRewardedVideoAd(function (res) {
            CocosZ_1.cocosz.audioMgr.resumAllMusic();
            if (res) {
                CocosZ_1.cocosz.dataMgr.CoinCount += 200;
                // this.coin.string = cocosz.dataMgr.CoinCount.toString();
                CocosZ_1.cocosz.audioMgr.playbtnEffect();
                Msg_1.default.Show('获取视频奖励成功');
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
    UiBeforeSucceed.prototype.onBtnContinue = function () {
        if (this.isture)
            return;
        CocosZ_1.cocosz.dataMgr.CurLevelId++;
        CocosZ_1.cocosz.sceneMgr.loadScene("Game", function () {
            CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UiGame);
            CocosZ_1.cocosz.gameMgr.initGame();
        });
    };
    UiBeforeSucceed.prototype.onOpen = function () {
        var _this = this;
        CocosZ_1.cocosz.unscheduleAllCallbacks();
        CocosZ_1.cocosz.audioMgr.playVectoryEffect();
        CocosZ_1.cocosz.gameMgr.playGameNum++;
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
            .call(function () {
            // cc.tween(this._page.getChildByName("man"))
            //     .to(0.3, { position: cc.v2(-220, -220) })
            //     .call(() => {
            var dragon = _this.scaleNode.getChildByName("man").getChildByName("man").getComponent(dragonBones.ArmatureDisplay);
            dragon.playAnimation("win", 0);
            var a = cc.tween().sequence(cc.tween().delay(1), cc.tween().call(function () {
                CocosZ_1.cocosz.audioMgr.playGunEffect();
            }), cc.tween().delay(0.4), cc.tween().call(function () {
                CocosZ_1.cocosz.audioMgr.playGunEffect();
            }), cc.tween().delay(0.9));
            cc.tween(_this._page)
                .repeatForever(a)
                .start();
            // })
            // .start()
            CocosZ_1.cocosz.scheduleOnce(function () {
                _this.btnNext.active = true;
                _this.btnNext.opacity = 0;
                cc.tween(_this.btnNext)
                    .to(0.3, { opacity: 255 })
                    .start();
            }, 0.4);
            var b = cc.tween().sequence(cc.tween().to(3, { angle: -7 }), cc.tween().to(3, { angle: 7 }));
            cc.tween(_this.fraction)
                .repeatForever(b)
                .start();
        })
            .start();
        // if (uiGame.fraction) {
        cc.log(CocosZ_1.cocosz.dataMgr.CurLevelId, "cocosz.dataMgr.CurLevelId");
        var fraction = CocosZ_1.cocosz.dataMgr.getStarInfo(CocosZ_1.cocosz.dataMgr.CurLevelId);
        this.curFraction.string = CocosZ_1.cocosz.gameMgr.fraction.toString();
        if (CocosZ_1.cocosz.gameMgr.fraction > fraction) {
            CocosZ_1.cocosz.dataMgr.setStarNum(CocosZ_1.cocosz.dataMgr.CurLevelId, CocosZ_1.cocosz.gameMgr.fraction);
            this.maxFraction.string = CocosZ_1.cocosz.gameMgr.fraction.toString();
        }
        else {
            this.maxFraction.string = fraction.toString();
        }
        // }
        this.coin.string = CocosZ_1.cocosz.dataMgr.CoinCount.toString();
    };
    UiBeforeSucceed = __decorate([
        ccclass
    ], UiBeforeSucceed);
    return UiBeforeSucceed;
}(UIPage_1.default));
exports.default = UiBeforeSucceed;

cc._RF.pop();