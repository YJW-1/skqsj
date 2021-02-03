window.lieyou_nativeSpot = function () {
    var nativeAdNode = new cc.Node("nativeAd");
    let oppoNativeAdSdk = nativeAdNode.addComponent('lieyou_oppoNativeAdSdk');
    var myNode = new cc.Node('myNode');
    nativeAdNode.addChild(myNode);
    var pingbi = new cc.Node('pingbi');
    myNode.addChild(pingbi);
    pingbi.addComponent(cc.BlockInputEvents);
    pingbi.addComponent(cc.Sprite);
    pingbi.opacity = 50;
    lieyou_load('q_ad/oppo_native_insters_layerBg.png', (err, texture) => {
        pingbi.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        pingbi.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
        pingbi.width = 2560;
        pingbi.height = 2560;
    });
    var touch = new cc.Node('touch');
    myNode.addChild(touch);
    touch.width = 570;
    touch.height = 500;
    touch.y = 54;
    touch.on(cc.Node.EventType.TOUCH_START, function (event) {
        oppoNativeAdSdk.callBackTouch();
    });
    var touchButton = new cc.Node('touchButton');
    myNode.addChild(touchButton);
    touchButton.y = -276;
    touchButton.on(cc.Node.EventType.TOUCH_START, function (event) {
        oppoNativeAdSdk.callBackTouch();
    });
    touchButton.addComponent(cc.Sprite);
    lieyou_load('q_ad/touch.png', (err, texture) => {
        // touchButton.active = false;
        touchButton.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        touchButton.width = 354;
        touchButton.height = 117;
    });
    var touchLabel = new cc.Node('touchLabel');
    touchButton.addChild(touchLabel);
    touchLabel.width = 160;
    touchLabel.height = 50;
    touchLabel.addComponent(cc.Label);
    touchLabel.getComponent(cc.Label).fontSize = 60;
    touchLabel.getComponent(cc.Label).lineHeight = 60;
    // touchLabel.getComponent(cc.Label).enableWrapText = true;
    touchLabel.getComponent(cc.Label).string = "点击安装";
    var bg = new cc.Node('bg');
    myNode.addChild(bg);
    bg.y = 54;
    bg.addComponent(cc.Sprite);
    lieyou_load('q_ad/bg.png', (err, texture) => {
        bg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        bg.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
        bg.width = 650;
        bg.height = 500;
    });
    var titleLabel = new cc.Node('titleLabel');
    myNode.addChild(titleLabel);
    titleLabel.width = 450;
    titleLabel.height = 50;
    titleLabel.y = 264;
    titleLabel.addComponent(cc.Label);
    titleLabel.getComponent(cc.Label).overflow = cc.Label.Overflow.SHRINK;
    titleLabel.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER;
    titleLabel.getComponent(cc.Label).verticalAlign = cc.Label.VerticalAlign.CENTER;
    titleLabel.getComponent(cc.Label).fontSize = 45;
    titleLabel.getComponent(cc.Label).lineHeight = 50;
    // titleLabel.getComponent(cc.Label).enableWrapText = true;
    titleLabel.getComponent(cc.Label).string = "标题";
    var label = new cc.Node('label');
    myNode.addChild(label);
    label.width = 500;
    label.height = 63;
    label.y = -146;
    label.addComponent(cc.Label);
    label.getComponent(cc.Label).fontSize = 30;
    label.getComponent(cc.Label).lineHeight = 35;
    label.getComponent(cc.Label).overflow = cc.Label.Overflow.RESIZE_HEIGHT;
    label.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER;
    label.getComponent(cc.Label).string = "描述";
    label.color = cc.Color.BLACK;
    var icon = new cc.Node('icon');
    myNode.addChild(icon);
    icon.y = 44;
    icon.addComponent(cc.Sprite);
    icon.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
    icon.width = 250;
    icon.height = 250;
    var image = new cc.Node('image');
    myNode.addChild(image);
    image.y = 44;
    image.width = 570;
    image.height = 300;
    image.addComponent(cc.Sprite);
    image.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
    var title = new cc.Node('title');
    myNode.addChild(title);
    title.x = 285;
    title.y = -189;
    title.addComponent(cc.Sprite);
    title.scale = 0.8;
    title.anchorX = 1;
    title.anchorY = 0;
    var closeButton = new cc.Node('closeButton');
    myNode.addChild(closeButton);
    closeButton.x = 250;
    closeButton.y = 264;
    closeButton.width = 50;
    closeButton.height = 50;
    closeButton.on(cc.Node.EventType.TOUCH_START, function (event) {
        console.log("------closeButton2222222---------");

        cc.game.emit("E_ADClOSE")
        oppoNativeAdSdk.callBackClose();
    });
    var close = new cc.Node('close');
    closeButton.addChild(close);
    close.addComponent(cc.Sprite);
    close.width = 35;
    close.height = 35;
    close.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
    lieyou_load('q_ad/close.png', (err, texture) => {
        close.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });
    oppoNativeAdSdk.touchLabel = touchLabel.getComponent(cc.Label);
    oppoNativeAdSdk.titleLabel = titleLabel.getComponent(cc.Label);
    oppoNativeAdSdk.wordLabel = label.getComponent(cc.Label);
    oppoNativeAdSdk.bgNode = bg;
    oppoNativeAdSdk.iconNode = icon;
    oppoNativeAdSdk.titleNode = title;
    return nativeAdNode;
}
window.lieyou_nativeBanner = function () {
    var nativeAdNode = new cc.Node("nativeAd");
    nativeAdNode.width = 720;
    nativeAdNode.height = 115;
    nativeAdNode.anchorY = 0;
    let oppoNativeAdSdk = nativeAdNode.addComponent('lieyou_oppoNativeAdSdk');
    var myNode = new cc.Node('myNode');
    nativeAdNode.addChild(myNode);
    var bg = new cc.Node('bg');
    myNode.addChild(bg);
    bg.anchorY = 0;
    bg.addComponent(cc.Sprite);
    bg.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
    lieyou_load('q_ad/bannerNativeBg.png', (err, texture) => {
        bg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        bg.width = 720;
        bg.height = self.banner_show_height;
    });
    bg.on(cc.Node.EventType.TOUCH_START, function (event) {
        oppoNativeAdSdk.callBackTouch();
    });
    var touch = new cc.Node('touch');
    myNode.addChild(touch);
    touch.width = 720;
    touch.height = 115;
    touch.anchorY = 0;
    var touchButton = new cc.Node('touchButton');
    myNode.addChild(touchButton);
    touchButton.x = 240;
    touchButton.y = 57.5;
    touchButton.width = 135;
    touchButton.height = 46;
    touchButton.addComponent(cc.Sprite);
    touchButton.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
    lieyou_load('q_ad/bannerNativeBtn.png', (err, texture) => {
        touchButton.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        touchButton.width = 135;
        touchButton.height = 46;
    });
    var touchLabel = new cc.Node('touchLabel');
    touchButton.addChild(touchLabel);
    touchLabel.width = 80;
    touchLabel.height = 40;
    touchLabel.addComponent(cc.Label);
    touchLabel.getComponent(cc.Label).fontSize = 20;
    touchLabel.getComponent(cc.Label).lineHeight = 20;
    // touchLabel.getComponent(cc.Label).enableWrapText = true;
    touchLabel.getComponent(cc.Label).string = "点击安装";

    var titleLabel = new cc.Node('titleLabel');
    myNode.addChild(titleLabel);
    titleLabel.width = 60.6;
    titleLabel.height = 50;
    titleLabel.y = 76.6;
    titleLabel.addComponent(cc.Label);
    titleLabel.getComponent(cc.Label).fontSize = 30;
    titleLabel.getComponent(cc.Label).lineHeight = 50;
    // titleLabel.getComponent(cc.Label).enableWrapText = true;
    titleLabel.getComponent(cc.Label).string = "标题";
    titleLabel.color = cc.Color.BLACK;
    var label = new cc.Node('label');
    myNode.addChild(label);
    label.width = 350;
    label.height = 25;
    label.y = 38.3;
    label.addComponent(cc.Label);
    label.getComponent(cc.Label).fontSize = 25;
    label.getComponent(cc.Label).lineHeight = 25;
    label.getComponent(cc.Label).overflow = cc.Label.Overflow.RESIZE_HEIGHT;
    label.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER;
    label.getComponent(cc.Label).string = "描述";
    label.color = cc.Color.BLACK;
    var icon = new cc.Node('icon');
    myNode.addChild(icon);
    icon.x = -250;
    icon.y = 57.5;
    icon.addComponent(cc.Sprite);
    icon.width = 80;
    icon.height = 80;
    icon.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;

    var image = new cc.Node('image');
    myNode.addChild(image);
    image.width = 720;
    image.height = 115;
    image.anchorY = 0;
    image.addComponent(cc.Sprite);
    image.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
    var bannerNativeAD = new cc.Node('bannerNativeAD');
    myNode.addChild(bannerNativeAD);
    bannerNativeAD.x = 360;
    bannerNativeAD.y = 115;
    bannerNativeAD.addComponent(cc.Sprite);
    bannerNativeAD.anchorX = 1;
    bannerNativeAD.anchorY = 1;
    lieyou_load('q_ad/bannerNativeAD.png', (err, texture) => {
        bannerNativeAD.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        bannerNativeAD.width = 51;
        bannerNativeAD.height = 26;
    });
    var closeButton = new cc.Node('closeButton');
    myNode.addChild(closeButton);
    closeButton.x = -360;
    closeButton.y = 115;
    closeButton.width = 40;
    closeButton.height = 40;
    closeButton.anchorX = 0;
    closeButton.anchorY = 1;
    closeButton.on(cc.Node.EventType.TOUCH_START, function (event) {
        console.log("------------E_ADClOSE-----")
        cc.game.emit("E_ADClOSE")
        oppoNativeAdSdk.callBackClose();
    });
    var close = new cc.Node('close');
    closeButton.addChild(close);
    close.addComponent(cc.Sprite);
    close.anchorX = 0;
    close.anchorY = 1;
    close.width = 35;
    close.height = 35;
    close.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
    lieyou_load('q_ad/bannerNativeClose.png', (err, texture) => {
        close.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });
    oppoNativeAdSdk.touchLabel = touchLabel.getComponent(cc.Label);
    oppoNativeAdSdk.titleLabel = titleLabel.getComponent(cc.Label);
    oppoNativeAdSdk.wordLabel = label.getComponent(cc.Label);
    oppoNativeAdSdk.bgNode = bg;
    oppoNativeAdSdk.iconNode = icon;
    return nativeAdNode;
}

