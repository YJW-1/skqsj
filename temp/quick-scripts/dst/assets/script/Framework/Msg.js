
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/Msg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7270foc8ylLw6nOo+FJatcg', 'Msg');
// script/Framework/Msg.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Msg = /** @class */ (function () {
    function Msg() {
    }
    Msg_1 = Msg;
    Msg.Show = function (msg) {
        if (msg === void 0) { msg = null; }
        // if (!this.isShow) {
        cc.loader.loadRes(this.tipsPanelPrefab, function (err, res) {
            if (!err) {
                var node_1 = cc.instantiate(res);
                if (node_1) {
                    Msg_1.isShow = true;
                    Msg_1.isTouch = false;
                    cc.director.getScene().addChild(node_1, 10000);
                    // node.position = cc.v2(cc.winSize.width / 2, cc.winSize.height / 2-50);
                    node_1.x = cc.winSize.width / 2;
                    node_1.y = cc.winSize.height - 150;
                    var label = cc.find("TipLabel", node_1).getComponent(cc.Label);
                    if (msg) {
                        label.string = msg;
                    }
                    // node.scale = 0;
                    // cocosz.gameMgr.tweeNode(node);
                    // label.scheduleOnce(() => {
                    //     node.destroy();
                    //     Msg.isShow = false;
                    // }, 1.5);
                    node_1.opacity = 0;
                    // node.y -= 50;
                    cc.tween(node_1)
                        .by(0.5, { opacity: 255, position: cc.v2(0, 50) })
                        .delay(1.5)
                        .by(0.5, { opacity: 0, position: cc.v2(0, 50) })
                        .call(function () {
                        node_1.destroy();
                        Msg_1.isShow = false;
                    })
                        .start();
                    // node.active = true;
                    // let anim = node.getComponent(cc.Animation);
                    // cc.log("-----------", anim)
                    // anim.play();
                }
            }
            else {
                cc.log("提示面板显示失败!", err);
            }
        });
        // } else {
        //     if (!Msg.isTouch) {
        //         Msg.isTouch = true;
        //         cocosz.scheduleOnce(() => {
        //             Msg.isShow = false;
        //         }, 1.5);
        //     }
        // }
    };
    var Msg_1;
    Msg.tipsPanelPrefab = "ui/Tip";
    Msg.isShow = false;
    Msg.isTouch = false;
    Msg.tipsList = [];
    Msg = Msg_1 = __decorate([
        ccclass
    ], Msg);
    return Msg;
}());
exports.default = Msg;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXE1zZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFBO0lBcUVBLENBQUM7WUFyRW9CLEdBQUc7SUFZTixRQUFJLEdBQWxCLFVBQW1CLEdBQWtCO1FBQWxCLG9CQUFBLEVBQUEsVUFBa0I7UUFDakMsc0JBQXNCO1FBQ3RCLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztZQUM3QyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNOLElBQUksTUFBSSxHQUFZLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hDLElBQUksTUFBSSxFQUFFO29CQUNOLEtBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUVsQixLQUFHLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDcEIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUM3Qyx5RUFBeUU7b0JBQ3pFLE1BQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBO29CQUM3QixNQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQTtvQkFDaEMsSUFBSSxLQUFLLEdBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsTUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdkUsSUFBSSxHQUFHLEVBQUU7d0JBQ0wsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7cUJBQ3RCO29CQUtELGtCQUFrQjtvQkFDbEIsaUNBQWlDO29CQUNqQyw2QkFBNkI7b0JBQzdCLHNCQUFzQjtvQkFDdEIsMEJBQTBCO29CQUMxQixXQUFXO29CQUNYLE1BQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO29CQUNqQixnQkFBZ0I7b0JBQ2hCLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBSSxDQUFDO3lCQUNULEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO3lCQUNqRCxLQUFLLENBQUMsR0FBRyxDQUFDO3lCQUNWLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO3lCQUMvQyxJQUFJLENBQUM7d0JBQ0YsTUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO3dCQUNmLEtBQUcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO29CQUN2QixDQUFDLENBQUM7eUJBQ0QsS0FBSyxFQUFFLENBQUE7b0JBRVosc0JBQXNCO29CQUN0Qiw4Q0FBOEM7b0JBQzlDLDhCQUE4QjtvQkFDOUIsZUFBZTtpQkFDbEI7YUFDSjtpQkFBTTtnQkFDSCxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUM1QjtRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsV0FBVztRQUNYLDBCQUEwQjtRQUMxQiw4QkFBOEI7UUFDOUIsc0NBQXNDO1FBQ3RDLGtDQUFrQztRQUNsQyxtQkFBbUI7UUFDbkIsUUFBUTtRQUNSLElBQUk7SUFDUixDQUFDOztJQWxFYyxtQkFBZSxHQUFXLFFBQVEsQ0FBQztJQUVuQyxVQUFNLEdBQVksS0FBSyxDQUFDO0lBRXhCLFdBQU8sR0FBWSxLQUFLLENBQUM7SUFHekIsWUFBUSxHQUFRLEVBQUUsQ0FBQztJQVRqQixHQUFHO1FBRHZCLE9BQU87T0FDYSxHQUFHLENBcUV2QjtJQUFELFVBQUM7Q0FyRUQsQUFxRUMsSUFBQTtrQkFyRW9CLEdBQUciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi9Db2Nvc1pcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNc2cge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHRpcHNQYW5lbFByZWZhYjogc3RyaW5nID0gXCJ1aS9UaXBcIjtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpc1Nob3c6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBpc1RvdWNoOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHRpcHNMaXN0OiBhbnkgPSBbXTtcclxuXHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBTaG93KG1zZzogc3RyaW5nID0gbnVsbCkge1xyXG4gICAgICAgIC8vIGlmICghdGhpcy5pc1Nob3cpIHtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyh0aGlzLnRpcHNQYW5lbFByZWZhYiwgKGVyciwgcmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIE1zZy5pc1Nob3cgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBNc2cuaXNUb3VjaCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQobm9kZSwgMTAwMDApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vZGUucG9zaXRpb24gPSBjYy52MihjYy53aW5TaXplLndpZHRoIC8gMiwgY2Mud2luU2l6ZS5oZWlnaHQgLyAyLTUwKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnggPSBjYy53aW5TaXplLndpZHRoIC8gMlxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUueSA9IGNjLndpblNpemUuaGVpZ2h0IC0gMTUwXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhYmVsOiBjYy5MYWJlbCA9IGNjLmZpbmQoXCJUaXBMYWJlbFwiLCBub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtc2cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gbXNnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm9kZS5zY2FsZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29jb3N6LmdhbWVNZ3IudHdlZU5vZGUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGFiZWwuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIE1zZy5pc1Nob3cgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9LCAxLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm9kZS55IC09IDUwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ieSgwLjUsIHsgb3BhY2l0eTogMjU1LCBwb3NpdGlvbjogY2MudjIoMCwgNTApIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5kZWxheSgxLjUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ieSgwLjUsIHsgb3BhY2l0eTogMCwgcG9zaXRpb246IGNjLnYyKDAsIDUwKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1zZy5pc1Nob3cgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0YXJ0KClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBhbmltID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coXCItLS0tLS0tLS0tLVwiLCBhbmltKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFuaW0ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKFwi5o+Q56S66Z2i5p2/5pi+56S65aSx6LSlIVwiLCBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgaWYgKCFNc2cuaXNUb3VjaCkge1xyXG4gICAgICAgIC8vICAgICAgICAgTXNnLmlzVG91Y2ggPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICAgICAgY29jb3N6LnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgTXNnLmlzU2hvdyA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAgICAgfSwgMS41KTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufSJdfQ==