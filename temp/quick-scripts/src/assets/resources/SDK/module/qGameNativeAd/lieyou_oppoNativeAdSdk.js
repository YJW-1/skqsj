"use strict";
cc._RF.push(module, '9f507LYAWRFz4sjJJGlTpQS', 'lieyou_oppoNativeAdSdk');
// resources/SDK/module/qGameNativeAd/lieyou_oppoNativeAdSdk.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    touchLabel: cc.Label,
    titleLabel: cc.Label,
    wordLabel: cc.Label,
    bgNode: cc.Node,
    iconNode: cc.Node,
    titleNode: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    if (this.titleNode && _SDKNativeAdLoadServerRes) {
      var touchButton = cc.find('myNode/touchButton', this.node);
      cc.loader.load('http://idata.igame58.com/oppo/q_ad/touch.png', function (err, texture) {
        touchButton.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
      });
      var close = cc.find('myNode/closeButton/close', this.node);
      cc.loader.load('http://idata.igame58.com/oppo/q_ad/close.png', function (err, texture) {
        close.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
      });
    }

    var self = this;
    var winSize = cc.winSize;
    var winsizeWidth = winSize.height > winSize.width ? winSize.width : winSize.height;
    cc.find('myNode', this.node).scale = winsizeWidth / 720;
    var nowTime = parseInt(getTime() / 1000);
    var lashTime = Userdefault.getIntForKey('oppo_oncePlayGameTime', nowTime);

    if (nowTime - lashTime > oppo_waitT) {
      cc.find('myNode/touch', this.node).width *= oppo_nativeArea;
      cc.find('myNode/touch', this.node).height *= oppo_nativeArea;
    } else {// cc.find('myNode/touch',this.node).active = false;
    }
  },
  start: function start() {},
  setData: function setData() {
    var _this = this;

    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    try {
      var closeBtnNode = cc.find('myNode/closeButton', this.node);
      var closeNode = cc.find('myNode/closeButton/close', this.node);
      closeBtnNode.active = obj.closeShow;
      closeBtnNode.opacity = obj.closeAlpha;
      closeBtnNode.width = obj.closeRange;
      closeBtnNode.height = obj.closeRange;
      closeNode.width = obj.closeSize;
      closeNode.height = obj.closeSize;

      if (obj.bannerHeight != undefined) {
        cc.find('myNode/bg', this.node).height = obj.bannerHeight;
        closeBtnNode.y = obj.bannerHeight;
        cc.find('myNode/bannerNativeAD', this.node).y = obj.bannerHeight;
        cc.find('myNode/icon', this.node).y = obj.bannerHeight / 2;
        cc.find('myNode/touchButton', this.node).y = obj.bannerHeight / 2;
        cc.find('myNode/titleLabel', this.node).y = obj.bannerHeight / 3 * 2;
        cc.find('myNode/label', this.node).y = obj.bannerHeight / 3;
      }

      this.touchCallBack = obj.touchCallBack;
      this.closeCallBack = obj.closeCallBack;
      if (obj.title) this.titleLabel.string = obj.title;
      if (obj.desc) this.wordLabel.string = obj.desc;
      if (this.touchLabel && obj.clickBtnTxt) this.touchLabel.string = obj.clickBtnTxt;

      if (cc.sys.platform == cc.sys.OPPO_GAME) {
        this.touchLabel.string = '查看广告';
      }

      if (obj.imgUrlList.length > 0) {
        this.getOnlineSpriteFrame(obj.imgUrlList[parseInt(Math.random() * obj.imgUrlList.length)], cc.find('myNode/image', this.node));
      } else if (obj.iconUrlList.length > 0) {
        this.getOnlineSpriteFrame(obj.iconUrlList[parseInt(Math.random() * obj.iconUrlList.length)], this.iconNode);
      }

      if (this.titleNode && obj.logoUrl) {
        this.getOnlineSpriteFrame(obj.logoUrl, this.titleNode);
      } else if (this.titleNode) {
        lieyou_load('q_ad/SpotNativeAD.png', function (err, texture) {
          _this.titleNode.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        });
      }
    } catch (error) {
      lieyou_showLog('-------- show native fail ' + error);
    }
  },
  getOnlineSpriteFrame: function getOnlineSpriteFrame(url, node) {
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

      if (node && node.isValid) node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
    });
  },
  callBackTouch: function callBackTouch() {
    this.touchCallBack();
  },
  callBackClose: function callBackClose() {
    if (!this.titleNode) {
      this.closeCallBack();
    }

    this.node.destroy();
  },
  onDisable: function onDisable() {
    if (this.titleNode) {
      this.closeCallBack();
    }
  } // update (dt) {},

}); // "is_local_pos_id": false,
// "spot_first_ad": "native",
// "banner_first_ad": "native",
// "awardid": ["98278"],
// "bid": ["98277"],
// "nativeid": ["98298", "98300", "98304", "98305"],
// "nativeBannerid": ["55307", "98295", "98296", "98297"],
// "spoid": ["98282"],
// "banner_close_but_alpha": 120,
// "banner_close_but_size": 60,
// "banner_close_but_range": 80,
// "spot_close_but_alpha": 100,
// "spot_close_but_size": 70,
// "spot_close_but_range": 90,
// "canShowNativeBanner",true
// "nativeDelayShowTime":1
// "nativeDelayDestroyTime":0
// "refreshBannerTime":15
// "banner_click_refresh": false,
// "spot_click_count": 8,
// "banner_close_but_show": true,
// "spot_click_close": true,
// "banner_show_height": 220,
// "spot_show_interval": 2,

cc._RF.pop();