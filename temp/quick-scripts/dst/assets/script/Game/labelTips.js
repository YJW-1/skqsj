
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/labelTips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3d873COnwJH6YOx2F1+90Xv', 'labelTips');
// script/Game/labelTips.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var labelTips = /** @class */ (function (_super) {
    __extends(labelTips, _super);
    function labelTips() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {
    // }
    labelTips.prototype.start = function () {
        var label = this.node.getComponent(cc.Label);
        var a = cc.tween().sequence(cc.tween().to(0.3, { scale: 1.1 }), cc.tween().to(0.3, { scale: 1 }), cc.tween().delay(2));
        cc.tween(this.node)
            .repeatForever(a)
            .start();
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 1) {
            if (this.node.name == "labelTips5") {
                label.string = "";
            }
            else if (this.node.name == "labelTips4") {
                label.string = "";
            }
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 2) {
            if (this.node.name == "labelTips4") {
                label.string = "小心仙人掌发射的刺，用东西挡住它吧";
            }
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 3) {
            if (this.node.name == "labelTips4") {
                label.string = "";
            }
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 4) {
            if (this.node.name == "labelTips4") {
                label.string = "小仙人掌也很危险，别让它碰到你的气球";
            }
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 5) {
            if (this.node.name == "labelTips4") {
                label.node.width = 200;
                label.string = "连锁导弹只有一个共同的红色开关，在启动之前可以先用挡板把主角保护起来";
            }
            if (this.node.name == "labelTips5") {
                label.node.width = 230;
                label.string = "当任意物品碰到蝙蝠时，蝙蝠会惊醒，进入暴走状态";
            }
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 6) {
            if (this.node.name == "labelTips4") {
                label.node.width = 230;
                label.string = "小心敌人手上的刀，试着用其他东西扎破他们的气球，比如上方的仙人掌";
            }
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 7) {
            if (this.node.name == "labelTips4") {
                label.node.width = 230;
                label.string = "点击木块可以让它碎掉";
            }
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 8) {
            if (this.node.name == "labelTips4") {
                label.node.width = 230;
                label.string = "请小心一切带刺的东西，在右边寻找有没有可以用上的东西";
            }
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 10) {
            if (this.node.name == "labelTips4") {
                label.node.width = 260;
                label.string = "";
            }
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 11) {
            if (this.node.name == "labelTips4") {
                label.node.width = 230;
                label.string = "留意木箱上的数字，你会发现这游戏很简单";
            }
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 9) {
            if (this.node.name == "labelTips4") {
                label.node.width = 260;
                label.string = "这么大个的石头，挡个仙人掌应该没问题吧";
            }
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 14) {
            if (this.node.name == "labelTips4") {
                label.node.width = 230;
                label.string = "倒计时结束前你必须行动起来，不然就会------砰";
            }
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 17) {
            if (this.node.name == "labelTips4") {
                label.node.width = 260;
                label.string = "纸箱可以保护气球";
            }
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 19) {
            if (this.node.name == "labelTips4") {
                label.node.width = 260;
                label.string = "试试用东西把激光挡住";
            }
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 20) {
            if (this.node.name == "labelTips4") {
                label.node.width = 230;
                label.string = "将导弹移动到合适的位置击败这只危险的蝙蝠";
            }
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 45) {
            if (this.node.name == "labelTips4") {
                label.node.width = 260;
                label.string = "这是一个可以移动的风扇";
            }
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 117) {
            if (this.node.name == "labelTips4") {
                label.node.width = 200;
                if (this.node.y == -174) {
                    label.string = "3 3 5";
                }
                else if (this.node.y == -230) {
                    label.string = "8 8 5";
                }
                else if (this.node.y == -293) {
                    label.string = "1 5 1";
                }
            }
            // if (this.node.name == "labelTips5") {
            //     label.node.width = 200;
            //     label.string = "1 5 1";
            // }
            // if (this.node.name == "labelTips3") {
            //     label.node.width = 200;
            //     label.string = "8 8 5";
            // }
        }
    };
    labelTips = __decorate([
        ccclass
    ], labelTips);
    return labelTips;
}(cc.Component));
exports.default = labelTips;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxsYWJlbFRpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUV2QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EOztJQXlKQSxDQUFDO0lBckpHLHdCQUF3QjtJQUV4QixjQUFjO0lBRWQsSUFBSTtJQUVKLHlCQUFLLEdBQUw7UUFDSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLFFBQVEsQ0FDdkIsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFDbEMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFDaEMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDdEIsQ0FBQTtRQUVELEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLGFBQWEsQ0FBQyxDQUFDLENBQUM7YUFDaEIsS0FBSyxFQUFFLENBQUE7UUFJWixJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtZQUNoQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFlBQVksRUFBRTtnQkFDaEMsS0FBSyxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7YUFDckI7aUJBRUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxZQUFZLEVBQUU7Z0JBQ3JDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2FBQ3JCO1NBQ0o7YUFFSSxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtZQUVyQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFlBQVksRUFBRTtnQkFDaEMsS0FBSyxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQzthQUN0QztTQUNKO2FBQ0ksSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7WUFDckMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxZQUFZLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2FBQ3JCO1NBQ0o7YUFDSSxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtZQUNyQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFlBQVksRUFBRTtnQkFDaEMsS0FBSyxDQUFDLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQzthQUN2QztTQUNKO2FBQ0ksSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7WUFDckMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxZQUFZLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDdkIsS0FBSyxDQUFDLE1BQU0sR0FBRyxvQ0FBb0MsQ0FBQzthQUN2RDtZQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksWUFBWSxFQUFFO2dCQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ3ZCLEtBQUssQ0FBQyxNQUFNLEdBQUcseUJBQXlCLENBQUM7YUFDNUM7U0FDSjthQUNJLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFO1lBQ3JDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksWUFBWSxFQUFFO2dCQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ3ZCLEtBQUssQ0FBQyxNQUFNLEdBQUcsa0NBQWtDLENBQUM7YUFDckQ7U0FDSjthQUNJLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFO1lBQ3JDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksWUFBWSxFQUFFO2dCQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ3ZCLEtBQUssQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO2FBQy9CO1NBQ0o7YUFDSSxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtZQUNyQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFlBQVksRUFBRTtnQkFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUN2QixLQUFLLENBQUMsTUFBTSxHQUFHLDRCQUE0QixDQUFDO2FBQy9DO1NBQ0o7YUFDSSxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUUsRUFBRTtZQUN0QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFlBQVksRUFBRTtnQkFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUN2QixLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQzthQUNyQjtTQUNKO2FBQ0ksSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxFQUFFLEVBQUU7WUFDdEMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxZQUFZLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDdkIsS0FBSyxDQUFDLE1BQU0sR0FBRyxxQkFBcUIsQ0FBQzthQUN4QztTQUNKO2FBQ0ksSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxDQUFDLEVBQUU7WUFDckMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxZQUFZLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDdkIsS0FBSyxDQUFDLE1BQU0sR0FBRyxxQkFBcUIsQ0FBQzthQUN4QztTQUNKO2FBQ0ksSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxFQUFFLEVBQUU7WUFDdEMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxZQUFZLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDdkIsS0FBSyxDQUFDLE1BQU0sR0FBRywyQkFBMkIsQ0FBQzthQUM5QztTQUNKO2FBQ0ksSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxFQUFFLEVBQUU7WUFDdEMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxZQUFZLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDdkIsS0FBSyxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7YUFDN0I7U0FDSjthQUNJLElBQUksZUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUksRUFBRSxFQUFFO1lBQ3RDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksWUFBWSxFQUFFO2dCQUNoQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ3ZCLEtBQUssQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO2FBQy9CO1NBQ0o7YUFDSSxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUUsRUFBRTtZQUN0QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFlBQVksRUFBRTtnQkFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUN2QixLQUFLLENBQUMsTUFBTSxHQUFHLHNCQUFzQixDQUFDO2FBQ3pDO1NBQ0o7YUFDSSxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUUsRUFBRTtZQUN0QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFlBQVksRUFBRTtnQkFDaEMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUN2QixLQUFLLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQzthQUNoQztTQUNKO2FBQ0ksSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxHQUFHLEVBQUU7WUFDdkMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxZQUFZLEVBQUU7Z0JBQ2hDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztnQkFDdkIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtvQkFDckIsS0FBSyxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7aUJBQzFCO3FCQUNJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBRTFCLEtBQUssQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO2lCQUMxQjtxQkFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUMxQixLQUFLLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztpQkFFMUI7YUFDSjtZQUNELHdDQUF3QztZQUN4Qyw4QkFBOEI7WUFDOUIsOEJBQThCO1lBQzlCLElBQUk7WUFDSix3Q0FBd0M7WUFDeEMsOEJBQThCO1lBQzlCLDhCQUE4QjtZQUM5QixJQUFJO1NBQ1A7SUFDTCxDQUFDO0lBdEpnQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBeUo3QjtJQUFELGdCQUFDO0NBekpELEFBeUpDLENBekpzQyxFQUFFLENBQUMsU0FBUyxHQXlKbEQ7a0JBekpvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsYWJlbFRpcHMgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHtcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgbGV0IGxhYmVsID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgbGV0IGEgPSBjYy50d2VlbigpLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuMywgeyBzY2FsZTogMS4xIH0pLFxyXG4gICAgICAgICAgICBjYy50d2VlbigpLnRvKDAuMywgeyBzY2FsZTogMSB9KSxcclxuICAgICAgICAgICAgY2MudHdlZW4oKS5kZWxheSgyKVxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKVxyXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihhKVxyXG4gICAgICAgICAgICAuc3RhcnQoKVxyXG5cclxuXHJcblxyXG4gICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDEpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09IFwibGFiZWxUaXBzNVwiKSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLm5vZGUubmFtZSA9PSBcImxhYmVsVGlwczRcIikge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAyKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLm5hbWUgPT0gXCJsYWJlbFRpcHM0XCIpIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IFwi5bCP5b+D5LuZ5Lq65o6M5Y+R5bCE55qE5Yi677yM55So5Lic6KW/5oyh5L2P5a6D5ZCnXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PSBcImxhYmVsVGlwczRcIikge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09IFwibGFiZWxUaXBzNFwiKSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIuWwj+S7meS6uuaOjOS5n+W+iOWNsemZqe+8jOWIq+iuqeWug+eisOWIsOS9oOeahOawlOeQg1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gNSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLm5hbWUgPT0gXCJsYWJlbFRpcHM0XCIpIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsLm5vZGUud2lkdGggPSAyMDA7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIui/numUgeWvvOW8ueWPquacieS4gOS4quWFseWQjOeahOe6ouiJsuW8gOWFs++8jOWcqOWQr+WKqOS5i+WJjeWPr+S7peWFiOeUqOaMoeadv+aKiuS4u+inkuS/neaKpOi1t+adpVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PSBcImxhYmVsVGlwczVcIikge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwubm9kZS53aWR0aCA9IDIzMDtcclxuICAgICAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IFwi5b2T5Lu75oSP54mp5ZOB56Kw5Yiw6J2Z6J2g5pe277yM6J2Z6J2g5Lya5oOK6YaS77yM6L+b5YWl5pq06LWw54q25oCBXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA2KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PSBcImxhYmVsVGlwczRcIikge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwubm9kZS53aWR0aCA9IDIzMDtcclxuICAgICAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IFwi5bCP5b+D5pWM5Lq65omL5LiK55qE5YiA77yM6K+V552A55So5YW25LuW5Lic6KW/5omO56C05LuW5Lus55qE5rCU55CD77yM5q+U5aaC5LiK5pa555qE5LuZ5Lq65o6MXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA3KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PSBcImxhYmVsVGlwczRcIikge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwubm9kZS53aWR0aCA9IDIzMDtcclxuICAgICAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IFwi54K55Ye75pyo5Z2X5Y+v5Lul6K6p5a6D56KO5o6JXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA4KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PSBcImxhYmVsVGlwczRcIikge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwubm9kZS53aWR0aCA9IDIzMDtcclxuICAgICAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IFwi6K+35bCP5b+D5LiA5YiH5bim5Yi655qE5Lic6KW/77yM5Zyo5Y+z6L655a+75om+5pyJ5rKh5pyJ5Y+v5Lul55So5LiK55qE5Lic6KW/XCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLm5hbWUgPT0gXCJsYWJlbFRpcHM0XCIpIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsLm5vZGUud2lkdGggPSAyNjA7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTEpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09IFwibGFiZWxUaXBzNFwiKSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5ub2RlLndpZHRoID0gMjMwO1xyXG4gICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gXCLnlZnmhI/mnKjnrrHkuIrnmoTmlbDlrZfvvIzkvaDkvJrlj5HnjrDov5nmuLjmiI/lvojnroDljZVcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09IFwibGFiZWxUaXBzNFwiKSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5ub2RlLndpZHRoID0gMjYwO1xyXG4gICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gXCLov5nkuYjlpKfkuKrnmoTnn7PlpLTvvIzmjKHkuKrku5nkurrmjozlupTor6XmsqHpl67popjlkKdcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDE0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PSBcImxhYmVsVGlwczRcIikge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwubm9kZS53aWR0aCA9IDIzMDtcclxuICAgICAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IFwi5YCS6K6h5pe257uT5p2f5YmN5L2g5b+F6aG76KGM5Yqo6LW35p2l77yM5LiN54S25bCx5LyaLS0tLS0t56CwXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxNykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLm5hbWUgPT0gXCJsYWJlbFRpcHM0XCIpIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsLm5vZGUud2lkdGggPSAyNjA7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIue6uOeuseWPr+S7peS/neaKpOawlOeQg1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09IFwibGFiZWxUaXBzNFwiKSB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5ub2RlLndpZHRoID0gMjYwO1xyXG4gICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gXCLor5Xor5XnlKjkuJzopb/miormv4DlhYnmjKHkvY9cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDIwKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PSBcImxhYmVsVGlwczRcIikge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwubm9kZS53aWR0aCA9IDIzMDtcclxuICAgICAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IFwi5bCG5a+85by556e75Yqo5Yiw5ZCI6YCC55qE5L2N572u5Ye76LSl6L+Z5Y+q5Y2x6Zmp55qE6J2Z6J2gXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSA0NSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLm5hbWUgPT0gXCJsYWJlbFRpcHM0XCIpIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsLm5vZGUud2lkdGggPSAyNjA7XHJcbiAgICAgICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIui/meaYr+S4gOS4quWPr+S7peenu+WKqOeahOmjjuaJh1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTE3KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmFtZSA9PSBcImxhYmVsVGlwczRcIikge1xyXG4gICAgICAgICAgICAgICAgbGFiZWwubm9kZS53aWR0aCA9IDIwMDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGUueSA9PSAtMTc0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gXCIzIDMgNVwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5ub2RlLnkgPT0gLTIzMCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIjggOCA1XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0aGlzLm5vZGUueSA9PSAtMjkzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gXCIxIDUgMVwiO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5ub2RlLm5hbWUgPT0gXCJsYWJlbFRpcHM1XCIpIHtcclxuICAgICAgICAgICAgLy8gICAgIGxhYmVsLm5vZGUud2lkdGggPSAyMDA7XHJcbiAgICAgICAgICAgIC8vICAgICBsYWJlbC5zdHJpbmcgPSBcIjEgNSAxXCI7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMubm9kZS5uYW1lID09IFwibGFiZWxUaXBzM1wiKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBsYWJlbC5ub2RlLndpZHRoID0gMjAwO1xyXG4gICAgICAgICAgICAvLyAgICAgbGFiZWwuc3RyaW5nID0gXCI4IDggNVwiO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19