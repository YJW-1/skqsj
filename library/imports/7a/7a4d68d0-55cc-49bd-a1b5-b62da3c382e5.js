"use strict";
cc._RF.push(module, '7a4d6jQVcxJvaG1ti2jw4Ll', 'PausePanel');
// script/Ui/PausePanel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIPage_1 = require("./UIPage");
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PausePanel = /** @class */ (function (_super) {
    __extends(PausePanel, _super);
    function PausePanel() {
        var _this = _super.call(this) || this;
        /**继续游戏 */
        _this.BtnContinue = null;
        /**重新开始 */
        _this.BtnAgain = null;
        /**返回首页 */
        _this.BtnBackHome = null;
        _this.ScaleNode = null;
        _this.node = null;
        _this._init();
        return _this;
    }
    PausePanel.prototype._init = function () {
        var Game = CocosZ_1.cocosz.resMgr.getRes(Constant_1.PanelName.PausePanel, cc.Prefab);
        if (Game) {
            var node = cc.instantiate(Game);
            if (node) {
                this._page = node;
                cc.find("Canvas/ui").addChild(node);
                node.active = false;
                node.position = cc.Vec2.ZERO;
                this._onLoad();
            }
        }
    };
    PausePanel.prototype._onLoad = function () {
        this.node = cc.find("Canvas/ui/PausePanel");
        this.BtnAgain = cc.find("Canvas/ui/PausePanel/ScaleNode/BtnAgain");
        this.BtnContinue = cc.find("Canvas/ui/PausePanel/ScaleNode/BtnContinue");
        this.BtnBackHome = cc.find("Canvas/ui/PausePanel/ScaleNode/BtnBackHome");
        this.ScaleNode = cc.find("Canvas/ui/PausePanel/ScaleNode");
        this._Start();
    };
    PausePanel.prototype._Start = function () {
        this.BtnAgain.on(cc.Node.EventType.TOUCH_START, this.Again, this);
        this.BtnContinue.on(cc.Node.EventType.TOUCH_START, this.Continue, this);
        this.BtnBackHome.on(cc.Node.EventType.TOUCH_START, this.BackHome, this);
    };
    PausePanel.prototype.onOpen = function () {
        // utils.adManager.ShowInterstitial(BannerLocation.Pause);
        // cocosz.gameMgr.tweeBtn(this.BtnContinue, 1.05, 1);
        // this.node.scale = 0;
        // cocosz.gameMgr.tweeNode(this.node);
        // this.ScaleNode.scale = 0;
        this._page.zIndex += 9999;
        if (cc.sys.platform === cc.sys.VIVO_GAME) {
            lieyou_SdkManager.showSpotByPause();
            var obj = {};
            // obj["node"] = this.ScaleNode
            // obj["bgPath"] = this.ScaleNode
            // obj["scale"] = 0.8
            // lieyou_SdkManager.showNativeAd_big({
            //     node: this.ScaleNode,
            //     bgPath: "test.png",
            //     scale: 1,
            //     titleColor: cc.color(46, 46, 46),
            //     descColor: cc.color(46, 46, 46),
            //     insetTop: 0,
            //     insetBottom: 0,
            //     insetLeft: 0,
            //     insetRight: 0
            // });
        }
        else if (cc.sys.platform === cc.sys.OPPO_GAME) {
            this.ScaleNode.x = -261;
            var sp = CocosZ_1.cocosz.resMgr.getRes("ss", cc.SpriteFrame);
            lieyou_SdkManager.showNativeAd_big({
                node: this.ScaleNode.getChildByName("nativePos"), "titleColor": cc.color(255, 255, 255, 255),
                "descColor": cc.color(255, 255, 255, 255), bgPath: 'texture/ss', texture: sp, scale: 0.9, insetTop: 10, insetBottom: 10, insetLeft: 10, insetRight: 10
            });
        }
        // this._page.setPosition(cc.find("Canvas/ui/uiCamera").getPosition())
        // this._page.y -= 700;
        cc.tween(this.ScaleNode)
            .by(0.2, { position: cc.v2(0, 700) })
            .call(function () {
            cc.director.pause();
        })
            .start();
        this.node.zIndex += 3;
        // if ((cc.sys.platform === cc.sys.VIVO_GAME)) {
        //     lieyou_SdkManager.showBannerByBottom();
        // }
    };
    PausePanel.prototype.Again = function () {
        // cocosz.audioMgr.playbtnEffect();
        // cocosz.sceneMgr.loadScene("LoadGame", () => {
        //     cocosz.uiMgr.openPage(PageName.UiLoadGame);
        // });
        cc.director.resume();
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        CocosZ_1.cocosz.dataMgr.CurLevelId = CocosZ_1.cocosz.gameMgr.curLevelID;
        CocosZ_1.cocosz.sceneMgr.loadScene(CocosZ_1.cocosz.sceneMgr.sceneName, function () {
            CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UiGame);
            CocosZ_1.cocosz.gameMgr.initGame();
        });
    };
    PausePanel.prototype.Continue = function () {
        var _this = this;
        cc.director.resume();
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        cc.tween(this.ScaleNode)
            .by(0.2, { position: cc.v2(0, -600) })
            .call(function () {
            _this.node.destroy();
        })
            .start();
        // cocosz.audioMgr.stopAll();
        // utils.adManager.HideBanner(BannerLocation.Game);
        // cocosz.gameMgr.audioBg = false;
        // utils.adManager.ShowVideo((ret: boolean, msg: string) => {
        //     cocosz.gameMgr.audioBg = true;
        //     utils.adManager.ShowBanner(BannerLocation.Game);
        //     cocosz.audioMgr.HomeBtnEffect(() => { }, 0);
        //     cocosz.audioMgr.resumAllMusic();
        //     if (ret) {
        //         // cocosz.dataMgr.LevelSkipLock(cocosz.dataMgr.CurLevelId);
        //         // cocosz.dataMgr.CurLevelId++;
        //         // cocosz.sceneMgr.loadScene("Game", () => {
        //         //     cocosz.uiMgr.openPage(PageName.UiGame);
        //         //     cocosz.gameMgr.initGame();
        //         //     Msg.Show("成功跳过!!");
        //         //     cc.game.emit(Constant.E_GAME_LOGIC, { type: Constant.E_LEVEL_FAILED });
        //         // });
        //         Msg.Show("成功跳过!!");
        //         cocosz.dataMgr.setStarNum(cocosz.dataMgr.CurLevelId, 3);
        //         cocosz.dataMgr.IsEnd = true;
        //         cocosz.uiMgr.openPanel(PanelName.LevelPanel);
        //         this.close();
        //     } else {
        //         if (!msg) {
        //             msg = "暂无视频广告!";
        //         }
        //         Msg.Show(msg);
        //     }
        // });
    };
    PausePanel.prototype.BackHome = function () {
        cc.director.resume();
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        CocosZ_1.cocosz.dataMgr.CurLevelId = CocosZ_1.cocosz.gameMgr.curLevelID;
        CocosZ_1.cocosz.sceneMgr.loadScene("Home", function () {
            CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UiHome);
        });
    };
    PausePanel.prototype.onClose = function () {
        cc.game.targetOff(this);
    };
    PausePanel.prototype.onDestroy = function () {
        cc.game.targetOff(this);
    };
    PausePanel = __decorate([
        ccclass
    ], PausePanel);
    return PausePanel;
}(UIPage_1.default));
exports.default = PausePanel;

cc._RF.pop();