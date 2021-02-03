
import { cocosz } from "../Framework/CocosZ";
import Constant, { PageName } from "../Framework/Constant";
import Msg from "../Framework/Msg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LevelItem extends cc.Component {

    public ID: number = 0;
    private State: number = 0;
    private LevelNum: cc.Label = null;
    private Lock: cc.Node = null;


    onLoad() {
        this.LevelNum = this.node.getChildByName("LevelNum").getComponent(cc.Label);
        this.Lock = this.node.getChildByName("Lock");
    }

    start() {
        // let State = cocosz.dataMgr.getLevelInfo(this.ID).State;
        // switch (num) {
        //     case 0: {
        //         this.LevelNum.node.setPosition(cc.v2(132, 78));
        //         this.pro.setPosition(cc.v2(132, 78));
        //         this.StarNode.setPosition(cc.v2(0, -202));
        //         break;
        //     }
        //     case 1: {
        //         this.LevelNum.node.setPosition(cc.v2(0, -94.5));
        //         this.pro.setPosition(cc.v2(0, -94.5));
        //         this.StarNode.setPosition(cc.v2(0, -202));

        //         break;
        //     }
        //     case 2: {
        //         this.LevelNum.node.setPosition(cc.v2(-102, 22));
        //         this.pro.setPosition(cc.v2(-102, 22));
        //         this.StarNode.setPosition(cc.v2(0, -202));

        //         break;
        //     }
        // }
        // cc.log("---------------")
        this.node.on(cc.Node.EventType.TOUCH_END, this.OnStartGame, this);
    }

    onEnable() {
        // return;
        this.Init();
    }

    /**点击关卡 */
    private OnStartGame() {
        // cc.log("------------开始游戏")
        cocosz.audioMgr.playbtnEffect();
        // if (this.ID > 105) {
        //     Msg.Show("尽请期待!!!");
        //     return;
        // }

        if (this.State == 0 && !cocosz.gameMgr.isLevelOpen) {
            Msg.Show("需解锁前置关卡!!!");
            return;
        }
        cocosz.dataMgr.CurLevelId = this.ID;
        cocosz.gameMgr.curLevelID = cocosz.dataMgr.CurLevelId
        // cocosz.dataMgr.CurLevelId += 120
        cocosz.sceneMgr.loadScene("Game", () => {
            cocosz.uiMgr.openPage(PageName.UiGame);
            cocosz.gameMgr.initGame();
        });
        // cocosz.sceneMgr.loadScene("LoadGame", () => {
        //     cocosz.uiMgr.openPage(PageName.UiLoadGame);
        // });
    }


    private Init() {
        // if (this.ID < 9) {
        //     this.LevelNum.string = "0" + (this.ID + 1);
        // } else {
        this.LevelNum.string = (this.ID + 1).toString();
        // }
        // cc.log(cocosz.dataMgr.getLevelInfo(this.ID))
        if (!cocosz.dataMgr.getLevelInfo(this.ID)) {

            return;
        }

        this.State = cocosz.dataMgr.getLevelInfo(this.ID).State;
        // console.log(this.State, this.ID);
        // cc.log(this.State);
        // cc.log(this.ID, this.State)


        switch (this.State) {
            case 0:
                this.Lock.active = true;
                this.LevelNum.node.active = false;
                break;
            case 1:
                this.Lock.active = false;
                this.LevelNum.node.active = true;
                break;
            case 2:
                this.Lock.active = false;
                this.LevelNum.node.active = true;
                break;
            case 3:
                this.Lock.active = false;
                this.LevelNum.node.active = true;
                break;
            default: {

            }
        }
    }
}
