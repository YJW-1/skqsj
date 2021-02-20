
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/scripts/SdkManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '46f6eEKyN1P8ru7QKakGWyM', 'SdkManager');
// resources/SDK/scripts/SdkManager.js

"use strict";

var WxManager = require('WxManager');

var FaceBookManager = require('FaceBookManager');

var NativeManager = require('NativeManager');

var OppoH5Manager = require('OppoH5Manager');

var OppoManager = require('OppoManager');

var VivoManager = require('VivoManager');

var XiaoMiManagerH5 = require('XiaoMiManagerH5');

var XiaoMiManager = require('XiaoMiManager');

var JinRiTouTiaoManager = require('JinRiTouTiaoManager');

var HuaweiManager = require('HuaweiManager');

var BaiDuManager = require('BaiDuManager');

var QQManager = require('QQManager');

var QuTouTiaoManagerH5 = require('QuTouTiaoManagerH5');

var MagicManagerH5 = require('MagicManagerH5');

var BaseManager = require('BaseManager');

var lieyou_webManager = require('lieyou_webManager');

window._SDKVersion = '2020.10.16.1';
window._SDKVersionCode = 4;
window._SDKNativeAdLoadServerRes = false;
window.lieyou_SdkManager = module.exports = {
  instance: null,
  platform: '',
  _SceneScale: 1,
  init: function init() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var winSize = cc.winSize;
    var winsizeWidth = winSize.height > winSize.width ? winSize.width : winSize.height;
    this.sdkWinSize = winSize;
    this._SceneScale = winsizeWidth / 720;
    lieyou_showLog('版本：' + _SDKVersion);
    this.platform = releasePlatform;

    if (!this.instance) {
      try {
        if (lieyou_GoldKey && lieyou_GoldKey != "") {
          lieyou.Key_Gold = lieyou_GoldKey;
        }
      } catch (error) {}

      lieyou.Props_Base_Gold = lieyou_Props_Base_Gold;
      this.setOpenId_uuid();
      this.showBossKeyNode();
      lieyou_showLog(">>>>>>>>>>>>         init sdk");
      this.setNewPlayerData();
      this.initGameData(); //this.initMainGame();//设置主游戏

      if (this.platform == 'oppoH5') {
        this.instance = new OppoH5Manager();
        this.instance.init(obj);
      } else if (cc.sys.platform == cc.sys.OPPO_GAME) {
        this.instance = new OppoManager();
        this.instance.init(obj);
      } else if (cc.sys.platform == cc.sys.VIVO_GAME) {
        this.instance = new VivoManager();
        this.instance.init(obj);
      } else if (this.platform == 'qq') {
        this.instance = new QQManager();
        this.instance.init(obj);
      } else if (cc.sys.platform == cc.sys.BAIDU_GAME) {
        this.instance = new BaiDuManager();
        this.instance.init(obj);
      } else if (cc.sys.platform == cc.sys.HUAWEI_GAME) {
        this.instance = new HuaweiManager();
        this.instance.init(obj);
      } else if (this.platform == 'xiaoMiH5') {
        this.instance = new XiaoMiManagerH5();
        this.instance.init(obj);
      } else if (this.platform == 'QuTouTiaoH5') {
        this.instance = new QuTouTiaoManagerH5();
        this.instance.init(obj);
      } else if (this.platform == 'MagicH5') {
        this.instance = new MagicManagerH5();
        this.instance.init(obj);
      } else if (this.platform == 'lieyouH5') {
        this.instance = new lieyou_webManager();
        this.instance.init(obj);
      } else if (cc.sys.platform == cc.sys.XIAOMI_GAME) {
        this.instance = new XiaoMiManager();
        this.instance.init(obj);
      } else if (this.platform == 'jinRiTouTiao') {
        this.instance = new JinRiTouTiaoManager();
        this.instance.init(obj);
      } else if (cc.sys.platform === cc.sys.WECHAT_GAME) {
        this.instance = new WxManager();
        this.instance.init(obj);
      } else if (cc.sys.isNative) {
        this.instance = new NativeManager();
        this.instance.init(obj);
      } else if (window.FBInstant && FBInstant.getPlatform()) {
        this.instance = new FaceBookManager();
        this.instance.init(obj);
      } else {
        this.instance = new BaseManager();
        this.instance.init(obj);
      } // if(lieyou_appid != ""){
      // 	try {
      // 		cocosAnalytics.init({
      // 			appID: lieyou_appid,              // 游戏ID
      // 			version: this.instance.getVersion(),           // 游戏/应用版本号
      // 			storeID: this.instance.getSysPlatform_string(),     // 分发渠道
      // 			engine: "cocos",            // 游戏引擎
      // 		});	
      // 	} catch (error) {
      // 	}
      // }


      this.instance.setGameEvent('init');
    }
  },
  vibrateShort: function vibrateShort() {
    this.addBossTitle('短震动');

    if (this.instance) {
      this.instance.vibrateShort();
    }
  },
  vibrateLong: function vibrateLong() {
    this.addBossTitle('长震动');

    if (this.instance) {
      this.instance.vibrateLong();
    }
  },
  vibrateCustom: function vibrateCustom(time) {
    this.addBossTitle('自定义震动' + time);

    if (this.instance) {
      this.instance.vibrateCustom(time);
    }
  },

  /**
   * 是否可以看视频
   */
  getHaveVideo: function getHaveVideo() {
    this.addBossTitle('是否可以看视频');

    if (this.instance) {
      return this.instance.getHaveVideo();
    }

    return false;
  },

  /**
   * 0 微信 1 原生 2 facebook  3 vivo 4 oppo 5 oppoH5 6 huawei 7 xiaomuh5 8 jintitoutiao 9 xiaomi 10 baidu 11 qq 12 qutoutiao 13 MagicH5
   */
  getSysPlatform: function getSysPlatform() {
    if (this.instance) {
      return this.instance.getSysPlatform();
    }

    return -1;
  },
  setOpenId_uuid: function setOpenId_uuid() {
    if (Userdefault.getStringForKey('lieyou_sdk_openid_uuid', '') != '') {
      openid_uuid = Userdefault.getStringForKey('lieyou_sdk_openid_uuid', '');
      return;
    }

    var str = "";
    var _char = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'g', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for (var i = 0; i < 32; i++) {
      str += _char[parseInt(Math.random() * 62)];
    }

    openid_uuid = str;
    Userdefault.setDataForKey('lieyou_sdk_openid_uuid', str);
  },

  /**
   * 初始化游戏数据 
   */
  initGameData: function initGameData() {
    var winSize = cc.winSize;
    var widthS = winSize.height * 0.5625;

    if (winSize.width < widthS) {
      lieyou._SceneScale = winSize.width / widthS;
      lieyou._offsetY = winSize.height * (1 - winSize.width / widthS) / 2;
      lieyou._offsetX = winSize.width * (1 - winSize.width / widthS) / 2;
    }
  },

  /**
   * 监听进入后台
   */
  onHide: function onHide(fun) {
    if (this.instance) this.instance.onHide(fun);
  },

  /**
   * 监听后台返回游戏
   */
  onShow: function onShow(fun) {
    if (this.instance) this.instance.onShow(fun);
  },
  showMoreGameLoading: function showMoreGameLoading() {
    var callBack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    if (this.instance) {
      this.instance.showMoreGameLoading(callBack);
    } else {
      callBack();
    }
  },
  getHelpLevel: function getHelpLevel() {
    if (this.instance) {
      return this.instance.getHelpLevel();
    }

    return -1;
  },

  /**
   * 显示广告 要传位置wxBannerId
   * showBanner({adUnitId:id,style:{left:0,top:0,width:300,height:105}})
   */
  showBossKeyNode: function showBossKeyNode() {
    var self = this; // cc.loader.loadRes('SDK/module/BossKey/bossKey',function(err,res){

    var size = cc.winSize;
    var bN = lieyou_bossNode_prefab();
    self.bossNode = bN;
    var node = cc.director.getScene();
    node.addChild(bN);
    bN.x = size.width / 2;
    bN.y = size.height / 2;
    cc.game.addPersistRootNode(bN);
  },
  addBossTitle: function addBossTitle() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    if (this.bossNode && lieyou_showDebug) {
      this.bossNode.getComponent('BossKey_SDK').addTitle(title);
    }
  },
  showBanner: function showBanner() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (this.instance) {
      this.instance._bannerAdStyle = obj;
      this.instance.showBanner(obj);
    }
  },

  /**
   * 自定义广告obj(id:0,x:0,y:0,scale:0)
   */
  showBannerCustom: function showBannerCustom() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.addBossTitle('显示自定义banner');

    if (this.instance) {
      this.instance._bannerAdStyle = obj;
      this.instance.showBannerCustom(obj);
    }
  },

  /**
   * 显示底部广告 wxBannerId
   */
  showBannerByBottom: function showBannerByBottom() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    this.addBossTitle('显示底部banner');

    if (this.instance) {
      this.instance._bannerAdStyle = {};
      this.instance.showBannerByBottom(id);
    }
  },

  /**
   * 显示顶部广告 wxBannerId
   */
  showBannerByTop: function showBannerByTop() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    this.addBossTitle('显示顶部banner');

    if (this.instance) {
      this.instance._bannerAdStyle = {
        y: 0
      };
      this.instance.showBannerByTop(id);
    }
  },

  /**
   * 隐藏广告条
   */
  hideBanner: function hideBanner() {
    this.addBossTitle('隐藏banner');

    if (this.instance) {
      this.instance.hideBanner();

      if (this.instance.moreGameBanner && this.instance.moreGameBanner.isValid) {
        this.instance.moreGameBanner.destroy();
        this.instance.moreGameBanner = null;
      }
    }
  },
  addNativeAd: function addNativeAd() {
    var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (this.instance) this.instance.addNativeAd(node);
  },
  custClickNative: function custClickNative() {
    var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (this.instance) this.instance.custClickNative(node);
  },

  /**
   * 视频广告 wxVideoId function(){}
   */
  showRewardedVideoAd: function showRewardedVideoAd(closeCallBack, closeCallBack2) {
    this.addBossTitle('播放视频');

    if (typeof closeCallBack === "function") {} else {
      closeCallBack = closeCallBack2;
    }

    if (this.instance) this.instance.showRewardedVideoAd('', closeCallBack);
  },

  /**
   * 获取微信授权 
   */
  getAuthorize: function getAuthorize() {
    if (this.instance) this.instance.getAuthorize();
  },

  /**
   * 微信登陆
   */
  login: function login() {
    if (this.instance) this.instance.login();
  },

  /**
   * 添加本地复活卡
   */
  addLocalResurr: function addLocalResurr() {
    if (this.instance) this.instance.addLocalResurr();
  },

  /**
   * 使用复活卡
   */
  useResurr: function useResurr() {
    if (this.instance) this.instance.useResurr();
  },

  /**
   * 删除邀请到的好友
   */
  deleteInviteFriend: function deleteInviteFriend(id) {
    if (this.instance) this.instance.deleteInviteFriend(id);
  },

  /**
   *  修改邀请好友状态
   */
  modifyInviteFriend: function modifyInviteFriend(friendId) {
    if (this.instance) this.instance.modifyInviteFriend(friendId);
  },

  /**
   * 获取邀请到的好友列表
   */
  getInviteFriendData: function getInviteFriendData(flag, fun) {
    if (this.instance) this.instance.getInviteFriendData(flag, fun);
  },

  /**
   * 显示邀请到的好友
   */
  showInviteFriend: function showInviteFriend(_node, _callBack) {
    if (this.instance) this.instance.showInviteFriend(_node, _callBack);
  },

  /**
   * 显示邀请到的好友 已经领取过奖励的
   */
  showInviteFriendFailure: function showInviteFriendFailure(_node) {
    if (this.instance) this.instance.showInviteFriendFailure(_node);
  },

  /**
   * 查看复活卡 返回复活卡个数 实时
   */
  checkResurrNum: function checkResurrNum() {
    if (this.instance) return this.instance.checkResurrNum();
    return 0;
  },

  /**
   * 查看复活卡 返回复活卡个数 不是实时
   */
  checkResurrNum_2: function checkResurrNum_2() {
    if (this.instance) return this.instance.checkResurrNum_2();
    return 0;
  },

  /**
   * 分享{name:游戏名,source:1,inviteFriend:bool,success:function(type){1 分享到群  2 个人},getGroupId:true} 
   * source 1 转发 2 首页分享按钮 3 复活 4 炫耀 5 使用道具 6 双倍奖励 7 解锁 8 帮助 9 帮助成功 10 视频失败调用分享
   */
  share: function share(obj) {
    if (this.instance) this.instance.share(obj);
  },
  shareHelp: function shareHelp(level) {
    if (this.instance) this.instance.shareHelp(level);
  },
  shareHelpSuccess: function shareHelpSuccess(level) {
    if (this.instance) this.instance.shareHelpSuccess(level);
  },

  /**
   * 
   */
  helpFriendSuccess: function helpFriendSuccess(level) {
    if (this.instance) {
      this.instance.helpFriendSuccess(level);
    }
  },
  getIsHaveFriendHelpMe: function getIsHaveFriendHelpMe(level, fun) {
    if (this.instance) this.instance.getIsHaveFriendHelpMe(level, fun);
  },

  /**
   * 显示全部排行榜 {rankKey:key,node:node,closeFun:fun,orderStr:"false",x:0,y:0}
   * orderStr 默认false
   */
  showAllRankingLayer: function showAllRankingLayer(obj) {
    if (this.instance) this.instance.showAllRankingLayer(obj);
  },

  /**
   * 显示失败排行榜 {rankKey:key,node:node,showAndHideNode:node,orderStr:"false",x:0,y:0}
   */
  showFailRankingLayer: function showFailRankingLayer(obj) {
    if (this.instance) this.instance.showFailRankingLayer(obj);
  },

  /**
   * 提交排行榜数据 key,score
   */
  setRankingData: function setRankingData(key, score) {
    if (this.instance) this.instance.setRankingData(key, score);
  },

  /**
   * 显示社区按钮{
             icon: 'white',//green  dark   light
             style: {
                 left: 15,
                 top: 15,
                 width: 40,
                 height: 40
             }
         }
   */
  showForum: function showForum(obj) {
    if (this.instance) this.instance.showForum(obj);
  },

  /**
   * 隐藏社区按钮
   */
  closeForum: function closeForum() {
    if (this.instance) this.instance.closeForum();
  },

  /**
   * 跳转app
   */
  jumpApp: function jumpApp(data, url, page, num) {
    if (this.instance) this.instance.jumpApp(data, url, page, num);
  },
  newJumpApp: function newJumpApp() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (this.instance) this.instance.newJumpApp(obj);
  },

  /**
   * 显示自己广告		进入游戏
   */
  showSpotByBegin: function showSpotByBegin() {
    var isHaveNative = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    this.addBossTitle('插屏 开始');
    if (this.instance) this.instance.showSpotByBegin(isHaveNative, top);
  },

  /**
   * 显示自己广告		暂停
   */
  showSpotByPause: function showSpotByPause() {
    var isHaveNative = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    this.addBossTitle('插屏 暂停');
    if (this.instance) this.instance.showSpotByPause(isHaveNative, top);
  },

  /**
   * 显示自己广告  	游戏结束
   */
  showSpotByFinish: function showSpotByFinish() {
    var isHaveNative = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    this.addBossTitle('插屏 结束');
    if (this.instance) this.instance.showSpotByFinish(isHaveNative, top);
  },

  /**
   * 微信获取版本是否支持此方法 data = “1.6.6”版本号
   */
  getSDKVersionCanUse: function getSDKVersionCanUse(data) {
    if (this.instance) return this.instance.getSDKVersionCanUse(data);
    return true;
  },

  /**
   * 设置新玩家数据
   */
  setNewPlayerData: function setNewPlayerData() {
    var beginGameNum = Userdefault.getIntForKey("comeGameNum", 0);
    Userdefault.setDataForKey("comeGameNum", beginGameNum + 1);
    var newPlayer = Userdefault.getBoolForKey(lieyou.Key_NewPlayer, true); //levelStar + level

    if (newPlayer) {
      var nowTime = parseInt(getTime() / 1000);
      Userdefault.setDataForKey(lieyou.Key_OncePlayerTime, nowTime);
      Userdefault.setBoolForKey(lieyou.Key_NewPlayer, false);
      var time = getTimeDay();
      Userdefault.setDataForKey(lieyou.Key_OncePlayerTimeDay, time);
    }
  },

  /**
   * 解析数据
   */
  parseData: function parseData(data, str) {
    var a = data.split(',');

    for (var i = 0; i < a.length; i++) {
      if (a[i].split('wait:').length > 1) {
        if (a[i].split('wait:')[1] == str) {
          return true;
        }
      } else if (a[i].split('waitL').length > 1) {
        var b = a[i].split('waitL')[1].split(':');
        var levelMax = Userdefault.getIntForKey("SDKGameMaxLevel", 0);

        if (b[1] == str && levelMax > parseInt(b[0])) {
          return true;
        }
      } else if (a[i].split('waitS').length > 1) {
        var b = a[i].split('waitS')[1].split(':');
        var scoreMax = Userdefault.getIntForKey("SDKGameMaxScore", 0);

        if (b[1] == str && scoreMax > parseInt(b[0])) {
          return true;
        }
      } else if (a[i].split('waitT').length > 1) {
        var b = a[i].split('waitT')[1].split(':');
        var time = Userdefault.getIntForKey(lieyou.Key_OncePlayerTime, 0);
        var nowTime = parseInt(getTime() / 1000);

        if (b[1] == str && nowTime - time > parseInt(b[0])) {
          return true;
        }
      } else if (a[i].split('waitE').length > 1) {
        var b = a[i].split('waitE')[1].split(':');
        var num = Userdefault.getIntForKey("comeGameNum", 0);

        if (b[1] == str && num > parseInt(b[0])) {
          return true;
        }
      } else if (a[i].split('waitD').length > 1) {
        var b = a[i].split('waitD')[1].split(':');
        var time = Userdefault.getIntForKey(lieyou.Key_OncePlayerTimeDay, 0);
        var nowTime = getTimeDay();

        if (b[1] == str && nowTime - time > parseInt(b[0])) {
          return true;
        }
      }
    }

    return false;
  },
  gameMain: function gameMain() {
    this.addBossTitle('主页打点');
    if (this.instance) this.instance.setGameEvent('MainScene');
  },
  gameEventBegin: function gameEventBegin() {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    this.addBossTitle('开始打点:' + event);
    if (this.instance) this.instance.setGameEvent(event, 0);
  },
  gameEventFinish: function gameEventFinish() {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    this.addBossTitle('结束打点:' + event);
    if (this.instance) this.instance.setGameEvent(event, 1);
  },
  gameEvent: function gameEvent() {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    this.addBossTitle('计次打点:' + event);
    if (this.instance) this.instance.setGameEvent(event);
  },
  //obj
  // {
  // 	title: '提示',
  // 	content: '这是一个模态弹窗',
  // 	success: fun,
  //  fail:fun
  //   }
  showModal: function showModal() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (this.instance) this.instance.showModal(obj);
  },
  showToast: function showToast() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    lieyou_interface.showToast(title); // if(this.instance)
    // 	this.instance.showToast(title);
  },
  hideToast: function hideToast() {
    if (this.instance) this.instance.hideToast();
  },
  showLoading: function showLoading() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    if (this.instance) this.instance.showLoading(title);
  },
  hideLoading: function hideLoading() {
    if (this.instance) this.instance.hideLoading();
  },

  /**
   * 游戏开始
   */
  gameBeginLevel: function gameBeginLevel() {
    var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
    var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "level";

    if (mode.length > 15) {
      lieyou_SdkManager.showToast('模式最长15个字符');
    }

    this.addBossTitle('开始:' + mode + ' ' + level);
    lieyou_showLog("模式   mode =====  " + mode + "   游戏开始 level = " + level);
    if (this.instance) this.instance.jniLevel(level, mode, 0);
  },

  /**
   * 游戏失败
   */
  gameFailLevel: function gameFailLevel() {
    var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
    var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "level";

    if (mode.length > 15) {
      lieyou_SdkManager.showToast('模式最长15个字符');
    }

    this.addBossTitle('失败:' + mode + ' ' + level);
    lieyou_showLog("模式   mode =====  " + mode + "   游戏失败 level = " + level);
    if (this.instance) this.instance.jniLevel(level, mode, 2);
  },

  /**
   * 游戏过关
   */
  gameFinishLevel: function gameFinishLevel() {
    var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
    var mode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "level";

    if (mode.length > 15) {
      lieyou_SdkManager.showToast('模式最长15个字符');
    }

    this.addBossTitle('过关:' + mode + ' ' + level);
    lieyou_showLog("模式   mode =====  " + mode + "   游戏过关 level = " + level);
    var levelMax = Userdefault.getIntForKey("SDKGameMaxLevel" + mode, 0);
    if (level > levelMax) Userdefault.setDataForKey("SDKGameMaxLevel" + mode, level);
    if (this.instance) this.instance.jniLevel(level, mode, 1);
  },

  /**
   * 提交分数 无尽模式需要
   */
  gameScore: function gameScore(mode, score) {
    lieyou_showLog("模式   mode =====  " + mode + "   分数 score = " + score);
    var scoreMax = Userdefault.getIntForKey("SDKGameMaxScore" + mode, 0);
    if (score > scoreMax) Userdefault.setDataForKey("SDKGameMaxScore" + mode, score);
  },
  //

  /**
   * 添加提示框 
   */
  addToast: function addToast(_node, str, _callBack) {
    if (this.instance) this.instance.addToast(_node, str, _callBack);
  },
  shareDialog: function shareDialog(_node) {
    if (this.instance) this.instance.shareDialog(_node);
  },
  addGetLocakCardDialog: function addGetLocakCardDialog(_node) {
    if (this.instance) this.instance.addGetLocakCardDialog(_node);
  },

  /**
   * 获取在线参数
   */
  getParamByOnline: function getParamByOnline(key, defaultV) {
    if (this.instance) return this.instance.getParamByOnline(key, defaultV);
  },

  /**
   *加载网络图片 
   */
  getOnlineSpriteFrame: function getOnlineSpriteFrame(url, fun) {
    if (this.instance) this.instance.getOnlineSpriteFrame(url, fun);
  },

  /**
   * 猜你喜欢{node:_node,x:x,y:y,align:0}//0 居中 -1 下 1 上
   */
  showGuessYouLickOne: function showGuessYouLickOne(obj) {
    if (this.instance) this.instance.showGuessYouLickOne(obj);
  },
  showGuessYouLickTow: function showGuessYouLickTow(obj) {
    if (this.instance) this.instance.showGuessYouLickTow(obj);
  },
  returnHomeJumpGame: function returnHomeJumpGame() {
    if (this.instance) this.instance.returnHomeJumpGame();
  },

  /**
   * 分享到群
   */
  // rueturn 1  表示成功 , -1 分享成功但是有限制  0  分享失败
  shareToCrowd: function shareToCrowd(func) {
    var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var count = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    if (this.instance) this.instance.share({
      name: GameName,
      source: 5,
      success: function success(type, id) {
        if (type == 1) {
          if (id) {
            var key = "ShareToCrowd" + id + count + "_" + time + tag;
            var data = Userdefault.getStringForKey(key, "0,0").split(",");
            var num = parseInt(data[0]);
            var day = parseInt(data[1]);
            var newday = Math.floor(new Date().getTime() / 3600000);

            if (newday >= day + time) {
              num = 1;
              day = newday;
            } else {
              num++;
            }

            Userdefault.setDataForKey(key, num + "," + day);

            if (num <= count) {
              func(1);
            } else {
              func(-1);
            }
          } else {
            func(1);
          }
        } else {
          func(0);
        }
      }
    }); // data.split(",");
  },

  /**android ios */
  callAndroid: function callAndroid(action) {
    if (this.instance) this.instance.callAndroid(action);
  },
  callAndroid_2: function callAndroid_2(action, funS) {
    if (this.instance) this.instance.callAndroid_2(action, funS);
  },
  callPay: function callPay(action, funS) {
    if (this.instance) this.instance.callPay(action, funS);
  },
  isOpen: function isOpen(key) {
    if (this.instance) return this.instance.isOpen(key);
  },
  getIsNative: function getIsNative() {
    return this.getSysPlatform() == 1;
  },

  /**
   * 子游戏回主页 安卓
   */
  backHome: function backHome() {
    if (this.instance) return this.instance.backHome();
  },

  /**
   * 跳转子游戏 安卓
   */

  /**
   * 添加子游戏返回按钮 obj = {
   * node:node,
   * x:x,
   * y:y,
   * image:spriteFrame
   * }
   */
  addSmallGameReturnBtn: function addSmallGameReturnBtn() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (this.instance) this.instance.addSmallGameReturnBtn(obj);
  },
  gotoSmallGame: function gotoSmallGame(gameName) {
    if (this.instance) return this.instance.gotoSmallGame(gameName);
  },
  gameAction: function gameAction(gameName) {
    if (this.instance) return this.instance.gameAction(gameName);
  },
  initPhysics: function initPhysics(url) {
    var data = url; //cc.loader.loadRes(url, function(err, data){

    cc.game.config.groupList = data["group-list"];
    cc.game.config.collisionMatrix = data["collision-matrix"];

    cc.game._initConfig(cc.game.config); //});

  },

  /**
   * obj  = {x:0,y:0,w:16,h:9}
   */
  showPraise: function showPraise() {
    if (this.instance) this.instance.showPraise();
  },
  showNativeBanner: function showNativeBanner(top) {
    if (this.instance) this.instance.showNativeBanner(top);
  },
  hideNativeBanner: function hideNativeBanner() {
    if (this.instance) this.instance.hideNativeBanner();
  },
  //微信

  /**
   * {callBack:fun}
   */
  showRedPack: function showRedPack() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (this.instance) this.instance.showRedPack(obj);
  },

  /**
   *  obj {node:node,x:0,y:0}
   */
  showRedIcon: function showRedIcon() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (this.instance) this.instance.showRedIcon(obj);
  },

  /**
   *  obj {node:node,x:0,y:0}
   */
  showRecommendIcon: function showRecommendIcon() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (this.instance) this.instance.showRecommendIcon(obj);
  },
  showGameRecommend: function showGameRecommend() {
    var callBack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (this.instance) this.instance.showGameRecommend(callBack);
  },
  showGameRecommendDialog: function showGameRecommendDialog() {},

  /**
   * 0 没有分享 没有视频 1 分享 2 视频
   */
  getShareOrViedo: function getShareOrViedo() {
    if (this.instance) return this.instance.getShareOrViedo();
    return 0;
  },
  getJumpBtnHaveMove: function getJumpBtnHaveMove() {
    if (this.instance) return this.instance.getJumpBtnHaveMove();
    return 0;
  },
  showGuessYouLike_3: function showGuessYouLike_3(obj) {
    if (this.instance) this.instance.showGuessYouLike_3(obj);
  },

  /**
   * node:跳过按钮 x:moveEndx  y:moveEndy
   * {node:node,x:0,y:0} 
   */
  jumpRefreshBanner: function jumpRefreshBanner() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (this.instance) this.instance.jumpRefreshBanner(obj);
  },
  setWorldRankData: function setWorldRankData() {
    var score = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : RankingKey;
    if (this.instance) this.instance.setWorldRankData(key, score);
  },
  getBaseData: function getBaseData() {
    if (this.instance) this.instance.getBaseData();
    return {};
  },
  reload: function reload() {
    if (this.instance) this.instance.reload();
  },
  showShareVideoDialog: function showShareVideoDialog() {
    var callBack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (this.instance) this.instance.showShareVideoDialog(callBack);
  },
  addLuPingBtn: function addLuPingBtn() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (this.instance) this.instance.addLuPingBtn(obj);
  },
  shareVd: function shareVd() {
    var callBack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (this.instance) this.instance.shareVd(callBack);
  },
  beginLuPing: function beginLuPing() {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
    var callBack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    if (this.instance) this.instance.beginLuPing(time, callBack);
  },
  pauseLuPing: function pauseLuPing() {
    if (this.instance) this.instance.pauseLuPing();
  },
  resumeLuPing: function resumeLuPing() {
    if (this.instance) this.instance.resumeLuPing();
  },
  stopLuPing: function stopLuPing() {
    var isShare = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    if (this.instance) this.instance.stopLuPing(isShare);
  },
  //xiaomi

  /**
   * 桌面是否已经有快捷方式
   */
  hasInstalled: function hasInstalled() {
    var callBack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    if (this.instance) this.instance.hasInstalled(callBack);
  },

  /**
   * 提示创建快捷方式
   */
  install: function install() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (this.instance) this.instance.install(obj);
  },
  //

  /**
   * obj {callBack:fun} 会隐藏banner
   */
  showRecommendBegin: function showRecommendBegin() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (this.instance) {
      this.instance.showRecommendBegin(obj);
    } else {
      if (obj.callBack) {
        obj.callBack();
      }
    }
  },

  /**
   * obj {callBack:fun} 会隐藏banner
   */
  showRecommendFinish: function showRecommendFinish() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (this.instance) {
      this.instance.showRecommendFinish(obj);
    } else {
      if (obj.callBack) {
        obj.callBack();
      }
    }
  },

  /**
   * obj {callBack:fun} 会隐藏banner
   */
  showArardGoldGrid: function showArardGoldGrid() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (this.instance) {
      this.instance.showArardGoldGrid(obj);
    } else {
      if (obj.callBack) {
        obj.callBack();
      }
    }
  },

  /**
   * obj {callBack:fun} 会隐藏banner
   */
  showArardGoldStrip: function showArardGoldStrip() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (this.instance) {
      this.instance.showArardGoldStrip(obj);
    } else {
      if (obj.callBack) {
        obj.callBack();
      }
    }
  },

  /**
   * callBack url node x y
   */
  addInstallShortcut: function addInstallShortcut() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (this.instance) {
      this.instance.addInstallShortcut(obj);
    }
  },
  showInstallShortcutDialog: function showInstallShortcutDialog() {
    if (this.instance) {
      this.instance.showInstallShortcutDialog();
    }
  },
  showRecommendAwardIcon: function showRecommendAwardIcon() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (this.instance) {
      this.instance.showRecommendAwardIcon(obj);
    }
  },
  setDataForHttp: function setDataForHttp(url, fun) {
    if (this.instance) this.instance.setDataForHttp(url, fun);
  },

  /**
   * 显示更多游戏 {node:node,x:0,y:0,runType:1,side:130}
   */
  showMoreGameByIcon: function showMoreGameByIcon() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.addBossTitle('互推 icon');

    if (this.instance) {
      this.instance.showMoreGameByIcon(obj);
    }
  },
  showMoreGameIcon: function showMoreGameIcon() {
    if (this.instance) {
      this.instance.showMoreGameIcon();
    }
  },
  hideMoreGameIcon: function hideMoreGameIcon() {
    if (this.instance) {
      this.instance.hideMoreGameIcon();
    }
  },

  /**
   * 显示更多游戏 {node:node,x:0,y:0} 170
   */
  showMoreGameByBanner: function showMoreGameByBanner() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.addBossTitle('互推 banner');

    if (this.instance) {
      this.instance.showMoreGameByBanner(obj);
    }
  },

  /**
   * 显示更多游戏 {node:node,x:0,y:0}
   */
  showMoreGame: function showMoreGame() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.addBossTitle('互推 更多游戏');
    if (this.instance) this.instance.showMoreGame(obj);
  },

  /**
   * 显示更多游戏 {y:0,sideType_right:false,isPersist:false}
   */
  showMoreGameSide: function showMoreGameSide() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.addBossTitle('互推 侧边栏');
    if (this.instance) this.instance.showMoreGameSide(obj);
  },

  /**
   * 显示更多游戏 {node:node,x:0,y:0} h 166
   */
  showMoreGameMiddle_one: function showMoreGameMiddle_one() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!obj.node) {
      lieyou_SdkManager.showToast('showMoreGameMiddle_one 参数不对');
      return false;
    }

    if (obj.scale == undefined) {
      obj.scale = this._SceneScale;
    }

    this.addBossTitle('互推 一行 高度183');
    if (this.instance) return this.instance.showMoreGameMiddle_one(obj);
    return false;
  },
  //h 306
  showMoreGameMiddle_two: function showMoreGameMiddle_two() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!obj.node || !obj.bgPath) {
      lieyou_SdkManager.showToast('showMoreGameMiddle_two 参数不对');
      return false;
    }

    if (obj.scale == undefined) {
      obj.scale = this._SceneScale;
    }

    this.addBossTitle('互推 两行 高度500');
    if (this.instance) return this.instance.showMoreGameMiddle_two(obj);
    return false;
  },
  //h 446
  showMoreGameMiddle_three: function showMoreGameMiddle_three() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!obj.node) {
      lieyou_SdkManager.showToast('showMoreGameMiddle_three 参数不对');
      return false;
    }

    if (obj.scale == undefined) {
      obj.scale = this._SceneScale;
    }

    this.addBossTitle('互推 三行 高度500');
    if (this.instance) return this.instance.showMoreGameMiddle_three(obj);
    return false;
  },
  setadtrack: function setadtrack(adid, location) {
    if (this.instance) this.instance.setadtrack(adid, location);
  },
  setOperTrack: function setOperTrack(obj) {
    if (this.instance) this.instance.setOperTrack(obj);
  },

  /**
   * 显示更多游戏 {node:node,x:0,y:0}
   */
  showAppBox: function showAppBox() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!obj.node) {
      lieyou_SdkManager.showToast('showAppBox 参数不对');
      return;
    }

    if (this.instance) this.instance.showAppBox(obj);
  },

  /**
   * 
   * @param {key:"",defaultValue} obj 
   */
  getParamByKey: function getParamByKey() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!obj.key) {
      lieyou_SdkManager.showToast('getParamByKey 参数不对');
      return undefined;
    }

    if (this.instance) return this.instance.getParamByKey(obj);
    return obj.defaultValue ? obj.defaultValue : undefined;
  },
  // node/1
  showNativeAd_small: function showNativeAd_small() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!obj.node || !obj.bgPath) {
      lieyou_SdkManager.showToast('showNativeAd_small 参数不对');
      return false;
    }

    if (obj.scale == undefined) {
      obj.scale = this._SceneScale;
    }

    this.addBossTitle('显示原生广告小 600*150');
    if (this.instance) return this.instance.showNativeAd_small(obj);
  },
  // node/1
  showNativeAd_big: function showNativeAd_big() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!obj.node || !obj.bgPath) {
      lieyou_SdkManager.showToast('showNativeAd_big 参数不对');
      return false;
    }

    if (obj.scale == undefined) {
      obj.scale = this._SceneScale;
    }

    this.addBossTitle('显示原生广告大 600*410');
    if (this.instance) return this.instance.showNativeAd_big(obj);
  },
  // callBack/0 spriteFrame/0
  showNativeAd_load: function showNativeAd_load() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (this.instance) return this.instance.showNativeAd_load(obj);
  },
  hideMoreGameSide: function hideMoreGameSide() {
    this.addBossTitle('隐藏侧边栏');
    if (this.instance) return this.instance.hideMoreGameSide();
  },
  getScreenshot: function getScreenshot() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (this.instance) return this.instance.getScreenshot();
  },
  saveImageToPhotosAlbum: function saveImageToPhotosAlbum() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!obj.node) {
      lieyou_SdkManager.showToast('saveImageToPhotosAlbum 参数不对');
      return;
    }

    if (this.instance) this.instance.saveImageToPhotosAlbum(obj);
  },
  addListenerBackKey: function addListenerBackKey() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!obj.node) {
      lieyou_SdkManager.showToast('addListenerBackKey 参数不对');
      return;
    }

    cc.eventManager.addListener({
      event: cc.EventListener.KEYBOARD,
      onKeyPressed: function onKeyPressed(keyCode, event) {
        event.stopPropagation();

        switch (keyCode) {
          case cc.macro.KEY.back:
          case 27:
            if (obj.callBack) {
              obj.callBack();
            } else {
              lieyou_SdkManager.callAndroid(ACTION_EXIT_BACK);
            }

            break;
        }
      }
    }, obj.node);
  },
  showISBN: function showISBN() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (this.instance) this.instance.showISBN(obj);
  },
  hideISBN: function hideISBN() {
    if (this.instance) this.instance.hideISBN();
  },
  showUserAgreement: function showUserAgreement() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (this.instance) this.instance.showUserAgreement(obj);
  },
  showMoreGameGrid: function showMoreGameGrid() {
    if (this.instance) this.instance.showMoreGameGrid();
  },
  addRedPackIcon: function addRedPackIcon(obj) {
    if (!obj.node) {
      lieyou_SdkManager.showToast('addRedPackIcon 参数不对');
    }

    if (this.instance) this.instance.addRedPackIcon(obj);
  },
  addRedPackDialog: function addRedPackDialog() {
    if (this.instance) this.instance.addRedPackDialog();
  },
  addTakeOutIcon: function addTakeOutIcon(obj) {
    if (!obj.node) {
      lieyou_SdkManager.showToast('addRedPackIcon 参数不对');
    }

    if (this.instance) this.instance.addTakeOutIcon(obj);
  }
};

