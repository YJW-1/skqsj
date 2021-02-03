
let MagicManagerH5 = cc.Class({
	extends: require('BaseManager'),
	properties:{
        bannerAd: null,
    },
    getHaveVideo(){
        return true;
    },
    getSysPlatform_string(){
		return 'magic';
    },
    getSysPlatform(){
        return 13;
	},
    
    init: function(obj){
        this._super();
        this.initPlayVdCallBack();
    },
    hideBanner(){
    },
    showBanner(obj){
    },
    showBannerCustom(obj){
        this.showBanner(obj);
    },
    showBannerByTop(id){
        this.showBanner({});
    },
    showBannerByBottom(id){
        this.showBanner({});
    },
    initPlayVdCallBack() {
        var self = this;
        window.callbackAdsWithScene = function(res) {
            switch (res) {
            case "FAIL":
                if(self.playVideoCallBack){
                    self.playVideoCallBack(false);
                }
                ClientNative.hideAdsWithScene(magic_VideoId);
                break;
            case "REWARD":
                if(self.playVideoCallBack){
                    self.playVideoCallBack(true);
                }
                ClientNative.hideAdsWithScene(magic_VideoId);
                break;
            case "SUCCESS":
            }
        }
    },
    showRewardedVideoAd(id,closeCallBack){
        var self = this;
        self.playVideoCallBack = closeCallBack;
        ClientNative.showAdsWithScene(magic_VideoId);
    },

    showSpot(){
       
    },
    showSpotByPause(isHaveNative,top){
        this.showSpot(true);
    },
    showSpotByBegin(isHaveNative,top){
        this.showSpot();
    },
    showSpotByFinish(isHaveNative,top){
        this.showSpot();
    },
    
})
module.exports = MagicManagerH5;




