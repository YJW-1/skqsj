

const { ccclass, property } = cc._decorator;

@ccclass
export default class Constant {


    /**
     * 每个主题多少关
     */
    public static CT_LevelCountPerTheme: number = 20;
    /**
     * 皮肤总数量
     */
    public static CT_SkinCount: number = 9;
    /**
     * 总关卡数量
     */
    public static CT_TotalLevelCount: number = 300;
    /**
     * 每过一关奖励钻石数量
     */
    public static CT_RewardDiamondCount: number = 200;

    ;


    /**
     * 每日签到的金额
     */
    public static Money: number[] = [100, -1, 200, 500, -2, 1000, -3];

    /**今日奖励 */
    public static LastDailyBonusIndex: string = "LastDailyBonusIndex";
    /**今日签到的时间 */
    public static LastDailyBonusTime: string = "LastDailyBonusTime";
    public static ST_GameData: string = "GameData";
    public static ST_CurLevelId: string = "CurLevelId";
    public static ST_MaxLevelId: string = "MaxLevelId";
    public static ST_ResetLevelId: string = "ResetLevelId";

    public static ST_MaxUnlockLevelCount: string = "MaxUnlockLevelCount";

    //无尽模式分数
    public static ST_Game2Fraction: string = "ST_Game2Fraction";
    /**无尽模式关卡队列 */
    public static ST_Game2LevelList: string = "ST_Game2LevelList";
    //无尽模式新手
    public static ST_IsGame2Novice: string = "ST_IsGame2Novice";
    //音乐开关
    public static ST_AudioOn: string = "AudioOn";
    //音效开关
    public static ST_AudioEffectOn: string = "AudioEffectOn";
    //震动开关
    public static ST_ShockOn: string = "ShockOn";
    public static SjShop: string = "SjShop";//升级费用
    /**金钱 */
    public static ST_CoinCount: string = "ST_StarCount";
    /**奖励关卡类型 */
    public static ST_RewardType: string = "ST_RewardType";
    public static ST_SkinInfo: string = "SkinInfo";
    /**人物皮肤 */
    public static ST_CurSkinId: string = "ST_CurSkinId";
    /**当前气球皮肤 */
    public static ST_CurBallbonSkinId: string = "ST_CurBallbonSkinId";
    /** 气球皮肤信息 */
    public static ST_BallbonSkinInfo: string = "ST_BallbonSkinInfo";
    /**跳过卡数量 */
    public static ST_SkinVedioNum: string = "ST_SkinVedioNum";
    /**炸弹数量 */
    public static ST_BoomNum: string = "ST_BoomNum";



    public static ST_LevelItem: string = "LevelItem";
    /**过关时关卡表情存储 */
    public static ST_FaceNum: string = "FaceNum";
    /**每关获得的星星数量 */
    public static ST_StarNum: string = "StarNum";
    /**转盘剩余次数*/
    public static ST_Lottery: string = "Lottery";



    /**转盘剩余次数*/
    public static ST_RamdomLevel1: string = "ST_RamdomLevel1";
    /**转盘剩余次数*/
    public static ST_RamdomLevel2: string = "ST_RamdomLevel2";
    /**转盘剩余次数*/
    public static ST_RamdomLevel3: string = "ST_RamdomLevel3";


    /**
     * 游戏逻辑事件
     */
    public static E_GAME_LOGIC: string = "E_GAME_LOGIC";
    /**
     * 更新进度条事件
     */
    public static E_UPDATE_PROGRESS: string = "E_UPDATE_PROGRESS";
    /**
     * 开始加载资源事件
     */
    public static E_LOAD_RES: string = "E_LOAD_RES";
    /**
        * 事件:开始游戏
        */
    public static E_GAME_START: string = "E_GAME_START";
    public static E_LEVEL_FAILED: string = "E_LEVEL_FAILED";
    public static E_LEVEL_COMPLETE: string = "E_LEVEL_COMPLETE";
    /**
     * 事件：刷新关卡进度条
     */
    public static E_UPDATE_DISTANCE: string = "E_UPDATE_DISTANCE";
    /**
     * 事件：选择皮肤
     */
    public static E_SELECT_SKIN: string = "select_skin";
    /**
     * 事件：试用皮肤
     */
    public static E_TRY_SKIN: string = "try_skin";
    /**
     * 事件：当前关卡id改变
     */
    public static E_CURLEVEL_CHANGED: string = "curlevel_changed";
    /**
     * 事件:游戏胜利
     */
    public static E_GAME_VECTORY: string = "put_game_vectory";

