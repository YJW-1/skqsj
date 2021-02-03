
import { cocosz } from "../Framework/CocosZ";

const { ccclass, property } = cc._decorator;

@ccclass
export default class controlCenter extends cc.Component {

    add1: cc.Node = null
    add3: cc.Node = null
    add2: cc.Node = null
    sub1: cc.Node = null
    sub2: cc.Node = null
    sub3: cc.Node = null

    num1: cc.Label = null
    num2: cc.Label = null
    num3: cc.Label = null


    onUnLock() {
        if ((cocosz.dataMgr.CurLevelId == 117 && (this.num1.string == "3" && this.num2.string == "8" && this.num3.string == "1")) ||
            (cocosz.dataMgr.CurLevelId == 118 && (this.num1.string == "4" && this.num2.string == "1" && this.num3.string == "3")) ||
            (cocosz.dataMgr.CurLevelId == 119 && (this.num1.string == "5" && this.num2.string == "9" && this.num3.string == "4"))
        ) {
            this.node.targetOff(this);
            this.add1.off(cc.Node.EventType.TOUCH_START);
            this.add2.off(cc.Node.EventType.TOUCH_START);
            this.add3.off(cc.Node.EventType.TOUCH_START);
            this.sub1.off(cc.Node.EventType.TOUCH_START);
            this.sub2.off(cc.Node.EventType.TOUCH_START);
            this.sub3.off(cc.Node.EventType.TOUCH_START);
            this.node.getChildByName("isTure").active = true;

            if (cocosz.dataMgr.CurLevelId == 117) {
                for (let child of this.node.parent.children) {
                    if (child.name == "floor22") {
                        cc.tween(child)
                            .to(1, { position: cc.v2(327, 292) })
                            .start()
                    }
                }
            }
            else if (cocosz.dataMgr.CurLevelId == 118) {
                for (let child of this.node.parent.children) {
                    if (child.name == "floor22") {
                        cc.tween(child)
                            .to(1, { position: cc.v2(-263.645, -86.65) })
                            .start()
                    }
                }
            }
            else if (cocosz.dataMgr.CurLevelId == 119) {
                for (let child of this.node.parent.children) {
                    if (child.name == "floor22") {
                        if (child.angle == 180) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(-448.362, -56.324) })
                                .start()
                        }


                        else if (child.angle == 0) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(277.916, -56.324) })
                                .start()

                        }
                    }
                }
            }
        }
    }


    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.add1 = this.node.getChildByName("add1");
        this.add2 = this.node.getChildByName("add2");
        this.add3 = this.node.getChildByName("add3");

        this.sub1 = this.node.getChildByName("sub1");
        this.sub2 = this.node.getChildByName("sub2");
        this.sub3 = this.node.getChildByName("sub3");

        this.num1 = this.node.getChildByName("num1").getComponent(cc.Label);
        this.num2 = this.node.getChildByName("num2").getComponent(cc.Label);
        this.num3 = this.node.getChildByName("num3").getComponent(cc.Label);
    }

    start() {
        this.add1.on(cc.Node.EventType.TOUCH_START, () => {
            let num = +this.num1.string;
            num++;
            num %= 10;
            this.num1.string = num + "";
            this.onUnLock()
        }, this)
        this.add2.on(cc.Node.EventType.TOUCH_START, () => {
            let num = +this.num2.string;
            num++;
            num %= 10;
            this.num2.string = num + "";
            this.onUnLock()
        }, this)
        this.add3.on(cc.Node.EventType.TOUCH_START, () => {
            let num = +this.num3.string;
            num++;
            num %= 10;
            this.num3.string = num + "";
            this.onUnLock()
        }, this)




        this.sub1.on(cc.Node.EventType.TOUCH_START, () => {
            let num = +this.num1.string;
            if (num <= 0) {
                num = 9
            }
            else {
                num--;
            }
            num %= 10;
            this.num1.string = num + "";
            this.onUnLock()
        }, this)
        this.sub2.on(cc.Node.EventType.TOUCH_START, () => {
            let num = +this.num2.string;
            if (num <= 0) {
                num = 9
            }
            else {
                num--;
            }
            num %= 10;
            num %= 10;
            this.num2.string = num + "";
            this.onUnLock()
        }, this)
        this.sub3.on(cc.Node.EventType.TOUCH_START, () => {
            let num = +this.num3.string;
            if (num <= 0) {
                num = 9
            }
            else {
                num--;
            }
            num %= 10;
            num %= 10;
            this.num3.string = num + "";
            this.onUnLock()
        }, this)
    }

    // update (dt) {}
}