window.getNativeAd_small = function (obj) {
    var bgWidth = 600;
    var bgHeight = 150;
    var node = new cc.Node();
    var bgSp = new cc.Node();
    node.addChild(bgSp);
    // cc.loader.loadRes(obj.bgPath, (err, texture) => {
    //     if (err || !bgSp.isValid) {
    //         return;
    //     }
    bgSp.addComponent(cc.Sprite);
    bgSp.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
    // bgSp.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);

    bgSp.getComponent(cc.Sprite).spriteFrame = obj.texture;
    bgSp.getComponent(cc.Sprite).spriteFrame.insetTop = obj.insetTop;
    bgSp.getComponent(cc.Sprite).spriteFrame.insetBottom = obj.insetBottom;
    bgSp.getComponent(cc.Sprite).spriteFrame.insetLeft = obj.insetLeft;
    bgSp.getComponent(cc.Sprite).spriteFrame.insetRight = obj.insetRight;
    bgSp.getComponent(cc.Sprite).type = cc.Sprite.Type.SLICED;
    bgSp.width = bgWidth + obj.insetLeft + obj.insetRight;
    bgSp.height = bgHeight + obj.insetTop + obj.insetBottom;
    // });
    bgSp.width = bgWidth + obj.insetLeft + obj.insetRight;
    bgSp.height = bgHeight + obj.insetTop + obj.insetBottom;
    bgSp.color = obj.bgColor;
    bgSp.opacity = obj.bgOpacity;

    var bg = new cc.Node();
    bg.width = bgWidth;
    bg.height = bgHeight;

    var icon = new cc.Node();
    if (obj.iconUrlList.length > 0) {
        lieyou_loadOnline(obj.iconUrlList[parseInt(Math.random() * obj.iconUrlList.length)], (err, texture) => {
            icon.addComponent(cc.Sprite);
            icon.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
            icon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
            icon.width = 120;
            icon.height = 120;
        });
    }
    icon.x = -(bgWidth / 2 - bgHeight / 2);

    var ad = new cc.Node();
    if (obj.adPath) {
        lieyou_load(obj.adPath, (err, texture) => {
            ad.addComponent(cc.Sprite);
            ad.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        });
    }
    ad.scale = 0.5;
    ad.anchorX = 1;
    ad.anchorY = 0;
    ad.x = bgWidth / 2;
    ad.y = -bgHeight / 2;

    var closeButton = new cc.Node();
    closeButton.width = obj.closeRange;
    closeButton.height = obj.closeRange;
    closeButton.anchorX = 1;
    closeButton.anchorY = 1;
    closeButton.x = bgWidth / 2;
    closeButton.y = bgHeight / 2;
    closeButton.on(cc.Node.EventType.TOUCH_START, function (event) {
        console.log("------------E_ADClOSE22222222-----")
        cc.game.emit("E_ADClOSE")
        node.destroy();

    });
    var closeButton2 = new cc.Node();
    lieyou_load("q_ad/nativeClose.png", (err, texture) => {
        closeButton2.addComponent(cc.Sprite);
        closeButton2.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });
    closeButton2.opacity = obj.spot_close_but_alpha;
    closeButton2.scale = obj.closeSize / 50;
    closeButton2.anchorX = 1;
    closeButton2.anchorY = 1;
    closeButton.addChild(closeButton2);

    var title = new cc.Node();
    var desc = new cc.Node();
    title.color = obj.titleLabelColor;
    desc.color = obj.descLabelColor;
    title.width = bgWidth - bgHeight;
    title.height = bgHeight / 2;
    desc.width = bgWidth - bgHeight;
    desc.height = bgHeight / 2;
    title.x = bgHeight / 2;
    title.y = bgHeight / 2 / 2;
    desc.x = bgHeight / 2;
    desc.y = -bgHeight / 2 / 2;
    var titleLabel = title.addComponent(cc.Label);
    var descLabel = desc.addComponent(cc.Label);
    titleLabel.fontSize = 30;
    titleLabel.overflow = cc.Label.Overflow.SHRINK;
    descLabel.fontSize = 30;
    descLabel.overflow = cc.Label.Overflow.SHRINK;
    titleLabel.string = obj.title;
    descLabel.string = obj.desc;
    titleLabel.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
    titleLabel.verticalAlign = cc.Label.VerticalAlign.CENTER;
    descLabel.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
    descLabel.verticalAlign = cc.Label.VerticalAlign.CENTER;

    obj.reportAdShowCallBack();

    bgSp.on(cc.Node.EventType.TOUCH_START, function (event) {
        obj.reportAdClickCallBack();
    });

    bg.addChild(title);
    bg.addChild(desc);
    bg.addChild(ad);
    bg.addChild(closeButton);
    bg.addChild(icon);
    node.addChild(bg);

    node.scale = obj.scale;
    return node;
}
window.getNativeAd_big = function (obj) {
    var bgWidth = 600;
    var bgHeight = 400;
    var node = new cc.Node();
    var bgSp = new cc.Node();
    node.addChild(bgSp);
    // cc.loader.loadRes(obj.bgPath, (err, texture) => {
    //     if (err || !bgSp.isValid) {
    //         return;
    //     }
    console.log(obj.texture, "------------obj.textrue")
    bgSp.addComponent(cc.Sprite);
    bgSp.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
    // bgSp.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    bgSp.getComponent(cc.Sprite).spriteFrame = obj.texture;
    bgSp.getComponent(cc.Sprite).spriteFrame.insetTop = obj.insetTop;
    bgSp.getComponent(cc.Sprite).spriteFrame.insetBottom = obj.insetBottom;
    bgSp.getComponent(cc.Sprite).spriteFrame.insetLeft = obj.insetLeft;
    bgSp.getComponent(cc.Sprite).spriteFrame.insetRight = obj.insetRight;
    bgSp.getComponent(cc.Sprite).type = cc.Sprite.Type.SLICED;
    bgSp.width = bgWidth + obj.insetLeft + obj.insetRight;
    bgSp.height = bgHeight + obj.insetTop + obj.insetBottom;
    // });
    bgSp.width = bgWidth + obj.insetLeft + obj.insetRight;
    bgSp.height = bgHeight + obj.insetTop + obj.insetBottom;
    bgSp.color = obj.bgColor;
    bgSp.opacity = obj.bgOpacity;
    var bg = new cc.Node();
    bg.width = bgWidth;
    bg.height = bgHeight;
    var icon = new cc.Node();
    if (obj.iconUrlList.length > 0 || obj.imgUrlList.length > 0) {
        var adWidth = 270;
        var adHeight = 270;
        if (obj.imgUrlList.length > 0) {
            adWidth = bgWidth;
            adHeight = 270;
        }
        var adUrl = "";
        if (obj.imgUrlList.length > 0) {
            adUrl = obj.imgUrlList[parseInt(Math.random() * obj.imgUrlList.length)];
        } else if (obj.iconUrlList.length > 0) {
            adUrl = obj.iconUrlList[parseInt(Math.random() * obj.iconUrlList.length)];
        }
        lieyou_loadOnline(adUrl, (err, texture) => {
            icon.addComponent(cc.Sprite);
            icon.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
            icon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
            icon.width = adWidth;
            icon.height = adHeight;
        });
    }

    var ad = new cc.Node();
    if (obj.adPath) {
        lieyou_load(obj.adPath, (err, texture) => {
            ad.addComponent(cc.Sprite);
            ad.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        });
    }
    ad.scale = 0.5;
    ad.anchorX = 1;
    ad.anchorY = 0;
    ad.x = bgWidth / 2;
    ad.y = -bgHeight / 2;

    var closeButton = new cc.Node();
    closeButton.width = obj.closeRange;
    closeButton.height = obj.closeRange;
    closeButton.anchorX = 1;
    closeButton.anchorY = 1;
    closeButton.x = bgWidth / 2;
    closeButton.y = bgHeight / 2;
    closeButton.on(cc.Node.EventType.TOUCH_START, function (event) {

        console.log("------------E_ADClOSE3333333333-----")
        cc.game.emit("E_ADClOSE")
        node.destroy();
    });
    var closeButton2 = new cc.Node();
    lieyou_load("q_ad/nativeClose.png", (err, texture) => {
        closeButton2.addComponent(cc.Sprite);
        closeButton2.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });
    closeButton2.opacity = obj.spot_close_but_alpha;
    closeButton2.scale = obj.closeSize / 50;
    closeButton2.anchorX = 1;
    closeButton2.anchorY = 1;
    closeButton.addChild(closeButton2);

    var title = new cc.Node();
    var desc = new cc.Node();
    title.color = obj.titleLabelColor;
    desc.color = obj.descLabelColor;
    title.width = 400;
    title.height = 50;
    desc.width = 400;
    desc.height = 50;
    title.x = 0;
    title.y = 175;
    desc.x = 0;
    desc.y = -175;
    var titleLabel = title.addComponent(cc.Label);
    var descLabel = desc.addComponent(cc.Label);
    titleLabel.fontSize = 40;
    titleLabel.overflow = cc.Label.Overflow.SHRINK;
    descLabel.fontSize = 30;
    descLabel.overflow = cc.Label.Overflow.SHRINK;
    titleLabel.string = obj.title;
    descLabel.string = obj.desc;
    titleLabel.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
    titleLabel.verticalAlign = cc.Label.VerticalAlign.CENTER;
    descLabel.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
    descLabel.verticalAlign = cc.Label.VerticalAlign.CENTER;

    obj.reportAdShowCallBack();

    bgSp.on(cc.Node.EventType.TOUCH_START, function (event) {
        obj.reportAdClickCallBack();
    });

    bg.addChild(title);
    bg.addChild(desc);
    bg.addChild(ad);
    bg.addChild(closeButton);
    bg.addChild(icon);
    node.addChild(bg);
    node.scale = obj.scale;
    return node;
}
window.getNativeAd_load = function (obj) {
    var node = new cc.Node();
    var winSize = cc.winSize;



    var bgSp = new cc.Node();
    node.addChild(bgSp);
    lieyou_load('q_ad/nativeEmbedBg.png', (err, texture) => {
        bgSp.addComponent(cc.Sprite);
        bgSp.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
        bgSp.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        bgSp.width = winSize.width;
        bgSp.height = winSize.height;
    });
    bgSp.color = cc.color(0, 0, 0);
    bgSp.opacity = 255;
    bgSp.addComponent(cc.BlockInputEvents);

    var bg = new cc.Node();
    node.addChild(bg);

    var jumpNode = new cc.Node();
    bg.addChild(jumpNode);
    jumpNode.x = winSize.width * 0.8 / 2;
    jumpNode.y = winSize.height * 0.75 / 2;
    jumpNode.width = 80;
    jumpNode.height = 80;
    jumpNode.scale = lieyou_SdkManager._SceneScale;

    var loadNode = new cc.Node();
    bg.addChild(loadNode);
    loadNode.y = -winSize.height / 2;
    loadNode.scale = lieyou_SdkManager._SceneScale;

    var loadbg = new cc.Node();
    loadbg.color = obj.loadBgColor;
    loadNode.addChild(loadbg);
    loadbg.y = 80;
    lieyou_load('q_ad/nativeEmbedBg.png', (err, texture) => {
        loadbg.addComponent(cc.Sprite);
        loadbg.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
        loadbg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        loadbg.width = 720;
        loadbg.height = 160;
    });

    var loadSp_0 = new cc.Node();
    loadNode.addChild(loadSp_0);
    loadSp_0.y = 120;
    lieyou_load('q_ad/nativeEmbed_0.png', (err, texture) => {
        loadSp_0.addComponent(cc.Sprite);
        loadSp_0.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });

    var loadSp_1 = new cc.Node();
    loadNode.addChild(loadSp_1);
    loadSp_1.y = loadSp_0.y;
    loadSp_1.addComponent(cc.Sprite);
    lieyou_load('q_ad/nativeEmbed_1.png', (err, texture) => {
        loadSp_1.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });

    var loadWorld = new cc.Node();
    loadWorld.color = obj.loadWordColor;
    loadNode.addChild(loadWorld);
    loadWorld.y = 60;
    var loadWorldLabel = loadWorld.addComponent(cc.Label);
    loadWorldLabel.string = "";
    loadWorldLabel.fontSize = 30;


    var jumpQuan = new cc.Node();
    jumpNode.addChild(jumpQuan);
    jumpQuan.addComponent(cc.Sprite);
    lieyou_load('q_ad/nativeEmbedQuan.png', (err, texture) => {
        jumpQuan.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });

    var jumpClose = new cc.Node();
    jumpNode.addChild(jumpClose);
    lieyou_load('q_ad/nativeEmbedClose.png', (err, texture) => {
        jumpClose.addComponent(cc.Sprite);
        jumpClose.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });

    jumpQuan.getComponent(cc.Sprite).type = cc.Sprite.Type.FILLED;
    jumpQuan.getComponent(cc.Sprite).fillType = cc.Sprite.FillType.RADIAL;
    jumpQuan.getComponent(cc.Sprite).fillCenter = cc.v2(0.5, 0.5);
    jumpQuan.getComponent(cc.Sprite).fillStart = 0.25;
    jumpQuan.getComponent(cc.Sprite).fillRange = 1;

    loadSp_1.getComponent(cc.Sprite).type = cc.Sprite.Type.FILLED;
    loadSp_1.getComponent(cc.Sprite).fillType = cc.Sprite.FillType.HORIZONTAL;
    loadSp_1.getComponent(cc.Sprite).fillStart = 0;
    loadSp_1.getComponent(cc.Sprite).fillRange = 0;

    var ad = new cc.Node();
    lieyou_load("q_ad/nativeEmbedAdBottom.png", (err, texture) => {
        ad.addComponent(cc.Sprite);
        ad.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });
    ad.anchorX = 1;
    ad.anchorY = 0;
    ad.x = 720 / 2;
    ad.y = 160;
    loadNode.addChild(ad);

    var adNode = getNativeAd_big(obj);
    node.addChild(adNode);

    var js = node.addComponent('lieyou_nativeLoad');

    js.quanNode = jumpQuan;
    js.loadNode = loadSp_1;
    js.loadLabel = loadWorldLabel;
    js.allTime = obj.loadTime * 60;
    js.closeCallBack = obj.callBack;
    jumpNode.on(cc.Node.EventType.TOUCH_START, function (event) {
        js.callBack();
    });

    return node;
}