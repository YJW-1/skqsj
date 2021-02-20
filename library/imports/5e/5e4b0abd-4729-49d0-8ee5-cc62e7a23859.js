"use strict";
cc._RF.push(module, '5e4b0q9RylJ0I7lzGLnojhZ', 'lieyou_baseNode');
// resources/SDK/module/common/lieyou_baseNode.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  start: function start() {},
  onEnable: function onEnable() {
    if (this.enableCallBack) {
      this.enableCallBack();
    }
  },
  onDisable: function onDisable() {
    if (this.destroyCallBack) {
      this.destroyCallBack();
    }
  },
  update: function update(dt) {
    this.updateCallBack && this.updateCallBack();
  }
});

cc._RF.pop();