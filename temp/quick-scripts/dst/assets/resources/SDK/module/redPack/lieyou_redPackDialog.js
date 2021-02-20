
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/module/redPack/lieyou_redPackDialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '976acRVxLlJf50Z3Bazgl6c', 'lieyou_redPackDialog');
// resources/SDK/module/redPack/lieyou_redPackDialog.js

"use strict";

var loadRes = function loadRes(node, url) {
  lieyou_load(url, function (err, texture) {
    node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  });
};

var getNode = function getNode() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var loadSuccess = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var node = new cc.Node();

  if (url != "") {
    if (!node.getComponent(cc.Sprite)) {
      node.addComponent(cc.Sprite);
    }

    lieyou_load(url, function (err, texture) {
      node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);

      if (loadSuccess) {
        loadSuccess();
      }
    });
  }

  return node;
};

var getLabel = function getLabel() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var node = getNode();
  var label = node.addComponent(cc.Label);
  obj.string != undefined && (label.string = obj.string);
  obj.fontSize && (label.fontSize = obj.fontSize, label.lineHeight = obj.fontSize);
  obj.color && (node.color = obj.color);
  return node;
};

var winSize = cc.winSize;
var color_grey = cc.color(36, 36, 36); //显示红包页面

window.lieyou_showRedPackDialog = function () {
  var node = getNode();
  var bg = getNode("redPack/black.png");
  bg.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  bg.width = winSize.width;
  bg.height = winSize.height;
  bg.opacity = 150;
  bg.addComponent(cc.BlockInputEvents);
  var redNode = getNode();
  var redBg = getNode("redPack/redPack_bg.png");
  var redvideo = getNode("redPack/redPack_video.png");
  var redClose = getNode("redPack/redPack_close.png");
  redvideo.y = -150;
  redClose.y = -500;
  redNode.addChild(redBg);
  redNode.addChild(redvideo);
  redNode.addChild(redClose);
  redNode.y = 100;
  node.addChild(bg);
  node.addChild(redNode);
  redClose.addComponent(cc.Button);
  redClose.on("click", function () {
    node.destroy();
  }, this);
  redvideo.addComponent(cc.Button);
  redvideo.on("click", function () {
    lieyou_showReceiveRedDialog({
      type: 2
    });
    node.destroy();
  }, this);
  redNode.scale = lieyou_SdkManager._SceneScale;
  node.x = winSize.width / 2;
  node.y = winSize.height / 2;
  cc.director.getScene().addChild(node);
}; //显示获得红包页面


window.lieyou_showReceiveRedDialog = function () {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var type = obj.type;
  var node = getNode();
  var bg = getNode("redPack/black.png");
  bg.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  bg.width = winSize.width;
  bg.height = winSize.height;
  bg.opacity = 150;
  bg.addComponent(cc.BlockInputEvents);
  var redNode = getNode();
  var redBg = getNode("redPack/receive_bg.png");
  var redClose = getNode("redPack/receive_close.png");
  var redDouble = getNode("redPack/receive_double.png");
  var redTixian = getNode("redPack/receive_tixian.png");
  var receiveMoneyNum = 0.1;

  if (type == 1) {
    redTixian.active = false;
    receiveMoneyNum = Math.floor(Math.random() * 40 + 10) / 100;
  } else if (type == 2) {
    redDouble.active = false;
    receiveMoneyNum = Math.floor(Math.random() * 50 + 50) / 100;
  }

  var allM = lieyou_Userdefault.getFloatForKey("lieyou_redPackMoney", 0);
  var allMoneyNum = receiveMoneyNum + allM;
  lieyou_Userdefault.setDataForKey("lieyou_redPackMoney", allMoneyNum);
  var receiveMoney = getLabel({
    string: receiveMoneyNum + "元",
    fontSize: 50,
    color: cc.color(223, 83, 52)
  });
  var allMoney = getLabel({
    string: allMoneyNum + "元",
    fontSize: 30,
    color: cc.color(244, 136, 85)
  });
  redClose.y = -340;
  redDouble.y = -260;
  redTixian.y = -260;
  receiveMoney.y = -80;
  allMoney.x = 50;
  allMoney.y = -155;
  redNode.addChild(redBg);
  redNode.addChild(redClose);
  redNode.addChild(redDouble);
  redNode.addChild(redTixian);
  redNode.addChild(receiveMoney);
  redNode.addChild(allMoney);
  var nativeNode = getNode();
  node.addChild(bg);
  node.addChild(redNode);
  node.addChild(nativeNode);
  var nativeNodeBg = getNode('redPack/whiteBg.png');
  nativeNodeBg.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  nativeNodeBg.width = 600;
  nativeNodeBg.height = 400;
  nativeNode.addChild(nativeNodeBg);

  if (1 || winSize.height > winSize.width && lieyou_SdkManager.showNativeAd_big({
    node: nativeNode,
    bgPath: "null"
  })) {
    redNode.y = 300;
  } else {
    nativeNode.active = false;
  }

  nativeNode.y = -300;
  redClose.addComponent(cc.Button);
  redClose.on("click", function () {
    node.destroy();
  }, this);
  redDouble.addComponent(cc.Button);
  redDouble.on("click", function () {
    receiveMoney.getComponent(cc.Label).string = receiveMoneyNum * 2 + "元";
    allMoney.getComponent(cc.Label).string = allMoneyNum + receiveMoneyNum + "元";
    lieyou_Userdefault.setDataForKey("lieyou_redPackMoney", allMoneyNum + receiveMoneyNum);
    redDouble.active = false;
    redTixian.active = true;
  }, this);
  redTixian.addComponent(cc.Button);
  redTixian.on("click", function () {
    lieyou_showCashDialog();
    node.destroy();
  }, this);
  redNode.scale = lieyou_SdkManager._SceneScale;
  node.x = winSize.width / 2;
  node.y = winSize.height / 2;
  cc.director.getScene().addChild(node);
}; //显示提现页面


window.lieyou_showTiXianDialog = function () {
  var _this = this;

  var node = getNode();
  var bg = getNode("redPack/whiteBg.png");
  bg.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  bg.width = winSize.width;
  bg.height = winSize.height; // bg.opacity = 150;

  bg.addComponent(cc.BlockInputEvents);
  var myNode = getNode(); // myNode.y = winSize.height / 2;

  var myNodeScroll = getNode();
  myNodeScroll.addComponent(cc.ScrollView);
  myNodeScroll.addChild(myNode);
  myNodeScroll.getComponent(cc.ScrollView).content = myNode;
  myNodeScroll.width = winSize.width;
  myNodeScroll.height = winSize.height;
  myNodeScroll.x = winSize.width / 2;
  myNodeScroll.y = winSize.height / 2;
  myNodeScroll.anchorY = 1;
  myNode.anchorY = 1;
  myNode.height = 1500;
  var tiXianTitle = getNode("redPack/tiXian_redBg.png");
  var tiXianBack = getNode("redPack/set_Back.png");
  tiXianTitle.anchorY = 1;
  tiXianBack.x = -320;
  tiXianBack.y = -50;
  myNode.addChild(tiXianTitle);
  myNode.addChild(tiXianBack);
  var moneyNum = lieyou_Userdefault.getFloatForKey("lieyou_redPackMoney", 0);
  var moneyNumL = getLabel({
    string: "￥" + moneyNum,
    color: cc.Color.WHITE,
    fontSize: 70
  });
  tiXianTitle.addChild(moneyNumL);
  moneyNumL.x = -60;
  moneyNumL.y = -210;
  moneyNumL.anchorX = 0;
  var tiXianWX = getNode("redPack/tiXian_wx.png");
  var tiXianId = getNode("redPack/money_head.png");
  var tiXianTXFSL = getLabel({
    string: "提现方式：",
    color: color_grey,
    fontSize: 30
  });
  var tiXianSKZHL = getLabel({
    string: "收款账户：",
    color: color_grey,
    fontSize: 30
  });
  var tiXianWXL = getLabel({
    string: "微信",
    color: color_grey,
    fontSize: 30
  });
  var tiXianIdL = getLabel({
    string: "昵称",
    color: color_grey,
    fontSize: 30
  });
  tiXianTXFSL.anchorX = 0;
  tiXianSKZHL.anchorX = 0;
  tiXianWXL.anchorX = 1;
  tiXianIdL.anchorX = 1;
  myNode.addChild(tiXianTXFSL);
  myNode.addChild(tiXianSKZHL);
  myNode.addChild(tiXianWX);
  myNode.addChild(tiXianId);
  myNode.addChild(tiXianWXL);
  myNode.addChild(tiXianIdL);
  tiXianId.scale = 0.5;
  tiXianTXFSL.x = -300;
  tiXianTXFSL.y = -320;
  tiXianSKZHL.x = tiXianTXFSL.x;
  tiXianSKZHL.y = tiXianTXFSL.y - 60;
  tiXianWX.x = 280;
  tiXianWX.y = tiXianTXFSL.y;
  tiXianId.x = tiXianWX.x;
  tiXianId.y = tiXianSKZHL.y;
  tiXianWXL.x = tiXianWX.x - 50;
  tiXianWXL.y = tiXianTXFSL.y;
  tiXianIdL.x = tiXianWXL.x;
  tiXianIdL.y = tiXianSKZHL.y;
  var tiXianredBg = getNode("redPack/set_line_1.png");
  tiXianredBg.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  tiXianredBg.width = 720;
  tiXianredBg.height = 50;
  myNode.addChild(tiXianredBg);
  tiXianredBg.y = -450;
  var tiXianRed = getNode("redPack/invite_redPoint.png");
  tiXianredBg.addChild(tiXianRed);
  tiXianRed.x = -300;
  var tiXianRedL = getLabel({
    string: "微信号一旦绑定，不可解绑，将体现到此账号",
    fontSize: 25,
    color: color_grey
  });
  tiXianredBg.addChild(tiXianRedL);
  tiXianRedL.anchorX = 0;
  tiXianRedL.x = -280;
  var tiXianJinEL = getLabel({
    string: "提现金额",
    fontSize: 30,
    color: color_grey
  });
  myNode.addChild(tiXianJinEL);
  tiXianJinEL.anchorX = 0;
  tiXianJinEL.x = -300;
  tiXianJinEL.y = -510;
  var tiXianTiaojianL_1 = getLabel({
    string: "连续活跃5天即可提现。",
    fontSize: 22,
    color: color_grey
  });
  var tiXianTiaojianL_2 = getLabel({
    string: "（当天领取10个过关红包视为活跃）",
    fontSize: 22,
    color: cc.color(255, 113, 58)
  });
  var tiXianMongyNum = [1, 5, 15, 30, 100, 150];
  var nowTiXianBtnIndex = 1;

  var _loop = function _loop(i) {
    tiXainBtn = getNode("redPack/tiXian_" + i + "_" + (i == 1 ? 1 : 0) + ".png");
    myNode.addChild(tiXainBtn);
    tiXainBtn.x = (i - 1) % 2 ? 170 : -170;
    tiXainBtn.y = -580 - Math.floor((i - 1) / 2) * 90;
    tiXainBtn.name = "tixianBtn_" + i;
    tiXainBtn.addComponent(cc.Button);
    tiXainBtn.on("click", function () {
      console.log(i + "  " + tiXianMongyNum[i - 1]);
      loadRes(myNode.getChildByName("tixianBtn_" + nowTiXianBtnIndex), "redPack/tiXian_" + nowTiXianBtnIndex + "_0.png");
      loadRes(myNode.getChildByName("tixianBtn_" + i), "redPack/tiXian_" + i + "_1.png");
      nowTiXianBtnIndex = i;
    }, _this);
  };

  for (var i = 1; i <= 6; i++) {
    var tiXainBtn;

    _loop(i);
  }

  var tiXianTiaoJianL = getLabel({
    string: "提现条件",
    fontSize: 30,
    color: color_grey
  });
  myNode.addChild(tiXianTiaoJianL);
  tiXianTiaoJianL.anchorX = 0;
  tiXianTiaoJianL.x = -300;
  tiXianTiaoJianL.y = -830;
  tiXianTiaojianL_1.anchorX = 0;
  tiXianTiaojianL_2.anchorX = 0;
  myNode.addChild(tiXianTiaojianL_1);
  myNode.addChild(tiXianTiaojianL_2);
  tiXianTiaojianL_1.x = -300;
  tiXianTiaojianL_2.x = -80;
  tiXianTiaojianL_1.y = -870;
  tiXianTiaojianL_2.y = tiXianTiaojianL_1.y;
  var tiXianJunDuNode = getNode();
  myNode.addChild(tiXianJunDuNode);
  tiXianJunDuNode.y = -940;
  var tiXianJunDuIcon = getNode("redPack/tiXian_junDuIcon.png");
  tiXianJunDuNode.addChild(tiXianJunDuIcon);
  var tiXianJunDuOver = getNode("redPack/tiXian_noOver.png");
  tiXianJunDuNode.addChild(tiXianJunDuOver);
  tiXianJunDuIcon.x = -280;
  tiXianJunDuOver.x = 280;
  var tiXianJunDuL_3 = getLabel({
    string: "已连续活跃2天，今日已经领取0个过关红包",
    fontSize: 22,
    color: color_grey
  });
  tiXianJunDuNode.addChild(tiXianJunDuL_3);
  tiXianJunDuL_3.y = 20;
  var tiXianJunDuL_4 = getLabel({
    string: "打卡2/5",
    fontSize: 22,
    color: color_grey
  });
  tiXianJunDuNode.addChild(tiXianJunDuL_4);
  tiXianJunDuL_4.x = 150;
  tiXianJunDuL_4.y = -20;
  var tiXianJunDuTiao_0 = getNode("redPack/tiXian_jindu0.png");
  tiXianJunDuNode.addChild(tiXianJunDuTiao_0);
  tiXianJunDuTiao_0.x = -50;
  tiXianJunDuTiao_0.y = -20;
  var tiXianJunDuTiao_1 = getNode("redPack/tiXian_jindu1.png");
  tiXianJunDuTiao_0.addChild(tiXianJunDuTiao_1);
  tiXianJunDuTiao_1.getComponent(cc.Sprite).type = cc.Sprite.Type.FILLED;
  tiXianJunDuTiao_1.getComponent(cc.Sprite).fillRange = 2 / 5;
  var tiXianredBg2 = getNode("redPack/set_line_1.png");
  tiXianredBg2.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  tiXianredBg2.width = 720;
  tiXianredBg2.height = 20;
  myNode.addChild(tiXianredBg2);
  tiXianredBg2.y = -1000;
  var tiXianJunDuL_5 = getLabel({
    fontSize: 22,
    color: color_grey,
    string: "提现说明\n1.由于微信支付需要实名制，非实名用户账户无法支持提现，请务必\n将提现的微信号进行实名认证\n2.提现申请将在7个工作日内审核，审核通过即可到账，请耐心等待\n3.每日可申请提现一次，若当日限额已满，请次日申请\n4.新人专享福利每个账号尽可享受一次\n5.更多提现详情请见《用户协议》"
  });
  tiXianJunDuL_5.getComponent(cc.Label).lineHeight = 30;
  myNode.addChild(tiXianJunDuL_5);
  tiXianJunDuL_5.y = -1130;
  var tiXianredBg3 = getNode("redPack/set_line_1.png");
  tiXianredBg3.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  tiXianredBg3.width = 720;
  tiXianredBg3.height = 200;
  myNode.addChild(tiXianredBg3);
  tiXianredBg3.y = -1400;
  var tiXianYiYuedi = getLabel({
    string: "我已阅读，理解并同意爱上消消乐",
    fontSize: 22,
    color: color_grey
  });
  tiXianredBg3.addChild(tiXianYiYuedi);
  tiXianYiYuedi.y = 40;
  var tiXianYiYuedi2 = getLabel({
    string: "结算协议",
    fontSize: 22,
    color: cc.color(234, 82, 71)
  });
  tiXianredBg3.addChild(tiXianYiYuedi2);
  tiXianYiYuedi2.x = 220;
  tiXianYiYuedi2.y = tiXianYiYuedi.y;
  var tiXianYiYuediGD = getNode("redPack/tiXian_quanBg.png");
  tiXianredBg3.addChild(tiXianYiYuediGD);
  tiXianYiYuediGD.x = -200;
  tiXianYiYuediGD.y = 40;
  var tiXianYiYuediGv = getNode("redPack/tiXian_quanG.png");
  tiXianYiYuediGD.addChild(tiXianYiYuediGv);
  tiXianYiYuediGv.active = false;
  var tiXianBtn = getNode("redPack/tiXian_btn.png");
  tiXianredBg3.addChild(tiXianBtn);
  tiXianBtn.y = -30;
  tiXianYiYuediGD.addComponent(cc.Button);
  tiXianYiYuediGD.on("click", function () {
    tiXianYiYuediGv.active = !tiXianYiYuediGv.active;
  }, this);
  tiXianBtn.addComponent(cc.Button);
  tiXianBtn.on("click", function () {
    if (tiXianYiYuediGv.active) {
      console.log("touch : " + nowTiXianBtnIndex);
    }
  }, this);
  tiXianBack.addComponent(cc.Button);
  tiXianBack.on("click", function () {
    node.destroy();
  }, this);
  node.addChild(bg);
  node.addChild(myNodeScroll); // myNode.height = 1500;

  myNode.scale = lieyou_SdkManager._SceneScale;
  node.x = winSize.width / 2;
  node.y = winSize.height / 2;
  cc.director.getScene().addChild(node);
}; //显示邀请好友页面


window.lieyou_showInviteDialog = function () {
  var _this2 = this;

  var node = getNode();
  var bg = getNode("redPack/whiteBg.png");
  bg.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  bg.width = winSize.width;
  bg.height = winSize.height; // bg.opacity = 150;

  bg.addComponent(cc.BlockInputEvents);
  var myNode = getNode();
  myNode.y = winSize.height / 2;
  var inviteTitle = getNode("redPack/invite_title.png");
  var inviteBack = getNode("redPack/set_Back.png");
  var inviteImage = getNode("redPack/invite_image.png", function () {
    inviteImage.getComponent(cc.Sprite).spriteFrame.insetTop = 650;
    inviteImage.getComponent(cc.Sprite).spriteFrame.insetBottom = 0;
    inviteImage.getComponent(cc.Sprite).spriteFrame.insetLeft = 0;
    inviteImage.getComponent(cc.Sprite).spriteFrame.insetRight = 0;
    inviteImage.getComponent(cc.Sprite).type = cc.Sprite.Type.SLICED;
    inviteImage.height = 1280;
  });
  inviteTitle.anchorY = 1;
  inviteImage.anchorY = 1;
  inviteBack.x = -320;
  inviteBack.y = -50;
  inviteImage.y = -97;
  myNode.addChild(inviteTitle);
  myNode.addChild(inviteBack);
  myNode.addChild(inviteImage);
  var inviteCode = "fdsf5fdafdsafsafsafsdafdsafdsfdsafdsafsdafsafsdafdsafdsafsdafdsafdsafsdafa";
  var inviteUrl = "http://testfhdkasfhdsa.fdsahfkldsahfwe.fdsakhfwelkh";
  var btnName = ["微信分享", "邀请码：" + inviteCode, "邀请链接：" + inviteUrl];
  var btnLength = btnName.length;
  var btnBeginPosY = -820;

  var _loop2 = function _loop2() {
    btnNodeBg = getNode("redPack/invite_Bg2.png");
    myNode.addChild(btnNodeBg);
    btnNodeBg.y = btnBeginPosY;
    btnBeginPosY -= 130;
    var btnNode = getNode(i == 0 ? "redPack/invite_wx.png" : "redPack/invite_copy.png");
    btnNodeBg.addChild(btnNode);
    btnNode.x = 250;
    btnLabel = getLabel({
      color: color_grey,
      fontSize: 25,
      string: btnName[i]
    });
    btnNodeBg.addChild(btnLabel);
    btnLabel.width = 480;
    btnLabel.x = -60;
    btnLabel.getComponent(cc.Label).overflow = cc.Label.Overflow.RESIZE_HEIGHT;
    btnNode.btnTag = i;
    btnNode.addComponent(cc.Button);
    btnNode.on("click", function () {
      switch (btnNode.btnTag) {
        case 0:
          console.log("分享微信");
          break;

        case 1:
          console.log(inviteCode);
          break;

        case 2:
          console.log(inviteUrl);
          break;
      }
    }, _this2);
  };

  for (var i = 0; i < btnLength; i++) {
    var btnNodeBg;
    var btnLabel;

    _loop2();
  }

  var shuoMing = getNode();
  myNode.addChild(shuoMing);
  shuoMing.y = -1200;
  var shuoMingL = getLabel({
    color: color_grey,
    fontSize: 25,
    string: "规则说明：将下载链接和邀请码发送给您的好友，邀请他们下载游戏后并输入您的邀请码，点击确认即可。(安卓和苹果用户不能够互相邀请)"
  });
  shuoMing.addChild(shuoMingL);
  shuoMingL.width = 550;
  shuoMingL.getComponent(cc.Label).overflow = cc.Label.Overflow.RESIZE_HEIGHT;
  var shuoMingRed = getNode("redPack/invite_redPoint.png");
  shuoMing.addChild(shuoMingRed);
  shuoMingRed.x = -300;
  node.addChild(bg);
  node.addChild(myNode);
  inviteBack.addComponent(cc.Button);
  inviteBack.on("click", function () {
    node.destroy();
  }, this);
  myNode.scale = lieyou_SdkManager._SceneScale;
  node.x = winSize.width / 2;
  node.y = winSize.height / 2;
  cc.director.getScene().addChild(node);
}; //显示设置页面


window.lieyou_showSetingDialog = function () {
  var _this3 = this;

  var node = getNode();
  var bg = getNode("redPack/whiteBg.png");
  bg.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  bg.width = winSize.width;
  bg.height = winSize.height; // bg.opacity = 150;

  bg.addComponent(cc.BlockInputEvents);
  var myNode = getNode();
  myNode.y = winSize.height / 2;
  var setTitle = getNode("redPack/set_title.png");
  var setBack = getNode("redPack/set_Back.png");
  setTitle.anchorY = 1;
  setBack.x = -320;
  setBack.y = -50;
  myNode.addChild(setTitle);
  myNode.addChild(setBack);
  var btnName = ["用户协议", "隐私政策", "注销账户", "联系反馈", "当前版本"];
  var btnLength = btnName.length;
  var begPosY = -300;

  for (var i = 0; i < btnLength; i++) {
    var lineNode = getNode(btnLength - 1 == i ? "" : "redPack/set_line_2.png");
    lineNode.y = begPosY;
    begPosY -= 80;
    myNode.addChild(lineNode);
    var btnNameL = getLabel({
      color: color_grey,
      string: btnName[i],
      fontSize: 30
    });
    lineNode.addChild(btnNameL);
    btnNameL.x = -260;
    btnNameL.y = 30;

    if (btnLength - 1 == i) {
      var version = getLabel({
        color: color_grey,
        string: "4.2.4",
        fontSize: 30
      });
      lineNode.addChild(version);
      version.x = 260;
      version.y = 30;
    } else {
      (function () {
        var btnNode = getNode("redPack/set_btn.png");
        lineNode.addChild(btnNode);
        btnNode.x = 260;
        btnNode.y = 30;
        btnNode.btnTag = i;
        btnNode.addComponent(cc.Button);
        btnNode.on("click", function () {
          switch (btnNode.btnTag) {
            case 0:
              console.log("用户协议");
              break;

            case 1:
              console.log("隐私政策");
              break;

            case 2:
              console.log("注销账户");
              break;

            case 3:
              console.log("联系反馈");
              break;
          }
        }, _this3);
      })();
    }
  }

  setBack.addComponent(cc.Button);
  setBack.on("click", function () {
    node.destroy();
  }, this);
  node.addChild(bg);
  node.addChild(myNode);
  myNode.scale = lieyou_SdkManager._SceneScale;
  node.x = winSize.width / 2;
  node.y = winSize.height / 2;
  cc.director.getScene().addChild(node);
}; //显示红包余额页面


window.lieyou_showCashDialog = function () {
  var node = getNode();
  var bg = getNode("redPack/whiteBg.png");
  bg.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  bg.width = winSize.width;
  bg.height = winSize.height; // bg.opacity = 150;

  bg.addComponent(cc.BlockInputEvents);
  var nativeNode = getNode();
  var redNode = getNode();
  var redBg = getNode("redPack/money_num.png");
  var redTx = getNode("redPack/money_tx.png");
  var redInvite = getNode("redPack/money_invite.png");
  var redSet = getNode("redPack/money_set.png");
  var allM = lieyou_Userdefault.getFloatForKey("lieyou_redPackMoney", 0);
  var moneyLabel = getLabel({
    string: allM,
    fontSize: 80
  });
  var moneyBack = getNode("redPack/money_back.png");
  var moneyHead = getNode("redPack/money_head.png");
  var moneyName = getLabel({
    string: "昵称",
    color: color_grey,
    fontSize: 30
  });
  var moneyId = "4568131";
  var moneyChack = "df5dfae8fa";
  var moneyIdL = getLabel({
    string: "ID:" + moneyId,
    color: color_grey,
    fontSize: 20
  });
  var moneyChackL = getLabel({
    string: "邀请码:" + moneyChack,
    color: color_grey,
    fontSize: 20
  });
  var moneyIdCopy = getNode("redPack/money_copy.png");
  var moneyChackCopy = getNode("redPack/money_copy.png");
  var moneyChackBtn = getNode("redPack/money_chack.png");
  moneyBack.x = -320;
  moneyBack.y = 250;
  moneyHead.x = -220;
  moneyHead.y = moneyBack.y;
  moneyChackBtn.x = 360;
  moneyChackBtn.y = moneyBack.y;
  moneyName.x = 80;
  moneyName.y = 30;
  moneyIdL.x = moneyName.x;
  moneyIdL.y = -10;
  moneyChackL.x = moneyName.x;
  moneyChackL.y = -50;
  moneyIdCopy.x = 350;
  moneyIdCopy.y = moneyIdL.y;
  moneyChackCopy.x = moneyIdCopy.x;
  moneyChackCopy.y = moneyChackL.y;
  moneyName.anchorX = 0;
  moneyIdL.anchorX = 0;
  moneyChackL.anchorX = 0;
  moneyChackBtn.anchorX = 1;
  moneyLabel.x = 60;
  moneyLabel.y = -30;
  redNode.addChild(redBg);
  redNode.addChild(redTx);
  redNode.addChild(redInvite);
  redNode.addChild(redSet);
  redNode.addChild(moneyLabel);
  redNode.addChild(moneyHead);
  moneyHead.addChild(moneyName);
  moneyHead.addChild(moneyIdL);
  moneyHead.addChild(moneyChackL);
  moneyHead.addChild(moneyIdCopy);
  moneyHead.addChild(moneyChackCopy);
  redNode.addChild(moneyChackBtn);
  redNode.addChild(moneyBack);
  redTx.x = -180;
  redTx.y = -230;
  redInvite.y = -230;
  redSet.x = 180;
  redSet.y = -230;
  node.addChild(bg);
  node.addChild(redNode);
  node.addChild(nativeNode);
  var nativeNodeBg = getNode('redPack/black.png');
  nativeNodeBg.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  nativeNodeBg.width = 600;
  nativeNodeBg.height = 400;
  nativeNode.addChild(nativeNodeBg);
  nativeNodeBg.opacity = 150;

  if (1 || winSize.height > winSize.width && lieyou_SdkManager.showNativeAd_big({
    node: nativeNode,
    bgPath: "null"
  })) {
    redNode.y = 300;
  } else {
    nativeNode.active = false;
  }

  nativeNode.y = -300;
  moneyBack.addComponent(cc.Button);
  moneyBack.on("click", function () {
    node.destroy();
  }, this);
  moneyIdCopy.addComponent(cc.Button);
  moneyIdCopy.on("click", function () {
    console.log(moneyId);
  }, this);
  moneyChackCopy.addComponent(cc.Button);
  moneyChackCopy.on("click", function () {
    console.log(moneyChack);
  }, this);
  moneyChackBtn.addComponent(cc.Button);
  moneyChackBtn.on("click", function () {
    lieyou_showChackDialog();
  }, this);
  redBg.addComponent(cc.Button);
  redBg.on("click", function () {
    lieyou_showTiXianDialog();
  }, this);
  redTx.addComponent(cc.Button);
  redTx.on("click", function () {
    lieyou_showTiXianDialog();
  }, this);
  redInvite.addComponent(cc.Button);
  redInvite.on("click", function () {
    lieyou_showInviteDialog();
  }, this);
  redSet.addComponent(cc.Button);
  redSet.on("click", function () {
    lieyou_showSetingDialog();
  }, this);
  redNode.scale = lieyou_SdkManager._SceneScale;
  node.x = winSize.width / 2;
  node.y = winSize.height / 2;
  cc.director.getScene().addChild(node);
}; //显示兑换码页面


