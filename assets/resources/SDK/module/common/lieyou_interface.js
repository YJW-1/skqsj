window.lieyou_interface = {
    showToast(title){
        let node = new cc.Node();
        let fNode = cc.director.getScene();
        fNode.addChild(node);
        node.x = cc.winSize.width/2;
        node.y = cc.winSize.height/2;
        node.runAction(cc.sequence(cc.moveBy(0.7,0,200).easing(cc.easeBackOut(2)),cc.fadeOut(0.7),cc.removeSelf()));
        let toastbg = new cc.Node();
        node.addChild(toastbg);
        toastbg.addComponent(cc.Sprite);
        lieyou_load('common/toastBg', (err, texture) => {
            toastbg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
            toastbg.getComponent(cc.Sprite).spriteFrame.insetTop = 13;
            toastbg.getComponent(cc.Sprite).spriteFrame.insetBottom = 13;
            toastbg.getComponent(cc.Sprite).spriteFrame.insetLeft = 13;
            toastbg.getComponent(cc.Sprite).spriteFrame.insetRight = 13;
            toastbg.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
            toastbg.getComponent(cc.Sprite).type = cc.Sprite.Type.SLICED;
            toastbg.width = 40;
            toastbg.height = 93;
        });
        let layout = toastbg.addComponent(cc.Layout);
        layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
        layout.paddingLeft = 20;
        layout.paddingRight = 20;
        layout.paddingTop = 15;
        layout.paddingBottom = 15;
        let toastLabel = new cc.Node();
        toastbg.addChild(toastLabel);
        let label = toastLabel.addComponent(cc.Label);
        label.fontSize = 35;
        label.string = title;
    },
}