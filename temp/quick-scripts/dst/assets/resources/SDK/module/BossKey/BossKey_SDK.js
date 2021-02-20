
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/module/BossKey/BossKey_SDK.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f9639wPf0xGPbeT3J8qR5J/', 'BossKey_SDK');
// resources/SDK/module/BossKey/BossKey_SDK.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    bossNode: cc.Node
  },
  // LIFE-CYCLE CALLBACKS:
  scrollViewtouEnd: function scrollViewtouEnd(event) {
    this.scrollViewContent.y += event.getDelta().y;

    if (this.scrollViewContent.y < -400 - (this.scrollViewContent.height - 400)) {
      this.scrollViewContent.y = -400 - (this.scrollViewContent.height - 400);
    }

    if (this.scrollViewContent.y > -400) {
      this.scrollViewContent.y = -400;
    }
  },
  onLoad: function onLoad() {
    var _this = this;

    cc.find('node/node', this.node).scale = lieyou_SdkManager._SceneScale;
    this.bossNode.scale = lieyou_SdkManager._SceneScale;
    this.scrollViewContent = cc.find('node/node/ScrollView/view/content', this.node);
    this.scrollView = cc.find('node/node/ScrollView', this.node);
    this.scrollView.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      _this.scrollViewContent.y += event.getDelta().y;
    });
    this.scrollView.on(cc.Node.EventType.TOUCH_END, function (event) {
      _this.scrollViewtouEnd(event);
    });
    this.scrollView.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
      _this.scrollViewtouEnd(event);
    });

    this.scrollView._touchListener.setSwallowTouches(false);

    this.titleArray = [];
    var winSize = cc.winSize;
    this.bossNode.x = cc.winSize.width * -0.5;
    this.bossNode.y = cc.winSize.height * 0.5; // cc.find('node/node/ScrollView',this.node)._touchListener.setSwallowTouches(false);
  },
  start: function start() {
    this.touchNum = 0;
    this.time = parseInt(getTime() / 1000);
    this.bossNode.on(cc.Node.EventType.TOUCH_START, function (event) {
      if (this.bossNode._touchListener) {
        this.bossNode._touchListener.setSwallowTouches(false);
      }

      this.touchNum++;
      var nowTime = parseInt(getTime() / 1000);

      if (nowTime - this.time < 10) {
        if (this.touchNum >= 7) {
          lieyou_showDebug = true;
          cc.find('node/node/version', this.node).getComponent(cc.Label).string = ' ' + _SDKVersion + '/' + lieyou_SdkManager.instance.getVersion();
          this.touchNum = 0;
          this.time = nowTime;
          cc.find('node/node', this.node).active = true;
        }
      } else {
        this.touchNum = 0;
        this.time = nowTime;
      }
    }.bind(this));
  },
  addTitle: function addTitle() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    if (!cc.find('node/node', this.node).active) {
      return;
    }

    var fnode = this.scrollViewContent;
    var node = new cc.Node();
    node.width = 300;
    node.anchorX = 0;
    node.anchorY = 0;
    var label = node.addComponent(cc.Label);
    label.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
    label.string = title;
    label.fontSize = 25;
    fnode.addChild(node); // node.color = cc.color(0,0,0);
    // for(let i = 0;i < fnode.children.length;i++){
    //     if(fnode.children[i].y < 0){
    //         fnode.children[i].destroy();
    //     }
    // }
    // node.y = cc.find('node/node',this.node).height;
    // this.titleArray.pash(node);
  },
  closeCallBack: function closeCallBack() {
    cc.find('node/node', this.node).active = false;
  },
  clearCallBack: function clearCallBack() {
    this.scrollViewContent.removeAllChildren();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXG1vZHVsZVxcQm9zc0tleVxcQm9zc0tleV9TREsuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJib3NzTm9kZSIsIk5vZGUiLCJzY3JvbGxWaWV3dG91RW5kIiwiZXZlbnQiLCJzY3JvbGxWaWV3Q29udGVudCIsInkiLCJnZXREZWx0YSIsImhlaWdodCIsIm9uTG9hZCIsImZpbmQiLCJub2RlIiwic2NhbGUiLCJsaWV5b3VfU2RrTWFuYWdlciIsIl9TY2VuZVNjYWxlIiwic2Nyb2xsVmlldyIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfTU9WRSIsIlRPVUNIX0VORCIsIlRPVUNIX0NBTkNFTCIsIl90b3VjaExpc3RlbmVyIiwic2V0U3dhbGxvd1RvdWNoZXMiLCJ0aXRsZUFycmF5Iiwid2luU2l6ZSIsIngiLCJ3aWR0aCIsInN0YXJ0IiwidG91Y2hOdW0iLCJ0aW1lIiwicGFyc2VJbnQiLCJnZXRUaW1lIiwiVE9VQ0hfU1RBUlQiLCJub3dUaW1lIiwibGlleW91X3Nob3dEZWJ1ZyIsImdldENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwiX1NES1ZlcnNpb24iLCJpbnN0YW5jZSIsImdldFZlcnNpb24iLCJhY3RpdmUiLCJiaW5kIiwiYWRkVGl0bGUiLCJ0aXRsZSIsImZub2RlIiwiYW5jaG9yWCIsImFuY2hvclkiLCJsYWJlbCIsImFkZENvbXBvbmVudCIsIm92ZXJmbG93IiwiT3ZlcmZsb3ciLCJSRVNJWkVfSEVJR0hUIiwiZm9udFNpemUiLCJhZGRDaGlsZCIsImNsb3NlQ2FsbEJhY2siLCJjbGVhckNhbGxCYWNrIiwicmVtb3ZlQWxsQ2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFB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Q3RDO0FBQ0g7O0FBQ0QsUUFBSUksS0FBSyxHQUFHLEtBQUt4QyxpQkFBakI7QUFDQSxRQUFJTSxJQUFJLEdBQUcsSUFBSWQsRUFBRSxDQUFDSyxJQUFQLEVBQVg7QUFDQVMsSUFBQUEsSUFBSSxDQUFDZSxLQUFMLEdBQWEsR0FBYjtBQUNBZixJQUFBQSxJQUFJLENBQUNtQyxPQUFMLEdBQWUsQ0FBZjtBQUNBbkMsSUFBQUEsSUFBSSxDQUFDb0MsT0FBTCxHQUFlLENBQWY7QUFDQSxRQUFJQyxLQUFLLEdBQUdyQyxJQUFJLENBQUNzQyxZQUFMLENBQWtCcEQsRUFBRSxDQUFDdUMsS0FBckIsQ0FBWjtBQUNBWSxJQUFBQSxLQUFLLENBQUNFLFFBQU4sR0FBaUJyRCxFQUFFLENBQUN1QyxLQUFILENBQVNlLFFBQVQsQ0FBa0JDLGFBQW5DO0FBQ0FKLElBQUFBLEtBQUssQ0FBQ1gsTUFBTixHQUFlTyxLQUFmO0FBQ0FJLElBQUFBLEtBQUssQ0FBQ0ssUUFBTixHQUFpQixFQUFqQjtBQUNBUixJQUFBQSxLQUFLLENBQUNTLFFBQU4sQ0FBZTNDLElBQWYsRUFiZ0IsQ0FjaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNILEdBeEZJO0FBMEZMNEMsRUFBQUEsYUExRkssMkJBMEZVO0FBQ1gxRCxJQUFBQSxFQUFFLENBQUNhLElBQUgsQ0FBUSxXQUFSLEVBQW9CLEtBQUtDLElBQXpCLEVBQStCOEIsTUFBL0IsR0FBd0MsS0FBeEM7QUFDSCxHQTVGSTtBQTZGTGUsRUFBQUEsYUE3RkssMkJBNkZVO0FBQ1gsU0FBS25ELGlCQUFMLENBQXVCb0QsaUJBQXZCO0FBQ0gsR0EvRkksQ0FnR0w7O0FBaEdLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJvc3NOb2RlOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuICAgIHNjcm9sbFZpZXd0b3VFbmQoZXZlbnQpe1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlld0NvbnRlbnQueSs9ZXZlbnQuZ2V0RGVsdGEoKS55O1xyXG4gICAgICAgIGlmKHRoaXMuc2Nyb2xsVmlld0NvbnRlbnQueSA8IC00MDAtKHRoaXMuc2Nyb2xsVmlld0NvbnRlbnQuaGVpZ2h0LTQwMCkpe1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXdDb250ZW50LnkgPSAtNDAwLSh0aGlzLnNjcm9sbFZpZXdDb250ZW50LmhlaWdodC00MDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnNjcm9sbFZpZXdDb250ZW50LnkgPiAtNDAwKXtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3Q29udGVudC55ID0gLTQwMDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjYy5maW5kKCdub2RlL25vZGUnLHRoaXMubm9kZSkuc2NhbGUgPSBsaWV5b3VfU2RrTWFuYWdlci5fU2NlbmVTY2FsZTtcclxuICAgICAgICB0aGlzLmJvc3NOb2RlLnNjYWxlID0gbGlleW91X1Nka01hbmFnZXIuX1NjZW5lU2NhbGU7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3Q29udGVudCA9IGNjLmZpbmQoJ25vZGUvbm9kZS9TY3JvbGxWaWV3L3ZpZXcvY29udGVudCcsdGhpcy5ub2RlKTtcclxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcgPSBjYy5maW5kKCdub2RlL25vZGUvU2Nyb2xsVmlldycsdGhpcy5ub2RlKTtcclxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlld0NvbnRlbnQueSs9ZXZlbnQuZ2V0RGVsdGEoKS55O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwoZXZlbnQpPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlld3RvdUVuZChldmVudCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLChldmVudCk9PntcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3dG91RW5kKGV2ZW50KTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5fdG91Y2hMaXN0ZW5lci5zZXRTd2FsbG93VG91Y2hlcyhmYWxzZSk7XHJcbiAgICAgICAgdGhpcy50aXRsZUFycmF5ID0gW107XHJcbiAgICAgICAgdmFyIHdpblNpemUgPSBjYy53aW5TaXplO1xyXG4gICAgICAgIHRoaXMuYm9zc05vZGUueCA9IGNjLndpblNpemUud2lkdGgqLTAuNTtcclxuICAgICAgICB0aGlzLmJvc3NOb2RlLnkgPSBjYy53aW5TaXplLmhlaWdodCowLjU7XHJcblxyXG4gICAgICAgIC8vIGNjLmZpbmQoJ25vZGUvbm9kZS9TY3JvbGxWaWV3Jyx0aGlzLm5vZGUpLl90b3VjaExpc3RlbmVyLnNldFN3YWxsb3dUb3VjaGVzKGZhbHNlKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMudG91Y2hOdW0gPSAwO1xyXG4gICAgICAgIHRoaXMudGltZSA9IHBhcnNlSW50KGdldFRpbWUoKS8xMDAwKTtcclxuICAgICAgICB0aGlzLmJvc3NOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvc3NOb2RlLl90b3VjaExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvc3NOb2RlLl90b3VjaExpc3RlbmVyLnNldFN3YWxsb3dUb3VjaGVzKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnRvdWNoTnVtKys7XHJcbiAgICAgICAgICAgIHZhciBub3dUaW1lID0gcGFyc2VJbnQoZ2V0VGltZSgpLzEwMDApO1xyXG4gICAgICAgICAgICBpZihub3dUaW1lIC0gdGhpcy50aW1lIDwgMTApe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy50b3VjaE51bSA+PSA3KXtcclxuICAgICAgICAgICAgICAgICAgICBsaWV5b3Vfc2hvd0RlYnVnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdub2RlL25vZGUvdmVyc2lvbicsdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9JyAnK19TREtWZXJzaW9uKyAnLycgKyBsaWV5b3VfU2RrTWFuYWdlci5pbnN0YW5jZS5nZXRWZXJzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VjaE51bSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lID0gbm93VGltZTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5maW5kKCdub2RlL25vZGUnLHRoaXMubm9kZSkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdWNoTnVtID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZSA9IG5vd1RpbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgYWRkVGl0bGUodGl0bGUgPSAnJyl7XHJcbiAgICAgICAgaWYoIWNjLmZpbmQoJ25vZGUvbm9kZScsdGhpcy5ub2RlKS5hY3RpdmUpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBmbm9kZSA9IHRoaXMuc2Nyb2xsVmlld0NvbnRlbnQ7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIG5vZGUud2lkdGggPSAzMDA7XHJcbiAgICAgICAgbm9kZS5hbmNob3JYID0gMDtcclxuICAgICAgICBub2RlLmFuY2hvclkgPSAwO1xyXG4gICAgICAgIHZhciBsYWJlbCA9IG5vZGUuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICBsYWJlbC5vdmVyZmxvdyA9IGNjLkxhYmVsLk92ZXJmbG93LlJFU0laRV9IRUlHSFQ7XHJcbiAgICAgICAgbGFiZWwuc3RyaW5nID0gdGl0bGU7XHJcbiAgICAgICAgbGFiZWwuZm9udFNpemUgPSAyNTtcclxuICAgICAgICBmbm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAvLyBub2RlLmNvbG9yID0gY2MuY29sb3IoMCwwLDApO1xyXG4gICAgICAgIC8vIGZvcihsZXQgaSA9IDA7aSA8IGZub2RlLmNoaWxkcmVuLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIC8vICAgICBpZihmbm9kZS5jaGlsZHJlbltpXS55IDwgMCl7XHJcbiAgICAgICAgLy8gICAgICAgICBmbm9kZS5jaGlsZHJlbltpXS5kZXN0cm95KCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIG5vZGUueSA9IGNjLmZpbmQoJ25vZGUvbm9kZScsdGhpcy5ub2RlKS5oZWlnaHQ7XHJcbiAgICAgICAgLy8gdGhpcy50aXRsZUFycmF5LnBhc2gobm9kZSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNsb3NlQ2FsbEJhY2soKXtcclxuICAgICAgICBjYy5maW5kKCdub2RlL25vZGUnLHRoaXMubm9kZSkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgY2xlYXJDYWxsQmFjaygpe1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlld0NvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgIH0sXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==