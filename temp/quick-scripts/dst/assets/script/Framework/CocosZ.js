
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/CocosZ.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXENvY29zWi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQWdDO0FBQ2hDLHFDQUFnQztBQUNoQyxpQ0FBNEI7QUFDNUIsbUNBQThCO0FBQzlCLHVDQUEyRDtBQUMzRCx1Q0FBa0M7QUFDbEMsdUNBQWtDO0FBSTVCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFFakMsUUFBQSxNQUFNLEdBQVcsSUFBSSxDQUFDO0FBR2pDO0lBQW9DLDBCQUFZO0lBRGhEO1FBQUEscUVBd25CQztRQWpuQlcsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLFlBQU0sR0FBVSxJQUFJLENBQUM7UUFDckIsYUFBTyxHQUFXLElBQUksQ0FBQztRQUN2QixlQUFTLEdBQWEsSUFBSSxDQUFDO1FBQzNCLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFFNUIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixjQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGNBQVEsR0FBWSxLQUFLLENBQUM7O0lBd21CckMsQ0FBQztJQXZtQkcsc0JBQVcsMkJBQU87YUFBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVywyQkFBTzthQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7T0FBQTtJQUVELHNCQUFXLHlCQUFLO2FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsMEJBQU07YUFBakI7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyw0QkFBUTthQUFuQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMx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O1lBQ2YsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBQ2YsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBRWYsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBQ2YsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBQ2YsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBQ2YsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBQ2YsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBQ2YsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBQ2YsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBSWYsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBQ2YsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBQ2YsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBQ2YsZUFBZTtZQUdmLGVBQWU7WUFDZixlQUFlO1lBQ2YsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBQ2YsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBQ2YsZUFBZTtZQUNmLGVBQWU7WUFHZixlQUFlO1lBQ2YsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBQ2YsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBQ2YsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBRWYsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBQ2YsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBQ2YsZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBQ2YsZ0JBQWdCO1lBSWhCLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFFaEIsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIs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QUMsSUFBSSxDQUFDLGtCQUFRLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLGtCQUFRLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLFNBQVMsR0FBRyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQzNHLFdBQVc7WUFDWCwwQ0FBMEM7WUFDMUMsSUFBSSxTQUFTLElBQUksYUFBYSxFQUFFO2dCQUM1QixLQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztnQkFDOUIsZ0JBQWdCO2dCQUNoQixnREFBZ0Q7Z0JBQ2hELDhCQUE4QjtnQkFDOUIsbURBQW1EO2dCQUNuRCxxREFBcUQ7Z0JBQ3JELGNBQWM7Z0JBQ2QsV0FBVztnQkFDWCxJQUFJO2dCQUNKLFNBQVM7Z0JBQ1QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO29CQUM3QixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxtQkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMxQyxDQUFDLENBQUMsQ0FBQztnQkFDSCxJQUFJO2FBQ1A7UUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDTiwyREFBMkQ7SUFDL0QsQ0FBQztJQXRuQmdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0F1bkIxQjtJQUFELGFBQUM7Q0F2bkJELEFBdW5CQyxDQXZuQm1DLEVBQUUsQ0FBQyxTQUFTLEdBdW5CL0M7a0JBdm5Cb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lTWdyIGZyb20gXCIuL0dhbWVNZ3JcIjtcclxuaW1wb3J0IERhdGFNZ3IgZnJvbSBcIi4vRGF0YU1nclwiO1xyXG5pbXBvcnQgVUlNZ3IgZnJvbSBcIi4vVUlNZ3JcIjtcclxuaW1wb3J0IFJlc01nciBmcm9tIFwiLi9SZXNNZ3JcIjtcclxuaW1wb3J0IENvbnN0YW50LCB7IFBhZ2VOYW1lLCBQYW5lbE5hbWUgfSBmcm9tIFwiLi9Db25zdGFudFwiO1xyXG5pbXBvcnQgQXVkaW9NZ3IgZnJvbSBcIi4vQXVkaW9NZ3JcIjtcclxuaW1wb3J0IFNjZW5lTWdyIGZyb20gXCIuL1NjZW5lTWdyXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5leHBvcnQgbGV0IGNvY29zejogQ29jb3NaID0gbnVsbDtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvY29zWiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgX2dhbWVNZ3I6IEdhbWVNZ3IgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfZGF0YU1ncjogRGF0YU1nciA9IG51bGw7XHJcbiAgICBwcml2YXRlIF91aU1ncjogVUlNZ3IgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfcmVzTWdyOiBSZXNNZ3IgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfYXVkaW9NZ3I6IEF1ZGlvTWdyID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3NjZW5lTWdyOiBTY2VuZU1nciA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHBhY2thZ2UxOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgcGFja2FnZTI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBwYWNrYWdlMzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGdldCBnYW1lTWdyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nYW1lTWdyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZGF0YU1ncigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YU1ncjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHVpTWdyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91aU1ncjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHJlc01ncigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVzTWdyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYXVkaW9NZ3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1ZGlvTWdyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc2NlbmVNZ3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NjZW5lTWdyO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xyXG5cclxuICAgICAgICBjb2Nvc3ogPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX2dhbWVNZ3IgPSBHYW1lTWdyLmluc3Q7XHJcbiAgICAgICAgdGhpcy5fZGF0YU1nciA9IERhdGFNZ3IuaW5zdDtcclxuICAgICAgICB0aGlzLl91aU1nciA9IFVJTWdyLmluc3Q7XHJcbiAgICAgICAgdGhpcy5fcmVzTWdyID0gUmVzTWdyLmluc3Q7XHJcbiAgICAgICAgdGhpcy5fYXVkaW9NZ3IgPSBBdWRpb01nci5pbnN0O1xyXG4gICAgICAgIHRoaXMuX3NjZW5lTWdyID0gU2NlbmVNZ3IuaW5zdDtcclxuXHJcbiAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX1NIT1csICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGNvY29zei5nYW1lTWdyLmF1ZGlvQmcpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9ISURFLCAoKSA9PiB7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLea4uOaIj+WIneWni+WMli0tLS0tLS0tLS0tLVwiKVxyXG4gICAgICAgIC8vIHZpdm/mlq3nvZHmo4DmtYtcclxuICAgICAgICAvLyBpZiAoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5WSVZPX0dBTUUpIHtcclxuICAgICAgICAvLyAgICAgLy9AdHMtaWdub3JlXHJcbiAgICAgICAgLy8gICAgIGlmICh3aW5kb3cubmV0d29ya0xpbmsgPT0gMSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5Mb2FkKCk7XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAvL3V0aWxzLnNob3dUb2FzdChcIue9kee7nOmUmeivr++8jOivt+mHjeaWsOWKoOi9ve+8gVwiKTtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0t572R57uc6ZSZ6K+v77yM6K+36YeN5paw5Yqg6L29XCIpXHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuTG9hZCgpO1xyXG4gICAgICAgIGNjLmdhbWUub24oQ29uc3RhbnQuRV9MT0FEX1JFUywgdGhpcy5fbG9hZFJlcywgdGhpcyk7XHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvL3RoaXMuTG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgTG9hZCgpIHtcclxuICAgICAgICBsZXQgdXJsOiBzdHJpbmcgPSBcInVpL1VpTG9hZFwiOy8vXCJwcmVmYWJzL3VpL2xvYWRpbmdQYWdlXCI7XHJcbiAgICAgICAgdGhpcy5fcmVzTWdyLmxvYWRSZXModXJsLCBjYy5QcmVmYWIsIG51bGwsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fdWlNZ3Iub3BlblBhZ2UoUGFnZU5hbWUuVWlMb2FkKTtcclxuICAgICAgICAgICAgLy8g5Yqg6L29VUnnlYzpnaLotYTmupBcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX2xvYWRSZXMoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLlvIDlp4vliqDovb3otYTmupDvvIFcIilcclxuICAgICAgICBsZXQgY29tcENvdW50OiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBsZXQgcHJlZmFiTGlzdDogc3RyaW5nW10gPSBbLy/pooTliLbkvZNcclxuICAgICAgICAgICAgXCJ1aS9Db2luVGlwc1BhbmVsXCIsXHJcbiAgICAgICAgICAgIFwidWkvTGV2ZWxJdGVtXCIsXHJcbiAgICAgICAgICAgIFwidWkvTGV2ZWxQYW5lbFwiLFxyXG4gICAgICAgICAgICBcInVpL1BhdXNlUGFuZWxcIixcclxuICAgICAgICAgICAgXCJ1aS9UcmlhbFBhbmVsXCIsXHJcbiAgICAgICAgICAgIFwidWkvVWlGYWlsZWRcIixcclxuICAgICAgICAgICAgXCJ1aS9VaUdhbWVcIixcclxuICAgICAgICAgICAgXCJ1aS9VaUdhbWVCZ1wiLFxyXG4gICAgICAgICAgICBcInVpL1VpSG9tZVwiLFxyXG4gICAgICAgICAgICBcInVpL1VpU2hvcFwiLFxyXG4gICAgICAgICAgICBcInVpL1VpU2lnblwiLFxyXG4gICAgICAgICAgICBcInVpL1VpU3VjY2VlZFwiLFxyXG4gICAgICAgICAgICBcInVpL1RpcHNcIixcclxuICAgICAgICAgICAgXCJ1aS9zaG9wUm9sZVwiLFxyXG4gICAgICAgICAgICBcInVpL1VpTG90dGVyeVwiLFxyXG4gICAgICAgICAgICBcInVpL1VpU2V0XCIsXHJcbiAgICAgICAgICAgIFwidWkvVWlCZWZvcmVTdWNjZWVkXCIsXHJcbiAgICAgICAgICAgIFwidWkvVWlSZXN1cnJlY3Rpb25cIixcclxuICAgICAgICAgICAgXCJ1aS9VaUxvYWRHYW1lXCIsXHJcblxyXG5cclxuICAgICAgICAgICAgXCJwcmVmYWIvZ2FtZUJnXCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL2JhZmZsZVwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9iYWZmbGUyXCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL3JvbGVcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvY29pblwiLFxyXG5cclxuICAgICAgICAgICAgXCJwcmVmYWIvYmFsbG9vblwiLFxyXG5cclxuICAgICAgICAgICAgXCJwcmVmYWIvcm9wZVwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9yb3BlMlwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9saW1pdDFcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvbGltaXQyXCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL2xpbWl0NVwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9mbG9vcjFcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvZmxvb3IyXCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL2Zsb29yM1wiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9mbG9vcjRcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvZmxvb3I2XCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL2Zsb29yN1wiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9mbG9vcjhcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvZmxvb3I5XCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL2Zsb29yMTBcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvZmxvb3IxMVwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9mbG9vcjEyXCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL2Zsb29yMTNcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvZmxvb3IxNFwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9mbG9vcjE1XCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL2Zsb29yMTZcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvZmxvb3IxN1wiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9mbG9vcjE4XCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL2Zsb29yMTlcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvZmxvb3IyMFwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9mbG9vcjIxXCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL2Zsb29yMjJcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvZmxvb3JSb3RldGFDb21cIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvZmxvb3JSb3RldGFDb20yXCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL2Zsb29yUm90ZXRhQ29tM1wiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9mYW5cIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvYmlnRmFuXCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL2ZhbkxpWmlcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvdGhvcm5cIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvY2FjdHVzXCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL2NhY3R1czJcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvY2FjdHVzM1wiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9jYWN0dXM0XCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL2NhY3R1czVcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvc3RvbmVcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvc3RvbmUyXCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL3N0b25lM1wiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9zdG9uZTRcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvc3RvbmU1XCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL3JvY2tldFwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9uaW1pQ2FjdHVzXCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL3Byb3BIb25leWJlZVwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9oYW5kMVwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9oYW5kMlwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9lbmVteTFcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvZW5lbXkyXCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL2VuZW15M1wiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9uaW1pQ2FjdHVzMlwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9uaW1pQ2FjdHVzM1wiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9uaW1pQ2FjdHVzNFwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9uaW1pQ2FjdHVzNVwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9uaW1pQ2FjdHVzNlwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9uaW1pQ2FjdHVzN1wiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9uaW1pQ2FjdHVzOFwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9uaW1pQ2FjdHVzOVwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9uaW1pQ2FjdHVzMTBcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvbmltaUNhY3R1czExXCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL25pbWlDYWN0dXMxMlwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9ib3hcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvY2hhaW5Sb2NrZXRcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvY2hhaW5Sb2NrZXQyXCIsXHJcblxyXG5cclxuICAgICAgICAgICAgXCJwcmVmYWIvdGV4dGlwczFcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvdGV4dGlwczJcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvdGV4dGlwczNcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvdGV4dGlwczRcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvdGV4dGlwczVcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvdGV4dGlwczZcIixcclxuXHJcblxyXG4gICAgICAgICAgICBcInByZWZhYi9oYW5kVGlwc1wiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9jYWdlXCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL2NhZ2UyXCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL2Nsb3VkXCIsXHJcblxyXG5cclxuICAgICAgICAgICAgXCJwcmVmYWIvYm9vbVwiLFxyXG5cclxuICAgICAgICAgICAgXCJwcmVmYWIvZmxvb3JUaXBzMVwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9mbG9vclRpcHMyXCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL2Zsb29yVGlwczNcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvZmxvb3JUaXBzNFwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9yb2NrZXRFZmZlY3RcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvcm9ja2V0RWZmZWN0MlwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9zYW5kRWZmZWN0XCIsXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIFwicHJlZmFiL2NhcnRvbjJcIixcclxuXHJcbiAgICAgICAgICAgIFwicHJlZmFiL2xpbWl0M1wiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9mbG9vcjVcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvbGltaXQ0XCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL2xhc2VyXCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL2xhc2VyRWZmZWN0XCIsXHJcblxyXG5cclxuICAgICAgICAgICAgXCJwcmVmYWIvd29vbGRlbkJveDFcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvd29vbGRlbkJveDJcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvd29vbGRlbkJveDNcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvd29vbGRlbkJveDRcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvd29vbGRlbkJveDVcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvd29vbGRlbkJveDZcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvd29vbGRlbkJveDdcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvd29vbGRlbkJveDhcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvd29vbGRlbkJveDlcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvd29vbGRlbkJveDEwXCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL3dvb2xkZW5Cb3gxMVwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi93b29sZGVuQm94MTJcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvY2FydG9uXCIsXHJcblxyXG4gICAgICAgICAgICBcInByZWZhYi9jMVwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9jMlwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9jN1wiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9jM1wiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9jNFwiLFxyXG5cclxuICAgICAgICAgICAgXCJwcmVmYWIvYmF0MlwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9iYXQzXCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL2JhdDRcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvYmF0NVwiLFxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBcInByZWZhYi90ZXhGbG9vclRpcHMxXCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL3RleEZsb29yVGlwczJcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvdGV4Rmxvb3JUaXBzM1wiLFxyXG5cclxuICAgICAgICAgICAgXCJwcmVmYWIvYmFsbFBhcnRpY2xlXCIsXHJcblxyXG5cclxuICAgICAgICAgICAgXCJwcmVmYWIvY29udHJvbENlbnRlclwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi90ZXhMZXZlbFRpcHNcIixcclxuXHJcblxyXG4gICAgICAgICAgICBcInByZWZhYi9sYWJlbFRpcHMxXCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL2xhYmVsVGlwczJcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvbGFiZWxUaXBzM1wiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9sYWJlbFRpcHM0XCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL2xhYmVsVGlwczVcIixcclxuXHJcblxyXG4gICAgICAgICAgICBcInByZWZhYi9tYXBNYXNrXCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL3NhbmRNYXNrXCIsXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIFwicHJlZmFiL21vdmVGbG9vckJnXCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL21vdmVGbG9vcjFcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvbW92ZUZsb29yMlwiLFxyXG4gICAgICAgICAgICBcInByZWZhYi9tb3ZlRmxvb3IzXCIsXHJcbiAgICAgICAgICAgIFwicHJlZmFiL21vdmVGbG9vcjRcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvbW92ZUZsb29yNVwiLFxyXG5cclxuXHJcbiAgICAgICAgICAgIFwidWkvYmFsbGJvbkl0ZW1cIixcclxuICAgICAgICAgICAgXCJ1aS9wcm9wSXRlbVwiLFxyXG4gICAgICAgICAgICBcInVpL3JvbGVJdGVtXCIsXHJcblxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAxXCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDJcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwM1wiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXA0XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDVcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwNlwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXA3XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDhcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwOVwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAxMFwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAxMVwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAxMlwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAxM1wiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAxNFwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAxNVwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAxNlwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAxN1wiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAxOFwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAxOVwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAyMFwiLFxyXG5cclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMjBcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMjFcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMjJcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMjNcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMjRcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMjVcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMjZcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMjdcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMjhcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMjlcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMzBcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMzFcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMzJcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMzNcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMzRcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMzVcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMzZcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMzdcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMzhcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMzlcIixcclxuXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDQwXCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDQxXCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDQyXCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDQzXCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDQ0XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDQ1XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDQ2XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDQ3XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDQ4XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDQ5XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDUwXCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDUxXCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDUyXCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDUzXCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDU0XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDU1XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDU2XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDU3XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDU4XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDU5XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDYwXCIsXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDYxXCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDYyXCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDYzXCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDY0XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDY1XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDY2XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDY3XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDY4XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDY5XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDcwXCIsXHJcblxyXG5cclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwNzFcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwNzJcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwNzNcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwNzRcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwNzVcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwNzZcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwNzdcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwNzhcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwNzlcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwODBcIixcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXA4MVwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXA4MlwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXA4M1wiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXA4NFwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXA4NVwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXA4NlwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXA4N1wiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXA4OFwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXA4OVwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXA5MFwiLFxyXG5cclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwOTFcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwOTJcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwOTNcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwOTRcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwOTVcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwOTZcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwOTdcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwOThcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwOTlcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMTAwXCIsXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDEwMVwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAxMDFcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMTAyXCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDEwM1wiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAxMDRcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMTA1XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDEwNlwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAxMDdcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMTA4XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDEwOVwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAxMTBcIixcclxuXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDExMVwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAxMTJcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMTEzXCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDExNFwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAxMTVcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMTE2XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDExN1wiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAxMThcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMTE5XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDEyMFwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAxMjFcIixcclxuXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDEyMlwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAxMjNcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMTI0XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDEyNVwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAxMjZcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMTI3XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDEyOFwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAxMjlcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMTMwXCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDEzMVwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAxMzJcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMTMzXCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDEzNFwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAxMzVcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMTM2XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDEzN1wiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcC9tYXAxMzhcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAvbWFwMTM5XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwL21hcDE0MFwiLFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyBcIm1hcDIvbGV2ZWwxXCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwMi9sZXZlbDJcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAyL2xldmVsM1wiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcDIvbGV2ZWw0XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwMi9sZXZlbDVcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAyL2xldmVsNlwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcDIvbGV2ZWw3XCIsXHJcbiAgICAgICAgICAgIC8vIFwibWFwMi9sZXZlbDhcIixcclxuICAgICAgICAgICAgLy8gXCJtYXAyL2xldmVsOVwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcDIvbGV2ZWwxMFwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcDIvbGV2ZWwxMVwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcDIvbGV2ZWwxMlwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcDIvbGV2ZWwxM1wiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcDIvbGV2ZWwxNFwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcDIvbGV2ZWwxNVwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcDIvbGV2ZWwxNlwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcDIvbGV2ZWwxN1wiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcDIvbGV2ZWwxOFwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcDIvbGV2ZWwxOVwiLFxyXG4gICAgICAgICAgICAvLyBcIm1hcDIvbGV2ZWwyMFwiLFxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgXCJtYXAyL2xldmVsTWdyXCIsXHJcbiAgICAgICAgICAgIFwibWFwMi9sZXZlbE51bVwiLFxyXG5cclxuXHJcbiAgICAgICAgICAgIFwibWFwMi9sYXVuY2hQb2ludFwiLFxyXG4gICAgICAgICAgICBcIm1hcDIvc0JvYXJkXCIsXHJcbiAgICAgICAgICAgIFwibWFwMi90aG9ybkZsb29yMlwiLFxyXG4gICAgICAgICAgICBcIm1hcDIvdGhvcm5GbG9vcjNcIixcclxuICAgICAgICAgICAgXCJwcmVmYWIvY2FjdHVzNlwiLFxyXG5cclxuXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgdGhpcy5fcmVzTWdyLmxvYWRSZXNBcnJheShwcmVmYWJMaXN0LCBjYy5QcmVmYWIsIChjb21wbGV0ZWRDb3VudDogbnVtYmVyLCB0b3RhbENvdW50OiBudW1iZXIsIGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIH0sIChlcnJvcjogRXJyb3IsIHJlc291cmNlOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICBjb21wQ291bnQrKztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGF0bGFzTGlzdDogc3RyaW5nW10gPSBbLy/lm77pm4ZcclxuXHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLl9yZXNNZ3IubG9hZFJlc0FycmF5KGF0bGFzTGlzdCwgY2MuU3ByaXRlQXRsYXMsIChjb21wbGV0ZWRDb3VudDogbnVtYmVyLCB0b3RhbENvdW50OiBudW1iZXIsIGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIH0sIChlcnJvcjogRXJyb3IsIHJlc291cmNlOiBhbnlbXSkgPT4ge1xyXG4gICAgICAgICAgICBjb21wQ291bnQrKztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHRleExpc3Q6IHN0cmluZ1tdID0gWy8v5Zu+54mHXHJcblxyXG5cclxuICAgICAgICAgICAgXCJ0ZXgvc2tpcFZpZGVvXCIsXHJcbiAgICAgICAgICAgIFwidGV4L2Jvb21cIixcclxuXHJcbiAgICAgICAgICAgIFwidGV4L2JhbGxvb24xXCIsXHJcbiAgICAgICAgICAgIFwidGV4L2JhbGxvb24yXCIsXHJcbiAgICAgICAgICAgIFwidGV4L2JhbGxvb24zXCIsXHJcbiAgICAgICAgICAgIFwidGV4L2JhbGxvb240XCIsXHJcbiAgICAgICAgICAgIFwidGV4L2JhbGxvb241XCIsXHJcbiAgICAgICAgICAgIFwidGV4L2JhbGxvb242XCIsXHJcbiAgICAgICAgICAgIFwidGV4L2JhbGxvb243XCIsXHJcblxyXG4gICAgICAgICAgICBcInRleC9ib2R5XzFcIixcclxuICAgICAgICAgICAgXCJ0ZXgvYm9keV8yXCIsXHJcbiAgICAgICAgICAgIFwidGV4L2JvZHlfM1wiLFxyXG4gICAgICAgICAgICBcInRleC9ib2R5XzRcIixcclxuICAgICAgICAgICAgXCJ0ZXgvYm9keV81XCIsXHJcbiAgICAgICAgICAgIFwidGV4L2JvZHlfNlwiLFxyXG5cclxuICAgICAgICAgICAgXCJ0ZXgvcm9sZTBcIixcclxuICAgICAgICAgICAgXCJ0ZXgvcm9sZTFcIixcclxuICAgICAgICAgICAgXCJ0ZXgvcm9sZTJcIixcclxuICAgICAgICAgICAgXCJ0ZXgvcm9sZTNcIixcclxuICAgICAgICAgICAgXCJ0ZXgvcm9sZTRcIixcclxuICAgICAgICAgICAgXCJ0ZXgvcm9sZTVcIixcclxuXHJcbiAgICAgICAgICAgIFwidGV4L2xlZnRfYXJtXzFcIixcclxuICAgICAgICAgICAgXCJ0ZXgvbGVmdF9hcm1fMlwiLFxyXG4gICAgICAgICAgICBcInRleC9sZWZ0X2FybV8zXCIsXHJcbiAgICAgICAgICAgIFwidGV4L2xlZnRfYXJtXzRcIixcclxuICAgICAgICAgICAgXCJ0ZXgvbGVmdF9hcm1fNVwiLFxyXG4gICAgICAgICAgICBcInRleC9sZWZ0X2FybV82XCIsXHJcblxyXG4gICAgICAgICAgICBcInRleC9sZWZ0X2xlZ18xXCIsXHJcbiAgICAgICAgICAgIFwidGV4L2xlZnRfbGVnXzJcIixcclxuICAgICAgICAgICAgXCJ0ZXgvbGVmdF9sZWdfM1wiLFxyXG4gICAgICAgICAgICBcInRleC9sZWZ0X2xlZ180XCIsXHJcbiAgICAgICAgICAgIFwidGV4L2xlZnRfbGVnXzVcIixcclxuICAgICAgICAgICAgXCJ0ZXgvbGVmdF9sZWdfNlwiLFxyXG5cclxuICAgICAgICAgICAgXCJ0ZXgvcmlnaHRfYXJtXzFcIixcclxuICAgICAgICAgICAgXCJ0ZXgvcmlnaHRfYXJtXzJcIixcclxuICAgICAgICAgICAgXCJ0ZXgvcmlnaHRfYXJtXzNcIixcclxuICAgICAgICAgICAgXCJ0ZXgvcmlnaHRfYXJtXzRcIixcclxuICAgICAgICAgICAgXCJ0ZXgvcmlnaHRfYXJtXzVcIixcclxuICAgICAgICAgICAgXCJ0ZXgvcmlnaHRfYXJtXzZcIixcclxuXHJcbiAgICAgICAgICAgIFwidGV4L3JpZ2h0X2xlZ18xXCIsXHJcbiAgICAgICAgICAgIFwidGV4L3JpZ2h0X2xlZ18yXCIsXHJcbiAgICAgICAgICAgIFwidGV4L3JpZ2h0X2xlZ18zXCIsXHJcbiAgICAgICAgICAgIFwidGV4L3JpZ2h0X2xlZ180XCIsXHJcbiAgICAgICAgICAgIFwidGV4L3JpZ2h0X2xlZ181XCIsXHJcbiAgICAgICAgICAgIFwidGV4L3JpZ2h0X2xlZ182XCIsXHJcblxyXG4gICAgICAgICAgICBcInRleC90aWVfMVwiLFxyXG4gICAgICAgICAgICBcInRleC90aWVfNVwiLFxyXG5cclxuXHJcbiAgICAgICAgICAgIFwidGV4L3NzXCIsXHJcblxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5fcmVzTWdyLmxvYWRSZXNBcnJheSh0ZXhMaXN0LCBjYy5TcHJpdGVGcmFtZSwgKGNvbXBsZXRlZENvdW50OiBudW1iZXIsIHRvdGFsQ291bnQ6IG51bWJlciwgaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgfSwgKGVycm9yOiBFcnJvciwgcmVzb3VyY2U6IGFueVtdKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbXBDb3VudCsrO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgYXVkaW9MaXN0OiBzdHJpbmdbXSA9IFsvL+WjsOmfs1xyXG4gICAgICAgICAgICBcImF1ZGlvL2JnbVwiLFxyXG4gICAgICAgICAgICBcImF1ZGlvL0NsaWNrQnRuXCIsXHJcbiAgICAgICAgICAgIFwiYXVkaW8vYmVmb3JlRmVpbGRcIixcclxuICAgICAgICAgICAgXCJhdWRpby9tQmVlXCIsXHJcbiAgICAgICAgICAgIFwiYXVkaW8vbUhlcm9EaWVCZWVcIixcclxuICAgICAgICAgICAgXCJhdWRpby9tSGVyb0RpZUZhblwiLFxyXG4gICAgICAgICAgICBcImF1ZGlvL01vdmVGbG9vclwiLFxyXG4gICAgICAgICAgICBcImF1ZGlvL21Sb2NrZXRFeHBsb2RlXCIsXHJcbiAgICAgICAgICAgIFwiYXVkaW8vbVJvY2tldFN0YXJ0XCIsXHJcbiAgICAgICAgICAgIFwiYXVkaW8vc2FuZFwiLFxyXG4gICAgICAgICAgICBcImF1ZGlvL1NvdW5kX21vbmV5XCIsXHJcbiAgICAgICAgICAgIFwiYXVkaW8vU3VjY2Vzc1wiLFxyXG4gICAgICAgICAgICBcImF1ZGlvL21IZXJvR2xhZFwiLFxyXG4gICAgICAgICAgICBcImF1ZGlvL21GYW5cIixcclxuICAgICAgICAgICAgXCJhdWRpby9tQ2FjdHVzXCIsXHJcbiAgICAgICAgICAgIFwiYXVkaW8vVXNlU2hpZWxkXCIsXHJcbiAgICAgICAgICAgIFwiYXVkaW8vbUNhY3R1c1Nob3RcIixcclxuICAgICAgICAgICAgXCJhdWRpby9tTWV0YWxTdG9uZVwiLFxyXG4gICAgICAgICAgICBcImF1ZGlvL2d1blwiLFxyXG4gICAgICAgICAgICBcImF1ZGlvL21CYXRQcmlja2xlXCIsXHJcbiAgICAgICAgICAgIFwiYXVkaW8vbVN0b25lV29vZFwiLFxyXG4gICAgICAgICAgICBcImF1ZGlvL21IZXJvR2xvb215XCIsXHJcbiAgICAgICAgICAgIFwiYXVkaW8vdHVybnRhYmxlXCIsXHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLl9yZXNNZ3IubG9hZFJlc0FycmF5KGF1ZGlvTGlzdCwgY2MuQXVkaW9DbGlwLCAoY29tcGxldGVkQ291bnQ6IG51bWJlciwgdG90YWxDb3VudDogbnVtYmVyLCBpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICB9LCAoZXJyb3I6IEVycm9yLCByZXNvdXJjZTogYW55W10pID0+IHtcclxuICAgICAgICAgICAgY29tcENvdW50Kys7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBqc29uTGlzdDogc3RyaW5nW10gPSBbLy9qc29uXHJcbiAgICAgICAgICAgIFwianNvbi9NYXBEYXRhXCIsXHJcbiAgICAgICAgICAgIFwianNvbi9NYXBEYXRhMlwiLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgdGhpcy5fcmVzTWdyLmxvYWRSZXNBcnJheShqc29uTGlzdCwgY2MuSnNvbkFzc2V0LCAoY29tcGxldGVkQ291bnQ6IG51bWJlciwgdG90YWxDb3VudDogbnVtYmVyLCBpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICB9LCAoZXJyb3I6IEVycm9yLCByZXNvdXJjZTogYW55W10pID0+IHtcclxuICAgICAgICAgICAgY29tcENvdW50Kys7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gY2MubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS10b3RhbFByb2dyZXNzMTExMTExLVwiKVxyXG4gICAgICAgIGxldCB0b3RhbFByb2dyZXNzOiBudW1iZXIgPSBwcmVmYWJMaXN0Lmxlbmd0aCArIGF0bGFzTGlzdC5sZW5ndGggKyB0ZXhMaXN0Lmxlbmd0aCArIGF1ZGlvTGlzdC5sZW5ndGggKyBqc29uTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX0dBTUVfTE9HSUMsIHsgdHlwZTogQ29uc3RhbnQuRV9VUERBVEVfUFJPR1JFU1MsIGRhdGE6IGNvbXBDb3VudCAvIHRvdGFsUHJvZ3Jlc3MgfSk7XHJcbiAgICAgICAgICAgIC8vY2MubG9nKCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicHJvZ3Jlc3MgPT4gXCIsIGNvbXBDb3VudCk7XHJcbiAgICAgICAgICAgIGlmIChjb21wQ291bnQgPj0gdG90YWxQcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2codGhpcy4pXHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAvLyBpZiAodGhpcy5wYWNrYWdlMSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLl9zY2VuZU1nci5sb2FkU2NlbmUoXCJIb21lXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuX3VpTWdyLm9wZW5QYWdlKFBhZ2VOYW1lLlVpSG9tZSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2NlbmVNZ3IubG9hZFNjZW5lKFwiSG9tZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdWlNZ3Iub3BlblBhZ2UoUGFnZU5hbWUuVWlIb21lKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgLy8gY2MubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS10b3RhbFByb2dyZXNzMjIyMjIyMjIyMjIyLVwiKVxyXG4gICAgfVxyXG59XHJcbiJdfQ==