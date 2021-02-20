
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
        this.BtnVideo = cc.find("Canvas/ui/LevelPanel/ScaleNode/BtnVideo");
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
        this.BtnVideo.on(cc.Node.EventType.TOUCH_END, this.onGetCoin, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxVaVxcTGV2ZWxQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThCO0FBQzlCLDhDQUE2QztBQUM3QyxrREFBa0Y7QUFDbEYseUNBQW9DO0FBQ3BDLHdDQUFtQztBQUc3QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFNO0lBaUIxQztRQUFBLFlBQ0ksaUJBQU8sU0FFVjtRQW5CRCxVQUFVO1FBQ0YsVUFBSSxHQUFZLElBQUksQ0FBQztRQUM3QixnQkFBZ0I7UUFDUixhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBQzdCLGdDQUFnQztRQUNoQywrQkFBK0I7UUFDL0IsZ0NBQWdDO1FBQ2hDLGdDQUFnQztRQUVoQyxzREFBc0Q7UUFDOUMsY0FBUSxHQUFnQixJQUFJLENBQUM7UUFJakMsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDOztJQUNqQixDQUFDO0lBQ08sMEJBQUssR0FBYjtRQUNJLElBQUksSUFBSSxHQUFjLGVBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLG9CQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RSxJQUFJLElBQUksRUFBRTtZQUNOLElBQUksSUFBSSxHQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekMsSUFBSSxJQUFJLEVBQUU7Z0JBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDcEIs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VixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDL0MsSUFBSSxJQUFJLEdBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBUyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDcEMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN4QjtZQUNELEdBQUcsRUFBRSxDQUFDO1NBQ1Q7SUFDTCxDQUFDO0lBQ1MsNEJBQU8sR0FBakI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFUyw4QkFBUyxHQUFuQjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEQsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQTlQZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQStQOUI7SUFBRCxpQkFBQztDQS9QRCxBQStQQyxDQS9QdUMsZ0JBQU0sR0ErUDdDO2tCQS9Qb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSVBhZ2UgZnJvbSBcIi4vVUlQYWdlXCI7XHJcbmltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29jb3NaXCI7XHJcbmltcG9ydCBDb25zdGFudCwgeyBQYW5lbE5hbWUsIExldmVsaXRlbSwgUGFnZU5hbWUsIH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG5pbXBvcnQgTGV2ZWxJdGVtIGZyb20gXCIuL0xldmVsSXRlbVwiO1xyXG5pbXBvcnQgTXNnIGZyb20gXCIuLi9GcmFtZXdvcmsvTXNnXCI7XHJcblxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExldmVsUGFuZWwgZXh0ZW5kcyBVSVBhZ2Uge1xyXG4gICAgLyoq6L+U5Zue5oyJ6ZKuICovXHJcbiAgICBwcml2YXRlIEJhY2s6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLyoq5YWz5Y2hSXRlbeeahOeItuiKgueCuSAqL1xyXG4gICAgcHJpdmF0ZSBjb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIFNjYWxlTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIEJ0blZpZGVvOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgbm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvLyBwcml2YXRlIHJvbGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBiZWU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy8gcHJpdmF0ZSBiZWUyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIC8vIHByaXZhdGUgYmVlMzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgLy8gcHJpdmF0ZSBkcmFnb246IGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSA9IG51bGw7XHJcbiAgICBwcml2YXRlIFBhZ2VWaWV3OiBjYy5QYWdlVmlldyA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9pbml0KCkge1xyXG4gICAgICAgIGxldCBHYW1lOiBjYy5QcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhQYW5lbE5hbWUuTGV2ZWxQYW5lbCwgY2MuUHJlZmFiKTtcclxuICAgICAgICBpZiAoR2FtZSkge1xyXG4gICAgICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKEdhbWUpO1xyXG4gICAgICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcGFnZSA9IG5vZGU7ICAgXHJcbiAgICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy91aVwiKS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb25Mb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9vbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5CdG5WaWRlbyA9IGNjLmZpbmQoXCJDYW52YXMvdWkvTGV2ZWxQYW5lbC9TY2FsZU5vZGUvQnRuVmlkZW9cIik7XHJcbiAgICAgICAgdGhpcy5CYWNrID0gY2MuZmluZChcIkNhbnZhcy91aS9MZXZlbFBhbmVsL1NjYWxlTm9kZS9CYWNrXCIpO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGNjLmZpbmQoXCJDYW52YXMvdWkvTGV2ZWxQYW5lbC9TY2FsZU5vZGUvUGFnZVZpZXcvdmlldy9jb250ZW50XCIpO1xyXG4gICAgICAgIHRoaXMuU2NhbGVOb2RlID0gY2MuZmluZChcIkNhbnZhcy91aS9MZXZlbFBhbmVsL1NjYWxlTm9kZVwiKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5yb2xlID0gY2MuZmluZChcIkNhbnZhcy91aS9MZXZlbFBhbmVsL1NjYWxlTm9kZS9yb2xlXCIpO1xyXG4gICAgICAgIC8vIHRoaXMuYmVlID0gY2MuZmluZChcIkNhbnZhcy91aS9MZXZlbFBhbmVsL1NjYWxlTm9kZS9wcm9wSG9uZXliZWVcIik7XHJcbiAgICAgICAgLy8gdGhpcy5iZWUyID0gY2MuZmluZChcIkNhbnZhcy91aS9MZXZlbFBhbmVsL1NjYWxlTm9kZS9wcm9wSG9uZXliZWUyXCIpO1xyXG4gICAgICAgIC8vIHRoaXMuYmVlMyA9IGNjLmZpbmQoXCJDYW52YXMvdWkvTGV2ZWxQYW5lbC9TY2FsZU5vZGUvcHJvcEhvbmV5YmVlM1wiKTtcclxuICAgICAgICAvLyB0aGlzLmRyYWdvbiA9IHRoaXMucm9sZS5nZXRDb21wb25lbnQoZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5KTtcclxuICAgICAgICB0aGlzLlBhZ2VWaWV3ID0gdGhpcy5TY2FsZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJQYWdlVmlld1wiKS5nZXRDb21wb25lbnQoY2MuUGFnZVZpZXcpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLmVuYWJsZUZvclRhcmdldCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5fU3RhcnQoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX1N0YXJ0KCkge1xyXG4gICAgICAgIC8vIGNjLmxvZyh0aGlzLkJhY2spXHJcbiAgICAgICAgdGhpcy5CYWNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5PbkJhY2ssIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuQnRuVmlkZW8ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uR2V0Q29pbiwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX0Nsb25JdGVtKCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9VcGRhdGVJbmRpY2F0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBPbkJhY2soKSB7XHJcbiAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlidG5FZmZlY3QoKTtcclxuICAgICAgICBjb2Nvc3oudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG5cclxuICAgICAgICBjb2Nvc3ouc2NlbmVNZ3IubG9hZFNjZW5lKFwiSG9tZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvY29zei51aU1nci5vcGVuUGFnZShQYWdlTmFtZS5VaUhvbWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgLy8gbGlleW91X1Nka01hbmFnZXIuc2hvd0Jhbm5lckJ5Qm90dG9tKCk7XHJcbiAgICAgICAgLy8gdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uR2V0Q29pbigpIHtcclxuICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheWJ0bkVmZmVjdCgpO1xyXG4gICAgICAgIE1zZy5TaG93KFwi6KeG6aKR5pKt5pS+5aSx6LSlIVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uT3BlbigpIHtcclxuICAgICAgICBsZXQgbnVtID0gTWF0aC5mbG9vcihjb2Nvc3ouZGF0YU1nci5NYXhVbmxvY2tMZXZlbENvdW50IC8gMjApID4gNiA/IDYgOiBNYXRoLmZsb29yKGNvY29zei5kYXRhTWdyLk1heFVubG9ja0xldmVsQ291bnQgLyAyMCk7XHJcbiAgICAgICAgY2MubG9nKGNvY29zei5kYXRhTWdyLk1heExldmVsSWQsIGNvY29zei5kYXRhTWdyLk1heFVubG9ja0xldmVsQ291bnQsIG51bSk7XHJcbiAgICAgICAgdGhpcy5QYWdlVmlldy5zY3JvbGxUb1BhZ2UobnVtLCAxKTtcclxuICAgICAgICBjb2Nvc3oudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgIC8vIG51bSA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICsgMSlcclxuICAgICAgICAvLyBudW0gPSAxXHJcbiAgICAgICAgLy8gaWYgKE1hdGgucmFuZG9tKCkgPiAwLjcpIHtcclxuICAgICAgICBudW0gPSAyO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuaGlkZUJhbm5lcigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5WSVZPX0dBTUUgfHwgY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuT1BQT19HQU1FKSkge1xyXG4gICAgICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5oaWRlQmFubmVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLy8gbGV0IGEgPSBjYy50d2VlbigpLnNlcXVlbmNlKFxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLnBhcmFsbGVsKFxyXG4gICAgICAgIC8vICAgICAgICAgY2MudHdlZW4oKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmRyYWdvbi5wbGF5QW5pbWF0aW9uKFwiZGVuZ1wiLCBudW0pXHJcbiAgICAgICAgLy8gICAgICAgICB9KSxcclxuICAgICAgICAvLyAgICAgICAgIGNjLnR3ZWVuKCkuYnkoMC41ICogbnVtLCB7IHBvc2l0aW9uOiBjYy52MigwLCA1MCkgfSlcclxuICAgICAgICAvLyAgICAgKSxcclxuICAgICAgICAvLyAgICAgY2MudHdlZW4oKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuZHJhZ29uLnBsYXlBbmltYXRpb24oXCJpZGxlXCIsIDApXHJcbiAgICAgICAgLy8gICAgIH0pLFxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLmJ5KDQsIHsgcG9zaXRpb246IGNjLnYyKDQwMCwgLTUwKSB9KVxyXG4gICAgICAgIC8vIClcclxuICAgICAgICAvLyBsZXQgYiA9IGNjLnR3ZWVuKCkuc2VxdWVuY2UoXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkucGFyYWxsZWwoXHJcbiAgICAgICAgLy8gICAgICAgICBjYy50d2VlbigpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuZHJhZ29uLnBsYXlBbmltYXRpb24oXCJkZW5nXCIsIG51bSlcclxuICAgICAgICAvLyAgICAgICAgIH0pLFxyXG4gICAgICAgIC8vICAgICAgICAgY2MudHdlZW4oKS5ieSgwLjUgKiBudW0sIHsgcG9zaXRpb246IGNjLnYyKDAsIDUwKSB9KVxyXG4gICAgICAgIC8vICAgICApLFxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5kcmFnb24ucGxheUFuaW1hdGlvbihcImlkbGVcIiwgMClcclxuICAgICAgICAvLyAgICAgfSksXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkuYnkoNCwgeyBwb3NpdGlvbjogY2MudjIoLTQwMCwgLTUwKSB9KVxyXG4gICAgICAgIC8vIClcclxuXHJcbiAgICAgICAgLy8gbGV0IGMgPSBjYy50d2VlbigpLnNlcXVlbmNlKFxyXG5cclxuICAgICAgICAvLyAgICAgY2MudHdlZW4oKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucm9sZS5zY2FsZVggPSAxO1xyXG4gICAgICAgIC8vICAgICB9KSxcclxuICAgICAgICAvLyAgICAgY2MudHdlZW4oKS5yZXBlYXQoNSwgYSksXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnJvbGUuc2V0UG9zaXRpb24oY2MudjIoOTExLCAxNTApKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMucm9sZS5zY2FsZVggPSAtMTtcclxuICAgICAgICAvLyAgICAgfSksXHJcblxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLnJlcGVhdCg1LCBiKVxyXG4gICAgICAgIC8vIClcclxuXHJcbiAgICAgICAgLy8gY2MudHdlZW4odGhpcy5yb2xlKVxyXG4gICAgICAgIC8vICAgICAucmVwZWF0Rm9yZXZlcihjKVxyXG4gICAgICAgIC8vICAgICAuc3RhcnQoKVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyBsZXQgZCA9IGNjLnR3ZWVuKCkuc2VxdWVuY2UoXHJcblxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLnJlcGVhdCgxMCwgY2MudHdlZW4oKS5ieSgyLjUsIHsgcG9zaXRpb246IGNjLnYyKDIwMCwgMTUwICogTWF0aC5yYW5kb20oKSAtIDc1KSwgYW5nbGU6IDEwMCAqIE1hdGgucmFuZG9tKCkgLSA1MCB9KSksXHJcblxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5iZWUuc2V0UG9zaXRpb24oY2MudjIoMTExMCwgMjUwKSk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmJlZS5zY2FsZVggKj0gLTE7XHJcbiAgICAgICAgLy8gICAgIH0pLFxyXG5cclxuICAgICAgICAvLyAgICAgY2MudHdlZW4oKS5yZXBlYXQoMTAsIGNjLnR3ZWVuKCkuYnkoMi43LCB7IHBvc2l0aW9uOiBjYy52MigtMjAwLCAxNTAgKiBNYXRoLnJhbmRvbSgpIC0gNzUpLCBhbmdsZTogMTAwICogTWF0aC5yYW5kb20oKSAtIDUwIH0pKSxcclxuICAgICAgICAvLyAgICAgY2MudHdlZW4oKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYmVlLnNldFBvc2l0aW9uKGNjLnYyKC05NDYsIDI1MCkpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5iZWUuc2NhbGVYICo9IC0xO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5iZWUueSArPSBNYXRoLnJhbmRvbSgpICogNTAgLSAyNTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYmVlLnggKz0gTWF0aC5yYW5kb20oKSAqIDUwIC0gMTUwO1xyXG4gICAgICAgIC8vICAgICB9KSxcclxuICAgICAgICAvLyApXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gbGV0IGUgPSBjYy50d2VlbigpLnNlcXVlbmNlKFxyXG5cclxuICAgICAgICAvLyAgICAgY2MudHdlZW4oKS5yZXBlYXQoMTAsIGNjLnR3ZWVuKCkuYnkoMi41LCB7IHBvc2l0aW9uOiBjYy52MigyMDAsIDE1MCAqIE1hdGgucmFuZG9tKCkgLSA3NSksIGFuZ2xlOiAxMDAgKiBNYXRoLnJhbmRvbSgpIC0gNTAgfSkpLFxyXG5cclxuICAgICAgICAvLyAgICAgY2MudHdlZW4oKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYmVlMi5zZXRQb3NpdGlvbihjYy52MigxMTEwLCAyNTApKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYmVlMi5zY2FsZVggKj0gLTE7XHJcbiAgICAgICAgLy8gICAgIH0pLFxyXG5cclxuICAgICAgICAvLyAgICAgY2MudHdlZW4oKS5yZXBlYXQoMTAsIGNjLnR3ZWVuKCkuYnkoMi43LCB7IHBvc2l0aW9uOiBjYy52MigtMjAwLCAxNTAgKiBNYXRoLnJhbmRvbSgpIC0gNzUpLCBhbmdsZTogMTAwICogTWF0aC5yYW5kb20oKSAtIDUwIH0pKSxcclxuICAgICAgICAvLyAgICAgY2MudHdlZW4oKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYmVlMi5zZXRQb3NpdGlvbihjYy52MigtOTQ2LCAyNTApKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYmVlMi5zY2FsZVggKj0gLTE7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmJlZTIueSArPSBNYXRoLnJhbmRvbSgpICogNTAgLSAyNTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYmVlMi54ICs9IE1hdGgucmFuZG9tKCkgKiA1MCAtIDE1MDtcclxuICAgICAgICAvLyAgICAgfSksXHJcbiAgICAgICAgLy8gKVxyXG5cclxuICAgICAgICAvLyBsZXQgZiA9IGNjLnR3ZWVuKCkuc2VxdWVuY2UoXHJcblxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLnJlcGVhdCgxMCwgY2MudHdlZW4oKS5ieSgyLjUsIHsgcG9zaXRpb246IGNjLnYyKDIwMCwgMTUwICogTWF0aC5yYW5kb20oKSAtIDc1KSwgYW5nbGU6IDEwMCAqIE1hdGgucmFuZG9tKCkgLSA1MCB9KSksXHJcblxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5iZWUzLnNldFBvc2l0aW9uKGNjLnYyKDExMTAsIDI1MCkpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5iZWUzLnNjYWxlWCAqPSAtMTtcclxuICAgICAgICAvLyAgICAgfSksXHJcblxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLnJlcGVhdCgxMCwgY2MudHdlZW4oKS5ieSgyLjcsIHsgcG9zaXRpb246IGNjLnYyKC0yMDAsIDE1MCAqIE1hdGgucmFuZG9tKCkgLSA3NSksIGFuZ2xlOiAxMDAgKiBNYXRoLnJhbmRvbSgpIC0gNTAgfSkpLFxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5iZWUzLnNldFBvc2l0aW9uKGNjLnYyKC05NDYsIDI1MCkpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5iZWUzLnNjYWxlWCAqPSAtMTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuYmVlMy55ICs9IE1hdGgucmFuZG9tKCkgKiA1MCAtIDI1O1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5iZWUzLnggKz0gTWF0aC5yYW5kb20oKSAqIDUwIC0gMTUwO1xyXG4gICAgICAgIC8vICAgICB9KSxcclxuICAgICAgICAvLyApXHJcbiAgICAgICAgLy8gY2MudHdlZW4odGhpcy5iZWUpXHJcblxyXG5cclxuICAgICAgICAvLyAgICAgLnJlcGVhdEZvcmV2ZXIoZClcclxuICAgICAgICAvLyAgICAgLnN0YXJ0KClcclxuXHJcbiAgICAgICAgLy8gLy8gbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJlZSk7XHJcbiAgICAgICAgLy8gLy8gdGhpcy5iZWUucGFyZW50LmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgIC8vIC8vIG5vZGUuc2V0UG9zaXRpb24odGhpcy5iZWUuZ2V0UG9zaXRpb24oKSlcclxuICAgICAgICAvLyB0aGlzLmJlZTIueSArPSBNYXRoLnJhbmRvbSgpICogNTAgLSAyNTtcclxuICAgICAgICAvLyB0aGlzLmJlZTIueCArPSBNYXRoLnJhbmRvbSgpICogNTAgLSAxNTA7XHJcblxyXG4gICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuYmVlMilcclxuXHJcblxyXG4gICAgICAgIC8vICAgICAucmVwZWF0Rm9yZXZlcihlKVxyXG4gICAgICAgIC8vICAgICAvLyAuYnkoMjAsIHsgcG9zaXRpb246IGNjLnYyKDE1MDAsIDApIH0pXHJcblxyXG4gICAgICAgIC8vICAgICAuc3RhcnQoKVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyAvLyBsZXQgbm9kZTIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJlZSk7XHJcbiAgICAgICAgLy8gLy8gdGhpcy5iZWUucGFyZW50LmFkZENoaWxkKG5vZGUyKTtcclxuICAgICAgICAvLyAvLyBub2RlMi5zZXRQb3NpdGlvbih0aGlzLmJlZS5nZXRQb3NpdGlvbigpKVxyXG4gICAgICAgIC8vIHRoaXMuYmVlMy55ICs9IE1hdGgucmFuZG9tKCkgKiA1MCAtIDI1O1xyXG4gICAgICAgIC8vIHRoaXMuYmVlMy54ICs9IE1hdGgucmFuZG9tKCkgKiA1MCAtIDE1MDtcclxuXHJcbiAgICAgICAgLy8gY2MudHdlZW4odGhpcy5iZWUzKVxyXG4gICAgICAgIC8vICAgICAucmVwZWF0KDEwLCBjYy50d2VlbigpLmJ5KDIuNywgeyBwb3NpdGlvbjogY2MudjIoMjAwLCAxNTAgKiBNYXRoLnJhbmRvbSgpIC0gNzUpLCBhbmdsZTogMTAwICogTWF0aC5yYW5kb20oKSAtIDUwIH0pKVxyXG5cclxuICAgICAgICAvLyAgICAgLnJlcGVhdEZvcmV2ZXIoZilcclxuICAgICAgICAvLyAgICAgLnN0YXJ0KClcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9DbG9uSXRlbSgpIHtcclxuICAgICAgICBsZXQgYTogY2MuUHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJMZXZlbEl0ZW1cIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICBsZXQgbnVtID0gMFxyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMuY29udGVudC5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMCArIDIwICogbnVtOyBqIDwgMjAgKyAyMCAqIG51bTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKGEpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoTGV2ZWxJdGVtKS5JRCA9IGo7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBudW0rKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgb25DbG9zZSgpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS51bnNjaGVkdWxlQWxsRm9yVGFyZ2V0KHRoaXMpO1xyXG4gICAgICAgIGNjLmdhbWUudGFyZ2V0T2ZmKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkudW5zY2hlZHVsZUFsbEZvclRhcmdldCh0aGlzKTtcclxuICAgICAgICBjYy5nYW1lLnRhcmdldE9mZih0aGlzKTtcclxuICAgIH1cclxufVxyXG4iXX0=