window.lieyou_showChackDialog = function () {
  var node = getNode();
  var bg = getNode("redPack/black.png");
  bg.getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.CUSTOM;
  bg.width = winSize.width;
  bg.height = winSize.height;
  bg.opacity = 150;
  bg.addComponent(cc.BlockInputEvents);
  var chack = getNode();
  var chackBg = getNode("redPack/chack_bg.png");
  var chackEdit = getNode();
  var chackOk = getNode("redPack/chack_ok.png");
  chackEdit.y = -20;
  chackOk.y = -130;
  chack.addChild(chackBg);
  chack.addChild(chackEdit);
  chack.addChild(chackOk);
  var chackEditSprite = getNode("redPack/chack_edit.png");
  var chackEditLabel = getLabel({
    color: color_grey,
    fontSize: 60
  });
  chackEditLabel.getComponent(cc.Label).overflow = cc.Label.Overflow.CLAMP;
  chackEditLabel.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER;
  chackEditLabel.getComponent(cc.Label).verticalAlign = cc.Label.VerticalAlign.CENTER;
  chackEdit.addChild(chackEditSprite);
  chackEdit.addChild(chackEditLabel);
  chackEdit.width = 525;
  chackEdit.height = 73;
  chackEditLabel.width = chackEdit.width;
  chackEditLabel.height = chackEdit.height;
  chackEditLabel.anchorX = 0;
  chackEditLabel.anchorX = 1;
  chackEditLabel.x = -chackEdit.width / 2;
  chackEditLabel.y = chackEdit.height / 2;
  chackEdit.addComponent(cc.EditBox);
  chackEdit.getComponent(cc.EditBox).maxLength = 15;
  chackEdit.getComponent(cc.EditBox).inputMode = cc.EditBox.InputMode.SINGLE_LINE;
  chackEdit.getComponent(cc.EditBox).background = chackEditSprite.getComponent(cc.Sprite);
  chackEdit.getComponent(cc.EditBox).textLabel = chackEditLabel.getComponent(cc.Label);
  chackOk.addComponent(cc.Button);
  chackOk.on("click", function () {
    console.log("提交:" + chackEdit.getComponent(cc.EditBox).string);
  }, this);
  bg.addComponent(cc.Button);
  bg.on("click", function () {
    node.destroy();
  }, this);
  node.addChild(bg);
  node.addChild(chack);
  chack.scale = lieyou_SdkManager._SceneScale;
  node.x = winSize.width / 2;
  node.y = winSize.height / 2;
  cc.director.getScene().addChild(node);
}; //获取红包按钮


window.lieyou_getRedPackIcon = function () {
  var node = getNode();
  var redIcon = getNode("redPack/redPackIcon.png");
  var paopao = getNode("redPack/paopao.png");
  node.addChild(redIcon);
  node.addChild(paopao);
  node.runAction(cc.repeatForever(cc.spawn(cc.sequence(cc.scaleTo(0.5, 1.1, 1), cc.scaleTo(0.5, 0.9, 1)), cc.sequence(cc.rotateTo(0.5, -30), cc.rotateTo(0.5, 0)))));
  node.width = 150;
  node.height = 150;
  node.addComponent(cc.Button);
  node.on("click", function () {
    lieyou_showReceiveRedDialog({
      type: 1
    });
    node.destroy();
  }, this);
  return node;
}; //获取提现按钮


