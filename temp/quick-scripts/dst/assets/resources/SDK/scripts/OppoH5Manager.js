
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/scripts/OppoH5Manager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXHNjcmlwdHNcXE9wcG9INU1hbmFnZXIuanMiXSwibmFtZXMiOlsiT3Bwb0g1TWFuYWdlciIsImNjIiwiQ2xhc3MiLCJyZXF1aXJlIiwicHJvcGVydGllcyIsImdldEhhdmVWaWRlbyIsImdldFN5c1BsYXRmb3JtX3N0cmluZyIsImdldFN5c1BsYXRmb3JtIiwiaW5pdCIsIm9iaiIsIl9zdXBlciIsImhpZGVCYW5uZXIiLCJzaG93QmFubmVyIiwiYmFubmVyQWQiLCJvcFVuaW9uIiwiY3JlYXRlQmFubmVyQWQiLCJjb250YWluZXJJZCIsInBvc0lkIiwibWVkaWFJZCIsIm9uTG9hZCIsImxpZXlvdV9zaG93TG9nIiwic2hvd0Jhbm5lckN1c3RvbSIsInNob3dCYW5uZXJCeVRvcCIsImlkIiwic2hvd0Jhbm5lckJ5Qm90dG9tIiwic2hvd1Jld2FyZGVkVmlkZW9BZCIsImNsb3NlQ2FsbEJhY2siLCJ2aWRlb0FkIiwiY3JlYXRlVmlkZW9BZCIsInNob3ciLCJvbkVycm9yIiwiZXJyIiwib25DbG9zZSIsInJlcyIsImlzRW5kZWQiLCJzaG93U3BvdCIsImludGVyc3RpdGlhbEFkIiwiY3JlYXRlSW50ZXJzdGl0aWFsQWQiLCJzaG93U3BvdEJ5UGF1c2UiLCJzaG93U3BvdEJ5QmVnaW4iLCJzaG93U3BvdEJ5RmluaXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxhQUFhLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQzVCLGFBQVNDLE9BQU8sQ0FBQyxhQUFELENBRFk7QUFFNUJDLEVBQUFBLFVBQVUsRUFBQyxFQUZpQjtBQUl6QkMsRUFBQUEsWUFKeUIsMEJBSVg7QUFDVixXQUFPLElBQVA7QUFDSCxHQU53QjtBQU96QkMsRUFBQUEscUJBUHlCLG1DQU9GO0FBQ3pCLFdBQU8sUUFBUDtBQUNHLEdBVHdCO0FBVXpCQyxFQUFBQSxjQVZ5Qiw0QkFVVDtBQUNsQixXQUFPLENBQVA7QUFDQSxHQVoyQjtBQWN6QkMsRUFBQUEsSUFBSSxFQUFFLGNBQVNDLEdBQVQsRUFBYTtBQUNmLFNBQUtDLE1BQUw7QUFDSCxHQWhCd0I7QUFpQnpCQyxFQUFBQSxVQWpCeUIsd0JBaUJiLENBRVgsQ0FuQndCO0FBb0J6QkMsRUFBQUEsVUFwQnlCLHNCQW9CZEgsR0FwQmMsRUFvQlY7QUFDWCxRQUFJSSxRQUFRLEdBQUdDLE9BQU8sQ0FBQ0MsY0FBUixDQUF1QjtBQUNsQ0MsTUFBQUEsV0FBVyxFQUFFLFlBRHFCO0FBRWxDQyxNQUFBQSxLQUFLLEVBQUUsT0FGMkI7QUFHbENDLE1BQUFBLE9BQU8sRUFBRTtBQUh5QixLQUF2QixDQUFmO0FBS0FMLElBQUFBLFFBQVEsQ0FBQ00sTUFBVCxDQUFnQixZQUFZO0FBQ3hCQyxNQUFBQSxjQUFjLENBQUMsUUFBRCxDQUFkO0FBQ0gsS0FGRDtBQUdILEdBN0J3QjtBQThCekJDLEVBQUFBLGdCQTlCeUIsNEJBOEJSWixHQTlCUSxFQThCSjtBQUNqQixTQUFLRyxVQUFMO0FBQ0gsR0FoQ3dCO0FBaUN6QlUsRUFBQUEsZUFqQ3lCLDJCQWlDVEMsRUFqQ1MsRUFpQ047QUFDZixTQUFLWCxVQUFMO0FBQ0gsR0FuQ3dCO0FBb0N6QlksRUFBQUEsa0JBcEN5Qiw4QkFvQ05ELEVBcENNLEVBb0NIO0FBQ2xCLFNBQUtYLFVBQUw7QUFDSCxHQXRDd0I7QUF1Q3pCYSxFQUFBQSxtQkF2Q3lCLCtCQXVDTEYsRUF2Q0ssRUF1Q0ZHLGFBdkNFLEVBdUNZO0FBQ2pDLFFBQUlDLE9BQU8sR0FBR2IsT0FBTyxDQUFDYyxhQUFSLENBQXNCO0FBQ2hDWCxNQUFBQSxLQUFLLEVBQUUsT0FEeUI7QUFFaENDLE1BQUFBLE9BQU8sRUFBRTtBQUZ1QixLQUF0QixDQUFkO0FBSUFTLElBQUFBLE9BQU8sQ0FBQ1IsTUFBUixDQUFlLFlBQVk7QUFDdkJRLE1BQUFBLE9BQU8sQ0FBQ0UsSUFBUjtBQUNBVCxNQUFBQSxjQUFjLENBQUMsWUFBRCxDQUFkO0FBQ0gsS0FIRDtBQUlBTyxJQUFBQSxPQUFPLENBQUNHLE9BQVIsQ0FBZ0IsVUFBVUMsR0FBVixFQUFlO0FBQzNCTCxNQUFBQSxhQUFhLENBQUMsS0FBRCxDQUFiO0FBQ0FOLE1BQUFBLGNBQWMsQ0FBQ1csR0FBRCxDQUFkO0FBQ0gsS0FIRDtBQUtBSixJQUFBQSxPQUFPLENBQUNLLE9BQVIsQ0FBZ0IsVUFBVUMsR0FBVixFQUFlO0FBQzNCLFVBQUlBLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxPQUFmLEVBQXdCO0FBQ3BCUixRQUFBQSxhQUFhLENBQUMsSUFBRCxDQUFiLENBRG9CLENBRXBCO0FBQ0gsT0FIRCxNQUdPO0FBQ0hBLFFBQUFBLGFBQWEsQ0FBQyxLQUFELENBQWIsQ0FERyxDQUVIO0FBQ0g7QUFDSixLQVJEO0FBU0gsR0E5RHdCO0FBK0R6QlMsRUFBQUEsUUEvRHlCLHNCQStEZjtBQUNOLFFBQUlDLGNBQWMsR0FBR3RCLE9BQU8sQ0FBQ3VCLG9CQUFSLENBQTZCO0FBQzlDcEIsTUFBQUEsS0FBSyxFQUFFLE9BRHVDO0FBRTlDQyxNQUFBQSxPQUFPLEVBQUU7QUFGcUMsS0FBN0IsQ0FBckI7QUFJQWtCLElBQUFBLGNBQWMsQ0FBQ2pCLE1BQWYsQ0FBc0IsWUFBWTtBQUM5QmlCLE1BQUFBLGNBQWMsQ0FBQ1AsSUFBZjtBQUNBVCxNQUFBQSxjQUFjLENBQUMsVUFBRCxDQUFkO0FBQ0gsS0FIRDtBQUlILEdBeEV3QjtBQXlFekJrQixFQUFBQSxlQXpFeUIsNkJBeUVSO0FBQ2IsU0FBS0gsUUFBTDtBQUNILEdBM0V3QjtBQTRFekJJLEVBQUFBLGVBNUV5Qiw2QkE0RVIsQ0FBRSxDQTVFTTtBQTZFekJDLEVBQUFBLGdCQTdFeUIsOEJBNkVQO0FBQ2QsU0FBS0wsUUFBTDtBQUNIO0FBL0V3QixDQUFULENBQXBCO0FBaUZBTSxNQUFNLENBQUNDLE9BQVAsR0FBaUIxQyxhQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5sZXQgT3Bwb0g1TWFuYWdlciA9IGNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiByZXF1aXJlKCdCYXNlTWFuYWdlcicpLFxyXG5cdHByb3BlcnRpZXM6e1xyXG4gICAgfSxcclxuICAgIGdldEhhdmVWaWRlbygpe1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuICAgIGdldFN5c1BsYXRmb3JtX3N0cmluZygpe1xyXG5cdFx0cmV0dXJuICdvcHBvaDUnO1xyXG4gICAgfSxcclxuICAgIGdldFN5c1BsYXRmb3JtKCl7XHJcblx0XHRyZXR1cm4gNTtcclxuXHR9LFxyXG4gICAgXHJcbiAgICBpbml0OiBmdW5jdGlvbihvYmope1xyXG4gICAgICAgIHRoaXMuX3N1cGVyKCk7XHJcbiAgICB9LFxyXG4gICAgaGlkZUJhbm5lcigpe1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIHNob3dCYW5uZXIob2JqKXtcclxuICAgICAgICB2YXIgYmFubmVyQWQgPSBvcFVuaW9uLmNyZWF0ZUJhbm5lckFkKHtcclxuICAgICAgICAgICAgY29udGFpbmVySWQ6ICdHYW1lQ2FudmFzJyxcclxuICAgICAgICAgICAgcG9zSWQ6ICcyODgxMCcsXHJcbiAgICAgICAgICAgIG1lZGlhSWQ6ICcxMDEwMDAxNDEnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYmFubmVyQWQub25Mb2FkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ+W5v+WRiuWKoOi9veaIkOWKnycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNob3dCYW5uZXJDdXN0b20ob2JqKXtcclxuICAgICAgICB0aGlzLnNob3dCYW5uZXIoKTtcclxuICAgIH0sXHJcbiAgICBzaG93QmFubmVyQnlUb3AoaWQpe1xyXG4gICAgICAgIHRoaXMuc2hvd0Jhbm5lcigpO1xyXG4gICAgfSxcclxuICAgIHNob3dCYW5uZXJCeUJvdHRvbShpZCl7XHJcbiAgICAgICAgdGhpcy5zaG93QmFubmVyKCk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1Jld2FyZGVkVmlkZW9BZChpZCxjbG9zZUNhbGxCYWNrKXtcclxuICAgICAgICB2YXIgdmlkZW9BZCA9IG9wVW5pb24uY3JlYXRlVmlkZW9BZCh7XHJcbiAgICAgICAgICAgIHBvc0lkOiAnMjg4MTInLFxyXG4gICAgICAgICAgICBtZWRpYUlkOiAnMTAxMDAwMTQxJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZpZGVvQWQub25Mb2FkKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmlkZW9BZC5zaG93KCk7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCfmv4DlirHop4bpopHlub/lkYrliqDovb3miJDlip8nKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2aWRlb0FkLm9uRXJyb3IoZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBjbG9zZUNhbGxCYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgbGlleW91X3Nob3dMb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmlkZW9BZC5vbkNsb3NlKGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuaXNFbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VDYWxsQmFjayh0cnVlKTtcclxuICAgICAgICAgICAgICAgIC8vIOato+W4uOaSreaUvue7k+adn++8jOWPr+S7peS4i+WPkeWlluWKsVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2xvc2VDYWxsQmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAvLyDmkq3mlL7kuK3pgJTpgIDlh7rvvIzkuI3kuIvlj5HlpZblirFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNob3dTcG90KCl7XHJcbiAgICAgICAgdmFyIGludGVyc3RpdGlhbEFkID0gb3BVbmlvbi5jcmVhdGVJbnRlcnN0aXRpYWxBZCh7XHJcbiAgICAgICAgICAgIHBvc0lkOiAnMjg4MTEnLFxyXG4gICAgICAgICAgICBtZWRpYUlkOiAnMTAxMDAwMTQxJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGludGVyc3RpdGlhbEFkLm9uTG9hZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGludGVyc3RpdGlhbEFkLnNob3coKTtcclxuICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ+aPkuWxj+W5v+WRiuWKoOi9veaIkOWKnycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNob3dTcG90QnlQYXVzZSgpe1xyXG4gICAgICAgIHRoaXMuc2hvd1Nwb3QoKTtcclxuICAgIH0sXHJcbiAgICBzaG93U3BvdEJ5QmVnaW4oKXt9LFxyXG4gICAgc2hvd1Nwb3RCeUZpbmlzaCgpe1xyXG4gICAgICAgIHRoaXMuc2hvd1Nwb3QoKTtcclxuICAgIH0sXHJcbn0pXHJcbm1vZHVsZS5leHBvcnRzID0gT3Bwb0g1TWFuYWdlcjtcclxuXHJcblxyXG5cclxuXHJcbiJdfQ==