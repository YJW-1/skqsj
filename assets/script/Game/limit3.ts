
const { ccclass, property } = cc._decorator;

@ccclass
export default class limit extends cc.Component {

    num: number = 0;
    label: cc.Label = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.label = this.node.getChildByName("num").getComponent(cc.Label);
    }

    start() {
        if (this.node.name == "limit3") {
            this.num = 20;
        }
        else if (this.node.name == "limit4") {
            this.num = 100;
        }


    }

    update(dt) {

        if (this.num > 0) {
            // cc.log(this.label);
            this.label.string = Math.ceil(this.num).toString();
            this.num -= dt;
            if (this.num <= 0) {
                this.label.string = "0";
                let floor = this.node.parent.getChildByName("floor5");
                if (floor) {
                    cc.tween(floor)
                        .by(0.5, { position: cc.v2(-130, 0) })
                        .start()
                    return;
                }
                floor = this.node.parent.getChildByName("floor22");
                if (floor) {
                    cc.tween(floor)
                        .by(0.5, { position: cc.v2(-130, 0) })
                        .start()
                    return;
                }
            }
        }

    }

}
