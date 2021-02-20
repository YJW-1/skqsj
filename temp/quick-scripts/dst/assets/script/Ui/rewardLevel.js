
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Ui/rewardLevel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxVaVxccmV3YXJkTGV2ZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDhDQUE2QztBQUM3QyxrREFBa0Q7QUFDbEQsd0NBQW1DO0FBRTdCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVk7SUFEckQ7UUFBQSxxRUFvS0M7UUFoS0csUUFBRSxHQUFZLElBQUksQ0FBQztRQUluQixhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGFBQU8sR0FBYSxJQUFJLENBQUM7UUFDekIsVUFBSSxHQUFhLElBQUksQ0FBQztRQUV0QixhQUFPLEdBQVcsRUFBRSxDQUFDOztJQXdKekIsQ0FBQztJQXBKRywrQkFBUyxHQUFUO1FBQ0ksSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVU7WUFBRSxPQUFPO1FBQ3RDLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUdqQyxlQUFNLENBQUMsUUFBUSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDMUMsZUFBTSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFFaEMsd0VBQXdFO1FBQ3hFLHVDQUF1QztRQUN2QyxJQUFJO1FBRUosSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsZUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsb0JBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN0RCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDWCxDQUFDO0lBR0Qsd0JBQXdCO0lBRXhCLDRCQUFNLEdBQU47UUFDSSxJ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Q0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNDO0lBSEYsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQW1LL0I7SUFBRCxrQkFBQztDQW5LRCxBQW1LQyxDQW5Ld0MsRUFBRSxDQUFDLFNBQVMsR0FtS3BEO2tCQW5Lb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5pbXBvcnQgeyBQYW5lbE5hbWUgfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvbnN0YW50XCI7XHJcbmltcG9ydCBNc2cgZnJvbSBcIi4uL0ZyYW1ld29yay9Nc2dcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZXdhcmRMZXZlbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiZzogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIFxyXG4gICAgY29pbk1ncjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBjb2luQ3VyOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICB0aW1lOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgdGltZU51bTogbnVtYmVyID0gMjU7XHJcblxyXG5cclxuXHJcbiAgICBvblN1Y2NlZWQoKSB7XHJcbiAgICAgICAgaWYgKGNvY29zei5nYW1lTWdyLmlzR2FtZU92ZXIpIHJldHVybjtcclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pc0dhbWVPdmVyID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5QmVmb3JlVmVjdG9yeUVmZmVjdCgpO1xyXG4gICAgICAgIGNvY29zei51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcblxyXG4gICAgICAgIC8vIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5WSVZPX0dBTUUgJiYgY29jb3N6LmRhdGFNZ3IuU2hvY2tPbikge1xyXG4gICAgICAgIC8vICAgICBsaWV5b3VfU2RrTWFuYWdlci52aWJyYXRlTG9uZygpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FICYmIGNvY29zei5kYXRhTWdyLlNob2NrT24pIHtcclxuICAgICAgICAgICAgd2luZG93W1wid3hcIl0udmlicmF0ZUxvbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhbmVsKFBhbmVsTmFtZS5VaUJlZm9yZVN1Y2NlZWQpO1xyXG4gICAgICAgIH0sIDEuNSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuY29pbk1nciA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJjb2luTWdyXCIpO1xyXG4gICAgICAgIHRoaXMuY29pbkN1ciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkNvaW5cIikuZ2V0Q2hpbGRCeU5hbWUoXCJudW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLnRpbWUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0aW1lXCIpLmdldENoaWxkQnlOYW1lKFwibnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5jb2luQ3VyLnN0cmluZyA9IGNvY29zei5kYXRhTWdyLkNvaW5Db3VudC50b1N0cmluZygpO1xyXG4gICAgICAgIGlmICghY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIC8vIGNjLmZpbmQoJ1BST0ZJTEVSLU5PREUnKS5zY2FsZSA9IDI7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8g5byA5ZCv54mp55CG5q2l6ZW/55qE6K6+572uXHJcbiAgICAgICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZEFjY3VtdWxhdG9yID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gLy8g54mp55CG5q2l6ZW/77yM6buY6K6kIEZJWEVEX1RJTUVfU1RFUCDmmK8gMS82MFxyXG4gICAgICAgICAgICAvLyBjYy5QaHlzaWNzTWFuYWdlci5GSVhFRF9USU1FX1NURVAgPSAxIC8gNjA7XHJcbiAgICAgICAgICAgIC8vIC8vIOavj+asoeabtOaWsOeJqeeQhuezu+e7n+WkhOeQhumAn+W6pueahOi/reS7o+asoeaVsO+8jOm7mOiupOS4uiAxMFxyXG4gICAgICAgICAgICAvLyBjYy5QaHlzaWNzTWFuYWdlci5WRUxPQ0lUWV9JVEVSQVRJT05TID0gODtcclxuICAgICAgICAgICAgLy8gLy8g5q+P5qyh5pu05paw54mp55CG57O757uf5aSE55CG5L2N572u55qE6L+t5Luj5qyh5pWw77yM6buY6K6k5Li6IDEwXHJcbiAgICAgICAgICAgIC8vIGNjLlBoeXNpY3NNYW5hZ2VyLlBPU0lUSU9OX0lURVJBVElPTlMgPSA4O1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID0gMTtcclxuICAgICAgICAgICAgLy8gY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyB2YXIgQml0cyA9IGNjLlBoeXNpY3NNYW5hZ2VyLkRyYXdCaXRzO1xyXG4gICAgICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmRlYnVnRHJhd0ZsYWdzID1cclxuICAgICAgICAgICAgLy8gICAgIEJpdHMuZV9hYWJiQml0IHxcclxuICAgICAgICAgICAgLy8gICAgIEJpdHMuZV9qb2ludEJpdCB8XHJcbiAgICAgICAgICAgIC8vICAgICBCaXRzLmVfc2hhcGVCaXQ7XHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gbGV0IGdhbWVCZyA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiZ2FtZUJnXCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChjYy5pbnN0YW50aWF0ZShnYW1lQmcpLCAtMTAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5iZy56SW5kZXggLT0gMTAwMDtcclxuICAgICAgICBsZXQgcHJvcEhvbmV5YmVlID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJwcm9wSG9uZXliZWVcIiwgY2MuUHJlZmFiKTtcclxuXHJcbiAgICAgICAgbGV0IG51bSA9IDUgKiBNYXRoLnJhbmRvbSgpICsgNTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJvcEhvbmV5YmVlKTtcclxuICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihjYy52MihNYXRoLnJhbmRvbSgpICogMTUwIC0gMTAwLCBNYXRoLnJhbmRvbSgpICogMzUwIC0gMjAwKSlcclxuICAgICAgICAgICAgdGhpcy5jb2luTWdyLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGxldCBtYXAgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtYXBcIik7XHJcbiAgICAgICAgbGV0IHBvaW50ID0gbWFwLmdldENvbXBvbmVudChjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKS5wb2ludHM7XHJcblxyXG4gICAgICAgIGxldCBwcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcIm1hcE1hc2tcIiwgY2MuUHJlZmFiKVxyXG4gICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAvLyBub2RlLnggPSBsaXN0LnhcclxuICAgICAgICAvLyBub2RlLnkgPSBsaXN0LnlcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICBub2RlLnpJbmRleCAtPSA5OTk7XHJcbiAgICAgICAgbGV0IG1hc2s6IGNjLk1hc2sgPSBub2RlLmdldENvbXBvbmVudChjYy5NYXNrKTtcclxuICAgICAgICBsZXQgZ3JhcGhpY3MgPSBtYXNrLl9ncmFwaGljcztcclxuXHJcbiAgICAgICAgbGV0IGdyYXBoaWNzMjogY2MuR3JhcGhpY3MgPSBub2RlLmdldENoaWxkQnlOYW1lKFwibGluZVwiKS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIGxldCByYiA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgcmIudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljO1xyXG5cclxuICAgICAgICAvLyBmb3IgKGxldCBwb2ludCBvZiBsaXN0KSB7XHJcbiAgICAgICAgbGV0IGNvbGxpZGVyID0gbm9kZS5hZGRDb21wb25lbnQoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XHJcbiAgICAgICAgY29sbGlkZXIucG9pbnRzID0gW10uY29uY2F0KHBvaW50KTtcclxuICAgICAgICBjb2xsaWRlci5hcHBseSgpO1xyXG5cclxuICAgICAgICBncmFwaGljcy5tb3ZlVG8ocG9pbnRbMF0ueCwgcG9pbnRbMF0ueSk7XHJcbiAgICAgICAgZm9yIChsZXQgdjIgb2YgcG9pbnQpIHtcclxuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKHYyLngsIHYyLnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBncmFwaGljcy5maWxsKCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgZ3JhcGhpY3MyLmxpbmVXaWR0aCA9IDE1O1xyXG4gICAgICAgIGdyYXBoaWNzMi5zdHJva2VDb2xvciA9IG5ldyBjYy5Db2xvcig0MCwgMzMsIDEzLCAyNTUpO1xyXG4gICAgICAgIGdyYXBoaWNzMi5tb3ZlVG8ocG9pbnRbMF0ueCwgcG9pbnRbMF0ueSk7XHJcbiAgICAgICAgZm9yIChsZXQgdjIgb2YgcG9pbnQpIHtcclxuICAgICAgICAgICAgZ3JhcGhpY3MyLmxpbmVUbyh2Mi54LCB2Mi55KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ3JhcGhpY3MyLmxpbmVUbyhwb2ludFswXS54LCBwb2ludFswXS55KTtcclxuICAgICAgICBncmFwaGljczIuc3Ryb2tlKCk7XHJcbiAgICAgICAgbWFwLnJlbW92ZUZyb21QYXJlbnQoKTtcclxuXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IG51bSA9IDUgKiBNYXRoLnJhbmRvbSgpICsgNTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcm9wSG9uZXliZWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPD0gMC4wMikge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSAzLjU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKGNjLnYyKE1hdGgucmFuZG9tKCkgKiAxNTAgLSAxMDAsIE1hdGgucmFuZG9tKCkgKiAzNTAgLSAyMDApKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2luTWdyLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMilcclxuXHJcbiAgICAgICAgY29jb3N6LnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIE1zZy5TaG93KFwi5Zyo6KeE5a6a55qE5pe26Ze05YaF6I635Y+W5pu05aSa55qE6YeR5biBXCIpXHJcbiAgICAgICAgfSwgMS41KVxyXG4gICAgICAgIGNvY29zei5nYW1lTWdyLkxldmVsTnVtID0gMFxyXG4gICAgICAgIGNvY29zei5nYW1lTWdyLmlzT3BlblJld2FyZExldmVsID0gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmIChjb2Nvc3ouZ2FtZU1nci5pc0dhbWVPdmVyKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMudGltZU51bSA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lTnVtIC09IGR0O1xyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lTnVtIDw9IDMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVOdW0gPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc3RyID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVOdW0gPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0ciArPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudGltZS5zdHJpbmcgPSBcIjAwOlwiICsgc3RyICsgTWF0aC5mbG9vcih0aGlzLnRpbWVOdW0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3VjY2VlZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==