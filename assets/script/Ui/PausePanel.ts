import UIPage from "./UIPage";
import { cocosz } from "../Framework/CocosZ";
import { PanelName, PageName } from "../Framework/Constant";
// import { BannerLocation } from "../common-plugin/Scripts/YZ_Constant";
// import { utils } from "../common-plugin/Scripts/Utils";
import Msg from "../Framework/Msg";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PausePanel extends UIPage {
    /**继续游戏 */
    private BtnContinue: cc.Node = null;
    /**重新开始 */
    private BtnAgain: cc.Node = null;
    /**返回首页 */
    private BtnBackHome: cc.Node = null;

    private ScaleNode: cc.Node = null;
    private node: cc.Node = null;
    constructor() {
        super();
        this._init();
    }
    private _init() {

        let Game: cc.Prefab = cocosz.resMgr.getRes(PanelName.PausePanel, cc.Prefab);
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
        this.node = cc.find("Canvas/ui/PausePanel");
        this.BtnAgain = cc.find("Canvas/ui/PausePanel/ScaleNode/BtnAgain");
        this.BtnContinue = cc.find("Canvas/ui/PausePanel/ScaleNode/BtnContinue");
        this.BtnBackHome = cc.find("Canvas/ui/PausePanel/ScaleNode/BtnBackHome");
        this.ScaleNode = cc.find("Canvas/ui/PausePanel/ScaleNode");
        this._Start();
    }
    private _Start() {
        this.BtnAgain.on(cc.Node.EventType.TOUCH_START, this.Again, this);
        this.BtnContinue.on(cc.Node.EventType.TOUCH_START, this.Continue, this);
        this.BtnBackHome.on(cc.Node.EventType.TOUCH_START, this.BackHome, this);
    }

    protected onOpen() {
        // utils.adManager.ShowInterstitial(BannerLocation.Pause);
        // cocosz.gameMgr.tweeBtn(this.BtnContinue, 1.05, 1);
        // this.node.scale = 0;
        // cocosz.gameMgr.tweeNode(this.node);
        // this.ScaleNode.scale = 0;
        this._page.zIndex += 9999;
        if (cc.sys.platform === cc.sys.VIVO_GAME) {
            lieyou_SdkManager.showSpotByPause();
            let obj = {};
            // obj["node"] = this.ScaleNode
            // obj["bgPath"] = this.ScaleNode
            // obj["scale"] = 0.8
            // lieyou_SdkManager.showNativeAd_big({
            //     node: this.ScaleNode,
            //     bgPath: "test.png",
            //     scale: 1,
            //     titleColor: cc.color(46, 46, 46),
            //     descColor: cc.color(46, 46, 46),
            //     insetTop: 0,
            //     insetBottom: 0,
            //     insetLeft: 0,
            //     insetRight: 0
            // });
        }
        else if (cc.sys.platform === cc.sys.OPPO_GAME) {
            this.ScaleNode.x = -261;
            let sp = cocosz.resMgr.getRes("ss", cc.SpriteFrame)
            lieyou_SdkManager.showNativeAd_big({
                node: this.ScaleNode.getChildByName("nativePos"), "titleColor": cc.color(255, 255, 255, 255,),
                "descColor": cc.color(255, 255, 255, 255,), bgPath: 'texture/ss', texture: sp, scale: 0.9, insetTop: 10, insetBottom: 10, insetLeft: 10, insetRight: 10
            });
        }
        // this._page.setPosition(cc.find("Canvas/ui/uiCamera").getPosition())
        // this._page.y -= 700;
        cc.tween(this.ScaleNode)
            .by(0.2, { position: cc.v2(0, 700) })
            .call(() => {
                cc.director.pause()
            })
            .start()
        this.node.zIndex += 3;

        // if ((cc.sys.platform === cc.sys.VIVO_GAME)) {
        //     lieyou_SdkManager.showBannerByBottom();
        // }


    }

    private Again() {
        // cocosz.audioMgr.playbtnEffect();
        // cocosz.sceneMgr.loadScene("LoadGame", () => {
        //     cocosz.uiMgr.openPage(PageName.UiLoadGame);
        // });

        cc.director.resume()
        cocosz.audioMgr.playbtnEffect();
        cocosz.dataMgr.CurLevelId = cocosz.gameMgr.curLevelID
        cocosz.sceneMgr.loadScene(cocosz.sceneMgr.sceneName, () => {
            cocosz.uiMgr.openPage(PageName.UiGame);
            cocosz.gameMgr.initGame();
        });
    }

    private Continue() {
        cc.director.resume()
        cocosz.audioMgr.playbtnEffect();

        cc.tween(this.ScaleNode)
            .by(0.2, { position: cc.v2(0, -600) })
            .call(() => {

                this.node.destroy();
            })
            .start()
        // cocosz.audioMgr.stopAll();
        // utils.adManager.HideBanner(BannerLocation.Game);
        // cocosz.gameMgr.audioBg = false;
        // utils.adManager.ShowVideo((ret: boolean, msg: string) => {
        //     cocosz.gameMgr.audioBg = true;
        //     utils.adManager.ShowBanner(BannerLocation.Game);
        //     cocosz.audioMgr.HomeBtnEffect(() => { }, 0);
        //     cocosz.audioMgr.resumAllMusic();
        //     if (ret) {
        //         // cocosz.dataMgr.LevelSkipLock(cocosz.dataMgr.CurLevelId);
        //         // cocosz.dataMgr.CurLevelId++;
        //         // cocosz.sceneMgr.loadScene("Game", () => {
        //         //     cocosz.uiMgr.openPage(PageName.UiGame);
        //         //     cocosz.gameMgr.initGame();
        //         //     Msg.Show("成功跳过!!");
        //         //     cc.game.emit(Constant.E_GAME_LOGIC, { type: Constant.E_LEVEL_FAILED });
        //         // });
        //         Msg.Show("成功跳过!!");
        //         cocosz.dataMgr.setStarNum(cocosz.dataMgr.CurLevelId, 3);
        //         cocosz.dataMgr.IsEnd = true;
        //         cocosz.uiMgr.openPanel(PanelName.LevelPanel);
        //         this.close();
        //     } else {
        //         if (!msg) {
        //             msg = "暂无视频广告!";
        //         }
        //         Msg.Show(msg);
        //     }
        // });

    }

    private BackHome() {

        cc.director.resume()
        cocosz.audioMgr.playbtnEffect();
        cocosz.dataMgr.CurLevelId = cocosz.gameMgr.curLevelID
        cocosz.sceneMgr.loadScene("Home", () => {
            cocosz.uiMgr.openPage(PageName.UiHome);
        });
    }

    protected onClose() {
        cc.game.targetOff(this);
    }

    protected onDestroy() {
        cc.game.targetOff(this);
    }
}