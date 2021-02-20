"use strict";
cc._RF.push(module, '04e61c87AZJjpLlrxS79+pA', 'shopItem');
// script/Ui/shopItem.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var Msg_1 = require("../Framework/Msg");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buy = null;
        _this.change = null;
        _this.alreadyWear = null;
        _this.coin = null;
        _this.id = 1;
        _this.sp = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.init = function (id) {
        this.id = id;
        var info = CocosZ_1.cocosz.dataMgr.getBallbonSkinInfo(this.id);
        if (this.node.name == "ballbonItem") {
            this.sp = this.node.getChildByName("sp").getComponent(cc.Sprite);
            var sp = CocosZ_1.cocosz.resMgr.getRes("balloon" + (this.id + 1), cc.SpriteFrame);
            this.sp.spriteFrame = sp;
            this.coin.string = info.Price;
        }
        else if (this.node.name == "roleItem") {
            info = CocosZ_1.cocosz.dataMgr.getSkinInfo(this.id);
            this.sp = this.node.getChildByName("sp").getComponent(cc.Sprite);
            var sp = CocosZ_1.cocosz.resMgr.getRes("role" + (this.id), cc.SpriteFrame);
            this.sp.spriteFrame = sp;
            this.coin.string = info.Price;
        }
        cc.log(info, this.node.x);
        switch (info.State) {
            case 0: {
                this.buy.active = true;
                this.change.active = false;
                this.alreadyWear.active = false;
                break;
            }
            case 1: {
                this.buy.active = false;
                this.change.active = true;
                this.alreadyWear.active = false;
                this.coin.node.parent.active = false;
                break;
            }
            case 2: {
                this.buy.active = false;
                this.change.active = false;
                this.alreadyWear.active = true;
                this.coin.node.parent.active = false;
                break;
            }
        }
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onDestroy = function () {
        cc.game.targetOff(this);
    };
    // onDisable() {
    //     cc.game.targetOff(this);
    // }
    // onDisable() {
    //     cc.game.targetOff(this);
    // }
    NewClass.prototype.onLoad = function () {
    };
    NewClass.prototype.start = function () {
        var _this = this;
        if (this.node.name == "ballbonItem") {
            this.buy.on(cc.Node.EventType.TOUCH_END, (function () {
                var info = CocosZ_1.cocosz.dataMgr.getBallbonSkinInfo(_this.id);
                var price = info.Price;
                cc.log(info);
                if (info.State == 1 || info.State == 2) {
                    Msg_1.default.Show("该皮肤已拥有");
                    return;
                }
                if (CocosZ_1.cocosz.dataMgr.CoinCount >= price) {
                    CocosZ_1.cocosz.dataMgr.CurBallbonSkinId = _this.id;
                    CocosZ_1.cocosz.dataMgr.CoinCount -= price;
                    cc.game.emit(Constant_1.default.E_MAP_FINISH);
                    cc.game.emit(Constant_1.default.E_UPDATE_COIN);
                    Msg_1.default.Show("购买皮肤成功");
                }
                else {
                    Msg_1.default.Show("金币不足,先去冒险获得金币吧");
                }
            }));
            this.change.on(cc.Node.EventType.TOUCH_END, (function () {
                CocosZ_1.cocosz.dataMgr.CurBallbonSkinId = _this.id;
                cc.game.emit(Constant_1.default.E_MAP_FINISH);
                Msg_1.default.Show("更换皮肤成功");
            }));
        }
        else if (this.node.name == "roleItem") {
            this.buy.on(cc.Node.EventType.TOUCH_END, (function () {
                var price = CocosZ_1.cocosz.dataMgr.getSkinInfo(_this.id).Price;
                cc.log(price);
                if (CocosZ_1.cocosz.dataMgr.CoinCount >= price) {
                    CocosZ_1.cocosz.dataMgr.CurSkinId = _this.id;
                    CocosZ_1.cocosz.dataMgr.CoinCount -= price;
                    cc.game.emit(Constant_1.default.E_MAP_FINISH);
                    cc.game.emit(Constant_1.default.E_UPDATE_COIN);
                    Msg_1.default.Show("购买皮肤成功");
                }
                else {
                    Msg_1.default.Show("金币不足,先去冒险获得金币吧");
                }
            }));
            this.change.on(cc.Node.EventType.TOUCH_END, (function () {
                CocosZ_1.cocosz.dataMgr.CurSkinId = _this.id;
                cc.game.emit(Constant_1.default.E_MAP_FINISH);
                Msg_1.default.Show("更换皮肤成功");
            }));
        }
        cc.game.on(Constant_1.default.E_MAP_FINISH, function () {
            _this.init(_this.id);
        }, this);
    };
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "buy", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "change", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "alreadyWear", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "coin", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();