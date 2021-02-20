
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Ui/shopItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxVaVxcc2hvcEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUM3QyxrREFBNkM7QUFDN0Msd0NBQW1DO0FBRTdCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFEbEQ7UUFBQSxxRUF1SkM7UUFuSkcsU0FBRyxHQUFZLElBQUksQ0FBQztRQUdwQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBSTVCLFVBQUksR0FBYSxJQUFJLENBQUM7UUFHdEIsUUFBRSxHQUFXLENBQUMsQ0FBQztRQUdmLFFBQUUsR0FBYyxJQUFJLENBQUM7O1FBa0lyQixpQkFBaUI7SUFDckIsQ0FBQztJQWpJRyx1QkFBSSxHQUFKLFVBQUssRUFBRTtRQUNILElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxJQUFJLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxhQUFhLEVBQUU7WUFDakMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pFLElBQUksRUFBRSxHQUFHLGVBQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pFLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0s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QUFZLEVBQUU7WUFDOUIsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBRVosQ0FBQztJQWhKRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNFO0lBR3BCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ0s7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUk1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNHO0lBYkwsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXNKNUI7SUFBRCxlQUFDO0NBdEpELEFBc0pDLENBdEpxQyxFQUFFLENBQUMsU0FBUyxHQXNKakQ7a0JBdEpvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuaW1wb3J0IENvbnN0YW50IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uc3RhbnRcIjtcclxuaW1wb3J0IE1zZyBmcm9tIFwiLi4vRnJhbWV3b3JrL01zZ1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGJ1eTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBjaGFuZ2U6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgYWxyZWFkeVdlYXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBjb2luOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG5cclxuICAgIGlkOiBudW1iZXIgPSAxO1xyXG5cclxuXHJcbiAgICBzcDogY2MuU3ByaXRlID0gbnVsbDtcclxuXHJcbiAgICBpbml0KGlkKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIGxldCBpbmZvID0gY29jb3N6LmRhdGFNZ3IuZ2V0QmFsbGJvblNraW5JbmZvKHRoaXMuaWQpO1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PSBcImJhbGxib25JdGVtXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zcCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICBsZXQgc3AgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcImJhbGxvb25cIiArICh0aGlzLmlkICsgMSksIGNjLlNwcml0ZUZyYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5zcC5zcHJpdGVGcmFtZSA9IHNwO1xyXG4gICAgICAgICAgICB0aGlzLmNvaW4uc3RyaW5nID0gaW5mby5QcmljZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5ub2RlLm5hbWUgPT0gXCJyb2xlSXRlbVwiKSB7XHJcbiAgICAgICAgICAgIGluZm8gPSBjb2Nvc3ouZGF0YU1nci5nZXRTa2luSW5mbyh0aGlzLmlkKVxyXG4gICAgICAgICAgICB0aGlzLnNwID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgIGxldCBzcCA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwicm9sZVwiICsgKHRoaXMuaWQpLCBjYy5TcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3Auc3ByaXRlRnJhbWUgPSBzcDtcclxuICAgICAgICAgICAgdGhpcy5jb2luLnN0cmluZyA9IGluZm8uUHJpY2U7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgY2MubG9nKGluZm8sIHRoaXMubm9kZS54KTtcclxuXHJcblxyXG4gICAgICAgIHN3aXRjaCAoaW5mby5TdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV5LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxyZWFkeVdlYXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDE6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV5LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxyZWFkeVdlYXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvaW4ubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDI6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV5LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2UuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFscmVhZHlXZWFyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvaW4ubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgY2MuZ2FtZS50YXJnZXRPZmYodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gb25EaXNhYmxlKCkge1xyXG4gICAgLy8gICAgIGNjLmdhbWUudGFyZ2V0T2ZmKHRoaXMpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gb25EaXNhYmxlKCkge1xyXG4gICAgLy8gICAgIGNjLmdhbWUudGFyZ2V0T2ZmKHRoaXMpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLm5hbWUgPT0gXCJiYWxsYm9uSXRlbVwiKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ1eS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5mbyA9IGNvY29zei5kYXRhTWdyLmdldEJhbGxib25Ta2luSW5mbyh0aGlzLmlkKVxyXG4gICAgICAgICAgICAgICAgbGV0IHByaWNlID0gaW5mby5QcmljZTtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhpbmZvKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmZvLlN0YXRlID09IDEgfHwgaW5mby5TdGF0ZSA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgTXNnLlNob3coXCLor6Xnmq7ogqTlt7Lmi6XmnIlcIilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ29pbkNvdW50ID49IHByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ3VyQmFsbGJvblNraW5JZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ29pbkNvdW50IC09IHByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX01BUF9GSU5JU0gpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9VUERBVEVfQ09JTilcclxuICAgICAgICAgICAgICAgICAgICBNc2cuU2hvdyhcIui0reS5sOearuiCpOaIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIE1zZy5TaG93KFwi6YeR5biB5LiN6LazLOWFiOWOu+WGkumZqeiOt+W+l+mHkeW4geWQp1wiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpXHJcblxyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2Uub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ3VyQmFsbGJvblNraW5JZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9NQVBfRklOSVNIKTtcclxuICAgICAgICAgICAgICAgIE1zZy5TaG93KFwi5pu05o2i55qu6IKk5oiQ5YqfXCIpXHJcblxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5ub2RlLm5hbWUgPT0gXCJyb2xlSXRlbVwiKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ1eS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJpY2UgPSBjb2Nvc3ouZGF0YU1nci5nZXRTa2luSW5mbyh0aGlzLmlkKS5QcmljZTtcclxuICAgICAgICAgICAgICAgIGNjLmxvZyhwcmljZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkNvaW5Db3VudCA+PSBwcmljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvY29zei5kYXRhTWdyLkN1clNraW5JZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29jb3N6LmRhdGFNZ3IuQ29pbkNvdW50IC09IHByaWNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX01BUF9GSU5JU0gpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9VUERBVEVfQ09JTilcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgTXNnLlNob3coXCLotK3kubDnmq7ogqTmiJDlip9cIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBNc2cuU2hvdyhcIumHkeW4geS4jei2syzlhYjljrvlhpLpmanojrflvpfph5HluIHlkKdcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5DdXJTa2luSWQgPSB0aGlzLmlkO1xyXG4gICAgICAgICAgICAgICAgY2MuZ2FtZS5lbWl0KENvbnN0YW50LkVfTUFQX0ZJTklTSCk7XHJcbiAgICAgICAgICAgICAgICBNc2cuU2hvdyhcIuabtOaNouearuiCpOaIkOWKn1wiKVxyXG4gICAgICAgICAgICB9KSlcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIGNjLmdhbWUub24oQ29uc3RhbnQuRV9NQVBfRklOSVNILCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdCh0aGlzLmlkKTtcclxuICAgICAgICB9LCB0aGlzKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxyXG59XHJcbiJdfQ==