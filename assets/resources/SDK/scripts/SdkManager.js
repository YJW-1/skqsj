const WxManager = require('WxManager');
const FaceBookManager = require('FaceBookManager');
const NativeManager = require('NativeManager');
const OppoH5Manager = require('OppoH5Manager');
const OppoManager = require('OppoManager');
const VivoManager = require('VivoManager');
const XiaoMiManagerH5 = require('XiaoMiManagerH5');
const XiaoMiManager = require('XiaoMiManager');
const JinRiTouTiaoManager = require('JinRiTouTiaoManager');
const HuaweiManager = require('HuaweiManager');
const BaiDuManager = require('BaiDuManager');
const QQManager = require('QQManager');
const QuTouTiaoManagerH5 = require('QuTouTiaoManagerH5');
const MagicManagerH5 = require('MagicManagerH5');
const BaseManager = require('BaseManager');
const lieyou_webManager = require('lieyou_webManager');

window._SDKVersion = '2020.10.16.1';
window._SDKVersionCode = 4;

window._SDKNativeAdLoadServerRes = false;

window.lieyou_SdkManager = module.exports = {
	instance:null,
	platform:'',
	_SceneScale: 1,
	init:function(obj = {}){
		var winSize = cc.winSize;
		var winsizeWidth = winSize.height>winSize.width?winSize.width:winSize.height;
		this.sdkWinSize = winSize;
        this._SceneScale = winsizeWidth/720;
		lieyou_showLog('版本：'+_SDKVersion);
		this.platform = releasePlatform;
		if(!this.instance){
			try {
				if(lieyou_GoldKey && lieyou_GoldKey != ""){
					lieyou.Key_Gold = lieyou_GoldKey;
				}
			} catch (error) {
			}
			lieyou.Props_Base_Gold = lieyou_Props_Base_Gold;
			this.setOpenId_uuid();
			this.showBossKeyNode();
			lieyou_showLog(">>>>>>>>>>>>         init sdk");
			this.setNewPlayerData();
			this.initGameData();
			//this.initMainGame();//设置主游戏
			if(this.platform == 'oppoH5'){
				this.instance = new OppoH5Manager();
				this.instance.init(obj);
			}else if(cc.sys.platform == cc.sys.OPPO_GAME){
				this.instance = new OppoManager();
				this.instance.init(obj);
			}else if(cc.sys.platform == cc.sys.VIVO_GAME){
				this.instance = new VivoManager();
				this.instance.init(obj);
			}else if(this.platform == 'qq'){
				this.instance = new QQManager();
				this.instance.init(obj);
			}else if(cc.sys.platform == cc.sys.BAIDU_GAME){
				this.instance = new BaiDuManager();
				this.instance.init(obj);
			}else if(cc.sys.platform == cc.sys.HUAWEI_GAME){
				 this.instance = new HuaweiManager();
				 this.instance.init(obj);
			}else if(this.platform == 'xiaoMiH5'){
				this.instance = new XiaoMiManagerH5();
				this.instance.init(obj);
		   	}else if(this.platform == 'QuTouTiaoH5'){
				this.instance = new QuTouTiaoManagerH5();
				this.instance.init(obj);
		   	}else if(this.platform == 'MagicH5'){
				this.instance = new MagicManagerH5();
				this.instance.init(obj);
		   	}else if(this.platform == 'lieyouH5'){
				this.instance = new lieyou_webManager();
				this.instance.init(obj);
		   	}else if(cc.sys.platform == cc.sys.XIAOMI_GAME){
				this.instance = new XiaoMiManager();
				this.instance.init(obj);
		   	}else if(this.platform == 'jinRiTouTiao'){
				this.instance = new JinRiTouTiaoManager();
				this.instance.init(obj);
		   	}else if (cc.sys.platform === cc.sys.WECHAT_GAME) {
				this.instance = new WxManager();
				this.instance.init(obj);
			}else if(cc.sys.isNative) {
				this.instance = new NativeManager();
				this.instance.init(obj);
			}else if (window.FBInstant && FBInstant.getPlatform()) {
				this.instance = new FaceBookManager();
				this.instance.init(obj);
			}else{
				this.instance = new BaseManager();
				this.instance.init(obj);
			}
			// if(lieyou_appid != ""){
			// 	try {
			// 		cocosAnalytics.init({
			// 			appID: lieyou_appid,              // 游戏ID
			// 			version: this.instance.getVersion(),           // 游戏/应用版本号
			// 			storeID: this.instance.getSysPlatform_string(),     // 分发渠道
			// 			engine: "cocos",            // 游戏引擎
			// 		});	
			// 	} catch (error) {
			// 	}
			// }
			this.instance.setGameEvent('init');
		}
		
	},
	vibrateShort(){
		this.addBossTitle('短震动');
		if(this.instance){
			this.instance.vibrateShort();
		}
	},
    vibrateLong(){
		this.addBossTitle('长震动');
		if(this.instance){
			this.instance.vibrateLong();
		}
	},
	vibrateCustom(time){
		this.addBossTitle('自定义震动'+time);
		if(this.instance){
			this.instance.vibrateCustom(time);
		}
	},
	/**
	 * 是否可以看视频
	 */
	getHaveVideo(){
		this.addBossTitle('是否可以看视频');
		if(this.instance){
			return this.instance.getHaveVideo();
		}
		return false;
	},
	/**
	 * 0 微信 1 原生 2 facebook  3 vivo 4 oppo 5 oppoH5 6 huawei 7 xiaomuh5 8 jintitoutiao 9 xiaomi 10 baidu 11 qq 12 qutoutiao 13 MagicH5
	 */
	getSysPlatform(){
		if(this.instance){
			return this.instance.getSysPlatform();
		}
		return -1;
	},
	setOpenId_uuid(){
		if(Userdefault.getStringForKey('lieyou_sdk_openid_uuid','') != ''){
			openid_uuid = Userdefault.getStringForKey('lieyou_sdk_openid_uuid','')
			return ;
		}
		var str = "";
		var char = ['0','1','2','3','4','5','6','7','8','9',
		'A','B','C','D','E','F','G','H','I','G',
		'K','L','M','N','O','P','Q','R','S','T',
		'U','V','W','X','Y','Z',
		'a','b','c','d','e','f','g','h','i','g',
		'k','l','m','n','o','p','q','r','s','t',
		'u','v','w','x','y','z'
			];
		for(var i = 0; i < 32;i++){
			str += char[parseInt(Math.random() * 62)];
		}
		openid_uuid = str;
		Userdefault.setDataForKey('lieyou_sdk_openid_uuid',str)
	},
	/**
	 * 初始化游戏数据 
	 */
	initGameData(){
		var winSize = cc.winSize;
		var widthS = winSize.height * 0.5625;
		if (winSize.width < widthS) {
			lieyou._SceneScale = winSize.width / widthS;
			lieyou._offsetY = winSize.height * (1 - winSize.width / widthS) / 2;
			lieyou._offsetX = winSize.width * (1 - winSize.width / widthS) / 2;
		}
	},
	/**
	 * 监听进入后台
	 */
	onHide:function(fun){
		if(this.instance)	
			this.instance.onHide(fun);
	},
	/**
	 * 监听后台返回游戏
	 */
	onShow(fun){
		if(this.instance)	
			this.instance.onShow(fun);
	},
	showMoreGameLoading(callBack = null){
		if(this.instance){	
			this.instance.showMoreGameLoading(callBack);
		}else{
			callBack();
		}
	},
	getHelpLevel(){
		if(this.instance){	
			return this.instance.getHelpLevel();
		}
		return -1;
	},
	/**
	 * 显示广告 要传位置wxBannerId
	 * showBanner({adUnitId:id,style:{left:0,top:0,width:300,height:105}})
	 */
	showBossKeyNode(){
		var self = this;
		// cc.loader.loadRes('SDK/module/BossKey/bossKey',function(err,res){
		var size = cc.winSize;
		var bN = lieyou_bossNode_prefab();
		self.bossNode = bN;
		var node = cc.director.getScene();
		node.addChild(bN);
		bN.x = size.width/2;
		bN.y = size.height/2;
		cc.game.addPersistRootNode(bN);
	},
	addBossTitle(title = ''){
		if(this.bossNode && lieyou_showDebug){
			this.bossNode.getComponent('BossKey_SDK').addTitle(title);
		}
	},
	showBanner:function(obj = {}){
		if(this.instance)	{
			this.instance._bannerAdStyle = obj;
			this.instance.showBanner(obj);
		}
	},
	/**
	 * 自定义广告obj(id:0,x:0,y:0,scale:0)
	 */
	showBannerCustom(obj = {}){
		this.addBossTitle('显示自定义banner');
		if(this.instance)	
		{
			this.instance._bannerAdStyle = obj;
			this.instance.showBannerCustom(obj);
		}
	},
	/**
	 * 显示底部广告 wxBannerId
	 */
	showBannerByBottom:function(id = ''){
		this.addBossTitle('显示底部banner');
		if(this.instance)	
		{
			this.instance._bannerAdStyle = {};
			this.instance.showBannerByBottom(id);
		}
	},
	/**
	 * 显示顶部广告 wxBannerId
	 */
	showBannerByTop:function(id = ''){
		this.addBossTitle('显示顶部banner');
		if(this.instance)	
		{
			this.instance._bannerAdStyle = {y:0};
			this.instance.showBannerByTop(id);
		}
	},
	/**
	 * 隐藏广告条
	 */
	hideBanner:function(){
		this.addBossTitle('隐藏banner');
		if(this.instance){
			this.instance.hideBanner();
			if(this.instance.moreGameBanner && this.instance.moreGameBanner.isValid){
				this.instance.moreGameBanner.destroy();
				this.instance.moreGameBanner = null;
			}
		}
	},
	addNativeAd(node = null){
		if(this.instance)	
			this.instance.addNativeAd(node);
	},
	custClickNative(node = null){
		if(this.instance)	
			this.instance.custClickNative(node);
	},
	/**
	 * 视频广告 wxVideoId function(){}
	 */
	showRewardedVideoAd: function(closeCallBack,closeCallBack2){
		this.addBossTitle('播放视频');
		if(typeof closeCallBack === "function") {
        }else{
			closeCallBack = closeCallBack2;
		}
		if(this.instance)	
		   this.instance.showRewardedVideoAd('',closeCallBack);
	},
	/**
	 * 获取微信授权 
	 */
	getAuthorize: function(){
		if(this.instance)
			this.instance.getAuthorize();
	},
	/**
	 * 微信登陆
	 */
	login: function(){
		if(this.instance)
			this.instance.login();
	},
	/**
	 * 添加本地复活卡
	 */
	addLocalResurr: function(){
		if(this.instance)
			this.instance.addLocalResurr();
	},
	/**
	 * 使用复活卡
	 */
	useResurr: function(){
		if(this.instance)
			this.instance.useResurr();
	},
	/**
	 * 删除邀请到的好友
	 */
	deleteInviteFriend(id){
		if(this.instance)
			this.instance.deleteInviteFriend(id);
	},
	/**
	 *  修改邀请好友状态
	 */
	modifyInviteFriend(friendId){
		if(this.instance)
			this.instance.modifyInviteFriend(friendId);
	},
	/**
	 * 获取邀请到的好友列表
	 */
	getInviteFriendData(flag,fun){
		if(this.instance)
			this.instance.getInviteFriendData(flag,fun);
	},
	
	/**
	 * 显示邀请到的好友
	 */
	showInviteFriend(_node,_callBack){
		if(this.instance)
			this.instance.showInviteFriend(_node,_callBack);
	},
	/**
	 * 显示邀请到的好友 已经领取过奖励的
	 */
	showInviteFriendFailure(_node){
		if(this.instance)
			this.instance.showInviteFriendFailure(_node);
	},
	/**
	 * 查看复活卡 返回复活卡个数 实时
	 */
	checkResurrNum: function(){
		if(this.instance)
			return this.instance.checkResurrNum();
			return 0;
	},
	/**
	 * 查看复活卡 返回复活卡个数 不是实时
	 */
	checkResurrNum_2: function(){
		if(this.instance)
			return this.instance.checkResurrNum_2();

		return 0;
	},
	/**
	 * 分享{name:游戏名,source:1,inviteFriend:bool,success:function(type){1 分享到群  2 个人},getGroupId:true} 
	 * source 1 转发 2 首页分享按钮 3 复活 4 炫耀 5 使用道具 6 双倍奖励 7 解锁 8 帮助 9 帮助成功 10 视频失败调用分享
	 */
	share: function(obj){
		if(this.instance)
			this.instance.share(obj);
	},
	shareHelp(level){
		if(this.instance)
			this.instance.shareHelp(level);
	},
	shareHelpSuccess(level){
		if(this.instance)
			this.instance.shareHelpSuccess(level);
	},
	/**
	 * 
	 */
	helpFriendSuccess(level){
		if(this.instance){
			this.instance.helpFriendSuccess(level);
		}
	},
	getIsHaveFriendHelpMe(level,fun){
		if(this.instance)
			this.instance.getIsHaveFriendHelpMe(level,fun);
	},
	
	
	/**
	 * 显示全部排行榜 {rankKey:key,node:node,closeFun:fun,orderStr:"false",x:0,y:0}
	 * orderStr 默认false
	 */
	showAllRankingLayer: function(obj){
		if(this.instance)
			this.instance.showAllRankingLayer(obj);
	},
	/**
	 * 显示失败排行榜 {rankKey:key,node:node,showAndHideNode:node,orderStr:"false",x:0,y:0}
	 */
	showFailRankingLayer: function(obj){
		if(this.instance)
			this.instance.showFailRankingLayer(obj);
	},
	/**
	 * 提交排行榜数据 key,score
	 */
	setRankingData: function(key,score){
		if(this.instance)
			this.instance.setRankingData(key,score);
	},
	/**
	 * 显示社区按钮{
            icon: 'white',//green  dark   light
            style: {
                left: 15,
                top: 15,
                width: 40,
                height: 40
            }
        }
	 */
	showForum:function(obj){
		if(this.instance)	
			this.instance.showForum(obj);
	},
	/**
	 * 隐藏社区按钮
	 */
	closeForum:function(){
		if(this.instance)
			this.instance.closeForum();
	},
	/**
	 * 跳转app
	 */
	jumpApp(data,url,page,num){
		if(this.instance)
			this.instance.jumpApp(data,url,page,num);
	},
	newJumpApp(obj = {}){
		if(this.instance)
			this.instance.newJumpApp(obj);
	},
	/**
	 * 显示自己广告		进入游戏
	 */
	showSpotByBegin(isHaveNative = false,top = 0){
		this.addBossTitle('插屏 开始');
		if(this.instance)
			this.instance.showSpotByBegin(isHaveNative,top);
	},
	/**
	 * 显示自己广告		暂停
	 */
	showSpotByPause(isHaveNative = false,top = 0){
		this.addBossTitle('插屏 暂停');
		if(this.instance)
			this.instance.showSpotByPause(isHaveNative,top);
	},
	/**
	 * 显示自己广告  	游戏结束
	 */
	showSpotByFinish(isHaveNative = false,top = 0){
		this.addBossTitle('插屏 结束');
		if(this.instance)
			this.instance.showSpotByFinish(isHaveNative,top);
	},
	/**
	 * 微信获取版本是否支持此方法 data = “1.6.6”版本号
	 */
	getSDKVersionCanUse:function(data){
		if(this.instance)
			return this.instance.getSDKVersionCanUse(data);
		return true;
	},

	/**
	 * 设置新玩家数据
	 */
	setNewPlayerData(){
		var beginGameNum = Userdefault.getIntForKey("comeGameNum",0);
		Userdefault.setDataForKey("comeGameNum",beginGameNum + 1);
		
		var newPlayer =  Userdefault.getBoolForKey(lieyou.Key_NewPlayer,true);//levelStar + level
		if (newPlayer) {
			var nowTime = parseInt(getTime()/1000);
			Userdefault.setDataForKey(lieyou.Key_OncePlayerTime,nowTime);
			Userdefault.setBoolForKey(lieyou.Key_NewPlayer,false);

			var time = getTimeDay();
			Userdefault.setDataForKey(lieyou.Key_OncePlayerTimeDay,time);
			
		}
	},
	/**
	 * 解析数据
	 */
	parseData(data,str){
		var a = data.split(',');
		for(var i = 0;i < a.length;i++) {
			if(a[i].split('wait:').length > 1) {
				if(a[i].split('wait:')[1] == str){
					return true;
				}
			}else if(a[i].split('waitL').length > 1) {
				var b = a[i].split('waitL')[1].split(':');
				var levelMax = Userdefault.getIntForKey("SDKGameMaxLevel",0);
				if(b[1] == str && levelMax > parseInt(b[0])) {
					 return true;
				}
			}else if(a[i].split('waitS').length > 1) {
				var b = a[i].split('waitS')[1].split(':');
				var scoreMax = Userdefault.getIntForKey("SDKGameMaxScore",0);
				if(b[1] == str && scoreMax > parseInt(b[0])) {
					 return true;
				}
			}else if(a[i].split('waitT').length > 1) {
				var b = a[i].split('waitT')[1].split(':');
				var time = Userdefault.getIntForKey(lieyou.Key_OncePlayerTime,0);
				var nowTime = parseInt(getTime()/1000);
				if(b[1] == str && nowTime - time > parseInt(b[0])) {
					 return true;
				}
			}else if(a[i].split('waitE').length > 1) {
				var b = a[i].split('waitE')[1].split(':');
				var num = Userdefault.getIntForKey("comeGameNum",0);
				if(b[1] == str && num > parseInt(b[0])) {
					 return true;
				}
			}else if(a[i].split('waitD').length > 1) {
				var b = a[i].split('waitD')[1].split(':');
				var time = Userdefault.getIntForKey(lieyou.Key_OncePlayerTimeDay,0);
				var nowTime = getTimeDay();
				if(b[1] == str && nowTime - time > parseInt(b[0])) {
					 return true;
				}
			}
		}
		return false;
	},
	gameMain(){
		this.addBossTitle('主页打点');
		if(this.instance)
			this.instance.setGameEvent('MainScene');
	},
	gameEventBegin(event = ''){
		this.addBossTitle('开始打点:'+event);
		if(this.instance)
			this.instance.setGameEvent(event,0);
	},
	gameEventFinish(event = ''){
		this.addBossTitle('结束打点:'+event);
		if(this.instance)
			this.instance.setGameEvent(event,1);
	},
	gameEvent(event = ''){
		this.addBossTitle('计次打点:'+event);
		if(this.instance)
			this.instance.setGameEvent(event);
	},
	//obj
	// {
	// 	title: '提示',
	// 	content: '这是一个模态弹窗',
	// 	success: fun,
	//  fail:fun
	//   }
	showModal(obj = {}){
		if(this.instance)
			this.instance.showModal(obj);
	},
	showToast(title = ''){
		lieyou_interface.showToast(title);
		// if(this.instance)
		// 	this.instance.showToast(title);
	},
	hideToast(){
		if(this.instance)
			this.instance.hideToast();
	},
	showLoading(title = ''){
		if(this.instance)
			this.instance.showLoading(title);
	},
	hideLoading(){
		if(this.instance)
			this.instance.hideLoading();
	},
	/**
	 * 游戏开始
	 */
	gameBeginLevel(level = -1,mode = "level"){
		if(mode.length>15){
			lieyou_SdkManager.showToast('模式最长15个字符');
		}
		this.addBossTitle('开始:'+mode+' '+level);
		lieyou_showLog("模式   mode =====  " + mode +"   游戏开始 level = " + level);
		if(this.instance)
			this.instance.jniLevel(level,mode,0);
	},
	/**
	 * 游戏失败
	 */
	gameFailLevel(level = -1,mode = "level"){
		if(mode.length>15){
			lieyou_SdkManager.showToast('模式最长15个字符');
		}
		this.addBossTitle('失败:'+mode+' '+level);
		lieyou_showLog("模式   mode =====  " + mode +"   游戏失败 level = " + level);
		if(this.instance)
			this.instance.jniLevel(level,mode,2);
	},
	/**
	 * 游戏过关
	 */
	gameFinishLevel(level = -1,mode = "level"){
		if(mode.length>15){
			lieyou_SdkManager.showToast('模式最长15个字符');
		}
		this.addBossTitle('过关:'+mode+' '+level);
		lieyou_showLog("模式   mode =====  " + mode +"   游戏过关 level = " + level);
		var levelMax = Userdefault.getIntForKey("SDKGameMaxLevel" + mode,0);
		if(level > levelMax)
			Userdefault.setDataForKey("SDKGameMaxLevel" + mode,level);
		
		if(this.instance)
			this.instance.jniLevel(level,mode,1);
	},
	/**
	 * 提交分数 无尽模式需要
	 */
	gameScore(mode,score){
		lieyou_showLog("模式   mode =====  " + mode +"   分数 score = " + score);
		var scoreMax = Userdefault.getIntForKey("SDKGameMaxScore" + mode,0);
		if(score > scoreMax)
			Userdefault.setDataForKey("SDKGameMaxScore" + mode,score);
	},//
	/**
	 * 添加提示框 
	 */
	addToast(_node,str,_callBack){
		if(this.instance)
			this.instance.addToast(_node,str,_callBack);
	},
	shareDialog(_node){
		if(this.instance)
			this.instance.shareDialog(_node);
		
	},
	addGetLocakCardDialog(_node){
		if(this.instance)
			this.instance.addGetLocakCardDialog(_node);
		
	},
	/**
	 * 获取在线参数
	 */
	getParamByOnline(key,defaultV){
		if(this.instance)
			return this.instance.getParamByOnline(key,defaultV);
	},
	/**
	 *加载网络图片 
	 */
	
	getOnlineSpriteFrame(url,fun){
		if(this.instance)
			this.instance.getOnlineSpriteFrame(url,fun);
	},

	/**
	 * 猜你喜欢{node:_node,x:x,y:y,align:0}//0 居中 -1 下 1 上
	 */
	showGuessYouLickOne(obj){
		if(this.instance)
			this.instance.showGuessYouLickOne(obj);
	},
	showGuessYouLickTow(obj){
		if(this.instance)
			this.instance.showGuessYouLickTow(obj);
	},
	
	returnHomeJumpGame(){
		if(this.instance)
			this.instance.returnHomeJumpGame();
	},

	/**
	 * 分享到群
	 */

	 // rueturn 1  表示成功 , -1 分享成功但是有限制  0  分享失败
	shareToCrowd: function (func, tag = "", time = 1, count = 1 ) {
		if (this.instance)
			this.instance.share({
				name: GameName, source: 5, success: function (type, id) {
					if (type == 1) {
						if(id){
							var key = "ShareToCrowd" + id + count + "_" + time + tag;
							var data = Userdefault.getStringForKey(key, "0,0").split(",");
							var num = parseInt(data[0]);
							var day = parseInt(data[1]);
							var newday = Math.floor(new Date().getTime() / 3600000);
							if (newday >= day + time) {
								num = 1;
								day = newday;
							} else {
								num++;
							}
							Userdefault.setDataForKey(key, num + "," + day);
							if (num <= count) {
								func(1);
							}
							else {
								func(-1);
							}
						}else{
							func(1);
						}
					} else {
						func(0);
					}
				}
			});
		// data.split(",");
	},


/**android ios */
	callAndroid(action){
		if(this.instance)
			this.instance.callAndroid(action);
	},
	callAndroid_2(action,funS){
		if(this.instance)
			this.instance.callAndroid_2(action,funS);
	},
	callPay(action,funS){
		if(this.instance)
			this.instance.callPay(action,funS);
	},
	isOpen(key){
		if(this.instance)
			return this.instance.isOpen(key);
	},
	getIsNative(){
		return this.getSysPlatform() == 1;
	},
	/**
	 * 子游戏回主页 安卓
	 */
	backHome(){
		if(this.instance)
			return this.instance.backHome();
	},
	/**
	 * 跳转子游戏 安卓
	 */
	/**
	 * 添加子游戏返回按钮 obj = {
	 * node:node,
	 * x:x,
	 * y:y,
	 * image:spriteFrame
	 * }
	 */
	addSmallGameReturnBtn(obj = {}){
		if(this.instance)
			this.instance.addSmallGameReturnBtn(obj);
	},
	gotoSmallGame(gameName){
		if(this.instance)
			return this.instance.gotoSmallGame(gameName);
	},
	gameAction(gameName){
		if(this.instance)
			return this.instance.gameAction(gameName);
	},
	initPhysics(url){
		var data = url;
        //cc.loader.loadRes(url, function(err, data){
            cc.game.config.groupList = data["group-list"];
            cc.game.config.collisionMatrix = data["collision-matrix"];

            cc.game._initConfig(cc.game.config);
        //});
	},
	/**
	 * obj  = {x:0,y:0,w:16,h:9}
	 */
	showPraise(){
		if(this.instance)
			this.instance.showPraise();
	},
	
  
	showNativeBanner(top){
		if(this.instance)
			this.instance.showNativeBanner(top);
	},
	hideNativeBanner(){
		if(this.instance)
			this.instance.hideNativeBanner();
	},
	//微信
	/**
	 * {callBack:fun}
	 */
	showRedPack(obj = {}){
		if(this.instance)
			this.instance.showRedPack(obj);
	},
	/**
	 *  obj {node:node,x:0,y:0}
	 */
    showRedIcon(obj = {}){
		if(this.instance)
			this.instance.showRedIcon(obj);
	},
	/**
	 *  obj {node:node,x:0,y:0}
	 */
	showRecommendIcon(obj = {}){
		if(this.instance)
			this.instance.showRecommendIcon(obj);
	},
	
	showGameRecommend(callBack = null){
		if(this.instance)
			this.instance.showGameRecommend(callBack);
	},
	showGameRecommendDialog(){},
	/**
	 * 0 没有分享 没有视频 1 分享 2 视频
	 */
	getShareOrViedo(){
		if(this.instance)
			return this.instance.getShareOrViedo();
		return 0;
	},
	getJumpBtnHaveMove(){
		if(this.instance)
			return this.instance.getJumpBtnHaveMove();
		return 0;
	},
	showGuessYouLike_3(obj){
		if(this.instance)
			this.instance.showGuessYouLike_3(obj);
	},
	/**
	 * node:跳过按钮 x:moveEndx  y:moveEndy
	 * {node:node,x:0,y:0} 
	 */
	jumpRefreshBanner(obj = {}){
		if(this.instance)
			this.instance.jumpRefreshBanner(obj);
	},

	setWorldRankData(score = 0,key = RankingKey){
		if(this.instance)
			this.instance.setWorldRankData(key,score);
	},

	getBaseData(){
        if(this.instance)
			this.instance.getBaseData();
		return {};
    },
    reload(){
		if(this.instance)
			this.instance.reload();
	},
	showShareVideoDialog(callBack = null){
		if(this.instance)
			this.instance.showShareVideoDialog(callBack);
	},
	addLuPingBtn(obj = {}){
		if(this.instance)
			this.instance.addLuPingBtn(obj);
	},
	shareVd(callBack = null){
		if(this.instance)
			this.instance.shareVd(callBack);
	},
	beginLuPing(time = 300,callBack = null){
		if(this.instance)
			this.instance.beginLuPing(time,callBack);
    },
    pauseLuPing(){
        if(this.instance)
			this.instance.pauseLuPing();
    },
    resumeLuPing(){
        if(this.instance)
			this.instance.resumeLuPing();
    },
    stopLuPing(isShare = true){
		if(this.instance)
			this.instance.stopLuPing(isShare);
	},
	
	//xiaomi
	/**
	 * 桌面是否已经有快捷方式
	 */
	hasInstalled(callBack = null){
		if(this.instance)
			this.instance.hasInstalled(callBack);
	},
	/**
	 * 提示创建快捷方式
	 */
    install(obj = {}){
		if(this.instance)
			this.instance.install(obj);
	},

	//
	/**
	 * obj {callBack:fun} 会隐藏banner
	 */
	showRecommendBegin(obj = {}){
		if(this.instance){
			this.instance.showRecommendBegin(obj);
		}else{
			if(obj.callBack){
				obj.callBack();
			}
		}
	},
	/**
	 * obj {callBack:fun} 会隐藏banner
	 */
    showRecommendFinish(obj = {}){
		if(this.instance){
			this.instance.showRecommendFinish(obj);
		}else{
			if(obj.callBack){
				obj.callBack();
			}
		}
	},
	/**
	 * obj {callBack:fun} 会隐藏banner
	 */
	showArardGoldGrid(obj = {}){
		if(this.instance){
			this.instance.showArardGoldGrid(obj);
		}else{
			if(obj.callBack){
				obj.callBack();
			}
		}
	},
	/**
	 * obj {callBack:fun} 会隐藏banner
	 */
    showArardGoldStrip(obj = {}){
		if(this.instance){
			this.instance.showArardGoldStrip(obj);
		}else{
			if(obj.callBack){
				obj.callBack();
			}
		}
	},
	/**
	 * callBack url node x y
	 */
	addInstallShortcut(obj = {}){
		if(this.instance){
			this.instance.addInstallShortcut(obj);
		}
	},
	showInstallShortcutDialog(){
		if(this.instance){
			this.instance.showInstallShortcutDialog();
		}
	},
	showRecommendAwardIcon(obj = {}){
		if(this.instance){
			this.instance.showRecommendAwardIcon(obj);
		}
	},
	setDataForHttp(url,fun){
		if(this.instance)
			this.instance.setDataForHttp(url,fun);
	},
	/**
	 * 显示更多游戏 {node:node,x:0,y:0,runType:1,side:130}
	 */
	showMoreGameByIcon: function(obj = {}){
		this.addBossTitle('互推 icon');
		if(this.instance){
			this.instance.showMoreGameByIcon(obj);
		}
	},
	showMoreGameIcon: function(){
		if(this.instance){
			this.instance.showMoreGameIcon();
		}
	},
	hideMoreGameIcon: function(){
		if(this.instance){
			this.instance.hideMoreGameIcon();
		}
	},
	/**
	 * 显示更多游戏 {node:node,x:0,y:0} 170
	 */
	showMoreGameByBanner: function(obj = {}){
		this.addBossTitle('互推 banner');
		if(this.instance){
			this.instance.showMoreGameByBanner(obj);
		}
	},
	/**
	 * 显示更多游戏 {node:node,x:0,y:0}
	 */
	showMoreGame:function(obj = {}){
		this.addBossTitle('互推 更多游戏');
		if(this.instance)
			this.instance.showMoreGame(obj);
	},
	/**
	 * 显示更多游戏 {y:0,sideType_right:false,isPersist:false}
	 */
	showMoreGameSide:function(obj = {}){
		this.addBossTitle('互推 侧边栏');
		if(this.instance)
			this.instance.showMoreGameSide(obj);
	},
	/**
	 * 显示更多游戏 {node:node,x:0,y:0} h 166
	 */
	showMoreGameMiddle_one:function(obj = {}){
		if(!obj.node){
			lieyou_SdkManager.showToast('showMoreGameMiddle_one 参数不对');
			return false;
		}
		if(obj.scale == undefined){
			obj.scale = this._SceneScale;
		}
		this.addBossTitle('互推 一行 高度183');
		if(this.instance)
			return this.instance.showMoreGameMiddle_one(obj);
		return false;
	},
	//h 306
	showMoreGameMiddle_two:function(obj = {}){
		if(!obj.node || !obj.bgPath){
			lieyou_SdkManager.showToast('showMoreGameMiddle_two 参数不对');
			return false;
		}
		if(obj.scale == undefined){
			obj.scale = this._SceneScale;
		}
		this.addBossTitle('互推 两行 高度500');
		if(this.instance)
			return this.instance.showMoreGameMiddle_two(obj);
		return false;
	},
	//h 446
	showMoreGameMiddle_three:function(obj = {}){
		if(!obj.node){
			lieyou_SdkManager.showToast('showMoreGameMiddle_three 参数不对');
			return false;
		}
		if(obj.scale == undefined){
			obj.scale = this._SceneScale;
		}
		this.addBossTitle('互推 三行 高度500');
		if(this.instance)
			return this.instance.showMoreGameMiddle_three(obj);
		return false;
	},
	setadtrack(adid,location){
		if(this.instance)
			this.instance.setadtrack(adid,location);
	},
	setOperTrack(obj){
		if(this.instance)
			this.instance.setOperTrack(obj);
	},
	/**
	 * 显示更多游戏 {node:node,x:0,y:0}
	 */
	showAppBox(obj = {}){
		if(!obj.node){
			lieyou_SdkManager.showToast('showAppBox 参数不对');
			return;
		}
		if(this.instance)
			this.instance.showAppBox(obj);
	},
	/**
	 * 
	 * @param {key:"",defaultValue} obj 
	 */
	getParamByKey(obj = {}){
		if(!obj.key){
			lieyou_SdkManager.showToast('getParamByKey 参数不对');
			return undefined;
		}
		if(this.instance)
			return this.instance.getParamByKey(obj);
		return obj.defaultValue?obj.defaultValue:undefined;
	},
	// node/1
	showNativeAd_small(obj = {}){
		if(!obj.node || !obj.bgPath){
			lieyou_SdkManager.showToast('showNativeAd_small 参数不对');
			return false;
		}
		if(obj.scale == undefined){
			obj.scale = this._SceneScale;
		}
		this.addBossTitle('显示原生广告小 600*150');
		if(this.instance)
			return this.instance.showNativeAd_small(obj);
	},
	// node/1
	showNativeAd_big(obj = {}){
		if(!obj.node || !obj.bgPath){
			lieyou_SdkManager.showToast('showNativeAd_big 参数不对');
			return false;
		}
		if(obj.scale == undefined){
			obj.scale = this._SceneScale;
		}
		this.addBossTitle('显示原生广告大 600*410');
		if(this.instance)
			return this.instance.showNativeAd_big(obj);
	},
	// callBack/0 spriteFrame/0
	showNativeAd_load(obj = {}){
		if(this.instance)
			return this.instance.showNativeAd_load(obj);
	},
	hideMoreGameSide(){
		this.addBossTitle('隐藏侧边栏');
		if(this.instance)
			return this.instance.hideMoreGameSide();
	},
	getScreenshot(obj = {}){
		if(this.instance)
			return this.instance.getScreenshot();
	},
	saveImageToPhotosAlbum(obj = {}){
		if(!obj.node){
			lieyou_SdkManager.showToast('saveImageToPhotosAlbum 参数不对');
			return;
		}
		if(this.instance)
			this.instance.saveImageToPhotosAlbum(obj);
	},
	addListenerBackKey(obj = {}){
		if(!obj.node){
			lieyou_SdkManager.showToast('addListenerBackKey 参数不对');
			return;
		}
		
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function (keyCode, event) {
				event.stopPropagation();
				switch (keyCode) {
					case cc.macro.KEY.back:
					case 27:
						if(obj.callBack){
							obj.callBack();
						}else{
							lieyou_SdkManager.callAndroid(ACTION_EXIT_BACK);
						}
						break;
				}
            }
        }, obj.node);
	},
	showISBN(obj = {}){
		if(this.instance)
			this.instance.showISBN(obj);
	},
	hideISBN(){
		if(this.instance)
			this.instance.hideISBN();
	},
	showUserAgreement(obj = {}){
		if(this.instance)
			this.instance.showUserAgreement(obj);
	},
	showMoreGameGrid(){
		if(this.instance)
			this.instance.showMoreGameGrid();
	},
	addRedPackIcon(obj){
		if(!obj.node){
			lieyou_SdkManager.showToast('addRedPackIcon 参数不对');
		}
		if(this.instance)
			this.instance.addRedPackIcon(obj);
	},
	addRedPackDialog(){
		if(this.instance)
			this.instance.addRedPackDialog();
	},
	addTakeOutIcon(obj){
		if(!obj.node){
			lieyou_SdkManager.showToast('addRedPackIcon 参数不对');
		}
		if(this.instance)
			this.instance.addTakeOutIcon(obj);
	},
}

window.lieyou_showLog = function(res){
	if(lieyou_showDebug){
		console.log("lieyoulog---",res);
	}
}
window.lieyou_load = function(url,callBack){
	if(url == ''){
		return;
	}
	var urlLocal = 'SDK/lieyou_sdkRes/'+url;
	
    cc.loader.loadRes(urlLocal,(err,res)=>{
		if(err){
			return;
		}
		try {
			callBack(err,res);
		} catch (error) {
			lieyou_showLog('loadRes err:'+error);
		}
    });
}

window.lieyou_loadOnline = function(url,callBack){
	if(url == "") {
		return;
	}
	var loadFile = {
		url: url,
		type: "image"
	};
	cc.loader.load(loadFile, function (err, res) {
		if (err) {
			return;
		}
		try {
			callBack(err,res);
		} catch (error) {
			lieyou_showLog('loadOnline  err:'+error);
		}
	});
}