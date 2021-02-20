"use strict";
cc._RF.push(module, '903e4eCoItL05fwyjHtlS8F', 'lieyou_qGameMoreGame_showMore');
// resources/SDK/module/qgameMoreGame/lieyou_qGameMoreGame_showMore.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {},
  start: function start() {
    this.node.runAction(cc.repeatForever(cc.sequence(cc.rotateBy(0.03, -15), cc.rotateBy(0.03, 0), cc.rotateBy(0.03, 15), cc.rotateBy(0.03, 0), cc.rotateBy(0.03, -10), cc.rotateBy(0.03, 0), cc.rotateBy(0.03, 10), cc.rotateBy(0.03, 0), cc.rotateBy(0.03, -5), cc.rotateBy(0.03, 0), cc.rotateBy(0.03, 5), cc.rotateBy(0.03, 0), cc.delayTime(2 + Math.random() * 1))));
  },
  setData: function setData(callBack) {
    this._callBack = callBack;
  },
  callBack: function callBack() {
    cc.find('red', this.node).active = false;

    if (this._callBack) {
      this._callBack();
    }
  } // update (dt) {},

});

cc._RF.pop();