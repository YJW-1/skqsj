
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/scripts/BaiDuManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXHNjcmlwdHNcXEJhaUR1TWFuYWdlci5qcyJdLCJuYW1lcyI6WyJCYWlEdU1hbmFnZXIiLCJjYyIsIkNsYXNzIiwicmVxdWlyZSIsInByb3BlcnRpZXMiLCJiYW5uZXJBZCIsImdldEhhdmVWaWRlbyIsImJhaWR1VmlkZW9JZCIsImdldFN5c1BsYXRmb3JtX3N0cmluZyIsImdldFN5c1BsYXRmb3JtIiwiaW5pdCIsIm9iaiIsIl9zdXBlciIsInNob3dOYXRpdmVCYW5uZXIiLCJ0b3AiLCJzZWxmIiwiYmFpZHVOYXRpdmVJZCIsInNob3dTcG90IiwiaGlkZU5hdGl2ZUJhbm5lciIsImhpZGVCYW5uZXIiLCJkZXN0cm95Iiwic2hvd0Jhbm5lciIsImJhaWR1QmFubmVySWQiLCJ3aW5XaWR0aCIsIndpZHRoIiwic3dhbiIsImdldFN5c3RlbUluZm9TeW5jIiwid2luZG93V2lkdGgiLCJoZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJjcmVhdGVCYW5uZXJBZCIsImFkVW5pdElkIiwiYXBwU2lkIiwiYmFpZHVJZF9TREsiLCJzdHlsZSIsImxlZnQiLCJvbkxvYWQiLCJzaG93Iiwib25FcnJvciIsImVyciIsImxpZXlvdV9zaG93TG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInNob3dCYW5uZXJDdXN0b20iLCJzaG93QmFubmVyQnlUb3AiLCJpZCIsInNob3dCYW5uZXJCeUJvdHRvbSIsInNob3dSZXdhcmRlZFZpZGVvQWQiLCJjbG9zZUNhbGxCYWNrIiwidmlkZW9BZCIsImNyZWF0ZVJld2FyZGVkVmlkZW9BZCIsIm9uQ2xvc2UiLCJyZXMiLCJpc0VuZGVkIiwib2ZmQ2xvc2UiLCJiYWlkdVNwb3RBRElkIiwic2hvd1Nwb3RCeVBhdXNlIiwic2hvd1Nwb3RCeUJlZ2luIiwic2hvd1Nwb3RCeUZpbmlzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsWUFBWSxHQUFH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QUFDSDtBQWhIdUIsQ0FBVCxDQUFuQjtBQWtIQThDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjVELFlBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmxldCBCYWlEdU1hbmFnZXIgPSBjYy5DbGFzcyh7XHJcblx0ZXh0ZW5kczogcmVxdWlyZSgnQmFzZU1hbmFnZXInKSxcclxuXHRwcm9wZXJ0aWVzOntcclxuICAgICAgICBiYW5uZXJBZDogbnVsbCxcclxuICAgIH0sXHJcbiAgICBnZXRIYXZlVmlkZW8oKXtcclxuICAgICAgICBpZihiYWlkdVZpZGVvSWQgPT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBnZXRTeXNQbGF0Zm9ybV9zdHJpbmcoKXtcclxuXHRcdHJldHVybiAnYmFpZHUnO1xyXG4gICAgfSxcclxuICAgIGdldFN5c1BsYXRmb3JtKCl7XHJcblx0XHRyZXR1cm4gMTA7XHJcblx0fSxcclxuICAgIFxyXG4gICAgaW5pdDogZnVuY3Rpb24ob2JqKXtcclxuICAgICAgICB0aGlzLl9zdXBlcigpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93TmF0aXZlQmFubmVyKHRvcCl7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmKGJhaWR1TmF0aXZlSWQgPT0gJycpIHtcclxuICAgICAgICAgICAgc2VsZi5zaG93U3BvdCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIGhpZGVOYXRpdmVCYW5uZXIoKXtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGhpZGVCYW5uZXIoKXtcclxuICAgICAgICBpZih0aGlzLmJhbm5lckFkKXtcclxuICAgICAgICAgICAgdGhpcy5iYW5uZXJBZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyQWQgPSBudWxsO1xyXG5cdFx0fVxyXG4gICAgfSxcclxuICAgIHNob3dCYW5uZXIob2JqKXtcclxuICAgICAgICBpZihiYWlkdUJhbm5lcklkID09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciB3aW5XaWR0aCA9IDMwMDsvL3N3YW4uZ2V0U3lzdGVtSW5mb1N5bmMoKS53aW5kb3dXaWR0aDsvL3dpbmRvd1dpZHRoIOeql+WPo+WuveW6piBzY3JlZW5XaWR0aCDlsY/luZXlrr3luqYgMjQwLzk2MCBIZWlnaHRcclxuICAgICAgICB2YXIgd2lkdGggPSAoc3dhbi5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd1dpZHRoIC0gMzAwKSAvMjtcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gc3dhbi5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodCAtIHdpbldpZHRoICogMjQwLzk2MDtcclxuICAgICAgICB0aGlzLmJhbm5lckFkID0gc3dhbi5jcmVhdGVCYW5uZXJBZCh7XHJcbiAgICAgICAgICAgIGFkVW5pdElkOiBiYWlkdUJhbm5lcklkLFxyXG4gICAgICAgICAgICBhcHBTaWQ6IGJhaWR1SWRfU0RLLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogd2lkdGgsXHJcbiAgICAgICAgICAgICAgICB0b3A6IGhlaWdodCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aW5XaWR0aFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgdGhpcy5iYW5uZXJBZC5vbkxvYWQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJhbm5lckFkLnNob3coKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYmFubmVyQWQub25FcnJvcihlcnIgPT4ge1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZyhcImJhaWR1IGxvZy0tLS0tLXNob3cgYmFubmVyIGZhaWwtLS0tLSAgXCIgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzaG93QmFubmVyQ3VzdG9tKG9iail7XHJcbiAgICAgICAgdGhpcy5zaG93QmFubmVyKG9iaik7XHJcbiAgICB9LFxyXG4gICAgc2hvd0Jhbm5lckJ5VG9wKGlkKXtcclxuICAgICAgICB0aGlzLnNob3dCYW5uZXIoe30pO1xyXG4gICAgfSxcclxuICAgIHNob3dCYW5uZXJCeUJvdHRvbShpZCl7XHJcbiAgICAgICAgdGhpcy5zaG93QmFubmVyKHt9KTtcclxuICAgIH0sXHJcbiAgICBzaG93UmV3YXJkZWRWaWRlb0FkKGlkLGNsb3NlQ2FsbEJhY2spe1xyXG4gICAgICAgIGlmKGJhaWR1VmlkZW9JZCA9PSAnJykge1xyXG4gICAgICAgICAgICBjbG9zZUNhbGxCYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIHZpZGVvQWQgPSBzd2FuLmNyZWF0ZVJld2FyZGVkVmlkZW9BZCh7IFxyXG4gICAgICAgICAgICBhZFVuaXRJZDogYmFpZHVWaWRlb0lkLCBcclxuICAgICAgICAgICAgYXBwU2lkOiBiYWlkdUlkX1NESyBcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICB2aWRlb0FkLnNob3coKTtcclxuICAgICAgICB2aWRlb0FkLm9uRXJyb3IoZXJyID0+IHtcclxuICAgICAgICAgICAgY2xvc2VDYWxsQmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKFwiYmFpZHUgbG9nLS0tLS0tc2hvdyB2aWRlbyBmYWlsLS0tLS0gIFwiICsgSlNPTi5zdHJpbmdpZnkoZXJyKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmlkZW9BZC5vbkNsb3NlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCdiYWlkdSBsb2ctLS0tLS12aWRlbyBjbG9zZS0tLS0tICAnICsgcmVzLmlzRW5kZWQpO1xyXG4gICAgICAgICAgICBpZiAocmVzLmlzRW5kZWQpIHtcclxuICAgICAgICAgICAgICAgIGNsb3NlQ2FsbEJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZUNhbGxCYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZpZGVvQWQub2ZmQ2xvc2UobnVsbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgc2hvd1Nwb3QoKXtcclxuICAgICAgICBpZihiYWlkdVNwb3RBRElkID09JycpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93U3BvdEJ5UGF1c2UoKXtcclxuICAgICAgICB0aGlzLnNob3dOYXRpdmVCYW5uZXIoKTtcclxuICAgIH0sXHJcbiAgICBzaG93U3BvdEJ5QmVnaW4oKXt9LFxyXG4gICAgc2hvd1Nwb3RCeUZpbmlzaCgpe1xyXG4gICAgICAgIHRoaXMuc2hvd05hdGl2ZUJhbm5lcigpO1xyXG4gICAgfSxcclxufSlcclxubW9kdWxlLmV4cG9ydHMgPSBCYWlEdU1hbmFnZXI7XHJcblxyXG5cclxuXHJcblxyXG4iXX0=