
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/scripts/BaseManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b937bE7H7RGmJHDBTjfaupp', 'BaseManager');
// resources/SDK/scripts/BaseManager.js

"use strict";

window.lieyou_showDebug = false;
window.lieyou_moreGame_type = 0;
window.lieyou_showMoreGameNum = 7;
var BaseManager = cc.Class({
  properties: {
    qGMoreGameData: [],
    qGMore_isRun: true,
    qGMore_refreshTime: 3,
    qGMore_mainSwitch: 1,
    //0
    qGMore_floatPlay: 1,
    qGMore_bannerPlay: 1,
    qGMore_morePlay: 1,
    qGMore_dialogPlay: 1,
    qGMore_dialogPlay2: 1,
    qGMore_dialogPlay3: 1,
    qGMore_iconPlay: 1,
    qGMore_biz_floatPlay: [],
    qGMore_biz_bannerPlay: [],
    qGMore_biz_morePlay: [],
    qGMore_biz_dialogPlay: [],
    qGMore_biz_dialogPlay2: [],
    qGMore_biz_dialogPlay3: [],
    qGMore_dialogPlayRunType: [],
    qGMore_biz_iconPlay: [],
    dataVersion: 0,
    platformVersionCode: 0,
    androidVersion: '',
    model: '',
    networkType: 'none',
    region: '',
    isMoreInfo: true,
    moreGameIconArr: [],
    base_IsShenHe: false
  },
  init: function init(obj) {
    var _this = this;

    this.newPlayer = lieyou_Userdefault.getBoolForKey("lieyou_newPlayer", true);
    lieyou_Userdefault.setBoolForKey("lieyou_newPlayer", false); // this.qGMoreGameData = [{"gameName":"公主甜心校园美发屋","id":2008,"jumpData":{"appId":"com.lew.game.hairsalon.kyx.nearme.gamecenter","path":""},"uri":"http://h5.igame58.com/r_icon/hellostickman.png"}]

    this._canShowMoreGameGrid = true;
    this._moreGameOrNativeType = 0;
    this._moreGameShowNative = false;
    this._nativeLoadDialogTime = 3;
    this._initObj = obj;
    this._showSpotMaxCount = 0;
    this._showSpotMaxCountRefreshTime = 1;
    this._showSpotCount = Userdefault.getIntForKey("lieyou_showSpotCount", 0);
    this._showSpotTime = Userdefault.getIntForKey("lieyou_showSpotTime", 0);
    var dayTime = getTimeDay();

    if (dayTime != Userdefault.getIntForKey('lieyou_initDay', 0)) {
      this._showSpotCount = 0;
      this._showSpotTime = 0;
      Userdefault.setDataForKey('lieyou_showSpotCount', 0);
      Userdefault.setDataForKey('lieyou_showSpotTime', 0);
      Userdefault.setDataForKey('lieyou_initDay', dayTime);
    }

    this.eventFlag = Userdefault.getIntForKey('lieyou_eventFlag', -1);
    this.GameEventBackstageTime = [];
    this.haveTrack = Userdefault.getIntForKey('lieyou_haveTrack', 0);
    this.loginBaseUrl = 'https://app.igame58.com/lieyou/client';

    if (window.lieyou_loginUrl && window.lieyou_loginUrl != "old" || this.getSysPlatform_string() == "wx") {// this.loginBaseUrl = 'https://qgame.igame58.com/lieyou/api';
    }

    this.trackBaseUrl = this.loginBaseUrl;
    this.eventBeginTime = [];
    this.qGMore_dialogPlayRunType = [0, 0, 0, 0];
    this._showSpotStartTime = 10;
    this._installShortcutTime = 60;
    this._installShortcutStartTime = 0;
    this._beginGameTime = parseInt(getTime() / 1000);
    this._upInstallShortcutTime = 0;
    this.levelBeginTime = 0;
    this.hideTime = 0;
    this.palyGameBackstageTime = 0;
    this.onHide(function () {
      _this.hideTime = parseInt(getTime() / 1000);
    });
    this.onShow(function () {
      var time = parseInt(getTime() / 1000) - _this.hideTime;

      _this.palyGameBackstageTime += time;
      var eventKeys = Object.keys(_this.GameEventBackstageTime);

      for (var i = 0; i < eventKeys.length; i++) {
        _this.GameEventBackstageTime[eventKeys[i]] += time;
      }
    });
  },
  getVersion: function getVersion() {
    return -1;
  },
  showAppBox: function showAppBox(obj) {},
  getSysPlatform: function getSysPlatform() {
    return -2;
  },
  vibrateShort: function vibrateShort() {},
  vibrateLong: function vibrateLong() {},
  vibrateCustom: function vibrateCustom(time) {
    this.vibrateLong();
  },
  hasInstalled: function hasInstalled(callBack) {},
  install: function install(obj) {},
  getBaseData: function getBaseData() {
    return {};
  },
  reload: function reload() {},

  /**
   *  微信
   */
  showMoreGameLoading: function showMoreGameLoading(callBack) {
    callBack();
  },
  showRedPack: function showRedPack(obj) {},
  showRedIcon: function showRedIcon(obj) {},
  showRecommendIcon: function showRecommendIcon(obj) {},
  showGameRecommend: function showGameRecommend(callBack) {},
  onHide: function onHide(fun) {},
  onShow: function onShow(fun) {},
  getHelpLevel: function getHelpLevel() {
    return -1;
  },
  showBanner: function showBanner(obj) {},
  showBannerCustom: function showBannerCustom(obj) {},
  showBannerByBottom: function showBannerByBottom(id) {},
  showBannerByTop: function showBannerByTop(id) {},
  hideBanner: function hideBanner() {},
  showRewardedVideoAd: function showRewardedVideoAd(id, closeCallBack) {
    closeCallBack(true);
  },
  addNativeAd: function addNativeAd(node) {},
  custClickNative: function custClickNative(node) {},
  getAuthorize: function getAuthorize() {},
  login: function login() {},
  addLocalResurr: function addLocalResurr() {},
  useResurr: function useResurr() {},
  modifyInviteFriend: function modifyInviteFriend(friendId) {},
  deleteInviteFriend: function deleteInviteFriend(id) {},
  getInviteFriendData: function getInviteFriendData(flag, fun) {},
  showInviteFriend: function showInviteFriend(_node, _callBack) {},
  showInviteFriendFailure: function showInviteFriendFailure(_node) {},
  checkResurrNum: function checkResurrNum() {
    return 0;
  },
  checkResurrNum_2: function checkResurrNum_2() {
    return 0;
  },
  share: function share(obj) {},
  shareHelp: function shareHelp(level) {},
  shareHelpSuccess: function shareHelpSuccess(level) {},
  helpFriendSuccess: function helpFriendSuccess(level) {},
  getIsHaveFriendHelpMe: function getIsHaveFriendHelpMe(level, fun) {},
  showAllRankingLayer: function showAllRankingLayer(obj) {},
  showFailRankingLayer: function showFailRankingLayer(obj) {},
  setRankingData: function setRankingData(key, score) {},
  setWorldRankData: function setWorldRankData(key, score) {},
  showForum: function showForum(obj) {},
  closeForum: function closeForum() {},
  jumpApp: function jumpApp(data, url, page, num) {},
  newJumpApp: function newJumpApp(obj) {},
  showSpotByBegin: function showSpotByBegin(isHaveNative, top) {},
  showSpotByPause: function showSpotByPause(isHaveNative, top) {},
  showSpotByFinish: function showSpotByFinish(isHaveNative, top) {},
  showPraise: function showPraise() {},
  getParamByOnline: function getParamByOnline(key, defaultV) {
    return null;
  },
  getSDKVersionCanUse: function getSDKVersionCanUse(data) {
    return true;
  },
  addToast: function addToast(_node, str, _callBack) {},
  shareDialog: function shareDialog(_node) {},
  addGetLocakCardDialog: function addGetLocakCardDialog(_node) {},
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

  /**
   * {node:_node,x:x,y:y,align:0}//0 居中 -1 下 1 上
   */
  showGuessYouLickOne: function showGuessYouLickOne(obj) {},

  /**
   * {node:_node,x:0,y:0,align:0}//0 居中 -1 下 1 上
   */
  showGuessYouLickTow: function showGuessYouLickTow(obj) {},
  showGuessYouLike_3: function showGuessYouLike_3(obj) {},
  jumpRefreshBanner: function jumpRefreshBanner(obj) {},
  returnHomeJumpGame: function returnHomeJumpGame() {},

  /**
   * faceBook
   */

  /**
   * android 是否开启某个功能 
   */
  isOpen: function isOpen(key) {
    return false;
  },
  showNativeBanner: function showNativeBanner(top) {},
  hideNativeBanner: function hideNativeBanner() {},

  /**
   *  其他 
   */
  callAndroid: function callAndroid(action) {},

  /**
   *  视频 
   */
  callAndroid_2: function callAndroid_2(action, funS) {},

  /**
   * 付费  小游戏三元复活 action = 9999 
   *  action   4000-5000 
   */
  callPay: function callPay(action, funS) {},

  /**
   * 返回主页
   */
  backHome: function backHome() {},

  /**
   * 好评
   */
  showRate: function showRate() {},
  gotoSmallGame: function gotoSmallGame(gameName) {},
  gameAction: function gameAction(gameName) {},
  jniLevel: function jniLevel(level, mode, action) {
    // if(lieyou_appid != ""){
    //     try {
    //         if(action == 0){
    //             cocosAnalytics.CALevels.begin({
    //                 level : mode + level  // 关卡名称
    //             })
    //         }else if(action == 1){
    //             cocosAnalytics.CALevels.complete({
    //                 level : mode + level  // 关卡名称
    //             })
    //         }else if(action == 2){
    //             cocosAnalytics.CALevels.failed({
    //                 level : mode + level,   // 关卡名称
    //                 reason : ''
    //             })
    //         }    
    //     } catch (error) {
    //     }
    // }
    this.setLevelTrack(level, mode, action);
  },
  setGameEvent: function setGameEvent(event) {
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
    var time = 0;

    if (action == 0) {
      this.GameEventBackstageTime[event] = 0;
      this.eventBeginTime[event] = parseInt(getTime() / 1000);
    } else if (this.eventBeginTime[event]) {
      time = parseInt(getTime() / 1000) - this.eventBeginTime[event] - this.GameEventBackstageTime[event];
    } // if(lieyou_appid != ""){
    //     try {
    //         cocosAnalytics.CACustomEvent.onStarted('event', {
    //             name:event,
    //             action: action,
    //             time:time
    //         });
    //     } catch (error) {
    //     }
    // }


    this.setGameEventTrack(event, action, time);
  },
  showModal: function showModal(obj) {},
  showToast: function showToast(title) {
    lieyou_interface.showToast(title);
  },
  hideToast: function hideToast() {},
  showLoading: function showLoading(title) {},
  hideLoading: function hideLoading() {},
  getHaveVideo: function getHaveVideo() {
    return true;
  },
  getShareOrViedo: function getShareOrViedo() {
    if (this.getHaveVideo()) {
      return 2;
    }

    return 0;
  },
  getJumpBtnHaveMove: function getJumpBtnHaveMove() {
    return 0;
  },
  addLuPingBtn: function addLuPingBtn(obj) {},
  beginLuPing: function beginLuPing(time, callBack) {},
  pauseLuPing: function pauseLuPing() {},
  resumeLuPing: function resumeLuPing() {},
  stopLuPing: function stopLuPing(isShare) {},
  shareVd: function shareVd(callBack) {},
  addSmallGameReturnBtn: function addSmallGameReturnBtn(obj) {},
  showRecommendBegin: function showRecommendBegin(obj) {
    if (obj.callBack) {
      obj.callBack();
    }
  },
  showRecommendFinish: function showRecommendFinish(obj) {
    if (obj.callBack) {
      obj.callBack();
    }
  },
  showArardGoldGrid: function showArardGoldGrid(obj) {
    if (obj.callBack) {
      obj.callBack();
    }
  },
  showArardGoldStrip: function showArardGoldStrip(obj) {
    if (obj.callBack) {
      obj.callBack();
    }
  },
  installShortcut: function installShortcut(obj) {},
  showRecommendAwardIcon: function showRecommendAwardIcon(obj) {},
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
    xhr.timeout = 5000;
    xhr.send();
  },
  shuffle: function shuffle(array) {
    var input = [];

    for (var i = 0; i < array.length; i++) {
      input.push(array[i]);
    }

    for (var i = 0; i < input.length; i++) {
      var index = parseInt(Math.random() * input.length);
      var temp = input[index];
      input[index] = input[i];
      input[i] = temp;
    }

    return input;
  },
  getAdData: function getAdData(firstData) {
    var input = [];
    var input1 = [];
    var input2 = [];
    var input3 = [];
    var array = this.qGMoreGameData;

    for (var i = 0; i < array.length; i++) {
      var data = array[i];

      if (Userdefault.getBoolForKey('ag_moreGame_isTouch_' + data.id, false)) {
        input3.push(data);
      } else {
        var isPush = false;

        for (var j = 0; j < firstData.length; j++) {
          if (firstData[j] == data.id) {
            input1.push(data);
            isPush = true;
            break;
          }
        }

        if (isPush == false) {
          input2.push(data);
        }
      }
    }

    input1 = this.shuffle(input1);
    input2 = this.shuffle(input2);
    input3 = this.shuffle(input3);

    for (var i = 0; i < input1.length; i++) {
      input.push(input1[i]);
    }

    for (var i = 0; i < input2.length; i++) {
      input.push(input2[i]);
    }

    for (var i = 0; i < input3.length; i++) {
      input.push(input3[i]);
    }

    return input;
  },
  hideMoreGameIcon: function hideMoreGameIcon() {
    if (this.moreGameSide && this.moreGameSide.isValid) {
      this.moreGameSide.active = false;
    }

    for (var i = 0; i < this.moreGameIconArr.length; i++) {
      if (this.moreGameIconArr[i] && this.moreGameIconArr[i].isValid) {
        this.moreGameIconArr[i].active = false;
      }
    }
  },
  showMoreGameIcon: function showMoreGameIcon() {
    if (this.moreGameSide && this.moreGameSide.isValid) {
      this.moreGameSide.active = true;
    }

    for (var i = 0; i < this.moreGameIconArr.length; i++) {
      if (this.moreGameIconArr[i] && this.moreGameIconArr[i].isValid) {
        this.moreGameIconArr[i].active = true;
      }
    }
  },
  showMoreGameByIcon: function showMoreGameByIcon(obj) {
    var _this2 = this;

    if (this.base_IsShenHe) {
      return;
    }

    if (releasePlatform == 'qq' && (this.base_IsShenHe || !this.canShowAppBox)) {
      return;
    }

    lieyou_showLog('lieyou_BaseManager-------------- showMoreGameByIcon ' + this.qGMoreGameData.length);

    if (this.qGMoreGameData.length == 0 || !this.qGMore_mainSwitch || !this.qGMore_iconPlay) {
      return;
    }

    if (obj.runType == undefined) {
      obj.runType = 1;
    }

    var fNode = obj.node ? obj.node : cc.director.getScene();

    if (cc.find('lieyou_moreGameByIcon', fNode)) {
      return;
    }

    var nodeX = obj.x != undefined ? obj.x : 0; //(cc.winSize.width/2);

    var nodeY = obj.y != undefined ? obj.y : 0; //(cc.winSize.height/2);

    var url = 'SDK/module/qgameMoreGame/moreGame_icon';

    if (fNode && fNode.isValid) {
      var node = lieyou_moreGame_icon();
      node.name = 'lieyou_moreGameByIcon';
      var isAlreadyPush = false;

      for (var i = 0; i < this.moreGameIconArr.length; i++) {
        if (!this.moreGameIconArr[i].isValid) {
          this.moreGameIconArr[i] = node;
          isAlreadyPush = true;
          break;
        }
      }

      if (!isAlreadyPush) {
        this.moreGameIconArr.push(node);
      }

      if (obj.side) {
        node.scale = obj.side / 130;
      }

      console.log("-----obj.side-----", obj.side);
      fNode.addChild(node);
      node.x = nodeX;
      node.y = nodeY;
      var data = this.qGMoreGameData;

      if (!this.isOneShowMoreGameIcon) {
        this.isOneShowMoreGameIcon = true;
        this.showMoreGameIconIndex = parseInt(Math.random() * data.length);
        var isBreak = false;

        for (var i = 0; i < data.length; i++) {
          for (var j = 0; j < this.qGMore_biz_iconPlay.length; j++) {
            if (data[i].id == this.qGMore_biz_iconPlay[j]) {
              this.showMoreGameIconIndex = i;
              isBreak = true;
              break;
            }
          }

          if (isBreak) {
            break;
          }
        }
      }

      this.showMoreGameIconIndex = this.showMoreGameIconIndex % data.length;
      node.getComponent('lieyou_qGamemoreGame_icon').setData(data[this.showMoreGameIconIndex], 2);
      this.showMoreGameIconIndex++;
      node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(this.qGMore_refreshTime), cc.callFunc(function () {
        _this2.showMoreGameIconIndex = _this2.showMoreGameIconIndex % data.length;
        node.getComponent('lieyou_qGamemoreGame_icon').setData(data[_this2.showMoreGameIconIndex], 2);
        _this2.showMoreGameIconIndex++;
      }))));

      if (obj.runType == 1) {
        node.runAction(cc.repeatForever(cc.sequence(cc.rotateBy(0.03, -15), cc.rotateBy(0.03, 0), cc.rotateBy(0.03, 15), cc.rotateBy(0.03, 0), cc.rotateBy(0.03, -10), cc.rotateBy(0.03, 0), cc.rotateBy(0.03, 10), cc.rotateBy(0.03, 0), cc.rotateBy(0.03, -5), cc.rotateBy(0.03, 0), cc.rotateBy(0.03, 5), cc.rotateBy(0.03, 0), cc.delayTime(2 + Math.random() * 1))));
      }
    }
  },
  showMoreGameByBanner: function showMoreGameByBanner(obj) {
    var _this3 = this;

    // lieyou_SdkManager.showMoreGameGrid();
    setTimeout(function () {
      _this3.installShortcut({
        shoaDialog: true
      });
    }, 5000); // console.log("-------------------this.qGMoreGameData.length---", this.qGMoreGameData.length)

    lieyou_showLog('lieyou_BaseManager-------------- showMoreGameByBanner ' + this.qGMoreGameData.length);

    if (this.base_IsShenHe || this.qGMoreGameData.length == 0 || !this.qGMore_mainSwitch || !this.qGMore_bannerPlay) {
      var scale = 0.8;

      if (lieyou_SdkManager.sdkWinSize.width > lieyou_SdkManager.sdkWinSize.height) {
        scale = 0.4;
      }

      lieyou_SdkManager.showBannerCustom({
        scale: scale
      });
      return;
    }

    this.hideBanner();
    var fNode = obj.node ? obj.node : cc.director.getScene();

    if (cc.find('lieyou_moreGameByBanner', fNode)) {
      return;
    }

    var nodeX = obj.x != undefined ? obj.x : cc.winSize.width / 2;
    var nodeY = obj.y != undefined ? obj.y : 0;
    var url = 'SDK/module/qgameMoreGame/moreGame_banner';

    if (fNode && fNode.isValid) {
      var node = lieyou_moreGame_banner();
      node.name = 'lieyou_moreGameByBanner';
      this.moreGameBanner = node;
      fNode.addChild(node);
      node.x = nodeX;
      node.y = nodeY;
      var data = this.getAdData(this.qGMore_biz_bannerPlay);
      node.getComponent('lieyou_qGamemoreGame_more').setData(data, this.qGMore_isRun);
    }
  },
  showMoreGame: function showMoreGame(obj) {
    if (releasePlatform == 'qq' && (this.base_IsShenHe || !this.canShowAppBox)) {
      return;
    }

    lieyou_showLog('lieyou_BaseManager-------------- showMoreGame ' + this.qGMoreGameData.length);

    if (this.qGMoreGameData.length == 0 || !this.qGMore_mainSwitch || !this.qGMore_morePlay) {
      return;
    }

    var fNode = obj.node ? obj.node : cc.director.getScene();

    if (cc.find('lieyou_moreGame', fNode)) {
      return;
    }

    var nodeX = obj.x != undefined ? obj.x : 0; //(cc.winSize.width/2);

    var nodeY = obj.y != undefined ? obj.y : 0; //(cc.winSize.height/2);

    var url = 'SDK/module/qgameMoreGame/moreGame_btn'; //moreGame_more

    if (fNode && fNode.isValid) {
      var node = lieyou_moreGame_btn();
      node.name = 'lieyou_moreGame';
      fNode.addChild(node);
      node.x = nodeX;
      node.y = nodeY;
      node.getComponent('lieyou_qGameMoreGame_showMore').setData(function () {
        //if(this.getSysPlatform_string() == 'tt'){
        //      this.newJumpApp();
        //    return;
        //}
        var node = lieyou_moreGame_more();
        node.x = cc.winSize.width / 2;
        node.y = cc.winSize.height / 2;
        cc.director.getScene().addChild(node);
        var data = this.getAdData(this.qGMore_biz_morePlay);
        node.getComponent('lieyou_qGamemoreGame_more').setData(data, this.qGMore_isRun);
      }.bind(this));
    }
  },
  hideMoreGameSide: function hideMoreGameSide() {
    if (this.moreGameSide && this.moreGameSide.isValid) {
      this.moreGameSide.active = false;
    }
  },
  showMoreGameSide: function showMoreGameSide(obj) {
    if (this.base_IsShenHe) {
      return;
    }

    if (this.moreGameSide && this.moreGameSide.isValid) {
      this.moreGameSide.active = true;
      return;
    }

    if (releasePlatform == 'qq' && (this.base_IsShenHe || !this.canShowAppBox)) {
      return;
    }

    lieyou_showLog('lieyou_BaseManager-------------- showMoreGameSide ' + this.qGMoreGameData.length);

    if (this.qGMoreGameData.length == 0 || !this.qGMore_mainSwitch || !this.qGMore_floatPlay) {
      return;
    }

    var fNode = cc.director.getScene();
    var sideType = obj.sideType_right == undefined ? false : obj.sideType_right;
    var nodeY = obj.y != undefined ? obj.y : 0;
    var url = 'SDK/module/qgameMoreGame/moreGame_side';

    if (fNode && fNode.isValid) {
      var node = lieyou_moreGame_side();
      this.moreGameSide = node;
      fNode.addChild(node);

      if (obj.isPersist) {
        cc.game.addPersistRootNode(node);
      }

      node.y = cc.winSize.height / 2;
      var data = this.getAdData(this.qGMore_biz_floatPlay);
      node.getComponent('lieyou_qGamemoreGame_more').setData(data, this.qGMore_isRun, sideType, nodeY);
    }
  },
  showMoreGameMiddle_three: function showMoreGameMiddle_three(obj) {
    if (releasePlatform == 'qq' && (this.base_IsShenHe || !this.canShowAppBox)) {
      return false;
    }

    lieyou_showLog('lieyou_BaseManager-------------- showMoreGameMiddle_three ' + this.qGMoreGameData.length);

    if (this.qGMoreGameData.length == 0 || !this.qGMore_mainSwitch || !this.qGMore_dialogPlay3) {
      return false;
    }

    return this.showMoreGameMiddle(obj, this.qGMore_biz_dialogPlay3, 3);
  },
  showMoreGameMiddle_two: function showMoreGameMiddle_two(obj) {
    if (this._moreGameOrNativeType == 1) {
      this._moreGameShowNative = !this._moreGameShowNative;
    }

    if (this._moreGameShowNative && this.showNativeAd_big(obj)) {
      return true;
    }

    if (releasePlatform == 'qq' && (this.base_IsShenHe || !this.canShowAppBox)) {
      return false;
    }

    lieyou_showLog('lieyou_BaseManager-------------- showMoreGameMiddle_two ' + this.qGMoreGameData.length);

    if (this.qGMoreGameData.length == 0 || !this.qGMore_mainSwitch || !this.qGMore_dialogPlay2) {
      return this.showNativeAd_big(obj);
      return false;
    } // return this.showMoreGameMiddle(obj,this.qGMore_biz_dialogPlay2,2);


    return this.showMoreGameMiddle(obj, this.qGMore_biz_dialogPlay2, 3);
  },
  showMoreGameMiddle_one: function showMoreGameMiddle_one(obj) {
    if (releasePlatform == 'qq' && (this.base_IsShenHe || !this.canShowAppBox)) {
      return false;
    }

    lieyou_showLog('lieyou_BaseManager-------------- showMoreGameMiddle_one ' + this.qGMoreGameData.length);

    if (this.qGMoreGameData.length == 0 || !this.qGMore_mainSwitch || !this.qGMore_dialogPlay) {
      return false;
    }

    obj.type = 1;
    this.showMoreGameMiddle(obj, this.qGMore_biz_dialogPlay, 1);
    return true;
  },
  showMoreGameMiddle: function showMoreGameMiddle(obj, array, type) {
    var fNode = obj.node ? obj.node : cc.director.getScene();

    if (cc.find('lieyou_moreGameByMiddle' + type, fNode)) {
      return;
    }

    var nodeX = obj.x != undefined ? obj.x : 0; //(cc.winSize.width/2);

    var nodeY = obj.y != undefined ? obj.y : 0; //(cc.winSize.height/2);

    if (!obj.runType) {
      obj.runType = 4;
    }

    if (this.qGMore_dialogPlayRunType[type]) {
      obj.runType = this.qGMore_dialogPlayRunType[type];
    }

    if (fNode && fNode.isValid) {
      var node = null;
      node = lieyou_moreGame_mid_one(type, obj.haveTitle, obj.titleType, obj.scale);
      node.name = 'lieyou_moreGameByMiddle' + type;
      node.x = nodeX;
      node.y = nodeY;
      var data = this.getAdData(array);
      node.getComponent('lieyou_qGamemoreGame_mid').setData(data, this.qGMore_isRun, this.qGMore_refreshTime, obj.runType); //oppo 隐藏banner

      this.showNativeHideBanner(node);
      fNode.addChild(node);
    }

    return true;
  },
  showNativeHideBanner: function showNativeHideBanner(node) {},
  setHaveTrack: function setHaveTrack() {
    try {
      var data = this._lieyou_online_param;

      if (Userdefault.getIntForKey('lieyou_haveTrack', 0) == 0 && data.trackNum) {
        if (Math.random() * 100 <= Number(data.trackNum) && this.newPlayer) {
          this.haveTrack = 1;
          Userdefault.setDataForKey('lieyou_haveTrack', 1);
          this.setLevelTrack(-1, 'track', -1);
        } else {
          this.haveTrack = 2;
          Userdefault.setDataForKey('lieyou_haveTrack', 2);
        }

        if (data.eventFlag != undefined) {
          this.eventFlag = Number(data.eventFlag);
          Userdefault.setDataForKey('lieyou_eventFlag', this.eventFlag);
        }
      }
    } catch (error) {}
  },
  setSwitchData: function setSwitchData(data) {
    if (data.closeRedPack != undefined) {
      this._closeRedPack = data.closeRedPack;
    }

    if (data.trackBaseUrl) {// this.trackBaseUrl = data.trackBaseUrl;
    }

    if (data.installShortcutStartTime != undefined) {
      this._installShortcutStartTime = Number(data.installShortcutStartTime);
    }

    if (data.showSpotMaxCount != undefined) {
      this._showSpotMaxCount = Number(data.showSpotMaxCount);
    }

    if (data.showSpotMaxCountRefreshTime != undefined) {
      this._showSpotMaxCountRefreshTime = Number(data.showSpotMaxCountRefreshTime);
    }

    if (data.nativeLoadDialogTime != undefined) {
      this._nativeLoadDialogTime = Number(data.nativeLoadDialogTime);
    }

    if (data.moreGameOrNativeType != undefined) {
      this._moreGameOrNativeType = Number(data.moreGameOrNativeType);

      if (this._moreGameOrNativeType == 2) {
        this._moreGameShowNative = true;
      }
    }

    if (data.canShowMoreGameGrid != undefined) {
      this._canShowMoreGameGrid = data.canShowMoreGameGrid;
    }

    if (data.isSysInstallShortCut != undefined) {
      this.isSysInstallShortCut = data.isSysInstallShortCut;
    } // this._moreGameOrNativeType = 0;
    // this._moreGameShowNative = false;


    this._lieyou_online_param = data;

    if (this._initObj && this._initObj.initDataComplete) {
      this._initObj.initDataComplete();
    }
  },
  getParamByKey: function getParamByKey(obj) {
    if (this._lieyou_online_param && this._lieyou_online_param[obj.key] != undefined) {
      return this._lieyou_online_param[obj.key];
    } else {
      return obj.defaultValue;
    }
  },
  setAdData: function setAdData(data) {
    if (data.theme) {
      lieyou_moreGame_type = parseInt(data.theme);
    }

    if (data["switch"]) {
      this.switchSetHttpData = data["switch"];
    }

    if (data.ad_datas) {
      if (data.ad_datas.isRun != undefined) {
        this.qGMore_isRun = data.ad_datas.isRun;
      }

      var adBaseUrl = '';

      if (data.ad_datas.baseUrl != undefined) {
        adBaseUrl = data.ad_datas.baseUrl;
      }

      if (data.ad_datas.dataPlay != undefined) {
        this.qGMoreGameData = data.ad_datas.dataPlay;

        for (var i = 0; i < this.qGMoreGameData.length; i++) {
          if (!this.qGMoreGameData[i].url && this.qGMoreGameData[i].uri) {
            this.qGMoreGameData[i].url = adBaseUrl + this.qGMoreGameData[i].uri;
          }
        }
      }
    }

    lieyou_showMoreGameNum = this.qGMoreGameData.length;

    if (lieyou_showMoreGameNum < 7) {
      lieyou_showMoreGameNum = 7;
    }

    if (data.crossSwitch) {
      if (data.crossSwitch.doubleValue) {
        this.qGMore_dialogPlayRunType[2] = parseInt(data.crossSwitch.doubleValue);
      }

      if (data.crossSwitch.triplexValue) {
        this.qGMore_dialogPlayRunType[3] = parseInt(data.crossSwitch.triplexValue);
      }

      if (data.crossSwitch.showGameNum != undefined) {
        lieyou_showMoreGameNum = Number(data.crossSwitch.showGameNum);

        if (lieyou_showMoreGameNum > this.qGMoreGameData.length) {
          lieyou_showMoreGameNum = this.qGMoreGameData.length;
        }

        if (lieyou_showMoreGameNum < 7) {
          lieyou_showMoreGameNum = 7;
        }
      }

      if (data.crossSwitch.refreshTime != undefined) {
        this.qGMore_refreshTime = Number(data.crossSwitch.refreshTime);
      }

      if (data.crossSwitch.mainSwitch != undefined) {
        this.qGMore_mainSwitch = data.crossSwitch.mainSwitch;
      }

      if (data.crossSwitch.floatPlay != undefined) {
        this.qGMore_floatPlay = data.crossSwitch.floatPlay;
      }

      if (data.crossSwitch.bannerPlay != undefined) {
        this.qGMore_bannerPlay = data.crossSwitch.bannerPlay;
      }

      if (data.crossSwitch.morePlay != undefined) {
        this.qGMore_morePlay = data.crossSwitch.morePlay;
      }

      if (data.crossSwitch.dialogPlay != undefined) {
        this.qGMore_dialogPlay = data.crossSwitch.dialogPlay;
      }

      if (data.crossSwitch.dialogPlay2 != undefined) {
        this.qGMore_dialogPlay2 = data.crossSwitch.dialogPlay2;
      }

      if (data.crossSwitch.dialogPlay3 != undefined) {
        this.qGMore_dialogPlay3 = data.crossSwitch.dialogPlay3;
      }

      if (data.crossSwitch.iconPlay != undefined) {
        this.qGMore_iconPlay = data.crossSwitch.iconPlay;
      }
    }

    if (data.bizData) {
      if (data.bizData.floatPlay != undefined) {
        this.qGMore_biz_floatPlay = data.bizData.floatPlay;
      }

      if (data.bizData.bannerPlay != undefined) {
        this.qGMore_biz_bannerPlay = data.bizData.bannerPlay;
      }

      if (data.bizData.morePlay != undefined) {
        this.qGMore_biz_morePlay = data.bizData.morePlay;
      }

      if (data.bizData.dialogPlay != undefined) {
        this.qGMore_biz_dialogPlay = data.bizData.dialogPlay;
      }

      if (data.bizData.dialogPlay2 != undefined) {
        this.qGMore_biz_dialogPlay2 = data.bizData.dialogPlay2;
      }

      if (data.bizData.dialogPlay3 != undefined) {
        this.qGMore_biz_dialogPlay3 = data.bizData.dialogPlay3;
      }

      if (data.bizData.iconPlay != undefined) {
        this.qGMore_biz_iconPlay = data.bizData.iconPlay;
      }
    }
  },
  getSysPlatform_string: function getSysPlatform_string() {
    return 'base';
  },
  getLoginUrl: function getLoginUrl() {
    var jsonData = {};
    jsonData.uid = openid;
    jsonData.sdkVersion = _SDKVersionCode;
    jsonData.platformVersion = this.platformVersionCode;
    jsonData.androidVersion = this.androidVersion;
    jsonData.model = this.model;
    jsonData.networkType = this.networkType;
    jsonData.uuid = openid_uuid; // jsonData.region = this.region;

    var version = this.dataVersion;
    var platForm = this.getSysPlatform_string();
    var url = this.loginBaseUrl + '/login?umid=' + oppoGetOnlineDataId + '&uuid=' + openid_uuid + '&client_data_version=' + version + '&channel=' + platForm + '&gameVersion=' + this.getVersion() + '&json=' + encodeURI(JSON.stringify(jsonData));
    console.log('baseManager--------------getLoginUrl = ' + url);
    return url;
  },
  setadtrack: function setadtrack(adid, location) {
    if (this.switchSetHttpData && false == this.switchSetHttpData.adtrack) {
      return;
    }

    try {
      var jsonData = {};
      jsonData.uid = openid;

      if (this.isMoreInfo) {
        jsonData.sdkVersion = _SDKVersionCode;
        jsonData.platformVersion = this.platformVersionCode;
        jsonData.androidVersion = this.androidVersion;
        jsonData.model = this.model;
        jsonData.networkType = this.networkType;
        jsonData.uuid = openid_uuid;
      }

      var platForm = this.getSysPlatform_string();
      var url = this.loginBaseUrl + '/adtrack?umid=' + oppoGetOnlineDataId + '&uuid=' + openid_uuid + '&channel=' + platForm + '&adid=' + adid + '&location=' + location + '&gameVersion=' + this.getVersion() + '&json=' + encodeURI(JSON.stringify(jsonData));
      lieyou_showLog('baseManager--------------setadtrack = ' + url);
      this.setDataForHttp(url);
    } catch (error) {
      lieyou_showLog('baseManager--------setadtrack error= ' + JSON.stringify(error));
    }
  },
  setOperTrack: function setOperTrack() {
    var jsonData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (this.switchSetHttpData && false == this.switchSetHttpData.operTrack) {
      return;
    }

    try {
      jsonData.uid = openid;
      jsonData.uuid = openid_uuid;
      var platForm = this.getSysPlatform_string();
      var url = this.loginBaseUrl + '/operTrack?umid=' + oppoGetOnlineDataId + '&uuid=' + openid_uuid + '&channel=' + platForm + '&gameVersion=' + this.getVersion() + '&json=' + encodeURI(JSON.stringify(jsonData));
      console.log('baseManager--------------setOperTrack = ' + url);
      this.setDataForHttp(url);
    } catch (error) {
      // "switch":{"operTrack":true,"adtrack":true};
      console.log('baseManager--------setOperTrack error= ' + JSON.stringify(error));
    }
  },
  setLevelTrack: function setLevelTrack(level, mode, action) {
    this.setHaveTrack();

    if (this.haveTrack != 1) {
      return;
    }

    if (this.switchSetHttpData && false == this.switchSetHttpData.Leveltrack) {
      return;
    }

    var time = 0;

    if (action == 0) {
      this.palyGameBackstageTime = 0;
      this.levelBeginTime = parseInt(getTime() / 1000);
    } else if (action == 1 || action == 2) {
      time = parseInt(getTime() / 1000) - this.levelBeginTime - this.palyGameBackstageTime;
    }

    try {
      var jsonData = {};
      jsonData.uid = openid;

      if (this.isMoreInfo) {
        jsonData.sdkVersion = _SDKVersionCode;
        jsonData.platformVersion = this.platformVersionCode;
        jsonData.androidVersion = this.androidVersion;
        jsonData.model = this.model;
        jsonData.networkType = this.networkType;
        jsonData.uuid = openid_uuid;
      }

      var platForm = this.getSysPlatform_string();
      var url = this.trackBaseUrl + '/levelTrack?umid=' + oppoGetOnlineDataId + '&uuid=' + openid_uuid + '&channel=' + platForm + '&model=' + mode + '&level=' + level + '&type=' + action + '&time=' + time + '&gameVersion=' + this.getVersion() + '&eventFlag=' + this.eventFlag + '&json=' + encodeURI(JSON.stringify(jsonData));
      lieyou_showLog('baseManager--------------setlevelTrack = ' + url);
      this.setDataForHttp(url);
    } catch (error) {
      lieyou_showLog('baseManager--------setlevelTrack error= ' + JSON.stringify(error));
    }
  },
  setGameEventTrack: function setGameEventTrack(event, action, time) {
    if (this.haveTrack != 1) {
      return;
    }

    try {
      var jsonData = {};
      jsonData.uid = openid;

      if (this.isMoreInfo) {
        jsonData.sdkVersion = _SDKVersionCode;
        jsonData.platformVersion = this.platformVersionCode;
        jsonData.androidVersion = this.androidVersion;
        jsonData.model = this.model;
        jsonData.networkType = this.networkType;
        jsonData.uuid = openid_uuid;
      }

      var platForm = this.getSysPlatform_string();
      var url = this.trackBaseUrl + '/eventTrack?umid=' + oppoGetOnlineDataId + '&uuid=' + openid_uuid + '&channel=' + platForm + '&event=' + event + '&type=' + action + '&time=' + time + '&gameVersion=' + this.getVersion() + '&eventFlag=' + this.eventFlag + '&json=' + encodeURI(JSON.stringify(jsonData));
      lieyou_showLog('baseManager--------------setGameEventTrack = ' + url);
      this.setDataForHttp(url);
    } catch (error) {
      lieyou_showLog('baseManager--------setGameEventTrack error= ' + JSON.stringify(error));
    }
  },
  showInstallShortcutDialog: function showInstallShortcutDialog() {
    var dayTime = getTimeDay();
    var day = Userdefault.getIntForKey('lieyou_notShowInstallShortcut', 0);

    if (dayTime == day) {
      return;
    }

    var fNode = cc.director.getScene();
    var node = lieyou_getInstallShortcutDialogPrefab();
    fNode.addChild(node);
    node.x = lieyou_SdkManager.sdkWinSize.width / 2;
    node.y = lieyou_SdkManager.sdkWinSize.height / 2;
  },
  addInstallShortcut: function addInstallShortcut(obj) {
    var _this4 = this;

    try {
      if (cc.sys.platform == cc.sys.OPPO_GAME || cc.sys.platform == cc.sys.VIVO_GAME) {
        obj.canShow = true;
        var fNode = obj.node ? obj.node : cc.director.getScene();
        this.installShortcut({
          canShow: true,
          callBack_addNode: function callBack_addNode() {
            if (fNode && fNode.isValid) {
              var node = lieyou_getInstallShortcutPrefab();

              node.callFun = function () {
                _this4.installShortcut(obj);
              };

              fNode.addChild(node);
              node.x = obj.x ? obj.x : 0;
              node.y = obj.y ? obj.y : 0;
            }
          }
        });
      }
    } catch (error) {}
  },
  showShareVideoDialog: function showShareVideoDialog(callBack) {
    callBack && callBack(4);
  },
  showNativeAd_small: function showNativeAd_small(obj) {
    return false;
  },
  showNativeAd_big: function showNativeAd_big(obj) {
    return false;
  },
  showNativeAd_load: function showNativeAd_load(obj) {
    if (obj.callBack) {
      obj.callBack();
    }
  },
  saveImageToPhotosAlbum: function saveImageToPhotosAlbum() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  },
  showISBN: function showISBN() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  },
  hideISBN: function hideISBN() {},
  showUserAgreement: function showUserAgreement() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  },
  setOnlineData: function setOnlineData(data) {},
  initOnlineData: function initOnlineData() {
    if (oppoGetOnlineDataId == '') {
      lieyou_SdkManager.showToast('没有填写qgID');
      return;
    }

    var self = this;
    var version = Userdefault.getIntForKey('lieyou_sdk_online_version', 0);
    var time = Userdefault.getIntForKey('lieyou_sdk_online_time', 0);
    var sp = Userdefault.getIntForKey('lieyou_sdk_online_sp', 0);
    var nowTime = getTime() / 1000;

    if (nowTime - time < sp && nowTime > time) {
      var response = Userdefault.getStringForKey('lieyou_sdk_online_data', '');
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
          Userdefault.setDataForKey('lieyou_sdk_online_version', jsonD.server_data_version);
        }

        if (jsonD.isMoreInfo != undefined) {
          self.isMoreInfo = jsonD.isMoreInfo;
        }

        if (jsonD.sp) {
          Userdefault.setDataForKey('lieyou_sdk_online_sp', jsonD.sp);
        }

        Userdefault.setDataForKey('lieyou_sdk_online_time', nowTime);

        if (jsonD.server_data_version == version) {
          var response = Userdefault.getStringForKey('lieyou_sdk_online_data', '');
          var data = JSON.parse(response);
          self.setOnlineData(data);
          return;
        }

        var data = JSON.parse(response).data;

        if (!data) {
          return;
        }

        self.setOnlineData(data);
        Userdefault.setDataForKey('lieyou_sdk_online_data', JSON.stringify(data));
      } catch (error) {
        lieyou_showLog('------error  initOnlineData + ' + error);
      }
    });
  },
  getScreenshot: function getScreenshot() {
    return new cc.Node();
  },
  showMoreGameGrid: function showMoreGameGrid() {
    if (this.base_IsShenHe || !this._canShowMoreGameGrid) {
      return;
    }

    if (cc.find("lieyou_moreGameGrid", cc.director.getScene())) {
      return;
    }

    if (this.qGMoreGameData.length == 0) {
      return;
    }

    var node = lieyou_moreGame_more();
    node.name = "lieyou_moreGameGrid";
    node.x = cc.winSize.width / 2;
    node.y = cc.winSize.height / 2;
    cc.director.getScene().addChild(node);
    var data = this.getAdData(this.qGMore_biz_morePlay);
    node.getComponent('lieyou_qGamemoreGame_more').setData(data, this.qGMore_isRun);
  },
  addRedPackIcon: function addRedPackIcon(obj) {
    if (this.base_IsShenHe || this._closeRedPack) {
      return;
    }

    obj.node.addChild(lieyou_getRedPackIcon());
  },
  addRedPackDialog: function addRedPackDialog() {
    if (this.base_IsShenHe || this._closeRedPack) {
      return;
    }

    lieyou_showRedPackDialog();
  },
  addTakeOutIcon: function addTakeOutIcon(obj) {
    if (this.base_IsShenHe || this._closeRedPack) {
      return;
    }

    obj.node.addChild(lieyou_getCaskIcon());
  }
});
module.exports = BaseManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXHNjcmlwdHNcXEJhc2VNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImxpZXlvdV9zaG93RGVidWciLCJsaWV5b3VfbW9yZUdhbWVfdHlwZSIsImxpZXlvdV9zaG93TW9yZUdhbWVOdW0iLCJCYXNlTWFuYWdlciIsImNjIiwiQ2xhc3MiLCJwcm9wZXJ0aWVzIiwicUdNb3JlR2FtZURhdGEiLCJxR01vcmVfaXNSdW4iLCJxR01vcmVfcmVmcmVzaFRpbWUiLCJxR01vcmVfbWFpblN3aXRjaCIsInFHTW9yZV9mbG9hdFBsYXkiLCJxR01vcmVfYmFubmVyUGxheSIsInFHTW9yZV9tb3JlUGxheSIsInFHTW9yZV9kaWFsb2dQbGF5IiwicUdNb3JlX2RpYWxvZ1BsYXkyIiwicUdNb3JlX2RpYWxvZ1BsYXkzIiwicUdNb3JlX2ljb25QbGF5IiwicUdNb3JlX2Jpel9mbG9hdFBsYXkiLCJxR01vcmVfYml6X2Jhbm5lclBsYXkiLCJxR01vcmVfYml6X21vcmVQbGF5IiwicUdNb3JlX2Jpel9kaWFsb2dQbGF5IiwicUdNb3JlX2Jpel9kaWFsb2dQbGF5MiIsInFHTW9yZV9iaXpfZGlhbG9nUGxheTMiLCJxR01vcmVfZGlhbG9nUGxheVJ1blR5cGUiLCJxR01vcmVfYml6X2ljb25QbGF5IiwiZGF0YVZlcnNpb24iLCJwbGF0Zm9ybVZlcnNpb25Db2RlIiwiYW5kcm9pZFZlcnNpb24iLCJtb2RlbCIsIm5ldHdvcmtUeXBlIiwicmVnaW9uIiwiaXNNb3JlSW5mbyIsIm1vcmVHYW1lSWNvbkFyciIsImJhc2VfSXNTaGVuSGUiLCJpbml0Iiwib2JqIiwibmV3UGxheWVyIiwibGlleW91X1VzZXJkZWZhdWx0IiwiZ2V0Qm9vbEZvcktleSIsInNldEJvb2xGb3JLZXkiLCJfY2FuU2hvd01vcmVHYW1lR3JpZCIsIl9tb3JlR2FtZU9yTmF0aXZlVHlwZSIsIl9tb3JlR2FtZVNob3dOYXRpdmUiLCJfbmF0aXZlTG9hZERpYWxvZ1RpbWUiLCJfaW5pdE9iaiIsIl9zaG93U3BvdE1heENvdW50IiwiX3Nob3dTcG90TWF4Q291bnRSZWZyZXNoVGltZSIsIl9zaG93U3BvdENvdW50IiwiVXNlcmRlZmF1bHQiLCJnZXRJbnRGb3JLZXkiLCJfc2hvd1Nwb3RUaW1lIiwiZGF5VGltZSIsImdldFRpbWVEYXkiLCJzZXREYXRhRm9yS2V5IiwiZXZlbnRGbGFnIiwiR2FtZUV2ZW50QmFja3N0YWdlVGltZSIsImhhdmVUcmFjayIsImxvZ2luQmFzZVVybCIsImxpZXlvdV9sb2dpblVybCIsImdldFN5c1BsYXRmb3JtX3N0cmluZyIsInRyYWNrQmFzZVVybCIsImV2ZW50QmVnaW5UaW1lIiwiX3Nob3dTcG90U3RhcnRUaW1lIiwiX2luc3RhbGxTaG9ydGN1dFRpbWUiLCJfaW5zdGFsbFNob3J0Y3V0U3RhcnRUaW1lIiwiX2JlZ2luR2FtZVRpbWUiLCJwYXJzZUludCIsImdldFRpbWUiLCJfdXBJbnN0YWxsU2hvcnRjdXRUaW1lIiwibGV2ZWxCZWdpblRpbWUiLCJoaWRlVGltZSIsInBhbHlHYW1lQmFja3N0YWdlVGltZSIsIm9uSGlkZSIsIm9uU2hvdyIsInRpbWUiLCJldmVudEtleXMiLCJPYmplY3QiLCJrZXlzIiwiaSIsImxlbmd0aCIsImdldFZlcnNpb24iLCJzaG93QXBwQm94IiwiZ2V0U3lzUGxhdGZvcm0iLCJ2aWJyYXRlU2hvcnQiLCJ2aWJyYXRlTG9uZyIsInZpYnJhdGVDdXN0b20iLCJoYXNJbnN0YWxsZWQiLCJjYWxsQmFjayIsImluc3RhbGwiLCJnZXRCYXNlRGF0YSIsInJlbG9hZCIsInNob3dNb3JlR2FtZUxvYWRpbmciLCJzaG93UmVkUGFjayIsInNob3dSZWRJY29uIiwic2hvd1JlY29tbWVuZEljb24iLCJzaG93R2FtZVJlY29tbWVuZCIsImZ1biIsImdldEhlbHBMZXZlbCIsInNob3dCYW5uZXIiLCJzaG93QmFubmVyQ3VzdG9tIiwic2hvd0Jhbm5lckJ5Qm90dG9tIiwiaWQiLCJzaG93QmFubmVyQnlUb3AiLCJoaWRlQmFubmVyIiwic2hvd1Jld2FyZGVkVmlkZW9BZCIsImNsb3NlQ2FsbEJhY2siLCJhZGROYXRpdmVBZCIsIm5vZGUiLCJjdXN0Q2xpY2tOYXRpdmUiLCJnZXRBdXRob3JpemUiLCJsb2dpbiIsImFkZExvY2FsUmVzdXJyIiwidXNlUmVzdXJyIiwibW9kaWZ5SW52aXRlRnJpZW5kIiwiZnJpZW5kSWQiLCJkZWxldGVJbnZpdGVGcmllbmQiLCJnZXRJbnZpdGVGcmllbmREYXRhIiwiZmxhZyIsInNob3dJbnZpdGVGcmllbmQiLCJfbm9kZSIsIl9jYWxsQmFjayIsInNob3dJbnZpdGVGcmllbmRGYWlsdXJlIiwiY2hlY2tSZXN1cnJOdW0iLCJjaGVja1Jlc3Vyck51bV8yIiwic2hhcmUiLCJzaGFyZUhlbHAiLCJsZXZlbCIsInNoYXJlSGVscFN1Y2Nlc3MiLCJoZWxwRnJpZW5kU3VjY2VzcyIsImdldElzSGF2ZUZyaWVuZEhlbHBNZSIsInNob3dBbGxSYW5raW5nTGF5ZXIiLCJzaG93RmFpbFJhbmtpbmdMYXllciIsInNldFJhbmtpbmdEYXRhIiwia2V5Iiwic2NvcmUiLCJzZXRXb3JsZFJhbmtEYXRhIiwic2hvd0ZvcnVtIiwiY2xvc2VGb3J1bSIsImp1bXBBcHAiLCJkYXRhIiwidXJsIiwicGFnZSIsIm51bSIsIm5ld0p1bXBBcHAiLCJzaG93U3BvdEJ5QmVnaW4iLCJpc0hhdmVOYXRpdmUiLCJ0b3AiLCJzaG93U3BvdEJ5UGF1c2UiLCJzaG93U3BvdEJ5RmluaXNoIiwic2hvd1ByYWlzZSIsImdldFBhcmFtQnlPbmxpbmUiLCJkZWZhdWx0ViIsImdldFNES1ZlcnNpb25DYW5Vc2UiLCJhZGRUb2FzdCIsInN0ciIsInNoYXJlRGlhbG9nIiwiYWRkR2V0TG9jYWtDYXJkRGlhbG9nIiwiZ2V0T25saW5lU3ByaXRlRnJhbWUiLCJsb2FkRmlsZSIsInR5cGUiLCJsb2FkZXIiLCJsb2FkIiwiZXJyIiwidGV4IiwiU3ByaXRlRnJhbWUiLCJzaG93R3Vlc3NZb3VMaWNrT25lIiwic2hvd0d1ZXNzWW91TGlja1RvdyIsInNob3dHdWVzc1lvdUxpa2VfMyIsImp1bXBSZWZyZXNoQmFubmVyIiwicmV0dXJuSG9tZUp1bXBHYW1lIiwiaXNPcGVuIiwic2hvd05hdGl2ZUJhbm5lciIsImhpZGVOYXRpdmVCYW5uZXIiLCJjYWxsQW5kcm9pZCIsImFjdGlvbiIsImNhbGxBbmRyb2lkXzIiLCJmdW5TIiwiY2FsbFBheSIsImJhY2tIb21lIiwic2hvd1JhdGUiLCJnb3RvU21hbGxHYW1lIiwiZ2FtZU5hbWUiLCJnYW1lQWN0aW9uIiwiam5pTGV2ZWwiLCJtb2RlIiwic2V0TGV2ZWxUcmFjayIsInNldEdhbWVFdmVudCIsImV2ZW50Iiwic2V0R2FtZUV2ZW50VHJhY2siLCJzaG93TW9kYWwiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImxpZXlvdV9pbnRlcmZhY2UiLCJoaWRlVG9hc3QiLCJzaG93TG9hZGluZyIsImhpZGVMb2FkaW5nIiwiZ2V0SGF2ZVZpZGVvIiwiZ2V0U2hhcmVPclZpZWRvIiwiZ2V0SnVtcEJ0bkhhdmVNb3ZlIiwiYWRkTHVQaW5nQnRuIiwiYmVnaW5MdVBpbmciLCJwYXVzZUx1UGluZyIsInJlc3VtZUx1UGluZyIsInN0b3BMdVBpbmciLCJpc1NoYXJlIiwic2hhcmVWZCIsImFkZFNtYWxsR2FtZVJldHVybkJ0biIsInNob3dSZWNvbW1lbmRCZWdpbiIsInNob3dSZWNvbW1lbmRGaW5pc2giLCJzaG93QXJhcmRHb2xkR3JpZCIsInNob3dBcmFyZEdvbGRTdHJpcCIsImluc3RhbGxTaG9ydGN1dCIsInNob3dSZWNvbW1lbmRBd2FyZEljb24iLCJzZXREYXRhRm9ySHR0cCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVhZHlTdGF0ZSIsInN0YXR1cyIsInJlc3BvbnNlIiwicmVzcG9uc2VUZXh0Iiwib3BlbiIsInRpbWVvdXQiLCJzZW5kIiwic2h1ZmZsZSIsImFycmF5IiwiaW5wdXQiLCJwdXNoIiwiaW5kZXgiLCJNYXRoIiwicmFuZG9tIiwidGVtcCIsImdldEFkRGF0YSIsImZpcnN0RGF0YSIsImlucHV0MSIsImlucHV0MiIsImlucHV0MyIsImlzUHVzaCIsImoiLCJoaWRlTW9yZUdhbWVJY29uIiwibW9yZUdhbWVTaWRlIiwiaXNWYWxpZCIsImFjdGl2ZSIsInNob3dNb3JlR2FtZUljb24iLCJzaG93TW9yZUdhbWVCeUljb24iLCJyZWxlYXNlUGxhdGZvcm0iLCJjYW5TaG93QXBwQm94IiwibGlleW91X3Nob3dMb2ciLCJydW5UeXBlIiwidW5kZWZpbmVkIiwiZk5vZGUiLCJkaXJlY3RvciIsImdldFNjZW5lIiwiZmluZCIsIm5vZGVYIiwieCIsIm5vZGVZIiwieSIsImxpZXlvdV9tb3JlR2FtZV9pY29uIiwibmFtZSIsImlzQWxyZWFkeVB1c2giLCJzaWRlIiwic2NhbGUiLCJjb25zb2xlIiwibG9nIiwiYWRkQ2hpbGQiLCJpc09uZVNob3dNb3JlR2FtZUljb24iLCJzaG93TW9yZUdhbWVJY29uSW5kZXgiLCJpc0JyZWFrIiwiZ2V0Q29tcG9uZW50Iiwic2V0RGF0YSIsInJ1bkFjdGlvbiIsInJlcGVhdEZvcmV2ZXIiLCJzZXF1ZW5jZSIsImRlbGF5VGltZSIsImNhbGxGdW5jIiwicm90YXRlQnkiLCJzaG93TW9yZUdhbWVCeUJhbm5lciIsInNldFRpbWVvdXQiLCJzaG9hRGlhbG9nIiwibGlleW91X1Nka01hbmFnZXIiLCJzZGtXaW5TaXplIiwid2lkdGgiLCJoZWlnaHQiLCJ3aW5TaXplIiwibGlleW91X21vcmVHYW1lX2Jhbm5lciIsIm1vcmVHYW1lQmFubmVyIiwic2hvd01vcmVHYW1lIiwibGlleW91X21vcmVHYW1lX2J0biIsImxpZXlvdV9tb3JlR2FtZV9tb3JlIiwiYmluZCIsImhpZGVNb3JlR2FtZVNpZGUiLCJzaG93TW9yZUdhbWVTaWRlIiwic2lkZVR5cGUiLCJzaWRlVHlwZV9yaWdodCIsImxpZXlvdV9tb3JlR2FtZV9zaWRlIiwiaXNQZXJzaXN0IiwiZ2FtZSIsImFkZFBlcnNpc3RSb290Tm9kZSIsInNob3dNb3JlR2FtZU1pZGRsZV90aHJlZSIsInNob3dNb3JlR2FtZU1pZGRsZSIsInNob3dNb3JlR2FtZU1pZGRsZV90d28iLCJzaG93TmF0aXZlQWRfYmlnIiwic2hvd01vcmVHYW1lTWlkZGxlX29uZSIsImxpZXlvdV9tb3JlR2FtZV9taWRfb25lIiwiaGF2ZVRpdGxlIiwidGl0bGVUeXBlIiwic2hvd05hdGl2ZUhpZGVCYW5uZXIiLCJzZXRIYXZlVHJhY2siLCJfbGlleW91X29ubGluZV9wYXJhbSIsInRyYWNrTnVtIiwiTnVtYmVyIiwiZXJyb3IiLCJzZXRTd2l0Y2hEYXRhIiwiY2xvc2VSZWRQYWNrIiwiX2Nsb3NlUmVkUGFjayIsImluc3RhbGxTaG9ydGN1dFN0YXJ0VGltZSIsInNob3dTcG90TWF4Q291bnQiLCJzaG93U3BvdE1heENvdW50UmVmcmVzaFRpbWUiLCJuYXRpdmVMb2FkRGlhbG9nVGltZSIsIm1vcmVHYW1lT3JOYXRpdmVUeXBlIiwiY2FuU2hvd01vcmVHYW1lR3JpZCIsImlzU3lzSW5zdGFsbFNob3J0Q3V0IiwiaW5pdERhdGFDb21wbGV0ZSIsImdldFBhcmFtQnlLZXkiLCJkZWZhdWx0VmFsdWUiLCJzZXRBZERhdGEiLCJ0aGVtZSIsInN3aXRjaFNldEh0dHBEYXRhIiwiYWRfZGF0YXMiLCJpc1J1biIsImFkQmFzZVVybCIsImJhc2VVcmwiLCJkYXRhUGxheSIsInVyaSIsImNyb3NzU3dpdGNoIiwiZG91YmxlVmFsdWUiLCJ0cmlwbGV4VmFsdWUiLCJzaG93R2FtZU51bSIsInJlZnJlc2hUaW1lIiwibWFpblN3aXRjaCIsImZsb2F0UGxheSIsImJhbm5lclBsYXkiLCJtb3JlUGxheSIsImRpYWxvZ1BsYXkiLCJkaWFsb2dQbGF5MiIsImRpYWxvZ1BsYXkzIiwiaWNvblBsYXkiLCJiaXpEYXRhIiwiZ2V0TG9naW5VcmwiLCJqc29uRGF0YSIsInVpZCIsIm9wZW5pZCIsInNka1ZlcnNpb24iLCJfU0RLVmVyc2lvbkNvZGUiLCJwbGF0Zm9ybVZlcnNpb24iLCJ1dWlkIiwib3BlbmlkX3V1aWQiLCJ2ZXJzaW9uIiwicGxhdEZvcm0iLCJvcHBvR2V0T25saW5lRGF0YUlkIiwiZW5jb2RlVVJJIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldGFkdHJhY2siLCJhZGlkIiwibG9jYXRpb24iLCJhZHRyYWNrIiwic2V0T3BlclRyYWNrIiwib3BlclRyYWNrIiwiTGV2ZWx0cmFjayIsInNob3dJbnN0YWxsU2hvcnRjdXREaWFsb2ciLCJkYXkiLCJsaWV5b3VfZ2V0SW5zdGFsbFNob3J0Y3V0RGlhbG9nUHJlZmFiIiwiYWRkSW5zdGFsbFNob3J0Y3V0Iiwic3lzIiwicGxhdGZvcm0iLCJPUFBPX0dBTUUiLCJWSVZPX0dBTUUiLCJjYW5TaG93IiwiY2FsbEJhY2tfYWRkTm9kZSIsImxpZXlvdV9nZXRJbnN0YWxsU2hvcnRjdXRQcmVmYWIiLCJjYWxsRnVuIiwic2hvd1NoYXJlVmlkZW9EaWFsb2ciLCJzaG93TmF0aXZlQWRfc21hbGwiLCJzaG93TmF0aXZlQWRfbG9hZCIsInNhdmVJbWFnZVRvUGhvdG9zQWxidW0iLCJzaG93SVNCTiIsImhpZGVJU0JOIiwic2hvd1VzZXJBZ3JlZW1lbnQiLCJzZXRPbmxpbmVEYXRhIiwiaW5pdE9ubGluZURhdGEiLCJzZWxmIiwic3AiLCJub3dUaW1lIiwiZ2V0U3RyaW5nRm9yS2V5IiwicGFyc2UiLCJqc29uRCIsInNlcnZlcl9kYXRhX3ZlcnNpb24iLCJnZXRTY3JlZW5zaG90IiwiTm9kZSIsInNob3dNb3JlR2FtZUdyaWQiLCJhZGRSZWRQYWNrSWNvbiIsImxpZXlvdV9nZXRSZWRQYWNrSWNvbiIsImFkZFJlZFBhY2tEaWFsb2ciLCJsaWV5b3Vfc2hvd1JlZFBhY2tEaWFsb2ciLCJhZGRUYWtlT3V0SWNvbiIsImxpZXlvdV9nZXRDYXNrSWNvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsR0FBMEIsS0FBMUI7QUFDQUQsTUFBTSxDQUFDRSxvQkFBUCxHQUE4QixDQUE5QjtBQUNBRixNQUFNLENBQUNHLHNCQUFQLEdBQWdD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dUIsMEJBK2pDUi9XLEdBL2pDUSxFQStqQ0g7QUFDaEIsUUFBSSxLQUFLRixhQUFMLElBQXNCLEtBQUswUixhQUEvQixFQUE4QztBQUMxQztBQUNIOztBQUNEeFIsSUFBQUEsR0FBRyxDQUFDd0UsSUFBSixDQUFTOEosUUFBVCxDQUFrQjBJLHFCQUFxQixFQUF2QztBQUNILEdBcGtDc0I7QUFxa0N2QkMsRUFBQUEsZ0JBcmtDdUIsOEJBcWtDSjtBQUNmLFFBQUksS0FBS25YLGFBQUwsSUFBc0IsS0FBSzBSLGFBQS9CLEVBQThDO0FBQzFDO0FBQ0g7O0FBQ0QwRixJQUFBQSx3QkFBd0I7QUFDM0IsR0Exa0NzQjtBQTJrQ3ZCQyxFQUFBQSxjQTNrQ3VCLDBCQTJrQ1JuWCxHQTNrQ1EsRUEya0NIO0FBQ2hCLFFBQUksS0FBS0YsYUFBTCxJQUFzQixLQUFLMFIsYUFBL0IsRUFBOEM7QUFDMUM7QUFDSDs7QUFDRHhSLElBQUFBLEdBQUcsQ0FBQ3dFLElBQUosQ0FBUzhKLFFBQVQsQ0FBa0I4SSxrQkFBa0IsRUFBcEM7QUFDSDtBQWhsQ3NCLENBQVQsQ0FBbEI7QUFrbENBQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ2WixXQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmxpZXlvdV9zaG93RGVidWcgPSBmYWxzZTtcclxud2luZG93LmxpZXlvdV9tb3JlR2FtZV90eXBlID0gMDtcclxud2luZG93LmxpZXlvdV9zaG93TW9yZUdhbWVOdW0gPSA3O1xyXG5sZXQgQmFzZU1hbmFnZXIgPSBjYy5DbGFzcyh7XHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcUdNb3JlR2FtZURhdGE6IFtdLFxyXG4gICAgICAgIHFHTW9yZV9pc1J1bjogdHJ1ZSxcclxuICAgICAgICBxR01vcmVfcmVmcmVzaFRpbWU6IDMsXHJcbiAgICAgICAgcUdNb3JlX21haW5Td2l0Y2g6IDEsLy8wXHJcbiAgICAgICAgcUdNb3JlX2Zsb2F0UGxheTogMSxcclxuICAgICAgICBxR01vcmVfYmFubmVyUGxheTogMSxcclxuICAgICAgICBxR01vcmVfbW9yZVBsYXk6IDEsXHJcbiAgICAgICAgcUdNb3JlX2RpYWxvZ1BsYXk6IDEsXHJcbiAgICAgICAgcUdNb3JlX2RpYWxvZ1BsYXkyOiAxLFxyXG4gICAgICAgIHFHTW9yZV9kaWFsb2dQbGF5MzogMSxcclxuICAgICAgICBxR01vcmVfaWNvblBsYXk6IDEsXHJcbiAgICAgICAgcUdNb3JlX2Jpel9mbG9hdFBsYXk6IFtdLFxyXG4gICAgICAgIHFHTW9yZV9iaXpfYmFubmVyUGxheTogW10sXHJcbiAgICAgICAgcUdNb3JlX2Jpel9tb3JlUGxheTogW10sXHJcbiAgICAgICAgcUdNb3JlX2Jpel9kaWFsb2dQbGF5OiBbXSxcclxuICAgICAgICBxR01vcmVfYml6X2RpYWxvZ1BsYXkyOiBbXSxcclxuICAgICAgICBxR01vcmVfYml6X2RpYWxvZ1BsYXkzOiBbXSxcclxuICAgICAgICBxR01vcmVfZGlhbG9nUGxheVJ1blR5cGU6IFtdLFxyXG4gICAgICAgIHFHTW9yZV9iaXpfaWNvblBsYXk6IFtdLFxyXG4gICAgICAgIGRhdGFWZXJzaW9uOiAwLFxyXG4gICAgICAgIHBsYXRmb3JtVmVyc2lvbkNvZGU6IDAsXHJcbiAgICAgICAgYW5kcm9pZFZlcnNpb246ICcnLFxyXG4gICAgICAgIG1vZGVsOiAnJyxcclxuICAgICAgICBuZXR3b3JrVHlwZTogJ25vbmUnLFxyXG4gICAgICAgIHJlZ2lvbjogJycsXHJcbiAgICAgICAgaXNNb3JlSW5mbzogdHJ1ZSxcclxuICAgICAgICBtb3JlR2FtZUljb25BcnI6IFtdLFxyXG4gICAgICAgIGJhc2VfSXNTaGVuSGU6IGZhbHNlLFxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0OiBmdW5jdGlvbiAob2JqKSB7XHJcbiAgICAgICAgdGhpcy5uZXdQbGF5ZXIgPSBsaWV5b3VfVXNlcmRlZmF1bHQuZ2V0Qm9vbEZvcktleShcImxpZXlvdV9uZXdQbGF5ZXJcIiwgdHJ1ZSk7XHJcbiAgICAgICAgbGlleW91X1VzZXJkZWZhdWx0LnNldEJvb2xGb3JLZXkoXCJsaWV5b3VfbmV3UGxheWVyXCIsIGZhbHNlKTtcclxuICAgICAgICAvLyB0aGlzLnFHTW9yZUdhbWVEYXRhID0gW3tcImdhbWVOYW1lXCI6XCLlhazkuLvnlJzlv4PmoKHlm63nvo7lj5HlsYtcIixcImlkXCI6MjAwOCxcImp1bXBEYXRhXCI6e1wiYXBwSWRcIjpcImNvbS5sZXcuZ2FtZS5oYWlyc2Fsb24ua3l4Lm5lYXJtZS5nYW1lY2VudGVyXCIsXCJwYXRoXCI6XCJcIn0sXCJ1cmlcIjpcImh0dHA6Ly9oNS5pZ2FtZTU4LmNvbS9yX2ljb24vaGVsbG9zdGlja21hbi5wbmdcIn1dXHJcbiAgICAgICAgdGhpcy5fY2FuU2hvd01vcmVHYW1lR3JpZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fbW9yZUdhbWVPck5hdGl2ZVR5cGUgPSAwO1xyXG4gICAgICAgIHRoaXMuX21vcmVHYW1lU2hvd05hdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX25hdGl2ZUxvYWREaWFsb2dUaW1lID0gMztcclxuICAgICAgICB0aGlzLl9pbml0T2JqID0gb2JqO1xyXG4gICAgICAgIHRoaXMuX3Nob3dTcG90TWF4Q291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuX3Nob3dTcG90TWF4Q291bnRSZWZyZXNoVGltZSA9IDE7XHJcbiAgICAgICAgdGhpcy5fc2hvd1Nwb3RDb3VudCA9IFVzZXJkZWZhdWx0LmdldEludEZvcktleShcImxpZXlvdV9zaG93U3BvdENvdW50XCIsIDApO1xyXG4gICAgICAgIHRoaXMuX3Nob3dTcG90VGltZSA9IFVzZXJkZWZhdWx0LmdldEludEZvcktleShcImxpZXlvdV9zaG93U3BvdFRpbWVcIiwgMCk7XHJcbiAgICAgICAgdmFyIGRheVRpbWUgPSBnZXRUaW1lRGF5KCk7XHJcbiAgICAgICAgaWYgKGRheVRpbWUgIT0gVXNlcmRlZmF1bHQuZ2V0SW50Rm9yS2V5KCdsaWV5b3VfaW5pdERheScsIDApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3dTcG90Q291bnQgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLl9zaG93U3BvdFRpbWUgPSAwO1xyXG4gICAgICAgICAgICBVc2VyZGVmYXVsdC5zZXREYXRhRm9yS2V5KCdsaWV5b3Vfc2hvd1Nwb3RDb3VudCcsIDApO1xyXG4gICAgICAgICAgICBVc2VyZGVmYXVsdC5zZXREYXRhRm9yS2V5KCdsaWV5b3Vfc2hvd1Nwb3RUaW1lJywgMCk7XHJcbiAgICAgICAgICAgIFVzZXJkZWZhdWx0LnNldERhdGFGb3JLZXkoJ2xpZXlvdV9pbml0RGF5JywgZGF5VGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmV2ZW50RmxhZyA9IFVzZXJkZWZhdWx0LmdldEludEZvcktleSgnbGlleW91X2V2ZW50RmxhZycsIC0xKTtcclxuICAgICAgICB0aGlzLkdhbWVFdmVudEJhY2tzdGFnZVRpbWUgPSBbXVxyXG4gICAgICAgIHRoaXMuaGF2ZVRyYWNrID0gVXNlcmRlZmF1bHQuZ2V0SW50Rm9yS2V5KCdsaWV5b3VfaGF2ZVRyYWNrJywgMCk7XHJcbiAgICAgICAgdGhpcy5sb2dpbkJhc2VVcmwgPSAnaHR0cHM6Ly9hcHAuaWdhbWU1OC5jb20vbGlleW91L2NsaWVudCc7XHJcbiAgICAgICAgaWYgKCh3aW5kb3cubGlleW91X2xvZ2luVXJsICYmIHdpbmRvdy5saWV5b3VfbG9naW5VcmwgIT0gXCJvbGRcIikgfHwgdGhpcy5nZXRTeXNQbGF0Zm9ybV9zdHJpbmcoKSA9PSBcInd4XCIpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5sb2dpbkJhc2VVcmwgPSAnaHR0cHM6Ly9xZ2FtZS5pZ2FtZTU4LmNvbS9saWV5b3UvYXBpJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50cmFja0Jhc2VVcmwgPSB0aGlzLmxvZ2luQmFzZVVybDtcclxuICAgICAgICB0aGlzLmV2ZW50QmVnaW5UaW1lID0gW107XHJcbiAgICAgICAgdGhpcy5xR01vcmVfZGlhbG9nUGxheVJ1blR5cGUgPSBbMCwgMCwgMCwgMF07XHJcbiAgICAgICAgdGhpcy5fc2hvd1Nwb3RTdGFydFRpbWUgPSAxMDtcclxuICAgICAgICB0aGlzLl9pbnN0YWxsU2hvcnRjdXRUaW1lID0gNjA7XHJcbiAgICAgICAgdGhpcy5faW5zdGFsbFNob3J0Y3V0U3RhcnRUaW1lID0gMDtcclxuICAgICAgICB0aGlzLl9iZWdpbkdhbWVUaW1lID0gcGFyc2VJbnQoZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICAgICAgdGhpcy5fdXBJbnN0YWxsU2hvcnRjdXRUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmxldmVsQmVnaW5UaW1lID0gMDtcclxuICAgICAgICB0aGlzLmhpZGVUaW1lID0gMDtcclxuICAgICAgICB0aGlzLnBhbHlHYW1lQmFja3N0YWdlVGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5vbkhpZGUoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVUaW1lID0gcGFyc2VJbnQoZ2V0VGltZSgpIC8gMTAwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vblNob3coKCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgdGltZSA9IHBhcnNlSW50KGdldFRpbWUoKSAvIDEwMDApIC0gdGhpcy5oaWRlVGltZTtcclxuICAgICAgICAgICAgdGhpcy5wYWx5R2FtZUJhY2tzdGFnZVRpbWUgKz0gdGltZTtcclxuICAgICAgICAgICAgdmFyIGV2ZW50S2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuR2FtZUV2ZW50QmFja3N0YWdlVGltZSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRLZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVFdmVudEJhY2tzdGFnZVRpbWVbZXZlbnRLZXlzW2ldXSArPSB0aW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0VmVyc2lvbigpIHtcclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9LFxyXG4gICAgc2hvd0FwcEJveChvYmopIHsgfSxcclxuICAgIGdldFN5c1BsYXRmb3JtKCkgeyByZXR1cm4gLTI7IH0sXHJcbiAgICB2aWJyYXRlU2hvcnQoKSB7IH0sXHJcbiAgICB2aWJyYXRlTG9uZygpIHsgfSxcclxuICAgIHZpYnJhdGVDdXN0b20odGltZSkge1xyXG4gICAgICAgIHRoaXMudmlicmF0ZUxvbmcoKTtcclxuICAgIH0sXHJcbiAgICBoYXNJbnN0YWxsZWQoY2FsbEJhY2spIHsgfSxcclxuICAgIGluc3RhbGwob2JqKSB7IH0sXHJcbiAgICBnZXRCYXNlRGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9LFxyXG4gICAgcmVsb2FkKCkgeyB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiAg5b6u5L+hXHJcbiAgICAgKi9cclxuXHJcbiAgICBzaG93TW9yZUdhbWVMb2FkaW5nKGNhbGxCYWNrKSB7XHJcbiAgICAgICAgY2FsbEJhY2soKTtcclxuICAgIH0sXHJcbiAgICBzaG93UmVkUGFjayhvYmopIHsgfSxcclxuICAgIHNob3dSZWRJY29uKG9iaikgeyB9LFxyXG4gICAgc2hvd1JlY29tbWVuZEljb24ob2JqKSB7IH0sXHJcbiAgICBzaG93R2FtZVJlY29tbWVuZChjYWxsQmFjaykgeyB9LFxyXG4gICAgb25IaWRlKGZ1bikgeyB9LFxyXG4gICAgb25TaG93KGZ1bikgeyB9LFxyXG4gICAgZ2V0SGVscExldmVsKCkgeyByZXR1cm4gLTE7IH0sXHJcbiAgICBzaG93QmFubmVyKG9iaikgeyB9LFxyXG4gICAgc2hvd0Jhbm5lckN1c3RvbShvYmopIHsgfSxcclxuICAgIHNob3dCYW5uZXJCeUJvdHRvbShpZCkgeyB9LFxyXG4gICAgc2hvd0Jhbm5lckJ5VG9wKGlkKSB7IH0sXHJcbiAgICBoaWRlQmFubmVyKCkgeyB9LFxyXG4gICAgc2hvd1Jld2FyZGVkVmlkZW9BZChpZCwgY2xvc2VDYWxsQmFjaykge1xyXG4gICAgICAgIGNsb3NlQ2FsbEJhY2sodHJ1ZSk7XHJcbiAgICB9LFxyXG4gICAgYWRkTmF0aXZlQWQobm9kZSkgeyB9LFxyXG4gICAgY3VzdENsaWNrTmF0aXZlKG5vZGUpIHsgfSxcclxuICAgIGdldEF1dGhvcml6ZSgpIHsgfSxcclxuICAgIGxvZ2luKCkgeyB9LFxyXG4gICAgYWRkTG9jYWxSZXN1cnIoKSB7IH0sXHJcbiAgICB1c2VSZXN1cnIoKSB7IH0sXHJcbiAgICBtb2RpZnlJbnZpdGVGcmllbmQoZnJpZW5kSWQpIHsgfSxcclxuICAgIGRlbGV0ZUludml0ZUZyaWVuZChpZCkgeyB9LFxyXG4gICAgZ2V0SW52aXRlRnJpZW5kRGF0YShmbGFnLCBmdW4pIHsgfSxcclxuICAgIHNob3dJbnZpdGVGcmllbmQoX25vZGUsIF9jYWxsQmFjaykgeyB9LFxyXG4gICAgc2hvd0ludml0ZUZyaWVuZEZhaWx1cmUoX25vZGUpIHsgfSxcclxuICAgIGNoZWNrUmVzdXJyTnVtKCkgeyByZXR1cm4gMDsgfSxcclxuICAgIGNoZWNrUmVzdXJyTnVtXzIoKSB7IHJldHVybiAwOyB9LFxyXG4gICAgc2hhcmUob2JqKSB7IH0sXHJcbiAgICBzaGFyZUhlbHAobGV2ZWwpIHsgfSxcclxuICAgIHNoYXJlSGVscFN1Y2Nlc3MobGV2ZWwpIHsgfSxcclxuICAgIGhlbHBGcmllbmRTdWNjZXNzKGxldmVsKSB7IH0sXHJcbiAgICBnZXRJc0hhdmVGcmllbmRIZWxwTWUobGV2ZWwsIGZ1bikgeyB9LFxyXG5cclxuICAgIHNob3dBbGxSYW5raW5nTGF5ZXIob2JqKSB7IH0sXHJcbiAgICBzaG93RmFpbFJhbmtpbmdMYXllcihvYmopIHsgfSxcclxuICAgIHNldFJhbmtpbmdEYXRhKGtleSwgc2NvcmUpIHsgfSxcclxuICAgIHNldFdvcmxkUmFua0RhdGEoa2V5LCBzY29yZSkgeyB9LFxyXG4gICAgc2hvd0ZvcnVtKG9iaikgeyB9LFxyXG4gICAgY2xvc2VGb3J1bSgpIHsgfSxcclxuICAgIGp1bXBBcHAoZGF0YSwgdXJsLCBwYWdlLCBudW0pIHsgfSxcclxuICAgIG5ld0p1bXBBcHAob2JqKSB7IH0sXHJcbiAgICBzaG93U3BvdEJ5QmVnaW4oaXNIYXZlTmF0aXZlLCB0b3ApIHsgfSxcclxuICAgIHNob3dTcG90QnlQYXVzZShpc0hhdmVOYXRpdmUsIHRvcCkgeyB9LFxyXG4gICAgc2hvd1Nwb3RCeUZpbmlzaChpc0hhdmVOYXRpdmUsIHRvcCkgeyB9LFxyXG4gICAgc2hvd1ByYWlzZSgpIHsgfSxcclxuICAgIGdldFBhcmFtQnlPbmxpbmUoa2V5LCBkZWZhdWx0VikgeyByZXR1cm4gbnVsbDsgfSxcclxuICAgIGdldFNES1ZlcnNpb25DYW5Vc2UoZGF0YSkgeyByZXR1cm4gdHJ1ZTsgfSxcclxuICAgIGFkZFRvYXN0KF9ub2RlLCBzdHIsIF9jYWxsQmFjaykge1xyXG5cclxuICAgIH0sXHJcbiAgICBzaGFyZURpYWxvZyhfbm9kZSkgeyB9LFxyXG4gICAgYWRkR2V0TG9jYWtDYXJkRGlhbG9nKF9ub2RlKSB7IH0sXHJcbiAgICBnZXRPbmxpbmVTcHJpdGVGcmFtZSh1cmwsIGZ1bikge1xyXG4gICAgICAgIGlmICh1cmwgPT0gXCJcIikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBsb2FkRmlsZSA9IHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWQobG9hZEZpbGUsIGZ1bmN0aW9uIChlcnIsIHRleCkge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuKG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIHtub2RlOl9ub2RlLHg6eCx5OnksYWxpZ246MH0vLzAg5bGF5LitIC0xIOS4iyAxIOS4ilxyXG4gICAgICovXHJcbiAgICBzaG93R3Vlc3NZb3VMaWNrT25lKG9iaikge1xyXG5cclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIHtub2RlOl9ub2RlLHg6MCx5OjAsYWxpZ246MH0vLzAg5bGF5LitIC0xIOS4iyAxIOS4ilxyXG4gICAgICovXHJcbiAgICBzaG93R3Vlc3NZb3VMaWNrVG93KG9iaikge1xyXG5cclxuICAgIH0sXHJcbiAgICBzaG93R3Vlc3NZb3VMaWtlXzMob2JqKSB7XHJcblxyXG4gICAgfSxcclxuICAgIGp1bXBSZWZyZXNoQmFubmVyKG9iaikgeyB9LFxyXG4gICAgcmV0dXJuSG9tZUp1bXBHYW1lKCkgeyB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBmYWNlQm9va1xyXG4gICAgICovXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYW5kcm9pZCDmmK/lkKblvIDlkK/mn5DkuKrlip/og70gXHJcbiAgICAgKi9cclxuICAgIGlzT3BlbihrZXkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3dOYXRpdmVCYW5uZXIodG9wKSB7XHJcblxyXG4gICAgfSxcclxuICAgIGhpZGVOYXRpdmVCYW5uZXIoKSB7IH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAg5YW25LuWIFxyXG4gICAgICovXHJcbiAgICBjYWxsQW5kcm9pZChhY3Rpb24pIHsgfSxcclxuICAgIC8qKlxyXG4gICAgICogIOinhumikSBcclxuICAgICAqL1xyXG4gICAgY2FsbEFuZHJvaWRfMihhY3Rpb24sIGZ1blMpIHsgfSxcclxuICAgIC8qKlxyXG4gICAgICog5LuY6LS5ICDlsI/muLjmiI/kuInlhYPlpI3mtLsgYWN0aW9uID0gOTk5OSBcclxuICAgICAqICBhY3Rpb24gICA0MDAwLTUwMDAgXHJcbiAgICAgKi9cclxuICAgIGNhbGxQYXkoYWN0aW9uLCBmdW5TKSB7IH0sXHJcbiAgICAvKipcclxuICAgICAqIOi/lOWbnuS4u+mhtVxyXG4gICAgICovXHJcbiAgICBiYWNrSG9tZSgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5aW96K+EXHJcbiAgICAgKi9cclxuICAgIHNob3dSYXRlKCkgeyB9LFxyXG5cclxuICAgIGdvdG9TbWFsbEdhbWUoZ2FtZU5hbWUpIHsgfSxcclxuICAgIGdhbWVBY3Rpb24oZ2FtZU5hbWUpIHsgfSxcclxuICAgIGpuaUxldmVsKGxldmVsLCBtb2RlLCBhY3Rpb24pIHtcclxuICAgICAgICAvLyBpZihsaWV5b3VfYXBwaWQgIT0gXCJcIil7XHJcbiAgICAgICAgLy8gICAgIHRyeSB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZihhY3Rpb24gPT0gMCl7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY29jb3NBbmFseXRpY3MuQ0FMZXZlbHMuYmVnaW4oe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBsZXZlbCA6IG1vZGUgKyBsZXZlbCAgLy8g5YWz5Y2h5ZCN56ewXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfSlcclxuICAgICAgICAvLyAgICAgICAgIH1lbHNlIGlmKGFjdGlvbiA9PSAxKXtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjb2Nvc0FuYWx5dGljcy5DQUxldmVscy5jb21wbGV0ZSh7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGxldmVsIDogbW9kZSArIGxldmVsICAvLyDlhbPljaHlkI3np7BcclxuICAgICAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgICAgIC8vICAgICAgICAgfWVsc2UgaWYoYWN0aW9uID09IDIpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvY29zQW5hbHl0aWNzLkNBTGV2ZWxzLmZhaWxlZCh7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGxldmVsIDogbW9kZSArIGxldmVsLCAgIC8vIOWFs+WNoeWQjeensFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICByZWFzb24gOiAnJ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgLy8gICAgICAgICB9ICAgIFxyXG4gICAgICAgIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHRoaXMuc2V0TGV2ZWxUcmFjayhsZXZlbCwgbW9kZSwgYWN0aW9uKTtcclxuICAgIH0sXHJcbiAgICBzZXRHYW1lRXZlbnQoZXZlbnQsIGFjdGlvbiA9IC0xKSB7XHJcbiAgICAgICAgdmFyIHRpbWUgPSAwO1xyXG4gICAgICAgIGlmIChhY3Rpb24gPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLkdhbWVFdmVudEJhY2tzdGFnZVRpbWVbZXZlbnRdID0gMDtcclxuICAgICAgICAgICAgdGhpcy5ldmVudEJlZ2luVGltZVtldmVudF0gPSBwYXJzZUludChnZXRUaW1lKCkgLyAxMDAwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZXZlbnRCZWdpblRpbWVbZXZlbnRdKSB7XHJcbiAgICAgICAgICAgIHRpbWUgPSBwYXJzZUludChnZXRUaW1lKCkgLyAxMDAwKSAtIHRoaXMuZXZlbnRCZWdpblRpbWVbZXZlbnRdIC0gdGhpcy5HYW1lRXZlbnRCYWNrc3RhZ2VUaW1lW2V2ZW50XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYobGlleW91X2FwcGlkICE9IFwiXCIpe1xyXG4gICAgICAgIC8vICAgICB0cnkge1xyXG4gICAgICAgIC8vICAgICAgICAgY29jb3NBbmFseXRpY3MuQ0FDdXN0b21FdmVudC5vblN0YXJ0ZWQoJ2V2ZW50Jywge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIG5hbWU6ZXZlbnQsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb24sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGltZTp0aW1lXHJcbiAgICAgICAgLy8gICAgICAgICB9KTtcclxuICAgICAgICAvLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLnNldEdhbWVFdmVudFRyYWNrKGV2ZW50LCBhY3Rpb24sIHRpbWUpO1xyXG4gICAgfSxcclxuICAgIHNob3dNb2RhbChvYmopIHsgfSxcclxuICAgIHNob3dUb2FzdCh0aXRsZSkge1xyXG4gICAgICAgIGxpZXlvdV9pbnRlcmZhY2Uuc2hvd1RvYXN0KHRpdGxlKTtcclxuICAgIH0sXHJcbiAgICBoaWRlVG9hc3QoKSB7IH0sXHJcbiAgICBzaG93TG9hZGluZyh0aXRsZSkgeyB9LFxyXG4gICAgaGlkZUxvYWRpbmcoKSB7IH0sXHJcbiAgICBnZXRIYXZlVmlkZW8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgZ2V0U2hhcmVPclZpZWRvKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdldEhhdmVWaWRlbygpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfSxcclxuICAgIGdldEp1bXBCdG5IYXZlTW92ZSgpIHsgcmV0dXJuIDA7IH0sXHJcblxyXG4gICAgYWRkTHVQaW5nQnRuKG9iaikgeyB9LFxyXG4gICAgYmVnaW5MdVBpbmcodGltZSwgY2FsbEJhY2spIHsgfSxcclxuICAgIHBhdXNlTHVQaW5nKCkgeyB9LFxyXG4gICAgcmVzdW1lTHVQaW5nKCkgeyB9LFxyXG4gICAgc3RvcEx1UGluZyhpc1NoYXJlKSB7IH0sXHJcbiAgICBzaGFyZVZkKGNhbGxCYWNrKSB7IH0sXHJcbiAgICBhZGRTbWFsbEdhbWVSZXR1cm5CdG4ob2JqKSB7IH0sXHJcbiAgICBzaG93UmVjb21tZW5kQmVnaW4ob2JqKSB7XHJcbiAgICAgICAgaWYgKG9iai5jYWxsQmFjaykge1xyXG4gICAgICAgICAgICBvYmouY2FsbEJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2hvd1JlY29tbWVuZEZpbmlzaChvYmopIHtcclxuICAgICAgICBpZiAob2JqLmNhbGxCYWNrKSB7XHJcbiAgICAgICAgICAgIG9iai5jYWxsQmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93QXJhcmRHb2xkR3JpZChvYmopIHtcclxuICAgICAgICBpZiAob2JqLmNhbGxCYWNrKSB7XHJcbiAgICAgICAgICAgIG9iai5jYWxsQmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93QXJhcmRHb2xkU3RyaXAob2JqKSB7XHJcbiAgICAgICAgaWYgKG9iai5jYWxsQmFjaykge1xyXG4gICAgICAgICAgICBvYmouY2FsbEJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaW5zdGFsbFNob3J0Y3V0KG9iaikgeyB9LFxyXG4gICAgc2hvd1JlY29tbWVuZEF3YXJkSWNvbihvYmopIHsgfSxcclxuICAgIHNldERhdGFGb3JIdHRwOiBmdW5jdGlvbiAodXJsLCBmdW4pIHtcclxuICAgICAgICAvL+aPkOS6pOaVsOaNruWIsOacjeWKoeWZqCDml6Dov5Tlm57lgLwgXHJcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0geGhyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZSA9PSAnLTEnKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChyZXNwb25zZSA9PSAnLTInKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZnVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bihyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci50aW1lb3V0ID0gNTAwMDtcclxuICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgfSxcclxuICAgIHNodWZmbGU6IGZ1bmN0aW9uIChhcnJheSkge1xyXG4gICAgICAgIHZhciBpbnB1dCA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaW5wdXQucHVzaChhcnJheVtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIGlucHV0Lmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHZhciB0ZW1wID0gaW5wdXRbaW5kZXhdO1xyXG4gICAgICAgICAgICBpbnB1dFtpbmRleF0gPSBpbnB1dFtpXTtcclxuICAgICAgICAgICAgaW5wdXRbaV0gPSB0ZW1wO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9LFxyXG4gICAgZ2V0QWREYXRhKGZpcnN0RGF0YSkge1xyXG4gICAgICAgIHZhciBpbnB1dCA9IFtdO1xyXG4gICAgICAgIHZhciBpbnB1dDEgPSBbXTtcclxuICAgICAgICB2YXIgaW5wdXQyID0gW107XHJcbiAgICAgICAgdmFyIGlucHV0MyA9IFtdO1xyXG4gICAgICAgIHZhciBhcnJheSA9IHRoaXMucUdNb3JlR2FtZURhdGE7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IGFycmF5W2ldO1xyXG4gICAgICAgICAgICBpZiAoVXNlcmRlZmF1bHQuZ2V0Qm9vbEZvcktleSgnYWdfbW9yZUdhbWVfaXNUb3VjaF8nICsgZGF0YS5pZCwgZmFsc2UpKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dDMucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBpc1B1c2ggPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZmlyc3REYXRhLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpcnN0RGF0YVtqXSA9PSBkYXRhLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0MS5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1B1c2ggPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNQdXNoID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQyLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQxID0gdGhpcy5zaHVmZmxlKGlucHV0MSk7XHJcbiAgICAgICAgaW5wdXQyID0gdGhpcy5zaHVmZmxlKGlucHV0Mik7XHJcbiAgICAgICAgaW5wdXQzID0gdGhpcy5zaHVmZmxlKGlucHV0Myk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQxLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlucHV0LnB1c2goaW5wdXQxW2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dDIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaW5wdXQucHVzaChpbnB1dDJbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0My5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpbnB1dC5wdXNoKGlucHV0M1tpXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5wdXQ7XHJcbiAgICB9LFxyXG4gICAgaGlkZU1vcmVHYW1lSWNvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5tb3JlR2FtZVNpZGUgJiYgdGhpcy5tb3JlR2FtZVNpZGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vcmVHYW1lU2lkZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1vcmVHYW1lSWNvbkFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tb3JlR2FtZUljb25BcnJbaV0gJiYgdGhpcy5tb3JlR2FtZUljb25BcnJbaV0uaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb3JlR2FtZUljb25BcnJbaV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2hvd01vcmVHYW1lSWNvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5tb3JlR2FtZVNpZGUgJiYgdGhpcy5tb3JlR2FtZVNpZGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vcmVHYW1lU2lkZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubW9yZUdhbWVJY29uQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vcmVHYW1lSWNvbkFycltpXSAmJiB0aGlzLm1vcmVHYW1lSWNvbkFycltpXS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vcmVHYW1lSWNvbkFycltpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNob3dNb3JlR2FtZUJ5SWNvbihvYmopIHtcclxuICAgICAgICBpZiAodGhpcy5iYXNlX0lzU2hlbkhlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlbGVhc2VQbGF0Zm9ybSA9PSAncXEnICYmICh0aGlzLmJhc2VfSXNTaGVuSGUgfHwgIXRoaXMuY2FuU2hvd0FwcEJveCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaWV5b3Vfc2hvd0xvZygnbGlleW91X0Jhc2VNYW5hZ2VyLS0tLS0tLS0tLS0tLS0gc2hvd01vcmVHYW1lQnlJY29uICcgKyB0aGlzLnFHTW9yZUdhbWVEYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgaWYgKHRoaXMucUdNb3JlR2FtZURhdGEubGVuZ3RoID09IDAgfHwgIXRoaXMucUdNb3JlX21haW5Td2l0Y2ggfHwgIXRoaXMucUdNb3JlX2ljb25QbGF5KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9iai5ydW5UeXBlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBvYmoucnVuVHlwZSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBmTm9kZSA9IG9iai5ub2RlID8gb2JqLm5vZGUgOiBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xyXG4gICAgICAgIGlmIChjYy5maW5kKCdsaWV5b3VfbW9yZUdhbWVCeUljb24nLCBmTm9kZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbm9kZVggPSAob2JqLnggIT0gdW5kZWZpbmVkKSA/IG9iai54IDogMDsvLyhjYy53aW5TaXplLndpZHRoLzIpO1xyXG4gICAgICAgIHZhciBub2RlWSA9IChvYmoueSAhPSB1bmRlZmluZWQpID8gb2JqLnkgOiAwOy8vKGNjLndpblNpemUuaGVpZ2h0LzIpO1xyXG4gICAgICAgIHZhciB1cmwgPSAnU0RLL21vZHVsZS9xZ2FtZU1vcmVHYW1lL21vcmVHYW1lX2ljb24nO1xyXG4gICAgICAgIGlmIChmTm9kZSAmJiBmTm9kZS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgIHZhciBub2RlID0gbGlleW91X21vcmVHYW1lX2ljb24oKTtcclxuICAgICAgICAgICAgbm9kZS5uYW1lID0gJ2xpZXlvdV9tb3JlR2FtZUJ5SWNvbic7XHJcbiAgICAgICAgICAgIHZhciBpc0FscmVhZHlQdXNoID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tb3JlR2FtZUljb25BcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5tb3JlR2FtZUljb25BcnJbaV0uaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9yZUdhbWVJY29uQXJyW2ldID0gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBpc0FscmVhZHlQdXNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWlzQWxyZWFkeVB1c2gpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9yZUdhbWVJY29uQXJyLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9iai5zaWRlKSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG5vZGUuc2NhbGUgPSBvYmouc2lkZSAvIDEzMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tb2JqLnNpZGUtLS0tLVwiLG9iai5zaWRlKVxyXG4gICAgICAgICAgICBmTm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgbm9kZS54ID0gbm9kZVg7XHJcbiAgICAgICAgICAgIG5vZGUueSA9IG5vZGVZO1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMucUdNb3JlR2FtZURhdGE7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc09uZVNob3dNb3JlR2FtZUljb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNPbmVTaG93TW9yZUdhbWVJY29uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vcmVHYW1lSWNvbkluZGV4ID0gcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIGRhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIHZhciBpc0JyZWFrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMucUdNb3JlX2Jpel9pY29uUGxheS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXS5pZCA9PSB0aGlzLnFHTW9yZV9iaXpfaWNvblBsYXlbal0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vcmVHYW1lSWNvbkluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQnJlYWsgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQnJlYWspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd01vcmVHYW1lSWNvbkluZGV4ID0gdGhpcy5zaG93TW9yZUdhbWVJY29uSW5kZXggJSBkYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoJ2xpZXlvdV9xR2FtZW1vcmVHYW1lX2ljb24nKS5zZXREYXRhKGRhdGFbdGhpcy5zaG93TW9yZUdhbWVJY29uSW5kZXhdLCAyKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93TW9yZUdhbWVJY29uSW5kZXgrKztcclxuICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUodGhpcy5xR01vcmVfcmVmcmVzaFRpbWUpLCBjYy5jYWxsRnVuYygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb3JlR2FtZUljb25JbmRleCA9IHRoaXMuc2hvd01vcmVHYW1lSWNvbkluZGV4ICUgZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudCgnbGlleW91X3FHYW1lbW9yZUdhbWVfaWNvbicpLnNldERhdGEoZGF0YVt0aGlzLnNob3dNb3JlR2FtZUljb25JbmRleF0sIDIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9yZUdhbWVJY29uSW5kZXgrKztcclxuICAgICAgICAgICAgfSkpKSk7XHJcbiAgICAgICAgICAgIGlmIChvYmoucnVuVHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnJvdGF0ZUJ5KDAuMDMsIC0xNSksIGNjLnJvdGF0ZUJ5KDAuMDMsIDApLCBjYy5yb3RhdGVCeSgwLjAzLCAxNSksIGNjLnJvdGF0ZUJ5KDAuMDMsIDApLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnJvdGF0ZUJ5KDAuMDMsIC0xMCksIGNjLnJvdGF0ZUJ5KDAuMDMsIDApLCBjYy5yb3RhdGVCeSgwLjAzLCAxMCksIGNjLnJvdGF0ZUJ5KDAuMDMsIDApLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnJvdGF0ZUJ5KDAuMDMsIC01KSwgY2Mucm90YXRlQnkoMC4wMywgMCksIGNjLnJvdGF0ZUJ5KDAuMDMsIDUpLCBjYy5yb3RhdGVCeSgwLjAzLCAwKSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMiArIE1hdGgucmFuZG9tKCkgKiAxKSkpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNob3dNb3JlR2FtZUJ5QmFubmVyKG9iaikge1xyXG4gICAgICAgIC8vIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dNb3JlR2FtZUdyaWQoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YWxsU2hvcnRjdXQoeyBzaG9hRGlhbG9nOiB0cnVlIH0pO1xyXG4gICAgICAgIH0sIDUwMDApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiLS0tLS0tLS0tLS0tLS0tLS0tLXRoaXMucUdNb3JlR2FtZURhdGEubGVuZ3RoLS0tXCIsIHRoaXMucUdNb3JlR2FtZURhdGEubGVuZ3RoKVxyXG4gICAgICAgIGxpZXlvdV9zaG93TG9nKCdsaWV5b3VfQmFzZU1hbmFnZXItLS0tLS0tLS0tLS0tLSBzaG93TW9yZUdhbWVCeUJhbm5lciAnICsgdGhpcy5xR01vcmVHYW1lRGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIGlmICh0aGlzLmJhc2VfSXNTaGVuSGUgfHwgdGhpcy5xR01vcmVHYW1lRGF0YS5sZW5ndGggPT0gMCB8fCAhdGhpcy5xR01vcmVfbWFpblN3aXRjaCB8fCAhdGhpcy5xR01vcmVfYmFubmVyUGxheSkge1xyXG4gICAgICAgICAgICB2YXIgc2NhbGUgPSAwLjg7XHJcbiAgICAgICAgICAgIGlmIChsaWV5b3VfU2RrTWFuYWdlci5zZGtXaW5TaXplLndpZHRoID4gbGlleW91X1Nka01hbmFnZXIuc2RrV2luU2l6ZS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHNjYWxlID0gMC40O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dCYW5uZXJDdXN0b20oeyBzY2FsZTogc2NhbGUgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oaWRlQmFubmVyKCk7XHJcbiAgICAgICAgdmFyIGZOb2RlID0gb2JqLm5vZGUgPyBvYmoubm9kZSA6IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XHJcbiAgICAgICAgaWYgKGNjLmZpbmQoJ2xpZXlvdV9tb3JlR2FtZUJ5QmFubmVyJywgZk5vZGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG5vZGVYID0gKG9iai54ICE9IHVuZGVmaW5lZCkgPyBvYmoueCA6IChjYy53aW5TaXplLndpZHRoIC8gMik7XHJcbiAgICAgICAgdmFyIG5vZGVZID0gKG9iai55ICE9IHVuZGVmaW5lZCkgPyBvYmoueSA6IDA7XHJcbiAgICAgICAgdmFyIHVybCA9ICdTREsvbW9kdWxlL3FnYW1lTW9yZUdhbWUvbW9yZUdhbWVfYmFubmVyJztcclxuICAgICAgICBpZiAoZk5vZGUgJiYgZk5vZGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IGxpZXlvdV9tb3JlR2FtZV9iYW5uZXIoKTtcclxuICAgICAgICAgICAgbm9kZS5uYW1lID0gJ2xpZXlvdV9tb3JlR2FtZUJ5QmFubmVyJztcclxuICAgICAgICAgICAgdGhpcy5tb3JlR2FtZUJhbm5lciA9IG5vZGU7XHJcbiAgICAgICAgICAgIGZOb2RlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICBub2RlLnggPSBub2RlWDtcclxuICAgICAgICAgICAgbm9kZS55ID0gbm9kZVk7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5nZXRBZERhdGEodGhpcy5xR01vcmVfYml6X2Jhbm5lclBsYXkpO1xyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudCgnbGlleW91X3FHYW1lbW9yZUdhbWVfbW9yZScpLnNldERhdGEoZGF0YSwgdGhpcy5xR01vcmVfaXNSdW4pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93TW9yZUdhbWUob2JqKSB7XHJcbiAgICAgICAgaWYgKHJlbGVhc2VQbGF0Zm9ybSA9PSAncXEnICYmICh0aGlzLmJhc2VfSXNTaGVuSGUgfHwgIXRoaXMuY2FuU2hvd0FwcEJveCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaWV5b3Vfc2hvd0xvZygnbGlleW91X0Jhc2VNYW5hZ2VyLS0tLS0tLS0tLS0tLS0gc2hvd01vcmVHYW1lICcgKyB0aGlzLnFHTW9yZUdhbWVEYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgaWYgKHRoaXMucUdNb3JlR2FtZURhdGEubGVuZ3RoID09IDAgfHwgIXRoaXMucUdNb3JlX21haW5Td2l0Y2ggfHwgIXRoaXMucUdNb3JlX21vcmVQbGF5KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGZOb2RlID0gb2JqLm5vZGUgPyBvYmoubm9kZSA6IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XHJcbiAgICAgICAgaWYgKGNjLmZpbmQoJ2xpZXlvdV9tb3JlR2FtZScsIGZOb2RlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBub2RlWCA9IChvYmoueCAhPSB1bmRlZmluZWQpID8gb2JqLnggOiAwOy8vKGNjLndpblNpemUud2lkdGgvMik7XHJcbiAgICAgICAgdmFyIG5vZGVZID0gKG9iai55ICE9IHVuZGVmaW5lZCkgPyBvYmoueSA6IDA7Ly8oY2Mud2luU2l6ZS5oZWlnaHQvMik7XHJcbiAgICAgICAgdmFyIHVybCA9ICdTREsvbW9kdWxlL3FnYW1lTW9yZUdhbWUvbW9yZUdhbWVfYnRuJzsvL21vcmVHYW1lX21vcmVcclxuICAgICAgICBpZiAoZk5vZGUgJiYgZk5vZGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IGxpZXlvdV9tb3JlR2FtZV9idG4oKTtcclxuICAgICAgICAgICAgbm9kZS5uYW1lID0gJ2xpZXlvdV9tb3JlR2FtZSc7XHJcbiAgICAgICAgICAgIGZOb2RlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICBub2RlLnggPSBub2RlWDtcclxuICAgICAgICAgICAgbm9kZS55ID0gbm9kZVk7XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KCdsaWV5b3VfcUdhbWVNb3JlR2FtZV9zaG93TW9yZScpLnNldERhdGEoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy9pZih0aGlzLmdldFN5c1BsYXRmb3JtX3N0cmluZygpID09ICd0dCcpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICB0aGlzLm5ld0p1bXBBcHAoKTtcclxuICAgICAgICAgICAgICAgIC8vICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIC8vfVxyXG4gICAgICAgICAgICAgICAgdmFyIG5vZGUgPSBsaWV5b3VfbW9yZUdhbWVfbW9yZSgpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS54ID0gY2Mud2luU2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgICAgICBub2RlLnkgPSBjYy53aW5TaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmdldEFkRGF0YSh0aGlzLnFHTW9yZV9iaXpfbW9yZVBsYXkpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoJ2xpZXlvdV9xR2FtZW1vcmVHYW1lX21vcmUnKS5zZXREYXRhKGRhdGEsIHRoaXMucUdNb3JlX2lzUnVuKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaGlkZU1vcmVHYW1lU2lkZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5tb3JlR2FtZVNpZGUgJiYgdGhpcy5tb3JlR2FtZVNpZGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vcmVHYW1lU2lkZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2hvd01vcmVHYW1lU2lkZShvYmopIHtcclxuICAgICAgICBpZiAodGhpcy5iYXNlX0lzU2hlbkhlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubW9yZUdhbWVTaWRlICYmIHRoaXMubW9yZUdhbWVTaWRlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tb3JlR2FtZVNpZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVsZWFzZVBsYXRmb3JtID09ICdxcScgJiYgKHRoaXMuYmFzZV9Jc1NoZW5IZSB8fCAhdGhpcy5jYW5TaG93QXBwQm94KSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpZXlvdV9zaG93TG9nKCdsaWV5b3VfQmFzZU1hbmFnZXItLS0tLS0tLS0tLS0tLSBzaG93TW9yZUdhbWVTaWRlICcgKyB0aGlzLnFHTW9yZUdhbWVEYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgaWYgKHRoaXMucUdNb3JlR2FtZURhdGEubGVuZ3RoID09IDAgfHwgIXRoaXMucUdNb3JlX21haW5Td2l0Y2ggfHwgIXRoaXMucUdNb3JlX2Zsb2F0UGxheSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBmTm9kZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XHJcbiAgICAgICAgdmFyIHNpZGVUeXBlID0gKG9iai5zaWRlVHlwZV9yaWdodCA9PSB1bmRlZmluZWQpID8gZmFsc2UgOiBvYmouc2lkZVR5cGVfcmlnaHQ7XHJcbiAgICAgICAgdmFyIG5vZGVZID0gKG9iai55ICE9IHVuZGVmaW5lZCkgPyBvYmoueSA6IDA7XHJcbiAgICAgICAgdmFyIHVybCA9ICdTREsvbW9kdWxlL3FnYW1lTW9yZUdhbWUvbW9yZUdhbWVfc2lkZSc7XHJcbiAgICAgICAgaWYgKGZOb2RlICYmIGZOb2RlLmlzVmFsaWQpIHtcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSBsaWV5b3VfbW9yZUdhbWVfc2lkZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vcmVHYW1lU2lkZSA9IG5vZGU7XHJcbiAgICAgICAgICAgIGZOb2RlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICBpZiAob2JqLmlzUGVyc2lzdCkge1xyXG4gICAgICAgICAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbm9kZS55ID0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZ2V0QWREYXRhKHRoaXMucUdNb3JlX2Jpel9mbG9hdFBsYXkpO1xyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudCgnbGlleW91X3FHYW1lbW9yZUdhbWVfbW9yZScpLnNldERhdGEoZGF0YSwgdGhpcy5xR01vcmVfaXNSdW4sIHNpZGVUeXBlLCBub2RlWSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNob3dNb3JlR2FtZU1pZGRsZV90aHJlZShvYmopIHtcclxuICAgICAgICBpZiAocmVsZWFzZVBsYXRmb3JtID09ICdxcScgJiYgKHRoaXMuYmFzZV9Jc1NoZW5IZSB8fCAhdGhpcy5jYW5TaG93QXBwQm94KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpZXlvdV9zaG93TG9nKCdsaWV5b3VfQmFzZU1hbmFnZXItLS0tLS0tLS0tLS0tLSBzaG93TW9yZUdhbWVNaWRkbGVfdGhyZWUgJyArIHRoaXMucUdNb3JlR2FtZURhdGEubGVuZ3RoKTtcclxuICAgICAgICBpZiAodGhpcy5xR01vcmVHYW1lRGF0YS5sZW5ndGggPT0gMCB8fCAhdGhpcy5xR01vcmVfbWFpblN3aXRjaCB8fCAhdGhpcy5xR01vcmVfZGlhbG9nUGxheTMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5zaG93TW9yZUdhbWVNaWRkbGUob2JqLCB0aGlzLnFHTW9yZV9iaXpfZGlhbG9nUGxheTMsIDMpO1xyXG4gICAgfSxcclxuICAgIHNob3dNb3JlR2FtZU1pZGRsZV90d28ob2JqKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9tb3JlR2FtZU9yTmF0aXZlVHlwZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vcmVHYW1lU2hvd05hdGl2ZSA9ICF0aGlzLl9tb3JlR2FtZVNob3dOYXRpdmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9tb3JlR2FtZVNob3dOYXRpdmUgJiYgdGhpcy5zaG93TmF0aXZlQWRfYmlnKG9iaikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZWxlYXNlUGxhdGZvcm0gPT0gJ3FxJyAmJiAodGhpcy5iYXNlX0lzU2hlbkhlIHx8ICF0aGlzLmNhblNob3dBcHBCb3gpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGlleW91X3Nob3dMb2coJ2xpZXlvdV9CYXNlTWFuYWdlci0tLS0tLS0tLS0tLS0tIHNob3dNb3JlR2FtZU1pZGRsZV90d28gJyArIHRoaXMucUdNb3JlR2FtZURhdGEubGVuZ3RoKTtcclxuICAgICAgICBpZiAodGhpcy5xR01vcmVHYW1lRGF0YS5sZW5ndGggPT0gMCB8fCAhdGhpcy5xR01vcmVfbWFpblN3aXRjaCB8fCAhdGhpcy5xR01vcmVfZGlhbG9nUGxheTIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hvd05hdGl2ZUFkX2JpZyhvYmopO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLnNob3dNb3JlR2FtZU1pZGRsZShvYmosdGhpcy5xR01vcmVfYml6X2RpYWxvZ1BsYXkyLDIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNob3dNb3JlR2FtZU1pZGRsZShvYmosIHRoaXMucUdNb3JlX2Jpel9kaWFsb2dQbGF5MiwgMyk7XHJcbiAgICB9LFxyXG4gICAgc2hvd01vcmVHYW1lTWlkZGxlX29uZShvYmopIHtcclxuICAgICAgICBpZiAocmVsZWFzZVBsYXRmb3JtID09ICdxcScgJiYgKHRoaXMuYmFzZV9Jc1NoZW5IZSB8fCAhdGhpcy5jYW5TaG93QXBwQm94KSkge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsaWV5b3Vfc2hvd0xvZygnbGlleW91X0Jhc2VNYW5hZ2VyLS0tLS0tLS0tLS0tLS0gc2hvd01vcmVHYW1lTWlkZGxlX29uZSAnICsgdGhpcy5xR01vcmVHYW1lRGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIGlmICh0aGlzLnFHTW9yZUdhbWVEYXRhLmxlbmd0aCA9PSAwIHx8ICF0aGlzLnFHTW9yZV9tYWluU3dpdGNoIHx8ICF0aGlzLnFHTW9yZV9kaWFsb2dQbGF5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JqLnR5cGUgPSAxO1xyXG4gICAgICAgIHRoaXMuc2hvd01vcmVHYW1lTWlkZGxlKG9iaiwgdGhpcy5xR01vcmVfYml6X2RpYWxvZ1BsYXksIDEpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuICAgIHNob3dNb3JlR2FtZU1pZGRsZShvYmosIGFycmF5LCB0eXBlKSB7XHJcbiAgICAgICAgdmFyIGZOb2RlID0gb2JqLm5vZGUgPyBvYmoubm9kZSA6IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XHJcbiAgICAgICAgaWYgKGNjLmZpbmQoJ2xpZXlvdV9tb3JlR2FtZUJ5TWlkZGxlJyArIHR5cGUsIGZOb2RlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBub2RlWCA9IChvYmoueCAhPSB1bmRlZmluZWQpID8gb2JqLnggOiAwOy8vKGNjLndpblNpemUud2lkdGgvMik7XHJcbiAgICAgICAgdmFyIG5vZGVZID0gKG9iai55ICE9IHVuZGVmaW5lZCkgPyBvYmoueSA6IDA7Ly8oY2Mud2luU2l6ZS5oZWlnaHQvMik7XHJcbiAgICAgICAgaWYgKCFvYmoucnVuVHlwZSkge1xyXG4gICAgICAgICAgICBvYmoucnVuVHlwZSA9IDQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnFHTW9yZV9kaWFsb2dQbGF5UnVuVHlwZVt0eXBlXSkge1xyXG4gICAgICAgICAgICBvYmoucnVuVHlwZSA9IHRoaXMucUdNb3JlX2RpYWxvZ1BsYXlSdW5UeXBlW3R5cGVdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZk5vZGUgJiYgZk5vZGUuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICB2YXIgbm9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgIG5vZGUgPSBsaWV5b3VfbW9yZUdhbWVfbWlkX29uZSh0eXBlLCBvYmouaGF2ZVRpdGxlLCBvYmoudGl0bGVUeXBlLCBvYmouc2NhbGUpO1xyXG4gICAgICAgICAgICBub2RlLm5hbWUgPSAnbGlleW91X21vcmVHYW1lQnlNaWRkbGUnICsgdHlwZTtcclxuXHJcbiAgICAgICAgICAgIG5vZGUueCA9IG5vZGVYO1xyXG4gICAgICAgICAgICBub2RlLnkgPSBub2RlWTtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmdldEFkRGF0YShhcnJheSk7XHJcbiAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KCdsaWV5b3VfcUdhbWVtb3JlR2FtZV9taWQnKS5zZXREYXRhKGRhdGEsIHRoaXMucUdNb3JlX2lzUnVuLCB0aGlzLnFHTW9yZV9yZWZyZXNoVGltZSwgb2JqLnJ1blR5cGUpO1xyXG4gICAgICAgICAgICAvL29wcG8g6ZqQ6JePYmFubmVyXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd05hdGl2ZUhpZGVCYW5uZXIobm9kZSk7XHJcbiAgICAgICAgICAgIGZOb2RlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgc2hvd05hdGl2ZUhpZGVCYW5uZXIobm9kZSkgeyB9LFxyXG4gICAgc2V0SGF2ZVRyYWNrKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fbGlleW91X29ubGluZV9wYXJhbTtcclxuICAgICAgICAgICAgaWYgKFVzZXJkZWZhdWx0LmdldEludEZvcktleSgnbGlleW91X2hhdmVUcmFjaycsIDApID09IDAgJiYgZGF0YS50cmFja051bSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgKiAxMDAgPD0gTnVtYmVyKGRhdGEudHJhY2tOdW0pICYmIHRoaXMubmV3UGxheWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXZlVHJhY2sgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJkZWZhdWx0LnNldERhdGFGb3JLZXkoJ2xpZXlvdV9oYXZlVHJhY2snLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldExldmVsVHJhY2soLTEsICd0cmFjaycsIC0xKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXZlVHJhY2sgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJkZWZhdWx0LnNldERhdGFGb3JLZXkoJ2xpZXlvdV9oYXZlVHJhY2snLCAyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmV2ZW50RmxhZyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50RmxhZyA9IE51bWJlcihkYXRhLmV2ZW50RmxhZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgVXNlcmRlZmF1bHQuc2V0RGF0YUZvcktleSgnbGlleW91X2V2ZW50RmxhZycsIHRoaXMuZXZlbnRGbGFnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldFN3aXRjaERhdGEoZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhLmNsb3NlUmVkUGFjayAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2xvc2VSZWRQYWNrID0gZGF0YS5jbG9zZVJlZFBhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhLnRyYWNrQmFzZVVybCkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLnRyYWNrQmFzZVVybCA9IGRhdGEudHJhY2tCYXNlVXJsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YS5pbnN0YWxsU2hvcnRjdXRTdGFydFRpbWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbGxTaG9ydGN1dFN0YXJ0VGltZSA9IE51bWJlcihkYXRhLmluc3RhbGxTaG9ydGN1dFN0YXJ0VGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhLnNob3dTcG90TWF4Q291bnQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Nob3dTcG90TWF4Q291bnQgPSBOdW1iZXIoZGF0YS5zaG93U3BvdE1heENvdW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEuc2hvd1Nwb3RNYXhDb3VudFJlZnJlc2hUaW1lICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zaG93U3BvdE1heENvdW50UmVmcmVzaFRpbWUgPSBOdW1iZXIoZGF0YS5zaG93U3BvdE1heENvdW50UmVmcmVzaFRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YS5uYXRpdmVMb2FkRGlhbG9nVGltZSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fbmF0aXZlTG9hZERpYWxvZ1RpbWUgPSBOdW1iZXIoZGF0YS5uYXRpdmVMb2FkRGlhbG9nVGltZSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKGRhdGEubW9yZUdhbWVPck5hdGl2ZVR5cGUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21vcmVHYW1lT3JOYXRpdmVUeXBlID0gTnVtYmVyKGRhdGEubW9yZUdhbWVPck5hdGl2ZVR5cGUpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fbW9yZUdhbWVPck5hdGl2ZVR5cGUgPT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW9yZUdhbWVTaG93TmF0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YS5jYW5TaG93TW9yZUdhbWVHcmlkICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jYW5TaG93TW9yZUdhbWVHcmlkID0gZGF0YS5jYW5TaG93TW9yZUdhbWVHcmlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRhdGEuaXNTeXNJbnN0YWxsU2hvcnRDdXQgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTeXNJbnN0YWxsU2hvcnRDdXQgPSBkYXRhLmlzU3lzSW5zdGFsbFNob3J0Q3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLl9tb3JlR2FtZU9yTmF0aXZlVHlwZSA9IDA7XHJcbiAgICAgICAgLy8gdGhpcy5fbW9yZUdhbWVTaG93TmF0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuX2xpZXlvdV9vbmxpbmVfcGFyYW0gPSBkYXRhO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5faW5pdE9iaiAmJiB0aGlzLl9pbml0T2JqLmluaXREYXRhQ29tcGxldGUpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5pdE9iai5pbml0RGF0YUNvbXBsZXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldFBhcmFtQnlLZXkob2JqKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xpZXlvdV9vbmxpbmVfcGFyYW0gJiYgdGhpcy5fbGlleW91X29ubGluZV9wYXJhbVtvYmoua2V5XSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xpZXlvdV9vbmxpbmVfcGFyYW1bb2JqLmtleV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9iai5kZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldEFkRGF0YShkYXRhKSB7XHJcblxyXG4gICAgICAgIGlmIChkYXRhLnRoZW1lKSB7XHJcbiAgICAgICAgICAgIGxpZXlvdV9tb3JlR2FtZV90eXBlID0gcGFyc2VJbnQoZGF0YS50aGVtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhLnN3aXRjaCkge1xyXG4gICAgICAgICAgICB0aGlzLnN3aXRjaFNldEh0dHBEYXRhID0gZGF0YS5zd2l0Y2g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhLmFkX2RhdGFzKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmFkX2RhdGFzLmlzUnVuICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xR01vcmVfaXNSdW4gPSBkYXRhLmFkX2RhdGFzLmlzUnVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBhZEJhc2VVcmwgPSAnJztcclxuICAgICAgICAgICAgaWYgKGRhdGEuYWRfZGF0YXMuYmFzZVVybCAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGFkQmFzZVVybCA9IGRhdGEuYWRfZGF0YXMuYmFzZVVybDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5hZF9kYXRhcy5kYXRhUGxheSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucUdNb3JlR2FtZURhdGEgPSBkYXRhLmFkX2RhdGFzLmRhdGFQbGF5O1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnFHTW9yZUdhbWVEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnFHTW9yZUdhbWVEYXRhW2ldLnVybCAmJiB0aGlzLnFHTW9yZUdhbWVEYXRhW2ldLnVyaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnFHTW9yZUdhbWVEYXRhW2ldLnVybCA9IGFkQmFzZVVybCArIHRoaXMucUdNb3JlR2FtZURhdGFbaV0udXJpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsaWV5b3Vfc2hvd01vcmVHYW1lTnVtID0gdGhpcy5xR01vcmVHYW1lRGF0YS5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGxpZXlvdV9zaG93TW9yZUdhbWVOdW0gPCA3KSB7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TW9yZUdhbWVOdW0gPSA3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YS5jcm9zc1N3aXRjaCkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5jcm9zc1N3aXRjaC5kb3VibGVWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xR01vcmVfZGlhbG9nUGxheVJ1blR5cGVbMl0gPSBwYXJzZUludChkYXRhLmNyb3NzU3dpdGNoLmRvdWJsZVZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5jcm9zc1N3aXRjaC50cmlwbGV4VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucUdNb3JlX2RpYWxvZ1BsYXlSdW5UeXBlWzNdID0gcGFyc2VJbnQoZGF0YS5jcm9zc1N3aXRjaC50cmlwbGV4VmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmNyb3NzU3dpdGNoLnNob3dHYW1lTnVtICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbGlleW91X3Nob3dNb3JlR2FtZU51bSA9IE51bWJlcihkYXRhLmNyb3NzU3dpdGNoLnNob3dHYW1lTnVtKTtcclxuICAgICAgICAgICAgICAgIGlmIChsaWV5b3Vfc2hvd01vcmVHYW1lTnVtID4gdGhpcy5xR01vcmVHYW1lRGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd01vcmVHYW1lTnVtID0gdGhpcy5xR01vcmVHYW1lRGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobGlleW91X3Nob3dNb3JlR2FtZU51bSA8IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd01vcmVHYW1lTnVtID0gNztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRhdGEuY3Jvc3NTd2l0Y2gucmVmcmVzaFRpbWUgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnFHTW9yZV9yZWZyZXNoVGltZSA9IE51bWJlcihkYXRhLmNyb3NzU3dpdGNoLnJlZnJlc2hUaW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5jcm9zc1N3aXRjaC5tYWluU3dpdGNoICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xR01vcmVfbWFpblN3aXRjaCA9IGRhdGEuY3Jvc3NTd2l0Y2gubWFpblN3aXRjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5jcm9zc1N3aXRjaC5mbG9hdFBsYXkgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnFHTW9yZV9mbG9hdFBsYXkgPSBkYXRhLmNyb3NzU3dpdGNoLmZsb2F0UGxheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5jcm9zc1N3aXRjaC5iYW5uZXJQbGF5ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xR01vcmVfYmFubmVyUGxheSA9IGRhdGEuY3Jvc3NTd2l0Y2guYmFubmVyUGxheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5jcm9zc1N3aXRjaC5tb3JlUGxheSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucUdNb3JlX21vcmVQbGF5ID0gZGF0YS5jcm9zc1N3aXRjaC5tb3JlUGxheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5jcm9zc1N3aXRjaC5kaWFsb2dQbGF5ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xR01vcmVfZGlhbG9nUGxheSA9IGRhdGEuY3Jvc3NTd2l0Y2guZGlhbG9nUGxheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5jcm9zc1N3aXRjaC5kaWFsb2dQbGF5MiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucUdNb3JlX2RpYWxvZ1BsYXkyID0gZGF0YS5jcm9zc1N3aXRjaC5kaWFsb2dQbGF5MjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5jcm9zc1N3aXRjaC5kaWFsb2dQbGF5MyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucUdNb3JlX2RpYWxvZ1BsYXkzID0gZGF0YS5jcm9zc1N3aXRjaC5kaWFsb2dQbGF5MztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5jcm9zc1N3aXRjaC5pY29uUGxheSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucUdNb3JlX2ljb25QbGF5ID0gZGF0YS5jcm9zc1N3aXRjaC5pY29uUGxheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YS5iaXpEYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmJpekRhdGEuZmxvYXRQbGF5ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xR01vcmVfYml6X2Zsb2F0UGxheSA9IGRhdGEuYml6RGF0YS5mbG9hdFBsYXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRhdGEuYml6RGF0YS5iYW5uZXJQbGF5ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xR01vcmVfYml6X2Jhbm5lclBsYXkgPSBkYXRhLmJpekRhdGEuYmFubmVyUGxheTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5iaXpEYXRhLm1vcmVQbGF5ICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xR01vcmVfYml6X21vcmVQbGF5ID0gZGF0YS5iaXpEYXRhLm1vcmVQbGF5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmJpekRhdGEuZGlhbG9nUGxheSAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucUdNb3JlX2Jpel9kaWFsb2dQbGF5ID0gZGF0YS5iaXpEYXRhLmRpYWxvZ1BsYXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRhdGEuYml6RGF0YS5kaWFsb2dQbGF5MiAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucUdNb3JlX2Jpel9kaWFsb2dQbGF5MiA9IGRhdGEuYml6RGF0YS5kaWFsb2dQbGF5MjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS5iaXpEYXRhLmRpYWxvZ1BsYXkzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xR01vcmVfYml6X2RpYWxvZ1BsYXkzID0gZGF0YS5iaXpEYXRhLmRpYWxvZ1BsYXkzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmJpekRhdGEuaWNvblBsYXkgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnFHTW9yZV9iaXpfaWNvblBsYXkgPSBkYXRhLmJpekRhdGEuaWNvblBsYXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFN5c1BsYXRmb3JtX3N0cmluZygpIHtcclxuICAgICAgICByZXR1cm4gJ2Jhc2UnO1xyXG4gICAgfSxcclxuICAgIGdldExvZ2luVXJsKCkge1xyXG4gICAgICAgIHZhciBqc29uRGF0YSA9IHt9O1xyXG4gICAgICAgIGpzb25EYXRhLnVpZCA9IG9wZW5pZDtcclxuICAgICAgICBqc29uRGF0YS5zZGtWZXJzaW9uID0gX1NES1ZlcnNpb25Db2RlO1xyXG4gICAgICAgIGpzb25EYXRhLnBsYXRmb3JtVmVyc2lvbiA9IHRoaXMucGxhdGZvcm1WZXJzaW9uQ29kZTtcclxuICAgICAgICBqc29uRGF0YS5hbmRyb2lkVmVyc2lvbiA9IHRoaXMuYW5kcm9pZFZlcnNpb247XHJcbiAgICAgICAganNvbkRhdGEubW9kZWwgPSB0aGlzLm1vZGVsO1xyXG4gICAgICAgIGpzb25EYXRhLm5ldHdvcmtUeXBlID0gdGhpcy5uZXR3b3JrVHlwZTtcclxuICAgICAgICBqc29uRGF0YS51dWlkID0gb3BlbmlkX3V1aWQ7XHJcbiAgICAgICAgLy8ganNvbkRhdGEucmVnaW9uID0gdGhpcy5yZWdpb247XHJcbiAgICAgICAgdmFyIHZlcnNpb24gPSB0aGlzLmRhdGFWZXJzaW9uO1xyXG4gICAgICAgIHZhciBwbGF0Rm9ybSA9IHRoaXMuZ2V0U3lzUGxhdGZvcm1fc3RyaW5nKCk7XHJcbiAgICAgICAgdmFyIHVybCA9IHRoaXMubG9naW5CYXNlVXJsICsgJy9sb2dpbj91bWlkPScgKyBvcHBvR2V0T25saW5lRGF0YUlkICsgJyZ1dWlkPScgKyBvcGVuaWRfdXVpZCArICcmY2xpZW50X2RhdGFfdmVyc2lvbj0nICsgdmVyc2lvbiArICcmY2hhbm5lbD0nICsgcGxhdEZvcm0gKyAnJmdhbWVWZXJzaW9uPScgKyB0aGlzLmdldFZlcnNpb24oKSArICcmanNvbj0nICsgZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KGpzb25EYXRhKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Jhc2VNYW5hZ2VyLS0tLS0tLS0tLS0tLS1nZXRMb2dpblVybCA9ICcgKyB1cmwpO1xyXG4gICAgICAgIHJldHVybiB1cmw7XHJcbiAgICB9LFxyXG4gICAgc2V0YWR0cmFjayhhZGlkLCBsb2NhdGlvbikge1xyXG4gICAgICAgIGlmICh0aGlzLnN3aXRjaFNldEh0dHBEYXRhICYmIGZhbHNlID09IHRoaXMuc3dpdGNoU2V0SHR0cERhdGEuYWR0cmFjaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciBqc29uRGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBqc29uRGF0YS51aWQgPSBvcGVuaWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW9yZUluZm8pIHtcclxuICAgICAgICAgICAgICAgIGpzb25EYXRhLnNka1ZlcnNpb24gPSBfU0RLVmVyc2lvbkNvZGU7XHJcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5wbGF0Zm9ybVZlcnNpb24gPSB0aGlzLnBsYXRmb3JtVmVyc2lvbkNvZGU7XHJcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5hbmRyb2lkVmVyc2lvbiA9IHRoaXMuYW5kcm9pZFZlcnNpb247XHJcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5tb2RlbCA9IHRoaXMubW9kZWw7XHJcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5uZXR3b3JrVHlwZSA9IHRoaXMubmV0d29ya1R5cGU7XHJcbiAgICAgICAgICAgICAgICBqc29uRGF0YS51dWlkID0gb3BlbmlkX3V1aWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHBsYXRGb3JtID0gdGhpcy5nZXRTeXNQbGF0Zm9ybV9zdHJpbmcoKTtcclxuICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMubG9naW5CYXNlVXJsICsgJy9hZHRyYWNrP3VtaWQ9JyArIG9wcG9HZXRPbmxpbmVEYXRhSWQgKyAnJnV1aWQ9JyArIG9wZW5pZF91dWlkICsgJyZjaGFubmVsPScgKyBwbGF0Rm9ybSArICcmYWRpZD0nICsgYWRpZCArICcmbG9jYXRpb249JyArIGxvY2F0aW9uICsgJyZnYW1lVmVyc2lvbj0nICsgdGhpcy5nZXRWZXJzaW9uKCkgKyAnJmpzb249JyArIGVuY29kZVVSSShKU09OLnN0cmluZ2lmeShqc29uRGF0YSkpO1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnYmFzZU1hbmFnZXItLS0tLS0tLS0tLS0tLXNldGFkdHJhY2sgPSAnICsgdXJsKTtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhRm9ySHR0cCh1cmwpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCdiYXNlTWFuYWdlci0tLS0tLS0tc2V0YWR0cmFjayBlcnJvcj0gJyArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldE9wZXJUcmFjayhqc29uRGF0YSA9IHt9KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3dpdGNoU2V0SHR0cERhdGEgJiYgZmFsc2UgPT0gdGhpcy5zd2l0Y2hTZXRIdHRwRGF0YS5vcGVyVHJhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBqc29uRGF0YS51aWQgPSBvcGVuaWQ7XHJcbiAgICAgICAgICAgIGpzb25EYXRhLnV1aWQgPSBvcGVuaWRfdXVpZDtcclxuICAgICAgICAgICAgdmFyIHBsYXRGb3JtID0gdGhpcy5nZXRTeXNQbGF0Zm9ybV9zdHJpbmcoKTtcclxuICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMubG9naW5CYXNlVXJsICsgJy9vcGVyVHJhY2s/dW1pZD0nICsgb3Bwb0dldE9ubGluZURhdGFJZCArICcmdXVpZD0nICsgb3BlbmlkX3V1aWQgKyAnJmNoYW5uZWw9JyArIHBsYXRGb3JtICsgJyZnYW1lVmVyc2lvbj0nICsgdGhpcy5nZXRWZXJzaW9uKCkgKyAnJmpzb249JyArIGVuY29kZVVSSShKU09OLnN0cmluZ2lmeShqc29uRGF0YSkpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYmFzZU1hbmFnZXItLS0tLS0tLS0tLS0tLXNldE9wZXJUcmFjayA9ICcgKyB1cmwpO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGFGb3JIdHRwKHVybCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgLy8gXCJzd2l0Y2hcIjp7XCJvcGVyVHJhY2tcIjp0cnVlLFwiYWR0cmFja1wiOnRydWV9O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYmFzZU1hbmFnZXItLS0tLS0tLXNldE9wZXJUcmFjayBlcnJvcj0gJyArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldExldmVsVHJhY2sobGV2ZWwsIG1vZGUsIGFjdGlvbikge1xyXG4gICAgICAgIHRoaXMuc2V0SGF2ZVRyYWNrKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhhdmVUcmFjayAhPSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc3dpdGNoU2V0SHR0cERhdGEgJiYgZmFsc2UgPT0gdGhpcy5zd2l0Y2hTZXRIdHRwRGF0YS5MZXZlbHRyYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHRpbWUgPSAwO1xyXG4gICAgICAgIGlmIChhY3Rpb24gPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhbHlHYW1lQmFja3N0YWdlVGltZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubGV2ZWxCZWdpblRpbWUgPSBwYXJzZUludChnZXRUaW1lKCkgLyAxMDAwKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbiA9PSAxIHx8IGFjdGlvbiA9PSAyKSB7XHJcbiAgICAgICAgICAgIHRpbWUgPSBwYXJzZUludChnZXRUaW1lKCkgLyAxMDAwKSAtIHRoaXMubGV2ZWxCZWdpblRpbWUgLSB0aGlzLnBhbHlHYW1lQmFja3N0YWdlVGltZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdmFyIGpzb25EYXRhID0ge307XHJcbiAgICAgICAgICAgIGpzb25EYXRhLnVpZCA9IG9wZW5pZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3JlSW5mbykge1xyXG4gICAgICAgICAgICAgICAganNvbkRhdGEuc2RrVmVyc2lvbiA9IF9TREtWZXJzaW9uQ29kZTtcclxuICAgICAgICAgICAgICAgIGpzb25EYXRhLnBsYXRmb3JtVmVyc2lvbiA9IHRoaXMucGxhdGZvcm1WZXJzaW9uQ29kZTtcclxuICAgICAgICAgICAgICAgIGpzb25EYXRhLmFuZHJvaWRWZXJzaW9uID0gdGhpcy5hbmRyb2lkVmVyc2lvbjtcclxuICAgICAgICAgICAgICAgIGpzb25EYXRhLm1vZGVsID0gdGhpcy5tb2RlbDtcclxuICAgICAgICAgICAgICAgIGpzb25EYXRhLm5ldHdvcmtUeXBlID0gdGhpcy5uZXR3b3JrVHlwZTtcclxuICAgICAgICAgICAgICAgIGpzb25EYXRhLnV1aWQgPSBvcGVuaWRfdXVpZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcGxhdEZvcm0gPSB0aGlzLmdldFN5c1BsYXRmb3JtX3N0cmluZygpO1xyXG4gICAgICAgICAgICB2YXIgdXJsID0gdGhpcy50cmFja0Jhc2VVcmwgKyAnL2xldmVsVHJhY2s/dW1pZD0nICsgb3Bwb0dldE9ubGluZURhdGFJZCArICcmdXVpZD0nICsgb3BlbmlkX3V1aWQgKyAnJmNoYW5uZWw9JyArIHBsYXRGb3JtICsgJyZtb2RlbD0nICsgbW9kZSArICcmbGV2ZWw9JyArIGxldmVsICsgJyZ0eXBlPScgKyBhY3Rpb24gKyAnJnRpbWU9JyArIHRpbWUgKyAnJmdhbWVWZXJzaW9uPScgKyB0aGlzLmdldFZlcnNpb24oKSArICcmZXZlbnRGbGFnPScgKyB0aGlzLmV2ZW50RmxhZyArICcmanNvbj0nICsgZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KGpzb25EYXRhKSk7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCdiYXNlTWFuYWdlci0tLS0tLS0tLS0tLS0tc2V0bGV2ZWxUcmFjayA9ICcgKyB1cmwpO1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGFGb3JIdHRwKHVybCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgbGlleW91X3Nob3dMb2coJ2Jhc2VNYW5hZ2VyLS0tLS0tLS1zZXRsZXZlbFRyYWNrIGVycm9yPSAnICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNldEdhbWVFdmVudFRyYWNrKGV2ZW50LCBhY3Rpb24sIHRpbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5oYXZlVHJhY2sgIT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciBqc29uRGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBqc29uRGF0YS51aWQgPSBvcGVuaWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW9yZUluZm8pIHtcclxuICAgICAgICAgICAgICAgIGpzb25EYXRhLnNka1ZlcnNpb24gPSBfU0RLVmVyc2lvbkNvZGU7XHJcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5wbGF0Zm9ybVZlcnNpb24gPSB0aGlzLnBsYXRmb3JtVmVyc2lvbkNvZGU7XHJcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5hbmRyb2lkVmVyc2lvbiA9IHRoaXMuYW5kcm9pZFZlcnNpb247XHJcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5tb2RlbCA9IHRoaXMubW9kZWw7XHJcbiAgICAgICAgICAgICAgICBqc29uRGF0YS5uZXR3b3JrVHlwZSA9IHRoaXMubmV0d29ya1R5cGU7XHJcbiAgICAgICAgICAgICAgICBqc29uRGF0YS51dWlkID0gb3BlbmlkX3V1aWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHBsYXRGb3JtID0gdGhpcy5nZXRTeXNQbGF0Zm9ybV9zdHJpbmcoKTtcclxuICAgICAgICAgICAgdmFyIHVybCA9IHRoaXMudHJhY2tCYXNlVXJsICsgJy9ldmVudFRyYWNrP3VtaWQ9JyArIG9wcG9HZXRPbmxpbmVEYXRhSWQgKyAnJnV1aWQ9JyArIG9wZW5pZF91dWlkICsgJyZjaGFubmVsPScgKyBwbGF0Rm9ybSArICcmZXZlbnQ9JyArIGV2ZW50ICsgJyZ0eXBlPScgKyBhY3Rpb24gKyAnJnRpbWU9JyArIHRpbWUgKyAnJmdhbWVWZXJzaW9uPScgKyB0aGlzLmdldFZlcnNpb24oKSArICcmZXZlbnRGbGFnPScgKyB0aGlzLmV2ZW50RmxhZyArICcmanNvbj0nICsgZW5jb2RlVVJJKEpTT04uc3RyaW5naWZ5KGpzb25EYXRhKSk7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCdiYXNlTWFuYWdlci0tLS0tLS0tLS0tLS0tc2V0R2FtZUV2ZW50VHJhY2sgPSAnICsgdXJsKTtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRhRm9ySHR0cCh1cmwpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCdiYXNlTWFuYWdlci0tLS0tLS0tc2V0R2FtZUV2ZW50VHJhY2sgZXJyb3I9ICcgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93SW5zdGFsbFNob3J0Y3V0RGlhbG9nKCkge1xyXG4gICAgICAgIHZhciBkYXlUaW1lID0gZ2V0VGltZURheSgpO1xyXG4gICAgICAgIHZhciBkYXkgPSBVc2VyZGVmYXVsdC5nZXRJbnRGb3JLZXkoJ2xpZXlvdV9ub3RTaG93SW5zdGFsbFNob3J0Y3V0JywgMCk7XHJcbiAgICAgICAgaWYgKGRheVRpbWUgPT0gZGF5KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGZOb2RlID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuICAgICAgICB2YXIgbm9kZSA9IGxpZXlvdV9nZXRJbnN0YWxsU2hvcnRjdXREaWFsb2dQcmVmYWIoKTtcclxuICAgICAgICBmTm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICBub2RlLnggPSBsaWV5b3VfU2RrTWFuYWdlci5zZGtXaW5TaXplLndpZHRoIC8gMjtcclxuICAgICAgICBub2RlLnkgPSBsaWV5b3VfU2RrTWFuYWdlci5zZGtXaW5TaXplLmhlaWdodCAvIDJcclxuICAgIH0sXHJcbiAgICBhZGRJbnN0YWxsU2hvcnRjdXQob2JqKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuT1BQT19HQU1FIHx8IGNjLnN5cy5wbGF0Zm9ybSA9PSBjYy5zeXMuVklWT19HQU1FKSB7XHJcbiAgICAgICAgICAgICAgICBvYmouY2FuU2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgZk5vZGUgPSBvYmoubm9kZSA/IG9iai5ub2RlIDogY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFsbFNob3J0Y3V0KHtcclxuICAgICAgICAgICAgICAgICAgICBjYW5TaG93OiB0cnVlLCBjYWxsQmFja19hZGROb2RlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmTm9kZSAmJiBmTm9kZS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IGxpZXlvdV9nZXRJbnN0YWxsU2hvcnRjdXRQcmVmYWIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuY2FsbEZ1biA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbGxTaG9ydGN1dChvYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZOb2RlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS54ID0gb2JqLnggPyBvYmoueCA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnkgPSBvYmoueSA/IG9iai55IDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2hvd1NoYXJlVmlkZW9EaWFsb2coY2FsbEJhY2spIHtcclxuICAgICAgICBjYWxsQmFjayAmJiBjYWxsQmFjayg0KTtcclxuICAgIH0sXHJcbiAgICBzaG93TmF0aXZlQWRfc21hbGwob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHNob3dOYXRpdmVBZF9iaWcob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHNob3dOYXRpdmVBZF9sb2FkKG9iaikge1xyXG4gICAgICAgIGlmIChvYmouY2FsbEJhY2spIHtcclxuICAgICAgICAgICAgb2JqLmNhbGxCYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNhdmVJbWFnZVRvUGhvdG9zQWxidW0ob2JqID0ge30pIHsgfSxcclxuICAgIHNob3dJU0JOKG9iaiA9IHt9KSB7IH0sXHJcbiAgICBoaWRlSVNCTigpIHsgfSxcclxuICAgIHNob3dVc2VyQWdyZWVtZW50KG9iaiA9IHt9KSB7IH0sXHJcbiAgICBzZXRPbmxpbmVEYXRhKGRhdGEpIHsgfSxcclxuICAgIGluaXRPbmxpbmVEYXRhKCkge1xyXG4gICAgICAgIGlmIChvcHBvR2V0T25saW5lRGF0YUlkID09ICcnKSB7XHJcbiAgICAgICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dUb2FzdCgn5rKh5pyJ5aGr5YaZcWdJRCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgdmVyc2lvbiA9IFVzZXJkZWZhdWx0LmdldEludEZvcktleSgnbGlleW91X3Nka19vbmxpbmVfdmVyc2lvbicsIDApO1xyXG4gICAgICAgIHZhciB0aW1lID0gVXNlcmRlZmF1bHQuZ2V0SW50Rm9yS2V5KCdsaWV5b3Vfc2RrX29ubGluZV90aW1lJywgMCk7XHJcbiAgICAgICAgdmFyIHNwID0gVXNlcmRlZmF1bHQuZ2V0SW50Rm9yS2V5KCdsaWV5b3Vfc2RrX29ubGluZV9zcCcsIDApO1xyXG4gICAgICAgIHZhciBub3dUaW1lID0gZ2V0VGltZSgpIC8gMTAwMDtcclxuICAgICAgICBpZiAobm93VGltZSAtIHRpbWUgPCBzcCAmJiBub3dUaW1lID4gdGltZSkge1xyXG4gICAgICAgICAgICB2YXIgcmVzcG9uc2UgPSBVc2VyZGVmYXVsdC5nZXRTdHJpbmdGb3JLZXkoJ2xpZXlvdV9zZGtfb25saW5lX2RhdGEnLCAnJyk7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHNlbGYuc2V0T25saW5lRGF0YShkYXRhKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRhdGFWZXJzaW9uID0gdmVyc2lvbjtcclxuICAgICAgICB2YXIgdXJsID0gdGhpcy5nZXRMb2dpblVybCgpO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YUZvckh0dHAodXJsLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGpzb25EID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoanNvbkQuc2VydmVyX2RhdGFfdmVyc2lvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIFVzZXJkZWZhdWx0LnNldERhdGFGb3JLZXkoJ2xpZXlvdV9zZGtfb25saW5lX3ZlcnNpb24nLCBqc29uRC5zZXJ2ZXJfZGF0YV92ZXJzaW9uKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChqc29uRC5pc01vcmVJbmZvICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuaXNNb3JlSW5mbyA9IGpzb25ELmlzTW9yZUluZm87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoanNvbkQuc3ApIHtcclxuICAgICAgICAgICAgICAgICAgICBVc2VyZGVmYXVsdC5zZXREYXRhRm9yS2V5KCdsaWV5b3Vfc2RrX29ubGluZV9zcCcsIGpzb25ELnNwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFVzZXJkZWZhdWx0LnNldERhdGFGb3JLZXkoJ2xpZXlvdV9zZGtfb25saW5lX3RpbWUnLCBub3dUaW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoanNvbkQuc2VydmVyX2RhdGFfdmVyc2lvbiA9PSB2ZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlID0gVXNlcmRlZmF1bHQuZ2V0U3RyaW5nRm9yS2V5KCdsaWV5b3Vfc2RrX29ubGluZV9kYXRhJywgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRPbmxpbmVEYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZSkuZGF0YTtcclxuICAgICAgICAgICAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGYuc2V0T25saW5lRGF0YShkYXRhKTtcclxuICAgICAgICAgICAgICAgIFVzZXJkZWZhdWx0LnNldERhdGFGb3JLZXkoJ2xpZXlvdV9zZGtfb25saW5lX2RhdGEnLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygnLS0tLS0tZXJyb3IgIGluaXRPbmxpbmVEYXRhICsgJyArIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldFNjcmVlbnNob3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBjYy5Ob2RlKCk7XHJcbiAgICB9LFxyXG4gICAgc2hvd01vcmVHYW1lR3JpZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5iYXNlX0lzU2hlbkhlIHx8ICF0aGlzLl9jYW5TaG93TW9yZUdhbWVHcmlkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNjLmZpbmQoXCJsaWV5b3VfbW9yZUdhbWVHcmlkXCIsIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucUdNb3JlR2FtZURhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbm9kZSA9IGxpZXlvdV9tb3JlR2FtZV9tb3JlKCk7XHJcbiAgICAgICAgbm9kZS5uYW1lID0gXCJsaWV5b3VfbW9yZUdhbWVHcmlkXCI7XHJcbiAgICAgICAgbm9kZS54ID0gY2Mud2luU2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgbm9kZS55ID0gY2Mud2luU2l6ZS5oZWlnaHQgLyAyO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLmdldEFkRGF0YSh0aGlzLnFHTW9yZV9iaXpfbW9yZVBsYXkpO1xyXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KCdsaWV5b3VfcUdhbWVtb3JlR2FtZV9tb3JlJykuc2V0RGF0YShkYXRhLCB0aGlzLnFHTW9yZV9pc1J1bik7XHJcbiAgICB9LFxyXG4gICAgYWRkUmVkUGFja0ljb24ob2JqKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYmFzZV9Jc1NoZW5IZSB8fCB0aGlzLl9jbG9zZVJlZFBhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYmoubm9kZS5hZGRDaGlsZChsaWV5b3VfZ2V0UmVkUGFja0ljb24oKSk7XHJcbiAgICB9LFxyXG4gICAgYWRkUmVkUGFja0RpYWxvZygpIHtcclxuICAgICAgICBpZiAodGhpcy5iYXNlX0lzU2hlbkhlIHx8IHRoaXMuX2Nsb3NlUmVkUGFjaykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpZXlvdV9zaG93UmVkUGFja0RpYWxvZygpO1xyXG4gICAgfSxcclxuICAgIGFkZFRha2VPdXRJY29uKG9iaikge1xyXG4gICAgICAgIGlmICh0aGlzLmJhc2VfSXNTaGVuSGUgfHwgdGhpcy5fY2xvc2VSZWRQYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JqLm5vZGUuYWRkQ2hpbGQobGlleW91X2dldENhc2tJY29uKCkpO1xyXG4gICAgfSxcclxufSlcclxubW9kdWxlLmV4cG9ydHMgPSBCYXNlTWFuYWdlcjsiXX0=