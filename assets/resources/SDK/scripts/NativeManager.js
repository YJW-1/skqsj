
//bcdaf920-3e18-49
window.ACTION_SHARE = 1100;
window.ACTION_SHARE_SUCCESS = 1101;
window.ACTION_SHARE_FAIL = 1102;

window.ACTION_RATE = 1201;
window.ACTION_RATE_SYS = 1202;

window.ACTION_EXIT = 1301;
window.ACTION_EXIT_BACK = 1302;

window.ACTION_AD_PAUSE = 2000;
window.ACTION_AD_RESULT = 2001;
window.ACTION_MORE = 2002;
window.ACTION_AD_WATCH = 2200;

window.ACTION_RANKS = 3000;
window.ACTION_RANKS_LOGIN = 3001;
window.ACTION_RANKS_SUBMIT = 3002;
window.ACTION_RANKS_SUBMIT_ByName = 3003;

window.ACTION_TO_APP = 2003;
window.ACTION_TO_APP_RANDOM = 2008;
window.ACTION_TO_WECHAT = 2004;
window.ACTION_TO_WECHAT_AUTO = 2005;


window.ACTION_ATTENTION_WECHAT = 2006;
window.ACTION_EXCHANGE_CODE = 2007;
window.KEY_EXCHANGE = "exchange_code";
window.KEY_OPEN_VIDEO = "isOpenVideo";
window.KEY_OPEN_FREE_GOLD = "show_free";
window.KEY_OPEN_MOREGAME = "moreGame_code";
window.KEY_OPEN_ABOUT = "about_code";
window.KEY_IS_SHENHE = "isAudit";
window.KEY_IS_OPENPAY = 'isOpenPay';
window.ACTION_BANNER_SHOW = 2102;
window.ACTION_BANNER_HIDE = 2103;

window.ACTION_RATE_COINS = 1997;

window.ACTION_FEEDBACK = 1110;

window.STATE_PAUSE = 10;
window.STATE_RESUME = 20;

window.cpp_CallByLost = function(type) {
    
};

window.cpp_Calljs = function(type, YesOrNo){
        // cc.game.resume();
        if(YesOrNo){
            if(lieyou_SdkManager.instance.payCallBack){
                lieyou_SdkManager.instance.payCallBack();
            }
            if(lieyou_SdkManager.instance.playVDCallBack){
                lieyou_SdkManager.instance.playVDCallBack(1);
            }   
        }else{
            if(lieyou_SdkManager.instance.playVDCallBack){
                lieyou_SdkManager.instance.playVDCallBack(0);
            } 
        }
        lieyou_SdkManager.instance.payCallBack = null;
        lieyou_SdkManager.instance.playVDCallBack = null;
};

