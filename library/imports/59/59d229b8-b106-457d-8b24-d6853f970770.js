"use strict";
cc._RF.push(module, '59d22m4sQZFfYsk1oU/lwdw', 'propItem');
// script/Ui/propItem.ts

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
        _this.num = null;
        _this.id = 1;
        _this.sp = null;
        return _this;
        // update (dt) {}
    }
    NewClass.prototype.init = function (id) {
        this.id = id;
        if (this.id == 0) {
            this.num.string = CocosZ_1.cocosz.dataMgr.BoomNum.toString();
            this.sp.spriteFrame = CocosZ_1.cocosz.resMgr.getRes("boom", cc.SpriteFrame);
            this.coin.string = "1000";
        }
        else if (this.id == 1) {
            this.num.string = CocosZ_1.cocosz.dataMgr.SkinVedioNum.toString();
            this.sp.spriteFrame = CocosZ_1.cocosz.resMgr.getRes("skipVideo", cc.SpriteFrame);
            this.coin.string = "1500";
        }
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    NewClass.prototype.start = function () {
        var _this = this;
        this.buy.on(cc.Node.EventType.TOUCH_END, (function () {
            if (_this.id == 0) {
                if (CocosZ_1.cocosz.dataMgr.CoinCount >= 1000) {
                    CocosZ_1.cocosz.dataMgr.BoomNum++;
                    CocosZ_1.cocosz.dataMgr.CoinCount -= 1000;
                    cc.game.emit(Constant_1.default.E_MAP_FINISH);
                    cc.game.emit(Constant_1.default.E_UPDATE_COIN);
                    Msg_1.default.Show("购买炸弹成功");
                }
                else {
                    Msg_1.default.Show("金币不足,先去冒险获得金币吧");
                }
            }
            else {
                if (CocosZ_1.cocosz.dataMgr.CoinCount >= 1500) {
                    CocosZ_1.cocosz.dataMgr.SkinVedioNum++;
                    CocosZ_1.cocosz.dataMgr.CoinCount -= 1500;
                    cc.game.emit(Constant_1.default.E_MAP_FINISH);
                    cc.game.emit(Constant_1.default.E_UPDATE_COIN);
                    Msg_1.default.Show("购买跳过卡成功");
                }
                else {
                    Msg_1.default.Show("金币不足,先去冒险获得金币吧");
                }
            }
        }));
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
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "num", void 0);
    __decorate([
        property(cc.Sprite)
    ], NewClass.prototype, "sp", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();