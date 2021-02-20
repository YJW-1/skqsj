import GameCtr from "./GameCtr";
import Constant, { GameState, PanelName, PageName, PrefabName, FloorType, tag } from "./Constant";
// import PangXie from "../item/PangXie";
// import JiGuang from "../item/JiGuang";
// import Wall from "../item/Wall";
import CocosZ, { cocosz } from "./CocosZ";
import GameBgCtr from "./GameBgCtr";
import Msg from "./Msg";
import { createConnection } from "net";
// import UiLottery from "../Ui/UiLottery";
// import { utils } from "../common-plugin/Scripts/Utils";
// import { utils } from "../statistic/Utils";

// import RoleController from "../role/RoleController";
// import GameBgCtr from "../GameBgCtr";
// import RongYan from "../item/RongYan";

const { ccclass, property } = cc._decorator;

let levelDect = {
    "134": 129,
    "139": 139,
    "44": 128,
    "49": 138,
    "54": 127,
    "59": 137,
    "64": 126,
    "69": 136,
    "74": 125,
    "79": 135,


    "84": 124,
    "89": 134,
    "94": 123,
    "99": 133,
    "104": 122,
    "109": 132,
    "114": 121,
    "119": 131,
    "124": 120,
    "129": 130,
}

@ccclass
export default class NormalModelCtr extends GameCtr {

    private _itemList: cc.Node[] = [];

    private _Num: number = 0;//适应高度与原高度的差值
    private GameNode: cc.Node = null;
    private _gameBg: GameBgCtr = null;
    private _BgNode: cc.Node = null;
    private _lizi: cc.Prefab = null;
    private _DecorateType17Pos: any = {};

    private supplement: any = null;
    private supplement2: any = null;



    onLoad() {
        super.onLoad();
        this.GameNode = cc.find("Canvas/Game");

        this._lizi = cocosz.resMgr.getRes("lizi", cc.Prefab);
        this._initRes();
        this._gameState = GameState.Prepare;
        if (cc.find("Canvas").height > 2000) {
            this._Num = cc.find("Canvas").height - 1920;
            if (this._Num != 0) {
                this._Num *= 0.5;
            }
        }
    }

    start() {
        cc.director.getScheduler().enableForTarget(this);
        this._initBg();

        if (cocosz.sceneMgr.sceneName == "Game") {

            this._initGame()
            // this._initGame2();
        }
        else if (cocosz.sceneMgr.sceneName == "Game2") {
            this._initEndlessGame();
        }

    }




    onEnable() {
        cc.game.on(Constant.E_GAME_LOGIC, this._onMessageHandlerr, this);
        cc.game.on(Constant.E_LEVEL_COMPLETE, () => {
            // cocosz.audioMgr.playVectoryEffect();
            // let node = cc.instantiate(this._lizi);
            // node.parent = this.GameNode;
            // node.position = cc.Vec2.ZERO;
        }, this);
    }

    onDisable() {
        cc.game.targetOff(this);
        this.unscheduleAllCallbacks();
    }
    protected _handleInput() {
        if (this._gameState == GameState.Prepare) {
            this._gameState = GameState.Start;
            cc.game.emit(Constant.E_GAME_LOGIC, { type: Constant.E_GAME_START });
        }
    }

    private _onMessageHandlerr(event: any) {
        switch (event.type) {
            case Constant.E_GAME_START: {
                if (this._gameState == GameState.Prepare) {
                    this._gameState = GameState.Start;

                }
                if (this.GameNode.getChildByName("Guide")) {
                    this.GameNode.getChildByName("Guide").destroy();
                }
                // utils.StartGame((cocosz.dataMgr.CurLevelId + 1).toString());
                break;
            }
            case Constant.E_LEVEL_FAILED: {
                // 通关失败
                this._gameState = GameState.Failed;
                this.LevelUp();
                break;
            }
            case Constant.E_LEVEL_COMPLETE: {
                // 通关成功
                this._gameState = GameState.Success;

                this.LevelUp();
                if (this._BgNode) {
                    this._initBg();
                }
                break;
            }

        }
    }
    private LevelUp() {
        this.GameNode.removeAllChildren();
        this._gameState = GameState.Prepare;
    }
    private _initBg() {
        this._gameBg = new GameBgCtr();
        this._gameBg.initBG();
        this._BgNode = cc.find("Canvas/BG");
    }


