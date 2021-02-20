
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/scripts/MagicManagerH5.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXHNjcmlwdHNcXE1hZ2ljTWFuYWdlckg1LmpzIl0sIm5hbWVzIjpbIk1hZ2ljTWFuYWdlckg1IiwiY2MiLCJDbGFzcyIsInJlcXVpcmUiLCJwcm9wZXJ0aWVzIiwiYmFubmVyQWQiLCJnZXRIYXZlVmlkZW8iLCJnZXRTeXNQbGF0Zm9ybV9zdHJpbmciLCJnZXRTeXNQbGF0Zm9ybSIsImluaXQiLCJvYmoiLCJfc3VwZXIiLCJpbml0UGxheVZkQ2FsbEJhY2siLCJoaWRlQmFubmVyIiwic2hvd0Jhbm5lciIsInNob3dCYW5uZXJDdXN0b20iLCJzaG93QmFubmVyQnlUb3AiLCJpZCIsInNob3dCYW5uZXJCeUJvdHRvbSIsInNlbGYiLCJ3aW5kb3ciLCJjYWxsYmFja0Fkc1dpdGhTY2VuZSIsInJlcyIsInBsYXlWaWRlb0NhbGxCYWNrIiwiQ2xpZW50TmF0aXZlIiwiaGlkZUFkc1dpdGhTY2VuZSIsIm1hZ2ljX1ZpZGVvSWQiLCJzaG93UmV3YXJkZWRWaWRlb0FkIiwiY2xvc2VDYWxsQmFjayIsInNob3dBZHNXaXRoU2NlbmUiLCJzaG93U3BvdCIsInNob3dTcG90QnlQYXVzZSIsImlzSGF2ZU5hdGl2ZSIsInRvcCIsInNob3dTcG90QnlCZWdpbiIsInNob3dTcG90QnlGaW5pc2giLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLGNBQWMsR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDN0IsYUFBU0MsT0FBTyxDQUFDLGFBQUQsQ0FEYTtBQUU3QkMsRUFBQUEsVUFBVSxFQUFDO0FBQ0pDLElBQUFBLFFBQVEsRUFBRTtBQUROLEdBRmtCO0FBSzFCQyxFQUFBQSxZQUwwQiwwQkFLWjtBQUNWLFdBQU8sSUFBUDtBQUNILEdBUHlCO0FBUTFCQyxFQUFBQSxxQkFSMEIsbUNBUUg7QUFDekIsV0FBTyxPQUFQO0FBQ0csR0FWeUI7QUFXMUJDLEVBQUFBLGNBWDBCLDRCQVdWO0FBQ1osV0FBTyxFQUFQO0FBQ04sR0FiNEI7QUFlMUJDLEVBQUFBLElBQUksRUFBRSxjQUFTQyxHQUFULEVBQWE7QUFDZixTQUFLQyxNQUFMOztBQUNBLFNBQUtDLGtCQUFMO0FBQ0gsR0FsQnlCO0FBbUIxQkMsRUFBQUEsVUFuQjBCLHdCQW1CZCxDQUNYLENBcEJ5QjtBQXFCMUJDLEVBQUFBLFVBckIwQixzQkFxQmZKLEdBckJlLEVBcUJYLENBQ2QsQ0F0QnlCO0FBdUIxQkssRUFBQUEsZ0JBdkIwQiw0QkF1QlRMLEdBdkJTLEVBdUJMO0FBQ2pCLFNBQUtJLFVBQUwsQ0FBZ0JKLEdBQWhCO0FBQ0gsR0F6QnlCO0FBMEIxQk0sRUFBQUEsZUExQjBCLDJCQTBCVkMsRUExQlUsRUEwQlA7QUFDZixTQUFLSCxVQUFMLENBQWdCLEVBQWhCO0FBQ0gsR0E1QnlCO0FBNkIxQkksRUFBQUEsa0JBN0IwQiw4QkE2QlBELEVBN0JPLEVBNkJKO0FBQ2xCLFNBQUtILFVBQUwsQ0FBZ0IsRUFBaEI7QUFDSCxHQS9CeUI7QUFnQzFCRixFQUFBQSxrQkFoQzBCLGdDQWdDTDtBQUNqQixRQUFJTyxJQUFJLEdBQUcsSUFBWDs7QUFDQUMsSUFBQUEsTUFBTSxDQUFDQyxvQkFBUCxHQUE4QixVQUFTQyxHQUFULEVBQWM7QUFDeEMsY0FBUUEsR0FBUjtBQUNBLGFBQUssTUFBTDtBQUNJLGNBQUdILElBQUksQ0FBQ0ksaUJBQVIsRUFBMEI7QUFDdEJKLFlBQUFBLElBQUksQ0FBQ0ksaUJBQUwsQ0FBdUIsS0FBdkI7QUFDSDs7QUFDREMsVUFBQUEsWUFBWSxDQUFDQyxnQkFBYixDQUE4QkMsYUFBOUI7QUFDQTs7QUFDSixhQUFLLFFBQUw7QUFDSSxjQUFHUCxJQUFJLENBQUNJLGlCQUFSLEVBQTBCO0FBQ3RCSixZQUFBQSxJQUFJLENBQUNJLGlCQUFMLENBQXVCLElBQXZCO0FBQ0g7O0FBQ0RDLFVBQUFBLFlBQVksQ0FBQ0MsZ0JBQWIsQ0FBOEJDLGFBQTlCO0FBQ0E7O0FBQ0osYUFBSyxTQUFMO0FBYkE7QUFlSCxLQWhCRDtBQWlCSCxHQW5EeUI7QUFvRDFCQyxFQUFBQSxtQkFwRDBCLCtCQW9ETlYsRUFwRE0sRUFvREhXLGFBcERHLEVBb0RXO0FBQ2pDLFFBQUlULElBQUksR0FBRyxJQUFYO0FBQ0FBLElBQUFBLElBQUksQ0FBQ0ksaUJBQUwsR0FBeUJLLGFBQXpCO0FBQ0FKLElBQUFBLFlBQVksQ0FBQ0ssZ0JBQWIsQ0FBOEJILGFBQTlCO0FBQ0gsR0F4RHlCO0FBMEQxQkksRUFBQUEsUUExRDBCLHNCQTBEaEIsQ0FFVCxDQTVEeUI7QUE2RDFCQyxFQUFBQSxlQTdEMEIsMkJBNkRWQyxZQTdEVSxFQTZER0MsR0E3REgsRUE2RE87QUFDN0IsU0FBS0gsUUFBTCxDQUFjLElBQWQ7QUFDSCxHQS9EeUI7QUFnRTFCSSxFQUFBQSxlQWhFMEIsMkJBZ0VWRixZQWhFVSxFQWdFR0MsR0FoRUgsRUFnRU87QUFDN0IsU0FBS0gsUUFBTDtBQUNILEdBbEV5QjtBQW1FMUJLLEVBQUFBLGdCQW5FMEIsNEJBbUVUSCxZQW5FUyxFQW1FSUMsR0FuRUosRUFtRVE7QUFDOUIsU0FBS0gsUUFBTDtBQUNIO0FBckV5QixDQUFULENBQXJCO0FBd0VBTSxNQUFNLENBQUNDLE9BQVAsR0FBaUJyQyxjQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmxldCBNYWdpY01hbmFnZXJINSA9IGNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiByZXF1aXJlKCdCYXNlTWFuYWdlcicpLFxyXG5cdHByb3BlcnRpZXM6e1xyXG4gICAgICAgIGJhbm5lckFkOiBudWxsLFxyXG4gICAgfSxcclxuICAgIGdldEhhdmVWaWRlbygpe1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuICAgIGdldFN5c1BsYXRmb3JtX3N0cmluZygpe1xyXG5cdFx0cmV0dXJuICdtYWdpYyc7XHJcbiAgICB9LFxyXG4gICAgZ2V0U3lzUGxhdGZvcm0oKXtcclxuICAgICAgICByZXR1cm4gMTM7XHJcblx0fSxcclxuICAgIFxyXG4gICAgaW5pdDogZnVuY3Rpb24ob2JqKXtcclxuICAgICAgICB0aGlzLl9zdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdFBsYXlWZENhbGxCYWNrKCk7XHJcbiAgICB9LFxyXG4gICAgaGlkZUJhbm5lcigpe1xyXG4gICAgfSxcclxuICAgIHNob3dCYW5uZXIob2JqKXtcclxuICAgIH0sXHJcbiAgICBzaG93QmFubmVyQ3VzdG9tKG9iail7XHJcbiAgICAgICAgdGhpcy5zaG93QmFubmVyKG9iaik7XHJcbiAgICB9LFxyXG4gICAgc2hvd0Jhbm5lckJ5VG9wKGlkKXtcclxuICAgICAgICB0aGlzLnNob3dCYW5uZXIoe30pO1xyXG4gICAgfSxcclxuICAgIHNob3dCYW5uZXJCeUJvdHRvbShpZCl7XHJcbiAgICAgICAgdGhpcy5zaG93QmFubmVyKHt9KTtcclxuICAgIH0sXHJcbiAgICBpbml0UGxheVZkQ2FsbEJhY2soKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHdpbmRvdy5jYWxsYmFja0Fkc1dpdGhTY2VuZSA9IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHJlcykge1xyXG4gICAgICAgICAgICBjYXNlIFwiRkFJTFwiOlxyXG4gICAgICAgICAgICAgICAgaWYoc2VsZi5wbGF5VmlkZW9DYWxsQmFjayl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wbGF5VmlkZW9DYWxsQmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBDbGllbnROYXRpdmUuaGlkZUFkc1dpdGhTY2VuZShtYWdpY19WaWRlb0lkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiUkVXQVJEXCI6XHJcbiAgICAgICAgICAgICAgICBpZihzZWxmLnBsYXlWaWRlb0NhbGxCYWNrKXtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYXlWaWRlb0NhbGxCYWNrKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQ2xpZW50TmF0aXZlLmhpZGVBZHNXaXRoU2NlbmUobWFnaWNfVmlkZW9JZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlNVQ0NFU1NcIjpcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93UmV3YXJkZWRWaWRlb0FkKGlkLGNsb3NlQ2FsbEJhY2spe1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBzZWxmLnBsYXlWaWRlb0NhbGxCYWNrID0gY2xvc2VDYWxsQmFjaztcclxuICAgICAgICBDbGllbnROYXRpdmUuc2hvd0Fkc1dpdGhTY2VuZShtYWdpY19WaWRlb0lkKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvd1Nwb3QoKXtcclxuICAgICAgIFxyXG4gICAgfSxcclxuICAgIHNob3dTcG90QnlQYXVzZShpc0hhdmVOYXRpdmUsdG9wKXtcclxuICAgICAgICB0aGlzLnNob3dTcG90KHRydWUpO1xyXG4gICAgfSxcclxuICAgIHNob3dTcG90QnlCZWdpbihpc0hhdmVOYXRpdmUsdG9wKXtcclxuICAgICAgICB0aGlzLnNob3dTcG90KCk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1Nwb3RCeUZpbmlzaChpc0hhdmVOYXRpdmUsdG9wKXtcclxuICAgICAgICB0aGlzLnNob3dTcG90KCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbn0pXHJcbm1vZHVsZS5leHBvcnRzID0gTWFnaWNNYW5hZ2VySDU7XHJcblxyXG5cclxuXHJcblxyXG4iXX0=