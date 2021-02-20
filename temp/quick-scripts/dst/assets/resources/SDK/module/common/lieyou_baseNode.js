
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/module/common/lieyou_baseNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5e4b0q9RylJ0I7lzGLnojhZ', 'lieyou_baseNode');
// resources/SDK/module/common/lieyou_baseNode.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {},
  onEnable: function onEnable() {
    if (this.enableCallBack) {
      this.enableCallBack();
    }
  },
  onDisable: function onDisable() {
    if (this.destroyCallBack) {
      this.destroyCallBack();
    }
  },
  update: function update(dt) {
    this.updateCallBack && this.updateCallBack();
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXG1vZHVsZVxcY29tbW9uXFxsaWV5b3VfYmFzZU5vZGUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsIm9uRW5hYmxlIiwiZW5hYmxlQ2FsbEJhY2siLCJvbkRpc2FibGUiLCJkZXN0cm95Q2FsbEJhY2siLCJ1cGRhdGUiLCJkdCIsInVwZGF0ZUNhbGxCYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MQyxFQUFBQSxLQVBLLG1CQU9JLENBRVIsQ0FUSTtBQVVMQyxFQUFBQSxRQVZLLHNCQVVLO0FBQ04sUUFBRyxLQUFLQyxjQUFSLEVBQXVCO0FBQ25CLFdBQUtBLGNBQUw7QUFDSDtBQUNKLEdBZEk7QUFlTEMsRUFBQUEsU0FmSyx1QkFlTTtBQUNQLFFBQUcsS0FBS0MsZUFBUixFQUF3QjtBQUNwQixXQUFLQSxlQUFMO0FBQ0g7QUFDSixHQW5CSTtBQXFCTEMsRUFBQUEsTUFyQkssa0JBcUJHQyxFQXJCSCxFQXFCTztBQUNSLFNBQUtDLGNBQUwsSUFBcUIsS0FBS0EsY0FBTCxFQUFyQjtBQUNIO0FBdkJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlKCl7XHJcbiAgICAgICAgaWYodGhpcy5lbmFibGVDYWxsQmFjayl7XHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlQ2FsbEJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25EaXNhYmxlKCl7XHJcbiAgICAgICAgaWYodGhpcy5kZXN0cm95Q2FsbEJhY2spe1xyXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3lDYWxsQmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlIChkdCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2FsbEJhY2smJnRoaXMudXBkYXRlQ2FsbEJhY2soKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=