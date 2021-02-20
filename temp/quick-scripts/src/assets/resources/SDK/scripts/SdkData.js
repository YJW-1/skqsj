"use strict";
cc._RF.push(module, '3be807lVBFDTKxrE9EY13lG', 'SdkData');
// resources/SDK/scripts/SdkData.js

"use strict";

require('SdkAdConfigData');

window.spotData = [];
window.pauseSpotInterval = 3;
window.resultSpotInterval = 3;
window.pauseSpotStartIndex = 3;
window.resultSpotStartIndex = 3;
window.pauseSpotTime = 10;
window.resultSpotTime = 10;
window.helpOpenId = ""; //帮助好友过关 好友的oppnid

window.onHideHaveLoadScene = true; //true 算切入后台  false 不算切入后台

window.openid = '';
window.openid_uuid = '';

if (!window.wsurl) {
  window.wsurl = 'wss://battle.igame58.com/battle/v2/726f6f6d?uid=' + openid; //'wss://172.18.0.28:8022/battle/v2/726f6f6d';//'ws://battle.igame58.com/battle/v2/726f6f6d';
}

if (!window.uinfo) {
  window.uinfo = {
    gameid: 100001,
    uid: openid,
    nick: '好友',
    icon: '',
    sex: 0,
    city: '',
    country: '',
    province: '',
    from: 'wechat'
  };
}

window.matchinfo = {
  nick: '好友',
  icon: '',
  sex: 0,
  city: '',
  country: '',
  province: '',
  from: 'wechat'
}; //window.serverUrl = "http://172.18.1.10:8080/",

window.serverUrl = "https://app.igame58.com/";
window.mainScneeFromSmallGame = false;
window.mainGameScene = ''; //修改 end  ---

window.localCardKey = "localCardNum"; //本地复活卡key

window.netCardNum = 0; //服务器复活卡key

window.canGetNetCardNum = true; //是否可以刷新服务器复活卡个数

window.getNetCardTime = 10 * 1000; //获取复活卡个数时间间隔毫秒

window.canGetLocalCard = false; // 是否可以领取本地复活卡

window.getLocalCareId = ""; //领取本地复活卡的好友来源id

window.wxData = {
  WXforward: "",
  //返回主页跳转游戏
  session_key: "",
  //用户数据
  appId: wxAppId,
  //
  appSecret: wxAppSecret,
  //
  bannerID: "",
  params: null,
  checkShareSuccessNumIntervalTime: 10,
  //查询分享成功次数 间隔 
  getOpenIdUrl: serverUrl + 'lieyou/wxdata/requstWxAPI',
  //获取微信唯一id
  moreGameUrl: serverUrl + 'lieyou/wxdata/moreGame?appName=' + GameName,
  //更多游戏
  shareUrl: serverUrl + 'lieyou/wxdata/getShareImgText?appName=' + GameName,
  // + 分享
  putShareDataUrl: serverUrl + "lieyou/wxdata/gamerShare",
  //提交分享数据
  putTouchShareDataUrl: serverUrl + "lieyou/wxdata/userClickImgText",
  //提交点击分享数据
  checkResurrDataUrl: serverUrl + "lieyou/wxdata/selReviveCard",
  //查看复活
  useResurrDataUrl: serverUrl + "lieyou/wxdata/useReviveCard",
  //使用复活
  putPlayerData: serverUrl + "lieyou/wxdata/addGamerLogin/" + GameName + "/" + wxAppId + "/",
  //提交用户信息
  //在线数据
  getOnlineData: serverUrl + "lieyou/wxdata/getGameParam/" + wxAppId,
  //获取在线控制参数
  shareOnlineData: "",
  bannerOnlindDelayTime: 50,
  shareData: [],
  moreGameData: []
};
window.quickGame = {
  //new 
  awardGoldDouble: 1,
  awardGoldTime: 30,
  RecommendIconData: [],
  //[]
  RecommendBannerData: [],
  //[]
  awardGoldData: [],
  //[]
  adBaseUrl: ''
}; //------------------------------------------- 游戏数据 公共方法

window.PI = 3.141592654;
window.lieyou = module.exports = {
  Props_Base_Gold: 800,
  //金币系数
  Key_OncePlayerTime: "begingGameTime",
  Key_OncePlayerTimeDay: "begingGameTimeDay",
  Key_NewPlayer: "isNewPlayer",
  Key_Gold: "Key_Gold",
  Key_Music: "Key_BgMusic",
  Key_Sound: "Key_Sound",
  Key_Vibrate: "Key_Vibrate",
  _SceneScale: 1,
  _offsetX: 0,
  _offsetY: 0,
  Language_ch: true
};
window.language = 'ch';

if (cc.sys.language != cc.sys.LANGUAGE_CHINESE) {
  lieyou.Language_ch = false;
  language = 'en';
}

function getDataForKey(key) {
  var vauleDef = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var data = cc.sys.localStorage.getItem(key);

  if (data === null || data === "") {
    return vauleDef + "";
  }

  return data;
}

