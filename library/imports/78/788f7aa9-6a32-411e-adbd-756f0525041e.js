"use strict";
cc._RF.push(module, '788f7qpajJBHq29dW8FJQQe', 'lieyou_nativeLoad');
// resources/SDK/module/qGameNativeAd/lieyou_nativeLoad.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {
    this.loadText = ["加载中", "加载中.", "加载中..", "加载中..."];
    this.loadLabel.string = this.loadText[0];
    this.nowTime = 0;
    this.schedule(this.refreshTime);
  },
  refreshTime: function refreshTime() {
    this.nowTime++;

    if (this.nowTime >= this.allTime) {
      this.unschedule(this.refreshTime);
      this.canTouch = true;
      this.loadLabel.node.active = false;
      this.callBack();
    }

    this.loadNode.getComponent(cc.Sprite).fillRange = this.nowTime / this.allTime;
    this.quanNode.getComponent(cc.Sprite).fillRange = 1 - this.nowTime / this.allTime;
    this.loadLabel.string = this.loadText[parseInt(this.nowTime / 20) % 4];
  },
  callBack: function callBack() {
    this.canTouch && this.closeCallBack && (this.closeCallBack(), this.node.destroy());
  } // update (dt) {},

});

cc._RF.pop();