"use strict";
cc._RF.push(module, '693993ix+VLiKCuF5UGbR64', 'lieyou_tt_Prefab');
// resources/SDK/module/tt_luPing/lieyou_tt_Prefab.js

"use strict";

window.lieyou_tt_liPingPrefab = function () {
  var node = new cc.Node('lipingBtn');
  node.width = 100;
  node.height = 100;
  var js = node.addComponent('lieyou_tt_luPing');
  node.on(cc.Node.EventType.TOUCH_END, function (event) {
    js.callBack();
  });
  var luPingBegin = new cc.Node('luPingBegin');
  var luPingEnd = new cc.Node('luPingEnd');
  var luPingEnd2 = new cc.Node('luPingEnd2');
  luPingBegin.addComponent(cc.Sprite);
  luPingEnd.addComponent(cc.Sprite);
  luPingEnd2.addComponent(cc.Sprite);
  luPingEnd2.y = 70;
  lieyou_load('tt/luPingEnd2', function (err, texture) {
    luPingEnd2.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  node.addChild(luPingBegin);
  node.addChild(luPingEnd);
  luPingEnd.addChild(luPingEnd2);
  luPingEnd.active = false;
  return node;
}; // window.lieyou_tt_ShareDialogPrefab = function(){
//     lieyou_SdkManager.stopLuPing();
//     var node = new cc.Node();
//     var pingbi = new cc.Node();
//     node.addChild(pingbi);
//     pingbi.addComponent(cc.BlockInputEvents);
//     pingbi.addComponent(cc.Sprite);
//     pingbi.opacity = 50;
//     lieyou_load('q_ad/oppo_native_insters_layerBg.png', (err, texture) => {
//         pingbi.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
//         pingbi.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
//         pingbi.width = lieyou_SdkManager.sdkWinSize.width;
//         pingbi.height = lieyou_SdkManager.sdkWinSize.height;
//     });
//     var bg = new cc.Node();
//     node.scale = lieyou_SdkManager._SceneScale;
//     pingbi.scale = 1/lieyou_SdkManager._SceneScale;
//     node.addChild(bg);
//     bg.addComponent(cc.Sprite);
//     lieyou_load('q_ad/bg.png', (err, texture) => {
//         bg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
//         bg.getComponent(cc.Sprite).spriteFrame.insetTop = 100;
//         bg.getComponent(cc.Sprite).spriteFrame.insetBottom = 20;
//         bg.getComponent(cc.Sprite).spriteFrame.insetLeft = 50;
//         bg.getComponent(cc.Sprite).spriteFrame.insetRight = 50;
//         bg.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
//         bg.getComponent(cc.Sprite).type = cc.Sprite.Type.SLICED;
//         bg.width = 650;
//         bg.height = 430;
//     });
//     var touchButton = new cc.Node();
//     node.addChild(touchButton);
//     touchButton.y = -145;
//     touchButton.addComponent(cc.Sprite);
//     lieyou_load('q_ad/touch.png', (err, texture) => {
//         touchButton.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
//         touchButton.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
//         touchButton.width = 354*0.8;
//         touchButton.height = 117*0.8;
//     });
//     var closeButton = new cc.Node();
//     node.addChild(closeButton);
//     closeButton.x = 210;
//     closeButton.y = 175;
//     closeButton.addComponent(cc.Sprite);
//     lieyou_load('q_ad/close.png', (err, texture) => {
//         closeButton.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
//         closeButton.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
//         closeButton.width = 40;
//         closeButton.height = 40;
//     });
//     var touchName = new cc.Node();
//     touchButton.addChild(touchName);
//     touchName.addComponent(cc.Sprite);
//     lieyou_load('tt/btnworld.png', (err, texture) => {
//         touchName.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
//     });
//     var title = new cc.Node();
//     node.addChild(title);
//     title.y = 175;
//     title.addComponent(cc.Sprite);
//     lieyou_load('tt/title.png', (err, texture) => {
//         title.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
//     });
//     var world = new cc.Node();
//     node.addChild(world);
//     world.y = -75;
//     world.addComponent(cc.Sprite);
//     lieyou_load('tt/world.png', (err, texture) => {
//         world.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
//     });
//     var world2 = new cc.Node();
//     node.addChild(world2);
//     world2.y = 50;
//     world2.addComponent(cc.Sprite);
//     lieyou_load('tt/shareWorld.png', (err, texture) => {
//         world2.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
//     });
//     closeButton.on(cc.Node.EventType.TOUCH_START, function(event){
//         if(node.callFun){
//             node.callFun(4);
//         }
//         node.destroy();
//     }, );
//     touchButton.addComponent(cc.Button);
//     touchButton.on("click", function(event){
//         lieyou_SdkManager.shareVd(function(type){
//             if(node.callFun){
//                 node.callFun(type);
//             }
//             if(type == 1){
//                 node.destroy();
//             }
//         });
//     }, );
//     closeButton.scale = 0;
//     closeButton.runAction(cc.sequence(cc.delayTime(2),cc.callFunc(()=>{
//         closeButton.scale = 1;
//     })));
//     return node;
// }


window.lieyou_tt_ShareDialogPrefab = function () {
  var bgWidth = 600;
  var bgHeight = 900;
  var scaleX = 0.6;
  var scaleY = 0.6;

  if (cc.winSize.width > cc.winSize.height) {
    bgWidth = 700;
    bgHeight = 500;
    scaleX = 0.5;
    scaleY = 0.5;
  }

  lieyou_SdkManager.stopLuPing();
  var node = new cc.Node();
  var pingbi = new cc.Node();
  node.addChild(pingbi);
  pingbi.addComponent(cc.BlockInputEvents);
  pingbi.addComponent(cc.Sprite);
  pingbi.opacity = 100;
  lieyou_load('q_ad/oppo_native_insters_layerBg.png', function (err, texture) {
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
  lieyou_load('tt/share_bg.png', function (err, texture) {
    bg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    bg.getComponent(cc.Sprite).spriteFrame.insetTop = 30;
    bg.getComponent(cc.Sprite).spriteFrame.insetBottom = 30;
    bg.getComponent(cc.Sprite).spriteFrame.insetLeft = 30;
    bg.getComponent(cc.Sprite).spriteFrame.insetRight = 30;
    bg.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
    bg.getComponent(cc.Sprite).type = cc.Sprite.Type.SLICED;
    bg.width = bgWidth;
    bg.height = bgHeight;
  });
  var screenshotNode = lieyou_SdkManager.getScreenshot();
  node.addChild(screenshotNode);
  screenshotNode.y = 20;
  screenshotNode.runAction(cc.scaleTo(0.5, scaleX, scaleY));
  var touchButton = new cc.Node();
  node.addChild(touchButton);
  touchButton.y = -bgHeight / 2 + 80;
  touchButton.addComponent(cc.Sprite);
  lieyou_load('tt/share_share.png', function (err, texture) {
    touchButton.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  var closeButton = new cc.Node();
  node.addChild(closeButton);

  if (bgWidth > bgHeight) {
    closeButton.x = -bgWidth / 2 - 50;
    closeButton.y = bgHeight / 2 - 40;
  } else {
    closeButton.x = -bgWidth / 2 + 40;
    closeButton.y = bgHeight / 2 + 50;
  }

  closeButton.addComponent(cc.Sprite);
  lieyou_load('tt/share_close.png', function (err, texture) {
    closeButton.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    closeButton.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  });
  var title = new cc.Node();
  node.addChild(title);
  title.y = bgHeight / 2 - 40;
  title.addComponent(cc.Sprite);
  lieyou_load('tt/share_title.png', function (err, texture) {
    title.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  var pingbi2 = new cc.Node();
  screenshotNode.addChild(pingbi2);
  pingbi2.addComponent(cc.Sprite);
  pingbi2.opacity = 100;
  lieyou_load('q_ad/oppo_native_insters_layerBg.png', function (err, texture) {
    pingbi2.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    pingbi2.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
    pingbi2.width = lieyou_SdkManager.sdkWinSize.width;
    pingbi2.height = lieyou_SdkManager.sdkWinSize.height;
  });
  var world = new cc.Node();
  screenshotNode.addChild(world);
  world.y = 100;
  world.addComponent(cc.Sprite);
  lieyou_load('tt/share_pause.png', function (err, texture) {
    world.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  var world2 = new cc.Node();
  screenshotNode.addChild(world2);
  world2.y = -100;
  world2.addComponent(cc.Sprite);
  lieyou_load('tt/share_image.png', function (err, texture) {
    world2.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  world.scale = 2;
  world2.scale = 2; // world.color = cc.Color.RED;
  // world2.color = cc.Color.RED;

  closeButton.on(cc.Node.EventType.TOUCH_START, function (event) {
    if (node.callFun) {
      node.callFun(4);
    }

    node.destroy();
  });
  touchButton.addComponent(cc.Button);
  touchButton.on("click", function (event) {
    lieyou_SdkManager.shareVd(function (type) {
      if (node.callFun) {
        node.callFun(type);
      }

      if (type == 1) {
        node.destroy();
      }
    });
  });
  world.addComponent(cc.Button);
  world.on("click", function (event) {
    lieyou_SdkManager.shareVd(function (type) {
      if (node.callFun) {
        node.callFun(type);
      }

      if (type == 1) {
        node.destroy();
      }
    });
  });
  var share_shareTitle = new cc.Node();
  share_shareTitle.addComponent(cc.Sprite);
  lieyou_load('tt/share_shareTitle.png', function (err, texture) {
    share_shareTitle.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  touchButton.addChild(share_shareTitle);
  share_shareTitle.y = 75;
  closeButton.scale = 0;
  closeButton.runAction(cc.sequence(cc.delayTime(2), cc.callFunc(function () {
    closeButton.scale = 1;
  })));
  return node;
};

window.showTTRewardedVideoAdDialog = function () {
  var fNode = cc.director.getScene();
  var node = new cc.Node();
  var pingbi = new cc.Node();
  node.addChild(pingbi);
  pingbi.addComponent(cc.BlockInputEvents);
  pingbi.addComponent(cc.Sprite);
  pingbi.opacity = 150;
  lieyou_load('q_ad/oppo_native_insters_layerBg.png', function (err, texture) {
    pingbi.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    pingbi.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
    pingbi.width = lieyou_SdkManager.sdkWinSize.width;
    pingbi.height = lieyou_SdkManager.sdkWinSize.height;
  });
  var dialogBg = new cc.Node();
  var dialogClose = new cc.Node();
  var dialogPlayVd_1 = new cc.Node();
  var dialogPlayVd_2 = new cc.Node();
  var dialogBgUrl = "tt_video_bg2.png";
  var dialogBgWidth = 547;
  var dialogBgHeight = 483;

  if (lieyou_SdkManager.sdkWinSize.width > lieyou_SdkManager.sdkWinSize.height) {
    dialogBgUrl = "tt_video_bg.png";
    dialogBgWidth = 721;
    dialogBgHeight = 478;
  }

  dialogClose.x = dialogBgWidth / 2 - 40;
  dialogClose.y = dialogBgHeight / 2 - 40;
  dialogPlayVd_1.y = -dialogBgHeight / 2;
  dialogPlayVd_2.y = -dialogBgHeight / 2 - 80;
  lieyou_load('tt/' + dialogBgUrl, function (err, texture) {
    dialogBg.addComponent(cc.Sprite);
    dialogBg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  lieyou_load('tt/tt_video_close.png', function (err, texture) {
    dialogClose.addComponent(cc.Sprite);
    dialogClose.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  lieyou_load('tt/tt_video_p1.png', function (err, texture) {
    dialogPlayVd_1.addComponent(cc.Sprite);
    dialogPlayVd_1.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  lieyou_load('tt/tt_video_p2.png', function (err, texture) {
    dialogPlayVd_2.addComponent(cc.Sprite);
    dialogPlayVd_2.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  dialogClose.addComponent(cc.Button);
  dialogClose.on("click", function (event) {
    node.destroy();
  });
  dialogPlayVd_1.addComponent(cc.Button);
  dialogPlayVd_1.on("click", function (event) {
    lieyou_SdkManager.showRewardedVideoAd(null, null);
    node.destroy();
  });
  dialogPlayVd_2.addComponent(cc.Button);
  dialogPlayVd_2.on("click", function (event) {
    lieyou_SdkManager.showRewardedVideoAd(null, null);
    node.destroy();
  });
  fNode.addChild(node);
  node.addChild(dialogBg);
  dialogBg.addChild(dialogClose);
  dialogBg.addChild(dialogPlayVd_1);
  dialogBg.addChild(dialogPlayVd_2);
  node.x = lieyou_SdkManager.sdkWinSize.width / 2;
  node.y = lieyou_SdkManager.sdkWinSize.height / 2;
};

cc._RF.pop();