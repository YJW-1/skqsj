import UIPage from "./UIPage";
import { cocosz } from "../Framework/CocosZ";
import { PanelName } from "../Framework/Constant";
import Msg from "../Framework/Msg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UiSign extends UIPage {

    scaleNode: cc.Node = null;
    btnGet: cc.Node = null
    btnBack: cc.Node = null;



    lib: cc.Node = null;
    lib1: cc.Node = null;
    lib2: cc.Node = null;
    prop: cc.Node = null;
    text: cc.Node = null;
    box: cc.Node = null;

    halo: cc.Node = null;
    halo2: cc.Node = null;
    halo3: cc.Node = null;
    num: number = null;



    constructor() {
        super();
        this._init();
    }

    private _init() {
        let Game: cc.Prefab = cocosz.resMgr.getRes(PanelName.UiSign, cc.Prefab);
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
        this.scaleNode = this._page.getChildByName("scaleNode");
        this.btnGet = this.scaleNode.getChildByName("btn_get");
        this.prop = this.scaleNode.getChildByName("prop");
        this.btnBack = this.scaleNode.getChildByName("btn_back");
        this.halo = this.scaleNode.getChildByName("gift_icon_halo");
        this.halo2 = this.scaleNode.getChildByName("gift_icon_halo2");
        this.halo3 = this.scaleNode.getChildByName("gift_icon_halo2").getChildByName("gift_icon_halo3");

        this.lib = this.scaleNode.getChildByName("lid");
        this.lib1 = this.scaleNode.getChildByName("lid").getChildByName("gift_icon_lid_1");
        this.lib2 = this.scaleNode.getChildByName("lid").getChildByName("gift_icon_lid_2");
        this.box = this.scaleNode.getChildByName("lid").getChildByName("gift_icon_box");




        this._Start();
    }



    private _checkCanBonus() {
        let curDate = new Date();

        let a = curDate.toDateString() != cocosz.dataMgr.LastBonusTime;

        // cocosz.dataMgr.LastBonusTime = curDate.toDateString();
        return a
    }


    private _Start() {
        this.btnBack.on(cc.Node.EventType.TOUCH_END, () => {
            this.onBack();
        });
        this.btnGet.on(cc.Node.EventType.TOUCH_END, () => {
            this.onGet();
        });



        if ((cc.sys.platform === cc.sys.VIVO_GAME)) {
            lieyou_SdkManager.showSpotByPause();
        }
        else if (cc.sys.platform === cc.sys.OPPO_GAME) {
            this.scaleNode.x = -341;
            let sp = cocosz.resMgr.getRes("ss", cc.SpriteFrame)
            lieyou_SdkManager.showNativeAd_big({
                node: this.scaleNode.getChildByName("nativePos"), "titleColor": cc.color(255, 255, 255, 255,),
                "descColor": cc.color(255, 255, 255, 255,), bgPath: 'texture/ss', texture: sp, scale: 0.9, insetTop: 10, insetBottom: 10, insetLeft: 10, insetRight: 10
            });
        }
    }

    protected onOpen() {
        this.scaleNode.scale = 0;
        this.btnGet.scale = 0;

        // if ((cc.sys.platform === cc.sys.VIVO_GAME || cc.sys.platform === cc.sys.OPPO_GAME)) {
        //     lieyou_SdkManager.hideBanner();
        // }
        cc.tween(this.scaleNode)
            .to(0.2, { scale: 1.4 })
            .to(0.1, { scale: 1 })
            .call(() => {

                cc.tween(this.lib)
                    .by(0.15, { angle: 10 })
                    .by(0.15, { angle: -10 })

                    .by(0.1, { angle: 9 })
                    .by(0.1, { angle: -9 })

                    .by(0.07, { angle: 8 })
                    .by(0.07, { angle: -8 })

                    .by(0.07, { angle: 7 })
                    .by(0.07, { angle: -7 })


                    .by(0.07, { angle: 6 })
                    .by(0.07, { angle: -6 })
                    .by(0.07, { angle: 5 })
                    .start()
            })
            .delay(1)

            .call(() => {
                cc.tween(this.lib1)
                    .by(1, { position: cc.v2(0, 150) })
                    .call(() => {
                        this.lib1.opacity = 0;
                        this.prop.active = true;
                        this.prop.scale = 0;
                        // this.text.active = true;

                        cc.tween(this.prop)
                            .to(0.2, { scale: 1 })
                            .start()

                    })
                    .start()

                this.lib2.y += 150;

                cc.tween(this.halo2)
                    .to(1, { opacity: 255, scale: 2.5 })
                    .call(() => {
                        this.lib2.active = true;
                        this.halo.active = true;
                    })
                    .to(1, { opacity: 0, scale: 1 })
                    .start()



                cc.tween(this.btnGet)
                    .to(0.7, { scale: 1 })
                    .start()
            })
            .start();

        cc.tween(this.halo)
            .repeatForever(
                cc.tween().by(3, { angle: 360 })
            )
            .start()
        cc.tween(this.halo3)
            .repeatForever(
                cc.tween().by(3, { angle: 360 })
            )
            .start()


        // lieyou_SdkManager.showBannerByBottom();

        // if (cc.sys.platform === cc.sys.VIVO_GAME) {
        //     lieyou_SdkManager.showSpotByFinish();
        // }

    }


    protected onGet() {
        if (!this._checkCanBonus()) {
            Msg.Show("今日奖励领取完毕，请明日再来");
            return
        }
        let curDate = new Date();
        cocosz.dataMgr.LastBonusTime = curDate.toDateString();
        cc.log(cocosz.dataMgr.SkinVedioNum, "cocosz.dataMgr.SkinVedioNum");
        cocosz.dataMgr.CoinCount += 500;
        Msg.Show("恭喜获得500金币")
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
