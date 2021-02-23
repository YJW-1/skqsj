"use strict";

var moduleMap = {
  'src/assets/script/Game/polybool.js': function srcAssetsScriptGamePolyboolJs() {
    require('src/assets/script/Game/polybool.js');
  },
  'src/project.js': function srcProjectJs() {
    require('src/project.js');
  }
};

window.__cocos_require__ = function (moduleName) {
  var func = moduleMap[moduleName];
  func && func();
};