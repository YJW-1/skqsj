"use strict";
cc._RF.push(module, 'eead0ic9U1L47q+Ct7L9ofh', 'gameBg');
// script/Game/gameBg.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var gameBg = /** @class */ (function (_super) {
    __extends(gameBg, _super);
    function gameBg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    gameBg.prototype.onLoad = function () {
    };
    gameBg.prototype.start = function () {
        var _this = this;
        this.node.zIndex -= 9999;
        cc.log("---------------------背景生成");
        var d = null;
        if (CocosZ_1.cocosz.sceneMgr.sceneName == "Game") {
            d = cc.tween().sequence(cc.tween().call(function () {
                var cNode1 = cc.instantiate(_this._Cloud1);
                var cNode2 = cc.instantiate(_this._Cloud2);
                _this._Cloud1.parent.addChild(cNode1);
                _this._Cloud1.parent.addChild(cNode2);
                cNode1.y = Math.random() * 360;
                cNode2.y = Math.random() * 360;
                if (cNode1.x < 0) {
                    cNode1.x -= Math.random() * 360;
                }
                else {
                    cNode1.x += Math.random() * 360;
                }
                if (cNode2.x < 0) {
                    cNode2.x -= Math.random() * 360;
                }
                else {
                    cNode2.x += Math.random() * 360;
                }
                var pos1 = cc.v2((2500 + Math.random() * 500) * cNode1.scaleX, 0);
                var pos2 = cc.v2((2500 + Math.random() * 500) * cNode2.scaleX, 0);
                if (Math.random() > 0.4) {
                    cNode1.x *= -1;
                    cNode1.scaleX *= -1;
                    pos1.x *= -1;
                }
                cc.tween(cNode1)
                    .by(50 + 5 * Math.random(), { position: pos1 })
                    .call(function () {
                    cNode1.destroy();
                })
                    .start();
                cc.tween(cNode2)
                    .by(50 + 5 * Math.random(), { position: pos2 })
                    .call(function () {
                    cNode2.destroy();
                })
                    .start();
            }), cc.tween().delay(50));
        }
        else {
            d = cc.tween().sequence(cc.tween().call(function () {
                var node = cc.instantiate(_this.node.getChildByName("sCloud" + Math.floor(Math.random() * 7)));
                node.x = Math.random() * 500 - 250;
                _this.node.addChild(node);
                cc.tween(node)
                    .by(20, { position: cc.v2(0, -3000) })
                    .call(function () {
                    node.destroy();
                })
                    .start();
            }), cc.tween().delay(7));
            cc.tween(this.node)
                .repeatForever(d)
                .start();
        }
        cc.log(d);
    };
    gameBg.prototype.onDestroy = function () {
        cc.log("---------------------背景销毁");
    };
    gameBg = __decorate([
        ccclass
    ], gameBg);
    return gameBg;
}(cc.Component));
exports.default = gameBg;

cc._RF.pop();