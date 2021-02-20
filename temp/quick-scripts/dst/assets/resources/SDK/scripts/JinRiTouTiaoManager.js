
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/scripts/JinRiTouTiaoManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fb089SNV7BE6JYSfaaiY83d', 'JinRiTouTiaoManager');
// resources/SDK/scripts/JinRiTouTiaoManager.js

"use strict";

var BaseManager = require('BaseManager');

var JinRiTouTiaoManager = cc.Class({
  "extends": require('BaseManager'),
  properties: {},
  getHaveVideo: function getHaveVideo() {
    if (jinRiTouTiao_VideoId != '') {
      return true;
    }

    return false;
  },
  getSysPlatform_string: function getSysPlatform_string() {
    return 'tt';
  },
  getSysPlatform: function getSysPlatform() {
    return 8;
  },
  getVersion: function getVersion() {
    return lieyou_ttGameVersion;
  },
  vibrateShort: function vibrateShort() {
    tt.vibrateShort();
  },
  vibrateLong: function vibrateLong() {
    tt.vibrateLong();
  },
  antidirt: function antidirt() {
    var self = this;
    this.setDataForHttp(serverUrl + 'token?ai=' + jinRiTouTiao_AppId + '&sct=' + jinRiTouTiao_AppKey + '&gt=client_credential', function (response) {
      var data = JSON.parse(response);
      lieyou_showLog('------  jinritoutiao  ------ access_token = ' + data);
      self.setDataForHttp(serverUrl + 'antidirt?at=' + data.access_token);
    });
  },
  setOnlineData: function setOnlineData(data) {
    if (data.tt) {
      if (data.tt.sysShowPlayVdDialog != undefined) {
        this.sysShowPlayVdDialog = data.tt.sysShowPlayVdDialog;
      }

      if (data.tt.installShortcutIntervalTime != undefined) {
        this._installShortcutTime = Number(data.tt.installShortcutIntervalTime);
      }

      if (data.tt.serverVersion != undefined) {
        var serverVersoin = Number(data.tt.serverVersion);

        if (serverVersoin >= lieyou_ttGameVersion) {
          this.base_IsShenHe = false;
        } else {
          this.base_IsShenHe = true;
        }
      }

      if (data.tt.shareVideoTopics) {
        this.shareVideoTopics = data.tt.shareVideoTopics;
      }

      if (!data.tt.closeShortcut) {
        this.canShowShortcut = true;
      }

      var adData = {};

      if (data.tt.theme) {
        adData.theme = data.tt.theme;
      }

      if (data.tt.crossSwitch) {
        adData.crossSwitch = data.tt.crossSwitch;
      }

      if (data.tt.bizData) {
        adData.bizData = data.tt.bizData;
      }

      if (data.tt.ad_datas) {
        adData.ad_datas = data.tt.ad_datas;
      }

      if (data.tt["switch"]) {
        adData["switch"] = data.tt["switch"];
      }

      if (data.tt.shareVideoIntervalTime) {
        this._shareVideoIntervalTime = Number(data.tt.shareVideoIntervalTime);
      }

      if (data.tt.templateId) {
        this._shareVideoTemplateId = data.tt.templateId;
      }

      if (this.getSDKVersionCanUse('1.33.0') && this.platformSys != 'ios') {
        this.setAdData(adData);
      }

      this.setSwitchData(data.tt);
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
        lieyou_showLog('------error  initOnlineData + ' + error);
      }
    });
  },
  getSystemInfo: function getSystemInfo() {
    var _this = this;

    var info = tt.getSystemInfoSync();
    this.platformVersionCode = info.SDKVersion;
    this.platformSys = info.platform;
    this.androidVersion = info.system;
    this.model = info.model; // openid = res.data.uid;

    tt.getNetworkType({
      success: function success(res) {
        _this.networkType = res.networkType;
      }
    });
  },
  getLaunchOptionsSync: function getLaunchOptionsSync() {
    var data = tt.getLaunchOptionsSync();

    if (data.query) {
      console.log("lieyou----------res:" + JSON.stringify(data.query));

      if (data.query.shareId) {
        console.log("lieyou----------id:" + data.query.shareId); // lieyou_SdkManager.showToast(data.query.shareId);
        // lieyou_SdkManager.setadtrack(data.query.shareId,-100);

        lieyou_SdkManager.setOperTrack({
          type: 2,
          state: 1,
          shareId: data.query.shareId
        });
      }
    }
  },
  init: function init(obj) {
    var _this2 = this;

    this.getLaunchOptionsSync();
    this.shareVideoTopics = [];
    this.getSystemInfo();
    this.stopCanShare = true; // this._super(obj);

    BaseManager.prototype.init.call(this, obj);
    var self = this;
    this.openShare();
    this.setShareData(); // tt.getGameRecorderManager()

    this._shareVideoTemplateId = [];
    this._preShareVideoTime = 0;
    this._shareVideoIntervalTime = 30;
    this.sysShowPlayVdDialog = true;
    setTimeout(function () {
      _this2.initOnlineData();
    }, 1000);
    this.loadRewardedViedoAd();
  },
  setShareData: function setShareData() {
    //获取分享数据
    this.setDataForHttp(wxData.shareUrl, function (response) {
      wxData.shareData = JSON.parse(response);
    });
  },
  login: function login() {
    tt.login({
      success: function success(res) {
        lieyou_showLog("------  jinritoutiao  ------ login success"); // res.code

        self.setDataForHttp(serverUrl + 'login?ai=' + jinRiTouTiao_AppId + '&sct=' + jinRiTouTiao_AppKey + '&code=' + res.code);
      },
      fail: function fail(res) {
        lieyou_showLog("------  jinritoutiao  ------ login fail " + res);
      }
    });
    this.antidirt();
  },
  openShare: function openShare() {
    tt.onShareAppMessage(function (res) {
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
        query: "shareId=" + adid,
        title: _title,
        imageUrl: _url
      };
    });
  },
  share: function share(obj) {
    var id = null;

    if (this._shareVideoTemplateId.length > 0) {
      id = this._shareVideoTemplateId[Math.floor(Math.random() * this._shareVideoTemplateId.length)];
    }

    tt.shareAppMessage({
      templateId: id
    });
  },
  hideBanner: function hideBanner() {
    if (this.bannerAd) {
      this.bannerAd.hide(); // this.bannerAd = null;
    }
  },
  showBanner: function showBanner(obj) {
    if (this.moreGameBanner && this.moreGameBanner.isValid) {
      this.moreGameBanner.destroy();
      this.moreGameBanner = null;
    }

    if (jinRiTouTiao_BannerId == '') {
      return;
    }

    var self = this;

    if (this.bannerAd) {
      this.bannerAd.show();
      return;
    }

    try {
      var _tt$getSystemInfoSync = tt.getSystemInfoSync(),
          windowWidth = _tt$getSystemInfoSync.windowWidth,
          windowHeight = _tt$getSystemInfoSync.windowHeight;

      var targetBannerAdWidth = 200;

      if (obj && obj.scale) {
        targetBannerAdWidth = targetBannerAdWidth * obj.scale;
      }

      this.bannerAd = tt.createBannerAd({
        adIntervals: 30,
        adUnitId: jinRiTouTiao_BannerId,
        style: {
          width: targetBannerAdWidth
        }
      });
      this.bannerAd.show();
      this.bannerAd.onError(function (res) {
        lieyou_showLog('------  jinritoutiao  ------ banner load error' + JSON.stringify(res));
      });
      this.bannerAd.onResize(function (size) {
        console.log('onsize ' + size.height + '  ' + size.width);
        self.bannerAd.style.top = windowHeight - size.height;
        self.bannerAd.style.left = (windowWidth - size.width) / 2;
      });
    } catch (error) {
      lieyou_showLog('------  jinritoutiao  ------ banner load error2' + JSON.stringify(error));
    }
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
  loadRewardedViedoAd: function loadRewardedViedoAd() {
    var _this3 = this;

    if (jinRiTouTiao_VideoId == '') {
      return;
    }

    if (this.videoAd) {
      this.videoAd.load();
      return;
    }

    try {
      this.videoAd = tt.createRewardedVideoAd({
        adUnitId: jinRiTouTiao_VideoId
      });
      this.videoAd.load();
      this.videoAd.onError(function (res) {
        lieyou_showLog('------  jinritoutiao  ------ vd load error' + JSON.stringify(res));
        _this3.videoCallBack && _this3.videoCallBack(false);
      });
      this.videoAd.onLoad(function () {
        lieyou_showLog('jinritoutiao------ vd success');
      });
      this.videoAd.onClose(function (res) {
        if (res.isEnded) {
          lieyou_showLog('------  jinritoutiao  ------ vd play success');
          _this3.videoCallBack && _this3.videoCallBack(true);
        } else {
          lieyou_showLog('------  jinritoutiao  ------ vd play fail');
          _this3.videoCallBack && _this3.videoCallBack(false);

          _this3.showRewardedVideoAdDialog();
        }
      });
    } catch (error) {
      console.log("lieyou------" + JSON.stringify(error));
    }
  },
  showRewardedVideoAd: function showRewardedVideoAd(id, closeCallBack) {
    if (closeCallBack) this.videoCallBack = closeCallBack;
    this.videoAd && this.videoAd.show();
    this.loadRewardedViedoAd();
  },
  showSpot: function showSpot() {
    var _this4 = this;

    lieyou_showLog('------  jinritoutiao  ------ show spot');

    if (jinRiTouTiao_SpotADId == "") {
      lieyou_SdkManager.showMoreGameGrid();
      this.installShortcut();
      return;
    }

    try {
      var isToutiaio = tt.getSystemInfoSync().appName === "Toutiao"; // 插屏广告仅今日头条安卓客户端支持

      if (isToutiaio || 1) {
        lieyou_showLog('------  jinritoutiao  ------ show spot is toutiao');
        var interstitialAd = tt.createInterstitialAd({
          adUnitId: jinRiTouTiao_SpotADId
        });
        interstitialAd.load().then(function () {
          lieyou_showLog('------  jinritoutiao  ------ spot load success');
          interstitialAd.show();
        })["catch"](function (err) {
          lieyou_SdkManager.showMoreGameGrid();

          _this4.installShortcut();

          interstitialAd.destroy();
          lieyou_showLog('------  jinritoutiao  ------ spot load error' + JSON.stringify(err));
        });
        interstitialAd.onClose(function () {
          interstitialAd.destroy();
          lieyou_showLog('------  jinritoutiao  ------ spot close');
        });
      }
    } catch (error) {
      lieyou_showLog('------  jinritoutiao  ------ spot load error2' + JSON.stringify(error));
    }
  },
  showSpotByPause: function showSpotByPause() {
    this.showSpot();
  },
  showSpotByBegin: function showSpotByBegin() {
    this.showSpot();
  },
  showSpotByFinish: function showSpotByFinish() {
    this.showSpot();
  },
  beginLuPing: function beginLuPing(time, callBack) {
    var _this5 = this;

    //time >= 3 <= 120
    this.stopCanShare = true;
    this.shareCallBack = callBack;
    var self = this;

    if (this.recorderVD) {
      this.recorderVD.start({
        duration: time
      });
      return;
    }

    this.recorderVD = tt.getGameRecorderManager();
    this.recorderVD.start({
      duration: time
    });
    this.recorderVD.onError(function (err) {
      lieyou_showLog('------  jinritoutiao  ------ luping fail  ' + err.errMsg);
    });
    this.recorderVD.onInterruptionBegin(function () {
      lieyou_showLog('------  jinritoutiao  ------ begin luping   ');
    });
    this.recorderVD.onInterruptionEnd(function () {
      lieyou_showLog('------  jinritoutiao  ------ end luping   ');
    });
    this.recorderVD.onStop(function (res) {
      if (_this5.luPingNode && _this5.luPingNode.isValid) {
        _this5.luPingNode.getComponent('lieyou_tt_luPing').stop();
      }

      try {
        lieyou_showLog('------  jinritoutiao  ------ mp4 path   ' + res.videoPath + '   ' + _this5.stopCanShare);
        self.vdPath = res.videoPath;

        if (_this5.stopCanShare) {// self.shareVd(self.shareCallBack,false);
        }
      } catch (error) {}
    });
  },
  shareVd: function shareVd(callBack) {
    var isClearPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var self = this;

    if (this.vdPath && this.vdPath != '') {
      var id = null;

      if (this._shareVideoTemplateId.length > 0) {
        id = this._shareVideoTemplateId[Math.floor(Math.random() * this._shareVideoTemplateId.length)];
      }

      tt.shareAppMessage({
        query: "shareId=" + id,
        templateId: id,
        channel: "video",
        extra: {
          videoPath: this.vdPath,
          // 可替换成录屏得到的视频地址
          videoTopics: this.shareVideoTopics,
          hashtag_list: this.shareVideoTopics
        },
        success: function success() {
          if (callBack) {
            self.vdPath = '';
            callBack(1);
          }

          lieyou_showLog('------  jinritoutiao  ------ share vd success');
        },
        fail: function fail(e) {
          if (e.errMsg.search('short') != -1) {
            // self.vdPath = '';
            callBack(2);
          } else if (callBack) {
            callBack(0);
          }

          lieyou_showLog('------  jinritoutiao  ------ share vd fail ' + JSON.stringify(e));
        }
      }); // tt.shareVideo({
      //     videoPath:this.vdPath,
      //     success () {
      //         if(callBack){
      //             self.vdPath = '';
      //             callBack(1);
      //         }
      //         lieyou_showLog('------  jinritoutiao  ------ share vd success');
      //     },
      //     fail (e) {
      //         if(e.errMsg.search('short') != -1){
      //             // self.vdPath = '';
      //             callBack(2);
      //         }else if(callBack){
      //             callBack(0);
      //         }
      //         lieyou_showLog('------  jinritoutiao  ------ share vd fail ' + JSON.stringify(e));
      //     }
      // });
    } else {
      lieyou_showLog('------  jinritoutiao  ------ share no vd');

      if (callBack) {
        callBack(3);
      }
    }
  },
  pauseLuPing: function pauseLuPing() {
    tt.getGameRecorderManager().pause();
  },
  resumeLuPing: function resumeLuPing() {
    tt.getGameRecorderManager().resume();
  },
  stopLuPing: function stopLuPing(isShare) {
    this.stopCanShare = isShare;

    try {
      tt.getGameRecorderManager().stop();
    } catch (error) {}
  },
  addLuPingBtn: function addLuPingBtn(obj) {
    var self = this;
    var fNode = obj.node ? obj.node : cc.find('Canvas');
    var node = lieyou_tt_liPingPrefab();
    self.luPingNode = node;
    node.x = obj.x ? obj.x : 0;
    node.y = obj.y ? obj.y : 0;
    node.getComponent('lieyou_tt_luPing').setColor(obj.color ? obj.color : 'black');

    if (obj.callBack) {
      node.getComponent('lieyou_tt_luPing').setData(obj.callBack);
    }

    fNode.addChild(node);
  },
  setDataForHttp: function setDataForHttp(url, fun) {
    //提交数据到服务器 无返回值 
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
        var response = xhr.responseText;

        if (response == '-1') {} else if (response == '-2') {} else {
          if (fun) {
            fun(response);
          }
        }
      }
    };

    xhr.open("GET", url, true);
    xhr.send();
  },
  newJumpApp: function newJumpApp(obj) {
    if (!this.getSDKVersionCanUse('1.33.0')) {
      return;
    }

    if (obj.success) {
      obj.success();
    } // 打开互跳弹窗


    tt.showMoreGamesModal({
      appLaunchOptions: [],
      success: function success(res) {
        lieyou_showLog("toutiao---   success", res.errMsg);
      },
      fail: function fail(res) {
        lieyou_showLog("toutiao---   fail", res.errMsg);
      }
    });
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
  showShareVideoDialog: function showShareVideoDialog(callBack) {
    var time = lieyou_getTime() / 1000;

    if (time - this._preShareVideoTime < this._shareVideoIntervalTime) {
      callBack(4);
      return;
    }

    this._preShareVideoTime = time;
    var fNode = cc.director.getScene();
    var node = lieyou_tt_ShareDialogPrefab();
    fNode.addChild(node);
    node.x = lieyou_SdkManager.sdkWinSize.width / 2;
    node.y = lieyou_SdkManager.sdkWinSize.height / 2;
    node.callFun = callBack;
  },
  getScreenshot: function getScreenshot() {
    var nodeIamge = new cc.Node();
    var canvas = cc.game.canvas;
    var width = canvas.width;
    var height = canvas.height;
    canvas.toTempFilePath({
      x: 0,
      y: 0,
      width: width,
      height: height,
      destWidth: cc.winSize.width,
      destHeight: cc.winSize.height,
      success: function success(res) {
        cc.loader.load(res.tempFilePath, function (err, res) {
          if (res) {
            nodeIamge.addComponent(cc.Sprite);
            nodeIamge.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(res);
          }
        });
      }
    });
    return nodeIamge;
  },
  saveImageToPhotosAlbum: function saveImageToPhotosAlbum() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var canvas = cc.game.canvas;
    var screenWidth = canvas.width; //screenWidth

    var screenHeight = canvas.height; //tt.getSystemInfoSync().screenHeight

    var winSize = cc.winSize;
    var node = obj.node;
    var worPos_1 = node.convertToWorldSpaceAR(cc.v2(-node.width / 2, node.height / 2));
    var worPos_2 = node.convertToWorldSpaceAR(cc.v2(node.width / 2, -node.height / 2));
    var x = worPos_1.x / winSize.width * screenWidth;
    var y = (1 - worPos_1.y / winSize.height) * screenHeight;
    var width = Math.abs(worPos_1.x - worPos_2.x) / winSize.width * screenWidth;
    var height = Math.abs(worPos_1.y - worPos_2.y) / winSize.height * screenHeight;
    canvas.toTempFilePath({
      x: x,
      y: y,
      width: width,
      height: height,
      destWidth: width,
      destHeight: height,
      success: function success(res) {
        console.log(res.tempFilePath);
        tt.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: function success(res) {
            lieyou_SdkManager.showToast("保存成功");
          },
          fail: function fail(res) {
            lieyou_SdkManager.showToast("保存失败");
          }
        });
      }
    });
  },
  installShortcut: function installShortcut() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    lieyou_showLog(' installShortcut canShowShortcut ');
    var time = parseInt(getTime() / 1000);

    if (time - this._beginGameTime < this._installShortcutStartTime && !obj.canShow) {
      lieyou_showLog(' installShortcut canShowShortcut 开始时间未到 ' + this._installShortcutStartTime);
      return;
    }

    if (time - this._upInstallShortcutTime < this._installShortcutTime && !obj.canShow) {
      lieyou_showLog(' installShortcut canShowShortcut 间隔时间未到 ' + this._installShortcutTime);
      return;
    }

    this._upInstallShortcutTime = time;
    tt.showFavoriteGuide({
      type: "bar",
      content: "收藏小游戏，通关快人一步",
      position: "bottom",
      success: function success(res) {
        lieyou_showLog("引导组件展示成功");
      },
      fail: function fail(res) {
        lieyou_showLog("引导组件展示失败");
      }
    });
  },
  showRewardedVideoAdDialog: function showRewardedVideoAdDialog() {
    if (!this.sysShowPlayVdDialog || this.base_IsShenHe || lieyou_Userdefault.getBoolForKey("lieyou_already_tt_showVideoDialog", false)) {
      this.videoCallBack && this.videoCallBack(false);
    } else {
      lieyou_Userdefault.setBoolForKey("lieyou_already_tt_showVideoDialog", true);
      showTTRewardedVideoAdDialog();
    }
  }
});
module.exports = JinRiTouTiaoManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXHNjcmlwdHNcXEppblJpVG91VGlhb01hbmFnZXIuanMiXSwibmFtZXMiOlsiQmFzZU1hbmFnZXIiLCJyZXF1aXJlIiwiSmluUmlUb3VUaWFvTWFuYWdlciIsImNjIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiZ2V0SGF2ZVZpZGVvIiwiamluUmlUb3VUaWFvX1ZpZGVvSWQiLCJnZXRTeXNQbGF0Zm9ybV9zdHJpbmciLCJnZXRTeXNQbGF0Zm9ybSIsImdldFZlcnNpb24iLCJsaWV5b3VfdHRHYW1lVmVyc2lvbiIsInZpYnJhdGVTaG9ydCIsInR0IiwidmlicmF0ZUxvbmciLCJhbnRpZGlydCIsInNlbGYiLCJzZXREYXRhRm9ySHR0cCIsInNlcnZlclVybCIsImppblJpVG91VGlhb19BcHBJZCIsImppblJpVG91VGlhb19BcHBLZXkiLCJyZXNwb25zZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJsaWV5b3Vfc2hvd0xvZyIsImFjY2Vzc190b2tlbiIsInNldE9ubGluZURhdGEiLCJzeXNTaG93UGxheVZkRGlhbG9nIiwidW5kZWZpbmVkIiwiaW5zdGFsbFNob3J0Y3V0SW50ZXJ2YWxUaW1lIiwiX2luc3RhbGxTaG9ydGN1dFRpbWUiLCJOdW1iZXIiLCJzZXJ2ZXJWZXJzaW9uIiwic2VydmVyVmVyc29pbiIsImJhc2VfSXNTaGVuSGUiLCJzaGFyZVZpZGVvVG9waWNzIiwiY2xvc2VTaG9ydGN1dCIsImNhblNob3dTaG9ydGN1dCIsImFkRGF0YSIsInRoZW1lIiwiY3Jvc3NTd2l0Y2giLCJiaXpEYXRhIiwiYWRfZGF0YXMiLCJzaGFyZVZpZGVvSW50ZXJ2YWxUaW1lIiwiX3NoYXJlVmlkZW9JbnRlcnZhbFRpbWUiLCJ0ZW1wbGF0ZUlkIiwiX3NoYXJlVmlkZW9UZW1wbGF0ZUlkIiwiZ2V0U0RLVmVyc2lvbkNhblVzZSIsInBsYXRmb3JtU3lzIiwic2V0QWREYXRhIiwic2V0U3dpdGNoRGF0YSIsImluaXRPbmxpbmVEYXRhIiwib3Bwb0dldE9ubGluZURhdGFJZCIsImxpZXlvdV9TZGtNYW5hZ2VyIiwic2hvd1RvYXN0IiwidmVyc2lvbiIsIlVzZXJkZWZhdWx0IiwiZ2V0SW50Rm9yS2V5IiwidGltZSIsInNwIiwibm93VGltZSIsImdldFRpbWUiLCJnZXRTdHJpbmdGb3JLZXkiLCJkYXRhVmVyc2lvbiIsInVybCIsImdldExvZ2luVXJsIiwianNvbkQiLCJzZXJ2ZXJfZGF0YV92ZXJzaW9uIiwic2V0RGF0YUZvcktleSIsImlzTW9yZUluZm8iLCJzdHJpbmdpZnkiLCJlcnJvciIsImdldFN5c3RlbUluZm8iLCJpbmZvIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJwbGF0Zm9ybVZlcnNpb25Db2RlIiwiU0RLVmVyc2lvbiIsInBsYXRmb3JtIiwiYW5kcm9pZFZlcnNpb24iLCJzeXN0ZW0iLCJtb2RlbCIsImdldE5ldHdvcmtUeXBlIiwic3VjY2VzcyIsInJlcyIsIm5ldHdvcmtUeXBlIiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJzaGFyZUlkIiwic2V0T3BlclRyYWNrIiwidHlwZSIsInN0YXRlIiwiaW5pdCIsIm9iaiIsInN0b3BDYW5TaGFyZSIsInByb3RvdHlwZSIsImNhbGwiLCJvcGVuU2hhcmUiLCJzZXRTaGFyZURhdGEiLCJfcHJlU2hhcmVWaWRlb1RpbWUiLCJzZXRUaW1lb3V0IiwibG9hZFJld2FyZGVkVmllZG9BZCIsInd4RGF0YSIsInNoYXJlVXJsIiwic2hhcmVEYXRhIiwibG9naW4iLCJjb2RlIiwiZmFpbCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwiYWRpZCIsIl90aXRsZSIsIl91cmwiLCJsZW5ndGgiLCJpIiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwiaXRlbSIsImlkIiwidGl0bGUiLCJpbWciLCJpbWFnZVVybCIsInNoYXJlIiwiZmxvb3IiLCJzaGFyZUFwcE1lc3NhZ2UiLCJoaWRlQmFubmVyIiwiYmFubmVyQWQiLCJoaWRlIiwic2hvd0Jhbm5lciIsIm1vcmVHYW1lQmFubmVyIiwiaXNWYWxpZCIsImRlc3Ryb3kiLCJqaW5SaVRvdVRpYW9fQmFubmVySWQiLCJzaG93Iiwid2luZG93V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJ0YXJnZXRCYW5uZXJBZFdpZHRoIiwic2NhbGUiLCJjcmVhdGVCYW5uZXJBZCIsImFkSW50ZXJ2YWxzIiwiYWRVbml0SWQiLCJzdHlsZSIsIndpZHRoIiwib25FcnJvciIsIm9uUmVzaXplIiwic2l6ZSIsImhlaWdodCIsInRvcCIsImxlZnQiLCJzaG93QmFubmVyQ3VzdG9tIiwic2hvd0Jhbm5lckJ5VG9wIiwic2hvd0Jhbm5lckJ5Qm90dG9tIiwidmlkZW9BZCIsImxvYWQiLCJjcmVhdGVSZXdhcmRlZFZpZGVvQWQiLCJ2aWRlb0NhbGxCYWNrIiwib25Mb2FkIiwib25DbG9zZSIsImlzRW5kZWQiLCJzaG93UmV3YXJkZWRWaWRlb0FkRGlhbG9nIiwic2hvd1Jld2FyZGVkVmlkZW9BZCIsImNsb3NlQ2FsbEJhY2siLCJzaG93U3BvdCIsImppblJpVG91VGlhb19TcG90QURJZCIsInNob3dNb3JlR2FtZUdyaWQiLCJpbnN0YWxsU2hvcnRjdXQiLCJpc1RvdXRpYWlvIiwiYXBwTmFtZSIsImludGVyc3RpdGlhbEFkIiwiY3JlYXRlSW50ZXJzdGl0aWFsQWQiLCJ0aGVuIiwiZXJyIiwic2hvd1Nwb3RCeVBhdXNlIiwic2hvd1Nwb3RCeUJlZ2luIiwic2hvd1Nwb3RCeUZpbmlzaCIsImJlZ2luTHVQaW5nIiwiY2FsbEJhY2siLCJzaGFyZUNhbGxCYWNrIiwicmVjb3JkZXJWRCIsInN0YXJ0IiwiZHVyYXRpb24iLCJnZXRHYW1lUmVjb3JkZXJNYW5hZ2VyIiwiZXJyTXNnIiwib25JbnRlcnJ1cHRpb25CZWdpbiIsIm9uSW50ZXJydXB0aW9uRW5kIiwib25TdG9wIiwibHVQaW5nTm9kZSIsImdldENvbXBvbmVudCIsInN0b3AiLCJ2aWRlb1BhdGgiLCJ2ZFBhdGgiLCJzaGFyZVZkIiwiaXNDbGVhclBhdGgiLCJjaGFubmVsIiwiZXh0cmEiLCJ2aWRlb1RvcGljcyIsImhhc2h0YWdfbGlzdCIsImUiLCJzZWFyY2giLCJwYXVzZUx1UGluZyIsInBhdXNlIiwicmVzdW1lTHVQaW5nIiwicmVzdW1lIiwic3RvcEx1UGluZyIsImlzU2hhcmUiLCJhZGRMdVBpbmdCdG4iLCJmTm9kZSIsIm5vZGUiLCJmaW5kIiwibGlleW91X3R0X2xpUGluZ1ByZWZhYiIsIngiLCJ5Iiwic2V0Q29sb3IiLCJjb2xvciIsInNldERhdGEiLCJhZGRDaGlsZCIsImZ1biIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlVGV4dCIsIm9wZW4iLCJzZW5kIiwibmV3SnVtcEFwcCIsInNob3dNb3JlR2FtZXNNb2RhbCIsImFwcExhdW5jaE9wdGlvbnMiLCJzdHIiLCJzcGxpdCIsInN0cjEiLCJzaG93U2hhcmVWaWRlb0RpYWxvZyIsImxpZXlvdV9nZXRUaW1lIiwiZGlyZWN0b3IiLCJnZXRTY2VuZSIsImxpZXlvdV90dF9TaGFyZURpYWxvZ1ByZWZhYiIsInNka1dpblNpemUiLCJjYWxsRnVuIiwiZ2V0U2NyZWVuc2hvdCIsIm5vZGVJYW1nZSIsIk5vZGUiLCJjYW52YXMiLCJnYW1lIiwidG9UZW1wRmlsZVBhdGgiLCJkZXN0V2lkdGgiLCJ3aW5TaXplIiwiZGVzdEhlaWdodCIsImxvYWRlciIsInRlbXBGaWxlUGF0aCIsImFkZENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtIiwic2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJ3b3JQb3NfMSIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsInYyIiwid29yUG9zXzIiLCJhYnMiLCJmaWxlUGF0aCIsIl9iZWdpbkdhbWVUaW1lIiwiX2luc3RhbGxTaG9ydGN1dFN0YXJ0VGltZSIsImNhblNob3ciLCJfdXBJbnN0YWxsU2hvcnRjdXRUaW1lIiwic2hvd0Zhdm9yaXRlR3VpZGUiLCJjb250ZW50IiwicG9zaXRpb24iLCJsaWV5b3VfVXNlcmRlZmF1bHQiLCJnZXRCb29sRm9yS2V5Iiwic2V0Qm9vbEZvcktleSIsInNob3dUVFJld2FyZGVkVmlkZW9BZERpYWxvZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsV0FBVyxHQUFHQyxPQUFPLENBQUMsYUFBRCxDQUEzQjs7QUFDQSxJQUFJQyxtQkFBbUIsR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDbEMsYUFBU0gsT0FBTyxDQUFDLGFBQUQsQ0FEa0I7QUFFbENJLEVBQUFBLFVBQVUsRUFBQyxFQUZ1QjtBQUkvQkMsRUFBQUEsWUFKK0IsMEJBSWpCO0FBQ1YsUUFBR0Msb0JBQW9CLElBQUksRUFBM0IsRUFBOEI7QUFDMUIsYUFBTyxJQUFQO0FBQ0g7O0FBQ0QsV0FBTyxLQUFQO0FBQ0gsR0FUOEI7QUFVL0JDLEVBQUFBLHFCQVYrQixtQ0FVUjtBQUN6QixXQUFPLElBQVA7QUFDRyxHQVo4QjtBQWEvQkMsRUFBQUEsY0FiK0IsNEJBYWY7QUFDbEIsV0FBTyxDQUFQO0FBQ0EsR0FmaUM7QUFnQi9CQyxFQUFBQSxVQWhCK0Isd0JBZ0JuQjtBQUNSLFdBQU9DLG9CQUFQO0FBQ0gsR0FsQjhCO0FBbUIvQkMsRUFBQUEsWUFuQitCLDBCQW1CakI7QUFDVkMsSUFBQUEsRUFBRSxDQUFDRCxZQUFIO0FBQ0gsR0FyQjhCO0FBc0IvQkUsRUFBQUEsV0F0QitCLHlCQXNCbEI7QUFDVEQsSUFBQUEsRUFBRSxDQUFDQyxXQUFIO0FBQ0gsR0F4QjhCO0FBeUIvQkMsRUFBQUEsUUF6QitCLHNCQXlCckI7QUFDTixRQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBLFNBQUtDLGNBQUwsQ0FBb0JDLFNBQVMsR0FBQyxXQUFWLEdBQXNCQyxrQkFBdEIsR0FBeUMsT0FBekMsR0FBaURDLG1CQUFqRCxHQUFxRSx1QkFBekYsRUFBaUgsVUFBU0MsUUFBVCxFQUFrQjtBQUMv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LElBQTlCO0FBQ0E5QyxJQUFBQSxFQUFFLENBQUMrUCxpQkFBSCxDQUFxQjtBQUNqQmhMLE1BQUFBLElBQUksRUFBRSxLQURXO0FBRWpCaUwsTUFBQUEsT0FBTyxFQUFFLGNBRlE7QUFHakJDLE1BQUFBLFFBQVEsRUFBRSxRQUhPO0FBSWpCM0wsTUFBQUEsT0FKaUIsbUJBSVRDLEdBSlMsRUFJSjtBQUNUM0QsUUFBQUEsY0FBYyxDQUFDLFVBQUQsQ0FBZDtBQUNILE9BTmdCO0FBT2pCb0YsTUFBQUEsSUFQaUIsZ0JBT1p6QixHQVBZLEVBT1A7QUFDTjNELFFBQUFBLGNBQWMsQ0FBQyxVQUFELENBQWQ7QUFDSDtBQVRnQixLQUFyQjtBQVdILEdBNW9COEI7QUE4b0IvQndJLEVBQUFBLHlCQTlvQitCLHVDQThvQko7QUFDdkIsUUFBRyxDQUFDLEtBQUtySSxtQkFBTixJQUE2QixLQUFLTyxhQUFsQyxJQUFtRDRPLGtCQUFrQixDQUFDQyxhQUFuQixDQUFpQyxtQ0FBakMsRUFBcUUsS0FBckUsQ0FBdEQsRUFBa0k7QUFDOUgsV0FBS25ILGFBQUwsSUFBb0IsS0FBS0EsYUFBTCxDQUFtQixLQUFuQixDQUFwQjtBQUNILEtBRkQsTUFFSztBQUNEa0gsTUFBQUEsa0JBQWtCLENBQUNFLGFBQW5CLENBQWlDLG1DQUFqQyxFQUFxRSxJQUFyRTtBQUNBQyxNQUFBQSwyQkFBMkI7QUFDOUI7QUFDSjtBQXJwQjhCLENBQVQsQ0FBMUI7QUF3cEJBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJsUixtQkFBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jb25zdCBCYXNlTWFuYWdlciA9IHJlcXVpcmUoJ0Jhc2VNYW5hZ2VyJyk7XHJcbmxldCBKaW5SaVRvdVRpYW9NYW5hZ2VyID0gY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IHJlcXVpcmUoJ0Jhc2VNYW5hZ2VyJyksXHJcblx0cHJvcGVydGllczp7XHJcbiAgICB9LFxyXG4gICAgZ2V0SGF2ZVZpZGVvKCl7XHJcbiAgICAgICAgaWYoamluUmlUb3VUaWFvX1ZpZGVvSWQgIT0gJycpe1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGdldFN5c1BsYXRmb3JtX3N0cmluZygpe1xyXG5cdFx0cmV0dXJuICd0dCc7XHJcbiAgICB9LFxyXG4gICAgZ2V0U3lzUGxhdGZvcm0oKXtcclxuXHRcdHJldHVybiA4O1xyXG5cdH0sXHJcbiAgICBnZXRWZXJzaW9uKCl7XHJcbiAgICAgICAgcmV0dXJuIGxpZXlvdV90dEdhbWVWZXJzaW9uO1xyXG4gICAgfSxcclxuICAgIHZpYnJhdGVTaG9ydCgpe1xyXG4gICAgICAgIHR0LnZpYnJhdGVTaG9ydCgpO1xyXG4gICAgfSxcclxuICAgIHZpYnJhdGVMb25nKCl7XHJcbiAgICAgICAgdHQudmlicmF0ZUxvbmcoKTtcclxuICAgIH0sXHJcbiAgICBhbnRpZGlydCgpe1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnNldERhdGFGb3JIdHRwKHNlcnZlclVybCsndG9rZW4/YWk9JytqaW5SaVRvdVRpYW9fQXBwSWQrJyZzY3Q9JytqaW5SaVRvdVRpYW9fQXBwS2V5KycmZ3Q9Y2xpZW50X2NyZWRlbnRpYWwnLGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJy0tLS0tLSAgamlucml0b3V0aWFvICAtLS0tLS0gYWNjZXNzX3Rva2VuID0gJytkYXRhKTtcclxuICAgICAgICAgICAgc2VsZi5zZXREYXRhRm9ySHR0cChzZXJ2ZXJVcmwrJ2FudGlkaXJ0P2F0PScrZGF0YS5hY2Nlc3NfdG9rZW4pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc2V0T25saW5lRGF0YShkYXRhKXtcclxuICAgICAgICBpZihkYXRhLnR0KXtcclxuICAgICAgICAgICAgaWYoZGF0YS50dC5zeXNTaG93UGxheVZkRGlhbG9nIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zeXNTaG93UGxheVZkRGlhbG9nID0gZGF0YS50dC5zeXNTaG93UGxheVZkRGlhbG9nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGEudHQuaW5zdGFsbFNob3J0Y3V0SW50ZXJ2YWxUaW1lIT11bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5zdGFsbFNob3J0Y3V0VGltZSA9IE51bWJlcihkYXRhLnR0Lmluc3RhbGxTaG9ydGN1dEludGVydmFsVGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS50dC5zZXJ2ZXJWZXJzaW9uICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VydmVyVmVyc29pbiA9IE51bWJlcihkYXRhLnR0LnNlcnZlclZlcnNpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYoc2VydmVyVmVyc29pbiA+PSBsaWV5b3VfdHRHYW1lVmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZV9Jc1NoZW5IZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlX0lzU2hlbkhlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihkYXRhLnR0LnNoYXJlVmlkZW9Ub3BpY3Mpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZVZpZGVvVG9waWNzID0gZGF0YS50dC5zaGFyZVZpZGVvVG9waWNzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCFkYXRhLnR0LmNsb3NlU2hvcnRjdXQpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5TaG93U2hvcnRjdXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBhZERhdGEgPSB7fTtcclxuICAgICAgICAgICAgaWYoZGF0YS50dC50aGVtZSl7XHJcbiAgICAgICAgICAgICAgICBhZERhdGEudGhlbWUgPSBkYXRhLnR0LnRoZW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGEudHQuY3Jvc3NTd2l0Y2gpe1xyXG4gICAgICAgICAgICAgICAgYWREYXRhLmNyb3NzU3dpdGNoID0gZGF0YS50dC5jcm9zc1N3aXRjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihkYXRhLnR0LmJpekRhdGEpe1xyXG4gICAgICAgICAgICAgICAgYWREYXRhLmJpekRhdGEgPSBkYXRhLnR0LmJpekRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS50dC5hZF9kYXRhcyl7XHJcbiAgICAgICAgICAgICAgICBhZERhdGEuYWRfZGF0YXMgPSBkYXRhLnR0LmFkX2RhdGFzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGEudHQuc3dpdGNoKXtcclxuICAgICAgICAgICAgICAgIGFkRGF0YS5zd2l0Y2ggPSBkYXRhLnR0LnN3aXRjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihkYXRhLnR0LnNoYXJlVmlkZW9JbnRlcnZhbFRpbWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2hhcmVWaWRlb0ludGVydmFsVGltZSA9IE51bWJlcihkYXRhLnR0LnNoYXJlVmlkZW9JbnRlcnZhbFRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGEudHQudGVtcGxhdGVJZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zaGFyZVZpZGVvVGVtcGxhdGVJZCA9IGRhdGEudHQudGVtcGxhdGVJZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYodGhpcy5nZXRTREtWZXJzaW9uQ2FuVXNlKCcxLjMzLjAnKSAmJiB0aGlzLnBsYXRmb3JtU3lzICE9ICdpb3MnKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWREYXRhKGFkRGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRTd2l0Y2hEYXRhKGRhdGEudHQpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBpbml0T25saW5lRGF0YSgpe1xyXG4gICAgICAgIGlmKG9wcG9HZXRPbmxpbmVEYXRhSWQgPT0gJycpe1xyXG4gICAgICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93VG9hc3QoJ+ayoeacieWhq+WGmXFnSUQnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIHZlcnNpb24gPSBVc2VyZGVmYXVsdC5nZXRJbnRGb3JLZXkoJ3Nka19vcHBvX29ubGluZV92ZXJzaW9uJywwKTtcclxuICAgICAgICB2YXIgdGltZSA9IFVzZXJkZWZhdWx0LmdldEludEZvcktleSgnc2RrX29wcG9fb25saW5lX3RpbWUnLDApO1xyXG4gICAgICAgIHZhciBzcCA9IFVzZXJkZWZhdWx0LmdldEludEZvcktleSgnc2RrX29wcG9fb25saW5lX3NwJywwKTtcclxuICAgICAgICB2YXIgbm93VGltZSA9IGdldFRpbWUoKS8xMDAwO1xyXG4gICAgICAgIGlmKG5vd1RpbWUgLSB0aW1lIDwgc3AgJiYgbm93VGltZSA+IHRpbWUpe1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBVc2VyZGVmYXVsdC5nZXRTdHJpbmdGb3JLZXkoJ3Nka19vcHBvX29ubGluZV9kYXRhJywnJyk7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHNlbGYuc2V0T25saW5lRGF0YShkYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGFWZXJzaW9uID0gdmVyc2lvbjtcclxuICAgICAgICB2YXIgdXJsID0gdGhpcy5nZXRMb2dpblVybCgpO1xyXG5cdFx0dGhpcy5zZXREYXRhRm9ySHR0cCh1cmwsZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG5cdFx0XHRpZihyZXNwb25zZSA9PSBcIlwiKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB2YXIganNvbkQgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIGlmKGpzb25ELnNlcnZlcl9kYXRhX3ZlcnNpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJkZWZhdWx0LnNldERhdGFGb3JLZXkoJ3Nka19vcHBvX29ubGluZV92ZXJzaW9uJyxqc29uRC5zZXJ2ZXJfZGF0YV92ZXJzaW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGpzb25ELmlzTW9yZUluZm8gIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmlzTW9yZUluZm8gPSBqc29uRC5pc01vcmVJbmZvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoanNvbkQuc3Ape1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJkZWZhdWx0LnNldERhdGFGb3JLZXkoJ3Nka19vcHBvX29ubGluZV9zcCcsanNvbkQuc3ApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgVXNlcmRlZmF1bHQuc2V0RGF0YUZvcktleSgnc2RrX29wcG9fb25saW5lX3RpbWUnLG5vd1RpbWUpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihqc29uRC5zZXJ2ZXJfZGF0YV92ZXJzaW9uID09IHZlcnNpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZSA9IFVzZXJkZWZhdWx0LmdldFN0cmluZ0ZvcktleSgnc2RrX29wcG9fb25saW5lX2RhdGEnLCcnKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0T25saW5lRGF0YShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2UpLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZighZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2VsZi5zZXRPbmxpbmVEYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgVXNlcmRlZmF1bHQuc2V0RGF0YUZvcktleSgnc2RrX29wcG9fb25saW5lX2RhdGEnLEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnLS0tLS0tZXJyb3IgIGluaXRPbmxpbmVEYXRhICsgJyArIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0fSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0U3lzdGVtSW5mbygpe1xyXG4gICAgICAgIHZhciBpbmZvID0gdHQuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuICAgICAgICB0aGlzLnBsYXRmb3JtVmVyc2lvbkNvZGUgPSBpbmZvLlNES1ZlcnNpb247XHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybVN5cyA9IGluZm8ucGxhdGZvcm07XHJcbiAgICAgICAgdGhpcy5hbmRyb2lkVmVyc2lvbiA9IGluZm8uc3lzdGVtO1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBpbmZvLm1vZGVsO1xyXG4gICAgICAgIC8vIG9wZW5pZCA9IHJlcy5kYXRhLnVpZDtcclxuICAgICAgICB0dC5nZXROZXR3b3JrVHlwZSh7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6KHJlcyk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMubmV0d29ya1R5cGUgPSByZXMubmV0d29ya1R5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXRMYXVuY2hPcHRpb25zU3luYygpe1xyXG4gICAgICAgIGxldCBkYXRhID0gdHQuZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKTtcclxuICAgICAgICBpZihkYXRhLnF1ZXJ5KXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsaWV5b3UtLS0tLS0tLS0tcmVzOlwiK0pTT04uc3RyaW5naWZ5KGRhdGEucXVlcnkpKTtcclxuICAgICAgICAgICAgaWYoZGF0YS5xdWVyeS5zaGFyZUlkKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibGlleW91LS0tLS0tLS0tLWlkOlwiK2RhdGEucXVlcnkuc2hhcmVJZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBsaWV5b3VfU2RrTWFuYWdlci5zaG93VG9hc3QoZGF0YS5xdWVyeS5zaGFyZUlkKTtcclxuICAgICAgICAgICAgICAgIC8vIGxpZXlvdV9TZGtNYW5hZ2VyLnNldGFkdHJhY2soZGF0YS5xdWVyeS5zaGFyZUlkLC0xMDApO1xyXG4gICAgICAgICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuc2V0T3BlclRyYWNrKHt0eXBlOjIsc3RhdGU6MSxzaGFyZUlkOmRhdGEucXVlcnkuc2hhcmVJZH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGluaXQ6IGZ1bmN0aW9uKG9iail7XHJcbiAgICAgICAgdGhpcy5nZXRMYXVuY2hPcHRpb25zU3luYygpO1xyXG4gICAgICAgIHRoaXMuc2hhcmVWaWRlb1RvcGljcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZ2V0U3lzdGVtSW5mbygpO1xyXG4gICAgICAgIHRoaXMuc3RvcENhblNoYXJlID0gdHJ1ZTtcclxuICAgICAgICAvLyB0aGlzLl9zdXBlcihvYmopO1xyXG4gICAgICAgIEJhc2VNYW5hZ2VyLnByb3RvdHlwZS5pbml0LmNhbGwodGhpcyxvYmopO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLm9wZW5TaGFyZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0U2hhcmVEYXRhKCk7XHJcbiAgICAgICAgLy8gdHQuZ2V0R2FtZVJlY29yZGVyTWFuYWdlcigpXHJcbiAgICAgICAgdGhpcy5fc2hhcmVWaWRlb1RlbXBsYXRlSWQgPSBbXTtcclxuICAgICAgICB0aGlzLl9wcmVTaGFyZVZpZGVvVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5fc2hhcmVWaWRlb0ludGVydmFsVGltZSA9IDMwO1xyXG4gICAgICAgIHRoaXMuc3lzU2hvd1BsYXlWZERpYWxvZyA9IHRydWU7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdE9ubGluZURhdGEoKTsgICAgXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgdGhpcy5sb2FkUmV3YXJkZWRWaWVkb0FkKCk7XHJcbiAgICB9LFxyXG4gICAgc2V0U2hhcmVEYXRhOiBmdW5jdGlvbigpIHtcclxuXHRcdC8v6I635Y+W5YiG5Lqr5pWw5o2uXHJcblx0XHR0aGlzLnNldERhdGFGb3JIdHRwKHd4RGF0YS5zaGFyZVVybCxmdW5jdGlvbihyZXNwb25zZSl7XHJcbiAgICAgICAgICAgIHd4RGF0YS5zaGFyZURhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuXHRcdH0pO1xyXG5cdH0sXHJcbiAgICBsb2dpbigpe1xyXG4gICAgICAgIHR0LmxvZ2luKHtcclxuICAgICAgICAgICAgc3VjY2VzcyAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZyhcIi0tLS0tLSAgamlucml0b3V0aWFvICAtLS0tLS0gbG9naW4gc3VjY2Vzc1wiKTtcclxuICAgICAgICAgICAgICAgIC8vIHJlcy5jb2RlXHJcbiAgICAgICAgICAgICAgICBzZWxmLnNldERhdGFGb3JIdHRwKHNlcnZlclVybCsnbG9naW4/YWk9JytqaW5SaVRvdVRpYW9fQXBwSWQrJyZzY3Q9JytqaW5SaVRvdVRpYW9fQXBwS2V5KycmY29kZT0nK3Jlcy5jb2RlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbCAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZyhcIi0tLS0tLSAgamlucml0b3V0aWFvICAtLS0tLS0gbG9naW4gZmFpbCBcIiArIHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmFudGlkaXJ0KCk7XHJcbiAgICB9LFxyXG4gICAgb3BlblNoYXJlKCl7XHJcbiAgICAgICAgdHQub25TaGFyZUFwcE1lc3NhZ2UoZnVuY3Rpb24gKHJlcyl7XHJcbiAgICAgICAgICAgIHZhciBhZGlkID0gMDtcclxuICAgICAgICAgICAgdmFyIF90aXRsZSA9IFwi5aW9546p55qE5ri45oiP77yM5b+r5p2l5LiA6LW3546p5ZCnXCI7XHJcbiAgICAgICAgICAgIHZhciBfdXJsID0gXCJodHRwczovL3Jlcy5pZ2FtZTU4LmNvbS93eHh5eC9jb21tb20vc2hhcmVJY29uLnBuZ1wiO1xyXG4gICAgICAgICAgICBpZih3eERhdGEuc2hhcmVEYXRhLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgdmFyIGkgPSBwYXJzZUludChNYXRoLnJhbmRvbSgpICogd3hEYXRhLnNoYXJlRGF0YS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB3eERhdGEuc2hhcmVEYXRhW2ldLml0ZW07XHJcbiAgICAgICAgICAgICAgICB2YXIgcmFuZG9tID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGFkaWQgPSBkYXRhW3JhbmRvbV0uaWQ7XHJcbiAgICAgICAgICAgICAgICBfdGl0bGUgPSBkYXRhW3JhbmRvbV0udGl0bGU7XHJcbiAgICAgICAgICAgICAgICBfdXJsID0gZGF0YVtyYW5kb21dLmltZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcXVlcnk6IFwic2hhcmVJZD1cIithZGlkLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IF90aXRsZSxcclxuICAgICAgICAgICAgICAgIGltYWdlVXJsOiBfdXJsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzaGFyZShvYmope1xyXG4gICAgICAgIGxldCBpZCA9IG51bGw7XHJcbiAgICAgICAgaWYodGhpcy5fc2hhcmVWaWRlb1RlbXBsYXRlSWQubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGlkID0gdGhpcy5fc2hhcmVWaWRlb1RlbXBsYXRlSWRbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKnRoaXMuX3NoYXJlVmlkZW9UZW1wbGF0ZUlkLmxlbmd0aCldXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHR0LnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlSWQ6aWQsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgaGlkZUJhbm5lcigpe1xyXG4gICAgICAgIGlmKHRoaXMuYmFubmVyQWQpe1xyXG4gICAgICAgICAgICB0aGlzLmJhbm5lckFkLmhpZGUoKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5iYW5uZXJBZCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNob3dCYW5uZXIob2JqKXtcclxuICAgICAgICBpZih0aGlzLm1vcmVHYW1lQmFubmVyICYmIHRoaXMubW9yZUdhbWVCYW5uZXIuaXNWYWxpZCl7XHJcbiAgICAgICAgICAgIHRoaXMubW9yZUdhbWVCYW5uZXIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vcmVHYW1lQmFubmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoamluUmlUb3VUaWFvX0Jhbm5lcklkID09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmKHRoaXMuYmFubmVyQWQpe1xyXG4gICAgICAgICAgICB0aGlzLmJhbm5lckFkLnNob3coKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCB7IHdpbmRvd1dpZHRoLCB3aW5kb3dIZWlnaHQgfSA9IHR0LmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRCYW5uZXJBZFdpZHRoID0gMjAwO1xyXG4gICAgICAgICAgICBpZihvYmogJiYgb2JqLnNjYWxlKXtcclxuICAgICAgICAgICAgICAgIHRhcmdldEJhbm5lckFkV2lkdGggPSB0YXJnZXRCYW5uZXJBZFdpZHRoKm9iai5zY2FsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmJhbm5lckFkID0gdHQuY3JlYXRlQmFubmVyQWQoe1xyXG4gICAgICAgICAgICAgICAgYWRJbnRlcnZhbHM6MzAsXHJcbiAgICAgICAgICAgICAgICBhZFVuaXRJZDogamluUmlUb3VUaWFvX0Jhbm5lcklkLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGFyZ2V0QmFubmVyQWRXaWR0aCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmJhbm5lckFkLnNob3coKTsgXHJcbiAgICAgICAgICAgIHRoaXMuYmFubmVyQWQub25FcnJvcigocmVzKSA9PntcclxuICAgICAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCctLS0tLS0gIGppbnJpdG91dGlhbyAgLS0tLS0tIGJhbm5lciBsb2FkIGVycm9yJyArIEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmJhbm5lckFkLm9uUmVzaXplKHNpemUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ29uc2l6ZSAnICsgc2l6ZS5oZWlnaHQgKyAnICAnICsgc2l6ZS53aWR0aCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmJhbm5lckFkLnN0eWxlLnRvcCA9IHdpbmRvd0hlaWdodCAtIHNpemUuaGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgc2VsZi5iYW5uZXJBZC5zdHlsZS5sZWZ0ID0gKHdpbmRvd1dpZHRoIC0gc2l6ZS53aWR0aCkgLyAyO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnLS0tLS0tICBqaW5yaXRvdXRpYW8gIC0tLS0tLSBiYW5uZXIgbG9hZCBlcnJvcjInICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgc2hvd0Jhbm5lckN1c3RvbShvYmope1xyXG4gICAgICAgIHRoaXMuc2hvd0Jhbm5lcihvYmopO1xyXG4gICAgfSxcclxuICAgIHNob3dCYW5uZXJCeVRvcChpZCl7XHJcbiAgICAgICAgdGhpcy5zaG93QmFubmVyKHt9KTtcclxuICAgIH0sXHJcbiAgICBzaG93QmFubmVyQnlCb3R0b20oaWQpe1xyXG4gICAgICAgIHRoaXMuc2hvd0Jhbm5lcih7fSk7XHJcbiAgICB9LFxyXG4gICAgbG9hZFJld2FyZGVkVmllZG9BZCgpe1xyXG4gICAgICAgIGlmKGppblJpVG91VGlhb19WaWRlb0lkID09ICcnKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudmlkZW9BZCkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvQWQubG9hZCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BZCA9IHR0LmNyZWF0ZVJld2FyZGVkVmlkZW9BZCh7XHJcbiAgICAgICAgICAgICAgICBhZFVuaXRJZDpqaW5SaVRvdVRpYW9fVmlkZW9JZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BZC5sb2FkKCk7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BZC5vbkVycm9yKChyZXMpID0+e1xyXG4gICAgICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJy0tLS0tLSAgamlucml0b3V0aWFvICAtLS0tLS0gdmQgbG9hZCBlcnJvcicgKyBKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlkZW9DYWxsQmFjayYmdGhpcy52aWRlb0NhbGxCYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy52aWRlb0FkLm9uTG9hZCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnamlucml0b3V0aWFvLS0tLS0tIHZkIHN1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9BZC5vbkNsb3NlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmlzRW5kZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnLS0tLS0tICBqaW5yaXRvdXRpYW8gIC0tLS0tLSB2ZCBwbGF5IHN1Y2Nlc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZpZGVvQ2FsbEJhY2smJnRoaXMudmlkZW9DYWxsQmFjayh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCctLS0tLS0gIGppbnJpdG91dGlhbyAgLS0tLS0tIHZkIHBsYXkgZmFpbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlkZW9DYWxsQmFjayYmdGhpcy52aWRlb0NhbGxCYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dSZXdhcmRlZFZpZGVvQWREaWFsb2coKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsaWV5b3UtLS0tLS1cIitKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93UmV3YXJkZWRWaWRlb0FkKGlkLGNsb3NlQ2FsbEJhY2spe1xyXG4gICAgICAgIGlmKGNsb3NlQ2FsbEJhY2spXHJcbiAgICAgICAgICAgIHRoaXMudmlkZW9DYWxsQmFjayA9IGNsb3NlQ2FsbEJhY2s7XHJcbiAgICAgICAgdGhpcy52aWRlb0FkJiZ0aGlzLnZpZGVvQWQuc2hvdygpO1xyXG4gICAgICAgIHRoaXMubG9hZFJld2FyZGVkVmllZG9BZCgpO1xyXG4gICAgfSxcclxuICAgIHNob3dTcG90KCl7XHJcbiAgICAgICAgbGlleW91X3Nob3dMb2coJy0tLS0tLSAgamlucml0b3V0aWFvICAtLS0tLS0gc2hvdyBzcG90Jyk7XHJcbiAgICAgICAgaWYoamluUmlUb3VUaWFvX1Nwb3RBRElkID09IFwiXCIpe1xyXG4gICAgICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93TW9yZUdhbWVHcmlkKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFsbFNob3J0Y3V0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgaXNUb3V0aWFpbyA9IHR0LmdldFN5c3RlbUluZm9TeW5jKCkuYXBwTmFtZSA9PT0gXCJUb3V0aWFvXCI7XHJcbiAgICAgICAgICAgIC8vIOaPkuWxj+W5v+WRiuS7heS7iuaXpeWktOadoeWuieWNk+WuouaIt+err+aUr+aMgVxyXG4gICAgICAgICAgICBpZiAoaXNUb3V0aWFpbyB8fCAxKSB7XHJcbiAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnLS0tLS0tICBqaW5yaXRvdXRpYW8gIC0tLS0tLSBzaG93IHNwb3QgaXMgdG91dGlhbycpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGludGVyc3RpdGlhbEFkID0gdHQuY3JlYXRlSW50ZXJzdGl0aWFsQWQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFkVW5pdElkOiBqaW5SaVRvdVRpYW9fU3BvdEFESWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaW50ZXJzdGl0aWFsQWQubG9hZCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCctLS0tLS0gIGppbnJpdG91dGlhbyAgLS0tLS0tIHNwb3QgbG9hZCBzdWNjZXNzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJzdGl0aWFsQWQuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dNb3JlR2FtZUdyaWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbGxTaG9ydGN1dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGludGVyc3RpdGlhbEFkLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnLS0tLS0tICBqaW5yaXRvdXRpYW8gIC0tLS0tLSBzcG90IGxvYWQgZXJyb3InICsgSlNPTi5zdHJpbmdpZnkoZXJyKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGludGVyc3RpdGlhbEFkLm9uQ2xvc2UoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcnN0aXRpYWxBZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJy0tLS0tLSAgamlucml0b3V0aWFvICAtLS0tLS0gc3BvdCBjbG9zZScpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnLS0tLS0tICBqaW5yaXRvdXRpYW8gIC0tLS0tLSBzcG90IGxvYWQgZXJyb3IyJyArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNob3dTcG90QnlQYXVzZSgpe1xyXG4gICAgICAgIHRoaXMuc2hvd1Nwb3QoKTtcclxuICAgIH0sXHJcbiAgICBzaG93U3BvdEJ5QmVnaW4oKXtcclxuICAgICAgICB0aGlzLnNob3dTcG90KCk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1Nwb3RCeUZpbmlzaCgpe1xyXG4gICAgICAgIHRoaXMuc2hvd1Nwb3QoKTtcclxuICAgIH0sXHJcbiAgICBiZWdpbkx1UGluZyh0aW1lLGNhbGxCYWNrKXsvL3RpbWUgPj0gMyA8PSAxMjBcclxuICAgICAgICB0aGlzLnN0b3BDYW5TaGFyZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zaGFyZUNhbGxCYWNrID0gY2FsbEJhY2s7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmICh0aGlzLnJlY29yZGVyVkQpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWNvcmRlclZELnN0YXJ0KHsgZHVyYXRpb246IHRpbWUgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZWNvcmRlclZEID0gdHQuZ2V0R2FtZVJlY29yZGVyTWFuYWdlcigpO1xyXG4gICAgICAgIHRoaXMucmVjb3JkZXJWRC5zdGFydCh7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOnRpbWVcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlY29yZGVyVkQub25FcnJvcihmdW5jdGlvbihlcnIpe1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnLS0tLS0tICBqaW5yaXRvdXRpYW8gIC0tLS0tLSBsdXBpbmcgZmFpbCAgJytlcnIuZXJyTXNnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlY29yZGVyVkQub25JbnRlcnJ1cHRpb25CZWdpbihmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnLS0tLS0tICBqaW5yaXRvdXRpYW8gIC0tLS0tLSBiZWdpbiBsdXBpbmcgICAnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlY29yZGVyVkQub25JbnRlcnJ1cHRpb25FbmQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJy0tLS0tLSAgamlucml0b3V0aWFvICAtLS0tLS0gZW5kIGx1cGluZyAgICcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnJlY29yZGVyVkQub25TdG9wKHJlcyA9PntcclxuICAgICAgICAgICAgaWYodGhpcy5sdVBpbmdOb2RlICYmIHRoaXMubHVQaW5nTm9kZS5pc1ZhbGlkKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubHVQaW5nTm9kZS5nZXRDb21wb25lbnQoJ2xpZXlvdV90dF9sdVBpbmcnKS5zdG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCctLS0tLS0gIGppbnJpdG91dGlhbyAgLS0tLS0tIG1wNCBwYXRoICAgJytyZXMudmlkZW9QYXRoICsgJyAgICcgK3RoaXMuc3RvcENhblNoYXJlKTtcclxuICAgICAgICAgICAgICAgIHNlbGYudmRQYXRoID0gcmVzLnZpZGVvUGF0aDtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RvcENhblNoYXJlKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzZWxmLnNoYXJlVmQoc2VsZi5zaGFyZUNhbGxCYWNrLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBzaGFyZVZkKGNhbGxCYWNrLGlzQ2xlYXJQYXRoID0gdHJ1ZSl7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmKHRoaXMudmRQYXRoICYmIHRoaXMudmRQYXRoICE9ICcnKXtcclxuICAgICAgICAgICAgbGV0IGlkID0gbnVsbDtcclxuICAgICAgICAgICAgaWYodGhpcy5fc2hhcmVWaWRlb1RlbXBsYXRlSWQubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICBpZCA9IHRoaXMuX3NoYXJlVmlkZW9UZW1wbGF0ZUlkW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSp0aGlzLl9zaGFyZVZpZGVvVGVtcGxhdGVJZC5sZW5ndGgpXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHR0LnNoYXJlQXBwTWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICBxdWVyeTogXCJzaGFyZUlkPVwiK2lkLFxyXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVJZDppZCxcclxuICAgICAgICAgICAgICAgIGNoYW5uZWw6IFwidmlkZW9cIixcclxuICAgICAgICAgICAgICAgIGV4dHJhOiB7XHJcbiAgICAgICAgICAgICAgICAgIHZpZGVvUGF0aDogdGhpcy52ZFBhdGgsIC8vIOWPr+abv+aNouaIkOW9leWxj+W+l+WIsOeahOinhumikeWcsOWdgFxyXG4gICAgICAgICAgICAgICAgICB2aWRlb1RvcGljczogdGhpcy5zaGFyZVZpZGVvVG9waWNzLFxyXG4gICAgICAgICAgICAgICAgICBoYXNodGFnX2xpc3Q6IHRoaXMuc2hhcmVWaWRlb1RvcGljc1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoY2FsbEJhY2spe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnZkUGF0aCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsQmFjaygxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJy0tLS0tLSAgamlucml0b3V0aWFvICAtLS0tLS0gc2hhcmUgdmQgc3VjY2VzcycpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWwgKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihlLmVyck1zZy5zZWFyY2goJ3Nob3J0JykgIT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzZWxmLnZkUGF0aCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsQmFjaygyKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihjYWxsQmFjayl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxCYWNrKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnLS0tLS0tICBqaW5yaXRvdXRpYW8gIC0tLS0tLSBzaGFyZSB2ZCBmYWlsICcgKyBKU09OLnN0cmluZ2lmeShlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIHR0LnNoYXJlVmlkZW8oe1xyXG4gICAgICAgICAgICAvLyAgICAgdmlkZW9QYXRoOnRoaXMudmRQYXRoLFxyXG4gICAgICAgICAgICAvLyAgICAgc3VjY2VzcyAoKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYoY2FsbEJhY2spe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBzZWxmLnZkUGF0aCA9ICcnO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBjYWxsQmFjaygxKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbGlleW91X3Nob3dMb2coJy0tLS0tLSAgamlucml0b3V0aWFvICAtLS0tLS0gc2hhcmUgdmQgc3VjY2VzcycpO1xyXG4gICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgLy8gICAgIGZhaWwgKGUpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZihlLmVyck1zZy5zZWFyY2goJ3Nob3J0JykgIT0gLTEpe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAvLyBzZWxmLnZkUGF0aCA9ICcnO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBjYWxsQmFjaygyKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICB9ZWxzZSBpZihjYWxsQmFjayl7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNhbGxCYWNrKDApO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgICAgICBsaWV5b3Vfc2hvd0xvZygnLS0tLS0tICBqaW5yaXRvdXRpYW8gIC0tLS0tLSBzaGFyZSB2ZCBmYWlsICcgKyBKU09OLnN0cmluZ2lmeShlKSk7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnLS0tLS0tICBqaW5yaXRvdXRpYW8gIC0tLS0tLSBzaGFyZSBubyB2ZCcpO1xyXG4gICAgICAgICAgICBpZihjYWxsQmFjayl7XHJcbiAgICAgICAgICAgICAgICBjYWxsQmFjaygzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwYXVzZUx1UGluZygpe1xyXG4gICAgICAgIHR0LmdldEdhbWVSZWNvcmRlck1hbmFnZXIoKS5wYXVzZSgpO1xyXG4gICAgfSxcclxuICAgIHJlc3VtZUx1UGluZygpe1xyXG4gICAgICAgIHR0LmdldEdhbWVSZWNvcmRlck1hbmFnZXIoKS5yZXN1bWUoKTtcclxuICAgIH0sXHJcbiAgICBzdG9wTHVQaW5nKGlzU2hhcmUpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc3RvcENhblNoYXJlID0gaXNTaGFyZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0dC5nZXRHYW1lUmVjb3JkZXJNYW5hZ2VyKCkuc3RvcCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0sXHJcblxyXG4gICAgYWRkTHVQaW5nQnRuKG9iail7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBmTm9kZSA9IG9iai5ub2RlP29iai5ub2RlOmNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBub2RlID0gbGlleW91X3R0X2xpUGluZ1ByZWZhYigpOyBcclxuICAgICAgICBzZWxmLmx1UGluZ05vZGUgPSBub2RlO1xyXG4gICAgICAgIG5vZGUueCA9IG9iai54P29iai54OjA7XHJcbiAgICAgICAgbm9kZS55ID0gb2JqLnk/b2JqLnk6MDtcclxuICAgICAgICBub2RlLmdldENvbXBvbmVudCgnbGlleW91X3R0X2x1UGluZycpLnNldENvbG9yKG9iai5jb2xvcj9vYmouY29sb3I6J2JsYWNrJyk7XHJcbiAgICAgICAgaWYob2JqLmNhbGxCYWNrKXtcclxuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoJ2xpZXlvdV90dF9sdVBpbmcnKS5zZXREYXRhKG9iai5jYWxsQmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZOb2RlLmFkZENoaWxkKG5vZGUpOyAgXHJcbiAgICB9LFxyXG5cclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgc2V0RGF0YUZvckh0dHA6IGZ1bmN0aW9uKHVybCxmdW4pe1xyXG5cdFx0Ly/mj5DkuqTmlbDmja7liLDmnI3liqHlmagg5peg6L+U5Zue5YC8IFxyXG5cdFx0dmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCA0MDApKSB7XHJcblx0XHRcdFx0dmFyIHJlc3BvbnNlID0geGhyLnJlc3BvbnNlVGV4dDtcclxuXHRcdFx0XHRpZihyZXNwb25zZT09Jy0xJyl7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2UgaWYocmVzcG9uc2U9PSctMicpe1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNle1xyXG5cdFx0XHRcdFx0aWYoZnVuKXtcclxuXHRcdFx0XHRcdFx0ZnVuKHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHR4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG5cdFx0eGhyLnNlbmQoKTtcclxuICAgIH0sXHJcbiAgICBcclxuXHJcbiAgICBuZXdKdW1wQXBwKG9iail7XHJcbiAgICAgICAgaWYoIXRoaXMuZ2V0U0RLVmVyc2lvbkNhblVzZSgnMS4zMy4wJykpe1xyXG4gICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYob2JqLnN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgICBvYmouc3VjY2VzcygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDmiZPlvIDkupLot7PlvLnnqpdcclxuICAgICAgICB0dC5zaG93TW9yZUdhbWVzTW9kYWwoe1xyXG4gICAgICAgICAgICBhcHBMYXVuY2hPcHRpb25zOiBbXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZyhcInRvdXRpYW8tLS0gICBzdWNjZXNzXCIsIHJlcy5lcnJNc2cpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgICAgICAgICAgbGlleW91X3Nob3dMb2coXCJ0b3V0aWFvLS0tICAgZmFpbFwiLCByZXMuZXJyTXNnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBnZXRTREtWZXJzaW9uQ2FuVXNlOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdHZhciB2ZXJzaW9uID0gdGhpcy5wbGF0Zm9ybVZlcnNpb25Db2RlO1xyXG5cdFx0dmFyIHN0ciA9IGRhdGEuc3BsaXQoXCIuXCIpO1xyXG5cdFx0dmFyIHN0cjEgPSB2ZXJzaW9uLnNwbGl0KFwiLlwiKTtcclxuXHRcdGZvcih2YXIgaSA9IDA7aTwzO2krKykge1xyXG5cdFx0XHRpZihwYXJzZUludChzdHIxW2ldKTxwYXJzZUludChzdHJbaV0pKSB7ICAgXHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9ZWxzZSBpZihwYXJzZUludChzdHIxW2ldKT5wYXJzZUludChzdHJbaV0pKSB7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHNob3dTaGFyZVZpZGVvRGlhbG9nKGNhbGxCYWNrKXtcclxuICAgICAgICB2YXIgdGltZSA9IGxpZXlvdV9nZXRUaW1lKCkvMTAwMDtcclxuICAgICAgICBpZih0aW1lIC0gdGhpcy5fcHJlU2hhcmVWaWRlb1RpbWUgPCB0aGlzLl9zaGFyZVZpZGVvSW50ZXJ2YWxUaW1lKXtcclxuICAgICAgICAgICAgY2FsbEJhY2soNCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcHJlU2hhcmVWaWRlb1RpbWUgPSB0aW1lO1xyXG4gICAgICAgIHZhciBmTm9kZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBsaWV5b3VfdHRfU2hhcmVEaWFsb2dQcmVmYWIoKTtcclxuICAgICAgICBmTm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICBub2RlLnggPSBsaWV5b3VfU2RrTWFuYWdlci5zZGtXaW5TaXplLndpZHRoLzI7XHJcbiAgICAgICAgbm9kZS55ID0gbGlleW91X1Nka01hbmFnZXIuc2RrV2luU2l6ZS5oZWlnaHQvMjtcclxuICAgICAgICBub2RlLmNhbGxGdW4gPSBjYWxsQmFjaztcclxuICAgIH0sXHJcbiAgICBnZXRTY3JlZW5zaG90KCl7XHJcbiAgICAgICAgbGV0IG5vZGVJYW1nZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGNjLmdhbWUuY2FudmFzO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IGNhbnZhcy53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuICAgICAgICBjYW52YXMudG9UZW1wRmlsZVBhdGgoe1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgICAgICB3aWR0aDogd2lkdGgsXHJcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxyXG4gICAgICAgICAgICBkZXN0V2lkdGg6IGNjLndpblNpemUud2lkdGgsXHJcbiAgICAgICAgICAgIGRlc3RIZWlnaHQ6IGNjLndpblNpemUuaGVpZ2h0LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZChyZXMudGVtcEZpbGVQYXRoLChlcnIscmVzKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJYW1nZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlSWFtZ2UuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG5cdFx0cmV0dXJuIG5vZGVJYW1nZTtcclxuICAgIH0sXHJcbiAgICBzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtKG9iaiA9IHt9KXtcclxuICAgICAgICBsZXQgY2FudmFzID0gY2MuZ2FtZS5jYW52YXM7XHJcbiAgICAgICAgbGV0IHNjcmVlbldpZHRoID0gY2FudmFzLndpZHRoOy8vc2NyZWVuV2lkdGhcclxuICAgICAgICBsZXQgc2NyZWVuSGVpZ2h0ID0gY2FudmFzLmhlaWdodDsvL3R0LmdldFN5c3RlbUluZm9TeW5jKCkuc2NyZWVuSGVpZ2h0XHJcbiAgICAgICAgbGV0IHdpblNpemUgPSBjYy53aW5TaXplO1xyXG4gICAgICAgIGxldCBub2RlID0gb2JqLm5vZGU7XHJcbiAgICAgICAgbGV0IHdvclBvc18xID0gbm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoLW5vZGUud2lkdGgvMiwgbm9kZS5oZWlnaHQvMikpO1xyXG4gICAgICAgIGxldCB3b3JQb3NfMiA9IG5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKG5vZGUud2lkdGgvMiwgLW5vZGUuaGVpZ2h0LzIpKTtcclxuICAgICAgICBsZXQgeCA9IHdvclBvc18xLngvd2luU2l6ZS53aWR0aCpzY3JlZW5XaWR0aDtcclxuICAgICAgICBsZXQgeSA9ICgxLXdvclBvc18xLnkvd2luU2l6ZS5oZWlnaHQpKnNjcmVlbkhlaWdodDtcclxuICAgICAgICBsZXQgd2lkdGggPSBNYXRoLmFicyh3b3JQb3NfMS54LXdvclBvc18yLngpL3dpblNpemUud2lkdGgqc2NyZWVuV2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IE1hdGguYWJzKHdvclBvc18xLnktd29yUG9zXzIueSkvd2luU2l6ZS5oZWlnaHQqc2NyZWVuSGVpZ2h0O1xyXG4gICAgICAgIGNhbnZhcy50b1RlbXBGaWxlUGF0aCh7XHJcbiAgICAgICAgICAgIHg6IHgsXHJcbiAgICAgICAgICAgIHk6IHksXHJcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcclxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQsXHJcbiAgICAgICAgICAgIGRlc3RXaWR0aDogd2lkdGgsXHJcbiAgICAgICAgICAgIGRlc3RIZWlnaHQ6IGhlaWdodCxcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy50ZW1wRmlsZVBhdGgpO1xyXG4gICAgICAgICAgICAgIHR0LnNhdmVJbWFnZVRvUGhvdG9zQWxidW0oe1xyXG4gICAgICAgICAgICAgICAgZmlsZVBhdGg6IHJlcy50ZW1wRmlsZVBhdGgsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93VG9hc3QoXCLkv53lrZjmiJDlip9cIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5zaG93VG9hc3QoXCLkv53lrZjlpLHotKVcIik7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgaW5zdGFsbFNob3J0Y3V0KG9iaj17fSl7XHJcbiAgICAgICAgbGlleW91X3Nob3dMb2coJyBpbnN0YWxsU2hvcnRjdXQgY2FuU2hvd1Nob3J0Y3V0ICcpO1xyXG4gICAgICAgIHZhciB0aW1lID0gcGFyc2VJbnQoZ2V0VGltZSgpLzEwMDApO1xyXG4gICAgICAgIGlmKHRpbWUgLSB0aGlzLl9iZWdpbkdhbWVUaW1lIDwgdGhpcy5faW5zdGFsbFNob3J0Y3V0U3RhcnRUaW1lICYmICFvYmouY2FuU2hvdyl7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCcgaW5zdGFsbFNob3J0Y3V0IGNhblNob3dTaG9ydGN1dCDlvIDlp4vml7bpl7TmnKrliLAgJyt0aGlzLl9pbnN0YWxsU2hvcnRjdXRTdGFydFRpbWUpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRpbWUgLSB0aGlzLl91cEluc3RhbGxTaG9ydGN1dFRpbWUgPCB0aGlzLl9pbnN0YWxsU2hvcnRjdXRUaW1lICYmICFvYmouY2FuU2hvdyl7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCcgaW5zdGFsbFNob3J0Y3V0IGNhblNob3dTaG9ydGN1dCDpl7TpmpTml7bpl7TmnKrliLAgJyt0aGlzLl9pbnN0YWxsU2hvcnRjdXRUaW1lKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fdXBJbnN0YWxsU2hvcnRjdXRUaW1lID0gdGltZTtcclxuICAgICAgICB0dC5zaG93RmF2b3JpdGVHdWlkZSh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiYmFyXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwi5pS26JeP5bCP5ri45oiP77yM6YCa5YWz5b+r5Lq65LiA5q2lXCIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImJvdHRvbVwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgbGlleW91X3Nob3dMb2coXCLlvJXlr7znu4Tku7blsZXnpLrmiJDlip9cIik7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZhaWwocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZyhcIuW8leWvvOe7hOS7tuWxleekuuWksei0pVwiKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgc2hvd1Jld2FyZGVkVmlkZW9BZERpYWxvZygpe1xyXG4gICAgICAgIGlmKCF0aGlzLnN5c1Nob3dQbGF5VmREaWFsb2cgfHwgdGhpcy5iYXNlX0lzU2hlbkhlIHx8IGxpZXlvdV9Vc2VyZGVmYXVsdC5nZXRCb29sRm9yS2V5KFwibGlleW91X2FscmVhZHlfdHRfc2hvd1ZpZGVvRGlhbG9nXCIsZmFsc2UpKXtcclxuICAgICAgICAgICAgdGhpcy52aWRlb0NhbGxCYWNrJiZ0aGlzLnZpZGVvQ2FsbEJhY2soZmFsc2UpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsaWV5b3VfVXNlcmRlZmF1bHQuc2V0Qm9vbEZvcktleShcImxpZXlvdV9hbHJlYWR5X3R0X3Nob3dWaWRlb0RpYWxvZ1wiLHRydWUpO1xyXG4gICAgICAgICAgICBzaG93VFRSZXdhcmRlZFZpZGVvQWREaWFsb2coKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufSlcclxubW9kdWxlLmV4cG9ydHMgPSBKaW5SaVRvdVRpYW9NYW5hZ2VyO1xyXG5cclxuXHJcblxyXG5cclxuIl19