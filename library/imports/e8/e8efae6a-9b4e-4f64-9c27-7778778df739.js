"use strict";
cc._RF.push(module, 'e8efa5qm05PZJwnd3h3jfc5', 'XiaoMiManagerH5');
// resources/SDK/scripts/XiaoMiManagerH5.js

"use strict";

//加在index.html </body>上一行 
//<script type="text/javascript"  src="https://static.g.mi.com/game/h5sdk/h5-dj-sdk-v.1.0.min.js"></script>
var XiaoMiManagerH5 = cc.Class({
  "extends": require('BaseManager'),
  properties: {
    bannerAd: null
  },
  getHaveVideo: function getHaveVideo() {
    return false;
  },
  getSysPlatform_string: function getSysPlatform_string() {
    return 'xiaomih5';
  },
  getSysPlatform: function getSysPlatform() {
    return 7;
  },
  init: function init(obj) {
    this._super();

    window.hy_dj_sdk.ready({
      zIndex: 9999,
      pin: 0
    }, function () {
      //sdk已经加载完成，可执行游戏的初始化逻辑
      lieyou_showLog('xiaomi init over');
    }); // var xiaoMiBaseData = this.getBaseData();
    // this.reload();
  },
  getBaseData: function getBaseData() {
    return hy_dj_sdk.getBaseData();
  },
  reload: function reload() {
    hy_dj_sdk.reload();
  }
});
module.exports = XiaoMiManagerH5;

cc._RF.pop();