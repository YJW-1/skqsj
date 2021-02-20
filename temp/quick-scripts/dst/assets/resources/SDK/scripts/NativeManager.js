
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/scripts/NativeManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70231PLVVxMd5Pc9mxttaKu', 'NativeManager');
// resources/SDK/scripts/NativeManager.js

"use strict";

//bcdaf920-3e18-49
window.ACTION_SHARE = 1100;
window.ACTION_SHARE_SUCCESS = 1101;
window.ACTION_SHARE_FAIL = 1102;
window.ACTION_RATE = 1201;
window.ACTION_RATE_SYS = 1202;
window.ACTION_EXIT = 1301;
window.ACTION_EXIT_BACK = 1302;
window.ACTION_AD_PAUSE = 2000;
window.ACTION_AD_RESULT = 2001;
window.ACTION_MORE = 2002;
window.ACTION_AD_WATCH = 2200;
window.ACTION_RANKS = 3000;
window.ACTION_RANKS_LOGIN = 3001;
window.ACTION_RANKS_SUBMIT = 3002;
window.ACTION_RANKS_SUBMIT_ByName = 3003;
window.ACTION_TO_APP = 2003;
window.ACTION_TO_APP_RANDOM = 2008;
window.ACTION_TO_WECHAT = 2004;
window.ACTION_TO_WECHAT_AUTO = 2005;
window.ACTION_ATTENTION_WECHAT = 2006;
window.ACTION_EXCHANGE_CODE = 2007;
window.KEY_EXCHANGE = "exchange_code";
window.KEY_OPEN_VIDEO = "isOpenVideo";
window.KEY_OPEN_FREE_GOLD = "show_free";
window.KEY_OPEN_MOREGAME = "moreGame_code";
window.KEY_OPEN_ABOUT = "about_code";
window.KEY_IS_SHENHE = "isAudit";
window.KEY_IS_OPENPAY = 'isOpenPay';
window.ACTION_BANNER_SHOW = 2102;
window.ACTION_BANNER_HIDE = 2103;
window.ACTION_RATE_COINS = 1997;
window.ACTION_FEEDBACK = 1110;
window.STATE_PAUSE = 10;
window.STATE_RESUME = 20;

window.cpp_CallByLost = function (type) {};

window.cpp_Calljs = function (type, YesOrNo) {
  // cc.game.resume();
  if (YesOrNo) {
    if (lieyou_SdkManager.instance.payCallBack) {
      lieyou_SdkManager.instance.payCallBack();
    }

    if (lieyou_SdkManager.instance.playVDCallBack) {
      lieyou_SdkManager.instance.playVDCallBack(1);
    }
  } else {
    if (lieyou_SdkManager.instance.playVDCallBack) {
      lieyou_SdkManager.instance.playVDCallBack(0);
    }
  }

  lieyou_SdkManager.instance.payCallBack = null;
  lieyou_SdkManager.instance.playVDCallBack = null;
};

