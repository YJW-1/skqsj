"use strict";
cc._RF.push(module, '266b4aNftVFdZdvpDIT5PMs', 'XiaoMiManager');
// resources/SDK/scripts/XiaoMiManager.js

"use strict";

//1051
var XiaoMiManager = cc.Class({
  "extends": require('BaseManager'),
  properties: {
    bannerAd: null
  },
  getHaveVideo: function getHaveVideo() {
    if (xiaomi_VideoId == '') {
      return false;
    }

    return true;
  },
  getSysPlatform_string: function getSysPlatform_string() {
    return 'xiaomi';
  },
  getSysPlatform: function getSysPlatform() {
    return 9;
  },
  init: function init(obj) {
    this._super();

    this._canShowSpotAd = true;
  },
  showRewardedVideoAd: function showRewardedVideoAd(id, closeCallBack) {
    if (xiaomi_VideoId == '') {
      closeCallBack(false);
      return;
    }

    this.vaCallBack = closeCallBack;

    if (this.videoAd) {
      this.videoAd.show();
      return;
    }

    var self = this;
    this.videoAd = qg.createRewardedVideoAd({
      // 
      adUnitId: xiaomi_VideoId
    });
    this.videoAd.show();
    this.videoAd.onError(function (err) {
      // self.videoAd.load();
      self.vaCallBack(false);
      lieyou_showLog("xiaomi------play vd errr-----  " + JSON.stringify(err));
    });
    this.videoAd.onClose(function (res) {
      lieyou_showLog("xiaomi------play vd over-----  " + JSON.stringify(res));

      if (res && res.isEnded) {
        self.vaCallBack(true);
      } else {
        self.vaCallBack(false);
      }
    });
  },
  hideBanner: function hideBanner() {
    if (this.bannerAd) {
      this.bannerAd.destroy();
      this.bannerAd = null;
    }
  },
  showBanner: function showBanner() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (xiaomi_BannerId == '') {
      return;
    }

    ;
  },
  showBannerByBottom: function showBannerByBottom(id) {
    this.showBanner({});
  },
  showSpot: function showSpot() {
    var self = this;

    if (xiaomi_Spot == '' || !this._canShowSpotAd) {
      return;
    }

    ;
    setTimeout(function () {
      self._canShowSpotAd = true;
    }, 1000 * 30);
    self._canShowSpotAd = false;
    var interstitialAd = qg.createInterstitialAd({
      adUnitId: xiaomi_Spot
    });
    interstitialAd.show();
    interstitialAd.onLoad(function () {
      lieyou_showLog("xiaomi------show spot load-----  ");
    });
    interstitialAd.onError(function (data) {
      lieyou_showLog("xiaomi------show spot fail-----  " + JSON.stringify(data));
    });
  },
  showSpotByPause: function showSpotByPause(isHaveNative, top) {
    this.showSpot(true);
  },
  showSpotByBegin: function showSpotByBegin(isHaveNative, top) {
    this.showSpot();
  },
  showSpotByFinish: function showSpotByFinish(isHaveNative, top) {
    this.showSpot();
  }
});
module.exports = XiaoMiManager;

cc._RF.pop();