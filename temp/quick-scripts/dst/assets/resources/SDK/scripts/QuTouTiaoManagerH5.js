
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/scripts/QuTouTiaoManagerH5.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a371fD0K+lKxbKHTk538p81', 'QuTouTiaoManagerH5');
// resources/SDK/scripts/QuTouTiaoManagerH5.js

"use strict";

//main.js里面有个 cc.view.enableAutoFullScreen()方法，把括号里面的条件换成false 关闭全屏显示
//加在index.html 头部
//<script type="text/javascript" src="//newidea4-gamecenter-frontend.1sapp.com/sdk/prod/h5.v1.0.0.js?spread=required"></script>
//?_NO_BRIDGE_=true&app_id=a3H6PDHNZgYd
var QuTouTiaoManagerH5 = cc.Class({
  "extends": require('BaseManager'),
  properties: {
    bannerAd: null
  },
  getHaveVideo: function getHaveVideo() {
    return true;
  },
  getSysPlatform_string: function getSysPlatform_string() {
    return 'qutoutiao';
  },
  getSysPlatform: function getSysPlatform() {
    return 12;
  },
  init: function init(obj) {
    this._super();
  },
  hideBanner: function hideBanner() {
    this._haveShowBanner = false;
    qttGame.hideBanner();
  },
  showBanner: function showBanner(obj) {
    if (this._haveShowBanner) {
      return;
    }

    this._haveShowBanner = true;
    qttGame.showBanner();
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
    var options = {};
    options.gametype = parseInt(Math.random() * 3) + 1; //互动游戏类型，1(砸金蛋)  2(laba)  3(大转盘)

    options.rewardtype = 1; //互动广告框，只有 1

    options.data = {};
    options.data.title = "游戏奖励"; //互动抽中奖后的道具提示文字

    options.data.url = "//newidea4-gamecenter-frontend.1sapp.com/game/prod/fkxxl_img/1.png"; //互动抽中奖后的道具图标(可选)

    cc.audioEngine.stopAllEffects();
    cc.game.pause();
    qttGame.showVideo(function (res) {
      cc.game.resume();

      if (window.QTTPlayVDCallBack) {
        window.QTTPlayVDCallBack();
      }

      lieyou_showLog('qutoutiao--- showvideo ' + res);

      if (res == 1) {
        closeCallBack(true);
      } else {
        if (res == 0) {
          closeCallBack(false);
        } else {
          closeCallBack(false);
        }
      }
    }, options);
  },
  showSpot: function showSpot() {
    var ispause = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var options = {};
    options.gametype = parseInt(Math.random() * 3) + 1; //互动游戏类型，1(砸金蛋)  2(laba)  3(大转盘)

    options.rewardtype = 1; //互动广告框，只有 1
    // options.data ={};
    // options.data.title ="刷新道具";//互动抽中奖后的道具提示文字
    // options.data.url ="//newidea4-gamecenter-frontend.1sapp.com/game/prod/fkxxl_img/1.png";//互动抽中奖后的道具图标(可选)
    // options.callback=(res)=>{
    //     if(res ==1){
    //     }else{
    //     }
    // };

    if (ispause) {
      qttGame.showHDReward(options); // qttGame.showHDAD(options);
    } else {
      qttGame.showHDReward(options);
    }
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
module.exports = QuTouTiaoManagerH5;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXHNjcmlwdHNcXFF1VG91VGlhb01hbmFnZXJINS5qcyJdLCJuYW1lcyI6WyJRdVRvdVRpYW9NYW5hZ2VySDUiLCJjYyIsIkNsYXNzIiwicmVxdWlyZSIsInByb3BlcnRpZXMiLCJiYW5uZXJBZCIsImdldEhhdmVWaWRlbyIsImdldFN5c1BsYXRmb3JtX3N0cmluZyIsImdldFN5c1BsYXRmb3JtIiwiaW5pdCIsIm9iaiIsIl9zdXBlciIsImhpZGVCYW5uZXIiLCJfaGF2ZVNob3dCYW5uZXIiLCJxdHRHYW1lIiwic2hvd0Jhbm5lciIsInNob3dCYW5uZXJDdXN0b20iLCJzaG93QmFubmVyQnlUb3AiLCJpZCIsInNob3dCYW5uZXJCeUJvdHRvbSIsInNob3dSZXdhcmRlZFZpZGVvQWQiLCJjbG9zZUNhbGxCYWNrIiwib3B0aW9ucyIsImdhbWV0eXBlIiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwicmV3YXJkdHlwZSIsImRhdGEiLCJ0aXRsZSIsInVybCIsImF1ZGlvRW5naW5lIiwic3RvcEFsbEVmZmVjdHMiLCJnYW1lIiwicGF1c2UiLCJzaG93VmlkZW8iLCJyZXMiLCJyZXN1bWUiLCJ3aW5kb3ciLCJRVFRQbGF5VkRDYWxsQmFjayIsImxpZXlvdV9zaG93TG9nIiwic2hvd1Nwb3QiLCJpc3BhdXNlIiwic2hvd0hEUmV3YXJkIiwic2hvd1Nwb3RCeVBhdXNlIiwiaXNIYXZlTmF0aXZlIiwidG9wIiwic2hvd1Nwb3RCeUJlZ2luIiwic2hvd1Nwb3RCeUZpbmlzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxrQkFBa0IsR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDakMsYUFBU0MsT0FBTyxDQUFDLGFBQUQsQ0FEaUI7QUFFakNDLEVBQUFBLFVBQVUsRUFBQztBQUNKQyxJQUFBQSxRQUFRLEVBQUU7QUFE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S0FBYyxDQUFmLENBQVIsR0FBNEIsQ0FBOUMsQ0FKcUIsQ0FJMkI7O0FBQ2hESixJQUFBQSxPQUFPLENBQUNLLFVBQVIsR0FBb0IsQ0FBcEIsQ0FMcUIsQ0FLQztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQUdlLE9BQUgsRUFBVztBQUNQNUIsTUFBQUEsT0FBTyxDQUFDNkIsWUFBUixDQUFxQnJCLE9BQXJCLEVBRE8sQ0FFUDtBQUNILEtBSEQsTUFHSztBQUNEUixNQUFBQSxPQUFPLENBQUM2QixZQUFSLENBQXFCckIsT0FBckI7QUFDSDtBQUNKLEdBdkY2QjtBQXdGOUJzQixFQUFBQSxlQXhGOEIsMkJBd0ZkQyxZQXhGYyxFQXdGREMsR0F4RkMsRUF3Rkc7QUFDN0IsU0FBS0wsUUFBTCxDQUFjLElBQWQ7QUFDSCxHQTFGNkI7QUEyRjlCTSxFQUFBQSxlQTNGOEIsMkJBMkZkRixZQTNGYyxFQTJGREMsR0EzRkMsRUEyRkc7QUFDN0IsU0FBS0wsUUFBTDtBQUNILEdBN0Y2QjtBQThGOUJPLEVBQUFBLGdCQTlGOEIsNEJBOEZiSCxZQTlGYSxFQThGQUMsR0E5RkEsRUE4Rkk7QUFDOUIsU0FBS0wsUUFBTDtBQUNIO0FBaEc2QixDQUFULENBQXpCO0FBbUdBUSxNQUFNLENBQUNDLE9BQVAsR0FBaUJsRCxrQkFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vL21haW4uanPph4zpnaLmnInkuKogY2Mudmlldy5lbmFibGVBdXRvRnVsbFNjcmVlbigp5pa55rOV77yM5oqK5ous5Y+36YeM6Z2i55qE5p2h5Lu25o2i5oiQZmFsc2Ug5YWz6Zet5YWo5bGP5pi+56S6XHJcbi8v5Yqg5ZyoaW5kZXguaHRtbCDlpLTpg6hcclxuLy88c2NyaXB0IHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiBzcmM9XCIvL25ld2lkZWE0LWdhbWVjZW50ZXItZnJvbnRlbmQuMXNhcHAuY29tL3Nkay9wcm9kL2g1LnYxLjAuMC5qcz9zcHJlYWQ9cmVxdWlyZWRcIj48L3NjcmlwdD5cclxuLy8/X05PX0JSSURHRV89dHJ1ZSZhcHBfaWQ9YTNINlBESE5aZ1lkXHJcbmxldCBRdVRvdVRpYW9NYW5hZ2VySDUgPSBjYy5DbGFzcyh7XHJcblx0ZXh0ZW5kczogcmVxdWlyZSgnQmFzZU1hbmFnZXInKSxcclxuXHRwcm9wZXJ0aWVzOntcclxuICAgICAgICBiYW5uZXJBZDogbnVsbCxcclxuICAgIH0sXHJcbiAgICBnZXRIYXZlVmlkZW8oKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBnZXRTeXNQbGF0Zm9ybV9zdHJpbmcoKXtcclxuXHRcdHJldHVybiAncXV0b3V0aWFvJztcclxuICAgIH0sXHJcbiAgICBnZXRTeXNQbGF0Zm9ybSgpe1xyXG4gICAgICAgIHJldHVybiAxMjtcclxuXHR9LFxyXG4gICAgXHJcbiAgICBpbml0OiBmdW5jdGlvbihvYmope1xyXG4gICAgICAgIHRoaXMuX3N1cGVyKCk7XHJcbiAgICB9LFxyXG4gICAgaGlkZUJhbm5lcigpe1xyXG4gICAgICAgIHRoaXMuX2hhdmVTaG93QmFubmVyID0gZmFsc2U7XHJcbiAgICAgICAgcXR0R2FtZS5oaWRlQmFubmVyKCk7XHJcbiAgICB9LFxyXG4gICAgc2hvd0Jhbm5lcihvYmope1xyXG4gICAgICAgIGlmKHRoaXMuX2hhdmVTaG93QmFubmVyKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9oYXZlU2hvd0Jhbm5lciA9IHRydWU7XHJcbiAgICAgICAgcXR0R2FtZS5zaG93QmFubmVyKCk7XHJcbiAgICB9LFxyXG4gICAgc2hvd0Jhbm5lckN1c3RvbShvYmope1xyXG4gICAgICAgIHRoaXMuc2hvd0Jhbm5lcihvYmopO1xyXG4gICAgfSxcclxuICAgIHNob3dCYW5uZXJCeVRvcChpZCl7XHJcbiAgICAgICAgdGhpcy5zaG93QmFubmVyKHt9KTtcclxuICAgIH0sXHJcbiAgICBzaG93QmFubmVyQnlCb3R0b20oaWQpe1xyXG4gICAgICAgIHRoaXMuc2hvd0Jhbm5lcih7fSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3dSZXdhcmRlZFZpZGVvQWQoaWQsY2xvc2VDYWxsQmFjayl7XHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPXt9O1xyXG4gICAgICAgIG9wdGlvbnMuZ2FtZXR5cGUgPXBhcnNlSW50KE1hdGgucmFuZG9tKCkqMykgKyAxOy8v5LqS5Yqo5ri45oiP57G75Z6L77yMMSjnoLjph5Hom4spICAyKGxhYmEpICAzKOWkp+i9rOebmClcclxuICAgICAgICBvcHRpb25zLnJld2FyZHR5cGUgPTE7Ly/kupLliqjlub/lkYrmoYbvvIzlj6rmnIkgMVxyXG4gICAgICAgIG9wdGlvbnMuZGF0YSA9e307XHJcbiAgICAgICAgb3B0aW9ucy5kYXRhLnRpdGxlID1cIua4uOaIj+WlluWKsVwiOy8v5LqS5Yqo5oq95Lit5aWW5ZCO55qE6YGT5YW35o+Q56S65paH5a2XXHJcbiAgICAgICAgb3B0aW9ucy5kYXRhLnVybCA9XCIvL25ld2lkZWE0LWdhbWVjZW50ZXItZnJvbnRlbmQuMXNhcHAuY29tL2dhbWUvcHJvZC9ma3h4bF9pbWcvMS5wbmdcIjsvL+S6kuWKqOaKveS4reWlluWQjueahOmBk+WFt+Wbvuaghyjlj6/pgIkpXHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuICAgICAgICBjYy5nYW1lLnBhdXNlKCk7XHJcbiAgICAgICAgcXR0R2FtZS5zaG93VmlkZW8oKHJlcyk9PntcclxuICAgICAgICAgICAgY2MuZ2FtZS5yZXN1bWUoKTtcclxuICAgICAgICAgICAgaWYod2luZG93LlFUVFBsYXlWRENhbGxCYWNrKXtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5RVFRQbGF5VkRDYWxsQmFjaygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCdxdXRvdXRpYW8tLS0gc2hvd3ZpZGVvICcgKyByZXMpO1xyXG4gICAgICAgICAgICBpZihyZXMgPT0xKXtcclxuICAgICAgICAgICAgICAgIGNsb3NlQ2FsbEJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaWYocmVzID09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQ2FsbEJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VDYWxsQmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBvcHRpb25zKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvd1Nwb3QoaXNwYXVzZSA9IGZhbHNlKXtcclxuICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgdmFyIG9wdGlvbnMgPXt9O1xyXG4gICAgICAgIG9wdGlvbnMuZ2FtZXR5cGUgPXBhcnNlSW50KE1hdGgucmFuZG9tKCkqMykgKyAxOy8v5LqS5Yqo5ri45oiP57G75Z6L77yMMSjnoLjph5Hom4spICAyKGxhYmEpICAzKOWkp+i9rOebmClcclxuICAgICAgICBvcHRpb25zLnJld2FyZHR5cGUgPTE7Ly/kupLliqjlub/lkYrmoYbvvIzlj6rmnIkgMVxyXG4gICAgICAgIC8vIG9wdGlvbnMuZGF0YSA9e307XHJcbiAgICAgICAgLy8gb3B0aW9ucy5kYXRhLnRpdGxlID1cIuWIt+aWsOmBk+WFt1wiOy8v5LqS5Yqo5oq95Lit5aWW5ZCO55qE6YGT5YW35o+Q56S65paH5a2XXHJcbiAgICAgICAgLy8gb3B0aW9ucy5kYXRhLnVybCA9XCIvL25ld2lkZWE0LWdhbWVjZW50ZXItZnJvbnRlbmQuMXNhcHAuY29tL2dhbWUvcHJvZC9ma3h4bF9pbWcvMS5wbmdcIjsvL+S6kuWKqOaKveS4reWlluWQjueahOmBk+WFt+Wbvuaghyjlj6/pgIkpXHJcbiAgICAgICAgLy8gb3B0aW9ucy5jYWxsYmFjaz0ocmVzKT0+e1xyXG4gICAgICAgIC8vICAgICBpZihyZXMgPT0xKXtcclxuICAgICAgICAvLyAgICAgfWVsc2V7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGlzcGF1c2Upe1xyXG4gICAgICAgICAgICBxdHRHYW1lLnNob3dIRFJld2FyZChvcHRpb25zKTtcclxuICAgICAgICAgICAgLy8gcXR0R2FtZS5zaG93SERBRChvcHRpb25zKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgcXR0R2FtZS5zaG93SERSZXdhcmQob3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNob3dTcG90QnlQYXVzZShpc0hhdmVOYXRpdmUsdG9wKXtcclxuICAgICAgICB0aGlzLnNob3dTcG90KHRydWUpO1xyXG4gICAgfSxcclxuICAgIHNob3dTcG90QnlCZWdpbihpc0hhdmVOYXRpdmUsdG9wKXtcclxuICAgICAgICB0aGlzLnNob3dTcG90KCk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1Nwb3RCeUZpbmlzaChpc0hhdmVOYXRpdmUsdG9wKXtcclxuICAgICAgICB0aGlzLnNob3dTcG90KCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbn0pXHJcbm1vZHVsZS5leHBvcnRzID0gUXVUb3VUaWFvTWFuYWdlckg1O1xyXG5cclxuXHJcblxyXG5cclxuIl19