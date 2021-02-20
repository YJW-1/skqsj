
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/cactus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '296a6PV9AVHdIKSXQhAKJyq', 'cactus');
// script/Game/cactus.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rb = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onDestroy = function () {
        cc.log("--------des");
    };
    NewClass.prototype.onLoad = function () {
        this.rb = this.node.getComponent(cc.RigidBody);
    };
    NewClass.prototype.start = function () {
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 42) {
            this.rb.gravityScale = 1;
        }
        // if (cocosz.dataMgr.CurLevelId == 81) {
        //     this.rb.gravityScale = 0.1;
        // }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 22 || CocosZ_1.cocosz.dataMgr.CurLevelId == 124) {
            var poly = this.node.getComponent(cc.PhysicsPolygonCollider);
            poly.friction = 0;
            poly.apply();
        }
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxjYWN0dXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7O0FBRWxGLDhDQUE2QztBQUV2QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBQXNDLDRCQUFZO0lBRGxEO1FBQUEscUVBOEJDO1FBM0JHLFFBQUUsR0FBaUIsSUFBSSxDQUFDOztRQTBCeEIsaUJBQWlCO0lBQ3JCLENBQUM7SUF6Qkcsd0JBQXdCO0lBR3hCLDRCQUFTLEdBQVQ7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFDRCx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFDSSxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUUsRUFBRTtZQUNqQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7U0FDNUI7UUFDRCx5Q0FBeUM7UUFDekMsa0NBQWtDO1FBQ2xDLElBQUk7YUFDQyxJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxJQUFJLEVBQUUsSUFBSSxlQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxHQUFHLEVBQUU7WUFDMUUsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1NBQ2Y7SUFDTCxDQUFDO0lBMUJnQixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNkI1QjtJQUFELGVBQUM7Q0E3QkQsQUE2QkMsQ0E3QnFDLEVBQUUsQ0FBQyxTQUFTLEdBNkJqRDtrQkE3Qm9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5pbXBvcnQgeyBjb2Nvc3ogfSBmcm9tIFwiLi4vRnJhbWV3b3JrL0NvY29zWlwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICByYjogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcblxyXG4gICAgb25EZXN0cm95KCl7XHJcbiAgICAgICAgY2MubG9nKFwiLS0tLS0tLS1kZXNcIilcclxuICAgIH1cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLnJiID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDQyKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmIuZ3Jhdml0eVNjYWxlID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gODEpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5yYi5ncmF2aXR5U2NhbGUgPSAwLjE7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGVsc2UgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMjIgfHwgY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMjQpIHtcclxuICAgICAgICAgICAgbGV0IHBvbHkgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlBoeXNpY3NQb2x5Z29uQ29sbGlkZXIpO1xyXG4gICAgICAgICAgICBwb2x5LmZyaWN0aW9uID0gMDtcclxuICAgICAgICAgICAgcG9seS5hcHBseSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XHJcbn1cclxuIl19