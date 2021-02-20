"use strict";
cc._RF.push(module, '6d7ac8eB3xAsIBO/rgOFB1L', 'propHoneybee');
// script/Game/propHoneybee.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var propHoneybee = /** @class */ (function (_super) {
    __extends(propHoneybee, _super);
    function propHoneybee() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rb = null;
        _this.num = 0;
        _this.direction = false;
        _this.isLimit = false;
        _this.isFan = false;
        return _this;
    }
    propHoneybee.prototype.onBeginContact = function (contact, self, other) {
        if (other.tag == Constant_1.tag.desPoint) {
            this.node.destroy();
        }
    };
    propHoneybee.prototype.onRayCast = function () {
        var startPos = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
        //右
        var endPos = cc.v2(startPos.x + 1500, startPos.y);
        var result = CocosZ_1.cocosz.gameMgr.onRayCast(startPos, endPos);
        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
            var physics = result_1[_i];
            var cTag = physics.collider.tag;
            if (cTag == Constant_1.tag.player || cTag == Constant_1.tag.balloon || cTag == Constant_1.tag.rope) {
                var v = this.rb.linearVelocity;
                if (v.x < 0) {
                    v.x += 700;
                }
                this.rb.linearVelocity = v;
                // cc.log("-----------------------右");
                this.isLimit = true;
                CocosZ_1.cocosz.gameMgr.isFeed = true;
                return;
            }
            else if (cTag == Constant_1.tag.invisibleFloor) {
                continue;
            }
            else if (cTag == Constant_1.tag.thorn || cTag == Constant_1.tag.floorThorn || cTag == Constant_1.tag.moveFloor || cTag == Constant_1.tag.stone || cTag == 0) {
                break;
            }
        }
        //左
        var endPos2 = cc.v2(startPos.x - 1500, startPos.y);
        var result2 = CocosZ_1.cocosz.gameMgr.onRayCast(startPos, endPos2);
        for (var _a = 0, result2_1 = result2; _a < result2_1.length; _a++) {
            var physics = result2_1[_a];
            var cTag = physics.collider.tag;
            if (cTag == Constant_1.tag.player || cTag == Constant_1.tag.balloon || cTag == Constant_1.tag.rope) {
                var v = this.rb.linearVelocity;
                if (v.x > 0) {
                    v.x -= 700;
                }
                this.rb.linearVelocity = v;
                this.isLimit = true;
                CocosZ_1.cocosz.gameMgr.isFeed = true;
                return;
            }
            else if (cTag == Constant_1.tag.invisibleFloor) {
                continue;
            }
            else if (cTag == Constant_1.tag.thorn || cTag == Constant_1.tag.floorThorn || cTag == Constant_1.tag.moveFloor || cTag == Constant_1.tag.stone || cTag == 0) {
                break;
            }
        }
        //上
        var endPos3 = cc.v2(startPos.x, startPos.y + 1500);
        var result3 = CocosZ_1.cocosz.gameMgr.onRayCast(startPos, endPos3);
        for (var _b = 0, result3_1 = result3; _b < result3_1.length; _b++) {
            var physics = result3_1[_b];
            var cTag = physics.collider.tag;
            if (cTag == Constant_1.tag.player || cTag == Constant_1.tag.balloon || cTag == Constant_1.tag.rope || cTag == Constant_1.tag.balloon2) {
                var v = this.rb.linearVelocity;
                if (v.y < 0) {
                    v.y += 700;
                }
                this.rb.linearVelocity = v;
                this.isLimit = true;
                CocosZ_1.cocosz.gameMgr.isFeed = true;
                return;
            }
            else if (cTag == Constant_1.tag.invisibleFloor) {
                continue;
            }
            else if (cTag == Constant_1.tag.thorn || cTag == Constant_1.tag.floorThorn || cTag == Constant_1.tag.moveFloor || cTag == Constant_1.tag.stone || cTag == 0) {
                break;
            }
        }
        //下
        var endPos4 = cc.v2(startPos.x, startPos.y - 1500);
        var result4 = CocosZ_1.cocosz.gameMgr.onRayCast(startPos, endPos4);
        for (var _c = 0, result4_1 = result4; _c < result4_1.length; _c++) {
            var physics = result4_1[_c];
            var cTag = physics.collider.tag;
            if (cTag == Constant_1.tag.player || cTag == Constant_1.tag.balloon || cTag == Constant_1.tag.rope) {
                var v = this.rb.linearVelocity;
                if (v.y > 0) {
                    v.y -= 500;
                    if (!this.isFan) {
                        v.x = 0;
                    }
                    else {
                        v.y = 0;
                    }
                }
                this.rb.linearVelocity = v;
                this.isLimit = true;
                CocosZ_1.cocosz.gameMgr.isFeed = true;
                cc.log("-----------------------下");
                return;
            }
            else if (cTag == Constant_1.tag.invisibleFloor) {
                continue;
            }
            else if (cTag == Constant_1.tag.thorn || cTag == Constant_1.tag.floorThorn || cTag == Constant_1.tag.moveFloor || cTag == 0 || cTag == Constant_1.tag.stone) {
                break;
            }
        }
    };
    // LIFE-CYCLE CALLBACKS:
    propHoneybee.prototype.onLoad = function () {
        this.rb = this.node.getComponent(cc.RigidBody);
    };
    propHoneybee.prototype.start = function () {
        var _this = this;
        var pos = cc.v2(this.node.x, this.node.y);
        var hd = cc.v2(0, 100).signAngle(pos) / 2;
        this.node.angle = Math.ceil(hd / Math.PI * 180);
        var v = this.rb.linearVelocity;
        v.x = Math.random() * 300 - 150;
        v.y = Math.random() * 300 - 150;
        if (this.node.y <= -600 && v.y < 0) {
            v.y *= -1;
        }
        if (Math.random() > 0.5) {
            this.direction = !this.direction;
        }
        this.rb.linearVelocity = v;
        // this.onRayCast();
        // if(this.)/
        this.schedule(function () {
            _this.num++;
            var pos = cc.v2(_this.node.x, _this.node.y);
            var hd = cc.v2(0, 100).signAngle(pos) / 2;
            _this.node.angle = Math.ceil(hd / Math.PI * 180);
            var v = _this.rb.linearVelocity;
            v.x = Math.random() * 500 - 250;
            v.y = Math.random() * 300 - 150;
            if (_this.node.y <= -600 && v.y < 0 || (_this.node.y >= 700 && v.y > 0)) {
                v.y *= -1;
            }
            if (!(_this.num % 4) && Math.random() > 0.5) {
                _this.num = 0;
                _this.direction = !_this.direction;
                if (_this.direction) {
                    v.x = 300;
                }
                else {
                    v.x = -300;
                }
            }
            if (CocosZ_1.cocosz.sceneMgr.sceneName == "rewardLevel2") {
                if (v.x < 0) {
                    v.x *= -1;
                    v.y *= 0;
                }
                _this.rb.linearVelocity = v;
                return;
            }
            if (CocosZ_1.cocosz.dataMgr.CurLevelId == 57 || CocosZ_1.cocosz.dataMgr.CurLevelId == 134) {
                // cc.log(v.x, v.y, cocosz.gameMgr.isFeed)
                if (CocosZ_1.cocosz.gameMgr.isFeed) {
                    if (v.y > 0) {
                        v.y *= -1;
                    }
                    if (v.x < 0) {
                        v.x *= -1;
                    }
                }
                else {
                    if (v.x > 0) {
                        v.x *= -1;
                    }
                }
            }
            else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 61 || CocosZ_1.cocosz.dataMgr.CurLevelId == 130) {
                if (v.x < 0) {
                    v.x *= -1;
                }
            }
            else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 66) {
                if (v.y > 0 && Math.random() > 0.3) {
                    v.y *= -1;
                }
            }
            _this.rb.linearVelocity = v;
            _this.onRayCast();
        }, 0.5);
    };
    propHoneybee.prototype.update = function (dt) {
    };
    propHoneybee = __decorate([
        ccclass
    ], propHoneybee);
    return propHoneybee;
}(cc.Component));
exports.default = propHoneybee;

cc._RF.pop();