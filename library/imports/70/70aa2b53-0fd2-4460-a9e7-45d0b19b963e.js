"use strict";
cc._RF.push(module, '70aa2tTD9JEYKnnRdCxm5Y+', 'lieyou_tt_luPing');
// resources/SDK/module/tt_luPing/lieyou_tt_luPing.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {
    this.bNode = cc.find('luPingBegin', this.node);
    this.eNode = cc.find('luPingEnd', this.node);
    this.luPing = false;
    var node = cc.find('luPingEnd/luPingEnd2', this.node);
    node.runAction(cc.repeatForever(cc.sequence(cc.fadeOut(0.4), cc.fadeIn(0.4))));
  },
  setColor: function setColor() {
    var _this = this;

    var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'black';
    var luPingBeginUrl = 'tt/luPingBegin';
    var luPingEndUrl = 'tt/luPingEnd';

    if (color == 'white') {
      luPingBeginUrl = 'tt/luPingBeginB';
      luPingEndUrl = 'tt/luPingEndB';
    }

    lieyou_load(luPingBeginUrl, function (err, texture) {
      cc.find('luPingBegin', _this.node).getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });
    lieyou_load(luPingEndUrl, function (err, texture) {
      cc.find('luPingEnd', _this.node).getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });
  },
  setData: function setData(callBack) {
    this._callBack = callBack;
  },
  callBack: function callBack() {
    var self = this;
    this.luPing = !this.luPing;

    if (this.luPing) {
      lieyou_SdkManager.beginLuPing(30, function (type) {
        if (self._callBack) {
          self._callBack(type);
        }
      });
      this.bNode.active = false;
      this.eNode.active = true;
    } else {
      lieyou_SdkManager.stopLuPing();
      this.bNode.active = true;
      this.eNode.active = false;
    }
  },
  stop: function stop() {
    this.luPing = false;
    this.bNode.active = true;
    this.eNode.active = false;
  } // update (dt) {},

});

cc._RF.pop();