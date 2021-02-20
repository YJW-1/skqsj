"use strict";
cc._RF.push(module, '3e18fq04CVNX4hrvOAtDRMl', 'lieyou_qGamemoreGame_icon');
// resources/SDK/module/qgameMoreGame/lieyou_qGamemoreGame_icon.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    image: cc.Node,
    redNode: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {},
  start: function start() {},
  setData: function setData(obj, touchType) {
    this._touchType = touchType;
    this.jumpData = obj.jumpData;
    this._id = obj.id; //var name = obj.gameName

    this.jumpData.gameName = obj.gameName;
    this.jumpData.id = obj.id;

    if (obj.url) {
      this.loadSpriteFrame(obj.url, this.image);
      this.jumpData.url = obj.url;
    } else {
      lieyou_showLog('qgame more game url null');
    }

    if (lieyou_Userdefault.getBoolForKey('ag_moreGame_isTouch_' + this._id, false)) {
      this.redNode.active = false;
    } else {
      this.redNode.active = true;
    }
  },
  loadSpriteFrame: function loadSpriteFrame(url, node) {
    if (url == "") {
      return;
    }

    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      url = url.replace("http", "https");
    }

    var loadFile = {
      url: url,
      type: "image"
    };
    cc.loader.load(loadFile, function (err, tex) {
      if (err) {
        return;
      }

      if (node && node.isValid) node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
    });
  },
  callBackTouch: function callBackTouch() {
    lieyou_Userdefault.setBoolForKey('ag_moreGame_isTouch_' + this._id, true);
    this.redNode.active = false;
    lieyou_SdkManager.newJumpApp({
      data: this.jumpData,
      success: this.clickAdSuccessCallBack.bind(this)
    });
  },
  clickAdSuccessCallBack: function clickAdSuccessCallBack() {
    try {
      lieyou_SdkManager.setadtrack(this._id, this._touchType);
    } catch (error) {
      lieyou_showLog('jump game fail + ' + JSON.stringify(error));
    }
  },
  setDataForHttp: function setDataForHttp(url) {
    //提交数据到服务器 无返回值 
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
        var response = xhr.responseText;

        if (response == '-1') {} else if (response == '-2') {} else {}
      }
    };

    xhr.open("GET", url, true);
    xhr.send();
  } // update (dt) {},

});

cc._RF.pop();