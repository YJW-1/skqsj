"use strict";
cc._RF.push(module, 'eba7cK04I9Iy4MMGevRqXsr', 'CocosZ');
// script/Framework/CocosZ.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameMgr_1 = require("./GameMgr");
var DataMgr_1 = require("./DataMgr");
var UIMgr_1 = require("./UIMgr");
var ResMgr_1 = require("./ResMgr");
var Constant_1 = require("./Constant");
var AudioMgr_1 = require("./AudioMgr");
var SceneMgr_1 = require("./SceneMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
exports.cocosz = null;
var CocosZ = /** @class */ (function (_super) {
    __extends(CocosZ, _super);
    function CocosZ() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._gameMgr = null;
        _this._dataMgr = null;
        _this._uiMgr = null;
        _this._resMgr = null;
        _this._audioMgr = null;
        _this._sceneMgr = null;
        _this.package1 = false;
        _this.package2 = false;
        _this.package3 = false;
        return _this;
    }
    Object.defineProperty(CocosZ.prototype, "gameMgr", {
        get: function () {
            return this._gameMgr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CocosZ.prototype, "dataMgr", {
        get: function () {
            return this._dataMgr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CocosZ.prototype, "uiMgr", {
        get: function () {
            return this._uiMgr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CocosZ.prototype, "resMgr", {
        get: function () {
            return this._resMgr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CocosZ.prototype, "audioMgr", {
        get: function () {
            return this._audioMgr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CocosZ.prototype, "sceneMgr", {
        get: function () {
            return this._sceneMgr;
        },
        enumerable: true,
        configurable: true
    });
    CocosZ.prototype.onLoad = function () {
        cc.game.addPersistRootNode(this.node);
        exports.cocosz = this;
        this._gameMgr = GameMgr_1.default.inst;
        this._dataMgr = DataMgr_1.default.inst;
        this._uiMgr = UIMgr_1.default.inst;
        this._resMgr = ResMgr_1.default.inst;
        this._audioMgr = AudioMgr_1.default.inst;
        this._sceneMgr = SceneMgr_1.default.inst;
        cc.game.on(cc.game.EVENT_SHOW, function () {
            if (exports.cocosz.gameMgr.audioBg) {
            }
        });
        cc.game.on(cc.game.EVENT_HIDE, function () {
        });
    };
    CocosZ.prototype.start = function () {
        console.log("-----------游戏初始化------------");
        // vivo断网检测
        // if (cc.sys.platform == cc.sys.VIVO_GAME) {
        //     //@ts-ignore
        //     if (window.networkLink == 1) {
        //         this.Load();
        //     } else {
        //         //utils.showToast("网络错误，请重新加载！");
        //         console.log("------------网络错误，请重新加载")
        //         return;
        //     }
        // } else {
        this.Load();
        cc.game.on(Constant_1.default.E_LOAD_RES, this._loadRes, this);
        // }
        //this.Load();
    };
    CocosZ.prototype.Load = function () {
        var _this = this;
        var url = "ui/UiLoad"; //"prefabs/ui/loadingPage";
        this._resMgr.loadRes(url, cc.Prefab, null, function () {
            _this._uiMgr.openPage(Constant_1.PageName.UiLoad);
            // 加载UI界面资源
        });
    };
    CocosZ.prototype._loadRes = function () {
        var _this = this;
        console.log("开始加载资源！");
        var compCount = 0;
        var prefabList = [
            "ui/CoinTipsPanel",
            "ui/LevelItem",
            "ui/LevelPanel",
            "ui/PausePanel",
            "ui/TrialPanel",
            "ui/UiFailed",
            "ui/UiGame",
            "ui/UiGameBg",
            "ui/UiHome",
            "ui/UiShop",
            "ui/UiSign",
            "ui/UiSucceed",
            "ui/Tips",
            "ui/shopRole",
            "ui/UiLottery",
            "ui/UiSet",
            "ui/UiBeforeSucceed",
            "ui/UiResurrection",
            "ui/UiLoadGame",
            "prefab/gameBg",
            "prefab/baffle",
            "prefab/baffle2",
            "prefab/role",
            "prefab/coin",
            "prefab/balloon",
            "prefab/rope",
            "prefab/rope2",
            "prefab/limit1",
            "prefab/limit2",
            "prefab/limit5",
            "prefab/floor1",
            "prefab/floor2",
            "prefab/floor3",
            "prefab/floor4",
            "prefab/floor6",
            "prefab/floor7",
            "prefab/floor8",
            "prefab/floor9",
            "prefab/floor10",
            "prefab/floor11",
            "prefab/floor12",
            "prefab/floor13",
            "prefab/floor14",
            "prefab/floor15",
            "prefab/floor16",
            "prefab/floor17",
            "prefab/floor18",
            "prefab/floor19",
            "prefab/floor20",
            "prefab/floor21",
            "prefab/floor22",
            "prefab/floorRotetaCom",
            "prefab/floorRotetaCom2",
            "prefab/floorRotetaCom3",
            "prefab/fan",
            "prefab/bigFan",
            "prefab/fanLiZi",
            "prefab/thorn",
            "prefab/cactus",
            "prefab/cactus2",
            "prefab/cactus3",
            "prefab/cactus4",
            "prefab/cactus5",
            "prefab/stone",
            "prefab/stone2",
            "prefab/stone3",
            "prefab/stone4",
            "prefab/stone5",
            "prefab/rocket",
            "prefab/nimiCactus",
            "prefab/propHoneybee",
            "prefab/hand1",
            "prefab/hand2",
            "prefab/enemy1",
            "prefab/enemy2",
            "prefab/enemy3",
            "prefab/nimiCactus2",
            "prefab/nimiCactus3",
            "prefab/nimiCactus4",
            "prefab/nimiCactus5",
            "prefab/nimiCactus6",
            "prefab/nimiCactus7",
            "prefab/nimiCactus8",
            "prefab/nimiCactus9",
            "prefab/nimiCactus10",
            "prefab/nimiCactus11",
            "prefab/nimiCactus12",
            "prefab/box",
            "prefab/chainRocket",
            "prefab/chainRocket2",
            "prefab/textips1",
            "prefab/textips2",
            "prefab/textips3",
            "prefab/textips4",
            "prefab/textips5",
            "prefab/textips6",
            "prefab/handTips",
            "prefab/cage",
            "prefab/cage2",
            "prefab/cloud",
            "prefab/boom",
            "prefab/floorTips1",
            "prefab/floorTips2",
            "prefab/floorTips3",
            "prefab/floorTips4",
            "prefab/rocketEffect",
            "prefab/rocketEffect2",
            "prefab/sandEffect",
            "prefab/carton2",
            "prefab/limit3",
            "prefab/floor5",
            "prefab/limit4",
            "prefab/laser",
            "prefab/laserEffect",
            "prefab/wooldenBox1",
            "prefab/wooldenBox2",
            "prefab/wooldenBox3",
            "prefab/wooldenBox4",
            "prefab/wooldenBox5",
            "prefab/wooldenBox6",
            "prefab/wooldenBox7",
            "prefab/wooldenBox8",
            "prefab/wooldenBox9",
            "prefab/wooldenBox10",
            "prefab/wooldenBox11",
            "prefab/wooldenBox12",
            "prefab/carton",
            "prefab/c1",
            "prefab/c2",
            "prefab/c7",
            "prefab/c3",
            "prefab/c4",
            "prefab/bat2",
            "prefab/bat3",
            "prefab/bat4",
            "prefab/bat5",
            "prefab/texFloorTips1",
            "prefab/texFloorTips2",
            "prefab/texFloorTips3",
            "prefab/ballParticle",
            "prefab/controlCenter",
            "prefab/texLevelTips",
            "prefab/labelTips1",
            "prefab/labelTips2",
            "prefab/labelTips3",
            "prefab/labelTips4",
            "prefab/labelTips5",
            "prefab/mapMask",
            "prefab/sandMask",
            "prefab/moveFloorBg",
            "prefab/moveFloor1",
            "prefab/moveFloor2",
            "prefab/moveFloor3",
            "prefab/moveFloor4",
            "prefab/moveFloor5",
            "ui/ballbonItem",
            "ui/propItem",
            "ui/roleItem",
            // "map/map1",
            // "map/map2",
            // "map/map3",
            // "map/map4",
            // "map/map5",
            // "map/map6",
            // "map/map7",
            // "map/map8",
            // "map/map9",
            // "map/map10",
            // "map/map11",
            // "map/map12",
            // "map/map13",
            // "map/map14",
            // "map/map15",
            // "map/map16",
            // "map/map17",
            // "map/map18",
            // "map/map19",
            // "map/map20",
            // "map/map20",
            // "map/map21",
            // "map/map22",
            // "map/map23",
            // "map/map24",
            // "map/map25",
            // "map/map26",
            // "map/map27",
            // "map/map28",
            // "map/map29",
            // "map/map30",
            // "map/map31",
            // "map/map32",
            // "map/map33",
            // "map/map34",
            // "map/map35",
            // "map/map36",
            // "map/map37",
            // "map/map38",
            // "map/map39",
            // "map/map40",
            // "map/map41",
            // "map/map42",
            // "map/map43",
            // "map/map44",
            // "map/map45",
            // "map/map46",
            // "map/map47",
            // "map/map48",
            // "map/map49",
            // "map/map50",
            // "map/map51",
            // "map/map52",
            // "map/map53",
            // "map/map54",
            // "map/map55",
            // "map/map56",
            // "map/map57",
            // "map/map58",
            // "map/map59",
            // "map/map60",
            // "map/map61",
            // "map/map62",
            // "map/map63",
            // "map/map64",
            // "map/map65",
            // "map/map66",
            // "map/map67",
            // "map/map68",
            // "map/map69",
            // "map/map70",
            // "map/map71",
            // "map/map72",
            // "map/map73",
            // "map/map74",
            // "map/map75",
            // "map/map76",
            // "map/map77",
            // "map/map78",
            // "map/map79",
            // "map/map80",
            // "map/map81",
            // "map/map82",
            // "map/map83",
            // "map/map84",
            // "map/map85",
            // "map/map86",
            // "map/map87",
            // "map/map88",
            // "map/map89",
            // "map/map90",
            // "map/map91",
            // "map/map92",
            // "map/map93",
            // "map/map94",
            // "map/map95",
            // "map/map96",
            // "map/map97",
            // "map/map98",
            // "map/map99",
            // "map/map100",
            // "map/map101",
            // "map/map101",
            // "map/map102",
            // "map/map103",
            // "map/map104",
            // "map/map105",
            // "map/map106",
            // "map/map107",
            // "map/map108",
            // "map/map109",
            // "map/map110",
            // "map/map111",
            // "map/map112",
            // "map/map113",
            // "map/map114",
            // "map/map115",
            // "map/map116",
            // "map/map117",
            // "map/map118",
            // "map/map119",
            // "map/map120",
            // "map/map121",
            // "map/map122",
            // "map/map123",
            // "map/map124",
            // "map/map125",
            // "map/map126",
            // "map/map127",
            // "map/map128",
            // "map/map129",
            // "map/map130",
            // "map/map131",
            // "map/map132",
            // "map/map133",
            // "map/map134",
            // "map/map135",
            // "map/map136",
            // "map/map137",
            // "map/map138",
            // "map/map139",
            // "map/map140",
            // "map2/level1",
            // "map2/level2",
            // "map2/level3",
            // "map2/level4",
            // "map2/level5",
            // "map2/level6",
            // "map2/level7",
            // "map2/level8",
            // "map2/level9",
            // "map2/level10",
            // "map2/level11",
            // "map2/level12",
            // "map2/level13",
            // "map2/level14",
            // "map2/level15",
            // "map2/level16",
            // "map2/level17",
            // "map2/level18",
            // "map2/level19",
            // "map2/level20",
            "map2/levelMgr",
            "map2/levelNum",
            "map2/launchPoint",
            "map2/sBoard",
            "map2/thornFloor2",
            "map2/thornFloor3",
            "prefab/cactus6",
        ];
        this._resMgr.loadResArray(prefabList, cc.Prefab, function (completedCount, totalCount, item) {
        }, function (error, resource) {
            compCount++;
        });
        var atlasList = [ //图集
        ];
        this._resMgr.loadResArray(atlasList, cc.SpriteAtlas, function (completedCount, totalCount, item) {
        }, function (error, resource) {
            compCount++;
        });
        var texList = [
            "tex/skipVideo",
            "tex/boom",
            "tex/balloon1",
            "tex/balloon2",
            "tex/balloon3",
            "tex/balloon4",
            "tex/balloon5",
            "tex/balloon6",
            "tex/balloon7",
            "tex/body_1",
            "tex/body_2",
            "tex/body_3",
            "tex/body_4",
            "tex/body_5",
            "tex/body_6",
            "tex/role0",
            "tex/role1",
            "tex/role2",
            "tex/role3",
            "tex/role4",
            "tex/role5",
            "tex/left_arm_1",
            "tex/left_arm_2",
            "tex/left_arm_3",
            "tex/left_arm_4",
            "tex/left_arm_5",
            "tex/left_arm_6",
            "tex/left_leg_1",
            "tex/left_leg_2",
            "tex/left_leg_3",
            "tex/left_leg_4",
            "tex/left_leg_5",
            "tex/left_leg_6",
            "tex/right_arm_1",
            "tex/right_arm_2",
            "tex/right_arm_3",
            "tex/right_arm_4",
            "tex/right_arm_5",
            "tex/right_arm_6",
            "tex/right_leg_1",
            "tex/right_leg_2",
            "tex/right_leg_3",
            "tex/right_leg_4",
            "tex/right_leg_5",
            "tex/right_leg_6",
            "tex/tie_1",
            "tex/tie_5",
            "tex/ss",
        ];
        this._resMgr.loadResArray(texList, cc.SpriteFrame, function (completedCount, totalCount, item) {
        }, function (error, resource) {
            compCount++;
        });
        var audioList = [
            "audio/bgm",
            "audio/ClickBtn",
            "audio/beforeFeild",
            "audio/mBee",
            "audio/mHeroDieBee",
            "audio/mHeroDieFan",
            "audio/MoveFloor",
            "audio/mRocketExplode",
            "audio/mRocketStart",
            "audio/sand",
            "audio/Sound_money",
            "audio/Success",
            "audio/mHeroGlad",
            "audio/mFan",
            "audio/mCactus",
            "audio/UseShield",
            "audio/mCactusShot",
            "audio/mMetalStone",
            "audio/gun",
            "audio/mBatPrickle",
            "audio/mStoneWood",
            "audio/mHeroGloomy",
            "audio/turntable",
        ];
        this._resMgr.loadResArray(audioList, cc.AudioClip, function (completedCount, totalCount, item) {
        }, function (error, resource) {
            compCount++;
        });
        var jsonList = [
            "json/MapData",
            "json/MapData2",
        ];
        this._resMgr.loadResArray(jsonList, cc.JsonAsset, function (completedCount, totalCount, item) {
        }, function (error, resource) {
            compCount++;
        });
        // cc.log("--------------------totalProgress111111-")
        var totalProgress = prefabList.length + atlasList.length + texList.length + audioList.length + jsonList.length;
        this.schedule(function () {
            cc.game.emit(Constant_1.default.E_GAME_LOGIC, { type: Constant_1.default.E_UPDATE_PROGRESS, data: compCount / totalProgress });
            //cc.log();
            // console.log("progress => ", compCount);
            if (compCount >= totalProgress) {
                _this.unscheduleAllCallbacks();
                // cc.log(this.)
                // if (cc.sys.platform === cc.sys.WECHAT_GAME) {
                //     // if (this.package1) {
                //         this._sceneMgr.loadScene("Home", () => {
                //             this._uiMgr.openPage(PageName.UiHome);
                //         });
                //     // }
                // }
                // else {
                _this._sceneMgr.loadScene("Home", function () {
                    _this._uiMgr.openPage(Constant_1.PageName.UiHome);
                });
                // }
            }
        }, 0);
        // cc.log("--------------------totalProgress222222222222-")
    };
    CocosZ = __decorate([
        ccclass
    ], CocosZ);
    return CocosZ;
}(cc.Component));
exports.default = CocosZ;

cc._RF.pop();