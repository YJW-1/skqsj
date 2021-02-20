
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/scripts/OppoManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c1bdZ2DetGmYkM4vyAUlOG', 'OppoManager');
// resources/SDK/scripts/OppoManager.js

"use strict";

//广告错误信息 1016 广告位id无效或不存在 或审核未通过
//广告错误信息 1015 应用id（appid）和包名不匹配
//广告错误信息 1014 应用id（appid）无效或不存在
//广告错误信息 1003 无广告返回
//最低版本1050
window.oppo_nativeArea = 1;
window.oppo_waitT = 300;

var BaseManager = require('BaseManager');

var OppoManager = cc.Class({
  "extends": require('BaseManager'),
  properties: {
    bannerAd: null
  },
  getHaveVideo: function getHaveVideo() {
    if (oppoVideoId.length <= 0) {
      return false;
    }

    return true;
  },
  getVersion: function getVersion() {
    return oppoGameVersion;
  },
  getSysPlatform_string: function getSysPlatform_string() {
    return 'oppo';
  },
  getSysPlatform: function getSysPlatform() {
    return 4;
  },
  onShow: function onShow(fun) {
    qg.onShow(fun);
  },
  onHide: function onHide(fun) {
    qg.onHide(fun);
  },
  setOnlineData: function setOnlineData(data) {
    if (data.oppo) {
      if (data.oppo.showNativeIntervalTime != undefined) {
        this._showNativeIntervalTime = Number(data.oppo.showNativeIntervalTime);
      }

      if (data.oppo.showBannerStartTime != undefined) {
        this._showBannerStartTime = Number(data.oppo.showBannerStartTime);
      }

      if (data.oppo.showNativeStartTime != undefined) {
        this._showNativeStartTime = Number(data.oppo.showNativeStartTime);
      }

      if (data.oppo.canShowNativeAd != undefined) {
        this.canShowNativeAd = data.oppo.canShowNativeAd;
      }

      if (data.oppo.starShowSpotTime != undefined) {
        this._showSpotStartTime = Number(data.oppo.starShowSpotTime);
      }

      if (data.oppo.installShortcutIntervalTime != undefined) {
        this._installShortcutTime = Number(data.oppo.installShortcutIntervalTime);
      }

      if (data.oppo.nativeAdLoadServerRes) {
        _SDKNativeAdLoadServerRes = data.oppo.nativeAdLoadServerRes;
      }

      if (data.oppo.serverVersion != undefined) {
        var serverVersoin = Number(data.oppo.serverVersion);

        if (serverVersoin >= oppoGameVersion) {
          this.base_IsShenHe = false;
        } else {
          this.base_IsShenHe = true;
        }
      }

      if (!data.oppo.closeShortcut) {
        this.canShowShortcut = true;
      }

      var adData = {};

      if (data.oppo.theme) {
        adData.theme = data.oppo.theme;
      }

      if (data.oppo.crossSwitch) {
        adData.crossSwitch = data.oppo.crossSwitch;
      }

      if (data.oppo.bizData) {
        adData.bizData = data.oppo.bizData;
      }

      if (data.oppo.ad_datas) {
        adData.ad_datas = data.oppo.ad_datas;
      }

      if (data.oppo["switch"]) {
        adData["switch"] = data.oppo["switch"];
      }

      if (this.platformVersionCode >= 1044) {
        this.setAdData(adData);
      }

      if (data.oppo.banner_close_autoshow != undefined) {
        this._banner_close_autoshow = data.oppo.banner_close_autoshow;
      }

      if (data.oppo.spot_banner_only != undefined) {
        this._spot_banner_only = data.oppo.spot_banner_only;
      }

      if (data.oppo.spot_Interval != undefined) {
        this._showSysSpotTime = Number(data.oppo.spot_Interval);
      }

      if (data.oppo.startNativeSpot != undefined) {
        this.startNativeSpot = Number(data.oppo.startNativeSpot);
      }

      if (data.oppo.is_play_native != undefined) {
        this.is_play_native = data.oppo.is_play_native;
      }

      if (data.oppo.canShowNativeSpot != undefined) {
        this.canShowNativeSpot = data.oppo.canShowNativeSpot;
      }

      if (data.oppo.waitT != undefined) {
        this.showNativeSpotTime = Number(data.oppo.waitT);
      }

      if (data.oppo.banner_close_but_size != undefined) {
        this.banner_close_but_size = Number(data.oppo.banner_close_but_size);
      }

      if (data.oppo.banner_close_but_range != undefined) {
        this.banner_close_but_range = Number(data.oppo.banner_close_but_range);
      }

      if (data.oppo.spot_close_but_alpha != undefined) {
        this.spot_close_but_alpha = Number(data.oppo.spot_close_but_alpha);
      }

      if (data.oppo.spot_close_but_size != undefined) {
        this.spot_close_but_size = Number(data.oppo.spot_close_but_size);
      }

      if (data.oppo.banner_show_height != undefined) {
        this.banner_show_height = Number(data.oppo.banner_show_height);
      }

      if (data.oppo.spot_click_count != undefined) {
        this.spot_click_count = Number(data.oppo.spot_click_count);
      }

      if (data.oppo.spot_show_interval != undefined) {
        this.spot_show_interval = Number(data.oppo.spot_show_interval);
      }

      if (data.oppo.spot_close_but_range != undefined) {
        this.spot_close_but_range = Number(data.oppo.spot_close_but_range);
      }

      if (data.oppo.banner_close_but_alpha != undefined) {
        this.banner_close_but_alpha = Number(data.oppo.banner_close_but_alpha);
      }

      if (data.oppo.banner_close_but_show != undefined) {
        this.banner_close_but_show = data.oppo.banner_close_but_show;
      }

      if (data.oppo.spot_click_close != undefined) {
        this.spot_click_close = data.oppo.spot_click_close;
      }

      if (data.oppo.banner_click_refresh != undefined) {
        this.banner_click_refresh = data.oppo.banner_click_refresh;
      }

      if (data.oppo.spot_first_ad != undefined) {
        this.spot_first_ad = data.oppo.spot_first_ad;
      }

      if (data.oppo.banner_first_ad != undefined) {
        this.banner_first_ad = data.oppo.banner_first_ad;
      }

      if (data.oppo.is_local_pos_id != undefined) {
        this.is_local_pos_id = data.oppo.is_local_pos_id;
      }

      if (data.oppo.canShowNativeBanner != undefined) {
        this.canShowNativeBanner = data.oppo.canShowNativeBanner;
      }

      if (data.oppo.nativeDelayShowTime != undefined) {
        this.nativeDelayShowTime = Number(data.oppo.nativeDelayShowTime);
      }

      if (data.oppo.nativeDelayDestroyTime != undefined) {
        this.nativeDelayDestroyTime = Number(data.oppo.nativeDelayDestroyTime);
      }

      if (data.oppo.refreshBannerTime != undefined) {
        this.refreshBannerTime = Number(data.oppo.refreshBannerTime);
      }

      this.setSwitchData(data.oppo);
    } else {}

    var id_config = null;

    if (data.oppo.id_config) {
      id_config = data.oppo.id_config;
    } else if (data.id_config) {
      id_config = data.id_config;
    }

    if (id_config) {
      if (!this.is_local_pos_id) {
        if (id_config.nativeall != undefined && id_config.nativeall.length && id_config.nativeall.length >= 6) {
          var allid = this.shuffle(id_config.nativeall);
          oppoNativeId = [];
          oppoNativeBannerId = [];
          oppoNativePlayId = [];
          var idNum = allid.length;

          for (var i = 0; i < idNum; i++) {
            if (i < parseInt(idNum * 0.5)) {
              oppoNativeId.push(allid[i]);
            } else if (i < parseInt(idNum * 0.9)) {
              oppoNativeBannerId.push(allid[i]);
            } else {
              oppoNativePlayId.push(allid[i]);
            }
          }

          lieyou_showLog("oppolog123 oppoNativeId =  " + oppoNativeId);
          lieyou_showLog("oppolog123 oppoNativeBannerId =  " + oppoNativeBannerId);
          lieyou_showLog("oppolog123 oppoNativePlayId =  " + oppoNativePlayId);
        } else {
          if (id_config.nativeBannerid != undefined) {
            oppoNativeBannerId = id_config.nativeBannerid;
          }

          if (id_config.nativeid != undefined) {
            oppoNativeId = id_config.nativeid;
          }

          if (id_config.nativeplay != undefined) {
            oppoNativePlayId = id_config.nativeplay;
          }
        }

        if (id_config.appid != undefined) {
          oppoId_SDK = id_config.appid;
        }

        if (id_config.bid != undefined) {
          oppoBannerId = id_config.bid;
        }

        if (id_config.spoid != undefined) {
          oppoSpotADId = id_config.spoid;
        }

        if (id_config.awardid != undefined) {
          oppoVideoId = id_config.awardid;
        }

        this.clearNativeAd();
      }
    }
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
        lieyou_showLog('oppolog------error  initOnlineData + ' + error);
      }
    });
  },
  login: function login() {
    qg.login({
      success: function success(res) {
        var data = JSON.stringify(res.data);
        openid = res.data.uid;
      }
    });
  },
  getSystemInfo: function getSystemInfo() {
    var _this = this;

    var info = qg.getSystemInfoSync();
    this.platformVersionCode = info.platformVersion;
    this.androidVersion = info.system;
    this.model = info.model; // this.region = info.region;

    qg.getNetworkType({
      success: function success(res) {
        _this.networkType = res.networkType;
      }
    });
  },
  init: function init(obj) {
    var _this2 = this;

    try {
      qg.reportMonitor('game_scene', 0);
    } catch (error) {} // this._super(obj);


    BaseManager.prototype.init.call(this, obj);
    this.getSystemInfo();
    this.login();
    var nowTime = parseInt(getTime() / 1000);

    if (Userdefault.getIntForKey('oppo_isNewPlayer', 1)) {
      Userdefault.setDataForKey('oppo_isNewPlayer', 0);
      Userdefault.setDataForKey('oppo_oncePlayGameTime', nowTime);
    } //false 300


    this._preShowNativeTime = 0;
    this._showNativeIntervalTime = 10;
    this._showBannerStartTime = 40;
    this._showNativeStartTime = 40;
    this.canShowNativeAd = true;
    this.canShowShortcut = true;
    this.isSysInstallShortCut = true;
    this.is_play_native = true;
    this.canShowNativeSpot = true;
    this.showNativeSpotTime = 0;
    this.canShowNativeBanner = true;
    this.nativeDelayShowTime = 0;
    this.nativeDelayDestroyTime = 0.1;
    this.refreshBannerTime = 15;
    this.is_local_pos_id = false;
    this.spot_first_ad = "native";
    this.banner_first_ad = "native";
    this.banner_close_but_alpha = 120;
    this.banner_close_but_size = 35;
    this.banner_close_but_range = 40;
    this.spot_close_but_alpha = 100;
    this.spot_close_but_size = 35;
    this.spot_close_but_range = 50;
    this.banner_show_height = 115;
    this.banner_close_but_show = true;
    this.spot_click_close = true;
    this.banner_click_refresh = false, this.spot_click_count = 8, this.spot_show_interval = 2, this._installShortcutStartTime = 20;
    qg.initAdService({
      appId: oppoId_SDK,
      success: function success(res) {
        lieyou_showLog("oppolog------init success-----  " + res);
      },
      fail: function fail(res) {
        lieyou_showLog("oppolog------init fail-----  " + res);
      },
      compvare: function compvare(res) {
        lieyou_showLog("oppolog------init compvare-----  " + res);
      }
    });
    this._nativeEmbedAd = [];
    this.showNativeEmbedIndex = 0;
    this.showNativeEmbedFailNum = 0;
    this._haveBannerAd = false;
    this._bannerAd = [];
    this._nativeSporAd = [];
    this._nativeBannerAd = [];
    this._nativePlayAd = [];
    this._insertAd = [];
    this._videoAd = [];
    this.showAdBannerIndex = 0;
    this.showAdSpotIndex = 0;
    this.showAdAwardIndex = 0;
    this.showAdNativeIndex = 0;
    this.showAdNativePlayIndex = 0;
    this.showAdNativeBannerIndex = 0;
    this.showAdBannerContinueFailNum = 0;
    this.showAdSpotContinueFailNum = 0;
    this.showAdAwardContinueFailNum = 0;
    this.showAdNativeContinueFailNum = 0;
    this.showAdNativePlayContinueFailNum = 0;
    this.showAdNativeBannerContinueFailNum = 0;
    this.startNativeSpot = 0;
    this._addNativeAdNode = [], this._addNativeAdNum = 0, this._canShowSysSpot = true;
    this._showSysSpotTime = 0;
    this._spot_banner_only = true;
    this._banner_close_autoshow = false;
    this._closeBannerNum = 0;
    setTimeout(function () {
      _this2.initOnlineData();
    }, 1000);
    this.loadNativeAd();
  },
  vibrateShort: function vibrateShort() {
    qg.vibrateShort();
  },
  vibrateLong: function vibrateLong() {
    qg.vibrateLong();
  },
  clearNativeAd: function clearNativeAd() {
    for (var i = 0; i < this._nativeSporAd.length; i++) {
      this._nativeSporAd[i].destroy();

      this._nativeSporAd[i] = null;
    }

    for (var i = 0; i < this._nativeBannerAd.length; i++) {
      this._nativeBannerAd[i].destroy();

      this._nativeBannerAd[i] = null;
    }

    for (var i = 0; i < this._nativePlayAd.length; i++) {
      this._nativePlayAd[i].destroy();

      this._nativePlayAd[i] = null;
    }

    for (var i = 0; i < this._insertAd.length; i++) {
      this._insertAd[i].destroy();

      this._insertAd[i] = null;
    }

    for (var i = 0; i < this._videoAd.length; i++) {
      this._videoAd[i].destroy();

      this._videoAd[i] = null;
    }

    for (var i = 0; i < this._nativeEmbedAd.length; i++) {
      this._nativeEmbedAd[i].destroy();

      this._nativeEmbedAd[i] = null;
    }

    this.loadNativeAd();
  },
  custClickNative: function custClickNative(node) {
    if (node && node.isValid) {
      if (node.CallBack) {
        node.CallBack();
      } else {}
    }
  },
  addNativeAd: function addNativeAd(node) {
    var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var self = this;
    lieyou_showLog('oppolog1------ addNativeAd ' + this.showAdNativePlayIndex + '   ' + oppoNativePlayId[this.showAdNativePlayIndex]);

    if (node) {
      if (!node.isValid) {
        return;
      }

      var nativeadTag = 0;

      if (node.nativeAdTag) {
        nativeadTag = node.nativeAdTag;
      } else {
        var nodeAction = cc.repeatForever(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
          self.addNativeAd(node);
        })));
        nodeAction.setTag(5697846);
        node.runAction(nodeAction);
        self._addNativeAdNum++;
        node.nativeAdTag = self._addNativeAdNum;
        nativeadTag = self._addNativeAdNum;
      }

      self._addNativeAdNode[nativeadTag] = node;
      node.canShowAd = true;
    }

    if (oppoNativePlayId.length <= 0) {
      return;
    }

    if (!flag) {
      self.showAdNativePlayContinueFailNum = 0;
    }

    var id = oppoNativePlayId[this.showAdNativePlayIndex];

    if (this._nativePlayAd[this.showAdNativePlayIndex]) {
      this._nativePlayAd[this.showAdNativePlayIndex].load();

      this.showAdNativePlayIndex++;
      this.showAdNativePlayIndex = this.showAdNativePlayIndex % oppoNativePlayId.length;
      return;
    }

    var nativeAd = qg.createNativeAd({
      posId: id
    });
    this._nativePlayAd[this.showAdNativePlayIndex] = nativeAd;
    this.showAdNativePlayIndex++;
    this.showAdNativePlayIndex = this.showAdNativePlayIndex % oppoNativePlayId.length;
    nativeAd.load();
    nativeAd.onLoad(function (res) {
      if (res && res.adList && res.adList.length > 0) {} else {
        lieyou_showLog('oppolog------ show addNativeAd fail2 ' + '   ' + JSON.stringify(res));
        self.showAdNativePlayContinueFailNum++;

        if (self.showAdNativePlayContinueFailNum < oppoNativePlayId.length) {
          self.addNativeAd(null, true);
        } else {}

        return;
      }

      self.showAdNativePlayContinueFailNum = 0;

      try {
        var numL = parseInt(Math.random() * res.adList.length);
        var id = res.adList[numL].adId;
        var title = res.adList[numL].title; //广告标题

        var desc = res.adList[numL].desc; //广告描述

        var clickBtnTxt = res.adList[numL].clickBtnTxt; //点击按钮文本描述

        var iconUrlList = res.adList[numL].iconUrlList; //广告图icon

        var imgUrlList = res.adList[numL].imgUrlList; //广告图

        var logoUrl = res.adList[numL].logoUrl; //广告标签图

        nativeAd.reportAdShow({
          adId: id
        });
        var touchNode = null; //self._addNativeAdNode;

        for (var nN = self._addNativeAdNum; nN > 0; nN--) {
          var adnode = self._addNativeAdNode[nN];

          if (adnode && adnode.isValid && adnode.getComponent(cc.Sprite) && adnode.canShowAd) {
            touchNode = adnode;
            adnode.canShowAd = false;
            break;
          } else {}
        }

        if (!touchNode) {
          lieyou_showLog('oppolog nativeNode null');
          return;
        }

        touchNode.stopActionByTag(5697846);

        touchNode.CallBack = function () {
          nativeAd.reportAdClick({
            adId: id
          });
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
        lieyou_showLog('oppolog-----addNativeAd Fail + ' + error);
      }
    });
    nativeAd.onError(function (err) {
      lieyou_showLog('oppolog------ show addNativeAd fail1 ' + '   ' + JSON.stringify(err));
      self.showAdNativePlayContinueFailNum++;

      if (self.showAdNativePlayContinueFailNum < oppoNativePlayId.length) {
        self.addNativeAd(null, true);
      } else {}
    });
  },
  showNativeBanner: function showNativeBanner(flag, isEnd) {
    var _this3 = this;

    var self = this;
    self._NativeBannerFlag = flag;
    self._NativeBannerIsEnd = isEnd;
    var nowTime = parseInt(getTime() / 1000);
    var oldTime = Userdefault.getIntForKey(lieyou.Key_OncePlayerTime, nowTime);
    var time = nowTime - oldTime;

    if (!this.canShowNativeSpot || time < this.showNativeSpotTime || Userdefault.getIntForKey('oppo_showNativeNum', 0) < this.startNativeSpot) {
      if (!self._NativeBannerIsEnd) {
        self.showSpot(false, true);
      } else {
        self.installShortcut({
          shoaDialog: true
        });
      }

      return;
    }

    lieyou_showLog('oppolog1------ showNativeBanner ' + this.showAdNativeIndex + '   ' + oppoNativeId[this.showAdNativeIndex]);

    if (!self._NativeBannerFlag) {
      self.showAdNativeContinueFailNum = 0;
    }

    if (oppoNativeId.length <= 0) {
      if (!self._NativeBannerIsEnd) {
        self.showSpot(false, true);
      } else {
        self.installShortcut({
          shoaDialog: true
        });
      }

      return;
    }

    if (this._nativeSporAd[this.showAdNativeIndex]) {
      this._nativeSporAd[this.showAdNativeIndex].load();

      this.showAdNativeIndex++;
      this.showAdNativeIndex = this.showAdNativeIndex % oppoNativeId.length;
      return;
    }

    lieyou_showLog('oppolog2------ showNativeBanner ' + this.showAdNativeIndex);
    var id = oppoNativeId[this.showAdNativeIndex];
    var nativeAd = qg.createNativeAd({
      posId: id
    });
    this._nativeSporAd[this.showAdNativeIndex] = nativeAd;
    this.showAdNativeIndex++;
    this.showAdNativeIndex = this.showAdNativeIndex % oppoNativeId.length;
    nativeAd.load();
    nativeAd.onLoad(function (res) {
      if (res && res.adList && res.adList.length > 0) {} else {
        lieyou_showLog('oppolog------ show native fail ' + '   ' + JSON.stringify(res));
        self.showAdNativeContinueFailNum++;

        if (self.showAdNativeContinueFailNum < oppoNativeId.length) {
          self.showNativeBanner(true, self._NativeBannerIsEnd);
        } else {
          if (!self._NativeBannerIsEnd) {
            self.showSpot(false, true);
          } else {
            self.installShortcut({
              shoaDialog: true
            });
          }
        }

        return;
      }

      self.showAdNativeContinueFailNum = 0;

      try {
        var numL = parseInt(Math.random() * res.adList.length);
        var id = res.adList[numL].adId;
        var title = res.adList[numL].title; //广告标题

        var desc = res.adList[numL].desc; //广告描述

        var clickBtnTxt = res.adList[numL].clickBtnTxt; //点击按钮文本描述

        var iconUrlList = res.adList[numL].iconUrlList; //广告图icon

        var imgUrlList = res.adList[numL].imgUrlList; //广告图

        var logoUrl = res.adList[numL].logoUrl; //广告标签图

        nativeAd.reportAdShow({
          adId: id
        });
        lieyou_showLog('oppolog------ show native success '); // cc.loader.loadRes('SDK/module/qGameNativeAd/nativeAd',function(err,res){

        try {
          self.showSpotSuccess();
          var fNode = cc.director.getRunningScene();
          var node = lieyou_nativeSpot(); //cc.instantiate(res); 

          node.scale = 0;
          node.active = false;
          setTimeout(function () {
            node.scale = 1;
            node.active = true;
          }, _this3.nativeDelayShowTime * 1000);
          fNode.addChild(node, 999);
          cc.game.addPersistRootNode(node);
          node.x = cc.winSize.width / 2;
          node.y = cc.winSize.height / 2;
          var showB = self._canShowBanner;

          if (self._spot_banner_only) {
            self.hideBanner();
          }

          node.getComponent('lieyou_oppoNativeAdSdk').setData({
            touchCallBack: function () {
              nativeAd.reportAdClick({
                adId: id
              });
              setTimeout(function () {
                node.destroy();
              }, this.nativeDelayDestroyTime * 1000); // node.runAction(cc.sequence(cc.delayTime(this.nativeDelayDestroyTime),cc.removeSelf()));
            }.bind(_this3),
            closeCallBack: function () {
              if (showB) {
                lieyou_showLog('oppolog-- close native spot showBanner');
                self.showBanner();
              }
            }.bind(_this3),
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
          });
        } catch (error) {
          lieyou_showLog('oppolog showNativeSporFail   ' + error);
        } // }.bind(this));

      } catch (error) {
        lieyou_showLog('oppolog showNativeSporFail   ' + error);
      }
    });
    nativeAd.onError(function (err) {
      lieyou_showLog('oppolog------ show native fail ' + '   ' + JSON.stringify(err));
      self.showAdNativeContinueFailNum++;

      if (self.showAdNativeContinueFailNum < oppoNativeId.length) {
        self.showNativeBanner(true, self._NativeBannerIsEnd);
      } else {
        if (!self._NativeBannerIsEnd) {
          self.showSpot(false, true);
        } else {
          self.installShortcut({
            shoaDialog: true
          });
        }
      }
    });
  },
  hideNativeBanner: function hideNativeBanner() {},
  hideBanner: function hideBanner() {
    lieyou_showLog('oppolog------------ close banner');
    this._canShowBanner = false;
    this._haveBannerAd = false;
    clearInterval(this.bannerTimeOut);

    for (var i = 0; i < this._bannerAd.length; i++) {
      if (this._bannerAd[i]) {
        this._bannerAd[i].destroy();

        this._bannerAd[i] = null;
      }
    }

    if (this._BannerNativeADNode && this._BannerNativeADNode.isValid) {
      this._BannerNativeADNode.destroy();

      this._BannerNativeADNode = null;
    }
  },
  showBanner: function showBanner(obj) {
    var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this._clearInterval = false;

    if (this._canShowBanner) {
      return;
    }

    if (this._BannerNativeADNode && this._BannerNativeADNode.isValid) {
      if (this._bannerAdStyle && this._bannerAdStyle.y != undefined) {
        this._BannerNativeADNode.y = cc.winSize.height - this._bannerAdStyle.y - this.banner_show_height * lieyou_SdkManager._SceneScale;
      }
    }

    for (var i = 0; i < this._bannerAd.length; i++) {
      if (this._bannerAd[i]) {
        this._bannerAd[i].destroy();

        this._bannerAd[i] = null;
      }
    }

    if (this.moreGameBanner && this.moreGameBanner.isValid) {
      this.moreGameBanner.destroy();
      this.moreGameBanner = null;
    }

    if (this._closeBannerNum >= 5) {
      lieyou_showLog('oppolog-- closeBannerNum == 5');
      return;
    }

    this._haveBannerAd = false;
    this._canShowBanner = true;
    clearInterval(this.bannerTimeOut);
    var refreshTime = this.refreshBannerTime;

    if (this.banner_first_ad == "native") {
      this.showBannerNativeAD();
      this.bannerTimeOut = setInterval(this.showBannerNativeAD.bind(this), 1000 * refreshTime); //刷新广告
    } else {
      this.showBanner2();
      this.bannerTimeOut = setInterval(this.showBanner2.bind(this), 1000 * refreshTime); //刷新广告
    }
  },
  showBannerNativeAD: function showBannerNativeAD() {
    var _this4 = this;

    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var nowTime = parseInt(lieyou_getTime() / 1000);

    if (nowTime - this._beginGameTime < this._showBannerStartTime) {
      lieyou_showLog("显示banner广告时间未到" + this._showBannerStartTime);
      return;
    }

    if (this._clearInterval) {
      return;
    }

    var self = this; // self.showBanner2({isEnd:true});
    // return;

    if (this.moreGameBanner && this.moreGameBanner.isValid) {
      return;
    }

    self._bannerNativeAdObj = obj;
    lieyou_showLog('oppolog1------ showBannerNativeAD ' + this.showAdNativeBannerIndex + '   ' + oppoNativeBannerId[this.showAdNativeBannerIndex]);

    if (this._haveBannerAd) {
      return;
    }

    if (!this.canShowNativeBanner) {
      if (!self._bannerNativeAdObj.isEnd) {
        self.showBanner2({
          isEnd: true
        });
      }

      return;
    }

    if (!self._bannerNativeAdObj.flag) {
      self.showAdNativeBannerContinueFailNum = 0;
    }

    if (oppoNativeBannerId.length <= 0) {
      if (!self._bannerNativeAdObj.isEnd) {
        self.showBanner2({
          isEnd: true
        });
      }

      return;
    }

    if (this._nativeBannerAd[this.showAdNativeBannerIndex]) {
      this._nativeBannerAd[this.showAdNativeBannerIndex].load();

      this.showAdNativeBannerIndex++;
      this.showAdNativeBannerIndex = this.showAdNativeBannerIndex % oppoNativeBannerId.length;
      return;
    }

    lieyou_showLog('oppolog2------ showBannerNativeAD ' + this.showAdNativeBannerIndex);
    var id = oppoNativeBannerId[this.showAdNativeBannerIndex];
    var nativeAd = qg.createNativeAd({
      posId: id
    });
    this._nativeBannerAd[this.showAdNativeBannerIndex] = nativeAd;
    this.showAdNativeBannerIndex++;
    this.showAdNativeBannerIndex = this.showAdNativeBannerIndex % oppoNativeBannerId.length;
    nativeAd.load();
    nativeAd.onLoad(function (res) {
      if (res && res.adList && res.adList.length > 0) {} else {
        lieyou_showLog('oppolog------ show native banner fail ' + '  ' + JSON.stringify(err));
        self.showAdNativeBannerContinueFailNum++;

        if (self.showAdNativeBannerContinueFailNum < oppoNativeBannerId.length) {
          self.showBannerNativeAD({
            flag: true,
            isEnd: self._bannerNativeAdObj.isEnd
          });
        } else {
          if (!self._bannerNativeAdObj.isEnd) {
            self.showBanner2({
              isEnd: true
            });
          }
        }

        return;
      }

      try {
        self.showAdNativeBannerContinueFailNum = 0;
        var numL = parseInt(Math.random() * res.adList.length);
        var id = res.adList[numL].adId;
        var title = res.adList[numL].title; //广告标题

        var desc = res.adList[numL].desc; //广告描述

        var clickBtnTxt = res.adList[numL].clickBtnTxt; //点击按钮文本描述

        var iconUrlList = res.adList[numL].iconUrlList; //广告图icon

        var imgUrlList = res.adList[numL].imgUrlList; //广告图

        imgUrlList = []; //不显示大图

        var logoUrl = res.adList[numL].logoUrl; //广告标签图

        nativeAd.reportAdShow({
          adId: id
        });
        lieyou_showLog('oppolog------ show native banner success'); // cc.loader.loadRes('SDK/module/qGameNativeAd/bannerNativeAd',function(err,res){

        if (!self._canShowBanner) {
          return;
        }

        try {
          if (_this4._haveBannerAd) {
            return;
          }

          for (var i = 0; i < _this4._bannerAd.length; i++) {
            if (_this4._bannerAd[i]) {
              _this4._bannerAd[i].destroy();

              _this4._bannerAd[i] = null;
            }
          }

          if (self._BannerNativeADNode && self._BannerNativeADNode.isValid) {
            self._BannerNativeADNode.destroy();

            self._BannerNativeADNode = null;
          } // self.hideBanner();


          var fNode = cc.director.getRunningScene();
          var node = lieyou_nativeBanner(); //cc.instantiate(res); 

          self._BannerNativeADNode = node; // node.y = -640/fNode.scale;

          node.x = cc.winSize.width / 2;

          if (self._bannerAdStyle && self._bannerAdStyle.y != undefined) {
            node.y = cc.winSize.height - self._bannerAdStyle.y - self.banner_show_height * lieyou_SdkManager._SceneScale;
          }

          fNode.addChild(node, 999);
          cc.game.addPersistRootNode(node);
          node.getComponent('lieyou_oppoNativeAdSdk').setData({
            touchCallBack: function () {
              nativeAd.reportAdClick({
                adId: id
              });
            }.bind(_this4),
            closeCallBack: function () {
              self._closeBannerNum++;
              lieyou_showLog('oppolog------- close native Banner');

              if (!self._banner_close_autoshow) {
                // clearInterval(self.bannerTimeOut);
                self._BannerNativeADNode = null;
                self._clearInterval = true;
              } // nativeAd.destroy();

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
          lieyou_showLog('oppolog showNativeBannerFail   ' + error);
        } // }.bind(this));

      } catch (error) {
        lieyou_showLog('oppolog showNativeBannerFail   ' + error);
      }
    });
    nativeAd.onError(function (err) {
      lieyou_showLog('oppolog------ show native banner fail ' + '  ' + JSON.stringify(err));
      self.showAdNativeBannerContinueFailNum++;

      if (self.showAdNativeBannerContinueFailNum < oppoNativeBannerId.length) {
        self.showBannerNativeAD({
          flag: true,
          isEnd: self._bannerNativeAdObj.isEnd
        });
      } else {
        if (!self._bannerNativeAdObj.isEnd) {
          self.showBanner2({
            isEnd: true
          });
        }
      }
    });
  },
  showBanner2: function showBanner2() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var nowTime = parseInt(lieyou_getTime() / 1000);

    if (nowTime - this._beginGameTime < this._showBannerStartTime) {
      lieyou_showLog("显示banner广告时间未到" + this._showBannerStartTime);
      return;
    }

    if (this._clearInterval) {
      return;
    }

    if (this.moreGameBanner && this.moreGameBanner.isValid) {
      return;
    }

    var self = this;

    if (!self._canShowBanner) {
      return;
    }

    lieyou_showLog('oppolog1------ showBanner2 ' + this.showAdBannerIndex);

    if (this._haveBannerAd) {
      return;
    }

    self._showBannerObj = obj;

    if (!self._showBannerObj.flag) {
      self.showAdBannerContinueFailNum = 0;
    }

    if (oppoBannerId.length <= 0) {
      if (!self._showBannerObj.isEnd) {
        self.showBannerNativeAD({
          isEnd: true
        });
      }

      return;
    }

    ;

    if (this._bannerAd[this.showAdBannerIndex]) {
      this._bannerAd[this.showAdBannerIndex].show();

      this.showAdBannerIndex++;
      this.showAdBannerIndex = this.showAdBannerIndex % oppoBannerId.length;
      return;
    }

    lieyou_showLog('oppolog2------ showBanner2 ' + this.showAdBannerIndex);
    var id = oppoBannerId[this.showAdBannerIndex];
    var bannerAd = qg.createBannerAd({
      posId: id
    });
    this._bannerAd[this.showAdBannerIndex] = bannerAd;
    bannerAd.show();
    bannerAd.onShow(function () {
      self._haveBannerAd = true;

      if (self._BannerNativeADNode && self._BannerNativeADNode.isValid) {
        self._BannerNativeADNode.destroy();

        self._BannerNativeADNode = null;
      }

      lieyou_showLog("oppolog------show banner -----  ");
    });
    bannerAd.onError(function (res) {
      self._haveBannerAd = false;

      if (!self._canShowBanner) {
        return;
      }

      self.showAdBannerContinueFailNum++;

      if (self.showAdBannerContinueFailNum < oppoBannerId.length) {
        self.showBanner2({
          flag: true,
          isEnd: self._showBannerObj.isEnd
        });
      } else {
        if (!self._showBannerObj.isEnd) {
          self.showBannerNativeAD({
            isEnd: true
          });
        }
      }

      lieyou_showLog("oppolog------show banner fail-----  " + '   ' + JSON.stringify(res));
    });
    bannerAd.onHide(function () {
      lieyou_showLog("oppolog------ banner onHide-----  ");
      self._closeBannerNum++;

      if (!self._banner_close_autoshow) {
        // clearInterval(self.bannerTimeOut);
        self._haveBannerAd = false;
        self._clearInterval = true;
      } else {
        self._haveBannerAd = false;
      }
    });
    bannerAd.onResize(function (res) {
      if (self._bannerAdStyle && self._bannerAdStyle.y != undefined) {
        bannerAd.style.top = self._bannerAdStyle.y;
      }
    });
    this.showAdBannerIndex++;
    this.showAdBannerIndex = this.showAdBannerIndex % oppoBannerId.length;
  },
  showBannerCustom: function showBannerCustom(obj) {
    this.showBanner(obj);
  },
  showBannerByTop: function showBannerByTop(id) {
    if (this.platformVersionCode < 1051) {
      this.hideBanner();
      return;
    }

    this.showBanner({});
  },
  showBannerByBottom: function showBannerByBottom(id) {
    this.showBanner({});
  },
  showRewardedVideoAd: function showRewardedVideoAd(id2, closeCallBack) {
    var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    lieyou_showLog('oppolog1------ showRewardedVideoAd ' + this.showAdAwardIndex);
    this.playVdCallBack = closeCallBack;
    this.playVdFlag = flag;

    if (oppoVideoId.length <= 0) {
      this.playVdCallBack(false);
      return;
    }

    var self = this;

    if (!self.playVdFlag) {
      self.showAdAwardContinueFailNum = 0;
    }

    if (this._videoAd[this.showAdAwardIndex]) {
      this._videoAd[this.showAdAwardIndex].load();

      this.showAdAwardIndex++;
      this.showAdAwardIndex = this.showAdAwardIndex % oppoVideoId.length;
      return;
    }

    lieyou_showLog('oppolog2------ showRewardedVideoAd ' + this.showAdAwardIndex);
    var id = oppoVideoId[this.showAdAwardIndex];
    var videoAd = qg.createRewardedVideoAd({
      posId: id
    });
    this._videoAd[this.showAdAwardIndex] = videoAd;
    this.showAdAwardIndex++;
    this.showAdAwardIndex = this.showAdAwardIndex % oppoVideoId.length;
    videoAd.load();
    videoAd.onLoad(function () {
      self.showAdAwardContinueFailNum = 0;
      lieyou_showLog('oppolog------  vd success ');
      videoAd.show();
    });
    videoAd.onError(function (res) {
      lieyou_showLog('oppolog------ vd fail ' + '   ' + JSON.stringify(res));
      self.showAdAwardContinueFailNum++;

      if (self.showAdAwardContinueFailNum < oppoVideoId.length) {
        self.showRewardedVideoAd('', self.playVdCallBack, true);
      } else {
        self.playVdCallBack(false);
      }
    });
    videoAd.onClose(function (res) {
      if (res.isEnded) {
        self.playVdCallBack(true);
      } else {
        self.playVdCallBack(false);
      }
    });
  },
  showSpot: function showSpot(flag, isEnd) {
    var self = this;
    lieyou_showLog('oppolog1------ showSpot ' + this.showAdSpotIndex);
    self._showSpotFlag = flag;
    self._showSpotIsEnd = isEnd;

    if (!self._showSpotFlag) {
      self.showAdSpotContinueFailNum = 0;
    }

    if (oppoSpotADId.length <= 0) {
      self.installShortcut({
        shoaDialog: true
      });

      if (!self._showSpotIsEnd) {// self.showNativeBanner(false,true);
      }

      return;
    }

    if (this._insertAd[this.showAdSpotIndex]) {
      this._insertAd[this.showAdSpotIndex].load();

      this.showAdSpotIndex++;
      this.showAdSpotIndex = this.showAdSpotIndex % oppoSpotADId.length;
      return;
    }

    lieyou_showLog('oppolog2------ showSpot ' + this.showAdSpotIndex);
    var id = oppoSpotADId[this.showAdSpotIndex];
    var insertAd = qg.createInsertAd({
      posId: id
    });
    this._insertAd[this.showAdSpotIndex] = insertAd;
    this.showAdSpotIndex++;
    this.showAdSpotIndex = this.showAdSpotIndex % oppoSpotADId.length; // insertAd.load();

    insertAd.onLoad(function () {
      self.showAdSpotContinueFailNum = 0;
      lieyou_showLog('oppolog------ spot load success ');
      setTimeout(function () {
        self.showSpotSuccess();
        insertAd.show();

        if (self._spot_banner_only && self.platformVersionCode >= 1044) {
          var showB = self._canShowBanner;
          self.hideBanner();
          insertAd.onClose(function () {
            insertAd.offClose();
            lieyou_showLog('oppolog-- close sys spot showBanner');

            if (showB) {
              self.showBanner();
            }
          });
        }
      }, self.nativeDelayShowTime * 1000);
    });
    insertAd.onError(function (res) {
      lieyou_showLog('oppolog------ spot load fail ' + '  ' + JSON.stringify(res));
      self.showAdSpotContinueFailNum++;

      if (self.showAdSpotContinueFailNum < oppoSpotADId.length) {
        self.showSpot(true, self._showSpotIsEnd);
      } else {
        self.installShortcut({
          shoaDialog: true
        });

        if (!self._showSpotIsEnd) {// self.showNativeBanner(false,true);
        }
      }
    });
  },
  showSpotSuccess: function showSpotSuccess() {
    this._showSpotCount++;
    Userdefault.setDataForKey('lieyou_showSpotCount', this._showSpotCount);

    if (this._showSpotTime == 0) {
      var time = parseInt(getTime() / 1000);
      this._showSpotTime = time;
      Userdefault.setDataForKey('lieyou_showSpotTime', time);
    }
  },
  addShowSpotNum: function addShowSpotNum() {
    var time = parseInt(getTime() / 1000);

    if (time - this._showSpotTime > this._showSpotMaxCountRefreshTime * 60 * 60) {
      lieyou_showLog('oppolog----------- spot 重置插屏显示数量');
      this._showSpotCount = 0;
      this._showSpotTime = 0;
      Userdefault.setDataForKey('lieyou_showSpotCount', 0);
      Userdefault.setDataForKey('lieyou_showSpotTime', 0);
    }

    lieyou_showLog('oppolog----------- spot ' + this._showSpotCount + ' ' + this._showSpotMaxCount + ' ' + this._showSpotMaxCountRefreshTime);

    if (this._showSpotCount >= this._showSpotMaxCount) {
      this.installShortcut({
        shoaDialog: true
      });
      lieyou_showLog('oppolog----------- spot 显示次数太多 ');
      return;
    }

    if (time - this._beginGameTime < this._showSpotStartTime) {
      lieyou_showLog('oppolog----------- load spot 启动游戏一定时间内不显示插屏');
      return;
    }

    var self = this;

    if (!this._canShowSysSpot) {
      lieyou_showLog('oppolog----------- load spot or Naitve fail 间隔未到' + self._showSysSpotTime + 's钟');
      this.installShortcut({
        shoaDialog: true
      });
      return;
    }

    setTimeout(function () {
      self._canShowSysSpot = true;
    }, 1000 * self._showSysSpotTime);
    self._canShowSysSpot = false;
    var num = Userdefault.getIntForKey('oppo_showNativeNum', 0);
    Userdefault.setDataForKey('oppo_showNativeNum', num + 1);

    if (this.spot_first_ad == "native") {
      this.showNativeBanner(false, false);
    } else {
      this.showSpot(false, false);
    }
  },
  showSpotByPause: function showSpotByPause() {
    this.addShowSpotNum();
  },
  showSpotByBegin: function showSpotByBegin() {},
  showSpotByFinish: function showSpotByFinish() {
    this.addShowSpotNum();
  },
  //new 
  newJumpApp: function newJumpApp(obj) {
    var self = this;
    lieyou_showLog('oppolog------ jump apk = ' + obj.data.appId);

    if (this.platformVersionCode >= 1044) {
      qg.navigateToMiniGame({
        pkgName: obj.data.appId,
        success: function () {
          if (obj.success) {
            obj.success();
          }
        }.bind(this),
        fail: function fail(res) {}
      });
    } else {}
  },
  installShortcut: function installShortcut() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    lieyou_showLog('oppolog installShortcut canShowShortcut ');
    var time = parseInt(getTime() / 1000);

    if (time - this._beginGameTime < this._installShortcutStartTime && !obj.canShow) {
      lieyou_showLog('oppolog installShortcut canShowShortcut 开始时间未到 ' + this._installShortcutStartTime);
      return;
    }

    if (time - this._upInstallShortcutTime < this._installShortcutTime && !obj.canShow) {
      lieyou_showLog('oppolog installShortcut canShowShortcut 间隔时间未到 ' + this._installShortcutTime);
      return;
    }

    if (!this.canShowShortcut && !obj.canShow) {
      lieyou_showLog('oppolog installShortcut canShowShortcut false');
      return;
    }

    if (this.base_IsShenHe && !obj.canShow) {
      lieyou_showLog('oppolog installShortcut shenhe true');
      return;
    }

    if (this.platformVersionCode < 1040) {
      lieyou_showLog('oppolog installShortcut version low');
      return;
    }

    var self = this;
    qg.hasShortcutInstalled({
      success: function success(res) {
        if (res == false) {
          if (obj.callBack_addNode) {
            obj.callBack_addNode();
            return;
          }

          self._upInstallShortcutTime = time;

          if (obj.shoaDialog && Math.round(self.androidVersion.split(" ")[1].split(".")[0]) >= 8 && !self.isSysInstallShortCut) {
            lieyou_SdkManager.showInstallShortcutDialog();
            return;
          } // self.setOperTrack({type:1,state:0});


          qg.installShortcut({
            success: function success() {
              if (obj.success) {
                obj.success();
              } // self.setOperTrack({type:1,state:1});

            }
          });
        } else {
          if (!Userdefault.getBoolForKey('lieyou_isHaveShortcut', false)) {
            Userdefault.setBoolForKey('lieyou_isHaveShortcut', true);
            self.setOperTrack({
              type: 1,
              state: 1
            });
          }
        }
      }
    });
  },
  showModal: function showModal(obj) {
    qg.showModal({
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
    qg.showToast({
      title: title
    });
  },
  hideToast: function hideToast() {
    qg.hideToast({});
  },
  showLoading: function showLoading(title) {
    qg.showLoading({
      title: title
    });
  },
  hideLoading: function hideLoading() {
    qg.hideLoading({});
  },
  loadNativeAd: function loadNativeAd() {
    var _this5 = this;

    var self = this;

    if (oppoNativeId.length <= 0) {
      return;
    }

    if (this._nativeEmbedAd[this.showNativeEmbedIndex]) {
      this._nativeEmbedAd[this.showNativeEmbedIndex].load();

      this.showNativeEmbedIndex++;
      this.showNativeEmbedIndex = this.showNativeEmbedIndex % oppoNativeId.length;
      return;
    }

    var id = oppoNativeId[this.showNativeEmbedIndex];
    var nativeAd = qg.createNativeAd({
      posId: id
    });
    this._nativeEmbedAd[this.showNativeEmbedIndex] = nativeAd;
    this.showNativeEmbedIndex++;
    this.showNativeEmbedIndex = this.showNativeEmbedIndex % oppoNativeId.length;
    nativeAd.load();
    nativeAd.onLoad(function (res) {
      if (res && res.adList && res.adList.length > 0) {
        lieyou_showLog("oppolog-----native adlist null");
      } else {
        self.showNativeEmbedFailNum++;

        if (self.showNativeEmbedFailNum < oppoNativeId.length) {
          self.loadNativeAd();
        } else {}

        return;
      }

      self.showNativeEmbedFailNum = 0;
      var numL = parseInt(Math.random() * res.adList.length);
      var id = res.adList[numL].adId;
      var title = res.adList[numL].title; //广告标题

      var desc = res.adList[numL].desc; //广告描述
      // var clickBtnTxt = res.adList[numL].clickBtnTxt;//点击按钮文本描述

      var iconUrlList = res.adList[numL].iconUrlList; //广告图icon

      var imgUrlList = res.adList[numL].imgUrlList; //广告图
      // var logoUrl = res.adList[numL].logoUrl;//广告标签图

      self.nativeAdEmbedData = {
        closeSize: _this5.spot_close_but_size,
        closeRange: _this5.spot_close_but_range,
        closeAlpha: _this5.spot_close_but_alpha,
        title: title,
        desc: desc,
        iconUrlList: iconUrlList,
        imgUrlList: imgUrlList,
        reportAdShowCallBack: function reportAdShowCallBack() {
          nativeAd.reportAdShow({
            adId: id
          });
        },
        reportAdClickCallBack: function reportAdClickCallBack() {
          nativeAd.reportAdClick({
            adId: id
          });
        }
      };
    });
    nativeAd.onError(function (err) {
      lieyou_showLog("oppolog-----native error:" + JSON.stringify(err));
      self.showNativeEmbedFailNum++;

      if (self.showNativeEmbedFailNum < oppoNativeId.length) {
        self.loadNativeAd();
      } else {}
    });
  },
  showNativeAd_small: function showNativeAd_small(obj) {
    var nowTime = parseInt(lieyou_getTime() / 1000);

    if (nowTime - this._beginGameTime < this._showNativeStartTime) {
      lieyou_showLog("显示native广告时间未到" + this._showNativeStartTime);
      return false;
    }

    if (nowTime - this._preShowNativeTime < this._showNativeIntervalTime) {
      lieyou_showLog("显示native广告间隔时间未到" + this._showNativeIntervalTime);
      return false;
    }

    this.loadNativeAd();

    if (this.nativeAdEmbedData && obj.node && obj.node.isValid && this.canShowNativeAd) {
      if (cc.find('showNativeAd_small', obj.node)) {
        return true;
      }

      this._preShowNativeTime = nowTime;
      this.nativeAdEmbedData.insetTop = obj.insetTop ? obj.insetTop : 0;
      this.nativeAdEmbedData.insetBottom = obj.insetBottom ? obj.insetBottom : 0;
      this.nativeAdEmbedData.insetLeft = obj.insetLeft ? obj.insetLeft : 0;
      this.nativeAdEmbedData.insetRight = obj.insetRight ? obj.insetRight : 0;
      this.nativeAdEmbedData.bgPath = obj.bgPath;
      this.nativeAdEmbedData.texture = obj.texture;
      this.nativeAdEmbedData.adPath = "q_ad/nativeEmbedAdBottom.png";
      this.nativeAdEmbedData.bgOpacity = 255;
      this.nativeAdEmbedData.bgColor = cc.color(255, 255, 255);
      this.nativeAdEmbedData.titleLabelColor = obj.titleColor ? obj.titleColor : cc.color(46, 46, 46);
      this.nativeAdEmbedData.descLabelColor = obj.descColor ? obj.descColor : cc.color(46, 46, 46);
      this.nativeAdEmbedData.scale = obj.scale;
      var node = getNativeAd_small(this.nativeAdEmbedData);
      node.name = "showNativeAd_small";
      this.showNativeHideBanner(node);
      obj.node.addChild(node);
      return true;
    }

    return false;
  },
  showNativeAd_big: function showNativeAd_big(obj) {
    var nowTime = parseInt(lieyou_getTime() / 1000);

    if (nowTime - this._beginGameTime < this._showNativeStartTime) {
      lieyou_showLog("显示native广告时间未到" + this._showNativeStartTime);
      return false;
    }

    if (nowTime - this._preShowNativeTime < this._showNativeIntervalTime) {
      lieyou_showLog("显示native广告间隔时间未到" + this._showNativeIntervalTime);
      return false;
    }

    this.loadNativeAd();

    if (this.nativeAdEmbedData && obj.node && obj.node.isValid && this.canShowNativeAd) {
      if (cc.find('showNativeAd_big', obj.node)) {
        return true;
      }

      this._preShowNativeTime = nowTime;
      this.nativeAdEmbedData.insetTop = obj.insetTop ? obj.insetTop : 0;
      this.nativeAdEmbedData.insetBottom = obj.insetBottom ? obj.insetBottom : 0;
      this.nativeAdEmbedData.insetLeft = obj.insetLeft ? obj.insetLeft : 0;
      this.nativeAdEmbedData.insetRight = obj.insetRight ? obj.insetRight : 0;
      this.nativeAdEmbedData.bgPath = obj.bgPath;
      this.nativeAdEmbedData.adPath = "q_ad/nativeEmbedAdBottom.png";
      this.nativeAdEmbedData.bgOpacity = 255;
      this.nativeAdEmbedData.texture = obj.texture; //******** */

      this.nativeAdEmbedData.bgColor = cc.color(255, 255, 255);
      this.nativeAdEmbedData.titleLabelColor = obj.titleColor ? obj.titleColor : cc.color(46, 46, 46);
      this.nativeAdEmbedData.descLabelColor = obj.descColor ? obj.descColor : cc.color(46, 46, 46);
      this.nativeAdEmbedData.scale = obj.scale;
      var node = getNativeAd_big(this.nativeAdEmbedData);
      node.name = "showNativeAd_big";
      this.showNativeHideBanner(node);
      obj.node.addChild(node);
      return true;
    }

    return false;
  },
  showNativeAd_load: function showNativeAd_load(obj) {
    if (obj.callBack) {
      obj.callBack();
    }

    return;
    this.loadNativeAd();

    if (this.nativeAdEmbedData) {
      if (obj.theme == "black") {
        this.nativeAdEmbedData.bgOpacity = 150;
        this.nativeAdEmbedData.bgColor = cc.color(0, 0, 0);
        this.nativeAdEmbedData.labelColor = cc.color(255, 255, 255);
        this.nativeAdEmbedData.loadBgColor = cc.color(255, 255, 255);
        this.nativeAdEmbedData.loadWordColor = cc.color(0, 0, 0);
        this.nativeAdEmbedData.scale = 720 / 600;
      } else {
        // white
        this.nativeAdEmbedData.bgOpacity = 255;
        this.nativeAdEmbedData.bgColor = cc.color(255, 255, 255);
        this.nativeAdEmbedData.labelColor = cc.color(46, 46, 46);
        this.nativeAdEmbedData.loadBgColor = cc.color(0, 0, 0);
        this.nativeAdEmbedData.loadWordColor = cc.color(255, 255, 255);
        this.nativeAdEmbedData.scale = 720 / 600;
      }

      this.nativeAdEmbedData.loadTime = this._nativeLoadDialogTime;
      this.nativeAdEmbedData.callBack = obj.callBack;
      var node = getNativeAd_load(this.nativeAdEmbedData);
      cc.director.getScene().addChild(node);
      node.x = cc.winSize.width / 2;
      node.y = cc.winSize.height / 2;
      this.showNativeHideBanner(node);
    } else {
      if (obj.callBack) {
        obj.callBack();
      }
    }
  },
  showNativeHideBanner: function showNativeHideBanner(node) {
    var _this6 = this;

    var showM = false;

    if (this.moreGameBanner && this.moreGameBanner.isValid) {
      showM = true;
    }

    var showB = this._canShowBanner;
    var baseNodejs = node.addComponent('lieyou_baseNode');

    baseNodejs.enableCallBack = function () {
      lieyou_SdkManager.hideBanner();
    };

    baseNodejs.destroyCallBack = function () {
      if (showB) {
        _this6.showBanner();
      } else if (showM) {
        lieyou_SdkManager.showMoreGameByBanner();
      }
    };
  }
});
module.exports = OppoManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXHNjcmlwdHNcXE9wcG9NYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIm9wcG9fbmF0aXZlQXJlYSIsIm9wcG9fd2FpdFQiLCJCYXNlTWFuYWdlciIsInJlcXVpcmUiLCJPcHBvTWFuYWdlciIsImNjIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiYmFubmVyQWQiLCJnZXRIYXZlVmlkZW8iLCJvcHBvVmlkZW9JZCIsImxlbmd0aCIsImdldFZlcnNpb24iLCJvcHBvR2FtZVZlcnNpb24iLCJnZXRTeXNQbGF0Zm9ybV9zdHJpbmciLCJnZXRTeXNQbGF0Zm9ybSIsIm9uU2hvdyIsImZ1biIsInFnIiwib25IaWRlIiwic2V0T25saW5lRGF0YSIsImRhdGEiLCJvcHBvIiwic2hvd05hdGl2ZUludGVydmFsVGltZSIsInVuZGVmaW5lZCIsIl9zaG93TmF0aXZlSW50ZXJ2YWxUaW1lIiwiTnVtYmVyIiwic2hvd0Jhbm5lclN0YXJ0VGltZSIsIl9zaG93QmFubmVyU3RhcnRUaW1lIiwic2hvd05hdGl2ZVN0YXJ0VGltZSIsIl9zaG93TmF0aXZlU3RhcnRUaW1lIiwiY2FuU2hvd05hdGl2ZUFkIiwic3RhclNob3dTcG90VGltZSIsIl9zaG93U3BvdFN0YXJ0VGltZSIsImluc3RhbGxTaG9ydGN1dEludGVydmFsVGltZSIsIl9pbnN0YWxsU2hvcnRjdXRUaW1lIiwibmF0aXZlQWRMb2FkU2VydmVyUmVzIiwiX1NES05hdGl2ZUFkTG9hZFNlcnZlclJlcyIsInNlcnZlclZlcnNpb24iLCJzZXJ2ZXJWZXJzb2luIiwiYmFzZV9Jc1NoZW5IZSIsImNsb3NlU2hvcnRjdXQiLCJjYW5TaG93U2hvcnRjdXQiLCJhZERhdGEiLCJ0aGVtZSIsImNyb3NzU3dpdGNoIiwiYml6RGF0YSIsImFkX2RhdGFzIiwicGxhdGZvcm1WZXJzaW9uQ29kZSIsInNldEFkRGF0YSIsImJhbm5lcl9jbG9zZV9hdXRvc2hvdyIsIl9iYW5uZXJfY2xvc2VfYXV0b3Nob3ciLCJzcG90X2Jhbm5lcl9vbmx5IiwiX3Nwb3RfYmFubmVyX29ubHkiLCJzcG90X0ludGVydmFsIiwiX3Nob3dTeXNTcG90VGltZSIsInN0YXJ0TmF0aXZlU3BvdCIsImlzX3BsYXlfbmF0aXZlIiwiY2FuU2hvd05hdGl2ZVNwb3QiLCJ3YWl0VCIsInNob3dOYXRpdmVTcG90VGltZSIsImJhbm5lcl9jbG9zZV9idXRfc2l6ZSIsImJhbm5lcl9jbG9zZV9idXRfcmFuZ2UiLCJzcG90X2Nsb3NlX2J1dF9hbHBoYSIsInNwb3RfY2xvc2VfYnV0X3NpemUiLCJiYW5uZXJfc2hvd19oZWlnaHQiLCJzcG90X2NsaWNrX2NvdW50Iiwic3BvdF9zaG93X2ludGVydmFsIiwic3BvdF9jbG9zZV9idXRfcmFuZ2UiLCJiYW5uZXJfY2xvc2VfYnV0X2FscGhhIiwiYmFubmVyX2Nsb3NlX2J1dF9zaG93Iiwic3BvdF9jbGlja19jbG9zZSIsImJhbm5lcl9jbGlja19yZWZyZXNoIiwic3BvdF9maXJzdF9hZCIsImJhbm5lcl9maXJzdF9hZCIsImlzX2xvY2FsX3Bvc19pZCIsImNhblNob3dOYXRpdmVCYW5uZXIiLCJuYXRpdmVEZWxheVNob3dUaW1lIiwibmF0aXZlRGVsYXlEZXN0cm95VGltZSIsInJlZnJlc2hCYW5uZXJUaW1lIiwic2V0U3dpdGNoRGF0YSIsImlkX2NvbmZpZyIsIm5hdGl2ZWFsbCIsImFsbGlkIiwic2h1ZmZsZSIsIm9wcG9OYXRpdmVJZCIsIm9wcG9OYXRpdmVCYW5uZXJJZCIsIm9wcG9OYXRpdmVQbGF5SWQiLCJpZE51bSIsImkiLCJwYXJzZUludCIsInB1c2giLCJsaWV5b3Vfc2hvd0xvZyIsIm5hdGl2ZUJhbm5lcmlkIiwibmF0aXZlaWQiLCJuYXRpdmVwbGF5IiwiYXBwaWQiLCJvcHBvSWRfU0RLIiwiYmlkIiwib3Bwb0Jhbm5lcklkIiwic3BvaWQiLCJvcHBvU3BvdEFESWQiLCJhd2FyZGlkIiwiY2xlYXJOYXRpdmVBZCIsImluaXRPbmxpbmVEYXRhIiwib3Bwb0dldE9ubGluZURhdGFJZCIsImxpZXlvdV9TZGtNYW5hZ2VyIiwic2hvd1RvYXN0Iiwic2VsZiIsInZlcnNpb24iLCJVc2VyZGVmYXVsdCIsImdldEludEZvcktleSIsInRpbWUiLCJzcCIsIm5vd1RpbWUiLCJnZXRUaW1lIiwicmVzcG9uc2UiLCJnZXRTdHJpbmdGb3JLZXkiLCJKU09OIiwicGFyc2UiLCJkYXRhVmVyc2lvbiIsInVybCIsImdldExvZ2luVXJsIiwic2V0RGF0YUZvckh0dHAiLCJqc29uRCIsInNlcnZlcl9kYXRhX3ZlcnNpb24iLCJzZXREYXRhRm9yS2V5IiwiaXNNb3JlSW5mbyIsInN0cmluZ2lmeSIsImVycm9yIiwibG9naW4iLCJzdWNjZXNzIiwicmVzIiwib3BlbmlkIiwidWlkIiwiZ2V0U3lzdGVtSW5mbyIsImluZm8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsInBsYXRmb3JtVmVyc2lvbiIsImFuZHJvaWRWZXJzaW9uIiwic3lzdGVtIiwibW9kZWwiLCJnZXROZXR3b3JrVHlwZSIsIm5ldHdvcmtUeXBlIiwiaW5pdCIsIm9iaiIsInJlcG9ydE1vbml0b3IiLCJwcm90b3R5cGUiLCJjYWxsIiwiX3ByZVNob3dOYXRpdmVUaW1lIiwiaXNTeXNJbnN0YWxsU2hvcnRDdXQiLCJfaW5zdGFsbFNob3J0Y3V0U3RhcnRUaW1lIiwiaW5pdEFkU2VydmljZSIsImFwcElkIiwiZmFpbCIsImNvbXB2YXJlIiwiX25hdGl2ZUVtYmVkQWQiLCJzaG93TmF0aXZlRW1iZWRJbmRleCIsInNob3dOYXRpdmVFbWJlZEZhaWxOdW0iLCJfaGF2ZUJhbm5lckFkIiwiX2Jhbm5lckFkIiwiX25hdGl2ZVNwb3JBZCIsIl9uYXRpdmVCYW5uZXJBZCIsIl9uYXRpdmVQbGF5QWQiLCJfaW5zZXJ0QWQiLCJfdmlkZW9BZCIsInNob3dBZEJhbm5lckluZGV4Iiwic2hvd0FkU3BvdEluZGV4Iiwic2hvd0FkQXdhcmRJbmRleCIsInNob3dBZE5hdGl2ZUluZGV4Iiwic2hvd0FkTmF0aXZlUGxheUluZGV4Iiwic2hvd0FkTmF0aXZlQmFubmVySW5kZXgiLCJzaG93QWRCYW5uZXJDb250aW51ZUZhaWxOdW0iLCJzaG93QWRTcG90Q29udGludWVGYWlsTnVtIiwic2hvd0FkQXdhcmRDb250aW51ZUZhaWxOdW0iLCJzaG93QWROYXRpdmVDb250aW51ZUZhaWxOdW0iLCJzaG93QWROYXRpdmVQbGF5Q29udGludWVGYWlsTnVtIiwic2hvd0FkTmF0aXZlQmFubmVyQ29udGludWVGYWlsTnVtIiwiX2FkZE5hdGl2ZUFkTm9kZSIsIl9hZGROYXRpdmVBZE51bSIsIl9jYW5TaG93U3lzU3BvdCIsIl9jbG9zZUJhbm5lck51bSIsInNldFRpbWVvdXQiLCJsb2FkTmF0aXZlQWQiLCJ2aWJyYXRlU2hvcnQiLCJ2aWJyYXRlTG9uZyIsImRlc3Ryb3kiLCJjdXN0Q2xpY2tOYXRpdmUiLCJub2RlIiwiaXNWYWxpZCIsIkNhbGxCYWNrIiwiYWRkTmF0aXZlQWQiLCJmbGFnIiwibmF0aXZlYWRUYWciLCJuYXRpdmVBZFRhZyIsIm5vZGVBY3Rpb24iLCJyZXBlYXRGb3JldmVyIiwic2VxdWVuY2UiLCJkZWxheVRpbWUiLCJjYWxsRnVuYyIsInNldFRhZyIsInJ1bkFjdGlvbiIsImNhblNob3dBZCIsImlkIiwibG9hZCIsIm5hdGl2ZUFkIiwiY3JlYXRlTmF0aXZlQWQiLCJwb3NJZCIsIm9uTG9hZCIsImFkTGlzdCIsIm51bUwiLCJNYXRoIiwicmFuZG9tIiwiYWRJZCIsInRpdGxlIiwiZGVzYyIsImNsaWNrQnRuVHh0IiwiaWNvblVybExpc3QiLCJpbWdVcmxMaXN0IiwibG9nb1VybCIsInJlcG9ydEFkU2hvdyIsInRvdWNoTm9kZSIsIm5OIiwiYWRub2RlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3RvcEFjdGlvbkJ5VGFnIiwicmVwb3J0QWRDbGljayIsInNpemVNb2RlIiwiU2l6ZU1vZGUiLCJDVVNUT00iLCJoYXZlVG91Y2hPbiIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiZXZlbnQiLCJ0YXJnZXQiLCJhZFRpdGxlTm9kZSIsInNjYWxlIiwiYWRkQ2hpbGQiLCJ4Iiwid2lkdGgiLCJ5IiwiaGVpZ2h0IiwiYW5jaG9yWCIsImFuY2hvclkiLCJhZGRDb21wb25lbnQiLCJsb2FkZXIiLCJlcnIiLCJ0ZXh0dXJlIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsIm9uRXJyb3IiLCJzaG93TmF0aXZlQmFubmVyIiwiaXNFbmQiLCJfTmF0aXZlQmFubmVyRmxhZyIsIl9OYXRpdmVCYW5uZXJJc0VuZCIsIm9sZFRpbWUiLCJsaWV5b3UiLCJLZXlfT25jZVBsYXllclRpbWUiLCJzaG93U3BvdCIsImluc3RhbGxTaG9ydGN1dCIsInNob2FEaWFsb2ciLCJzaG93U3BvdFN1Y2Nlc3MiLCJmTm9kZSIsImRpcmVjdG9yIiwiZ2V0UnVubmluZ1NjZW5lIiwibGlleW91X25hdGl2ZVNwb3QiLCJhY3RpdmUiLCJnYW1lIiwiYWRkUGVyc2lzdFJvb3ROb2RlIiwid2luU2l6ZSIsInNob3dCIiwiX2NhblNob3dCYW5uZXIiLCJoaWRlQmFubmVyIiwic2V0RGF0YSIsInRvdWNoQ2FsbEJhY2siLCJiaW5kIiwiY2xvc2VDYWxsQmFjayIsInNob3dCYW5uZXIiLCJjbG9zZUFscGhhIiwiY2xvc2VTaXplIiwiY2xvc2VSYW5nZSIsImNsb3NlU2hvdyIsImhpZGVOYXRpdmVCYW5uZXIiLCJjbGVhckludGVydmFsIiwiYmFubmVyVGltZU91dCIsIl9CYW5uZXJOYXRpdmVBRE5vZGUiLCJfY2xlYXJJbnRlcnZhbCIsIl9iYW5uZXJBZFN0eWxlIiwiX1NjZW5lU2NhbGUiLCJtb3JlR2FtZUJhbm5lciIsInJlZnJlc2hUaW1lIiwic2hvd0Jhbm5lck5hdGl2ZUFEIiwic2V0SW50ZXJ2YWwiLCJzaG93QmFubmVyMiIsImxpZXlvdV9nZXRUaW1lIiwiX2JlZ2luR2FtZVRpbWUiLCJfYmFubmVyTmF0aXZlQWRPYmoiLCJsaWV5b3VfbmF0aXZlQmFubmVyIiwiYmFubmVySGVpZ2h0IiwiX3Nob3dCYW5uZXJPYmoiLCJzaG93IiwiY3JlYXRlQmFubmVyQWQiLCJvblJlc2l6ZSIsInN0eWxlIiwidG9wIiwic2hvd0Jhbm5lckN1c3RvbSIsInNob3dCYW5uZXJCeVRvcCIsInNob3dCYW5uZXJCeUJvdHRvbSIsInNob3dSZXdhcmRlZFZpZGVvQWQiLCJpZDIiLCJwbGF5VmRDYWxsQmFjayIsInBsYXlWZEZsYWciLCJ2aWRlb0FkIiwiY3JlYXRlUmV3YXJkZWRWaWRlb0FkIiwib25DbG9zZSIsImlzRW5kZWQiLCJfc2hvd1Nwb3RGbGFnIiwiX3Nob3dTcG90SXNFbmQiLCJpbnNlcnRBZCIsImNyZWF0ZUluc2VydEFkIiwib2ZmQ2xvc2UiLCJfc2hvd1Nwb3RDb3VudCIsIl9zaG93U3BvdFRpbWUiLCJhZGRTaG93U3BvdE51bSIsIl9zaG93U3BvdE1heENvdW50UmVmcmVzaFRpbWUiLCJfc2hvd1Nwb3RNYXhDb3VudCIsIm51bSIsInNob3dTcG90QnlQYXVzZSIsInNob3dTcG90QnlCZWdpbiIsInNob3dTcG90QnlGaW5pc2giLCJuZXdKdW1wQXBwIiwibmF2aWdhdGVUb01pbmlHYW1lIiwicGtnTmFtZSIsImNhblNob3ciLCJfdXBJbnN0YWxsU2hvcnRjdXRUaW1lIiwiaGFzU2hvcnRjdXRJbnN0YWxsZWQiLCJjYWxsQmFja19hZGROb2RlIiwicm91bmQiLCJzcGxpdCIsInNob3dJbnN0YWxsU2hvcnRjdXREaWFsb2ciLCJnZXRCb29sRm9yS2V5Iiwic2V0Qm9vbEZvcktleSIsInNldE9wZXJUcmFjayIsInR5cGUiLCJzdGF0ZSIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJjb25maXJtIiwiY2FuY2VsIiwiaGlkZVRvYXN0Iiwic2hvd0xvYWRpbmciLCJoaWRlTG9hZGluZyIsIm5hdGl2ZUFkRW1iZWREYXRhIiwicmVwb3J0QWRTaG93Q2FsbEJhY2siLCJyZXBvcnRBZENsaWNrQ2FsbEJhY2siLCJzaG93TmF0aXZlQWRfc21hbGwiLCJmaW5kIiwiaW5zZXRUb3AiLCJpbnNldEJvdHRvbSIsImluc2V0TGVmdCIsImluc2V0UmlnaHQiLCJiZ1BhdGgiLCJhZFBhdGgiLCJiZ09wYWNpdHkiLCJiZ0NvbG9yIiwiY29sb3IiLCJ0aXRsZUxhYmVsQ29sb3IiLCJ0aXRsZUNvbG9yIiwiZGVzY0xhYmVsQ29sb3IiLCJkZXNjQ29sb3IiLCJnZXROYXRpdmVBZF9zbWFsbCIsIm5hbWUiLCJzaG93TmF0aXZlSGlkZUJhbm5lciIsInNob3dOYXRpdmVBZF9iaWciLCJnZXROYXRpdmVBZF9iaWciLCJzaG93TmF0aXZlQWRfbG9hZCIsImNhbGxCYWNrIiwibGFiZWxDb2xvciIsImxvYWRCZ0NvbG9yIiwibG9hZFdvcmRDb2xvciIsImxvYWRUaW1lIiwiX25hdGl2ZUxvYWREaWFsb2dUaW1lIiwiZ2V0TmF0aXZlQWRfbG9hZCIsImdldFNjZW5lIiwic2hvd00iLCJiYXNlTm9kZWpzIiwiZW5hYmxlQ2FsbEJhY2siLCJkZXN0cm95Q2FsbEJhY2siLCJzaG93TW9yZUdhbWVCeUJhbm5lciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBQSxNQUFNLENBQUNDLGVBQVAsR0FBeUIsQ0FBekI7QUFDQUQsTUFBTSxDQUFDRSxVQUFQLEdBQW9CLEdBQXBCOztBQUNBLElBQU1DLFdBQVcsR0FBR0MsT0FBTyxDQUFDLGFBQUQsQ0FBM0I7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUMxQixhQUFTSCxPQUFPLENBQUMsYUFBRCxDQURVO0FBRTFCSSxFQUFBQSxVQUFVLEVBQUM7QUFDSkMsSUFBQUEsUUFBUSxFQUFFO0FBRE4sR0FGZTtBQUt2QkMsRUFBQUEsWUFMdUIsMEJBS1Q7QUFDVixRQUFHQyxXQUFXLENBQUNDLE1BQVosSUFBc0IsQ0FBekIsRUFBNEI7QUFDeEIsYUFBTyxLQUFQO0FBQ0g7O0FBQ0QsV0FBTyxJQUFQO0FBQ0gsR0FWc0I7QUFXdkJDLEVBQUFBLFVBWHVCLHdCQVdYO0FBQ1IsV0FBT0MsZUFBUDtBQUNILEdBYnNCO0FBY3ZCQyxFQUFBQSxx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VCxDQUFsQjtBQXEvQ0FDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnJZLFdBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvL+W5v+WRiumUmeivr+S/oeaBryAxMDE2IOW5v+WRiuS9jWlk5peg5pWI5oiW5LiN5a2Y5ZyoIOaIluWuoeaguOacqumAmui/h1xyXG4vL+W5v+WRiumUmeivr+S/oeaBryAxMDE1IOW6lOeUqGlk77yIYXBwaWTvvInlkozljIXlkI3kuI3ljLnphY1cclxuLy/lub/lkYrplJnor6/kv6Hmga8gMTAxNCDlupTnlKhpZO+8iGFwcGlk77yJ5peg5pWI5oiW5LiN5a2Y5ZyoXHJcbi8v5bm/5ZGK6ZSZ6K+v5L+h5oGvIDEwMDMg5peg5bm/5ZGK6L+U5ZueXHJcbi8v5pyA5L2O54mI5pysMTA1MFxyXG53aW5kb3cub3Bwb19uYXRpdmVBcmVhID0gMTtcclxud2luZG93Lm9wcG9fd2FpdFQgPSAzMDA7XHJcbmNvbnN0IEJhc2VNYW5hZ2VyID0gcmVxdWlyZSgnQmFzZU1hbmFnZXInKTtcclxudmFyIE9wcG9NYW5hZ2VyID0gY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IHJlcXVpcmUoJ0Jhc2VNYW5hZ2VyJyksXHJcblx0cHJvcGVydGllczp7XHJcbiAgICAgICAgYmFubmVyQWQ6IG51bGwsXHJcbiAgICB9LFxyXG4gICAgZ2V0SGF2ZVZpZGVvKCl7XHJcbiAgICAgICAgaWYob3Bwb1ZpZGVvSWQubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBnZXRWZXJzaW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIG9wcG9HYW1lVmVyc2lvbjtcclxuICAgIH0sXHJcbiAgICBnZXRTeXNQbGF0Zm9ybV9zdHJpbmcoKXtcclxuXHRcdHJldHVybiAnb3Bwbyc7XHJcbiAgICB9LFxyXG4gICAgZ2V0U3lzUGxhdGZvcm0oKXtcclxuXHRcdHJldHVybiA0O1xyXG5cdH0sXHJcbiAgICBvblNob3c6ZnVuY3Rpb24oZnVuKXtcclxuICAgICAgICBxZy5vblNob3coZnVuKTtcclxuICAgIH0sXHJcbiAgICBvbkhpZGU6ZnVuY3Rpb24oZnVuKXtcclxuICAgICAgICBxZy5vbkhpZGUoZnVuKTtcclxuICAgIH0sXHJcbiAgICBzZXRPbmxpbmVEYXRhKGRhdGEpe1xyXG4gICAgICAgIGlmKGRhdGEub3Bwbyl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihkYXRhLm9wcG8uc2hvd05hdGl2ZUludGVydmFsVGltZSE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Nob3dOYXRpdmVJbnRlcnZhbFRpbWUgPSBOdW1iZXIoZGF0YS5vcHBvLnNob3dOYXRpdmVJbnRlcnZhbFRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGEub3Bwby5zaG93QmFubmVyU3RhcnRUaW1lIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd0Jhbm5lclN0YXJ0VGltZSA9IE51bWJlcihkYXRhLm9wcG8uc2hvd0Jhbm5lclN0YXJ0VGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS5vcHBvLnNob3dOYXRpdmVTdGFydFRpbWUhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93TmF0aXZlU3RhcnRUaW1lID0gTnVtYmVyKGRhdGEub3Bwby5zaG93TmF0aXZlU3RhcnRUaW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihkYXRhLm9wcG8uY2FuU2hvd05hdGl2ZUFkIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5TaG93TmF0aXZlQWQgPSBkYXRhLm9wcG8uY2FuU2hvd05hdGl2ZUFkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGEub3Bwby5zdGFyU2hvd1Nwb3RUaW1lIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hvd1Nwb3RTdGFydFRpbWUgPSBOdW1iZXIoZGF0YS5vcHBvLnN0YXJTaG93U3BvdFRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGEub3Bwby5pbnN0YWxsU2hvcnRjdXRJbnRlcnZhbFRpbWUhPXVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnN0YWxsU2hvcnRjdXRUaW1lID0gTnVtYmVyKGRhdGEub3Bwby5pbnN0YWxsU2hvcnRjdXRJbnRlcnZhbFRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGEub3Bwby5uYXRpdmVBZExvYWRTZXJ2ZXJSZXMpe1xyXG4gICAgICAgICAgICAgICAgX1NES05hdGl2ZUFkTG9hZFNlcnZlclJlcyA9IGRhdGEub3Bwby5uYXRpdmVBZExvYWRTZXJ2ZXJSZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS5vcHBvLnNlcnZlclZlcnNpb24gIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHZhciBzZXJ2ZXJWZXJzb2luID0gTnVtYmVyKGRhdGEub3Bwby5zZXJ2ZXJWZXJzaW9uKTtcclxuICAgICAgICAgICAgICAgIGlmKHNlcnZlclZlcnNvaW4gPj0gb3Bwb0dhbWVWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlX0lzU2hlbkhlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2VfSXNTaGVuSGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCFkYXRhLm9wcG8uY2xvc2VTaG9ydGN1dCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhblNob3dTaG9ydGN1dCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGFkRGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBpZihkYXRhLm9wcG8udGhlbWUpe1xyXG4gICAgICAgICAgICAgICAgYWREYXRhLnRoZW1lID0gZGF0YS5vcHBvLnRoZW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGEub3Bwby5jcm9zc1N3aXRjaCl7XHJcbiAgICAgICAgICAgICAgICBhZERhdGEuY3Jvc3NTd2l0Y2ggPSBkYXRhLm9wcG8uY3Jvc3NTd2l0Y2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS5vcHBvLmJpekRhdGEpe1xyXG4gICAgICAgICAgICAgICAgYWREYXRhLmJpekRhdGEgPSBkYXRhLm9wcG8uYml6RGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihkYXRhLm9wcG8uYWRfZGF0YXMpe1xyXG4gICAgICAgICAgICAgICAgYWREYXRhLmFkX2RhdGFzID0gZGF0YS5vcHBvLmFkX2RhdGFzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGEub3Bwby5zd2l0Y2gpe1xyXG4gICAgICAgICAgICAgICAgYWREYXRhLnN3aXRjaCA9IGRhdGEub3Bwby5zd2l0Y2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodGhpcy5wbGF0Zm9ybVZlcnNpb25Db2RlPj0xMDQ0KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWREYXRhKGFkRGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS5vcHBvLmJhbm5lcl9jbG9zZV9hdXRvc2hvdyAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmFubmVyX2Nsb3NlX2F1dG9zaG93ID0gZGF0YS5vcHBvLmJhbm5lcl9jbG9zZV9hdXRvc2hvdztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihkYXRhLm9wcG8uc3BvdF9iYW5uZXJfb25seSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3BvdF9iYW5uZXJfb25seSA9IGRhdGEub3Bwby5zcG90X2Jhbm5lcl9vbmx5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGEub3Bwby5zcG90X0ludGVydmFsICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaG93U3lzU3BvdFRpbWUgPSBOdW1iZXIoZGF0YS5vcHBvLnNwb3RfSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGEub3Bwby5zdGFydE5hdGl2ZVNwb3QgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnROYXRpdmVTcG90ID0gTnVtYmVyKGRhdGEub3Bwby5zdGFydE5hdGl2ZVNwb3QpO1xyXG4gICAgICAgICAgICB9XHJcblx0ICAgICAgICBcclxuICAgICAgICAgICAgaWYoZGF0YS5vcHBvLmlzX3BsYXlfbmF0aXZlICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzX3BsYXlfbmF0aXZlID0gZGF0YS5vcHBvLmlzX3BsYXlfbmF0aXZlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGEub3Bwby5jYW5TaG93TmF0aXZlU3BvdCAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5TaG93TmF0aXZlU3BvdCA9IGRhdGEub3Bwby5jYW5TaG93TmF0aXZlU3BvdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihkYXRhLm9wcG8ud2FpdFQgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd05hdGl2ZVNwb3RUaW1lID0gTnVtYmVyKGRhdGEub3Bwby53YWl0VCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS5vcHBvLmJhbm5lcl9jbG9zZV9idXRfc2l6ZSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYW5uZXJfY2xvc2VfYnV0X3NpemUgPSBOdW1iZXIoZGF0YS5vcHBvLmJhbm5lcl9jbG9zZV9idXRfc2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS5vcHBvLmJhbm5lcl9jbG9zZV9idXRfcmFuZ2UgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFubmVyX2Nsb3NlX2J1dF9yYW5nZSA9IE51bWJlcihkYXRhLm9wcG8uYmFubmVyX2Nsb3NlX2J1dF9yYW5nZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS5vcHBvLnNwb3RfY2xvc2VfYnV0X2FscGhhICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwb3RfY2xvc2VfYnV0X2FscGhhID0gTnVtYmVyKGRhdGEub3Bwby5zcG90X2Nsb3NlX2J1dF9hbHBoYSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS5vcHBvLnNwb3RfY2xvc2VfYnV0X3NpemUgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BvdF9jbG9zZV9idXRfc2l6ZSA9IE51bWJlcihkYXRhLm9wcG8uc3BvdF9jbG9zZV9idXRfc2l6ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS5vcHBvLmJhbm5lcl9zaG93X2hlaWdodCAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYW5uZXJfc2hvd19oZWlnaHQgPSBOdW1iZXIoZGF0YS5vcHBvLmJhbm5lcl9zaG93X2hlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS5vcHBvLnNwb3RfY2xpY2tfY291bnQgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BvdF9jbGlja19jb3VudCA9IE51bWJlcihkYXRhLm9wcG8uc3BvdF9jbGlja19jb3VudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS5vcHBvLnNwb3Rfc2hvd19pbnRlcnZhbCAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcG90X3Nob3dfaW50ZXJ2YWwgPSBOdW1iZXIoZGF0YS5vcHBvLnNwb3Rfc2hvd19pbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS5vcHBvLnNwb3RfY2xvc2VfYnV0X3JhbmdlICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwb3RfY2xvc2VfYnV0X3JhbmdlID0gTnVtYmVyKGRhdGEub3Bwby5zcG90X2Nsb3NlX2J1dF9yYW5nZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS5vcHBvLmJhbm5lcl9jbG9zZV9idXRfYWxwaGEgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFubmVyX2Nsb3NlX2J1dF9hbHBoYSA9IE51bWJlcihkYXRhLm9wcG8uYmFubmVyX2Nsb3NlX2J1dF9hbHBoYSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS5vcHBvLmJhbm5lcl9jbG9zZV9idXRfc2hvdyAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYW5uZXJfY2xvc2VfYnV0X3Nob3cgPSBkYXRhLm9wcG8uYmFubmVyX2Nsb3NlX2J1dF9zaG93O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGEub3Bwby5zcG90X2NsaWNrX2Nsb3NlICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwb3RfY2xpY2tfY2xvc2UgPSBkYXRhLm9wcG8uc3BvdF9jbGlja19jbG9zZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihkYXRhLm9wcG8uYmFubmVyX2NsaWNrX3JlZnJlc2ggIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFubmVyX2NsaWNrX3JlZnJlc2ggPSBkYXRhLm9wcG8uYmFubmVyX2NsaWNrX3JlZnJlc2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS5vcHBvLnNwb3RfZmlyc3RfYWQgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BvdF9maXJzdF9hZCA9IGRhdGEub3Bwby5zcG90X2ZpcnN0X2FkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGEub3Bwby5iYW5uZXJfZmlyc3RfYWQgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmFubmVyX2ZpcnN0X2FkID0gZGF0YS5vcHBvLmJhbm5lcl9maXJzdF9hZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihkYXRhLm9wcG8uaXNfbG9jYWxfcG9zX2lkICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzX2xvY2FsX3Bvc19pZCA9IGRhdGEub3Bwby5pc19sb2NhbF9wb3NfaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS5vcHBvLmNhblNob3dOYXRpdmVCYW5uZXIgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuU2hvd05hdGl2ZUJhbm5lciA9IGRhdGEub3Bwby5jYW5TaG93TmF0aXZlQmFubmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGEub3Bwby5uYXRpdmVEZWxheVNob3dUaW1lICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZURlbGF5U2hvd1RpbWUgPSBOdW1iZXIoZGF0YS5vcHBvLm5hdGl2ZURlbGF5U2hvd1RpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGEub3Bwby5uYXRpdmVEZWxheURlc3Ryb3lUaW1lICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZURlbGF5RGVzdHJveVRpbWUgPSBOdW1iZXIoZGF0YS5vcHBvLm5hdGl2ZURlbGF5RGVzdHJveVRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGEub3Bwby5yZWZyZXNoQmFubmVyVGltZSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQmFubmVyVGltZSA9IE51bWJlcihkYXRhLm9wcG8ucmVmcmVzaEJhbm5lclRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3dpdGNoRGF0YShkYXRhLm9wcG8pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaWRfY29uZmlnID0gbnVsbDtcclxuICAgICAgICBpZihkYXRhLm9wcG8uaWRfY29uZmlnKXtcclxuICAgICAgICAgICAgaWRfY29uZmlnID0gZGF0YS5vcHBvLmlkX2NvbmZpZztcclxuICAgICAgICB9ZWxzZSBpZihkYXRhLmlkX2NvbmZpZyl7XHJcbiAgICAgICAgICAgIGlkX2NvbmZpZyA9IGRhdGEuaWRfY29uZmlnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihpZF9jb25maWcpe1xyXG4gICAgICAgICAgICBpZighdGhpcy5pc19sb2NhbF9wb3NfaWQpe1xyXG4gICAgICAgICAgICAgICAgaWYoaWRfY29uZmlnLm5hdGl2ZWFsbCAhPSB1bmRlZmluZWQgJiYgaWRfY29uZmlnLm5hdGl2ZWFsbC5sZW5ndGggJiYgaWRfY29uZmlnLm5hdGl2ZWFsbC5sZW5ndGggPj0gNil7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFsbGlkID0gdGhpcy5zaHVmZmxlKGlkX2NvbmZpZy5uYXRpdmVhbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wcG9OYXRpdmVJZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wcG9OYXRpdmVCYW5uZXJJZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wcG9OYXRpdmVQbGF5SWQgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaWROdW0gPSBhbGxpZC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDtpIDwgaWROdW07aSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaSA8IHBhcnNlSW50KGlkTnVtICogMC41KSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHBvTmF0aXZlSWQucHVzaChhbGxpZFtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKGkgPCBwYXJzZUludChpZE51bSAqIDAuOSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3Bwb05hdGl2ZUJhbm5lcklkLnB1c2goYWxsaWRbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wcG9OYXRpdmVQbGF5SWQucHVzaChhbGxpZFtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKFwib3Bwb2xvZzEyMyBvcHBvTmF0aXZlSWQgPSAgXCIrb3Bwb05hdGl2ZUlkKTtcclxuICAgICAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZyhcIm9wcG9sb2cxMjMgb3Bwb05hdGl2ZUJhbm5lcklkID0gIFwiK29wcG9OYXRpdmVCYW5uZXJJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlleW91X3Nob3dMb2coXCJvcHBvbG9nMTIzIG9wcG9OYXRpdmVQbGF5SWQgPSAgXCIrb3Bwb05hdGl2ZVBsYXlJZCk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBpZihpZF9jb25maWcubmF0aXZlQmFubmVyaWQgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3Bwb05hdGl2ZUJhbm5lcklkID0gaWRfY29uZmlnLm5hdGl2ZUJhbm5lcmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihpZF9jb25maWcubmF0aXZlaWQgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3Bwb05hdGl2ZUlkID0gaWRfY29uZmlnLm5hdGl2ZWlkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihpZF9jb25maWcubmF0aXZlcGxheSAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHBvTmF0aXZlUGxheUlkID0gaWRfY29uZmlnLm5hdGl2ZXBsYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoaWRfY29uZmlnLmFwcGlkICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgb3Bwb0lkX1NESyA9IGlkX2NvbmZpZy5hcHBpZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGlkX2NvbmZpZy5iaWQgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBvcHBvQmFubmVySWQgPSBpZF9jb25maWcuYmlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoaWRfY29uZmlnLnNwb2lkICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgb3Bwb1Nwb3RBRElkID0gaWRfY29uZmlnLnNwb2lkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoaWRfY29uZmlnLmF3YXJkaWQgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBvcHBvVmlkZW9JZCA9IGlkX2NvbmZpZy5hd2FyZGlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhck5hdGl2ZUFkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgaW5pdE9ubGluZURhdGEoKXtcclxuICAgICAgICBpZihvcHBvR2V0T25saW5lRGF0YUlkID09ICcnKXtcclxuICAgICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuc2hvd1RvYXN0KCfmsqHmnInloavlhplxZ0lEJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciB2ZXJzaW9uID0gVXNlcmRlZmF1bHQuZ2V0SW50Rm9yS2V5KCdzZGtfb3Bwb19vbmxpbmVfdmVyc2lvbicsMCk7XHJcbiAgICAgICAgdmFyIHRpbWUgPSBVc2VyZGVmYXVsdC5nZXRJbnRGb3JLZXkoJ3Nka19vcHBvX29ubGluZV90aW1lJywwKTtcclxuICAgICAgICB2YXIgc3AgPSBVc2VyZGVmYXVsdC5nZXRJbnRGb3JLZXkoJ3Nka19vcHBvX29ubGluZV9zcCcsMCk7XHJcbiAgICAgICAgdmFyIG5vd1RpbWUgPSBnZXRUaW1lKCkvMTAwMDtcclxuICAgICAgICBpZihub3dUaW1lIC0gdGltZSA8IHNwICYmIG5vd1RpbWUgPiB0aW1lKXtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gVXNlcmRlZmF1bHQuZ2V0U3RyaW5nRm9yS2V5KCdzZGtfb3Bwb19vbmxpbmVfZGF0YScsJycpO1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBzZWxmLnNldE9ubGluZURhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kYXRhVmVyc2lvbiA9IHZlcnNpb247XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMuZ2V0TG9naW5VcmwoKTtcclxuXHRcdHRoaXMuc2V0RGF0YUZvckh0dHAodXJsLGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuXHRcdFx0aWYocmVzcG9uc2UgPT0gXCJcIikge1xyXG5cdFx0XHRcdHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGpzb25EID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICBpZihqc29uRC5zZXJ2ZXJfZGF0YV92ZXJzaW9uKXtcclxuICAgICAgICAgICAgICAgICAgICBVc2VyZGVmYXVsdC5zZXREYXRhRm9yS2V5KCdzZGtfb3Bwb19vbmxpbmVfdmVyc2lvbicsanNvbkQuc2VydmVyX2RhdGFfdmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihqc29uRC5pc01vcmVJbmZvICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5pc01vcmVJbmZvID0ganNvbkQuaXNNb3JlSW5mbztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGpzb25ELnNwKXtcclxuICAgICAgICAgICAgICAgICAgICBVc2VyZGVmYXVsdC5zZXREYXRhRm9yS2V5KCdzZGtfb3Bwb19vbmxpbmVfc3AnLGpzb25ELnNwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFVzZXJkZWZhdWx0LnNldERhdGFGb3JLZXkoJ3Nka19vcHBvX29ubGluZV90aW1lJyxub3dUaW1lKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoanNvbkQuc2VydmVyX2RhdGFfdmVyc2lvbiA9PSB2ZXJzaW9uKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBVc2VyZGVmYXVsdC5nZXRTdHJpbmdGb3JLZXkoJ3Nka19vcHBvX29ubGluZV9kYXRhJywnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldE9ubGluZURhdGEoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlKS5kYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYoIWRhdGEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGYuc2V0T25saW5lRGF0YShkYXRhKTtcclxuICAgICAgICAgICAgICAgIFVzZXJkZWZhdWx0LnNldERhdGFGb3JLZXkoJ3Nka19vcHBvX29ubGluZV9kYXRhJyxKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcblxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ29wcG9sb2ctLS0tLS1lcnJvciAgaW5pdE9ubGluZURhdGEgKyAnICsgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcblx0XHR9KTtcclxuICAgIH0sXHJcbiAgICBsb2dpbigpe1xyXG4gICAgICAgIHFnLmxvZ2luKHtcclxuICAgICAgICAgICAgc3VjY2VzczoocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeShyZXMuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBvcGVuaWQgPSByZXMuZGF0YS51aWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXRTeXN0ZW1JbmZvKCl7XHJcbiAgICAgICAgdmFyIGluZm8gPSBxZy5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG4gICAgICAgIHRoaXMucGxhdGZvcm1WZXJzaW9uQ29kZSA9IGluZm8ucGxhdGZvcm1WZXJzaW9uO1xyXG4gICAgICAgIHRoaXMuYW5kcm9pZFZlcnNpb24gPSBpbmZvLnN5c3RlbTtcclxuICAgICAgICB0aGlzLm1vZGVsID0gaW5mby5tb2RlbDtcclxuICAgICAgICAvLyB0aGlzLnJlZ2lvbiA9IGluZm8ucmVnaW9uO1xyXG4gICAgICAgIHFnLmdldE5ldHdvcmtUeXBlKHtcclxuICAgICAgICAgICAgc3VjY2VzczoocmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXR3b3JrVHlwZSA9IHJlcy5uZXR3b3JrVHlwZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGluaXQ6IGZ1bmN0aW9uKG9iail7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcWcucmVwb3J0TW9uaXRvcignZ2FtZV9zY2VuZScsIDApO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuX3N1cGVyKG9iaik7XHJcbiAgICAgICAgQmFzZU1hbmFnZXIucHJvdG90eXBlLmluaXQuY2FsbCh0aGlzLG9iaik7XHJcbiAgICAgICAgdGhpcy5nZXRTeXN0ZW1JbmZvKCk7XHJcbiAgICAgICAgdGhpcy5sb2dpbigpO1xyXG4gICAgICAgIHZhciBub3dUaW1lID0gcGFyc2VJbnQoZ2V0VGltZSgpLzEwMDApO1xyXG4gICAgICAgIGlmKFVzZXJkZWZhdWx0LmdldEludEZvcktleSgnb3Bwb19pc05ld1BsYXllcicsMSkpe1xyXG4gICAgICAgICAgICBVc2VyZGVmYXVsdC5zZXREYXRhRm9yS2V5KCdvcHBvX2lzTmV3UGxheWVyJywwKTtcclxuICAgICAgICAgICAgVXNlcmRlZmF1bHQuc2V0RGF0YUZvcktleSgnb3Bwb19vbmNlUGxheUdhbWVUaW1lJyxub3dUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9mYWxzZSAzMDBcclxuICAgICAgICB0aGlzLl9wcmVTaG93TmF0aXZlVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5fc2hvd05hdGl2ZUludGVydmFsVGltZSA9IDEwO1xyXG4gICAgICAgIHRoaXMuX3Nob3dCYW5uZXJTdGFydFRpbWUgPSA0MDtcclxuICAgICAgICB0aGlzLl9zaG93TmF0aXZlU3RhcnRUaW1lID0gNDA7XHJcbiAgICAgICAgdGhpcy5jYW5TaG93TmF0aXZlQWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY2FuU2hvd1Nob3J0Y3V0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzU3lzSW5zdGFsbFNob3J0Q3V0ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzX3BsYXlfbmF0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhblNob3dOYXRpdmVTcG90ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNob3dOYXRpdmVTcG90VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5jYW5TaG93TmF0aXZlQmFubmVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5hdGl2ZURlbGF5U2hvd1RpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMubmF0aXZlRGVsYXlEZXN0cm95VGltZSA9IDAuMTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hCYW5uZXJUaW1lID0gMTU7XHJcbiAgICAgICAgdGhpcy5pc19sb2NhbF9wb3NfaWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNwb3RfZmlyc3RfYWQgPSBcIm5hdGl2ZVwiO1xyXG4gICAgICAgIHRoaXMuYmFubmVyX2ZpcnN0X2FkID0gXCJuYXRpdmVcIjtcclxuICAgICAgICB0aGlzLmJhbm5lcl9jbG9zZV9idXRfYWxwaGEgPSAxMjA7XHJcbiAgICAgICAgdGhpcy5iYW5uZXJfY2xvc2VfYnV0X3NpemUgPSAzNTtcclxuICAgICAgICB0aGlzLmJhbm5lcl9jbG9zZV9idXRfcmFuZ2UgPSA0MDtcclxuICAgICAgICB0aGlzLnNwb3RfY2xvc2VfYnV0X2FscGhhID0gMTAwO1xyXG4gICAgICAgIHRoaXMuc3BvdF9jbG9zZV9idXRfc2l6ZSA9IDM1O1xyXG4gICAgICAgIHRoaXMuc3BvdF9jbG9zZV9idXRfcmFuZ2UgPSA1MDtcclxuICAgICAgICB0aGlzLmJhbm5lcl9zaG93X2hlaWdodCA9IDExNTtcclxuICAgICAgICB0aGlzLmJhbm5lcl9jbG9zZV9idXRfc2hvdyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zcG90X2NsaWNrX2Nsb3NlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5iYW5uZXJfY2xpY2tfcmVmcmVzaCA9IGZhbHNlLFxyXG4gICAgICAgIHRoaXMuc3BvdF9jbGlja19jb3VudCA9IDgsXHJcbiAgICAgICAgdGhpcy5zcG90X3Nob3dfaW50ZXJ2YWwgPSAyLFxyXG4gICAgICAgIHRoaXMuX2luc3RhbGxTaG9ydGN1dFN0YXJ0VGltZSA9IDIwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHFnLmluaXRBZFNlcnZpY2Uoe1xyXG4gICAgICAgICAgICBhcHBJZDogb3Bwb0lkX1NESyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKFwib3Bwb2xvZy0tLS0tLWluaXQgc3VjY2Vzcy0tLS0tICBcIiArIHJlcyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcyl7XHJcbiAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZyhcIm9wcG9sb2ctLS0tLS1pbml0IGZhaWwtLS0tLSAgXCIgKyByZXMpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wdmFyZTogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKFwib3Bwb2xvZy0tLS0tLWluaXQgY29tcHZhcmUtLS0tLSAgXCIgKyByZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fbmF0aXZlRW1iZWRBZCA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2hvd05hdGl2ZUVtYmVkSW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMuc2hvd05hdGl2ZUVtYmVkRmFpbE51bSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuX2hhdmVCYW5uZXJBZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2Jhbm5lckFkID0gW107XHJcbiAgICAgICAgdGhpcy5fbmF0aXZlU3BvckFkID0gW107XHJcbiAgICAgICAgdGhpcy5fbmF0aXZlQmFubmVyQWQgPSBbXTtcclxuICAgICAgICB0aGlzLl9uYXRpdmVQbGF5QWQgPSBbXTtcclxuICAgICAgICB0aGlzLl9pbnNlcnRBZCA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3ZpZGVvQWQgPSBbXTtcclxuICAgICAgICB0aGlzLnNob3dBZEJhbm5lckluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLnNob3dBZFNwb3RJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5zaG93QWRBd2FyZEluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLnNob3dBZE5hdGl2ZUluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLnNob3dBZE5hdGl2ZVBsYXlJbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy5zaG93QWROYXRpdmVCYW5uZXJJbmRleCA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd0FkQmFubmVyQ29udGludWVGYWlsTnVtID0gMDtcclxuICAgICAgICB0aGlzLnNob3dBZFNwb3RDb250aW51ZUZhaWxOdW0gPSAwO1xyXG4gICAgICAgIHRoaXMuc2hvd0FkQXdhcmRDb250aW51ZUZhaWxOdW0gPSAwO1xyXG4gICAgICAgIHRoaXMuc2hvd0FkTmF0aXZlQ29udGludWVGYWlsTnVtID0gMDtcclxuICAgICAgICB0aGlzLnNob3dBZE5hdGl2ZVBsYXlDb250aW51ZUZhaWxOdW0gPSAwO1xyXG4gICAgICAgIHRoaXMuc2hvd0FkTmF0aXZlQmFubmVyQ29udGludWVGYWlsTnVtID0gMDtcclxuICAgICAgICB0aGlzLnN0YXJ0TmF0aXZlU3BvdCA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuX2FkZE5hdGl2ZUFkTm9kZSA9IFtdLFxyXG4gICAgICAgIHRoaXMuX2FkZE5hdGl2ZUFkTnVtID0gMCxcclxuICAgICAgICB0aGlzLl9jYW5TaG93U3lzU3BvdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fc2hvd1N5c1Nwb3RUaW1lID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5fc3BvdF9iYW5uZXJfb25seSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuX2Jhbm5lcl9jbG9zZV9hdXRvc2hvdyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2Nsb3NlQmFubmVyTnVtID0gMDtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbml0T25saW5lRGF0YSgpOyAgICBcclxuICAgICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5sb2FkTmF0aXZlQWQoKTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHZpYnJhdGVTaG9ydCgpe1xyXG4gICAgICAgIHFnLnZpYnJhdGVTaG9ydCgpO1xyXG4gICAgfSxcclxuICAgIHZpYnJhdGVMb25nKCl7XHJcbiAgICAgICAgcWcudmlicmF0ZUxvbmcoKTtcclxuICAgIH0sXHJcbiAgICBjbGVhck5hdGl2ZUFkKCl7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDtpIDwgdGhpcy5fbmF0aXZlU3BvckFkLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICB0aGlzLl9uYXRpdmVTcG9yQWRbaV0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9uYXRpdmVTcG9yQWRbaV0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IodmFyIGkgPSAwO2kgPCB0aGlzLl9uYXRpdmVCYW5uZXJBZC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgdGhpcy5fbmF0aXZlQmFubmVyQWRbaV0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9uYXRpdmVCYW5uZXJBZFtpXSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7aSA8IHRoaXMuX25hdGl2ZVBsYXlBZC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgdGhpcy5fbmF0aXZlUGxheUFkW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5fbmF0aXZlUGxheUFkW2ldID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDtpIDwgdGhpcy5faW5zZXJ0QWQubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc2VydEFkW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5faW5zZXJ0QWRbaV0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IodmFyIGkgPSAwO2kgPCB0aGlzLl92aWRlb0FkLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICB0aGlzLl92aWRlb0FkW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5fdmlkZW9BZFtpXSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7aSA8IHRoaXMuX25hdGl2ZUVtYmVkQWQubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIHRoaXMuX25hdGl2ZUVtYmVkQWRbaV0uZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9uYXRpdmVFbWJlZEFkW2ldID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2FkTmF0aXZlQWQoKTtcclxuICAgIH0sXHJcbiAgICBjdXN0Q2xpY2tOYXRpdmUobm9kZSl7XHJcbiAgICAgICAgaWYobm9kZSAmJiBub2RlLmlzVmFsaWQpe1xyXG4gICAgICAgICAgICBpZihub2RlLkNhbGxCYWNrKXtcclxuICAgICAgICAgICAgICAgIG5vZGUuQ2FsbEJhY2soKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWRkTmF0aXZlQWQobm9kZSxmbGFnID0gZmFsc2Upe1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBcclxuICAgICAgICBsaWV5b3Vfc2hvd0xvZygnb3Bwb2xvZzEtLS0tLS0gYWRkTmF0aXZlQWQgJyArIHRoaXMuc2hvd0FkTmF0aXZlUGxheUluZGV4ICsgJyAgICcrb3Bwb05hdGl2ZVBsYXlJZFt0aGlzLnNob3dBZE5hdGl2ZVBsYXlJbmRleF0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKG5vZGUpe1xyXG4gICAgICAgICAgICBpZighbm9kZS5pc1ZhbGlkKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyIG5hdGl2ZWFkVGFnID0gMDtcclxuICAgICAgICAgICAgaWYobm9kZS5uYXRpdmVBZFRhZyl7XHJcbiAgICAgICAgICAgICAgICBuYXRpdmVhZFRhZyA9IG5vZGUubmF0aXZlQWRUYWc7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdmFyIG5vZGVBY3Rpb24gPSBjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgxKSxjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkTmF0aXZlQWQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9KSkpO1xyXG4gICAgICAgICAgICAgICAgbm9kZUFjdGlvbi5zZXRUYWcoNTY5Nzg0Nik7IFxyXG4gICAgICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24obm9kZUFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9hZGROYXRpdmVBZE51bSsrO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5uYXRpdmVBZFRhZyA9IHNlbGYuX2FkZE5hdGl2ZUFkTnVtO1xyXG4gICAgICAgICAgICAgICAgbmF0aXZlYWRUYWcgPSBzZWxmLl9hZGROYXRpdmVBZE51bTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxmLl9hZGROYXRpdmVBZE5vZGVbbmF0aXZlYWRUYWddID0gbm9kZTtcclxuICAgICAgICAgICAgbm9kZS5jYW5TaG93QWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihvcHBvTmF0aXZlUGxheUlkLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWZsYWcpe1xyXG4gICAgICAgICAgICBzZWxmLnNob3dBZE5hdGl2ZVBsYXlDb250aW51ZUZhaWxOdW0gPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaWQgPSBvcHBvTmF0aXZlUGxheUlkW3RoaXMuc2hvd0FkTmF0aXZlUGxheUluZGV4XTtcclxuICAgICAgICBpZih0aGlzLl9uYXRpdmVQbGF5QWRbdGhpcy5zaG93QWROYXRpdmVQbGF5SW5kZXhdKXtcclxuICAgICAgICAgICAgdGhpcy5fbmF0aXZlUGxheUFkW3RoaXMuc2hvd0FkTmF0aXZlUGxheUluZGV4XS5sb2FkKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0FkTmF0aXZlUGxheUluZGV4Kys7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0FkTmF0aXZlUGxheUluZGV4ID0gdGhpcy5zaG93QWROYXRpdmVQbGF5SW5kZXglb3Bwb05hdGl2ZVBsYXlJZC5sZW5ndGg7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IG5hdGl2ZUFkID0gcWcuY3JlYXRlTmF0aXZlQWQoeyBcclxuICAgICAgICAgICAgcG9zSWQ6IGlkXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLl9uYXRpdmVQbGF5QWRbdGhpcy5zaG93QWROYXRpdmVQbGF5SW5kZXhdID0gbmF0aXZlQWQ7XHJcbiAgICAgICAgdGhpcy5zaG93QWROYXRpdmVQbGF5SW5kZXgrKztcclxuICAgICAgICB0aGlzLnNob3dBZE5hdGl2ZVBsYXlJbmRleCA9IHRoaXMuc2hvd0FkTmF0aXZlUGxheUluZGV4JW9wcG9OYXRpdmVQbGF5SWQubGVuZ3RoO1xyXG4gICAgICAgIG5hdGl2ZUFkLmxvYWQoKTtcclxuICAgICAgICBuYXRpdmVBZC5vbkxvYWQoKHJlcykgPT57XHJcbiAgICAgICAgICAgIGlmKHJlcyAmJiByZXMuYWRMaXN0ICYmIHJlcy5hZExpc3QubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnb3Bwb2xvZy0tLS0tLSBzaG93IGFkZE5hdGl2ZUFkIGZhaWwyICcgKyAnICAgJyArIEpTT04uc3RyaW5naWZ5KHJlcykpXHJcbiAgICAgICAgICAgICAgICBzZWxmLnNob3dBZE5hdGl2ZVBsYXlDb250aW51ZUZhaWxOdW0rKztcclxuICAgICAgICAgICAgICAgIGlmKHNlbGYuc2hvd0FkTmF0aXZlUGxheUNvbnRpbnVlRmFpbE51bSA8IG9wcG9OYXRpdmVQbGF5SWQubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFkZE5hdGl2ZUFkKG51bGwsdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxmLnNob3dBZE5hdGl2ZVBsYXlDb250aW51ZUZhaWxOdW0gPSAwO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgbnVtTCA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkqcmVzLmFkTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkID0gcmVzLmFkTGlzdFtudW1MXS5hZElkO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gcmVzLmFkTGlzdFtudW1MXS50aXRsZTsvL+W5v+WRiuagh+mimFxyXG4gICAgICAgICAgICAgICAgdmFyIGRlc2MgPSByZXMuYWRMaXN0W251bUxdLmRlc2M7Ly/lub/lkYrmj4/ov7BcclxuICAgICAgICAgICAgICAgIHZhciBjbGlja0J0blR4dCA9IHJlcy5hZExpc3RbbnVtTF0uY2xpY2tCdG5UeHQ7Ly/ngrnlh7vmjInpkq7mlofmnKzmj4/ov7BcclxuICAgICAgICAgICAgICAgIHZhciBpY29uVXJsTGlzdCA9IHJlcy5hZExpc3RbbnVtTF0uaWNvblVybExpc3Q7Ly/lub/lkYrlm75pY29uXHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nVXJsTGlzdCA9IHJlcy5hZExpc3RbbnVtTF0uaW1nVXJsTGlzdDsvL+W5v+WRiuWbvlxyXG4gICAgICAgICAgICAgICAgdmFyIGxvZ29VcmwgPSByZXMuYWRMaXN0W251bUxdLmxvZ29Vcmw7Ly/lub/lkYrmoIfnrb7lm75cclxuICAgICAgICAgICAgICAgIG5hdGl2ZUFkLnJlcG9ydEFkU2hvdyh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRJZDogaWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvdWNoTm9kZSA9IG51bGw7Ly9zZWxmLl9hZGROYXRpdmVBZE5vZGU7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IG5OID0gc2VsZi5fYWRkTmF0aXZlQWROdW07bk4+MDtuTi0tKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWRub2RlID0gc2VsZi5fYWRkTmF0aXZlQWROb2RlW25OXTtcclxuICAgICAgICAgICAgICAgICAgICBpZihhZG5vZGUgJiYgYWRub2RlLmlzVmFsaWQgJiYgYWRub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpICYmIGFkbm9kZS5jYW5TaG93QWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaE5vZGUgPSBhZG5vZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkbm9kZS5jYW5TaG93QWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoIXRvdWNoTm9kZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ29wcG9sb2cgbmF0aXZlTm9kZSBudWxsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdG91Y2hOb2RlLnN0b3BBY3Rpb25CeVRhZyg1Njk3ODQ2KTtcclxuICAgICAgICAgICAgICAgIHRvdWNoTm9kZS5DYWxsQmFjayA9ICgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlQWQucmVwb3J0QWRDbGljayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkSWQ6IGlkXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGROYXRpdmVBZCh0b3VjaE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGlmKHRvdWNoTm9kZSAmJiB0b3VjaE5vZGUuaXNWYWxpZCAmJiB0b3VjaE5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRvdWNoTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXRvdWNoTm9kZS5oYXZlVG91Y2hPbil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoTm9kZS5oYXZlVG91Y2hPbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoTm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LkNhbGxCYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihsb2dvVXJsICE9ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhZFRpdGxlTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZFRpdGxlTm9kZS5zY2FsZSA9IDAuNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoTm9kZS5hZGRDaGlsZChhZFRpdGxlTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZFRpdGxlTm9kZS54ID0gdG91Y2hOb2RlLndpZHRoLzI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZFRpdGxlTm9kZS55ID0gdG91Y2hOb2RlLmhlaWdodC8yKi0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRUaXRsZU5vZGUuYW5jaG9yWCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZFRpdGxlTm9kZS5hbmNob3JZID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkVGl0bGVOb2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQobG9nb1VybCwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGFkVGl0bGVOb2RlICYmIGFkVGl0bGVOb2RlLmlzVmFsaWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZFRpdGxlTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgdXJsID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodG91Y2hOb2RlLndpZHRoIC8gdG91Y2hOb2RlLmhlaWdodCA+PSAxLjUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpbWdVcmxMaXN0Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gaW1nVXJsTGlzdFtwYXJzZUludChNYXRoLnJhbmRvbSgpKmltZ1VybExpc3QubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKGljb25VcmxMaXN0Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gaWNvblVybExpc3RbcGFyc2VJbnQoTWF0aC5yYW5kb20oKSppY29uVXJsTGlzdC5sZW5ndGgpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpY29uVXJsTGlzdC5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IGljb25VcmxMaXN0W3BhcnNlSW50KE1hdGgucmFuZG9tKCkqaWNvblVybExpc3QubGVuZ3RoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKGltZ1VybExpc3QubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgPSBpbWdVcmxMaXN0W3BhcnNlSW50KE1hdGgucmFuZG9tKCkqaW1nVXJsTGlzdC5sZW5ndGgpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZih1cmwgIT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZCh1cmwsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRvdWNoTm9kZSAmJiB0b3VjaE5vZGUuaXNWYWxpZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG91Y2hOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnb3Bwb2xvZy0tLS0tYWRkTmF0aXZlQWQgRmFpbCArICcgKyBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBuYXRpdmVBZC5vbkVycm9yKChlcnIpID0+e1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnb3Bwb2xvZy0tLS0tLSBzaG93IGFkZE5hdGl2ZUFkIGZhaWwxICcgKyAnICAgJyArIEpTT04uc3RyaW5naWZ5KGVycikpXHJcbiAgICAgICAgICAgIHNlbGYuc2hvd0FkTmF0aXZlUGxheUNvbnRpbnVlRmFpbE51bSsrO1xyXG4gICAgICAgICAgICBpZihzZWxmLnNob3dBZE5hdGl2ZVBsYXlDb250aW51ZUZhaWxOdW0gPCBvcHBvTmF0aXZlUGxheUlkLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmFkZE5hdGl2ZUFkKG51bGwsdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHR9LFxyXG4gICAgc2hvd05hdGl2ZUJhbm5lcihmbGFnLGlzRW5kKXtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgc2VsZi5fTmF0aXZlQmFubmVyRmxhZyA9IGZsYWc7XHJcbiAgICAgICAgc2VsZi5fTmF0aXZlQmFubmVySXNFbmQgPSBpc0VuZDtcclxuICAgICAgICB2YXIgbm93VGltZSA9IHBhcnNlSW50KGdldFRpbWUoKS8xMDAwKTtcclxuXHRcdHZhciBvbGRUaW1lID0gVXNlcmRlZmF1bHQuZ2V0SW50Rm9yS2V5KGxpZXlvdS5LZXlfT25jZVBsYXllclRpbWUsbm93VGltZSk7XHJcbiAgICAgICAgdmFyIHRpbWUgPSBub3dUaW1lIC0gb2xkVGltZTtcclxuICAgICAgICBpZighdGhpcy5jYW5TaG93TmF0aXZlU3BvdCB8fCB0aW1lIDwgdGhpcy5zaG93TmF0aXZlU3BvdFRpbWUgfHwgVXNlcmRlZmF1bHQuZ2V0SW50Rm9yS2V5KCdvcHBvX3Nob3dOYXRpdmVOdW0nLDApIDwgdGhpcy5zdGFydE5hdGl2ZVNwb3Qpe1xyXG4gICAgICAgICAgICBpZighc2VsZi5fTmF0aXZlQmFubmVySXNFbmQpe1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zaG93U3BvdChmYWxzZSx0cnVlKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmluc3RhbGxTaG9ydGN1dCh7c2hvYURpYWxvZzp0cnVlfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaWV5b3Vfc2hvd0xvZygnb3Bwb2xvZzEtLS0tLS0gc2hvd05hdGl2ZUJhbm5lciAnICsgdGhpcy5zaG93QWROYXRpdmVJbmRleCArICcgICAnK29wcG9OYXRpdmVJZFt0aGlzLnNob3dBZE5hdGl2ZUluZGV4XSk7XHJcbiAgICAgICAgaWYoIXNlbGYuX05hdGl2ZUJhbm5lckZsYWcpe1xyXG4gICAgICAgICAgICBzZWxmLnNob3dBZE5hdGl2ZUNvbnRpbnVlRmFpbE51bSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG9wcG9OYXRpdmVJZC5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICBpZighc2VsZi5fTmF0aXZlQmFubmVySXNFbmQpe1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zaG93U3BvdChmYWxzZSx0cnVlKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmluc3RhbGxTaG9ydGN1dCh7c2hvYURpYWxvZzp0cnVlfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLl9uYXRpdmVTcG9yQWRbdGhpcy5zaG93QWROYXRpdmVJbmRleF0pe1xyXG4gICAgICAgICAgICB0aGlzLl9uYXRpdmVTcG9yQWRbdGhpcy5zaG93QWROYXRpdmVJbmRleF0ubG9hZCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zaG93QWROYXRpdmVJbmRleCsrO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dBZE5hdGl2ZUluZGV4ID0gdGhpcy5zaG93QWROYXRpdmVJbmRleCVvcHBvTmF0aXZlSWQubGVuZ3RoO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpZXlvdV9zaG93TG9nKCdvcHBvbG9nMi0tLS0tLSBzaG93TmF0aXZlQmFubmVyICcgKyB0aGlzLnNob3dBZE5hdGl2ZUluZGV4KTtcclxuICAgICAgICB2YXIgaWQgPSBvcHBvTmF0aXZlSWRbdGhpcy5zaG93QWROYXRpdmVJbmRleF07XHJcbiAgICAgICAgdmFyIG5hdGl2ZUFkID0gcWcuY3JlYXRlTmF0aXZlQWQoeyBcclxuICAgICAgICAgICAgcG9zSWQ6IGlkXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLl9uYXRpdmVTcG9yQWRbdGhpcy5zaG93QWROYXRpdmVJbmRleF0gPSBuYXRpdmVBZDtcclxuICAgICAgICB0aGlzLnNob3dBZE5hdGl2ZUluZGV4Kys7XHJcbiAgICAgICAgdGhpcy5zaG93QWROYXRpdmVJbmRleCA9IHRoaXMuc2hvd0FkTmF0aXZlSW5kZXglb3Bwb05hdGl2ZUlkLmxlbmd0aDtcclxuICAgICAgICBuYXRpdmVBZC5sb2FkKCk7XHJcbiAgICAgICAgbmF0aXZlQWQub25Mb2FkKChyZXMpID0+e1xyXG4gICAgICAgICAgICBpZihyZXMgJiYgcmVzLmFkTGlzdCAmJiByZXMuYWRMaXN0Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ29wcG9sb2ctLS0tLS0gc2hvdyBuYXRpdmUgZmFpbCAnICsgJyAgICcgKyBKU09OLnN0cmluZ2lmeShyZXMpKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5zaG93QWROYXRpdmVDb250aW51ZUZhaWxOdW0rKztcclxuICAgICAgICAgICAgICAgIGlmKHNlbGYuc2hvd0FkTmF0aXZlQ29udGludWVGYWlsTnVtIDwgb3Bwb05hdGl2ZUlkLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zaG93TmF0aXZlQmFubmVyKHRydWUsc2VsZi5fTmF0aXZlQmFubmVySXNFbmQpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXNlbGYuX05hdGl2ZUJhbm5lcklzRW5kKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zaG93U3BvdChmYWxzZSx0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5pbnN0YWxsU2hvcnRjdXQoe3Nob2FEaWFsb2c6dHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxmLnNob3dBZE5hdGl2ZUNvbnRpbnVlRmFpbE51bSA9IDA7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbnVtTCA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkqcmVzLmFkTGlzdC5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkID0gcmVzLmFkTGlzdFtudW1MXS5hZElkO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gcmVzLmFkTGlzdFtudW1MXS50aXRsZTsvL+W5v+WRiuagh+mimFxyXG4gICAgICAgICAgICAgICAgdmFyIGRlc2MgPSByZXMuYWRMaXN0W251bUxdLmRlc2M7Ly/lub/lkYrmj4/ov7BcclxuICAgICAgICAgICAgICAgIHZhciBjbGlja0J0blR4dCA9IHJlcy5hZExpc3RbbnVtTF0uY2xpY2tCdG5UeHQ7Ly/ngrnlh7vmjInpkq7mlofmnKzmj4/ov7BcclxuICAgICAgICAgICAgICAgIHZhciBpY29uVXJsTGlzdCA9IHJlcy5hZExpc3RbbnVtTF0uaWNvblVybExpc3Q7Ly/lub/lkYrlm75pY29uXHJcbiAgICAgICAgICAgICAgICB2YXIgaW1nVXJsTGlzdCA9IHJlcy5hZExpc3RbbnVtTF0uaW1nVXJsTGlzdDsvL+W5v+WRiuWbvlxyXG4gICAgICAgICAgICAgICAgdmFyIGxvZ29VcmwgPSByZXMuYWRMaXN0W251bUxdLmxvZ29Vcmw7Ly/lub/lkYrmoIfnrb7lm75cclxuICAgICAgICAgICAgICAgIG5hdGl2ZUFkLnJlcG9ydEFkU2hvdyh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRJZDogaWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ29wcG9sb2ctLS0tLS0gc2hvdyBuYXRpdmUgc3VjY2VzcyAnKTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvYWRlci5sb2FkUmVzKCdTREsvbW9kdWxlL3FHYW1lTmF0aXZlQWQvbmF0aXZlQWQnLGZ1bmN0aW9uKGVycixyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2hvd1Nwb3RTdWNjZXNzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZk5vZGUgPSBjYy5kaXJlY3Rvci5nZXRSdW5uaW5nU2NlbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBsaWV5b3VfbmF0aXZlU3BvdCgpOy8vY2MuaW5zdGFudGlhdGUocmVzKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0aGlzLm5hdGl2ZURlbGF5U2hvd1RpbWUqMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZOb2RlLmFkZENoaWxkKG5vZGUsOTk5KTsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZShub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS54ID0gY2Mud2luU2l6ZS53aWR0aC8yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnkgPSBjYy53aW5TaXplLmhlaWdodC8yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2hvd0IgPSBzZWxmLl9jYW5TaG93QmFubmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZWxmLl9zcG90X2Jhbm5lcl9vbmx5KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaGlkZUJhbm5lcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KCdsaWV5b3Vfb3Bwb05hdGl2ZUFkU2RrJykuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaENhbGxCYWNrOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlQWQucmVwb3J0QWRDbGljayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkSWQ6IGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIHRoaXMubmF0aXZlRGVsYXlEZXN0cm95VGltZSoxMDAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUodGhpcy5uYXRpdmVEZWxheURlc3Ryb3lUaW1lKSxjYy5yZW1vdmVTZWxmKCkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlQ2FsbEJhY2s6ZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihzaG93Qil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCdvcHBvbG9nLS0gY2xvc2UgbmF0aXZlIHNwb3Qgc2hvd0Jhbm5lcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNob3dCYW5uZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTp0aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6ZGVzYyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrQnRuVHh0OmNsaWNrQnRuVHh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvblVybExpc3Q6aWNvblVybExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdVcmxMaXN0OmltZ1VybExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvVXJsOmxvZ29VcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUFscGhhOnNlbGYuc3BvdF9jbG9zZV9idXRfYWxwaGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVNpemU6c2VsZi5zcG90X2Nsb3NlX2J1dF9zaXplLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlUmFuZ2U6c2VsZi5zcG90X2Nsb3NlX2J1dF9yYW5nZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVNob3c6c2VsZi5zcG90X2NsaWNrX2Nsb3NlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnb3Bwb2xvZyBzaG93TmF0aXZlU3BvckZhaWwgICAnICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnb3Bwb2xvZyBzaG93TmF0aXZlU3BvckZhaWwgICAnICsgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbmF0aXZlQWQub25FcnJvcigoZXJyKSA9PntcclxuICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ29wcG9sb2ctLS0tLS0gc2hvdyBuYXRpdmUgZmFpbCAnICsgJyAgICcgKyBKU09OLnN0cmluZ2lmeShlcnIpKVxyXG4gICAgICAgICAgICBzZWxmLnNob3dBZE5hdGl2ZUNvbnRpbnVlRmFpbE51bSsrO1xyXG4gICAgICAgICAgICBpZihzZWxmLnNob3dBZE5hdGl2ZUNvbnRpbnVlRmFpbE51bSA8IG9wcG9OYXRpdmVJZC5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zaG93TmF0aXZlQmFubmVyKHRydWUsc2VsZi5fTmF0aXZlQmFubmVySXNFbmQpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGlmKCFzZWxmLl9OYXRpdmVCYW5uZXJJc0VuZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zaG93U3BvdChmYWxzZSx0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaW5zdGFsbFNob3J0Y3V0KHtzaG9hRGlhbG9nOnRydWV9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIGhpZGVOYXRpdmVCYW5uZXIoKXtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGhpZGVCYW5uZXIoKXtcclxuICAgICAgICBsaWV5b3Vfc2hvd0xvZygnb3Bwb2xvZy0tLS0tLS0tLS0tLSBjbG9zZSBiYW5uZXInKTtcclxuICAgICAgICB0aGlzLl9jYW5TaG93QmFubmVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5faGF2ZUJhbm5lckFkID0gZmFsc2U7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmJhbm5lclRpbWVPdXQpO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7aSA8IHRoaXMuX2Jhbm5lckFkLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBpZih0aGlzLl9iYW5uZXJBZFtpXSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iYW5uZXJBZFtpXS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iYW5uZXJBZFtpXSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5fQmFubmVyTmF0aXZlQUROb2RlICYmIHRoaXMuX0Jhbm5lck5hdGl2ZUFETm9kZS5pc1ZhbGlkKXtcclxuICAgICAgICAgICAgdGhpcy5fQmFubmVyTmF0aXZlQUROb2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5fQmFubmVyTmF0aXZlQUROb2RlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2hvd0Jhbm5lcihvYmosZmxhZyA9IGZhbHNlKXtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLl9jbGVhckludGVydmFsID0gZmFsc2U7XHJcbiAgICAgICAgaWYodGhpcy5fY2FuU2hvd0Jhbm5lcil7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5fQmFubmVyTmF0aXZlQUROb2RlICYmIHRoaXMuX0Jhbm5lck5hdGl2ZUFETm9kZS5pc1ZhbGlkKXtcclxuICAgICAgICAgICAgaWYodGhpcy5fYmFubmVyQWRTdHlsZSYmdGhpcy5fYmFubmVyQWRTdHlsZS55IT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fQmFubmVyTmF0aXZlQUROb2RlLnkgPSBjYy53aW5TaXplLmhlaWdodC10aGlzLl9iYW5uZXJBZFN0eWxlLnktdGhpcy5iYW5uZXJfc2hvd19oZWlnaHQqbGlleW91X1Nka01hbmFnZXIuX1NjZW5lU2NhbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDtpIDwgdGhpcy5fYmFubmVyQWQubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2Jhbm5lckFkW2ldKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jhbm5lckFkW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2Jhbm5lckFkW2ldID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLm1vcmVHYW1lQmFubmVyICYmIHRoaXMubW9yZUdhbWVCYW5uZXIuaXNWYWxpZCl7XHJcbiAgICAgICAgICAgIHRoaXMubW9yZUdhbWVCYW5uZXIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vcmVHYW1lQmFubmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5fY2xvc2VCYW5uZXJOdW0gPj0gNSl7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCdvcHBvbG9nLS0gY2xvc2VCYW5uZXJOdW0gPT0gNScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2hhdmVCYW5uZXJBZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2NhblNob3dCYW5uZXIgPSB0cnVlO1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5iYW5uZXJUaW1lT3V0KTtcclxuICAgICAgICB2YXIgcmVmcmVzaFRpbWUgPSB0aGlzLnJlZnJlc2hCYW5uZXJUaW1lO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuYmFubmVyX2ZpcnN0X2FkID09IFwibmF0aXZlXCIpe1xyXG4gICAgICAgICAgICB0aGlzLnNob3dCYW5uZXJOYXRpdmVBRCgpO1xyXG4gICAgICAgICAgICB0aGlzLmJhbm5lclRpbWVPdXQgPSBzZXRJbnRlcnZhbCh0aGlzLnNob3dCYW5uZXJOYXRpdmVBRC5iaW5kKHRoaXMpLDEwMDAgKiByZWZyZXNoVGltZSk7Ly/liLfmlrDlub/lkYpcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zaG93QmFubmVyMigpO1xyXG4gICAgICAgICAgICB0aGlzLmJhbm5lclRpbWVPdXQgPSBzZXRJbnRlcnZhbCh0aGlzLnNob3dCYW5uZXIyLmJpbmQodGhpcyksMTAwMCAqIHJlZnJlc2hUaW1lKTsvL+WIt+aWsOW5v+WRilxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93QmFubmVyTmF0aXZlQUQob2JqID0ge30pe1xyXG4gICAgICAgIGxldCBub3dUaW1lID0gcGFyc2VJbnQobGlleW91X2dldFRpbWUoKS8xMDAwKTtcclxuICAgICAgICBpZihub3dUaW1lIC0gdGhpcy5fYmVnaW5HYW1lVGltZSA8IHRoaXMuX3Nob3dCYW5uZXJTdGFydFRpbWUpe1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZyhcIuaYvuekumJhbm5lcuW5v+WRiuaXtumXtOacquWIsFwiK3RoaXMuX3Nob3dCYW5uZXJTdGFydFRpbWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuX2NsZWFySW50ZXJ2YWwpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAvLyBzZWxmLnNob3dCYW5uZXIyKHtpc0VuZDp0cnVlfSk7XHJcbiAgICAgICAgLy8gcmV0dXJuO1xyXG4gICAgICAgIGlmKHRoaXMubW9yZUdhbWVCYW5uZXIgJiYgdGhpcy5tb3JlR2FtZUJhbm5lci5pc1ZhbGlkKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLl9iYW5uZXJOYXRpdmVBZE9iaiA9IG9iajtcclxuICAgICAgICBsaWV5b3Vfc2hvd0xvZygnb3Bwb2xvZzEtLS0tLS0gc2hvd0Jhbm5lck5hdGl2ZUFEICcgKyB0aGlzLnNob3dBZE5hdGl2ZUJhbm5lckluZGV4ICsgJyAgICcgKyBvcHBvTmF0aXZlQmFubmVySWRbdGhpcy5zaG93QWROYXRpdmVCYW5uZXJJbmRleF0pO1xyXG4gICAgICAgIGlmKHRoaXMuX2hhdmVCYW5uZXJBZCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRoaXMuY2FuU2hvd05hdGl2ZUJhbm5lcil7XHJcbiAgICAgICAgICAgIGlmKCFzZWxmLl9iYW5uZXJOYXRpdmVBZE9iai5pc0VuZCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNob3dCYW5uZXIyKHtpc0VuZDp0cnVlfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZighc2VsZi5fYmFubmVyTmF0aXZlQWRPYmouZmxhZyl7XHJcbiAgICAgICAgICAgIHNlbGYuc2hvd0FkTmF0aXZlQmFubmVyQ29udGludWVGYWlsTnVtID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYob3Bwb05hdGl2ZUJhbm5lcklkLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIGlmKCFzZWxmLl9iYW5uZXJOYXRpdmVBZE9iai5pc0VuZCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNob3dCYW5uZXIyKHtpc0VuZDp0cnVlfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLl9uYXRpdmVCYW5uZXJBZFt0aGlzLnNob3dBZE5hdGl2ZUJhbm5lckluZGV4XSl7XHJcbiAgICAgICAgICAgIHRoaXMuX25hdGl2ZUJhbm5lckFkW3RoaXMuc2hvd0FkTmF0aXZlQmFubmVySW5kZXhdLmxvYWQoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0FkTmF0aXZlQmFubmVySW5kZXgrKztcclxuICAgICAgICAgICAgdGhpcy5zaG93QWROYXRpdmVCYW5uZXJJbmRleCA9IHRoaXMuc2hvd0FkTmF0aXZlQmFubmVySW5kZXglb3Bwb05hdGl2ZUJhbm5lcklkLmxlbmd0aDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaWV5b3Vfc2hvd0xvZygnb3Bwb2xvZzItLS0tLS0gc2hvd0Jhbm5lck5hdGl2ZUFEICcgKyB0aGlzLnNob3dBZE5hdGl2ZUJhbm5lckluZGV4KTtcclxuICAgICAgICB2YXIgaWQgPSBvcHBvTmF0aXZlQmFubmVySWRbdGhpcy5zaG93QWROYXRpdmVCYW5uZXJJbmRleF07XHJcbiAgICAgICAgdmFyIG5hdGl2ZUFkID0gcWcuY3JlYXRlTmF0aXZlQWQoeyBcclxuICAgICAgICAgICAgcG9zSWQ6IGlkXHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLl9uYXRpdmVCYW5uZXJBZFt0aGlzLnNob3dBZE5hdGl2ZUJhbm5lckluZGV4XSA9IG5hdGl2ZUFkO1xyXG4gICAgICAgIHRoaXMuc2hvd0FkTmF0aXZlQmFubmVySW5kZXgrKztcclxuICAgICAgICB0aGlzLnNob3dBZE5hdGl2ZUJhbm5lckluZGV4ID0gdGhpcy5zaG93QWROYXRpdmVCYW5uZXJJbmRleCVvcHBvTmF0aXZlQmFubmVySWQubGVuZ3RoO1xyXG4gICAgICAgIG5hdGl2ZUFkLmxvYWQoKTtcclxuICAgICAgICBuYXRpdmVBZC5vbkxvYWQoKHJlcykgPT57XHJcbiAgICAgICAgICAgIGlmKHJlcyAmJiByZXMuYWRMaXN0ICYmIHJlcy5hZExpc3QubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnb3Bwb2xvZy0tLS0tLSBzaG93IG5hdGl2ZSBiYW5uZXIgZmFpbCAnKycgICcgKyBKU09OLnN0cmluZ2lmeShlcnIpKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5zaG93QWROYXRpdmVCYW5uZXJDb250aW51ZUZhaWxOdW0rKztcclxuICAgICAgICAgICAgICAgIGlmKHNlbGYuc2hvd0FkTmF0aXZlQmFubmVyQ29udGludWVGYWlsTnVtIDwgb3Bwb05hdGl2ZUJhbm5lcklkLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zaG93QmFubmVyTmF0aXZlQUQoe2ZsYWc6dHJ1ZSxpc0VuZDpzZWxmLl9iYW5uZXJOYXRpdmVBZE9iai5pc0VuZH0pO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXNlbGYuX2Jhbm5lck5hdGl2ZUFkT2JqLmlzRW5kKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5zaG93QmFubmVyMih7aXNFbmQ6dHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zaG93QWROYXRpdmVCYW5uZXJDb250aW51ZUZhaWxOdW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgdmFyIG51bUwgPSBwYXJzZUludChNYXRoLnJhbmRvbSgpKnJlcy5hZExpc3QubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHZhciBpZCA9IHJlcy5hZExpc3RbbnVtTF0uYWRJZDtcclxuICAgICAgICAgICAgICAgIHZhciB0aXRsZSA9IHJlcy5hZExpc3RbbnVtTF0udGl0bGU7Ly/lub/lkYrmoIfpophcclxuICAgICAgICAgICAgICAgIHZhciBkZXNjID0gcmVzLmFkTGlzdFtudW1MXS5kZXNjOy8v5bm/5ZGK5o+P6L+wXHJcbiAgICAgICAgICAgICAgICB2YXIgY2xpY2tCdG5UeHQgPSByZXMuYWRMaXN0W251bUxdLmNsaWNrQnRuVHh0Oy8v54K55Ye75oyJ6ZKu5paH5pys5o+P6L+wXHJcbiAgICAgICAgICAgICAgICB2YXIgaWNvblVybExpc3QgPSByZXMuYWRMaXN0W251bUxdLmljb25VcmxMaXN0Oy8v5bm/5ZGK5Zu+aWNvblxyXG4gICAgICAgICAgICAgICAgdmFyIGltZ1VybExpc3QgPSByZXMuYWRMaXN0W251bUxdLmltZ1VybExpc3Q7Ly/lub/lkYrlm75cclxuICAgICAgICAgICAgICAgIGltZ1VybExpc3QgPSBbXTsvL+S4jeaYvuekuuWkp+WbvlxyXG4gICAgICAgICAgICAgICAgdmFyIGxvZ29VcmwgPSByZXMuYWRMaXN0W251bUxdLmxvZ29Vcmw7Ly/lub/lkYrmoIfnrb7lm75cclxuICAgICAgICAgICAgICAgIG5hdGl2ZUFkLnJlcG9ydEFkU2hvdyh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRJZDogaWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ29wcG9sb2ctLS0tLS0gc2hvdyBuYXRpdmUgYmFubmVyIHN1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvYWRlci5sb2FkUmVzKCdTREsvbW9kdWxlL3FHYW1lTmF0aXZlQWQvYmFubmVyTmF0aXZlQWQnLGZ1bmN0aW9uKGVycixyZXMpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFzZWxmLl9jYW5TaG93QmFubmVyKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLl9oYXZlQmFubmVyQWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7aSA8IHRoaXMuX2Jhbm5lckFkLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fYmFubmVyQWRbaV0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Jhbm5lckFkW2ldLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9iYW5uZXJBZFtpXSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoc2VsZi5fQmFubmVyTmF0aXZlQUROb2RlICYmIHNlbGYuX0Jhbm5lck5hdGl2ZUFETm9kZS5pc1ZhbGlkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX0Jhbm5lck5hdGl2ZUFETm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9CYW5uZXJOYXRpdmVBRE5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbGYuaGlkZUJhbm5lcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZOb2RlID0gY2MuZGlyZWN0b3IuZ2V0UnVubmluZ1NjZW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub2RlID0gbGlleW91X25hdGl2ZUJhbm5lcigpOy8vY2MuaW5zdGFudGlhdGUocmVzKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9CYW5uZXJOYXRpdmVBRE5vZGUgPSBub2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub2RlLnkgPSAtNjQwL2ZOb2RlLnNjYWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnggPSBjYy53aW5TaXplLndpZHRoLzI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNlbGYuX2Jhbm5lckFkU3R5bGUmJnNlbGYuX2Jhbm5lckFkU3R5bGUueSE9dW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUueSA9IGNjLndpblNpemUuaGVpZ2h0LXNlbGYuX2Jhbm5lckFkU3R5bGUueS1zZWxmLmJhbm5lcl9zaG93X2hlaWdodCpsaWV5b3VfU2RrTWFuYWdlci5fU2NlbmVTY2FsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmTm9kZS5hZGRDaGlsZChub2RlLDk5OSk7ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUobm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KCdsaWV5b3Vfb3Bwb05hdGl2ZUFkU2RrJykuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3VjaENhbGxCYWNrOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF0aXZlQWQucmVwb3J0QWRDbGljayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkSWQ6IGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUNhbGxCYWNrOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fY2xvc2VCYW5uZXJOdW0rKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnb3Bwb2xvZy0tLS0tLS0gY2xvc2UgbmF0aXZlIEJhbm5lcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFzZWxmLl9iYW5uZXJfY2xvc2VfYXV0b3Nob3cpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjbGVhckludGVydmFsKHNlbGYuYmFubmVyVGltZU91dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX0Jhbm5lck5hdGl2ZUFETm9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2NsZWFySW50ZXJ2YWwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuYXRpdmVBZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTp0aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M6ZGVzYyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrQnRuVHh0OmNsaWNrQnRuVHh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvblVybExpc3Q6aWNvblVybExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdVcmxMaXN0OmltZ1VybExpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvVXJsOmxvZ29VcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUFscGhhOnNlbGYuYmFubmVyX2Nsb3NlX2J1dF9hbHBoYSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlU2l6ZTpzZWxmLmJhbm5lcl9jbG9zZV9idXRfc2l6ZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVJhbmdlOnNlbGYuYmFubmVyX2Nsb3NlX2J1dF9yYW5nZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVNob3c6c2VsZi5iYW5uZXJfY2xvc2VfYnV0X3Nob3csXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYW5uZXJIZWlnaHQ6c2VsZi5iYW5uZXJfc2hvd19oZWlnaHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ29wcG9sb2cgc2hvd05hdGl2ZUJhbm5lckZhaWwgICAnICsgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnb3Bwb2xvZyBzaG93TmF0aXZlQmFubmVyRmFpbCAgICcgKyBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgICAgICBuYXRpdmVBZC5vbkVycm9yKChlcnIpID0+e1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnb3Bwb2xvZy0tLS0tLSBzaG93IG5hdGl2ZSBiYW5uZXIgZmFpbCAnKycgICcgKyBKU09OLnN0cmluZ2lmeShlcnIpKVxyXG4gICAgICAgICAgICBzZWxmLnNob3dBZE5hdGl2ZUJhbm5lckNvbnRpbnVlRmFpbE51bSsrO1xyXG4gICAgICAgICAgICBpZihzZWxmLnNob3dBZE5hdGl2ZUJhbm5lckNvbnRpbnVlRmFpbE51bSA8IG9wcG9OYXRpdmVCYW5uZXJJZC5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zaG93QmFubmVyTmF0aXZlQUQoe2ZsYWc6dHJ1ZSxpc0VuZDpzZWxmLl9iYW5uZXJOYXRpdmVBZE9iai5pc0VuZH0pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGlmKCFzZWxmLl9iYW5uZXJOYXRpdmVBZE9iai5pc0VuZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zaG93QmFubmVyMih7aXNFbmQ6dHJ1ZX0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBzaG93QmFubmVyMihvYmogPSB7fSl7XHJcbiAgICAgICAgbGV0IG5vd1RpbWUgPSBwYXJzZUludChsaWV5b3VfZ2V0VGltZSgpLzEwMDApO1xyXG4gICAgICAgIGlmKG5vd1RpbWUgLSB0aGlzLl9iZWdpbkdhbWVUaW1lIDwgdGhpcy5fc2hvd0Jhbm5lclN0YXJ0VGltZSl7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKFwi5pi+56S6YmFubmVy5bm/5ZGK5pe26Ze05pyq5YiwXCIrdGhpcy5fc2hvd0Jhbm5lclN0YXJ0VGltZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5fY2xlYXJJbnRlcnZhbCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5tb3JlR2FtZUJhbm5lciAmJiB0aGlzLm1vcmVHYW1lQmFubmVyLmlzVmFsaWQpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBpZighc2VsZi5fY2FuU2hvd0Jhbm5lcil7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGlleW91X3Nob3dMb2coJ29wcG9sb2cxLS0tLS0tIHNob3dCYW5uZXIyICcrdGhpcy5zaG93QWRCYW5uZXJJbmRleCk7XHJcbiAgICAgICAgaWYodGhpcy5faGF2ZUJhbm5lckFkKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLl9zaG93QmFubmVyT2JqID0gb2JqO1xyXG4gICAgICAgIGlmKCFzZWxmLl9zaG93QmFubmVyT2JqLmZsYWcpe1xyXG4gICAgICAgICAgICBzZWxmLnNob3dBZEJhbm5lckNvbnRpbnVlRmFpbE51bSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG9wcG9CYW5uZXJJZC5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICBpZighc2VsZi5fc2hvd0Jhbm5lck9iai5pc0VuZCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNob3dCYW5uZXJOYXRpdmVBRCh7aXNFbmQ6dHJ1ZX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmKHRoaXMuX2Jhbm5lckFkW3RoaXMuc2hvd0FkQmFubmVySW5kZXhdKXtcclxuICAgICAgICAgICAgdGhpcy5fYmFubmVyQWRbdGhpcy5zaG93QWRCYW5uZXJJbmRleF0uc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zaG93QWRCYW5uZXJJbmRleCsrO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dBZEJhbm5lckluZGV4ID0gdGhpcy5zaG93QWRCYW5uZXJJbmRleCVvcHBvQmFubmVySWQubGVuZ3RoO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpZXlvdV9zaG93TG9nKCdvcHBvbG9nMi0tLS0tLSBzaG93QmFubmVyMiAnK3RoaXMuc2hvd0FkQmFubmVySW5kZXgpO1xyXG4gICAgICAgIHZhciBpZCA9IG9wcG9CYW5uZXJJZFt0aGlzLnNob3dBZEJhbm5lckluZGV4XTtcclxuICAgICAgICB2YXIgYmFubmVyQWQgPSBxZy5jcmVhdGVCYW5uZXJBZCh7XHJcbiAgICAgICAgICAgIHBvc0lkOiBpZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2Jhbm5lckFkW3RoaXMuc2hvd0FkQmFubmVySW5kZXhdID0gYmFubmVyQWQ7XHJcbiAgICAgICAgYmFubmVyQWQuc2hvdygpO1xyXG4gICAgICAgIGJhbm5lckFkLm9uU2hvdyhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBzZWxmLl9oYXZlQmFubmVyQWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZihzZWxmLl9CYW5uZXJOYXRpdmVBRE5vZGUgJiYgc2VsZi5fQmFubmVyTmF0aXZlQUROb2RlLmlzVmFsaWQpe1xyXG4gICAgICAgICAgICAgICAgc2VsZi5fQmFubmVyTmF0aXZlQUROb2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuX0Jhbm5lck5hdGl2ZUFETm9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGlleW91X3Nob3dMb2coXCJvcHBvbG9nLS0tLS0tc2hvdyBiYW5uZXIgLS0tLS0gIFwiICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJhbm5lckFkLm9uRXJyb3IoZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgc2VsZi5faGF2ZUJhbm5lckFkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmKCFzZWxmLl9jYW5TaG93QmFubmVyKXtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZWxmLnNob3dBZEJhbm5lckNvbnRpbnVlRmFpbE51bSsrO1xyXG4gICAgICAgICAgICBpZihzZWxmLnNob3dBZEJhbm5lckNvbnRpbnVlRmFpbE51bSA8IG9wcG9CYW5uZXJJZC5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zaG93QmFubmVyMih7ZmxhZzp0cnVlLGlzRW5kOnNlbGYuX3Nob3dCYW5uZXJPYmouaXNFbmR9KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBpZighc2VsZi5fc2hvd0Jhbm5lck9iai5pc0VuZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zaG93QmFubmVyTmF0aXZlQUQoe2lzRW5kOnRydWV9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZyhcIm9wcG9sb2ctLS0tLS1zaG93IGJhbm5lciBmYWlsLS0tLS0gIFwiICArICcgICAnICsgSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYmFubmVyQWQub25IaWRlKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZyhcIm9wcG9sb2ctLS0tLS0gYmFubmVyIG9uSGlkZS0tLS0tICBcIik7XHJcbiAgICAgICAgICAgIHNlbGYuX2Nsb3NlQmFubmVyTnVtKys7XHJcbiAgICAgICAgICAgIGlmKCFzZWxmLl9iYW5uZXJfY2xvc2VfYXV0b3Nob3cpe1xyXG4gICAgICAgICAgICAgICAgLy8gY2xlYXJJbnRlcnZhbChzZWxmLmJhbm5lclRpbWVPdXQpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5faGF2ZUJhbm5lckFkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9jbGVhckludGVydmFsID0gdHJ1ZTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9oYXZlQmFubmVyQWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgYmFubmVyQWQub25SZXNpemUoKHJlcyk9PntcclxuICAgICAgICAgICAgaWYoc2VsZi5fYmFubmVyQWRTdHlsZSYmc2VsZi5fYmFubmVyQWRTdHlsZS55IT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgYmFubmVyQWQuc3R5bGUudG9wID0gc2VsZi5fYmFubmVyQWRTdHlsZS55O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zaG93QWRCYW5uZXJJbmRleCsrO1xyXG4gICAgICAgIHRoaXMuc2hvd0FkQmFubmVySW5kZXggPSB0aGlzLnNob3dBZEJhbm5lckluZGV4JW9wcG9CYW5uZXJJZC5sZW5ndGg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgc2hvd0Jhbm5lckN1c3RvbShvYmope1xyXG4gICAgICAgIHRoaXMuc2hvd0Jhbm5lcihvYmopO1xyXG4gICAgfSxcclxuICAgIHNob3dCYW5uZXJCeVRvcChpZCl7XHJcbiAgICAgICAgaWYodGhpcy5wbGF0Zm9ybVZlcnNpb25Db2RlIDwgMTA1MSl7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZUJhbm5lcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd0Jhbm5lcih7fSk7XHJcbiAgICB9LFxyXG4gICAgc2hvd0Jhbm5lckJ5Qm90dG9tKGlkKXtcclxuICAgICAgICB0aGlzLnNob3dCYW5uZXIoe30pO1xyXG4gICAgfSxcclxuICAgIHNob3dSZXdhcmRlZFZpZGVvQWQoaWQyLGNsb3NlQ2FsbEJhY2ssZmxhZyA9IGZhbHNlKXtcclxuICAgICAgICBsaWV5b3Vfc2hvd0xvZygnb3Bwb2xvZzEtLS0tLS0gc2hvd1Jld2FyZGVkVmlkZW9BZCAnK3RoaXMuc2hvd0FkQXdhcmRJbmRleCk7XHJcbiAgICAgICAgdGhpcy5wbGF5VmRDYWxsQmFjayA9IGNsb3NlQ2FsbEJhY2s7XHJcbiAgICAgICAgdGhpcy5wbGF5VmRGbGFnID0gZmxhZztcclxuXHJcbiAgICAgICAgaWYob3Bwb1ZpZGVvSWQubGVuZ3RoIDw9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5VmRDYWxsQmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmKCFzZWxmLnBsYXlWZEZsYWcpe1xyXG4gICAgICAgICAgICBzZWxmLnNob3dBZEF3YXJkQ29udGludWVGYWlsTnVtID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5fdmlkZW9BZFt0aGlzLnNob3dBZEF3YXJkSW5kZXhdKXtcclxuICAgICAgICAgICAgdGhpcy5fdmlkZW9BZFt0aGlzLnNob3dBZEF3YXJkSW5kZXhdLmxvYWQoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0FkQXdhcmRJbmRleCsrO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dBZEF3YXJkSW5kZXggPSB0aGlzLnNob3dBZEF3YXJkSW5kZXglb3Bwb1ZpZGVvSWQubGVuZ3RoO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpZXlvdV9zaG93TG9nKCdvcHBvbG9nMi0tLS0tLSBzaG93UmV3YXJkZWRWaWRlb0FkICcrdGhpcy5zaG93QWRBd2FyZEluZGV4KTtcclxuICAgICAgICB2YXIgaWQgPSBvcHBvVmlkZW9JZFt0aGlzLnNob3dBZEF3YXJkSW5kZXhdO1xyXG4gICAgICAgIHZhciB2aWRlb0FkID0gcWcuY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHsgXHJcbiAgICAgICAgICAgIHBvc0lkOiBpZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3ZpZGVvQWRbdGhpcy5zaG93QWRBd2FyZEluZGV4XSA9IHZpZGVvQWQ7XHJcbiAgICAgICAgdGhpcy5zaG93QWRBd2FyZEluZGV4Kys7XHJcbiAgICAgICAgdGhpcy5zaG93QWRBd2FyZEluZGV4ID0gdGhpcy5zaG93QWRBd2FyZEluZGV4JW9wcG9WaWRlb0lkLmxlbmd0aDtcclxuICAgICAgICB2aWRlb0FkLmxvYWQoKTtcclxuICAgICAgICB2aWRlb0FkLm9uTG9hZCgoKSA9PntcclxuICAgICAgICAgICAgc2VsZi5zaG93QWRBd2FyZENvbnRpbnVlRmFpbE51bSA9IDA7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCdvcHBvbG9nLS0tLS0tICB2ZCBzdWNjZXNzICcpO1xyXG4gICAgICAgICAgICB2aWRlb0FkLnNob3coKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmlkZW9BZC5vbkVycm9yKChyZXMpID0+e1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnb3Bwb2xvZy0tLS0tLSB2ZCBmYWlsICcrJyAgICcgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgICAgICAgc2VsZi5zaG93QWRBd2FyZENvbnRpbnVlRmFpbE51bSsrO1xyXG4gICAgICAgICAgICBpZihzZWxmLnNob3dBZEF3YXJkQ29udGludWVGYWlsTnVtIDwgb3Bwb1ZpZGVvSWQubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2hvd1Jld2FyZGVkVmlkZW9BZCgnJyxzZWxmLnBsYXlWZENhbGxCYWNrLHRydWUpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNlbGYucGxheVZkQ2FsbEJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmlkZW9BZC5vbkNsb3NlKChyZXMpID0+e1xyXG4gICAgICAgICAgICBpZihyZXMuaXNFbmRlZCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnBsYXlWZENhbGxCYWNrKHRydWUpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHNlbGYucGxheVZkQ2FsbEJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICBcclxuICAgIH0sXHJcbiAgICBzaG93U3BvdChmbGFnLGlzRW5kKXtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGlleW91X3Nob3dMb2coJ29wcG9sb2cxLS0tLS0tIHNob3dTcG90ICcrdGhpcy5zaG93QWRTcG90SW5kZXgpO1xyXG4gICAgICAgXHJcbiAgICAgICAgc2VsZi5fc2hvd1Nwb3RGbGFnID0gZmxhZztcclxuICAgICAgICBzZWxmLl9zaG93U3BvdElzRW5kID0gaXNFbmQ7XHJcbiAgICAgICAgaWYoIXNlbGYuX3Nob3dTcG90RmxhZyl7XHJcbiAgICAgICAgICAgIHNlbGYuc2hvd0FkU3BvdENvbnRpbnVlRmFpbE51bSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG9wcG9TcG90QURJZC5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICBzZWxmLmluc3RhbGxTaG9ydGN1dCh7c2hvYURpYWxvZzp0cnVlfSk7XHJcbiAgICAgICAgICAgIGlmKCFzZWxmLl9zaG93U3BvdElzRW5kKXtcclxuICAgICAgICAgICAgICAgIC8vIHNlbGYuc2hvd05hdGl2ZUJhbm5lcihmYWxzZSx0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLl9pbnNlcnRBZFt0aGlzLnNob3dBZFNwb3RJbmRleF0pe1xyXG4gICAgICAgICAgICB0aGlzLl9pbnNlcnRBZFt0aGlzLnNob3dBZFNwb3RJbmRleF0ubG9hZCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zaG93QWRTcG90SW5kZXgrKztcclxuICAgICAgICAgICAgdGhpcy5zaG93QWRTcG90SW5kZXggPSB0aGlzLnNob3dBZFNwb3RJbmRleCVvcHBvU3BvdEFESWQubGVuZ3RoO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpZXlvdV9zaG93TG9nKCdvcHBvbG9nMi0tLS0tLSBzaG93U3BvdCAnK3RoaXMuc2hvd0FkU3BvdEluZGV4KTtcclxuICAgICAgICB2YXIgaWQgPSBvcHBvU3BvdEFESWRbdGhpcy5zaG93QWRTcG90SW5kZXhdO1xyXG4gICAgICAgIHZhciBpbnNlcnRBZCA9IHFnLmNyZWF0ZUluc2VydEFkKHsgXHJcbiAgICAgICAgICAgIHBvc0lkOiBpZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2luc2VydEFkW3RoaXMuc2hvd0FkU3BvdEluZGV4XSA9IGluc2VydEFkO1xyXG4gICAgICAgIHRoaXMuc2hvd0FkU3BvdEluZGV4Kys7XHJcbiAgICAgICAgdGhpcy5zaG93QWRTcG90SW5kZXggPSB0aGlzLnNob3dBZFNwb3RJbmRleCVvcHBvU3BvdEFESWQubGVuZ3RoO1xyXG4gICAgICAgIC8vIGluc2VydEFkLmxvYWQoKTtcclxuICAgICAgICBpbnNlcnRBZC5vbkxvYWQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc2VsZi5zaG93QWRTcG90Q29udGludWVGYWlsTnVtID0gMDtcclxuICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ29wcG9sb2ctLS0tLS0gc3BvdCBsb2FkIHN1Y2Nlc3MgJyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2hvd1Nwb3RTdWNjZXNzKCk7XHJcbiAgICAgICAgICAgICAgICBpbnNlcnRBZC5zaG93KClcclxuICAgICAgICAgICAgICAgIGlmKHNlbGYuX3Nwb3RfYmFubmVyX29ubHkgJiYgc2VsZi5wbGF0Zm9ybVZlcnNpb25Db2RlPj0xMDQ0KXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2hvd0IgPSBzZWxmLl9jYW5TaG93QmFubmVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaGlkZUJhbm5lcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGluc2VydEFkLm9uQ2xvc2UoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0QWQub2ZmQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ29wcG9sb2ctLSBjbG9zZSBzeXMgc3BvdCBzaG93QmFubmVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNob3dCKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2hvd0Jhbm5lcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHNlbGYubmF0aXZlRGVsYXlTaG93VGltZSoxMDAwKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGluc2VydEFkLm9uRXJyb3IoZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ29wcG9sb2ctLS0tLS0gc3BvdCBsb2FkIGZhaWwgJyArJyAgJyArIEpTT04uc3RyaW5naWZ5KHJlcykpXHJcbiAgICAgICAgICAgIHNlbGYuc2hvd0FkU3BvdENvbnRpbnVlRmFpbE51bSsrO1xyXG4gICAgICAgICAgICBpZihzZWxmLnNob3dBZFNwb3RDb250aW51ZUZhaWxOdW0gPCBvcHBvU3BvdEFESWQubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2hvd1Nwb3QodHJ1ZSxzZWxmLl9zaG93U3BvdElzRW5kKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmluc3RhbGxTaG9ydGN1dCh7c2hvYURpYWxvZzp0cnVlfSk7XHJcbiAgICAgICAgICAgICAgICBpZighc2VsZi5fc2hvd1Nwb3RJc0VuZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VsZi5zaG93TmF0aXZlQmFubmVyKGZhbHNlLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgc2hvd1Nwb3RTdWNjZXNzKCl7XHJcbiAgICAgICAgdGhpcy5fc2hvd1Nwb3RDb3VudCsrO1xyXG4gICAgICAgIFVzZXJkZWZhdWx0LnNldERhdGFGb3JLZXkoJ2xpZXlvdV9zaG93U3BvdENvdW50Jyx0aGlzLl9zaG93U3BvdENvdW50KTtcclxuICAgICAgICBpZih0aGlzLl9zaG93U3BvdFRpbWUgPT0gMCl7XHJcbiAgICAgICAgICAgIHZhciB0aW1lID0gcGFyc2VJbnQoZ2V0VGltZSgpLzEwMDApO1xyXG4gICAgICAgICAgICB0aGlzLl9zaG93U3BvdFRpbWUgPSB0aW1lO1xyXG4gICAgICAgICAgICBVc2VyZGVmYXVsdC5zZXREYXRhRm9yS2V5KCdsaWV5b3Vfc2hvd1Nwb3RUaW1lJyx0aW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWRkU2hvd1Nwb3ROdW0oKXtcclxuICAgICAgICB2YXIgdGltZSA9IHBhcnNlSW50KGdldFRpbWUoKS8xMDAwKTtcclxuICAgICAgICBpZih0aW1lLXRoaXMuX3Nob3dTcG90VGltZSA+IHRoaXMuX3Nob3dTcG90TWF4Q291bnRSZWZyZXNoVGltZSo2MCo2MCl7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCdvcHBvbG9nLS0tLS0tLS0tLS0gc3BvdCDph43nva7mj5LlsY/mmL7npLrmlbDph48nKTtcclxuICAgICAgICAgICAgdGhpcy5fc2hvd1Nwb3RDb3VudCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3dTcG90VGltZSA9IDA7XHJcbiAgICAgICAgICAgIFVzZXJkZWZhdWx0LnNldERhdGFGb3JLZXkoJ2xpZXlvdV9zaG93U3BvdENvdW50JywwKTtcclxuICAgICAgICAgICAgVXNlcmRlZmF1bHQuc2V0RGF0YUZvcktleSgnbGlleW91X3Nob3dTcG90VGltZScsMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpZXlvdV9zaG93TG9nKCdvcHBvbG9nLS0tLS0tLS0tLS0gc3BvdCAnK3RoaXMuX3Nob3dTcG90Q291bnQrJyAnK3RoaXMuX3Nob3dTcG90TWF4Q291bnQgKyAnICcrdGhpcy5fc2hvd1Nwb3RNYXhDb3VudFJlZnJlc2hUaW1lKTtcclxuICAgICAgICBpZih0aGlzLl9zaG93U3BvdENvdW50Pj10aGlzLl9zaG93U3BvdE1heENvdW50KXtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YWxsU2hvcnRjdXQoe3Nob2FEaWFsb2c6dHJ1ZX0pO1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnb3Bwb2xvZy0tLS0tLS0tLS0tIHNwb3Qg5pi+56S65qyh5pWw5aSq5aSaICcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRpbWUgLSB0aGlzLl9iZWdpbkdhbWVUaW1lIDwgdGhpcy5fc2hvd1Nwb3RTdGFydFRpbWUpe1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnb3Bwb2xvZy0tLS0tLS0tLS0tIGxvYWQgc3BvdCDlkK/liqjmuLjmiI/kuIDlrprml7bpl7TlhoXkuI3mmL7npLrmj5LlsY8nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgaWYoIXRoaXMuX2NhblNob3dTeXNTcG90KXtcclxuICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ29wcG9sb2ctLS0tLS0tLS0tLSBsb2FkIHNwb3Qgb3IgTmFpdHZlIGZhaWwg6Ze06ZqU5pyq5YiwJytzZWxmLl9zaG93U3lzU3BvdFRpbWUrJ3Ppkp8nKTtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YWxsU2hvcnRjdXQoe3Nob2FEaWFsb2c6dHJ1ZX0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLl9jYW5TaG93U3lzU3BvdCA9IHRydWU7XHJcbiAgICAgICAgfSwgMTAwMCpzZWxmLl9zaG93U3lzU3BvdFRpbWUpO1xyXG4gICAgICAgIHNlbGYuX2NhblNob3dTeXNTcG90ID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIG51bSA9IFVzZXJkZWZhdWx0LmdldEludEZvcktleSgnb3Bwb19zaG93TmF0aXZlTnVtJywwKTtcclxuICAgICAgICBVc2VyZGVmYXVsdC5zZXREYXRhRm9yS2V5KCdvcHBvX3Nob3dOYXRpdmVOdW0nLG51bSsxKTtcclxuICAgICAgICBpZih0aGlzLnNwb3RfZmlyc3RfYWQgPT0gXCJuYXRpdmVcIil7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd05hdGl2ZUJhbm5lcihmYWxzZSxmYWxzZSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1Nwb3QoZmFsc2UsZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93U3BvdEJ5UGF1c2UoKXtcclxuICAgICAgICB0aGlzLmFkZFNob3dTcG90TnVtKCk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1Nwb3RCeUJlZ2luKCl7fSxcclxuICAgIHNob3dTcG90QnlGaW5pc2goKXtcclxuICAgICAgICB0aGlzLmFkZFNob3dTcG90TnVtKCk7XHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvL25ldyBcclxuXHRuZXdKdW1wQXBwKG9iail7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxpZXlvdV9zaG93TG9nKCdvcHBvbG9nLS0tLS0tIGp1bXAgYXBrID0gJyArIG9iai5kYXRhLmFwcElkKVxyXG5cdFx0aWYodGhpcy5wbGF0Zm9ybVZlcnNpb25Db2RlPj0xMDQ0KXtcclxuICAgICAgICAgICAgcWcubmF2aWdhdGVUb01pbmlHYW1lKHtcclxuICAgICAgICAgICAgICAgIHBrZ05hbWU6IG9iai5kYXRhLmFwcElkLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihvYmouc3VjY2Vzcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5zdWNjZXNzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKXtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdH1cclxuICAgIH0sXHJcbiAgICBpbnN0YWxsU2hvcnRjdXQob2JqPXt9KXtcclxuICAgICAgICBsaWV5b3Vfc2hvd0xvZygnb3Bwb2xvZyBpbnN0YWxsU2hvcnRjdXQgY2FuU2hvd1Nob3J0Y3V0ICcpO1xyXG4gICAgICAgIHZhciB0aW1lID0gcGFyc2VJbnQoZ2V0VGltZSgpLzEwMDApO1xyXG4gICAgICAgIGlmKHRpbWUgLSB0aGlzLl9iZWdpbkdhbWVUaW1lIDwgdGhpcy5faW5zdGFsbFNob3J0Y3V0U3RhcnRUaW1lICYmICFvYmouY2FuU2hvdyl7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCdvcHBvbG9nIGluc3RhbGxTaG9ydGN1dCBjYW5TaG93U2hvcnRjdXQg5byA5aeL5pe26Ze05pyq5YiwICcrdGhpcy5faW5zdGFsbFNob3J0Y3V0U3RhcnRUaW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aW1lIC0gdGhpcy5fdXBJbnN0YWxsU2hvcnRjdXRUaW1lIDwgdGhpcy5faW5zdGFsbFNob3J0Y3V0VGltZSAmJiAhb2JqLmNhblNob3cpe1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnb3Bwb2xvZyBpbnN0YWxsU2hvcnRjdXQgY2FuU2hvd1Nob3J0Y3V0IOmXtOmalOaXtumXtOacquWIsCAnK3RoaXMuX2luc3RhbGxTaG9ydGN1dFRpbWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKCF0aGlzLmNhblNob3dTaG9ydGN1dCAmJiAhb2JqLmNhblNob3cpe1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnb3Bwb2xvZyBpbnN0YWxsU2hvcnRjdXQgY2FuU2hvd1Nob3J0Y3V0IGZhbHNlJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5iYXNlX0lzU2hlbkhlICYmICFvYmouY2FuU2hvdyl7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCdvcHBvbG9nIGluc3RhbGxTaG9ydGN1dCBzaGVuaGUgdHJ1ZScpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMucGxhdGZvcm1WZXJzaW9uQ29kZSA8IDEwNDApe1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnb3Bwb2xvZyBpbnN0YWxsU2hvcnRjdXQgdmVyc2lvbiBsb3cnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcWcuaGFzU2hvcnRjdXRJbnN0YWxsZWQoe1xyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmKHJlcyA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYob2JqLmNhbGxCYWNrX2FkZE5vZGUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouY2FsbEJhY2tfYWRkTm9kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX3VwSW5zdGFsbFNob3J0Y3V0VGltZSA9IHRpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYob2JqLnNob2FEaWFsb2cgJiYgTWF0aC5yb3VuZChzZWxmLmFuZHJvaWRWZXJzaW9uLnNwbGl0KFwiIFwiKVsxXS5zcGxpdChcIi5cIilbMF0pID49IDggJiYgIXNlbGYuaXNTeXNJbnN0YWxsU2hvcnRDdXQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93SW5zdGFsbFNob3J0Y3V0RGlhbG9nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2VsZi5zZXRPcGVyVHJhY2soe3R5cGU6MSxzdGF0ZTowfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcWcuaW5zdGFsbFNob3J0Y3V0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihvYmouc3VjY2Vzcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnN1Y2Nlc3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbGYuc2V0T3BlclRyYWNrKHt0eXBlOjEsc3RhdGU6MX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFVc2VyZGVmYXVsdC5nZXRCb29sRm9yS2V5KCdsaWV5b3VfaXNIYXZlU2hvcnRjdXQnLGZhbHNlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJkZWZhdWx0LnNldEJvb2xGb3JLZXkoJ2xpZXlvdV9pc0hhdmVTaG9ydGN1dCcsdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0T3BlclRyYWNrKHt0eXBlOjEsc3RhdGU6MX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgc2hvd01vZGFsKG9iail7XHJcbiAgICAgICAgcWcuc2hvd01vZGFsKHt0aXRsZTpvYmoudGl0bGU/b2JqLnRpdGxlOicnLGNvbnRlbnQ6b2JqLmNvbnRlbnQ/b2JqLmNvbnRlbnQ6Jycsc3VjY2VzczoocmVzKT0+e1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgIG9iai5zdWNjZXNzICYmIG9iai5zdWNjZXNzKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge1xyXG4gICAgICAgICAgICAgICAgb2JqLmZhaWwgJiYgb2JqLmZhaWwoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH19KTtcclxuICAgIH0sXHJcblx0c2hvd1RvYXN0KHRpdGxlKXtcclxuICAgICAgICBxZy5zaG93VG9hc3Qoe3RpdGxlOnRpdGxlfSk7XHJcbiAgICB9LFxyXG5cdGhpZGVUb2FzdCgpe1xyXG4gICAgICAgIHFnLmhpZGVUb2FzdCh7fSk7XHJcbiAgICB9LFxyXG5cdHNob3dMb2FkaW5nKHRpdGxlKXtcclxuICAgICAgICBxZy5zaG93TG9hZGluZyh7dGl0bGU6dGl0bGV9KTtcclxuICAgIH0sXHJcblx0aGlkZUxvYWRpbmcoKXtcclxuICAgICAgICBxZy5oaWRlTG9hZGluZyh7fSk7XHJcbiAgICB9LFxyXG4gICAgbG9hZE5hdGl2ZUFkKCl7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmKG9wcG9OYXRpdmVJZC5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuX25hdGl2ZUVtYmVkQWRbdGhpcy5zaG93TmF0aXZlRW1iZWRJbmRleF0pe1xyXG4gICAgICAgICAgICB0aGlzLl9uYXRpdmVFbWJlZEFkW3RoaXMuc2hvd05hdGl2ZUVtYmVkSW5kZXhdLmxvYWQoKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93TmF0aXZlRW1iZWRJbmRleCsrO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dOYXRpdmVFbWJlZEluZGV4ID0gdGhpcy5zaG93TmF0aXZlRW1iZWRJbmRleCVvcHBvTmF0aXZlSWQubGVuZ3RoO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpZCA9IG9wcG9OYXRpdmVJZFt0aGlzLnNob3dOYXRpdmVFbWJlZEluZGV4XTtcclxuICAgICAgICB2YXIgbmF0aXZlQWQgPSBxZy5jcmVhdGVOYXRpdmVBZCh7IFxyXG4gICAgICAgICAgICBwb3NJZDogaWRcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuX25hdGl2ZUVtYmVkQWRbdGhpcy5zaG93TmF0aXZlRW1iZWRJbmRleF0gPSBuYXRpdmVBZDtcclxuICAgICAgICB0aGlzLnNob3dOYXRpdmVFbWJlZEluZGV4Kys7XHJcbiAgICAgICAgdGhpcy5zaG93TmF0aXZlRW1iZWRJbmRleCA9IHRoaXMuc2hvd05hdGl2ZUVtYmVkSW5kZXglb3Bwb05hdGl2ZUlkLmxlbmd0aDtcclxuICAgICAgICBuYXRpdmVBZC5sb2FkKCk7XHJcbiAgICAgICAgbmF0aXZlQWQub25Mb2FkKChyZXMpID0+e1xyXG4gICAgICAgICAgICBpZihyZXMgJiYgcmVzLmFkTGlzdCAmJiByZXMuYWRMaXN0Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgbGlleW91X3Nob3dMb2coXCJvcHBvbG9nLS0tLS1uYXRpdmUgYWRsaXN0IG51bGxcIik7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zaG93TmF0aXZlRW1iZWRGYWlsTnVtKys7XHJcbiAgICAgICAgICAgICAgICBpZihzZWxmLnNob3dOYXRpdmVFbWJlZEZhaWxOdW0gPCBvcHBvTmF0aXZlSWQubGVuZ3RoKXtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmxvYWROYXRpdmVBZCgpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZi5zaG93TmF0aXZlRW1iZWRGYWlsTnVtID0gMDtcclxuXHJcbiAgICAgICAgICAgIHZhciBudW1MID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSpyZXMuYWRMaXN0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHZhciBpZCA9IHJlcy5hZExpc3RbbnVtTF0uYWRJZDtcclxuICAgICAgICAgICAgdmFyIHRpdGxlID0gcmVzLmFkTGlzdFtudW1MXS50aXRsZTsvL+W5v+WRiuagh+mimFxyXG4gICAgICAgICAgICB2YXIgZGVzYyA9IHJlcy5hZExpc3RbbnVtTF0uZGVzYzsvL+W5v+WRiuaPj+i/sFxyXG4gICAgICAgICAgICAvLyB2YXIgY2xpY2tCdG5UeHQgPSByZXMuYWRMaXN0W251bUxdLmNsaWNrQnRuVHh0Oy8v54K55Ye75oyJ6ZKu5paH5pys5o+P6L+wXHJcbiAgICAgICAgICAgIHZhciBpY29uVXJsTGlzdCA9IHJlcy5hZExpc3RbbnVtTF0uaWNvblVybExpc3Q7Ly/lub/lkYrlm75pY29uXHJcbiAgICAgICAgICAgIHZhciBpbWdVcmxMaXN0ID0gcmVzLmFkTGlzdFtudW1MXS5pbWdVcmxMaXN0Oy8v5bm/5ZGK5Zu+XHJcbiAgICAgICAgICAgIC8vIHZhciBsb2dvVXJsID0gcmVzLmFkTGlzdFtudW1MXS5sb2dvVXJsOy8v5bm/5ZGK5qCH562+5Zu+XHJcbiAgICAgICAgICAgIHNlbGYubmF0aXZlQWRFbWJlZERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBjbG9zZVNpemU6dGhpcy5zcG90X2Nsb3NlX2J1dF9zaXplLFxyXG4gICAgICAgICAgICAgICAgY2xvc2VSYW5nZTp0aGlzLnNwb3RfY2xvc2VfYnV0X3JhbmdlLFxyXG4gICAgICAgICAgICAgICAgY2xvc2VBbHBoYTp0aGlzLnNwb3RfY2xvc2VfYnV0X2FscGhhLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6dGl0bGUsXHJcbiAgICAgICAgICAgICAgICBkZXNjOmRlc2MsXHJcbiAgICAgICAgICAgICAgICBpY29uVXJsTGlzdDppY29uVXJsTGlzdCxcclxuICAgICAgICAgICAgICAgIGltZ1VybExpc3Q6aW1nVXJsTGlzdCxcclxuICAgICAgICAgICAgICAgIHJlcG9ydEFkU2hvd0NhbGxCYWNrOigpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgbmF0aXZlQWQucmVwb3J0QWRTaG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRJZDogaWRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZXBvcnRBZENsaWNrQ2FsbEJhY2s6KCk9PntcclxuICAgICAgICAgICAgICAgICAgICBuYXRpdmVBZC5yZXBvcnRBZENsaWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWRJZDogaWRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIG5hdGl2ZUFkLm9uRXJyb3IoKGVycikgPT57XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKFwib3Bwb2xvZy0tLS0tbmF0aXZlIGVycm9yOlwiK0pTT04uc3RyaW5naWZ5KGVycikpO1xyXG4gICAgICAgICAgICBzZWxmLnNob3dOYXRpdmVFbWJlZEZhaWxOdW0rKztcclxuICAgICAgICAgICAgaWYoc2VsZi5zaG93TmF0aXZlRW1iZWRGYWlsTnVtIDwgb3Bwb05hdGl2ZUlkLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxvYWROYXRpdmVBZCgpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgc2hvd05hdGl2ZUFkX3NtYWxsKG9iail7XHJcbiAgICAgICAgbGV0IG5vd1RpbWUgPSBwYXJzZUludChsaWV5b3VfZ2V0VGltZSgpLzEwMDApO1xyXG4gICAgICAgIGlmKG5vd1RpbWUgLSB0aGlzLl9iZWdpbkdhbWVUaW1lIDwgdGhpcy5fc2hvd05hdGl2ZVN0YXJ0VGltZSl7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKFwi5pi+56S6bmF0aXZl5bm/5ZGK5pe26Ze05pyq5YiwXCIrdGhpcy5fc2hvd05hdGl2ZVN0YXJ0VGltZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobm93VGltZSAtIHRoaXMuX3ByZVNob3dOYXRpdmVUaW1lIDwgdGhpcy5fc2hvd05hdGl2ZUludGVydmFsVGltZSl7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKFwi5pi+56S6bmF0aXZl5bm/5ZGK6Ze06ZqU5pe26Ze05pyq5YiwXCIrdGhpcy5fc2hvd05hdGl2ZUludGVydmFsVGltZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sb2FkTmF0aXZlQWQoKTtcclxuICAgICAgICBpZih0aGlzLm5hdGl2ZUFkRW1iZWREYXRhICYmIG9iai5ub2RlICYmIG9iai5ub2RlLmlzVmFsaWQgJiYgdGhpcy5jYW5TaG93TmF0aXZlQWQpe1xyXG4gICAgICAgICAgICBpZihjYy5maW5kKCdzaG93TmF0aXZlQWRfc21hbGwnLG9iai5ub2RlKSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9wcmVTaG93TmF0aXZlVGltZSA9IG5vd1RpbWU7XHJcbiAgICAgICAgICAgIHRoaXMubmF0aXZlQWRFbWJlZERhdGEuaW5zZXRUb3AgPSBvYmouaW5zZXRUb3A/b2JqLmluc2V0VG9wOjA7XHJcbiAgICAgICAgICAgIHRoaXMubmF0aXZlQWRFbWJlZERhdGEuaW5zZXRCb3R0b20gPSBvYmouaW5zZXRCb3R0b20/b2JqLmluc2V0Qm90dG9tOjA7XHJcbiAgICAgICAgICAgIHRoaXMubmF0aXZlQWRFbWJlZERhdGEuaW5zZXRMZWZ0ID0gb2JqLmluc2V0TGVmdD9vYmouaW5zZXRMZWZ0OjA7XHJcbiAgICAgICAgICAgIHRoaXMubmF0aXZlQWRFbWJlZERhdGEuaW5zZXRSaWdodCA9IG9iai5pbnNldFJpZ2h0P29iai5pbnNldFJpZ2h0OjA7XHJcbiAgICAgICAgICAgIHRoaXMubmF0aXZlQWRFbWJlZERhdGEuYmdQYXRoID0gb2JqLmJnUGF0aDtcclxuICAgICAgICAgICAgdGhpcy5uYXRpdmVBZEVtYmVkRGF0YS50ZXh0dXJlID0gb2JqLnRleHR1cmU7XHJcbiAgICAgICAgICAgIHRoaXMubmF0aXZlQWRFbWJlZERhdGEuYWRQYXRoID0gXCJxX2FkL25hdGl2ZUVtYmVkQWRCb3R0b20ucG5nXCI7XHJcbiAgICAgICAgICAgIHRoaXMubmF0aXZlQWRFbWJlZERhdGEuYmdPcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUFkRW1iZWREYXRhLmJnQ29sb3IgPSBjYy5jb2xvcigyNTUsMjU1LDI1NSk7XHJcbiAgICAgICAgICAgIHRoaXMubmF0aXZlQWRFbWJlZERhdGEudGl0bGVMYWJlbENvbG9yID0gb2JqLnRpdGxlQ29sb3I/b2JqLnRpdGxlQ29sb3I6Y2MuY29sb3IoNDYsNDYsNDYpO1xyXG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUFkRW1iZWREYXRhLmRlc2NMYWJlbENvbG9yID0gb2JqLmRlc2NDb2xvcj9vYmouZGVzY0NvbG9yOmNjLmNvbG9yKDQ2LDQ2LDQ2KTtcclxuICAgICAgICAgICAgdGhpcy5uYXRpdmVBZEVtYmVkRGF0YS5zY2FsZSA9IG9iai5zY2FsZTtcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSBnZXROYXRpdmVBZF9zbWFsbCh0aGlzLm5hdGl2ZUFkRW1iZWREYXRhKTtcclxuICAgICAgICAgICAgbm9kZS5uYW1lID0gXCJzaG93TmF0aXZlQWRfc21hbGxcIjtcclxuICAgICAgICAgICAgdGhpcy5zaG93TmF0aXZlSGlkZUJhbm5lcihub2RlKTtcclxuICAgICAgICAgICAgb2JqLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgc2hvd05hdGl2ZUFkX2JpZyhvYmope1xyXG4gICAgICAgIGxldCBub3dUaW1lID0gcGFyc2VJbnQobGlleW91X2dldFRpbWUoKS8xMDAwKTtcclxuICAgICAgICBpZihub3dUaW1lIC0gdGhpcy5fYmVnaW5HYW1lVGltZSA8IHRoaXMuX3Nob3dOYXRpdmVTdGFydFRpbWUpe1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZyhcIuaYvuekum5hdGl2ZeW5v+WRiuaXtumXtOacquWIsFwiK3RoaXMuX3Nob3dOYXRpdmVTdGFydFRpbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG5vd1RpbWUgLSB0aGlzLl9wcmVTaG93TmF0aXZlVGltZSA8IHRoaXMuX3Nob3dOYXRpdmVJbnRlcnZhbFRpbWUpe1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZyhcIuaYvuekum5hdGl2ZeW5v+WRiumXtOmalOaXtumXtOacquWIsFwiK3RoaXMuX3Nob3dOYXRpdmVJbnRlcnZhbFRpbWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubG9hZE5hdGl2ZUFkKCk7XHJcbiAgICAgICAgaWYodGhpcy5uYXRpdmVBZEVtYmVkRGF0YSAmJiBvYmoubm9kZSAmJiBvYmoubm9kZS5pc1ZhbGlkICYmIHRoaXMuY2FuU2hvd05hdGl2ZUFkKXtcclxuICAgICAgICAgICAgaWYoY2MuZmluZCgnc2hvd05hdGl2ZUFkX2JpZycsb2JqLm5vZGUpKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3ByZVNob3dOYXRpdmVUaW1lID0gbm93VGltZTtcclxuICAgICAgICAgICAgdGhpcy5uYXRpdmVBZEVtYmVkRGF0YS5pbnNldFRvcCA9IG9iai5pbnNldFRvcD9vYmouaW5zZXRUb3A6MDtcclxuICAgICAgICAgICAgdGhpcy5uYXRpdmVBZEVtYmVkRGF0YS5pbnNldEJvdHRvbSA9IG9iai5pbnNldEJvdHRvbT9vYmouaW5zZXRCb3R0b206MDtcclxuICAgICAgICAgICAgdGhpcy5uYXRpdmVBZEVtYmVkRGF0YS5pbnNldExlZnQgPSBvYmouaW5zZXRMZWZ0P29iai5pbnNldExlZnQ6MDtcclxuICAgICAgICAgICAgdGhpcy5uYXRpdmVBZEVtYmVkRGF0YS5pbnNldFJpZ2h0ID0gb2JqLmluc2V0UmlnaHQ/b2JqLmluc2V0UmlnaHQ6MDtcclxuICAgICAgICAgICAgdGhpcy5uYXRpdmVBZEVtYmVkRGF0YS5iZ1BhdGggPSBvYmouYmdQYXRoO1xyXG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUFkRW1iZWREYXRhLmFkUGF0aCA9IFwicV9hZC9uYXRpdmVFbWJlZEFkQm90dG9tLnBuZ1wiO1xyXG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUFkRW1iZWREYXRhLmJnT3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgdGhpcy5uYXRpdmVBZEVtYmVkRGF0YS50ZXh0dXJlID0gb2JqLnRleHR1cmU7Ly8qKioqKioqKiAqL1xyXG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUFkRW1iZWREYXRhLmJnQ29sb3IgPSBjYy5jb2xvcigyNTUsMjU1LDI1NSk7XHJcbiAgICAgICAgICAgIHRoaXMubmF0aXZlQWRFbWJlZERhdGEudGl0bGVMYWJlbENvbG9yID0gb2JqLnRpdGxlQ29sb3I/b2JqLnRpdGxlQ29sb3I6Y2MuY29sb3IoNDYsNDYsNDYpO1xyXG4gICAgICAgICAgICB0aGlzLm5hdGl2ZUFkRW1iZWREYXRhLmRlc2NMYWJlbENvbG9yID0gb2JqLmRlc2NDb2xvcj9vYmouZGVzY0NvbG9yOmNjLmNvbG9yKDQ2LDQ2LDQ2KTtcclxuICAgICAgICAgICAgdGhpcy5uYXRpdmVBZEVtYmVkRGF0YS5zY2FsZSA9IG9iai5zY2FsZTtcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSBnZXROYXRpdmVBZF9iaWcodGhpcy5uYXRpdmVBZEVtYmVkRGF0YSk7XHJcbiAgICAgICAgICAgIG5vZGUubmFtZSA9IFwic2hvd05hdGl2ZUFkX2JpZ1wiO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dOYXRpdmVIaWRlQmFubmVyKG5vZGUpO1xyXG4gICAgICAgICAgICBvYmoubm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBzaG93TmF0aXZlQWRfbG9hZChvYmope1xyXG4gICAgICAgIGlmKG9iai5jYWxsQmFjayl7XHJcbiAgICAgICAgICAgIG9iai5jYWxsQmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdGhpcy5sb2FkTmF0aXZlQWQoKTtcclxuICAgICAgICBpZih0aGlzLm5hdGl2ZUFkRW1iZWREYXRhKXtcclxuICAgICAgICAgICAgaWYob2JqLnRoZW1lID09IFwiYmxhY2tcIil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUFkRW1iZWREYXRhLmJnT3BhY2l0eSA9IDE1MDtcclxuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlQWRFbWJlZERhdGEuYmdDb2xvciA9IGNjLmNvbG9yKDAsMCwwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlQWRFbWJlZERhdGEubGFiZWxDb2xvciA9IGNjLmNvbG9yKDI1NSwyNTUsMjU1KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlQWRFbWJlZERhdGEubG9hZEJnQ29sb3IgPSBjYy5jb2xvcigyNTUsMjU1LDI1NSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUFkRW1iZWREYXRhLmxvYWRXb3JkQ29sb3IgPSBjYy5jb2xvcigwLDAsMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdGl2ZUFkRW1iZWREYXRhLnNjYWxlID0gNzIwLzYwMDtcclxuICAgICAgICAgICAgfWVsc2V7Ly8gd2hpdGVcclxuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlQWRFbWJlZERhdGEuYmdPcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVBZEVtYmVkRGF0YS5iZ0NvbG9yID0gY2MuY29sb3IoMjU1LDI1NSwyNTUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVBZEVtYmVkRGF0YS5sYWJlbENvbG9yID0gY2MuY29sb3IoNDYsNDYsNDYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYXRpdmVBZEVtYmVkRGF0YS5sb2FkQmdDb2xvciA9IGNjLmNvbG9yKDAsMCwwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlQWRFbWJlZERhdGEubG9hZFdvcmRDb2xvciA9IGNjLmNvbG9yKDI1NSwyNTUsMjU1KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmF0aXZlQWRFbWJlZERhdGEuc2NhbGUgPSA3MjAvNjAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubmF0aXZlQWRFbWJlZERhdGEubG9hZFRpbWUgPSB0aGlzLl9uYXRpdmVMb2FkRGlhbG9nVGltZTtcclxuICAgICAgICAgICAgdGhpcy5uYXRpdmVBZEVtYmVkRGF0YS5jYWxsQmFjayA9IG9iai5jYWxsQmFjaztcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSBnZXROYXRpdmVBZF9sb2FkKHRoaXMubmF0aXZlQWRFbWJlZERhdGEpO1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICBub2RlLnggPSBjYy53aW5TaXplLndpZHRoLzI7XHJcbiAgICAgICAgICAgIG5vZGUueSA9IGNjLndpblNpemUuaGVpZ2h0LzI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNob3dOYXRpdmVIaWRlQmFubmVyKG5vZGUpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZihvYmouY2FsbEJhY2spe1xyXG4gICAgICAgICAgICAgICAgb2JqLmNhbGxCYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2hvd05hdGl2ZUhpZGVCYW5uZXIobm9kZSl7XHJcbiAgICAgICAgdmFyIHNob3dNID0gZmFsc2U7XHJcbiAgICAgICAgaWYodGhpcy5tb3JlR2FtZUJhbm5lciAmJiB0aGlzLm1vcmVHYW1lQmFubmVyLmlzVmFsaWQpe1xyXG4gICAgICAgICAgICBzaG93TSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzaG93QiA9IHRoaXMuX2NhblNob3dCYW5uZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGJhc2VOb2RlanMgPSBub2RlLmFkZENvbXBvbmVudCgnbGlleW91X2Jhc2VOb2RlJyk7XHJcbiAgICAgICAgYmFzZU5vZGVqcy5lbmFibGVDYWxsQmFjayA9ICgpPT57XHJcbiAgICAgICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLmhpZGVCYW5uZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmFzZU5vZGVqcy5kZXN0cm95Q2FsbEJhY2sgPSAoKT0+e1xyXG4gICAgICAgICAgICBpZihzaG93Qil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dCYW5uZXIoKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoc2hvd00pe1xyXG4gICAgICAgICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuc2hvd01vcmVHYW1lQnlCYW5uZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0pXHJcbm1vZHVsZS5leHBvcnRzID0gT3Bwb01hbmFnZXI7XHJcblxyXG5cclxuXHJcblxyXG4iXX0=