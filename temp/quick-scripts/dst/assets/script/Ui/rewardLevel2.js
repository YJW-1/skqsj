
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Ui/rewardLevel2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1ee14rRgDBOnZVt5bmAeIPh', 'rewardLevel2');
// script/Ui/rewardLevel2.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var Msg_1 = require("../Framework/Msg");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var rewardLevel = /** @class */ (function (_super) {
    __extends(rewardLevel, _super);
    function rewardLevel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.coinMgr = null;
        _this.bg = null;
        _this.coinCur = null;
        _this.time = null;
        _this.timeNum = 25;
        return _this;
    }
    rewardLevel.prototype.onSucceed = function () {
        if (CocosZ_1.cocosz.gameMgr.isGameOver)
            return;
        CocosZ_1.cocosz.gameMgr.isGameOver = true;
        this.node.getChildByName("Coin").active = false;
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
            this.bg.zIndex -= 1000;
        }
    };
    rewardLevel.prototype.start = function () {
        var _this = this;
        // let gameBg = cocosz.resMgr.getRes("gameBg", cc.Prefab);
        // this.node.parent.addChild(cc.instantiate(gameBg), -100);
        var propHoneybee = CocosZ_1.cocosz.resMgr.getRes("coin", cc.Prefab);
        var num = 2 * Math.random() + 3;
        for (var i = 0; i < num; i++) {
            var node_1 = cc.instantiate(propHoneybee);
            node_1.setPosition(cc.v2(Math.random() * 700 - 250, Math.random() * 100 - 500));
            this.coinMgr.addChild(node_1);
        }
        var map = this.node.getChildByName("map");
        var point = map.getComponent(cc.PhysicsPolygonCollider).points;
        var prefab = CocosZ_1.cocosz.resMgr.getRes("mapMask", cc.Prefab);
        var node = cc.instantiate(prefab);
        // node.x = list.x
        // node.y = list.y
        this.node.parent.addChild(node);
        // node.zIndex -= 999;
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
            var num = 2 * Math.random() + 3;
            for (var i = 0; i < num; i++) {
                var node_2 = cc.instantiate(propHoneybee);
                node_2.setPosition(cc.v2(Math.random() * 700 - 250, Math.random() * 100 - 500));
                _this.coinMgr.addChild(node_2);
            }
        }, 1.5);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxVaVxccmV3YXJkTGV2ZWwyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOztBQUVsRiw4Q0FBNkM7QUFDN0Msa0RBQWtEO0FBQ2xELHdDQUFtQztBQUU3QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFZO0lBRHJEO1FBQUEscUVBNkpDO1FBMUpHLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsUUFBRSxHQUFZLElBQUksQ0FBQztRQUNuQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBQ3pCLFVBQUksR0FBYSxJQUFJLENBQUM7UUFFdEIsYUFBTyxHQUFXLEVBQUUsQ0FBQzs7SUFtSnpCLENBQUM7SUEvSUcsK0JBQVMsR0FBVDtRQUNJLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVO1lBQUUsT0FBTztRQUN0QyxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFFakMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNoRCxlQUFNLENBQUMsUUFBUSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFDMUMsZUFBTSxDQUFDLHNCQUFzQixFQUFFLENBQUM7UUFFaEMsd0VBQXdFO1FBQ3hFLHVDQUF1QztRQUN2QyxJQUFJO1FBRUosSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNsRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDOUI7UUFDRCxJQUFJLENB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YUFDcEI7U0FDSjtJQUNMLENBQUM7SUF0SkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDQztJQUxGLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E0Si9CO0lBQUQsa0JBQUM7Q0E1SkQsQUE0SkMsQ0E1SndDLEVBQUUsQ0FBQyxTQUFTLEdBNEpwRDtrQkE1Sm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5pbXBvcnQgeyBQYW5lbE5hbWUgfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvbnN0YW50XCI7XHJcbmltcG9ydCBNc2cgZnJvbSBcIi4uL0ZyYW1ld29yay9Nc2dcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyByZXdhcmRMZXZlbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29pbk1ncjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiZzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBjb2luQ3VyOiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICB0aW1lOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgdGltZU51bTogbnVtYmVyID0gMjU7XHJcblxyXG5cclxuXHJcbiAgICBvblN1Y2NlZWQoKSB7XHJcbiAgICAgICAgaWYgKGNvY29zei5nYW1lTWdyLmlzR2FtZU92ZXIpIHJldHVybjtcclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pc0dhbWVPdmVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQ29pblwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheUJlZm9yZVZlY3RvcnlFZmZlY3QoKTtcclxuICAgICAgICBjb2Nvc3oudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG5cclxuICAgICAgICAvLyBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuVklWT19HQU1FICYmIGNvY29zei5kYXRhTWdyLlNob2NrT24pIHtcclxuICAgICAgICAvLyAgICAgbGlleW91X1Nka01hbmFnZXIudmlicmF0ZUxvbmcoKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSAmJiBjb2Nvc3ouZGF0YU1nci5TaG9ja09uKSB7XHJcbiAgICAgICAgICAgIHdpbmRvd1tcInd4XCJdLnZpYnJhdGVMb25nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYW5lbChQYW5lbE5hbWUuVWlCZWZvcmVTdWNjZWVkKTtcclxuICAgICAgICB9LCAxLjUpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmNvaW5NZ3IgPSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwiY29pbk1nclwiKTtcclxuICAgICAgICB0aGlzLmNvaW5DdXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDb2luXCIpLmdldENoaWxkQnlOYW1lKFwibnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy50aW1lID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGltZVwiKS5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgIHRoaXMuY29pbkN1ci5zdHJpbmcgPSBjb2Nvc3ouZGF0YU1nci5Db2luQ291bnQudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAoIWNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAvLyBjYy5maW5kKCdQUk9GSUxFUi1OT0RFJykuc2NhbGUgPSAyO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIOW8gOWQr+eJqeeQhuatpemVv+eahOiuvue9rlxyXG4gICAgICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWRBY2N1bXVsYXRvciA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIC8vIOeJqeeQhuatpemVv++8jOm7mOiupCBGSVhFRF9USU1FX1NURVAg5pivIDEvNjBcclxuICAgICAgICAgICAgLy8gY2MuUGh5c2ljc01hbmFnZXIuRklYRURfVElNRV9TVEVQID0gMSAvIDYwO1xyXG4gICAgICAgICAgICAvLyAvLyDmr4/mrKHmm7TmlrDniannkIbns7vnu5/lpITnkIbpgJ/luqbnmoTov63ku6PmrKHmlbDvvIzpu5jorqTkuLogMTBcclxuICAgICAgICAgICAgLy8gY2MuUGh5c2ljc01hbmFnZXIuVkVMT0NJVFlfSVRFUkFUSU9OUyA9IDg7XHJcbiAgICAgICAgICAgIC8vIC8vIOavj+asoeabtOaWsOeJqeeQhuezu+e7n+WkhOeQhuS9jee9rueahOi/reS7o+asoeaVsO+8jOm7mOiupOS4uiAxMFxyXG4gICAgICAgICAgICAvLyBjYy5QaHlzaWNzTWFuYWdlci5QT1NJVElPTl9JVEVSQVRJT05TID0gODtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5kZWJ1Z0RyYXdGbGFncyA9IDE7XHJcbiAgICAgICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gdmFyIEJpdHMgPSBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cztcclxuICAgICAgICAgICAgLy8gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5kZWJ1Z0RyYXdGbGFncyA9XHJcbiAgICAgICAgICAgIC8vICAgICBCaXRzLmVfYWFiYkJpdCB8XHJcbiAgICAgICAgICAgIC8vICAgICBCaXRzLmVfam9pbnRCaXQgfFxyXG4gICAgICAgICAgICAvLyAgICAgQml0cy5lX3NoYXBlQml0O1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuYmcuekluZGV4IC09IDEwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIGxldCBnYW1lQmcgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcImdhbWVCZ1wiLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5wYXJlbnQuYWRkQ2hpbGQoY2MuaW5zdGFudGlhdGUoZ2FtZUJnKSwgLTEwMCk7XHJcbiAgICAgICAgbGV0IHByb3BIb25leWJlZSA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiY29pblwiLCBjYy5QcmVmYWIpO1xyXG5cclxuICAgICAgICBsZXQgbnVtID0gMiAqIE1hdGgucmFuZG9tKCkgKyAzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcm9wSG9uZXliZWUpO1xyXG4gICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKGNjLnYyKE1hdGgucmFuZG9tKCkgKiA3MDAgLSAyNTAsIE1hdGgucmFuZG9tKCkgKiAxMDAgLSA1MDApKVxyXG4gICAgICAgICAgICB0aGlzLmNvaW5NZ3IuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgbGV0IG1hcCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm1hcFwiKTtcclxuICAgICAgICBsZXQgcG9pbnQgPSBtYXAuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIpLnBvaW50cztcclxuXHJcbiAgICAgICAgbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwibWFwTWFza1wiLCBjYy5QcmVmYWIpXHJcbiAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgIC8vIG5vZGUueCA9IGxpc3QueFxyXG4gICAgICAgIC8vIG5vZGUueSA9IGxpc3QueVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgIC8vIG5vZGUuekluZGV4IC09IDk5OTtcclxuICAgICAgICBsZXQgbWFzazogY2MuTWFzayA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLk1hc2spO1xyXG4gICAgICAgIGxldCBncmFwaGljcyA9IG1hc2suX2dyYXBoaWNzO1xyXG4gICAgICAgIGxldCBncmFwaGljczI6IGNjLkdyYXBoaWNzID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcImxpbmVcIikuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBsZXQgcmIgPSBub2RlLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIHJiLnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLlN0YXRpYztcclxuXHJcbiAgICAgICAgLy8gZm9yIChsZXQgcG9pbnQgb2YgbGlzdCkge1xyXG4gICAgICAgIGxldCBjb2xsaWRlciA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIpO1xyXG4gICAgICAgIGNvbGxpZGVyLnBvaW50cyA9IFtdLmNvbmNhdChwb2ludCk7XHJcbiAgICAgICAgY29sbGlkZXIuYXBwbHkoKTtcclxuXHJcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHBvaW50WzBdLngsIHBvaW50WzBdLnkpO1xyXG4gICAgICAgIGZvciAobGV0IHYyIG9mIHBvaW50KSB7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyh2Mi54LCB2Mi55KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ3JhcGhpY3MuZmlsbCgpO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGdyYXBoaWNzMi5saW5lV2lkdGggPSAxNTtcclxuICAgICAgICBncmFwaGljczIuc3Ryb2tlQ29sb3IgPSBuZXcgY2MuQ29sb3IoNDAsIDMzLCAxMywgMjU1KTtcclxuICAgICAgICBncmFwaGljczIubW92ZVRvKHBvaW50WzBdLngsIHBvaW50WzBdLnkpO1xyXG4gICAgICAgIGZvciAobGV0IHYyIG9mIHBvaW50KSB7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzMi5saW5lVG8odjIueCwgdjIueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdyYXBoaWNzMi5saW5lVG8ocG9pbnRbMF0ueCwgcG9pbnRbMF0ueSk7XHJcbiAgICAgICAgZ3JhcGhpY3MyLnN0cm9rZSgpO1xyXG4gICAgICAgIG1hcC5yZW1vdmVGcm9tUGFyZW50KCk7XHJcblxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBudW0gPSAyICogTWF0aC5yYW5kb20oKSArIDM7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJvcEhvbmV5YmVlKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24oY2MudjIoTWF0aC5yYW5kb20oKSAqIDcwMCAtIDI1MCwgTWF0aC5yYW5kb20oKSAqIDEwMCAtIDUwMCkpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvaW5NZ3IuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxLjUpXHJcblxyXG4gICAgICAgIGNvY29zei5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBNc2cuU2hvdyhcIuWcqOinhOWumueahOaXtumXtOWGheiOt+WPluabtOWkmueahOmHkeW4gVwiKVxyXG4gICAgICAgIH0sIDEuNSlcclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci5MZXZlbE51bSA9IDBcclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pc09wZW5SZXdhcmRMZXZlbCA9IGZhbHNlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAoY29jb3N6LmdhbWVNZ3IuaXNHYW1lT3ZlcikgcmV0dXJuO1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVOdW0gPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZU51bSAtPSBkdDtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGltZU51bSA8PSAzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy50aW1lTnVtID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0ciA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50aW1lTnVtIDwgMTApIHtcclxuICAgICAgICAgICAgICAgICAgICBzdHIgKz0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUuc3RyaW5nID0gXCIwMDpcIiArIHN0ciArIE1hdGguZmxvb3IodGhpcy50aW1lTnVtKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblN1Y2NlZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=