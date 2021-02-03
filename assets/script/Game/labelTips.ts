import { cocosz } from "../Framework/CocosZ";

const { ccclass, property } = cc._decorator;

@ccclass
export default class labelTips extends cc.Component {



    // LIFE-CYCLE CALLBACKS:

    // onLoad () {

    // }

    start() {
        let label = this.node.getComponent(cc.Label);
        let a = cc.tween().sequence(
            cc.tween().to(0.3, { scale: 1.1 }),
            cc.tween().to(0.3, { scale: 1 }),
            cc.tween().delay(2)
        )

        cc.tween(this.node)
            .repeatForever(a)
            .start()



        if (cocosz.dataMgr.CurLevelId == 1) {
            if (this.node.name == "labelTips5") {
                label.string = "";
            }

            else if (this.node.name == "labelTips4") {
                label.string = "";
            }
        }

        else if (cocosz.dataMgr.CurLevelId == 2) {

            if (this.node.name == "labelTips4") {
                label.string = "小心仙人掌发射的刺，用东西挡住它吧";
            }
        }
        else if (cocosz.dataMgr.CurLevelId == 3) {
            if (this.node.name == "labelTips4") {
                label.string = "";
            }
        }
        else if (cocosz.dataMgr.CurLevelId == 4) {
            if (this.node.name == "labelTips4") {
                label.string = "小仙人掌也很危险，别让它碰到你的气球";
            }
        }
        else if (cocosz.dataMgr.CurLevelId == 5) {
            if (this.node.name == "labelTips4") {
                label.node.width = 200;
                label.string = "连锁导弹只有一个共同的红色开关，在启动之前可以先用挡板把主角保护起来";
            }
            if (this.node.name == "labelTips5") {
                label.node.width = 230;
                label.string = "当任意物品碰到蝙蝠时，蝙蝠会惊醒，进入暴走状态";
            }
        }
        else if (cocosz.dataMgr.CurLevelId == 6) {
            if (this.node.name == "labelTips4") {
                label.node.width = 230;
                label.string = "小心敌人手上的刀，试着用其他东西扎破他们的气球，比如上方的仙人掌";
            }
        }
        else if (cocosz.dataMgr.CurLevelId == 7) {
            if (this.node.name == "labelTips4") {
                label.node.width = 230;
                label.string = "点击木块可以让它碎掉";
            }
        }
        else if (cocosz.dataMgr.CurLevelId == 8) {
            if (this.node.name == "labelTips4") {
                label.node.width = 230;
                label.string = "请小心一切带刺的东西，在右边寻找有没有可以用上的东西";
            }
        }
        else if (cocosz.dataMgr.CurLevelId == 10) {
            if (this.node.name == "labelTips4") {
                label.node.width = 260;
                label.string = "";
            }
        }
        else if (cocosz.dataMgr.CurLevelId == 11) {
            if (this.node.name == "labelTips4") {
                label.node.width = 230;
                label.string = "留意木箱上的数字，你会发现这游戏很简单";
            }
        }
        else if (cocosz.dataMgr.CurLevelId == 9) {
            if (this.node.name == "labelTips4") {
                label.node.width = 260;
                label.string = "这么大个的石头，挡个仙人掌应该没问题吧";
            }
        }
        else if (cocosz.dataMgr.CurLevelId == 14) {
            if (this.node.name == "labelTips4") {
                label.node.width = 230;
                label.string = "倒计时结束前你必须行动起来，不然就会------砰";
            }
        }
        else if (cocosz.dataMgr.CurLevelId == 17) {
            if (this.node.name == "labelTips4") {
                label.node.width = 260;
                label.string = "纸箱可以保护气球";
            }
        }
        else if (cocosz.dataMgr.CurLevelId == 19) {
            if (this.node.name == "labelTips4") {
                label.node.width = 260;
                label.string = "试试用东西把激光挡住";
            }
        }
        else if (cocosz.dataMgr.CurLevelId == 20) {
            if (this.node.name == "labelTips4") {
                label.node.width = 230;
                label.string = "将导弹移动到合适的位置击败这只危险的蝙蝠";
            }
        }
        else if (cocosz.dataMgr.CurLevelId == 45) {
            if (this.node.name == "labelTips4") {
                label.node.width = 260;
                label.string = "这是一个可以移动的风扇";
            }
        }
        else if (cocosz.dataMgr.CurLevelId == 117) {
            if (this.node.name == "labelTips4") {
                label.node.width = 200;
                if (this.node.y == -174) {
                    label.string = "3 3 5";
                }
                else if (this.node.y == -230) {

                    label.string = "8 8 5";
                }
                else if (this.node.y == -293) {
                    label.string = "1 5 1";

                }
            }
            // if (this.node.name == "labelTips5") {
            //     label.node.width = 200;
            //     label.string = "1 5 1";
            // }
            // if (this.node.name == "labelTips3") {
            //     label.node.width = 200;
            //     label.string = "8 8 5";
            // }
        }
    }

    // update (dt) {}
}
