import UIPage from "./UIPage";
import { cocosz } from "../Framework/CocosZ";
import Constant, { PanelName, Levelitem, PageName, } from "../Framework/Constant";
import LevelItem from "./LevelItem";
import Msg from "../Framework/Msg";


const { ccclass, property } = cc._decorator;

@ccclass
export default class LevelPanel extends UIPage {
    /**返回按钮 */
    private Back: cc.Node = null;
    /**关卡Item的父节点 */
    private content: cc.Node = null;

    private ScaleNode: cc.Node = null;
    private BtnVideo: cc.Node = null;
    private node: cc.Node = null;
    // private role: cc.Node = null;
    // private bee: cc.Node = null;
    // private bee2: cc.Node = null;
    // private bee3: cc.Node = null;

    // private dragon: dragonBones.ArmatureDisplay = null;
    private PageView: cc.PageView = null;

    constructor() {
        super();
        this._init();
    }
    private _init() {
        let Game: cc.Prefab = cocosz.resMgr.getRes(PanelName.LevelPanel, cc.Prefab);
        if (Game) {
            let node: cc.Node = cc.instantiate(Game);
            if (node) {
                this._page = node;   
                 cc.find("Canvas/ui").addChild(node);
                node.active = false;
                node.position = cc.Vec2.ZERO;
                this._onLoad();
            }
        }
    }
    private _onLoad() {
        this.BtnVideo = cc.find("Canvas/ui/LevelPanel/ScaleNode/BtnVideo");
        this.Back = cc.find("Canvas/ui/LevelPanel/ScaleNode/Back");
        this.content = cc.find("Canvas/ui/LevelPanel/ScaleNode/PageView/view/content");
        this.ScaleNode = cc.find("Canvas/ui/LevelPanel/ScaleNode");

        // this.role = cc.find("Canvas/ui/LevelPanel/ScaleNode/role");
        // this.bee = cc.find("Canvas/ui/LevelPanel/ScaleNode/propHoneybee");
        // this.bee2 = cc.find("Canvas/ui/LevelPanel/ScaleNode/propHoneybee2");
        // this.bee3 = cc.find("Canvas/ui/LevelPanel/ScaleNode/propHoneybee3");
        // this.dragon = this.role.getComponent(dragonBones.ArmatureDisplay);
        this.PageView = this.ScaleNode.getChildByName("PageView").getComponent(cc.PageView);
        cc.director.getScheduler().enableForTarget(this);

        this._Start();
    }
    private _Start() {
        // cc.log(this.Back)
        this.Back.on(cc.Node.EventType.TOUCH_END, this.OnBack, this);
        this.BtnVideo.on(cc.Node.EventType.TOUCH_END, this.onGetCoin, this);

        this._ClonItem();
    }
    private _UpdateIndicator() {
    }

    private OnBack() {
        cocosz.audioMgr.playbtnEffect();
        cocosz.unscheduleAllCallbacks();

        cocosz.sceneMgr.loadScene("Home", () => {
            cocosz.uiMgr.openPage(PageName.UiHome);
        });


        // lieyou_SdkManager.showBannerByBottom();
        // this.close();
    }

    onGetCoin() {
        cocosz.audioMgr.playbtnEffect();
        Msg.Show("视频播放失败!");
        return;
    }

