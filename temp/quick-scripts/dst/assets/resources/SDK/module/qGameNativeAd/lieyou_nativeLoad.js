
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/module/qGameNativeAd/lieyou_nativeLoad.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '788f7qpajJBHq29dW8FJQQe', 'lieyou_nativeLoad');
// resources/SDK/module/qGameNativeAd/lieyou_nativeLoad.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {
    this.loadText = ["加载中", "加载中.", "加载中..", "加载中..."];
    this.loadLabel.string = this.loadText[0];
    this.nowTime = 0;
    this.schedule(this.refreshTime);
  },
  refreshTime: function refreshTime() {
    this.nowTime++;

    if (this.nowTime >= this.allTime) {
      this.unschedule(this.refreshTime);
      this.canTouch = true;
      this.loadLabel.node.active = false;
      this.callBack();
    }

    this.loadNode.getComponent(cc.Sprite).fillRange = this.nowTime / this.allTime;
    this.quanNode.getComponent(cc.Sprite).fillRange = 1 - this.nowTime / this.allTime;
    this.loadLabel.string = this.loadText[parseInt(this.nowTime / 20) % 4];
  },
  callBack: function callBack() {
    this.canTouch && this.closeCallBack && (this.closeCallBack(), this.node.destroy());
  } // update (dt) {},

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXG1vZHVsZVxccUdhbWVOYXRpdmVBZFxcbGlleW91X25hdGl2ZUxvYWQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsImxvYWRUZXh0IiwibG9hZExhYmVsIiwic3RyaW5nIiwibm93VGltZSIsInNjaGVkdWxlIiwicmVmcmVzaFRpbWUiLCJhbGxUaW1lIiwidW5zY2hlZHVsZSIsImNhblRvdWNoIiwibm9kZSIsImFjdGl2ZSIsImNhbGxCYWNrIiwibG9hZE5vZGUiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJmaWxsUmFuZ2UiLCJxdWFuTm9kZSIsInBhcnNlSW50IiwiY2xvc2VDYWxsQmFjayIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0xDLEVBQUFBLEtBUEssbUJBT0k7QUFDTCxTQUFLQyxRQUFMLEdBQWdCLENBQUMsS0FBRCxFQUFPLE1BQVAsRUFBYyxPQUFkLEVBQXNCLFFBQXRCLENBQWhCO0FBQ0EsU0FBS0MsU0FBTCxDQUFlQyxNQUFmLEdBQXdCLEtBQUtGLFFBQUwsQ0FBYyxDQUFkLENBQXhCO0FBQ0EsU0FBS0csT0FBTCxHQUFlLENBQWY7QUFDQSxTQUFLQyxRQUFMLENBQWMsS0FBS0MsV0FBbkI7QUFDSCxHQVpJO0FBYUxBLEVBQUFBLFdBYksseUJBYVE7QUFDVCxTQUFLRixPQUFMOztBQUNBLFFBQUcsS0FBS0EsT0FBTCxJQUFnQixLQUFLRyxPQUF4QixFQUFnQztBQUM1QixXQUFLQyxVQUFMLENBQWdCLEtBQUtGLFdBQXJCO0FBQ0EsV0FBS0csUUFBTCxHQUFnQixJQUFoQjtBQUNBLFdBQUtQLFNBQUwsQ0FBZVEsSUFBZixDQUFvQkMsTUFBcEIsR0FBNkIsS0FBN0I7QUFDQSxXQUFLQyxRQUFMO0FBQ0g7O0FBQ0QsU0FBS0MsUUFBTCxDQUFjQyxZQUFkLENBQTJCbEIsRUFBRSxDQUFDbUIsTUFBOUIsRUFBc0NDLFNBQXRDLEdBQWtELEtBQUtaLE9BQUwsR0FBYSxLQUFLRyxPQUFwRTtBQUNBLFNBQUtVLFFBQUwsQ0FBY0gsWUFBZCxDQUEyQmxCLEVBQUUsQ0FBQ21CLE1BQTlCLEVBQXNDQyxTQUF0QyxHQUFrRCxJQUFFLEtBQUtaLE9BQUwsR0FBYSxLQUFLRyxPQUF0RTtBQUNBLFNBQUtMLFNBQUwsQ0FBZUMsTUFBZixHQUF3QixLQUFLRixRQUFMLENBQWNpQixRQUFRLENBQUMsS0FBS2QsT0FBTCxHQUFhLEVBQWQsQ0FBUixHQUEwQixDQUF4QyxDQUF4QjtBQUNILEdBeEJJO0FBeUJMUSxFQUFBQSxRQXpCSyxzQkF5Qks7QUFDTixTQUFLSCxRQUFMLElBQWlCLEtBQUtVLGFBQXRCLEtBQXdDLEtBQUtBLGFBQUwsSUFBcUIsS0FBS1QsSUFBTCxDQUFVVSxPQUFWLEVBQTdEO0FBQ0gsR0EzQkksQ0E2Qkw7O0FBN0JLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubG9hZFRleHQgPSBbXCLliqDovb3kuK1cIixcIuWKoOi9veS4rS5cIixcIuWKoOi9veS4rS4uXCIsXCLliqDovb3kuK0uLi5cIl07XHJcbiAgICAgICAgdGhpcy5sb2FkTGFiZWwuc3RyaW5nID0gdGhpcy5sb2FkVGV4dFswXTtcclxuICAgICAgICB0aGlzLm5vd1RpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5yZWZyZXNoVGltZSk7XHJcbiAgICB9LFxyXG4gICAgcmVmcmVzaFRpbWUoKXtcclxuICAgICAgICB0aGlzLm5vd1RpbWUrKztcclxuICAgICAgICBpZih0aGlzLm5vd1RpbWUgPj0gdGhpcy5hbGxUaW1lKXtcclxuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMucmVmcmVzaFRpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNhblRvdWNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkTGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jYWxsQmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvYWROb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZSA9IHRoaXMubm93VGltZS90aGlzLmFsbFRpbWU7XHJcbiAgICAgICAgdGhpcy5xdWFuTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5maWxsUmFuZ2UgPSAxLXRoaXMubm93VGltZS90aGlzLmFsbFRpbWU7XHJcbiAgICAgICAgdGhpcy5sb2FkTGFiZWwuc3RyaW5nID0gdGhpcy5sb2FkVGV4dFtwYXJzZUludCh0aGlzLm5vd1RpbWUvMjApJTRdO1xyXG4gICAgfSxcclxuICAgIGNhbGxCYWNrKCl7XHJcbiAgICAgICAgdGhpcy5jYW5Ub3VjaCAmJiB0aGlzLmNsb3NlQ2FsbEJhY2sgJiYgKHRoaXMuY2xvc2VDYWxsQmFjaygpLHRoaXMubm9kZS5kZXN0cm95KCkpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==