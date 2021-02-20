"use strict";
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