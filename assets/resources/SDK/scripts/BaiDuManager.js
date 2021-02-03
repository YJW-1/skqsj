

let BaiDuManager = cc.Class({
	extends: require('BaseManager'),
	properties:{
        bannerAd: null,
    },
    getHaveVideo(){
        if(baiduVideoId == '') {
            return false;
        }
        return true;
    },
    getSysPlatform_string(){
		return 'baidu';
    },
    getSysPlatform(){
		return 10;
	},
    
    init: function(obj){
        this._super();
    },

    showNativeBanner(top){
        var self = this;
        if(baiduNativeId == '') {
            self.showSpot();
            return;
        }
        
    },
    hideNativeBanner(){

    },

    hideBanner(){
        if(this.bannerAd){
            this.bannerAd.destroy();
            this.bannerAd = null;
		}
    },
    showBanner(obj){
        if(baiduBannerId == '') {
            return;
        };
        var winWidth = 300;//swan.getSystemInfoSync().windowWidth;//windowWidth 窗口宽度 screenWidth 屏幕宽度 240/960 Height
        var width = (swan.getSystemInfoSync().windowWidth - 300) /2;
        var height = swan.getSystemInfoSync().windowHeight - winWidth * 240/960;
        this.bannerAd = swan.createBannerAd({
            adUnitId: baiduBannerId,
            appSid: baiduId_SDK,
            style: {
                left: width,
                top: height,
                width: winWidth
            }
        });

          
        this.bannerAd.onLoad(() => {
            this.bannerAd.show()
        });
        this.bannerAd.onError(err => {
            lieyou_showLog("baidu log------show banner fail-----  " + JSON.stringify(err));
        });
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
    showRewardedVideoAd(id,closeCallBack){
        if(baiduVideoId == '') {
            closeCallBack(false);
            return;
        };
        var videoAd = swan.createRewardedVideoAd({ 
            adUnitId: baiduVideoId, 
            appSid: baiduId_SDK 
        });
        
        videoAd.show();
        videoAd.onError(err => {
            closeCallBack(false);
            lieyou_showLog("baidu log------show video fail-----  " + JSON.stringify(err));
        });
        videoAd.onClose(res => {
            lieyou_showLog('baidu log------video close-----  ' + res.isEnded);
            if (res.isEnded) {
                closeCallBack(true);
            } else {
                closeCallBack(false);
                
            }
            videoAd.offClose(null);
        });
        
    },
    showSpot(){
        if(baiduSpotADId =='') {
            return;
        }
    },
    showSpotByPause(){
        this.showNativeBanner();
    },
    showSpotByBegin(){},
    showSpotByFinish(){
        this.showNativeBanner();
    },
})
module.exports = BaiDuManager;




