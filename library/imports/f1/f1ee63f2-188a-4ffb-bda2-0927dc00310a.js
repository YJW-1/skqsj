"use strict";
cc._RF.push(module, 'f1ee6PyGIpP+72iCSfcADEK', 'lieyou_qGamemoreGame_more');
// resources/SDK/module/qgameMoreGame/lieyou_qGamemoreGame_more.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    fNode: cc.Node,
    type: 0 //0 more 1 banner 2 side

  },
  onLoad: function onLoad() {
    if (this.type == 2) {
      if (lieyou_moreGame_type == 1 || lieyou_moreGame_type == 2) {// this.loadSprite(cc.find('myNode_side/bg_side/title_side',this.node),'SDK/module/qgameMoreGame/textture_'+lieyou_moreGame_type+'/title_side');
        // this.loadSprite(cc.find('myNode_side/bg_arrow_side',this.node),'SDK/module/qgameMoreGame/textture_'+lieyou_moreGame_type+'/arrow');
      }
    }
  },
  start: function start() {
    var winSize = cc.winSize;
    var winsizeWidth = winSize.height > winSize.width ? winSize.width : winSize.height;

    if (cc.find('myNode', this.node)) {
      cc.find('myNode', this.node).scale = winsizeWidth / 720;
    }

    if (cc.find('bg_2_side', this.node)) {
      cc.find('bg_2_side', this.node).scale = winsizeWidth / 720;
    }

    if (cc.find('myNode_side', this.node)) {
      cc.find('myNode_side', this.node).scale = winsizeWidth / 720;
    }
  },
  closeCallBack: function closeCallBack() {
    this.node.destroy();
  },
  bannerCloseCallBack: function bannerCloseCallBack() {
    this.node.destroy();
    setTimeout(function () {
      var scale = 0.8;

      if (lieyou_SdkManager.sdkWinSize.width > lieyou_SdkManager.sdkWinSize.height) {
        scale = 0.4;
      }

      lieyou_SdkManager.showBannerCustom({
        scale: scale
      });
    }, 100);
  },
  callBackShowSide: function callBackShowSide() {
    cc.find('bg_2_side/red', this.node).active = false;
    var node = cc.find('myNode_side', this.node);
    node.stopAllActions();
    node.runAction(cc.moveTo(0.2, 227 * node.scale, 0));
  },
  callBackHideSide: function callBackHideSide() {
    var node = cc.find('myNode_side', this.node);
    node.stopAllActions();
    node.runAction(cc.moveTo(0.2, 0, 0));
  },
  setData: function setData(obj, isRun, sideType, nodeY) {
    var showNum = obj.length;
    var touchType = 6;

    if (this.type == 1) {
      touchType = 3;
      showNum = lieyou_showMoreGameNum;
    } else if (this.type == 2) {
      touchType = 1;
      showNum = lieyou_showMoreGameNum;
      this.initSide(sideType, nodeY);
    }

    var objLength = obj.length;

    if (this.type == 1 || this.type == 2) {
      for (var i = obj.length; i < showNum; i++) {
        obj.push(obj[i % objLength]);
      }
    }

    if (!isRun) {
      showNum--;
    }

    this._moreGameNode = [];

    for (var _i = 0; _i < obj.length && _i < showNum; _i++) {
      var node = this.iconPrefab();
      this.fNode.addChild(node);
      node.getComponent('lieyou_qGamemoreGame_icon').setData(obj[_i], touchType);

      if (this.type == 1) {
        node.x = 75 + _i * 160;

        if (obj.length >= showNum && isRun) {
          this.myMove(node, cc.v2(-85, 0), cc.v2(75 + (showNum - 1) * 160, 0));
        }
      } else if (this.type == 2) {
        node.y = -80 - _i * 145;

        if (obj.length >= showNum && isRun) {
          this.myMove(node, cc.v2(0, 65), cc.v2(0, -80 - (showNum - 1) * 145));
        }
      }
    }

    if (this._moreGameNode.length > 0) {
      this.schedule(this.refreshMoreGameNodePos, 1 / 60);
    }

    if (!isRun) {
      showNum++;
    }

    if (this.type == 1) {
      this.fNode.width = 160 * (showNum - 1);
    } else if (this.type == 2) {
      this.fNode.height = 145 * (showNum - 1) + 15;
    }
  },
  refreshMoreGameNodePos: function refreshMoreGameNodePos() {
    var type = this.type;
    var deltaX = -1;
    var deltaY = 1;

    for (var i = 0; i < this._moreGameNode.length; i++) {
      var node = this._moreGameNode[i];
      var endPos = node.endPos;
      var begPos = node.begPos;

      if (type == 1) {
        node.x += deltaX;

        if (node.x <= endPos.x) {
          node.x = begPos.x;
        }
      } else {
        node.y += deltaY;

        if (node.y >= endPos.y) {
          node.y = begPos.y;
        }
      }
    }
  },
  myMove: function myMove(node, endPos, begPos) {
    this._moreGameNode.push(node);

    node.endPos = endPos;
    node.begPos = begPos; // var speed = 50;
    // var time = node.getPosition().sub(endPos).mag()/speed;
    // node.runAction(cc.sequence(cc.moveTo(time,endPos),cc.callFunc(()=>{
    //     node.position = begPos;
    //     this.myMove(node,endPos,begPos);
    // })));
  },
  hideDragon: function hideDragon() {
    var _this = this;

    var sideNode = cc.find('bg_2_side', this.node);
    sideNode.stopAllActions();
    sideNode.runAction(cc.sequence(cc.delayTime(5), cc.callFunc(function () {
      sideNode.x = -60 * sideNode.scale;

      if (cc.find('bg_2_side/dragon_1', _this.node).getComponent(dragonBones.ArmatureDisplay)) {
        cc.find('bg_2_side/dragon_1', _this.node).getComponent(dragonBones.ArmatureDisplay).playAnimation('sleep');
      } else if (cc.find('bg_2_side/dragon_2', _this.node).getComponent(dragonBones.ArmatureDisplay)) {
        cc.find('bg_2_side/dragon_2', _this.node).getComponent(dragonBones.ArmatureDisplay).playAnimation('newAnimation_1');
      } else if (cc.find('bg_2_side/dragon', _this.node).getComponent(dragonBones.ArmatureDisplay)) {
        cc.find('bg_2_side/dragon', _this.node).getComponent(dragonBones.ArmatureDisplay).playAnimation('anim_2');
      }
    })));
  },
  initSide: function initSide(sideType, nodeY) {
    sideType = lieyou_Userdefault.getBoolForKey('qgGame_sdk_sdie_is_right', sideType);
    nodeY = lieyou_Userdefault.getIntForKey('qgGame_sdk_sdie_node_posY', nodeY);
    this.setSideIsRigth(sideType);
    var sideNode = cc.find('bg_2_side', this.node);
    this.hideDragon();
    sideNode.y = nodeY;
    sideNode.on(cc.Node.EventType.TOUCH_START, function (event) {
      this.touchBeginPos = event.getLocation();

      if (cc.find('bg_2_side/dragon_1', this.node).getComponent(dragonBones.ArmatureDisplay)) {
        cc.find('bg_2_side/dragon_1', this.node).getComponent(dragonBones.ArmatureDisplay).playAnimation('stand');
      } else if (cc.find('bg_2_side/dragon_2', this.node).getComponent(dragonBones.ArmatureDisplay)) {
        cc.find('bg_2_side/dragon_2', this.node).getComponent(dragonBones.ArmatureDisplay).playAnimation('newAnimation');
      } else if (cc.find('bg_2_side/dragon', this.node).getComponent(dragonBones.ArmatureDisplay)) {
        cc.find('bg_2_side/dragon', this.node).getComponent(dragonBones.ArmatureDisplay).playAnimation('anim_1');
      }

      sideNode.x = 0;
      this.hideDragon();
    }.bind(this));
    sideNode.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      sideNode.x += event.getDelta().x * this.node.scaleX;
      sideNode.y += event.getDelta().y;
    }.bind(this));
    sideNode.on(cc.Node.EventType.TOUCH_END, this.sideNodeTouchEnd.bind(this));
    sideNode.on(cc.Node.EventType.TOUCH_CANCEL, this.sideNodeTouchEnd.bind(this));
  },
  sideNodeTouchEnd: function sideNodeTouchEnd(event) {
    var sideNode = cc.find('bg_2_side', this.node);
    var winH = cc.winSize.height / 2;
    var winW = cc.winSize.width;

    if (sideNode.y > winH * 0.65) {
      sideNode.y = winH * 0.65;
    } else if (sideNode.y < winH * 0.65 * -1) {
      sideNode.y = winH * 0.65 * -1;
    }

    var sideRight = false;

    if (sideNode.convertToWorldSpaceAR(cc.v2(55, 0)).x > winW / 2) {
      sideRight = true;
    }

    sideNode.x = 0;
    lieyou_Userdefault.setDataForKey('qgGame_sdk_sdie_node_posY', sideNode.y);
    lieyou_Userdefault.setBoolForKey('qgGame_sdk_sdie_is_right', sideRight);
    this.setSideIsRigth(sideRight);

    if (this.touchBeginPos.sub(event.getLocation()).mag() < 10) {
      this.callBackShowSide();
    }
  },
  setSideIsRigth: function setSideIsRigth(sideType) {
    if (sideType) {
      this.node.scaleX = -1;
      this.node.x = cc.winSize.width;
      cc.find('myNode_side/bg_side/title_side', this.node).scaleX = -1;
    } else {
      this.node.scaleX = 1;
      this.node.x = 0;
      cc.find('myNode_side/bg_side/title_side', this.node).scaleX = 1;
    }
  } // update (dt) {},

});

cc._RF.pop();