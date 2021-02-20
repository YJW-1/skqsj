"use strict";
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