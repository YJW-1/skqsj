"use strict";
cc._RF.push(module, '716b65bMWZNV4vPLayhe5az', 'lieyou_interface');
// resources/SDK/module/common/lieyou_interface.js

"use strict";

window.lieyou_interface = {
  showToast: function showToast(title) {
    var node = new cc.Node();
    var fNode = cc.director.getScene();
    fNode.addChild(node);
    node.x = cc.winSize.width / 2;
    node.y = cc.winSize.height / 2;
    node.runAction(cc.sequence(cc.moveBy(0.7, 0, 200).easing(cc.easeBackOut(2)), cc.fadeOut(0.7), cc.removeSelf()));
    var toastbg = new cc.Node();
    node.addChild(toastbg);
    toastbg.addComponent(cc.Sprite);
    lieyou_load('common/toastBg', function (err, texture) {
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
    var layout = toastbg.addComponent(cc.Layout);
    layout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
    layout.paddingLeft = 20;
    layout.paddingRight = 20;
    layout.paddingTop = 15;
    layout.paddingBottom = 15;
    var toastLabel = new cc.Node();
    toastbg.addChild(toastLabel);
    var label = toastLabel.addComponent(cc.Label);
    label.fontSize = 35;
    label.string = title;
  }
};

cc._RF.pop();