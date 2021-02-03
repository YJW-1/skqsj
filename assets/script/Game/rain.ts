
const { ccclass, property } = cc._decorator;

@ccclass
export default class rain extends cc.Component {

    isDes: boolean = false;


    onBeginContact(contact, self, other) {
        if (this.isDes) return;
        this.isDes = true;
        cc.tween(this.node)
            .to(1, { scale: 0.75, opacity: 0 })
            .call(() => {
                this.node.destroy()
            })
            .start()
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    update(dt) {

        if (this.node.y <= -1000) {
            this.node.destroy();
        }
    }
}
