
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
            this._initGame();
            // this._initGame2();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXE5vcm1hbE1vZGVsQ3RyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBZ0M7QUFDaEMsdUNBQWtHO0FBQ2xHLHlDQUF5QztBQUN6Qyx5Q0FBeUM7QUFDekMsbUNBQW1DO0FBQ25DLG1DQUEwQztBQUMxQyx5Q0FBb0M7QUFHcEMsMkNBQTJDO0FBQzNDLDBEQUEwRDtBQUMxRCw4Q0FBOEM7QUFFOUMsdURBQXVEO0FBQ3ZELHdDQUF3QztBQUN4Qyx5Q0FBeUM7QUFFbkMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUU1QyxJQUFJLFNBQVMsR0FBRztJQUNaLEtBQUssRUFBRSxHQUFHO0lBQ1YsS0FBSyxFQUFFLEdBQUc7SUFDVixJQUFJLEVBQUUsR0FBRztJQUNULElBQUksRUFBRSxHQUFHO0lBQ1QsSUFBSSxFQUFFLEdBQUc7SUFDVCxJQUFJLEVBQUUsR0FBRztJQUNULElBQUksRUFBRSxHQUFHO0lBQ1QsSUFBSSxFQUFFLEdBQUc7SUFDVCxJQUFJLEVBQUUsR0FBRztJQUNULElBQUksRUFBRSxHQUFHO0lBR1QsSUFBSSxFQUFFLEdBQUc7SUFDVCxJQUFJLEVBQUUsR0FBRztJQUNULElBQUksRUFBRSxHQUFHO0lBQ1QsSUFBSSxFQUFFLEdBQUc7SUFDVCxLQUFLLEVBQUUsR0FBRztJQUNWLEtBQUssRUFBRSxHQUFHO0lBQ1YsS0FBSyxFQUFFLEdBQUc7SUFDVixLQUFLLEVBQUUsR0FBRztJQUNWLEtBQUssRUFBRSxHQUFHO0lBQ1YsS0FBSyxFQUFFLEdBQUc7Q0FDYixDQUFBO0FBR0Q7SUFBNEMsa0NBQU87SUFEbkQ7UUFBQSxxRUE0MEJDO1FBejBCVyxlQUFTLEdBQWMsRUFBRSxDQUFDO1FBRTFCLFVBQUksR0FBVyxDQUFDLENBQUMsQ0FBQSxhQUFhO1FBQzlCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsYUFBTyxHQUFjLElB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RyxLQUFLLENBQUMsS0FBSyxDQUFDO2dCQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZCO2lCQUVJLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxRQUFRLEVBQUU7Z0JBRTdCLElBQUksTUFBTSxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztnQkFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO2dCQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZCO2lCQUNJLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUU7Z0JBRTFCLElBQUksTUFBTSxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztnQkFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO2dCQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZCO2lCQUNJLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxVQUFVLEVBQUU7Z0JBRS9CLElBQUksTUFBTSxHQUFH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O0lBQUQscUJBQUM7Q0EzMEJELEFBMjBCQyxDQTMwQjJDLGlCQUFPLEdBMjBCbEQ7a0JBMzBCb0IsY0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lQ3RyIGZyb20gXCIuL0dhbWVDdHJcIjtcclxuaW1wb3J0IENvbnN0YW50LCB7IEdhbWVTdGF0ZSwgUGFuZWxOYW1lLCBQYWdlTmFtZSwgUHJlZmFiTmFtZSwgRmxvb3JUeXBlLCB0YWcgfSBmcm9tIFwiLi9Db25zdGFudFwiO1xyXG4vLyBpbXBvcnQgUGFuZ1hpZSBmcm9tIFwiLi4vaXRlbS9QYW5nWGllXCI7XHJcbi8vIGltcG9ydCBKaUd1YW5nIGZyb20gXCIuLi9pdGVtL0ppR3VhbmdcIjtcclxuLy8gaW1wb3J0IFdhbGwgZnJvbSBcIi4uL2l0ZW0vV2FsbFwiO1xyXG5pbXBvcnQgQ29jb3NaLCB7IGNvY29zeiB9IGZyb20gXCIuL0NvY29zWlwiO1xyXG5pbXBvcnQgR2FtZUJnQ3RyIGZyb20gXCIuL0dhbWVCZ0N0clwiO1xyXG5pbXBvcnQgTXNnIGZyb20gXCIuL01zZ1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb25uZWN0aW9uIH0gZnJvbSBcIm5ldFwiO1xyXG4vLyBpbXBvcnQgVWlMb3R0ZXJ5IGZyb20gXCIuLi9VaS9VaUxvdHRlcnlcIjtcclxuLy8gaW1wb3J0IHsgdXRpbHMgfSBmcm9tIFwiLi4vY29tbW9uLXBsdWdpbi9TY3JpcHRzL1V0aWxzXCI7XHJcbi8vIGltcG9ydCB7IHV0aWxzIH0gZnJvbSBcIi4uL3N0YXRpc3RpYy9VdGlsc1wiO1xyXG5cclxuLy8gaW1wb3J0IFJvbGVDb250cm9sbGVyIGZyb20gXCIuLi9yb2xlL1JvbGVDb250cm9sbGVyXCI7XHJcbi8vIGltcG9ydCBHYW1lQmdDdHIgZnJvbSBcIi4uL0dhbWVCZ0N0clwiO1xyXG4vLyBpbXBvcnQgUm9uZ1lhbiBmcm9tIFwiLi4vaXRlbS9Sb25nWWFuXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxubGV0IGxldmVsRGVjdCA9IHtcclxuICAgIFwiMTM0XCI6IDEyOSxcclxuICAgIFwiMTM5XCI6IDEzOSxcclxuICAgIFwiNDRcIjogMTI4LFxyXG4gICAgXCI0OVwiOiAxMzgsXHJcbiAgICBcIjU0XCI6IDEyNyxcclxuICAgIFwiNTlcIjogMTM3LFxyXG4gICAgXCI2NFwiOiAxMjYsXHJcbiAgICBcIjY5XCI6IDEzNixcclxuICAgIFwiNzRcIjogMTI1LFxyXG4gICAgXCI3OVwiOiAxMzUsXHJcblxyXG5cclxuICAgIFwiODRcIjogMTI0LFxyXG4gICAgXCI4OVwiOiAxMzQsXHJcbiAgICBcIjk0XCI6IDEyMyxcclxuICAgIFwiOTlcIjogMTMzLFxyXG4gICAgXCIxMDRcIjogMTIyLFxyXG4gICAgXCIxMDlcIjogMTMyLFxyXG4gICAgXCIxMTRcIjogMTIxLFxyXG4gICAgXCIxMTlcIjogMTMxLFxyXG4gICAgXCIxMjRcIjogMTIwLFxyXG4gICAgXCIxMjlcIjogMTMwLFxyXG59XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3JtYWxNb2RlbEN0ciBleHRlbmRzIEdhbWVDdHIge1xyXG5cclxuICAgIHByaXZhdGUgX2l0ZW1MaXN0OiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIF9OdW06IG51bWJlciA9IDA7Ly/pgILlupTpq5jluqbkuI7ljp/pq5jluqbnmoTlt67lgLxcclxuICAgIHByaXZhdGUgR2FtZU5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfZ2FtZUJnOiBHYW1lQmdDdHIgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfQmdOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2xpemk6IGNjLlByZWZhYiA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9EZWNvcmF0ZVR5cGUxN1BvczogYW55ID0ge307XHJcblxyXG4gICAgcHJpdmF0ZSBzdXBwbGVtZW50OiBhbnkgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBzdXBwbGVtZW50MjogYW55ID0gbnVsbDtcclxuXHJcblxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBzdXBlci5vbkxvYWQoKTtcclxuICAgICAgICB0aGlzLkdhbWVOb2RlID0gY2MuZmluZChcIkNhbnZhcy9HYW1lXCIpO1xyXG5cclxuICAgICAgICB0aGlzLl9saXppID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJsaXppXCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgdGhpcy5faW5pdFJlcygpO1xyXG4gICAgICAgIHRoaXMuX2dhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5QcmVwYXJlO1xyXG4gICAgICAgIGlmIChjYy5maW5kKFwiQ2FudmFzXCIpLmhlaWdodCA+IDIwMDApIHtcclxuICAgICAgICAgICAgdGhpcy5fTnVtID0gY2MuZmluZChcIkNhbnZhc1wiKS5oZWlnaHQgLSAxOTIwO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fTnVtICE9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX051bSAqPSAwLjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkuZW5hYmxlRm9yVGFyZ2V0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2luaXRCZygpO1xyXG5cclxuICAgICAgICBpZiAoY29jb3N6LnNjZW5lTWdyLnNjZW5lTmFtZSA9PSBcIkdhbWVcIikge1xyXG5cclxuICAgICAgICAgICAgdGhpcy5faW5pdEdhbWUoKVxyXG4gICAgICAgICAgICAvLyB0aGlzLl9pbml0R2FtZTIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY29jb3N6LnNjZW5lTWdyLnNjZW5lTmFtZSA9PSBcIkdhbWUyXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5pdEVuZGxlc3NHYW1lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICBjYy5nYW1lLm9uKENvbnN0YW50LkVfR0FNRV9MT0dJQywgdGhpcy5fb25NZXNzYWdlSGFuZGxlcnIsIHRoaXMpO1xyXG4gICAgICAgIGNjLmdhbWUub24oQ29uc3RhbnQuRV9MRVZFTF9DT01QTEVURSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb2Nvc3ouYXVkaW9NZ3IucGxheVZlY3RvcnlFZmZlY3QoKTtcclxuICAgICAgICAgICAgLy8gbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLl9saXppKTtcclxuICAgICAgICAgICAgLy8gbm9kZS5wYXJlbnQgPSB0aGlzLkdhbWVOb2RlO1xyXG4gICAgICAgICAgICAvLyBub2RlLnBvc2l0aW9uID0gY2MuVmVjMi5aRVJPO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGlzYWJsZSgpIHtcclxuICAgICAgICBjYy5nYW1lLnRhcmdldE9mZih0aGlzKTtcclxuICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBfaGFuZGxlSW5wdXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2dhbWVTdGF0ZSA9PSBHYW1lU3RhdGUuUHJlcGFyZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9nYW1lU3RhdGUgPSBHYW1lU3RhdGUuU3RhcnQ7XHJcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX0dBTUVfTE9HSUMsIHsgdHlwZTogQ29uc3RhbnQuRV9HQU1FX1NUQVJUIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9vbk1lc3NhZ2VIYW5kbGVycihldmVudDogYW55KSB7XHJcbiAgICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RhbnQuRV9HQU1FX1NUQVJUOiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ2FtZVN0YXRlID09IEdhbWVTdGF0ZS5QcmVwYXJlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ2FtZVN0YXRlID0gR2FtZVN0YXRlLlN0YXJ0O1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLkdhbWVOb2RlLmdldENoaWxkQnlOYW1lKFwiR3VpZGVcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLkdhbWVOb2RlLmdldENoaWxkQnlOYW1lKFwiR3VpZGVcIikuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gdXRpbHMuU3RhcnRHYW1lKChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkICsgMSkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIENvbnN0YW50LkVfTEVWRUxfRkFJTEVEOiB7XHJcbiAgICAgICAgICAgICAgICAvLyDpgJrlhbPlpLHotKVcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5GYWlsZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkxldmVsVXAoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgQ29uc3RhbnQuRV9MRVZFTF9DT01QTEVURToge1xyXG4gICAgICAgICAgICAgICAgLy8g6YCa5YWz5oiQ5YqfXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9nYW1lU3RhdGUgPSBHYW1lU3RhdGUuU3VjY2VzcztcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLkxldmVsVXAoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9CZ05vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbml0QmcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgTGV2ZWxVcCgpIHtcclxuICAgICAgICB0aGlzLkdhbWVOb2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdGhpcy5fZ2FtZVN0YXRlID0gR2FtZVN0YXRlLlByZXBhcmU7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9pbml0QmcoKSB7XHJcbiAgICAgICAgdGhpcy5fZ2FtZUJnID0gbmV3IEdhbWVCZ0N0cigpO1xyXG4gICAgICAgIHRoaXMuX2dhbWVCZy5pbml0QkcoKTtcclxuICAgICAgICB0aGlzLl9CZ05vZGUgPSBjYy5maW5kKFwiQ2FudmFzL0JHXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvbkdldExldmVsKCkge1xyXG4gICAgICAgIGZvciAobGV0IGlkeCBpbiBsZXZlbERlY3QpIHtcclxuICAgICAgICAgICAgaWYgKGlkeCA9PSBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICgoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCArIDEpICUgNSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3Iuc3VycGx1c0xldmVsTnVtKytcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgKyAxKSAlIDEwID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouZ2FtZU1nci5zdXJwbHVzTGV2ZWxOdW0rK1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9IGxldmVsRGVjdFtpZHhdO1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwiLS0tLWNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQtLS1vbkdldExldmVsLS1cIiwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZClcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA+IDEyMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZvciAobGV0IGlkeDIgaW4gbGV2ZWxEZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmIChsZXZlbERlY3RbaWR4Ml0gPT0gaWR4KSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID0gK2lkeDJcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uR2V0TGV2ZWwyKCkge1xyXG4gICAgICAgIGZvciAobGV0IGlkeCBpbiBsZXZlbERlY3QpIHtcclxuICAgICAgICAgICAgaWYgKGxldmVsRGVjdFtpZHhdID09IGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQpIHtcclxuICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPSAraWR4O1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPiAxMjApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouZ2FtZU1nci5zdXJwbHVzTGV2ZWxOdW0rK1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2luaXRFbmRsZXNzR2FtZSgpIHtcclxuXHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3IuaXNHYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIGNvY29zei5nYW1lTWdyLmlzTGVmdEJhbGxvb24gPSBmYWxzZTtcclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pc3JpZ2h0QmFsbG9vbiA9IGZhbHNlO1xyXG4gICAgICAgIGNvY29zei5nYW1lTWdyLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIGNvY29zei5nYW1lTWdyLmlzRmVlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci5zdXJwbHVzTGV2ZWxOdW0gPSAwXHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3IudG91Y2hOdW0gPSAwO1xyXG5cclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci5jdXJMZXZlbElEID0gY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZDtcclxuXHJcbiAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLk1heFVubG9ja0xldmVsQ291bnQgPCBjb2Nvc3ouZ2FtZU1nci5jdXJMZXZlbElEKSB7XHJcbiAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLk1heFVubG9ja0xldmVsQ291bnQgPSBjb2Nvc3ouZ2FtZU1nci5jdXJMZXZlbElEXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHdpbmRvdy5vbkdhbWVFdmVudCgzLCBcIuaXoOWwveaooeW8j+W8gOWni1wiLCAxKTtcclxuICAgICAgICBsZXQgR2FtZSA9IGNjLmZpbmQoXCJDYW52YXMvZ2FtZUJHXCIpO1xyXG4gICAgICAgIGxldCBnYW1lQmcgPSBjYy5pbnN0YW50aWF0ZShjb2Nvc3oucmVzTWdyLmdldFJlcyhcImdhbWVCZ1wiLCBjYy5QcmVmYWIpKTtcclxuICAgICAgICBHYW1lLmFkZENoaWxkKGdhbWVCZyk7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pbml0R2FtZTIoKSB7XHJcbiAgICAgICAgbGV0IEdhbWUgPSBjYy5maW5kKFwiQ2FudmFzL0dhbWVcIik7XHJcbiAgICAgICAgd2luZG93Lm9uR2FtZVN0YXJ0KDEsIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkICsgMSkpO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IGdhbWVCZyA9IGNjLmluc3RhbnRpYXRlKGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiZ2FtZUJnXCIsIGNjLlByZWZhYikpO1xyXG4gICAgICAgIGdhbWVCZy56SW5kZXggLT0gOTk5O1xyXG4gICAgICAgIEdhbWUucGFyZW50LmFkZENoaWxkKGdhbWVCZyk7XHJcblxyXG5cclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pc0dhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3IuaXNMZWZ0QmFsbG9vbiA9IGZhbHNlO1xyXG4gICAgICAgIGNvY29zei5nYW1lTWdyLmlzcmlnaHRCYWxsb29uID0gZmFsc2U7XHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3IuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3IuaXNGZWVkID0gZmFsc2U7XHJcbiAgICAgICAgLy8gY29jb3N6LmdhbWVNZ3IuaXNPcGVuUmV3YXJkTGV2ZWwgPSBmYWxzZTtcclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci5mcmFjdGlvbiA9IDBcclxuXHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3Iuc3VycGx1c0xldmVsTnVtID0gMFxyXG4gICAgICAgIGNvY29zei5nYW1lTWdyLnRvdWNoTnVtID0gMDtcclxuXHJcbiAgICAgICAgLy8gbGV0IG51bSA9IHRoaXMuX2dldExldmVsSUQoKVxyXG4gICAgICAgIC8vIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID49IDEyMCkge1xyXG5cclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci5jdXJMZXZlbElEID0gY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZDtcclxuXHJcblxyXG4gICAgICAgIC8vIGlmIChjb2Nvc3ouZ2FtZU1nci5MZXZlbE51bSA+PSA2KSB7XHJcbiAgICAgICAgLy8gICAgIGNvY29zei5nYW1lTWdyLmlzT3BlblJld2FyZExldmVsID0gdHJ1ZTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIGlmIChjb2Nvc3ouZ2FtZU1nci5MZXZlbE51bTIgPj0gMikge1xyXG5cclxuICAgICAgICAvLyAgICAgY29jb3N6LmdhbWVNZ3IuaXNPcGVuTG90dGVyeSA9IHRydWU7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuXHJcbiAgICAgICAgLy8gaWYgKGNvY29zei5nYW1lTWdyLmlzT3BlblJld2FyZExldmVsKSB7XHJcbiAgICAgICAgLy8gICAgIE1zZy5TaG93KFwi54m55q6K5YWz5Y2h5bey6Kem5Y+RLOi/h+WFs+WQjuWNs+WPr+i/m+WFpeeJueauiuWFs+WNoVwiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSBpZiAoY29jb3N6LmdhbWVNZ3IuaXNPcGVuTG90dGVyeSkge1xyXG4gICAgICAgIC8vICAgICBNc2cuU2hvdyhcIuW5uOi/kOaKveaKveaKveW3suinpuWPkSzov4flhbPlkI7ljbPlj6/mir3lj5blpKflpZZcIik7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmIChjb2Nvc3ouZGF0YU1nci5NYXhVbmxvY2tMZXZlbENvdW50IDwgY29jb3N6LmdhbWVNZ3IuY3VyTGV2ZWxJRCkge1xyXG4gICAgICAgIC8vICAgICBjb2Nvc3ouZGF0YU1nci5NYXhVbmxvY2tMZXZlbENvdW50ID0gY29jb3N6LmdhbWVNZ3IuY3VyTGV2ZWxJRFxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyAvLyAgICAgLy8gY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9IE1hdGguZmxvb3IoKChjb2Nvc3ouZ2FtZU1nci5jdXJMZXZlbElEIC0gMTIwKSAlIDExMCkgKiBNYXRoLnJhbmRvbSgpKSArIDIwO1xyXG5cclxuICAgICAgICAvLyBjYy5sb2coXCJnYW1lTWdyLmN1ckxldmVsSUQ6XCIgKyBjb2Nvc3ouZ2FtZU1nci5jdXJMZXZlbElELCBcImRhdGFNZ3IuQ3VyTGV2ZWxJZDpcIiArIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQpXHJcbiAgICAgICAgLy8gaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPj0gMTQwKSB7XHJcblxyXG4gICAgICAgIC8vICAgICBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID0gY29jb3N6LmRhdGFNZ3IuZ2V0UmFtZG9tTGV2ZWwoKTtcclxuICAgICAgICAvLyAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPj0gMTIwKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb2Nvc3ouZ2FtZU1nci5zdXJwbHVzTGV2ZWxOdW0rKztcclxuICAgICAgICAvLyAgICAgICAgIGNjLmxvZyhjb2Nvc3ouZ2FtZU1nci5zdXJwbHVzTGV2ZWxOdW0sIFwiLS1jb2Nvc3ouZ2FtZU1nci5zdXJwbHVzTGV2ZWxOdW1cIilcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA+PSAxMzApIHtcclxuICAgICAgICAvLyAgICAgICAgIGNvY29zei5nYW1lTWdyLnN1cnBsdXNMZXZlbE51bSsrO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA+PSAxMjApIHtcclxuXHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm9uR2V0TGV2ZWwyKCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm9uR2V0TGV2ZWwoKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMjkpIHtcclxuICAgICAgICAvLyAgICAgY29jb3N6LmdhbWVNZ3Iuc3VycGx1c0xldmVsTnVtID0gMTtcclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgbGV0IGxldmVsTiA9ICtjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkXHJcbiAgICAgICAgaWYgKGxldmVsTiA+PSAxMDApIHtcclxuICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCAlPSAxMDA7XHJcbiAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgKz0gMjA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA+PSA4MCkge1xyXG4gICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkICs9IDQwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc3RyID0gXCJtYXBcIiArIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkICsgMSk7XHJcbiAgICAgICAgbGV0IG1hcERhdGEgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcIk1hcERhdGEyXCIsIGNjLkpzb25Bc3NldCkuanNvbltzdHJdO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaWR4IG9mIFsxMzldKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IGlkeCkge1xyXG4gICAgICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3Iuc3VycGx1c0xldmVsTnVtKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBmb3IgKGxldCBkZWN0IG9mIG1hcERhdGEpIHtcclxuICAgICAgICAgICAgbGV0IGNoaWxkTmFtZSA9IGRlY3QubmFtZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjaGlsZE5hbWUgPT0gXCJtYXBNYXNrUG9pbnRcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBkZWN0W1wibGlzdFwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbGlzdDIgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGxpc3QzIG9mIGxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdDQgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHBvcyBvZiBsaXN0Mykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYSA9IGNjLnYyKHBvcy54LCBwb3MueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q0LnB1c2goYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3QyLnB1c2gobGlzdDQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGlzdCA9IGxpc3QyO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBwcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcIm1hcE1hc2tcIiwgY2MuUHJlZmFiKVxyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgLy8gbm9kZS54ID0gbGlzdC54XHJcbiAgICAgICAgICAgICAgICAvLyBub2RlLnkgPSBsaXN0LnlcclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKGNjLnYyKGRlY3QueCwgZGVjdC55KSk7XHJcbiAgICAgICAgICAgICAgICBHYW1lLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS56SW5kZXggLT0gOTk5O1xyXG4gICAgICAgICAgICAgICAgbGV0IG1hc2s6IGNjLk1hc2sgPSBub2RlLmdldENvbXBvbmVudChjYy5NYXNrKTtcclxuICAgICAgICAgICAgICAgIGxldCBncmFwaGljcyA9IG1hc2suX2dyYXBoaWNzO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyYXBoaWNzMjogY2MuR3JhcGhpY3MgPSBub2RlLmdldENoaWxkQnlOYW1lKFwibGluZVwiKS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJiID0gbm9kZS5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAgICAgICAgIHJiLnR5cGUgPSBjYy5SaWdpZEJvZHlUeXBlLlN0YXRpYztcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwb2ludCBvZiBsaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbGxpZGVyID0gbm9kZS5hZGRDb21wb25lbnQoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGlkZXIucG9pbnRzID0gW10uY29uY2F0KHBvaW50KTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsaWRlci5hcHBseSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBncmFwaGljcy5tb3ZlVG8ocG9pbnRbMF0ueCwgcG9pbnRbMF0ueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdjIgb2YgcG9pbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKHYyLngsIHYyLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBncmFwaGljcy5maWxsKCk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA8IDEyMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFwaGljczIubGluZVdpZHRoID0gMTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzMi5zdHJva2VDb2xvciA9IG5ldyBjYy5Db2xvcig0MCwgMzMsIDEzLCAyNTUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFwaGljczIubW92ZVRvKHBvaW50WzBdLngsIHBvaW50WzBdLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB2MiBvZiBwb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MyLmxpbmVUbyh2Mi54LCB2Mi55KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFwaGljczIubGluZVRvKHBvaW50WzBdLngsIHBvaW50WzBdLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFwaGljczIuc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGROYW1lID09IFwic2FuZE1hc2tQb2ludFwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbGV0IHBvaW50ID0gY2hpbGQuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIpLnBvaW50cztcclxuICAgICAgICAgICAgICAgIC8vIGxldCBjb21wb25lbnQgPSBjaGlsZC5nZXRDb21wb25lbnRzKGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBkZWN0W1wibGlzdFwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbGlzdDIgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGxpc3QzIG9mIGxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdDQgPSBbXVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHBvcyBvZiBsaXN0Mykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYSA9IGNjLnYyKHBvcy54LCBwb3MueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q0LnB1c2goYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpc3QyLnB1c2gobGlzdDQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGlzdCA9IGxpc3QyO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJzYW5kTWFza1wiLCBjYy5QcmVmYWIpXHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBub2RlLnggPSBkZWN0LnhcclxuICAgICAgICAgICAgICAgIG5vZGUueSA9IGRlY3QueVxyXG4gICAgICAgICAgICAgICAgY2MubG9nKGRlY3QpXHJcbiAgICAgICAgICAgICAgICBHYW1lLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS56SW5kZXggLT0gOTk4O1xyXG4gICAgICAgICAgICAgICAgbGV0IHNjcmlwdCA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlX2RpcnR5XCIpLmdldENvbXBvbmVudChcInRlc3RcIik7XHJcbiAgICAgICAgICAgICAgICBzY3JpcHQucmVzZXQobGlzdClcclxuICAgICAgICAgICAgICAgIGxldCBtYXNrOiBjYy5NYXNrID0gbm9kZS5nZXRDb21wb25lbnQoY2MuTWFzayk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JhcGhpY3MgPSBtYXNrLl9ncmFwaGljcztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBncmFwaGljcy5tb3ZlVG8ocG9pbnRbMF0ueCwgcG9pbnRbMF0ueSk7XHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCB2MiBvZiBwb2ludCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGdyYXBoaWNzLmxpbmVUbyh2Mi54LCB2Mi55KTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGdyYXBoaWNzLmZpbGwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwb2ludCBvZiBsaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHBvaW50WzBdLngsIHBvaW50WzBdLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHYyIG9mIHBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyh2Mi54LCB2Mi55KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZE5hbWUgPT0gXCJiYWZmbGVcIiB8fCBjaGlsZE5hbWUgPT0gXCJoYW5kVGlwc1wiIHx8IGNoaWxkTmFtZSA9PSBcInJvbGVcIiB8fCBjaGlsZE5hbWUgPT0gXCJmYW5cIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBkZWN0O1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKGRhdGEsIGNoaWxkTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoY2hpbGROYW1lLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuc2NhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnNjYWxlID0gZGF0YS5zY2FsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmFuZ2xlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hbmdsZSA9IGRhdGEuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBub2RlLnggPSBkYXRhLng7XHJcbiAgICAgICAgICAgICAgICBub2RlLnkgPSBkYXRhLnk7XHJcbiAgICAgICAgICAgICAgICBHYW1lLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZE5hbWUgPT0gXCJwcm9wTW92ZUZsb29yXCIgfHwgY2hpbGROYW1lID09IFwiZW5lbXlcIiB8fCBjaGlsZE5hbWUgPT0gXCJwcm9wXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJlbnQgPSBuZXcgY2MuTm9kZTtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5uYW1lID0gY2hpbGROYW1lO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKGRlY3QpXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQueCA9IGRlY3QueDtcclxuICAgICAgICAgICAgICAgIHBhcmVudC55ID0gZGVjdC55O1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZGF0YSBvZiBkZWN0Lmxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgZGVjdCA9IG1hcERhdGFbY2hpbGROYW1lXVtjaGlsZDJOYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoZGF0YS5uYW1lLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubmFtZSA9PSBcImNhcnRvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC56SW5kZXggKz0gMTAwM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5zY2FsZVgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2NhbGVYID0gZGF0YS5zY2FsZVg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnNjYWxlWSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zY2FsZVkgPSBkYXRhLnNjYWxlWTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEud2lkdGgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUud2lkdGggPSBkYXRhLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5hbmdsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFuZ2xlID0gZGF0YS5hbmdsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEueCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnggPSBkYXRhLnhcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEueSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnkgPSBkYXRhLnlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm9kZS5zZXRQb3NpdGlvbihjYy52MihkYXRhLngsIGRhdGEueSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLm5hbWUgPT0gXCJuaW1pQ2FjdHVzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5hbmdsZSArPSAzNjAgKiBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEubmFtZSA9PSBcImZsb29yMTFcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcInJvY2tldFwiKS5zY2FsZVggPSBkYXRhW1wicm9ja2V0XCJdLnNjYWxlWDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZGF0YS5uYW1lID09IFwiZmxvb3IxN1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmbG9vciA9IGRhdGFbXCJmbG9vclwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKGZsb29yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiZmxvb3JcIikueCA9IGZsb29yLng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKS55ID0gZmxvb3IueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImZsb29yXCIpLmFuZ2xlID0gZmxvb3IuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKS5zY2FsZVggPSBmbG9vci5zY2FsZVg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKS5zY2FsZVkgPSBmbG9vci5zY2FsZVk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEubmFtZSA9PSBcImZsb29yUm90ZXRhQ29tXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZsb29yID0gZGF0YVtcImZsb29yXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gZGF0YVtcImRpcmVjdGlvblwiXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKS5hbmdsZSA9IGZsb29yLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiZmxvb3JcIikuc2NhbGVYID0gZmxvb3Iuc2NhbGVYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiZmxvb3JcIikuc2NhbGVZID0gZmxvb3Iuc2NhbGVZO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJkaXJlY3Rpb25cIikuYW5nbGUgPSBkaXJlY3Rpb24uYW5nbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJkaXJlY3Rpb25cIikuc2NhbGVYID0gZGlyZWN0aW9uLnNjYWxlWDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImRpcmVjdGlvblwiKS5zY2FsZVkgPSBkaXJlY3Rpb24uc2NhbGVZO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBHYW1lLmFkZENoaWxkKHBhcmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZ2V0TGV2ZWxJRCgpIHtcclxuICAgICAgICBsZXQgbnVtID0gMDtcclxuXHJcbiAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPj0gMTIwKSB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIF9pbml0R2FtZSgpIHtcclxuICAgICAgICBsZXQgR2FtZSA9IGNjLmZpbmQoXCJDYW52YXMvR2FtZVwiKTtcclxuICAgICAgICB3aW5kb3cub25HYW1lU3RhcnQoMSwgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgKyAxKSk7XHJcblxyXG5cclxuICAgICAgICBsZXQgZ2FtZUJnID0gY2MuaW5zdGFudGlhdGUoY29jb3N6LnJlc01nci5nZXRSZXMoXCJnYW1lQmdcIiwgY2MuUHJlZmFiKSk7XHJcbiAgICAgICAgR2FtZS5wYXJlbnQuYWRkQ2hpbGQoZ2FtZUJnKTtcclxuXHJcblxyXG4gICAgICAgIC8vIGxldCBjID0gY2MudHdlZW4oKS5ieSgxODAsIHsgYW5nbGU6IDM2MCB9KTtcclxuICAgICAgICAvLyBjYy50d2VlbihnYW1lQmcuZ2V0Q2hpbGRCeU5hbWUoXCJob21lX2FuaW1hdGlvbl9saWdodFwiKSlcclxuICAgICAgICAvLyAgICAgLnJlcGVhdEZvcmV2ZXIoYylcclxuICAgICAgICAvLyAgICAgLnN0YXJ0KClcclxuXHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3IuaXNHYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIGNvY29zei5nYW1lTWdyLmlzTGVmdEJhbGxvb24gPSBmYWxzZTtcclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pc3JpZ2h0QmFsbG9vbiA9IGZhbHNlO1xyXG4gICAgICAgIGNvY29zei5nYW1lTWdyLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIGNvY29zei5nYW1lTWdyLmlzRmVlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci5zdXJwbHVzTGV2ZWxOdW0gPSAwXHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3IudG91Y2hOdW0gPSAwO1xyXG5cclxuICAgICAgICAvLyBsZXQgbnVtID0gdGhpcy5fZ2V0TGV2ZWxJRCgpXHJcbiAgICAgICAgLy8gaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPj0gMTIwKSB7XHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3IuY3VyTGV2ZWxJRCA9IGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQ7XHJcblxyXG4gICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5NYXhVbmxvY2tMZXZlbENvdW50IDwgY29jb3N6LmdhbWVNZ3IuY3VyTGV2ZWxJRCkge1xyXG4gICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5NYXhVbmxvY2tMZXZlbENvdW50ID0gY29jb3N6LmdhbWVNZ3IuY3VyTGV2ZWxJRFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAgICAgLy8gY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9IE1hdGguZmxvb3IoKChjb2Nvc3ouZ2FtZU1nci5jdXJMZXZlbElEIC0gMTIwKSAlIDExMCkgKiBNYXRoLnJhbmRvbSgpKSArIDIwO1xyXG5cclxuICAgICAgICAvLyBjYy5sb2coXCJnYW1lTWdyLmN1ckxldmVsSUQ6XCIgKyBjb2Nvc3ouZ2FtZU1nci5jdXJMZXZlbElELCBcImRhdGFNZ3IuQ3VyTGV2ZWxJZDpcIiArIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQpXHJcbiAgICAgICAgLy8gY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCAlPSAxMDA7XHJcbiAgICAgICAgLy8gbGV0IHN0ciA9IFwibGV2ZWxcIiArIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkICsgMSlcclxuICAgICAgICAvLyBjYy5sb2coY29jb3N6LnJlc01nci5nZXRSZXMoXCJNYXBEYXRhXCIsIGNjLkpzb25Bc3NldCkuanNvbilcclxuICAgICAgICAvLyBsZXQgbWFwRGF0YSA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiTWFwRGF0YVwiLCBjYy5Kc29uQXNzZXQpLmpzb25bc3RyXTtcclxuICAgICAgICAvLyBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA+PSA4MCkge1xyXG4gICAgICAgIC8vICAgICBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkICs9IDQwO1xyXG4gICAgICAgIC8vICAgICBzdHIgPSBcIm1hcFwiICsgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgKyAxKVxyXG4gICAgICAgIC8vICAgICBtYXBEYXRhID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJNYXBEYXRhMlwiLCBjYy5Kc29uQXNzZXQpLmpzb25bc3RyXTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGlkeCBvZiBbMTM5XSkge1xyXG4gICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSBpZHgpIHtcclxuICAgICAgICAgICAgICAgIGNvY29zei5nYW1lTWdyLnN1cnBsdXNMZXZlbE51bSsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID49IDE0MCkge1xyXG5cclxuICAgICAgICAvLyBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID0gY29jb3N6LmRhdGFNZ3IuZ2V0UmFtZG9tTGV2ZWwoKTtcclxuICAgICAgICAvLyBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA+PSAxMjApIHtcclxuICAgICAgICAvLyAgICAgY29jb3N6LmdhbWVNZ3Iuc3VycGx1c0xldmVsTnVtKys7XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhjb2Nvc3ouZ2FtZU1nci5zdXJwbHVzTGV2ZWxOdW0sIFwiLS1jb2Nvc3ouZ2FtZU1nci5zdXJwbHVzTGV2ZWxOdW1cIilcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPj0gMTMwKSB7XHJcbiAgICAgICAgLy8gICAgIGNvY29zei5nYW1lTWdyLnN1cnBsdXNMZXZlbE51bSsrO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID49IDEyMCkge1xyXG5cclxuICAgICAgICAvLyAgICAgICAgIHRoaXMub25HZXRMZXZlbDIoKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMub25HZXRMZXZlbCgpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vICAgICBjYy5sb2coY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZClcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGNjLmxvZyhcImdhbWVNZ3IuY3VyTGV2ZWxJRDpcIiArIGNvY29zei5nYW1lTWdyLmN1ckxldmVsSUQsIFwiZGF0YU1nci5DdXJMZXZlbElkOlwiICsgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZClcclxuXHJcblxyXG5cclxuICAgICAgICAvLyBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMjkpIHtcclxuICAgICAgICAvLyAgICAgY29jb3N6LmdhbWVNZ3Iuc3VycGx1c0xldmVsTnVtID0gMTtcclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuICAgICAgICBsZXQgbGV2ZWxOID0gK2NvY29zei5kYXRhTWdyLkN1ckxldmVsSWRcclxuICAgICAgICBpZiAobGV2ZWxOID49IDEwMCkge1xyXG4gICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkICU9IDEwMDtcclxuXHJcbiAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgKz0gMjA7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPj0gODApIHtcclxuICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCArPSA0MDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBtYXA6IGNjLlByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwibWFwXCIgKyAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCArIDEpLCBjYy5QcmVmYWIpO1xyXG5cclxuICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA+PSAxMjAgJiYgY29jb3N6LmdhbWVNZ3IuY3VyTGV2ZWxJRCA+IDE0MCkge1xyXG4gICAgICAgICAgICBtYXAgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcIm1hcFwiICsgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCwgY2MuUHJlZmFiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgbWFwLmRhdGEuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkLm5hbWUgPT0gXCJtYXBNYXNrUG9pbnRcIikge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSBjaGlsZC5nZXRDb21wb25lbnRzKGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHBvbHkgb2YgY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvbHkucG9pbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChwb2x5LnBvaW50cylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwibWFwTWFza1wiLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyYXBoaWNzMjogY2MuR3JhcGhpY3MgPSBub2RlLmdldENoaWxkQnlOYW1lKFwibGluZVwiKS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgICAgICAgICAgR2FtZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhjaGlsZC55LCBcIi0tLS0tLS0tLS0tLWNoaWxkLnlcIiwgbGlzdClcclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24oY2hpbGQuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnpJbmRleCAtPSA5OTk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWFzazogY2MuTWFzayA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLk1hc2spO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyYXBoaWNzID0gbWFzay5fZ3JhcGhpY3M7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmIgPSBub2RlLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICAgICAgcmIudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHBvaW50IG9mIGxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29sbGlkZXIgPSBub2RlLmFkZENvbXBvbmVudChjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coY29sbGlkZXIudGFnLCBcIi0tLS0tLS0tLS1jb2xsaWRlci50YWdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGlkZXIudGFnID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsaWRlci5wb2ludHMgPSBbXS5jb25jYXQocG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpZGVyLmFwcGx5KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyhwb2ludFswXS54LCBwb2ludFswXS55KTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB2MiBvZiBwb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFwaGljcy5saW5lVG8odjIueCwgdjIueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzLmZpbGwoKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkIDwgMTIwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFwaGljczIubGluZVdpZHRoID0gMTU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzMi5zdHJva2VDb2xvciA9IG5ldyBjYy5Db2xvcig0MCwgMzMsIDEzLCAyNTUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFwaGljczIubW92ZVRvKHBvaW50WzBdLngsIHBvaW50WzBdLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB2MiBvZiBwb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MyLmxpbmVUbyh2Mi54LCB2Mi55KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFwaGljczIubGluZVRvKHBvaW50WzBdLngsIHBvaW50WzBdLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFwaGljczIuc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQubmFtZSA9PSBcInNhbmRNYXNrUG9pbnRcIikge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGxldCBwb2ludCA9IGNoaWxkLmdldENvbXBvbmVudChjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKS5wb2ludHM7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50ID0gY2hpbGQuZ2V0Q29tcG9uZW50cyhjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKTtcclxuICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwb2x5IG9mIGNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2x5LnBvaW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2gocG9seS5wb2ludHMpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJzYW5kTWFza1wiLCBjYy5QcmVmYWIpXHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKGNoaWxkLmdldFBvc2l0aW9uKCkpXHJcbiAgICAgICAgICAgICAgICBHYW1lLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS56SW5kZXggLT0gOTk4O1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTE5KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuekluZGV4ICs9IDk5ODtcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHNjcmlwdCA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJub2RlX2RpcnR5XCIpLmdldENvbXBvbmVudChcInRlc3RcIik7XHJcbiAgICAgICAgICAgICAgICBzY3JpcHQucmVzZXQobGlzdClcclxuICAgICAgICAgICAgICAgIGxldCBtYXNrOiBjYy5NYXNrID0gbm9kZS5nZXRDb21wb25lbnQoY2MuTWFzayk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JhcGhpY3MgPSBtYXNrLl9ncmFwaGljcztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBncmFwaGljcy5tb3ZlVG8ocG9pbnRbMF0ueCwgcG9pbnRbMF0ueSk7XHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCB2MiBvZiBwb2ludCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGdyYXBoaWNzLmxpbmVUbyh2Mi54LCB2Mi55KTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGdyYXBoaWNzLmZpbGwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwb2ludCBvZiBsaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHBvaW50WzBdLngsIHBvaW50WzBdLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHYyIG9mIHBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyh2Mi54LCB2Mi55KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZC5uYW1lID09IFwicm9sZVwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShjb2Nvc3oucmVzTWdyLmdldFJlcyhcInJvbGVcIiwgY2MuUHJlZmFiKSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKGNoaWxkLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zY2FsZSA9IGNoaWxkLnNjYWxlO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hbmdsZSA9IGNoaWxkLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgR2FtZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQubmFtZSA9PSBcImJhZmZsZVwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiYmFmZmxlXCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNjYWxlID0gY2hpbGQuc2NhbGU7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFuZ2xlID0gY2hpbGQuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKGNoaWxkLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICAgICAgR2FtZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZC5uYW1lID09IFwiZmFuXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJmYW5cIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSBjaGlsZC5zY2FsZTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYW5nbGUgPSBjaGlsZC5hbmdsZTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24oY2hpbGQuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgICAgICBHYW1lLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkLm5hbWUgPT0gXCJoYW5kVGlwc1wiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiaGFuZFRpcHNcIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSBjaGlsZC5zY2FsZTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYW5nbGUgPSBjaGlsZC5hbmdsZTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24oY2hpbGQuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgICAgICBHYW1lLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGVsc2UgaWYgKGNoaWxkLm5hbWUgPT0gXCJjYWN0dXNcIikge1xyXG5cclxuICAgICAgICAgICAgLy8gICAgIGxldCBwcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcImNhY3R1c1wiLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgICAgICAvLyAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICAvLyAgICAgbm9kZS5zY2FsZSA9IGNoaWxkLnNjYWxlO1xyXG4gICAgICAgICAgICAvLyAgICAgbm9kZS5hbmdsZSA9IGNoaWxkLmFuZ2xlO1xyXG4gICAgICAgICAgICAvLyAgICAgbm9kZS56SW5kZXgrPTEwMFxyXG4gICAgICAgICAgICAvLyAgICAgbm9kZS5zZXRQb3NpdGlvbihjaGlsZC5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgLy8gICAgIEdhbWUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkLm5hbWUgPT0gXCJwcm9wTW92ZUZsb29yXCIgfHwgY2hpbGQubmFtZSA9PSBcImVuZW15XCIgfHwgY2hpbGQubmFtZSA9PSBcInByb3BcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcmVudCA9IG5ldyBjYy5Ob2RlO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50Lm5hbWUgPSBjaGlsZC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LnNldFBvc2l0aW9uKGNoaWxkLmdldFBvc2l0aW9uKCkpXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZDIgb2YgY2hpbGQuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoY2hpbGQyLm5hbWUsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZDIubmFtZSA9PSBcImNhcnRvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC56SW5kZXggKz0gMTAwM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAoY2hpbGQyLm5hbWUgPT0gXCJzdG9uZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNjLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS1cIiwgbm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2NhbGVYID0gY2hpbGQyLnNjYWxlWDtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnNjYWxlWSA9IGNoaWxkMi5zY2FsZVk7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS53aWR0aCA9IGNoaWxkMi53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmFuZ2xlID0gY2hpbGQyLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZDIubmFtZSA9PSBcIm5pbWlDYWN0dXNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFuZ2xlICs9IDM2MCAqIE1hdGgucmFuZG9tKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkMi5uYW1lID09IFwiZmxvb3IxMVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyb2NrZXRcIikuc2NhbGVYID0gY2hpbGQyLmdldENoaWxkQnlOYW1lKFwicm9ja2V0XCIpLnNjYWxlWDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9kZS5nZXRDaGlsZEJ5TmFtZShcInJvY2tldFwiKS54ID0gLWNoaWxkMi5nZXRDaGlsZEJ5TmFtZShcInJvY2tldFwiKS54O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQyLm5hbWUgPT0gXCJmbG9vcjE3XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZsb29yID0gY2hpbGQyLmdldENoaWxkQnlOYW1lKFwiZmxvb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKS5hbmdsZSA9IGZsb29yLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiZmxvb3JcIikuc2NhbGVYID0gZmxvb3Iuc2NhbGVYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiZmxvb3JcIikuc2NhbGVZID0gZmxvb3Iuc2NhbGVZO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiZmxvb3JcIikueCA9IGZsb29yLng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKS55ID0gZmxvb3IueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9kZS5nZXRDaGlsZEJ5TmFtZShcInJvY2tldFwiKS54ID0gLWNoaWxkMi5nZXRDaGlsZEJ5TmFtZShcInJvY2tldFwiKS54O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQyLm5hbWUgPT0gXCJmbG9vclJvdGV0YUNvbVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmbG9vciA9IGNoaWxkMi5nZXRDaGlsZEJ5TmFtZShcImZsb29yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gY2hpbGQyLmdldENoaWxkQnlOYW1lKFwiZGlyZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiZmxvb3JcIikuYW5nbGUgPSBmbG9vci5hbmdsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImZsb29yXCIpLnNjYWxlWCA9IGZsb29yLnNjYWxlWDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImZsb29yXCIpLnNjYWxlWSA9IGZsb29yLnNjYWxlWTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiZGlyZWN0aW9uXCIpLmFuZ2xlID0gZGlyZWN0aW9uLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiZGlyZWN0aW9uXCIpLnNjYWxlWCA9IGRpcmVjdGlvbi5zY2FsZVg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJkaXJlY3Rpb25cIikuc2NhbGVZID0gZGlyZWN0aW9uLnNjYWxlWTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihjaGlsZDIuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgR2FtZS5hZGRDaGlsZChwYXJlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy5sb2coR2FtZSlcclxuICAgICAgICAvLyBsZXQgbWFwTWFza1BvaW50ID0gbWFwLmRhdGEuZ2V0Q2hpbGRCeU5hbWUoXCJtYXBNYXNrUG9pbnRcIik7XHJcbiAgICAgICAgLy8gaWYgKG1hcE1hc2tQb2ludCkge1xyXG4gICAgICAgIC8vICAgICBsZXQgY29tcG9uZW50ID0gbWFwTWFza1BvaW50LmdldENvbXBvbmVudHMoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XHJcbiAgICAgICAgLy8gICAgIGxldCBsaXN0ID0gW107XHJcbiAgICAgICAgLy8gICAgIGZvciAobGV0IHBvbHkgb2YgY29tcG9uZW50KSB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAocG9seS5wb2ludHMpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsaXN0LnB1c2gocG9seS5wb2ludHMpXHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuXHJcbiAgICAgICAgLy8gICAgIGxldCBwcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcIm1hcE1hc2tcIiwgY2MuUHJlZmFiKVxyXG4gICAgICAgIC8vICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgLy8gICAgIGNhbnZhcy5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAvLyAgICAgbm9kZS56SW5kZXggLT0gOTk5O1xyXG4gICAgICAgIC8vICAgICBsZXQgbWFzazogY2MuTWFzayA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLk1hc2spO1xyXG4gICAgICAgIC8vICAgICBsZXQgZ3JhcGhpY3MgPSBtYXNrLl9ncmFwaGljcztcclxuICAgICAgICAvLyAgICAgbGV0IHJiID0gbm9kZS5hZGRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgICAgICAvLyAgICAgcmIudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljO1xyXG5cclxuICAgICAgICAvLyAgICAgZm9yIChsZXQgcG9pbnQgb2YgbGlzdCkge1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGNvbGxpZGVyID0gbm9kZS5hZGRDb21wb25lbnQoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XHJcbiAgICAgICAgLy8gICAgICAgICBjb2xsaWRlci5wb2ludHMgPSBbXS5jb25jYXQocG9pbnQpO1xyXG4gICAgICAgIC8vICAgICAgICAgY29sbGlkZXIuYXBwbHkoKTtcclxuICAgICAgICAvLyAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyhwb2ludFswXS54LCBwb2ludFswXS55KTtcclxuICAgICAgICAvLyAgICAgICAgIGZvciAobGV0IHYyIG9mIHBvaW50KSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKHYyLngsIHYyLnkpO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgZ3JhcGhpY3MuZmlsbCgpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuXHJcbiAgICAgICAgLy8gbGV0IHNhbmRNYXNrUG9pbnQgPSBtYXAuZGF0YS5nZXRDaGlsZEJ5TmFtZShcInNhbmRNYXNrUG9pbnRcIik7XHJcbiAgICAgICAgLy8gaWYgKHNhbmRNYXNrUG9pbnQpIHtcclxuICAgICAgICAvLyAgICAgbGV0IHBvaW50ID0gc2FuZE1hc2tQb2ludC5nZXRDb21wb25lbnQoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcikucG9pbnRzO1xyXG4gICAgICAgIC8vICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJzYW5kTWFza1wiLCBjYy5QcmVmYWIpXHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhwcmVmYWIpO1xyXG4gICAgICAgIC8vICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgLy8gICAgIGNhbnZhcy5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAvLyAgICAgbm9kZS56SW5kZXggLT0gOTk4O1xyXG4gICAgICAgIC8vICAgICBsZXQgc2NyaXB0ID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVfZGlydHlcIikuZ2V0Q29tcG9uZW50KFwidGVzdFwiKTtcclxuICAgICAgICAvLyAgICAgc2NyaXB0LnJlc2V0KHBvaW50KVxyXG4gICAgICAgIC8vICAgICBsZXQgbWFzazogY2MuTWFzayA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLk1hc2spO1xyXG4gICAgICAgIC8vICAgICBsZXQgZ3JhcGhpY3MgPSBtYXNrLl9ncmFwaGljcztcclxuXHJcbiAgICAgICAgLy8gICAgIGdyYXBoaWNzLm1vdmVUbyhwb2ludFswXS54LCBwb2ludFswXS55KTtcclxuICAgICAgICAvLyAgICAgZm9yIChsZXQgdjIgb2YgcG9pbnQpIHtcclxuICAgICAgICAvLyAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyh2Mi54LCB2Mi55KTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBncmFwaGljcy5maWxsKCk7XHJcblxyXG5cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gbGV0IGJhZmZsZSA9IG1hcC5kYXRhLmdldENoaWxkQnlOYW1lKFwiYmFmZmxlXCIpO1xyXG4gICAgICAgIC8vIGlmIChiYWZmbGUpIHtcclxuICAgICAgICAvLyAgICAgbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiYmFmZmxlXCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgLy8gICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAvLyAgICAgbm9kZS5zZXRQb3NpdGlvbihiYWZmbGUuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgLy8gICAgIGNhbnZhcy5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gbGV0IHJvbGUgPSBtYXAuZGF0YS5nZXRDaGlsZEJ5TmFtZShcInJvbGVcIik7XHJcbiAgICAgICAgLy8gaWYgKHJvbGUpIHtcclxuICAgICAgICAvLyAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShjb2Nvc3oucmVzTWdyLmdldFJlcyhcInJvbGVcIiwgY2MuUHJlZmFiKSk7XHJcbiAgICAgICAgLy8gICAgIG5vZGUuc2V0UG9zaXRpb24ocm9sZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAvLyAgICAgY2FudmFzLmdldENoaWxkQnlOYW1lKFwicm9sZU1hZ1wiKS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgX2luaXRSZXMoKSB7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==