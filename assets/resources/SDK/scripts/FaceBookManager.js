let FaceBookManager = cc.Class({
	extends: require('BaseManager'),
    properties:{
        videoID:null,
    },
    init: function(obj){
        this._super();
        this.loadVideo();
        
        // FB.init({
        //     appId            : '216568438988937',
        //     autoLogAppEvents : true,
        //     status           : true,
        //     xfbml            : true,
        //     version          : 'v2.9'
        // });
    },
    getHaveVideo(){
        if(FBVideoId != ""){
            return true;
        }
        return false;
    },
    getSysPlatform_string(){
		return 'faceBook';
    },
    getSysPlatform(){
		return 2;
	},
    shareHelp(){},

    // 分享功能
    share (obj) {
        FBInstant.shareAsync({
            intent: 'SHARE',//SHARE   REQUEST  INVITE   CHALLENGE
            image: this.getImgBase64(),
            text: FBInstant.player.getName() + 'is asking for your help!',
            data: {myReplayData: '...'},
        }).then(function(){
            // continue with the game.
            if(obj && obj.success){
                obj.success(1);
            }
        });
    },

    // 截屏返回 iamge base6，用于 Share
    getImgBase64 () {
        let target = cc.find('Canvas');
        let width = 960, height = 1280;
        let renderTexture = new cc.RenderTexture(width, height);
        renderTexture.begin();
        target._sgNode.visit();
        renderTexture.end();
        //
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        if (cc._renderType === cc.game.RENDER_TYPE_CANVAS) {
            let texture = renderTexture.getSprite().getTexture();
            let image = texture.getHtmlElementObj();
            ctx.drawImage(image, 0, 0);
        }
        else if (cc._renderType === cc.game.RENDER_TYPE_WEBGL) {
            let buffer = gl.createFramebuffer();
            gl.bindFramebuffer(gl.FRAMEBUFFER, buffer);
            let texture = renderTexture.getSprite().getTexture()._glID;
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
            let data = new Uint8Array(width * height * 4);
            gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, data);
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            let rowBytes = width * 4;
            for (let row = 0; row < height; row++) {
                let srow = height - 1 - row;
                let data2 = new Uint8ClampedArray(data.buffer, srow * width * 4, rowBytes);
                let imageData = new ImageData(data2, width, 1);
                ctx.putImageData(imageData, 0, row);
            }
        }
        return canvas.toDataURL('image/png');
    },
    /**
     * 观看视频 id 没用到 closeCallBack 看完视频回调
     */
    //lieyou_SdkManager.addToast(cc.find("Canvas"),res);
    loadVideo(){
        var self = this;
        FBInstant.getRewardedVideoAsync(
            FBVideoId, // Your Ad Placement Id
          ).then(function(rewarded) {
            // Load the Ad asynchronously
            self.videoID = rewarded;
            return self.videoID.loadAsync();
          })
    },
    showRewardedVideoAd(id,closeCallBack){
        
        var self = this;
        if(this.videoID) {
            var id = this.videoID;
            this.videoID = null;
            id.showAsync().then(function() {
                closeCallBack(true);
                self.loadVideo();
            })
        }else{
            self.loadVideo();
        }
    },
    showSpotByBegin: function(isHaveNative,top){
		this.showMySpot();
	},
	showSpotByPause: function(isHaveNative,top){

		// var num = Userdefault.getIntForKey("showBannerByPauseNum");
		// Userdefault.setDataForKey("showBannerByPauseNum",num+1);

		// if((num - 3)%3 == 0) {
			this.showMySpot();
		// }
		
	},
    showSpotByFinish: function(isHaveNative,top){
		// var num = Userdefault.getIntForKey("showBannerByFinishNum");
		// Userdefault.setDataForKey("showBannerByFinishNum",num+1);
		
		// if((num - 3)%3 == 0) {
			this.showMySpot();
		// }
		
    },
    showMySpot(){
        var self = this;
        if(this.videoID) {
            var id = this.videoID;
            this.videoID = null;
            id.showAsync().then(function() {
                self.loadVideo();
            })
        }else{
            self.loadVideo();
        }
	},
})

module.exports = FaceBookManager;


