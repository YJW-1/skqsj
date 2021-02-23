
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
        // this.man = cc.find("Canvas/ui/UiHome/ScaleNode/man").getComponent(dragonBones.ArmatureDisplay);
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
        // cocosz.dataMgr.CoinCount = 99999;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxVaVxcVWlIb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBOEI7QUFDOUIsOENBQTZDO0FBQzdDLGtEQUFpRjtBQUNqRix5RUFBeUU7QUFDekUsMERBQTBEO0FBQzFELHdDQUFtQztBQUc3QixJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQW9DLDBCQUFNO0lBNEJ0QztRQUFBLFlBQ0ksaUJBQU8sU0FFVjtRQTdCTyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBQzVCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0IsYUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixhQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixXQUFLLEdBQWdDLElBQUksQ0FBQztRQUMxQyxTQUFHLEdBQWdDLElBQUksQ0FBQztRQUd4QyxTQUFHLEdBQVcsQ0FBQyxDQUFDO1FBR2hCLFlBQU0sR0FBUSxJQUFJLENBQUM7UUFJdkIsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDOztJQUNqQixDQUFDO0lBQ08sc0JBQUssR0FBYjtRQUVJLElBQUksSUFBSSxHQUFjLGVBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLG1CQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RSxJQUFJLElBQUksRUFBRTtZQUNOLElBQUks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SUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQTFyQmdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0E0ckIxQjtJQUFELGFBQUM7Q0E1ckJELEFBNHJCQyxDQTVyQm1DLGdCQUFNLEdBNHJCekM7a0JBNXJCb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSVBhZ2UgZnJvbSBcIi4vVUlQYWdlXCI7XHJcbmltcG9ydCB7IGNvY29zeiB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29jb3NaXCI7XHJcbmltcG9ydCBDb25zdGFudCwgeyBQYWdlTmFtZSwgUGFuZWxOYW1lLCBGbG9vclR5cGUgfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvbnN0YW50XCI7XHJcbi8vIGltcG9ydCB7IEJhbm5lckxvY2F0aW9uIH0gZnJvbSBcIi4uL2NvbW1vbi1wbHVnaW4vU2NyaXB0cy9ZWl9Db25zdGFudFwiO1xyXG4vLyBpbXBvcnQgeyB1dGlscyB9IGZyb20gXCIuLi9jb21tb24tcGx1Z2luL1NjcmlwdHMvVXRpbHNcIjtcclxuaW1wb3J0IE1zZyBmcm9tIFwiLi4vRnJhbWV3b3JrL01zZ1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb25uZWN0aW9uIH0gZnJvbSBcIm5ldFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVpSG9tZSBleHRlbmRzIFVJUGFnZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfQnRuU2hvcDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9CdG5TdGFydDogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9CdG5BdWRpbzogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9CdG5TaWduOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgX0NvaW5MYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfU2NhbGVOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgX0J0bkxldmVsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwcml2YXRlIF9CdG5MZXZlbDI6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfQnRuU2V0OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgX0J0bkxvdHRlcnk6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfQ2xvdWQxOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgX0Nsb3VkMjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBfRW5lbXk6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIF9Mb2dvOiBkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBtYW46IGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSA9IG51bGw7XHJcblxyXG5cclxuICAgIHByaXZhdGUgbnVtOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGFjdGlvbjogYW55ID0gbnVsbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2luaXQoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgX2luaXQoKSB7XHJcblxyXG4gICAgICAgIGxldCBHYW1lOiBjYy5QcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhQYWdlTmFtZS5VaUhvbWUsIGNjLlByZWZhYik7XHJcbiAgICAgICAgaWYgKEdhbWUpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZShHYW1lKTtcclxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BhZ2UgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy91aVwiKS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBub2RlLnBvc2l0aW9uID0gY2MuVmVjMy5aRVJPO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb25Mb2FkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIF9vbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5fQnRuU2hvcCA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlIb21lL1NjYWxlTm9kZS9CdG5TaG9wXCIpO1xyXG4gICAgICAgIHRoaXMuX0J0blN0YXJ0ID0gY2MuZmluZChcIkNhbnZhcy91aS9VaUhvbWUvU2NhbGVOb2RlL0J0blN0YXJ0XCIpO1xyXG4gICAgICAgIHRoaXMuX0J0blNpZ24gPSBjYy5maW5kKFwiQ2FudmFzL3VpL1VpSG9tZS9TY2FsZU5vZGUvQnRuU2lnblwiKTtcclxuICAgICAgICB0aGlzLl9CdG5Mb3R0ZXJ5ID0gY2MuZmluZChcIkNhbnZhcy91aS9VaUhvbWUvU2NhbGVOb2RlL0J0bkxvdHRlcnlcIik7XHJcblxyXG4gICAgICAgIHRoaXMuX0J0bkxldmVsID0gY2MuZmluZChcIkNhbnZhcy91aS9VaUhvbWUvU2NhbGVOb2RlL0J0bkxldmVsXCIpO1xyXG4gICAgICAgIHRoaXMuX0J0bkxldmVsMiA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlIb21lL1NjYWxlTm9kZS9CdG5MZXZlbDJcIik7XHJcblxyXG4gICAgICAgIHRoaXMuX0J0blNldCA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlIb21lL1NjYWxlTm9kZS9CdG5TZXRcIik7XHJcbiAgICAgICAgdGhpcy5fQ2xvdWQxID0gY2MuZmluZChcIkNhbnZhcy91aS9VaUhvbWUvU2NhbGVOb2RlL3Byb3AvY2xvdWQxXCIpO1xyXG4gICAgICAgIHRoaXMuX0Nsb3VkMiA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlIb21lL1NjYWxlTm9kZS9wcm9wL2Nsb3VkMlwiKTtcclxuICAgICAgICB0aGlzLl9Mb2dvID0gY2MuZmluZChcIkNhbnZhcy91aS9VaUhvbWUvU2NhbGVOb2RlL2xvZ29cIikuZ2V0Q29tcG9uZW50KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSk7XHJcbiAgICAgICAgLy8gdGhpcy5tYW4gPSBjYy5maW5kKFwiQ2FudmFzL3VpL1VpSG9tZS9TY2FsZU5vZGUvbWFuXCIpLmdldENvbXBvbmVudChkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkpO1xyXG4gICAgICAgIHRoaXMuX1NjYWxlTm9kZSA9IGNjLmZpbmQoXCJDYW52YXMvdWkvVWlIb21lL1NjYWxlTm9kZVwiKTtcclxuICAgICAgICB0aGlzLl9Db2luTGFiZWwgPSBjYy5maW5kKFwiQ2FudmFzL3VpL1VpSG9tZS9TY2FsZU5vZGUvQ29pbi9udW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB0aGlzLl9TdGFydCgpO1xyXG5cclxuICAgICAgICBpZiAoIWNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCkge1xyXG4gICAgICAgICAgICAvLyBjYy5maW5kKCdQUk9GSUxFUi1OT0RFJykuc2NhbGUgPSAyO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIOW8gOWQr+eJqeeQhuatpemVv+eahOiuvue9rlxyXG4gICAgICAgICAgICAvLyBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWRBY2N1bXVsYXRvciA9IHRydWU7XHJcbiAgICAgICAgICAgIC8vIC8vIOeJqeeQhuatpemVv++8jOm7mOiupCBGSVhFRF9USU1FX1NURVAg5pivIDEvNjBcclxuICAgICAgICAgICAgLy8gY2MuUGh5c2ljc01hbmFnZXIuRklYRURfVElNRV9TVEVQID0gMSAvIDYwO1xyXG4gICAgICAgICAgICAvLyAvLyDmr4/mrKHmm7TmlrDniannkIbns7vnu5/lpITnkIbpgJ/luqbnmoTov63ku6PmrKHmlbDvvIzpu5jorqTkuLogMTBcclxuICAgICAgICAgICAgLy8gY2MuUGh5c2ljc01hbmFnZXIuVkVMT0NJVFlfSVRFUkFUSU9OUyA9IDg7XHJcbiAgICAgICAgICAgIC8vIC8vIOavj+asoeabtOaWsOeJqeeQhuezu+e7n+WkhOeQhuS9jee9rueahOi/reS7o+asoeaVsO+8jOm7mOiupOS4uiAxMFxyXG4gICAgICAgICAgICAvLyBjYy5QaHlzaWNzTWFuYWdlci5QT1NJVElPTl9JVEVSQVRJT05TID0gODtcclxuICAgICAgICAgICAgLy8gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5kZWJ1Z0RyYXdGbGFncyA9IDE7XHJcbiAgICAgICAgICAgIC8vIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkRGVidWdEcmF3ID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gdmFyIEJpdHMgPSBjYy5QaHlzaWNzTWFuYWdlci5EcmF3Qml0cztcclxuICAgICAgICAgICAgLy8gY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5kZWJ1Z0RyYXdGbGFncyA9XHJcbiAgICAgICAgICAgIC8vICAgICBCaXRzLmVfYWFiYkJpdCB8XHJcbiAgICAgICAgICAgIC8vICAgICBCaXRzLmVfam9pbnRCaXQgfFxyXG4gICAgICAgICAgICAvLyAgICAgQml0cy5lX3NoYXBlQml0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgX1N0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuX0J0blNob3Aub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLk9uQnRuU2hvcCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fQnRuU3RhcnQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLk9uQnRuU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMuX0J0blN0YXJ0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuX0J0blN0YXJ0LmdldENoaWxkQnlOYW1lKFwiaG9tZV9idG5fc3Rhcl9zZWxlY3RcIikuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAvLyB9LCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLl9CdG5TdGFydC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5fQnRuU3RhcnQuZ2V0Q2hpbGRCeU5hbWUoXCJob21lX2J0bl9zdGFyX3NlbGVjdFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAvLyB9LCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLl9CdG5BdWRpby5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5PbkJ0bkF1ZGlvLCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9CdG5TaWduLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5PbkJ0blNpZ24sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX0J0bkxvdHRlcnkub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLk9uQnRuTG90dGVyeSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fQnRuU2V0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5PbkJ0blNldCwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5fQ292ZXIub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuT25CdG5Db3ZlciwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fQnRuTGV2ZWwub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuT25CdG5MZXZlbCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fQnRuTGV2ZWwyLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLk9uQnRuTGV2ZWwyLCB0aGlzKTtcclxuICAgICAgICAvLyBsZXQgYT1jYy5zZXF1ZW5jZShjYy5zY2FsZVRvKCkpXHJcbiAgICAgICAgLy8gdGhpcy5oYW5kVGlwcy5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcigpKVxyXG4gICAgICAgIHRoaXMuX0NvaW5MYWJlbC5zdHJpbmcgPSBjb2Nvc3ouZGF0YU1nci5Db2luQ291bnQgKyBcIlwiO1xyXG4gICAgICAgIGNjLmdhbWUub24oQ29uc3RhbnQuRV9VUERBVEVfQ09JTiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9Db2luTGFiZWwuc3RyaW5nID0gY29jb3N6LmRhdGFNZ3IuQ29pbkNvdW50LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX1NjYWxlTm9kZS5nZXRDaGlsZEJ5TmFtZShcImxvZ29cIikub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5udW0rKztcclxuICAgICAgICAgICAgaWYgKHRoaXMubnVtID4gMTApIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIi0tLS0tLS0t6Kej6ZSB5YWo6YOo5YWz5Y2hXCIpXHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pc0xldmVsT3BlbiA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBvbk9wZW4oKSB7XHJcbiAgICAgICAgLy8gY29jb3N6LnVpTWdyLm9wZW5QYW5lbChQYW5lbE5hbWUuVWlCZWZvcmVTdWNjZWVkKTtcclxuXHJcbiAgICAgICAgLy8gY29jb3N6LmRhdGFNZ3IuQ29pbkNvdW50ID0gOTk5OTk7XHJcblxyXG4gICAgICAgIGNvY29zei5kYXRhTWdyLklzRW5kID0gbnVsbDtcclxuICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQXVkaW9Pbikge1xyXG4gICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheUdhbWVNdXNpYygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2hlZHVsZXIoKS5lbmFibGVGb3JUYXJnZXQodGhpcyk7XHJcblxyXG5cclxuICAgICAgICBsZXQgbm9kZSA9IHRoaXMuX0J0blNpZ24uZ2V0Q2hpbGRCeU5hbWUoXCJob21lX2FuaW1hdGlvbl9saWdodFwiKVxyXG4gICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgIC5yZXBlYXRGb3JldmVyKGNjLnR3ZWVuKCkuYnkoNSwgeyBhbmdsZTogMzYwIH0pKVxyXG4gICAgICAgICAgICAuc3RhcnQoKTtcclxuXHJcblxyXG4gICAgICAgIC8vIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSkge1xyXG4gICAgICAgIC8vICAgICBpZiAoIWNvY29zei5nYW1lTWdyLmlzRmlyc3QyKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pc0ZpcnN0MiA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgICAgICBjb2Nvc3ouc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93TW9yZUdhbWVCeUJhbm5lcigpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dNb3JlR2FtZVNpZGUoKTtcclxuICAgICAgICAvLyAgICAgICAgIH0sIDIpXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93TW9yZUdhbWVCeUJhbm5lcigpO1xyXG4gICAgICAgIC8vICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuc2hvd01vcmVHYW1lU2lkZSgpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2UgaWYgKChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5WSVZPX0dBTUUpKSB7XHJcbiAgICAgICAgLy8gICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dCYW5uZXJCeUJvdHRvbSgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNlIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5PUFBPX0dBTUUpIHtcclxuICAgICAgICAvLyAgICAgY2MubG9nKFwiaXNPcHBvLS0tLS0tLS0tLS0tLS0tLS0tLVwiLCBjb2Nvc3ouZ2FtZU1nci5pc0ZpcnN0MilcclxuICAgICAgICAvLyAgICAgaWYgKCFjb2Nvc3ouZ2FtZU1nci5pc0ZpcnN0Mikge1xyXG4gICAgICAgIC8vICAgICAgICAgY29jb3N6LmdhbWVNZ3IuaXNGaXJzdDIgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICAgICAgY29jb3N6LnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuc2hvd01vcmVHYW1lQnlJY29uKHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgbm9kZTogdGhpcy5fU2NhbGVOb2RlLmdldENoaWxkQnlOYW1lKFwiaWNvbk1vcmVHYW1lXCIpLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBzaWRlOiAxMzAsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dNb3JlR2FtZUJ5QmFubmVyKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuc2hvd01vcmVHYW1lU2lkZSh7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlzUGVyc2lzdDogZmFsc2UsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHNpZGVUeXBlX3JpZ2h0OiBmYWxzZSxcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgeTogMjAwXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gICAgICAgICB9LCAyKVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuc2hvd01vcmVHYW1lQnlJY29uKHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBub2RlOiB0aGlzLl9TY2FsZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uTW9yZUdhbWVcIiksXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgc2lkZTogMTMwLFxyXG4gICAgICAgIC8vICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuc2hvd01vcmVHYW1lQnlCYW5uZXIoKTtcclxuICAgICAgICAvLyAgICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dNb3JlR2FtZVNpZGUoe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlzUGVyc2lzdDogZmFsc2UsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgc2lkZVR5cGVfcmlnaHQ6IGZhbHNlLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHk6IDIwMFxyXG4gICAgICAgIC8vICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci50d2VlQnRuKHRoaXMuX0J0blN0YXJ0LCAwLjksIDAuODUpO1xyXG4gICAgICAgIC8vIGxldCBiID0gY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoNSksIGNjLnJlcGVhdChjYy5zZXF1ZW5jZShjYy5yb3RhdGVUbygwLjEsIDEwKSwgY2Mucm90YXRlVG8oMC4xLCAtMTApKSwgMyksIGNjLnJvdGF0ZVRvKDAuMSwgMCkpKTtcclxuICAgICAgICAvLyB0aGlzLl9CdG5TaG9wLnJ1bkFjdGlvbihiKTtcclxuXHJcbiAgICAgICAgLy8gbGV0IGcgPSBjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSg1KSwgY2MucmVwZWF0KGNjLnNlcXVlbmNlKGNjLnJvdGF0ZVRvKDAuMSwgMTApLCBjYy5yb3RhdGVUbygwLjEsIC0xMCkpLCAzKSwgY2Mucm90YXRlVG8oMC4xLCAwKSkpO1xyXG4gICAgICAgIC8vIHRoaXMuX0J0blNpZ24ucnVuQWN0aW9uKGcpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gbGV0IGMgPSBjYy50d2VlbigpLmJ5KDEwLCB7IGFuZ2xlOiAzNjAgfSk7XHJcbiAgICAgICAgLy8gbGV0IGMyID0gY2MudHdlZW4oKS5ieSgzLCB7IGFuZ2xlOiAzNjAgfSk7XHJcbiAgICAgICAgLy8gY2MudHdlZW4odGhpcy5fQnRuU2lnbi5nZXRDaGlsZEJ5TmFtZShcImhvbWVfYW5pbWF0aW9uX2xpZ2h0XCIpKVxyXG4gICAgICAgIC8vICAgICAucmVwZWF0Rm9yZXZlcihjKVxyXG4gICAgICAgIC8vICAgICAuc3RhcnQoKVxyXG5cclxuICAgICAgICAvLyBjYy50d2Vlbih0aGlzLl9CdG5Mb3R0ZXJ5LmdldENoaWxkQnlOYW1lKFwiaGFsb1wiKSlcclxuICAgICAgICAvLyAgICAgLnJlcGVhdEZvcmV2ZXIoYzIpXHJcbiAgICAgICAgLy8gICAgIC5zdGFydCgpXHJcblxyXG5cclxuICAgICAgICAvLyBsZXQgY3VyRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgLy8gbGV0IGNhbkJvbnVzID0gY3VyRGF0ZS50b0RhdGVTdHJpbmcoKSAhPSBjb2Nvc3ouZGF0YU1nci5MYXN0Qm9udXNUaW1lO1xyXG5cclxuICAgICAgICAvLyBpZiAoY2FuQm9udXMgJiYgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA+PSAzKSB7XHJcbiAgICAgICAgLy8gICAgIC8vIGNvY29zei51aU1nci5vcGVuUGFuZWwoUGFuZWxOYW1lLlVpU2lnbik7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuXHJcbiAgICAgICAgLy8gdGhpcy5fTG9nby5wbGF5QW5pbWF0aW9uKFwibG9nb19tb3ZlXCIsIDEpO1xyXG4gICAgICAgIC8vIHRoaXMuX0xvZ28ub24oZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUsICgpID0+IHtcclxuXHJcbiAgICAgICAgLy8gICAgIHRoaXMuX0xvZ28ucGxheUFuaW1hdGlvbihcImxvZ29faWRsZVwiLCAwKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5fTG9nby5vZmYoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUpXHJcbiAgICAgICAgLy8gfSwgdGhpcy5fTG9nbylcclxuXHJcblxyXG5cclxuICAgICAgICAvLyBsZXQgZCA9IGNjLnR3ZWVuKCkuc2VxdWVuY2UoXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgY05vZGUxID0gY2MuaW5zdGFudGlhdGUodGhpcy5fQ2xvdWQxKTtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBjTm9kZTIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLl9DbG91ZDIpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fQ2xvdWQxLnBhcmVudC5hZGRDaGlsZChjTm9kZTEpO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fQ2xvdWQxLnBhcmVudC5hZGRDaGlsZChjTm9kZTIpO1xyXG4gICAgICAgIC8vICAgICAgICAgY05vZGUxLnkgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgICAgIC8vICAgICAgICAgY05vZGUyLnkgPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKGNOb2RlMS54IDwgMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNOb2RlMS54IC09IE1hdGgucmFuZG9tKCkgKiAzNjA7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjTm9kZTEueCArPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyAgICAgICAgIGlmIChjTm9kZTIueCA8IDApIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjTm9kZTIueCAtPSBNYXRoLnJhbmRvbSgpICogMzYwO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY05vZGUyLnggKz0gTWF0aC5yYW5kb20oKSAqIDM2MDtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC8vICAgICAgICAgbGV0IHBvczEgPSBjYy52MigoMjUwMCArIE1hdGgucmFuZG9tKCkgKiA1MDApICogY05vZGUxLnNjYWxlWCwgMClcclxuXHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgcG9zMiA9IGNjLnYyKCgyNTAwICsgTWF0aC5yYW5kb20oKSAqIDUwMCkgKiBjTm9kZTIuc2NhbGVYLCAwKVxyXG5cclxuICAgICAgICAvLyAgICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC40KSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY05vZGUxLnggKj0gLTE7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY05vZGUxLnNjYWxlWCAqPSAtMTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBwb3MxLnggKj0gLTE7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgY2MudHdlZW4oY05vZGUxKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC5ieSg1MCArIDUgKiBNYXRoLnJhbmRvbSgpLCB7IHBvc2l0aW9uOiBwb3MxIH0pXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBjTm9kZTEuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLnN0YXJ0KClcclxuXHJcbiAgICAgICAgLy8gICAgICAgICBjYy50d2VlbihjTm9kZTIpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLmJ5KDUwICsgNSAqIE1hdGgucmFuZG9tKCksIHsgcG9zaXRpb246IHBvczIgfSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNOb2RlMi5kZXN0cm95KCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgIC8vICAgICB9KSxcclxuICAgICAgICAvLyAgICAgY2MudHdlZW4oKS5kZWxheSg1MClcclxuICAgICAgICAvLyApXHJcblxyXG4gICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMuX0Nsb3VkMS5wYXJlbnQpXHJcbiAgICAgICAgLy8gICAgIC5yZXBlYXRGb3JldmVyKGQpXHJcbiAgICAgICAgLy8gICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICAvLyBsZXQgZiA9IGNjLnR3ZWVuKCkuc2VxdWVuY2UoXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJlbmVteTNcIiwgY2MuUHJlZmFiKVxyXG4gICAgICAgIC8vICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgIC8vICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihjYy52MigtMjM4LCAtNTYwKSk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9TY2FsZU5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9FbmVteSA9IG5vZGU7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBjYy5sb2codGhpcy5fRW5lbXksXCItLS0tLS0tLS0tLS1cIilcclxuICAgICAgICAvLyAgICAgfSksXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkuZGVsYXkoNSksXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm1hbi5wbGF5QW5pbWF0aW9uKFwiaG9tZVwiLCAxKVxyXG4gICAgICAgIC8vICAgICB9KSxcclxuICAgICAgICAvLyAgICAgY2MudHdlZW4oKS5kZWxheSgxKSxcclxuICAgICAgICAvLyAgICAgY2MudHdlZW4oKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX0VuZW15LmdldENoaWxkQnlOYW1lKFwicmlnaHRfYmFsbG9vblwiKS5kZXN0cm95KCk7XHJcbiAgICAgICAgLy8gICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheU1ldGFsU3RvbmVFZmZlY3QyKCk7XHJcbiAgICAgICAgLy8gICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheUd1bkVmZmVjdCgpO1xyXG4gICAgICAgIC8vICAgICB9KSxcclxuXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkuZGVsYXkoMC4zKSxcclxuICAgICAgICAvLyAgICAgY2MudHdlZW4oKS5jYWxsKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX0VuZW15LmdldENoaWxkQnlOYW1lKFwibGVmdF9iYWxsb29uXCIpLmRlc3Ryb3koKTtcclxuICAgICAgICAvLyAgICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5TWV0YWxTdG9uZUVmZmVjdDIoKTtcclxuICAgICAgICAvLyAgICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5R3VuRWZmZWN0KCk7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlCZWZvcmVGZWlsZEVmZmVjdDEoKTtcclxuXHJcbiAgICAgICAgLy8gICAgIH0pLFxyXG4gICAgICAgIC8vICAgICBjYy50d2VlbigpLmRlbGF5KDAuNiksXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5tYW4ucGxheUFuaW1hdGlvbihcImlkbGVcIiwgMClcclxuICAgICAgICAvLyAgICAgfSksXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkuZGVsYXkoNSksXHJcbiAgICAgICAgLy8gICAgIGNjLnR3ZWVuKCkuY2FsbCgoKSA9PiB7XHJcblxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fRW5lbXkuZGVzdHJveSgpO1xyXG4gICAgICAgIC8vICAgICB9KSxcclxuXHJcblxyXG4gICAgICAgIC8vIClcclxuXHJcblxyXG4gICAgICAgIC8vIHRoaXMuYWN0aW9uID0gY2MudHdlZW4odGhpcy5tYW4pXHJcbiAgICAgICAgLy8gICAgIC5yZXBlYXRGb3JldmVyKGYpXHJcbiAgICAgICAgLy8gICAgIC5zdGFydCgpO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcblxyXG5cclxuICAgICAgICBsZXQgbWFwRGF0YSA9IHt9O1xyXG4gICAgICAgIGxldCBudW0gPSAwO1xyXG4gICAgICAgIHdoaWxlIChudW0rKyA8IDIwKSB7XHJcbiAgICAgICAgICAgIGxldCBrZXkgPSBcImxldmVsXCIgKyBudW1cclxuICAgICAgICAgICAgbGV0IGRlY3QgPSBtYXBEYXRhW2tleV0gPSBbXTtcclxuICAgICAgICAgICAgZGVjdFtcInN1cHBsZW1lbnRcIl0gPSBbXTtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcImxldmVsXCIgKyBudW0sIGNjLlByZWZhYikuZGF0YTtcclxuICAgICAgICAgICAgLy8gY2MubG9nKGRhdGEsIG51bSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGRhdGEuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIGxldCBkZWN0MiA9IHt9O1xyXG4gICAgICAgICAgICAgICAgZGVjdDJbXCJ4XCJdID0gY2hpbGQueDtcclxuICAgICAgICAgICAgICAgIGRlY3QyW1wieVwiXSA9IGNoaWxkLnk7XHJcbiAgICAgICAgICAgICAgICBkZWN0MltcInNjYWxlWFwiXSA9IGNoaWxkLnNjYWxlWDtcclxuICAgICAgICAgICAgICAgIGRlY3QyW1wic2NhbGVZXCJdID0gY2hpbGQuc2NhbGVZO1xyXG4gICAgICAgICAgICAgICAgZGVjdDJbXCJhbmdsZVwiXSA9IGNoaWxkLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgZGVjdDJbXCJuYW1lXCJdID0gY2hpbGQubmFtZTtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5uYW1lID09IFwibWFwTWFzazJcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSBjaGlsZC5nZXRDb21wb25lbnRzKGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcG9seSBvZiBjb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvbHkucG9pbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2gocG9seS5wb2ludHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjdDJbXCJsaXN0XCJdID0gbGlzdDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkZWN0LnB1c2goZGVjdDIpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5sb2coSlNPTi5zdHJpbmdpZnkobWFwRGF0YSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgT25CdG5TaG9wKCkge1xyXG4gICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5YnRuRWZmZWN0KCk7XHJcbiAgICAgICAgY2MubG9nKFwiLS0tLS0tUGFuZWxOYW1lLlVpU2hvcC0tLS0tLS1cIilcclxuXHJcblxyXG4gICAgICAgIGlmICgoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuVklWT19HQU1FKSkge1xyXG4gICAgICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93U3BvdEJ5UGF1c2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuT1BQT19HQU1FKSB7XHJcbiAgICAgICAgICAgIC8vIGxpZXlvdV9TZGtNYW5hZ2VyLmhpZGVCYW5uZXIoKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhbmVsKFBhbmVsTmFtZS5VaVNob3ApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgT25CdG5TZXQoKSB7XHJcbiAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlidG5FZmZlY3QoKTtcclxuICAgICAgICBpZiAoKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLlZJVk9fR0FNRSkpIHtcclxuICAgICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuc2hvd1Nwb3RCeVBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLk9QUE9fR0FNRSkge1xyXG4gICAgICAgICAgICAvLyBsaWV5b3VfU2RrTWFuYWdlci5oaWRlQmFubmVyKClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYW5lbChQYW5lbE5hbWUuVWlTZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgT25CdG5TdGFydCgpIHtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5hY3Rpb24uc3RvcCgpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gY29jb3N6LmF1ZGlvTWdyLnBsYXlidG5FZmZlY3QoKTtcclxuICAgICAgICAvLyBjb2Nvc3oudWlNZ3Iub3BlblBhbmVsKFBhbmVsTmFtZS5VaUxvdHRlcnkpO1xyXG5cclxuICAgICAgICAvLyBNc2cuU2hvdyhcIuS4gOebtOaKveS4gOebtOeIvVwiKTtcclxuXHJcbiAgICAgICAgLy8gcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBjb2Nvc3ouZ2FtZU1nci5pc0dhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgLy8gY29jb3N6LnNjZW5lTWdyLmxvYWRTY2VuZShcInJld2FyZExldmVsMlwiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIE1zZy5TaG93KFwi5aWW5Yqx5YWz5Y2h5p2l5Li0XCIpXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgLy8gcmV0dXJuO1xyXG5cclxuICAgICAgICBjb2Nvc3ouc2NlbmVNZ3IubG9hZFNjZW5lKFwiR2FtZTJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhZ2UoUGFnZU5hbWUuVWlHYW1lKTtcclxuICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3IuaW5pdEdhbWUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IG1hcERhdGEgPSB7fTtcclxuICAgICAgICBsZXQgbnVtID0gMDtcclxuICAgICAgICB3aGlsZSAobnVtKysgPCAxNDApIHtcclxuICAgICAgICAgICAgbGV0IGtleSA9IFwibWFwXCIgKyBudW1cclxuICAgICAgICAgICAgbGV0IGRlY3QgPSBtYXBEYXRhW2tleV0gPSBbXTtcclxuICAgICAgICAgICAgZGVjdFtcInN1cHBsZW1lbnRcIl0gPSBbXTtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcIm1hcFwiICsgbnVtLCBjYy5QcmVmYWIpLmRhdGE7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhkYXRhLCBudW0pO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBkYXRhLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQubmFtZSA9PSBcIm1hcE1hc2tQb2ludFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudCA9IGNoaWxkLmdldENvbXBvbmVudHMoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdDQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBwb2x5IG9mIGNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9seS5wb2ludHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QucHVzaChwb2x5LnBvaW50cylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBsaXN0MiBvZiBsaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaXN0MyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0Mi5tYXAoKGksIGopID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGRbXCJ4XCJdID0gaS54XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZFtcInlcIl0gPSBpLnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhkZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QzLnB1c2goZGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIGRkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0NC5wdXNoKGxpc3QzKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBhW1wibmFtZVwiXSA9IGNoaWxkLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYVtcImxpc3RcIl0gPSBsaXN0NFxyXG4gICAgICAgICAgICAgICAgICAgIGFbXCJ4XCJdID0gY2hpbGQueDtcclxuICAgICAgICAgICAgICAgICAgICBhW1wieVwiXSA9IGNoaWxkLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjdC5wdXNoKGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQubmFtZSA9PSBcInNhbmRNYXNrUG9pbnRcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgcG9pbnQgPSBjaGlsZC5nZXRDb21wb25lbnQoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcikucG9pbnRzO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnQgPSBjaGlsZC5nZXRDb21wb25lbnRzKGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxpc3Q0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcG9seSBvZiBjb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvbHkucG9pbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LnB1c2gocG9seS5wb2ludHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbGlzdDIgb2YgbGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdDMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDIubWFwKChpLCBqKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGQgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRkW1wieFwiXSA9IGkueFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGRbXCJ5XCJdID0gaS55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coZGQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0My5wdXNoKGRkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBkZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDQucHVzaChsaXN0MylcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgYVtcIm5hbWVcIl0gPSBjaGlsZC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGFbXCJsaXN0XCJdID0gbGlzdDRcclxuICAgICAgICAgICAgICAgICAgICBhW1wieFwiXSA9IGNoaWxkLng7XHJcbiAgICAgICAgICAgICAgICAgICAgYVtcInlcIl0gPSBjaGlsZC55O1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY3QucHVzaChhKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQubmFtZSA9PSBcInJvbGVcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgYSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGFbXCJ4XCJdID0gY2hpbGQueDtcclxuICAgICAgICAgICAgICAgICAgICBhW1wieVwiXSA9IGNoaWxkLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgYVtcIm5hbWVcIl0gPSBjaGlsZC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY3QucHVzaChhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGlsZC5uYW1lID09IFwiYmFmZmxlXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBhW1wieFwiXSA9IGNoaWxkLng7XHJcbiAgICAgICAgICAgICAgICAgICAgYVtcInlcIl0gPSBjaGlsZC55O1xyXG4gICAgICAgICAgICAgICAgICAgIGFbXCJuYW1lXCJdID0gY2hpbGQubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBkZWN0LnB1c2goYSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGlsZC5uYW1lID09IFwiZmFuXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBhW1wieFwiXSA9IGNoaWxkLng7XHJcbiAgICAgICAgICAgICAgICAgICAgYVtcInlcIl0gPSBjaGlsZC55O1xyXG4gICAgICAgICAgICAgICAgICAgIGFbXCJzY2FsZVwiXSA9IGNoaWxkLnNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFbXCJhbmdsZVwiXSA9IGNoaWxkLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFbXCJuYW1lXCJdID0gY2hpbGQubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBkZWN0LnB1c2goYSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGlsZC5uYW1lID09IFwiaGFuZFRpcHNcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgYSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGFbXCJ4XCJdID0gY2hpbGQueDtcclxuICAgICAgICAgICAgICAgICAgICBhW1wieVwiXSA9IGNoaWxkLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgYVtcInNjYWxlXCJdID0gY2hpbGQuc2NhbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYVtcImFuZ2xlXCJdID0gY2hpbGQuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYVtcIm5hbWVcIl0gPSBjaGlsZC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY3QucHVzaChhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjaGlsZC5uYW1lID09IFwicHJvcE1vdmVGbG9vclwiIHx8IGNoaWxkLm5hbWUgPT0gXCJlbmVteVwiIHx8IGNoaWxkLm5hbWUgPT0gXCJwcm9wXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGFyZW50ID0gbmV3IGNjLk5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Lm5hbWUgPT0gY2hpbGQubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBkZWN0W2NoaWxkLm5hbWVdID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRlY3QyID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjdDJbXCJuYW1lXCJdID0gY2hpbGQubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBkZWN0MltcImxpc3RcIl0gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBkZWN0MltcInhcIl0gPSBjaGlsZC54O1xyXG4gICAgICAgICAgICAgICAgICAgIGRlY3QyW1wieVwiXSA9IGNoaWxkLnk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGNoaWxkMiBvZiBjaGlsZC5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNoaWxkMikgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYVtcIm5hbWVcIl0gPSBjaGlsZDIubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYVtcInhcIl0gPSBjaGlsZDIueDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYVtcInlcIl0gPSBjaGlsZDIueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYVtcInNjYWxlWFwiXSA9IGNoaWxkMi5zY2FsZVg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFbXCJzY2FsZVlcIl0gPSBjaGlsZDIuc2NhbGVZO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhW1wiYW5nbGVcIl0gPSBjaGlsZDIuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFbXCJ3aWR0aFwiXSA9IGNoaWxkMi53aWR0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY3QyW1wibGlzdFwiXS5wdXNoKGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkMi5uYW1lID09IFwiZmxvb3IxMVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW1wicm9ja2V0XCJdID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW1wicm9ja2V0XCJdW1wic2NhbGVYXCJdID0gY2hpbGQyLmdldENoaWxkQnlOYW1lKFwicm9ja2V0XCIpLnNjYWxlWDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlY3QyW1wic3VwcGxlbWVudFwiXS5wdXNoKGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyb2NrZXRcIikueCA9IC1jaGlsZDIuZ2V0Q2hpbGRCeU5hbWUoXCJyb2NrZXRcIikueDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQyLm5hbWUgPT0gXCJmbG9vcjE3XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmbG9vciA9IGNoaWxkMi5nZXRDaGlsZEJ5TmFtZShcImZsb29yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtcImZsb29yXCJdID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW1wiZmxvb3JcIl1bXCJ4XCJdID0gZmxvb3IueDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbXCJmbG9vclwiXVtcInlcIl0gPSBmbG9vci55O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtcImZsb29yXCJdW1wic2NhbGVYXCJdID0gZmxvb3Iuc2NhbGVYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtcImZsb29yXCJdW1wic2NhbGVZXCJdID0gZmxvb3Iuc2NhbGVZO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtcImZsb29yXCJdW1wiYW5nbGVcIl0gPSBmbG9vci5hbmdsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbXCJmbG9vclwiXVtcIndpZHRoXCJdID0gZmxvb3Iud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub2RlLmdldENoaWxkQnlOYW1lKFwicm9ja2V0XCIpLnggPSAtY2hpbGQyLmdldENoaWxkQnlOYW1lKFwicm9ja2V0XCIpLng7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQyLm5hbWUgPT0gXCJmbG9vclJvdGV0YUNvbVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmxvb3IgPSBjaGlsZDIuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaXJlY3Rpb24gPSBjaGlsZDIuZ2V0Q2hpbGRCeU5hbWUoXCJkaXJlY3Rpb25cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImZsb29yXCIpLmFuZ2xlID0gZmxvb3IuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImZsb29yXCIpLnNjYWxlWCA9IGZsb29yLnNjYWxlWDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiZmxvb3JcIikuc2NhbGVZID0gZmxvb3Iuc2NhbGVZO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW1wiZmxvb3JcIl0gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbXCJmbG9vclwiXVtcInhcIl0gPSBmbG9vci54O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtcImZsb29yXCJdW1wieVwiXSA9IGZsb29yLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW1wiZmxvb3JcIl1bXCJzY2FsZVhcIl0gPSBmbG9vci5zY2FsZVg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW1wiZmxvb3JcIl1bXCJzY2FsZVlcIl0gPSBmbG9vci5zY2FsZVk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW1wiZmxvb3JcIl1bXCJhbmdsZVwiXSA9IGZsb29yLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtcImZsb29yXCJdW1wid2lkdGhcIl0gPSBmbG9vci53aWR0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW1wiZGlyZWN0aW9uXCJdID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW1wiZGlyZWN0aW9uXCJdW1wieFwiXSA9IGRpcmVjdGlvbi54O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtcImRpcmVjdGlvblwiXVtcInlcIl0gPSBkaXJlY3Rpb24ueTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbXCJkaXJlY3Rpb25cIl1bXCJzY2FsZVhcIl0gPSBkaXJlY3Rpb24uc2NhbGVYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYVtcImRpcmVjdGlvblwiXVtcInNjYWxlWVwiXSA9IGRpcmVjdGlvbi5zY2FsZVk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW1wiZGlyZWN0aW9uXCJdW1wiYW5nbGVcIl0gPSBkaXJlY3Rpb24uYW5nbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhW1wiZGlyZWN0aW9uXCJdW1wid2lkdGhcIl0gPSBkaXJlY3Rpb24ud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImRpcmVjdGlvblwiKS5hbmdsZSA9IGRpcmVjdGlvbi5hbmdsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiZGlyZWN0aW9uXCIpLnNjYWxlWCA9IGRpcmVjdGlvbi5zY2FsZVg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImRpcmVjdGlvblwiKS5zY2FsZVkgPSBkaXJlY3Rpb24uc2NhbGVZO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm9kZS5zZXRQb3NpdGlvbihjaGlsZDIuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVjdC5wdXNoKGRlY3QyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5sb2coSlNPTi5zdHJpbmdpZnkobWFwRGF0YSkpO1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICByZXR1cm5cclxuXHJcbiAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9IGNvY29zei5kYXRhTWdyLk1heFVubG9ja0xldmVsQ291bnQ7XHJcbiAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlidG5FZmZlY3QoKTtcclxuICAgICAgICAvLyBjb2Nvc3ouc2NlbmVNZ3IubG9hZFNjZW5lKFwicmV3YXJkTGV2ZWwyXCIsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgY2MubG9nKFwiLS0tLS0tLS0tLS0tLS0tLeWlluWKseWFs+WNoeadpeS4tFwiKVxyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAvLyByZXR1cm47XHJcbiAgICAgICAgLy8gY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9IDE0MDtcclxuICAgICAgICAvLyBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkKys7XHJcblxyXG4gICAgICAgIGNvY29zei5zY2VuZU1nci5sb2FkU2NlbmUoXCJHYW1lXCIsICgpID0+IHtcclxuICAgICAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYWdlKFBhZ2VOYW1lLlVpR2FtZSk7XHJcbiAgICAgICAgICAgIGNvY29zei5nYW1lTWdyLmluaXRHYW1lKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBPbkJ0bkxldmVsMigpIHtcclxuXHJcblxyXG4gICAgICAgIGNvY29zei5zY2VuZU1nci5sb2FkU2NlbmUoXCJHYW1lMlwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvY29zei51aU1nci5vcGVuUGFnZShQYWdlTmFtZS5VaUdhbWUpO1xyXG4gICAgICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pbml0R2FtZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBPbkJ0bkxldmVsKCkge1xyXG4gICAgICAgIC8vIGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPSA2O1xyXG4gICAgICAgIC8vIGNvY29zei5kYXRhTWdyLkN1clNraW5JZCA9IDE7XHJcbiAgICAgICAgLy8gY29jb3N6LnNjZW5lTWdyLmxvYWRTY2VuZShcIkxvYWRHYW1lXCIsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgY29jb3N6LnVpTWdyLm9wZW5QYWdlKFBhZ2VOYW1lLlVpTG9hZEdhbWUpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIHJldHVybjtcclxuICAgICAgICAvLyBsaWV5b3VfU2RrTWFuYWdlci5oaWRlQmFubmVyKCk7XHJcbiAgICAgICAgLy8gdGhpcy5fQnRuU3RhcnQuZ2V0Q2hpbGRCeU5hbWUoXCJob21lX2J0bl9zdGFyX3NlbGVjdFwiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheWJ0bkVmZmVjdCgpO1xyXG4gICAgICAgIGNvY29zei51aU1nci5vcGVuUGFuZWwoUGFuZWxOYW1lLkxldmVsUGFuZWwpO1xyXG5cclxuICAgIH1cclxuICAgIHByaXZhdGUgT25CdG5Mb3R0ZXJ5KCkge1xyXG4gICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5YnRuRWZmZWN0KCk7XHJcbiAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYW5lbChQYW5lbE5hbWUuVWlMb3R0ZXJ5KTtcclxuICAgICAgICAvLyBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJVaUxvdHRlcnlcIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICAvLyBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgLy8gY2MuZmluZChcIkNhbnZhcy91aVwiKS5hZGRDaGlsZChub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIE9uQnRuQXVkaW8oKSB7XHJcbiAgICAgICAgY2MubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLemfs+mHj1wiKVxyXG4gICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5YnRuRWZmZWN0KCk7XHJcbiAgICAgICAgY29jb3N6LmRhdGFNZ3IuQXVkaW9PbiA9ICFjb2Nvc3ouZGF0YU1nci5BdWRpb09uO1xyXG4gICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5BdWRpb09uKSB7XHJcbiAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5yZXN1bUFsbE11c2ljKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX0J0bkF1ZGlvLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX0J0bkF1ZGlvLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5zdG9wQWxsKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX0J0bkF1ZGlvLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX0J0bkF1ZGlvLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIE9uQnRuU2lnbigpIHtcclxuICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheWJ0bkVmZmVjdCgpO1xyXG4gICAgICAgIGxldCBjdXJEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuTGFzdEJvbnVzVGltZSA9PSBjdXJEYXRlLnRvRGF0ZVN0cmluZygpKSB7XHJcbiAgICAgICAgICAgIE1zZy5TaG93KFwi5piO5pel5LiK57q/5Y+v6aKG5Y+W6YeR5biBKjUwMFwiKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvY29zei51aU1nci5vcGVuUGFuZWwoUGFuZWxOYW1lLlVpU2lnbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uQ2xvc2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uLnN0b3AoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0U2NoZWR1bGVyKCkudW5zY2hlZHVsZUFsbEZvclRhcmdldCh0aGlzKTtcclxuICAgICAgICBjYy5nYW1lLnRhcmdldE9mZih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFjdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbi5zdG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjaGVkdWxlcigpLnVuc2NoZWR1bGVBbGxGb3JUYXJnZXQodGhpcyk7XHJcbiAgICAgICAgY2MuZ2FtZS50YXJnZXRPZmYodGhpcyk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==