    protected onOpen() {
        let num = Math.floor(cocosz.dataMgr.MaxUnlockLevelCount / 20) > 6 ? 6 : Math.floor(cocosz.dataMgr.MaxUnlockLevelCount / 20);
        cc.log(cocosz.dataMgr.MaxLevelId, cocosz.dataMgr.MaxUnlockLevelCount, num);
        this.PageView.scrollToPage(num, 1);
        cocosz.unscheduleAllCallbacks();
        // num = Math.ceil(Math.random() + 1)
        // num = 1
        // if (Math.random() > 0.7) {
        num = 2;
        // }
        if (cc.sys.platform === cc.sys.WECHAT_GAME) {
            lieyou_SdkManager.hideBanner()
        }
        else if ((cc.sys.platform === cc.sys.VIVO_GAME || cc.sys.platform === cc.sys.OPPO_GAME)) {
            lieyou_SdkManager.hideBanner();
        }


        // let a = cc.tween().sequence(
        //     cc.tween().parallel(
        //         cc.tween().call(() => {
        //             this.dragon.playAnimation("deng", num)
        //         }),
        //         cc.tween().by(0.5 * num, { position: cc.v2(0, 50) })
        //     ),
        //     cc.tween().call(() => {
        //         this.dragon.playAnimation("idle", 0)
        //     }),
        //     cc.tween().by(4, { position: cc.v2(400, -50) })
        // )
        // let b = cc.tween().sequence(
        //     cc.tween().parallel(
        //         cc.tween().call(() => {
        //             this.dragon.playAnimation("deng", num)
        //         }),
        //         cc.tween().by(0.5 * num, { position: cc.v2(0, 50) })
        //     ),
        //     cc.tween().call(() => {
        //         this.dragon.playAnimation("idle", 0)
        //     }),
        //     cc.tween().by(4, { position: cc.v2(-400, -50) })
        // )

        // let c = cc.tween().sequence(

        //     cc.tween().call(() => {
        //         this.role.scaleX = 1;
        //     }),
        //     cc.tween().repeat(5, a),
        //     cc.tween().call(() => {
        //         this.role.setPosition(cc.v2(911, 150));
        //         this.role.scaleX = -1;
        //     }),

        //     cc.tween().repeat(5, b)
        // )

        // cc.tween(this.role)
        //     .repeatForever(c)
        //     .start()




        // let d = cc.tween().sequence(

        //     cc.tween().repeat(10, cc.tween().by(2.5, { position: cc.v2(200, 150 * Math.random() - 75), angle: 100 * Math.random() - 50 })),

        //     cc.tween().call(() => {
        //         this.bee.setPosition(cc.v2(1110, 250));
        //         this.bee.scaleX *= -1;
        //     }),

        //     cc.tween().repeat(10, cc.tween().by(2.7, { position: cc.v2(-200, 150 * Math.random() - 75), angle: 100 * Math.random() - 50 })),
        //     cc.tween().call(() => {
        //         this.bee.setPosition(cc.v2(-946, 250));
        //         this.bee.scaleX *= -1;
        //         this.bee.y += Math.random() * 50 - 25;
        //         this.bee.x += Math.random() * 50 - 150;
        //     }),
        // )



        // let e = cc.tween().sequence(

        //     cc.tween().repeat(10, cc.tween().by(2.5, { position: cc.v2(200, 150 * Math.random() - 75), angle: 100 * Math.random() - 50 })),

        //     cc.tween().call(() => {
        //         this.bee2.setPosition(cc.v2(1110, 250));
        //         this.bee2.scaleX *= -1;
        //     }),

        //     cc.tween().repeat(10, cc.tween().by(2.7, { position: cc.v2(-200, 150 * Math.random() - 75), angle: 100 * Math.random() - 50 })),
        //     cc.tween().call(() => {
        //         this.bee2.setPosition(cc.v2(-946, 250));
        //         this.bee2.scaleX *= -1;
        //         this.bee2.y += Math.random() * 50 - 25;
        //         this.bee2.x += Math.random() * 50 - 150;
        //     }),
        // )

        // let f = cc.tween().sequence(

        //     cc.tween().repeat(10, cc.tween().by(2.5, { position: cc.v2(200, 150 * Math.random() - 75), angle: 100 * Math.random() - 50 })),

        //     cc.tween().call(() => {
        //         this.bee3.setPosition(cc.v2(1110, 250));
        //         this.bee3.scaleX *= -1;
        //     }),

        //     cc.tween().repeat(10, cc.tween().by(2.7, { position: cc.v2(-200, 150 * Math.random() - 75), angle: 100 * Math.random() - 50 })),
        //     cc.tween().call(() => {
        //         this.bee3.setPosition(cc.v2(-946, 250));
        //         this.bee3.scaleX *= -1;
        //         this.bee3.y += Math.random() * 50 - 25;
        //         this.bee3.x += Math.random() * 50 - 150;
        //     }),
        // )
        // cc.tween(this.bee)


        //     .repeatForever(d)
        //     .start()

        // // let node = cc.instantiate(this.bee);
        // // this.bee.parent.addChild(node);
        // // node.setPosition(this.bee.getPosition())
        // this.bee2.y += Math.random() * 50 - 25;
        // this.bee2.x += Math.random() * 50 - 150;

        // cc.tween(this.bee2)


        //     .repeatForever(e)
        //     // .by(20, { position: cc.v2(1500, 0) })

        //     .start()




        // // let node2 = cc.instantiate(this.bee);
        // // this.bee.parent.addChild(node2);
        // // node2.setPosition(this.bee.getPosition())
        // this.bee3.y += Math.random() * 50 - 25;
        // this.bee3.x += Math.random() * 50 - 150;

        // cc.tween(this.bee3)
        //     .repeat(10, cc.tween().by(2.7, { position: cc.v2(200, 150 * Math.random() - 75), angle: 100 * Math.random() - 50 }))

        //     .repeatForever(f)
        //     .start()
    }

    private _ClonItem() {
        let a: cc.Prefab = cocosz.resMgr.getRes("LevelItem", cc.Prefab);
        let num = 0
        for (let child of this.content.children) {
            for (let j = 0 + 20 * num; j < 20 + 20 * num; j++) {
                let node: cc.Node = cc.instantiate(a);
                node.getComponent(LevelItem).ID = j;
                child.addChild(node);
            }
            num++;
        }
    }
    protected onClose() {
        cc.director.getScheduler().unscheduleAllForTarget(this);
        cc.game.targetOff(this);
    }

    protected onDestroy() {
        cc.director.getScheduler().unscheduleAllForTarget(this);
        cc.game.targetOff(this);
    }
}
