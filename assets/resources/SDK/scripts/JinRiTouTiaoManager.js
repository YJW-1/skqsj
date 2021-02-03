
const BaseManager = require('BaseManager');
let JinRiTouTiaoManager = cc.Class({
	extends: require('BaseManager'),
	properties:{
    },
    getHaveVideo(){
        if(jinRiTouTiao_VideoId != ''){
            return true;
        }
        return false;
    },
    getSysPlatform_string(){
		return 'tt';
    },
    getSysPlatform(){
		return 8;
	},
    getVersion(){
        return lieyou_ttGameVersion;
    },
    vibrateShort(){
        tt.vibrateShort();
    },
    vibrateLong(){
        tt.vibrateLong();
    },
    antidirt(){
        var self = this;
        this.setDataForHttp(serverUrl+'token?ai='+jinRiTouTiao_AppId+'&sct='+jinRiTouTiao_AppKey+'&gt=client_credential',function(response){
            var data = JSON.parse(response);
            lieyou_showLog('------  jinritoutiao  ------ access_token = '+data);
            self.setDataForHttp(serverUrl+'antidirt?at='+data.access_token);
        });
    },
    
    setOnlineData(data){
        if(data.tt){
            if(data.tt.sysShowPlayVdDialog!=undefined){
                this.sysShowPlayVdDialog = data.tt.sysShowPlayVdDialog;
            }
            if(data.tt.installShortcutIntervalTime!=undefined){
                this._installShortcutTime = Number(data.tt.installShortcutIntervalTime);
            }
            if(data.tt.serverVersion != undefined){
                var serverVersoin = Number(data.tt.serverVersion);
                if(serverVersoin >= lieyou_ttGameVersion) {
                    this.base_IsShenHe = false;
                }else{
                    this.base_IsShenHe = true;
                }
            }
            if(data.tt.shareVideoTopics){
                this.shareVideoTopics = data.tt.shareVideoTopics;
            }
            if(!data.tt.closeShortcut){
                this.canShowShortcut = true;
            }
            var adData = {};
            if(data.tt.theme){
                adData.theme = data.tt.theme;
            }
            if(data.tt.crossSwitch){
                adData.crossSwitch = data.tt.crossSwitch;
            }
            if(data.tt.bizData){
                adData.bizData = data.tt.bizData;
            }
            if(data.tt.ad_datas){
                adData.ad_datas = data.tt.ad_datas;
            }
            if(data.tt.switch){
                adData.switch = data.tt.switch;
            }
            if(data.tt.shareVideoIntervalTime){
                this._shareVideoIntervalTime = Number(data.tt.shareVideoIntervalTime);
            }
            if(data.tt.templateId){
                this._shareVideoTemplateId = data.tt.templateId;
            }
            
            if(this.getSDKVersionCanUse('1.33.0') && this.platformSys != 'ios'){
                this.setAdData(adData);
            }
            this.setSwitchData(data.tt);
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
                lieyou_showLog('------error  initOnlineData + ' + error);
            }
		});
    },
    getSystemInfo(){
        var info = tt.getSystemInfoSync();
        this.platformVersionCode = info.SDKVersion;
        this.platformSys = info.platform;
        this.androidVersion = info.system;
        this.model = info.model;
        // openid = res.data.uid;
        tt.getNetworkType({
            success:(res)=>{
                this.networkType = res.networkType;
            }
        });
    },
    getLaunchOptionsSync(){
        let data = tt.getLaunchOptionsSync();
        if(data.query){
            console.log("lieyou----------res:"+JSON.stringify(data.query));
            if(data.query.shareId){
                console.log("lieyou----------id:"+data.query.shareId);
                // lieyou_SdkManager.showToast(data.query.shareId);
                // lieyou_SdkManager.setadtrack(data.query.shareId,-100);
                lieyou_SdkManager.setOperTrack({type:2,state:1,shareId:data.query.shareId});
            }
        }
    },
    init: function(obj){
        this.getLaunchOptionsSync();
        this.shareVideoTopics = [];
        this.getSystemInfo();
        this.stopCanShare = true;
        // this._super(obj);
        BaseManager.prototype.init.call(this,obj);
        var self = this;
        this.openShare();
        this.setShareData();
        // tt.getGameRecorderManager()
        this._shareVideoTemplateId = [];
        this._preShareVideoTime = 0;
        this._shareVideoIntervalTime = 30;
        this.sysShowPlayVdDialog = true;
        setTimeout(() => {
            this.initOnlineData();    
        }, 1000);
        this.loadRewardedViedoAd();
    },
    setShareData: function() {
		//获取分享数据
		this.setDataForHttp(wxData.shareUrl,function(response){
            wxData.shareData = JSON.parse(response);
		});
	},
    login(){
        tt.login({
            success (res) {
                lieyou_showLog("------  jinritoutiao  ------ login success");
                // res.code
                self.setDataForHttp(serverUrl+'login?ai='+jinRiTouTiao_AppId+'&sct='+jinRiTouTiao_AppKey+'&code='+res.code);
            },
            fail (res) {
                lieyou_showLog("------  jinritoutiao  ------ login fail " + res);
            }
        });
        this.antidirt();
    },
    openShare(){
        tt.onShareAppMessage(function (res){
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
                query: "shareId="+adid,
                title: _title,
                imageUrl: _url
            }
        });
    },
    share(obj){
        let id = null;
        if(this._shareVideoTemplateId.length > 0){
            id = this._shareVideoTemplateId[Math.floor(Math.random()*this._shareVideoTemplateId.length)]
        }
        tt.shareAppMessage({
            templateId:id,
        });
    },
    hideBanner(){
        if(this.bannerAd){
            this.bannerAd.hide();
            // this.bannerAd = null;
        }
    },
    showBanner(obj){
        if(this.moreGameBanner && this.moreGameBanner.isValid){
            this.moreGameBanner.destroy();
            this.moreGameBanner = null;
        }
        if(jinRiTouTiao_BannerId == '') {
            return;
        }
        var self = this;
        if(this.bannerAd){
            this.bannerAd.show();
            return;
        }
        try {
            const { windowWidth, windowHeight } = tt.getSystemInfoSync();
            var targetBannerAdWidth = 200;
            if(obj && obj.scale){
                targetBannerAdWidth = targetBannerAdWidth*obj.scale;
            }
            this.bannerAd = tt.createBannerAd({
                adIntervals:30,
                adUnitId: jinRiTouTiao_BannerId,
                style: {
                    width: targetBannerAdWidth,
                },
            });
            this.bannerAd.show(); 
            this.bannerAd.onError((res) =>{
                lieyou_showLog('------  jinritoutiao  ------ banner load error' + JSON.stringify(res));
            })
            this.bannerAd.onResize(size => {
                console.log('onsize ' + size.height + '  ' + size.width);
                self.bannerAd.style.top = windowHeight - size.height;
                self.bannerAd.style.left = (windowWidth - size.width) / 2;
            });
        } catch (error) {
            lieyou_showLog('------  jinritoutiao  ------ banner load error2' + JSON.stringify(error));
        }
        
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
    loadRewardedViedoAd(){
        if(jinRiTouTiao_VideoId == '') {
            return;
        }
        if (this.videoAd) {
            this.videoAd.load();
            return;
        }
        try {
            this.videoAd = tt.createRewardedVideoAd({
                adUnitId:jinRiTouTiao_VideoId,
            });
            this.videoAd.load();
            this.videoAd.onError((res) =>{
                lieyou_showLog('------  jinritoutiao  ------ vd load error' + JSON.stringify(res));
                this.videoCallBack&&this.videoCallBack(false);
            })
            this.videoAd.onLoad(() => {
                lieyou_showLog('jinritoutiao------ vd success');
            });
            this.videoAd.onClose(res => {
                if (res.isEnded) {
                    lieyou_showLog('------  jinritoutiao  ------ vd play success');
                    this.videoCallBack&&this.videoCallBack(true);
                }else{
                    lieyou_showLog('------  jinritoutiao  ------ vd play fail');
                    this.videoCallBack&&this.videoCallBack(false);
                    this.showRewardedVideoAdDialog();
                }
            });
        } catch (error) {
            console.log("lieyou------"+JSON.stringify(error));
        }
    },
    showRewardedVideoAd(id,closeCallBack){
        if(closeCallBack)
            this.videoCallBack = closeCallBack;
        this.videoAd&&this.videoAd.show();
        this.loadRewardedViedoAd();
    },
    showSpot(){
        lieyou_showLog('------  jinritoutiao  ------ show spot');
        if(jinRiTouTiao_SpotADId == ""){
            lieyou_SdkManager.showMoreGameGrid();
            this.installShortcut();
            return;
        }
        try {
            const isToutiaio = tt.getSystemInfoSync().appName === "Toutiao";
            // 插屏广告仅今日头条安卓客户端支持
            if (isToutiaio || 1) {
                lieyou_showLog('------  jinritoutiao  ------ show spot is toutiao');
                var interstitialAd = tt.createInterstitialAd({
                    adUnitId: jinRiTouTiao_SpotADId
                });
                interstitialAd.load().then(() => {
                    lieyou_showLog('------  jinritoutiao  ------ spot load success');
                    interstitialAd.show();
                }).catch((err) => {
                    lieyou_SdkManager.showMoreGameGrid();
                    this.installShortcut();
                    interstitialAd.destroy();
                    lieyou_showLog('------  jinritoutiao  ------ spot load error' + JSON.stringify(err));
                });
                interstitialAd.onClose(()=>{
                    interstitialAd.destroy();
                    lieyou_showLog('------  jinritoutiao  ------ spot close');
                });
            }
        } catch (error) {
            lieyou_showLog('------  jinritoutiao  ------ spot load error2' + JSON.stringify(error));
        }
    },
    showSpotByPause(){
        this.showSpot();
    },
    showSpotByBegin(){
        this.showSpot();
    },
    showSpotByFinish(){
        this.showSpot();
    },
    beginLuPing(time,callBack){//time >= 3 <= 120
        this.stopCanShare = true;
        this.shareCallBack = callBack;
        var self = this;
        if (this.recorderVD) {
            this.recorderVD.start({ duration: time });
            return;
        }
        this.recorderVD = tt.getGameRecorderManager();
        this.recorderVD.start({
            duration:time
        });
        this.recorderVD.onError(function(err){
            lieyou_showLog('------  jinritoutiao  ------ luping fail  '+err.errMsg);
        });
        this.recorderVD.onInterruptionBegin(function(){
            lieyou_showLog('------  jinritoutiao  ------ begin luping   ');
        });
        this.recorderVD.onInterruptionEnd(function(){
            lieyou_showLog('------  jinritoutiao  ------ end luping   ');
        });

        this.recorderVD.onStop(res =>{
            if(this.luPingNode && this.luPingNode.isValid){
                this.luPingNode.getComponent('lieyou_tt_luPing').stop();
            }
            try {
                lieyou_showLog('------  jinritoutiao  ------ mp4 path   '+res.videoPath + '   ' +this.stopCanShare);
                self.vdPath = res.videoPath;
                if(this.stopCanShare){
                    // self.shareVd(self.shareCallBack,false);
                }
            } catch (error) {
                
            }
           
        })
    },
    shareVd(callBack,isClearPath = true){
        var self = this;
        if(this.vdPath && this.vdPath != ''){
            let id = null;
            if(this._shareVideoTemplateId.length > 0){
                id = this._shareVideoTemplateId[Math.floor(Math.random()*this._shareVideoTemplateId.length)]
            }
            tt.shareAppMessage({
                query: "shareId="+id,
                templateId:id,
                channel: "video",
                extra: {
                  videoPath: this.vdPath, // 可替换成录屏得到的视频地址
                  videoTopics: this.shareVideoTopics,
                  hashtag_list: this.shareVideoTopics
                },
                success() {
                    if(callBack){
                        self.vdPath = '';
                        callBack(1);
                    }
                    lieyou_showLog('------  jinritoutiao  ------ share vd success');
                },
                fail (e) {
                    if(e.errMsg.search('short') != -1){
                        // self.vdPath = '';
                        callBack(2);
                    }else if(callBack){
                        callBack(0);
                    }
                    lieyou_showLog('------  jinritoutiao  ------ share vd fail ' + JSON.stringify(e));
                }
              });
            // tt.shareVideo({
            //     videoPath:this.vdPath,
            //     success () {
            //         if(callBack){
            //             self.vdPath = '';
            //             callBack(1);
            //         }
            //         lieyou_showLog('------  jinritoutiao  ------ share vd success');
            //     },
            //     fail (e) {
            //         if(e.errMsg.search('short') != -1){
            //             // self.vdPath = '';
            //             callBack(2);
            //         }else if(callBack){
            //             callBack(0);
            //         }
            //         lieyou_showLog('------  jinritoutiao  ------ share vd fail ' + JSON.stringify(e));
            //     }
            // });
        }else{
            lieyou_showLog('------  jinritoutiao  ------ share no vd');
            if(callBack){
                callBack(3);
            }
        }
    },
    pauseLuPing(){
        tt.getGameRecorderManager().pause();
    },
    resumeLuPing(){
        tt.getGameRecorderManager().resume();
    },
    stopLuPing(isShare){
        
        this.stopCanShare = isShare;
        try {
            tt.getGameRecorderManager().stop();
        } catch (error) {
            
        }
        
    },

    addLuPingBtn(obj){
        var self = this;
        var fNode = obj.node?obj.node:cc.find('Canvas');
        
        var node = lieyou_tt_liPingPrefab(); 
        self.luPingNode = node;
        node.x = obj.x?obj.x:0;
        node.y = obj.y?obj.y:0;
        node.getComponent('lieyou_tt_luPing').setColor(obj.color?obj.color:'black');
        if(obj.callBack){
            node.getComponent('lieyou_tt_luPing').setData(obj.callBack);
        }
        fNode.addChild(node);  
    },

    
    

    setDataForHttp: function(url,fun){
		//提交数据到服务器 无返回值 
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
				var response = xhr.responseText;
				if(response=='-1'){
				}
				else if(response=='-2'){
				}
				else{
					if(fun){
						fun(response);
					}
				}
			}
		};
		xhr.open("GET", url, true);
		xhr.send();
    },
    

    newJumpApp(obj){
        if(!this.getSDKVersionCanUse('1.33.0')){
           return;
        }
        if(obj.success){
            obj.success();
        }
        // 打开互跳弹窗
        tt.showMoreGamesModal({
            appLaunchOptions: [
            ],
            success(res) {
                lieyou_showLog("toutiao---   success", res.errMsg);
            },
            fail(res) {
                lieyou_showLog("toutiao---   fail", res.errMsg);
            }
        });
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
    
    showShareVideoDialog(callBack){
        var time = lieyou_getTime()/1000;
        if(time - this._preShareVideoTime < this._shareVideoIntervalTime){
            callBack(4);
            return;
        }
        this._preShareVideoTime = time;
        var fNode = cc.director.getScene();
        var node = lieyou_tt_ShareDialogPrefab();
        fNode.addChild(node);
        node.x = lieyou_SdkManager.sdkWinSize.width/2;
        node.y = lieyou_SdkManager.sdkWinSize.height/2;
        node.callFun = callBack;
    },
    getScreenshot(){
        let nodeIamge = new cc.Node();
        let canvas = cc.game.canvas;
        let width = canvas.width;
        let height = canvas.height;
        canvas.toTempFilePath({
            x: 0,
            y: 0,
            width: width,
            height: height,
            destWidth: cc.winSize.width,
            destHeight: cc.winSize.height,
            success: (res) => {
                cc.loader.load(res.tempFilePath,(err,res)=>{
                    if(res){
                        nodeIamge.addComponent(cc.Sprite)
                        nodeIamge.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(res);
                    }
                });
            },
          });
        
		return nodeIamge;
    },
    saveImageToPhotosAlbum(obj = {}){
        let canvas = cc.game.canvas;
        let screenWidth = canvas.width;//screenWidth
        let screenHeight = canvas.height;//tt.getSystemInfoSync().screenHeight
        let winSize = cc.winSize;
        let node = obj.node;
        let worPos_1 = node.convertToWorldSpaceAR(cc.v2(-node.width/2, node.height/2));
        let worPos_2 = node.convertToWorldSpaceAR(cc.v2(node.width/2, -node.height/2));
        let x = worPos_1.x/winSize.width*screenWidth;
        let y = (1-worPos_1.y/winSize.height)*screenHeight;
        let width = Math.abs(worPos_1.x-worPos_2.x)/winSize.width*screenWidth;
        let height = Math.abs(worPos_1.y-worPos_2.y)/winSize.height*screenHeight;
        canvas.toTempFilePath({
            x: x,
            y: y,
            width: width,
            height: height,
            destWidth: width,
            destHeight: height,
            success: (res) => {
              console.log(res.tempFilePath);
              tt.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
                success(res) {
                  lieyou_SdkManager.showToast("保存成功");
                },
                fail(res) {
                    lieyou_SdkManager.showToast("保存失败");
                },
              });
            },
          });
    },
    installShortcut(obj={}){
        lieyou_showLog(' installShortcut canShowShortcut ');
        var time = parseInt(getTime()/1000);
        if(time - this._beginGameTime < this._installShortcutStartTime && !obj.canShow){
            lieyou_showLog(' installShortcut canShowShortcut 开始时间未到 '+this._installShortcutStartTime);
            return;
        }
        if(time - this._upInstallShortcutTime < this._installShortcutTime && !obj.canShow){
            lieyou_showLog(' installShortcut canShowShortcut 间隔时间未到 '+this._installShortcutTime);
            return;
        }

        this._upInstallShortcutTime = time;
        tt.showFavoriteGuide({
            type: "bar",
            content: "收藏小游戏，通关快人一步",
            position: "bottom",
            success(res) {
                lieyou_showLog("引导组件展示成功");
            },
            fail(res) {
                lieyou_showLog("引导组件展示失败");
            },
        });
    },

    showRewardedVideoAdDialog(){
        if(!this.sysShowPlayVdDialog || this.base_IsShenHe || lieyou_Userdefault.getBoolForKey("lieyou_already_tt_showVideoDialog",false)){
            this.videoCallBack&&this.videoCallBack(false);
        }else{
            lieyou_Userdefault.setBoolForKey("lieyou_already_tt_showVideoDialog",true);
            showTTRewardedVideoAdDialog();
        }
    }
    
})
module.exports = JinRiTouTiaoManager;




