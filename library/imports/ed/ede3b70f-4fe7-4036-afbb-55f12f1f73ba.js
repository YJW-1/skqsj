"use strict";
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