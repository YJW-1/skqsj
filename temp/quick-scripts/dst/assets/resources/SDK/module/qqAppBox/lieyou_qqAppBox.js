
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/resources/SDK/module/qqAppBox/lieyou_qqAppBox.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ded08B3w+5Csa3l3PeIoGyU', 'lieyou_qqAppBox');
// resources/SDK/module/qqAppBox/lieyou_qqAppBox.js

"use strict";

window.lieyou_qqAppBox = function () {
  var node = new cc.Node();
  node.width = 110;
  node.height = 110;
  var dragon = new cc.Node();
  var dragon_1 = new cc.Node();
  var dragon_2 = new cc.Node();
  dragon.y = -40;
  dragon.scale = 0.35;
  dragon_1.y = -40;
  dragon_1.scale = 0.2;
  dragon_2.x = -15;
  dragon_2.y = 24;
  dragon_2.scale = 0.6;

  if (lieyou_moreGame_type == 1) {
    cc.loader.loadRes('SDK/lieyou_sdkRes/qgameMoreGame/dragon/dragon1/jingling2_tex.json', dragonBones.DragonBonesAtlasAsset, function (error, atlasJson) {
      cc.loader.loadRes('SDK/lieyou_sdkRes/qgameMoreGame/dragon/dragon1/jingling2_ske.json', dragonBones.DragonBonesAsset, function (error, dragonBonesJson) {
        var dragon_1_arm = dragon_1.addComponent(dragonBones.ArmatureDisplay);
        dragon_1_arm.dragonAtlasAsset = atlasJson;
        dragon_1_arm.dragonAsset = dragonBonesJson;
        dragon_1_arm.armatureName = 'armatureName';
        dragon_1_arm.playAnimation('stand', 0);
      });
    });
  } else if (lieyou_moreGame_type == 2) {
    cc.loader.loadRes('SDK/lieyou_sdkRes/qgameMoreGame/dragon/dragon2/jinglingdonghu_2_ske_tex.json', dragonBones.DragonBonesAtlasAsset, function (error, atlasJson) {
      cc.loader.loadRes('SDK/lieyou_sdkRes/qgameMoreGame/dragon/dragon2/jinglingdonghu_2_ske_ske.json', dragonBones.DragonBonesAsset, function (error, dragonBonesJson) {
        var dragon_2_arm = dragon_2.addComponent(dragonBones.ArmatureDisplay);
        dragon_2_arm.dragonAtlasAsset = atlasJson;
        dragon_2_arm.dragonAsset = dragonBonesJson;
        dragon_2_arm.armatureName = 'armatureName';
        dragon_2_arm.playAnimation('newAnimation', 0);
      });
    });
  } else {
    cc.loader.loadRes('SDK/lieyou_sdkRes/qgameMoreGame/dragon/jingling_tex', dragonBones.DragonBonesAtlasAsset, function (error, atlasJson) {
      cc.loader.loadRes('SDK/lieyou_sdkRes/qgameMoreGame/dragon/jingling_ske', dragonBones.DragonBonesAsset, function (error, dragonBonesJson) {
        var dragon_arm = dragon.addComponent(dragonBones.ArmatureDisplay);
        dragon_arm.dragonAtlasAsset = atlasJson;
        dragon_arm.dragonAsset = dragonBonesJson;
        dragon_arm.armatureName = 'armatureName';
        dragon_arm.playAnimation('anim_1', 0);
      });
    });
  }

  node.addChild(dragon);
  node.addChild(dragon_1);
  node.addChild(dragon_2);
  return node;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xccmVzb3VyY2VzXFxTREtcXG1vZHVsZVxccXFBcHBCb3hcXGxpZXlvdV9xcUFwcEJveC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJsaWV5b3VfcXFBcHBCb3giLCJub2RlIiwiY2MiLCJOb2RlIiwid2lkdGgiLCJoZWlnaHQiLCJkcmFnb24iLCJkcmFnb25fMSIsImRyYWdvbl8yIiwieSIsInNjYWxlIiwieCIsImxpZXlvdV9tb3JlR2FtZV90eXBlIiwibG9hZGVyIiwibG9hZFJlcyIsImRyYWdvbkJvbmVzIiwiRHJhZ29uQm9uZXNBdGxhc0Fzc2V0IiwiZXJyb3IiLCJhdGxhc0pzb24iLCJEcmFnb25Cb25lc0Fzc2V0IiwiZHJhZ29uQm9uZXNKc29uIiwiZHJhZ29uXzFfYXJtIiwiYWRkQ29tcG9uZW50IiwiQXJtYXR1cmVEaXNwbGF5IiwiZHJhZ29uQXRsYXNBc3NldCIsImRyYWdvbkFzc2V0IiwiYXJtYXR1cmVOYW1lIiwicGxheUFuaW1hdGlvbiIsImRyYWdvbl8yX2FybSIsImRyYWdvbl9hcm0iLCJhZGRDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsTUFBTSxDQUFDQyxlQUFQLEdBQXlCLFlBQVU7QUFDL0IsTUFBSUMsSUFBSSxHQUFHLElBQUlDLEVBQUUsQ0FBQ0MsSUFBUCxFQUFYO0FBQ0FGLEVBQUFBLElBQUksQ0FBQ0csS0FBTCxHQUFhLEdBQWI7QUFDQUgsRUFBQUEsSUFBSSxDQUFDSSxNQUFMLEdBQWMsR0FBZDtBQUVBLE1BQUlDLE1BQU0sR0FBRyxJQUFJSixFQUFFLENBQUNDLElBQVAsRUFBYjtBQUNBLE1BQUlJLFFBQVEsR0FBRyxJQUFJTCxFQUFFLENBQUNDLElBQVAsRUFBZjtBQUNBLE1BQUlLLFFBQVEsR0FBRyxJQUFJTixFQUFFLENBQUNDLElBQVAsRUFBZjtBQUVBRyxFQUFBQSxNQUFNLENBQUNHLENBQVAsR0FBVyxDQUFDLEVBQVo7QUFDQUgsRUFBQUEsTUFBTSxDQUFDSSxLQUFQLEdB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SSxDQUFDNkIsUUFBTCxDQUFjeEIsTUFBZDtBQUNBTCxFQUFBQSxJQUFJLENBQUM2QixRQUFMLENBQWN2QixRQUFkO0FBQ0FOLEVBQUFBLElBQUksQ0FBQzZCLFFBQUwsQ0FBY3RCLFFBQWQ7QUFFQSxTQUFPUCxJQUFQO0FBQ0gsQ0FyREQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5saWV5b3VfcXFBcHBCb3ggPSBmdW5jdGlvbigpe1xyXG4gICAgdmFyIG5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgbm9kZS53aWR0aCA9IDExMDtcclxuICAgIG5vZGUuaGVpZ2h0ID0gMTEwO1xyXG5cclxuICAgIHZhciBkcmFnb24gPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgdmFyIGRyYWdvbl8xID0gbmV3IGNjLk5vZGUoKTtcclxuICAgIHZhciBkcmFnb25fMiA9IG5ldyBjYy5Ob2RlKCk7XHJcblxyXG4gICAgZHJhZ29uLnkgPSAtNDA7XHJcbiAgICBkcmFnb24uc2NhbGUgPSAwLjM1O1xyXG4gICAgZHJhZ29uXzEueSA9IC00MDtcclxuICAgIGRyYWdvbl8xLnNjYWxlID0gMC4yO1xyXG4gICAgZHJhZ29uXzIueCA9IC0xNTtcclxuICAgIGRyYWdvbl8yLnkgPSAyNDtcclxuICAgIGRyYWdvbl8yLnNjYWxlID0gMC42O1xyXG4gICAgaWYobGlleW91X21vcmVHYW1lX3R5cGUgPT0gMSl7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ1NESy9saWV5b3Vfc2RrUmVzL3FnYW1lTW9yZUdhbWUvZHJhZ29uL2RyYWdvbjEvamluZ2xpbmcyX3RleC5qc29uJyxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQsIChlcnJvciwgYXRsYXNKc29uKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdTREsvbGlleW91X3Nka1Jlcy9xZ2FtZU1vcmVHYW1lL2RyYWdvbi9kcmFnb24xL2ppbmdsaW5nMl9za2UuanNvbicsZHJhZ29uQm9uZXMuRHJhZ29uQm9uZXNBc3NldCwgKGVycm9yLCBkcmFnb25Cb25lc0pzb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBkcmFnb25fMV9hcm0gPSBkcmFnb25fMS5hZGRDb21wb25lbnQoZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5KTtcclxuICAgICAgICAgICAgICAgIGRyYWdvbl8xX2FybS5kcmFnb25BdGxhc0Fzc2V0ID0gYXRsYXNKc29uO1xyXG4gICAgICAgICAgICAgICAgZHJhZ29uXzFfYXJtLmRyYWdvbkFzc2V0ID0gZHJhZ29uQm9uZXNKc29uO1xyXG4gICAgICAgICAgICAgICAgZHJhZ29uXzFfYXJtLmFybWF0dXJlTmFtZSA9ICdhcm1hdHVyZU5hbWUnO1xyXG4gICAgICAgICAgICAgICAgZHJhZ29uXzFfYXJtLnBsYXlBbmltYXRpb24oJ3N0YW5kJywgMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfWVsc2UgaWYobGlleW91X21vcmVHYW1lX3R5cGUgPT0gMil7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ1NESy9saWV5b3Vfc2RrUmVzL3FnYW1lTW9yZUdhbWUvZHJhZ29uL2RyYWdvbjIvamluZ2xpbmdkb25naHVfMl9za2VfdGV4Lmpzb24nLGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXRsYXNBc3NldCwgKGVycm9yLCBhdGxhc0pzb24pID0+IHtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ1NESy9saWV5b3Vfc2RrUmVzL3FnYW1lTW9yZUdhbWUvZHJhZ29uL2RyYWdvbjIvamluZ2xpbmdkb25naHVfMl9za2Vfc2tlLmpzb24nLGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXNzZXQsIChlcnJvciwgZHJhZ29uQm9uZXNKc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHJhZ29uXzJfYXJtID0gZHJhZ29uXzIuYWRkQ29tcG9uZW50KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSk7XHJcbiAgICAgICAgICAgICAgICBkcmFnb25fMl9hcm0uZHJhZ29uQXRsYXNBc3NldCA9IGF0bGFzSnNvbjtcclxuICAgICAgICAgICAgICAgIGRyYWdvbl8yX2FybS5kcmFnb25Bc3NldCA9IGRyYWdvbkJvbmVzSnNvbjtcclxuICAgICAgICAgICAgICAgIGRyYWdvbl8yX2FybS5hcm1hdHVyZU5hbWUgPSAnYXJtYXR1cmVOYW1lJztcclxuICAgICAgICAgICAgICAgIGRyYWdvbl8yX2FybS5wbGF5QW5pbWF0aW9uKCduZXdBbmltYXRpb24nLCAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnU0RLL2xpZXlvdV9zZGtSZXMvcWdhbWVNb3JlR2FtZS9kcmFnb24vamluZ2xpbmdfdGV4JyxkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQsIChlcnJvciwgYXRsYXNKc29uKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdTREsvbGlleW91X3Nka1Jlcy9xZ2FtZU1vcmVHYW1lL2RyYWdvbi9qaW5nbGluZ19za2UnLGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXNzZXQsIChlcnJvciwgZHJhZ29uQm9uZXNKc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHJhZ29uX2FybSA9IGRyYWdvbi5hZGRDb21wb25lbnQoZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5KTtcclxuICAgICAgICAgICAgICAgIGRyYWdvbl9hcm0uZHJhZ29uQXRsYXNBc3NldCA9IGF0bGFzSnNvbjtcclxuICAgICAgICAgICAgICAgIGRyYWdvbl9hcm0uZHJhZ29uQXNzZXQgPSBkcmFnb25Cb25lc0pzb247XHJcbiAgICAgICAgICAgICAgICBkcmFnb25fYXJtLmFybWF0dXJlTmFtZSA9ICdhcm1hdHVyZU5hbWUnO1xyXG4gICAgICAgICAgICAgICAgZHJhZ29uX2FybS5wbGF5QW5pbWF0aW9uKCdhbmltXzEnLCAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbm9kZS5hZGRDaGlsZChkcmFnb24pO1xyXG4gICAgbm9kZS5hZGRDaGlsZChkcmFnb25fMSk7XHJcbiAgICBub2RlLmFkZENoaWxkKGRyYWdvbl8yKTtcclxuXHJcbiAgICByZXR1cm4gbm9kZTtcclxufSJdfQ==