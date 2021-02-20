"use strict";
cc._RF.push(module, '28d71BBHYpNt6MuJGsCrcEO', 'balloon2');
// script/Game/balloon2.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._rigidBody = null;
        _this.coinSp = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.onBeginContact = function (contact, self, other) {
        if (this.node.parent.parent.parent.name == "coinMgr") {
            if (other.tag == Constant_1.tag.thorn) {
                contact.disabled = true;
                this.node.parent.parent.destroy();
                CocosZ_1.cocosz.audioMgr.playMetalStoneEffect2();
                // cocosz.gameMgr.coinNum++;
                var node_1 = cc.instantiate(this.coinSp);
                var parent = this.node.parent.parent.parent.parent.getChildByName("rewardLevel").getChildByName("Coin");
                // let c = parent.getChildByName("gold")
                // cc.log(parent);
                var sss = this.coinSp.parent.getPosition();
                // let pos = parent.convertToWorldSpaceAR(cc.v2(sss.x - this.node.parent.parent.x,sss.y - this.node.parent.parent.y,));
                var pos = this.coinSp.parent.convertToWorldSpaceAR(cc.v2(0, 0));
                var pp = parent.convertToNodeSpaceAR(pos);
                parent.addChild(node_1);
                node_1.setPosition(pp);
                node_1.scale = 0.5;
                // cc.log(pos.x, pos.y, pp.x, pp.y)
                // let pos = this.gold.parent.convertToWorldSpaceAR(this.coinSp.getPosition());
                CocosZ_1.cocosz.dataMgr.CoinCount += 10;
                parent.getChildByName("num").getComponent(cc.Label).string = CocosZ_1.cocosz.dataMgr.CoinCount.toString();
                var pos2 = cc.v2(-pp.x - 19.766, -pp.y + 3.866);
                cc.tween(node_1)
                    .parallel(cc.tween().by(1, { x: pos2.x }, { easing: 'sineOut' }), cc.tween().sequence(cc.tween().by(0.3, { y: -50 }, { easing: 'sineOut' }), cc.tween().by(0.7, { y: pos2.y + 50 }, { easing: 'sineOut' })))
                    .delay(1)
                    .call(function () {
                    node_1.destroy();
                })
                    .start();
            }
            else if (other.tag == Constant_1.tag.desPoint) {
                if (this.node.parent.parent.name == "cactus5" || this.node.parent.parent.name == "coin") {
                    this.node.parent.parent.destroy();
                }
            }
            return;
        }
        if (other.tag == Constant_1.tag.stone || other.tag == Constant_1.tag.honeybee || other.tag == Constant_1.tag.floorThorn || other.tag == Constant_1.tag.rain || other.tag == Constant_1.tag.bat || other.tag == Constant_1.tag.bigFan) {
            CocosZ_1.cocosz.audioMgr.playMetalStoneEffect2();
            if (this.node.parent.name != "prop") {
                this.node.parent.destroy();
            }
            else {
                // if (cocosz.dataMgr.CurLevelId == 32) {
                //     this.node.parent.parent.destroy();
                //     return;
                // }
                this.node.destroy();
            }
        }
        else if (other.tag == Constant_1.tag.thorn) {
            contact.disabled = true;
            if (this.node.parent.name != "prop") {
                this.node.parent.destroy();
            }
            else {
                this.node.destroy();
            }
            CocosZ_1.cocosz.audioMgr.playMetalStoneEffect2();
        }
        else if (other.tag == Constant_1.tag.succeedPoint || other.tag == Constant_1.tag.faidPoint) {
            contact.disabled = true;
        }
        else if (other.tag == Constant_1.tag.desPoint) {
            if (this.node.parent.parent.name == "cactus5" || this.node.parent.parent.name == "coin") {
                this.node.parent.parent.destroy();
            }
        }
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this._rigidBody = this.node.getComponent(cc.RigidBody);
        if (this.node.parent.parent.parent.name == "coinMgr") {
            this.coinSp = this.node.parent.parent.getChildByName("nimiCactus").getChildByName("gold");
        }
    };
    NewClass.prototype.start = function () {
        // cc.log(this.node.parent.parent.parent.name)
        if (this.node.parent.parent.parent.name == "ScaleNode") {
            this._rigidBody.gravityScale = -2;
            // cc.log(this._rigidBody.gravityScale, "this._rigidBody.gravityScale")
            this.node.getComponent(cc.PhysicsCircleCollider).apply();
            return;
        }
        if (this.node.parent.parent.parent.name == "coinMgr") {
            // this.node.on(cc.Node.EventType.TOUCH_START, (() => {
            //     this.node.parent.parent.destroy();
            // }))
            return;
        }
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 76 || CocosZ_1.cocosz.dataMgr.CurLevelId == 137) {
            this._rigidBody.gravityScale = -2.8;
            var a = this.node.getComponent(cc.PhysicsCircleCollider);
            a.apply();
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 81) {
            this._rigidBody.gravityScale = -3;
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 90) {
            this._rigidBody.gravityScale = -4;
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 115) {
            this._rigidBody.gravityScale = -6;
            var a = this.node.getComponent(cc.PhysicsCircleCollider);
            a.friction += 5;
        }
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();