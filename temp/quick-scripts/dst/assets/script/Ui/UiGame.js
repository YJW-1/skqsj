
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Ui/UiGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxVaVxcVWlHYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFDOUIsOENBQTZDO0FBQzdDLGtEQUFzRjtBQUN0Rix3Q0FBbUM7QUFDbkMseUVBQXlFO0FBQ3pFLDBEQUEwRDtBQUVwRCxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBQ2pDLFFBQUEsTUFBTSxHQUFXLElBQUksQ0FBQztBQUVqQztJQUFvQywwQkFBTTtJQWlDdEM7UUFBQSxZQUNJLGlCQUFPLFNBR1Y7UUFuQ08sY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUNyQixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUM1QixTQUFHLEdBQVksSUFBSSxDQUFDO1FBQ3BCLFNBQUcsR0FBWSxJQUFJLENBQUM7UUFDcEIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUN4QixpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFDbkMsY0FBUSxHQUFXLElBQUksQ0FBQztRQUN4QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBQ3JCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFdEMsWUFBTSxHQUFRLElBQUksQ0FBQztRQUVaLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFZekIsWUFBTSxHQUFRLENBQUMsQ0FBQztRQUluQixjQUFNLEdBQUcsS0FBSSxDQUFDO1FBQ2QsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDOztJQUNqQixDQUFDO0lBakJELHNCQUFXLDRCQUFRO2FBT25CO1lBQ0ksT0FBTyxlQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUN4QyxDQUFDO2FBVEQsVUFBb0IsTUFBYztZQUM5QixzQ0FBc0M7WUFDdEMsZUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQyxDQUFDOzs7T0FBQTtJQWVPLHNCQUFLLEdBQWI7UUFDSSxJQUFJLElBQUksR0FBYyxlQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxtQkFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkUsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLElBQUksR0FBWSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pDLElBQUksSUFBSSxFQUFFO2dCQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNsQiw4Q0FBOEM7Z0JBQzlDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQyxJQUFJO2dCQUNKLFNBQVM7Z0JBQ1Qsd0NBQXdDO2dCQUN4QyxJQUFJO2dCQUNKLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUM3QixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDbEI7U0FDSjtJQUNMLENBQUM7SUFFTyx3QkFBTyxHQUFmO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMscUNBQXFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFMUYsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU5RSw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBRWxCLENBQUM7SUFLTyx1QkFBTSxHQUFkO1FBQUEsaUJBcUlDO1FBcElHLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRWpFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBR3BFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQUs7WUFDakQsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBRXhCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUU3QixFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxlQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztZQUV0QyxxREFBcUQ7WUFDckQsSUFBTSxHQUFHLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDekQscUJBQXFCO1lBRXJCLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRS9CLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxVQUFDLEtBQUs7WUFFaEQsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzdCLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ3RDLHFEQUFxRDtZQUVyRCxJQUFNLEdBQUcsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN6RCxxQkFBcUI7WUFFckIsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFLL0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQ3pDLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM3QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFHVCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUU7WUFDNUMsSUFBSSxLQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJO2dCQUFFLE9BQU87WUFDMUUsSUFBSSxNQUFNLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyRCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ1osS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBRXpCLGVBQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDekIsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUlyQyxJQUFJLEtBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ2hDO1FBQ0wsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBS1QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFO1lBQzdFLGVBQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7WUFFaEMsSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUFFO2dCQUMvRCxlQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN6QixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNyQyxLQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN4QixPQUFPO2FBQ1Y7WUFDRCxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO2dCQUN2QyxlQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN6QixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNyQyxLQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN4QixPQUFPO2FBQ1Y7WUFDRCxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFDLEdBQUc7Z0JBQ3RDLGVBQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ2hDLElBQUksR0FBRyxFQUFFO29CQUNMLGVBQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ3pCLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ3JDLEtBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQzNCO3FCQUFNO29CQUNILEtBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7aUJBQy9CO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDSCxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQ3hDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQVFULElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUM1QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUE7UUFDWCxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQzVCLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDWDtRQUNELGVBQU0sQ0FBQyxZQUFZLENBQUM7WUFDaEIsSUFBSSxlQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsSUFBSSxPQUFPO2dCQUFFLE9BQU87WUFDakQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQy9CLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQTtRQUdQLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGtCQUFRLENBQUMsYUFBYSxFQUFFO1lBQy9CLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUM3RCxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxlQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDbEQsSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUU7Z0JBQzdCLEtBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDN0QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JELEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDcEM7aUJBQ0k7Z0JBQ0QsS0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUM5RCxLQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQzthQUNuQztRQUNMLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUdULGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFFdkMsZUFBTSxDQUFDLFlBQVksQ0FBQztZQUNoQixpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNuQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFFTCxFQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUdELHVCQUFNLEdBQU4sVUFBTyxHQUFHO1FBQ04sYUFBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQixDQUFDO0lBRU8sMkJBQVUsR0FBbEI7UUFBQSxpQkFvSEM7UUFsSEcsZUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNoQyxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQzdCLGVBQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUE7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1lBQzdELGFBQUcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtZQUVsQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDNUIsZUFBTSxDQUFDLFlBQVksQ0FBQztnQkFDaEIsZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7Z0JBQ3RELE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRS9ELGVBQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3RELGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQzVCLGVBQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtvQkFDOUIsZUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDdkMsZUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDOUIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7U0FDUjthQUNJLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUU7WUFFN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzVCLGVBQU0sQ0FBQyxZQUFZLENBQUM7Z0JBQ2hCLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO2dCQUN0RCxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUUvRCxlQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN0RCxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUM1QixlQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7b0JBQzlCLGVBQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLG1CQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3ZDLGVBQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzlCLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQ1I7YUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUVyRixpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFDLEdBQUc7Z0JBQ3RDLGVBQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ2hDLElBQUksR0FBRyxFQUFFO29CQUVMLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDNUIsZUFBTSxDQUFDLFlBQVksQ0FBQzt3QkFDaEIsZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7d0JBQ3RELE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBRS9ELGVBQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7d0JBQ3RELGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBQzVCLGVBQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTs0QkFDOUIsZUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsbUJBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzs0QkFDdkMsZUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQzt3QkFDOUIsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO29CQUNMLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3pCO3FCQUFNO29CQUNILEtBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7aUJBQy9CO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FFTjtRQUdELElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLElBQUksQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUMxRDthQUNJO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxlQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7U0FDckk7UUFFRCxPQUFPO1FBQ1AsSUFBSTtRQUVKLE9BQU87UUFDUCxlQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzFCLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLFVBQVUsR0FBRztZQUMvQyxlQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2hDLElBQUksR0FBRyxFQUFFO2dCQUNMLGFBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBR3JCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9ELGlEQUFpRDtnQkFDakQsZUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdEQsZUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDaEMsSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxHQUFHLEVBQUU7b0JBQ2xDLGFBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ3hCLGVBQU0sQ0FBQyxZQUFZLENBQUM7d0JBQ2hCLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQzt3QkFDaEMsZUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFOzRCQUM5QixlQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxtQkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzRCQUN2QyxlQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO3dCQUM5QixDQUFDLENBQUMsQ0FBQztvQkFDUCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ1IsT0FBTztpQkFDVjtnQkFFRCxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUM1QixlQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7b0JBQzlCLGVBQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLG1CQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3ZDLGVBQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQzlCLENBQUMsQ0FBQyxDQUFDO2dCQUVILGdEQUFnRDthQUNuRDtpQkFBTTtnQkFDSCxhQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQzVCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFNUCxDQUFDO0lBRU8sd0JBQU8sR0FBZjtJQUVBLENBQUM7SUFHTSw0QkFBVyxHQUFsQjtRQUFBLGlCQU1DO1FBSkcsZUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNaLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQTtZQUM1RCxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ1gsQ0FBQztJQUVPLHVCQUFNLEdBQWQ7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBO1FBQ3RCLGVBQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDaEMsZUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsb0JBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBQ1MsdUJBQU0sR0FBaEI7UUFBQSxpQkF1RkM7UUF0RkcsRUFBRSxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsRUFBRSxlQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUE7UUFDNUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFBO1FBQzVELHdDQUF3QztRQUV4QyxrQ0FBa0M7UUFDbEMsaUNBQWlDO1FBQ2pDLGtDQUFrQztRQUNsQyxpREFBaUQ7UUFDakQsdUNBQXVDO1FBQ3ZDLHNDQUFzQztRQUN0QyxrREFBa0Q7UUFDbEQsK0NBQStDO1FBQy9DLGtCQUFrQjtRQUNsQiwrREFBK0Q7UUFDL0QsMkVBQTJFO1FBQzNFLGtDQUFrQztRQUVsQyxZQUFZO1FBQ1osZ0RBQWdEO1FBQ2hELGdDQUFnQztRQUNoQyx1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLElBQUk7UUFFSixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3BFLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBRXRELDhCQUE4QjtRQUM5QixzQ0FBc0M7UUFDdEMsUUFBUTtRQUVSLElBQUksZUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLElBQUksTUFBTSxFQUFFO1lBRXJDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLGVBQU0sQ0FBQyxRQUFRLENBQUM7Z0JBQ1osSUFBSSxLQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTtvQkFDcEIsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtvQkFDbEMsZUFBTSxDQUFDLHNCQUFzQixFQUFFLENBQUM7b0JBQ2hDLE9BQU87aUJBQ1Y7Z0JBQUEsQ0FBQztnQkFDRixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDcEIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1NBQ1Y7YUFDSTtZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxlQUFNLENBQUMsT0FBTyxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUE7WUFDNUQsSUFBSSxDQUFDLGVBQU0sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLEVBQUU7Z0JBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2FBQ3JCO1lBRUQsNENBQTRDO1lBRTVDLDhCQUE4QjtZQUM5Qix1RUFBdUU7WUFDdkUsMkJBQTJCO1lBQzNCLGNBQWM7WUFDZCxXQUFXO1NBQ2Q7UUFFRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxlQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDN0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xELElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM3RCxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3BDO2FBQ0k7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDOUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNuQztRQUlELElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLElBQUksQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUMxRDthQUNJO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwRCxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxlQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7U0FDckk7SUFHTCxDQUFDO0lBRVMsd0JBQU8sR0FBakI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELGVBQU0sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFUywwQkFBUyxHQUFuQjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsZUFBTSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFDaEMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQXZjZ0IsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQXdjMUI7SUFBRCxhQUFDO0NBeGNELEFBd2NDLENBeGNtQyxnQkFBTSxHQXdjekM7a0JBeGNvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJUGFnZSBmcm9tIFwiLi9VSVBhZ2VcIjtcclxuaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuaW1wb3J0IENvbnN0YW50LCB7IHRhZywgUGFnZU5hbWUsIFBhbmVsTmFtZSwgRGlyZWN0aW9uIH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG5pbXBvcnQgTXNnIGZyb20gXCIuLi9GcmFtZXdvcmsvTXNnXCI7XHJcbi8vIGltcG9ydCB7IEJhbm5lckxvY2F0aW9uIH0gZnJvbSBcIi4uL2NvbW1vbi1wbHVnaW4vU2NyaXB0cy9ZWl9Db25zdGFudFwiO1xyXG4vLyBpbXBvcnQgeyB1dGlscyB9IGZyb20gXCIuLi9jb21tb24tcGx1Z2luL1NjcmlwdHMvVXRpbHNcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcbmV4cG9ydCBsZXQgdWlHYW1lOiBVaUdhbWUgPSBudWxsO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVaUdhbWUgZXh0ZW5kcyBVSVBhZ2Uge1xyXG5cclxuICAgIHByaXZhdGUgQnRuUGF1c2U6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBCdG5Ta2lwOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgQnRuQm9vbTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGJvb206IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBMZXZlbExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBwcml2YXRlIFdpbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIG1hbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICBwdWJsaWMgUHJvZ3Jlc3NCYXI6IGNjLlByb2dyZXNzQmFyID0gbnVsbDtcclxuICAgIHB1YmxpYyBGcmFjdGlvbjogbnVtYmVyID0gMTAwMDtcclxuICAgIHB1YmxpYyBub2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHB1YmxpYyBoYW5kVGlwczogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHNraW5WaWRlb0NhcmQ6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBhY3Rpb246IGFueSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIGJvb21OdW06IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIHB1YmxpYyBzZXQgZnJhY3Rpb24obnVtYmVyOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBjYy5sb2coXCItLS0tLS0tLWZyYWN0aW9uLVwiLCBudW1iZXIpXHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3IuZ2FtZTJGcmFjdGlvbiA9IG51bWJlcjtcclxuICAgICAgICB0aGlzLkxhYmVsLnN0cmluZyA9IG51bWJlci50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGZyYWN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiBjb2Nvc3ouZ2FtZU1nci5nYW1lMkZyYWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc0ZhaWQ6IGFueSA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB1aUdhbWUgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pbml0KCkge1xyXG4gICAgICAgIGxldCBHYW1lOiBjYy5QcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhQYWdlTmFtZS5VaUdhbWUsIGNjLlByZWZhYik7XHJcbiAgICAgICAgaWYgKEdhbWUpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZShHYW1lKTtcclxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhZ2UgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKGNvY29zei5zY2VuZU1nci5zY2VuZU5hbWUgPT0gXCJHYW1lMlwiKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3VpXCIpLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY2MuZmluZChcIkNhbnZhc1wiKS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb25Mb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLmVuYWJsZUZvclRhcmdldCh0aGlzKTtcclxuICAgICAgICB0aGlzLkJ0blBhdXNlID0gY2MuZmluZChcIkNhbnZhcy91aS9VaUdhbWUvQnRuUGF1c2VcIik7XHJcbiAgICAgICAgdGhpcy5CdG5Ta2lwID0gY2MuZmluZChcIkNhbnZhcy91aS9VaUdhbWUvQnRuU2tpcFwiKTtcclxuICAgICAgICB0aGlzLkJ0bkJvb20gPSBjYy5maW5kKFwiQ2FudmFzL3VpL1VpR2FtZS9CdG5Cb29tXCIpO1xyXG4gICAgICAgIHRoaXMuYm9vbSA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlHYW1lL2Jvb21cIik7XHJcbiAgICAgICAgdGhpcy5oYW5kVGlwcyA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlHYW1lL2hhbmRUaXBzXCIpO1xyXG4gICAgICAgIHRoaXMubm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlHYW1lXCIpO1xyXG4gICAgICAgIHRoaXMuTGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL3VpL1VpR2FtZS9Db2luL251bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuTGV2ZWxMYWJlbCA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlHYW1lL0J0blBhdXNlL2xldmVsL251bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuc2tpblZpZGVvQ2FyZCA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlHYW1lL1NraW5WaWRlb0NhcmQvbnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgIHRoaXMuYm9vbU51bSA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlHYW1lL0J0bkJvb20vbnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMubWFuPWNjLmZpbmRcIkNhbnZhcy91aS9VaUdhbWUvQnRuU2tpcFwiKVxyXG4gICAgICAgIHRoaXMuX1N0YXJ0KCk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgX1N0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuQnRuUGF1c2Uub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl9QYXVzZSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuQnRuU2tpcC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX29uQnRuU2tpcCwgdGhpcyk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLkJ0bkJvb20ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICh0b3VjaCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJvb20uYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwcCA9IHRvdWNoLmdldExvY2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICBwcC55ICs9IDcyMCAqIGNvY29zei5nYW1lTWdyLnRvdWNoTnVtO1xyXG5cclxuICAgICAgICAgICAgLy8gcHAgPSB0aGlzLkJ0bkJvb20ucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwcClcclxuICAgICAgICAgICAgY29uc3QgcG9zID0gdGhpcy5CdG5Cb29tLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwcCk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhwcC54LCBwcC55KVxyXG5cclxuICAgICAgICAgICAgdGhpcy5ib29tLnNldFBvc2l0aW9uKHBvcyk7XHJcblxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLkJ0bkJvb20ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKHRvdWNoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBsZXQgcHAgPSB0b3VjaC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgICAgICBwcC55ICs9IDcyMCAqIGNvY29zei5nYW1lTWdyLnRvdWNoTnVtO1xyXG4gICAgICAgICAgICAvLyBwcCA9IHRoaXMuQnRuQm9vbS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHBwKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcG9zID0gdGhpcy5CdG5Cb29tLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwcCk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhwcC54LCBwcC55KVxyXG5cclxuICAgICAgICAgICAgdGhpcy5ib29tLnNldFBvc2l0aW9uKHBvcyk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLkJ0bkJvb20ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYm9vbS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuQnRuQm9vbS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuQnRuQm9vbS5nZXRDaGlsZEJ5TmFtZShcImdhbWVfYnRuX25vYm9vbVwiKS5hY3RpdmUgPT0gdHJ1ZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBsZXQgUHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJib29tXCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUoUHJlZmFiKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbih0aGlzLmJvb20uZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9vbS5wYXJlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhub2RlKVxyXG4gICAgICAgICAgICB0aGlzLmJvb20uYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5Cb29tTnVtLS07XHJcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX1VQREFURV9DT0lOKTtcclxuXHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbi5zdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRUaXBzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHRoaXMuQnRuQm9vbS5nZXRDaGlsZEJ5TmFtZShcImdhbWVfYnRuX25vYm9vbVwiKS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheWJ0bkVmZmVjdCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gNCAmJiBjb2Nvc3ouZGF0YU1nci5Cb29tTnVtIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkJvb21OdW0rKztcclxuICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX1VQREFURV9DT0lOKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25UaXBzKCfmga3llpzojrflvpfngrjlvLkqMScpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLldFQ0hBVF9HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5Cb29tTnVtKys7XHJcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9VUERBVEVfQ09JTik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uVGlwcygn5oGt5Zac6I635b6X54K45by5KjEnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93UmV3YXJkZWRWaWRlb0FkKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5yZXN1bUFsbE11c2ljKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQm9vbU51bSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX1VQREFURV9DT0lOKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uVGlwcygn5oGt5Zac6I635b6X54K45by5KjEnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblRpcHMoJ+inhumikeaSreaUvuWujOaIkOaJjeiDveiOt+WPluWlluWKsScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KENvbnN0YW50LkVfVVBEQVRFX0NPSU4pXHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIHRoaXMuQnRuU2tpcC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgbnVtID0gNVxyXG4gICAgICAgIGlmIChjb2Nvc3ouZ2FtZU1nci5pc0xldmVsT3Blbikge1xyXG4gICAgICAgICAgICBudW0gPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb2Nvc3ouc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvY29zei5zY2VuZU1nci5zY2VuZU5hbWUgPT0gXCJHYW1lMlwiKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuQnRuU2tpcC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0sIG51bSlcclxuXHJcblxyXG4gICAgICAgIGNjLmdhbWUub24oQ29uc3RhbnQuRV9VUERBVEVfQ09JTiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNraW5WaWRlb0NhcmQuc3RyaW5nID0gY29jb3N6LmRhdGFNZ3IuU2tpblZlZGlvTnVtICsgXCJcIjtcclxuICAgICAgICAgICAgdGhpcy5ib29tTnVtLnN0cmluZyA9IGNvY29zei5kYXRhTWdyLkJvb21OdW0gKyBcIlwiO1xyXG4gICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQm9vbU51bSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkJ0bkJvb20uZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lX2J0bl9ub2Jvb21cIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQnRuQm9vbS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvb21OdW0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQnRuQm9vbS5nZXRDaGlsZEJ5TmFtZShcImdhbWVfYnRuX25vYm9vbVwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuQnRuQm9vbS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYm9vbU51bS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcblxyXG4gICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dCYW5uZXJCeUJvdHRvbSgpO1xyXG5cclxuICAgICAgICBjb2Nvc3ouc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuaGlkZUJhbm5lcigpO1xyXG4gICAgICAgIH0sIDIpXHJcblxyXG4gICAgICAgIGNjLmxvZyhcIi0tLS0tLS0tLXN0YXJ0XCIpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uVGlwcyhtc2cpIHtcclxuICAgICAgICBNc2cuU2hvdyhtc2cpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29uQnRuU2tpcCgpIHtcclxuXHJcbiAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlidG5FZmZlY3QoKTtcclxuICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuU2tpblZlZGlvTnVtKSB7XHJcbiAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLlNraW5WZWRpb051bS0tXHJcbiAgICAgICAgICAgIHRoaXMuc2tpblZpZGVvQ2FyZC5zdHJpbmcgPSBjb2Nvc3ouZGF0YU1nci5Ta2luVmVkaW9OdW0gKyBcIlwiO1xyXG4gICAgICAgICAgICBNc2cuU2hvdyhcIuaCqOaLpeacieWFs+WNoei3s+i/h+WNoe+8jOacrOasoea2iOiAl+ivpemBk+WFt+ebtOaOpeiOt+W+l+WlluWKsVwiKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5CdG5Ta2lwLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb2Nvc3ouc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPSBjb2Nvc3ouZ2FtZU1nci5jdXJMZXZlbElEO1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm9uR2FtZUV2ZW50KDIsIFwi6Lez6L+H5YWz5Y2hXCIsIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkICsgMSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkxldmVsVW5Mb2NrKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQpO1xyXG4gICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCsrO1xyXG4gICAgICAgICAgICAgICAgY29jb3N6LnNjZW5lTWdyLmxvYWRTY2VuZShcIkdhbWVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvY29zei51aU1nci5vcGVuUGFnZShQYWdlTmFtZS5VaUdhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvY29zei5nYW1lTWdyLmluaXRHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuQnRuU2tpcC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29jb3N6LnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID0gY29jb3N6LmdhbWVNZ3IuY3VyTGV2ZWxJRDtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5vbkdhbWVFdmVudCgyLCBcIui3s+i/h+WFs+WNoVwiLCAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCArIDEpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5MZXZlbFVuTG9jayhjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkKTtcclxuICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQrKztcclxuICAgICAgICAgICAgICAgIGNvY29zei5zY2VuZU1nci5sb2FkU2NlbmUoXCJHYW1lXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhZ2UoUGFnZU5hbWUuVWlHYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pbml0R2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5WSVZPX0dBTUUgfHwgY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuT1BQT19HQU1FKSkge1xyXG5cclxuICAgICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuc2hvd1Jld2FyZGVkVmlkZW9BZCgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucmVzdW1BbGxNdXNpYygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkJ0blNraXAuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPSBjb2Nvc3ouZ2FtZU1nci5jdXJMZXZlbElEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cub25HYW1lRXZlbnQoMiwgXCLot7Pov4flhbPljaFcIiwgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgKyAxKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5MZXZlbFVuTG9jayhjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouc2NlbmVNZ3IubG9hZFNjZW5lKFwiR2FtZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhZ2UoUGFnZU5hbWUuVWlHYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvY29zei5nYW1lTWdyLmluaXRHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblRpcHMoXCLot7Pov4flhbPljaHmiJDlip9cIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25UaXBzKCfop4bpopHmkq3mlL7lrozmiJDmiY3og73ojrflj5blpZblirEnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5Ta2luVmVkaW9OdW0gPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLkJ0blNraXAuZ2V0Q2hpbGRCeU5hbWUoXCJ2aWRlb1wiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLkJ0blNraXAuZ2V0Q2hpbGRCeU5hbWUoXCJzdGlwQ2FyZFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuQnRuU2tpcC5nZXRDaGlsZEJ5TmFtZShcInZpZGVvXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLkJ0blNraXAuZ2V0Q2hpbGRCeU5hbWUoXCJzdGlwQ2FyZFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLkJ0blNraXAuZ2V0Q2hpbGRCeU5hbWUoXCJzdGlwQ2FyZFwiKS5nZXRDaGlsZEJ5TmFtZShcIm51bWJlclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNvY29zei5kYXRhTWdyLlNraW5WZWRpb051bSArIFwiXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnN0b3BBbGwoKTtcclxuICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93UmV3YXJkZWRWaWRlb0FkKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnJlc3VtQWxsTXVzaWMoKTtcclxuICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgTXNnLlNob3coJ+iOt+WPluinhumikeWlluWKseaIkOWKnycpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB3aW5kb3cub25HYW1lRXZlbnQoMiwgXCLot7Pov4flhbPljaFcIiwgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgKyAxKSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLkJ0blNraXAub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCk7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5MZXZlbFVuTG9jayhjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkKTtcclxuICAgICAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5YnRuRWZmZWN0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA+PSAxMTkpIHtcclxuICAgICAgICAgICAgICAgICAgICBNc2cuU2hvdyhcIuaVrOivt+acn+W+heabtOWkmuWFs+WNoSEhIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9IDExOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LnNjZW5lTWdyLmxvYWRTY2VuZShcIkdhbWVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYWdlKFBhZ2VOYW1lLlVpR2FtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pbml0R2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkKys7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouc2NlbmVNZ3IubG9hZFNjZW5lKFwiR2FtZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYWdlKFBhZ2VOYW1lLlVpR2FtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3IuaW5pdEdhbWUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIE1zZy5TaG93KFwiLS0tLS0tLS0t6Lez6L+H5YWz5Y2hLS0tLS0tLS0tLS0tLS0tLS0tLS1cIilcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIE1zZy5TaG93KCfop4bpopHmkq3mlL7lrozmiJDmiY3og73ojrflj5blpZblirEnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfT25Cb29tKCkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIG9uU3RhcnRHYW1lKCkge1xyXG5cclxuICAgICAgICBjb2Nvc3ouc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLkxldmVsTGFiZWwuc3RyaW5nID0gY29jb3N6LmdhbWVNZ3IuY3VyR2FtZTJMZXZlbElEICsgXCJcIlxyXG4gICAgICAgICAgICB0aGlzLmZyYWN0aW9uKys7XHJcbiAgICAgICAgfSwgMC4yKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX1BhdXNlKCkge1xyXG4gICAgICAgIGNjLmxvZyhcIi0tLS0tLS0tLS3mmoLlgZxcIilcclxuICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheWJ0bkVmZmVjdCgpO1xyXG4gICAgICAgIGNvY29zei51aU1nci5vcGVuUGFuZWwoUGFuZWxOYW1lLlBhdXNlUGFuZWwpO1xyXG4gICAgfVxyXG4gICAgcHJvdGVjdGVkIG9uT3BlbigpIHtcclxuICAgICAgICBjYy5sb2coXCItLS0tLS0tLWNvY29zei5nYW1lTWdyLmdhbWUyRnJhY3Rpb24tLS0tb3BlblwiLCBjb2Nvc3ouZ2FtZU1nci5nYW1lMkZyYWN0aW9uKVxyXG4gICAgICAgIHRoaXMuZnJhY3Rpb24gPSBjb2Nvc3ouZ2FtZU1nci5nYW1lMkZyYWN0aW9uXHJcbiAgICAgICAgdGhpcy5MZXZlbExhYmVsLnN0cmluZyA9IGNvY29zei5nYW1lTWdyLmN1ckdhbWUyTGV2ZWxJRCArIFwiXCJcclxuICAgICAgICAvLyBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA0KSB7XHJcblxyXG4gICAgICAgIC8vICAgICB0aGlzLmhhbmRUaXBzLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICAvLyAgICAgdGhpcy5oYW5kVGlwcy5vcGFjaXR5ID0gMDtcclxuICAgICAgICAvLyAgICAgY29jb3N6LnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgcG9zID0gdGhpcy5oYW5kVGlwcy5nZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGEgPSBjYy50d2VlbigpLnNlcXVlbmNlKFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNjLnR3ZWVuKCkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuaGFuZFRpcHMuc2V0UG9zaXRpb24ocG9zKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5oYW5kVGlwcy5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMiwgeyBwb3NpdGlvbjogY2MudjIoMTI2LCAxODApIH0pLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNjLnR3ZWVuKCkudG8oMSwgeyBwb3NpdGlvbjogY2MudjIoMTI2LCAxODApLCBvcGFjaXR5OiAwIH0pLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNjLnR3ZWVuKCkuZGVsYXkoNClcclxuXHJcbiAgICAgICAgLy8gICAgICAgICApXHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmFjdGlvbiA9IGNjLnR3ZWVuKHRoaXMuaGFuZFRpcHMpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoYSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgIC8vICAgICB9LCAxKVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgdGhpcy5MZXZlbExhYmVsLnN0cmluZyA9IChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkICsgMSkudG9TdHJpbmcoKTtcclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci5jdXJMZXZlbElEID0gY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZDtcclxuXHJcbiAgICAgICAgLy8gY29jb3N6LnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGxpZXlvdV9TZGtNYW5hZ2VyLmhpZGVCYW5uZXIoKTtcclxuICAgICAgICAvLyB9LCAxKVxyXG5cclxuICAgICAgICBpZiAoY29jb3N6LnNjZW5lTWdyLnNjZW5lTmFtZSA9PSBcIkdhbWVcIikge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mcmFjdGlvbiA9IDEwMDA7XHJcbiAgICAgICAgICAgIGNvY29zei5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mcmFjdGlvbiA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KENvbnN0YW50LkVfR0FNRV9GQUlEKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvY29zei51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJhY3Rpb24tLTtcclxuICAgICAgICAgICAgfSwgMC4yKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5CdG5Cb29tLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLkxldmVsTGFiZWwuc3RyaW5nID0gY29jb3N6LmdhbWVNZ3IuY3VyR2FtZTJMZXZlbElEICsgXCJcIlxyXG4gICAgICAgICAgICBpZiAoIWNvY29zei5nYW1lTWdyLmlzR2FtZTJSZXN1cnJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJhY3Rpb24gPSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjYy5nYW1lLm9uKENvbnN0YW50LkVfR0FNRV9TVEFSVCwgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgIGNvY29zei5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5MZXZlbExhYmVsLnN0cmluZyA9IGNvY29zei5nYW1lTWdyLmN1ckdhbWUyTGV2ZWxJRCArIFwiXCJcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmZyYWN0aW9uKys7XHJcbiAgICAgICAgICAgIC8vICAgICB9LCAwLjIpXHJcbiAgICAgICAgICAgIC8vIH0sIHRoaXMpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNraW5WaWRlb0NhcmQuc3RyaW5nID0gY29jb3N6LmRhdGFNZ3IuU2tpblZlZGlvTnVtICsgXCJcIjtcclxuICAgICAgICB0aGlzLmJvb21OdW0uc3RyaW5nID0gY29jb3N6LmRhdGFNZ3IuQm9vbU51bSArIFwiXCI7XHJcbiAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkJvb21OdW0gPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLkJ0bkJvb20uZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lX2J0bl9ub2Jvb21cIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5CdG5Cb29tLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ib29tTnVtLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLkJ0bkJvb20uZ2V0Q2hpbGRCeU5hbWUoXCJnYW1lX2J0bl9ub2Jvb21cIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuQnRuQm9vbS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ib29tTnVtLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLlNraW5WZWRpb051bSA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuQnRuU2tpcC5nZXRDaGlsZEJ5TmFtZShcInZpZGVvXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuQnRuU2tpcC5nZXRDaGlsZEJ5TmFtZShcInN0aXBDYXJkXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5CdG5Ta2lwLmdldENoaWxkQnlOYW1lKFwidmlkZW9cIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuQnRuU2tpcC5nZXRDaGlsZEJ5TmFtZShcInN0aXBDYXJkXCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuQnRuU2tpcC5nZXRDaGlsZEJ5TmFtZShcInN0aXBDYXJkXCIpLmdldENoaWxkQnlOYW1lKFwibnVtYmVyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY29jb3N6LmRhdGFNZ3IuU2tpblZlZGlvTnVtICsgXCJcIjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25DbG9zZSgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS51bnNjaGVkdWxlQWxsRm9yVGFyZ2V0KHRoaXMpO1xyXG4gICAgICAgIGNvY29zei51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgY2MuZ2FtZS50YXJnZXRPZmYodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS51bnNjaGVkdWxlQWxsRm9yVGFyZ2V0KHRoaXMpO1xyXG4gICAgICAgIGNvY29zei51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgY2MuZ2FtZS50YXJnZXRPZmYodGhpcyk7XHJcbiAgICB9XHJcbn1cclxuIl19