"use strict";
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