    onGetLevel() {
        for (let idx in levelDect) {
            if (idx == cocosz.dataMgr.CurLevelId.toString()) {
                if ((cocosz.dataMgr.CurLevelId + 1) % 5 == 0) {
                    cocosz.gameMgr.surplusLevelNum++
                }

                if ((cocosz.dataMgr.CurLevelId + 1) % 10 == 0) {
                    cocosz.gameMgr.surplusLevelNum++
                }
                cocosz.dataMgr.CurLevelId = levelDect[idx];
                cc.log("----cocosz.dataMgr.CurLevelId---onGetLevel--", cocosz.dataMgr.CurLevelId)

                // if (cocosz.dataMgr.CurLevelId > 120) {
                //     for (let idx2 in levelDect) {
                //         if (levelDect[idx2] == idx) {
                //             cocosz.dataMgr.CurLevelId = +idx2
                //         }
                //     }
                // }

            }
        }
    }


    onGetLevel2() {
        for (let idx in levelDect) {
            if (levelDect[idx] == cocosz.dataMgr.CurLevelId) {
                cocosz.dataMgr.CurLevelId = +idx;
                if (cocosz.dataMgr.CurLevelId > 120) {
                    cocosz.gameMgr.surplusLevelNum++
                }
            }
        }
    }

    private _initEndlessGame() {

        cocosz.gameMgr.isGameOver = false;
        cocosz.gameMgr.isLeftBalloon = false;
        cocosz.gameMgr.isrightBalloon = false;
        cocosz.gameMgr.isOpen = false;
        cocosz.gameMgr.isFeed = false;

        cocosz.gameMgr.surplusLevelNum = 0
        cocosz.gameMgr.touchNum = 0;

        cocosz.gameMgr.curLevelID = cocosz.dataMgr.CurLevelId;

        if (cocosz.dataMgr.MaxUnlockLevelCount < cocosz.gameMgr.curLevelID) {
            cocosz.dataMgr.MaxUnlockLevelCount = cocosz.gameMgr.curLevelID
        }
        // window.onGameEvent(3, "无尽模式开始", 1);
        let Game = cc.find("Canvas/gameBG");
        let gameBg = cc.instantiate(cocosz.resMgr.getRes("gameBg", cc.Prefab));
        Game.addChild(gameBg);


    }

