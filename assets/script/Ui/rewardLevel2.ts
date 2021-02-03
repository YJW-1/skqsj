// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { cocosz } from "../Framework/CocosZ";
import { PanelName } from "../Framework/Constant";
import Msg from "../Framework/Msg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class rewardLevel extends cc.Component {

    coinMgr: cc.Node = null;

    @property(cc.Node)
    bg: cc.Node = null;
    coinCur: cc.Label = null;
    time: cc.Label = null;

    timeNum: number = 25;



    onSucceed() {
        if (cocosz.gameMgr.isGameOver) return;
        cocosz.gameMgr.isGameOver = true;

        this.node.getChildByName("Coin").active = false;
        cocosz.audioMgr.playBeforeVectoryEffect();
        cocosz.unscheduleAllCallbacks();

        // if (cc.sys.platform === cc.sys.VIVO_GAME && cocosz.dataMgr.ShockOn) {
        //     lieyou_SdkManager.vibrateLong();
        // }

        if (cc.sys.platform === cc.sys.WECHAT_GAME && cocosz.dataMgr.ShockOn) {
            window["wx"].vibrateLong();
        }
        this.scheduleOnce(() => {
            cocosz.uiMgr.openPanel(PanelName.UiBeforeSucceed);
        }, 1.5)
    }


    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.coinMgr = this.node.parent.getChildByName("coinMgr");
        this.coinCur = this.node.getChildByName("Coin").getChildByName("num").getComponent(cc.Label);
        this.time = this.node.getChildByName("time").getChildByName("num").getComponent(cc.Label);
        this.coinCur.string = cocosz.dataMgr.CoinCount.toString();
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
            cc.director.getPhysicsManager().debugDrawFlags = 1;
            // cc.director.getCollisionManager().enabledDebugDraw = true;
            // var Bits = cc.PhysicsManager.DrawBits;
            // cc.director.getPhysicsManager().debugDrawFlags =
            //     Bits.e_aabbBit |
            //     Bits.e_jointBit |
            //     Bits.e_shapeBit;


            this.bg.zIndex -= 1000;
        }
    }

    start() {
        // let gameBg = cocosz.resMgr.getRes("gameBg", cc.Prefab);
        // this.node.parent.addChild(cc.instantiate(gameBg), -100);
        let propHoneybee = cocosz.resMgr.getRes("coin", cc.Prefab);

        let num = 2 * Math.random() + 3;
        for (let i = 0; i < num; i++) {
            let node = cc.instantiate(propHoneybee);
            node.setPosition(cc.v2(Math.random() * 700 - 250, Math.random() * 100 - 500))
            this.coinMgr.addChild(node);
        }


        let map = this.node.getChildByName("map");
        let point = map.getComponent(cc.PhysicsPolygonCollider).points;

        let prefab = cocosz.resMgr.getRes("mapMask", cc.Prefab)
        let node = cc.instantiate(prefab);
        // node.x = list.x
        // node.y = list.y

        this.node.parent.addChild(node);
        // node.zIndex -= 999;
        let mask: cc.Mask = node.getComponent(cc.Mask);
        let graphics = mask._graphics;
        let graphics2: cc.Graphics = node.getChildByName("line").getComponent(cc.Graphics);
        let rb = node.addComponent(cc.RigidBody);
        rb.type = cc.RigidBodyType.Static;

        // for (let point of list) {
        let collider = node.addComponent(cc.PhysicsPolygonCollider);
        collider.points = [].concat(point);
        collider.apply();

        graphics.moveTo(point[0].x, point[0].y);
        for (let v2 of point) {
            graphics.lineTo(v2.x, v2.y);
        }
        graphics.fill();



        graphics2.lineWidth = 15;
        graphics2.strokeColor = new cc.Color(40, 33, 13, 255);
        graphics2.moveTo(point[0].x, point[0].y);
        for (let v2 of point) {
            graphics2.lineTo(v2.x, v2.y);
        }
        graphics2.lineTo(point[0].x, point[0].y);
        graphics2.stroke();
        map.removeFromParent();

        // }

        this.schedule(() => {
            let num = 2 * Math.random() + 3;
            for (let i = 0; i < num; i++) {
                let node = cc.instantiate(propHoneybee);
                node.setPosition(cc.v2(Math.random() * 700 - 250, Math.random() * 100 - 500))
                this.coinMgr.addChild(node);
            }
        }, 1.5)

        cocosz.scheduleOnce(() => {
            Msg.Show("在规定的时间内获取更多的金币")
        }, 1.5)
        cocosz.gameMgr.LevelNum = 0
        cocosz.gameMgr.isOpenRewardLevel = false;

    }

    update(dt) {
        if (cocosz.gameMgr.isGameOver) return;
        if (this.timeNum > 0) {
            this.timeNum -= dt;
            if (this.timeNum <= 3) {
                this.unscheduleAllCallbacks();
            }
            if (this.timeNum > 0) {
                let str = "";
                if (this.timeNum < 10) {
                    str += "0";
                }
                this.time.string = "00:" + str + Math.floor(this.timeNum)
            }
            else {
                this.onSucceed();
            }
        }
    }
}
