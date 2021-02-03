// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { cocosz } from "../Framework/CocosZ";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

 
    onFinish() {
        this.node.destroy();
    }

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {

        if (cc.sys.platform === cc.sys.WECHAT_GAME && cocosz.dataMgr.ShockOn) {
            window["wx"].vibrateShort();
            window["wx"].vibrateShort();
        }
    }

    // update (dt) {}
}
