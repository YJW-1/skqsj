
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/limit3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1431mCQeNKs4jMVZwI6b3P', 'limit3');
// script/Game/limit3.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var limit = /** @class */ (function (_super) {
    __extends(limit, _super);
    function limit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.num = 0;
        _this.label = null;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    limit.prototype.onLoad = function () {
        this.label = this.node.getChildByName("num").getComponent(cc.Label);
    };
    limit.prototype.start = function () {
        if (this.node.name == "limit3") {
            this.num = 20;
        }
        else if (this.node.name == "limit4") {
            this.num = 100;
        }
    };
    limit.prototype.update = function (dt) {
        if (this.num > 0) {
            // cc.log(this.label);
            this.label.string = Math.ceil(this.num).toString();
            this.num -= dt;
            if (this.num <= 0) {
                this.label.string = "0";
                var floor = this.node.parent.getChildByName("floor5");
                if (floor) {
                    cc.tween(floor)
                        .by(0.5, { position: cc.v2(-130, 0) })
                        .start();
                    return;
                }
                floor = this.node.parent.getChildByName("floor22");
                if (floor) {
                    cc.tween(floor)
                        .by(0.5, { position: cc.v2(-130, 0) })
                        .start();
                    return;
                }
            }
        }
    };
    limit = __decorate([
        ccclass
    ], limit);
    return limit;
}(cc.Component));
exports.default = limit;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxsaW1pdDMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBbUMseUJBQVk7SUFEL0M7UUFBQSxxRUFpREM7UUE5Q0csU0FBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixXQUFLLEdBQWEsSUFBSSxDQUFDOztJQTZDM0IsQ0FBQztJQTVDRyx3QkFBd0I7SUFFeEIsc0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQscUJBQUssR0FBTDtRQUNJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksUUFBUSxFQUFFO1lBQzVCLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1NBQ2pCO2FBQ0ksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLEVBQUU7WUFDakMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDbEI7SUFHTCxDQUFDO0lBRUQsc0JBQU0sR0FBTixVQUFPLEVBQUU7UUFFTCxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQ2Qsc0JBQXNCO1lBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ25ELElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDO1lBQ2YsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRTtnQkFDZixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQ3hCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxLQUFLLEVBQUU7b0JBQ1AsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7eUJBQ1YsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7eUJBQ3JDLEtBQUssRUFBRSxDQUFBO29CQUNaLE9BQU87aUJBQ1Y7Z0JBQ0QsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxLQUFLLEVBQUU7b0JBQ1AsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7eUJBQ1YsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7eUJBQ3JDLEtBQUssRUFBRSxDQUFBO29CQUNaLE9BQU87aUJBQ1Y7YUFDSjtTQUNKO0lBRUwsQ0FBQztJQTlDZ0IsS0FBSztRQUR6QixPQUFPO09BQ2EsS0FBSyxDQWdEekI7SUFBRCxZQUFDO0NBaERELEFBZ0RDLENBaERrQyxFQUFFLENBQUMsU0FBUyxHQWdEOUM7a0JBaERvQixLQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsaW1pdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgbnVtOiBudW1iZXIgPSAwO1xyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmxhYmVsID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibnVtXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5uYW1lID09IFwibGltaXQzXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5udW0gPSAyMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5ub2RlLm5hbWUgPT0gXCJsaW1pdDRcIikge1xyXG4gICAgICAgICAgICB0aGlzLm51bSA9IDEwMDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMubnVtID4gMCkge1xyXG4gICAgICAgICAgICAvLyBjYy5sb2codGhpcy5sYWJlbCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gTWF0aC5jZWlsKHRoaXMubnVtKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLm51bSAtPSBkdDtcclxuICAgICAgICAgICAgaWYgKHRoaXMubnVtIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICBsZXQgZmxvb3IgPSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwiZmxvb3I1XCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZsb29yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oZmxvb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5ieSgwLjUsIHsgcG9zaXRpb246IGNjLnYyKC0xMzAsIDApIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdGFydCgpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZmxvb3IgPSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwiZmxvb3IyMlwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChmbG9vcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGZsb29yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYnkoMC41LCB7IHBvc2l0aW9uOiBjYy52MigtMTMwLCAwKSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==