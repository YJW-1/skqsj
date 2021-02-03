window.lieyou_getInstallShortcutPrefab = function () {
    var node = new cc.Node();
    node.on(cc.Node.EventType.TOUCH_END, function (event) {
        node.callFun();
    });
    node.addComponent(cc.Sprite);
    lieyou_load('installShortcut/bg', (err, texture) => {
        node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });

    var heartBg = new cc.Node();
    var heart = new cc.Node();
    var figer = new cc.Node();

    node.addChild(heartBg);
    node.addChild(heart);
    node.addChild(figer);

    heartBg.addComponent(cc.Sprite);
    lieyou_load('installShortcut/heartBg', (err, texture) => {
        heartBg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });
    heart.addComponent(cc.Sprite);
    lieyou_load('installShortcut/heart', (err, texture) => {
        heart.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });
    figer.addComponent(cc.Sprite);
    lieyou_load('installShortcut/figer', (err, texture) => {
        figer.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });

    heartBg.y = 12;
    heart.y = 12;
    figer.y = -110;
    heartBg.runAction(cc.repeatForever(cc.sequence(cc.callFunc(() => {
        heartBg.opacity = 255;
        heartBg.scale = 1;
    }), cc.spawn(cc.scaleTo(0.8, 3), cc.fadeOut(0.8)))));
    figer.runAction(cc.repeatForever(cc.sequence(cc.moveBy(0.5, 0, -40), cc.moveBy(0.5, 0, 40))));

    return node;
}

window.lieyou_getInstallShortcutDialogPrefab = function () {
    var node = new cc.Node();

    var pingbi = new cc.Node();
    node.addChild(pingbi);
    pingbi.addComponent(cc.BlockInputEvents);
    pingbi.addComponent(cc.Sprite);
    pingbi.opacity = 50;
    lieyou_load('q_ad/oppo_native_insters_layerBg.png', (err, texture) => {
        pingbi.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        pingbi.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
        pingbi.width = lieyou_SdkManager.sdkWinSize.width;
        pingbi.height = lieyou_SdkManager.sdkWinSize.height;
    });
    var bg = new cc.Node();
    node.scale = lieyou_SdkManager._SceneScale;
    pingbi.scale = 1 / lieyou_SdkManager._SceneScale;
    node.addChild(bg);
    bg.addComponent(cc.Sprite);
    lieyou_load('q_ad/bg.png', (err, texture) => {
        bg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        bg.getComponent(cc.Sprite).spriteFrame.insetTop = 100;
        bg.getComponent(cc.Sprite).spriteFrame.insetBottom = 20;
        bg.getComponent(cc.Sprite).spriteFrame.insetLeft = 50;
        bg.getComponent(cc.Sprite).spriteFrame.insetRight = 50;
        bg.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
        bg.getComponent(cc.Sprite).type = cc.Sprite.Type.SLICED;
        bg.width = 650;
        bg.height = 400;
    });

    var touchButton = new cc.Node();
    bg.addChild(touchButton);
    touchButton.y = -80;

    touchButton.addComponent(cc.Sprite);
    lieyou_load('q_ad/touch.png', (err, texture) => {
        // touchButton.active = false;
        touchButton.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        touchButton.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
        touchButton.width = 354 * 0.7;
        touchButton.height = 117 * 0.7;
    });

    var closeButton = new cc.Node();
    bg.addChild(closeButton);
    closeButton.x = 0;
    closeButton.y = -160;

    closeButton.addComponent(cc.Sprite);
    lieyou_load('installShortcut/close.png', (err, texture) => {
        closeButton.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        closeButton.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
    });

    var touchName = new cc.Node();
    touchButton.addChild(touchName);
    touchName.addComponent(cc.Sprite);
    lieyou_load('installShortcut/add.png', (err, texture) => {
        touchName.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });

    var title = new cc.Node();
    bg.addChild(title);
    title.y = 160;
    title.addComponent(cc.Sprite);
    lieyou_load('installShortcut/title.png', (err, texture) => {
        title.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });

    var world = new cc.Node();
    bg.addChild(world);
    world.y = 70;
    world.addComponent(cc.Sprite);
    lieyou_load('installShortcut/world.png', (err, texture) => {
        world.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });

    var day = new cc.Node();
    bg.addChild(day);
    day.y = 0;
    day.x = -25;
    day.addComponent(cc.Sprite);
    lieyou_load('installShortcut/day.png', (err, texture) => {
        day.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });

    var okBg = new cc.Node();
    var ok = new cc.Node();
    ok.active = false;
    okBg.addChild(ok);
    day.addChild(okBg);
    okBg.x = 100;
    okBg.addComponent(cc.Sprite);
    okBg.on(cc.Node.EventType.TOUCH_START, function (event) {
        ok.active = !ok.active;
    });
    lieyou_load('installShortcut/okBg.png', (err, texture) => {
        okBg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });

    ok.addComponent(cc.Sprite);
    lieyou_load('installShortcut/ok.png', (err, texture) => {
        ok.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });



    console.log("------------E_ADClOSE111111111111111111-----")
    closeButton.on(cc.Node.EventType.TOUCH_START, function (event) {
        if (ok.active) {
            var dayTime = lieyou_getTimeDay();
            Userdefault.setDataForKey('lieyou_notShowInstallShortcut', dayTime);
        }

        console.log("------------E_ADClOSE22222222-----")
        cc.game.emit("E_ADClOSE")
        node.destroy();
    });

    touchButton.on(cc.Node.EventType.TOUCH_START, function (event) {
        if (ok.active) {
            var dayTime = lieyou_getTimeDay();
            Userdefault.setDataForKey('lieyou_notShowInstallShortcut', dayTime);
        }
        lieyou_SdkManager.instance.installShortcut({
            canShow: true, success: () => {
                var addGold = parseInt(Math.random() * 10) + 10;
                var gold = Userdefault.getIntForKey(lieyou.Key_Gold, 0);
                Userdefault.setDataForKey(lieyou.Key_Gold, gold + addGold);

            }
        });
        node.destroy();
    });

    closeButton.scale = 0;
    closeButton.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(() => {
        closeButton.scale = 1;
    })));

    var nativeNode = new cc.Node();
    nativeNode.y = -270;
    nativeNode.addComponent(cc.Sprite);
    lieyou_load('installShortcut/whiteBg.png', (err, texture) => {
        nativeNode.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        nativeNode.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
        nativeNode.width = 600;
        nativeNode.height = 400;
    });
    node.addChild(nativeNode);
    // nativeNode.scale = 1/lieyou_SdkManager._SceneScale;


    if (false && cc.winSize.height > cc.winSize.width && lieyou_SdkManager.showNativeAd_big({ node: nativeNode, bgPath: "null", scale: 1 })) {
        bg.y = 200;
    } else {
        nativeNode.active = false;
    }

    return node;
}