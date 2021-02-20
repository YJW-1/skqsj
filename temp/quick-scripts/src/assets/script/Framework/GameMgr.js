"use strict";
cc._RF.push(module, '89ce1Ja3zRExLoKC+hxicd4', 'GameMgr');
// script/Framework/GameMgr.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("./CocosZ");
var Constant_1 = require("./Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameMgr = /** @class */ (function () {
    function GameMgr() {
        this.isDelay = false;
        this._gameCtr = null;
        this.audioBg = true;
        /**记录过关数 奖励关卡用 */
        this.LevelNum = 2;
        /**记录过关数 抽奖用 */
        this.LevelNum2 = 0;
        /**记录过关数 添加桌面用 */
        this.playGameNum = 0;
        /**关卡金币总数 */
        this.maxCoin = 4;
        /**关卡获得金币总数 */
        this.coinNum = 4;
        //游戏结束
        this.isGameOver = false;
        //奖励关卡类型
        this.rewardType = 0;
        //游戏结束
        this.isStartDef = false;
        /**左边气球是否爆炸 */
        this.isLeftBalloon = false;
        /**右边气球是否爆炸 */
        this.isrightBalloon = false;
        /**发现气球 */
        this.isFeed = false;
        /**2个控制按钮 */
        this.isOpen = false;
        /**是否已经复活 */
        this.isResurrection = false;
        /**是否第一次进入*/
        this.isFirst = false;
        /**是否第一次进入*/
        this.isFirst2 = false;
        /**是否关卡全开 */
        this.isLevelOpen = false;
        /**是否开启奖励关卡 */
        this.isOpenRewardLevel = false;
        /**是否开启抽奖 */
        this.isOpenLottery = false;
        /**当前商店皮肤id*/
        this.curShopSkinID = -1;
        /**当前关卡id*/
        this.curLevelID = 0;
        /**当前剩余关卡*/
        this.seleltLevelList = [];
        /**当前剩余关卡数*/
        this.surplusLevelNum = 0;
        /**分数*/
        this.fraction = 0;
        /**无尽关卡分数*/
        this.game2Fraction = 0;
        /**镜头屏幕数,点击位置偏移*/
        this.touchNum = 0;
        /**无尽模式复活标记*/
        this.isGame2Resurrection = false;
        /**无尽模式当前关卡id*/
        this.curGame2LevelID = 0;
        /**无尽模式总关卡id*/
        this.MaxGame2LevelID = 0;
        /**无尽模式当前关卡数据*/
        this.curLevelJson = 0;
        /**无尽模式当前关卡数据*/
        this.handNum = 0;
    }
    GameMgr_1 = GameMgr;
    Object.defineProperty(GameMgr, "inst", {
        get: function () {
            if (!GameMgr_1._inst) {
                GameMgr_1._inst = new GameMgr_1();
            }
            return GameMgr_1._inst;
        },
        enumerable: true,
        configurable: true
    });
    GameMgr.prototype.onBalloonDes = function (name) {
        cc.log(this.isrightBalloon, this.isLeftBalloon, name);
        if (name == "left_balloon") {
            this.isLeftBalloon = true;
        }
        else if (name == "right_balloon") {
            this.isrightBalloon = true;
        }
        if (this.isrightBalloon && this.isLeftBalloon && this.isGameOver == false) {
            cc.log("两只气球爆炸");
            // this.isGameOver = true;
            CocosZ_1.cocosz.audioMgr.playBeforeFeildEffect1();
            cc.game.emit(Constant_1.default.E_PROP_ALLBALLOONDES);
            // if (cc.sys.platform === cc.sys.WECHAT_GAME && cocosz.dataMgr.ShockOn) {
            //     window["wx"].vibrateLong();
            // }
            // cocosz.scheduleOnce(() => {
            //     cocosz.uiMgr.openPanel(PanelName.UiFailed);
            // }, 1)
            cc.game.emit(Constant_1.default.E_GAME_FAID);
        }
    };
    /**
    * 射线检测（有序）
    */
    GameMgr.prototype.onRayCast = function (start, end) {
        var result = cc.director.getPhysicsManager().rayCast(start, end, cc.RayCastType.All);
        var dict = {};
        var list = [];
        var newResult = [];
        start.x = Math.round(start.x);
        start.y = Math.round(start.y);
        end.x = Math.round(end.x);
        end.y = Math.round(end.y);
        if (start.y == end.y) {
            for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                var rb = result_1[_i];
                var point = rb.point;
                point.x = Math.round(point.x);
                point.y = Math.round(point.y);
                var len = Math.abs(start.x - point.x);
                dict[len] = rb;
                list.push(len);
            }
            list.sort(function (a, b) { return a - b; });
            for (var _a = 0, list_1 = list; _a < list_1.length; _a++) {
                var len = list_1[_a];
                newResult.push(dict[len]);
            }
        }
        else {
            for (var _b = 0, result_2 = result; _b < result_2.length; _b++) {
                var rb = result_2[_b];
                var point = rb.point;
                var len = Math.abs(start.y - point.y);
                dict[len] = rb;
                list.push(len);
            }
            list.sort(function (a, b) { return a - b; });
            for (var _c = 0, list_2 = list; _c < list_2.length; _c++) {
                var len = list_2[_c];
                newResult.push(dict[len]);
            }
        }
        return newResult;
    };
    /**
     *
     * @param node
     * @param MaxScale 最大值
     * @param smallest  最小值
     */
    GameMgr.prototype.tweeBtn = function (node, MaxScale, smallScale) {
        var scale = cc.tween()
            .to(0.5, { scale: MaxScale })
            .to(0.5, { scale: smallScale });
        cc.tween(node)
            .then(scale)
            .repeatForever()
            .start();
    };
    GameMgr.prototype.tweeNode = function (node) {
        cc.tween(node)
            .to(0.3, { scale: 1 }, { easing: "backOut" })
            .start();
    };
    GameMgr.prototype.initGame = function () {
        var node = new cc.Node();
        node.group = "default";
        node.zIndex = -1;
        node.name = "Game";
        this._gameCtr = node.addComponent("NormalModelCtr");
        cc.director.getScene().addChild(node);
    };
    var GameMgr_1;
    GameMgr = GameMgr_1 = __decorate([
        ccclass
    ], GameMgr);
    return GameMgr;
}());
exports.default = GameMgr;

cc._RF.pop();