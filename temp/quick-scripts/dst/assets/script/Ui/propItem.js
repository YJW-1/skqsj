
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Ui/propItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxVaVxccHJvcEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUM3QyxrREFBNkM7QUFDN0Msd0NBQW1DO0FBRTdCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFEbEQ7UUFBQSxxRUF3RkM7UUFuRkcsU0FBRyxHQUFZLElBQUksQ0FBQztRQUdwQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBSTVCLFVBQUksR0FBYSxJQUFJLENBQUM7UUFJdEIsU0FBRyxHQUFhLElBQUksQ0FBQztRQUdyQixRQUFFLEdBQVcsQ0FBQyxDQUFDO1FBSWYsUUFBRSxHQUFjLElBQUksQ0FBQzs7UUE2RHJCLGlCQUFpQjtJQUNyQixDQUFDO0lBNURHLHVCQUFJLEdBQUosVUFBSyxFQUFFO1FBQ0gsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDcEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDN0I7YUFDSSxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3pELElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQzdCO0lBR0wsQ0FBQztJQUNELHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsd0JBQUssR0FBTDtRQUFBLGlCQXNDQztRQXJDRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN0QyxJQUFJLEtBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUVkLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO29CQUNsQyxlQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUN6QixlQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUM7b0JBQ2pDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBRXBDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFRLENBQUMsYUFBYSxDQUFDLENBQUE7b0JBQ3BDLGFBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3RCO3FCQUNJO29CQUNELGFBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztpQkFDOUI7YUFDSjtpQkFDSTtnQkFFRCxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtvQkFDbEMsZUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFFOUIsZUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDO29CQUNqQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUVwQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFBO29CQUNwQyxhQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUN2QjtxQkFDSTtvQkFDRCxhQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7aUJBQzlCO2FBQ0o7UUFFTCxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBR0gsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsa0JBQVEsQ0FBQyxZQUFZLEVBQUU7WUFDOUIsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ1osQ0FBQztJQWhGRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNFO0lBR3BCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUk1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNHO0lBSXRCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eUNBQ0U7SUFPckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDQztJQXpCSixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBdUY1QjtJQUFELGVBQUM7Q0F2RkQsQUF1RkMsQ0F2RnFDLEVBQUUsQ0FBQyxTQUFTLEdBdUZqRDtrQkF2Rm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5pbXBvcnQgQ29uc3RhbnQgZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG5pbXBvcnQgTXNnIGZyb20gXCIuLi9GcmFtZXdvcmsvTXNnXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ1eTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGFuZ2U6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYWxyZWFkeVdlYXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBjb2luOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIG51bTogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuXHJcbiAgICBpZDogbnVtYmVyID0gMTtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHNwOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIGluaXQoaWQpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgaWYgKHRoaXMuaWQgPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLm51bS5zdHJpbmcgPSBjb2Nvc3ouZGF0YU1nci5Cb29tTnVtLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3Auc3ByaXRlRnJhbWUgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcImJvb21cIiwgY2MuU3ByaXRlRnJhbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNvaW4uc3RyaW5nID0gXCIxMDAwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuaWQgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLm51bS5zdHJpbmcgPSBjb2Nvc3ouZGF0YU1nci5Ta2luVmVkaW9OdW0udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgdGhpcy5zcC5zcHJpdGVGcmFtZSA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwic2tpcFZpZGVvXCIsIGNjLlNwcml0ZUZyYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5jb2luLnN0cmluZyA9IFwiMTUwMFwiO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5idXkub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pZCA9PSAwKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkNvaW5Db3VudCA+PSAxMDAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQm9vbU51bSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkNvaW5Db3VudCAtPSAxMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX01BUF9GSU5JU0gpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9VUERBVEVfQ09JTilcclxuICAgICAgICAgICAgICAgICAgICBNc2cuU2hvdyhcIui0reS5sOeCuOW8ueaIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIE1zZy5TaG93KFwi6YeR5biB5LiN6LazLOWFiOWOu+WGkumZqeiOt+W+l+mHkeW4geWQp1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ29pbkNvdW50ID49IDE1MDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5Ta2luVmVkaW9OdW0rKztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ29pbkNvdW50IC09IDE1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KENvbnN0YW50LkVfTUFQX0ZJTklTSCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX1VQREFURV9DT0lOKVxyXG4gICAgICAgICAgICAgICAgICAgIE1zZy5TaG93KFwi6LSt5Lmw6Lez6L+H5Y2h5oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTXNnLlNob3coXCLph5HluIHkuI3otrMs5YWI5Y675YaS6Zmp6I635b6X6YeR5biB5ZCnXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pKVxyXG5cclxuXHJcbiAgICAgICAgY2MuZ2FtZS5vbihDb25zdGFudC5FX01BUF9GSU5JU0gsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbml0KHRoaXMuaWQpO1xyXG4gICAgICAgIH0sIHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4iXX0=