"use strict";
cc._RF.push(module, '7270foc8ylLw6nOo+FJatcg', 'Msg');
// script/Framework/Msg.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Msg = /** @class */ (function () {
    function Msg() {
    }
    Msg_1 = Msg;
    Msg.Show = function (msg) {
        if (msg === void 0) { msg = null; }
        // if (!this.isShow) {
        cc.loader.loadRes(this.tipsPanelPrefab, function (err, res) {
            if (!err) {
                var node_1 = cc.instantiate(res);
                if (node_1) {
                    Msg_1.isShow = true;
                    Msg_1.isTouch = false;
                    cc.director.getScene().addChild(node_1, 10000);
                    // node.position = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2-50);
                    node_1.x = cc.winSize.width / 2;
                    node_1.y = cc.winSize.height - 150;
                    var label = cc.find("TipLabel", node_1).getComponent(cc.Label);
                    if (msg) {
                        label.string = msg;
                    }
                    // node.scale = 0;
                    // cocosz.gameMgr.tweeNode(node);
                    // label.scheduleOnce(() => {
                    //     node.destroy();
                    //     Msg.isShow = false;
                    // }, 1.5);
                    node_1.opacity = 0;
                    // node.y -= 50;
                    cc.tween(node_1)
                        .by(0.5, { opacity: 255, position: cc.v2(0, 50) })
                        .delay(1.5)
                        .by(0.5, { opacity: 0, position: cc.v2(0, 50) })
                        .call(function () {
                        node_1.destroy();
                        Msg_1.isShow = false;
                    })
                        .start();
                    // node.active = true;
                    // let anim = node.getComponent(cc.Animation);
                    // cc.log("-----------", anim)
                    // anim.play();
                }
            }
            else {
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
    };
    var Msg_1;
    Msg.tipsPanelPrefab = "ui/Tip";
    Msg.isShow = false;
    Msg.isTouch = false;
    Msg.tipsList = [];
    Msg = Msg_1 = __decorate([
        ccclass
    ], Msg);
    return Msg;
}());
exports.default = Msg;

cc._RF.pop();