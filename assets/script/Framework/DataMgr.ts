import { cocosz } from "./CocosZ";
import Constant, { SkinInfo, Levelitem } from "./Constant";


const { ccclass, property } = cc._decorator;

@ccclass
export default class DataMgr {

    private static _inst: DataMgr;
    public static get inst(): DataMgr {
        if (!DataMgr._inst) {
            DataMgr._inst = new DataMgr();
            DataMgr._inst._init();
        }
        return DataMgr._inst;
    }
    public IsEnd: boolean = null;

    private _dataPool: any = {};

    private _init() {
        // cc.sys.localStorage.clear();

        if (cc.sys.localStorage.getItem(Constant.ST_GameData)) {
            this._dataPool = JSON.parse(cc.sys.localStorage.getItem(Constant.ST_GameData));
        } else {
            // 第一次进入游戏
            // cc.log("第一次进入游戏----------")
            this._dataPool[Constant.ST_MaxUnlockLevelCount] = "0";
            this._dataPool[Constant.ST_CurLevelId] = "0";
            this._dataPool[Constant.ST_MaxLevelId] = "0";
            this._dataPool[Constant.ST_ResetLevelId] = "0";
            this._dataPool[Constant.ST_Game2Fraction] = "0";

            this._dataPool[Constant.ST_IsGame2Novice] = "0";


            this._dataPool[Constant.ST_AudioOn] = "1";
            this._dataPool[Constant.ST_AudioEffectOn] = "1";
            this._dataPool[Constant.ST_ShockOn] = "1";
            // 初始金币
            this._dataPool[Constant.ST_CoinCount] = "0";
            // 初始奖励关卡
            this._dataPool[Constant.ST_RewardType] = "0";
            // 初始奖励关卡
            this._dataPool[Constant.ST_Game2LevelList] = [];

            //跳过卡数量
            this._dataPool[Constant.ST_SkinVedioNum] = "0";
            //炸弹数量
            this._dataPool[Constant.ST_BoomNum] = "3";

            this._dataPool[Constant.ST_CurSkinId] = "0";

            this._dataPool[Constant.ST_CurBallbonSkinId] = "0";

            this._dataPool[Constant.LastDailyBonusIndex] = "0";

            let curDate = new Date();

            this._dataPool[Constant.LastDailyBonusTime] = curDate.toDateString();
            this._dataPool[Constant.SjShop] = "0";

            this._dataPool[Constant.ST_Lottery] = "1";

            this._initStarNum();
            this._initSkinData();
            this._initLevelData();
            this._initFaceNum();
            this._initSjShopData();

            this._initRandomLevel1()
            this._initRandomLevel2()
            this._initRandomLevel3()


            this._initGame2LevelList()

            this._save();
        }
    }


    public _initGame2LevelList() {
        let list = [3, 12, 18, 19, 8, 11];
        this._dataPool[Constant.ST_Game2LevelList] = JSON.stringify(list);

    }

    get Game2LevelList() {
        cc.log(this._getItem(Constant.ST_Game2LevelList, ""))
        if (!this._getItem(Constant.ST_Game2LevelList, "")) {
            this._initGame2LevelList();
            this._save()
            return this.Game2LevelList;
        }

        let list = JSON.parse(this._getItem(Constant.ST_Game2LevelList, ""));

        if (list.length > 0) {
            cc.log("---------------拿无尽关卡数据");
            let a = list.shift();
            this._dataPool[Constant.ST_Game2LevelList] = JSON.stringify(list);
            this._save();
            return a;
        }
        else {
            cc.log("---------------重新随机无尽关卡数据");
            let c = [];
            let b = 0;
            while (b++ < 20) {
                c.push(b);
            }
            c.sort((a, b) => { return Math.random() - 0.5 });
            let a = c.shift();

            this._dataPool[Constant.ST_Game2LevelList] = JSON.stringify(c);

            this._save();
            return a;

        }
    }




