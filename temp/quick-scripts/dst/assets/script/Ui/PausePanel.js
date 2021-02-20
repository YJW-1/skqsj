
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Ui/PausePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxVaVxcUGF1c2VQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBQzlCLDhDQUE2QztBQUM3QyxrREFBNEQ7QUFLdEQsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUF3Qyw4QkFBTTtJQVUxQztRQUFBLFlBQ0ksaUJBQU8sU0FFVjtRQVpELFVBQVU7UUFDRixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUNwQyxVQUFVO1FBQ0YsY0FBUSxHQUFZLElBQUksQ0FBQztRQUNqQyxVQUFVO1FBQ0YsaUJBQVcsR0FBWSxJQUFJLENBQUM7UUFFNUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3pCLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7SUFDakIsQ0FBQztJQUNPLDBCQUFLLEdBQWI7UUFFSSxJQUFJLElBQUksR0FBYyxlQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxvQkFBUyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUUsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLElBQUksR0FBWSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pDLElBQUksSUFBSSxFQUFFO2dCQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNsQjtTQUNKO0lBQ0wsQ0FBQztJQUNPLDRC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U0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFUyw4QkFBUyxHQUFuQjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUF0S2dCLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0F1SzlCO0lBQUQsaUJBQUM7Q0F2S0QsQUF1S0MsQ0F2S3VDLGdCQUFNLEdBdUs3QztrQkF2S29CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlQYWdlIGZyb20gXCIuL1VJUGFnZVwiO1xyXG5pbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5pbXBvcnQgeyBQYW5lbE5hbWUsIFBhZ2VOYW1lIH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG4vLyBpbXBvcnQgeyBCYW5uZXJMb2NhdGlvbiB9IGZyb20gXCIuLi9jb21tb24tcGx1Z2luL1NjcmlwdHMvWVpfQ29uc3RhbnRcIjtcclxuLy8gaW1wb3J0IHsgdXRpbHMgfSBmcm9tIFwiLi4vY29tbW9uLXBsdWdpbi9TY3JpcHRzL1V0aWxzXCI7XHJcbmltcG9ydCBNc2cgZnJvbSBcIi4uL0ZyYW1ld29yay9Nc2dcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXVzZVBhbmVsIGV4dGVuZHMgVUlQYWdlIHtcclxuICAgIC8qKue7p+e7rea4uOaIjyAqL1xyXG4gICAgcHJpdmF0ZSBCdG5Db250aW51ZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvKirph43mlrDlvIDlp4sgKi9cclxuICAgIHByaXZhdGUgQnRuQWdhaW46IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLyoq6L+U5Zue6aaW6aG1ICovXHJcbiAgICBwcml2YXRlIEJ0bkJhY2tIb21lOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIFNjYWxlTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIG5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9pbml0KCkge1xyXG5cclxuICAgICAgICBsZXQgR2FtZTogY2MuUHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoUGFuZWxOYW1lLlBhdXNlUGFuZWwsIGNjLlByZWZhYik7XHJcbiAgICAgICAgaWYgKEdhbWUpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZShHYW1lKTtcclxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhZ2UgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy91aVwiKS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb25Mb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9vbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlID0gY2MuZmluZChcIkNhbnZhcy91aS9QYXVzZVBhbmVsXCIpO1xyXG4gICAgICAgIHRoaXMuQnRuQWdhaW4gPSBjYy5maW5kKFwiQ2FudmFzL3VpL1BhdXNlUGFuZWwvU2NhbGVOb2RlL0J0bkFnYWluXCIpO1xyXG4gICAgICAgIHRoaXMuQnRuQ29udGludWUgPSBjYy5maW5kKFwiQ2FudmFzL3VpL1BhdXNlUGFuZWwvU2NhbGVOb2RlL0J0bkNvbnRpbnVlXCIpO1xyXG4gICAgICAgIHRoaXMuQnRuQmFja0hvbWUgPSBjYy5maW5kKFwiQ2FudmFzL3VpL1BhdXNlUGFuZWwvU2NhbGVOb2RlL0J0bkJhY2tIb21lXCIpO1xyXG4gICAgICAgIHRoaXMuU2NhbGVOb2RlID0gY2MuZmluZChcIkNhbnZhcy91aS9QYXVzZVBhbmVsL1NjYWxlTm9kZVwiKTtcclxuICAgICAgICB0aGlzLl9TdGFydCgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfU3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5CdG5BZ2Fpbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5BZ2FpbiwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5CdG5Db250aW51ZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5Db250aW51ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5CdG5CYWNrSG9tZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5CYWNrSG9tZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uT3BlbigpIHtcclxuICAgICAgICAvLyB1dGlscy5hZE1hbmFnZXIuU2hvd0ludGVyc3RpdGlhbChCYW5uZXJMb2NhdGlvbi5QYXVzZSk7XHJcbiAgICAgICAgLy8gY29jb3N6LmdhbWVNZ3IudHdlZUJ0bih0aGlzLkJ0bkNvbnRpbnVlLCAxLjA1LCAxKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUuc2NhbGUgPSAwO1xyXG4gICAgICAgIC8vIGNvY29zei5nYW1lTWdyLnR3ZWVOb2RlKHRoaXMubm9kZSk7XHJcbiAgICAgICAgLy8gdGhpcy5TY2FsZU5vZGUuc2NhbGUgPSAwO1xyXG4gICAgICAgIHRoaXMuX3BhZ2UuekluZGV4ICs9IDk5OTk7XHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLlZJVk9fR0FNRSkge1xyXG4gICAgICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93U3BvdEJ5UGF1c2UoKTtcclxuICAgICAgICAgICAgbGV0IG9iaiA9IHt9O1xyXG4gICAgICAgICAgICAvLyBvYmpbXCJub2RlXCJdID0gdGhpcy5TY2FsZU5vZGVcclxuICAgICAgICAgICAgLy8gb2JqW1wiYmdQYXRoXCJdID0gdGhpcy5TY2FsZU5vZGVcclxuICAgICAgICAgICAgLy8gb2JqW1wic2NhbGVcIl0gPSAwLjhcclxuICAgICAgICAgICAgLy8gbGlleW91X1Nka01hbmFnZXIuc2hvd05hdGl2ZUFkX2JpZyh7XHJcbiAgICAgICAgICAgIC8vICAgICBub2RlOiB0aGlzLlNjYWxlTm9kZSxcclxuICAgICAgICAgICAgLy8gICAgIGJnUGF0aDogXCJ0ZXN0LnBuZ1wiLFxyXG4gICAgICAgICAgICAvLyAgICAgc2NhbGU6IDEsXHJcbiAgICAgICAgICAgIC8vICAgICB0aXRsZUNvbG9yOiBjYy5jb2xvcig0NiwgNDYsIDQ2KSxcclxuICAgICAgICAgICAgLy8gICAgIGRlc2NDb2xvcjogY2MuY29sb3IoNDYsIDQ2LCA0NiksXHJcbiAgICAgICAgICAgIC8vICAgICBpbnNldFRvcDogMCxcclxuICAgICAgICAgICAgLy8gICAgIGluc2V0Qm90dG9tOiAwLFxyXG4gICAgICAgICAgICAvLyAgICAgaW5zZXRMZWZ0OiAwLFxyXG4gICAgICAgICAgICAvLyAgICAgaW5zZXRSaWdodDogMFxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuT1BQT19HQU1FKSB7XHJcbiAgICAgICAgICAgIHRoaXMuU2NhbGVOb2RlLnggPSAtMjYxO1xyXG4gICAgICAgICAgICBsZXQgc3AgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcInNzXCIsIGNjLlNwcml0ZUZyYW1lKVxyXG4gICAgICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93TmF0aXZlQWRfYmlnKHtcclxuICAgICAgICAgICAgICAgIG5vZGU6IHRoaXMuU2NhbGVOb2RlLmdldENoaWxkQnlOYW1lKFwibmF0aXZlUG9zXCIpLCBcInRpdGxlQ29sb3JcIjogY2MuY29sb3IoMjU1LCAyNTUsIDI1NSwgMjU1LCksXHJcbiAgICAgICAgICAgICAgICBcImRlc2NDb2xvclwiOiBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUsKSwgYmdQYXRoOiAndGV4dHVyZS9zcycsIHRleHR1cmU6IHNwLCBzY2FsZTogMC45LCBpbnNldFRvcDogMTAsIGluc2V0Qm90dG9tOiAxMCwgaW5zZXRMZWZ0OiAxMCwgaW5zZXRSaWdodDogMTBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuX3BhZ2Uuc2V0UG9zaXRpb24oY2MuZmluZChcIkNhbnZhcy91aS91aUNhbWVyYVwiKS5nZXRQb3NpdGlvbigpKVxyXG4gICAgICAgIC8vIHRoaXMuX3BhZ2UueSAtPSA3MDA7XHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5TY2FsZU5vZGUpXHJcbiAgICAgICAgICAgIC5ieSgwLjIsIHsgcG9zaXRpb246IGNjLnYyKDAsIDcwMCkgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IucGF1c2UoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggKz0gMztcclxuXHJcbiAgICAgICAgLy8gaWYgKChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5WSVZPX0dBTUUpKSB7XHJcbiAgICAgICAgLy8gICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dCYW5uZXJCeUJvdHRvbSgpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgQWdhaW4oKSB7XHJcbiAgICAgICAgLy8gY29jb3N6LmF1ZGlvTWdyLnBsYXlidG5FZmZlY3QoKTtcclxuICAgICAgICAvLyBjb2Nvc3ouc2NlbmVNZ3IubG9hZFNjZW5lKFwiTG9hZEdhbWVcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhZ2UoUGFnZU5hbWUuVWlMb2FkR2FtZSk7XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpXHJcbiAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlidG5FZmZlY3QoKTtcclxuICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID0gY29jb3N6LmdhbWVNZ3IuY3VyTGV2ZWxJRFxyXG4gICAgICAgIGNvY29zei5zY2VuZU1nci5sb2FkU2NlbmUoY29jb3N6LnNjZW5lTWdyLnNjZW5lTmFtZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhZ2UoUGFnZU5hbWUuVWlHYW1lKTtcclxuICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3IuaW5pdEdhbWUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIENvbnRpbnVlKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLnJlc3VtZSgpXHJcbiAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlidG5FZmZlY3QoKTtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5TY2FsZU5vZGUpXHJcbiAgICAgICAgICAgIC5ieSgwLjIsIHsgcG9zaXRpb246IGNjLnYyKDAsIC02MDApIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgIC8vIGNvY29zei5hdWRpb01nci5zdG9wQWxsKCk7XHJcbiAgICAgICAgLy8gdXRpbHMuYWRNYW5hZ2VyLkhpZGVCYW5uZXIoQmFubmVyTG9jYXRpb24uR2FtZSk7XHJcbiAgICAgICAgLy8gY29jb3N6LmdhbWVNZ3IuYXVkaW9CZyA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHV0aWxzLmFkTWFuYWdlci5TaG93VmlkZW8oKHJldDogYm9vbGVhbiwgbXNnOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAvLyAgICAgY29jb3N6LmdhbWVNZ3IuYXVkaW9CZyA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIHV0aWxzLmFkTWFuYWdlci5TaG93QmFubmVyKEJhbm5lckxvY2F0aW9uLkdhbWUpO1xyXG4gICAgICAgIC8vICAgICBjb2Nvc3ouYXVkaW9NZ3IuSG9tZUJ0bkVmZmVjdCgoKSA9PiB7IH0sIDApO1xyXG4gICAgICAgIC8vICAgICBjb2Nvc3ouYXVkaW9NZ3IucmVzdW1BbGxNdXNpYygpO1xyXG4gICAgICAgIC8vICAgICBpZiAocmV0KSB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBjb2Nvc3ouZGF0YU1nci5MZXZlbFNraXBMb2NrKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCsrO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gY29jb3N6LnNjZW5lTWdyLmxvYWRTY2VuZShcIkdhbWVcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIGNvY29zei51aU1nci5vcGVuUGFnZShQYWdlTmFtZS5VaUdhbWUpO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIGNvY29zei5nYW1lTWdyLmluaXRHYW1lKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAgTXNnLlNob3coXCLmiJDlip/ot7Pov4chIVwiKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9HQU1FX0xPR0lDLCB7IHR5cGU6IENvbnN0YW50LkVfTEVWRUxfRkFJTEVEIH0pO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gICAgICAgICBNc2cuU2hvdyhcIuaIkOWKn+i3s+i/hyEhXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgY29jb3N6LmRhdGFNZ3Iuc2V0U3Rhck51bShjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkLCAzKTtcclxuICAgICAgICAvLyAgICAgICAgIGNvY29zei5kYXRhTWdyLklzRW5kID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgICAgIGNvY29zei51aU1nci5vcGVuUGFuZWwoUGFuZWxOYW1lLkxldmVsUGFuZWwpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKCFtc2cpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBtc2cgPSBcIuaaguaXoOinhumikeW5v+WRiiFcIjtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIE1zZy5TaG93KG1zZyk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBCYWNrSG9tZSgpIHtcclxuXHJcbiAgICAgICAgY2MuZGlyZWN0b3IucmVzdW1lKClcclxuICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheWJ0bkVmZmVjdCgpO1xyXG4gICAgICAgIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPSBjb2Nvc3ouZ2FtZU1nci5jdXJMZXZlbElEXHJcbiAgICAgICAgY29jb3N6LnNjZW5lTWdyLmxvYWRTY2VuZShcIkhvbWVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhZ2UoUGFnZU5hbWUuVWlIb21lKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25DbG9zZSgpIHtcclxuICAgICAgICBjYy5nYW1lLnRhcmdldE9mZih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNjLmdhbWUudGFyZ2V0T2ZmKHRoaXMpO1xyXG4gICAgfVxyXG59Il19