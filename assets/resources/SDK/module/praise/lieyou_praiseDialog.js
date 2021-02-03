
window.lieyou_native_praiseDialogPrefab = function(){
    var cantouch = true;
    var addGoldNum = lieyou.Props_Base_Gold * 5;

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
    pingbi.scale = 1/lieyou_SdkManager._SceneScale;
    node.addChild(bg);
    bg.addComponent(cc.Sprite);
    lieyou_load('native/bg2.png', (err, texture) => {
        bg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });

    var touchButton = new cc.Node();
    node.addChild(touchButton);
    touchButton.x = 140;
    touchButton.y = -120;
    touchButton.addComponent(cc.Sprite);
    lieyou_load('native/praise.png', (err, texture) => {
        touchButton.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });

    var closeButton = new cc.Node();
    node.addChild(closeButton);
    closeButton.x = -140;
    closeButton.y = -120;
    closeButton.addComponent(cc.Sprite);
    lieyou_load('native/close.png', (err, texture) => {
        closeButton.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });


    closeButton.on(cc.Node.EventType.TOUCH_START, function(event){
        if(!cantouch) {
            return;
        }
        node.destroy();
    }, );

    touchButton.on(cc.Node.EventType.TOUCH_START, function(event){
        if(!cantouch) {
            return;
        }
        cantouch = false;
        Userdefault.setBoolForKey("alreadyPraise",true);
        lieyou_SdkManager.callAndroid(ACTION_RATE);
        node.runAction(cc.sequence(cc.delayTime(0.1),cc.callFunc(function(){
            var gold = Userdefault.getIntForKey(lieyou.Key_Gold) + addGoldNum;
            Userdefault.setDataForKey(lieyou.Key_Gold,gold);
            node.destroy();
        })));
    }, );

    var title = new cc.Node();
    title.color = cc.color(0,0,0);
    title.width = 500;
    node.addChild(title);
    title.y = 50;
    var label = title.addComponent(cc.Label);
    label.fontSize = 40;
    label.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
    label.verticalAlign = cc.Label.VerticalAlign.BOTTOM;
    label.string = "喜欢这款游戏吗？去给我们留言吧！五星好评送" + addGoldNum + "金币哦！";
    if(addGoldNum == 0){
        label.string = "喜欢这款游戏吗？去给我们留言五星好评吧！";
    }


    return node;
}