    /**
     * 事件:游戏失败
     */
    public static E_GAME_FAID: string = "E_GAME_FAID";
    /**
     * 事件:重新开始
     */
    public static E_RESTART: string = "restart";
    /**
     * 事件:进入下一关
     */
    public static E_GAME_NEXTLEVEL: string = "game_nextlevel";
    /**
     * 事件:更新金币
     */
    public static E_UPDATE_COIN: string = "update_coin";
    /**
     * 事件:地图初始化完成
     */
    public static E_MAP_FINISH: string = "E_MAP_FINISH";
    /**
     * 事件:更新皮肤
     */
    public static E_UPDATE_SKIN: string = "update_skin";
    /**事件:返回主界面 */
    public static E_BACK_HOME: string = "back_home";
    /**失败表情 */
    public static E_FAILD_FACE: string = "faild_face";
    /**胜利表情 */
    public static E_WIN_FACE: string = "win_face";
    /**点击屏幕 */
    public static E_TOUCH_SCREEN: string = "touch_screen";
    /**主角移动 */
    public static E_ROLE_MOVE: string = "role_move";



    /**玩家复活 */
    public static E_ROLE_RESURRECTION: string = "E_ROLE_RESURRECTION";

    /**启动弹簧 */
    public static E_ROLE_SPRING: string = "E_ROLE_SPRING";

    /**一只气球爆炸 */
    public static E_PROP_BALLOONDES: string = "E_PROP_BALLOONDES";

    /**气球碰到激光 */
    public static E_PROP_BALLOONDESBYLASER: string = "E_PROP_BALLOONDESBYLASER";



    /**主角碰撞 */
    public static E_ROLE_COLLISIONENTER: string = "E_ROLE_COLLISIONENTER";

    /**主角物理碰撞 */
    public static E_ROLE_CONTACTENTER: string = "E_ROLE_CONTACTENTER";

    /**新手指引步骤1 */
    public static E_TIPS_NEXT: string = "E_TIPS_NEXT";
    /**新手指引步骤2 */
    public static E_TIPS_NEXT2: string = "E_TIPS_NEXT2";


    /**所有气球爆炸 */
    public static E_PROP_ALLBALLOONDES: string = "E_PROP_ALLBALLOONDES";


    /**停止音乐*/
    public static E_MUSIC_STOP: string = "E_MUSIC_STOP";

    /**所有气球爆炸 */
    public static E_ADClOSE: string = "E_ADClOSE";

}

export enum GameState {
    None = -1,
    Prepare = 0,
    Start = 1,
    Success = 2,
    Failed = 3
}


export enum Direction {
    left = 0,
    right = 1,
    up = 2,
    down = 3
}




/**物理碰撞 */
export enum tag {
    /**主角 */
    player = 1,
    /**拉着气球的绳子 */
    rope = 2,
    /**气球 */
    balloon = 3,
    /**气球 */
    balloon2 = 37,
    /**仙人掌刺 */
    thorn = 4,
    /**石头 */
    stone = 5,
    /**地刺 */
    floorThorn = 6,
    /**滑动挡板 */
    moveFloor = 7,
    /**隐形挡板 */
    invisibleFloor = 8,
    /**蝙蝠 */
    bat = 9,
    /**火箭发射器 */
    rocketFloor = 10,
    /**仙人掌 */
    rocket = 11,
    /**小风扇 */
    miniFan = 12,
    /**蜜蜂 */
    honeybee = 31,
    /**大风扇 */
    bigFan = 32,
    /**纸箱 */
    carton = 33,
    /**雨 */
    rain = 34,
    /**云 */
    cloud = 35,
    /**木箱 */
    wooldenBox = 36,

    /**轮刺 */
    stone3 = 55,


    /**激光 */
    laser = 56,

    /**激光 */
    wooldenBox2 = 81,

    /**胜利点 */
    succeedPoint = 99,
    /**准备胜利点 */
    beforeSucceedPoint = 97,
    /**失败点 */
    faidPoint = 98,
    /**道具销毁点 */
    desPoint = 799,


    /**球 */
    ball = 666,
}



export class PageName {
    /**首页 */
    public static UiHome: string = "UiHome";
    /**加载 */
    public static UiLoad: string = "UiLoad";
    /**游戏 */
    public static UiGame: string = "UiGame";
    /**游戏 */
    public static UiLoadGame: string = "UiLoadGame";
    /**选关 */
    // public static LevelPanel: string = "LevelPanel";
}


