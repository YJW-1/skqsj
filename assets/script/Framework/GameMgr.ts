import { cocosz } from "./CocosZ";
import Constant, { PanelName } from "./Constant";
import GameCtr from "./GameCtr";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameMgr {

    private static _inst: GameMgr;
    public static get inst(): GameMgr {
        if (!GameMgr._inst) {
            GameMgr._inst = new GameMgr();
        }
        return GameMgr._inst;
    }


    private _gameCtr: GameCtr = null;

    public audioBg: boolean = true;

    /**记录过关数 奖励关卡用 */
    public LevelNum: number = 2;


    /**记录过关数 抽奖用 */
    public LevelNum2: number = 0;



    /**记录过关数 添加桌面用 */
    public playGameNum: number = 0;

    /**关卡金币总数 */
    public maxCoin: number = 4;

    /**关卡获得金币总数 */
    public coinNum: number = 4;

    //游戏结束
    public isGameOver: boolean = false;


    //奖励关卡类型
    public rewardType: number = 0;


    //游戏结束
    public isStartDef: boolean = false


    /**左边气球是否爆炸 */
    public isLeftBalloon: boolean = false;


    /**右边气球是否爆炸 */
    public isrightBalloon: boolean = false;


    /**发现气球 */
    public isFeed: boolean = false;


    /**2个控制按钮 */
    public isOpen: boolean = false;


    /**是否已经复活 */
    public isResurrection: boolean = false;

    /**是否第一次进入*/
    public isFirst: boolean = false;


    /**是否第一次进入*/
    public isFirst2: boolean = false;

    /**是否关卡全开 */
    public isLevelOpen: boolean = false;


    /**是否开启奖励关卡 */
    public isOpenRewardLevel: boolean = false;


    /**是否开启抽奖 */
    public isOpenLottery: boolean = false;


    /**当前商店皮肤id*/
    public curShopSkinID: number = -1;



    /**当前关卡id*/
    public curLevelID: number = 0;


    /**当前剩余关卡*/
    public seleltLevelList: any = [];

    /**当前剩余关卡数*/
    public surplusLevelNum: number = 0;

    /**分数*/
    public fraction: number = 0;

    /**无尽关卡分数*/
    public game2Fraction: number = 0;

    /**镜头屏幕数,点击位置偏移*/
    public touchNum: number = 0;


    /**无尽模式复活标记*/
    public isGame2Resurrection: boolean = false;


    /**无尽模式当前关卡id*/
    public curGame2LevelID: number = 0;


    /**无尽模式总关卡id*/
    public MaxGame2LevelID: number = 0;



    /**无尽模式当前关卡数据*/
    public curLevelJson: number = 0;

    /**无尽模式当前关卡数据*/
    public handNum: number = 0;


    public onBalloonDes(name) {
        cc.log(this.isrightBalloon, this.isLeftBalloon, name)
        if (name == "left_balloon") {
            this.isLeftBalloon = true;
        }
        else if (name == "right_balloon") {
            this.isrightBalloon = true;
        }

        if (this.isrightBalloon && this.isLeftBalloon && this.isGameOver == false) {
            cc.log("两只气球爆炸")
            // this.isGameOver = true;
            cocosz.audioMgr.playBeforeFeildEffect1();
            cc.game.emit(Constant.E_PROP_ALLBALLOONDES);


            // if (cc.sys.platform === cc.sys.WECHAT_GAME && cocosz.dataMgr.ShockOn) {
            //     window["wx"].vibrateLong();
            // }

            // cocosz.scheduleOnce(() => {
            //     cocosz.uiMgr.openPanel(PanelName.UiFailed);
            // }, 1)
            cc.game.emit(Constant.E_GAME_FAID)
        }
    }

    /**
    * 射线检测（有序）
    */
    onRayCast(start, end) {
        let result = cc.director.getPhysicsManager().rayCast(start, end, cc.RayCastType.All);
        let dict = {};
        let list = [];
        let newResult = [];
        start.x = Math.round(start.x);
        start.y = Math.round(start.y);
        end.x = Math.round(end.x);
        end.y = Math.round(end.y);
        if (start.y == end.y) {
            for (let rb of result) {
                let point = rb.point;
                point.x = Math.round(point.x);
                point.y = Math.round(point.y);
                let len = Math.abs(start.x - point.x);
                dict[len] = rb;
                list.push(len);
            }
            list.sort((a, b) => { return a - b });
            for (let len of list) {
                newResult.push(dict[len]);
            }
        }
        else {
            for (let rb of result) {
                let point = rb.point;
                let len = Math.abs(start.y - point.y);
                dict[len] = rb;
                list.push(len);
            }
            list.sort((a, b) => { return a - b });
            for (let len of list) {
                newResult.push(dict[len]);
            }
        }
        return newResult;
    }


    /**
     * 
     * @param node 
     * @param MaxScale 最大值 
     * @param smallest  最小值
     */
    public tweeBtn(node: cc.Node, MaxScale: number, smallScale: number) {
        let scale = cc.tween()
            .to(0.5, { scale: MaxScale })
            .to(0.5, { scale: smallScale })
        cc.tween(node)
            .then(scale)
            .repeatForever()
            .start()
    }

    public tweeNode(node: cc.Node) {
        cc.tween(node)
            .to(0.3, { scale: 1 }, { easing: "backOut" })
            .start();
    }

    public initGame() {
        let node = new cc.Node();
        node.group = "default";
        node.zIndex = -1;
        node.name = "Game";
        this._gameCtr = node.addComponent("NormalModelCtr");
        cc.director.getScene().addChild(node);
    }

}
