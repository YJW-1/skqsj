"use strict";
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