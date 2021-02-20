"use strict";
cc._RF.push(module, '4134bimWMVCiK9LF5nFjPnk', 'otherCamera');
// script/Game/otherCamera.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.otherCamera = null;
        _this.mask = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.mask = this.node.getComponent(cc.Mask);
        var sp = new cc.SpriteFrame;
        // sp.setTexture(this.otherCamera.targetTexture);
        // cc.log(this.mask);
        // cc.log(this.otherCamera.targetTexture)
        // this.mask.spriteFrame = sp;
        var texture = new cc.RenderTexture();
        texture.initWithSize(1280, 720);
        var spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(texture);
        this.otherCamera.targetTexture = texture;
        this.mask.spriteFrame = spriteFrame;
    };
    NewClass.prototype.start = function () {
    };
    __decorate([
        property(cc.Camera)
    ], NewClass.prototype, "otherCamera", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();