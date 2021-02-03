import { cocosz } from "./CocosZ";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Msg {

    private static tipsPanelPrefab: string = "ui/Tip";

    private static isShow: boolean = false;

    private static isTouch: boolean = false;


    private static tipsList: any = [];


    public static Show(msg: string = null) {
        // if (!this.isShow) {
        cc.loader.loadRes(this.tipsPanelPrefab, (err, res) => {
            if (!err) {
                let node: cc.Node = cc.instantiate(res);
                if (node) {
                    Msg.isShow = true;

                    Msg.isTouch = false;
                    cc.director.getScene().addChild(node, 10000);
                    // node.position = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2-50);
                    node.x = cc.winSize.width / 2
                    node.y = cc.winSize.height - 150
                    let label: cc.Label = cc.find("TipLabel", node).getComponent(cc.Label);
                    if (msg) {
                        label.string = msg;
                    }




                    // node.scale = 0;
                    // cocosz.gameMgr.tweeNode(node);
                    // label.scheduleOnce(() => {
                    //     node.destroy();
                    //     Msg.isShow = false;
                    // }, 1.5);
                    node.opacity = 0;
                    // node.y -= 50;
                    cc.tween(node)
                        .by(0.5, { opacity: 255, position: cc.v2(0, 50) })
                        .delay(1.5)
                        .by(0.5, { opacity: 0, position: cc.v2(0, 50) })
                        .call(() => {
                            node.destroy();
                            Msg.isShow = false;
                        })
                        .start()

                    // node.active = true;
                    // let anim = node.getComponent(cc.Animation);
                    // cc.log("-----------", anim)
                    // anim.play();
                }
            } else {
                cc.log("提示面板显示失败!", err);
            }
        });
        // } else {
        //     if (!Msg.isTouch) {
        //         Msg.isTouch = true;
        //         cocosz.scheduleOnce(() => {
        //             Msg.isShow = false;
        //         }, 1.5);
        //     }
        // }
    }
}