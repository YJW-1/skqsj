
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/scripts/XiaoMiManagerH5.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e8efa5qm05PZJwnd3h3jfc5', 'XiaoMiManagerH5');
// resources/SDK/scripts/XiaoMiManagerH5.js

"use strict";

//加在index.html </body>上一行 
//<script type="text/javascript"  src="https://static.g.mi.com/game/h5sdk/h5-dj-sdk-v.1.0.min.js"></script>
var XiaoMiManagerH5 = cc.Class({
  "extends": require('BaseManager'),
  properties: {
    bannerAd: null
  },
  getHaveVideo: function getHaveVideo() {
    return false;
  },
  getSysPlatform_string: function getSysPlatform_string() {
    return 'xiaomih5';
  },
  getSysPlatform: function getSysPlatform() {
    return 7;
  },
  init: function init(obj) {
    this._super();

    window.hy_dj_sdk.ready({
      zIndex: 9999,
      pin: 0
    }, function () {
      //sdk已经加载完成，可执行游戏的初始化逻辑
      lieyou_showLog('xiaomi init over');
    }); // var xiaoMiBaseData = this.getBaseData();
    // this.reload();
  },
  getBaseData: function getBaseData() {
    return hy_dj_sdk.getBaseData();
  },
  reload: function reload() {
    hy_dj_sdk.reload();
  }
});
module.exports = XiaoMiManagerH5;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXHNjcmlwdHNcXFhpYW9NaU1hbmFnZXJINS5qcyJdLCJuYW1lcyI6WyJYaWFvTWlNYW5hZ2VySDUiLCJjYyIsIkNsYXNzIiwicmVxdWlyZSIsInByb3BlcnRpZXMiLCJiYW5uZXJBZCIsImdldEhhdmVWaWRlbyIsImdldFN5c1BsYXRmb3JtX3N0cmluZyIsImdldFN5c1BsYXRmb3JtIiwiaW5pdCIsIm9iaiIsIl9zdXBlciIsIndpbmRvdyIsImh5X2RqX3NkayIsInJlYWR5IiwiekluZGV4IiwicGluIiwibGlleW91X3Nob3dMb2ciLCJnZXRCYXNlRGF0YSIsInJlbG9hZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQUlBLGVBQWUsR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDOUIsYUFBU0MsT0FBTyxDQUFDLGFBQUQsQ0FEYztBQUU5QkMsRUFBQUEsVUFBVSxFQUFDO0FBQ0pDLElBQUFBLFFBQVEsRUFBRTtBQUROLEdBRm1CO0FBSzNCQyxFQUFBQSxZQUwyQiwwQkFLYjtBQUNWLFdBQU8sS0FBUDtBQUNILEdBUDBCO0FBUTNCQyxFQUFBQSxxQkFSMkIsbUNBUUo7QUFDekIsV0FBTyxVQUFQO0FBQ0csR0FWMEI7QUFXM0JDLEVBQUFBLGNBWDJCLDRCQVdYO0FBQ1osV0FBTyxDQUFQO0FBQ04sR0FiNkI7QUFlM0JDLEVBQUFBLElBQUksRUFBRSxjQUFTQyxHQUFULEVBQWE7QUFDZixTQUFLQyxNQUFMOztBQUNBQyxJQUFBQSxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLEtBQWpCLENBQXVCO0FBQUNDLE1BQUFBLE1BQU0sRUFBQyxJQUFSO0FBQWFDLE1BQUFBLEdBQUcsRUFBQztBQUFqQixLQUF2QixFQUEyQyxZQUFVO0FBQ2pEO0FBQ0FDLE1BQUFBLGNBQWMsQ0FBQyxrQkFBRCxDQUFkO0FBQ0gsS0FIRCxFQUZlLENBT2Y7QUFDQTtBQUNILEdBeEIwQjtBQXlCM0JDLEVBQUFBLFdBekIyQix5QkF5QmQ7QUFDVCxXQUFPTCxTQUFTLENBQUNLLFdBQVYsRUFBUDtBQUNILEdBM0IwQjtBQTRCM0JDLEVBQUFBLE1BNUIyQixvQkE0Qm5CO0FBQ0pOLElBQUFBLFNBQVMsQ0FBQ00sTUFBVjtBQUNIO0FBOUIwQixDQUFULENBQXRCO0FBbUNBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJyQixlQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/liqDlnKhpbmRleC5odG1sIDwvYm9keT7kuIrkuIDooYwgXHJcbi8vPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCIgIHNyYz1cImh0dHBzOi8vc3RhdGljLmcubWkuY29tL2dhbWUvaDVzZGsvaDUtZGotc2RrLXYuMS4wLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG5sZXQgWGlhb01pTWFuYWdlckg1ID0gY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IHJlcXVpcmUoJ0Jhc2VNYW5hZ2VyJyksXHJcblx0cHJvcGVydGllczp7XHJcbiAgICAgICAgYmFubmVyQWQ6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgZ2V0SGF2ZVZpZGVvKCl7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGdldFN5c1BsYXRmb3JtX3N0cmluZygpe1xyXG5cdFx0cmV0dXJuICd4aWFvbWloNSc7XHJcbiAgICB9LFxyXG4gICAgZ2V0U3lzUGxhdGZvcm0oKXtcclxuICAgICAgICByZXR1cm4gNztcclxuXHR9LFxyXG4gICAgXHJcbiAgICBpbml0OiBmdW5jdGlvbihvYmope1xyXG4gICAgICAgIHRoaXMuX3N1cGVyKCk7XHJcbiAgICAgICAgd2luZG93Lmh5X2RqX3Nkay5yZWFkeSh7ekluZGV4Ojk5OTkscGluOjB9LGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIC8vc2Rr5bey57uP5Yqg6L295a6M5oiQ77yM5Y+v5omn6KGM5ri45oiP55qE5Yid5aeL5YyW6YC76L6RXHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCd4aWFvbWkgaW5pdCBvdmVyJyk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gdmFyIHhpYW9NaUJhc2VEYXRhID0gdGhpcy5nZXRCYXNlRGF0YSgpO1xyXG4gICAgICAgIC8vIHRoaXMucmVsb2FkKCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0QmFzZURhdGEoKXtcclxuICAgICAgICByZXR1cm4gaHlfZGpfc2RrLmdldEJhc2VEYXRhKCk7XHJcbiAgICB9LFxyXG4gICAgcmVsb2FkKCl7XHJcbiAgICAgICAgaHlfZGpfc2RrLnJlbG9hZCgpO1xyXG4gICAgfSxcclxuICAgIFxyXG5cclxuICAgIFxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IFhpYW9NaU1hbmFnZXJINTtcclxuXHJcblxyXG5cclxuXHJcbiJdfQ==