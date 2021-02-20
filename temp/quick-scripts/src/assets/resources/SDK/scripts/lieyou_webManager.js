"use strict";
cc._RF.push(module, 'e8acd6T5GNKmKx0ZjnjBbfX', 'lieyou_webManager');
// resources/SDK/scripts/lieyou_webManager.js

"use strict";

window.lieyou_cpp_Calljs_setMusic = function (Play) {
  if (Play) {
    cc.game.resume();
  } else {
    cc.game.pause();
  }
};

var lieyou_webManager = cc.Class({
  "extends": require('BaseManager'),
  properties: {
    payCallBack: null,
    playVDCallBack: null
  },
  getHaveVideo: function getHaveVideo() {
    if (this.isOpen(KEY_OPEN_VIDEO)) {
      lieyou_showLog("h5-可以看视频");
      return true;
    }

    lieyou_showLog("h5-不能看视频");
    return false;
  },
  getSysPlatform_string: function getSysPlatform_string() {
    return 'web';
  },
  getSysPlatform: function getSysPlatform() {
    return 14;
  },
  setOnlineData: function setOnlineData(data) {
    if (data.web) {
      var adData = {};

      if (data.web.theme) {
        adData.theme = data.web.theme;
      }

      if (data.web.crossSwitch) {
        adData.crossSwitch = data.web.crossSwitch;
      }

      if (data.web.bizData) {
        adData.bizData = data.web.bizData;
      }

      if (data.web.ad_datas) {
        adData.ad_datas = data.web.ad_datas; // GamePlay.setGamePortalData(JSON.stringify(data.web.ad_datas));
      }

      if (data.web["switch"]) {
        adData["switch"] = data.web["switch"];
      }

      this.setAdData(adData);
    }
  },
  getStringValue: function getStringValue(key) {
    return GamePlay.getStringValue(key);
  },
  init: function init(obj) {
    lieyou_showLog("h5-初始化");
    GamePlay.cancelCocos();

    this._super();

    this.base_IsShenHe = this.isOpen(KEY_IS_SHENHE); // var source = GamePlay.getSource();

    this.initOnlineData();
  },
  vibrateShort: function vibrateShort() {
    this.vibrateCustom(30);
  },
  vibrateLong: function vibrateLong() {
    this.vibrateCustom(100);
  },
  vibrateCustom: function vibrateCustom(time) {
    lieyou_showLog("h5-震动:" + time);
    GamePlay.Vibrate(time);
  },
  showNativeBanner: function showNativeBanner(top) {
    GamePlay.showNativeView(top);
  },
  hideNativeBanner: function hideNativeBanner() {
    GamePlay.closeNativeView();
  },
  showPauseAd: function showPauseAd(isHaveNative, top) {
    GamePlay.showPauseAd(isHaveNative, top);
  },
  showResultAd: function showResultAd(isHaveNative, top) {
    GamePlay.showResultAd(isHaveNative, top);
  },
  showSpotByBegin: function showSpotByBegin(isHaveNative, top) {},
  showSpotByPause: function showSpotByPause(isHaveNative, top) {
    lieyou_showLog("h5-暂停插屏");
    this.showPauseAd(isHaveNative, top);
  },
  showSpotByFinish: function showSpotByFinish(isHaveNative, top) {
    lieyou_showLog("h5-结束插屏");
    this.showResultAd(isHaveNative, top);
  },
  callPay: function callPay(action, funS) {
    this.payCallBack = funS;
    GamePlay.callPay(action);
  },
  callAndroid: function callAndroid(action) {
    GamePlay.callAndroid(action);
  },
  callAndroid_2: function callAndroid_2(action, funS) {
    this.playVDCallBack = funS;
    GamePlay.callPay(action);
  },
  //是否可以显示 开关
  isOpen: function isOpen(key) {
    var ss = 0;
    ss = GamePlay.getValue2(key);
    ss = parseInt(ss);
    lieyou_showLog("h5-获取开关:" + key + ":" + ss);

    if (ss == 1) {
      return true;
    } else {
      return false;
    }
  },
  isOpenInt: function isOpenInt(key) {
    var ss = 0;
    ss = GamePlay.getValue2(key);
    ss = parseInt(ss);
    lieyou_showLog("h5-获取开关:" + key + ":" + ss);
    return ss;
  },
  showRewardedVideoAd: function showRewardedVideoAd(id, callBack) {
    lieyou_showLog("h5-播放视频");
    this.callAndroid_2(ACTION_AD_WATCH, callBack);
  },
  showBannerCustom: function showBannerCustom(obj) {
    this.showBanner();
  },
  showBannerByBottom: function showBannerByBottom(id) {
    this.showBanner();
  },
  showBannerByTop: function showBannerByTop(id) {
    this.showBanner();
  },
  showBanner: function showBanner() {
    lieyou_showLog("h5-显示banner");

    if (this._showBanner) {
      return;
    }

    this._showBanner = true;
    this.callAndroid(ACTION_BANNER_SHOW);
  },
  hideBanner: function hideBanner() {
    lieyou_showLog("h5-隐藏banner");
    this._showBanner = false;
    this.callAndroid(ACTION_BANNER_HIDE);
  },
  showRate: function showRate() {
    this.callAndroid(ACTION_RATE);
  },
  newJumpApp: function newJumpApp(obj) {
    if (obj.success) {
      obj.success();
    }

    obj.umid = oppoGetOnlineDataId;
    GamePlay.startWeb(JSON.stringify(obj.data));
  },
  showNativeHideBanner: function showNativeHideBanner(node) {
    var _this = this;

    var showM = false;

    if (this.moreGameBanner && this.moreGameBanner.isValid) {
      showM = true;
    }

    var showB = this._showBanner;
    var baseNodejs = node.addComponent('lieyou_baseNode');

    baseNodejs.enableCallBack = function () {
      lieyou_SdkManager.hideBanner();
    };

    baseNodejs.destroyCallBack = function () {
      if (showB) {
        _this.showBanner();
      } else if (showM) {
        lieyou_SdkManager.showMoreGameByBanner();
      }
    };
  }
});
module.exports = lieyou_webManager;

cc._RF.pop();