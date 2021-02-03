

let OppoH5Manager = cc.Class({
	extends: require('BaseManager'),
	properties:{
    },
    getHaveVideo(){
        return true;
    },
    getSysPlatform_string(){
		return 'oppoh5';
    },
    getSysPlatform(){
		return 5;
	},
    
    init: function(obj){
        this._super();
    },
    hideBanner(){
        
    },
    showBanner(obj){
        var bannerAd = opUnion.createBannerAd({
            containerId: 'GameCanvas',
            posId: '28810',
            mediaId: '101000141'
        });
        bannerAd.onLoad(function () {
            lieyou_showLog('广告加载成功');
        });
    },
    showBannerCustom(obj){
        this.showBanner();
    },
    showBannerByTop(id){
        this.showBanner();
    },
    showBannerByBottom(id){
        this.showBanner();
    },
    showRewardedVideoAd(id,closeCallBack){
        var videoAd = opUnion.createVideoAd({
            posId: '28812',
            mediaId: '101000141'
        });
        videoAd.onLoad(function () {
            videoAd.show();
            lieyou_showLog('激励视频广告加载成功');
        });
        videoAd.onError(function (err) {
            closeCallBack(false);
            lieyou_showLog(err);
        });

        videoAd.onClose(function (res) {
            if (res && res.isEnded) {
                closeCallBack(true);
                // 正常播放结束，可以下发奖励
            } else {
                closeCallBack(false);
                // 播放中途退出，不下发奖励
            }
        });
    },
    showSpot(){
        var interstitialAd = opUnion.createInterstitialAd({
            posId: '28811',
            mediaId: '101000141'
        });
        interstitialAd.onLoad(function () {
            interstitialAd.show();
            lieyou_showLog('插屏广告加载成功');
        });
    },
    showSpotByPause(){
        this.showSpot();
    },
    showSpotByBegin(){},
    showSpotByFinish(){
        this.showSpot();
    },
})
module.exports = OppoH5Manager;




