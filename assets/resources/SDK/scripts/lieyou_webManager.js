
window.lieyou_cpp_Calljs_setMusic = function(Play){
    if(Play){
        cc.game.resume();
    }else{
        cc.game.pause();
    }
}
let lieyou_webManager = cc.Class({
	extends: require('BaseManager'),
	properties:{
        payCallBack:null,
        playVDCallBack:null,
    },
    getHaveVideo(){
        if(this.isOpen(KEY_OPEN_VIDEO)){
            lieyou_showLog("h5-可以看视频");
            return true;
        }
        lieyou_showLog("h5-不能看视频");
        return false;
    },
    getSysPlatform_string(){
		return 'web';
    },
    getSysPlatform(){
		return 14;
	},
    setOnlineData(data){
        if(data.web){
            var adData = {};
            if(data.web.theme){
                adData.theme = data.web.theme;
            }
            if(data.web.crossSwitch){
                adData.crossSwitch = data.web.crossSwitch;
            }
            if(data.web.bizData){
                adData.bizData = data.web.bizData;
            }
            if(data.web.ad_datas){
                adData.ad_datas = data.web.ad_datas;
                // GamePlay.setGamePortalData(JSON.stringify(data.web.ad_datas));
            }
            if(data.web.switch){
                adData.switch = data.web.switch;
            }
            this.setAdData(adData);
        }
    },
    getStringValue(key){
        return GamePlay.getStringValue(key);
    },
    
    init: function(obj){
        lieyou_showLog("h5-初始化");
        GamePlay.cancelCocos();
        this._super();
        this.base_IsShenHe = this.isOpen(KEY_IS_SHENHE);
        // var source = GamePlay.getSource();
        this.initOnlineData();
    },
    vibrateShort(){
        this.vibrateCustom(30);
    },
    vibrateLong(){
        this.vibrateCustom(100);
    },
    vibrateCustom(time){
        lieyou_showLog("h5-震动:"+time);
        GamePlay.Vibrate(time);
    },
    
    
    showNativeBanner(top){
        GamePlay.showNativeView(top);
    },
    hideNativeBanner(){
        GamePlay.closeNativeView();
    },
    showPauseAd(isHaveNative,top){
        GamePlay.showPauseAd(isHaveNative,top);
    },
    showResultAd(isHaveNative,top){
        GamePlay.showResultAd(isHaveNative,top);
    },
    showSpotByBegin(isHaveNative,top){
    },
    showSpotByPause(isHaveNative,top){
        lieyou_showLog("h5-暂停插屏");
        this.showPauseAd(isHaveNative,top);
    },
    showSpotByFinish(isHaveNative,top){
        lieyou_showLog("h5-结束插屏");
        this.showResultAd(isHaveNative,top);
    },
    callPay(action,funS){
        this.payCallBack = funS;
        GamePlay.callPay(action);
    },
    
    callAndroid(action){
        GamePlay.callAndroid(action);
    },

    callAndroid_2(action,funS){
        this.playVDCallBack = funS;
        GamePlay.callPay(action);
    },
    //是否可以显示 开关
    isOpen(key){
        var ss = 0;
        ss = GamePlay.getValue2(key);
        ss = parseInt(ss);
        lieyou_showLog("h5-获取开关:"+key+":"+ss);
        if(ss == 1){
            return true;
        }else{
            return false;
        }
    },
    isOpenInt(key){
        var ss = 0;
        ss = GamePlay.getValue2(key);
        ss = parseInt(ss);
        lieyou_showLog("h5-获取开关:"+key+":"+ss);
        return ss;
    },

    showRewardedVideoAd(id,callBack){
        lieyou_showLog("h5-播放视频");
        this.callAndroid_2(ACTION_AD_WATCH,callBack);
    },

    showBannerCustom(obj){
        this.showBanner();
    },
    showBannerByBottom(id){
        this.showBanner();
    },
    showBannerByTop(id){
        this.showBanner();
    },
    
    showBanner(){
        lieyou_showLog("h5-显示banner");
        if(this._showBanner){
            return;
        }
        this._showBanner = true;
        this.callAndroid(ACTION_BANNER_SHOW);
    },
    hideBanner(){
        lieyou_showLog("h5-隐藏banner");
        this._showBanner = false;
        this.callAndroid(ACTION_BANNER_HIDE);
    },
    
    showRate(){
        this.callAndroid(ACTION_RATE);
    },
    
    newJumpApp(obj){
        if(obj.success){
            obj.success();
        }
        obj.umid = oppoGetOnlineDataId;
        GamePlay.startWeb(JSON.stringify(obj.data));
    },

    showNativeHideBanner(node){
        var showM = false;
        if(this.moreGameBanner && this.moreGameBanner.isValid){
            showM = true;
        }
        var showB = this._showBanner;
        
        var baseNodejs = node.addComponent('lieyou_baseNode');
        baseNodejs.enableCallBack = ()=>{
            lieyou_SdkManager.hideBanner();
        }
        baseNodejs.destroyCallBack = ()=>{
            if(showB){
                this.showBanner();
            }else if(showM){
                lieyou_SdkManager.showMoreGameByBanner();
            }
        }
    }
})
module.exports = lieyou_webManager;




