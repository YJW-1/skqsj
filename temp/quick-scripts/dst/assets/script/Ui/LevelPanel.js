
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Ui/LevelPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4f285Kof6VFDIoHLLhGT4jk', 'LevelPanel');
// script/Ui/LevelPanel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIPage_1 = require("./UIPage");
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var LevelItem_1 = require("./LevelItem");
var Msg_1 = require("../Framework/Msg");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LevelPanel = /** @class */ (function (_super) {
    __extends(LevelPanel, _super);
    function LevelPanel() {
        var _this = _super.call(this) || this;
        /**返回按钮 */
        _this.Back = null;
        /**关卡Item的父节点 */
        _this.content = null;
        _this.ScaleNode = null;
        _this.BtnVideo = null;
        _this.node = null;
        // private role: cc.Node = null;
        // private bee: cc.Node = null;
        // private bee2: cc.Node = null;
        // private bee3: cc.Node = null;
        // private dragon: dragonBones.ArmatureDisplay = null;
        _this.PageView = null;
        _this._init();
        return _this;
    }
    LevelPanel.prototype._init = function () {
        var Game = CocosZ_1.cocosz.resMgr.getRes(Constant_1.PanelName.LevelPanel, cc.Prefab);
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
    LevelPanel.prototype._onLoad = function () {
        // this.BtnVideo = cc.find("Canvas/ui/LevelPanel/ScaleNode/BtnVideo");
        this.Back = cc.find("Canvas/ui/LevelPanel/ScaleNode/Back");
        this.content = cc.find("Canvas/ui/LevelPanel/ScaleNode/PageView/view/content");
        this.ScaleNode = cc.find("Canvas/ui/LevelPanel/ScaleNode");
        // this.role = cc.find("Canvas/ui/LevelPanel/ScaleNode/role");
        // this.bee = cc.find("Canvas/ui/LevelPanel/ScaleNode/propHoneybee");
        // this.bee2 = cc.find("Canvas/ui/LevelPanel/ScaleNode/propHoneybee2");
        // this.bee3 = cc.find("Canvas/ui/LevelPanel/ScaleNode/propHoneybee3");
        // this.dragon = this.role.getComponent(dragonBones.ArmatureDisplay);
        this.PageView = this.ScaleNode.getChildByName("PageView").getComponent(cc.PageView);
        cc.director.getScheduler().enableForTarget(this);
        this._Start();
    };
    LevelPanel.prototype._Start = function () {
        // cc.log(this.Back)
        this.Back.on(cc.Node.EventType.TOUCH_END, this.OnBack, this);
        // this.BtnVideo.on(cc.Node.EventType.TOUCH_END, this.onGetCoin, this);
        this._ClonItem();
    };
    LevelPanel.prototype._UpdateIndicator = function () {
    };
    LevelPanel.prototype.OnBack = function () {
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        CocosZ_1.cocosz.unscheduleAllCallbacks();
        CocosZ_1.cocosz.sceneMgr.loadScene("Home", function () {
            CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UiHome);
        });
        // lieyou_SdkManager.showBannerByBottom();
        // this.close();
    };
    LevelPanel.prototype.onGetCoin = function () {
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        Msg_1.default.Show("视频播放失败!");
        return;
    };
    LevelPanel.prototype.onOpen = function () {
        var num = Math.floor(CocosZ_1.cocosz.dataMgr.MaxUnlockLevelCount / 20) > 6 ? 6 : Math.floor(CocosZ_1.cocosz.dataMgr.MaxUnlockLevelCount / 20);
        cc.log(CocosZ_1.cocosz.dataMgr.MaxLevelId, CocosZ_1.cocosz.dataMgr.MaxUnlockLevelCount, num);
        this.PageView.scrollToPage(num, 1);
        CocosZ_1.cocosz.unscheduleAllCallbacks();
        // num = Math.ceil(Math.random() + 1)
        // num = 1
        // if (Math.random() > 0.7) {
        num = 2;
        // }
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            lieyou_SdkManager.hideBanner();
        }
        else if ((cc.sys.platform === cc.sys.VIVO_GAME || cc.sys.platform === cc.sys.OPPO_GAME)) {
            lieyou_SdkManager.hideBanner();
        }
        // let a = cc.tween().sequence(
        //     cc.tween().parallel(
        //         cc.tween().call(() => {
        //             this.dragon.playAnimation("deng", num)
        //         }),
        //         cc.tween().by(0.5 * num, { position: cc.v2(0, 50) })
        //     ),
        //     cc.tween().call(() => {
        //         this.dragon.playAnimation("idle", 0)
        //     }),
        //     cc.tween().by(4, { position: cc.v2(400, -50) })
        // )
        // let b = cc.tween().sequence(
        //     cc.tween().parallel(
        //         cc.tween().call(() => {
        //             this.dragon.playAnimation("deng", num)
        //         }),
        //         cc.tween().by(0.5 * num, { position: cc.v2(0, 50) })
        //     ),
        //     cc.tween().call(() => {
        //         this.dragon.playAnimation("idle", 0)
        //     }),
        //     cc.tween().by(4, { position: cc.v2(-400, -50) })
        // )
        // let c = cc.tween().sequence(
        //     cc.tween().call(() => {
        //         this.role.scaleX = 1;
        //     }),
        //     cc.tween().repeat(5, a),
        //     cc.tween().call(() => {
        //         this.role.setPosition(cc.v2(911, 150));
        //         this.role.scaleX = -1;
        //     }),
        //     cc.tween().repeat(5, b)
        // )
        // cc.tween(this.role)
        //     .repeatForever(c)
        //     .start()
        // let d = cc.tween().sequence(
        //     cc.tween().repeat(10, cc.tween().by(2.5, { position: cc.v2(200, 150 * Math.random() - 75), angle: 100 * Math.random() - 50 })),
        //     cc.tween().call(() => {
        //         this.bee.setPosition(cc.v2(1110, 250));
        //         this.bee.scaleX *= -1;
        //     }),
        //     cc.tween().repeat(10, cc.tween().by(2.7, { position: cc.v2(-200, 150 * Math.random() - 75), angle: 100 * Math.random() - 50 })),
        //     cc.tween().call(() => {
        //         this.bee.setPosition(cc.v2(-946, 250));
        //         this.bee.scaleX *= -1;
        //         this.bee.y += Math.random() * 50 - 25;
        //         this.bee.x += Math.random() * 50 - 150;
        //     }),
        // )
        // let e = cc.tween().sequence(
        //     cc.tween().repeat(10, cc.tween().by(2.5, { position: cc.v2(200, 150 * Math.random() - 75), angle: 100 * Math.random() - 50 })),
        //     cc.tween().call(() => {
        //         this.bee2.setPosition(cc.v2(1110, 250));
        //         this.bee2.scaleX *= -1;
        //     }),
        //     cc.tween().repeat(10, cc.tween().by(2.7, { position: cc.v2(-200, 150 * Math.random() - 75), angle: 100 * Math.random() - 50 })),
        //     cc.tween().call(() => {
        //         this.bee2.setPosition(cc.v2(-946, 250));
        //         this.bee2.scaleX *= -1;
        //         this.bee2.y += Math.random() * 50 - 25;
        //         this.bee2.x += Math.random() * 50 - 150;
        //     }),
        // )
        // let f = cc.tween().sequence(
        //     cc.tween().repeat(10, cc.tween().by(2.5, { position: cc.v2(200, 150 * Math.random() - 75), angle: 100 * Math.random() - 50 })),
        //     cc.tween().call(() => {
        //         this.bee3.setPosition(cc.v2(1110, 250));
        //         this.bee3.scaleX *= -1;
        //     }),
        //     cc.tween().repeat(10, cc.tween().by(2.7, { position: cc.v2(-200, 150 * Math.random() - 75), angle: 100 * Math.random() - 50 })),
        //     cc.tween().call(() => {
        //         this.bee3.setPosition(cc.v2(-946, 250));
        //         this.bee3.scaleX *= -1;
        //         this.bee3.y += Math.random() * 50 - 25;
        //         this.bee3.x += Math.random() * 50 - 150;
        //     }),
        // )
        // cc.tween(this.bee)
        //     .repeatForever(d)
        //     .start()
        // // let node = cc.instantiate(this.bee);
        // // this.bee.parent.addChild(node);
        // // node.setPosition(this.bee.getPosition())
        // this.bee2.y += Math.random() * 50 - 25;
        // this.bee2.x += Math.random() * 50 - 150;
        // cc.tween(this.bee2)
        //     .repeatForever(e)
        //     // .by(20, { position: cc.v2(1500, 0) })
        //     .start()
        // // let node2 = cc.instantiate(this.bee);
        // // this.bee.parent.addChild(node2);
        // // node2.setPosition(this.bee.getPosition())
        // this.bee3.y += Math.random() * 50 - 25;
        // this.bee3.x += Math.random() * 50 - 150;
        // cc.tween(this.bee3)
        //     .repeat(10, cc.tween().by(2.7, { position: cc.v2(200, 150 * Math.random() - 75), angle: 100 * Math.random() - 50 }))
        //     .repeatForever(f)
        //     .start()
    };
    LevelPanel.prototype._ClonItem = function () {
        var a = CocosZ_1.cocosz.resMgr.getRes("LevelItem", cc.Prefab);
        var num = 0;
        for (var _i = 0, _a = this.content.children; _i < _a.length; _i++) {
            var child = _a[_i];
            for (var j = 0 + 20 * num; j < 20 + 20 * num; j++) {
                var node = cc.instantiate(a);
                node.getComponent(LevelItem_1.default).ID = j;
                child.addChild(node);
            }
            num++;
        }
    };
    LevelPanel.prototype.onClose = function () {
        cc.director.getScheduler().unscheduleAllForTarget(this);
        cc.game.targetOff(this);
    };
    LevelPanel.prototype.onDestroy = function () {
        cc.director.getScheduler().unscheduleAllForTarget(this);
        cc.game.targetOff(this);
    };
    LevelPanel = __decorate([
        ccclass
    ], LevelPanel);
    return LevelPanel;
}(UIPage_1.default));
exports.default = LevelPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxVaVxcTGV2ZWxQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBQzlCLDhDQUE2QztBQUM3QyxrREFBa0Y7QUFDbEYseUNBQW9DO0FBQ3BDLHdDQUFtQztBQUc3QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFNO0lBaUIxQztRQUFBLFlBQ0ksaUJBQU8sU0FFVjtRQW5CRCxVQUFVO1FBQ0YsVUFBSSxHQUFZLElBQUksQ0FBQztRQUM3QixnQkFBZ0I7UUFDUixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBQzdCLGdDQUFnQztRQUNoQywrQkFBK0I7UUFDL0IsZ0NBQWdDO1FBQ2hDLGdDQUFnQztRQUVoQyxzREFBc0Q7UUFDOUMsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFJakMsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDOztJQUNqQixDQUFDO0lBQ08sMEJBQUssR0FBYjtRQUNJLElBQUksSUFBSSxHQUFjLGVBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLG9CQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RSxJQUFJLElBQUksRUFBRTtZQUNOLElBQUksSUFBSSxHQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekMsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDcEIs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LENBQUMsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hCO1lBQ0QsR0FBRyxFQUFFLENBQUM7U0FDVDtJQUNMLENBQUM7SUFDUyw0QkFBTyxHQUFqQjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVTLDhCQUFTLEdBQW5CO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RCxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBOVBnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBK1A5QjtJQUFELGlCQUFDO0NBL1BELEFBK1BDLENBL1B1QyxnQkFBTSxHQStQN0M7a0JBL1BvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJUGFnZSBmcm9tIFwiLi9VSVBhZ2VcIjtcclxuaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuaW1wb3J0IENvbnN0YW50LCB7IFBhbmVsTmFtZSwgTGV2ZWxpdGVtLCBQYWdlTmFtZSwgfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvbnN0YW50XCI7XHJcbmltcG9ydCBMZXZlbEl0ZW0gZnJvbSBcIi4vTGV2ZWxJdGVtXCI7XHJcbmltcG9ydCBNc2cgZnJvbSBcIi4uL0ZyYW1ld29yay9Nc2dcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGV2ZWxQYW5lbCBleHRlbmRzIFVJUGFnZSB7XHJcbiAgICAvKirov5Tlm57mjInpkq4gKi9cclxuICAgIHByaXZhdGUgQmFjazogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvKirlhbPljaFJdGVt55qE54i26IqC54K5ICovXHJcbiAgICBwcml2YXRlIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgU2NhbGVOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgQnRuVmlkZW86IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBub2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgcm9sZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIGJlZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIGJlZTI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBiZWUzOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICAvLyBwcml2YXRlIGRyYWdvbjogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5ID0gbnVsbDtcclxuICAgIHByaXZhdGUgUGFnZVZpZXc6IGNjLlBhZ2VWaWV3ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX2luaXQoKSB7XHJcbiAgICAgICAgbGV0IEdhbWU6IGNjLlByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFBhbmVsTmFtZS5MZXZlbFBhbmVsLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgIGlmIChHYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUoR2FtZSk7XHJcbiAgICAgICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWdlID0gbm9kZTsgICBcclxuICAgICAgICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL3VpXCIpLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSBjYy5WZWMyLlpFUk87XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vbkxvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgX29uTG9hZCgpIHtcclxuICAgICAgICAvLyB0aGlzLkJ0blZpZGVvID0gY2MuZmluZChcIkNhbnZhcy91aS9MZXZlbFBhbmVsL1NjYWxlTm9kZS9CdG5WaWRlb1wiKTtcclxuICAgICAgICB0aGlzLkJhY2sgPSBjYy5maW5kKFwiQ2FudmFzL3VpL0xldmVsUGFuZWwvU2NhbGVOb2RlL0JhY2tcIik7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY2MuZmluZChcIkNhbnZhcy91aS9MZXZlbFBhbmVsL1NjYWxlTm9kZS9QYWdlVmlldy92aWV3L2NvbnRlbnRcIik7XHJcbiAgICAgICAgdGhpcy5TY2FsZU5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL3VpL0xldmVsUGFuZWwvU2NhbGVOb2RlXCIpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnJvbGUgPSBjYy5maW5kKFwiQ2FudmFzL3VpL0xldmVsUGFuZWwvU2NhbGVOb2RlL3JvbGVcIik7XHJcbiAgICAgICAgLy8gdGhpcy5iZWUgPSBjYy5maW5kKFwiQ2FudmFzL3VpL0xldmVsUGFuZWwvU2NhbGVOb2RlL3Byb3BIb25leWJlZVwiKTtcclxuICAgICAgICAvLyB0aGlzLmJlZTIgPSBjYy5maW5kKFwiQ2FudmFzL3VpL0xldmVsUGFuZWwvU2NhbGVOb2RlL3Byb3BIb25leWJlZTJcIik7XHJcbiAgICAgICAgLy8gdGhpcy5iZWUzID0gY2MuZmluZChcIkNhbnZhcy91aS9MZXZlbFBhbmVsL1NjYWxlTm9kZS9wcm9wSG9uZXliZWUzXCIpO1xyXG4gICAgICAgIC8vIHRoaXMuZHJhZ29uID0gdGhpcy5yb2xlLmdldENvbXBvbmVudChkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkpO1xyXG4gICAgICAgIHRoaXMuUGFnZVZpZXcgPSB0aGlzLlNjYWxlTm9kZS5nZXRDaGlsZEJ5TmFtZShcIlBhZ2VWaWV3XCIpLmdldENvbXBvbmVudChjYy5QYWdlVmlldyk7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkuZW5hYmxlRm9yVGFyZ2V0KHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9TdGFydCgpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfU3RhcnQoKSB7XHJcbiAgICAgICAgLy8gY2MubG9nKHRoaXMuQmFjaylcclxuICAgICAgICB0aGlzLkJhY2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLk9uQmFjaywgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5CdG5WaWRlby5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25HZXRDb2luLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fQ2xvbkl0ZW0oKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX1VwZGF0ZUluZGljYXRvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIE9uQmFjaygpIHtcclxuICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheWJ0bkVmZmVjdCgpO1xyXG4gICAgICAgIGNvY29zei51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcblxyXG4gICAgICAgIGNvY29zei5zY2VuZU1nci5sb2FkU2NlbmUoXCJIb21lXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYWdlKFBhZ2VOYW1lLlVpSG9tZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAvLyBsaWV5b3VfU2RrTWFuYWdlci5zaG93QmFubmVyQnlCb3R0b20oKTtcclxuICAgICAgICAvLyB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25HZXRDb2luKCkge1xyXG4gICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5YnRuRWZmZWN0KCk7XHJcbiAgICAgICAgTXNnLlNob3coXCLop4bpopHmkq3mlL7lpLHotKUhXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25PcGVuKCkge1xyXG4gICAgICAgIGxldCBudW0gPSBNYXRoLmZsb29yKGNvY29zei5kYXRhTWdyLk1heFVubG9ja0xldmVsQ291bnQgLyAyMCkgPiA2ID8gNiA6IE1hdGguZmxvb3IoY29jb3N6LmRhdGFNZ3IuTWF4VW5sb2NrTGV2ZWxDb3VudCAvIDIwKTtcclxuICAgICAgICBjYy5sb2coY29jb3N6LmRhdGFNZ3IuTWF4TGV2ZWxJZCwgY29jb3N6LmRhdGFNZ3IuTWF4VW5sb2NrTGV2ZWxDb3VudCwgbnVtKTtcclxuICAgICAgICB0aGlzLlBhZ2VWaWV3LnNjcm9sbFRvUGFnZShudW0sIDEpO1xyXG4gICAgICAgIGNvY29zei51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgLy8gbnVtID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKyAxKVxyXG4gICAgICAgIC8vIG51bSA9IDFcclxuICAgICAgICAvLyBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNykge1xyXG4gICAgICAgIG51bSA9IDI7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5oaWRlQmFubmVyKClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLlZJVk9fR0FNRSB8fCBjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5PUFBPX0dBTUUpKSB7XHJcbiAgICAgICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLmhpZGVCYW5uZXIoKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBsZXQgYSA9IGNjLnR3ZWVuKCkuc2VxdWVuY2UoXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkucGFyYWxsZWwoXHJcbiAgICAgICAgLy8gICAgICAgICBjYy50d2VlbigpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuZHJhZ29uLnBsYXlBbmltYXRpb24oXCJkZW5nXCIsIG51bSlcclxuICAgICAgICAvLyAgICAgICAgIH0pLFxyXG4gICAgICAgIC8vICAgICAgICAgY2MudHdlZW4oKS5ieSgwLjUgKiBudW0sIHsgcG9zaXRpb246IGNjLnYyKDAsIDUwKSB9KVxyXG4gICAgICAgIC8vICAgICApLFxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5kcmFnb24ucGxheUFuaW1hdGlvbihcImlkbGVcIiwgMClcclxuICAgICAgICAvLyAgICAgfSksXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkuYnkoNCwgeyBwb3NpdGlvbjogY2MudjIoNDAwLCAtNTApIH0pXHJcbiAgICAgICAgLy8gKVxyXG4gICAgICAgIC8vIGxldCBiID0gY2MudHdlZW4oKS5zZXF1ZW5jZShcclxuICAgICAgICAvLyAgICAgY2MudHdlZW4oKS5wYXJhbGxlbChcclxuICAgICAgICAvLyAgICAgICAgIGNjLnR3ZWVuKCkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5kcmFnb24ucGxheUFuaW1hdGlvbihcImRlbmdcIiwgbnVtKVxyXG4gICAgICAgIC8vICAgICAgICAgfSksXHJcbiAgICAgICAgLy8gICAgICAgICBjYy50d2VlbigpLmJ5KDAuNSAqIG51bSwgeyBwb3NpdGlvbjogY2MudjIoMCwgNTApIH0pXHJcbiAgICAgICAgLy8gICAgICksXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmRyYWdvbi5wbGF5QW5pbWF0aW9uKFwiaWRsZVwiLCAwKVxyXG4gICAgICAgIC8vICAgICB9KSxcclxuICAgICAgICAvLyAgICAgY2MudHdlZW4oKS5ieSg0LCB7IHBvc2l0aW9uOiBjYy52MigtNDAwLCAtNTApIH0pXHJcbiAgICAgICAgLy8gKVxyXG5cclxuICAgICAgICAvLyBsZXQgYyA9IGNjLnR3ZWVuKCkuc2VxdWVuY2UoXHJcblxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5yb2xlLnNjYWxlWCA9IDE7XHJcbiAgICAgICAgLy8gICAgIH0pLFxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLnJlcGVhdCg1LCBhKSxcclxuICAgICAgICAvLyAgICAgY2MudHdlZW4oKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucm9sZS5zZXRQb3NpdGlvbihjYy52Mig5MTEsIDE1MCkpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5yb2xlLnNjYWxlWCA9IC0xO1xyXG4gICAgICAgIC8vICAgICB9KSxcclxuXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkucmVwZWF0KDUsIGIpXHJcbiAgICAgICAgLy8gKVxyXG5cclxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLnJvbGUpXHJcbiAgICAgICAgLy8gICAgIC5yZXBlYXRGb3JldmVyKGMpXHJcbiAgICAgICAgLy8gICAgIC5zdGFydCgpXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIGxldCBkID0gY2MudHdlZW4oKS5zZXF1ZW5jZShcclxuXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkucmVwZWF0KDEwLCBjYy50d2VlbigpLmJ5KDIuNSwgeyBwb3NpdGlvbjogY2MudjIoMjAwLCAxNTAgKiBNYXRoLnJhbmRvbSgpIC0gNzUpLCBhbmdsZTogMTAwICogTWF0aC5yYW5kb20oKSAtIDUwIH0pKSxcclxuXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmJlZS5zZXRQb3NpdGlvbihjYy52MigxMTEwLCAyNTApKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYmVlLnNjYWxlWCAqPSAtMTtcclxuICAgICAgICAvLyAgICAgfSksXHJcblxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLnJlcGVhdCgxMCwgY2MudHdlZW4oKS5ieSgyLjcsIHsgcG9zaXRpb246IGNjLnYyKC0yMDAsIDE1MCAqIE1hdGgucmFuZG9tKCkgLSA3NSksIGFuZ2xlOiAxMDAgKiBNYXRoLnJhbmRvbSgpIC0gNTAgfSkpLFxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5iZWUuc2V0UG9zaXRpb24oY2MudjIoLTk0NiwgMjUwKSk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmJlZS5zY2FsZVggKj0gLTE7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmJlZS55ICs9IE1hdGgucmFuZG9tKCkgKiA1MCAtIDI1O1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5iZWUueCArPSBNYXRoLnJhbmRvbSgpICogNTAgLSAxNTA7XHJcbiAgICAgICAgLy8gICAgIH0pLFxyXG4gICAgICAgIC8vIClcclxuXHJcblxyXG5cclxuICAgICAgICAvLyBsZXQgZSA9IGNjLnR3ZWVuKCkuc2VxdWVuY2UoXHJcblxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLnJlcGVhdCgxMCwgY2MudHdlZW4oKS5ieSgyLjUsIHsgcG9zaXRpb246IGNjLnYyKDIwMCwgMTUwICogTWF0aC5yYW5kb20oKSAtIDc1KSwgYW5nbGU6IDEwMCAqIE1hdGgucmFuZG9tKCkgLSA1MCB9KSksXHJcblxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5iZWUyLnNldFBvc2l0aW9uKGNjLnYyKDExMTAsIDI1MCkpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5iZWUyLnNjYWxlWCAqPSAtMTtcclxuICAgICAgICAvLyAgICAgfSksXHJcblxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLnJlcGVhdCgxMCwgY2MudHdlZW4oKS5ieSgyLjcsIHsgcG9zaXRpb246IGNjLnYyKC0yMDAsIDE1MCAqIE1hdGgucmFuZG9tKCkgLSA3NSksIGFuZ2xlOiAxMDAgKiBNYXRoLnJhbmRvbSgpIC0gNTAgfSkpLFxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5iZWUyLnNldFBvc2l0aW9uKGNjLnYyKC05NDYsIDI1MCkpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5iZWUyLnNjYWxlWCAqPSAtMTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYmVlMi55ICs9IE1hdGgucmFuZG9tKCkgKiA1MCAtIDI1O1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5iZWUyLnggKz0gTWF0aC5yYW5kb20oKSAqIDUwIC0gMTUwO1xyXG4gICAgICAgIC8vICAgICB9KSxcclxuICAgICAgICAvLyApXHJcblxyXG4gICAgICAgIC8vIGxldCBmID0gY2MudHdlZW4oKS5zZXF1ZW5jZShcclxuXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkucmVwZWF0KDEwLCBjYy50d2VlbigpLmJ5KDIuNSwgeyBwb3NpdGlvbjogY2MudjIoMjAwLCAxNTAgKiBNYXRoLnJhbmRvbSgpIC0gNzUpLCBhbmdsZTogMTAwICogTWF0aC5yYW5kb20oKSAtIDUwIH0pKSxcclxuXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmJlZTMuc2V0UG9zaXRpb24oY2MudjIoMTExMCwgMjUwKSk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmJlZTMuc2NhbGVYICo9IC0xO1xyXG4gICAgICAgIC8vICAgICB9KSxcclxuXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkucmVwZWF0KDEwLCBjYy50d2VlbigpLmJ5KDIuNywgeyBwb3NpdGlvbjogY2MudjIoLTIwMCwgMTUwICogTWF0aC5yYW5kb20oKSAtIDc1KSwgYW5nbGU6IDEwMCAqIE1hdGgucmFuZG9tKCkgLSA1MCB9KSksXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmJlZTMuc2V0UG9zaXRpb24oY2MudjIoLTk0NiwgMjUwKSk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmJlZTMuc2NhbGVYICo9IC0xO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5iZWUzLnkgKz0gTWF0aC5yYW5kb20oKSAqIDUwIC0gMjU7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmJlZTMueCArPSBNYXRoLnJhbmRvbSgpICogNTAgLSAxNTA7XHJcbiAgICAgICAgLy8gICAgIH0pLFxyXG4gICAgICAgIC8vIClcclxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLmJlZSlcclxuXHJcblxyXG4gICAgICAgIC8vICAgICAucmVwZWF0Rm9yZXZlcihkKVxyXG4gICAgICAgIC8vICAgICAuc3RhcnQoKVxyXG5cclxuICAgICAgICAvLyAvLyBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmVlKTtcclxuICAgICAgICAvLyAvLyB0aGlzLmJlZS5wYXJlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgLy8gLy8gbm9kZS5zZXRQb3NpdGlvbih0aGlzLmJlZS5nZXRQb3NpdGlvbigpKVxyXG4gICAgICAgIC8vIHRoaXMuYmVlMi55ICs9IE1hdGgucmFuZG9tKCkgKiA1MCAtIDI1O1xyXG4gICAgICAgIC8vIHRoaXMuYmVlMi54ICs9IE1hdGgucmFuZG9tKCkgKiA1MCAtIDE1MDtcclxuXHJcbiAgICAgICAgLy8gY2MudHdlZW4odGhpcy5iZWUyKVxyXG5cclxuXHJcbiAgICAgICAgLy8gICAgIC5yZXBlYXRGb3JldmVyKGUpXHJcbiAgICAgICAgLy8gICAgIC8vIC5ieSgyMCwgeyBwb3NpdGlvbjogY2MudjIoMTUwMCwgMCkgfSlcclxuXHJcbiAgICAgICAgLy8gICAgIC5zdGFydCgpXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIC8vIGxldCBub2RlMiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmVlKTtcclxuICAgICAgICAvLyAvLyB0aGlzLmJlZS5wYXJlbnQuYWRkQ2hpbGQobm9kZTIpO1xyXG4gICAgICAgIC8vIC8vIG5vZGUyLnNldFBvc2l0aW9uKHRoaXMuYmVlLmdldFBvc2l0aW9uKCkpXHJcbiAgICAgICAgLy8gdGhpcy5iZWUzLnkgKz0gTWF0aC5yYW5kb20oKSAqIDUwIC0gMjU7XHJcbiAgICAgICAgLy8gdGhpcy5iZWUzLnggKz0gTWF0aC5yYW5kb20oKSAqIDUwIC0gMTUwO1xyXG5cclxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLmJlZTMpXHJcbiAgICAgICAgLy8gICAgIC5yZXBlYXQoMTAsIGNjLnR3ZWVuKCkuYnkoMi43LCB7IHBvc2l0aW9uOiBjYy52MigyMDAsIDE1MCAqIE1hdGgucmFuZG9tKCkgLSA3NSksIGFuZ2xlOiAxMDAgKiBNYXRoLnJhbmRvbSgpIC0gNTAgfSkpXHJcblxyXG4gICAgICAgIC8vICAgICAucmVwZWF0Rm9yZXZlcihmKVxyXG4gICAgICAgIC8vICAgICAuc3RhcnQoKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX0Nsb25JdGVtKCkge1xyXG4gICAgICAgIGxldCBhOiBjYy5QcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcIkxldmVsSXRlbVwiLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgIGxldCBudW0gPSAwXHJcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5jb250ZW50LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwICsgMjAgKiBudW07IGogPCAyMCArIDIwICogbnVtOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUoYSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChMZXZlbEl0ZW0pLklEID0gajtcclxuICAgICAgICAgICAgICAgIGNoaWxkLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG51bSsrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBvbkNsb3NlKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLnVuc2NoZWR1bGVBbGxGb3JUYXJnZXQodGhpcyk7XHJcbiAgICAgICAgY2MuZ2FtZS50YXJnZXRPZmYodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS51bnNjaGVkdWxlQWxsRm9yVGFyZ2V0KHRoaXMpO1xyXG4gICAgICAgIGNjLmdhbWUudGFyZ2V0T2ZmKHRoaXMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==