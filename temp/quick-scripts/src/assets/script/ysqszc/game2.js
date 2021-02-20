"use strict";
cc._RF.push(module, 'db634D3HsBJUKj/tMSoN4cp', 'game2');
// script/ysqszc/game2.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var UiGame_1 = require("../Ui/UiGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var game2 = /** @class */ (function (_super) {
    __extends(game2, _super);
    function game2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.camera = null;
        _this.ui = null;
        _this.gameBg = null;
        _this.startGame = null;
        _this.listen = null;
        _this.handTips = null;
        _this.stone = null;
        _this.handStartPos = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    game2.prototype.start = function () {
        // this.schedule(() => {
        // let stone = cocosz.resMgr.getRes("stone", cc.Prefab);
        // let node = cc.instantiate(stone);
        // node.setPosition(cc.v2(0, 0))
        // node.getComponent(cc.RigidBody).gravityScale = 0;
        // this.node.addChild(node);
        // }, 2)
        var _this = this;
        cc.log(CocosZ_1.cocosz.dataMgr.isNovice, "cocosz.dataMgr.isNovice");
        // if (+cocosz.dataMgr.isNovice == 0) {
        this.startGame.getComponent(cc.Label).string = "       向指示方向滑动";
        this.handStartPos = this.handTips.getPosition();
        cc.tween(this.handTips)
            .repeatForever(cc.tween().sequence(cc.tween().call(function () {
            _this.handTips.setPosition(_this.handStartPos);
        }), cc.tween().to(0.3, { opacity: 255 }), cc.tween().by(1, { x: -150 }), cc.tween().to(0.3, { opacity: 0 }), cc.tween().delay(2)))
            .start();
        // }
        // else {
        //     this.handTips.active = false;
        //     this.stone.active = false;
        // }
        if (CocosZ_1.cocosz.gameMgr.isGame2Resurrection) {
            CocosZ_1.cocosz.gameMgr.isGame2Resurrection = false;
        }
        else {
            CocosZ_1.cocosz.gameMgr.curGame2LevelID = 0;
        }
        cc.game.on(Constant_1.default.E_GAME_START, function () {
            window.onGameEvent(4, "无尽关卡开始");
            // if (+cocosz.dataMgr.isNovice == 0) {
            CocosZ_1.cocosz.dataMgr.isNovice = "1";
            _this.handTips.active = false;
            // }
            _this.listen.active = false;
            _this.startGame.active = false;
            UiGame_1.uiGame.onStartGame();
            var num = Math.floor(Math.random() * 20) + 1;
            num = CocosZ_1.cocosz.dataMgr.Game2LevelList;
            CocosZ_1.cocosz.gameMgr.curLevelJson = num;
            cc.log(num);
            var prefab = CocosZ_1.cocosz.resMgr.getRes("levelMgr", cc.Prefab);
            var level = cc.instantiate(prefab);
            level.getComponent("levelNum").curLevel = num;
            _this.node.addChild(level);
            CocosZ_1.cocosz.gameMgr.curGame2LevelID++;
            _this.ui.y = _this.camera.y;
            _this.gameBg.y = _this.camera.y;
            _this.schedule(function () {
                CocosZ_1.cocosz.gameMgr.curGame2LevelID++;
                var num = Math.floor(Math.random() * 20) + 1;
                num = CocosZ_1.cocosz.dataMgr.Game2LevelList;
                CocosZ_1.cocosz.gameMgr.curLevelJson = num;
                cc.log(num);
                var prefab = CocosZ_1.cocosz.resMgr.getRes("levelMgr", cc.Prefab);
                var level = cc.instantiate(prefab);
                level.getComponent("levelNum").curLevel = num;
                _this.node.addChild(level);
            }, 18);
            cc.game.off(Constant_1.default.E_GAME_START);
        }, this);
        cc.tween(this.startGame)
            .repeatForever(cc.tween().sequence(cc.tween().by(0.3, { scale: 0.1 }), cc.tween().by(0.3, { scale: -0.1 })))
            .start();
    };
    game2.prototype.update = function (dt) {
        if (CocosZ_1.cocosz.gameMgr.isGameOver) {
            // for (let child of this.node.children) {
            //     if (child.name == "levelMgr") {
            //         child.destroy();
            //     }
            // }
            this.unscheduleAllCallbacks();
            return;
        }
    };
    __decorate([
        property(cc.Node)
    ], game2.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], game2.prototype, "ui", void 0);
    __decorate([
        property(cc.Node)
    ], game2.prototype, "gameBg", void 0);
    __decorate([
        property(cc.Node)
    ], game2.prototype, "startGame", void 0);
    __decorate([
        property(cc.Node)
    ], game2.prototype, "listen", void 0);
    __decorate([
        property(cc.Node)
    ], game2.prototype, "handTips", void 0);
    __decorate([
        property(cc.Node)
    ], game2.prototype, "stone", void 0);
    game2 = __decorate([
        ccclass
    ], game2);
    return game2;
}(cc.Component));
exports.default = game2;

cc._RF.pop();