window.lieyou_getCaskIcon = function () {
  var node = getNode("redPack/cash_icon.png");
  node.addComponent(cc.Button);
  node.on("click", function () {
    lieyou_showCashDialog(); // node.destroy();
  }, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXG1vZHVsZVxccmVkUGFja1xcbGlleW91X3JlZFBhY2tEaWFsb2cuanMiXSwibmFtZXMiOlsibG9hZFJlcyIsIm5vZGUiLCJ1cmwiLCJsaWV5b3VfbG9hZCIsImVyciIsInRleHR1cmUiLCJnZXRDb21wb25lbnQiLCJjYyIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJnZXROb2RlIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwibG9hZFN1Y2Nlc3MiLCJOb2RlIiwiYWRkQ29tcG9uZW50IiwiZ2V0TGFiZWwiLCJvYmoiLCJsYWJlbCIsIkxhYmVsIiwic3RyaW5nIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiY29sb3IiLCJ3aW5TaXplIiwiY29sb3JfZ3JleSIsIndpbmRvdyIsImxpZXlvdV9zaG93UmVkUGFja0RpYWxvZyIsImJnIiwic2l6ZU1vZGUiLCJTaXplTW9kZSIsIkNVU1RPTSIsIndpZHRoIiwiaGVpZ2h0Iiwib3BhY2l0eSIsIkJsb2NrSW5wdXRFdmVudHMiLCJyZWROb2RlIiwicmVkQmciLCJyZWR2aWRlbyIsInJlZENsb3NlIiwieSIsImFkZENoaWxkIiwiQnV0dG9uIiwib24iLCJkZXN0cm95IiwibGlleW91X3Nob3dSZWNlaXZlUmVkRGlhbG9nIiwidHlwZSIsInNjYWxlIiwibGlleW91X1Nka01hbmFnZXIiLCJfU2NlbmVTY2FsZSIsIngiLCJkaXJlY3RvciIsImdldFNjZW5lIiwicmVkRG91YmxlIiwicmVkVGl4aWFuIiwicmVjZWl2ZU1vbmV5TnVtIiwiYWN0aXZlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiYWxsTSIsImxpZXlvdV9Vc2VyZGVmYXVsdCIsImdldEZsb2F0Rm9yS2V5IiwiYWxsTW9uZXlOdW0iLCJzZXREYXRhRm9yS2V5IiwicmVjZWl2ZU1vbmV5IiwiYWxsTW9uZXkiLCJuYXRpdmVOb2RlIiwibmF0aXZlTm9kZUJnIiwic2hvd05hdGl2ZUFkX2JpZyIsImJnUGF0aCIsImxpZXlvdV9zaG93Q2FzaERpYWxvZyIsImxpZXlvdV9zaG93VGlYaWFuRGlhbG9nIiwiX3RoaXMiLCJteU5vZGUiLCJteU5vZGVTY3JvbGwiLCJTY3JvbGxWaWV3IiwiY29udGVudCIsImFuY2hvclkiLCJ0aVhpYW5UaXRsZSIsInRpWGlhbkJhY2siLCJtb25leU51bSIsIm1vbmV5TnVtTCIsIkNvbG9yIiwiV0hJVEUiLCJhbmNob3JYIiwidGlYaWFuV1giLCJ0aVhpYW5JZCIsInRpWGlhblRYRlNMIiwidGlYaWFuU0taSEwiLCJ0aVhpYW5XWEwiLCJ0aVhpYW5JZEwiLCJ0aVhpYW5yZWRCZyIsInRpWGlhblJlZCIsInRpWGlhblJlZEwiLCJ0aVhpYW5KaW5FTCIsInRpWGlhblRpYW9qaWFuTF8xIiwidGlYaWFuVGlhb2ppYW5MXzIiLCJ0aVhpYW5Nb25neU51bSIsIm5vd1RpWGlhbkJ0bkluZGV4IiwiX2xvb3AiLCJpIiwidGlYYWluQnRuIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRDaGlsZEJ5TmFtZSIsInRpWGlhblRpYW9KaWFuTCIsInRpWGlhbkp1bkR1Tm9kZSIsInRpWGlhbkp1bkR1SWNvbiIsInRpWGlhbkp1bkR1T3ZlciIsInRpWGlhbkp1bkR1TF8zIiwidGlYaWFuSnVuRHVMXzQiLCJ0aVhpYW5KdW5EdVRpYW9fMCIsInRpWGlhbkp1bkR1VGlhb18xIiwiVHlwZSIsIkZJTExFRCIsImZpbGxSYW5nZSIsInRpWGlhbnJlZEJnMiIsInRpWGlhbkp1bkR1TF81IiwidGlYaWFucmVkQmczIiwidGlYaWFuWWlZdWVkaSIsInRpWGlhbllpWXVlZGkyIiwidGlYaWFuWWlZdWVkaUdEIiwidGlYaWFuWWlZdWVkaUd2IiwidGlYaWFuQnRuIiwibGlleW91X3Nob3dJbnZpdGVEaWFsb2ciLCJfdGhpczIiLCJpbnZpdGVUaXRsZSIsImludml0ZUJhY2siLCJpbnZpdGVJbWFnZSIsImluc2V0VG9wIiwiaW5zZXRCb3R0b20iLCJpbnNldExlZnQiLCJpbnNldFJpZ2h0IiwiU0xJQ0VEIiwiaW52aXRlQ29kZSIsImludml0ZVVybCIsImJ0bk5hbWUiLCJidG5MZW5ndGgiLCJidG5CZWdpblBvc1kiLCJfbG9vcDIiLCJidG5Ob2RlQmciLCJidG5Ob2RlIiwiYnRuTGFiZWwiLCJvdmVyZmxvdyIsIk92ZXJmbG93IiwiUkVTSVpFX0hFSUdIVCIsImJ0blRhZyIsInNodW9NaW5nIiwic2h1b01pbmdMIiwic2h1b01pbmdSZWQiLCJsaWV5b3Vfc2hvd1NldGluZ0RpYWxvZyIsIl90aGlzMyIsInNldFRpdGxlIiwic2V0QmFjayIsImJlZ1Bvc1kiLCJsaW5lTm9kZSIsImJ0bk5hbWVMIiwidmVyc2lvbiIsInJlZFR4IiwicmVkSW52aXRlIiwicmVkU2V0IiwibW9uZXlMYWJlbCIsIm1vbmV5QmFjayIsIm1vbmV5SGVhZCIsIm1vbmV5TmFtZSIsIm1vbmV5SWQiLCJtb25leUNoYWNrIiwibW9uZXlJZEwiLCJtb25leUNoYWNrTCIsIm1vbmV5SWRDb3B5IiwibW9uZXlDaGFja0NvcHkiLCJtb25leUNoYWNrQnRuIiwibGlleW91X3Nob3dDaGFja0RpYWxvZyIsImNoYWNrIiwiY2hhY2tCZyIsImNoYWNrRWRpdCIsImNoYWNrT2siLCJjaGFja0VkaXRTcHJpdGUiLCJjaGFja0VkaXRMYWJlbCIsIkNMQU1QIiwiaG9yaXpvbnRhbEFsaWduIiwiSG9yaXpvbnRhbEFsaWduIiwiQ0VOVEVSIiwidmVydGljYWxBbGlnbiIsIlZlcnRpY2FsQWxpZ24iLCJFZGl0Qm94IiwibWF4TGVuZ3RoIiwiaW5wdXRNb2RlIiwiSW5wdXRNb2RlIiwiU0lOR0xFX0xJTkUiLCJiYWNrZ3JvdW5kIiwidGV4dExhYmVsIiwibGlleW91X2dldFJlZFBhY2tJY29uIiwicmVkSWNvbiIsInBhb3BhbyIsInJ1bkFjdGlvbiIsInJlcGVhdEZvcmV2ZXIiLCJzcGF3biIsInNlcXVlbmNlIiwic2NhbGVUbyIsInJvdGF0ZVRvIiwibGlleW91X2dldENhc2tJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE9BQU8sR0FBRyxTQUFTQSxPQUFULENBQWlCQyxJQUFqQixFQUF1QkMsR0FBdkIsRUFBNEI7QUFDeENDLEVBQUFBLFdBQVcsQ0FBQ0QsR0FBRCxFQUFNLFVBQVVFLEdBQVYsRUFBZUMsT0FBZixFQUF3QjtBQUN2Q0osSUFBQUEsSUFBSSxDQUFDSyxZQUFMLENBQWtCQyxFQUFFLENBQUNDLE1BQXJCLEVBQTZCQyxXQUE3QixHQUEyQyxJQUFJRixFQUFFLENBQUNHLFdBQVAsQ0FBbUJMLE9BQW5CLENBQTNDO0FBQ0QsR0FGVSxDQUFYO0FBR0QsQ0FKRDs7QUFNQSxJQUFJTSxPQUFPLEdBQUcsU0FBU0EsT0FBVCxHQUFtQjtBQUMvQixNQUFJVCxHQUFHLEdBQUdVLFNBQVMsQ0FBQ0MsTUFBVixHQUFtQixDQUFuQixJQUF3QkQsU0FBUyxDQUFDLENBQUQsQ0FBVCxLQUFpQkUsU0FBekMsR0FBcURGLFNBQVMsQ0FBQyxDQUFELENBQTlELEdBQW9FLEVBQTlFO0FBQ0EsTUFBSUcsV0FBVyxHQUFHSCxTQUFTLENBQUNDLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0JELFNBQVMsQ0FBQyxDQUFELENBQVQsS0FBaUJFLFNBQXpDLEdBQXFERixTQUFTLENBQUMsQ0FBRCxDQUE5RCxHQUFvRSxJQUF0RjtBQUNBLE1BQUlYLElBQUksR0FBRyxJQUFJTSxFQUFFLENBQUNTLElBQVAsRUFBWDs7QUFFQSxNQUFJZCxHQUFHLElBQUksRUFBWCxFQUFlO0FBQ2IsUUFBSSxDQUFDRCxJQUFJLENBQUNLLFlBQUwsQ0FBa0JDLEVBQUUsQ0FBQ0MsTUFBckIsQ0FBTCxFQUFtQztBQUNqQ1AsTUFBQUEsSUFBSSxDQUFDZ0IsWUFBTCxDQUFrQlYsRUFBRSxDQUFDQyxNQUFyQjtBQUNEOztBQUVETCxJQUFBQSxXQUFXLENBQUNELEdBQUQsRUFBTSxVQUFVRSxHQUFWLEVBQWVDLE9BQWYsRUFBd0I7QUFDdkNKLE1BQUFBLElBQUksQ0FBQ0ssWUFBTCxDQUFrQkMsRUFBRSxDQUFDQyxNQUFyQixFQUE2QkMsV0FBN0IsR0FBMkMsSUFBSUYsRUFBRSxDQUFDRyxXQUFQLENBQW1CTCxPQUFuQixDQUEzQzs7QUFFQSxVQUFJVSxXQUFKLEVBQWlCO0FBQ2ZBLFFBQUFBLFdBQVc7QUFDWjtBQUNGLEtBTlUsQ0FBWDtBQU9EOztBQUVELFNBQU9kLElBQVA7QUFDRCxDQXBCRDs7QUFzQkEsSUFBSWlCLFFBQVEsR0FBRyxTQUFTQSxRQUFULEdBQW9CO0FBQ2pDLE1BQUlDLEdBQUcsR0FBR1AsU0FBUyxDQUFDQyxNQUFWLEdBQW1CLENBQW5CLElBQXdCRCxTQUFTLENBQUMsQ0FBRCxDQUFULEtBQWlCRSxTQUF6QyxHQUFxREYsU0FBUyxDQUFDLENBQUQsQ0FBOUQsR0FBb0UsRUFBOUU7QUFDQSxNQUFJWCxJQUFJLEdBQUdVLE9BQU8sRUFBbEI7QUFDQSxNQUFJUyxLQUFLLEdBQUduQixJQUFJLENBQUNnQixZQUFMLENBQWtCVixFQUFFLENBQUNjLEtBQXJCLENBQVo7QUFDQ0YsRUFBQUEsR0FBRyxDQUFDRyxNQUFKLElBQVlSLFNBQWIsS0FBNEJNLEtBQUssQ0FBQ0UsTUFBTixHQUFlSCxHQUFHLENBQUNHLE1BQS9DO0FBQ0FILEVBQUFBLEdBQUcsQ0FBQ0ksUUFBSixLQUFpQkgsS0FBSyxDQUFDRyxRQUFOLEdBQWlCSixHQUFHLENBQUNJLFFBQXJCLEVBQStCSCxLQUFLLENBQUNJLFVBQU4sR0FBbUJMLEdBQUcsQ0FBQ0ksUUFBdkU7QUFDQUosRUFBQUEsR0FBRyxDQUFDTSxLQUFKLEtBQWN4QixJQUFJLENBQUN3QixLQUFMLEdBQWFOLEdBQUcsQ0FBQ00sS0FBL0I7QUFDQSxTQUFPeEIsSUFBUDtBQUNELENBUkQ7O0FBVUEsSUFBSXlCLE9BQU8sR0FBR25CLEVBQUUsQ0FBQ21CLE9BQWpCO0FBQ0EsSUFBSUMsVUFBVSxHQUFHcEIsRUFBRSxDQUFDa0IsS0FBSCxDQUFTLEVBQVQsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLENBQWpCLEVBQXVDOztBQUV2Q0csTUFBTSxDQUFDQyx3QkFBUCxHQUFrQyxZQUFZO0FBQzVDLE1BQUk1QixJQUFJLEdBQUdVLE9BQU8sRUFBbEI7QUFDQSxNQUFJbUIsRUFBRSxHQUFHbkIsT0FBTyxDQUFDLG1CQUFELENBQWhCO0FBQ0FtQixFQUFBQSxFQUFFLENBQUN4QixZQUFILENBQWdCQyxFQUFFLENBQUNDLE1BQW5CLEVBQTJCdUIsUUFBM0IsR0FBc0N4QixFQUFFLENBQUNDLE1BQUgsQ0FBVXdCLFFBQVYsQ0FBbUJDLE1BQXpEO0FBQ0FILEVBQUFBLEVBQUUsQ0FBQ0ksS0FBSCxHQUFXUixPQUFPLENBQUNRLEtBQW5CO0FBQ0FKLEVBQUFBLEVBQUUsQ0FBQ0ssTUFBSCxHQUFZVCxPQUFPLENBQUNTLE1BQXBCO0FBQ0FMLEVBQUFBLEVBQUUsQ0FBQ00sT0FBSCxHQUFhLEdBQWI7QUFDQU4sRUFBQUEsRUFBRSxDQUFDYixZQUFILENBQWdCVixFQUFFLENBQUM4QixnQkFBbkI7QUFDQSxNQUFJQyxPQUFPLEdBQUczQixPQUFPLEVBQXJCO0FBQ0EsTUFBSTRCLEtBQUssR0FBRzVCLE9BQU8sQ0FBQyx3QkFBRCxDQUFuQjtBQUNBLE1BQUk2QixRQUFRLEdBQUc3QixPQUFPLENBQUMsMkJBQUQsQ0FBdEI7QUFDQSxNQUFJOEIsUUFBUSxHQUFHOUIsT0FBTyxDQUFDLDJCQUFELENBQXRCO0FBQ0E2QixFQUFBQSxRQUFRLENBQUNFLENBQVQsR0FBYSxDQUFDLEdBQWQ7QUFDQUQsRUFBQUEsUUFBUSxDQUFDQyxDQUFULEdBQWEsQ0FBQyxHQUFkO0FBQ0FKLEVBQUFBLE9BQU8sQ0FBQ0ssUUFBUixDQUFpQkosS0FBakI7QUFDQUQsRUFBQUEsT0FBTyxDQUFDSyxRQUFSLENBQWlCSCxRQUFqQjtBQUNBRixFQUFBQSxPQUFPLENBQUNLLFFBQVIsQ0FBaUJGLFFBQWpCO0FBQ0FILEVBQUFBLE9BQU8sQ0FBQ0ksQ0FBUixHQUFZLEdBQVo7QUFDQXpDLEVBQUFBLElBQUksQ0FBQzBDLFFBQUwsQ0FBY2IsRUFBZDtBQUNBN0IsRUFBQUEsSUFBSSxDQUFDMEMsUUFBTCxDQUFjTCxPQUFkO0FBQ0FHLEVBQUFBLFFBQVEsQ0FBQ3hCLFlBQVQsQ0FBc0JWLEVBQUUsQ0FBQ3FDLE1BQXpCO0FBQ0FILEVBQUFBLFFBQVEsQ0FBQ0ksRUFBVCxDQUFZLE9BQVosRUFBcUIsWUFBWTtBQUMvQjVDLElBQUFBLElBQUksQ0FBQzZDLE9BQUw7QUFDRCxHQUZELEVBRUcsSUFGSDtBQUdBTixFQUFBQSxRQUFRLENBQUN2QixZQUFULENBQXNCVixFQUFFLENBQUNxQyxNQUF6QjtBQUNBSixFQUFBQSxRQUFRLENBQUNLLEVBQVQsQ0FBWSxPQUFaLEVBQXFCLFlBQVk7QUFDL0JFLElBQUFBLDJCQUEyQixDQUFDO0FBQzFCQyxNQUFBQSxJQUFJLEVBQUU7QUFEb0IsS0FBRCxDQUEzQjtBQUdBL0MsSUFBQUEsSUFBSSxDQUFDNkMsT0FBTDtBQUNELEdBTEQsRUFLRyxJQUxIO0FBTUFSLEVBQUFBLE9BQU8sQ0FBQ1csS0FBUixHQUFnQkMsaUJBQWlCLENBQUNDLFdBQWxDO0FBQ0FsRCxFQUFBQSxJQUFJLENBQUNtRCxDQUFMLEdBQVMxQixPQUFPLENBQUNRLEtBQVIsR0FBZ0IsQ0FBekI7QUFDQWpDLEVBQUFBLElBQUksQ0FBQ3lDLENBQUwsR0FBU2hCLE9BQU8sQ0FBQ1MsTUFBUixHQUFpQixDQUExQjtBQUNBNUIsRUFBQUEsRUFBRSxDQUFDOEMsUUFBSCxDQUFZQyxRQUFaLEdBQXVCWCxRQUF2QixDQUFnQzFDLElBQWhDO0FBQ0QsQ0FuQ0QsRUFtQ0c7OztBQUdIMkIsTUFBTSxDQUFDbUIsMkJBQVAsR0FBcUMsWUFBWTtBQUMvQyxNQUFJNUIsR0FBRyxHQUFHUCxTQUFTLENBQUNDLE1BQVYsR0FBbUIsQ0FBbkIsSUFBd0JELFNBQVMsQ0FBQyxDQUFELENBQVQsS0FBaUJFLFNBQXpDLEdBQXFERixTQUFTLENBQUMsQ0FBRCxDQUE5RCxHQUFvRSxFQUE5RTtBQUNBLE1BQUlvQyxJQUFJLEdBQUc3QixHQUFHLENBQUM2QixJQUFmO0FBQ0EsTUFBSS9DLElBQUksR0FBR1UsT0FBTyxFQUFsQjtBQUNBLE1BQUltQixFQUFFLEdBQUduQixPQUFPLENBQUMsbUJBQUQsQ0FBaEI7QUFDQW1CLEVBQUFBLEVBQUUsQ0FBQ3hCLFlBQUgsQ0FBZ0JDLEVBQUUsQ0FBQ0MsTUFBbkIsRUFBMkJ1QixRQUEzQixHQUFzQ3hCLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVd0IsUUFBVixDQUFtQkMsTUFBekQ7QUFDQUgsRUFBQUEsRUFBRSxDQUFDSSxLQUFILEdBQVdSLE9BQU8sQ0FBQ1EsS0FBbkI7QUFDQUosRUFBQUEsRUFBRSxDQUFDSyxNQUFILEdBQVlULE9BQU8sQ0FBQ1MsTUFBcEI7QUFDQUwsRUFBQUEsRUFBRSxDQUFDTSxPQUFILEdBQWEsR0FBYjtBQUNBTixFQUFBQSxFQUFFLENBQUNiLFlBQUgsQ0FBZ0JWLEVBQUUsQ0FBQzhCLGdCQUFuQjtBQUNBLE1BQUlDLE9BQU8sR0FBRzNCLE9BQU8sRUFBckI7QUFDQSxNQUFJNEIsS0FBSyxHQUFHNUIsT0FBTyxDQUFDLHdCQUFELENBQW5CO0FBQ0EsTUFBSThCLFFBQVEsR0FBRzlCLE9BQU8sQ0FBQywyQkFBRCxDQUF0QjtBQUNBLE1BQUk0QyxTQUFTLEdBQUc1QyxPQUFPLENBQUMsNEJBQUQsQ0FBdkI7QUFDQSxNQUFJNkMsU0FBUyxHQUFHN0MsT0FBTyxDQUFDLDRCQUFELENBQXZCO0FBQ0EsTUFBSThDLGVBQWUsR0FBRyxHQUF0Qjs7QUFFQSxNQUFJVCxJQUFJLElBQUksQ0FBWixFQUFlO0FBQ2JRLElBQUFBLFNBQVMsQ0FBQ0UsTUFBVixHQUFtQixLQUFuQjtBQUNBRCxJQUFBQSxlQUFlLEdBQUdFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsRUFBaEIsR0FBcUIsRUFBaEMsSUFBc0MsR0FBeEQ7QUFDRCxHQUhELE1BR08sSUFBSWIsSUFBSSxJQUFJLENBQVosRUFBZTtBQUNwQk8sSUFBQUEsU0FBUyxDQUFDRyxNQUFWLEdBQW1CLEtBQW5CO0FBQ0FELElBQUFBLGVBQWUsR0FBR0UsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixFQUFoQixHQUFxQixFQUFoQyxJQUFzQyxHQUF4RDtBQUNEOztBQUVELE1BQUlDLElBQUksR0FBR0Msa0JBQWtCLENBQUNDLGNBQW5CLENBQWtDLHFCQUFsQyxFQUF5RCxDQUF6RCxDQUFYO0FBQ0EsTUFBSUMsV0FBVyxHQUFHUixlQUFlLEdBQUdLLElBQXBDO0FBQ0FDLEVBQUFBLGtCQUFrQixDQUFDRyxhQUFuQixDQUFpQyxxQkFBakMsRUFBd0RELFdBQXhEO0FBQ0EsTUFBSUUsWUFBWSxHQUFHakQsUUFBUSxDQUFDO0FBQzFCSSxJQUFBQSxNQUFNLEVBQUVtQyxlQUFlLEdBQUcsR0FEQTtBQUUxQmxDLElBQUFBLFFBQVEsRUFBRSxFQUZnQjtBQUcxQkUsSUFBQUEsS0FBSyxFQUFFbEIsRUFBRSxDQUFDa0IsS0FBSCxDQUFTLEdBQVQsRUFBYyxFQUFkLEVBQWtCLEVBQWxCO0FBSG1CLEdBQUQsQ0FBM0I7QUFLQSxNQUFJMkMsUUFBUSxHQUFHbEQsUUFBUSxDQUFDO0FBQ3RCSSxJQUFBQSxNQUFNLEVBQUUyQyxXQUFXLEdBQUcsR0FEQTtBQUV0QjFDLElBQUFBLFFBQVEsRUFBRSxFQUZZO0FBR3RCRSxJQUFBQSxLQUFLLEVBQUVsQixFQUFFLENBQUNrQixLQUFILENBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUIsRUFBbkI7QUFIZSxHQUFELENBQXZCO0FBS0FnQixFQUFBQSxRQUFRLENBQUNDLENBQVQsR0FBYSxDQUFDLEdBQWQ7QUFDQWEsRUFBQUEsU0FBUyxDQUFDYixDQUFWLEdBQWMsQ0FBQyxHQUFmO0FBQ0FjLEVBQUFBLFNBQVMsQ0FBQ2QsQ0FBVixHQUFjLENBQUMsR0FBZjtBQUNBeUIsRUFBQUEsWUFBWSxDQUFDekIsQ0FBYixHQUFpQixDQUFDLEVBQWxCO0FBQ0EwQixFQUFBQSxRQUFRLENBQUNoQixDQUFULEdBQWEsRUFBYjtBQUNBZ0IsRUFBQUEsUUFBUSxDQUFDMUIsQ0FBVCxHQUFhLENBQUMsR0FBZDtBQUNBSixFQUFBQSxPQUFPLENBQUNLLFFBQVIsQ0FBaUJKLEtBQWpCO0FBQ0FELEVBQUFBLE9BQU8sQ0FBQ0ssUUFBUixDQUFpQkYsUUFBakI7QUFDQUgsRUFBQUEsT0FBTyxDQUFDSyxRQUFSLENBQWlCWSxTQUFqQjtBQUNBakIsRUFBQUEsT0FBTyxDQUFDSyxRQUFSLENBQWlCYSxTQUFqQjtBQUNBbEIsRUFBQUEsT0FBTyxDQUFDSyxRQUFSLENBQWlCd0IsWUFBakI7QUFDQTdCLEVBQUFBLE9BQU8sQ0FBQ0ssUUFBUixDQUFpQnlCLFFBQWpCO0FBQ0EsTUFBSUMsVUFBVSxHQUFHMUQsT0FBTyxFQUF4QjtBQUNBVixFQUFBQSxJQUFJLENBQUMwQyxRQUFMLENBQWNiLEVBQWQ7QUFDQTdCLEVBQUFBLElBQUksQ0FBQzBDLFFBQUwsQ0FBY0wsT0FBZDtBQUNBckMsRUFBQUEsSUFBSSxDQUFDMEMsUUFBTCxDQUFjMEIsVUFBZDtBQUNBLE1BQUlDLFlBQVksR0FBRzNELE9BQU8sQ0FBQyxxQkFBRCxDQUExQjtBQUNBMkQsRUFBQUEsWUFBWSxDQUFDaEUsWUFBYixDQUEwQkMsRUFBRSxDQUFDQyxNQUE3QixFQUFxQ3VCLFFBQXJDLEdBQWdEeEIsRUFBRSxDQUFDQyxNQUFILENBQVV3QixRQUFWLENBQW1CQyxNQUFuRTtBQUNBcUMsRUFBQUEsWUFBWSxDQUFDcEMsS0FBYixHQUFxQixHQUFyQjtBQUNBb0MsRUFBQUEsWUFBWSxDQUFDbkMsTUFBYixHQUFzQixHQUF0QjtBQUNBa0MsRUFBQUEsVUFBVSxDQUFDMUIsUUFBWCxDQUFvQjJCLFlBQXBCOztBQUVBLE1BQUksS0FBSzVDLE9BQU8sQ0FBQ1MsTUFBUixHQUFpQlQsT0FBTyxDQUFDUSxLQUF6QixJQUFrQ2dCLGlCQUFpQixDQUFDcUIsZ0JBQWxCLENBQW1DO0FBQzVFdEUsSUFBQUEsSUFBSSxFQUFFb0UsVUFEc0U7QUFFNUVHLElBQUFBLE1BQU0sRUFBRTtBQUZvRSxHQUFuQyxDQUEzQyxFQUdJO0FBQ0ZsQyxJQUFBQSxPQUFPLENBQUNJLENBQVIsR0FBWSxHQUFaO0FBQ0QsR0FMRCxNQUtPO0FBQ0wyQixJQUFBQSxVQUFVLENBQUNYLE1BQVgsR0FBb0IsS0FBcEI7QUFDRDs7QUFFRFcsRUFBQUEsVUFBVSxDQUFDM0IsQ0FBWCxHQUFlLENBQUMsR0FBaEI7QUFDQUQsRUFBQUEsUUFBUSxDQUFDeEIsWUFBVCxDQUFzQlYsRUFBRSxDQUFDcUMsTUFBekI7QUFDQUgsRUFBQUEsUUFBUSxDQUFDSSxFQUFULENBQVksT0FBWixFQUFxQixZQUFZO0FBQy9CNUMsSUFBQUEsSUFBSSxDQUFDNkMsT0FBTDtBQUNELEdBRkQsRUFFRyxJQUZIO0FBR0FTLEVBQUFBLFNBQVMsQ0FBQ3RDLFlBQVYsQ0FBdUJWLEVBQUUsQ0FBQ3FDLE1BQTFCO0FBQ0FXLEVBQUFBLFNBQVMsQ0FBQ1YsRUFBVixDQUFhLE9BQWIsRUFBc0IsWUFBWTtBQUNoQ3NCLElBQUFBLFlBQVksQ0FBQzdELFlBQWIsQ0FBMEJDLEVBQUUsQ0FBQ2MsS0FBN0IsRUFBb0NDLE1BQXBDLEdBQTZDbUMsZUFBZSxHQUFHLENBQWxCLEdBQXNCLEdBQW5FO0FBQ0FXLElBQUFBLFFBQVEsQ0FBQzlELFlBQVQsQ0FBc0JDLEVBQUUsQ0FBQ2MsS0FBekIsRUFBZ0NDLE1BQWhDLEdBQXlDMkMsV0FBVyxHQUFHUixlQUFkLEdBQWdDLEdBQXpFO0FBQ0FNLElBQUFBLGtCQUFrQixDQUFDRyxhQUFuQixDQUFpQyxxQkFBakMsRUFBd0RELFdBQVcsR0FBR1IsZUFBdEU7QUFDQUYsSUFBQUEsU0FBUyxDQUFDRyxNQUFWLEdBQW1CLEtBQW5CO0FBQ0FGLElBQUFBLFNBQVMsQ0FBQ0UsTUFBVixHQUFtQixJQUFuQjtBQUNELEdBTkQsRUFNRyxJQU5IO0FBT0FGLEVBQUFBLFNBQVMsQ0FBQ3ZDLFlBQVYsQ0FBdUJWLEVBQUUsQ0FBQ3FDLE1BQTFCO0FBQ0FZLEVBQUFBLFNBQVMsQ0FBQ1gsRUFBVixDQUFhLE9BQWIsRUFBc0IsWUFBWTtBQUNoQzRCLElBQUFBLHFCQUFxQjtBQUNyQnhFLElBQUFBLElBQUksQ0FBQzZDLE9BQUw7QUFDRCxHQUhELEVBR0csSUFISDtBQUlBUixFQUFBQSxPQUFPLENBQUNXLEtBQVIsR0FBZ0JDLGlCQUFpQixDQUFDQyxXQUFsQztBQUNBbEQsRUFBQUEsSUFBSSxDQUFDbUQsQ0FBTCxHQUFTMUIsT0FBTyxDQUFDUSxLQUFSLEdBQWdCLENBQXpCO0FBQ0FqQyxFQUFBQSxJQUFJLENBQUN5QyxDQUFMLEdBQVNoQixPQUFPLENBQUNTLE1BQVIsR0FBaUIsQ0FBMUI7QUFDQTVCLEVBQUFBLEVBQUUsQ0FBQzhDLFFBQUgsQ0FBWUMsUUFBWixHQUF1QlgsUUFBdkIsQ0FBZ0MxQyxJQUFoQztBQUNELENBM0ZELEVBMkZHOzs7QUFHSDJCLE1BQU0sQ0FBQzhDLHVCQUFQLEdBQWlDLFlBQVk7QUFDM0MsTUFBSUMsS0FBSyxHQUFHLElBQVo7O0FBRUEsTUFBSTFFLElBQUksR0FBR1UsT0FBTyxFQUFsQjtBQUNBLE1BQUltQixFQUFFLEdBQUduQixPQUFPLENBQUMscUJBQUQsQ0FBaEI7QUFDQW1CLEVBQUFBLEVBQUUsQ0FBQ3hCLFlBQUgsQ0FBZ0JDLEVBQUUsQ0FBQ0MsTUFBbkIsRUFBMkJ1QixRQUEzQixHQUFzQ3hCLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVd0IsUUFBVixDQUFtQkMsTUFBekQ7QUFDQUgsRUFBQUEsRUFBRSxDQUFDSSxLQUFILEdBQVdSLE9BQU8sQ0FBQ1EsS0FBbkI7QUFDQUosRUFBQUEsRUFBRSxDQUFDSyxNQUFILEdBQVlULE9BQU8sQ0FBQ1MsTUFBcEIsQ0FQMkMsQ0FPZjs7QUFFNUJMLEVBQUFBLEVBQUUsQ0FBQ2IsWUFBSCxDQUFnQlYsRUFBRSxDQUFDOEIsZ0JBQW5CO0FBQ0EsTUFBSXVDLE1BQU0sR0FBR2pFLE9BQU8sRUFBcEIsQ0FWMkMsQ0FVbkI7O0FBRXhCLE1BQUlrRSxZQUFZLEdBQUdsRSxPQUFPLEVBQTFCO0FBQ0FrRSxFQUFBQSxZQUFZLENBQUM1RCxZQUFiLENBQTBCVixFQUFFLENBQUN1RSxVQUE3QjtBQUNBRCxFQUFBQSxZQUFZLENBQUNsQyxRQUFiLENBQXNCaUMsTUFBdEI7QUFDQUMsRUFBQUEsWUFBWSxDQUFDdkUsWUFBYixDQUEwQkMsRUFBRSxDQUFDdUUsVUFBN0IsRUFBeUNDLE9BQXpDLEdBQW1ESCxNQUFuRDtBQUNBQyxFQUFBQSxZQUFZLENBQUMzQyxLQUFiLEdBQXFCUixPQUFPLENBQUNRLEtBQTdCO0FBQ0EyQyxFQUFBQSxZQUFZLENBQUMxQyxNQUFiLEdBQXNCVCxPQUFPLENBQUNTLE1BQTlCO0FBQ0EwQyxFQUFBQSxZQUFZLENBQUN6QixDQUFiLEdBQWlCMUIsT0FBTyxDQUFDUSxLQUFSLEdBQWdCLENBQWpDO0FBQ0EyQyxFQUFBQSxZQUFZLENBQUNuQyxDQUFiLEdBQWlCaEIsT0FBTyxDQUFDUyxNQUFSLEdBQWlCLENBQWxDO0FBQ0EwQyxFQUFBQSxZQUFZLENBQUNHLE9BQWIsR0FBdUIsQ0FBdkI7QUFDQUosRUFBQUEsTUFBTSxDQUFDSSxPQUFQLEdBQWlCLENBQWpCO0FBQ0FKLEVBQUFBLE1BQU0sQ0FBQ3pDLE1BQVAsR0FBZ0IsSUFBaEI7QUFDQSxNQUFJOEMsV0FBVyxHQUFHdEUsT0FBTyxDQUFDLDBCQUFELENBQXpCO0FBQ0EsTUFBSXVFLFVBQVUsR0FBR3ZFLE9BQU8sQ0FBQyxzQkFBRCxDQUF4QjtBQUNBc0UsRUFBQUEsV0FBVyxDQUFDRCxPQUFaLEdBQXNCLENBQXRCO0FBQ0FFLEVBQUFBLFVBQVUsQ0FBQzlCLENBQVgsR0FBZSxDQUFDLEdBQWhCO0FBQ0E4QixFQUFBQSxVQUFVLENBQUN4QyxDQUFYLEdBQWUsQ0FBQyxFQUFoQjtBQUNBa0MsRUFBQUEsTUFBTSxDQUFDakMsUUFBUCxDQUFnQnNDLFdBQWhCO0FBQ0FMLEVBQUFBLE1BQU0sQ0FBQ2pDLFFBQVAsQ0FBZ0J1QyxVQUFoQjtBQUNBLE1BQUlDLFFBQVEsR0FBR3BCLGtCQUFrQixDQUFDQyxjQUFuQixDQUFrQyxxQkFBbEMsRUFBeUQsQ0FBekQsQ0FBZjtBQUNBLE1BQUlvQixTQUFTLEdBQUdsRSxRQUFRLENBQUM7QUFDdkJJLElBQUFBLE1BQU0sRUFBRSxNQUFNNkQsUUFEUztBQUV2QjFELElBQUFBLEtBQUssRUFBRWxCLEVBQUUsQ0FBQzhFLEtBQUgsQ0FBU0MsS0FGTztBQUd2Qi9ELElBQUFBLFFBQVEsRUFBRTtBQUhhLEdBQUQsQ0FBeEI7QUFLQTBELEVBQUFBLFdBQVcsQ0FBQ3RDLFFBQVosQ0FBcUJ5QyxTQUFyQjtBQUNBQSxFQUFBQSxTQUFTLENBQUNoQyxDQUFWLEdBQWMsQ0FBQyxFQUFmO0FBQ0FnQyxFQUFBQSxTQUFTLENBQUMxQyxDQUFWLEdBQWMsQ0FBQyxHQUFmO0FBQ0EwQyxFQUFBQSxTQUFTLENBQUNHLE9BQVYsR0FBb0IsQ0FBcEI7QUFDQSxNQUFJQyxRQUFRLEdBQUc3RSxPQUFPLENBQUMsdUJBQUQsQ0FBdEI7QUFDQSxNQUFJOEUsUUFBUSxHQUFHOUUsT0FBTyxDQUFDLHdCQUFELENBQXRCO0FBQ0EsTUFBSStFLFdBQVcsR0FBR3hFLFFBQVEsQ0FBQztBQUN6QkksSUFBQUEsTUFBTSxFQUFFLE9BRGlCO0FBRXpCRyxJQUFBQSxLQUFLLEVBQUVFLFVBRmtCO0FBR3pCSixJQUFBQSxRQUFRLEVBQUU7QUFIZSxHQUFELENBQTFCO0FBS0EsTUFBSW9FLFdBQVcsR0FBR3pFLFFBQVEsQ0FBQztBQUN6QkksSUFBQUEsTUFBTSxFQUFFLE9BRGlCO0FBRXpCRyxJQUFBQSxLQUFLLEVBQUVFLFVBRmtCO0FBR3pCSixJQUFBQSxRQUFRLEVBQUU7QUFIZSxHQUFELENBQTFCO0FBS0EsTUFBSXFFLFNBQVMsR0FBRzFFLFFBQVEsQ0FBQztBQUN2QkksSUFBQUEsTUFBTSxFQUFFLElBRGU7QUFFdkJHLElBQUFBLEtBQUssRUFBRUUsVUFGZ0I7QUFHdkJKLElBQUFBLFFBQVEsRUFBRTtBQUhhLEdBQUQsQ0FBeEI7QUFLQSxNQUFJc0UsU0FBUyxHQUFHM0UsUUFBUSxDQUFDO0FBQ3ZCSSxJQUFBQSxNQUFNLEVBQUUsSUFEZTtBQUV2QkcsSUFBQUEsS0FBSyxFQUFFRSxVQUZnQjtBQUd2QkosSUFBQUEsUUFBUSxFQUFFO0FBSGEsR0FBRCxDQUF4QjtBQUtBbUUsRUFBQUEsV0FBVyxDQUFDSCxPQUFaLEdBQXNCLENBQXRCO0FBQ0FJLEVBQUFBLFdBQVcsQ0FBQ0osT0FBWixHQUFzQixDQUF0QjtBQUNBSyxFQUFBQSxTQUFTLENBQUNMLE9BQVYsR0FBb0IsQ0FBcEI7QUFDQU0sRUFBQUEsU0FBUyxDQUFDTixPQUFWLEdBQW9CLENBQXBCO0FBQ0FYLEVBQUFBLE1BQU0sQ0FBQ2pDLFFBQVAsQ0FBZ0IrQyxXQUFoQjtBQUNBZCxFQUFBQSxNQUFNLENBQUNqQyxRQUFQLENBQWdCZ0QsV0FBaEI7QUFDQWYsRUFBQUEsTUFBTSxDQUFDakMsUUFBUCxDQUFnQjZDLFFBQWhCO0FBQ0FaLEVBQUFBLE1BQU0sQ0FBQ2pDLFFBQVAsQ0FBZ0I4QyxRQUFoQjtBQUNBYixFQUFBQSxNQUFNLENBQUNqQyxRQUFQLENBQWdCaUQsU0FBaEI7QUFDQWhCLEVBQUFBLE1BQU0sQ0FBQ2pDLFFBQVAsQ0FBZ0JrRCxTQUFoQjtBQUNBSixFQUFBQSxRQUFRLENBQUN4QyxLQUFULEdBQWlCLEdBQWpCO0FBQ0F5QyxFQUFBQSxXQUFXLENBQUN0QyxDQUFaLEdBQWdCLENBQUMsR0FBakI7QUFDQXNDLEVBQUFBLFdBQVcsQ0FBQ2hELENBQVosR0FBZ0IsQ0FBQyxHQUFqQjtBQUNBaUQsRUFBQUEsV0FBVyxDQUFDdkMsQ0FBWixHQUFnQnNDLFdBQVcsQ0FBQ3RDLENBQTVCO0FBQ0F1QyxFQUFBQSxXQUFXLENBQUNqRCxDQUFaLEdBQWdCZ0QsV0FBVyxDQUFDaEQsQ0FBWixHQUFnQixFQUFoQztBQUNBOEMsRUFBQUEsUUFBUSxDQUFDcEMsQ0FBVCxHQUFhLEdBQWI7QUFDQW9DLEVBQUFBLFFBQVEsQ0FBQzlDLENBQVQsR0FBYWdELFdBQVcsQ0FBQ2hELENBQXpCO0FBQ0ErQyxFQUFBQSxRQUFRLENBQUNyQyxDQUFULEdBQWFvQyxRQUFRLENBQUNwQyxDQUF0QjtBQUNBcUMsRUFBQUEsUUFBUSxDQUFDL0MsQ0FBVCxHQUFhaUQsV0FBVyxDQUFDakQsQ0FBekI7QUFDQWtELEVBQUFBLFNBQVMsQ0FBQ3hDLENBQVYsR0FBY29DLFFBQVEsQ0FBQ3BDLENBQVQsR0FBYSxFQUEzQjtBQUNBd0MsRUFBQUEsU0FBUyxDQUFDbEQsQ0FBVixHQUFjZ0QsV0FBVyxDQUFDaEQsQ0FBMUI7QUFDQW1ELEVBQUFBLFNBQVMsQ0FBQ3pDLENBQVYsR0FBY3dDLFNBQVMsQ0FBQ3hDLENBQXhCO0FBQ0F5QyxFQUFBQSxTQUFTLENBQUNuRCxDQUFWLEdBQWNpRCxXQUFXLENBQUNqRCxDQUExQjtBQUNBLE1BQUlvRCxXQUFXLEdBQUduRixPQUFPLENBQUMsd0JBQUQsQ0FBekI7QUFDQW1GLEVBQUFBLFdBQVcsQ0FBQ3hGLFlBQVosQ0FBeUJDLEVBQUUsQ0FBQ0MsTUFBNUIsRUFBb0N1QixRQUFwQyxHQUErQ3hCLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVd0IsUUFBVixDQUFtQkMsTUFBbEU7QUFDQTZELEVBQUFBLFdBQVcsQ0FBQzVELEtBQVosR0FBb0IsR0FBcEI7QUFDQTRELEVBQUFBLFdBQVcsQ0FBQzNELE1BQVosR0FBcUIsRUFBckI7QUFDQXlDLEVBQUFBLE1BQU0sQ0FBQ2pDLFFBQVAsQ0FBZ0JtRCxXQUFoQjtBQUNBQSxFQUFBQSxXQUFXLENBQUNwRCxDQUFaLEdBQWdCLENBQUMsR0FBakI7QUFDQSxNQUFJcUQsU0FBUyxHQUFHcEYsT0FBTyxDQUFDLDZCQUFELENBQXZCO0FBQ0FtRixFQUFBQSxXQUFXLENBQUNuRCxRQUFaLENBQXFCb0QsU0FBckI7QUFDQUEsRUFBQUEsU0FBUyxDQUFDM0MsQ0FBVixHQUFjLENBQUMsR0FBZjtBQUNBLE1BQUk0QyxVQUFVLEdBQUc5RSxRQUFRLENBQUM7QUFDeEJJLElBQUFBLE1BQU0sRUFBRSxzQkFEZ0I7QUFFeEJDLElBQUFBLFFBQVEsRUFBRSxFQUZjO0FBR3hCRSxJQUFBQSxLQUFLLEVBQUVFO0FBSGlCLEdBQUQsQ0FBekI7QUFLQW1FLEVBQUFBLFdBQVcsQ0FBQ25ELFFBQVosQ0FBcUJxRCxVQUFyQjtBQUNBQSxFQUFBQSxVQUFVLENBQUNULE9BQVgsR0FBcUIsQ0FBckI7QUFDQVMsRUFBQUEsVUFBVSxDQUFDNUMsQ0FBWCxHQUFlLENBQUMsR0FBaEI7QUFDQSxNQUFJNkMsV0FBVyxHQUFHL0UsUUFBUSxDQUFDO0FBQ3pCSSxJQUFBQSxNQUFNLEVBQUUsTUFEaUI7QUFFekJDLElBQUFBLFFBQVEsRUFBRSxFQUZlO0FBR3pCRSxJQUFBQSxLQUFLLEVBQUVFO0FBSGtCLEdBQUQsQ0FBMUI7QUFLQWlELEVBQUFBLE1BQU0sQ0FBQ2pDLFFBQVAsQ0FBZ0JzRCxXQUFoQjtBQUNBQSxFQUFBQSxXQUFXLENBQUNWLE9BQVosR0FBc0IsQ0FBdEI7QUFDQVUsRUFBQUEsV0FBVyxDQUFDN0MsQ0FBWixHQUFnQixDQUFDLEdBQWpCO0FBQ0E2QyxFQUFBQSxXQUFXLENBQUN2RCxDQUFaLEdBQWdCLENBQUMsR0FBakI7QUFDQSxNQUFJd0QsaUJBQWlCLEdBQUdoRixRQUFRLENBQUM7QUFDL0JJLElBQUFBLE1BQU0sRUFBRSxhQUR1QjtBQUUvQkMsSUFBQUEsUUFBUSxFQUFFLEVBRnFCO0FBRy9CRSxJQUFBQSxLQUFLLEVBQUVFO0FBSHdCLEdBQUQsQ0FBaEM7QUFLQSxNQUFJd0UsaUJBQWlCLEdBQUdqRixRQUFRLENBQUM7QUFDL0JJLElBQUFBLE1BQU0sRUFBRSxtQkFEdUI7QUFFL0JDLElBQUFBLFFBQVEsRUFBRSxFQUZxQjtBQUcvQkUsSUFBQUEsS0FBSyxFQUFFbEIsRUFBRSxDQUFDa0IsS0FBSCxDQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CLEVBQW5CO0FBSHdCLEdBQUQsQ0FBaEM7QUFLQSxNQUFJMkUsY0FBYyxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxFQUFQLEVBQVcsRUFBWCxFQUFlLEdBQWYsRUFBb0IsR0FBcEIsQ0FBckI7QUFDQSxNQUFJQyxpQkFBaUIsR0FBRyxDQUF4Qjs7QUFFQSxNQUFJQyxLQUFLLEdBQUcsU0FBU0EsS0FBVCxDQUFlQyxDQUFmLEVBQWtCO0FBQzVCQyxJQUFBQSxTQUFTLEdBQUc3RixPQUFPLENBQUMsb0JBQW9CNEYsQ0FBcEIsR0FBd0IsR0FBeEIsSUFBK0JBLENBQUMsSUFBSSxDQUFMLEdBQVMsQ0FBVCxHQUFhLENBQTVDLElBQWlELE1BQWxELENBQW5CO0FBQ0EzQixJQUFBQSxNQUFNLENBQUNqQyxRQUFQLENBQWdCNkQsU0FBaEI7QUFDQUEsSUFBQUEsU0FBUyxDQUFDcEQsQ0FBVixHQUFjLENBQUNtRCxDQUFDLEdBQUcsQ0FBTCxJQUFVLENBQVYsR0FBYyxHQUFkLEdBQW9CLENBQUMsR0FBbkM7QUFDQUMsSUFBQUEsU0FBUyxDQUFDOUQsQ0FBVixHQUFjLENBQUMsR0FBRCxHQUFPaUIsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBQzJDLENBQUMsR0FBRyxDQUFMLElBQVUsQ0FBckIsSUFBMEIsRUFBL0M7QUFDQUMsSUFBQUEsU0FBUyxDQUFDQyxJQUFWLEdBQWlCLGVBQWVGLENBQWhDO0FBQ0FDLElBQUFBLFNBQVMsQ0FBQ3ZGLFlBQVYsQ0FBdUJWLEVBQUUsQ0FBQ3FDLE1BQTFCO0FBQ0E0RCxJQUFBQSxTQUFTLENBQUMzRCxFQUFWLENBQWEsT0FBYixFQUFzQixZQUFZO0FBQ2hDNkQsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLENBQUMsR0FBRyxJQUFKLEdBQVdILGNBQWMsQ0FBQ0csQ0FBQyxHQUFHLENBQUwsQ0FBckM7QUFDQXZHLE1BQUFBLE9BQU8sQ0FBQzRFLE1BQU0sQ0FBQ2dDLGNBQVAsQ0FBc0IsZUFBZVAsaUJBQXJDLENBQUQsRUFBMEQsb0JBQW9CQSxpQkFBcEIsR0FBd0MsUUFBbEcsQ0FBUDtBQUNBckcsTUFBQUEsT0FBTyxDQUFDNEUsTUFBTSxDQUFDZ0MsY0FBUCxDQUFzQixlQUFlTCxDQUFyQyxDQUFELEVBQTBDLG9CQUFvQkEsQ0FBcEIsR0FBd0IsUUFBbEUsQ0FBUDtBQUNBRixNQUFBQSxpQkFBaUIsR0FBR0UsQ0FBcEI7QUFDRCxLQUxELEVBS0c1QixLQUxIO0FBTUQsR0FiRDs7QUFlQSxPQUFLLElBQUk0QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJLENBQXJCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQzNCLFFBQUlDLFNBQUo7O0FBRUFGLElBQUFBLEtBQUssQ0FBQ0MsQ0FBRCxDQUFMO0FBQ0Q7O0FBRUQsTUFBSU0sZUFBZSxHQUFHM0YsUUFBUSxDQUFDO0FBQzdCSSxJQUFBQSxNQUFNLEVBQUUsTUFEcUI7QUFFN0JDLElBQUFBLFFBQVEsRUFBRSxFQUZtQjtBQUc3QkUsSUFBQUEsS0FBSyxFQUFFRTtBQUhzQixHQUFELENBQTlCO0FBS0FpRCxFQUFBQSxNQUFNLENBQUNqQyxRQUFQLENBQWdCa0UsZUFBaEI7QUFDQUEsRUFBQUEsZUFBZSxDQUFDdEIsT0FBaEIsR0FBMEIsQ0FBMUI7QUFDQXNCLEVBQUFBLGVBQWUsQ0FBQ3pELENBQWhCLEdBQW9CLENBQUMsR0FBckI7QUFDQXlELEVBQUFBLGVBQWUsQ0FBQ25FLENBQWhCLEdBQW9CLENBQUMsR0FBckI7QUFDQXdELEVBQUFBLGlCQUFpQixDQUFDWCxPQUFsQixHQUE0QixDQUE1QjtBQUNBWSxFQUFBQSxpQkFBaUIsQ0FBQ1osT0FBbEIsR0FBNEIsQ0FBNUI7QUFDQVgsRUFBQUEsTUFBTSxDQUFDakMsUUFBUCxDQUFnQnVELGlCQUFoQjtBQUNBdEIsRUFBQUEsTUFBTSxDQUFDakMsUUFBUCxDQUFnQndELGlCQUFoQjtBQUNBRCxFQUFBQSxpQkFBaUIsQ0FBQzlDLENBQWxCLEdBQXNCLENBQUMsR0FBdkI7QUFDQStDLEVBQUFBLGlCQUFpQixDQUFDL0MsQ0FBbEIsR0FBc0IsQ0FBQyxFQUF2QjtBQUNBOEMsRUFBQUEsaUJBQWlCLENBQUN4RCxDQUFsQixHQUFzQixDQUFDLEdBQXZCO0FBQ0F5RCxFQUFBQSxpQkFBaUIsQ0FBQ3pELENBQWxCLEdBQXNCd0QsaUJBQWlCLENBQUN4RCxDQUF4QztBQUNBLE1BQUlvRSxlQUFlLEdBQUduRyxPQUFPLEVBQTdCO0FBQ0FpRSxFQUFBQSxNQUFNLENBQUNqQyxRQUFQLENBQWdCbUUsZUFBaEI7QUFDQUEsRUFBQUEsZUFBZSxDQUFDcEUsQ0FBaEIsR0FBb0IsQ0FBQyxHQUFyQjtBQUNBLE1BQUlxRSxlQUFlLEdBQUdwRyxPQUFPLENBQUMsOEJBQUQsQ0FBN0I7QUFDQW1HLEVBQUFBLGVBQWUsQ0FBQ25FLFFBQWhCLENBQXlCb0UsZUFBekI7QUFDQSxNQUFJQyxlQUFlLEdBQUdyRyxPQUFPLENBQUMsMkJBQUQsQ0FBN0I7QUFDQW1HLEVBQUFBLGVBQWUsQ0FBQ25FLFFBQWhCLENBQXlCcUUsZUFBekI7QUFDQUQsRUFBQUEsZUFBZSxDQUFDM0QsQ0FBaEIsR0FBb0IsQ0FBQyxHQUFyQjtBQUNBNEQsRUFBQUEsZUFBZSxDQUFDNUQsQ0FBaEIsR0FBb0IsR0FBcEI7QUFDQSxNQUFJNkQsY0FBYyxHQUFHL0YsUUFBUSxDQUFDO0FBQzVCSSxJQUFBQSxNQUFNLEVBQUUsc0JBRG9CO0FBRTVCQyxJQUFBQSxRQUFRLEVBQUUsRUFGa0I7QUFHNUJFLElBQUFBLEtBQUssRUFBRUU7QUFIcUIsR0FBRCxDQUE3QjtBQUtBbUYsRUFBQUEsZUFBZSxDQUFDbkUsUUFBaEIsQ0FBeUJzRSxjQUF6QjtBQUNBQSxFQUFBQSxjQUFjLENBQUN2RSxDQUFmLEdBQW1CLEVBQW5CO0FBQ0EsTUFBSXdFLGNBQWMsR0FBR2hHLFFBQVEsQ0FBQztBQUM1QkksSUFBQUEsTUFBTSxFQUFFLE9BRG9CO0FBRTVCQyxJQUFBQSxRQUFRLEVBQUUsRUFGa0I7QUFHNUJFLElBQUFBLEtBQUssRUFBRUU7QUFIcUIsR0FBRCxDQUE3QjtBQUtBbUYsRUFBQUEsZUFBZSxDQUFDbkUsUUFBaEIsQ0FBeUJ1RSxjQUF6QjtBQUNBQSxFQUFBQSxjQUFjLENBQUM5RCxDQUFmLEdBQW1CLEdBQW5CO0FBQ0E4RCxFQUFBQSxjQUFjLENBQUN4RSxDQUFmLEdBQW1CLENBQUMsRUFBcEI7QUFDQSxNQUFJeUUsaUJBQWlCLEdBQUd4RyxPQUFPLENBQUMsMkJBQUQsQ0FBL0I7QUFDQW1HLEVBQUFBLGVBQWUsQ0FBQ25FLFFBQWhCLENBQXlCd0UsaUJBQXpCO0FBQ0FBLEVBQUFBLGlCQUFpQixDQUFDL0QsQ0FBbEIsR0FBc0IsQ0FBQyxFQUF2QjtBQUNBK0QsRUFBQUEsaUJBQWlCLENBQUN6RSxDQUFsQixHQUFzQixDQUFDLEVBQXZCO0FBQ0EsTUFBSTBFLGlCQUFpQixHQUFHekcsT0FBTyxDQUFDLDJCQUFELENBQS9CO0FBQ0F3RyxFQUFBQSxpQkFBaUIsQ0FBQ3hFLFFBQWxCLENBQTJCeUUsaUJBQTNCO0FBQ0FBLEVBQUFBLGlCQUFpQixDQUFDOUcsWUFBbEIsQ0FBK0JDLEVBQUUsQ0FBQ0MsTUFBbEMsRUFBMEN3QyxJQUExQyxHQUFpRHpDLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVNkcsSUFBVixDQUFlQyxNQUFoRTtBQUNBRixFQUFBQSxpQkFBaUIsQ0FBQzlHLFlBQWxCLENBQStCQyxFQUFFLENBQUNDLE1BQWxDLEVBQTBDK0csU0FBMUMsR0FBc0QsSUFBSSxDQUExRDtBQUNBLE1BQUlDLFlBQVksR0FBRzdHLE9BQU8sQ0FBQyx3QkFBRCxDQUExQjtBQUNBNkcsRUFBQUEsWUFBWSxDQUFDbEgsWUFBYixDQUEwQkMsRUFBRSxDQUFDQyxNQUE3QixFQUFxQ3VCLFFBQXJDLEdBQWdEeEIsRUFBRSxDQUFDQyxNQUFILENBQVV3QixRQUFWLENBQW1CQyxNQUFuRTtBQUNBdUYsRUFBQUEsWUFBWSxDQUFDdEYsS0FBYixHQUFxQixHQUFyQjtBQUNBc0YsRUFBQUEsWUFBWSxDQUFDckYsTUFBYixHQUFzQixFQUF0QjtBQUNBeUMsRUFBQUEsTUFBTSxDQUFDakMsUUFBUCxDQUFnQjZFLFlBQWhCO0FBQ0FBLEVBQUFBLFlBQVksQ0FBQzlFLENBQWIsR0FBaUIsQ0FBQyxJQUFsQjtBQUNBLE1BQUkrRSxjQUFjLEdBQUd2RyxRQUFRLENBQUM7QUFDNUJLLElBQUFBLFFBQVEsRUFBRSxFQURrQjtBQUU1QkUsSUFBQUEsS0FBSyxFQUFFRSxVQUZxQjtBQUc1QkwsSUFBQUEsTUFBTSxFQUFFO0FBSG9CLEdBQUQsQ0FBN0I7QUFLQW1HLEVBQUFBLGNBQWMsQ0FBQ25ILFlBQWYsQ0FBNEJDLEVBQUUsQ0FBQ2MsS0FBL0IsRUFBc0NHLFVBQXRDLEdBQW1ELEVBQW5EO0FBQ0FvRCxFQUFBQSxNQUFNLENBQUNqQyxRQUFQLENBQWdCOEUsY0FBaEI7QUFDQUEsRUFBQUEsY0FBYyxDQUFDL0UsQ0FBZixHQUFtQixDQUFDLElBQXBCO0FBQ0EsTUFBSWdGLFlBQVksR0FBRy9HLE9BQU8sQ0FBQyx3QkFBRCxDQUExQjtBQUNBK0csRUFBQUEsWUFBWSxDQUFDcEgsWUFBYixDQUEwQkMsRUFBRSxDQUFDQyxNQUE3QixFQUFxQ3VCLFFBQXJDLEdBQWdEeEIsRUFBRSxDQUFDQyxNQUFILENBQVV3QixRQUFWLENBQW1CQyxNQUFuRTtBQUNBeUYsRUFBQUEsWUFBWSxDQUFDeEYsS0FBYixHQUFxQixHQUFyQjtBQUNBd0YsRUFBQUEsWUFBWSxDQUFDdkYsTUFBYixHQUFzQixHQUF0QjtBQUNBeUMsRUFBQUEsTUFBTSxDQUFDakMsUUFBUCxDQUFnQitFLFlBQWhCO0FBQ0FBLEVBQUFBLFlBQVksQ0FBQ2hGLENBQWIsR0FBaUIsQ0FBQyxJQUFsQjtBQUNBLE1BQUlpRixhQUFhLEdBQUd6RyxRQUFRLENBQUM7QUFDM0JJLElBQUFBLE1BQU0sRUFBRSxpQkFEbUI7QUFFM0JDLElBQUFBLFFBQVEsRUFBRSxFQUZpQjtBQUczQkUsSUFBQUEsS0FBSyxFQUFFRTtBQUhvQixHQUFELENBQTVCO0FBS0ErRixFQUFBQSxZQUFZLENBQUMvRSxRQUFiLENBQXNCZ0YsYUFBdEI7QUFDQUEsRUFBQUEsYUFBYSxDQUFDakYsQ0FBZCxHQUFrQixFQUFsQjtBQUNBLE1BQUlrRixjQUFjLEdBQUcxRyxRQUFRLENBQUM7QUFDNUJJLElBQUFBLE1BQU0sRUFBRSxNQURvQjtBQUU1QkMsSUFBQUEsUUFBUSxFQUFFLEVBRmtCO0FBRzVCRSxJQUFBQSxLQUFLLEVBQUVsQixFQUFFLENBQUNrQixLQUFILENBQVMsR0FBVCxFQUFjLEVBQWQsRUFBa0IsRUFBbEI7QUFIcUIsR0FBRCxDQUE3QjtBQUtBaUcsRUFBQUEsWUFBWSxDQUFDL0UsUUFBYixDQUFzQmlGLGNBQXRCO0FBQ0FBLEVBQUFBLGNBQWMsQ0FBQ3hFLENBQWYsR0FBbUIsR0FBbkI7QUFDQXdFLEVBQUFBLGNBQWMsQ0FBQ2xGLENBQWYsR0FBbUJpRixhQUFhLENBQUNqRixDQUFqQztBQUNBLE1BQUltRixlQUFlLEdBQUdsSCxPQUFPLENBQUMsMkJBQUQsQ0FBN0I7QUFDQStHLEVBQUFBLFlBQVksQ0FBQy9FLFFBQWIsQ0FBc0JrRixlQUF0QjtBQUNBQSxFQUFBQSxlQUFlLENBQUN6RSxDQUFoQixHQUFvQixDQUFDLEdBQXJCO0FBQ0F5RSxFQUFBQSxlQUFlLENBQUNuRixDQUFoQixHQUFvQixFQUFwQjtBQUNBLE1BQUlvRixlQUFlLEdBQUduSCxPQUFPLENBQUMsMEJBQUQsQ0FBN0I7QUFDQWtILEVBQUFBLGVBQWUsQ0FBQ2xGLFFBQWhCLENBQXlCbUYsZUFBekI7QUFDQUEsRUFBQUEsZUFBZSxDQUFDcEUsTUFBaEIsR0FBeUIsS0FBekI7QUFDQSxNQUFJcUUsU0FBUyxHQUFHcEgsT0FBTyxDQUFDLHdCQUFELENBQXZCO0FBQ0ErRyxFQUFBQSxZQUFZLENBQUMvRSxRQUFiLENBQXNCb0YsU0FBdEI7QUFDQUEsRUFBQUEsU0FBUyxDQUFDckYsQ0FBVixHQUFjLENBQUMsRUFBZjtBQUNBbUYsRUFBQUEsZUFBZSxDQUFDNUcsWUFBaEIsQ0FBNkJWLEVBQUUsQ0FBQ3FDLE1BQWhDO0FBQ0FpRixFQUFBQSxlQUFlLENBQUNoRixFQUFoQixDQUFtQixPQUFuQixFQUE0QixZQUFZO0FBQ3RDaUYsSUFBQUEsZUFBZSxDQUFDcEUsTUFBaEIsR0FBeUIsQ0FBQ29FLGVBQWUsQ0FBQ3BFLE1BQTFDO0FBQ0QsR0FGRCxFQUVHLElBRkg7QUFHQXFFLEVBQUFBLFNBQVMsQ0FBQzlHLFlBQVYsQ0FBdUJWLEVBQUUsQ0FBQ3FDLE1BQTFCO0FBQ0FtRixFQUFBQSxTQUFTLENBQUNsRixFQUFWLENBQWEsT0FBYixFQUFzQixZQUFZO0FBQ2hDLFFBQUlpRixlQUFlLENBQUNwRSxNQUFwQixFQUE0QjtBQUMxQmdELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVdOLGlCQUF2QjtBQUNEO0FBQ0YsR0FKRCxFQUlHLElBSkg7QUFLQW5CLEVBQUFBLFVBQVUsQ0FBQ2pFLFlBQVgsQ0FBd0JWLEVBQUUsQ0FBQ3FDLE1BQTNCO0FBQ0FzQyxFQUFBQSxVQUFVLENBQUNyQyxFQUFYLENBQWMsT0FBZCxFQUF1QixZQUFZO0FBQ2pDNUMsSUFBQUEsSUFBSSxDQUFDNkMsT0FBTDtBQUNELEdBRkQsRUFFRyxJQUZIO0FBR0E3QyxFQUFBQSxJQUFJLENBQUMwQyxRQUFMLENBQWNiLEVBQWQ7QUFDQTdCLEVBQUFBLElBQUksQ0FBQzBDLFFBQUwsQ0FBY2tDLFlBQWQsRUE5UDJDLENBOFBkOztBQUU3QkQsRUFBQUEsTUFBTSxDQUFDM0IsS0FBUCxHQUFlQyxpQkFBaUIsQ0FBQ0MsV0FBakM7QUFDQWxELEVBQUFBLElBQUksQ0FBQ21ELENBQUwsR0FBUzFCLE9BQU8sQ0FBQ1EsS0FBUixHQUFnQixDQUF6QjtBQUNBakMsRUFBQUEsSUFBSSxDQUFDeUMsQ0FBTCxHQUFTaEIsT0FBTyxDQUFDUyxNQUFSLEdBQWlCLENBQTFCO0FBQ0E1QixFQUFBQSxFQUFFLENBQUM4QyxRQUFILENBQVlDLFFBQVosR0FBdUJYLFFBQXZCLENBQWdDMUMsSUFBaEM7QUFDRCxDQXBRRCxFQW9RRzs7O0FBR0gyQixNQUFNLENBQUNvRyx1QkFBUCxHQUFpQyxZQUFZO0FBQzNDLE1BQUlDLE1BQU0sR0FBRyxJQUFiOztBQUVBLE1BQUloSSxJQUFJLEdBQUdVLE9BQU8sRUFBbEI7QUFDQSxNQUFJbUIsRUFBRSxHQUFHbkIsT0FBTyxDQUFDLHFCQUFELENBQWhCO0FBQ0FtQixFQUFBQSxFQUFFLENBQUN4QixZQUFILENBQWdCQyxFQUFFLENBQUNDLE1BQW5CLEVBQTJCdUIsUUFBM0IsR0FBc0N4QixFQUFFLENBQUNDLE1BQUgsQ0FBVXdCLFFBQVYsQ0FBbUJDLE1BQXpEO0FBQ0FILEVBQUFBLEVBQUUsQ0FBQ0ksS0FBSCxHQUFXUixPQUFPLENBQUNRLEtBQW5CO0FBQ0FKLEVBQUFBLEVBQUUsQ0FBQ0ssTUFBSCxHQUFZVCxPQUFPLENBQUNTLE1BQXBCLENBUDJDLENBT2Y7O0FBRTVCTCxFQUFBQSxFQUFFLENBQUNiLFlBQUgsQ0FBZ0JWLEVBQUUsQ0FBQzhCLGdCQUFuQjtBQUNBLE1BQUl1QyxNQUFNLEdBQUdqRSxPQUFPLEVBQXBCO0FBQ0FpRSxFQUFBQSxNQUFNLENBQUNsQyxDQUFQLEdBQVdoQixPQUFPLENBQUNTLE1BQVIsR0FBaUIsQ0FBNUI7QUFDQSxNQUFJK0YsV0FBVyxHQUFHdkgsT0FBTyxDQUFDLDBCQUFELENBQXpCO0FBQ0EsTUFBSXdILFVBQVUsR0FBR3hILE9BQU8sQ0FBQyxzQkFBRCxDQUF4QjtBQUNBLE1BQUl5SCxXQUFXLEdBQUd6SCxPQUFPLENBQUMsMEJBQUQsRUFBNkIsWUFBWTtBQUNoRXlILElBQUFBLFdBQVcsQ0FBQzlILFlBQVosQ0FBeUJDLEVBQUUsQ0FBQ0MsTUFBNUIsRUFBb0NDLFdBQXBDLENBQWdENEgsUUFBaEQsR0FBMkQsR0FBM0Q7QUFDQUQsSUFBQUEsV0FBVyxDQUFDOUgsWUFBWixDQUF5QkMsRUFBRSxDQUFDQyxNQUE1QixFQUFvQ0MsV0FBcEMsQ0FBZ0Q2SCxXQUFoRCxHQUE4RCxDQUE5RDtBQUNBRixJQUFBQSxXQUFXLENBQUM5SCxZQUFaLENBQXlCQyxFQUFFLENBQUNDLE1BQTVCLEVBQW9DQyxXQUFwQyxDQUFnRDhILFNBQWhELEdBQTRELENBQTVEO0FBQ0FILElBQUFBLFdBQVcsQ0FBQzlILFlBQVosQ0FBeUJDLEVBQUUsQ0FBQ0MsTUFBNUIsRUFBb0NDLFdBQXBDLENBQWdEK0gsVUFBaEQsR0FBNkQsQ0FBN0Q7QUFDQUosSUFBQUEsV0FBVyxDQUFDOUgsWUFBWixDQUF5QkMsRUFBRSxDQUFDQyxNQUE1QixFQUFvQ3dDLElBQXBDLEdBQTJDekMsRUFBRSxDQUFDQyxNQUFILENBQVU2RyxJQUFWLENBQWVvQixNQUExRDtBQUNBTCxJQUFBQSxXQUFXLENBQUNqRyxNQUFaLEdBQXFCLElBQXJCO0FBQ0QsR0FQd0IsQ0FBekI7QUFRQStGLEVBQUFBLFdBQVcsQ0FBQ2xELE9BQVosR0FBc0IsQ0FBdEI7QUFDQW9ELEVBQUFBLFdBQVcsQ0FBQ3BELE9BQVosR0FBc0IsQ0FBdEI7QUFDQW1ELEVBQUFBLFVBQVUsQ0FBQy9FLENBQVgsR0FBZSxDQUFDLEdBQWhCO0FBQ0ErRSxFQUFBQSxVQUFVLENBQUN6RixDQUFYLEdBQWUsQ0FBQyxFQUFoQjtBQUNBMEYsRUFBQUEsV0FBVyxDQUFDMUYsQ0FBWixHQUFnQixDQUFDLEVBQWpCO0FBQ0FrQyxFQUFBQSxNQUFNLENBQUNqQyxRQUFQLENBQWdCdUYsV0FBaEI7QUFDQXRELEVBQUFBLE1BQU0sQ0FBQ2pDLFFBQVAsQ0FBZ0J3RixVQUFoQjtBQUNBdkQsRUFBQUEsTUFBTSxDQUFDakMsUUFBUCxDQUFnQnlGLFdBQWhCO0FBQ0EsTUFBSU0sVUFBVSxHQUFHLDRFQUFqQjtBQUNBLE1BQUlDLFNBQVMsR0FBRyxxREFBaEI7QUFDQSxNQUFJQyxPQUFPLEdBQUcsQ0FBQyxNQUFELEVBQVMsU0FBU0YsVUFBbEIsRUFBOEIsVUFBVUMsU0FBeEMsQ0FBZDtBQUNBLE1BQUlFLFNBQVMsR0FBR0QsT0FBTyxDQUFDL0gsTUFBeEI7QUFDQSxNQUFJaUksWUFBWSxHQUFHLENBQUMsR0FBcEI7O0FBRUEsTUFBSUMsTUFBTSxHQUFHLFNBQVNBLE1BQVQsR0FBa0I7QUFDN0JDLElBQUFBLFNBQVMsR0FBR3JJLE9BQU8sQ0FBQyx3QkFBRCxDQUFuQjtBQUNBaUUsSUFBQUEsTUFBTSxDQUFDakMsUUFBUCxDQUFnQnFHLFNBQWhCO0FBQ0FBLElBQUFBLFNBQVMsQ0FBQ3RHLENBQVYsR0FBY29HLFlBQWQ7QUFDQUEsSUFBQUEsWUFBWSxJQUFJLEdBQWhCO0FBQ0EsUUFBSUcsT0FBTyxHQUFHdEksT0FBTyxDQUFDNEYsQ0FBQyxJQUFJLENBQUwsR0FBUyx1QkFBVCxHQUFtQyx5QkFBcEMsQ0FBckI7QUFDQXlDLElBQUFBLFNBQVMsQ0FBQ3JHLFFBQVYsQ0FBbUJzRyxPQUFuQjtBQUNBQSxJQUFBQSxPQUFPLENBQUM3RixDQUFSLEdBQVksR0FBWjtBQUNBOEYsSUFBQUEsUUFBUSxHQUFHaEksUUFBUSxDQUFDO0FBQ2xCTyxNQUFBQSxLQUFLLEVBQUVFLFVBRFc7QUFFbEJKLE1BQUFBLFFBQVEsRUFBRSxFQUZRO0FBR2xCRCxNQUFBQSxNQUFNLEVBQUVzSCxPQUFPLENBQUNyQyxDQUFEO0FBSEcsS0FBRCxDQUFuQjtBQUtBeUMsSUFBQUEsU0FBUyxDQUFDckcsUUFBVixDQUFtQnVHLFFBQW5CO0FBQ0FBLElBQUFBLFFBQVEsQ0FBQ2hILEtBQVQsR0FBaUIsR0FBakI7QUFDQWdILElBQUFBLFFBQVEsQ0FBQzlGLENBQVQsR0FBYSxDQUFDLEVBQWQ7QUFDQThGLElBQUFBLFFBQVEsQ0FBQzVJLFlBQVQsQ0FBc0JDLEVBQUUsQ0FBQ2MsS0FBekIsRUFBZ0M4SCxRQUFoQyxHQUEyQzVJLEVBQUUsQ0FBQ2MsS0FBSCxDQUFTK0gsUUFBVCxDQUFrQkMsYUFBN0Q7QUFDQUosSUFBQUEsT0FBTyxDQUFDSyxNQUFSLEdBQWlCL0MsQ0FBakI7QUFDQTBDLElBQUFBLE9BQU8sQ0FBQ2hJLFlBQVIsQ0FBcUJWLEVBQUUsQ0FBQ3FDLE1BQXhCO0FBQ0FxRyxJQUFBQSxPQUFPLENBQUNwRyxFQUFSLENBQVcsT0FBWCxFQUFvQixZQUFZO0FBQzlCLGNBQVFvRyxPQUFPLENBQUNLLE1BQWhCO0FBQ0UsYUFBSyxDQUFMO0FBQ0U1QyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0E7O0FBRUYsYUFBSyxDQUFMO0FBQ0VELFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZK0IsVUFBWjtBQUNBOztBQUVGLGFBQUssQ0FBTDtBQUNFaEMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlnQyxTQUFaO0FBQ0E7QUFYSjtBQWFELEtBZEQsRUFjR1YsTUFkSDtBQWVELEdBbENEOztBQW9DQSxPQUFLLElBQUkxQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHc0MsU0FBcEIsRUFBK0J0QyxDQUFDLEVBQWhDLEVBQW9DO0FBQ2xDLFFBQUl5QyxTQUFKO0FBQ0EsUUFBSUUsUUFBSjs7QUFFQUgsSUFBQUEsTUFBTTtBQUNQOztBQUVELE1BQUlRLFFBQVEsR0FBRzVJLE9BQU8sRUFBdEI7QUFDQWlFLEVBQUFBLE1BQU0sQ0FBQ2pDLFFBQVAsQ0FBZ0I0RyxRQUFoQjtBQUNBQSxFQUFBQSxRQUFRLENBQUM3RyxDQUFULEdBQWEsQ0FBQyxJQUFkO0FBQ0EsTUFBSThHLFNBQVMsR0FBR3RJLFFBQVEsQ0FBQztBQUN2Qk8sSUFBQUEsS0FBSyxFQUFFRSxVQURnQjtBQUV2QkosSUFBQUEsUUFBUSxFQUFFLEVBRmE7QUFHdkJELElBQUFBLE1BQU0sRUFBRTtBQUhlLEdBQUQsQ0FBeEI7QUFLQWlJLEVBQUFBLFFBQVEsQ0FBQzVHLFFBQVQsQ0FBa0I2RyxTQUFsQjtBQUNBQSxFQUFBQSxTQUFTLENBQUN0SCxLQUFWLEdBQWtCLEdBQWxCO0FBQ0FzSCxFQUFBQSxTQUFTLENBQUNsSixZQUFWLENBQXVCQyxFQUFFLENBQUNjLEtBQTFCLEVBQWlDOEgsUUFBakMsR0FBNEM1SSxFQUFFLENBQUNjLEtBQUgsQ0FBUytILFFBQVQsQ0FBa0JDLGFBQTlEO0FBQ0EsTUFBSUksV0FBVyxHQUFHOUksT0FBTyxDQUFDLDZCQUFELENBQXpCO0FBQ0E0SSxFQUFBQSxRQUFRLENBQUM1RyxRQUFULENBQWtCOEcsV0FBbEI7QUFDQUEsRUFBQUEsV0FBVyxDQUFDckcsQ0FBWixHQUFnQixDQUFDLEdBQWpCO0FBQ0FuRCxFQUFBQSxJQUFJLENBQUMwQyxRQUFMLENBQWNiLEVBQWQ7QUFDQTdCLEVBQUFBLElBQUksQ0FBQzBDLFFBQUwsQ0FBY2lDLE1BQWQ7QUFDQXVELEVBQUFBLFVBQVUsQ0FBQ2xILFlBQVgsQ0FBd0JWLEVBQUUsQ0FBQ3FDLE1BQTNCO0FBQ0F1RixFQUFBQSxVQUFVLENBQUN0RixFQUFYLENBQWMsT0FBZCxFQUF1QixZQUFZO0FBQ2pDNUMsSUFBQUEsSUFBSSxDQUFDNkMsT0FBTDtBQUNELEdBRkQsRUFFRyxJQUZIO0FBR0E4QixFQUFBQSxNQUFNLENBQUMzQixLQUFQLEdBQWVDLGlCQUFpQixDQUFDQyxXQUFqQztBQUNBbEQsRUFBQUEsSUFBSSxDQUFDbUQsQ0FBTCxHQUFTMUIsT0FBTyxDQUFDUSxLQUFSLEdBQWdCLENBQXpCO0FBQ0FqQyxFQUFBQSxJQUFJLENBQUN5QyxDQUFMLEdBQVNoQixPQUFPLENBQUNTLE1BQVIsR0FBaUIsQ0FBMUI7QUFDQTVCLEVBQUFBLEVBQUUsQ0FBQzhDLFFBQUgsQ0FBWUMsUUFBWixHQUF1QlgsUUFBdkIsQ0FBZ0MxQyxJQUFoQztBQUNELENBdkdELEVBdUdHOzs7QUFHSDJCLE1BQU0sQ0FBQzhILHVCQUFQLEdBQWlDLFlBQVk7QUFDM0MsTUFBSUMsTUFBTSxHQUFHLElBQWI7O0FBRUEsTUFBSTFKLElBQUksR0FBR1UsT0FBTyxFQUFsQjtBQUNBLE1BQUltQixFQUFFLEdBQUduQixPQUFPLENBQUMscUJBQUQsQ0FBaEI7QUFDQW1CLEVBQUFBLEVBQUUsQ0FBQ3hCLFlBQUgsQ0FBZ0JDLEVBQUUsQ0FBQ0MsTUFBbkIsRUFBMkJ1QixRQUEzQixHQUFzQ3hCLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVd0IsUUFBVixDQUFtQkMsTUFBekQ7QUFDQUgsRUFBQUEsRUFBRSxDQUFDSSxLQUFILEdBQVdSLE9BQU8sQ0FBQ1EsS0FBbkI7QUFDQUosRUFBQUEsRUFBRSxDQUFDSyxNQUFILEdBQVlULE9BQU8sQ0FBQ1MsTUFBcEIsQ0FQMkMsQ0FPZjs7QUFFNUJMLEVBQUFBLEVBQUUsQ0FBQ2IsWUFBSCxDQUFnQlYsRUFBRSxDQUFDOEIsZ0JBQW5CO0FBQ0EsTUFBSXVDLE1BQU0sR0FBR2pFLE9BQU8sRUFBcEI7QUFDQWlFLEVBQUFBLE1BQU0sQ0FBQ2xDLENBQVAsR0FBV2hCLE9BQU8sQ0FBQ1MsTUFBUixHQUFpQixDQUE1QjtBQUNBLE1BQUl5SCxRQUFRLEdBQUdqSixPQUFPLENBQUMsdUJBQUQsQ0FBdEI7QUFDQSxNQUFJa0osT0FBTyxHQUFHbEosT0FBTyxDQUFDLHNCQUFELENBQXJCO0FBQ0FpSixFQUFBQSxRQUFRLENBQUM1RSxPQUFULEdBQW1CLENBQW5CO0FBQ0E2RSxFQUFBQSxPQUFPLENBQUN6RyxDQUFSLEdBQVksQ0FBQyxHQUFiO0FBQ0F5RyxFQUFBQSxPQUFPLENBQUNuSCxDQUFSLEdBQVksQ0FBQyxFQUFiO0FBQ0FrQyxFQUFBQSxNQUFNLENBQUNqQyxRQUFQLENBQWdCaUgsUUFBaEI7QUFDQWhGLEVBQUFBLE1BQU0sQ0FBQ2pDLFFBQVAsQ0FBZ0JrSCxPQUFoQjtBQUNBLE1BQUlqQixPQUFPLEdBQUcsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixFQUF5QixNQUF6QixFQUFpQyxNQUFqQyxDQUFkO0FBQ0EsTUFBSUMsU0FBUyxHQUFHRCxPQUFPLENBQUMvSCxNQUF4QjtBQUNBLE1BQUlpSixPQUFPLEdBQUcsQ0FBQyxHQUFmOztBQUVBLE9BQUssSUFBSXZELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdzQyxTQUFwQixFQUErQnRDLENBQUMsRUFBaEMsRUFBb0M7QUFDbEMsUUFBSXdELFFBQVEsR0FBR3BKLE9BQU8sQ0FBQ2tJLFNBQVMsR0FBRyxDQUFaLElBQWlCdEMsQ0FBakIsR0FBcUIsRUFBckIsR0FBMEIsd0JBQTNCLENBQXRCO0FBQ0F3RCxJQUFBQSxRQUFRLENBQUNySCxDQUFULEdBQWFvSCxPQUFiO0FBQ0FBLElBQUFBLE9BQU8sSUFBSSxFQUFYO0FBQ0FsRixJQUFBQSxNQUFNLENBQUNqQyxRQUFQLENBQWdCb0gsUUFBaEI7QUFDQSxRQUFJQyxRQUFRLEdBQUc5SSxRQUFRLENBQUM7QUFDdEJPLE1BQUFBLEtBQUssRUFBRUUsVUFEZTtBQUV0QkwsTUFBQUEsTUFBTSxFQUFFc0gsT0FBTyxDQUFDckMsQ0FBRCxDQUZPO0FBR3RCaEYsTUFBQUEsUUFBUSxFQUFFO0FBSFksS0FBRCxDQUF2QjtBQUtBd0ksSUFBQUEsUUFBUSxDQUFDcEgsUUFBVCxDQUFrQnFILFFBQWxCO0FBQ0FBLElBQUFBLFFBQVEsQ0FBQzVHLENBQVQsR0FBYSxDQUFDLEdBQWQ7QUFDQTRHLElBQUFBLFFBQVEsQ0FBQ3RILENBQVQsR0FBYSxFQUFiOztBQUVBLFFBQUltRyxTQUFTLEdBQUcsQ0FBWixJQUFpQnRDLENBQXJCLEVBQXdCO0FBQ3RCLFVBQUkwRCxPQUFPLEdBQUcvSSxRQUFRLENBQUM7QUFDckJPLFFBQUFBLEtBQUssRUFBRUUsVUFEYztBQUVyQkwsUUFBQUEsTUFBTSxFQUFFLE9BRmE7QUFHckJDLFFBQUFBLFFBQVEsRUFBRTtBQUhXLE9BQUQsQ0FBdEI7QUFLQXdJLE1BQUFBLFFBQVEsQ0FBQ3BILFFBQVQsQ0FBa0JzSCxPQUFsQjtBQUNBQSxNQUFBQSxPQUFPLENBQUM3RyxDQUFSLEdBQVksR0FBWjtBQUNBNkcsTUFBQUEsT0FBTyxDQUFDdkgsQ0FBUixHQUFZLEVBQVo7QUFDRCxLQVRELE1BU087QUFDTCxPQUFDLFlBQVk7QUFDWCxZQUFJdUcsT0FBTyxHQUFHdEksT0FBTyxDQUFDLHFCQUFELENBQXJCO0FBQ0FvSixRQUFBQSxRQUFRLENBQUNwSCxRQUFULENBQWtCc0csT0FBbEI7QUFDQUEsUUFBQUEsT0FBTyxDQUFDN0YsQ0FBUixHQUFZLEdBQVo7QUFDQTZGLFFBQUFBLE9BQU8sQ0FBQ3ZHLENBQVIsR0FBWSxFQUFaO0FBQ0F1RyxRQUFBQSxPQUFPLENBQUNLLE1BQVIsR0FBaUIvQyxDQUFqQjtBQUNBMEMsUUFBQUEsT0FBTyxDQUFDaEksWUFBUixDQUFxQlYsRUFBRSxDQUFDcUMsTUFBeEI7QUFDQXFHLFFBQUFBLE9BQU8sQ0FBQ3BHLEVBQVIsQ0FBVyxPQUFYLEVBQW9CLFlBQVk7QUFDOUIsa0JBQVFvRyxPQUFPLENBQUNLLE1BQWhCO0FBQ0UsaUJBQUssQ0FBTDtBQUNFNUMsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBOztBQUVGLGlCQUFLLENBQUw7QUFDRUQsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBOztBQUVGLGlCQUFLLENBQUw7QUFDRUQsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBOztBQUVGLGlCQUFLLENBQUw7QUFDRUQsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBO0FBZko7QUFpQkQsU0FsQkQsRUFrQkdnRCxNQWxCSDtBQW1CRCxPQTFCRDtBQTJCRDtBQUNGOztBQUVERSxFQUFBQSxPQUFPLENBQUM1SSxZQUFSLENBQXFCVixFQUFFLENBQUNxQyxNQUF4QjtBQUNBaUgsRUFBQUEsT0FBTyxDQUFDaEgsRUFBUixDQUFXLE9BQVgsRUFBb0IsWUFBWTtBQUM5QjVDLElBQUFBLElBQUksQ0FBQzZDLE9BQUw7QUFDRCxHQUZELEVBRUcsSUFGSDtBQUdBN0MsRUFBQUEsSUFBSSxDQUFDMEMsUUFBTCxDQUFjYixFQUFkO0FBQ0E3QixFQUFBQSxJQUFJLENBQUMwQyxRQUFMLENBQWNpQyxNQUFkO0FBQ0FBLEVBQUFBLE1BQU0sQ0FBQzNCLEtBQVAsR0FBZUMsaUJBQWlCLENBQUNDLFdBQWpDO0FBQ0FsRCxFQUFBQSxJQUFJLENBQUNtRCxDQUFMLEdBQVMxQixPQUFPLENBQUNRLEtBQVIsR0FBZ0IsQ0FBekI7QUFDQWpDLEVBQUFBLElBQUksQ0FBQ3lDLENBQUwsR0FBU2hCLE9BQU8sQ0FBQ1MsTUFBUixHQUFpQixDQUExQjtBQUNBNUIsRUFBQUEsRUFBRSxDQUFDOEMsUUFBSCxDQUFZQyxRQUFaLEdBQXVCWCxRQUF2QixDQUFnQzFDLElBQWhDO0FBQ0QsQ0F2RkQsRUF1Rkc7OztBQUdIMkIsTUFBTSxDQUFDNkMscUJBQVAsR0FBK0IsWUFBWTtBQUN6QyxNQUFJeEUsSUFBSSxHQUFHVSxPQUFPLEVBQWxCO0FBQ0EsTUFBSW1CLEVBQUUsR0FBR25CLE9BQU8sQ0FBQyxxQkFBRCxDQUFoQjtBQUNBbUIsRUFBQUEsRUFBRSxDQUFDeEIsWUFBSCxDQUFnQkMsRUFBRSxDQUFDQyxNQUFuQixFQUEyQnVCLFFBQTNCLEdBQXNDeEIsRUFBRSxDQUFDQyxNQUFILENBQVV3QixRQUFWLENBQW1CQyxNQUF6RDtBQUNBSCxFQUFBQSxFQUFFLENBQUNJLEtBQUgsR0FBV1IsT0FBTyxDQUFDUSxLQUFuQjtBQUNBSixFQUFBQSxFQUFFLENBQUNLLE1BQUgsR0FBWVQsT0FBTyxDQUFDUyxNQUFwQixDQUx5QyxDQUtiOztBQUU1QkwsRUFBQUEsRUFBRSxDQUFDYixZQUFILENBQWdCVixFQUFFLENBQUM4QixnQkFBbkI7QUFDQSxNQUFJZ0MsVUFBVSxHQUFHMUQsT0FBTyxFQUF4QjtBQUNBLE1BQUkyQixPQUFPLEdBQUczQixPQUFPLEVBQXJCO0FBQ0EsTUFBSTRCLEtBQUssR0FBRzVCLE9BQU8sQ0FBQyx1QkFBRCxDQUFuQjtBQUNBLE1BQUl1SixLQUFLLEdBQUd2SixPQUFPLENBQUMsc0JBQUQsQ0FBbkI7QUFDQSxNQUFJd0osU0FBUyxHQUFHeEosT0FBTyxDQUFDLDBCQUFELENBQXZCO0FBQ0EsTUFBSXlKLE1BQU0sR0FBR3pKLE9BQU8sQ0FBQyx1QkFBRCxDQUFwQjtBQUNBLE1BQUltRCxJQUFJLEdBQUdDLGtCQUFrQixDQUFDQyxjQUFuQixDQUFrQyxxQkFBbEMsRUFBeUQsQ0FBekQsQ0FBWDtBQUNBLE1BQUlxRyxVQUFVLEdBQUduSixRQUFRLENBQUM7QUFDeEJJLElBQUFBLE1BQU0sRUFBRXdDLElBRGdCO0FBRXhCdkMsSUFBQUEsUUFBUSxFQUFFO0FBRmMsR0FBRCxDQUF6QjtBQUlBLE1BQUkrSSxTQUFTLEdBQUczSixPQUFPLENBQUMsd0JBQUQsQ0FBdkI7QUFDQSxNQUFJNEosU0FBUyxHQUFHNUosT0FBTyxDQUFDLHdCQUFELENBQXZCO0FBQ0EsTUFBSTZKLFNBQVMsR0FBR3RKLFFBQVEsQ0FBQztBQUN2QkksSUFBQUEsTUFBTSxFQUFFLElBRGU7QUFFdkJHLElBQUFBLEtBQUssRUFBRUUsVUFGZ0I7QUFHdkJKLElBQUFBLFFBQVEsRUFBRTtBQUhhLEdBQUQsQ0FBeEI7QUFLQSxNQUFJa0osT0FBTyxHQUFHLFNBQWQ7QUFDQSxNQUFJQyxVQUFVLEdBQUcsWUFBakI7QUFDQSxNQUFJQyxRQUFRLEdBQUd6SixRQUFRLENBQUM7QUFDdEJJLElBQUFBLE1BQU0sRUFBRSxRQUFRbUosT0FETTtBQUV0QmhKLElBQUFBLEtBQUssRUFBRUUsVUFGZTtBQUd0QkosSUFBQUEsUUFBUSxFQUFFO0FBSFksR0FBRCxDQUF2QjtBQUtBLE1BQUlxSixXQUFXLEdBQUcxSixRQUFRLENBQUM7QUFDekJJLElBQUFBLE1BQU0sRUFBRSxTQUFTb0osVUFEUTtBQUV6QmpKLElBQUFBLEtBQUssRUFBRUUsVUFGa0I7QUFHekJKLElBQUFBLFFBQVEsRUFBRTtBQUhlLEdBQUQsQ0FBMUI7QUFLQSxNQUFJc0osV0FBVyxHQUFHbEssT0FBTyxDQUFDLHdCQUFELENBQXpCO0FBQ0EsTUFBSW1LLGNBQWMsR0FBR25LLE9BQU8sQ0FBQyx3QkFBRCxDQUE1QjtBQUNBLE1BQUlvSyxhQUFhLEdBQUdwSyxPQUFPLENBQUMseUJBQUQsQ0FBM0I7QUFDQTJKLEVBQUFBLFNBQVMsQ0FBQ2xILENBQVYsR0FBYyxDQUFDLEdBQWY7QUFDQWtILEVBQUFBLFNBQVMsQ0FBQzVILENBQVYsR0FBYyxHQUFkO0FBQ0E2SCxFQUFBQSxTQUFTLENBQUNuSCxDQUFWLEdBQWMsQ0FBQyxHQUFmO0FBQ0FtSCxFQUFBQSxTQUFTLENBQUM3SCxDQUFWLEdBQWM0SCxTQUFTLENBQUM1SCxDQUF4QjtBQUNBcUksRUFBQUEsYUFBYSxDQUFDM0gsQ0FBZCxHQUFrQixHQUFsQjtBQUNBMkgsRUFBQUEsYUFBYSxDQUFDckksQ0FBZCxHQUFrQjRILFNBQVMsQ0FBQzVILENBQTVCO0FBQ0E4SCxFQUFBQSxTQUFTLENBQUNwSCxDQUFWLEdBQWMsRUFBZDtBQUNBb0gsRUFBQUEsU0FBUyxDQUFDOUgsQ0FBVixHQUFjLEVBQWQ7QUFDQWlJLEVBQUFBLFFBQVEsQ0FBQ3ZILENBQVQsR0FBYW9ILFNBQVMsQ0FBQ3BILENBQXZCO0FBQ0F1SCxFQUFBQSxRQUFRLENBQUNqSSxDQUFULEdBQWEsQ0FBQyxFQUFkO0FBQ0FrSSxFQUFBQSxXQUFXLENBQUN4SCxDQUFaLEdBQWdCb0gsU0FBUyxDQUFDcEgsQ0FBMUI7QUFDQXdILEVBQUFBLFdBQVcsQ0FBQ2xJLENBQVosR0FBZ0IsQ0FBQyxFQUFqQjtBQUNBbUksRUFBQUEsV0FBVyxDQUFDekgsQ0FBWixHQUFnQixHQUFoQjtBQUNBeUgsRUFBQUEsV0FBVyxDQUFDbkksQ0FBWixHQUFnQmlJLFFBQVEsQ0FBQ2pJLENBQXpCO0FBQ0FvSSxFQUFBQSxjQUFjLENBQUMxSCxDQUFmLEdBQW1CeUgsV0FBVyxDQUFDekgsQ0FBL0I7QUFDQTBILEVBQUFBLGNBQWMsQ0FBQ3BJLENBQWYsR0FBbUJrSSxXQUFXLENBQUNsSSxDQUEvQjtBQUNBOEgsRUFBQUEsU0FBUyxDQUFDakYsT0FBVixHQUFvQixDQUFwQjtBQUNBb0YsRUFBQUEsUUFBUSxDQUFDcEYsT0FBVCxHQUFtQixDQUFuQjtBQUNBcUYsRUFBQUEsV0FBVyxDQUFDckYsT0FBWixHQUFzQixDQUF0QjtBQUNBd0YsRUFBQUEsYUFBYSxDQUFDeEYsT0FBZCxHQUF3QixDQUF4QjtBQUNBOEUsRUFBQUEsVUFBVSxDQUFDakgsQ0FBWCxHQUFlLEVBQWY7QUFDQWlILEVBQUFBLFVBQVUsQ0FBQzNILENBQVgsR0FBZSxDQUFDLEVBQWhCO0FBQ0FKLEVBQUFBLE9BQU8sQ0FBQ0ssUUFBUixDQUFpQkosS0FBakI7QUFDQUQsRUFBQUEsT0FBTyxDQUFDSyxRQUFSLENBQWlCdUgsS0FBakI7QUFDQTVILEVBQUFBLE9BQU8sQ0FBQ0ssUUFBUixDQUFpQndILFNBQWpCO0FBQ0E3SCxFQUFBQSxPQUFPLENBQUNLLFFBQVIsQ0FBaUJ5SCxNQUFqQjtBQUNBOUgsRUFBQUEsT0FBTyxDQUFDSyxRQUFSLENBQWlCMEgsVUFBakI7QUFDQS9ILEVBQUFBLE9BQU8sQ0FBQ0ssUUFBUixDQUFpQjRILFNBQWpCO0FBQ0FBLEVBQUFBLFNBQVMsQ0FBQzVILFFBQVYsQ0FBbUI2SCxTQUFuQjtBQUNBRCxFQUFBQSxTQUFTLENBQUM1SCxRQUFWLENBQW1CZ0ksUUFBbkI7QUFDQUosRUFBQUEsU0FBUyxDQUFDNUgsUUFBVixDQUFtQmlJLFdBQW5CO0FBQ0FMLEVBQUFBLFNBQVMsQ0FBQzVILFFBQVYsQ0FBbUJrSSxXQUFuQjtBQUNBTixFQUFBQSxTQUFTLENBQUM1SCxRQUFWLENBQW1CbUksY0FBbkI7QUFDQXhJLEVBQUFBLE9BQU8sQ0FBQ0ssUUFBUixDQUFpQm9JLGFBQWpCO0FBQ0F6SSxFQUFBQSxPQUFPLENBQUNLLFFBQVIsQ0FBaUIySCxTQUFqQjtBQUNBSixFQUFBQSxLQUFLLENBQUM5RyxDQUFOLEdBQVUsQ0FBQyxHQUFYO0FBQ0E4RyxFQUFBQSxLQUFLLENBQUN4SCxDQUFOLEdBQVUsQ0FBQyxHQUFYO0FBQ0F5SCxFQUFBQSxTQUFTLENBQUN6SCxDQUFWLEdBQWMsQ0FBQyxHQUFmO0FBQ0EwSCxFQUFBQSxNQUFNLENBQUNoSCxDQUFQLEdBQVcsR0FBWDtBQUNBZ0gsRUFBQUEsTUFBTSxDQUFDMUgsQ0FBUCxHQUFXLENBQUMsR0FBWjtBQUNBekMsRUFBQUEsSUFBSSxDQUFDMEMsUUFBTCxDQUFjYixFQUFkO0FBQ0E3QixFQUFBQSxJQUFJLENBQUMwQyxRQUFMLENBQWNMLE9BQWQ7QUFDQXJDLEVBQUFBLElBQUksQ0FBQzBDLFFBQUwsQ0FBYzBCLFVBQWQ7QUFDQSxNQUFJQyxZQUFZLEdBQUczRCxPQUFPLENBQUMsbUJBQUQsQ0FBMUI7QUFDQTJELEVBQUFBLFlBQVksQ0FBQ2hFLFlBQWIsQ0FBMEJDLEVBQUUsQ0FBQ0MsTUFBN0IsRUFBcUN1QixRQUFyQyxHQUFnRHhCLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVd0IsUUFBVixDQUFtQkMsTUFBbkU7QUFDQXFDLEVBQUFBLFlBQVksQ0FBQ3BDLEtBQWIsR0FBcUIsR0FBckI7QUFDQW9DLEVBQUFBLFlBQVksQ0FBQ25DLE1BQWIsR0FBc0IsR0FBdEI7QUFDQWtDLEVBQUFBLFVBQVUsQ0FBQzFCLFFBQVgsQ0FBb0IyQixZQUFwQjtBQUNBQSxFQUFBQSxZQUFZLENBQUNsQyxPQUFiLEdBQXVCLEdBQXZCOztBQUVBLE1BQUksS0FBS1YsT0FBTyxDQUFDUyxNQUFSLEdBQWlCVCxPQUFPLENBQUNRLEtBQXpCLElBQWtDZ0IsaUJBQWlCLENBQUNxQixnQkFBbEIsQ0FBbUM7QUFDNUV0RSxJQUFBQSxJQUFJLEVBQUVvRSxVQURzRTtBQUU1RUcsSUFBQUEsTUFBTSxFQUFFO0FBRm9FLEdBQW5DLENBQTNDLEVBR0k7QUFDRmxDLElBQUFBLE9BQU8sQ0FBQ0ksQ0FBUixHQUFZLEdBQVo7QUFDRCxHQUxELE1BS087QUFDTDJCLElBQUFBLFVBQVUsQ0FBQ1gsTUFBWCxHQUFvQixLQUFwQjtBQUNEOztBQUVEVyxFQUFBQSxVQUFVLENBQUMzQixDQUFYLEdBQWUsQ0FBQyxHQUFoQjtBQUNBNEgsRUFBQUEsU0FBUyxDQUFDckosWUFBVixDQUF1QlYsRUFBRSxDQUFDcUMsTUFBMUI7QUFDQTBILEVBQUFBLFNBQVMsQ0FBQ3pILEVBQVYsQ0FBYSxPQUFiLEVBQXNCLFlBQVk7QUFDaEM1QyxJQUFBQSxJQUFJLENBQUM2QyxPQUFMO0FBQ0QsR0FGRCxFQUVHLElBRkg7QUFHQStILEVBQUFBLFdBQVcsQ0FBQzVKLFlBQVosQ0FBeUJWLEVBQUUsQ0FBQ3FDLE1BQTVCO0FBQ0FpSSxFQUFBQSxXQUFXLENBQUNoSSxFQUFaLENBQWUsT0FBZixFQUF3QixZQUFZO0FBQ2xDNkQsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVk4RCxPQUFaO0FBQ0QsR0FGRCxFQUVHLElBRkg7QUFHQUssRUFBQUEsY0FBYyxDQUFDN0osWUFBZixDQUE0QlYsRUFBRSxDQUFDcUMsTUFBL0I7QUFDQWtJLEVBQUFBLGNBQWMsQ0FBQ2pJLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMkIsWUFBWTtBQUNyQzZELElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZK0QsVUFBWjtBQUNELEdBRkQsRUFFRyxJQUZIO0FBR0FLLEVBQUFBLGFBQWEsQ0FBQzlKLFlBQWQsQ0FBMkJWLEVBQUUsQ0FBQ3FDLE1BQTlCO0FBQ0FtSSxFQUFBQSxhQUFhLENBQUNsSSxFQUFkLENBQWlCLE9BQWpCLEVBQTBCLFlBQVk7QUFDcENtSSxJQUFBQSxzQkFBc0I7QUFDdkIsR0FGRCxFQUVHLElBRkg7QUFHQXpJLEVBQUFBLEtBQUssQ0FBQ3RCLFlBQU4sQ0FBbUJWLEVBQUUsQ0FBQ3FDLE1BQXRCO0FBQ0FMLEVBQUFBLEtBQUssQ0FBQ00sRUFBTixDQUFTLE9BQVQsRUFBa0IsWUFBWTtBQUM1QjZCLElBQUFBLHVCQUF1QjtBQUN4QixHQUZELEVBRUcsSUFGSDtBQUdBd0YsRUFBQUEsS0FBSyxDQUFDakosWUFBTixDQUFtQlYsRUFBRSxDQUFDcUMsTUFBdEI7QUFDQXNILEVBQUFBLEtBQUssQ0FBQ3JILEVBQU4sQ0FBUyxPQUFULEVBQWtCLFlBQVk7QUFDNUI2QixJQUFBQSx1QkFBdUI7QUFDeEIsR0FGRCxFQUVHLElBRkg7QUFHQXlGLEVBQUFBLFNBQVMsQ0FBQ2xKLFlBQVYsQ0FBdUJWLEVBQUUsQ0FBQ3FDLE1BQTFCO0FBQ0F1SCxFQUFBQSxTQUFTLENBQUN0SCxFQUFWLENBQWEsT0FBYixFQUFzQixZQUFZO0FBQ2hDbUYsSUFBQUEsdUJBQXVCO0FBQ3hCLEdBRkQsRUFFRyxJQUZIO0FBR0FvQyxFQUFBQSxNQUFNLENBQUNuSixZQUFQLENBQW9CVixFQUFFLENBQUNxQyxNQUF2QjtBQUNBd0gsRUFBQUEsTUFBTSxDQUFDdkgsRUFBUCxDQUFVLE9BQVYsRUFBbUIsWUFBWTtBQUM3QjZHLElBQUFBLHVCQUF1QjtBQUN4QixHQUZELEVBRUcsSUFGSDtBQUdBcEgsRUFBQUEsT0FBTyxDQUFDVyxLQUFSLEdBQWdCQyxpQkFBaUIsQ0FBQ0MsV0FBbEM7QUFDQWxELEVBQUFBLElBQUksQ0FBQ21ELENBQUwsR0FBUzFCLE9BQU8sQ0FBQ1EsS0FBUixHQUFnQixDQUF6QjtBQUNBakMsRUFBQUEsSUFBSSxDQUFDeUMsQ0FBTCxHQUFTaEIsT0FBTyxDQUFDUyxNQUFSLEdBQWlCLENBQTFCO0FBQ0E1QixFQUFBQSxFQUFFLENBQUM4QyxRQUFILENBQVlDLFFBQVosR0FBdUJYLFFBQXZCLENBQWdDMUMsSUFBaEM7QUFDRCxDQXpJRCxFQXlJRzs7O0FBR0gyQixNQUFNLENBQUNvSixzQkFBUCxHQUFnQyxZQUFZO0FBQzFDLE1BQUkvSyxJQUFJLEdBQUdVLE9BQU8sRUFBbEI7QUFDQSxNQUFJbUIsRUFBRSxHQUFHbkIsT0FBTyxDQUFDLG1CQUFELENBQWhCO0FBQ0FtQixFQUFBQSxFQUFFLENBQUN4QixZQUFILENBQWdCQyxFQUFFLENBQUNDLE1BQW5CLEVBQTJCdUIsUUFBM0IsR0FBc0N4QixFQUFFLENBQUNDLE1BQUgsQ0FBVXdCLFFBQVYsQ0FBbUJDLE1BQXpEO0FBQ0FILEVBQUFBLEVBQUUsQ0FBQ0ksS0FBSCxHQUFXUixPQUFPLENBQUNRLEtBQW5CO0FBQ0FKLEVBQUFBLEVBQUUsQ0FBQ0ssTUFBSCxHQUFZVCxPQUFPLENBQUNTLE1BQXBCO0FBQ0FMLEVBQUFBLEVBQUUsQ0FBQ00sT0FBSCxHQUFhLEdBQWI7QUFDQU4sRUFBQUEsRUFBRSxDQUFDYixZQUFILENBQWdCVixFQUFFLENBQUM4QixnQkFBbkI7QUFDQSxNQUFJNEksS0FBSyxHQUFHdEssT0FBTyxFQUFuQjtBQUNBLE1BQUl1SyxPQUFPLEdBQUd2SyxPQUFPLENBQUMsc0JBQUQsQ0FBckI7QUFDQSxNQUFJd0ssU0FBUyxHQUFHeEssT0FBTyxFQUF2QjtBQUNBLE1BQUl5SyxPQUFPLEdBQUd6SyxPQUFPLENBQUMsc0JBQUQsQ0FBckI7QUFDQXdLLEVBQUFBLFNBQVMsQ0FBQ3pJLENBQVYsR0FBYyxDQUFDLEVBQWY7QUFDQTBJLEVBQUFBLE9BQU8sQ0FBQzFJLENBQVIsR0FBWSxDQUFDLEdBQWI7QUFDQXVJLEVBQUFBLEtBQUssQ0FBQ3RJLFFBQU4sQ0FBZXVJLE9BQWY7QUFDQUQsRUFBQUEsS0FBSyxDQUFDdEksUUFBTixDQUFld0ksU0FBZjtBQUNBRixFQUFBQSxLQUFLLENBQUN0SSxRQUFOLENBQWV5SSxPQUFmO0FBQ0EsTUFBSUMsZUFBZSxHQUFHMUssT0FBTyxDQUFDLHdCQUFELENBQTdCO0FBQ0EsTUFBSTJLLGNBQWMsR0FBR3BLLFFBQVEsQ0FBQztBQUM1Qk8sSUFBQUEsS0FBSyxFQUFFRSxVQURxQjtBQUU1QkosSUFBQUEsUUFBUSxFQUFFO0FBRmtCLEdBQUQsQ0FBN0I7QUFJQStKLEVBQUFBLGNBQWMsQ0FBQ2hMLFlBQWYsQ0FBNEJDLEVBQUUsQ0FBQ2MsS0FBL0IsRUFBc0M4SCxRQUF0QyxHQUFpRDVJLEVBQUUsQ0FBQ2MsS0FBSCxDQUFTK0gsUUFBVCxDQUFrQm1DLEtBQW5FO0FBQ0FELEVBQUFBLGNBQWMsQ0FBQ2hMLFlBQWYsQ0FBNEJDLEVBQUUsQ0FBQ2MsS0FBL0IsRUFBc0NtSyxlQUF0QyxHQUF3RGpMLEVBQUUsQ0FBQ2MsS0FBSCxDQUFTb0ssZUFBVCxDQUF5QkMsTUFBakY7QUFDQUosRUFBQUEsY0FBYyxDQUFDaEwsWUFBZixDQUE0QkMsRUFBRSxDQUFDYyxLQUEvQixFQUFzQ3NLLGFBQXRDLEdBQXNEcEwsRUFBRSxDQUFDYyxLQUFILENBQVN1SyxhQUFULENBQXVCRixNQUE3RTtBQUNBUCxFQUFBQSxTQUFTLENBQUN4SSxRQUFWLENBQW1CMEksZUFBbkI7QUFDQUYsRUFBQUEsU0FBUyxDQUFDeEksUUFBVixDQUFtQjJJLGNBQW5CO0FBQ0FILEVBQUFBLFNBQVMsQ0FBQ2pKLEtBQVYsR0FBa0IsR0FBbEI7QUFDQWlKLEVBQUFBLFNBQVMsQ0FBQ2hKLE1BQVYsR0FBbUIsRUFBbkI7QUFDQW1KLEVBQUFBLGNBQWMsQ0FBQ3BKLEtBQWYsR0FBdUJpSixTQUFTLENBQUNqSixLQUFqQztBQUNBb0osRUFBQUEsY0FBYyxDQUFDbkosTUFBZixHQUF3QmdKLFNBQVMsQ0FBQ2hKLE1BQWxDO0FBQ0FtSixFQUFBQSxjQUFjLENBQUMvRixPQUFmLEdBQXlCLENBQXpCO0FBQ0ErRixFQUFBQSxjQUFjLENBQUMvRixPQUFmLEdBQXlCLENBQXpCO0FBQ0ErRixFQUFBQSxjQUFjLENBQUNsSSxDQUFmLEdBQW1CLENBQUMrSCxTQUFTLENBQUNqSixLQUFYLEdBQW1CLENBQXRDO0FBQ0FvSixFQUFBQSxjQUFjLENBQUM1SSxDQUFmLEdBQW1CeUksU0FBUyxDQUFDaEosTUFBVixHQUFtQixDQUF0QztBQUNBZ0osRUFBQUEsU0FBUyxDQUFDbEssWUFBVixDQUF1QlYsRUFBRSxDQUFDc0wsT0FBMUI7QUFDQVYsRUFBQUEsU0FBUyxDQUFDN0ssWUFBVixDQUF1QkMsRUFBRSxDQUFDc0wsT0FBMUIsRUFBbUNDLFNBQW5DLEdBQStDLEVBQS9DO0FBQ0FYLEVBQUFBLFNBQVMsQ0FBQzdLLFlBQVYsQ0FBdUJDLEVBQUUsQ0FBQ3NMLE9BQTFCLEVBQW1DRSxTQUFuQyxHQUErQ3hMLEVBQUUsQ0FBQ3NMLE9BQUgsQ0FBV0csU0FBWCxDQUFxQkMsV0FBcEU7QUFDQWQsRUFBQUEsU0FBUyxDQUFDN0ssWUFBVixDQUF1QkMsRUFBRSxDQUFDc0wsT0FBMUIsRUFBbUNLLFVBQW5DLEdBQWdEYixlQUFlLENBQUMvSyxZQUFoQixDQUE2QkMsRUFBRSxDQUFDQyxNQUFoQyxDQUFoRDtBQUNBMkssRUFBQUEsU0FBUyxDQUFDN0ssWUFBVixDQUF1QkMsRUFBRSxDQUFDc0wsT0FBMUIsRUFBbUNNLFNBQW5DLEdBQStDYixjQUFjLENBQUNoTCxZQUFmLENBQTRCQyxFQUFFLENBQUNjLEtBQS9CLENBQS9DO0FBQ0ErSixFQUFBQSxPQUFPLENBQUNuSyxZQUFSLENBQXFCVixFQUFFLENBQUNxQyxNQUF4QjtBQUNBd0ksRUFBQUEsT0FBTyxDQUFDdkksRUFBUixDQUFXLE9BQVgsRUFBb0IsWUFBWTtBQUM5QjZELElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVF3RSxTQUFTLENBQUM3SyxZQUFWLENBQXVCQyxFQUFFLENBQUNzTCxPQUExQixFQUFtQ3ZLLE1BQXZEO0FBQ0QsR0FGRCxFQUVHLElBRkg7QUFHQVEsRUFBQUEsRUFBRSxDQUFDYixZQUFILENBQWdCVixFQUFFLENBQUNxQyxNQUFuQjtBQUNBZCxFQUFBQSxFQUFFLENBQUNlLEVBQUgsQ0FBTSxPQUFOLEVBQWUsWUFBWTtBQUN6QjVDLElBQUFBLElBQUksQ0FBQzZDLE9BQUw7QUFDRCxHQUZELEVBRUcsSUFGSDtBQUdBN0MsRUFBQUEsSUFBSSxDQUFDMEMsUUFBTCxDQUFjYixFQUFkO0FBQ0E3QixFQUFBQSxJQUFJLENBQUMwQyxRQUFMLENBQWNzSSxLQUFkO0FBQ0FBLEVBQUFBLEtBQUssQ0FBQ2hJLEtBQU4sR0FBY0MsaUJBQWlCLENBQUNDLFdBQWhDO0FBQ0FsRCxFQUFBQSxJQUFJLENBQUNtRCxDQUFMLEdBQVMxQixPQUFPLENBQUNRLEtBQVIsR0FBZ0IsQ0FBekI7QUFDQWpDLEVBQUFBLElBQUksQ0FBQ3lDLENBQUwsR0FBU2hCLE9BQU8sQ0FBQ1MsTUFBUixHQUFpQixDQUExQjtBQUNBNUIsRUFBQUEsRUFBRSxDQUFDOEMsUUFBSCxDQUFZQyxRQUFaLEdBQXVCWCxRQUF2QixDQUFnQzFDLElBQWhDO0FBQ0QsQ0F0REQsRUFzREc7OztBQUdIMkIsTUFBTSxDQUFDd0sscUJBQVAsR0FBK0IsWUFBWTtBQUN6QyxNQUFJbk0sSUFBSSxHQUFHVSxPQUFPLEVBQWxCO0FBQ0EsTUFBSTBMLE9BQU8sR0FBRzFMLE9BQU8sQ0FBQyx5QkFBRCxDQUFyQjtBQUNBLE1BQUkyTCxNQUFNLEdBQUczTCxPQUFPLENBQUMsb0JBQUQsQ0FBcEI7QUFDQVYsRUFBQUEsSUFBSSxDQUFDMEMsUUFBTCxDQUFjMEosT0FBZDtBQUNBcE0sRUFBQUEsSUFBSSxDQUFDMEMsUUFBTCxDQUFjMkosTUFBZDtBQUNBck0sRUFBQUEsSUFBSSxDQUFDc00sU0FBTCxDQUFlaE0sRUFBRSxDQUFDaU0sYUFBSCxDQUFpQmpNLEVBQUUsQ0FBQ2tNLEtBQUgsQ0FBU2xNLEVBQUUsQ0FBQ21NLFFBQUgsQ0FBWW5NLEVBQUUsQ0FBQ29NLE9BQUgsQ0FBVyxHQUFYLEVBQWdCLEdBQWhCLEVBQXFCLENBQXJCLENBQVosRUFBcUNwTSxFQUFFLENBQUNvTSxPQUFILENBQVcsR0FBWCxFQUFnQixHQUFoQixFQUFxQixDQUFyQixDQUFyQyxDQUFULEVBQXdFcE0sRUFBRSxDQUFDbU0sUUFBSCxDQUFZbk0sRUFBRSxDQUFDcU0sUUFBSCxDQUFZLEdBQVosRUFBaUIsQ0FBQyxFQUFsQixDQUFaLEVBQW1Dck0sRUFBRSxDQUFDcU0sUUFBSCxDQUFZLEdBQVosRUFBaUIsQ0FBakIsQ0FBbkMsQ0FBeEUsQ0FBakIsQ0FBZjtBQUNBM00sRUFBQUEsSUFBSSxDQUFDaUMsS0FBTCxHQUFhLEdBQWI7QUFDQWpDLEVBQUFBLElBQUksQ0FBQ2tDLE1BQUwsR0FBYyxHQUFkO0FBQ0FsQyxFQUFBQSxJQUFJLENBQUNnQixZQUFMLENBQWtCVixFQUFFLENBQUNxQyxNQUFyQjtBQUNBM0MsRUFBQUEsSUFBSSxDQUFDNEMsRUFBTCxDQUFRLE9BQVIsRUFBaUIsWUFBWTtBQUMzQkUsSUFBQUEsMkJBQTJCLENBQUM7QUFDMUJDLE1BQUFBLElBQUksRUFBRTtBQURvQixLQUFELENBQTNCO0FBR0EvQyxJQUFBQSxJQUFJLENBQUM2QyxPQUFMO0FBQ0QsR0FMRCxFQUtHLElBTEg7QUFNQSxTQUFPN0MsSUFBUDtBQUNELENBakJELEVBaUJHOzs7QUFHSDJCLE1BQU0sQ0FBQ2lMLGtCQUFQLEdBQTRCLFlBQVk7QUFDdEMsTUFBSTVNLElBQUksR0FBR1UsT0FBTyxDQUFDLHVCQUFELENBQWxCO0FBQ0FWLEVBQUFBLElBQUksQ0FBQ2dCLFlBQUwsQ0FBa0JWLEVBQUUsQ0FBQ3FDLE1BQXJCO0FBQ0EzQyxFQUFBQSxJQUFJLENBQUM0QyxFQUFMLENBQVEsT0FBUixFQUFpQixZQUFZO0FBQzNCNEIsSUFBQUEscUJBQXFCLEdBRE0sQ0FFM0I7QUFDRCxHQUhELEVBR0csSUFISDtBQUlBLFNBQU94RSxJQUFQO0FBQ0QsQ0FSRCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGxvYWRSZXMgPSBmdW5jdGlvbiBsb2FkUmVzKG5vZGUsIHVybCkge1xuICBsaWV5b3VfbG9hZCh1cmwsIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcbiAgICBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xuICB9KTtcbn07XG5cbnZhciBnZXROb2RlID0gZnVuY3Rpb24gZ2V0Tm9kZSgpIHtcbiAgdmFyIHVybCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogXCJcIjtcbiAgdmFyIGxvYWRTdWNjZXNzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICB2YXIgbm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG5cbiAgaWYgKHVybCAhPSBcIlwiKSB7XG4gICAgaWYgKCFub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpKSB7XG4gICAgICBub2RlLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgIH1cblxuICAgIGxpZXlvdV9sb2FkKHVybCwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xuICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcblxuICAgICAgaWYgKGxvYWRTdWNjZXNzKSB7XG4gICAgICAgIGxvYWRTdWNjZXNzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn07XG5cbnZhciBnZXRMYWJlbCA9IGZ1bmN0aW9uIGdldExhYmVsKCkge1xuICB2YXIgb2JqID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIG5vZGUgPSBnZXROb2RlKCk7XG4gIHZhciBsYWJlbCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcbiAgKG9iai5zdHJpbmchPXVuZGVmaW5lZCkgJiYgKGxhYmVsLnN0cmluZyA9IG9iai5zdHJpbmcpO1xuICBvYmouZm9udFNpemUgJiYgKGxhYmVsLmZvbnRTaXplID0gb2JqLmZvbnRTaXplLCBsYWJlbC5saW5lSGVpZ2h0ID0gb2JqLmZvbnRTaXplKTtcbiAgb2JqLmNvbG9yICYmIChub2RlLmNvbG9yID0gb2JqLmNvbG9yKTtcbiAgcmV0dXJuIG5vZGU7XG59O1xuXG52YXIgd2luU2l6ZSA9IGNjLndpblNpemU7XG52YXIgY29sb3JfZ3JleSA9IGNjLmNvbG9yKDM2LCAzNiwgMzYpOyAvL+aYvuekuue6ouWMhemhtemdolxuXG53aW5kb3cubGlleW91X3Nob3dSZWRQYWNrRGlhbG9nID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbm9kZSA9IGdldE5vZGUoKTtcbiAgdmFyIGJnID0gZ2V0Tm9kZShcInJlZFBhY2svYmxhY2sucG5nXCIpO1xuICBiZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XG4gIGJnLndpZHRoID0gd2luU2l6ZS53aWR0aDtcbiAgYmcuaGVpZ2h0ID0gd2luU2l6ZS5oZWlnaHQ7XG4gIGJnLm9wYWNpdHkgPSAxNTA7XG4gIGJnLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcbiAgdmFyIHJlZE5vZGUgPSBnZXROb2RlKCk7XG4gIHZhciByZWRCZyA9IGdldE5vZGUoXCJyZWRQYWNrL3JlZFBhY2tfYmcucG5nXCIpO1xuICB2YXIgcmVkdmlkZW8gPSBnZXROb2RlKFwicmVkUGFjay9yZWRQYWNrX3ZpZGVvLnBuZ1wiKTtcbiAgdmFyIHJlZENsb3NlID0gZ2V0Tm9kZShcInJlZFBhY2svcmVkUGFja19jbG9zZS5wbmdcIik7XG4gIHJlZHZpZGVvLnkgPSAtMTUwO1xuICByZWRDbG9zZS55ID0gLTUwMDtcbiAgcmVkTm9kZS5hZGRDaGlsZChyZWRCZyk7XG4gIHJlZE5vZGUuYWRkQ2hpbGQocmVkdmlkZW8pO1xuICByZWROb2RlLmFkZENoaWxkKHJlZENsb3NlKTtcbiAgcmVkTm9kZS55ID0gMTAwO1xuICBub2RlLmFkZENoaWxkKGJnKTtcbiAgbm9kZS5hZGRDaGlsZChyZWROb2RlKTtcbiAgcmVkQ2xvc2UuYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XG4gIHJlZENsb3NlLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIG5vZGUuZGVzdHJveSgpO1xuICB9LCB0aGlzKTtcbiAgcmVkdmlkZW8uYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XG4gIHJlZHZpZGVvLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGxpZXlvdV9zaG93UmVjZWl2ZVJlZERpYWxvZyh7XG4gICAgICB0eXBlOiAyXG4gICAgfSk7XG4gICAgbm9kZS5kZXN0cm95KCk7XG4gIH0sIHRoaXMpO1xuICByZWROb2RlLnNjYWxlID0gbGlleW91X1Nka01hbmFnZXIuX1NjZW5lU2NhbGU7XG4gIG5vZGUueCA9IHdpblNpemUud2lkdGggLyAyO1xuICBub2RlLnkgPSB3aW5TaXplLmhlaWdodCAvIDI7XG4gIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQobm9kZSk7XG59OyAvL+aYvuekuuiOt+W+l+e6ouWMhemhtemdolxuXG5cbndpbmRvdy5saWV5b3Vfc2hvd1JlY2VpdmVSZWREaWFsb2cgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBvYmogPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgdHlwZSA9IG9iai50eXBlO1xuICB2YXIgbm9kZSA9IGdldE5vZGUoKTtcbiAgdmFyIGJnID0gZ2V0Tm9kZShcInJlZFBhY2svYmxhY2sucG5nXCIpO1xuICBiZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XG4gIGJnLndpZHRoID0gd2luU2l6ZS53aWR0aDtcbiAgYmcuaGVpZ2h0ID0gd2luU2l6ZS5oZWlnaHQ7XG4gIGJnLm9wYWNpdHkgPSAxNTA7XG4gIGJnLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcbiAgdmFyIHJlZE5vZGUgPSBnZXROb2RlKCk7XG4gIHZhciByZWRCZyA9IGdldE5vZGUoXCJyZWRQYWNrL3JlY2VpdmVfYmcucG5nXCIpO1xuICB2YXIgcmVkQ2xvc2UgPSBnZXROb2RlKFwicmVkUGFjay9yZWNlaXZlX2Nsb3NlLnBuZ1wiKTtcbiAgdmFyIHJlZERvdWJsZSA9IGdldE5vZGUoXCJyZWRQYWNrL3JlY2VpdmVfZG91YmxlLnBuZ1wiKTtcbiAgdmFyIHJlZFRpeGlhbiA9IGdldE5vZGUoXCJyZWRQYWNrL3JlY2VpdmVfdGl4aWFuLnBuZ1wiKTtcbiAgdmFyIHJlY2VpdmVNb25leU51bSA9IDAuMTtcblxuICBpZiAodHlwZSA9PSAxKSB7XG4gICAgcmVkVGl4aWFuLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHJlY2VpdmVNb25leU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQwICsgMTApIC8gMTAwO1xuICB9IGVsc2UgaWYgKHR5cGUgPT0gMikge1xuICAgIHJlZERvdWJsZS5hY3RpdmUgPSBmYWxzZTtcbiAgICByZWNlaXZlTW9uZXlOdW0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA1MCArIDUwKSAvIDEwMDtcbiAgfVxuXG4gIHZhciBhbGxNID0gbGlleW91X1VzZXJkZWZhdWx0LmdldEZsb2F0Rm9yS2V5KFwibGlleW91X3JlZFBhY2tNb25leVwiLCAwKTtcbiAgdmFyIGFsbE1vbmV5TnVtID0gcmVjZWl2ZU1vbmV5TnVtICsgYWxsTTtcbiAgbGlleW91X1VzZXJkZWZhdWx0LnNldERhdGFGb3JLZXkoXCJsaWV5b3VfcmVkUGFja01vbmV5XCIsIGFsbE1vbmV5TnVtKTtcbiAgdmFyIHJlY2VpdmVNb25leSA9IGdldExhYmVsKHtcbiAgICBzdHJpbmc6IHJlY2VpdmVNb25leU51bSArIFwi5YWDXCIsXG4gICAgZm9udFNpemU6IDUwLFxuICAgIGNvbG9yOiBjYy5jb2xvcigyMjMsIDgzLCA1MilcbiAgfSk7XG4gIHZhciBhbGxNb25leSA9IGdldExhYmVsKHtcbiAgICBzdHJpbmc6IGFsbE1vbmV5TnVtICsgXCLlhYNcIixcbiAgICBmb250U2l6ZTogMzAsXG4gICAgY29sb3I6IGNjLmNvbG9yKDI0NCwgMTM2LCA4NSlcbiAgfSk7XG4gIHJlZENsb3NlLnkgPSAtMzQwO1xuICByZWREb3VibGUueSA9IC0yNjA7XG4gIHJlZFRpeGlhbi55ID0gLTI2MDtcbiAgcmVjZWl2ZU1vbmV5LnkgPSAtODA7XG4gIGFsbE1vbmV5LnggPSA1MDtcbiAgYWxsTW9uZXkueSA9IC0xNTU7XG4gIHJlZE5vZGUuYWRkQ2hpbGQocmVkQmcpO1xuICByZWROb2RlLmFkZENoaWxkKHJlZENsb3NlKTtcbiAgcmVkTm9kZS5hZGRDaGlsZChyZWREb3VibGUpO1xuICByZWROb2RlLmFkZENoaWxkKHJlZFRpeGlhbik7XG4gIHJlZE5vZGUuYWRkQ2hpbGQocmVjZWl2ZU1vbmV5KTtcbiAgcmVkTm9kZS5hZGRDaGlsZChhbGxNb25leSk7XG4gIHZhciBuYXRpdmVOb2RlID0gZ2V0Tm9kZSgpO1xuICBub2RlLmFkZENoaWxkKGJnKTtcbiAgbm9kZS5hZGRDaGlsZChyZWROb2RlKTtcbiAgbm9kZS5hZGRDaGlsZChuYXRpdmVOb2RlKTtcbiAgdmFyIG5hdGl2ZU5vZGVCZyA9IGdldE5vZGUoJ3JlZFBhY2svd2hpdGVCZy5wbmcnKTtcbiAgbmF0aXZlTm9kZUJnLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcbiAgbmF0aXZlTm9kZUJnLndpZHRoID0gNjAwO1xuICBuYXRpdmVOb2RlQmcuaGVpZ2h0ID0gNDAwO1xuICBuYXRpdmVOb2RlLmFkZENoaWxkKG5hdGl2ZU5vZGVCZyk7XG5cbiAgaWYgKDEgfHwgd2luU2l6ZS5oZWlnaHQgPiB3aW5TaXplLndpZHRoICYmIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dOYXRpdmVBZF9iaWcoe1xuICAgIG5vZGU6IG5hdGl2ZU5vZGUsXG4gICAgYmdQYXRoOiBcIm51bGxcIlxuICB9KSkge1xuICAgIHJlZE5vZGUueSA9IDMwMDtcbiAgfSBlbHNlIHtcbiAgICBuYXRpdmVOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgbmF0aXZlTm9kZS55ID0gLTMwMDtcbiAgcmVkQ2xvc2UuYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XG4gIHJlZENsb3NlLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIG5vZGUuZGVzdHJveSgpO1xuICB9LCB0aGlzKTtcbiAgcmVkRG91YmxlLmFkZENvbXBvbmVudChjYy5CdXR0b24pO1xuICByZWREb3VibGUub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgcmVjZWl2ZU1vbmV5LmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gcmVjZWl2ZU1vbmV5TnVtICogMiArIFwi5YWDXCI7XG4gICAgYWxsTW9uZXkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBhbGxNb25leU51bSArIHJlY2VpdmVNb25leU51bSArIFwi5YWDXCI7XG4gICAgbGlleW91X1VzZXJkZWZhdWx0LnNldERhdGFGb3JLZXkoXCJsaWV5b3VfcmVkUGFja01vbmV5XCIsIGFsbE1vbmV5TnVtICsgcmVjZWl2ZU1vbmV5TnVtKTtcbiAgICByZWREb3VibGUuYWN0aXZlID0gZmFsc2U7XG4gICAgcmVkVGl4aWFuLmFjdGl2ZSA9IHRydWU7XG4gIH0sIHRoaXMpO1xuICByZWRUaXhpYW4uYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XG4gIHJlZFRpeGlhbi5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBsaWV5b3Vfc2hvd0Nhc2hEaWFsb2coKTtcbiAgICBub2RlLmRlc3Ryb3koKTtcbiAgfSwgdGhpcyk7XG4gIHJlZE5vZGUuc2NhbGUgPSBsaWV5b3VfU2RrTWFuYWdlci5fU2NlbmVTY2FsZTtcbiAgbm9kZS54ID0gd2luU2l6ZS53aWR0aCAvIDI7XG4gIG5vZGUueSA9IHdpblNpemUuaGVpZ2h0IC8gMjtcbiAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZChub2RlKTtcbn07IC8v5pi+56S65o+Q546w6aG16Z2iXG5cblxud2luZG93LmxpZXlvdV9zaG93VGlYaWFuRGlhbG9nID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHZhciBub2RlID0gZ2V0Tm9kZSgpO1xuICB2YXIgYmcgPSBnZXROb2RlKFwicmVkUGFjay93aGl0ZUJnLnBuZ1wiKTtcbiAgYmcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xuICBiZy53aWR0aCA9IHdpblNpemUud2lkdGg7XG4gIGJnLmhlaWdodCA9IHdpblNpemUuaGVpZ2h0OyAvLyBiZy5vcGFjaXR5ID0gMTUwO1xuXG4gIGJnLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcbiAgdmFyIG15Tm9kZSA9IGdldE5vZGUoKTsgLy8gbXlOb2RlLnkgPSB3aW5TaXplLmhlaWdodCAvIDI7XG5cbiAgdmFyIG15Tm9kZVNjcm9sbCA9IGdldE5vZGUoKTtcbiAgbXlOb2RlU2Nyb2xsLmFkZENvbXBvbmVudChjYy5TY3JvbGxWaWV3KTtcbiAgbXlOb2RlU2Nyb2xsLmFkZENoaWxkKG15Tm9kZSk7XG4gIG15Tm9kZVNjcm9sbC5nZXRDb21wb25lbnQoY2MuU2Nyb2xsVmlldykuY29udGVudCA9IG15Tm9kZTtcbiAgbXlOb2RlU2Nyb2xsLndpZHRoID0gd2luU2l6ZS53aWR0aDtcbiAgbXlOb2RlU2Nyb2xsLmhlaWdodCA9IHdpblNpemUuaGVpZ2h0O1xuICBteU5vZGVTY3JvbGwueCA9IHdpblNpemUud2lkdGggLyAyO1xuICBteU5vZGVTY3JvbGwueSA9IHdpblNpemUuaGVpZ2h0IC8gMjtcbiAgbXlOb2RlU2Nyb2xsLmFuY2hvclkgPSAxO1xuICBteU5vZGUuYW5jaG9yWSA9IDE7XG4gIG15Tm9kZS5oZWlnaHQgPSAxNTAwO1xuICB2YXIgdGlYaWFuVGl0bGUgPSBnZXROb2RlKFwicmVkUGFjay90aVhpYW5fcmVkQmcucG5nXCIpO1xuICB2YXIgdGlYaWFuQmFjayA9IGdldE5vZGUoXCJyZWRQYWNrL3NldF9CYWNrLnBuZ1wiKTtcbiAgdGlYaWFuVGl0bGUuYW5jaG9yWSA9IDE7XG4gIHRpWGlhbkJhY2sueCA9IC0zMjA7XG4gIHRpWGlhbkJhY2sueSA9IC01MDtcbiAgbXlOb2RlLmFkZENoaWxkKHRpWGlhblRpdGxlKTtcbiAgbXlOb2RlLmFkZENoaWxkKHRpWGlhbkJhY2spO1xuICB2YXIgbW9uZXlOdW0gPSBsaWV5b3VfVXNlcmRlZmF1bHQuZ2V0RmxvYXRGb3JLZXkoXCJsaWV5b3VfcmVkUGFja01vbmV5XCIsIDApO1xuICB2YXIgbW9uZXlOdW1MID0gZ2V0TGFiZWwoe1xuICAgIHN0cmluZzogXCLvv6VcIiArIG1vbmV5TnVtLFxuICAgIGNvbG9yOiBjYy5Db2xvci5XSElURSxcbiAgICBmb250U2l6ZTogNzBcbiAgfSk7XG4gIHRpWGlhblRpdGxlLmFkZENoaWxkKG1vbmV5TnVtTCk7XG4gIG1vbmV5TnVtTC54ID0gLTYwO1xuICBtb25leU51bUwueSA9IC0yMTA7XG4gIG1vbmV5TnVtTC5hbmNob3JYID0gMDtcbiAgdmFyIHRpWGlhbldYID0gZ2V0Tm9kZShcInJlZFBhY2svdGlYaWFuX3d4LnBuZ1wiKTtcbiAgdmFyIHRpWGlhbklkID0gZ2V0Tm9kZShcInJlZFBhY2svbW9uZXlfaGVhZC5wbmdcIik7XG4gIHZhciB0aVhpYW5UWEZTTCA9IGdldExhYmVsKHtcbiAgICBzdHJpbmc6IFwi5o+Q546w5pa55byP77yaXCIsXG4gICAgY29sb3I6IGNvbG9yX2dyZXksXG4gICAgZm9udFNpemU6IDMwXG4gIH0pO1xuICB2YXIgdGlYaWFuU0taSEwgPSBnZXRMYWJlbCh7XG4gICAgc3RyaW5nOiBcIuaUtuasvui0puaIt++8mlwiLFxuICAgIGNvbG9yOiBjb2xvcl9ncmV5LFxuICAgIGZvbnRTaXplOiAzMFxuICB9KTtcbiAgdmFyIHRpWGlhbldYTCA9IGdldExhYmVsKHtcbiAgICBzdHJpbmc6IFwi5b6u5L+hXCIsXG4gICAgY29sb3I6IGNvbG9yX2dyZXksXG4gICAgZm9udFNpemU6IDMwXG4gIH0pO1xuICB2YXIgdGlYaWFuSWRMID0gZ2V0TGFiZWwoe1xuICAgIHN0cmluZzogXCLmmLXnp7BcIixcbiAgICBjb2xvcjogY29sb3JfZ3JleSxcbiAgICBmb250U2l6ZTogMzBcbiAgfSk7XG4gIHRpWGlhblRYRlNMLmFuY2hvclggPSAwO1xuICB0aVhpYW5TS1pITC5hbmNob3JYID0gMDtcbiAgdGlYaWFuV1hMLmFuY2hvclggPSAxO1xuICB0aVhpYW5JZEwuYW5jaG9yWCA9IDE7XG4gIG15Tm9kZS5hZGRDaGlsZCh0aVhpYW5UWEZTTCk7XG4gIG15Tm9kZS5hZGRDaGlsZCh0aVhpYW5TS1pITCk7XG4gIG15Tm9kZS5hZGRDaGlsZCh0aVhpYW5XWCk7XG4gIG15Tm9kZS5hZGRDaGlsZCh0aVhpYW5JZCk7XG4gIG15Tm9kZS5hZGRDaGlsZCh0aVhpYW5XWEwpO1xuICBteU5vZGUuYWRkQ2hpbGQodGlYaWFuSWRMKTtcbiAgdGlYaWFuSWQuc2NhbGUgPSAwLjU7XG4gIHRpWGlhblRYRlNMLnggPSAtMzAwO1xuICB0aVhpYW5UWEZTTC55ID0gLTMyMDtcbiAgdGlYaWFuU0taSEwueCA9IHRpWGlhblRYRlNMLng7XG4gIHRpWGlhblNLWkhMLnkgPSB0aVhpYW5UWEZTTC55IC0gNjA7XG4gIHRpWGlhbldYLnggPSAyODA7XG4gIHRpWGlhbldYLnkgPSB0aVhpYW5UWEZTTC55O1xuICB0aVhpYW5JZC54ID0gdGlYaWFuV1gueDtcbiAgdGlYaWFuSWQueSA9IHRpWGlhblNLWkhMLnk7XG4gIHRpWGlhbldYTC54ID0gdGlYaWFuV1gueCAtIDUwO1xuICB0aVhpYW5XWEwueSA9IHRpWGlhblRYRlNMLnk7XG4gIHRpWGlhbklkTC54ID0gdGlYaWFuV1hMLng7XG4gIHRpWGlhbklkTC55ID0gdGlYaWFuU0taSEwueTtcbiAgdmFyIHRpWGlhbnJlZEJnID0gZ2V0Tm9kZShcInJlZFBhY2svc2V0X2xpbmVfMS5wbmdcIik7XG4gIHRpWGlhbnJlZEJnLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcbiAgdGlYaWFucmVkQmcud2lkdGggPSA3MjA7XG4gIHRpWGlhbnJlZEJnLmhlaWdodCA9IDUwO1xuICBteU5vZGUuYWRkQ2hpbGQodGlYaWFucmVkQmcpO1xuICB0aVhpYW5yZWRCZy55ID0gLTQ1MDtcbiAgdmFyIHRpWGlhblJlZCA9IGdldE5vZGUoXCJyZWRQYWNrL2ludml0ZV9yZWRQb2ludC5wbmdcIik7XG4gIHRpWGlhbnJlZEJnLmFkZENoaWxkKHRpWGlhblJlZCk7XG4gIHRpWGlhblJlZC54ID0gLTMwMDtcbiAgdmFyIHRpWGlhblJlZEwgPSBnZXRMYWJlbCh7XG4gICAgc3RyaW5nOiBcIuW+ruS/oeWPt+S4gOaXpue7keWumu+8jOS4jeWPr+ino+e7ke+8jOWwhuS9k+eOsOWIsOatpOi0puWPt1wiLFxuICAgIGZvbnRTaXplOiAyNSxcbiAgICBjb2xvcjogY29sb3JfZ3JleVxuICB9KTtcbiAgdGlYaWFucmVkQmcuYWRkQ2hpbGQodGlYaWFuUmVkTCk7XG4gIHRpWGlhblJlZEwuYW5jaG9yWCA9IDA7XG4gIHRpWGlhblJlZEwueCA9IC0yODA7XG4gIHZhciB0aVhpYW5KaW5FTCA9IGdldExhYmVsKHtcbiAgICBzdHJpbmc6IFwi5o+Q546w6YeR6aKdXCIsXG4gICAgZm9udFNpemU6IDMwLFxuICAgIGNvbG9yOiBjb2xvcl9ncmV5XG4gIH0pO1xuICBteU5vZGUuYWRkQ2hpbGQodGlYaWFuSmluRUwpO1xuICB0aVhpYW5KaW5FTC5hbmNob3JYID0gMDtcbiAgdGlYaWFuSmluRUwueCA9IC0zMDA7XG4gIHRpWGlhbkppbkVMLnkgPSAtNTEwO1xuICB2YXIgdGlYaWFuVGlhb2ppYW5MXzEgPSBnZXRMYWJlbCh7XG4gICAgc3RyaW5nOiBcIui/nue7rea0u+i3gzXlpKnljbPlj6/mj5DnjrDjgIJcIixcbiAgICBmb250U2l6ZTogMjIsXG4gICAgY29sb3I6IGNvbG9yX2dyZXlcbiAgfSk7XG4gIHZhciB0aVhpYW5UaWFvamlhbkxfMiA9IGdldExhYmVsKHtcbiAgICBzdHJpbmc6IFwi77yI5b2T5aSp6aKG5Y+WMTDkuKrov4flhbPnuqLljIXop4bkuLrmtLvot4PvvIlcIixcbiAgICBmb250U2l6ZTogMjIsXG4gICAgY29sb3I6IGNjLmNvbG9yKDI1NSwgMTEzLCA1OClcbiAgfSk7XG4gIHZhciB0aVhpYW5Nb25neU51bSA9IFsxLCA1LCAxNSwgMzAsIDEwMCwgMTUwXTtcbiAgdmFyIG5vd1RpWGlhbkJ0bkluZGV4ID0gMTtcblxuICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChpKSB7XG4gICAgdGlYYWluQnRuID0gZ2V0Tm9kZShcInJlZFBhY2svdGlYaWFuX1wiICsgaSArIFwiX1wiICsgKGkgPT0gMSA/IDEgOiAwKSArIFwiLnBuZ1wiKTtcbiAgICBteU5vZGUuYWRkQ2hpbGQodGlYYWluQnRuKTtcbiAgICB0aVhhaW5CdG4ueCA9IChpIC0gMSkgJSAyID8gMTcwIDogLTE3MDtcbiAgICB0aVhhaW5CdG4ueSA9IC01ODAgLSBNYXRoLmZsb29yKChpIC0gMSkgLyAyKSAqIDkwO1xuICAgIHRpWGFpbkJ0bi5uYW1lID0gXCJ0aXhpYW5CdG5fXCIgKyBpO1xuICAgIHRpWGFpbkJ0bi5hZGRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICB0aVhhaW5CdG4ub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBjb25zb2xlLmxvZyhpICsgXCIgIFwiICsgdGlYaWFuTW9uZ3lOdW1baSAtIDFdKTtcbiAgICAgIGxvYWRSZXMobXlOb2RlLmdldENoaWxkQnlOYW1lKFwidGl4aWFuQnRuX1wiICsgbm93VGlYaWFuQnRuSW5kZXgpLCBcInJlZFBhY2svdGlYaWFuX1wiICsgbm93VGlYaWFuQnRuSW5kZXggKyBcIl8wLnBuZ1wiKTtcbiAgICAgIGxvYWRSZXMobXlOb2RlLmdldENoaWxkQnlOYW1lKFwidGl4aWFuQnRuX1wiICsgaSksIFwicmVkUGFjay90aVhpYW5fXCIgKyBpICsgXCJfMS5wbmdcIik7XG4gICAgICBub3dUaVhpYW5CdG5JbmRleCA9IGk7XG4gICAgfSwgX3RoaXMpO1xuICB9O1xuXG4gIGZvciAodmFyIGkgPSAxOyBpIDw9IDY7IGkrKykge1xuICAgIHZhciB0aVhhaW5CdG47XG5cbiAgICBfbG9vcChpKTtcbiAgfVxuXG4gIHZhciB0aVhpYW5UaWFvSmlhbkwgPSBnZXRMYWJlbCh7XG4gICAgc3RyaW5nOiBcIuaPkOeOsOadoeS7tlwiLFxuICAgIGZvbnRTaXplOiAzMCxcbiAgICBjb2xvcjogY29sb3JfZ3JleVxuICB9KTtcbiAgbXlOb2RlLmFkZENoaWxkKHRpWGlhblRpYW9KaWFuTCk7XG4gIHRpWGlhblRpYW9KaWFuTC5hbmNob3JYID0gMDtcbiAgdGlYaWFuVGlhb0ppYW5MLnggPSAtMzAwO1xuICB0aVhpYW5UaWFvSmlhbkwueSA9IC04MzA7XG4gIHRpWGlhblRpYW9qaWFuTF8xLmFuY2hvclggPSAwO1xuICB0aVhpYW5UaWFvamlhbkxfMi5hbmNob3JYID0gMDtcbiAgbXlOb2RlLmFkZENoaWxkKHRpWGlhblRpYW9qaWFuTF8xKTtcbiAgbXlOb2RlLmFkZENoaWxkKHRpWGlhblRpYW9qaWFuTF8yKTtcbiAgdGlYaWFuVGlhb2ppYW5MXzEueCA9IC0zMDA7XG4gIHRpWGlhblRpYW9qaWFuTF8yLnggPSAtODA7XG4gIHRpWGlhblRpYW9qaWFuTF8xLnkgPSAtODcwO1xuICB0aVhpYW5UaWFvamlhbkxfMi55ID0gdGlYaWFuVGlhb2ppYW5MXzEueTtcbiAgdmFyIHRpWGlhbkp1bkR1Tm9kZSA9IGdldE5vZGUoKTtcbiAgbXlOb2RlLmFkZENoaWxkKHRpWGlhbkp1bkR1Tm9kZSk7XG4gIHRpWGlhbkp1bkR1Tm9kZS55ID0gLTk0MDtcbiAgdmFyIHRpWGlhbkp1bkR1SWNvbiA9IGdldE5vZGUoXCJyZWRQYWNrL3RpWGlhbl9qdW5EdUljb24ucG5nXCIpO1xuICB0aVhpYW5KdW5EdU5vZGUuYWRkQ2hpbGQodGlYaWFuSnVuRHVJY29uKTtcbiAgdmFyIHRpWGlhbkp1bkR1T3ZlciA9IGdldE5vZGUoXCJyZWRQYWNrL3RpWGlhbl9ub092ZXIucG5nXCIpO1xuICB0aVhpYW5KdW5EdU5vZGUuYWRkQ2hpbGQodGlYaWFuSnVuRHVPdmVyKTtcbiAgdGlYaWFuSnVuRHVJY29uLnggPSAtMjgwO1xuICB0aVhpYW5KdW5EdU92ZXIueCA9IDI4MDtcbiAgdmFyIHRpWGlhbkp1bkR1TF8zID0gZ2V0TGFiZWwoe1xuICAgIHN0cmluZzogXCLlt7Lov57nu63mtLvot4My5aSp77yM5LuK5pel5bey57uP6aKG5Y+WMOS4qui/h+WFs+e6ouWMhVwiLFxuICAgIGZvbnRTaXplOiAyMixcbiAgICBjb2xvcjogY29sb3JfZ3JleVxuICB9KTtcbiAgdGlYaWFuSnVuRHVOb2RlLmFkZENoaWxkKHRpWGlhbkp1bkR1TF8zKTtcbiAgdGlYaWFuSnVuRHVMXzMueSA9IDIwO1xuICB2YXIgdGlYaWFuSnVuRHVMXzQgPSBnZXRMYWJlbCh7XG4gICAgc3RyaW5nOiBcIuaJk+WNoTIvNVwiLFxuICAgIGZvbnRTaXplOiAyMixcbiAgICBjb2xvcjogY29sb3JfZ3JleVxuICB9KTtcbiAgdGlYaWFuSnVuRHVOb2RlLmFkZENoaWxkKHRpWGlhbkp1bkR1TF80KTtcbiAgdGlYaWFuSnVuRHVMXzQueCA9IDE1MDtcbiAgdGlYaWFuSnVuRHVMXzQueSA9IC0yMDtcbiAgdmFyIHRpWGlhbkp1bkR1VGlhb18wID0gZ2V0Tm9kZShcInJlZFBhY2svdGlYaWFuX2ppbmR1MC5wbmdcIik7XG4gIHRpWGlhbkp1bkR1Tm9kZS5hZGRDaGlsZCh0aVhpYW5KdW5EdVRpYW9fMCk7XG4gIHRpWGlhbkp1bkR1VGlhb18wLnggPSAtNTA7XG4gIHRpWGlhbkp1bkR1VGlhb18wLnkgPSAtMjA7XG4gIHZhciB0aVhpYW5KdW5EdVRpYW9fMSA9IGdldE5vZGUoXCJyZWRQYWNrL3RpWGlhbl9qaW5kdTEucG5nXCIpO1xuICB0aVhpYW5KdW5EdVRpYW9fMC5hZGRDaGlsZCh0aVhpYW5KdW5EdVRpYW9fMSk7XG4gIHRpWGlhbkp1bkR1VGlhb18xLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnR5cGUgPSBjYy5TcHJpdGUuVHlwZS5GSUxMRUQ7XG4gIHRpWGlhbkp1bkR1VGlhb18xLmdldENvbXBvbmVudChjYy5TcHJpdGUpLmZpbGxSYW5nZSA9IDIgLyA1O1xuICB2YXIgdGlYaWFucmVkQmcyID0gZ2V0Tm9kZShcInJlZFBhY2svc2V0X2xpbmVfMS5wbmdcIik7XG4gIHRpWGlhbnJlZEJnMi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XG4gIHRpWGlhbnJlZEJnMi53aWR0aCA9IDcyMDtcbiAgdGlYaWFucmVkQmcyLmhlaWdodCA9IDIwO1xuICBteU5vZGUuYWRkQ2hpbGQodGlYaWFucmVkQmcyKTtcbiAgdGlYaWFucmVkQmcyLnkgPSAtMTAwMDtcbiAgdmFyIHRpWGlhbkp1bkR1TF81ID0gZ2V0TGFiZWwoe1xuICAgIGZvbnRTaXplOiAyMixcbiAgICBjb2xvcjogY29sb3JfZ3JleSxcbiAgICBzdHJpbmc6IFwi5o+Q546w6K+05piOXFxuMS7nlLHkuo7lvq7kv6HmlK/ku5jpnIDopoHlrp7lkI3liLbvvIzpnZ7lrp7lkI3nlKjmiLfotKbmiLfml6Dms5XmlK/mjIHmj5DnjrDvvIzor7fliqHlv4VcXG7lsIbmj5DnjrDnmoTlvq7kv6Hlj7fov5vooYzlrp7lkI3orqTor4FcXG4yLuaPkOeOsOeUs+ivt+WwhuWcqDfkuKrlt6XkvZzml6XlhoXlrqHmoLjvvIzlrqHmoLjpgJrov4fljbPlj6/liLDotKbvvIzor7fogJDlv4PnrYnlvoVcXG4zLuavj+aXpeWPr+eUs+ivt+aPkOeOsOS4gOasoe+8jOiLpeW9k+aXpemZkOmineW3sua7oe+8jOivt+asoeaXpeeUs+ivt1xcbjQu5paw5Lq65LiT5Lqr56aP5Yip5q+P5Liq6LSm5Y+35bC95Y+v5Lqr5Y+X5LiA5qyhXFxuNS7mm7TlpJrmj5DnjrDor6bmg4Xor7fop4HjgIrnlKjmiLfljY/orq7jgItcIlxuICB9KTtcbiAgdGlYaWFuSnVuRHVMXzUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5saW5lSGVpZ2h0ID0gMzA7XG4gIG15Tm9kZS5hZGRDaGlsZCh0aVhpYW5KdW5EdUxfNSk7XG4gIHRpWGlhbkp1bkR1TF81LnkgPSAtMTEzMDtcbiAgdmFyIHRpWGlhbnJlZEJnMyA9IGdldE5vZGUoXCJyZWRQYWNrL3NldF9saW5lXzEucG5nXCIpO1xuICB0aVhpYW5yZWRCZzMuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xuICB0aVhpYW5yZWRCZzMud2lkdGggPSA3MjA7XG4gIHRpWGlhbnJlZEJnMy5oZWlnaHQgPSAyMDA7XG4gIG15Tm9kZS5hZGRDaGlsZCh0aVhpYW5yZWRCZzMpO1xuICB0aVhpYW5yZWRCZzMueSA9IC0xNDAwO1xuICB2YXIgdGlYaWFuWWlZdWVkaSA9IGdldExhYmVsKHtcbiAgICBzdHJpbmc6IFwi5oiR5bey6ZiF6K+777yM55CG6Kej5bm25ZCM5oSP54ix5LiK5raI5raI5LmQXCIsXG4gICAgZm9udFNpemU6IDIyLFxuICAgIGNvbG9yOiBjb2xvcl9ncmV5XG4gIH0pO1xuICB0aVhpYW5yZWRCZzMuYWRkQ2hpbGQodGlYaWFuWWlZdWVkaSk7XG4gIHRpWGlhbllpWXVlZGkueSA9IDQwO1xuICB2YXIgdGlYaWFuWWlZdWVkaTIgPSBnZXRMYWJlbCh7XG4gICAgc3RyaW5nOiBcIue7k+eul+WNj+iurlwiLFxuICAgIGZvbnRTaXplOiAyMixcbiAgICBjb2xvcjogY2MuY29sb3IoMjM0LCA4MiwgNzEpXG4gIH0pO1xuICB0aVhpYW5yZWRCZzMuYWRkQ2hpbGQodGlYaWFuWWlZdWVkaTIpO1xuICB0aVhpYW5ZaVl1ZWRpMi54ID0gMjIwO1xuICB0aVhpYW5ZaVl1ZWRpMi55ID0gdGlYaWFuWWlZdWVkaS55O1xuICB2YXIgdGlYaWFuWWlZdWVkaUdEID0gZ2V0Tm9kZShcInJlZFBhY2svdGlYaWFuX3F1YW5CZy5wbmdcIik7XG4gIHRpWGlhbnJlZEJnMy5hZGRDaGlsZCh0aVhpYW5ZaVl1ZWRpR0QpO1xuICB0aVhpYW5ZaVl1ZWRpR0QueCA9IC0yMDA7XG4gIHRpWGlhbllpWXVlZGlHRC55ID0gNDA7XG4gIHZhciB0aVhpYW5ZaVl1ZWRpR3YgPSBnZXROb2RlKFwicmVkUGFjay90aVhpYW5fcXVhbkcucG5nXCIpO1xuICB0aVhpYW5ZaVl1ZWRpR0QuYWRkQ2hpbGQodGlYaWFuWWlZdWVkaUd2KTtcbiAgdGlYaWFuWWlZdWVkaUd2LmFjdGl2ZSA9IGZhbHNlO1xuICB2YXIgdGlYaWFuQnRuID0gZ2V0Tm9kZShcInJlZFBhY2svdGlYaWFuX2J0bi5wbmdcIik7XG4gIHRpWGlhbnJlZEJnMy5hZGRDaGlsZCh0aVhpYW5CdG4pO1xuICB0aVhpYW5CdG4ueSA9IC0zMDtcbiAgdGlYaWFuWWlZdWVkaUdELmFkZENvbXBvbmVudChjYy5CdXR0b24pO1xuICB0aVhpYW5ZaVl1ZWRpR0Qub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgdGlYaWFuWWlZdWVkaUd2LmFjdGl2ZSA9ICF0aVhpYW5ZaVl1ZWRpR3YuYWN0aXZlO1xuICB9LCB0aGlzKTtcbiAgdGlYaWFuQnRuLmFkZENvbXBvbmVudChjYy5CdXR0b24pO1xuICB0aVhpYW5CdG4ub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRpWGlhbllpWXVlZGlHdi5hY3RpdmUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwidG91Y2ggOiBcIitub3dUaVhpYW5CdG5JbmRleCk7XG4gICAgfVxuICB9LCB0aGlzKTtcbiAgdGlYaWFuQmFjay5hZGRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgdGlYaWFuQmFjay5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBub2RlLmRlc3Ryb3koKTtcbiAgfSwgdGhpcyk7XG4gIG5vZGUuYWRkQ2hpbGQoYmcpO1xuICBub2RlLmFkZENoaWxkKG15Tm9kZVNjcm9sbCk7IC8vIG15Tm9kZS5oZWlnaHQgPSAxNTAwO1xuXG4gIG15Tm9kZS5zY2FsZSA9IGxpZXlvdV9TZGtNYW5hZ2VyLl9TY2VuZVNjYWxlO1xuICBub2RlLnggPSB3aW5TaXplLndpZHRoIC8gMjtcbiAgbm9kZS55ID0gd2luU2l6ZS5oZWlnaHQgLyAyO1xuICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmFkZENoaWxkKG5vZGUpO1xufTsgLy/mmL7npLrpgoDor7flpb3lj4vpobXpnaJcblxuXG53aW5kb3cubGlleW91X3Nob3dJbnZpdGVEaWFsb2cgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gIHZhciBub2RlID0gZ2V0Tm9kZSgpO1xuICB2YXIgYmcgPSBnZXROb2RlKFwicmVkUGFjay93aGl0ZUJnLnBuZ1wiKTtcbiAgYmcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xuICBiZy53aWR0aCA9IHdpblNpemUud2lkdGg7XG4gIGJnLmhlaWdodCA9IHdpblNpemUuaGVpZ2h0OyAvLyBiZy5vcGFjaXR5ID0gMTUwO1xuXG4gIGJnLmFkZENvbXBvbmVudChjYy5CbG9ja0lucHV0RXZlbnRzKTtcbiAgdmFyIG15Tm9kZSA9IGdldE5vZGUoKTtcbiAgbXlOb2RlLnkgPSB3aW5TaXplLmhlaWdodCAvIDI7XG4gIHZhciBpbnZpdGVUaXRsZSA9IGdldE5vZGUoXCJyZWRQYWNrL2ludml0ZV90aXRsZS5wbmdcIik7XG4gIHZhciBpbnZpdGVCYWNrID0gZ2V0Tm9kZShcInJlZFBhY2svc2V0X0JhY2sucG5nXCIpO1xuICB2YXIgaW52aXRlSW1hZ2UgPSBnZXROb2RlKFwicmVkUGFjay9pbnZpdGVfaW1hZ2UucG5nXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpbnZpdGVJbWFnZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZS5pbnNldFRvcCA9IDY1MDtcbiAgICBpbnZpdGVJbWFnZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZS5pbnNldEJvdHRvbSA9IDA7XG4gICAgaW52aXRlSW1hZ2UuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUuaW5zZXRMZWZ0ID0gMDtcbiAgICBpbnZpdGVJbWFnZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZS5pbnNldFJpZ2h0ID0gMDtcbiAgICBpbnZpdGVJbWFnZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS50eXBlID0gY2MuU3ByaXRlLlR5cGUuU0xJQ0VEO1xuICAgIGludml0ZUltYWdlLmhlaWdodCA9IDEyODA7XG4gIH0pO1xuICBpbnZpdGVUaXRsZS5hbmNob3JZID0gMTtcbiAgaW52aXRlSW1hZ2UuYW5jaG9yWSA9IDE7XG4gIGludml0ZUJhY2sueCA9IC0zMjA7XG4gIGludml0ZUJhY2sueSA9IC01MDtcbiAgaW52aXRlSW1hZ2UueSA9IC05NztcbiAgbXlOb2RlLmFkZENoaWxkKGludml0ZVRpdGxlKTtcbiAgbXlOb2RlLmFkZENoaWxkKGludml0ZUJhY2spO1xuICBteU5vZGUuYWRkQ2hpbGQoaW52aXRlSW1hZ2UpO1xuICB2YXIgaW52aXRlQ29kZSA9IFwiZmRzZjVmZGFmZHNhZnNhZnNhZnNkYWZkc2FmZHNmZHNhZmRzYWZzZGFmc2Fmc2RhZmRzYWZkc2Fmc2RhZmRzYWZkc2Fmc2RhZmFcIjtcbiAgdmFyIGludml0ZVVybCA9IFwiaHR0cDovL3Rlc3RmaGRrYXNmaGRzYS5mZHNhaGZrbGRzYWhmd2UuZmRzYWtoZndlbGtoXCI7XG4gIHZhciBidG5OYW1lID0gW1wi5b6u5L+h5YiG5LqrXCIsIFwi6YKA6K+356CB77yaXCIgKyBpbnZpdGVDb2RlLCBcIumCgOivt+mTvuaOpe+8mlwiICsgaW52aXRlVXJsXTtcbiAgdmFyIGJ0bkxlbmd0aCA9IGJ0bk5hbWUubGVuZ3RoO1xuICB2YXIgYnRuQmVnaW5Qb3NZID0gLTgyMDtcblxuICB2YXIgX2xvb3AyID0gZnVuY3Rpb24gX2xvb3AyKCkge1xuICAgIGJ0bk5vZGVCZyA9IGdldE5vZGUoXCJyZWRQYWNrL2ludml0ZV9CZzIucG5nXCIpO1xuICAgIG15Tm9kZS5hZGRDaGlsZChidG5Ob2RlQmcpO1xuICAgIGJ0bk5vZGVCZy55ID0gYnRuQmVnaW5Qb3NZO1xuICAgIGJ0bkJlZ2luUG9zWSAtPSAxMzA7XG4gICAgdmFyIGJ0bk5vZGUgPSBnZXROb2RlKGkgPT0gMCA/IFwicmVkUGFjay9pbnZpdGVfd3gucG5nXCIgOiBcInJlZFBhY2svaW52aXRlX2NvcHkucG5nXCIpO1xuICAgIGJ0bk5vZGVCZy5hZGRDaGlsZChidG5Ob2RlKTtcbiAgICBidG5Ob2RlLnggPSAyNTA7XG4gICAgYnRuTGFiZWwgPSBnZXRMYWJlbCh7XG4gICAgICBjb2xvcjogY29sb3JfZ3JleSxcbiAgICAgIGZvbnRTaXplOiAyNSxcbiAgICAgIHN0cmluZzogYnRuTmFtZVtpXVxuICAgIH0pO1xuICAgIGJ0bk5vZGVCZy5hZGRDaGlsZChidG5MYWJlbCk7XG4gICAgYnRuTGFiZWwud2lkdGggPSA0ODA7XG4gICAgYnRuTGFiZWwueCA9IC02MDtcbiAgICBidG5MYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuUkVTSVpFX0hFSUdIVDtcbiAgICBidG5Ob2RlLmJ0blRhZyA9IGk7XG4gICAgYnRuTm9kZS5hZGRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICBidG5Ob2RlLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgc3dpdGNoIChidG5Ob2RlLmJ0blRhZykge1xuICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgY29uc29sZS5sb2coXCLliIbkuqvlvq7kv6FcIik7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGNvbnNvbGUubG9nKGludml0ZUNvZGUpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBjb25zb2xlLmxvZyhpbnZpdGVVcmwpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sIF90aGlzMik7XG4gIH07XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBidG5MZW5ndGg7IGkrKykge1xuICAgIHZhciBidG5Ob2RlQmc7XG4gICAgdmFyIGJ0bkxhYmVsO1xuXG4gICAgX2xvb3AyKCk7XG4gIH1cblxuICB2YXIgc2h1b01pbmcgPSBnZXROb2RlKCk7XG4gIG15Tm9kZS5hZGRDaGlsZChzaHVvTWluZyk7XG4gIHNodW9NaW5nLnkgPSAtMTIwMDtcbiAgdmFyIHNodW9NaW5nTCA9IGdldExhYmVsKHtcbiAgICBjb2xvcjogY29sb3JfZ3JleSxcbiAgICBmb250U2l6ZTogMjUsXG4gICAgc3RyaW5nOiBcIuinhOWImeivtOaYju+8muWwhuS4i+i9vemTvuaOpeWSjOmCgOivt+eggeWPkemAgee7meaCqOeahOWlveWPi++8jOmCgOivt+S7luS7rOS4i+i9vea4uOaIj+WQjuW5tui+k+WFpeaCqOeahOmCgOivt+egge+8jOeCueWHu+ehruiupOWNs+WPr+OAgijlronljZPlkozoi7nmnpznlKjmiLfkuI3og73lpJ/kupLnm7jpgoDor7cpXCJcbiAgfSk7XG4gIHNodW9NaW5nLmFkZENoaWxkKHNodW9NaW5nTCk7XG4gIHNodW9NaW5nTC53aWR0aCA9IDU1MDtcbiAgc2h1b01pbmdMLmdldENvbXBvbmVudChjYy5MYWJlbCkub3ZlcmZsb3cgPSBjYy5MYWJlbC5PdmVyZmxvdy5SRVNJWkVfSEVJR0hUO1xuICB2YXIgc2h1b01pbmdSZWQgPSBnZXROb2RlKFwicmVkUGFjay9pbnZpdGVfcmVkUG9pbnQucG5nXCIpO1xuICBzaHVvTWluZy5hZGRDaGlsZChzaHVvTWluZ1JlZCk7XG4gIHNodW9NaW5nUmVkLnggPSAtMzAwO1xuICBub2RlLmFkZENoaWxkKGJnKTtcbiAgbm9kZS5hZGRDaGlsZChteU5vZGUpO1xuICBpbnZpdGVCYWNrLmFkZENvbXBvbmVudChjYy5CdXR0b24pO1xuICBpbnZpdGVCYWNrLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIG5vZGUuZGVzdHJveSgpO1xuICB9LCB0aGlzKTtcbiAgbXlOb2RlLnNjYWxlID0gbGlleW91X1Nka01hbmFnZXIuX1NjZW5lU2NhbGU7XG4gIG5vZGUueCA9IHdpblNpemUud2lkdGggLyAyO1xuICBub2RlLnkgPSB3aW5TaXplLmhlaWdodCAvIDI7XG4gIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQobm9kZSk7XG59OyAvL+aYvuekuuiuvue9rumhtemdolxuXG5cbndpbmRvdy5saWV5b3Vfc2hvd1NldGluZ0RpYWxvZyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgdmFyIG5vZGUgPSBnZXROb2RlKCk7XG4gIHZhciBiZyA9IGdldE5vZGUoXCJyZWRQYWNrL3doaXRlQmcucG5nXCIpO1xuICBiZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XG4gIGJnLndpZHRoID0gd2luU2l6ZS53aWR0aDtcbiAgYmcuaGVpZ2h0ID0gd2luU2l6ZS5oZWlnaHQ7IC8vIGJnLm9wYWNpdHkgPSAxNTA7XG5cbiAgYmcuYWRkQ29tcG9uZW50KGNjLkJsb2NrSW5wdXRFdmVudHMpO1xuICB2YXIgbXlOb2RlID0gZ2V0Tm9kZSgpO1xuICBteU5vZGUueSA9IHdpblNpemUuaGVpZ2h0IC8gMjtcbiAgdmFyIHNldFRpdGxlID0gZ2V0Tm9kZShcInJlZFBhY2svc2V0X3RpdGxlLnBuZ1wiKTtcbiAgdmFyIHNldEJhY2sgPSBnZXROb2RlKFwicmVkUGFjay9zZXRfQmFjay5wbmdcIik7XG4gIHNldFRpdGxlLmFuY2hvclkgPSAxO1xuICBzZXRCYWNrLnggPSAtMzIwO1xuICBzZXRCYWNrLnkgPSAtNTA7XG4gIG15Tm9kZS5hZGRDaGlsZChzZXRUaXRsZSk7XG4gIG15Tm9kZS5hZGRDaGlsZChzZXRCYWNrKTtcbiAgdmFyIGJ0bk5hbWUgPSBbXCLnlKjmiLfljY/orq5cIiwgXCLpmpDnp4HmlL/nrZZcIiwgXCLms6jplIDotKbmiLdcIiwgXCLogZTns7vlj43ppohcIiwgXCLlvZPliY3niYjmnKxcIl07XG4gIHZhciBidG5MZW5ndGggPSBidG5OYW1lLmxlbmd0aDtcbiAgdmFyIGJlZ1Bvc1kgPSAtMzAwO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYnRuTGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbGluZU5vZGUgPSBnZXROb2RlKGJ0bkxlbmd0aCAtIDEgPT0gaSA/IFwiXCIgOiBcInJlZFBhY2svc2V0X2xpbmVfMi5wbmdcIik7XG4gICAgbGluZU5vZGUueSA9IGJlZ1Bvc1k7XG4gICAgYmVnUG9zWSAtPSA4MDtcbiAgICBteU5vZGUuYWRkQ2hpbGQobGluZU5vZGUpO1xuICAgIHZhciBidG5OYW1lTCA9IGdldExhYmVsKHtcbiAgICAgIGNvbG9yOiBjb2xvcl9ncmV5LFxuICAgICAgc3RyaW5nOiBidG5OYW1lW2ldLFxuICAgICAgZm9udFNpemU6IDMwXG4gICAgfSk7XG4gICAgbGluZU5vZGUuYWRkQ2hpbGQoYnRuTmFtZUwpO1xuICAgIGJ0bk5hbWVMLnggPSAtMjYwO1xuICAgIGJ0bk5hbWVMLnkgPSAzMDtcblxuICAgIGlmIChidG5MZW5ndGggLSAxID09IGkpIHtcbiAgICAgIHZhciB2ZXJzaW9uID0gZ2V0TGFiZWwoe1xuICAgICAgICBjb2xvcjogY29sb3JfZ3JleSxcbiAgICAgICAgc3RyaW5nOiBcIjQuMi40XCIsXG4gICAgICAgIGZvbnRTaXplOiAzMFxuICAgICAgfSk7XG4gICAgICBsaW5lTm9kZS5hZGRDaGlsZCh2ZXJzaW9uKTtcbiAgICAgIHZlcnNpb24ueCA9IDI2MDtcbiAgICAgIHZlcnNpb24ueSA9IDMwO1xuICAgIH0gZWxzZSB7XG4gICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYnRuTm9kZSA9IGdldE5vZGUoXCJyZWRQYWNrL3NldF9idG4ucG5nXCIpO1xuICAgICAgICBsaW5lTm9kZS5hZGRDaGlsZChidG5Ob2RlKTtcbiAgICAgICAgYnRuTm9kZS54ID0gMjYwO1xuICAgICAgICBidG5Ob2RlLnkgPSAzMDtcbiAgICAgICAgYnRuTm9kZS5idG5UYWcgPSBpO1xuICAgICAgICBidG5Ob2RlLmFkZENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICBidG5Ob2RlLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHN3aXRjaCAoYnRuTm9kZS5idG5UYWcpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLnlKjmiLfljY/orq5cIik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6ZqQ56eB5pS/562WXCIpO1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuazqOmUgOi0puaIt1wiKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLogZTns7vlj43ppohcIik7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgX3RoaXMzKTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0QmFjay5hZGRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgc2V0QmFjay5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBub2RlLmRlc3Ryb3koKTtcbiAgfSwgdGhpcyk7XG4gIG5vZGUuYWRkQ2hpbGQoYmcpO1xuICBub2RlLmFkZENoaWxkKG15Tm9kZSk7XG4gIG15Tm9kZS5zY2FsZSA9IGxpZXlvdV9TZGtNYW5hZ2VyLl9TY2VuZVNjYWxlO1xuICBub2RlLnggPSB3aW5TaXplLndpZHRoIC8gMjtcbiAgbm9kZS55ID0gd2luU2l6ZS5oZWlnaHQgLyAyO1xuICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmFkZENoaWxkKG5vZGUpO1xufTsgLy/mmL7npLrnuqLljIXkvZnpop3pobXpnaJcblxuXG53aW5kb3cubGlleW91X3Nob3dDYXNoRGlhbG9nID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbm9kZSA9IGdldE5vZGUoKTtcbiAgdmFyIGJnID0gZ2V0Tm9kZShcInJlZFBhY2svd2hpdGVCZy5wbmdcIik7XG4gIGJnLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcbiAgYmcud2lkdGggPSB3aW5TaXplLndpZHRoO1xuICBiZy5oZWlnaHQgPSB3aW5TaXplLmhlaWdodDsgLy8gYmcub3BhY2l0eSA9IDE1MDtcblxuICBiZy5hZGRDb21wb25lbnQoY2MuQmxvY2tJbnB1dEV2ZW50cyk7XG4gIHZhciBuYXRpdmVOb2RlID0gZ2V0Tm9kZSgpO1xuICB2YXIgcmVkTm9kZSA9IGdldE5vZGUoKTtcbiAgdmFyIHJlZEJnID0gZ2V0Tm9kZShcInJlZFBhY2svbW9uZXlfbnVtLnBuZ1wiKTtcbiAgdmFyIHJlZFR4ID0gZ2V0Tm9kZShcInJlZFBhY2svbW9uZXlfdHgucG5nXCIpO1xuICB2YXIgcmVkSW52aXRlID0gZ2V0Tm9kZShcInJlZFBhY2svbW9uZXlfaW52aXRlLnBuZ1wiKTtcbiAgdmFyIHJlZFNldCA9IGdldE5vZGUoXCJyZWRQYWNrL21vbmV5X3NldC5wbmdcIik7XG4gIHZhciBhbGxNID0gbGlleW91X1VzZXJkZWZhdWx0LmdldEZsb2F0Rm9yS2V5KFwibGlleW91X3JlZFBhY2tNb25leVwiLCAwKTtcbiAgdmFyIG1vbmV5TGFiZWwgPSBnZXRMYWJlbCh7XG4gICAgc3RyaW5nOiBhbGxNLFxuICAgIGZvbnRTaXplOiA4MFxuICB9KTtcbiAgdmFyIG1vbmV5QmFjayA9IGdldE5vZGUoXCJyZWRQYWNrL21vbmV5X2JhY2sucG5nXCIpO1xuICB2YXIgbW9uZXlIZWFkID0gZ2V0Tm9kZShcInJlZFBhY2svbW9uZXlfaGVhZC5wbmdcIik7XG4gIHZhciBtb25leU5hbWUgPSBnZXRMYWJlbCh7XG4gICAgc3RyaW5nOiBcIuaYteensFwiLFxuICAgIGNvbG9yOiBjb2xvcl9ncmV5LFxuICAgIGZvbnRTaXplOiAzMFxuICB9KTtcbiAgdmFyIG1vbmV5SWQgPSBcIjQ1NjgxMzFcIjtcbiAgdmFyIG1vbmV5Q2hhY2sgPSBcImRmNWRmYWU4ZmFcIjtcbiAgdmFyIG1vbmV5SWRMID0gZ2V0TGFiZWwoe1xuICAgIHN0cmluZzogXCJJRDpcIiArIG1vbmV5SWQsXG4gICAgY29sb3I6IGNvbG9yX2dyZXksXG4gICAgZm9udFNpemU6IDIwXG4gIH0pO1xuICB2YXIgbW9uZXlDaGFja0wgPSBnZXRMYWJlbCh7XG4gICAgc3RyaW5nOiBcIumCgOivt+eggTpcIiArIG1vbmV5Q2hhY2ssXG4gICAgY29sb3I6IGNvbG9yX2dyZXksXG4gICAgZm9udFNpemU6IDIwXG4gIH0pO1xuICB2YXIgbW9uZXlJZENvcHkgPSBnZXROb2RlKFwicmVkUGFjay9tb25leV9jb3B5LnBuZ1wiKTtcbiAgdmFyIG1vbmV5Q2hhY2tDb3B5ID0gZ2V0Tm9kZShcInJlZFBhY2svbW9uZXlfY29weS5wbmdcIik7XG4gIHZhciBtb25leUNoYWNrQnRuID0gZ2V0Tm9kZShcInJlZFBhY2svbW9uZXlfY2hhY2sucG5nXCIpO1xuICBtb25leUJhY2sueCA9IC0zMjA7XG4gIG1vbmV5QmFjay55ID0gMjUwO1xuICBtb25leUhlYWQueCA9IC0yMjA7XG4gIG1vbmV5SGVhZC55ID0gbW9uZXlCYWNrLnk7XG4gIG1vbmV5Q2hhY2tCdG4ueCA9IDM2MDtcbiAgbW9uZXlDaGFja0J0bi55ID0gbW9uZXlCYWNrLnk7XG4gIG1vbmV5TmFtZS54ID0gODA7XG4gIG1vbmV5TmFtZS55ID0gMzA7XG4gIG1vbmV5SWRMLnggPSBtb25leU5hbWUueDtcbiAgbW9uZXlJZEwueSA9IC0xMDtcbiAgbW9uZXlDaGFja0wueCA9IG1vbmV5TmFtZS54O1xuICBtb25leUNoYWNrTC55ID0gLTUwO1xuICBtb25leUlkQ29weS54ID0gMzUwO1xuICBtb25leUlkQ29weS55ID0gbW9uZXlJZEwueTtcbiAgbW9uZXlDaGFja0NvcHkueCA9IG1vbmV5SWRDb3B5Lng7XG4gIG1vbmV5Q2hhY2tDb3B5LnkgPSBtb25leUNoYWNrTC55O1xuICBtb25leU5hbWUuYW5jaG9yWCA9IDA7XG4gIG1vbmV5SWRMLmFuY2hvclggPSAwO1xuICBtb25leUNoYWNrTC5hbmNob3JYID0gMDtcbiAgbW9uZXlDaGFja0J0bi5hbmNob3JYID0gMTtcbiAgbW9uZXlMYWJlbC54ID0gNjA7XG4gIG1vbmV5TGFiZWwueSA9IC0zMDtcbiAgcmVkTm9kZS5hZGRDaGlsZChyZWRCZyk7XG4gIHJlZE5vZGUuYWRkQ2hpbGQocmVkVHgpO1xuICByZWROb2RlLmFkZENoaWxkKHJlZEludml0ZSk7XG4gIHJlZE5vZGUuYWRkQ2hpbGQocmVkU2V0KTtcbiAgcmVkTm9kZS5hZGRDaGlsZChtb25leUxhYmVsKTtcbiAgcmVkTm9kZS5hZGRDaGlsZChtb25leUhlYWQpO1xuICBtb25leUhlYWQuYWRkQ2hpbGQobW9uZXlOYW1lKTtcbiAgbW9uZXlIZWFkLmFkZENoaWxkKG1vbmV5SWRMKTtcbiAgbW9uZXlIZWFkLmFkZENoaWxkKG1vbmV5Q2hhY2tMKTtcbiAgbW9uZXlIZWFkLmFkZENoaWxkKG1vbmV5SWRDb3B5KTtcbiAgbW9uZXlIZWFkLmFkZENoaWxkKG1vbmV5Q2hhY2tDb3B5KTtcbiAgcmVkTm9kZS5hZGRDaGlsZChtb25leUNoYWNrQnRuKTtcbiAgcmVkTm9kZS5hZGRDaGlsZChtb25leUJhY2spO1xuICByZWRUeC54ID0gLTE4MDtcbiAgcmVkVHgueSA9IC0yMzA7XG4gIHJlZEludml0ZS55ID0gLTIzMDtcbiAgcmVkU2V0LnggPSAxODA7XG4gIHJlZFNldC55ID0gLTIzMDtcbiAgbm9kZS5hZGRDaGlsZChiZyk7XG4gIG5vZGUuYWRkQ2hpbGQocmVkTm9kZSk7XG4gIG5vZGUuYWRkQ2hpbGQobmF0aXZlTm9kZSk7XG4gIHZhciBuYXRpdmVOb2RlQmcgPSBnZXROb2RlKCdyZWRQYWNrL2JsYWNrLnBuZycpO1xuICBuYXRpdmVOb2RlQmcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xuICBuYXRpdmVOb2RlQmcud2lkdGggPSA2MDA7XG4gIG5hdGl2ZU5vZGVCZy5oZWlnaHQgPSA0MDA7XG4gIG5hdGl2ZU5vZGUuYWRkQ2hpbGQobmF0aXZlTm9kZUJnKTtcbiAgbmF0aXZlTm9kZUJnLm9wYWNpdHkgPSAxNTA7XG5cbiAgaWYgKDEgfHwgd2luU2l6ZS5oZWlnaHQgPiB3aW5TaXplLndpZHRoICYmIGxpZXlvdV9TZGtNYW5hZ2VyLnNob3dOYXRpdmVBZF9iaWcoe1xuICAgIG5vZGU6IG5hdGl2ZU5vZGUsXG4gICAgYmdQYXRoOiBcIm51bGxcIlxuICB9KSkge1xuICAgIHJlZE5vZGUueSA9IDMwMDtcbiAgfSBlbHNlIHtcbiAgICBuYXRpdmVOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgbmF0aXZlTm9kZS55ID0gLTMwMDtcbiAgbW9uZXlCYWNrLmFkZENvbXBvbmVudChjYy5CdXR0b24pO1xuICBtb25leUJhY2sub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgbm9kZS5kZXN0cm95KCk7XG4gIH0sIHRoaXMpO1xuICBtb25leUlkQ29weS5hZGRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgbW9uZXlJZENvcHkub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2cobW9uZXlJZCk7XG4gIH0sIHRoaXMpO1xuICBtb25leUNoYWNrQ29weS5hZGRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgbW9uZXlDaGFja0NvcHkub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2cobW9uZXlDaGFjayk7XG4gIH0sIHRoaXMpO1xuICBtb25leUNoYWNrQnRuLmFkZENvbXBvbmVudChjYy5CdXR0b24pO1xuICBtb25leUNoYWNrQnRuLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGxpZXlvdV9zaG93Q2hhY2tEaWFsb2coKTtcbiAgfSwgdGhpcyk7XG4gIHJlZEJnLmFkZENvbXBvbmVudChjYy5CdXR0b24pO1xuICByZWRCZy5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBsaWV5b3Vfc2hvd1RpWGlhbkRpYWxvZygpO1xuICB9LCB0aGlzKTtcbiAgcmVkVHguYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XG4gIHJlZFR4Lm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGxpZXlvdV9zaG93VGlYaWFuRGlhbG9nKCk7XG4gIH0sIHRoaXMpO1xuICByZWRJbnZpdGUuYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XG4gIHJlZEludml0ZS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBsaWV5b3Vfc2hvd0ludml0ZURpYWxvZygpO1xuICB9LCB0aGlzKTtcbiAgcmVkU2V0LmFkZENvbXBvbmVudChjYy5CdXR0b24pO1xuICByZWRTZXQub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgbGlleW91X3Nob3dTZXRpbmdEaWFsb2coKTtcbiAgfSwgdGhpcyk7XG4gIHJlZE5vZGUuc2NhbGUgPSBsaWV5b3VfU2RrTWFuYWdlci5fU2NlbmVTY2FsZTtcbiAgbm9kZS54ID0gd2luU2l6ZS53aWR0aCAvIDI7XG4gIG5vZGUueSA9IHdpblNpemUuaGVpZ2h0IC8gMjtcbiAgY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5hZGRDaGlsZChub2RlKTtcbn07IC8v5pi+56S65YWR5o2i56CB6aG16Z2iXG5cblxud2luZG93LmxpZXlvdV9zaG93Q2hhY2tEaWFsb2cgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBub2RlID0gZ2V0Tm9kZSgpO1xuICB2YXIgYmcgPSBnZXROb2RlKFwicmVkUGFjay9ibGFjay5wbmdcIik7XG4gIGJnLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcbiAgYmcud2lkdGggPSB3aW5TaXplLndpZHRoO1xuICBiZy5oZWlnaHQgPSB3aW5TaXplLmhlaWdodDtcbiAgYmcub3BhY2l0eSA9IDE1MDtcbiAgYmcuYWRkQ29tcG9uZW50KGNjLkJsb2NrSW5wdXRFdmVudHMpO1xuICB2YXIgY2hhY2sgPSBnZXROb2RlKCk7XG4gIHZhciBjaGFja0JnID0gZ2V0Tm9kZShcInJlZFBhY2svY2hhY2tfYmcucG5nXCIpO1xuICB2YXIgY2hhY2tFZGl0ID0gZ2V0Tm9kZSgpO1xuICB2YXIgY2hhY2tPayA9IGdldE5vZGUoXCJyZWRQYWNrL2NoYWNrX29rLnBuZ1wiKTtcbiAgY2hhY2tFZGl0LnkgPSAtMjA7XG4gIGNoYWNrT2sueSA9IC0xMzA7XG4gIGNoYWNrLmFkZENoaWxkKGNoYWNrQmcpO1xuICBjaGFjay5hZGRDaGlsZChjaGFja0VkaXQpO1xuICBjaGFjay5hZGRDaGlsZChjaGFja09rKTtcbiAgdmFyIGNoYWNrRWRpdFNwcml0ZSA9IGdldE5vZGUoXCJyZWRQYWNrL2NoYWNrX2VkaXQucG5nXCIpO1xuICB2YXIgY2hhY2tFZGl0TGFiZWwgPSBnZXRMYWJlbCh7XG4gICAgY29sb3I6IGNvbG9yX2dyZXksXG4gICAgZm9udFNpemU6IDYwXG4gIH0pO1xuICBjaGFja0VkaXRMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuQ0xBTVA7XG4gIGNoYWNrRWRpdExhYmVsLmdldENvbXBvbmVudChjYy5MYWJlbCkuaG9yaXpvbnRhbEFsaWduID0gY2MuTGFiZWwuSG9yaXpvbnRhbEFsaWduLkNFTlRFUjtcbiAgY2hhY2tFZGl0TGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS52ZXJ0aWNhbEFsaWduID0gY2MuTGFiZWwuVmVydGljYWxBbGlnbi5DRU5URVI7XG4gIGNoYWNrRWRpdC5hZGRDaGlsZChjaGFja0VkaXRTcHJpdGUpO1xuICBjaGFja0VkaXQuYWRkQ2hpbGQoY2hhY2tFZGl0TGFiZWwpO1xuICBjaGFja0VkaXQud2lkdGggPSA1MjU7XG4gIGNoYWNrRWRpdC5oZWlnaHQgPSA3MztcbiAgY2hhY2tFZGl0TGFiZWwud2lkdGggPSBjaGFja0VkaXQud2lkdGg7XG4gIGNoYWNrRWRpdExhYmVsLmhlaWdodCA9IGNoYWNrRWRpdC5oZWlnaHQ7XG4gIGNoYWNrRWRpdExhYmVsLmFuY2hvclggPSAwO1xuICBjaGFja0VkaXRMYWJlbC5hbmNob3JYID0gMTtcbiAgY2hhY2tFZGl0TGFiZWwueCA9IC1jaGFja0VkaXQud2lkdGggLyAyO1xuICBjaGFja0VkaXRMYWJlbC55ID0gY2hhY2tFZGl0LmhlaWdodCAvIDI7XG4gIGNoYWNrRWRpdC5hZGRDb21wb25lbnQoY2MuRWRpdEJveCk7XG4gIGNoYWNrRWRpdC5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkubWF4TGVuZ3RoID0gMTU7XG4gIGNoYWNrRWRpdC5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuaW5wdXRNb2RlID0gY2MuRWRpdEJveC5JbnB1dE1vZGUuU0lOR0xFX0xJTkU7XG4gIGNoYWNrRWRpdC5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuYmFja2dyb3VuZCA9IGNoYWNrRWRpdFNwcml0ZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgY2hhY2tFZGl0LmdldENvbXBvbmVudChjYy5FZGl0Qm94KS50ZXh0TGFiZWwgPSBjaGFja0VkaXRMYWJlbC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICBjaGFja09rLmFkZENvbXBvbmVudChjYy5CdXR0b24pO1xuICBjaGFja09rLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwi5o+Q5LqkOlwiICsgY2hhY2tFZGl0LmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmcpO1xuICB9LCB0aGlzKTtcbiAgYmcuYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XG4gIGJnLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIG5vZGUuZGVzdHJveSgpO1xuICB9LCB0aGlzKTtcbiAgbm9kZS5hZGRDaGlsZChiZyk7XG4gIG5vZGUuYWRkQ2hpbGQoY2hhY2spO1xuICBjaGFjay5zY2FsZSA9IGxpZXlvdV9TZGtNYW5hZ2VyLl9TY2VuZVNjYWxlO1xuICBub2RlLnggPSB3aW5TaXplLndpZHRoIC8gMjtcbiAgbm9kZS55ID0gd2luU2l6ZS5oZWlnaHQgLyAyO1xuICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmFkZENoaWxkKG5vZGUpO1xufTsgLy/ojrflj5bnuqLljIXmjInpkq5cblxuXG53aW5kb3cubGlleW91X2dldFJlZFBhY2tJY29uID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbm9kZSA9IGdldE5vZGUoKTtcbiAgdmFyIHJlZEljb24gPSBnZXROb2RlKFwicmVkUGFjay9yZWRQYWNrSWNvbi5wbmdcIik7XG4gIHZhciBwYW9wYW8gPSBnZXROb2RlKFwicmVkUGFjay9wYW9wYW8ucG5nXCIpO1xuICBub2RlLmFkZENoaWxkKHJlZEljb24pO1xuICBub2RlLmFkZENoaWxkKHBhb3Bhbyk7XG4gIG5vZGUucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoY2Muc3Bhd24oY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjUsIDEuMSwgMSksIGNjLnNjYWxlVG8oMC41LCAwLjksIDEpKSwgY2Muc2VxdWVuY2UoY2Mucm90YXRlVG8oMC41LCAtMzApLCBjYy5yb3RhdGVUbygwLjUsIDApKSkpKTtcbiAgbm9kZS53aWR0aCA9IDE1MDtcbiAgbm9kZS5oZWlnaHQgPSAxNTA7XG4gIG5vZGUuYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XG4gIG5vZGUub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgbGlleW91X3Nob3dSZWNlaXZlUmVkRGlhbG9nKHtcbiAgICAgIHR5cGU6IDFcbiAgICB9KTtcbiAgICBub2RlLmRlc3Ryb3koKTtcbiAgfSwgdGhpcyk7XG4gIHJldHVybiBub2RlO1xufTsgLy/ojrflj5bmj5DnjrDmjInpkq5cblxuXG53aW5kb3cubGlleW91X2dldENhc2tJY29uID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbm9kZSA9IGdldE5vZGUoXCJyZWRQYWNrL2Nhc2hfaWNvbi5wbmdcIik7XG4gIG5vZGUuYWRkQ29tcG9uZW50KGNjLkJ1dHRvbik7XG4gIG5vZGUub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgbGlleW91X3Nob3dDYXNoRGlhbG9nKCk7XG4gICAgLy8gbm9kZS5kZXN0cm95KCk7XG4gIH0sIHRoaXMpO1xuICByZXR1cm4gbm9kZTtcbn07XG4iXX0=