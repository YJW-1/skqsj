import { timeStamp } from "console";
import { O_CREAT } from "constants";
import { chdir } from "process";
import { cocosz } from "../Framework/CocosZ";
import Constant from "../Framework/Constant";
import { uiGame } from "../Ui/UiGame";

const { ccclass, property } = cc._decorator;

@ccclass
export default class game2 extends cc.Component {
    @property(cc.Node)
    camera: cc.Node = null;

    @property(cc.Node)
    ui: cc.Node = null;

    @property(cc.Node)
    gameBg: cc.Node = null;


    @property(cc.Node)
    startGame: cc.Node = null;

    @property(cc.Node)
    listen: cc.Node = null;

    @property(cc.Node)
    handTips: cc.Node = null;


    @property(cc.Node)
    stone: cc.Node = null;

    handStartPos: any = null;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        // this.schedule(() => {
        // let stone = cocosz.resMgr.getRes("stone", cc.Prefab);
        // let node = cc.instantiate(stone);
        // node.setPosition(cc.v2(0, 0))
        // node.getComponent(cc.RigidBody).gravityScale = 0;
        // this.node.addChild(node);
        // }, 2)



        cc.log(cocosz.dataMgr.isNovice, "cocosz.dataMgr.isNovice");

        // if (+cocosz.dataMgr.isNovice == 0) {
        this.startGame.getComponent(cc.Label).string = "       向指示方向滑动";
        this.handStartPos = this.handTips.getPosition();
        cc.tween(this.handTips)
            .repeatForever(
                cc.tween().sequence(
                    cc.tween().call(() => {

                        this.handTips.setPosition(this.handStartPos);
                    }),
                    cc.tween().to(0.3, { opacity: 255 }),
                    cc.tween().by(1, { x: -150 }),
                    cc.tween().to(0.3, { opacity: 0 }),
                    cc.tween().delay(2)


                )
            )
            .start()
        // }

        // else {
        //     this.handTips.active = false;
        //     this.stone.active = false;
        // }
        if (cocosz.gameMgr.isGame2Resurrection) {
            cocosz.gameMgr.isGame2Resurrection = false;
        }
        else {
            cocosz.gameMgr.curGame2LevelID = 0;

        }

        cc.game.on(Constant.E_GAME_START, () => {
            window.onGameEvent(4, "无尽关卡开始",);

            // if (+cocosz.dataMgr.isNovice == 0) {
            cocosz.dataMgr.isNovice = "1";
            this.handTips.active = false;
            // }
            this.listen.active = false
            this.startGame.active = false;
            uiGame.onStartGame()
            let num = Math.floor(Math.random() * 20) + 1;

            num = cocosz.dataMgr.Game2LevelList;
            cocosz.gameMgr.curLevelJson = num;
            cc.log(num);

            let prefab = cocosz.resMgr.getRes("levelMgr", cc.Prefab);

            let level = cc.instantiate(prefab);
            level.getComponent("levelNum").curLevel = num;
            this.node.addChild(level);

            cocosz.gameMgr.curGame2LevelID++;
            this.ui.y = this.camera.y;
            this.gameBg.y = this.camera.y;


            this.schedule(() => {
                cocosz.gameMgr.curGame2LevelID++;
                let num = Math.floor(Math.random() * 20) + 1;

                num = cocosz.dataMgr.Game2LevelList;

                cocosz.gameMgr.curLevelJson = num;
                cc.log(num)
                let prefab = cocosz.resMgr.getRes("levelMgr", cc.Prefab);

                let level = cc.instantiate(prefab);
                level.getComponent("levelNum").curLevel = num;
                this.node.addChild(level);
            }, 18)



            cc.game.off(Constant.E_GAME_START)
        }, this)
        cc.tween(this.startGame)
            .repeatForever(
                cc.tween().sequence(
                    cc.tween().by(0.3, { scale: 0.1 }),
                    cc.tween().by(0.3, { scale: -0.1 })
                )
            )
            .start()

    }

    update(dt) {
        if (cocosz.gameMgr.isGameOver) {
            // for (let child of this.node.children) {
            //     if (child.name == "levelMgr") {
            //         child.destroy();
            //     }
            // }
            this.unscheduleAllCallbacks();
            return
        }
    }
}
