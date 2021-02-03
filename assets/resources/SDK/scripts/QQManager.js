

const BaseManager = require('BaseManager');
let QQManager = cc.Class({
	extends: require('BaseManager'),
	properties:{
        bannerAd: null,
    },
    vibrateShort(){
        qq.vibrateShort();
    },
    vibrateLong(){
        qq.vibrateLong();
    },
    getVersion(){
        return lieyou_qqGameVersion;
    },
    getHaveVideo(){
        if(qqVideoId == '') {
            return false;
        }
        return true;
    },
    getSysPlatform_string(){
		return 'qq';
    },
    getSysPlatform(){
		return 11;
    },
    onShow:function(fun){
        qq.onShow(fun);
    },
    onHide:function(fun){
        qq.onHide(fun);
    },
    getSystemInfo(){
        var info = qq.getSystemInfoSync();
        this.platformVersionCode = info.SDKVersion;


        this.canShowAppBox = this.getSDKVersionCanUse('1.7.1');
    },
    setOnlineData(data){
        if(data.qq){
            if(data.qq.starShowSpotTime){
                this._showSpotStartTime = Number(data.qq.starShowSpotTime);
            }
            if(data.qq.installShortcutIntervalTime!=undefined){
                this._installShortcutTime = Number(data.qq.installShortcutIntervalTime);
            }
            if(data.qq.serverVersion != undefined){
                var serverVersoin = Number(data.qq.serverVersion);
                if(serverVersoin >= lieyou_qqGameVersion) {
                    this.base_IsShenHe = false;
                }else{
                    this.base_IsShenHe = true;
                }
            }
            if(!data.qq.closeShortcut){
                this.canShowShortcut = true;
            }
            var adData = {};
            if(data.qq.theme){
                adData.theme = data.qq.theme;
            }
            if(data.qq.crossSwitch){
                adData.crossSwitch = data.qq.crossSwitch;
            }
            if(data.qq.bizData){
                adData.bizData = data.qq.bizData;
            }
            if(data.qq.ad_datas){
                adData.ad_datas = data.qq.ad_datas;
            }
            if(data.qq.switch){
                adData.switch = data.qq.switch;
            }
            this.setAdData(adData);
            
            if(data.qq.spot_first_ad != undefined){
                this.spot_first_ad = data.qq.spot_first_ad;
            }
            if(data.qq.refreshAppBoxTime != undefined){
                this.refreshAppBoxAdTime = Number(data.qq.refreshAppBoxTime);
            }
            if(data.qq.spot_Interval != undefined){
                this._showSysSpotTime = Number(data.qq.spot_Interval);
            }

            if(data.qq.id_config && data.qq.is_local_pos_id != true){
                if(data.qq.id_config.bid != undefined){
                    qqBannerId = data.qq.id_config.bid;
                }
                if(data.qq.id_config.spoid != undefined){
                    qqSpotADId = data.qq.id_config.spoid;
                }
                if(data.qq.id_config.awardid != undefined){
                    qqVideoId = data.qq.id_config.awardid;
                }
                if(data.qq.id_config.nativeAd != undefined){
                    qqAppBoxADId = data.qq.id_config.appBoxid;
                }
            }
            if(data.qq.spotShowAppBox != undefined){
                this.spotShowAppBox = data.qq.spotShowAppBox;
            }
            this.setSwitchData(data.qq);
        }else{
        }
    },
    initOnlineData(){
        if(oppoGetOnlineDataId == ''){
            lieyou_SdkManager.showToast('没有填写qgID');
            return;
        }
        var self = this;
        var version = Userdefault.getIntForKey('sdk_oppo_online_version',0);
        var time = Userdefault.getIntForKey('sdk_oppo_online_time',0);
        var sp = Userdefault.getIntForKey('sdk_oppo_online_sp',0);
        var nowTime = getTime()/1000;
        if(nowTime - time < sp && nowTime > time){
            var response = Userdefault.getStringForKey('sdk_oppo_online_data','');
            var data = JSON.parse(response);
            self.setOnlineData(data);
            return;
        }
        this.dataVersion = version;
        var url = this.getLoginUrl();
		this.setDataForHttp(url,function(response){
			if(response == "") {
				return;
            }
            try {
                var jsonD = JSON.parse(response);
                if(jsonD.server_data_version){
                    Userdefault.setDataForKey('sdk_oppo_online_version',jsonD.server_data_version);
                }
                if(jsonD.isMoreInfo != undefined){
                    self.isMoreInfo = jsonD.isMoreInfo;
                }
                if(jsonD.sp){
                    Userdefault.setDataForKey('sdk_oppo_online_sp',jsonD.sp);
                }
                Userdefault.setDataForKey('sdk_oppo_online_time',nowTime);
                
                if(jsonD.server_data_version == version){
                    var response = Userdefault.getStringForKey('sdk_oppo_online_data','');
                    var data = JSON.parse(response);
                    self.setOnlineData(data);
                    return;
                }
                var data = JSON.parse(response).data;
                if(!data){
                    return;
                }
                self.setOnlineData(data);
                Userdefault.setDataForKey('sdk_oppo_online_data',JSON.stringify(data));

            } catch (error) {
                lieyou_showLog('qqlog------error  initOnlineData + ' + error);
            }
		});
    },
    init: function(obj){
        
        if(cc.sys.os != cc.sys.OS_IOS){
            setTimeout(() => {
                this.installShortcut2();
            }, 5000);
        }
        
        this.onHide(()=>{
            if(cc.sys.os != cc.sys.OS_IOS){
                this.installShortcut2();
            }
        });
        // this._super(obj);
        BaseManager.prototype.init.call(this,obj);
        this.spotShowAppBox = true;
        this.getSystemInfo();
        this.openShare();
        this.setShareData();
        this.initAD();
        this.spot_first_ad = 'sys';
        this.refreshAppBoxAdTime = 30;
        this._canShowSysSpot = true;
        this._showSysSpotTime = 0;

        setTimeout(() => {
            this.initOnlineData();    
        }, 1000);

        this.addColorSign();
    },
    initAD(){
        if(qqSpotADId != '' && this.getSDKVersionCanUse('1.12.0')){
            this._InterstitialAd = qq.createInterstitialAd({
                adUnitId:qqSpotADId
            });
            this._InterstitialAd.onError((error)=>{
                // if(this.spotShowAppBox&&!this.base_IsShenHe){
                //     this.showAppBox2();
                // }
                lieyou_SdkManager.showMoreGameGrid();
                lieyou_showLog('qqlog---------- sporError '+ JSON.stringify(error));
            });
        }
        if(qqVideoId == '') {
            return;
        }
        var videoAd = qq.createRewardedVideoAd({ 
            adUnitId: qqVideoId
        });
        this.videoAd = videoAd;
        videoAd.onLoad(() =>{
            lieyou_showLog('qqlog---------- vd success');
        });
        videoAd.onClose((res) =>{
            lieyou_showLog('qqlog------------ vd playSuccess');
            if(res.isEnded){
                if(this.vdCallBack)
                this.vdCallBack(true);
            }else{
                if(this.vdCallBack)
                this.vdCallBack(false);
            }
        });
        videoAd.onError((res) =>{
            lieyou_showLog('qqlog----------- vd fail' + JSON.stringify(res));
            if(this.vdCallBack)
            this.vdCallBack(false);
        });
    },
    setShareData: function() {
		//获取分享数据
		this.setDataForHttp(wxData.shareUrl,function(response){
            wxData.shareData = JSON.parse(response);
		});
	},
    login(){
        qq.login({
            success(res) {
            }
        })
    },
    openShare(){
        
        
        qq.showShareMenu({
            showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment']
        })
        qq.onShareAppMessage(function(){
            var adid = 0;
            var _title = "好玩的游戏，快来一起玩吧";
            var _url = "https://res.igame58.com/wxxyx/commom/shareIcon.png";
            if(wxData.shareData.length > 0){
                var i = parseInt(Math.random() * wxData.shareData.length);
                var data = wxData.shareData[i].item;
                var random = parseInt(Math.random() * data.length);
                adid = data[random].id;
                _title = data[random].title;
                _url = data[random].img;
            }
            return {
                title: _title,
                imageUrl: _url
            };
        })
        // qq.onShareAppMessage(() => ({
        //     title: _title,
        //     imageUrl: _url
        // }))
    },
    share(obj){
        var adid = 0;
		var _title = "好玩的游戏，快来一起玩吧";
		var _url = "https://res.igame58.com/wxxyx/commom/shareIcon.png";
		if(wxData.shareData.length > 0){
            var i = parseInt(Math.random() * wxData.shareData.length);
            var data = wxData.shareData[i].item;
            var random = parseInt(Math.random() * data.length);
            adid = data[random].id;
            _title = data[random].title;
            _url = data[random].img;
        }

        qq.shareAppMessage({
            title:_title,
            imageUrl:_url
        })
    },
    showAppBox2(){
        if(!this.canShowAppBox){
            return;
        }
        if(qqAppBoxADId == ''){
            return;
        }
        if(this._appBox){
            var time = getTime()/1000;
            if(time-this.upLoadAppBoxTime  > this.refreshAppBoxAdTime){
                this.upLoadAppBoxTime = time;
                this._appBox.load().then(()=>{
                    this._appBox.show();
                });
            }else{
                this._appBox.show();
            }
            return;
        }
        this.upLoadAppBoxTime = getTime()/1000;
        this._appBox = qq.createAppBox({
            adUnitId: qqAppBoxADId
        });
        this._appBox.load().then(()=>{
            this._appBox.show();
        });
    },
    showAppBox(obj){
        if(!this.canShowAppBox){
            return;
        }
        if(qqAppBoxADId == ''){
            return;
        }
        var self = this;
        var fNode = obj.node?obj.node:cc.director.getScene();
        var nodeX = obj.x?obj.x:0;
        var nodeY = obj.y?obj.y:0;
        
        var node = lieyou_qqAppBox();
        fNode.addChild(node);
        node.x = nodeX;
        node.y = nodeY;
        node.on(cc.Node.EventType.TOUCH_START, function(event){
            self.showAppBox2();
        }, );
        
    },
    hideBanner(){
        if(this.bannerAd){
            this.bannerAd.destroy();
            this.bannerAd = null;
		}
    },
    showBanner(obj){
        if(this.moreGameBanner && this.moreGameBanner.isValid){
            this.moreGameBanner.destroy();
            this.moreGameBanner = null;
        }
        if(qqBannerId == '') {
            return;
        };
        var self = this;
        var size = cc.view.getFrameSize();
        var w2 = 0;
        if((cc.winSize.height / cc.winSize.width > 2 || cc.winSize.width / cc.winSize.height > 2) && cc.sys.os == cc.sys.OS_IOS){
            w2 = 20;
        }
        var w = 300;
        var h = w/4.121;
        var t = size.height - h;
        var l = (size.width-w)/2;
        if(!this.bannerAd){
            this.bannerAd = qq.createBannerAd({
                adUnitId: qqBannerId,
                style: {
                    left:l,
                    top:t-w2,
                    width:w
                }
            });
        }
        
        this.bannerAd.onLoad(function () {
            self.bannerAd.offLoad(function(){});
            self.bannerAd.offError(function(){});
            lieyou_showLog('qqlog--------------  banner show success');
            self.bannerAd.show();
        })
        this.bannerAd.onError(function (err) {
            self.bannerAd.offLoad(function(){});
            self.bannerAd.offError(function(){});
            lieyou_showLog('qqlog--------------  banner show fail'+JSON.stringify(err));
        })
        
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
        if(qqVideoId == '') {
            closeCallBack(false);
            return;
        }
        this.vdCallBack = closeCallBack;
        if(this.videoAd){
            this.videoAd.show();
            return;
        }
        
        
    },
    
    showSpot(){
        var time = parseInt(getTime()/1000);
        if(time - this._beginGameTime < this._showSpotStartTime){
            lieyou_showLog('qqlog----------- load spot 启动游戏一定时间内不显示插屏');
            return;
        }
        var self = this;
        if(!this._canShowSysSpot){
            lieyou_showLog('qqlog----------- load spot or Naitve fail 间隔未到'+self._showSysSpotTime+'s钟');
            this.installShortcut({shoaDialog:true});
            return;
        }
        setTimeout(() => {
            self._canShowSysSpot = true;
        }, 1000*self._showSysSpotTime);
        self._canShowSysSpot = false;
        if(this.spotShowAppBox && qqAppBoxADId != '' && !this.base_IsShenHe && this.spot_first_ad != 'sys' && this.canShowAppBox){
            this.showAppBox2();
            return;
        }
        if(qqSpotADId =='') {
            if(this.spotShowAppBox && !this.base_IsShenHe && this.canShowAppBox){
                this.showAppBox2();
            }
            return;
        }
        if(this._InterstitialAd){
            this._InterstitialAd.show();
        }
    },
    showSpotByPause(isHaveNative,top){
        this.showSpot();
    },
    showSpotByBegin(isHaveNative,top){
        this.showSpot();
    },
    showSpotByFinish(isHaveNative,top){
        this.showSpot();
    },
    getSDKVersionCanUse: function(data){
		var version = this.platformVersionCode;
		var str = data.split(".");
		var str1 = version.split(".");
		for(var i = 0;i<3;i++) {
			if(parseInt(str1[i])<parseInt(str[i])) {   
				return false;
			}else if(parseInt(str1[i])>parseInt(str[i])) {
				break;
			}
		}
        return true;
    },
    
    newJumpApp(obj){
        if(obj.success){
            obj.success();
        }
        this.showAppBox2();
    },
    addColorSign(){
        if(this.getSDKVersionCanUse('1.10.0')){
            qq.addColorSign();
        }
    },

    installShortcut2(){
        var time = parseInt(getTime()/1000);
        if(time - this._beginGameTime < this._installShortcutStartTime){
            lieyou_showLog('qqlog installShortcut canShowShortcut 开始时间未到');
            return;
        }
        if(time - this._upInstallShortcutTime < this._installShortcutTime){
            lieyou_showLog('qqlog installShortcut canShowShortcut 间隔时间未到');
            return;
        }
        this._upInstallShortcutTime = time;
        if(!this.canShowShortcut){
            lieyou_showLog('qqlog installShortcut canShowShortcut false');
            return;
        }
        if(this.base_IsShenHe){
            lieyou_showLog('qqlog installShortcut shenhe true');
            return;
        }
        if(!this.getSDKVersionCanUse('1.7.1')){
            lieyou_showLog('qqlog installShortcut version low');
            return;
        }
        qq.saveAppToDesktop({
            success:()=>{
            },
            fail:()=>{
            }
        });
    },

    showModal(obj){
        qq.showModal({title:obj.title?obj.title:'',content:obj.content?obj.content:'',success:(res)=>{
            if (res.confirm) {
                obj.success && obj.success();
            } else if (res.cancel) {
                obj.fail && obj.fail();
            }
        }});
    },
	showToast(title){
        qq.showToast({title:title});
    },
	hideToast(){
        qq.hideToast({});
    },
	showLoading(title){
        qq.showLoading({title:title});
    },
	hideLoading(){
        qq.hideToast({});
    },
    showMoreGameByIcon(obj = {}){
        obj.num = 1;
        this.showBlockAd(obj);
    },
    showMoreGameMiddle_one(obj = {}){
        obj.num = 5;
        return this.showBlockAd(obj);
    },
    showMoreGameMiddle_two(obj = {}){
        if(obj.moreGame){
			return BaseManager.prototype.showMoreGameMiddle_two.call(this,obj);
		}
        obj.num = 5;
        return this.showBlockAd(obj);
    },
    showNativeAd_small(obj = {}){
        obj.num = 5;
        return this.showBlockAd(obj);
    },
    showNativeAd_big(obj = {}){
        obj.num = 5;
        return this.showBlockAd(obj);
    },
    showBlockAd(obj){
        if(this.getSDKVersionCanUse('1.15.0') && lieyou_qqBlockAd != ""){
            var fNode = obj.node?obj.node:cc.director.getScene();
           
            if(this._blockAd){
                this._blockAd.offError();
                this._blockAd.onResize();
                this._blockAd.destroy();
            }
            var blockAd = qq.createBlockAd({
                adUnitId:lieyou_qqBlockAd,
                style:{left:50,top:50},
                size:obj.num?obj.num:5,
                orientation:"landscape"
            });
            this._blockAd = blockAd;
            blockAd.show();

            blockAd.onError((res)=>{
				lieyou_showLog("qqlog----- show gridad fail "+JSON.stringify(res));
            });
            var baseNodejs = fNode.addComponent('lieyou_baseNode');
            blockAd.onResize((res)=>{
                var viewSize = cc.view.getFrameSize();
                let updateCallBack = ()=>{
                    var worldPos = fNode.convertToWorldSpaceAR(cc.v2(obj.x?obj.x:0, obj.y?obj.y:0));
                    var xProportion = worldPos.x / lieyou_SdkManager.sdkWinSize.width;
                    var yProportion = 1- (worldPos.y / lieyou_SdkManager.sdkWinSize.height);
                    blockAd.style.left = viewSize.width*xProportion - res.width/2;
                    blockAd.style.top = viewSize.height*yProportion - res.height/2;
                }
                updateCallBack();
                baseNodejs.updateCallBack = updateCallBack;
            });
            
			baseNodejs.destroyCallBack = ()=>{
				lieyou_showLog('wxlog---------- gridAd destroy');
				blockAd.destroy();
            }
            return true;
        }
        return false;
    },
})
module.exports = QQManager;