window.Userdefault = module.exports = {
  getBoolForKey: function getBoolForKey(key) {
    var vauleDef = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "false";

    if (releasePlatform == 'lieyouH5') {
      key += oppoGetOnlineDataId;
    }

    if (vauleDef == "false") {} else if (vauleDef) {
      vauleDef = "true";
    } else {
      vauleDef = "false";
    }

    var data = getDataForKey(key, vauleDef);

    if (data == "true") {
      return true;
    } else {
      return false;
    }
  },
  getIntForKey: function getIntForKey(key) {
    var vauleDef = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    if (releasePlatform == 'lieyouH5') {
      key += oppoGetOnlineDataId;
    }

    var data = getDataForKey(key, vauleDef);
    return parseInt(data);
  },
  getStringForKey: function getStringForKey(key) {
    var vauleDef = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    if (releasePlatform == 'lieyouH5') {
      key += oppoGetOnlineDataId;
    }

    var data = getDataForKey(key, vauleDef);
    return data;
  },
  getFloatForKey: function getFloatForKey(key) {
    var vauleDef = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.0;

    if (releasePlatform == 'lieyouH5') {
      key += oppoGetOnlineDataId;
    }

    var data = getDataForKey(key, vauleDef);
    return parseFloat(data);
  },
  setDataForKey: function setDataForKey(key, vaule) {
    if (releasePlatform == 'lieyouH5') {
      key += oppoGetOnlineDataId;
    }

    cc.sys.localStorage.setItem(key, vaule);
  },
  setBoolForKey: function setBoolForKey(key, vaule) {
    if (releasePlatform == 'lieyouH5') {
      key += oppoGetOnlineDataId;
    }

    if (vaule) {
      vaule = "true";
    } else {
      vaule = "false";
    }

    cc.sys.localStorage.setItem(key, vaule);
  }
};

window.getRandom = function (min, max) {
  var diff = max - min;
  var ran = parseInt(Math.random() * diff);
  ran = ran + min;
  return ran;
}; //是否可以分享


window.getCanShare = function () {
  if (cc.sys.platform === cc.sys.WECHAT_GAME) {} else {
    return false; //不是微信小游戏直接返回false
  }

  if (wxServerVersion >= wxGameVersion) {
    return true;
  } else {
    return false;
  }
};

window.getTime = function () {
  return new Date().getTime(); //返回毫秒
};

window.getTimeDay = function () {
  var time = new Date(); //返回天

  var year = time.getYear() + 1900;
  var mouse = time.getMonth() + 1;
  var day = time.getDate();
  return year * 10000 + mouse * 100 + day;
};

window.lieyou_getDataForKey = function (key) {
  var vauleDef = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var data = cc.sys.localStorage.getItem(key);

  if (data === null || data === "") {
    return vauleDef + "";
  }

  return data;
};

window.lieyou_Userdefault = {
  getBoolForKey: function getBoolForKey(key) {
    var vauleDef = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "false";

    if (releasePlatform == 'lieyouH5') {
      key += oppoGetOnlineDataId;
    }

    if (vauleDef == "false") {} else if (vauleDef) {
      vauleDef = "true";
    } else {
      vauleDef = "false";
    }

    var data = lieyou_getDataForKey(key, vauleDef);

    if (data == "true") {
      return true;
    } else {
      return false;
    }
  },
  getIntForKey: function getIntForKey(key) {
    var vauleDef = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    if (releasePlatform == 'lieyouH5') {
      key += oppoGetOnlineDataId;
    }

    var data = lieyou_getDataForKey(key, vauleDef);
    return parseInt(data);
  },
  getStringForKey: function getStringForKey(key) {
    var vauleDef = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

    if (releasePlatform == 'lieyouH5') {
      key += oppoGetOnlineDataId;
    }

    var data = lieyou_getDataForKey(key, vauleDef);
    return data;
  },
  getFloatForKey: function getFloatForKey(key) {
    var vauleDef = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.0;

    if (releasePlatform == 'lieyouH5') {
      key += oppoGetOnlineDataId;
    }

    var data = lieyou_getDataForKey(key, vauleDef);
    return parseFloat(data);
  },
  setDataForKey: function setDataForKey(key, vaule) {
    if (releasePlatform == 'lieyouH5') {
      key += oppoGetOnlineDataId;
    }

    cc.sys.localStorage.setItem(key, vaule);
  },
  setBoolForKey: function setBoolForKey(key, vaule) {
    if (releasePlatform == 'lieyouH5') {
      key += oppoGetOnlineDataId;
    }

    if (vaule) {
      vaule = "true";
    } else {
      vaule = "false";
    }

    cc.sys.localStorage.setItem(key, vaule);
  }
};

window.lieyou_getTime = function () {
  return new Date().getTime(); //返回毫秒
};

window.lieyou_getTimeDay = function () {
  var time = new Date(); //返回天

  var year = time.getYear() + 1900;
  var mouse = time.getMonth() + 1;
  var day = time.getDate();
  return year * 10000 + mouse * 100 + day;
};

cc._RF.pop();