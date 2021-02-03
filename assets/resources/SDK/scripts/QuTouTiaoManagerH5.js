
//main.js里面有个 cc.view.enableAutoFullScreen()方法，把括号里面的条件换成false 关闭全屏显示
//加在index.html 头部
//<script type="text/javascript" src="//newidea4-gamecenter-frontend.1sapp.com/sdk/prod/h5.v1.0.0.js?spread=required"></script>
//?_NO_BRIDGE_=true&app_id=a3H6PDHNZgYd
let QuTouTiaoManagerH5 = cc.Class({
	extends: require('BaseManager'),
	properties:{
        bannerAd: null,
    },
    getHaveVideo(){
        return true;
    },
    getSysPlatform_string(){
		return 'qutoutiao';
    },
    getSysPlatform(){
        return 12;
	},
    
    init: function(obj){
        this._super();
    },
    hideBanner(){
        this._haveShowBanner = false;
        qttGame.hideBanner();
    },
    showBanner(obj){
        if(this._haveShowBanner){
            return;
        }
        this._haveShowBanner = true;
        qttGame.showBanner();
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
        var options ={};
        options.gametype =parseInt(Math.random()*3) + 1;//互动游戏类型，1(砸金蛋)  2(laba)  3(大转盘)
        options.rewardtype =1;//互动广告框，只有 1
        options.data ={};
        options.data.title ="游戏奖励";//互动抽中奖后的道具提示文字
        options.data.url ="//newidea4-gamecenter-frontend.1sapp.com/game/prod/fkxxl_img/1.png";//互动抽中奖后的道具图标(可选)
        cc.audioEngine.stopAllEffects();
        cc.game.pause();
        qttGame.showVideo((res)=>{
            cc.game.resume();
            if(window.QTTPlayVDCallBack){
                window.QTTPlayVDCallBack();
            }
            lieyou_showLog('qutoutiao--- showvideo ' + res);
            if(res ==1){
                closeCallBack(true);
            }else{
                if(res == 0){
                    closeCallBack(false);
                }else{
                    closeCallBack(false);
                }
            }
        }, options);
    },

    showSpot(ispause = false){
       
    
        var options ={};
        options.gametype =parseInt(Math.random()*3) + 1;//互动游戏类型，1(砸金蛋)  2(laba)  3(大转盘)
        options.rewardtype =1;//互动广告框，只有 1
        // options.data ={};
        // options.data.title ="刷新道具";//互动抽中奖后的道具提示文字
        // options.data.url ="//newidea4-gamecenter-frontend.1sapp.com/game/prod/fkxxl_img/1.png";//互动抽中奖后的道具图标(可选)
        // options.callback=(res)=>{
        //     if(res ==1){
        //     }else{
        //     }
        // };
        
        if(ispause){
            qttGame.showHDReward(options);
            // qttGame.showHDAD(options);
        }else{
            qttGame.showHDReward(options);
        }
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
module.exports = QuTouTiaoManagerH5;




