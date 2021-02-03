window.lieyou_bossNode_prefab = function(){
    var bossKey = new cc.Node('bossKey');
    var js = bossKey.addComponent('BossKey_SDK');
    var node = new cc.Node('node');
    var node2 = new cc.Node('node');
    var bg = new cc.Node('bg');
    var ScrollView = new cc.Node('ScrollView');
    var view = new cc.Node('view');
    var content = new cc.Node('content');
    var clear = new cc.Node('clear');
    var close = new cc.Node('close');
    var version = new cc.Node('version');

    node2.active = false;

    bossKey.addChild(node);
    node.addChild(node2);
    node2.addChild(bg);
    node2.addChild(ScrollView);
    node2.addChild(clear);
    node2.addChild(close);
    node2.addChild(version);
    ScrollView.addChild(view);
    view.addChild(content);

    node.width = 100;
    node.height = 100;
    node.anchorX = 0;
    node.anchorY = 1;

    var sizeW = 300;
    var sizeH = 450;

    node2.width = sizeW;
    node2.height = sizeH;
    node2.anchorX = 0;
    node2.anchorY = 1;

    bg.width = sizeW;
    bg.height = sizeH;
    bg.anchorX = 0;
    bg.anchorY = 1;
    bg.addComponent(cc.Sprite);
    bg.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
    lieyou_load('qgameMoreGame/oppo_native_insters_layerBg', (err, texture) => {
        bg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });
    bg.opacity = 100;

    ScrollView.width = sizeW;
    ScrollView.height = sizeH-50;
    ScrollView.anchorX = 0;
    ScrollView.anchorY = 1;
    
    view.width = sizeW;
    view.height = sizeH-50;
    view.anchorX = 0;
    view.anchorY = 1;
    view.addComponent(cc.Mask);

    content.width = sizeW;
    content.anchorX = 0;
    content.anchorY = 0;
    var layout = content.addComponent(cc.Layout);
    layout.type = cc.Layout.Type.VERTICAL;
    layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
    layout.verticalDirection = cc.Layout.VerticalDirection.TOP_TO_BOTTOM;
    content.y = (sizeH-50)*-1;
    

    clear.anchorX = 1;
    clear.anchorY = 0;
    close.anchorX = 1;
    close.anchorY = 0;
    version.anchorX = 0;
    version.anchorY = 0;
    version.addComponent(cc.Label);
    version.getComponent(cc.Label).fontSize = 18;
    version.getComponent(cc.Label).lineHeight = 18;
    clear.addComponent(cc.Label);
    clear.getComponent(cc.Label).fontSize = 30;
    clear.getComponent(cc.Label).lineHeight = 30;
    clear.getComponent(cc.Label).string = '清除';
    close.addComponent(cc.Label);
    close.getComponent(cc.Label).fontSize = 30;
    close.getComponent(cc.Label).lineHeight = 30;
    close.getComponent(cc.Label).string = '关闭';

    clear.x = sizeW-80;
    clear.y = -sizeH;
    close.x = sizeW;
    close.y = -sizeH;
    version.y = -sizeH;

    close.on(cc.Node.EventType.TOUCH_END, function(event){
        js.closeCallBack();
    }, );
    clear.on(cc.Node.EventType.TOUCH_END, function(event){
        js.clearCallBack();
    }, );

    js.bossNode = node;
    return bossKey;
}