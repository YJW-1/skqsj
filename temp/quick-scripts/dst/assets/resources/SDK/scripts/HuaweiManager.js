
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/scripts/HuaweiManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '66504ngimpFQaRQ1VfWdKU7', 'HuaweiManager');
// resources/SDK/scripts/HuaweiManager.js

"use strict";

var HuaweiManager = cc.Class({
  "extends": require('BaseManager'),
  init: function init(obj) {
    this._super();

    this.loginSuccess = -1;
    var self = this;
    hbs.gameLogin({
      forceLogin: 1,
      //强制登陆，未登陆时会弹出登陆对话框
      appid: huaWeiId_Sdk,
      success: function success(res) {
        self.loginSuccess = 0; //记录登录成功标记

        self.showFloatingWin(); //显示浮标

        lieyou_showLog("Huawei>>>>>>>登录成功");
      },
      fail: function fail(data, code) {
        self.loginSuccess = -1;
        lieyou_showLog("Huawei>>>>>>>登录失败");
        lieyou_showLog("on gameLogin fail: " + data + "," + code);
      },
      complete: function complete() {
        lieyou_showLog("Huawei>>>>>>>登录完成");

        if (obj.loadCall) {
          obj.loadCall();
        }
      }
    }); // 注册onShow/onHide回调，用于隐藏和显示浮标

    var cbShow = function () {
      lieyou_showLog("Huawei>>>>>>>onShow回调>>>>>loginSuccess=:", this.loginSuccess); // 如果登录成功显示浮标

      if (this.loginSuccess === 0) {
        this.showFloatingWin();
      }
    }.bind(this);

    var cbHide = function () {
      lieyou_showLog("Huawei>>>>>>>onHide回调>>>>>loginSuccess=:", this.loginSuccess);
      this.hideFloatingWin();
    }.bind(this);

    hbs.onShow(cbShow);
    hbs.onHide(cbHide);
  },

  /**
   * 显示游戏浮标窗口
  */
  showFloatingWin: function showFloatingWin() {
    hbs.showFloatWindow({
      appid: huaWeiId_Sdk,
      //appid需要与华为开发者联盟后台配置一致
      success: function success() {
        lieyou_showLog("Huawei>>>>>>>显示浮标窗口成功");
      },
      fail: function fail(data, code) {
        lieyou_showLog("Huawei>>>>>>>显示浮标窗口失败");
        lieyou_showLog("show float window fail:" + data + ", code:" + code);
      }
    });
  },

  /** 
  *  隐藏浮标窗口
  */
  hideFloatingWin: function hideFloatingWin() {
    hbs.hideFloatWindow({
      appid: huaWeiId_Sdk,
      success: function success() {
        lieyou_showLog("Huawei>>>>>>>隐藏浮标窗口成功");
      },
      fail: function fail(data, code) {
        lieyou_showLog("Huawei>>>>>>>隐藏浮标窗口失败");
        lieyou_showLog("hide float window fail:" + data + ", code:" + code);
      }
    });
  },
  getHaveVideo: function getHaveVideo() {
    return false;
  },
  getSysPlatform_string: function getSysPlatform_string() {
    return 'huawei';
  },
  getSysPlatform: function getSysPlatform() {
    return 6;
  }
});
module.exports = HuaweiManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXHNjcmlwdHNcXEh1YXdlaU1hbmFnZXIuanMiXSwibmFtZXMiOlsiSHVhd2VpTWFuYWdlciIsImNjIiwiQ2xhc3MiLCJyZXF1aXJlIiwiaW5pdCIsIm9iaiIsIl9zdXBlciIsImxvZ2luU3VjY2VzcyIsInNlbGYiLCJoYnMiLCJnYW1lTG9naW4iLCJmb3JjZUxvZ2luIiwiYXBwaWQiLCJodWFXZWlJZF9TZGsiLCJzdWNjZXNzIiwicmVzIiwic2hvd0Zsb2F0aW5nV2luIiwibGlleW91X3Nob3dMb2ciLCJmYWlsIiwiZGF0YSIsImNvZGUiLCJjb21wbGV0ZSIsImxvYWRDYWxsIiwiY2JTaG93IiwiYmluZCIsImNiSGlkZSIsImhpZGVGbG9hdGluZ1dpbiIsIm9uU2hvdyIsIm9uSGlkZSIsInNob3dGbG9hdFdpbmRvdyIsImhpZGVGbG9hdFdpbmRvdyIsImdldEhhdmVWaWRlbyIsImdldFN5c1BsYXRmb3JtX3N0cmluZyIsImdldFN5c1BsYXRmb3JtIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxhQUFhLEdBQUNDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ3ZCLGFBQVFDLE9BQU8sQ0FBQyxhQUFELENBRFE7QUFHbkJDLEVBQUFBLElBQUksRUFBRSxjQUFTQyxHQUFULEVBQWE7QUFDZixTQUFLQyxNQUFMOztBQUVDLFNBQUtDLFlBQUwsR0FBa0IsQ0FBQyxDQUFuQjtBQUVBLFFBQUlDLElBQUksR0FBRSxJQUFWO0FBR0RDLElBQUFBLEdBQUcsQ0FBQ0MsU0FBSixDQUFjO0FBQ1ZDLE1BQUFBLFVBQVUsRUFBRSxDQURGO0FBQ0s7QUFDZkMsTUFBQUEsS0FBSyxFQUFFQyxZQUZHO0FBR1ZDLE1BQUFBLE9BQU8sRUFBRSxpQkFBVUMsR0FBVixFQUFlO0FBQ3BCUCxRQUFBQSxJQUFJLENBQUNELFlBQUwsR0FBb0IsQ0FBcEIsQ0FEb0IsQ0FDRzs7QUFDdkJD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b3VyY2VzQ29udGVudCI6WyJcclxubGV0IEh1YXdlaU1hbmFnZXI9Y2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczpyZXF1aXJlKCdCYXNlTWFuYWdlcicpLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKG9iail7XHJcbiAgICAgICAgICAgIHRoaXMuX3N1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICAgdGhpcy5sb2dpblN1Y2Nlc3M9LTE7XHJcblxyXG4gICAgICAgICAgICAgdmFyIHNlbGYgPXRoaXM7XHJcblxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGhicy5nYW1lTG9naW4oe1xyXG4gICAgICAgICAgICAgICAgZm9yY2VMb2dpbjogMSwgLy/lvLrliLbnmbvpmYbvvIzmnKrnmbvpmYbml7bkvJrlvLnlh7rnmbvpmYblr7nor53moYZcclxuICAgICAgICAgICAgICAgIGFwcGlkOiBodWFXZWlJZF9TZGssXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sb2dpblN1Y2Nlc3MgPSAwOyAvL+iusOW9leeZu+W9leaIkOWKn+agh+iusFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2hvd0Zsb2F0aW5nV2luKCk7IC8v5pi+56S65rWu5qCHXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKFwiSHVhd2VpPj4+Pj4+PueZu+W9leaIkOWKn1wiKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsKGRhdGEsIGNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmxvZ2luU3VjY2VzcyA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKFwiSHVhd2VpPj4+Pj4+PueZu+W9leWksei0pVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZyhcIm9uIGdhbWVMb2dpbiBmYWlsOiBcIiArIGRhdGEgKyBcIixcIiArIGNvZGUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKFwiSHVhd2VpPj4+Pj4+PueZu+W9leWujOaIkFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYob2JqLmxvYWRDYWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmxvYWRDYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vIOazqOWGjG9uU2hvdy9vbkhpZGXlm57osIPvvIznlKjkuo7pmpDol4/lkozmmL7npLrmta7moIdcclxuXHJcbiAgICAgICAgICAgIHZhciBjYlNob3cgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZyhcIkh1YXdlaT4+Pj4+Pj5vblNob3flm57osIM+Pj4+PmxvZ2luU3VjY2Vzcz06XCIsdGhpcy5sb2dpblN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOeZu+W9leaIkOWKn+aYvuekuua1ruagh1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvZ2luU3VjY2VzcyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dGbG9hdGluZ1dpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXIgY2JIaWRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbGlleW91X3Nob3dMb2coXCJIdWF3ZWk+Pj4+Pj4+b25IaWRl5Zue6LCDPj4+Pj5sb2dpblN1Y2Nlc3M9OlwiLHRoaXMubG9naW5TdWNjZXNzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGlkZUZsb2F0aW5nV2luKCk7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIGhicy5vblNob3coY2JTaG93KTtcclxuICAgICAgICAgICAgaGJzLm9uSGlkZShjYkhpZGUpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrmuLjmiI/mta7moIfnqpflj6NcclxuICAgICovXHJcbiAgICBzaG93RmxvYXRpbmdXaW4oKSB7XHJcbiAgICAgICAgaGJzLnNob3dGbG9hdFdpbmRvdyh7XHJcbiAgICAgICAgICAgIGFwcGlkOiBodWFXZWlJZF9TZGssIC8vYXBwaWTpnIDopoHkuI7ljY7kuLrlvIDlj5HogIXogZTnm5/lkI7lj7DphY3nva7kuIDoh7RcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgbGlleW91X3Nob3dMb2coXCJIdWF3ZWk+Pj4+Pj4+5pi+56S65rWu5qCH56qX5Y+j5oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZGF0YSwgY29kZSkge1xyXG4gICAgICAgICAgICAgICAgbGlleW91X3Nob3dMb2coXCJIdWF3ZWk+Pj4+Pj4+5pi+56S65rWu5qCH56qX5Y+j5aSx6LSlXCIpO1xyXG4gICAgICAgICAgICAgICAgbGlleW91X3Nob3dMb2coXCJzaG93IGZsb2F0IHdpbmRvdyBmYWlsOlwiICsgZGF0YSArIFwiLCBjb2RlOlwiICsgY29kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqIFxyXG4gICAgKiAg6ZqQ6JeP5rWu5qCH56qX5Y+jXHJcbiAgICAqL1xyXG4gICAgaGlkZUZsb2F0aW5nV2luKCkge1xyXG4gICAgICAgIGhicy5oaWRlRmxvYXRXaW5kb3coe1xyXG4gICAgICAgICAgICBhcHBpZDogaHVhV2VpSWRfU2RrLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoKSB7IFxyXG4gICAgICAgICAgICAgICAgbGlleW91X3Nob3dMb2coXCJIdWF3ZWk+Pj4+Pj4+6ZqQ6JeP5rWu5qCH56qX5Y+j5oiQ5YqfXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoZGF0YSwgY29kZSkgeyBcclxuICAgICAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKFwiSHVhd2VpPj4+Pj4+PumakOiXj+a1ruagh+eql+WPo+Wksei0pVwiKTtcclxuICAgICAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKFwiaGlkZSBmbG9hdCB3aW5kb3cgZmFpbDpcIiArIGRhdGEgKyBcIiwgY29kZTpcIiArIGNvZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGdldEhhdmVWaWRlbzpmdW5jdGlvbigpe1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBnZXRTeXNQbGF0Zm9ybV9zdHJpbmcoKXtcclxuXHRcdHJldHVybiAnaHVhd2VpJztcclxuICAgIH0sXHJcbiAgICBnZXRTeXNQbGF0Zm9ybSgpe1xyXG5cdFx0cmV0dXJuIDY7XHJcblx0fSxcclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IEh1YXdlaU1hbmFnZXI7XHJcbiJdfQ==