
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/module/qGameNativeAd/lieyou_nativeAdPrefab.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6df2d5lETlKO7R2+WWjRtkJ', 'lieyou_nativeAdPrefab');
// resources/SDK/module/qGameNativeAd/lieyou_nativeAdPrefab.js

"use strict";

window.lieyou_nativeSpot = function () {
  var nativeAdNode = new cc.Node("nativeAd");
  var oppoNativeAdSdk = nativeAdNode.addComponent('lieyou_oppoNativeAdSdk');
  var myNode = new cc.Node('myNode');
  nativeAdNode.addChild(myNode);
  var pingbi = new cc.Node('pingbi');
  myNode.addChild(pingbi);
  pingbi.addComponent(cc.BlockInputEvents);
  pingbi.addComponent(cc.Sprite);
  pingbi.opacity = 50;
  lieyou_load('q_ad/oppo_native_insters_layerBg.png', function (err, texture) {
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
  lieyou_load('q_ad/touch.png', function (err, texture) {
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
  touchLabel.getComponent(cc.Label).lineHeight = 60; // touchLabel.getComponent(cc.Label).enableWrapText = true;

  touchLabel.getComponent(cc.Label).string = "点击安装";
  var bg = new cc.Node('bg');
  myNode.addChild(bg);
  bg.y = 54;
  bg.addComponent(cc.Sprite);
  lieyou_load('q_ad/bg.png', function (err, texture) {
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
  titleLabel.getComponent(cc.Label).lineHeight = 50; // titleLabel.getComponent(cc.Label).enableWrapText = true;

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
    cc.game.emit("E_ADClOSE");
    oppoNativeAdSdk.callBackClose();
  });
  var close = new cc.Node('close');
  closeButton.addChild(close);
  close.addComponent(cc.Sprite);
  close.width = 35;
  close.height = 35;
  close.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  lieyou_load('q_ad/close.png', function (err, texture) {
    close.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  oppoNativeAdSdk.touchLabel = touchLabel.getComponent(cc.Label);
  oppoNativeAdSdk.titleLabel = titleLabel.getComponent(cc.Label);
  oppoNativeAdSdk.wordLabel = label.getComponent(cc.Label);
  oppoNativeAdSdk.bgNode = bg;
  oppoNativeAdSdk.iconNode = icon;
  oppoNativeAdSdk.titleNode = title;
  return nativeAdNode;
};

window.lieyou_nativeBanner = function () {
  var nativeAdNode = new cc.Node("nativeAd");
  nativeAdNode.width = 720;
  nativeAdNode.height = 115;
  nativeAdNode.anchorY = 0;
  var oppoNativeAdSdk = nativeAdNode.addComponent('lieyou_oppoNativeAdSdk');
  var myNode = new cc.Node('myNode');
  nativeAdNode.addChild(myNode);
  var bg = new cc.Node('bg');
  myNode.addChild(bg);
  bg.anchorY = 0;
  bg.addComponent(cc.Sprite);
  bg.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  lieyou_load('q_ad/bannerNativeBg.png', function (err, texture) {
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
  lieyou_load('q_ad/bannerNativeBtn.png', function (err, texture) {
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
  touchLabel.getComponent(cc.Label).lineHeight = 20; // touchLabel.getComponent(cc.Label).enableWrapText = true;

  touchLabel.getComponent(cc.Label).string = "点击安装";
  var titleLabel = new cc.Node('titleLabel');
  myNode.addChild(titleLabel);
  titleLabel.width = 60.6;
  titleLabel.height = 50;
  titleLabel.y = 76.6;
  titleLabel.addComponent(cc.Label);
  titleLabel.getComponent(cc.Label).fontSize = 30;
  titleLabel.getComponent(cc.Label).lineHeight = 50; // titleLabel.getComponent(cc.Label).enableWrapText = true;

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
  lieyou_load('q_ad/bannerNativeAD.png', function (err, texture) {
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
    console.log("------------E_ADClOSE-----");
    cc.game.emit("E_ADClOSE");
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
  lieyou_load('q_ad/bannerNativeClose.png', function (err, texture) {
    close.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  oppoNativeAdSdk.touchLabel = touchLabel.getComponent(cc.Label);
  oppoNativeAdSdk.titleLabel = titleLabel.getComponent(cc.Label);
  oppoNativeAdSdk.wordLabel = label.getComponent(cc.Label);
  oppoNativeAdSdk.bgNode = bg;
  oppoNativeAdSdk.iconNode = icon;
  return nativeAdNode;
};

window.getNativeAd_small = function (obj) {
  var bgWidth = 600;
  var bgHeight = 150;
  var node = new cc.Node();
  var bgSp = new cc.Node();
  node.addChild(bgSp); // cc.loader.loadRes(obj.bgPath, (err, texture) => {
  //     if (err || !bgSp.isValid) {
  //         return;
  //     }

  bgSp.addComponent(cc.Sprite);
  bgSp.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM; // bgSp.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);

  bgSp.getComponent(cc.Sprite).spriteFrame = obj.texture;
  bgSp.getComponent(cc.Sprite).spriteFrame.insetTop = obj.insetTop;
  bgSp.getComponent(cc.Sprite).spriteFrame.insetBottom = obj.insetBottom;
  bgSp.getComponent(cc.Sprite).spriteFrame.insetLeft = obj.insetLeft;
  bgSp.getComponent(cc.Sprite).spriteFrame.insetRight = obj.insetRight;
  bgSp.getComponent(cc.Sprite).type = cc.Sprite.Type.SLICED;
  bgSp.width = bgWidth + obj.insetLeft + obj.insetRight;
  bgSp.height = bgHeight + obj.insetTop + obj.insetBottom; // });

  bgSp.width = bgWidth + obj.insetLeft + obj.insetRight;
  bgSp.height = bgHeight + obj.insetTop + obj.insetBottom;
  bgSp.color = obj.bgColor;
  bgSp.opacity = obj.bgOpacity;
  var bg = new cc.Node();
  bg.width = bgWidth;
  bg.height = bgHeight;
  var icon = new cc.Node();

  if (obj.iconUrlList.length > 0) {
    lieyou_loadOnline(obj.iconUrlList[parseInt(Math.random() * obj.iconUrlList.length)], function (err, texture) {
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
    lieyou_load(obj.adPath, function (err, texture) {
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
    console.log("------------E_ADClOSE22222222-----");
    cc.game.emit("E_ADClOSE");
    node.destroy();
  });
  var closeButton2 = new cc.Node();
  lieyou_load("q_ad/nativeClose.png", function (err, texture) {
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
};

window.getNativeAd_big = function (obj) {
  var bgWidth = 600;
  var bgHeight = 400;
  var node = new cc.Node();
  var bgSp = new cc.Node();
  node.addChild(bgSp); // cc.loader.loadRes(obj.bgPath, (err, texture) => {
  //     if (err || !bgSp.isValid) {
  //         return;
  //     }

  console.log(obj.texture, "------------obj.textrue");
  bgSp.addComponent(cc.Sprite);
  bgSp.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM; // bgSp.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);

  bgSp.getComponent(cc.Sprite).spriteFrame = obj.texture;
  bgSp.getComponent(cc.Sprite).spriteFrame.insetTop = obj.insetTop;
  bgSp.getComponent(cc.Sprite).spriteFrame.insetBottom = obj.insetBottom;
  bgSp.getComponent(cc.Sprite).spriteFrame.insetLeft = obj.insetLeft;
  bgSp.getComponent(cc.Sprite).spriteFrame.insetRight = obj.insetRight;
  bgSp.getComponent(cc.Sprite).type = cc.Sprite.Type.SLICED;
  bgSp.width = bgWidth + obj.insetLeft + obj.insetRight;
  bgSp.height = bgHeight + obj.insetTop + obj.insetBottom; // });

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

    lieyou_loadOnline(adUrl, function (err, texture) {
      icon.addComponent(cc.Sprite);
      icon.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
      icon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
      icon.width = adWidth;
      icon.height = adHeight;
    });
  }

  var ad = new cc.Node();

  if (obj.adPath) {
    lieyou_load(obj.adPath, function (err, texture) {
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
    console.log("------------E_ADClOSE3333333333-----");
    cc.game.emit("E_ADClOSE");
    node.destroy();
  });
  var closeButton2 = new cc.Node();
  lieyou_load("q_ad/nativeClose.png", function (err, texture) {
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
};

window.getNativeAd_load = function (obj) {
  var node = new cc.Node();
  var winSize = cc.winSize;
  var bgSp = new cc.Node();
  node.addChild(bgSp);
  lieyou_load('q_ad/nativeEmbedBg.png', function (err, texture) {
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
  lieyou_load('q_ad/nativeEmbedBg.png', function (err, texture) {
    loadbg.addComponent(cc.Sprite);
    loadbg.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
    loadbg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    loadbg.width = 720;
    loadbg.height = 160;
  });
  var loadSp_0 = new cc.Node();
  loadNode.addChild(loadSp_0);
  loadSp_0.y = 120;
  lieyou_load('q_ad/nativeEmbed_0.png', function (err, texture) {
    loadSp_0.addComponent(cc.Sprite);
    loadSp_0.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  var loadSp_1 = new cc.Node();
  loadNode.addChild(loadSp_1);
  loadSp_1.y = loadSp_0.y;
  loadSp_1.addComponent(cc.Sprite);
  lieyou_load('q_ad/nativeEmbed_1.png', function (err, texture) {
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
  lieyou_load('q_ad/nativeEmbedQuan.png', function (err, texture) {
    jumpQuan.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  var jumpClose = new cc.Node();
  jumpNode.addChild(jumpClose);
  lieyou_load('q_ad/nativeEmbedClose.png', function (err, texture) {
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
  lieyou_load("q_ad/nativeEmbedAdBottom.png", function (err, texture) {
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
};

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXG1vZHVsZVxccUdhbWVOYXRpdmVBZFxcbGlleW91X25hdGl2ZUFkUHJlZmFiLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImxpZXlvdV9uYXRpdmVTcG90IiwibmF0aXZlQWROb2RlIiwiY2MiLCJOb2RlIiwib3Bwb05hdGl2ZUFkU2RrIiwiYWRkQ29tcG9uZW50IiwibXlOb2RlIiwiYWRkQ2hpbGQiLCJwaW5nYmkiLCJCbG9ja0lucHV0RXZlbnRzIiwiU3ByaXRlIiwib3BhY2l0eSIsImxpZXlvdV9sb2FkIiwiZXJyIiwidGV4dHVyZSIsImdldENvbXBvbmVudCIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJzaXplTW9kZSIsIlNpemVNb2RlIiwiQ1VTVE9NIiwid2lkdGgiLCJoZWlnaHQiLCJ0b3VjaCIsInkiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiZXZlbnQiLCJjYWxsQmFja1RvdWNoIiwidG91Y2hCdXR0b24iLCJ0b3VjaExhYmVsIiwiTGFiZWwiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJzdHJpbmciLCJiZyIsInRpdGxlTGFiZWwiLCJvdmVyZmxvdyIsIk92ZXJmbG93IiwiU0hSSU5LIiwiaG9yaXpvbnRhbEFsaWduIiwiSG9yaXpvbnRhbEFsaWduIiwiQ0VOVEVSIiwidmVydGljYWxBbGlnbiIsIlZlcnRpY2FsQWxpZ24iLCJsYWJlbCIsIlJFU0laRV9IRUlHSFQiLCJjb2xvciIsIkNvbG9yIiwiQkxBQ0siLCJpY29uIiwiaW1hZ2UiLCJ0aXRsZSIsIngiLCJzY2FsZSIsImFuY2hvclgiLCJhbmNob3JZIiwiY2xvc2VCdXR0b24iLCJjb25zb2xlIiwibG9nIiwiZ2FtZSIsImVtaXQiLCJjYWxsQmFja0Nsb3NlIiwiY2xvc2UiLCJ3b3JkTGFiZWwiLCJiZ05vZGUiLCJpY29uTm9kZSIsInRpdGxlTm9kZSIsImxpZXlvdV9uYXRpdmVCYW5uZXIiLCJzZWxmIiwiYmFubmVyX3Nob3dfaGVpZ2h0IiwiYmFubmVyTmF0aXZlQUQiLCJnZXROYXRpdmVBZF9zbWFsbCIsIm9iaiIsImJnV2lkdGgiLCJiZ0hlaWdodCIsIm5vZGUiLCJiZ1NwIiwiaW5zZXRUb3AiLCJpbnNldEJvdHRvbSIsImluc2V0TGVmdCIsImluc2V0UmlnaHQiLCJ0eXBlIiwiVHlwZSIsIlNMSUNFRCIsImJnQ29sb3IiLCJiZ09wYWNpdHkiLCJpY29uVXJsTGlzdCIsImxlbmd0aCIsImxpZXlvdV9sb2FkT25saW5lIiwicGFyc2VJbnQiLCJNYXRoIiwicmFuZG9tIiwiYWQiLCJhZFBhdGgiLCJjbG9zZVJhbmdlIiwiZGVzdHJveSIsImNsb3NlQnV0dG9uMiIsInNwb3RfY2xvc2VfYnV0X2FscGhhIiwiY2xvc2VTaXplIiwiZGVzYyIsInRpdGxlTGFiZWxDb2xvciIsImRlc2NMYWJlbENvbG9yIiwiZGVzY0xhYmVsIiwiTEVGVCIsInJlcG9ydEFkU2hvd0NhbGxCYWNrIiwicmVwb3J0QWRDbGlja0NhbGxCYWNrIiwiZ2V0TmF0aXZlQWRfYmlnIiwiaW1nVXJsTGlzdCIsImFkV2lkdGgiLCJhZEhlaWdodCIsImFkVXJsIiwiZ2V0TmF0aXZlQWRfbG9hZCIsIndpblNpemUiLCJqdW1wTm9kZSIsImxpZXlvdV9TZGtNYW5hZ2VyIiwiX1NjZW5lU2NhbGUiLCJsb2FkTm9kZSIsImxvYWRiZyIsImxvYWRCZ0NvbG9yIiwibG9hZFNwXzAiLCJsb2FkU3BfMSIsImxvYWRXb3JsZCIsImxvYWRXb3JkQ29sb3IiLCJsb2FkV29ybGRMYWJlbCIsImp1bXBRdWFuIiwianVtcENsb3NlIiwiRklMTEVEIiwiZmlsbFR5cGUiLCJGaWxsVHlwZSIsIlJBRElBTCIsImZpbGxDZW50ZXIiLCJ2MiIsImZpbGxTdGFydCIsImZpbGxSYW5nZSIsIkhPUklaT05UQUwiLCJhZE5vZGUiLCJqcyIsInF1YW5Ob2RlIiwibG9hZExhYmVsIiwiYWxsVGltZSIsImxvYWRUaW1lIiwiY2xvc2VDYWxsQmFjayIsImNhbGxCYWNrIl0sIm1hcHBpbmdzIjoi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UUFBZDtBQUNBZ0IsRUFBQUEsRUFBRSxDQUFDRSxTQUFILEdBQWVmLGNBQWY7QUFDQWEsRUFBQUEsRUFBRSxDQUFDRyxPQUFILEdBQWFuRSxHQUFHLENBQUNvRSxRQUFKLEdBQWUsRUFBNUI7QUFDQUosRUFBQUEsRUFBRSxDQUFDSyxhQUFILEdBQW1CckUsR0FBRyxDQUFDc0UsUUFBdkI7QUFDQTdCLEVBQUFBLFFBQVEsQ0FBQzFGLEVBQVQsQ0FBWXZCLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRdUIsU0FBUixDQUFrQkMsV0FBOUIsRUFBMkMsVUFBVUMsS0FBVixFQUFpQjtBQUN4RDhHLElBQUFBLEVBQUUsQ0FBQ00sUUFBSDtBQUNILEdBRkQ7QUFJQSxTQUFPbkUsSUFBUDtBQUNILENBM0hEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cubGlleW91X25hdGl2ZVNwb3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbmF0aXZlQWROb2RlID0gbmV3IGNjLk5vZGUoXCJuYXRpdmVBZFwiKTtcclxuICAgIGxldCBvcHBvTmF0aXZlQWRTZGsgPSBuYXRpdmVBZE5vZGUuYWRkQ29tcG9uZW50KCdsaWV5b3Vfb3Bwb05hdGl2ZUFkU2RrJyk7XHJcbiAgICB2YXIgbXlOb2RlID0gbmV3IGNjLk5vZGUoJ215Tm9kZScpO1xyXG4gICAgbmF0aXZlQWROb2RlLmFkZENoaWxkKG15Tm9kZSk7XHJcbiAgICB2YXIgcGluZ2JpID0gbmV3IGNjLk5vZGUoJ3BpbmdiaScpO1xyXG4gICAgbXlOb2RlLmFkZENoaWxkKHBpbmdiaSk7XHJcbiAgICBwaW5nYmkuYWRkQ29tcG9uZW50KGNjLkJsb2NrSW5wdXRFdmVudHMpO1xyXG4gICAgcGluZ2JpLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgcGluZ2JpLm9wYWNpdHkgPSA1MDtcclxuICAgIGxpZXlvdV9sb2FkKCdxX2FkL29wcG9fbmF0aXZlX2luc3RlcnNfbGF5ZXJCZy5wbmcnLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgcGluZ2JpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgIHBpbmdiaS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XHJcbiAgICAgICAgcGluZ2JpLndpZHRoID0gMjU2MDtcclxuICAgICAgICBwaW5nYmkuaGVpZ2h0ID0gMjU2MDtcclxuICAgIH0pO1xyXG4gICAgdmFyIHRvdWNoID0gbmV3IGNjLk5vZGUoJ3RvdWNoJyk7XHJcbiAgICBteU5vZGUuYWRkQ2hpbGQodG91Y2gpO1xyXG4gICAgdG91Y2gud2lkdGggPSA1NzA7XHJcbiAgICB0b3VjaC5oZWlnaHQgPSA1MDA7XHJcbiAgICB0b3VjaC55ID0gNTQ7XHJcbiAgICB0b3VjaC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgb3Bwb05hdGl2ZUFkU2RrLmNhbGxCYWNrVG91Y2goKTtcclxuICAgIH0pO1xyXG4gICAgdmFyIHRvdWNoQnV0dG9uID0gbmV3IGNjLk5vZGUoJ3RvdWNoQnV0dG9uJyk7XHJcbiAgICBteU5vZGUuYWRkQ2hpbGQodG91Y2hCdXR0b24pO1xyXG4gICAgdG91Y2hCdXR0b24ueSA9IC0yNzY7XHJcbiAgICB0b3VjaEJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgb3Bwb05hdGl2ZUFkU2RrLmNhbGxCYWNrVG91Y2goKTtcclxuICAgIH0pO1xyXG4gICAgdG91Y2hCdXR0b24uYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICBsaWV5b3VfbG9hZCgncV9hZC90b3VjaC5wbmcnLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgLy8gdG91Y2hCdXR0b24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdG91Y2hCdXR0b24uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgdG91Y2hCdXR0b24ud2lkdGggPSAzNTQ7XHJcbiAgICAgICAgdG91Y2hCdXR0b24uaGVpZ2h0ID0gMTE3O1xyXG4gICAgfSk7XHJcbiAgICB2YXIgdG91Y2hMYWJlbCA9IG5ldyBjYy5Ob2RlKCd0b3VjaExhYmVsJyk7XHJcbiAgICB0b3VjaEJ1dHRvbi5hZGRDaGlsZCh0b3VjaExhYmVsKTtcclxuICAgIHRvdWNoTGFiZWwud2lkdGggPSAxNjA7XHJcbiAgICB0b3VjaExhYmVsLmhlaWdodCA9IDUwO1xyXG4gICAgdG91Y2hMYWJlbC5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgdG91Y2hMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnRTaXplID0gNjA7XHJcbiAgICB0b3VjaExhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkubGluZUhlaWdodCA9IDYwO1xyXG4gICAgLy8gdG91Y2hMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmVuYWJsZVdyYXBUZXh0ID0gdHJ1ZTtcclxuICAgIHRvdWNoTGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIueCueWHu+WuieijhVwiO1xyXG4gICAgdmFyIGJnID0gbmV3IGNjLk5vZGUoJ2JnJyk7XHJcbiAgICBteU5vZGUuYWRkQ2hpbGQoYmcpO1xyXG4gICAgYmcueSA9IDU0O1xyXG4gICAgYmcuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICBsaWV5b3VfbG9hZCgncV9hZC9iZy5wbmcnLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgYmcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgYmcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xyXG4gICAgICAgIGJnLndpZHRoID0gNjUwO1xyXG4gICAgICAgIGJnLmhlaWdodCA9IDUwMDtcclxuICAgIH0pO1xyXG4gICAgdmFyIHRpdGxlTGFiZWwgPSBuZXcgY2MuTm9kZSgndGl0bGVMYWJlbCcpO1xyXG4gICAgbXlOb2RlLmFkZENoaWxkKHRpdGxlTGFiZWwpO1xyXG4gICAgdGl0bGVMYWJlbC53aWR0aCA9IDQ1MDtcclxuICAgIHRpdGxlTGFiZWwuaGVpZ2h0ID0gNTA7XHJcbiAgICB0aXRsZUxhYmVsLnkgPSAyNjQ7XHJcbiAgICB0aXRsZUxhYmVsLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICB0aXRsZUxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkub3ZlcmZsb3cgPSBjYy5MYWJlbC5PdmVyZmxvdy5TSFJJTks7XHJcbiAgICB0aXRsZUxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuaG9yaXpvbnRhbEFsaWduID0gY2MuTGFiZWwuSG9yaXpvbnRhbEFsaWduLkNFTlRFUjtcclxuICAgIHRpdGxlTGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS52ZXJ0aWNhbEFsaWduID0gY2MuTGFiZWwuVmVydGljYWxBbGlnbi5DRU5URVI7XHJcbiAgICB0aXRsZUxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udFNpemUgPSA0NTtcclxuICAgIHRpdGxlTGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5saW5lSGVpZ2h0ID0gNTA7XHJcbiAgICAvLyB0aXRsZUxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuZW5hYmxlV3JhcFRleHQgPSB0cnVlO1xyXG4gICAgdGl0bGVMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5qCH6aKYXCI7XHJcbiAgICB2YXIgbGFiZWwgPSBuZXcgY2MuTm9kZSgnbGFiZWwnKTtcclxuICAgIG15Tm9kZS5hZGRDaGlsZChsYWJlbCk7XHJcbiAgICBsYWJlbC53aWR0aCA9IDUwMDtcclxuICAgIGxhYmVsLmhlaWdodCA9IDYzO1xyXG4gICAgbGFiZWwueSA9IC0xNDY7XHJcbiAgICBsYWJlbC5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgbGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250U2l6ZSA9IDMwO1xyXG4gICAgbGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5saW5lSGVpZ2h0ID0gMzU7XHJcbiAgICBsYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuUkVTSVpFX0hFSUdIVDtcclxuICAgIGxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuaG9yaXpvbnRhbEFsaWduID0gY2MuTGFiZWwuSG9yaXpvbnRhbEFsaWduLkNFTlRFUjtcclxuICAgIGxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLmj4/ov7BcIjtcclxuICAgIGxhYmVsLmNvbG9yID0gY2MuQ29sb3IuQkxBQ0s7XHJcbiAgICB2YXIgaWNvbiA9IG5ldyBjYy5Ob2RlKCdpY29uJyk7XHJcbiAgICBteU5vZGUuYWRkQ2hpbGQoaWNvbik7XHJcbiAgICBpY29uLnkgPSA0NDtcclxuICAgIGljb24uYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICBpY29uLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcclxuICAgIGljb24ud2lkdGggPSAyNTA7XHJcbiAgICBpY29uLmhlaWdodCA9IDI1MDtcclxuICAgIHZhciBpbWFnZSA9IG5ldyBjYy5Ob2RlKCdpbWFnZScpO1xyXG4gICAgbXlOb2RlLmFkZENoaWxkKGltYWdlKTtcclxuICAgIGltYWdlLnkgPSA0NDtcclxuICAgIGltYWdlLndpZHRoID0gNTcwO1xyXG4gICAgaW1hZ2UuaGVpZ2h0ID0gMzAwO1xyXG4gICAgaW1hZ2UuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICBpbWFnZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XHJcbiAgICB2YXIgdGl0bGUgPSBuZXcgY2MuTm9kZSgndGl0bGUnKTtcclxuICAgIG15Tm9kZS5hZGRDaGlsZCh0aXRsZSk7XHJcbiAgICB0aXRsZS54ID0gMjg1O1xyXG4gICAgdGl0bGUueSA9IC0xODk7XHJcbiAgICB0aXRsZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIHRpdGxlLnNjYWxlID0gMC44O1xyXG4gICAgdGl0bGUuYW5jaG9yWCA9IDE7XHJcbiAgICB0aXRsZS5hbmNob3JZID0gMDtcclxuICAgIHZhciBjbG9zZUJ1dHRvbiA9IG5ldyBjYy5Ob2RlKCdjbG9zZUJ1dHRvbicpO1xyXG4gICAgbXlOb2RlLmFkZENoaWxkKGNsb3NlQnV0dG9uKTtcclxuICAgIGNsb3NlQnV0dG9uLnggPSAyNTA7XHJcbiAgICBjbG9zZUJ1dHRvbi55ID0gMjY0O1xyXG4gICAgY2xvc2VCdXR0b24ud2lkdGggPSA1MDtcclxuICAgIGNsb3NlQnV0dG9uLmhlaWdodCA9IDUwO1xyXG4gICAgY2xvc2VCdXR0b24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0tLS0tY2xvc2VCdXR0b24yMjIyMjIyLS0tLS0tLS0tXCIpO1xyXG5cclxuICAgICAgICBjYy5nYW1lLmVtaXQoXCJFX0FEQ2xPU0VcIilcclxuICAgICAgICBvcHBvTmF0aXZlQWRTZGsuY2FsbEJhY2tDbG9zZSgpO1xyXG4gICAgfSk7XHJcbiAgICB2YXIgY2xvc2UgPSBuZXcgY2MuTm9kZSgnY2xvc2UnKTtcclxuICAgIGNsb3NlQnV0dG9uLmFkZENoaWxkKGNsb3NlKTtcclxuICAgIGNsb3NlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgY2xvc2Uud2lkdGggPSAzNTtcclxuICAgIGNsb3NlLmhlaWdodCA9IDM1O1xyXG4gICAgY2xvc2UuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xyXG4gICAgbGlleW91X2xvYWQoJ3FfYWQvY2xvc2UucG5nJywgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgIGNsb3NlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgfSk7XHJcbiAgICBvcHBvTmF0aXZlQWRTZGsudG91Y2hMYWJlbCA9IHRvdWNoTGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgIG9wcG9OYXRpdmVBZFNkay50aXRsZUxhYmVsID0gdGl0bGVMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgb3Bwb05hdGl2ZUFkU2RrLndvcmRMYWJlbCA9IGxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICBvcHBvTmF0aXZlQWRTZGsuYmdOb2RlID0gYmc7XHJcbiAgICBvcHBvTmF0aXZlQWRTZGsuaWNvbk5vZGUgPSBpY29uO1xyXG4gICAgb3Bwb05hdGl2ZUFkU2RrLnRpdGxlTm9kZSA9IHRpdGxlO1xyXG4gICAgcmV0dXJuIG5hdGl2ZUFkTm9kZTtcclxufVxyXG53aW5kb3cubGlleW91X25hdGl2ZUJhbm5lciA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBuYXRpdmVBZE5vZGUgPSBuZXcgY2MuTm9kZShcIm5hdGl2ZUFkXCIpO1xyXG4gICAgbmF0aXZlQWROb2RlLndpZHRoID0gNzIwO1xyXG4gICAgbmF0aXZlQWROb2RlLmhlaWdodCA9IDExNTtcclxuICAgIG5hdGl2ZUFkTm9kZS5hbmNob3JZID0gMDtcclxuICAgIGxldCBvcHBvTmF0aXZlQWRTZGsgPSBuYXRpdmVBZE5vZGUuYWRkQ29tcG9uZW50KCdsaWV5b3Vfb3Bwb05hdGl2ZUFkU2RrJyk7XHJcbiAgICB2YXIgbXlOb2RlID0gbmV3IGNjLk5vZGUoJ215Tm9kZScpO1xyXG4gICAgbmF0aXZlQWROb2RlLmFkZENoaWxkKG15Tm9kZSk7XHJcbiAgICB2YXIgYmcgPSBuZXcgY2MuTm9kZSgnYmcnKTtcclxuICAgIG15Tm9kZS5hZGRDaGlsZChiZyk7XHJcbiAgICBiZy5hbmNob3JZID0gMDtcclxuICAgIGJnLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgYmcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xyXG4gICAgbGlleW91X2xvYWQoJ3FfYWQvYmFubmVyTmF0aXZlQmcucG5nJywgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgIGJnLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgIGJnLndpZHRoID0gNzIwO1xyXG4gICAgICAgIGJnLmhlaWdodCA9IHNlbGYuYmFubmVyX3Nob3dfaGVpZ2h0O1xyXG4gICAgfSk7XHJcbiAgICBiZy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgb3Bwb05hdGl2ZUFkU2RrLmNhbGxCYWNrVG91Y2goKTtcclxuICAgIH0pO1xyXG4gICAgdmFyIHRvdWNoID0gbmV3IGNjLk5vZGUoJ3RvdWNoJyk7XHJcbiAgICBteU5vZGUuYWRkQ2hpbGQodG91Y2gpO1xyXG4gICAgdG91Y2gud2lkdGggPSA3MjA7XHJcbiAgICB0b3VjaC5oZWlnaHQgPSAxMTU7XHJcbiAgICB0b3VjaC5hbmNob3JZID0gMDtcclxuICAgIHZhciB0b3VjaEJ1dHRvbiA9IG5ldyBjYy5Ob2RlKCd0b3VjaEJ1dHRvbicpO1xyXG4gICAgbXlOb2RlLmFkZENoaWxkKHRvdWNoQnV0dG9uKTtcclxuICAgIHRvdWNoQnV0dG9uLnggPSAyNDA7XHJcbiAgICB0b3VjaEJ1dHRvbi55ID0gNTcuNTtcclxuICAgIHRvdWNoQnV0dG9uLndpZHRoID0gMTM1O1xyXG4gICAgdG91Y2hCdXR0b24uaGVpZ2h0ID0gNDY7XHJcbiAgICB0b3VjaEJ1dHRvbi5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIHRvdWNoQnV0dG9uLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcclxuICAgIGxpZXlvdV9sb2FkKCdxX2FkL2Jhbm5lck5hdGl2ZUJ0bi5wbmcnLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgdG91Y2hCdXR0b24uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgdG91Y2hCdXR0b24ud2lkdGggPSAxMzU7XHJcbiAgICAgICAgdG91Y2hCdXR0b24uaGVpZ2h0ID0gNDY7XHJcbiAgICB9KTtcclxuICAgIHZhciB0b3VjaExhYmVsID0gbmV3IGNjLk5vZGUoJ3RvdWNoTGFiZWwnKTtcclxuICAgIHRvdWNoQnV0dG9uLmFkZENoaWxkKHRvdWNoTGFiZWwpO1xyXG4gICAgdG91Y2hMYWJlbC53aWR0aCA9IDgwO1xyXG4gICAgdG91Y2hMYWJlbC5oZWlnaHQgPSA0MDtcclxuICAgIHRvdWNoTGFiZWwuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgIHRvdWNoTGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5mb250U2l6ZSA9IDIwO1xyXG4gICAgdG91Y2hMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmxpbmVIZWlnaHQgPSAyMDtcclxuICAgIC8vIHRvdWNoTGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5lbmFibGVXcmFwVGV4dCA9IHRydWU7XHJcbiAgICB0b3VjaExhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCLngrnlh7vlronoo4VcIjtcclxuXHJcbiAgICB2YXIgdGl0bGVMYWJlbCA9IG5ldyBjYy5Ob2RlKCd0aXRsZUxhYmVsJyk7XHJcbiAgICBteU5vZGUuYWRkQ2hpbGQodGl0bGVMYWJlbCk7XHJcbiAgICB0aXRsZUxhYmVsLndpZHRoID0gNjAuNjtcclxuICAgIHRpdGxlTGFiZWwuaGVpZ2h0ID0gNTA7XHJcbiAgICB0aXRsZUxhYmVsLnkgPSA3Ni42O1xyXG4gICAgdGl0bGVMYWJlbC5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgdGl0bGVMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmZvbnRTaXplID0gMzA7XHJcbiAgICB0aXRsZUxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkubGluZUhlaWdodCA9IDUwO1xyXG4gICAgLy8gdGl0bGVMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmVuYWJsZVdyYXBUZXh0ID0gdHJ1ZTtcclxuICAgIHRpdGxlTGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIuagh+mimFwiO1xyXG4gICAgdGl0bGVMYWJlbC5jb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xyXG4gICAgdmFyIGxhYmVsID0gbmV3IGNjLk5vZGUoJ2xhYmVsJyk7XHJcbiAgICBteU5vZGUuYWRkQ2hpbGQobGFiZWwpO1xyXG4gICAgbGFiZWwud2lkdGggPSAzNTA7XHJcbiAgICBsYWJlbC5oZWlnaHQgPSAyNTtcclxuICAgIGxhYmVsLnkgPSAzOC4zO1xyXG4gICAgbGFiZWwuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgIGxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuZm9udFNpemUgPSAyNTtcclxuICAgIGxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkubGluZUhlaWdodCA9IDI1O1xyXG4gICAgbGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5vdmVyZmxvdyA9IGNjLkxhYmVsLk92ZXJmbG93LlJFU0laRV9IRUlHSFQ7XHJcbiAgICBsYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLmhvcml6b250YWxBbGlnbiA9IGNjLkxhYmVsLkhvcml6b250YWxBbGlnbi5DRU5URVI7XHJcbiAgICBsYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwi5o+P6L+wXCI7XHJcbiAgICBsYWJlbC5jb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xyXG4gICAgdmFyIGljb24gPSBuZXcgY2MuTm9kZSgnaWNvbicpO1xyXG4gICAgbXlOb2RlLmFkZENoaWxkKGljb24pO1xyXG4gICAgaWNvbi54ID0gLTI1MDtcclxuICAgIGljb24ueSA9IDU3LjU7XHJcbiAgICBpY29uLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgaWNvbi53aWR0aCA9IDgwO1xyXG4gICAgaWNvbi5oZWlnaHQgPSA4MDtcclxuICAgIGljb24uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xyXG5cclxuICAgIHZhciBpbWFnZSA9IG5ldyBjYy5Ob2RlKCdpbWFnZScpO1xyXG4gICAgbXlOb2RlLmFkZENoaWxkKGltYWdlKTtcclxuICAgIGltYWdlLndpZHRoID0gNzIwO1xyXG4gICAgaW1hZ2UuaGVpZ2h0ID0gMTE1O1xyXG4gICAgaW1hZ2UuYW5jaG9yWSA9IDA7XHJcbiAgICBpbWFnZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIGltYWdlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcclxuICAgIHZhciBiYW5uZXJOYXRpdmVBRCA9IG5ldyBjYy5Ob2RlKCdiYW5uZXJOYXRpdmVBRCcpO1xyXG4gICAgbXlOb2RlLmFkZENoaWxkKGJhbm5lck5hdGl2ZUFEKTtcclxuICAgIGJhbm5lck5hdGl2ZUFELnggPSAzNjA7XHJcbiAgICBiYW5uZXJOYXRpdmVBRC55ID0gMTE1O1xyXG4gICAgYmFubmVyTmF0aXZlQUQuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICBiYW5uZXJOYXRpdmVBRC5hbmNob3JYID0gMTtcclxuICAgIGJhbm5lck5hdGl2ZUFELmFuY2hvclkgPSAxO1xyXG4gICAgbGlleW91X2xvYWQoJ3FfYWQvYmFubmVyTmF0aXZlQUQucG5nJywgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgIGJhbm5lck5hdGl2ZUFELmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgIGJhbm5lck5hdGl2ZUFELndpZHRoID0gNTE7XHJcbiAgICAgICAgYmFubmVyTmF0aXZlQUQuaGVpZ2h0ID0gMjY7XHJcbiAgICB9KTtcclxuICAgIHZhciBjbG9zZUJ1dHRvbiA9IG5ldyBjYy5Ob2RlKCdjbG9zZUJ1dHRvbicpO1xyXG4gICAgbXlOb2RlLmFkZENoaWxkKGNsb3NlQnV0dG9uKTtcclxuICAgIGNsb3NlQnV0dG9uLnggPSAtMzYwO1xyXG4gICAgY2xvc2VCdXR0b24ueSA9IDExNTtcclxuICAgIGNsb3NlQnV0dG9uLndpZHRoID0gNDA7XHJcbiAgICBjbG9zZUJ1dHRvbi5oZWlnaHQgPSA0MDtcclxuICAgIGNsb3NlQnV0dG9uLmFuY2hvclggPSAwO1xyXG4gICAgY2xvc2VCdXR0b24uYW5jaG9yWSA9IDE7XHJcbiAgICBjbG9zZUJ1dHRvbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS1FX0FEQ2xPU0UtLS0tLVwiKVxyXG4gICAgICAgIGNjLmdhbWUuZW1pdChcIkVfQURDbE9TRVwiKVxyXG4gICAgICAgIG9wcG9OYXRpdmVBZFNkay5jYWxsQmFja0Nsb3NlKCk7XHJcbiAgICB9KTtcclxuICAgIHZhciBjbG9zZSA9IG5ldyBjYy5Ob2RlKCdjbG9zZScpO1xyXG4gICAgY2xvc2VCdXR0b24uYWRkQ2hpbGQoY2xvc2UpO1xyXG4gICAgY2xvc2UuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICBjbG9zZS5hbmNob3JYID0gMDtcclxuICAgIGNsb3NlLmFuY2hvclkgPSAxO1xyXG4gICAgY2xvc2Uud2lkdGggPSAzNTtcclxuICAgIGNsb3NlLmhlaWdodCA9IDM1O1xyXG4gICAgY2xvc2UuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xyXG4gICAgbGlleW91X2xvYWQoJ3FfYWQvYmFubmVyTmF0aXZlQ2xvc2UucG5nJywgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgIGNsb3NlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgfSk7XHJcbiAgICBvcHBvTmF0aXZlQWRTZGsudG91Y2hMYWJlbCA9IHRvdWNoTGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgIG9wcG9OYXRpdmVBZFNkay50aXRsZUxhYmVsID0gdGl0bGVMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgb3Bwb05hdGl2ZUFkU2RrLndvcmRMYWJlbCA9IGxhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICBvcHBvTmF0aXZlQWRTZGsuYmdOb2RlID0gYmc7XHJcbiAgICBvcHBvTmF0aXZlQWRTZGsuaWNvbk5vZGUgPSBpY29uO1xyXG4gICAgcmV0dXJuIG5hdGl2ZUFkTm9kZTtcclxufVxyXG5cclxud2luZG93LmdldE5hdGl2ZUFkX3NtYWxsID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgdmFyIGJnV2lkdGggPSA2MDA7XHJcbiAgICB2YXIgYmdIZWlnaHQgPSAxNTA7XHJcbiAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICB2YXIgYmdTcCA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICBub2RlLmFkZENoaWxkKGJnU3ApO1xyXG4gICAgLy8gY2MubG9hZGVyLmxvYWRSZXMob2JqLmJnUGF0aCwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgLy8gICAgIGlmIChlcnIgfHwgIWJnU3AuaXNWYWxpZCkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgYmdTcC5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIGJnU3AuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xyXG4gICAgLy8gYmdTcC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuXHJcbiAgICBiZ1NwLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gb2JqLnRleHR1cmU7XHJcbiAgICBiZ1NwLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lLmluc2V0VG9wID0gb2JqLmluc2V0VG9wO1xyXG4gICAgYmdTcC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZS5pbnNldEJvdHRvbSA9IG9iai5pbnNldEJvdHRvbTtcclxuICAgIGJnU3AuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUuaW5zZXRMZWZ0ID0gb2JqLmluc2V0TGVmdDtcclxuICAgIGJnU3AuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUuaW5zZXRSaWdodCA9IG9iai5pbnNldFJpZ2h0O1xyXG4gICAgYmdTcC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS50eXBlID0gY2MuU3ByaXRlLlR5cGUuU0xJQ0VEO1xyXG4gICAgYmdTcC53aWR0aCA9IGJnV2lkdGggKyBvYmouaW5zZXRMZWZ0ICsgb2JqLmluc2V0UmlnaHQ7XHJcbiAgICBiZ1NwLmhlaWdodCA9IGJnSGVpZ2h0ICsgb2JqLmluc2V0VG9wICsgb2JqLmluc2V0Qm90dG9tO1xyXG4gICAgLy8gfSk7XHJcbiAgICBiZ1NwLndpZHRoID0gYmdXaWR0aCArIG9iai5pbnNldExlZnQgKyBvYmouaW5zZXRSaWdodDtcclxuICAgIGJnU3AuaGVpZ2h0ID0gYmdIZWlnaHQgKyBvYmouaW5zZXRUb3AgKyBvYmouaW5zZXRCb3R0b207XHJcbiAgICBiZ1NwLmNvbG9yID0gb2JqLmJnQ29sb3I7XHJcbiAgICBiZ1NwLm9wYWNpdHkgPSBvYmouYmdPcGFjaXR5O1xyXG5cclxuICAgIHZhciBiZyA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICBiZy53aWR0aCA9IGJnV2lkdGg7XHJcbiAgICBiZy5oZWlnaHQgPSBiZ0hlaWdodDtcclxuXHJcbiAgICB2YXIgaWNvbiA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICBpZiAob2JqLmljb25VcmxMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICBsaWV5b3VfbG9hZE9ubGluZShvYmouaWNvblVybExpc3RbcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIG9iai5pY29uVXJsTGlzdC5sZW5ndGgpXSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICBpY29uLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICBpY29uLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcclxuICAgICAgICAgICAgaWNvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgaWNvbi53aWR0aCA9IDEyMDtcclxuICAgICAgICAgICAgaWNvbi5oZWlnaHQgPSAxMjA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpY29uLnggPSAtKGJnV2lkdGggLyAyIC0gYmdIZWlnaHQgLyAyKTtcclxuXHJcbiAgICB2YXIgYWQgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgaWYgKG9iai5hZFBhdGgpIHtcclxuICAgICAgICBsaWV5b3VfbG9hZChvYmouYWRQYXRoLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgIGFkLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICBhZC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGFkLnNjYWxlID0gMC41O1xyXG4gICAgYWQuYW5jaG9yWCA9IDE7XHJcbiAgICBhZC5hbmNob3JZID0gMDtcclxuICAgIGFkLnggPSBiZ1dpZHRoIC8gMjtcclxuICAgIGFkLnkgPSAtYmdIZWlnaHQgLyAyO1xyXG5cclxuICAgIHZhciBjbG9zZUJ1dHRvbiA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICBjbG9zZUJ1dHRvbi53aWR0aCA9IG9iai5jbG9zZVJhbmdlO1xyXG4gICAgY2xvc2VCdXR0b24uaGVpZ2h0ID0gb2JqLmNsb3NlUmFuZ2U7XHJcbiAgICBjbG9zZUJ1dHRvbi5hbmNob3JYID0gMTtcclxuICAgIGNsb3NlQnV0dG9uLmFuY2hvclkgPSAxO1xyXG4gICAgY2xvc2VCdXR0b24ueCA9IGJnV2lkdGggLyAyO1xyXG4gICAgY2xvc2VCdXR0b24ueSA9IGJnSGVpZ2h0IC8gMjtcclxuICAgIGNsb3NlQnV0dG9uLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLUVfQURDbE9TRTIyMjIyMjIyLS0tLS1cIilcclxuICAgICAgICBjYy5nYW1lLmVtaXQoXCJFX0FEQ2xPU0VcIilcclxuICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuXHJcbiAgICB9KTtcclxuICAgIHZhciBjbG9zZUJ1dHRvbjIgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgbGlleW91X2xvYWQoXCJxX2FkL25hdGl2ZUNsb3NlLnBuZ1wiLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgY2xvc2VCdXR0b24yLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIGNsb3NlQnV0dG9uMi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgIH0pO1xyXG4gICAgY2xvc2VCdXR0b24yLm9wYWNpdHkgPSBvYmouc3BvdF9jbG9zZV9idXRfYWxwaGE7XHJcbiAgICBjbG9zZUJ1dHRvbjIuc2NhbGUgPSBvYmouY2xvc2VTaXplIC8gNTA7XHJcbiAgICBjbG9zZUJ1dHRvbjIuYW5jaG9yWCA9IDE7XHJcbiAgICBjbG9zZUJ1dHRvbjIuYW5jaG9yWSA9IDE7XHJcbiAgICBjbG9zZUJ1dHRvbi5hZGRDaGlsZChjbG9zZUJ1dHRvbjIpO1xyXG5cclxuICAgIHZhciB0aXRsZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICB2YXIgZGVzYyA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICB0aXRsZS5jb2xvciA9IG9iai50aXRsZUxhYmVsQ29sb3I7XHJcbiAgICBkZXNjLmNvbG9yID0gb2JqLmRlc2NMYWJlbENvbG9yO1xyXG4gICAgdGl0bGUud2lkdGggPSBiZ1dpZHRoIC0gYmdIZWlnaHQ7XHJcbiAgICB0aXRsZS5oZWlnaHQgPSBiZ0hlaWdodCAvIDI7XHJcbiAgICBkZXNjLndpZHRoID0gYmdXaWR0aCAtIGJnSGVpZ2h0O1xyXG4gICAgZGVzYy5oZWlnaHQgPSBiZ0hlaWdodCAvIDI7XHJcbiAgICB0aXRsZS54ID0gYmdIZWlnaHQgLyAyO1xyXG4gICAgdGl0bGUueSA9IGJnSGVpZ2h0IC8gMiAvIDI7XHJcbiAgICBkZXNjLnggPSBiZ0hlaWdodCAvIDI7XHJcbiAgICBkZXNjLnkgPSAtYmdIZWlnaHQgLyAyIC8gMjtcclxuICAgIHZhciB0aXRsZUxhYmVsID0gdGl0bGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgIHZhciBkZXNjTGFiZWwgPSBkZXNjLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICB0aXRsZUxhYmVsLmZvbnRTaXplID0gMzA7XHJcbiAgICB0aXRsZUxhYmVsLm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuU0hSSU5LO1xyXG4gICAgZGVzY0xhYmVsLmZvbnRTaXplID0gMzA7XHJcbiAgICBkZXNjTGFiZWwub3ZlcmZsb3cgPSBjYy5MYWJlbC5PdmVyZmxvdy5TSFJJTks7XHJcbiAgICB0aXRsZUxhYmVsLnN0cmluZyA9IG9iai50aXRsZTtcclxuICAgIGRlc2NMYWJlbC5zdHJpbmcgPSBvYmouZGVzYztcclxuICAgIHRpdGxlTGFiZWwuaG9yaXpvbnRhbEFsaWduID0gY2MuTGFiZWwuSG9yaXpvbnRhbEFsaWduLkxFRlQ7XHJcbiAgICB0aXRsZUxhYmVsLnZlcnRpY2FsQWxpZ24gPSBjYy5MYWJlbC5WZXJ0aWNhbEFsaWduLkNFTlRFUjtcclxuICAgIGRlc2NMYWJlbC5ob3Jpem9udGFsQWxpZ24gPSBjYy5MYWJlbC5Ib3Jpem9udGFsQWxpZ24uTEVGVDtcclxuICAgIGRlc2NMYWJlbC52ZXJ0aWNhbEFsaWduID0gY2MuTGFiZWwuVmVydGljYWxBbGlnbi5DRU5URVI7XHJcblxyXG4gICAgb2JqLnJlcG9ydEFkU2hvd0NhbGxCYWNrKCk7XHJcblxyXG4gICAgYmdTcC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgb2JqLnJlcG9ydEFkQ2xpY2tDYWxsQmFjaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYmcuYWRkQ2hpbGQodGl0bGUpO1xyXG4gICAgYmcuYWRkQ2hpbGQoZGVzYyk7XHJcbiAgICBiZy5hZGRDaGlsZChhZCk7XHJcbiAgICBiZy5hZGRDaGlsZChjbG9zZUJ1dHRvbik7XHJcbiAgICBiZy5hZGRDaGlsZChpY29uKTtcclxuICAgIG5vZGUuYWRkQ2hpbGQoYmcpO1xyXG5cclxuICAgIG5vZGUuc2NhbGUgPSBvYmouc2NhbGU7XHJcbiAgICByZXR1cm4gbm9kZTtcclxufVxyXG53aW5kb3cuZ2V0TmF0aXZlQWRfYmlnID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgdmFyIGJnV2lkdGggPSA2MDA7XHJcbiAgICB2YXIgYmdIZWlnaHQgPSA0MDA7XHJcbiAgICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICB2YXIgYmdTcCA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICBub2RlLmFkZENoaWxkKGJnU3ApO1xyXG4gICAgLy8gY2MubG9hZGVyLmxvYWRSZXMob2JqLmJnUGF0aCwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgLy8gICAgIGlmIChlcnIgfHwgIWJnU3AuaXNWYWxpZCkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgY29uc29sZS5sb2cob2JqLnRleHR1cmUsIFwiLS0tLS0tLS0tLS0tb2JqLnRleHRydWVcIilcclxuICAgIGJnU3AuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICBiZ1NwLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcclxuICAgIC8vIGJnU3AuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICBiZ1NwLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gb2JqLnRleHR1cmU7XHJcbiAgICBiZ1NwLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lLmluc2V0VG9wID0gb2JqLmluc2V0VG9wO1xyXG4gICAgYmdTcC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZS5pbnNldEJvdHRvbSA9IG9iai5pbnNldEJvdHRvbTtcclxuICAgIGJnU3AuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUuaW5zZXRMZWZ0ID0gb2JqLmluc2V0TGVmdDtcclxuICAgIGJnU3AuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUuaW5zZXRSaWdodCA9IG9iai5pbnNldFJpZ2h0O1xyXG4gICAgYmdTcC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS50eXBlID0gY2MuU3ByaXRlLlR5cGUuU0xJQ0VEO1xyXG4gICAgYmdTcC53aWR0aCA9IGJnV2lkdGggKyBvYmouaW5zZXRMZWZ0ICsgb2JqLmluc2V0UmlnaHQ7XHJcbiAgICBiZ1NwLmhlaWdodCA9IGJnSGVpZ2h0ICsgb2JqLmluc2V0VG9wICsgb2JqLmluc2V0Qm90dG9tO1xyXG4gICAgLy8gfSk7XHJcbiAgICBiZ1NwLndpZHRoID0gYmdXaWR0aCArIG9iai5pbnNldExlZnQgKyBvYmouaW5zZXRSaWdodDtcclxuICAgIGJnU3AuaGVpZ2h0ID0gYmdIZWlnaHQgKyBvYmouaW5zZXRUb3AgKyBvYmouaW5zZXRCb3R0b207XHJcbiAgICBiZ1NwLmNvbG9yID0gb2JqLmJnQ29sb3I7XHJcbiAgICBiZ1NwLm9wYWNpdHkgPSBvYmouYmdPcGFjaXR5O1xyXG4gICAgdmFyIGJnID0gbmV3IGNjLk5vZGUoKTtcclxuICAgIGJnLndpZHRoID0gYmdXaWR0aDtcclxuICAgIGJnLmhlaWdodCA9IGJnSGVpZ2h0O1xyXG4gICAgdmFyIGljb24gPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgaWYgKG9iai5pY29uVXJsTGlzdC5sZW5ndGggPiAwIHx8IG9iai5pbWdVcmxMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICB2YXIgYWRXaWR0aCA9IDI3MDtcclxuICAgICAgICB2YXIgYWRIZWlnaHQgPSAyNzA7XHJcbiAgICAgICAgaWYgKG9iai5pbWdVcmxMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYWRXaWR0aCA9IGJnV2lkdGg7XHJcbiAgICAgICAgICAgIGFkSGVpZ2h0ID0gMjcwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgYWRVcmwgPSBcIlwiO1xyXG4gICAgICAgIGlmIChvYmouaW1nVXJsTGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGFkVXJsID0gb2JqLmltZ1VybExpc3RbcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIG9iai5pbWdVcmxMaXN0Lmxlbmd0aCldO1xyXG4gICAgICAgIH0gZWxzZSBpZiAob2JqLmljb25VcmxMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYWRVcmwgPSBvYmouaWNvblVybExpc3RbcGFyc2VJbnQoTWF0aC5yYW5kb20oKSAqIG9iai5pY29uVXJsTGlzdC5sZW5ndGgpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGlleW91X2xvYWRPbmxpbmUoYWRVcmwsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgaWNvbi5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgaWNvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XHJcbiAgICAgICAgICAgIGljb24uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgICAgIGljb24ud2lkdGggPSBhZFdpZHRoO1xyXG4gICAgICAgICAgICBpY29uLmhlaWdodCA9IGFkSGVpZ2h0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBhZCA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICBpZiAob2JqLmFkUGF0aCkge1xyXG4gICAgICAgIGxpZXlvdV9sb2FkKG9iai5hZFBhdGgsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgYWQuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgIGFkLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYWQuc2NhbGUgPSAwLjU7XHJcbiAgICBhZC5hbmNob3JYID0gMTtcclxuICAgIGFkLmFuY2hvclkgPSAwO1xyXG4gICAgYWQueCA9IGJnV2lkdGggLyAyO1xyXG4gICAgYWQueSA9IC1iZ0hlaWdodCAvIDI7XHJcblxyXG4gICAgdmFyIGNsb3NlQnV0dG9uID0gbmV3IGNjLk5vZGUoKTtcclxuICAgIGNsb3NlQnV0dG9uLndpZHRoID0gb2JqLmNsb3NlUmFuZ2U7XHJcbiAgICBjbG9zZUJ1dHRvbi5oZWlnaHQgPSBvYmouY2xvc2VSYW5nZTtcclxuICAgIGNsb3NlQnV0dG9uLmFuY2hvclggPSAxO1xyXG4gICAgY2xvc2VCdXR0b24uYW5jaG9yWSA9IDE7XHJcbiAgICBjbG9zZUJ1dHRvbi54ID0gYmdXaWR0aCAvIDI7XHJcbiAgICBjbG9zZUJ1dHRvbi55ID0gYmdIZWlnaHQgLyAyO1xyXG4gICAgY2xvc2VCdXR0b24ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uIChldmVudCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tLS0tLS0tLS0tLUVfQURDbE9TRTMzMzMzMzMzMzMtLS0tLVwiKVxyXG4gICAgICAgIGNjLmdhbWUuZW1pdChcIkVfQURDbE9TRVwiKVxyXG4gICAgICAgIG5vZGUuZGVzdHJveSgpO1xyXG4gICAgfSk7XHJcbiAgICB2YXIgY2xvc2VCdXR0b24yID0gbmV3IGNjLk5vZGUoKTtcclxuICAgIGxpZXlvdV9sb2FkKFwicV9hZC9uYXRpdmVDbG9zZS5wbmdcIiwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgIGNsb3NlQnV0dG9uMi5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBjbG9zZUJ1dHRvbjIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICB9KTtcclxuICAgIGNsb3NlQnV0dG9uMi5vcGFjaXR5ID0gb2JqLnNwb3RfY2xvc2VfYnV0X2FscGhhO1xyXG4gICAgY2xvc2VCdXR0b24yLnNjYWxlID0gb2JqLmNsb3NlU2l6ZSAvIDUwO1xyXG4gICAgY2xvc2VCdXR0b24yLmFuY2hvclggPSAxO1xyXG4gICAgY2xvc2VCdXR0b24yLmFuY2hvclkgPSAxO1xyXG4gICAgY2xvc2VCdXR0b24uYWRkQ2hpbGQoY2xvc2VCdXR0b24yKTtcclxuXHJcbiAgICB2YXIgdGl0bGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgdmFyIGRlc2MgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgdGl0bGUuY29sb3IgPSBvYmoudGl0bGVMYWJlbENvbG9yO1xyXG4gICAgZGVzYy5jb2xvciA9IG9iai5kZXNjTGFiZWxDb2xvcjtcclxuICAgIHRpdGxlLndpZHRoID0gNDAwO1xyXG4gICAgdGl0bGUuaGVpZ2h0ID0gNTA7XHJcbiAgICBkZXNjLndpZHRoID0gNDAwO1xyXG4gICAgZGVzYy5oZWlnaHQgPSA1MDtcclxuICAgIHRpdGxlLnggPSAwO1xyXG4gICAgdGl0bGUueSA9IDE3NTtcclxuICAgIGRlc2MueCA9IDA7XHJcbiAgICBkZXNjLnkgPSAtMTc1O1xyXG4gICAgdmFyIHRpdGxlTGFiZWwgPSB0aXRsZS5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgdmFyIGRlc2NMYWJlbCA9IGRlc2MuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgIHRpdGxlTGFiZWwuZm9udFNpemUgPSA0MDtcclxuICAgIHRpdGxlTGFiZWwub3ZlcmZsb3cgPSBjYy5MYWJlbC5PdmVyZmxvdy5TSFJJTks7XHJcbiAgICBkZXNjTGFiZWwuZm9udFNpemUgPSAzMDtcclxuICAgIGRlc2NMYWJlbC5vdmVyZmxvdyA9IGNjLkxhYmVsLk92ZXJmbG93LlNIUklOSztcclxuICAgIHRpdGxlTGFiZWwuc3RyaW5nID0gb2JqLnRpdGxlO1xyXG4gICAgZGVzY0xhYmVsLnN0cmluZyA9IG9iai5kZXNjO1xyXG4gICAgdGl0bGVMYWJlbC5ob3Jpem9udGFsQWxpZ24gPSBjYy5MYWJlbC5Ib3Jpem9udGFsQWxpZ24uQ0VOVEVSO1xyXG4gICAgdGl0bGVMYWJlbC52ZXJ0aWNhbEFsaWduID0gY2MuTGFiZWwuVmVydGljYWxBbGlnbi5DRU5URVI7XHJcbiAgICBkZXNjTGFiZWwuaG9yaXpvbnRhbEFsaWduID0gY2MuTGFiZWwuSG9yaXpvbnRhbEFsaWduLkNFTlRFUjtcclxuICAgIGRlc2NMYWJlbC52ZXJ0aWNhbEFsaWduID0gY2MuTGFiZWwuVmVydGljYWxBbGlnbi5DRU5URVI7XHJcblxyXG4gICAgb2JqLnJlcG9ydEFkU2hvd0NhbGxCYWNrKCk7XHJcblxyXG4gICAgYmdTcC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgb2JqLnJlcG9ydEFkQ2xpY2tDYWxsQmFjaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYmcuYWRkQ2hpbGQodGl0bGUpO1xyXG4gICAgYmcuYWRkQ2hpbGQoZGVzYyk7XHJcbiAgICBiZy5hZGRDaGlsZChhZCk7XHJcbiAgICBiZy5hZGRDaGlsZChjbG9zZUJ1dHRvbik7XHJcbiAgICBiZy5hZGRDaGlsZChpY29uKTtcclxuICAgIG5vZGUuYWRkQ2hpbGQoYmcpO1xyXG4gICAgbm9kZS5zY2FsZSA9IG9iai5zY2FsZTtcclxuICAgIHJldHVybiBub2RlO1xyXG59XHJcbndpbmRvdy5nZXROYXRpdmVBZF9sb2FkID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgdmFyIHdpblNpemUgPSBjYy53aW5TaXplO1xyXG5cclxuXHJcblxyXG4gICAgdmFyIGJnU3AgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgbm9kZS5hZGRDaGlsZChiZ1NwKTtcclxuICAgIGxpZXlvdV9sb2FkKCdxX2FkL25hdGl2ZUVtYmVkQmcucG5nJywgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgIGJnU3AuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgYmdTcC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XHJcbiAgICAgICAgYmdTcC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICBiZ1NwLndpZHRoID0gd2luU2l6ZS53aWR0aDtcclxuICAgICAgICBiZ1NwLmhlaWdodCA9IHdpblNpemUuaGVpZ2h0O1xyXG4gICAgfSk7XHJcbiAgICBiZ1NwLmNvbG9yID0gY2MuY29sb3IoMCwgMCwgMCk7XHJcbiAgICBiZ1NwLm9wYWNpdHkgPSAyNTU7XHJcbiAgICBiZ1NwLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcclxuXHJcbiAgICB2YXIgYmcgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgbm9kZS5hZGRDaGlsZChiZyk7XHJcblxyXG4gICAgdmFyIGp1bXBOb2RlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgIGJnLmFkZENoaWxkKGp1bXBOb2RlKTtcclxuICAgIGp1bXBOb2RlLnggPSB3aW5TaXplLndpZHRoICogMC44IC8gMjtcclxuICAgIGp1bXBOb2RlLnkgPSB3aW5TaXplLmhlaWdodCAqIDAuNzUgLyAyO1xyXG4gICAganVtcE5vZGUud2lkdGggPSA4MDtcclxuICAgIGp1bXBOb2RlLmhlaWdodCA9IDgwO1xyXG4gICAganVtcE5vZGUuc2NhbGUgPSBsaWV5b3VfU2RrTWFuYWdlci5fU2NlbmVTY2FsZTtcclxuXHJcbiAgICB2YXIgbG9hZE5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgYmcuYWRkQ2hpbGQobG9hZE5vZGUpO1xyXG4gICAgbG9hZE5vZGUueSA9IC13aW5TaXplLmhlaWdodCAvIDI7XHJcbiAgICBsb2FkTm9kZS5zY2FsZSA9IGxpZXlvdV9TZGtNYW5hZ2VyLl9TY2VuZVNjYWxlO1xyXG5cclxuICAgIHZhciBsb2FkYmcgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgbG9hZGJnLmNvbG9yID0gb2JqLmxvYWRCZ0NvbG9yO1xyXG4gICAgbG9hZE5vZGUuYWRkQ2hpbGQobG9hZGJnKTtcclxuICAgIGxvYWRiZy55ID0gODA7XHJcbiAgICBsaWV5b3VfbG9hZCgncV9hZC9uYXRpdmVFbWJlZEJnLnBuZycsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICBsb2FkYmcuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgbG9hZGJnLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcclxuICAgICAgICBsb2FkYmcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgbG9hZGJnLndpZHRoID0gNzIwO1xyXG4gICAgICAgIGxvYWRiZy5oZWlnaHQgPSAxNjA7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgbG9hZFNwXzAgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgbG9hZE5vZGUuYWRkQ2hpbGQobG9hZFNwXzApO1xyXG4gICAgbG9hZFNwXzAueSA9IDEyMDtcclxuICAgIGxpZXlvdV9sb2FkKCdxX2FkL25hdGl2ZUVtYmVkXzAucG5nJywgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgIGxvYWRTcF8wLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIGxvYWRTcF8wLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIGxvYWRTcF8xID0gbmV3IGNjLk5vZGUoKTtcclxuICAgIGxvYWROb2RlLmFkZENoaWxkKGxvYWRTcF8xKTtcclxuICAgIGxvYWRTcF8xLnkgPSBsb2FkU3BfMC55O1xyXG4gICAgbG9hZFNwXzEuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICBsaWV5b3VfbG9hZCgncV9hZC9uYXRpdmVFbWJlZF8xLnBuZycsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICBsb2FkU3BfMS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBsb2FkV29ybGQgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgbG9hZFdvcmxkLmNvbG9yID0gb2JqLmxvYWRXb3JkQ29sb3I7XHJcbiAgICBsb2FkTm9kZS5hZGRDaGlsZChsb2FkV29ybGQpO1xyXG4gICAgbG9hZFdvcmxkLnkgPSA2MDtcclxuICAgIHZhciBsb2FkV29ybGRMYWJlbCA9IGxvYWRXb3JsZC5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgbG9hZFdvcmxkTGFiZWwuc3RyaW5nID0gXCJcIjtcclxuICAgIGxvYWRXb3JsZExhYmVsLmZvbnRTaXplID0gMzA7XHJcblxyXG5cclxuICAgIHZhciBqdW1wUXVhbiA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICBqdW1wTm9kZS5hZGRDaGlsZChqdW1wUXVhbik7XHJcbiAgICBqdW1wUXVhbi5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIGxpZXlvdV9sb2FkKCdxX2FkL25hdGl2ZUVtYmVkUXVhbi5wbmcnLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAganVtcFF1YW4uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIganVtcENsb3NlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgIGp1bXBOb2RlLmFkZENoaWxkKGp1bXBDbG9zZSk7XHJcbiAgICBsaWV5b3VfbG9hZCgncV9hZC9uYXRpdmVFbWJlZENsb3NlLnBuZycsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICBqdW1wQ2xvc2UuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAganVtcENsb3NlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAganVtcFF1YW4uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkudHlwZSA9IGNjLlNwcml0ZS5UeXBlLkZJTExFRDtcclxuICAgIGp1bXBRdWFuLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxUeXBlID0gY2MuU3ByaXRlLkZpbGxUeXBlLlJBRElBTDtcclxuICAgIGp1bXBRdWFuLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxDZW50ZXIgPSBjYy52MigwLjUsIDAuNSk7XHJcbiAgICBqdW1wUXVhbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5maWxsU3RhcnQgPSAwLjI1O1xyXG4gICAganVtcFF1YW4uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFJhbmdlID0gMTtcclxuXHJcbiAgICBsb2FkU3BfMS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS50eXBlID0gY2MuU3ByaXRlLlR5cGUuRklMTEVEO1xyXG4gICAgbG9hZFNwXzEuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuZmlsbFR5cGUgPSBjYy5TcHJpdGUuRmlsbFR5cGUuSE9SSVpPTlRBTDtcclxuICAgIGxvYWRTcF8xLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxTdGFydCA9IDA7XHJcbiAgICBsb2FkU3BfMS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5maWxsUmFuZ2UgPSAwO1xyXG5cclxuICAgIHZhciBhZCA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICBsaWV5b3VfbG9hZChcInFfYWQvbmF0aXZlRW1iZWRBZEJvdHRvbS5wbmdcIiwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgIGFkLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIGFkLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgfSk7XHJcbiAgICBhZC5hbmNob3JYID0gMTtcclxuICAgIGFkLmFuY2hvclkgPSAwO1xyXG4gICAgYWQueCA9IDcyMCAvIDI7XHJcbiAgICBhZC55ID0gMTYwO1xyXG4gICAgbG9hZE5vZGUuYWRkQ2hpbGQoYWQpO1xyXG5cclxuICAgIHZhciBhZE5vZGUgPSBnZXROYXRpdmVBZF9iaWcob2JqKTtcclxuICAgIG5vZGUuYWRkQ2hpbGQoYWROb2RlKTtcclxuXHJcbiAgICB2YXIganMgPSBub2RlLmFkZENvbXBvbmVudCgnbGlleW91X25hdGl2ZUxvYWQnKTtcclxuXHJcbiAgICBqcy5xdWFuTm9kZSA9IGp1bXBRdWFuO1xyXG4gICAganMubG9hZE5vZGUgPSBsb2FkU3BfMTtcclxuICAgIGpzLmxvYWRMYWJlbCA9IGxvYWRXb3JsZExhYmVsO1xyXG4gICAganMuYWxsVGltZSA9IG9iai5sb2FkVGltZSAqIDYwO1xyXG4gICAganMuY2xvc2VDYWxsQmFjayA9IG9iai5jYWxsQmFjaztcclxuICAgIGp1bXBOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICBqcy5jYWxsQmFjaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG5vZGU7XHJcbn0iXX0=