    private _initRandomLevel1() {
        let num = 20;
        let list = [];
        while (num++ < 110) {
            list.push(num);
        }
        let sList = [];
        for (let a = 0; a < list.length - 1; a++) {
            if (Math.random() > 0.5) {
                let k = list[a];
                list[a] = list[a + 1];
                list[a + 1] = k;
            }
            if (Math.random() > 0.6) {
                sList.push(a);
            }
        }
        for (let idx of sList) {
            let a = list.splice(idx, 1);
            if (Math.random() > 0.5) {
                list.push(a[0]);
            }
            else {
                list.unshift(a[0]);
            }
        }
        // cc.log(list, "----_initRandomLevel1--------")
        this._dataPool[Constant.ST_RamdomLevel1] = JSON.stringify(list);
    }

    private _initRandomLevel2() {
        let num = 120;
        let list = [];
        while (num++ < 130) {
            list.push(num);
        }
        let sList = [];
        for (let a = 0; a < list.length - 1; a++) {
            if (Math.random() > 0.5) {
                let k = list[a];
                list[a] = list[a + 1];
                list[a + 1] = k;
            }
            if (Math.random() > 0.6) {
                sList.push(a);
            }
        }
        for (let idx of sList) {
            let a = list.splice(idx, 1);
            if (Math.random() > 0.5) {
                list.push(a[0]);
            }
            else {
                list.unshift(a[0]);
            }
        }
        // cc.log(list, "----_initRandomLevel2--------")
        this._dataPool[Constant.ST_RamdomLevel2] = JSON.stringify(list);
    }

    private _initRandomLevel3() {
        let num = 130;
        let list = [];
        while (num++ < 140) {
            list.push(num);
        }
        let sList = [];
        for (let a = 0; a < list.length - 1; a++) {
            if (Math.random() > 0.5) {
                let k = list[a];
                list[a] = list[a + 1];
                list[a + 1] = k;
            }
            if (Math.random() > 0.6) {
                sList.push(a);
            }
        }
        for (let idx of sList) {
            let a = list.splice(idx, 1);
            if (Math.random() > 0.5) {
                list.push(a[0]);
            }
            else {
                list.unshift(a[0]);
            }
        }
        // cc.log(list, "----_initRandomLevel3--------")

        this._dataPool[Constant.ST_RamdomLevel3] = JSON.stringify(list);
    }

    public getRamdomLevel() {
        // if (this.CurLevelId >= 140) {
        this.CurLevelId -= 140;

        this.CurLevelId %= 50;
        // let num = this.CurLevelId % 10 + 1;
        let num2 = this.CurLevelId % 5 + 1;
        cc.log(this.CurLevelId, num2)

        if (num2 == 1 || num2 == 2 || num2 == 3) {
            return this.getLevelNum1()
        }
        else if (num2 == 4) {
            return this.getLevelNum2()
        }
        else if (num2 == 5) {
            // if (num == 5) {
            //     return this.getLevelNum1()
            // }
            // else if (num == 10) {
            return this.getLevelNum3()
            // }
        }
        // }
    }



    getLevelNum1() {
        let list = JSON.parse(this._getItem(Constant.ST_RamdomLevel1, ""))
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
                cc.log("-----------------------刷新随机关卡", this.ResetLevel, this.MaxUnlockLevelCount)
                this._initRandomLevel1()
                this._initRandomLevel2()
                this._initRandomLevel3()
                this._save();
                return this.getLevelNum1();
            }


