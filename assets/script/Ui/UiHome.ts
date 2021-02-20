import UIPage from "./UIPage";
import { cocosz } from "../Framework/CocosZ";
import Constant, { PageName, PanelName, FloorType } from "../Framework/Constant";
// import { BannerLocation } from "../common-plugin/Scripts/YZ_Constant";
// import { utils } from "../common-plugin/Scripts/Utils";
import Msg from "../Framework/Msg";
import { createConnection } from "net";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UiHome extends UIPage {

    private _BtnShop: cc.Node = null;
    private _BtnStart: cc.Node = null;
    private _BtnAudio: cc.Node = null;
    private _BtnSign: cc.Node = null;
    private _CoinLabel: cc.Label = null;
    private _ScaleNode: cc.Node = null;
    private _BtnLevel: cc.Node = null;

    private _BtnLevel2: cc.Node = null;
    private _BtnSet: cc.Node = null;
    private _BtnLottery: cc.Node = null;
    private _Cloud1: cc.Node = null;
    private _Cloud2: cc.Node = null;

    private _Enemy: cc.Node = null;


    private _Logo: dragonBones.ArmatureDisplay = null;
    private man: dragonBones.ArmatureDisplay = null;


    private num: number = 0;


    private action: any = null;

    constructor() {
        super();
        this._init();
    }
    private _init() {

        let Game: cc.Prefab = cocosz.resMgr.getRes(PageName.UiHome, cc.Prefab);
        if (Game) {
            let node: cc.Node = cc.instantiate(Game);
            if (node) {
                this._page = node;
                cc.find("Canvas/ui").addChild(node);
                node.active = false;
                node.position = cc.Vec3.ZERO;
                this._onLoad();
            }
        }
    }
    private _onLoad() {
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
    }
    private _Start() {
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
        this._CoinLabel.string = cocosz.dataMgr.CoinCount + "";
        cc.game.on(Constant.E_UPDATE_COIN, () => {
            this._CoinLabel.string = cocosz.dataMgr.CoinCount.toString();
        }, this);

        this._ScaleNode.getChildByName("logo").on(cc.Node.EventType.TOUCH_START, () => {
            this.num++;
            if (this.num > 10) {
                cc.log("--------解锁全部关卡")
                cocosz.gameMgr.isLevelOpen = true
            }
        }, this);

    }



    protected onOpen() {
        // cocosz.uiMgr.openPanel(PanelName.UiBeforeSucceed);

        cocosz.dataMgr.CoinCount = 99999;

        cocosz.dataMgr.IsEnd = null;
        if (cocosz.dataMgr.AudioOn) {
            cocosz.audioMgr.playGameMusic();
        }
        cc.director.getScheduler().enableForTarget(this);


        let node = this._BtnSign.getChildByName("home_animation_light")
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

        cocosz.gameMgr.tweeBtn(this._BtnStart, 0.9, 0.85);
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


        let mapData = {};
        let num = 0;
        while (num++ < 20) {
            let key = "level" + num
            let dect = mapData[key] = [];
            dect["supplement"] = [];
            let data = cocosz.resMgr.getRes("level" + num, cc.Prefab).data;
            // cc.log(data, num);
            for (let child of data.children) {
                let dect2 = {};
                dect2["x"] = child.x;
                dect2["y"] = child.y;
                dect2["scaleX"] = child.scaleX;
                dect2["scaleY"] = child.scaleY;
                dect2["angle"] = child.angle;
                dect2["name"] = child.name;
                if (child.name == "mapMask2") {
                    let component = child.getComponents(cc.PhysicsPolygonCollider);
                    let list = [];
                    for (let poly of component) {
                        if (poly.points) {
                            list.push(poly.points)
                        }
                    }
                    dect2["list"] = list;

                }
                dect.push(dect2);

            }
        }
        cc.log(JSON.stringify(mapData));
    }

    private OnBtnShop() {
        cocosz.audioMgr.playbtnEffect();
        cc.log("------PanelName.UiShop-------")


        if ((cc.sys.platform === cc.sys.VIVO_GAME)) {
            lieyou_SdkManager.showSpotByPause();
        }
        else if (cc.sys.platform === cc.sys.OPPO_GAME) {
            // lieyou_SdkManager.hideBanner()
        }



        cocosz.uiMgr.openPanel(PanelName.UiShop);
    }

    private OnBtnSet() {
        cocosz.audioMgr.playbtnEffect();
        if ((cc.sys.platform === cc.sys.VIVO_GAME)) {
            lieyou_SdkManager.showSpotByPause();
        }
        else if (cc.sys.platform === cc.sys.OPPO_GAME) {
            // lieyou_SdkManager.hideBanner()
        }
        cocosz.uiMgr.openPanel(PanelName.UiSet);
    }

    private OnBtnStart() {

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

        cocosz.sceneMgr.loadScene("Game2", () => {
            cocosz.uiMgr.openPage(PageName.UiGame);
            cocosz.gameMgr.initGame();
        });

        return;


        let mapData = {};
        let num = 0;
        while (num++ < 140) {
            let key = "map" + num
            let dect = mapData[key] = [];
            dect["supplement"] = [];
            let data = cocosz.resMgr.getRes("map" + num, cc.Prefab).data;
            // cc.log(data, num);
            for (let child of data.children) {
                if (child.name == "mapMaskPoint") {
                    let component = child.getComponents(cc.PhysicsPolygonCollider);
                    let list = [];
                    let list4 = [];
                    for (let poly of component) {
                        if (poly.points) {
                            list.push(poly.points)
                        }
                    }
                    for (let list2 of list) {
                        let list3 = [];
                        list2.map((i, j) => {
                            let dd = {};
                            dd["x"] = i.x
                            dd["y"] = i.y
                            // cc.log(dd)
                            list3.push(dd);
                            // return dd;
                        })
                        list4.push(list3)

                    }
                    let a = {};
                    a["name"] = child.name;
                    a["list"] = list4
                    a["x"] = child.x;
                    a["y"] = child.y;
                    dect.push(a);
                }
                else if (child.name == "sandMaskPoint") {

                    // let point = child.getComponent(cc.PhysicsPolygonCollider).points;
                    let component = child.getComponents(cc.PhysicsPolygonCollider);
                    let list = [];
                    let list4 = [];
                    for (let poly of component) {
                        if (poly.points) {
                            list.push(poly.points)
                        }
                    }
                    for (let list2 of list) {
                        let list3 = [];
                        list2.map((i, j) => {
                            let dd = {};
                            dd["x"] = i.x
                            dd["y"] = i.y
                            // cc.log(dd)
                            list3.push(dd);
                            // return dd;
                        })
                        list4.push(list3)

                    }
                    let a = {};
                    a["name"] = child.name;
                    a["list"] = list4
                    a["x"] = child.x;
                    a["y"] = child.y;
                    dect.push(a);

                }

                else if (child.name == "role") {

                    let a = {};
                    a["x"] = child.x;
                    a["y"] = child.y;
                    a["name"] = child.name;
                    dect.push(a);
                }

                else if (child.name == "baffle") {

                    let a = {};
                    a["x"] = child.x;
                    a["y"] = child.y;
                    a["name"] = child.name;
                    dect.push(a);
                }
                else if (child.name == "fan") {

                    let a = {};
                    a["x"] = child.x;
                    a["y"] = child.y;
                    a["scale"] = child.scale;
                    a["angle"] = child.angle;
                    a["name"] = child.name;
                    dect.push(a);
                }
                else if (child.name == "handTips") {

                    let a = {};
                    a["x"] = child.x;
                    a["y"] = child.y;
                    a["scale"] = child.scale;
                    a["angle"] = child.angle;
                    a["name"] = child.name;
                    dect.push(a);
                }

                else if (child.name == "propMoveFloor" || child.name == "enemy" || child.name == "prop") {
                    let parent = new cc.Node;
                    parent.name == child.name;
                    // dect[child.name] = [];
                    let dect2 = {};
                    dect2["name"] = child.name;
                    dect2["list"] = [];
                    dect2["x"] = child.x;
                    dect2["y"] = child.y;

                    for (let child2 of child.children) {
                        if (!child2) break
                        let a = {};
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
                            let floor = child2.getChildByName("floor");
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
                            let floor = child2.getChildByName("floor");
                            let direction = child2.getChildByName("direction");
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




        return

        cocosz.dataMgr.CurLevelId = cocosz.dataMgr.MaxUnlockLevelCount;
        cocosz.audioMgr.playbtnEffect();
        // cocosz.sceneMgr.loadScene("rewardLevel2", () => {
        //     cc.log("----------------奖励关卡来临")
        // });

        // return;
        // cocosz.dataMgr.CurLevelId = 140;
        // cocosz.dataMgr.CurLevelId++;

        cocosz.sceneMgr.loadScene("Game", () => {
            cocosz.uiMgr.openPage(PageName.UiGame);
            cocosz.gameMgr.initGame();
        });
    }

    private OnBtnLevel2() {


        cocosz.sceneMgr.loadScene("Game2", () => {
            cocosz.uiMgr.openPage(PageName.UiGame);
            cocosz.gameMgr.initGame();
        });


    }

    private OnBtnLevel() {
        // cocosz.dataMgr.CurLevelId = 6;
        // cocosz.dataMgr.CurSkinId = 1;
        // cocosz.sceneMgr.loadScene("LoadGame", () => {
        //     cocosz.uiMgr.openPage(PageName.UiLoadGame);
        // });
        // return;
        // lieyou_SdkManager.hideBanner();
        // this._BtnStart.getChildByName("home_btn_star_select").active = false;
        cocosz.audioMgr.playbtnEffect();
        cocosz.uiMgr.openPanel(PanelName.LevelPanel);

    }
    private OnBtnLottery() {
        cocosz.audioMgr.playbtnEffect();
        cocosz.uiMgr.openPanel(PanelName.UiLottery);
        // let prefab = cocosz.resMgr.getRes("UiLottery", cc.Prefab);
        // let node = cc.instantiate(prefab);
        // cc.find("Canvas/ui").addChild(node);
    }

    private OnBtnAudio() {
        cc.log("-------------------音量")
        cocosz.audioMgr.playbtnEffect();
        cocosz.dataMgr.AudioOn = !cocosz.dataMgr.AudioOn;
        if (cocosz.dataMgr.AudioOn) {
            cocosz.audioMgr.resumAllMusic();
            this._BtnAudio.children[0].active = true;
            this._BtnAudio.children[1].active = false;
        } else {
            cocosz.audioMgr.stopAll();
            this._BtnAudio.children[1].active = true;
            this._BtnAudio.children[0].active = false;
        }
    }

    private OnBtnSign() {
        cocosz.audioMgr.playbtnEffect();
        let curDate = new Date();
        if (cocosz.dataMgr.LastBonusTime == curDate.toDateString()) {
            Msg.Show("明日上线可领取金币*500")
            return;
        }
        cocosz.uiMgr.openPanel(PanelName.UiSign);
    }

    protected onClose() {
        if (this.action) {
            this.action.stop();
        }
        cc.director.getScheduler().unscheduleAllForTarget(this);
        cc.game.targetOff(this);
    }

    protected onDestroy() {
        if (this.action) {
            this.action.stop();
        }
        cc.director.getScheduler().unscheduleAllForTarget(this);
        cc.game.targetOff(this);
    }

}
