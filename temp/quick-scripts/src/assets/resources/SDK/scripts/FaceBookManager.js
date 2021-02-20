"use strict";
cc._RF.push(module, '20afduwcf1MXbHA1ejJDcxQ', 'FaceBookManager');
// resources/SDK/scripts/FaceBookManager.js

"use strict";

var FaceBookManager = cc.Class({
  "extends": require('BaseManager'),
  properties: {
    videoID: null
  },
  init: function init(obj) {
    this._super();

    this.loadVideo(); // FB.init({
    //     appId            : '216568438988937',
    //     autoLogAppEvents : true,
    //     status           : true,
    //     xfbml            : true,
    //     version          : 'v2.9'
    // });
  },
  getHaveVideo: function getHaveVideo() {
    if (FBVideoId != "") {
      return true;
    }

    return false;
  },
  getSysPlatform_string: function getSysPlatform_string() {
    return 'faceBook';
  },
  getSysPlatform: function getSysPlatform() {
    return 2;
  },
  shareHelp: function shareHelp() {},
  // 分享功能
  share: function share(obj) {
    FBInstant.shareAsync({
      intent: 'SHARE',
      //SHARE   REQUEST  INVITE   CHALLENGE
      image: this.getImgBase64(),
      text: FBInstant.player.getName() + 'is asking for your help!',
      data: {
        myReplayData: '...'
      }
    }).then(function () {
      // continue with the game.
      if (obj && obj.success) {
        obj.success(1);
      }
    });
  },
  // 截屏返回 iamge base6，用于 Share
  getImgBase64: function getImgBase64() {
    var target = cc.find('Canvas');
    var width = 960,
        height = 1280;
    var renderTexture = new cc.RenderTexture(width, height);
    renderTexture.begin();

    target._sgNode.visit();

    renderTexture.end(); //

    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;

    if (cc._renderType === cc.game.RENDER_TYPE_CANVAS) {
      var texture = renderTexture.getSprite().getTexture();
      var image = texture.getHtmlElementObj();
      ctx.drawImage(image, 0, 0);
    } else if (cc._renderType === cc.game.RENDER_TYPE_WEBGL) {
      var buffer = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, buffer);

      var _texture = renderTexture.getSprite().getTexture()._glID;

      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, _texture, 0);
      var data = new Uint8Array(width * height * 4);
      gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, data);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      var rowBytes = width * 4;

      for (var row = 0; row < height; row++) {
        var srow = height - 1 - row;
        var data2 = new Uint8ClampedArray(data.buffer, srow * width * 4, rowBytes);
        var imageData = new ImageData(data2, width, 1);
        ctx.putImageData(imageData, 0, row);
      }
    }

    return canvas.toDataURL('image/png');
  },

  /**
   * 观看视频 id 没用到 closeCallBack 看完视频回调
   */
  //lieyou_SdkManager.addToast(cc.find("Canvas"),res);
  loadVideo: function loadVideo() {
    var self = this;
    FBInstant.getRewardedVideoAsync(FBVideoId // Your Ad Placement Id
    ).then(function (rewarded) {
      // Load the Ad asynchronously
      self.videoID = rewarded;
      return self.videoID.loadAsync();
    });
  },
  showRewardedVideoAd: function showRewardedVideoAd(id, closeCallBack) {
    var self = this;

    if (this.videoID) {
      var id = this.videoID;
      this.videoID = null;
      id.showAsync().then(function () {
        closeCallBack(true);
        self.loadVideo();
      });
    } else {
      self.loadVideo();
    }
  },
  showSpotByBegin: function showSpotByBegin(isHaveNative, top) {
    this.showMySpot();
  },
  showSpotByPause: function showSpotByPause(isHaveNative, top) {
    // var num = Userdefault.getIntForKey("showBannerByPauseNum");
    // Userdefault.setDataForKey("showBannerByPauseNum",num+1);
    // if((num - 3)%3 == 0) {
    this.showMySpot(); // }
  },
  showSpotByFinish: function showSpotByFinish(isHaveNative, top) {
    // var num = Userdefault.getIntForKey("showBannerByFinishNum");
    // Userdefault.setDataForKey("showBannerByFinishNum",num+1);
    // if((num - 3)%3 == 0) {
    this.showMySpot(); // }
  },
  showMySpot: function showMySpot() {
    var self = this;

    if (this.videoID) {
      var id = this.videoID;
      this.videoID = null;
      id.showAsync().then(function () {
        self.loadVideo();
      });
    } else {
      self.loadVideo();
    }
  }
});
module.exports = FaceBookManager;

cc._RF.pop();