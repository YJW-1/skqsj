"use strict";
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