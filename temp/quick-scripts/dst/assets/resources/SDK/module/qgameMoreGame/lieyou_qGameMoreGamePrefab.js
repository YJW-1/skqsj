
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/module/qgameMoreGame/lieyou_qGameMoreGamePrefab.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b3d93V6oDdKLrEbuSQrId1E', 'lieyou_qGameMoreGamePrefab');
// resources/SDK/module/qgameMoreGame/lieyou_qGameMoreGamePrefab.js

"use strict";

window.lieyou_icon_130_box = function () {
  var icon_130_boxNode = new cc.Node();
  icon_130_boxNode.width = 130;
  icon_130_boxNode.height = 130;
  var image = new cc.Node();
  image.width = 130;
  image.height = 130;
  image.addComponent(cc.Sprite);
  image.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  var red = new cc.Node();
  red.x = 65;
  red.y = 65;
  red.width = 22;
  red.height = 22;
  red.addComponent(cc.Sprite);
  red.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  lieyou_load('qgameMoreGame/texture/red', function (err, texture) {
    red.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  var qGamemoreGame_icon = icon_130_boxNode.addComponent('lieyou_qGamemoreGame_icon');
  qGamemoreGame_icon.image = image;
  qGamemoreGame_icon.redNode = red;
  icon_130_boxNode.on(cc.Node.EventType.TOUCH_END, function (event) {
    qGamemoreGame_icon.callBackTouch();
  });
  icon_130_boxNode.addChild(image);
  icon_130_boxNode.addChild(red);
  return icon_130_boxNode;
};

window.lieyou_icon_130_circle = function () {
  var icon_130_boxNode = new cc.Node();
  icon_130_boxNode.width = 130;
  icon_130_boxNode.height = 130;
  var image = new cc.Node();
  image.width = 130;
  image.height = 130;
  image.addComponent(cc.Sprite);
  image.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  var red = new cc.Node();
  red.x = 65;
  red.y = 65;
  red.width = 22;
  red.height = 22;
  red.addComponent(cc.Sprite);
  red.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  lieyou_load('qgameMoreGame/texture/red', function (err, texture) {
    red.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  var qGamemoreGame_icon = icon_130_boxNode.addComponent('lieyou_qGamemoreGame_icon');
  qGamemoreGame_icon.image = image;
  qGamemoreGame_icon.redNode = red;
  icon_130_boxNode.on(cc.Node.EventType.TOUCH_END, function (event) {
    qGamemoreGame_icon.callBackTouch();
  });
  var imageMask = new cc.Node();
  var imageMaskZ = imageMask.addComponent(cc.Mask);
  imageMaskZ.type = cc.Mask.Type.IMAGE_STENCIL;
  imageMask.width = 130;
  imageMask.height = 130;
  imageMaskZ.alphaThreshold = 0.9;
  lieyou_load('qgameMoreGame/texture/mask', function (err, texture) {
    imageMaskZ.spriteFrame = new cc.SpriteFrame(texture);
  });
  icon_130_boxNode.addChild(imageMask);
  imageMask.addChild(image);
  icon_130_boxNode.addChild(red);
  return icon_130_boxNode;
};

window.lieyou_icon_150_box = function () {
  var icon_130_boxNode = new cc.Node();
  icon_130_boxNode.width = 150;
  icon_130_boxNode.height = 150;
  var image = new cc.Node();
  image.width = 150;
  image.height = 150;
  image.addComponent(cc.Sprite);
  image.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  var red = new cc.Node();
  red.x = 75;
  red.y = 75;
  red.width = 22;
  red.height = 22;
  red.addComponent(cc.Sprite);
  red.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  lieyou_load('qgameMoreGame/texture/red', function (err, texture) {
    red.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  var qGamemoreGame_icon = icon_130_boxNode.addComponent('lieyou_qGamemoreGame_icon');
  qGamemoreGame_icon.image = image;
  qGamemoreGame_icon.redNode = red;
  icon_130_boxNode.on(cc.Node.EventType.TOUCH_END, function (event) {
    qGamemoreGame_icon.callBackTouch();
  });
  icon_130_boxNode.addChild(image);
  icon_130_boxNode.addChild(red);
  return icon_130_boxNode;
};

window.lieyou_moreGame_banner = function () {
  var moreGameNode = new cc.Node();
  var myNode = new cc.Node('myNode');
  var bg_banner = new cc.Node();
  var title_banner = new cc.Node();
  var title_banner2 = new cc.Node();
  var ScrollView = new cc.Node();
  var view = new cc.Node();
  var content = new cc.Node();
  var bannerClose = new cc.Node();
  ScrollView.addComponent(cc.ScrollView);
  ScrollView.width = 660;
  ScrollView.height = 170;
  ScrollView.x = 30;
  ScrollView.y = 0;
  view.width = 660;
  view.height = 170;
  view.addComponent(cc.Mask); // view.getComponent(cc.Mask).type = cc.Mask.Type.RECT;

  content.x = -330;
  content.anchorX = 0;
  content.width = 0;
  content.height = 170;
  title_banner.anchorX = 0;
  title_banner.x = -360;
  title_banner.width = 60;
  title_banner.height = 170;
  title_banner2.x = 30;
  title_banner2.width = 29;
  title_banner2.height = 125;
  title_banner2.addComponent(cc.Sprite);
  title_banner2.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
  title_banner2.getComponent(cc.Sprite).trim = false;
  var title_banner2url = 'qgameMoreGame/texture/title_banner';

  if (lieyou_moreGame_type == 1) {
    title_banner2url = 'qgameMoreGame/texture_1/title_banner';
  } else if (lieyou_moreGame_type == 2) {
    title_banner2url = 'qgameMoreGame/texture_2/title_banner';
  }

  lieyou_load(title_banner2url, function (err, texture) {
    title_banner2.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  bg_banner.y = 85;
  bg_banner.width = 720;
  bg_banner.height = 170;
  bg_banner.addComponent(cc.Sprite);
  bg_banner.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  var bg_bannerurl = 'qgameMoreGame/texture/bg_banner';

  if (lieyou_moreGame_type == 1) {
    bg_bannerurl = 'qgameMoreGame/texture_1/bg_banner';
  } else if (lieyou_moreGame_type == 2) {
    bg_bannerurl = 'qgameMoreGame/texture_2/bg_banner';
  }

  lieyou_load(bg_bannerurl, function (err, texture) {
    bg_banner.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  bannerClose.x = 360;
  bannerClose.y = 170;
  bannerClose.width = 50;
  bannerClose.height = 51;
  bannerClose.anchorX = 1;
  bannerClose.anchorY = 1;
  bannerClose.addComponent(cc.Sprite);
  bannerClose.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  lieyou_load('qgameMoreGame/texture/bannerClose', function (err, texture) {
    bannerClose.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  var qGamemoreGame_moreJs = moreGameNode.addComponent('lieyou_qGamemoreGame_more');
  qGamemoreGame_moreJs.iconPrefab = lieyou_icon_150_box;
  qGamemoreGame_moreJs.fNode = content;
  qGamemoreGame_moreJs.type = 1;
  bannerClose.on(cc.Node.EventType.TOUCH_END, function (event) {
    qGamemoreGame_moreJs.bannerCloseCallBack();
  });
  bg_banner.addChild(title_banner);
  title_banner.addChild(title_banner2);
  bg_banner.addChild(ScrollView);
  ScrollView.addChild(view);
  view.addChild(content);
  myNode.addChild(bg_banner);
  myNode.addChild(bannerClose);
  moreGameNode.addChild(myNode);
  ScrollView.getComponent(cc.ScrollView).content = content;
  ScrollView.getComponent(cc.ScrollView).horizontal = true;
  ScrollView.getComponent(cc.ScrollView).vertical = false;
  return moreGameNode;
};

window.lieyou_moreGame_btn = function () {
  var moreGame_btn = new cc.Node();
  moreGame_btn.width = 110;
  moreGame_btn.height = 110;
  var red = new cc.Node('red');
  red.x = 50;
  red.y = 50;
  red.width = 22;
  red.height = 22;
  red.addComponent(cc.Sprite);
  red.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  lieyou_load('qgameMoreGame/texture/red', function (err, texture) {
    red.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  var qGameMoreGame_showMore = moreGame_btn.addComponent('lieyou_qGameMoreGame_showMore');
  moreGame_btn.on(cc.Node.EventType.TOUCH_END, function (event) {
    qGameMoreGame_showMore.callBack();
  });
  var dragon = new cc.Node();
  var dragon_1 = new cc.Node();
  var dragon_2 = new cc.Node();
  dragon.y = -40;
  dragon.scale = 0.35;
  dragon_1.y = -40;
  dragon_1.scale = 0.2;
  dragon_2.x = -15;
  dragon_2.y = 24;
  dragon_2.scale = 0.6;

  if (lieyou_moreGame_type == 1) {
    cc.loader.loadRes('SDK/lieyou_sdkRes/qgameMoreGame/dragon/dragon1/jingling2_tex.json', dragonBones.DragonBonesAtlasAsset, function (error, atlasJson) {
      cc.loader.loadRes('SDK/lieyou_sdkRes/qgameMoreGame/dragon/dragon1/jingling2_ske.json', dragonBones.DragonBonesAsset, function (error, dragonBonesJson) {
        var dragon_1_arm = dragon_1.addComponent(dragonBones.ArmatureDisplay);
        dragon_1_arm.dragonAtlasAsset = atlasJson;
        dragon_1_arm.dragonAsset = dragonBonesJson;
        dragon_1_arm.armatureName = 'armatureName';
        dragon_1_arm.playAnimation('stand', 0);
      });
    });
  } else if (lieyou_moreGame_type == 2) {
    cc.loader.loadRes('SDK/lieyou_sdkRes/qgameMoreGame/dragon/dragon2/jinglingdonghu_2_ske_tex.json', dragonBones.DragonBonesAtlasAsset, function (error, atlasJson) {
      cc.loader.loadRes('SDK/lieyou_sdkRes/qgameMoreGame/dragon/dragon2/jinglingdonghu_2_ske_ske.json', dragonBones.DragonBonesAsset, function (error, dragonBonesJson) {
        var dragon_2_arm = dragon_2.addComponent(dragonBones.ArmatureDisplay);
        dragon_2_arm.dragonAtlasAsset = atlasJson;
        dragon_2_arm.dragonAsset = dragonBonesJson;
        dragon_2_arm.armatureName = 'armatureName';
        dragon_2_arm.playAnimation('newAnimation', 0);
      });
    });
  } else {
    cc.loader.loadRes('SDK/lieyou_sdkRes/qgameMoreGame/dragon/jingling_tex', dragonBones.DragonBonesAtlasAsset, function (error, atlasJson) {
      cc.loader.loadRes('SDK/lieyou_sdkRes/qgameMoreGame/dragon/jingling_ske', dragonBones.DragonBonesAsset, function (error, dragonBonesJson) {
        var dragon_arm = dragon.addComponent(dragonBones.ArmatureDisplay);
        dragon_arm.dragonAtlasAsset = atlasJson;
        dragon_arm.dragonAsset = dragonBonesJson;
        dragon_arm.armatureName = 'armatureName';
        dragon_arm.playAnimation('anim_1', 0);
      });
    });
  }

  moreGame_btn.addChild(red);
  moreGame_btn.addChild(dragon);
  moreGame_btn.addChild(dragon_1);
  moreGame_btn.addChild(dragon_2);
  return moreGame_btn;
};

window.lieyou_moreGame_icon = function () {
  var icon_130_boxNode = new cc.Node();
  icon_130_boxNode.width = 130;
  icon_130_boxNode.height = 130;
  var image = new cc.Node();
  image.width = 130;
  image.height = 130;
  image.addComponent(cc.Sprite);
  image.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  var red = new cc.Node();
  red.x = 65;
  red.y = 65;
  red.width = 22;
  red.height = 22;
  red.addComponent(cc.Sprite);
  red.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  lieyou_load('qgameMoreGame/texture/red', function (err, texture) {
    red.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  var qGamemoreGame_icon = icon_130_boxNode.addComponent('lieyou_qGamemoreGame_icon');
  qGamemoreGame_icon.image = image;
  qGamemoreGame_icon.redNode = red;
  icon_130_boxNode.on(cc.Node.EventType.TOUCH_END, function (event) {
    qGamemoreGame_icon.callBackTouch();
  });
  var imageMask = new cc.Node();
  var imageMaskZ = imageMask.addComponent(cc.Mask);
  imageMaskZ.type = cc.Mask.Type.IMAGE_STENCIL;
  imageMask.width = 130;
  imageMask.height = 130;
  imageMaskZ.alphaThreshold = 0.9;
  lieyou_load('qgameMoreGame/texture/mask', function (err, texture) {
    imageMaskZ.spriteFrame = new cc.SpriteFrame(texture);
  });
  var bg_icon = new cc.Node();
  bg_icon.width = 134;
  bg_icon.height = 134;
  bg_icon.addComponent(cc.Sprite);
  bg_icon.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  var bg_iconurl = 'qgameMoreGame/texture/bg_icon';

  if (lieyou_moreGame_type == 2) {
    bg_iconurl = 'qgameMoreGame/texture_2/bg_icon';
  } else if (lieyou_moreGame_type == 1) {
    bg_iconurl = 'qgameMoreGame/texture_1/bg_icon';
  }

  lieyou_load(bg_iconurl, function (err, texture) {
    bg_icon.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  icon_130_boxNode.addChild(imageMask);
  imageMask.addChild(image);
  icon_130_boxNode.addChild(bg_icon);
  icon_130_boxNode.addChild(red);
  imageMask.addComponent(cc.Widget);
  image.addComponent(cc.Widget);
  bg_icon.addComponent(cc.Widget);
  red.addComponent(cc.Widget);
  imageMask.getComponent(cc.Widget).isAlignTop = true;
  imageMask.getComponent(cc.Widget).isAlignBottom = true;
  imageMask.getComponent(cc.Widget).isAlignLeft = true;
  imageMask.getComponent(cc.Widget).isAlignRight = true;
  image.getComponent(cc.Widget).isAlignTop = true;
  image.getComponent(cc.Widget).isAlignBottom = true;
  image.getComponent(cc.Widget).isAlignLeft = true;
  image.getComponent(cc.Widget).isAlignRight = true;
  bg_icon.getComponent(cc.Widget).isAlignTop = true;
  bg_icon.getComponent(cc.Widget).isAlignBottom = true;
  bg_icon.getComponent(cc.Widget).isAlignLeft = true;
  bg_icon.getComponent(cc.Widget).isAlignRight = true;
  red.getComponent(cc.Widget).isAlignTop = true;
  red.getComponent(cc.Widget).isAlignRight = true;
  return icon_130_boxNode;
};

window.lieyou_moreGame_mid_one = function (type, haveTitle, titleType, scale) {
  var oneNode = new cc.Node();
  var bg = new cc.Node();
  var bgHeight = 26 + type * 140;
  var bgWidth = 586;
  bg.width = bgWidth;

  if (type == 3) {
    //333
    // bgHeight -= 100;
    bg.width = bgWidth - 140;
    bgHeight = bg.width;
  }

  bg.height = bgHeight;
  bg.addComponent(cc.Sprite);
  bg.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  var bgUrl = 'qgameMoreGame/texture/bg_mid';

  if (lieyou_moreGame_type == 1) {
    bgUrl = 'qgameMoreGame/texture_1/bg_mid';
  } else if (lieyou_moreGame_type == 2) {
    bgUrl = 'qgameMoreGame/texture_2/bg_mid';
  }

  lieyou_load(bgUrl, function (err, texture) {
    bg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    bg.getComponent(cc.Sprite).spriteFrame.insetTop = 20;
    bg.getComponent(cc.Sprite).spriteFrame.insetBottom = 20;
    bg.getComponent(cc.Sprite).spriteFrame.insetLeft = 20;
    bg.getComponent(cc.Sprite).spriteFrame.insetRight = 20;
    bg.getComponent(cc.Sprite).type = cc.Sprite.Type.SLICED;
  });
  var fNode = new cc.Node();
  fNode.width = bgWidth - 16;

  if (type == 3) {
    //333
    fNode.width = bgWidth - 16 - 140;
  }

  fNode.height = bgHeight - 16;
  var fNodeMaskZ = fNode.addComponent(cc.Mask);
  var fNode2 = new cc.Node();
  fNode.addChild(fNode2); // fNodeMaskZ.type = cc.Mask.Type.RECT;

  var qGamemoreGame_mid = oneNode.addComponent('lieyou_qGamemoreGame_mid');
  qGamemoreGame_mid.type = type;
  qGamemoreGame_mid.iconPrefab = lieyou_icon_130_box;
  qGamemoreGame_mid.fNode = fNode2;
  oneNode.addChild(bg);
  oneNode.addChild(fNode);

  if (haveTitle && type != 3) {
    //mid_titleZ_1
    if (titleType && type == 1) {
      var titleBgWieth = 50;
      bg.width = bg.width + titleBgWieth;
      fNode.x += titleBgWieth / 2;
      var title = new cc.Node();
      title.x = -bg.width / 2 + titleBgWieth / 2;
      bg.addChild(title);
      title.addComponent(cc.Sprite);
      var titleUrl = 'qgameMoreGame/texture/mid_titleZ_' + type + '';

      if (lieyou_moreGame_type == 1) {
        titleUrl = 'qgameMoreGame/texture_1/mid_titleZ_' + type + '';
      } else if (lieyou_moreGame_type == 2) {
        titleUrl = 'qgameMoreGame/texture_2/mid_titleZ_' + type + '';
      }

      lieyou_load(titleUrl, function (err, texture) {
        title.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
      });
    } else {
      var titleBgHeight = 55;
      bgHeight += titleBgHeight;
      bg.height = bgHeight;
      fNode.y -= titleBgHeight / 2;
      var titlebg = new cc.Node();
      bg.addChild(titlebg);
      titlebg.y = bgHeight / 2 - titleBgHeight / 2 - 3;
      var title = new cc.Node();
      titlebg.addChild(title);
      titlebg.addComponent(cc.Sprite);
      title.addComponent(cc.Sprite);
      var titlebgUrl = 'qgameMoreGame/texture/mid_title_bg';
      var titleUrl = 'qgameMoreGame/texture/mid_title_' + type + '';

      if (lieyou_moreGame_type == 1) {
        titlebgUrl = 'qgameMoreGame/texture_1/mid_title_bg';
        titleUrl = 'qgameMoreGame/texture_1/mid_title_' + type + '';
      } else if (lieyou_moreGame_type == 2) {
        titlebgUrl = 'qgameMoreGame/texture_2/mid_title_bg';
        titleUrl = 'qgameMoreGame/texture_2/mid_title_' + type + '';
      }

      lieyou_load(titlebgUrl, function (err, texture) {
        titlebg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
      });
      lieyou_load(titleUrl, function (err, texture) {
        title.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
      });
    }
  }

  oneNode.scale = scale * 1.1 * (type == 3 ? 1.3 : 1);
  return oneNode;
};

window.lieyou_moreGame_more = function () {
  var moreGameNode = new cc.Node();
  var pingbi = new cc.Node();
  pingbi.width = 960;
  pingbi.height = 1280;
  pingbi.opacity = 100;
  pingbi.addComponent(cc.Sprite);
  pingbi.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  lieyou_load('qgameMoreGame/oppo_native_insters_layerBg', function (err, texture) {
    pingbi.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  pingbi.addComponent(cc.BlockInputEvents);
  var myNode = new cc.Node('myNode');
  var bg_more = new cc.Node();
  var title_more = new cc.Node();
  var close = new cc.Node();
  var ScrollView = new cc.Node();
  var view = new cc.Node();
  var content = new cc.Node();
  myNode.addChild(bg_more);
  myNode.addChild(title_more);
  myNode.addChild(close);
  myNode.addChild(ScrollView);
  ScrollView.addChild(view);
  view.addChild(content);
  bg_more.addComponent(cc.Sprite);
  bg_more.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
  bg_more.getComponent(cc.Sprite).trim = false;
  var bg_moreurl = 'qgameMoreGame/texture/bg_more';

  if (lieyou_moreGame_type == 1) {
    bg_moreurl = 'qgameMoreGame/texture_1/bg_more';
  } else if (lieyou_moreGame_type == 2) {
    bg_moreurl = 'qgameMoreGame/texture_2/bg_more';
  }

  lieyou_load(bg_moreurl, function (err, texture) {
    bg_more.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  title_more.y = 345;
  title_more.addComponent(cc.Sprite);
  title_more.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
  title_more.getComponent(cc.Sprite).trim = false;
  var title_moreurl = 'qgameMoreGame/texture/title_more';

  if (lieyou_moreGame_type == 1) {
    title_moreurl = '';
  } else if (lieyou_moreGame_type == 2) {
    title_moreurl = 'qgameMoreGame/texture_2/title_more';
  }

  lieyou_load(title_moreurl, function (err, texture) {
    if (err) return;
    title_more.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  close.x = 250;

  if (lieyou_moreGame_type == 2) {
    close.x = -250;
  }

  close.y = 345;
  close.addComponent(cc.Sprite);
  close.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
  close.getComponent(cc.Sprite).trim = false;
  var closerurl = 'qgameMoreGame/texture/close';

  if (lieyou_moreGame_type == 1) {
    closerurl = 'qgameMoreGame/texture_1/close';
  } else if (lieyou_moreGame_type == 2) {
    closerurl = 'qgameMoreGame/texture_2/close';
  }

  lieyou_load(closerurl, function (err, texture) {
    close.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  ScrollView.addComponent(cc.ScrollView);
  ScrollView.width = 530;
  ScrollView.height = 640;
  ScrollView.y = -40;
  view.width = 530;
  view.height = 640;
  view.addComponent(cc.Mask); // view.getComponent(cc.Mask).type = cc.Mask.Type.RECT;

  content.y = 320;
  content.anchorY = 1;
  content.width = 530;
  content.height = 0;
  var contentLayout = content.addComponent(cc.Layout);
  contentLayout.type = cc.Layout.Type.GRID;
  contentLayout.paddingLeft = 20;
  contentLayout.paddingRight = 20;
  contentLayout.paddingTop = 20;
  contentLayout.paddingBottom = 20;
  contentLayout.spacingX = 20;
  contentLayout.spacingY = 20;
  contentLayout.resizeMode = cc.Layout.ResizeMode.CONTAINER;
  var qGamemoreGame_moreJs = moreGameNode.addComponent('lieyou_qGamemoreGame_more');
  qGamemoreGame_moreJs.iconPrefab = lieyou_icon_150_box;
  qGamemoreGame_moreJs.fNode = content;
  qGamemoreGame_moreJs.type = 0;
  moreGameNode.addChild(pingbi);
  moreGameNode.addChild(myNode);
  close.on(cc.Node.EventType.TOUCH_END, function (event) {
    qGamemoreGame_moreJs.closeCallBack();
  });
  ScrollView.getComponent(cc.ScrollView).content = content;
  ScrollView.getComponent(cc.ScrollView).horizontal = false;
  ScrollView.getComponent(cc.ScrollView).vertical = true;
  return moreGameNode;
};

window.lieyou_moreGame_side = function () {
  var moreGameNode = new cc.Node();
  var bg_2_side = new cc.Node('bg_2_side');
  var bg_2_side2 = new cc.Node();
  var dragon = new cc.Node('dragon');
  var dragon_1 = new cc.Node('dragon_1');
  var dragon_2 = new cc.Node('dragon_2');
  var red = new cc.Node('red');
  dragon.x = 55;
  dragon.y = -44;
  dragon.scale = 0.35;
  dragon_1.x = 55;
  dragon_1.y = -44;
  dragon_1.scale = 0.25;
  dragon_2.x = 37;
  dragon_2.y = 24;
  dragon_2.scale = 0.6;

  if (lieyou_moreGame_type == 1) {
    cc.loader.loadRes('SDK/lieyou_sdkRes/qgameMoreGame/dragon/dragon1/jingling2_tex.json', dragonBones.DragonBonesAtlasAsset, function (error, atlasJson) {
      cc.loader.loadRes('SDK/lieyou_sdkRes/qgameMoreGame/dragon/dragon1/jingling2_ske.json', dragonBones.DragonBonesAsset, function (error, dragonBonesJson) {
        var dragon_1_arm = dragon_1.addComponent(dragonBones.ArmatureDisplay);
        dragon_1_arm.dragonAtlasAsset = atlasJson;
        dragon_1_arm.dragonAsset = dragonBonesJson;
        dragon_1_arm.armatureName = 'armatureName';
        dragon_1_arm.playAnimation('stand', 0);
      });
    });
  } else if (lieyou_moreGame_type == 2) {
    cc.loader.loadRes('SDK/lieyou_sdkRes/qgameMoreGame/dragon/dragon2/jinglingdonghu_2_ske_tex.json', dragonBones.DragonBonesAtlasAsset, function (error, atlasJson) {
      cc.loader.loadRes('SDK/lieyou_sdkRes/qgameMoreGame/dragon/dragon2/jinglingdonghu_2_ske_ske.json', dragonBones.DragonBonesAsset, function (error, dragonBonesJson) {
        var dragon_2_arm = dragon_2.addComponent(dragonBones.ArmatureDisplay);
        dragon_2_arm.dragonAtlasAsset = atlasJson;
        dragon_2_arm.dragonAsset = dragonBonesJson;
        dragon_2_arm.armatureName = 'armatureName';
        dragon_2_arm.playAnimation('newAnimation', 0);
      });
    });
  } else {
    cc.loader.loadRes('SDK/lieyou_sdkRes/qgameMoreGame/dragon/jingling_tex', dragonBones.DragonBonesAtlasAsset, function (error, atlasJson) {
      cc.loader.loadRes('SDK/lieyou_sdkRes/qgameMoreGame/dragon/jingling_ske', dragonBones.DragonBonesAsset, function (error, dragonBonesJson) {
        var dragon_arm = dragon.addComponent(dragonBones.ArmatureDisplay);
        dragon_arm.dragonAtlasAsset = atlasJson;
        dragon_arm.dragonAsset = dragonBonesJson;
        dragon_arm.armatureName = 'armatureName';
        dragon_arm.playAnimation('anim_1', 0);
      });
    });
  }

  bg_2_side.anchorX = 0;
  bg_2_side.width = 110;
  bg_2_side.height = 110;
  bg_2_side2.anchorX = 0;
  bg_2_side2.width = 110;
  bg_2_side2.height = 110;
  bg_2_side2.addComponent(cc.Sprite);
  bg_2_side2.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  var bg_2_side2url = 'qgameMoreGame/texture/bg_2_side';

  if (lieyou_moreGame_type == 1) {
    bg_2_side2url = 'qgameMoreGame/texture_1/bg_2_side';
  } else if (lieyou_moreGame_type == 2) {
    bg_2_side2url = 'qgameMoreGame/texture_2/bg_2_side';
  }

  lieyou_load(bg_2_side2url, function (err, texture) {
    bg_2_side2.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  red.x = 107;
  red.y = 54;
  red.width = 22;
  red.height = 22;
  red.addComponent(cc.Sprite);
  red.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  lieyou_load('qgameMoreGame/texture/red', function (err, texture) {
    red.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  var myNode_side = new cc.Node('myNode_side');
  var bg_side = new cc.Node('bg_side');
  var title_side = new cc.Node('title_side');
  var ScrollView = new cc.Node();
  var view = new cc.Node();
  var content = new cc.Node();
  var bg_arrow_side = new cc.Node();
  bg_side.width = 227;
  bg_side.height = 833;
  bg_side.anchorX = 1;
  bg_side.addComponent(cc.Sprite);
  bg_side.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
  bg_side.getComponent(cc.Sprite).trim = false;
  var bg_sideurl = 'qgameMoreGame/texture/bg_side';

  if (lieyou_moreGame_type == 1) {
    bg_sideurl = 'qgameMoreGame/texture_1/bg_side';
  } else if (lieyou_moreGame_type == 2) {
    bg_sideurl = 'qgameMoreGame/texture_2/bg_side';
  }

  lieyou_load(bg_sideurl, function (err, texture) {
    bg_side.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  title_side.x = -146;
  title_side.y = 377;
  title_side.width = 128;
  title_side.height = 35;
  title_side.addComponent(cc.Sprite);
  title_side.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
  title_side.getComponent(cc.Sprite).trim = false;
  var title_sideurl = 'qgameMoreGame/texture/title_side';

  if (lieyou_moreGame_type == 1) {
    title_sideurl = '';
  } else if (lieyou_moreGame_type == 2) {
    title_sideurl = 'qgameMoreGame/texture_2/title_side';
  }

  lieyou_load(title_sideurl, function (err, texture) {
    if (err) return;
    title_side.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  bg_arrow_side.x = -60;
  bg_arrow_side.y = 30;
  bg_arrow_side.width = 46;
  bg_arrow_side.height = 78;
  bg_arrow_side.anchorX = 0;
  bg_arrow_side.addComponent(cc.Sprite);
  bg_arrow_side.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
  bg_arrow_side.getComponent(cc.Sprite).trim = false;
  var bg_arrow_sideurl = 'qgameMoreGame/texture/arrow';

  if (lieyou_moreGame_type == 1) {
    bg_arrow_sideurl = 'qgameMoreGame/texture_1/arrow';
  } else if (lieyou_moreGame_type == 2) {
    bg_arrow_sideurl = 'qgameMoreGame/texture_2/arrow';
  }

  lieyou_load(bg_arrow_sideurl, function (err, texture) {
    bg_arrow_side.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
  ScrollView.addComponent(cc.ScrollView);
  ScrollView.width = 160;
  ScrollView.height = 750;
  ScrollView.x = -146;
  ScrollView.y = -29;
  view.width = 160;
  view.height = 750;
  view.addComponent(cc.Mask); // view.getComponent(cc.Mask).type = cc.Mask.Type.RECT;

  content.y = 375;
  content.anchorY = 1;
  content.width = 160;
  content.height = 0;
  var qGamemoreGame_moreJs = moreGameNode.addComponent('lieyou_qGamemoreGame_more');
  qGamemoreGame_moreJs.iconPrefab = lieyou_icon_130_circle;
  qGamemoreGame_moreJs.fNode = content;
  qGamemoreGame_moreJs.type = 2;
  bg_2_side.addChild(bg_2_side2);
  bg_2_side.addChild(dragon);
  bg_2_side.addChild(dragon_1);
  bg_2_side.addChild(dragon_2);
  bg_2_side.addChild(red);
  myNode_side.addChild(bg_side);
  bg_side.addChild(title_side);
  bg_side.addChild(ScrollView);
  ScrollView.addChild(view);
  view.addChild(content);
  myNode_side.addChild(bg_arrow_side);
  moreGameNode.addChild(bg_2_side);
  moreGameNode.addChild(myNode_side);
  bg_arrow_side.on(cc.Node.EventType.TOUCH_END, function (event) {
    qGamemoreGame_moreJs.callBackHideSide();
  });
  ScrollView.getComponent(cc.ScrollView).content = content;
  ScrollView.getComponent(cc.ScrollView).horizontal = false;
  ScrollView.getComponent(cc.ScrollView).vertical = true;
  return moreGameNode;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXG1vZHVsZVxccWdhbWVNb3JlR2FtZVxcbGlleW91X3FHYW1lTW9yZUdhbWVQcmVmYWIuanMiXSwibmFtZXMiOlsid2luZG93IiwibGlleW91X2ljb25fMTMwX2JveCIsImljb25fMTMwX2JveE5vZGUiLCJjYyIsIk5vZGUiLCJ3aWR0aCIsImhlaWdodCIsImltYWdlIiwiYWRkQ29tcG9uZW50IiwiU3ByaXRlIiwiZ2V0Q29tcG9uZW50Iiwic2l6ZU1vZGUiLCJTaXplTW9kZSIsIkNVU1RPTSIsInJlZCIsIngiLCJ5IiwibGlleW91X2xvYWQiLCJlcnIiLCJ0ZXh0dXJlIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsInFHYW1lbW9yZUdhbWVfaWNvbiIsInJlZE5vZGUiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX0VORCIsImV2ZW50IiwiY2FsbEJhY2tUb3VjaCIsImFkZENoaWxkIiwibGlleW91X2ljb25fMTMwX2NpcmNsZSIsImltYWdlTWFzayIsImltYWdlTWFza1oiLCJNYXNrIiwidHlwZSIsIlR5cGUiLCJJTUFHRV9TVEVOQ0lMIiwiYWxwaGFUaHJlc2hvbGQiLCJsaWV5b3VfaWNvbl8xNTBfYm94IiwibGlleW91X21vcmVHYW1lX2Jhbm5lciIsIm1vcmVHYW1lTm9kZSIsIm15Tm9kZSIsImJnX2Jhbm5lciIsInRpdGxlX2Jhbm5lciIsInRpdGxlX2Jhbm5lcjIiLCJTY3JvbGxWaWV3IiwidmlldyIsImNvbnRlbnQiLCJiYW5uZXJDbG9zZSIsImFuY2hvclgiLCJSQVciLCJ0cmltIiwidGl0bGVfYmFubmVyMnVybCIsImxpZXlvdV9tb3JlR2FtZV90eXBlIiwiYmdfYmFubmVydXJsIiwiYW5jaG9yWSIsInFHYW1lbW9yZUdhbWVfbW9yZUpzIiwiaWNvblByZWZhYiIsImZOb2RlIiwiYmFubmVyQ2xvc2VDYWxsQmFjayIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsImxpZXlvdV9tb3JlR2FtZV9idG4iLCJtb3JlR2FtZV9idG4iLCJxR2FtZU1vcmVHYW1lX3Nob3dNb3JlIiwiY2FsbEJhY2siLCJkcmFnb24iLCJkcmFnb25fMSIsImRyYWdvbl8yIiwic2NhbGUiLCJsb2FkZXIiLCJsb2FkUmVzIiwiZHJhZ29uQm9uZXMiLCJEcmFnb25Cb25lc0F0bGFzQXNzZXQiLCJlcnJvciIsImF0bGFzSnNvbiIsIkRyYWdvbkJvbmVzQXNzZXQiLCJkcmFnb25Cb25lc0pzb24iLCJkcmFnb25fMV9hcm0iLCJBcm1hdHVyZURpc3BsYXkiLCJkcmFnb25BdGxhc0Fzc2V0IiwiZHJhZ29uQXNzZXQiLCJhcm1hdHVyZU5hbWUiLCJwbGF5QW5pbWF0aW9uIiwiZHJhZ29uXzJfYXJtIiwiZHJhZ29uX2FybSIsImxpZXlvdV9tb3JlR2FtZV9pY29uIiwiYmdfaWNvbiIsImJnX2ljb251cmwiLCJXaWRnZXQiLCJpc0FsaWduVG9wIiwiaXNBbGlnbkJvdHRvbSIsImlzQWxpZ25MZWZ0IiwiaXNBbGlnblJpZ2h0IiwibGlleW91X21vcmVHYW1lX21pZF9vbmUiLCJoYXZlVGl0bGUiLCJ0aXRsZVR5cGUiLCJvbmVOb2RlIiwiYmciLCJiZ0hlaWdodCIsImJnV2lkdGgiLCJiZ1VybCIsImluc2V0VG9wIiwiaW5zZXRCb3R0b20iLCJpbnNldExlZnQiLCJpbnNldFJpZ2h0IiwiU0xJQ0VEIiwiZk5vZGVNYXNrWiIsImZOb2RlMiIsInFHYW1lbW9yZUdhbWVfbWlkIiwidGl0bGVCZ1dpZXRoIiwidGl0bGUiLCJ0aXRsZVVybCIsInRpdGxlQmdIZWlnaHQiLCJ0aXRsZWJnIiwidGl0bGViZ1VybCIsImxpZXlvdV9tb3JlR2FtZV9tb3JlIiwicGluZ2JpIiwib3BhY2l0eSIsIkJsb2NrSW5wdXRFdmVudHMiLCJiZ19tb3JlIiwidGl0bGVfbW9yZSIsImNsb3NlIiwiYmdfbW9yZXVybCIsInRpdGxlX21vcmV1cmwiLCJjbG9zZXJ1cmwiLCJjb250ZW50TGF5b3V0IiwiTGF5b3V0IiwiR1JJRCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJzcGFjaW5nWCIsInNwYWNpbmdZIiwicmVzaXplTW9kZSIsIlJlc2l6ZU1vZGUiLCJDT05UQUlORVIiLCJjbG9zZUNhbGxCYWNrIiwibGlleW91X21vcmVHYW1lX3NpZGUiLCJiZ18yX3NpZGUiLCJiZ18yX3NpZGUyIiwiYmdfMl9zaWRlMnVybCIsIm15Tm9kZV9zaWRlIiwiYmdfc2lkZSIsInRpdGxlX3NpZGUiLCJiZ19hcnJvd19zaWRlIiwiYmdfc2lkZXVybCIsInRpdGxlX3NpZGV1cmwiLCJiZ19hcnJvd19zaWRldXJsIiwiY2FsbEJhY2tIaWRlU2lkZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxtQkFBUCxHQUE2QixZQUFVO0FBQ25DLE1BQUlDLGdCQUFnQixHQUFHLElBQUlDLEVBQUUsQ0FBQ0MsSUFBUCxFQUF2QjtBQUNBRixFQUFBQSxnQkFBZ0IsQ0FBQ0csS0FBakIsR0FBeUIsR0FBekI7QUFDQUgsRUFBQUEsZ0JBQWdCLENBQUNJLE1BQWpCLEdBQTBCLEdBQTFCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLElBQUlKLEVBQUUsQ0FBQ0MsSUFBUCxFQUFaO0FBQ0FHLEVBQUFBLEtBQUssQ0FBQ0YsS0FBTixHQUFjLEdBQWQ7QUFDQUUsRUFBQUEsS0FBSyxDQUFDRCxNQUFOLEdBQWUsR0FBZjtBQUNBQyxFQUFBQSxLQUFLLENBQUNDLFlBQU4sQ0FBbUJMLEVBQUUsQ0FBQ00sTUFBdEI7QUFDQUYsRUFBQUEsS0FBSyxDQUFDRyxZQUFOLENBQW1CUCxFQUFFLENBQUNNLE1BQXRCLEVBQThCRSxRQUE5QixHQUF5Q1IsRUFBRSxDQUFDTSxNQUFILENBQVVHLFFBQVYsQ0FBbUJDLE1BQTVEO0FBQ0EsTUFBSUMsR0FBRyxHQUFHLElBQUlYLEVBQUUsQ0FBQ0MsSUFBUCxFQUFWO0FBQ0FVLEVBQUFBLEdBQUcsQ0FBQ0MsQ0FBSixHQUFRLEVBQVI7QUFDQUQsRUFBQUEsR0FBRyxDQUFDRSxDQUFKLEdB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dUNlLFVBQXZDLEdBQW9ELEtBQXBEO0FBQ0FmLEVBQUFBLFVBQVUsQ0FBQ25DLFlBQVgsQ0FBd0JQLEVBQUUsQ0FBQzBDLFVBQTNCLEVBQXVDZ0IsUUFBdkMsR0FBa0QsSUFBbEQ7QUFDQSxTQUFPckIsWUFBUDtBQUNILENBdExEIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cubGlleW91X2ljb25fMTMwX2JveCA9IGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgaWNvbl8xMzBfYm94Tm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICBpY29uXzEzMF9ib3hOb2RlLndpZHRoID0gMTMwO1xyXG4gICAgaWNvbl8xMzBfYm94Tm9kZS5oZWlnaHQgPSAxMzA7XHJcbiAgICB2YXIgaW1hZ2UgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgaW1hZ2Uud2lkdGggPSAxMzA7XHJcbiAgICBpbWFnZS5oZWlnaHQgPSAxMzA7XHJcbiAgICBpbWFnZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIGltYWdlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcclxuICAgIHZhciByZWQgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgcmVkLnggPSA2NTtcclxuICAgIHJlZC55ID0gNjU7XHJcbiAgICByZWQud2lkdGggPSAyMjtcclxuICAgIHJlZC5oZWlnaHQgPSAyMjtcclxuICAgIHJlZC5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIHJlZC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XHJcbiAgICBsaWV5b3VfbG9hZCgncWdhbWVNb3JlR2FtZS90ZXh0dXJlL3JlZCcsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICByZWQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgcUdhbWVtb3JlR2FtZV9pY29uID0gaWNvbl8xMzBfYm94Tm9kZS5hZGRDb21wb25lbnQoJ2xpZXlvdV9xR2FtZW1vcmVHYW1lX2ljb24nKTtcclxuICAgIHFHYW1lbW9yZUdhbWVfaWNvbi5pbWFnZSA9IGltYWdlO1xyXG4gICAgcUdhbWVtb3JlR2FtZV9pY29uLnJlZE5vZGUgPSByZWQ7XHJcbiAgICBpY29uXzEzMF9ib3hOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgIHFHYW1lbW9yZUdhbWVfaWNvbi5jYWxsQmFja1RvdWNoKCk7XHJcbiAgICB9LCApO1xyXG5cclxuICAgIGljb25fMTMwX2JveE5vZGUuYWRkQ2hpbGQoaW1hZ2UpO1xyXG4gICAgaWNvbl8xMzBfYm94Tm9kZS5hZGRDaGlsZChyZWQpO1xyXG4gICAgcmV0dXJuIGljb25fMTMwX2JveE5vZGU7XHJcbn1cclxud2luZG93LmxpZXlvdV9pY29uXzEzMF9jaXJjbGUgPSBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGljb25fMTMwX2JveE5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgaWNvbl8xMzBfYm94Tm9kZS53aWR0aCA9IDEzMDtcclxuICAgIGljb25fMTMwX2JveE5vZGUuaGVpZ2h0ID0gMTMwO1xyXG4gICAgdmFyIGltYWdlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgIGltYWdlLndpZHRoID0gMTMwO1xyXG4gICAgaW1hZ2UuaGVpZ2h0ID0gMTMwO1xyXG4gICAgaW1hZ2UuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICBpbWFnZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XHJcbiAgICB2YXIgcmVkID0gbmV3IGNjLk5vZGUoKTtcclxuICAgIHJlZC54ID0gNjU7XHJcbiAgICByZWQueSA9IDY1O1xyXG4gICAgcmVkLndpZHRoID0gMjI7XHJcbiAgICByZWQuaGVpZ2h0ID0gMjI7XHJcbiAgICByZWQuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICByZWQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xyXG4gICAgbGlleW91X2xvYWQoJ3FnYW1lTW9yZUdhbWUvdGV4dHVyZS9yZWQnLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgcmVkLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHFHYW1lbW9yZUdhbWVfaWNvbiA9IGljb25fMTMwX2JveE5vZGUuYWRkQ29tcG9uZW50KCdsaWV5b3VfcUdhbWVtb3JlR2FtZV9pY29uJyk7XHJcbiAgICBxR2FtZW1vcmVHYW1lX2ljb24uaW1hZ2UgPSBpbWFnZTtcclxuICAgIHFHYW1lbW9yZUdhbWVfaWNvbi5yZWROb2RlID0gcmVkO1xyXG4gICAgaWNvbl8xMzBfYm94Tm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICBxR2FtZW1vcmVHYW1lX2ljb24uY2FsbEJhY2tUb3VjaCgpO1xyXG4gICAgfSwgKTtcclxuXHJcbiAgICB2YXIgaW1hZ2VNYXNrID0gbmV3IGNjLk5vZGUoKTtcclxuICAgIHZhciBpbWFnZU1hc2taID0gaW1hZ2VNYXNrLmFkZENvbXBvbmVudChjYy5NYXNrKTtcclxuICAgIGltYWdlTWFza1oudHlwZSA9IGNjLk1hc2suVHlwZS5JTUFHRV9TVEVOQ0lMO1xyXG4gICAgaW1hZ2VNYXNrLndpZHRoID0gMTMwO1xyXG4gICAgaW1hZ2VNYXNrLmhlaWdodCA9IDEzMDtcclxuICAgIGltYWdlTWFza1ouYWxwaGFUaHJlc2hvbGQgPSAwLjk7XHJcbiAgICBsaWV5b3VfbG9hZCgncWdhbWVNb3JlR2FtZS90ZXh0dXJlL21hc2snLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgaW1hZ2VNYXNrWi5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpY29uXzEzMF9ib3hOb2RlLmFkZENoaWxkKGltYWdlTWFzayk7XHJcbiAgICBpbWFnZU1hc2suYWRkQ2hpbGQoaW1hZ2UpO1xyXG4gICAgaWNvbl8xMzBfYm94Tm9kZS5hZGRDaGlsZChyZWQpO1xyXG4gICAgcmV0dXJuIGljb25fMTMwX2JveE5vZGU7XHJcbn1cclxud2luZG93LmxpZXlvdV9pY29uXzE1MF9ib3ggPSBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGljb25fMTMwX2JveE5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgaWNvbl8xMzBfYm94Tm9kZS53aWR0aCA9IDE1MDtcclxuICAgIGljb25fMTMwX2JveE5vZGUuaGVpZ2h0ID0gMTUwO1xyXG4gICAgdmFyIGltYWdlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgIGltYWdlLndpZHRoID0gMTUwO1xyXG4gICAgaW1hZ2UuaGVpZ2h0ID0gMTUwO1xyXG4gICAgaW1hZ2UuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICBpbWFnZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XHJcbiAgICB2YXIgcmVkID0gbmV3IGNjLk5vZGUoKTtcclxuICAgIHJlZC54ID0gNzU7XHJcbiAgICByZWQueSA9IDc1O1xyXG4gICAgcmVkLndpZHRoID0gMjI7XHJcbiAgICByZWQuaGVpZ2h0ID0gMjI7XHJcbiAgICByZWQuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICByZWQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xyXG4gICAgbGlleW91X2xvYWQoJ3FnYW1lTW9yZUdhbWUvdGV4dHVyZS9yZWQnLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgcmVkLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHFHYW1lbW9yZUdhbWVfaWNvbiA9IGljb25fMTMwX2JveE5vZGUuYWRkQ29tcG9uZW50KCdsaWV5b3VfcUdhbWVtb3JlR2FtZV9pY29uJyk7XHJcbiAgICBxR2FtZW1vcmVHYW1lX2ljb24uaW1hZ2UgPSBpbWFnZTtcclxuICAgIHFHYW1lbW9yZUdhbWVfaWNvbi5yZWROb2RlID0gcmVkO1xyXG4gICAgaWNvbl8xMzBfYm94Tm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICBxR2FtZW1vcmVHYW1lX2ljb24uY2FsbEJhY2tUb3VjaCgpO1xyXG4gICAgfSwgKTtcclxuXHJcbiAgICBpY29uXzEzMF9ib3hOb2RlLmFkZENoaWxkKGltYWdlKTtcclxuICAgIGljb25fMTMwX2JveE5vZGUuYWRkQ2hpbGQocmVkKTtcclxuICAgIHJldHVybiBpY29uXzEzMF9ib3hOb2RlO1xyXG59XHJcbndpbmRvdy5saWV5b3VfbW9yZUdhbWVfYmFubmVyID0gZnVuY3Rpb24oKXtcclxuICAgIHZhciBtb3JlR2FtZU5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgdmFyIG15Tm9kZSA9IG5ldyBjYy5Ob2RlKCdteU5vZGUnKTtcclxuXHJcbiAgICB2YXIgYmdfYmFubmVyID0gbmV3IGNjLk5vZGUoKTtcclxuICAgIHZhciB0aXRsZV9iYW5uZXIgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgdmFyIHRpdGxlX2Jhbm5lcjIgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgdmFyIFNjcm9sbFZpZXcgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgdmFyIHZpZXcgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgdmFyIGNvbnRlbnQgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgdmFyIGJhbm5lckNsb3NlID0gbmV3IGNjLk5vZGUoKTtcclxuXHJcbiAgICBTY3JvbGxWaWV3LmFkZENvbXBvbmVudChjYy5TY3JvbGxWaWV3KTtcclxuICAgIFNjcm9sbFZpZXcud2lkdGggPSA2NjA7XHJcbiAgICBTY3JvbGxWaWV3LmhlaWdodCA9IDE3MDtcclxuICAgIFNjcm9sbFZpZXcueCA9IDMwO1xyXG4gICAgU2Nyb2xsVmlldy55ID0gMDtcclxuICAgIFxyXG5cclxuICAgIHZpZXcud2lkdGggPSA2NjA7XHJcbiAgICB2aWV3LmhlaWdodCA9IDE3MDtcclxuICAgIHZpZXcuYWRkQ29tcG9uZW50KGNjLk1hc2spO1xyXG4gICAgLy8gdmlldy5nZXRDb21wb25lbnQoY2MuTWFzaykudHlwZSA9IGNjLk1hc2suVHlwZS5SRUNUO1xyXG4gICAgY29udGVudC54ID0gLTMzMDtcclxuICAgIGNvbnRlbnQuYW5jaG9yWCA9IDA7XHJcbiAgICBjb250ZW50LndpZHRoID0gMDtcclxuICAgIGNvbnRlbnQuaGVpZ2h0ID0gMTcwO1xyXG5cclxuICAgIHRpdGxlX2Jhbm5lci5hbmNob3JYID0gMDtcclxuICAgIHRpdGxlX2Jhbm5lci54ID0gLTM2MDtcclxuICAgIHRpdGxlX2Jhbm5lci53aWR0aCA9IDYwO1xyXG4gICAgdGl0bGVfYmFubmVyLmhlaWdodCA9IDE3MDtcclxuXHJcbiAgICB0aXRsZV9iYW5uZXIyLnggPSAzMDtcclxuICAgIHRpdGxlX2Jhbm5lcjIud2lkdGggPSAyOTtcclxuICAgIHRpdGxlX2Jhbm5lcjIuaGVpZ2h0ID0gMTI1O1xyXG4gICAgdGl0bGVfYmFubmVyMi5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIHRpdGxlX2Jhbm5lcjIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuUkFXO1xyXG4gICAgdGl0bGVfYmFubmVyMi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS50cmltID0gZmFsc2U7XHJcbiAgICB2YXIgdGl0bGVfYmFubmVyMnVybCA9ICdxZ2FtZU1vcmVHYW1lL3RleHR1cmUvdGl0bGVfYmFubmVyJztcclxuICAgIGlmKGxpZXlvdV9tb3JlR2FtZV90eXBlID09IDEpe1xyXG4gICAgICAgIHRpdGxlX2Jhbm5lcjJ1cmwgPSAncWdhbWVNb3JlR2FtZS90ZXh0dXJlXzEvdGl0bGVfYmFubmVyJztcclxuICAgIH1lbHNlIGlmKGxpZXlvdV9tb3JlR2FtZV90eXBlID09IDIpe1xyXG4gICAgICAgIHRpdGxlX2Jhbm5lcjJ1cmwgPSAncWdhbWVNb3JlR2FtZS90ZXh0dXJlXzIvdGl0bGVfYmFubmVyJztcclxuICAgIH1cclxuICAgIGxpZXlvdV9sb2FkKHRpdGxlX2Jhbm5lcjJ1cmwsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICB0aXRsZV9iYW5uZXIyLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgYmdfYmFubmVyLnkgPSA4NTtcclxuICAgIGJnX2Jhbm5lci53aWR0aCA9IDcyMDtcclxuICAgIGJnX2Jhbm5lci5oZWlnaHQgPSAxNzA7XHJcbiAgICBiZ19iYW5uZXIuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICBiZ19iYW5uZXIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xyXG4gICAgdmFyIGJnX2Jhbm5lcnVybCA9ICdxZ2FtZU1vcmVHYW1lL3RleHR1cmUvYmdfYmFubmVyJztcclxuICAgIGlmKGxpZXlvdV9tb3JlR2FtZV90eXBlID09IDEpe1xyXG4gICAgICAgIGJnX2Jhbm5lcnVybCA9ICdxZ2FtZU1vcmVHYW1lL3RleHR1cmVfMS9iZ19iYW5uZXInO1xyXG4gICAgfWVsc2UgaWYobGlleW91X21vcmVHYW1lX3R5cGUgPT0gMil7XHJcbiAgICAgICAgYmdfYmFubmVydXJsID0gJ3FnYW1lTW9yZUdhbWUvdGV4dHVyZV8yL2JnX2Jhbm5lcic7XHJcbiAgICB9XHJcbiAgICBsaWV5b3VfbG9hZChiZ19iYW5uZXJ1cmwsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICBiZ19iYW5uZXIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBiYW5uZXJDbG9zZS54ID0gMzYwO1xyXG4gICAgYmFubmVyQ2xvc2UueSA9IDE3MDtcclxuICAgIGJhbm5lckNsb3NlLndpZHRoID0gNTA7XHJcbiAgICBiYW5uZXJDbG9zZS5oZWlnaHQgPSA1MTtcclxuICAgIGJhbm5lckNsb3NlLmFuY2hvclggPSAxO1xyXG4gICAgYmFubmVyQ2xvc2UuYW5jaG9yWSA9IDE7XHJcbiAgICBiYW5uZXJDbG9zZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIGJhbm5lckNsb3NlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcclxuICAgIGxpZXlvdV9sb2FkKCdxZ2FtZU1vcmVHYW1lL3RleHR1cmUvYmFubmVyQ2xvc2UnLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgYmFubmVyQ2xvc2UuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgcUdhbWVtb3JlR2FtZV9tb3JlSnMgPSBtb3JlR2FtZU5vZGUuYWRkQ29tcG9uZW50KCdsaWV5b3VfcUdhbWVtb3JlR2FtZV9tb3JlJyk7XHJcbiAgICBxR2FtZW1vcmVHYW1lX21vcmVKcy5pY29uUHJlZmFiID0gbGlleW91X2ljb25fMTUwX2JveDtcclxuICAgIHFHYW1lbW9yZUdhbWVfbW9yZUpzLmZOb2RlID0gY29udGVudDtcclxuICAgIHFHYW1lbW9yZUdhbWVfbW9yZUpzLnR5cGUgPSAxO1xyXG5cclxuICAgIGJhbm5lckNsb3NlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgIHFHYW1lbW9yZUdhbWVfbW9yZUpzLmJhbm5lckNsb3NlQ2FsbEJhY2soKTtcclxuICAgIH0sICk7XHJcbiAgICBiZ19iYW5uZXIuYWRkQ2hpbGQodGl0bGVfYmFubmVyKTtcclxuICAgIHRpdGxlX2Jhbm5lci5hZGRDaGlsZCh0aXRsZV9iYW5uZXIyKTtcclxuICAgIGJnX2Jhbm5lci5hZGRDaGlsZChTY3JvbGxWaWV3KTtcclxuICAgIFNjcm9sbFZpZXcuYWRkQ2hpbGQodmlldyk7XHJcbiAgICB2aWV3LmFkZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgbXlOb2RlLmFkZENoaWxkKGJnX2Jhbm5lcik7XHJcbiAgICBteU5vZGUuYWRkQ2hpbGQoYmFubmVyQ2xvc2UpO1xyXG4gICAgbW9yZUdhbWVOb2RlLmFkZENoaWxkKG15Tm9kZSk7XHJcbiAgICBTY3JvbGxWaWV3LmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS5jb250ZW50ID0gY29udGVudDtcclxuICAgIFNjcm9sbFZpZXcuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLmhvcml6b250YWwgPSB0cnVlO1xyXG4gICAgU2Nyb2xsVmlldy5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykudmVydGljYWwgPSBmYWxzZTtcclxuICAgIHJldHVybiBtb3JlR2FtZU5vZGU7XHJcbn1cclxud2luZG93LmxpZXlvdV9tb3JlR2FtZV9idG4gPSBmdW5jdGlvbigpe1xyXG4gICAgdmFyIG1vcmVHYW1lX2J0biA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICBtb3JlR2FtZV9idG4ud2lkdGggPSAxMTA7XHJcbiAgICBtb3JlR2FtZV9idG4uaGVpZ2h0ID0gMTEwO1xyXG4gICAgXHJcbiAgICB2YXIgcmVkID0gbmV3IGNjLk5vZGUoJ3JlZCcpO1xyXG4gICAgcmVkLnggPSA1MDtcclxuICAgIHJlZC55ID0gNTA7XHJcbiAgICByZWQud2lkdGggPSAyMjtcclxuICAgIHJlZC5oZWlnaHQgPSAyMjtcclxuICAgIHJlZC5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIHJlZC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XHJcbiAgICBsaWV5b3VfbG9hZCgncWdhbWVNb3JlR2FtZS90ZXh0dXJlL3JlZCcsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICByZWQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgcUdhbWVNb3JlR2FtZV9zaG93TW9yZSA9IG1vcmVHYW1lX2J0bi5hZGRDb21wb25lbnQoJ2xpZXlvdV9xR2FtZU1vcmVHYW1lX3Nob3dNb3JlJyk7XHJcbiAgICBtb3JlR2FtZV9idG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgcUdhbWVNb3JlR2FtZV9zaG93TW9yZS5jYWxsQmFjaygpO1xyXG4gICAgfSwgKTtcclxuXHJcbiAgICB2YXIgZHJhZ29uID0gbmV3IGNjLk5vZGUoKTtcclxuICAgIHZhciBkcmFnb25fMSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICB2YXIgZHJhZ29uXzIgPSBuZXcgY2MuTm9kZSgpO1xyXG5cclxuICAgIGRyYWdvbi55ID0gLTQwO1xyXG4gICAgZHJhZ29uLnNjYWxlID0gMC4zNTtcclxuICAgIGRyYWdvbl8xLnkgPSAtNDA7XHJcbiAgICBkcmFnb25fMS5zY2FsZSA9IDAuMjtcclxuICAgIGRyYWdvbl8yLnggPSAtMTU7XHJcbiAgICBkcmFnb25fMi55ID0gMjQ7XHJcbiAgICBkcmFnb25fMi5zY2FsZSA9IDAuNjtcclxuICAgIGlmKGxpZXlvdV9tb3JlR2FtZV90eXBlID09IDEpe1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdTREsvbGlleW91X3Nka1Jlcy9xZ2FtZU1vcmVHYW1lL2RyYWdvbi9kcmFnb24xL2ppbmdsaW5nMl90ZXguanNvbicsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0LCAoZXJyb3IsIGF0bGFzSnNvbikgPT4ge1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnU0RLL2xpZXlvdV9zZGtSZXMvcWdhbWVNb3JlR2FtZS9kcmFnb24vZHJhZ29uMS9qaW5nbGluZzJfc2tlLmpzb24nLGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXNzZXQsIChlcnJvciwgZHJhZ29uQm9uZXNKc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHJhZ29uXzFfYXJtID0gZHJhZ29uXzEuYWRkQ29tcG9uZW50KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSk7XHJcbiAgICAgICAgICAgICAgICBkcmFnb25fMV9hcm0uZHJhZ29uQXRsYXNBc3NldCA9IGF0bGFzSnNvbjtcclxuICAgICAgICAgICAgICAgIGRyYWdvbl8xX2FybS5kcmFnb25Bc3NldCA9IGRyYWdvbkJvbmVzSnNvbjtcclxuICAgICAgICAgICAgICAgIGRyYWdvbl8xX2FybS5hcm1hdHVyZU5hbWUgPSAnYXJtYXR1cmVOYW1lJztcclxuICAgICAgICAgICAgICAgIGRyYWdvbl8xX2FybS5wbGF5QW5pbWF0aW9uKCdzdGFuZCcsIDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1lbHNlIGlmKGxpZXlvdV9tb3JlR2FtZV90eXBlID09IDIpe1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdTREsvbGlleW91X3Nka1Jlcy9xZ2FtZU1vcmVHYW1lL2RyYWdvbi9kcmFnb24yL2ppbmdsaW5nZG9uZ2h1XzJfc2tlX3RleC5qc29uJyxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQsIChlcnJvciwgYXRsYXNKc29uKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdTREsvbGlleW91X3Nka1Jlcy9xZ2FtZU1vcmVHYW1lL2RyYWdvbi9kcmFnb24yL2ppbmdsaW5nZG9uZ2h1XzJfc2tlX3NrZS5qc29uJyxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0LCAoZXJyb3IsIGRyYWdvbkJvbmVzSnNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRyYWdvbl8yX2FybSA9IGRyYWdvbl8yLmFkZENvbXBvbmVudChkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXkpO1xyXG4gICAgICAgICAgICAgICAgZHJhZ29uXzJfYXJtLmRyYWdvbkF0bGFzQXNzZXQgPSBhdGxhc0pzb247XHJcbiAgICAgICAgICAgICAgICBkcmFnb25fMl9hcm0uZHJhZ29uQXNzZXQgPSBkcmFnb25Cb25lc0pzb247XHJcbiAgICAgICAgICAgICAgICBkcmFnb25fMl9hcm0uYXJtYXR1cmVOYW1lID0gJ2FybWF0dXJlTmFtZSc7XHJcbiAgICAgICAgICAgICAgICBkcmFnb25fMl9hcm0ucGxheUFuaW1hdGlvbignbmV3QW5pbWF0aW9uJywgMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ1NESy9saWV5b3Vfc2RrUmVzL3FnYW1lTW9yZUdhbWUvZHJhZ29uL2ppbmdsaW5nX3RleCcsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBdGxhc0Fzc2V0LCAoZXJyb3IsIGF0bGFzSnNvbikgPT4ge1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnU0RLL2xpZXlvdV9zZGtSZXMvcWdhbWVNb3JlR2FtZS9kcmFnb24vamluZ2xpbmdfc2tlJyxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0Fzc2V0LCAoZXJyb3IsIGRyYWdvbkJvbmVzSnNvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRyYWdvbl9hcm0gPSBkcmFnb24uYWRkQ29tcG9uZW50KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSk7XHJcbiAgICAgICAgICAgICAgICBkcmFnb25fYXJtLmRyYWdvbkF0bGFzQXNzZXQgPSBhdGxhc0pzb247XHJcbiAgICAgICAgICAgICAgICBkcmFnb25fYXJtLmRyYWdvbkFzc2V0ID0gZHJhZ29uQm9uZXNKc29uO1xyXG4gICAgICAgICAgICAgICAgZHJhZ29uX2FybS5hcm1hdHVyZU5hbWUgPSAnYXJtYXR1cmVOYW1lJztcclxuICAgICAgICAgICAgICAgIGRyYWdvbl9hcm0ucGxheUFuaW1hdGlvbignYW5pbV8xJywgMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbW9yZUdhbWVfYnRuLmFkZENoaWxkKHJlZCk7XHJcbiAgICBtb3JlR2FtZV9idG4uYWRkQ2hpbGQoZHJhZ29uKTtcclxuICAgIG1vcmVHYW1lX2J0bi5hZGRDaGlsZChkcmFnb25fMSk7XHJcbiAgICBtb3JlR2FtZV9idG4uYWRkQ2hpbGQoZHJhZ29uXzIpO1xyXG4gICAgcmV0dXJuIG1vcmVHYW1lX2J0bjtcclxufVxyXG53aW5kb3cubGlleW91X21vcmVHYW1lX2ljb24gPSBmdW5jdGlvbigpe1xyXG4gICAgdmFyIGljb25fMTMwX2JveE5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgaWNvbl8xMzBfYm94Tm9kZS53aWR0aCA9IDEzMDtcclxuICAgIGljb25fMTMwX2JveE5vZGUuaGVpZ2h0ID0gMTMwO1xyXG4gICAgdmFyIGltYWdlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgIGltYWdlLndpZHRoID0gMTMwO1xyXG4gICAgaW1hZ2UuaGVpZ2h0ID0gMTMwO1xyXG4gICAgaW1hZ2UuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICBpbWFnZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XHJcbiAgICB2YXIgcmVkID0gbmV3IGNjLk5vZGUoKTtcclxuICAgIHJlZC54ID0gNjU7XHJcbiAgICByZWQueSA9IDY1O1xyXG4gICAgcmVkLndpZHRoID0gMjI7XHJcbiAgICByZWQuaGVpZ2h0ID0gMjI7XHJcbiAgICByZWQuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICByZWQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xyXG4gICAgbGlleW91X2xvYWQoJ3FnYW1lTW9yZUdhbWUvdGV4dHVyZS9yZWQnLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgcmVkLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHFHYW1lbW9yZUdhbWVfaWNvbiA9IGljb25fMTMwX2JveE5vZGUuYWRkQ29tcG9uZW50KCdsaWV5b3VfcUdhbWVtb3JlR2FtZV9pY29uJyk7XHJcbiAgICBxR2FtZW1vcmVHYW1lX2ljb24uaW1hZ2UgPSBpbWFnZTtcclxuICAgIHFHYW1lbW9yZUdhbWVfaWNvbi5yZWROb2RlID0gcmVkO1xyXG4gICAgaWNvbl8xMzBfYm94Tm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICBxR2FtZW1vcmVHYW1lX2ljb24uY2FsbEJhY2tUb3VjaCgpO1xyXG4gICAgfSwgKTtcclxuXHJcbiAgICB2YXIgaW1hZ2VNYXNrID0gbmV3IGNjLk5vZGUoKTtcclxuICAgIHZhciBpbWFnZU1hc2taID0gaW1hZ2VNYXNrLmFkZENvbXBvbmVudChjYy5NYXNrKTtcclxuICAgIGltYWdlTWFza1oudHlwZSA9IGNjLk1hc2suVHlwZS5JTUFHRV9TVEVOQ0lMO1xyXG4gICAgaW1hZ2VNYXNrLndpZHRoID0gMTMwO1xyXG4gICAgaW1hZ2VNYXNrLmhlaWdodCA9IDEzMDtcclxuICAgIGltYWdlTWFza1ouYWxwaGFUaHJlc2hvbGQgPSAwLjk7XHJcbiAgICBsaWV5b3VfbG9hZCgncWdhbWVNb3JlR2FtZS90ZXh0dXJlL21hc2snLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgaW1hZ2VNYXNrWi5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgIH0pO1xyXG4gICAgdmFyIGJnX2ljb24gPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgYmdfaWNvbi53aWR0aCA9IDEzNDtcclxuICAgIGJnX2ljb24uaGVpZ2h0ID0gMTM0O1xyXG4gICAgYmdfaWNvbi5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIGJnX2ljb24uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xyXG4gICAgdmFyIGJnX2ljb251cmwgPSAncWdhbWVNb3JlR2FtZS90ZXh0dXJlL2JnX2ljb24nO1xyXG4gICAgaWYobGlleW91X21vcmVHYW1lX3R5cGUgPT0gMil7XHJcbiAgICAgICAgYmdfaWNvbnVybCA9ICdxZ2FtZU1vcmVHYW1lL3RleHR1cmVfMi9iZ19pY29uJztcclxuICAgIH1lbHNlIGlmKGxpZXlvdV9tb3JlR2FtZV90eXBlID09IDEpe1xyXG4gICAgICAgIGJnX2ljb251cmwgPSAncWdhbWVNb3JlR2FtZS90ZXh0dXJlXzEvYmdfaWNvbic7XHJcbiAgICB9XHJcbiAgICBsaWV5b3VfbG9hZChiZ19pY29udXJsLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgYmdfaWNvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICBpY29uXzEzMF9ib3hOb2RlLmFkZENoaWxkKGltYWdlTWFzayk7XHJcbiAgICBpbWFnZU1hc2suYWRkQ2hpbGQoaW1hZ2UpO1xyXG4gICAgaWNvbl8xMzBfYm94Tm9kZS5hZGRDaGlsZChiZ19pY29uKTtcclxuICAgIGljb25fMTMwX2JveE5vZGUuYWRkQ2hpbGQocmVkKTtcclxuXHJcbiAgICBpbWFnZU1hc2suYWRkQ29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICBpbWFnZS5hZGRDb21wb25lbnQoY2MuV2lkZ2V0KTtcclxuICAgIGJnX2ljb24uYWRkQ29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICByZWQuYWRkQ29tcG9uZW50KGNjLldpZGdldCk7XHJcbiAgICBpbWFnZU1hc2suZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuaXNBbGlnblRvcCA9IHRydWU7XHJcbiAgICBpbWFnZU1hc2suZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuaXNBbGlnbkJvdHRvbSA9IHRydWU7XHJcbiAgICBpbWFnZU1hc2suZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuaXNBbGlnbkxlZnQgPSB0cnVlO1xyXG4gICAgaW1hZ2VNYXNrLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmlzQWxpZ25SaWdodCA9IHRydWU7XHJcbiAgICBpbWFnZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5pc0FsaWduVG9wID0gdHJ1ZTtcclxuICAgIGltYWdlLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmlzQWxpZ25Cb3R0b20gPSB0cnVlO1xyXG4gICAgaW1hZ2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuaXNBbGlnbkxlZnQgPSB0cnVlO1xyXG4gICAgaW1hZ2UuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuaXNBbGlnblJpZ2h0ID0gdHJ1ZTtcclxuICAgIGJnX2ljb24uZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuaXNBbGlnblRvcCA9IHRydWU7XHJcbiAgICBiZ19pY29uLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmlzQWxpZ25Cb3R0b20gPSB0cnVlO1xyXG4gICAgYmdfaWNvbi5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KS5pc0FsaWduTGVmdCA9IHRydWU7XHJcbiAgICBiZ19pY29uLmdldENvbXBvbmVudChjYy5XaWRnZXQpLmlzQWxpZ25SaWdodCA9IHRydWU7XHJcbiAgICByZWQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuaXNBbGlnblRvcCA9IHRydWU7XHJcbiAgICByZWQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCkuaXNBbGlnblJpZ2h0ID0gdHJ1ZTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGljb25fMTMwX2JveE5vZGU7XHJcbn1cclxud2luZG93LmxpZXlvdV9tb3JlR2FtZV9taWRfb25lID0gZnVuY3Rpb24odHlwZSxoYXZlVGl0bGUsdGl0bGVUeXBlLHNjYWxlKXtcclxuICAgIHZhciBvbmVOb2RlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgIHZhciBiZyA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICB2YXIgYmdIZWlnaHQgPSAyNiArIHR5cGUqMTQwO1xyXG4gICAgdmFyIGJnV2lkdGggPSA1ODY7XHJcbiAgICBiZy53aWR0aCA9IGJnV2lkdGg7XHJcbiAgICBpZih0eXBlID09IDMpey8vMzMzXHJcbiAgICAgICAgLy8gYmdIZWlnaHQgLT0gMTAwO1xyXG4gICAgICAgIGJnLndpZHRoID0gYmdXaWR0aC0xNDA7XHJcbiAgICAgICAgYmdIZWlnaHQgPSBiZy53aWR0aDtcclxuICAgIH1cclxuICAgIGJnLmhlaWdodCA9IGJnSGVpZ2h0O1xyXG4gICAgYmcuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICBiZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XHJcbiAgICB2YXIgYmdVcmwgPSAncWdhbWVNb3JlR2FtZS90ZXh0dXJlL2JnX21pZCc7XHJcbiAgICBpZihsaWV5b3VfbW9yZUdhbWVfdHlwZSA9PSAxKXtcclxuICAgICAgICBiZ1VybCA9ICdxZ2FtZU1vcmVHYW1lL3RleHR1cmVfMS9iZ19taWQnO1xyXG4gICAgfWVsc2UgaWYobGlleW91X21vcmVHYW1lX3R5cGUgPT0gMil7XHJcbiAgICAgICAgYmdVcmwgPSAncWdhbWVNb3JlR2FtZS90ZXh0dXJlXzIvYmdfbWlkJztcclxuICAgIH1cclxuICAgIGxpZXlvdV9sb2FkKGJnVXJsLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgYmcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgYmcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUuaW5zZXRUb3AgPSAyMDtcclxuICAgICAgICBiZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZS5pbnNldEJvdHRvbSA9IDIwO1xyXG4gICAgICAgIGJnLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lLmluc2V0TGVmdCA9IDIwO1xyXG4gICAgICAgIGJnLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lLmluc2V0UmlnaHQgPSAyMDtcclxuICAgICAgICBiZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS50eXBlID0gY2MuU3ByaXRlLlR5cGUuU0xJQ0VEO1xyXG4gICAgfSk7XHJcbiAgICB2YXIgZk5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgZk5vZGUud2lkdGggPSBiZ1dpZHRoIC0gMTY7XHJcbiAgICBpZih0eXBlID09IDMpey8vMzMzXHJcbiAgICAgICAgZk5vZGUud2lkdGggPSBiZ1dpZHRoIC0gMTYgLSAxNDA7XHJcbiAgICB9XHJcbiAgICBmTm9kZS5oZWlnaHQgPSBiZ0hlaWdodC0xNjtcclxuICAgIHZhciBmTm9kZU1hc2taID0gZk5vZGUuYWRkQ29tcG9uZW50KGNjLk1hc2spO1xyXG4gICAgdmFyIGZOb2RlMiA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICBmTm9kZS5hZGRDaGlsZChmTm9kZTIpO1xyXG4gICAgLy8gZk5vZGVNYXNrWi50eXBlID0gY2MuTWFzay5UeXBlLlJFQ1Q7XHJcbiAgICB2YXIgcUdhbWVtb3JlR2FtZV9taWQgPSBvbmVOb2RlLmFkZENvbXBvbmVudCgnbGlleW91X3FHYW1lbW9yZUdhbWVfbWlkJyk7XHJcbiAgICBxR2FtZW1vcmVHYW1lX21pZC50eXBlID0gdHlwZTtcclxuICAgIHFHYW1lbW9yZUdhbWVfbWlkLmljb25QcmVmYWIgPSBsaWV5b3VfaWNvbl8xMzBfYm94O1xyXG4gICAgcUdhbWVtb3JlR2FtZV9taWQuZk5vZGUgPSBmTm9kZTI7XHJcbiAgICBvbmVOb2RlLmFkZENoaWxkKGJnKTtcclxuICAgIG9uZU5vZGUuYWRkQ2hpbGQoZk5vZGUpO1xyXG5cclxuICAgIGlmKGhhdmVUaXRsZSAmJiB0eXBlICE9IDMpey8vbWlkX3RpdGxlWl8xXHJcbiAgICAgICAgaWYodGl0bGVUeXBlICYmIHR5cGUgPT0gMSl7XHJcbiAgICAgICAgICAgIHZhciB0aXRsZUJnV2lldGggPSA1MDtcclxuICAgICAgICAgICAgYmcud2lkdGggPSBiZy53aWR0aCArIHRpdGxlQmdXaWV0aDtcclxuICAgICAgICAgICAgZk5vZGUueCArPSB0aXRsZUJnV2lldGgvMjtcclxuICAgICAgICAgICAgdmFyIHRpdGxlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICAgICAgdGl0bGUueCA9IC1iZy53aWR0aC8yICsgdGl0bGVCZ1dpZXRoLzI7XHJcbiAgICAgICAgICAgIGJnLmFkZENoaWxkKHRpdGxlKTtcclxuICAgICAgICAgICAgdGl0bGUuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgIHZhciB0aXRsZVVybCA9ICdxZ2FtZU1vcmVHYW1lL3RleHR1cmUvbWlkX3RpdGxlWl8nK3R5cGUrJyc7XHJcbiAgICAgICAgICAgIGlmKGxpZXlvdV9tb3JlR2FtZV90eXBlID09IDEpe1xyXG4gICAgICAgICAgICAgICAgdGl0bGVVcmwgPSAncWdhbWVNb3JlR2FtZS90ZXh0dXJlXzEvbWlkX3RpdGxlWl8nK3R5cGUrJyc7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGxpZXlvdV9tb3JlR2FtZV90eXBlID09IDIpe1xyXG4gICAgICAgICAgICAgICAgdGl0bGVVcmwgPSAncWdhbWVNb3JlR2FtZS90ZXh0dXJlXzIvbWlkX3RpdGxlWl8nK3R5cGUrJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGlleW91X2xvYWQodGl0bGVVcmwsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdmFyIHRpdGxlQmdIZWlnaHQgPSA1NTtcclxuICAgICAgICAgICAgYmdIZWlnaHQgKz0gdGl0bGVCZ0hlaWdodDtcclxuICAgICAgICAgICAgYmcuaGVpZ2h0ID0gYmdIZWlnaHQ7XHJcbiAgICAgICAgICAgIGZOb2RlLnkgLT0gdGl0bGVCZ0hlaWdodC8yO1xyXG4gICAgICAgICAgICB2YXIgdGl0bGViZyA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgICAgIGJnLmFkZENoaWxkKHRpdGxlYmcpO1xyXG4gICAgICAgICAgICB0aXRsZWJnLnkgPSBiZ0hlaWdodC8yIC0gdGl0bGVCZ0hlaWdodC8yIC0gMztcclxuICAgICAgICAgICAgdmFyIHRpdGxlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICAgICAgdGl0bGViZy5hZGRDaGlsZCh0aXRsZSk7XHJcbiAgICAgICAgICAgIHRpdGxlYmcuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgICAgIHRpdGxlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICB2YXIgdGl0bGViZ1VybCA9ICdxZ2FtZU1vcmVHYW1lL3RleHR1cmUvbWlkX3RpdGxlX2JnJztcclxuICAgICAgICAgICAgdmFyIHRpdGxlVXJsID0gJ3FnYW1lTW9yZUdhbWUvdGV4dHVyZS9taWRfdGl0bGVfJyt0eXBlKycnO1xyXG4gICAgICAgICAgICBpZihsaWV5b3VfbW9yZUdhbWVfdHlwZSA9PSAxKXtcclxuICAgICAgICAgICAgICAgIHRpdGxlYmdVcmwgPSAncWdhbWVNb3JlR2FtZS90ZXh0dXJlXzEvbWlkX3RpdGxlX2JnJztcclxuICAgICAgICAgICAgICAgIHRpdGxlVXJsID0gJ3FnYW1lTW9yZUdhbWUvdGV4dHVyZV8xL21pZF90aXRsZV8nK3R5cGUrJyc7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGxpZXlvdV9tb3JlR2FtZV90eXBlID09IDIpe1xyXG4gICAgICAgICAgICAgICAgdGl0bGViZ1VybCA9ICdxZ2FtZU1vcmVHYW1lL3RleHR1cmVfMi9taWRfdGl0bGVfYmcnO1xyXG4gICAgICAgICAgICAgICAgdGl0bGVVcmwgPSAncWdhbWVNb3JlR2FtZS90ZXh0dXJlXzIvbWlkX3RpdGxlXycrdHlwZSsnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaWV5b3VfbG9hZCh0aXRsZWJnVXJsLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZWJnLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGlleW91X2xvYWQodGl0bGVVcmwsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbmVOb2RlLnNjYWxlID0gc2NhbGUqMS4xICogKCh0eXBlPT0zKT8xLjM6MSk7XHJcbiAgICByZXR1cm4gb25lTm9kZTtcclxufVxyXG5cclxud2luZG93LmxpZXlvdV9tb3JlR2FtZV9tb3JlID0gZnVuY3Rpb24oKXtcclxuICAgIHZhciBtb3JlR2FtZU5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgdmFyIHBpbmdiaSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICBwaW5nYmkud2lkdGggPSA5NjA7XHJcbiAgICBwaW5nYmkuaGVpZ2h0ID0gMTI4MDtcclxuICAgIHBpbmdiaS5vcGFjaXR5ID0gMTAwO1xyXG4gICAgcGluZ2JpLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgcGluZ2JpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcclxuICAgIGxpZXlvdV9sb2FkKCdxZ2FtZU1vcmVHYW1lL29wcG9fbmF0aXZlX2luc3RlcnNfbGF5ZXJCZycsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICBwaW5nYmkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICB9KTtcclxuICAgIHBpbmdiaS5hZGRDb21wb25lbnQoY2MuQmxvY2tJbnB1dEV2ZW50cyk7XHJcblxyXG4gICAgdmFyIG15Tm9kZSA9IG5ldyBjYy5Ob2RlKCdteU5vZGUnKTtcclxuICAgIHZhciBiZ19tb3JlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgIHZhciB0aXRsZV9tb3JlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgIHZhciBjbG9zZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICB2YXIgU2Nyb2xsVmlldyA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICB2YXIgdmlldyA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICB2YXIgY29udGVudCA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICBteU5vZGUuYWRkQ2hpbGQoYmdfbW9yZSk7XHJcbiAgICBteU5vZGUuYWRkQ2hpbGQodGl0bGVfbW9yZSk7XHJcbiAgICBteU5vZGUuYWRkQ2hpbGQoY2xvc2UpO1xyXG4gICAgbXlOb2RlLmFkZENoaWxkKFNjcm9sbFZpZXcpO1xyXG4gICAgU2Nyb2xsVmlldy5hZGRDaGlsZCh2aWV3KTtcclxuICAgIHZpZXcuYWRkQ2hpbGQoY29udGVudCk7XHJcblxyXG4gICAgYmdfbW9yZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIGJnX21vcmUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuUkFXO1xyXG4gICAgYmdfbW9yZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS50cmltID0gZmFsc2U7XHJcbiAgICB2YXIgYmdfbW9yZXVybCA9ICdxZ2FtZU1vcmVHYW1lL3RleHR1cmUvYmdfbW9yZSc7XHJcbiAgICBpZihsaWV5b3VfbW9yZUdhbWVfdHlwZSA9PSAxKXtcclxuICAgICAgICBiZ19tb3JldXJsID0gJ3FnYW1lTW9yZUdhbWUvdGV4dHVyZV8xL2JnX21vcmUnO1xyXG4gICAgfWVsc2UgaWYobGlleW91X21vcmVHYW1lX3R5cGUgPT0gMil7XHJcbiAgICAgICAgYmdfbW9yZXVybCA9ICdxZ2FtZU1vcmVHYW1lL3RleHR1cmVfMi9iZ19tb3JlJztcclxuICAgIH1cclxuICAgIGxpZXlvdV9sb2FkKGJnX21vcmV1cmwsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICBiZ19tb3JlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgfSk7XHJcbiAgICB0aXRsZV9tb3JlLnkgPSAzNDU7XHJcbiAgICB0aXRsZV9tb3JlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgdGl0bGVfbW9yZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5SQVc7XHJcbiAgICB0aXRsZV9tb3JlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnRyaW0gPSBmYWxzZTtcclxuICAgIHZhciB0aXRsZV9tb3JldXJsID0gJ3FnYW1lTW9yZUdhbWUvdGV4dHVyZS90aXRsZV9tb3JlJztcclxuICAgIGlmKGxpZXlvdV9tb3JlR2FtZV90eXBlID09IDEpe1xyXG4gICAgICAgIHRpdGxlX21vcmV1cmwgPSAnJztcclxuICAgIH1lbHNlIGlmKGxpZXlvdV9tb3JlR2FtZV90eXBlID09IDIpe1xyXG4gICAgICAgIHRpdGxlX21vcmV1cmwgPSAncWdhbWVNb3JlR2FtZS90ZXh0dXJlXzIvdGl0bGVfbW9yZSc7XHJcbiAgICB9XHJcbiAgICBsaWV5b3VfbG9hZCh0aXRsZV9tb3JldXJsLCAoZXJyLCB0ZXh0dXJlKSA9PiB7XHJcbiAgICAgICAgaWYoZXJyKSByZXR1cm47XHJcbiAgICAgICAgdGl0bGVfbW9yZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgIH0pO1xyXG4gICAgY2xvc2UueCA9IDI1MDtcclxuICAgIGlmKGxpZXlvdV9tb3JlR2FtZV90eXBlID09IDIpe1xyXG4gICAgICAgIGNsb3NlLnggPSAtMjUwO1xyXG4gICAgfVxyXG4gICAgY2xvc2UueSA9IDM0NTtcclxuICAgIGNsb3NlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgY2xvc2UuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuUkFXO1xyXG4gICAgY2xvc2UuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkudHJpbSA9IGZhbHNlO1xyXG4gICAgdmFyIGNsb3NlcnVybCA9ICdxZ2FtZU1vcmVHYW1lL3RleHR1cmUvY2xvc2UnO1xyXG4gICAgaWYobGlleW91X21vcmVHYW1lX3R5cGUgPT0gMSl7XHJcbiAgICAgICAgY2xvc2VydXJsID0gJ3FnYW1lTW9yZUdhbWUvdGV4dHVyZV8xL2Nsb3NlJztcclxuICAgIH1lbHNlIGlmKGxpZXlvdV9tb3JlR2FtZV90eXBlID09IDIpe1xyXG4gICAgICAgIGNsb3NlcnVybCA9ICdxZ2FtZU1vcmVHYW1lL3RleHR1cmVfMi9jbG9zZSc7XHJcbiAgICB9XHJcbiAgICBsaWV5b3VfbG9hZChjbG9zZXJ1cmwsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICBjbG9zZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgIH0pO1xyXG4gICAgU2Nyb2xsVmlldy5hZGRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XHJcbiAgICBTY3JvbGxWaWV3LndpZHRoID0gNTMwO1xyXG4gICAgU2Nyb2xsVmlldy5oZWlnaHQgPSA2NDA7XHJcbiAgICBTY3JvbGxWaWV3LnkgPSAtNDA7XHJcbiAgICBcclxuXHJcbiAgICB2aWV3LndpZHRoID0gNTMwO1xyXG4gICAgdmlldy5oZWlnaHQgPSA2NDA7XHJcbiAgICB2aWV3LmFkZENvbXBvbmVudChjYy5NYXNrKTtcclxuICAgIC8vIHZpZXcuZ2V0Q29tcG9uZW50KGNjLk1hc2spLnR5cGUgPSBjYy5NYXNrLlR5cGUuUkVDVDtcclxuICAgIGNvbnRlbnQueT0gMzIwO1xyXG4gICAgY29udGVudC5hbmNob3JZID0gMTtcclxuICAgIGNvbnRlbnQud2lkdGggPSA1MzA7XHJcbiAgICBjb250ZW50LmhlaWdodCA9IDA7XHJcbiAgICB2YXIgY29udGVudExheW91dCA9IGNvbnRlbnQuYWRkQ29tcG9uZW50KGNjLkxheW91dCk7XHJcbiAgICBjb250ZW50TGF5b3V0LnR5cGUgPSBjYy5MYXlvdXQuVHlwZS5HUklEO1xyXG4gICAgY29udGVudExheW91dC5wYWRkaW5nTGVmdCA9IDIwO1xyXG4gICAgY29udGVudExheW91dC5wYWRkaW5nUmlnaHQgPSAyMDtcclxuICAgIGNvbnRlbnRMYXlvdXQucGFkZGluZ1RvcCA9IDIwO1xyXG4gICAgY29udGVudExheW91dC5wYWRkaW5nQm90dG9tID0gMjA7XHJcbiAgICBjb250ZW50TGF5b3V0LnNwYWNpbmdYID0gMjA7XHJcbiAgICBjb250ZW50TGF5b3V0LnNwYWNpbmdZID0gMjA7XHJcbiAgICBjb250ZW50TGF5b3V0LnJlc2l6ZU1vZGUgPSBjYy5MYXlvdXQuUmVzaXplTW9kZS5DT05UQUlORVI7XHJcbiAgICB2YXIgcUdhbWVtb3JlR2FtZV9tb3JlSnMgPSBtb3JlR2FtZU5vZGUuYWRkQ29tcG9uZW50KCdsaWV5b3VfcUdhbWVtb3JlR2FtZV9tb3JlJyk7XHJcbiAgICBxR2FtZW1vcmVHYW1lX21vcmVKcy5pY29uUHJlZmFiID0gbGlleW91X2ljb25fMTUwX2JveDtcclxuICAgIHFHYW1lbW9yZUdhbWVfbW9yZUpzLmZOb2RlID0gY29udGVudDtcclxuICAgIHFHYW1lbW9yZUdhbWVfbW9yZUpzLnR5cGUgPSAwO1xyXG4gICAgbW9yZUdhbWVOb2RlLmFkZENoaWxkKHBpbmdiaSk7XHJcbiAgICBtb3JlR2FtZU5vZGUuYWRkQ2hpbGQobXlOb2RlKTtcclxuICAgIGNsb3NlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgIHFHYW1lbW9yZUdhbWVfbW9yZUpzLmNsb3NlQ2FsbEJhY2soKTtcclxuICAgIH0sICk7XHJcbiAgICBTY3JvbGxWaWV3LmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS5jb250ZW50ID0gY29udGVudDtcclxuICAgIFNjcm9sbFZpZXcuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLmhvcml6b250YWwgPSBmYWxzZTtcclxuICAgIFNjcm9sbFZpZXcuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLnZlcnRpY2FsID0gdHJ1ZTtcclxuICAgIHJldHVybiBtb3JlR2FtZU5vZGU7XHJcbn1cclxud2luZG93LmxpZXlvdV9tb3JlR2FtZV9zaWRlID0gZnVuY3Rpb24oKXtcclxuICAgIHZhciBtb3JlR2FtZU5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG5cclxuICAgIHZhciBiZ18yX3NpZGUgPSBuZXcgY2MuTm9kZSgnYmdfMl9zaWRlJyk7XHJcbiAgICB2YXIgYmdfMl9zaWRlMiA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICB2YXIgZHJhZ29uID0gbmV3IGNjLk5vZGUoJ2RyYWdvbicpO1xyXG4gICAgdmFyIGRyYWdvbl8xID0gbmV3IGNjLk5vZGUoJ2RyYWdvbl8xJyk7XHJcbiAgICB2YXIgZHJhZ29uXzIgPSBuZXcgY2MuTm9kZSgnZHJhZ29uXzInKTtcclxuICAgIHZhciByZWQgPSBuZXcgY2MuTm9kZSgncmVkJyk7XHJcblxyXG4gICAgZHJhZ29uLnggPSA1NTtcclxuICAgIGRyYWdvbi55ID0gLTQ0O1xyXG4gICAgZHJhZ29uLnNjYWxlID0gMC4zNTtcclxuICAgIGRyYWdvbl8xLnggPSA1NTsgICAgXHJcbiAgICBkcmFnb25fMS55ID0gLTQ0O1xyXG4gICAgZHJhZ29uXzEuc2NhbGUgPSAwLjI1O1xyXG4gICAgZHJhZ29uXzIueCA9IDM3O1xyXG4gICAgZHJhZ29uXzIueSA9IDI0O1xyXG4gICAgZHJhZ29uXzIuc2NhbGUgPSAwLjY7XHJcblxyXG4gICAgaWYobGlleW91X21vcmVHYW1lX3R5cGUgPT0gMSl7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ1NESy9saWV5b3Vfc2RrUmVzL3FnYW1lTW9yZUdhbWUvZHJhZ29uL2RyYWdvbjEvamluZ2xpbmcyX3RleC5qc29uJyxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQsIChlcnJvciwgYXRsYXNKc29uKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdTREsvbGlleW91X3Nka1Jlcy9xZ2FtZU1vcmVHYW1lL2RyYWdvbi9kcmFnb24xL2ppbmdsaW5nMl9za2UuanNvbicsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldCwgKGVycm9yLCBkcmFnb25Cb25lc0pzb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBkcmFnb25fMV9hcm0gPSBkcmFnb25fMS5hZGRDb21wb25lbnQoZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5KTtcclxuICAgICAgICAgICAgICAgIGRyYWdvbl8xX2FybS5kcmFnb25BdGxhc0Fzc2V0ID0gYXRsYXNKc29uO1xyXG4gICAgICAgICAgICAgICAgZHJhZ29uXzFfYXJtLmRyYWdvbkFzc2V0ID0gZHJhZ29uQm9uZXNKc29uO1xyXG4gICAgICAgICAgICAgICAgZHJhZ29uXzFfYXJtLmFybWF0dXJlTmFtZSA9ICdhcm1hdHVyZU5hbWUnO1xyXG4gICAgICAgICAgICAgICAgZHJhZ29uXzFfYXJtLnBsYXlBbmltYXRpb24oJ3N0YW5kJywgMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfWVsc2UgaWYobGlleW91X21vcmVHYW1lX3R5cGUgPT0gMil7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ1NESy9saWV5b3Vfc2RrUmVzL3FnYW1lTW9yZUdhbWUvZHJhZ29uL2RyYWdvbjIvamluZ2xpbmdkb25naHVfMl9za2VfdGV4Lmpzb24nLGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXRsYXNBc3NldCwgKGVycm9yLCBhdGxhc0pzb24pID0+IHtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ1NESy9saWV5b3Vfc2RrUmVzL3FnYW1lTW9yZUdhbWUvZHJhZ29uL2RyYWdvbjIvamluZ2xpbmdkb25naHVfMl9za2Vfc2tlLmpzb24nLGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXNzZXQsIChlcnJvciwgZHJhZ29uQm9uZXNKc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHJhZ29uXzJfYXJtID0gZHJhZ29uXzIuYWRkQ29tcG9uZW50KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSk7XHJcbiAgICAgICAgICAgICAgICBkcmFnb25fMl9hcm0uZHJhZ29uQXRsYXNBc3NldCA9IGF0bGFzSnNvbjtcclxuICAgICAgICAgICAgICAgIGRyYWdvbl8yX2FybS5kcmFnb25Bc3NldCA9IGRyYWdvbkJvbmVzSnNvbjtcclxuICAgICAgICAgICAgICAgIGRyYWdvbl8yX2FybS5hcm1hdHVyZU5hbWUgPSAnYXJtYXR1cmVOYW1lJztcclxuICAgICAgICAgICAgICAgIGRyYWdvbl8yX2FybS5wbGF5QW5pbWF0aW9uKCduZXdBbmltYXRpb24nLCAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnU0RLL2xpZXlvdV9zZGtSZXMvcWdhbWVNb3JlR2FtZS9kcmFnb24vamluZ2xpbmdfdGV4JyxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQsIChlcnJvciwgYXRsYXNKc29uKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdTREsvbGlleW91X3Nka1Jlcy9xZ2FtZU1vcmVHYW1lL2RyYWdvbi9qaW5nbGluZ19za2UnLGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXNzZXQsIChlcnJvciwgZHJhZ29uQm9uZXNKc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHJhZ29uX2FybSA9IGRyYWdvbi5hZGRDb21wb25lbnQoZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5KTtcclxuICAgICAgICAgICAgICAgIGRyYWdvbl9hcm0uZHJhZ29uQXRsYXNBc3NldCA9IGF0bGFzSnNvbjtcclxuICAgICAgICAgICAgICAgIGRyYWdvbl9hcm0uZHJhZ29uQXNzZXQgPSBkcmFnb25Cb25lc0pzb247XHJcbiAgICAgICAgICAgICAgICBkcmFnb25fYXJtLmFybWF0dXJlTmFtZSA9ICdhcm1hdHVyZU5hbWUnO1xyXG4gICAgICAgICAgICAgICAgZHJhZ29uX2FybS5wbGF5QW5pbWF0aW9uKCdhbmltXzEnLCAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IFxyXG5cclxuICAgIGJnXzJfc2lkZS5hbmNob3JYID0gMDtcclxuICAgIGJnXzJfc2lkZS53aWR0aCA9IDExMDtcclxuICAgIGJnXzJfc2lkZS5oZWlnaHQgPSAxMTA7XHJcblxyXG4gICAgYmdfMl9zaWRlMi5hbmNob3JYID0gMDtcclxuICAgIGJnXzJfc2lkZTIud2lkdGggPSAxMTA7XHJcbiAgICBiZ18yX3NpZGUyLmhlaWdodCA9IDExMDtcclxuICAgIGJnXzJfc2lkZTIuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICBiZ18yX3NpZGUyLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcclxuICAgIHZhciBiZ18yX3NpZGUydXJsID0gJ3FnYW1lTW9yZUdhbWUvdGV4dHVyZS9iZ18yX3NpZGUnO1xyXG4gICAgaWYobGlleW91X21vcmVHYW1lX3R5cGUgPT0gMSl7XHJcbiAgICAgICAgYmdfMl9zaWRlMnVybCA9ICdxZ2FtZU1vcmVHYW1lL3RleHR1cmVfMS9iZ18yX3NpZGUnO1xyXG4gICAgfWVsc2UgaWYobGlleW91X21vcmVHYW1lX3R5cGUgPT0gMil7XHJcbiAgICAgICAgYmdfMl9zaWRlMnVybCA9ICdxZ2FtZU1vcmVHYW1lL3RleHR1cmVfMi9iZ18yX3NpZGUnO1xyXG4gICAgfVxyXG4gICAgbGlleW91X2xvYWQoYmdfMl9zaWRlMnVybCwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgIGJnXzJfc2lkZTIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZWQueCA9IDEwNztcclxuICAgIHJlZC55ID0gNTQ7XHJcbiAgICByZWQud2lkdGggPSAyMjtcclxuICAgIHJlZC5oZWlnaHQgPSAyMjtcclxuICAgIHJlZC5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIHJlZC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XHJcbiAgICBsaWV5b3VfbG9hZCgncWdhbWVNb3JlR2FtZS90ZXh0dXJlL3JlZCcsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICByZWQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgbXlOb2RlX3NpZGUgPSBuZXcgY2MuTm9kZSgnbXlOb2RlX3NpZGUnKTtcclxuICAgIHZhciBiZ19zaWRlID0gbmV3IGNjLk5vZGUoJ2JnX3NpZGUnKTtcclxuICAgIHZhciB0aXRsZV9zaWRlID0gbmV3IGNjLk5vZGUoJ3RpdGxlX3NpZGUnKTtcclxuICAgIHZhciBTY3JvbGxWaWV3ID0gbmV3IGNjLk5vZGUoKTtcclxuICAgIHZhciB2aWV3ID0gbmV3IGNjLk5vZGUoKTtcclxuICAgIHZhciBjb250ZW50ID0gbmV3IGNjLk5vZGUoKTtcclxuICAgIHZhciBiZ19hcnJvd19zaWRlID0gbmV3IGNjLk5vZGUoKTtcclxuXHJcbiAgICBiZ19zaWRlLndpZHRoID0gMjI3O1xyXG4gICAgYmdfc2lkZS5oZWlnaHQgPSA4MzM7XHJcbiAgICBiZ19zaWRlLmFuY2hvclggPSAxO1xyXG4gICAgYmdfc2lkZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIGJnX3NpZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuUkFXO1xyXG4gICAgYmdfc2lkZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS50cmltID0gZmFsc2U7XHJcbiAgICB2YXIgYmdfc2lkZXVybCA9ICdxZ2FtZU1vcmVHYW1lL3RleHR1cmUvYmdfc2lkZSc7XHJcbiAgICBpZihsaWV5b3VfbW9yZUdhbWVfdHlwZSA9PSAxKXtcclxuICAgICAgICBiZ19zaWRldXJsID0gJ3FnYW1lTW9yZUdhbWUvdGV4dHVyZV8xL2JnX3NpZGUnO1xyXG4gICAgfWVsc2UgaWYobGlleW91X21vcmVHYW1lX3R5cGUgPT0gMil7XHJcbiAgICAgICAgYmdfc2lkZXVybCA9ICdxZ2FtZU1vcmVHYW1lL3RleHR1cmVfMi9iZ19zaWRlJztcclxuICAgIH1cclxuICAgIGxpZXlvdV9sb2FkKGJnX3NpZGV1cmwsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICBiZ19zaWRlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGl0bGVfc2lkZS54ID0gLTE0NjtcclxuICAgIHRpdGxlX3NpZGUueSA9IDM3NztcclxuICAgIHRpdGxlX3NpZGUud2lkdGggPSAxMjg7XHJcbiAgICB0aXRsZV9zaWRlLmhlaWdodCA9IDM1O1xyXG4gICAgdGl0bGVfc2lkZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIHRpdGxlX3NpZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuUkFXO1xyXG4gICAgdGl0bGVfc2lkZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS50cmltID0gZmFsc2U7XHJcbiAgICB2YXIgdGl0bGVfc2lkZXVybCA9ICdxZ2FtZU1vcmVHYW1lL3RleHR1cmUvdGl0bGVfc2lkZSc7XHJcbiAgICBpZihsaWV5b3VfbW9yZUdhbWVfdHlwZSA9PSAxKXtcclxuICAgICAgICB0aXRsZV9zaWRldXJsID0gJyc7XHJcbiAgICB9ZWxzZSBpZihsaWV5b3VfbW9yZUdhbWVfdHlwZSA9PSAyKXtcclxuICAgICAgICB0aXRsZV9zaWRldXJsID0gJ3FnYW1lTW9yZUdhbWUvdGV4dHVyZV8yL3RpdGxlX3NpZGUnO1xyXG4gICAgfVxyXG4gICAgbGlleW91X2xvYWQodGl0bGVfc2lkZXVybCwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgIGlmKGVycikgcmV0dXJuO1xyXG4gICAgICAgIHRpdGxlX3NpZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBiZ19hcnJvd19zaWRlLnggPSAtNjA7XHJcbiAgICBiZ19hcnJvd19zaWRlLnkgPSAzMDtcclxuICAgIGJnX2Fycm93X3NpZGUud2lkdGggPSA0NjtcclxuICAgIGJnX2Fycm93X3NpZGUuaGVpZ2h0ID0gNzg7XHJcbiAgICBiZ19hcnJvd19zaWRlLmFuY2hvclggPSAwO1xyXG4gICAgYmdfYXJyb3dfc2lkZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIGJnX2Fycm93X3NpZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuUkFXO1xyXG4gICAgYmdfYXJyb3dfc2lkZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS50cmltID0gZmFsc2U7XHJcbiAgICB2YXIgYmdfYXJyb3dfc2lkZXVybCA9ICdxZ2FtZU1vcmVHYW1lL3RleHR1cmUvYXJyb3cnO1xyXG4gICAgaWYobGlleW91X21vcmVHYW1lX3R5cGUgPT0gMSl7XHJcbiAgICAgICAgYmdfYXJyb3dfc2lkZXVybCA9ICdxZ2FtZU1vcmVHYW1lL3RleHR1cmVfMS9hcnJvdyc7XHJcbiAgICB9ZWxzZSBpZihsaWV5b3VfbW9yZUdhbWVfdHlwZSA9PSAyKXtcclxuICAgICAgICBiZ19hcnJvd19zaWRldXJsID0gJ3FnYW1lTW9yZUdhbWUvdGV4dHVyZV8yL2Fycm93JztcclxuICAgIH1cclxuICAgIGxpZXlvdV9sb2FkKGJnX2Fycm93X3NpZGV1cmwsIChlcnIsIHRleHR1cmUpID0+IHtcclxuICAgICAgICBiZ19hcnJvd19zaWRlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgU2Nyb2xsVmlldy5hZGRDb21wb25lbnQoY2MuU2Nyb2xsVmlldyk7XHJcbiAgICBTY3JvbGxWaWV3LndpZHRoID0gMTYwO1xyXG4gICAgU2Nyb2xsVmlldy5oZWlnaHQgPSA3NTA7XHJcbiAgICBTY3JvbGxWaWV3LnggPSAtMTQ2O1xyXG4gICAgU2Nyb2xsVmlldy55ID0gLTI5O1xyXG4gICAgXHJcblxyXG4gICAgdmlldy53aWR0aCA9IDE2MDtcclxuICAgIHZpZXcuaGVpZ2h0ID0gNzUwO1xyXG4gICAgdmlldy5hZGRDb21wb25lbnQoY2MuTWFzayk7XHJcbiAgICAvLyB2aWV3LmdldENvbXBvbmVudChjYy5NYXNrKS50eXBlID0gY2MuTWFzay5UeXBlLlJFQ1Q7XHJcbiAgICBjb250ZW50Lnk9IDM3NTtcclxuICAgIGNvbnRlbnQuYW5jaG9yWSA9IDE7XHJcbiAgICBjb250ZW50LndpZHRoID0gMTYwO1xyXG4gICAgY29udGVudC5oZWlnaHQgPSAwO1xyXG4gICAgXHJcbiAgICB2YXIgcUdhbWVtb3JlR2FtZV9tb3JlSnMgPSBtb3JlR2FtZU5vZGUuYWRkQ29tcG9uZW50KCdsaWV5b3VfcUdhbWVtb3JlR2FtZV9tb3JlJyk7XHJcbiAgICBxR2FtZW1vcmVHYW1lX21vcmVKcy5pY29uUHJlZmFiID0gbGlleW91X2ljb25fMTMwX2NpcmNsZTtcclxuICAgIHFHYW1lbW9yZUdhbWVfbW9yZUpzLmZOb2RlID0gY29udGVudDtcclxuICAgIHFHYW1lbW9yZUdhbWVfbW9yZUpzLnR5cGUgPSAyO1xyXG4gICAgYmdfMl9zaWRlLmFkZENoaWxkKGJnXzJfc2lkZTIpO1xyXG4gICAgYmdfMl9zaWRlLmFkZENoaWxkKGRyYWdvbik7XHJcbiAgICBiZ18yX3NpZGUuYWRkQ2hpbGQoZHJhZ29uXzEpO1xyXG4gICAgYmdfMl9zaWRlLmFkZENoaWxkKGRyYWdvbl8yKTtcclxuICAgIGJnXzJfc2lkZS5hZGRDaGlsZChyZWQpO1xyXG4gICAgbXlOb2RlX3NpZGUuYWRkQ2hpbGQoYmdfc2lkZSk7XHJcbiAgICBiZ19zaWRlLmFkZENoaWxkKHRpdGxlX3NpZGUpO1xyXG4gICAgYmdfc2lkZS5hZGRDaGlsZChTY3JvbGxWaWV3KTtcclxuICAgIFNjcm9sbFZpZXcuYWRkQ2hpbGQodmlldyk7XHJcbiAgICB2aWV3LmFkZENoaWxkKGNvbnRlbnQpO1xyXG4gICAgbXlOb2RlX3NpZGUuYWRkQ2hpbGQoYmdfYXJyb3dfc2lkZSk7XHJcbiAgICBtb3JlR2FtZU5vZGUuYWRkQ2hpbGQoYmdfMl9zaWRlKTtcclxuICAgIG1vcmVHYW1lTm9kZS5hZGRDaGlsZChteU5vZGVfc2lkZSk7XHJcblxyXG4gICAgYmdfYXJyb3dfc2lkZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICBxR2FtZW1vcmVHYW1lX21vcmVKcy5jYWxsQmFja0hpZGVTaWRlKCk7XHJcbiAgICB9LCApO1xyXG4gICAgU2Nyb2xsVmlldy5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuY29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICBTY3JvbGxWaWV3LmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS5ob3Jpem9udGFsID0gZmFsc2U7XHJcbiAgICBTY3JvbGxWaWV3LmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KS52ZXJ0aWNhbCA9IHRydWU7XHJcbiAgICByZXR1cm4gbW9yZUdhbWVOb2RlO1xyXG59XHJcbiJdfQ==