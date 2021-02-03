declare const PI: number;

declare const lieyou: {
    Props_Base_Gold: number;
    Key_OncePlayerTime: string;
    Key_OncePlayerTimeDay: string;
    Key_NewPlayer: string;
    Key_Gold: string;
    Key_Music: string;
    Key_Sound: string;
    Language_ch: boolean;
}


declare const Userdefault: {
    getBoolForKey(key: string, vauleDef?: string | boolean): boolean;
    getIntForKey(key: string, vauleDef?: number): number;
    getStringForKey(key: string, vauleDef?: string): string;
    getFloatForKey(key: string, vauleDef?: number): number;
    setDataForKey(key: string, vaule: any);
    setBoolForKey(key: string, vaule: boolean);
}
declare const lieyou_Userdefault: {
    getBoolForKey(key: string, vauleDef?: string | boolean): boolean;
    getIntForKey(key: string, vauleDef?: number): number;
    getStringForKey(key: string, vauleDef?: string): string;
    getFloatForKey(key: string, vauleDef?: number): number;
    setDataForKey(key: string, vaule: any);
    setBoolForKey(key: string, vaule: boolean);
}


/**
 * 获取随机值
 * @param min 
 * @param max 
 */
declare function getRandom(min: number, max: number): number;

//是否可以分享
declare function getCanShare(): boolean;

declare function getTime(): number;

declare function getTimeDay(): number;

declare function lieyou_getTime(): number;

declare function lieyou_getTimeDay(): number;

/**
 * SdkManager
 */
