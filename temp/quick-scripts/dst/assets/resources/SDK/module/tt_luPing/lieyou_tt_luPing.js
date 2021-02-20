
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/module/tt_luPing/lieyou_tt_luPing.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70aa2tTD9JEYKnnRdCxm5Y+', 'lieyou_tt_luPing');
// resources/SDK/module/tt_luPing/lieyou_tt_luPing.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {
    this.bNode = cc.find('luPingBegin', this.node);
    this.eNode = cc.find('luPingEnd', this.node);
    this.luPing = false;
    var node = cc.find('luPingEnd/luPingEnd2', this.node);
    node.runAction(cc.repeatForever(cc.sequence(cc.fadeOut(0.4), cc.fadeIn(0.4))));
  },
  setColor: function setColor() {
    var _this = this;

    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'black';
    var luPingBeginUrl = 'tt/luPingBegin';
    var luPingEndUrl = 'tt/luPingEnd';

    if (color == 'white') {
      luPingBeginUrl = 'tt/luPingBeginB';
      luPingEndUrl = 'tt/luPingEndB';
    }

    lieyou_load(luPingBeginUrl, function (err, texture) {
      cc.find('luPingBegin', _this.node).getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });
    lieyou_load(luPingEndUrl, function (err, texture) {
      cc.find('luPingEnd', _this.node).getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });
  },
  setData: function setData(callBack) {
    this._callBack = callBack;
  },
  callBack: function callBack() {
    var self = this;
    this.luPing = !this.luPing;

    if (this.luPing) {
      lieyou_SdkManager.beginLuPing(30, function (type) {
        if (self._callBack) {
          self._callBack(type);
        }
      });
      this.bNode.active = false;
      this.eNode.active = true;
    } else {
      lieyou_SdkManager.stopLuPing();
      this.bNode.active = true;
      this.eNode.active = false;
    }
  },
  stop: function stop() {
    this.luPing = false;
    this.bNode.active = true;
    this.eNode.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXG1vZHVsZVxcdHRfbHVQaW5nXFxsaWV5b3VfdHRfbHVQaW5nLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3RhcnQiLCJiTm9kZSIsImZpbmQiLCJub2RlIiwiZU5vZGUiLCJsdVBpbmciLCJydW5BY3Rpb24iLCJyZXBlYXRGb3JldmVyIiwic2VxdWVuY2UiLCJmYWRlT3V0IiwiZmFkZUluIiwic2V0Q29sb3IiLCJjb2xvciIsImx1UGluZ0JlZ2luVXJsIiwibHVQaW5nRW5kVXJsIiwibGlleW91X2xvYWQiLCJlcnIiLCJ0ZXh0dXJlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsInNldERhdGEiLCJjYWxsQmFjayIsIl9jYWxsQmFjayIsInNlbGYiLCJsaWV5b3VfU2RrTWFuYWdlciIsImJlZ2luTHVQaW5nIiwidHlwZSIsImFjdGl2ZSIsInN0b3BMdVBpbmciLCJzdG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQUtMQyxFQUFBQSxLQUxLLG1CQUtJO0FBQ0wsU0FBS0MsS0FBTCxHQUFhTCxFQUFFLENBQUNNLElBQUgsQ0FBUSxhQUFSLEVBQXNCLEtBQUtDLElBQTNCLENBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWFSLEVBQUUsQ0FBQ00sSUFBSCxDQUFRLFdBQVIsRUFBb0IsS0FBS0MsSUFBekIsQ0FBYjtBQUNBLFNBQUtFLE1BQUwsR0FBYyxLQUFkO0FBQ0EsUUFBSUYsSUFBSSxHQUFHUCxFQUFFLENBQUNNLElBQUgsQ0FBUSxzQkFBUixFQUErQixLQUFLQyxJQUFwQyxDQUFYO0FBQ0FBLElBQUFBLElBQUksQ0FBQ0csU0FBTCxDQUFlVixFQUFFLENBQUNXLGFBQUgsQ0FBaUJYLEVBQUUsQ0FBQ1ksUUFBSCxDQUFZWixFQUFFLENBQUNhLE9BQUgsQ0FBVyxHQUFYLENBQVosRUFBNEJiLEVBQUUsQ0FBQ2MsTUFBSCxDQUFVLEdBQVYsQ0FBNUIsQ0FBakIsQ0FBZjtBQUNILEdBWEk7QUFZTEMsRUFBQUEsUUFaSyxzQkFZb0I7QUFBQTs7QUFBQSxRQUFoQkMsS0FBZ0IsdUVBQVIsT0FBUTtBQUNyQixRQUFJQyxjQUFjLEdBQUcsZ0JBQXJCO0FBQ0EsUUFBSUMsWUFBWSxHQUFHLGNBQW5COztBQUNBLFFBQUdGLEtBQUssSUFBSSxPQUFaLEVBQW9CO0FBQ2hCQyxNQUFBQSxjQUFjLEdBQUcsaUJBQWpCO0FBQ0FDLE1BQUFBLFlBQVksR0FBRyxlQUFmO0FBQ0g7O0FBQ0RDLElBQUFBLFdBQVcsQ0FBQ0YsY0FBRCxFQUFpQixVQUFDRyxHQUFELEVBQU1DLE9BQU4sRUFBa0I7QUFDMUNyQixNQUFBQSxFQUFFLENBQUNNLElBQUgsQ0FBUSxhQUFSLEVBQXNCLEtBQUksQ0FBQ0MsSUFBM0IsRUFBaUNlLFlBQWpDLENBQThDdEIsRUFBRSxDQUFDdUIsTUFBakQsRUFBeURDLFdBQXpELEdBQXVFLElBQUl4QixFQUFFLENBQUN5QixXQUFQLENBQW1CSixPQUFuQixDQUF2RTtBQUNILEtBRlUsQ0FBWDtBQUdBRixJQUFBQSxXQUFXLENBQUNELFlBQUQsRUFBZSxVQUFDRSxHQUFELEVBQU1DLE9BQU4sRUFBa0I7QUFDeENyQixNQUFBQSxFQUFFLENBQUNNLElBQUgsQ0FBUSxXQUFSLEVBQW9CLEtBQUksQ0FBQ0MsSUFBekIsRUFBK0JlLFlBQS9CLENBQTRDdEIsRUFBRSxDQUFDdUIsTUFBL0MsRUFBdURDLFdBQXZELEdBQXFFLElBQUl4QixFQUFFLENBQUN5QixXQUFQLENBQW1CSixPQUFuQixDQUFyRTtBQUNILEtBRlUsQ0FBWDtBQUdILEdBekJJO0FBMEJMSyxFQUFBQSxPQTFCSyxtQkEwQkdDLFFBMUJILEVBMEJZO0FBQ2IsU0FBS0MsU0FBTCxHQUFpQkQsUUFBakI7QUFDSCxHQTVCSTtBQTZCTEEsRUFBQUEsUUE3Qkssc0JBNkJLO0FBQ04sUUFBSUUsSUFBSSxHQUFHLElBQVg7QUFDQSxTQUFLcEIsTUFBTCxHQUFjLENBQUMsS0FBS0EsTUFBcEI7O0FBQ0EsUUFBRyxLQUFLQSxNQUFSLEVBQWU7QUFDWHFCLE1BQUFBLGlCQUFpQixDQUFDQyxXQUFsQixDQUE4QixFQUE5QixFQUFpQyxVQUFTQyxJQUFULEVBQWM7QUFDM0MsWUFBR0gsSUFBSSxDQUFDRCxTQUFSLEVBQWtCO0FBQ2RDLFVBQUFBLElBQUksQ0FBQ0QsU0FBTCxDQUFlSSxJQUFmO0FBQ0g7QUFFSixPQUxEO0FBTUEsV0FBSzNCLEtBQUwsQ0FBVzRCLE1BQVgsR0FBb0IsS0FBcEI7QUFDQSxXQUFLekIsS0FBTCxDQUFXeUIsTUFBWCxHQUFvQixJQUFwQjtBQUVILEtBVkQsTUFVSztBQUNESCxNQUFBQSxpQkFBaUIsQ0FBQ0ksVUFBbEI7QUFDQSxXQUFLN0IsS0FBTCxDQUFXNEIsTUFBWCxHQUFvQixJQUFwQjtBQUNBLFdBQUt6QixLQUFMLENBQVd5QixNQUFYLEdBQW9CLEtBQXBCO0FBQ0g7QUFDSixHQS9DSTtBQWlETEUsRUFBQUEsSUFqREssa0JBaURDO0FBQ0YsU0FBSzFCLE1BQUwsR0FBYyxLQUFkO0FBQ0EsU0FBS0osS0FBTCxDQUFXNEIsTUFBWCxHQUFvQixJQUFwQjtBQUNBLFNBQUt6QixLQUFMLENBQVd5QixNQUFYLEdBQW9CLEtBQXBCO0FBQ0gsR0FyREksQ0F1REw7O0FBdkRLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgfSxcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmJOb2RlID0gY2MuZmluZCgnbHVQaW5nQmVnaW4nLHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5lTm9kZSA9IGNjLmZpbmQoJ2x1UGluZ0VuZCcsdGhpcy5ub2RlKTtcclxuICAgICAgICB0aGlzLmx1UGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBub2RlID0gY2MuZmluZCgnbHVQaW5nRW5kL2x1UGluZ0VuZDInLHRoaXMubm9kZSk7XHJcbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShjYy5mYWRlT3V0KDAuNCksY2MuZmFkZUluKDAuNCkpKSk7XHJcbiAgICB9LFxyXG4gICAgc2V0Q29sb3IoY29sb3IgPSAnYmxhY2snKXtcclxuICAgICAgICB2YXIgbHVQaW5nQmVnaW5VcmwgPSAndHQvbHVQaW5nQmVnaW4nO1xyXG4gICAgICAgIHZhciBsdVBpbmdFbmRVcmwgPSAndHQvbHVQaW5nRW5kJztcclxuICAgICAgICBpZihjb2xvciA9PSAnd2hpdGUnKXtcclxuICAgICAgICAgICAgbHVQaW5nQmVnaW5VcmwgPSAndHQvbHVQaW5nQmVnaW5CJztcclxuICAgICAgICAgICAgbHVQaW5nRW5kVXJsID0gJ3R0L2x1UGluZ0VuZEInO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaWV5b3VfbG9hZChsdVBpbmdCZWdpblVybCwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICBjYy5maW5kKCdsdVBpbmdCZWdpbicsdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsaWV5b3VfbG9hZChsdVBpbmdFbmRVcmwsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgY2MuZmluZCgnbHVQaW5nRW5kJyx0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNldERhdGEoY2FsbEJhY2spe1xyXG4gICAgICAgIHRoaXMuX2NhbGxCYWNrID0gY2FsbEJhY2s7XHJcbiAgICB9LFxyXG4gICAgY2FsbEJhY2soKXtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5sdVBpbmcgPSAhdGhpcy5sdVBpbmc7XHJcbiAgICAgICAgaWYodGhpcy5sdVBpbmcpe1xyXG4gICAgICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5iZWdpbkx1UGluZygzMCxmdW5jdGlvbih0eXBlKXtcclxuICAgICAgICAgICAgICAgIGlmKHNlbGYuX2NhbGxCYWNrKXtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9jYWxsQmFjayh0eXBlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5iTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5lTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuc3RvcEx1UGluZygpO1xyXG4gICAgICAgICAgICB0aGlzLmJOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzdG9wKCl7XHJcbiAgICAgICAgdGhpcy5sdVBpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmJOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5lTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=