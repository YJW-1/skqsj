import UIPage from "./UIPage";
import { cocosz } from "../Framework/CocosZ";
import { PanelName } from "../Framework/Constant";
import Msg from "../Framework/Msg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UiLottery extends UIPage {

    scaleNode: cc.Node = null;

    btnMusic: cc.Node = null;
    btnEffect: cc.Node = null;
    btnShork: cc.Node = null;
    btnBack: cc.Node = null;

    num: number = null;



    constructor() {
        super();
        this._init();
    }

    private _init() {
        let Game: cc.Prefab = cocosz.resMgr.getRes(PanelName.UiLottery, cc.Prefab);
        if (Game) {
            let node: cc.Node = cc.instantiate(Game);
            if (node) {
                this._page = node;
                cc.find("Canvas/ui").addChild(node);
                node.active = true;
                node.position = cc.Vec3.ZERO;
                this._onLoad();
            }
        }
    }
    private _onLoad() {
        // this.scaleNode = this._page.getChildByName("scaleNode");
        // this.btnMusic = this.scaleNode.getChildByName("btn_music");
        // this.btnEffect = this.scaleNode.getChildByName("btn_effect");
        // this.btnShork = this.scaleNode.getChildByName("btn_shock");
        // this.btnBack = this.scaleNode.getChildByName("btn_back");

        // this._Start();
    }


    private _Start() {
        this.btnMusic.getChildByName("btnBg").on(cc.Node.EventType.TOUCH_END, () => {
            cocosz.dataMgr.AudioOn = !cocosz.dataMgr.AudioOn;
            if (cocosz.dataMgr.AudioOn) {
                cocosz.audioMgr.playGameMusic();
            }
            else {
                cocosz.audioMgr.stopAll();
            }
            this.initBtnState();
        });
        this.btnEffect.getChildByName("btnBg").on(cc.Node.EventType.TOUCH_END, () => {
            cocosz.dataMgr.AudioEffectOn = !cocosz.dataMgr.AudioEffectOn
            this.initBtnState();
        });
        this.btnShork.getChildByName("btnBg").on(cc.Node.EventType.TOUCH_END, () => {
            cocosz.dataMgr.ShockOn = !cocosz.dataMgr.ShockOn
            this.initBtnState();
        });
        this.btnBack.on(cc.Node.EventType.TOUCH_END, () => {
            this.onBack();
        });
        this.scaleNode.getChildByName("box_bg").on(cc.Node.EventType.TOUCH_END, () => {
            this.num++;
            if (this.num > 10) {
                cocosz.gameMgr.isLevelOpen = true;
            }
        });
    }

    protected onOpen() {
        // this.initBtnState();
        // this.scaleNode.scale = 0;
        // cc.tween(this.scaleNode)
        //     .to(0.2, { scale: 1.4 })
        //     .to(0.1, { scale: 1.2 })
        //     .call(() => {
        //     })
        //     .start();

        // lieyou_SdkManager.showBannerByBottom();

        // if (cc.sys.platform === cc.sys.VIVO_GAME) {
        //     lieyou_SdkManager.showSpotByFinish();
        // }

    }


    protected initBtnState() {
        // if (cocosz.dataMgr.AudioOn) {
        let x = cocosz.dataMgr.AudioOn == true ? 204 : 100;
        let pos = cc.v2(x, 0)
        let node = this.btnMusic.getChildByName("set_btn");
        if (node.x != x) {
            cc.tween(node)
                .to(0.2, { position: pos })
                .start()
        }


        let x2 = cocosz.dataMgr.AudioEffectOn == true ? 204 : 100;
        let pos2 = cc.v2(x2, 0)
        let node2 = this.btnEffect.getChildByName("set_btn");
        if (node2.x != x2) {
            cc.tween(node2)
                .to(0.2, { position: pos2 })
                .start()
        }



        let x3 = cocosz.dataMgr.ShockOn == true ? 204 : 100;
        let pos3 = cc.v2(x3, 0)
        let node3 = this.btnShork.getChildByName("set_btn");
        if (node3.x != x3) {
            cc.tween(node3)
                .to(0.2, { position: pos3 })
                .start()
        }
        // }
        // this.btnMusic.getChildByName("btn_on").active = cocosz.dataMgr.AudioOn;
        // this.btnMusic.getChildByName("btn_off").active = !cocosz.dataMgr.AudioOn;

        // this.btnEffect.getChildByName("btn_on").active = cocosz.dataMgr.AudioEffectOn;
        // this.btnEffect.getChildByName("btn_off").active = !cocosz.dataMgr.AudioEffectOn;

        // this.btnShork.getChildByName("btn_on").active = cocosz.dataMgr.ShockOn;
        // this.btnShork.getChildByName("btn_off").active = !cocosz.dataMgr.ShockOn;
    }

    protected onBack() {
        cc.tween(this.scaleNode)
            .to(0.2, { scale: 0 })
            .call(() => {
                this._page.destroy();
            })
            .start();
    }

    protected onClose() {
        cc.game.targetOff(this);
    }

    protected onDestroy() {
        cc.game.targetOff(this);
    }


    private _getRanDom() {
        let num = Math.random();
        if (num > 0.8) {
            return 0;
        }
        else if (num > 0.65) {
            return 1;
        }
        else if (num > 0.5) {
            return 2;
        }
        else if (num > 0.3) {
            return 3;
        }
        else if (num > 0.2) {
            return 4;
        }
        else if (num > 0.1) {
            return 5;
        }
        else if (num > 0.02) {
            return 6;
        }
        else if (num > 0) {
            return 7;
        }

    }
}
