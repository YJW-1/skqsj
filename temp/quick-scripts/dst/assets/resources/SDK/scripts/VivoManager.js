
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/scripts/VivoManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80a26zNCZlHPpKODIIBFWiT', 'VivoManager');
// resources/SDK/scripts/VivoManager.js

"use strict";

//最低版本1056
var BaseManager = require('BaseManager');

var VivoManager = cc.Class({
  "extends": require('BaseManager'),
  properties: {
    bannerAd: null,
    bannerNativeAd: null,
    time: -1
  },
  getHaveVideo: function getHaveVideo() {
    if (vivoVideoId == '' || !this._canShowAD || this.platformVersionCode < 1041) {
      return false;
    }

    return true;
  },
  getVersion: function getVersion() {
    return vivoGameVersion;
  },
  getSysPlatform_string: function getSysPlatform_string() {
    return 'vivo';
  },
  getSysPlatform: function getSysPlatform() {
    return 3;
  },
  onShow: function onShow(fun) {
    qg.onShow(fun);
  },
  onHide: function onHide(fun) {
    qg.onHide(fun);
  },
  setOnlineData: function setOnlineData(data) {
    if (data.vivo) {
      if (data.vivo.starShowSpotTime) {
        this._showSpotStartTime = Number(data.vivo.starShowSpotTime);
      }

      if (data.vivo.installShortcutIntervalTime != undefined) {
        this._installShortcutTime = Number(data.vivo.installShortcutIntervalTime);
      }

      if (data.vivo.nativeAdLoadServerRes) {
        _SDKNativeAdLoadServerRes = data.vivo.nativeAdLoadServerRes;
      }

      if (data.vivo.serverVersion != undefined) {
        var serverVersoin = Number(data.vivo.serverVersion);

        if (serverVersoin >= vivoGameVersion) {
          this.base_IsShenHe = false;
        } else {
          this.base_IsShenHe = true;
        }
      }

      if (!data.vivo.closeShortcut) {
        this.canShowShortcut = true;
      }

      var adData = {};

      if (data.vivo.theme) {
        adData.theme = data.vivo.theme;
      }

      if (data.vivo.crossSwitch) {
        adData.crossSwitch = data.vivo.crossSwitch;
      }

      if (data.vivo.bizData) {
        adData.bizData = data.vivo.bizData;
      }

      if (data.vivo.ad_datas) {
        adData.ad_datas = data.vivo.ad_datas;
      }

      if (data.vivo["switch"]) {
        adData["switch"] = data.vivo["switch"];
      }

      if (this.platformVersionCode >= 1044 && 0) {
        this.setAdData(adData);
      }

      if (data.vivo.canShowNativeBanner != undefined) {
        this.canShowNativeBanner = data.vivo.canShowNativeBanner;
      }

      if (data.vivo.canShowNativeSpot != undefined) {
        this.canShowNativeSpot = data.vivo.canShowNativeSpot;
      }

      if (data.vivo.spot_Interval != undefined) {
        this._showSysSpotTime = Number(data.vivo.spot_Interval);
      }

      if (data.vivo.startNativeSpot != undefined) {
        this.startNativeSpot = Number(data.vivo.startNativeSpot);
      }

      if (data.vivo.id_config && data.vivo.is_local_pos_id != true) {
        if (data.vivo.id_config.appid != undefined) {
          vivoId_SDK = data.vivo.id_config.appid;
        }

        if (data.vivo.id_config.bid != undefined) {
          vivoBannerId = data.vivo.id_config.bid;
        }

        if (data.vivo.id_config.spoid != undefined) {
          vivoSpotADId = data.vivo.id_config.spoid;
        }

        if (data.vivo.id_config.awardid != undefined) {
          vivoVideoId = data.vivo.id_config.awardid;
        }

        if (data.vivo.id_config.nativeAd != undefined) {
          vivoNativeId = data.vivo.id_config.nativeAd;
        }
      }

      if (data.vivo.banner_close_but_size != undefined) {
        this.banner_close_but_size = Number(data.vivo.banner_close_but_size);
      }

      if (data.vivo.banner_close_but_range != undefined) {
        this.banner_close_but_range = Number(data.vivo.banner_close_but_range);
      }

      if (data.vivo.spot_close_but_alpha != undefined) {
        this.spot_close_but_alpha = Number(data.vivo.spot_close_but_alpha);
      }

      if (data.vivo.spot_close_but_size != undefined) {
        this.spot_close_but_size = Number(data.vivo.spot_close_but_size);
      }

      if (data.vivo.banner_show_height != undefined) {
        this.banner_show_height = Number(data.vivo.banner_show_height);
      }

      if (data.vivo.spot_close_but_range != undefined) {
        this.spot_close_but_range = Number(data.vivo.spot_close_but_range);
      }

      if (data.vivo.banner_close_but_alpha != undefined) {
        this.banner_close_but_alpha = Number(data.vivo.banner_close_but_alpha);
      }

      if (data.vivo.banner_close_but_show != undefined) {
        this.banner_close_but_show = data.vivo.banner_close_but_show;
      }

      if (data.vivo.spot_click_close != undefined) {
        this.spot_click_close = data.vivo.spot_click_close;
      }

      if (data.vivo.spot_first_ad != undefined) {
        this.spot_first_ad = data.vivo.spot_first_ad;
      }

      if (data.vivo.banner_first_ad != undefined) {
        this.banner_first_ad = data.vivo.banner_first_ad;
      }

      if (data.vivo.nativeDelayShowTime != undefined) {
        this.nativeDelayShowTime = Number(data.vivo.nativeDelayShowTime);
      }

      if (data.vivo.nativeDelayDestroyTime != undefined) {
        this.nativeDelayDestroyTime = Number(data.vivo.nativeDelayDestroyTime);
      }

      if (data.vivo.refreshBannerTime != undefined) {
        this.refreshBannerTime = Number(data.vivo.refreshBannerTime);
      }

      this.setSwitchData(data.vivo);
    } else {}
  },
  initOnlineData: function initOnlineData() {
    if (oppoGetOnlineDataId == '') {
      lieyou_SdkManager.showToast('没有填写qgID');
      return;
    }

    var self = this;
    var version = Userdefault.getIntForKey('sdk_vivo_online_version', 0);
    var time = Userdefault.getIntForKey('sdk_vivo_online_time', 0);
    var sp = Userdefault.getIntForKey('sdk_vivo_online_sp', 0);
    var nowTime = getTime() / 1000;

    if (nowTime - time < sp && nowTime > time) {
      var response = Userdefault.getStringForKey('sdk_vivo_online_data', '');
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

        if (jsonD.isMoreInfo != undefined) {
          self.isMoreInfo = jsonD.isMoreInfo;
        }

        if (jsonD.sp) {
          Userdefault.setDataForKey('sdk_vivo_online_sp', jsonD.sp);
        }

        Userdefault.setDataForKey('sdk_vivo_online_time', nowTime);

        if (jsonD.server_data_version == version) {
          var response = Userdefault.getStringForKey('sdk_vivo_online_data', '');
          var data = JSON.parse(response);
          self.setOnlineData(data);
          return;
        }

        var data = JSON.parse(response).data;

        if (!data) {
          return;
        }

        self.setOnlineData(data);

        if (jsonD.server_data_version) {
          Userdefault.setDataForKey('sdk_vivo_online_version', jsonD.server_data_version);
        }

        Userdefault.setDataForKey('sdk_vivo_online_data', JSON.stringify(data));
      } catch (error) {
        lieyou_showLog('vivolog------error  initOnlineData + ' + error);
      }
    });
  },
  getSystemInfo: function getSystemInfo() {
    var _this = this;

    var info = qg.getSystemInfoSync();
    this.platformVersionCode = info.platformVersionCode;
    this.androidVersion = info.osVersionName;
    this.model = info.model;
    openid = info.product;
    this.region = info.region;
    qg.getNetworkType({
      success: function success(res) {
        _this.networkType = res.type;
      }
    });
  },
  init: function init(obj) {
    var _this2 = this;

    // this._super(obj);
    BaseManager.prototype.init.call(this, obj);
    this.getSystemInfo();
    this._canShowAD = true;

    if (this.platformVersionCode < 1031) {
      this._canShowAD = false;
    }

    lieyou_showLog('vivo-------------- init   ' + this._canShowAD);
    this._videoAd = null;
    this._canShowVideoAd = true;
    this._canShowBannerAd = true;
    this._canShowSpotAd = true;
    this._canShowNativeAd = true;
    this.canShowNativeBanner = true;
    this.canShowNativeSpot = true;
    this.spot_first_ad = 'native';
    this.banner_first_ad = "native";
    this.nativeDelayShowTime = 0;
    this._showSysSpotTime = 0;
    this.nativeDelayDestroyTime = 0.1;
    this.spot_close_but_alpha = 180;
    this.spot_close_but_size = 55;
    this.spot_close_but_range = 65;
    this.spot_click_close = true;
    this.refreshBannerTime = 15;
    this.banner_close_but_alpha = 180;
    this.banner_close_but_size = 35;
    this.banner_close_but_range = 40;
    this.banner_show_height = 115;
    this.banner_close_but_show = true;
    this._canShowSysSpot = true;
    this.startNativeSpot = 0;
    setTimeout(function () {
      _this2.initOnlineData();
    }, 1000);
  },
  vibrateShort: function vibrateShort() {
    qg.vibrateShort();
  },
  vibrateLong: function vibrateLong() {
    qg.vibrateLong();
  },
  hideBanner: function hideBanner() {
    var self = this;
    this._canShowBanner = false;
    this._haveBannerAd = false;
    clearInterval(this.bannerTimeOut);

    if (this.bannerAd) {
      this.bannerAd.destroy();
      this.bannerAd = null;
    }

    if (this.bannerNativeAd) {
      this.bannerNativeAd.destroy();
      this.bannerNativeAd = null;
    }

    if (this._BannerNativeADNode && this._BannerNativeADNode.isValid) {
      self._BannerNativeADNode.destroy();

      self._BannerNativeADNode = null;
    }
  },
  showBanner: function showBanner(obj) {
    if (this._canShowBanner) {
      return;
    }

    if (this._BannerNativeADNode && this._BannerNativeADNode.isValid) {
      if (this._bannerAdStyle && this._bannerAdStyle.y != undefined) {
        this._BannerNativeADNode.y = cc.winSize.height - this._bannerAdStyle.y - this.banner_show_height * lieyou_SdkManager._SceneScale;
      }
    }

    if (this.bannerAd) {
      this.bannerAd.destroy();
      this.bannerAd = null;
    }

    this._haveBannerAd = false;
    this._canShowBanner = true;
    clearInterval(this.bannerTimeOut);
    var refreshTime = this.refreshBannerTime;

    if (this.banner_first_ad == "native") {
      this.showBannerNative();
      this.bannerTimeOut = setInterval(this.showBannerNative.bind(this), 1000 * refreshTime); //刷新广告
    } else {
      this.showBannerSys();
      this.bannerTimeOut = setInterval(this.showBannerSys.bind(this), 1000 * refreshTime); //刷新广告
    }
  },
  showBannerSys: function showBannerSys(isEnd) {
    var self = this;
    lieyou_showLog('vivolog--------------  banner show + ' + self._canShowBanner + "   " + this._haveBannerAd);

    if (!self._canShowBanner) {
      return;
    }

    if (this._haveBannerAd) {
      return;
    }

    if (vivoBannerId == '' || !this._canShowAD || !this._canShowBannerAd) {
      if (!this._canShowBannerAd) {
        lieyou_showLog('vivolog----------- load banner fail 间隔未到10s钟');
      }

      if (!isEnd) {
        self.showBannerNative(true);
      }

      return;
    }

    ;
    setTimeout(function () {
      self._canShowBannerAd = true;
    }, 1000 * 10);
    self._canShowBannerAd = false;
    var bannerAd = null;
    var left = 0;

    if (cc.winSize.width > cc.winSize.height) {
      left = (cc.winSize.width - cc.winSize.height) / 4;
    }

    if (this._bannerAdStyle && this._bannerAdStyle.y != undefined) {
      bannerAd = qg.createBannerAd({
        posId: vivoBannerId,
        style: {
          top: this._bannerAdStyle.y,
          left: left
        }
      });
    } else {
      bannerAd = qg.createBannerAd({
        posId: vivoBannerId,
        style: {}
      });
    }

    bannerAd && bannerAd.onLoad(function () {
      bannerAd && bannerAd.show();

      if (!self._canShowBanner) {
        bannerAd.destroy();
        return;
      }

      self._haveBannerAd = true;

      if (self._BannerNativeADNode && self._BannerNativeADNode.isValid) {
        self._BannerNativeADNode.destroy();

        self._BannerNativeADNode = null;
      }

      if (self.bannerAd) {
        self.bannerAd.destroy();
      }

      self.bannerAd = bannerAd;
      lieyou_showLog('vivolog--------------  banner show success');
    });
    bannerAd && bannerAd.onError(function (err) {
      bannerAd.destroy();
      self._haveBannerAd = false;

      if (!isEnd) {
        self.showBannerNative(true);
      }

      lieyou_showLog('vivolog--------------  banner show fail' + JSON.stringify(err));
    });
    bannerAd.onClose(function () {
      bannerAd.destroy();
      self._haveBannerAd = false;
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
    var _this3 = this;

    if (this.time > 0) {
      return;
    }

    this.time = 1;
    setTimeout(function () {
      _this3.time = -1;
    }, 1000);
    console.log("------------------播放视频");
    cc.game.emit("E_MUSIC_STOP");
    lieyou_showLog('vivolog---------- showRewardedVideoAd');
    var self = this;
    self.playVideoCallBack = closeCallBack;

    if (this.platformVersionCode < 1041 || vivoVideoId == '' || !this._canShowVideoAd) {
      if (!this._canShowVideoAd) {
        lieyou_showLog('vivolog---------- load video fail 间隔未到一分钟');
      }

      if (self.playVideoCallBack) {
        self.playVideoCallBack(false);
        self.playVideoCallBack = null;
      }

      return;
    }

    setTimeout(function () {
      self._canShowVideoAd = true;
    }, 1000 * 60);
    self._canShowVideoAd = false;

    if (this._videoAd) {
      this._videoAd.load();

      return;
    }

    var videoAd = qg.createRewardedVideoAd({
      posId: vivoVideoId
    });
    this._videoAd = videoAd; // videoAd&&videoAd.load();

    videoAd && videoAd.onLoad(function () {
      lieyou_showLog('vivolog---------- load video success');
      videoAd && videoAd.show();

      if (window.vivoPlayVDCallBack) {
        // cc.audioEngine.stopMusic();
        // cc.audioEngine.stopAllEffects();
        cc.audioEngine.stopAll();
      } // cc.game.pause();


      cc.director.pause();
    });
    videoAd && videoAd.onClose(function (res) {
      if (!self.playVideoCallBack) {
        return;
      }

      lieyou_showLog('vivolog---------- load video close'); // cc.game.resume();

      cc.director.resume();

      if (window.vivoPlayVDCallBack) {
        window.vivoPlayVDCallBack();
      }

      if (res.isEnded) {
        self.playVideoCallBack(true);
      } else {
        self.playVideoCallBack(false);
      }

      self.playVideoCallBack = null;
    });
    videoAd && videoAd.onError(function (res) {
      lieyou_showLog('vivolog---------- load video fail' + JSON.stringify(res));

      if (self.playVideoCallBack) {
        self.playVideoCallBack(false);
        self.playVideoCallBack = null;
      }
    });
  },
  showSpot: function showSpot(isEnd) {
    var self = this;
    console.log("-----------vivo插屏33333333");
    lieyou_showLog('vivolog--------------  showSpot');

    if (vivoSpotADId == '' || !this._canShowAD || !this._canShowSpotAd) {
      if (!this._canShowBannerAd) {
        lieyou_showLog('vivolog----------- load spot fail 间隔未到10s钟');
      }

      if (!isEnd) {
        self.showNativeBanner(true);
      } else {
        self.installShortcut({
          shoaDialog: true
        });
      }

      return;
    }

    setTimeout(function () {
      self._canShowSpotAd = true;
    }, 1000 * 10);
    self._canShowSpotAd = false;
    var interstitialAd = qg.createInterstitialAd({
      posId: vivoSpotADId
    });
    interstitialAd && interstitialAd.onLoad(function () {
      setTimeout(function () {
        interstitialAd && interstitialAd.show();
      }, self.nativeDelayShowTime * 1000);
      lieyou_showLog('vivolog--------------  spot load success');
    });
    interstitialAd && interstitialAd.onError(function (err) {
      if (!isEnd) {
        self.showNativeBanner(true);
      } else {
        self.installShortcut({
          shoaDialog: true
        });
      }

      lieyou_showLog('vivolog--------------  spot show fail' + JSON.stringify(err));
    });
  },
  custClickNative: function custClickNative(node) {
    if (node && node.isValid) {
      if (node.CallBack) {
        node.CallBack();
      } else {}
    }
  },
  addNativeAd: function addNativeAd(node) {
    var self = this;

    if (!node.isRun) {
      node.isRun = true;
      var nodeAction = cc.repeatForever(cc.sequence(cc.delayTime(11), cc.callFunc(function () {
        self.addNativeAd(node);
      })));
      nodeAction.setTag(5697846);
      node.runAction(nodeAction);
    }

    if (vivoNativeId == '' || this.platformVersionCode < 1053 || !this._canShowNativeAd) {
      if (!this._canShowNativeAd) {
        lieyou_showLog('vivolog----------- load play native fail 间隔未到10s钟');
      }

      return;
    }

    setTimeout(function () {
      self._canShowNativeAd = true;
    }, 1000 * 10);
    self._canShowNativeAd = false;
    var nativeAd = qg.createNativeAd({
      'posId': vivoNativeId
    });
    nativeAd.load();
    nativeAd.onLoad(function (res) {
      if (res && res.adList && res.adList.length > 0) {} else {
        lieyou_showLog('vivolog-------------- play native fail 1' + '   ' + JSON.stringify(res));
        return;
      }

      try {
        var numL = parseInt(Math.random() * res.adList.length);
        var id = res.adList[numL].adId;
        var title = res.adList[numL].title; //广告标题

        var desc = res.adList[numL].desc; //广告描述

        var clickBtnTxt = res.adList[numL].clickBtnTxt; //点击按钮文本描述

        var iconUrlList = []; //广告图icon

        if (res.adList[numL].icon && res.adList[numL].icon != '') {
          iconUrlList.push(res.adList[numL].icon);
        }

        var imgUrlList = res.adList[numL].imgUrlList; //广告图

        imgUrlList = [];
        var logoUrl = res.adList[numL].logoUrl; //广告标签图

        nativeAd.reportAdShow({
          adId: id
        });
        lieyou_showLog('vivolog-------- show play native success ');
        var touchNode = node; //self._addNativeAdNode;

        if (!touchNode || !touchNode.isValid) {
          lieyou_showLog('vivolog nativeNode null');
          return;
        }

        touchNode.stopActionByTag(5697846);

        touchNode.CallBack = function () {
          nativeAd.reportAdClick({
            adId: id
          });
          touchNode.isRun = false;
          self.addNativeAd(touchNode);
        };

        if (touchNode && touchNode.isValid && touchNode.getComponent(cc.Sprite)) {
          touchNode.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;

          if (!touchNode.haveTouchOn) {
            touchNode.haveTouchOn = true;
            touchNode.on(cc.Node.EventType.TOUCH_START, function (event) {
              event.target.CallBack();
            });

            if (logoUrl != '') {
              var adTitleNode = new cc.Node();
              adTitleNode.scale = 0.5;
              touchNode.addChild(adTitleNode);
              adTitleNode.x = touchNode.width / 2;
              adTitleNode.y = touchNode.height / 2 * -1;
              adTitleNode.anchorX = 1;
              adTitleNode.anchorY = 0;
              adTitleNode.addComponent(cc.Sprite);
              cc.loader.load(logoUrl, function (err, texture) {
                if (adTitleNode && adTitleNode.isValid) {
                  adTitleNode.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
                }
              });
            }
          }

          var url = '';

          if (touchNode.width / touchNode.height >= 1.5) {
            if (imgUrlList.length > 0) {
              url = imgUrlList[parseInt(Math.random() * imgUrlList.length)];
            } else if (iconUrlList.length > 0) {
              url = iconUrlList[parseInt(Math.random() * iconUrlList.length)];
            }
          } else {
            if (iconUrlList.length > 0) {
              url = iconUrlList[parseInt(Math.random() * iconUrlList.length)];
            } else if (imgUrlList.length > 0) {
              url = imgUrlList[parseInt(Math.random() * imgUrlList.length)];
            }
          }

          if (url != '') {
            cc.loader.load(url, function (err, texture) {
              if (touchNode && touchNode.isValid) {
                touchNode.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
              }
            });
          }
        }
      } catch (error) {
        lieyou_showLog('vivolog-- showplayNativeFail   ' + error);
      }
    });
    nativeAd.onError(function (err) {
      lieyou_showLog('vivolog-------- show play native fail ' + '   ' + JSON.stringify(err));
    });
  },
  showBannerNative: function showBannerNative(isEnd) {
    var _this4 = this;

    var self = this; // self.showBannerSys(true);
    // return

    if (this._haveBannerAd) {
      return;
    }

    if (!this.canShowNativeBanner) {
      if (!isEnd) {
        self.showBannerSys(true);
      }

      return;
    }

    if (vivoNativeId == '' || this.platformVersionCode < 1053 || !this._canShowNativeAd) {
      if (!this._canShowNativeAd) {
        lieyou_showLog('vivolog----------- load banner native fail 间隔未到10s钟');
      }

      if (!isEnd) {
        self.showBannerSys(true);
      }

      return;
    }

    setTimeout(function () {
      self._canShowNativeAd = true;
    }, 1000 * 10);
    self._canShowNativeAd = false;
    var nativeAd = qg.createNativeAd({
      'posId': vivoNativeId
    });
    nativeAd.load();
    nativeAd.onLoad(function (res) {
      if (res && res.adList && res.adList.length > 0) {} else {
        lieyou_showLog('vivolog-------------- banner native fail 1' + '   ' + JSON.stringify(res));

        if (!isEnd) {
          self.showBannerSys(true);
        }

        return;
      }

      try {
        var numL = parseInt(Math.random() * res.adList.length);
        var id = res.adList[numL].adId;
        var title = res.adList[numL].title; //广告标题

        var desc = res.adList[numL].desc; //广告描述

        var clickBtnTxt = res.adList[numL].clickBtnTxt; //点击按钮文本描述

        var iconUrlList = []; //广告图icon

        if (res.adList[numL].icon && res.adList[numL].icon != '') {
          iconUrlList.push(res.adList[numL].icon);
        }

        var imgUrlList = res.adList[numL].imgUrlList; //广告图

        imgUrlList = [];
        var logoUrl = res.adList[numL].logoUrl; //广告标签图

        nativeAd.reportAdShow({
          adId: id
        });
        lieyou_showLog('vivolog-------- show banner native success '); // cc.loader.loadRes('SDK/module/qGameNativeAd/bannerNativeAd',function(err,res){

        if (!self._canShowBanner) {
          return;
        }

        try {
          if (self._haveBannerAd) {
            return;
          }

          if (self.bannerAd) {
            self.bannerAd.destroy();
            self.bannerAd = null;
          } // self.bannerAd = nativeAd  ///************************asd*********** */


          var fNode = cc.director.getRunningScene();
          var node = lieyou_nativeBanner(); //cc.instantiate(res); 

          if (self._BannerNativeADNode && self._BannerNativeADNode.isValid) {
            self._BannerNativeADNode.destroy();

            self._BannerNativeADNode = null;
          }

          self._BannerNativeADNode = node;
          node.x = cc.winSize.width / 2;

          if (self._bannerAdStyle && self._bannerAdStyle.y != undefined) {
            node.y = cc.winSize.height - self._bannerAdStyle.y - self.banner_show_height * lieyou_SdkManager._SceneScale;
          }

          fNode.addChild(node, 999);
          cc.game.addPersistRootNode(node); // node.Group = "Ui"

          node.getComponent('lieyou_oppoNativeAdSdk').setData({
            touchCallBack: function () {
              nativeAd.reportAdClick({
                adId: id
              });
            }.bind(_this4),
            closeCallBack: function () {// nativeAd.destroy();
            }.bind(_this4),
            title: title,
            desc: desc,
            clickBtnTxt: clickBtnTxt,
            iconUrlList: iconUrlList,
            imgUrlList: imgUrlList,
            logoUrl: logoUrl,
            closeAlpha: self.banner_close_but_alpha,
            closeSize: self.banner_close_but_size,
            closeRange: self.banner_close_but_range,
            closeShow: self.banner_close_but_show,
            bannerHeight: self.banner_show_height
          });
        } catch (error) {
          lieyou_showLog('vivolog-- showbannerNativeFail   ' + error);
        } // }.bind(this));

      } catch (error) {
        lieyou_showLog('vivolog-- showbannerNativeFail   ' + error);
      }
    });
    nativeAd.onError(function (err) {
      if (!isEnd) {
        self.showBannerSys(true);
      }

      lieyou_showLog('vivolog-------- show banner native fail ' + '   ' + JSON.stringify(err));
    });
  },
  showNativeBanner: function showNativeBanner(isEnd) {
    var _this5 = this;

    var self = this;

    if (!this.canShowNativeSpot || vivoNativeId == '' || this.platformVersionCode < 1053 || !this._canShowNativeAd || Userdefault.getIntForKey('vivo_showNativeNum', 0) < this.startNativeSpot) {
      if (!this._canShowNativeAd) {
        lieyou_showLog('vivolog----------- load native fail 间隔未到10s钟');
      }

      if (!isEnd) {
        self.showSpot(true);
      } else {
        self.installShortcut({
          shoaDialog: true
        });
      }

      return;
    }

    setTimeout(function () {
      self._canShowNativeAd = true;
    }, 1000 * 10);
    self._canShowNativeAd = false;
    var nativeAd = qg.createNativeAd({
      'posId': vivoNativeId
    });
    nativeAd.load();
    nativeAd.onLoad(function (res) {
      if (res && res.adList && res.adList.length > 0) {} else {
        lieyou_showLog('vivolog--------------  native fail 1' + '   ' + JSON.stringify(res));

        if (!isEnd) {
          self.showSpot(true);
        } else {
          self.installShortcut({
            shoaDialog: true
          });
        }

        return;
      }

      try {
        var numL = parseInt(Math.random() * res.adList.length);
        var id = res.adList[numL].adId;
        var title = res.adList[numL].title; //广告标题

        var desc = res.adList[numL].desc; //广告描述

        var clickBtnTxt = res.adList[numL].clickBtnTxt; //点击按钮文本描述

        var iconUrlList = []; //广告图icon

        if (res.adList[numL].icon && res.adList[numL].icon != '') {
          iconUrlList.push(res.adList[numL].icon);
        }

        var imgUrlList = res.adList[numL].imgUrlList; //广告图

        var logoUrl = res.adList[numL].logoUrl; //广告标签图

        nativeAd.reportAdShow({
          adId: id
        });
        lieyou_showLog('vivolog-------- show native success '); // cc.loader.loadRes('SDK/module/qGameNativeAd/nativeAd',function(err,res){

        try {
          var fNode = cc.director.getRunningScene();
          var node = lieyou_nativeSpot(); //cc.instantiate(res); 

          node.scale = 0;
          node.active = false;
          setTimeout(function () {
            node.scale = 1;
            node.active = true;
          }, _this5.nativeDelayShowTime * 1000);
          fNode.addChild(node, 999);
          cc.game.addPersistRootNode(node);
          node.x = cc.winSize.width / 2;
          node.y = cc.winSize.height / 2;
          node.getComponent('lieyou_oppoNativeAdSdk').setData({
            touchCallBack: function () {
              nativeAd.reportAdClick({
                adId: id
              });
              setTimeout(function () {
                node.destroy();
              }, this.nativeDelayDestroyTime * 1000);
            }.bind(_this5),
            closeCallBack: function () {}.bind(_this5),
            title: title,
            desc: desc,
            clickBtnTxt: clickBtnTxt,
            iconUrlList: iconUrlList,
            imgUrlList: imgUrlList,
            logoUrl: logoUrl,
            closeAlpha: self.spot_close_but_alpha,
            closeSize: self.spot_close_but_size,
            closeRange: self.spot_close_but_range,
            closeShow: self.spot_click_close
          }); // if (self.bannerAd) {
          //     self.bannerAd.destroy(); //********************* */
          //     self.bannerAd = null;
          // }
        } catch (error) {
          lieyou_showLog('vivolog-- showNativeFail   ' + error);
        } // }.bind(this));

      } catch (error) {
        lieyou_showLog('vivolog-- showNativeFail   ' + error);
      }
    });
    nativeAd.onError(function (err) {
      if (!isEnd) {
        self.showSpot(true);
      } else {
        self.installShortcut({
          shoaDialog: true
        });
      }

      lieyou_showLog('vivolog-------- show native fail ' + '   ' + JSON.stringify(err));
    });
  },
  showSpotByPause: function showSpotByPause(isHaveNative, top) {
    this.addShowSpotNum();
  },
  showSpotByBegin: function showSpotByBegin(isHaveNative, top) {
    this.addShowSpotNum();
  },
  showSpotByFinish: function showSpotByFinish(isHaveNative, top) {
    this.addShowSpotNum();
  },
  addShowSpotNum: function addShowSpotNum() {
    console.log("-----------vivo插屏");
    var time = parseInt(getTime() / 1000);

    if (time - this._beginGameTime < this._showSpotStartTime) {
      lieyou_showLog('vivolog----------- load spot 启动游戏一定时间内不显示插屏');
      return;
    }

    var self = this;

    if (!this._canShowSysSpot) {
      lieyou_showLog('vivolog----------- load spot or Naitve fail 间隔未到' + self._showSysSpotTime + 's钟');
      this.installShortcut({
        shoaDialog: true
      });
      return;
    }

    setTimeout(function () {
      self._canShowSysSpot = true;
    }, 1000 * self._showSysSpotTime);
    self._canShowSysSpot = false;
    var num = Userdefault.getIntForKey('vivo_showNativeNum', 0);
    Userdefault.setDataForKey('vivo_showNativeNum', num + 1);

    if (this.spot_first_ad == "native") {
      this.showNativeBanner(false);
    } else {
      this.showSpot(false);
    }
  },
  installShortcut: function installShortcut() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var time = parseInt(getTime() / 1000);

    if (time - this._beginGameTime < this._installShortcutStartTime && !obj.canShow) {
      lieyou_showLog('vivolog installShortcut canShowShortcut 开始时间未到');
      return;
    }

    if (time - this._upInstallShortcutTime < this._installShortcutTime && !obj.canShow) {
      lieyou_showLog('vivolog installShortcut canShowShortcut 间隔时间未到');
      return;
    }

    if (!this.canShowShortcut && !obj.canShow) {
      lieyou_showLog('vivolog installShortcut canShowShortcut false');
      return;
    }

    if (this.base_IsShenHe && !obj.canShow) {
      lieyou_showLog('vivolog installShortcut shenhe true');
      return;
    }

    if (this.platformVersionCode < 1041) {
      lieyou_showLog('vivolog installShortcut version low');
      return;
    }

    var self = this;
    qg.hasShortcutInstalled({
      success: function success(res) {
        if (res == false) {
          if (obj.callBack_addNode) {
            obj.callBack_addNode();
            return;
          } // if(obj.shoaDialog){
          //     lieyou_SdkManager.showInstallShortcutDialog();
          //     return;
          // }


          self._upInstallShortcutTime = time;
          qg.installShortcut({
            success: function success() {
              if (obj.success) {
                obj.success();
              }

              self.setOperTrack({
                type: 1,
                state: 1
              });
            },
            fail: function fail() {// self.setOperTrack({type:1,state:0});        
            }
          });
        }
      }
    });
  },
  showModal: function showModal(obj) {
    qg.showDialog({
      title: obj.title ? obj.title : '',
      message: obj.content ? obj.content : '',
      buttons: [{
        text: '确定',
        color: '#33dd44'
      }, {
        text: '取消',
        color: '#33dd44'
      }],
      success: function success(res) {
        if (res.index == 0) {
          obj.success && obj.success();
        } else {
          obj.fail && obj.fail();
        }
      },
      cancel: function cancel() {
        obj.fail && obj.fail();
      }
    });
  },
  showToast: function showToast(title) {
    qg.showToast({
      message: title
    });
  },
  hideToast: function hideToast() {// qg.hideToast({});
  },
  showLoading: function showLoading(title) {
    qg.showLoading({
      message: title
    });
  },
  hideLoading: function hideLoading() {
    qg.hideLoading();
  }
});
module.exports = VivoManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXHNjcmlwdHNcXFZpdm9NYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIkJhc2VNYW5hZ2VyIiwicmVxdWlyZSIsIlZpdm9NYW5hZ2VyIiwiY2MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJiYW5uZXJBZCIsImJhbm5lck5hdGl2ZUFkIiwidGltZSIsImdldEhhdmVWaWRlbyIsInZpdm9WaWRlb0lkIiwiX2NhblNob3dBRCIsInBsYXRmb3JtVmVyc2lvbkNvZGUiLCJnZXRWZXJzaW9uIiwidml2b0dhbWVWZXJzaW9uIiwiZ2V0U3lzUGxhdGZvcm1fc3RyaW5nIiwiZ2V0U3lzUGxhdGZvcm0iLCJvblNob3ciLCJmdW4iLCJxZyIsIm9uSGlkZSIsInNldE9ubGluZURhdGEiLCJkYXRhIiwidml2byIsInN0YXJTaG93U3BvdFRpbWUiLCJfc2hvd1Nwb3RTdGFydFRpbWUiLCJOdW1iZXIiLCJpbnN0YWxsU2hvcnRjdXRJbnRlcnZhbFRpbWUiLCJ1bmRlZmluZWQiLCJfaW5zdGFsbFNob3J0Y3V0VGltZSIsIm5hdGl2ZUFkTG9hZFNlcnZlclJlcyIsIl9TREtOYXRpdmVBZExvYWRTZXJ2ZXJSZXMiLCJzZXJ2ZXJWZXJzaW9uIiwic2VydmVyVmVyc29pbiIsImJhc2VfSXNTaGVuSGUiLCJjbG9zZVNob3J0Y3V0IiwiY2FuU2hvd1Nob3J0Y3V0IiwiYWREYXRhIiwidGhlbWUiLCJjcm9zc1N3aXRjaCIsImJpekRhdGEiLCJhZF9kYXRhcyIsInNldEFkRGF0YSIsImNhblNob3dOYXRpdmVCYW5uZXIiLCJjYW5TaG93TmF0aXZlU3BvdCIsInNwb3RfSW50ZXJ2YWwiLCJfc2hvd1N5c1Nwb3RUaW1lIiwic3RhcnROYXRpdmVTcG90IiwiaWRfY29uZmlnIiwiaXNfbG9jYWxfcG9zX2lkIiwiYXBwaWQiLCJ2aXZvSWRfU0RLIiwiYmlkIiwidml2b0Jhbm5lcklkIiwic3BvaWQiLCJ2aXZvU3BvdEFESWQiLCJhd2FyZGlkIiwibmF0aXZlQWQiLCJ2aXZvTmF0aXZlSWQiLCJiYW5uZXJfY2xvc2VfYnV0X3NpemUiLCJiYW5uZXJfY2xvc2VfYnV0X3JhbmdlIiwic3BvdF9jbG9zZV9idXRfYWxwaGEiLCJzcG90X2Nsb3NlX2J1dF9zaXplIiwiYmFubmVyX3Nob3dfaGVpZ2h0Iiwic3BvdF9jbG9zZV9idXRfcmFuZ2UiLCJiYW5uZXJfY2xvc2VfYnV0X2FscGhhIiwiYmFubmVyX2Nsb3NlX2J1dF9zaG93Iiwic3BvdF9jbGlja19jbG9zZSIsInNwb3RfZmlyc3RfYWQiLCJiYW5uZXJfZmlyc3RfYWQiLCJuYXRpdmVEZWxheVNob3dUaW1lIiwibmF0aXZlRGVsYXlEZXN0cm95VGltZSIsInJlZnJlc2hCYW5uZXJUaW1lIiwic2V0U3dpdGNoRGF0YSIsImluaXRPbmxpbmVEYXRhIiwib3Bwb0dldE9ubGluZURhdGFJZCIsImxpZXlvdV9TZGtNYW5hZ2VyIiwic2hvd1RvYXN0Iiwic2VsZiIsInZlcnNpb24iLCJVc2VyZGVmYXVsdCIsImdldEludEZvcktleSIsInNwIiwibm93VGltZSIsImdldFRpbWUiLCJyZXNwb25zZSIsImdldFN0cmluZ0ZvcktleSIsIkpTT04iLCJwYXJzZSIsImRhdGFWZXJzaW9uIiwidXJsIiwiZ2V0TG9naW5VcmwiLCJzZXREYXRhRm9ySHR0cCIsImpzb25EIiwiaXNNb3JlSW5mbyIsInNldERhdGFGb3JLZXkiLCJzZXJ2ZXJfZGF0YV92ZXJzaW9uIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJsaWV5b3Vfc2hvd0xvZyIsImdldFN5c3RlbUluZm8iLCJpbmZvIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJhbmRyb2lkVmVyc2lvbiIsIm9zVmVyc2lvbk5hbWUiLCJtb2RlbCIsIm9wZW5pZCIsInByb2R1Y3QiLCJyZWdpb24iLCJnZXROZXR3b3JrVHlwZSIsInN1Y2Nlc3MiLCJyZXMiLCJuZXR3b3JrVHlwZSIsInR5cGUiLCJpbml0Iiwib2JqIiwicHJvdG90eXBlIiwiY2FsbCIsIl92aWRlb0FkIiwiX2NhblNob3dWaWRlb0FkIiwiX2NhblNob3dCYW5uZXJBZCIsIl9jYW5TaG93U3BvdEFkIiwiX2NhblNob3dOYXRpdmVBZCIsIl9jYW5TaG93U3lzU3BvdCIsInNldFRpbWVvdXQiLCJ2aWJyYXRlU2hvcnQiLCJ2aWJyYXRlTG9uZyIsImhpZGVCYW5uZXIiLCJfY2FuU2hvd0Jhbm5lciIsIl9oYXZlQmFubmVyQWQiLCJjbGVhckludGVydmFsIiwiYmFubmVyVGltZU91dCIsImRlc3Ryb3kiLCJfQmFubmVyTmF0aXZlQUROb2RlIiwiaXNWYWxpZCIsInNob3dCYW5uZXIiLCJfYmFubmVyQWRTdHlsZSIsInkiLCJ3aW5TaXplIiwiaGVpZ2h0IiwiX1NjZW5lU2NhbGUiLCJyZWZyZXNoVGltZSIsInNob3dCYW5uZXJOYXRpdmUiLCJzZXRJbnRlcnZhbCIsImJpbmQiLCJzaG93QmFubmVyU3lzIiwiaXNFbmQiLCJsZWZ0Iiwid2lkdGgiLCJjcmVhdGVCYW5uZXJBZCIsInBvc0lkIiwic3R5bGUiLCJ0b3AiLCJvbkxvYWQiLCJzaG93Iiwib25FcnJvciIsImVyciIsIm9uQ2xvc2UiLCJzaG93QmFubmVyQ3VzdG9tIiwic2hvd0Jhbm5lckJ5VG9wIiwiaWQiLCJzaG93QmFubmVyQnlCb3R0b20iLCJzaG93UmV3YXJkZWRWaWRlb0FkIiwiY2xvc2VDYWxsQmFjayIsImNvbnNvbGUiLCJsb2ciLCJnYW1lIiwiZW1pdCIsInBsYXlWaWRlb0NhbGxCYWNrIiwibG9hZCIsInZpZGVvQWQiLCJjcmVhdGVSZXdhcmRlZFZpZGVvQWQiLCJ3aW5kb3ciLCJ2aXZvUGxheVZEQ2FsbEJhY2siLCJhdWRpb0VuZ2luZSIsInN0b3BBbGwiLCJkaXJlY3RvciIsInBhdXNlIiwicmVzdW1lIiwiaXNFbmRlZCIsInNob3dTcG90Iiwic2hvd05hdGl2ZUJhbm5lciIsImluc3RhbGxTaG9ydGN1dCIsInNob2FEaWFsb2ciLCJpbnRlcnN0aXRpYWxBZCIsImNyZWF0ZUludGVyc3RpdGlhbEFkIiwiY3VzdENsaWNrTmF0aXZlIiwibm9kZSIsIkNhbGxCYWNrIiwiYWRkTmF0aXZlQWQiLCJpc1J1biIsIm5vZGVBY3Rpb24iLCJyZXBlYXRGb3JldmVyIiwic2VxdWVuY2UiLCJkZWxheVRpbWUiLCJjYWxsRnVuYyIsInNldFRhZyIsInJ1bkFjdGlvbiIsImNyZWF0ZU5hdGl2ZUFkIiwiYWRMaXN0IiwibGVuZ3RoIiwibnVtTCIsInBhcnNlSW50IiwiTWF0aCIsInJhbmRvbSIsImFkSWQiLCJ0aXRsZSIsImRlc2MiLCJjbGlja0J0blR4dCIsImljb25VcmxMaXN0IiwiaWNvbiIsInB1c2giLCJpbWdVcmxMaXN0IiwibG9nb1VybCIsInJlcG9ydEFkU2hvdyIsInRvdWNoTm9kZSIsInN0b3BBY3Rpb25CeVRhZyIsInJlcG9ydEFkQ2xpY2siLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzaXplTW9kZSIsIlNpemVNb2RlIiwiQ1VTVE9NIiwiaGF2ZVRvdWNoT24iLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsImV2ZW50IiwidGFyZ2V0IiwiYWRUaXRsZU5vZGUiLCJzY2FsZSIsImFkZENoaWxkIiwieCIsImFuY2hvclgiLCJhbmNob3JZIiwiYWRkQ29tcG9uZW50IiwibG9hZGVyIiwidGV4dHVyZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJmTm9kZSIsImdldFJ1bm5pbmdTY2VuZSIsImxpZXlvdV9uYXRpdmVCYW5uZXIiLCJhZGRQZXJzaXN0Um9vdE5vZGUiLCJzZXREYXRhIiwidG91Y2hDYWxsQmFjayIsImNsb3NlQWxwaGEiLCJjbG9zZVNpemUiLCJjbG9zZVJhbmdlIiwiY2xvc2VTaG93IiwiYmFubmVySGVpZ2h0IiwibGlleW91X25hdGl2ZVNwb3QiLCJhY3RpdmUiLCJzaG93U3BvdEJ5UGF1c2UiLCJpc0hhdmVOYXRpdmUiLCJhZGRTaG93U3BvdE51bSIsInNob3dTcG90QnlCZWdpbiIsInNob3dTcG90QnlGaW5pc2giLCJfYmVnaW5HYW1lVGltZSIsIm51bSIsIl9pbnN0YWxsU2hvcnRjdXRTdGFydFRpbWUiLCJjYW5TaG93IiwiX3VwSW5zdGFsbFNob3J0Y3V0VGltZSIsImhhc1Nob3J0Y3V0SW5zdGFsbGVkIiwiY2FsbEJhY2tfYWRkTm9kZSIsInNldE9wZXJUcmFjayIsInN0YXRlIiwiZmFpbCIsInNob3dNb2RhbCIsInNob3dEaWFsb2ciLCJtZXNzYWdlIiwiY29udGVudCIsImJ1dHRvbnMiLCJ0ZXh0IiwiY29sb3IiLCJpbmRleCIsImNhbmNlbCIsImhpZGVUb2FzdCIsInNob3dMb2FkaW5nIiwiaGlkZUxvYWRpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0EsSUFBTUEsV0FBVyxHQUFHQyxPQUFPLENBQUMsYUFBRCxDQUEzQjs7QUFDQSxJQUFJQyxXQUFXLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ3ZCLGFBQVNILE9BQU8sQ0FBQyxhQUFELENBRE87QUFFdkJJLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQUUsSUFERjtBQUVSQyxJQUFBQSxjQUFjLEVBQUUsSUFGUjtBQUdSQyxJQUFBQSxJQUFJLEVBQUUsQ0FBQztBQUhDLEdBRlc7QUFRdkJDLEVBQUFBLFlBUnVCLDBCQVFSO0FBQ1gsUUFBSUMsV0FBVyxJQUFJLEVBQWYsSUFBcUIsQ0FBQyxLQUFLQyxVQUEzQixJQUF5QyxLQUFLQyxtQkFBTCxHQUEyQixJQUF4RSxFQUE4RTtBQUMxRSxhQUFPLEtBQVA7QUFDSDs7QUFDRCxXQUFPLElBQVA7QUFDSCxHQWJzQjtBQWN2QkMsRUFBQUEsVUFkdUIsd0JBY1Y7QUFDVCxXQUFPQyxlQUFQO0FBQ0gsR0FoQnNCO0FBaUJ2QkMsRUFBQUEscUJBakJ1QixtQ0FpQkM7QUFDcEIsV0FBTyxNQUFQO0FBQ0gsR0FuQnNCO0FBb0J2QkMsRUFBQUEsY0FwQnVCLDRCQW9CTjtBQUNiLFdBQU8sQ0FBUDtBQUNILEdBdEJzQjtBQXVCdkJDLEVBQUFBLE1BQU0sRUFBRSxnQkFBVUMsR0FBVixFQUFlO0FBQ25CQyxJQUFBQSxFQUFFLENBQUNGLE1B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RUEwOEJKO0FBQ2YzTCxJQUFBQSxFQUFFLENBQUNvUSxXQUFILENBQWU7QUFBRVIsTUFBQUEsT0FBTyxFQUFFakU7QUFBWCxLQUFmO0FBQ0gsR0E1OEJzQjtBQTY4QnZCMEUsRUFBQUEsV0E3OEJ1Qix5QkE2OEJUO0FBQ1ZyUSxJQUFBQSxFQUFFLENBQUNxUSxXQUFIO0FBQ0g7QUEvOEJzQixDQUFULENBQWxCO0FBaTlCQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCeFIsV0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vL+acgOS9jueJiOacrDEwNTZcclxuY29uc3QgQmFzZU1hbmFnZXIgPSByZXF1aXJlKCdCYXNlTWFuYWdlcicpO1xyXG5sZXQgVml2b01hbmFnZXIgPSBjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiByZXF1aXJlKCdCYXNlTWFuYWdlcicpLFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJhbm5lckFkOiBudWxsLFxyXG4gICAgICAgIGJhbm5lck5hdGl2ZUFkOiBudWxsLFxyXG4gICAgICAgIHRpbWU6IC0xLFxyXG5cclxuICAgIH0sXHJcbiAgICBnZXRIYXZlVmlkZW8oKSB7XHJcbiAgICAgICAgaWYgKHZpdm9WaWRlb0lkID09ICcnIHx8ICF0aGlzLl9jYW5TaG93QUQgfHwgdGhpcy5wbGF0Zm9ybVZlcnNpb25Db2RlIDwgMTA0MSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuICAgIGdldFZlcnNpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHZpdm9HYW1lVmVyc2lvbjtcclxuICAgIH0sXHJcbiAgICBnZXRTeXNQbGF0Zm9ybV9zdHJpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuICd2aXZvJztcclxuICAgIH0sXHJcbiAgICBnZXRTeXNQbGF0Zm9ybSgpIHtcclxuICAgICAgICByZXR1cm4gMztcclxuICAgIH0sXHJcbiAgICBvblNob3c6IGZ1bmN0aW9uIChmdW4pIHtcclxuICAgICAgICBxZy5vblNob3coZnVuKTtcclxuICAgIH0sXHJcbiAgICBvbkhpZGU6IGZ1bmN0aW9uIChmdW4pIHtcclxuICAgICAgICBxZy5vbkhpZGUoZnVuKTtcclxuICAgIH0sXHJcbiAgICBzZXRPbmxpbmVEYXRhKGRhdGEpIHtcclxuICAgICAgICBpZiAoZGF0YS52aXZvKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnZpdm8uc3RhclNob3dTcG90VGltZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd1Nwb3RTdGFydFRpbWUgPSBOdW1iZXIoZGF0YS52aXZvLnN0YXJTaG93U3BvdFRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnZpdm8uaW5zdGFsbFNob3J0Y3V0SW50ZXJ2YWxUaW1lICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5zdGFsbFNob3J0Y3V0VGltZSA9IE51bWJlcihkYXRhLnZpdm8uaW5zdGFsbFNob3J0Y3V0SW50ZXJ2YWxUaW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS52aXZvLm5hdGl2ZUFkTG9hZFNlcnZlclJlcykge1xyXG4gICAgICAgICAgICAgICAgX1NES05hdGl2ZUFkTG9hZFNlcnZlclJlcyA9IGRhdGEudml2by5uYXRpdmVBZExvYWRTZXJ2ZXJSZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRhdGEudml2by5zZXJ2ZXJWZXJzaW9uICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlcnZlclZlcnNvaW4gPSBOdW1iZXIoZGF0YS52aXZvLnNlcnZlclZlcnNpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlcnZlclZlcnNvaW4gPj0gdml2b0dhbWVWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlX0lzU2hlbkhlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZV9Jc1NoZW5IZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFkYXRhLnZpdm8uY2xvc2VTaG9ydGN1dCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5TaG93U2hvcnRjdXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBhZERhdGEgPSB7fTtcclxuICAgICAgICAgICAgaWYgKGRhdGEudml2by50aGVtZSkge1xyXG4gICAgICAgICAgICAgICAgYWREYXRhLnRoZW1lID0gZGF0YS52aXZvLnRoZW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnZpdm8uY3Jvc3NTd2l0Y2gpIHtcclxuICAgICAgICAgICAgICAgIGFkRGF0YS5jcm9zc1N3aXRjaCA9IGRhdGEudml2by5jcm9zc1N3aXRjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS52aXZvLmJpekRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGFkRGF0YS5iaXpEYXRhID0gZGF0YS52aXZvLmJpekRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRhdGEudml2by5hZF9kYXRhcykge1xyXG4gICAgICAgICAgICAgICAgYWREYXRhLmFkX2RhdGFzID0gZGF0YS52aXZvLmFkX2RhdGFzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnZpdm8uc3dpdGNoKSB7XHJcbiAgICAgICAgICAgICAgICBhZERhdGEuc3dpdGNoID0gZGF0YS52aXZvLnN3aXRjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybVZlcnNpb25Db2RlID49IDEwNDQgJiYgMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBZERhdGEoYWREYXRhKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGEudml2by5jYW5TaG93TmF0aXZlQmFubmVyICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5TaG93TmF0aXZlQmFubmVyID0gZGF0YS52aXZvLmNhblNob3dOYXRpdmVCYW5uZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRhdGEudml2by5jYW5TaG93TmF0aXZlU3BvdCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuU2hvd05hdGl2ZVNwb3QgPSBkYXRhLnZpdm8uY2FuU2hvd05hdGl2ZVNwb3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRhdGEudml2by5zcG90X0ludGVydmFsICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd1N5c1Nwb3RUaW1lID0gTnVtYmVyKGRhdGEudml2by5zcG90X0ludGVydmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS52aXZvLnN0YXJ0TmF0aXZlU3BvdCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnROYXRpdmVTcG90ID0gTnVtYmVyKGRhdGEudml2by5zdGFydE5hdGl2ZVNwb3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnZpdm8uaWRfY29uZmlnICYmIGRhdGEudml2by5pc19sb2NhbF9wb3NfaWQgIT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudml2by5pZF9jb25maWcuYXBwaWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdml2b0lkX1NESyA9IGRhdGEudml2by5pZF9jb25maWcuYXBwaWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS52aXZvLmlkX2NvbmZpZy5iaWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdml2b0Jhbm5lcklkID0gZGF0YS52aXZvLmlkX2NvbmZpZy5iaWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS52aXZvLmlkX2NvbmZpZy5zcG9pZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2aXZvU3BvdEFESWQgPSBkYXRhLnZpdm8uaWRfY29uZmlnLnNwb2lkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudml2by5pZF9jb25maWcuYXdhcmRpZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB2aXZvVmlkZW9JZCA9IGRhdGEudml2by5pZF9jb25maWcuYXdhcmRpZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnZpdm8uaWRfY29uZmlnLm5hdGl2ZUFkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpdm9OYXRpdmVJZCA9IGRhdGEudml2by5pZF9jb25maWcubmF0aXZlQWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRhdGEudml2by5iYW5uZXJfY2xvc2VfYnV0X3NpemUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbm5lcl9jbG9zZV9idXRfc2l6ZSA9IE51bWJlcihkYXRhLnZpdm8uYmFubmVyX2Nsb3NlX2J1dF9zaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS52aXZvLmJhbm5lcl9jbG9zZV9idXRfcmFuZ2UgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJhbm5lcl9jbG9zZV9idXRfcmFuZ2UgPSBOdW1iZXIoZGF0YS52aXZvLmJhbm5lcl9jbG9zZV9idXRfcmFuZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnZpdm8uc3BvdF9jbG9zZV9idXRfYWxwaGEgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwb3RfY2xvc2VfYnV0X2FscGhhID0gTnVtYmVyKGRhdGEudml2by5zcG90X2Nsb3NlX2J1dF9hbHBoYSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRhdGEudml2by5zcG90X2Nsb3NlX2J1dF9zaXplICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcG90X2Nsb3NlX2J1dF9zaXplID0gTnVtYmVyKGRhdGEudml2by5zcG90X2Nsb3NlX2J1dF9zaXplKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS52aXZvLmJhbm5lcl9zaG93X2hlaWdodCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFubmVyX3Nob3dfaGVpZ2h0ID0gTnVtYmVyKGRhdGEudml2by5iYW5uZXJfc2hvd19oZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnZpdm8uc3BvdF9jbG9zZV9idXRfcmFuZ2UgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwb3RfY2xvc2VfYnV0X3JhbmdlID0gTnVtYmVyKGRhdGEudml2by5zcG90X2Nsb3NlX2J1dF9yYW5nZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRhdGEudml2by5iYW5uZXJfY2xvc2VfYnV0X2FscGhhICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYW5uZXJfY2xvc2VfYnV0X2FscGhhID0gTnVtYmVyKGRhdGEudml2by5iYW5uZXJfY2xvc2VfYnV0X2FscGhhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS52aXZvLmJhbm5lcl9jbG9zZV9idXRfc2hvdyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFubmVyX2Nsb3NlX2J1dF9zaG93ID0gZGF0YS52aXZvLmJhbm5lcl9jbG9zZV9idXRfc2hvdztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS52aXZvLnNwb3RfY2xpY2tfY2xvc2UgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwb3RfY2xpY2tfY2xvc2UgPSBkYXRhLnZpdm8uc3BvdF9jbGlja19jbG9zZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS52aXZvLnNwb3RfZmlyc3RfYWQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwb3RfZmlyc3RfYWQgPSBkYXRhLnZpdm8uc3BvdF9maXJzdF9hZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS52aXZvLmJhbm5lcl9maXJzdF9hZCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFubmVyX2ZpcnN0X2FkID0gZGF0YS52aXZvLmJhbm5lcl9maXJzdF9hZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS52aXZvLm5hdGl2ZURlbGF5U2hvd1RpbWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZURlbGF5U2hvd1RpbWUgPSBOdW1iZXIoZGF0YS52aXZvLm5hdGl2ZURlbGF5U2hvd1RpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnZpdm8ubmF0aXZlRGVsYXlEZXN0cm95VGltZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlRGVsYXlEZXN0cm95VGltZSA9IE51bWJlcihkYXRhLnZpdm8ubmF0aXZlRGVsYXlEZXN0cm95VGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRhdGEudml2by5yZWZyZXNoQmFubmVyVGltZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEJhbm5lclRpbWUgPSBOdW1iZXIoZGF0YS52aXZvLnJlZnJlc2hCYW5uZXJUaW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldFN3aXRjaERhdGEoZGF0YS52aXZvKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBpbml0T25saW5lRGF0YSgpIHtcclxuXHJcbiAgICAgICAgaWYgKG9wcG9HZXRPbmxpbmVEYXRhSWQgPT0gJycpIHtcclxuICAgICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuc2hvd1RvYXN0KCfmsqHmnInloavlhplxZ0lEJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciB2ZXJzaW9uID0gVXNlcmRlZmF1bHQuZ2V0SW50Rm9yS2V5KCdzZGtfdml2b19vbmxpbmVfdmVyc2lvbicsIDApO1xyXG4gICAgICAgIHZhciB0aW1lID0gVXNlcmRlZmF1bHQuZ2V0SW50Rm9yS2V5KCdzZGtfdml2b19vbmxpbmVfdGltZScsIDApO1xyXG4gICAgICAgIHZhciBzcCA9IFVzZXJkZWZhdWx0LmdldEludEZvcktleSgnc2RrX3Zpdm9fb25saW5lX3NwJywgMCk7XHJcbiAgICAgICAgdmFyIG5vd1RpbWUgPSBnZXRUaW1lKCkgLyAxMDAwO1xyXG4gICAgICAgIGlmIChub3dUaW1lIC0gdGltZSA8IHNwICYmIG5vd1RpbWUgPiB0aW1lKSB7XHJcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IFVzZXJkZWZhdWx0LmdldFN0cmluZ0ZvcktleSgnc2RrX3Zpdm9fb25saW5lX2RhdGEnLCAnJyk7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHNlbGYuc2V0T25saW5lRGF0YShkYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGFWZXJzaW9uID0gdmVyc2lvbjtcclxuICAgICAgICB2YXIgdXJsID0gdGhpcy5nZXRMb2dpblVybCgpO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YUZvckh0dHAodXJsLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBqc29uRCA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChqc29uRC5pc01vcmVJbmZvICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaXNNb3JlSW5mbyA9IGpzb25ELmlzTW9yZUluZm87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoanNvbkQuc3ApIHtcclxuICAgICAgICAgICAgICAgICAgICBVc2VyZGVmYXVsdC5zZXREYXRhRm9yS2V5KCdzZGtfdml2b19vbmxpbmVfc3AnLCBqc29uRC5zcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBVc2VyZGVmYXVsdC5zZXREYXRhRm9yS2V5KCdzZGtfdml2b19vbmxpbmVfdGltZScsIG5vd1RpbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChqc29uRC5zZXJ2ZXJfZGF0YV92ZXJzaW9uID09IHZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBVc2VyZGVmYXVsdC5nZXRTdHJpbmdGb3JLZXkoJ3Nka192aXZvX29ubGluZV9kYXRhJywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRPbmxpbmVEYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZSkuZGF0YTtcclxuICAgICAgICAgICAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGYuc2V0T25saW5lRGF0YShkYXRhKTtcclxuICAgICAgICAgICAgICAgIGlmIChqc29uRC5zZXJ2ZXJfZGF0YV92ZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlcmRlZmF1bHQuc2V0RGF0YUZvcktleSgnc2RrX3Zpdm9fb25saW5lX3ZlcnNpb24nLCBqc29uRC5zZXJ2ZXJfZGF0YV92ZXJzaW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFVzZXJkZWZhdWx0LnNldERhdGFGb3JLZXkoJ3Nka192aXZvX29ubGluZV9kYXRhJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ3Zpdm9sb2ctLS0tLS1lcnJvciAgaW5pdE9ubGluZURhdGEgKyAnICsgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0U3lzdGVtSW5mbygpIHtcclxuICAgICAgICB2YXIgaW5mbyA9IHFnLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybVZlcnNpb25Db2RlID0gaW5mby5wbGF0Zm9ybVZlcnNpb25Db2RlO1xyXG4gICAgICAgIHRoaXMuYW5kcm9pZFZlcnNpb24gPSBpbmZvLm9zVmVyc2lvbk5hbWU7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IGluZm8ubW9kZWw7XHJcbiAgICAgICAgb3BlbmlkID0gaW5mby5wcm9kdWN0O1xyXG4gICAgICAgIHRoaXMucmVnaW9uID0gaW5mby5yZWdpb247XHJcbiAgICAgICAgcWcuZ2V0TmV0d29ya1R5cGUoe1xyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5ldHdvcmtUeXBlID0gcmVzLnR5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgLy8gdGhpcy5fc3VwZXIob2JqKTtcclxuICAgICAgICBCYXNlTWFuYWdlci5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMsIG9iaik7XHJcbiAgICAgICAgdGhpcy5nZXRTeXN0ZW1JbmZvKCk7XHJcbiAgICAgICAgdGhpcy5fY2FuU2hvd0FEID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5wbGF0Zm9ybVZlcnNpb25Db2RlIDwgMTAzMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYW5TaG93QUQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGlleW91X3Nob3dMb2coJ3Zpdm8tLS0tLS0tLS0tLS0tLSBpbml0ICAgJyArIHRoaXMuX2NhblNob3dBRCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3ZpZGVvQWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2NhblNob3dWaWRlb0FkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9jYW5TaG93QmFubmVyQWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2NhblNob3dTcG90QWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2NhblNob3dOYXRpdmVBZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5jYW5TaG93TmF0aXZlQmFubmVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhblNob3dOYXRpdmVTcG90ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNwb3RfZmlyc3RfYWQgPSAnbmF0aXZlJ1xyXG4gICAgICAgIHRoaXMuYmFubmVyX2ZpcnN0X2FkID0gXCJuYXRpdmVcIjtcclxuICAgICAgICB0aGlzLm5hdGl2ZURlbGF5U2hvd1RpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuX3Nob3dTeXNTcG90VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5uYXRpdmVEZWxheURlc3Ryb3lUaW1lID0gMC4xO1xyXG4gICAgICAgIHRoaXMuc3BvdF9jbG9zZV9idXRfYWxwaGEgPSAxODA7XHJcbiAgICAgICAgdGhpcy5zcG90X2Nsb3NlX2J1dF9zaXplID0gNTU7XHJcbiAgICAgICAgdGhpcy5zcG90X2Nsb3NlX2J1dF9yYW5nZSA9IDY1O1xyXG4gICAgICAgIHRoaXMuc3BvdF9jbGlja19jbG9zZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoQmFubmVyVGltZSA9IDE1O1xyXG4gICAgICAgIHRoaXMuYmFubmVyX2Nsb3NlX2J1dF9hbHBoYSA9IDE4MDtcclxuICAgICAgICB0aGlzLmJhbm5lcl9jbG9zZV9idXRfc2l6ZSA9IDM1O1xyXG4gICAgICAgIHRoaXMuYmFubmVyX2Nsb3NlX2J1dF9yYW5nZSA9IDQwO1xyXG4gICAgICAgIHRoaXMuYmFubmVyX3Nob3dfaGVpZ2h0ID0gMTE1O1xyXG4gICAgICAgIHRoaXMuYmFubmVyX2Nsb3NlX2J1dF9zaG93ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9jYW5TaG93U3lzU3BvdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zdGFydE5hdGl2ZVNwb3QgPSAwO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRPbmxpbmVEYXRhKCk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9LFxyXG4gICAgdmlicmF0ZVNob3J0KCkge1xyXG4gICAgICAgIHFnLnZpYnJhdGVTaG9ydCgpO1xyXG4gICAgfSxcclxuICAgIHZpYnJhdGVMb25nKCkge1xyXG4gICAgICAgIHFnLnZpYnJhdGVMb25nKCk7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBoaWRlQmFubmVyKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLl9jYW5TaG93QmFubmVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5faGF2ZUJhbm5lckFkID0gZmFsc2U7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmJhbm5lclRpbWVPdXQpO1xyXG4gICAgICAgIGlmICh0aGlzLmJhbm5lckFkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyQWQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLmJhbm5lckFkID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJhbm5lck5hdGl2ZUFkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyTmF0aXZlQWQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLmJhbm5lck5hdGl2ZUFkID0gbnVsbDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9CYW5uZXJOYXRpdmVBRE5vZGUgJiYgdGhpcy5fQmFubmVyTmF0aXZlQUROb2RlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgc2VsZi5fQmFubmVyTmF0aXZlQUROb2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgc2VsZi5fQmFubmVyTmF0aXZlQUROb2RlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2hvd0Jhbm5lcihvYmopIHtcclxuICAgICAgICBpZiAodGhpcy5fY2FuU2hvd0Jhbm5lcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9CYW5uZXJOYXRpdmVBRE5vZGUgJiYgdGhpcy5fQmFubmVyTmF0aXZlQUROb2RlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2Jhbm5lckFkU3R5bGUgJiYgdGhpcy5fYmFubmVyQWRTdHlsZS55ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fQmFubmVyTmF0aXZlQUROb2RlLnkgPSBjYy53aW5TaXplLmhlaWdodCAtIHRoaXMuX2Jhbm5lckFkU3R5bGUueSAtIHRoaXMuYmFubmVyX3Nob3dfaGVpZ2h0ICogbGlleW91X1Nka01hbmFnZXIuX1NjZW5lU2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYmFubmVyQWQpIHtcclxuICAgICAgICAgICAgdGhpcy5iYW5uZXJBZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyQWQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9oYXZlQmFubmVyQWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9jYW5TaG93QmFubmVyID0gdHJ1ZTtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuYmFubmVyVGltZU91dCk7XHJcbiAgICAgICAgdmFyIHJlZnJlc2hUaW1lID0gdGhpcy5yZWZyZXNoQmFubmVyVGltZTtcclxuICAgICAgICBpZiAodGhpcy5iYW5uZXJfZmlyc3RfYWQgPT0gXCJuYXRpdmVcIikge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dCYW5uZXJOYXRpdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5iYW5uZXJUaW1lT3V0ID0gc2V0SW50ZXJ2YWwodGhpcy5zaG93QmFubmVyTmF0aXZlLmJpbmQodGhpcyksIDEwMDAgKiByZWZyZXNoVGltZSk7Ly/liLfmlrDlub/lkYpcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dCYW5uZXJTeXMoKTtcclxuICAgICAgICAgICAgdGhpcy5iYW5uZXJUaW1lT3V0ID0gc2V0SW50ZXJ2YWwodGhpcy5zaG93QmFubmVyU3lzLmJpbmQodGhpcyksIDEwMDAgKiByZWZyZXNoVGltZSk7Ly/liLfmlrDlub/lkYpcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2hvd0Jhbm5lclN5cyhpc0VuZCkge1xyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGlleW91X3Nob3dMb2coJ3Zpdm9sb2ctLS0tLS0tLS0tLS0tLSAgYmFubmVyIHNob3cgKyAnICsgc2VsZi5fY2FuU2hvd0Jhbm5lciArIFwiICAgXCIgKyB0aGlzLl9oYXZlQmFubmVyQWQpO1xyXG4gICAgICAgIGlmICghc2VsZi5fY2FuU2hvd0Jhbm5lcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9oYXZlQmFubmVyQWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICh2aXZvQmFubmVySWQgPT0gJycgfHwgIXRoaXMuX2NhblNob3dBRCB8fCAhdGhpcy5fY2FuU2hvd0Jhbm5lckFkKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fY2FuU2hvd0Jhbm5lckFkKSB7XHJcbiAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygndml2b2xvZy0tLS0tLS0tLS0tIGxvYWQgYmFubmVyIGZhaWwg6Ze06ZqU5pyq5YiwMTBz6ZKfJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFpc0VuZCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zaG93QmFubmVyTmF0aXZlKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLl9jYW5TaG93QmFubmVyQWQgPSB0cnVlO1xyXG4gICAgICAgIH0sIDEwMDAgKiAxMCk7XHJcbiAgICAgICAgc2VsZi5fY2FuU2hvd0Jhbm5lckFkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHZhciBiYW5uZXJBZCA9IG51bGw7XHJcbiAgICAgICAgdmFyIGxlZnQgPSAwO1xyXG4gICAgICAgIGlmIChjYy53aW5TaXplLndpZHRoID4gY2Mud2luU2l6ZS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgbGVmdCA9IChjYy53aW5TaXplLndpZHRoIC0gY2Mud2luU2l6ZS5oZWlnaHQpIC8gNDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2Jhbm5lckFkU3R5bGUgJiYgdGhpcy5fYmFubmVyQWRTdHlsZS55ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBiYW5uZXJBZCA9IHFnLmNyZWF0ZUJhbm5lckFkKHtcclxuICAgICAgICAgICAgICAgIHBvc0lkOiB2aXZvQmFubmVySWQsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogeyB0b3A6IHRoaXMuX2Jhbm5lckFkU3R5bGUueSwgbGVmdDogbGVmdCB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJhbm5lckFkID0gcWcuY3JlYXRlQmFubmVyQWQoe1xyXG4gICAgICAgICAgICAgICAgcG9zSWQ6IHZpdm9CYW5uZXJJZCxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7fVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJhbm5lckFkICYmIGJhbm5lckFkLm9uTG9hZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGJhbm5lckFkICYmIGJhbm5lckFkLnNob3coKTtcclxuICAgICAgICAgICAgaWYgKCFzZWxmLl9jYW5TaG93QmFubmVyKSB7XHJcbiAgICAgICAgICAgICAgICBiYW5uZXJBZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZi5faGF2ZUJhbm5lckFkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHNlbGYuX0Jhbm5lck5hdGl2ZUFETm9kZSAmJiBzZWxmLl9CYW5uZXJOYXRpdmVBRE5vZGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5fQmFubmVyTmF0aXZlQUROb2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuX0Jhbm5lck5hdGl2ZUFETm9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNlbGYuYmFubmVyQWQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuYmFubmVyQWQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGYuYmFubmVyQWQgPSBiYW5uZXJBZDtcclxuICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ3Zpdm9sb2ctLS0tLS0tLS0tLS0tLSAgYmFubmVyIHNob3cgc3VjY2VzcycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYmFubmVyQWQgJiYgYmFubmVyQWQub25FcnJvcihmdW5jdGlvbiAoZXJyKSB7XHJcbiAgICAgICAgICAgIGJhbm5lckFkLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgc2VsZi5faGF2ZUJhbm5lckFkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICghaXNFbmQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2hvd0Jhbm5lck5hdGl2ZSh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygndml2b2xvZy0tLS0tLS0tLS0tLS0tICBiYW5uZXIgc2hvdyBmYWlsJyArIEpTT04uc3RyaW5naWZ5KGVycikpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYmFubmVyQWQub25DbG9zZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGJhbm5lckFkLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgc2VsZi5faGF2ZUJhbm5lckFkID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBzaG93QmFubmVyQ3VzdG9tKG9iaikge1xyXG4gICAgICAgIHRoaXMuc2hvd0Jhbm5lcihvYmopO1xyXG4gICAgfSxcclxuICAgIHNob3dCYW5uZXJCeVRvcChpZCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0Jhbm5lcih7fSk7XHJcbiAgICB9LFxyXG4gICAgc2hvd0Jhbm5lckJ5Qm90dG9tKGlkKSB7XHJcbiAgICAgICAgdGhpcy5zaG93QmFubmVyKHt9KTtcclxuICAgIH0sXHJcbiAgICBzaG93UmV3YXJkZWRWaWRlb0FkKGlkLCBjbG9zZUNhbGxCYWNrKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZSA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRpbWUgPSAxO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWUgPSAtMVxyXG4gICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS3mkq3mlL7op4bpopFcIilcclxuICAgICAgICBjYy5nYW1lLmVtaXQoXCJFX01VU0lDX1NUT1BcIik7XHJcbiAgICAgICAgbGlleW91X3Nob3dMb2coJ3Zpdm9sb2ctLS0tLS0tLS0tIHNob3dSZXdhcmRlZFZpZGVvQWQnKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi5wbGF5VmlkZW9DYWxsQmFjayA9IGNsb3NlQ2FsbEJhY2s7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBsYXRmb3JtVmVyc2lvbkNvZGUgPCAxMDQxIHx8IHZpdm9WaWRlb0lkID09ICcnIHx8ICF0aGlzLl9jYW5TaG93VmlkZW9BZCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2NhblNob3dWaWRlb0FkKSB7XHJcbiAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygndml2b2xvZy0tLS0tLS0tLS0gbG9hZCB2aWRlbyBmYWlsIOmXtOmalOacquWIsOS4gOWIhumSnycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzZWxmLnBsYXlWaWRlb0NhbGxCYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXlWaWRlb0NhbGxCYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHNlbGYucGxheVZpZGVvQ2FsbEJhY2sgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLl9jYW5TaG93VmlkZW9BZCA9IHRydWU7XHJcbiAgICAgICAgfSwgMTAwMCAqIDYwKTtcclxuICAgICAgICBzZWxmLl9jYW5TaG93VmlkZW9BZCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLl92aWRlb0FkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZpZGVvQWQubG9hZCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciB2aWRlb0FkID0gcWcuY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHtcclxuICAgICAgICAgICAgcG9zSWQ6IHZpdm9WaWRlb0lkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fdmlkZW9BZCA9IHZpZGVvQWQ7XHJcbiAgICAgICAgLy8gdmlkZW9BZCYmdmlkZW9BZC5sb2FkKCk7XHJcbiAgICAgICAgdmlkZW9BZCAmJiB2aWRlb0FkLm9uTG9hZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCd2aXZvbG9nLS0tLS0tLS0tLSBsb2FkIHZpZGVvIHN1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgdmlkZW9BZCAmJiB2aWRlb0FkLnNob3coKTtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy52aXZvUGxheVZEQ2FsbEJhY2spIHtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnN0b3BNdXNpYygpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKTtcclxuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjYy5nYW1lLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnBhdXNlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmlkZW9BZCAmJiB2aWRlb0FkLm9uQ2xvc2UoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXNlbGYucGxheVZpZGVvQ2FsbEJhY2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygndml2b2xvZy0tLS0tLS0tLS0gbG9hZCB2aWRlbyBjbG9zZScpO1xyXG4gICAgICAgICAgICAvLyBjYy5nYW1lLnJlc3VtZSgpO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5yZXN1bWUoKTtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy52aXZvUGxheVZEQ2FsbEJhY2spIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy52aXZvUGxheVZEQ2FsbEJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocmVzLmlzRW5kZWQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYucGxheVZpZGVvQ2FsbEJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXlWaWRlb0NhbGxCYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxmLnBsYXlWaWRlb0NhbGxCYWNrID0gbnVsbDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2aWRlb0FkICYmIHZpZGVvQWQub25FcnJvcigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCd2aXZvbG9nLS0tLS0tLS0tLSBsb2FkIHZpZGVvIGZhaWwnICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLnBsYXlWaWRlb0NhbGxCYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXlWaWRlb0NhbGxCYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHNlbGYucGxheVZpZGVvQ2FsbEJhY2sgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1Nwb3QoaXNFbmQpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS12aXZv5o+S5bGPMzMzMzMzMzNcIilcclxuICAgICAgICBsaWV5b3Vfc2hvd0xvZygndml2b2xvZy0tLS0tLS0tLS0tLS0tICBzaG93U3BvdCcpO1xyXG4gICAgICAgIGlmICh2aXZvU3BvdEFESWQgPT0gJycgfHwgIXRoaXMuX2NhblNob3dBRCB8fCAhdGhpcy5fY2FuU2hvd1Nwb3RBZCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2NhblNob3dCYW5uZXJBZCkge1xyXG4gICAgICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ3Zpdm9sb2ctLS0tLS0tLS0tLSBsb2FkIHNwb3QgZmFpbCDpl7TpmpTmnKrliLAxMHPpkp8nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzRW5kKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNob3dOYXRpdmVCYW5uZXIodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmluc3RhbGxTaG9ydGN1dCh7IHNob2FEaWFsb2c6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5fY2FuU2hvd1Nwb3RBZCA9IHRydWU7XHJcbiAgICAgICAgfSwgMTAwMCAqIDEwKTtcclxuICAgICAgICBzZWxmLl9jYW5TaG93U3BvdEFkID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGludGVyc3RpdGlhbEFkID0gcWcuY3JlYXRlSW50ZXJzdGl0aWFsQWQoe1xyXG4gICAgICAgICAgICBwb3NJZDogdml2b1Nwb3RBRElkXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGludGVyc3RpdGlhbEFkICYmIGludGVyc3RpdGlhbEFkLm9uTG9hZChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJzdGl0aWFsQWQgJiYgaW50ZXJzdGl0aWFsQWQuc2hvdygpO1xyXG4gICAgICAgICAgICB9LCBzZWxmLm5hdGl2ZURlbGF5U2hvd1RpbWUgKiAxMDAwKTtcclxuICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ3Zpdm9sb2ctLS0tLS0tLS0tLS0tLSAgc3BvdCBsb2FkIHN1Y2Nlc3MnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGludGVyc3RpdGlhbEFkICYmIGludGVyc3RpdGlhbEFkLm9uRXJyb3IoZnVuY3Rpb24gKGVycikge1xyXG4gICAgICAgICAgICBpZiAoIWlzRW5kKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNob3dOYXRpdmVCYW5uZXIodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmluc3RhbGxTaG9ydGN1dCh7IHNob2FEaWFsb2c6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ3Zpdm9sb2ctLS0tLS0tLS0tLS0tLSAgc3BvdCBzaG93IGZhaWwnICsgSlNPTi5zdHJpbmdpZnkoZXJyKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBjdXN0Q2xpY2tOYXRpdmUobm9kZSkge1xyXG4gICAgICAgIGlmIChub2RlICYmIG5vZGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5DYWxsQmFjaykge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5DYWxsQmFjaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFkZE5hdGl2ZUFkKG5vZGUpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCFub2RlLmlzUnVuKSB7XHJcbiAgICAgICAgICAgIG5vZGUuaXNSdW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXIgbm9kZUFjdGlvbiA9IGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDExKSwgY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5hZGROYXRpdmVBZChub2RlKTtcclxuICAgICAgICAgICAgfSkpKTtcclxuICAgICAgICAgICAgbm9kZUFjdGlvbi5zZXRUYWcoNTY5Nzg0Nik7XHJcbiAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKG5vZGVBY3Rpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZpdm9OYXRpdmVJZCA9PSAnJyB8fCB0aGlzLnBsYXRmb3JtVmVyc2lvbkNvZGUgPCAxMDUzIHx8ICF0aGlzLl9jYW5TaG93TmF0aXZlQWQpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9jYW5TaG93TmF0aXZlQWQpIHtcclxuICAgICAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCd2aXZvbG9nLS0tLS0tLS0tLS0gbG9hZCBwbGF5IG5hdGl2ZSBmYWlsIOmXtOmalOacquWIsDEwc+mSnycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYuX2NhblNob3dOYXRpdmVBZCA9IHRydWU7XHJcbiAgICAgICAgfSwgMTAwMCAqIDEwKTtcclxuICAgICAgICBzZWxmLl9jYW5TaG93TmF0aXZlQWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdmFyIG5hdGl2ZUFkID0gcWcuY3JlYXRlTmF0aXZlQWQoeyAncG9zSWQnOiB2aXZvTmF0aXZlSWQgfSk7XHJcbiAgICAgICAgbmF0aXZlQWQubG9hZCgpO1xyXG4gICAgICAgIG5hdGl2ZUFkLm9uTG9hZCgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLmFkTGlzdCAmJiByZXMuYWRMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCd2aXZvbG9nLS0tLS0tLS0tLS0tLS0gcGxheSBuYXRpdmUgZmFpbCAxJyArICcgICAnICsgSlNPTi5zdHJpbmdpZnkocmVzKSlcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG51bUwgPSBwYXJzZUludChNYXRoLnJhbmRvbSgpICogcmVzLmFkTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkID0gcmVzLmFkTGlzdFtudW1MXS5hZElkO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gcmVzLmFkTGlzdFtudW1MXS50aXRsZTsvL+W5v+WRiuagh+mimFxyXG4gICAgICAgICAgICAgICAgdmFyIGRlc2MgPSByZXMuYWRMaXN0W251bUxdLmRlc2M7Ly/lub/lkYrmj4/ov7BcclxuICAgICAgICAgICAgICAgIHZhciBjbGlja0J0blR4dCA9IHJlcy5hZExpc3RbbnVtTF0uY2xpY2tCdG5UeHQ7Ly/ngrnlh7vmjInpkq7mlofmnKzmj4/ov7BcclxuICAgICAgICAgICAgICAgIHZhciBpY29uVXJsTGlzdCA9IFtdOy8v5bm/5ZGK5Zu+aWNvblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5hZExpc3RbbnVtTF0uaWNvbiAmJiByZXMuYWRMaXN0W251bUxdLmljb24gIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uVXJsTGlzdC5wdXNoKHJlcy5hZExpc3RbbnVtTF0uaWNvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nVXJsTGlzdCA9IHJlcy5hZExpc3RbbnVtTF0uaW1nVXJsTGlzdDsvL+W5v+WRiuWbvlxyXG4gICAgICAgICAgICAgICAgaW1nVXJsTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGxvZ29VcmwgPSByZXMuYWRMaXN0W251bUxdLmxvZ29Vcmw7Ly/lub/lkYrmoIfnrb7lm75cclxuICAgICAgICAgICAgICAgIG5hdGl2ZUFkLnJlcG9ydEFkU2hvdyh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRJZDogaWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ3Zpdm9sb2ctLS0tLS0tLSBzaG93IHBsYXkgbmF0aXZlIHN1Y2Nlc3MgJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hOb2RlID0gbm9kZTsvL3NlbGYuX2FkZE5hdGl2ZUFkTm9kZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRvdWNoTm9kZSB8fCAhdG91Y2hOb2RlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygndml2b2xvZyBuYXRpdmVOb2RlIG51bGwnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0b3VjaE5vZGUuc3RvcEFjdGlvbkJ5VGFnKDU2OTc4NDYpO1xyXG4gICAgICAgICAgICAgICAgdG91Y2hOb2RlLkNhbGxCYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hdGl2ZUFkLnJlcG9ydEFkQ2xpY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhZElkOiBpZFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdWNoTm9kZS5pc1J1biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkTmF0aXZlQWQodG91Y2hOb2RlKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBpZiAodG91Y2hOb2RlICYmIHRvdWNoTm9kZS5pc1ZhbGlkICYmIHRvdWNoTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdWNoTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0b3VjaE5vZGUuaGF2ZVRvdWNoT24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hOb2RlLmhhdmVUb3VjaE9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5DYWxsQmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvZ29VcmwgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhZFRpdGxlTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZFRpdGxlTm9kZS5zY2FsZSA9IDAuNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoTm9kZS5hZGRDaGlsZChhZFRpdGxlTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZFRpdGxlTm9kZS54ID0gdG91Y2hOb2RlLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkVGl0bGVOb2RlLnkgPSB0b3VjaE5vZGUuaGVpZ2h0IC8gMiAqIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRUaXRsZU5vZGUuYW5jaG9yWCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZFRpdGxlTm9kZS5hbmNob3JZID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkVGl0bGVOb2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQobG9nb1VybCwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZFRpdGxlTm9kZSAmJiBhZFRpdGxlTm9kZS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkVGl0bGVOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG91Y2hOb2RlLndpZHRoIC8gdG91Y2hOb2RlLmhlaWdodCA+PSAxLjUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ1VybExpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gaW1nVXJsTGlzdFtwYXJzZUludChNYXRoLnJhbmRvbSgpICogaW1nVXJsTGlzdC5sZW5ndGgpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpY29uVXJsTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSBpY29uVXJsTGlzdFtwYXJzZUludChNYXRoLnJhbmRvbSgpICogaWNvblVybExpc3QubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWNvblVybExpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gaWNvblVybExpc3RbcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIGljb25VcmxMaXN0Lmxlbmd0aCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGltZ1VybExpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gaW1nVXJsTGlzdFtwYXJzZUludChNYXRoLnJhbmRvbSgpICogaW1nVXJsTGlzdC5sZW5ndGgpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodXJsICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHVybCwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRvdWNoTm9kZSAmJiB0b3VjaE5vZGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCd2aXZvbG9nLS0gc2hvd3BsYXlOYXRpdmVGYWlsICAgJyArIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG5hdGl2ZUFkLm9uRXJyb3IoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygndml2b2xvZy0tLS0tLS0tIHNob3cgcGxheSBuYXRpdmUgZmFpbCAnICsgJyAgICcgKyBKU09OLnN0cmluZ2lmeShlcnIpKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgc2hvd0Jhbm5lck5hdGl2ZShpc0VuZCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gc2VsZi5zaG93QmFubmVyU3lzKHRydWUpO1xyXG4gICAgICAgIC8vIHJldHVyblxyXG5cclxuICAgICAgICBpZiAodGhpcy5faGF2ZUJhbm5lckFkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jYW5TaG93TmF0aXZlQmFubmVyKSB7XHJcbiAgICAgICAgICAgIGlmICghaXNFbmQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2hvd0Jhbm5lclN5cyh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodml2b05hdGl2ZUlkID09ICcnIHx8IHRoaXMucGxhdGZvcm1WZXJzaW9uQ29kZSA8IDEwNTMgfHwgIXRoaXMuX2NhblNob3dOYXRpdmVBZCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2NhblNob3dOYXRpdmVBZCkge1xyXG4gICAgICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ3Zpdm9sb2ctLS0tLS0tLS0tLSBsb2FkIGJhbm5lciBuYXRpdmUgZmFpbCDpl7TpmpTmnKrliLAxMHPpkp8nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzRW5kKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNob3dCYW5uZXJTeXModHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5fY2FuU2hvd05hdGl2ZUFkID0gdHJ1ZTtcclxuICAgICAgICB9LCAxMDAwICogMTApO1xyXG4gICAgICAgIHNlbGYuX2NhblNob3dOYXRpdmVBZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB2YXIgbmF0aXZlQWQgPSBxZy5jcmVhdGVOYXRpdmVBZCh7ICdwb3NJZCc6IHZpdm9OYXRpdmVJZCB9KTtcclxuICAgICAgICBuYXRpdmVBZC5sb2FkKCk7XHJcbiAgICAgICAgbmF0aXZlQWQub25Mb2FkKChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuYWRMaXN0ICYmIHJlcy5hZExpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ3Zpdm9sb2ctLS0tLS0tLS0tLS0tLSBiYW5uZXIgbmF0aXZlIGZhaWwgMScgKyAnICAgJyArIEpTT04uc3RyaW5naWZ5KHJlcykpXHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzRW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zaG93QmFubmVyU3lzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbnVtTCA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiByZXMuYWRMaXN0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSByZXMuYWRMaXN0W251bUxdLmFkSWQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGl0bGUgPSByZXMuYWRMaXN0W251bUxdLnRpdGxlOy8v5bm/5ZGK5qCH6aKYXHJcbiAgICAgICAgICAgICAgICB2YXIgZGVzYyA9IHJlcy5hZExpc3RbbnVtTF0uZGVzYzsvL+W5v+WRiuaPj+i/sFxyXG4gICAgICAgICAgICAgICAgdmFyIGNsaWNrQnRuVHh0ID0gcmVzLmFkTGlzdFtudW1MXS5jbGlja0J0blR4dDsvL+eCueWHu+aMiemSruaWh+acrOaPj+i/sFxyXG4gICAgICAgICAgICAgICAgdmFyIGljb25VcmxMaXN0ID0gW107Ly/lub/lkYrlm75pY29uXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmFkTGlzdFtudW1MXS5pY29uICYmIHJlcy5hZExpc3RbbnVtTF0uaWNvbiAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGljb25VcmxMaXN0LnB1c2gocmVzLmFkTGlzdFtudW1MXS5pY29uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBpbWdVcmxMaXN0ID0gcmVzLmFkTGlzdFtudW1MXS5pbWdVcmxMaXN0Oy8v5bm/5ZGK5Zu+XHJcbiAgICAgICAgICAgICAgICBpbWdVcmxMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICB2YXIgbG9nb1VybCA9IHJlcy5hZExpc3RbbnVtTF0ubG9nb1VybDsvL+W5v+WRiuagh+etvuWbvlxyXG4gICAgICAgICAgICAgICAgbmF0aXZlQWQucmVwb3J0QWRTaG93KHtcclxuICAgICAgICAgICAgICAgICAgICBhZElkOiBpZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygndml2b2xvZy0tLS0tLS0tIHNob3cgYmFubmVyIG5hdGl2ZSBzdWNjZXNzICcpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9hZGVyLmxvYWRSZXMoJ1NESy9tb2R1bGUvcUdhbWVOYXRpdmVBZC9iYW5uZXJOYXRpdmVBZCcsZnVuY3Rpb24oZXJyLHJlcyl7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNlbGYuX2NhblNob3dCYW5uZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLl9oYXZlQmFubmVyQWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5iYW5uZXJBZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmJhbm5lckFkLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5iYW5uZXJBZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBzZWxmLmJhbm5lckFkID0gbmF0aXZlQWQgIC8vLyoqKioqKioqKioqKioqKioqKioqKioqKmFzZCoqKioqKioqKioqICovXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZk5vZGUgPSBjYy5kaXJlY3Rvci5nZXRSdW5uaW5nU2NlbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGxpZXlvdV9uYXRpdmVCYW5uZXIoKTsvL2NjLmluc3RhbnRpYXRlKHJlcyk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLl9CYW5uZXJOYXRpdmVBRE5vZGUgJiYgc2VsZi5fQmFubmVyTmF0aXZlQUROb2RlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fQmFubmVyTmF0aXZlQUROb2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fQmFubmVyTmF0aXZlQUROb2RlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5fQmFubmVyTmF0aXZlQUROb2RlID0gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnggPSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5fYmFubmVyQWRTdHlsZSAmJiBzZWxmLl9iYW5uZXJBZFN0eWxlLnkgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUueSA9IGNjLndpblNpemUuaGVpZ2h0IC0gc2VsZi5fYmFubmVyQWRTdHlsZS55IC0gc2VsZi5iYW5uZXJfc2hvd19oZWlnaHQgKiBsaWV5b3VfU2RrTWFuYWdlci5fU2NlbmVTY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZk5vZGUuYWRkQ2hpbGQobm9kZSwgOTk5KTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBub2RlLkdyb3VwID0gXCJVaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoJ2xpZXlvdV9vcHBvTmF0aXZlQWRTZGsnKS5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hDYWxsQmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlQWQucmVwb3J0QWRDbGljayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRJZDogaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQ2FsbEJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5hdGl2ZUFkLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6IGRlc2MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrQnRuVHh0OiBjbGlja0J0blR4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvblVybExpc3Q6IGljb25VcmxMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdVcmxMaXN0OiBpbWdVcmxMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dvVXJsOiBsb2dvVXJsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUFscGhhOiBzZWxmLmJhbm5lcl9jbG9zZV9idXRfYWxwaGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlU2l6ZTogc2VsZi5iYW5uZXJfY2xvc2VfYnV0X3NpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlUmFuZ2U6IHNlbGYuYmFubmVyX2Nsb3NlX2J1dF9yYW5nZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VTaG93OiBzZWxmLmJhbm5lcl9jbG9zZV9idXRfc2hvdyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFubmVySGVpZ2h0OiBzZWxmLmJhbm5lcl9zaG93X2hlaWdodFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygndml2b2xvZy0tIHNob3diYW5uZXJOYXRpdmVGYWlsICAgJyArIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygndml2b2xvZy0tIHNob3diYW5uZXJOYXRpdmVGYWlsICAgJyArIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG5hdGl2ZUFkLm9uRXJyb3IoKGVycikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWlzRW5kKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNob3dCYW5uZXJTeXModHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ3Zpdm9sb2ctLS0tLS0tLSBzaG93IGJhbm5lciBuYXRpdmUgZmFpbCAnICsgJyAgICcgKyBKU09OLnN0cmluZ2lmeShlcnIpKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgc2hvd05hdGl2ZUJhbm5lcihpc0VuZCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBpZiAoIXRoaXMuY2FuU2hvd05hdGl2ZVNwb3QgfHwgdml2b05hdGl2ZUlkID09ICcnIHx8IHRoaXMucGxhdGZvcm1WZXJzaW9uQ29kZSA8IDEwNTMgfHwgIXRoaXMuX2NhblNob3dOYXRpdmVBZCB8fCBVc2VyZGVmYXVsdC5nZXRJbnRGb3JLZXkoJ3Zpdm9fc2hvd05hdGl2ZU51bScsIDApIDwgdGhpcy5zdGFydE5hdGl2ZVNwb3QpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9jYW5TaG93TmF0aXZlQWQpIHtcclxuICAgICAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCd2aXZvbG9nLS0tLS0tLS0tLS0gbG9hZCBuYXRpdmUgZmFpbCDpl7TpmpTmnKrliLAxMHPpkp8nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzRW5kKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNob3dTcG90KHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5pbnN0YWxsU2hvcnRjdXQoeyBzaG9hRGlhbG9nOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYuX2NhblNob3dOYXRpdmVBZCA9IHRydWU7XHJcbiAgICAgICAgfSwgMTAwMCAqIDEwKTtcclxuICAgICAgICBzZWxmLl9jYW5TaG93TmF0aXZlQWQgPSBmYWxzZTtcclxuICAgICAgICB2YXIgbmF0aXZlQWQgPSBxZy5jcmVhdGVOYXRpdmVBZCh7ICdwb3NJZCc6IHZpdm9OYXRpdmVJZCB9KTtcclxuICAgICAgICBuYXRpdmVBZC5sb2FkKCk7XHJcbiAgICAgICAgbmF0aXZlQWQub25Mb2FkKChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMuYWRMaXN0ICYmIHJlcy5hZExpc3QubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCd2aXZvbG9nLS0tLS0tLS0tLS0tLS0gIG5hdGl2ZSBmYWlsIDEnICsgJyAgICcgKyBKU09OLnN0cmluZ2lmeShyZXMpKVxyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2hvd1Nwb3QodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW5zdGFsbFNob3J0Y3V0KHsgc2hvYURpYWxvZzogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG51bUwgPSBwYXJzZUludChNYXRoLnJhbmRvbSgpICogcmVzLmFkTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkID0gcmVzLmFkTGlzdFtudW1MXS5hZElkO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gcmVzLmFkTGlzdFtudW1MXS50aXRsZTsvL+W5v+WRiuagh+mimFxyXG4gICAgICAgICAgICAgICAgdmFyIGRlc2MgPSByZXMuYWRMaXN0W251bUxdLmRlc2M7Ly/lub/lkYrmj4/ov7BcclxuICAgICAgICAgICAgICAgIHZhciBjbGlja0J0blR4dCA9IHJlcy5hZExpc3RbbnVtTF0uY2xpY2tCdG5UeHQ7Ly/ngrnlh7vmjInpkq7mlofmnKzmj4/ov7BcclxuICAgICAgICAgICAgICAgIHZhciBpY29uVXJsTGlzdCA9IFtdOy8v5bm/5ZGK5Zu+aWNvblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5hZExpc3RbbnVtTF0uaWNvbiAmJiByZXMuYWRMaXN0W251bUxdLmljb24gIT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uVXJsTGlzdC5wdXNoKHJlcy5hZExpc3RbbnVtTF0uaWNvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nVXJsTGlzdCA9IHJlcy5hZExpc3RbbnVtTF0uaW1nVXJsTGlzdDsvL+W5v+WRiuWbvlxyXG4gICAgICAgICAgICAgICAgdmFyIGxvZ29VcmwgPSByZXMuYWRMaXN0W251bUxdLmxvZ29Vcmw7Ly/lub/lkYrmoIfnrb7lm75cclxuICAgICAgICAgICAgICAgIG5hdGl2ZUFkLnJlcG9ydEFkU2hvdyh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRJZDogaWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ3Zpdm9sb2ctLS0tLS0tLSBzaG93IG5hdGl2ZSBzdWNjZXNzICcpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9hZGVyLmxvYWRSZXMoJ1NESy9tb2R1bGUvcUdhbWVOYXRpdmVBZC9uYXRpdmVBZCcsZnVuY3Rpb24oZXJyLHJlcyl7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmTm9kZSA9IGNjLmRpcmVjdG9yLmdldFJ1bm5pbmdTY2VuZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlID0gbGlleW91X25hdGl2ZVNwb3QoKTsvL2NjLmluc3RhbnRpYXRlKHJlcyk7IFxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgdGhpcy5uYXRpdmVEZWxheVNob3dUaW1lICogMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZk5vZGUuYWRkQ2hpbGQobm9kZSwgOTk5KTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnggPSBjYy53aW5TaXplLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnkgPSBjYy53aW5TaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoJ2xpZXlvdV9vcHBvTmF0aXZlQWRTZGsnKS5zZXREYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hDYWxsQmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlQWQucmVwb3J0QWRDbGljayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRJZDogaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLm5hdGl2ZURlbGF5RGVzdHJveVRpbWUgKiAxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUNhbGxCYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjOiBkZXNjLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlja0J0blR4dDogY2xpY2tCdG5UeHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb25VcmxMaXN0OiBpY29uVXJsTGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nVXJsTGlzdDogaW1nVXJsTGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9nb1VybDogbG9nb1VybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VBbHBoYTogc2VsZi5zcG90X2Nsb3NlX2J1dF9hbHBoYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VTaXplOiBzZWxmLnNwb3RfY2xvc2VfYnV0X3NpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlUmFuZ2U6IHNlbGYuc3BvdF9jbG9zZV9idXRfcmFuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlU2hvdzogc2VsZi5zcG90X2NsaWNrX2Nsb3NlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChzZWxmLmJhbm5lckFkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGYuYmFubmVyQWQuZGVzdHJveSgpOyAvLyoqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBzZWxmLmJhbm5lckFkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCd2aXZvbG9nLS0gc2hvd05hdGl2ZUZhaWwgICAnICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCd2aXZvbG9nLS0gc2hvd05hdGl2ZUZhaWwgICAnICsgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbmF0aXZlQWQub25FcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghaXNFbmQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2hvd1Nwb3QodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmluc3RhbGxTaG9ydGN1dCh7IHNob2FEaWFsb2c6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ3Zpdm9sb2ctLS0tLS0tLSBzaG93IG5hdGl2ZSBmYWlsICcgKyAnICAgJyArIEpTT04uc3RyaW5naWZ5KGVycikpXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBzaG93U3BvdEJ5UGF1c2UoaXNIYXZlTmF0aXZlLCB0b3ApIHtcclxuICAgICAgICB0aGlzLmFkZFNob3dTcG90TnVtKCk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1Nwb3RCeUJlZ2luKGlzSGF2ZU5hdGl2ZSwgdG9wKSB7XHJcbiAgICAgICAgdGhpcy5hZGRTaG93U3BvdE51bSgpO1xyXG4gICAgfSxcclxuICAgIHNob3dTcG90QnlGaW5pc2goaXNIYXZlTmF0aXZlLCB0b3ApIHtcclxuICAgICAgICB0aGlzLmFkZFNob3dTcG90TnVtKCk7XHJcbiAgICB9LFxyXG4gICAgYWRkU2hvd1Nwb3ROdW0oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLXZpdm/mj5LlsY9cIilcclxuICAgICAgICB2YXIgdGltZSA9IHBhcnNlSW50KGdldFRpbWUoKSAvIDEwMDApO1xyXG4gICAgICAgIGlmICh0aW1lIC0gdGhpcy5fYmVnaW5HYW1lVGltZSA8IHRoaXMuX3Nob3dTcG90U3RhcnRUaW1lKSB7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCd2aXZvbG9nLS0tLS0tLS0tLS0gbG9hZCBzcG90IOWQr+WKqOa4uOaIj+S4gOWumuaXtumXtOWGheS4jeaYvuekuuaPkuWxjycpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBpZiAoIXRoaXMuX2NhblNob3dTeXNTcG90KSB7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCd2aXZvbG9nLS0tLS0tLS0tLS0gbG9hZCBzcG90IG9yIE5haXR2ZSBmYWlsIOmXtOmalOacquWIsCcgKyBzZWxmLl9zaG93U3lzU3BvdFRpbWUgKyAnc+mSnycpO1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbGxTaG9ydGN1dCh7IHNob2FEaWFsb2c6IHRydWUgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2VsZi5fY2FuU2hvd1N5c1Nwb3QgPSB0cnVlO1xyXG4gICAgICAgIH0sIDEwMDAgKiBzZWxmLl9zaG93U3lzU3BvdFRpbWUpO1xyXG4gICAgICAgIHNlbGYuX2NhblNob3dTeXNTcG90ID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIG51bSA9IFVzZXJkZWZhdWx0LmdldEludEZvcktleSgndml2b19zaG93TmF0aXZlTnVtJywgMCk7XHJcbiAgICAgICAgVXNlcmRlZmF1bHQuc2V0RGF0YUZvcktleSgndml2b19zaG93TmF0aXZlTnVtJywgbnVtICsgMSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3BvdF9maXJzdF9hZCA9PSBcIm5hdGl2ZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd05hdGl2ZUJhbm5lcihmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93U3BvdChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGluc3RhbGxTaG9ydGN1dChvYmogPSB7fSkge1xyXG4gICAgICAgIHZhciB0aW1lID0gcGFyc2VJbnQoZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICAgICAgaWYgKHRpbWUgLSB0aGlzLl9iZWdpbkdhbWVUaW1lIDwgdGhpcy5faW5zdGFsbFNob3J0Y3V0U3RhcnRUaW1lICYmICFvYmouY2FuU2hvdykge1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygndml2b2xvZyBpbnN0YWxsU2hvcnRjdXQgY2FuU2hvd1Nob3J0Y3V0IOW8gOWni+aXtumXtOacquWIsCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aW1lIC0gdGhpcy5fdXBJbnN0YWxsU2hvcnRjdXRUaW1lIDwgdGhpcy5faW5zdGFsbFNob3J0Y3V0VGltZSAmJiAhb2JqLmNhblNob3cpIHtcclxuICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ3Zpdm9sb2cgaW5zdGFsbFNob3J0Y3V0IGNhblNob3dTaG9ydGN1dCDpl7TpmpTml7bpl7TmnKrliLAnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLmNhblNob3dTaG9ydGN1dCAmJiAhb2JqLmNhblNob3cpIHtcclxuICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ3Zpdm9sb2cgaW5zdGFsbFNob3J0Y3V0IGNhblNob3dTaG9ydGN1dCBmYWxzZScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmJhc2VfSXNTaGVuSGUgJiYgIW9iai5jYW5TaG93KSB7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCd2aXZvbG9nIGluc3RhbGxTaG9ydGN1dCBzaGVuaGUgdHJ1ZScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnBsYXRmb3JtVmVyc2lvbkNvZGUgPCAxMDQxKSB7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCd2aXZvbG9nIGluc3RhbGxTaG9ydGN1dCB2ZXJzaW9uIGxvdycpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBxZy5oYXNTaG9ydGN1dEluc3RhbGxlZCh7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqLmNhbGxCYWNrX2FkZE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmNhbGxCYWNrX2FkZE5vZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZihvYmouc2hvYURpYWxvZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dJbnN0YWxsU2hvcnRjdXREaWFsb2coKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLl91cEluc3RhbGxTaG9ydGN1dFRpbWUgPSB0aW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHFnLmluc3RhbGxTaG9ydGN1dCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmouc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iai5zdWNjZXNzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNldE9wZXJUcmFjayh7IHR5cGU6IDEsIHN0YXRlOiAxIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWxmLnNldE9wZXJUcmFjayh7dHlwZToxLHN0YXRlOjB9KTsgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICBzaG93TW9kYWwob2JqKSB7XHJcbiAgICAgICAgcWcuc2hvd0RpYWxvZyh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBvYmoudGl0bGUgPyBvYmoudGl0bGUgOiAnJywgbWVzc2FnZTogb2JqLmNvbnRlbnQgPyBvYmouY29udGVudCA6ICcnLFxyXG4gICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ+ehruWumicsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjMzNkZDQ0J1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn5Y+W5raIJyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyMzM2RkNDQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuaW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5zdWNjZXNzICYmIG9iai5zdWNjZXNzKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5mYWlsICYmIG9iai5mYWlsKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGNhbmNlbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgb2JqLmZhaWwgJiYgb2JqLmZhaWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNob3dUb2FzdCh0aXRsZSkge1xyXG4gICAgICAgIHFnLnNob3dUb2FzdCh7IG1lc3NhZ2U6IHRpdGxlIH0pO1xyXG4gICAgfSxcclxuICAgIGhpZGVUb2FzdCgpIHtcclxuICAgICAgICAvLyBxZy5oaWRlVG9hc3Qoe30pO1xyXG4gICAgfSxcclxuICAgIHNob3dMb2FkaW5nKHRpdGxlKSB7XHJcbiAgICAgICAgcWcuc2hvd0xvYWRpbmcoeyBtZXNzYWdlOiB0aXRsZSB9KTtcclxuICAgIH0sXHJcbiAgICBoaWRlTG9hZGluZygpIHtcclxuICAgICAgICBxZy5oaWRlTG9hZGluZygpO1xyXG4gICAgfSxcclxufSlcclxubW9kdWxlLmV4cG9ydHMgPSBWaXZvTWFuYWdlcjtcclxuXHJcblxyXG5cclxuXHJcbiJdfQ==