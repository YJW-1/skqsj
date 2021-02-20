"use strict";
cc._RF.push(module, 'd529caF5ixM8rwNvhjgzgpF', 'controlCenter');
// script/Game/controlCenter.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var controlCenter = /** @class */ (function (_super) {
    __extends(controlCenter, _super);
    function controlCenter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.add1 = null;
        _this.add3 = null;
        _this.add2 = null;
        _this.sub1 = null;
        _this.sub2 = null;
        _this.sub3 = null;
        _this.num1 = null;
        _this.num2 = null;
        _this.num3 = null;
        return _this;
        // update (dt) {}
    }
    controlCenter.prototype.onUnLock = function () {
        if ((CocosZ_1.cocosz.dataMgr.CurLevelId == 117 && (this.num1.string == "3" && this.num2.string == "8" && this.num3.string == "1")) ||
            (CocosZ_1.cocosz.dataMgr.CurLevelId == 118 && (this.num1.string == "4" && this.num2.string == "1" && this.num3.string == "3")) ||
            (CocosZ_1.cocosz.dataMgr.CurLevelId == 119 && (this.num1.string == "5" && this.num2.string == "9" && this.num3.string == "4"))) {
            this.node.targetOff(this);
            this.add1.off(cc.Node.EventType.TOUCH_START);
            this.add2.off(cc.Node.EventType.TOUCH_START);
            this.add3.off(cc.Node.EventType.TOUCH_START);
            this.sub1.off(cc.Node.EventType.TOUCH_START);
            this.sub2.off(cc.Node.EventType.TOUCH_START);
            this.sub3.off(cc.Node.EventType.TOUCH_START);
            this.node.getChildByName("isTure").active = true;
            if (CocosZ_1.cocosz.dataMgr.CurLevelId == 117) {
                for (var _i = 0, _a = this.node.parent.children; _i < _a.length; _i++) {
                    var child = _a[_i];
                    if (child.name == "floor22") {
                        cc.tween(child)
                            .to(1, { position: cc.v2(327, 292) })
                            .start();
                    }
                }
            }
            else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 118) {
                for (var _b = 0, _c = this.node.parent.children; _b < _c.length; _b++) {
                    var child = _c[_b];
                    if (child.name == "floor22") {
                        cc.tween(child)
                            .to(1, { position: cc.v2(-263.645, -86.65) })
                            .start();
                    }
                }
            }
            else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 119) {
                for (var _d = 0, _e = this.node.parent.children; _d < _e.length; _d++) {
                    var child = _e[_d];
                    if (child.name == "floor22") {
                        if (child.angle == 180) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(-448.362, -56.324) })
                                .start();
                        }
                        else if (child.angle == 0) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(277.916, -56.324) })
                                .start();
                        }
                    }
                }
            }
        }
    };
    // LIFE-CYCLE CALLBACKS:
    controlCenter.prototype.onLoad = function () {
        this.add1 = this.node.getChildByName("add1");
        this.add2 = this.node.getChildByName("add2");
        this.add3 = this.node.getChildByName("add3");
        this.sub1 = this.node.getChildByName("sub1");
        this.sub2 = this.node.getChildByName("sub2");
        this.sub3 = this.node.getChildByName("sub3");
        this.num1 = this.node.getChildByName("num1").getComponent(cc.Label);
        this.num2 = this.node.getChildByName("num2").getComponent(cc.Label);
        this.num3 = this.node.getChildByName("num3").getComponent(cc.Label);
    };
    controlCenter.prototype.start = function () {
        var _this = this;
        this.add1.on(cc.Node.EventType.TOUCH_START, function () {
            var num = +_this.num1.string;
            num++;
            num %= 10;
            _this.num1.string = num + "";
            _this.onUnLock();
        }, this);
        this.add2.on(cc.Node.EventType.TOUCH_START, function () {
            var num = +_this.num2.string;
            num++;
            num %= 10;
            _this.num2.string = num + "";
            _this.onUnLock();
        }, this);
        this.add3.on(cc.Node.EventType.TOUCH_START, function () {
            var num = +_this.num3.string;
            num++;
            num %= 10;
            _this.num3.string = num + "";
            _this.onUnLock();
        }, this);
        this.sub1.on(cc.Node.EventType.TOUCH_START, function () {
            var num = +_this.num1.string;
            if (num <= 0) {
                num = 9;
            }
            else {
                num--;
            }
            num %= 10;
            _this.num1.string = num + "";
            _this.onUnLock();
        }, this);
        this.sub2.on(cc.Node.EventType.TOUCH_START, function () {
            var num = +_this.num2.string;
            if (num <= 0) {
                num = 9;
            }
            else {
                num--;
            }
            num %= 10;
            num %= 10;
            _this.num2.string = num + "";
            _this.onUnLock();
        }, this);
        this.sub3.on(cc.Node.EventType.TOUCH_START, function () {
            var num = +_this.num3.string;
            if (num <= 0) {
                num = 9;
            }
            else {
                num--;
            }
            num %= 10;
            num %= 10;
            _this.num3.string = num + "";
            _this.onUnLock();
        }, this);
    };
    controlCenter = __decorate([
        ccclass
    ], controlCenter);
    return controlCenter;
}(cc.Component));
exports.default = controlCenter;

cc._RF.pop();