
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/balloon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '483aamYWvJOv5NsAzE+sleW', 'balloon');
// script/Game/balloon.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var balloon = /** @class */ (function (_super) {
    __extends(balloon, _super);
    function balloon() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isDef = false;
        _this._rigidBody = null;
        return _this;
    }
    balloon.prototype.onBeginContact = function (contact, self, other) {
        if (other.tag == Constant_1.tag.thorn || other.tag == Constant_1.tag.stone || other.tag == Constant_1.tag.stone3 || other.tag == Constant_1.tag.honeybee ||
            other.tag == Constant_1.tag.floorThorn || other.tag == Constant_1.tag.rain || other.tag == Constant_1.tag.bat) {
            CocosZ_1.cocosz.gameMgr.onBalloonDes(this.node.parent.name);
            CocosZ_1.cocosz.audioMgr.playMetalStoneEffect2();
            cc.game.targetOff(this);
            cc.game.emit(Constant_1.default.E_PROP_BALLOONDES);
            this.node.parent.destroy();
        }
        else if (other.tag == Constant_1.tag.succeedPoint || other.tag == Constant_1.tag.faidPoint) {
            contact.disabled = true;
        }
        else if (other.tag == Constant_1.tag.carton) {
            if (this.isDef)
                return;
            this.isDef = true;
            this._rigidBody.gravityScale -= 1;
        }
        else if (other.tag == 777) {
            cc.log("--------------99");
            if (this._rigidBody.gravityScale > -8) {
                this._rigidBody.gravityScale = -8;
            }
        }
        else if (other.tag == 1234) {
            cc.log("----------------------1234");
            this._rigidBody.linearVelocity = cc.v2(0, 0);
            // this.node.getComponent(cc.PhysicsCircleCollider).enabled = false
            // this.node.getComponent(cc.RigidBody).type = cc.RigidBodyType.Animated;
            // this.node.getComponent(cc.PhysicsCircleCollider).enabled = true
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 113 && (other.tag == 36 || other.tag == 0)) {
            cc.log("--------------99");
            if (this._rigidBody.gravityScale > -4) {
                this._rigidBody.gravityScale = -4;
            }
        }
    };
    balloon.prototype.onDesByLaser = function () {
        CocosZ_1.cocosz.gameMgr.onBalloonDes(this.node.parent.name);
        CocosZ_1.cocosz.audioMgr.playMetalStoneEffect2();
        cc.game.targetOff(this);
        cc.game.emit(Constant_1.default.E_PROP_BALLOONDES);
        this.node.parent.destroy();
    };
    // LIFE-CYCLE CALLBACKS:
    balloon.prototype.onDestroy = function () {
        // if (cc.sys.platform === cc.sys.WECHAT_GAME && cocosz.dataMgr.ShockOn) {
        //     window["wx"].vibrateShort();
        // }
        cc.game.targetOff(this);
    };
    balloon.prototype.onLoad = function () {
        this._rigidBody = this.node.getComponent(cc.RigidBody);
    };
    balloon.prototype.start = function () {
        var _this = this;
        cc.game.on(Constant_1.default.E_PROP_BALLOONDES, function () {
            _this._rigidBody.gravityScale -= 1.9;
            if (CocosZ_1.cocosz.dataMgr.CurLevelId == 38) {
                _this._rigidBody.gravityScale -= 0.5;
            }
            cc.game.targetOff(_this);
        }, this);
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 85) {
            this._rigidBody.gravityScale = -2.3;
        }
        // cc.game.on(Constant.E_PROP_BALLOONDESBYLASER, () => {
        //     this.onDesByLaser();
        // }, this)
        // cc.game.on(Constant.E_ROLE_MOVE, () => {
        //     this.isDef = true;
        //     this._rigidBody.gravityScale *= 2;
        //     cc.game.targetOff(this);
        // })
        var sp = this.node.getChildByName("sp").getComponent(cc.Sprite);
        cc.log("balloon" + (CocosZ_1.cocosz.dataMgr.CurBallbonSkinId + 1));
        cc.log(CocosZ_1.cocosz.resMgr.getRes("balloon" + (CocosZ_1.cocosz.dataMgr.CurBallbonSkinId + 1), cc.SpriteFrame));
        sp.spriteFrame = CocosZ_1.cocosz.resMgr.getRes("balloon" + (CocosZ_1.cocosz.dataMgr.CurBallbonSkinId + 1), cc.SpriteFrame);
        // this.scheduleOnce(()=>{
        //     if (cocosz.sceneMgr.sceneName == "Game2") {
        //         let v = this._rigidBody.linearVelocity;
        //         v.y = 1000;
        //         this._rigidBody.linearVelocity =cc.v2(0,10000);
        //     }
        // },0.2)
        if (CocosZ_1.cocosz.sceneMgr.sceneName == "Game2") {
            this.schedule(function () {
                if (Math.random() > 0.5) {
                    _this._rigidBody.linearVelocity = cc.v2(0, -300);
                }
            }, 5);
        }
    };
    balloon.prototype.update = function (dt) {
        if (CocosZ_1.cocosz.sceneMgr.sceneName != "Game2")
            return;
        var v = this._rigidBody.linearVelocity;
        if (v.x != 0) {
            this._rigidBody.linearVelocity = cc.v2(0, v.y);
        }
    };
    balloon = __decorate([
        ccclass
    ], balloon);
    return balloon;
}(cc.Component));
exports.default = balloon;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxiYWxsb29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBNkM7QUFDN0Msa0RBQXNEO0FBRWhELElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBcUMsMkJBQVk7SUFEakQ7UUFBQSxxRUFxSEM7UUFsSEcsV0FBSyxHQUFHLEtBQUssQ0FBQztRQUVOLGdCQUFVLEdBQWlCLElBQUksQ0FBQzs7SUFnSDVDLENBQUM7SUE5R0csZ0NBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUMvQixJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksY0FBRyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLGNBQUcsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxjQUFHLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksY0FBRyxDQUFDLFFBQVE7WUFDeEcsS0FBSyxDQUFDLEdBQUcsSUFBSSxjQUFHLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksY0FBRyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLGNBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDOUUsZUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkQsZUFBTSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQ3hDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFRLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FB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T0FBTyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBQ1YsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxFQUFFO29CQUNyQixLQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2lCQUNsRDtZQUNMLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtTQUNSO0lBQ0wsQ0FBQztJQUVELHdCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxlQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsSUFBSSxPQUFPO1lBQUUsT0FBTTtRQUNoRCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQztRQUN2QyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xEO0lBQ0wsQ0FBQztJQW5IZ0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQW9IM0I7SUFBRCxjQUFDO0NBcEhELEFBb0hDLENBcEhvQyxFQUFFLENBQUMsU0FBUyxHQW9IaEQ7a0JBcEhvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuaW1wb3J0IENvbnN0YW50LCB7IHRhZyB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uc3RhbnRcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBiYWxsb29uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBpc0RlZiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgX3JpZ2lkQm9keTogY2MuUmlnaWRCb2R5ID0gbnVsbDtcclxuXHJcbiAgICBvbkJlZ2luQ29udGFjdChjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgICAgIGlmIChvdGhlci50YWcgPT0gdGFnLnRob3JuIHx8IG90aGVyLnRhZyA9PSB0YWcuc3RvbmUgfHwgb3RoZXIudGFnID09IHRhZy5zdG9uZTMgfHwgb3RoZXIudGFnID09IHRhZy5ob25leWJlZSB8fFxyXG4gICAgICAgICAgICBvdGhlci50YWcgPT0gdGFnLmZsb29yVGhvcm4gfHwgb3RoZXIudGFnID09IHRhZy5yYWluIHx8IG90aGVyLnRhZyA9PSB0YWcuYmF0KSB7XHJcbiAgICAgICAgICAgIGNvY29zei5nYW1lTWdyLm9uQmFsbG9vbkRlcyh0aGlzLm5vZGUucGFyZW50Lm5hbWUpO1xyXG4gICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheU1ldGFsU3RvbmVFZmZlY3QyKCk7XHJcbiAgICAgICAgICAgIGNjLmdhbWUudGFyZ2V0T2ZmKHRoaXMpO1xyXG4gICAgICAgICAgICBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9QUk9QX0JBTExPT05ERVMpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50LmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAob3RoZXIudGFnID09IHRhZy5zdWNjZWVkUG9pbnQgfHwgb3RoZXIudGFnID09IHRhZy5mYWlkUG9pbnQpIHtcclxuICAgICAgICAgICAgY29udGFjdC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG90aGVyLnRhZyA9PSB0YWcuY2FydG9uKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRGVmKSByZXR1cm47XHJcbiAgICAgICAgICAgIHRoaXMuaXNEZWYgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuX3JpZ2lkQm9keS5ncmF2aXR5U2NhbGUgLT0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAob3RoZXIudGFnID09IDc3Nykge1xyXG4gICAgICAgICAgICBjYy5sb2coXCItLS0tLS0tLS0tLS0tLTk5XCIpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9yaWdpZEJvZHkuZ3Jhdml0eVNjYWxlID4gLTgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JpZ2lkQm9keS5ncmF2aXR5U2NhbGUgPSAtODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChvdGhlci50YWcgPT0gMTIzNCkge1xyXG4gICAgICAgICAgICBjYy5sb2coXCItLS0tLS0tLS0tLS0tLS0tLS0tLS0tMTIzNFwiKVxyXG4gICAgICAgICAgICB0aGlzLl9yaWdpZEJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5QaHlzaWNzQ2lyY2xlQ29sbGlkZXIpLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuQW5pbWF0ZWQ7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0NpcmNsZUNvbGxpZGVyKS5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDExMyAmJiAob3RoZXIudGFnID09IDM2IHx8IG90aGVyLnRhZyA9PSAwKSkge1xyXG4gICAgICAgICAgICBjYy5sb2coXCItLS0tLS0tLS0tLS0tLTk5XCIpXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9yaWdpZEJvZHkuZ3Jhdml0eVNjYWxlID4gLTQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JpZ2lkQm9keS5ncmF2aXR5U2NhbGUgPSAtNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlc0J5TGFzZXIoKSB7XHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3Iub25CYWxsb29uRGVzKHRoaXMubm9kZS5wYXJlbnQubmFtZSk7XHJcbiAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlNZXRhbFN0b25lRWZmZWN0MigpO1xyXG4gICAgICAgIGNjLmdhbWUudGFyZ2V0T2ZmKHRoaXMpO1xyXG4gICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX1BST1BfQkFMTE9PTkRFUyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5kZXN0cm95KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIC8vIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSAmJiBjb2Nvc3ouZGF0YU1nci5TaG9ja09uKSB7XHJcbiAgICAgICAgLy8gICAgIHdpbmRvd1tcInd4XCJdLnZpYnJhdGVTaG9ydCgpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgY2MuZ2FtZS50YXJnZXRPZmYodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX3JpZ2lkQm9keSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBjYy5nYW1lLm9uKENvbnN0YW50LkVfUFJPUF9CQUxMT09OREVTLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JpZ2lkQm9keS5ncmF2aXR5U2NhbGUgLT0gMS45O1xyXG4gICAgICAgICAgICBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAzOCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmlnaWRCb2R5LmdyYXZpdHlTY2FsZSAtPSAwLjU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2MuZ2FtZS50YXJnZXRPZmYodGhpcyk7XHJcbiAgICAgICAgfSwgdGhpcylcclxuXHJcblxyXG4gICAgICAgIGlmIChjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID09IDg1KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JpZ2lkQm9keS5ncmF2aXR5U2NhbGUgPSAtMi4zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2MuZ2FtZS5vbihDb25zdGFudC5FX1BST1BfQkFMTE9PTkRFU0JZTEFTRVIsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5vbkRlc0J5TGFzZXIoKTtcclxuICAgICAgICAvLyB9LCB0aGlzKVxyXG4gICAgICAgIC8vIGNjLmdhbWUub24oQ29uc3RhbnQuRV9ST0xFX01PVkUsICgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy5pc0RlZiA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuX3JpZ2lkQm9keS5ncmF2aXR5U2NhbGUgKj0gMjtcclxuICAgICAgICAvLyAgICAgY2MuZ2FtZS50YXJnZXRPZmYodGhpcyk7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICBsZXQgc3AgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcFwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBjYy5sb2coXCJiYWxsb29uXCIgKyAoY29jb3N6LmRhdGFNZ3IuQ3VyQmFsbGJvblNraW5JZCArIDEpKTtcclxuICAgICAgICBjYy5sb2coY29jb3N6LnJlc01nci5nZXRSZXMoXCJiYWxsb29uXCIgKyAoY29jb3N6LmRhdGFNZ3IuQ3VyQmFsbGJvblNraW5JZCArIDEpLCBjYy5TcHJpdGVGcmFtZSkpXHJcbiAgICAgICAgc3Auc3ByaXRlRnJhbWUgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcImJhbGxvb25cIiArIChjb2Nvc3ouZGF0YU1nci5DdXJCYWxsYm9uU2tpbklkICsgMSksIGNjLlNwcml0ZUZyYW1lKTtcclxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xyXG5cclxuICAgICAgICAvLyAgICAgaWYgKGNvY29zei5zY2VuZU1nci5zY2VuZU5hbWUgPT0gXCJHYW1lMlwiKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgdiA9IHRoaXMuX3JpZ2lkQm9keS5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAvLyAgICAgICAgIHYueSA9IDEwMDA7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9yaWdpZEJvZHkubGluZWFyVmVsb2NpdHkgPWNjLnYyKDAsMTAwMDApO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSwwLjIpXHJcbiAgICAgICAgaWYgKGNvY29zei5zY2VuZU1nci5zY2VuZU5hbWUgPT0gXCJHYW1lMlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yaWdpZEJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAtMzAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCA1KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZiAoY29jb3N6LnNjZW5lTWdyLnNjZW5lTmFtZSAhPSBcIkdhbWUyXCIpIHJldHVyblxyXG4gICAgICAgIGxldCB2ID0gdGhpcy5fcmlnaWRCb2R5LmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgIGlmICh2LnggIT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9yaWdpZEJvZHkubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCB2LnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=