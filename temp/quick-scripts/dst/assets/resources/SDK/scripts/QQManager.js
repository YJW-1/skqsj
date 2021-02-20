
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/scripts/QQManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26a68wC8RNKU5h3mfP+Ryiw', 'QQManager');
// resources/SDK/scripts/QQManager.js

"use strict";

var BaseManager = require('BaseManager');

var QQManager = cc.Class({
  "extends": require('BaseManager'),
  properties: {
    bannerAd: null
  },
  vibrateShort: function vibrateShort() {
    qq.vibrateShort();
  },
  vibrateLong: function vibrateLong() {
    qq.vibrateLong();
  },
  getVersion: function getVersion() {
    return lieyou_qqGameVersion;
  },
  getHaveVideo: function getHaveVideo() {
    if (qqVideoId == '') {
      return false;
    }

    return true;
  },
  getSysPlatform_string: function getSysPlatform_string() {
    return 'qq';
  },
  getSysPlatform: function getSysPlatform() {
    return 11;
  },
  onShow: function onShow(fun) {
    qq.onShow(fun);
  },
  onHide: function onHide(fun) {
    qq.onHide(fun);
  },
  getSystemInfo: function getSystemInfo() {
    var info = qq.getSystemInfoSync();
    this.platformVersionCode = info.SDKVersion;
    this.canShowAppBox = this.getSDKVersionCanUse('1.7.1');
  },
  setOnlineData: function setOnlineData(data) {
    if (data.qq) {
      if (data.qq.starShowSpotTime) {
        this._showSpotStartTime = Number(data.qq.starShowSpotTime);
      }

      if (data.qq.installShortcutIntervalTime != undefined) {
        this._installShortcutTime = Number(data.qq.installShortcutIntervalTime);
      }

      if (data.qq.serverVersion != undefined) {
        var serverVersoin = Number(data.qq.serverVersion);

        if (serverVersoin >= lieyou_qqGameVersion) {
          this.base_IsShenHe = false;
        } else {
          this.base_IsShenHe = true;
        }
      }

      if (!data.qq.closeShortcut) {
        this.canShowShortcut = true;
      }

      var adData = {};

      if (data.qq.theme) {
        adData.theme = data.qq.theme;
      }

      if (data.qq.crossSwitch) {
        adData.crossSwitch = data.qq.crossSwitch;
      }

      if (data.qq.bizData) {
        adData.bizData = data.qq.bizData;
      }

      if (data.qq.ad_datas) {
        adData.ad_datas = data.qq.ad_datas;
      }

      if (data.qq["switch"]) {
        adData["switch"] = data.qq["switch"];
      }

      this.setAdData(adData);

      if (data.qq.spot_first_ad != undefined) {
        this.spot_first_ad = data.qq.spot_first_ad;
      }

      if (data.qq.refreshAppBoxTime != undefined) {
        this.refreshAppBoxAdTime = Number(data.qq.refreshAppBoxTime);
      }

      if (data.qq.spot_Interval != undefined) {
        this._showSysSpotTime = Number(data.qq.spot_Interval);
      }

      if (data.qq.id_config && data.qq.is_local_pos_id != true) {
        if (data.qq.id_config.bid != undefined) {
          qqBannerId = data.qq.id_config.bid;
        }

        if (data.qq.id_config.spoid != undefined) {
          qqSpotADId = data.qq.id_config.spoid;
        }

        if (data.qq.id_config.awardid != undefined) {
          qqVideoId = data.qq.id_config.awardid;
        }

        if (data.qq.id_config.nativeAd != undefined) {
          qqAppBoxADId = data.qq.id_config.appBoxid;
        }
      }

      if (data.qq.spotShowAppBox != undefined) {
        this.spotShowAppBox = data.qq.spotShowAppBox;
      }

      this.setSwitchData(data.qq);
    } else {}
  },
  initOnlineData: function initOnlineData() {
    if (oppoGetOnlineDataId == '') {
      lieyou_SdkManager.showToast('没有填写qgID');
      return;
    }

    var self = this;
    var version = Userdefault.getIntForKey('sdk_oppo_online_version', 0);
    var time = Userdefault.getIntForKey('sdk_oppo_online_time', 0);
    var sp = Userdefault.getIntForKey('sdk_oppo_online_sp', 0);
    var nowTime = getTime() / 1000;

    if (nowTime - time < sp && nowTime > time) {
      var response = Userdefault.getStringForKey('sdk_oppo_online_data', '');
      var data = JSON.parse(response);
      self.setOnlineData(data);
      return;
    }

    this.dataVersion = version;
    var url = this.getLoginUrl();
    this.setDataForHttp(url, function (response) {
      if (response == "") {
        return;
      }

      try {
        var jsonD = JSON.parse(response);

        if (jsonD.server_data_version) {
          Userdefault.setDataForKey('sdk_oppo_online_version', jsonD.server_data_version);
        }

        if (jsonD.isMoreInfo != undefined) {
          self.isMoreInfo = jsonD.isMoreInfo;
        }

        if (jsonD.sp) {
          Userdefault.setDataForKey('sdk_oppo_online_sp', jsonD.sp);
        }

        Userdefault.setDataForKey('sdk_oppo_online_time', nowTime);

        if (jsonD.server_data_version == version) {
          var response = Userdefault.getStringForKey('sdk_oppo_online_data', '');
          var data = JSON.parse(response);
          self.setOnlineData(data);
          return;
        }

        var data = JSON.parse(response).data;

        if (!data) {
          return;
        }

        self.setOnlineData(data);
        Userdefault.setDataForKey('sdk_oppo_online_data', JSON.stringify(data));
      } catch (error) {
        lieyou_showLog('qqlog------error  initOnlineData + ' + error);
      }
    });
  },
  init: function init(obj) {
    var _this = this;

    if (cc.sys.os != cc.sys.OS_IOS) {
      setTimeout(function () {
        _this.installShortcut2();
      }, 5000);
    }

    this.onHide(function () {
      if (cc.sys.os != cc.sys.OS_IOS) {
        _this.installShortcut2();
      }
    }); // this._super(obj);

    BaseManager.prototype.init.call(this, obj);
    this.spotShowAppBox = true;
    this.getSystemInfo();
    this.openShare();
    this.setShareData();
    this.initAD();
    this.spot_first_ad = 'sys';
    this.refreshAppBoxAdTime = 30;
    this._canShowSysSpot = true;
    this._showSysSpotTime = 0;
    setTimeout(function () {
      _this.initOnlineData();
    }, 1000);
    this.addColorSign();
  },
  initAD: function initAD() {
    var _this2 = this;

    if (qqSpotADId != '' && this.getSDKVersionCanUse('1.12.0')) {
      this._InterstitialAd = qq.createInterstitialAd({
        adUnitId: qqSpotADId
      });

      this._InterstitialAd.onError(function (error) {
        // if(this.spotShowAppBox&&!this.base_IsShenHe){
        //     this.showAppBox2();
        // }
        lieyou_SdkManager.showMoreGameGrid();
        lieyou_showLog('qqlog---------- sporError ' + JSON.stringify(error));
      });
    }

    if (qqVideoId == '') {
      return;
    }

    var videoAd = qq.createRewardedVideoAd({
      adUnitId: qqVideoId
    });
    this.videoAd = videoAd;
    videoAd.onLoad(function () {
      lieyou_showLog('qqlog---------- vd success');
    });
    videoAd.onClose(function (res) {
      lieyou_showLog('qqlog------------ vd playSuccess');

      if (res.isEnded) {
        if (_this2.vdCallBack) _this2.vdCallBack(true);
      } else {
        if (_this2.vdCallBack) _this2.vdCallBack(false);
      }
    });
    videoAd.onError(function (res) {
      lieyou_showLog('qqlog----------- vd fail' + JSON.stringify(res));
      if (_this2.vdCallBack) _this2.vdCallBack(false);
    });
  },
  setShareData: function setShareData() {
    //获取分享数据
    this.setDataForHttp(wxData.shareUrl, function (response) {
      wxData.shareData = JSON.parse(response);
    });
  },
  login: function login() {
    qq.login({
      success: function success(res) {}
    });
  },
  openShare: function openShare() {
    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
    });
    qq.onShareAppMessage(function () {
      var adid = 0;
      var _title = "好玩的游戏，快来一起玩吧";
      var _url = "https://res.igame58.com/wxxyx/commom/shareIcon.png";

      if (wxData.shareData.length > 0) {
        var i = parseInt(Math.random() * wxData.shareData.length);
        var data = wxData.shareData[i].item;
        var random = parseInt(Math.random() * data.length);
        adid = data[random].id;
        _title = data[random].title;
        _url = data[random].img;
      }

      return {
        title: _title,
        imageUrl: _url
      };
    }); // qq.onShareAppMessage(() => ({
    //     title: _title,
    //     imageUrl: _url
    // }))
  },
  share: function share(obj) {
    var adid = 0;
    var _title = "好玩的游戏，快来一起玩吧";
    var _url = "https://res.igame58.com/wxxyx/commom/shareIcon.png";

    if (wxData.shareData.length > 0) {
      var i = parseInt(Math.random() * wxData.shareData.length);
      var data = wxData.shareData[i].item;
      var random = parseInt(Math.random() * data.length);
      adid = data[random].id;
      _title = data[random].title;
      _url = data[random].img;
    }

    qq.shareAppMessage({
      title: _title,
      imageUrl: _url
    });
  },
  showAppBox2: function showAppBox2() {
    var _this3 = this;

    if (!this.canShowAppBox) {
      return;
    }

    if (qqAppBoxADId == '') {
      return;
    }

    if (this._appBox) {
      var time = getTime() / 1000;

      if (time - this.upLoadAppBoxTime > this.refreshAppBoxAdTime) {
        this.upLoadAppBoxTime = time;

        this._appBox.load().then(function () {
          _this3._appBox.show();
        });
      } else {
        this._appBox.show();
      }

      return;
    }

    this.upLoadAppBoxTime = getTime() / 1000;
    this._appBox = qq.createAppBox({
      adUnitId: qqAppBoxADId
    });

    this._appBox.load().then(function () {
      _this3._appBox.show();
    });
  },
  showAppBox: function showAppBox(obj) {
    if (!this.canShowAppBox) {
      return;
    }

    if (qqAppBoxADId == '') {
      return;
    }

    var self = this;
    var fNode = obj.node ? obj.node : cc.director.getScene();
    var nodeX = obj.x ? obj.x : 0;
    var nodeY = obj.y ? obj.y : 0;
    var node = lieyou_qqAppBox();
    fNode.addChild(node);
    node.x = nodeX;
    node.y = nodeY;
    node.on(cc.Node.EventType.TOUCH_START, function (event) {
      self.showAppBox2();
    });
  },
  hideBanner: function hideBanner() {
    if (this.bannerAd) {
      this.bannerAd.destroy();
      this.bannerAd = null;
    }
  },
  showBanner: function showBanner(obj) {
    if (this.moreGameBanner && this.moreGameBanner.isValid) {
      this.moreGameBanner.destroy();
      this.moreGameBanner = null;
    }

    if (qqBannerId == '') {
      return;
    }

    ;
    var self = this;
    var size = cc.view.getFrameSize();
    var w2 = 0;

    if ((cc.winSize.height / cc.winSize.width > 2 || cc.winSize.width / cc.winSize.height > 2) && cc.sys.os == cc.sys.OS_IOS) {
      w2 = 20;
    }

    var w = 300;
    var h = w / 4.121;
    var t = size.height - h;
    var l = (size.width - w) / 2;

    if (!this.bannerAd) {
      this.bannerAd = qq.createBannerAd({
        adUnitId: qqBannerId,
        style: {
          left: l,
          top: t - w2,
          width: w
        }
      });
    }

    this.bannerAd.onLoad(function () {
      self.bannerAd.offLoad(function () {});
      self.bannerAd.offError(function () {});
      lieyou_showLog('qqlog--------------  banner show success');
      self.bannerAd.show();
    });
    this.bannerAd.onError(function (err) {
      self.bannerAd.offLoad(function () {});
      self.bannerAd.offError(function () {});
      lieyou_showLog('qqlog--------------  banner show fail' + JSON.stringify(err));
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
    if (qqVideoId == '') {
      closeCallBack(false);
      return;
    }

    this.vdCallBack = closeCallBack;

    if (this.videoAd) {
      this.videoAd.show();
      return;
    }
  },
  showSpot: function showSpot() {
    var time = parseInt(getTime() / 1000);

    if (time - this._beginGameTime < this._showSpotStartTime) {
      lieyou_showLog('qqlog----------- load spot 启动游戏一定时间内不显示插屏');
      return;
    }

    var self = this;

    if (!this._canShowSysSpot) {
      lieyou_showLog('qqlog----------- load spot or Naitve fail 间隔未到' + self._showSysSpotTime + 's钟');
      this.installShortcut({
        shoaDialog: true
      });
      return;
    }

    setTimeout(function () {
      self._canShowSysSpot = true;
    }, 1000 * self._showSysSpotTime);
    self._canShowSysSpot = false;

    if (this.spotShowAppBox && qqAppBoxADId != '' && !this.base_IsShenHe && this.spot_first_ad != 'sys' && this.canShowAppBox) {
      this.showAppBox2();
      return;
    }

    if (qqSpotADId == '') {
      if (this.spotShowAppBox && !this.base_IsShenHe && this.canShowAppBox) {
        this.showAppBox2();
      }

      return;
    }

    if (this._InterstitialAd) {
      this._InterstitialAd.show();
    }
  },
  showSpotByPause: function showSpotByPause(isHaveNative, top) {
    this.showSpot();
  },
  showSpotByBegin: function showSpotByBegin(isHaveNative, top) {
    this.showSpot();
  },
  showSpotByFinish: function showSpotByFinish(isHaveNative, top) {
    this.showSpot();
  },
  getSDKVersionCanUse: function getSDKVersionCanUse(data) {
    var version = this.platformVersionCode;
    var str = data.split(".");
    var str1 = version.split(".");

    for (var i = 0; i < 3; i++) {
      if (parseInt(str1[i]) < parseInt(str[i])) {
        return false;
      } else if (parseInt(str1[i]) > parseInt(str[i])) {
        break;
      }
    }

    return true;
  },
  newJumpApp: function newJumpApp(obj) {
    if (obj.success) {
      obj.success();
    }

    this.showAppBox2();
  },
  addColorSign: function addColorSign() {
    if (this.getSDKVersionCanUse('1.10.0')) {
      qq.addColorSign();
    }
  },
  installShortcut2: function installShortcut2() {
    var time = parseInt(getTime() / 1000);

    if (time - this._beginGameTime < this._installShortcutStartTime) {
      lieyou_showLog('qqlog installShortcut canShowShortcut 开始时间未到');
      return;
    }

    if (time - this._upInstallShortcutTime < this._installShortcutTime) {
      lieyou_showLog('qqlog installShortcut canShowShortcut 间隔时间未到');
      return;
    }

    this._upInstallShortcutTime = time;

    if (!this.canShowShortcut) {
      lieyou_showLog('qqlog installShortcut canShowShortcut false');
      return;
    }

    if (this.base_IsShenHe) {
      lieyou_showLog('qqlog installShortcut shenhe true');
      return;
    }

    if (!this.getSDKVersionCanUse('1.7.1')) {
      lieyou_showLog('qqlog installShortcut version low');
      return;
    }

    qq.saveAppToDesktop({
      success: function success() {},
      fail: function fail() {}
    });
  },
  showModal: function showModal(obj) {
    qq.showModal({
      title: obj.title ? obj.title : '',
      content: obj.content ? obj.content : '',
      success: function success(res) {
        if (res.confirm) {
          obj.success && obj.success();
        } else if (res.cancel) {
          obj.fail && obj.fail();
        }
      }
    });
  },
  showToast: function showToast(title) {
    qq.showToast({
      title: title
    });
  },
  hideToast: function hideToast() {
    qq.hideToast({});
  },
  showLoading: function showLoading(title) {
    qq.showLoading({
      title: title
    });
  },
  hideLoading: function hideLoading() {
    qq.hideToast({});
  },
  showMoreGameByIcon: function showMoreGameByIcon() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    obj.num = 1;
    this.showBlockAd(obj);
  },
  showMoreGameMiddle_one: function showMoreGameMiddle_one() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    obj.num = 5;
    return this.showBlockAd(obj);
  },
  showMoreGameMiddle_two: function showMoreGameMiddle_two() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (obj.moreGame) {
      return BaseManager.prototype.showMoreGameMiddle_two.call(this, obj);
    }

    obj.num = 5;
    return this.showBlockAd(obj);
  },
  showNativeAd_small: function showNativeAd_small() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    obj.num = 5;
    return this.showBlockAd(obj);
  },
  showNativeAd_big: function showNativeAd_big() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    obj.num = 5;
    return this.showBlockAd(obj);
  },
  showBlockAd: function showBlockAd(obj) {
    if (this.getSDKVersionCanUse('1.15.0') && lieyou_qqBlockAd != "") {
      var fNode = obj.node ? obj.node : cc.director.getScene();

      if (this._blockAd) {
        this._blockAd.offError();

        this._blockAd.onResize();

        this._blockAd.destroy();
      }

      var blockAd = qq.createBlockAd({
        adUnitId: lieyou_qqBlockAd,
        style: {
          left: 50,
          top: 50
        },
        size: obj.num ? obj.num : 5,
        orientation: "landscape"
      });
      this._blockAd = blockAd;
      blockAd.show();
      blockAd.onError(function (res) {
        lieyou_showLog("qqlog----- show gridad fail " + JSON.stringify(res));
      });
      var baseNodejs = fNode.addComponent('lieyou_baseNode');
      blockAd.onResize(function (res) {
        var viewSize = cc.view.getFrameSize();

        var updateCallBack = function updateCallBack() {
          var worldPos = fNode.convertToWorldSpaceAR(cc.v2(obj.x ? obj.x : 0, obj.y ? obj.y : 0));
          var xProportion = worldPos.x / lieyou_SdkManager.sdkWinSize.width;
          var yProportion = 1 - worldPos.y / lieyou_SdkManager.sdkWinSize.height;
          blockAd.style.left = viewSize.width * xProportion - res.width / 2;
          blockAd.style.top = viewSize.height * yProportion - res.height / 2;
        };

        updateCallBack();
        baseNodejs.updateCallBack = updateCallBack;
      });

      baseNodejs.destroyCallBack = function () {
        lieyou_showLog('wxlog---------- gridAd destroy');
        blockAd.destroy();
      };

      return true;
    }

    return false;
  }
});
module.exports = QQManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXHNjcmlwdHNcXFFRTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJCYXNlTWFuYWdlciIsInJlcXVpcmUiLCJRUU1hbmFnZXIiLCJjYyIsIkNsYXNzIiwicHJvcGVydGllcyIsImJhbm5lckFkIiwidmlicmF0ZVNob3J0IiwicXEiLCJ2aWJyYXRlTG9uZyIsImdldFZlcnNpb24iLCJsaWV5b3VfcXFHYW1lVmVyc2lvbiIsImdldEhhdmVWaWRlbyIsInFxVmlkZW9JZCIsImdldFN5c1BsYXRmb3JtX3N0cmluZyIsImdldFN5c1BsYXRmb3JtIiwib25TaG93IiwiZnVuIiwib25IaWRlIiwiZ2V0U3lzdGVtSW5mbyIsImluZm8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsInBsYXRmb3JtVmVyc2lvbkNvZGUiLCJTREtWZXJzaW9uIiwiY2FuU2hvd0FwcEJveCIsImdldFNES1ZlcnNpb25DYW5Vc2UiLCJzZXRPbmxpbmVEYXRhIiwiZGF0YSIsInN0YXJTaG93U3BvdFRpbWUiLCJfc2hvd1Nwb3RTdGFydFRpbWUiLCJOdW1iZXIiLCJpbnN0YWxsU2hvcnRjdXRJbnRlcnZhbFRpbWUiLCJ1bmRlZmluZWQiLCJfaW5zdGFsbFNob3J0Y3V0VGltZSIsInNlcnZlclZlcnNpb24iLCJzZXJ2ZXJWZXJzb2luIiwiYmFzZV9Jc1NoZW5IZSIsImNsb3NlU2hvcnRjdXQiLCJjYW5TaG93U2hvcnRjdXQiLCJhZERhdGEiLCJ0aGVtZSIsImNyb3NzU3dpdGNoIiwiYml6RGF0YSIsImFkX2RhdGFzIiwic2V0QWREYXRhIiwic3BvdF9maXJzdF9hZCIsInJlZnJlc2hBcHBCb3hUaW1lIiwicmVmcmVzaEFwcEJveEFkVGltZSIsInNwb3RfSW50ZXJ2YWwiLCJfc2hvd1N5c1Nwb3RUaW1lIiwiaWRfY29uZmlnIiwiaXNfbG9jYWxfcG9zX2lkIiwiYmlkIiwicXFCYW5uZXJJZCIsInNwb2lkIiwicXFTcG90QURJZCIsImF3YXJkaWQiLCJuYXRpdmVBZCIsInFxQXBwQm94QURJZCIsImFwcEJveGlkIiwic3BvdFNob3dBcHBCb3giLCJzZXRTd2l0Y2hEYXRhIiwiaW5pdE9ubGluZURhdGEiLCJvcHBvR2V0T25saW5lRGF0YUlkIiwibGlleW91X1Nka01hbmFnZXIiLCJzaG93VG9hc3QiLCJzZWxmIiwidmVyc2lvbiIsIlVzZXJkZWZhdWx0IiwiZ2V0SW50Rm9yS2V5IiwidGltZSIsInNwIiwibm93VGltZSIsImdldFRpbWUiLCJyZXNwb25zZSIsImdldFN0cmluZ0ZvcktleSIsIkpTT04iLCJwYXJzZSIsImRhdGFWZXJzaW9uIiwidXJsIiwiZ2V0TG9naW5VcmwiLCJzZXREYXRhRm9ySHR0cCIsImpzb25EIiwic2VydmVyX2RhdGFfdmVyc2lvbiIsInNldERhdGFGb3JLZXkiLCJpc01vcmVJbmZvIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJsaWV5b3Vfc2hvd0xvZyIsImluaXQiLCJvYmoiLCJzeXMiLCJvcyIsIk9TX0lPUyIsInNldFRpbWVvdXQiLCJpbnN0YWxsU2hvcnRjdXQyIiwicHJvdG90eXBlIiwiY2FsbCIsIm9wZW5TaGFyZSIsInNldFNoYXJlRGF0YSIsImluaXRBRCIsIl9jYW5TaG93U3lzU3BvdCIsImFkZENvbG9yU2lnbiIsIl9JbnRlcnN0aXRpYWxBZCIsImNyZWF0ZUludGVyc3RpdGlhbEFkIiwiYWRVbml0SWQiLCJvbkVycm9yIiwic2hvd01vcmVHYW1lR3JpZCIsInZpZGVvQWQiLCJjcmVhdGVSZXdhcmRlZFZpZGVvQWQiLCJvbkxvYWQiLCJvbkNsb3NlIiwicmVzIiwiaXNFbmRlZCIsInZkQ2FsbEJhY2siLCJ3eERhdGEiLCJzaGFyZVVybCIsInNoYXJlRGF0YSIsImxvZ2luIiwic3VjY2VzcyIsInNob3dTaGFyZU1lbnUiLCJzaG93U2hhcmVJdGVtcyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwiYWRpZCIsIl90aXRsZSIsIl91cmwiLCJsZW5ndGgiLCJpIiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwiaXRlbSIsImlkIiwidGl0bGUiLCJpbWciLCJpbWFnZVVybCIsInNoYXJlIiwic2hhcmVBcHBNZXNzYWdlIiwic2hvd0FwcEJveDIiLCJfYXBwQm94IiwidXBMb2FkQXBwQm94VGltZSIsImxvYWQiLCJ0aGVuIiwic2hvdyIsImNyZWF0ZUFwcEJveCIsInNob3dBcHBCb3giLCJmTm9kZSIsIm5vZGUiLCJkaXJlY3RvciIsImdldFNjZW5lIiwibm9kZVgiLCJ4Iiwibm9kZVkiLCJ5IiwibGlleW91X3FxQXBwQm94IiwiYWRkQ2hpbGQiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsImV2ZW50IiwiaGlkZUJhbm5lciIsImRlc3Ryb3kiLCJzaG93QmFubmVyIiwibW9yZUdhbWVCYW5uZXIiLCJpc1ZhbGlkIiwic2l6ZSIsInZpZXciLCJnZXRGcmFtZVNpemUiLCJ3MiIsIndpblNpemUiLCJoZWlnaHQiLCJ3aWR0aCIsInciLCJoIiwidCIsImwiLCJjcmVhdGVCYW5uZXJBZCIsInN0eWxlIiwibGVmdCIsInRvcCIsIm9mZkxvYWQiLCJvZmZFcnJvciIsImVyciIsInNob3dCYW5uZXJDdXN0b20iLCJzaG93QmFubmVyQnlUb3AiLCJzaG93QmFubmVyQnlCb3R0b20iLCJzaG93UmV3YXJkZWRWaWRlb0FkIiwiY2xvc2VDYWxsQmFjayIsInNob3dTcG90IiwiX2JlZ2luR2FtZVRpbWUiLCJpbnN0YWxsU2hvcnRjdXQiLCJzaG9hRGlhbG9nIiwic2hvd1Nwb3RCeVBhdXNlIiwiaXNIYXZlTmF0aXZlIiwic2hvd1Nwb3RCeUJlZ2luIiwic2hvd1Nwb3RCeUZpbmlzaCIsInN0ciIsInNwbGl0Iiwic3RyMSIsIm5ld0p1bXBBcHAiLCJfaW5zdGFsbFNob3J0Y3V0U3RhcnRUaW1lIiwiX3VwSW5zdGFsbFNob3J0Y3V0VGltZSIsInNhdmVBcHBUb0Rlc2t0b3AiLCJmYWlsIiwic2hvd01vZGFsIiwiY29udGVudCIsImNvbmZpcm0iLCJjYW5jZWwiLCJoaWRlVG9hc3QiLCJzaG93TG9hZGluZyIsImhpZGVMb2FkaW5nIiwic2hvd01vcmVHYW1lQnlJY29uIiwibnVtIiwic2hvd0Jsb2NrQWQiLCJzaG93TW9yZUdhbWVNaWRkbGVfb25lIiwic2hvd01vcmVHYW1lTWlkZGxlX3R3byIsIm1vcmVHYW1lIiwic2hvd05hdGl2ZUFkX3NtYWxsIiwic2hvd05hdGl2ZUFkX2JpZyIsImxpZXlvdV9xcUJsb2NrQWQiLCJfYmxvY2tBZCIsIm9uUmVzaXplIiwiYmxvY2tBZCIsImNyZWF0ZUJsb2NrQWQiLCJvcmllbnRhdGlvbiIsImJhc2VOb2RlanMiLCJhZGRDb21wb25lbnQiLCJ2aWV3U2l6ZSIsInVwZGF0ZUNhbGxCYWNrIiwid29ybGRQb3MiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJ2MiIsInhQcm9wb3J0aW9uIiwic2RrV2luU2l6ZSIsInlQcm9wb3J0aW9uIiwiZGVzdHJveUNhbGxCYWNrIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLE9BQU8sQ0FBQyxhQUFELENBQTNCOztBQUNBLElBQUlDLFNBQVMsR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDeEIsYUFBU0gsT0FBTyxDQUFDLGFBQUQsQ0FEUTtBQUV4QkksRUFBQUEsVUFBVSxFQUFDO0FBQ0pDLElBQUFBLFFBQVEsRUFBRTtBQUROLEdBRmE7QUFLckJDLEVBQUFBLFlBTHFCLDBCQUtQO0FBQ1ZDLElBQUFBLEVBQUUsQ0FBQ0QsWUFBSDtBQUNILEdBUG9CO0FBUXJCRSxFQUFBQSxXQVJxQix5QkFRUjtBQUNURCxJQUFBQSxFQUFFLENBQUNDLFdBQUg7QUFDSCxHQVZvQjtBQVdyQkMsRUFBQUEsVUFYcUIsd0JBV1Q7QUFDUixXQUFPQyxvQkFBUDtBQUNILEdBYm9CO0FBY3JCQyxFQUFBQSxZQWRxQiwwQkFjUDtBQUNWLFFBQUdDLFNBQVMsSUFBSSxFQUFoQixFQUFvQjtBQUNoQixhQUFPLEtBQVA7QUFDSDs7QUFDRCxXQUFPLElBQVA7QUFDSCxHQW5Cb0I7QUFvQnJCQyxFQUFBQSxx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LEdBQUdILFFBQVEsQ0FBQy9FLENBQVQsR0FBYXZGLGlCQUFpQixDQUFDMEssVUFBbEIsQ0FBNkI5RCxLQUE1RDtBQUNBLGNBQUkrRCxXQUFXLEdBQUcsSUFBSUwsUUFBUSxDQUFDN0UsQ0FBVCxHQUFhekYsaUJBQWlCLENBQUMwSyxVQUFsQixDQUE2Qi9ELE1BQWhFO0FBQ0FvRCxVQUFBQSxPQUFPLENBQUM3QyxLQUFSLENBQWNDLElBQWQsR0FBcUJpRCxRQUFRLENBQUN4RCxLQUFULEdBQWU2RCxXQUFmLEdBQTZCekgsR0FBRyxDQUFDNEQsS0FBSixHQUFVLENBQTVEO0FBQ0FtRCxVQUFBQSxPQUFPLENBQUM3QyxLQUFSLENBQWNFLEdBQWQsR0FBb0JnRCxRQUFRLENBQUN6RCxNQUFULEdBQWdCZ0UsV0FBaEIsR0FBOEIzSCxHQUFHLENBQUMyRCxNQUFKLEdBQVcsQ0FBN0Q7QUFDSCxTQU5EOztBQU9BMEQsUUFBQUEsY0FBYztBQUNkSCxRQUFBQSxVQUFVLENBQUNHLGNBQVgsR0FBNEJBLGNBQTVCO0FBQ0gsT0FYRDs7QUFhVEgsTUFBQUEsVUFBVSxDQUFDVSxlQUFYLEdBQTZCLFlBQUk7QUFDaENwSixRQUFBQSxjQUFjLENBQUMsZ0NBQUQsQ0FBZDtBQUNBdUksUUFBQUEsT0FBTyxDQUFDN0QsT0FBUjtBQUNTLE9BSFY7O0FBSVMsYUFBTyxJQUFQO0FBQ0g7O0FBQ0QsV0FBTyxLQUFQO0FBQ0g7QUE3a0JvQixDQUFULENBQWhCO0FBK2tCQTJFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjVPLFNBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNvbnN0IEJhc2VNYW5hZ2VyID0gcmVxdWlyZSgnQmFzZU1hbmFnZXInKTtcclxubGV0IFFRTWFuYWdlciA9IGNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiByZXF1aXJlKCdCYXNlTWFuYWdlcicpLFxyXG5cdHByb3BlcnRpZXM6e1xyXG4gICAgICAgIGJhbm5lckFkOiBudWxsLFxyXG4gICAgfSxcclxuICAgIHZpYnJhdGVTaG9ydCgpe1xyXG4gICAgICAgIHFxLnZpYnJhdGVTaG9ydCgpO1xyXG4gICAgfSxcclxuICAgIHZpYnJhdGVMb25nKCl7XHJcbiAgICAgICAgcXEudmlicmF0ZUxvbmcoKTtcclxuICAgIH0sXHJcbiAgICBnZXRWZXJzaW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIGxpZXlvdV9xcUdhbWVWZXJzaW9uO1xyXG4gICAgfSxcclxuICAgIGdldEhhdmVWaWRlbygpe1xyXG4gICAgICAgIGlmKHFxVmlkZW9JZCA9PSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuICAgIGdldFN5c1BsYXRmb3JtX3N0cmluZygpe1xyXG5cdFx0cmV0dXJuICdxcSc7XHJcbiAgICB9LFxyXG4gICAgZ2V0U3lzUGxhdGZvcm0oKXtcclxuXHRcdHJldHVybiAxMTtcclxuICAgIH0sXHJcbiAgICBvblNob3c6ZnVuY3Rpb24oZnVuKXtcclxuICAgICAgICBxcS5vblNob3coZnVuKTtcclxuICAgIH0sXHJcbiAgICBvbkhpZGU6ZnVuY3Rpb24oZnVuKXtcclxuICAgICAgICBxcS5vbkhpZGUoZnVuKTtcclxuICAgIH0sXHJcbiAgICBnZXRTeXN0ZW1JbmZvKCl7XHJcbiAgICAgICAgdmFyIGluZm8gPSBxcS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgICAgIHRoaXMucGxhdGZvcm1WZXJzaW9uQ29kZSA9IGluZm8uU0RLVmVyc2lvbjtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuY2FuU2hvd0FwcEJveCA9IHRoaXMuZ2V0U0RLVmVyc2lvbkNhblVzZSgnMS43LjEnKTtcclxuICAgIH0sXHJcbiAgICBzZXRPbmxpbmVEYXRhKGRhdGEpe1xyXG4gICAgICAgIGlmKGRhdGEucXEpe1xyXG4gICAgICAgICAgICBpZihkYXRhLnFxLnN0YXJTaG93U3BvdFRpbWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd1Nwb3RTdGFydFRpbWUgPSBOdW1iZXIoZGF0YS5xcS5zdGFyU2hvd1Nwb3RUaW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihkYXRhLnFxLmluc3RhbGxTaG9ydGN1dEludGVydmFsVGltZSE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luc3RhbGxTaG9ydGN1dFRpbWUgPSBOdW1iZXIoZGF0YS5xcS5pbnN0YWxsU2hvcnRjdXRJbnRlcnZhbFRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGEucXEuc2VydmVyVmVyc2lvbiAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlcnZlclZlcnNvaW4gPSBOdW1iZXIoZGF0YS5xcS5zZXJ2ZXJWZXJzaW9uKTtcclxuICAgICAgICAgICAgICAgIGlmKHNlcnZlclZlcnNvaW4gPj0gbGlleW91X3FxR2FtZVZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2VfSXNTaGVuSGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZV9Jc1NoZW5IZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoIWRhdGEucXEuY2xvc2VTaG9ydGN1dCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhblNob3dTaG9ydGN1dCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGFkRGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBpZihkYXRhLnFxLnRoZW1lKXtcclxuICAgICAgICAgICAgICAgIGFkRGF0YS50aGVtZSA9IGRhdGEucXEudGhlbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS5xcS5jcm9zc1N3aXRjaCl7XHJcbiAgICAgICAgICAgICAgICBhZERhdGEuY3Jvc3NTd2l0Y2ggPSBkYXRhLnFxLmNyb3NzU3dpdGNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGEucXEuYml6RGF0YSl7XHJcbiAgICAgICAgICAgICAgICBhZERhdGEuYml6RGF0YSA9IGRhdGEucXEuYml6RGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihkYXRhLnFxLmFkX2RhdGFzKXtcclxuICAgICAgICAgICAgICAgIGFkRGF0YS5hZF9kYXRhcyA9IGRhdGEucXEuYWRfZGF0YXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS5xcS5zd2l0Y2gpe1xyXG4gICAgICAgICAgICAgICAgYWREYXRhLnN3aXRjaCA9IGRhdGEucXEuc3dpdGNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QWREYXRhKGFkRGF0YSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihkYXRhLnFxLnNwb3RfZmlyc3RfYWQgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BvdF9maXJzdF9hZCA9IGRhdGEucXEuc3BvdF9maXJzdF9hZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihkYXRhLnFxLnJlZnJlc2hBcHBCb3hUaW1lICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hBcHBCb3hBZFRpbWUgPSBOdW1iZXIoZGF0YS5xcS5yZWZyZXNoQXBwQm94VGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS5xcS5zcG90X0ludGVydmFsICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93U3lzU3BvdFRpbWUgPSBOdW1iZXIoZGF0YS5xcS5zcG90X0ludGVydmFsKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoZGF0YS5xcS5pZF9jb25maWcgJiYgZGF0YS5xcS5pc19sb2NhbF9wb3NfaWQgIT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLnFxLmlkX2NvbmZpZy5iaWQgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBxcUJhbm5lcklkID0gZGF0YS5xcS5pZF9jb25maWcuYmlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5xcS5pZF9jb25maWcuc3BvaWQgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBxcVNwb3RBRElkID0gZGF0YS5xcS5pZF9jb25maWcuc3BvaWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLnFxLmlkX2NvbmZpZy5hd2FyZGlkICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcXFWaWRlb0lkID0gZGF0YS5xcS5pZF9jb25maWcuYXdhcmRpZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGRhdGEucXEuaWRfY29uZmlnLm5hdGl2ZUFkICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgcXFBcHBCb3hBRElkID0gZGF0YS5xcS5pZF9jb25maWcuYXBwQm94aWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS5xcS5zcG90U2hvd0FwcEJveCAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcG90U2hvd0FwcEJveCA9IGRhdGEucXEuc3BvdFNob3dBcHBCb3g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRTd2l0Y2hEYXRhKGRhdGEucXEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBpbml0T25saW5lRGF0YSgpe1xyXG4gICAgICAgIGlmKG9wcG9HZXRPbmxpbmVEYXRhSWQgPT0gJycpe1xyXG4gICAgICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93VG9hc3QoJ+ayoeacieWhq+WGmXFnSUQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHZlcnNpb24gPSBVc2VyZGVmYXVsdC5nZXRJbnRGb3JLZXkoJ3Nka19vcHBvX29ubGluZV92ZXJzaW9uJywwKTtcclxuICAgICAgICB2YXIgdGltZSA9IFVzZXJkZWZhdWx0LmdldEludEZvcktleSgnc2RrX29wcG9fb25saW5lX3RpbWUnLDApO1xyXG4gICAgICAgIHZhciBzcCA9IFVzZXJkZWZhdWx0LmdldEludEZvcktleSgnc2RrX29wcG9fb25saW5lX3NwJywwKTtcclxuICAgICAgICB2YXIgbm93VGltZSA9IGdldFRpbWUoKS8xMDAwO1xyXG4gICAgICAgIGlmKG5vd1RpbWUgLSB0aW1lIDwgc3AgJiYgbm93VGltZSA+IHRpbWUpe1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBVc2VyZGVmYXVsdC5nZXRTdHJpbmdGb3JLZXkoJ3Nka19vcHBvX29ubGluZV9kYXRhJywnJyk7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHNlbGYuc2V0T25saW5lRGF0YShkYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGFWZXJzaW9uID0gdmVyc2lvbjtcclxuICAgICAgICB2YXIgdXJsID0gdGhpcy5nZXRMb2dpblVybCgpO1xyXG5cdFx0dGhpcy5zZXREYXRhRm9ySHR0cCh1cmwsZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG5cdFx0XHRpZihyZXNwb25zZSA9PSBcIlwiKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIganNvbkQgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIGlmKGpzb25ELnNlcnZlcl9kYXRhX3ZlcnNpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJkZWZhdWx0LnNldERhdGFGb3JLZXkoJ3Nka19vcHBvX29ubGluZV92ZXJzaW9uJyxqc29uRC5zZXJ2ZXJfZGF0YV92ZXJzaW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGpzb25ELmlzTW9yZUluZm8gIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmlzTW9yZUluZm8gPSBqc29uRC5pc01vcmVJbmZvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoanNvbkQuc3Ape1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJkZWZhdWx0LnNldERhdGFGb3JLZXkoJ3Nka19vcHBvX29ubGluZV9zcCcsanNvbkQuc3ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgVXNlcmRlZmF1bHQuc2V0RGF0YUZvcktleSgnc2RrX29wcG9fb25saW5lX3RpbWUnLG5vd1RpbWUpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihqc29uRC5zZXJ2ZXJfZGF0YV92ZXJzaW9uID09IHZlcnNpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IFVzZXJkZWZhdWx0LmdldFN0cmluZ0ZvcktleSgnc2RrX29wcG9fb25saW5lX2RhdGEnLCcnKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0T25saW5lRGF0YShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2UpLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZighZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2VsZi5zZXRPbmxpbmVEYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgVXNlcmRlZmF1bHQuc2V0RGF0YUZvcktleSgnc2RrX29wcG9fb25saW5lX2RhdGEnLEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygncXFsb2ctLS0tLS1lcnJvciAgaW5pdE9ubGluZURhdGEgKyAnICsgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcblx0XHR9KTtcclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbihvYmope1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGNjLnN5cy5vcyAhPSBjYy5zeXMuT1NfSU9TKXtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbGxTaG9ydGN1dDIoKTtcclxuICAgICAgICAgICAgfSwgNTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMub25IaWRlKCgpPT57XHJcbiAgICAgICAgICAgIGlmKGNjLnN5cy5vcyAhPSBjYy5zeXMuT1NfSU9TKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFsbFNob3J0Y3V0MigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gdGhpcy5fc3VwZXIob2JqKTtcclxuICAgICAgICBCYXNlTWFuYWdlci5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMsb2JqKTtcclxuICAgICAgICB0aGlzLnNwb3RTaG93QXBwQm94ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmdldFN5c3RlbUluZm8oKTtcclxuICAgICAgICB0aGlzLm9wZW5TaGFyZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0U2hhcmVEYXRhKCk7XHJcbiAgICAgICAgdGhpcy5pbml0QUQoKTtcclxuICAgICAgICB0aGlzLnNwb3RfZmlyc3RfYWQgPSAnc3lzJztcclxuICAgICAgICB0aGlzLnJlZnJlc2hBcHBCb3hBZFRpbWUgPSAzMDtcclxuICAgICAgICB0aGlzLl9jYW5TaG93U3lzU3BvdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc2hvd1N5c1Nwb3RUaW1lID0gMDtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdE9ubGluZURhdGEoKTsgICAgXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkQ29sb3JTaWduKCk7XHJcbiAgICB9LFxyXG4gICAgaW5pdEFEKCl7XHJcbiAgICAgICAgaWYocXFTcG90QURJZCAhPSAnJyAmJiB0aGlzLmdldFNES1ZlcnNpb25DYW5Vc2UoJzEuMTIuMCcpKXtcclxuICAgICAgICAgICAgdGhpcy5fSW50ZXJzdGl0aWFsQWQgPSBxcS5jcmVhdGVJbnRlcnN0aXRpYWxBZCh7XHJcbiAgICAgICAgICAgICAgICBhZFVuaXRJZDpxcVNwb3RBRElkXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLl9JbnRlcnN0aXRpYWxBZC5vbkVycm9yKChlcnJvcik9PntcclxuICAgICAgICAgICAgICAgIC8vIGlmKHRoaXMuc3BvdFNob3dBcHBCb3gmJiF0aGlzLmJhc2VfSXNTaGVuSGUpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuc2hvd0FwcEJveDIoKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dNb3JlR2FtZUdyaWQoKTtcclxuICAgICAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCdxcWxvZy0tLS0tLS0tLS0gc3BvckVycm9yICcrIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihxcVZpZGVvSWQgPT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdmlkZW9BZCA9IHFxLmNyZWF0ZVJld2FyZGVkVmlkZW9BZCh7IFxyXG4gICAgICAgICAgICBhZFVuaXRJZDogcXFWaWRlb0lkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy52aWRlb0FkID0gdmlkZW9BZDtcclxuICAgICAgICB2aWRlb0FkLm9uTG9hZCgoKSA9PntcclxuICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ3FxbG9nLS0tLS0tLS0tLSB2ZCBzdWNjZXNzJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmlkZW9BZC5vbkNsb3NlKChyZXMpID0+e1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygncXFsb2ctLS0tLS0tLS0tLS0gdmQgcGxheVN1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgaWYocmVzLmlzRW5kZWQpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy52ZENhbGxCYWNrKVxyXG4gICAgICAgICAgICAgICAgdGhpcy52ZENhbGxCYWNrKHRydWUpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMudmRDYWxsQmFjaylcclxuICAgICAgICAgICAgICAgIHRoaXMudmRDYWxsQmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB2aWRlb0FkLm9uRXJyb3IoKHJlcykgPT57XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCdxcWxvZy0tLS0tLS0tLS0tIHZkIGZhaWwnICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudmRDYWxsQmFjaylcclxuICAgICAgICAgICAgdGhpcy52ZENhbGxCYWNrKGZhbHNlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZXRTaGFyZURhdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly/ojrflj5bliIbkuqvmlbDmja5cclxuXHRcdHRoaXMuc2V0RGF0YUZvckh0dHAod3hEYXRhLnNoYXJlVXJsLGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAgICAgICAgICAgd3hEYXRhLnNoYXJlRGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuICAgIGxvZ2luKCl7XHJcbiAgICAgICAgcXEubG9naW4oe1xyXG4gICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBvcGVuU2hhcmUoKXtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBxcS5zaG93U2hhcmVNZW51KHtcclxuICAgICAgICAgICAgc2hvd1NoYXJlSXRlbXM6IFsncXEnLCAncXpvbmUnLCAnd2VjaGF0RnJpZW5kcycsICd3ZWNoYXRNb21lbnQnXVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcXEub25TaGFyZUFwcE1lc3NhZ2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIGFkaWQgPSAwO1xyXG4gICAgICAgICAgICB2YXIgX3RpdGxlID0gXCLlpb3njqnnmoTmuLjmiI/vvIzlv6vmnaXkuIDotbfnjqnlkKdcIjtcclxuICAgICAgICAgICAgdmFyIF91cmwgPSBcImh0dHBzOi8vcmVzLmlnYW1lNTguY29tL3d4eHl4L2NvbW1vbS9zaGFyZUljb24ucG5nXCI7XHJcbiAgICAgICAgICAgIGlmKHd4RGF0YS5zaGFyZURhdGEubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgaSA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiB3eERhdGEuc2hhcmVEYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IHd4RGF0YS5zaGFyZURhdGFbaV0uaXRlbTtcclxuICAgICAgICAgICAgICAgIHZhciByYW5kb20gPSBwYXJzZUludChNYXRoLnJhbmRvbSgpICogZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgYWRpZCA9IGRhdGFbcmFuZG9tXS5pZDtcclxuICAgICAgICAgICAgICAgIF90aXRsZSA9IGRhdGFbcmFuZG9tXS50aXRsZTtcclxuICAgICAgICAgICAgICAgIF91cmwgPSBkYXRhW3JhbmRvbV0uaW1nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogX3RpdGxlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6IF91cmxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIHFxLm9uU2hhcmVBcHBNZXNzYWdlKCgpID0+ICh7XHJcbiAgICAgICAgLy8gICAgIHRpdGxlOiBfdGl0bGUsXHJcbiAgICAgICAgLy8gICAgIGltYWdlVXJsOiBfdXJsXHJcbiAgICAgICAgLy8gfSkpXHJcbiAgICB9LFxyXG4gICAgc2hhcmUob2JqKXtcclxuICAgICAgICB2YXIgYWRpZCA9IDA7XHJcblx0XHR2YXIgX3RpdGxlID0gXCLlpb3njqnnmoTmuLjmiI/vvIzlv6vmnaXkuIDotbfnjqnlkKdcIjtcclxuXHRcdHZhciBfdXJsID0gXCJodHRwczovL3Jlcy5pZ2FtZTU4LmNvbS93eHh5eC9jb21tb20vc2hhcmVJY29uLnBuZ1wiO1xyXG5cdFx0aWYod3hEYXRhLnNoYXJlRGF0YS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgdmFyIGkgPSBwYXJzZUludChNYXRoLnJhbmRvbSgpICogd3hEYXRhLnNoYXJlRGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHd4RGF0YS5zaGFyZURhdGFbaV0uaXRlbTtcclxuICAgICAgICAgICAgdmFyIHJhbmRvbSA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiBkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGFkaWQgPSBkYXRhW3JhbmRvbV0uaWQ7XHJcbiAgICAgICAgICAgIF90aXRsZSA9IGRhdGFbcmFuZG9tXS50aXRsZTtcclxuICAgICAgICAgICAgX3VybCA9IGRhdGFbcmFuZG9tXS5pbWc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBxcS5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICB0aXRsZTpfdGl0bGUsXHJcbiAgICAgICAgICAgIGltYWdlVXJsOl91cmxcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIHNob3dBcHBCb3gyKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuY2FuU2hvd0FwcEJveCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocXFBcHBCb3hBRElkID09ICcnKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLl9hcHBCb3gpe1xyXG4gICAgICAgICAgICB2YXIgdGltZSA9IGdldFRpbWUoKS8xMDAwO1xyXG4gICAgICAgICAgICBpZih0aW1lLXRoaXMudXBMb2FkQXBwQm94VGltZSAgPiB0aGlzLnJlZnJlc2hBcHBCb3hBZFRpbWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cExvYWRBcHBCb3hUaW1lID0gdGltZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FwcEJveC5sb2FkKCkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2FwcEJveC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hcHBCb3guc2hvdygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cExvYWRBcHBCb3hUaW1lID0gZ2V0VGltZSgpLzEwMDA7XHJcbiAgICAgICAgdGhpcy5fYXBwQm94ID0gcXEuY3JlYXRlQXBwQm94KHtcclxuICAgICAgICAgICAgYWRVbml0SWQ6IHFxQXBwQm94QURJZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2FwcEJveC5sb2FkKCkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLl9hcHBCb3guc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNob3dBcHBCb3gob2JqKXtcclxuICAgICAgICBpZighdGhpcy5jYW5TaG93QXBwQm94KXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihxcUFwcEJveEFESWQgPT0gJycpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgZk5vZGUgPSBvYmoubm9kZT9vYmoubm9kZTpjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xyXG4gICAgICAgIHZhciBub2RlWCA9IG9iai54P29iai54OjA7XHJcbiAgICAgICAgdmFyIG5vZGVZID0gb2JqLnk/b2JqLnk6MDtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgbm9kZSA9IGxpZXlvdV9xcUFwcEJveCgpO1xyXG4gICAgICAgIGZOb2RlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgIG5vZGUueCA9IG5vZGVYO1xyXG4gICAgICAgIG5vZGUueSA9IG5vZGVZO1xyXG4gICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgc2VsZi5zaG93QXBwQm94MigpO1xyXG4gICAgICAgIH0sICk7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgaGlkZUJhbm5lcigpe1xyXG4gICAgICAgIGlmKHRoaXMuYmFubmVyQWQpe1xyXG4gICAgICAgICAgICB0aGlzLmJhbm5lckFkLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5iYW5uZXJBZCA9IG51bGw7XHJcblx0XHR9XHJcbiAgICB9LFxyXG4gICAgc2hvd0Jhbm5lcihvYmope1xyXG4gICAgICAgIGlmKHRoaXMubW9yZUdhbWVCYW5uZXIgJiYgdGhpcy5tb3JlR2FtZUJhbm5lci5pc1ZhbGlkKXtcclxuICAgICAgICAgICAgdGhpcy5tb3JlR2FtZUJhbm5lci5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMubW9yZUdhbWVCYW5uZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihxcUJhbm5lcklkID09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgc2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAgICAgdmFyIHcyID0gMDtcclxuICAgICAgICBpZigoY2Mud2luU2l6ZS5oZWlnaHQgLyBjYy53aW5TaXplLndpZHRoID4gMiB8fCBjYy53aW5TaXplLndpZHRoIC8gY2Mud2luU2l6ZS5oZWlnaHQgPiAyKSAmJiBjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUyl7XHJcbiAgICAgICAgICAgIHcyID0gMjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB3ID0gMzAwO1xyXG4gICAgICAgIHZhciBoID0gdy80LjEyMTtcclxuICAgICAgICB2YXIgdCA9IHNpemUuaGVpZ2h0IC0gaDtcclxuICAgICAgICB2YXIgbCA9IChzaXplLndpZHRoLXcpLzI7XHJcbiAgICAgICAgaWYoIXRoaXMuYmFubmVyQWQpe1xyXG4gICAgICAgICAgICB0aGlzLmJhbm5lckFkID0gcXEuY3JlYXRlQmFubmVyQWQoe1xyXG4gICAgICAgICAgICAgICAgYWRVbml0SWQ6IHFxQmFubmVySWQsXHJcbiAgICAgICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6bCxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6dC13MixcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDp3XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmJhbm5lckFkLm9uTG9hZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuYmFubmVyQWQub2ZmTG9hZChmdW5jdGlvbigpe30pO1xyXG4gICAgICAgICAgICBzZWxmLmJhbm5lckFkLm9mZkVycm9yKGZ1bmN0aW9uKCl7fSk7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCdxcWxvZy0tLS0tLS0tLS0tLS0tICBiYW5uZXIgc2hvdyBzdWNjZXNzJyk7XHJcbiAgICAgICAgICAgIHNlbGYuYmFubmVyQWQuc2hvdygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5iYW5uZXJBZC5vbkVycm9yKGZ1bmN0aW9uIChlcnIpIHtcclxuICAgICAgICAgICAgc2VsZi5iYW5uZXJBZC5vZmZMb2FkKGZ1bmN0aW9uKCl7fSk7XHJcbiAgICAgICAgICAgIHNlbGYuYmFubmVyQWQub2ZmRXJyb3IoZnVuY3Rpb24oKXt9KTtcclxuICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ3FxbG9nLS0tLS0tLS0tLS0tLS0gIGJhbm5lciBzaG93IGZhaWwnK0pTT04uc3RyaW5naWZ5KGVycikpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgc2hvd0Jhbm5lckN1c3RvbShvYmope1xyXG4gICAgICAgIHRoaXMuc2hvd0Jhbm5lcihvYmopO1xyXG4gICAgfSxcclxuICAgIHNob3dCYW5uZXJCeVRvcChpZCl7XHJcbiAgICAgICAgdGhpcy5zaG93QmFubmVyKHt9KTtcclxuICAgIH0sXHJcbiAgICBzaG93QmFubmVyQnlCb3R0b20oaWQpe1xyXG4gICAgICAgIHRoaXMuc2hvd0Jhbm5lcih7fSk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1Jld2FyZGVkVmlkZW9BZChpZCxjbG9zZUNhbGxCYWNrKXtcclxuICAgICAgICBpZihxcVZpZGVvSWQgPT0gJycpIHtcclxuICAgICAgICAgICAgY2xvc2VDYWxsQmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52ZENhbGxCYWNrID0gY2xvc2VDYWxsQmFjaztcclxuICAgICAgICBpZih0aGlzLnZpZGVvQWQpe1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQWQuc2hvdygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc2hvd1Nwb3QoKXtcclxuICAgICAgICB2YXIgdGltZSA9IHBhcnNlSW50KGdldFRpbWUoKS8xMDAwKTtcclxuICAgICAgICBpZih0aW1lIC0gdGhpcy5fYmVnaW5HYW1lVGltZSA8IHRoaXMuX3Nob3dTcG90U3RhcnRUaW1lKXtcclxuICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ3FxbG9nLS0tLS0tLS0tLS0gbG9hZCBzcG90IOWQr+WKqOa4uOaIj+S4gOWumuaXtumXtOWGheS4jeaYvuekuuaPkuWxjycpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBpZighdGhpcy5fY2FuU2hvd1N5c1Nwb3Qpe1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygncXFsb2ctLS0tLS0tLS0tLSBsb2FkIHNwb3Qgb3IgTmFpdHZlIGZhaWwg6Ze06ZqU5pyq5YiwJytzZWxmLl9zaG93U3lzU3BvdFRpbWUrJ3Ppkp8nKTtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YWxsU2hvcnRjdXQoe3Nob2FEaWFsb2c6dHJ1ZX0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLl9jYW5TaG93U3lzU3BvdCA9IHRydWU7XHJcbiAgICAgICAgfSwgMTAwMCpzZWxmLl9zaG93U3lzU3BvdFRpbWUpO1xyXG4gICAgICAgIHNlbGYuX2NhblNob3dTeXNTcG90ID0gZmFsc2U7XHJcbiAgICAgICAgaWYodGhpcy5zcG90U2hvd0FwcEJveCAmJiBxcUFwcEJveEFESWQgIT0gJycgJiYgIXRoaXMuYmFzZV9Jc1NoZW5IZSAmJiB0aGlzLnNwb3RfZmlyc3RfYWQgIT0gJ3N5cycgJiYgdGhpcy5jYW5TaG93QXBwQm94KXtcclxuICAgICAgICAgICAgdGhpcy5zaG93QXBwQm94MigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHFxU3BvdEFESWQgPT0nJykge1xyXG4gICAgICAgICAgICBpZih0aGlzLnNwb3RTaG93QXBwQm94ICYmICF0aGlzLmJhc2VfSXNTaGVuSGUgJiYgdGhpcy5jYW5TaG93QXBwQm94KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0FwcEJveDIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuX0ludGVyc3RpdGlhbEFkKXtcclxuICAgICAgICAgICAgdGhpcy5fSW50ZXJzdGl0aWFsQWQuc2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93U3BvdEJ5UGF1c2UoaXNIYXZlTmF0aXZlLHRvcCl7XHJcbiAgICAgICAgdGhpcy5zaG93U3BvdCgpO1xyXG4gICAgfSxcclxuICAgIHNob3dTcG90QnlCZWdpbihpc0hhdmVOYXRpdmUsdG9wKXtcclxuICAgICAgICB0aGlzLnNob3dTcG90KCk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1Nwb3RCeUZpbmlzaChpc0hhdmVOYXRpdmUsdG9wKXtcclxuICAgICAgICB0aGlzLnNob3dTcG90KCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0U0RLVmVyc2lvbkNhblVzZTogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHR2YXIgdmVyc2lvbiA9IHRoaXMucGxhdGZvcm1WZXJzaW9uQ29kZTtcclxuXHRcdHZhciBzdHIgPSBkYXRhLnNwbGl0KFwiLlwiKTtcclxuXHRcdHZhciBzdHIxID0gdmVyc2lvbi5zcGxpdChcIi5cIik7XHJcblx0XHRmb3IodmFyIGkgPSAwO2k8MztpKyspIHtcclxuXHRcdFx0aWYocGFyc2VJbnQoc3RyMVtpXSk8cGFyc2VJbnQoc3RyW2ldKSkgeyAgIFxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fWVsc2UgaWYocGFyc2VJbnQoc3RyMVtpXSk+cGFyc2VJbnQoc3RyW2ldKSkge1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBuZXdKdW1wQXBwKG9iail7XHJcbiAgICAgICAgaWYob2JqLnN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgICBvYmouc3VjY2VzcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3dBcHBCb3gyKCk7XHJcbiAgICB9LFxyXG4gICAgYWRkQ29sb3JTaWduKCl7XHJcbiAgICAgICAgaWYodGhpcy5nZXRTREtWZXJzaW9uQ2FuVXNlKCcxLjEwLjAnKSl7XHJcbiAgICAgICAgICAgIHFxLmFkZENvbG9yU2lnbigpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaW5zdGFsbFNob3J0Y3V0Migpe1xyXG4gICAgICAgIHZhciB0aW1lID0gcGFyc2VJbnQoZ2V0VGltZSgpLzEwMDApO1xyXG4gICAgICAgIGlmKHRpbWUgLSB0aGlzLl9iZWdpbkdhbWVUaW1lIDwgdGhpcy5faW5zdGFsbFNob3J0Y3V0U3RhcnRUaW1lKXtcclxuICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ3FxbG9nIGluc3RhbGxTaG9ydGN1dCBjYW5TaG93U2hvcnRjdXQg5byA5aeL5pe26Ze05pyq5YiwJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGltZSAtIHRoaXMuX3VwSW5zdGFsbFNob3J0Y3V0VGltZSA8IHRoaXMuX2luc3RhbGxTaG9ydGN1dFRpbWUpe1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygncXFsb2cgaW5zdGFsbFNob3J0Y3V0IGNhblNob3dTaG9ydGN1dCDpl7TpmpTml7bpl7TmnKrliLAnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl91cEluc3RhbGxTaG9ydGN1dFRpbWUgPSB0aW1lO1xyXG4gICAgICAgIGlmKCF0aGlzLmNhblNob3dTaG9ydGN1dCl7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCdxcWxvZyBpbnN0YWxsU2hvcnRjdXQgY2FuU2hvd1Nob3J0Y3V0IGZhbHNlJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5iYXNlX0lzU2hlbkhlKXtcclxuICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ3FxbG9nIGluc3RhbGxTaG9ydGN1dCBzaGVuaGUgdHJ1ZScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLmdldFNES1ZlcnNpb25DYW5Vc2UoJzEuNy4xJykpe1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygncXFsb2cgaW5zdGFsbFNob3J0Y3V0IHZlcnNpb24gbG93Jyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcXEuc2F2ZUFwcFRvRGVza3RvcCh7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6KCk9PntcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDooKT0+e1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3dNb2RhbChvYmope1xyXG4gICAgICAgIHFxLnNob3dNb2RhbCh7dGl0bGU6b2JqLnRpdGxlP29iai50aXRsZTonJyxjb250ZW50Om9iai5jb250ZW50P29iai5jb250ZW50OicnLHN1Y2Nlc3M6KHJlcyk9PntcclxuICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICBvYmouc3VjY2VzcyAmJiBvYmouc3VjY2VzcygpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgIG9iai5mYWlsICYmIG9iai5mYWlsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9fSk7XHJcbiAgICB9LFxyXG5cdHNob3dUb2FzdCh0aXRsZSl7XHJcbiAgICAgICAgcXEuc2hvd1RvYXN0KHt0aXRsZTp0aXRsZX0pO1xyXG4gICAgfSxcclxuXHRoaWRlVG9hc3QoKXtcclxuICAgICAgICBxcS5oaWRlVG9hc3Qoe30pO1xyXG4gICAgfSxcclxuXHRzaG93TG9hZGluZyh0aXRsZSl7XHJcbiAgICAgICAgcXEuc2hvd0xvYWRpbmcoe3RpdGxlOnRpdGxlfSk7XHJcbiAgICB9LFxyXG5cdGhpZGVMb2FkaW5nKCl7XHJcbiAgICAgICAgcXEuaGlkZVRvYXN0KHt9KTtcclxuICAgIH0sXHJcbiAgICBzaG93TW9yZUdhbWVCeUljb24ob2JqID0ge30pe1xyXG4gICAgICAgIG9iai5udW0gPSAxO1xyXG4gICAgICAgIHRoaXMuc2hvd0Jsb2NrQWQob2JqKTtcclxuICAgIH0sXHJcbiAgICBzaG93TW9yZUdhbWVNaWRkbGVfb25lKG9iaiA9IHt9KXtcclxuICAgICAgICBvYmoubnVtID0gNTtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaG93QmxvY2tBZChvYmopO1xyXG4gICAgfSxcclxuICAgIHNob3dNb3JlR2FtZU1pZGRsZV90d28ob2JqID0ge30pe1xyXG4gICAgICAgIGlmKG9iai5tb3JlR2FtZSl7XHJcblx0XHRcdHJldHVybiBCYXNlTWFuYWdlci5wcm90b3R5cGUuc2hvd01vcmVHYW1lTWlkZGxlX3R3by5jYWxsKHRoaXMsb2JqKTtcclxuXHRcdH1cclxuICAgICAgICBvYmoubnVtID0gNTtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaG93QmxvY2tBZChvYmopO1xyXG4gICAgfSxcclxuICAgIHNob3dOYXRpdmVBZF9zbWFsbChvYmogPSB7fSl7XHJcbiAgICAgICAgb2JqLm51bSA9IDU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvd0Jsb2NrQWQob2JqKTtcclxuICAgIH0sXHJcbiAgICBzaG93TmF0aXZlQWRfYmlnKG9iaiA9IHt9KXtcclxuICAgICAgICBvYmoubnVtID0gNTtcclxuICAgICAgICByZXR1cm4gdGhpcy5zaG93QmxvY2tBZChvYmopO1xyXG4gICAgfSxcclxuICAgIHNob3dCbG9ja0FkKG9iail7XHJcbiAgICAgICAgaWYodGhpcy5nZXRTREtWZXJzaW9uQ2FuVXNlKCcxLjE1LjAnKSAmJiBsaWV5b3VfcXFCbG9ja0FkICE9IFwiXCIpe1xyXG4gICAgICAgICAgICB2YXIgZk5vZGUgPSBvYmoubm9kZT9vYmoubm9kZTpjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZih0aGlzLl9ibG9ja0FkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2NrQWQub2ZmRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2NrQWQub25SZXNpemUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jsb2NrQWQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBibG9ja0FkID0gcXEuY3JlYXRlQmxvY2tBZCh7XHJcbiAgICAgICAgICAgICAgICBhZFVuaXRJZDpsaWV5b3VfcXFCbG9ja0FkLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6e2xlZnQ6NTAsdG9wOjUwfSxcclxuICAgICAgICAgICAgICAgIHNpemU6b2JqLm51bT9vYmoubnVtOjUsXHJcbiAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjpcImxhbmRzY2FwZVwiXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLl9ibG9ja0FkID0gYmxvY2tBZDtcclxuICAgICAgICAgICAgYmxvY2tBZC5zaG93KCk7XHJcblxyXG4gICAgICAgICAgICBibG9ja0FkLm9uRXJyb3IoKHJlcyk9PntcclxuXHRcdFx0XHRsaWV5b3Vfc2hvd0xvZyhcInFxbG9nLS0tLS0gc2hvdyBncmlkYWQgZmFpbCBcIitKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBiYXNlTm9kZWpzID0gZk5vZGUuYWRkQ29tcG9uZW50KCdsaWV5b3VfYmFzZU5vZGUnKTtcclxuICAgICAgICAgICAgYmxvY2tBZC5vblJlc2l6ZSgocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgdmFyIHZpZXdTaXplID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKTtcclxuICAgICAgICAgICAgICAgIGxldCB1cGRhdGVDYWxsQmFjayA9ICgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdvcmxkUG9zID0gZk5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKG9iai54P29iai54OjAsIG9iai55P29iai55OjApKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgeFByb3BvcnRpb24gPSB3b3JsZFBvcy54IC8gbGlleW91X1Nka01hbmFnZXIuc2RrV2luU2l6ZS53aWR0aDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgeVByb3BvcnRpb24gPSAxLSAod29ybGRQb3MueSAvIGxpZXlvdV9TZGtNYW5hZ2VyLnNka1dpblNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgICAgICBibG9ja0FkLnN0eWxlLmxlZnQgPSB2aWV3U2l6ZS53aWR0aCp4UHJvcG9ydGlvbiAtIHJlcy53aWR0aC8yO1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrQWQuc3R5bGUudG9wID0gdmlld1NpemUuaGVpZ2h0KnlQcm9wb3J0aW9uIC0gcmVzLmhlaWdodC8yO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlQ2FsbEJhY2soKTtcclxuICAgICAgICAgICAgICAgIGJhc2VOb2RlanMudXBkYXRlQ2FsbEJhY2sgPSB1cGRhdGVDYWxsQmFjaztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG5cdFx0XHRiYXNlTm9kZWpzLmRlc3Ryb3lDYWxsQmFjayA9ICgpPT57XHJcblx0XHRcdFx0bGlleW91X3Nob3dMb2coJ3d4bG9nLS0tLS0tLS0tLSBncmlkQWQgZGVzdHJveScpO1xyXG5cdFx0XHRcdGJsb2NrQWQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG59KVxyXG5tb2R1bGUuZXhwb3J0cyA9IFFRTWFuYWdlcjtcclxuXHJcblxyXG5cclxuXHJcbiJdfQ==