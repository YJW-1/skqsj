"use strict";
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