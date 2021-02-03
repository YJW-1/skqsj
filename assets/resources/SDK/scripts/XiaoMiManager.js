//1051
let XiaoMiManager = cc.Class({
	extends: require('BaseManager'),
	properties:{
        bannerAd: null,
    },
    getHaveVideo(){
        if(xiaomi_VideoId == ''){
            return false;
        }
        return true;
    },
    getSysPlatform_string(){
		return 'xiaomi';
    },
    getSysPlatform(){
        return 9;
    },
    
    
    init: function(obj){
        this._super();
        this._canShowSpotAd = true;
    },
    
    showRewardedVideoAd(id,closeCallBack){
        if(xiaomi_VideoId == '') {
            closeCallBack(false);
            return;
        }
        this.vaCallBack = closeCallBack;
        if(this.videoAd){
            this.videoAd.show();
            return;
        }
        var self = this;
        this.videoAd = qg.createRewardedVideoAd({// 
            adUnitId: xiaomi_VideoId
        });
        this.videoAd.show();
        this.videoAd.onError(function (err) {
            // self.videoAd.load();
            self.vaCallBack(false);
            lieyou_showLog("xiaomi------play vd errr-----  " + JSON.stringify(err));
        });
        this.videoAd.onClose(function (res) {
            lieyou_showLog("xiaomi------play vd over-----  " + JSON.stringify(res));
            if (res && res.isEnded) {
                self.vaCallBack(true);
            } else {
                self.vaCallBack(false);
            }
        });
    },
    

    hideBanner(){
        if(this.bannerAd)	{
               this.bannerAd.destroy();
               this.bannerAd = null;
		}
    },
    
    showBanner(obj = {}){
        if(xiaomi_BannerId == '') {
            return;
        };
    },
    showBannerByBottom(id){
        this.showBanner({});
    },

    showSpot(){
        var self = this;
        if(xiaomi_Spot == ''|| !this._canShowSpotAd) {
            return;
        };
        setTimeout(() => {
            self._canShowSpotAd = true;
        }, 1000*30);
        self._canShowSpotAd = false;

        var interstitialAd = qg.createInterstitialAd({
            adUnitId: xiaomi_Spot
        });
        interstitialAd.show();
        interstitialAd.onLoad(() => {
            lieyou_showLog("xiaomi------show spot load-----  ");
        })
        interstitialAd.onError( data => {
            lieyou_showLog("xiaomi------show spot fail-----  " + JSON.stringify(data));
        })
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
module.exports = XiaoMiManager;




