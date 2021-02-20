"use strict";
cc._RF.push(module, 'b3badGr8lZK+rjRxD2cuXCA', 'handTips');
// script/Game/handTips.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var handTips = /** @class */ (function (_super) {
    __extends(handTips, _super);
    function handTips() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.action = null;
        _this.action2 = null;
        _this.startPos = null;
        _this.step = 0;
        _this.floor2 = null;
        return _this;
        // update (dt) {}
    }
    //根据值来进行下一步新手引导
    handTips.prototype.onNext = function () {
        var _this = this;
        cc.log(CocosZ_1.cocosz.gameMgr.handNum, "cocosz.gameMgr.handNum---------");
        if (this.action) {
            this.action.stop();
            this.node.opacity = 0;
        }
        if (this.action2) {
            // cc.log(this.node.parent.getChildByName("floorTips2"))
            this.node.parent.getChildByName("floorTips2").destroy();
            this.action2.stop();
            this.node.opacity = 0;
        }
        if (CocosZ_1.cocosz.gameMgr.handNum == 0) {
            if (CocosZ_1.cocosz.dataMgr.CurLevelId == 4) {
                var a = cc.tween().sequence(cc.tween().delay(2), cc.tween().call(function () {
                    _this.node.setPosition(_this.startPos);
                    _this.node.opacity = 255;
                }), cc.tween().to(0.5, { position: cc.v2(-42, 24) }), cc.tween().to(0.5, { position: cc.v2(90, -59) }), cc.tween().to(0.5, { position: cc.v2(-18, -124) }), cc.tween().to(0.5, { opacity: 0 }), cc.tween().delay(2));
                this.action = cc.tween(this.node)
                    .repeatForever(a)
                    .start();
                // cocosz.gameMgr.handNum++;
            }
            else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 0 || CocosZ_1.cocosz.dataMgr.CurLevelId == 11 || CocosZ_1.cocosz.dataMgr.CurLevelId == 20) {
                this.node.opacity = 0;
                var a = cc.tween().sequence(cc.tween().delay(1), cc.tween().to(1, { opacity: 255 }), cc.tween().to(1.5, { opacity: 0 }), cc.tween().delay(2));
                this.action = cc.tween(this.node)
                    .repeatForever(a)
                    .start();
            }
            else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 1) {
                var a = cc.tween().sequence(cc.tween().delay(2), cc.tween().call(function () {
                    _this.node.setPosition(_this.startPos);
                    _this.node.opacity = 255;
                }), cc.tween().to(1.5, { position: cc.v2(198, -113) }), cc.tween().to(0.5, { opacity: 0 }), cc.tween().delay(2));
                this.action = cc.tween(this.node)
                    .repeatForever(a)
                    .start();
                // cocosz.gameMgr.handNum++;
            }
            else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 2) {
                var a = cc.tween().sequence(cc.tween().delay(2), cc.tween().call(function () {
                    _this.node.setPosition(_this.startPos);
                    _this.node.opacity = 255;
                }), cc.tween().by(1.5, { position: cc.v2(0, 250) }), cc.tween().to(0.5, { opacity: 0 }), cc.tween().delay(2));
                this.action = cc.tween(this.node)
                    .repeatForever(a)
                    .start();
                // cocosz.gameMgr.handNum++;
            }
            else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 3) {
                cc.log(this.node.scale);
                this.node.scale = 1.5;
                var a = cc.tween().sequence(cc.tween().delay(1), cc.tween().to(1, { opacity: 255 }), cc.tween().to(1.5, { opacity: 0 }), cc.tween().delay(2));
                this.action = cc.tween(this.node)
                    .repeatForever(a)
                    .start();
                // cocosz.gameMgr.handNum++;
            }
            else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 27) {
                var a = cc.tween().sequence(cc.tween().delay(1), cc.tween().call(function () {
                    _this.node.setPosition(_this.startPos);
                }), cc.tween().to(1, { opacity: 255 }), cc.tween().to(1, { position: cc.v2(66, -110) }), cc.tween().to(1, { opacity: 0 }), cc.tween().delay(2));
                cc.tween(this.node)
                    .repeatForever(a)
                    .start();
                CocosZ_1.cocosz.gameMgr.handNum++;
            }
            else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 5) {
                var a = cc.tween().sequence(cc.tween().delay(2), cc.tween().call(function () {
                    _this.node.setPosition(_this.startPos);
                    // this.node.opacity = 255;
                }), cc.tween().to(1, { opacity: 255 }), cc.tween().to(1, { opacity: 0 }), cc.tween().delay(2));
                this.action = cc.tween(this.node)
                    .repeatForever(a)
                    .start();
                CocosZ_1.cocosz.gameMgr.handNum++;
            }
        }
        else if (CocosZ_1.cocosz.gameMgr.handNum == 1) {
            if (CocosZ_1.cocosz.dataMgr.CurLevelId == 4) {
                var a = cc.tween().sequence(cc.tween().call(function () {
                    _this.node.setPosition(cc.v2(55, -301));
                    _this.node.opacity = 0;
                }), cc.tween().delay(2), cc.tween().to(1, { opacity: 255 }), cc.tween().to(1, { opacity: 0 }), cc.tween().delay(2));
                this.action = cc.tween(this.node)
                    .repeatForever(a)
                    .start();
            }
            else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 0) {
                this.node.setPosition(cc.v2(83.549, -135.817 - 60 - 60));
                var a = cc.tween().sequence(cc.tween().delay(1), cc.tween().to(1, { opacity: 255 }), cc.tween().to(1.5, { opacity: 0 }), cc.tween().delay(2));
                this.action = cc.tween(this.node)
                    .repeatForever(a)
                    .start();
            }
            else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 1) {
                this.node.getChildByName("floorTips1").active = false;
                this.node.getChildByName("sp").active = true;
                var a = cc.tween().sequence(cc.tween().call(function () {
                    _this.node.setPosition(cc.v2(-55, -301));
                    _this.node.opacity = 0;
                }), cc.tween().delay(2), cc.tween().to(1, { opacity: 255 }), cc.tween().to(1, { opacity: 0 }), cc.tween().delay(2));
                this.action = cc.tween(this.node)
                    .repeatForever(a)
                    .start();
            }
            else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 3) {
                var prefab = CocosZ_1.cocosz.resMgr.getRes("floorTips2", cc.Prefab);
                var node = cc.instantiate(prefab);
                node.setPosition(cc.v2(350, 186.5));
                this.floor2 = node;
                this.floor2.opacity = 0;
                this.node.parent.addChild(node);
                this.node.setPosition(cc.v2(357, 77));
                this.startPos = this.node.getPosition();
                this.node.opacity = 0;
                this.node.scale = 1;
                var a = cc.tween().sequence(cc.tween().delay(1.5), cc.tween().to(0.4, { opacity: 255 }), cc.tween().to(0.6, { position: cc.v2(253.5, 133) }), cc.tween().to(0.6, { position: cc.v2(357, 218) }), cc.tween().to(0.6, { position: cc.v2(463.5, 133) }), cc.tween().to(0.6, { position: this.startPos }), cc.tween().to(0.4, { opacity: 0 }), cc.tween().delay(1.5));
                this.action = cc.tween(this.node)
                    .repeatForever(a)
                    .start();
                var b = cc.tween().sequence(cc.tween().delay(1.5), cc.tween().to(0.4, { opacity: 255 }), cc.tween().by(2.4, { angle: -360 }), cc.tween().to(0.4, { opacity: 0 }), cc.tween().delay(1.5));
                // if (this.floor2) {
                this.action2 = cc.tween(node)
                    .repeatForever(b)
                    .start();
                // }
            }
        }
        else if (CocosZ_1.cocosz.gameMgr.handNum == 2) {
            if (CocosZ_1.cocosz.dataMgr.CurLevelId == 1) {
                this.startPos = cc.v2(353, 44.5);
                this.node.removeAllChildren();
                var prefab = CocosZ_1.cocosz.resMgr.getRes("floorTips3", cc.Prefab);
                var node = cc.instantiate(prefab);
                this.node.addChild(node);
                this.node.opacity = 0;
                var a = cc.tween().sequence(cc.tween().delay(2), cc.tween().call(function () {
                    _this.node.setPosition(_this.startPos);
                    _this.node.opacity = 255;
                }), cc.tween().to(0.7, { position: cc.v2(340, 44.5) }), cc.tween().to(0.5, { opacity: 0 }), cc.tween().delay(2));
                this.action = cc.tween(this.node)
                    .repeatForever(a)
                    .start();
            }
            else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 3) {
                cc.log(this.node.scale);
                this.node.scale = 1.5;
                this.node.setPosition(cc.v2(222.322, -300));
                var a = cc.tween().sequence(cc.tween().delay(1), cc.tween().to(1, { opacity: 255 }), cc.tween().to(1.5, { opacity: 0 }), cc.tween().delay(2));
                this.action = cc.tween(this.node)
                    .repeatForever(a)
                    .start();
                // cocosz.gameMgr.handNum++;
            }
        }
    };
    // LIFE-CYCLE CALLBACKS:
    handTips.prototype.onDestroy = function () {
        cc.game.targetOff(this);
    };
    // onLoad () {}
    handTips.prototype.start = function () {
        var _this = this;
        this.startPos = this.node.getPosition();
        this.node.zIndex += 9999;
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 1) {
            // this.node.getChildByName("sp").active = false;
            var prefab = CocosZ_1.cocosz.resMgr.getRes("floorTips1", cc.Prefab);
            var node = cc.instantiate(prefab);
            this.node.addChild(node);
            this.node.opacity = 0;
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 2 || CocosZ_1.cocosz.dataMgr.CurLevelId == 27 || CocosZ_1.cocosz.dataMgr.CurLevelId == 5 || CocosZ_1.cocosz.dataMgr.CurLevelId == 0) {
            this.node.opacity = 0;
        }
        this.onNext();
        cc.game.on(Constant_1.default.E_TIPS_NEXT, function (other, self) {
            _this.onNext();
            // if (cocosz.gameMgr.handNum == 1 && cocosz.dataMgr.CurLevelId == 1) {
            //     cc.game.off(Constant.E_TIPS_NEXT);
            // }
            // else if (cocosz.gameMgr.handNum == 1 && cocosz.dataMgr.CurLevelId == 0) {
            //     cc.game.off(Constant.E_TIPS_NEXT);
            // }
        }, this);
        cc.game.on(Constant_1.default.E_TIPS_NEXT2, function (other, self) {
            cc.log("Constant.E_TIPS_NEXT2__------------------on");
            CocosZ_1.cocosz.gameMgr.handNum = 2;
            _this.onNext();
        }, this);
    };
    handTips = __decorate([
        ccclass
    ], handTips);
    return handTips;
}(cc.Component));
exports.default = handTips;

cc._RF.pop();