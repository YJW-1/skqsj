
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Constant.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f854bej/JVHcLJtmjnyYHmD', 'Constant');
// script/Framework/Constant.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Constant = /** @class */ (function () {
    function Constant() {
    }
    ;
    /**
     * 每个主题多少关
     */
    Constant.CT_LevelCountPerTheme = 20;
    /**
     * 皮肤总数量
     */
    Constant.CT_SkinCount = 9;
    /**
     * 总关卡数量
     */
    Constant.CT_TotalLevelCount = 300;
    /**
     * 每过一关奖励钻石数量
     */
    Constant.CT_RewardDiamondCount = 200;
    /**
     * 每日签到的金额
     */
    Constant.Money = [100, -1, 200, 500, -2, 1000, -3];
    /**今日奖励 */
    Constant.LastDailyBonusIndex = "LastDailyBonusIndex";
    /**今日签到的时间 */
    Constant.LastDailyBonusTime = "LastDailyBonusTime";
    Constant.ST_GameData = "GameData";
    Constant.ST_CurLevelId = "CurLevelId";
    Constant.ST_MaxLevelId = "MaxLevelId";
    Constant.ST_ResetLevelId = "ResetLevelId";
    Constant.ST_MaxUnlockLevelCount = "MaxUnlockLevelCount";
    //无尽模式分数
    Constant.ST_Game2Fraction = "ST_Game2Fraction";
    /**无尽模式关卡队列 */
    Constant.ST_Game2LevelList = "ST_Game2LevelList";
    //无尽模式新手
    Constant.ST_IsGame2Novice = "ST_IsGame2Novice";
    //音乐开关
    Constant.ST_AudioOn = "AudioOn";
    //音效开关
    Constant.ST_AudioEffectOn = "AudioEffectOn";
    //震动开关
    Constant.ST_ShockOn = "ShockOn";
    Constant.SjShop = "SjShop"; //升级费用
    /**金钱 */
    Constant.ST_CoinCount = "ST_StarCount";
    /**奖励关卡类型 */
    Constant.ST_RewardType = "ST_RewardType";
    Constant.ST_SkinInfo = "SkinInfo";
    /**人物皮肤 */
    Constant.ST_CurSkinId = "ST_CurSkinId";
    /**当前气球皮肤 */
    Constant.ST_CurBallbonSkinId = "ST_CurBallbonSkinId";
    /** 气球皮肤信息 */
    Constant.ST_BallbonSkinInfo = "ST_BallbonSkinInfo";
    /**跳过卡数量 */
    Constant.ST_SkinVedioNum = "ST_SkinVedioNum";
    /**炸弹数量 */
    Constant.ST_BoomNum = "ST_BoomNum";
    Constant.ST_LevelItem = "LevelItem";
    /**过关时关卡表情存储 */
    Constant.ST_FaceNum = "FaceNum";
    /**每关获得的星星数量 */
    Constant.ST_StarNum = "StarNum";
    /**转盘剩余次数*/
    Constant.ST_Lottery = "Lottery";
    /**转盘剩余次数*/
    Constant.ST_RamdomLevel1 = "ST_RamdomLevel1";
    /**转盘剩余次数*/
    Constant.ST_RamdomLevel2 = "ST_RamdomLevel2";
    /**转盘剩余次数*/
    Constant.ST_RamdomLevel3 = "ST_RamdomLevel3";
    /**
     * 游戏逻辑事件
     */
    Constant.E_GAME_LOGIC = "E_GAME_LOGIC";
    /**
     * 更新进度条事件
     */
    Constant.E_UPDATE_PROGRESS = "E_UPDATE_PROGRESS";
    /**
     * 开始加载资源事件
     */
    Constant.E_LOAD_RES = "E_LOAD_RES";
    /**
        * 事件:开始游戏
        */
    Constant.E_GAME_START = "E_GAME_START";
    Constant.E_LEVEL_FAILED = "E_LEVEL_FAILED";
    Constant.E_LEVEL_COMPLETE = "E_LEVEL_COMPLETE";
    /**
     * 事件：刷新关卡进度条
     */
    Constant.E_UPDATE_DISTANCE = "E_UPDATE_DISTANCE";
    /**
     * 事件：选择皮肤
     */
    Constant.E_SELECT_SKIN = "select_skin";
    /**
     * 事件：试用皮肤
     */
    Constant.E_TRY_SKIN = "try_skin";
    /**
     * 事件：当前关卡id改变
     */
    Constant.E_CURLEVEL_CHANGED = "curlevel_changed";
    /**
     * 事件:游戏胜利
     */
    Constant.E_GAME_VECTORY = "put_game_vectory";
    /**
     * 事件:游戏失败
     */
    Constant.E_GAME_FAID = "E_GAME_FAID";
    /**
     * 事件:重新开始
     */
    Constant.E_RESTART = "restart";
    /**
     * 事件:进入下一关
     */
    Constant.E_GAME_NEXTLEVEL = "game_nextlevel";
    /**
     * 事件:更新金币
     */
    Constant.E_UPDATE_COIN = "update_coin";
    /**
     * 事件:地图初始化完成
     */
    Constant.E_MAP_FINISH = "E_MAP_FINISH";
    /**
     * 事件:更新皮肤
     */
    Constant.E_UPDATE_SKIN = "update_skin";
    /**事件:返回主界面 */
    Constant.E_BACK_HOME = "back_home";
    /**失败表情 */
    Constant.E_FAILD_FACE = "faild_face";
    /**胜利表情 */
    Constant.E_WIN_FACE = "win_face";
    /**点击屏幕 */
    Constant.E_TOUCH_SCREEN = "touch_screen";
    /**主角移动 */
    Constant.E_ROLE_MOVE = "role_move";
    /**玩家复活 */
    Constant.E_ROLE_RESURRECTION = "E_ROLE_RESURRECTION";
    /**启动弹簧 */
    Constant.E_ROLE_SPRING = "E_ROLE_SPRING";
    /**一只气球爆炸 */
    Constant.E_PROP_BALLOONDES = "E_PROP_BALLOONDES";
    /**气球碰到激光 */
    Constant.E_PROP_BALLOONDESBYLASER = "E_PROP_BALLOONDESBYLASER";
    /**主角碰撞 */
    Constant.E_ROLE_COLLISIONENTER = "E_ROLE_COLLISIONENTER";
    /**主角物理碰撞 */
    Constant.E_ROLE_CONTACTENTER = "E_ROLE_CONTACTENTER";
    /**新手指引步骤1 */
    Constant.E_TIPS_NEXT = "E_TIPS_NEXT";
    /**新手指引步骤2 */
    Constant.E_TIPS_NEXT2 = "E_TIPS_NEXT2";
    /**所有气球爆炸 */
    Constant.E_PROP_ALLBALLOONDES = "E_PROP_ALLBALLOONDES";
    /**停止音乐*/
    Constant.E_MUSIC_STOP = "E_MUSIC_STOP";
    /**所有气球爆炸 */
    Constant.E_ADClOSE = "E_ADClOSE";
    Constant = __decorate([
        ccclass
    ], Constant);
    return Constant;
}());
exports.default = Constant;
var GameState;
(function (GameState) {
    GameState[GameState["None"] = -1] = "None";
    GameState[GameState["Prepare"] = 0] = "Prepare";
    GameState[GameState["Start"] = 1] = "Start";
    GameState[GameState["Success"] = 2] = "Success";
    GameState[GameState["Failed"] = 3] = "Failed";
})(GameState = exports.GameState || (exports.GameState = {}));
var Direction;
(function (Direction) {
    Direction[Direction["left"] = 0] = "left";
    Direction[Direction["right"] = 1] = "right";
    Direction[Direction["up"] = 2] = "up";
    Direction[Direction["down"] = 3] = "down";
})(Direction = exports.Direction || (exports.Direction = {}));
/**物理碰撞 */
var tag;
(function (tag) {
    /**主角 */
    tag[tag["player"] = 1] = "player";
    /**拉着气球的绳子 */
    tag[tag["rope"] = 2] = "rope";
    /**气球 */
    tag[tag["balloon"] = 3] = "balloon";
    /**气球 */
    tag[tag["balloon2"] = 37] = "balloon2";
    /**仙人掌刺 */
    tag[tag["thorn"] = 4] = "thorn";
    /**石头 */
    tag[tag["stone"] = 5] = "stone";
    /**地刺 */
    tag[tag["floorThorn"] = 6] = "floorThorn";
    /**滑动挡板 */
    tag[tag["moveFloor"] = 7] = "moveFloor";
    /**隐形挡板 */
    tag[tag["invisibleFloor"] = 8] = "invisibleFloor";
    /**蝙蝠 */
    tag[tag["bat"] = 9] = "bat";
    /**火箭发射器 */
    tag[tag["rocketFloor"] = 10] = "rocketFloor";
    /**仙人掌 */
    tag[tag["rocket"] = 11] = "rocket";
    /**小风扇 */
    tag[tag["miniFan"] = 12] = "miniFan";
    /**蜜蜂 */
    tag[tag["honeybee"] = 31] = "honeybee";
    /**大风扇 */
    tag[tag["bigFan"] = 32] = "bigFan";
    /**纸箱 */
    tag[tag["carton"] = 33] = "carton";
    /**雨 */
    tag[tag["rain"] = 34] = "rain";
    /**云 */
    tag[tag["cloud"] = 35] = "cloud";
    /**木箱 */
    tag[tag["wooldenBox"] = 36] = "wooldenBox";
    /**轮刺 */
    tag[tag["stone3"] = 55] = "stone3";
    /**激光 */
    tag[tag["laser"] = 56] = "laser";
    /**激光 */
    tag[tag["wooldenBox2"] = 81] = "wooldenBox2";
    /**胜利点 */
    tag[tag["succeedPoint"] = 99] = "succeedPoint";
    /**准备胜利点 */
    tag[tag["beforeSucceedPoint"] = 97] = "beforeSucceedPoint";
    /**失败点 */
    tag[tag["faidPoint"] = 98] = "faidPoint";
    /**道具销毁点 */
    tag[tag["desPoint"] = 799] = "desPoint";
    /**球 */
    tag[tag["ball"] = 666] = "ball";
})(tag = exports.tag || (exports.tag = {}));
var PageName = /** @class */ (function () {
    function PageName() {
    }
    /**首页 */
    PageName.UiHome = "UiHome";
    /**加载 */
    PageName.UiLoad = "UiLoad";
    /**游戏 */
    PageName.UiGame = "UiGame";
    /**游戏 */
    PageName.UiLoadGame = "UiLoadGame";
    return PageName;
}());
exports.PageName = PageName;
var PanelName = /** @class */ (function () {
    function PanelName() {
    }
    /**选关 */
    PanelName.LevelPanel = "LevelPanel";
    /**商店 */
    PanelName.UiShop = "UiShop";
    /**暂停 */
    PanelName.PausePanel = "PausePanel";
    /**金币不足 */
    PanelName.CoinTipsPanel = "CoinTipsPanel";
    /**失败 */
    PanelName.UiFailed = "UiFailed";
    /**胜利 */
    PanelName.UiSucceed = "UiSucceed";
    /**签到 */
    PanelName.UiSign = "UiSign";
    /**试用皮肤 */
    PanelName.TrialPanel = "TrialPanel";
    /**幸运转盘 */
    PanelName.UiLottery = "UiLottery";
    /**设置 */
    PanelName.UiSet = "UiSet";
    /**结算前广告 */
    PanelName.UiBeforeSucceed = "UiBeforeSucceed";
    /**复活页面 */
    PanelName.UiResurrection = "UiResurrection";
    return PanelName;
}());
exports.PanelName = PanelName;
var PrefabName = /** @class */ (function () {
    function PrefabName() {
    }
    /** deng*/
    PrefabName.deng = "deng";
    /** dengjiang*/
    PrefabName.dengjiang = "dengjiang";
    /** BackGround*/
    PrefabName.denghua = "BackGround";
    /** zhangai_zheng*/
    PrefabName.zhangai_zheng = "zhangai_zheng";
    /** zhangai_jiao*/
    PrefabName.zhangai_jiao = "zhangai_jiao";
    /** zhangai_yuan*/
    PrefabName.zhangai_yuan = "zhangai_yuan";
    /** SP_qidian*/
    PrefabName.SP_qidian = "SP_qidian";
    /** TipsRope*/
    PrefabName.TipsRope = "TipsRope";
    return PrefabName;
}());
exports.PrefabName = PrefabName;
var SkinInfo = /** @class */ (function () {
    function SkinInfo(str) {
        // cc.log("构建 SkinInfo :", str);
        var info = JSON.parse(str);
        if (info) {
            if (info.Id) {
                this.Id = parseInt(info.Id);
            }
            else {
                cc.log("Id 字段不存在!");
            }
            if (info.State) {
                this.State = parseInt(info.State);
            }
            else {
                cc.log("State 字段不存在!");
            }
            if (info.Price) {
                this.Price = parseInt(info.Price);
            }
            else {
                cc.log("Price 字段不存在!");
            }
        }
        else {
            cc.log("构建 SkinInfo 的字符串不合法!");
        }
    }
    SkinInfo.prototype.ToString = function () {
        return "{\"Id\":\"" + this.Id + "\",\"State:\"" + this.State + "\",\"Price\":\"" + this.Price + "\"}";
    };
    return SkinInfo;
}());
exports.SkinInfo = SkinInfo;
var Levelitem = /** @class */ (function () {
    function Levelitem(str) {
        var info = JSON.parse(str);
        if (info) {
            if (info.Id) {
                this.Id = parseInt(info.Id);
            }
            else {
                cc.log("Id 字段不存在!");
            }
            if (info.State) {
                this.State = parseInt(info.State);
            }
            else {
                cc.log("State 字段不存在!");
            }
            if (info.fraction) {
                this.fraction = parseInt(info.fraction);
            }
            else {
                cc.log("fraction 字段不存在!");
            }
        }
        else {
            cc.log("构建 Levelitem 的字符串不合法!");
        }
    }
    Levelitem.prototype.ToString = function () {
        return "{\"Id\":\"" + this.Id + "\",\"State:\"" + this.State + ",\"fraction\":\"" + 0 + "\"\"}";
    };
    return Levelitem;
}());
exports.Levelitem = Levelitem;
var FloorType;
(function (FloorType) {
    FloorType["typezzz1"] = "5001_1";
    FloorType["type2"] = "5001_2";
    FloorType["type3"] = "5001_B_02";
    FloorType["type4"] = "5001_B_01";
    FloorType["type5"] = "5001_B_03";
    FloorType["type6"] = "5001_B_04";
    FloorType["type7"] = "5001_B_05";
    FloorType["type8"] = "5001_B_06";
    FloorType["type9"] = "5001_J1_1";
    FloorType["type10"] = "5001_J1_2";
    FloorType["type11"] = "5001_J2_1";
    FloorType["type12"] = "5001_J2_2";
    FloorType["type13"] = "5001_J3_1";
    FloorType["type14"] = "5001_J3_2";
    FloorType["type15"] = "5001_J4_1";
    FloorType["type16"] = "5001_J4_2";
    FloorType["type17"] = "5001_M_01";
    FloorType["type18"] = "5001_Z_1";
    FloorType["type101"] = "5002_1_1";
    FloorType["type102"] = "5002_1_2";
    FloorType["type103"] = "5002_2_1";
    FloorType["type104"] = "5002_2_2";
    FloorType["type105"] = "5002_3_2";
    FloorType["type107"] = "5002_4_2";
    //左右边界
    FloorType["type201"] = "leftAndRightBoundary";
    //上下边界
    FloorType["type202"] = "upAndDownBoundary";
})(FloorType = exports.FloorType || (exports.FloorType = {}));
// export function getItemType(id: number) {
//     if (id < 0 || id >= TypeIdArray.length) {
//         return null;
//     }
//     return TypeIdArray[id];
// }
// export function getTypeId(id: TypeId) {
//     return TypeIdArray.indexOf(id);
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXENvbnN0YW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQUE7SUF3TUEsQ0FBQztJQXBMRyxDQUFDO0lBakJEOztPQUVHO0lBQ1csOEJBQXFCLEdBQVcsRUFBRSxDQUFDO0lBQ2pEOztPQUVHO0lBQ1cscUJBQVksR0FBVyxDQUFDLENBQUM7SUFDdkM7O09BRUc7SUFDVywyQkFBa0IsR0FBVyxHQUFHLENBQUM7SUFDL0M7O09BRUc7SUFDVyw4QkFBcUIsR0FBVyxHQUFHLENBQUM7SUFLbEQ7O09BRUc7SUFDVyxjQUFLLEdBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVsRSxVQUFVO0lBQ0ksNEJBQW1CLEdBQVcscUJBQXFCLENBQUM7SUFDbEUsYUFBYTtJQUNDLDJCQUFrQixHQUFXLG9CQUFvQixDQUFDO0lBQ2xELG9CQUFXLEdBQVcsVUFBVSxDQUFDO0lBQ2pDLHNCQUFhLEdBQVcsWUFBWSxDQUFDO0lBQ3JDLHNCQUFhLEdBQVcsWUFBWSxDQUFDO0lBQ3JDLHdCQUFlLEdBQVcsY0FBYyxDQUFDO0lBRXpDLCtCQUFzQixHQUFXLHFCQUFxQixDQUFDO0lBRXJFLFFBQVE7SUFDTSx5QkFBZ0IsR0FBVyxrQkFBa0IsQ0FBQztJQUM1RCxjQUFjO0lBQ0EsMEJBQWlCLEdBQVcsbUJBQW1CLENBQUM7SUFDOUQsUUFBUTtJQUNNLHlCQUFnQixHQUFXLGtCQUFrQixDQUFDO0lBQzVELE1BQU07SUFDUSxtQkFBVSxHQUFXLFNBQVMsQ0FBQztJQUM3QyxNQUFNO0lBQ1EseUJBQWdCLEdBQVcsZUFBZSxDQUFDO0lBQ3pELE1BQU07SUFDUSxtQkFBVSxHQUFX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LElBQUk7QUFFSiwwQ0FBMEM7QUFDMUMsc0NBQXNDO0FBQ3RDLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdGFudCB7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5q+P5Liq5Li76aKY5aSa5bCR5YWzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ1RfTGV2ZWxDb3VudFBlclRoZW1lOiBudW1iZXIgPSAyMDtcclxuICAgIC8qKlxyXG4gICAgICog55qu6IKk5oC75pWw6YePXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ1RfU2tpbkNvdW50OiBudW1iZXIgPSA5O1xyXG4gICAgLyoqXHJcbiAgICAgKiDmgLvlhbPljaHmlbDph49cclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDVF9Ub3RhbExldmVsQ291bnQ6IG51bWJlciA9IDMwMDtcclxuICAgIC8qKlxyXG4gICAgICog5q+P6L+H5LiA5YWz5aWW5Yqx6ZK755+z5pWw6YePXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgQ1RfUmV3YXJkRGlhbW9uZENvdW50OiBudW1iZXIgPSAyMDA7XHJcblxyXG4gICAgO1xyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOavj+aXpeetvuWIsOeahOmHkeminVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIE1vbmV5OiBudW1iZXJbXSA9IFsxMDAsIC0xLCAyMDAsIDUwMCwgLTIsIDEwMDAsIC0zXTtcclxuXHJcbiAgICAvKirku4rml6XlpZblirEgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTGFzdERhaWx5Qm9udXNJbmRleDogc3RyaW5nID0gXCJMYXN0RGFpbHlCb251c0luZGV4XCI7XHJcbiAgICAvKirku4rml6Xnrb7liLDnmoTml7bpl7QgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTGFzdERhaWx5Qm9udXNUaW1lOiBzdHJpbmcgPSBcIkxhc3REYWlseUJvbnVzVGltZVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBTVF9HYW1lRGF0YTogc3RyaW5nID0gXCJHYW1lRGF0YVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBTVF9DdXJMZXZlbElkOiBzdHJpbmcgPSBcIkN1ckxldmVsSWRcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgU1RfTWF4TGV2ZWxJZDogc3RyaW5nID0gXCJNYXhMZXZlbElkXCI7XHJcbiAgICBwdWJsaWMgc3RhdGljIFNUX1Jlc2V0TGV2ZWxJZDogc3RyaW5nID0gXCJSZXNldExldmVsSWRcIjtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFNUX01heFVubG9ja0xldmVsQ291bnQ6IHN0cmluZyA9IFwiTWF4VW5sb2NrTGV2ZWxDb3VudFwiO1xyXG5cclxuICAgIC8v5peg5bC95qih5byP5YiG5pWwXHJcbiAgICBwdWJsaWMgc3RhdGljIFNUX0dhbWUyRnJhY3Rpb246IHN0cmluZyA9IFwiU1RfR2FtZTJGcmFjdGlvblwiO1xyXG4gICAgLyoq5peg5bC95qih5byP5YWz5Y2h6Zif5YiXICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNUX0dhbWUyTGV2ZWxMaXN0OiBzdHJpbmcgPSBcIlNUX0dhbWUyTGV2ZWxMaXN0XCI7XHJcbiAgICAvL+aXoOWwveaooeW8j+aWsOaJi1xyXG4gICAgcHVibGljIHN0YXRpYyBTVF9Jc0dhbWUyTm92aWNlOiBzdHJpbmcgPSBcIlNUX0lzR2FtZTJOb3ZpY2VcIjtcclxuICAgIC8v6Z+z5LmQ5byA5YWzXHJcbiAgICBwdWJsaWMgc3RhdGljIFNUX0F1ZGlvT246IHN0cmluZyA9IFwiQXVkaW9PblwiO1xyXG4gICAgLy/pn7PmlYjlvIDlhbNcclxuICAgIHB1YmxpYyBzdGF0aWMgU1RfQXVkaW9FZmZlY3RPbjogc3RyaW5nID0gXCJBdWRpb0VmZmVjdE9uXCI7XHJcbiAgICAvL+mch+WKqOW8gOWFs1xyXG4gICAgcHVibGljIHN0YXRpYyBTVF9TaG9ja09uOiBzdHJpbmcgPSBcIlNob2NrT25cIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgU2pTaG9wOiBzdHJpbmcgPSBcIlNqU2hvcFwiOy8v5Y2H57qn6LS555SoXHJcbiAgICAvKirph5HpkrEgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU1RfQ29pbkNvdW50OiBzdHJpbmcgPSBcIlNUX1N0YXJDb3VudFwiO1xyXG4gICAgLyoq5aWW5Yqx5YWz5Y2h57G75Z6LICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNUX1Jld2FyZFR5cGU6IHN0cmluZyA9IFwiU1RfUmV3YXJkVHlwZVwiO1xyXG4gICAgcHVibGljIHN0YXRpYyBTVF9Ta2luSW5mbzogc3RyaW5nID0gXCJTa2luSW5mb1wiO1xyXG4gICAgLyoq5Lq654mp55qu6IKkICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNUX0N1clNraW5JZDogc3RyaW5nID0gXCJTVF9DdXJTa2luSWRcIjtcclxuICAgIC8qKuW9k+WJjeawlOeQg+earuiCpCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBTVF9DdXJCYWxsYm9uU2tpbklkOiBzdHJpbmcgPSBcIlNUX0N1ckJhbGxib25Ta2luSWRcIjtcclxuICAgIC8qKiDmsJTnkIPnmq7ogqTkv6Hmga8gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU1RfQmFsbGJvblNraW5JbmZvOiBzdHJpbmcgPSBcIlNUX0JhbGxib25Ta2luSW5mb1wiO1xyXG4gICAgLyoq6Lez6L+H5Y2h5pWw6YePICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNUX1NraW5WZWRpb051bTogc3RyaW5nID0gXCJTVF9Ta2luVmVkaW9OdW1cIjtcclxuICAgIC8qKueCuOW8ueaVsOmHjyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBTVF9Cb29tTnVtOiBzdHJpbmcgPSBcIlNUX0Jvb21OdW1cIjtcclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgU1RfTGV2ZWxJdGVtOiBzdHJpbmcgPSBcIkxldmVsSXRlbVwiO1xyXG4gICAgLyoq6L+H5YWz5pe25YWz5Y2h6KGo5oOF5a2Y5YKoICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNUX0ZhY2VOdW06IHN0cmluZyA9IFwiRmFjZU51bVwiO1xyXG4gICAgLyoq5q+P5YWz6I635b6X55qE5pif5pif5pWw6YePICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFNUX1N0YXJOdW06IHN0cmluZyA9IFwiU3Rhck51bVwiO1xyXG4gICAgLyoq6L2s55uY5Ymp5L2Z5qyh5pWwKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU1RfTG90dGVyeTogc3RyaW5nID0gXCJMb3R0ZXJ5XCI7XHJcblxyXG5cclxuXHJcbiAgICAvKirovaznm5jliankvZnmrKHmlbAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBTVF9SYW1kb21MZXZlbDE6IHN0cmluZyA9IFwiU1RfUmFtZG9tTGV2ZWwxXCI7XHJcbiAgICAvKirovaznm5jliankvZnmrKHmlbAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBTVF9SYW1kb21MZXZlbDI6IHN0cmluZyA9IFwiU1RfUmFtZG9tTGV2ZWwyXCI7XHJcbiAgICAvKirovaznm5jliankvZnmrKHmlbAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBTVF9SYW1kb21MZXZlbDM6IHN0cmluZyA9IFwiU1RfUmFtZG9tTGV2ZWwzXCI7XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5ri45oiP6YC76L6R5LqL5Lu2XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRV9HQU1FX0xPR0lDOiBzdHJpbmcgPSBcIkVfR0FNRV9MT0dJQ1wiO1xyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDov5vluqbmnaHkuovku7ZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBFX1VQREFURV9QUk9HUkVTUzogc3RyaW5nID0gXCJFX1VQREFURV9QUk9HUkVTU1wiO1xyXG4gICAgLyoqXHJcbiAgICAgKiDlvIDlp4vliqDovb3otYTmupDkuovku7ZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBFX0xPQURfUkVTOiBzdHJpbmcgPSBcIkVfTE9BRF9SRVNcIjtcclxuICAgIC8qKlxyXG4gICAgICAgICog5LqL5Lu2OuW8gOWni+a4uOaIj1xyXG4gICAgICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEVfR0FNRV9TVEFSVDogc3RyaW5nID0gXCJFX0dBTUVfU1RBUlRcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgRV9MRVZFTF9GQUlMRUQ6IHN0cmluZyA9IFwiRV9MRVZFTF9GQUlMRURcIjtcclxuICAgIHB1YmxpYyBzdGF0aWMgRV9MRVZFTF9DT01QTEVURTogc3RyaW5nID0gXCJFX0xFVkVMX0NPTVBMRVRFXCI7XHJcbiAgICAvKipcclxuICAgICAqIOS6i+S7tu+8muWIt+aWsOWFs+WNoei/m+W6puadoVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEVfVVBEQVRFX0RJU1RBTkNFOiBzdHJpbmcgPSBcIkVfVVBEQVRFX0RJU1RBTkNFXCI7XHJcbiAgICAvKipcclxuICAgICAqIOS6i+S7tu+8mumAieaLqeearuiCpFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEVfU0VMRUNUX1NLSU46IHN0cmluZyA9IFwic2VsZWN0X3NraW5cIjtcclxuICAgIC8qKlxyXG4gICAgICog5LqL5Lu277ya6K+V55So55qu6IKkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRV9UUllfU0tJTjogc3RyaW5nID0gXCJ0cnlfc2tpblwiO1xyXG4gICAgLyoqXHJcbiAgICAgKiDkuovku7bvvJrlvZPliY3lhbPljaFpZOaUueWPmFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEVfQ1VSTEVWRUxfQ0hBTkdFRDogc3RyaW5nID0gXCJjdXJsZXZlbF9jaGFuZ2VkXCI7XHJcbiAgICAvKipcclxuICAgICAqIOS6i+S7tjrmuLjmiI/og5zliKlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBFX0dBTUVfVkVDVE9SWTogc3RyaW5nID0gXCJwdXRfZ2FtZV92ZWN0b3J5XCI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkuovku7Y65ri45oiP5aSx6LSlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRV9HQU1FX0ZBSUQ6IHN0cmluZyA9IFwiRV9HQU1FX0ZBSURcIjtcclxuICAgIC8qKlxyXG4gICAgICog5LqL5Lu2OumHjeaWsOW8gOWni1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEVfUkVTVEFSVDogc3RyaW5nID0gXCJyZXN0YXJ0XCI7XHJcbiAgICAvKipcclxuICAgICAqIOS6i+S7tjrov5vlhaXkuIvkuIDlhbNcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBFX0dBTUVfTkVYVExFVkVMOiBzdHJpbmcgPSBcImdhbWVfbmV4dGxldmVsXCI7XHJcbiAgICAvKipcclxuICAgICAqIOS6i+S7tjrmm7TmlrDph5HluIFcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBFX1VQREFURV9DT0lOOiBzdHJpbmcgPSBcInVwZGF0ZV9jb2luXCI7XHJcbiAgICAvKipcclxuICAgICAqIOS6i+S7tjrlnLDlm77liJ3lp4vljJblrozmiJBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBFX01BUF9GSU5JU0g6IHN0cmluZyA9IFwiRV9NQVBfRklOSVNIXCI7XHJcbiAgICAvKipcclxuICAgICAqIOS6i+S7tjrmm7TmlrDnmq7ogqRcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBFX1VQREFURV9TS0lOOiBzdHJpbmcgPSBcInVwZGF0ZV9za2luXCI7XHJcbiAgICAvKirkuovku7Y66L+U5Zue5Li755WM6Z2iICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEVfQkFDS19IT01FOiBzdHJpbmcgPSBcImJhY2tfaG9tZVwiO1xyXG4gICAgLyoq5aSx6LSl6KGo5oOFICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEVfRkFJTERfRkFDRTogc3RyaW5nID0gXCJmYWlsZF9mYWNlXCI7XHJcbiAgICAvKirog5zliKnooajmg4UgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRV9XSU5fRkFDRTogc3RyaW5nID0gXCJ3aW5fZmFjZVwiO1xyXG4gICAgLyoq54K55Ye75bGP5bmVICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEVfVE9VQ0hfU0NSRUVOOiBzdHJpbmcgPSBcInRvdWNoX3NjcmVlblwiO1xyXG4gICAgLyoq5Li76KeS56e75YqoICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEVfUk9MRV9NT1ZFOiBzdHJpbmcgPSBcInJvbGVfbW92ZVwiO1xyXG5cclxuXHJcblxyXG4gICAgLyoq546p5a625aSN5rS7ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEVfUk9MRV9SRVNVUlJFQ1RJT046IHN0cmluZyA9IFwiRV9ST0xFX1JFU1VSUkVDVElPTlwiO1xyXG5cclxuICAgIC8qKuWQr+WKqOW8ueewpyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBFX1JPTEVfU1BSSU5HOiBzdHJpbmcgPSBcIkVfUk9MRV9TUFJJTkdcIjtcclxuXHJcbiAgICAvKirkuIDlj6rmsJTnkIPniIbngrggKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRV9QUk9QX0JBTExPT05ERVM6IHN0cmluZyA9IFwiRV9QUk9QX0JBTExPT05ERVNcIjtcclxuXHJcbiAgICAvKirmsJTnkIPnorDliLDmv4DlhYkgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRV9QUk9QX0JBTExPT05ERVNCWUxBU0VSOiBzdHJpbmcgPSBcIkVfUFJPUF9CQUxMT09OREVTQllMQVNFUlwiO1xyXG5cclxuXHJcblxyXG4gICAgLyoq5Li76KeS56Kw5pKeICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEVfUk9MRV9DT0xMSVNJT05FTlRFUjogc3RyaW5nID0gXCJFX1JPTEVfQ09MTElTSU9ORU5URVJcIjtcclxuXHJcbiAgICAvKirkuLvop5LniannkIbnorDmkp4gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgRV9ST0xFX0NPTlRBQ1RFTlRFUjogc3RyaW5nID0gXCJFX1JPTEVfQ09OVEFDVEVOVEVSXCI7XHJcblxyXG4gICAgLyoq5paw5omL5oyH5byV5q2l6aqkMSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBFX1RJUFNfTkVYVDogc3RyaW5nID0gXCJFX1RJUFNfTkVYVFwiO1xyXG4gICAgLyoq5paw5omL5oyH5byV5q2l6aqkMiAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBFX1RJUFNfTkVYVDI6IHN0cmluZyA9IFwiRV9USVBTX05FWFQyXCI7XHJcblxyXG5cclxuICAgIC8qKuaJgOacieawlOeQg+eIhueCuCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBFX1BST1BfQUxMQkFMTE9PTkRFUzogc3RyaW5nID0gXCJFX1BST1BfQUxMQkFMTE9PTkRFU1wiO1xyXG5cclxuXHJcbiAgICAvKirlgZzmraLpn7PkuZAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBFX01VU0lDX1NUT1A6IHN0cmluZyA9IFwiRV9NVVNJQ19TVE9QXCI7XHJcblxyXG4gICAgLyoq5omA5pyJ5rCU55CD54iG54K4ICovXHJcbiAgICBwdWJsaWMgc3RhdGljIEVfQURDbE9TRTogc3RyaW5nID0gXCJFX0FEQ2xPU0VcIjtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEdhbWVTdGF0ZSB7XHJcbiAgICBOb25lID0gLTEsXHJcbiAgICBQcmVwYXJlID0gMCxcclxuICAgIFN0YXJ0ID0gMSxcclxuICAgIFN1Y2Nlc3MgPSAyLFxyXG4gICAgRmFpbGVkID0gM1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGVudW0gRGlyZWN0aW9uIHtcclxuICAgIGxlZnQgPSAwLFxyXG4gICAgcmlnaHQgPSAxLFxyXG4gICAgdXAgPSAyLFxyXG4gICAgZG93biA9IDNcclxufVxyXG5cclxuXHJcblxyXG5cclxuLyoq54mp55CG56Kw5pKeICovXHJcbmV4cG9ydCBlbnVtIHRhZyB7XHJcbiAgICAvKirkuLvop5IgKi9cclxuICAgIHBsYXllciA9IDEsXHJcbiAgICAvKirmi4nnnYDmsJTnkIPnmoTnu7PlrZAgKi9cclxuICAgIHJvcGUgPSAyLFxyXG4gICAgLyoq5rCU55CDICovXHJcbiAgICBiYWxsb29uID0gMyxcclxuICAgIC8qKuawlOeQgyAqL1xyXG4gICAgYmFsbG9vbjIgPSAzNyxcclxuICAgIC8qKuS7meS6uuaOjOWIuiAqL1xyXG4gICAgdGhvcm4gPSA0LFxyXG4gICAgLyoq55+z5aS0ICovXHJcbiAgICBzdG9uZSA9IDUsXHJcbiAgICAvKirlnLDliLogKi9cclxuICAgIGZsb29yVGhvcm4gPSA2LFxyXG4gICAgLyoq5ruR5Yqo5oyh5p2/ICovXHJcbiAgICBtb3ZlRmxvb3IgPSA3LFxyXG4gICAgLyoq6ZqQ5b2i5oyh5p2/ICovXHJcbiAgICBpbnZpc2libGVGbG9vciA9IDgsXHJcbiAgICAvKironZnonaAgKi9cclxuICAgIGJhdCA9IDksXHJcbiAgICAvKirngavnrq3lj5HlsITlmaggKi9cclxuICAgIHJvY2tldEZsb29yID0gMTAsXHJcbiAgICAvKirku5nkurrmjowgKi9cclxuICAgIHJvY2tldCA9IDExLFxyXG4gICAgLyoq5bCP6aOO5omHICovXHJcbiAgICBtaW5pRmFuID0gMTIsXHJcbiAgICAvKironJzonIIgKi9cclxuICAgIGhvbmV5YmVlID0gMzEsXHJcbiAgICAvKirlpKfpo47miYcgKi9cclxuICAgIGJpZ0ZhbiA9IDMyLFxyXG4gICAgLyoq57q4566xICovXHJcbiAgICBjYXJ0b24gPSAzMyxcclxuICAgIC8qKumbqCAqL1xyXG4gICAgcmFpbiA9IDM0LFxyXG4gICAgLyoq5LqRICovXHJcbiAgICBjbG91ZCA9IDM1LFxyXG4gICAgLyoq5pyo566xICovXHJcbiAgICB3b29sZGVuQm94ID0gMzYsXHJcblxyXG4gICAgLyoq6L2u5Yi6ICovXHJcbiAgICBzdG9uZTMgPSA1NSxcclxuXHJcblxyXG4gICAgLyoq5r+A5YWJICovXHJcbiAgICBsYXNlciA9IDU2LFxyXG5cclxuICAgIC8qKua/gOWFiSAqL1xyXG4gICAgd29vbGRlbkJveDIgPSA4MSxcclxuXHJcbiAgICAvKirog5zliKnngrkgKi9cclxuICAgIHN1Y2NlZWRQb2ludCA9IDk5LFxyXG4gICAgLyoq5YeG5aSH6IOc5Yip54K5ICovXHJcbiAgICBiZWZvcmVTdWNjZWVkUG9pbnQgPSA5NyxcclxuICAgIC8qKuWksei0peeCuSAqL1xyXG4gICAgZmFpZFBvaW50ID0gOTgsXHJcbiAgICAvKirpgZPlhbfplIDmr4HngrkgKi9cclxuICAgIGRlc1BvaW50ID0gNzk5LFxyXG5cclxuXHJcbiAgICAvKirnkIMgKi9cclxuICAgIGJhbGwgPSA2NjYsXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBhZ2VOYW1lIHtcclxuICAgIC8qKummlumhtSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBVaUhvbWU6IHN0cmluZyA9IFwiVWlIb21lXCI7XHJcbiAgICAvKirliqDovb0gKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVWlMb2FkOiBzdHJpbmcgPSBcIlVpTG9hZFwiO1xyXG4gICAgLyoq5ri45oiPICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFVpR2FtZTogc3RyaW5nID0gXCJVaUdhbWVcIjtcclxuICAgIC8qKua4uOaIjyAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBVaUxvYWRHYW1lOiBzdHJpbmcgPSBcIlVpTG9hZEdhbWVcIjtcclxuICAgIC8qKumAieWFsyAqL1xyXG4gICAgLy8gcHVibGljIHN0YXRpYyBMZXZlbFBhbmVsOiBzdHJpbmcgPSBcIkxldmVsUGFuZWxcIjtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQYW5lbE5hbWUge1xyXG4gICAgLyoq6YCJ5YWzICovXHJcbiAgICBwdWJsaWMgc3RhdGljIExldmVsUGFuZWw6IHN0cmluZyA9IFwiTGV2ZWxQYW5lbFwiO1xyXG4gICAgLyoq5ZWG5bqXICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFVpU2hvcDogc3RyaW5nID0gXCJVaVNob3BcIjtcclxuICAgIC8qKuaaguWBnCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBQYXVzZVBhbmVsOiBzdHJpbmcgPSBcIlBhdXNlUGFuZWxcIjtcclxuICAgIC8qKumHkeW4geS4jei2syAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBDb2luVGlwc1BhbmVsOiBzdHJpbmcgPSBcIkNvaW5UaXBzUGFuZWxcIjtcclxuICAgIC8qKuWksei0pSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBVaUZhaWxlZDogc3RyaW5nID0gXCJVaUZhaWxlZFwiO1xyXG4gICAgLyoq6IOc5YipICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFVpU3VjY2VlZDogc3RyaW5nID0gXCJVaVN1Y2NlZWRcIjtcclxuICAgIC8qKuetvuWIsCAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBVaVNpZ246IHN0cmluZyA9IFwiVWlTaWduXCI7XHJcbiAgICAvKiror5XnlKjnmq7ogqQgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVHJpYWxQYW5lbDogc3RyaW5nID0gXCJUcmlhbFBhbmVsXCI7XHJcbiAgICAvKirlubjov5Dovaznm5ggKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVWlMb3R0ZXJ5OiBzdHJpbmcgPSBcIlVpTG90dGVyeVwiO1xyXG4gICAgLyoq6K6+572uICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFVpU2V0OiBzdHJpbmcgPSBcIlVpU2V0XCI7XHJcbiAgICAvKirnu5PnrpfliY3lub/lkYogKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVWlCZWZvcmVTdWNjZWVkOiBzdHJpbmcgPSBcIlVpQmVmb3JlU3VjY2VlZFwiO1xyXG4gICAgLyoq5aSN5rS76aG16Z2iICovXHJcbiAgICBwdWJsaWMgc3RhdGljIFVpUmVzdXJyZWN0aW9uOiBzdHJpbmcgPSBcIlVpUmVzdXJyZWN0aW9uXCI7XHJcbiAgICAvLyAvKirmuLjmiI/liqDovb3pobXpnaIgKi9cclxuICAgIC8vIHB1YmxpYyBzdGF0aWMgVWlMb2FkR2FtZTogc3RyaW5nID0gXCJVaUxvYWRHYW1lXCI7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUHJlZmFiTmFtZSB7XHJcbiAgICAvKiogZGVuZyovXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlbmc6IHN0cmluZyA9IFwiZGVuZ1wiO1xyXG4gICAgLyoqIGRlbmdqaWFuZyovXHJcbiAgICBwdWJsaWMgc3RhdGljIGRlbmdqaWFuZzogc3RyaW5nID0gXCJkZW5namlhbmdcIjtcclxuICAgIC8qKiBCYWNrR3JvdW5kKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgZGVuZ2h1YTogc3RyaW5nID0gXCJCYWNrR3JvdW5kXCI7XHJcbiAgICAvKiogemhhbmdhaV96aGVuZyovXHJcbiAgICBwdWJsaWMgc3RhdGljIHpoYW5nYWlfemhlbmc6IHN0cmluZyA9IFwiemhhbmdhaV96aGVuZ1wiO1xyXG4gICAgLyoqIHpoYW5nYWlfamlhbyovXHJcbiAgICBwdWJsaWMgc3RhdGljIHpoYW5nYWlfamlhbzogc3RyaW5nID0gXCJ6aGFuZ2FpX2ppYW9cIjtcclxuICAgIC8qKiB6aGFuZ2FpX3l1YW4qL1xyXG4gICAgcHVibGljIHN0YXRpYyB6aGFuZ2FpX3l1YW46IHN0cmluZyA9IFwiemhhbmdhaV95dWFuXCI7XHJcbiAgICAvKiogU1BfcWlkaWFuKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgU1BfcWlkaWFuOiBzdHJpbmcgPSBcIlNQX3FpZGlhblwiO1xyXG4gICAgLyoqIFRpcHNSb3BlKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgVGlwc1JvcGU6IHN0cmluZyA9IFwiVGlwc1JvcGVcIjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNraW5JbmZvIHtcclxuICAgIHB1YmxpYyBJZDogbnVtYmVyO1xyXG4gICAgLyoqMOS7o+ihqOmcgOimgei0reS5sCAx5Luj6KGo5Y+v5Lul5L2/55SoIDLku6PooajmraPlnKjkvb/nlKggKi9cclxuICAgIHB1YmxpYyBTdGF0ZTogbnVtYmVyO1xyXG4gICAgcHVibGljIFByaWNlOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc3RyOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyBjYy5sb2coXCLmnoTlu7ogU2tpbkluZm8gOlwiLCBzdHIpO1xyXG4gICAgICAgIGxldCBpbmZvOiBhbnkgPSBKU09OLnBhcnNlKHN0cik7XHJcbiAgICAgICAgaWYgKGluZm8pIHtcclxuICAgICAgICAgICAgaWYgKGluZm8uSWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuSWQgPSBwYXJzZUludChpbmZvLklkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIklkIOWtl+auteS4jeWtmOWcqCFcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpbmZvLlN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlN0YXRlID0gcGFyc2VJbnQoaW5mby5TdGF0ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJTdGF0ZSDlrZfmrrXkuI3lrZjlnKghXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5mby5QcmljZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5QcmljZSA9IHBhcnNlSW50KGluZm8uUHJpY2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiUHJpY2Ug5a2X5q615LiN5a2Y5ZyoIVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIuaehOW7uiBTa2luSW5mbyDnmoTlrZfnrKbkuLLkuI3lkIjms5UhXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIFRvU3RyaW5nKCkge1xyXG4gICAgICAgIHJldHVybiBge1wiSWRcIjpcIiR7dGhpcy5JZH1cIixcIlN0YXRlOlwiJHt0aGlzLlN0YXRlfVwiLFwiUHJpY2VcIjpcIiR7dGhpcy5QcmljZX1cIn1gO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGV2ZWxpdGVtIHtcclxuICAgIHB1YmxpYyBJZDogbnVtYmVyO1xyXG4gICAgcHVibGljIFN0YXRlOiBudW1iZXI7Ly8w5Luj6KGo5pyq6Kej6ZSBICAx5Luj6KGo5pyq5a6M5oiQICAgMuS7o+ihqOWujOaIkCAgM+S7o+ihqOWksei0pVxyXG4gICAgcHVibGljIGZyYWN0aW9uOiBudW1iZXI7Ly8w5Luj6KGo5pyq5a6M5oiQ5YWz5Y2h5LiN5pi+56S6ICAgMeS7o+ihqGVtb2ppMSAy5Luj6KGoZW1vamkyIDPku6PooahlbW9qaTMgNOS7o+ihqGVtb2ppNOWksei0pVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IGluZm86IGFueSA9IEpTT04ucGFyc2Uoc3RyKTtcclxuICAgICAgICBpZiAoaW5mbykge1xyXG4gICAgICAgICAgICBpZiAoaW5mby5JZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5JZCA9IHBhcnNlSW50KGluZm8uSWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiSWQg5a2X5q615LiN5a2Y5ZyoIVwiKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGluZm8uU3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuU3RhdGUgPSBwYXJzZUludChpbmZvLlN0YXRlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIlN0YXRlIOWtl+auteS4jeWtmOWcqCFcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpbmZvLmZyYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyYWN0aW9uID0gcGFyc2VJbnQoaW5mby5mcmFjdGlvbik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCJmcmFjdGlvbiDlrZfmrrXkuI3lrZjlnKghXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MubG9nKFwi5p6E5bu6IExldmVsaXRlbSDnmoTlrZfnrKbkuLLkuI3lkIjms5UhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHB1YmxpYyBUb1N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gYHtcIklkXCI6XCIke3RoaXMuSWR9XCIsXCJTdGF0ZTpcIiR7dGhpcy5TdGF0ZX0sXCJmcmFjdGlvblwiOlwiJHswfVwiXCJ9YDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBlbnVtIEZsb29yVHlwZSB7XHJcbiAgICB0eXBlenp6MSA9IFwiNTAwMV8xXCIsXHJcbiAgICB0eXBlMiA9IFwiNTAwMV8yXCIsXHJcbiAgICB0eXBlMyA9IFwiNTAwMV9CXzAyXCIsXHJcbiAgICB0eXBlNCA9IFwiNTAwMV9CXzAxXCIsXHJcbiAgICB0eXBlNSA9IFwiNTAwMV9CXzAzXCIsXHJcbiAgICB0eXBlNiA9IFwiNTAwMV9CXzA0XCIsXHJcbiAgICB0eXBlNyA9IFwiNTAwMV9CXzA1XCIsXHJcbiAgICB0eXBlOCA9IFwiNTAwMV9CXzA2XCIsXHJcbiAgICB0eXBlOSA9IFwiNTAwMV9KMV8xXCIsXHJcbiAgICB0eXBlMTAgPSBcIjUwMDFfSjFfMlwiLFxyXG4gICAgdHlwZTExID0gXCI1MDAxX0oyXzFcIixcclxuICAgIHR5cGUxMiA9IFwiNTAwMV9KMl8yXCIsXHJcbiAgICB0eXBlMTMgPSBcIjUwMDFfSjNfMVwiLFxyXG4gICAgdHlwZTE0ID0gXCI1MDAxX0ozXzJcIixcclxuICAgIHR5cGUxNSA9IFwiNTAwMV9KNF8xXCIsXHJcbiAgICB0eXBlMTYgPSBcIjUwMDFfSjRfMlwiLFxyXG4gICAgdHlwZTE3ID0gXCI1MDAxX01fMDFcIixcclxuICAgIHR5cGUxOCA9IFwiNTAwMV9aXzFcIixcclxuXHJcblxyXG4gICAgdHlwZTEwMSA9IFwiNTAwMl8xXzFcIixcclxuICAgIHR5cGUxMDIgPSBcIjUwMDJfMV8yXCIsXHJcbiAgICB0eXBlMTAzID0gXCI1MDAyXzJfMVwiLFxyXG4gICAgdHlwZTEwNCA9IFwiNTAwMl8yXzJcIixcclxuICAgIHR5cGUxMDUgPSBcIjUwMDJfM18yXCIsXHJcbiAgICB0eXBlMTA3ID0gXCI1MDAyXzRfMlwiLFxyXG5cclxuICAgIC8v5bem5Y+z6L6555WMXHJcbiAgICB0eXBlMjAxID0gXCJsZWZ0QW5kUmlnaHRCb3VuZGFyeVwiLFxyXG4gICAgLy/kuIrkuIvovrnnlYxcclxuICAgIHR5cGUyMDIgPSBcInVwQW5kRG93bkJvdW5kYXJ5XCIsXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRJdGVtVHlwZShpZDogbnVtYmVyKSB7XHJcbi8vICAgICBpZiAoaWQgPCAwIHx8IGlkID49IFR5cGVJZEFycmF5Lmxlbmd0aCkge1xyXG4vLyAgICAgICAgIHJldHVybiBudWxsO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgcmV0dXJuIFR5cGVJZEFycmF5W2lkXTtcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFR5cGVJZChpZDogVHlwZUlkKSB7XHJcbi8vICAgICByZXR1cm4gVHlwZUlkQXJyYXkuaW5kZXhPZihpZCk7XHJcbi8vIH1cclxuIl19