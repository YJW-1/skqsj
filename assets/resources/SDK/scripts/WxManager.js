/**
 * 世界排行 后台 appid openid 用户头像 用户昵称 分数
 * 入口获取来源信息 1 后台 appid openid scene 来源appid 来源路径
 * 退出获取游戏时长
 * 分享来源（谁分享的）
 * wx.triggerGC()
 * wx.openCustomerServiceConversation(Object object)
 * 系统粘贴  wx.setClipboardData({data:'data'}); 有提示
 * wx.onMemoryWarning(function callback)
 * FeedbackButton wx.createFeedbackButton(Object object)
 * 
 * 页面 名字 序号 游戏名 用户id 成功||取消 后台
 * 
 * wx.onUserCaptureScreen(CALLBACK) 截屏 小程序的
 * 视频广告 banner广告 失败原因 后台 视频||banner appid openid yemian type
 */
/**
 * 世界排行 appid（string 微信id） openid（string 用户id） 用户头像（string 头像链接）  用户昵称（string） 分数（int）
游戏推广 页面 名字（string 自己微信id） 序号（int） 游戏名（string 跳转微信id） 用户id（string 用户id） 成功||取消（int 1||0）
入口获取来源信息  appid（string 自己微信id） openid（string 用户id） scene（int ） 来源appid（int 来源信息）
视频广告 banner广告 失败原因  视频||banner（int 0||1） appid（string 自己微信id） openid（string 用户id） 页面（string 场景） type（int）

场景值	scene场景				appId 含义
1020	公众号 profile 页相关小程序列表		来源公众号
1035	公众号自定义菜单			来源公众号
1036	App 分享消息卡片			来源App
1037	小程序打开小程序			来源小程序
1038	从另一个小程序返回			来源小程序
1043	公众号模板消息			来源公众号

type
1000	后端接口调用失败
1001	参数错误
1002	广告单元无效
1003	内部错误
1004	无合适的广告
1005	广告组件审核中
1006	广告组件被驳回
1007	广告组件被封禁
1008	广告单元已关闭
 */
