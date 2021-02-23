"use strict";
cc._RF.push(module, '4f8b3BUdxtAzZ6P7Ljpfuv/', 'NormalModelCtr');
// script/Framework/NormalModelCtr.ts

Object.defineProperty(exports, "__esModule", { value: true });
var GameCtr_1 = require("./GameCtr");
var Constant_1 = require("./Constant");
// import PangXie from "../item/PangXie";
// import JiGuang from "../item/JiGuang";
// import Wall from "../item/Wall";
var CocosZ_1 = require("./CocosZ");
var GameBgCtr_1 = require("./GameBgCtr");
// import UiLottery from "../Ui/UiLottery";
// import { utils } from "../common-plugin/Scripts/Utils";
// import { utils } from "../statistic/Utils";
// import RoleController from "../role/RoleController";
// import GameBgCtr from "../GameBgCtr";
// import RongYan from "../item/RongYan";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var levelDect = {
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
};
var NormalModelCtr = /** @class */ (function (_super) {
    __extends(NormalModelCtr, _super);
    function NormalModelCtr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._itemList = [];
        _this._Num = 0; //适应高度与原高度的差值
        _this.GameNode = null;
        _this._gameBg = null;
        _this._BgNode = null;
        _this._lizi = null;
        _this._DecorateType17Pos = {};
        _this.supplement = null;
        _this.supplement2 = null;
        return _this;
    }
    NormalModelCtr.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.GameNode = cc.find("Canvas/Game");
        this._lizi = CocosZ_1.cocosz.resMgr.getRes("lizi", cc.Prefab);
        this._initRes();
        this._gameState = Constant_1.GameState.Prepare;
        if (cc.find("Canvas").height > 2000) {
            this._Num = cc.find("Canvas").height - 1920;
            if (this._Num != 0) {
                this._Num *= 0.5;
            }
        }
    };
    NormalModelCtr.prototype.start = function () {
        cc.director.getScheduler().enableForTarget(this);
        this._initBg();
        if (CocosZ_1.cocosz.sceneMgr.sceneName == "Game") {
            // this._initGame()
            this._initGame2();
        }
        else if (CocosZ_1.cocosz.sceneMgr.sceneName == "Game2") {
            this._initEndlessGame();
        }
    };
    NormalModelCtr.prototype.onEnable = function () {
        cc.game.on(Constant_1.default.E_GAME_LOGIC, this._onMessageHandlerr, this);
        cc.game.on(Constant_1.default.E_LEVEL_COMPLETE, function () {
            // cocosz.audioMgr.playVectoryEffect();
            // let node = cc.instantiate(this._lizi);
            // node.parent = this.GameNode;
            // node.position = cc.Vec2.ZERO;
        }, this);
    };
    NormalModelCtr.prototype.onDisable = function () {
        cc.game.targetOff(this);
        this.unscheduleAllCallbacks();
    };
    NormalModelCtr.prototype._handleInput = function () {
        if (this._gameState == Constant_1.GameState.Prepare) {
            this._gameState = Constant_1.GameState.Start;
            cc.game.emit(Constant_1.default.E_GAME_LOGIC, { type: Constant_1.default.E_GAME_START });
        }
    };
    NormalModelCtr.prototype._onMessageHandlerr = function (event) {
        switch (event.type) {
            case Constant_1.default.E_GAME_START: {
                if (this._gameState == Constant_1.GameState.Prepare) {
                    this._gameState = Constant_1.GameState.Start;
                }
                if (this.GameNode.getChildByName("Guide")) {
                    this.GameNode.getChildByName("Guide").destroy();
                }
                // utils.StartGame((cocosz.dataMgr.CurLevelId + 1).toString());
                break;
            }
            case Constant_1.default.E_LEVEL_FAILED: {
                // 通关失败
                this._gameState = Constant_1.GameState.Failed;
                this.LevelUp();
                break;
            }
            case Constant_1.default.E_LEVEL_COMPLETE: {
                // 通关成功
                this._gameState = Constant_1.GameState.Success;
                this.LevelUp();
                if (this._BgNode) {
                    this._initBg();
                }
                break;
            }
        }
    };
    NormalModelCtr.prototype.LevelUp = function () {
        this.GameNode.removeAllChildren();
        this._gameState = Constant_1.GameState.Prepare;
    };
    NormalModelCtr.prototype._initBg = function () {
        this._gameBg = new GameBgCtr_1.default();
        this._gameBg.initBG();
        this._BgNode = cc.find("Canvas/BG");
    };
    NormalModelCtr.prototype.onGetLevel = function () {
        for (var idx in levelDect) {
            if (idx == CocosZ_1.cocosz.dataMgr.CurLevelId.toString()) {
                if ((CocosZ_1.cocosz.dataMgr.CurLevelId + 1) % 5 == 0) {
                    CocosZ_1.cocosz.gameMgr.surplusLevelNum++;
                }
                if ((CocosZ_1.cocosz.dataMgr.CurLevelId + 1) % 10 == 0) {
                    CocosZ_1.cocosz.gameMgr.surplusLevelNum++;
                }
                CocosZ_1.cocosz.dataMgr.CurLevelId = levelDect[idx];
                cc.log("----cocosz.dataMgr.CurLevelId---onGetLevel--", CocosZ_1.cocosz.dataMgr.CurLevelId);
                // if (cocosz.dataMgr.CurLevelId > 120) {
                //     for (let idx2 in levelDect) {
                //         if (levelDect[idx2] == idx) {
                //             cocosz.dataMgr.CurLevelId = +idx2
                //         }
                //     }
                // }
            }
        }
    };
    NormalModelCtr.prototype.onGetLevel2 = function () {
        for (var idx in levelDect) {
            if (levelDect[idx] == CocosZ_1.cocosz.dataMgr.CurLevelId) {
                CocosZ_1.cocosz.dataMgr.CurLevelId = +idx;
                if (CocosZ_1.cocosz.dataMgr.CurLevelId > 120) {
                    CocosZ_1.cocosz.gameMgr.surplusLevelNum++;
                }
            }
        }
    };
    NormalModelCtr.prototype._initEndlessGame = function () {
        CocosZ_1.cocosz.gameMgr.isGameOver = false;
        CocosZ_1.cocosz.gameMgr.isLeftBalloon = false;
        CocosZ_1.cocosz.gameMgr.isrightBalloon = false;
        CocosZ_1.cocosz.gameMgr.isOpen = false;
        CocosZ_1.cocosz.gameMgr.isFeed = false;
        CocosZ_1.cocosz.gameMgr.surplusLevelNum = 0;
        CocosZ_1.cocosz.gameMgr.touchNum = 0;
        CocosZ_1.cocosz.gameMgr.curLevelID = CocosZ_1.cocosz.dataMgr.CurLevelId;
        if (CocosZ_1.cocosz.dataMgr.MaxUnlockLevelCount < CocosZ_1.cocosz.gameMgr.curLevelID) {
            CocosZ_1.cocosz.dataMgr.MaxUnlockLevelCount = CocosZ_1.cocosz.gameMgr.curLevelID;
        }
        // window.onGameEvent(3, "无尽模式开始", 1);
        var Game = cc.find("Canvas/gameBG");
        var gameBg = cc.instantiate(CocosZ_1.cocosz.resMgr.getRes("gameBg", cc.Prefab));
        Game.addChild(gameBg);
    };
    NormalModelCtr.prototype._initGame2 = function () {
        var Game = cc.find("Canvas/Game");
        window.onGameStart(1, (CocosZ_1.cocosz.dataMgr.CurLevelId + 1));
        var gameBg = cc.instantiate(CocosZ_1.cocosz.resMgr.getRes("gameBg", cc.Prefab));
        gameBg.zIndex -= 999;
        Game.parent.addChild(gameBg);
        CocosZ_1.cocosz.gameMgr.isGameOver = false;
        CocosZ_1.cocosz.gameMgr.isLeftBalloon = false;
        CocosZ_1.cocosz.gameMgr.isrightBalloon = false;
        CocosZ_1.cocosz.gameMgr.isOpen = false;
        CocosZ_1.cocosz.gameMgr.isFeed = false;
        // cocosz.gameMgr.isOpenRewardLevel = false;
        CocosZ_1.cocosz.gameMgr.fraction = 0;
        CocosZ_1.cocosz.gameMgr.isDelay = false;
        CocosZ_1.cocosz.gameMgr.surplusLevelNum = 0;
        CocosZ_1.cocosz.gameMgr.touchNum = 0;
        // let num = this._getLevelID()
        // if (cocosz.dataMgr.CurLevelId >= 120) {
        CocosZ_1.cocosz.gameMgr.curLevelID = CocosZ_1.cocosz.dataMgr.CurLevelId;
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
        var levelN = +CocosZ_1.cocosz.dataMgr.CurLevelId;
        if (levelN >= 100) {
            CocosZ_1.cocosz.dataMgr.CurLevelId %= 100;
            CocosZ_1.cocosz.dataMgr.CurLevelId += 20;
        }
        if (CocosZ_1.cocosz.dataMgr.CurLevelId >= 80) {
            CocosZ_1.cocosz.dataMgr.CurLevelId += 40;
        }
        var str = "map" + (CocosZ_1.cocosz.dataMgr.CurLevelId + 1);
        var mapData = CocosZ_1.cocosz.resMgr.getRes("MapData2", cc.JsonAsset).json[str];
        for (var _i = 0, _a = [139]; _i < _a.length; _i++) {
            var idx = _a[_i];
            if (CocosZ_1.cocosz.dataMgr.CurLevelId == idx) {
                CocosZ_1.cocosz.gameMgr.surplusLevelNum++;
            }
        }
        for (var _b = 0, mapData_1 = mapData; _b < mapData_1.length; _b++) {
            var dect = mapData_1[_b];
            var childName = dect.name;
            if (childName == "mapMaskPoint") {
                var list = dect["list"];
                var list2 = [];
                for (var _c = 0, list_1 = list; _c < list_1.length; _c++) {
                    var list3 = list_1[_c];
                    var list4 = [];
                    for (var _d = 0, list3_1 = list3; _d < list3_1.length; _d++) {
                        var pos = list3_1[_d];
                        var a = cc.v2(pos.x, pos.y);
                        list4.push(a);
                    }
                    list2.push(list4);
                }
                list = list2;
                var prefab = CocosZ_1.cocosz.resMgr.getRes("mapMask", cc.Prefab);
                var node = cc.instantiate(prefab);
                // node.x = list.x
                // node.y = list.y
                node.setPosition(cc.v2(dect.x, dect.y));
                Game.addChild(node);
                node.zIndex -= 999;
                var mask = node.getComponent(cc.Mask);
                var graphics = mask._graphics;
                var graphics2 = node.getChildByName("line").getComponent(cc.Graphics);
                var rb = node.addComponent(cc.RigidBody);
                rb.type = cc.RigidBodyType.Static;
                for (var _e = 0, list_2 = list; _e < list_2.length; _e++) {
                    var point = list_2[_e];
                    var collider = node.addComponent(cc.PhysicsPolygonCollider);
                    collider.points = [].concat(point);
                    collider.apply();
                    graphics.moveTo(point[0].x, point[0].y);
                    for (var _f = 0, point_1 = point; _f < point_1.length; _f++) {
                        var v2 = point_1[_f];
                        graphics.lineTo(v2.x, v2.y);
                    }
                    graphics.fill();
                    if (CocosZ_1.cocosz.dataMgr.CurLevelId < 120) {
                        graphics2.lineWidth = 15;
                        graphics2.strokeColor = new cc.Color(40, 33, 13, 255);
                        graphics2.moveTo(point[0].x, point[0].y);
                        for (var _g = 0, point_2 = point; _g < point_2.length; _g++) {
                            var v2 = point_2[_g];
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
                var list = dect["list"];
                var list2 = [];
                for (var _h = 0, list_3 = list; _h < list_3.length; _h++) {
                    var list3 = list_3[_h];
                    var list4 = [];
                    for (var _j = 0, list3_2 = list3; _j < list3_2.length; _j++) {
                        var pos = list3_2[_j];
                        var a = cc.v2(pos.x, pos.y);
                        list4.push(a);
                    }
                    list2.push(list4);
                }
                list = list2;
                var prefab = CocosZ_1.cocosz.resMgr.getRes("sandMask", cc.Prefab);
                var node = cc.instantiate(prefab);
                node.x = dect.x;
                node.y = dect.y;
                cc.log(dect);
                Game.addChild(node);
                node.zIndex -= 998;
                var script = node.getChildByName("node_dirty").getComponent("test");
                script.reset(list);
                var mask = node.getComponent(cc.Mask);
                var graphics = mask._graphics;
                // graphics.moveTo(point[0].x, point[0].y);
                // for (let v2 of point) {
                //     graphics.lineTo(v2.x, v2.y);
                // }
                // graphics.fill();
                for (var _k = 0, list_4 = list; _k < list_4.length; _k++) {
                    var point = list_4[_k];
                    graphics.moveTo(point[0].x, point[0].y);
                    for (var _l = 0, point_3 = point; _l < point_3.length; _l++) {
                        var v2 = point_3[_l];
                        graphics.lineTo(v2.x, v2.y);
                    }
                    graphics.fill();
                }
            }
            else if (childName == "baffle" || childName == "handTips" || childName == "role" || childName == "fan") {
                var data = dect;
                // cc.log(data, childName);
                var prefab = CocosZ_1.cocosz.resMgr.getRes(childName, cc.Prefab);
                var node = cc.instantiate(prefab);
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
                var parent = new cc.Node;
                parent.name = childName;
                // cc.log(dect)
                parent.x = dect.x;
                parent.y = dect.y;
                for (var _m = 0, _o = dect.list; _m < _o.length; _m++) {
                    var data = _o[_m];
                    // let dect = mapData[childName][child2Name];
                    var prefab = CocosZ_1.cocosz.resMgr.getRes(data.name, cc.Prefab);
                    var node = cc.instantiate(prefab);
                    if (data.name == "carton") {
                        parent.zIndex += 1003;
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
                        node.x = data.x;
                    }
                    if (data.y) {
                        node.y = data.y;
                    }
                    // node.setPosition(cc.v2(data.x, data.y));
                    if (data.name == "nimiCactus") {
                        node.angle += 360 * Math.random();
                    }
                    else if (data.name == "floor11") {
                        // cc.log(data)
                        node.getChildByName("rocket").scaleX = data["rocket"].scaleX;
                    }
                    else if (data.name == "floor17") {
                        var floor = data["floor"];
                        cc.log(floor);
                        node.getChildByName("floor").x = floor.x;
                        node.getChildByName("floor").y = floor.y;
                        node.getChildByName("floor").angle = floor.angle;
                        node.getChildByName("floor").scaleX = floor.scaleX;
                        node.getChildByName("floor").scaleY = floor.scaleY;
                    }
                    else if (data.name == "floorRotetaCom") {
                        var floor = data["floor"];
                        var direction = data["direction"];
                        cc.log(data);
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
    };
    NormalModelCtr.prototype._getLevelID = function () {
        var num = 0;
        if (CocosZ_1.cocosz.dataMgr.CurLevelId >= 120) {
        }
        return num;
    };
    NormalModelCtr.prototype._initGame = function () {
        var Game = cc.find("Canvas/Game");
        window.onGameStart(1, (CocosZ_1.cocosz.dataMgr.CurLevelId + 1));
        var gameBg = cc.instantiate(CocosZ_1.cocosz.resMgr.getRes("gameBg", cc.Prefab));
        Game.parent.addChild(gameBg);
        // let c = cc.tween().by(180, { angle: 360 });
        // cc.tween(gameBg.getChildByName("home_animation_light"))
        //     .repeatForever(c)
        //     .start()
        CocosZ_1.cocosz.gameMgr.isGameOver = false;
        CocosZ_1.cocosz.gameMgr.isLeftBalloon = false;
        CocosZ_1.cocosz.gameMgr.isrightBalloon = false;
        CocosZ_1.cocosz.gameMgr.isOpen = false;
        CocosZ_1.cocosz.gameMgr.isFeed = false;
        CocosZ_1.cocosz.gameMgr.surplusLevelNum = 0;
        CocosZ_1.cocosz.gameMgr.touchNum = 0;
        // let num = this._getLevelID()
        // if (cocosz.dataMgr.CurLevelId >= 120) {
        CocosZ_1.cocosz.gameMgr.curLevelID = CocosZ_1.cocosz.dataMgr.CurLevelId;
        if (CocosZ_1.cocosz.dataMgr.MaxUnlockLevelCount < CocosZ_1.cocosz.gameMgr.curLevelID) {
            CocosZ_1.cocosz.dataMgr.MaxUnlockLevelCount = CocosZ_1.cocosz.gameMgr.curLevelID;
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
        for (var _i = 0, _a = [139]; _i < _a.length; _i++) {
            var idx = _a[_i];
            if (CocosZ_1.cocosz.dataMgr.CurLevelId == idx) {
                CocosZ_1.cocosz.gameMgr.surplusLevelNum++;
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
        cc.log("gameMgr.curLevelID:" + CocosZ_1.cocosz.gameMgr.curLevelID, "dataMgr.CurLevelId:" + CocosZ_1.cocosz.dataMgr.CurLevelId);
        // if (cocosz.dataMgr.CurLevelId == 129) {
        //     cocosz.gameMgr.surplusLevelNum = 1;
        // }
        var levelN = +CocosZ_1.cocosz.dataMgr.CurLevelId;
        if (levelN >= 100) {
            CocosZ_1.cocosz.dataMgr.CurLevelId %= 100;
            CocosZ_1.cocosz.dataMgr.CurLevelId += 20;
        }
        if (CocosZ_1.cocosz.dataMgr.CurLevelId >= 80) {
            CocosZ_1.cocosz.dataMgr.CurLevelId += 40;
        }
        var map = CocosZ_1.cocosz.resMgr.getRes("map" + (CocosZ_1.cocosz.dataMgr.CurLevelId + 1), cc.Prefab);
        if (CocosZ_1.cocosz.dataMgr.CurLevelId >= 120 && CocosZ_1.cocosz.gameMgr.curLevelID > 140) {
            map = CocosZ_1.cocosz.resMgr.getRes("map" + CocosZ_1.cocosz.dataMgr.CurLevelId, cc.Prefab);
        }
        for (var _b = 0, _c = map.data.children; _b < _c.length; _b++) {
            var child = _c[_b];
            if (child.name == "mapMaskPoint") {
                var component = child.getComponents(cc.PhysicsPolygonCollider);
                var list = [];
                for (var _d = 0, component_1 = component; _d < component_1.length; _d++) {
                    var poly = component_1[_d];
                    if (poly.points) {
                        list.push(poly.points);
                    }
                }
                var prefab = CocosZ_1.cocosz.resMgr.getRes("mapMask", cc.Prefab);
                var node = cc.instantiate(prefab);
                var graphics2 = node.getChildByName("line").getComponent(cc.Graphics);
                Game.addChild(node);
                cc.log(child.y, "------------child.y", list);
                node.setPosition(child.getPosition());
                node.zIndex -= 999;
                var mask = node.getComponent(cc.Mask);
                var graphics = mask._graphics;
                var rb = node.addComponent(cc.RigidBody);
                rb.type = cc.RigidBodyType.Static;
                for (var _e = 0, list_5 = list; _e < list_5.length; _e++) {
                    var point = list_5[_e];
                    var collider = node.addComponent(cc.PhysicsPolygonCollider);
                    cc.log(collider.tag, "----------collider.tag");
                    collider.tag = 0;
                    collider.points = [].concat(point);
                    collider.apply();
                    graphics.moveTo(point[0].x, point[0].y);
                    for (var _f = 0, point_4 = point; _f < point_4.length; _f++) {
                        var v2 = point_4[_f];
                        graphics.lineTo(v2.x, v2.y);
                    }
                    graphics.fill();
                    if (CocosZ_1.cocosz.dataMgr.CurLevelId < 120) {
                        graphics2.lineWidth = 15;
                        graphics2.strokeColor = new cc.Color(40, 33, 13, 255);
                        graphics2.moveTo(point[0].x, point[0].y);
                        for (var _g = 0, point_5 = point; _g < point_5.length; _g++) {
                            var v2 = point_5[_g];
                            graphics2.lineTo(v2.x, v2.y);
                        }
                        graphics2.lineTo(point[0].x, point[0].y);
                        graphics2.stroke();
                    }
                }
            }
            else if (child.name == "sandMaskPoint") {
                // let point = child.getComponent(cc.PhysicsPolygonCollider).points;
                var component = child.getComponents(cc.PhysicsPolygonCollider);
                var list = [];
                for (var _h = 0, component_2 = component; _h < component_2.length; _h++) {
                    var poly = component_2[_h];
                    if (poly.points) {
                        list.push(poly.points);
                    }
                }
                var prefab = CocosZ_1.cocosz.resMgr.getRes("sandMask", cc.Prefab);
                var node = cc.instantiate(prefab);
                node.setPosition(child.getPosition());
                Game.addChild(node);
                node.zIndex -= 998;
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 119) {
                    node.zIndex += 998;
                }
                ;
                var script = node.getChildByName("node_dirty").getComponent("test");
                script.reset(list);
                var mask = node.getComponent(cc.Mask);
                var graphics = mask._graphics;
                // graphics.moveTo(point[0].x, point[0].y);
                // for (let v2 of point) {
                //     graphics.lineTo(v2.x, v2.y);
                // }
                // graphics.fill();
                for (var _j = 0, list_6 = list; _j < list_6.length; _j++) {
                    var point = list_6[_j];
                    graphics.moveTo(point[0].x, point[0].y);
                    for (var _k = 0, point_6 = point; _k < point_6.length; _k++) {
                        var v2 = point_6[_k];
                        graphics.lineTo(v2.x, v2.y);
                    }
                    graphics.fill();
                }
            }
            else if (child.name == "role") {
                var node = cc.instantiate(CocosZ_1.cocosz.resMgr.getRes("role", cc.Prefab));
                node.setPosition(child.getPosition());
                node.scale = child.scale;
                node.angle = child.angle;
                Game.addChild(node);
            }
            else if (child.name == "baffle") {
                var prefab = CocosZ_1.cocosz.resMgr.getRes("baffle", cc.Prefab);
                var node = cc.instantiate(prefab);
                node.scale = child.scale;
                node.angle = child.angle;
                node.setPosition(child.getPosition());
                Game.addChild(node);
            }
            else if (child.name == "fan") {
                var prefab = CocosZ_1.cocosz.resMgr.getRes("fan", cc.Prefab);
                var node = cc.instantiate(prefab);
                node.scale = child.scale;
                node.angle = child.angle;
                node.setPosition(child.getPosition());
                Game.addChild(node);
            }
            else if (child.name == "handTips") {
                var prefab = CocosZ_1.cocosz.resMgr.getRes("handTips", cc.Prefab);
                var node = cc.instantiate(prefab);
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
                var parent = new cc.Node;
                parent.name = child.name;
                parent.setPosition(child.getPosition());
                for (var _l = 0, _m = child.children; _l < _m.length; _l++) {
                    var child2 = _m[_l];
                    var prefab = CocosZ_1.cocosz.resMgr.getRes(child2.name, cc.Prefab);
                    var node = cc.instantiate(prefab);
                    if (child2.name == "carton") {
                        parent.zIndex += 1003;
                    }
                    // if (child2.name == "stone") {
                    //     cc.log("----------------", node);
                    // }
                    node.scaleX = child2.scaleX;
                    node.scaleY = child2.scaleY;
                    node.width = child2.width;
                    node.angle = child2.angle;
                    if (child2.name == "nimiCactus") {
                        node.angle += 360 * Math.random();
                    }
                    if (child2.name == "floor11") {
                        node.getChildByName("rocket").scaleX = child2.getChildByName("rocket").scaleX;
                        // node.getChildByName("rocket").x = -child2.getChildByName("rocket").x;
                    }
                    if (child2.name == "floor17") {
                        var floor = child2.getChildByName("floor");
                        node.getChildByName("floor").angle = floor.angle;
                        node.getChildByName("floor").scaleX = floor.scaleX;
                        node.getChildByName("floor").scaleY = floor.scaleY;
                        node.getChildByName("floor").x = floor.x;
                        node.getChildByName("floor").y = floor.y;
                        // node.getChildByName("rocket").x = -child2.getChildByName("rocket").x;
                    }
                    if (child2.name == "floorRotetaCom") {
                        var floor = child2.getChildByName("floor");
                        var direction = child2.getChildByName("direction");
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
        cc.log(Game);
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
    };
    NormalModelCtr.prototype._initRes = function () {
    };
    NormalModelCtr = __decorate([
        ccclass
    ], NormalModelCtr);
    return NormalModelCtr;
}(GameCtr_1.default));
exports.default = NormalModelCtr;

cc._RF.pop();