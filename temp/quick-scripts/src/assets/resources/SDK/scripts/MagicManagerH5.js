"use strict";
cc._RF.push(module, 'efe9dQtzbJLdLF2ieBVfSMh', 'MagicManagerH5');
// resources/SDK/scripts/MagicManagerH5.js

"use strict";

var MagicManagerH5 = cc.Class({
  "extends": require('BaseManager'),
  properties: {
    bannerAd: null
  },
  getHaveVideo: function getHaveVideo() {
    return true;
  },
  getSysPlatform_string: function getSysPlatform_string() {
    return 'magic';
  },
  getSysPlatform: function getSysPlatform() {
    return 13;
  },
  init: function init(obj) {
    this._super();

    this.initPlayVdCallBack();
  },
  hideBanner: function hideBanner() {},
  showBanner: function showBanner(obj) {},
  showBannerCustom: function showBannerCustom(obj) {
    this.showBanner(obj);
  },
  showBannerByTop: function showBannerByTop(id) {
    this.showBanner({});
  },
  showBannerByBottom: function showBannerByBottom(id) {
    this.showBanner({});
  },
  initPlayVdCallBack: function initPlayVdCallBack() {
    var self = this;

    window.callbackAdsWithScene = function (res) {
      switch (res) {
        case "FAIL":
          if (self.playVideoCallBack) {
            self.playVideoCallBack(false);
          }

          ClientNative.hideAdsWithScene(magic_VideoId);
          break;

        case "REWARD":
          if (self.playVideoCallBack) {
            self.playVideoCallBack(true);
          }

          ClientNative.hideAdsWithScene(magic_VideoId);
          break;

        case "SUCCESS":
      }
    };
  },
  showRewardedVideoAd: function showRewardedVideoAd(id, closeCallBack) {
    var self = this;
    self.playVideoCallBack = closeCallBack;
    ClientNative.showAdsWithScene(magic_VideoId);
  },
  showSpot: function showSpot() {},
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
module.exports = MagicManagerH5;

cc._RF.pop();