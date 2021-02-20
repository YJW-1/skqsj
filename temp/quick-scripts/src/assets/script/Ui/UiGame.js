"use strict";
cc._RF.push(module, '214741BHShEsL6HG/dfRbgq', 'UiGame');
// script/Ui/UiGame.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIPage_1 = require("./UIPage");
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var Msg_1 = require("../Framework/Msg");
// import { BannerLocation } from "../common-plugin/Scripts/YZ_Constant";
// import { utils } from "../common-plugin/Scripts/Utils";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
exports.uiGame = null;
var UiGame = /** @class */ (function (_super) {
    __extends(UiGame, _super);
    function UiGame() {
        var _this = _super.call(this) || this;
        _this.BtnPause = null;
        _this.BtnSkip = null;
        _this.BtnBoom = null;
        _this.boom = null;
        _this.LevelLabel = null;
        _this.Win = null;
        _this.man = null;
        _this.Label = null;
        _this.ProgressBar = null;
        _this.Fraction = 1000;
        _this.node = null;
        _this.handTips = null;
        _this.skinVideoCard = null;
        _this.action = null;
        _this.boomNum = null;
        _this.isFaid = 0;
        exports.uiGame = _this;
        _this._init();
        return _this;
    }
    Object.defineProperty(UiGame.prototype, "fraction", {
        get: function () {
            return CocosZ_1.cocosz.gameMgr.game2Fraction;
        },
        set: function (number) {
            // cc.log("--------fraction-", number)
            CocosZ_1.cocosz.gameMgr.game2Fraction = number;
            this.Label.string = number.toString();
        },
        enumerable: true,
        configurable: true
    });
    UiGame.prototype._init = function () {
        var Game = CocosZ_1.cocosz.resMgr.getRes(Constant_1.PageName.UiGame, cc.Prefab);
        if (Game) {
            var node = cc.instantiate(Game);
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
    };
    UiGame.prototype._onLoad = function () {
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
    };
    UiGame.prototype._Start = function () {
        var _this = this;
        this.BtnPause.on(cc.Node.EventType.TOUCH_END, this._Pause, this);
        this.BtnSkip.on(cc.Node.EventType.TOUCH_END, this._onBtnSkip, this);
        this.BtnBoom.on(cc.Node.EventType.TOUCH_START, function (touch) {
            _this.boom.active = true;
            var pp = touch.getLocation();
            pp.y += 720 * CocosZ_1.cocosz.gameMgr.touchNum;
            // pp = this.BtnBoom.parent.convertToWorldSpaceAR(pp)
            var pos = _this.BtnBoom.parent.convertToNodeSpaceAR(pp);
            // cc.log(pp.x, pp.y)
            _this.boom.setPosition(pos);
        }, this);
        this.BtnBoom.on(cc.Node.EventType.TOUCH_MOVE, function (touch) {
            var pp = touch.getLocation();
            pp.y += 720 * CocosZ_1.cocosz.gameMgr.touchNum;
            // pp = this.BtnBoom.parent.convertToWorldSpaceAR(pp)
            var pos = _this.BtnBoom.parent.convertToNodeSpaceAR(pp);
            // cc.log(pp.x, pp.y)
            _this.boom.setPosition(pos);
        }, this);
        this.BtnBoom.on(cc.Node.EventType.TOUCH_END, function () {
            _this.boom.active = false;
        }, this);
        this.BtnBoom.on(cc.Node.EventType.TOUCH_CANCEL, function () {
            if (_this.BtnBoom.getChildByName("game_btn_noboom").active == true)
                return;
            var Prefab = CocosZ_1.cocosz.resMgr.getRes("boom", cc.Prefab);
            var node = cc.instantiate(Prefab);
            node.setPosition(_this.boom.getPosition());
            _this.boom.parent.addChild(node);
            cc.log(node);
            _this.boom.active = false;
            CocosZ_1.cocosz.dataMgr.BoomNum--;
            cc.game.emit(Constant_1.default.E_UPDATE_COIN);
            if (_this.action) {
                _this.action.stop();
                _this.handTips.active = false;
            }
        }, this);
        this.BtnBoom.getChildByName("game_btn_noboom").on(cc.Node.EventType.TOUCH_START, function () {
            CocosZ_1.cocosz.audioMgr.playbtnEffect();
            if (CocosZ_1.cocosz.dataMgr.CurLevelId == 4 && CocosZ_1.cocosz.dataMgr.BoomNum <= 0) {
                CocosZ_1.cocosz.dataMgr.BoomNum++;
                cc.game.emit(Constant_1.default.E_UPDATE_COIN);
                _this.onTips('恭喜获得炸弹*1');
                return;
            }
            if (cc.sys.platform == cc.sys.WECHAT_GAME) {
                CocosZ_1.cocosz.dataMgr.BoomNum++;
                cc.game.emit(Constant_1.default.E_UPDATE_COIN);
                _this.onTips('恭喜获得炸弹*1');
                return;
            }
            lieyou_SdkManager.showRewardedVideoAd(function (res) {
                CocosZ_1.cocosz.audioMgr.resumAllMusic();
                if (res) {
                    CocosZ_1.cocosz.dataMgr.BoomNum++;
                    cc.game.emit(Constant_1.default.E_UPDATE_COIN);
                    _this.onTips('恭喜获得炸弹*1');
                }
                else {
                    _this.onTips('视频播放完成才能获取奖励');
                }
            });
            cc.game.emit(Constant_1.default.E_UPDATE_COIN);
        }, this);
        this.BtnSkip.active = false;
        var num = 5;
        if (CocosZ_1.cocosz.gameMgr.isLevelOpen) {
            num = 1;
        }
        CocosZ_1.cocosz.scheduleOnce(function () {
            if (CocosZ_1.cocosz.sceneMgr.sceneName == "Game2")
                return;
            _this.BtnSkip.active = true;
        }, num);
        cc.game.on(Constant_1.default.E_UPDATE_COIN, function () {
            _this.skinVideoCard.string = CocosZ_1.cocosz.dataMgr.SkinVedioNum + "";
            _this.boomNum.string = CocosZ_1.cocosz.dataMgr.BoomNum + "";
            if (CocosZ_1.cocosz.dataMgr.BoomNum <= 0) {
                _this.BtnBoom.getChildByName("game_btn_noboom").active = true;
                _this.BtnBoom.getComponent(cc.Sprite).enabled = false;
                _this.boomNum.node.active = false;
            }
            else {
                _this.BtnBoom.getChildByName("game_btn_noboom").active = false;
                _this.BtnBoom.getComponent(cc.Sprite).enabled = true;
                _this.boomNum.node.active = true;
            }
        }, this);
        lieyou_SdkManager.showBannerByBottom();
        CocosZ_1.cocosz.scheduleOnce(function () {
            lieyou_SdkManager.hideBanner();
        }, 2);
        cc.log("---------start");
    };
    UiGame.prototype.onTips = function (msg) {
        Msg_1.default.Show(msg);
    };
    UiGame.prototype._onBtnSkip = function () {
        var _this = this;
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        if (CocosZ_1.cocosz.dataMgr.SkinVedioNum) {
            CocosZ_1.cocosz.dataMgr.SkinVedioNum--;
            this.skinVideoCard.string = CocosZ_1.cocosz.dataMgr.SkinVedioNum + "";
            Msg_1.default.Show("您拥有关卡跳过卡，本次消耗该道具直接获得奖励");
            this.BtnSkip.active = false;
            CocosZ_1.cocosz.scheduleOnce(function () {
                CocosZ_1.cocosz.dataMgr.CurLevelId = CocosZ_1.cocosz.gameMgr.curLevelID;
                window.onGameEvent(2, "跳过关卡", (CocosZ_1.cocosz.dataMgr.CurLevelId + 1));
                CocosZ_1.cocosz.dataMgr.LevelUnLock(CocosZ_1.cocosz.dataMgr.CurLevelId);
                CocosZ_1.cocosz.dataMgr.CurLevelId++;
                CocosZ_1.cocosz.sceneMgr.loadScene("Game", function () {
                    CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UiGame);
                    CocosZ_1.cocosz.gameMgr.initGame();
                });
            }, 1);
        }
        else if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            this.BtnSkip.active = false;
            CocosZ_1.cocosz.scheduleOnce(function () {
                CocosZ_1.cocosz.dataMgr.CurLevelId = CocosZ_1.cocosz.gameMgr.curLevelID;
                window.onGameEvent(2, "跳过关卡", (CocosZ_1.cocosz.dataMgr.CurLevelId + 1));
                CocosZ_1.cocosz.dataMgr.LevelUnLock(CocosZ_1.cocosz.dataMgr.CurLevelId);
                CocosZ_1.cocosz.dataMgr.CurLevelId++;
                CocosZ_1.cocosz.sceneMgr.loadScene("Game", function () {
                    CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UiGame);
                    CocosZ_1.cocosz.gameMgr.initGame();
                });
            }, 1);
        }
        else if ((cc.sys.platform === cc.sys.VIVO_GAME || cc.sys.platform === cc.sys.OPPO_GAME)) {
            lieyou_SdkManager.showRewardedVideoAd(function (res) {
                CocosZ_1.cocosz.audioMgr.resumAllMusic();
                if (res) {
                    _this.BtnSkip.active = false;
                    CocosZ_1.cocosz.scheduleOnce(function () {
                        CocosZ_1.cocosz.dataMgr.CurLevelId = CocosZ_1.cocosz.gameMgr.curLevelID;
                        window.onGameEvent(2, "跳过关卡", (CocosZ_1.cocosz.dataMgr.CurLevelId + 1));
                        CocosZ_1.cocosz.dataMgr.LevelUnLock(CocosZ_1.cocosz.dataMgr.CurLevelId);
                        CocosZ_1.cocosz.dataMgr.CurLevelId++;
                        CocosZ_1.cocosz.sceneMgr.loadScene("Game", function () {
                            CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UiGame);
                            CocosZ_1.cocosz.gameMgr.initGame();
                        });
                    }, 1);
                    _this.onTips("跳过关卡成功");
                }
                else {
                    _this.onTips('视频播放完成才能获取奖励');
                }
            });
        }
        if (CocosZ_1.cocosz.dataMgr.SkinVedioNum <= 0) {
            this.BtnSkip.getChildByName("video").active = true;
            this.BtnSkip.getChildByName("stipCard").active = false;
        }
        else {
            this.BtnSkip.getChildByName("video").active = false;
            this.BtnSkip.getChildByName("stipCard").active = true;
            this.BtnSkip.getChildByName("stipCard").getChildByName("number").getComponent(cc.Label).string = CocosZ_1.cocosz.dataMgr.SkinVedioNum + "";
        }
        return;
        // }
        return;
        CocosZ_1.cocosz.audioMgr.stopAll();
        lieyou_SdkManager.showRewardedVideoAd(function (res) {
            CocosZ_1.cocosz.audioMgr.resumAllMusic();
            if (res) {
                Msg_1.default.Show('获取视频奖励成功');
                window.onGameEvent(2, "跳过关卡", (CocosZ_1.cocosz.dataMgr.CurLevelId + 1));
                // this.BtnSkip.off(cc.Node.EventType.TOUCH_END);
                CocosZ_1.cocosz.dataMgr.LevelUnLock(CocosZ_1.cocosz.dataMgr.CurLevelId);
                CocosZ_1.cocosz.audioMgr.playbtnEffect();
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
    UiGame.prototype._OnBoom = function () {
    };
    UiGame.prototype.onStartGame = function () {
        var _this = this;
        CocosZ_1.cocosz.schedule(function () {
            _this.LevelLabel.string = CocosZ_1.cocosz.gameMgr.curGame2LevelID + "";
            _this.fraction++;
        }, 0.2);
    };
    UiGame.prototype._Pause = function () {
        cc.log("----------暂停");
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        CocosZ_1.cocosz.uiMgr.openPanel(Constant_1.PanelName.PausePanel);
    };
    UiGame.prototype.onOpen = function () {
        var _this = this;
        cc.log("--------cocosz.gameMgr.game2Fraction----open", CocosZ_1.cocosz.gameMgr.game2Fraction);
        this.fraction = CocosZ_1.cocosz.gameMgr.game2Fraction;
        this.LevelLabel.string = CocosZ_1.cocosz.gameMgr.curGame2LevelID + "";
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
        this.LevelLabel.string = (CocosZ_1.cocosz.dataMgr.CurLevelId + 1).toString();
        CocosZ_1.cocosz.gameMgr.curLevelID = CocosZ_1.cocosz.dataMgr.CurLevelId;
        // cocosz.scheduleOnce(() => {
        //     lieyou_SdkManager.hideBanner();
        // }, 1)
        if (CocosZ_1.cocosz.sceneMgr.sceneName == "Game") {
            this.fraction = 1000;
            CocosZ_1.cocosz.schedule(function () {
                if (_this.fraction <= 0) {
                    cc.game.emit(Constant_1.default.E_GAME_FAID);
                    CocosZ_1.cocosz.unscheduleAllCallbacks();
                    return;
                }
                ;
                _this.fraction--;
            }, 0.2);
        }
        else {
            this.BtnBoom.active = false;
            this.LevelLabel.string = CocosZ_1.cocosz.gameMgr.curGame2LevelID + "";
            if (!CocosZ_1.cocosz.gameMgr.isGame2Resurrection) {
                this.fraction = 0;
            }
            // cc.game.on(Constant.E_GAME_START, () => {
            //     cocosz.schedule(() => {
            //         this.LevelLabel.string = cocosz.gameMgr.curGame2LevelID + ""
            //         this.fraction++;
            //     }, 0.2)
            // }, this)
        }
        this.skinVideoCard.string = CocosZ_1.cocosz.dataMgr.SkinVedioNum + "";
        this.boomNum.string = CocosZ_1.cocosz.dataMgr.BoomNum + "";
        if (CocosZ_1.cocosz.dataMgr.BoomNum <= 0) {
            this.BtnBoom.getChildByName("game_btn_noboom").active = true;
            this.BtnBoom.getComponent(cc.Sprite).enabled = false;
            this.boomNum.node.active = false;
        }
        else {
            this.BtnBoom.getChildByName("game_btn_noboom").active = false;
            this.BtnBoom.getComponent(cc.Sprite).enabled = true;
            this.boomNum.node.active = true;
        }
        if (CocosZ_1.cocosz.dataMgr.SkinVedioNum <= 0) {
            this.BtnSkip.getChildByName("video").active = true;
            this.BtnSkip.getChildByName("stipCard").active = false;
        }
        else {
            this.BtnSkip.getChildByName("video").active = false;
            this.BtnSkip.getChildByName("stipCard").active = true;
            this.BtnSkip.getChildByName("stipCard").getChildByName("number").getComponent(cc.Label).string = CocosZ_1.cocosz.dataMgr.SkinVedioNum + "";
        }
    };
    UiGame.prototype.onClose = function () {
        cc.director.getScheduler().unscheduleAllForTarget(this);
        CocosZ_1.cocosz.unscheduleAllCallbacks();
        cc.game.targetOff(this);
    };
    UiGame.prototype.onDestroy = function () {
        cc.director.getScheduler().unscheduleAllForTarget(this);
        CocosZ_1.cocosz.unscheduleAllCallbacks();
        cc.game.targetOff(this);
    };
    UiGame = __decorate([
        ccclass
    ], UiGame);
    return UiGame;
}(UIPage_1.default));
exports.default = UiGame;

cc._RF.pop();