const BaseManager = require('BaseManager');
window.canExperienceGame = 0;//是否可以体验游戏 可在线控制
window.wxServerVersion = 0;//版本 可在线控制
window.wxJumpBtnHaveMove = 1;// 可在线控制
window.wxShareFailTips = '通讯失败'// 可在线控制
window.wxJumpShowBannerDelayTime = 1.5;// 可在线控制
let WxManager = cc.Class({
	extends: require('BaseManager'),
	properties:{
		already:false,
		haveGetAuthorize: false,
		banner:null,
		gameClubButton:null,
		bannerTimeOut:-1,
		shareOnShow: false,
		isOnceShare: true,
		shareCallBack: null,
		shareBegTime: 0,
		_shareQuery:'',//分享统计
	},
	
	isOpen(key){
		
		if(key == KEY_IS_SHENHE){
			return !getCanShare();
		}
		return false;
	},
	getVersion(){
        return wxGameVersion;
    },
	setOnlineData(data){
        if(data.wx){
			if(data.wx.showMoreGameOrGrid){
				this.showMoreGameOrGridType = parseInt(data.wx.showMoreGameOrGrid);
			}
			if(data.wx.gridAdTheme){
				this.gridAdTheme = data.wx.gridAdTheme;
			}
			if(data.wx.serverVersion != undefined){
				var serverVersoin = Number(data.wx.serverVersion);
				wxServerVersion = parseInt(data.wx.serverVersion);
                if(serverVersoin >= wxGameVersion) {
                    this.base_IsShenHe = false;
                }else{
                    this.base_IsShenHe = true;
                }
            }
			var adData = {};
			if(data.wx.theme){
                adData.theme = data.wx.theme;
            }
            if(data.wx.crossSwitch){
                adData.crossSwitch = data.wx.crossSwitch;
            }
            if(data.wx.bizData){
                adData.bizData = data.wx.bizData;
            }
            if(data.wx.ad_datas){
                adData.ad_datas = data.wx.ad_datas;
			}
			if(data.wx.switch){
                adData.switch = data.wx.switch;
            }
            if(this.getSDKVersionCanUse('2.2.0')){
                this.setAdData(adData);
			}
			this.setSwitchData(data.wx);
        }
    },
    initOnlineData(){
        
        if(oppoGetOnlineDataId == ''){
            lieyou_SdkManager.showToast('没有填写qgID');
            return;
        }
        var self = this;
        var version = Userdefault.getIntForKey('sdk_wx_online_version',0);
        var time = Userdefault.getIntForKey('sdk_wx_online_time',0);
        var sp = Userdefault.getIntForKey('sdk_wx_online_sp',0);
        var nowTime = getTime()/1000;
        if(nowTime - time < sp && nowTime > time){
            var response = Userdefault.getStringForKey('sdk_wx_online_data','');
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
                
                if(jsonD.isMoreInfo != undefined){
                    self.isMoreInfo = jsonD.isMoreInfo;
                }
                if(jsonD.sp){
                    Userdefault.setDataForKey('sdk_wx_online_sp',jsonD.sp);
                }
                Userdefault.setDataForKey('sdk_wx_online_time',nowTime);
                
                if(jsonD.server_data_version == version){
                    var response = Userdefault.getStringForKey('sdk_wx_online_data','');
                    var data = JSON.parse(response);
                    self.setOnlineData(data);
                    return;
                }
                var data = JSON.parse(response).data;
                if(!data){
                    return;
                }
                self.setOnlineData(data);
                if(jsonD.server_data_version){
                    Userdefault.setDataForKey('sdk_wx_online_version',jsonD.server_data_version);
                }
                Userdefault.setDataForKey('sdk_wx_online_data',JSON.stringify(data));
            } catch (error) {
                    lieyou_showLog('wxlog------error  initOnlineData + ' + error);
            }
		});
    },
	getSystemInfo(){
		var info = wx.getSystemInfoSync();
        this.platformVersionCode = info.SDKVersion;
        this.androidVersion = info.system;
        this.model = info.model;
        wx.getNetworkType({
            success:(res)=>{
                this.networkType = res.networkType;
            }
        });
	},
	/**
	 * {getAuthorize:true}
	 */
	init: function(obj){
		// BaseManager.prototype.init(obj);
		BaseManager.prototype.init.call(this,obj);
		// this._super();
		this.getSystemInfo();
		setTimeout(() => {
            this.initOnlineData();    
        }, 1000);
		this.jumpOtherGameTime = 0;
		this.jumpOtherGameOnShowGetGold = false;
		var self = this;
		wx.triggerGC();
		// this._beginGameTime = getTime()/1000;
		// wx.exitMiniProgram({success:function(){
		// 	var time = getTime()/1000;
		// 	var runTime = time - self._beginGameTime;//提交游戏时长
		// 	self._beginGameTime = time;
		// 	lieyou_showLog('退出游戏');
		// }});
		// wx.onUserCaptureScreen(function(){
		// 	lieyou_showLog('用户截屏');//提交游戏时长
		// });
		this.shareAndVideoAllNum = 0;
		this.gridAdTheme = "white";
		this.showMoreGameOrGridType = 1;//1 先更多游戏轮播 2 先格子轮播 3 只有更多游戏 4 只有格子
		this.canShowRedPack = 1; //是否可以显示红包 可在线控制
		this.showRedPackNum = 10; //每天显示红包次数 可在线控制
		this.shareSuccessProbability = 100;//分享成功概率 可在线控制
		this.shareOrVideoType = 4;//分享 视频 类型   可在线控制
		//1、关闭 2、分享 3、视频 4、分享-视频（循环） 5、视频-分享（循环） 6、0-10点 只视频 10-24点 视频-分享（循环） 
		lieyou_SdkManager.onShow(function(){
			if(this.shareOnShow){
				var nowTime = getTime()/1000;
				if(nowTime - this.shareBegTime > 5){
					if(this.shareCallBack){
						this.shareCallBack(1);
					}
					this.setDataForHttp(this._shareQuery);
				}else if(nowTime - this.shareBegTime > 2){
					if(this.isOnceShare) {
						if(Math.random() > 0.5) {
							if(this.shareCallBack){
								this.shareCallBack(1);
							}
							this.setDataForHttp(this._shareQuery);
						}else{
							if(this.shareCallBack){
								this.shareCallBack(0);
							}
						}
					}else{
						
						if(Math.random() * 100 > this.shareSuccessProbability) {
							if(this.shareCallBack){
								this.shareCallBack(0);
							}
						}else{
							if(this.shareCallBack){
								this.shareCallBack(1);
							}
							this.setDataForHttp(this._shareQuery);
						}
					}
				}else{
					if(this.shareCallBack){
						this.shareCallBack(0);
					}
				}
				this.isOnceShare = !this.isOnceShare;
			}
			if(this.jumpOtherGameOnShowGetGold){
				var nowTime = getTime()/1000;
				if(nowTime - this.jumpOtherGameTime > quickGame.awardGoldTime){
					var gold = 10*quickGame.awardGoldDouble;
					var gold2 = Userdefault.getIntForKey(lieyou.Key_Gold,0);
    				Userdefault.setDataForKey(lieyou.Key_Gold,gold2 + gold);
				}
			}
			this.jumpOtherGameOnShowGetGold = false;
            this.shareOnShow = false;
        }.bind(this));
		// this._super();
		if(obj && obj.getAuthorize)
			this.haveGetAuthorize = obj.getAuthorize;
		if (typeof wx.getUpdateManager === 'function') {
			const updateManager = wx.getUpdateManager()
			updateManager.onCheckForUpdate(function (res) {
				// 请求完新版本信息的回调
			})
			
			updateManager.onUpdateReady(function () {
				// 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
				updateManager.applyUpdate()
			})
			
			updateManager.onUpdateFailed(function () {
				// 新的版本下载失败
			})
		}
		this.login();
		this.setShareData();
		this.setMoreGameData();
		this.getOnlineData();
		//this.openShare(); 获取到玩家id后调用
	},
	vibrateShort(){
        wx.vibrateShort();
    },
    vibrateLong(){
		wx.vibrateLong();
	},
	getHaveVideo(){
        if(wxVideoId != "" || !this.isOpen(KEY_IS_SHENHE)){
			return true;
		}
		return false;
	},
	getSysPlatform_string(){
		return 'wx';
    },
	getSysPlatform(){
		return 0;
	},
	getJumpBtnHaveMove(){
		if(!getCanShare() || wxBannerId == ""){
			return 0;
		}
		return wxJumpBtnHaveMove;
	},
	getOnlineData(){
		var self = this;
		this.setDataForHttp(wxData.getOnlineData,function(response){
			if(response == "") {
				return;
			}
			var data = JSON.parse(response).data;
			
			try {
				if(data.wxJumpShowBannerDelayTime){
					wxJumpShowBannerDelayTime = parseFloat(data.wxJumpShowBannerDelayTime);
				}
				if(data.wxShareFailTips){
					wxShareFailTips = data.wxShareFailTips;
				}
				if(data.wxJumpBtnHaveMove) {
					wxJumpBtnHaveMove = parseInt(data.wxJumpBtnHaveMove);
				}
				if(data.wxServerVersion) {
					wxServerVersion = parseInt(data.wxServerVersion);
				}
				if(data.canShowRedPack) {
					self.canShowRedPack = parseInt(data.canShowRedPack);
				}
				if(data.showRedPackNum) {
					self.showRedPackNum = parseInt(data.showRedPackNum);
				}
				if(data.canExperienceGame) {
					canExperienceGame = parseInt(data.canExperienceGame);
				}
				if(data.shareOrVideoType) {
					self.shareOrVideoType = parseInt(data.shareOrVideoType);
				}
				if(data.shareSuccessProbability) {
					self.shareSuccessProbability = parseInt(data.shareSuccessProbability);
				}
				if(data.bannerDelayTime && parseInt(data.bannerDelayTime) >= 5) {
					wxData.bannerOnlindDelayTime = parseInt(data.bannerDelayTime);
				}
				if(data.shareSwitch)
					wxData.shareOnlineData = data.shareSwitch;
				if(data.wxVideoId && data.wxVideoId != "") {
					wxVideoId = data.wxVideoId;
				}
				if(data.wxBannerId && data.wxBannerId != "") {
					wxBannerId = data.wxBannerId;
				}
				if(data.forward) {
					wxData.WXforward = JSON.parse(data.forward);
				}
				if(data.spotControl) {
					self.setSpotData(data.spotControl);
				}
				wxData.params = data;
			} catch (error) {
				
			}
			
		});
	},
	returnHomeJumpGame(){
		if(wxData.WXforward != "") {
			if(this.getSDKVersionCanUse('2.2.0')){
				wx.navigateToMiniProgram(wxData.WXforward);
			}
		}
	},
	getParamByOnline(key,defaultV){
		if(!wxData.params) {
			return defaultV;
		}
		var v = wxData.params[key];
		if(v){
			return wxData.params[key];
		}

		return defaultV;
	},
	/**
	 * 设置广告显示数据
	 */
	setSpotData(data){
		if(data.interval) {
			pauseSpotInterval = data.interval;
			resultSpotInterval = data.interval;
		}
		if(data.intervalTime) {
			pauseSpotTime = data.intervalTime;
			resultSpotTime = data.intervalTime;
		}
		if(data.startInterval) {
			pauseSpotStartIndex = data.startInterval;
			resultSpotStartIndex = data.startInterval;
		}

		if(data.items) {
			for(var i = 0;i < data.items.length;i++) {
				if(data.items[i].type && data.items[i].type == 'pause') {
					if(data.items[i].interval) {
						pauseSpotInterval = data.items[i].interval;
					}
					if(data.items[i].intervalTime) {
						pauseSpotTime = data.items[i].intervalTime;
					}
					if(data.items[i].startInterval) {
						pauseSpotStartIndex = data.items[i].startInterval;
					}
				}
				if(data.items[i].type && data.items[i].type == 'result') {
					if(data.items[i].interval) {
						resultSpotInterval = data.items[i].interval;
					}
					if(data.items[i].intervalTime) {
						resultSpotTime = data.items[i].intervalTime;
					}
					if(data.items[i].startInterval) {
						resultSpotStartIndex = data.items[i].startInterval;
					}
				}
			}
		}
	},

	onHide:function(fun){
		wx.onHide(fun);
	},
	onShow:function(fun){
		wx.onShow(fun);
	},
	jumpRefreshBanner: function(obj){
		var self = this;
		if(!obj.x) {
			obj.x = 0;
		}
		if(!obj.y) {
			obj.y = 0;
		}
		if(this.getJumpBtnHaveMove()) {
			this.hideBanner();
			if(obj.node){
				obj.node.runAction(cc.sequence(cc.delayTime(wxJumpShowBannerDelayTime),cc.callFunc(function(){
					self.showBannerByBottom(wxBannerId);
				}),cc.delayTime(0.5),cc.moveTo(0.2,obj.x,obj.y)));
			}else{
				setTimeout(function(){
					self.showBannerByBottom(wxBannerId);
				},wxJumpShowBannerDelayTime*1000);
			}
			
		}else{
			this.showBannerByBottom(wxBannerId);
			if(obj.node) {
				obj.node.x = obj.x;
				obj.node.y = obj.y;
			}
		}
		
	},
	showBanner:function(obj){
		
		this._showBannerObj = obj;
		this._isShowBanner = true;
		if(this.moreGameBanner && this.moreGameBanner.isValid){
            this.moreGameBanner.destroy();
            this.moreGameBanner = null;
        }
		var self = this;
		if(!this.getSDKVersionCanUse('2.0.4')){
			return;
		}
		obj.adUnitId = wxBannerId;
		if(obj.adUnitId == "") 
			return;
		clearInterval(this.bannerTimeOut);
		if(this.banner)	
		   this.banner.destroy()
		this.banner = wx.createBannerAd(obj);
		// this.banner.style.width = obj.style.width;
		this.banner.onResize(res => {
			// lieyou_showLog(res.width, res.height)
			var w = 0;
			if(cc.winSize.height / cc.winSize.width > 2 && cc.sys.os == cc.sys.OS_IOS){
				w = 20;
			}
			this.banner.style.top = cc.view.getFrameSize().height - res.height - w;
			if(this._bannerAdStyle&&this._bannerAdStyle.y!=undefined){
				this.banner.style.top = this._bannerAdStyle.y;
			}
		})
		this.banner.show();
		this.banner.onError(function(res){
			var scene = cc.director.getScene().name;
			var type = -1;
			if(self.getSDKVersionCanUse('2.2.2')){
				type = res.errCode;
			}
			var url_n = serverUrl+'lieyou/wxdata/addGameVideoAdvertis?ad_type='+1+'&appid='+wxAppId+'&openid='+openid+'&page='+scene+'&type='+type;
			self.setDataForHttp(url_n);
		});

		this.bannerTimeOut = setInterval(this.refreshBanner.bind(this,obj),1000 * wxData.bannerOnlindDelayTime);//刷新广告

	},
	showBannerCustom:function(obj){
		if(!this.getSDKVersionCanUse('2.0.4')){
			return;
		}
		if(obj.adUnitId == "") 
			return;
		clearInterval(this.bannerTimeOut);
		if(this.banner)	
		   this.banner.destroy()
		var t = 0, e = 0, a = cc.view.getFrameSize();
		t = a.width, e = a.height, lieyou_showLog(a);
		var t2 = t;
		t = t * obj.scale;

		var i = e - t / 3.5 - 0, o = (t2 - t) / 2;

		var x = obj.x?obj.x:o;
		var y = obj.y?obj.y:i;
		var w = 0;
		if(cc.winSize.height / cc.winSize.width > 2){
			w = 20;
		}
		this.showBanner({adUnitId:obj.id,style:{ left: x,top: y-20-2,width: t}})

	},
	refreshBanner(obj){
		if(this.banner)	{
		   	this.banner.destroy()
			this.banner = wx.createBannerAd(obj);
			this.banner.onResize(res => {
				var w = 0;
				if(cc.winSize.height / cc.winSize.width > 2 && cc.sys.os == cc.sys.OS_IOS){
					w = 20;
				}
				this.banner.style.top = cc.view.getFrameSize().height - res.height - w;
				if(this._bannerAdStyle&&this._bannerAdStyle.y!=undefined){
					this.banner.style.top = this._bannerAdStyle.y;
				}
			})
			this.banner.show();
			this.banner.onError(function(res){
			});
		}
	},
	showBannerByBottom:function(id){
		var t = 0, e = 0, a = cc.view.getFrameSize();
		t = a.width, e = a.height, lieyou_showLog(a);
		var i = e - t / 3.5 - 20, o = (t - t) / 2;
										
		var w = 0;	
		if(cc.winSize.height / cc.winSize.width > 2){
			w = 20;
		}			
	  	this.showBanner({adUnitId:id,style:{ left: o,top: i-w,width: t}})
	},
	showBannerByTop:function(id){
    	var t = 0, e = 0, a = cc.view.getFrameSize();
		t = a.width, e = a.height, lieyou_showLog(a);
		var i = e - t / 3.5 - 10, o = (t - t) / 2;
	  	this.showBanner({adUnitId:id,style:{ left: o,top: 0,width: t}});
	},
	hideBanner:function(){
		
		this._isShowBanner = false;
		if(this.banner)	{
			clearInterval(this.bannerTimeOut);
		   	this.banner.destroy();
		   	this.banner = null;
		}
	},
	showRewardedVideoAd: function(id,closeCallBack){
		this.shareAndVideoAllNum++;
		if(!this.getSDKVersionCanUse('2.0.4') || wxVideoId == ''){
			this.share({name:GameName,source:10,success:closeCallBack});
			// closeCallBack(false);
			return;
		}
		var self = this;
		
		// this.hideBanner();
		
		var videoAd = wx.createRewardedVideoAd({ adUnitId: wxVideoId });
		videoAd.load().then(()=>videoAd.show()).catch(err=>lieyou_showLog("s"));
		videoAd.offClose();
		videoAd.onClose(function(res){
			if(window.vivoPlayVDCallBack){
				cc.audioEngine.stopAll();
				setTimeout(() => {
					window.vivoPlayVDCallBack();
				}, 100);
			}
			
			if(self.getSDKVersionCanUse('2.1.0')){
				// closeCallBack(res.isEnded);
				if(res.isEnded){
					try{
					closeCallBack(res.isEnded);
					}catch(err){}
					
				}else{
					try{
						closeCallBack(false);
						
						// closeCallBack(false);
					}catch(err){}
					
				}
				
				return;
			}
			
			closeCallBack(true);
		});
		videoAd.offError();
		videoAd.onError(function(res){
			var scene = cc.director.getScene().name;
			var type = -1;
			if(self.getSDKVersionCanUse('2.2.2')){
				type = res.errCode;
			}
			var url_n = serverUrl+'lieyou/wxdata/addGameVideoAdvertis?ad_type='+0+'&appid='+wxAppId+'&openid='+openid+'&page='+scene+'&type='+type;
			self.setDataForHttp(url_n);
			// closeCallBack(false);
			closeCallBack(false);
			
		})
	},
	showForum : function(obj){
		var wxSys = wx.getSystemInfoSync();
		if(!this.getSDKVersionCanUse('2.0.3')){
			return;
		}
		var widths =wxSys.screenWidth;
		var height =wxSys.screenHeight;
		if(!this.gameClubButton){
			this.gameClubButton = wx.createGameClubButton(obj);
		}else{
			this.gameClubButton.show()
		}
	},
	closeForum : function(){
		if(!this.getSDKVersionCanUse('2.0.3')){
			return;
		}
		if(this.gameClubButton)
			this.gameClubButton.hide();
	},
	//微信授权
	getAuthorize: function(){
		var self = this;
		wx.authorize({
            scope:'scope.userInfo',
            success: function(){
                wx.getUserInfo({success:function(res){
					var userInfo = res.userInfo
                    uinfo.nick = userInfo.nickName//昵称
                    uinfo.icon = userInfo.avatarUrl//头像链接
                    uinfo.sex = userInfo.gender //性别 0：未知、1：男、2：女
                    uinfo.province = userInfo.province//省份
                    uinfo.city = userInfo.city//城市
					uinfo.country = userInfo.country//国家
					//提交状态

					var query = wx.getLaunchOptionsSync().query;

					var laiyuan_appid = 0;
					if(wx.getLaunchOptionsSync().referrerInfo && wx.getLaunchOptionsSync().referrerInfo.appId){
						laiyuan_appid = wx.getLaunchOptionsSync().referrerInfo.appId;
					}
					var laiyuan_scene = wx.getLaunchOptionsSync().scene;
					var url_n = serverUrl+'lieyou/wxdata/addGameSourceInfo?appid='+wxAppId+'&openid='+openid+'&scence='+laiyuan_scene+'&s_appid='+laiyuan_appid+'&s_path='+JSON.stringify(query);
					self.setDataForHttp(url_n);
					if(query.source){
						var str = wxData.putTouchShareDataUrl+"?"+"appId="+query.appId +"&principal_gamerId="+query.gamerId+"&assistant_gamerId="+openid+"&itemId="+query.itemId+"&source="+query.source;
						if(query.inviteFriend) {
							str += "&name=" + userInfo.nickName + "&icon=" + userInfo.avatarUrl + "&inviteFriend=" + query.inviteFriend;
						}
						self.setDataForHttp(str);
						if(!Userdefault.getBoolForKey(query.gamerId,false)){
							canGetLocalCard = true;
							getLocalCareId = "" + query.gamerId;
						}
					}else{
					}
                    
                }});
            }
        });
	},
	//微信登录
	login: function(){
		var sef = this;
		wx.login({success:function(res){
			sef.getOpenId(res.code);
		}});
	},

	getOpenId: function(code) {
		//获取openid
		var self = this;
		this.setDataForHttp(wxData.getOpenIdUrl + '?appid=' + wxData.appId + '&secret=' + wxData.appSecret + '&js_code=' + code + '&grant_type=authorization_code',function(response){
			var data = JSON.parse(response);
			openid = data.openid;
			wxData.session_key = data.session_key;
			uinfo.uid = openid;
			wsurl += openid;
			if(self.already){
				return;
			}
			self.openShare();
			if(self.haveGetAuthorize)
				self.getAuthorize();
			var query = wx.getLaunchOptionsSync().query;

			var laiyuan_appid = 0;
			if(wx.getLaunchOptionsSync().referrerInfo && wx.getLaunchOptionsSync().referrerInfo.appId){
				laiyuan_appid = wx.getLaunchOptionsSync().referrerInfo.appId;
			}
			var laiyuan_scene = wx.getLaunchOptionsSync().scene;
			var url_n = serverUrl+'lieyou/wxdata/addGameSourceInfo?appid='+wxAppId+'&openid='+openid+'&scence='+laiyuan_scene+'&s_appid='+laiyuan_appid+'&s_path='+JSON.stringify(query);
			self.setDataForHttp(url_n);
			var qudao = 'lieyou';
			if(query.channel) 
				qudao = query.channel;
			self.setDataForHttp(wxData.putPlayerData + openid + '/' + qudao);
			// self.setDataForHttp(wxData.putPlayerData + openid);
			
			self.checkResurrNum();
			self.already = true;
		});
	},

	setShareData: function() {
		//获取分享数据
		this.setDataForHttp(wxData.shareUrl,function(response){
			wxData.shareData = JSON.parse(response);
		});
	},
	setMoreGameData: function() {
		//获取更多游戏数据
		var sysPlatform = 'android'
		if(cc.sys.os == cc.sys.OS_IOS){
			sysPlatform = 'ios';
		}
		this.setDataForHttp(wxData.moreGameUrl+'&sysPlatForm='+sysPlatform,function(response){
			wxData.moreGameData = JSON.parse(response);
			for(var i = 0;i < wxData.moreGameData.length;i++) {
				if(wxData.moreGameData[i].screen && wxData.moreGameData[i].screen.length > 0 && wxData.moreGameData[i].screen[0].length > 0) {
					spotData.push(wxData.moreGameData[i]);
				}
				quickGame.RecommendIconData[i] = {jumpData:wxData.moreGameData[i].jumpType,url:wxData.moreGameData[i].icon,gameName:''};
			}
		});
	},
	
	showAllRankingLayer: function(obj){
		
	},
	showFailRankingLayer: function(obj){
		
	},

	showMoreGameMiddle_one(obj){
		obj.gridCount = 5;
		var fun = ()=>{
			return BaseManager.prototype.showMoreGameMiddle_one.call(this,obj);
		}
		return this.showMoreGameOrGrid(obj,fun);
	},
	showMoreGameMiddle_two(obj){
		if(obj.moreGame){
			return BaseManager.prototype.showMoreGameMiddle_two.call(this,obj);
		}
		obj.gridCount = 8;
		var fun = ()=>{
			return BaseManager.prototype.showMoreGameMiddle_two.call(this,obj);
		}
		return this.showMoreGameOrGrid(obj,fun);
	},
	showMoreGameMiddle_three(obj){
		obj.gridCount = 8;
		var fun = ()=>{
			return BaseManager.prototype.showMoreGameMiddle_three.call(this,obj);
		}
		return this.showMoreGameOrGrid(obj,fun);
	},
	showMoreGameOrGrid(obj,fun){
		var type = this.showMoreGameOrGridType%2?1:2;
		switch(this.showMoreGameOrGridType){
			case 1:
				this.showMoreGameOrGridType++;
				this.showMoreGameOrGridType = this.showMoreGameOrGridType%2?1:2;
				break;
			case 2:
				this.showMoreGameOrGridType++;
				this.showMoreGameOrGridType = this.showMoreGameOrGridType%2?1:2;
				break;
		}
		if(type == 1){
			if(fun()){
				return true;
			}else{
				return this.showGridAd(obj);
			}
		}else{
			return this.showGridAd(obj,fun);
		}
	},
	showGridAd(obj,fun = null){
		var fNode = obj.node?obj.node:cc.director.getScene();
		
		if(this.getSDKVersionCanUse('2.9.2') && lieyou_wxGridId != ""){
			var gridAd = wx.createGridAd({
				adUnitId:lieyou_wxGridId,
				style:{
					left:0,
					top:0,
					width:100,
					height:100
				},
				adTheme:this.gridAdTheme,
				gridCount:obj.gridCount
			});
			gridAd.show();
			gridAd.onError((res)=>{
				if(fun){
					fun();
				}
				lieyou_showLog("wxlog----- show gridad fail "+JSON.stringify(res));
			});
			var baseNodejs = fNode.addComponent('lieyou_baseNode');
			var isShowBanner = this._isShowBanner;
			gridAd.onResize((res)=>{
				gridAd.offResize();
				if(this._haveShowSpotAd){
					gridAd.destroy();
					baseNodejs.destroyCallBack = null;
					return;
				}
				this._haveShowGridAd = true;
				console.log(">>>>>>>>>>>>> grid hideBanenr");
				this.hideBanner();
				var viewSize = cc.view.getFrameSize();
				let updateCallBack = ()=>{
                    var worldPos = fNode.convertToWorldSpaceAR(cc.v2(obj.x?obj.x:0, obj.y?obj.y:0));
					var xProportion = worldPos.x / lieyou_SdkManager.sdkWinSize.width;
					var yProportion = 1- (worldPos.y / lieyou_SdkManager.sdkWinSize.height);
					gridAd.style.left = viewSize.width*xProportion - res.width/2;
					gridAd.style.top = viewSize.height*yProportion - res.height/2;
				}
				updateCallBack();
                baseNodejs.updateCallBack = updateCallBack;
			});
			
			baseNodejs.destroyCallBack = ()=>{
				this._haveShowGridAd = false;
				if(isShowBanner){
					console.log(">>>>>>>>>>>>> grid showBanenr");
					this.showBanner(this._showBannerObj);
				}
				lieyou_showLog('wxlog---------- gridAd destroy');
				gridAd.destroy();
			}

			return true;
		}else{
			if(fun){
				return fun();
			}
			return false;
			lieyou_showLog("wxlog----- show gridad version low ");
		}
	},
	showSpotByBegin: function(isHaveNative,top){
		this.showMySpot();
	},
	showSpotByPause: function(isHaveNative,top){
		this.showMySpot();
	},
	showSpotByFinish: function(isHaveNative,top){
		this.showMySpot();
	},
	showMySpot(){
		if(this._alShowSpot){
			lieyou_SdkManager.showMoreGameGrid();
			return;
		}
		this._alShowSpot = true;
		setTimeout(() => {
			this._alShowSpot = false;
		}, 10*1000);
		if(!this.getSDKVersionCanUse('2.6.0')){
			lieyou_SdkManager.showMoreGameGrid();
			return;
		}
		if(wxSpotId == ''){
			lieyou_SdkManager.showMoreGameGrid();
			return;
		}
		var self = this;
		var spotAd = wx.createInterstitialAd({
			adUnitId:wxSpotId
		});
		if(this.getSDKVersionCanUse('2.8.0')){
			spotAd.load();
		}
		var isShowBanner = this._isShowBanner;
		spotAd.onLoad(()=>{
			spotAd.offLoad();
			if(this._haveShowGridAd){
				lieyou_SdkManager.showMoreGameGrid();
				return;
			}
			this._haveShowSpotAd = true;
			console.log(">>>>>>>>>>>>> spot hideBanenr");
			this.hideBanner();
			spotAd.show();
		});
		spotAd.onClose(()=>{
			//关闭spot
			this._haveShowSpotAd = false;
			if(isShowBanner){
				console.log(">>>>>>>>>>>>> spot showBanenr");
				this.showBanner(this._showBannerObj);
			}
		})

		spotAd.onError(function(res){
			lieyou_SdkManager.showMoreGameGrid();
			spotAd.offClose();
			spotAd.offError();
			spotAd.offLoad();
			if(self.getSDKVersionCanUse('2.8.0')){
				spotAd.destroy();
			}
			lieyou_showLog('show spot ad fail   '+JSON.stringify(res));
		});
	},
	setRankingData: function(key,score){
		if(!this.getSDKVersionCanUse('1.9.92')){
			return;
		}
		wx.setUserCloudStorage({
            KVDataList:[{"key":key,"value":"" + score}],
            success:function(){lieyou_showLog("success")},
            fail:function(){lieyou_showLog("fail")},
            complete:function(){lieyou_showLog("complete")}
        });
	},
	
	/**
	 * 帮助成功分享
	 */
	shareHelpSuccess(level){
		this.shareOnShow = true;
		this.shareBegTime = getTime()/1000;
		this.shareCallBack = null;
		//source 9
		var self = this;
		if(wxData.shareData.length > 0 && getCanShare()){
			var adid = 0;
			var _title = "";
			var _url = "";

			for(var i = 0; i < wxData.shareData.length;i++){
				if(wxData.shareData[i].mode == GameName){
					var data = wxData.shareData[i].item;
					if(wxData.shareData[i].level && wxData.shareData[i].level.success) {
						data = wxData.shareData[i].level.success;
					}
					var random = parseInt(Math.random() * data.length);
					adid = data[random].id;
					_title = data[random].title;
				
					_title = _title.replace(/%d/g, level + 1);
					_url = data[random].img;
				}
			}

			var _query =wxData.putShareDataUrl+"?dsadsa=dsdsd"+"&appId="+wxData.appId+"&gamerId="+openid+"&itemId=" + adid + "&source=9";
			this._shareQuery = _query;
			wx.shareAppMessage({
				title:_title,
				imageUrl:_url,
				query:_query
				
			});
		}else{
			var _query =wxData.putShareDataUrl+"?dsadsa=dsdsd"+"&appId="+wxData.appId+"&gamerId="+openid+"&itemId=" + -1 + "&source=9";
			this._shareQuery = _query;
			wx.shareAppMessage({
				title:"好玩的游戏，快来一起玩吧",
				imageUrl:"https://res.igame58.com/wxxyx/commom/shareIcon.png",
				query:_query
			});
		}
	},
	/**
	 * 帮助分享
	 */
	shareHelp(level){
		this.shareOnShow = true;
		this.shareBegTime = getTime()/1000;
		this.shareCallBack = null;
		//source 8
		var self = this;
		if(wxData.shareData.length > 0 && getCanShare()){
			var adid = 0;
			var _title = "";
			var _url = "";

			for(var i = 0; i < wxData.shareData.length;i++){
				if(wxData.shareData[i].mode == GameName){
					var data = wxData.shareData[i].item;
					if(wxData.shareData[i].level && wxData.shareData[i].level.help) {
						data = wxData.shareData[i].level.help;
					}
					
					var random = parseInt(Math.random() * data.length);
					adid = data[random].id;
					_title = data[random].title;
					_title = _title.replace(/%d/g, level + 1);
					_url = data[random].img;
				}
			}
        	

			var _query =wxData.putShareDataUrl+"?dsadsa=dsdsd"+"&appId="+wxData.appId+"&gamerId="+openid+"&itemId=" + adid + "&source=8" + "&level=" + level;
			this._shareQuery = _query;
			wx.shareAppMessage({
				title:_title,
				imageUrl:_url,
				query:_query
			});
		}else{
			var _query =wxData.putShareDataUrl+"?dsadsa=dsdsd"+"&appId="+wxData.appId+"&gamerId="+openid+"&itemId=" + -1 + "&source=8" + "&level=" + level;
			this._shareQuery = _query;
			wx.shareAppMessage({
				title:"好玩的游戏，快来一起玩吧",
				imageUrl:"https://res.igame58.com/wxxyx/commom/shareIcon.png",
				query:_query
			});
		}
	},
	helpFriendSuccess(level){
		//wxAppId helpOpenId level uinfo.icon uinfo.nick
		var url = serverUrl + "lieyou/wxdata/addHelpRecord?wxGameId=" + wxAppId + "&gamerId=" + helpOpenId + "&level=" + level + "&icon=" + uinfo.icon + "&name=" + uinfo.nick;
		this.setDataForHttp(url);
	},
	getIsHaveFriendHelpMe(level,fun){
		//level openid wxAppId   
		var url = serverUrl + "lieyou/wxdata/getClickInfo/" + wxAppId + "/" + openid + "/" + level;
		this.setDataForHttp(url,function(response){
			var data = JSON.parse(response);
			if(data.name && data.name != "") {
				fun({level:level,name:data.name,icon:data.icon});
			}
		});
	},
	/**
	 * 普通分享
	 */
	share: function(obj){
		this.shareAndVideoAllNum++;
		this.shareOnShow = true;
		this.shareBegTime = getTime()/1000;
		if(obj.success){
			this.shareCallBack = obj.success;
		}else{
			this.shareCallBack = null
		}
		var getGroupId = obj.getGroupId?obj.getGroupId:true;
		var self = this;
		if(wxData.shareData.length <= 0 || !getCanShare()){
			var _query =wxData.putShareDataUrl+"?dsadsa=dsdsd"+"&appId="+wxData.appId+"&gamerId="+openid+"&itemId="+-1+"&source="+obj.source;
			if(obj.inviteFriend) {
				_query += "&inviteFriend=" + obj.inviteFriend;
				
			}
			this._shareQuery = _query;
			wx.shareAppMessage({
				title:"好玩的游戏，快来一起玩吧",
				imageUrl:"https://res.igame58.com/wxxyx/commom/shareIcon.png",
				query:_query
				
			});
		
			return;
		}
		//分享obj = {name:sss,source:1,success:fun}
		var adid = 0;
		var _title = "";
		var _url = "";
		for(var i = 0; i < wxData.shareData.length;i++){
			if(wxData.shareData[i].mode == obj.name){
				var data = wxData.shareData[i].item;
				var random = parseInt(Math.random() * data.length);
				adid = data[random].id;
				_title = data[random].title;
				_url = data[random].img;
			}
		}
		
		var _query =wxData.putShareDataUrl+"?dsadsa=dsdsd"+"&appId="+wxData.appId+"&gamerId="+openid+"&itemId="+adid+"&source="+obj.source;
		if(obj.inviteFriend) {
			_query += "&inviteFriend=" + obj.inviteFriend;
			
		}
		this._shareQuery = _query;
		wx.shareAppMessage({
            title:_title,
            imageUrl:_url,
            query:_query
            
        });
	},
	checkResurrNum_2: function(){
		if(canGetNetCardNum){
			canGetNetCardNum = false;
			setTimeout(function(){
				canGetNetCardNum = true;
			},getNetCardTime);
			return this.checkResurrNum();
		}

		var localCardNum = Userdefault.getIntForKey(localCardKey,0);
		return localCardNum + netCardNum > 5?5:localCardNum + netCardNum;
	},
	checkResurrNum: function(){
		//查看复活数量 
		this.setDataForHttp(wxData.checkResurrDataUrl +  "?appId=" + wxData.appId + "&gamerId="+openid,function(response){
			netCardNum = parseInt(response);
		});
		
		var localCardNum = Userdefault.getIntForKey(localCardKey,0);
		return localCardNum + netCardNum > 5?5:localCardNum + netCardNum;
	},
	useResurr: function(){
		var localCardNum = Userdefault.getIntForKey(localCardKey,0);
        if(localCardNum > 0) {
			var num = localCardNum + netCardNum;
			var delNum = 1;
			if(num >= 5) {
				delNum = num - 4;
			}
			Userdefault.setDataForKey(localCardKey,localCardNum - delNum);
			return;
		}
		netCardNum--;
		//使用复活
		var url = wxData.useResurrDataUrl + "?appId=" + wxData.appId + "&gamerId="+openid;
		this.setDataForHttp(url);
	},
	addLocalResurr: function(){
		var localCardNum = Userdefault.getIntForKey(localCardKey,0);
       
		Userdefault.setDataForKey(localCardKey,localCardNum + 1);
			
	},
	/**
	 * 获取帮助关卡 默认返回-1
	 */
	getHelpLevel(){
		var query = wx.getLaunchOptionsSync().query;
		if(query.level && query.source == 8) {
			helpOpenId = query.gamerId;
			return parseInt(query.level);
		}
		return -1;
	},
	openShare: function(){
		//开启被动分享
		var self = this;
		if(!this.haveGetAuthorize) {
			var query = wx.getLaunchOptionsSync().query;
			if(query.source){
				var str = wxData.putTouchShareDataUrl+"?"+"appId="+query.appId +"&principal_gamerId="+query.gamerId+"&assistant_gamerId="+openid+"&itemId="+query.itemId+"&source="+query.source;
				this.setDataForHttp(str);
				if(!Userdefault.getBoolForKey(query.gamerId,false)){
					canGetLocalCard = true;
					getLocalCareId = "" + query.gamerId;
				}
			}else{
			}
		}
        wx.showShareMenu({withShareTicket: true});
        wx.onShareAppMessage(function(){

			self.shareOnShow = true;
			self.shareBegTime = getTime()/1000;
			self.shareCallBack = null

			var adid = -1;
			var _title = "好玩的游戏，快来一起玩吧";
			var _url = "https://res.igame58.com/wxxyx/commom/shareIcon.png";
			for(var i = 0; i < wxData.shareData.length;i++){
				if(wxData.shareData[i].mode == GameName){
					var data = wxData.shareData[i].item;
					var random = parseInt(Math.random() * data.length);
					adid = data[random].id;
					_title = data[random].title;
					_url = data[random].img;
				}
			}
			
            var _query =wxData.putShareDataUrl+"?sdsdsds=dsds"+"&appId="+wxData.appId+"&gamerId="+openid+"&itemId="+adid+"&source=1";
			self._shareQuery = _query;
			return {
                title: _title,
                imageUrl: _url,
                query:_query
            }
        });
	},
	// 1 更多游戏 2 插屏广告 3 三行的猜你喜欢 4 两行的猜你喜欢 5 一行的猜你喜欢 6 banner大图 7 banner小图 8 体验有奖 9 精品推荐 10 icon
	jumpApp(data,url,page,num){
		var self = this;
		if(this.getSDKVersionCanUse('2.2.0')){
			wx.navigateToMiniProgram({appId:data.appId,path:data.path,fail:function(err){
				var forward_appid = data.appId;
				var url_n = serverUrl+'lieyou/wxdata/addGamePromotion?page='+page+'&appid='+wxAppId+'&s_number='+num+'&forward_appid='+forward_appid+'&openid='+openid+'&status='+0;
				self.setDataForHttp(url_n);
				if(err.errMsg != 'navigateToMiniProgram:fail cancel'){
					wx.previewImage({
						current: url[0], // 当前显示图片的http链接 
						urls: url, // 需要预览的图片http链接列表 
						success: function(){}
					})
				}
			},success:function(err){
				var forward_appid = data.appId;
				var url_n = serverUrl+'lieyou/wxdata/addGamePromotion?page='+page+'&appid='+wxAppId+'&s_number='+num+'&forward_appid='+forward_appid+'&openid='+openid+'&status='+1;
				self.setDataForHttp(url_n);
			}});
		}else{
			wx.previewImage({
				current: url[0], // 当前显示图片的http链接 
				urls: url, // 需要预览的图片http链接列表 
				success: function(){}
			})
		}
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

	addToast(_node,str,_callBack){
		
		
	},
	shareDialog(_node){
		
	},
	addGetLocakCardDialog(_node){
		
	},
	modifyInviteFriend(friendId){
		var url = serverUrl + 'lieyou/wxdata/modifyFlag/' + wxAppId + "/" + openid + "/" + friendId;
		this.setDataForHttp(url);
	},
	deleteInviteFriend(Id){
		var url = serverUrl + 'lieyou/wxdata/delFriendInfo/' + Id;
		this.setDataForHttp(url);
	},
	getInviteFriendData(flag,fun){
		var url = serverUrl + 'lieyou/wxdata/getFriendInfo/' + wxAppId + "/" + openid + "/" + flag;
		this.setDataForHttp(url,function(response){
			var data = JSON.parse(response);
			fun(data);
		});
	},
	
	showInviteFriend(_node,_callBack){
		
	},
	showInviteFriendFailure(_node){
		
	},
	getOnlineSpriteFrame(url,fun){
		if(url == "") {
			return;
		}
		var loadFile = {
            url: url,
            type: "image"
        };
		cc.loader.load(loadFile, function (err, tex) {
            if (err) {
                return;
            }
            fun(new cc.SpriteFrame(tex));
        });
	},

	getSDKVersionCanUse: function(data){
		var wxSys = wx.getSystemInfoSync();
		var version = wxSys.SDKVersion;
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
	
	showGameRecommend(callBack = null){
		if(!canExperienceGame) {
			if(callBack){
				callBack(false);
			}
			return;
		}
		if(this.isOpen(KEY_IS_SHENHE)){
			if(callBack){
				callBack(false);
			}
			return;
		}

		var timeLast = Userdefault.getIntForKey('SKD_showRecommendDialogTime',0);
		var timeNow = parseInt(getTime()/1000);
		if(timeNow - timeLast < 10) {
			if(callBack){
				callBack(false);
			}
			return;
		}
		Userdefault.setDataForKey('SKD_showRecommendDialogTime',timeNow);
		var self = this;
        cc.loader.loadRes('SDK/module/RecommendGame/Recommend_playVD',function(err,res){
			var node = cc.instantiate(res); 
			var fNode = cc.find('Canvas');
			fNode.addChild(node,999);  
			node.getComponent('RecommendGame_playVD').setData(callBack);
        })
	},

	getShareOrViedo(){
		if(this.isOpen(KEY_IS_SHENHE)){
			return 0;
		}
		var nShareAndVideoAllNum = this.shareAndVideoAllNum;
		
		var retType = 0;
		//1、关闭 2、分享 3、视频 4、分享-视频（）循环 5、视频-分享（循环） 6、0-10点 只视频 10-24点 视频-分享（）循环
		if(this.shareOrVideoType == 1) {
			retType = 0;
		}else if(this.shareOrVideoType == 2) {
			retType = 1;
		}else if(this.shareOrVideoType == 3) {
			retType = 2;
		}else if(this.shareOrVideoType == 4) {
			if(nShareAndVideoAllNum%2 == 0){
				retType = 1;
			}else{
				retType = 2;
			}
		}else if(this.shareOrVideoType == 5) {
			if(nShareAndVideoAllNum%2 == 0){
				retType = 2;
			}else{
				retType = 1;
			}
		}else if(this.shareOrVideoType == 6) {
			var hours = (new Date()).getHours();
			if(hours>=0 && hours < 10) {
				retType = 2;
			}
			if(nShareAndVideoAllNum%2 == 0){
				retType = 2;
			}else{
				retType = 1;
			}
		}
		if(retType == 2) {
			if(wxVideoId == ""){
				if(!this.isOpen(KEY_IS_SHENHE)){
					retType = 1;
				}else{
					retType = 0;
				}
			}
		}else if(retType == 1) {
			if(this.isOpen(KEY_IS_SHENHE)){
				if(wxVideoId != ""){
					retType = 2;
				}else{
					retType = 0;
				}
			}
		}
		
		return retType;
	},

	setWorldRankData(key,score){
		var url_n = serverUrl+'lieyou/wxdata/addRankList?wxGameId='+wxAppId+'&gamerId='+openid+'&nikeName='+uinfo.nick+'&headImagePath='+uinfo.icon+'&score='+score+'&rankKey='+key;
		this.setDataForHttp(url_n);
	},

	//new 
	newJumpApp(obj){
		var self = this;
		if(this.getSDKVersionCanUse('2.2.0')){
			wx.navigateToMiniProgram({appId:obj.data.appId,path:obj.data.path,fail:function(err){
				if(err.errMsg != 'navigateToMiniProgram:fail cancel'){
					if(obj.data.url){
						if(obj.success){
							obj.success();
						}
						wx.previewImage({
							current: obj.data.url[0], // 当前显示图片的http链接 
							urls: obj.data.url // 需要预览的图片http链接列表 
						})
					}
				}
			},success:function(err){
				if(obj.success){
					obj.success();
				}
			}.bind(this)});
		}else{
		}
	}
	

})
module.exports = WxManager;