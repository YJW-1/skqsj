
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/balloon2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxiYWxsb29uMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOENBQTZDO0FBQzdDLGtEQUE0QztBQUV0QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBRGxEO1FBQUEscUVBd0lDO1FBcklXLGdCQUFVLEdBQWlCLElBQUksQ0FBQztRQUNoQyxZQUFNLEdBQVksSUFBSSxDQUFDOztRQW1JL0IsaUJBQWlCO0lBQ3JCLENBQUM7SUFsSUcsaUNBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUUvQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLFNBQVMsRUFBRTtZQUVsRCxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksY0FBRyxDQUFDLEtBQUssRUFBRTtnQkFDeEIsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDbEMsZUFBTSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2dCQUN4Qyw0QkFBNEI7Z0JBSTVCLElBQUksTUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN2QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4Ryx3Q0FBd0M7Z0JBQ3hDLGtCQUFrQjtnQkFDbEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUE7Z0JBQzFDLHVIQUF1SDtnQkFDdkgsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEUsSUFBSSxFQUFFLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUN6QyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQUksQ0FBQyxDQUFDO2dCQUN0QixNQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNyQixNQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDakIsbUNBQW1DO2dCQUduQywrRUFBK0U7Z0JBQy9FLGVBQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztnQkFDL0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxlQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDakcsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQTtnQkFFL0MsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFJLENBQUM7cUJBRVQsUUFBUSxDQUNMLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUN0RCxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUNmLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFDckQsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUNoRSxDQUNKO3FCQUVBLEtBQUssQ0FBQyxDQUFDLENBQUM7cUJBQ1IsSUFBSSxDQUFDO29CQUNGLE1BQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDbkIsQ0FBQyxDQUFDO3FCQUNELEtBQUssRUFBRSxDQUFBO2FBQ2Y7aUJBQ0ksSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLGNBQUcsQ0FBQyxRQUFRLEVBQUU7Z0JBQ2hDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7b0JBQ3JGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDckM7YUFDSjtZQUNELE9BQU87U0FDVjtRQUNELElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxjQUFHLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksY0FBRyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLGNBQUcsQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxjQUFHLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksY0FBRyxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLGNBQUcsQ0FBQyxNQUFNLEVBQUU7WUFDaEssZUFBTSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQ3hDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLE1BQU0sRUFBRTtnQkFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDOUI7aUJBQ0k7Z0JBQ0QseUNBQXlDO2dCQUN6Qyx5Q0FBeUM7Z0JBQ3pDLGNBQWM7Z0JBQ2QsSUFBSTtnQkFDSixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3ZCO1NBQ0o7YUFDSSxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksY0FBRyxDQUFDLEtBQUssRUFBRTtZQUM3QixPQUFPLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQzlCO2lCQUNJO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDdkI7WUFDRCxlQUFNLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDM0M7YUFDSSxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksY0FBRyxDQUFDLFlBQVksSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLGNBQUcsQ0FBQyxTQUFTLEVBQUU7WUFDbEUsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDM0I7YUFDSSxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksY0FBRyxDQUFDLFFBQVEsRUFBRTtZQUNoQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksTUFBTSxFQUFFO2dCQUNyRixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDckM7U0FDSjtJQUNMLENBQUM7SUFDRCx3QkFBd0I7SUFFeEIseUJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFFO1lBQ2xELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDNUY7SUFDTCxDQUFDO0lBRUQsd0JBQUssR0FBTDtRQUNJLDhDQUE4QztRQUM5QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLFdBQVcsRUFBRTtZQUVwRCxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNsQyx1RUFBdUU7WUFDdkUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLHFCQUFxQixDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDeEQsT0FBTztTQUNWO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxTQUFTLEVBQUU7WUFDbEQsdURBQXVEO1lBQ3ZELHlDQUF5QztZQUN6QyxNQUFNO1lBRU4sT0FBTztTQUNWO1FBQ0QsSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxFQUFFLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksR0FBRyxFQUFFO1lBQ3JFLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3pELENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtTQUNaO2FBQ0ksSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDckM7YUFDSSxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUUsRUFBRTtZQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNyQzthQUNJLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksR0FBRyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3pELENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDO1NBQ25CO0lBQ0wsQ0FBQztJQXBJZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVJNUI7SUFBRCxlQUFDO0NBdklELEFBdUlDLENBdklxQyxFQUFFLENBQUMsU0FBUyxHQXVJakQ7a0JBdklvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuaW1wb3J0IHsgdGFnIH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db25zdGFudFwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBwcml2YXRlIF9yaWdpZEJvZHk6IGNjLlJpZ2lkQm9keSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNvaW5TcDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnQucGFyZW50LnBhcmVudC5uYW1lID09IFwiY29pbk1nclwiKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAob3RoZXIudGFnID09IHRhZy50aG9ybikge1xyXG4gICAgICAgICAgICAgICAgY29udGFjdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheU1ldGFsU3RvbmVFZmZlY3QyKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb2Nvc3ouZ2FtZU1nci5jb2luTnVtKys7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY29pblNwKTtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJlbnQgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5wYXJlbnQucGFyZW50LmdldENoaWxkQnlOYW1lKFwicmV3YXJkTGV2ZWxcIikuZ2V0Q2hpbGRCeU5hbWUoXCJDb2luXCIpO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGMgPSBwYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJnb2xkXCIpXHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2cocGFyZW50KTtcclxuICAgICAgICAgICAgICAgIGxldCBzc3MgPSB0aGlzLmNvaW5TcC5wYXJlbnQuZ2V0UG9zaXRpb24oKVxyXG4gICAgICAgICAgICAgICAgLy8gbGV0IHBvcyA9IHBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoc3NzLnggLSB0aGlzLm5vZGUucGFyZW50LnBhcmVudC54LHNzcy55IC0gdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQueSwpKTtcclxuICAgICAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLmNvaW5TcC5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcclxuICAgICAgICAgICAgICAgIGxldCBwcCA9IHBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3MpXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHBwKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSAwLjU7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2cocG9zLngsIHBvcy55LCBwcC54LCBwcC55KVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgcG9zID0gdGhpcy5nb2xkLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5jb2luU3AuZ2V0UG9zaXRpb24oKSk7XHJcbiAgICAgICAgICAgICAgICBjb2Nvc3ouZGF0YU1nci5Db2luQ291bnQgKz0gMTA7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJudW1cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjb2Nvc3ouZGF0YU1nci5Db2luQ291bnQudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIGxldCBwb3MyID0gY2MudjIoLXBwLnggLSAxOS43NjYsIC1wcC55ICsgMy44NjYpXHJcblxyXG4gICAgICAgICAgICAgICAgY2MudHdlZW4obm9kZSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnBhcmFsbGVsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLmJ5KDEsIHsgeDogcG9zMi54IH0sIHsgZWFzaW5nOiAnc2luZU91dCcgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy50d2VlbigpLmJ5KDAuMywgeyB5OiAtNTAgfSwgeyBlYXNpbmc6ICdzaW5lT3V0JyB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKCkuYnkoMC43LCB7IHk6IHBvczIueSArIDUwIH0sIHsgZWFzaW5nOiAnc2luZU91dCcgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmRlbGF5KDEpXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAob3RoZXIudGFnID09IHRhZy5kZXNQb2ludCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnQucGFyZW50Lm5hbWUgPT0gXCJjYWN0dXM1XCIgfHwgdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQubmFtZSA9PSBcImNvaW5cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQucGFyZW50LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChvdGhlci50YWcgPT0gdGFnLnN0b25lIHx8IG90aGVyLnRhZyA9PSB0YWcuaG9uZXliZWUgfHwgb3RoZXIudGFnID09IHRhZy5mbG9vclRob3JuIHx8IG90aGVyLnRhZyA9PSB0YWcucmFpbiB8fCBvdGhlci50YWcgPT0gdGFnLmJhdCB8fCBvdGhlci50YWcgPT0gdGFnLmJpZ0Zhbikge1xyXG4gICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheU1ldGFsU3RvbmVFZmZlY3QyKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50Lm5hbWUgIT0gXCJwcm9wXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMzIpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChvdGhlci50YWcgPT0gdGFnLnRob3JuKSB7XHJcbiAgICAgICAgICAgIGNvbnRhY3QuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLnBhcmVudC5uYW1lICE9IFwicHJvcFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlNZXRhbFN0b25lRWZmZWN0MigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChvdGhlci50YWcgPT0gdGFnLnN1Y2NlZWRQb2ludCB8fCBvdGhlci50YWcgPT0gdGFnLmZhaWRQb2ludCkge1xyXG4gICAgICAgICAgICBjb250YWN0LmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAob3RoZXIudGFnID09IHRhZy5kZXNQb2ludCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLnBhcmVudC5wYXJlbnQubmFtZSA9PSBcImNhY3R1czVcIiB8fCB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5uYW1lID09IFwiY29pblwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5fcmlnaWRCb2R5ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50LnBhcmVudC5wYXJlbnQubmFtZSA9PSBcImNvaW5NZ3JcIikge1xyXG4gICAgICAgICAgICB0aGlzLmNvaW5TcCA9IHRoaXMubm9kZS5wYXJlbnQucGFyZW50LmdldENoaWxkQnlOYW1lKFwibmltaUNhY3R1c1wiKS5nZXRDaGlsZEJ5TmFtZShcImdvbGRcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gY2MubG9nKHRoaXMubm9kZS5wYXJlbnQucGFyZW50LnBhcmVudC5uYW1lKVxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50LnBhcmVudC5wYXJlbnQubmFtZSA9PSBcIlNjYWxlTm9kZVwiKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9yaWdpZEJvZHkuZ3Jhdml0eVNjYWxlID0gLTI7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLl9yaWdpZEJvZHkuZ3Jhdml0eVNjYWxlLCBcInRoaXMuX3JpZ2lkQm9keS5ncmF2aXR5U2NhbGVcIilcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpLmFwcGx5KClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ub2RlLnBhcmVudC5wYXJlbnQucGFyZW50Lm5hbWUgPT0gXCJjb2luTWdyXCIpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAvLyB9KSlcclxuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gNzYgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMzcpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmlnaWRCb2R5LmdyYXZpdHlTY2FsZSA9IC0yLjg7XHJcbiAgICAgICAgICAgIGxldCBhID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpO1xyXG4gICAgICAgICAgICBhLmFwcGx5KClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA4MSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yaWdpZEJvZHkuZ3Jhdml0eVNjYWxlID0gLTM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gOTApIHtcclxuICAgICAgICAgICAgdGhpcy5fcmlnaWRCb2R5LmdyYXZpdHlTY2FsZSA9IC00O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDExNSkge1xyXG4gICAgICAgICAgICB0aGlzLl9yaWdpZEJvZHkuZ3Jhdml0eVNjYWxlID0gLTY7XHJcbiAgICAgICAgICAgIGxldCBhID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpO1xyXG4gICAgICAgICAgICBhLmZyaWN0aW9uICs9IDU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19