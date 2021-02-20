
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/scripts/WxManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a30ebwmq9VLnKP0qLADt+bB', 'WxManager');
// resources/SDK/scripts/WxManager.js

"use strict";

/**
 * 世界排行 后台 appid openid 用户头像 用户昵称 分数
 * 入口获取来源信息 1 后台 appid openid scene 来源appid 来源路径
 * 退出获取游戏时长
 * 分享来源（谁分享的）
 * wx.triggerGC()
 * wx.openCustomerServiceConversation(Object object)
 * 系统粘贴  wx.setClipboardData({data:'data'}); 有提示
 * wx.onMemoryWarning(function callback)
 * FeedbackButton wx.createFeedbackButton(Object object)
 * 
 * 页面 名字 序号 游戏名 用户id 成功||取消 后台
 * 
 * wx.onUserCaptureScreen(CALLBACK) 截屏 小程序的
 * 视频广告 banner广告 失败原因 后台 视频||banner appid openid yemian type
 */

/**
 * 世界排行 appid（string 微信id） openid（string 用户id） 用户头像（string 头像链接）  用户昵称（string） 分数（int）
游戏推广 页面 名字（string 自己微信id） 序号（int） 游戏名（string 跳转微信id） 用户id（string 用户id） 成功||取消（int 1||0）
入口获取来源信息  appid（string 自己微信id） openid（string 用户id） scene（int ） 来源appid（int 来源信息）
视频广告 banner广告 失败原因  视频||banner（int 0||1） appid（string 自己微信id） openid（string 用户id） 页面（string 场景） type（int）

场景值	scene场景				appId 含义
1020	公众号 profile 页相关小程序列表		来源公众号
1035	公众号自定义菜单			来源公众号
1036	App 分享消息卡片			来源App
1037	小程序打开小程序			来源小程序
1038	从另一个小程序返回			来源小程序
1043	公众号模板消息			来源公众号

type
1000	后端接口调用失败
1001	参数错误
1002	广告单元无效
1003	内部错误
1004	无合适的广告
1005	广告组件审核中
1006	广告组件被驳回
1007	广告组件被封禁
1008	广告单元已关闭
 */
var BaseManager = require('BaseManager');

window.canExperienceGame = 0; //是否可以体验游戏 可在线控制

window.wxServerVersion = 0; //版本 可在线控制

window.wxJumpBtnHaveMove = 1; // 可在线控制

window.wxShareFailTips = '通讯失败'; // 可在线控制

window.wxJumpShowBannerDelayTime = 1.5; // 可在线控制

