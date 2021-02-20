"use strict";
cc._RF.push(module, 'b267blO+JZE4aAE85CnkhB6', 'BaiDuManager');
// resources/SDK/scripts/BaiDuManager.js

"use strict";

var BaiDuManager = cc.Class({
  "extends": require('BaseManager'),
  properties: {
    bannerAd: null
  },
  getHaveVideo: function getHaveVideo() {
    if (baiduVideoId == '') {
      return false;
    }

    return true;
  },
  getSysPlatform_string: function getSysPlatform_string() {
    return 'baidu';
  },
  getSysPlatform: function getSysPlatform() {
    return 10;
  },
  init: function init(obj) {
    this._super();
  },
  showNativeBanner: function showNativeBanner(top) {
    var self = this;

    if (baiduNativeId == '') {
      self.showSpot();
      return;
    }
  },
  hideNativeBanner: function hideNativeBanner() {},
  hideBanner: function hideBanner() {
    if (this.bannerAd) {
      this.bannerAd.destroy();
      this.bannerAd = null;
    }
  },
  showBanner: function showBanner(obj) {
    var _this = this;

    if (baiduBannerId == '') {
      return;
    }

    ;
    var winWidth = 300; //swan.getSystemInfoSync().windowWidth;//windowWidth 窗口宽度 screenWidth 屏幕宽度 240/960 Height

    var width = (swan.getSystemInfoSync().windowWidth - 300) / 2;
    var height = swan.getSystemInfoSync().windowHeight - winWidth * 240 / 960;
    this.bannerAd = swan.createBannerAd({
      adUnitId: baiduBannerId,
      appSid: baiduId_SDK,
      style: {
        left: width,
        top: height,
        width: winWidth
      }
    });
    this.bannerAd.onLoad(function () {
      _this.bannerAd.show();
    });
    this.bannerAd.onError(function (err) {
      lieyou_showLog("baidu log------show banner fail-----  " + JSON.stringify(err));
    });
  },
  showBannerCustom: function showBannerCustom(obj) {
    this.showBanner(obj);
  },
  showBannerByTop: function showBannerByTop(id) {
    this.showBanner({});
  },
  showBannerByBottom: function showBannerByBottom(id) {
    this.showBanner({});
  },
  showRewardedVideoAd: function showRewardedVideoAd(id, closeCallBack) {
    if (baiduVideoId == '') {
      closeCallBack(false);
      return;
    }

    ;
    var videoAd = swan.createRewardedVideoAd({
      adUnitId: baiduVideoId,
      appSid: baiduId_SDK
    });
    videoAd.show();
    videoAd.onError(function (err) {
      closeCallBack(false);
      lieyou_showLog("baidu log------show video fail-----  " + JSON.stringify(err));
    });
    videoAd.onClose(function (res) {
      lieyou_showLog('baidu log------video close-----  ' + res.isEnded);

      if (res.isEnded) {
        closeCallBack(true);
      } else {
        closeCallBack(false);
      }

      videoAd.offClose(null);
    });
  },
  showSpot: function showSpot() {
    if (baiduSpotADId == '') {
      return;
    }
  },
  showSpotByPause: function showSpotByPause() {
    this.showNativeBanner();
  },
  showSpotByBegin: function showSpotByBegin() {},
  showSpotByFinish: function showSpotByFinish() {
    this.showNativeBanner();
  }
});
module.exports = BaiDuManager;

cc._RF.pop();