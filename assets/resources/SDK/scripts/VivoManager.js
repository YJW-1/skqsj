
//最低版本1056
const BaseManager = require('BaseManager');
let VivoManager = cc.Class({
    extends: require('BaseManager'),
    properties: {
        bannerAd: null,
        bannerNativeAd: null,
        time: -1,

    },
    getHaveVideo() {
        if (vivoVideoId == '' || !this._canShowAD || this.platformVersionCode < 1041) {
            return false;
        }
        return true;
    },
    getVersion() {
        return vivoGameVersion;
    },
    getSysPlatform_string() {
        return 'vivo';
    },
    getSysPlatform() {
        return 3;
    },
    onShow: function (fun) {
        qg.onShow(fun);
    },
    onHide: function (fun) {
        qg.onHide(fun);
    },
    setOnlineData(data) {
        if (data.vivo) {
            if (data.vivo.starShowSpotTime) {
                this._showSpotStartTime = Number(data.vivo.starShowSpotTime);
            }
            if (data.vivo.installShortcutIntervalTime != undefined) {
                this._installShortcutTime = Number(data.vivo.installShortcutIntervalTime);
            }
            if (data.vivo.nativeAdLoadServerRes) {
                _SDKNativeAdLoadServerRes = data.vivo.nativeAdLoadServerRes;
            }
            if (data.vivo.serverVersion != undefined) {
                var serverVersoin = Number(data.vivo.serverVersion);
                if (serverVersoin >= vivoGameVersion) {
                    this.base_IsShenHe = false;
                } else {
                    this.base_IsShenHe = true;
                }
            }
            if (!data.vivo.closeShortcut) {
                this.canShowShortcut = true;
            }
            var adData = {};
            if (data.vivo.theme) {
                adData.theme = data.vivo.theme;
            }
            if (data.vivo.crossSwitch) {
                adData.crossSwitch = data.vivo.crossSwitch;
            }
            if (data.vivo.bizData) {
                adData.bizData = data.vivo.bizData;
            }
            if (data.vivo.ad_datas) {
                adData.ad_datas = data.vivo.ad_datas;
            }
            if (data.vivo.switch) {
                adData.switch = data.vivo.switch;
            }
            if (this.platformVersionCode >= 1044 && 0) {
                this.setAdData(adData);
            }

            if (data.vivo.canShowNativeBanner != undefined) {
                this.canShowNativeBanner = data.vivo.canShowNativeBanner;
            }
            if (data.vivo.canShowNativeSpot != undefined) {
                this.canShowNativeSpot = data.vivo.canShowNativeSpot;
            }
            if (data.vivo.spot_Interval != undefined) {
                this._showSysSpotTime = Number(data.vivo.spot_Interval);
            }
            if (data.vivo.startNativeSpot != undefined) {
                this.startNativeSpot = Number(data.vivo.startNativeSpot);
            }
            if (data.vivo.id_config && data.vivo.is_local_pos_id != true) {
                if (data.vivo.id_config.appid != undefined) {
                    vivoId_SDK = data.vivo.id_config.appid;
                }
                if (data.vivo.id_config.bid != undefined) {
                    vivoBannerId = data.vivo.id_config.bid;
                }
                if (data.vivo.id_config.spoid != undefined) {
                    vivoSpotADId = data.vivo.id_config.spoid;
                }
                if (data.vivo.id_config.awardid != undefined) {
                    vivoVideoId = data.vivo.id_config.awardid;
                }
                if (data.vivo.id_config.nativeAd != undefined) {
                    vivoNativeId = data.vivo.id_config.nativeAd;
                }
            }
            if (data.vivo.banner_close_but_size != undefined) {
                this.banner_close_but_size = Number(data.vivo.banner_close_but_size);
            }
            if (data.vivo.banner_close_but_range != undefined) {
                this.banner_close_but_range = Number(data.vivo.banner_close_but_range);
            }
            if (data.vivo.spot_close_but_alpha != undefined) {
                this.spot_close_but_alpha = Number(data.vivo.spot_close_but_alpha);
            }
            if (data.vivo.spot_close_but_size != undefined) {
                this.spot_close_but_size = Number(data.vivo.spot_close_but_size);
            }
            if (data.vivo.banner_show_height != undefined) {
                this.banner_show_height = Number(data.vivo.banner_show_height);
            }
            if (data.vivo.spot_close_but_range != undefined) {
                this.spot_close_but_range = Number(data.vivo.spot_close_but_range);
            }
            if (data.vivo.banner_close_but_alpha != undefined) {
                this.banner_close_but_alpha = Number(data.vivo.banner_close_but_alpha);
            }
            if (data.vivo.banner_close_but_show != undefined) {
                this.banner_close_but_show = data.vivo.banner_close_but_show;
            }
            if (data.vivo.spot_click_close != undefined) {
                this.spot_click_close = data.vivo.spot_click_close;
            }
            if (data.vivo.spot_first_ad != undefined) {
                this.spot_first_ad = data.vivo.spot_first_ad;
            }
            if (data.vivo.banner_first_ad != undefined) {
                this.banner_first_ad = data.vivo.banner_first_ad;
            }
            if (data.vivo.nativeDelayShowTime != undefined) {
                this.nativeDelayShowTime = Number(data.vivo.nativeDelayShowTime);
            }
            if (data.vivo.nativeDelayDestroyTime != undefined) {
                this.nativeDelayDestroyTime = Number(data.vivo.nativeDelayDestroyTime);
            }
            if (data.vivo.refreshBannerTime != undefined) {
                this.refreshBannerTime = Number(data.vivo.refreshBannerTime);
            }
            this.setSwitchData(data.vivo);
        } else {
        }
    },
    initOnlineData() {

        if (oppoGetOnlineDataId == '') {
            lieyou_SdkManager.showToast('没有填写qgID');
            return;
        }
        var self = this;
        var version = Userdefault.getIntForKey('sdk_vivo_online_version', 0);
        var time = Userdefault.getIntForKey('sdk_vivo_online_time', 0);
        var sp = Userdefault.getIntForKey('sdk_vivo_online_sp', 0);
        var nowTime = getTime() / 1000;
        if (nowTime - time < sp && nowTime > time) {
            var response = Userdefault.getStringForKey('sdk_vivo_online_data', '');
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

                if (jsonD.isMoreInfo != undefined) {
                    self.isMoreInfo = jsonD.isMoreInfo;
                }
                if (jsonD.sp) {
                    Userdefault.setDataForKey('sdk_vivo_online_sp', jsonD.sp);
                }
                Userdefault.setDataForKey('sdk_vivo_online_time', nowTime);

                if (jsonD.server_data_version == version) {
                    var response = Userdefault.getStringForKey('sdk_vivo_online_data', '');
                    var data = JSON.parse(response);
                    self.setOnlineData(data);
                    return;
                }
                var data = JSON.parse(response).data;
                if (!data) {
                    return;
                }
                self.setOnlineData(data);
                if (jsonD.server_data_version) {
                    Userdefault.setDataForKey('sdk_vivo_online_version', jsonD.server_data_version);
                }
                Userdefault.setDataForKey('sdk_vivo_online_data', JSON.stringify(data));
            } catch (error) {
                lieyou_showLog('vivolog------error  initOnlineData + ' + error);
            }
        });
    },
    getSystemInfo() {
        var info = qg.getSystemInfoSync();
        this.platformVersionCode = info.platformVersionCode;
        this.androidVersion = info.osVersionName;
        this.model = info.model;
        openid = info.product;
        this.region = info.region;
        qg.getNetworkType({
            success: (res) => {
                this.networkType = res.type;
            }
        });
    },
    init: function (obj) {
        // this._super(obj);
        BaseManager.prototype.init.call(this, obj);
        this.getSystemInfo();
        this._canShowAD = true;
        if (this.platformVersionCode < 1031) {
            this._canShowAD = false;
        }
        lieyou_showLog('vivo-------------- init   ' + this._canShowAD);

        this._videoAd = null;
        this._canShowVideoAd = true;
        this._canShowBannerAd = true;
        this._canShowSpotAd = true;
        this._canShowNativeAd = true;
        this.canShowNativeBanner = true;
        this.canShowNativeSpot = true;
        this.spot_first_ad = 'native'
        this.banner_first_ad = "native";
        this.nativeDelayShowTime = 0;
        this._showSysSpotTime = 0;
        this.nativeDelayDestroyTime = 0.1;
        this.spot_close_but_alpha = 180;
        this.spot_close_but_size = 55;
        this.spot_close_but_range = 65;
        this.spot_click_close = true;
        this.refreshBannerTime = 15;
        this.banner_close_but_alpha = 180;
        this.banner_close_but_size = 35;
        this.banner_close_but_range = 40;
        this.banner_show_height = 115;
        this.banner_close_but_show = true;
        this._canShowSysSpot = true;
        this.startNativeSpot = 0;
        setTimeout(() => {
            this.initOnlineData();
        }, 1000);
    },
    vibrateShort() {
        qg.vibrateShort();
    },
    vibrateLong() {
        qg.vibrateLong();
    },


    hideBanner() {
        var self = this;
        this._canShowBanner = false;
        this._haveBannerAd = false;
        clearInterval(this.bannerTimeOut);
        if (this.bannerAd) {
            this.bannerAd.destroy();
            this.bannerAd = null;
        }

        if (this.bannerNativeAd) {
            this.bannerNativeAd.destroy();
            this.bannerNativeAd = null;

        }
        if (this._BannerNativeADNode && this._BannerNativeADNode.isValid) {
            self._BannerNativeADNode.destroy();
            self._BannerNativeADNode = null;
        }
    },
    showBanner(obj) {
        if (this._canShowBanner) {
            return;
        }
        if (this._BannerNativeADNode && this._BannerNativeADNode.isValid) {
            if (this._bannerAdStyle && this._bannerAdStyle.y != undefined) {
                this._BannerNativeADNode.y = cc.winSize.height - this._bannerAdStyle.y - this.banner_show_height * lieyou_SdkManager._SceneScale;
            }
        }
        if (this.bannerAd) {
            this.bannerAd.destroy();
            this.bannerAd = null;
        }
        this._haveBannerAd = false;
        this._canShowBanner = true;
        clearInterval(this.bannerTimeOut);
        var refreshTime = this.refreshBannerTime;
        if (this.banner_first_ad == "native") {
            this.showBannerNative();
            this.bannerTimeOut = setInterval(this.showBannerNative.bind(this), 1000 * refreshTime);//刷新广告
        } else {
            this.showBannerSys();
            this.bannerTimeOut = setInterval(this.showBannerSys.bind(this), 1000 * refreshTime);//刷新广告
        }
    },
    showBannerSys(isEnd) {

        var self = this;
        lieyou_showLog('vivolog--------------  banner show + ' + self._canShowBanner + "   " + this._haveBannerAd);
        if (!self._canShowBanner) {
            return;
        }
        if (this._haveBannerAd) {
            return;
        }


        if (vivoBannerId == '' || !this._canShowAD || !this._canShowBannerAd) {
            if (!this._canShowBannerAd) {
                lieyou_showLog('vivolog----------- load banner fail 间隔未到10s钟');
            }
            if (!isEnd) {
                self.showBannerNative(true);
            }
            return;
        };
        setTimeout(() => {
            self._canShowBannerAd = true;
        }, 1000 * 10);
        self._canShowBannerAd = false;

        var bannerAd = null;
        var left = 0;
        if (cc.winSize.width > cc.winSize.height) {
            left = (cc.winSize.width - cc.winSize.height) / 4;
        }
        if (this._bannerAdStyle && this._bannerAdStyle.y != undefined) {
            bannerAd = qg.createBannerAd({
                posId: vivoBannerId,
                style: { top: this._bannerAdStyle.y, left: left }
            });
        } else {
            bannerAd = qg.createBannerAd({
                posId: vivoBannerId,
                style: {}
            });
        }

        bannerAd && bannerAd.onLoad(() => {
            bannerAd && bannerAd.show();
            if (!self._canShowBanner) {
                bannerAd.destroy();
                return;
            }
            self._haveBannerAd = true;
            if (self._BannerNativeADNode && self._BannerNativeADNode.isValid) {
                self._BannerNativeADNode.destroy();
                self._BannerNativeADNode = null;
            }
            if (self.bannerAd) {
                self.bannerAd.destroy();
            }
            self.bannerAd = bannerAd;
            lieyou_showLog('vivolog--------------  banner show success');
        })
        bannerAd && bannerAd.onError(function (err) {
            bannerAd.destroy();
            self._haveBannerAd = false;
            if (!isEnd) {
                self.showBannerNative(true);
            }
            lieyou_showLog('vivolog--------------  banner show fail' + JSON.stringify(err));
        })
        bannerAd.onClose(function () {
            bannerAd.destroy();
            self._haveBannerAd = false;
        })
    },
    showBannerCustom(obj) {
        this.showBanner(obj);
    },
    showBannerByTop(id) {
        this.showBanner({});
    },
    showBannerByBottom(id) {
        this.showBanner({});
    },
    showRewardedVideoAd(id, closeCallBack) {
        if (this.time > 0) {
            return;
        }
        this.time = 1;
        setTimeout(() => {
            this.time = -1
        }, 1000)
        console.log("------------------播放视频")
        cc.game.emit("E_MUSIC_STOP");
        lieyou_showLog('vivolog---------- showRewardedVideoAd');
        var self = this;
        self.playVideoCallBack = closeCallBack;

        if (this.platformVersionCode < 1041 || vivoVideoId == '' || !this._canShowVideoAd) {
            if (!this._canShowVideoAd) {
                lieyou_showLog('vivolog---------- load video fail 间隔未到一分钟');
            }
            if (self.playVideoCallBack) {
                self.playVideoCallBack(false);
                self.playVideoCallBack = null;
            }

            return;
        }
        setTimeout(() => {
            self._canShowVideoAd = true;
        }, 1000 * 60);
        self._canShowVideoAd = false;
        if (this._videoAd) {
            this._videoAd.load();
            return;
        }
        var videoAd = qg.createRewardedVideoAd({
            posId: vivoVideoId
        });
        this._videoAd = videoAd;
        // videoAd&&videoAd.load();
        videoAd && videoAd.onLoad(() => {
            lieyou_showLog('vivolog---------- load video success');
            videoAd && videoAd.show();
            if (window.vivoPlayVDCallBack) {
                // cc.audioEngine.stopMusic();
                // cc.audioEngine.stopAllEffects();
                cc.audioEngine.stopAll();
            }
            // cc.game.pause();
            cc.director.pause();
        });
        videoAd && videoAd.onClose((res) => {
            if (!self.playVideoCallBack) {
                return;
            }
            lieyou_showLog('vivolog---------- load video close');
            // cc.game.resume();
            cc.director.resume();
            if (window.vivoPlayVDCallBack) {
                window.vivoPlayVDCallBack();
            }
            if (res.isEnded) {
                self.playVideoCallBack(true);
            } else {
                self.playVideoCallBack(false);
            }
            self.playVideoCallBack = null;
        });
        videoAd && videoAd.onError((res) => {
            lieyou_showLog('vivolog---------- load video fail' + JSON.stringify(res));
            if (self.playVideoCallBack) {
                self.playVideoCallBack(false);
                self.playVideoCallBack = null;
            }
        });
    },
    showSpot(isEnd) {
        var self = this;

        console.log("-----------vivo插屏33333333")
        lieyou_showLog('vivolog--------------  showSpot');
        if (vivoSpotADId == '' || !this._canShowAD || !this._canShowSpotAd) {
            if (!this._canShowBannerAd) {
                lieyou_showLog('vivolog----------- load spot fail 间隔未到10s钟');
            }
            if (!isEnd) {
                self.showNativeBanner(true);
            } else {
                self.installShortcut({ shoaDialog: true });
            }
            return;
        }
        setTimeout(() => {
            self._canShowSpotAd = true;
        }, 1000 * 10);
        self._canShowSpotAd = false;
        var interstitialAd = qg.createInterstitialAd({
            posId: vivoSpotADId
        });

        interstitialAd && interstitialAd.onLoad(function () {
            setTimeout(() => {
                interstitialAd && interstitialAd.show();
            }, self.nativeDelayShowTime * 1000);
            lieyou_showLog('vivolog--------------  spot load success');
        })
        interstitialAd && interstitialAd.onError(function (err) {
            if (!isEnd) {
                self.showNativeBanner(true);
            } else {
                self.installShortcut({ shoaDialog: true });
            }
            lieyou_showLog('vivolog--------------  spot show fail' + JSON.stringify(err));
        })
    },
    custClickNative(node) {
        if (node && node.isValid) {
            if (node.CallBack) {
                node.CallBack();
            } else {
            }
        }
    },
    addNativeAd(node) {
        var self = this;
        if (!node.isRun) {
            node.isRun = true;
            var nodeAction = cc.repeatForever(cc.sequence(cc.delayTime(11), cc.callFunc(() => {
                self.addNativeAd(node);
            })));
            nodeAction.setTag(5697846);
            node.runAction(nodeAction);
        }

        if (vivoNativeId == '' || this.platformVersionCode < 1053 || !this._canShowNativeAd) {
            if (!this._canShowNativeAd) {
                lieyou_showLog('vivolog----------- load play native fail 间隔未到10s钟');
            }
            return;
        }
        setTimeout(() => {
            self._canShowNativeAd = true;
        }, 1000 * 10);
        self._canShowNativeAd = false;

        var nativeAd = qg.createNativeAd({ 'posId': vivoNativeId });
        nativeAd.load();
        nativeAd.onLoad((res) => {
            if (res && res.adList && res.adList.length > 0) {
            } else {
                lieyou_showLog('vivolog-------------- play native fail 1' + '   ' + JSON.stringify(res))
                return;
            }
            try {
                var numL = parseInt(Math.random() * res.adList.length);
                var id = res.adList[numL].adId;
                var title = res.adList[numL].title;//广告标题
                var desc = res.adList[numL].desc;//广告描述
                var clickBtnTxt = res.adList[numL].clickBtnTxt;//点击按钮文本描述
                var iconUrlList = [];//广告图icon
                if (res.adList[numL].icon && res.adList[numL].icon != '') {
                    iconUrlList.push(res.adList[numL].icon);
                }
                var imgUrlList = res.adList[numL].imgUrlList;//广告图
                imgUrlList = [];
                var logoUrl = res.adList[numL].logoUrl;//广告标签图
                nativeAd.reportAdShow({
                    adId: id
                });
                lieyou_showLog('vivolog-------- show play native success ');
                var touchNode = node;//self._addNativeAdNode;

                if (!touchNode || !touchNode.isValid) {
                    lieyou_showLog('vivolog nativeNode null');
                    return;
                }
                touchNode.stopActionByTag(5697846);
                touchNode.CallBack = () => {
                    nativeAd.reportAdClick({
                        adId: id
                    });
                    touchNode.isRun = false;
                    self.addNativeAd(touchNode);
                };
                if (touchNode && touchNode.isValid && touchNode.getComponent(cc.Sprite)) {
                    touchNode.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
                    if (!touchNode.haveTouchOn) {
                        touchNode.haveTouchOn = true;
                        touchNode.on(cc.Node.EventType.TOUCH_START, function (event) {
                            event.target.CallBack();
                        });
                        if (logoUrl != '') {
                            var adTitleNode = new cc.Node();
                            adTitleNode.scale = 0.5;
                            touchNode.addChild(adTitleNode);
                            adTitleNode.x = touchNode.width / 2;
                            adTitleNode.y = touchNode.height / 2 * -1;
                            adTitleNode.anchorX = 1;
                            adTitleNode.anchorY = 0;
                            adTitleNode.addComponent(cc.Sprite);
                            cc.loader.load(logoUrl, (err, texture) => {
                                if (adTitleNode && adTitleNode.isValid) {
                                    adTitleNode.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
                                }
                            });
                        }
                    }
                    var url = '';
                    if (touchNode.width / touchNode.height >= 1.5) {
                        if (imgUrlList.length > 0) {
                            url = imgUrlList[parseInt(Math.random() * imgUrlList.length)];
                        } else if (iconUrlList.length > 0) {
                            url = iconUrlList[parseInt(Math.random() * iconUrlList.length)];
                        }
                    } else {
                        if (iconUrlList.length > 0) {
                            url = iconUrlList[parseInt(Math.random() * iconUrlList.length)];
                        } else if (imgUrlList.length > 0) {
                            url = imgUrlList[parseInt(Math.random() * imgUrlList.length)];
                        }
                    }
                    if (url != '') {
                        cc.loader.load(url, (err, texture) => {
                            if (touchNode && touchNode.isValid) {
                                touchNode.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
                            }
                        });
                    }
                }

            } catch (error) {
                lieyou_showLog('vivolog-- showplayNativeFail   ' + error);
            }
        });
        nativeAd.onError((err) => {
            lieyou_showLog('vivolog-------- show play native fail ' + '   ' + JSON.stringify(err))
        })
    },
    showBannerNative(isEnd) {
        var self = this;

        // self.showBannerSys(true);
        // return

        if (this._haveBannerAd) {
            return;
        }

        if (!this.canShowNativeBanner) {
            if (!isEnd) {
                self.showBannerSys(true);
            }
            return;
        }

        if (vivoNativeId == '' || this.platformVersionCode < 1053 || !this._canShowNativeAd) {
            if (!this._canShowNativeAd) {
                lieyou_showLog('vivolog----------- load banner native fail 间隔未到10s钟');
            }
            if (!isEnd) {
                self.showBannerSys(true);
            }
            return;
        }
        setTimeout(() => {
            self._canShowNativeAd = true;
        }, 1000 * 10);
        self._canShowNativeAd = false;

        var nativeAd = qg.createNativeAd({ 'posId': vivoNativeId });
        nativeAd.load();
        nativeAd.onLoad((res) => {
            if (res && res.adList && res.adList.length > 0) {
            } else {
                lieyou_showLog('vivolog-------------- banner native fail 1' + '   ' + JSON.stringify(res))
                if (!isEnd) {
                    self.showBannerSys(true);
                }
                return;
            }
            try {
                var numL = parseInt(Math.random() * res.adList.length);
                var id = res.adList[numL].adId;
                var title = res.adList[numL].title;//广告标题
                var desc = res.adList[numL].desc;//广告描述
                var clickBtnTxt = res.adList[numL].clickBtnTxt;//点击按钮文本描述
                var iconUrlList = [];//广告图icon
                if (res.adList[numL].icon && res.adList[numL].icon != '') {
                    iconUrlList.push(res.adList[numL].icon);
                }
                var imgUrlList = res.adList[numL].imgUrlList;//广告图
                imgUrlList = [];
                var logoUrl = res.adList[numL].logoUrl;//广告标签图
                nativeAd.reportAdShow({
                    adId: id
                });
                lieyou_showLog('vivolog-------- show banner native success ');
                // cc.loader.loadRes('SDK/module/qGameNativeAd/bannerNativeAd',function(err,res){
                if (!self._canShowBanner) {
                    return;
                }
                try {
                    if (self._haveBannerAd) {
                        return;
                    }
                    if (self.bannerAd) {
                        self.bannerAd.destroy();
                        self.bannerAd = null;
                    }

                    // self.bannerAd = nativeAd  ///************************asd*********** */


                    var fNode = cc.director.getRunningScene();
                    var node = lieyou_nativeBanner();//cc.instantiate(res); 
                    if (self._BannerNativeADNode && self._BannerNativeADNode.isValid) {
                        self._BannerNativeADNode.destroy();
                        self._BannerNativeADNode = null;
                    }
                    self._BannerNativeADNode = node;
                    node.x = cc.winSize.width / 2;
                    if (self._bannerAdStyle && self._bannerAdStyle.y != undefined) {
                        node.y = cc.winSize.height - self._bannerAdStyle.y - self.banner_show_height * lieyou_SdkManager._SceneScale;
                    }
                    fNode.addChild(node, 999);
                    cc.game.addPersistRootNode(node);
                    // node.Group = "Ui"
                    node.getComponent('lieyou_oppoNativeAdSdk').setData({
                        touchCallBack: function () {
                            nativeAd.reportAdClick({
                                adId: id
                            });
                        }.bind(this),
                        closeCallBack: function () {
                            // nativeAd.destroy();
                        }.bind(this),
                        title: title,
                        desc: desc,
                        clickBtnTxt: clickBtnTxt,
                        iconUrlList: iconUrlList,
                        imgUrlList: imgUrlList,
                        logoUrl: logoUrl,
                        closeAlpha: self.banner_close_but_alpha,
                        closeSize: self.banner_close_but_size,
                        closeRange: self.banner_close_but_range,
                        closeShow: self.banner_close_but_show,
                        bannerHeight: self.banner_show_height
                    });
                } catch (error) {
                    lieyou_showLog('vivolog-- showbannerNativeFail   ' + error);
                }
                // }.bind(this));
            } catch (error) {
                lieyou_showLog('vivolog-- showbannerNativeFail   ' + error);
            }
        });
        nativeAd.onError((err) => {
            if (!isEnd) {
                self.showBannerSys(true);
            }
            lieyou_showLog('vivolog-------- show banner native fail ' + '   ' + JSON.stringify(err))
        })
    },
    showNativeBanner(isEnd) {
        var self = this;
        if (!this.canShowNativeSpot || vivoNativeId == '' || this.platformVersionCode < 1053 || !this._canShowNativeAd || Userdefault.getIntForKey('vivo_showNativeNum', 0) < this.startNativeSpot) {
            if (!this._canShowNativeAd) {
                lieyou_showLog('vivolog----------- load native fail 间隔未到10s钟');
            }
            if (!isEnd) {
                self.showSpot(true);
            } else {
                self.installShortcut({ shoaDialog: true });
            }
            return;
        }
        setTimeout(() => {
            self._canShowNativeAd = true;
        }, 1000 * 10);
        self._canShowNativeAd = false;
        var nativeAd = qg.createNativeAd({ 'posId': vivoNativeId });
        nativeAd.load();
        nativeAd.onLoad((res) => {
            if (res && res.adList && res.adList.length > 0) {

            } else {
                lieyou_showLog('vivolog--------------  native fail 1' + '   ' + JSON.stringify(res))
                if (!isEnd) {
                    self.showSpot(true);
                } else {
                    self.installShortcut({ shoaDialog: true });
                }
                return;
            }
            try {
                var numL = parseInt(Math.random() * res.adList.length);
                var id = res.adList[numL].adId;
                var title = res.adList[numL].title;//广告标题
                var desc = res.adList[numL].desc;//广告描述
                var clickBtnTxt = res.adList[numL].clickBtnTxt;//点击按钮文本描述
                var iconUrlList = [];//广告图icon
                if (res.adList[numL].icon && res.adList[numL].icon != '') {
                    iconUrlList.push(res.adList[numL].icon);
                }
                var imgUrlList = res.adList[numL].imgUrlList;//广告图
                var logoUrl = res.adList[numL].logoUrl;//广告标签图
                nativeAd.reportAdShow({
                    adId: id
                });
                lieyou_showLog('vivolog-------- show native success ');
                // cc.loader.loadRes('SDK/module/qGameNativeAd/nativeAd',function(err,res){
                try {
                    var fNode = cc.director.getRunningScene();
                    var node = lieyou_nativeSpot();//cc.instantiate(res); 
                    node.scale = 0;
                    node.active = false;
                    setTimeout(() => {
                        node.scale = 1;
                        node.active = true;
                    }, this.nativeDelayShowTime * 1000);
                    fNode.addChild(node, 999);
                    cc.game.addPersistRootNode(node);
                    node.x = cc.winSize.width / 2;
                    node.y = cc.winSize.height / 2;
                    node.getComponent('lieyou_oppoNativeAdSdk').setData({
                        touchCallBack: function () {
                            nativeAd.reportAdClick({
                                adId: id
                            });
                            setTimeout(() => {
                                node.destroy();
                            }, this.nativeDelayDestroyTime * 1000);
                        }.bind(this),
                        closeCallBack: function () {
                        }.bind(this),
                        title: title,
                        desc: desc,
                        clickBtnTxt: clickBtnTxt,
                        iconUrlList: iconUrlList,
                        imgUrlList: imgUrlList,
                        logoUrl: logoUrl,
                        closeAlpha: self.spot_close_but_alpha,
                        closeSize: self.spot_close_but_size,
                        closeRange: self.spot_close_but_range,
                        closeShow: self.spot_click_close
                    });

                    // if (self.bannerAd) {
                    //     self.bannerAd.destroy(); //********************* */
                    //     self.bannerAd = null;
                    // }
                } catch (error) {
                    lieyou_showLog('vivolog-- showNativeFail   ' + error);
                }
                // }.bind(this));
            } catch (error) {
                lieyou_showLog('vivolog-- showNativeFail   ' + error);
            }
        });
        nativeAd.onError((err) => {
            if (!isEnd) {
                self.showSpot(true);
            } else {
                self.installShortcut({ shoaDialog: true });
            }
            lieyou_showLog('vivolog-------- show native fail ' + '   ' + JSON.stringify(err))
        })
    },
    showSpotByPause(isHaveNative, top) {
        this.addShowSpotNum();
    },
    showSpotByBegin(isHaveNative, top) {
        this.addShowSpotNum();
    },
    showSpotByFinish(isHaveNative, top) {
        this.addShowSpotNum();
    },
    addShowSpotNum() {
        console.log("-----------vivo插屏")
        var time = parseInt(getTime() / 1000);
        if (time - this._beginGameTime < this._showSpotStartTime) {
            lieyou_showLog('vivolog----------- load spot 启动游戏一定时间内不显示插屏');
            return;
        }
        var self = this;
        if (!this._canShowSysSpot) {
            lieyou_showLog('vivolog----------- load spot or Naitve fail 间隔未到' + self._showSysSpotTime + 's钟');
            this.installShortcut({ shoaDialog: true });
            return;
        }


        setTimeout(() => {
            self._canShowSysSpot = true;
        }, 1000 * self._showSysSpotTime);
        self._canShowSysSpot = false;
        var num = Userdefault.getIntForKey('vivo_showNativeNum', 0);
        Userdefault.setDataForKey('vivo_showNativeNum', num + 1);
        if (this.spot_first_ad == "native") {
            this.showNativeBanner(false);
        } else {
            this.showSpot(false);
        }
    },
    installShortcut(obj = {}) {
        var time = parseInt(getTime() / 1000);
        if (time - this._beginGameTime < this._installShortcutStartTime && !obj.canShow) {
            lieyou_showLog('vivolog installShortcut canShowShortcut 开始时间未到');
            return;
        }
        if (time - this._upInstallShortcutTime < this._installShortcutTime && !obj.canShow) {
            lieyou_showLog('vivolog installShortcut canShowShortcut 间隔时间未到');
            return;
        }

        if (!this.canShowShortcut && !obj.canShow) {
            lieyou_showLog('vivolog installShortcut canShowShortcut false');
            return;
        }
        if (this.base_IsShenHe && !obj.canShow) {
            lieyou_showLog('vivolog installShortcut shenhe true');
            return;
        }
        if (this.platformVersionCode < 1041) {
            lieyou_showLog('vivolog installShortcut version low');
            return;
        }
        var self = this;
        qg.hasShortcutInstalled({
            success: function (res) {
                if (res == false) {
                    if (obj.callBack_addNode) {
                        obj.callBack_addNode();
                        return;
                    }
                    // if(obj.shoaDialog){
                    //     lieyou_SdkManager.showInstallShortcutDialog();
                    //     return;
                    // }
                    self._upInstallShortcutTime = time;
                    qg.installShortcut({
                        success: function () {
                            if (obj.success) {
                                obj.success();
                            }
                            self.setOperTrack({ type: 1, state: 1 });
                        },
                        fail: function () {
                            // self.setOperTrack({type:1,state:0});        
                        },
                    })
                }
            }
        })
    },

    showModal(obj) {
        qg.showDialog({
            title: obj.title ? obj.title : '', message: obj.content ? obj.content : '',
            buttons: [
                {
                    text: '确定',
                    color: '#33dd44'
                },
                {
                    text: '取消',
                    color: '#33dd44'
                }
            ], success: (res) => {
                if (res.index == 0) {
                    obj.success && obj.success();
                } else {
                    obj.fail && obj.fail();
                }
            }, cancel: () => {
                obj.fail && obj.fail();
            }
        });
    },
    showToast(title) {
        qg.showToast({ message: title });
    },
    hideToast() {
        // qg.hideToast({});
    },
    showLoading(title) {
        qg.showLoading({ message: title });
    },
    hideLoading() {
        qg.hideLoading();
    },
})
module.exports = VivoManager;