    private _initGame2() {
        let Game = cc.find("Canvas/Game");
        window.onGameStart(1, (cocosz.dataMgr.CurLevelId + 1));


        let gameBg = cc.instantiate(cocosz.resMgr.getRes("gameBg", cc.Prefab));
        gameBg.zIndex -= 999;
        Game.parent.addChild(gameBg);


        cocosz.gameMgr.isGameOver = false;
        cocosz.gameMgr.isLeftBalloon = false;
        cocosz.gameMgr.isrightBalloon = false;
        cocosz.gameMgr.isOpen = false;
        cocosz.gameMgr.isFeed = false;
        // cocosz.gameMgr.isOpenRewardLevel = false;
        cocosz.gameMgr.fraction = 0

        cocosz.gameMgr.surplusLevelNum = 0
        cocosz.gameMgr.touchNum = 0;

        // let num = this._getLevelID()
        // if (cocosz.dataMgr.CurLevelId >= 120) {

        cocosz.gameMgr.curLevelID = cocosz.dataMgr.CurLevelId;


        // if (cocosz.gameMgr.LevelNum >= 6) {
        //     cocosz.gameMgr.isOpenRewardLevel = true;
        // }

        // if (cocosz.gameMgr.LevelNum2 >= 2) {

        //     cocosz.gameMgr.isOpenLottery = true;
        // }


        // if (cocosz.gameMgr.isOpenRewardLevel) {
        //     Msg.Show("特殊关卡已触发,过关后即可进入特殊关卡");
        // }
        // else if (cocosz.gameMgr.isOpenLottery) {
        //     Msg.Show("幸运抽抽抽已触发,过关后即可抽取大奖");
        // }
        // if (cocosz.dataMgr.MaxUnlockLevelCount < cocosz.gameMgr.curLevelID) {
        //     cocosz.dataMgr.MaxUnlockLevelCount = cocosz.gameMgr.curLevelID
        // }
        // //     // cocosz.dataMgr.CurLevelId = Math.floor(((cocosz.gameMgr.curLevelID - 120) % 110) * Math.random()) + 20;

        // cc.log("gameMgr.curLevelID:" + cocosz.gameMgr.curLevelID, "dataMgr.CurLevelId:" + cocosz.dataMgr.CurLevelId)
        // if (cocosz.dataMgr.CurLevelId >= 140) {

        //     cocosz.dataMgr.CurLevelId = cocosz.dataMgr.getRamdomLevel();
        //     if (cocosz.dataMgr.CurLevelId >= 120) {
        //         cocosz.gameMgr.surplusLevelNum++;
        //         cc.log(cocosz.gameMgr.surplusLevelNum, "--cocosz.gameMgr.surplusLevelNum")
        //     }
        //     if (cocosz.dataMgr.CurLevelId >= 130) {
        //         cocosz.gameMgr.surplusLevelNum++;
        //     }
        // }
        // else {
        //     if (cocosz.dataMgr.CurLevelId >= 120) {

        //         this.onGetLevel2();
        //     }
        //     else {
        //         this.onGetLevel();
        //     }
        // }
        // if (cocosz.dataMgr.CurLevelId == 129) {
        //     cocosz.gameMgr.surplusLevelNum = 1;
        // }



        let levelN = +cocosz.dataMgr.CurLevelId
        if (levelN >= 100) {
            cocosz.dataMgr.CurLevelId %= 100;
            cocosz.dataMgr.CurLevelId += 20;
        }

        if (cocosz.dataMgr.CurLevelId >= 80) {
            cocosz.dataMgr.CurLevelId += 40;
        }
        let str = "map" + (cocosz.dataMgr.CurLevelId + 1);
        let mapData = cocosz.resMgr.getRes("MapData2", cc.JsonAsset).json[str];





        for (let idx of [139]) {
            if (cocosz.dataMgr.CurLevelId == idx) {
                cocosz.gameMgr.surplusLevelNum++;
            }
        }


        for (let dect of mapData) {
            let childName = dect.name;

            if (childName == "mapMaskPoint") {
                let list = dect["list"];

                let list2 = [];
                for (let list3 of list) {
                    let list4 = []
                    for (let pos of list3) {
                        let a = cc.v2(pos.x, pos.y);
                        list4.push(a);
                    }
                    list2.push(list4);
                }
                list = list2;

                let prefab = cocosz.resMgr.getRes("mapMask", cc.Prefab)
                let node = cc.instantiate(prefab);
                // node.x = list.x
                // node.y = list.y

                node.setPosition(cc.v2(dect.x, dect.y));
                Game.addChild(node);
                node.zIndex -= 999;
                let mask: cc.Mask = node.getComponent(cc.Mask);
                let graphics = mask._graphics;
                let graphics2: cc.Graphics = node.getChildByName("line").getComponent(cc.Graphics);
                let rb = node.addComponent(cc.RigidBody);
                rb.type = cc.RigidBodyType.Static;

                for (let point of list) {
                    let collider = node.addComponent(cc.PhysicsPolygonCollider);
                    collider.points = [].concat(point);
                    collider.apply();

                    graphics.moveTo(point[0].x, point[0].y);
                    for (let v2 of point) {
                        graphics.lineTo(v2.x, v2.y);
                    }
                    graphics.fill();


                    if (cocosz.dataMgr.CurLevelId < 120) {
                        graphics2.lineWidth = 15;
                        graphics2.strokeColor = new cc.Color(40, 33, 13, 255);
                        graphics2.moveTo(point[0].x, point[0].y);
                        for (let v2 of point) {
                            graphics2.lineTo(v2.x, v2.y);
                        }
                        graphics2.lineTo(point[0].x, point[0].y);
                        graphics2.stroke();
                    }
                }


            }
            else if (childName == "sandMaskPoint") {

                // let point = child.getComponent(cc.PhysicsPolygonCollider).points;
                // let component = child.getComponents(cc.PhysicsPolygonCollider);
                let list = dect["list"];

                let list2 = [];
                for (let list3 of list) {
                    let list4 = []
                    for (let pos of list3) {
                        let a = cc.v2(pos.x, pos.y);
                        list4.push(a);
                    }
                    list2.push(list4);
                }
                list = list2;


                let prefab = cocosz.resMgr.getRes("sandMask", cc.Prefab)
                let node = cc.instantiate(prefab);
                node.x = dect.x
                node.y = dect.y
                cc.log(dect)
                Game.addChild(node);
                node.zIndex -= 998;
                let script = node.getChildByName("node_dirty").getComponent("test");
                script.reset(list)
                let mask: cc.Mask = node.getComponent(cc.Mask);
                let graphics = mask._graphics;

                // graphics.moveTo(point[0].x, point[0].y);
                // for (let v2 of point) {
                //     graphics.lineTo(v2.x, v2.y);
                // }
                // graphics.fill();

                for (let point of list) {
                    graphics.moveTo(point[0].x, point[0].y);
                    for (let v2 of point) {
                        graphics.lineTo(v2.x, v2.y);
                    }
                    graphics.fill();
                }
            }

            else if (childName == "baffle" || childName == "handTips" || childName == "role" || childName == "fan") {
                let data = dect;
                // cc.log(data, childName);
                let prefab = cocosz.resMgr.getRes(childName, cc.Prefab);
                let node = cc.instantiate(prefab);
                if (data.scale) {
                    node.scale = data.scale;
                }
                if (data.angle) {
                    node.angle = data.angle;
                }
                node.x = data.x;
                node.y = data.y;
                Game.addChild(node);
            }

            else if (childName == "propMoveFloor" || childName == "enemy" || childName == "prop") {
                let parent = new cc.Node;
                parent.name = childName;
                // cc.log(dect)
                parent.x = dect.x;
                parent.y = dect.y;
                for (let data of dect.list) {
                    // let dect = mapData[childName][child2Name];
                    let prefab = cocosz.resMgr.getRes(data.name, cc.Prefab);
                    let node = cc.instantiate(prefab);

                    if (data.name == "carton") {
                        parent.zIndex += 1003
                    }
                    if (data.scaleX) {

                        node.scaleX = data.scaleX;
                    }
                    if (data.scaleY) {

                        node.scaleY = data.scaleY;
                    }
                    if (data.width) {

                        node.width = data.width;
                    }
                    if (data.angle) {
                        node.angle = data.angle;
                    }
                    if (data.x) {
                        node.x = data.x
                    }
                    if (data.y) {
                        node.y = data.y
                    }
                    // node.setPosition(cc.v2(data.x, data.y));
                    if (data.name == "nimiCactus") {
                        node.angle += 360 * Math.random()
                    }
                    else if (data.name == "floor11") {
                        // cc.log(data)
                        node.getChildByName("rocket").scaleX = data["rocket"].scaleX;
                    }
                    else if (data.name == "floor17") {
                        let floor = data["floor"];
                        cc.log(floor)
                        node.getChildByName("floor").x = floor.x;
                        node.getChildByName("floor").y = floor.y;
                        node.getChildByName("floor").angle = floor.angle;
                        node.getChildByName("floor").scaleX = floor.scaleX;
                        node.getChildByName("floor").scaleY = floor.scaleY;
                    }
                    else if (data.name == "floorRotetaCom") {
                        let floor = data["floor"];
                        let direction = data["direction"];
                        cc.log(data)
                        node.getChildByName("floor").angle = floor.angle;
                        node.getChildByName("floor").scaleX = floor.scaleX;
                        node.getChildByName("floor").scaleY = floor.scaleY;


                        node.getChildByName("direction").angle = direction.angle;
                        node.getChildByName("direction").scaleX = direction.scaleX;
                        node.getChildByName("direction").scaleY = direction.scaleY;
                    }
                    parent.addChild(node);
                }
                Game.addChild(parent);
            }
        }



    }

