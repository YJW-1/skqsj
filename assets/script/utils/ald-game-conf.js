if (window.wx && !window.qq && !window.tt) {//只在微信上可以使用
    exports.app_key = "1b7ccc37831ee4699281e21a18137289"; //请在此行填写从阿拉丁后台获取的appkey
    exports.getLocation = false; //默认不获取用户坐标位置
    exports.useOpen = false;
    exports.openKey = "";
}

window.onGameInit = () => {
    var storeID = 'test';
    if (cc.sys.platform == cc.sys.OPPO_GAME) {
        storeID = 'oppo';
    } else if (cc.sys.platform == cc.sys.VIVO_GAME) {
        storeID = 'vivo';
    }
    else if (cc.sys.platform == cc.sys.WECHAT_GAME) {
        if (window['qq']) {
            storeID = 'qq';
        }
        else if (window['tt']) {
            storeID = 'tt';
        }
        else {
            storeID = 'wx';
        }
    }
    if (storeID != 'test') {
        // 开启（关闭）本地日志的输出
        cocosAnalytics.enableDebug(false);
        cocosAnalytics.init({ appID: window['cocosAnalytics']["data"].appID, storeID: storeID, channel: "", version: "1.0.0", engine: "cocos", appSecret: "", callNumber: "" });
        // 开始登录方法
        cocosAnalytics.CAAccount.loginStart({
            // 获客渠道，指获取该客户的广告渠道信息 
            channel: '99888',
        });
        cocosAnalytics.CAAccount.loginSuccess({
            userID: 'dddddddd',
            sex: 1,
            age: 1,
            channel: '99888',   // 获客渠道，指获取该客户的广告渠道信息   
        });
        /**进入后台 */
        cc.game.on(cc.game.EVENT_HIDE, () => {
            cocosAnalytics.CAAccount.logout();
        });

        /**后台返回游戏 */
        cc.game.on(cc.game.EVENT_SHOW, () => {
            cocosAnalytics.CAAccount.loginStart({
                // 获客渠道，指获取该客户的广告渠道信息 
                channel: '99888',
            });
            cocosAnalytics.CAAccount.loginSuccess({
                userID: 'dddddddd',
                sex: 1,
                age: 1,
                channel: '99888',   // 获客渠道，指获取该客户的广告渠道信息   
            });
        });
    }
}

/** 游戏开始
 *  mode 游戏模式 从1开始
 *  level 关卡  从1开始
 *  name 自定义关卡标识  可以不传
 */
window.onGameStart = (mode, level, name) => {
    var levelId = mode * 10000 + level;
    var levelName = name ? name : "第" + levelId + "关";
    lieyou_SdkManager.gameBeginLevel(level, mode);
    if (window.wx && !window.qq && !window.tt) {//只在微信上可以使用
        wx.aldStage.onStart({
            stageId: levelId,       //关卡ID 该字段必传
            stageName: levelName    //关卡名称  该字段必传
        })
    }
}
/** 游戏成功
 *  mode 游戏模式 从1开始
 *  level 关卡  从1开始
 *  name 自定义关卡标识  可以不传
 */
window.onGameSuccess = (mode, level, name) => {
    var levelId = mode * 10000 + level;
    var levelName = name ? name : "第" + levelId + "关";
    lieyou_SdkManager.gameFinishLevel(level, mode);
    if (window.wx && !window.qq && !window.tt) {//只在微信上可以使用
        wx.aldStage.onEnd({
            stageId: levelId,       //关卡ID 该字段必传
            stageName: levelName,   //关卡名称  该字段必传
            event: "complete"
        })
    }
}
/** 游戏失败
 *  mode 游戏模式 从1开始
 *  level 关卡  从1开始
 *  name 自定义关卡标识  可以不传
 */
window.onGameFail = (mode, level, name) => {
    var levelId = mode * 10000 + level;
    var levelName = name ? name : "第" + levelId + "关";
    lieyou_SdkManager.gameFailLevel(level, mode);
    if (window.wx && !window.qq && !window.tt) {//只在微信上可以使用
        wx.aldStage.onEnd({
            stageId: levelId,       //关卡ID 该字段必传
            stageName: levelName,   //关卡名称  该字段必传
            event: "fail"
        })
    }
}
/** 
 * 自定义游戏事件
 */
window.onGameEvent = (type, event, level) => {
    var id = window.event_key[type];
    if (id == undefined) {
        id = 30;
    }
    id *= 100000;
    for (var i = 0; i < event.length; i++) {
        id += Math.floor((event.charCodeAt(i) * (16 - i) * 16) / 1000);
    }
    if (level > 0) {
        id += level;
        event += level;
    }
    if (window.wx && !window.qq && !window.tt) {//只在微信上可以使用
        wx.aldStage.onStart({
            stageId: id,       //关卡ID 该字段必传
            stageName: type + event    //关卡名称  该字段必传
        })
        wx.aldStage.onEnd({
            stageId: id,       //关卡ID 该字段必传
            stageName: type + event,   //关卡名称  该字段必传
            event: "complete"
        })
    }
}

/** 其他事件 */
window.onGameOtherEvent = (event, level = 0) => {
    // cocosAnalytics && cocosAnalytics.CACustomEvent.onStarted('other', { type: event });
    // window["mta"] && window["mta"].onEvent("other", { event: event + level });
    window["onGameEvent"] && window["onGameEvent"]("其他", event, level);
}
/** 打开事件 */
window.onGameOpenEvent = (type) => {
    console.log("打开弹窗", type);
    // cocosAnalytics && cocosAnalytics.CACustomEvent.onStarted('open', { type: type });
    // window["mta"] && window["mta"].onEvent('open', { 'popup': type });
    window["onGameEvent"] && window["onGameEvent"]("打开", type);
}
/** 视频事件 */
window.onGameVideoEvent = (type, status) => {
    console.log("视频广告", type, status);
    // cocosAnalytics && cocosAnalytics.CACustomEvent.onStarted('video', { type: type + status });
    // window["mta"] && window["mta"].onEvent('video', { vtype: type + status });
    window["onGameEvent"] && window["onGameEvent"]("视频", type + status);
}



window.event_key = {
    "视频": 11, "打开": 12, "停留": 13, "进入": 20, "签到": 21, "转盘": 22, "抽奖": 23, "皮肤": 24, "成就": 25, "商城": 26, "其他": 27
}