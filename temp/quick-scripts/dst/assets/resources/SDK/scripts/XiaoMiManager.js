
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/scripts/XiaoMiManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXHNjcmlwdHNcXFhpYW9NaU1hbmFnZXIuanMiXSwibmFtZXMiOlsiWGlhb01pTWFuYWdlciIsImNjIiwiQ2xhc3MiLCJyZXF1aXJlIiwicHJvcGVydGllcyIsImJhbm5lckFkIiwiZ2V0SGF2ZVZpZGVvIiwieGlhb21pX1ZpZGVvSWQiLCJnZXRTeXNQbGF0Zm9ybV9zdHJpbmciLCJnZXRTeXNQbGF0Zm9ybSIsImluaXQiLCJvYmoiLCJfc3VwZXIiLCJfY2FuU2hvd1Nwb3RBZCIsInNob3dSZXdhcmRlZFZpZGVvQWQiLCJpZCIsImNsb3NlQ2FsbEJhY2siLCJ2YUNhbGxCYWNrIiwidmlkZW9BZCIsInNob3ciLCJzZWxmIiwicWciLCJjcmVhdGVSZXdhcmRlZFZpZGVvQWQiLCJhZFVuaXRJZCIsIm9uRXJyb3IiLCJlcnIiLCJsaWV5b3Vfc2hvd0xvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJvbkNsb3NlIiwicmVzIiwiaXNFbmRlZCIsImhpZGVCYW5uZXIiLCJkZXN0cm95Iiwic2hvd0Jhbm5lciIsInhpYW9taV9CYW5uZXJJZCIsInNob3dCYW5uZXJCeUJvdHRvbSIsInNob3dTcG90IiwieGlhb21pX1Nwb3QiLCJzZXRUaW1lb3V0IiwiaW50ZXJzdGl0aWFsQWQiLCJjcmVhdGVJbnRlcnN0aXRpYWxBZCIsIm9uTG9hZCIsImRhdGEiLCJzaG93U3BvdEJ5UGF1c2UiLCJpc0hhdmVOYXRpdmUiLCJ0b3AiLCJzaG93U3BvdEJ5QmVnaW4iLCJzaG93U3BvdEJ5RmluaXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLElBQUlBLGFBQWEsR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDNUIsYUFBU0MsT0FBTyxDQUFDLGFBQUQsQ0FEWTtBQUU1QkMsRUFBQUEsVUFBVSxFQUFDO0FBQ0pDLElBQUFBLFFBQVEsRUFBRTtBQUROLEdBRmlCO0FBS3pCQyxFQUFB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USxFQUFFZTtBQUQrQixLQUF4QixDQUFyQjtBQUdBRSxJQUFBQSxjQUFjLENBQUNyQixJQUFmO0FBQ0FxQixJQUFBQSxjQUFjLENBQUNFLE1BQWYsQ0FBc0IsWUFBTTtBQUN4QmhCLE1BQUFBLGNBQWMsQ0FBQyxtQ0FBRCxDQUFkO0FBQ0gsS0FGRDtBQUdBYyxJQUFBQSxjQUFjLENBQUNoQixPQUFmLENBQXdCLFVBQUFtQixJQUFJLEVBQUk7QUFDNUJqQixNQUFBQSxjQUFjLENBQUMsc0NBQXNDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZWUsSUFBZixDQUF2QyxDQUFkO0FBQ0gsS0FGRDtBQUdILEdBM0Z3QjtBQTRGekJDLEVBQUFBLGVBNUZ5QiwyQkE0RlRDLFlBNUZTLEVBNEZJQyxHQTVGSixFQTRGUTtBQUM3QixTQUFLVCxRQUFMLENBQWMsSUFBZDtBQUNILEdBOUZ3QjtBQStGekJVLEVBQUFBLGVBL0Z5QiwyQkErRlRGLFlBL0ZTLEVBK0ZJQyxHQS9GSixFQStGUTtBQUM3QixTQUFLVCxRQUFMO0FBQ0gsR0FqR3dCO0FBa0d6QlcsRUFBQUEsZ0JBbEd5Qiw0QkFrR1JILFlBbEdRLEVBa0dLQyxHQWxHTCxFQWtHUztBQUM5QixTQUFLVCxRQUFMO0FBQ0g7QUFwR3dCLENBQVQsQ0FBcEI7QUF1R0FZLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmxELGFBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLzEwNTFcclxubGV0IFhpYW9NaU1hbmFnZXIgPSBjYy5DbGFzcyh7XHJcblx0ZXh0ZW5kczogcmVxdWlyZSgnQmFzZU1hbmFnZXInKSxcclxuXHRwcm9wZXJ0aWVzOntcclxuICAgICAgICBiYW5uZXJBZDogbnVsbCxcclxuICAgIH0sXHJcbiAgICBnZXRIYXZlVmlkZW8oKXtcclxuICAgICAgICBpZih4aWFvbWlfVmlkZW9JZCA9PSAnJyl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgZ2V0U3lzUGxhdGZvcm1fc3RyaW5nKCl7XHJcblx0XHRyZXR1cm4gJ3hpYW9taSc7XHJcbiAgICB9LFxyXG4gICAgZ2V0U3lzUGxhdGZvcm0oKXtcclxuICAgICAgICByZXR1cm4gOTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIFxyXG4gICAgaW5pdDogZnVuY3Rpb24ob2JqKXtcclxuICAgICAgICB0aGlzLl9zdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2NhblNob3dTcG90QWQgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc2hvd1Jld2FyZGVkVmlkZW9BZChpZCxjbG9zZUNhbGxCYWNrKXtcclxuICAgICAgICBpZih4aWFvbWlfVmlkZW9JZCA9PSAnJykge1xyXG4gICAgICAgICAgICBjbG9zZUNhbGxCYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZhQ2FsbEJhY2sgPSBjbG9zZUNhbGxCYWNrO1xyXG4gICAgICAgIGlmKHRoaXMudmlkZW9BZCl7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BZC5zaG93KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudmlkZW9BZCA9IHFnLmNyZWF0ZVJld2FyZGVkVmlkZW9BZCh7Ly8gXHJcbiAgICAgICAgICAgIGFkVW5pdElkOiB4aWFvbWlfVmlkZW9JZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudmlkZW9BZC5zaG93KCk7XHJcbiAgICAgICAgdGhpcy52aWRlb0FkLm9uRXJyb3IoZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICAvLyBzZWxmLnZpZGVvQWQubG9hZCgpO1xyXG4gICAgICAgICAgICBzZWxmLnZhQ2FsbEJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZyhcInhpYW9taS0tLS0tLXBsYXkgdmQgZXJyci0tLS0tICBcIiArIEpTT04uc3RyaW5naWZ5KGVycikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMudmlkZW9BZC5vbkNsb3NlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgbGlleW91X3Nob3dMb2coXCJ4aWFvbWktLS0tLS1wbGF5IHZkIG92ZXItLS0tLSAgXCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuaXNFbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi52YUNhbGxCYWNrKHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VsZi52YUNhbGxCYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFxyXG5cclxuICAgIGhpZGVCYW5uZXIoKXtcclxuICAgICAgICBpZih0aGlzLmJhbm5lckFkKVx0e1xyXG4gICAgICAgICAgICAgICB0aGlzLmJhbm5lckFkLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgdGhpcy5iYW5uZXJBZCA9IG51bGw7XHJcblx0XHR9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzaG93QmFubmVyKG9iaiA9IHt9KXtcclxuICAgICAgICBpZih4aWFvbWlfQmFubmVySWQgPT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgc2hvd0Jhbm5lckJ5Qm90dG9tKGlkKXtcclxuICAgICAgICB0aGlzLnNob3dCYW5uZXIoe30pO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93U3BvdCgpe1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBpZih4aWFvbWlfU3BvdCA9PSAnJ3x8ICF0aGlzLl9jYW5TaG93U3BvdEFkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLl9jYW5TaG93U3BvdEFkID0gdHJ1ZTtcclxuICAgICAgICB9LCAxMDAwKjMwKTtcclxuICAgICAgICBzZWxmLl9jYW5TaG93U3BvdEFkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHZhciBpbnRlcnN0aXRpYWxBZCA9IHFnLmNyZWF0ZUludGVyc3RpdGlhbEFkKHtcclxuICAgICAgICAgICAgYWRVbml0SWQ6IHhpYW9taV9TcG90XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaW50ZXJzdGl0aWFsQWQuc2hvdygpO1xyXG4gICAgICAgIGludGVyc3RpdGlhbEFkLm9uTG9hZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKFwieGlhb21pLS0tLS0tc2hvdyBzcG90IGxvYWQtLS0tLSAgXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaW50ZXJzdGl0aWFsQWQub25FcnJvciggZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKFwieGlhb21pLS0tLS0tc2hvdyBzcG90IGZhaWwtLS0tLSAgXCIgKyBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBzaG93U3BvdEJ5UGF1c2UoaXNIYXZlTmF0aXZlLHRvcCl7XHJcbiAgICAgICAgdGhpcy5zaG93U3BvdCh0cnVlKTtcclxuICAgIH0sXHJcbiAgICBzaG93U3BvdEJ5QmVnaW4oaXNIYXZlTmF0aXZlLHRvcCl7XHJcbiAgICAgICAgdGhpcy5zaG93U3BvdCgpO1xyXG4gICAgfSxcclxuICAgIHNob3dTcG90QnlGaW5pc2goaXNIYXZlTmF0aXZlLHRvcCl7XHJcbiAgICAgICAgdGhpcy5zaG93U3BvdCgpO1xyXG4gICAgfSxcclxuICAgIFxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IFhpYW9NaU1hbmFnZXI7XHJcblxyXG5cclxuXHJcblxyXG4iXX0=