    private _getLevelID() {
        let num = 0;

        if (cocosz.dataMgr.CurLevelId >= 120) {

        }

        return num
    }


    private _initGame() {
        let Game = cc.find("Canvas/Game");
        window.onGameStart(1, (cocosz.dataMgr.CurLevelId + 1));


        let gameBg = cc.instantiate(cocosz.resMgr.getRes("gameBg", cc.Prefab));
        Game.parent.addChild(gameBg);


        // let c = cc.tween().by(180, { angle: 360 });
        // cc.tween(gameBg.getChildByName("home_animation_light"))
        //     .repeatForever(c)
        //     .start()

        cocosz.gameMgr.isGameOver = false;
        cocosz.gameMgr.isLeftBalloon = false;
        cocosz.gameMgr.isrightBalloon = false;
        cocosz.gameMgr.isOpen = false;
        cocosz.gameMgr.isFeed = false;

        cocosz.gameMgr.surplusLevelNum = 0
        cocosz.gameMgr.touchNum = 0;

        // let num = this._getLevelID()
        // if (cocosz.dataMgr.CurLevelId >= 120) {
        cocosz.gameMgr.curLevelID = cocosz.dataMgr.CurLevelId;

        if (cocosz.dataMgr.MaxUnlockLevelCount < cocosz.gameMgr.curLevelID) {
            cocosz.dataMgr.MaxUnlockLevelCount = cocosz.gameMgr.curLevelID
        }
        //     // cocosz.dataMgr.CurLevelId = Math.floor(((cocosz.gameMgr.curLevelID - 120) % 110) * Math.random()) + 20;

        // cc.log("gameMgr.curLevelID:" + cocosz.gameMgr.curLevelID, "dataMgr.CurLevelId:" + cocosz.dataMgr.CurLevelId)
        // cocosz.dataMgr.CurLevelId %= 100;
        // let str = "level" + (cocosz.dataMgr.CurLevelId + 1)
        // cc.log(cocosz.resMgr.getRes("MapData", cc.JsonAsset).json)
        // let mapData = cocosz.resMgr.getRes("MapData", cc.JsonAsset).json[str];
        // if (cocosz.dataMgr.CurLevelId >= 80) {
        //     cocosz.dataMgr.CurLevelId += 40;
        //     str = "map" + (cocosz.dataMgr.CurLevelId + 1)
        //     mapData = cocosz.resMgr.getRes("MapData2", cc.JsonAsset).json[str];
        // }

        for (let idx of [139]) {
            if (cocosz.dataMgr.CurLevelId == idx) {
                cocosz.gameMgr.surplusLevelNum++;
            }
        }



        // if (cocosz.dataMgr.CurLevelId >= 140) {

        // cocosz.dataMgr.CurLevelId = cocosz.dataMgr.getRamdomLevel();
        // if (cocosz.dataMgr.CurLevelId >= 120) {
        //     cocosz.gameMgr.surplusLevelNum++;
        //     cc.log(cocosz.gameMgr.surplusLevelNum, "--cocosz.gameMgr.surplusLevelNum")
        // }
        // if (cocosz.dataMgr.CurLevelId >= 130) {
        //     cocosz.gameMgr.surplusLevelNum++;
        // }
        // }
        // else {
        //     if (cocosz.dataMgr.CurLevelId >= 120) {

        //         this.onGetLevel2();
        //     }
        //     else {
        //         this.onGetLevel();
        //     }
        // }
        //     cc.log(cocosz.dataMgr.CurLevelId)
        // }

        cc.log("gameMgr.curLevelID:" + cocosz.gameMgr.curLevelID, "dataMgr.CurLevelId:" + cocosz.dataMgr.CurLevelId)



        // if (cocosz.dataMgr.CurLevelId == 129) {
        //     cocosz.gameMgr.surplusLevelNum = 1;
        // }


        let levelN = +cocosz.dataMgr.CurLevelId
        if (levelN >= 100) {
            cocosz.dataMgr.CurLevelId %= 100;

            cocosz.dataMgr.CurLevelId += 20;

        }

        if (cocosz.dataMgr.CurLevelId >= 80) {
            cocosz.dataMgr.CurLevelId += 40;

        }
        let map: cc.Prefab = cocosz.resMgr.getRes("map" + (cocosz.dataMgr.CurLevelId + 1), cc.Prefab);

        if (cocosz.dataMgr.CurLevelId >= 120 && cocosz.gameMgr.curLevelID > 140) {
            map = cocosz.resMgr.getRes("map" + cocosz.dataMgr.CurLevelId, cc.Prefab)
        }

        for (let child of map.data.children) {
            if (child.name == "mapMaskPoint") {

                let component = child.getComponents(cc.PhysicsPolygonCollider);
                let list = [];
                for (let poly of component) {
                    if (poly.points) {
                        list.push(poly.points)
                    }
                }

                let prefab = cocosz.resMgr.getRes("mapMask", cc.Prefab);
                let node = cc.instantiate(prefab);
                let graphics2: cc.Graphics = node.getChildByName("line").getComponent(cc.Graphics);
                Game.addChild(node);
                cc.log(child.y, "------------child.y", list)
                node.setPosition(child.getPosition());
                node.zIndex -= 999;
                let mask: cc.Mask = node.getComponent(cc.Mask);
                let graphics = mask._graphics;
                let rb = node.addComponent(cc.RigidBody);
                rb.type = cc.RigidBodyType.Static;

                for (let point of list) {
                    let collider = node.addComponent(cc.PhysicsPolygonCollider);
                    cc.log(collider.tag, "----------collider.tag");
                    collider.tag = 0;
                    collider.points = [].concat(point);
                    collider.apply();

                    graphics.moveTo(point[0].x, point[0].y);
                    for (let v2 of point) {
                        graphics.lineTo(v2.x, v2.y);
                    }
                    graphics.fill();


                    if (cocosz.dataMgr.CurLevelId < 120) {

                        graphics2.lineWidth = 15;
                        graphics2.strokeColor = new cc.Color(40, 33, 13, 255);
                        graphics2.moveTo(point[0].x, point[0].y);
                        for (let v2 of point) {
                            graphics2.lineTo(v2.x, v2.y);
                        }
                        graphics2.lineTo(point[0].x, point[0].y);
                        graphics2.stroke();
                    }
                }


            }
            else if (child.name == "sandMaskPoint") {

                // let point = child.getComponent(cc.PhysicsPolygonCollider).points;
                let component = child.getComponents(cc.PhysicsPolygonCollider);
                let list = [];
                for (let poly of component) {
                    if (poly.points) {
                        list.push(poly.points)
                    }
                }


                let prefab = cocosz.resMgr.getRes("sandMask", cc.Prefab)
                let node = cc.instantiate(prefab);
                node.setPosition(child.getPosition())
                Game.addChild(node);
                node.zIndex -= 998;
                if (cocosz.dataMgr.CurLevelId == 119) {

                    node.zIndex += 998;
                };

                let script = node.getChildByName("node_dirty").getComponent("test");
                script.reset(list)
                let mask: cc.Mask = node.getComponent(cc.Mask);
                let graphics = mask._graphics;

                // graphics.moveTo(point[0].x, point[0].y);
                // for (let v2 of point) {
                //     graphics.lineTo(v2.x, v2.y);
                // }
                // graphics.fill();

                for (let point of list) {
                    graphics.moveTo(point[0].x, point[0].y);
                    for (let v2 of point) {
                        graphics.lineTo(v2.x, v2.y);
                    }
                    graphics.fill();
                }
            }

            else if (child.name == "role") {

                let node = cc.instantiate(cocosz.resMgr.getRes("role", cc.Prefab));
                node.setPosition(child.getPosition());
                node.scale = child.scale;
                node.angle = child.angle;
                Game.addChild(node);
            }

            else if (child.name == "baffle") {

                let prefab = cocosz.resMgr.getRes("baffle", cc.Prefab);
                let node = cc.instantiate(prefab);
                node.scale = child.scale;
                node.angle = child.angle;
                node.setPosition(child.getPosition());
                Game.addChild(node);
            }
            else if (child.name == "fan") {

                let prefab = cocosz.resMgr.getRes("fan", cc.Prefab);
                let node = cc.instantiate(prefab);
                node.scale = child.scale;
                node.angle = child.angle;
                node.setPosition(child.getPosition());
                Game.addChild(node);
            }
            else if (child.name == "handTips") {

                let prefab = cocosz.resMgr.getRes("handTips", cc.Prefab);
                let node = cc.instantiate(prefab);
                node.scale = child.scale;
                node.angle = child.angle;
                node.setPosition(child.getPosition());
                Game.addChild(node);
            }
            // else if (child.name == "cactus") {

            //     let prefab = cocosz.resMgr.getRes("cactus", cc.Prefab);
            //     let node = cc.instantiate(prefab);
            //     node.scale = child.scale;
            //     node.angle = child.angle;
            //     node.zIndex+=100
            //     node.setPosition(child.getPosition());
            //     Game.addChild(node);
            // }

            else if (child.name == "propMoveFloor" || child.name == "enemy" || child.name == "prop") {
                let parent = new cc.Node;
                parent.name = child.name;
                parent.setPosition(child.getPosition())
                for (let child2 of child.children) {
                    let prefab = cocosz.resMgr.getRes(child2.name, cc.Prefab);
                    let node = cc.instantiate(prefab);
                    if (child2.name == "carton") {
                        parent.zIndex += 1003
                    }
                    // if (child2.name == "stone") {
                    //     cc.log("----------------", node);
                    // }
                    node.scaleX = child2.scaleX;
                    node.scaleY = child2.scaleY;
                    node.width = child2.width;
                    node.angle = child2.angle;
                    if (child2.name == "nimiCactus") {
                        node.angle += 360 * Math.random()
                    }
                    if (child2.name == "floor11") {
                        node.getChildByName("rocket").scaleX = child2.getChildByName("rocket").scaleX;
                        // node.getChildByName("rocket").x = -child2.getChildByName("rocket").x;
                    }
                    if (child2.name == "floor17") {
                        let floor = child2.getChildByName("floor");
                        node.getChildByName("floor").angle = floor.angle;
                        node.getChildByName("floor").scaleX = floor.scaleX;
                        node.getChildByName("floor").scaleY = floor.scaleY;
                        node.getChildByName("floor").x = floor.x;
                        node.getChildByName("floor").y = floor.y;
                        // node.getChildByName("rocket").x = -child2.getChildByName("rocket").x;
                    }
                    if (child2.name == "floorRotetaCom") {
                        let floor = child2.getChildByName("floor");
                        let direction = child2.getChildByName("direction");
                        node.getChildByName("floor").angle = floor.angle;
                        node.getChildByName("floor").scaleX = floor.scaleX;
                        node.getChildByName("floor").scaleY = floor.scaleY;


                        node.getChildByName("direction").angle = direction.angle;
                        node.getChildByName("direction").scaleX = direction.scaleX;
                        node.getChildByName("direction").scaleY = direction.scaleY;
                    }
                    node.setPosition(child2.getPosition());
                    parent.addChild(node);
                }
                Game.addChild(parent);
            }
        }

        cc.log(Game)
        // let mapMaskPoint = map.data.getChildByName("mapMaskPoint");
        // if (mapMaskPoint) {
        //     let component = mapMaskPoint.getComponents(cc.PhysicsPolygonCollider);
        //     let list = [];
        //     for (let poly of component) {
        //         if (poly.points) {
        //             list.push(poly.points)
        //         }
        //     }

        //     let prefab = cocosz.resMgr.getRes("mapMask", cc.Prefab)
        //     let node = cc.instantiate(prefab);
        //     canvas.addChild(node);
        //     node.zIndex -= 999;
        //     let mask: cc.Mask = node.getComponent(cc.Mask);
        //     let graphics = mask._graphics;
        //     let rb = node.addComponent(cc.RigidBody);
        //     rb.type = cc.RigidBodyType.Static;

        //     for (let point of list) {
        //         let collider = node.addComponent(cc.PhysicsPolygonCollider);
        //         collider.points = [].concat(point);
        //         collider.apply();
        //         graphics.moveTo(point[0].x, point[0].y);
        //         for (let v2 of point) {
        //             graphics.lineTo(v2.x, v2.y);
        //         }
        //         graphics.fill();
        //     }
        // }


        // let sandMaskPoint = map.data.getChildByName("sandMaskPoint");
        // if (sandMaskPoint) {
        //     let point = sandMaskPoint.getComponent(cc.PhysicsPolygonCollider).points;
        //     let prefab = cocosz.resMgr.getRes("sandMask", cc.Prefab)
        //     cc.log(prefab);
        //     let node = cc.instantiate(prefab);
        //     canvas.addChild(node);
        //     node.zIndex -= 998;
        //     let script = node.getChildByName("node_dirty").getComponent("test");
        //     script.reset(point)
        //     let mask: cc.Mask = node.getComponent(cc.Mask);
        //     let graphics = mask._graphics;

        //     graphics.moveTo(point[0].x, point[0].y);
        //     for (let v2 of point) {
        //         graphics.lineTo(v2.x, v2.y);
        //     }
        //     graphics.fill();


        // }
        // let baffle = map.data.getChildByName("baffle");
        // if (baffle) {
        //     let prefab = cocosz.resMgr.getRes("baffle", cc.Prefab);
        //     let node = cc.instantiate(prefab);
        //     node.setPosition(baffle.getPosition());
        //     canvas.addChild(node);
        // }
        // let role = map.data.getChildByName("role");
        // if (role) {
        //     let node = cc.instantiate(cocosz.resMgr.getRes("role", cc.Prefab));
        //     node.setPosition(role.getPosition());
        //     canvas.getChildByName("roleMag").addChild(node);
        // }
    }


    private _initRes() {
    }

}
