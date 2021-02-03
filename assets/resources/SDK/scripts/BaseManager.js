window.lieyou_showDebug = false;
window.lieyou_moreGame_type = 0;
window.lieyou_showMoreGameNum = 7;
let BaseManager = cc.Class({
    properties: {
        qGMoreGameData: [],
        qGMore_isRun: true,
        qGMore_refreshTime: 3,
        qGMore_mainSwitch: 1,//0
        qGMore_floatPlay: 1,
        qGMore_bannerPlay: 1,
        qGMore_morePlay: 1,
        qGMore_dialogPlay: 1,
        qGMore_dialogPlay2: 1,
        qGMore_dialogPlay3: 1,
        qGMore_iconPlay: 1,
        qGMore_biz_floatPlay: [],
        qGMore_biz_bannerPlay: [],
        qGMore_biz_morePlay: [],
        qGMore_biz_dialogPlay: [],
        qGMore_biz_dialogPlay2: [],
        qGMore_biz_dialogPlay3: [],
        qGMore_dialogPlayRunType: [],
        qGMore_biz_iconPlay: [],
        dataVersion: 0,
        platformVersionCode: 0,
        androidVersion: '',
        model: '',
        networkType: 'none',
        region: '',
        isMoreInfo: true,
        moreGameIconArr: [],
        base_IsShenHe: false,
    },

    init: function (obj) {
        this.newPlayer = lieyou_Userdefault.getBoolForKey("lieyou_newPlayer", true);
        lieyou_Userdefault.setBoolForKey("lieyou_newPlayer", false);
        // this.qGMoreGameData = [{"gameName":"公主甜心校园美发屋","id":2008,"jumpData":{"appId":"com.lew.game.hairsalon.kyx.nearme.gamecenter","path":""},"uri":"http://h5.igame58.com/r_icon/hellostickman.png"}]
        this._canShowMoreGameGrid = true;
        this._moreGameOrNativeType = 0;
        this._moreGameShowNative = false;
        this._nativeLoadDialogTime = 3;
        this._initObj = obj;
        this._showSpotMaxCount = 0;
        this._showSpotMaxCountRefreshTime = 1;
        this._showSpotCount = Userdefault.getIntForKey("lieyou_showSpotCount", 0);
        this._showSpotTime = Userdefault.getIntForKey("lieyou_showSpotTime", 0);
        var dayTime = getTimeDay();
        if (dayTime != Userdefault.getIntForKey('lieyou_initDay', 0)) {
            this._showSpotCount = 0;
            this._showSpotTime = 0;
            Userdefault.setDataForKey('lieyou_showSpotCount', 0);
            Userdefault.setDataForKey('lieyou_showSpotTime', 0);
            Userdefault.setDataForKey('lieyou_initDay', dayTime);
        }

        this.eventFlag = Userdefault.getIntForKey('lieyou_eventFlag', -1);
        this.GameEventBackstageTime = []
        this.haveTrack = Userdefault.getIntForKey('lieyou_haveTrack', 0);
        this.loginBaseUrl = 'https://app.igame58.com/lieyou/client';
        if ((window.lieyou_loginUrl && window.lieyou_loginUrl != "old") || this.getSysPlatform_string() == "wx") {
            // this.loginBaseUrl = 'https://qgame.igame58.com/lieyou/api';
        }
        this.trackBaseUrl = this.loginBaseUrl;
        this.eventBeginTime = [];
        this.qGMore_dialogPlayRunType = [0, 0, 0, 0];
        this._showSpotStartTime = 10;
        this._installShortcutTime = 60;
        this._installShortcutStartTime = 0;
        this._beginGameTime = parseInt(getTime() / 1000);
        this._upInstallShortcutTime = 0;
        this.levelBeginTime = 0;
        this.hideTime = 0;
        this.palyGameBackstageTime = 0;
        this.onHide(() => {
            this.hideTime = parseInt(getTime() / 1000);
        });
        this.onShow(() => {
            var time = parseInt(getTime() / 1000) - this.hideTime;
            this.palyGameBackstageTime += time;
            var eventKeys = Object.keys(this.GameEventBackstageTime);
            for (let i = 0; i < eventKeys.length; i++) {
                this.GameEventBackstageTime[eventKeys[i]] += time;
            }
        });
    },
    getVersion() {
        return -1;
    },
    showAppBox(obj) { },
    getSysPlatform() { return -2; },
    vibrateShort() { },
    vibrateLong() { },
    vibrateCustom(time) {
        this.vibrateLong();
    },
    hasInstalled(callBack) { },
    install(obj) { },
    getBaseData() {
        return {};
    },
    reload() { },
    /**
     *  微信
     */

    showMoreGameLoading(callBack) {
        callBack();
    },
    showRedPack(obj) { },
    showRedIcon(obj) { },
    showRecommendIcon(obj) { },
    showGameRecommend(callBack) { },
    onHide(fun) { },
    onShow(fun) { },
    getHelpLevel() { return -1; },
    showBanner(obj) { },
    showBannerCustom(obj) { },
    showBannerByBottom(id) { },
    showBannerByTop(id) { },
    hideBanner() { },
    showRewardedVideoAd(id, closeCallBack) {
        closeCallBack(true);
    },
    addNativeAd(node) { },
    custClickNative(node) { },
    getAuthorize() { },
    login() { },
    addLocalResurr() { },
    useResurr() { },
    modifyInviteFriend(friendId) { },
    deleteInviteFriend(id) { },
    getInviteFriendData(flag, fun) { },
    showInviteFriend(_node, _callBack) { },
    showInviteFriendFailure(_node) { },
    checkResurrNum() { return 0; },
    checkResurrNum_2() { return 0; },
    share(obj) { },
    shareHelp(level) { },
    shareHelpSuccess(level) { },
    helpFriendSuccess(level) { },
    getIsHaveFriendHelpMe(level, fun) { },

    showAllRankingLayer(obj) { },
    showFailRankingLayer(obj) { },
    setRankingData(key, score) { },
    setWorldRankData(key, score) { },
    showForum(obj) { },
    closeForum() { },
    jumpApp(data, url, page, num) { },
    newJumpApp(obj) { },
    showSpotByBegin(isHaveNative, top) { },
    showSpotByPause(isHaveNative, top) { },
    showSpotByFinish(isHaveNative, top) { },
    showPraise() { },
    getParamByOnline(key, defaultV) { return null; },
    getSDKVersionCanUse(data) { return true; },
    addToast(_node, str, _callBack) {

    },
    shareDialog(_node) { },
    addGetLocakCardDialog(_node) { },
    getOnlineSpriteFrame(url, fun) {
        if (url == "") {
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
    /**
     * {node:_node,x:x,y:y,align:0}//0 居中 -1 下 1 上
     */
    showGuessYouLickOne(obj) {

    },
    /**
     * {node:_node,x:0,y:0,align:0}//0 居中 -1 下 1 上
     */
    showGuessYouLickTow(obj) {

    },
    showGuessYouLike_3(obj) {

    },
    jumpRefreshBanner(obj) { },
    returnHomeJumpGame() { },
    /**
     * faceBook
     */


    /**
     * android 是否开启某个功能 
     */
    isOpen(key) {
        return false;
    },

    showNativeBanner(top) {

    },
    hideNativeBanner() { },

    /**
     *  其他 
     */
    callAndroid(action) { },
    /**
     *  视频 
     */
    callAndroid_2(action, funS) { },
    /**
     * 付费  小游戏三元复活 action = 9999 
     *  action   4000-5000 
     */
    callPay(action, funS) { },
    /**
     * 返回主页
     */
    backHome() {

    },

    /**
     * 好评
     */
    showRate() { },

    gotoSmallGame(gameName) { },
    gameAction(gameName) { },
    jniLevel(level, mode, action) {
        // if(lieyou_appid != ""){
        //     try {
        //         if(action == 0){
        //             cocosAnalytics.CALevels.begin({
        //                 level : mode + level  // 关卡名称
        //             })
        //         }else if(action == 1){
        //             cocosAnalytics.CALevels.complete({
        //                 level : mode + level  // 关卡名称
        //             })
        //         }else if(action == 2){
        //             cocosAnalytics.CALevels.failed({
        //                 level : mode + level,   // 关卡名称
        //                 reason : ''
        //             })
        //         }    
        //     } catch (error) {
        //     }
        // }
        this.setLevelTrack(level, mode, action);
    },
    setGameEvent(event, action = -1) {
        var time = 0;
        if (action == 0) {
            this.GameEventBackstageTime[event] = 0;
            this.eventBeginTime[event] = parseInt(getTime() / 1000);
        } else if (this.eventBeginTime[event]) {
            time = parseInt(getTime() / 1000) - this.eventBeginTime[event] - this.GameEventBackstageTime[event];
        }
        // if(lieyou_appid != ""){
        //     try {
        //         cocosAnalytics.CACustomEvent.onStarted('event', {
        //             name:event,
        //             action: action,
        //             time:time
        //         });
        //     } catch (error) {
        //     }
        // }
        this.setGameEventTrack(event, action, time);
    },
    showModal(obj) { },
    showToast(title) {
        lieyou_interface.showToast(title);
    },
    hideToast() { },
    showLoading(title) { },
    hideLoading() { },
    getHaveVideo() {
        return true;
    },
    getShareOrViedo() {
        if (this.getHaveVideo()) {
            return 2
        }
        return 0;
    },
    getJumpBtnHaveMove() { return 0; },

    addLuPingBtn(obj) { },
    beginLuPing(time, callBack) { },
    pauseLuPing() { },
    resumeLuPing() { },
    stopLuPing(isShare) { },
    shareVd(callBack) { },
    addSmallGameReturnBtn(obj) { },
    showRecommendBegin(obj) {
        if (obj.callBack) {
            obj.callBack();
        }
    },
    showRecommendFinish(obj) {
        if (obj.callBack) {
            obj.callBack();
        }
    },
    showArardGoldGrid(obj) {
        if (obj.callBack) {
            obj.callBack();
        }
    },
    showArardGoldStrip(obj) {
        if (obj.callBack) {
            obj.callBack();
        }
    },
    installShortcut(obj) { },
    showRecommendAwardIcon(obj) { },
    setDataForHttp: function (url, fun) {
        //提交数据到服务器 无返回值 
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && (xhr.status >= 200 && xhr.status < 400)) {
                var response = xhr.responseText;
                if (response == '-1') {
                }
                else if (response == '-2') {
                }
                else {
                    if (fun) {
                        fun(response);
                    }
                }
            }
        };
        xhr.open("GET", url, true);
        xhr.timeout = 5000;
        xhr.send();
    },
    shuffle: function (array) {
        var input = [];
        for (var i = 0; i < array.length; i++) {
            input.push(array[i]);
        }
        for (var i = 0; i < input.length; i++) {
            var index = parseInt(Math.random() * input.length);
            var temp = input[index];
            input[index] = input[i];
            input[i] = temp;
        }
        return input;
    },
    getAdData(firstData) {
        var input = [];
        var input1 = [];
        var input2 = [];
        var input3 = [];
        var array = this.qGMoreGameData;
        for (var i = 0; i < array.length; i++) {
            var data = array[i];
            if (Userdefault.getBoolForKey('ag_moreGame_isTouch_' + data.id, false)) {
                input3.push(data);
            } else {
                var isPush = false;
                for (var j = 0; j < firstData.length; j++) {
                    if (firstData[j] == data.id) {
                        input1.push(data);
                        isPush = true;
                        break;
                    }
                }
                if (isPush == false) {
                    input2.push(data);
                }
            }
        }
        input1 = this.shuffle(input1);
        input2 = this.shuffle(input2);
        input3 = this.shuffle(input3);

        for (var i = 0; i < input1.length; i++) {
            input.push(input1[i]);
        }
        for (var i = 0; i < input2.length; i++) {
            input.push(input2[i]);
        }
        for (var i = 0; i < input3.length; i++) {
            input.push(input3[i]);
        }

        return input;
    },
    hideMoreGameIcon() {
        if (this.moreGameSide && this.moreGameSide.isValid) {
            this.moreGameSide.active = false;
        }
        for (var i = 0; i < this.moreGameIconArr.length; i++) {
            if (this.moreGameIconArr[i] && this.moreGameIconArr[i].isValid) {
                this.moreGameIconArr[i].active = false;
            }
        }
    },
    showMoreGameIcon() {
        if (this.moreGameSide && this.moreGameSide.isValid) {
            this.moreGameSide.active = true;
        }
        for (var i = 0; i < this.moreGameIconArr.length; i++) {
            if (this.moreGameIconArr[i] && this.moreGameIconArr[i].isValid) {
                this.moreGameIconArr[i].active = true;
            }
        }
    },
    showMoreGameByIcon(obj) {
        if (this.base_IsShenHe) {
            return;
        }
        if (releasePlatform == 'qq' && (this.base_IsShenHe || !this.canShowAppBox)) {
            return;
        }
        lieyou_showLog('lieyou_BaseManager-------------- showMoreGameByIcon ' + this.qGMoreGameData.length);
        if (this.qGMoreGameData.length == 0 || !this.qGMore_mainSwitch || !this.qGMore_iconPlay) {
            return;
        }
        if (obj.runType == undefined) {
            obj.runType = 1;
        }
        var fNode = obj.node ? obj.node : cc.director.getScene();
        if (cc.find('lieyou_moreGameByIcon', fNode)) {
            return;
        }
        var nodeX = (obj.x != undefined) ? obj.x : 0;//(cc.winSize.width/2);
        var nodeY = (obj.y != undefined) ? obj.y : 0;//(cc.winSize.height/2);
        var url = 'SDK/module/qgameMoreGame/moreGame_icon';
        if (fNode && fNode.isValid) {
            var node = lieyou_moreGame_icon();
            node.name = 'lieyou_moreGameByIcon';
            var isAlreadyPush = false;
            for (var i = 0; i < this.moreGameIconArr.length; i++) {
                if (!this.moreGameIconArr[i].isValid) {
                    this.moreGameIconArr[i] = node;
                    isAlreadyPush = true;
                    break;
                }
            }
            if (!isAlreadyPush) {
                this.moreGameIconArr.push(node);
            }
            if (obj.side) {
                
                node.scale = obj.side / 130;
            }
            console.log("-----obj.side-----",obj.side)
            fNode.addChild(node);
            node.x = nodeX;
            node.y = nodeY;
            var data = this.qGMoreGameData;
            if (!this.isOneShowMoreGameIcon) {
                this.isOneShowMoreGameIcon = true;
                this.showMoreGameIconIndex = parseInt(Math.random() * data.length);
                var isBreak = false;
                for (var i = 0; i < data.length; i++) {
                    for (var j = 0; j < this.qGMore_biz_iconPlay.length; j++) {
                        if (data[i].id == this.qGMore_biz_iconPlay[j]) {
                            this.showMoreGameIconIndex = i;
                            isBreak = true;
                            break;
                        }
                    }
                    if (isBreak) {
                        break;
                    }
                }
            }
            this.showMoreGameIconIndex = this.showMoreGameIconIndex % data.length;
            node.getComponent('lieyou_qGamemoreGame_icon').setData(data[this.showMoreGameIconIndex], 2);
            this.showMoreGameIconIndex++;
            node.runAction(cc.repeatForever(cc.sequence(cc.delayTime(this.qGMore_refreshTime), cc.callFunc(() => {
                this.showMoreGameIconIndex = this.showMoreGameIconIndex % data.length;
                node.getComponent('lieyou_qGamemoreGame_icon').setData(data[this.showMoreGameIconIndex], 2);
                this.showMoreGameIconIndex++;
            }))));
            if (obj.runType == 1) {
                node.runAction(cc.repeatForever(cc.sequence(
                    cc.rotateBy(0.03, -15), cc.rotateBy(0.03, 0), cc.rotateBy(0.03, 15), cc.rotateBy(0.03, 0),
                    cc.rotateBy(0.03, -10), cc.rotateBy(0.03, 0), cc.rotateBy(0.03, 10), cc.rotateBy(0.03, 0),
                    cc.rotateBy(0.03, -5), cc.rotateBy(0.03, 0), cc.rotateBy(0.03, 5), cc.rotateBy(0.03, 0),
                    cc.delayTime(2 + Math.random() * 1)))
                );
            }
        }
    },
    showMoreGameByBanner(obj) {
        // lieyou_SdkManager.showMoreGameGrid();
        setTimeout(() => {
            this.installShortcut({ shoaDialog: true });
        }, 5000);
        // console.log("-------------------this.qGMoreGameData.length---", this.qGMoreGameData.length)
        lieyou_showLog('lieyou_BaseManager-------------- showMoreGameByBanner ' + this.qGMoreGameData.length);
        if (this.base_IsShenHe || this.qGMoreGameData.length == 0 || !this.qGMore_mainSwitch || !this.qGMore_bannerPlay) {
            var scale = 0.8;
            if (lieyou_SdkManager.sdkWinSize.width > lieyou_SdkManager.sdkWinSize.height) {
                scale = 0.4;
            }
            lieyou_SdkManager.showBannerCustom({ scale: scale });
            return;
        }
        this.hideBanner();
        var fNode = obj.node ? obj.node : cc.director.getScene();
        if (cc.find('lieyou_moreGameByBanner', fNode)) {
            return;
        }
        var nodeX = (obj.x != undefined) ? obj.x : (cc.winSize.width / 2);
        var nodeY = (obj.y != undefined) ? obj.y : 0;
        var url = 'SDK/module/qgameMoreGame/moreGame_banner';
        if (fNode && fNode.isValid) {
            var node = lieyou_moreGame_banner();
            node.name = 'lieyou_moreGameByBanner';
            this.moreGameBanner = node;
            fNode.addChild(node);
            node.x = nodeX;
            node.y = nodeY;
            var data = this.getAdData(this.qGMore_biz_bannerPlay);
            node.getComponent('lieyou_qGamemoreGame_more').setData(data, this.qGMore_isRun);
        }
    },
    showMoreGame(obj) {
        if (releasePlatform == 'qq' && (this.base_IsShenHe || !this.canShowAppBox)) {
            return;
        }
        lieyou_showLog('lieyou_BaseManager-------------- showMoreGame ' + this.qGMoreGameData.length);
        if (this.qGMoreGameData.length == 0 || !this.qGMore_mainSwitch || !this.qGMore_morePlay) {
            return;
        }
        var fNode = obj.node ? obj.node : cc.director.getScene();
        if (cc.find('lieyou_moreGame', fNode)) {
            return;
        }
        var nodeX = (obj.x != undefined) ? obj.x : 0;//(cc.winSize.width/2);
        var nodeY = (obj.y != undefined) ? obj.y : 0;//(cc.winSize.height/2);
        var url = 'SDK/module/qgameMoreGame/moreGame_btn';//moreGame_more
        if (fNode && fNode.isValid) {
            var node = lieyou_moreGame_btn();
            node.name = 'lieyou_moreGame';
            fNode.addChild(node);
            node.x = nodeX;
            node.y = nodeY;
            node.getComponent('lieyou_qGameMoreGame_showMore').setData(function () {
                //if(this.getSysPlatform_string() == 'tt'){
                //      this.newJumpApp();
                //    return;
                //}
                var node = lieyou_moreGame_more();
                node.x = cc.winSize.width / 2;
                node.y = cc.winSize.height / 2;
                cc.director.getScene().addChild(node);
                var data = this.getAdData(this.qGMore_biz_morePlay);
                node.getComponent('lieyou_qGamemoreGame_more').setData(data, this.qGMore_isRun);
            }.bind(this));
        }
    },
    hideMoreGameSide() {
        if (this.moreGameSide && this.moreGameSide.isValid) {
            this.moreGameSide.active = false;
        }
    },
    showMoreGameSide(obj) {
        if (this.base_IsShenHe) {
            return;
        }
        if (this.moreGameSide && this.moreGameSide.isValid) {
            this.moreGameSide.active = true;
            return;
        }
        if (releasePlatform == 'qq' && (this.base_IsShenHe || !this.canShowAppBox)) {
            return;
        }
        lieyou_showLog('lieyou_BaseManager-------------- showMoreGameSide ' + this.qGMoreGameData.length);
        if (this.qGMoreGameData.length == 0 || !this.qGMore_mainSwitch || !this.qGMore_floatPlay) {
            return;
        }
        var fNode = cc.director.getScene();
        var sideType = (obj.sideType_right == undefined) ? false : obj.sideType_right;
        var nodeY = (obj.y != undefined) ? obj.y : 0;
        var url = 'SDK/module/qgameMoreGame/moreGame_side';
        if (fNode && fNode.isValid) {
            var node = lieyou_moreGame_side();
            this.moreGameSide = node;
            fNode.addChild(node);
            if (obj.isPersist) {
                cc.game.addPersistRootNode(node);
            }
            node.y = cc.winSize.height / 2;
            var data = this.getAdData(this.qGMore_biz_floatPlay);
            node.getComponent('lieyou_qGamemoreGame_more').setData(data, this.qGMore_isRun, sideType, nodeY);
        }
    },
    showMoreGameMiddle_three(obj) {
        if (releasePlatform == 'qq' && (this.base_IsShenHe || !this.canShowAppBox)) {
            return false;
        }
        lieyou_showLog('lieyou_BaseManager-------------- showMoreGameMiddle_three ' + this.qGMoreGameData.length);
        if (this.qGMoreGameData.length == 0 || !this.qGMore_mainSwitch || !this.qGMore_dialogPlay3) {
            return false;
        }
        return this.showMoreGameMiddle(obj, this.qGMore_biz_dialogPlay3, 3);
    },
    showMoreGameMiddle_two(obj) {

        if (this._moreGameOrNativeType == 1) {
            this._moreGameShowNative = !this._moreGameShowNative;
        }
        if (this._moreGameShowNative && this.showNativeAd_big(obj)) {
            return true;
        }
        if (releasePlatform == 'qq' && (this.base_IsShenHe || !this.canShowAppBox)) {
            return false;
        }
        lieyou_showLog('lieyou_BaseManager-------------- showMoreGameMiddle_two ' + this.qGMoreGameData.length);
        if (this.qGMoreGameData.length == 0 || !this.qGMore_mainSwitch || !this.qGMore_dialogPlay2) {
            return this.showNativeAd_big(obj);
            return false;
        }
        // return this.showMoreGameMiddle(obj,this.qGMore_biz_dialogPlay2,2);
        return this.showMoreGameMiddle(obj, this.qGMore_biz_dialogPlay2, 3);
    },
    showMoreGameMiddle_one(obj) {
        if (releasePlatform == 'qq' && (this.base_IsShenHe || !this.canShowAppBox)) {

            return false;
        }
        lieyou_showLog('lieyou_BaseManager-------------- showMoreGameMiddle_one ' + this.qGMoreGameData.length);
        if (this.qGMoreGameData.length == 0 || !this.qGMore_mainSwitch || !this.qGMore_dialogPlay) {
            return false;
        }
        obj.type = 1;
        this.showMoreGameMiddle(obj, this.qGMore_biz_dialogPlay, 1);
        return true;
    },
    showMoreGameMiddle(obj, array, type) {
        var fNode = obj.node ? obj.node : cc.director.getScene();
        if (cc.find('lieyou_moreGameByMiddle' + type, fNode)) {
            return;
        }
        var nodeX = (obj.x != undefined) ? obj.x : 0;//(cc.winSize.width/2);
        var nodeY = (obj.y != undefined) ? obj.y : 0;//(cc.winSize.height/2);
        if (!obj.runType) {
            obj.runType = 4;
        }
        if (this.qGMore_dialogPlayRunType[type]) {
            obj.runType = this.qGMore_dialogPlayRunType[type];
        }
        if (fNode && fNode.isValid) {
            var node = null;
            node = lieyou_moreGame_mid_one(type, obj.haveTitle, obj.titleType, obj.scale);
            node.name = 'lieyou_moreGameByMiddle' + type;

            node.x = nodeX;
            node.y = nodeY;
            var data = this.getAdData(array);
            node.getComponent('lieyou_qGamemoreGame_mid').setData(data, this.qGMore_isRun, this.qGMore_refreshTime, obj.runType);
            //oppo 隐藏banner
            this.showNativeHideBanner(node);
            fNode.addChild(node);
        }

        return true;
    },
    showNativeHideBanner(node) { },
    setHaveTrack() {
        try {
            var data = this._lieyou_online_param;
            if (Userdefault.getIntForKey('lieyou_haveTrack', 0) == 0 && data.trackNum) {
                if (Math.random() * 100 <= Number(data.trackNum) && this.newPlayer) {
                    this.haveTrack = 1;
                    Userdefault.setDataForKey('lieyou_haveTrack', 1);
                    this.setLevelTrack(-1, 'track', -1);
                } else {
                    this.haveTrack = 2;
                    Userdefault.setDataForKey('lieyou_haveTrack', 2);
                }
                if (data.eventFlag != undefined) {
                    this.eventFlag = Number(data.eventFlag);
                    Userdefault.setDataForKey('lieyou_eventFlag', this.eventFlag);
                }
            }
        } catch (error) {
        }
    },
    setSwitchData(data) {
        if (data.closeRedPack != undefined) {
            this._closeRedPack = data.closeRedPack;
        }
        if (data.trackBaseUrl) {
            // this.trackBaseUrl = data.trackBaseUrl;
        }
        if (data.installShortcutStartTime != undefined) {
            this._installShortcutStartTime = Number(data.installShortcutStartTime);
        }
        if (data.showSpotMaxCount != undefined) {
            this._showSpotMaxCount = Number(data.showSpotMaxCount);
        }
        if (data.showSpotMaxCountRefreshTime != undefined) {
            this._showSpotMaxCountRefreshTime = Number(data.showSpotMaxCountRefreshTime);
        }
        if (data.nativeLoadDialogTime != undefined) {
            this._nativeLoadDialogTime = Number(data.nativeLoadDialogTime);
        }


        if (data.moreGameOrNativeType != undefined) {
            this._moreGameOrNativeType = Number(data.moreGameOrNativeType);
            if (this._moreGameOrNativeType == 2) {
                this._moreGameShowNative = true;
            }
        }
        if (data.canShowMoreGameGrid != undefined) {
            this._canShowMoreGameGrid = data.canShowMoreGameGrid;
        }

        if (data.isSysInstallShortCut != undefined) {
            this.isSysInstallShortCut = data.isSysInstallShortCut;
        }
        // this._moreGameOrNativeType = 0;
        // this._moreGameShowNative = false;

        this._lieyou_online_param = data;

        if (this._initObj && this._initObj.initDataComplete) {
            this._initObj.initDataComplete();
        }
    },
    getParamByKey(obj) {
        if (this._lieyou_online_param && this._lieyou_online_param[obj.key] != undefined) {
            return this._lieyou_online_param[obj.key];
        } else {
            return obj.defaultValue;
        }
    },
    setAdData(data) {

        if (data.theme) {
            lieyou_moreGame_type = parseInt(data.theme);
        }
        if (data.switch) {
            this.switchSetHttpData = data.switch;
        }
        if (data.ad_datas) {
            if (data.ad_datas.isRun != undefined) {
                this.qGMore_isRun = data.ad_datas.isRun;
            }
            var adBaseUrl = '';
            if (data.ad_datas.baseUrl != undefined) {
                adBaseUrl = data.ad_datas.baseUrl;
            }
            if (data.ad_datas.dataPlay != undefined) {
                this.qGMoreGameData = data.ad_datas.dataPlay;
                for (var i = 0; i < this.qGMoreGameData.length; i++) {
                    if (!this.qGMoreGameData[i].url && this.qGMoreGameData[i].uri) {
                        this.qGMoreGameData[i].url = adBaseUrl + this.qGMoreGameData[i].uri;
                    }
                }
            }
        }
        lieyou_showMoreGameNum = this.qGMoreGameData.length;
        if (lieyou_showMoreGameNum < 7) {
            lieyou_showMoreGameNum = 7;
        }
        if (data.crossSwitch) {
            if (data.crossSwitch.doubleValue) {
                this.qGMore_dialogPlayRunType[2] = parseInt(data.crossSwitch.doubleValue);
            }
            if (data.crossSwitch.triplexValue) {
                this.qGMore_dialogPlayRunType[3] = parseInt(data.crossSwitch.triplexValue);
            }
            if (data.crossSwitch.showGameNum != undefined) {
                lieyou_showMoreGameNum = Number(data.crossSwitch.showGameNum);
                if (lieyou_showMoreGameNum > this.qGMoreGameData.length) {
                    lieyou_showMoreGameNum = this.qGMoreGameData.length;
                }
                if (lieyou_showMoreGameNum < 7) {
                    lieyou_showMoreGameNum = 7;
                }

            }
            if (data.crossSwitch.refreshTime != undefined) {
                this.qGMore_refreshTime = Number(data.crossSwitch.refreshTime);
            }
            if (data.crossSwitch.mainSwitch != undefined) {
                this.qGMore_mainSwitch = data.crossSwitch.mainSwitch;
            }
            if (data.crossSwitch.floatPlay != undefined) {
                this.qGMore_floatPlay = data.crossSwitch.floatPlay;
            }
            if (data.crossSwitch.bannerPlay != undefined) {
                this.qGMore_bannerPlay = data.crossSwitch.bannerPlay;
            }
            if (data.crossSwitch.morePlay != undefined) {
                this.qGMore_morePlay = data.crossSwitch.morePlay;
            }
            if (data.crossSwitch.dialogPlay != undefined) {
                this.qGMore_dialogPlay = data.crossSwitch.dialogPlay;
            }
            if (data.crossSwitch.dialogPlay2 != undefined) {
                this.qGMore_dialogPlay2 = data.crossSwitch.dialogPlay2;
            }
            if (data.crossSwitch.dialogPlay3 != undefined) {
                this.qGMore_dialogPlay3 = data.crossSwitch.dialogPlay3;
            }
            if (data.crossSwitch.iconPlay != undefined) {
                this.qGMore_iconPlay = data.crossSwitch.iconPlay;
            }
        }
        if (data.bizData) {
            if (data.bizData.floatPlay != undefined) {
                this.qGMore_biz_floatPlay = data.bizData.floatPlay;
            }
            if (data.bizData.bannerPlay != undefined) {
                this.qGMore_biz_bannerPlay = data.bizData.bannerPlay;
            }
            if (data.bizData.morePlay != undefined) {
                this.qGMore_biz_morePlay = data.bizData.morePlay;
            }
            if (data.bizData.dialogPlay != undefined) {
                this.qGMore_biz_dialogPlay = data.bizData.dialogPlay;
            }
            if (data.bizData.dialogPlay2 != undefined) {
                this.qGMore_biz_dialogPlay2 = data.bizData.dialogPlay2;
            }
            if (data.bizData.dialogPlay3 != undefined) {
                this.qGMore_biz_dialogPlay3 = data.bizData.dialogPlay3;
            }
            if (data.bizData.iconPlay != undefined) {
                this.qGMore_biz_iconPlay = data.bizData.iconPlay;
            }
        }
    },

    getSysPlatform_string() {
        return 'base';
    },
    getLoginUrl() {
        var jsonData = {};
        jsonData.uid = openid;
        jsonData.sdkVersion = _SDKVersionCode;
        jsonData.platformVersion = this.platformVersionCode;
        jsonData.androidVersion = this.androidVersion;
        jsonData.model = this.model;
        jsonData.networkType = this.networkType;
        jsonData.uuid = openid_uuid;
        // jsonData.region = this.region;
        var version = this.dataVersion;
        var platForm = this.getSysPlatform_string();
        var url = this.loginBaseUrl + '/login?umid=' + oppoGetOnlineDataId + '&uuid=' + openid_uuid + '&client_data_version=' + version + '&channel=' + platForm + '&gameVersion=' + this.getVersion() + '&json=' + encodeURI(JSON.stringify(jsonData));
        console.log('baseManager--------------getLoginUrl = ' + url);
        return url;
    },
    setadtrack(adid, location) {
        if (this.switchSetHttpData && false == this.switchSetHttpData.adtrack) {
            return;
        }
        try {
            var jsonData = {};
            jsonData.uid = openid;
            if (this.isMoreInfo) {
                jsonData.sdkVersion = _SDKVersionCode;
                jsonData.platformVersion = this.platformVersionCode;
                jsonData.androidVersion = this.androidVersion;
                jsonData.model = this.model;
                jsonData.networkType = this.networkType;
                jsonData.uuid = openid_uuid;
            }
            var platForm = this.getSysPlatform_string();
            var url = this.loginBaseUrl + '/adtrack?umid=' + oppoGetOnlineDataId + '&uuid=' + openid_uuid + '&channel=' + platForm + '&adid=' + adid + '&location=' + location + '&gameVersion=' + this.getVersion() + '&json=' + encodeURI(JSON.stringify(jsonData));
            lieyou_showLog('baseManager--------------setadtrack = ' + url);
            this.setDataForHttp(url);
        } catch (error) {
            lieyou_showLog('baseManager--------setadtrack error= ' + JSON.stringify(error));
        }
    },
    setOperTrack(jsonData = {}) {
        if (this.switchSetHttpData && false == this.switchSetHttpData.operTrack) {
            return;
        }
        try {
            jsonData.uid = openid;
            jsonData.uuid = openid_uuid;
            var platForm = this.getSysPlatform_string();
            var url = this.loginBaseUrl + '/operTrack?umid=' + oppoGetOnlineDataId + '&uuid=' + openid_uuid + '&channel=' + platForm + '&gameVersion=' + this.getVersion() + '&json=' + encodeURI(JSON.stringify(jsonData));
            console.log('baseManager--------------setOperTrack = ' + url);
            this.setDataForHttp(url);
        } catch (error) {
            // "switch":{"operTrack":true,"adtrack":true};
            console.log('baseManager--------setOperTrack error= ' + JSON.stringify(error));
        }
    },
    setLevelTrack(level, mode, action) {
        this.setHaveTrack();

        if (this.haveTrack != 1) {
            return;
        }
        if (this.switchSetHttpData && false == this.switchSetHttpData.Leveltrack) {
            return;
        }
        var time = 0;
        if (action == 0) {
            this.palyGameBackstageTime = 0;
            this.levelBeginTime = parseInt(getTime() / 1000);
        } else if (action == 1 || action == 2) {
            time = parseInt(getTime() / 1000) - this.levelBeginTime - this.palyGameBackstageTime;
        }
        try {
            var jsonData = {};
            jsonData.uid = openid;
            if (this.isMoreInfo) {
                jsonData.sdkVersion = _SDKVersionCode;
                jsonData.platformVersion = this.platformVersionCode;
                jsonData.androidVersion = this.androidVersion;
                jsonData.model = this.model;
                jsonData.networkType = this.networkType;
                jsonData.uuid = openid_uuid;
            }
            var platForm = this.getSysPlatform_string();
            var url = this.trackBaseUrl + '/levelTrack?umid=' + oppoGetOnlineDataId + '&uuid=' + openid_uuid + '&channel=' + platForm + '&model=' + mode + '&level=' + level + '&type=' + action + '&time=' + time + '&gameVersion=' + this.getVersion() + '&eventFlag=' + this.eventFlag + '&json=' + encodeURI(JSON.stringify(jsonData));
            lieyou_showLog('baseManager--------------setlevelTrack = ' + url);
            this.setDataForHttp(url);
        } catch (error) {
            lieyou_showLog('baseManager--------setlevelTrack error= ' + JSON.stringify(error));
        }
    },

    setGameEventTrack(event, action, time) {
        if (this.haveTrack != 1) {
            return;
        }
        try {
            var jsonData = {};
            jsonData.uid = openid;
            if (this.isMoreInfo) {
                jsonData.sdkVersion = _SDKVersionCode;
                jsonData.platformVersion = this.platformVersionCode;
                jsonData.androidVersion = this.androidVersion;
                jsonData.model = this.model;
                jsonData.networkType = this.networkType;
                jsonData.uuid = openid_uuid;
            }
            var platForm = this.getSysPlatform_string();
            var url = this.trackBaseUrl + '/eventTrack?umid=' + oppoGetOnlineDataId + '&uuid=' + openid_uuid + '&channel=' + platForm + '&event=' + event + '&type=' + action + '&time=' + time + '&gameVersion=' + this.getVersion() + '&eventFlag=' + this.eventFlag + '&json=' + encodeURI(JSON.stringify(jsonData));
            lieyou_showLog('baseManager--------------setGameEventTrack = ' + url);
            this.setDataForHttp(url);
        } catch (error) {
            lieyou_showLog('baseManager--------setGameEventTrack error= ' + JSON.stringify(error));
        }
    },
    showInstallShortcutDialog() {
        var dayTime = getTimeDay();
        var day = Userdefault.getIntForKey('lieyou_notShowInstallShortcut', 0);
        if (dayTime == day) {
            return;
        }
        var fNode = cc.director.getScene();
        var node = lieyou_getInstallShortcutDialogPrefab();
        fNode.addChild(node);
        node.x = lieyou_SdkManager.sdkWinSize.width / 2;
        node.y = lieyou_SdkManager.sdkWinSize.height / 2
    },
    addInstallShortcut(obj) {
        try {
            if (cc.sys.platform == cc.sys.OPPO_GAME || cc.sys.platform == cc.sys.VIVO_GAME) {
                obj.canShow = true;
                var fNode = obj.node ? obj.node : cc.director.getScene();
                this.installShortcut({
                    canShow: true, callBack_addNode: () => {
                        if (fNode && fNode.isValid) {
                            var node = lieyou_getInstallShortcutPrefab();
                            node.callFun = () => {
                                this.installShortcut(obj);
                            };
                            fNode.addChild(node);
                            node.x = obj.x ? obj.x : 0;
                            node.y = obj.y ? obj.y : 0;
                        }
                    }
                });
            }
        } catch (error) {
        }
    },
    showShareVideoDialog(callBack) {
        callBack && callBack(4);
    },
    showNativeAd_small(obj) {
        return false;
    },
    showNativeAd_big(obj) {
        return false;
    },
    showNativeAd_load(obj) {
        if (obj.callBack) {
            obj.callBack();
        }
    },
    saveImageToPhotosAlbum(obj = {}) { },
    showISBN(obj = {}) { },
    hideISBN() { },
    showUserAgreement(obj = {}) { },
    setOnlineData(data) { },
    initOnlineData() {
        if (oppoGetOnlineDataId == '') {
            lieyou_SdkManager.showToast('没有填写qgID');
            return;
        }
        var self = this;
        var version = Userdefault.getIntForKey('lieyou_sdk_online_version', 0);
        var time = Userdefault.getIntForKey('lieyou_sdk_online_time', 0);
        var sp = Userdefault.getIntForKey('lieyou_sdk_online_sp', 0);
        var nowTime = getTime() / 1000;
        if (nowTime - time < sp && nowTime > time) {
            var response = Userdefault.getStringForKey('lieyou_sdk_online_data', '');
            var data = JSON.parse(response);
            self.setOnlineData(data);
            return;
        }
        this.dataVersion = version;
        var url = this.getLoginUrl();
        this.setDataForHttp(url, function (response) {
            if (response == "") {
                return;
            }
            try {
                var jsonD = JSON.parse(response);
                if (jsonD.server_data_version) {
                    Userdefault.setDataForKey('lieyou_sdk_online_version', jsonD.server_data_version);
                }
                if (jsonD.isMoreInfo != undefined) {
                    self.isMoreInfo = jsonD.isMoreInfo;
                }
                if (jsonD.sp) {
                    Userdefault.setDataForKey('lieyou_sdk_online_sp', jsonD.sp);
                }
                Userdefault.setDataForKey('lieyou_sdk_online_time', nowTime);

                if (jsonD.server_data_version == version) {
                    var response = Userdefault.getStringForKey('lieyou_sdk_online_data', '');
                    var data = JSON.parse(response);
                    self.setOnlineData(data);
                    return;
                }
                var data = JSON.parse(response).data;
                if (!data) {
                    return;
                }
                self.setOnlineData(data);
                Userdefault.setDataForKey('lieyou_sdk_online_data', JSON.stringify(data));
            } catch (error) {
                lieyou_showLog('------error  initOnlineData + ' + error);
            }
        });
    },
    getScreenshot() {
        return new cc.Node();
    },
    showMoreGameGrid() {
        if (this.base_IsShenHe || !this._canShowMoreGameGrid) {
            return;
        }
        if (cc.find("lieyou_moreGameGrid", cc.director.getScene())) {
            return;
        }
        if (this.qGMoreGameData.length == 0) {
            return;
        }
        var node = lieyou_moreGame_more();
        node.name = "lieyou_moreGameGrid";
        node.x = cc.winSize.width / 2;
        node.y = cc.winSize.height / 2;
        cc.director.getScene().addChild(node);
        var data = this.getAdData(this.qGMore_biz_morePlay);
        node.getComponent('lieyou_qGamemoreGame_more').setData(data, this.qGMore_isRun);
    },
    addRedPackIcon(obj) {
        if (this.base_IsShenHe || this._closeRedPack) {
            return;
        }
        obj.node.addChild(lieyou_getRedPackIcon());
    },
    addRedPackDialog() {
        if (this.base_IsShenHe || this._closeRedPack) {
            return;
        }
        lieyou_showRedPackDialog();
    },
    addTakeOutIcon(obj) {
        if (this.base_IsShenHe || this._closeRedPack) {
            return;
        }
        obj.node.addChild(lieyou_getCaskIcon());
    },
})
module.exports = BaseManager;