export class PanelName {
    /**选关 */
    public static LevelPanel: string = "LevelPanel";
    /**商店 */
    public static UiShop: string = "UiShop";
    /**暂停 */
    public static PausePanel: string = "PausePanel";
    /**金币不足 */
    public static CoinTipsPanel: string = "CoinTipsPanel";
    /**失败 */
    public static UiFailed: string = "UiFailed";
    /**胜利 */
    public static UiSucceed: string = "UiSucceed";
    /**签到 */
    public static UiSign: string = "UiSign";
    /**试用皮肤 */
    public static TrialPanel: string = "TrialPanel";
    /**幸运转盘 */
    public static UiLottery: string = "UiLottery";
    /**设置 */
    public static UiSet: string = "UiSet";
    /**结算前广告 */
    public static UiBeforeSucceed: string = "UiBeforeSucceed";
    /**复活页面 */
    public static UiResurrection: string = "UiResurrection";
    // /**游戏加载页面 */
    // public static UiLoadGame: string = "UiLoadGame";

}

export class PrefabName {
    /** deng*/
    public static deng: string = "deng";
    /** dengjiang*/
    public static dengjiang: string = "dengjiang";
    /** BackGround*/
    public static denghua: string = "BackGround";
    /** zhangai_zheng*/
    public static zhangai_zheng: string = "zhangai_zheng";
    /** zhangai_jiao*/
    public static zhangai_jiao: string = "zhangai_jiao";
    /** zhangai_yuan*/
    public static zhangai_yuan: string = "zhangai_yuan";
    /** SP_qidian*/
    public static SP_qidian: string = "SP_qidian";
    /** TipsRope*/
    public static TipsRope: string = "TipsRope";
}

export class SkinInfo {
    public Id: number;
    /**0代表需要购买 1代表可以使用 2代表正在使用 */
    public State: number;
    public Price: number;

    constructor(str: string) {
        // cc.log("构建 SkinInfo :", str);
        let info: any = JSON.parse(str);
        if (info) {
            if (info.Id) {
                this.Id = parseInt(info.Id);
            } else {
                cc.log("Id 字段不存在!");
            }

            if (info.State) {
                this.State = parseInt(info.State);
            } else {
                cc.log("State 字段不存在!");
            }

            if (info.Price) {
                this.Price = parseInt(info.Price);
            } else {
                cc.log("Price 字段不存在!");
            }
        } else {
            cc.log("构建 SkinInfo 的字符串不合法!");
        }

    }

    public ToString() {
        return `{"Id":"${this.Id}","State:"${this.State}","Price":"${this.Price}"}`;
    }
}

export class Levelitem {
    public Id: number;
    public State: number;//0代表未解锁  1代表未完成   2代表完成  3代表失败
    public fraction: number;//0代表未完成关卡不显示   1代表emoji1 2代表emoji2 3代表emoji3 4代表emoji4失败

    constructor(str: string) {
        let info: any = JSON.parse(str);
        if (info) {
            if (info.Id) {
                this.Id = parseInt(info.Id);
            } else {
                cc.log("Id 字段不存在!");
            }

            if (info.State) {
                this.State = parseInt(info.State);
            } else {
                cc.log("State 字段不存在!");
            }

            if (info.fraction) {
                this.fraction = parseInt(info.fraction);
            } else {
                cc.log("fraction 字段不存在!");
            }
        } else {
            cc.log("构建 Levelitem 的字符串不合法!");
        }
    }
    public ToString() {
        return `{"Id":"${this.Id}","State:"${this.State},"fraction":"${0}""}`;
    }
}


export enum FloorType {
    typezzz1 = "5001_1",
    type2 = "5001_2",
    type3 = "5001_B_02",
    type4 = "5001_B_01",
    type5 = "5001_B_03",
    type6 = "5001_B_04",
    type7 = "5001_B_05",
    type8 = "5001_B_06",
    type9 = "5001_J1_1",
    type10 = "5001_J1_2",
    type11 = "5001_J2_1",
    type12 = "5001_J2_2",
    type13 = "5001_J3_1",
    type14 = "5001_J3_2",
    type15 = "5001_J4_1",
    type16 = "5001_J4_2",
    type17 = "5001_M_01",
    type18 = "5001_Z_1",


    type101 = "5002_1_1",
    type102 = "5002_1_2",
    type103 = "5002_2_1",
    type104 = "5002_2_2",
    type105 = "5002_3_2",
    type107 = "5002_4_2",

    //左右边界
    type201 = "leftAndRightBoundary",
    //上下边界
    type202 = "upAndDownBoundary",
}

// export function getItemType(id: number) {
//     if (id < 0 || id >= TypeIdArray.length) {
//         return null;
//     }
//     return TypeIdArray[id];
// }

// export function getTypeId(id: TypeId) {
//     return TypeIdArray.indexOf(id);
// }
