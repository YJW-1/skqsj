
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Ui/UiHome.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '30205IoTKpFQL3rsnrpsFgP', 'UiHome');
// script/Ui/UiHome.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UIPage_1 = require("./UIPage");
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
// import { BannerLocation } from "../common-plugin/Scripts/YZ_Constant";
// import { utils } from "../common-plugin/Scripts/Utils";
var Msg_1 = require("../Framework/Msg");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UiHome = /** @class */ (function (_super) {
    __extends(UiHome, _super);
    function UiHome() {
        var _this = _super.call(this) || this;
        _this._BtnShop = null;
        _this._BtnStart = null;
        _this._BtnAudio = null;
        _this._BtnSign = null;
        _this._CoinLabel = null;
        _this._ScaleNode = null;
        _this._BtnLevel = null;
        _this._BtnLevel2 = null;
        _this._BtnSet = null;
        _this._BtnLottery = null;
        _this._Cloud1 = null;
        _this._Cloud2 = null;
        _this._Enemy = null;
        _this._Logo = null;
        _this.man = null;
        _this.num = 0;
        _this.action = null;
        _this._init();
        return _this;
    }
    UiHome.prototype._init = function () {
        var Game = CocosZ_1.cocosz.resMgr.getRes(Constant_1.PageName.UiHome, cc.Prefab);
        if (Game) {
            var node = cc.instantiate(Game);
            if (node) {
                this._page = node;
                cc.find("Canvas/ui").addChild(node);
                node.active = false;
                node.position = cc.Vec3.ZERO;
                this._onLoad();
            }
        }
    };
    UiHome.prototype._onLoad = function () {
        this._BtnShop = cc.find("Canvas/ui/UiHome/ScaleNode/BtnShop");
        this._BtnStart = cc.find("Canvas/ui/UiHome/ScaleNode/BtnStart");
        this._BtnSign = cc.find("Canvas/ui/UiHome/ScaleNode/BtnSign");
        this._BtnLottery = cc.find("Canvas/ui/UiHome/ScaleNode/BtnLottery");
        this._BtnLevel = cc.find("Canvas/ui/UiHome/ScaleNode/BtnLevel");
        this._BtnLevel2 = cc.find("Canvas/ui/UiHome/ScaleNode/BtnLevel2");
        this._BtnSet = cc.find("Canvas/ui/UiHome/ScaleNode/BtnSet");
        this._Cloud1 = cc.find("Canvas/ui/UiHome/ScaleNode/prop/cloud1");
        this._Cloud2 = cc.find("Canvas/ui/UiHome/ScaleNode/prop/cloud2");
        this._Logo = cc.find("Canvas/ui/UiHome/ScaleNode/logo").getComponent(dragonBones.ArmatureDisplay);
        this.man = cc.find("Canvas/ui/UiHome/ScaleNode/man").getComponent(dragonBones.ArmatureDisplay);
        this._ScaleNode = cc.find("Canvas/ui/UiHome/ScaleNode");
        this._CoinLabel = cc.find("Canvas/ui/UiHome/ScaleNode/Coin/num").getComponent(cc.Label);
        this._Start();
        if (!cc.director.getPhysicsManager().enabled) {
            // cc.find('PROFILER-NODE').scale = 2;
            cc.director.getPhysicsManager().enabled = true;
            cc.director.getCollisionManager().enabled = true;
            // 开启物理步长的设置
            // cc.director.getPhysicsManager().enabledAccumulator = true;
            // // 物理步长，默认 FIXED_TIME_STEP 是 1/60
            // cc.PhysicsManager.FIXED_TIME_STEP = 1 / 60;
            // // 每次更新物理系统处理速度的迭代次数，默认为 10
            // cc.PhysicsManager.VELOCITY_ITERATIONS = 8;
            // // 每次更新物理系统处理位置的迭代次数，默认为 10
            // cc.PhysicsManager.POSITION_ITERATIONS = 8;
            // cc.director.getPhysicsManager().debugDrawFlags = 1;
            // cc.director.getCollisionManager().enabledDebugDraw = true;
            // var Bits = cc.PhysicsManager.DrawBits;
            // cc.director.getPhysicsManager().debugDrawFlags =
            //     Bits.e_aabbBit |
            //     Bits.e_jointBit |
            //     Bits.e_shapeBit;
        }
    };
    UiHome.prototype._Start = function () {
        var _this = this;
        this._BtnShop.on(cc.Node.EventType.TOUCH_END, this.OnBtnShop, this);
        this._BtnStart.on(cc.Node.EventType.TOUCH_END, this.OnBtnStart, this);
        // this._BtnStart.on(cc.Node.EventType.TOUCH_START, () => {
        //     this._BtnStart.getChildByName("home_btn_star_select").active = true;
        // }, this);
        // this._BtnStart.on(cc.Node.EventType.TOUCH_CANCEL, () => {
        //     this._BtnStart.getChildByName("home_btn_star_select").active = false;
        // }, this);
        // this._BtnAudio.on(cc.Node.EventType.TOUCH_START, this.OnBtnAudio, this);
        this._BtnSign.on(cc.Node.EventType.TOUCH_END, this.OnBtnSign, this);
        this._BtnLottery.on(cc.Node.EventType.TOUCH_END, this.OnBtnLottery, this);
        this._BtnSet.on(cc.Node.EventType.TOUCH_END, this.OnBtnSet, this);
        // this._Cover.on(cc.Node.EventType.TOUCH_START, this.OnBtnCover, this);
        this._BtnLevel.on(cc.Node.EventType.TOUCH_START, this.OnBtnLevel, this);
        this._BtnLevel2.on(cc.Node.EventType.TOUCH_START, this.OnBtnLevel2, this);
        // let a=cc.sequence(cc.scaleTo())
        // this.handTips.runAction(cc.repeatForever())
        this._CoinLabel.string = CocosZ_1.cocosz.dataMgr.CoinCount + "";
        cc.game.on(Constant_1.default.E_UPDATE_COIN, function () {
            _this._CoinLabel.string = CocosZ_1.cocosz.dataMgr.CoinCount.toString();
        }, this);
        this._ScaleNode.getChildByName("logo").on(cc.Node.EventType.TOUCH_START, function () {
            _this.num++;
            if (_this.num > 10) {
                cc.log("--------解锁全部关卡");
                CocosZ_1.cocosz.gameMgr.isLevelOpen = true;
            }
        }, this);
    };
    UiHome.prototype.onOpen = function () {
        // cocosz.uiMgr.openPanel(PanelName.UiBeforeSucceed);
        CocosZ_1.cocosz.dataMgr.CoinCount = 99999;
        CocosZ_1.cocosz.dataMgr.IsEnd = null;
        if (CocosZ_1.cocosz.dataMgr.AudioOn) {
            CocosZ_1.cocosz.audioMgr.playGameMusic();
        }
        cc.director.getScheduler().enableForTarget(this);
        var node = this._BtnSign.getChildByName("home_animation_light");
        cc.tween(node)
            .repeatForever(cc.tween().by(5, { angle: 360 }))
            .start();
        // if (cc.sys.platform === cc.sys.WECHAT_GAME) {
        //     if (!cocosz.gameMgr.isFirst2) {
        //         cocosz.gameMgr.isFirst2 = true;
        //         cocosz.scheduleOnce(() => {
        //             lieyou_SdkManager.showMoreGameByBanner();
        //             lieyou_SdkManager.showMoreGameSide();
        //         }, 2)
        //     }
        //     else {
        //         lieyou_SdkManager.showMoreGameByBanner();
        //         lieyou_SdkManager.showMoreGameSide();
        //     }
        // }
        // else if ((cc.sys.platform === cc.sys.VIVO_GAME)) {
        //     lieyou_SdkManager.showBannerByBottom();
        // }
        // else if (cc.sys.platform === cc.sys.OPPO_GAME) {
        //     cc.log("isOppo-------------------", cocosz.gameMgr.isFirst2)
        //     if (!cocosz.gameMgr.isFirst2) {
        //         cocosz.gameMgr.isFirst2 = true;
        //         cocosz.scheduleOnce(() => {
        //             lieyou_SdkManager.showMoreGameByIcon({
        //                 node: this._ScaleNode.getChildByName("iconMoreGame"),
        //                 side: 130,
        //             });
        //             lieyou_SdkManager.showMoreGameByBanner();
        //             lieyou_SdkManager.showMoreGameSide({
        //                 isPersist: false,
        //                 sideType_right: false,
        //                 y: 200
        //             });
        //         }, 2)
        //     }
        //     else {
        //         lieyou_SdkManager.showMoreGameByIcon({
        //             node: this._ScaleNode.getChildByName("iconMoreGame"),
        //             side: 130,
        //         });
        //         lieyou_SdkManager.showMoreGameByBanner();
        //         lieyou_SdkManager.showMoreGameSide({
        //             isPersist: false,
        //             sideType_right: false,
        //             y: 200
        //         });
        //     }
        // }
        CocosZ_1.cocosz.gameMgr.tweeBtn(this._BtnStart, 0.9, 0.85);
        // let b = cc.repeatForever(cc.sequence(cc.delayTime(5), cc.repeat(cc.sequence(cc.rotateTo(0.1, 10), cc.rotateTo(0.1, -10)), 3), cc.rotateTo(0.1, 0)));
        // this._BtnShop.runAction(b);
        // let g = cc.repeatForever(cc.sequence(cc.delayTime(5), cc.repeat(cc.sequence(cc.rotateTo(0.1, 10), cc.rotateTo(0.1, -10)), 3), cc.rotateTo(0.1, 0)));
        // this._BtnSign.runAction(g);
        // let c = cc.tween().by(10, { angle: 360 });
        // let c2 = cc.tween().by(3, { angle: 360 });
        // cc.tween(this._BtnSign.getChildByName("home_animation_light"))
        //     .repeatForever(c)
        //     .start()
        // cc.tween(this._BtnLottery.getChildByName("halo"))
        //     .repeatForever(c2)
        //     .start()
        // let curDate = new Date();
        // let canBonus = curDate.toDateString() != cocosz.dataMgr.LastBonusTime;
        // if (canBonus && cocosz.dataMgr.CurLevelId >= 3) {
        //     // cocosz.uiMgr.openPanel(PanelName.UiSign);
        // }
        // this._Logo.playAnimation("logo_move", 1);
        // this._Logo.on(dragonBones.EventObject.COMPLETE, () => {
        //     this._Logo.playAnimation("logo_idle", 0);
        //     this._Logo.off(dragonBones.EventObject.COMPLETE)
        // }, this._Logo)
        // let d = cc.tween().sequence(
        //     cc.tween().call(() => {
        //         let cNode1 = cc.instantiate(this._Cloud1);
        //         let cNode2 = cc.instantiate(this._Cloud2);
        //         this._Cloud1.parent.addChild(cNode1);
        //         this._Cloud1.parent.addChild(cNode2);
        //         cNode1.y = Math.random() * 360;
        //         cNode2.y = Math.random() * 360;
        //         if (cNode1.x < 0) {
        //             cNode1.x -= Math.random() * 360;
        //         }
        //         else {
        //             cNode1.x += Math.random() * 360;
        //         }
        //         if (cNode2.x < 0) {
        //             cNode2.x -= Math.random() * 360;
        //         }
        //         else {
        //             cNode2.x += Math.random() * 360;
        //         }
        //         let pos1 = cc.v2((2500 + Math.random() * 500) * cNode1.scaleX, 0)
        //         let pos2 = cc.v2((2500 + Math.random() * 500) * cNode2.scaleX, 0)
        //         if (Math.random() > 0.4) {
        //             cNode1.x *= -1;
        //             cNode1.scaleX *= -1;
        //             pos1.x *= -1;
        //         }
        //         cc.tween(cNode1)
        //             .by(50 + 5 * Math.random(), { position: pos1 })
        //             .call(() => {
        //                 cNode1.destroy();
        //             })
        //             .start()
        //         cc.tween(cNode2)
        //             .by(50 + 5 * Math.random(), { position: pos2 })
        //             .call(() => {
        //                 cNode2.destroy();
        //             })
        //             .start()
        //     }),
        //     cc.tween().delay(50)
        // )
        // cc.tween(this._Cloud1.parent)
        //     .repeatForever(d)
        //     .start();
        // let f = cc.tween().sequence(
        //     cc.tween().call(() => {
        //         let prefab = cocosz.resMgr.getRes("enemy3", cc.Prefab)
        //         let node = cc.instantiate(prefab);
        //         node.setPosition(cc.v2(-238, -560));
        //         this._ScaleNode.addChild(node);
        //         this._Enemy = node;
        //         // cc.log(this._Enemy,"------------")
        //     }),
        //     cc.tween().delay(5),
        //     cc.tween().call(() => {
        //         this.man.playAnimation("home", 1)
        //     }),
        //     cc.tween().delay(1),
        //     cc.tween().call(() => {
        //         this._Enemy.getChildByName("right_balloon").destroy();
        //         cocosz.audioMgr.playMetalStoneEffect2();
        //         cocosz.audioMgr.playGunEffect();
        //     }),
        //     cc.tween().delay(0.3),
        //     cc.tween().call(() => {
        //         this._Enemy.getChildByName("left_balloon").destroy();
        //         cocosz.audioMgr.playMetalStoneEffect2();
        //         cocosz.audioMgr.playGunEffect();
        //         cocosz.audioMgr.playBeforeFeildEffect1();
        //     }),
        //     cc.tween().delay(0.6),
        //     cc.tween().call(() => {
        //         this.man.playAnimation("idle", 0)
        //     }),
        //     cc.tween().delay(5),
        //     cc.tween().call(() => {
        //         this._Enemy.destroy();
        //     }),
        // )
        // this.action = cc.tween(this.man)
        //     .repeatForever(f)
        //     .start();
        return;
        var mapData = {};
        var num = 0;
        while (num++ < 20) {
            var key = "level" + num;
            var dect = mapData[key] = [];
            dect["supplement"] = [];
            var data = CocosZ_1.cocosz.resMgr.getRes("level" + num, cc.Prefab).data;
            // cc.log(data, num);
            for (var _i = 0, _a = data.children; _i < _a.length; _i++) {
                var child = _a[_i];
                var dect2 = {};
                dect2["x"] = child.x;
                dect2["y"] = child.y;
                dect2["scaleX"] = child.scaleX;
                dect2["scaleY"] = child.scaleY;
                dect2["angle"] = child.angle;
                dect2["name"] = child.name;
                if (child.name == "mapMask2") {
                    var component = child.getComponents(cc.PhysicsPolygonCollider);
                    var list = [];
                    for (var _b = 0, component_1 = component; _b < component_1.length; _b++) {
                        var poly = component_1[_b];
                        if (poly.points) {
                            list.push(poly.points);
                        }
                    }
                    dect2["list"] = list;
                }
                dect.push(dect2);
            }
        }
        cc.log(JSON.stringify(mapData));
    };
    UiHome.prototype.OnBtnShop = function () {
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        cc.log("------PanelName.UiShop-------");
        if ((cc.sys.platform === cc.sys.VIVO_GAME)) {
            lieyou_SdkManager.showSpotByPause();
        }
        else if (cc.sys.platform === cc.sys.OPPO_GAME) {
            // lieyou_SdkManager.hideBanner()
        }
        CocosZ_1.cocosz.uiMgr.openPanel(Constant_1.PanelName.UiShop);
    };
    UiHome.prototype.OnBtnSet = function () {
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        if ((cc.sys.platform === cc.sys.VIVO_GAME)) {
            lieyou_SdkManager.showSpotByPause();
        }
        else if (cc.sys.platform === cc.sys.OPPO_GAME) {
            // lieyou_SdkManager.hideBanner()
        }
        CocosZ_1.cocosz.uiMgr.openPanel(Constant_1.PanelName.UiSet);
    };
    UiHome.prototype.OnBtnStart = function () {
        // this.action.stop();
        // cocosz.audioMgr.playbtnEffect();
        // cocosz.uiMgr.openPanel(PanelName.UiLottery);
        // Msg.Show("一直抽一直爽");
        // return;
        // cocosz.gameMgr.isGameOver = false;
        // cocosz.sceneMgr.loadScene("rewardLevel2", () => {
        //     Msg.Show("奖励关卡来临")
        // });
        // return;
        CocosZ_1.cocosz.sceneMgr.loadScene("Game2", function () {
            CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UiGame);
            CocosZ_1.cocosz.gameMgr.initGame();
        });
        return;
        var mapData = {};
        var num = 0;
        while (num++ < 140) {
            var key = "map" + num;
            var dect = mapData[key] = [];
            dect["supplement"] = [];
            var data = CocosZ_1.cocosz.resMgr.getRes("map" + num, cc.Prefab).data;
            // cc.log(data, num);
            for (var _i = 0, _a = data.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (child.name == "mapMaskPoint") {
                    var component = child.getComponents(cc.PhysicsPolygonCollider);
                    var list = [];
                    var list4 = [];
                    for (var _b = 0, component_2 = component; _b < component_2.length; _b++) {
                        var poly = component_2[_b];
                        if (poly.points) {
                            list.push(poly.points);
                        }
                    }
                    var _loop_1 = function (list2) {
                        var list3 = [];
                        list2.map(function (i, j) {
                            var dd = {};
                            dd["x"] = i.x;
                            dd["y"] = i.y;
                            // cc.log(dd)
                            list3.push(dd);
                            // return dd;
                        });
                        list4.push(list3);
                    };
                    for (var _c = 0, list_1 = list; _c < list_1.length; _c++) {
                        var list2 = list_1[_c];
                        _loop_1(list2);
                    }
                    var a = {};
                    a["name"] = child.name;
                    a["list"] = list4;
                    a["x"] = child.x;
                    a["y"] = child.y;
                    dect.push(a);
                }
                else if (child.name == "sandMaskPoint") {
                    // let point = child.getComponent(cc.PhysicsPolygonCollider).points;
                    var component = child.getComponents(cc.PhysicsPolygonCollider);
                    var list = [];
                    var list4 = [];
                    for (var _d = 0, component_3 = component; _d < component_3.length; _d++) {
                        var poly = component_3[_d];
                        if (poly.points) {
                            list.push(poly.points);
                        }
                    }
                    var _loop_2 = function (list2) {
                        var list3 = [];
                        list2.map(function (i, j) {
                            var dd = {};
                            dd["x"] = i.x;
                            dd["y"] = i.y;
                            // cc.log(dd)
                            list3.push(dd);
                            // return dd;
                        });
                        list4.push(list3);
                    };
                    for (var _e = 0, list_2 = list; _e < list_2.length; _e++) {
                        var list2 = list_2[_e];
                        _loop_2(list2);
                    }
                    var a = {};
                    a["name"] = child.name;
                    a["list"] = list4;
                    a["x"] = child.x;
                    a["y"] = child.y;
                    dect.push(a);
                }
                else if (child.name == "role") {
                    var a = {};
                    a["x"] = child.x;
                    a["y"] = child.y;
                    a["name"] = child.name;
                    dect.push(a);
                }
                else if (child.name == "baffle") {
                    var a = {};
                    a["x"] = child.x;
                    a["y"] = child.y;
                    a["name"] = child.name;
                    dect.push(a);
                }
                else if (child.name == "fan") {
                    var a = {};
                    a["x"] = child.x;
                    a["y"] = child.y;
                    a["scale"] = child.scale;
                    a["angle"] = child.angle;
                    a["name"] = child.name;
                    dect.push(a);
                }
                else if (child.name == "handTips") {
                    var a = {};
                    a["x"] = child.x;
                    a["y"] = child.y;
                    a["scale"] = child.scale;
                    a["angle"] = child.angle;
                    a["name"] = child.name;
                    dect.push(a);
                }
                else if (child.name == "propMoveFloor" || child.name == "enemy" || child.name == "prop") {
                    var parent = new cc.Node;
                    parent.name == child.name;
                    // dect[child.name] = [];
                    var dect2 = {};
                    dect2["name"] = child.name;
                    dect2["list"] = [];
                    dect2["x"] = child.x;
                    dect2["y"] = child.y;
                    for (var _f = 0, _g = child.children; _f < _g.length; _f++) {
                        var child2 = _g[_f];
                        if (!child2)
                            break;
                        var a = {};
                        a["name"] = child2.name;
                        a["x"] = child2.x;
                        a["y"] = child2.y;
                        a["scaleX"] = child2.scaleX;
                        a["scaleY"] = child2.scaleY;
                        a["angle"] = child2.angle;
                        a["width"] = child2.width;
                        dect2["list"].push(a);
                        if (child2.name == "floor11") {
                            a["rocket"] = {};
                            a["rocket"]["scaleX"] = child2.getChildByName("rocket").scaleX;
                            // dect2["supplement"].push(a);
                            // node.getChildByName("rocket").x = -child2.getChildByName("rocket").x;
                        }
                        else if (child2.name == "floor17") {
                            var floor = child2.getChildByName("floor");
                            a["floor"] = {};
                            a["floor"]["x"] = floor.x;
                            a["floor"]["y"] = floor.y;
                            a["floor"]["scaleX"] = floor.scaleX;
                            a["floor"]["scaleY"] = floor.scaleY;
                            a["floor"]["angle"] = floor.angle;
                            a["floor"]["width"] = floor.width;
                            // node.getChildByName("rocket").x = -child2.getChildByName("rocket").x;
                        }
                        else if (child2.name == "floorRotetaCom") {
                            var floor = child2.getChildByName("floor");
                            var direction = child2.getChildByName("direction");
                            //     node.getChildByName("floor").angle = floor.angle;
                            //     node.getChildByName("floor").scaleX = floor.scaleX;
                            //     node.getChildByName("floor").scaleY = floor.scaleY;
                            a["floor"] = {};
                            a["floor"]["x"] = floor.x;
                            a["floor"]["y"] = floor.y;
                            a["floor"]["scaleX"] = floor.scaleX;
                            a["floor"]["scaleY"] = floor.scaleY;
                            a["floor"]["angle"] = floor.angle;
                            a["floor"]["width"] = floor.width;
                            a["direction"] = {};
                            a["direction"]["x"] = direction.x;
                            a["direction"]["y"] = direction.y;
                            a["direction"]["scaleX"] = direction.scaleX;
                            a["direction"]["scaleY"] = direction.scaleY;
                            a["direction"]["angle"] = direction.angle;
                            a["direction"]["width"] = direction.width;
                            //     node.getChildByName("direction").angle = direction.angle;
                            //     node.getChildByName("direction").scaleX = direction.scaleX;
                            //     node.getChildByName("direction").scaleY = direction.scaleY;
                            // }
                            // node.setPosition(child2.getPosition());
                            // parent.addChild(node);
                            // }
                        }
                    }
                    dect.push(dect2);
                }
            }
        }
        cc.log(JSON.stringify(mapData));
        return;
        CocosZ_1.cocosz.dataMgr.CurLevelId = CocosZ_1.cocosz.dataMgr.MaxUnlockLevelCount;
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        // cocosz.sceneMgr.loadScene("rewardLevel2", () => {
        //     cc.log("----------------奖励关卡来临")
        // });
        // return;
        // cocosz.dataMgr.CurLevelId = 140;
        // cocosz.dataMgr.CurLevelId++;
        CocosZ_1.cocosz.sceneMgr.loadScene("Game", function () {
            CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UiGame);
            CocosZ_1.cocosz.gameMgr.initGame();
        });
    };
    UiHome.prototype.OnBtnLevel2 = function () {
        CocosZ_1.cocosz.sceneMgr.loadScene("Game2", function () {
            CocosZ_1.cocosz.uiMgr.openPage(Constant_1.PageName.UiGame);
            CocosZ_1.cocosz.gameMgr.initGame();
        });
    };
    UiHome.prototype.OnBtnLevel = function () {
        // cocosz.dataMgr.CurLevelId = 6;
        // cocosz.dataMgr.CurSkinId = 1;
        // cocosz.sceneMgr.loadScene("LoadGame", () => {
        //     cocosz.uiMgr.openPage(PageName.UiLoadGame);
        // });
        // return;
        // lieyou_SdkManager.hideBanner();
        // this._BtnStart.getChildByName("home_btn_star_select").active = false;
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        CocosZ_1.cocosz.uiMgr.openPanel(Constant_1.PanelName.LevelPanel);
    };
    UiHome.prototype.OnBtnLottery = function () {
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        CocosZ_1.cocosz.uiMgr.openPanel(Constant_1.PanelName.UiLottery);
        // let prefab = cocosz.resMgr.getRes("UiLottery", cc.Prefab);
        // let node = cc.instantiate(prefab);
        // cc.find("Canvas/ui").addChild(node);
    };
    UiHome.prototype.OnBtnAudio = function () {
        cc.log("-------------------音量");
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        CocosZ_1.cocosz.dataMgr.AudioOn = !CocosZ_1.cocosz.dataMgr.AudioOn;
        if (CocosZ_1.cocosz.dataMgr.AudioOn) {
            CocosZ_1.cocosz.audioMgr.resumAllMusic();
            this._BtnAudio.children[0].active = true;
            this._BtnAudio.children[1].active = false;
        }
        else {
            CocosZ_1.cocosz.audioMgr.stopAll();
            this._BtnAudio.children[1].active = true;
            this._BtnAudio.children[0].active = false;
        }
    };
    UiHome.prototype.OnBtnSign = function () {
        CocosZ_1.cocosz.audioMgr.playbtnEffect();
        var curDate = new Date();
        if (CocosZ_1.cocosz.dataMgr.LastBonusTime == curDate.toDateString()) {
            Msg_1.default.Show("明日上线可领取金币*500");
            return;
        }
        CocosZ_1.cocosz.uiMgr.openPanel(Constant_1.PanelName.UiSign);
    };
    UiHome.prototype.onClose = function () {
        if (this.action) {
            this.action.stop();
        }
        cc.director.getScheduler().unscheduleAllForTarget(this);
        cc.game.targetOff(this);
    };
    UiHome.prototype.onDestroy = function () {
        if (this.action) {
            this.action.stop();
        }
        cc.director.getScheduler().unscheduleAllForTarget(this);
        cc.game.targetOff(this);
    };
    UiHome = __decorate([
        ccclass
    ], UiHome);
    return UiHome;
}(UIPage_1.default));
exports.default = UiHome;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxVaVxcVWlIb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFDOUIsOENBQTZDO0FBQzdDLGtEQUFpRjtBQUNqRix5RUFBeUU7QUFDekUsMERBQTBEO0FBQzFELHdDQUFtQztBQUc3QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFNO0lBNEJ0QztRQUFBLFlBQ0ksaUJBQU8sU0FFVjtRQTdCTyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBQzVCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsYUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixXQUFLLEdBQWdDLElBQUksQ0FBQztRQUMxQyxTQUFHLEdBQWdDLElBQUksQ0FBQztRQUd4QyxTQUFHLEdBQVcsQ0FBQyxDQUFDO1FBR2hCLFlBQU0sR0FBUSxJQUFJLENBQUM7UUFJdkIsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDOztJQUNqQixDQUFDO0lBQ08sc0JBQUssR0FBYjtRQUVJLElBQUksSUFBSSxHQUFjLGVBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLG1CQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RSxJQUFJLElBQUksRUFBRTtZQUNOLElBQUks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QUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RFLDJEQUEyRDtRQUMzRCwyRUFBMkU7UUFDM0UsWUFBWTtRQUNaLDREQUE0RDtRQUM1RCw0RUFBNEU7UUFDNUUsWUFBWTtRQUNaLDJFQUEyRTtRQUMzRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRSx3RUFBd0U7UUFDeEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDMUUsa0NBQWtDO1FBQ2xDLDhDQUE4QztRQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxlQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7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QUFFLENBQUM7U0FDdEI7UUFDRCxFQUFFLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUExckJnQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBNHJCMUI7SUFBRCxhQUFDO0NBNXJCRCxBQTRyQkMsQ0E1ckJtQyxnQkFBTSxHQTRyQnpDO2tCQTVyQm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlQYWdlIGZyb20gXCIuL1VJUGFnZVwiO1xyXG5pbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5pbXBvcnQgQ29uc3RhbnQsIHsgUGFnZU5hbWUsIFBhbmVsTmFtZSwgRmxvb3JUeXBlIH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG4vLyBpbXBvcnQgeyBCYW5uZXJMb2NhdGlvbiB9IGZyb20gXCIuLi9jb21tb24tcGx1Z2luL1NjcmlwdHMvWVpfQ29uc3RhbnRcIjtcclxuLy8gaW1wb3J0IHsgdXRpbHMgfSBmcm9tIFwiLi4vY29tbW9uLXBsdWdpbi9TY3JpcHRzL1V0aWxzXCI7XHJcbmltcG9ydCBNc2cgZnJvbSBcIi4uL0ZyYW1ld29yay9Nc2dcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29ubmVjdGlvbiB9IGZyb20gXCJuZXRcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVaUhvbWUgZXh0ZW5kcyBVSVBhZ2Uge1xyXG5cclxuICAgIHByaXZhdGUgX0J0blNob3A6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfQnRuU3RhcnQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfQnRuQXVkaW86IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfQnRuU2lnbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9Db2luTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIHByaXZhdGUgX1NjYWxlTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9CdG5MZXZlbDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfQnRuTGV2ZWwyOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgX0J0blNldDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9CdG5Mb3R0ZXJ5OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgX0Nsb3VkMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9DbG91ZDI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgX0VuZW15OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBfTG9nbzogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5ID0gbnVsbDtcclxuICAgIHByaXZhdGUgbWFuOiBkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIG51bTogbnVtYmVyID0gMDtcclxuXHJcblxyXG4gICAgcHJpdmF0ZSBhY3Rpb246IGFueSA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9pbml0KCk7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9pbml0KCkge1xyXG5cclxuICAgICAgICBsZXQgR2FtZTogY2MuUHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoUGFnZU5hbWUuVWlIb21lLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgIGlmIChHYW1lKSB7XHJcbiAgICAgICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUoR2FtZSk7XHJcbiAgICAgICAgICAgIGlmIChub2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wYWdlID0gbm9kZTtcclxuICAgICAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvdWlcIikuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5wb3NpdGlvbiA9IGNjLlZlYzMuWkVSTztcclxuICAgICAgICAgICAgICAgIHRoaXMuX29uTG9hZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBfb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX0J0blNob3AgPSBjYy5maW5kKFwiQ2FudmFzL3VpL1VpSG9tZS9TY2FsZU5vZGUvQnRuU2hvcFwiKTtcclxuICAgICAgICB0aGlzLl9CdG5TdGFydCA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlIb21lL1NjYWxlTm9kZS9CdG5TdGFydFwiKTtcclxuICAgICAgICB0aGlzLl9CdG5TaWduID0gY2MuZmluZChcIkNhbnZhcy91aS9VaUhvbWUvU2NhbGVOb2RlL0J0blNpZ25cIik7XHJcbiAgICAgICAgdGhpcy5fQnRuTG90dGVyeSA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlIb21lL1NjYWxlTm9kZS9CdG5Mb3R0ZXJ5XCIpO1xyXG5cclxuICAgICAgICB0aGlzLl9CdG5MZXZlbCA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlIb21lL1NjYWxlTm9kZS9CdG5MZXZlbFwiKTtcclxuICAgICAgICB0aGlzLl9CdG5MZXZlbDIgPSBjYy5maW5kKFwiQ2FudmFzL3VpL1VpSG9tZS9TY2FsZU5vZGUvQnRuTGV2ZWwyXCIpO1xyXG5cclxuICAgICAgICB0aGlzLl9CdG5TZXQgPSBjYy5maW5kKFwiQ2FudmFzL3VpL1VpSG9tZS9TY2FsZU5vZGUvQnRuU2V0XCIpO1xyXG4gICAgICAgIHRoaXMuX0Nsb3VkMSA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlIb21lL1NjYWxlTm9kZS9wcm9wL2Nsb3VkMVwiKTtcclxuICAgICAgICB0aGlzLl9DbG91ZDIgPSBjYy5maW5kKFwiQ2FudmFzL3VpL1VpSG9tZS9TY2FsZU5vZGUvcHJvcC9jbG91ZDJcIik7XHJcbiAgICAgICAgdGhpcy5fTG9nbyA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlIb21lL1NjYWxlTm9kZS9sb2dvXCIpLmdldENvbXBvbmVudChkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkpO1xyXG4gICAgICAgIHRoaXMubWFuID0gY2MuZmluZChcIkNhbnZhcy91aS9VaUhvbWUvU2NhbGVOb2RlL21hblwiKS5nZXRDb21wb25lbnQoZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5KTtcclxuICAgICAgICB0aGlzLl9TY2FsZU5vZGUgPSBjYy5maW5kKFwiQ2FudmFzL3VpL1VpSG9tZS9TY2FsZU5vZGVcIik7XHJcbiAgICAgICAgdGhpcy5fQ29pbkxhYmVsID0gY2MuZmluZChcIkNhbnZhcy91aS9VaUhvbWUvU2NhbGVOb2RlL0NvaW4vbnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgdGhpcy5fU3RhcnQoKTtcclxuXHJcbiAgICAgICAgaWYgKCFjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQpIHtcclxuICAgICAgICAgICAgLy8gY2MuZmluZCgnUFJPRklMRVItTk9ERScpLnNjYWxlID0gMjtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyDlvIDlkK/niannkIbmraXplb/nmoTorr7nva5cclxuICAgICAgICAgICAgLy8gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkQWNjdW11bGF0b3IgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyAvLyDniannkIbmraXplb/vvIzpu5jorqQgRklYRURfVElNRV9TVEVQIOaYryAxLzYwXHJcbiAgICAgICAgICAgIC8vIGNjLlBoeXNpY3NNYW5hZ2VyLkZJWEVEX1RJTUVfU1RFUCA9IDEgLyA2MDtcclxuICAgICAgICAgICAgLy8gLy8g5q+P5qyh5pu05paw54mp55CG57O757uf5aSE55CG6YCf5bqm55qE6L+t5Luj5qyh5pWw77yM6buY6K6k5Li6IDEwXHJcbiAgICAgICAgICAgIC8vIGNjLlBoeXNpY3NNYW5hZ2VyLlZFTE9DSVRZX0lURVJBVElPTlMgPSA4O1xyXG4gICAgICAgICAgICAvLyAvLyDmr4/mrKHmm7TmlrDniannkIbns7vnu5/lpITnkIbkvY3nva7nmoTov63ku6PmrKHmlbDvvIzpu5jorqTkuLogMTBcclxuICAgICAgICAgICAgLy8gY2MuUGh5c2ljc01hbmFnZXIuUE9TSVRJT05fSVRFUkFUSU9OUyA9IDg7XHJcbiAgICAgICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZGVidWdEcmF3RmxhZ3MgPSAxO1xyXG4gICAgICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIHZhciBCaXRzID0gY2MuUGh5c2ljc01hbmFnZXIuRHJhd0JpdHM7XHJcbiAgICAgICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZGVidWdEcmF3RmxhZ3MgPVxyXG4gICAgICAgICAgICAvLyAgICAgQml0cy5lX2FhYmJCaXQgfFxyXG4gICAgICAgICAgICAvLyAgICAgQml0cy5lX2pvaW50Qml0IHxcclxuICAgICAgICAgICAgLy8gICAgIEJpdHMuZV9zaGFwZUJpdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9TdGFydCgpIHtcclxuICAgICAgICB0aGlzLl9CdG5TaG9wLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5PbkJ0blNob3AsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX0J0blN0YXJ0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5PbkJ0blN0YXJ0LCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLl9CdG5TdGFydC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLl9CdG5TdGFydC5nZXRDaGlsZEJ5TmFtZShcImhvbWVfYnRuX3N0YXJfc2VsZWN0XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8gfSwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5fQnRuU3RhcnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuX0J0blN0YXJ0LmdldENoaWxkQnlOYW1lKFwiaG9tZV9idG5fc3Rhcl9zZWxlY3RcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gfSwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5fQnRuQXVkaW8ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuT25CdG5BdWRpbywgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fQnRuU2lnbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuT25CdG5TaWduLCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9CdG5Mb3R0ZXJ5Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5PbkJ0bkxvdHRlcnksIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX0J0blNldC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuT25CdG5TZXQsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMuX0NvdmVyLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLk9uQnRuQ292ZXIsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX0J0bkxldmVsLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLk9uQnRuTGV2ZWwsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX0J0bkxldmVsMi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5PbkJ0bkxldmVsMiwgdGhpcyk7XHJcbiAgICAgICAgLy8gbGV0IGE9Y2Muc2VxdWVuY2UoY2Muc2NhbGVUbygpKVxyXG4gICAgICAgIC8vIHRoaXMuaGFuZFRpcHMucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoKSlcclxuICAgICAgICB0aGlzLl9Db2luTGFiZWwuc3RyaW5nID0gY29jb3N6LmRhdGFNZ3IuQ29pbkNvdW50ICsgXCJcIjtcclxuICAgICAgICBjYy5nYW1lLm9uKENvbnN0YW50LkVfVVBEQVRFX0NPSU4sICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fQ29pbkxhYmVsLnN0cmluZyA9IGNvY29zei5kYXRhTWdyLkNvaW5Db3VudC50b1N0cmluZygpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLl9TY2FsZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsb2dvXCIpLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubnVtKys7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm51bSA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coXCItLS0tLS0tLeino+mUgeWFqOmDqOWFs+WNoVwiKVxyXG4gICAgICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3IuaXNMZXZlbE9wZW4gPSB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25PcGVuKCkge1xyXG4gICAgICAgIC8vIGNvY29zei51aU1nci5vcGVuUGFuZWwoUGFuZWxOYW1lLlVpQmVmb3JlU3VjY2VlZCk7XHJcblxyXG4gICAgICAgIGNvY29zei5kYXRhTWdyLkNvaW5Db3VudCA9IDk5OTk5O1xyXG5cclxuICAgICAgICBjb2Nvc3ouZGF0YU1nci5Jc0VuZCA9IG51bGw7XHJcbiAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkF1ZGlvT24pIHtcclxuICAgICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlHYW1lTXVzaWMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkuZW5hYmxlRm9yVGFyZ2V0KHRoaXMpO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLl9CdG5TaWduLmdldENoaWxkQnlOYW1lKFwiaG9tZV9hbmltYXRpb25fbGlnaHRcIilcclxuICAgICAgICBjYy50d2Vlbihub2RlKVxyXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihjYy50d2VlbigpLmJ5KDUsIHsgYW5nbGU6IDM2MCB9KSlcclxuICAgICAgICAgICAgLnN0YXJ0KCk7XHJcblxyXG5cclxuICAgICAgICAvLyBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuICAgICAgICAvLyAgICAgaWYgKCFjb2Nvc3ouZ2FtZU1nci5pc0ZpcnN0Mikge1xyXG4gICAgICAgIC8vICAgICAgICAgY29jb3N6LmdhbWVNZ3IuaXNGaXJzdDIgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICAgICAgY29jb3N6LnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuc2hvd01vcmVHYW1lQnlCYW5uZXIoKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93TW9yZUdhbWVTaWRlKCk7XHJcbiAgICAgICAgLy8gICAgICAgICB9LCAyKVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuc2hvd01vcmVHYW1lQnlCYW5uZXIoKTtcclxuICAgICAgICAvLyAgICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dNb3JlR2FtZVNpZGUoKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIGlmICgoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuVklWT19HQU1FKSkge1xyXG4gICAgICAgIC8vICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93QmFubmVyQnlCb3R0b20oKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZSBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuT1BQT19HQU1FKSB7XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhcImlzT3Bwby0tLS0tLS0tLS0tLS0tLS0tLS1cIiwgY29jb3N6LmdhbWVNZ3IuaXNGaXJzdDIpXHJcbiAgICAgICAgLy8gICAgIGlmICghY29jb3N6LmdhbWVNZ3IuaXNGaXJzdDIpIHtcclxuICAgICAgICAvLyAgICAgICAgIGNvY29zei5nYW1lTWdyLmlzRmlyc3QyID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgICAgIGNvY29zei5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dNb3JlR2FtZUJ5SWNvbih7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIG5vZGU6IHRoaXMuX1NjYWxlTm9kZS5nZXRDaGlsZEJ5TmFtZShcImljb25Nb3JlR2FtZVwiKSxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc2lkZTogMTMwLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93TW9yZUdhbWVCeUJhbm5lcigpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dNb3JlR2FtZVNpZGUoe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBpc1BlcnNpc3Q6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzaWRlVHlwZV9yaWdodDogZmFsc2UsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHk6IDIwMFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICAgICAgfSwgMilcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dNb3JlR2FtZUJ5SWNvbih7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbm9kZTogdGhpcy5fU2NhbGVOb2RlLmdldENoaWxkQnlOYW1lKFwiaWNvbk1vcmVHYW1lXCIpLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHNpZGU6IDEzMCxcclxuICAgICAgICAvLyAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dNb3JlR2FtZUJ5QmFubmVyKCk7XHJcbiAgICAgICAgLy8gICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93TW9yZUdhbWVTaWRlKHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBpc1BlcnNpc3Q6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHNpZGVUeXBlX3JpZ2h0OiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgICAgICAgICB5OiAyMDBcclxuICAgICAgICAvLyAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3IudHdlZUJ0bih0aGlzLl9CdG5TdGFydCwgMC45LCAwLjg1KTtcclxuICAgICAgICAvLyBsZXQgYiA9IGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDUpLCBjYy5yZXBlYXQoY2Muc2VxdWVuY2UoY2Mucm90YXRlVG8oMC4xLCAxMCksIGNjLnJvdGF0ZVRvKDAuMSwgLTEwKSksIDMpLCBjYy5yb3RhdGVUbygwLjEsIDApKSk7XHJcbiAgICAgICAgLy8gdGhpcy5fQnRuU2hvcC5ydW5BY3Rpb24oYik7XHJcblxyXG4gICAgICAgIC8vIGxldCBnID0gY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoNSksIGNjLnJlcGVhdChjYy5zZXF1ZW5jZShjYy5yb3RhdGVUbygwLjEsIDEwKSwgY2Mucm90YXRlVG8oMC4xLCAtMTApKSwgMyksIGNjLnJvdGF0ZVRvKDAuMSwgMCkpKTtcclxuICAgICAgICAvLyB0aGlzLl9CdG5TaWduLnJ1bkFjdGlvbihnKTtcclxuXHJcblxyXG4gICAgICAgIC8vIGxldCBjID0gY2MudHdlZW4oKS5ieSgxMCwgeyBhbmdsZTogMzYwIH0pO1xyXG4gICAgICAgIC8vIGxldCBjMiA9IGNjLnR3ZWVuKCkuYnkoMywgeyBhbmdsZTogMzYwIH0pO1xyXG4gICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuX0J0blNpZ24uZ2V0Q2hpbGRCeU5hbWUoXCJob21lX2FuaW1hdGlvbl9saWdodFwiKSlcclxuICAgICAgICAvLyAgICAgLnJlcGVhdEZvcmV2ZXIoYylcclxuICAgICAgICAvLyAgICAgLnN0YXJ0KClcclxuXHJcbiAgICAgICAgLy8gY2MudHdlZW4odGhpcy5fQnRuTG90dGVyeS5nZXRDaGlsZEJ5TmFtZShcImhhbG9cIikpXHJcbiAgICAgICAgLy8gICAgIC5yZXBlYXRGb3JldmVyKGMyKVxyXG4gICAgICAgIC8vICAgICAuc3RhcnQoKVxyXG5cclxuXHJcbiAgICAgICAgLy8gbGV0IGN1ckRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIC8vIGxldCBjYW5Cb251cyA9IGN1ckRhdGUudG9EYXRlU3RyaW5nKCkgIT0gY29jb3N6LmRhdGFNZ3IuTGFzdEJvbnVzVGltZTtcclxuXHJcbiAgICAgICAgLy8gaWYgKGNhbkJvbnVzICYmIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPj0gMykge1xyXG4gICAgICAgIC8vICAgICAvLyBjb2Nvc3oudWlNZ3Iub3BlblBhbmVsKFBhbmVsTmFtZS5VaVNpZ24pO1xyXG4gICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMuX0xvZ28ucGxheUFuaW1hdGlvbihcImxvZ29fbW92ZVwiLCAxKTtcclxuICAgICAgICAvLyB0aGlzLl9Mb2dvLm9uKGRyYWdvbkJvbmVzLkV2ZW50T2JqZWN0LkNPTVBMRVRFLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vICAgICB0aGlzLl9Mb2dvLnBsYXlBbmltYXRpb24oXCJsb2dvX2lkbGVcIiwgMCk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuX0xvZ28ub2ZmKGRyYWdvbkJvbmVzLkV2ZW50T2JqZWN0LkNPTVBMRVRFKVxyXG4gICAgICAgIC8vIH0sIHRoaXMuX0xvZ28pXHJcblxyXG5cclxuXHJcbiAgICAgICAgLy8gbGV0IGQgPSBjYy50d2VlbigpLnNlcXVlbmNlKFxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IGNOb2RlMSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuX0Nsb3VkMSk7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgY05vZGUyID0gY2MuaW5zdGFudGlhdGUodGhpcy5fQ2xvdWQyKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX0Nsb3VkMS5wYXJlbnQuYWRkQ2hpbGQoY05vZGUxKTtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX0Nsb3VkMS5wYXJlbnQuYWRkQ2hpbGQoY05vZGUyKTtcclxuICAgICAgICAvLyAgICAgICAgIGNOb2RlMS55ID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgICAgICAvLyAgICAgICAgIGNOb2RlMi55ID0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgICAgICAvLyAgICAgICAgIGlmIChjTm9kZTEueCA8IDApIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjTm9kZTEueCAtPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY05vZGUxLnggKz0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoY05vZGUyLnggPCAwKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY05vZGUyLnggLT0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNOb2RlMi54ICs9IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyAgICAgICAgIGxldCBwb3MxID0gY2MudjIoKDI1MDAgKyBNYXRoLnJhbmRvbSgpICogNTAwKSAqIGNOb2RlMS5zY2FsZVgsIDApXHJcblxyXG4gICAgICAgIC8vICAgICAgICAgbGV0IHBvczIgPSBjYy52MigoMjUwMCArIE1hdGgucmFuZG9tKCkgKiA1MDApICogY05vZGUyLnNjYWxlWCwgMClcclxuXHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNOb2RlMS54ICo9IC0xO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNOb2RlMS5zY2FsZVggKj0gLTE7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcG9zMS54ICo9IC0xO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgICAgIGNjLnR3ZWVuKGNOb2RlMSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAuYnkoNTAgKyA1ICogTWF0aC5yYW5kb20oKSwgeyBwb3NpdGlvbjogcG9zMSB9KVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY05vZGUxLmRlc3Ryb3koKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC5zdGFydCgpXHJcblxyXG4gICAgICAgIC8vICAgICAgICAgY2MudHdlZW4oY05vZGUyKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC5ieSg1MCArIDUgKiBNYXRoLnJhbmRvbSgpLCB7IHBvc2l0aW9uOiBwb3MyIH0pXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjTm9kZTIuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLnN0YXJ0KClcclxuICAgICAgICAvLyAgICAgfSksXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkuZGVsYXkoNTApXHJcbiAgICAgICAgLy8gKVxyXG5cclxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLl9DbG91ZDEucGFyZW50KVxyXG4gICAgICAgIC8vICAgICAucmVwZWF0Rm9yZXZlcihkKVxyXG4gICAgICAgIC8vICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IGYgPSBjYy50d2VlbigpLnNlcXVlbmNlKFxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiZW5lbXkzXCIsIGNjLlByZWZhYilcclxuICAgICAgICAvLyAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAvLyAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24oY2MudjIoLTIzOCwgLTU2MCkpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fU2NhbGVOb2RlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fRW5lbXkgPSBub2RlO1xyXG4gICAgICAgIC8vICAgICAgICAgLy8gY2MubG9nKHRoaXMuX0VuZW15LFwiLS0tLS0tLS0tLS0tXCIpXHJcbiAgICAgICAgLy8gICAgIH0pLFxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLmRlbGF5KDUpLFxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5tYW4ucGxheUFuaW1hdGlvbihcImhvbWVcIiwgMSlcclxuICAgICAgICAvLyAgICAgfSksXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkuZGVsYXkoMSksXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9FbmVteS5nZXRDaGlsZEJ5TmFtZShcInJpZ2h0X2JhbGxvb25cIikuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlNZXRhbFN0b25lRWZmZWN0MigpO1xyXG4gICAgICAgIC8vICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlHdW5FZmZlY3QoKTtcclxuICAgICAgICAvLyAgICAgfSksXHJcblxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLmRlbGF5KDAuMyksXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9FbmVteS5nZXRDaGlsZEJ5TmFtZShcImxlZnRfYmFsbG9vblwiKS5kZXN0cm95KCk7XHJcbiAgICAgICAgLy8gICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheU1ldGFsU3RvbmVFZmZlY3QyKCk7XHJcbiAgICAgICAgLy8gICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheUd1bkVmZmVjdCgpO1xyXG5cclxuICAgICAgICAvLyAgICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5QmVmb3JlRmVpbGRFZmZlY3QxKCk7XHJcblxyXG4gICAgICAgIC8vICAgICB9KSxcclxuICAgICAgICAvLyAgICAgY2MudHdlZW4oKS5kZWxheSgwLjYpLFxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLmNhbGwoKCkgPT4ge1xyXG5cclxuICAgICAgICAvLyAgICAgICAgIHRoaXMubWFuLnBsYXlBbmltYXRpb24oXCJpZGxlXCIsIDApXHJcbiAgICAgICAgLy8gICAgIH0pLFxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLmRlbGF5KDUpLFxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLmNhbGwoKCkgPT4ge1xyXG5cclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX0VuZW15LmRlc3Ryb3koKTtcclxuICAgICAgICAvLyAgICAgfSksXHJcblxyXG5cclxuICAgICAgICAvLyApXHJcblxyXG5cclxuICAgICAgICAvLyB0aGlzLmFjdGlvbiA9IGNjLnR3ZWVuKHRoaXMubWFuKVxyXG4gICAgICAgIC8vICAgICAucmVwZWF0Rm9yZXZlcihmKVxyXG4gICAgICAgIC8vICAgICAuc3RhcnQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IG1hcERhdGEgPSB7fTtcclxuICAgICAgICBsZXQgbnVtID0gMDtcclxuICAgICAgICB3aGlsZSAobnVtKysgPCAyMCkge1xyXG4gICAgICAgICAgICBsZXQga2V5ID0gXCJsZXZlbFwiICsgbnVtXHJcbiAgICAgICAgICAgIGxldCBkZWN0ID0gbWFwRGF0YVtrZXldID0gW107XHJcbiAgICAgICAgICAgIGRlY3RbXCJzdXBwbGVtZW50XCJdID0gW107XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJsZXZlbFwiICsgbnVtLCBjYy5QcmVmYWIpLmRhdGE7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhkYXRhLCBudW0pO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBkYXRhLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVjdDIgPSB7fTtcclxuICAgICAgICAgICAgICAgIGRlY3QyW1wieFwiXSA9IGNoaWxkLng7XHJcbiAgICAgICAgICAgICAgICBkZWN0MltcInlcIl0gPSBjaGlsZC55O1xyXG4gICAgICAgICAgICAgICAgZGVjdDJbXCJzY2FsZVhcIl0gPSBjaGlsZC5zY2FsZVg7XHJcbiAgICAgICAgICAgICAgICBkZWN0MltcInNjYWxlWVwiXSA9IGNoaWxkLnNjYWxlWTtcclxuICAgICAgICAgICAgICAgIGRlY3QyW1wiYW5nbGVcIl0gPSBjaGlsZC5hbmdsZTtcclxuICAgICAgICAgICAgICAgIGRlY3QyW1wibmFtZVwiXSA9IGNoaWxkLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQubmFtZSA9PSBcIm1hcE1hc2syXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50ID0gY2hpbGQuZ2V0Q29tcG9uZW50cyhjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHBvbHkgb2YgY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb2x5LnBvaW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKHBvbHkucG9pbnRzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlY3QyW1wibGlzdFwiXSA9IGxpc3Q7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGVjdC5wdXNoKGRlY3QyKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2MubG9nKEpTT04uc3RyaW5naWZ5KG1hcERhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIE9uQnRuU2hvcCgpIHtcclxuICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheWJ0bkVmZmVjdCgpO1xyXG4gICAgICAgIGNjLmxvZyhcIi0tLS0tLVBhbmVsTmFtZS5VaVNob3AtLS0tLS0tXCIpXHJcblxyXG5cclxuICAgICAgICBpZiAoKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLlZJVk9fR0FNRSkpIHtcclxuICAgICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuc2hvd1Nwb3RCeVBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLk9QUE9fR0FNRSkge1xyXG4gICAgICAgICAgICAvLyBsaWV5b3VfU2RrTWFuYWdlci5oaWRlQmFubmVyKClcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYW5lbChQYW5lbE5hbWUuVWlTaG9wKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIE9uQnRuU2V0KCkge1xyXG4gICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5YnRuRWZmZWN0KCk7XHJcbiAgICAgICAgaWYgKChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5WSVZPX0dBTUUpKSB7XHJcbiAgICAgICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dTcG90QnlQYXVzZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5PUFBPX0dBTUUpIHtcclxuICAgICAgICAgICAgLy8gbGlleW91X1Nka01hbmFnZXIuaGlkZUJhbm5lcigpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvY29zei51aU1nci5vcGVuUGFuZWwoUGFuZWxOYW1lLlVpU2V0KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIE9uQnRuU3RhcnQoKSB7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuYWN0aW9uLnN0b3AoKTtcclxuXHJcblxyXG4gICAgICAgIC8vIGNvY29zei5hdWRpb01nci5wbGF5YnRuRWZmZWN0KCk7XHJcbiAgICAgICAgLy8gY29jb3N6LnVpTWdyLm9wZW5QYW5lbChQYW5lbE5hbWUuVWlMb3R0ZXJ5KTtcclxuXHJcbiAgICAgICAgLy8gTXNnLlNob3coXCLkuIDnm7Tmir3kuIDnm7TniL1cIik7XHJcblxyXG4gICAgICAgIC8vIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gY29jb3N6LmdhbWVNZ3IuaXNHYW1lT3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIC8vIGNvY29zei5zY2VuZU1nci5sb2FkU2NlbmUoXCJyZXdhcmRMZXZlbDJcIiwgKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBNc2cuU2hvdyhcIuWlluWKseWFs+WNoeadpeS4tFwiKVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIHJldHVybjtcclxuXHJcbiAgICAgICAgY29jb3N6LnNjZW5lTWdyLmxvYWRTY2VuZShcIkdhbWUyXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYWdlKFBhZ2VOYW1lLlVpR2FtZSk7XHJcbiAgICAgICAgICAgIGNvY29zei5nYW1lTWdyLmluaXRHYW1lKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuXHJcblxyXG4gICAgICAgIGxldCBtYXBEYXRhID0ge307XHJcbiAgICAgICAgbGV0IG51bSA9IDA7XHJcbiAgICAgICAgd2hpbGUgKG51bSsrIDwgMTQwKSB7XHJcbiAgICAgICAgICAgIGxldCBrZXkgPSBcIm1hcFwiICsgbnVtXHJcbiAgICAgICAgICAgIGxldCBkZWN0ID0gbWFwRGF0YVtrZXldID0gW107XHJcbiAgICAgICAgICAgIGRlY3RbXCJzdXBwbGVtZW50XCJdID0gW107XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJtYXBcIiArIG51bSwgY2MuUHJlZmFiKS5kYXRhO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coZGF0YSwgbnVtKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgZGF0YS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5hbWUgPT0gXCJtYXBNYXNrUG9pbnRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSBjaGlsZC5nZXRDb21wb25lbnRzKGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3Q0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcG9seSBvZiBjb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvbHkucG9pbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2gocG9seS5wb2ludHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbGlzdDIgb2YgbGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdDMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDIubWFwKChpLCBqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGQgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRkW1wieFwiXSA9IGkueFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGRbXCJ5XCJdID0gaS55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coZGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0My5wdXNoKGRkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBkZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDQucHVzaChsaXN0MylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgYVtcIm5hbWVcIl0gPSBjaGlsZC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGFbXCJsaXN0XCJdID0gbGlzdDRcclxuICAgICAgICAgICAgICAgICAgICBhW1wieFwiXSA9IGNoaWxkLng7XHJcbiAgICAgICAgICAgICAgICAgICAgYVtcInlcIl0gPSBjaGlsZC55O1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY3QucHVzaChhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkLm5hbWUgPT0gXCJzYW5kTWFza1BvaW50XCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHBvaW50ID0gY2hpbGQuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIpLnBvaW50cztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50ID0gY2hpbGQuZ2V0Q29tcG9uZW50cyhjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsaXN0NCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHBvbHkgb2YgY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb2x5LnBvaW50cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKHBvbHkucG9pbnRzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGxpc3QyIG9mIGxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3QzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QyLm1hcCgoaSwgaikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRkID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZFtcInhcIl0gPSBpLnhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRkW1wieVwiXSA9IGkueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKGRkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDMucHVzaChkZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm4gZGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Q0LnB1c2gobGlzdDMpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsZXQgYSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGFbXCJuYW1lXCJdID0gY2hpbGQubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBhW1wibGlzdFwiXSA9IGxpc3Q0XHJcbiAgICAgICAgICAgICAgICAgICAgYVtcInhcIl0gPSBjaGlsZC54O1xyXG4gICAgICAgICAgICAgICAgICAgIGFbXCJ5XCJdID0gY2hpbGQueTtcclxuICAgICAgICAgICAgICAgICAgICBkZWN0LnB1c2goYSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkLm5hbWUgPT0gXCJyb2xlXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBhW1wieFwiXSA9IGNoaWxkLng7XHJcbiAgICAgICAgICAgICAgICAgICAgYVtcInlcIl0gPSBjaGlsZC55O1xyXG4gICAgICAgICAgICAgICAgICAgIGFbXCJuYW1lXCJdID0gY2hpbGQubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBkZWN0LnB1c2goYSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQubmFtZSA9PSBcImJhZmZsZVwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgYVtcInhcIl0gPSBjaGlsZC54O1xyXG4gICAgICAgICAgICAgICAgICAgIGFbXCJ5XCJdID0gY2hpbGQueTtcclxuICAgICAgICAgICAgICAgICAgICBhW1wibmFtZVwiXSA9IGNoaWxkLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjdC5wdXNoKGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQubmFtZSA9PSBcImZhblwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgYVtcInhcIl0gPSBjaGlsZC54O1xyXG4gICAgICAgICAgICAgICAgICAgIGFbXCJ5XCJdID0gY2hpbGQueTtcclxuICAgICAgICAgICAgICAgICAgICBhW1wic2NhbGVcIl0gPSBjaGlsZC5zY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICBhW1wiYW5nbGVcIl0gPSBjaGlsZC5hbmdsZTtcclxuICAgICAgICAgICAgICAgICAgICBhW1wibmFtZVwiXSA9IGNoaWxkLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjdC5wdXNoKGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQubmFtZSA9PSBcImhhbmRUaXBzXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBhW1wieFwiXSA9IGNoaWxkLng7XHJcbiAgICAgICAgICAgICAgICAgICAgYVtcInlcIl0gPSBjaGlsZC55O1xyXG4gICAgICAgICAgICAgICAgICAgIGFbXCJzY2FsZVwiXSA9IGNoaWxkLnNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFbXCJhbmdsZVwiXSA9IGNoaWxkLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFbXCJuYW1lXCJdID0gY2hpbGQubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBkZWN0LnB1c2goYSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQubmFtZSA9PSBcInByb3BNb3ZlRmxvb3JcIiB8fCBjaGlsZC5uYW1lID09IFwiZW5lbXlcIiB8fCBjaGlsZC5uYW1lID09IFwicHJvcFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmVudCA9IG5ldyBjYy5Ob2RlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5uYW1lID09IGNoaWxkLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVjdFtjaGlsZC5uYW1lXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkZWN0MiA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY3QyW1wibmFtZVwiXSA9IGNoaWxkLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjdDJbXCJsaXN0XCJdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjdDJbXCJ4XCJdID0gY2hpbGQueDtcclxuICAgICAgICAgICAgICAgICAgICBkZWN0MltcInlcIl0gPSBjaGlsZC55O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZDIgb2YgY2hpbGQuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGlsZDIpIGJyZWFrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFbXCJuYW1lXCJdID0gY2hpbGQyLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFbXCJ4XCJdID0gY2hpbGQyLng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFbXCJ5XCJdID0gY2hpbGQyLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFbXCJzY2FsZVhcIl0gPSBjaGlsZDIuc2NhbGVYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhW1wic2NhbGVZXCJdID0gY2hpbGQyLnNjYWxlWTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYVtcImFuZ2xlXCJdID0gY2hpbGQyLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhW1wid2lkdGhcIl0gPSBjaGlsZDIud2lkdGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWN0MltcImxpc3RcIl0ucHVzaChhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZDIubmFtZSA9PSBcImZsb29yMTFcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtcInJvY2tldFwiXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtcInJvY2tldFwiXVtcInNjYWxlWFwiXSA9IGNoaWxkMi5nZXRDaGlsZEJ5TmFtZShcInJvY2tldFwiKS5zY2FsZVg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWN0MltcInN1cHBsZW1lbnRcIl0ucHVzaChhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub2RlLmdldENoaWxkQnlOYW1lKFwicm9ja2V0XCIpLnggPSAtY2hpbGQyLmdldENoaWxkQnlOYW1lKFwicm9ja2V0XCIpLng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkMi5uYW1lID09IFwiZmxvb3IxN1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmxvb3IgPSBjaGlsZDIuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbXCJmbG9vclwiXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtcImZsb29yXCJdW1wieFwiXSA9IGZsb29yLng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW1wiZmxvb3JcIl1bXCJ5XCJdID0gZmxvb3IueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbXCJmbG9vclwiXVtcInNjYWxlWFwiXSA9IGZsb29yLnNjYWxlWDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbXCJmbG9vclwiXVtcInNjYWxlWVwiXSA9IGZsb29yLnNjYWxlWTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbXCJmbG9vclwiXVtcImFuZ2xlXCJdID0gZmxvb3IuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW1wiZmxvb3JcIl1bXCJ3aWR0aFwiXSA9IGZsb29yLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9kZS5nZXRDaGlsZEJ5TmFtZShcInJvY2tldFwiKS54ID0gLWNoaWxkMi5nZXRDaGlsZEJ5TmFtZShcInJvY2tldFwiKS54O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkMi5uYW1lID09IFwiZmxvb3JSb3RldGFDb21cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZsb29yID0gY2hpbGQyLmdldENoaWxkQnlOYW1lKFwiZmxvb3JcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gY2hpbGQyLmdldENoaWxkQnlOYW1lKFwiZGlyZWN0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKS5hbmdsZSA9IGZsb29yLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKS5zY2FsZVggPSBmbG9vci5zY2FsZVg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImZsb29yXCIpLnNjYWxlWSA9IGZsb29yLnNjYWxlWTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtcImZsb29yXCJdID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW1wiZmxvb3JcIl1bXCJ4XCJdID0gZmxvb3IueDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbXCJmbG9vclwiXVtcInlcIl0gPSBmbG9vci55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtcImZsb29yXCJdW1wic2NhbGVYXCJdID0gZmxvb3Iuc2NhbGVYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtcImZsb29yXCJdW1wic2NhbGVZXCJdID0gZmxvb3Iuc2NhbGVZO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtcImZsb29yXCJdW1wiYW5nbGVcIl0gPSBmbG9vci5hbmdsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbXCJmbG9vclwiXVtcIndpZHRoXCJdID0gZmxvb3Iud2lkdGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtcImRpcmVjdGlvblwiXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtcImRpcmVjdGlvblwiXVtcInhcIl0gPSBkaXJlY3Rpb24ueDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbXCJkaXJlY3Rpb25cIl1bXCJ5XCJdID0gZGlyZWN0aW9uLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW1wiZGlyZWN0aW9uXCJdW1wic2NhbGVYXCJdID0gZGlyZWN0aW9uLnNjYWxlWDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbXCJkaXJlY3Rpb25cIl1bXCJzY2FsZVlcIl0gPSBkaXJlY3Rpb24uc2NhbGVZO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtcImRpcmVjdGlvblwiXVtcImFuZ2xlXCJdID0gZGlyZWN0aW9uLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtcImRpcmVjdGlvblwiXVtcIndpZHRoXCJdID0gZGlyZWN0aW9uLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJkaXJlY3Rpb25cIikuYW5nbGUgPSBkaXJlY3Rpb24uYW5nbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImRpcmVjdGlvblwiKS5zY2FsZVggPSBkaXJlY3Rpb24uc2NhbGVYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJkaXJlY3Rpb25cIikuc2NhbGVZID0gZGlyZWN0aW9uLnNjYWxlWTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vZGUuc2V0UG9zaXRpb24oY2hpbGQyLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFyZW50LmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlY3QucHVzaChkZWN0Mik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2MubG9nKEpTT04uc3RyaW5naWZ5KG1hcERhdGEpKTtcclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuXHJcblxyXG4gICAgICAgIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPSBjb2Nvc3ouZGF0YU1nci5NYXhVbmxvY2tMZXZlbENvdW50O1xyXG4gICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5YnRuRWZmZWN0KCk7XHJcbiAgICAgICAgLy8gY29jb3N6LnNjZW5lTWdyLmxvYWRTY2VuZShcInJld2FyZExldmVsMlwiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS3lpZblirHlhbPljaHmnaXkuLRcIilcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgLy8gcmV0dXJuO1xyXG4gICAgICAgIC8vIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPSAxNDA7XHJcbiAgICAgICAgLy8gY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCsrO1xyXG5cclxuICAgICAgICBjb2Nvc3ouc2NlbmVNZ3IubG9hZFNjZW5lKFwiR2FtZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvY29zei51aU1nci5vcGVuUGFnZShQYWdlTmFtZS5VaUdhbWUpO1xyXG4gICAgICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pbml0R2FtZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgT25CdG5MZXZlbDIoKSB7XHJcblxyXG5cclxuICAgICAgICBjb2Nvc3ouc2NlbmVNZ3IubG9hZFNjZW5lKFwiR2FtZTJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhZ2UoUGFnZU5hbWUuVWlHYW1lKTtcclxuICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3IuaW5pdEdhbWUoKTtcclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgT25CdG5MZXZlbCgpIHtcclxuICAgICAgICAvLyBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID0gNjtcclxuICAgICAgICAvLyBjb2Nvc3ouZGF0YU1nci5DdXJTa2luSWQgPSAxO1xyXG4gICAgICAgIC8vIGNvY29zei5zY2VuZU1nci5sb2FkU2NlbmUoXCJMb2FkR2FtZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvY29zei51aU1nci5vcGVuUGFnZShQYWdlTmFtZS5VaUxvYWRHYW1lKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyByZXR1cm47XHJcbiAgICAgICAgLy8gbGlleW91X1Nka01hbmFnZXIuaGlkZUJhbm5lcigpO1xyXG4gICAgICAgIC8vIHRoaXMuX0J0blN0YXJ0LmdldENoaWxkQnlOYW1lKFwiaG9tZV9idG5fc3Rhcl9zZWxlY3RcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlidG5FZmZlY3QoKTtcclxuICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhbmVsKFBhbmVsTmFtZS5MZXZlbFBhbmVsKTtcclxuXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIE9uQnRuTG90dGVyeSgpIHtcclxuICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheWJ0bkVmZmVjdCgpO1xyXG4gICAgICAgIGNvY29zei51aU1nci5vcGVuUGFuZWwoUGFuZWxOYW1lLlVpTG90dGVyeSk7XHJcbiAgICAgICAgLy8gbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiVWlMb3R0ZXJ5XCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgLy8gbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgIC8vIGNjLmZpbmQoXCJDYW52YXMvdWlcIikuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBPbkJ0bkF1ZGlvKCkge1xyXG4gICAgICAgIGNjLmxvZyhcIi0tLS0tLS0tLS0tLS0tLS0tLS3pn7Pph49cIilcclxuICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheWJ0bkVmZmVjdCgpO1xyXG4gICAgICAgIGNvY29zei5kYXRhTWdyLkF1ZGlvT24gPSAhY29jb3N6LmRhdGFNZ3IuQXVkaW9PbjtcclxuICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQXVkaW9Pbikge1xyXG4gICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucmVzdW1BbGxNdXNpYygpO1xyXG4gICAgICAgICAgICB0aGlzLl9CdG5BdWRpby5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9CdG5BdWRpby5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3Iuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICB0aGlzLl9CdG5BdWRpby5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9CdG5BdWRpby5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBPbkJ0blNpZ24oKSB7XHJcbiAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlidG5FZmZlY3QoKTtcclxuICAgICAgICBsZXQgY3VyRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkxhc3RCb251c1RpbWUgPT0gY3VyRGF0ZS50b0RhdGVTdHJpbmcoKSkge1xyXG4gICAgICAgICAgICBNc2cuU2hvdyhcIuaYjuaXpeS4iue6v+WPr+mihuWPlumHkeW4gSo1MDBcIilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhbmVsKFBhbmVsTmFtZS5VaVNpZ24pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkNsb3NlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFjdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbi5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLnVuc2NoZWR1bGVBbGxGb3JUYXJnZXQodGhpcyk7XHJcbiAgICAgICAgY2MuZ2FtZS50YXJnZXRPZmYodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5hY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb24uc3RvcCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS51bnNjaGVkdWxlQWxsRm9yVGFyZ2V0KHRoaXMpO1xyXG4gICAgICAgIGNjLmdhbWUudGFyZ2V0T2ZmKHRoaXMpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=