            return list[this.CurLevelId];
        }
        else {
            this._initRandomLevel1()
            this._initRandomLevel2()
            this._initRandomLevel3()

            this._save();
            return this.getLevelNum1();
        }

    }

    getLevelNum2() {
        let list = [];
        if (this._getItem(Constant.ST_RamdomLevel2, "")) {
            list = JSON.parse(this._getItem(Constant.ST_RamdomLevel2, ""))
        }
        cc.log(list);

        if (list) {
            cc.log(list.length, list, "-------getLevelNum2------list.length")

            // let idx = Math.floor(Math.random() * list.length);
            // let num = list.splice(idx, 1);

            let idx = 0;
            for (let a = 0; a < this.CurLevelId; a++) {

                let num = a % 10 + 1;
                let num2 = num % 5 + 1;

                if (num2 == 3) {
                    idx++;
                }
            }

            cc.log("-----------------------是否刷新随机关卡", this.ResetLevel, this.MaxUnlockLevelCount)
            if ((idx == 0 && this.ResetLevel != this.MaxUnlockLevelCount) || list.length > 10) {
                this.ResetLevel = this.MaxUnlockLevelCount;
                cc.log("-----------------------刷新随机关卡", this.ResetLevel, this.MaxUnlockLevelCount)
                this._initRandomLevel1()
                this._initRandomLevel2()
                this._initRandomLevel3()
                this._save();
                return this.getLevelNum2();
            }

            cc.log(idx, "--------idx")

            return list[idx];
        }
        else {
            this._initRandomLevel1()
            this._initRandomLevel2()
            this._initRandomLevel3()

            this._save();
            return this.getLevelNum2();
        }

    }
    getLevelNum3() {
        let list = JSON.parse(this._getItem(Constant.ST_RamdomLevel3, ""))
        if (list) {

            cc.log(list.length, list, "-------getLevelNum3------list.length")

            let idx = 0;
            for (let a = 0; a < this.CurLevelId - 1; a++) {
                let num = a % 10 + 1;
                let num2 = num % 5 + 1;
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

            cc.log("-----------------------是否刷新随机关卡", this.ResetLevel, this.MaxUnlockLevelCount)
            if ((idx == 0 && this.ResetLevel != this.MaxUnlockLevelCount) || list.length > 10) {
                this.ResetLevel = this.MaxUnlockLevelCount;
                cc.log("-----------------------刷新随机关卡", this.ResetLevel, this.MaxUnlockLevelCount)
                this._initRandomLevel1()
                this._initRandomLevel2()
                this._initRandomLevel3()
                this._save();
                return this.getLevelNum3();
            }
            return list[idx];


        }
        else {
            this._initRandomLevel1()
            this._initRandomLevel2()
            this._initRandomLevel3()

            this._save();
            return this.getLevelNum3();
        }

    }

    onReset() {

        this._initRandomLevel1()
        this._initRandomLevel2()
        this._initRandomLevel3()

        this._save();
        return null;
    }


    /**拿随机关卡节点 */
    public get ResetLevel() {
        if (this._getItem(Constant.ST_ResetLevelId, "")) {
            return JSON.parse(this._getItem(Constant.ST_ResetLevelId, ""));
        }
        else {
            this._dataPool[Constant.ST_ResetLevelId] = "0";
            this._save();
            return JSON.parse(this._getItem(Constant.ST_ResetLevelId, ""));
        }
    }
    /**拿随机关卡节点 */
    public set ResetLevel(value: any) {
        this._setItem(Constant.ST_ResetLevelId, value + "");
    }



    /**拿奖励关卡数据 */
    public get rewardType() {
        if (this._getItem(Constant.ST_RewardType, "")) {
            return JSON.parse(this._getItem(Constant.ST_RewardType, ""));
        }
        else {
            this._dataPool[Constant.ST_RewardType] = "0";
            this._save();
            return JSON.parse(this._getItem(Constant.ST_RewardType, ""));
        }
    }
    /**存奖励关卡数据 */
    public set rewardType(value: any) {
        this._setItem(Constant.ST_RewardType, value + "");
    }


    /**拿转盘数据 */
    public get Lottery() {
        return JSON.parse(this._getItem(Constant.ST_Lottery, ""));
    }
    /**存转盘数据 */
    public set Lottery(value: any) {
        this._setItem(Constant.ST_Lottery, value + "");
    }


    /**拿跳过卡数据 */
    public get SkinVedioNum() {
        if (!this._dataPool[Constant.ST_SkinVedioNum]) {
            this._dataPool[Constant.ST_SkinVedioNum] = "0";
            this._save();
        }
        return JSON.parse(this._getItem(Constant.ST_SkinVedioNum, ""));
    }
    /**存跳过卡数据 */
    public set SkinVedioNum(value: any) {
        this._setItem(Constant.ST_SkinVedioNum, value + "");
    }




    /**拿炸弹数据 */
    public get BoomNum() {
        if (!this._dataPool[Constant.ST_BoomNum]) {
            this._dataPool[Constant.ST_BoomNum] = "0";
            this._save();
        }
        return JSON.parse(this._getItem(Constant.ST_BoomNum, ""));
    }
    /**存炸弹数据 */
    public set BoomNum(value: any) {
        this._setItem(Constant.ST_BoomNum, value + "");
    }


    /**拿无尽分数数据 */
    public get fraction() {
        if (!this._dataPool[Constant.ST_Game2Fraction]) {
            this._dataPool[Constant.ST_Game2Fraction] = "0";
            this._save();
        }
        return JSON.parse(this._getItem(Constant.ST_Game2Fraction, ""));
    }
    /**存无尽分数数据 */
    public set fraction(value: any) {
        this._setItem(Constant.ST_Game2Fraction, value + "");
    }





    /**初始化每关表情 */
    private _initFaceNum() {
        let FaceNum: number[] = [];
        for (let index = 0; index < Constant.CT_TotalLevelCount; index++) {
            FaceNum.push(0);
        }
        this._dataPool[Constant.ST_FaceNum] = JSON.stringify(FaceNum);
    }
    /**存表情数据 */
    public setFaceNum(id: number, num: number) {
        let FaceInfos: string = this._getItem(Constant.ST_FaceNum, "1");
        if (FaceInfos) {
            let FaceInfoArr: number[] = JSON.parse(FaceInfos);
            FaceInfoArr[id] = num;
            this._setItem(Constant.ST_FaceNum, JSON.stringify(FaceInfoArr));
        }
    }
    /**
     * 取表情数据
     */
    public getFaceInfo(id: number): number {
        let FaceInfos: string = this._getItem(Constant.ST_FaceNum, "");
        if (FaceInfos) {
            let FaceInfoArr: number[] = JSON.parse(FaceInfos);
            return FaceInfoArr[id];
        }
        return null;
    }
    /**初始化关卡星星数量 */
    private _initStarNum() {
        let StarNum: number[] = [];
        for (let i = 0; i < Constant.CT_TotalLevelCount; i++) {
            StarNum.push(0);
        }
        this._dataPool[Constant.ST_StarNum] = JSON.stringify(StarNum);
    }
    public setIsEnd(boolean: boolean) {
        this.IsEnd = boolean;
    }
    public getIsEnd(boolean: boolean): boolean {
        // cc.log(this.IsEnd, "999999999999888888888")
        return this.IsEnd == boolean;
    }    /**存关卡星星数 */
    public setStarNum(id: number, num: number) {
        let StarInfo: string = this._getItem(Constant.ST_StarNum, "0");
        if (StarInfo) {
            let StarInfoArr: number[] = JSON.parse(StarInfo);
            // cc.log(StarInfoArr, StarInfo, "00000000000000")
            StarInfoArr[id] = num;
            this._setItem(Constant.ST_StarNum, JSON.stringify(StarInfoArr));
        }
    }
    /**取关卡星星数 */
    public getStarInfo(id: number): number {
        let StarInfo: string = this._getItem(Constant.ST_StarNum, "");
        // cc.log(StarInfo,id)
        // cc.log(StarInfo);

        if (StarInfo) {
            let FaceInfoArr: number[] = JSON.parse(StarInfo);

            // cc.log(FaceInfoArr[id]);
            if (!FaceInfoArr[id]) {
                let StarNum: number[] = [];
                for (let i = 0; i < 80; i++) {
                    StarNum.push(FaceInfoArr[i]);
                }
                for (let i = id; i < id + 400; i++) {
                    StarNum.push(0);
                }
                FaceInfoArr = StarNum;

                // cc.log(FaceInfoArr, FaceInfoArr[id]," FaceInfoArr[id]");
                this._dataPool[Constant.ST_StarNum] = JSON.stringify(StarNum);
                this._save()
                // return this.getSkinInfo(id);

                return FaceInfoArr[id];
            }

            return FaceInfoArr[id];
        }
        return 0;
    }

    /**
    * 初始化关卡信息
    */
    private _initLevelData() {
        let levelitemArr: Levelitem[] = [];
        let levelitem: Levelitem = new Levelitem(`{"Id":"${0}","State":"${1}","fraction":"${0}"}`);
        levelitemArr.push(levelitem);

        let LevelInfos: string = this._getItem(Constant.ST_LevelItem, "");

        for (let i = 0; i < 300; i++) {
            let n = 0;
            if (LevelInfos[i]) {
                n = LevelInfos[i]["State"];
            }
            let levelitem: Levelitem = new Levelitem(`{"Id":"${i}","State":"${0}","fraction":"${0}"}`);

            if (n) {
                levelitem = new Levelitem(`{"Id":"${i}","State":"${n}","fraction":"${0}"}`);
            }
            levelitemArr.push(levelitem);
        }
        this._dataPool[Constant.ST_LevelItem] = JSON.stringify(levelitemArr);
    }

    /**
     * 过关时的关卡解锁
     */
    public LevelUnLock(id: number) {
        let LevelInfos: string = this._getItem(Constant.ST_LevelItem, "");
        if (LevelInfos) {
            let LevelInfoArr: Levelitem[] = JSON.parse(LevelInfos);
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
                this.LevelUnLock(id)
                return;
            }
            // console.log(LevelInfoArr[id + 1].State, LevelInfoArr[id].State, "LevelInfoArr[id].State")
            if (id >= 0 && id < LevelInfoArr.length) {
                if (LevelInfoArr[id + 1].State == 2 || LevelInfoArr[id + 1].State == 3) {//如果后一个关卡已解锁
                    LevelInfoArr[id].State = 2;
                    this.setLevelInfo(id, LevelInfoArr[id]);
                } else if (LevelInfoArr[id].State == 2 && LevelInfoArr[id + 1].State == 0) {//如果当前关卡为失败
                    LevelInfoArr[id].State = 2;
                    LevelInfoArr[id + 1].State = 1;
                    this.setLevelInfo(id, LevelInfoArr[id]);
                    this.setLevelInfo(id + 1, LevelInfoArr[id + 1]);
                } else if (LevelInfoArr[id].State == 1) {//如果当前关卡未完成
                    LevelInfoArr[id].State = 2;
                    LevelInfoArr[id + 1].State = 1;
                    this.setLevelInfo(id, LevelInfoArr[id]);
                    this.setLevelInfo(id + 1, LevelInfoArr[id + 1]);
                } else if (LevelInfoArr[id].State == 3) {
                    LevelInfoArr[id].State = 2;
                    this.setLevelInfo(id, LevelInfoArr[id]);
                }
            }
        }
    }
    /**
     * 过关时的失败关卡
     */
    public LevelFaild(id: number) {
        let LevelInfos: string = this._getItem(Constant.ST_LevelItem, "");
        if (LevelInfos) {
            let LevelInfoArr: Levelitem[] = JSON.parse(LevelInfos);
            if (id >= 0 && id < LevelInfoArr.length) {
                if (LevelInfoArr[id].State == 3) {
                    return;
                }
                LevelInfoArr[id].State = 3;
                this.setLevelInfo(id, LevelInfoArr[id]);
            }
        }
    }
    /**
    * 跳关时的关卡解锁
    */
    public LevelSkipLock(id: number) {
        let LevelInfos: string = this._getItem(Constant.ST_LevelItem, "");
        if (LevelInfos) {
            let LevelInfoArr: Levelitem[] = JSON.parse(LevelInfos);
            if (id == Constant.CT_TotalLevelCount - 1) {
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
    }
    /**
     * 存关卡信息
     * @param id 关卡ID
     * @param info 关卡信息
     */
    public setLevelInfo(id: number, info: Levelitem) {
        let LevelInfos: string = this._getItem(Constant.ST_LevelItem, "");
        if (LevelInfos) {
            let LevelInfoArr: Levelitem[] = JSON.parse(LevelInfos);
            if (id >= 0 && id < LevelInfoArr.length) {
                LevelInfoArr[id] = info;
                this._setItem(Constant.ST_LevelItem, JSON.stringify(LevelInfoArr));
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
    }
    /**
     * 取关卡信息
     * @param id 关卡ID
     */
    public getLevelInfo(id: number): Levelitem {
        let LevelInfos: string = this._getItem(Constant.ST_LevelItem, "");
        if (LevelInfos) {
            let LevelInfoArr: Levelitem[] = JSON.parse(LevelInfos);
            if (LevelInfoArr.length < 300) {
                cc.log("关卡不存在，创建一组数据!")
                cc.log(LevelInfoArr, "-------getLevelInfo------")
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
    }
    /**初始化皮肤 */
    private _initSkinData() {
        let price: number[] = [800, 1200, 2000, 3500, 5000, 8000];
        let skinInfoArr: SkinInfo[] = [];
        let skinInfo: SkinInfo = new SkinInfo(`{"Id":"${0}","State":"2","Price":"${price[0]}"}`);
        skinInfoArr.push(skinInfo);
        for (let i = 1; i < price.length; i++) {
            let skinInfo: SkinInfo = new SkinInfo(`{"Id":"${i}","State":"0","Price":"${price[i]}"}`);
            skinInfoArr.push(skinInfo);
        }
        // cc.log("初始化皮肤数据：", JSON.stringify(skinInfoArr));
        this._dataPool[Constant.ST_SkinInfo] = JSON.stringify(skinInfoArr);


        let price2: number[] = [500, 1000, 1500, 2500, 4000, 6000, 9000];
        let skinInfoArr2: SkinInfo[] = [];
        let skinInfo2: SkinInfo = new SkinInfo(`{"Id":"${0}","State":"2","Price":"${price2[0]}"}`);
        skinInfoArr2.push(skinInfo2);
        for (let i = 1; i < price2.length; i++) {
            let skinInfo2: SkinInfo = new SkinInfo(`{"Id":"${i}","State":"0","Price":"${price2[i]}"}`);
            skinInfoArr2.push(skinInfo2);
        }
        // cc.log("初始化皮肤数据：", JSON.stringify(skinInfoArr));
        this._dataPool[Constant.ST_BallbonSkinInfo] = JSON.stringify(skinInfoArr2);

    }


    /**初始化店铺信息 */
    private _initSjShopData() {
        let data: any = { "shop": 1, "zhuozi": [1, 1, 1, 1,] };
        this._dataPool[Constant.SjShop] = JSON.stringify(data);
        // cc.log(this._dataPool[Constant.SjShop], "99999999999999")
    }
    /**存最后一次签到的时间 */
    public set LastBonusTime(value: string) {

        this._setItem(Constant.LastDailyBonusTime, value);
    }

    /**取最后一次签到的时间 */
    public get LastBonusTime() {
        let ret = this._getItem(Constant.LastDailyBonusTime, "0");
        if (!ret) {
            ret = "0";
        }
        return ret;
    }



    /**存无尽模式是否新手 */
    public set isNovice(value: string) {

        this._setItem(Constant.ST_IsGame2Novice, value);
    }

    /**取无尽模式是否新手 */
    public get isNovice() {
        let ret = this._getItem(Constant.ST_IsGame2Novice, "0");
        if (!ret) {
            ret = "0";
        }
        return ret;
    }



    /**存最后奖励的天数 */
    public set LastBonusIndex(value: number) {
        this._setItem(Constant.LastDailyBonusIndex, value.toString());
    }


    /**取最后奖励的天数 */
    public get LastBonusIndex() {
        let ret = this._getItem(Constant.LastDailyBonusIndex, "0");
        if (!ret) {
            ret = 0;
        }
        return parseInt(ret);
    }

    /**拿金币数据 */
    public get CoinCount() {
        return parseInt(this._getItem(Constant.ST_CoinCount, "0"));
    }
    /**存金币数据 */
    public set CoinCount(value: number) {
        this._setItem(Constant.ST_CoinCount, value + "");
        // cc.game.emit(Constant.E_GAME_LOGIC, { type: Constant.E_STAR_CHANGE });
    }
    /**拿店铺数据 */
    public get SjShop() {

        return JSON.parse(this._getItem(Constant.SjShop, ""));
    }
    /**存店铺数据 */
    public set SjShop(value: number) {
        this._setItem(Constant.SjShop, value.toString());
    }


    /**拿最大关卡数数据 */
    public get MaxLevelId() {
        if (this._getItem(Constant.ST_MaxLevelId, "")) {

            return JSON.parse(this._getItem(Constant.ST_MaxLevelId, ""));
        }
        else {
            this._dataPool[Constant.ST_MaxLevelId] = "" + this.CurLevelId;
            this._setItem(Constant.ST_MaxLevelId, this.CurLevelId.toString());
            return JSON.parse(this._getItem(Constant.ST_MaxLevelId, ""));
        }
    }
    /**存最大关卡数据 */
    public set MaxLevelId(value: number) {
        this._setItem(Constant.ST_MaxLevelId, value.toString());
    }



    public get CurLevelId() {
        return parseInt(this._getItem(Constant.ST_CurLevelId, "0"));
    }
    public set CurLevelId(value: number) {
        // if (value >= 119) {
        //     value = 119;//-1
        // }
        cc.log(this.MaxLevelId, value, "----------this.MaxLevelId, value------")
        if (this.MaxLevelId < value) {
            this.MaxLevelId = value
        }
        this._setItem(Constant.ST_CurLevelId, value + "");
        cc.game.emit(Constant.E_GAME_LOGIC, { type: Constant.ST_CurLevelId });
    }

    public get MaxUnlockLevelCount() {
        return parseInt(this._getItem(Constant.ST_MaxUnlockLevelCount, "1"));
    }
    public set MaxUnlockLevelCount(value: number) {
        this._setItem(Constant.ST_MaxUnlockLevelCount, value + "");
    }

    public get AudioOn() {
        return this._getItem(Constant.ST_AudioOn, "1") == "1";
    }
    public set AudioOn(value: boolean) {
        this._setItem(Constant.ST_AudioOn, value ? "1" : "0");
    }

    public get AudioEffectOn() {
        return this._getItem(Constant.ST_AudioEffectOn, "1") == "1";
    }
    public set AudioEffectOn(value: boolean) {
        this._setItem(Constant.ST_AudioEffectOn, value ? "1" : "0");
    }
    public get ShockOn() {
        return this._getItem(Constant.ST_ShockOn, "1") == "1";
    }
    public set ShockOn(value: boolean) {
        this._setItem(Constant.ST_ShockOn, value ? "1" : "0");
    }

    public get CurSkinId() {
        return parseInt(this._getItem(Constant.ST_CurSkinId, "0"));
    }

    public set CurSkinId(value: number) {
        if (value == this.CurSkinId) {
            return;
        }

        let preId: number = this.CurSkinId;
        let skinInfo: SkinInfo = this.getSkinInfo(preId);
        if (skinInfo) {
            skinInfo.State = 1;
            this.setSkinInfo(preId, skinInfo);
        }

        let curSkinInfo: SkinInfo = this.getSkinInfo(value);
        if (curSkinInfo) {
            curSkinInfo.State = 2;
            this.setSkinInfo(value, curSkinInfo);
        }

        this._setItem(Constant.ST_CurSkinId, value + "");
        //cc.game.emit(Constant.E_GAME_LOGIC, { type: Constant.E_SELECT_SKIN, skinId: value });
    }



    // 取人物皮肤信息
    public getSkinInfo(id: number) {
        let skinInfos: string = this._getItem(Constant.ST_SkinInfo, "");
        // cc.log(skinInfos);

        if (skinInfos) {
            let skinInfoArr: SkinInfo[] = JSON.parse(skinInfos);
            if (id >= 0 && id < skinInfoArr.length) {
                return skinInfoArr[id];
            }
        } else {
            this._initSkinData();
            return this.getSkinInfo(id);
        }
    }
    // 存人物皮肤信息
    public setSkinInfo(id: number, info: SkinInfo) {
        let skinInfos: string = this._getItem(Constant.ST_SkinInfo, "");
        if (skinInfos) {
            let skinInfoArr: SkinInfo[] = JSON.parse(skinInfos);
            if (id >= 0 && id < skinInfoArr.length) {
                skinInfoArr[id] = info;
                this._setItem(Constant.ST_SkinInfo, JSON.stringify(skinInfoArr));
                //cc.game.emit(Constant.E_GAME_LOGIC, { type: Constant.E_SKIN_STATE_CHANGE, skinId: id });
            }
        }
    }



    /**气球皮肤id */
    public get CurBallbonSkinId() {
        return parseInt(this._getItem(Constant.ST_CurBallbonSkinId, "0"));
    }

    public set CurBallbonSkinId(value: number) {
        if (value == this.CurBallbonSkinId) {
            return;
        }

        cc.log(value, "-------CurBallbonSkinId---")
        let preId: number = this.CurBallbonSkinId;
        let skinInfo: SkinInfo = this.getBallbonSkinInfo(preId);
        if (skinInfo) {
            skinInfo.State = 1;
            this.setBallbonSkinInfo(preId, skinInfo);
        }

        let curSkinInfo: SkinInfo = this.getBallbonSkinInfo(value);
        if (curSkinInfo) {
            curSkinInfo.State = 2;
            this.setBallbonSkinInfo(value, curSkinInfo);
        }

        this._setItem(Constant.ST_CurBallbonSkinId, value + "");
        //cc.game.emit(Constant.E_GAME_LOGIC, { type: Constant.E_SELECT_SKIN, skinId: value });
    }



    // 取气球皮肤信息
    public getBallbonSkinInfo(id: number) {
        let skinInfos: string = this._getItem(Constant.ST_BallbonSkinInfo, "");
        // cc.log(skinInfos);

        if (skinInfos) {
            let skinInfoArr: SkinInfo[] = JSON.parse(skinInfos);
            if (id >= 0 && id < skinInfoArr.length) {
                return skinInfoArr[id];
            }
        } else {
            this._initSkinData();
            return this.getSkinInfo(id);
        }
    }
    // 存气球皮肤信息
    public setBallbonSkinInfo(id: number, info: SkinInfo) {
        let skinInfos: string = this._getItem(Constant.ST_BallbonSkinInfo, "");
        if (skinInfos) {
            let skinInfoArr: SkinInfo[] = JSON.parse(skinInfos);
            cc.log(info, skinInfoArr, "setBallbonSkinInfo")
            if (id >= 0 && id < skinInfoArr.length) {
                skinInfoArr[id] = info;
                this._setItem(Constant.ST_BallbonSkinInfo, JSON.stringify(skinInfoArr));
                //cc.game.emit(Constant.E_GAME_LOGIC, { type: Constant.E_SKIN_STATE_CHANGE, skinId: id });
            }
        }
    }

    /**
     * 随机获取一个未解锁的人物皮肤id
     */
    public getRandomLockSkin() {
        let ids: number[] = [];
        let skinInfos: string = this._getItem(Constant.ST_SkinInfo, "");
        if (skinInfos) {
            let skinInfoArr: SkinInfo[] = JSON.parse(skinInfos);
            for (let i = 0; i < skinInfoArr.length; i++) {
                if (skinInfoArr[i].State == 0) {
                    ids.push(skinInfoArr[i].Id);
                }
            }
            if (ids.length > 0) {
                let idx: number = Math.floor(Math.random() * (ids.length));
                return ids[idx];
            }
            return Math.floor(Math.random() * (skinInfoArr.length - 1)) + 1;
        }

        return -1;
    }
    /**
     * 随机获取一个未解锁的气球皮肤id
     */
    public getRandomLockBalloonSkin() {
        let ids: number[] = [];
        let skinInfos: string = this._getItem(Constant.ST_BallbonSkinInfo, "");
        if (skinInfos) {
            let skinInfoArr: SkinInfo[] = JSON.parse(skinInfos);
            for (let i = 0; i < skinInfoArr.length; i++) {
                if (skinInfoArr[i].State == 0) {
                    ids.push(skinInfoArr[i].Id);
                }
            }
            if (ids.length > 0) {
                let idx: number = Math.floor(Math.random() * (ids.length));
                return ids[idx];
            }
            return Math.floor(Math.random() * (skinInfoArr.length - 1)) + 1;
        }

        return -1;
    }


    private _getItem(key: string, defaultValue: string) {
        if (this._dataPool[key]) {
            // this._dataPool[key]={};
            return this._dataPool[key];
        }
        return defaultValue;
    }

    private _setItem(key: string, value: string) {
        this._dataPool[key] = value;
        this._save();
    }

    private _save() {
        cc.sys.localStorage.setItem(Constant.ST_GameData, JSON.stringify(this._dataPool));
    }

}

