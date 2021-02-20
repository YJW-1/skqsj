
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/DataMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ede3bcPT+dANq+7VfEvH3O6', 'DataMgr');
// script/Framework/DataMgr.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Constant_1 = require("./Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DataMgr = /** @class */ (function () {
    function DataMgr() {
        this.IsEnd = null;
        this._dataPool = {};
    }
    DataMgr_1 = DataMgr;
    Object.defineProperty(DataMgr, "inst", {
        get: function () {
            if (!DataMgr_1._inst) {
                DataMgr_1._inst = new DataMgr_1();
                DataMgr_1._inst._init();
            }
            return DataMgr_1._inst;
        },
        enumerable: true,
        configurable: true
    });
    DataMgr.prototype._init = function () {
        // cc.sys.localStorage.clear();
        if (cc.sys.localStorage.getItem(Constant_1.default.ST_GameData)) {
            this._dataPool = JSON.parse(cc.sys.localStorage.getItem(Constant_1.default.ST_GameData));
        }
        else {
            // 第一次进入游戏
            // cc.log("第一次进入游戏----------")
            this._dataPool[Constant_1.default.ST_MaxUnlockLevelCount] = "0";
            this._dataPool[Constant_1.default.ST_CurLevelId] = "0";
            this._dataPool[Constant_1.default.ST_MaxLevelId] = "0";
            this._dataPool[Constant_1.default.ST_ResetLevelId] = "0";
            this._dataPool[Constant_1.default.ST_Game2Fraction] = "0";
            this._dataPool[Constant_1.default.ST_IsGame2Novice] = "0";
            this._dataPool[Constant_1.default.ST_AudioOn] = "1";
            this._dataPool[Constant_1.default.ST_AudioEffectOn] = "1";
            this._dataPool[Constant_1.default.ST_ShockOn] = "1";
            // 初始金币
            this._dataPool[Constant_1.default.ST_CoinCount] = "0";
            // 初始奖励关卡
            this._dataPool[Constant_1.default.ST_RewardType] = "0";
            // 初始奖励关卡
            this._dataPool[Constant_1.default.ST_Game2LevelList] = [];
            //跳过卡数量
            this._dataPool[Constant_1.default.ST_SkinVedioNum] = "0";
            //炸弹数量
            this._dataPool[Constant_1.default.ST_BoomNum] = "3";
            this._dataPool[Constant_1.default.ST_CurSkinId] = "0";
            this._dataPool[Constant_1.default.ST_CurBallbonSkinId] = "0";
            this._dataPool[Constant_1.default.LastDailyBonusIndex] = "0";
            var curDate = new Date();
            this._dataPool[Constant_1.default.LastDailyBonusTime] = curDate.toDateString();
            this._dataPool[Constant_1.default.SjShop] = "0";
            this._dataPool[Constant_1.default.ST_Lottery] = "1";
            this._initStarNum();
            this._initSkinData();
            this._initLevelData();
            this._initFaceNum();
            this._initSjShopData();
            this._initRandomLevel1();
            this._initRandomLevel2();
            this._initRandomLevel3();
            this._initGame2LevelList();
            this._save();
        }
    };
    DataMgr.prototype._initGame2LevelList = function () {
        var list = [3, 12, 18, 19, 8, 11];
        this._dataPool[Constant_1.default.ST_Game2LevelList] = JSON.stringify(list);
    };
    Object.defineProperty(DataMgr.prototype, "Game2LevelList", {
        get: function () {
            cc.log(this._getItem(Constant_1.default.ST_Game2LevelList, ""));
            if (!this._getItem(Constant_1.default.ST_Game2LevelList, "")) {
                this._initGame2LevelList();
                this._save();
                return this.Game2LevelList;
            }
            var list = JSON.parse(this._getItem(Constant_1.default.ST_Game2LevelList, ""));
            if (list.length > 0) {
                cc.log("---------------拿无尽关卡数据");
                var a = list.shift();
                this._dataPool[Constant_1.default.ST_Game2LevelList] = JSON.stringify(list);
                this._save();
                return a;
            }
            else {
                cc.log("---------------重新随机无尽关卡数据");
                var c = [];
                var b = 0;
                while (b++ < 20) {
                    c.push(b);
                }
                c.sort(function (a, b) { return Math.random() - 0.5; });
                var a = c.shift();
                this._dataPool[Constant_1.default.ST_Game2LevelList] = JSON.stringify(c);
                this._save();
                return a;
            }
        },
        enumerable: true,
        configurable: true
    });
    DataMgr.prototype._initRandomLevel1 = function () {
        var num = 20;
        var list = [];
        while (num++ < 110) {
            list.push(num);
        }
        var sList = [];
        for (var a = 0; a < list.length - 1; a++) {
            if (Math.random() > 0.5) {
                var k = list[a];
                list[a] = list[a + 1];
                list[a + 1] = k;
            }
            if (Math.random() > 0.6) {
                sList.push(a);
            }
        }
        for (var _i = 0, sList_1 = sList; _i < sList_1.length; _i++) {
            var idx = sList_1[_i];
            var a = list.splice(idx, 1);
            if (Math.random() > 0.5) {
                list.push(a[0]);
            }
            else {
                list.unshift(a[0]);
            }
        }
        // cc.log(list, "----_initRandomLevel1--------")
        this._dataPool[Constant_1.default.ST_RamdomLevel1] = JSON.stringify(list);
    };
    DataMgr.prototype._initRandomLevel2 = function () {
        var num = 120;
        var list = [];
        while (num++ < 130) {
            list.push(num);
        }
        var sList = [];
        for (var a = 0; a < list.length - 1; a++) {
            if (Math.random() > 0.5) {
                var k = list[a];
                list[a] = list[a + 1];
                list[a + 1] = k;
            }
            if (Math.random() > 0.6) {
                sList.push(a);
            }
        }
        for (var _i = 0, sList_2 = sList; _i < sList_2.length; _i++) {
            var idx = sList_2[_i];
            var a = list.splice(idx, 1);
            if (Math.random() > 0.5) {
                list.push(a[0]);
            }
            else {
                list.unshift(a[0]);
            }
        }
        // cc.log(list, "----_initRandomLevel2--------")
        this._dataPool[Constant_1.default.ST_RamdomLevel2] = JSON.stringify(list);
    };
    DataMgr.prototype._initRandomLevel3 = function () {
        var num = 130;
        var list = [];
        while (num++ < 140) {
            list.push(num);
        }
        var sList = [];
        for (var a = 0; a < list.length - 1; a++) {
            if (Math.random() > 0.5) {
                var k = list[a];
                list[a] = list[a + 1];
                list[a + 1] = k;
            }
            if (Math.random() > 0.6) {
                sList.push(a);
            }
        }
        for (var _i = 0, sList_3 = sList; _i < sList_3.length; _i++) {
            var idx = sList_3[_i];
            var a = list.splice(idx, 1);
            if (Math.random() > 0.5) {
                list.push(a[0]);
            }
            else {
                list.unshift(a[0]);
            }
        }
        // cc.log(list, "----_initRandomLevel3--------")
        this._dataPool[Constant_1.default.ST_RamdomLevel3] = JSON.stringify(list);
    };
    DataMgr.prototype.getRamdomLevel = function () {
        // if (this.CurLevelId >= 140) {
        this.CurLevelId -= 140;
        this.CurLevelId %= 50;
        // let num = this.CurLevelId % 10 + 1;
        var num2 = this.CurLevelId % 5 + 1;
        cc.log(this.CurLevelId, num2);
        if (num2 == 1 || num2 == 2 || num2 == 3) {
            return this.getLevelNum1();
        }
        else if (num2 == 4) {
            return this.getLevelNum2();
        }
        else if (num2 == 5) {
            // if (num == 5) {
            //     return this.getLevelNum1()
            // }
            // else if (num == 10) {
            return this.getLevelNum3();
            // }
        }
        // }
    };
    DataMgr.prototype.getLevelNum1 = function () {
        var list = JSON.parse(this._getItem(Constant_1.default.ST_RamdomLevel1, ""));
        if (list) {
            // cc.log(list.length, list, "-------getLevelNum1------list.length")
            // if (list.length <= 30) {
            //     this._initRandomLevel1()
            //     this._initRandomLevel2()
            //     this._initRandomLevel3()
            //     this._save();
            //     this.getLevelNum1();
            // }
            // let idx = Math.floor(Math.random() * list.length);
            // let num = list.splice(idx, 1)[0];
            // cc.log(this.CurLevelId - 1, "--------idx")
            // return list[this.CurLevelId - 2];
            // cc.log("-----------------------是否刷新随机关卡", this.ResetLevel, this.MaxUnlockLevelCount)
            if (this.CurLevelId == 0 && this.ResetLevel != this.MaxUnlockLevelCount) {
                this.ResetLevel = this.MaxUnlockLevelCount;
                cc.log("-----------------------刷新随机关卡", this.ResetLevel, this.MaxUnlockLevelCount);
                this._initRandomLevel1();
                this._initRandomLevel2();
                this._initRandomLevel3();
                this._save();
                return this.getLevelNum1();
            }
            return list[this.CurLevelId];
        }
        else {
            this._initRandomLevel1();
            this._initRandomLevel2();
            this._initRandomLevel3();
            this._save();
            return this.getLevelNum1();
        }
    };
    DataMgr.prototype.getLevelNum2 = function () {
        var list = [];
        if (this._getItem(Constant_1.default.ST_RamdomLevel2, "")) {
            list = JSON.parse(this._getItem(Constant_1.default.ST_RamdomLevel2, ""));
        }
        cc.log(list);
        if (list) {
            cc.log(list.length, list, "-------getLevelNum2------list.length");
            // let idx = Math.floor(Math.random() * list.length);
            // let num = list.splice(idx, 1);
            var idx = 0;
            for (var a = 0; a < this.CurLevelId; a++) {
                var num = a % 10 + 1;
                var num2 = num % 5 + 1;
                if (num2 == 3) {
                    idx++;
                }
            }
            cc.log("-----------------------是否刷新随机关卡", this.ResetLevel, this.MaxUnlockLevelCount);
            if ((idx == 0 && this.ResetLevel != this.MaxUnlockLevelCount) || list.length > 10) {
                this.ResetLevel = this.MaxUnlockLevelCount;
                cc.log("-----------------------刷新随机关卡", this.ResetLevel, this.MaxUnlockLevelCount);
                this._initRandomLevel1();
                this._initRandomLevel2();
                this._initRandomLevel3();
                this._save();
                return this.getLevelNum2();
            }
            cc.log(idx, "--------idx");
            return list[idx];
        }
        else {
            this._initRandomLevel1();
            this._initRandomLevel2();
            this._initRandomLevel3();
            this._save();
            return this.getLevelNum2();
        }
    };
    DataMgr.prototype.getLevelNum3 = function () {
        var list = JSON.parse(this._getItem(Constant_1.default.ST_RamdomLevel3, ""));
        if (list) {
            cc.log(list.length, list, "-------getLevelNum3------list.length");
            var idx = 0;
            for (var a = 0; a < this.CurLevelId - 1; a++) {
                var num = a % 10 + 1;
                var num2 = num % 5 + 1;
                if (num2 == 5) {
                    idx++;
                }
            }
            // cc.log(idx, "--------idx")
            // if (idx == 6) {
            //     this._initRandomLevel1()
            //     this._initRandomLevel2()
            //     this._initRandomLevel3()
            //     this._save();
            //     return this.getLevelNum3();
            // }
            cc.log("-----------------------是否刷新随机关卡", this.ResetLevel, this.MaxUnlockLevelCount);
            if ((idx == 0 && this.ResetLevel != this.MaxUnlockLevelCount) || list.length > 10) {
                this.ResetLevel = this.MaxUnlockLevelCount;
                cc.log("-----------------------刷新随机关卡", this.ResetLevel, this.MaxUnlockLevelCount);
                this._initRandomLevel1();
                this._initRandomLevel2();
                this._initRandomLevel3();
                this._save();
                return this.getLevelNum3();
            }
            return list[idx];
        }
        else {
            this._initRandomLevel1();
            this._initRandomLevel2();
            this._initRandomLevel3();
            this._save();
            return this.getLevelNum3();
        }
    };
    DataMgr.prototype.onReset = function () {
        this._initRandomLevel1();
        this._initRandomLevel2();
        this._initRandomLevel3();
        this._save();
        return null;
    };
    Object.defineProperty(DataMgr.prototype, "ResetLevel", {
        /**拿随机关卡节点 */
        get: function () {
            if (this._getItem(Constant_1.default.ST_ResetLevelId, "")) {
                return JSON.parse(this._getItem(Constant_1.default.ST_ResetLevelId, ""));
            }
            else {
                this._dataPool[Constant_1.default.ST_ResetLevelId] = "0";
                this._save();
                return JSON.parse(this._getItem(Constant_1.default.ST_ResetLevelId, ""));
            }
        },
        /**拿随机关卡节点 */
        set: function (value) {
            this._setItem(Constant_1.default.ST_ResetLevelId, value + "");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "rewardType", {
        /**拿奖励关卡数据 */
        get: function () {
            if (this._getItem(Constant_1.default.ST_RewardType, "")) {
                return JSON.parse(this._getItem(Constant_1.default.ST_RewardType, ""));
            }
            else {
                this._dataPool[Constant_1.default.ST_RewardType] = "0";
                this._save();
                return JSON.parse(this._getItem(Constant_1.default.ST_RewardType, ""));
            }
        },
        /**存奖励关卡数据 */
        set: function (value) {
            this._setItem(Constant_1.default.ST_RewardType, value + "");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "Lottery", {
        /**拿转盘数据 */
        get: function () {
            return JSON.parse(this._getItem(Constant_1.default.ST_Lottery, ""));
        },
        /**存转盘数据 */
        set: function (value) {
            this._setItem(Constant_1.default.ST_Lottery, value + "");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "SkinVedioNum", {
        /**拿跳过卡数据 */
        get: function () {
            if (!this._dataPool[Constant_1.default.ST_SkinVedioNum]) {
                this._dataPool[Constant_1.default.ST_SkinVedioNum] = "0";
                this._save();
            }
            return JSON.parse(this._getItem(Constant_1.default.ST_SkinVedioNum, ""));
        },
        /**存跳过卡数据 */
        set: function (value) {
            this._setItem(Constant_1.default.ST_SkinVedioNum, value + "");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "BoomNum", {
        /**拿炸弹数据 */
        get: function () {
            if (!this._dataPool[Constant_1.default.ST_BoomNum]) {
                this._dataPool[Constant_1.default.ST_BoomNum] = "0";
                this._save();
            }
            return JSON.parse(this._getItem(Constant_1.default.ST_BoomNum, ""));
        },
        /**存炸弹数据 */
        set: function (value) {
            this._setItem(Constant_1.default.ST_BoomNum, value + "");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "fraction", {
        /**拿无尽分数数据 */
        get: function () {
            if (!this._dataPool[Constant_1.default.ST_Game2Fraction]) {
                this._dataPool[Constant_1.default.ST_Game2Fraction] = "0";
                this._save();
            }
            return JSON.parse(this._getItem(Constant_1.default.ST_Game2Fraction, ""));
        },
        /**存无尽分数数据 */
        set: function (value) {
            this._setItem(Constant_1.default.ST_Game2Fraction, value + "");
        },
        enumerable: true,
        configurable: true
    });
    /**初始化每关表情 */
    DataMgr.prototype._initFaceNum = function () {
        var FaceNum = [];
        for (var index = 0; index < Constant_1.default.CT_TotalLevelCount; index++) {
            FaceNum.push(0);
        }
        this._dataPool[Constant_1.default.ST_FaceNum] = JSON.stringify(FaceNum);
    };
    /**存表情数据 */
    DataMgr.prototype.setFaceNum = function (id, num) {
        var FaceInfos = this._getItem(Constant_1.default.ST_FaceNum, "1");
        if (FaceInfos) {
            var FaceInfoArr = JSON.parse(FaceInfos);
            FaceInfoArr[id] = num;
            this._setItem(Constant_1.default.ST_FaceNum, JSON.stringify(FaceInfoArr));
        }
    };
    /**
     * 取表情数据
     */
    DataMgr.prototype.getFaceInfo = function (id) {
        var FaceInfos = this._getItem(Constant_1.default.ST_FaceNum, "");
        if (FaceInfos) {
            var FaceInfoArr = JSON.parse(FaceInfos);
            return FaceInfoArr[id];
        }
        return null;
    };
    /**初始化关卡星星数量 */
    DataMgr.prototype._initStarNum = function () {
        var StarNum = [];
        for (var i = 0; i < Constant_1.default.CT_TotalLevelCount; i++) {
            StarNum.push(0);
        }
        this._dataPool[Constant_1.default.ST_StarNum] = JSON.stringify(StarNum);
    };
    DataMgr.prototype.setIsEnd = function (boolean) {
        this.IsEnd = boolean;
    };
    DataMgr.prototype.getIsEnd = function (boolean) {
        // cc.log(this.IsEnd, "999999999999888888888")
        return this.IsEnd == boolean;
    }; /**存关卡星星数 */
    DataMgr.prototype.setStarNum = function (id, num) {
        var StarInfo = this._getItem(Constant_1.default.ST_StarNum, "0");
        if (StarInfo) {
            var StarInfoArr = JSON.parse(StarInfo);
            // cc.log(StarInfoArr, StarInfo, "00000000000000")
            StarInfoArr[id] = num;
            this._setItem(Constant_1.default.ST_StarNum, JSON.stringify(StarInfoArr));
        }
    };
    /**取关卡星星数 */
    DataMgr.prototype.getStarInfo = function (id) {
        var StarInfo = this._getItem(Constant_1.default.ST_StarNum, "");
        // cc.log(StarInfo,id)
        // cc.log(StarInfo);
        if (StarInfo) {
            var FaceInfoArr = JSON.parse(StarInfo);
            // cc.log(FaceInfoArr[id]);
            if (!FaceInfoArr[id]) {
                var StarNum = [];
                for (var i = 0; i < 80; i++) {
                    StarNum.push(FaceInfoArr[i]);
                }
                for (var i = id; i < id + 400; i++) {
                    StarNum.push(0);
                }
                FaceInfoArr = StarNum;
                // cc.log(FaceInfoArr, FaceInfoArr[id]," FaceInfoArr[id]");
                this._dataPool[Constant_1.default.ST_StarNum] = JSON.stringify(StarNum);
                this._save();
                // return this.getSkinInfo(id);
                return FaceInfoArr[id];
            }
            return FaceInfoArr[id];
        }
        return 0;
    };
    /**
    * 初始化关卡信息
    */
    DataMgr.prototype._initLevelData = function () {
        var levelitemArr = [];
        var levelitem = new Constant_1.Levelitem("{\"Id\":\"" + 0 + "\",\"State\":\"" + 1 + "\",\"fraction\":\"" + 0 + "\"}");
        levelitemArr.push(levelitem);
        var LevelInfos = this._getItem(Constant_1.default.ST_LevelItem, "");
        for (var i = 0; i < 300; i++) {
            var n = 0;
            if (LevelInfos[i]) {
                n = LevelInfos[i]["State"];
            }
            var levelitem_1 = new Constant_1.Levelitem("{\"Id\":\"" + i + "\",\"State\":\"" + 0 + "\",\"fraction\":\"" + 0 + "\"}");
            if (n) {
                levelitem_1 = new Constant_1.Levelitem("{\"Id\":\"" + i + "\",\"State\":\"" + n + "\",\"fraction\":\"" + 0 + "\"}");
            }
            levelitemArr.push(levelitem_1);
        }
        this._dataPool[Constant_1.default.ST_LevelItem] = JSON.stringify(levelitemArr);
    };
    /**
     * 过关时的关卡解锁
     */
    DataMgr.prototype.LevelUnLock = function (id) {
        var LevelInfos = this._getItem(Constant_1.default.ST_LevelItem, "");
        if (LevelInfos) {
            var LevelInfoArr = JSON.parse(LevelInfos);
            // cc.log(LevelInfoArr.length, LevelInfoArr, "------------LevelInfoArr----------")
            // if (id == 120 - 1) {
            //     LevelInfoArr[id].State = 2;
            //     this.setLevelInfo(id, LevelInfoArr[id]);
            //     return;
            // }
            // cc.log(LevelInfoArr)
            if (LevelInfoArr.length < 300) {
                this._initLevelData();
                this._save();
                this.LevelUnLock(id);
                return;
            }
            // console.log(LevelInfoArr[id + 1].State, LevelInfoArr[id].State, "LevelInfoArr[id].State")
            if (id >= 0 && id < LevelInfoArr.length) {
                if (LevelInfoArr[id + 1].State == 2 || LevelInfoArr[id + 1].State == 3) { //如果后一个关卡已解锁
                    LevelInfoArr[id].State = 2;
                    this.setLevelInfo(id, LevelInfoArr[id]);
                }
                else if (LevelInfoArr[id].State == 2 && LevelInfoArr[id + 1].State == 0) { //如果当前关卡为失败
                    LevelInfoArr[id].State = 2;
                    LevelInfoArr[id + 1].State = 1;
                    this.setLevelInfo(id, LevelInfoArr[id]);
                    this.setLevelInfo(id + 1, LevelInfoArr[id + 1]);
                }
                else if (LevelInfoArr[id].State == 1) { //如果当前关卡未完成
                    LevelInfoArr[id].State = 2;
                    LevelInfoArr[id + 1].State = 1;
                    this.setLevelInfo(id, LevelInfoArr[id]);
                    this.setLevelInfo(id + 1, LevelInfoArr[id + 1]);
                }
                else if (LevelInfoArr[id].State == 3) {
                    LevelInfoArr[id].State = 2;
                    this.setLevelInfo(id, LevelInfoArr[id]);
                }
            }
        }
    };
    /**
     * 过关时的失败关卡
     */
    DataMgr.prototype.LevelFaild = function (id) {
        var LevelInfos = this._getItem(Constant_1.default.ST_LevelItem, "");
        if (LevelInfos) {
            var LevelInfoArr = JSON.parse(LevelInfos);
            if (id >= 0 && id < LevelInfoArr.length) {
                if (LevelInfoArr[id].State == 3) {
                    return;
                }
                LevelInfoArr[id].State = 3;
                this.setLevelInfo(id, LevelInfoArr[id]);
            }
        }
    };
    /**
    * 跳关时的关卡解锁
    */
    DataMgr.prototype.LevelSkipLock = function (id) {
        var LevelInfos = this._getItem(Constant_1.default.ST_LevelItem, "");
        if (LevelInfos) {
            var LevelInfoArr = JSON.parse(LevelInfos);
            if (id == Constant_1.default.CT_TotalLevelCount - 1) {
                LevelInfoArr[id].State = 3;
                this.setLevelInfo(id, LevelInfoArr[id]);
                return;
            }
            if (id >= 0 && id < LevelInfoArr.length) {
                if (LevelInfoArr[id + 1].State == 2 || LevelInfoArr[id + 1].State == 3) {
                    return;
                }
                LevelInfoArr[id].State = 3;
                LevelInfoArr[id + 1].State = 1;
                this.setLevelInfo(id, LevelInfoArr[id]);
                this.setLevelInfo(id + 1, LevelInfoArr[id + 1]);
            }
        }
    };
    /**
     * 存关卡信息
     * @param id 关卡ID
     * @param info 关卡信息
     */
    DataMgr.prototype.setLevelInfo = function (id, info) {
        var LevelInfos = this._getItem(Constant_1.default.ST_LevelItem, "");
        if (LevelInfos) {
            var LevelInfoArr = JSON.parse(LevelInfos);
            if (id >= 0 && id < LevelInfoArr.length) {
                LevelInfoArr[id] = info;
                this._setItem(Constant_1.default.ST_LevelItem, JSON.stringify(LevelInfoArr));
            }
            // else {
            //     for (let i = id; i < Constant.CT_TotalLevelCount; i++) {
            //         let levelitem: Levelitem = new Levelitem(`{"Id":"${i}","State":"${0}","fraction":"${0}"}`);
            //         LevelInfoArr.push(levelitem);
            //     }
            //     LevelInfoArr[id] = info;
            //     this._setItem(Constant.ST_LevelItem, JSON.stringify(LevelInfoArr));
            // }
        }
    };
    /**
     * 取关卡信息
     * @param id 关卡ID
     */
    DataMgr.prototype.getLevelInfo = function (id) {
        var LevelInfos = this._getItem(Constant_1.default.ST_LevelItem, "");
        if (LevelInfos) {
            var LevelInfoArr = JSON.parse(LevelInfos);
            if (LevelInfoArr.length < 300) {
                cc.log("关卡不存在，创建一组数据!");
                cc.log(LevelInfoArr, "-------getLevelInfo------");
                this._initLevelData();
                this._save();
                return this.getLevelInfo(id);
            }
            if (id >= 0 && id < LevelInfoArr.length) {
                return LevelInfoArr[id];
            }
            // let levelitemArr: Levelitem[] = [];
            // for (let i = 0; i < LevelInfoArr.length; i++) {
            //     let info = this.getLevelInfo(i);
            //     let id = info.Id;
            //     let State = info.State;
            //     let fraction = info.fraction;
            //     let levelitem: Levelitem = new Levelitem(`{"Id":"${id}","State":"${State}","fraction":"${fraction}"}`);
            //     levelitemArr.push(levelitem);
            // }
            // for (let i = 80; i < Constant.CT_TotalLevelCount; i++) {
            //     let levelitem: Levelitem = new Levelitem(`{"Id":"${i}","State":"${0}","fraction":"${0}"}`);
            //     levelitemArr.push(levelitem);
            // }
            // this._dataPool[Constant.ST_LevelItem] = JSON.stringify(levelitemArr);
        }
        // else {
        //     cc.log("关卡不存在，创建一组数据!")
        // }
        return null;
    };
    /**初始化皮肤 */
    DataMgr.prototype._initSkinData = function () {
        var price = [800, 1200, 2000, 3500, 5000, 8000];
        var skinInfoArr = [];
        var skinInfo = new Constant_1.SkinInfo("{\"Id\":\"" + 0 + "\",\"State\":\"2\",\"Price\":\"" + price[0] + "\"}");
        skinInfoArr.push(skinInfo);
        for (var i = 1; i < price.length; i++) {
            var skinInfo_1 = new Constant_1.SkinInfo("{\"Id\":\"" + i + "\",\"State\":\"0\",\"Price\":\"" + price[i] + "\"}");
            skinInfoArr.push(skinInfo_1);
        }
        // cc.log("初始化皮肤数据：", JSON.stringify(skinInfoArr));
        this._dataPool[Constant_1.default.ST_SkinInfo] = JSON.stringify(skinInfoArr);
        var price2 = [500, 1000, 1500, 2500, 4000, 6000, 9000];
        var skinInfoArr2 = [];
        var skinInfo2 = new Constant_1.SkinInfo("{\"Id\":\"" + 0 + "\",\"State\":\"2\",\"Price\":\"" + price2[0] + "\"}");
        skinInfoArr2.push(skinInfo2);
        for (var i = 1; i < price2.length; i++) {
            var skinInfo2_1 = new Constant_1.SkinInfo("{\"Id\":\"" + i + "\",\"State\":\"0\",\"Price\":\"" + price2[i] + "\"}");
            skinInfoArr2.push(skinInfo2_1);
        }
        // cc.log("初始化皮肤数据：", JSON.stringify(skinInfoArr));
        this._dataPool[Constant_1.default.ST_BallbonSkinInfo] = JSON.stringify(skinInfoArr2);
    };
    /**初始化店铺信息 */
    DataMgr.prototype._initSjShopData = function () {
        var data = { "shop": 1, "zhuozi": [1, 1, 1, 1,] };
        this._dataPool[Constant_1.default.SjShop] = JSON.stringify(data);
        // cc.log(this._dataPool[Constant.SjShop], "99999999999999")
    };
    Object.defineProperty(DataMgr.prototype, "LastBonusTime", {
        /**取最后一次签到的时间 */
        get: function () {
            var ret = this._getItem(Constant_1.default.LastDailyBonusTime, "0");
            if (!ret) {
                ret = "0";
            }
            return ret;
        },
        /**存最后一次签到的时间 */
        set: function (value) {
            this._setItem(Constant_1.default.LastDailyBonusTime, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "isNovice", {
        /**取无尽模式是否新手 */
        get: function () {
            var ret = this._getItem(Constant_1.default.ST_IsGame2Novice, "0");
            if (!ret) {
                ret = "0";
            }
            return ret;
        },
        /**存无尽模式是否新手 */
        set: function (value) {
            this._setItem(Constant_1.default.ST_IsGame2Novice, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "LastBonusIndex", {
        /**取最后奖励的天数 */
        get: function () {
            var ret = this._getItem(Constant_1.default.LastDailyBonusIndex, "0");
            if (!ret) {
                ret = 0;
            }
            return parseInt(ret);
        },
        /**存最后奖励的天数 */
        set: function (value) {
            this._setItem(Constant_1.default.LastDailyBonusIndex, value.toString());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "CoinCount", {
        /**拿金币数据 */
        get: function () {
            return parseInt(this._getItem(Constant_1.default.ST_CoinCount, "0"));
        },
        /**存金币数据 */
        set: function (value) {
            this._setItem(Constant_1.default.ST_CoinCount, value + "");
            cc.game.emit(Constant_1.default.E_UPDATE_COIN);
            // cc.game.emit(Constant.E_GAME_LOGIC, { type: Constant.E_STAR_CHANGE });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "SjShop", {
        /**拿店铺数据 */
        get: function () {
            return JSON.parse(this._getItem(Constant_1.default.SjShop, ""));
        },
        /**存店铺数据 */
        set: function (value) {
            this._setItem(Constant_1.default.SjShop, value.toString());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "MaxLevelId", {
        /**拿最大关卡数数据 */
        get: function () {
            if (this._getItem(Constant_1.default.ST_MaxLevelId, "")) {
                return JSON.parse(this._getItem(Constant_1.default.ST_MaxLevelId, ""));
            }
            else {
                this._dataPool[Constant_1.default.ST_MaxLevelId] = "" + this.CurLevelId;
                this._setItem(Constant_1.default.ST_MaxLevelId, this.CurLevelId.toString());
                return JSON.parse(this._getItem(Constant_1.default.ST_MaxLevelId, ""));
            }
        },
        /**存最大关卡数据 */
        set: function (value) {
            this._setItem(Constant_1.default.ST_MaxLevelId, value.toString());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "CurLevelId", {
        get: function () {
            return parseInt(this._getItem(Constant_1.default.ST_CurLevelId, "0"));
        },
        set: function (value) {
            // if (value >= 119) {
            //     value = 119;//-1
            // }
            cc.log(this.MaxLevelId, value, "----------this.MaxLevelId, value------");
            if (this.MaxLevelId < value) {
                this.MaxLevelId = value;
            }
            this._setItem(Constant_1.default.ST_CurLevelId, value + "");
            cc.game.emit(Constant_1.default.E_GAME_LOGIC, { type: Constant_1.default.ST_CurLevelId });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "MaxUnlockLevelCount", {
        get: function () {
            return parseInt(this._getItem(Constant_1.default.ST_MaxUnlockLevelCount, "1"));
        },
        set: function (value) {
            this._setItem(Constant_1.default.ST_MaxUnlockLevelCount, value + "");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "AudioOn", {
        get: function () {
            return this._getItem(Constant_1.default.ST_AudioOn, "1") == "1";
        },
        set: function (value) {
            this._setItem(Constant_1.default.ST_AudioOn, value ? "1" : "0");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "AudioEffectOn", {
        get: function () {
            return this._getItem(Constant_1.default.ST_AudioEffectOn, "1") == "1";
        },
        set: function (value) {
            this._setItem(Constant_1.default.ST_AudioEffectOn, value ? "1" : "0");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "ShockOn", {
        get: function () {
            return this._getItem(Constant_1.default.ST_ShockOn, "1") == "1";
        },
        set: function (value) {
            this._setItem(Constant_1.default.ST_ShockOn, value ? "1" : "0");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataMgr.prototype, "CurSkinId", {
        get: function () {
            return parseInt(this._getItem(Constant_1.default.ST_CurSkinId, "0"));
        },
        set: function (value) {
            if (value == this.CurSkinId) {
                return;
            }
            var preId = this.CurSkinId;
            var skinInfo = this.getSkinInfo(preId);
            if (skinInfo) {
                skinInfo.State = 1;
                this.setSkinInfo(preId, skinInfo);
            }
            var curSkinInfo = this.getSkinInfo(value);
            if (curSkinInfo) {
                curSkinInfo.State = 2;
                this.setSkinInfo(value, curSkinInfo);
            }
            this._setItem(Constant_1.default.ST_CurSkinId, value + "");
            //cc.game.emit(Constant.E_GAME_LOGIC, { type: Constant.E_SELECT_SKIN, skinId: value });
        },
        enumerable: true,
        configurable: true
    });
    // 取人物皮肤信息
    DataMgr.prototype.getSkinInfo = function (id) {
        var skinInfos = this._getItem(Constant_1.default.ST_SkinInfo, "");
        // cc.log(skinInfos);
        if (skinInfos) {
            var skinInfoArr = JSON.parse(skinInfos);
            if (id >= 0 && id < skinInfoArr.length) {
                return skinInfoArr[id];
            }
        }
        else {
            this._initSkinData();
            return this.getSkinInfo(id);
        }
    };
    // 存人物皮肤信息
    DataMgr.prototype.setSkinInfo = function (id, info) {
        var skinInfos = this._getItem(Constant_1.default.ST_SkinInfo, "");
        if (skinInfos) {
            var skinInfoArr = JSON.parse(skinInfos);
            if (id >= 0 && id < skinInfoArr.length) {
                skinInfoArr[id] = info;
                this._setItem(Constant_1.default.ST_SkinInfo, JSON.stringify(skinInfoArr));
                //cc.game.emit(Constant.E_GAME_LOGIC, { type: Constant.E_SKIN_STATE_CHANGE, skinId: id });
            }
        }
    };
    Object.defineProperty(DataMgr.prototype, "CurBallbonSkinId", {
        /**气球皮肤id */
        get: function () {
            return parseInt(this._getItem(Constant_1.default.ST_CurBallbonSkinId, "0"));
        },
        set: function (value) {
            if (value == this.CurBallbonSkinId) {
                return;
            }
            cc.log(value, "-------CurBallbonSkinId---");
            var preId = this.CurBallbonSkinId;
            var skinInfo = this.getBallbonSkinInfo(preId);
            if (skinInfo) {
                skinInfo.State = 1;
                this.setBallbonSkinInfo(preId, skinInfo);
            }
            var curSkinInfo = this.getBallbonSkinInfo(value);
            if (curSkinInfo) {
                curSkinInfo.State = 2;
                this.setBallbonSkinInfo(value, curSkinInfo);
            }
            this._setItem(Constant_1.default.ST_CurBallbonSkinId, value + "");
            //cc.game.emit(Constant.E_GAME_LOGIC, { type: Constant.E_SELECT_SKIN, skinId: value });
        },
        enumerable: true,
        configurable: true
    });
    // 取气球皮肤信息
    DataMgr.prototype.getBallbonSkinInfo = function (id) {
        var skinInfos = this._getItem(Constant_1.default.ST_BallbonSkinInfo, "");
        // cc.log(skinInfos);
        if (skinInfos) {
            var skinInfoArr = JSON.parse(skinInfos);
            if (id >= 0 && id < skinInfoArr.length) {
                return skinInfoArr[id];
            }
        }
        else {
            this._initSkinData();
            return this.getSkinInfo(id);
        }
    };
    // 存气球皮肤信息
    DataMgr.prototype.setBallbonSkinInfo = function (id, info) {
        var skinInfos = this._getItem(Constant_1.default.ST_BallbonSkinInfo, "");
        if (skinInfos) {
            var skinInfoArr = JSON.parse(skinInfos);
            cc.log(info, skinInfoArr, "setBallbonSkinInfo");
            if (id >= 0 && id < skinInfoArr.length) {
                skinInfoArr[id] = info;
                this._setItem(Constant_1.default.ST_BallbonSkinInfo, JSON.stringify(skinInfoArr));
                //cc.game.emit(Constant.E_GAME_LOGIC, { type: Constant.E_SKIN_STATE_CHANGE, skinId: id });
            }
        }
    };
    /**
     * 随机获取一个未解锁的人物皮肤id
     */
    DataMgr.prototype.getRandomLockSkin = function () {
        var ids = [];
        var skinInfos = this._getItem(Constant_1.default.ST_SkinInfo, "");
        if (skinInfos) {
            var skinInfoArr = JSON.parse(skinInfos);
            for (var i = 0; i < skinInfoArr.length; i++) {
                if (skinInfoArr[i].State == 0) {
                    ids.push(skinInfoArr[i].Id);
                }
            }
            if (ids.length > 0) {
                var idx = Math.floor(Math.random() * (ids.length));
                return ids[idx];
            }
            return Math.floor(Math.random() * (skinInfoArr.length - 1)) + 1;
        }
        return -1;
    };
    /**
     * 随机获取一个未解锁的气球皮肤id
     */
    DataMgr.prototype.getRandomLockBalloonSkin = function () {
        var ids = [];
        var skinInfos = this._getItem(Constant_1.default.ST_BallbonSkinInfo, "");
        if (skinInfos) {
            var skinInfoArr = JSON.parse(skinInfos);
            for (var i = 0; i < skinInfoArr.length; i++) {
                if (skinInfoArr[i].State == 0) {
                    ids.push(skinInfoArr[i].Id);
                }
            }
            if (ids.length > 0) {
                var idx = Math.floor(Math.random() * (ids.length));
                return ids[idx];
            }
            return Math.floor(Math.random() * (skinInfoArr.length - 1)) + 1;
        }
        return -1;
    };
    DataMgr.prototype._getItem = function (key, defaultValue) {
        if (this._dataPool[key]) {
            // this._dataPool[key]={};
            return this._dataPool[key];
        }
        return defaultValue;
    };
    DataMgr.prototype._setItem = function (key, value) {
        this._dataPool[key] = value;
        this._save();
    };
    DataMgr.prototype._save = function () {
        cc.sys.localStorage.setItem(Constant_1.default.ST_GameData, JSON.stringify(this._dataPool));
    };
    var DataMgr_1;
    DataMgr = DataMgr_1 = __decorate([
        ccclass
    ], DataMgr);
    return DataMgr;
}());
exports.default = DataMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXERhdGFNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHVDQUEyRDtBQUdyRCxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBREE7UUFXVyxVQUFLLEdBQVksSUFBSSxDQUFDO1FBRXJCLGNBQVMsR0FBUSxFQUFFLENBQUM7SUFtakNoQyxDQUFDO2dCQS9qQ29CLE9BQU87SUFHeEIsc0JBQWtCLGVBQUk7YUFBdEI7WUFDSSxJQUFJLENBQUMsU0FBTyxDQUFDLEtBQUssRUFBRTtnQkFDaEIsU0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLFNBQU8sRUFBRSxDQUFDO2dCQUM5QixTQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3pCO1lBQ0QsT0FBTyxTQUFPLENBQUMsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBS08sdUJBQUssR0FBYjtRQUNJLCtCQUErQjtRQUUvQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxrQkFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsa0JBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQ2xGO2FBQU07WUFDSCxVQUFVO1lBQ1YsOEJBQThCO1lBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUN0RCxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQzdDLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLENBQUM7WUFD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LFlBQVksQ0FBQztJQUN4QixDQUFDO0lBRU8sMEJBQVEsR0FBaEIsVUFBaUIsR0FBVyxFQUFFLEtBQWE7UUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFTyx1QkFBSyxHQUFiO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGtCQUFRLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQzs7SUE3akNnQixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBK2pDM0I7SUFBRCxjQUFDO0NBL2pDRCxBQStqQ0MsSUFBQTtrQkEvakNvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4vQ29jb3NaXCI7XHJcbmltcG9ydCBDb25zdGFudCwgeyBTa2luSW5mbywgTGV2ZWxpdGVtIH0gZnJvbSBcIi4vQ29uc3RhbnRcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YU1nciB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3Q6IERhdGFNZ3I7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0KCk6IERhdGFNZ3Ige1xyXG4gICAgICAgIGlmICghRGF0YU1nci5faW5zdCkge1xyXG4gICAgICAgICAgICBEYXRhTWdyLl9pbnN0ID0gbmV3IERhdGFNZ3IoKTtcclxuICAgICAgICAgICAgRGF0YU1nci5faW5zdC5faW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gRGF0YU1nci5faW5zdDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBJc0VuZDogYm9vbGVhbiA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfZGF0YVBvb2w6IGFueSA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgX2luaXQoKSB7XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG5cclxuICAgICAgICBpZiAoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50LlNUX0dhbWVEYXRhKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhUG9vbCA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKENvbnN0YW50LlNUX0dhbWVEYXRhKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g56ys5LiA5qyh6L+b5YWl5ri45oiPXHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhcIuesrOS4gOasoei/m+WFpea4uOaIjy0tLS0tLS0tLS1cIilcclxuICAgICAgICAgICAgdGhpcy5fZGF0YVBvb2xbQ29uc3RhbnQuU1RfTWF4VW5sb2NrTGV2ZWxDb3VudF0gPSBcIjBcIjtcclxuICAgICAgICAgICAgdGhpcy5fZGF0YVBvb2xbQ29uc3RhbnQuU1RfQ3VyTGV2ZWxJZF0gPSBcIjBcIjtcclxuICAgICAgICAgICAgdGhpcy5fZGF0YVBvb2xbQ29uc3RhbnQuU1RfTWF4TGV2ZWxJZF0gPSBcIjBcIjtcclxuICAgICAgICAgICAgdGhpcy5fZGF0YVBvb2xbQ29uc3RhbnQuU1RfUmVzZXRMZXZlbElkXSA9IFwiMFwiO1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhUG9vbFtDb25zdGFudC5TVF9HYW1lMkZyYWN0aW9uXSA9IFwiMFwiO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fZGF0YVBvb2xbQ29uc3RhbnQuU1RfSXNHYW1lMk5vdmljZV0gPSBcIjBcIjtcclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLl9kYXRhUG9vbFtDb25zdGFudC5TVF9BdWRpb09uXSA9IFwiMVwiO1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhUG9vbFtDb25zdGFudC5TVF9BdWRpb0VmZmVjdE9uXSA9IFwiMVwiO1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhUG9vbFtDb25zdGFudC5TVF9TaG9ja09uXSA9IFwiMVwiO1xyXG4gICAgICAgICAgICAvLyDliJ3lp4vph5HluIFcclxuICAgICAgICAgICAgdGhpcy5fZGF0YVBvb2xbQ29uc3RhbnQuU1RfQ29pbkNvdW50XSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAvLyDliJ3lp4vlpZblirHlhbPljaFcclxuICAgICAgICAgICAgdGhpcy5fZGF0YVBvb2xbQ29uc3RhbnQuU1RfUmV3YXJkVHlwZV0gPSBcIjBcIjtcclxuICAgICAgICAgICAgLy8g5Yid5aeL5aWW5Yqx5YWz5Y2hXHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFQb29sW0NvbnN0YW50LlNUX0dhbWUyTGV2ZWxMaXN0XSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgLy/ot7Pov4fljaHmlbDph49cclxuICAgICAgICAgICAgdGhpcy5fZGF0YVBvb2xbQ29uc3RhbnQuU1RfU2tpblZlZGlvTnVtXSA9IFwiMFwiO1xyXG4gICAgICAgICAgICAvL+eCuOW8ueaVsOmHj1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhUG9vbFtDb25zdGFudC5TVF9Cb29tTnVtXSA9IFwiM1wiO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fZGF0YVBvb2xbQ29uc3RhbnQuU1RfQ3VyU2tpbklkXSA9IFwiMFwiO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fZGF0YVBvb2xbQ29uc3RhbnQuU1RfQ3VyQmFsbGJvblNraW5JZF0gPSBcIjBcIjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFQb29sW0NvbnN0YW50Lkxhc3REYWlseUJvbnVzSW5kZXhdID0gXCIwXCI7XHJcblxyXG4gICAgICAgICAgICBsZXQgY3VyRGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9kYXRhUG9vbFtDb25zdGFudC5MYXN0RGFpbHlCb251c1RpbWVdID0gY3VyRGF0ZS50b0RhdGVTdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5fZGF0YVBvb2xbQ29uc3RhbnQuU2pTaG9wXSA9IFwiMFwiO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fZGF0YVBvb2xbQ29uc3RhbnQuU1RfTG90dGVyeV0gPSBcIjFcIjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRTdGFyTnVtKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRTa2luRGF0YSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0TGV2ZWxEYXRhKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRGYWNlTnVtKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRTalNob3BEYXRhKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9pbml0UmFuZG9tTGV2ZWwxKClcclxuICAgICAgICAgICAgdGhpcy5faW5pdFJhbmRvbUxldmVsMigpXHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRSYW5kb21MZXZlbDMoKVxyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRHYW1lMkxldmVsTGlzdCgpXHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zYXZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgX2luaXRHYW1lMkxldmVsTGlzdCgpIHtcclxuICAgICAgICBsZXQgbGlzdCA9IFszLCAxMiwgMTgsIDE5LCA4LCAxMV07XHJcbiAgICAgICAgdGhpcy5fZGF0YVBvb2xbQ29uc3RhbnQuU1RfR2FtZTJMZXZlbExpc3RdID0gSlNPTi5zdHJpbmdpZnkobGlzdCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldCBHYW1lMkxldmVsTGlzdCgpIHtcclxuICAgICAgICBjYy5sb2codGhpcy5fZ2V0SXRlbShDb25zdGFudC5TVF9HYW1lMkxldmVsTGlzdCwgXCJcIikpXHJcbiAgICAgICAgaWYgKCF0aGlzLl9nZXRJdGVtKENvbnN0YW50LlNUX0dhbWUyTGV2ZWxMaXN0LCBcIlwiKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0R2FtZTJMZXZlbExpc3QoKTtcclxuICAgICAgICAgICAgdGhpcy5fc2F2ZSgpXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLkdhbWUyTGV2ZWxMaXN0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGxpc3QgPSBKU09OLnBhcnNlKHRoaXMuX2dldEl0ZW0oQ29uc3RhbnQuU1RfR2FtZTJMZXZlbExpc3QsIFwiXCIpKTtcclxuXHJcbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjYy5sb2coXCItLS0tLS0tLS0tLS0tLS3mi7/ml6DlsL3lhbPljaHmlbDmja5cIik7XHJcbiAgICAgICAgICAgIGxldCBhID0gbGlzdC5zaGlmdCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhUG9vbFtDb25zdGFudC5TVF9HYW1lMkxldmVsTGlzdF0gPSBKU09OLnN0cmluZ2lmeShsaXN0KTtcclxuICAgICAgICAgICAgdGhpcy5fc2F2ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gYTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIi0tLS0tLS0tLS0tLS0tLemHjeaWsOmaj+acuuaXoOWwveWFs+WNoeaVsOaNrlwiKTtcclxuICAgICAgICAgICAgbGV0IGMgPSBbXTtcclxuICAgICAgICAgICAgbGV0IGIgPSAwO1xyXG4gICAgICAgICAgICB3aGlsZSAoYisrIDwgMjApIHtcclxuICAgICAgICAgICAgICAgIGMucHVzaChiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjLnNvcnQoKGEsIGIpID0+IHsgcmV0dXJuIE1hdGgucmFuZG9tKCkgLSAwLjUgfSk7XHJcbiAgICAgICAgICAgIGxldCBhID0gYy5zaGlmdCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fZGF0YVBvb2xbQ29uc3RhbnQuU1RfR2FtZTJMZXZlbExpc3RdID0gSlNPTi5zdHJpbmdpZnkoYyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zYXZlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBhO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBfaW5pdFJhbmRvbUxldmVsMSgpIHtcclxuICAgICAgICBsZXQgbnVtID0gMjA7XHJcbiAgICAgICAgbGV0IGxpc3QgPSBbXTtcclxuICAgICAgICB3aGlsZSAobnVtKysgPCAxMTApIHtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKG51bSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzTGlzdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgbGlzdC5sZW5ndGggLSAxOyBhKyspIHtcclxuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBrID0gbGlzdFthXTtcclxuICAgICAgICAgICAgICAgIGxpc3RbYV0gPSBsaXN0W2EgKyAxXTtcclxuICAgICAgICAgICAgICAgIGxpc3RbYSArIDFdID0gaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNikge1xyXG4gICAgICAgICAgICAgICAgc0xpc3QucHVzaChhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpZHggb2Ygc0xpc3QpIHtcclxuICAgICAgICAgICAgbGV0IGEgPSBsaXN0LnNwbGljZShpZHgsIDEpO1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5wdXNoKGFbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGlzdC51bnNoaWZ0KGFbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNjLmxvZyhsaXN0LCBcIi0tLS1faW5pdFJhbmRvbUxldmVsMS0tLS0tLS0tXCIpXHJcbiAgICAgICAgdGhpcy5fZGF0YVBvb2xbQ29uc3RhbnQuU1RfUmFtZG9tTGV2ZWwxXSA9IEpTT04uc3RyaW5naWZ5KGxpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2luaXRSYW5kb21MZXZlbDIoKSB7XHJcbiAgICAgICAgbGV0IG51bSA9IDEyMDtcclxuICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgIHdoaWxlIChudW0rKyA8IDEzMCkge1xyXG4gICAgICAgICAgICBsaXN0LnB1c2gobnVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHNMaXN0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCBsaXN0Lmxlbmd0aCAtIDE7IGErKykge1xyXG4gICAgICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGsgPSBsaXN0W2FdO1xyXG4gICAgICAgICAgICAgICAgbGlzdFthXSA9IGxpc3RbYSArIDFdO1xyXG4gICAgICAgICAgICAgICAgbGlzdFthICsgMV0gPSBrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC42KSB7XHJcbiAgICAgICAgICAgICAgICBzTGlzdC5wdXNoKGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGlkeCBvZiBzTGlzdCkge1xyXG4gICAgICAgICAgICBsZXQgYSA9IGxpc3Quc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goYVswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnVuc2hpZnQoYVswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2MubG9nKGxpc3QsIFwiLS0tLV9pbml0UmFuZG9tTGV2ZWwyLS0tLS0tLS1cIilcclxuICAgICAgICB0aGlzLl9kYXRhUG9vbFtDb25zdGFudC5TVF9SYW1kb21MZXZlbDJdID0gSlNPTi5zdHJpbmdpZnkobGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaW5pdFJhbmRvbUxldmVsMygpIHtcclxuICAgICAgICBsZXQgbnVtID0gMTMwO1xyXG4gICAgICAgIGxldCBsaXN0ID0gW107XHJcbiAgICAgICAgd2hpbGUgKG51bSsrIDwgMTQwKSB7XHJcbiAgICAgICAgICAgIGxpc3QucHVzaChudW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc0xpc3QgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGxpc3QubGVuZ3RoIC0gMTsgYSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC41KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgayA9IGxpc3RbYV07XHJcbiAgICAgICAgICAgICAgICBsaXN0W2FdID0gbGlzdFthICsgMV07XHJcbiAgICAgICAgICAgICAgICBsaXN0W2EgKyAxXSA9IGs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjYpIHtcclxuICAgICAgICAgICAgICAgIHNMaXN0LnB1c2goYSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaWR4IG9mIHNMaXN0KSB7XHJcbiAgICAgICAgICAgIGxldCBhID0gbGlzdC5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcclxuICAgICAgICAgICAgICAgIGxpc3QucHVzaChhWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxpc3QudW5zaGlmdChhWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjYy5sb2cobGlzdCwgXCItLS0tX2luaXRSYW5kb21MZXZlbDMtLS0tLS0tLVwiKVxyXG5cclxuICAgICAgICB0aGlzLl9kYXRhUG9vbFtDb25zdGFudC5TVF9SYW1kb21MZXZlbDNdID0gSlNPTi5zdHJpbmdpZnkobGlzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFJhbWRvbUxldmVsKCkge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLkN1ckxldmVsSWQgPj0gMTQwKSB7XHJcbiAgICAgICAgdGhpcy5DdXJMZXZlbElkIC09IDE0MDtcclxuXHJcbiAgICAgICAgdGhpcy5DdXJMZXZlbElkICU9IDUwO1xyXG4gICAgICAgIC8vIGxldCBudW0gPSB0aGlzLkN1ckxldmVsSWQgJSAxMCArIDE7XHJcbiAgICAgICAgbGV0IG51bTIgPSB0aGlzLkN1ckxldmVsSWQgJSA1ICsgMTtcclxuICAgICAgICBjYy5sb2codGhpcy5DdXJMZXZlbElkLCBudW0yKVxyXG5cclxuICAgICAgICBpZiAobnVtMiA9PSAxIHx8IG51bTIgPT0gMiB8fCBudW0yID09IDMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGV2ZWxOdW0xKClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobnVtMiA9PSA0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldExldmVsTnVtMigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG51bTIgPT0gNSkge1xyXG4gICAgICAgICAgICAvLyBpZiAobnVtID09IDUpIHtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiB0aGlzLmdldExldmVsTnVtMSgpXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gZWxzZSBpZiAobnVtID09IDEwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldExldmVsTnVtMygpXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgZ2V0TGV2ZWxOdW0xKCkge1xyXG4gICAgICAgIGxldCBsaXN0ID0gSlNPTi5wYXJzZSh0aGlzLl9nZXRJdGVtKENvbnN0YW50LlNUX1JhbWRvbUxldmVsMSwgXCJcIikpXHJcbiAgICAgICAgaWYgKGxpc3QpIHtcclxuICAgICAgICAgICAgLy8gY2MubG9nKGxpc3QubGVuZ3RoLCBsaXN0LCBcIi0tLS0tLS1nZXRMZXZlbE51bTEtLS0tLS1saXN0Lmxlbmd0aFwiKVxyXG4gICAgICAgICAgICAvLyBpZiAobGlzdC5sZW5ndGggPD0gMzApIHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuX2luaXRSYW5kb21MZXZlbDEoKVxyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5faW5pdFJhbmRvbUxldmVsMigpXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLl9pbml0UmFuZG9tTGV2ZWwzKClcclxuXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLl9zYXZlKCk7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmdldExldmVsTnVtMSgpO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAvLyBsZXQgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGlzdC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAvLyBsZXQgbnVtID0gbGlzdC5zcGxpY2UoaWR4LCAxKVswXTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLkN1ckxldmVsSWQgLSAxLCBcIi0tLS0tLS0taWR4XCIpXHJcbiAgICAgICAgICAgIC8vIHJldHVybiBsaXN0W3RoaXMuQ3VyTGV2ZWxJZCAtIDJdO1xyXG5cclxuICAgICAgICAgICAgLy8gY2MubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3mmK/lkKbliLfmlrDpmo/mnLrlhbPljaFcIiwgdGhpcy5SZXNldExldmVsLCB0aGlzLk1heFVubG9ja0xldmVsQ291bnQpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLkN1ckxldmVsSWQgPT0gMCAmJiB0aGlzLlJlc2V0TGV2ZWwgIT0gdGhpcy5NYXhVbmxvY2tMZXZlbENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlc2V0TGV2ZWwgPSB0aGlzLk1heFVubG9ja0xldmVsQ291bnQ7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWIt+aWsOmaj+acuuWFs+WNoVwiLCB0aGlzLlJlc2V0TGV2ZWwsIHRoaXMuTWF4VW5sb2NrTGV2ZWxDb3VudClcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRSYW5kb21MZXZlbDEoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5pdFJhbmRvbUxldmVsMigpXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0UmFuZG9tTGV2ZWwzKClcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NhdmUoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldExldmVsTnVtMSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGxpc3RbdGhpcy5DdXJMZXZlbElkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRSYW5kb21MZXZlbDEoKVxyXG4gICAgICAgICAgICB0aGlzLl9pbml0UmFuZG9tTGV2ZWwyKClcclxuICAgICAgICAgICAgdGhpcy5faW5pdFJhbmRvbUxldmVsMygpXHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zYXZlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldExldmVsTnVtMSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGV2ZWxOdW0yKCkge1xyXG4gICAgICAgIGxldCBsaXN0ID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuX2dldEl0ZW0oQ29uc3RhbnQuU1RfUmFtZG9tTGV2ZWwyLCBcIlwiKSkge1xyXG4gICAgICAgICAgICBsaXN0ID0gSlNPTi5wYXJzZSh0aGlzLl9nZXRJdGVtKENvbnN0YW50LlNUX1JhbWRvbUxldmVsMiwgXCJcIikpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmxvZyhsaXN0KTtcclxuXHJcbiAgICAgICAgaWYgKGxpc3QpIHtcclxuICAgICAgICAgICAgY2MubG9nKGxpc3QubGVuZ3RoLCBsaXN0LCBcIi0tLS0tLS1nZXRMZXZlbE51bTItLS0tLS1saXN0Lmxlbmd0aFwiKVxyXG5cclxuICAgICAgICAgICAgLy8gbGV0IGlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxpc3QubGVuZ3RoKTtcclxuICAgICAgICAgICAgLy8gbGV0IG51bSA9IGxpc3Quc3BsaWNlKGlkeCwgMSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgaWR4ID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgYSA9IDA7IGEgPCB0aGlzLkN1ckxldmVsSWQ7IGErKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBudW0gPSBhICUgMTAgKyAxO1xyXG4gICAgICAgICAgICAgICAgbGV0IG51bTIgPSBudW0gJSA1ICsgMTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobnVtMiA9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWR4Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNjLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5piv5ZCm5Yi35paw6ZqP5py65YWz5Y2hXCIsIHRoaXMuUmVzZXRMZXZlbCwgdGhpcy5NYXhVbmxvY2tMZXZlbENvdW50KVxyXG4gICAgICAgICAgICBpZiAoKGlkeCA9PSAwICYmIHRoaXMuUmVzZXRMZXZlbCAhPSB0aGlzLk1heFVubG9ja0xldmVsQ291bnQpIHx8IGxpc3QubGVuZ3RoID4gMTApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuUmVzZXRMZXZlbCA9IHRoaXMuTWF4VW5sb2NrTGV2ZWxDb3VudDtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5Yi35paw6ZqP5py65YWz5Y2hXCIsIHRoaXMuUmVzZXRMZXZlbCwgdGhpcy5NYXhVbmxvY2tMZXZlbENvdW50KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5pdFJhbmRvbUxldmVsMSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0UmFuZG9tTGV2ZWwyKClcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRSYW5kb21MZXZlbDMoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TGV2ZWxOdW0yKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNjLmxvZyhpZHgsIFwiLS0tLS0tLS1pZHhcIilcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBsaXN0W2lkeF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0UmFuZG9tTGV2ZWwxKClcclxuICAgICAgICAgICAgdGhpcy5faW5pdFJhbmRvbUxldmVsMigpXHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRSYW5kb21MZXZlbDMoKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fc2F2ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRMZXZlbE51bTIoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgZ2V0TGV2ZWxOdW0zKCkge1xyXG4gICAgICAgIGxldCBsaXN0ID0gSlNPTi5wYXJzZSh0aGlzLl9nZXRJdGVtKENvbnN0YW50LlNUX1JhbWRvbUxldmVsMywgXCJcIikpXHJcbiAgICAgICAgaWYgKGxpc3QpIHtcclxuXHJcbiAgICAgICAgICAgIGNjLmxvZyhsaXN0Lmxlbmd0aCwgbGlzdCwgXCItLS0tLS0tZ2V0TGV2ZWxOdW0zLS0tLS0tbGlzdC5sZW5ndGhcIilcclxuXHJcbiAgICAgICAgICAgIGxldCBpZHggPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IHRoaXMuQ3VyTGV2ZWxJZCAtIDE7IGErKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IG51bSA9IGEgJSAxMCArIDE7XHJcbiAgICAgICAgICAgICAgICBsZXQgbnVtMiA9IG51bSAlIDUgKyAxO1xyXG4gICAgICAgICAgICAgICAgaWYgKG51bTIgPT0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkeCsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhpZHgsIFwiLS0tLS0tLS1pZHhcIilcclxuICAgICAgICAgICAgLy8gaWYgKGlkeCA9PSA2KSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLl9pbml0UmFuZG9tTGV2ZWwxKClcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuX2luaXRSYW5kb21MZXZlbDIoKVxyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5faW5pdFJhbmRvbUxldmVsMygpXHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLl9zYXZlKCk7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdGhpcy5nZXRMZXZlbE51bTMoKTtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgY2MubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3mmK/lkKbliLfmlrDpmo/mnLrlhbPljaFcIiwgdGhpcy5SZXNldExldmVsLCB0aGlzLk1heFVubG9ja0xldmVsQ291bnQpXHJcbiAgICAgICAgICAgIGlmICgoaWR4ID09IDAgJiYgdGhpcy5SZXNldExldmVsICE9IHRoaXMuTWF4VW5sb2NrTGV2ZWxDb3VudCkgfHwgbGlzdC5sZW5ndGggPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5SZXNldExldmVsID0gdGhpcy5NYXhVbmxvY2tMZXZlbENvdW50O1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS3liLfmlrDpmo/mnLrlhbPljaFcIiwgdGhpcy5SZXNldExldmVsLCB0aGlzLk1heFVubG9ja0xldmVsQ291bnQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0UmFuZG9tTGV2ZWwxKClcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRSYW5kb21MZXZlbDIoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5pdFJhbmRvbUxldmVsMygpXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRMZXZlbE51bTMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbGlzdFtpZHhdO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0UmFuZG9tTGV2ZWwxKClcclxuICAgICAgICAgICAgdGhpcy5faW5pdFJhbmRvbUxldmVsMigpXHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRSYW5kb21MZXZlbDMoKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fc2F2ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRMZXZlbE51bTMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uUmVzZXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX2luaXRSYW5kb21MZXZlbDEoKVxyXG4gICAgICAgIHRoaXMuX2luaXRSYW5kb21MZXZlbDIoKVxyXG4gICAgICAgIHRoaXMuX2luaXRSYW5kb21MZXZlbDMoKVxyXG5cclxuICAgICAgICB0aGlzLl9zYXZlKCk7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKuaLv+maj+acuuWFs+WNoeiKgueCuSAqL1xyXG4gICAgcHVibGljIGdldCBSZXNldExldmVsKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9nZXRJdGVtKENvbnN0YW50LlNUX1Jlc2V0TGV2ZWxJZCwgXCJcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5fZ2V0SXRlbShDb25zdGFudC5TVF9SZXNldExldmVsSWQsIFwiXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFQb29sW0NvbnN0YW50LlNUX1Jlc2V0TGV2ZWxJZF0gPSBcIjBcIjtcclxuICAgICAgICAgICAgdGhpcy5fc2F2ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLl9nZXRJdGVtKENvbnN0YW50LlNUX1Jlc2V0TGV2ZWxJZCwgXCJcIikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKuaLv+maj+acuuWFs+WNoeiKgueCuSAqL1xyXG4gICAgcHVibGljIHNldCBSZXNldExldmVsKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRJdGVtKENvbnN0YW50LlNUX1Jlc2V0TGV2ZWxJZCwgdmFsdWUgKyBcIlwiKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKuaLv+WlluWKseWFs+WNoeaVsOaNriAqL1xyXG4gICAgcHVibGljIGdldCByZXdhcmRUeXBlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9nZXRJdGVtKENvbnN0YW50LlNUX1Jld2FyZFR5cGUsIFwiXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuX2dldEl0ZW0oQ29uc3RhbnQuU1RfUmV3YXJkVHlwZSwgXCJcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZGF0YVBvb2xbQ29uc3RhbnQuU1RfUmV3YXJkVHlwZV0gPSBcIjBcIjtcclxuICAgICAgICAgICAgdGhpcy5fc2F2ZSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLl9nZXRJdGVtKENvbnN0YW50LlNUX1Jld2FyZFR5cGUsIFwiXCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKirlrZjlpZblirHlhbPljaHmlbDmja4gKi9cclxuICAgIHB1YmxpYyBzZXQgcmV3YXJkVHlwZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0SXRlbShDb25zdGFudC5TVF9SZXdhcmRUeXBlLCB2YWx1ZSArIFwiXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKirmi7/ovaznm5jmlbDmja4gKi9cclxuICAgIHB1YmxpYyBnZXQgTG90dGVyeSgpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLl9nZXRJdGVtKENvbnN0YW50LlNUX0xvdHRlcnksIFwiXCIpKTtcclxuICAgIH1cclxuICAgIC8qKuWtmOi9rOebmOaVsOaNriAqL1xyXG4gICAgcHVibGljIHNldCBMb3R0ZXJ5KHZhbHVlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zZXRJdGVtKENvbnN0YW50LlNUX0xvdHRlcnksIHZhbHVlICsgXCJcIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKuaLv+i3s+i/h+WNoeaVsOaNriAqL1xyXG4gICAgcHVibGljIGdldCBTa2luVmVkaW9OdW0oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9kYXRhUG9vbFtDb25zdGFudC5TVF9Ta2luVmVkaW9OdW1dKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFQb29sW0NvbnN0YW50LlNUX1NraW5WZWRpb051bV0gPSBcIjBcIjtcclxuICAgICAgICAgICAgdGhpcy5fc2F2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLl9nZXRJdGVtKENvbnN0YW50LlNUX1NraW5WZWRpb051bSwgXCJcIikpO1xyXG4gICAgfVxyXG4gICAgLyoq5a2Y6Lez6L+H5Y2h5pWw5o2uICovXHJcbiAgICBwdWJsaWMgc2V0IFNraW5WZWRpb051bSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0SXRlbShDb25zdGFudC5TVF9Ta2luVmVkaW9OdW0sIHZhbHVlICsgXCJcIik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgLyoq5ou/54K45by55pWw5o2uICovXHJcbiAgICBwdWJsaWMgZ2V0IEJvb21OdW0oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9kYXRhUG9vbFtDb25zdGFudC5TVF9Cb29tTnVtXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhUG9vbFtDb25zdGFudC5TVF9Cb29tTnVtXSA9IFwiMFwiO1xyXG4gICAgICAgICAgICB0aGlzLl9zYXZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRoaXMuX2dldEl0ZW0oQ29uc3RhbnQuU1RfQm9vbU51bSwgXCJcIikpO1xyXG4gICAgfVxyXG4gICAgLyoq5a2Y54K45by55pWw5o2uICovXHJcbiAgICBwdWJsaWMgc2V0IEJvb21OdW0odmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuX3NldEl0ZW0oQ29uc3RhbnQuU1RfQm9vbU51bSwgdmFsdWUgKyBcIlwiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoq5ou/5peg5bC95YiG5pWw5pWw5o2uICovXHJcbiAgICBwdWJsaWMgZ2V0IGZyYWN0aW9uKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fZGF0YVBvb2xbQ29uc3RhbnQuU1RfR2FtZTJGcmFjdGlvbl0pIHtcclxuICAgICAgICAgICAgdGhpcy5fZGF0YVBvb2xbQ29uc3RhbnQuU1RfR2FtZTJGcmFjdGlvbl0gPSBcIjBcIjtcclxuICAgICAgICAgICAgdGhpcy5fc2F2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLl9nZXRJdGVtKENvbnN0YW50LlNUX0dhbWUyRnJhY3Rpb24sIFwiXCIpKTtcclxuICAgIH1cclxuICAgIC8qKuWtmOaXoOWwveWIhuaVsOaVsOaNriAqL1xyXG4gICAgcHVibGljIHNldCBmcmFjdGlvbih2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5fc2V0SXRlbShDb25zdGFudC5TVF9HYW1lMkZyYWN0aW9uLCB2YWx1ZSArIFwiXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvKirliJ3lp4vljJbmr4/lhbPooajmg4UgKi9cclxuICAgIHByaXZhdGUgX2luaXRGYWNlTnVtKCkge1xyXG4gICAgICAgIGxldCBGYWNlTnVtOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBDb25zdGFudC5DVF9Ub3RhbExldmVsQ291bnQ7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgRmFjZU51bS5wdXNoKDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9kYXRhUG9vbFtDb25zdGFudC5TVF9GYWNlTnVtXSA9IEpTT04uc3RyaW5naWZ5KEZhY2VOdW0pO1xyXG4gICAgfVxyXG4gICAgLyoq5a2Y6KGo5oOF5pWw5o2uICovXHJcbiAgICBwdWJsaWMgc2V0RmFjZU51bShpZDogbnVtYmVyLCBudW06IG51bWJlcikge1xyXG4gICAgICAgIGxldCBGYWNlSW5mb3M6IHN0cmluZyA9IHRoaXMuX2dldEl0ZW0oQ29uc3RhbnQuU1RfRmFjZU51bSwgXCIxXCIpO1xyXG4gICAgICAgIGlmIChGYWNlSW5mb3MpIHtcclxuICAgICAgICAgICAgbGV0IEZhY2VJbmZvQXJyOiBudW1iZXJbXSA9IEpTT04ucGFyc2UoRmFjZUluZm9zKTtcclxuICAgICAgICAgICAgRmFjZUluZm9BcnJbaWRdID0gbnVtO1xyXG4gICAgICAgICAgICB0aGlzLl9zZXRJdGVtKENvbnN0YW50LlNUX0ZhY2VOdW0sIEpTT04uc3RyaW5naWZ5KEZhY2VJbmZvQXJyKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlj5booajmg4XmlbDmja5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEZhY2VJbmZvKGlkOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBGYWNlSW5mb3M6IHN0cmluZyA9IHRoaXMuX2dldEl0ZW0oQ29uc3RhbnQuU1RfRmFjZU51bSwgXCJcIik7XHJcbiAgICAgICAgaWYgKEZhY2VJbmZvcykge1xyXG4gICAgICAgICAgICBsZXQgRmFjZUluZm9BcnI6IG51bWJlcltdID0gSlNPTi5wYXJzZShGYWNlSW5mb3MpO1xyXG4gICAgICAgICAgICByZXR1cm4gRmFjZUluZm9BcnJbaWRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIC8qKuWIneWni+WMluWFs+WNoeaYn+aYn+aVsOmHjyAqL1xyXG4gICAgcHJpdmF0ZSBfaW5pdFN0YXJOdW0oKSB7XHJcbiAgICAgICAgbGV0IFN0YXJOdW06IG51bWJlcltdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDb25zdGFudC5DVF9Ub3RhbExldmVsQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBTdGFyTnVtLnB1c2goMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2RhdGFQb29sW0NvbnN0YW50LlNUX1N0YXJOdW1dID0gSlNPTi5zdHJpbmdpZnkoU3Rhck51bSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0SXNFbmQoYm9vbGVhbjogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuSXNFbmQgPSBib29sZWFuO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldElzRW5kKGJvb2xlYW46IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICAgICAgICAvLyBjYy5sb2codGhpcy5Jc0VuZCwgXCI5OTk5OTk5OTk5OTk4ODg4ODg4ODhcIilcclxuICAgICAgICByZXR1cm4gdGhpcy5Jc0VuZCA9PSBib29sZWFuO1xyXG4gICAgfSAgICAvKirlrZjlhbPljaHmmJ/mmJ/mlbAgKi9cclxuICAgIHB1YmxpYyBzZXRTdGFyTnVtKGlkOiBudW1iZXIsIG51bTogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IFN0YXJJbmZvOiBzdHJpbmcgPSB0aGlzLl9nZXRJdGVtKENvbnN0YW50LlNUX1N0YXJOdW0sIFwiMFwiKTtcclxuICAgICAgICBpZiAoU3RhckluZm8pIHtcclxuICAgICAgICAgICAgbGV0IFN0YXJJbmZvQXJyOiBudW1iZXJbXSA9IEpTT04ucGFyc2UoU3RhckluZm8pO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coU3RhckluZm9BcnIsIFN0YXJJbmZvLCBcIjAwMDAwMDAwMDAwMDAwXCIpXHJcbiAgICAgICAgICAgIFN0YXJJbmZvQXJyW2lkXSA9IG51bTtcclxuICAgICAgICAgICAgdGhpcy5fc2V0SXRlbShDb25zdGFudC5TVF9TdGFyTnVtLCBKU09OLnN0cmluZ2lmeShTdGFySW5mb0FycikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKuWPluWFs+WNoeaYn+aYn+aVsCAqL1xyXG4gICAgcHVibGljIGdldFN0YXJJbmZvKGlkOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBTdGFySW5mbzogc3RyaW5nID0gdGhpcy5fZ2V0SXRlbShDb25zdGFudC5TVF9TdGFyTnVtLCBcIlwiKTtcclxuICAgICAgICAvLyBjYy5sb2coU3RhckluZm8saWQpXHJcbiAgICAgICAgLy8gY2MubG9nKFN0YXJJbmZvKTtcclxuXHJcbiAgICAgICAgaWYgKFN0YXJJbmZvKSB7XHJcbiAgICAgICAgICAgIGxldCBGYWNlSW5mb0FycjogbnVtYmVyW10gPSBKU09OLnBhcnNlKFN0YXJJbmZvKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhGYWNlSW5mb0FycltpZF0pO1xyXG4gICAgICAgICAgICBpZiAoIUZhY2VJbmZvQXJyW2lkXSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IFN0YXJOdW06IG51bWJlcltdID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDgwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBTdGFyTnVtLnB1c2goRmFjZUluZm9BcnJbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGlkOyBpIDwgaWQgKyA0MDA7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIFN0YXJOdW0ucHVzaCgwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEZhY2VJbmZvQXJyID0gU3Rhck51bTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coRmFjZUluZm9BcnIsIEZhY2VJbmZvQXJyW2lkXSxcIiBGYWNlSW5mb0FycltpZF1cIik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kYXRhUG9vbFtDb25zdGFudC5TVF9TdGFyTnVtXSA9IEpTT04uc3RyaW5naWZ5KFN0YXJOdW0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2F2ZSgpXHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gdGhpcy5nZXRTa2luSW5mbyhpZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEZhY2VJbmZvQXJyW2lkXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIEZhY2VJbmZvQXJyW2lkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAqIOWIneWni+WMluWFs+WNoeS/oeaBr1xyXG4gICAgKi9cclxuICAgIHByaXZhdGUgX2luaXRMZXZlbERhdGEoKSB7XHJcbiAgICAgICAgbGV0IGxldmVsaXRlbUFycjogTGV2ZWxpdGVtW10gPSBbXTtcclxuICAgICAgICBsZXQgbGV2ZWxpdGVtOiBMZXZlbGl0ZW0gPSBuZXcgTGV2ZWxpdGVtKGB7XCJJZFwiOlwiJHswfVwiLFwiU3RhdGVcIjpcIiR7MX1cIixcImZyYWN0aW9uXCI6XCIkezB9XCJ9YCk7XHJcbiAgICAgICAgbGV2ZWxpdGVtQXJyLnB1c2gobGV2ZWxpdGVtKTtcclxuXHJcbiAgICAgICAgbGV0IExldmVsSW5mb3M6IHN0cmluZyA9IHRoaXMuX2dldEl0ZW0oQ29uc3RhbnQuU1RfTGV2ZWxJdGVtLCBcIlwiKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMDA7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbiA9IDA7XHJcbiAgICAgICAgICAgIGlmIChMZXZlbEluZm9zW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBuID0gTGV2ZWxJbmZvc1tpXVtcIlN0YXRlXCJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBsZXZlbGl0ZW06IExldmVsaXRlbSA9IG5ldyBMZXZlbGl0ZW0oYHtcIklkXCI6XCIke2l9XCIsXCJTdGF0ZVwiOlwiJHswfVwiLFwiZnJhY3Rpb25cIjpcIiR7MH1cIn1gKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChuKSB7XHJcbiAgICAgICAgICAgICAgICBsZXZlbGl0ZW0gPSBuZXcgTGV2ZWxpdGVtKGB7XCJJZFwiOlwiJHtpfVwiLFwiU3RhdGVcIjpcIiR7bn1cIixcImZyYWN0aW9uXCI6XCIkezB9XCJ9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV2ZWxpdGVtQXJyLnB1c2gobGV2ZWxpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGF0YVBvb2xbQ29uc3RhbnQuU1RfTGV2ZWxJdGVtXSA9IEpTT04uc3RyaW5naWZ5KGxldmVsaXRlbUFycik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDov4flhbPml7bnmoTlhbPljaHop6PplIFcclxuICAgICAqL1xyXG4gICAgcHVibGljIExldmVsVW5Mb2NrKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgTGV2ZWxJbmZvczogc3RyaW5nID0gdGhpcy5fZ2V0SXRlbShDb25zdGFudC5TVF9MZXZlbEl0ZW0sIFwiXCIpO1xyXG4gICAgICAgIGlmIChMZXZlbEluZm9zKSB7XHJcbiAgICAgICAgICAgIGxldCBMZXZlbEluZm9BcnI6IExldmVsaXRlbVtdID0gSlNPTi5wYXJzZShMZXZlbEluZm9zKTtcclxuICAgICAgICAgICAgLy8gY2MubG9nKExldmVsSW5mb0Fyci5sZW5ndGgsIExldmVsSW5mb0FyciwgXCItLS0tLS0tLS0tLS1MZXZlbEluZm9BcnItLS0tLS0tLS0tXCIpXHJcbiAgICAgICAgICAgIC8vIGlmIChpZCA9PSAxMjAgLSAxKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBMZXZlbEluZm9BcnJbaWRdLlN0YXRlID0gMjtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2V0TGV2ZWxJbmZvKGlkLCBMZXZlbEluZm9BcnJbaWRdKTtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBjYy5sb2coTGV2ZWxJbmZvQXJyKVxyXG4gICAgICAgICAgICBpZiAoTGV2ZWxJbmZvQXJyLmxlbmd0aCA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5pdExldmVsRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2F2ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5MZXZlbFVuTG9jayhpZClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhMZXZlbEluZm9BcnJbaWQgKyAxXS5TdGF0ZSwgTGV2ZWxJbmZvQXJyW2lkXS5TdGF0ZSwgXCJMZXZlbEluZm9BcnJbaWRdLlN0YXRlXCIpXHJcbiAgICAgICAgICAgIGlmIChpZCA+PSAwICYmIGlkIDwgTGV2ZWxJbmZvQXJyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKExldmVsSW5mb0FycltpZCArIDFdLlN0YXRlID09IDIgfHwgTGV2ZWxJbmZvQXJyW2lkICsgMV0uU3RhdGUgPT0gMykgey8v5aaC5p6c5ZCO5LiA5Liq5YWz5Y2h5bey6Kej6ZSBXHJcbiAgICAgICAgICAgICAgICAgICAgTGV2ZWxJbmZvQXJyW2lkXS5TdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRMZXZlbEluZm8oaWQsIExldmVsSW5mb0FycltpZF0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChMZXZlbEluZm9BcnJbaWRdLlN0YXRlID09IDIgJiYgTGV2ZWxJbmZvQXJyW2lkICsgMV0uU3RhdGUgPT0gMCkgey8v5aaC5p6c5b2T5YmN5YWz5Y2h5Li65aSx6LSlXHJcbiAgICAgICAgICAgICAgICAgICAgTGV2ZWxJbmZvQXJyW2lkXS5TdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgTGV2ZWxJbmZvQXJyW2lkICsgMV0uU3RhdGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TGV2ZWxJbmZvKGlkLCBMZXZlbEluZm9BcnJbaWRdKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldExldmVsSW5mbyhpZCArIDEsIExldmVsSW5mb0FycltpZCArIDFdKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoTGV2ZWxJbmZvQXJyW2lkXS5TdGF0ZSA9PSAxKSB7Ly/lpoLmnpzlvZPliY3lhbPljaHmnKrlrozmiJBcclxuICAgICAgICAgICAgICAgICAgICBMZXZlbEluZm9BcnJbaWRdLlN0YXRlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICBMZXZlbEluZm9BcnJbaWQgKyAxXS5TdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRMZXZlbEluZm8oaWQsIExldmVsSW5mb0FycltpZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TGV2ZWxJbmZvKGlkICsgMSwgTGV2ZWxJbmZvQXJyW2lkICsgMV0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChMZXZlbEluZm9BcnJbaWRdLlN0YXRlID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICBMZXZlbEluZm9BcnJbaWRdLlN0YXRlID0gMjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldExldmVsSW5mbyhpZCwgTGV2ZWxJbmZvQXJyW2lkXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOi/h+WFs+aXtueahOWksei0peWFs+WNoVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgTGV2ZWxGYWlsZChpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IExldmVsSW5mb3M6IHN0cmluZyA9IHRoaXMuX2dldEl0ZW0oQ29uc3RhbnQuU1RfTGV2ZWxJdGVtLCBcIlwiKTtcclxuICAgICAgICBpZiAoTGV2ZWxJbmZvcykge1xyXG4gICAgICAgICAgICBsZXQgTGV2ZWxJbmZvQXJyOiBMZXZlbGl0ZW1bXSA9IEpTT04ucGFyc2UoTGV2ZWxJbmZvcyk7XHJcbiAgICAgICAgICAgIGlmIChpZCA+PSAwICYmIGlkIDwgTGV2ZWxJbmZvQXJyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKExldmVsSW5mb0FycltpZF0uU3RhdGUgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIExldmVsSW5mb0FycltpZF0uU3RhdGUgPSAzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRMZXZlbEluZm8oaWQsIExldmVsSW5mb0FycltpZF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAqIOi3s+WFs+aXtueahOWFs+WNoeino+mUgVxyXG4gICAgKi9cclxuICAgIHB1YmxpYyBMZXZlbFNraXBMb2NrKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgTGV2ZWxJbmZvczogc3RyaW5nID0gdGhpcy5fZ2V0SXRlbShDb25zdGFudC5TVF9MZXZlbEl0ZW0sIFwiXCIpO1xyXG4gICAgICAgIGlmIChMZXZlbEluZm9zKSB7XHJcbiAgICAgICAgICAgIGxldCBMZXZlbEluZm9BcnI6IExldmVsaXRlbVtdID0gSlNPTi5wYXJzZShMZXZlbEluZm9zKTtcclxuICAgICAgICAgICAgaWYgKGlkID09IENvbnN0YW50LkNUX1RvdGFsTGV2ZWxDb3VudCAtIDEpIHtcclxuICAgICAgICAgICAgICAgIExldmVsSW5mb0FycltpZF0uU3RhdGUgPSAzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRMZXZlbEluZm8oaWQsIExldmVsSW5mb0FycltpZF0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpZCA+PSAwICYmIGlkIDwgTGV2ZWxJbmZvQXJyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKExldmVsSW5mb0FycltpZCArIDFdLlN0YXRlID09IDIgfHwgTGV2ZWxJbmZvQXJyW2lkICsgMV0uU3RhdGUgPT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIExldmVsSW5mb0FycltpZF0uU3RhdGUgPSAzO1xyXG4gICAgICAgICAgICAgICAgTGV2ZWxJbmZvQXJyW2lkICsgMV0uU3RhdGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRMZXZlbEluZm8oaWQsIExldmVsSW5mb0FycltpZF0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRMZXZlbEluZm8oaWQgKyAxLCBMZXZlbEluZm9BcnJbaWQgKyAxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOWtmOWFs+WNoeS/oeaBr1xyXG4gICAgICogQHBhcmFtIGlkIOWFs+WNoUlEXHJcbiAgICAgKiBAcGFyYW0gaW5mbyDlhbPljaHkv6Hmga9cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNldExldmVsSW5mbyhpZDogbnVtYmVyLCBpbmZvOiBMZXZlbGl0ZW0pIHtcclxuICAgICAgICBsZXQgTGV2ZWxJbmZvczogc3RyaW5nID0gdGhpcy5fZ2V0SXRlbShDb25zdGFudC5TVF9MZXZlbEl0ZW0sIFwiXCIpO1xyXG4gICAgICAgIGlmIChMZXZlbEluZm9zKSB7XHJcbiAgICAgICAgICAgIGxldCBMZXZlbEluZm9BcnI6IExldmVsaXRlbVtdID0gSlNPTi5wYXJzZShMZXZlbEluZm9zKTtcclxuICAgICAgICAgICAgaWYgKGlkID49IDAgJiYgaWQgPCBMZXZlbEluZm9BcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBMZXZlbEluZm9BcnJbaWRdID0gaW5mbztcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NldEl0ZW0oQ29uc3RhbnQuU1RfTGV2ZWxJdGVtLCBKU09OLnN0cmluZ2lmeShMZXZlbEluZm9BcnIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAgICAgLy8gICAgIGZvciAobGV0IGkgPSBpZDsgaSA8IENvbnN0YW50LkNUX1RvdGFsTGV2ZWxDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbGV0IGxldmVsaXRlbTogTGV2ZWxpdGVtID0gbmV3IExldmVsaXRlbShge1wiSWRcIjpcIiR7aX1cIixcIlN0YXRlXCI6XCIkezB9XCIsXCJmcmFjdGlvblwiOlwiJHswfVwifWApO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIExldmVsSW5mb0Fyci5wdXNoKGxldmVsaXRlbSk7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgTGV2ZWxJbmZvQXJyW2lkXSA9IGluZm87XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLl9zZXRJdGVtKENvbnN0YW50LlNUX0xldmVsSXRlbSwgSlNPTi5zdHJpbmdpZnkoTGV2ZWxJbmZvQXJyKSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDlj5blhbPljaHkv6Hmga9cclxuICAgICAqIEBwYXJhbSBpZCDlhbPljaFJRFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0TGV2ZWxJbmZvKGlkOiBudW1iZXIpOiBMZXZlbGl0ZW0ge1xyXG4gICAgICAgIGxldCBMZXZlbEluZm9zOiBzdHJpbmcgPSB0aGlzLl9nZXRJdGVtKENvbnN0YW50LlNUX0xldmVsSXRlbSwgXCJcIik7XHJcbiAgICAgICAgaWYgKExldmVsSW5mb3MpIHtcclxuICAgICAgICAgICAgbGV0IExldmVsSW5mb0FycjogTGV2ZWxpdGVtW10gPSBKU09OLnBhcnNlKExldmVsSW5mb3MpO1xyXG4gICAgICAgICAgICBpZiAoTGV2ZWxJbmZvQXJyLmxlbmd0aCA8IDMwMCkge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwi5YWz5Y2h5LiN5a2Y5Zyo77yM5Yib5bu65LiA57uE5pWw5o2uIVwiKVxyXG4gICAgICAgICAgICAgICAgY2MubG9nKExldmVsSW5mb0FyciwgXCItLS0tLS0tZ2V0TGV2ZWxJbmZvLS0tLS0tXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbml0TGV2ZWxEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zYXZlKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRMZXZlbEluZm8oaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpZCA+PSAwICYmIGlkIDwgTGV2ZWxJbmZvQXJyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIExldmVsSW5mb0FycltpZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbGV0IGxldmVsaXRlbUFycjogTGV2ZWxpdGVtW10gPSBbXTtcclxuICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBMZXZlbEluZm9BcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gICAgIGxldCBpbmZvID0gdGhpcy5nZXRMZXZlbEluZm8oaSk7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgaWQgPSBpbmZvLklkO1xyXG4gICAgICAgICAgICAvLyAgICAgbGV0IFN0YXRlID0gaW5mby5TdGF0ZTtcclxuICAgICAgICAgICAgLy8gICAgIGxldCBmcmFjdGlvbiA9IGluZm8uZnJhY3Rpb247XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgbGV2ZWxpdGVtOiBMZXZlbGl0ZW0gPSBuZXcgTGV2ZWxpdGVtKGB7XCJJZFwiOlwiJHtpZH1cIixcIlN0YXRlXCI6XCIke1N0YXRlfVwiLFwiZnJhY3Rpb25cIjpcIiR7ZnJhY3Rpb259XCJ9YCk7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXZlbGl0ZW1BcnIucHVzaChsZXZlbGl0ZW0pO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSA4MDsgaSA8IENvbnN0YW50LkNUX1RvdGFsTGV2ZWxDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgbGV2ZWxpdGVtOiBMZXZlbGl0ZW0gPSBuZXcgTGV2ZWxpdGVtKGB7XCJJZFwiOlwiJHtpfVwiLFwiU3RhdGVcIjpcIiR7MH1cIixcImZyYWN0aW9uXCI6XCIkezB9XCJ9YCk7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXZlbGl0ZW1BcnIucHVzaChsZXZlbGl0ZW0pO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIHRoaXMuX2RhdGFQb29sW0NvbnN0YW50LlNUX0xldmVsSXRlbV0gPSBKU09OLnN0cmluZ2lmeShsZXZlbGl0ZW1BcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAvLyAgICAgY2MubG9nKFwi5YWz5Y2h5LiN5a2Y5Zyo77yM5Yib5bu65LiA57uE5pWw5o2uIVwiKVxyXG5cclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIC8qKuWIneWni+WMluearuiCpCAqL1xyXG4gICAgcHJpdmF0ZSBfaW5pdFNraW5EYXRhKCkge1xyXG4gICAgICAgIGxldCBwcmljZTogbnVtYmVyW10gPSBbODAwLCAxMjAwLCAyMDAwLCAzNTAwLCA1MDAwLCA4MDAwXTtcclxuICAgICAgICBsZXQgc2tpbkluZm9BcnI6IFNraW5JbmZvW10gPSBbXTtcclxuICAgICAgICBsZXQgc2tpbkluZm86IFNraW5JbmZvID0gbmV3IFNraW5JbmZvKGB7XCJJZFwiOlwiJHswfVwiLFwiU3RhdGVcIjpcIjJcIixcIlByaWNlXCI6XCIke3ByaWNlWzBdfVwifWApO1xyXG4gICAgICAgIHNraW5JbmZvQXJyLnB1c2goc2tpbkluZm8pO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcHJpY2UubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHNraW5JbmZvOiBTa2luSW5mbyA9IG5ldyBTa2luSW5mbyhge1wiSWRcIjpcIiR7aX1cIixcIlN0YXRlXCI6XCIwXCIsXCJQcmljZVwiOlwiJHtwcmljZVtpXX1cIn1gKTtcclxuICAgICAgICAgICAgc2tpbkluZm9BcnIucHVzaChza2luSW5mbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNjLmxvZyhcIuWIneWni+WMluearuiCpOaVsOaNru+8mlwiLCBKU09OLnN0cmluZ2lmeShza2luSW5mb0FycikpO1xyXG4gICAgICAgIHRoaXMuX2RhdGFQb29sW0NvbnN0YW50LlNUX1NraW5JbmZvXSA9IEpTT04uc3RyaW5naWZ5KHNraW5JbmZvQXJyKTtcclxuXHJcblxyXG4gICAgICAgIGxldCBwcmljZTI6IG51bWJlcltdID0gWzUwMCwgMTAwMCwgMTUwMCwgMjUwMCwgNDAwMCwgNjAwMCwgOTAwMF07XHJcbiAgICAgICAgbGV0IHNraW5JbmZvQXJyMjogU2tpbkluZm9bXSA9IFtdO1xyXG4gICAgICAgIGxldCBza2luSW5mbzI6IFNraW5JbmZvID0gbmV3IFNraW5JbmZvKGB7XCJJZFwiOlwiJHswfVwiLFwiU3RhdGVcIjpcIjJcIixcIlByaWNlXCI6XCIke3ByaWNlMlswXX1cIn1gKTtcclxuICAgICAgICBza2luSW5mb0FycjIucHVzaChza2luSW5mbzIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcHJpY2UyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBza2luSW5mbzI6IFNraW5JbmZvID0gbmV3IFNraW5JbmZvKGB7XCJJZFwiOlwiJHtpfVwiLFwiU3RhdGVcIjpcIjBcIixcIlByaWNlXCI6XCIke3ByaWNlMltpXX1cIn1gKTtcclxuICAgICAgICAgICAgc2tpbkluZm9BcnIyLnB1c2goc2tpbkluZm8yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY2MubG9nKFwi5Yid5aeL5YyW55qu6IKk5pWw5o2u77yaXCIsIEpTT04uc3RyaW5naWZ5KHNraW5JbmZvQXJyKSk7XHJcbiAgICAgICAgdGhpcy5fZGF0YVBvb2xbQ29uc3RhbnQuU1RfQmFsbGJvblNraW5JbmZvXSA9IEpTT04uc3RyaW5naWZ5KHNraW5JbmZvQXJyMik7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKirliJ3lp4vljJblupfpk7rkv6Hmga8gKi9cclxuICAgIHByaXZhdGUgX2luaXRTalNob3BEYXRhKCkge1xyXG4gICAgICAgIGxldCBkYXRhOiBhbnkgPSB7IFwic2hvcFwiOiAxLCBcInpodW96aVwiOiBbMSwgMSwgMSwgMSxdIH07XHJcbiAgICAgICAgdGhpcy5fZGF0YVBvb2xbQ29uc3RhbnQuU2pTaG9wXSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgIC8vIGNjLmxvZyh0aGlzLl9kYXRhUG9vbFtDb25zdGFudC5TalNob3BdLCBcIjk5OTk5OTk5OTk5OTk5XCIpXHJcbiAgICB9XHJcbiAgICAvKirlrZjmnIDlkI7kuIDmrKHnrb7liLDnmoTml7bpl7QgKi9cclxuICAgIHB1YmxpYyBzZXQgTGFzdEJvbnVzVGltZSh2YWx1ZTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX3NldEl0ZW0oQ29uc3RhbnQuTGFzdERhaWx5Qm9udXNUaW1lLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoq5Y+W5pyA5ZCO5LiA5qyh562+5Yiw55qE5pe26Ze0ICovXHJcbiAgICBwdWJsaWMgZ2V0IExhc3RCb251c1RpbWUoKSB7XHJcbiAgICAgICAgbGV0IHJldCA9IHRoaXMuX2dldEl0ZW0oQ29uc3RhbnQuTGFzdERhaWx5Qm9udXNUaW1lLCBcIjBcIik7XHJcbiAgICAgICAgaWYgKCFyZXQpIHtcclxuICAgICAgICAgICAgcmV0ID0gXCIwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKirlrZjml6DlsL3mqKHlvI/mmK/lkKbmlrDmiYsgKi9cclxuICAgIHB1YmxpYyBzZXQgaXNOb3ZpY2UodmFsdWU6IHN0cmluZykge1xyXG5cclxuICAgICAgICB0aGlzLl9zZXRJdGVtKENvbnN0YW50LlNUX0lzR2FtZTJOb3ZpY2UsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKirlj5bml6DlsL3mqKHlvI/mmK/lkKbmlrDmiYsgKi9cclxuICAgIHB1YmxpYyBnZXQgaXNOb3ZpY2UoKSB7XHJcbiAgICAgICAgbGV0IHJldCA9IHRoaXMuX2dldEl0ZW0oQ29uc3RhbnQuU1RfSXNHYW1lMk5vdmljZSwgXCIwXCIpO1xyXG4gICAgICAgIGlmICghcmV0KSB7XHJcbiAgICAgICAgICAgIHJldCA9IFwiMFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoq5a2Y5pyA5ZCO5aWW5Yqx55qE5aSp5pWwICovXHJcbiAgICBwdWJsaWMgc2V0IExhc3RCb251c0luZGV4KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZXRJdGVtKENvbnN0YW50Lkxhc3REYWlseUJvbnVzSW5kZXgsIHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKirlj5bmnIDlkI7lpZblirHnmoTlpKnmlbAgKi9cclxuICAgIHB1YmxpYyBnZXQgTGFzdEJvbnVzSW5kZXgoKSB7XHJcbiAgICAgICAgbGV0IHJldCA9IHRoaXMuX2dldEl0ZW0oQ29uc3RhbnQuTGFzdERhaWx5Qm9udXNJbmRleCwgXCIwXCIpO1xyXG4gICAgICAgIGlmICghcmV0KSB7XHJcbiAgICAgICAgICAgIHJldCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJzZUludChyZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKuaLv+mHkeW4geaVsOaNriAqL1xyXG4gICAgcHVibGljIGdldCBDb2luQ291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuX2dldEl0ZW0oQ29uc3RhbnQuU1RfQ29pbkNvdW50LCBcIjBcIikpO1xyXG4gICAgfVxyXG4gICAgLyoq5a2Y6YeR5biB5pWw5o2uICovXHJcbiAgICBwdWJsaWMgc2V0IENvaW5Db3VudCh2YWx1ZTogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX3NldEl0ZW0oQ29uc3RhbnQuU1RfQ29pbkNvdW50LCB2YWx1ZSArIFwiXCIpO1xyXG4gICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX1VQREFURV9DT0lOKTtcclxuICAgICAgICAvLyBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9HQU1FX0xPR0lDLCB7IHR5cGU6IENvbnN0YW50LkVfU1RBUl9DSEFOR0UgfSk7XHJcbiAgICB9XHJcbiAgICAvKirmi7/lupfpk7rmlbDmja4gKi9cclxuICAgIHB1YmxpYyBnZXQgU2pTaG9wKCkge1xyXG5cclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLl9nZXRJdGVtKENvbnN0YW50LlNqU2hvcCwgXCJcIikpO1xyXG4gICAgfVxyXG4gICAgLyoq5a2Y5bqX6ZO65pWw5o2uICovXHJcbiAgICBwdWJsaWMgc2V0IFNqU2hvcCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0SXRlbShDb25zdGFudC5TalNob3AsIHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKirmi7/mnIDlpKflhbPljaHmlbDmlbDmja4gKi9cclxuICAgIHB1YmxpYyBnZXQgTWF4TGV2ZWxJZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZ2V0SXRlbShDb25zdGFudC5TVF9NYXhMZXZlbElkLCBcIlwiKSkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodGhpcy5fZ2V0SXRlbShDb25zdGFudC5TVF9NYXhMZXZlbElkLCBcIlwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhUG9vbFtDb25zdGFudC5TVF9NYXhMZXZlbElkXSA9IFwiXCIgKyB0aGlzLkN1ckxldmVsSWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX3NldEl0ZW0oQ29uc3RhbnQuU1RfTWF4TGV2ZWxJZCwgdGhpcy5DdXJMZXZlbElkLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0aGlzLl9nZXRJdGVtKENvbnN0YW50LlNUX01heExldmVsSWQsIFwiXCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKirlrZjmnIDlpKflhbPljaHmlbDmja4gKi9cclxuICAgIHB1YmxpYyBzZXQgTWF4TGV2ZWxJZCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0SXRlbShDb25zdGFudC5TVF9NYXhMZXZlbElkLCB2YWx1ZS50b1N0cmluZygpKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXQgQ3VyTGV2ZWxJZCgpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5fZ2V0SXRlbShDb25zdGFudC5TVF9DdXJMZXZlbElkLCBcIjBcIikpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBDdXJMZXZlbElkKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBpZiAodmFsdWUgPj0gMTE5KSB7XHJcbiAgICAgICAgLy8gICAgIHZhbHVlID0gMTE5Oy8vLTFcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgY2MubG9nKHRoaXMuTWF4TGV2ZWxJZCwgdmFsdWUsIFwiLS0tLS0tLS0tLXRoaXMuTWF4TGV2ZWxJZCwgdmFsdWUtLS0tLS1cIilcclxuICAgICAgICBpZiAodGhpcy5NYXhMZXZlbElkIDwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5NYXhMZXZlbElkID0gdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fc2V0SXRlbShDb25zdGFudC5TVF9DdXJMZXZlbElkLCB2YWx1ZSArIFwiXCIpO1xyXG4gICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX0dBTUVfTE9HSUMsIHsgdHlwZTogQ29uc3RhbnQuU1RfQ3VyTGV2ZWxJZCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IE1heFVubG9ja0xldmVsQ291bnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuX2dldEl0ZW0oQ29uc3RhbnQuU1RfTWF4VW5sb2NrTGV2ZWxDb3VudCwgXCIxXCIpKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgTWF4VW5sb2NrTGV2ZWxDb3VudCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc2V0SXRlbShDb25zdGFudC5TVF9NYXhVbmxvY2tMZXZlbENvdW50LCB2YWx1ZSArIFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgQXVkaW9PbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0SXRlbShDb25zdGFudC5TVF9BdWRpb09uLCBcIjFcIikgPT0gXCIxXCI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IEF1ZGlvT24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRJdGVtKENvbnN0YW50LlNUX0F1ZGlvT24sIHZhbHVlID8gXCIxXCIgOiBcIjBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBBdWRpb0VmZmVjdE9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXRJdGVtKENvbnN0YW50LlNUX0F1ZGlvRWZmZWN0T24sIFwiMVwiKSA9PSBcIjFcIjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgQXVkaW9FZmZlY3RPbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX3NldEl0ZW0oQ29uc3RhbnQuU1RfQXVkaW9FZmZlY3RPbiwgdmFsdWUgPyBcIjFcIiA6IFwiMFwiKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgU2hvY2tPbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0SXRlbShDb25zdGFudC5TVF9TaG9ja09uLCBcIjFcIikgPT0gXCIxXCI7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IFNob2NrT24odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9zZXRJdGVtKENvbnN0YW50LlNUX1Nob2NrT24sIHZhbHVlID8gXCIxXCIgOiBcIjBcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBDdXJTa2luSWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuX2dldEl0ZW0oQ29uc3RhbnQuU1RfQ3VyU2tpbklkLCBcIjBcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgQ3VyU2tpbklkKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT0gdGhpcy5DdXJTa2luSWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHByZUlkOiBudW1iZXIgPSB0aGlzLkN1clNraW5JZDtcclxuICAgICAgICBsZXQgc2tpbkluZm86IFNraW5JbmZvID0gdGhpcy5nZXRTa2luSW5mbyhwcmVJZCk7XHJcbiAgICAgICAgaWYgKHNraW5JbmZvKSB7XHJcbiAgICAgICAgICAgIHNraW5JbmZvLlN0YXRlID0gMTtcclxuICAgICAgICAgICAgdGhpcy5zZXRTa2luSW5mbyhwcmVJZCwgc2tpbkluZm8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGN1clNraW5JbmZvOiBTa2luSW5mbyA9IHRoaXMuZ2V0U2tpbkluZm8odmFsdWUpO1xyXG4gICAgICAgIGlmIChjdXJTa2luSW5mbykge1xyXG4gICAgICAgICAgICBjdXJTa2luSW5mby5TdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2tpbkluZm8odmFsdWUsIGN1clNraW5JbmZvKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX3NldEl0ZW0oQ29uc3RhbnQuU1RfQ3VyU2tpbklkLCB2YWx1ZSArIFwiXCIpO1xyXG4gICAgICAgIC8vY2MuZ2FtZS5lbWl0KENvbnN0YW50LkVfR0FNRV9MT0dJQywgeyB0eXBlOiBDb25zdGFudC5FX1NFTEVDVF9TS0lOLCBza2luSWQ6IHZhbHVlIH0pO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLy8g5Y+W5Lq654mp55qu6IKk5L+h5oGvXHJcbiAgICBwdWJsaWMgZ2V0U2tpbkluZm8oaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBza2luSW5mb3M6IHN0cmluZyA9IHRoaXMuX2dldEl0ZW0oQ29uc3RhbnQuU1RfU2tpbkluZm8sIFwiXCIpO1xyXG4gICAgICAgIC8vIGNjLmxvZyhza2luSW5mb3MpO1xyXG5cclxuICAgICAgICBpZiAoc2tpbkluZm9zKSB7XHJcbiAgICAgICAgICAgIGxldCBza2luSW5mb0FycjogU2tpbkluZm9bXSA9IEpTT04ucGFyc2Uoc2tpbkluZm9zKTtcclxuICAgICAgICAgICAgaWYgKGlkID49IDAgJiYgaWQgPCBza2luSW5mb0Fyci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBza2luSW5mb0FycltpZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0U2tpbkRhdGEoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U2tpbkluZm8oaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIOWtmOS6uueJqeearuiCpOS/oeaBr1xyXG4gICAgcHVibGljIHNldFNraW5JbmZvKGlkOiBudW1iZXIsIGluZm86IFNraW5JbmZvKSB7XHJcbiAgICAgICAgbGV0IHNraW5JbmZvczogc3RyaW5nID0gdGhpcy5fZ2V0SXRlbShDb25zdGFudC5TVF9Ta2luSW5mbywgXCJcIik7XHJcbiAgICAgICAgaWYgKHNraW5JbmZvcykge1xyXG4gICAgICAgICAgICBsZXQgc2tpbkluZm9BcnI6IFNraW5JbmZvW10gPSBKU09OLnBhcnNlKHNraW5JbmZvcyk7XHJcbiAgICAgICAgICAgIGlmIChpZCA+PSAwICYmIGlkIDwgc2tpbkluZm9BcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBza2luSW5mb0FycltpZF0gPSBpbmZvO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2V0SXRlbShDb25zdGFudC5TVF9Ta2luSW5mbywgSlNPTi5zdHJpbmdpZnkoc2tpbkluZm9BcnIpKTtcclxuICAgICAgICAgICAgICAgIC8vY2MuZ2FtZS5lbWl0KENvbnN0YW50LkVfR0FNRV9MT0dJQywgeyB0eXBlOiBDb25zdGFudC5FX1NLSU5fU1RBVEVfQ0hBTkdFLCBza2luSWQ6IGlkIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoq5rCU55CD55qu6IKkaWQgKi9cclxuICAgIHB1YmxpYyBnZXQgQ3VyQmFsbGJvblNraW5JZCgpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5fZ2V0SXRlbShDb25zdGFudC5TVF9DdXJCYWxsYm9uU2tpbklkLCBcIjBcIikpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgQ3VyQmFsbGJvblNraW5JZCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09IHRoaXMuQ3VyQmFsbGJvblNraW5JZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy5sb2codmFsdWUsIFwiLS0tLS0tLUN1ckJhbGxib25Ta2luSWQtLS1cIilcclxuICAgICAgICBsZXQgcHJlSWQ6IG51bWJlciA9IHRoaXMuQ3VyQmFsbGJvblNraW5JZDtcclxuICAgICAgICBsZXQgc2tpbkluZm86IFNraW5JbmZvID0gdGhpcy5nZXRCYWxsYm9uU2tpbkluZm8ocHJlSWQpO1xyXG4gICAgICAgIGlmIChza2luSW5mbykge1xyXG4gICAgICAgICAgICBza2luSW5mby5TdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QmFsbGJvblNraW5JbmZvKHByZUlkLCBza2luSW5mbyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY3VyU2tpbkluZm86IFNraW5JbmZvID0gdGhpcy5nZXRCYWxsYm9uU2tpbkluZm8odmFsdWUpO1xyXG4gICAgICAgIGlmIChjdXJTa2luSW5mbykge1xyXG4gICAgICAgICAgICBjdXJTa2luSW5mby5TdGF0ZSA9IDI7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QmFsbGJvblNraW5JbmZvKHZhbHVlLCBjdXJTa2luSW5mbyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9zZXRJdGVtKENvbnN0YW50LlNUX0N1ckJhbGxib25Ta2luSWQsIHZhbHVlICsgXCJcIik7XHJcbiAgICAgICAgLy9jYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9HQU1FX0xPR0lDLCB7IHR5cGU6IENvbnN0YW50LkVfU0VMRUNUX1NLSU4sIHNraW5JZDogdmFsdWUgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvLyDlj5bmsJTnkIPnmq7ogqTkv6Hmga9cclxuICAgIHB1YmxpYyBnZXRCYWxsYm9uU2tpbkluZm8oaWQ6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBza2luSW5mb3M6IHN0cmluZyA9IHRoaXMuX2dldEl0ZW0oQ29uc3RhbnQuU1RfQmFsbGJvblNraW5JbmZvLCBcIlwiKTtcclxuICAgICAgICAvLyBjYy5sb2coc2tpbkluZm9zKTtcclxuXHJcbiAgICAgICAgaWYgKHNraW5JbmZvcykge1xyXG4gICAgICAgICAgICBsZXQgc2tpbkluZm9BcnI6IFNraW5JbmZvW10gPSBKU09OLnBhcnNlKHNraW5JbmZvcyk7XHJcbiAgICAgICAgICAgIGlmIChpZCA+PSAwICYmIGlkIDwgc2tpbkluZm9BcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2tpbkluZm9BcnJbaWRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5faW5pdFNraW5EYXRhKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFNraW5JbmZvKGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyDlrZjmsJTnkIPnmq7ogqTkv6Hmga9cclxuICAgIHB1YmxpYyBzZXRCYWxsYm9uU2tpbkluZm8oaWQ6IG51bWJlciwgaW5mbzogU2tpbkluZm8pIHtcclxuICAgICAgICBsZXQgc2tpbkluZm9zOiBzdHJpbmcgPSB0aGlzLl9nZXRJdGVtKENvbnN0YW50LlNUX0JhbGxib25Ta2luSW5mbywgXCJcIik7XHJcbiAgICAgICAgaWYgKHNraW5JbmZvcykge1xyXG4gICAgICAgICAgICBsZXQgc2tpbkluZm9BcnI6IFNraW5JbmZvW10gPSBKU09OLnBhcnNlKHNraW5JbmZvcyk7XHJcbiAgICAgICAgICAgIGNjLmxvZyhpbmZvLCBza2luSW5mb0FyciwgXCJzZXRCYWxsYm9uU2tpbkluZm9cIilcclxuICAgICAgICAgICAgaWYgKGlkID49IDAgJiYgaWQgPCBza2luSW5mb0Fyci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHNraW5JbmZvQXJyW2lkXSA9IGluZm87XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZXRJdGVtKENvbnN0YW50LlNUX0JhbGxib25Ta2luSW5mbywgSlNPTi5zdHJpbmdpZnkoc2tpbkluZm9BcnIpKTtcclxuICAgICAgICAgICAgICAgIC8vY2MuZ2FtZS5lbWl0KENvbnN0YW50LkVfR0FNRV9MT0dJQywgeyB0eXBlOiBDb25zdGFudC5FX1NLSU5fU1RBVEVfQ0hBTkdFLCBza2luSWQ6IGlkIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqP5py66I635Y+W5LiA5Liq5pyq6Kej6ZSB55qE5Lq654mp55qu6IKkaWRcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldFJhbmRvbUxvY2tTa2luKCkge1xyXG4gICAgICAgIGxldCBpZHM6IG51bWJlcltdID0gW107XHJcbiAgICAgICAgbGV0IHNraW5JbmZvczogc3RyaW5nID0gdGhpcy5fZ2V0SXRlbShDb25zdGFudC5TVF9Ta2luSW5mbywgXCJcIik7XHJcbiAgICAgICAgaWYgKHNraW5JbmZvcykge1xyXG4gICAgICAgICAgICBsZXQgc2tpbkluZm9BcnI6IFNraW5JbmZvW10gPSBKU09OLnBhcnNlKHNraW5JbmZvcyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2tpbkluZm9BcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChza2luSW5mb0FycltpXS5TdGF0ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRzLnB1c2goc2tpbkluZm9BcnJbaV0uSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlkeDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGlkcy5sZW5ndGgpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpZHNbaWR4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHNraW5JbmZvQXJyLmxlbmd0aCAtIDEpKSArIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOmaj+acuuiOt+WPluS4gOS4quacquino+mUgeeahOawlOeQg+earuiCpGlkXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRSYW5kb21Mb2NrQmFsbG9vblNraW4oKSB7XHJcbiAgICAgICAgbGV0IGlkczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBsZXQgc2tpbkluZm9zOiBzdHJpbmcgPSB0aGlzLl9nZXRJdGVtKENvbnN0YW50LlNUX0JhbGxib25Ta2luSW5mbywgXCJcIik7XHJcbiAgICAgICAgaWYgKHNraW5JbmZvcykge1xyXG4gICAgICAgICAgICBsZXQgc2tpbkluZm9BcnI6IFNraW5JbmZvW10gPSBKU09OLnBhcnNlKHNraW5JbmZvcyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2tpbkluZm9BcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChza2luSW5mb0FycltpXS5TdGF0ZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRzLnB1c2goc2tpbkluZm9BcnJbaV0uSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlkeDogbnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGlkcy5sZW5ndGgpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpZHNbaWR4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHNraW5JbmZvQXJyLmxlbmd0aCAtIDEpKSArIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgX2dldEl0ZW0oa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RhdGFQb29sW2tleV0pIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5fZGF0YVBvb2xba2V5XT17fTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGFQb29sW2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2RhdGFQb29sW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9zYXZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2F2ZSgpIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnQuU1RfR2FtZURhdGEsIEpTT04uc3RyaW5naWZ5KHRoaXMuX2RhdGFQb29sKSk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iXX0=