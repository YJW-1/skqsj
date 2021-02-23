"use strict";
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