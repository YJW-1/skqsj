
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Ui/UiSet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eff56swE+VKOYA4P5ds+SMx', 'UiSet');
// script/Ui/UiSet.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIPage_1 = require("./UIPage");
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UiSet = /** @class */ (function (_super) {
    __extends(UiSet, _super);
    function UiSet() {
        var _this = _super.call(this) || this;
        _this.scaleNode = null;
        _this.btnMusic = null;
        _this.btnEffect = null;
        _this.btnShork = null;
        _this.btnBack = null;
        _this.num = null;
        _this._init();
        return _this;
    }
    UiSet.prototype._init = function () {
        var Game = CocosZ_1.cocosz.resMgr.getRes(Constant_1.PanelName.UiSet, cc.Prefab);
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
    UiSet.prototype._onLoad = function () {
        this.scaleNode = this._page.getChildByName("scaleNode");
        this.btnMusic = this.scaleNode.getChildByName("btn_music");
        this.btnEffect = this.scaleNode.getChildByName("btn_effect");
        this.btnShork = this.scaleNode.getChildByName("btn_shock");
        this.btnBack = this.scaleNode.getChildByName("btn_back");
        this._Start();
    };
    UiSet.prototype._Start = function () {
        var _this = this;
        this.btnMusic.getChildByName("btnBg").on(cc.Node.EventType.TOUCH_END, function () {
            CocosZ_1.cocosz.dataMgr.AudioOn = !CocosZ_1.cocosz.dataMgr.AudioOn;
            if (CocosZ_1.cocosz.dataMgr.AudioOn) {
                CocosZ_1.cocosz.audioMgr.playGameMusic();
            }
            else {
                CocosZ_1.cocosz.audioMgr.stopAll();
            }
            _this.initBtnState();
        });
        this.btnEffect.getChildByName("btnBg").on(cc.Node.EventType.TOUCH_END, function () {
            CocosZ_1.cocosz.dataMgr.AudioEffectOn = !CocosZ_1.cocosz.dataMgr.AudioEffectOn;
            _this.initBtnState();
        });
        this.btnShork.getChildByName("btnBg").on(cc.Node.EventType.TOUCH_END, function () {
            CocosZ_1.cocosz.dataMgr.ShockOn = !CocosZ_1.cocosz.dataMgr.ShockOn;
            _this.initBtnState();
        });
        this.btnBack.on(cc.Node.EventType.TOUCH_END, function () {
            _this.onBack();
        });
        this.scaleNode.getChildByName("box_bg").on(cc.Node.EventType.TOUCH_END, function () {
            _this.num++;
            if (_this.num > 10) {
                CocosZ_1.cocosz.dataMgr.LastBonusTime = "0";
                // cocosz.dataMgr.CoinCount += 99999;
                cc.game.emit(Constant_1.default.E_UPDATE_COIN);
                CocosZ_1.cocosz.gameMgr.isLevelOpen = true;
            }
        });
    };
    UiSet.prototype.onOpen = function () {
        this.initBtnState();
        this.scaleNode.scale = 0;
        cc.tween(this.scaleNode)
            .to(0.2, { scale: 1.4 })
            .to(0.1, { scale: 1.2 })
            .call(function () {
        })
            .start();
        if ((cc.sys.platform === cc.sys.VIVO_GAME)) {
            lieyou_SdkManager.showSpotByPause();
        }
        else if (cc.sys.platform === cc.sys.OPPO_GAME) {
            lieyou_SdkManager.hideBanner();
            this.scaleNode.x = -355;
            var sp = CocosZ_1.cocosz.resMgr.getRes("ss", cc.SpriteFrame);
            lieyou_SdkManager.showNativeAd_big({
                node: this.scaleNode.getChildByName("nativePos"), "titleColor": cc.color(255, 255, 255, 255),
                "descColor": cc.color(255, 255, 255, 255), bgPath: 'texture/ss', texture: sp, scale: 0.85, insetTop: 10, insetBottom: 10, insetLeft: 10, insetRight: 10
            });
        }
        // lieyou_SdkManager.showBannerByBottom();
        // if (cc.sys.platform === cc.sys.VIVO_GAME) {
        //     lieyou_SdkManager.showSpotByFinish();
        // }
    };
    UiSet.prototype.initBtnState = function () {
        // if (cocosz.dataMgr.AudioOn) {
        var x = CocosZ_1.cocosz.dataMgr.AudioOn == true ? 204 : 100;
        var pos = cc.v2(x, 0);
        var node = this.btnMusic.getChildByName("set_btn");
        if (node.x != x) {
            cc.tween(node)
                .to(0.2, { position: pos })
                .start();
        }
        var x2 = CocosZ_1.cocosz.dataMgr.AudioEffectOn == true ? 204 : 100;
        var pos2 = cc.v2(x2, 0);
        var node2 = this.btnEffect.getChildByName("set_btn");
        if (node2.x != x2) {
            cc.tween(node2)
                .to(0.2, { position: pos2 })
                .start();
        }
        var x3 = CocosZ_1.cocosz.dataMgr.ShockOn == true ? 204 : 100;
        var pos3 = cc.v2(x3, 0);
        var node3 = this.btnShork.getChildByName("set_btn");
        if (node3.x != x3) {
            cc.tween(node3)
                .to(0.2, { position: pos3 })
                .start();
        }
        // }
        // this.btnMusic.getChildByName("btn_on").active = cocosz.dataMgr.AudioOn;
        // this.btnMusic.getChildByName("btn_off").active = !cocosz.dataMgr.AudioOn;
        // this.btnEffect.getChildByName("btn_on").active = cocosz.dataMgr.AudioEffectOn;
        // this.btnEffect.getChildByName("btn_off").active = !cocosz.dataMgr.AudioEffectOn;
        // this.btnShork.getChildByName("btn_on").active = cocosz.dataMgr.ShockOn;
        // this.btnShork.getChildByName("btn_off").active = !cocosz.dataMgr.ShockOn;
    };
    UiSet.prototype.onBack = function () {
        var _this = this;
        cc.tween(this.scaleNode)
            .to(0.2, { scale: 0 })
            .call(function () {
            lieyou_SdkManager.showMoreGameByBanner();
            _this._page.destroy();
        })
            .start();
    };
    UiSet.prototype.onClose = function () {
        cc.game.targetOff(this);
    };
    UiSet.prototype.onDestroy = function () {
        cc.game.targetOff(this);
    };
    UiSet.prototype._getRanDom = function () {
        var num = Math.random();
        if (num > 0.8) {
            return 0;
        }
        else if (num > 0.65) {
            return 1;
        }
        else if (num > 0.5) {
            return 2;
        }
        else if (num > 0.3) {
            return 3;
        }
        else if (num > 0.2) {
            return 4;
        }
        else if (num > 0.1) {
            return 5;
        }
        else if (num > 0.02) {
            return 6;
        }
        else if (num > 0) {
            return 7;
        }
    };
    UiSet = __decorate([
        ccclass
    ], UiSet);
    return UiSet;
}(UIPage_1.default));
exports.default = UiSet;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxVaVxcVWlTZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUE4QjtBQUM5Qiw4Q0FBNkM7QUFDN0Msa0RBQTREO0FBSXRELElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBbUMseUJBQU07SUFhckM7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUFkRCxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsU0FBRyxHQUFXLElBQUksQ0FBQztRQU1mLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7SUFDakIsQ0FBQztJQUVPLHFCQUFLLEdBQWI7UUFDSSxJQUFJLElBQUksR0FBYyxlQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxvQkFBUyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkUsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLElBQUksR0FBWSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pDLElBQUksSUFBSSxFQUFFO2dCQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNsQjtTQUNKO0lBQ0wsQ0FBQztJQUNPLHVCQUFPLEdBQWY7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFekQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFHTyxzQkFBTSxHQUFkO1FBQUEsaUJBZ0NDO1FBL0JHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUU7WUFDbEUsZUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxlQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUNqRCxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO2dCQUN4QixlQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ25DO2lCQUNJO2dCQUNELGVBQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDN0I7WUFDRCxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQ25FLGVBQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLENBQUMsZUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUE7WUFDNUQsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUNsRSxlQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxDQUFDLGVBQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFBO1lBQ2hELEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRTtZQUN6QyxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFO1lBQ3BFLEtBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNYLElBQUksS0FBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUU7Z0JBRWYsZUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDO2dCQUNuQyxxQ0FBcUM7Z0JBQ3JDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3JDLGVBQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQzthQUNyQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVTLHNCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN6QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDbkIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQzthQUN2QixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDO2FBQ3ZCLElBQUksQ0FBQztRQUNOLENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO1FBRWIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDeEMsaUJBQWlCLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDdkM7YUFDSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFO1lBQzNDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ3hCLElBQUksRUFBRSxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUE7WUFDbkQsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUM7Z0JBQy9CLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUU7Z0JBQzdGLFdBQVcsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBRSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsV0FBVyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFO2FBQzNKLENBQUMsQ0FBQztTQUNOO1FBSUQsMENBQTBDO1FBRTFDLDhDQUE4QztRQUM5Qyw0Q0FBNEM7UUFDNUMsSUFBSTtJQUVSLENBQUM7SUFHUyw0QkFBWSxHQUF0QjtRQUNJLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsR0FBRyxlQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQ25ELElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ3JCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ25ELElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDYixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztpQkFDVCxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFDO2lCQUMxQixLQUFLLEVBQUUsQ0FBQTtTQUNmO1FBR0QsSUFBSSxFQUFFLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUMxRCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN2QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRCxJQUFJLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ2YsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ1YsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztpQkFDM0IsS0FBSyxFQUFFLENBQUE7U0FDZjtRQUlELElBQUksRUFBRSxHQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDcEQsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDdkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDcEQsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNmLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNWLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7aUJBQzNCLEtBQUssRUFBRSxDQUFBO1NBQ2Y7UUFDRCxJQUFJO1FBQ0osMEVBQTBFO1FBQzFFLDRFQUE0RTtRQUU1RSxpRkFBaUY7UUFDakYsbUZBQW1GO1FBRW5GLDBFQUEwRTtRQUMxRSw0RUFBNEU7SUFDaEYsQ0FBQztJQUVTLHNCQUFNLEdBQWhCO1FBQUEsaUJBU0M7UUFQRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDbkIsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNyQixJQUFJLENBQUM7WUFDRixpQkFBaUIsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVTLHVCQUFPLEdBQWpCO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVTLHlCQUFTLEdBQW5CO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUdPLDBCQUFVLEdBQWxCO1FBQ0ksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3hCLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRTtZQUNYLE9BQU8sQ0FBQyxDQUFDO1NBQ1o7YUFDSSxJQUFJLEdBQUcsR0FBRyxJQUFJLEVBQUU7WUFDakIsT0FBTyxDQUFDLENBQUM7U0FDWjthQUNJLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRTtZQUNoQixPQUFPLENBQUMsQ0FBQztTQUNaO2FBQ0ksSUFBSSxHQUFHLEdBQUcsR0FBRyxFQUFFO1lBQ2hCLE9BQU8sQ0FBQyxDQUFDO1NBQ1o7YUFDSSxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUU7WUFDaEIsT0FBTyxDQUFDLENBQUM7U0FDWjthQUNJLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRTtZQUNoQixPQUFPLENBQUMsQ0FBQztTQUNaO2FBQ0ksSUFBSSxHQUFHLEdBQUcsSUFBSSxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxDQUFDO1NBQ1o7YUFDSSxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDZCxPQUFPLENBQUMsQ0FBQztTQUNaO0lBRUwsQ0FBQztJQXZNZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQXdNekI7SUFBRCxZQUFDO0NBeE1ELEFBd01DLENBeE1rQyxnQkFBTSxHQXdNeEM7a0JBeE1vQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJUGFnZSBmcm9tIFwiLi9VSVBhZ2VcIjtcclxuaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuaW1wb3J0IENvbnN0YW50LCB7IFBhbmVsTmFtZSB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uc3RhbnRcIjtcclxuaW1wb3J0IE1zZyBmcm9tIFwiLi4vRnJhbWV3b3JrL01zZ1wiO1xyXG5pbXBvcnQgeyBoaWRlQmFubmVyIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9TREsvc2NyaXB0cy9TZGtNYW5hZ2VyXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVWlTZXQgZXh0ZW5kcyBVSVBhZ2Uge1xyXG5cclxuICAgIHNjYWxlTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgYnRuTXVzaWM6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgYnRuRWZmZWN0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGJ0blNob3JrOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIGJ0bkJhY2s6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIG51bTogbnVtYmVyID0gbnVsbDtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5faW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2luaXQoKSB7XHJcbiAgICAgICAgbGV0IEdhbWU6IGNjLlByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFBhbmVsTmFtZS5VaVNldCwgY2MuUHJlZmFiKTtcclxuICAgICAgICBpZiAoR2FtZSkge1xyXG4gICAgICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKEdhbWUpO1xyXG4gICAgICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFnZSA9IG5vZGU7XHJcbiAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3VpXCIpLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICAgICAgICAgIHRoaXMuX29uTG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuc2NhbGVOb2RlID0gdGhpcy5fcGFnZS5nZXRDaGlsZEJ5TmFtZShcInNjYWxlTm9kZVwiKTtcclxuICAgICAgICB0aGlzLmJ0bk11c2ljID0gdGhpcy5zY2FsZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fbXVzaWNcIik7XHJcbiAgICAgICAgdGhpcy5idG5FZmZlY3QgPSB0aGlzLnNjYWxlTm9kZS5nZXRDaGlsZEJ5TmFtZShcImJ0bl9lZmZlY3RcIik7XHJcbiAgICAgICAgdGhpcy5idG5TaG9yayA9IHRoaXMuc2NhbGVOb2RlLmdldENoaWxkQnlOYW1lKFwiYnRuX3Nob2NrXCIpO1xyXG4gICAgICAgIHRoaXMuYnRuQmFjayA9IHRoaXMuc2NhbGVOb2RlLmdldENoaWxkQnlOYW1lKFwiYnRuX2JhY2tcIik7XHJcblxyXG4gICAgICAgIHRoaXMuX1N0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgX1N0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuYnRuTXVzaWMuZ2V0Q2hpbGRCeU5hbWUoXCJidG5CZ1wiKS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcclxuICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQXVkaW9PbiA9ICFjb2Nvc3ouZGF0YU1nci5BdWRpb09uO1xyXG4gICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQXVkaW9Pbikge1xyXG4gICAgICAgICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlHYW1lTXVzaWMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5zdG9wQWxsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pbml0QnRuU3RhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJ0bkVmZmVjdC5nZXRDaGlsZEJ5TmFtZShcImJ0bkJnXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5BdWRpb0VmZmVjdE9uID0gIWNvY29zei5kYXRhTWdyLkF1ZGlvRWZmZWN0T25cclxuICAgICAgICAgICAgdGhpcy5pbml0QnRuU3RhdGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJ0blNob3JrLmdldENoaWxkQnlOYW1lKFwiYnRuQmdcIikub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLlNob2NrT24gPSAhY29jb3N6LmRhdGFNZ3IuU2hvY2tPblxyXG4gICAgICAgICAgICB0aGlzLmluaXRCdG5TdGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYnRuQmFjay5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbkJhY2soKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNjYWxlTm9kZS5nZXRDaGlsZEJ5TmFtZShcImJveF9iZ1wiKS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5udW0rKztcclxuICAgICAgICAgICAgaWYgKHRoaXMubnVtID4gMTApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5MYXN0Qm9udXNUaW1lID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICAvLyBjb2Nvc3ouZGF0YU1nci5Db2luQ291bnQgKz0gOTk5OTk7XHJcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9VUERBVEVfQ09JTik7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pc0xldmVsT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25PcGVuKCkge1xyXG4gICAgICAgIHRoaXMuaW5pdEJ0blN0YXRlKCk7XHJcbiAgICAgICAgdGhpcy5zY2FsZU5vZGUuc2NhbGUgPSAwO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuc2NhbGVOb2RlKVxyXG4gICAgICAgICAgICAudG8oMC4yLCB7IHNjYWxlOiAxLjQgfSlcclxuICAgICAgICAgICAgLnRvKDAuMSwgeyBzY2FsZTogMS4yIH0pXHJcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG4gICAgICAgIGlmICgoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuVklWT19HQU1FKSkge1xyXG4gICAgICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93U3BvdEJ5UGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuT1BQT19HQU1FKSB7XHJcbiAgICAgICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLmhpZGVCYW5uZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZU5vZGUueCA9IC0zNTU7XHJcbiAgICAgICAgICAgIGxldCBzcCA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwic3NcIiwgY2MuU3ByaXRlRnJhbWUpXHJcbiAgICAgICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dOYXRpdmVBZF9iaWcoe1xyXG4gICAgICAgICAgICAgICAgbm9kZTogdGhpcy5zY2FsZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJuYXRpdmVQb3NcIiksIFwidGl0bGVDb2xvclwiOiBjYy5jb2xvcigyNTUsIDI1NSwgMjU1LCAyNTUsKSxcclxuICAgICAgICAgICAgICAgIFwiZGVzY0NvbG9yXCI6IGNjLmNvbG9yKDI1NSwgMjU1LCAyNTUsIDI1NSwpLCBiZ1BhdGg6ICd0ZXh0dXJlL3NzJywgdGV4dHVyZTogc3AsIHNjYWxlOiAwLjg1LCBpbnNldFRvcDogMTAsIGluc2V0Qm90dG9tOiAxMCwgaW5zZXRMZWZ0OiAxMCwgaW5zZXRSaWdodDogMTBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dCYW5uZXJCeUJvdHRvbSgpO1xyXG5cclxuICAgICAgICAvLyBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuVklWT19HQU1FKSB7XHJcbiAgICAgICAgLy8gICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dTcG90QnlGaW5pc2goKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgaW5pdEJ0blN0YXRlKCkge1xyXG4gICAgICAgIC8vIGlmIChjb2Nvc3ouZGF0YU1nci5BdWRpb09uKSB7XHJcbiAgICAgICAgbGV0IHggPSBjb2Nvc3ouZGF0YU1nci5BdWRpb09uID09IHRydWUgPyAyMDQgOiAxMDA7XHJcbiAgICAgICAgbGV0IHBvcyA9IGNjLnYyKHgsIDApXHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLmJ0bk11c2ljLmdldENoaWxkQnlOYW1lKFwic2V0X2J0blwiKTtcclxuICAgICAgICBpZiAobm9kZS54ICE9IHgpIHtcclxuICAgICAgICAgICAgY2MudHdlZW4obm9kZSlcclxuICAgICAgICAgICAgICAgIC50bygwLjIsIHsgcG9zaXRpb246IHBvcyB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBsZXQgeDIgPSBjb2Nvc3ouZGF0YU1nci5BdWRpb0VmZmVjdE9uID09IHRydWUgPyAyMDQgOiAxMDA7XHJcbiAgICAgICAgbGV0IHBvczIgPSBjYy52Mih4MiwgMClcclxuICAgICAgICBsZXQgbm9kZTIgPSB0aGlzLmJ0bkVmZmVjdC5nZXRDaGlsZEJ5TmFtZShcInNldF9idG5cIik7XHJcbiAgICAgICAgaWYgKG5vZGUyLnggIT0geDIpIHtcclxuICAgICAgICAgICAgY2MudHdlZW4obm9kZTIpXHJcbiAgICAgICAgICAgICAgICAudG8oMC4yLCB7IHBvc2l0aW9uOiBwb3MyIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgeDMgPSBjb2Nvc3ouZGF0YU1nci5TaG9ja09uID09IHRydWUgPyAyMDQgOiAxMDA7XHJcbiAgICAgICAgbGV0IHBvczMgPSBjYy52Mih4MywgMClcclxuICAgICAgICBsZXQgbm9kZTMgPSB0aGlzLmJ0blNob3JrLmdldENoaWxkQnlOYW1lKFwic2V0X2J0blwiKTtcclxuICAgICAgICBpZiAobm9kZTMueCAhPSB4Mykge1xyXG4gICAgICAgICAgICBjYy50d2Vlbihub2RlMylcclxuICAgICAgICAgICAgICAgIC50bygwLjIsIHsgcG9zaXRpb246IHBvczMgfSlcclxuICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB0aGlzLmJ0bk11c2ljLmdldENoaWxkQnlOYW1lKFwiYnRuX29uXCIpLmFjdGl2ZSA9IGNvY29zei5kYXRhTWdyLkF1ZGlvT247XHJcbiAgICAgICAgLy8gdGhpcy5idG5NdXNpYy5nZXRDaGlsZEJ5TmFtZShcImJ0bl9vZmZcIikuYWN0aXZlID0gIWNvY29zei5kYXRhTWdyLkF1ZGlvT247XHJcblxyXG4gICAgICAgIC8vIHRoaXMuYnRuRWZmZWN0LmdldENoaWxkQnlOYW1lKFwiYnRuX29uXCIpLmFjdGl2ZSA9IGNvY29zei5kYXRhTWdyLkF1ZGlvRWZmZWN0T247XHJcbiAgICAgICAgLy8gdGhpcy5idG5FZmZlY3QuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fb2ZmXCIpLmFjdGl2ZSA9ICFjb2Nvc3ouZGF0YU1nci5BdWRpb0VmZmVjdE9uO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmJ0blNob3JrLmdldENoaWxkQnlOYW1lKFwiYnRuX29uXCIpLmFjdGl2ZSA9IGNvY29zei5kYXRhTWdyLlNob2NrT247XHJcbiAgICAgICAgLy8gdGhpcy5idG5TaG9yay5nZXRDaGlsZEJ5TmFtZShcImJ0bl9vZmZcIikuYWN0aXZlID0gIWNvY29zei5kYXRhTWdyLlNob2NrT247XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uQmFjaygpIHtcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5zY2FsZU5vZGUpXHJcbiAgICAgICAgICAgIC50bygwLjIsIHsgc2NhbGU6IDAgfSlcclxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuc2hvd01vcmVHYW1lQnlCYW5uZXIoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhZ2UuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25DbG9zZSgpIHtcclxuICAgICAgICBjYy5nYW1lLnRhcmdldE9mZih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGNjLmdhbWUudGFyZ2V0T2ZmKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIF9nZXRSYW5Eb20oKSB7XHJcbiAgICAgICAgbGV0IG51bSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgaWYgKG51bSA+IDAuOCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobnVtID4gMC42NSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobnVtID4gMC41KSB7XHJcbiAgICAgICAgICAgIHJldHVybiAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChudW0gPiAwLjMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG51bSA+IDAuMikge1xyXG4gICAgICAgICAgICByZXR1cm4gNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobnVtID4gMC4xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChudW0gPiAwLjAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA2O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChudW0gPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA3O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuIl19