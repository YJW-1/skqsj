
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/module/qgameMoreGame/lieyou_qGamemoreGame_icon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3e18fq04CVNX4hrvOAtDRMl', 'lieyou_qGamemoreGame_icon');
// resources/SDK/module/qgameMoreGame/lieyou_qGamemoreGame_icon.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    image: cc.Node,
    redNode: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {},
  start: function start() {},
  setData: function setData(obj, touchType) {
    this._touchType = touchType;
    this.jumpData = obj.jumpData;
    this._id = obj.id; //var name = obj.gameName

    this.jumpData.gameName = obj.gameName;
    this.jumpData.id = obj.id;

    if (obj.url) {
      this.loadSpriteFrame(obj.url, this.image);
      this.jumpData.url = obj.url;
    } else {
      lieyou_showLog('qgame more game url null');
    }

    if (lieyou_Userdefault.getBoolForKey('ag_moreGame_isTouch_' + this._id, false)) {
      this.redNode.active = false;
    } else {
      this.redNode.active = true;
    }
  },
  loadSpriteFrame: function loadSpriteFrame(url, node) {
    if (url == "") {
      return;
    }

    if (cc.sys.platform === cc.sys.WECHAT_GAME) {
      url = url.replace("http", "https");
    }

    var loadFile = {
      url: url,
      type: "image"
    };
    cc.loader.load(loadFile, function (err, tex) {
      if (err) {
        return;
      }

      if (node && node.isValid) node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
    });
  },
  callBackTouch: function callBackTouch() {
    lieyou_Userdefault.setBoolForKey('ag_moreGame_isTouch_' + this._id, true);
    this.redNode.active = false;
    lieyou_SdkManager.newJumpApp({
      data: this.jumpData,
      success: this.clickAdSuccessCallBack.bind(this)
    });
  },
  clickAdSuccessCallBack: function clickAdSuccessCallBack() {
    try {
      lieyou_SdkManager.setadtrack(this._id, this._touchType);
    } catch (error) {
      lieyou_showLog('jump game fail + ' + JSON.stringify(error));
    }
  },
  setDataForHttp: function setDataForHttp(url) {
    //提交数据到服务器 无返回值 
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status < 400) {
        var response = xhr.responseText;

        if (response == '-1') {} else if (response == '-2') {} else {}
      }
    };

    xhr.open("GET", url, true);
    xhr.send();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXG1vZHVsZVxccWdhbWVNb3JlR2FtZVxcbGlleW91X3FHYW1lbW9yZUdhbWVfaWNvbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImltYWdlIiwiTm9kZSIsInJlZE5vZGUiLCJvbkxvYWQiLCJzdGFydCIsInNldERhdGEiLCJvYmoiLCJ0b3VjaFR5cGUiLCJfdG91Y2hUeXBlIiwianVtcERhdGEiLCJfaWQiLCJpZCIsImdhbWVOYW1lIiwidXJsIiwibG9hZFNwcml0ZUZyYW1lIiwibGlleW91X3Nob3dMb2ciLCJsaWV5b3VfVXNlcmRlZmF1bHQiLCJnZXRCb29sRm9yS2V5IiwiYWN0aXZlIiwibm9kZSIsInN5cyIsInBsYXRmb3JtIiwiV0VDSEFUX0dBTUUiLCJyZXBsYWNlIiwibG9hZEZpbGUiLCJ0eXBlIiwibG9hZGVyIiwibG9hZCIsImVyciIsInRleCIsImlzVmFsaWQiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsIlNwcml0ZUZyYW1lIiwiY2FsbEJhY2tUb3VjaCIsInNldEJvb2xGb3JLZXkiLCJsaWV5b3VfU2RrTWFuYWdlciIsIm5ld0p1bXBBcHAiLCJkYXRhIiwic3VjY2VzcyIsImNsaWNrQWRTdWNjZXNzQ2FsbEJhY2siLCJiaW5kIiwic2V0YWR0cmFjayIsImVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldERhdGFGb3JIdHRwIiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicmVzcG9uc2UiLCJyZXNwb25zZVRleHQiLCJvcGVuIiwic2VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElB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LEtBQUtqQyxHQUFsQyxFQUFzQyxLQUFLRixVQUEzQztBQUNILEtBRkQsQ0FFRSxPQUFPb0MsS0FBUCxFQUFjO0FBQ1o3QixNQUFBQSxjQUFjLENBQUMsc0JBQXFCOEIsSUFBSSxDQUFDQyxTQUFMLENBQWVGLEtBQWYsQ0FBdEIsQ0FBZDtBQUNIO0FBQ0osR0FwRUk7QUFzRUxHLEVBQUFBLGNBQWMsRUFBRSx3QkFBU2xDLEdBQVQsRUFBYTtBQUMvQjtBQUNBLFFBQUltQyxHQUFHLEdBQUcsSUFBSUMsY0FBSixFQUFWOztBQUNBRCxJQUFBQSxHQUFHLENBQUNFLGtCQUFKLEdBQXlCLFlBQVk7QUFDcEMsVUFBSUYsR0FBRyxDQUFDRyxVQUFKLElBQWtCLENBQWxCLElBQXdCSCxHQUFHLENBQUNJLE1BQUosSUFBYyxHQUFkLElBQXFCSixHQUFHLENBQUNJLE1BQUosR0FBYSxHQUE5RCxFQUFvRTtBQUNuRSxZQUFJQyxRQUFRLEdBQUdMLEdBQUcsQ0FBQ00sWUFBbkI7O0FBQ0EsWUFBR0QsUUFBUSxJQUFFLElBQWIsRUFBa0IsQ0FDakIsQ0FERCxNQUVLLElBQUdBLFFBQVEsSUFBRSxJQUFiLEVBQWtCLENBQ3RCLENBREksTUFFRCxDQUNIO0FBQ0Q7QUFDRCxLQVZEOztBQVdBTCxJQUFBQSxHQUFHLENBQUNPLElBQUosQ0FBUyxLQUFULEVBQWdCMUMsR0FBaEIsRUFBcUIsSUFBckI7QUFDQW1DLElBQUFBLEdBQUcsQ0FBQ1EsSUFBSjtBQUNBLEdBdEZPLENBdUZMOztBQXZGSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaW1hZ2U6IGNjLk5vZGUsXHJcbiAgICAgICAgcmVkTm9kZTogY2MuTm9kZSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgIH0sXHJcbiAgIFxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIHNldERhdGEob2JqLHRvdWNoVHlwZSl7XHJcbiAgICAgICAgdGhpcy5fdG91Y2hUeXBlID0gdG91Y2hUeXBlO1xyXG4gICAgICAgIHRoaXMuanVtcERhdGEgPSBvYmouanVtcERhdGE7XHJcbiAgICAgICAgdGhpcy5faWQgPSBvYmouaWQ7XHJcbiAgICAgICAgLy92YXIgbmFtZSA9IG9iai5nYW1lTmFtZVxyXG4gICAgICAgIHRoaXMuanVtcERhdGEuZ2FtZU5hbWUgPSBvYmouZ2FtZU5hbWU7XHJcbiAgICAgICAgdGhpcy5qdW1wRGF0YS5pZCA9IG9iai5pZDtcclxuICAgICAgICBpZihvYmoudXJsKXtcclxuICAgICAgICAgICAgdGhpcy5sb2FkU3ByaXRlRnJhbWUob2JqLnVybCx0aGlzLmltYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5qdW1wRGF0YS51cmwgPSBvYmoudXJsO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsaWV5b3Vfc2hvd0xvZygncWdhbWUgbW9yZSBnYW1lIHVybCBudWxsJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGxpZXlvdV9Vc2VyZGVmYXVsdC5nZXRCb29sRm9yS2V5KCdhZ19tb3JlR2FtZV9pc1RvdWNoXycrdGhpcy5faWQsZmFsc2UpKXtcclxuICAgICAgICAgICAgdGhpcy5yZWROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnJlZE5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbG9hZFNwcml0ZUZyYW1lOiBmdW5jdGlvbih1cmwsbm9kZSl7XHJcbiAgICAgICAgaWYodXJsID09IFwiXCIpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSl7XHJcbiAgICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKFwiaHR0cFwiLFwiaHR0cHNcIik7XHJcbiAgICAgICAgfVxyXG5cdFx0dmFyIGxvYWRGaWxlID0ge1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZVwiXHJcbiAgICAgICAgfTtcclxuXHRcdGNjLmxvYWRlci5sb2FkKGxvYWRGaWxlLCBmdW5jdGlvbiAoZXJyLCB0ZXgpIHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKG5vZGUgJiYgbm9kZS5pc1ZhbGlkKVxyXG4gICAgICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNhbGxCYWNrVG91Y2goKXtcclxuICAgICAgICBsaWV5b3VfVXNlcmRlZmF1bHQuc2V0Qm9vbEZvcktleSgnYWdfbW9yZUdhbWVfaXNUb3VjaF8nK3RoaXMuX2lkLHRydWUpO1xyXG4gICAgICAgIHRoaXMucmVkTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBsaWV5b3VfU2RrTWFuYWdlci5uZXdKdW1wQXBwKHtcclxuICAgICAgICAgICAgZGF0YTp0aGlzLmp1bXBEYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzOnRoaXMuY2xpY2tBZFN1Y2Nlc3NDYWxsQmFjay5iaW5kKHRoaXMpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY2xpY2tBZFN1Y2Nlc3NDYWxsQmFjaygpe1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnNldGFkdHJhY2sodGhpcy5faWQsdGhpcy5fdG91Y2hUeXBlKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGxpZXlvdV9zaG93TG9nKCdqdW1wIGdhbWUgZmFpbCArICcrIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzZXREYXRhRm9ySHR0cDogZnVuY3Rpb24odXJsKXtcclxuXHRcdC8v5o+Q5Lqk5pWw5o2u5Yiw5pyN5Yqh5ZmoIOaXoOi/lOWbnuWAvCBcclxuXHRcdHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgNDAwKSkge1xyXG5cdFx0XHRcdHZhciByZXNwb25zZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcblx0XHRcdFx0aWYocmVzcG9uc2U9PSctMScpe1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmKHJlc3BvbnNlPT0nLTInKXtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZXtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHR4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG5cdFx0eGhyLnNlbmQoKTtcclxuXHR9LFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=