declare const lieyou_SdkManager: {
    /**
     * 初始化sdk 必须调用
     * @param obj 
     */
    init(obj?: any): void
    /**
     * 屏幕适配比例
     */
    _SceneScale: undefined
    /**
     * 提示语
     */
    showToast(str: string): void
    /**
     * 是否可以看视频
     */
    getHaveVideo(): boolean

    /**
     * 0 微信 1 原生 2 facebook  3 vivo 4 oppo 5 oppoH5 6 huawei 7 xiaomuh5 8 jintitoutiao 9 xiaomi 10 baidu 11 qq
     */
    getSysPlatform(): number

    /**
     * 初始化游戏数据
     */
    initGameData(): void

    /**
     * 监听进入后台
     */
    onHide(func?: any): void

    /**
     * 监听后台返回游戏
     */
    onShow(func?: any): void

    getHelpLevel(): any;

    showBossKeyNode();

    /**
     * 显示广告 要传位置wxBannerId
     * showBanner({adUnitId:id,style:{left:0,top:0,width:300,height:105}})
     */
    showBanner();

    /**
     * 自定义广告obj(id:0,x:0,y:0,scale:0)
     */
    showBannerCustom();

    /**
     * 显示底部广告 wxBannerId
     */
    showBannerByBottom();

    /**
     * 显示顶部广告 wxBannerId
     */
    showBannerByTop();

    /**
     * 隐藏广告条
     */
    hideBanner();

    /**
     * 视频广告 wxVideoId  (){}
     */
    showRewardedVideoAd(closeCallBack?: any);

    /**
     * 获取微信授权 
     */
    getAuthorize();

    /**
     * 微信登陆
     */
    login();

    /**
     * 添加本地复活卡
     */
    addLocalResurr();

    /**
     * 使用复活卡
     */
    useResurr();

    /**
     * 删除邀请到的好友
     */
    deleteInviteFriend();

    /**
     *  修改邀请好友状态
     */
    modifyInviteFriend(friendId: any);

    /**
     * 获取邀请到的好友列表
     */
    getInviteFriendData(flag: any, fun?: any): any

    /**
     * 显示邀请到的好友
     */
    showInviteFriend(_node?: any, _callback?: any);

    /**
     * 显示邀请到的好友 已经领取过奖励的
     */
    showInviteFriendFailure(_node?: any);

    /**
     * 查看复活卡 返回复活卡个数 实时
     */
    checkResurrNum(): number;

    /**
     * 查看复活卡 返回复活卡个数 不是实时
     */
    checkResurrNum_2(): number;

    /**
     * 分享{name:游戏名,source:1,inviteFriend:bool,success: (type){1 分享到群  2 个人},getGroupId:true} 
     * source 1 转发 2 首页分享按钮 3 复活 4 炫耀 5 使用道具 6 双倍奖励 7 解锁 8 帮助 9 帮助成功 10 视频失败调用分享
     */
    share(obj?: any);
    shareHelp(level: any);
    shareHelpSuccess(level: any);

    helpFriendSuccess(level: any);
    getIsHaveFriendHelpMe(level: any, fun?: any);
    /**
     * 显示更多游戏按钮 {node:node,x:0,y:0}
     */
    showMoreGame(obj?: { node?: cc.Node, x?: number, y?: number });
    /**
     * 显示更多游戏icon {node:node,x:0,y:0,runType:1,side:130}
     */
    showMoreGameByIcon(obj?: { node?: cc.Node, x?: number, y?: number, runType?: number, side?: number });
    /**
     * @param scale 节点缩放值 默认自动适配屏幕
     * 显示更多游戏一行 {node:node,x:0,y:0}
     */
    showMoreGameMiddle_one(obj?: { scale?: number, node?: cc.Node, x?: number, y?: number }): boolean;
    /**
     * 显示更多游戏两行 {node:node,x:0,y:0}
     * 
     * @param scale 节点缩放值 默认自动适配屏幕
     * @param node 更多游戏添加添加节点
     * @param bgPath 背景图本地地址 
     * @param titleColor 标题颜色
     * @param descColor 描述颜色
     * @param insetTop 背景上边框宽度
     * @param insetBottom 背景上边框宽度
     * @param insetLeft 背景上边框宽度
     * @param insetRight 背景上边框宽度
     */

    showMoreGameMiddle_two(obj: { scale?: number, node: cc.Node, bgPath: string, titleColor?: cc.Color, descColor?: cc.Color, insetTop?: Number, insetBottom?: Number, insetLeft?: Number, insetRight?: Number }): boolean;
    /**
     * 显示更多游戏侧边栏 {y:0,sideType_right:false,isPersist:false}
     */
    showMoreGameSide(obj?: { y?: number, sideType_right?: boolean, isPersist?: boolean });
    /**
     * 显示更多游戏banner {node:node,x:0,y:0}
     */
    showMoreGameByBanner(obj?: { node?: cc.Node, x?: number, y?: number });

    /**
     * 显示全部排行榜 {rankKey:key,node:node,closeFun:fun,orderStr:"false",x:0,y:0}
     * orderStr 默认false
     */
    showAllRankingLayer(obj?: { rankKey?: string, node?: cc.Node, closeFun?: any, orderStr?: string, x?: number, y?: number });

    /**
     * 显示全部排行榜 {rankKey:key,node:node,closeFun:fun,orderStr:"false",x:0,y:0}
     * orderStr 默认false
     */
    showAllRankingLayer(obj?: { rankKey?: string, node?: cc.Node, closeFun?: any, orderStr?: string, x?: number, y?: number });

    /**
     * 显示失败排行榜 {rankKey:key,node:node,showAndHideNode:node,orderStr:"false",x:0,y:0}
     */
    showFailRankingLayer(obj?: { rankKey?: string, node?: cc.Node, showAndHideNode?: cc.Node, orderStr?: string, x?: number, y?: number });

    /**
     * 提交排行榜数据 key,score
     */
    setRankingData(key: string, score: number);

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
    showForum(obj?: { icon?: string, style?: { left?: number, top?: number, width?: number, height?: number } });

    /**
     * 隐藏社区按钮
     */
    closeForum();



    /**
     * 跳转app
     */
    jumpApp(data: any, url?: any, page?: any, num?: any);
    newJumpApp(obj?: any);

    /**
     * 显示自己广告		进入游戏
     */
    showSpotByBegin(isHaveNative?: boolean, top?: number);

    /**
     * 显示自己广告		暂停
     */
    showSpotByPause(isHaveNative?: boolean, top?: number);

    /**
     * 显示自己广告  	游戏结束
     */
    showSpotByFinish(isHaveNative?: boolean, top?: number);

    /**
     * 微信获取版本是否支持此方法 data = “1.6.6”版本号
     */
    getSDKVersionCanUse(data: any): boolean;

    /**
     * 设置新玩家数据
     */
    setNewPlayerData();

    /**
     * 解析数据
     */
    parseData(data: any, str: any);

    /**
     * 进入首页打点
     */
    gameMain();

    /**
     * 游戏开始
     */
    gameBeginLevel(level: any, mode?: any);

    /**
     * 游戏失败
     */
    gameFailLevel(level: any, mode?: any);

    /**
     * 游戏过关
     */
    gameFinishLevel(level: any, mode?: any);

    /**
     * 自定义打点
     * @param str 
     */
    gameEvent(str: string);

    /**
     * 自定义计时打点
     * @param str 
     */
    gameEventBegin(str: string);

    gameEventFinish(str: string);

    /**
     * 提交分数 无尽模式需要
     */
    gameScore(level: any, mode: any);

    /**
     * 添加提示框 
     */
    addToast(_node?: cc.Node, str?: string, _callBack?: any);

    shareDialog(_node?: cc.Node);

    addGetLocakCardDialog(_node?: cc.Node);

    /**
     * 获取在线参数
     */
    getParamByOnline(key: string, defaultV?: any): any;

    /**
     *加载网络图片 
     */
    getOnlineSpriteFrame(url: string, fun?: any): any;

    /**
     * 加载网络图片 
     */
    getOnlineSpriteFrame(url: string, fun?: any): any;

    /**
     * 猜你喜欢{node:_node,x:x,y:y,align:0}//0 居中 -1 下 1 上
     */
    showGuessYouLickOne(obj?: { node?: cc.Node, x?: number, y?: number, align?: number });
    showGuessYouLickTow(obj?: { node?: cc.Node, x?: number, y?: number, align?: number });

    returnHomeJumpGame(): void;

    /**
     * 分享到群
     *  rueturn 1  表示成功 , -1 分享成功但是有限制  0  分享失败
     */
    shareToCrowd(func?: any, tag?: string, time?: number, count?: number);

    /**android ios */
    callAndroid(action: any);
    callAndroid_2(action: any, funS?: any);
    callPay(action: any, funS?: any);
    isOpen(key?: string): boolean;
    getIsNative(): boolean;

    /**
     * 子游戏回主页 安卓
     */
    backHome();

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
    addSmallGameReturnBtn(obj?: { node?: cc.Node, x?: number, y?: number, image?: cc.SpriteFrame });
    gotoSmallGame(gameName: string);
    gameAction(gameName: string);
    initPhysics(url: string);

    /**
     * obj  = {x:0,y:0,w:16,h:9}
     */
    showPraise(obj?: { x?: number, y?: number, w?: number, h?: number });

    showNativeBanner(top?: number);
    hideNativeBanner();

    //微信
    /**
     * {callBack:fun}
     */
    showRedPack(obj?: { callBack?: any });

    /**
     *  obj {node:node,x:0,y:0}
     */
    showRedIcon(obj?: { node?: cc.Node, x?: number, y?: number });

    /**
     *  obj {node:node,x:0,y:0}
     */
    showRecommendIcon(obj?: { node?: cc.Node, x?: number, y?: number });

    showGameRecommend(callback?: any);

    showGameRecommendDialog();


    /**
     * 0 没有分享 没有视频 1 分享 2 视频
     */
    getShareOrViedo(): number;

    getJumpBtnHaveMove(): any;

    showGuessYouLike_3(obj?: any);

    /**
     * node:跳过按钮 x:moveEndx  y:moveEndy
     * {node:node,x:0,y:0} 
     */
    jumpRefreshBanner(obj?: { node?: cc.Node, x?: number, y?: number });

    setWorldRankData(score?: number, key?: number)

    getBaseData(): any;

    reload();

    /**
     * 添加录屏按钮
     * @param obj 
     */
    addLuPingBtn(obj?: { node?: cc.Node, x?: number, y?: number, color?: number, callBack?: any });

    /**
     * 分享录屏
     * @param callBack 
     */
    shareVd(callBack?: any);
    /**
     * 添加分享录屏页面
     * @param callBack 
     */
    showShareVideoDialog(callBack?: any);
    /**
     * 添加桌面按钮 {node:node,x:0,y:0}
     */
    addInstallShortcut(obj?: { node?: cc.Node, x?: number, y?: number });

    /**
     * 开始录屏
     * @param time 
     * @param callBack 
     */
    beginLuPing(time?: number, callBack?: any);

    /**
     * 暂停录屏
     */
    pauseLuPing();

    /**
     * 恢复录屏
     */
    resumeLuPing();

    /**
     * 结束录屏
     */
    stopLuPing(bool?: boolean);

    //xiaomi
    /**
     * 桌面是否已经有快捷方式
     */
    hasInstalled(callBack?: any);

    /**
     * 提示创建快捷方式
     */
    install(obj?: any);

    /**
     * obj {callBack:fun} 会隐藏banner
     */
    showRecommendBegin(obj?: { callBack?: any });

    /**
     * obj {callBack:fun} 会隐藏banner
     */
    showRecommendFinish(obj?: { callBack?: any });

    /**
     * obj {callBack:fun} 会隐藏banner
     */
    showArardGoldGrid(obj?: { callBack?: any });

    /**
     * obj {callBack:fun} 会隐藏banner
     */
    showArardGoldStrip(obj?: { callBack?: any });



    showRecommendAwardIcon(obj?: any);

    setDataForHttp(url: string, fun?: any);

    getParamByKey(obj?: { key?: string, defaultValue?: any });

    /**
     * @param scale 节点缩放值 默认自动适配屏幕
     * @param node 原生广告添加添加节点
     * @param bgPath 背景图本地地址 
     * @param titleColor 标题颜色
     * @param descColor 描述颜色
     * @param insetTop 背景上边框宽度
     * @param insetBottom 背景上边框宽度
     * @param insetLeft 背景上边框宽度
     * @param insetRight 背景上边框宽度
     */
    showNativeAd_small(obj: { scale?: number, node: cc.Node, bgPath: string, titleColor?: cc.Color, texture?: cc.SpriteFrame, descColor?: cc.Color, insetTop?: Number, insetBottom?: Number, insetLeft?: Number, insetRight?: Number }): boolean;
    /**
     * @param scale 节点缩放值 默认自动适配屏幕
    * @param node 原生广告添加添加节点
    * @param bgPath 背景图本地地址 
    * @param titleColor 标题颜色
    * @param descColor 描述颜色
    * @param insetTop 背景上边框宽度
    * @param insetBottom 背景上边框宽度
    * @param insetLeft 背景上边框宽度
    * @param insetRight 背景上边框宽度
    */
    showNativeAd_big(obj: { scale?: number, node: cc.Node, bgPath: string, titleColor?: cc.Color, descColor?: cc.Color, texture?: cc.SpriteFrame, insetTop?: Number, insetBottom?: Number, insetLeft?: Number, insetRight?: Number }): boolean;
    /**
     * @param node 监听节点
     * @param callBack 监听回调 不传调用系统返回
     */
    addListenerBackKey(obj: { node: cc.Node, callBack?: any }): void;
    /**
     * 显示版号信息
     */
    showISBN(obj?: { color?: cc.color, size?: number }): void;
    /**
     * 显示用户协议
     */
    showUserAgreement(obj: { node: cc.Node, color?: cc.color }): void;
    /**
     * 短震动
     */
    vibrateShort(): void;
    /**
     * 长震动
     */
    vibrateLong(): void;
    /**
     * 自定义震动时间
     */
    vibrateCustom(time: number): void;
    // /**
    //  * @param callBack 加载完回调
    //  * @param theme black||white 默认 white 
    //  */
    // showNativeAd_load(obj?: { callBack?: Function, theme?: string});
}