var NativeManager = cc.Class({
  "extends": require('BaseManager'),
  properties: {
    payCallBack: null,
    playVDCallBack: null
  },
  getHaveVideo: function getHaveVideo() {
    if (this.isOpen(KEY_OPEN_VIDEO)) {
      return true;
    }

    return false;
  },
  getSysPlatform_string: function getSysPlatform_string() {
    return 'native';
  },
  getSysPlatform: function getSysPlatform() {
    return 1;
  },
  setOnlineData: function setOnlineData(data) {
    if (data["native"]) {
      var adData = {};

      if (data["native"].theme) {
        adData.theme = data["native"].theme;
      }

      if (data["native"].crossSwitch) {
        adData.crossSwitch = data["native"].crossSwitch;
      }

      if (data["native"].bizData) {
        adData.bizData = data["native"].bizData;
      }

      if (data["native"].ad_datas) {
        adData.ad_datas = data["native"].ad_datas;
      }

      if (data["native"]["switch"]) {
        adData["switch"] = data["native"]["switch"];
      }

      if (this.isShowCross) {
        this.setAdData(adData);
      }
    }
  },
  getStringValue: function getStringValue(key) {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
      return jsb.reflection.callStaticMethod("com/util/JsUtil", "getStringValue", "(Ljava/lang/String;)Ljava/lang/String;", key);
    }

    return "";
  },
  setISBN: function setISBN() {
    try {
      var isbn = this.getStringValue("isbn");
      var isbn2 = isbn.split("-");
      isbn = "";

      for (var i = 0; i < isbn2.length; i++) {
        isbn = isbn + isbn2[i];

        if (i != isbn2.length - 1) {
          isbn = isbn + "\n";
        }
      }

      this._ISBN = isbn;
    } catch (error) {}
  },
  init: function init(obj) {
    this._super();

    this.base_IsShenHe = this.isOpen(KEY_IS_SHENHE);
    this.isShowCross = this.isOpen("isCross");
    this.setISBN();
    this.initOnlineData();
  },
  vibrateShort: function vibrateShort() {
    this.vibrateCustom(30);
  },
  vibrateLong: function vibrateLong() {
    this.vibrateCustom(100);
  },
  vibrateCustom: function vibrateCustom(time) {
    if (cc.sys.os == cc.sys.OS_ANDROID) {
      jsb.reflection.callStaticMethod("com/util/JsUtil", "Vibrate", "(I)V", time);
    }
  },
  hideISBN: function hideISBN() {
    if (this._isbnNode && this._isbnNode.isValid) {
      this._isbnNode.destroy();

      this._isbnNode = null;
    }
  },
  showISBN: function showISBN(obj) {
    if (this._isbnNode && this._isbnNode.isValid) {
      this.hideBanner();
      return;
    }

    if (this._ISBN && this._ISBN != "") {
      this._isbnNode = new cc.Node();
      cc.director.getScene().addChild(this._isbnNode);
      var labelNode = new cc.Node();
      var bg = new cc.Node();

      this._isbnNode.addChild(bg);

      this._isbnNode.addChild(labelNode);

      this._isbnNode.anchorY = 0;
      labelNode.anchorY = 0;
      bg.anchorY = 0;
      this._isbnNode.x = cc.winSize.width / 2;
      var label = labelNode.addComponent(cc.Label);
      label.string = this._ISBN;
      obj.color && (labelNode.color = obj.color);
      label.fontSize = obj.size ? obj.size : 22;
      label.lineHeight = obj.size ? obj.size + 2 : 24;
      label.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
      label.verticalAlign = cc.Label.VerticalAlign.BOTTOM;
      bg.addComponent(cc.Sprite);
      bg.opacity = 100;
      lieyou_load('q_ad/oppo_native_insters_layerBg.png', function (err, texture) {
        bg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        bg.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
        bg.width = cc.winSize.width;
        bg.height = labelNode.height;
        cc.log(labelNode.height);
      });
      labelNode.scale = lieyou_SdkManager._SceneScale;
      this.hideBanner();
    }
  },
  showNativeBanner: function showNativeBanner(top) {
    lieyou_showLog("========native  show Native Banner =  top:" + top);

    if (cc.sys.os == cc.sys.OS_IOS) {
      jsb.reflection.callStaticMethod("MyManager", "showNativeView:", top);
    } else if (cc.sys.os == cc.sys.OS_ANDROID) {
      jsb.reflection.callStaticMethod("com/util/JsUtil", "showNativeView", "(F)V", top);
    }
  },
  hideNativeBanner: function hideNativeBanner() {
    lieyou_showLog("========native  hide Native Banner = ");

    if (cc.sys.os == cc.sys.OS_IOS) {
      jsb.reflection.callStaticMethod("MyManager", "closeNativeView:", 0);
    } else if (cc.sys.os == cc.sys.OS_ANDROID) {
      jsb.reflection.callStaticMethod("com/util/JsUtil", "closeNativeView", "()V");
    }
  },
  showPauseAd: function showPauseAd(isHaveNative, top) {
    lieyou_showLog("========native  show Native showPauseAd = isHaveNative:" + isHaveNative + " top:" + top);

    if (cc.sys.os == cc.sys.OS_IOS) {
      jsb.reflection.callStaticMethod("MyManager", "showPauseAd:showPos:", isHaveNative, top);
    } else if (cc.sys.os == cc.sys.OS_ANDROID) {
      jsb.reflection.callStaticMethod("com/util/JsUtil", "showPauseAd", "(ZF)V", isHaveNative, top);
    }
  },
  showResultAd: function showResultAd(isHaveNative, top) {
    lieyou_showLog("========native  show Native showResultAd = isHaveNative:" + isHaveNative + " top:" + top);

    if (this.showPraise()) {
      if (cc.sys.os == cc.sys.OS_IOS) {
        jsb.reflection.callStaticMethod("MyManager", "showResultAd:showPos:", false, top);
      } else if (cc.sys.os == cc.sys.OS_ANDROID) {
        jsb.reflection.callStaticMethod("com/util/JsUtil", "showResultAd", "(ZF)V", false, top);
      }

      return;
    }

    if (cc.sys.os == cc.sys.OS_IOS) {
      jsb.reflection.callStaticMethod("MyManager", "showResultAd:showPos:", isHaveNative, top);
    } else if (cc.sys.os == cc.sys.OS_ANDROID) {
      jsb.reflection.callStaticMethod("com/util/JsUtil", "showResultAd", "(ZF)V", isHaveNative, top);
    }
  },
  showSpotByBegin: function showSpotByBegin(isHaveNative, top) {
    lieyou_showLog("========native begin spot = ");
  },
  showSpotByPause: function showSpotByPause(isHaveNative, top) {
    this.showPauseAd(isHaveNative, top);
  },
  showSpotByFinish: function showSpotByFinish(isHaveNative, top) {
    this.showResultAd(isHaveNative, top);
  },
  callPay: function callPay(action, funS) {
    lieyou_showLog("======== native callPay action = " + action); // cc.game.pause();

    this.payCallBack = funS;

    if (cc.sys.os == cc.sys.OS_IOS) {
      jsb.reflection.callStaticMethod("MyManager", "callPay:", action);
    } else if (cc.sys.os == cc.sys.OS_ANDROID) {
      jsb.reflection.callStaticMethod("com/util/JsUtil", "callPay", "(I)V", action);
    }
  },
  callAndroid: function callAndroid(action) {
    lieyou_showLog("======== native callAndroid action = " + action);

    if (cc.sys.os == cc.sys.OS_IOS) {
      jsb.reflection.callStaticMethod("MyManager", "callAndroid:", action);
    } else if (cc.sys.os == cc.sys.OS_ANDROID) {
      jsb.reflection.callStaticMethod("com/util/JsUtil", "callAndroid", "(I)V", action);
    }
  },
  callAndroid_2: function callAndroid_2(action, funS) {
    lieyou_showLog("======== native callAndroid_2 action = " + action);
    this.playVDCallBack = funS;

    if (cc.sys.os == cc.sys.OS_IOS) {
      jsb.reflection.callStaticMethod("MyManager", "callPay:", action);
    } else if (cc.sys.os == cc.sys.OS_ANDROID) {
      jsb.reflection.callStaticMethod("com/util/JsUtil", "callPay", "(I)V", action);
    }
  },
  //是否可以显示 开关
  isOpen: function isOpen(key) {
    lieyou_showLog("======== native isopen key = " + key);
    var ss = 0;

    if (cc.sys.os == cc.sys.OS_IOS) {
      ss = jsb.reflection.callStaticMethod("MyManager", "getValue2:", key);
    } else if (cc.sys.os == cc.sys.OS_ANDROID) {
      ss = jsb.reflection.callStaticMethod('com/util/JsUtil', 'getValue2', '(Ljava/lang/String;)I', key);
    }

    ss = parseInt(ss);

    if (ss == 1) {
      return true;
    } else {
      return false;
    }
  },
  isOpenInt: function isOpenInt(key) {
    lieyou_showLog("======== native isopen key = " + key);
    var ss = 0;

    if (cc.sys.os == cc.sys.OS_IOS) {
      ss = jsb.reflection.callStaticMethod("MyManager", "getValue2:", key);
    } else if (cc.sys.os == cc.sys.OS_ANDROID) {
      ss = jsb.reflection.callStaticMethod('com/util/JsUtil', 'getValue2', '(Ljava/lang/String;)I', key);
    }

    ss = parseInt(ss);
    return ss;
  },
  backHome: function backHome() {
    cc.eventManager.removeListeners(cc.EventListener.KEYBOARD); //cc.audioEngine.stopAll();

    setTimeout(function () {
      cc.audioEngine.stopAll();
      mainScneeFromSmallGame = true; // cc.director.loadScene(mainGameScene); 
      //cc.sys.localStorage.setItem("ly_LoadingScene",cc.director.getScene().name);
      // cc.director.emit("ly_MainGameScene");

      var searchPaths = ["assets/"];
      lieyou_showLog("--------------->searchPaths" + JSON.stringify(searchPaths));
      jsb.fileUtils.setSearchPaths(searchPaths);

      window.require("main.js");
    }, 200);
  },
  share: function share(obj) {
    this.callAndroid(ACTION_SHARE);
  },
  showRewardedVideoAd: function showRewardedVideoAd(id, callBack) {
    this.callAndroid_2(ACTION_AD_WATCH, callBack);
  },
  showBannerCustom: function showBannerCustom(obj) {
    this.showBanner();
  },
  showBannerByBottom: function showBannerByBottom(id) {
    this.showBanner();
  },
  showBannerByTop: function showBannerByTop(id) {
    this.showBanner();
  },
  showBanner: function showBanner() {
    if (this._isbnNode && this._isbnNode.isValid) {
      lieyou_showLog("显示版号信息 不能显示banner");
      return;
    }

    if (this._showBanner) {
      lieyou_showLog("已经显示banner 不能重复调用");
      return;
    }

    this._showBanner = true;
    this.callAndroid(ACTION_BANNER_SHOW);
  },
  hideBanner: function hideBanner() {
    this._showBanner = false;
    this.callAndroid(ACTION_BANNER_HIDE);
  },
  showRate: function showRate() {
    this.callAndroid(ACTION_RATE);
  },

  /**
   * 添加好评窗口
   */
  showPraise: function showPraise() {
    if (Userdefault.getIntForKey("SDKShowPraiseNum", 0) > 5) {
      return false;
    }

    if (Userdefault.getBoolForKey("alreadyPraise", false)) {
      return false;
    }

    if (!this.isOpen("isShowRate")) {
      return false;
    }

    var interval = this.isOpenInt("rate_interval");
    interval = interval > 0 ? interval : 3;
    var once = this.isOpenInt("rate_index");
    once = once > 0 ? once : 3;
    var count = Userdefault.getIntForKey("praise_game", 0);
    Userdefault.setDataForKey("praise_game", count + 1);

    if (count >= once - 1 && (count - once - 1) % interval == 0) {
      var num = Userdefault.getIntForKey("SDKShowPraiseNum", 0);
      Userdefault.setDataForKey("SDKShowPraiseNum", num + 1); // cc.loader.loadRes('SDK/module/praise/praiseDialog',function(err,res){

      var fNode = cc.director.getScene();
      var node = lieyou_native_praiseDialogPrefab();
      node.x = cc.winSize.width / 2;
      node.y = cc.winSize.height / 2;
      fNode.addChild(node); // })

      return true;
    }

    return false;
  },

  /**
   * 六边形消除 HexEliminate_lbxxx
   * 皇后吉祥 HScene_hhjx
   * 1010消除 GameScene_1010
   * 合成到z game2_A_Z
   * 蛇蛇与白块 BallAndBlock_Game
   * 蛇蛇设计方块 SnakeShoot_Home
   * 钢琴块3d Block_Game
   * 白块儿装b版 BlockZB_Game
   * 2048方块射击 LoginScene_2048
   * 物理弹球 QQBall_Home
   */
  gotoSmallGame: function gotoSmallGame(gameName) {
    var _this = this;

    cc.eventManager.removeListeners(cc.EventListener.KEYBOARD);
    setTimeout(function () {
      cc.audioEngine.stopAll();
      window.mainGameScene = cc.director.getScene().name;
      cc.sys.localStorage.setItem("ly_LoadingScene", cc.director.getScene().name);
      lieyou_showLog("========native gameScene = " + gameName);

      _this.gameAction(gameName);

      var searchPaths = ["SmallGame/" + gameName + "/"];
      lieyou_showLog("--------------->searchPaths" + JSON.stringify(searchPaths));
      jsb.fileUtils.setSearchPaths(searchPaths);
      lieyou_showLog(jsb.fileUtils.getSearchPaths());

      window.require("main.js");
    }, 200);
  },
  gameAction: function gameAction(gameName) {
    lieyou_showLog("========native gameName = " + gameName);

    if (cc.sys.os == cc.sys.OS_IOS) {
      jsb.reflection.callStaticMethod("MyManager", "gameAction:", gameName);
    } else if (cc.sys.os == cc.sys.OS_ANDROID) {
      jsb.reflection.callStaticMethod("com/util/JsUtil", "gameAction", "(Ljava/lang/String;)V", gameName);
    }
  },
  jniLevel: function jniLevel(level, mode, action) {
    lieyou_showLog("========native jniLevel = " + ' mode = ' + mode + ' level = ' + level + ' action = ' + action);

    if (cc.sys.os == cc.sys.OS_IOS) {
      jsb.reflection.callStaticMethod("MyManager", "callLevel:level:action:", mode, level, action);
    } else if (cc.sys.os == cc.sys.OS_ANDROID) {
      jsb.reflection.callStaticMethod("com/util/JsUtil", "callLevel", "(Ljava/lang/String;II)V", mode, level, action);
    }
  },
  newJumpApp: function newJumpApp(obj) {
    if (obj.success) {
      obj.success();
    }

    obj.umid = oppoGetOnlineDataId;

    if (cc.sys.os == cc.sys.OS_ANDROID) {
      jsb.reflection.callStaticMethod("com/util/JsUtil", "startWeb", "(Ljava/lang/String;)V", JSON.stringify(obj.data));
    }
  },
  showNativeHideBanner: function showNativeHideBanner(node) {
    var _this2 = this;

    var showM = false;

    if (this.moreGameBanner && this.moreGameBanner.isValid) {
      showM = true;
    }

    var showB = this._showBanner;
    var baseNodejs = node.addComponent('lieyou_baseNode');

    baseNodejs.enableCallBack = function () {
      lieyou_SdkManager.hideBanner();
    };

    baseNodejs.destroyCallBack = function () {
      if (showB) {
        _this2.showBanner();
      } else if (showM) {
        lieyou_SdkManager.showMoreGameByBanner();
      }
    };
  },
  showUserAgreement: function showUserAgreement(obj) {
    var color = obj.color ? obj.color : cc.Color.WHITE;
    var fNode = obj.node;
    var node = new cc.Node();
    fNode.addChild(node);
    node.scale = lieyou_SdkManager._SceneScale;
    var userBg = new cc.Node();
    var userBg2 = new cc.Node();
    var user_1 = new cc.Node();
    var user_2 = new cc.Node();
    var user_3 = new cc.Node();
    userBg.color = color;
    userBg2.color = color;
    user_1.color = color;
    user_2.color = color;
    user_3.color = color;
    node.addChild(userBg);
    node.addChild(userBg2);
    node.addChild(user_1);
    node.addChild(user_2);
    node.addChild(user_3);
    userBg.x = -72;
    userBg2.x = -72;
    user_1.x = 0;
    user_2.x = 180;
    user_3.x = 150;
    userBg.y = 0; //-20

    userBg2.active = false;
    user_3.active = false;
    userBg2.y = -userBg.y;
    user_1.y = userBg.y;
    user_2.y = userBg.y;
    user_3.y = -userBg.y;
    userBg.addComponent(cc.Sprite);
    userBg2.addComponent(cc.Sprite);
    user_1.addComponent(cc.Sprite);
    user_2.addComponent(cc.Sprite);
    user_3.addComponent(cc.Sprite);
    lieyou_load('native/userBg.png', function (err, texture) {
      userBg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });
    lieyou_load('native/userBg_2.png', function (err, texture) {
      userBg2.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });
    lieyou_load('native/user_1.png', function (err, texture) {
      user_1.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });
    lieyou_load('native/user_2.png', function (err, texture) {
      user_2.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });
    lieyou_load('native/user_3.png', function (err, texture) {
      user_3.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });
    user_1.addComponent(cc.Button);
    user_2.addComponent(cc.Button);
    user_3.addComponent(cc.Button);
    user_1.on("click", function (event) {
      jsb.reflection.callStaticMethod("com/util/JsUtil", "startProtocol", "(I)V", 0);
    });
    user_2.on("click", function (event) {
      jsb.reflection.callStaticMethod("com/util/JsUtil", "startProtocol", "(I)V", 1);
    });
    user_3.on("click", function (event) {
      jsb.reflection.callStaticMethod("com/util/JsUtil", "setFeedback", "()V");
    });
  }
});
module.exports = NativeManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXHNjcmlwdHNcXE5hdGl2ZU1hbmFnZXIuanMiXSwibmFtZXMiOlsid2luZG93IiwiQUNUSU9OX1NIQVJFIiwiQUNUSU9OX1NIQVJFX1NVQ0NFU1MiLCJBQ1RJT05fU0hBUkVfRkFJTCIsIkFDVElPTl9SQVRFIiwiQUNUSU9OX1JBVEVfU1lTIiwiQUNUSU9OX0VYSVQiLCJBQ1RJT05fRVhJVF9CQUNLIiwiQUNUSU9OX0FEX1BBVVNFIiwiQUNUSU9OX0FEX1JFU1VMVCIsIkFDVElPTl9NT1JFIiwiQUNUSU9OX0FEX1dBVENIIiwiQUNUSU9OX1JBTktTIiwiQUNUSU9OX1JBTktTX0xPR0lOIiwiQUNUSU9OX1JBTktTX1NVQk1JVCIsIkFDVElPTl9SQU5LU19TVUJNSVRfQnlOYW1lIiwiQUNUSU9OX1RPX0FQUCIsIkFDVElPTl9UT19BUFBfUkFORE9NIiwiQUNUSU9OX1RPX1dFQ0hBVCIsIkFDVElPTl9UT19XRUNIQVRfQVVUTyIsIkFDVElPTl9BVFRFTlRJT05fV0VDSEFUIiwiQUNUSU9OX0VYQ0hBTkdFX0NPREUiLCJLRVlfRVhDSEFOR0UiLCJLRVlfT1BFTl9WSURFTyIsIktFWV9PUEVOX0ZSRUVfR09MRCIsIktFWV9PUEVOX01PUkVHQU1FIiwiS0VZX09QRU5fQUJPVVQiLCJLRVlfSVNfU0hFTkhFIiwiS0VZX0lTX09QRU5QQVkiLCJBQ1RJT05fQkFOTkVSX1NIT1ciLCJBQ1RJT05fQkFOTkVSX0hJREUiLCJBQ1RJT05fUkFURV9DT0lOUyIsIkFDVElPTl9GRUVEQkFDSyIsIlNUQVRFX1BBVVNFIiwiU1RBVEVfUkVTVU1FIiwiY3BwX0NhbGxCeUxvc3QiLCJ0eXBlIiwiY3BwX0NhbGxqcyIsIlllc09yTm8iLCJsaWV5b3VfU2RrTWFuYWdlciIsImluc3RhbmNlIiwicGF5Q2FsbEJhY2siLCJwbGF5VkRDYWxsQmFjayIsIk5hdGl2ZU1hbmFnZXIiLCJjYyIsIkNsYXNzIiwicmVxdWlyZSIsInByb3BlcnRpZXMiLCJnZXRIYXZlVmlkZW8iLCJpc09wZW4iLCJnZXRTeXNQbGF0Zm9ybV9zdHJpbmciLCJnZXRTeXNQbGF0Zm9ybSIsInNldE9ubGluZURhdGEiLCJkYXRhIiwiYWREYXRhIiwidGhlbWUiLCJjcm9zc1N3aXRjaCIsImJpekRhdGEiLCJhZF9kYXRhcyIsImlzU2hvd0Nyb3NzIiwic2V0QWREYXRhIiwiZ2V0U3RyaW5nVmFsdWUiLCJrZXkiLCJzeXMiLCJvcyIsIk9TX0FORFJPSUQiLCJqc2IiLCJyZWZsZWN0aW9uIiwiY2FsbFN0YXRpY01ldGhvZCIsInNldElTQk4iLCJpc2JuIiwiaXNibjIiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJfSVNCTiIsImVycm9yIiwiaW5pdCIsIm9iaiIsIl9zdXBlciIsImJhc2VfSXNTaGVuSGUiLCJpbml0T25saW5lRGF0YSIsInZpYnJhdGVTaG9ydCIsInZpYnJhdGVDdXN0b20iLCJ2aWJyYXRlTG9uZyIsInRpbWUiLCJoaWRlSVNCTiIsIl9pc2JuTm9kZSIsImlzVmFsaWQiLCJkZXN0cm95Iiwic2hvd0lTQk4iLCJoaWRlQmFubmVyIiwiTm9kZSIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJhZGRDaGlsZCIsImxhYmVsTm9kZSIsImJnIiwiYW5jaG9yWSIsIngiLCJ3aW5TaXplIiwid2lkdGgiLCJsYWJlbCIsImFkZENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwiY29sb3IiLCJmb250U2l6ZSIsInNpemUiLCJsaW5lSGVpZ2h0IiwiaG9yaXpvbnRhbEFsaWduIiwiSG9yaXpvbnRhbEFsaWduIiwiQ0VOVEVSIiwidmVydGljYWxBbGlnbiIsIlZlcnRpY2FsQWxpZ24iLCJCT1RUT00iLCJTcHJpdGUiLCJvcGFjaXR5IiwibGlleW91X2xvYWQiLCJlcnIiLCJ0ZXh0dXJlIiwiZ2V0Q29tcG9uZW50Iiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsInNpemVNb2RlIiwiU2l6ZU1vZGUiLCJDVVNUT00iLCJoZWlnaHQiLCJsb2ciLCJzY2FsZSIsIl9TY2VuZVNjYWxlIiwic2hvd05hdGl2ZUJhbm5lciIsInRvcCIsImxpZXlvdV9zaG93TG9nIiwiT1NfSU9TIiwiaGlkZU5hdGl2ZUJhbm5lciIsInNob3dQYXVzZUFkIiwiaXNIYXZlTmF0aXZlIiwic2hvd1Jlc3VsdEFkIiwic2hvd1ByYWlzZSIsInNob3dTcG90QnlCZWdpbiIsInNob3dTcG90QnlQYXVzZSIsInNob3dTcG90QnlGaW5pc2giLCJjYWxsUGF5IiwiYWN0aW9uIiwiZnVuUyIsImNhbGxBbmRyb2lkIiwiY2FsbEFuZHJvaWRfMiIsInNzIiwicGFyc2VJbnQiLCJpc09wZW5JbnQiLCJiYWNrSG9tZSIsImV2ZW50TWFuYWdlciIsInJlbW92ZUxpc3RlbmVycyIsIkV2ZW50TGlzdGVuZXIiLCJLRVlCT0FSRCIsInNldFRpbWVvdXQiLCJhdWRpb0VuZ2luZSIsInN0b3BBbGwiLCJtYWluU2NuZWVGcm9tU21hbGxHYW1lIiwic2VhcmNoUGF0aHMiLCJKU09OIiwic3RyaW5naWZ5IiwiZmlsZVV0aWxzIiwic2V0U2VhcmNoUGF0aHMiLCJzaGFyZSIsInNob3dSZXdhcmRlZFZpZGVvQWQiLCJpZCIsImNhbGxCYWNrIiwic2hvd0Jhbm5lckN1c3RvbSIsInNob3dCYW5uZXIiLCJzaG93QmFubmVyQnlCb3R0b20iLCJzaG93QmFubmVyQnlUb3AiLCJfc2hvd0Jhbm5lciIsInNob3dSYXRlIiwiVXNlcmRlZmF1bHQiLCJnZXRJbnRGb3JLZXkiLCJnZXRCb29sRm9yS2V5IiwiaW50ZXJ2YWwiLCJvbmNlIiwiY291bnQiLCJzZXREYXRhRm9yS2V5IiwibnVtIiwiZk5vZGUiLCJub2RlIiwibGlleW91X25hdGl2ZV9wcmFpc2VEaWFsb2dQcmVmYWIiLCJ5IiwiZ290b1NtYWxsR2FtZSIsImdhbWVOYW1lIiwibWFpbkdhbWVTY2VuZSIsIm5hbWUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2FtZUFjdGlvbiIsImdldFNlYXJjaFBhdGhzIiwiam5pTGV2ZWwiLCJsZXZlbCIsIm1vZGUiLCJuZXdKdW1wQXBwIiwic3VjY2VzcyIsInVtaWQiLCJvcHBvR2V0T25saW5lRGF0YUlkIiwic2hvd05hdGl2ZUhpZGVCYW5uZXIiLCJzaG93TSIsIm1vcmVHYW1lQmFubmVyIiwic2hvd0IiLCJiYXNlTm9kZWpzIiwiZW5hYmxlQ2FsbEJhY2siLCJkZXN0cm95Q2FsbEJhY2siLCJzaG93TW9yZUdhbWVCeUJhbm5lciIsInNob3dVc2VyQWdyZWVtZW50IiwiQ29sb3IiLCJXSElURSIsInVzZXJCZyIsInVzZXJCZzIiLCJ1c2VyXzEiLCJ1c2VyXzIiLCJ1c2VyXzMiLCJhY3RpdmUiLCJCdXR0b24iLCJvbiIsImV2ZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBQSxNQUFNLENBQUNDLFlBQVAsR0FBc0IsSUFBdEI7QUFDQUQsTUFBTSxDQUFDRSxvQkFBUCxHQUE4QixJQUE5QjtBQUNBRixNQUFNLENBQUNHLGlCQUFQLEdBQTJCLElBQTNCO0FBRUFILE1BQU0sQ0FBQ0ksV0FBUCxHQUFxQixJQUFyQjtBQUNBSixNQUFNLENBQUNLLGVBQVAsR0FBeUIsSUFBekI7QUFFQUwsTUFBTSxDQUFDTSxXQUFQLEdBQXFCLElBQXJCO0FBQ0FOLE1BQU0sQ0FBQ08sZ0JBQVAsR0FBMEIsSUFBMUI7QUFFQVAsTUFBTSxDQUFDUSxlQUFQLEdBQXlCLElBQXpCO0FBQ0FSLE1BQU0sQ0FBQ1MsZ0JBQVAsR0FBMEIsSUFBMUI7QUFDQVQsTUFBTSxDQUFDVSxXQUFQLEdBQXFCLElBQXJCO0FBQ0FWLE1BQU0sQ0FBQ1csZUFBUCxHQUF5QixJQUF6QjtBQUVBWCxNQUFNLENBQUNZLFlBQVAsR0FBc0IsSUFBdEI7QUFDQVosTUFBTSxDQUFDYSxrQkFBUCxHQUE0QixJQUE1QjtBQUNBYixNQUFNLENBQUNjLG1CQUFQLEdBQTZCLElBQTdCO0FBQ0FkLE1BQU0sQ0FBQ2UsMEJBQVAsR0FBb0MsSUFBcEM7QUFFQWYsTUFBTSxDQUFDZ0IsYUFBUCxHQUF1QixJQUF2QjtBQUNBaEIsTUFBTSxDQUFDaUIsb0JB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akU7QUFDQSxLQUZLO0FBR0g7QUFsZHdCLENBQVQsQ0FBcEI7QUFxZEEwSixNQUFNLENBQUNDLE9BQVAsR0FBaUJwTCxhQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vYmNkYWY5MjAtM2UxOC00OVxyXG53aW5kb3cuQUNUSU9OX1NIQVJFID0gMTEwMDtcclxud2luZG93LkFDVElPTl9TSEFSRV9TVUNDRVNTID0gMTEwMTtcclxud2luZG93LkFDVElPTl9TSEFSRV9GQUlMID0gMTEwMjtcclxuXHJcbndpbmRvdy5BQ1RJT05fUkFURSA9IDEyMDE7XHJcbndpbmRvdy5BQ1RJT05fUkFURV9TWVMgPSAxMjAyO1xyXG5cclxud2luZG93LkFDVElPTl9FWElUID0gMTMwMTtcclxud2luZG93LkFDVElPTl9FWElUX0JBQ0sgPSAxMzAyO1xyXG5cclxud2luZG93LkFDVElPTl9BRF9QQVVTRSA9IDIwMDA7XHJcbndpbmRvdy5BQ1RJT05fQURfUkVTVUxUID0gMjAwMTtcclxud2luZG93LkFDVElPTl9NT1JFID0gMjAwMjtcclxud2luZG93LkFDVElPTl9BRF9XQVRDSCA9IDIyMDA7XHJcblxyXG53aW5kb3cuQUNUSU9OX1JBTktTID0gMzAwMDtcclxud2luZG93LkFDVElPTl9SQU5LU19MT0dJTiA9IDMwMDE7XHJcbndpbmRvdy5BQ1RJT05fUkFOS1NfU1VCTUlUID0gMzAwMjtcclxud2luZG93LkFDVElPTl9SQU5LU19TVUJNSVRfQnlOYW1lID0gMzAwMztcclxuXHJcbndpbmRvdy5BQ1RJT05fVE9fQVBQID0gMjAwMztcclxud2luZG93LkFDVElPTl9UT19BUFBfUkFORE9NID0gMjAwODtcclxud2luZG93LkFDVElPTl9UT19XRUNIQVQgPSAyMDA0O1xyXG53aW5kb3cuQUNUSU9OX1RPX1dFQ0hBVF9BVVRPID0gMjAwNTtcclxuXHJcblxyXG53aW5kb3cuQUNUSU9OX0FUVEVOVElPTl9XRUNIQVQgPSAyMDA2O1xyXG53aW5kb3cuQUNUSU9OX0VYQ0hBTkdFX0NPREUgPSAyMDA3O1xyXG53aW5kb3cuS0VZX0VYQ0hBTkdFID0gXCJleGNoYW5nZV9jb2RlXCI7XHJcbndpbmRvdy5LRVlfT1BFTl9WSURFTyA9IFwiaXNPcGVuVmlkZW9cIjtcclxud2luZG93LktFWV9PUEVOX0ZSRUVfR09MRCA9IFwic2hvd19mcmVlXCI7XHJcbndpbmRvdy5LRVlfT1BFTl9NT1JFR0FNRSA9IFwibW9yZUdhbWVfY29kZVwiO1xyXG53aW5kb3cuS0VZX09QRU5fQUJPVVQgPSBcImFib3V0X2NvZGVcIjtcclxud2luZG93LktFWV9JU19TSEVOSEUgPSBcImlzQXVkaXRcIjtcclxud2luZG93LktFWV9JU19PUEVOUEFZID0gJ2lzT3BlblBheSc7XHJcbndpbmRvdy5BQ1RJT05fQkFOTkVSX1NIT1cgPSAyMTAyO1xyXG53aW5kb3cuQUNUSU9OX0JBTk5FUl9ISURFID0gMjEwMztcclxuXHJcbndpbmRvdy5BQ1RJT05fUkFURV9DT0lOUyA9IDE5OTc7XHJcblxyXG53aW5kb3cuQUNUSU9OX0ZFRURCQUNLID0gMTExMDtcclxuXHJcbndpbmRvdy5TVEFURV9QQVVTRSA9IDEwO1xyXG53aW5kb3cuU1RBVEVfUkVTVU1FID0gMjA7XHJcblxyXG53aW5kb3cuY3BwX0NhbGxCeUxvc3QgPSBmdW5jdGlvbih0eXBlKSB7XHJcbiAgICBcclxufTtcclxuXHJcbndpbmRvdy5jcHBfQ2FsbGpzID0gZnVuY3Rpb24odHlwZSwgWWVzT3JObyl7XHJcbiAgICAgICAgLy8gY2MuZ2FtZS5yZXN1bWUoKTtcclxuICAgICAgICBpZihZZXNPck5vKXtcclxuICAgICAgICAgICAgaWYobGlleW91X1Nka01hbmFnZXIuaW5zdGFuY2UucGF5Q2FsbEJhY2spe1xyXG4gICAgICAgICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuaW5zdGFuY2UucGF5Q2FsbEJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihsaWV5b3VfU2RrTWFuYWdlci5pbnN0YW5jZS5wbGF5VkRDYWxsQmFjayl7XHJcbiAgICAgICAgICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5pbnN0YW5jZS5wbGF5VkRDYWxsQmFjaygxKTtcclxuICAgICAgICAgICAgfSAgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZihsaWV5b3VfU2RrTWFuYWdlci5pbnN0YW5jZS5wbGF5VkRDYWxsQmFjayl7XHJcbiAgICAgICAgICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5pbnN0YW5jZS5wbGF5VkRDYWxsQmFjaygwKTtcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICAgICAgbGlleW91X1Nka01hbmFnZXIuaW5zdGFuY2UucGF5Q2FsbEJhY2sgPSBudWxsO1xyXG4gICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLmluc3RhbmNlLnBsYXlWRENhbGxCYWNrID0gbnVsbDtcclxufTtcclxuXHJcbmxldCBOYXRpdmVNYW5hZ2VyID0gY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IHJlcXVpcmUoJ0Jhc2VNYW5hZ2VyJyksXHJcblx0cHJvcGVydGllczp7XHJcbiAgICAgICAgcGF5Q2FsbEJhY2s6bnVsbCxcclxuICAgICAgICBwbGF5VkRDYWxsQmFjazpudWxsLFxyXG4gICAgfSxcclxuICAgIGdldEhhdmVWaWRlbygpe1xyXG4gICAgICAgIGlmKHRoaXMuaXNPcGVuKEtFWV9PUEVOX1ZJREVPKSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgZ2V0U3lzUGxhdGZvcm1fc3RyaW5nKCl7XHJcblx0XHRyZXR1cm4gJ25hdGl2ZSc7XHJcbiAgICB9LFxyXG4gICAgZ2V0U3lzUGxhdGZvcm0oKXtcclxuXHRcdHJldHVybiAxO1xyXG5cdH0sXHJcbiAgICBzZXRPbmxpbmVEYXRhKGRhdGEpe1xyXG4gICAgICAgIGlmKGRhdGEubmF0aXZlKXtcclxuICAgICAgICAgICAgdmFyIGFkRGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBpZihkYXRhLm5hdGl2ZS50aGVtZSl7XHJcbiAgICAgICAgICAgICAgICBhZERhdGEudGhlbWUgPSBkYXRhLm5hdGl2ZS50aGVtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihkYXRhLm5hdGl2ZS5jcm9zc1N3aXRjaCl7XHJcbiAgICAgICAgICAgICAgICBhZERhdGEuY3Jvc3NTd2l0Y2ggPSBkYXRhLm5hdGl2ZS5jcm9zc1N3aXRjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihkYXRhLm5hdGl2ZS5iaXpEYXRhKXtcclxuICAgICAgICAgICAgICAgIGFkRGF0YS5iaXpEYXRhID0gZGF0YS5uYXRpdmUuYml6RGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihkYXRhLm5hdGl2ZS5hZF9kYXRhcyl7XHJcbiAgICAgICAgICAgICAgICBhZERhdGEuYWRfZGF0YXMgPSBkYXRhLm5hdGl2ZS5hZF9kYXRhcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihkYXRhLm5hdGl2ZS5zd2l0Y2gpe1xyXG4gICAgICAgICAgICAgICAgYWREYXRhLnN3aXRjaCA9IGRhdGEubmF0aXZlLnN3aXRjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0aGlzLmlzU2hvd0Nyb3NzKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWREYXRhKGFkRGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0U3RyaW5nVmFsdWUoa2V5KXtcclxuICAgICAgICBpZihjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpe1xyXG4gICAgICAgICAgICByZXR1cm4ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcImNvbS91dGlsL0pzVXRpbFwiLFwiZ2V0U3RyaW5nVmFsdWVcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nO1wiLGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfSxcclxuICAgIHNldElTQk4oKXtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB2YXIgaXNibiA9IHRoaXMuZ2V0U3RyaW5nVmFsdWUoXCJpc2JuXCIpO1xyXG4gICAgICAgICAgICB2YXIgaXNibjIgPSBpc2JuLnNwbGl0KFwiLVwiKTtcclxuICAgICAgICAgICAgaXNibiA9IFwiXCI7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7aTxpc2JuMi5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIGlzYm4gPSBpc2JuK2lzYm4yW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYoaSAhPSBpc2JuMi5sZW5ndGgtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNibiA9IGlzYm4rXCJcXG5cIjsgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fSVNCTiA9IGlzYm47XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24ob2JqKXtcclxuICAgICAgICB0aGlzLl9zdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYmFzZV9Jc1NoZW5IZSA9IHRoaXMuaXNPcGVuKEtFWV9JU19TSEVOSEUpO1xyXG4gICAgICAgIHRoaXMuaXNTaG93Q3Jvc3MgPSB0aGlzLmlzT3BlbihcImlzQ3Jvc3NcIik7XHJcbiAgICAgICAgdGhpcy5zZXRJU0JOKCk7XHJcbiAgICAgICAgdGhpcy5pbml0T25saW5lRGF0YSgpO1xyXG4gICAgfSxcclxuICAgIHZpYnJhdGVTaG9ydCgpe1xyXG4gICAgICAgIHRoaXMudmlicmF0ZUN1c3RvbSgzMCk7XHJcbiAgICB9LFxyXG4gICAgdmlicmF0ZUxvbmcoKXtcclxuICAgICAgICB0aGlzLnZpYnJhdGVDdXN0b20oMTAwKTtcclxuICAgIH0sXHJcbiAgICB2aWJyYXRlQ3VzdG9tKHRpbWUpe1xyXG4gICAgICAgIGlmKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCl7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJjb20vdXRpbC9Kc1V0aWxcIixcIlZpYnJhdGVcIiwgXCIoSSlWXCIsdGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhpZGVJU0JOKCl7XHJcbiAgICAgICAgaWYodGhpcy5faXNibk5vZGUgJiYgdGhpcy5faXNibk5vZGUuaXNWYWxpZCl7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzYm5Ob2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5faXNibk5vZGUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93SVNCTihvYmope1xyXG4gICAgICAgIGlmKHRoaXMuX2lzYm5Ob2RlICYmIHRoaXMuX2lzYm5Ob2RlLmlzVmFsaWQpe1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVCYW5uZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLl9JU0JOICYmIHRoaXMuX0lTQk4gIT0gXCJcIil7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzYm5Ob2RlID0gbmV3IGNjLk5vZGUoKTtcclxuXHRcdFx0Y2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZCh0aGlzLl9pc2JuTm9kZSk7XHJcblx0XHRcdGxldCBsYWJlbE5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG5cdFx0XHRsZXQgYmcgPSBuZXcgY2MuTm9kZSgpO1xyXG5cdFx0XHR0aGlzLl9pc2JuTm9kZS5hZGRDaGlsZChiZyk7XHJcblx0XHRcdHRoaXMuX2lzYm5Ob2RlLmFkZENoaWxkKGxhYmVsTm9kZSk7XHJcblx0XHRcdHRoaXMuX2lzYm5Ob2RlLmFuY2hvclkgPSAwO1xyXG5cdFx0XHRsYWJlbE5vZGUuYW5jaG9yWSA9IDA7XHJcblx0XHRcdGJnLmFuY2hvclkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLl9pc2JuTm9kZS54ID0gY2Mud2luU2l6ZS53aWR0aC8yO1xyXG4gICAgICAgICAgICBsZXQgbGFiZWwgPSBsYWJlbE5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgbGFiZWwuc3RyaW5nID0gdGhpcy5fSVNCTjtcclxuICAgICAgICAgICAgb2JqLmNvbG9yICYmIChsYWJlbE5vZGUuY29sb3IgPSBvYmouY29sb3IpO1xyXG4gICAgICAgICAgICBsYWJlbC5mb250U2l6ZSA9IG9iai5zaXplP29iai5zaXplOjIyO1xyXG4gICAgICAgICAgICBsYWJlbC5saW5lSGVpZ2h0ID0gb2JqLnNpemU/KG9iai5zaXplKzIpOjI0O1xyXG5cdFx0XHRsYWJlbC5ob3Jpem9udGFsQWxpZ24gPSBjYy5MYWJlbC5Ib3Jpem9udGFsQWxpZ24uQ0VOVEVSO1xyXG5cdFx0XHRsYWJlbC52ZXJ0aWNhbEFsaWduID0gY2MuTGFiZWwuVmVydGljYWxBbGlnbi5CT1RUT007XHJcblx0XHRcdGJnLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG5cdFx0XHRiZy5vcGFjaXR5ID0gMTAwO1xyXG5cdFx0XHRsaWV5b3VfbG9hZCgncV9hZC9vcHBvX25hdGl2ZV9pbnN0ZXJzX2xheWVyQmcucG5nJywgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG5cdFx0XHRcdGJnLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG5cdFx0XHRcdGJnLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcclxuXHRcdFx0XHRiZy53aWR0aCA9IGNjLndpblNpemUud2lkdGg7XHJcblx0XHRcdFx0YmcuaGVpZ2h0ID0gbGFiZWxOb2RlLmhlaWdodDtcclxuXHRcdFx0XHRjYy5sb2cobGFiZWxOb2RlLmhlaWdodClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGxhYmVsTm9kZS5zY2FsZSA9IGxpZXlvdV9TZGtNYW5hZ2VyLl9TY2VuZVNjYWxlO1xyXG4gICAgICAgICAgICB0aGlzLmhpZGVCYW5uZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzaG93TmF0aXZlQmFubmVyKHRvcCl7XHJcbiAgICAgICAgbGlleW91X3Nob3dMb2coXCI9PT09PT09PW5hdGl2ZSAgc2hvdyBOYXRpdmUgQmFubmVyID0gIHRvcDpcIit0b3ApO1xyXG4gICAgICAgIGlmKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKXtcclxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIk15TWFuYWdlclwiLFwic2hvd05hdGl2ZVZpZXc6XCIsdG9wKTtcclxuICAgICAgICB9ZWxzZSBpZihjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpe1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiY29tL3V0aWwvSnNVdGlsXCIsXCJzaG93TmF0aXZlVmlld1wiLCBcIihGKVZcIix0b3ApO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBoaWRlTmF0aXZlQmFubmVyKCl7XHJcbiAgICAgICAgbGlleW91X3Nob3dMb2coXCI9PT09PT09PW5hdGl2ZSAgaGlkZSBOYXRpdmUgQmFubmVyID0gXCIpO1xyXG4gICAgICAgIGlmKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKXtcclxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIk15TWFuYWdlclwiLFwiY2xvc2VOYXRpdmVWaWV3OlwiLDApO1xyXG4gICAgICAgIH1lbHNlIGlmKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCl7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJjb20vdXRpbC9Kc1V0aWxcIixcImNsb3NlTmF0aXZlVmlld1wiLCBcIigpVlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2hvd1BhdXNlQWQoaXNIYXZlTmF0aXZlLHRvcCl7XHJcbiAgICAgICAgbGlleW91X3Nob3dMb2coXCI9PT09PT09PW5hdGl2ZSAgc2hvdyBOYXRpdmUgc2hvd1BhdXNlQWQgPSBpc0hhdmVOYXRpdmU6XCIraXNIYXZlTmF0aXZlK1wiIHRvcDpcIit0b3ApO1xyXG4gICAgICAgIGlmKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKXtcclxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIk15TWFuYWdlclwiLFwic2hvd1BhdXNlQWQ6c2hvd1BvczpcIixpc0hhdmVOYXRpdmUsdG9wKTtcclxuICAgICAgICB9ZWxzZSBpZihjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpe1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiY29tL3V0aWwvSnNVdGlsXCIsXCJzaG93UGF1c2VBZFwiLCBcIihaRilWXCIsaXNIYXZlTmF0aXZlLHRvcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNob3dSZXN1bHRBZChpc0hhdmVOYXRpdmUsdG9wKXtcclxuICAgICAgICBsaWV5b3Vfc2hvd0xvZyhcIj09PT09PT09bmF0aXZlICBzaG93IE5hdGl2ZSBzaG93UmVzdWx0QWQgPSBpc0hhdmVOYXRpdmU6XCIraXNIYXZlTmF0aXZlK1wiIHRvcDpcIit0b3ApO1xyXG5cclxuICAgICAgICBpZih0aGlzLnNob3dQcmFpc2UoKSl7XHJcbiAgICAgICAgICAgIGlmKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKXtcclxuICAgICAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJNeU1hbmFnZXJcIixcInNob3dSZXN1bHRBZDpzaG93UG9zOlwiLGZhbHNlLHRvcCk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCl7XHJcbiAgICAgICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiY29tL3V0aWwvSnNVdGlsXCIsXCJzaG93UmVzdWx0QWRcIiwgXCIoWkYpVlwiLGZhbHNlLHRvcCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1Mpe1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiTXlNYW5hZ2VyXCIsXCJzaG93UmVzdWx0QWQ6c2hvd1BvczpcIixpc0hhdmVOYXRpdmUsdG9wKTtcclxuICAgICAgICB9ZWxzZSBpZihjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpe1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiY29tL3V0aWwvSnNVdGlsXCIsXCJzaG93UmVzdWx0QWRcIiwgXCIoWkYpVlwiLGlzSGF2ZU5hdGl2ZSx0b3ApO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93U3BvdEJ5QmVnaW4oaXNIYXZlTmF0aXZlLHRvcCl7XHJcbiAgICAgICAgbGlleW91X3Nob3dMb2coXCI9PT09PT09PW5hdGl2ZSBiZWdpbiBzcG90ID0gXCIpO1xyXG4gICAgfSxcclxuICAgIHNob3dTcG90QnlQYXVzZShpc0hhdmVOYXRpdmUsdG9wKXtcclxuICAgICAgICB0aGlzLnNob3dQYXVzZUFkKGlzSGF2ZU5hdGl2ZSx0b3ApO1xyXG4gICAgfSxcclxuICAgIHNob3dTcG90QnlGaW5pc2goaXNIYXZlTmF0aXZlLHRvcCl7XHJcbiAgICAgICAgdGhpcy5zaG93UmVzdWx0QWQoaXNIYXZlTmF0aXZlLHRvcCk7XHJcbiAgICB9LFxyXG4gICAgY2FsbFBheShhY3Rpb24sZnVuUyl7XHJcbiAgICAgICAgbGlleW91X3Nob3dMb2coXCI9PT09PT09PSBuYXRpdmUgY2FsbFBheSBhY3Rpb24gPSBcIiArIGFjdGlvbik7XHJcbiAgICAgICAgLy8gY2MuZ2FtZS5wYXVzZSgpO1xyXG4gICAgICAgIHRoaXMucGF5Q2FsbEJhY2sgPSBmdW5TO1xyXG4gICAgICAgIGlmKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKXtcclxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIk15TWFuYWdlclwiLFwiY2FsbFBheTpcIixhY3Rpb24pO1xyXG4gICAgICAgIH1lbHNlIGlmKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCl7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJjb20vdXRpbC9Kc1V0aWxcIixcImNhbGxQYXlcIiwgXCIoSSlWXCIsYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBjYWxsQW5kcm9pZChhY3Rpb24pe1xyXG4gICAgICAgIGxpZXlvdV9zaG93TG9nKFwiPT09PT09PT0gbmF0aXZlIGNhbGxBbmRyb2lkIGFjdGlvbiA9IFwiICsgYWN0aW9uKTtcclxuICAgICAgICBpZihjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0lPUyl7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJNeU1hbmFnZXJcIixcImNhbGxBbmRyb2lkOlwiLGFjdGlvbik7XHJcbiAgICAgICAgfWVsc2UgaWYoY2Muc3lzLm9zID09IGNjLnN5cy5PU19BTkRST0lEKXtcclxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcImNvbS91dGlsL0pzVXRpbFwiLFwiY2FsbEFuZHJvaWRcIiwgXCIoSSlWXCIsYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNhbGxBbmRyb2lkXzIoYWN0aW9uLGZ1blMpe1xyXG4gICAgICAgIGxpZXlvdV9zaG93TG9nKFwiPT09PT09PT0gbmF0aXZlIGNhbGxBbmRyb2lkXzIgYWN0aW9uID0gXCIgKyBhY3Rpb24pO1xyXG4gICAgICAgIHRoaXMucGxheVZEQ2FsbEJhY2sgPSBmdW5TO1xyXG4gICAgICAgIGlmKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKXtcclxuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIk15TWFuYWdlclwiLFwiY2FsbFBheTpcIixhY3Rpb24pO1xyXG4gICAgICAgIH1lbHNlIGlmKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCl7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJjb20vdXRpbC9Kc1V0aWxcIixcImNhbGxQYXlcIiwgXCIoSSlWXCIsYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/mmK/lkKblj6/ku6XmmL7npLog5byA5YWzXHJcbiAgICBpc09wZW4oa2V5KXtcclxuICAgICAgICBsaWV5b3Vfc2hvd0xvZyhcIj09PT09PT09IG5hdGl2ZSBpc29wZW4ga2V5ID0gXCIgKyBrZXkpO1xyXG4gICAgICAgIHZhciBzcyA9IDA7XHJcbiAgICAgICAgaWYoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1Mpe1xyXG4gICAgICAgICAgICBzcyA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJNeU1hbmFnZXJcIixcImdldFZhbHVlMjpcIixrZXkpO1xyXG4gICAgICAgIH1lbHNlIGlmKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCl7XHJcbiAgICAgICAgICAgIHNzID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZCgnY29tL3V0aWwvSnNVdGlsJywnZ2V0VmFsdWUyJywnKExqYXZhL2xhbmcvU3RyaW5nOylJJyxrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcyA9IHBhcnNlSW50KHNzKTtcclxuICAgICAgICBpZihzcyA9PSAxKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaXNPcGVuSW50KGtleSl7XHJcbiAgICAgICAgbGlleW91X3Nob3dMb2coXCI9PT09PT09PSBuYXRpdmUgaXNvcGVuIGtleSA9IFwiICsga2V5KTtcclxuICAgICAgICB2YXIgc3MgPSAwO1xyXG4gICAgICAgIGlmKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfSU9TKXtcclxuICAgICAgICAgICAgc3MgPSBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiTXlNYW5hZ2VyXCIsXCJnZXRWYWx1ZTI6XCIsa2V5KTtcclxuICAgICAgICB9ZWxzZSBpZihjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpe1xyXG4gICAgICAgICAgICBzcyA9IGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoJ2NvbS91dGlsL0pzVXRpbCcsJ2dldFZhbHVlMicsJyhMamF2YS9sYW5nL1N0cmluZzspSScsa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3MgPSBwYXJzZUludChzcyk7XHJcbiAgICAgICAgcmV0dXJuIHNzO1xyXG4gICAgfSxcclxuICAgIGJhY2tIb21lKCl7XHJcbiAgICAgICAgY2MuZXZlbnRNYW5hZ2VyLnJlbW92ZUxpc3RlbmVycyhjYy5FdmVudExpc3RlbmVyLktFWUJPQVJEKTtcclxuICAgICAgICAvL2NjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICBcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICBtYWluU2NuZWVGcm9tU21hbGxHYW1lID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gY2MuZGlyZWN0b3IubG9hZFNjZW5lKG1haW5HYW1lU2NlbmUpOyBcclxuXHJcbiAgICAgICAgLy9jYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJseV9Mb2FkaW5nU2NlbmVcIixjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUpO1xyXG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLmVtaXQoXCJseV9NYWluR2FtZVNjZW5lXCIpO1xyXG5cclxuICAgICAgICB2YXIgc2VhcmNoUGF0aHMgPSBbXCJhc3NldHMvXCJdO1xyXG4gICAgICAgIGxpZXlvdV9zaG93TG9nKFwiLS0tLS0tLS0tLS0tLS0tPnNlYXJjaFBhdGhzXCIgKyBKU09OLnN0cmluZ2lmeShzZWFyY2hQYXRocykpO1xyXG4gICAgICAgIGpzYi5maWxlVXRpbHMuc2V0U2VhcmNoUGF0aHMoc2VhcmNoUGF0aHMpO1xyXG5cclxuICAgICAgICAgICAgd2luZG93LnJlcXVpcmUoXCJtYWluLmpzXCIpO1xyXG4gICAgICAgIH0sMjAwKTtcclxuICAgIFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc2hhcmUob2JqKXtcclxuICAgICAgICB0aGlzLmNhbGxBbmRyb2lkKEFDVElPTl9TSEFSRSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3dSZXdhcmRlZFZpZGVvQWQoaWQsY2FsbEJhY2spe1xyXG4gICAgICAgIHRoaXMuY2FsbEFuZHJvaWRfMihBQ1RJT05fQURfV0FUQ0gsY2FsbEJhY2spO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93QmFubmVyQ3VzdG9tKG9iail7XHJcbiAgICAgICAgdGhpcy5zaG93QmFubmVyKCk7XHJcbiAgICB9LFxyXG4gICAgc2hvd0Jhbm5lckJ5Qm90dG9tKGlkKXtcclxuICAgICAgICB0aGlzLnNob3dCYW5uZXIoKTtcclxuICAgIH0sXHJcbiAgICBzaG93QmFubmVyQnlUb3AoaWQpe1xyXG4gICAgICAgIHRoaXMuc2hvd0Jhbm5lcigpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgc2hvd0Jhbm5lcigpe1xyXG4gICAgICAgIGlmKHRoaXMuX2lzYm5Ob2RlICYmIHRoaXMuX2lzYm5Ob2RlLmlzVmFsaWQpe1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZyhcIuaYvuekuueJiOWPt+S/oeaBryDkuI3og73mmL7npLpiYW5uZXJcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5fc2hvd0Jhbm5lcil7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKFwi5bey57uP5pi+56S6YmFubmVyIOS4jeiDvemHjeWkjeiwg+eUqFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9zaG93QmFubmVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhbGxBbmRyb2lkKEFDVElPTl9CQU5ORVJfU0hPVyk7XHJcbiAgICB9LFxyXG4gICAgaGlkZUJhbm5lcigpe1xyXG4gICAgICAgIHRoaXMuX3Nob3dCYW5uZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNhbGxBbmRyb2lkKEFDVElPTl9CQU5ORVJfSElERSk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBzaG93UmF0ZSgpe1xyXG4gICAgICAgIHRoaXMuY2FsbEFuZHJvaWQoQUNUSU9OX1JBVEUpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICog5re75Yqg5aW96K+E56qX5Y+jXHJcbiAgICAgKi9cclxuICAgIHNob3dQcmFpc2UoKXtcclxuICAgICAgICBpZihVc2VyZGVmYXVsdC5nZXRJbnRGb3JLZXkoXCJTREtTaG93UHJhaXNlTnVtXCIsMCkgPiA1KXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihVc2VyZGVmYXVsdC5nZXRCb29sRm9yS2V5KFwiYWxyZWFkeVByYWlzZVwiLGZhbHNlKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRoaXMuaXNPcGVuKFwiaXNTaG93UmF0ZVwiKSl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBpbnRlcnZhbCA9IHRoaXMuaXNPcGVuSW50KFwicmF0ZV9pbnRlcnZhbFwiKTtcclxuICAgICAgICBpbnRlcnZhbD1pbnRlcnZhbD4wP2ludGVydmFsOjM7XHJcbiAgICAgICAgdmFyIG9uY2UgPSB0aGlzLmlzT3BlbkludChcInJhdGVfaW5kZXhcIik7XHJcbiAgICAgICAgb25jZSA9IG9uY2U+MD9vbmNlOjM7XHJcblx0XHR2YXIgY291bnQgPSBVc2VyZGVmYXVsdC5nZXRJbnRGb3JLZXkoXCJwcmFpc2VfZ2FtZVwiLCAwKTtcclxuXHRcdFVzZXJkZWZhdWx0LnNldERhdGFGb3JLZXkoXCJwcmFpc2VfZ2FtZVwiLCBjb3VudCArIDEpO1xyXG5cdFx0aWYgKGNvdW50ID49IG9uY2UgLSAxICYmIChjb3VudCAtIG9uY2UgLSAxKSAlIGludGVydmFsID09IDApIHtcclxuICAgICAgICAgICAgdmFyIG51bSA9IFVzZXJkZWZhdWx0LmdldEludEZvcktleShcIlNES1Nob3dQcmFpc2VOdW1cIiwwKTtcclxuICAgICAgICAgICAgVXNlcmRlZmF1bHQuc2V0RGF0YUZvcktleShcIlNES1Nob3dQcmFpc2VOdW1cIixudW0rMSk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvYWRlci5sb2FkUmVzKCdTREsvbW9kdWxlL3ByYWlzZS9wcmFpc2VEaWFsb2cnLGZ1bmN0aW9uKGVycixyZXMpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGZOb2RlID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuICAgICAgICAgICAgICAgIHZhciBub2RlID0gbGlleW91X25hdGl2ZV9wcmFpc2VEaWFsb2dQcmVmYWIoKTsgXHJcbiAgICAgICAgICAgICAgICBub2RlLnggPSBjYy53aW5TaXplLndpZHRoLzI7XHJcbiAgICAgICAgICAgICAgICBub2RlLnkgPSBjYy53aW5TaXplLmhlaWdodC8yO1xyXG4gICAgICAgICAgICAgICAgZk5vZGUuYWRkQ2hpbGQobm9kZSk7ICBcclxuICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlha3ovrnlvaLmtojpmaQgSGV4RWxpbWluYXRlX2xieHh4XHJcbiAgICAgKiDnmoflkI7lkInnpaUgSFNjZW5lX2hoanhcclxuICAgICAqIDEwMTDmtojpmaQgR2FtZVNjZW5lXzEwMTBcclxuICAgICAqIOWQiOaIkOWIsHogZ2FtZTJfQV9aXHJcbiAgICAgKiDom4fom4fkuI7nmb3lnZcgQmFsbEFuZEJsb2NrX0dhbWVcclxuICAgICAqIOibh+ibh+iuvuiuoeaWueWdlyBTbmFrZVNob290X0hvbWVcclxuICAgICAqIOmSoueQtOWdlzNkIEJsb2NrX0dhbWVcclxuICAgICAqIOeZveWdl+WEv+ijhWLniYggQmxvY2taQl9HYW1lXHJcbiAgICAgKiAyMDQ45pa55Z2X5bCE5Ye7IExvZ2luU2NlbmVfMjA0OFxyXG4gICAgICog54mp55CG5by555CDIFFRQmFsbF9Ib21lXHJcbiAgICAgKi9cclxuICAgIGdvdG9TbWFsbEdhbWUoZ2FtZU5hbWUpe1xyXG4gICAgICAgIGNjLmV2ZW50TWFuYWdlci5yZW1vdmVMaXN0ZW5lcnMoY2MuRXZlbnRMaXN0ZW5lci5LRVlCT0FSRCk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICAgICAgd2luZG93Lm1haW5HYW1lU2NlbmU9Y2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5uYW1lO1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJseV9Mb2FkaW5nU2NlbmVcIixjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLm5hbWUpO1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZyhcIj09PT09PT09bmF0aXZlIGdhbWVTY2VuZSA9IFwiICsgZ2FtZU5hbWUpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5nYW1lQWN0aW9uKGdhbWVOYW1lKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzZWFyY2hQYXRocyA9IFtcIlNtYWxsR2FtZS9cIiArIGdhbWVOYW1lICsgXCIvXCJdO1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZyhcIi0tLS0tLS0tLS0tLS0tLT5zZWFyY2hQYXRoc1wiICsgSlNPTi5zdHJpbmdpZnkoc2VhcmNoUGF0aHMpKTtcclxuICAgICAgICAgICAganNiLmZpbGVVdGlscy5zZXRTZWFyY2hQYXRocyhzZWFyY2hQYXRocyk7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKGpzYi5maWxlVXRpbHMuZ2V0U2VhcmNoUGF0aHMoKSk7XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cucmVxdWlyZShcIm1haW4uanNcIik7XHJcbiAgICAgICAgfSwgMjAwKTtcclxuICAgIH0sXHJcbiAgICBnYW1lQWN0aW9uKGdhbWVOYW1lKXtcclxuICAgICAgICBsaWV5b3Vfc2hvd0xvZyhcIj09PT09PT09bmF0aXZlIGdhbWVOYW1lID0gXCIgKyBnYW1lTmFtZSk7XHJcbiAgICAgICAgaWYoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1Mpe1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiTXlNYW5hZ2VyXCIsXCJnYW1lQWN0aW9uOlwiLGdhbWVOYW1lKTtcclxuICAgICAgICB9ZWxzZSBpZihjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpe1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiY29tL3V0aWwvSnNVdGlsXCIsXCJnYW1lQWN0aW9uXCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIsZ2FtZU5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBqbmlMZXZlbChsZXZlbCxtb2RlLGFjdGlvbil7XHJcbiAgICAgICAgbGlleW91X3Nob3dMb2coXCI9PT09PT09PW5hdGl2ZSBqbmlMZXZlbCA9IFwiICsgJyBtb2RlID0gJysgbW9kZSArJyBsZXZlbCA9ICcrIGxldmVsKycgYWN0aW9uID0gJyArIGFjdGlvbik7XHJcbiAgICAgICAgaWYoY2Muc3lzLm9zID09IGNjLnN5cy5PU19JT1Mpe1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiTXlNYW5hZ2VyXCIsXCJjYWxsTGV2ZWw6bGV2ZWw6YWN0aW9uOlwiLG1vZGUsbGV2ZWwsYWN0aW9uKTtcclxuICAgICAgICB9ZWxzZSBpZihjYy5zeXMub3MgPT0gY2Muc3lzLk9TX0FORFJPSUQpe1xyXG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiY29tL3V0aWwvSnNVdGlsXCIsXCJjYWxsTGV2ZWxcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7SUkpVlwiLG1vZGUsbGV2ZWwsYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbmV3SnVtcEFwcChvYmope1xyXG4gICAgICAgIGlmKG9iai5zdWNjZXNzKXtcclxuICAgICAgICAgICAgb2JqLnN1Y2Nlc3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JqLnVtaWQgPSBvcHBvR2V0T25saW5lRGF0YUlkO1xyXG4gICAgICAgIGlmKGNjLnN5cy5vcyA9PSBjYy5zeXMuT1NfQU5EUk9JRCl7XHJcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJjb20vdXRpbC9Kc1V0aWxcIixcInN0YXJ0V2ViXCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIsSlNPTi5zdHJpbmdpZnkob2JqLmRhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2hvd05hdGl2ZUhpZGVCYW5uZXIobm9kZSl7XHJcbiAgICAgICAgdmFyIHNob3dNID0gZmFsc2U7XHJcbiAgICAgICAgaWYodGhpcy5tb3JlR2FtZUJhbm5lciAmJiB0aGlzLm1vcmVHYW1lQmFubmVyLmlzVmFsaWQpe1xyXG4gICAgICAgICAgICBzaG93TSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzaG93QiA9IHRoaXMuX3Nob3dCYW5uZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGJhc2VOb2RlanMgPSBub2RlLmFkZENvbXBvbmVudCgnbGlleW91X2Jhc2VOb2RlJyk7XHJcbiAgICAgICAgYmFzZU5vZGVqcy5lbmFibGVDYWxsQmFjayA9ICgpPT57XHJcbiAgICAgICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLmhpZGVCYW5uZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYmFzZU5vZGVqcy5kZXN0cm95Q2FsbEJhY2sgPSAoKT0+e1xyXG4gICAgICAgICAgICBpZihzaG93Qil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dCYW5uZXIoKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYoc2hvd00pe1xyXG4gICAgICAgICAgICAgICAgbGlleW91X1Nka01hbmFnZXIuc2hvd01vcmVHYW1lQnlCYW5uZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93VXNlckFncmVlbWVudChvYmope1xyXG4gICAgICAgIHZhciBjb2xvciA9IG9iai5jb2xvcj9vYmouY29sb3I6Y2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgdmFyIGZOb2RlID0gb2JqLm5vZGU7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIGZOb2RlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgIG5vZGUuc2NhbGUgPSBsaWV5b3VfU2RrTWFuYWdlci5fU2NlbmVTY2FsZTtcclxuICAgICAgICB2YXIgdXNlckJnID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICB2YXIgdXNlckJnMiA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgdmFyIHVzZXJfMSA9IG5ldyBjYy5Ob2RlKCk7XHJcblx0XHR2YXIgdXNlcl8yID0gbmV3IGNjLk5vZGUoKTtcclxuXHRcdHZhciB1c2VyXzMgPSBuZXcgY2MuTm9kZSgpO1xyXG5cdFx0dXNlckJnLmNvbG9yID0gY29sb3I7XHJcblx0XHR1c2VyQmcyLmNvbG9yID0gY29sb3I7XHJcblx0XHR1c2VyXzEuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB1c2VyXzIuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB1c2VyXzMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICBub2RlLmFkZENoaWxkKHVzZXJCZyk7XHJcbiAgICAgICAgbm9kZS5hZGRDaGlsZCh1c2VyQmcyKTtcclxuICAgICAgICBub2RlLmFkZENoaWxkKHVzZXJfMSk7XHJcbiAgICAgICAgbm9kZS5hZGRDaGlsZCh1c2VyXzIpO1xyXG4gICAgICAgIG5vZGUuYWRkQ2hpbGQodXNlcl8zKTtcclxuICAgICAgICB1c2VyQmcueCA9IC03MjtcclxuICAgICAgICB1c2VyQmcyLnggPSAtNzI7XHJcbiAgICAgICAgdXNlcl8xLnggPSAwO1xyXG4gICAgICAgIHVzZXJfMi54ID0gMTgwO1xyXG4gICAgICAgIHVzZXJfMy54ID0gMTUwO1xyXG4gICAgICAgIHVzZXJCZy55ID0gMDsvLy0yMFxyXG4gICAgICAgIHVzZXJCZzIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdXNlcl8zLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHVzZXJCZzIueSA9IC11c2VyQmcueTtcclxuICAgICAgICB1c2VyXzEueSA9IHVzZXJCZy55O1xyXG4gICAgICAgIHVzZXJfMi55ID0gdXNlckJnLnk7XHJcbiAgICAgICAgdXNlcl8zLnkgPSAtdXNlckJnLnk7XHJcblxyXG5cclxuICAgICAgICB1c2VyQmcuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgdXNlckJnMi5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICB1c2VyXzEuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgdXNlcl8yLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHVzZXJfMy5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuXHJcbiAgICAgICAgbGlleW91X2xvYWQoJ25hdGl2ZS91c2VyQmcucG5nJywgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICB1c2VyQmcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGlleW91X2xvYWQoJ25hdGl2ZS91c2VyQmdfMi5wbmcnLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgIHVzZXJCZzIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGlleW91X2xvYWQoJ25hdGl2ZS91c2VyXzEucG5nJywgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICB1c2VyXzEuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGlleW91X2xvYWQoJ25hdGl2ZS91c2VyXzIucG5nJywgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICB1c2VyXzIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGlleW91X2xvYWQoJ25hdGl2ZS91c2VyXzMucG5nJywgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICB1c2VyXzMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0dXNlcl8xLmFkZENvbXBvbmVudChjYy5CdXR0b24pO1xyXG5cdFx0dXNlcl8yLmFkZENvbXBvbmVudChjYy5CdXR0b24pO1xyXG5cdFx0dXNlcl8zLmFkZENvbXBvbmVudChjYy5CdXR0b24pO1xyXG5cdFx0dXNlcl8xLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpe1xyXG5cdFx0XHRqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwiY29tL3V0aWwvSnNVdGlsXCIsXCJzdGFydFByb3RvY29sXCIsIFwiKEkpVlwiLDApO1xyXG5cdFx0fSwgKTtcclxuXHRcdHVzZXJfMi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KXtcclxuXHRcdFx0anNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcImNvbS91dGlsL0pzVXRpbFwiLFwic3RhcnRQcm90b2NvbFwiLCBcIihJKVZcIiwxKTtcclxuICAgICAgICB9LCApO1xyXG4gICAgICAgIHVzZXJfMy5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KXtcclxuXHRcdFx0anNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcImNvbS91dGlsL0pzVXRpbFwiLFwic2V0RmVlZGJhY2tcIiwgXCIoKVZcIik7XHJcblx0XHR9LCApO1xyXG4gICAgfVxyXG5cclxufSlcclxubW9kdWxlLmV4cG9ydHMgPSBOYXRpdmVNYW5hZ2VyO1xyXG5cclxuXHJcblxyXG5cclxuIl19