let NativeManager = cc.Class({
	extends: require('BaseManager'),
	properties:{
        payCallBack:null,
        playVDCallBack:null,
    },
    getHaveVideo(){
        if(this.isOpen(KEY_OPEN_VIDEO)){
            return true;
        }
        return false;
    },
    getSysPlatform_string(){
		return 'native';
    },
    getSysPlatform(){
		return 1;
	},
    setOnlineData(data){
        if(data.native){
            var adData = {};
            if(data.native.theme){
                adData.theme = data.native.theme;
            }
            if(data.native.crossSwitch){
                adData.crossSwitch = data.native.crossSwitch;
            }
            if(data.native.bizData){
                adData.bizData = data.native.bizData;
            }
            if(data.native.ad_datas){
                adData.ad_datas = data.native.ad_datas;
            }
            if(data.native.switch){
                adData.switch = data.native.switch;
            }
            if(this.isShowCross){
                this.setAdData(adData);
            }
        }
    },
    getStringValue(key){
        if(cc.sys.os == cc.sys.OS_ANDROID){
            return jsb.reflection.callStaticMethod("com/util/JsUtil","getStringValue", "(Ljava/lang/String;)Ljava/lang/String;",key);
        }
        return "";
    },
    setISBN(){
        try {
            var isbn = this.getStringValue("isbn");
            var isbn2 = isbn.split("-");
            isbn = "";
            for(var i = 0;i<isbn2.length;i++){
                isbn = isbn+isbn2[i];
                if(i != isbn2.length-1){
                    isbn = isbn+"\n";    
                }
            }
            this._ISBN = isbn;
        } catch (error) {
        }
    },
    init: function(obj){
        this._super();
        this.base_IsShenHe = this.isOpen(KEY_IS_SHENHE);
        this.isShowCross = this.isOpen("isCross");
        this.setISBN();
        this.initOnlineData();
    },
    vibrateShort(){
        this.vibrateCustom(30);
    },
    vibrateLong(){
        this.vibrateCustom(100);
    },
    vibrateCustom(time){
        if(cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod("com/util/JsUtil","Vibrate", "(I)V",time);
        }
    },
    hideISBN(){
        if(this._isbnNode && this._isbnNode.isValid){
            this._isbnNode.destroy();
            this._isbnNode = null;
        }
    },
    showISBN(obj){
        if(this._isbnNode && this._isbnNode.isValid){
            this.hideBanner();
            return;
        }
        if(this._ISBN && this._ISBN != ""){
            this._isbnNode = new cc.Node();
			cc.director.getScene().addChild(this._isbnNode);
			let labelNode = new cc.Node();
			let bg = new cc.Node();
			this._isbnNode.addChild(bg);
			this._isbnNode.addChild(labelNode);
			this._isbnNode.anchorY = 0;
			labelNode.anchorY = 0;
			bg.anchorY = 0;
            this._isbnNode.x = cc.winSize.width/2;
            let label = labelNode.addComponent(cc.Label);
            label.string = this._ISBN;
            obj.color && (labelNode.color = obj.color);
            label.fontSize = obj.size?obj.size:22;
            label.lineHeight = obj.size?(obj.size+2):24;
			label.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
			label.verticalAlign = cc.Label.VerticalAlign.BOTTOM;
			bg.addComponent(cc.Sprite);
			bg.opacity = 100;
			lieyou_load('q_ad/oppo_native_insters_layerBg.png', (err, texture) => {
				bg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
				bg.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
				bg.width = cc.winSize.width;
				bg.height = labelNode.height;
				cc.log(labelNode.height)
            });
            labelNode.scale = lieyou_SdkManager._SceneScale;
            this.hideBanner();
        }
    },
    
    showNativeBanner(top){
        lieyou_showLog("========native  show Native Banner =  top:"+top);
        if(cc.sys.os == cc.sys.OS_IOS){
            jsb.reflection.callStaticMethod("MyManager","showNativeView:",top);
        }else if(cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod("com/util/JsUtil","showNativeView", "(F)V",top);
        }
    },
    hideNativeBanner(){
        lieyou_showLog("========native  hide Native Banner = ");
        if(cc.sys.os == cc.sys.OS_IOS){
            jsb.reflection.callStaticMethod("MyManager","closeNativeView:",0);
        }else if(cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod("com/util/JsUtil","closeNativeView", "()V");
        }
    },
    showPauseAd(isHaveNative,top){
        lieyou_showLog("========native  show Native showPauseAd = isHaveNative:"+isHaveNative+" top:"+top);
        if(cc.sys.os == cc.sys.OS_IOS){
            jsb.reflection.callStaticMethod("MyManager","showPauseAd:showPos:",isHaveNative,top);
        }else if(cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod("com/util/JsUtil","showPauseAd", "(ZF)V",isHaveNative,top);
        }
    },
    showResultAd(isHaveNative,top){
        lieyou_showLog("========native  show Native showResultAd = isHaveNative:"+isHaveNative+" top:"+top);

        if(this.showPraise()){
            if(cc.sys.os == cc.sys.OS_IOS){
                jsb.reflection.callStaticMethod("MyManager","showResultAd:showPos:",false,top);
            }else if(cc.sys.os == cc.sys.OS_ANDROID){
                jsb.reflection.callStaticMethod("com/util/JsUtil","showResultAd", "(ZF)V",false,top);
            }
            return; 
        }
        if(cc.sys.os == cc.sys.OS_IOS){
            jsb.reflection.callStaticMethod("MyManager","showResultAd:showPos:",isHaveNative,top);
        }else if(cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod("com/util/JsUtil","showResultAd", "(ZF)V",isHaveNative,top);
        }
    },
    showSpotByBegin(isHaveNative,top){
        lieyou_showLog("========native begin spot = ");
    },
    showSpotByPause(isHaveNative,top){
        this.showPauseAd(isHaveNative,top);
    },
    showSpotByFinish(isHaveNative,top){
        this.showResultAd(isHaveNative,top);
    },
    callPay(action,funS){
        lieyou_showLog("======== native callPay action = " + action);
        // cc.game.pause();
        this.payCallBack = funS;
        if(cc.sys.os == cc.sys.OS_IOS){
            jsb.reflection.callStaticMethod("MyManager","callPay:",action);
        }else if(cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod("com/util/JsUtil","callPay", "(I)V",action);
        }
    },
    
    callAndroid(action){
        lieyou_showLog("======== native callAndroid action = " + action);
        if(cc.sys.os == cc.sys.OS_IOS){
            jsb.reflection.callStaticMethod("MyManager","callAndroid:",action);
        }else if(cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod("com/util/JsUtil","callAndroid", "(I)V",action);
        }
    },

    callAndroid_2(action,funS){
        lieyou_showLog("======== native callAndroid_2 action = " + action);
        this.playVDCallBack = funS;
        if(cc.sys.os == cc.sys.OS_IOS){
            jsb.reflection.callStaticMethod("MyManager","callPay:",action);
        }else if(cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod("com/util/JsUtil","callPay", "(I)V",action);
        }
    },
    //是否可以显示 开关
    isOpen(key){
        lieyou_showLog("======== native isopen key = " + key);
        var ss = 0;
        if(cc.sys.os == cc.sys.OS_IOS){
            ss = jsb.reflection.callStaticMethod("MyManager","getValue2:",key);
        }else if(cc.sys.os == cc.sys.OS_ANDROID){
            ss = jsb.reflection.callStaticMethod('com/util/JsUtil','getValue2','(Ljava/lang/String;)I',key);
        }
        ss = parseInt(ss);
        if(ss == 1){
            return true;
        }else{
            return false;
        }
    },
    isOpenInt(key){
        lieyou_showLog("======== native isopen key = " + key);
        var ss = 0;
        if(cc.sys.os == cc.sys.OS_IOS){
            ss = jsb.reflection.callStaticMethod("MyManager","getValue2:",key);
        }else if(cc.sys.os == cc.sys.OS_ANDROID){
            ss = jsb.reflection.callStaticMethod('com/util/JsUtil','getValue2','(Ljava/lang/String;)I',key);
        }
        ss = parseInt(ss);
        return ss;
    },
    backHome(){
        cc.eventManager.removeListeners(cc.EventListener.KEYBOARD);
        //cc.audioEngine.stopAll();
        
        setTimeout(() => {
            cc.audioEngine.stopAll();
            mainScneeFromSmallGame = true;
            // cc.director.loadScene(mainGameScene); 

        //cc.sys.localStorage.setItem("ly_LoadingScene",cc.director.getScene().name);
        // cc.director.emit("ly_MainGameScene");

        var searchPaths = ["assets/"];
        lieyou_showLog("--------------->searchPaths" + JSON.stringify(searchPaths));
        jsb.fileUtils.setSearchPaths(searchPaths);

            window.require("main.js");
        },200);
    
    },
    
    share(obj){
        this.callAndroid(ACTION_SHARE);
    },

    showRewardedVideoAd(id,callBack){
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
        if(this._isbnNode && this._isbnNode.isValid){
            lieyou_showLog("显示版号信息 不能显示banner");
            return;
        }
        if(this._showBanner){
            lieyou_showLog("已经显示banner 不能重复调用");
            return;
        }
        this._showBanner = true;
        this.callAndroid(ACTION_BANNER_SHOW);
    },
    hideBanner(){
        this._showBanner = false;
        this.callAndroid(ACTION_BANNER_HIDE);
    },
    
    showRate(){
        this.callAndroid(ACTION_RATE);
    },
    /**
     * 添加好评窗口
     */
    showPraise(){
        if(Userdefault.getIntForKey("SDKShowPraiseNum",0) > 5){
            return false;
        }
        if(Userdefault.getBoolForKey("alreadyPraise",false)){
            return false;
        }
        if(!this.isOpen("isShowRate")){
            return false;
        }

        var interval = this.isOpenInt("rate_interval");
        interval=interval>0?interval:3;
        var once = this.isOpenInt("rate_index");
        once = once>0?once:3;
		var count = Userdefault.getIntForKey("praise_game", 0);
		Userdefault.setDataForKey("praise_game", count + 1);
		if (count >= once - 1 && (count - once - 1) % interval == 0) {
            var num = Userdefault.getIntForKey("SDKShowPraiseNum",0);
            Userdefault.setDataForKey("SDKShowPraiseNum",num+1);
            // cc.loader.loadRes('SDK/module/praise/praiseDialog',function(err,res){
                var fNode = cc.director.getScene();
                var node = lieyou_native_praiseDialogPrefab(); 
                node.x = cc.winSize.width/2;
                node.y = cc.winSize.height/2;
                fNode.addChild(node);  
            // })
            return true;
        }
        return false;
    },

    /**
     * 六边形消除 HexEliminate_lbxxx
     * 皇后吉祥 HScene_hhjx
     * 1010消除 GameScene_1010
     * 合成到z game2_A_Z
     * 蛇蛇与白块 BallAndBlock_Game
     * 蛇蛇设计方块 SnakeShoot_Home
     * 钢琴块3d Block_Game
     * 白块儿装b版 BlockZB_Game
     * 2048方块射击 LoginScene_2048
     * 物理弹球 QQBall_Home
     */
    gotoSmallGame(gameName){
        cc.eventManager.removeListeners(cc.EventListener.KEYBOARD);
        setTimeout(() => {
            cc.audioEngine.stopAll();
            window.mainGameScene=cc.director.getScene().name;
            cc.sys.localStorage.setItem("ly_LoadingScene",cc.director.getScene().name);
            lieyou_showLog("========native gameScene = " + gameName);
            
            this.gameAction(gameName);

            var searchPaths = ["SmallGame/" + gameName + "/"];
            lieyou_showLog("--------------->searchPaths" + JSON.stringify(searchPaths));
            jsb.fileUtils.setSearchPaths(searchPaths);
            lieyou_showLog(jsb.fileUtils.getSearchPaths());

            window.require("main.js");
        }, 200);
    },
    gameAction(gameName){
        lieyou_showLog("========native gameName = " + gameName);
        if(cc.sys.os == cc.sys.OS_IOS){
            jsb.reflection.callStaticMethod("MyManager","gameAction:",gameName);
        }else if(cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod("com/util/JsUtil","gameAction", "(Ljava/lang/String;)V",gameName);
        }
    },
    jniLevel(level,mode,action){
        lieyou_showLog("========native jniLevel = " + ' mode = '+ mode +' level = '+ level+' action = ' + action);
        if(cc.sys.os == cc.sys.OS_IOS){
            jsb.reflection.callStaticMethod("MyManager","callLevel:level:action:",mode,level,action);
        }else if(cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod("com/util/JsUtil","callLevel", "(Ljava/lang/String;II)V",mode,level,action);
        }
    },
    newJumpApp(obj){
        if(obj.success){
            obj.success();
        }
        obj.umid = oppoGetOnlineDataId;
        if(cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod("com/util/JsUtil","startWeb", "(Ljava/lang/String;)V",JSON.stringify(obj.data));
        }
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
    },
    showUserAgreement(obj){
        var color = obj.color?obj.color:cc.Color.WHITE;
        var fNode = obj.node;
        var node = new cc.Node();
        fNode.addChild(node);
        node.scale = lieyou_SdkManager._SceneScale;
        var userBg = new cc.Node();
        var userBg2 = new cc.Node();
        var user_1 = new cc.Node();
		var user_2 = new cc.Node();
		var user_3 = new cc.Node();
		userBg.color = color;
		userBg2.color = color;
		user_1.color = color;
        user_2.color = color;
        user_3.color = color;
        node.addChild(userBg);
        node.addChild(userBg2);
        node.addChild(user_1);
        node.addChild(user_2);
        node.addChild(user_3);
        userBg.x = -72;
        userBg2.x = -72;
        user_1.x = 0;
        user_2.x = 180;
        user_3.x = 150;
        userBg.y = 0;//-20
        userBg2.active = false;
        user_3.active = false;
        userBg2.y = -userBg.y;
        user_1.y = userBg.y;
        user_2.y = userBg.y;
        user_3.y = -userBg.y;


        userBg.addComponent(cc.Sprite);
        userBg2.addComponent(cc.Sprite);
        user_1.addComponent(cc.Sprite);
        user_2.addComponent(cc.Sprite);
        user_3.addComponent(cc.Sprite);

        lieyou_load('native/userBg.png', (err, texture) => {
            userBg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        });
        lieyou_load('native/userBg_2.png', (err, texture) => {
            userBg2.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        });
        lieyou_load('native/user_1.png', (err, texture) => {
            user_1.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        });
        lieyou_load('native/user_2.png', (err, texture) => {
            user_2.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        });
        lieyou_load('native/user_3.png', (err, texture) => {
            user_3.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
		});
		
		user_1.addComponent(cc.Button);
		user_2.addComponent(cc.Button);
		user_3.addComponent(cc.Button);
		user_1.on("click", function(event){
			jsb.reflection.callStaticMethod("com/util/JsUtil","startProtocol", "(I)V",0);
		}, );
		user_2.on("click", function(event){
			jsb.reflection.callStaticMethod("com/util/JsUtil","startProtocol", "(I)V",1);
        }, );
        user_3.on("click", function(event){
			jsb.reflection.callStaticMethod("com/util/JsUtil","setFeedback", "()V");
		}, );
    }

})
module.exports = NativeManager;




