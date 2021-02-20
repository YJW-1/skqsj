"use strict";
cc._RF.push(module, '013daqHchJCKqzTdQbw6R/x', 'OppoH5Manager');
// resources/SDK/scripts/OppoH5Manager.js

"use strict";

var OppoH5Manager = cc.Class({
  "extends": require('BaseManager'),
  properties: {},
  getHaveVideo: function getHaveVideo() {
    return true;
  },
  getSysPlatform_string: function getSysPlatform_string() {
    return 'oppoh5';
  },
  getSysPlatform: function getSysPlatform() {
    return 5;
  },
  init: function init(obj) {
    this._super();
  },
  hideBanner: function hideBanner() {},
  showBanner: function showBanner(obj) {
    var bannerAd = opUnion.createBannerAd({
      containerId: 'GameCanvas',
      posId: '28810',
      mediaId: '101000141'
    });
    bannerAd.onLoad(function () {
      lieyou_showLog('广告加载成功');
    });
  },
  showBannerCustom: function showBannerCustom(obj) {
    this.showBanner();
  },
  showBannerByTop: function showBannerByTop(id) {
    this.showBanner();
  },
  showBannerByBottom: function showBannerByBottom(id) {
    this.showBanner();
  },
  showRewardedVideoAd: function showRewardedVideoAd(id, closeCallBack) {
    var videoAd = opUnion.createVideoAd({
      posId: '28812',
      mediaId: '101000141'
    });
    videoAd.onLoad(function () {
      videoAd.show();
      lieyou_showLog('激励视频广告加载成功');
    });
    videoAd.onError(function (err) {
      closeCallBack(false);
      lieyou_showLog(err);
    });
    videoAd.onClose(function (res) {
      if (res && res.isEnded) {
        closeCallBack(true); // 正常播放结束，可以下发奖励
      } else {
        closeCallBack(false); // 播放中途退出，不下发奖励
      }
    });
  },
  showSpot: function showSpot() {
    var interstitialAd = opUnion.createInterstitialAd({
      posId: '28811',
      mediaId: '101000141'
    });
    interstitialAd.onLoad(function () {
      interstitialAd.show();
      lieyou_showLog('插屏广告加载成功');
    });
  },
  showSpotByPause: function showSpotByPause() {
    this.showSpot();
  },
  showSpotByBegin: function showSpotByBegin() {},
  showSpotByFinish: function showSpotByFinish() {
    this.showSpot();
  }
});
module.exports = OppoH5Manager;

cc._RF.pop();