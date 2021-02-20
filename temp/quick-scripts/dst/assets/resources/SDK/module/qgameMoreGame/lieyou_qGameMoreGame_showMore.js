
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/module/qgameMoreGame/lieyou_qGameMoreGame_showMore.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '903e4eCoItL05fwyjHtlS8F', 'lieyou_qGameMoreGame_showMore');
// resources/SDK/module/qgameMoreGame/lieyou_qGameMoreGame_showMore.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {},
  start: function start() {
    this.node.runAction(cc.repeatForever(cc.sequence(cc.rotateBy(0.03, -15), cc.rotateBy(0.03, 0), cc.rotateBy(0.03, 15), cc.rotateBy(0.03, 0), cc.rotateBy(0.03, -10), cc.rotateBy(0.03, 0), cc.rotateBy(0.03, 10), cc.rotateBy(0.03, 0), cc.rotateBy(0.03, -5), cc.rotateBy(0.03, 0), cc.rotateBy(0.03, 5), cc.rotateBy(0.03, 0), cc.delayTime(2 + Math.random() * 1))));
  },
  setData: function setData(callBack) {
    this._callBack = callBack;
  },
  callBack: function callBack() {
    cc.find('red', this.node).active = false;

    if (this._callBack) {
      this._callBack();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXG1vZHVsZVxccWdhbWVNb3JlR2FtZVxcbGlleW91X3FHYW1lTW9yZUdhbWVfc2hvd01vcmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJzdGFydCIsIm5vZGUiLCJydW5BY3Rpb24iLCJyZXBlYXRGb3JldmVyIiwic2VxdWVuY2UiLCJyb3RhdGVCeSIsImRlbGF5VGltZSIsIk1hdGgiLCJyYW5kb20iLCJzZXREYXRhIiwiY2FsbEJhY2siLCJfY2FsbEJhY2siLCJmaW5kIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MO0FBRUFDLEVBQUFBLE1BVEssb0JBU0ssQ0FFVCxDQVhJO0FBYUxDLEVBQUFBLEtBYkssbUJBYUk7QUFDTCxTQUFLQyxJQUFMLENBQVVDLFNBQVYsQ0FBb0JQLEVBQUUsQ0FBQ1EsYUFBSCxDQUFpQlIsRUFBRSxDQUFDUyxRQUFILENBQ2pDVCxFQUFFLENBQUNVLFFBQUgsQ0FBWSxJQUFaLEVBQWlCLENBQUMsRUFBbEIsQ0FEaUMsRUFDWFYsRUFBRSxDQUFDVSxRQUFILENBQVksSUFBWixFQUFpQixDQUFqQixDQURXLEVBQ1NWLEVBQUUsQ0FBQ1UsUUFBSCxDQUFZLElBQVosRUFBaUIsRUFBakIsQ0FEVCxFQUM4QlYsRUFBRSxDQUFDVSxRQUFILENBQVksSUFBWixFQUFpQixDQUFqQixDQUQ5QixFQUVqQ1YsRUFBRSxDQUFDVSxRQUFILENBQVksSUFBWixFQUFpQixDQUFDLEVBQWxCLENBRmlDLEVBRVhWLEVBQUUsQ0FBQ1UsUUFBSCxDQUFZLElBQVosRUFBaUIsQ0FBakIsQ0FGVyxFQUVTVixFQUFFLENBQUNVLFFBQUgsQ0FBWSxJQUFaLEVBQWlCLEVBQWpCLENBRlQsRUFFOEJWLEVBQUUsQ0FBQ1UsUUFBSCxDQUFZLElBQVosRUFBaUIsQ0FBakIsQ0FGOUIsRUFHakNWLEVBQUUsQ0FBQ1UsUUFBSCxDQUFZLElBQVosRUFBaUIsQ0FBQyxDQUFsQixDQUhpQyxFQUdaVixFQUFFLENBQUNVLFFBQUgsQ0FBWSxJQUFaLEVBQWlCLENBQWpCLENBSFksRUFHUVYsRUFBRSxDQUFDVSxRQUFILENBQVksSUFBWixFQUFpQixDQUFqQixDQUhSLEVBRzRCVixFQUFFLENBQUNVLFFBQUgsQ0FBWSxJQUFaLEVBQWlCLENBQWpCLENBSDVCLEVBSWpDVixFQUFFLENBQUNXLFNBQUgsQ0FBYSxJQUFJQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsQ0FBakMsQ0FKaUMsQ0FBakIsQ0FBcEI7QUFNSCxHQXBCSTtBQXFCTEMsRUFBQUEsT0FyQkssbUJBcUJHQyxRQXJCSCxFQXFCWTtBQUNiLFNBQUtDLFNBQUwsR0FBaUJELFFBQWpCO0FBQ0gsR0F2Qkk7QUF3QkxBLEVBQUFBLFFBeEJLLHNCQXdCSztBQUNOZixJQUFBQSxFQUFFLENBQUNpQixJQUFILENBQVEsS0FBUixFQUFjLEtBQUtYLElBQW5CLEVBQXlCWSxNQUF6QixHQUFrQyxLQUFsQzs7QUFDQSxRQUFHLEtBQUtGLFNBQVIsRUFBa0I7QUFDZCxXQUFLQSxTQUFMO0FBQ0g7QUFDSixHQTdCSSxDQStCTDs7QUEvQkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICBjYy5yb3RhdGVCeSgwLjAzLC0xNSksY2Mucm90YXRlQnkoMC4wMywwKSxjYy5yb3RhdGVCeSgwLjAzLDE1KSxjYy5yb3RhdGVCeSgwLjAzLDApLFxyXG4gICAgICAgICAgICBjYy5yb3RhdGVCeSgwLjAzLC0xMCksY2Mucm90YXRlQnkoMC4wMywwKSxjYy5yb3RhdGVCeSgwLjAzLDEwKSxjYy5yb3RhdGVCeSgwLjAzLDApLFxyXG4gICAgICAgICAgICBjYy5yb3RhdGVCeSgwLjAzLC01KSxjYy5yb3RhdGVCeSgwLjAzLDApLGNjLnJvdGF0ZUJ5KDAuMDMsNSksY2Mucm90YXRlQnkoMC4wMywwKSxcclxuICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDIgKyBNYXRoLnJhbmRvbSgpICogMSkpKVxyXG4gICAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgc2V0RGF0YShjYWxsQmFjayl7XHJcbiAgICAgICAgdGhpcy5fY2FsbEJhY2sgPSBjYWxsQmFjaztcclxuICAgIH0sXHJcbiAgICBjYWxsQmFjaygpe1xyXG4gICAgICAgIGNjLmZpbmQoJ3JlZCcsdGhpcy5ub2RlKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBpZih0aGlzLl9jYWxsQmFjayl7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbGxCYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==