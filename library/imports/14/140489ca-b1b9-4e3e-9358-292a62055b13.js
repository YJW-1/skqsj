"use strict";
cc._RF.push(module, '14048nKsblOPpNYKSpiBVsT', 'rewardLevel');
// script/Ui/rewardLevel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var Msg_1 = require("../Framework/Msg");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var rewardLevel = /** @class */ (function (_super) {
    __extends(rewardLevel, _super);
    function rewardLevel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.coinMgr = null;
        _this.coinCur = null;
        _this.time = null;
        _this.timeNum = 25;
        return _this;
    }
    rewardLevel.prototype.onSucceed = function () {
        if (CocosZ_1.cocosz.gameMgr.isGameOver)
            return;
        CocosZ_1.cocosz.gameMgr.isGameOver = true;
        CocosZ_1.cocosz.audioMgr.playBeforeVectoryEffect();
        CocosZ_1.cocosz.unscheduleAllCallbacks();
        // if (cc.sys.platform === cc.sys.VIVO_GAME && cocosz.dataMgr.ShockOn) {
        //     lieyou_SdkManager.vibrateLong();
        // }
        if (cc.sys.platform === cc.sys.WECHAT_GAME && CocosZ_1.cocosz.dataMgr.ShockOn) {
            window["wx"].vibrateLong();
        }
        this.scheduleOnce(function () {
            CocosZ_1.cocosz.uiMgr.openPanel(Constant_1.PanelName.UiBeforeSucceed);
        }, 1.5);
    };
    // LIFE-CYCLE CALLBACKS:
    rewardLevel.prototype.onLoad = function () {
        this.coinMgr = this.node.parent.getChildByName("coinMgr");
        this.coinCur = this.node.getChildByName("Coin").getChildByName("num").getComponent(cc.Label);
        this.time = this.node.getChildByName("time").getChildByName("num").getComponent(cc.Label);
        this.coinCur.string = CocosZ_1.cocosz.dataMgr.CoinCount.toString();
        if (!cc.director.getPhysicsManager().enabled) {
            // cc.find('PROFILER-NODE').scale = 2;
            cc.director.getPhysicsManager().enabled = true;
            cc.director.getCollisionManager().enabled = true;
            // 开启物理步长的设置
            // cc.director.getPhysicsManager().enabledAccumulator = true;
            // // 物理步长，默认 FIXED_TIME_STEP 是 1/60
            // cc.PhysicsManager.FIXED_TIME_STEP = 1 / 60;
            // // 每次更新物理系统处理速度的迭代次数，默认为 10
            // cc.PhysicsManager.VELOCITY_ITERATIONS = 8;
            // // 每次更新物理系统处理位置的迭代次数，默认为 10
            // cc.PhysicsManager.POSITION_ITERATIONS = 8;
            cc.director.getPhysicsManager().debugDrawFlags = 1;
            // cc.director.getCollisionManager().enabledDebugDraw = true;
            // var Bits = cc.PhysicsManager.DrawBits;
            // cc.director.getPhysicsManager().debugDrawFlags =
            //     Bits.e_aabbBit |
            //     Bits.e_jointBit |
            //     Bits.e_shapeBit;
        }
    };
    rewardLevel.prototype.start = function () {
        // let gameBg = cocosz.resMgr.getRes("gameBg", cc.Prefab);
        // this.node.parent.addChild(cc.instantiate(gameBg), -100);
        var _this = this;
        this.bg.zIndex -= 1000;
        var propHoneybee = CocosZ_1.cocosz.resMgr.getRes("propHoneybee", cc.Prefab);
        var num = 5 * Math.random() + 5;
        for (var i = 0; i < num; i++) {
            var node_1 = cc.instantiate(propHoneybee);
            node_1.setPosition(cc.v2(Math.random() * 150 - 100, Math.random() * 350 - 200));
            this.coinMgr.addChild(node_1);
        }
        var map = this.node.getChildByName("map");
        var point = map.getComponent(cc.PhysicsPolygonCollider).points;
        var prefab = CocosZ_1.cocosz.resMgr.getRes("mapMask", cc.Prefab);
        var node = cc.instantiate(prefab);
        // node.x = list.x
        // node.y = list.y
        this.node.parent.addChild(node);
        node.zIndex -= 999;
        var mask = node.getComponent(cc.Mask);
        var graphics = mask._graphics;
        var graphics2 = node.getChildByName("line").getComponent(cc.Graphics);
        var rb = node.addComponent(cc.RigidBody);
        rb.type = cc.RigidBodyType.Static;
        // for (let point of list) {
        var collider = node.addComponent(cc.PhysicsPolygonCollider);
        collider.points = [].concat(point);
        collider.apply();
        graphics.moveTo(point[0].x, point[0].y);
        for (var _i = 0, point_1 = point; _i < point_1.length; _i++) {
            var v2 = point_1[_i];
            graphics.lineTo(v2.x, v2.y);
        }
        graphics.fill();
        graphics2.lineWidth = 15;
        graphics2.strokeColor = new cc.Color(40, 33, 13, 255);
        graphics2.moveTo(point[0].x, point[0].y);
        for (var _a = 0, point_2 = point; _a < point_2.length; _a++) {
            var v2 = point_2[_a];
            graphics2.lineTo(v2.x, v2.y);
        }
        graphics2.lineTo(point[0].x, point[0].y);
        graphics2.stroke();
        map.removeFromParent();
        // }
        this.schedule(function () {
            var num = 5 * Math.random() + 5;
            for (var i = 0; i < num; i++) {
                var node_2 = cc.instantiate(propHoneybee);
                if (Math.random() <= 0.02) {
                    node_2.scale = 3.5;
                }
                node_2.setPosition(cc.v2(Math.random() * 150 - 100, Math.random() * 350 - 200));
                _this.coinMgr.addChild(node_2);
            }
        }, 2);
        CocosZ_1.cocosz.scheduleOnce(function () {
            Msg_1.default.Show("在规定的时间内获取更多的金币");
        }, 1.5);
        CocosZ_1.cocosz.gameMgr.LevelNum = 0;
        CocosZ_1.cocosz.gameMgr.isOpenRewardLevel = false;
    };
    rewardLevel.prototype.update = function (dt) {
        if (CocosZ_1.cocosz.gameMgr.isGameOver)
            return;
        if (this.timeNum > 0) {
            this.timeNum -= dt;
            if (this.timeNum <= 3) {
                this.unscheduleAllCallbacks();
            }
            if (this.timeNum > 0) {
                var str = "";
                if (this.timeNum < 10) {
                    str += "0";
                }
                this.time.string = "00:" + str + Math.floor(this.timeNum);
            }
            else {
                this.onSucceed();
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], rewardLevel.prototype, "bg", void 0);
    rewardLevel = __decorate([
        ccclass
    ], rewardLevel);
    return rewardLevel;
}(cc.Component));
exports.default = rewardLevel;

cc._RF.pop();