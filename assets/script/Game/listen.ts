import Constant from "../Framework/Constant";


const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    onCollisionEnter(other, self) {
        cc.game.emit(Constant.E_ROLE_COLLISIONENTER, other, self);
    }
    // onBeginContact(contact, self, other) {
    //     cc.game.emit(Constant.E_ROLE_CONTACTENTER, contact, self, other);
    // }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    // update (dt) {}
}
