"use strict";
cc._RF.push(module, 'fcb70iqEH1AW6a52obWq5EC', 'rocketEffect');
// script/Game/rocketEffect.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewClass.prototype.onFinish = function () {
        this.node.destroy();
    };
    NewClass.prototype.onBeginContact = function (contact, self, other) {
        // cc.log(other.tag)
        if (CocosZ_1.cocosz.sceneMgr.sceneName == "rewardLevel2") {
            if (other.tag == Constant_1.tag.honeybee) {
                var parent = cc.find("Canvas/rewardLevel/Coin");
                if (other.node.scale == 3.5) {
                    var node_1 = cc.instantiate(cc.find("Canvas/rewardBigBee"));
                    cc.find("Canvas").addChild(node_1);
                    CocosZ_1.cocosz.dataMgr.CoinCount += 300;
                    parent.getChildByName("num").getComponent(cc.Label).string = CocosZ_1.cocosz.dataMgr.CoinCount.toString();
                    node_1.scale = 0;
                    cc.tween(node_1)
                        .to(0.3, { scale: 1 })
                        .delay(0.5)
                        .to(0.2, { scale: 0 })
                        .call(function () {
                        node_1.destroy();
                    })
                        .start();
                    cc.tween(node_1.getChildByName("game_halo_bigbee"))
                        .repeatForever(cc.tween().by(5, { angle: 360 }))
                        .start();
                    other.node.destroy();
                    return;
                }
                var node_2 = cc.instantiate(parent.getChildByName("gold"));
                var pos = other.node.convertToWorldSpaceAR(cc.v2(0, 0));
                var pp = parent.convertToNodeSpaceAR(pos);
                parent.addChild(node_2);
                node_2.setPosition(pp);
                node_2.scale = 0.5;
                CocosZ_1.cocosz.dataMgr.CoinCount += 10;
                parent.getChildByName("num").getComponent(cc.Label).string = CocosZ_1.cocosz.dataMgr.CoinCount.toString();
                var pos2 = cc.v2(-pp.x - 19.766, -pp.y + 3.866);
                cc.tween(node_2)
                    .parallel(cc.tween().by(1, { x: pos2.x }, { easing: 'sineOut' }), cc.tween().sequence(cc.tween().by(0.3, { y: -50 }, { easing: 'sineOut' }), cc.tween().by(0.7, { y: pos2.y + 50 }, { easing: 'sineOut' })))
                    .delay(1)
                    .call(function () {
                    node_2.destroy();
                })
                    .start();
                other.node.destroy();
            }
            contact.disabled = true;
        }
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        if (cc.sys.platform === cc.sys.WECHAT_GAME && CocosZ_1.cocosz.dataMgr.ShockOn) {
            window["wx"].vibrateShort();
            window["wx"].vibrateShort();
        }
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();