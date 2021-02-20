
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Ui/UiBeforeSucceed.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxVaVxcVWlCZWZvcmVTdWNjZWVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxtQ0FBOEI7QUFDOUIsa0RBQXNFO0FBQ3RFLDhDQUE2QztBQUM3Qyx3Q0FBbUM7QUFHN0IsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUE2QyxtQ0FBTTtJQW1CL0M7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUFwQkQsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBQzdCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBQzdCLFVBQUksR0FBYSxJQUFJLENBQUM7UUFDdEIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUN2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsWUFBTSxHQUFZLEtBQUssQ0FBQztRQUlwQixLQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7O0lBQ2pCLENBQUM7SUFFTywrQkFBSyxHQUFiO1FBQ0ksSUFBSSxJQUFJLEdBQWMsZUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsb0JBQVMsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pGLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxJQUFJLEdBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxJQUFJLElBQUksRUFBRTtnQkFDTixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDbEIsRUFBRSxDQUFDLElBQUks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QUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUFFO1lBQ3BDLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLGVBQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDN0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDaEU7YUFDSTtZQUNELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNqRDtRQUNELElBQUk7UUFJSixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxlQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUUzRCxDQUFDO0lBL1pnQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBa2FuQztJQUFELHNCQUFDO0NBbGFELEFBa2FDLENBbGE0QyxnQkFBTSxHQWthbEQ7a0JBbGFvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJTWdyIGZyb20gXCIuLi9GcmFtZXdvcmsvVUlNZ3JcIjtcclxuaW1wb3J0IFVJUGFnZSBmcm9tIFwiLi9VSVBhZ2VcIjtcclxuaW1wb3J0IENvbnN0YW50LCB7IFBhZ2VOYW1lLCBQYW5lbE5hbWUgfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvbnN0YW50XCI7XHJcbmltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29jb3NaXCI7XHJcbmltcG9ydCBNc2cgZnJvbSBcIi4uL0ZyYW1ld29yay9Nc2dcIjtcclxuXHJcbmltcG9ydCB7IHVpR2FtZSB9IGZyb20gXCIuLi9VaS9VaUdhbWVcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVpQmVmb3JlU3VjY2VlZCBleHRlbmRzIFVJUGFnZSB7XHJcblxyXG4gICAgc2NhbGVOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGJ0bk5leHQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgYnRuTGV2ZWxOZXh0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGJ0bkRvdWJsZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBidG5BZ2FpbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBmcmFjdGlvbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgY3VyRnJhY3Rpb246IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIG1heEZyYWN0aW9uOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBjb2luOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICByQ29pbjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgY29pblNwOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGdvbGQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBpc3R1cmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pbml0KCkge1xyXG4gICAgICAgIGxldCBHYW1lOiBjYy5QcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhQYW5lbE5hbWUuVWlCZWZvcmVTdWNjZWVkLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgIGlmIChHYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUoR2FtZSk7XHJcbiAgICAgICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWdlID0gbm9kZTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvdWlcIikuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb25Mb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9vbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5zY2FsZU5vZGUgPSB0aGlzLl9wYWdlLmdldENoaWxkQnlOYW1lKFwiU2NhbGVOb2RlXCIpO1xyXG4gICAgICAgIC8vIHRoaXMuaXNXZUNoYXQgPSB0aGlzLnNjYWxlTm9kZS5nZXRDaGlsZEJ5TmFtZShcImlzV2VDaGF0XCIpO1xyXG4gICAgICAgIC8vIHRoaXMuaXNOb3RXZUNoYXQgPSB0aGlzLnNjYWxlTm9kZS5nZXRDaGlsZEJ5TmFtZShcImlzTm90V2VDaGF0XCIpO1xyXG5cclxuICAgICAgICB0aGlzLmJ0bkRvdWJsZSA9IHRoaXMuc2NhbGVOb2RlLmdldENoaWxkQnlOYW1lKFwiQnRuRG91YmxlXCIpO1xyXG4gICAgICAgIC8vIHRoaXMuYnRuQ29udGludWUgPSB0aGlzLmlzTm90V2VDaGF0LmdldENoaWxkQnlOYW1lKFwiQnRuQ29udGludWVcIik7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuTmV4dCA9IHRoaXMuc2NhbGVOb2RlLmdldENoaWxkQnlOYW1lKFwiQnRuTmV4dFwiKTtcclxuICAgICAgICB0aGlzLmJ0bkxldmVsTmV4dCA9IHRoaXMuc2NhbGVOb2RlLmdldENoaWxkQnlOYW1lKFwiQnRuTGV2ZWxOZXh0XCIpO1xyXG4gICAgICAgIHRoaXMuZnJhY3Rpb24gPSB0aGlzLnNjYWxlTm9kZS5nZXRDaGlsZEJ5TmFtZShcImZyYWN0aW9uXCIpO1xyXG4gICAgICAgIC8vIHRoaXMuYnRuQmFjayA9IHRoaXMuaXNXZUNoYXQuZ2V0Q2hpbGRCeU5hbWUoXCJCdG5CYWNrXCIpO1xyXG4gICAgICAgIHRoaXMuYnRuQWdhaW4gPSB0aGlzLnNjYWxlTm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJ0bkFnYWluXCIpO1xyXG5cclxuICAgICAgICB0aGlzLmN1ckZyYWN0aW9uID0gdGhpcy5zY2FsZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmcmFjdGlvblwiKS5nZXRDaGlsZEJ5TmFtZShcImN1ckZyYWN0aW9uXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5tYXhGcmFjdGlvbiA9IHRoaXMuc2NhbGVOb2RlLmdldENoaWxkQnlOYW1lKFwiZnJhY3Rpb25cIikuZ2V0Q2hpbGRCeU5hbWUoXCJtYXhGcmFjdGlvblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuY29pbiA9IHRoaXMuc2NhbGVOb2RlLmdldENoaWxkQnlOYW1lKFwiQ29pblwiKS5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuZ29sZCA9IHRoaXMuc2NhbGVOb2RlLmdldENoaWxkQnlOYW1lKFwiQ29pblwiKS5nZXRDaGlsZEJ5TmFtZShcImdvbGQyXCIpO1xyXG4gICAgICAgIHRoaXMuckNvaW4gPSB0aGlzLnNjYWxlTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJDb2luXCIpLmdldENoaWxkQnlOYW1lKFwibnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5jb2luU3AgPSB0aGlzLnNjYWxlTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJDb2luXCIpLmdldENoaWxkQnlOYW1lKFwiY29pblNwXCIpO1xyXG4gICAgICAgIC8vIHRoaXMuY29pbiA9IHRoaXMuc2NhbGVOb2RlLmdldENoaWxkQnlOYW1lKFwiQ29pblwiKS5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cclxuICAgICAgICB0aGlzLl9TdGFydCgpO1xyXG5cclxuICAgICAgICAvLyBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5pc1dlQ2hhdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmlzTm90V2VDaGF0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIF9TdGFydCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5fcGFnZS56SW5kZXggKz0gOTk5OTk7XHJcbiAgICAgICAgdGhpcy5idG5Eb3VibGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbkJ0bkRvdWJsZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYnRuTGV2ZWxOZXh0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uQnRuQ29udGludWUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJ0bk5leHQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25CdG5OZXh0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gdGhpcy5idG5CYWNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMub25CdG5CYWNrKCk7XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgdGhpcy5idG5BZ2Fpbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uQnRuQWdhaW4oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB3aW5kb3cub25HYW1lU3VjY2VzcygxLCAoY29jb3N6LmdhbWVNZ3IuY3VyTGV2ZWxJRCArIDEpKTtcclxuXHJcbiAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9IGNvY29zei5nYW1lTWdyLmN1ckxldmVsSUQ7XHJcblxyXG4gICAgICAgIGNvY29zei5kYXRhTWdyLkxldmVsVW5Mb2NrKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQpO1xyXG5cclxuICAgICAgICBjYy5nYW1lLm9uKENvbnN0YW50LkVfQURDbE9TRSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93QmFubmVyKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1zaG93QmFubmVyU3VjY2VlZFwiKVxyXG4gICAgICAgIH0sIHRoaXMpXHJcblxyXG4gICAgICAgIGNvY29zei5nYW1lTWdyLkxldmVsTnVtKys7XHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3IuTGV2ZWxOdW0yKys7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjYy5nYW1lLnRhcmdldE9mZih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQnRuTmV4dCgpIHtcclxuICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheWJ0bkVmZmVjdCgpO1xyXG5cclxuICAgICAgICAvLyBjb2Nvc3ouZGF0YU1nci5Db2luQ291bnQgKz0gMTAwO1xyXG4gICAgICAgIC8vIHRoaXMuY29pbi5zdHJpbmcgPSBjb2Nvc3ouZGF0YU1nci5Db2luQ291bnQudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgY29jb3N6LnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuckNvaW4uc3RyaW5nID09IFwiMFwiKSB7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3oudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5yQ29pbi5ub2RlLnBhcmVudClcclxuICAgICAgICAgICAgICAgICAgICAuZGVsYXkoMC4yKVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjMsIHsgb3BhY2l0eTogMCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuYnRuTGV2ZWxOZXh0KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5MZXZlbE5leHQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjMsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5idG5BZ2FpbilcclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuQWdhaW4uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC50bygwLjMsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY29pblNwKTtcclxuICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuc2NhbGVOb2RlLmdldENoaWxkQnlOYW1lKFwiQ29pblwiKS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgbGV0IHBwID0gdGhpcy5zY2FsZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDb2luXCIpLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvcylcclxuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwcCk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhwb3MsIHBwKVxyXG4gICAgICAgICAgICB0aGlzLnNjYWxlTm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNvaW5cIikuYWRkQ2hpbGQobm9kZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBsZXQgcG9zID0gdGhpcy5nb2xkLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5jb2luU3AuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkNvaW5Db3VudCArPSA1O1xyXG4gICAgICAgICAgICB0aGlzLmNvaW4uc3RyaW5nID0gY29jb3N6LmRhdGFNZ3IuQ29pbkNvdW50LnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgbnVtID0gK3RoaXMuckNvaW4uc3RyaW5nO1xyXG4gICAgICAgICAgICBudW0gLT0gNTtcclxuICAgICAgICAgICAgdGhpcy5yQ29pbi5zdHJpbmcgPSBudW0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgICAgICAgICAgIC50bygwLjIsIHsgc2NhbGU6IDAuNSwgcG9zaXRpb246IGNjLnYyKDIzNywgNDk0KSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgfSwgMC4wNSlcclxuXHJcbiAgICAgICAgdGhpcy5idG5OZXh0Lm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQpXHJcbiAgICAgICAgdGhpcy5idG5Eb3VibGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJUKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuYnRuTmV4dClcclxuICAgICAgICAgICAgLnRvKDAuNCwgeyBvcGFjaXR5OiAwIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuT1BQT19HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zY2FsZU5vZGUueCA9IDExMFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NhbGVOb2RlLmdldENoaWxkQnlOYW1lKFwibmF0aXZlUG9zXCIpLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93W1wibGlleW91X1Nka01hbmFnZXJcIl0uc2hvd01vcmVHYW1lTWlkZGxlX3RocmVlKHsgXCJub2RlXCI6IHRoaXMuc2NhbGVOb2RlLmdldENoaWxkQnlOYW1lKFwibmF0aXZlUG9zXCIpLCBcImJnUGF0aFwiOiBcInRleHR1cmUvc3NcIiwgXCJzY2FsZVwiOiAwLjc1IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5OZXh0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuYnRuRG91YmxlKVxyXG4gICAgICAgICAgICAudG8oMC40LCB7IG9wYWNpdHk6IDAgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5Eb3VibGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcblxyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPj0gMTE5KSB7XHJcbiAgICAgICAgICAgIE1zZy5TaG93KFwi5pWs6K+35pyf5b6F5pu05aSa5YWz5Y2hISEhXCIpO1xyXG4gICAgICAgICAgICBjb2Nvc3ouc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPSAxMTk7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouc2NlbmVNZ3IubG9hZFNjZW5lKFwiR2FtZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYWdlKFBhZ2VOYW1lLlVpR2FtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3IuaW5pdEdhbWUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LCAxLjUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQrKztcclxuICAgICAgICBjb2Nvc3ouc2NlbmVNZ3IubG9hZFNjZW5lKFwiR2FtZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvY29zei51aU1nci5vcGVuUGFnZShQYWdlTmFtZS5VaUdhbWUpO1xyXG4gICAgICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pbml0R2FtZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvbkJ0bkJhY2soKSB7XHJcbiAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlidG5FZmZlY3QoKTtcclxuICAgICAgICBjb2Nvc3ouc2NlbmVNZ3IubG9hZFNjZW5lKFwiSG9tZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvY29zei51aU1nci5vcGVuUGFnZShQYWdlTmFtZS5VaUhvbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvbkJ0bkFnYWluKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzdHVyZSkgcmV0dXJuXHJcblxyXG4gICAgICAgIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPSBjb2Nvc3ouZ2FtZU1nci5jdXJMZXZlbElEXHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3IuY3VyTGV2ZWxJRCA9IGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWRcclxuICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheWJ0bkVmZmVjdCgpO1xyXG4gICAgICAgIGNvY29zei5zY2VuZU1nci5sb2FkU2NlbmUoXCJHYW1lXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYWdlKFBhZ2VOYW1lLlVpR2FtZSk7XHJcbiAgICAgICAgICAgIGNvY29zei5nYW1lTWdyLmluaXRHYW1lKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25UaXBzKG1zZykge1xyXG4gICAgICAgIE1zZy5TaG93KG1zZyk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG9uQnRuRG91YmxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzdHVyZSkgcmV0dXJuXHJcblxyXG5cclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ29pbkNvdW50ICs9IDIwMDtcclxuICAgICAgICAgICAgdGhpcy5jb2luLnN0cmluZyA9IGNvY29zei5kYXRhTWdyLkNvaW5Db3VudC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmlzdHVyZSA9IHRydWVcclxuICAgICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlidG5FZmZlY3QoKTtcclxuICAgICAgICAgICAgTXNnLlNob3coJ+iOt+WPluWPjOWAjeWlluWKseaIkOWKnycpO1xyXG4gICAgICAgICAgICBjb2Nvc3ouc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQrKztcclxuICAgICAgICAgICAgICAgIGNvY29zei5zY2VuZU1nci5sb2FkU2NlbmUoXCJHYW1lXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhZ2UoUGFnZU5hbWUuVWlHYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pbml0R2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuT1BQT19HQU1FIHx8IGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLlZJVk9fR0FNRSkge1xyXG5cclxuICAgICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuc2hvd1Jld2FyZGVkVmlkZW9BZCgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucmVzdW1BbGxNdXNpYygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXN0dXJlID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkNvaW5Db3VudCArPSAyMDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29pbi5zdHJpbmcgPSBjb2Nvc3ouZGF0YU1nci5Db2luQ291bnQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheWJ0bkVmZmVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25UaXBzKCfojrflj5blj4zlgI3lpZblirHmiJDlip8nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouc2NlbmVNZ3IubG9hZFNjZW5lKFwiR2FtZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhZ2UoUGFnZU5hbWUuVWlHYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvY29zei5nYW1lTWdyLmluaXRHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25UaXBzKCfop4bpopHmkq3mlL7lrozmiJDmiY3og73ojrflj5blpZblirEnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheWJ0bkVmZmVjdCgpO1xyXG4gICAgICAgIGNvY29zei5hdWRpb01nci5zdG9wQWxsKCk7XHJcbiAgICAgICAgbGlleW91X1Nka01hbmFnZXIuc2hvd1Jld2FyZGVkVmlkZW9BZChmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5yZXN1bUFsbE11c2ljKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5Db2luQ291bnQgKz0gMjAwO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5jb2luLnN0cmluZyA9IGNvY29zei5kYXRhTWdyLkNvaW5Db3VudC50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5YnRuRWZmZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBNc2cuU2hvdygn6I635Y+W6KeG6aKR5aWW5Yqx5oiQ5YqfJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA+PSAxMTkpIHtcclxuICAgICAgICAgICAgICAgICAgICBNc2cuU2hvdyhcIuaVrOivt+acn+W+heabtOWkmuWFs+WNoSEhIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9IDExOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LnNjZW5lTWdyLmxvYWRTY2VuZShcIkdhbWVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYWdlKFBhZ2VOYW1lLlVpR2FtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pbml0R2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQrKztcclxuICAgICAgICAgICAgICAgIGNvY29zei5zY2VuZU1nci5sb2FkU2NlbmUoXCJHYW1lXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhZ2UoUGFnZU5hbWUuVWlHYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pbml0R2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gTXNnLlNob3coXCItLS0tLS0tLS3ot7Pov4flhbPljaEtLS0tLS0tLS0tLS0tLS0tLS0tLVwiKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgTXNnLlNob3coJ+inhumikeaSreaUvuWujOaIkOaJjeiDveiOt+WPluWlluWKsScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG9uQnRuQ29udGludWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXN0dXJlKSByZXR1cm5cclxuICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkKys7XHJcbiAgICAgICAgY29jb3N6LnNjZW5lTWdyLmxvYWRTY2VuZShcIkdhbWVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhZ2UoUGFnZU5hbWUuVWlHYW1lKTtcclxuICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3IuaW5pdEdhbWUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbk9wZW4oKSB7XHJcbiAgICAgICAgY29jb3N6LnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheVZlY3RvcnlFZmZlY3QoKTtcclxuXHJcblxyXG4gICAgICAgIGNvY29zei5nYW1lTWdyLnBsYXlHYW1lTnVtKys7XHJcblxyXG5cclxuICAgICAgICAvLyBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5zY2FsZU5vZGUueCA9IDExMFxyXG4gICAgICAgIC8vICAgICB3aW5kb3dbXCJsaWV5b3VfU2RrTWFuYWdlclwiXS5zaG93TW9yZUdhbWVNaWRkbGVfdGhyZWUoeyBcIm5vZGVcIjogdGhpcy5zY2FsZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJuYXRpdmVQb3NcIiksIFwiYmdQYXRoXCI6IFwidGV4dHVyZS9zc1wiLCBcInNjYWxlXCI6IDAuOCB9KTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSBpZiAoKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLlZJVk9fR0FNRSkpIHtcclxuICAgICAgICAvLyAgICAgbGlleW91X1Nka01hbmFnZXIuc2hvd1Nwb3RCeVBhdXNlKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2UgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLk9QUE9fR0FNRSkge1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLnNjYWxlTm9kZS54ID0gMTEwO1xyXG4gICAgICAgIC8vICAgICBsZXQgc3AgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcInNzXCIsIGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgICAgIC8vICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93TmF0aXZlQWRfYmlnKHtcclxuICAgICAgICAvLyAgICAgICAgIG5vZGU6IHRoaXMuc2NhbGVOb2RlLmdldENoaWxkQnlOYW1lKFwibmF0aXZlUG9zXCIpLCBcInRpdGxlQ29sb3JcIjogY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1LCksXHJcbiAgICAgICAgLy8gICAgICAgICBcImRlc2NDb2xvclwiOiBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUsKSwgYmdQYXRoOiAndGV4dHVyZS9zcycsIHRleHR1cmU6IHNwLCBzY2FsZTogMC44LCBpbnNldFRvcDogMTAsIGluc2V0Qm90dG9tOiAxMCwgaW5zZXRMZWZ0OiAxMCwgaW5zZXRSaWdodDogMTBcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuXHJcblxyXG4gICAgICAgIHRoaXMuYnRuTmV4dC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gdGhpcy5fU2tlLmFybWF0dXJlKCkuZ2V0U2xvdChcInJpYmJvblwiKS5kaXNwbGF5SW5kZXggPSAyO1xyXG4gICAgICAgIC8vIHRoaXMuc2NhbGVOb2RlLnNjYWxlID0gMDtcclxuICAgICAgICAvLyBjb2Nvc3ouZ2FtZU1nci50d2VlQnRuKHRoaXMuYnRuRG91YmxlLCAxLjA1LCAxKTtcclxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLnNjYWxlTm9kZSlcclxuICAgICAgICAvLyAgICAgLnRvKDAuMiwgeyBzY2FsZTogMS41IH0pXHJcbiAgICAgICAgLy8gICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyAgICAgLnN0YXJ0KClcclxuXHJcbiAgICAgICAgLy8gbGV0IG51bSA9IGNvY29zei5nYW1lTWdyLmJpZ0NvaW4gPiA1ID8gY29jb3N6LmdhbWVNZ3IuYmlnQ29pbiA6IDVcclxuICAgICAgICAvLyB0aGlzLmNvaW4uc3RyaW5nID0gKG51bSAqIDEwKS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICBjYy50d2Vlbih0aGlzLnNjYWxlTm9kZSlcclxuICAgICAgICAgICAgLnRvKDAuNCwgeyBwb3NpdGlvbjogY2MudjIoMCwgMCkgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5fcGFnZS5nZXRDaGlsZEJ5TmFtZShcIm1hblwiKSlcclxuICAgICAgICAgICAgICAgIC8vICAgICAudG8oMC4zLCB7IHBvc2l0aW9uOiBjYy52MigtMjIwLCAtMjIwKSB9KVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkcmFnb24gPSB0aGlzLnNjYWxlTm9kZS5nZXRDaGlsZEJ5TmFtZShcIm1hblwiKS5nZXRDaGlsZEJ5TmFtZShcIm1hblwiKS5nZXRDb21wb25lbnQoZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5KTtcclxuICAgICAgICAgICAgICAgIGRyYWdvbi5wbGF5QW5pbWF0aW9uKFwid2luXCIsIDApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGEgPSBjYy50d2VlbigpLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuZGVsYXkoMSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlHdW5FZmZlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLmRlbGF5KDAuNCksXHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlHdW5FZmZlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLmRlbGF5KDAuOSksXHJcbiAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4odGhpcy5fcGFnZSlcclxuICAgICAgICAgICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihhKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICAvLyB9KVxyXG4gICAgICAgICAgICAgICAgLy8gLnN0YXJ0KClcclxuICAgICAgICAgICAgICAgIGNvY29zei5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuTmV4dC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuTmV4dC5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmJ0bk5leHQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50bygwLjMsIHsgb3BhY2l0eTogMjU1IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMC40KVxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBiID0gY2MudHdlZW4oKS5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDMsIHsgYW5nbGU6IC03IH0pLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLnRvKDMsIHsgYW5nbGU6IDcgfSlcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZnJhY3Rpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoYilcclxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG5cclxuICAgICAgICAvLyBpZiAodWlHYW1lLmZyYWN0aW9uKSB7XHJcbiAgICAgICAgY2MubG9nKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQsIFwiY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZFwiKVxyXG4gICAgICAgIGxldCBmcmFjdGlvbiA9IGNvY29zei5kYXRhTWdyLmdldFN0YXJJbmZvKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQpO1xyXG4gICAgICAgIHRoaXMuY3VyRnJhY3Rpb24uc3RyaW5nID0gY29jb3N6LmdhbWVNZ3IuZnJhY3Rpb24udG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgaWYgKGNvY29zei5nYW1lTWdyLmZyYWN0aW9uID4gZnJhY3Rpb24pIHtcclxuICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3Iuc2V0U3Rhck51bShjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkLCBjb2Nvc3ouZ2FtZU1nci5mcmFjdGlvbilcclxuICAgICAgICAgICAgdGhpcy5tYXhGcmFjdGlvbi5zdHJpbmcgPSBjb2Nvc3ouZ2FtZU1nci5mcmFjdGlvbi50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5tYXhGcmFjdGlvbi5zdHJpbmcgPSBmcmFjdGlvbi50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5jb2luLnN0cmluZyA9IGNvY29zei5kYXRhTWdyLkNvaW5Db3VudC50b1N0cmluZygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==