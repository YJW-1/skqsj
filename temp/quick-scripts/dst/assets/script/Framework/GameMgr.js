
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/GameMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXEdhbWVNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUFrQztBQUNsQyx1Q0FBaUQ7QUFHM0MsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQURBO1FBWUksWUFBTyxHQUFZLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQVksSUFBSSxDQUFDO1FBRTFCLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFFL0IsaUJBQWlCO1FBQ1YsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUc1QixlQUFlO1FBQ1IsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUk3QixpQkFBaUI7UUFDVixnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUUvQixZQUFZO1FBQ0wsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUUzQixjQUFjO1FBQ1AsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUUzQixNQUFNO1FBQ0MsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUduQyxRQUFRO1FBQ0QsZUFBVSxHQUFXLENBQUMsQ0FBQztRQUc5QixNQUFNO1FBQ0MsZUFBVSxHQUFZLEtBQUssQ0FBQTtRQUdsQyxjQUFjO1FBQ1Asa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFHdEMsY0FBYztRQUNQLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBR3ZDLFVBQVU7UUFDSCxXQUFNLEdBQVksS0FBSyxDQUFDO1FBRy9CLFlBQVk7UUFDTCxXQUFNLEdBQVksS0FBSyxDQUFDO1FBRy9CLFlBQVk7UUFDTCxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQUV2QyxZQUFZO1FBQ0wsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUdoQyxZQUFZO1FBQ0wsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUVqQyxZQUFZO1FBQ0wsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFHcEMsY0FBYztRQUNQLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUcxQyxZQUFZO1FB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LEVBQUUsQ0FBQzthQUM1QyxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU0sMEJBQVEsR0FBZjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7SUFuT2dCLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FxTzNCO0lBQUQsY0FBQztDQXJPRCxBQXFPQyxJQUFBO2tCQXJPb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuL0NvY29zWlwiO1xyXG5pbXBvcnQgQ29uc3RhbnQsIHsgUGFuZWxOYW1lIH0gZnJvbSBcIi4vQ29uc3RhbnRcIjtcclxuaW1wb3J0IEdhbWVDdHIgZnJvbSBcIi4vR2FtZUN0clwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVNZ3Ige1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0OiBHYW1lTWdyO1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXQgaW5zdCgpOiBHYW1lTWdyIHtcclxuICAgICAgICBpZiAoIUdhbWVNZ3IuX2luc3QpIHtcclxuICAgICAgICAgICAgR2FtZU1nci5faW5zdCA9IG5ldyBHYW1lTWdyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBHYW1lTWdyLl9pbnN0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpc0RlbGF5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9nYW1lQ3RyOiBHYW1lQ3RyID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgYXVkaW9CZzogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgLyoq6K6w5b2V6L+H5YWz5pWwIOWlluWKseWFs+WNoeeUqCAqL1xyXG4gICAgcHVibGljIExldmVsTnVtOiBudW1iZXIgPSAyO1xyXG5cclxuXHJcbiAgICAvKirorrDlvZXov4flhbPmlbAg5oq95aWW55SoICovXHJcbiAgICBwdWJsaWMgTGV2ZWxOdW0yOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcblxyXG4gICAgLyoq6K6w5b2V6L+H5YWz5pWwIOa3u+WKoOahjOmdoueUqCAqL1xyXG4gICAgcHVibGljIHBsYXlHYW1lTnVtOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKuWFs+WNoemHkeW4geaAu+aVsCAqL1xyXG4gICAgcHVibGljIG1heENvaW46IG51bWJlciA9IDQ7XHJcblxyXG4gICAgLyoq5YWz5Y2h6I635b6X6YeR5biB5oC75pWwICovXHJcbiAgICBwdWJsaWMgY29pbk51bTogbnVtYmVyID0gNDtcclxuXHJcbiAgICAvL+a4uOaIj+e7k+adn1xyXG4gICAgcHVibGljIGlzR2FtZU92ZXI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgLy/lpZblirHlhbPljaHnsbvlnotcclxuICAgIHB1YmxpYyByZXdhcmRUeXBlOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICAvL+a4uOaIj+e7k+adn1xyXG4gICAgcHVibGljIGlzU3RhcnREZWY6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuXHJcbiAgICAvKirlt6bovrnmsJTnkIPmmK/lkKbniIbngrggKi9cclxuICAgIHB1YmxpYyBpc0xlZnRCYWxsb29uOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIC8qKuWPs+i+ueawlOeQg+aYr+WQpueIhueCuCAqL1xyXG4gICAgcHVibGljIGlzcmlnaHRCYWxsb29uOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIC8qKuWPkeeOsOawlOeQgyAqL1xyXG4gICAgcHVibGljIGlzRmVlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAvKioy5Liq5o6n5Yi25oyJ6ZKuICovXHJcbiAgICBwdWJsaWMgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIC8qKuaYr+WQpuW3sue7j+Wkjea0uyAqL1xyXG4gICAgcHVibGljIGlzUmVzdXJyZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLyoq5piv5ZCm56ys5LiA5qyh6L+b5YWlKi9cclxuICAgIHB1YmxpYyBpc0ZpcnN0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIC8qKuaYr+WQpuesrOS4gOasoei/m+WFpSovXHJcbiAgICBwdWJsaWMgaXNGaXJzdDI6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvKirmmK/lkKblhbPljaHlhajlvIAgKi9cclxuICAgIHB1YmxpYyBpc0xldmVsT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAvKirmmK/lkKblvIDlkK/lpZblirHlhbPljaEgKi9cclxuICAgIHB1YmxpYyBpc09wZW5SZXdhcmRMZXZlbDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAvKirmmK/lkKblvIDlkK/mir3lpZYgKi9cclxuICAgIHB1YmxpYyBpc09wZW5Mb3R0ZXJ5OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIC8qKuW9k+WJjeWVhuW6l+earuiCpGlkKi9cclxuICAgIHB1YmxpYyBjdXJTaG9wU2tpbklEOiBudW1iZXIgPSAtMTtcclxuXHJcblxyXG5cclxuICAgIC8qKuW9k+WJjeWFs+WNoWlkKi9cclxuICAgIHB1YmxpYyBjdXJMZXZlbElEOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICAvKirlvZPliY3liankvZnlhbPljaEqL1xyXG4gICAgcHVibGljIHNlbGVsdExldmVsTGlzdDogYW55ID0gW107XHJcblxyXG4gICAgLyoq5b2T5YmN5Ymp5L2Z5YWz5Y2h5pWwKi9cclxuICAgIHB1YmxpYyBzdXJwbHVzTGV2ZWxOdW06IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoq5YiG5pWwKi9cclxuICAgIHB1YmxpYyBmcmFjdGlvbjogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvKirml6DlsL3lhbPljaHliIbmlbAqL1xyXG4gICAgcHVibGljIGdhbWUyRnJhY3Rpb246IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoq6ZWc5aS05bGP5bmV5pWwLOeCueWHu+S9jee9ruWBj+enuyovXHJcbiAgICBwdWJsaWMgdG91Y2hOdW06IG51bWJlciA9IDA7XHJcblxyXG5cclxuICAgIC8qKuaXoOWwveaooeW8j+Wkjea0u+agh+iusCovXHJcbiAgICBwdWJsaWMgaXNHYW1lMlJlc3VycmVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICAvKirml6DlsL3mqKHlvI/lvZPliY3lhbPljaFpZCovXHJcbiAgICBwdWJsaWMgY3VyR2FtZTJMZXZlbElEOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICAvKirml6DlsL3mqKHlvI/mgLvlhbPljaFpZCovXHJcbiAgICBwdWJsaWMgTWF4R2FtZTJMZXZlbElEOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcblxyXG4gICAgLyoq5peg5bC95qih5byP5b2T5YmN5YWz5Y2h5pWw5o2uKi9cclxuICAgIHB1YmxpYyBjdXJMZXZlbEpzb246IG51bWJlciA9IDA7XHJcblxyXG4gICAgLyoq5peg5bC95qih5byP5b2T5YmN5YWz5Y2h5pWw5o2uKi9cclxuICAgIHB1YmxpYyBoYW5kTnVtOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgb25CYWxsb29uRGVzKG5hbWUpIHtcclxuICAgICAgICBjYy5sb2codGhpcy5pc3JpZ2h0QmFsbG9vbiwgdGhpcy5pc0xlZnRCYWxsb29uLCBuYW1lKVxyXG4gICAgICAgIGlmIChuYW1lID09IFwibGVmdF9iYWxsb29uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0xlZnRCYWxsb29uID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobmFtZSA9PSBcInJpZ2h0X2JhbGxvb25cIikge1xyXG4gICAgICAgICAgICB0aGlzLmlzcmlnaHRCYWxsb29uID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzcmlnaHRCYWxsb29uICYmIHRoaXMuaXNMZWZ0QmFsbG9vbiAmJiB0aGlzLmlzR2FtZU92ZXIgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY2MubG9nKFwi5Lik5Y+q5rCU55CD54iG54K4XCIpXHJcbiAgICAgICAgICAgIC8vIHRoaXMuaXNHYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5QmVmb3JlRmVpbGRFZmZlY3QxKCk7XHJcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX1BST1BfQUxMQkFMTE9PTkRFUyk7XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FICYmIGNvY29zei5kYXRhTWdyLlNob2NrT24pIHtcclxuICAgICAgICAgICAgLy8gICAgIHdpbmRvd1tcInd4XCJdLnZpYnJhdGVMb25nKCk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGNvY29zei5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgY29jb3N6LnVpTWdyLm9wZW5QYW5lbChQYW5lbE5hbWUuVWlGYWlsZWQpO1xyXG4gICAgICAgICAgICAvLyB9LCAxKVxyXG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9HQU1FX0ZBSUQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgKiDlsITnur/mo4DmtYvvvIjmnInluo/vvIlcclxuICAgICovXHJcbiAgICBvblJheUNhc3Qoc3RhcnQsIGVuZCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLnJheUNhc3Qoc3RhcnQsIGVuZCwgY2MuUmF5Q2FzdFR5cGUuQWxsKTtcclxuICAgICAgICBsZXQgZGljdCA9IHt9O1xyXG4gICAgICAgIGxldCBsaXN0ID0gW107XHJcbiAgICAgICAgbGV0IG5ld1Jlc3VsdCA9IFtdO1xyXG4gICAgICAgIHN0YXJ0LnggPSBNYXRoLnJvdW5kKHN0YXJ0LngpO1xyXG4gICAgICAgIHN0YXJ0LnkgPSBNYXRoLnJvdW5kKHN0YXJ0LnkpO1xyXG4gICAgICAgIGVuZC54ID0gTWF0aC5yb3VuZChlbmQueCk7XHJcbiAgICAgICAgZW5kLnkgPSBNYXRoLnJvdW5kKGVuZC55KTtcclxuICAgICAgICBpZiAoc3RhcnQueSA9PSBlbmQueSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCByYiBvZiByZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwb2ludCA9IHJiLnBvaW50O1xyXG4gICAgICAgICAgICAgICAgcG9pbnQueCA9IE1hdGgucm91bmQocG9pbnQueCk7XHJcbiAgICAgICAgICAgICAgICBwb2ludC55ID0gTWF0aC5yb3VuZChwb2ludC55KTtcclxuICAgICAgICAgICAgICAgIGxldCBsZW4gPSBNYXRoLmFicyhzdGFydC54IC0gcG9pbnQueCk7XHJcbiAgICAgICAgICAgICAgICBkaWN0W2xlbl0gPSByYjtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaChsZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpc3Quc29ydCgoYSwgYikgPT4geyByZXR1cm4gYSAtIGIgfSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGxlbiBvZiBsaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBuZXdSZXN1bHQucHVzaChkaWN0W2xlbl0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCByYiBvZiByZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwb2ludCA9IHJiLnBvaW50O1xyXG4gICAgICAgICAgICAgICAgbGV0IGxlbiA9IE1hdGguYWJzKHN0YXJ0LnkgLSBwb2ludC55KTtcclxuICAgICAgICAgICAgICAgIGRpY3RbbGVuXSA9IHJiO1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKGxlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGlzdC5zb3J0KChhLCBiKSA9PiB7IHJldHVybiBhIC0gYiB9KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgbGVuIG9mIGxpc3QpIHtcclxuICAgICAgICAgICAgICAgIG5ld1Jlc3VsdC5wdXNoKGRpY3RbbGVuXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld1Jlc3VsdDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBub2RlIFxyXG4gICAgICogQHBhcmFtIE1heFNjYWxlIOacgOWkp+WAvCBcclxuICAgICAqIEBwYXJhbSBzbWFsbGVzdCAg5pyA5bCP5YC8XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0d2VlQnRuKG5vZGU6IGNjLk5vZGUsIE1heFNjYWxlOiBudW1iZXIsIHNtYWxsU2NhbGU6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBzY2FsZSA9IGNjLnR3ZWVuKClcclxuICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogTWF4U2NhbGUgfSlcclxuICAgICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogc21hbGxTY2FsZSB9KVxyXG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgIC50aGVuKHNjYWxlKVxyXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcigpXHJcbiAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHR3ZWVOb2RlKG5vZGU6IGNjLk5vZGUpIHtcclxuICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAudG8oMC4zLCB7IHNjYWxlOiAxIH0sIHsgZWFzaW5nOiBcImJhY2tPdXRcIiB9KVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdEdhbWUoKSB7XHJcbiAgICAgICAgbGV0IG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIG5vZGUuZ3JvdXAgPSBcImRlZmF1bHRcIjtcclxuICAgICAgICBub2RlLnpJbmRleCA9IC0xO1xyXG4gICAgICAgIG5vZGUubmFtZSA9IFwiR2FtZVwiO1xyXG4gICAgICAgIHRoaXMuX2dhbWVDdHIgPSBub2RlLmFkZENvbXBvbmVudChcIk5vcm1hbE1vZGVsQ3RyXCIpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==