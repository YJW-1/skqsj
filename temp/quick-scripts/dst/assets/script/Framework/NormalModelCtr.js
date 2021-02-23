
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/NormalModelCtr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXE5vcm1hbE1vZGVsQ3RyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBZ0M7QUFDaEMsdUNBQWtHO0FBQ2xHLHlDQUF5QztBQUN6Qyx5Q0FBeUM7QUFDekMsbUNBQW1DO0FBQ25DLG1DQUEwQztBQUMxQyx5Q0FBb0M7QUFHcEMsMkNBQTJDO0FBQzNDLDBEQUEwRDtBQUMxRCw4Q0FBOEM7QUFFOUMsdURBQXVEO0FBQ3ZELHdDQUF3QztBQUN4Qyx5Q0FBeUM7QUFFbkMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUU1QyxJQUFJLFNBQVMsR0FBRztJQUNaLEtBQUssRUFBRSxHQUFHO0lBQ1YsS0FBSyxFQUFFLEdBQUc7SUFDVixJQUFJLEVBQUUsR0FBRztJQUNULElBQUksRUFBRSxHQUFHO0lBQ1QsSUFBSSxFQUFFLEdBQUc7SUFDVCxJQUFJLEVBQUUsR0FBRztJQUNULElBQUksRUFBRSxHQUFHO0lBQ1QsSUFBSSxFQUFFLEdBQUc7SUFDVCxJQUFJLEVBQUUsR0FBRztJQUNULElBQUksRUFBRSxHQUFHO0lBR1QsSUFBSSxFQUFFLEdBQUc7SUFDVCxJQUFJLEVBQUUsR0FBRztJQUNULElBQUksRUFBRSxHQUFHO0lBQ1QsSUFBSSxFQUFFLEdBQUc7SUFDVCxLQUFLLEVBQUUsR0FBRztJQUNWLEtBQUssRUFBRSxHQUFHO0lBQ1YsS0FBSyxFQUFFLEdBQUc7SUFDVixLQUFLLEVBQUUsR0FBRztJQUNWLEtBQUssRUFBRSxHQUFHO0lBQ1YsS0FBSyxFQUFFLEdBQUc7Q0FDYixDQUFBO0FBR0Q7SUFBNEMsa0NBQU87SUFEbkQ7UUFBQSxxRUE4MEJDO1FBMzBCVyxlQUFTLEdBQWMsRUFBRSxDQUFDO1FBRTFCLFVBQUksR0FBVyxDQUFDLENBQUMsQ0FBQSxhQUFhO1FBQzlCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsYUFBTyxHQUFjLElB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Q0FBQztJQTMwQmdCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0E2MEJsQztJQUFELHFCQUFDO0NBNzBCRCxBQTYwQkMsQ0E3MEIyQyxpQkFBTyxHQTYwQmxEO2tCQTcwQm9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZUN0ciBmcm9tIFwiLi9HYW1lQ3RyXCI7XHJcbmltcG9ydCBDb25zdGFudCwgeyBHYW1lU3RhdGUsIFBhbmVsTmFtZSwgUGFnZU5hbWUsIFByZWZhYk5hbWUsIEZsb29yVHlwZSwgdGFnIH0gZnJvbSBcIi4vQ29uc3RhbnRcIjtcclxuLy8gaW1wb3J0IFBhbmdYaWUgZnJvbSBcIi4uL2l0ZW0vUGFuZ1hpZVwiO1xyXG4vLyBpbXBvcnQgSmlHdWFuZyBmcm9tIFwiLi4vaXRlbS9KaUd1YW5nXCI7XHJcbi8vIGltcG9ydCBXYWxsIGZyb20gXCIuLi9pdGVtL1dhbGxcIjtcclxuaW1wb3J0IENvY29zWiwgeyBjb2Nvc3ogfSBmcm9tIFwiLi9Db2Nvc1pcIjtcclxuaW1wb3J0IEdhbWVCZ0N0ciBmcm9tIFwiLi9HYW1lQmdDdHJcIjtcclxuaW1wb3J0IE1zZyBmcm9tIFwiLi9Nc2dcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29ubmVjdGlvbiB9IGZyb20gXCJuZXRcIjtcclxuLy8gaW1wb3J0IFVpTG90dGVyeSBmcm9tIFwiLi4vVWkvVWlMb3R0ZXJ5XCI7XHJcbi8vIGltcG9ydCB7IHV0aWxzIH0gZnJvbSBcIi4uL2NvbW1vbi1wbHVnaW4vU2NyaXB0cy9VdGlsc1wiO1xyXG4vLyBpbXBvcnQgeyB1dGlscyB9IGZyb20gXCIuLi9zdGF0aXN0aWMvVXRpbHNcIjtcclxuXHJcbi8vIGltcG9ydCBSb2xlQ29udHJvbGxlciBmcm9tIFwiLi4vcm9sZS9Sb2xlQ29udHJvbGxlclwiO1xyXG4vLyBpbXBvcnQgR2FtZUJnQ3RyIGZyb20gXCIuLi9HYW1lQmdDdHJcIjtcclxuLy8gaW1wb3J0IFJvbmdZYW4gZnJvbSBcIi4uL2l0ZW0vUm9uZ1lhblwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmxldCBsZXZlbERlY3QgPSB7XHJcbiAgICBcIjEzNFwiOiAxMjksXHJcbiAgICBcIjEzOVwiOiAxMzksXHJcbiAgICBcIjQ0XCI6IDEyOCxcclxuICAgIFwiNDlcIjogMTM4LFxyXG4gICAgXCI1NFwiOiAxMjcsXHJcbiAgICBcIjU5XCI6IDEzNyxcclxuICAgIFwiNjRcIjogMTI2LFxyXG4gICAgXCI2OVwiOiAxMzYsXHJcbiAgICBcIjc0XCI6IDEyNSxcclxuICAgIFwiNzlcIjogMTM1LFxyXG5cclxuXHJcbiAgICBcIjg0XCI6IDEyNCxcclxuICAgIFwiODlcIjogMTM0LFxyXG4gICAgXCI5NFwiOiAxMjMsXHJcbiAgICBcIjk5XCI6IDEzMyxcclxuICAgIFwiMTA0XCI6IDEyMixcclxuICAgIFwiMTA5XCI6IDEzMixcclxuICAgIFwiMTE0XCI6IDEyMSxcclxuICAgIFwiMTE5XCI6IDEzMSxcclxuICAgIFwiMTI0XCI6IDEyMCxcclxuICAgIFwiMTI5XCI6IDEzMCxcclxufVxyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9ybWFsTW9kZWxDdHIgZXh0ZW5kcyBHYW1lQ3RyIHtcclxuXHJcbiAgICBwcml2YXRlIF9pdGVtTGlzdDogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfTnVtOiBudW1iZXIgPSAwOy8v6YCC5bqU6auY5bqm5LiO5Y6f6auY5bqm55qE5beu5YC8XHJcbiAgICBwcml2YXRlIEdhbWVOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2dhbWVCZzogR2FtZUJnQ3RyID0gbnVsbDtcclxuICAgIHByaXZhdGUgX0JnTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9saXppOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfRGVjb3JhdGVUeXBlMTdQb3M6IGFueSA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgc3VwcGxlbWVudDogYW55ID0gbnVsbDtcclxuICAgIHByaXZhdGUgc3VwcGxlbWVudDI6IGFueSA9IG51bGw7XHJcblxyXG5cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgc3VwZXIub25Mb2FkKCk7XHJcbiAgICAgICAgdGhpcy5HYW1lTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvR2FtZVwiKTtcclxuXHJcbiAgICAgICAgdGhpcy5fbGl6aSA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwibGl6aVwiLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgIHRoaXMuX2luaXRSZXMoKTtcclxuICAgICAgICB0aGlzLl9nYW1lU3RhdGUgPSBHYW1lU3RhdGUuUHJlcGFyZTtcclxuICAgICAgICBpZiAoY2MuZmluZChcIkNhbnZhc1wiKS5oZWlnaHQgPiAyMDAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX051bSA9IGNjLmZpbmQoXCJDYW52YXNcIikuaGVpZ2h0IC0gMTkyMDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX051bSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9OdW0gKj0gMC41O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLmVuYWJsZUZvclRhcmdldCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9pbml0QmcoKTtcclxuXHJcbiAgICAgICAgaWYgKGNvY29zei5zY2VuZU1nci5zY2VuZU5hbWUgPT0gXCJHYW1lXCIpIHtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMuX2luaXRHYW1lKClcclxuICAgICAgICAgICAgdGhpcy5faW5pdEdhbWUyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNvY29zei5zY2VuZU1nci5zY2VuZU5hbWUgPT0gXCJHYW1lMlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRFbmRsZXNzR2FtZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgY2MuZ2FtZS5vbihDb25zdGFudC5FX0dBTUVfTE9HSUMsIHRoaXMuX29uTWVzc2FnZUhhbmRsZXJyLCB0aGlzKTtcclxuICAgICAgICBjYy5nYW1lLm9uKENvbnN0YW50LkVfTEVWRUxfQ09NUExFVEUsICgpID0+IHtcclxuICAgICAgICAgICAgLy8gY29jb3N6LmF1ZGlvTWdyLnBsYXlWZWN0b3J5RWZmZWN0KCk7XHJcbiAgICAgICAgICAgIC8vIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5fbGl6aSk7XHJcbiAgICAgICAgICAgIC8vIG5vZGUucGFyZW50ID0gdGhpcy5HYW1lTm9kZTtcclxuICAgICAgICAgICAgLy8gbm9kZS5wb3NpdGlvbiA9IGNjLlZlYzIuWkVSTztcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRpc2FibGUoKSB7XHJcbiAgICAgICAgY2MuZ2FtZS50YXJnZXRPZmYodGhpcyk7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICB9XHJcbiAgICBwcm90ZWN0ZWQgX2hhbmRsZUlucHV0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9nYW1lU3RhdGUgPT0gR2FtZVN0YXRlLlByZXBhcmUpIHtcclxuICAgICAgICAgICAgdGhpcy5fZ2FtZVN0YXRlID0gR2FtZVN0YXRlLlN0YXJ0O1xyXG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9HQU1FX0xPR0lDLCB7IHR5cGU6IENvbnN0YW50LkVfR0FNRV9TVEFSVCB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb25NZXNzYWdlSGFuZGxlcnIoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIENvbnN0YW50LkVfR0FNRV9TVEFSVDoge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2dhbWVTdGF0ZSA9PSBHYW1lU3RhdGUuUHJlcGFyZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5TdGFydDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5HYW1lTm9kZS5nZXRDaGlsZEJ5TmFtZShcIkd1aWRlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5HYW1lTm9kZS5nZXRDaGlsZEJ5TmFtZShcIkd1aWRlXCIpLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHV0aWxzLlN0YXJ0R2FtZSgoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCArIDEpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBDb25zdGFudC5FX0xFVkVMX0ZBSUxFRDoge1xyXG4gICAgICAgICAgICAgICAgLy8g6YCa5YWz5aSx6LSlXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nYW1lU3RhdGUgPSBHYW1lU3RhdGUuRmFpbGVkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5MZXZlbFVwKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIENvbnN0YW50LkVfTEVWRUxfQ09NUExFVEU6IHtcclxuICAgICAgICAgICAgICAgIC8vIOmAmuWFs+aIkOWKn1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2FtZVN0YXRlID0gR2FtZVN0YXRlLlN1Y2Nlc3M7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5MZXZlbFVwKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fQmdOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faW5pdEJnKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIExldmVsVXAoKSB7XHJcbiAgICAgICAgdGhpcy5HYW1lTm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIHRoaXMuX2dhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5QcmVwYXJlO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfaW5pdEJnKCkge1xyXG4gICAgICAgIHRoaXMuX2dhbWVCZyA9IG5ldyBHYW1lQmdDdHIoKTtcclxuICAgICAgICB0aGlzLl9nYW1lQmcuaW5pdEJHKCk7XHJcbiAgICAgICAgdGhpcy5fQmdOb2RlID0gY2MuZmluZChcIkNhbnZhcy9CR1wiKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25HZXRMZXZlbCgpIHtcclxuICAgICAgICBmb3IgKGxldCBpZHggaW4gbGV2ZWxEZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChpZHggPT0gY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZC50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgKyAxKSAlIDUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvY29zei5nYW1lTWdyLnN1cnBsdXNMZXZlbE51bSsrXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkICsgMSkgJSAxMCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3Iuc3VycGx1c0xldmVsTnVtKytcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPSBsZXZlbERlY3RbaWR4XTtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIi0tLS1jb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkLS0tb25HZXRMZXZlbC0tXCIsIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQpXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPiAxMjApIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBmb3IgKGxldCBpZHgyIGluIGxldmVsRGVjdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBpZiAobGV2ZWxEZWN0W2lkeDJdID09IGlkeCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9ICtpZHgyXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkdldExldmVsMigpIHtcclxuICAgICAgICBmb3IgKGxldCBpZHggaW4gbGV2ZWxEZWN0KSB7XHJcbiAgICAgICAgICAgIGlmIChsZXZlbERlY3RbaWR4XSA9PSBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkKSB7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID0gK2lkeDtcclxuICAgICAgICAgICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID4gMTIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3Iuc3VycGx1c0xldmVsTnVtKytcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pbml0RW5kbGVzc0dhbWUoKSB7XHJcblxyXG4gICAgICAgIGNvY29zei5nYW1lTWdyLmlzR2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pc0xlZnRCYWxsb29uID0gZmFsc2U7XHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3IuaXNyaWdodEJhbGxvb24gPSBmYWxzZTtcclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pc0ZlZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3Iuc3VycGx1c0xldmVsTnVtID0gMFxyXG4gICAgICAgIGNvY29zei5nYW1lTWdyLnRvdWNoTnVtID0gMDtcclxuXHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3IuY3VyTGV2ZWxJRCA9IGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQ7XHJcblxyXG4gICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5NYXhVbmxvY2tMZXZlbENvdW50IDwgY29jb3N6LmdhbWVNZ3IuY3VyTGV2ZWxJRCkge1xyXG4gICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5NYXhVbmxvY2tMZXZlbENvdW50ID0gY29jb3N6LmdhbWVNZ3IuY3VyTGV2ZWxJRFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB3aW5kb3cub25HYW1lRXZlbnQoMywgXCLml6DlsL3mqKHlvI/lvIDlp4tcIiwgMSk7XHJcbiAgICAgICAgbGV0IEdhbWUgPSBjYy5maW5kKFwiQ2FudmFzL2dhbWVCR1wiKTtcclxuICAgICAgICBsZXQgZ2FtZUJnID0gY2MuaW5zdGFudGlhdGUoY29jb3N6LnJlc01nci5nZXRSZXMoXCJnYW1lQmdcIiwgY2MuUHJlZmFiKSk7XHJcbiAgICAgICAgR2FtZS5hZGRDaGlsZChnYW1lQmcpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfaW5pdEdhbWUyKCkge1xyXG4gICAgICAgIGxldCBHYW1lID0gY2MuZmluZChcIkNhbnZhcy9HYW1lXCIpO1xyXG4gICAgICAgIHdpbmRvdy5vbkdhbWVTdGFydCgxLCAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCArIDEpKTtcclxuXHJcblxyXG4gICAgICAgIGxldCBnYW1lQmcgPSBjYy5pbnN0YW50aWF0ZShjb2Nvc3oucmVzTWdyLmdldFJlcyhcImdhbWVCZ1wiLCBjYy5QcmVmYWIpKTtcclxuICAgICAgICBnYW1lQmcuekluZGV4IC09IDk5OTtcclxuICAgICAgICBHYW1lLnBhcmVudC5hZGRDaGlsZChnYW1lQmcpO1xyXG5cclxuXHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3IuaXNHYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIGNvY29zei5nYW1lTWdyLmlzTGVmdEJhbGxvb24gPSBmYWxzZTtcclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pc3JpZ2h0QmFsbG9vbiA9IGZhbHNlO1xyXG4gICAgICAgIGNvY29zei5nYW1lTWdyLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIGNvY29zei5nYW1lTWdyLmlzRmVlZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIGNvY29zei5nYW1lTWdyLmlzT3BlblJld2FyZExldmVsID0gZmFsc2U7XHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3IuZnJhY3Rpb24gPSAwXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3IuaXNEZWxheSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci5zdXJwbHVzTGV2ZWxOdW0gPSAwXHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3IudG91Y2hOdW0gPSAwO1xyXG5cclxuICAgICAgICAvLyBsZXQgbnVtID0gdGhpcy5fZ2V0TGV2ZWxJRCgpXHJcbiAgICAgICAgLy8gaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPj0gMTIwKSB7XHJcblxyXG4gICAgICAgIGNvY29zei5nYW1lTWdyLmN1ckxldmVsSUQgPSBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkO1xyXG5cclxuXHJcbiAgICAgICAgLy8gaWYgKGNvY29zei5nYW1lTWdyLkxldmVsTnVtID49IDYpIHtcclxuICAgICAgICAvLyAgICAgY29jb3N6LmdhbWVNZ3IuaXNPcGVuUmV3YXJkTGV2ZWwgPSB0cnVlO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKGNvY29zei5nYW1lTWdyLkxldmVsTnVtMiA+PSAyKSB7XHJcblxyXG4gICAgICAgIC8vICAgICBjb2Nvc3ouZ2FtZU1nci5pc09wZW5Mb3R0ZXJ5ID0gdHJ1ZTtcclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuICAgICAgICAvLyBpZiAoY29jb3N6LmdhbWVNZ3IuaXNPcGVuUmV3YXJkTGV2ZWwpIHtcclxuICAgICAgICAvLyAgICAgTXNnLlNob3coXCLnibnmrorlhbPljaHlt7Lop6blj5Es6L+H5YWz5ZCO5Y2z5Y+v6L+b5YWl54m55q6K5YWz5Y2hXCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIGlmIChjb2Nvc3ouZ2FtZU1nci5pc09wZW5Mb3R0ZXJ5KSB7XHJcbiAgICAgICAgLy8gICAgIE1zZy5TaG93KFwi5bm46L+Q5oq95oq95oq95bey6Kem5Y+RLOi/h+WFs+WQjuWNs+WPr+aKveWPluWkp+WlllwiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYgKGNvY29zei5kYXRhTWdyLk1heFVubG9ja0xldmVsQ291bnQgPCBjb2Nvc3ouZ2FtZU1nci5jdXJMZXZlbElEKSB7XHJcbiAgICAgICAgLy8gICAgIGNvY29zei5kYXRhTWdyLk1heFVubG9ja0xldmVsQ291bnQgPSBjb2Nvc3ouZ2FtZU1nci5jdXJMZXZlbElEXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIC8vICAgICAvLyBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID0gTWF0aC5mbG9vcigoKGNvY29zei5nYW1lTWdyLmN1ckxldmVsSUQgLSAxMjApICUgMTEwKSAqIE1hdGgucmFuZG9tKCkpICsgMjA7XHJcblxyXG4gICAgICAgIC8vIGNjLmxvZyhcImdhbWVNZ3IuY3VyTGV2ZWxJRDpcIiArIGNvY29zei5nYW1lTWdyLmN1ckxldmVsSUQsIFwiZGF0YU1nci5DdXJMZXZlbElkOlwiICsgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZClcclxuICAgICAgICAvLyBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA+PSAxNDApIHtcclxuXHJcbiAgICAgICAgLy8gICAgIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPSBjb2Nvc3ouZGF0YU1nci5nZXRSYW1kb21MZXZlbCgpO1xyXG4gICAgICAgIC8vICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA+PSAxMjApIHtcclxuICAgICAgICAvLyAgICAgICAgIGNvY29zei5nYW1lTWdyLnN1cnBsdXNMZXZlbE51bSsrO1xyXG4gICAgICAgIC8vICAgICAgICAgY2MubG9nKGNvY29zei5nYW1lTWdyLnN1cnBsdXNMZXZlbE51bSwgXCItLWNvY29zei5nYW1lTWdyLnN1cnBsdXNMZXZlbE51bVwiKVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID49IDEzMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgY29jb3N6LmdhbWVNZ3Iuc3VycGx1c0xldmVsTnVtKys7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID49IDEyMCkge1xyXG5cclxuICAgICAgICAvLyAgICAgICAgIHRoaXMub25HZXRMZXZlbDIoKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMub25HZXRMZXZlbCgpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDEyOSkge1xyXG4gICAgICAgIC8vICAgICBjb2Nvc3ouZ2FtZU1nci5zdXJwbHVzTGV2ZWxOdW0gPSAxO1xyXG4gICAgICAgIC8vIH1cclxuXHJcblxyXG5cclxuICAgICAgICBsZXQgbGV2ZWxOID0gK2NvY29zei5kYXRhTWdyLkN1ckxldmVsSWRcclxuICAgICAgICBpZiAobGV2ZWxOID49IDEwMCkge1xyXG4gICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkICU9IDEwMDtcclxuICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCArPSAyMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID49IDgwKSB7XHJcbiAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgKz0gNDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBzdHIgPSBcIm1hcFwiICsgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgKyAxKTtcclxuICAgICAgICBsZXQgbWFwRGF0YSA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiTWFwRGF0YTJcIiwgY2MuSnNvbkFzc2V0KS5qc29uW3N0cl07XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBmb3IgKGxldCBpZHggb2YgWzEzOV0pIHtcclxuICAgICAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gaWR4KSB7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouZ2FtZU1nci5zdXJwbHVzTGV2ZWxOdW0rKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGZvciAobGV0IGRlY3Qgb2YgbWFwRGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgY2hpbGROYW1lID0gZGVjdC5uYW1lO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNoaWxkTmFtZSA9PSBcIm1hcE1hc2tQb2ludFwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IGRlY3RbXCJsaXN0XCJdO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBsaXN0MiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbGlzdDMgb2YgbGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsaXN0NCA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcG9zIG9mIGxpc3QzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhID0gY2MudjIocG9zLngsIHBvcy55KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDQucHVzaChhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdDIucHVzaChsaXN0NCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsaXN0ID0gbGlzdDI7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwibWFwTWFza1wiLCBjYy5QcmVmYWIpXHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAvLyBub2RlLnggPSBsaXN0LnhcclxuICAgICAgICAgICAgICAgIC8vIG5vZGUueSA9IGxpc3QueVxyXG5cclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24oY2MudjIoZGVjdC54LCBkZWN0LnkpKTtcclxuICAgICAgICAgICAgICAgIEdhbWUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnpJbmRleCAtPSA5OTk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWFzazogY2MuTWFzayA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLk1hc2spO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyYXBoaWNzID0gbWFzay5fZ3JhcGhpY3M7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JhcGhpY3MyOiBjYy5HcmFwaGljcyA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXCIpLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmIgPSBub2RlLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICAgICAgcmIudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHBvaW50IG9mIGxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29sbGlkZXIgPSBub2RlLmFkZENvbXBvbmVudChjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsaWRlci5wb2ludHMgPSBbXS5jb25jYXQocG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpZGVyLmFwcGx5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyhwb2ludFswXS54LCBwb2ludFswXS55KTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB2MiBvZiBwb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFwaGljcy5saW5lVG8odjIueCwgdjIueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzLmZpbGwoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkIDwgMTIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzMi5saW5lV2lkdGggPSAxNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MyLnN0cm9rZUNvbG9yID0gbmV3IGNjLkNvbG9yKDQwLCAzMywgMTMsIDI1NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzMi5tb3ZlVG8ocG9pbnRbMF0ueCwgcG9pbnRbMF0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHYyIG9mIHBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFwaGljczIubGluZVRvKHYyLngsIHYyLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzMi5saW5lVG8ocG9pbnRbMF0ueCwgcG9pbnRbMF0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzMi5zdHJva2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZE5hbWUgPT0gXCJzYW5kTWFza1BvaW50XCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgcG9pbnQgPSBjaGlsZC5nZXRDb21wb25lbnQoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcikucG9pbnRzO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGNvbXBvbmVudCA9IGNoaWxkLmdldENvbXBvbmVudHMoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IGRlY3RbXCJsaXN0XCJdO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBsaXN0MiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbGlzdDMgb2YgbGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsaXN0NCA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcG9zIG9mIGxpc3QzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhID0gY2MudjIocG9zLngsIHBvcy55KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDQucHVzaChhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdDIucHVzaChsaXN0NCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsaXN0ID0gbGlzdDI7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcInNhbmRNYXNrXCIsIGNjLlByZWZhYilcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIG5vZGUueCA9IGRlY3QueFxyXG4gICAgICAgICAgICAgICAgbm9kZS55ID0gZGVjdC55XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coZGVjdClcclxuICAgICAgICAgICAgICAgIEdhbWUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnpJbmRleCAtPSA5OTg7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2NyaXB0ID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVfZGlydHlcIikuZ2V0Q29tcG9uZW50KFwidGVzdFwiKTtcclxuICAgICAgICAgICAgICAgIHNjcmlwdC5yZXNldChsaXN0KVxyXG4gICAgICAgICAgICAgICAgbGV0IG1hc2s6IGNjLk1hc2sgPSBub2RlLmdldENvbXBvbmVudChjYy5NYXNrKTtcclxuICAgICAgICAgICAgICAgIGxldCBncmFwaGljcyA9IG1hc2suX2dyYXBoaWNzO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGdyYXBoaWNzLm1vdmVUbyhwb2ludFswXS54LCBwb2ludFswXS55KTtcclxuICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IHYyIG9mIHBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZ3JhcGhpY3MubGluZVRvKHYyLngsIHYyLnkpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gZ3JhcGhpY3MuZmlsbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHBvaW50IG9mIGxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBncmFwaGljcy5tb3ZlVG8ocG9pbnRbMF0ueCwgcG9pbnRbMF0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdjIgb2YgcG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKHYyLngsIHYyLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBncmFwaGljcy5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkTmFtZSA9PSBcImJhZmZsZVwiIHx8IGNoaWxkTmFtZSA9PSBcImhhbmRUaXBzXCIgfHwgY2hpbGROYW1lID09IFwicm9sZVwiIHx8IGNoaWxkTmFtZSA9PSBcImZhblwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGRlY3Q7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coZGF0YSwgY2hpbGROYW1lKTtcclxuICAgICAgICAgICAgICAgIGxldCBwcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhjaGlsZE5hbWUsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5zY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSBkYXRhLnNjYWxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYW5nbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmFuZ2xlID0gZGF0YS5hbmdsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG5vZGUueCA9IGRhdGEueDtcclxuICAgICAgICAgICAgICAgIG5vZGUueSA9IGRhdGEueTtcclxuICAgICAgICAgICAgICAgIEdhbWUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkTmFtZSA9PSBcInByb3BNb3ZlRmxvb3JcIiB8fCBjaGlsZE5hbWUgPT0gXCJlbmVteVwiIHx8IGNoaWxkTmFtZSA9PSBcInByb3BcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudCA9IG5ldyBjYy5Ob2RlO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50Lm5hbWUgPSBjaGlsZE5hbWU7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coZGVjdClcclxuICAgICAgICAgICAgICAgIHBhcmVudC54ID0gZGVjdC54O1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LnkgPSBkZWN0Lnk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBkYXRhIG9mIGRlY3QubGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBkZWN0ID0gbWFwRGF0YVtjaGlsZE5hbWVdW2NoaWxkMk5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhkYXRhLm5hbWUsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5uYW1lID09IFwiY2FydG9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnpJbmRleCArPSAxMDAzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnNjYWxlWCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zY2FsZVggPSBkYXRhLnNjYWxlWDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuc2NhbGVZKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNjYWxlWSA9IGRhdGEuc2NhbGVZO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS53aWR0aCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS53aWR0aCA9IGRhdGEud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmFuZ2xlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYW5nbGUgPSBkYXRhLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS54KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUueCA9IGRhdGEueFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUueSA9IGRhdGEueVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBub2RlLnNldFBvc2l0aW9uKGNjLnYyKGRhdGEueCwgZGF0YS55KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubmFtZSA9PSBcIm5pbWlDYWN0dXNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFuZ2xlICs9IDM2MCAqIE1hdGgucmFuZG9tKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS5uYW1lID09IFwiZmxvb3IxMVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwicm9ja2V0XCIpLnNjYWxlWCA9IGRhdGFbXCJyb2NrZXRcIl0uc2NhbGVYO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChkYXRhLm5hbWUgPT0gXCJmbG9vcjE3XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZsb29yID0gZGF0YVtcImZsb29yXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coZmxvb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKS54ID0gZmxvb3IueDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImZsb29yXCIpLnkgPSBmbG9vci55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiZmxvb3JcIikuYW5nbGUgPSBmbG9vci5hbmdsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImZsb29yXCIpLnNjYWxlWCA9IGZsb29yLnNjYWxlWDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImZsb29yXCIpLnNjYWxlWSA9IGZsb29yLnNjYWxlWTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS5uYW1lID09IFwiZmxvb3JSb3RldGFDb21cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmxvb3IgPSBkYXRhW1wiZmxvb3JcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXJlY3Rpb24gPSBkYXRhW1wiZGlyZWN0aW9uXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImZsb29yXCIpLmFuZ2xlID0gZmxvb3IuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKS5zY2FsZVggPSBmbG9vci5zY2FsZVg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKS5zY2FsZVkgPSBmbG9vci5zY2FsZVk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImRpcmVjdGlvblwiKS5hbmdsZSA9IGRpcmVjdGlvbi5hbmdsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImRpcmVjdGlvblwiKS5zY2FsZVggPSBkaXJlY3Rpb24uc2NhbGVYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiZGlyZWN0aW9uXCIpLnNjYWxlWSA9IGRpcmVjdGlvbi5zY2FsZVk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEdhbWUuYWRkQ2hpbGQocGFyZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRMZXZlbElEKCkge1xyXG4gICAgICAgIGxldCBudW0gPSAwO1xyXG5cclxuICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA+PSAxMjApIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVtXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgX2luaXRHYW1lKCkge1xyXG4gICAgICAgIGxldCBHYW1lID0gY2MuZmluZChcIkNhbnZhcy9HYW1lXCIpO1xyXG4gICAgICAgIHdpbmRvdy5vbkdhbWVTdGFydCgxLCAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCArIDEpKTtcclxuXHJcblxyXG4gICAgICAgIGxldCBnYW1lQmcgPSBjYy5pbnN0YW50aWF0ZShjb2Nvc3oucmVzTWdyLmdldFJlcyhcImdhbWVCZ1wiLCBjYy5QcmVmYWIpKTtcclxuICAgICAgICBHYW1lLnBhcmVudC5hZGRDaGlsZChnYW1lQmcpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gbGV0IGMgPSBjYy50d2VlbigpLmJ5KDE4MCwgeyBhbmdsZTogMzYwIH0pO1xyXG4gICAgICAgIC8vIGNjLnR3ZWVuKGdhbWVCZy5nZXRDaGlsZEJ5TmFtZShcImhvbWVfYW5pbWF0aW9uX2xpZ2h0XCIpKVxyXG4gICAgICAgIC8vICAgICAucmVwZWF0Rm9yZXZlcihjKVxyXG4gICAgICAgIC8vICAgICAuc3RhcnQoKVxyXG5cclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pc0dhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3IuaXNMZWZ0QmFsbG9vbiA9IGZhbHNlO1xyXG4gICAgICAgIGNvY29zei5nYW1lTWdyLmlzcmlnaHRCYWxsb29uID0gZmFsc2U7XHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3IuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3IuaXNGZWVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGNvY29zei5nYW1lTWdyLnN1cnBsdXNMZXZlbE51bSA9IDBcclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci50b3VjaE51bSA9IDA7XHJcblxyXG4gICAgICAgIC8vIGxldCBudW0gPSB0aGlzLl9nZXRMZXZlbElEKClcclxuICAgICAgICAvLyBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA+PSAxMjApIHtcclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci5jdXJMZXZlbElEID0gY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZDtcclxuXHJcbiAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLk1heFVubG9ja0xldmVsQ291bnQgPCBjb2Nvc3ouZ2FtZU1nci5jdXJMZXZlbElEKSB7XHJcbiAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLk1heFVubG9ja0xldmVsQ291bnQgPSBjb2Nvc3ouZ2FtZU1nci5jdXJMZXZlbElEXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAvLyBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID0gTWF0aC5mbG9vcigoKGNvY29zei5nYW1lTWdyLmN1ckxldmVsSUQgLSAxMjApICUgMTEwKSAqIE1hdGgucmFuZG9tKCkpICsgMjA7XHJcblxyXG4gICAgICAgIC8vIGNjLmxvZyhcImdhbWVNZ3IuY3VyTGV2ZWxJRDpcIiArIGNvY29zei5nYW1lTWdyLmN1ckxldmVsSUQsIFwiZGF0YU1nci5DdXJMZXZlbElkOlwiICsgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZClcclxuICAgICAgICAvLyBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkICU9IDEwMDtcclxuICAgICAgICAvLyBsZXQgc3RyID0gXCJsZXZlbFwiICsgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgKyAxKVxyXG4gICAgICAgIC8vIGNjLmxvZyhjb2Nvc3oucmVzTWdyLmdldFJlcyhcIk1hcERhdGFcIiwgY2MuSnNvbkFzc2V0KS5qc29uKVxyXG4gICAgICAgIC8vIGxldCBtYXBEYXRhID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJNYXBEYXRhXCIsIGNjLkpzb25Bc3NldCkuanNvbltzdHJdO1xyXG4gICAgICAgIC8vIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID49IDgwKSB7XHJcbiAgICAgICAgLy8gICAgIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgKz0gNDA7XHJcbiAgICAgICAgLy8gICAgIHN0ciA9IFwibWFwXCIgKyAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCArIDEpXHJcbiAgICAgICAgLy8gICAgIG1hcERhdGEgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcIk1hcERhdGEyXCIsIGNjLkpzb25Bc3NldCkuanNvbltzdHJdO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaWR4IG9mIFsxMzldKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IGlkeCkge1xyXG4gICAgICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3Iuc3VycGx1c0xldmVsTnVtKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPj0gMTQwKSB7XHJcblxyXG4gICAgICAgIC8vIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPSBjb2Nvc3ouZGF0YU1nci5nZXRSYW1kb21MZXZlbCgpO1xyXG4gICAgICAgIC8vIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID49IDEyMCkge1xyXG4gICAgICAgIC8vICAgICBjb2Nvc3ouZ2FtZU1nci5zdXJwbHVzTGV2ZWxOdW0rKztcclxuICAgICAgICAvLyAgICAgY2MubG9nKGNvY29zei5nYW1lTWdyLnN1cnBsdXNMZXZlbE51bSwgXCItLWNvY29zei5nYW1lTWdyLnN1cnBsdXNMZXZlbE51bVwiKVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA+PSAxMzApIHtcclxuICAgICAgICAvLyAgICAgY29jb3N6LmdhbWVNZ3Iuc3VycGx1c0xldmVsTnVtKys7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAvLyAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPj0gMTIwKSB7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5vbkdldExldmVsMigpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5vbkdldExldmVsKCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkKVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgY2MubG9nKFwiZ2FtZU1nci5jdXJMZXZlbElEOlwiICsgY29jb3N6LmdhbWVNZ3IuY3VyTGV2ZWxJRCwgXCJkYXRhTWdyLkN1ckxldmVsSWQ6XCIgKyBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkKVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDEyOSkge1xyXG4gICAgICAgIC8vICAgICBjb2Nvc3ouZ2FtZU1nci5zdXJwbHVzTGV2ZWxOdW0gPSAxO1xyXG4gICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgIGxldCBsZXZlbE4gPSArY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZFxyXG4gICAgICAgIGlmIChsZXZlbE4gPj0gMTAwKSB7XHJcbiAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgJT0gMTAwO1xyXG5cclxuICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCArPSAyMDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA+PSA4MCkge1xyXG4gICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkICs9IDQwO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG1hcDogY2MuUHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJtYXBcIiArIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkICsgMSksIGNjLlByZWZhYik7XHJcblxyXG4gICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID49IDEyMCAmJiBjb2Nvc3ouZ2FtZU1nci5jdXJMZXZlbElEID4gMTQwKSB7XHJcbiAgICAgICAgICAgIG1hcCA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwibWFwXCIgKyBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkLCBjYy5QcmVmYWIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBtYXAuZGF0YS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQubmFtZSA9PSBcIm1hcE1hc2tQb2ludFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudCA9IGNoaWxkLmdldENvbXBvbmVudHMoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcG9seSBvZiBjb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9seS5wb2ludHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKHBvbHkucG9pbnRzKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJtYXBNYXNrXCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JhcGhpY3MyOiBjYy5HcmFwaGljcyA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXCIpLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgICAgICAgICBHYW1lLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKGNoaWxkLnksIFwiLS0tLS0tLS0tLS0tY2hpbGQueVwiLCBsaXN0KVxyXG4gICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihjaGlsZC5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuekluZGV4IC09IDk5OTtcclxuICAgICAgICAgICAgICAgIGxldCBtYXNrOiBjYy5NYXNrID0gbm9kZS5nZXRDb21wb25lbnQoY2MuTWFzayk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JhcGhpY3MgPSBtYXNrLl9ncmFwaGljcztcclxuICAgICAgICAgICAgICAgIGxldCByYiA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlJpZ2lkQm9keSk7XHJcbiAgICAgICAgICAgICAgICByYi50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWM7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcG9pbnQgb2YgbGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb2xsaWRlciA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhjb2xsaWRlci50YWcsIFwiLS0tLS0tLS0tLWNvbGxpZGVyLnRhZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsaWRlci50YWcgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpZGVyLnBvaW50cyA9IFtdLmNvbmNhdChwb2ludCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGlkZXIuYXBwbHkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHBvaW50WzBdLngsIHBvaW50WzBdLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHYyIG9mIHBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyh2Mi54LCB2Mi55KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbCgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPCAxMjApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzMi5saW5lV2lkdGggPSAxNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MyLnN0cm9rZUNvbG9yID0gbmV3IGNjLkNvbG9yKDQwLCAzMywgMTMsIDI1NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzMi5tb3ZlVG8ocG9pbnRbMF0ueCwgcG9pbnRbMF0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHYyIG9mIHBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmFwaGljczIubGluZVRvKHYyLngsIHYyLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzMi5saW5lVG8ocG9pbnRbMF0ueCwgcG9pbnRbMF0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzMi5zdHJva2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZC5uYW1lID09IFwic2FuZE1hc2tQb2ludFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbGV0IHBvaW50ID0gY2hpbGQuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIpLnBvaW50cztcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSBjaGlsZC5nZXRDb21wb25lbnRzKGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHBvbHkgb2YgY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvbHkucG9pbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChwb2x5LnBvaW50cylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcInNhbmRNYXNrXCIsIGNjLlByZWZhYilcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24oY2hpbGQuZ2V0UG9zaXRpb24oKSlcclxuICAgICAgICAgICAgICAgIEdhbWUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnpJbmRleCAtPSA5OTg7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMTkpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS56SW5kZXggKz0gOTk4O1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc2NyaXB0ID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVfZGlydHlcIikuZ2V0Q29tcG9uZW50KFwidGVzdFwiKTtcclxuICAgICAgICAgICAgICAgIHNjcmlwdC5yZXNldChsaXN0KVxyXG4gICAgICAgICAgICAgICAgbGV0IG1hc2s6IGNjLk1hc2sgPSBub2RlLmdldENvbXBvbmVudChjYy5NYXNrKTtcclxuICAgICAgICAgICAgICAgIGxldCBncmFwaGljcyA9IG1hc2suX2dyYXBoaWNzO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGdyYXBoaWNzLm1vdmVUbyhwb2ludFswXS54LCBwb2ludFswXS55KTtcclxuICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IHYyIG9mIHBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZ3JhcGhpY3MubGluZVRvKHYyLngsIHYyLnkpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gZ3JhcGhpY3MuZmlsbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHBvaW50IG9mIGxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBncmFwaGljcy5tb3ZlVG8ocG9pbnRbMF0ueCwgcG9pbnRbMF0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdjIgb2YgcG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKHYyLngsIHYyLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBncmFwaGljcy5maWxsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkLm5hbWUgPT0gXCJyb2xlXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwicm9sZVwiLCBjYy5QcmVmYWIpKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24oY2hpbGQuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNjYWxlID0gY2hpbGQuc2NhbGU7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFuZ2xlID0gY2hpbGQuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICBHYW1lLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZC5uYW1lID09IFwiYmFmZmxlXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJiYWZmbGVcIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSBjaGlsZC5zY2FsZTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYW5nbGUgPSBjaGlsZC5hbmdsZTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24oY2hpbGQuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgICAgICBHYW1lLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkLm5hbWUgPT0gXCJmYW5cIikge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcImZhblwiLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zY2FsZSA9IGNoaWxkLnNjYWxlO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hbmdsZSA9IGNoaWxkLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihjaGlsZC5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgICAgIEdhbWUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQubmFtZSA9PSBcImhhbmRUaXBzXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJoYW5kVGlwc1wiLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zY2FsZSA9IGNoaWxkLnNjYWxlO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hbmdsZSA9IGNoaWxkLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihjaGlsZC5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgICAgIEdhbWUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZWxzZSBpZiAoY2hpbGQubmFtZSA9PSBcImNhY3R1c1wiKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiY2FjdHVzXCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgIC8vICAgICBub2RlLnNjYWxlID0gY2hpbGQuc2NhbGU7XHJcbiAgICAgICAgICAgIC8vICAgICBub2RlLmFuZ2xlID0gY2hpbGQuYW5nbGU7XHJcbiAgICAgICAgICAgIC8vICAgICBub2RlLnpJbmRleCs9MTAwXHJcbiAgICAgICAgICAgIC8vICAgICBub2RlLnNldFBvc2l0aW9uKGNoaWxkLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICAvLyAgICAgR2FtZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQubmFtZSA9PSBcInByb3BNb3ZlRmxvb3JcIiB8fCBjaGlsZC5uYW1lID09IFwiZW5lbXlcIiB8fCBjaGlsZC5uYW1lID09IFwicHJvcFwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFyZW50ID0gbmV3IGNjLk5vZGU7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQubmFtZSA9IGNoaWxkLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuc2V0UG9zaXRpb24oY2hpbGQuZ2V0UG9zaXRpb24oKSlcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkMiBvZiBjaGlsZC5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhjaGlsZDIubmFtZSwgY2MuUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkMi5uYW1lID09IFwiY2FydG9uXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnpJbmRleCArPSAxMDAzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChjaGlsZDIubmFtZSA9PSBcInN0b25lXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY2MubG9nKFwiLS0tLS0tLS0tLS0tLS0tLVwiLCBub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zY2FsZVggPSBjaGlsZDIuc2NhbGVYO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2NhbGVZID0gY2hpbGQyLnNjYWxlWTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLndpZHRoID0gY2hpbGQyLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYW5nbGUgPSBjaGlsZDIuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkMi5uYW1lID09IFwibmltaUNhY3R1c1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuYW5nbGUgKz0gMzYwICogTWF0aC5yYW5kb20oKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQyLm5hbWUgPT0gXCJmbG9vcjExXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcInJvY2tldFwiKS5zY2FsZVggPSBjaGlsZDIuZ2V0Q2hpbGRCeU5hbWUoXCJyb2NrZXRcIikuc2NhbGVYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub2RlLmdldENoaWxkQnlOYW1lKFwicm9ja2V0XCIpLnggPSAtY2hpbGQyLmdldENoaWxkQnlOYW1lKFwicm9ja2V0XCIpLng7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZDIubmFtZSA9PSBcImZsb29yMTdcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmxvb3IgPSBjaGlsZDIuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImZsb29yXCIpLmFuZ2xlID0gZmxvb3IuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKS5zY2FsZVggPSBmbG9vci5zY2FsZVg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKS5zY2FsZVkgPSBmbG9vci5zY2FsZVk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKS54ID0gZmxvb3IueDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImZsb29yXCIpLnkgPSBmbG9vci55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub2RlLmdldENoaWxkQnlOYW1lKFwicm9ja2V0XCIpLnggPSAtY2hpbGQyLmdldENoaWxkQnlOYW1lKFwicm9ja2V0XCIpLng7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZDIubmFtZSA9PSBcImZsb29yUm90ZXRhQ29tXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZsb29yID0gY2hpbGQyLmdldENoaWxkQnlOYW1lKFwiZmxvb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXJlY3Rpb24gPSBjaGlsZDIuZ2V0Q2hpbGRCeU5hbWUoXCJkaXJlY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKS5hbmdsZSA9IGZsb29yLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiZmxvb3JcIikuc2NhbGVYID0gZmxvb3Iuc2NhbGVYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiZmxvb3JcIikuc2NhbGVZID0gZmxvb3Iuc2NhbGVZO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJkaXJlY3Rpb25cIikuYW5nbGUgPSBkaXJlY3Rpb24uYW5nbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJkaXJlY3Rpb25cIikuc2NhbGVYID0gZGlyZWN0aW9uLnNjYWxlWDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImRpcmVjdGlvblwiKS5zY2FsZVkgPSBkaXJlY3Rpb24uc2NhbGVZO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKGNoaWxkMi5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBHYW1lLmFkZENoaWxkKHBhcmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNjLmxvZyhHYW1lKVxyXG4gICAgICAgIC8vIGxldCBtYXBNYXNrUG9pbnQgPSBtYXAuZGF0YS5nZXRDaGlsZEJ5TmFtZShcIm1hcE1hc2tQb2ludFwiKTtcclxuICAgICAgICAvLyBpZiAobWFwTWFza1BvaW50KSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBjb21wb25lbnQgPSBtYXBNYXNrUG9pbnQuZ2V0Q29tcG9uZW50cyhjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKTtcclxuICAgICAgICAvLyAgICAgbGV0IGxpc3QgPSBbXTtcclxuICAgICAgICAvLyAgICAgZm9yIChsZXQgcG9seSBvZiBjb21wb25lbnQpIHtcclxuICAgICAgICAvLyAgICAgICAgIGlmIChwb2x5LnBvaW50cykge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxpc3QucHVzaChwb2x5LnBvaW50cylcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwibWFwTWFza1wiLCBjYy5QcmVmYWIpXHJcbiAgICAgICAgLy8gICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAvLyAgICAgY2FudmFzLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgIC8vICAgICBub2RlLnpJbmRleCAtPSA5OTk7XHJcbiAgICAgICAgLy8gICAgIGxldCBtYXNrOiBjYy5NYXNrID0gbm9kZS5nZXRDb21wb25lbnQoY2MuTWFzayk7XHJcbiAgICAgICAgLy8gICAgIGxldCBncmFwaGljcyA9IG1hc2suX2dyYXBoaWNzO1xyXG4gICAgICAgIC8vICAgICBsZXQgcmIgPSBub2RlLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIC8vICAgICByYi50eXBlID0gY2MuUmlnaWRCb2R5VHlwZS5TdGF0aWM7XHJcblxyXG4gICAgICAgIC8vICAgICBmb3IgKGxldCBwb2ludCBvZiBsaXN0KSB7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgY29sbGlkZXIgPSBub2RlLmFkZENvbXBvbmVudChjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKTtcclxuICAgICAgICAvLyAgICAgICAgIGNvbGxpZGVyLnBvaW50cyA9IFtdLmNvbmNhdChwb2ludCk7XHJcbiAgICAgICAgLy8gICAgICAgICBjb2xsaWRlci5hcHBseSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHBvaW50WzBdLngsIHBvaW50WzBdLnkpO1xyXG4gICAgICAgIC8vICAgICAgICAgZm9yIChsZXQgdjIgb2YgcG9pbnQpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBncmFwaGljcy5saW5lVG8odjIueCwgdjIueSk7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICBncmFwaGljcy5maWxsKCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuICAgICAgICAvLyBsZXQgc2FuZE1hc2tQb2ludCA9IG1hcC5kYXRhLmdldENoaWxkQnlOYW1lKFwic2FuZE1hc2tQb2ludFwiKTtcclxuICAgICAgICAvLyBpZiAoc2FuZE1hc2tQb2ludCkge1xyXG4gICAgICAgIC8vICAgICBsZXQgcG9pbnQgPSBzYW5kTWFza1BvaW50LmdldENvbXBvbmVudChjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKS5wb2ludHM7XHJcbiAgICAgICAgLy8gICAgIGxldCBwcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcInNhbmRNYXNrXCIsIGNjLlByZWZhYilcclxuICAgICAgICAvLyAgICAgY2MubG9nKHByZWZhYik7XHJcbiAgICAgICAgLy8gICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAvLyAgICAgY2FudmFzLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgIC8vICAgICBub2RlLnpJbmRleCAtPSA5OTg7XHJcbiAgICAgICAgLy8gICAgIGxldCBzY3JpcHQgPSBub2RlLmdldENoaWxkQnlOYW1lKFwibm9kZV9kaXJ0eVwiKS5nZXRDb21wb25lbnQoXCJ0ZXN0XCIpO1xyXG4gICAgICAgIC8vICAgICBzY3JpcHQucmVzZXQocG9pbnQpXHJcbiAgICAgICAgLy8gICAgIGxldCBtYXNrOiBjYy5NYXNrID0gbm9kZS5nZXRDb21wb25lbnQoY2MuTWFzayk7XHJcbiAgICAgICAgLy8gICAgIGxldCBncmFwaGljcyA9IG1hc2suX2dyYXBoaWNzO1xyXG5cclxuICAgICAgICAvLyAgICAgZ3JhcGhpY3MubW92ZVRvKHBvaW50WzBdLngsIHBvaW50WzBdLnkpO1xyXG4gICAgICAgIC8vICAgICBmb3IgKGxldCB2MiBvZiBwb2ludCkge1xyXG4gICAgICAgIC8vICAgICAgICAgZ3JhcGhpY3MubGluZVRvKHYyLngsIHYyLnkpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGdyYXBoaWNzLmZpbGwoKTtcclxuXHJcblxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBsZXQgYmFmZmxlID0gbWFwLmRhdGEuZ2V0Q2hpbGRCeU5hbWUoXCJiYWZmbGVcIik7XHJcbiAgICAgICAgLy8gaWYgKGJhZmZsZSkge1xyXG4gICAgICAgIC8vICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJiYWZmbGVcIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICAvLyAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgIC8vICAgICBub2RlLnNldFBvc2l0aW9uKGJhZmZsZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAvLyAgICAgY2FudmFzLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBsZXQgcm9sZSA9IG1hcC5kYXRhLmdldENoaWxkQnlOYW1lKFwicm9sZVwiKTtcclxuICAgICAgICAvLyBpZiAocm9sZSkge1xyXG4gICAgICAgIC8vICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwicm9sZVwiLCBjYy5QcmVmYWIpKTtcclxuICAgICAgICAvLyAgICAgbm9kZS5zZXRQb3NpdGlvbihyb2xlLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgIC8vICAgICBjYW52YXMuZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlTWFnXCIpLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBfaW5pdFJlcygpIHtcclxuICAgIH1cclxuXHJcbn1cclxuIl19