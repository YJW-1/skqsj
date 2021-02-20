"use strict";
cc._RF.push(module, '6db6a5v+0tA1ZOgLy/brtSH', 'moveFloor');
// script/Game/moveFloor.ts

// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selelt = null;
        _this.default = null;
        _this.notStop = null;
        _this.tagList = [];
        _this.isFirst = true;
        _this.isEnd = false;
        return _this;
    }
    NewClass.prototype.onBeginContact = function (contact, self, other) {
        // if (this.default.active == true) return;
        // if (this.selelt.active == false) return;
        if (other.tag == Constant_1.tag.thorn || other.tag == Constant_1.tag.invisibleFloor) {
            contact.disabled = true;
            return;
        }
        if (this.isEnd)
            return;
        contact.disabled = true;
        // if (this.isFirst) {
        //     this.isFirst = false;
        //     return
        // }
        // cc.log(other.tag);
        for (var _i = 0, _a = this.tagList; _i < _a.length; _i++) {
            var idx = _a[_i];
            if (idx.tag == other.tag) {
                return;
            }
        }
        this.tagList.push(other);
        // cc.log(this.tagList);
        // if (this.tagList.length > 1) {
        this.notStop.active = true;
        this.node.color = cc.color(255, 0, 0, 150);
        // }
        if (this.tagList.length == 1 && (this.tagList[0].tag == Constant_1.tag.wooldenBox || this.tagList[0].tag == 81)) {
            if (this.tagList[0].node.name == "wooldenBox11" && CocosZ_1.cocosz.dataMgr.CurLevelId == 52)
                return;
            this.notStop.active = false;
            this.node.color = cc.color(255, 255, 255, 255);
        }
    };
    NewClass.prototype.onEndContact = function (contact, self, other) {
        if (other.tag == Constant_1.tag.thorn)
            return;
        if (this.isEnd)
            return;
        var list = [];
        for (var _i = 0, _a = this.tagList; _i < _a.length; _i++) {
            var idx = _a[_i];
            if (idx.tag == other.tag)
                continue;
            list.push(idx);
        }
        this.tagList = list;
        this.notStop.active = true;
        this.node.color = cc.color(255, 0, 0, 150);
        if (this.tagList.length == 1 && (this.tagList[0].tag == Constant_1.tag.wooldenBox || this.tagList[0].tag == 81)) {
            if (this.tagList[0].node.name == "wooldenBox11" && CocosZ_1.cocosz.dataMgr.CurLevelId == 52)
                return;
            this.notStop.active = false;
            this.node.color = cc.color(255, 255, 255, 255);
        }
        // cc.log(this.tagList, "----------onEndContact");
    };
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.default = this.node.getChildByName("default");
        this.selelt = this.node.getChildByName("selelt");
        this.notStop = this.node.getChildByName("notStop");
        var circle = null;
        if (this.node.name == "moveFloor2" || this.node.name == "moveFloor4") {
            circle = this.node.getComponent(cc.PhysicsBoxCollider);
        }
        else if (this.node.name == "moveFloor1") {
            circle = this.node.getComponent(cc.PhysicsCircleCollider);
        }
        else if (this.node.name == "moveFloor3" || this.node.name == "moveFloor5") {
            circle = this.node.getComponent(cc.PhysicsPolygonCollider);
        }
        circle.enabled = false;
    };
    NewClass.prototype.start = function () {
        var _this = this;
        this.node.zIndex += 1001;
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            _this.default.active = false;
            _this.notStop.active = true;
            _this.node.color = cc.color(255, 0, 0, 150);
            var circle = null;
            if (_this.node.name == "moveFloor2" || _this.node.name == "moveFloor4") {
                circle = _this.node.getComponent(cc.PhysicsBoxCollider);
            }
            else if (_this.node.name == "moveFloor1") {
                circle = _this.node.getComponent(cc.PhysicsCircleCollider);
            }
            else if (_this.node.name == "moveFloor3" || _this.node.name == "moveFloor5") {
                circle = _this.node.getComponent(cc.PhysicsPolygonCollider);
            }
            circle.enabled = true;
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (touch) {
            var pos = touch.getDelta();
            _this.node.x += pos.x;
            _this.node.y += pos.y;
            // cc.log(pos.x, pos.y, "---------")
            // let v = this.node.getComponent(cc.RigidBody).linearVelocity;
            // v.x += pos.x * 10;
            // v.y += pos.y * 10;
            // this.node.getComponent(cc.RigidBody).linearVelocity = v;
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            // cc.log(this.tagList);
            if (_this.tagList.length == 1 && (_this.tagList[0].tag == Constant_1.tag.wooldenBox || _this.tagList[0].tag == 81)) {
                if (_this.tagList[0].node.name == "wooldenBox11" && CocosZ_1.cocosz.dataMgr.CurLevelId == 52)
                    return;
                _this.node.targetOff(_this);
                _this.isEnd = true;
                _this.node.color = cc.color(255, 255, 255, 255);
                var weld = null;
                if (_this.tagList[0].node.name == "wooldenBox12") {
                    cc.log("------------------this.");
                    weld = _this.node.addComponent(cc.RevoluteJoint);
                }
                else {
                    weld = _this.node.addComponent(cc.WeldJoint);
                }
                weld.connectedBody = _this.tagList[0].node.getComponent(cc.RigidBody);
                // cc.log(this.tagList[0].node.scaleX, this.tagList[0].node.scaleY)
                // weld.connectedAnchor.x = (this.node.x - this.tagList[0].node.x) / this.tagList[0].node.scaleX;
                // weld.connectedAnchor.y = (this.node.y - this.tagList[0].node.y) / this.tagList[0].node.scaleY;
                weld.connectedAnchor.x = (_this.node.x - _this.tagList[0].node.x);
                weld.connectedAnchor.y = (_this.node.y - _this.tagList[0].node.y);
                if (_this.node.name == "moveFloor5") {
                    // weld.connectedAnchor.x = 0
                    // weld.connectedAnchor.y = 0
                    // weld.anchor.x = (this.node.x - this.tagList[0].node.x);
                    // weld.anchor.y = (this.node.y - this.tagList[0].node.y);
                }
                weld.apply();
                // cc.log(this.tagList[0].node)
                var rb = _this.node.getComponent(cc.RigidBody);
                rb.type = cc.RigidBodyType.Dynamic;
                var circle = null;
                if (_this.node.name == "moveFloor2" || _this.node.name == "moveFloor4") {
                    circle = _this.node.getComponent(cc.PhysicsBoxCollider);
                }
                else if (_this.node.name == "moveFloor1") {
                    circle = _this.node.getComponent(cc.PhysicsCircleCollider);
                }
                else if (_this.node.name == "moveFloor3" || _this.node.name == "moveFloor5") {
                    circle = _this.node.getComponent(cc.PhysicsPolygonCollider);
                }
                _this.selelt.active = false;
                rb.gravityScale = 2;
                if (_this.node.name == "moveFloor5") {
                    rb.gravityScale = 1;
                }
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 113 || CocosZ_1.cocosz.dataMgr.CurLevelId == 115) {
                    rb.gravityScale = 0;
                }
                circle.apply();
                if (_this.node.name == "moveFloor5")
                    return;
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 113) {
                    return;
                }
                _this.node.on(cc.Node.EventType.TOUCH_START, function () {
                    _this.node.destroy();
                    CocosZ_1.cocosz.audioMgr.playBoxEffect();
                    var prefab = CocosZ_1.cocosz.resMgr.getRes("rocketEffect", cc.Prefab);
                    var node = cc.instantiate(prefab);
                    _this.node.parent.addChild(node);
                    node.setPosition(_this.node.getPosition());
                });
            }
        }, this);
    };
    NewClass.prototype.update = function (dt) {
        if (this.node.y >= 500) {
            this.node.destroy();
        }
    };
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();