window.lieyou_showLog = function (res) {
  if (lieyou_showDebug) {
    console.log("lieyoulog---", res);
  }
};

window.lieyou_load = function (url, callBack) {
  if (url == '') {
    return;
  }

  var urlLocal = 'SDK/lieyou_sdkRes/' + url;
  cc.loader.loadRes(urlLocal, function (err, res) {
    if (err) {
      return;
    }

    try {
      callBack(err, res);
    } catch (error) {
      lieyou_showLog('loadRes err:' + error);
    }
  });
};

window.lieyou_loadOnline = function (url, callBack) {
  if (url == "") {
    return;
  }

  var loadFile = {
    url: url,
    type: "image"
  };
  cc.loader.load(loadFile, function (err, res) {
    if (err) {
      return;
    }

    try {
      callBack(err, res);
    } catch (error) {
      lieyou_showLog('loadOnline  err:' + error);
    }
  });
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXHNjcmlwdHNcXFNka01hbmFnZXIuanMiXSwibmFtZXMiOlsiV3hNYW5hZ2VyIiwicmVxdWlyZSIsIkZhY2VCb29rTWFuYWdlciIsIk5hdGl2ZU1hbmFnZXIiLCJPcHBvSDVNYW5hZ2VyIiwiT3Bwb01hbmFnZXIiLCJWaXZvTWFuYWdlciIsIlhpYW9NaU1hbmFnZXJINSIsIlhpYW9NaU1hbmFnZXIiLCJKaW5SaVRvdVRpYW9NYW5hZ2VyIiwiSHVhd2VpTWFuYWdlciIsIkJhaUR1TWFuYWdlciIsIlFRTWFuYWdlciIsIlF1VG91VGlhb01hbmFnZXJINSIsIk1hZ2ljTWFuYWdlckg1IiwiQmFzZU1hbmFnZXIiLCJsaWV5b3Vfd2ViTWFuYWdlciIsIndpbmRvdyIsIl9TREtWZXJzaW9uIiwiX1NES1ZlcnNpb25Db2RlIiwiX1NES05hdGl2ZUFkTG9hZFNlcnZlclJlcyIsImxpZXlvdV9TZGtNYW5hZ2VyIiwibW9kdWxlIiwiZXhwb3J0cyIsImluc3RhbmNlIiwicGxhdGZvcm0iLCJfU2NlbmVTY2FsZSIsImluaXQiLCJvYmoiLCJ3aW5TaXplIiwiY2MiLCJ3aW5zaXplV2lkdGgiLCJoZWlnaHQiLCJ3aWR0aCIsInNka1dpblNpemUiLCJsaWV5b3Vfc2hvd0xvZyIsInJlbGVhc2VQbGF0Zm9ybSIsImxpZXlvdV9Hb2xkS2V5IiwibGlleW91IiwiS2V5X0dvbGQiLCJlcnJvciIsIlByb3BzX0Jhc2VfR29sZCIsImxpZXlvdV9Qcm9wc19CYXNlX0dvbGQiLCJzZXRPcGVuSWRfdXVpZCIsInNob3dCb3NzS2V5Tm9kZSIsInNldE5ld1BsYXllckRhdGEiLCJpbml0R2FtZURhdGEiLCJzeXMiLCJPUFBPX0dBTUUiLCJWSVZPX0dBTUUiLCJCQUlEVV9HQU1FIiwiSFVBV0VJX0dBTUUiLCJYSUFPTUlfR0FNRSIsIldFQ0hBVF9HQU1FIiwiaXNOYXRpdmUiLCJGQkluc3RhbnQiLCJnZXRQbGF0Zm9ybSIsInNldEdhbWVFdmVudCIsInZpYnJhdGVTaG9ydCIsImFkZEJvc3NUaXRsZSIsInZpYnJhdGVMb25nIiwidmlicmF0ZUN1c3RvbSIsInRpbWUiLCJnZXRIYXZlVmlkZW8iLCJnZXRTeXNQbGF0Zm9ybSIsIlVzZXJkZWZhdWx0IiwiZ2V0U3RyaW5nRm9yS2V5Iiwib3BlbmlkX3V1aWQiLCJzdHIiLCJjaGFyIiwiaSIsInBhcnNlSW50IiwiTWF0aCIsInJhbmRvbSIsInNldERhdGFGb3JLZXkiLCJ3aWR0aFMiLCJfb2Zmc2V0WSIsIl9vZmZzZXRYIiwib25IaWRlIiwiZnVuIiwib25TaG93Iiwic2hvd01vcmVHYW1lTG9hZGluZyIsImNhbGxCYWNrIiwiZ2V0SGVscExldmVsIiwic2VsZiIsInNpemUiLCJiTiIsImxpZXlvdV9ib3NzTm9kZV9wcmVmYWIiLCJib3NzTm9kZSIsIm5vZGUiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiYWRkQ2hpbGQiLCJ4IiwieSIsImdhbWUiLCJhZGRQZXJzaXN0Um9vdE5vZGUiLCJ0aXRsZSIsImxpZXlvdV9zaG93RGVidWciLCJnZXRDb21wb25lbnQiLCJhZGRUaXRsZSIsInNob3dCYW5uZXIiLCJfYmFubmVyQWRTdHlsZSIsInNob3dCYW5uZXJDdXN0b20iLCJzaG93QmFubmVyQnlCb3R0b20iLCJpZCIsInNob3dCYW5uZXJCeVRvcCIsImhpZGVCYW5uZXIiLCJtb3JlR2FtZUJhbm5lciIsImlzVmFsaWQiLCJkZXN0cm95IiwiYWRkTmF0aXZlQWQiLCJjdXN0Q2xpY2tOYXRpdmUiLCJzaG93UmV3YXJkZWRWaWRlb0FkIiwiY2xvc2VDYWxsQmFjayIsImNsb3NlQ2FsbEJhY2syIiwiZ2V0QXV0aG9yaXplIiwibG9naW4iLCJhZGRMb2NhbFJlc3VyciIsInVzZVJlc3VyciIsImRlbGV0ZUludml0ZUZyaWVuZCIsIm1vZGlmeUludml0ZUZyaWVuZCIsImZyaWVuZElkIiwiZ2V0SW52aXRlRnJpZW5kRGF0YSIsImZsYWciLCJzaG93SW52aXRlRnJpZW5kIiwiX25vZGUiLCJfY2FsbEJhY2siLCJzaG93SW52aXRlRnJpZW5kRmFpbHVyZSIsImNoZWNrUmVzdXJyTnVtIiwiY2hlY2tSZXN1cnJOdW1fMiIsInNoYXJlIiwic2hhcmVIZWxwIiwibGV2ZWwiLCJzaGFyZUhlbHBTdWNjZXNzIiwiaGVscEZyaWVuZFN1Y2Nlc3MiLCJnZXRJc0hhdmVGcmllbmRIZWxwTWUiLCJzaG93QWxsUmFua2luZ0xheWVyIiwic2hvd0ZhaWxSYW5raW5nTGF5ZXIiLCJzZXRSYW5raW5nRGF0YSIsImtleSIsInNjb3JlIiwic2hvd0ZvcnVtIiwiY2xvc2VGb3J1bSIsImp1bXBBcHAiLCJkYXRhIiwidXJsIiwicGFnZSIsIm51bSIsIm5ld0p1bXBBcHAiLCJzaG93U3BvdEJ5QmVnaW4iLCJpc0hhdmVOYXRpdmUiLCJ0b3AiLCJzaG93U3BvdEJ5UGF1c2UiLCJzaG93U3BvdEJ5RmluaXNoIiwiZ2V0U0RLVmVyc2lvbkNhblVzZSIsImJlZ2luR2FtZU51bSIsImdldEludEZvcktleSIsIm5ld1BsYXllciIsImdldEJvb2xGb3JLZXkiLCJLZXlfTmV3UGxheWVyIiwibm93VGltZSIsImdldFRpbWUiLCJLZXlfT25jZVBsYXllclRpbWUiLCJzZXRCb29sRm9yS2V5IiwiZ2V0VGltZURheSIsIktleV9PbmNlUGxheWVyVGltZURheSIsInBhcnNlRGF0YSIsImEiLCJzcGxpdCIsImxlbmd0aCIsImIiLCJsZXZlbE1heCIsInNjb3JlTWF4IiwiZ2FtZU1haW4iLCJnYW1lRXZlbnRCZWdpbiIsImV2ZW50IiwiZ2FtZUV2ZW50RmluaXNoIiwiZ2FtZUV2ZW50Iiwic2hvd01vZGFsIiwic2hvd1RvYXN0IiwibGlleW91X2ludGVyZmFjZSIsImhpZGVUb2FzdCIsInNob3dMb2FkaW5nIiwiaGlkZUxvYWRpbmciLCJnYW1lQmVnaW5MZXZlbCIsIm1vZGUiLCJqbmlMZXZlbCIsImdhbWVGYWlsTGV2ZWwiLCJnYW1lRmluaXNoTGV2ZWwiLCJnYW1lU2NvcmUiLCJhZGRUb2FzdCIsInNoYXJlRGlhbG9nIiwiYWRkR2V0TG9jYWtDYXJkRGlhbG9nIiwiZ2V0UGFyYW1CeU9ubGluZSIsImRlZmF1bHRWIiwiZ2V0T25saW5lU3ByaXRlRnJhbWUiLCJzaG93R3Vlc3NZb3VMaWNrT25lIiwic2hvd0d1ZXNzWW91TGlja1RvdyIsInJldHVybkhvbWVKdW1wR2FtZSIsInNoYXJlVG9Dcm93ZCIsImZ1bmMiLCJ0YWciLCJjb3VudCIsIm5hbWUiLCJHYW1lTmFtZSIsInNvdXJjZSIsInN1Y2Nlc3MiLCJ0eXBlIiwiZGF5IiwibmV3ZGF5IiwiZmxvb3IiLCJEYXRlIiwiY2FsbEFuZHJvaWQiLCJhY3Rpb24iLCJjYWxsQW5kcm9pZF8yIiwiZnVuUyIsImNhbGxQYXkiLCJpc09wZW4iLCJnZXRJc05hdGl2ZSIsImJhY2tIb21lIiwiYWRkU21hbGxHYW1lUmV0dXJuQnRuIiwiZ290b1NtYWxsR2FtZSIsImdhbWVOYW1lIiwiZ2FtZUFjdGlvbiIsImluaXRQaHlzaWNzIiwiY29uZmlnIiwiZ3JvdXBMaXN0IiwiY29sbGlzaW9uTWF0cml4IiwiX2luaXRDb25maWciLCJzaG93UHJhaXNlIiwic2hvd05hdGl2ZUJhbm5lciIsImhpZGVOYXRpdmVCYW5uZXIiLCJzaG93UmVkUGFjayIsInNob3dSZWRJY29uIiwic2hvd1JlY29tbWVuZEljb24iLCJzaG93R2FtZVJlY29tbWVuZCIsInNob3dHYW1lUmVjb21tZW5kRGlhbG9nIiwiZ2V0U2hhcmVPclZpZWRvIiwiZ2V0SnVtcEJ0bkhhdmVNb3ZlIiwic2hvd0d1ZXNzWW91TGlrZV8zIiwianVtcFJlZnJlc2hCYW5uZXIiLCJzZXRXb3JsZFJhbmtEYXRhIiwiUmFua2luZ0tleSIsImdldEJhc2VEYXRhIiwicmVsb2FkIiwic2hvd1NoYXJlVmlkZW9EaWFsb2ciLCJhZGRMdVBpbmdCdG4iLCJzaGFyZVZkIiwiYmVnaW5MdVBpbmciLCJwYXVzZUx1UGluZyIsInJlc3VtZUx1UGluZyIsInN0b3BMdVBpbmciLCJpc1NoYXJlIiwiaGFzSW5zdGFsbGVkIiwiaW5zdGFsbCIsInNob3dSZWNvbW1lbmRCZWdpbiIsInNob3dSZWNvbW1lbmRGaW5pc2giLCJzaG93QXJhcmRHb2xkR3JpZCIsInNob3dBcmFyZEdvbGRTdHJpcCIsImFkZEluc3RhbGxTaG9ydGN1dCIsInNob3dJbnN0YWxsU2hvcnRjdXREaWFsb2ciLCJzaG93UmVjb21tZW5kQXdhcmRJY29uIiwic2V0RGF0YUZvckh0dHAiLCJzaG93TW9yZUdhbWVCeUljb24iLCJzaG93TW9yZUdhbWVJY29uIiwiaGlkZU1vcmVHYW1lSWNvbiIsInNob3dNb3JlR2FtZUJ5QmFubmVyIiwic2hvd01vcmVHYW1lIiwic2hvd01vcmVHYW1lU2lkZSIsInNob3dNb3JlR2FtZU1pZGRsZV9vbmUiLCJzY2FsZSIsInVuZGVmaW5lZCIsInNob3dNb3JlR2FtZU1pZGRsZV90d28iLCJiZ1BhdGgiLCJzaG93TW9yZUdhbWVNaWRkbGVfdGhyZWUiLCJzZXRhZHRyYWNrIiwiYWRpZCIsImxvY2F0aW9uIiwic2V0T3BlclRyYWNrIiwic2hvd0FwcEJveCIsImdldFBhcmFtQnlLZXkiLCJkZWZhdWx0VmFsdWUiLCJzaG93TmF0aXZlQWRfc21hbGwiLCJzaG93TmF0aXZlQWRfYmlnIiwic2hvd05hdGl2ZUFkX2xvYWQiLCJoaWRlTW9yZUdhbWVTaWRlIiwiZ2V0U2NyZWVuc2hvdCIsInNhdmVJbWFnZVRvUGhvdG9zQWxidW0iLCJhZGRMaXN0ZW5lckJhY2tLZXkiLCJldmVudE1hbmFnZXIiLCJhZGRMaXN0ZW5lciIsIkV2ZW50TGlzdGVuZXIiLCJLRVlCT0FSRCIsIm9uS2V5UHJlc3NlZCIsImtleUNvZGUiLCJzdG9wUHJvcGFnYXRpb24iLCJtYWNybyIsIktFWSIsImJhY2siLCJBQ1RJT05fRVhJVF9CQUNLIiwic2hvd0lTQk4iLCJoaWRlSVNCTiIsInNob3dVc2VyQWdyZWVtZW50Iiwic2hvd01vcmVHYW1lR3JpZCIsImFkZFJlZFBhY2tJY29uIiwiYWRkUmVkUGFja0RpYWxvZyIsImFkZFRha2VPdXRJY29uIiwicmVzIiwiY29uc29sZSIsImxvZyIsImxpZXlvdV9sb2FkIiwidXJsTG9jYWwiLCJs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QUFQLEVBQWM7QUFDZkwsTUFBQUEsY0FBYyxDQUFDLGlCQUFlSyxLQUFoQixDQUFkO0FBQ0E7QUFDRSxHQVREO0FBVUgsQ0FoQkQ7O0FBa0JBdkIsTUFBTSxDQUFDMlMsaUJBQVAsR0FBMkIsVUFBUzFLLEdBQVQsRUFBYWhFLFFBQWIsRUFBc0I7QUFDaEQsTUFBR2dFLEdBQUcsSUFBSSxFQUFWLEVBQWM7QUFDYjtBQUNBOztBQUNELE1BQUkySyxRQUFRLEdBQUc7QUFDZDNLLElBQUFBLEdBQUcsRUFBRUEsR0FEUztBQUVkOEQsSUFBQUEsSUFBSSxFQUFFO0FBRlEsR0FBZjtBQUlBbEwsRUFBQUEsRUFBRSxDQUFDMlIsTUFBSCxDQUFVSyxJQUFWLENBQWVELFFBQWYsRUFBeUIsVUFBVUYsR0FBVixFQUFlUCxHQUFmLEVBQW9CO0FBQzVDLFFBQUlPLEdBQUosRUFBUztBQUNSO0FBQ0E7O0FBQ0QsUUFBSTtBQUNIek8sTUFBQUEsUUFBUSxDQUFDeU8sR0FBRCxFQUFLUCxHQUFMLENBQVI7QUFDQSxLQUZELENBRUUsT0FBTzVRLEtBQVAsRUFBYztBQUNmTCxNQUFBQSxjQUFjLENBQUMscUJBQW1CSyxLQUFwQixDQUFkO0FBQ0E7QUFDRCxHQVREO0FBVUEsQ0FsQkQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFd4TWFuYWdlciA9IHJlcXVpcmUoJ1d4TWFuYWdlcicpO1xyXG5jb25zdCBGYWNlQm9va01hbmFnZXIgPSByZXF1aXJlKCdGYWNlQm9va01hbmFnZXInKTtcclxuY29uc3QgTmF0aXZlTWFuYWdlciA9IHJlcXVpcmUoJ05hdGl2ZU1hbmFnZXInKTtcclxuY29uc3QgT3Bwb0g1TWFuYWdlciA9IHJlcXVpcmUoJ09wcG9INU1hbmFnZXInKTtcclxuY29uc3QgT3Bwb01hbmFnZXIgPSByZXF1aXJlKCdPcHBvTWFuYWdlcicpO1xyXG5jb25zdCBWaXZvTWFuYWdlciA9IHJlcXVpcmUoJ1Zpdm9NYW5hZ2VyJyk7XHJcbmNvbnN0IFhpYW9NaU1hbmFnZXJINSA9IHJlcXVpcmUoJ1hpYW9NaU1hbmFnZXJINScpO1xyXG5jb25zdCBYaWFvTWlNYW5hZ2VyID0gcmVxdWlyZSgnWGlhb01pTWFuYWdlcicpO1xyXG5jb25zdCBKaW5SaVRvdVRpYW9NYW5hZ2VyID0gcmVxdWlyZSgnSmluUmlUb3VUaWFvTWFuYWdlcicpO1xyXG5jb25zdCBIdWF3ZWlNYW5hZ2VyID0gcmVxdWlyZSgnSHVhd2VpTWFuYWdlcicpO1xyXG5jb25zdCBCYWlEdU1hbmFnZXIgPSByZXF1aXJlKCdCYWlEdU1hbmFnZXInKTtcclxuY29uc3QgUVFNYW5hZ2VyID0gcmVxdWlyZSgnUVFNYW5hZ2VyJyk7XHJcbmNvbnN0IFF1VG91VGlhb01hbmFnZXJINSA9IHJlcXVpcmUoJ1F1VG91VGlhb01hbmFnZXJINScpO1xyXG5jb25zdCBNYWdpY01hbmFnZXJINSA9IHJlcXVpcmUoJ01hZ2ljTWFuYWdlckg1Jyk7XHJcbmNvbnN0IEJhc2VNYW5hZ2VyID0gcmVxdWlyZSgnQmFzZU1hbmFnZXInKTtcclxuY29uc3QgbGlleW91X3dlYk1hbmFnZXIgPSByZXF1aXJlKCdsaWV5b3Vfd2ViTWFuYWdlcicpO1xyXG5cclxud2luZG93Ll9TREtWZXJzaW9uID0gJzIwMjAuMTAuMTYuMSc7XHJcbndpbmRvdy5fU0RLVmVyc2lvbkNvZGUgPSA0O1xyXG5cclxud2luZG93Ll9TREtOYXRpdmVBZExvYWRTZXJ2ZXJSZXMgPSBmYWxzZTtcclxuXHJcbndpbmRvdy5saWV5b3VfU2RrTWFuYWdlciA9IG1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGluc3RhbmNlOm51bGwsXHJcblx0cGxhdGZvcm06JycsXHJcblx0X1NjZW5lU2NhbGU6IDEsXHJcblx0aW5pdDpmdW5jdGlvbihvYmogPSB7fSl7XHJcblx0XHR2YXIgd2luU2l6ZSA9IGNjLndpblNpemU7XHJcblx0XHR2YXIgd2luc2l6ZVdpZHRoID0gd2luU2l6ZS5oZWlnaHQ+d2luU2l6ZS53aWR0aD93aW5TaXplLndpZHRoOndpblNpemUuaGVpZ2h0O1xyXG5cdFx0dGhpcy5zZGtXaW5TaXplID0gd2luU2l6ZTtcclxuICAgICAgICB0aGlzLl9TY2VuZVNjYWxlID0gd2luc2l6ZVdpZHRoLzcyMDtcclxuXHRcdGxpZXlvdV9zaG93TG9nKCfniYjmnKzvvJonK19TREtWZXJzaW9uKTtcclxuXHRcdHRoaXMucGxhdGZvcm0gPSByZWxlYXNlUGxhdGZvcm07XHJcblx0XHRpZighdGhpcy5pbnN0YW5jZSl7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdFx0aWYobGlleW91X0dvbGRLZXkgJiYgbGlleW91X0dvbGRLZXkgIT0gXCJcIil7XHJcblx0XHRcdFx0XHRsaWV5b3UuS2V5X0dvbGQgPSBsaWV5b3VfR29sZEtleTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdH1cclxuXHRcdFx0bGlleW91LlByb3BzX0Jhc2VfR29sZCA9IGxpZXlvdV9Qcm9wc19CYXNlX0dvbGQ7XHJcblx0XHRcdHRoaXMuc2V0T3BlbklkX3V1aWQoKTtcclxuXHRcdFx0dGhpcy5zaG93Qm9zc0tleU5vZGUoKTtcclxuXHRcdFx0bGlleW91X3Nob3dMb2coXCI+Pj4+Pj4+Pj4+Pj4gICAgICAgICBpbml0IHNka1wiKTtcclxuXHRcdFx0dGhpcy5zZXROZXdQbGF5ZXJEYXRhKCk7XHJcblx0XHRcdHRoaXMuaW5pdEdhbWVEYXRhKCk7XHJcblx0XHRcdC8vdGhpcy5pbml0TWFpbkdhbWUoKTsvL+iuvue9ruS4u+a4uOaIj1xyXG5cdFx0XHRpZih0aGlzLnBsYXRmb3JtID09ICdvcHBvSDUnKXtcclxuXHRcdFx0XHR0aGlzLmluc3RhbmNlID0gbmV3IE9wcG9INU1hbmFnZXIoKTtcclxuXHRcdFx0XHR0aGlzLmluc3RhbmNlLmluaXQob2JqKTtcclxuXHRcdFx0fWVsc2UgaWYoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5PUFBPX0dBTUUpe1xyXG5cdFx0XHRcdHRoaXMuaW5zdGFuY2UgPSBuZXcgT3Bwb01hbmFnZXIoKTtcclxuXHRcdFx0XHR0aGlzLmluc3RhbmNlLmluaXQob2JqKTtcclxuXHRcdFx0fWVsc2UgaWYoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5WSVZPX0dBTUUpe1xyXG5cdFx0XHRcdHRoaXMuaW5zdGFuY2UgPSBuZXcgVml2b01hbmFnZXIoKTtcclxuXHRcdFx0XHR0aGlzLmluc3RhbmNlLmluaXQob2JqKTtcclxuXHRcdFx0fWVsc2UgaWYodGhpcy5wbGF0Zm9ybSA9PSAncXEnKXtcclxuXHRcdFx0XHR0aGlzLmluc3RhbmNlID0gbmV3IFFRTWFuYWdlcigpO1xyXG5cdFx0XHRcdHRoaXMuaW5zdGFuY2UuaW5pdChvYmopO1xyXG5cdFx0XHR9ZWxzZSBpZihjYy5zeXMucGxhdGZvcm0gPT0gY2Muc3lzLkJBSURVX0dBTUUpe1xyXG5cdFx0XHRcdHRoaXMuaW5zdGFuY2UgPSBuZXcgQmFpRHVNYW5hZ2VyKCk7XHJcblx0XHRcdFx0dGhpcy5pbnN0YW5jZS5pbml0KG9iaik7XHJcblx0XHRcdH1lbHNlIGlmKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuSFVBV0VJX0dBTUUpe1xyXG5cdFx0XHRcdCB0aGlzLmluc3RhbmNlID0gbmV3IEh1YXdlaU1hbmFnZXIoKTtcclxuXHRcdFx0XHQgdGhpcy5pbnN0YW5jZS5pbml0KG9iaik7XHJcblx0XHRcdH1lbHNlIGlmKHRoaXMucGxhdGZvcm0gPT0gJ3hpYW9NaUg1Jyl7XHJcblx0XHRcdFx0dGhpcy5pbnN0YW5jZSA9IG5ldyBYaWFvTWlNYW5hZ2VySDUoKTtcclxuXHRcdFx0XHR0aGlzLmluc3RhbmNlLmluaXQob2JqKTtcclxuXHRcdCAgIFx0fWVsc2UgaWYodGhpcy5wbGF0Zm9ybSA9PSAnUXVUb3VUaWFvSDUnKXtcclxuXHRcdFx0XHR0aGlzLmluc3RhbmNlID0gbmV3IFF1VG91VGlhb01hbmFnZXJINSgpO1xyXG5cdFx0XHRcdHRoaXMuaW5zdGFuY2UuaW5pdChvYmopO1xyXG5cdFx0ICAgXHR9ZWxzZSBpZih0aGlzLnBsYXRmb3JtID09ICdNYWdpY0g1Jyl7XHJcblx0XHRcdFx0dGhpcy5pbnN0YW5jZSA9IG5ldyBNYWdpY01hbmFnZXJINSgpO1xyXG5cdFx0XHRcdHRoaXMuaW5zdGFuY2UuaW5pdChvYmopO1xyXG5cdFx0ICAgXHR9ZWxzZSBpZih0aGlzLnBsYXRmb3JtID09ICdsaWV5b3VINScpe1xyXG5cdFx0XHRcdHRoaXMuaW5zdGFuY2UgPSBuZXcgbGlleW91X3dlYk1hbmFnZXIoKTtcclxuXHRcdFx0XHR0aGlzLmluc3RhbmNlLmluaXQob2JqKTtcclxuXHRcdCAgIFx0fWVsc2UgaWYoY2Muc3lzLnBsYXRmb3JtID09IGNjLnN5cy5YSUFPTUlfR0FNRSl7XHJcblx0XHRcdFx0dGhpcy5pbnN0YW5jZSA9IG5ldyBYaWFvTWlNYW5hZ2VyKCk7XHJcblx0XHRcdFx0dGhpcy5pbnN0YW5jZS5pbml0KG9iaik7XHJcblx0XHQgICBcdH1lbHNlIGlmKHRoaXMucGxhdGZvcm0gPT0gJ2ppblJpVG91VGlhbycpe1xyXG5cdFx0XHRcdHRoaXMuaW5zdGFuY2UgPSBuZXcgSmluUmlUb3VUaWFvTWFuYWdlcigpO1xyXG5cdFx0XHRcdHRoaXMuaW5zdGFuY2UuaW5pdChvYmopO1xyXG5cdFx0ICAgXHR9ZWxzZSBpZiAoY2Muc3lzLnBsYXRmb3JtID09PSBjYy5zeXMuV0VDSEFUX0dBTUUpIHtcclxuXHRcdFx0XHR0aGlzLmluc3RhbmNlID0gbmV3IFd4TWFuYWdlcigpO1xyXG5cdFx0XHRcdHRoaXMuaW5zdGFuY2UuaW5pdChvYmopO1xyXG5cdFx0XHR9ZWxzZSBpZihjYy5zeXMuaXNOYXRpdmUpIHtcclxuXHRcdFx0XHR0aGlzLmluc3RhbmNlID0gbmV3IE5hdGl2ZU1hbmFnZXIoKTtcclxuXHRcdFx0XHR0aGlzLmluc3RhbmNlLmluaXQob2JqKTtcclxuXHRcdFx0fWVsc2UgaWYgKHdpbmRvdy5GQkluc3RhbnQgJiYgRkJJbnN0YW50LmdldFBsYXRmb3JtKCkpIHtcclxuXHRcdFx0XHR0aGlzLmluc3RhbmNlID0gbmV3IEZhY2VCb29rTWFuYWdlcigpO1xyXG5cdFx0XHRcdHRoaXMuaW5zdGFuY2UuaW5pdChvYmopO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR0aGlzLmluc3RhbmNlID0gbmV3IEJhc2VNYW5hZ2VyKCk7XHJcblx0XHRcdFx0dGhpcy5pbnN0YW5jZS5pbml0KG9iaik7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gaWYobGlleW91X2FwcGlkICE9IFwiXCIpe1xyXG5cdFx0XHQvLyBcdHRyeSB7XHJcblx0XHRcdC8vIFx0XHRjb2Nvc0FuYWx5dGljcy5pbml0KHtcclxuXHRcdFx0Ly8gXHRcdFx0YXBwSUQ6IGxpZXlvdV9hcHBpZCwgICAgICAgICAgICAgIC8vIOa4uOaIj0lEXHJcblx0XHRcdC8vIFx0XHRcdHZlcnNpb246IHRoaXMuaW5zdGFuY2UuZ2V0VmVyc2lvbigpLCAgICAgICAgICAgLy8g5ri45oiPL+W6lOeUqOeJiOacrOWPt1xyXG5cdFx0XHQvLyBcdFx0XHRzdG9yZUlEOiB0aGlzLmluc3RhbmNlLmdldFN5c1BsYXRmb3JtX3N0cmluZygpLCAgICAgLy8g5YiG5Y+R5rig6YGTXHJcblx0XHRcdC8vIFx0XHRcdGVuZ2luZTogXCJjb2Nvc1wiLCAgICAgICAgICAgIC8vIOa4uOaIj+W8leaTjlxyXG5cdFx0XHQvLyBcdFx0fSk7XHRcclxuXHRcdFx0Ly8gXHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHQvLyBcdH1cclxuXHRcdFx0Ly8gfVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLnNldEdhbWVFdmVudCgnaW5pdCcpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fSxcclxuXHR2aWJyYXRlU2hvcnQoKXtcclxuXHRcdHRoaXMuYWRkQm9zc1RpdGxlKCfnn63pnIfliqgnKTtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2Upe1xyXG5cdFx0XHR0aGlzLmluc3RhbmNlLnZpYnJhdGVTaG9ydCgpO1xyXG5cdFx0fVxyXG5cdH0sXHJcbiAgICB2aWJyYXRlTG9uZygpe1xyXG5cdFx0dGhpcy5hZGRCb3NzVGl0bGUoJ+mVv+mch+WKqCcpO1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSl7XHJcblx0XHRcdHRoaXMuaW5zdGFuY2UudmlicmF0ZUxvbmcoKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHZpYnJhdGVDdXN0b20odGltZSl7XHJcblx0XHR0aGlzLmFkZEJvc3NUaXRsZSgn6Ieq5a6a5LmJ6ZyH5YqoJyt0aW1lKTtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2Upe1xyXG5cdFx0XHR0aGlzLmluc3RhbmNlLnZpYnJhdGVDdXN0b20odGltZSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiDmmK/lkKblj6/ku6XnnIvop4bpopFcclxuXHQgKi9cclxuXHRnZXRIYXZlVmlkZW8oKXtcclxuXHRcdHRoaXMuYWRkQm9zc1RpdGxlKCfmmK/lkKblj6/ku6XnnIvop4bpopEnKTtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2Upe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZS5nZXRIYXZlVmlkZW8oKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIDAg5b6u5L+hIDEg5Y6f55SfIDIgZmFjZWJvb2sgIDMgdml2byA0IG9wcG8gNSBvcHBvSDUgNiBodWF3ZWkgNyB4aWFvbXVoNSA4IGppbnRpdG91dGlhbyA5IHhpYW9taSAxMCBiYWlkdSAxMSBxcSAxMiBxdXRvdXRpYW8gMTMgTWFnaWNINVxyXG5cdCAqL1xyXG5cdGdldFN5c1BsYXRmb3JtKCl7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2UuZ2V0U3lzUGxhdGZvcm0oKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiAtMTtcclxuXHR9LFxyXG5cdHNldE9wZW5JZF91dWlkKCl7XHJcblx0XHRpZihVc2VyZGVmYXVsdC5nZXRTdHJpbmdGb3JLZXkoJ2xpZXlvdV9zZGtfb3BlbmlkX3V1aWQnLCcnKSAhPSAnJyl7XHJcblx0XHRcdG9wZW5pZF91dWlkID0gVXNlcmRlZmF1bHQuZ2V0U3RyaW5nRm9yS2V5KCdsaWV5b3Vfc2RrX29wZW5pZF91dWlkJywnJylcclxuXHRcdFx0cmV0dXJuIDtcclxuXHRcdH1cclxuXHRcdHZhciBzdHIgPSBcIlwiO1xyXG5cdFx0dmFyIGNoYXIgPSBbJzAnLCcxJywnMicsJzMnLCc0JywnNScsJzYnLCc3JywnOCcsJzknLFxyXG5cdFx0J0EnLCdCJywnQycsJ0QnLCdFJywnRicsJ0cnLCdIJywnSScsJ0cnLFxyXG5cdFx0J0snLCdMJywnTScsJ04nLCdPJywnUCcsJ1EnLCdSJywnUycsJ1QnLFxyXG5cdFx0J1UnLCdWJywnVycsJ1gnLCdZJywnWicsXHJcblx0XHQnYScsJ2InLCdjJywnZCcsJ2UnLCdmJywnZycsJ2gnLCdpJywnZycsXHJcblx0XHQnaycsJ2wnLCdtJywnbicsJ28nLCdwJywncScsJ3InLCdzJywndCcsXHJcblx0XHQndScsJ3YnLCd3JywneCcsJ3knLCd6J1xyXG5cdFx0XHRdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IDMyO2krKyl7XHJcblx0XHRcdHN0ciArPSBjaGFyW3BhcnNlSW50KE1hdGgucmFuZG9tKCkgKiA2MildO1xyXG5cdFx0fVxyXG5cdFx0b3BlbmlkX3V1aWQgPSBzdHI7XHJcblx0XHRVc2VyZGVmYXVsdC5zZXREYXRhRm9yS2V5KCdsaWV5b3Vfc2RrX29wZW5pZF91dWlkJyxzdHIpXHJcblx0fSxcclxuXHQvKipcclxuXHQgKiDliJ3lp4vljJbmuLjmiI/mlbDmja4gXHJcblx0ICovXHJcblx0aW5pdEdhbWVEYXRhKCl7XHJcblx0XHR2YXIgd2luU2l6ZSA9IGNjLndpblNpemU7XHJcblx0XHR2YXIgd2lkdGhTID0gd2luU2l6ZS5oZWlnaHQgKiAwLjU2MjU7XHJcblx0XHRpZiAod2luU2l6ZS53aWR0aCA8IHdpZHRoUykge1xyXG5cdFx0XHRsaWV5b3UuX1NjZW5lU2NhbGUgPSB3aW5TaXplLndpZHRoIC8gd2lkdGhTO1xyXG5cdFx0XHRsaWV5b3UuX29mZnNldFkgPSB3aW5TaXplLmhlaWdodCAqICgxIC0gd2luU2l6ZS53aWR0aCAvIHdpZHRoUykgLyAyO1xyXG5cdFx0XHRsaWV5b3UuX29mZnNldFggPSB3aW5TaXplLndpZHRoICogKDEgLSB3aW5TaXplLndpZHRoIC8gd2lkdGhTKSAvIDI7XHJcblx0XHR9XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiDnm5HlkKzov5vlhaXlkI7lj7BcclxuXHQgKi9cclxuXHRvbkhpZGU6ZnVuY3Rpb24oZnVuKXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHRcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5vbkhpZGUoZnVuKTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIOebkeWQrOWQjuWPsOi/lOWbnua4uOaIj1xyXG5cdCAqL1xyXG5cdG9uU2hvdyhmdW4pe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcdFxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLm9uU2hvdyhmdW4pO1xyXG5cdH0sXHJcblx0c2hvd01vcmVHYW1lTG9hZGluZyhjYWxsQmFjayA9IG51bGwpe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSl7XHRcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5zaG93TW9yZUdhbWVMb2FkaW5nKGNhbGxCYWNrKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRjYWxsQmFjaygpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0Z2V0SGVscExldmVsKCl7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKXtcdFxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZS5nZXRIZWxwTGV2ZWwoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiAtMTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIOaYvuekuuW5v+WRiiDopoHkvKDkvY3nva53eEJhbm5lcklkXHJcblx0ICogc2hvd0Jhbm5lcih7YWRVbml0SWQ6aWQsc3R5bGU6e2xlZnQ6MCx0b3A6MCx3aWR0aDozMDAsaGVpZ2h0OjEwNX19KVxyXG5cdCAqL1xyXG5cdHNob3dCb3NzS2V5Tm9kZSgpe1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0Ly8gY2MubG9hZGVyLmxvYWRSZXMoJ1NESy9tb2R1bGUvQm9zc0tleS9ib3NzS2V5JyxmdW5jdGlvbihlcnIscmVzKXtcclxuXHRcdHZhciBzaXplID0gY2Mud2luU2l6ZTtcclxuXHRcdHZhciBiTiA9IGxpZXlvdV9ib3NzTm9kZV9wcmVmYWIoKTtcclxuXHRcdHNlbGYuYm9zc05vZGUgPSBiTjtcclxuXHRcdHZhciBub2RlID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuXHRcdG5vZGUuYWRkQ2hpbGQoYk4pO1xyXG5cdFx0Yk4ueCA9IHNpemUud2lkdGgvMjtcclxuXHRcdGJOLnkgPSBzaXplLmhlaWdodC8yO1xyXG5cdFx0Y2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUoYk4pO1xyXG5cdH0sXHJcblx0YWRkQm9zc1RpdGxlKHRpdGxlID0gJycpe1xyXG5cdFx0aWYodGhpcy5ib3NzTm9kZSAmJiBsaWV5b3Vfc2hvd0RlYnVnKXtcclxuXHRcdFx0dGhpcy5ib3NzTm9kZS5nZXRDb21wb25lbnQoJ0Jvc3NLZXlfU0RLJykuYWRkVGl0bGUodGl0bGUpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0c2hvd0Jhbm5lcjpmdW5jdGlvbihvYmogPSB7fSl7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVx0e1xyXG5cdFx0XHR0aGlzLmluc3RhbmNlLl9iYW5uZXJBZFN0eWxlID0gb2JqO1xyXG5cdFx0XHR0aGlzLmluc3RhbmNlLnNob3dCYW5uZXIob2JqKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIOiHquWumuS5ieW5v+WRim9iaihpZDowLHg6MCx5OjAsc2NhbGU6MClcclxuXHQgKi9cclxuXHRzaG93QmFubmVyQ3VzdG9tKG9iaiA9IHt9KXtcclxuXHRcdHRoaXMuYWRkQm9zc1RpdGxlKCfmmL7npLroh6rlrprkuYliYW5uZXInKTtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHRcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5fYmFubmVyQWRTdHlsZSA9IG9iajtcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5zaG93QmFubmVyQ3VzdG9tKG9iaik7XHJcblx0XHR9XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiDmmL7npLrlupXpg6jlub/lkYogd3hCYW5uZXJJZFxyXG5cdCAqL1xyXG5cdHNob3dCYW5uZXJCeUJvdHRvbTpmdW5jdGlvbihpZCA9ICcnKXtcclxuXHRcdHRoaXMuYWRkQm9zc1RpdGxlKCfmmL7npLrlupXpg6hiYW5uZXInKTtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHRcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5fYmFubmVyQWRTdHlsZSA9IHt9O1xyXG5cdFx0XHR0aGlzLmluc3RhbmNlLnNob3dCYW5uZXJCeUJvdHRvbShpZCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiDmmL7npLrpobbpg6jlub/lkYogd3hCYW5uZXJJZFxyXG5cdCAqL1xyXG5cdHNob3dCYW5uZXJCeVRvcDpmdW5jdGlvbihpZCA9ICcnKXtcclxuXHRcdHRoaXMuYWRkQm9zc1RpdGxlKCfmmL7npLrpobbpg6hiYW5uZXInKTtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHRcclxuXHRcdHtcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5fYmFubmVyQWRTdHlsZSA9IHt5OjB9O1xyXG5cdFx0XHR0aGlzLmluc3RhbmNlLnNob3dCYW5uZXJCeVRvcChpZCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiDpmpDol4/lub/lkYrmnaFcclxuXHQgKi9cclxuXHRoaWRlQmFubmVyOmZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLmFkZEJvc3NUaXRsZSgn6ZqQ6JePYmFubmVyJyk7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKXtcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5oaWRlQmFubmVyKCk7XHJcblx0XHRcdGlmKHRoaXMuaW5zdGFuY2UubW9yZUdhbWVCYW5uZXIgJiYgdGhpcy5pbnN0YW5jZS5tb3JlR2FtZUJhbm5lci5pc1ZhbGlkKXtcclxuXHRcdFx0XHR0aGlzLmluc3RhbmNlLm1vcmVHYW1lQmFubmVyLmRlc3Ryb3koKTtcclxuXHRcdFx0XHR0aGlzLmluc3RhbmNlLm1vcmVHYW1lQmFubmVyID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0YWRkTmF0aXZlQWQobm9kZSA9IG51bGwpe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcdFxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLmFkZE5hdGl2ZUFkKG5vZGUpO1xyXG5cdH0sXHJcblx0Y3VzdENsaWNrTmF0aXZlKG5vZGUgPSBudWxsKXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHRcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5jdXN0Q2xpY2tOYXRpdmUobm9kZSk7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiDop4bpopHlub/lkYogd3hWaWRlb0lkIGZ1bmN0aW9uKCl7fVxyXG5cdCAqL1xyXG5cdHNob3dSZXdhcmRlZFZpZGVvQWQ6IGZ1bmN0aW9uKGNsb3NlQ2FsbEJhY2ssY2xvc2VDYWxsQmFjazIpe1xyXG5cdFx0dGhpcy5hZGRCb3NzVGl0bGUoJ+aSreaUvuinhumikScpO1xyXG5cdFx0aWYodHlwZW9mIGNsb3NlQ2FsbEJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIH1lbHNle1xyXG5cdFx0XHRjbG9zZUNhbGxCYWNrID0gY2xvc2VDYWxsQmFjazI7XHJcblx0XHR9XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVx0XHJcblx0XHQgICB0aGlzLmluc3RhbmNlLnNob3dSZXdhcmRlZFZpZGVvQWQoJycsY2xvc2VDYWxsQmFjayk7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiDojrflj5blvq7kv6HmjojmnYMgXHJcblx0ICovXHJcblx0Z2V0QXV0aG9yaXplOiBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5nZXRBdXRob3JpemUoKTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIOW+ruS/oeeZu+mZhlxyXG5cdCAqL1xyXG5cdGxvZ2luOiBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5sb2dpbigpO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICog5re75Yqg5pys5Zyw5aSN5rS75Y2hXHJcblx0ICovXHJcblx0YWRkTG9jYWxSZXN1cnI6IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLmFkZExvY2FsUmVzdXJyKCk7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiDkvb/nlKjlpI3mtLvljaFcclxuXHQgKi9cclxuXHR1c2VSZXN1cnI6IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLnVzZVJlc3VycigpO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICog5Yig6Zmk6YKA6K+35Yiw55qE5aW95Y+LXHJcblx0ICovXHJcblx0ZGVsZXRlSW52aXRlRnJpZW5kKGlkKXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHRoaXMuaW5zdGFuY2UuZGVsZXRlSW52aXRlRnJpZW5kKGlkKTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqICDkv67mlLnpgoDor7flpb3lj4vnirbmgIFcclxuXHQgKi9cclxuXHRtb2RpZnlJbnZpdGVGcmllbmQoZnJpZW5kSWQpe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5tb2RpZnlJbnZpdGVGcmllbmQoZnJpZW5kSWQpO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICog6I635Y+W6YKA6K+35Yiw55qE5aW95Y+L5YiX6KGoXHJcblx0ICovXHJcblx0Z2V0SW52aXRlRnJpZW5kRGF0YShmbGFnLGZ1bil7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLmdldEludml0ZUZyaWVuZERhdGEoZmxhZyxmdW4pO1xyXG5cdH0sXHJcblx0XHJcblx0LyoqXHJcblx0ICog5pi+56S66YKA6K+35Yiw55qE5aW95Y+LXHJcblx0ICovXHJcblx0c2hvd0ludml0ZUZyaWVuZChfbm9kZSxfY2FsbEJhY2spe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5zaG93SW52aXRlRnJpZW5kKF9ub2RlLF9jYWxsQmFjayk7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiDmmL7npLrpgoDor7fliLDnmoTlpb3lj4sg5bey57uP6aKG5Y+W6L+H5aWW5Yqx55qEXHJcblx0ICovXHJcblx0c2hvd0ludml0ZUZyaWVuZEZhaWx1cmUoX25vZGUpe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5zaG93SW52aXRlRnJpZW5kRmFpbHVyZShfbm9kZSk7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiDmn6XnnIvlpI3mtLvljaEg6L+U5Zue5aSN5rS75Y2h5Liq5pWwIOWunuaXtlxyXG5cdCAqL1xyXG5cdGNoZWNrUmVzdXJyTnVtOiBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2UuY2hlY2tSZXN1cnJOdW0oKTtcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiDmn6XnnIvlpI3mtLvljaEg6L+U5Zue5aSN5rS75Y2h5Liq5pWwIOS4jeaYr+WunuaXtlxyXG5cdCAqL1xyXG5cdGNoZWNrUmVzdXJyTnVtXzI6IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZS5jaGVja1Jlc3Vyck51bV8yKCk7XHJcblxyXG5cdFx0cmV0dXJuIDA7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiDliIbkuqt7bmFtZTrmuLjmiI/lkI0sc291cmNlOjEsaW52aXRlRnJpZW5kOmJvb2wsc3VjY2VzczpmdW5jdGlvbih0eXBlKXsxIOWIhuS6q+WIsOe+pCAgMiDkuKrkurp9LGdldEdyb3VwSWQ6dHJ1ZX0gXHJcblx0ICogc291cmNlIDEg6L2s5Y+RIDIg6aaW6aG15YiG5Lqr5oyJ6ZKuIDMg5aSN5rS7IDQg54Kr6ICAIDUg5L2/55So6YGT5YW3IDYg5Y+M5YCN5aWW5YqxIDcg6Kej6ZSBIDgg5biu5YqpIDkg5biu5Yqp5oiQ5YqfIDEwIOinhumikeWksei0peiwg+eUqOWIhuS6q1xyXG5cdCAqL1xyXG5cdHNoYXJlOiBmdW5jdGlvbihvYmope1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5zaGFyZShvYmopO1xyXG5cdH0sXHJcblx0c2hhcmVIZWxwKGxldmVsKXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHRoaXMuaW5zdGFuY2Uuc2hhcmVIZWxwKGxldmVsKTtcclxuXHR9LFxyXG5cdHNoYXJlSGVscFN1Y2Nlc3MobGV2ZWwpe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5zaGFyZUhlbHBTdWNjZXNzKGxldmVsKTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIFxyXG5cdCAqL1xyXG5cdGhlbHBGcmllbmRTdWNjZXNzKGxldmVsKXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2Upe1xyXG5cdFx0XHR0aGlzLmluc3RhbmNlLmhlbHBGcmllbmRTdWNjZXNzKGxldmVsKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdGdldElzSGF2ZUZyaWVuZEhlbHBNZShsZXZlbCxmdW4pe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5nZXRJc0hhdmVGcmllbmRIZWxwTWUobGV2ZWwsZnVuKTtcclxuXHR9LFxyXG5cdFxyXG5cdFxyXG5cdC8qKlxyXG5cdCAqIOaYvuekuuWFqOmDqOaOkuihjOamnCB7cmFua0tleTprZXksbm9kZTpub2RlLGNsb3NlRnVuOmZ1bixvcmRlclN0cjpcImZhbHNlXCIseDowLHk6MH1cclxuXHQgKiBvcmRlclN0ciDpu5jorqRmYWxzZVxyXG5cdCAqL1xyXG5cdHNob3dBbGxSYW5raW5nTGF5ZXI6IGZ1bmN0aW9uKG9iail7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLnNob3dBbGxSYW5raW5nTGF5ZXIob2JqKTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIOaYvuekuuWksei0peaOkuihjOamnCB7cmFua0tleTprZXksbm9kZTpub2RlLHNob3dBbmRIaWRlTm9kZTpub2RlLG9yZGVyU3RyOlwiZmFsc2VcIix4OjAseTowfVxyXG5cdCAqL1xyXG5cdHNob3dGYWlsUmFua2luZ0xheWVyOiBmdW5jdGlvbihvYmope1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5zaG93RmFpbFJhbmtpbmdMYXllcihvYmopO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICog5o+Q5Lqk5o6S6KGM5qac5pWw5o2uIGtleSxzY29yZVxyXG5cdCAqL1xyXG5cdHNldFJhbmtpbmdEYXRhOiBmdW5jdGlvbihrZXksc2NvcmUpe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5zZXRSYW5raW5nRGF0YShrZXksc2NvcmUpO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICog5pi+56S656S+5Yy65oyJ6ZKue1xyXG4gICAgICAgICAgICBpY29uOiAnd2hpdGUnLC8vZ3JlZW4gIGRhcmsgICBsaWdodFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMTUsXHJcbiAgICAgICAgICAgICAgICB0b3A6IDE1LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cdCAqL1xyXG5cdHNob3dGb3J1bTpmdW5jdGlvbihvYmope1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcdFxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLnNob3dGb3J1bShvYmopO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICog6ZqQ6JeP56S+5Yy65oyJ6ZKuXHJcblx0ICovXHJcblx0Y2xvc2VGb3J1bTpmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5jbG9zZUZvcnVtKCk7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiDot7PovaxhcHBcclxuXHQgKi9cclxuXHRqdW1wQXBwKGRhdGEsdXJsLHBhZ2UsbnVtKXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHRoaXMuaW5zdGFuY2UuanVtcEFwcChkYXRhLHVybCxwYWdlLG51bSk7XHJcblx0fSxcclxuXHRuZXdKdW1wQXBwKG9iaiA9IHt9KXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHRoaXMuaW5zdGFuY2UubmV3SnVtcEFwcChvYmopO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICog5pi+56S66Ieq5bex5bm/5ZGKXHRcdOi/m+WFpea4uOaIj1xyXG5cdCAqL1xyXG5cdHNob3dTcG90QnlCZWdpbihpc0hhdmVOYXRpdmUgPSBmYWxzZSx0b3AgPSAwKXtcclxuXHRcdHRoaXMuYWRkQm9zc1RpdGxlKCfmj5LlsY8g5byA5aeLJyk7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLnNob3dTcG90QnlCZWdpbihpc0hhdmVOYXRpdmUsdG9wKTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIOaYvuekuuiHquW3seW5v+WRilx0XHTmmoLlgZxcclxuXHQgKi9cclxuXHRzaG93U3BvdEJ5UGF1c2UoaXNIYXZlTmF0aXZlID0gZmFsc2UsdG9wID0gMCl7XHJcblx0XHR0aGlzLmFkZEJvc3NUaXRsZSgn5o+S5bGPIOaaguWBnCcpO1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5zaG93U3BvdEJ5UGF1c2UoaXNIYXZlTmF0aXZlLHRvcCk7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiDmmL7npLroh6rlt7Hlub/lkYogIFx05ri45oiP57uT5p2fXHJcblx0ICovXHJcblx0c2hvd1Nwb3RCeUZpbmlzaChpc0hhdmVOYXRpdmUgPSBmYWxzZSx0b3AgPSAwKXtcclxuXHRcdHRoaXMuYWRkQm9zc1RpdGxlKCfmj5LlsY8g57uT5p2fJyk7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLnNob3dTcG90QnlGaW5pc2goaXNIYXZlTmF0aXZlLHRvcCk7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiDlvq7kv6Hojrflj5bniYjmnKzmmK/lkKbmlK/mjIHmraTmlrnms5UgZGF0YSA9IOKAnDEuNi424oCd54mI5pys5Y+3XHJcblx0ICovXHJcblx0Z2V0U0RLVmVyc2lvbkNhblVzZTpmdW5jdGlvbihkYXRhKXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlLmdldFNES1ZlcnNpb25DYW5Vc2UoZGF0YSk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDorr7nva7mlrDnjqnlrrbmlbDmja5cclxuXHQgKi9cclxuXHRzZXROZXdQbGF5ZXJEYXRhKCl7XHJcblx0XHR2YXIgYmVnaW5HYW1lTnVtID0gVXNlcmRlZmF1bHQuZ2V0SW50Rm9yS2V5KFwiY29tZUdhbWVOdW1cIiwwKTtcclxuXHRcdFVzZXJkZWZhdWx0LnNldERhdGFGb3JLZXkoXCJjb21lR2FtZU51bVwiLGJlZ2luR2FtZU51bSArIDEpO1xyXG5cdFx0XHJcblx0XHR2YXIgbmV3UGxheWVyID0gIFVzZXJkZWZhdWx0LmdldEJvb2xGb3JLZXkobGlleW91LktleV9OZXdQbGF5ZXIsdHJ1ZSk7Ly9sZXZlbFN0YXIgKyBsZXZlbFxyXG5cdFx0aWYgKG5ld1BsYXllcikge1xyXG5cdFx0XHR2YXIgbm93VGltZSA9IHBhcnNlSW50KGdldFRpbWUoKS8xMDAwKTtcclxuXHRcdFx0VXNlcmRlZmF1bHQuc2V0RGF0YUZvcktleShsaWV5b3UuS2V5X09uY2VQbGF5ZXJUaW1lLG5vd1RpbWUpO1xyXG5cdFx0XHRVc2VyZGVmYXVsdC5zZXRCb29sRm9yS2V5KGxpZXlvdS5LZXlfTmV3UGxheWVyLGZhbHNlKTtcclxuXHJcblx0XHRcdHZhciB0aW1lID0gZ2V0VGltZURheSgpO1xyXG5cdFx0XHRVc2VyZGVmYXVsdC5zZXREYXRhRm9yS2V5KGxpZXlvdS5LZXlfT25jZVBsYXllclRpbWVEYXksdGltZSk7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH0sXHJcblx0LyoqXHJcblx0ICog6Kej5p6Q5pWw5o2uXHJcblx0ICovXHJcblx0cGFyc2VEYXRhKGRhdGEsc3RyKXtcclxuXHRcdHZhciBhID0gZGF0YS5zcGxpdCgnLCcpO1xyXG5cdFx0Zm9yKHZhciBpID0gMDtpIDwgYS5sZW5ndGg7aSsrKSB7XHJcblx0XHRcdGlmKGFbaV0uc3BsaXQoJ3dhaXQ6JykubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRcdGlmKGFbaV0uc3BsaXQoJ3dhaXQ6JylbMV0gPT0gc3RyKXtcclxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fWVsc2UgaWYoYVtpXS5zcGxpdCgnd2FpdEwnKS5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0dmFyIGIgPSBhW2ldLnNwbGl0KCd3YWl0TCcpWzFdLnNwbGl0KCc6Jyk7XHJcblx0XHRcdFx0dmFyIGxldmVsTWF4ID0gVXNlcmRlZmF1bHQuZ2V0SW50Rm9yS2V5KFwiU0RLR2FtZU1heExldmVsXCIsMCk7XHJcblx0XHRcdFx0aWYoYlsxXSA9PSBzdHIgJiYgbGV2ZWxNYXggPiBwYXJzZUludChiWzBdKSkge1xyXG5cdFx0XHRcdFx0IHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fWVsc2UgaWYoYVtpXS5zcGxpdCgnd2FpdFMnKS5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0dmFyIGIgPSBhW2ldLnNwbGl0KCd3YWl0UycpWzFdLnNwbGl0KCc6Jyk7XHJcblx0XHRcdFx0dmFyIHNjb3JlTWF4ID0gVXNlcmRlZmF1bHQuZ2V0SW50Rm9yS2V5KFwiU0RLR2FtZU1heFNjb3JlXCIsMCk7XHJcblx0XHRcdFx0aWYoYlsxXSA9PSBzdHIgJiYgc2NvcmVNYXggPiBwYXJzZUludChiWzBdKSkge1xyXG5cdFx0XHRcdFx0IHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fWVsc2UgaWYoYVtpXS5zcGxpdCgnd2FpdFQnKS5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0dmFyIGIgPSBhW2ldLnNwbGl0KCd3YWl0VCcpWzFdLnNwbGl0KCc6Jyk7XHJcblx0XHRcdFx0dmFyIHRpbWUgPSBVc2VyZGVmYXVsdC5nZXRJbnRGb3JLZXkobGlleW91LktleV9PbmNlUGxheWVyVGltZSwwKTtcclxuXHRcdFx0XHR2YXIgbm93VGltZSA9IHBhcnNlSW50KGdldFRpbWUoKS8xMDAwKTtcclxuXHRcdFx0XHRpZihiWzFdID09IHN0ciAmJiBub3dUaW1lIC0gdGltZSA+IHBhcnNlSW50KGJbMF0pKSB7XHJcblx0XHRcdFx0XHQgcmV0dXJuIHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ZWxzZSBpZihhW2ldLnNwbGl0KCd3YWl0RScpLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHR2YXIgYiA9IGFbaV0uc3BsaXQoJ3dhaXRFJylbMV0uc3BsaXQoJzonKTtcclxuXHRcdFx0XHR2YXIgbnVtID0gVXNlcmRlZmF1bHQuZ2V0SW50Rm9yS2V5KFwiY29tZUdhbWVOdW1cIiwwKTtcclxuXHRcdFx0XHRpZihiWzFdID09IHN0ciAmJiBudW0gPiBwYXJzZUludChiWzBdKSkge1xyXG5cdFx0XHRcdFx0IHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fWVsc2UgaWYoYVtpXS5zcGxpdCgnd2FpdEQnKS5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0dmFyIGIgPSBhW2ldLnNwbGl0KCd3YWl0RCcpWzFdLnNwbGl0KCc6Jyk7XHJcblx0XHRcdFx0dmFyIHRpbWUgPSBVc2VyZGVmYXVsdC5nZXRJbnRGb3JLZXkobGlleW91LktleV9PbmNlUGxheWVyVGltZURheSwwKTtcclxuXHRcdFx0XHR2YXIgbm93VGltZSA9IGdldFRpbWVEYXkoKTtcclxuXHRcdFx0XHRpZihiWzFdID09IHN0ciAmJiBub3dUaW1lIC0gdGltZSA+IHBhcnNlSW50KGJbMF0pKSB7XHJcblx0XHRcdFx0XHQgcmV0dXJuIHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSxcclxuXHRnYW1lTWFpbigpe1xyXG5cdFx0dGhpcy5hZGRCb3NzVGl0bGUoJ+S4u+mhteaJk+eCuScpO1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5zZXRHYW1lRXZlbnQoJ01haW5TY2VuZScpO1xyXG5cdH0sXHJcblx0Z2FtZUV2ZW50QmVnaW4oZXZlbnQgPSAnJyl7XHJcblx0XHR0aGlzLmFkZEJvc3NUaXRsZSgn5byA5aeL5omT54K5OicrZXZlbnQpO1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5zZXRHYW1lRXZlbnQoZXZlbnQsMCk7XHJcblx0fSxcclxuXHRnYW1lRXZlbnRGaW5pc2goZXZlbnQgPSAnJyl7XHJcblx0XHR0aGlzLmFkZEJvc3NUaXRsZSgn57uT5p2f5omT54K5OicrZXZlbnQpO1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5zZXRHYW1lRXZlbnQoZXZlbnQsMSk7XHJcblx0fSxcclxuXHRnYW1lRXZlbnQoZXZlbnQgPSAnJyl7XHJcblx0XHR0aGlzLmFkZEJvc3NUaXRsZSgn6K6h5qyh5omT54K5OicrZXZlbnQpO1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5zZXRHYW1lRXZlbnQoZXZlbnQpO1xyXG5cdH0sXHJcblx0Ly9vYmpcclxuXHQvLyB7XHJcblx0Ly8gXHR0aXRsZTogJ+aPkOekuicsXHJcblx0Ly8gXHRjb250ZW50OiAn6L+Z5piv5LiA5Liq5qih5oCB5by556qXJyxcclxuXHQvLyBcdHN1Y2Nlc3M6IGZ1bixcclxuXHQvLyAgZmFpbDpmdW5cclxuXHQvLyAgIH1cclxuXHRzaG93TW9kYWwob2JqID0ge30pe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5zaG93TW9kYWwob2JqKTtcclxuXHR9LFxyXG5cdHNob3dUb2FzdCh0aXRsZSA9ICcnKXtcclxuXHRcdGxpZXlvdV9pbnRlcmZhY2Uuc2hvd1RvYXN0KHRpdGxlKTtcclxuXHRcdC8vIGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHQvLyBcdHRoaXMuaW5zdGFuY2Uuc2hvd1RvYXN0KHRpdGxlKTtcclxuXHR9LFxyXG5cdGhpZGVUb2FzdCgpe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5oaWRlVG9hc3QoKTtcclxuXHR9LFxyXG5cdHNob3dMb2FkaW5nKHRpdGxlID0gJycpe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5zaG93TG9hZGluZyh0aXRsZSk7XHJcblx0fSxcclxuXHRoaWRlTG9hZGluZygpe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5oaWRlTG9hZGluZygpO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICog5ri45oiP5byA5aeLXHJcblx0ICovXHJcblx0Z2FtZUJlZ2luTGV2ZWwobGV2ZWwgPSAtMSxtb2RlID0gXCJsZXZlbFwiKXtcclxuXHRcdGlmKG1vZGUubGVuZ3RoPjE1KXtcclxuXHRcdFx0bGlleW91X1Nka01hbmFnZXIuc2hvd1RvYXN0KCfmqKHlvI/mnIDplb8xNeS4quWtl+espicpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5hZGRCb3NzVGl0bGUoJ+W8gOWnizonK21vZGUrJyAnK2xldmVsKTtcclxuXHRcdGxpZXlvdV9zaG93TG9nKFwi5qih5byPICAgbW9kZSA9PT09PSAgXCIgKyBtb2RlICtcIiAgIOa4uOaIj+W8gOWniyBsZXZlbCA9IFwiICsgbGV2ZWwpO1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5qbmlMZXZlbChsZXZlbCxtb2RlLDApO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICog5ri45oiP5aSx6LSlXHJcblx0ICovXHJcblx0Z2FtZUZhaWxMZXZlbChsZXZlbCA9IC0xLG1vZGUgPSBcImxldmVsXCIpe1xyXG5cdFx0aWYobW9kZS5sZW5ndGg+MTUpe1xyXG5cdFx0XHRsaWV5b3VfU2RrTWFuYWdlci5zaG93VG9hc3QoJ+aooeW8j+acgOmVvzE15Liq5a2X56ymJyk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmFkZEJvc3NUaXRsZSgn5aSx6LSlOicrbW9kZSsnICcrbGV2ZWwpO1xyXG5cdFx0bGlleW91X3Nob3dMb2coXCLmqKHlvI8gICBtb2RlID09PT09ICBcIiArIG1vZGUgK1wiICAg5ri45oiP5aSx6LSlIGxldmVsID0gXCIgKyBsZXZlbCk7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLmpuaUxldmVsKGxldmVsLG1vZGUsMik7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiDmuLjmiI/ov4flhbNcclxuXHQgKi9cclxuXHRnYW1lRmluaXNoTGV2ZWwobGV2ZWwgPSAtMSxtb2RlID0gXCJsZXZlbFwiKXtcclxuXHRcdGlmKG1vZGUubGVuZ3RoPjE1KXtcclxuXHRcdFx0bGlleW91X1Nka01hbmFnZXIuc2hvd1RvYXN0KCfmqKHlvI/mnIDplb8xNeS4quWtl+espicpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5hZGRCb3NzVGl0bGUoJ+i/h+WFszonK21vZGUrJyAnK2xldmVsKTtcclxuXHRcdGxpZXlvdV9zaG93TG9nKFwi5qih5byPICAgbW9kZSA9PT09PSAgXCIgKyBtb2RlICtcIiAgIOa4uOaIj+i/h+WFsyBsZXZlbCA9IFwiICsgbGV2ZWwpO1xyXG5cdFx0dmFyIGxldmVsTWF4ID0gVXNlcmRlZmF1bHQuZ2V0SW50Rm9yS2V5KFwiU0RLR2FtZU1heExldmVsXCIgKyBtb2RlLDApO1xyXG5cdFx0aWYobGV2ZWwgPiBsZXZlbE1heClcclxuXHRcdFx0VXNlcmRlZmF1bHQuc2V0RGF0YUZvcktleShcIlNES0dhbWVNYXhMZXZlbFwiICsgbW9kZSxsZXZlbCk7XHJcblx0XHRcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHRoaXMuaW5zdGFuY2Uuam5pTGV2ZWwobGV2ZWwsbW9kZSwxKTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIOaPkOS6pOWIhuaVsCDml6DlsL3mqKHlvI/pnIDopoFcclxuXHQgKi9cclxuXHRnYW1lU2NvcmUobW9kZSxzY29yZSl7XHJcblx0XHRsaWV5b3Vfc2hvd0xvZyhcIuaooeW8jyAgIG1vZGUgPT09PT0gIFwiICsgbW9kZSArXCIgICDliIbmlbAgc2NvcmUgPSBcIiArIHNjb3JlKTtcclxuXHRcdHZhciBzY29yZU1heCA9IFVzZXJkZWZhdWx0LmdldEludEZvcktleShcIlNES0dhbWVNYXhTY29yZVwiICsgbW9kZSwwKTtcclxuXHRcdGlmKHNjb3JlID4gc2NvcmVNYXgpXHJcblx0XHRcdFVzZXJkZWZhdWx0LnNldERhdGFGb3JLZXkoXCJTREtHYW1lTWF4U2NvcmVcIiArIG1vZGUsc2NvcmUpO1xyXG5cdH0sLy9cclxuXHQvKipcclxuXHQgKiDmt7vliqDmj5DnpLrmoYYgXHJcblx0ICovXHJcblx0YWRkVG9hc3QoX25vZGUsc3RyLF9jYWxsQmFjayl7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLmFkZFRvYXN0KF9ub2RlLHN0cixfY2FsbEJhY2spO1xyXG5cdH0sXHJcblx0c2hhcmVEaWFsb2coX25vZGUpe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5zaGFyZURpYWxvZyhfbm9kZSk7XHJcblx0XHRcclxuXHR9LFxyXG5cdGFkZEdldExvY2FrQ2FyZERpYWxvZyhfbm9kZSl7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLmFkZEdldExvY2FrQ2FyZERpYWxvZyhfbm9kZSk7XHJcblx0XHRcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIOiOt+WPluWcqOe6v+WPguaVsFxyXG5cdCAqL1xyXG5cdGdldFBhcmFtQnlPbmxpbmUoa2V5LGRlZmF1bHRWKXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlLmdldFBhcmFtQnlPbmxpbmUoa2V5LGRlZmF1bHRWKTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAq5Yqg6L29572R57uc5Zu+54mHIFxyXG5cdCAqL1xyXG5cdFxyXG5cdGdldE9ubGluZVNwcml0ZUZyYW1lKHVybCxmdW4pe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5nZXRPbmxpbmVTcHJpdGVGcmFtZSh1cmwsZnVuKTtcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiDnjJzkvaDllpzmrKJ7bm9kZTpfbm9kZSx4OngseTp5LGFsaWduOjB9Ly8wIOWxheS4rSAtMSDkuIsgMSDkuIpcclxuXHQgKi9cclxuXHRzaG93R3Vlc3NZb3VMaWNrT25lKG9iail7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLnNob3dHdWVzc1lvdUxpY2tPbmUob2JqKTtcclxuXHR9LFxyXG5cdHNob3dHdWVzc1lvdUxpY2tUb3cob2JqKXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHRoaXMuaW5zdGFuY2Uuc2hvd0d1ZXNzWW91TGlja1RvdyhvYmopO1xyXG5cdH0sXHJcblx0XHJcblx0cmV0dXJuSG9tZUp1bXBHYW1lKCl7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLnJldHVybkhvbWVKdW1wR2FtZSgpO1xyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIOWIhuS6q+WIsOe+pFxyXG5cdCAqL1xyXG5cclxuXHQgLy8gcnVldHVybiAxICDooajnpLrmiJDlip8gLCAtMSDliIbkuqvmiJDlip/kvYbmmK/mnInpmZDliLYgIDAgIOWIhuS6q+Wksei0pVxyXG5cdHNoYXJlVG9Dcm93ZDogZnVuY3Rpb24gKGZ1bmMsIHRhZyA9IFwiXCIsIHRpbWUgPSAxLCBjb3VudCA9IDEgKSB7XHJcblx0XHRpZiAodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5zaGFyZSh7XHJcblx0XHRcdFx0bmFtZTogR2FtZU5hbWUsIHNvdXJjZTogNSwgc3VjY2VzczogZnVuY3Rpb24gKHR5cGUsIGlkKSB7XHJcblx0XHRcdFx0XHRpZiAodHlwZSA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdGlmKGlkKXtcclxuXHRcdFx0XHRcdFx0XHR2YXIga2V5ID0gXCJTaGFyZVRvQ3Jvd2RcIiArIGlkICsgY291bnQgKyBcIl9cIiArIHRpbWUgKyB0YWc7XHJcblx0XHRcdFx0XHRcdFx0dmFyIGRhdGEgPSBVc2VyZGVmYXVsdC5nZXRTdHJpbmdGb3JLZXkoa2V5LCBcIjAsMFwiKS5zcGxpdChcIixcIik7XHJcblx0XHRcdFx0XHRcdFx0dmFyIG51bSA9IHBhcnNlSW50KGRhdGFbMF0pO1xyXG5cdFx0XHRcdFx0XHRcdHZhciBkYXkgPSBwYXJzZUludChkYXRhWzFdKTtcclxuXHRcdFx0XHRcdFx0XHR2YXIgbmV3ZGF5ID0gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDM2MDAwMDApO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChuZXdkYXkgPj0gZGF5ICsgdGltZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0bnVtID0gMTtcclxuXHRcdFx0XHRcdFx0XHRcdGRheSA9IG5ld2RheTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0bnVtKys7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFVzZXJkZWZhdWx0LnNldERhdGFGb3JLZXkoa2V5LCBudW0gKyBcIixcIiArIGRheSk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKG51bSA8PSBjb3VudCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZnVuYygxKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmdW5jKC0xKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdGZ1bmMoMSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGZ1bmMoMCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdC8vIGRhdGEuc3BsaXQoXCIsXCIpO1xyXG5cdH0sXHJcblxyXG5cclxuLyoqYW5kcm9pZCBpb3MgKi9cclxuXHRjYWxsQW5kcm9pZChhY3Rpb24pe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5jYWxsQW5kcm9pZChhY3Rpb24pO1xyXG5cdH0sXHJcblx0Y2FsbEFuZHJvaWRfMihhY3Rpb24sZnVuUyl7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLmNhbGxBbmRyb2lkXzIoYWN0aW9uLGZ1blMpO1xyXG5cdH0sXHJcblx0Y2FsbFBheShhY3Rpb24sZnVuUyl7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLmNhbGxQYXkoYWN0aW9uLGZ1blMpO1xyXG5cdH0sXHJcblx0aXNPcGVuKGtleSl7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZS5pc09wZW4oa2V5KTtcclxuXHR9LFxyXG5cdGdldElzTmF0aXZlKCl7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRTeXNQbGF0Zm9ybSgpID09IDE7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiDlrZDmuLjmiI/lm57kuLvpobUg5a6J5Y2TXHJcblx0ICovXHJcblx0YmFja0hvbWUoKXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlLmJhY2tIb21lKCk7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiDot7PovazlrZDmuLjmiI8g5a6J5Y2TXHJcblx0ICovXHJcblx0LyoqXHJcblx0ICog5re75Yqg5a2Q5ri45oiP6L+U5Zue5oyJ6ZKuIG9iaiA9IHtcclxuXHQgKiBub2RlOm5vZGUsXHJcblx0ICogeDp4LFxyXG5cdCAqIHk6eSxcclxuXHQgKiBpbWFnZTpzcHJpdGVGcmFtZVxyXG5cdCAqIH1cclxuXHQgKi9cclxuXHRhZGRTbWFsbEdhbWVSZXR1cm5CdG4ob2JqID0ge30pe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5hZGRTbWFsbEdhbWVSZXR1cm5CdG4ob2JqKTtcclxuXHR9LFxyXG5cdGdvdG9TbWFsbEdhbWUoZ2FtZU5hbWUpe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2UuZ290b1NtYWxsR2FtZShnYW1lTmFtZSk7XHJcblx0fSxcclxuXHRnYW1lQWN0aW9uKGdhbWVOYW1lKXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlLmdhbWVBY3Rpb24oZ2FtZU5hbWUpO1xyXG5cdH0sXHJcblx0aW5pdFBoeXNpY3ModXJsKXtcclxuXHRcdHZhciBkYXRhID0gdXJsO1xyXG4gICAgICAgIC8vY2MubG9hZGVyLmxvYWRSZXModXJsLCBmdW5jdGlvbihlcnIsIGRhdGEpe1xyXG4gICAgICAgICAgICBjYy5nYW1lLmNvbmZpZy5ncm91cExpc3QgPSBkYXRhW1wiZ3JvdXAtbGlzdFwiXTtcclxuICAgICAgICAgICAgY2MuZ2FtZS5jb25maWcuY29sbGlzaW9uTWF0cml4ID0gZGF0YVtcImNvbGxpc2lvbi1tYXRyaXhcIl07XHJcblxyXG4gICAgICAgICAgICBjYy5nYW1lLl9pbml0Q29uZmlnKGNjLmdhbWUuY29uZmlnKTtcclxuICAgICAgICAvL30pO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogb2JqICA9IHt4OjAseTowLHc6MTYsaDo5fVxyXG5cdCAqL1xyXG5cdHNob3dQcmFpc2UoKXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHRoaXMuaW5zdGFuY2Uuc2hvd1ByYWlzZSgpO1xyXG5cdH0sXHJcblx0XHJcbiAgXHJcblx0c2hvd05hdGl2ZUJhbm5lcih0b3Ape1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5zaG93TmF0aXZlQmFubmVyKHRvcCk7XHJcblx0fSxcclxuXHRoaWRlTmF0aXZlQmFubmVyKCl7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLmhpZGVOYXRpdmVCYW5uZXIoKTtcclxuXHR9LFxyXG5cdC8v5b6u5L+hXHJcblx0LyoqXHJcblx0ICoge2NhbGxCYWNrOmZ1bn1cclxuXHQgKi9cclxuXHRzaG93UmVkUGFjayhvYmogPSB7fSl7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLnNob3dSZWRQYWNrKG9iaik7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiAgb2JqIHtub2RlOm5vZGUseDowLHk6MH1cclxuXHQgKi9cclxuICAgIHNob3dSZWRJY29uKG9iaiA9IHt9KXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHRoaXMuaW5zdGFuY2Uuc2hvd1JlZEljb24ob2JqKTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqICBvYmoge25vZGU6bm9kZSx4OjAseTowfVxyXG5cdCAqL1xyXG5cdHNob3dSZWNvbW1lbmRJY29uKG9iaiA9IHt9KXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHRoaXMuaW5zdGFuY2Uuc2hvd1JlY29tbWVuZEljb24ob2JqKTtcclxuXHR9LFxyXG5cdFxyXG5cdHNob3dHYW1lUmVjb21tZW5kKGNhbGxCYWNrID0gbnVsbCl7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLnNob3dHYW1lUmVjb21tZW5kKGNhbGxCYWNrKTtcclxuXHR9LFxyXG5cdHNob3dHYW1lUmVjb21tZW5kRGlhbG9nKCl7fSxcclxuXHQvKipcclxuXHQgKiAwIOayoeacieWIhuS6qyDmsqHmnInop4bpopEgMSDliIbkuqsgMiDop4bpopFcclxuXHQgKi9cclxuXHRnZXRTaGFyZU9yVmllZG8oKXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlLmdldFNoYXJlT3JWaWVkbygpO1xyXG5cdFx0cmV0dXJuIDA7XHJcblx0fSxcclxuXHRnZXRKdW1wQnRuSGF2ZU1vdmUoKXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlLmdldEp1bXBCdG5IYXZlTW92ZSgpO1xyXG5cdFx0cmV0dXJuIDA7XHJcblx0fSxcclxuXHRzaG93R3Vlc3NZb3VMaWtlXzMob2JqKXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHRoaXMuaW5zdGFuY2Uuc2hvd0d1ZXNzWW91TGlrZV8zKG9iaik7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBub2RlOui3s+i/h+aMiemSriB4Om1vdmVFbmR4ICB5Om1vdmVFbmR5XHJcblx0ICoge25vZGU6bm9kZSx4OjAseTowfSBcclxuXHQgKi9cclxuXHRqdW1wUmVmcmVzaEJhbm5lcihvYmogPSB7fSl7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLmp1bXBSZWZyZXNoQmFubmVyKG9iaik7XHJcblx0fSxcclxuXHJcblx0c2V0V29ybGRSYW5rRGF0YShzY29yZSA9IDAsa2V5ID0gUmFua2luZ0tleSl7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLnNldFdvcmxkUmFua0RhdGEoa2V5LHNjb3JlKTtcclxuXHR9LFxyXG5cclxuXHRnZXRCYXNlRGF0YSgpe1xyXG4gICAgICAgIGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHRoaXMuaW5zdGFuY2UuZ2V0QmFzZURhdGEoKTtcclxuXHRcdHJldHVybiB7fTtcclxuICAgIH0sXHJcbiAgICByZWxvYWQoKXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHRoaXMuaW5zdGFuY2UucmVsb2FkKCk7XHJcblx0fSxcclxuXHRzaG93U2hhcmVWaWRlb0RpYWxvZyhjYWxsQmFjayA9IG51bGwpe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5zaG93U2hhcmVWaWRlb0RpYWxvZyhjYWxsQmFjayk7XHJcblx0fSxcclxuXHRhZGRMdVBpbmdCdG4ob2JqID0ge30pe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5hZGRMdVBpbmdCdG4ob2JqKTtcclxuXHR9LFxyXG5cdHNoYXJlVmQoY2FsbEJhY2sgPSBudWxsKXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHRoaXMuaW5zdGFuY2Uuc2hhcmVWZChjYWxsQmFjayk7XHJcblx0fSxcclxuXHRiZWdpbkx1UGluZyh0aW1lID0gMzAwLGNhbGxCYWNrID0gbnVsbCl7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLmJlZ2luTHVQaW5nKHRpbWUsY2FsbEJhY2spO1xyXG4gICAgfSxcclxuICAgIHBhdXNlTHVQaW5nKCl7XHJcbiAgICAgICAgaWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5wYXVzZUx1UGluZygpO1xyXG4gICAgfSxcclxuICAgIHJlc3VtZUx1UGluZygpe1xyXG4gICAgICAgIGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHRoaXMuaW5zdGFuY2UucmVzdW1lTHVQaW5nKCk7XHJcbiAgICB9LFxyXG4gICAgc3RvcEx1UGluZyhpc1NoYXJlID0gdHJ1ZSl7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLnN0b3BMdVBpbmcoaXNTaGFyZSk7XHJcblx0fSxcclxuXHRcclxuXHQvL3hpYW9taVxyXG5cdC8qKlxyXG5cdCAqIOahjOmdouaYr+WQpuW3sue7j+acieW/q+aNt+aWueW8j1xyXG5cdCAqL1xyXG5cdGhhc0luc3RhbGxlZChjYWxsQmFjayA9IG51bGwpe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5oYXNJbnN0YWxsZWQoY2FsbEJhY2spO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICog5o+Q56S65Yib5bu65b+r5o235pa55byPXHJcblx0ICovXHJcbiAgICBpbnN0YWxsKG9iaiA9IHt9KXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHRoaXMuaW5zdGFuY2UuaW5zdGFsbChvYmopO1xyXG5cdH0sXHJcblxyXG5cdC8vXHJcblx0LyoqXHJcblx0ICogb2JqIHtjYWxsQmFjazpmdW59IOS8mumakOiXj2Jhbm5lclxyXG5cdCAqL1xyXG5cdHNob3dSZWNvbW1lbmRCZWdpbihvYmogPSB7fSl7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKXtcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5zaG93UmVjb21tZW5kQmVnaW4ob2JqKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRpZihvYmouY2FsbEJhY2spe1xyXG5cdFx0XHRcdG9iai5jYWxsQmFjaygpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBvYmoge2NhbGxCYWNrOmZ1bn0g5Lya6ZqQ6JePYmFubmVyXHJcblx0ICovXHJcbiAgICBzaG93UmVjb21tZW5kRmluaXNoKG9iaiA9IHt9KXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2Upe1xyXG5cdFx0XHR0aGlzLmluc3RhbmNlLnNob3dSZWNvbW1lbmRGaW5pc2gob2JqKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRpZihvYmouY2FsbEJhY2spe1xyXG5cdFx0XHRcdG9iai5jYWxsQmFjaygpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBvYmoge2NhbGxCYWNrOmZ1bn0g5Lya6ZqQ6JePYmFubmVyXHJcblx0ICovXHJcblx0c2hvd0FyYXJkR29sZEdyaWQob2JqID0ge30pe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSl7XHJcblx0XHRcdHRoaXMuaW5zdGFuY2Uuc2hvd0FyYXJkR29sZEdyaWQob2JqKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRpZihvYmouY2FsbEJhY2spe1xyXG5cdFx0XHRcdG9iai5jYWxsQmFjaygpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiBvYmoge2NhbGxCYWNrOmZ1bn0g5Lya6ZqQ6JePYmFubmVyXHJcblx0ICovXHJcbiAgICBzaG93QXJhcmRHb2xkU3RyaXAob2JqID0ge30pe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSl7XHJcblx0XHRcdHRoaXMuaW5zdGFuY2Uuc2hvd0FyYXJkR29sZFN0cmlwKG9iaik7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0aWYob2JqLmNhbGxCYWNrKXtcclxuXHRcdFx0XHRvYmouY2FsbEJhY2soKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0LyoqXHJcblx0ICogY2FsbEJhY2sgdXJsIG5vZGUgeCB5XHJcblx0ICovXHJcblx0YWRkSW5zdGFsbFNob3J0Y3V0KG9iaiA9IHt9KXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2Upe1xyXG5cdFx0XHR0aGlzLmluc3RhbmNlLmFkZEluc3RhbGxTaG9ydGN1dChvYmopO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0c2hvd0luc3RhbGxTaG9ydGN1dERpYWxvZygpe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSl7XHJcblx0XHRcdHRoaXMuaW5zdGFuY2Uuc2hvd0luc3RhbGxTaG9ydGN1dERpYWxvZygpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0c2hvd1JlY29tbWVuZEF3YXJkSWNvbihvYmogPSB7fSl7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKXtcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5zaG93UmVjb21tZW5kQXdhcmRJY29uKG9iaik7XHJcblx0XHR9XHJcblx0fSxcclxuXHRzZXREYXRhRm9ySHR0cCh1cmwsZnVuKXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHRoaXMuaW5zdGFuY2Uuc2V0RGF0YUZvckh0dHAodXJsLGZ1bik7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiDmmL7npLrmm7TlpJrmuLjmiI8ge25vZGU6bm9kZSx4OjAseTowLHJ1blR5cGU6MSxzaWRlOjEzMH1cclxuXHQgKi9cclxuXHRzaG93TW9yZUdhbWVCeUljb246IGZ1bmN0aW9uKG9iaiA9IHt9KXtcclxuXHRcdHRoaXMuYWRkQm9zc1RpdGxlKCfkupLmjqggaWNvbicpO1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSl7XHJcblx0XHRcdHRoaXMuaW5zdGFuY2Uuc2hvd01vcmVHYW1lQnlJY29uKG9iaik7XHJcblx0XHR9XHJcblx0fSxcclxuXHRzaG93TW9yZUdhbWVJY29uOiBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSl7XHJcblx0XHRcdHRoaXMuaW5zdGFuY2Uuc2hvd01vcmVHYW1lSWNvbigpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0aGlkZU1vcmVHYW1lSWNvbjogZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2Upe1xyXG5cdFx0XHR0aGlzLmluc3RhbmNlLmhpZGVNb3JlR2FtZUljb24oKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIOaYvuekuuabtOWkmua4uOaIjyB7bm9kZTpub2RlLHg6MCx5OjB9IDE3MFxyXG5cdCAqL1xyXG5cdHNob3dNb3JlR2FtZUJ5QmFubmVyOiBmdW5jdGlvbihvYmogPSB7fSl7XHJcblx0XHR0aGlzLmFkZEJvc3NUaXRsZSgn5LqS5o6oIGJhbm5lcicpO1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSl7XHJcblx0XHRcdHRoaXMuaW5zdGFuY2Uuc2hvd01vcmVHYW1lQnlCYW5uZXIob2JqKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIOaYvuekuuabtOWkmua4uOaIjyB7bm9kZTpub2RlLHg6MCx5OjB9XHJcblx0ICovXHJcblx0c2hvd01vcmVHYW1lOmZ1bmN0aW9uKG9iaiA9IHt9KXtcclxuXHRcdHRoaXMuYWRkQm9zc1RpdGxlKCfkupLmjqgg5pu05aSa5ri45oiPJyk7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLnNob3dNb3JlR2FtZShvYmopO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICog5pi+56S65pu05aSa5ri45oiPIHt5OjAsc2lkZVR5cGVfcmlnaHQ6ZmFsc2UsaXNQZXJzaXN0OmZhbHNlfVxyXG5cdCAqL1xyXG5cdHNob3dNb3JlR2FtZVNpZGU6ZnVuY3Rpb24ob2JqID0ge30pe1xyXG5cdFx0dGhpcy5hZGRCb3NzVGl0bGUoJ+S6kuaOqCDkvqfovrnmoI8nKTtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHRoaXMuaW5zdGFuY2Uuc2hvd01vcmVHYW1lU2lkZShvYmopO1xyXG5cdH0sXHJcblx0LyoqXHJcblx0ICog5pi+56S65pu05aSa5ri45oiPIHtub2RlOm5vZGUseDowLHk6MH0gaCAxNjZcclxuXHQgKi9cclxuXHRzaG93TW9yZUdhbWVNaWRkbGVfb25lOmZ1bmN0aW9uKG9iaiA9IHt9KXtcclxuXHRcdGlmKCFvYmoubm9kZSl7XHJcblx0XHRcdGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dUb2FzdCgnc2hvd01vcmVHYW1lTWlkZGxlX29uZSDlj4LmlbDkuI3lr7knKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0aWYob2JqLnNjYWxlID09IHVuZGVmaW5lZCl7XHJcblx0XHRcdG9iai5zY2FsZSA9IHRoaXMuX1NjZW5lU2NhbGU7XHJcblx0XHR9XHJcblx0XHR0aGlzLmFkZEJvc3NUaXRsZSgn5LqS5o6oIOS4gOihjCDpq5jluqYxODMnKTtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlLnNob3dNb3JlR2FtZU1pZGRsZV9vbmUob2JqKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cdC8vaCAzMDZcclxuXHRzaG93TW9yZUdhbWVNaWRkbGVfdHdvOmZ1bmN0aW9uKG9iaiA9IHt9KXtcclxuXHRcdGlmKCFvYmoubm9kZSB8fCAhb2JqLmJnUGF0aCl7XHJcblx0XHRcdGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dUb2FzdCgnc2hvd01vcmVHYW1lTWlkZGxlX3R3byDlj4LmlbDkuI3lr7knKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0aWYob2JqLnNjYWxlID09IHVuZGVmaW5lZCl7XHJcblx0XHRcdG9iai5zY2FsZSA9IHRoaXMuX1NjZW5lU2NhbGU7XHJcblx0XHR9XHJcblx0XHR0aGlzLmFkZEJvc3NUaXRsZSgn5LqS5o6oIOS4pOihjCDpq5jluqY1MDAnKTtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlLnNob3dNb3JlR2FtZU1pZGRsZV90d28ob2JqKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cdC8vaCA0NDZcclxuXHRzaG93TW9yZUdhbWVNaWRkbGVfdGhyZWU6ZnVuY3Rpb24ob2JqID0ge30pe1xyXG5cdFx0aWYoIW9iai5ub2RlKXtcclxuXHRcdFx0bGlleW91X1Nka01hbmFnZXIuc2hvd1RvYXN0KCdzaG93TW9yZUdhbWVNaWRkbGVfdGhyZWUg5Y+C5pWw5LiN5a+5Jyk7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGlmKG9iai5zY2FsZSA9PSB1bmRlZmluZWQpe1xyXG5cdFx0XHRvYmouc2NhbGUgPSB0aGlzLl9TY2VuZVNjYWxlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5hZGRCb3NzVGl0bGUoJ+S6kuaOqCDkuInooYwg6auY5bqmNTAwJyk7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZS5zaG93TW9yZUdhbWVNaWRkbGVfdGhyZWUob2JqKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9LFxyXG5cdHNldGFkdHJhY2soYWRpZCxsb2NhdGlvbil7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLnNldGFkdHJhY2soYWRpZCxsb2NhdGlvbik7XHJcblx0fSxcclxuXHRzZXRPcGVyVHJhY2sob2JqKXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHRoaXMuaW5zdGFuY2Uuc2V0T3BlclRyYWNrKG9iaik7XHJcblx0fSxcclxuXHQvKipcclxuXHQgKiDmmL7npLrmm7TlpJrmuLjmiI8ge25vZGU6bm9kZSx4OjAseTowfVxyXG5cdCAqL1xyXG5cdHNob3dBcHBCb3gob2JqID0ge30pe1xyXG5cdFx0aWYoIW9iai5ub2RlKXtcclxuXHRcdFx0bGlleW91X1Nka01hbmFnZXIuc2hvd1RvYXN0KCdzaG93QXBwQm94IOWPguaVsOS4jeWvuScpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLnNob3dBcHBCb3gob2JqKTtcclxuXHR9LFxyXG5cdC8qKlxyXG5cdCAqIFxyXG5cdCAqIEBwYXJhbSB7a2V5OlwiXCIsZGVmYXVsdFZhbHVlfSBvYmogXHJcblx0ICovXHJcblx0Z2V0UGFyYW1CeUtleShvYmogPSB7fSl7XHJcblx0XHRpZighb2JqLmtleSl7XHJcblx0XHRcdGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dUb2FzdCgnZ2V0UGFyYW1CeUtleSDlj4LmlbDkuI3lr7knKTtcclxuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcclxuXHRcdH1cclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlLmdldFBhcmFtQnlLZXkob2JqKTtcclxuXHRcdHJldHVybiBvYmouZGVmYXVsdFZhbHVlP29iai5kZWZhdWx0VmFsdWU6dW5kZWZpbmVkO1xyXG5cdH0sXHJcblx0Ly8gbm9kZS8xXHJcblx0c2hvd05hdGl2ZUFkX3NtYWxsKG9iaiA9IHt9KXtcclxuXHRcdGlmKCFvYmoubm9kZSB8fCAhb2JqLmJnUGF0aCl7XHJcblx0XHRcdGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dUb2FzdCgnc2hvd05hdGl2ZUFkX3NtYWxsIOWPguaVsOS4jeWvuScpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRpZihvYmouc2NhbGUgPT0gdW5kZWZpbmVkKXtcclxuXHRcdFx0b2JqLnNjYWxlID0gdGhpcy5fU2NlbmVTY2FsZTtcclxuXHRcdH1cclxuXHRcdHRoaXMuYWRkQm9zc1RpdGxlKCfmmL7npLrljp/nlJ/lub/lkYrlsI8gNjAwKjE1MCcpO1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0cmV0dXJuIHRoaXMuaW5zdGFuY2Uuc2hvd05hdGl2ZUFkX3NtYWxsKG9iaik7XHJcblx0fSxcclxuXHQvLyBub2RlLzFcclxuXHRzaG93TmF0aXZlQWRfYmlnKG9iaiA9IHt9KXtcclxuXHRcdGlmKCFvYmoubm9kZSB8fCAhb2JqLmJnUGF0aCl7XHJcblx0XHRcdGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dUb2FzdCgnc2hvd05hdGl2ZUFkX2JpZyDlj4LmlbDkuI3lr7knKTtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0aWYob2JqLnNjYWxlID09IHVuZGVmaW5lZCl7XHJcblx0XHRcdG9iai5zY2FsZSA9IHRoaXMuX1NjZW5lU2NhbGU7XHJcblx0XHR9XHJcblx0XHR0aGlzLmFkZEJvc3NUaXRsZSgn5pi+56S65Y6f55Sf5bm/5ZGK5aSnIDYwMCo0MTAnKTtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlLnNob3dOYXRpdmVBZF9iaWcob2JqKTtcclxuXHR9LFxyXG5cdC8vIGNhbGxCYWNrLzAgc3ByaXRlRnJhbWUvMFxyXG5cdHNob3dOYXRpdmVBZF9sb2FkKG9iaiA9IHt9KXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlLnNob3dOYXRpdmVBZF9sb2FkKG9iaik7XHJcblx0fSxcclxuXHRoaWRlTW9yZUdhbWVTaWRlKCl7XHJcblx0XHR0aGlzLmFkZEJvc3NUaXRsZSgn6ZqQ6JeP5L6n6L655qCPJyk7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5pbnN0YW5jZS5oaWRlTW9yZUdhbWVTaWRlKCk7XHJcblx0fSxcclxuXHRnZXRTY3JlZW5zaG90KG9iaiA9IHt9KXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHJldHVybiB0aGlzLmluc3RhbmNlLmdldFNjcmVlbnNob3QoKTtcclxuXHR9LFxyXG5cdHNhdmVJbWFnZVRvUGhvdG9zQWxidW0ob2JqID0ge30pe1xyXG5cdFx0aWYoIW9iai5ub2RlKXtcclxuXHRcdFx0bGlleW91X1Nka01hbmFnZXIuc2hvd1RvYXN0KCdzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtIOWPguaVsOS4jeWvuScpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLnNhdmVJbWFnZVRvUGhvdG9zQWxidW0ob2JqKTtcclxuXHR9LFxyXG5cdGFkZExpc3RlbmVyQmFja0tleShvYmogPSB7fSl7XHJcblx0XHRpZighb2JqLm5vZGUpe1xyXG5cdFx0XHRsaWV5b3VfU2RrTWFuYWdlci5zaG93VG9hc3QoJ2FkZExpc3RlbmVyQmFja0tleSDlj4LmlbDkuI3lr7knKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0XHJcbiAgICAgICAgY2MuZXZlbnRNYW5hZ2VyLmFkZExpc3RlbmVyKHtcclxuICAgICAgICAgICAgZXZlbnQ6IGNjLkV2ZW50TGlzdGVuZXIuS0VZQk9BUkQsXHJcbiAgICAgICAgICAgIG9uS2V5UHJlc3NlZDogZnVuY3Rpb24gKGtleUNvZGUsIGV2ZW50KSB7XHJcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0c3dpdGNoIChrZXlDb2RlKSB7XHJcblx0XHRcdFx0XHRjYXNlIGNjLm1hY3JvLktFWS5iYWNrOlxyXG5cdFx0XHRcdFx0Y2FzZSAyNzpcclxuXHRcdFx0XHRcdFx0aWYob2JqLmNhbGxCYWNrKXtcclxuXHRcdFx0XHRcdFx0XHRvYmouY2FsbEJhY2soKTtcclxuXHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0bGlleW91X1Nka01hbmFnZXIuY2FsbEFuZHJvaWQoQUNUSU9OX0VYSVRfQkFDSyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgb2JqLm5vZGUpO1xyXG5cdH0sXHJcblx0c2hvd0lTQk4ob2JqID0ge30pe1xyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5zaG93SVNCTihvYmopO1xyXG5cdH0sXHJcblx0aGlkZUlTQk4oKXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHRoaXMuaW5zdGFuY2UuaGlkZUlTQk4oKTtcclxuXHR9LFxyXG5cdHNob3dVc2VyQWdyZWVtZW50KG9iaiA9IHt9KXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHRoaXMuaW5zdGFuY2Uuc2hvd1VzZXJBZ3JlZW1lbnQob2JqKTtcclxuXHR9LFxyXG5cdHNob3dNb3JlR2FtZUdyaWQoKXtcclxuXHRcdGlmKHRoaXMuaW5zdGFuY2UpXHJcblx0XHRcdHRoaXMuaW5zdGFuY2Uuc2hvd01vcmVHYW1lR3JpZCgpO1xyXG5cdH0sXHJcblx0YWRkUmVkUGFja0ljb24ob2JqKXtcclxuXHRcdGlmKCFvYmoubm9kZSl7XHJcblx0XHRcdGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dUb2FzdCgnYWRkUmVkUGFja0ljb24g5Y+C5pWw5LiN5a+5Jyk7XHJcblx0XHR9XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLmFkZFJlZFBhY2tJY29uKG9iaik7XHJcblx0fSxcclxuXHRhZGRSZWRQYWNrRGlhbG9nKCl7XHJcblx0XHRpZih0aGlzLmluc3RhbmNlKVxyXG5cdFx0XHR0aGlzLmluc3RhbmNlLmFkZFJlZFBhY2tEaWFsb2coKTtcclxuXHR9LFxyXG5cdGFkZFRha2VPdXRJY29uKG9iail7XHJcblx0XHRpZighb2JqLm5vZGUpe1xyXG5cdFx0XHRsaWV5b3VfU2RrTWFuYWdlci5zaG93VG9hc3QoJ2FkZFJlZFBhY2tJY29uIOWPguaVsOS4jeWvuScpO1xyXG5cdFx0fVxyXG5cdFx0aWYodGhpcy5pbnN0YW5jZSlcclxuXHRcdFx0dGhpcy5pbnN0YW5jZS5hZGRUYWtlT3V0SWNvbihvYmopO1xyXG5cdH0sXHJcbn1cclxuXHJcbndpbmRvdy5saWV5b3Vfc2hvd0xvZyA9IGZ1bmN0aW9uKHJlcyl7XHJcblx0aWYobGlleW91X3Nob3dEZWJ1Zyl7XHJcblx0XHRjb25zb2xlLmxvZyhcImxpZXlvdWxvZy0tLVwiLHJlcyk7XHJcblx0fVxyXG59XHJcbndpbmRvdy5saWV5b3VfbG9hZCA9IGZ1bmN0aW9uKHVybCxjYWxsQmFjayl7XHJcblx0aWYodXJsID09ICcnKXtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0dmFyIHVybExvY2FsID0gJ1NESy9saWV5b3Vfc2RrUmVzLycrdXJsO1xyXG5cdFxyXG4gICAgY2MubG9hZGVyLmxvYWRSZXModXJsTG9jYWwsKGVycixyZXMpPT57XHJcblx0XHRpZihlcnIpe1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0cnkge1xyXG5cdFx0XHRjYWxsQmFjayhlcnIscmVzKTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGxpZXlvdV9zaG93TG9nKCdsb2FkUmVzIGVycjonK2Vycm9yKTtcclxuXHRcdH1cclxuICAgIH0pO1xyXG59XHJcblxyXG53aW5kb3cubGlleW91X2xvYWRPbmxpbmUgPSBmdW5jdGlvbih1cmwsY2FsbEJhY2spe1xyXG5cdGlmKHVybCA9PSBcIlwiKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdHZhciBsb2FkRmlsZSA9IHtcclxuXHRcdHVybDogdXJsLFxyXG5cdFx0dHlwZTogXCJpbWFnZVwiXHJcblx0fTtcclxuXHRjYy5sb2FkZXIubG9hZChsb2FkRmlsZSwgZnVuY3Rpb24gKGVyciwgcmVzKSB7XHJcblx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRyeSB7XHJcblx0XHRcdGNhbGxCYWNrKGVycixyZXMpO1xyXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcclxuXHRcdFx0bGlleW91X3Nob3dMb2coJ2xvYWRPbmxpbmUgIGVycjonK2Vycm9yKTtcclxuXHRcdH1cclxuXHR9KTtcclxufSJdfQ==