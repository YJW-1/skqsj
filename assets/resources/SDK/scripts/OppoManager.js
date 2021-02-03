//广告错误信息 1016 广告位id无效或不存在 或审核未通过
//广告错误信息 1015 应用id（appid）和包名不匹配
//广告错误信息 1014 应用id（appid）无效或不存在
//广告错误信息 1003 无广告返回
//最低版本1050
window.oppo_nativeArea = 1;
window.oppo_waitT = 300;
const BaseManager = require('BaseManager');
var OppoManager = cc.Class({
	extends: require('BaseManager'),
	properties:{
        bannerAd: null,
    },
    getHaveVideo(){
        if(oppoVideoId.length <= 0) {
            return false;
        }
        return true;
    },
    getVersion(){
        return oppoGameVersion;
    },
    getSysPlatform_string(){
		return 'oppo';
    },
    getSysPlatform(){
		return 4;
	},
    onShow:function(fun){
        qg.onShow(fun);
    },
    onHide:function(fun){
        qg.onHide(fun);
    },
    setOnlineData(data){
        if(data.oppo){
            
            if(data.oppo.showNativeIntervalTime!=undefined){
                this._showNativeIntervalTime = Number(data.oppo.showNativeIntervalTime);
            }
            if(data.oppo.showBannerStartTime!=undefined){
                this._showBannerStartTime = Number(data.oppo.showBannerStartTime);
            }
            if(data.oppo.showNativeStartTime!=undefined){
                this._showNativeStartTime = Number(data.oppo.showNativeStartTime);
            }
            if(data.oppo.canShowNativeAd!=undefined){
                this.canShowNativeAd = data.oppo.canShowNativeAd;
            }
            if(data.oppo.starShowSpotTime!=undefined){
                this._showSpotStartTime = Number(data.oppo.starShowSpotTime);
            }
            if(data.oppo.installShortcutIntervalTime!=undefined){
                this._installShortcutTime = Number(data.oppo.installShortcutIntervalTime);
            }
            if(data.oppo.nativeAdLoadServerRes){
                _SDKNativeAdLoadServerRes = data.oppo.nativeAdLoadServerRes;
            }
            if(data.oppo.serverVersion != undefined){
                var serverVersoin = Number(data.oppo.serverVersion);
                if(serverVersoin >= oppoGameVersion) {
                    this.base_IsShenHe = false;
                }else{
                    this.base_IsShenHe = true;
                }
            }
            if(!data.oppo.closeShortcut){
                this.canShowShortcut = true;
            }
            var adData = {};
            if(data.oppo.theme){
                adData.theme = data.oppo.theme;
            }
            if(data.oppo.crossSwitch){
                adData.crossSwitch = data.oppo.crossSwitch;
            }
            if(data.oppo.bizData){
                adData.bizData = data.oppo.bizData;
            }
            if(data.oppo.ad_datas){
                adData.ad_datas = data.oppo.ad_datas;
            }
            if(data.oppo.switch){
                adData.switch = data.oppo.switch;
            }
            if(this.platformVersionCode>=1044){
                this.setAdData(adData);
            }
            if(data.oppo.banner_close_autoshow != undefined){
                this._banner_close_autoshow = data.oppo.banner_close_autoshow;
            }
            if(data.oppo.spot_banner_only != undefined){
                this._spot_banner_only = data.oppo.spot_banner_only;
            }
            if(data.oppo.spot_Interval != undefined){
                this._showSysSpotTime = Number(data.oppo.spot_Interval);
            }
            if(data.oppo.startNativeSpot != undefined){
                this.startNativeSpot = Number(data.oppo.startNativeSpot);
            }
	        
            if(data.oppo.is_play_native != undefined){
                this.is_play_native = data.oppo.is_play_native;
            }
            if(data.oppo.canShowNativeSpot != undefined){
                this.canShowNativeSpot = data.oppo.canShowNativeSpot;
            }
            if(data.oppo.waitT != undefined){
                this.showNativeSpotTime = Number(data.oppo.waitT);
            }
            if(data.oppo.banner_close_but_size != undefined){
                this.banner_close_but_size = Number(data.oppo.banner_close_but_size);
            }
            if(data.oppo.banner_close_but_range != undefined){
                this.banner_close_but_range = Number(data.oppo.banner_close_but_range);
            }
            if(data.oppo.spot_close_but_alpha != undefined){
                this.spot_close_but_alpha = Number(data.oppo.spot_close_but_alpha);
            }
            if(data.oppo.spot_close_but_size != undefined){
                this.spot_close_but_size = Number(data.oppo.spot_close_but_size);
            }
            if(data.oppo.banner_show_height != undefined){
                this.banner_show_height = Number(data.oppo.banner_show_height);
            }
            if(data.oppo.spot_click_count != undefined){
                this.spot_click_count = Number(data.oppo.spot_click_count);
            }
            if(data.oppo.spot_show_interval != undefined){
                this.spot_show_interval = Number(data.oppo.spot_show_interval);
            }
            if(data.oppo.spot_close_but_range != undefined){
                this.spot_close_but_range = Number(data.oppo.spot_close_but_range);
            }
            if(data.oppo.banner_close_but_alpha != undefined){
                this.banner_close_but_alpha = Number(data.oppo.banner_close_but_alpha);
            }
            if(data.oppo.banner_close_but_show != undefined){
                this.banner_close_but_show = data.oppo.banner_close_but_show;
            }
            if(data.oppo.spot_click_close != undefined){
                this.spot_click_close = data.oppo.spot_click_close;
            }
            if(data.oppo.banner_click_refresh != undefined){
                this.banner_click_refresh = data.oppo.banner_click_refresh;
            }
            if(data.oppo.spot_first_ad != undefined){
                this.spot_first_ad = data.oppo.spot_first_ad;
            }
            if(data.oppo.banner_first_ad != undefined){
                this.banner_first_ad = data.oppo.banner_first_ad;
            }
            if(data.oppo.is_local_pos_id != undefined){
                this.is_local_pos_id = data.oppo.is_local_pos_id;
            }
            if(data.oppo.canShowNativeBanner != undefined){
                this.canShowNativeBanner = data.oppo.canShowNativeBanner;
            }
            if(data.oppo.nativeDelayShowTime != undefined){
                this.nativeDelayShowTime = Number(data.oppo.nativeDelayShowTime);
            }
            if(data.oppo.nativeDelayDestroyTime != undefined){
                this.nativeDelayDestroyTime = Number(data.oppo.nativeDelayDestroyTime);
            }
            if(data.oppo.refreshBannerTime != undefined){
                this.refreshBannerTime = Number(data.oppo.refreshBannerTime);
            }
            this.setSwitchData(data.oppo);
        }else{
        }
        var id_config = null;
        if(data.oppo.id_config){
            id_config = data.oppo.id_config;
        }else if(data.id_config){
            id_config = data.id_config;
        }
        if(id_config){
            if(!this.is_local_pos_id){
                if(id_config.nativeall != undefined && id_config.nativeall.length && id_config.nativeall.length >= 6){
                    var allid = this.shuffle(id_config.nativeall);
                    oppoNativeId = [];
                    oppoNativeBannerId = [];
                    oppoNativePlayId = [];
                    var idNum = allid.length;
                    for(var i = 0;i < idNum;i++){
                        if(i < parseInt(idNum * 0.5)){
                            oppoNativeId.push(allid[i]);
                        }else if(i < parseInt(idNum * 0.9)){
                            oppoNativeBannerId.push(allid[i]);
                        }else{
                            oppoNativePlayId.push(allid[i]);
                        }
                    }

                    lieyou_showLog("oppolog123 oppoNativeId =  "+oppoNativeId);
                    lieyou_showLog("oppolog123 oppoNativeBannerId =  "+oppoNativeBannerId);
                    lieyou_showLog("oppolog123 oppoNativePlayId =  "+oppoNativePlayId);
                }else{
                    if(id_config.nativeBannerid != undefined){
                        oppoNativeBannerId = id_config.nativeBannerid;
                    }
                    if(id_config.nativeid != undefined){
                        oppoNativeId = id_config.nativeid;
                    }
                    if(id_config.nativeplay != undefined){
                        oppoNativePlayId = id_config.nativeplay;
                    }
                }
                if(id_config.appid != undefined){
                    oppoId_SDK = id_config.appid;
                }
                if(id_config.bid != undefined){
                    oppoBannerId = id_config.bid;
                }
                if(id_config.spoid != undefined){
                    oppoSpotADId = id_config.spoid;
                }
                if(id_config.awardid != undefined){
                    oppoVideoId = id_config.awardid;
                }
                this.clearNativeAd();
            }
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
                lieyou_showLog('oppolog------error  initOnlineData + ' + error);
            }
		});
    },
    login(){
        qg.login({
            success:(res)=>{
                var data = JSON.stringify(res.data);
                openid = res.data.uid;
            }
        });
    },
    getSystemInfo(){
        var info = qg.getSystemInfoSync();
        this.platformVersionCode = info.platformVersion;
        this.androidVersion = info.system;
        this.model = info.model;
        // this.region = info.region;
        qg.getNetworkType({
            success:(res)=>{
                this.networkType = res.networkType;
            }
        });
    },
    init: function(obj){
        try {
            qg.reportMonitor('game_scene', 0);
        } catch (error) {
        }
        // this._super(obj);
        BaseManager.prototype.init.call(this,obj);
        this.getSystemInfo();
        this.login();
        var nowTime = parseInt(getTime()/1000);
        if(Userdefault.getIntForKey('oppo_isNewPlayer',1)){
            Userdefault.setDataForKey('oppo_isNewPlayer',0);
            Userdefault.setDataForKey('oppo_oncePlayGameTime',nowTime);
        }
        //false 300
        this._preShowNativeTime = 0;
        this._showNativeIntervalTime = 10;
        this._showBannerStartTime = 40;
        this._showNativeStartTime = 40;
        this.canShowNativeAd = true;
        this.canShowShortcut = true;
        this.isSysInstallShortCut = true;
        this.is_play_native = true;
        this.canShowNativeSpot = true;
        this.showNativeSpotTime = 0;
        this.canShowNativeBanner = true;
        this.nativeDelayShowTime = 0;
        this.nativeDelayDestroyTime = 0.1;
        this.refreshBannerTime = 15;
        this.is_local_pos_id = false;
        this.spot_first_ad = "native";
        this.banner_first_ad = "native";
        this.banner_close_but_alpha = 120;
        this.banner_close_but_size = 35;
        this.banner_close_but_range = 40;
        this.spot_close_but_alpha = 100;
        this.spot_close_but_size = 35;
        this.spot_close_but_range = 50;
        this.banner_show_height = 115;
        this.banner_close_but_show = true;
        this.spot_click_close = true;

        this.banner_click_refresh = false,
        this.spot_click_count = 8,
        this.spot_show_interval = 2,
        this._installShortcutStartTime = 20;
        
        qg.initAdService({
            appId: oppoId_SDK,
            success: function(res){
                lieyou_showLog("oppolog------init success-----  " + res);
            },
            fail: function(res){
                lieyou_showLog("oppolog------init fail-----  " + res);
            },
            compvare: function(res){
                lieyou_showLog("oppolog------init compvare-----  " + res);
            }
        });
        this._nativeEmbedAd = [];
        this.showNativeEmbedIndex = 0;
        this.showNativeEmbedFailNum = 0;

        this._haveBannerAd = false;
        this._bannerAd = [];
        this._nativeSporAd = [];
        this._nativeBannerAd = [];
        this._nativePlayAd = [];
        this._insertAd = [];
        this._videoAd = [];
        this.showAdBannerIndex = 0;
        this.showAdSpotIndex = 0;
        this.showAdAwardIndex = 0;
        this.showAdNativeIndex = 0;
        this.showAdNativePlayIndex = 0;
        this.showAdNativeBannerIndex = 0;

        this.showAdBannerContinueFailNum = 0;
        this.showAdSpotContinueFailNum = 0;
        this.showAdAwardContinueFailNum = 0;
        this.showAdNativeContinueFailNum = 0;
        this.showAdNativePlayContinueFailNum = 0;
        this.showAdNativeBannerContinueFailNum = 0;
        this.startNativeSpot = 0;

        this._addNativeAdNode = [],
        this._addNativeAdNum = 0,
        this._canShowSysSpot = true;
        this._showSysSpotTime = 0;

        this._spot_banner_only = true;

        this._banner_close_autoshow = false;
        this._closeBannerNum = 0;
        setTimeout(() => {
            this.initOnlineData();    
        }, 1000);

        
        this.loadNativeAd();
    },
    
    vibrateShort(){
        qg.vibrateShort();
    },
    vibrateLong(){
        qg.vibrateLong();
    },
    clearNativeAd(){
        for(var i = 0;i < this._nativeSporAd.length;i++){
            this._nativeSporAd[i].destroy();
            this._nativeSporAd[i] = null;
        }
        for(var i = 0;i < this._nativeBannerAd.length;i++){
            this._nativeBannerAd[i].destroy();
            this._nativeBannerAd[i] = null;
        }
        for(var i = 0;i < this._nativePlayAd.length;i++){
            this._nativePlayAd[i].destroy();
            this._nativePlayAd[i] = null;
        }
        for(var i = 0;i < this._insertAd.length;i++){
            this._insertAd[i].destroy();
            this._insertAd[i] = null;
        }
        for(var i = 0;i < this._videoAd.length;i++){
            this._videoAd[i].destroy();
            this._videoAd[i] = null;
        }
        for(var i = 0;i < this._nativeEmbedAd.length;i++){
            this._nativeEmbedAd[i].destroy();
            this._nativeEmbedAd[i] = null;
        }
        this.loadNativeAd();
    },
    custClickNative(node){
        if(node && node.isValid){
            if(node.CallBack){
                node.CallBack();
            }else{
            }
        }
    },
    addNativeAd(node,flag = false){
        var self = this;
        
        lieyou_showLog('oppolog1------ addNativeAd ' + this.showAdNativePlayIndex + '   '+oppoNativePlayId[this.showAdNativePlayIndex]);
        
        
        if(node){
            if(!node.isValid){
                return;
            }
            
            var nativeadTag = 0;
            if(node.nativeAdTag){
                nativeadTag = node.nativeAdTag;
            }else{
                var nodeAction = cc.repeatForever(cc.sequence(cc.delayTime(1),cc.callFunc(()=>{
                    self.addNativeAd(node);
                })));
                nodeAction.setTag(5697846); 
                node.runAction(nodeAction);
                self._addNativeAdNum++;
                node.nativeAdTag = self._addNativeAdNum;
                nativeadTag = self._addNativeAdNum;
            }
            self._addNativeAdNode[nativeadTag] = node;
            node.canShowAd = true;
        }
        if(oppoNativePlayId.length <= 0) {
            return;
        }
        if(!flag){
            self.showAdNativePlayContinueFailNum = 0;
        }
        var id = oppoNativePlayId[this.showAdNativePlayIndex];
        if(this._nativePlayAd[this.showAdNativePlayIndex]){
            this._nativePlayAd[this.showAdNativePlayIndex].load();
            this.showAdNativePlayIndex++;
            this.showAdNativePlayIndex = this.showAdNativePlayIndex%oppoNativePlayId.length;
            return;
        }
        let nativeAd = qg.createNativeAd({ 
            posId: id
        })
        this._nativePlayAd[this.showAdNativePlayIndex] = nativeAd;
        this.showAdNativePlayIndex++;
        this.showAdNativePlayIndex = this.showAdNativePlayIndex%oppoNativePlayId.length;
        nativeAd.load();
        nativeAd.onLoad((res) =>{
            if(res && res.adList && res.adList.length > 0){
                
            }else{
                lieyou_showLog('oppolog------ show addNativeAd fail2 ' + '   ' + JSON.stringify(res))
                self.showAdNativePlayContinueFailNum++;
                if(self.showAdNativePlayContinueFailNum < oppoNativePlayId.length){
                    self.addNativeAd(null,true);
                }else{
                }
                return;
            }
            self.showAdNativePlayContinueFailNum = 0;
            try {
                
                var numL = parseInt(Math.random()*res.adList.length);
                var id = res.adList[numL].adId;
                var title = res.adList[numL].title;//广告标题
                var desc = res.adList[numL].desc;//广告描述
                var clickBtnTxt = res.adList[numL].clickBtnTxt;//点击按钮文本描述
                var iconUrlList = res.adList[numL].iconUrlList;//广告图icon
                var imgUrlList = res.adList[numL].imgUrlList;//广告图
                var logoUrl = res.adList[numL].logoUrl;//广告标签图
                nativeAd.reportAdShow({
                    adId: id
                });
                var touchNode = null;//self._addNativeAdNode;
                for(let nN = self._addNativeAdNum;nN>0;nN--){
                    var adnode = self._addNativeAdNode[nN];
                    if(adnode && adnode.isValid && adnode.getComponent(cc.Sprite) && adnode.canShowAd){
                        touchNode = adnode;
                        adnode.canShowAd = false;
                        break;
                    }else{
                    }
                }
                if(!touchNode){
                    lieyou_showLog('oppolog nativeNode null');
                    return;
                }
                touchNode.stopActionByTag(5697846);
                touchNode.CallBack = ()=>{
                    nativeAd.reportAdClick({
                        adId: id
                    });
                    self.addNativeAd(touchNode);
                };
                if(touchNode && touchNode.isValid && touchNode.getComponent(cc.Sprite)){
                    touchNode.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
                    if(!touchNode.haveTouchOn){
                        touchNode.haveTouchOn = true;
                        touchNode.on(cc.Node.EventType.TOUCH_START, function(event){
                            event.target.CallBack();
                        });
                        if(logoUrl != ''){
                            var adTitleNode = new cc.Node();
                            adTitleNode.scale = 0.5;
                            touchNode.addChild(adTitleNode);
                            adTitleNode.x = touchNode.width/2;
                            adTitleNode.y = touchNode.height/2*-1;
                            adTitleNode.anchorX = 1;
                            adTitleNode.anchorY = 0;
                            adTitleNode.addComponent(cc.Sprite);
                            cc.loader.load(logoUrl, (err, texture) => {
                                if(adTitleNode && adTitleNode.isValid){
                                    adTitleNode.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
                                }
                            });
                        }
                    }
                    var url = '';
                    if(touchNode.width / touchNode.height >= 1.5){
                        if(imgUrlList.length > 0){
                            url = imgUrlList[parseInt(Math.random()*imgUrlList.length)];
                        }else if(iconUrlList.length > 0){
                            url = iconUrlList[parseInt(Math.random()*iconUrlList.length)];
                        }
                    }else{
                        if(iconUrlList.length > 0){
                            url = iconUrlList[parseInt(Math.random()*iconUrlList.length)];
                        }else if(imgUrlList.length > 0){
                            url = imgUrlList[parseInt(Math.random()*imgUrlList.length)];
                        }
                    }
                    if(url != ''){
                        cc.loader.load(url, (err, texture) => {
                            if(touchNode && touchNode.isValid){
                                touchNode.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
                            }
                        });
                    }
                }
            } catch (error) {
                lieyou_showLog('oppolog-----addNativeAd Fail + ' + error);
            }
            
        })
        nativeAd.onError((err) =>{
            lieyou_showLog('oppolog------ show addNativeAd fail1 ' + '   ' + JSON.stringify(err))
            self.showAdNativePlayContinueFailNum++;
            if(self.showAdNativePlayContinueFailNum < oppoNativePlayId.length){
                self.addNativeAd(null,true);
            }else{
            }
        })
	},
    showNativeBanner(flag,isEnd){
        var self = this;
        self._NativeBannerFlag = flag;
        self._NativeBannerIsEnd = isEnd;
        var nowTime = parseInt(getTime()/1000);
		var oldTime = Userdefault.getIntForKey(lieyou.Key_OncePlayerTime,nowTime);
        var time = nowTime - oldTime;
        if(!this.canShowNativeSpot || time < this.showNativeSpotTime || Userdefault.getIntForKey('oppo_showNativeNum',0) < this.startNativeSpot){
            if(!self._NativeBannerIsEnd){
                self.showSpot(false,true);
            }else{
                self.installShortcut({shoaDialog:true});
            }
            return;
        }
        lieyou_showLog('oppolog1------ showNativeBanner ' + this.showAdNativeIndex + '   '+oppoNativeId[this.showAdNativeIndex]);
        if(!self._NativeBannerFlag){
            self.showAdNativeContinueFailNum = 0;
        }
        if(oppoNativeId.length <= 0) {
            if(!self._NativeBannerIsEnd){
                self.showSpot(false,true);
            }else{
                self.installShortcut({shoaDialog:true});
            }
            return;
        }
        if(this._nativeSporAd[this.showAdNativeIndex]){
            this._nativeSporAd[this.showAdNativeIndex].load();

            this.showAdNativeIndex++;
            this.showAdNativeIndex = this.showAdNativeIndex%oppoNativeId.length;
            return;
        }
        lieyou_showLog('oppolog2------ showNativeBanner ' + this.showAdNativeIndex);
        var id = oppoNativeId[this.showAdNativeIndex];
        var nativeAd = qg.createNativeAd({ 
            posId: id
        })
        this._nativeSporAd[this.showAdNativeIndex] = nativeAd;
        this.showAdNativeIndex++;
        this.showAdNativeIndex = this.showAdNativeIndex%oppoNativeId.length;
        nativeAd.load();
        nativeAd.onLoad((res) =>{
            if(res && res.adList && res.adList.length > 0){
                
            }else{
                lieyou_showLog('oppolog------ show native fail ' + '   ' + JSON.stringify(res))
                self.showAdNativeContinueFailNum++;
                if(self.showAdNativeContinueFailNum < oppoNativeId.length){
                    self.showNativeBanner(true,self._NativeBannerIsEnd);
                }else{
                    if(!self._NativeBannerIsEnd){
                        self.showSpot(false,true);
                    }else{
                        self.installShortcut({shoaDialog:true});
                    }
                }
                return;
            }
            self.showAdNativeContinueFailNum = 0;
            try {
                var numL = parseInt(Math.random()*res.adList.length);
                var id = res.adList[numL].adId;
                var title = res.adList[numL].title;//广告标题
                var desc = res.adList[numL].desc;//广告描述
                var clickBtnTxt = res.adList[numL].clickBtnTxt;//点击按钮文本描述
                var iconUrlList = res.adList[numL].iconUrlList;//广告图icon
                var imgUrlList = res.adList[numL].imgUrlList;//广告图
                var logoUrl = res.adList[numL].logoUrl;//广告标签图
                nativeAd.reportAdShow({
                    adId: id
                });
                lieyou_showLog('oppolog------ show native success ');
                // cc.loader.loadRes('SDK/module/qGameNativeAd/nativeAd',function(err,res){
                    try {
                        self.showSpotSuccess();
                        
                        var fNode = cc.director.getRunningScene();
                        var node = lieyou_nativeSpot();//cc.instantiate(res); 
                        node.scale = 0;
                        node.active = false;
                        setTimeout(() => {
                            node.scale = 1;
                            node.active = true;
                        }, this.nativeDelayShowTime*1000);
                        fNode.addChild(node,999);  
                        cc.game.addPersistRootNode(node);
                        node.x = cc.winSize.width/2;
                        node.y = cc.winSize.height/2;
                        var showB = self._canShowBanner;
                        if(self._spot_banner_only){
                            self.hideBanner();
                        }
                        node.getComponent('lieyou_oppoNativeAdSdk').setData({
                            touchCallBack:function(){
                                nativeAd.reportAdClick({
                                    adId: id
                                });
                                setTimeout(() => {
                                    node.destroy();
                                }, this.nativeDelayDestroyTime*1000);
                                // node.runAction(cc.sequence(cc.delayTime(this.nativeDelayDestroyTime),cc.removeSelf()));
                            }.bind(this),
                            closeCallBack:function(){
                                if(showB){
                                    lieyou_showLog('oppolog-- close native spot showBanner');
                                    self.showBanner();
                                }
                            }.bind(this),
                            title:title,
                            desc:desc,
                            clickBtnTxt:clickBtnTxt,
                            iconUrlList:iconUrlList,
                            imgUrlList:imgUrlList,
                            logoUrl:logoUrl,
                            closeAlpha:self.spot_close_but_alpha,
                            closeSize:self.spot_close_but_size, 
                            closeRange:self.spot_close_but_range, 
                            closeShow:self.spot_click_close 
                        });
                    } catch (error) {
                        lieyou_showLog('oppolog showNativeSporFail   ' + error);
                    }
                // }.bind(this));
            } catch (error) {
                lieyou_showLog('oppolog showNativeSporFail   ' + error);
            }
            
        })
        nativeAd.onError((err) =>{
            lieyou_showLog('oppolog------ show native fail ' + '   ' + JSON.stringify(err))
            self.showAdNativeContinueFailNum++;
            if(self.showAdNativeContinueFailNum < oppoNativeId.length){
                self.showNativeBanner(true,self._NativeBannerIsEnd);
            }else{
                if(!self._NativeBannerIsEnd){
                    self.showSpot(false,true);
                }else{
                    self.installShortcut({shoaDialog:true});
                }
            }
            
        })
    },
    hideNativeBanner(){

    },

    hideBanner(){
        lieyou_showLog('oppolog------------ close banner');
        this._canShowBanner = false;
        this._haveBannerAd = false;
        clearInterval(this.bannerTimeOut);
        for(var i = 0;i < this._bannerAd.length;i++){
            if(this._bannerAd[i]){
                this._bannerAd[i].destroy();
                this._bannerAd[i] = null;
            }
        }
        if(this._BannerNativeADNode && this._BannerNativeADNode.isValid){
            this._BannerNativeADNode.destroy();
            this._BannerNativeADNode = null;
        }
    },
    showBanner(obj,flag = false){
        
        this._clearInterval = false;
        if(this._canShowBanner){
            return;
        }
        if(this._BannerNativeADNode && this._BannerNativeADNode.isValid){
            if(this._bannerAdStyle&&this._bannerAdStyle.y!=undefined){
                this._BannerNativeADNode.y = cc.winSize.height-this._bannerAdStyle.y-this.banner_show_height*lieyou_SdkManager._SceneScale;
            }
        }
        for(var i = 0;i < this._bannerAd.length;i++){
            if(this._bannerAd[i]){
                this._bannerAd[i].destroy();
                this._bannerAd[i] = null;
            }
        }
        if(this.moreGameBanner && this.moreGameBanner.isValid){
            this.moreGameBanner.destroy();
            this.moreGameBanner = null;
        }
        if(this._closeBannerNum >= 5){
            lieyou_showLog('oppolog-- closeBannerNum == 5');
            return;
        }
        this._haveBannerAd = false;
        this._canShowBanner = true;
        clearInterval(this.bannerTimeOut);
        var refreshTime = this.refreshBannerTime;
        
        if(this.banner_first_ad == "native"){
            this.showBannerNativeAD();
            this.bannerTimeOut = setInterval(this.showBannerNativeAD.bind(this),1000 * refreshTime);//刷新广告
        }else{
            this.showBanner2();
            this.bannerTimeOut = setInterval(this.showBanner2.bind(this),1000 * refreshTime);//刷新广告
        }
    },
    showBannerNativeAD(obj = {}){
        let nowTime = parseInt(lieyou_getTime()/1000);
        if(nowTime - this._beginGameTime < this._showBannerStartTime){
            lieyou_showLog("显示banner广告时间未到"+this._showBannerStartTime);
            return;
        }
        if(this._clearInterval){
            return;
        }
        var self = this;
        // self.showBanner2({isEnd:true});
        // return;
        if(this.moreGameBanner && this.moreGameBanner.isValid){
            return;
        }
        self._bannerNativeAdObj = obj;
        lieyou_showLog('oppolog1------ showBannerNativeAD ' + this.showAdNativeBannerIndex + '   ' + oppoNativeBannerId[this.showAdNativeBannerIndex]);
        if(this._haveBannerAd){
            return;
        }
        if(!this.canShowNativeBanner){
            if(!self._bannerNativeAdObj.isEnd){
                self.showBanner2({isEnd:true});
            }
            return;
        }
        
        if(!self._bannerNativeAdObj.flag){
            self.showAdNativeBannerContinueFailNum = 0;
        }
        if(oppoNativeBannerId.length <= 0) {
            if(!self._bannerNativeAdObj.isEnd){
                self.showBanner2({isEnd:true});
            }
            return;
        }
        if(this._nativeBannerAd[this.showAdNativeBannerIndex]){
            this._nativeBannerAd[this.showAdNativeBannerIndex].load();

            this.showAdNativeBannerIndex++;
            this.showAdNativeBannerIndex = this.showAdNativeBannerIndex%oppoNativeBannerId.length;
            return;
        }
        lieyou_showLog('oppolog2------ showBannerNativeAD ' + this.showAdNativeBannerIndex);
        var id = oppoNativeBannerId[this.showAdNativeBannerIndex];
        var nativeAd = qg.createNativeAd({ 
            posId: id
        })
        this._nativeBannerAd[this.showAdNativeBannerIndex] = nativeAd;
        this.showAdNativeBannerIndex++;
        this.showAdNativeBannerIndex = this.showAdNativeBannerIndex%oppoNativeBannerId.length;
        nativeAd.load();
        nativeAd.onLoad((res) =>{
            if(res && res.adList && res.adList.length > 0){
                
            }else{
                lieyou_showLog('oppolog------ show native banner fail '+'  ' + JSON.stringify(err))
                self.showAdNativeBannerContinueFailNum++;
                if(self.showAdNativeBannerContinueFailNum < oppoNativeBannerId.length){
                    self.showBannerNativeAD({flag:true,isEnd:self._bannerNativeAdObj.isEnd});
                }else{
                    if(!self._bannerNativeAdObj.isEnd){
                        self.showBanner2({isEnd:true});
                    }
                }
                return;
            }
            try {
                self.showAdNativeBannerContinueFailNum = 0;
                var numL = parseInt(Math.random()*res.adList.length);
                var id = res.adList[numL].adId;
                var title = res.adList[numL].title;//广告标题
                var desc = res.adList[numL].desc;//广告描述
                var clickBtnTxt = res.adList[numL].clickBtnTxt;//点击按钮文本描述
                var iconUrlList = res.adList[numL].iconUrlList;//广告图icon
                var imgUrlList = res.adList[numL].imgUrlList;//广告图
                imgUrlList = [];//不显示大图
                var logoUrl = res.adList[numL].logoUrl;//广告标签图
                nativeAd.reportAdShow({
                    adId: id
                });
                lieyou_showLog('oppolog------ show native banner success');
                // cc.loader.loadRes('SDK/module/qGameNativeAd/bannerNativeAd',function(err,res){
                    if(!self._canShowBanner){
                        return;
                    }
                    try {
                        if(this._haveBannerAd){
                            return;
                        }
                        for(var i = 0;i < this._bannerAd.length;i++){
                            if(this._bannerAd[i]){
                                this._bannerAd[i].destroy();
                                this._bannerAd[i] = null;
                            }
                        }
                        if(self._BannerNativeADNode && self._BannerNativeADNode.isValid){
                            self._BannerNativeADNode.destroy();
                            self._BannerNativeADNode = null;
                        }
                        // self.hideBanner();
                        
                        var fNode = cc.director.getRunningScene();
                        var node = lieyou_nativeBanner();//cc.instantiate(res); 
                        
                        self._BannerNativeADNode = node;
                        // node.y = -640/fNode.scale;
                        node.x = cc.winSize.width/2;
                        if(self._bannerAdStyle&&self._bannerAdStyle.y!=undefined){
                            node.y = cc.winSize.height-self._bannerAdStyle.y-self.banner_show_height*lieyou_SdkManager._SceneScale;
                        }
                        fNode.addChild(node,999);  
                        cc.game.addPersistRootNode(node);
                        node.getComponent('lieyou_oppoNativeAdSdk').setData({
                            touchCallBack:function(){
                                nativeAd.reportAdClick({
                                    adId: id
                                });
                            }.bind(this),
                            closeCallBack:function(){
                                self._closeBannerNum++;
                                lieyou_showLog('oppolog------- close native Banner');
                                if(!self._banner_close_autoshow){
                                    // clearInterval(self.bannerTimeOut);
                                    self._BannerNativeADNode = null;
                                    self._clearInterval = true;
                                }
                                // nativeAd.destroy();
                            }.bind(this),
                            title:title,
                            desc:desc,
                            clickBtnTxt:clickBtnTxt,
                            iconUrlList:iconUrlList,
                            imgUrlList:imgUrlList,
                            logoUrl:logoUrl,
                            closeAlpha:self.banner_close_but_alpha,
                            closeSize:self.banner_close_but_size, 
                            closeRange:self.banner_close_but_range, 
                            closeShow:self.banner_close_but_show,
                            bannerHeight:self.banner_show_height
                        });
                    } catch (error) {
                        lieyou_showLog('oppolog showNativeBannerFail   ' + error);
                    }
                    
                // }.bind(this));
            } catch (error) {
                lieyou_showLog('oppolog showNativeBannerFail   ' + error);
            }
            
        })
        nativeAd.onError((err) =>{
            lieyou_showLog('oppolog------ show native banner fail '+'  ' + JSON.stringify(err))
            self.showAdNativeBannerContinueFailNum++;
            if(self.showAdNativeBannerContinueFailNum < oppoNativeBannerId.length){
                self.showBannerNativeAD({flag:true,isEnd:self._bannerNativeAdObj.isEnd});
            }else{
                if(!self._bannerNativeAdObj.isEnd){
                    self.showBanner2({isEnd:true});
                }
            }
        })
    },
    showBanner2(obj = {}){
        let nowTime = parseInt(lieyou_getTime()/1000);
        if(nowTime - this._beginGameTime < this._showBannerStartTime){
            lieyou_showLog("显示banner广告时间未到"+this._showBannerStartTime);
            return;
        }
        if(this._clearInterval){
            return;
        }
        if(this.moreGameBanner && this.moreGameBanner.isValid){
            return;
        }
        var self = this;
        if(!self._canShowBanner){
            return;
        }
        lieyou_showLog('oppolog1------ showBanner2 '+this.showAdBannerIndex);
        if(this._haveBannerAd){
            return;
        }
        self._showBannerObj = obj;
        if(!self._showBannerObj.flag){
            self.showAdBannerContinueFailNum = 0;
        }
        if(oppoBannerId.length <= 0) {
            if(!self._showBannerObj.isEnd){
                self.showBannerNativeAD({isEnd:true});
            }
            return;
        };
        if(this._bannerAd[this.showAdBannerIndex]){
            this._bannerAd[this.showAdBannerIndex].show();

            this.showAdBannerIndex++;
            this.showAdBannerIndex = this.showAdBannerIndex%oppoBannerId.length;
            return;
        }
        lieyou_showLog('oppolog2------ showBanner2 '+this.showAdBannerIndex);
        var id = oppoBannerId[this.showAdBannerIndex];
        var bannerAd = qg.createBannerAd({
            posId: id
        });
        this._bannerAd[this.showAdBannerIndex] = bannerAd;
        bannerAd.show();
        bannerAd.onShow(function(){
            self._haveBannerAd = true;
            if(self._BannerNativeADNode && self._BannerNativeADNode.isValid){
                self._BannerNativeADNode.destroy();
                self._BannerNativeADNode = null;
            }
            lieyou_showLog("oppolog------show banner -----  "  );
        });
        bannerAd.onError(function(res){
            self._haveBannerAd = false;
            if(!self._canShowBanner){
                return;
            }
            self.showAdBannerContinueFailNum++;
            if(self.showAdBannerContinueFailNum < oppoBannerId.length){
                self.showBanner2({flag:true,isEnd:self._showBannerObj.isEnd});
            }else{
                if(!self._showBannerObj.isEnd){
                    self.showBannerNativeAD({isEnd:true});
                }
            }
            lieyou_showLog("oppolog------show banner fail-----  "  + '   ' + JSON.stringify(res));
        });
        bannerAd.onHide(function() {
            lieyou_showLog("oppolog------ banner onHide-----  ");
            self._closeBannerNum++;
            if(!self._banner_close_autoshow){
                // clearInterval(self.bannerTimeOut);
                self._haveBannerAd = false;
                self._clearInterval = true;
            }else{
                self._haveBannerAd = false;
            }
        })
        bannerAd.onResize((res)=>{
            if(self._bannerAdStyle&&self._bannerAdStyle.y!=undefined){
                bannerAd.style.top = self._bannerAdStyle.y;
            }
        });
        this.showAdBannerIndex++;
        this.showAdBannerIndex = this.showAdBannerIndex%oppoBannerId.length;
        
        
    },
    showBannerCustom(obj){
        this.showBanner(obj);
    },
    showBannerByTop(id){
        if(this.platformVersionCode < 1051){
            this.hideBanner();
            return;
        }
        this.showBanner({});
    },
    showBannerByBottom(id){
        this.showBanner({});
    },
    showRewardedVideoAd(id2,closeCallBack,flag = false){
        lieyou_showLog('oppolog1------ showRewardedVideoAd '+this.showAdAwardIndex);
        this.playVdCallBack = closeCallBack;
        this.playVdFlag = flag;

        if(oppoVideoId.length <= 0) {
            this.playVdCallBack(false);
            return;
        }
        var self = this;
        if(!self.playVdFlag){
            self.showAdAwardContinueFailNum = 0;
        }
        if(this._videoAd[this.showAdAwardIndex]){
            this._videoAd[this.showAdAwardIndex].load();

            this.showAdAwardIndex++;
            this.showAdAwardIndex = this.showAdAwardIndex%oppoVideoId.length;
            return;
        }
        lieyou_showLog('oppolog2------ showRewardedVideoAd '+this.showAdAwardIndex);
        var id = oppoVideoId[this.showAdAwardIndex];
        var videoAd = qg.createRewardedVideoAd({ 
            posId: id
        });
        this._videoAd[this.showAdAwardIndex] = videoAd;
        this.showAdAwardIndex++;
        this.showAdAwardIndex = this.showAdAwardIndex%oppoVideoId.length;
        videoAd.load();
        videoAd.onLoad(() =>{
            self.showAdAwardContinueFailNum = 0;
            lieyou_showLog('oppolog------  vd success ');
            videoAd.show();
        });

        videoAd.onError((res) =>{
            lieyou_showLog('oppolog------ vd fail '+'   ' + JSON.stringify(res));
            self.showAdAwardContinueFailNum++;
            if(self.showAdAwardContinueFailNum < oppoVideoId.length){
                self.showRewardedVideoAd('',self.playVdCallBack,true);
            }else{
                self.playVdCallBack(false);
            }
        });
        videoAd.onClose((res) =>{
            if(res.isEnded){
                self.playVdCallBack(true);
            }else{
                self.playVdCallBack(false);
            }
        })
        
    },
    showSpot(flag,isEnd){
        var self = this;
        
        lieyou_showLog('oppolog1------ showSpot '+this.showAdSpotIndex);
       
        self._showSpotFlag = flag;
        self._showSpotIsEnd = isEnd;
        if(!self._showSpotFlag){
            self.showAdSpotContinueFailNum = 0;
        }
        if(oppoSpotADId.length <= 0) {
            self.installShortcut({shoaDialog:true});
            if(!self._showSpotIsEnd){
                // self.showNativeBanner(false,true);
            }
            return;
        }

        if(this._insertAd[this.showAdSpotIndex]){
            this._insertAd[this.showAdSpotIndex].load();

            this.showAdSpotIndex++;
            this.showAdSpotIndex = this.showAdSpotIndex%oppoSpotADId.length;
            return;
        }
        lieyou_showLog('oppolog2------ showSpot '+this.showAdSpotIndex);
        var id = oppoSpotADId[this.showAdSpotIndex];
        var insertAd = qg.createInsertAd({ 
            posId: id
        });
        this._insertAd[this.showAdSpotIndex] = insertAd;
        this.showAdSpotIndex++;
        this.showAdSpotIndex = this.showAdSpotIndex%oppoSpotADId.length;
        // insertAd.load();
        insertAd.onLoad(function(){
            self.showAdSpotContinueFailNum = 0;
            lieyou_showLog('oppolog------ spot load success ');
            
            setTimeout(() => {
                self.showSpotSuccess();
                insertAd.show()
                if(self._spot_banner_only && self.platformVersionCode>=1044){
                    var showB = self._canShowBanner;
                    self.hideBanner();
                    insertAd.onClose(()=>{
                        insertAd.offClose();
                        lieyou_showLog('oppolog-- close sys spot showBanner');
                        if(showB){
                            self.showBanner();
                        }
                    });
                }
            }, self.nativeDelayShowTime*1000);
        })
        
        insertAd.onError(function(res){
            lieyou_showLog('oppolog------ spot load fail ' +'  ' + JSON.stringify(res))
            self.showAdSpotContinueFailNum++;
            if(self.showAdSpotContinueFailNum < oppoSpotADId.length){
                self.showSpot(true,self._showSpotIsEnd);
            }else{
                self.installShortcut({shoaDialog:true});
                if(!self._showSpotIsEnd){
                    // self.showNativeBanner(false,true);
                }
            }
            
        })
    },
    showSpotSuccess(){
        this._showSpotCount++;
        Userdefault.setDataForKey('lieyou_showSpotCount',this._showSpotCount);
        if(this._showSpotTime == 0){
            var time = parseInt(getTime()/1000);
            this._showSpotTime = time;
            Userdefault.setDataForKey('lieyou_showSpotTime',time);
        }
    },
    addShowSpotNum(){
        var time = parseInt(getTime()/1000);
        if(time-this._showSpotTime > this._showSpotMaxCountRefreshTime*60*60){
            lieyou_showLog('oppolog----------- spot 重置插屏显示数量');
            this._showSpotCount = 0;
            this._showSpotTime = 0;
            Userdefault.setDataForKey('lieyou_showSpotCount',0);
            Userdefault.setDataForKey('lieyou_showSpotTime',0);
        }
        lieyou_showLog('oppolog----------- spot '+this._showSpotCount+' '+this._showSpotMaxCount + ' '+this._showSpotMaxCountRefreshTime);
        if(this._showSpotCount>=this._showSpotMaxCount){
            this.installShortcut({shoaDialog:true});
            lieyou_showLog('oppolog----------- spot 显示次数太多 ');
            return;
        }
        
        if(time - this._beginGameTime < this._showSpotStartTime){
            lieyou_showLog('oppolog----------- load spot 启动游戏一定时间内不显示插屏');
            return;
        }
        var self = this;
        if(!this._canShowSysSpot){
            lieyou_showLog('oppolog----------- load spot or Naitve fail 间隔未到'+self._showSysSpotTime+'s钟');
            this.installShortcut({shoaDialog:true});
            return;
        }
        setTimeout(() => {
            self._canShowSysSpot = true;
        }, 1000*self._showSysSpotTime);
        self._canShowSysSpot = false;
        var num = Userdefault.getIntForKey('oppo_showNativeNum',0);
        Userdefault.setDataForKey('oppo_showNativeNum',num+1);
        if(this.spot_first_ad == "native"){
            this.showNativeBanner(false,false);
        }else{
            this.showSpot(false,false);
        }
    },
    showSpotByPause(){
        this.addShowSpotNum();
    },
    showSpotByBegin(){},
    showSpotByFinish(){
        this.addShowSpotNum();
    },


    //new 
	newJumpApp(obj){
        var self = this;
        lieyou_showLog('oppolog------ jump apk = ' + obj.data.appId)
		if(this.platformVersionCode>=1044){
            qg.navigateToMiniGame({
                pkgName: obj.data.appId,
                success: function(){
                    if(obj.success){
                        obj.success();
                    }
                }.bind(this),
                fail: function(res){
                }
            });
		}else{
		}
    },
    installShortcut(obj={}){
        lieyou_showLog('oppolog installShortcut canShowShortcut ');
        var time = parseInt(getTime()/1000);
        if(time - this._beginGameTime < this._installShortcutStartTime && !obj.canShow){
            lieyou_showLog('oppolog installShortcut canShowShortcut 开始时间未到 '+this._installShortcutStartTime);
            return;
        }
        if(time - this._upInstallShortcutTime < this._installShortcutTime && !obj.canShow){
            lieyou_showLog('oppolog installShortcut canShowShortcut 间隔时间未到 '+this._installShortcutTime);
            return;
        }
        
        if(!this.canShowShortcut && !obj.canShow){
            lieyou_showLog('oppolog installShortcut canShowShortcut false');
            return;
        }
        if(this.base_IsShenHe && !obj.canShow){
            lieyou_showLog('oppolog installShortcut shenhe true');
            return;
        }
        if(this.platformVersionCode < 1040){
            lieyou_showLog('oppolog installShortcut version low');
            return;
        }
        var self = this;
        qg.hasShortcutInstalled({
            success: function(res) {
                if(res == false){
                    if(obj.callBack_addNode){
                        obj.callBack_addNode();
                        return;
                    }
                    self._upInstallShortcutTime = time;
                    if(obj.shoaDialog && Math.round(self.androidVersion.split(" ")[1].split(".")[0]) >= 8 && !self.isSysInstallShortCut){
                        lieyou_SdkManager.showInstallShortcutDialog();
                        return;
                    }
                    // self.setOperTrack({type:1,state:0});
                    qg.installShortcut({
                        success: function() {
                            if(obj.success){
                                obj.success();
                            }
                            // self.setOperTrack({type:1,state:1});
                        }
                    })
                }else{
                    if(!Userdefault.getBoolForKey('lieyou_isHaveShortcut',false)){
                        Userdefault.setBoolForKey('lieyou_isHaveShortcut',true);
                        self.setOperTrack({type:1,state:1});
                    }
                }
            }
        })
    },
    showModal(obj){
        qg.showModal({title:obj.title?obj.title:'',content:obj.content?obj.content:'',success:(res)=>{
            if (res.confirm) {
                obj.success && obj.success();
            } else if (res.cancel) {
                obj.fail && obj.fail();
            }
        }});
    },
	showToast(title){
        qg.showToast({title:title});
    },
	hideToast(){
        qg.hideToast({});
    },
	showLoading(title){
        qg.showLoading({title:title});
    },
	hideLoading(){
        qg.hideLoading({});
    },
    loadNativeAd(){
        var self = this;
        if(oppoNativeId.length <= 0) {
            return;
        }
        if(this._nativeEmbedAd[this.showNativeEmbedIndex]){
            this._nativeEmbedAd[this.showNativeEmbedIndex].load();
            this.showNativeEmbedIndex++;
            this.showNativeEmbedIndex = this.showNativeEmbedIndex%oppoNativeId.length;
            return;
        }
        var id = oppoNativeId[this.showNativeEmbedIndex];
        var nativeAd = qg.createNativeAd({ 
            posId: id
        })
        this._nativeEmbedAd[this.showNativeEmbedIndex] = nativeAd;
        this.showNativeEmbedIndex++;
        this.showNativeEmbedIndex = this.showNativeEmbedIndex%oppoNativeId.length;
        nativeAd.load();
        nativeAd.onLoad((res) =>{
            if(res && res.adList && res.adList.length > 0){
                lieyou_showLog("oppolog-----native adlist null");
            }else{
                self.showNativeEmbedFailNum++;
                if(self.showNativeEmbedFailNum < oppoNativeId.length){
                    self.loadNativeAd();
                }else{
                }
                return;
            }
            self.showNativeEmbedFailNum = 0;

            var numL = parseInt(Math.random()*res.adList.length);
            var id = res.adList[numL].adId;
            var title = res.adList[numL].title;//广告标题
            var desc = res.adList[numL].desc;//广告描述
            // var clickBtnTxt = res.adList[numL].clickBtnTxt;//点击按钮文本描述
            var iconUrlList = res.adList[numL].iconUrlList;//广告图icon
            var imgUrlList = res.adList[numL].imgUrlList;//广告图
            // var logoUrl = res.adList[numL].logoUrl;//广告标签图
            self.nativeAdEmbedData = {
                closeSize:this.spot_close_but_size,
                closeRange:this.spot_close_but_range,
                closeAlpha:this.spot_close_but_alpha,
                title:title,
                desc:desc,
                iconUrlList:iconUrlList,
                imgUrlList:imgUrlList,
                reportAdShowCallBack:()=>{
                    nativeAd.reportAdShow({
                        adId: id
                    });
                },
                reportAdClickCallBack:()=>{
                    nativeAd.reportAdClick({
                        adId: id
                    });
                },
            };

            
        })
        nativeAd.onError((err) =>{
            lieyou_showLog("oppolog-----native error:"+JSON.stringify(err));
            self.showNativeEmbedFailNum++;
            if(self.showNativeEmbedFailNum < oppoNativeId.length){
                self.loadNativeAd();
            }else{
            }
        })
    },
    showNativeAd_small(obj){
        let nowTime = parseInt(lieyou_getTime()/1000);
        if(nowTime - this._beginGameTime < this._showNativeStartTime){
            lieyou_showLog("显示native广告时间未到"+this._showNativeStartTime);
            return false;
        }
        if(nowTime - this._preShowNativeTime < this._showNativeIntervalTime){
            lieyou_showLog("显示native广告间隔时间未到"+this._showNativeIntervalTime);
            return false;
        }
        this.loadNativeAd();
        if(this.nativeAdEmbedData && obj.node && obj.node.isValid && this.canShowNativeAd){
            if(cc.find('showNativeAd_small',obj.node)){
                return true;
            }
            this._preShowNativeTime = nowTime;
            this.nativeAdEmbedData.insetTop = obj.insetTop?obj.insetTop:0;
            this.nativeAdEmbedData.insetBottom = obj.insetBottom?obj.insetBottom:0;
            this.nativeAdEmbedData.insetLeft = obj.insetLeft?obj.insetLeft:0;
            this.nativeAdEmbedData.insetRight = obj.insetRight?obj.insetRight:0;
            this.nativeAdEmbedData.bgPath = obj.bgPath;
            this.nativeAdEmbedData.texture = obj.texture;
            this.nativeAdEmbedData.adPath = "q_ad/nativeEmbedAdBottom.png";
            this.nativeAdEmbedData.bgOpacity = 255;
            this.nativeAdEmbedData.bgColor = cc.color(255,255,255);
            this.nativeAdEmbedData.titleLabelColor = obj.titleColor?obj.titleColor:cc.color(46,46,46);
            this.nativeAdEmbedData.descLabelColor = obj.descColor?obj.descColor:cc.color(46,46,46);
            this.nativeAdEmbedData.scale = obj.scale;
            var node = getNativeAd_small(this.nativeAdEmbedData);
            node.name = "showNativeAd_small";
            this.showNativeHideBanner(node);
            obj.node.addChild(node);
            return true;
        }
        return false;
    },
    showNativeAd_big(obj){
        let nowTime = parseInt(lieyou_getTime()/1000);
        if(nowTime - this._beginGameTime < this._showNativeStartTime){
            lieyou_showLog("显示native广告时间未到"+this._showNativeStartTime);
            return false;
        }
        if(nowTime - this._preShowNativeTime < this._showNativeIntervalTime){
            lieyou_showLog("显示native广告间隔时间未到"+this._showNativeIntervalTime);
            return false;
        }
        this.loadNativeAd();
        if(this.nativeAdEmbedData && obj.node && obj.node.isValid && this.canShowNativeAd){
            if(cc.find('showNativeAd_big',obj.node)){
                return true;
            }
            this._preShowNativeTime = nowTime;
            this.nativeAdEmbedData.insetTop = obj.insetTop?obj.insetTop:0;
            this.nativeAdEmbedData.insetBottom = obj.insetBottom?obj.insetBottom:0;
            this.nativeAdEmbedData.insetLeft = obj.insetLeft?obj.insetLeft:0;
            this.nativeAdEmbedData.insetRight = obj.insetRight?obj.insetRight:0;
            this.nativeAdEmbedData.bgPath = obj.bgPath;
            this.nativeAdEmbedData.adPath = "q_ad/nativeEmbedAdBottom.png";
            this.nativeAdEmbedData.bgOpacity = 255;
            this.nativeAdEmbedData.texture = obj.texture;//******** */
            this.nativeAdEmbedData.bgColor = cc.color(255,255,255);
            this.nativeAdEmbedData.titleLabelColor = obj.titleColor?obj.titleColor:cc.color(46,46,46);
            this.nativeAdEmbedData.descLabelColor = obj.descColor?obj.descColor:cc.color(46,46,46);
            this.nativeAdEmbedData.scale = obj.scale;
            var node = getNativeAd_big(this.nativeAdEmbedData);
            node.name = "showNativeAd_big";
            this.showNativeHideBanner(node);
            obj.node.addChild(node);
            return true;
        }
        return false;
    },
    showNativeAd_load(obj){
        if(obj.callBack){
            obj.callBack();
        }
        return;
        this.loadNativeAd();
        if(this.nativeAdEmbedData){
            if(obj.theme == "black"){
                this.nativeAdEmbedData.bgOpacity = 150;
                this.nativeAdEmbedData.bgColor = cc.color(0,0,0);
                this.nativeAdEmbedData.labelColor = cc.color(255,255,255);
                this.nativeAdEmbedData.loadBgColor = cc.color(255,255,255);
                this.nativeAdEmbedData.loadWordColor = cc.color(0,0,0);
                this.nativeAdEmbedData.scale = 720/600;
            }else{// white
                this.nativeAdEmbedData.bgOpacity = 255;
                this.nativeAdEmbedData.bgColor = cc.color(255,255,255);
                this.nativeAdEmbedData.labelColor = cc.color(46,46,46);
                this.nativeAdEmbedData.loadBgColor = cc.color(0,0,0);
                this.nativeAdEmbedData.loadWordColor = cc.color(255,255,255);
                this.nativeAdEmbedData.scale = 720/600;
            }
            this.nativeAdEmbedData.loadTime = this._nativeLoadDialogTime;
            this.nativeAdEmbedData.callBack = obj.callBack;
            var node = getNativeAd_load(this.nativeAdEmbedData);
            cc.director.getScene().addChild(node);
            node.x = cc.winSize.width/2;
            node.y = cc.winSize.height/2;

            this.showNativeHideBanner(node);
        }else{
            if(obj.callBack){
                obj.callBack();
            }
        }
    },
    showNativeHideBanner(node){
        var showM = false;
        if(this.moreGameBanner && this.moreGameBanner.isValid){
            showM = true;
        }
        var showB = this._canShowBanner;
        
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
module.exports = OppoManager;




