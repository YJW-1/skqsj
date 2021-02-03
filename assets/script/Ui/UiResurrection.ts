import UIMgr from "../Framework/UIMgr";
import UIPage from "./UIPage";
import Constant, { PanelName } from "../Framework/Constant";
import { cocosz } from "../Framework/CocosZ";
import Msg from "../Framework/Msg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UiResurrection extends UIPage {

    private _ScaleNode: cc.Node = null;
    private _BtnResurrection: cc.Node = null;
    private _Ske: dragonBones.ArmatureDisplay = null;
    private _BtnCannel: cc.Node = null;
    private _Circle4: cc.Sprite = null;
    private _Circle3: cc.Sprite = null;
    private _Circle2: cc.Sprite = null;
    private _DelayTimeLable: cc.Label = null;
    private _ResurrectionDelayTime: number = 5;
    private _ActionList: any = [];

    constructor() {
        super();
        this._init();
    }

    private _init() {
        let Game: cc.Prefab = cocosz.resMgr.getRes(PanelName.UiResurrection, cc.Prefab);
        if (Game) {
            let node: cc.Node = cc.instantiate(Game);
            if (node) {
                this._page = node;
                cc.find("Canvas/ui").addChild(node);
                node.active = true;
                node.position = cc.Vec2.ZERO;
                this._onLoad();
            }
        }
    }
    private _onLoad() {
        this._ScaleNode = this._page.getChildByName("ScaleNode");
        this._BtnResurrection = this._ScaleNode.getChildByName("BtnResurrection");
        this._BtnCannel = this._ScaleNode.getChildByName("BtnCannel");
        this._Circle4 = this._ScaleNode.getChildByName("Time").getChildByName("circle_4").getComponent(cc.Sprite);
        this._Circle3 = this._ScaleNode.getChildByName("Time").getChildByName("circle_3").getComponent(cc.Sprite);
        this._Circle2 = this._ScaleNode.getChildByName("Time").getChildByName("circle_2").getComponent(cc.Sprite);
        this._DelayTimeLable = this._ScaleNode.getChildByName("Time").getChildByName("num").getComponent(cc.Label);

        this._Start();
    }



    private _Start() {
        this._BtnResurrection.on(cc.Node.EventType.TOUCH_START, () => {
            this.onBtnResurrection();
        });
        this._BtnCannel.on(cc.Node.EventType.TOUCH_START, () => {
            this.onBtnCannel();
        });
    }
    private onBtnResurrection() {
        cc.log("00-------------");
        cocosz.audioMgr.playbtnEffect();
        Msg.Show("视频播放失败!");
    }
    private onBtnCannel() {

        cc.log("00-------222------")
        for (let action of this._ActionList) {
            if (action) {
                action.stop();
            }
        }
        cocosz.unscheduleAllCallbacks()
        cocosz.audioMgr.playbtnEffect();
        cocosz.uiMgr.openPanel(PanelName.UiFailed);
        cc.game.emit(Constant.E_UPDATE_COIN);
        this._page.destroy();
    }
    protected onOpen() {
        cocosz.schedule(() => {
            if (Math.ceil(Math.abs(this._Circle2.fillRange * 5 + 5)) > 0) {
                this._DelayTimeLable.string = Math.ceil(Math.abs(this._Circle2.fillRange * 5 + 5)).toString();
            }
        }, 0.01)
        let action1 = cc.tween(this._Circle2)
            .to(5, { fillRange: -1 })
            .call(() => {
                this.onBtnCannel();
            })
            .start()
        let action2 = cc.tween(this._ScaleNode.getChildByName("Bg").getChildByName("DelayBox"))
            .to(1, { opacity: 0 })
            .to(1, { opacity: 255 })
            .to(1, { opacity: 0 })
            .to(1, { opacity: 255 })
            .to(1, { opacity: 0 })
            .start()

        let height = this._Circle3.node.height;
        let width = this._Circle3.node.width;
        let action3 = cc.tween(this._Circle3.node)
            .call(() => {
                this._Circle3.node.height = this._Circle2.node.height;
                this._Circle3.node.width = this._Circle2.node.width;
                this._Circle3.node.opacity = 255;
            })
            .to(0.75, { height: height + 150, width: width + 150, opacity: 0 })
            .delay(0.25)
            .call(() => {
                this._Circle3.node.height = this._Circle2.node.height;
                this._Circle3.node.width = this._Circle2.node.width;
                this._Circle3.node.opacity = 255;
            })
            .to(0.75, { height: height + 150, width: width + 150, opacity: 0 })
            .delay(0.25)
            .call(() => {
                this._Circle3.node.height = this._Circle2.node.height;
                this._Circle3.node.width = this._Circle2.node.width;
                this._Circle3.node.opacity = 255;
            })
            .to(0.75, { height: height + 150, width: width + 150, opacity: 0 })
            .delay(0.25)
            .call(() => {
                this._Circle3.node.height = this._Circle2.node.height;
                this._Circle3.node.width = this._Circle2.node.width;
                this._Circle3.node.opacity = 255;
            })
            .to(0.75, { height: height + 150, width: width + 150, opacity: 0 })
            .delay(0.25)
            .call(() => {
                this._Circle3.node.height = this._Circle2.node.height;
                this._Circle3.node.width = this._Circle2.node.width;
                this._Circle3.node.opacity = 255;
            })
            .to(0.75, { height: height + 150, width: width + 150, opacity: 0 })
            .delay(0.25)
            .start()



        height = this._Circle4.node.height;
        width = this._Circle4.node.width;
        let action4 = cc.tween(this._Circle4.node)
            .call(() => {
                this._Circle4.node.height = this._Circle2.node.height;
                this._Circle4.node.width = this._Circle2.node.width;
                this._Circle4.node.opacity = 255;
            })
            .to(0.75, { height: height + 75, width: width + 75, opacity: 0 })
            .delay(0.25)
            .call(() => {
                this._Circle4.node.height = this._Circle2.node.height;
                this._Circle4.node.width = this._Circle2.node.width;
                this._Circle4.node.opacity = 255;
            })
            .to(0.75, { height: height + 75, width: width + 75, opacity: 0 })
            .delay(0.25)
            .call(() => {
                this._Circle4.node.height = this._Circle2.node.height;
                this._Circle4.node.width = this._Circle2.node.width;
                this._Circle4.node.opacity = 255;
            })
            .to(0.75, { height: height + 75, width: width + 75, opacity: 0 })
            .delay(0.25)
            .call(() => {
                this._Circle4.node.height = this._Circle2.node.height;
                this._Circle4.node.width = this._Circle2.node.width;
                this._Circle4.node.opacity = 255;
            })
            .to(0.75, { height: height + 75, width: width + 75, opacity: 0 })
            .delay(0.25)
            .call(() => {
                this._Circle4.node.height = this._Circle2.node.height;
                this._Circle4.node.width = this._Circle2.node.width;
                this._Circle4.node.opacity = 255;
            })
            .to(0.75, { height: height + 75, width: width + 75, opacity: 0 })
            .delay(0.25)
            .start()



        this._ActionList.push(action1)
        this._ActionList.push(action2)
        this._ActionList.push(action3)
        this._ActionList.push(action4)
    }

    protected onClose() {
        cocosz.unscheduleAllCallbacks()
        cc.game.targetOff(this);
    }

    protected onDestroy() {
        cocosz.unscheduleAllCallbacks()
        cc.game.targetOff(this);
    }

    // update (dt) {}
}