
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/module/qGameNativeAd/nativePlayIconADSdk.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97949r7ZpZBk7w2oNDMYCMf', 'nativePlayIconADSdk');
// resources/SDK/module/qGameNativeAd/nativePlayIconADSdk.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  refreshData: function refreshData(obj) {},
  setData: function setData(data) {
    try {
      cc.find('myNode', this.node).active = true;
      this._callBack = data.callBack;
      this.loadSpriteFrame(data.url, cc.find('myNode/imageBg/image/image', this.node));
      cc.find('myNode/wordBg/name', this.node).getComponent(cc.Label).string = this.getName(data.title);
    } catch (error) {}
  },
  getName: function getName(name) {
    if (name.length <= 5) {
      return name;
    }

    var name2 = '';

    for (var i = 0; i < 5; i++) {
      name2 = name2 + name[i];
    }

    name2 = name2 + '...';
    return name2;
  },
  loadSpriteFrame: function loadSpriteFrame(img, node) {
    if (img == '') {
      return;
    }

    var loadFile = {
      url: img,
      type: "image"
    };
    cc.loader.load(loadFile, function (err, tex) {
      if (err) {
        return;
      }

      if (node && node.isValid) {
        node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
      }
    });
  },
  start: function start() {
    this.refreshData();
    this.node.runAction(cc.repeatForever(cc.sequence(cc.rotateBy(0.03, -15), cc.rotateBy(0.03, 0), cc.rotateBy(0.03, 15), cc.rotateBy(0.03, 0), cc.rotateBy(0.03, -10), cc.rotateBy(0.03, 0), cc.rotateBy(0.03, 10), cc.rotateBy(0.03, 0), cc.rotateBy(0.03, -5), cc.rotateBy(0.03, 0), cc.rotateBy(0.03, 5), cc.rotateBy(0.03, 0), cc.delayTime(2 + Math.random() * 1))));
    this.schedule(this.refreshData, 5);
  },
  callBack: function callBack() {
    this._callBack();
  } // update (dt) {},

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXG1vZHVsZVxccUdhbWVOYXRpdmVBZFxcbmF0aXZlUGxheUljb25BRFNkay5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInJlZnJlc2hEYXRhIiwib2JqIiwic2V0RGF0YSIsImRhdGEiLCJmaW5kIiwibm9kZSIsImFjdGl2ZSIsIl9jYWxsQmFjayIsImNhbGxCYWNrIiwibG9hZFNwcml0ZUZyYW1lIiwidXJsIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzdHJpbmciLCJnZXROYW1lIiwidGl0bGUiLCJlcnJvciIsIm5hbWUiLCJsZW5ndGgiLCJuYW1lMiIsImkiLCJpbWciLCJsb2FkRmlsZSIsInR5cGUiLCJsb2FkZXIiLCJsb2FkIiwiZXJyIiwidGV4IiwiaXNWYWxpZCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJzdGFydCIsInJ1bkFjdGlvbiIsInJlcGVhdEZvcmV2ZXIiLCJzZXF1ZW5jZSIsInJvdGF0ZUJ5IiwiZGVsYXlUaW1lIiwiTWF0aCIsInJhbmRvbSIsInNjaGVkdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MQyxFQUFBQSxXQVBLLHVCQU9PQyxHQVBQLEVBT1csQ0FDZixDQVJJO0FBU0xDLEVBQUFBLE9BVEssbUJBU0dDLElBVEgsRUFTUTtBQUNULFFBQUk7QUFDQVAsTUFBQUEsRUFBRSxDQUFDUSxJQUFILENBQVEsUUFBUixFQUFpQixLQUFLQyxJQUF0QixFQUE0QkMsTUFBNUIsR0FBcUMsSUFBckM7QUFDQSxXQUFLQyxTQUFMLEdBQWlCSixJQUFJLENBQUNLLFFBQXRCO0FBQ0EsV0FBS0MsZUFBTCxDQUFxQk4sSUFBSSxDQUFDTyxHQUExQixFQUE4QmQs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QUN3QyxRQUFILENBQVksSUFBWixFQUFpQixDQUFqQixDQUg1QixFQUlqQ3hDLEVBQUUsQ0FBQ3lDLFNBQUgsQ0FBYSxJQUFJQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsQ0FBakMsQ0FKaUMsQ0FBakIsQ0FBcEI7QUFNQSxTQUFLQyxRQUFMLENBQWMsS0FBS3hDLFdBQW5CLEVBQStCLENBQS9CO0FBQ0gsR0ExREk7QUEyRExRLEVBQUFBLFFBQVEsRUFBRSxvQkFBVTtBQUN0QixTQUFLRCxTQUFMO0FBQ0csR0E3REksQ0ErREw7O0FBL0RLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICByZWZyZXNoRGF0YShvYmope1xyXG4gICAgfSxcclxuICAgIHNldERhdGEoZGF0YSl7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY2MuZmluZCgnbXlOb2RlJyx0aGlzLm5vZGUpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbGxCYWNrID0gZGF0YS5jYWxsQmFjaztcclxuICAgICAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUoZGF0YS51cmwsY2MuZmluZCgnbXlOb2RlL2ltYWdlQmcvaW1hZ2UvaW1hZ2UnLHRoaXMubm9kZSkpO1xyXG4gICAgICAgICAgICBjYy5maW5kKCdteU5vZGUvd29yZEJnL25hbWUnLHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmdldE5hbWUoZGF0YS50aXRsZSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIGdldE5hbWUobmFtZSl7XHJcbiAgICAgICAgaWYobmFtZS5sZW5ndGggPD0gNSl7XHJcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbmFtZTIgPSAnJztcclxuICAgICAgICBmb3IodmFyIGkgPSAwO2kgPCA1O2krKyl7XHJcbiAgICAgICAgICAgIG5hbWUyID0gbmFtZTIgKyBuYW1lW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuYW1lMiA9IG5hbWUyICsgJy4uLidcclxuICAgICAgICByZXR1cm4gbmFtZTI7XHJcbiAgICB9LFxyXG4gICAgbG9hZFNwcml0ZUZyYW1lOiBmdW5jdGlvbihpbWcsbm9kZSl7XHJcbiAgICAgICAgaWYoaW1nID09ICcnKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbG9hZEZpbGUgPSB7XHJcbiAgICAgICAgICAgIHVybDogaW1nLFxyXG4gICAgICAgICAgICB0eXBlOiBcImltYWdlXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkKGxvYWRGaWxlLCBmdW5jdGlvbiAoZXJyLCB0ZXgpIHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG5vZGUgJiYgbm9kZS5pc1ZhbGlkKXtcclxuICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoRGF0YSgpO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgY2Mucm90YXRlQnkoMC4wMywtMTUpLGNjLnJvdGF0ZUJ5KDAuMDMsMCksY2Mucm90YXRlQnkoMC4wMywxNSksY2Mucm90YXRlQnkoMC4wMywwKSxcclxuICAgICAgICAgICAgY2Mucm90YXRlQnkoMC4wMywtMTApLGNjLnJvdGF0ZUJ5KDAuMDMsMCksY2Mucm90YXRlQnkoMC4wMywxMCksY2Mucm90YXRlQnkoMC4wMywwKSxcclxuICAgICAgICAgICAgY2Mucm90YXRlQnkoMC4wMywtNSksY2Mucm90YXRlQnkoMC4wMywwKSxjYy5yb3RhdGVCeSgwLjAzLDUpLGNjLnJvdGF0ZUJ5KDAuMDMsMCksXHJcbiAgICAgICAgICAgIGNjLmRlbGF5VGltZSgyICsgTWF0aC5yYW5kb20oKSAqIDEpKSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5yZWZyZXNoRGF0YSw1KTtcclxuICAgIH0sXHJcbiAgICBjYWxsQmFjazogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuX2NhbGxCYWNrKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19