var WxManager = cc.Class({
  "extends": require('BaseManager'),
  properties: {
    already: false,
    haveGetAuthorize: false,
    banner: null,
    gameClubButton: null,
    bannerTimeOut: -1,
    shareOnShow: false,
    isOnceShare: true,
    shareCallBack: null,
    shareBegTime: 0,
    _shareQuery: '' //分享统计

  },
  isOpen: function isOpen(key) {
    if (key == KEY_IS_SHENHE) {
      return !getCanShare();
    }

    return false;
  },
  getVersion: function getVersion() {
    return wxGameVersion;
  },
  setOnlineData: function setOnlineData(data) {
    if (data.wx) {
      if (data.wx.showMoreGameOrGrid) {
        this.showMoreGameOrGridType = parseInt(data.wx.showMoreGameOrGrid);
      }

      if (data.wx.gridAdTheme) {
        this.gridAdTheme = data.wx.gridAdTheme;
      }

      if (data.wx.serverVersion != undefined) {
        var serverVersoin = Number(data.wx.serverVersion);
        wxServerVersion = parseInt(data.wx.serverVersion);

        if (serverVersoin >= wxGameVersion) {
          this.base_IsShenHe = false;
        } else {
          this.base_IsShenHe = true;
        }
      }

      var adData = {};

      if (data.wx.theme) {
        adData.theme = data.wx.theme;
      }

      if (data.wx.crossSwitch) {
        adData.crossSwitch = data.wx.crossSwitch;
      }

      if (data.wx.bizData) {
        adData.bizData = data.wx.bizData;
      }

      if (data.wx.ad_datas) {
        adData.ad_datas = data.wx.ad_datas;
      }

      if (data.wx["switch"]) {
        adData["switch"] = data.wx["switch"];
      }

      if (this.getSDKVersionCanUse('2.2.0')) {
        this.setAdData(adData);
      }

      this.setSwitchData(data.wx);
    }
  },
  initOnlineData: function initOnlineData() {
    if (oppoGetOnlineDataId == '') {
      lieyou_SdkManager.showToast('没有填写qgID');
      return;
    }

    var self = this;
    var version = Userdefault.getIntForKey('sdk_wx_online_version', 0);
    var time = Userdefault.getIntForKey('sdk_wx_online_time', 0);
    var sp = Userdefault.getIntForKey('sdk_wx_online_sp', 0);
    var nowTime = getTime() / 1000;

    if (nowTime - time < sp && nowTime > time) {
      var response = Userdefault.getStringForKey('sdk_wx_online_data', '');
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
          Userdefault.setDataForKey('sdk_wx_online_sp', jsonD.sp);
        }

        Userdefault.setDataForKey('sdk_wx_online_time', nowTime);

        if (jsonD.server_data_version == version) {
          var response = Userdefault.getStringForKey('sdk_wx_online_data', '');
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
          Userdefault.setDataForKey('sdk_wx_online_version', jsonD.server_data_version);
        }

        Userdefault.setDataForKey('sdk_wx_online_data', JSON.stringify(data));
      } catch (error) {
        lieyou_showLog('wxlog------error  initOnlineData + ' + error);
      }
    });
  },
  getSystemInfo: function getSystemInfo() {
    var _this = this;

    var info = wx.getSystemInfoSync();
    this.platformVersionCode = info.SDKVersion;
    this.androidVersion = info.system;
    this.model = info.model;
    wx.getNetworkType({
      success: function success(res) {
        _this.networkType = res.networkType;
      }
    });
  },

  /**
   * {getAuthorize:true}
   */
  init: function init(obj) {
    var _this2 = this;

    // BaseManager.prototype.init(obj);
    BaseManager.prototype.init.call(this, obj); // this._super();

    this.getSystemInfo();
    setTimeout(function () {
      _this2.initOnlineData();
    }, 1000);
    this.jumpOtherGameTime = 0;
    this.jumpOtherGameOnShowGetGold = false;
    var self = this;
    wx.triggerGC(); // this._beginGameTime = getTime()/1000;
    // wx.exitMiniProgram({success:function(){
    // 	var time = getTime()/1000;
    // 	var runTime = time - self._beginGameTime;//提交游戏时长
    // 	self._beginGameTime = time;
    // 	lieyou_showLog('退出游戏');
    // }});
    // wx.onUserCaptureScreen(function(){
    // 	lieyou_showLog('用户截屏');//提交游戏时长
    // });

    this.shareAndVideoAllNum = 0;
    this.gridAdTheme = "white";
    this.showMoreGameOrGridType = 1; //1 先更多游戏轮播 2 先格子轮播 3 只有更多游戏 4 只有格子

    this.canShowRedPack = 1; //是否可以显示红包 可在线控制

    this.showRedPackNum = 10; //每天显示红包次数 可在线控制

    this.shareSuccessProbability = 100; //分享成功概率 可在线控制

    this.shareOrVideoType = 4; //分享 视频 类型   可在线控制
    //1、关闭 2、分享 3、视频 4、分享-视频（循环） 5、视频-分享（循环） 6、0-10点 只视频 10-24点 视频-分享（循环） 

    lieyou_SdkManager.onShow(function () {
      if (this.shareOnShow) {
        var nowTime = getTime() / 1000;

        if (nowTime - this.shareBegTime > 5) {
          if (this.shareCallBack) {
            this.shareCallBack(1);
          }

          this.setDataForHttp(this._shareQuery);
        } else if (nowTime - this.shareBegTime > 2) {
          if (this.isOnceShare) {
            if (Math.random() > 0.5) {
              if (this.shareCallBack) {
                this.shareCallBack(1);
              }

              this.setDataForHttp(this._shareQuery);
            } else {
              if (this.shareCallBack) {
                this.shareCallBack(0);
              }
            }
          } else {
            if (Math.random() * 100 > this.shareSuccessProbability) {
              if (this.shareCallBack) {
                this.shareCallBack(0);
              }
            } else {
              if (this.shareCallBack) {
                this.shareCallBack(1);
              }

              this.setDataForHttp(this._shareQuery);
            }
          }
        } else {
          if (this.shareCallBack) {
            this.shareCallBack(0);
          }
        }

        this.isOnceShare = !this.isOnceShare;
      }

      if (this.jumpOtherGameOnShowGetGold) {
        var nowTime = getTime() / 1000;

        if (nowTime - this.jumpOtherGameTime > quickGame.awardGoldTime) {
          var gold = 10 * quickGame.awardGoldDouble;
          var gold2 = Userdefault.getIntForKey(lieyou.Key_Gold, 0);
          Userdefault.setDataForKey(lieyou.Key_Gold, gold2 + gold);
        }
      }

      this.jumpOtherGameOnShowGetGold = false;
      this.shareOnShow = false;
    }.bind(this)); // this._super();

    if (obj && obj.getAuthorize) this.haveGetAuthorize = obj.getAuthorize;

    if (typeof wx.getUpdateManager === 'function') {
      var updateManager = wx.getUpdateManager();
      updateManager.onCheckForUpdate(function (res) {// 请求完新版本信息的回调
      });
      updateManager.onUpdateReady(function () {
        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
        updateManager.applyUpdate();
      });
      updateManager.onUpdateFailed(function () {// 新的版本下载失败
      });
    }

    this.login();
    this.setShareData();
    this.setMoreGameData();
    this.getOnlineData(); //this.openShare(); 获取到玩家id后调用
  },
  vibrateShort: function vibrateShort() {
    wx.vibrateShort();
  },
  vibrateLong: function vibrateLong() {
    wx.vibrateLong();
  },
  getHaveVideo: function getHaveVideo() {
    if (wxVideoId != "" || !this.isOpen(KEY_IS_SHENHE)) {
      return true;
    }

    return false;
  },
  getSysPlatform_string: function getSysPlatform_string() {
    return 'wx';
  },
  getSysPlatform: function getSysPlatform() {
    return 0;
  },
  getJumpBtnHaveMove: function getJumpBtnHaveMove() {
    if (!getCanShare() || wxBannerId == "") {
      return 0;
    }

    return wxJumpBtnHaveMove;
  },
  getOnlineData: function getOnlineData() {
    var self = this;
    this.setDataForHttp(wxData.getOnlineData, function (response) {
      if (response == "") {
        return;
      }

      var data = JSON.parse(response).data;

      try {
        if (data.wxJumpShowBannerDelayTime) {
          wxJumpShowBannerDelayTime = parseFloat(data.wxJumpShowBannerDelayTime);
        }

        if (data.wxShareFailTips) {
          wxShareFailTips = data.wxShareFailTips;
        }

        if (data.wxJumpBtnHaveMove) {
          wxJumpBtnHaveMove = parseInt(data.wxJumpBtnHaveMove);
        }

        if (data.wxServerVersion) {
          wxServerVersion = parseInt(data.wxServerVersion);
        }

        if (data.canShowRedPack) {
          self.canShowRedPack = parseInt(data.canShowRedPack);
        }

        if (data.showRedPackNum) {
          self.showRedPackNum = parseInt(data.showRedPackNum);
        }

        if (data.canExperienceGame) {
          canExperienceGame = parseInt(data.canExperienceGame);
        }

        if (data.shareOrVideoType) {
          self.shareOrVideoType = parseInt(data.shareOrVideoType);
        }

        if (data.shareSuccessProbability) {
          self.shareSuccessProbability = parseInt(data.shareSuccessProbability);
        }

        if (data.bannerDelayTime && parseInt(data.bannerDelayTime) >= 5) {
          wxData.bannerOnlindDelayTime = parseInt(data.bannerDelayTime);
        }

        if (data.shareSwitch) wxData.shareOnlineData = data.shareSwitch;

        if (data.wxVideoId && data.wxVideoId != "") {
          wxVideoId = data.wxVideoId;
        }

        if (data.wxBannerId && data.wxBannerId != "") {
          wxBannerId = data.wxBannerId;
        }

        if (data.forward) {
          wxData.WXforward = JSON.parse(data.forward);
        }

        if (data.spotControl) {
          self.setSpotData(data.spotControl);
        }

        wxData.params = data;
      } catch (error) {}
    });
  },
  returnHomeJumpGame: function returnHomeJumpGame() {
    if (wxData.WXforward != "") {
      if (this.getSDKVersionCanUse('2.2.0')) {
        wx.navigateToMiniProgram(wxData.WXforward);
      }
    }
  },
  getParamByOnline: function getParamByOnline(key, defaultV) {
    if (!wxData.params) {
      return defaultV;
    }

    var v = wxData.params[key];

    if (v) {
      return wxData.params[key];
    }

    return defaultV;
  },

  /**
   * 设置广告显示数据
   */
  setSpotData: function setSpotData(data) {
    if (data.interval) {
      pauseSpotInterval = data.interval;
      resultSpotInterval = data.interval;
    }

    if (data.intervalTime) {
      pauseSpotTime = data.intervalTime;
      resultSpotTime = data.intervalTime;
    }

    if (data.startInterval) {
      pauseSpotStartIndex = data.startInterval;
      resultSpotStartIndex = data.startInterval;
    }

    if (data.items) {
      for (var i = 0; i < data.items.length; i++) {
        if (data.items[i].type && data.items[i].type == 'pause') {
          if (data.items[i].interval) {
            pauseSpotInterval = data.items[i].interval;
          }

          if (data.items[i].intervalTime) {
            pauseSpotTime = data.items[i].intervalTime;
          }

          if (data.items[i].startInterval) {
            pauseSpotStartIndex = data.items[i].startInterval;
          }
        }

        if (data.items[i].type && data.items[i].type == 'result') {
          if (data.items[i].interval) {
            resultSpotInterval = data.items[i].interval;
          }

          if (data.items[i].intervalTime) {
            resultSpotTime = data.items[i].intervalTime;
          }

          if (data.items[i].startInterval) {
            resultSpotStartIndex = data.items[i].startInterval;
          }
        }
      }
    }
  },
  onHide: function onHide(fun) {
    wx.onHide(fun);
  },
  onShow: function onShow(fun) {
    wx.onShow(fun);
  },
  jumpRefreshBanner: function jumpRefreshBanner(obj) {
    var self = this;

    if (!obj.x) {
      obj.x = 0;
    }

    if (!obj.y) {
      obj.y = 0;
    }

    if (this.getJumpBtnHaveMove()) {
      this.hideBanner();

      if (obj.node) {
        obj.node.runAction(cc.sequence(cc.delayTime(wxJumpShowBannerDelayTime), cc.callFunc(function () {
          self.showBannerByBottom(wxBannerId);
        }), cc.delayTime(0.5), cc.moveTo(0.2, obj.x, obj.y)));
      } else {
        setTimeout(function () {
          self.showBannerByBottom(wxBannerId);
        }, wxJumpShowBannerDelayTime * 1000);
      }
    } else {
      this.showBannerByBottom(wxBannerId);

      if (obj.node) {
        obj.node.x = obj.x;
        obj.node.y = obj.y;
      }
    }
  },
  showBanner: function showBanner(obj) {
    var _this3 = this;

    this._showBannerObj = obj;
    this._isShowBanner = true;

    if (this.moreGameBanner && this.moreGameBanner.isValid) {
      this.moreGameBanner.destroy();
      this.moreGameBanner = null;
    }

    var self = this;

    if (!this.getSDKVersionCanUse('2.0.4')) {
      return;
    }

    obj.adUnitId = wxBannerId;
    if (obj.adUnitId == "") return;
    clearInterval(this.bannerTimeOut);
    if (this.banner) this.banner.destroy();
    this.banner = wx.createBannerAd(obj); // this.banner.style.width = obj.style.width;

    this.banner.onResize(function (res) {
      // lieyou_showLog(res.width, res.height)
      var w = 0;

      if (cc.winSize.height / cc.winSize.width > 2 && cc.sys.os == cc.sys.OS_IOS) {
        w = 20;
      }

      _this3.banner.style.top = cc.view.getFrameSize().height - res.height - w;

      if (_this3._bannerAdStyle && _this3._bannerAdStyle.y != undefined) {
        _this3.banner.style.top = _this3._bannerAdStyle.y;
      }
    });
    this.banner.show();
    this.banner.onError(function (res) {
      var scene = cc.director.getScene().name;
      var type = -1;

      if (self.getSDKVersionCanUse('2.2.2')) {
        type = res.errCode;
      }

      var url_n = serverUrl + 'lieyou/wxdata/addGameVideoAdvertis?ad_type=' + 1 + '&appid=' + wxAppId + '&openid=' + openid + '&page=' + scene + '&type=' + type;
      self.setDataForHttp(url_n);
    });
    this.bannerTimeOut = setInterval(this.refreshBanner.bind(this, obj), 1000 * wxData.bannerOnlindDelayTime); //刷新广告
  },
  showBannerCustom: function showBannerCustom(obj) {
    if (!this.getSDKVersionCanUse('2.0.4')) {
      return;
    }

    if (obj.adUnitId == "") return;
    clearInterval(this.bannerTimeOut);
    if (this.banner) this.banner.destroy();
    var t = 0,
        e = 0,
        a = cc.view.getFrameSize();
    t = a.width, e = a.height, lieyou_showLog(a);
    var t2 = t;
    t = t * obj.scale;
    var i = e - t / 3.5 - 0,
        o = (t2 - t) / 2;
    var x = obj.x ? obj.x : o;
    var y = obj.y ? obj.y : i;
    var w = 0;

    if (cc.winSize.height / cc.winSize.width > 2) {
      w = 20;
    }

    this.showBanner({
      adUnitId: obj.id,
      style: {
        left: x,
        top: y - 20 - 2,
        width: t
      }
    });
  },
  refreshBanner: function refreshBanner(obj) {
    var _this4 = this;

    if (this.banner) {
      this.banner.destroy();
      this.banner = wx.createBannerAd(obj);
      this.banner.onResize(function (res) {
        var w = 0;

        if (cc.winSize.height / cc.winSize.width > 2 && cc.sys.os == cc.sys.OS_IOS) {
          w = 20;
        }

        _this4.banner.style.top = cc.view.getFrameSize().height - res.height - w;

        if (_this4._bannerAdStyle && _this4._bannerAdStyle.y != undefined) {
          _this4.banner.style.top = _this4._bannerAdStyle.y;
        }
      });
      this.banner.show();
      this.banner.onError(function (res) {});
    }
  },
  showBannerByBottom: function showBannerByBottom(id) {
    var t = 0,
        e = 0,
        a = cc.view.getFrameSize();
    t = a.width, e = a.height, lieyou_showLog(a);
    var i = e - t / 3.5 - 20,
        o = (t - t) / 2;
    var w = 0;

    if (cc.winSize.height / cc.winSize.width > 2) {
      w = 20;
    }

    this.showBanner({
      adUnitId: id,
      style: {
        left: o,
        top: i - w,
        width: t
      }
    });
  },
  showBannerByTop: function showBannerByTop(id) {
    var t = 0,
        e = 0,
        a = cc.view.getFrameSize();
    t = a.width, e = a.height, lieyou_showLog(a);
    var i = e - t / 3.5 - 10,
        o = (t - t) / 2;
    this.showBanner({
      adUnitId: id,
      style: {
        left: o,
        top: 0,
        width: t
      }
    });
  },
  hideBanner: function hideBanner() {
    this._isShowBanner = false;

    if (this.banner) {
      clearInterval(this.bannerTimeOut);
      this.banner.destroy();
      this.banner = null;
    }
  },
  showRewardedVideoAd: function showRewardedVideoAd(id, closeCallBack) {
    this.shareAndVideoAllNum++;

    if (!this.getSDKVersionCanUse('2.0.4') || wxVideoId == '') {
      this.share({
        name: GameName,
        source: 10,
        success: closeCallBack
      }); // closeCallBack(false);

      return;
    }

    var self = this; // this.hideBanner();

    var videoAd = wx.createRewardedVideoAd({
      adUnitId: wxVideoId
    });
    videoAd.load().then(function () {
      return videoAd.show();
    })["catch"](function (err) {
      return lieyou_showLog("s");
    });
    videoAd.offClose();
    videoAd.onClose(function (res) {
      if (window.vivoPlayVDCallBack) {
        cc.audioEngine.stopAll();
        setTimeout(function () {
          window.vivoPlayVDCallBack();
        }, 100);
      }

      if (self.getSDKVersionCanUse('2.1.0')) {
        // closeCallBack(res.isEnded);
        if (res.isEnded) {
          try {
            closeCallBack(res.isEnded);
          } catch (err) {}
        } else {
          try {
            closeCallBack(false); // closeCallBack(false);
          } catch (err) {}
        }

        return;
      }

      closeCallBack(true);
    });
    videoAd.offError();
    videoAd.onError(function (res) {
      var scene = cc.director.getScene().name;
      var type = -1;

      if (self.getSDKVersionCanUse('2.2.2')) {
        type = res.errCode;
      }

      var url_n = serverUrl + 'lieyou/wxdata/addGameVideoAdvertis?ad_type=' + 0 + '&appid=' + wxAppId + '&openid=' + openid + '&page=' + scene + '&type=' + type;
      self.setDataForHttp(url_n); // closeCallBack(false);

      closeCallBack(false);
    });
  },
  showForum: function showForum(obj) {
    var wxSys = wx.getSystemInfoSync();

    if (!this.getSDKVersionCanUse('2.0.3')) {
      return;
    }

    var widths = wxSys.screenWidth;
    var height = wxSys.screenHeight;

    if (!this.gameClubButton) {
      this.gameClubButton = wx.createGameClubButton(obj);
    } else {
      this.gameClubButton.show();
    }
  },
  closeForum: function closeForum() {
    if (!this.getSDKVersionCanUse('2.0.3')) {
      return;
    }

    if (this.gameClubButton) this.gameClubButton.hide();
  },
  //微信授权
  getAuthorize: function getAuthorize() {
    var self = this;
    wx.authorize({
      scope: 'scope.userInfo',
      success: function success() {
        wx.getUserInfo({
          success: function success(res) {
            var userInfo = res.userInfo;
            uinfo.nick = userInfo.nickName; //昵称

            uinfo.icon = userInfo.avatarUrl; //头像链接

            uinfo.sex = userInfo.gender; //性别 0：未知、1：男、2：女

            uinfo.province = userInfo.province; //省份

            uinfo.city = userInfo.city; //城市

            uinfo.country = userInfo.country; //国家
            //提交状态

            var query = wx.getLaunchOptionsSync().query;
            var laiyuan_appid = 0;

            if (wx.getLaunchOptionsSync().referrerInfo && wx.getLaunchOptionsSync().referrerInfo.appId) {
              laiyuan_appid = wx.getLaunchOptionsSync().referrerInfo.appId;
            }

            var laiyuan_scene = wx.getLaunchOptionsSync().scene;
            var url_n = serverUrl + 'lieyou/wxdata/addGameSourceInfo?appid=' + wxAppId + '&openid=' + openid + '&scence=' + laiyuan_scene + '&s_appid=' + laiyuan_appid + '&s_path=' + JSON.stringify(query);
            self.setDataForHttp(url_n);

            if (query.source) {
              var str = wxData.putTouchShareDataUrl + "?" + "appId=" + query.appId + "&principal_gamerId=" + query.gamerId + "&assistant_gamerId=" + openid + "&itemId=" + query.itemId + "&source=" + query.source;

              if (query.inviteFriend) {
                str += "&name=" + userInfo.nickName + "&icon=" + userInfo.avatarUrl + "&inviteFriend=" + query.inviteFriend;
              }

              self.setDataForHttp(str);

              if (!Userdefault.getBoolForKey(query.gamerId, false)) {
                canGetLocalCard = true;
                getLocalCareId = "" + query.gamerId;
              }
            } else {}
          }
        });
      }
    });
  },
  //微信登录
  login: function login() {
    var sef = this;
    wx.login({
      success: function success(res) {
        sef.getOpenId(res.code);
      }
    });
  },
  getOpenId: function getOpenId(code) {
    //获取openid
    var self = this;
    this.setDataForHttp(wxData.getOpenIdUrl + '?appid=' + wxData.appId + '&secret=' + wxData.appSecret + '&js_code=' + code + '&grant_type=authorization_code', function (response) {
      var data = JSON.parse(response);
      openid = data.openid;
      wxData.session_key = data.session_key;
      uinfo.uid = openid;
      wsurl += openid;

      if (self.already) {
        return;
      }

      self.openShare();
      if (self.haveGetAuthorize) self.getAuthorize();
      var query = wx.getLaunchOptionsSync().query;
      var laiyuan_appid = 0;

      if (wx.getLaunchOptionsSync().referrerInfo && wx.getLaunchOptionsSync().referrerInfo.appId) {
        laiyuan_appid = wx.getLaunchOptionsSync().referrerInfo.appId;
      }

      var laiyuan_scene = wx.getLaunchOptionsSync().scene;
      var url_n = serverUrl + 'lieyou/wxdata/addGameSourceInfo?appid=' + wxAppId + '&openid=' + openid + '&scence=' + laiyuan_scene + '&s_appid=' + laiyuan_appid + '&s_path=' + JSON.stringify(query);
      self.setDataForHttp(url_n);
      var qudao = 'lieyou';
      if (query.channel) qudao = query.channel;
      self.setDataForHttp(wxData.putPlayerData + openid + '/' + qudao); // self.setDataForHttp(wxData.putPlayerData + openid);

      self.checkResurrNum();
      self.already = true;
    });
  },
  setShareData: function setShareData() {
    //获取分享数据
    this.setDataForHttp(wxData.shareUrl, function (response) {
      wxData.shareData = JSON.parse(response);
    });
  },
  setMoreGameData: function setMoreGameData() {
    //获取更多游戏数据
    var sysPlatform = 'android';

    if (cc.sys.os == cc.sys.OS_IOS) {
      sysPlatform = 'ios';
    }

    this.setDataForHttp(wxData.moreGameUrl + '&sysPlatForm=' + sysPlatform, function (response) {
      wxData.moreGameData = JSON.parse(response);

      for (var i = 0; i < wxData.moreGameData.length; i++) {
        if (wxData.moreGameData[i].screen && wxData.moreGameData[i].screen.length > 0 && wxData.moreGameData[i].screen[0].length > 0) {
          spotData.push(wxData.moreGameData[i]);
        }

        quickGame.RecommendIconData[i] = {
          jumpData: wxData.moreGameData[i].jumpType,
          url: wxData.moreGameData[i].icon,
          gameName: ''
        };
      }
    });
  },
  showAllRankingLayer: function showAllRankingLayer(obj) {},
  showFailRankingLayer: function showFailRankingLayer(obj) {},
  showMoreGameMiddle_one: function showMoreGameMiddle_one(obj) {
    var _this5 = this;

    obj.gridCount = 5;

    var fun = function fun() {
      return BaseManager.prototype.showMoreGameMiddle_one.call(_this5, obj);
    };

    return this.showMoreGameOrGrid(obj, fun);
  },
  showMoreGameMiddle_two: function showMoreGameMiddle_two(obj) {
    var _this6 = this;

    if (obj.moreGame) {
      return BaseManager.prototype.showMoreGameMiddle_two.call(this, obj);
    }

    obj.gridCount = 8;

    var fun = function fun() {
      return BaseManager.prototype.showMoreGameMiddle_two.call(_this6, obj);
    };

    return this.showMoreGameOrGrid(obj, fun);
  },
  showMoreGameMiddle_three: function showMoreGameMiddle_three(obj) {
    var _this7 = this;

    obj.gridCount = 8;

    var fun = function fun() {
      return BaseManager.prototype.showMoreGameMiddle_three.call(_this7, obj);
    };

    return this.showMoreGameOrGrid(obj, fun);
  },
  showMoreGameOrGrid: function showMoreGameOrGrid(obj, fun) {
    var type = this.showMoreGameOrGridType % 2 ? 1 : 2;

    switch (this.showMoreGameOrGridType) {
      case 1:
        this.showMoreGameOrGridType++;
        this.showMoreGameOrGridType = this.showMoreGameOrGridType % 2 ? 1 : 2;
        break;

      case 2:
        this.showMoreGameOrGridType++;
        this.showMoreGameOrGridType = this.showMoreGameOrGridType % 2 ? 1 : 2;
        break;
    }

    if (type == 1) {
      if (fun()) {
        return true;
      } else {
        return this.showGridAd(obj);
      }
    } else {
      return this.showGridAd(obj, fun);
    }
  },
  showGridAd: function showGridAd(obj) {
    var _this8 = this;

    var fun = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var fNode = obj.node ? obj.node : cc.director.getScene();

    if (this.getSDKVersionCanUse('2.9.2') && lieyou_wxGridId != "") {
      var gridAd = wx.createGridAd({
        adUnitId: lieyou_wxGridId,
        style: {
          left: 0,
          top: 0,
          width: 100,
          height: 100
        },
        adTheme: this.gridAdTheme,
        gridCount: obj.gridCount
      });
      gridAd.show();
      gridAd.onError(function (res) {
        if (fun) {
          fun();
        }

        lieyou_showLog("wxlog----- show gridad fail " + JSON.stringify(res));
      });
      var baseNodejs = fNode.addComponent('lieyou_baseNode');
      var isShowBanner = this._isShowBanner;
      gridAd.onResize(function (res) {
        gridAd.offResize();

        if (_this8._haveShowSpotAd) {
          gridAd.destroy();
          baseNodejs.destroyCallBack = null;
          return;
        }

        _this8._haveShowGridAd = true;
        console.log(">>>>>>>>>>>>> grid hideBanenr");

        _this8.hideBanner();

        var viewSize = cc.view.getFrameSize();

        var updateCallBack = function updateCallBack() {
          var worldPos = fNode.convertToWorldSpaceAR(cc.v2(obj.x ? obj.x : 0, obj.y ? obj.y : 0));
          var xProportion = worldPos.x / lieyou_SdkManager.sdkWinSize.width;
          var yProportion = 1 - worldPos.y / lieyou_SdkManager.sdkWinSize.height;
          gridAd.style.left = viewSize.width * xProportion - res.width / 2;
          gridAd.style.top = viewSize.height * yProportion - res.height / 2;
        };

        updateCallBack();
        baseNodejs.updateCallBack = updateCallBack;
      });

      baseNodejs.destroyCallBack = function () {
        _this8._haveShowGridAd = false;

        if (isShowBanner) {
          console.log(">>>>>>>>>>>>> grid showBanenr");

          _this8.showBanner(_this8._showBannerObj);
        }

        lieyou_showLog('wxlog---------- gridAd destroy');
        gridAd.destroy();
      };

      return true;
    } else {
      if (fun) {
        return fun();
      }

      return false;
      lieyou_showLog("wxlog----- show gridad version low ");
    }
  },
  showSpotByBegin: function showSpotByBegin(isHaveNative, top) {
    this.showMySpot();
  },
  showSpotByPause: function showSpotByPause(isHaveNative, top) {
    this.showMySpot();
  },
  showSpotByFinish: function showSpotByFinish(isHaveNative, top) {
    this.showMySpot();
  },
  showMySpot: function showMySpot() {
    var _this9 = this;

    if (this._alShowSpot) {
      lieyou_SdkManager.showMoreGameGrid();
      return;
    }

    this._alShowSpot = true;
    setTimeout(function () {
      _this9._alShowSpot = false;
    }, 10 * 1000);

    if (!this.getSDKVersionCanUse('2.6.0')) {
      lieyou_SdkManager.showMoreGameGrid();
      return;
    }

    if (wxSpotId == '') {
      lieyou_SdkManager.showMoreGameGrid();
      return;
    }

    var self = this;
    var spotAd = wx.createInterstitialAd({
      adUnitId: wxSpotId
    });

    if (this.getSDKVersionCanUse('2.8.0')) {
      spotAd.load();
    }

    var isShowBanner = this._isShowBanner;
    spotAd.onLoad(function () {
      spotAd.offLoad();

      if (_this9._haveShowGridAd) {
        lieyou_SdkManager.showMoreGameGrid();
        return;
      }

      _this9._haveShowSpotAd = true;
      console.log(">>>>>>>>>>>>> spot hideBanenr");

      _this9.hideBanner();

      spotAd.show();
    });
    spotAd.onClose(function () {
      //关闭spot
      _this9._haveShowSpotAd = false;

      if (isShowBanner) {
        console.log(">>>>>>>>>>>>> spot showBanenr");

        _this9.showBanner(_this9._showBannerObj);
      }
    });
    spotAd.onError(function (res) {
      lieyou_SdkManager.showMoreGameGrid();
      spotAd.offClose();
      spotAd.offError();
      spotAd.offLoad();

      if (self.getSDKVersionCanUse('2.8.0')) {
        spotAd.destroy();
      }

      lieyou_showLog('show spot ad fail   ' + JSON.stringify(res));
    });
  },
  setRankingData: function setRankingData(key, score) {
    if (!this.getSDKVersionCanUse('1.9.92')) {
      return;
    }

    wx.setUserCloudStorage({
      KVDataList: [{
        "key": key,
        "value": "" + score
      }],
      success: function success() {
        lieyou_showLog("success");
      },
      fail: function fail() {
        lieyou_showLog("fail");
      },
      complete: function complete() {
        lieyou_showLog("complete");
      }
    });
  },

  /**
   * 帮助成功分享
   */
  shareHelpSuccess: function shareHelpSuccess(level) {
    this.shareOnShow = true;
    this.shareBegTime = getTime() / 1000;
    this.shareCallBack = null; //source 9

    var self = this;

    if (wxData.shareData.length > 0 && getCanShare()) {
      var adid = 0;
      var _title = "";
      var _url = "";

      for (var i = 0; i < wxData.shareData.length; i++) {
        if (wxData.shareData[i].mode == GameName) {
          var data = wxData.shareData[i].item;

          if (wxData.shareData[i].level && wxData.shareData[i].level.success) {
            data = wxData.shareData[i].level.success;
          }

          var random = parseInt(Math.random() * data.length);
          adid = data[random].id;
          _title = data[random].title;
          _title = _title.replace(/%d/g, level + 1);
          _url = data[random].img;
        }
      }

      var _query = wxData.putShareDataUrl + "?dsadsa=dsdsd" + "&appId=" + wxData.appId + "&gamerId=" + openid + "&itemId=" + adid + "&source=9";

      this._shareQuery = _query;
      wx.shareAppMessage({
        title: _title,
        imageUrl: _url,
        query: _query
      });
    } else {
      var _query = wxData.putShareDataUrl + "?dsadsa=dsdsd" + "&appId=" + wxData.appId + "&gamerId=" + openid + "&itemId=" + -1 + "&source=9";

      this._shareQuery = _query;
      wx.shareAppMessage({
        title: "好玩的游戏，快来一起玩吧",
        imageUrl: "https://res.igame58.com/wxxyx/commom/shareIcon.png",
        query: _query
      });
    }
  },

  /**
   * 帮助分享
   */
  shareHelp: function shareHelp(level) {
    this.shareOnShow = true;
    this.shareBegTime = getTime() / 1000;
    this.shareCallBack = null; //source 8

    var self = this;

    if (wxData.shareData.length > 0 && getCanShare()) {
      var adid = 0;
      var _title = "";
      var _url = "";

      for (var i = 0; i < wxData.shareData.length; i++) {
        if (wxData.shareData[i].mode == GameName) {
          var data = wxData.shareData[i].item;

          if (wxData.shareData[i].level && wxData.shareData[i].level.help) {
            data = wxData.shareData[i].level.help;
          }

          var random = parseInt(Math.random() * data.length);
          adid = data[random].id;
          _title = data[random].title;
          _title = _title.replace(/%d/g, level + 1);
          _url = data[random].img;
        }
      }

      var _query = wxData.putShareDataUrl + "?dsadsa=dsdsd" + "&appId=" + wxData.appId + "&gamerId=" + openid + "&itemId=" + adid + "&source=8" + "&level=" + level;

      this._shareQuery = _query;
      wx.shareAppMessage({
        title: _title,
        imageUrl: _url,
        query: _query
      });
    } else {
      var _query = wxData.putShareDataUrl + "?dsadsa=dsdsd" + "&appId=" + wxData.appId + "&gamerId=" + openid + "&itemId=" + -1 + "&source=8" + "&level=" + level;

      this._shareQuery = _query;
      wx.shareAppMessage({
        title: "好玩的游戏，快来一起玩吧",
        imageUrl: "https://res.igame58.com/wxxyx/commom/shareIcon.png",
        query: _query
      });
    }
  },
  helpFriendSuccess: function helpFriendSuccess(level) {
    //wxAppId helpOpenId level uinfo.icon uinfo.nick
    var url = serverUrl + "lieyou/wxdata/addHelpRecord?wxGameId=" + wxAppId + "&gamerId=" + helpOpenId + "&level=" + level + "&icon=" + uinfo.icon + "&name=" + uinfo.nick;
    this.setDataForHttp(url);
  },
  getIsHaveFriendHelpMe: function getIsHaveFriendHelpMe(level, fun) {
    //level openid wxAppId   
    var url = serverUrl + "lieyou/wxdata/getClickInfo/" + wxAppId + "/" + openid + "/" + level;
    this.setDataForHttp(url, function (response) {
      var data = JSON.parse(response);

      if (data.name && data.name != "") {
        fun({
          level: level,
          name: data.name,
          icon: data.icon
        });
      }
    });
  },

  /**
   * 普通分享
   */
  share: function share(obj) {
    this.shareAndVideoAllNum++;
    this.shareOnShow = true;
    this.shareBegTime = getTime() / 1000;

    if (obj.success) {
      this.shareCallBack = obj.success;
    } else {
      this.shareCallBack = null;
    }

    var getGroupId = obj.getGroupId ? obj.getGroupId : true;
    var self = this;

    if (wxData.shareData.length <= 0 || !getCanShare()) {
      var _query = wxData.putShareDataUrl + "?dsadsa=dsdsd" + "&appId=" + wxData.appId + "&gamerId=" + openid + "&itemId=" + -1 + "&source=" + obj.source;

      if (obj.inviteFriend) {
        _query += "&inviteFriend=" + obj.inviteFriend;
      }

      this._shareQuery = _query;
      wx.shareAppMessage({
        title: "好玩的游戏，快来一起玩吧",
        imageUrl: "https://res.igame58.com/wxxyx/commom/shareIcon.png",
        query: _query
      });
      return;
    } //分享obj = {name:sss,source:1,success:fun}


    var adid = 0;
    var _title = "";
    var _url = "";

    for (var i = 0; i < wxData.shareData.length; i++) {
      if (wxData.shareData[i].mode == obj.name) {
        var data = wxData.shareData[i].item;
        var random = parseInt(Math.random() * data.length);
        adid = data[random].id;
        _title = data[random].title;
        _url = data[random].img;
      }
    }

    var _query = wxData.putShareDataUrl + "?dsadsa=dsdsd" + "&appId=" + wxData.appId + "&gamerId=" + openid + "&itemId=" + adid + "&source=" + obj.source;

    if (obj.inviteFriend) {
      _query += "&inviteFriend=" + obj.inviteFriend;
    }

    this._shareQuery = _query;
    wx.shareAppMessage({
      title: _title,
      imageUrl: _url,
      query: _query
    });
  },
  checkResurrNum_2: function checkResurrNum_2() {
    if (canGetNetCardNum) {
      canGetNetCardNum = false;
      setTimeout(function () {
        canGetNetCardNum = true;
      }, getNetCardTime);
      return this.checkResurrNum();
    }

    var localCardNum = Userdefault.getIntForKey(localCardKey, 0);
    return localCardNum + netCardNum > 5 ? 5 : localCardNum + netCardNum;
  },
  checkResurrNum: function checkResurrNum() {
    //查看复活数量 
    this.setDataForHttp(wxData.checkResurrDataUrl + "?appId=" + wxData.appId + "&gamerId=" + openid, function (response) {
      netCardNum = parseInt(response);
    });
    var localCardNum = Userdefault.getIntForKey(localCardKey, 0);
    return localCardNum + netCardNum > 5 ? 5 : localCardNum + netCardNum;
  },
  useResurr: function useResurr() {
    var localCardNum = Userdefault.getIntForKey(localCardKey, 0);

    if (localCardNum > 0) {
      var num = localCardNum + netCardNum;
      var delNum = 1;

      if (num >= 5) {
        delNum = num - 4;
      }

      Userdefault.setDataForKey(localCardKey, localCardNum - delNum);
      return;
    }

    netCardNum--; //使用复活

    var url = wxData.useResurrDataUrl + "?appId=" + wxData.appId + "&gamerId=" + openid;
    this.setDataForHttp(url);
  },
  addLocalResurr: function addLocalResurr() {
    var localCardNum = Userdefault.getIntForKey(localCardKey, 0);
    Userdefault.setDataForKey(localCardKey, localCardNum + 1);
  },

  /**
   * 获取帮助关卡 默认返回-1
   */
  getHelpLevel: function getHelpLevel() {
    var query = wx.getLaunchOptionsSync().query;

    if (query.level && query.source == 8) {
      helpOpenId = query.gamerId;
      return parseInt(query.level);
    }

    return -1;
  },
  openShare: function openShare() {
    //开启被动分享
    var self = this;

    if (!this.haveGetAuthorize) {
      var query = wx.getLaunchOptionsSync().query;

      if (query.source) {
        var str = wxData.putTouchShareDataUrl + "?" + "appId=" + query.appId + "&principal_gamerId=" + query.gamerId + "&assistant_gamerId=" + openid + "&itemId=" + query.itemId + "&source=" + query.source;
        this.setDataForHttp(str);

        if (!Userdefault.getBoolForKey(query.gamerId, false)) {
          canGetLocalCard = true;
          getLocalCareId = "" + query.gamerId;
        }
      } else {}
    }

    wx.showShareMenu({
      withShareTicket: true
    });
    wx.onShareAppMessage(function () {
      self.shareOnShow = true;
      self.shareBegTime = getTime() / 1000;
      self.shareCallBack = null;
      var adid = -1;
      var _title = "好玩的游戏，快来一起玩吧";
      var _url = "https://res.igame58.com/wxxyx/commom/shareIcon.png";

      for (var i = 0; i < wxData.shareData.length; i++) {
        if (wxData.shareData[i].mode == GameName) {
          var data = wxData.shareData[i].item;
          var random = parseInt(Math.random() * data.length);
          adid = data[random].id;
          _title = data[random].title;
          _url = data[random].img;
        }
      }

      var _query = wxData.putShareDataUrl + "?sdsdsds=dsds" + "&appId=" + wxData.appId + "&gamerId=" + openid + "&itemId=" + adid + "&source=1";

      self._shareQuery = _query;
      return {
        title: _title,
        imageUrl: _url,
        query: _query
      };
    });
  },
  // 1 更多游戏 2 插屏广告 3 三行的猜你喜欢 4 两行的猜你喜欢 5 一行的猜你喜欢 6 banner大图 7 banner小图 8 体验有奖 9 精品推荐 10 icon
  jumpApp: function jumpApp(data, url, page, num) {
    var self = this;

    if (this.getSDKVersionCanUse('2.2.0')) {
      wx.navigateToMiniProgram({
        appId: data.appId,
        path: data.path,
        fail: function fail(err) {
          var forward_appid = data.appId;
          var url_n = serverUrl + 'lieyou/wxdata/addGamePromotion?page=' + page + '&appid=' + wxAppId + '&s_number=' + num + '&forward_appid=' + forward_appid + '&openid=' + openid + '&status=' + 0;
          self.setDataForHttp(url_n);

          if (err.errMsg != 'navigateToMiniProgram:fail cancel') {
            wx.previewImage({
              current: url[0],
              // 当前显示图片的http链接 
              urls: url,
              // 需要预览的图片http链接列表 
              success: function success() {}
            });
          }
        },
        success: function success(err) {
          var forward_appid = data.appId;
          var url_n = serverUrl + 'lieyou/wxdata/addGamePromotion?page=' + page + '&appid=' + wxAppId + '&s_number=' + num + '&forward_appid=' + forward_appid + '&openid=' + openid + '&status=' + 1;
          self.setDataForHttp(url_n);
        }
      });
    } else {
      wx.previewImage({
        current: url[0],
        // 当前显示图片的http链接 
        urls: url,
        // 需要预览的图片http链接列表 
        success: function success() {}
      });
    }
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
  addToast: function addToast(_node, str, _callBack) {},
  shareDialog: function shareDialog(_node) {},
  addGetLocakCardDialog: function addGetLocakCardDialog(_node) {},
  modifyInviteFriend: function modifyInviteFriend(friendId) {
    var url = serverUrl + 'lieyou/wxdata/modifyFlag/' + wxAppId + "/" + openid + "/" + friendId;
    this.setDataForHttp(url);
  },
  deleteInviteFriend: function deleteInviteFriend(Id) {
    var url = serverUrl + 'lieyou/wxdata/delFriendInfo/' + Id;
    this.setDataForHttp(url);
  },
  getInviteFriendData: function getInviteFriendData(flag, fun) {
    var url = serverUrl + 'lieyou/wxdata/getFriendInfo/' + wxAppId + "/" + openid + "/" + flag;
    this.setDataForHttp(url, function (response) {
      var data = JSON.parse(response);
      fun(data);
    });
  },
  showInviteFriend: function showInviteFriend(_node, _callBack) {},
  showInviteFriendFailure: function showInviteFriendFailure(_node) {},
  getOnlineSpriteFrame: function getOnlineSpriteFrame(url, fun) {
    if (url == "") {
      return;
    }

    var loadFile = {
      url: url,
      type: "image"
    };
    cc.loader.load(loadFile, function (err, tex) {
      if (err) {
        return;
      }

      fun(new cc.SpriteFrame(tex));
    });
  },
  getSDKVersionCanUse: function getSDKVersionCanUse(data) {
    var wxSys = wx.getSystemInfoSync();
    var version = wxSys.SDKVersion;
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
  showGameRecommend: function showGameRecommend() {
    var callBack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (!canExperienceGame) {
      if (callBack) {
        callBack(false);
      }

      return;
    }

    if (this.isOpen(KEY_IS_SHENHE)) {
      if (callBack) {
        callBack(false);
      }

      return;
    }

    var timeLast = Userdefault.getIntForKey('SKD_showRecommendDialogTime', 0);
    var timeNow = parseInt(getTime() / 1000);

    if (timeNow - timeLast < 10) {
      if (callBack) {
        callBack(false);
      }

      return;
    }

    Userdefault.setDataForKey('SKD_showRecommendDialogTime', timeNow);
    var self = this;
    cc.loader.loadRes('SDK/module/RecommendGame/Recommend_playVD', function (err, res) {
      var node = cc.instantiate(res);
      var fNode = cc.find('Canvas');
      fNode.addChild(node, 999);
      node.getComponent('RecommendGame_playVD').setData(callBack);
    });
  },
  getShareOrViedo: function getShareOrViedo() {
    if (this.isOpen(KEY_IS_SHENHE)) {
      return 0;
    }

    var nShareAndVideoAllNum = this.shareAndVideoAllNum;
    var retType = 0; //1、关闭 2、分享 3、视频 4、分享-视频（）循环 5、视频-分享（循环） 6、0-10点 只视频 10-24点 视频-分享（）循环

    if (this.shareOrVideoType == 1) {
      retType = 0;
    } else if (this.shareOrVideoType == 2) {
      retType = 1;
    } else if (this.shareOrVideoType == 3) {
      retType = 2;
    } else if (this.shareOrVideoType == 4) {
      if (nShareAndVideoAllNum % 2 == 0) {
        retType = 1;
      } else {
        retType = 2;
      }
    } else if (this.shareOrVideoType == 5) {
      if (nShareAndVideoAllNum % 2 == 0) {
        retType = 2;
      } else {
        retType = 1;
      }
    } else if (this.shareOrVideoType == 6) {
      var hours = new Date().getHours();

      if (hours >= 0 && hours < 10) {
        retType = 2;
      }

      if (nShareAndVideoAllNum % 2 == 0) {
        retType = 2;
      } else {
        retType = 1;
      }
    }

    if (retType == 2) {
      if (wxVideoId == "") {
        if (!this.isOpen(KEY_IS_SHENHE)) {
          retType = 1;
        } else {
          retType = 0;
        }
      }
    } else if (retType == 1) {
      if (this.isOpen(KEY_IS_SHENHE)) {
        if (wxVideoId != "") {
          retType = 2;
        } else {
          retType = 0;
        }
      }
    }

    return retType;
  },
  setWorldRankData: function setWorldRankData(key, score) {
    var url_n = serverUrl + 'lieyou/wxdata/addRankList?wxGameId=' + wxAppId + '&gamerId=' + openid + '&nikeName=' + uinfo.nick + '&headImagePath=' + uinfo.icon + '&score=' + score + '&rankKey=' + key;
    this.setDataForHttp(url_n);
  },
  //new 
  newJumpApp: function newJumpApp(obj) {
    var self = this;

    if (this.getSDKVersionCanUse('2.2.0')) {
      wx.navigateToMiniProgram({
        appId: obj.data.appId,
        path: obj.data.path,
        fail: function fail(err) {
          if (err.errMsg != 'navigateToMiniProgram:fail cancel') {
            if (obj.data.url) {
              if (obj.success) {
                obj.success();
              }

              wx.previewImage({
                current: obj.data.url[0],
                // 当前显示图片的http链接 
                urls: obj.data.url // 需要预览的图片http链接列表 

              });
            }
          }
        },
        success: function (err) {
          if (obj.success) {
            obj.success();
          }
        }.bind(this)
      });
    } else {}
  }
});
module.exports = WxManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXHNjcmlwdHNcXFd4TWFuYWdlci5qcyJdLCJuYW1lcyI6WyJCYXNlTWFuYWdlciIsInJlcXVpcmUiLCJ3aW5kb3ciLCJjYW5FeHBlcmllbmNlR2FtZSIsInd4U2VydmVyVmVyc2lvbiIsInd4SnVtcEJ0bkhhdmVNb3ZlIiwid3hTaGFyZUZhaWxUaXBzIiwid3hKdW1wU2hvd0Jhbm5lckRlbGF5VGltZSIsIld4TWFuYWdlciIsImNjIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwiYWxyZWFkeSIsImhhdmVHZXRBdXRob3JpemUiLCJiYW5uZXIiLCJnYW1lQ2x1YkJ1dHRvbiIsImJhbm5lclRpbWVPdXQiLCJzaGFyZU9uU2hvdyIsImlzT25jZVNoYXJlIiwic2hhcmVDYWxsQmFjayIsInNoYXJlQmVnVGltZSIsIl9zaGFyZVF1ZXJ5IiwiaXNPcGVuIiwia2V5IiwiS0VZX0lTX1NIRU5IRSIsImdldENhblNoYXJlIiwiZ2V0VmVyc2lvbiIsInd4R2FtZVZlcnNpb24iLCJzZXRPbmxpbmVEYXRhIiwiZGF0YSIsInd4Iiwic2hvd01vcmVHYW1lT3JHcmlkIiwic2hvd01vcmVHYW1lT3JHcmlkVHlwZSIsInBhcnNlSW50IiwiZ3JpZEFkVGhlbWUiLCJzZXJ2ZXJWZXJzaW9uIiwidW5kZWZpbmVkIiwic2VydmVyVmVyc29pbiIsIk51bWJlciIsImJhc2VfSXNTaGVuSGUiLCJhZERhdGEiLCJ0aGVtZSIsImNyb3NzU3dpdGNoIiwiYml6RGF0YSIsImFkX2RhdGFzIiwiZ2V0U0RLVmVyc2lvbkNhblVzZSIsInNldEFkRGF0YSIsInNldFN3aXRjaERhdGEiLCJpbml0T25saW5lRGF0YSIsIm9wcG9HZXRPbmxpbmVEYXRhSWQiLCJsaWV5b3VfU2RrTWFuYWdlciIsInNob3dUb2FzdCIsInNlbGYiLCJ2ZXJzaW9uIiwiVXNlcmRlZmF1bHQiLCJnZXRJbnRGb3JLZXkiLCJ0aW1lIiwic3AiLCJub3dUaW1lIiwiZ2V0VGltZSIsInJlc3BvbnNlIiwiZ2V0U3RyaW5nRm9yS2V5IiwiSlNPTiIsInBhcnNlIiwiZGF0YVZlcnNpb24iLCJ1cmwiLCJnZXRMb2dpblVybCIsInNldERhdGFGb3JIdHRwIiwianNvbkQiLCJpc01vcmVJbmZvIiwic2V0RGF0YUZvcktleSIsInNlcnZlcl9kYXRhX3ZlcnNpb24iLCJzdHJpbmdpZnkiLCJlcnJvciIsImxpZXlvdV9zaG93TG9nIiwiZ2V0U3lzdGVtSW5mbyIsImluZm8iLCJnZXRTeXN0ZW1JbmZvU3luYyIsInBsYXRmb3JtVmVyc2lvbkNvZGUiLCJTREtWZXJzaW9uIiwiYW5kcm9pZFZlcnNpb24iLCJzeXN0ZW0iLCJtb2RlbCIsImdldE5ldHdvcmtUeXBlIiwic3VjY2VzcyIsInJlcyIsIm5ldHdvcmtUeXBlIiwiaW5pdCIsIm9iaiIsInByb3RvdHlwZSIsImNhbGwiLCJzZXRUaW1lb3V0IiwianVtcE90aGVyR2FtZVRpbWUiLCJqdW1wT3RoZXJHYW1lT25TaG93R2V0R29sZCIsInRyaWdnZXJHQyIsInNoYXJlQW5kVmlkZW9BbGxOdW0iLCJjYW5TaG93UmVkUGFjayIsInNob3dSZWRQYWNrTnVtIiwic2hhcmVTdWNjZXNzUHJvYmFiaWxpdHkiLCJzaGFyZU9yVmlkZW9UeXBlIiwib25TaG93IiwiTWF0aCIsInJhbmRvbSIsInF1aWNrR2FtZSIsImF3YXJkR29sZFRpbWUiLCJnb2xkIiwiYXdhcmRHb2xkRG91YmxlIiwiZ29sZDIiLCJsaWV5b3UiLCJLZXlfR29sZCIsImJpbmQiLCJnZXRBdXRob3JpemUiLCJnZXRVcGRhdGVNYW5hZ2VyIiwidXBkYXRlTWFuYWdlciIsIm9uQ2hlY2tGb3JVcGRhdGUiLCJvblVwZGF0ZVJlYWR5IiwiYXBwbHlVcGRhdGUiLCJvblVwZGF0ZUZhaWxlZCIsImxvZ2luIiwic2V0U2hhcmVEYXRhIiwic2V0TW9yZUdhbWVEYXRhIiwiZ2V0T25saW5lRGF0YSIsInZpYnJhdGVTaG9ydCIsInZpYnJhdGVMb25nIiwiZ2V0SGF2ZVZpZGVvIiwid3hWaWRlb0lkIiwiZ2V0U3lzUGxhdGZvcm1fc3RyaW5nIiwiZ2V0U3lzUGxhdGZvcm0iLCJnZXRKdW1wQnRuSGF2ZU1vdmUiLCJ3eEJhbm5lcklkIiwid3hEYXRhIiwicGFyc2VGbG9hdCIsImJhbm5lckRlbGF5VGltZSIsImJhbm5lck9ubGluZERlbGF5VGltZSIsInNoYXJlU3dpdGNoIiwic2hhcmVPbmxpbmVEYXRhIiwiZm9yd2FyZCIsIldYZm9yd2FyZCIsInNwb3RDb250cm9sIiwic2V0U3BvdERhdGEiLCJwYXJhbXMiLCJyZXR1cm5Ib21lSnVtcEdhbWUiLCJuYXZpZ2F0ZVRvTWluaVByb2dyYW0iLCJnZXRQYXJhbUJ5T25saW5lIiwiZGVmYXVsdFYiLCJ2IiwiaW50ZXJ2YWwiLCJwYXVzZVNwb3RJbnRlcnZhbCIsInJlc3VsdFNwb3RJbnRlcnZhbCIsImludGVydmFsVGltZSIsInBhdXNlU3BvdFRpbWUiLCJyZXN1bHRTcG90VGltZSIsInN0YXJ0SW50ZXJ2YWwiLCJwYXVzZVNwb3RTdGFydEluZGV4IiwicmVzdWx0U3BvdFN0YXJ0SW5kZXgiLCJpdGVtcyIsImkiLCJsZW5ndGgiLCJ0eXBlIiwib25IaWRlIiwiZnVuIiwianVtcFJlZnJlc2hCYW5uZXIiLCJ4IiwieSIsImhpZGVCYW5uZXIiLCJub2RlIiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJkZWxheVRpbWUiLCJjYWxsRnVuYyIsInNob3dCYW5uZXJCeUJvdHRvbSIsIm1vdmVUbyIsInNob3dCYW5uZXIiLCJfc2hvd0Jhbm5lck9iaiIsIl9pc1Nob3dCYW5uZXIiLCJtb3JlR2FtZUJhbm5lciIsImlzVmFsaWQiLCJkZXN0cm95IiwiYWRVbml0SWQiLCJjbGVhckludGVydmFsIiwiY3JlYXRlQmFubmVyQWQiLCJvblJlc2l6ZSIsInciLCJ3aW5TaXplIiwiaGVpZ2h0Iiwid2lkdGgiLCJzeXMiLCJvcyIsIk9TX0lPUyIsInN0eWxlIiwidG9wIiwidmlldyIsImdldEZyYW1lU2l6ZSIsIl9iYW5uZXJBZFN0eWxlIiwic2hvdyIsIm9uRXJyb3IiLCJzY2VuZSIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJuYW1lIiwiZXJyQ29kZSIsInVybF9uIiwic2VydmVyVXJsIiwid3hBcHBJZCIsIm9wZW5pZCIsInNldEludGVydmFsIiwicmVmcmVzaEJhbm5lciIsInNob3dCYW5uZXJDdXN0b20iLCJ0IiwiZSIsImEiLCJ0MiIsInNjYWxlIiwibyIsImlkIiwibGVmdCIsInNob3dCYW5uZXJCeVRvcCIsInNob3dSZXdhcmRlZFZpZGVvQWQiLCJjbG9zZUNhbGxCYWNrIiwic2hhcmUiLCJHYW1lTmFtZSIsInNvdXJjZSIsInZpZGVvQWQiLCJjcmVhdGVSZXdhcmRlZFZpZGVvQWQiLCJsb2FkIiwidGhlbiIsImVyciIsIm9mZkNsb3NlIiwib25DbG9zZSIsInZpdm9QbGF5VkRDYWxsQmFjayIsImF1ZGlvRW5naW5lIiwic3RvcEFsbCIsImlzRW5kZWQiLCJvZmZFcnJvciIsInNob3dGb3J1bSIsInd4U3lzIiwid2lkdGhzIiwic2NyZWVuV2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJjcmVhdGVHYW1lQ2x1YkJ1dHRvbiIsImNsb3NlRm9ydW0iLCJoaWRlIiwiYXV0aG9yaXplIiwic2NvcGUiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwidWluZm8iLCJuaWNrIiwibmlja05hbWUiLCJpY29uIiwiYXZhdGFyVXJsIiwic2V4IiwiZ2VuZGVyIiwicHJvdmluY2UiLCJjaXR5IiwiY291bnRyeSIsInF1ZXJ5IiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJsYWl5dWFuX2FwcGlkIiwicmVmZXJyZXJJbmZvIiwiYXBwSWQiLCJsYWl5dWFuX3NjZW5lIiwic3RyIiwicHV0VG91Y2hTaGFyZURhdGFVcmwiLCJnYW1lcklkIiwiaXRlbUlkIiwiaW52aXRlRnJpZW5kIiwiZ2V0Qm9vbEZvcktleSIsImNhbkdldExvY2FsQ2FyZCIsImdldExvY2FsQ2FyZUlkIiwic2VmIiwiZ2V0T3BlbklkIiwiY29kZSIsImdldE9wZW5JZFVybCIsImFwcFNlY3JldCIsInNlc3Npb25fa2V5IiwidWlkIiwid3N1cmwiLCJvcGVuU2hhcmUiLCJxdWRhbyIsImNoYW5uZWwiLCJwdXRQbGF5ZXJEYXRhIiwiY2hlY2tSZXN1cnJOdW0iLCJzaGFyZVVybCIsInNoYXJlRGF0YSIsInN5c1BsYXRmb3JtIiwibW9yZUdhbWVVcmwiLCJtb3JlR2FtZURhdGEiLCJzY3JlZW4iLCJzcG90RGF0YSIsInB1c2giLCJSZWNvbW1lbmRJY29uRGF0YSIsImp1bXBEYXRhIiwianVtcFR5cGUiLCJnYW1lTmFtZSIsInNob3dBbGxSYW5raW5nTGF5ZXIiLCJzaG93RmFpbFJhbmtpbmdMYXllciIsInNob3dNb3JlR2FtZU1pZGRsZV9vbmUiLCJncmlkQ291bnQiLCJzaG93TW9yZUdhbWVNaWRkbGVfdHdvIiwibW9yZUdhbWUiLCJzaG93TW9yZUdhbWVNaWRkbGVfdGhyZWUiLCJzaG93R3JpZEFkIiwiZk5vZGUiLCJsaWV5b3Vfd3hHcmlkSWQiLCJncmlkQWQiLCJjcmVhdGVHcmlkQWQiLCJhZFRoZW1lIiwiYmFzZU5vZGVqcyIsImFkZENvbXBvbmVudCIsImlzU2hvd0Jhbm5lciIsIm9mZlJlc2l6ZSIsIl9oYXZlU2hvd1Nwb3RBZCIsImRlc3Ryb3lDYWxsQmFjayIsIl9oYXZlU2hvd0dyaWRBZCIsImNvbnNvbGUiLCJsb2ciLCJ2aWV3U2l6ZSIsInVwZGF0ZUNhbGxCYWNrIiwid29ybGRQb3MiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJ2MiIsInhQcm9wb3J0aW9uIiwic2RrV2luU2l6ZSIsInlQcm9wb3J0aW9uIiwic2hvd1Nwb3RCeUJlZ2luIiwiaXNIYXZlTmF0aXZlIiwic2hvd015U3BvdCIsInNob3dTcG90QnlQYXVzZSIsInNob3dTcG90QnlGaW5pc2giLCJfYWxTaG93U3BvdCIsInNob3dNb3JlR2FtZUdyaWQiLCJ3eFNwb3RJZCIsInNwb3RBZCIsImNyZWF0ZUludGVyc3RpdGlhbEFkIiwib25Mb2FkIiwib2ZmTG9hZCIsInNldFJhbmtpbmdEYXRhIiwic2NvcmUiLCJzZXRVc2VyQ2xvdWRTdG9yYWdlIiwiS1ZEYXRhTGlzdCIsImZhaWwiLCJjb21wbGV0ZSIsInNoYXJlSGVscFN1Y2Nlc3MiLCJsZXZlbCIsImFkaWQiLCJfdGl0bGUiLCJfdXJsIiwibW9kZSIsIml0ZW0iLCJ0aXRsZSIsInJlcGxhY2UiLCJpbWciLCJfcXVlcnkiLCJwdXRTaGFyZURhdGFVcmwiLCJzaGFyZUFwcE1lc3NhZ2UiLCJpbWFnZVVybCIsInNoYXJlSGVscCIsImhlbHAiLCJoZWxwRnJpZW5kU3VjY2VzcyIsImhlbHBPcGVuSWQiLCJnZXRJc0hhdmVGcmllbmRIZWxwTWUiLCJnZXRHcm91cElkIiwiY2hlY2tSZXN1cnJOdW1fMiIsImNhbkdldE5ldENhcmROdW0iLCJnZXROZXRDYXJkVGltZSIsImxvY2FsQ2FyZE51bSIsImxvY2FsQ2FyZEtleSIsIm5ldENhcmROdW0iLCJjaGVja1Jlc3VyckRhdGFVcmwiLCJ1c2VSZXN1cnIiLCJudW0iLCJkZWxOdW0iLCJ1c2VSZXN1cnJEYXRhVXJsIiwiYWRkTG9jYWxSZXN1cnIiLCJnZXRIZWxwTGV2ZWwiLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0Iiwib25TaGFyZUFwcE1lc3NhZ2UiLCJqdW1wQXBwIiwicGFnZSIsInBhdGgiLCJmb3J3YXJkX2FwcGlkIiwiZXJyTXNnIiwicHJldmlld0ltYWdlIiwiY3VycmVudCIsInVybHMiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJvcGVuIiwic2VuZCIsImFkZFRvYXN0IiwiX25vZGUiLCJfY2FsbEJhY2siLCJzaGFyZURpYWxvZyIsImFkZEdldExvY2FrQ2FyZERpYWxvZyIsIm1vZGlmeUludml0ZUZyaWVuZCIsImZyaWVuZElkIiwiZGVsZXRlSW52aXRlRnJpZW5kIiwiSWQiLCJnZXRJbnZpdGVGcmllbmREYXRhIiwiZmxhZyIsInNob3dJbnZpdGVGcmllbmQiLCJzaG93SW52aXRlRnJpZW5kRmFpbHVyZSIsImdldE9ubGluZVNwcml0ZUZyYW1lIiwibG9hZEZpbGUiLCJsb2FkZXIiLCJ0ZXgiLCJTcHJpdGVGcmFtZSIsInNwbGl0Iiwic3RyMSIsInNob3dHYW1lUmVjb21tZW5kIiwiY2FsbEJhY2siLCJ0aW1lTGFzdCIsInRpbWVOb3ciLCJsb2FkUmVzIiwiaW5zdGFudGlhdGUiLCJmaW5kIiwiYWRkQ2hpbGQiLCJnZXRDb21wb25lbnQiLCJzZXREYXRhIiwiZ2V0U2hhcmVPclZpZWRvIiwiblNoYXJlQW5kVmlkZW9BbGxOdW0iLCJyZXRUeXBlIiwiaG91cnMiLCJEYXRlIiwiZ2V0SG91cnMiLCJzZXRXb3JsZFJhbmtEYXRhIiwibmV3SnVtcEFwcCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBLElBQU1BLFdBQVcsR0FBR0MsT0FBTyxDQUFDLGFBQUQsQ0FBM0I7O0FBQ0FDLE1BQU0sQ0FBQ0MsaUJBQVAsR0FBMkIsQ0FBM0IsRUFBNkI7O0FBQzdCRCxNQUFNLENBQUNFLGVBQVAsR0FBeUIsQ0FBekIsRUFBMkI7O0FBQzNCRixNQUFNLENBQUNHLGlCQUFQLEdBQTJCLENBQTNCLEVBQTZCOztBQUM3QkgsTUFBTSxDQUFDSSxlQUFQLEdBQXlCLE1BQXpCLEVBQStCOztBQUMvQkosTUFBTSxDQUFDSyx5QkFBUCxHQUFtQyxHQUFuQyxFQUF1Qzs7QUFDdkMsSUFBSUMsU0FBUyxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUN4QixhQUFTVCxPQUFPLENBQUMsYUFBRCxDQURRO0FBRXhCVSxFQUFBQSxVQUFVLEVBQUM7QUFDVkMsSUFBQUEsT0FBTyxFQUFDLEtBREU7QUFFVkMsSUFBQUEsZ0JBQWdCLEVBQUUsS0FGUjtBQUdWQyxJQUFBQSxNQUFNLEVBQUMsSUFIRztBQUlWQyxJQUFBQSxjQUFjLEVBQUMsSUFKTDtBQUtWQyxJQUFBQSxhQUFhLEVBQUMsQ0FBQyxDQUxMO0FBTVZDLElBQUFBLFdB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O0FBQ0R0RCxjQUFBQSxFQUFFLENBQUNrVyxZQUFILENBQWdCO0FBQ2ZDLGdCQUFBQSxPQUFPLEVBQUV6UyxHQUFHLENBQUMzRCxJQUFKLENBQVNvQyxHQUFULENBQWEsQ0FBYixDQURNO0FBQ1c7QUFDMUJpVSxnQkFBQUEsSUFBSSxFQUFFMVMsR0FBRyxDQUFDM0QsSUFBSixDQUFTb0MsR0FGQSxDQUVJOztBQUZKLGVBQWhCO0FBSUE7QUFDRDtBQUNELFNBWndCO0FBWXZCbUIsUUFBQUEsT0FBTyxFQUFDLFVBQVM4SSxHQUFULEVBQWE7QUFDdEIsY0FBRzFJLEdBQUcsQ0FBQ0osT0FBUCxFQUFlO0FBQ2RJLFlBQUFBLEdBQUcsQ0FBQ0osT0FBSjtBQUNBO0FBQ0QsU0FKUyxDQUlSMEIsSUFKUSxDQUlILElBSkc7QUFaZSxPQUF6QjtBQWlCQSxLQWxCRCxNQWtCSyxDQUNKO0FBQ0Q7QUFqNEN1QixDQUFULENBQWhCO0FBcTRDQW1VLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjFhLFNBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5LiW55WM5o6S6KGMIOWQjuWPsCBhcHBpZCBvcGVuaWQg55So5oi35aS05YOPIOeUqOaIt+aYteensCDliIbmlbBcclxuICog5YWl5Y+j6I635Y+W5p2l5rqQ5L+h5oGvIDEg5ZCO5Y+wIGFwcGlkIG9wZW5pZCBzY2VuZSDmnaXmupBhcHBpZCDmnaXmupDot6/lvoRcclxuICog6YCA5Ye66I635Y+W5ri45oiP5pe26ZW/XHJcbiAqIOWIhuS6q+adpea6kO+8iOiwgeWIhuS6q+eahO+8iVxyXG4gKiB3eC50cmlnZ2VyR0MoKVxyXG4gKiB3eC5vcGVuQ3VzdG9tZXJTZXJ2aWNlQ29udmVyc2F0aW9uKE9iamVjdCBvYmplY3QpXHJcbiAqIOezu+e7n+eymOi0tCAgd3guc2V0Q2xpcGJvYXJkRGF0YSh7ZGF0YTonZGF0YSd9KTsg5pyJ5o+Q56S6XHJcbiAqIHd4Lm9uTWVtb3J5V2FybmluZyhmdW5jdGlvbiBjYWxsYmFjaylcclxuICogRmVlZGJhY2tCdXR0b24gd3guY3JlYXRlRmVlZGJhY2tCdXR0b24oT2JqZWN0IG9iamVjdClcclxuICogXHJcbiAqIOmhtemdoiDlkI3lrZcg5bqP5Y+3IOa4uOaIj+WQjSDnlKjmiLdpZCDmiJDlip98fOWPlua2iCDlkI7lj7BcclxuICogXHJcbiAqIHd4Lm9uVXNlckNhcHR1cmVTY3JlZW4oQ0FMTEJBQ0spIOaIquWxjyDlsI/nqIvluo/nmoRcclxuICog6KeG6aKR5bm/5ZGKIGJhbm5lcuW5v+WRiiDlpLHotKXljp/lm6Ag5ZCO5Y+wIOinhumikXx8YmFubmVyIGFwcGlkIG9wZW5pZCB5ZW1pYW4gdHlwZVxyXG4gKi9cclxuLyoqXHJcbiAqIOS4lueVjOaOkuihjCBhcHBpZO+8iHN0cmluZyDlvq7kv6FpZO+8iSBvcGVuaWTvvIhzdHJpbmcg55So5oi3aWTvvIkg55So5oi35aS05YOP77yIc3RyaW5nIOWktOWDj+mTvuaOpe+8iSAg55So5oi35pi156ew77yIc3RyaW5n77yJIOWIhuaVsO+8iGludO+8iVxyXG7muLjmiI/mjqjlub8g6aG16Z2iIOWQjeWtl++8iHN0cmluZyDoh6rlt7Hlvq7kv6FpZO+8iSDluo/lj7fvvIhpbnTvvIkg5ri45oiP5ZCN77yIc3RyaW5nIOi3s+i9rOW+ruS/oWlk77yJIOeUqOaIt2lk77yIc3RyaW5nIOeUqOaIt2lk77yJIOaIkOWKn3x85Y+W5raI77yIaW50IDF8fDDvvIlcclxu5YWl5Y+j6I635Y+W5p2l5rqQ5L+h5oGvICBhcHBpZO+8iHN0cmluZyDoh6rlt7Hlvq7kv6FpZO+8iSBvcGVuaWTvvIhzdHJpbmcg55So5oi3aWTvvIkgc2NlbmXvvIhpbnQg77yJIOadpea6kGFwcGlk77yIaW50IOadpea6kOS/oeaBr++8iVxyXG7op4bpopHlub/lkYogYmFubmVy5bm/5ZGKIOWksei0peWOn+WboCAg6KeG6aKRfHxiYW5uZXLvvIhpbnQgMHx8Me+8iSBhcHBpZO+8iHN0cmluZyDoh6rlt7Hlvq7kv6FpZO+8iSBvcGVuaWTvvIhzdHJpbmcg55So5oi3aWTvvIkg6aG16Z2i77yIc3RyaW5nIOWcuuaZr++8iSB0eXBl77yIaW5077yJXHJcblxyXG7lnLrmma/lgLxcdHNjZW5l5Zy65pmvXHRcdFx0XHRhcHBJZCDlkKvkuYlcclxuMTAyMFx05YWs5LyX5Y+3IHByb2ZpbGUg6aG155u45YWz5bCP56iL5bqP5YiX6KGoXHRcdOadpea6kOWFrOS8l+WPt1xyXG4xMDM1XHTlhazkvJflj7foh6rlrprkuYnoj5zljZVcdFx0XHTmnaXmupDlhazkvJflj7dcclxuMTAzNlx0QXBwIOWIhuS6q+a2iOaBr+WNoeeJh1x0XHRcdOadpea6kEFwcFxyXG4xMDM3XHTlsI/nqIvluo/miZPlvIDlsI/nqIvluo9cdFx0XHTmnaXmupDlsI/nqIvluo9cclxuMTAzOFx05LuO5Y+m5LiA5Liq5bCP56iL5bqP6L+U5ZueXHRcdFx05p2l5rqQ5bCP56iL5bqPXHJcbjEwNDNcdOWFrOS8l+WPt+aooeadv+a2iOaBr1x0XHRcdOadpea6kOWFrOS8l+WPt1xyXG5cclxudHlwZVxyXG4xMDAwXHTlkI7nq6/mjqXlj6PosIPnlKjlpLHotKVcclxuMTAwMVx05Y+C5pWw6ZSZ6K+vXHJcbjEwMDJcdOW5v+WRiuWNleWFg+aXoOaViFxyXG4xMDAzXHTlhoXpg6jplJnor69cclxuMTAwNFx05peg5ZCI6YCC55qE5bm/5ZGKXHJcbjEwMDVcdOW5v+WRiue7hOS7tuWuoeaguOS4rVxyXG4xMDA2XHTlub/lkYrnu4Tku7booqvpqbPlm55cclxuMTAwN1x05bm/5ZGK57uE5Lu26KKr5bCB56aBXHJcbjEwMDhcdOW5v+WRiuWNleWFg+W3suWFs+mXrVxyXG4gKi9cclxuY29uc3QgQmFzZU1hbmFnZXIgPSByZXF1aXJlKCdCYXNlTWFuYWdlcicpO1xyXG53aW5kb3cuY2FuRXhwZXJpZW5jZUdhbWUgPSAwOy8v5piv5ZCm5Y+v5Lul5L2T6aqM5ri45oiPIOWPr+WcqOe6v+aOp+WItlxyXG53aW5kb3cud3hTZXJ2ZXJWZXJzaW9uID0gMDsvL+eJiOacrCDlj6/lnKjnur/mjqfliLZcclxud2luZG93Lnd4SnVtcEJ0bkhhdmVNb3ZlID0gMTsvLyDlj6/lnKjnur/mjqfliLZcclxud2luZG93Lnd4U2hhcmVGYWlsVGlwcyA9ICfpgJrorq/lpLHotKUnLy8g5Y+v5Zyo57q/5o6n5Yi2XHJcbndpbmRvdy53eEp1bXBTaG93QmFubmVyRGVsYXlUaW1lID0gMS41Oy8vIOWPr+WcqOe6v+aOp+WItlxyXG5sZXQgV3hNYW5hZ2VyID0gY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IHJlcXVpcmUoJ0Jhc2VNYW5hZ2VyJyksXHJcblx0cHJvcGVydGllczp7XHJcblx0XHRhbHJlYWR5OmZhbHNlLFxyXG5cdFx0aGF2ZUdldEF1dGhvcml6ZTogZmFsc2UsXHJcblx0XHRiYW5uZXI6bnVsbCxcclxuXHRcdGdhbWVDbHViQnV0dG9uOm51bGwsXHJcblx0XHRiYW5uZXJUaW1lT3V0Oi0xLFxyXG5cdFx0c2hhcmVPblNob3c6IGZhbHNlLFxyXG5cdFx0aXNPbmNlU2hhcmU6IHRydWUsXHJcblx0XHRzaGFyZUNhbGxCYWNrOiBudWxsLFxyXG5cdFx0c2hhcmVCZWdUaW1lOiAwLFxyXG5cdFx0X3NoYXJlUXVlcnk6JycsLy/liIbkuqvnu5/orqFcclxuXHR9LFxyXG5cdFxyXG5cdGlzT3BlbihrZXkpe1xyXG5cdFx0XHJcblx0XHRpZihrZXkgPT0gS0VZX0lTX1NIRU5IRSl7XHJcblx0XHRcdHJldHVybiAhZ2V0Q2FuU2hhcmUoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cdGdldFZlcnNpb24oKXtcclxuICAgICAgICByZXR1cm4gd3hHYW1lVmVyc2lvbjtcclxuICAgIH0sXHJcblx0c2V0T25saW5lRGF0YShkYXRhKXtcclxuICAgICAgICBpZihkYXRhLnd4KXtcclxuXHRcdFx0aWYoZGF0YS53eC5zaG93TW9yZUdhbWVPckdyaWQpe1xyXG5cdFx0XHRcdHRoaXMuc2hvd01vcmVHYW1lT3JHcmlkVHlwZSA9IHBhcnNlSW50KGRhdGEud3guc2hvd01vcmVHYW1lT3JHcmlkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZihkYXRhLnd4LmdyaWRBZFRoZW1lKXtcclxuXHRcdFx0XHR0aGlzLmdyaWRBZFRoZW1lID0gZGF0YS53eC5ncmlkQWRUaGVtZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZihkYXRhLnd4LnNlcnZlclZlcnNpb24gIT0gdW5kZWZpbmVkKXtcclxuXHRcdFx0XHR2YXIgc2VydmVyVmVyc29pbiA9IE51bWJlcihkYXRhLnd4LnNlcnZlclZlcnNpb24pO1xyXG5cdFx0XHRcdHd4U2VydmVyVmVyc2lvbiA9IHBhcnNlSW50KGRhdGEud3guc2VydmVyVmVyc2lvbik7XHJcbiAgICAgICAgICAgICAgICBpZihzZXJ2ZXJWZXJzb2luID49IHd4R2FtZVZlcnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2VfSXNTaGVuSGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZV9Jc1NoZW5IZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHRcdFx0dmFyIGFkRGF0YSA9IHt9O1xyXG5cdFx0XHRpZihkYXRhLnd4LnRoZW1lKXtcclxuICAgICAgICAgICAgICAgIGFkRGF0YS50aGVtZSA9IGRhdGEud3gudGhlbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZGF0YS53eC5jcm9zc1N3aXRjaCl7XHJcbiAgICAgICAgICAgICAgICBhZERhdGEuY3Jvc3NTd2l0Y2ggPSBkYXRhLnd4LmNyb3NzU3dpdGNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGEud3guYml6RGF0YSl7XHJcbiAgICAgICAgICAgICAgICBhZERhdGEuYml6RGF0YSA9IGRhdGEud3guYml6RGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihkYXRhLnd4LmFkX2RhdGFzKXtcclxuICAgICAgICAgICAgICAgIGFkRGF0YS5hZF9kYXRhcyA9IGRhdGEud3guYWRfZGF0YXM7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoZGF0YS53eC5zd2l0Y2gpe1xyXG4gICAgICAgICAgICAgICAgYWREYXRhLnN3aXRjaCA9IGRhdGEud3guc3dpdGNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2V0U0RLVmVyc2lvbkNhblVzZSgnMi4yLjAnKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFkRGF0YShhZERhdGEpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuc2V0U3dpdGNoRGF0YShkYXRhLnd4KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaW5pdE9ubGluZURhdGEoKXtcclxuICAgICAgICBcclxuICAgICAgICBpZihvcHBvR2V0T25saW5lRGF0YUlkID09ICcnKXtcclxuICAgICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuc2hvd1RvYXN0KCfmsqHmnInloavlhplxZ0lEJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciB2ZXJzaW9uID0gVXNlcmRlZmF1bHQuZ2V0SW50Rm9yS2V5KCdzZGtfd3hfb25saW5lX3ZlcnNpb24nLDApO1xyXG4gICAgICAgIHZhciB0aW1lID0gVXNlcmRlZmF1bHQuZ2V0SW50Rm9yS2V5KCdzZGtfd3hfb25saW5lX3RpbWUnLDApO1xyXG4gICAgICAgIHZhciBzcCA9IFVzZXJkZWZhdWx0LmdldEludEZvcktleSgnc2RrX3d4X29ubGluZV9zcCcsMCk7XHJcbiAgICAgICAgdmFyIG5vd1RpbWUgPSBnZXRUaW1lKCkvMTAwMDtcclxuICAgICAgICBpZihub3dUaW1lIC0gdGltZSA8IHNwICYmIG5vd1RpbWUgPiB0aW1lKXtcclxuICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gVXNlcmRlZmF1bHQuZ2V0U3RyaW5nRm9yS2V5KCdzZGtfd3hfb25saW5lX2RhdGEnLCcnKTtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgc2VsZi5zZXRPbmxpbmVEYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGF0YVZlcnNpb24gPSB2ZXJzaW9uO1xyXG4gICAgICAgIHZhciB1cmwgPSB0aGlzLmdldExvZ2luVXJsKCk7XHJcblx0XHR0aGlzLnNldERhdGFGb3JIdHRwKHVybCxmdW5jdGlvbihyZXNwb25zZSl7XHJcblx0XHRcdGlmKHJlc3BvbnNlID09IFwiXCIpIHtcclxuXHRcdFx0XHRyZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIGpzb25EID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKGpzb25ELmlzTW9yZUluZm8gIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmlzTW9yZUluZm8gPSBqc29uRC5pc01vcmVJbmZvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoanNvbkQuc3Ape1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJkZWZhdWx0LnNldERhdGFGb3JLZXkoJ3Nka193eF9vbmxpbmVfc3AnLGpzb25ELnNwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFVzZXJkZWZhdWx0LnNldERhdGFGb3JLZXkoJ3Nka193eF9vbmxpbmVfdGltZScsbm93VGltZSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKGpzb25ELnNlcnZlcl9kYXRhX3ZlcnNpb24gPT0gdmVyc2lvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gVXNlcmRlZmF1bHQuZ2V0U3RyaW5nRm9yS2V5KCdzZGtfd3hfb25saW5lX2RhdGEnLCcnKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0T25saW5lRGF0YShkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2UpLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBpZighZGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2VsZi5zZXRPbmxpbmVEYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYoanNvbkQuc2VydmVyX2RhdGFfdmVyc2lvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlcmRlZmF1bHQuc2V0RGF0YUZvcktleSgnc2RrX3d4X29ubGluZV92ZXJzaW9uJyxqc29uRC5zZXJ2ZXJfZGF0YV92ZXJzaW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFVzZXJkZWZhdWx0LnNldERhdGFGb3JLZXkoJ3Nka193eF9vbmxpbmVfZGF0YScsSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCd3eGxvZy0tLS0tLWVycm9yICBpbml0T25saW5lRGF0YSArICcgKyBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuXHRcdH0pO1xyXG4gICAgfSxcclxuXHRnZXRTeXN0ZW1JbmZvKCl7XHJcblx0XHR2YXIgaW5mbyA9IHd4LmdldFN5c3RlbUluZm9TeW5jKCk7XHJcbiAgICAgICAgdGhpcy5wbGF0Zm9ybVZlcnNpb25Db2RlID0gaW5mby5TREtWZXJzaW9uO1xyXG4gICAgICAgIHRoaXMuYW5kcm9pZFZlcnNpb24gPSBpbmZvLnN5c3RlbTtcclxuICAgICAgICB0aGlzLm1vZGVsID0gaW5mby5tb2RlbDtcclxuICAgICAgICB3eC5nZXROZXR3b3JrVHlwZSh7XHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6KHJlcyk9PntcclxuICAgICAgICAgICAgICAgIHRoaXMubmV0d29ya1R5cGUgPSByZXMubmV0d29ya1R5cGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIHtnZXRBdXRob3JpemU6dHJ1ZX1cclxuXHQgKi9cclxuXHRpbml0OiBmdW5jdGlvbihvYmope1xyXG5cdFx0Ly8gQmFzZU1hbmFnZXIucHJvdG90eXBlLmluaXQob2JqKTtcclxuXHRcdEJhc2VNYW5hZ2VyLnByb3RvdHlwZS5pbml0LmNhbGwodGhpcyxvYmopO1xyXG5cdFx0Ly8gdGhpcy5fc3VwZXIoKTtcclxuXHRcdHRoaXMuZ2V0U3lzdGVtSW5mbygpO1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdE9ubGluZURhdGEoKTsgICAgXHJcbiAgICAgICAgfSwgMTAwMCk7XHJcblx0XHR0aGlzLmp1bXBPdGhlckdhbWVUaW1lID0gMDtcclxuXHRcdHRoaXMuanVtcE90aGVyR2FtZU9uU2hvd0dldEdvbGQgPSBmYWxzZTtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdHd4LnRyaWdnZXJHQygpO1xyXG5cdFx0Ly8gdGhpcy5fYmVnaW5HYW1lVGltZSA9IGdldFRpbWUoKS8xMDAwO1xyXG5cdFx0Ly8gd3guZXhpdE1pbmlQcm9ncmFtKHtzdWNjZXNzOmZ1bmN0aW9uKCl7XHJcblx0XHQvLyBcdHZhciB0aW1lID0gZ2V0VGltZSgpLzEwMDA7XHJcblx0XHQvLyBcdHZhciBydW5UaW1lID0gdGltZSAtIHNlbGYuX2JlZ2luR2FtZVRpbWU7Ly/mj5DkuqTmuLjmiI/ml7bplb9cclxuXHRcdC8vIFx0c2VsZi5fYmVnaW5HYW1lVGltZSA9IHRpbWU7XHJcblx0XHQvLyBcdGxpZXlvdV9zaG93TG9nKCfpgIDlh7rmuLjmiI8nKTtcclxuXHRcdC8vIH19KTtcclxuXHRcdC8vIHd4Lm9uVXNlckNhcHR1cmVTY3JlZW4oZnVuY3Rpb24oKXtcclxuXHRcdC8vIFx0bGlleW91X3Nob3dMb2coJ+eUqOaIt+aIquWxjycpOy8v5o+Q5Lqk5ri45oiP5pe26ZW/XHJcblx0XHQvLyB9KTtcclxuXHRcdHRoaXMuc2hhcmVBbmRWaWRlb0FsbE51bSA9IDA7XHJcblx0XHR0aGlzLmdyaWRBZFRoZW1lID0gXCJ3aGl0ZVwiO1xyXG5cdFx0dGhpcy5zaG93TW9yZUdhbWVPckdyaWRUeXBlID0gMTsvLzEg5YWI5pu05aSa5ri45oiP6L2u5pKtIDIg5YWI5qC85a2Q6L2u5pKtIDMg5Y+q5pyJ5pu05aSa5ri45oiPIDQg5Y+q5pyJ5qC85a2QXHJcblx0XHR0aGlzLmNhblNob3dSZWRQYWNrID0gMTsgLy/mmK/lkKblj6/ku6XmmL7npLrnuqLljIUg5Y+v5Zyo57q/5o6n5Yi2XHJcblx0XHR0aGlzLnNob3dSZWRQYWNrTnVtID0gMTA7IC8v5q+P5aSp5pi+56S657qi5YyF5qyh5pWwIOWPr+WcqOe6v+aOp+WItlxyXG5cdFx0dGhpcy5zaGFyZVN1Y2Nlc3NQcm9iYWJpbGl0eSA9IDEwMDsvL+WIhuS6q+aIkOWKn+amgueOhyDlj6/lnKjnur/mjqfliLZcclxuXHRcdHRoaXMuc2hhcmVPclZpZGVvVHlwZSA9IDQ7Ly/liIbkuqsg6KeG6aKRIOexu+WeiyAgIOWPr+WcqOe6v+aOp+WItlxyXG5cdFx0Ly8x44CB5YWz6ZetIDLjgIHliIbkuqsgM+OAgeinhumikSA044CB5YiG5LqrLeinhumike+8iOW+queOr++8iSA144CB6KeG6aKRLeWIhuS6q++8iOW+queOr++8iSA244CBMC0xMOeCuSDlj6rop4bpopEgMTAtMjTngrkg6KeG6aKRLeWIhuS6q++8iOW+queOr++8iSBcclxuXHRcdGxpZXlvdV9TZGtNYW5hZ2VyLm9uU2hvdyhmdW5jdGlvbigpe1xyXG5cdFx0XHRpZih0aGlzLnNoYXJlT25TaG93KXtcclxuXHRcdFx0XHR2YXIgbm93VGltZSA9IGdldFRpbWUoKS8xMDAwO1xyXG5cdFx0XHRcdGlmKG5vd1RpbWUgLSB0aGlzLnNoYXJlQmVnVGltZSA+IDUpe1xyXG5cdFx0XHRcdFx0aWYodGhpcy5zaGFyZUNhbGxCYWNrKXtcclxuXHRcdFx0XHRcdFx0dGhpcy5zaGFyZUNhbGxCYWNrKDEpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy5zZXREYXRhRm9ySHR0cCh0aGlzLl9zaGFyZVF1ZXJ5KTtcclxuXHRcdFx0XHR9ZWxzZSBpZihub3dUaW1lIC0gdGhpcy5zaGFyZUJlZ1RpbWUgPiAyKXtcclxuXHRcdFx0XHRcdGlmKHRoaXMuaXNPbmNlU2hhcmUpIHtcclxuXHRcdFx0XHRcdFx0aWYoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xyXG5cdFx0XHRcdFx0XHRcdGlmKHRoaXMuc2hhcmVDYWxsQmFjayl7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNoYXJlQ2FsbEJhY2soMSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2V0RGF0YUZvckh0dHAodGhpcy5fc2hhcmVRdWVyeSk7XHJcblx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdGlmKHRoaXMuc2hhcmVDYWxsQmFjayl7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNoYXJlQ2FsbEJhY2soMCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmKE1hdGgucmFuZG9tKCkgKiAxMDAgPiB0aGlzLnNoYXJlU3VjY2Vzc1Byb2JhYmlsaXR5KSB7XHJcblx0XHRcdFx0XHRcdFx0aWYodGhpcy5zaGFyZUNhbGxCYWNrKXtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2hhcmVDYWxsQmFjaygwKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdGlmKHRoaXMuc2hhcmVDYWxsQmFjayl7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNoYXJlQ2FsbEJhY2soMSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2V0RGF0YUZvckh0dHAodGhpcy5fc2hhcmVRdWVyeSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdGlmKHRoaXMuc2hhcmVDYWxsQmFjayl7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2hhcmVDYWxsQmFjaygwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5pc09uY2VTaGFyZSA9ICF0aGlzLmlzT25jZVNoYXJlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmKHRoaXMuanVtcE90aGVyR2FtZU9uU2hvd0dldEdvbGQpe1xyXG5cdFx0XHRcdHZhciBub3dUaW1lID0gZ2V0VGltZSgpLzEwMDA7XHJcblx0XHRcdFx0aWYobm93VGltZSAtIHRoaXMuanVtcE90aGVyR2FtZVRpbWUgPiBxdWlja0dhbWUuYXdhcmRHb2xkVGltZSl7XHJcblx0XHRcdFx0XHR2YXIgZ29sZCA9IDEwKnF1aWNrR2FtZS5hd2FyZEdvbGREb3VibGU7XHJcblx0XHRcdFx0XHR2YXIgZ29sZDIgPSBVc2VyZGVmYXVsdC5nZXRJbnRGb3JLZXkobGlleW91LktleV9Hb2xkLDApO1xyXG4gICAgXHRcdFx0XHRVc2VyZGVmYXVsdC5zZXREYXRhRm9yS2V5KGxpZXlvdS5LZXlfR29sZCxnb2xkMiArIGdvbGQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmp1bXBPdGhlckdhbWVPblNob3dHZXRHb2xkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2hhcmVPblNob3cgPSBmYWxzZTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG5cdFx0Ly8gdGhpcy5fc3VwZXIoKTtcclxuXHRcdGlmKG9iaiAmJiBvYmouZ2V0QXV0aG9yaXplKVxyXG5cdFx0XHR0aGlzLmhhdmVHZXRBdXRob3JpemUgPSBvYmouZ2V0QXV0aG9yaXplO1xyXG5cdFx0aWYgKHR5cGVvZiB3eC5nZXRVcGRhdGVNYW5hZ2VyID09PSAnZnVuY3Rpb24nKSB7XHJcblx0XHRcdGNvbnN0IHVwZGF0ZU1hbmFnZXIgPSB3eC5nZXRVcGRhdGVNYW5hZ2VyKClcclxuXHRcdFx0dXBkYXRlTWFuYWdlci5vbkNoZWNrRm9yVXBkYXRlKGZ1bmN0aW9uIChyZXMpIHtcclxuXHRcdFx0XHQvLyDor7fmsYLlrozmlrDniYjmnKzkv6Hmga/nmoTlm57osINcclxuXHRcdFx0fSlcclxuXHRcdFx0XHJcblx0XHRcdHVwZGF0ZU1hbmFnZXIub25VcGRhdGVSZWFkeShmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0Ly8g5paw55qE54mI5pys5bey57uP5LiL6L295aW977yM6LCD55SoIGFwcGx5VXBkYXRlIOW6lOeUqOaWsOeJiOacrOW5tumHjeWQr1xyXG5cdFx0XHRcdHVwZGF0ZU1hbmFnZXIuYXBwbHlVcGRhdGUoKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRcclxuXHRcdFx0dXBkYXRlTWFuYWdlci5vblVwZGF0ZUZhaWxlZChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0Ly8g5paw55qE54mI5pys5LiL6L295aSx6LSlXHJcblx0XHRcdH0pXHJcblx0XHR9XHJcblx0XHR0aGlzLmxvZ2luKCk7XHJcblx0XHR0aGlzLnNldFNoYXJlRGF0YSgpO1xyXG5cdFx0dGhpcy5zZXRNb3JlR2FtZURhdGEoKTtcclxuXHRcdHRoaXMuZ2V0T25saW5lRGF0YSgpO1xyXG5cdFx0Ly90aGlzLm9wZW5TaGFyZSgpOyDojrflj5bliLDnjqnlrrZpZOWQjuiwg+eUqFxyXG5cdH0sXHJcblx0dmlicmF0ZVNob3J0KCl7XHJcbiAgICAgICAgd3gudmlicmF0ZVNob3J0KCk7XHJcbiAgICB9LFxyXG4gICAgdmlicmF0ZUxvbmcoKXtcclxuXHRcdHd4LnZpYnJhdGVMb25nKCk7XHJcblx0fSxcclxuXHRnZXRIYXZlVmlkZW8oKXtcclxuICAgICAgICBpZih3eFZpZGVvSWQgIT0gXCJcIiB8fCAhdGhpcy5pc09wZW4oS0VZX0lTX1NIRU5IRSkpe1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cdGdldFN5c1BsYXRmb3JtX3N0cmluZygpe1xyXG5cdFx0cmV0dXJuICd3eCc7XHJcbiAgICB9LFxyXG5cdGdldFN5c1BsYXRmb3JtKCl7XHJcblx0XHRyZXR1cm4gMDtcclxuXHR9LFxyXG5cdGdldEp1bXBCdG5IYXZlTW92ZSgpe1xyXG5cdFx0aWYoIWdldENhblNoYXJlKCkgfHwgd3hCYW5uZXJJZCA9PSBcIlwiKXtcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gd3hKdW1wQnRuSGF2ZU1vdmU7XHJcblx0fSxcclxuXHRnZXRPbmxpbmVEYXRhKCl7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHR0aGlzLnNldERhdGFGb3JIdHRwKHd4RGF0YS5nZXRPbmxpbmVEYXRhLGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuXHRcdFx0aWYocmVzcG9uc2UgPT0gXCJcIikge1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2UpLmRhdGE7XHJcblx0XHRcdFxyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdGlmKGRhdGEud3hKdW1wU2hvd0Jhbm5lckRlbGF5VGltZSl7XHJcblx0XHRcdFx0XHR3eEp1bXBTaG93QmFubmVyRGVsYXlUaW1lID0gcGFyc2VGbG9hdChkYXRhLnd4SnVtcFNob3dCYW5uZXJEZWxheVRpbWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZihkYXRhLnd4U2hhcmVGYWlsVGlwcyl7XHJcblx0XHRcdFx0XHR3eFNoYXJlRmFpbFRpcHMgPSBkYXRhLnd4U2hhcmVGYWlsVGlwcztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYoZGF0YS53eEp1bXBCdG5IYXZlTW92ZSkge1xyXG5cdFx0XHRcdFx0d3hKdW1wQnRuSGF2ZU1vdmUgPSBwYXJzZUludChkYXRhLnd4SnVtcEJ0bkhhdmVNb3ZlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYoZGF0YS53eFNlcnZlclZlcnNpb24pIHtcclxuXHRcdFx0XHRcdHd4U2VydmVyVmVyc2lvbiA9IHBhcnNlSW50KGRhdGEud3hTZXJ2ZXJWZXJzaW9uKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYoZGF0YS5jYW5TaG93UmVkUGFjaykge1xyXG5cdFx0XHRcdFx0c2VsZi5jYW5TaG93UmVkUGFjayA9IHBhcnNlSW50KGRhdGEuY2FuU2hvd1JlZFBhY2spO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZihkYXRhLnNob3dSZWRQYWNrTnVtKSB7XHJcblx0XHRcdFx0XHRzZWxmLnNob3dSZWRQYWNrTnVtID0gcGFyc2VJbnQoZGF0YS5zaG93UmVkUGFja051bSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKGRhdGEuY2FuRXhwZXJpZW5jZUdhbWUpIHtcclxuXHRcdFx0XHRcdGNhbkV4cGVyaWVuY2VHYW1lID0gcGFyc2VJbnQoZGF0YS5jYW5FeHBlcmllbmNlR2FtZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKGRhdGEuc2hhcmVPclZpZGVvVHlwZSkge1xyXG5cdFx0XHRcdFx0c2VsZi5zaGFyZU9yVmlkZW9UeXBlID0gcGFyc2VJbnQoZGF0YS5zaGFyZU9yVmlkZW9UeXBlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYoZGF0YS5zaGFyZVN1Y2Nlc3NQcm9iYWJpbGl0eSkge1xyXG5cdFx0XHRcdFx0c2VsZi5zaGFyZVN1Y2Nlc3NQcm9iYWJpbGl0eSA9IHBhcnNlSW50KGRhdGEuc2hhcmVTdWNjZXNzUHJvYmFiaWxpdHkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZihkYXRhLmJhbm5lckRlbGF5VGltZSAmJiBwYXJzZUludChkYXRhLmJhbm5lckRlbGF5VGltZSkgPj0gNSkge1xyXG5cdFx0XHRcdFx0d3hEYXRhLmJhbm5lck9ubGluZERlbGF5VGltZSA9IHBhcnNlSW50KGRhdGEuYmFubmVyRGVsYXlUaW1lKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYoZGF0YS5zaGFyZVN3aXRjaClcclxuXHRcdFx0XHRcdHd4RGF0YS5zaGFyZU9ubGluZURhdGEgPSBkYXRhLnNoYXJlU3dpdGNoO1xyXG5cdFx0XHRcdGlmKGRhdGEud3hWaWRlb0lkICYmIGRhdGEud3hWaWRlb0lkICE9IFwiXCIpIHtcclxuXHRcdFx0XHRcdHd4VmlkZW9JZCA9IGRhdGEud3hWaWRlb0lkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZihkYXRhLnd4QmFubmVySWQgJiYgZGF0YS53eEJhbm5lcklkICE9IFwiXCIpIHtcclxuXHRcdFx0XHRcdHd4QmFubmVySWQgPSBkYXRhLnd4QmFubmVySWQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKGRhdGEuZm9yd2FyZCkge1xyXG5cdFx0XHRcdFx0d3hEYXRhLldYZm9yd2FyZCA9IEpTT04ucGFyc2UoZGF0YS5mb3J3YXJkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYoZGF0YS5zcG90Q29udHJvbCkge1xyXG5cdFx0XHRcdFx0c2VsZi5zZXRTcG90RGF0YShkYXRhLnNwb3RDb250cm9sKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0d3hEYXRhLnBhcmFtcyA9IGRhdGE7XHJcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdHJldHVybkhvbWVKdW1wR2FtZSgpe1xyXG5cdFx0aWYod3hEYXRhLldYZm9yd2FyZCAhPSBcIlwiKSB7XHJcblx0XHRcdGlmKHRoaXMuZ2V0U0RLVmVyc2lvbkNhblVzZSgnMi4yLjAnKSl7XHJcblx0XHRcdFx0d3gubmF2aWdhdGVUb01pbmlQcm9ncmFtKHd4RGF0YS5XWGZvcndhcmQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRnZXRQYXJhbUJ5T25saW5lKGtleSxkZWZhdWx0Vil7XHJcblx0XHRpZighd3hEYXRhLnBhcmFtcykge1xyXG5cdFx0XHRyZXR1cm4gZGVmYXVsdFY7XHJcblx0XHR9XHJcblx0XHR2YXIgdiA9IHd4RGF0YS5wYXJhbXNba2V5XTtcclxuXHRcdGlmKHYpe1xyXG5cdFx0XHRyZXR1cm4gd3hEYXRhLnBhcmFtc1trZXldO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBkZWZhdWx0VjtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIOiuvue9ruW5v+WRiuaYvuekuuaVsOaNrlxyXG5cdCAqL1xyXG5cdHNldFNwb3REYXRhKGRhdGEpe1xyXG5cdFx0aWYoZGF0YS5pbnRlcnZhbCkge1xyXG5cdFx0XHRwYXVzZVNwb3RJbnRlcnZhbCA9IGRhdGEuaW50ZXJ2YWw7XHJcblx0XHRcdHJlc3VsdFNwb3RJbnRlcnZhbCA9IGRhdGEuaW50ZXJ2YWw7XHJcblx0XHR9XHJcblx0XHRpZihkYXRhLmludGVydmFsVGltZSkge1xyXG5cdFx0XHRwYXVzZVNwb3RUaW1lID0gZGF0YS5pbnRlcnZhbFRpbWU7XHJcblx0XHRcdHJlc3VsdFNwb3RUaW1lID0gZGF0YS5pbnRlcnZhbFRpbWU7XHJcblx0XHR9XHJcblx0XHRpZihkYXRhLnN0YXJ0SW50ZXJ2YWwpIHtcclxuXHRcdFx0cGF1c2VTcG90U3RhcnRJbmRleCA9IGRhdGEuc3RhcnRJbnRlcnZhbDtcclxuXHRcdFx0cmVzdWx0U3BvdFN0YXJ0SW5kZXggPSBkYXRhLnN0YXJ0SW50ZXJ2YWw7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoZGF0YS5pdGVtcykge1xyXG5cdFx0XHRmb3IodmFyIGkgPSAwO2kgPCBkYXRhLml0ZW1zLmxlbmd0aDtpKyspIHtcclxuXHRcdFx0XHRpZihkYXRhLml0ZW1zW2ldLnR5cGUgJiYgZGF0YS5pdGVtc1tpXS50eXBlID09ICdwYXVzZScpIHtcclxuXHRcdFx0XHRcdGlmKGRhdGEuaXRlbXNbaV0uaW50ZXJ2YWwpIHtcclxuXHRcdFx0XHRcdFx0cGF1c2VTcG90SW50ZXJ2YWwgPSBkYXRhLml0ZW1zW2ldLmludGVydmFsO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYoZGF0YS5pdGVtc1tpXS5pbnRlcnZhbFRpbWUpIHtcclxuXHRcdFx0XHRcdFx0cGF1c2VTcG90VGltZSA9IGRhdGEuaXRlbXNbaV0uaW50ZXJ2YWxUaW1lO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYoZGF0YS5pdGVtc1tpXS5zdGFydEludGVydmFsKSB7XHJcblx0XHRcdFx0XHRcdHBhdXNlU3BvdFN0YXJ0SW5kZXggPSBkYXRhLml0ZW1zW2ldLnN0YXJ0SW50ZXJ2YWw7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmKGRhdGEuaXRlbXNbaV0udHlwZSAmJiBkYXRhLml0ZW1zW2ldLnR5cGUgPT0gJ3Jlc3VsdCcpIHtcclxuXHRcdFx0XHRcdGlmKGRhdGEuaXRlbXNbaV0uaW50ZXJ2YWwpIHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0U3BvdEludGVydmFsID0gZGF0YS5pdGVtc1tpXS5pbnRlcnZhbDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmKGRhdGEuaXRlbXNbaV0uaW50ZXJ2YWxUaW1lKSB7XHJcblx0XHRcdFx0XHRcdHJlc3VsdFNwb3RUaW1lID0gZGF0YS5pdGVtc1tpXS5pbnRlcnZhbFRpbWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZihkYXRhLml0ZW1zW2ldLnN0YXJ0SW50ZXJ2YWwpIHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0U3BvdFN0YXJ0SW5kZXggPSBkYXRhLml0ZW1zW2ldLnN0YXJ0SW50ZXJ2YWw7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0b25IaWRlOmZ1bmN0aW9uKGZ1bil7XHJcblx0XHR3eC5vbkhpZGUoZnVuKTtcclxuXHR9LFxyXG5cdG9uU2hvdzpmdW5jdGlvbihmdW4pe1xyXG5cdFx0d3gub25TaG93KGZ1bik7XHJcblx0fSxcclxuXHRqdW1wUmVmcmVzaEJhbm5lcjogZnVuY3Rpb24ob2JqKXtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdGlmKCFvYmoueCkge1xyXG5cdFx0XHRvYmoueCA9IDA7XHJcblx0XHR9XHJcblx0XHRpZighb2JqLnkpIHtcclxuXHRcdFx0b2JqLnkgPSAwO1xyXG5cdFx0fVxyXG5cdFx0aWYodGhpcy5nZXRKdW1wQnRuSGF2ZU1vdmUoKSkge1xyXG5cdFx0XHR0aGlzLmhpZGVCYW5uZXIoKTtcclxuXHRcdFx0aWYob2JqLm5vZGUpe1xyXG5cdFx0XHRcdG9iai5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUod3hKdW1wU2hvd0Jhbm5lckRlbGF5VGltZSksY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdHNlbGYuc2hvd0Jhbm5lckJ5Qm90dG9tKHd4QmFubmVySWQpO1xyXG5cdFx0XHRcdH0pLGNjLmRlbGF5VGltZSgwLjUpLGNjLm1vdmVUbygwLjIsb2JqLngsb2JqLnkpKSk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdHNlbGYuc2hvd0Jhbm5lckJ5Qm90dG9tKHd4QmFubmVySWQpO1xyXG5cdFx0XHRcdH0sd3hKdW1wU2hvd0Jhbm5lckRlbGF5VGltZSoxMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLnNob3dCYW5uZXJCeUJvdHRvbSh3eEJhbm5lcklkKTtcclxuXHRcdFx0aWYob2JqLm5vZGUpIHtcclxuXHRcdFx0XHRvYmoubm9kZS54ID0gb2JqLng7XHJcblx0XHRcdFx0b2JqLm5vZGUueSA9IG9iai55O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHR9LFxyXG5cdHNob3dCYW5uZXI6ZnVuY3Rpb24ob2JqKXtcclxuXHRcdFxyXG5cdFx0dGhpcy5fc2hvd0Jhbm5lck9iaiA9IG9iajtcclxuXHRcdHRoaXMuX2lzU2hvd0Jhbm5lciA9IHRydWU7XHJcblx0XHRpZih0aGlzLm1vcmVHYW1lQmFubmVyICYmIHRoaXMubW9yZUdhbWVCYW5uZXIuaXNWYWxpZCl7XHJcbiAgICAgICAgICAgIHRoaXMubW9yZUdhbWVCYW5uZXIuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vcmVHYW1lQmFubmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRpZighdGhpcy5nZXRTREtWZXJzaW9uQ2FuVXNlKCcyLjAuNCcpKXtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0b2JqLmFkVW5pdElkID0gd3hCYW5uZXJJZDtcclxuXHRcdGlmKG9iai5hZFVuaXRJZCA9PSBcIlwiKSBcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmJhbm5lclRpbWVPdXQpO1xyXG5cdFx0aWYodGhpcy5iYW5uZXIpXHRcclxuXHRcdCAgIHRoaXMuYmFubmVyLmRlc3Ryb3koKVxyXG5cdFx0dGhpcy5iYW5uZXIgPSB3eC5jcmVhdGVCYW5uZXJBZChvYmopO1xyXG5cdFx0Ly8gdGhpcy5iYW5uZXIuc3R5bGUud2lkdGggPSBvYmouc3R5bGUud2lkdGg7XHJcblx0XHR0aGlzLmJhbm5lci5vblJlc2l6ZShyZXMgPT4ge1xyXG5cdFx0XHQvLyBsaWV5b3Vfc2hvd0xvZyhyZXMud2lkdGgsIHJlcy5oZWlnaHQpXHJcblx0XHRcdHZhciB3ID0gMDtcclxuXHRcdFx0aWYoY2Mud2luU2l6ZS5oZWlnaHQgLyBjYy53aW5TaXplLndpZHRoID4gMiAmJiBjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUyl7XHJcblx0XHRcdFx0dyA9IDIwO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuYmFubmVyLnN0eWxlLnRvcCA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkuaGVpZ2h0IC0gcmVzLmhlaWdodCAtIHc7XHJcblx0XHRcdGlmKHRoaXMuX2Jhbm5lckFkU3R5bGUmJnRoaXMuX2Jhbm5lckFkU3R5bGUueSE9dW5kZWZpbmVkKXtcclxuXHRcdFx0XHR0aGlzLmJhbm5lci5zdHlsZS50b3AgPSB0aGlzLl9iYW5uZXJBZFN0eWxlLnk7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0XHR0aGlzLmJhbm5lci5zaG93KCk7XHJcblx0XHR0aGlzLmJhbm5lci5vbkVycm9yKGZ1bmN0aW9uKHJlcyl7XHJcblx0XHRcdHZhciBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkubmFtZTtcclxuXHRcdFx0dmFyIHR5cGUgPSAtMTtcclxuXHRcdFx0aWYoc2VsZi5nZXRTREtWZXJzaW9uQ2FuVXNlKCcyLjIuMicpKXtcclxuXHRcdFx0XHR0eXBlID0gcmVzLmVyckNvZGU7XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIHVybF9uID0gc2VydmVyVXJsKydsaWV5b3Uvd3hkYXRhL2FkZEdhbWVWaWRlb0FkdmVydGlzP2FkX3R5cGU9JysxKycmYXBwaWQ9Jyt3eEFwcElkKycmb3BlbmlkPScrb3BlbmlkKycmcGFnZT0nK3NjZW5lKycmdHlwZT0nK3R5cGU7XHJcblx0XHRcdHNlbGYuc2V0RGF0YUZvckh0dHAodXJsX24pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5iYW5uZXJUaW1lT3V0ID0gc2V0SW50ZXJ2YWwodGhpcy5yZWZyZXNoQmFubmVyLmJpbmQodGhpcyxvYmopLDEwMDAgKiB3eERhdGEuYmFubmVyT25saW5kRGVsYXlUaW1lKTsvL+WIt+aWsOW5v+WRilxyXG5cclxuXHR9LFxyXG5cdHNob3dCYW5uZXJDdXN0b206ZnVuY3Rpb24ob2JqKXtcclxuXHRcdGlmKCF0aGlzLmdldFNES1ZlcnNpb25DYW5Vc2UoJzIuMC40Jykpe1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZihvYmouYWRVbml0SWQgPT0gXCJcIikgXHJcblx0XHRcdHJldHVybjtcclxuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5iYW5uZXJUaW1lT3V0KTtcclxuXHRcdGlmKHRoaXMuYmFubmVyKVx0XHJcblx0XHQgICB0aGlzLmJhbm5lci5kZXN0cm95KClcclxuXHRcdHZhciB0ID0gMCwgZSA9IDAsIGEgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG5cdFx0dCA9IGEud2lkdGgsIGUgPSBhLmhlaWdodCwgbGlleW91X3Nob3dMb2coYSk7XHJcblx0XHR2YXIgdDIgPSB0O1xyXG5cdFx0dCA9IHQgKiBvYmouc2NhbGU7XHJcblxyXG5cdFx0dmFyIGkgPSBlIC0gdCAvIDMuNSAtIDAsIG8gPSAodDIgLSB0KSAvIDI7XHJcblxyXG5cdFx0dmFyIHggPSBvYmoueD9vYmoueDpvO1xyXG5cdFx0dmFyIHkgPSBvYmoueT9vYmoueTppO1xyXG5cdFx0dmFyIHcgPSAwO1xyXG5cdFx0aWYoY2Mud2luU2l6ZS5oZWlnaHQgLyBjYy53aW5TaXplLndpZHRoID4gMil7XHJcblx0XHRcdHcgPSAyMDtcclxuXHRcdH1cclxuXHRcdHRoaXMuc2hvd0Jhbm5lcih7YWRVbml0SWQ6b2JqLmlkLHN0eWxlOnsgbGVmdDogeCx0b3A6IHktMjAtMix3aWR0aDogdH19KVxyXG5cclxuXHR9LFxyXG5cdHJlZnJlc2hCYW5uZXIob2JqKXtcclxuXHRcdGlmKHRoaXMuYmFubmVyKVx0e1xyXG5cdFx0ICAgXHR0aGlzLmJhbm5lci5kZXN0cm95KClcclxuXHRcdFx0dGhpcy5iYW5uZXIgPSB3eC5jcmVhdGVCYW5uZXJBZChvYmopO1xyXG5cdFx0XHR0aGlzLmJhbm5lci5vblJlc2l6ZShyZXMgPT4ge1xyXG5cdFx0XHRcdHZhciB3ID0gMDtcclxuXHRcdFx0XHRpZihjYy53aW5TaXplLmhlaWdodCAvIGNjLndpblNpemUud2lkdGggPiAyICYmIGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKXtcclxuXHRcdFx0XHRcdHcgPSAyMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5iYW5uZXIuc3R5bGUudG9wID0gY2Mudmlldy5nZXRGcmFtZVNpemUoKS5oZWlnaHQgLSByZXMuaGVpZ2h0IC0gdztcclxuXHRcdFx0XHRpZih0aGlzLl9iYW5uZXJBZFN0eWxlJiZ0aGlzLl9iYW5uZXJBZFN0eWxlLnkhPXVuZGVmaW5lZCl7XHJcblx0XHRcdFx0XHR0aGlzLmJhbm5lci5zdHlsZS50b3AgPSB0aGlzLl9iYW5uZXJBZFN0eWxlLnk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0XHR0aGlzLmJhbm5lci5zaG93KCk7XHJcblx0XHRcdHRoaXMuYmFubmVyLm9uRXJyb3IoZnVuY3Rpb24ocmVzKXtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRzaG93QmFubmVyQnlCb3R0b206ZnVuY3Rpb24oaWQpe1xyXG5cdFx0dmFyIHQgPSAwLCBlID0gMCwgYSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcblx0XHR0ID0gYS53aWR0aCwgZSA9IGEuaGVpZ2h0LCBsaWV5b3Vfc2hvd0xvZyhhKTtcclxuXHRcdHZhciBpID0gZSAtIHQgLyAzLjUgLSAyMCwgbyA9ICh0IC0gdCkgLyAyO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0dmFyIHcgPSAwO1x0XHJcblx0XHRpZihjYy53aW5TaXplLmhlaWdodCAvIGNjLndpblNpemUud2lkdGggPiAyKXtcclxuXHRcdFx0dyA9IDIwO1xyXG5cdFx0fVx0XHRcdFxyXG5cdCAgXHR0aGlzLnNob3dCYW5uZXIoe2FkVW5pdElkOmlkLHN0eWxlOnsgbGVmdDogbyx0b3A6IGktdyx3aWR0aDogdH19KVxyXG5cdH0sXHJcblx0c2hvd0Jhbm5lckJ5VG9wOmZ1bmN0aW9uKGlkKXtcclxuICAgIFx0dmFyIHQgPSAwLCBlID0gMCwgYSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcblx0XHR0ID0gYS53aWR0aCwgZSA9IGEuaGVpZ2h0LCBsaWV5b3Vfc2hvd0xvZyhhKTtcclxuXHRcdHZhciBpID0gZSAtIHQgLyAzLjUgLSAxMCwgbyA9ICh0IC0gdCkgLyAyO1xyXG5cdCAgXHR0aGlzLnNob3dCYW5uZXIoe2FkVW5pdElkOmlkLHN0eWxlOnsgbGVmdDogbyx0b3A6IDAsd2lkdGg6IHR9fSk7XHJcblx0fSxcclxuXHRoaWRlQmFubmVyOmZ1bmN0aW9uKCl7XHJcblx0XHRcclxuXHRcdHRoaXMuX2lzU2hvd0Jhbm5lciA9IGZhbHNlO1xyXG5cdFx0aWYodGhpcy5iYW5uZXIpXHR7XHJcblx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5iYW5uZXJUaW1lT3V0KTtcclxuXHRcdCAgIFx0dGhpcy5iYW5uZXIuZGVzdHJveSgpO1xyXG5cdFx0ICAgXHR0aGlzLmJhbm5lciA9IG51bGw7XHJcblx0XHR9XHJcblx0fSxcclxuXHRzaG93UmV3YXJkZWRWaWRlb0FkOiBmdW5jdGlvbihpZCxjbG9zZUNhbGxCYWNrKXtcclxuXHRcdHRoaXMuc2hhcmVBbmRWaWRlb0FsbE51bSsrO1xyXG5cdFx0aWYoIXRoaXMuZ2V0U0RLVmVyc2lvbkNhblVzZSgnMi4wLjQnKSB8fCB3eFZpZGVvSWQgPT0gJycpe1xyXG5cdFx0XHR0aGlzLnNoYXJlKHtuYW1lOkdhbWVOYW1lLHNvdXJjZToxMCxzdWNjZXNzOmNsb3NlQ2FsbEJhY2t9KTtcclxuXHRcdFx0Ly8gY2xvc2VDYWxsQmFjayhmYWxzZSk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFxyXG5cdFx0Ly8gdGhpcy5oaWRlQmFubmVyKCk7XHJcblx0XHRcclxuXHRcdHZhciB2aWRlb0FkID0gd3guY3JlYXRlUmV3YXJkZWRWaWRlb0FkKHsgYWRVbml0SWQ6IHd4VmlkZW9JZCB9KTtcclxuXHRcdHZpZGVvQWQubG9hZCgpLnRoZW4oKCk9PnZpZGVvQWQuc2hvdygpKS5jYXRjaChlcnI9PmxpZXlvdV9zaG93TG9nKFwic1wiKSk7XHJcblx0XHR2aWRlb0FkLm9mZkNsb3NlKCk7XHJcblx0XHR2aWRlb0FkLm9uQ2xvc2UoZnVuY3Rpb24ocmVzKXtcclxuXHRcdFx0aWYod2luZG93LnZpdm9QbGF5VkRDYWxsQmFjayl7XHJcblx0XHRcdFx0Y2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0d2luZG93LnZpdm9QbGF5VkRDYWxsQmFjaygpO1xyXG5cdFx0XHRcdH0sIDEwMCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGlmKHNlbGYuZ2V0U0RLVmVyc2lvbkNhblVzZSgnMi4xLjAnKSl7XHJcblx0XHRcdFx0Ly8gY2xvc2VDYWxsQmFjayhyZXMuaXNFbmRlZCk7XHJcblx0XHRcdFx0aWYocmVzLmlzRW5kZWQpe1xyXG5cdFx0XHRcdFx0dHJ5e1xyXG5cdFx0XHRcdFx0Y2xvc2VDYWxsQmFjayhyZXMuaXNFbmRlZCk7XHJcblx0XHRcdFx0XHR9Y2F0Y2goZXJyKXt9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHRyeXtcclxuXHRcdFx0XHRcdFx0Y2xvc2VDYWxsQmFjayhmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQvLyBjbG9zZUNhbGxCYWNrKGZhbHNlKTtcclxuXHRcdFx0XHRcdH1jYXRjaChlcnIpe31cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGNsb3NlQ2FsbEJhY2sodHJ1ZSk7XHJcblx0XHR9KTtcclxuXHRcdHZpZGVvQWQub2ZmRXJyb3IoKTtcclxuXHRcdHZpZGVvQWQub25FcnJvcihmdW5jdGlvbihyZXMpe1xyXG5cdFx0XHR2YXIgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWU7XHJcblx0XHRcdHZhciB0eXBlID0gLTE7XHJcblx0XHRcdGlmKHNlbGYuZ2V0U0RLVmVyc2lvbkNhblVzZSgnMi4yLjInKSl7XHJcblx0XHRcdFx0dHlwZSA9IHJlcy5lcnJDb2RlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHZhciB1cmxfbiA9IHNlcnZlclVybCsnbGlleW91L3d4ZGF0YS9hZGRHYW1lVmlkZW9BZHZlcnRpcz9hZF90eXBlPScrMCsnJmFwcGlkPScrd3hBcHBJZCsnJm9wZW5pZD0nK29wZW5pZCsnJnBhZ2U9JytzY2VuZSsnJnR5cGU9Jyt0eXBlO1xyXG5cdFx0XHRzZWxmLnNldERhdGFGb3JIdHRwKHVybF9uKTtcclxuXHRcdFx0Ly8gY2xvc2VDYWxsQmFjayhmYWxzZSk7XHJcblx0XHRcdGNsb3NlQ2FsbEJhY2soZmFsc2UpO1xyXG5cdFx0XHRcclxuXHRcdH0pXHJcblx0fSxcclxuXHRzaG93Rm9ydW0gOiBmdW5jdGlvbihvYmope1xyXG5cdFx0dmFyIHd4U3lzID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHRcdGlmKCF0aGlzLmdldFNES1ZlcnNpb25DYW5Vc2UoJzIuMC4zJykpe1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR2YXIgd2lkdGhzID13eFN5cy5zY3JlZW5XaWR0aDtcclxuXHRcdHZhciBoZWlnaHQgPXd4U3lzLnNjcmVlbkhlaWdodDtcclxuXHRcdGlmKCF0aGlzLmdhbWVDbHViQnV0dG9uKXtcclxuXHRcdFx0dGhpcy5nYW1lQ2x1YkJ1dHRvbiA9IHd4LmNyZWF0ZUdhbWVDbHViQnV0dG9uKG9iaik7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5nYW1lQ2x1YkJ1dHRvbi5zaG93KClcclxuXHRcdH1cclxuXHR9LFxyXG5cdGNsb3NlRm9ydW0gOiBmdW5jdGlvbigpe1xyXG5cdFx0aWYoIXRoaXMuZ2V0U0RLVmVyc2lvbkNhblVzZSgnMi4wLjMnKSl7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGlmKHRoaXMuZ2FtZUNsdWJCdXR0b24pXHJcblx0XHRcdHRoaXMuZ2FtZUNsdWJCdXR0b24uaGlkZSgpO1xyXG5cdH0sXHJcblx0Ly/lvq7kv6HmjojmnYNcclxuXHRnZXRBdXRob3JpemU6IGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHR3eC5hdXRob3JpemUoe1xyXG4gICAgICAgICAgICBzY29wZTonc2NvcGUudXNlckluZm8nLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgd3guZ2V0VXNlckluZm8oe3N1Y2Nlc3M6ZnVuY3Rpb24ocmVzKXtcclxuXHRcdFx0XHRcdHZhciB1c2VySW5mbyA9IHJlcy51c2VySW5mb1xyXG4gICAgICAgICAgICAgICAgICAgIHVpbmZvLm5pY2sgPSB1c2VySW5mby5uaWNrTmFtZS8v5pi156ewXHJcbiAgICAgICAgICAgICAgICAgICAgdWluZm8uaWNvbiA9IHVzZXJJbmZvLmF2YXRhclVybC8v5aS05YOP6ZO+5o6lXHJcbiAgICAgICAgICAgICAgICAgICAgdWluZm8uc2V4ID0gdXNlckluZm8uZ2VuZGVyIC8v5oCn5YirIDDvvJrmnKrnn6XjgIEx77ya55S344CBMu+8muWls1xyXG4gICAgICAgICAgICAgICAgICAgIHVpbmZvLnByb3ZpbmNlID0gdXNlckluZm8ucHJvdmluY2UvL+ecgeS7vVxyXG4gICAgICAgICAgICAgICAgICAgIHVpbmZvLmNpdHkgPSB1c2VySW5mby5jaXR5Ly/ln47luIJcclxuXHRcdFx0XHRcdHVpbmZvLmNvdW50cnkgPSB1c2VySW5mby5jb3VudHJ5Ly/lm73lrrZcclxuXHRcdFx0XHRcdC8v5o+Q5Lqk54q25oCBXHJcblxyXG5cdFx0XHRcdFx0dmFyIHF1ZXJ5ID0gd3guZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKS5xdWVyeTtcclxuXHJcblx0XHRcdFx0XHR2YXIgbGFpeXVhbl9hcHBpZCA9IDA7XHJcblx0XHRcdFx0XHRpZih3eC5nZXRMYXVuY2hPcHRpb25zU3luYygpLnJlZmVycmVySW5mbyAmJiB3eC5nZXRMYXVuY2hPcHRpb25zU3luYygpLnJlZmVycmVySW5mby5hcHBJZCl7XHJcblx0XHRcdFx0XHRcdGxhaXl1YW5fYXBwaWQgPSB3eC5nZXRMYXVuY2hPcHRpb25zU3luYygpLnJlZmVycmVySW5mby5hcHBJZDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHZhciBsYWl5dWFuX3NjZW5lID0gd3guZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKS5zY2VuZTtcclxuXHRcdFx0XHRcdHZhciB1cmxfbiA9IHNlcnZlclVybCsnbGlleW91L3d4ZGF0YS9hZGRHYW1lU291cmNlSW5mbz9hcHBpZD0nK3d4QXBwSWQrJyZvcGVuaWQ9JytvcGVuaWQrJyZzY2VuY2U9JytsYWl5dWFuX3NjZW5lKycmc19hcHBpZD0nK2xhaXl1YW5fYXBwaWQrJyZzX3BhdGg9JytKU09OLnN0cmluZ2lmeShxdWVyeSk7XHJcblx0XHRcdFx0XHRzZWxmLnNldERhdGFGb3JIdHRwKHVybF9uKTtcclxuXHRcdFx0XHRcdGlmKHF1ZXJ5LnNvdXJjZSl7XHJcblx0XHRcdFx0XHRcdHZhciBzdHIgPSB3eERhdGEucHV0VG91Y2hTaGFyZURhdGFVcmwrXCI/XCIrXCJhcHBJZD1cIitxdWVyeS5hcHBJZCArXCImcHJpbmNpcGFsX2dhbWVySWQ9XCIrcXVlcnkuZ2FtZXJJZCtcIiZhc3Npc3RhbnRfZ2FtZXJJZD1cIitvcGVuaWQrXCImaXRlbUlkPVwiK3F1ZXJ5Lml0ZW1JZCtcIiZzb3VyY2U9XCIrcXVlcnkuc291cmNlO1xyXG5cdFx0XHRcdFx0XHRpZihxdWVyeS5pbnZpdGVGcmllbmQpIHtcclxuXHRcdFx0XHRcdFx0XHRzdHIgKz0gXCImbmFtZT1cIiArIHVzZXJJbmZvLm5pY2tOYW1lICsgXCImaWNvbj1cIiArIHVzZXJJbmZvLmF2YXRhclVybCArIFwiJmludml0ZUZyaWVuZD1cIiArIHF1ZXJ5Lmludml0ZUZyaWVuZDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRzZWxmLnNldERhdGFGb3JIdHRwKHN0cik7XHJcblx0XHRcdFx0XHRcdGlmKCFVc2VyZGVmYXVsdC5nZXRCb29sRm9yS2V5KHF1ZXJ5LmdhbWVySWQsZmFsc2UpKXtcclxuXHRcdFx0XHRcdFx0XHRjYW5HZXRMb2NhbENhcmQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdGdldExvY2FsQ2FyZUlkID0gXCJcIiArIHF1ZXJ5LmdhbWVySWQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0fVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfX0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblx0fSxcclxuXHQvL+W+ruS/oeeZu+W9lVxyXG5cdGxvZ2luOiBmdW5jdGlvbigpe1xyXG5cdFx0dmFyIHNlZiA9IHRoaXM7XHJcblx0XHR3eC5sb2dpbih7c3VjY2VzczpmdW5jdGlvbihyZXMpe1xyXG5cdFx0XHRzZWYuZ2V0T3BlbklkKHJlcy5jb2RlKTtcclxuXHRcdH19KTtcclxuXHR9LFxyXG5cclxuXHRnZXRPcGVuSWQ6IGZ1bmN0aW9uKGNvZGUpIHtcclxuXHRcdC8v6I635Y+Wb3BlbmlkXHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHR0aGlzLnNldERhdGFGb3JIdHRwKHd4RGF0YS5nZXRPcGVuSWRVcmwgKyAnP2FwcGlkPScgKyB3eERhdGEuYXBwSWQgKyAnJnNlY3JldD0nICsgd3hEYXRhLmFwcFNlY3JldCArICcmanNfY29kZT0nICsgY29kZSArICcmZ3JhbnRfdHlwZT1hdXRob3JpemF0aW9uX2NvZGUnLGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuXHRcdFx0dmFyIGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuXHRcdFx0b3BlbmlkID0gZGF0YS5vcGVuaWQ7XHJcblx0XHRcdHd4RGF0YS5zZXNzaW9uX2tleSA9IGRhdGEuc2Vzc2lvbl9rZXk7XHJcblx0XHRcdHVpbmZvLnVpZCA9IG9wZW5pZDtcclxuXHRcdFx0d3N1cmwgKz0gb3BlbmlkO1xyXG5cdFx0XHRpZihzZWxmLmFscmVhZHkpe1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHRzZWxmLm9wZW5TaGFyZSgpO1xyXG5cdFx0XHRpZihzZWxmLmhhdmVHZXRBdXRob3JpemUpXHJcblx0XHRcdFx0c2VsZi5nZXRBdXRob3JpemUoKTtcclxuXHRcdFx0dmFyIHF1ZXJ5ID0gd3guZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKS5xdWVyeTtcclxuXHJcblx0XHRcdHZhciBsYWl5dWFuX2FwcGlkID0gMDtcclxuXHRcdFx0aWYod3guZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKS5yZWZlcnJlckluZm8gJiYgd3guZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKS5yZWZlcnJlckluZm8uYXBwSWQpe1xyXG5cdFx0XHRcdGxhaXl1YW5fYXBwaWQgPSB3eC5nZXRMYXVuY2hPcHRpb25zU3luYygpLnJlZmVycmVySW5mby5hcHBJZDtcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgbGFpeXVhbl9zY2VuZSA9IHd4LmdldExhdW5jaE9wdGlvbnNTeW5jKCkuc2NlbmU7XHJcblx0XHRcdHZhciB1cmxfbiA9IHNlcnZlclVybCsnbGlleW91L3d4ZGF0YS9hZGRHYW1lU291cmNlSW5mbz9hcHBpZD0nK3d4QXBwSWQrJyZvcGVuaWQ9JytvcGVuaWQrJyZzY2VuY2U9JytsYWl5dWFuX3NjZW5lKycmc19hcHBpZD0nK2xhaXl1YW5fYXBwaWQrJyZzX3BhdGg9JytKU09OLnN0cmluZ2lmeShxdWVyeSk7XHJcblx0XHRcdHNlbGYuc2V0RGF0YUZvckh0dHAodXJsX24pO1xyXG5cdFx0XHR2YXIgcXVkYW8gPSAnbGlleW91JztcclxuXHRcdFx0aWYocXVlcnkuY2hhbm5lbCkgXHJcblx0XHRcdFx0cXVkYW8gPSBxdWVyeS5jaGFubmVsO1xyXG5cdFx0XHRzZWxmLnNldERhdGFGb3JIdHRwKHd4RGF0YS5wdXRQbGF5ZXJEYXRhICsgb3BlbmlkICsgJy8nICsgcXVkYW8pO1xyXG5cdFx0XHQvLyBzZWxmLnNldERhdGFGb3JIdHRwKHd4RGF0YS5wdXRQbGF5ZXJEYXRhICsgb3BlbmlkKTtcclxuXHRcdFx0XHJcblx0XHRcdHNlbGYuY2hlY2tSZXN1cnJOdW0oKTtcclxuXHRcdFx0c2VsZi5hbHJlYWR5ID0gdHJ1ZTtcclxuXHRcdH0pO1xyXG5cdH0sXHJcblxyXG5cdHNldFNoYXJlRGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHQvL+iOt+WPluWIhuS6q+aVsOaNrlxyXG5cdFx0dGhpcy5zZXREYXRhRm9ySHR0cCh3eERhdGEuc2hhcmVVcmwsZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG5cdFx0XHR3eERhdGEuc2hhcmVEYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdHNldE1vcmVHYW1lRGF0YTogZnVuY3Rpb24oKSB7XHJcblx0XHQvL+iOt+WPluabtOWkmua4uOaIj+aVsOaNrlxyXG5cdFx0dmFyIHN5c1BsYXRmb3JtID0gJ2FuZHJvaWQnXHJcblx0XHRpZihjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUyl7XHJcblx0XHRcdHN5c1BsYXRmb3JtID0gJ2lvcyc7XHJcblx0XHR9XHJcblx0XHR0aGlzLnNldERhdGFGb3JIdHRwKHd4RGF0YS5tb3JlR2FtZVVybCsnJnN5c1BsYXRGb3JtPScrc3lzUGxhdGZvcm0sZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG5cdFx0XHR3eERhdGEubW9yZUdhbWVEYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcblx0XHRcdGZvcih2YXIgaSA9IDA7aSA8IHd4RGF0YS5tb3JlR2FtZURhdGEubGVuZ3RoO2krKykge1xyXG5cdFx0XHRcdGlmKHd4RGF0YS5tb3JlR2FtZURhdGFbaV0uc2NyZWVuICYmIHd4RGF0YS5tb3JlR2FtZURhdGFbaV0uc2NyZWVuLmxlbmd0aCA+IDAgJiYgd3hEYXRhLm1vcmVHYW1lRGF0YVtpXS5zY3JlZW5bMF0ubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0c3BvdERhdGEucHVzaCh3eERhdGEubW9yZUdhbWVEYXRhW2ldKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cXVpY2tHYW1lLlJlY29tbWVuZEljb25EYXRhW2ldID0ge2p1bXBEYXRhOnd4RGF0YS5tb3JlR2FtZURhdGFbaV0uanVtcFR5cGUsdXJsOnd4RGF0YS5tb3JlR2FtZURhdGFbaV0uaWNvbixnYW1lTmFtZTonJ307XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0XHJcblx0c2hvd0FsbFJhbmtpbmdMYXllcjogZnVuY3Rpb24ob2JqKXtcclxuXHRcdFxyXG5cdH0sXHJcblx0c2hvd0ZhaWxSYW5raW5nTGF5ZXI6IGZ1bmN0aW9uKG9iail7XHJcblx0XHRcclxuXHR9LFxyXG5cclxuXHRzaG93TW9yZUdhbWVNaWRkbGVfb25lKG9iail7XHJcblx0XHRvYmouZ3JpZENvdW50ID0gNTtcclxuXHRcdHZhciBmdW4gPSAoKT0+e1xyXG5cdFx0XHRyZXR1cm4gQmFzZU1hbmFnZXIucHJvdG90eXBlLnNob3dNb3JlR2FtZU1pZGRsZV9vbmUuY2FsbCh0aGlzLG9iaik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5zaG93TW9yZUdhbWVPckdyaWQob2JqLGZ1bik7XHJcblx0fSxcclxuXHRzaG93TW9yZUdhbWVNaWRkbGVfdHdvKG9iail7XHJcblx0XHRpZihvYmoubW9yZUdhbWUpe1xyXG5cdFx0XHRyZXR1cm4gQmFzZU1hbmFnZXIucHJvdG90eXBlLnNob3dNb3JlR2FtZU1pZGRsZV90d28uY2FsbCh0aGlzLG9iaik7XHJcblx0XHR9XHJcblx0XHRvYmouZ3JpZENvdW50ID0gODtcclxuXHRcdHZhciBmdW4gPSAoKT0+e1xyXG5cdFx0XHRyZXR1cm4gQmFzZU1hbmFnZXIucHJvdG90eXBlLnNob3dNb3JlR2FtZU1pZGRsZV90d28uY2FsbCh0aGlzLG9iaik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5zaG93TW9yZUdhbWVPckdyaWQob2JqLGZ1bik7XHJcblx0fSxcclxuXHRzaG93TW9yZUdhbWVNaWRkbGVfdGhyZWUob2JqKXtcclxuXHRcdG9iai5ncmlkQ291bnQgPSA4O1xyXG5cdFx0dmFyIGZ1biA9ICgpPT57XHJcblx0XHRcdHJldHVybiBCYXNlTWFuYWdlci5wcm90b3R5cGUuc2hvd01vcmVHYW1lTWlkZGxlX3RocmVlLmNhbGwodGhpcyxvYmopO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXMuc2hvd01vcmVHYW1lT3JHcmlkKG9iaixmdW4pO1xyXG5cdH0sXHJcblx0c2hvd01vcmVHYW1lT3JHcmlkKG9iaixmdW4pe1xyXG5cdFx0dmFyIHR5cGUgPSB0aGlzLnNob3dNb3JlR2FtZU9yR3JpZFR5cGUlMj8xOjI7XHJcblx0XHRzd2l0Y2godGhpcy5zaG93TW9yZUdhbWVPckdyaWRUeXBlKXtcclxuXHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdHRoaXMuc2hvd01vcmVHYW1lT3JHcmlkVHlwZSsrO1xyXG5cdFx0XHRcdHRoaXMuc2hvd01vcmVHYW1lT3JHcmlkVHlwZSA9IHRoaXMuc2hvd01vcmVHYW1lT3JHcmlkVHlwZSUyPzE6MjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdHRoaXMuc2hvd01vcmVHYW1lT3JHcmlkVHlwZSsrO1xyXG5cdFx0XHRcdHRoaXMuc2hvd01vcmVHYW1lT3JHcmlkVHlwZSA9IHRoaXMuc2hvd01vcmVHYW1lT3JHcmlkVHlwZSUyPzE6MjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGlmKHR5cGUgPT0gMSl7XHJcblx0XHRcdGlmKGZ1bigpKXtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2hvd0dyaWRBZChvYmopO1xyXG5cdFx0XHR9XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0cmV0dXJuIHRoaXMuc2hvd0dyaWRBZChvYmosZnVuKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHNob3dHcmlkQWQob2JqLGZ1biA9IG51bGwpe1xyXG5cdFx0dmFyIGZOb2RlID0gb2JqLm5vZGU/b2JqLm5vZGU6Y2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuXHRcdFxyXG5cdFx0aWYodGhpcy5nZXRTREtWZXJzaW9uQ2FuVXNlKCcyLjkuMicpICYmIGxpZXlvdV93eEdyaWRJZCAhPSBcIlwiKXtcclxuXHRcdFx0dmFyIGdyaWRBZCA9IHd4LmNyZWF0ZUdyaWRBZCh7XHJcblx0XHRcdFx0YWRVbml0SWQ6bGlleW91X3d4R3JpZElkLFxyXG5cdFx0XHRcdHN0eWxlOntcclxuXHRcdFx0XHRcdGxlZnQ6MCxcclxuXHRcdFx0XHRcdHRvcDowLFxyXG5cdFx0XHRcdFx0d2lkdGg6MTAwLFxyXG5cdFx0XHRcdFx0aGVpZ2h0OjEwMFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0YWRUaGVtZTp0aGlzLmdyaWRBZFRoZW1lLFxyXG5cdFx0XHRcdGdyaWRDb3VudDpvYmouZ3JpZENvdW50XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRncmlkQWQuc2hvdygpO1xyXG5cdFx0XHRncmlkQWQub25FcnJvcigocmVzKT0+e1xyXG5cdFx0XHRcdGlmKGZ1bil7XHJcblx0XHRcdFx0XHRmdW4oKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlleW91X3Nob3dMb2coXCJ3eGxvZy0tLS0tIHNob3cgZ3JpZGFkIGZhaWwgXCIrSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHR2YXIgYmFzZU5vZGVqcyA9IGZOb2RlLmFkZENvbXBvbmVudCgnbGlleW91X2Jhc2VOb2RlJyk7XHJcblx0XHRcdHZhciBpc1Nob3dCYW5uZXIgPSB0aGlzLl9pc1Nob3dCYW5uZXI7XHJcblx0XHRcdGdyaWRBZC5vblJlc2l6ZSgocmVzKT0+e1xyXG5cdFx0XHRcdGdyaWRBZC5vZmZSZXNpemUoKTtcclxuXHRcdFx0XHRpZih0aGlzLl9oYXZlU2hvd1Nwb3RBZCl7XHJcblx0XHRcdFx0XHRncmlkQWQuZGVzdHJveSgpO1xyXG5cdFx0XHRcdFx0YmFzZU5vZGVqcy5kZXN0cm95Q2FsbEJhY2sgPSBudWxsO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLl9oYXZlU2hvd0dyaWRBZCA9IHRydWU7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCI+Pj4+Pj4+Pj4+Pj4+IGdyaWQgaGlkZUJhbmVuclwiKTtcclxuXHRcdFx0XHR0aGlzLmhpZGVCYW5uZXIoKTtcclxuXHRcdFx0XHR2YXIgdmlld1NpemUgPSBjYy52aWV3LmdldEZyYW1lU2l6ZSgpO1xyXG5cdFx0XHRcdGxldCB1cGRhdGVDYWxsQmFjayA9ICgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdvcmxkUG9zID0gZk5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKG9iai54P29iai54OjAsIG9iai55P29iai55OjApKTtcclxuXHRcdFx0XHRcdHZhciB4UHJvcG9ydGlvbiA9IHdvcmxkUG9zLnggLyBsaWV5b3VfU2RrTWFuYWdlci5zZGtXaW5TaXplLndpZHRoO1xyXG5cdFx0XHRcdFx0dmFyIHlQcm9wb3J0aW9uID0gMS0gKHdvcmxkUG9zLnkgLyBsaWV5b3VfU2RrTWFuYWdlci5zZGtXaW5TaXplLmhlaWdodCk7XHJcblx0XHRcdFx0XHRncmlkQWQuc3R5bGUubGVmdCA9IHZpZXdTaXplLndpZHRoKnhQcm9wb3J0aW9uIC0gcmVzLndpZHRoLzI7XHJcblx0XHRcdFx0XHRncmlkQWQuc3R5bGUudG9wID0gdmlld1NpemUuaGVpZ2h0KnlQcm9wb3J0aW9uIC0gcmVzLmhlaWdodC8yO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1cGRhdGVDYWxsQmFjaygpO1xyXG4gICAgICAgICAgICAgICAgYmFzZU5vZGVqcy51cGRhdGVDYWxsQmFjayA9IHVwZGF0ZUNhbGxCYWNrO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdGJhc2VOb2RlanMuZGVzdHJveUNhbGxCYWNrID0gKCk9PntcclxuXHRcdFx0XHR0aGlzLl9oYXZlU2hvd0dyaWRBZCA9IGZhbHNlO1xyXG5cdFx0XHRcdGlmKGlzU2hvd0Jhbm5lcil7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIj4+Pj4+Pj4+Pj4+Pj4gZ3JpZCBzaG93QmFuZW5yXCIpO1xyXG5cdFx0XHRcdFx0dGhpcy5zaG93QmFubmVyKHRoaXMuX3Nob3dCYW5uZXJPYmopO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsaWV5b3Vfc2hvd0xvZygnd3hsb2ctLS0tLS0tLS0tIGdyaWRBZCBkZXN0cm95Jyk7XHJcblx0XHRcdFx0Z3JpZEFkLmRlc3Ryb3koKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0aWYoZnVuKXtcclxuXHRcdFx0XHRyZXR1cm4gZnVuKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRsaWV5b3Vfc2hvd0xvZyhcInd4bG9nLS0tLS0gc2hvdyBncmlkYWQgdmVyc2lvbiBsb3cgXCIpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0c2hvd1Nwb3RCeUJlZ2luOiBmdW5jdGlvbihpc0hhdmVOYXRpdmUsdG9wKXtcclxuXHRcdHRoaXMuc2hvd015U3BvdCgpO1xyXG5cdH0sXHJcblx0c2hvd1Nwb3RCeVBhdXNlOiBmdW5jdGlvbihpc0hhdmVOYXRpdmUsdG9wKXtcclxuXHRcdHRoaXMuc2hvd015U3BvdCgpO1xyXG5cdH0sXHJcblx0c2hvd1Nwb3RCeUZpbmlzaDogZnVuY3Rpb24oaXNIYXZlTmF0aXZlLHRvcCl7XHJcblx0XHR0aGlzLnNob3dNeVNwb3QoKTtcclxuXHR9LFxyXG5cdHNob3dNeVNwb3QoKXtcclxuXHRcdGlmKHRoaXMuX2FsU2hvd1Nwb3Qpe1xyXG5cdFx0XHRsaWV5b3VfU2RrTWFuYWdlci5zaG93TW9yZUdhbWVHcmlkKCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuX2FsU2hvd1Nwb3QgPSB0cnVlO1xyXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdHRoaXMuX2FsU2hvd1Nwb3QgPSBmYWxzZTtcclxuXHRcdH0sIDEwKjEwMDApO1xyXG5cdFx0aWYoIXRoaXMuZ2V0U0RLVmVyc2lvbkNhblVzZSgnMi42LjAnKSl7XHJcblx0XHRcdGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dNb3JlR2FtZUdyaWQoKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0aWYod3hTcG90SWQgPT0gJycpe1xyXG5cdFx0XHRsaWV5b3VfU2RrTWFuYWdlci5zaG93TW9yZUdhbWVHcmlkKCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdHZhciBzcG90QWQgPSB3eC5jcmVhdGVJbnRlcnN0aXRpYWxBZCh7XHJcblx0XHRcdGFkVW5pdElkOnd4U3BvdElkXHJcblx0XHR9KTtcclxuXHRcdGlmKHRoaXMuZ2V0U0RLVmVyc2lvbkNhblVzZSgnMi44LjAnKSl7XHJcblx0XHRcdHNwb3RBZC5sb2FkKCk7XHJcblx0XHR9XHJcblx0XHR2YXIgaXNTaG93QmFubmVyID0gdGhpcy5faXNTaG93QmFubmVyO1xyXG5cdFx0c3BvdEFkLm9uTG9hZCgoKT0+e1xyXG5cdFx0XHRzcG90QWQub2ZmTG9hZCgpO1xyXG5cdFx0XHRpZih0aGlzLl9oYXZlU2hvd0dyaWRBZCl7XHJcblx0XHRcdFx0bGlleW91X1Nka01hbmFnZXIuc2hvd01vcmVHYW1lR3JpZCgpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLl9oYXZlU2hvd1Nwb3RBZCA9IHRydWU7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwiPj4+Pj4+Pj4+Pj4+PiBzcG90IGhpZGVCYW5lbnJcIik7XHJcblx0XHRcdHRoaXMuaGlkZUJhbm5lcigpO1xyXG5cdFx0XHRzcG90QWQuc2hvdygpO1xyXG5cdFx0fSk7XHJcblx0XHRzcG90QWQub25DbG9zZSgoKT0+e1xyXG5cdFx0XHQvL+WFs+mXrXNwb3RcclxuXHRcdFx0dGhpcy5faGF2ZVNob3dTcG90QWQgPSBmYWxzZTtcclxuXHRcdFx0aWYoaXNTaG93QmFubmVyKXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIj4+Pj4+Pj4+Pj4+Pj4gc3BvdCBzaG93QmFuZW5yXCIpO1xyXG5cdFx0XHRcdHRoaXMuc2hvd0Jhbm5lcih0aGlzLl9zaG93QmFubmVyT2JqKTtcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHJcblx0XHRzcG90QWQub25FcnJvcihmdW5jdGlvbihyZXMpe1xyXG5cdFx0XHRsaWV5b3VfU2RrTWFuYWdlci5zaG93TW9yZUdhbWVHcmlkKCk7XHJcblx0XHRcdHNwb3RBZC5vZmZDbG9zZSgpO1xyXG5cdFx0XHRzcG90QWQub2ZmRXJyb3IoKTtcclxuXHRcdFx0c3BvdEFkLm9mZkxvYWQoKTtcclxuXHRcdFx0aWYoc2VsZi5nZXRTREtWZXJzaW9uQ2FuVXNlKCcyLjguMCcpKXtcclxuXHRcdFx0XHRzcG90QWQuZGVzdHJveSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGxpZXlvdV9zaG93TG9nKCdzaG93IHNwb3QgYWQgZmFpbCAgICcrSlNPTi5zdHJpbmdpZnkocmVzKSk7XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdHNldFJhbmtpbmdEYXRhOiBmdW5jdGlvbihrZXksc2NvcmUpe1xyXG5cdFx0aWYoIXRoaXMuZ2V0U0RLVmVyc2lvbkNhblVzZSgnMS45LjkyJykpe1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR3eC5zZXRVc2VyQ2xvdWRTdG9yYWdlKHtcclxuICAgICAgICAgICAgS1ZEYXRhTGlzdDpbe1wia2V5XCI6a2V5LFwidmFsdWVcIjpcIlwiICsgc2NvcmV9XSxcclxuICAgICAgICAgICAgc3VjY2VzczpmdW5jdGlvbigpe2xpZXlvdV9zaG93TG9nKFwic3VjY2Vzc1wiKX0sXHJcbiAgICAgICAgICAgIGZhaWw6ZnVuY3Rpb24oKXtsaWV5b3Vfc2hvd0xvZyhcImZhaWxcIil9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTpmdW5jdGlvbigpe2xpZXlvdV9zaG93TG9nKFwiY29tcGxldGVcIil9XHJcbiAgICAgICAgfSk7XHJcblx0fSxcclxuXHRcclxuXHQvKipcclxuXHQgKiDluK7liqnmiJDlip/liIbkuqtcclxuXHQgKi9cclxuXHRzaGFyZUhlbHBTdWNjZXNzKGxldmVsKXtcclxuXHRcdHRoaXMuc2hhcmVPblNob3cgPSB0cnVlO1xyXG5cdFx0dGhpcy5zaGFyZUJlZ1RpbWUgPSBnZXRUaW1lKCkvMTAwMDtcclxuXHRcdHRoaXMuc2hhcmVDYWxsQmFjayA9IG51bGw7XHJcblx0XHQvL3NvdXJjZSA5XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRpZih3eERhdGEuc2hhcmVEYXRhLmxlbmd0aCA+IDAgJiYgZ2V0Q2FuU2hhcmUoKSl7XHJcblx0XHRcdHZhciBhZGlkID0gMDtcclxuXHRcdFx0dmFyIF90aXRsZSA9IFwiXCI7XHJcblx0XHRcdHZhciBfdXJsID0gXCJcIjtcclxuXHJcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCB3eERhdGEuc2hhcmVEYXRhLmxlbmd0aDtpKyspe1xyXG5cdFx0XHRcdGlmKHd4RGF0YS5zaGFyZURhdGFbaV0ubW9kZSA9PSBHYW1lTmFtZSl7XHJcblx0XHRcdFx0XHR2YXIgZGF0YSA9IHd4RGF0YS5zaGFyZURhdGFbaV0uaXRlbTtcclxuXHRcdFx0XHRcdGlmKHd4RGF0YS5zaGFyZURhdGFbaV0ubGV2ZWwgJiYgd3hEYXRhLnNoYXJlRGF0YVtpXS5sZXZlbC5zdWNjZXNzKSB7XHJcblx0XHRcdFx0XHRcdGRhdGEgPSB3eERhdGEuc2hhcmVEYXRhW2ldLmxldmVsLnN1Y2Nlc3M7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR2YXIgcmFuZG9tID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIGRhdGEubGVuZ3RoKTtcclxuXHRcdFx0XHRcdGFkaWQgPSBkYXRhW3JhbmRvbV0uaWQ7XHJcblx0XHRcdFx0XHRfdGl0bGUgPSBkYXRhW3JhbmRvbV0udGl0bGU7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHRfdGl0bGUgPSBfdGl0bGUucmVwbGFjZSgvJWQvZywgbGV2ZWwgKyAxKTtcclxuXHRcdFx0XHRcdF91cmwgPSBkYXRhW3JhbmRvbV0uaW1nO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIF9xdWVyeSA9d3hEYXRhLnB1dFNoYXJlRGF0YVVybCtcIj9kc2Fkc2E9ZHNkc2RcIitcIiZhcHBJZD1cIit3eERhdGEuYXBwSWQrXCImZ2FtZXJJZD1cIitvcGVuaWQrXCImaXRlbUlkPVwiICsgYWRpZCArIFwiJnNvdXJjZT05XCI7XHJcblx0XHRcdHRoaXMuX3NoYXJlUXVlcnkgPSBfcXVlcnk7XHJcblx0XHRcdHd4LnNoYXJlQXBwTWVzc2FnZSh7XHJcblx0XHRcdFx0dGl0bGU6X3RpdGxlLFxyXG5cdFx0XHRcdGltYWdlVXJsOl91cmwsXHJcblx0XHRcdFx0cXVlcnk6X3F1ZXJ5XHJcblx0XHRcdFx0XHJcblx0XHRcdH0pO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHZhciBfcXVlcnkgPXd4RGF0YS5wdXRTaGFyZURhdGFVcmwrXCI/ZHNhZHNhPWRzZHNkXCIrXCImYXBwSWQ9XCIrd3hEYXRhLmFwcElkK1wiJmdhbWVySWQ9XCIrb3BlbmlkK1wiJml0ZW1JZD1cIiArIC0xICsgXCImc291cmNlPTlcIjtcclxuXHRcdFx0dGhpcy5fc2hhcmVRdWVyeSA9IF9xdWVyeTtcclxuXHRcdFx0d3guc2hhcmVBcHBNZXNzYWdlKHtcclxuXHRcdFx0XHR0aXRsZTpcIuWlveeOqeeahOa4uOaIj++8jOW/q+adpeS4gOi1t+eOqeWQp1wiLFxyXG5cdFx0XHRcdGltYWdlVXJsOlwiaHR0cHM6Ly9yZXMuaWdhbWU1OC5jb20vd3h4eXgvY29tbW9tL3NoYXJlSWNvbi5wbmdcIixcclxuXHRcdFx0XHRxdWVyeTpfcXVlcnlcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiDluK7liqnliIbkuqtcclxuXHQgKi9cclxuXHRzaGFyZUhlbHAobGV2ZWwpe1xyXG5cdFx0dGhpcy5zaGFyZU9uU2hvdyA9IHRydWU7XHJcblx0XHR0aGlzLnNoYXJlQmVnVGltZSA9IGdldFRpbWUoKS8xMDAwO1xyXG5cdFx0dGhpcy5zaGFyZUNhbGxCYWNrID0gbnVsbDtcclxuXHRcdC8vc291cmNlIDhcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdGlmKHd4RGF0YS5zaGFyZURhdGEubGVuZ3RoID4gMCAmJiBnZXRDYW5TaGFyZSgpKXtcclxuXHRcdFx0dmFyIGFkaWQgPSAwO1xyXG5cdFx0XHR2YXIgX3RpdGxlID0gXCJcIjtcclxuXHRcdFx0dmFyIF91cmwgPSBcIlwiO1xyXG5cclxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHd4RGF0YS5zaGFyZURhdGEubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0aWYod3hEYXRhLnNoYXJlRGF0YVtpXS5tb2RlID09IEdhbWVOYW1lKXtcclxuXHRcdFx0XHRcdHZhciBkYXRhID0gd3hEYXRhLnNoYXJlRGF0YVtpXS5pdGVtO1xyXG5cdFx0XHRcdFx0aWYod3hEYXRhLnNoYXJlRGF0YVtpXS5sZXZlbCAmJiB3eERhdGEuc2hhcmVEYXRhW2ldLmxldmVsLmhlbHApIHtcclxuXHRcdFx0XHRcdFx0ZGF0YSA9IHd4RGF0YS5zaGFyZURhdGFbaV0ubGV2ZWwuaGVscDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dmFyIHJhbmRvbSA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiBkYXRhLmxlbmd0aCk7XHJcblx0XHRcdFx0XHRhZGlkID0gZGF0YVtyYW5kb21dLmlkO1xyXG5cdFx0XHRcdFx0X3RpdGxlID0gZGF0YVtyYW5kb21dLnRpdGxlO1xyXG5cdFx0XHRcdFx0X3RpdGxlID0gX3RpdGxlLnJlcGxhY2UoLyVkL2csIGxldmVsICsgMSk7XHJcblx0XHRcdFx0XHRfdXJsID0gZGF0YVtyYW5kb21dLmltZztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuICAgICAgICBcdFxyXG5cclxuXHRcdFx0dmFyIF9xdWVyeSA9d3hEYXRhLnB1dFNoYXJlRGF0YVVybCtcIj9kc2Fkc2E9ZHNkc2RcIitcIiZhcHBJZD1cIit3eERhdGEuYXBwSWQrXCImZ2FtZXJJZD1cIitvcGVuaWQrXCImaXRlbUlkPVwiICsgYWRpZCArIFwiJnNvdXJjZT04XCIgKyBcIiZsZXZlbD1cIiArIGxldmVsO1xyXG5cdFx0XHR0aGlzLl9zaGFyZVF1ZXJ5ID0gX3F1ZXJ5O1xyXG5cdFx0XHR3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG5cdFx0XHRcdHRpdGxlOl90aXRsZSxcclxuXHRcdFx0XHRpbWFnZVVybDpfdXJsLFxyXG5cdFx0XHRcdHF1ZXJ5Ol9xdWVyeVxyXG5cdFx0XHR9KTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR2YXIgX3F1ZXJ5ID13eERhdGEucHV0U2hhcmVEYXRhVXJsK1wiP2RzYWRzYT1kc2RzZFwiK1wiJmFwcElkPVwiK3d4RGF0YS5hcHBJZCtcIiZnYW1lcklkPVwiK29wZW5pZCtcIiZpdGVtSWQ9XCIgKyAtMSArIFwiJnNvdXJjZT04XCIgKyBcIiZsZXZlbD1cIiArIGxldmVsO1xyXG5cdFx0XHR0aGlzLl9zaGFyZVF1ZXJ5ID0gX3F1ZXJ5O1xyXG5cdFx0XHR3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG5cdFx0XHRcdHRpdGxlOlwi5aW9546p55qE5ri45oiP77yM5b+r5p2l5LiA6LW3546p5ZCnXCIsXHJcblx0XHRcdFx0aW1hZ2VVcmw6XCJodHRwczovL3Jlcy5pZ2FtZTU4LmNvbS93eHh5eC9jb21tb20vc2hhcmVJY29uLnBuZ1wiLFxyXG5cdFx0XHRcdHF1ZXJ5Ol9xdWVyeVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdGhlbHBGcmllbmRTdWNjZXNzKGxldmVsKXtcclxuXHRcdC8vd3hBcHBJZCBoZWxwT3BlbklkIGxldmVsIHVpbmZvLmljb24gdWluZm8ubmlja1xyXG5cdFx0dmFyIHVybCA9IHNlcnZlclVybCArIFwibGlleW91L3d4ZGF0YS9hZGRIZWxwUmVjb3JkP3d4R2FtZUlkPVwiICsgd3hBcHBJZCArIFwiJmdhbWVySWQ9XCIgKyBoZWxwT3BlbklkICsgXCImbGV2ZWw9XCIgKyBsZXZlbCArIFwiJmljb249XCIgKyB1aW5mby5pY29uICsgXCImbmFtZT1cIiArIHVpbmZvLm5pY2s7XHJcblx0XHR0aGlzLnNldERhdGFGb3JIdHRwKHVybCk7XHJcblx0fSxcclxuXHRnZXRJc0hhdmVGcmllbmRIZWxwTWUobGV2ZWwsZnVuKXtcclxuXHRcdC8vbGV2ZWwgb3BlbmlkIHd4QXBwSWQgICBcclxuXHRcdHZhciB1cmwgPSBzZXJ2ZXJVcmwgKyBcImxpZXlvdS93eGRhdGEvZ2V0Q2xpY2tJbmZvL1wiICsgd3hBcHBJZCArIFwiL1wiICsgb3BlbmlkICsgXCIvXCIgKyBsZXZlbDtcclxuXHRcdHRoaXMuc2V0RGF0YUZvckh0dHAodXJsLGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuXHRcdFx0dmFyIGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlKTtcclxuXHRcdFx0aWYoZGF0YS5uYW1lICYmIGRhdGEubmFtZSAhPSBcIlwiKSB7XHJcblx0XHRcdFx0ZnVuKHtsZXZlbDpsZXZlbCxuYW1lOmRhdGEubmFtZSxpY29uOmRhdGEuaWNvbn0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIOaZrumAmuWIhuS6q1xyXG5cdCAqL1xyXG5cdHNoYXJlOiBmdW5jdGlvbihvYmope1xyXG5cdFx0dGhpcy5zaGFyZUFuZFZpZGVvQWxsTnVtKys7XHJcblx0XHR0aGlzLnNoYXJlT25TaG93ID0gdHJ1ZTtcclxuXHRcdHRoaXMuc2hhcmVCZWdUaW1lID0gZ2V0VGltZSgpLzEwMDA7XHJcblx0XHRpZihvYmouc3VjY2Vzcyl7XHJcblx0XHRcdHRoaXMuc2hhcmVDYWxsQmFjayA9IG9iai5zdWNjZXNzO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMuc2hhcmVDYWxsQmFjayA9IG51bGxcclxuXHRcdH1cclxuXHRcdHZhciBnZXRHcm91cElkID0gb2JqLmdldEdyb3VwSWQ/b2JqLmdldEdyb3VwSWQ6dHJ1ZTtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdGlmKHd4RGF0YS5zaGFyZURhdGEubGVuZ3RoIDw9IDAgfHwgIWdldENhblNoYXJlKCkpe1xyXG5cdFx0XHR2YXIgX3F1ZXJ5ID13eERhdGEucHV0U2hhcmVEYXRhVXJsK1wiP2RzYWRzYT1kc2RzZFwiK1wiJmFwcElkPVwiK3d4RGF0YS5hcHBJZCtcIiZnYW1lcklkPVwiK29wZW5pZCtcIiZpdGVtSWQ9XCIrLTErXCImc291cmNlPVwiK29iai5zb3VyY2U7XHJcblx0XHRcdGlmKG9iai5pbnZpdGVGcmllbmQpIHtcclxuXHRcdFx0XHRfcXVlcnkgKz0gXCImaW52aXRlRnJpZW5kPVwiICsgb2JqLmludml0ZUZyaWVuZDtcclxuXHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLl9zaGFyZVF1ZXJ5ID0gX3F1ZXJ5O1xyXG5cdFx0XHR3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG5cdFx0XHRcdHRpdGxlOlwi5aW9546p55qE5ri45oiP77yM5b+r5p2l5LiA6LW3546p5ZCnXCIsXHJcblx0XHRcdFx0aW1hZ2VVcmw6XCJodHRwczovL3Jlcy5pZ2FtZTU4LmNvbS93eHh5eC9jb21tb20vc2hhcmVJY29uLnBuZ1wiLFxyXG5cdFx0XHRcdHF1ZXJ5Ol9xdWVyeVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9KTtcclxuXHRcdFxyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHQvL+WIhuS6q29iaiA9IHtuYW1lOnNzcyxzb3VyY2U6MSxzdWNjZXNzOmZ1bn1cclxuXHRcdHZhciBhZGlkID0gMDtcclxuXHRcdHZhciBfdGl0bGUgPSBcIlwiO1xyXG5cdFx0dmFyIF91cmwgPSBcIlwiO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHd4RGF0YS5zaGFyZURhdGEubGVuZ3RoO2krKyl7XHJcblx0XHRcdGlmKHd4RGF0YS5zaGFyZURhdGFbaV0ubW9kZSA9PSBvYmoubmFtZSl7XHJcblx0XHRcdFx0dmFyIGRhdGEgPSB3eERhdGEuc2hhcmVEYXRhW2ldLml0ZW07XHJcblx0XHRcdFx0dmFyIHJhbmRvbSA9IHBhcnNlSW50KE1hdGgucmFuZG9tKCkgKiBkYXRhLmxlbmd0aCk7XHJcblx0XHRcdFx0YWRpZCA9IGRhdGFbcmFuZG9tXS5pZDtcclxuXHRcdFx0XHRfdGl0bGUgPSBkYXRhW3JhbmRvbV0udGl0bGU7XHJcblx0XHRcdFx0X3VybCA9IGRhdGFbcmFuZG9tXS5pbWc7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dmFyIF9xdWVyeSA9d3hEYXRhLnB1dFNoYXJlRGF0YVVybCtcIj9kc2Fkc2E9ZHNkc2RcIitcIiZhcHBJZD1cIit3eERhdGEuYXBwSWQrXCImZ2FtZXJJZD1cIitvcGVuaWQrXCImaXRlbUlkPVwiK2FkaWQrXCImc291cmNlPVwiK29iai5zb3VyY2U7XHJcblx0XHRpZihvYmouaW52aXRlRnJpZW5kKSB7XHJcblx0XHRcdF9xdWVyeSArPSBcIiZpbnZpdGVGcmllbmQ9XCIgKyBvYmouaW52aXRlRnJpZW5kO1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcdHRoaXMuX3NoYXJlUXVlcnkgPSBfcXVlcnk7XHJcblx0XHR3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICB0aXRsZTpfdGl0bGUsXHJcbiAgICAgICAgICAgIGltYWdlVXJsOl91cmwsXHJcbiAgICAgICAgICAgIHF1ZXJ5Ol9xdWVyeVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHR9LFxyXG5cdGNoZWNrUmVzdXJyTnVtXzI6IGZ1bmN0aW9uKCl7XHJcblx0XHRpZihjYW5HZXROZXRDYXJkTnVtKXtcclxuXHRcdFx0Y2FuR2V0TmV0Q2FyZE51bSA9IGZhbHNlO1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0Y2FuR2V0TmV0Q2FyZE51bSA9IHRydWU7XHJcblx0XHRcdH0sZ2V0TmV0Q2FyZFRpbWUpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jaGVja1Jlc3Vyck51bSgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBsb2NhbENhcmROdW0gPSBVc2VyZGVmYXVsdC5nZXRJbnRGb3JLZXkobG9jYWxDYXJkS2V5LDApO1xyXG5cdFx0cmV0dXJuIGxvY2FsQ2FyZE51bSArIG5ldENhcmROdW0gPiA1PzU6bG9jYWxDYXJkTnVtICsgbmV0Q2FyZE51bTtcclxuXHR9LFxyXG5cdGNoZWNrUmVzdXJyTnVtOiBmdW5jdGlvbigpe1xyXG5cdFx0Ly/mn6XnnIvlpI3mtLvmlbDph48gXHJcblx0XHR0aGlzLnNldERhdGFGb3JIdHRwKHd4RGF0YS5jaGVja1Jlc3VyckRhdGFVcmwgKyAgXCI/YXBwSWQ9XCIgKyB3eERhdGEuYXBwSWQgKyBcIiZnYW1lcklkPVwiK29wZW5pZCxmdW5jdGlvbihyZXNwb25zZSl7XHJcblx0XHRcdG5ldENhcmROdW0gPSBwYXJzZUludChyZXNwb25zZSk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0dmFyIGxvY2FsQ2FyZE51bSA9IFVzZXJkZWZhdWx0LmdldEludEZvcktleShsb2NhbENhcmRLZXksMCk7XHJcblx0XHRyZXR1cm4gbG9jYWxDYXJkTnVtICsgbmV0Q2FyZE51bSA+IDU/NTpsb2NhbENhcmROdW0gKyBuZXRDYXJkTnVtO1xyXG5cdH0sXHJcblx0dXNlUmVzdXJyOiBmdW5jdGlvbigpe1xyXG5cdFx0dmFyIGxvY2FsQ2FyZE51bSA9IFVzZXJkZWZhdWx0LmdldEludEZvcktleShsb2NhbENhcmRLZXksMCk7XHJcbiAgICAgICAgaWYobG9jYWxDYXJkTnVtID4gMCkge1xyXG5cdFx0XHR2YXIgbnVtID0gbG9jYWxDYXJkTnVtICsgbmV0Q2FyZE51bTtcclxuXHRcdFx0dmFyIGRlbE51bSA9IDE7XHJcblx0XHRcdGlmKG51bSA+PSA1KSB7XHJcblx0XHRcdFx0ZGVsTnVtID0gbnVtIC0gNDtcclxuXHRcdFx0fVxyXG5cdFx0XHRVc2VyZGVmYXVsdC5zZXREYXRhRm9yS2V5KGxvY2FsQ2FyZEtleSxsb2NhbENhcmROdW0gLSBkZWxOdW0pO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRuZXRDYXJkTnVtLS07XHJcblx0XHQvL+S9v+eUqOWkjea0u1xyXG5cdFx0dmFyIHVybCA9IHd4RGF0YS51c2VSZXN1cnJEYXRhVXJsICsgXCI/YXBwSWQ9XCIgKyB3eERhdGEuYXBwSWQgKyBcIiZnYW1lcklkPVwiK29wZW5pZDtcclxuXHRcdHRoaXMuc2V0RGF0YUZvckh0dHAodXJsKTtcclxuXHR9LFxyXG5cdGFkZExvY2FsUmVzdXJyOiBmdW5jdGlvbigpe1xyXG5cdFx0dmFyIGxvY2FsQ2FyZE51bSA9IFVzZXJkZWZhdWx0LmdldEludEZvcktleShsb2NhbENhcmRLZXksMCk7XHJcbiAgICAgICBcclxuXHRcdFVzZXJkZWZhdWx0LnNldERhdGFGb3JLZXkobG9jYWxDYXJkS2V5LGxvY2FsQ2FyZE51bSArIDEpO1xyXG5cdFx0XHRcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIOiOt+WPluW4ruWKqeWFs+WNoSDpu5jorqTov5Tlm54tMVxyXG5cdCAqL1xyXG5cdGdldEhlbHBMZXZlbCgpe1xyXG5cdFx0dmFyIHF1ZXJ5ID0gd3guZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKS5xdWVyeTtcclxuXHRcdGlmKHF1ZXJ5LmxldmVsICYmIHF1ZXJ5LnNvdXJjZSA9PSA4KSB7XHJcblx0XHRcdGhlbHBPcGVuSWQgPSBxdWVyeS5nYW1lcklkO1xyXG5cdFx0XHRyZXR1cm4gcGFyc2VJbnQocXVlcnkubGV2ZWwpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIC0xO1xyXG5cdH0sXHJcblx0b3BlblNoYXJlOiBmdW5jdGlvbigpe1xyXG5cdFx0Ly/lvIDlkK/ooqvliqjliIbkuqtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdGlmKCF0aGlzLmhhdmVHZXRBdXRob3JpemUpIHtcclxuXHRcdFx0dmFyIHF1ZXJ5ID0gd3guZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKS5xdWVyeTtcclxuXHRcdFx0aWYocXVlcnkuc291cmNlKXtcclxuXHRcdFx0XHR2YXIgc3RyID0gd3hEYXRhLnB1dFRvdWNoU2hhcmVEYXRhVXJsK1wiP1wiK1wiYXBwSWQ9XCIrcXVlcnkuYXBwSWQgK1wiJnByaW5jaXBhbF9nYW1lcklkPVwiK3F1ZXJ5LmdhbWVySWQrXCImYXNzaXN0YW50X2dhbWVySWQ9XCIrb3BlbmlkK1wiJml0ZW1JZD1cIitxdWVyeS5pdGVtSWQrXCImc291cmNlPVwiK3F1ZXJ5LnNvdXJjZTtcclxuXHRcdFx0XHR0aGlzLnNldERhdGFGb3JIdHRwKHN0cik7XHJcblx0XHRcdFx0aWYoIVVzZXJkZWZhdWx0LmdldEJvb2xGb3JLZXkocXVlcnkuZ2FtZXJJZCxmYWxzZSkpe1xyXG5cdFx0XHRcdFx0Y2FuR2V0TG9jYWxDYXJkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGdldExvY2FsQ2FyZUlkID0gXCJcIiArIHF1ZXJ5LmdhbWVySWQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG4gICAgICAgIHd4LnNob3dTaGFyZU1lbnUoe3dpdGhTaGFyZVRpY2tldDogdHJ1ZX0pO1xyXG4gICAgICAgIHd4Lm9uU2hhcmVBcHBNZXNzYWdlKGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHRzZWxmLnNoYXJlT25TaG93ID0gdHJ1ZTtcclxuXHRcdFx0c2VsZi5zaGFyZUJlZ1RpbWUgPSBnZXRUaW1lKCkvMTAwMDtcclxuXHRcdFx0c2VsZi5zaGFyZUNhbGxCYWNrID0gbnVsbFxyXG5cclxuXHRcdFx0dmFyIGFkaWQgPSAtMTtcclxuXHRcdFx0dmFyIF90aXRsZSA9IFwi5aW9546p55qE5ri45oiP77yM5b+r5p2l5LiA6LW3546p5ZCnXCI7XHJcblx0XHRcdHZhciBfdXJsID0gXCJodHRwczovL3Jlcy5pZ2FtZTU4LmNvbS93eHh5eC9jb21tb20vc2hhcmVJY29uLnBuZ1wiO1xyXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgd3hEYXRhLnNoYXJlRGF0YS5sZW5ndGg7aSsrKXtcclxuXHRcdFx0XHRpZih3eERhdGEuc2hhcmVEYXRhW2ldLm1vZGUgPT0gR2FtZU5hbWUpe1xyXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSB3eERhdGEuc2hhcmVEYXRhW2ldLml0ZW07XHJcblx0XHRcdFx0XHR2YXIgcmFuZG9tID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIGRhdGEubGVuZ3RoKTtcclxuXHRcdFx0XHRcdGFkaWQgPSBkYXRhW3JhbmRvbV0uaWQ7XHJcblx0XHRcdFx0XHRfdGl0bGUgPSBkYXRhW3JhbmRvbV0udGl0bGU7XHJcblx0XHRcdFx0XHRfdXJsID0gZGF0YVtyYW5kb21dLmltZztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcbiAgICAgICAgICAgIHZhciBfcXVlcnkgPXd4RGF0YS5wdXRTaGFyZURhdGFVcmwrXCI/c2RzZHNkcz1kc2RzXCIrXCImYXBwSWQ9XCIrd3hEYXRhLmFwcElkK1wiJmdhbWVySWQ9XCIrb3BlbmlkK1wiJml0ZW1JZD1cIithZGlkK1wiJnNvdXJjZT0xXCI7XHJcblx0XHRcdHNlbGYuX3NoYXJlUXVlcnkgPSBfcXVlcnk7XHJcblx0XHRcdHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogX3RpdGxlLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VVcmw6IF91cmwsXHJcbiAgICAgICAgICAgICAgICBxdWVyeTpfcXVlcnlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cdH0sXHJcblx0Ly8gMSDmm7TlpJrmuLjmiI8gMiDmj5LlsY/lub/lkYogMyDkuInooYznmoTnjJzkvaDllpzmrKIgNCDkuKTooYznmoTnjJzkvaDllpzmrKIgNSDkuIDooYznmoTnjJzkvaDllpzmrKIgNiBiYW5uZXLlpKflm74gNyBiYW5uZXLlsI/lm74gOCDkvZPpqozmnInlpZYgOSDnsr7lk4HmjqjojZAgMTAgaWNvblxyXG5cdGp1bXBBcHAoZGF0YSx1cmwscGFnZSxudW0pe1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0aWYodGhpcy5nZXRTREtWZXJzaW9uQ2FuVXNlKCcyLjIuMCcpKXtcclxuXHRcdFx0d3gubmF2aWdhdGVUb01pbmlQcm9ncmFtKHthcHBJZDpkYXRhLmFwcElkLHBhdGg6ZGF0YS5wYXRoLGZhaWw6ZnVuY3Rpb24oZXJyKXtcclxuXHRcdFx0XHR2YXIgZm9yd2FyZF9hcHBpZCA9IGRhdGEuYXBwSWQ7XHJcblx0XHRcdFx0dmFyIHVybF9uID0gc2VydmVyVXJsKydsaWV5b3Uvd3hkYXRhL2FkZEdhbWVQcm9tb3Rpb24/cGFnZT0nK3BhZ2UrJyZhcHBpZD0nK3d4QXBwSWQrJyZzX251bWJlcj0nK251bSsnJmZvcndhcmRfYXBwaWQ9Jytmb3J3YXJkX2FwcGlkKycmb3BlbmlkPScrb3BlbmlkKycmc3RhdHVzPScrMDtcclxuXHRcdFx0XHRzZWxmLnNldERhdGFGb3JIdHRwKHVybF9uKTtcclxuXHRcdFx0XHRpZihlcnIuZXJyTXNnICE9ICduYXZpZ2F0ZVRvTWluaVByb2dyYW06ZmFpbCBjYW5jZWwnKXtcclxuXHRcdFx0XHRcdHd4LnByZXZpZXdJbWFnZSh7XHJcblx0XHRcdFx0XHRcdGN1cnJlbnQ6IHVybFswXSwgLy8g5b2T5YmN5pi+56S65Zu+54mH55qEaHR0cOmTvuaOpSBcclxuXHRcdFx0XHRcdFx0dXJsczogdXJsLCAvLyDpnIDopoHpooTop4jnmoTlm77niYdodHRw6ZO+5o6l5YiX6KGoIFxyXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbigpe31cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LHN1Y2Nlc3M6ZnVuY3Rpb24oZXJyKXtcclxuXHRcdFx0XHR2YXIgZm9yd2FyZF9hcHBpZCA9IGRhdGEuYXBwSWQ7XHJcblx0XHRcdFx0dmFyIHVybF9uID0gc2VydmVyVXJsKydsaWV5b3Uvd3hkYXRhL2FkZEdhbWVQcm9tb3Rpb24/cGFnZT0nK3BhZ2UrJyZhcHBpZD0nK3d4QXBwSWQrJyZzX251bWJlcj0nK251bSsnJmZvcndhcmRfYXBwaWQ9Jytmb3J3YXJkX2FwcGlkKycmb3BlbmlkPScrb3BlbmlkKycmc3RhdHVzPScrMTtcclxuXHRcdFx0XHRzZWxmLnNldERhdGFGb3JIdHRwKHVybF9uKTtcclxuXHRcdFx0fX0pO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHd4LnByZXZpZXdJbWFnZSh7XHJcblx0XHRcdFx0Y3VycmVudDogdXJsWzBdLCAvLyDlvZPliY3mmL7npLrlm77niYfnmoRodHRw6ZO+5o6lIFxyXG5cdFx0XHRcdHVybHM6IHVybCwgLy8g6ZyA6KaB6aKE6KeI55qE5Zu+54mHaHR0cOmTvuaOpeWIl+ihqCBcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbigpe31cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9LFxyXG5cdHNldERhdGFGb3JIdHRwOiBmdW5jdGlvbih1cmwsZnVuKXtcclxuXHRcdC8v5o+Q5Lqk5pWw5o2u5Yiw5pyN5Yqh5ZmoIOaXoOi/lOWbnuWAvCBcclxuXHRcdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xyXG5cdFx0XHRcdHZhciByZXNwb25zZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcblx0XHRcdFx0aWYocmVzcG9uc2U9PSctMScpe1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmKHJlc3BvbnNlPT0nLTInKXtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHRcdGlmKGZ1bil7XHJcblx0XHRcdFx0XHRcdGZ1bihyZXNwb25zZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0eGhyLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcclxuXHRcdHhoci5zZW5kKCk7XHJcblx0fSxcclxuXHJcblx0YWRkVG9hc3QoX25vZGUsc3RyLF9jYWxsQmFjayl7XHJcblx0XHRcclxuXHRcdFxyXG5cdH0sXHJcblx0c2hhcmVEaWFsb2coX25vZGUpe1xyXG5cdFx0XHJcblx0fSxcclxuXHRhZGRHZXRMb2Nha0NhcmREaWFsb2coX25vZGUpe1xyXG5cdFx0XHJcblx0fSxcclxuXHRtb2RpZnlJbnZpdGVGcmllbmQoZnJpZW5kSWQpe1xyXG5cdFx0dmFyIHVybCA9IHNlcnZlclVybCArICdsaWV5b3Uvd3hkYXRhL21vZGlmeUZsYWcvJyArIHd4QXBwSWQgKyBcIi9cIiArIG9wZW5pZCArIFwiL1wiICsgZnJpZW5kSWQ7XHJcblx0XHR0aGlzLnNldERhdGFGb3JIdHRwKHVybCk7XHJcblx0fSxcclxuXHRkZWxldGVJbnZpdGVGcmllbmQoSWQpe1xyXG5cdFx0dmFyIHVybCA9IHNlcnZlclVybCArICdsaWV5b3Uvd3hkYXRhL2RlbEZyaWVuZEluZm8vJyArIElkO1xyXG5cdFx0dGhpcy5zZXREYXRhRm9ySHR0cCh1cmwpO1xyXG5cdH0sXHJcblx0Z2V0SW52aXRlRnJpZW5kRGF0YShmbGFnLGZ1bil7XHJcblx0XHR2YXIgdXJsID0gc2VydmVyVXJsICsgJ2xpZXlvdS93eGRhdGEvZ2V0RnJpZW5kSW5mby8nICsgd3hBcHBJZCArIFwiL1wiICsgb3BlbmlkICsgXCIvXCIgKyBmbGFnO1xyXG5cdFx0dGhpcy5zZXREYXRhRm9ySHR0cCh1cmwsZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG5cdFx0XHR2YXIgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2UpO1xyXG5cdFx0XHRmdW4oZGF0YSk7XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdFxyXG5cdHNob3dJbnZpdGVGcmllbmQoX25vZGUsX2NhbGxCYWNrKXtcclxuXHRcdFxyXG5cdH0sXHJcblx0c2hvd0ludml0ZUZyaWVuZEZhaWx1cmUoX25vZGUpe1xyXG5cdFx0XHJcblx0fSxcclxuXHRnZXRPbmxpbmVTcHJpdGVGcmFtZSh1cmwsZnVuKXtcclxuXHRcdGlmKHVybCA9PSBcIlwiKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHZhciBsb2FkRmlsZSA9IHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIlxyXG4gICAgICAgIH07XHJcblx0XHRjYy5sb2FkZXIubG9hZChsb2FkRmlsZSwgZnVuY3Rpb24gKGVyciwgdGV4KSB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW4obmV3IGNjLlNwcml0ZUZyYW1lKHRleCkpO1xyXG4gICAgICAgIH0pO1xyXG5cdH0sXHJcblxyXG5cdGdldFNES1ZlcnNpb25DYW5Vc2U6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0dmFyIHd4U3lzID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHRcdHZhciB2ZXJzaW9uID0gd3hTeXMuU0RLVmVyc2lvbjtcclxuXHRcdHZhciBzdHIgPSBkYXRhLnNwbGl0KFwiLlwiKTtcclxuXHRcdHZhciBzdHIxID0gdmVyc2lvbi5zcGxpdChcIi5cIik7XHJcblx0XHRmb3IodmFyIGkgPSAwO2k8MztpKyspIHtcclxuXHRcdFx0aWYocGFyc2VJbnQoc3RyMVtpXSk8cGFyc2VJbnQoc3RyW2ldKSkgeyAgIFxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fWVsc2UgaWYocGFyc2VJbnQoc3RyMVtpXSk+cGFyc2VJbnQoc3RyW2ldKSkge1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcblx0fSxcclxuXHRcclxuXHRzaG93R2FtZVJlY29tbWVuZChjYWxsQmFjayA9IG51bGwpe1xyXG5cdFx0aWYoIWNhbkV4cGVyaWVuY2VHYW1lKSB7XHJcblx0XHRcdGlmKGNhbGxCYWNrKXtcclxuXHRcdFx0XHRjYWxsQmFjayhmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0aWYodGhpcy5pc09wZW4oS0VZX0lTX1NIRU5IRSkpe1xyXG5cdFx0XHRpZihjYWxsQmFjayl7XHJcblx0XHRcdFx0Y2FsbEJhY2soZmFsc2UpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgdGltZUxhc3QgPSBVc2VyZGVmYXVsdC5nZXRJbnRGb3JLZXkoJ1NLRF9zaG93UmVjb21tZW5kRGlhbG9nVGltZScsMCk7XHJcblx0XHR2YXIgdGltZU5vdyA9IHBhcnNlSW50KGdldFRpbWUoKS8xMDAwKTtcclxuXHRcdGlmKHRpbWVOb3cgLSB0aW1lTGFzdCA8IDEwKSB7XHJcblx0XHRcdGlmKGNhbGxCYWNrKXtcclxuXHRcdFx0XHRjYWxsQmFjayhmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0VXNlcmRlZmF1bHQuc2V0RGF0YUZvcktleSgnU0tEX3Nob3dSZWNvbW1lbmREaWFsb2dUaW1lJyx0aW1lTm93KTtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnU0RLL21vZHVsZS9SZWNvbW1lbmRHYW1lL1JlY29tbWVuZF9wbGF5VkQnLGZ1bmN0aW9uKGVycixyZXMpe1xyXG5cdFx0XHR2YXIgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHJlcyk7IFxyXG5cdFx0XHR2YXIgZk5vZGUgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuXHRcdFx0Zk5vZGUuYWRkQ2hpbGQobm9kZSw5OTkpOyAgXHJcblx0XHRcdG5vZGUuZ2V0Q29tcG9uZW50KCdSZWNvbW1lbmRHYW1lX3BsYXlWRCcpLnNldERhdGEoY2FsbEJhY2spO1xyXG4gICAgICAgIH0pXHJcblx0fSxcclxuXHJcblx0Z2V0U2hhcmVPclZpZWRvKCl7XHJcblx0XHRpZih0aGlzLmlzT3BlbihLRVlfSVNfU0hFTkhFKSl7XHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0fVxyXG5cdFx0dmFyIG5TaGFyZUFuZFZpZGVvQWxsTnVtID0gdGhpcy5zaGFyZUFuZFZpZGVvQWxsTnVtO1xyXG5cdFx0XHJcblx0XHR2YXIgcmV0VHlwZSA9IDA7XHJcblx0XHQvLzHjgIHlhbPpl60gMuOAgeWIhuS6qyAz44CB6KeG6aKRIDTjgIHliIbkuqst6KeG6aKR77yI77yJ5b6q546vIDXjgIHop4bpopEt5YiG5Lqr77yI5b6q546v77yJIDbjgIEwLTEw54K5IOWPquinhumikSAxMC0yNOeCuSDop4bpopEt5YiG5Lqr77yI77yJ5b6q546vXHJcblx0XHRpZih0aGlzLnNoYXJlT3JWaWRlb1R5cGUgPT0gMSkge1xyXG5cdFx0XHRyZXRUeXBlID0gMDtcclxuXHRcdH1lbHNlIGlmKHRoaXMuc2hhcmVPclZpZGVvVHlwZSA9PSAyKSB7XHJcblx0XHRcdHJldFR5cGUgPSAxO1xyXG5cdFx0fWVsc2UgaWYodGhpcy5zaGFyZU9yVmlkZW9UeXBlID09IDMpIHtcclxuXHRcdFx0cmV0VHlwZSA9IDI7XHJcblx0XHR9ZWxzZSBpZih0aGlzLnNoYXJlT3JWaWRlb1R5cGUgPT0gNCkge1xyXG5cdFx0XHRpZihuU2hhcmVBbmRWaWRlb0FsbE51bSUyID09IDApe1xyXG5cdFx0XHRcdHJldFR5cGUgPSAxO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRyZXRUeXBlID0gMjtcclxuXHRcdFx0fVxyXG5cdFx0fWVsc2UgaWYodGhpcy5zaGFyZU9yVmlkZW9UeXBlID09IDUpIHtcclxuXHRcdFx0aWYoblNoYXJlQW5kVmlkZW9BbGxOdW0lMiA9PSAwKXtcclxuXHRcdFx0XHRyZXRUeXBlID0gMjtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0cmV0VHlwZSA9IDE7XHJcblx0XHRcdH1cclxuXHRcdH1lbHNlIGlmKHRoaXMuc2hhcmVPclZpZGVvVHlwZSA9PSA2KSB7XHJcblx0XHRcdHZhciBob3VycyA9IChuZXcgRGF0ZSgpKS5nZXRIb3VycygpO1xyXG5cdFx0XHRpZihob3Vycz49MCAmJiBob3VycyA8IDEwKSB7XHJcblx0XHRcdFx0cmV0VHlwZSA9IDI7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoblNoYXJlQW5kVmlkZW9BbGxOdW0lMiA9PSAwKXtcclxuXHRcdFx0XHRyZXRUeXBlID0gMjtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0cmV0VHlwZSA9IDE7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmKHJldFR5cGUgPT0gMikge1xyXG5cdFx0XHRpZih3eFZpZGVvSWQgPT0gXCJcIil7XHJcblx0XHRcdFx0aWYoIXRoaXMuaXNPcGVuKEtFWV9JU19TSEVOSEUpKXtcclxuXHRcdFx0XHRcdHJldFR5cGUgPSAxO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0cmV0VHlwZSA9IDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9ZWxzZSBpZihyZXRUeXBlID09IDEpIHtcclxuXHRcdFx0aWYodGhpcy5pc09wZW4oS0VZX0lTX1NIRU5IRSkpe1xyXG5cdFx0XHRcdGlmKHd4VmlkZW9JZCAhPSBcIlwiKXtcclxuXHRcdFx0XHRcdHJldFR5cGUgPSAyO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0cmV0VHlwZSA9IDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJldHVybiByZXRUeXBlO1xyXG5cdH0sXHJcblxyXG5cdHNldFdvcmxkUmFua0RhdGEoa2V5LHNjb3JlKXtcclxuXHRcdHZhciB1cmxfbiA9IHNlcnZlclVybCsnbGlleW91L3d4ZGF0YS9hZGRSYW5rTGlzdD93eEdhbWVJZD0nK3d4QXBwSWQrJyZnYW1lcklkPScrb3BlbmlkKycmbmlrZU5hbWU9Jyt1aW5mby5uaWNrKycmaGVhZEltYWdlUGF0aD0nK3VpbmZvLmljb24rJyZzY29yZT0nK3Njb3JlKycmcmFua0tleT0nK2tleTtcclxuXHRcdHRoaXMuc2V0RGF0YUZvckh0dHAodXJsX24pO1xyXG5cdH0sXHJcblxyXG5cdC8vbmV3IFxyXG5cdG5ld0p1bXBBcHAob2JqKXtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdGlmKHRoaXMuZ2V0U0RLVmVyc2lvbkNhblVzZSgnMi4yLjAnKSl7XHJcblx0XHRcdHd4Lm5hdmlnYXRlVG9NaW5pUHJvZ3JhbSh7YXBwSWQ6b2JqLmRhdGEuYXBwSWQscGF0aDpvYmouZGF0YS5wYXRoLGZhaWw6ZnVuY3Rpb24oZXJyKXtcclxuXHRcdFx0XHRpZihlcnIuZXJyTXNnICE9ICduYXZpZ2F0ZVRvTWluaVByb2dyYW06ZmFpbCBjYW5jZWwnKXtcclxuXHRcdFx0XHRcdGlmKG9iai5kYXRhLnVybCl7XHJcblx0XHRcdFx0XHRcdGlmKG9iai5zdWNjZXNzKXtcclxuXHRcdFx0XHRcdFx0XHRvYmouc3VjY2VzcygpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHd4LnByZXZpZXdJbWFnZSh7XHJcblx0XHRcdFx0XHRcdFx0Y3VycmVudDogb2JqLmRhdGEudXJsWzBdLCAvLyDlvZPliY3mmL7npLrlm77niYfnmoRodHRw6ZO+5o6lIFxyXG5cdFx0XHRcdFx0XHRcdHVybHM6IG9iai5kYXRhLnVybCAvLyDpnIDopoHpooTop4jnmoTlm77niYdodHRw6ZO+5o6l5YiX6KGoIFxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxzdWNjZXNzOmZ1bmN0aW9uKGVycil7XHJcblx0XHRcdFx0aWYob2JqLnN1Y2Nlc3Mpe1xyXG5cdFx0XHRcdFx0b2JqLnN1Y2Nlc3MoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0uYmluZCh0aGlzKX0pO1xyXG5cdFx0fWVsc2V7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cclxufSlcclxubW9kdWxlLmV4cG9ydHMgPSBXeE1hbmFnZXI7Il19