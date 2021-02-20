"use strict";
cc._RF.push(module, '9beb1/u689MO7zQZ1F/pFGj', 'bat');
// script/Game/bat.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var bat = /** @class */ (function (_super) {
    __extends(bat, _super);
    function bat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rb = null;
        _this.action = null;
        _this.startPos = null;
        _this.isStart = false;
        _this.isTwo = false;
        _this.isRight = false;
        _this.isFirst = false;
        return _this;
    }
    bat.prototype.onBeginContact = function (contact, self, other) {
        var _this = this;
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 49 && this.isStart)
            return;
        if (!this.isFirst) {
            CocosZ_1.cocosz.audioMgr.playBatEffect();
        }
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 106) {
            this.isFirst = true;
            this.isStart = true;
            var v_1 = this.rb.linearVelocity;
            if (v_1.x == 0) {
                if (this.action) {
                    this.action.stop();
                }
                cc.tween(this.node)
                    .to(0.1, { position: this.startPos })
                    .call(function () {
                    v_1.x = 450;
                    _this.rb.linearVelocity = v_1;
                })
                    .start();
            }
            if (other.tag == 0) {
                contact.disabled = true;
                if (v_1.x != 0) {
                    v_1.x *= -1;
                    if (v_1.x < 0 && v_1.x > -450) {
                        v_1.x = -450;
                    }
                    else if (v_1.x > 0 && v_1.x < 450) {
                        v_1.x = 450;
                    }
                    this.rb.linearVelocity = v_1;
                }
            }
            else if (other.tag == 123) {
                if (v_1.x != 0) {
                    v_1.x *= -1;
                    if (v_1.x < 0 && v_1.x > -450) {
                        v_1.x = -450;
                    }
                    else if (v_1.x > 0 && v_1.x < 450) {
                        v_1.x = 450;
                    }
                    this.rb.linearVelocity = v_1;
                }
            }
            else if (other.tag == 124) {
                this.isTwo = true;
                if (v_1.x != 0) {
                    v_1.x *= -1;
                    if (v_1.x < 0 && v_1.x > -450) {
                        v_1.x = -450;
                    }
                    else if (v_1.x > 0 && v_1.x < 450) {
                        v_1.x = 450;
                    }
                    this.rb.linearVelocity = v_1;
                }
            }
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 32) {
            this.isFirst = true;
            this.isStart = true;
            var v = this.rb.linearVelocity;
            if (other.tag == Constant_1.tag.beforeSucceedPoint)
                return;
            if (v.x == 0) {
                if (this.action) {
                    this.action.stop();
                }
                v.y = 450;
                this.rb.linearVelocity = v;
            }
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 49 || CocosZ_1.cocosz.dataMgr.CurLevelId == 135) {
            this.isFirst = true;
            if (this.isStart)
                return;
            this.isStart = true;
            if (this.action) {
                this.action.stop();
            }
            var v_2 = this.rb.linearVelocity;
            v_2.x = 450;
            this.rb.linearVelocity = v_2;
            this.schedule(function () {
                cc.log("---------this.isRight---------", _this.isRight);
                _this.isRight = !_this.isRight;
                if (_this.isRight) {
                    v_2.x = -450;
                    _this.rb.linearVelocity = v_2;
                }
                else {
                    v_2.x = 450;
                    _this.rb.linearVelocity = v_2;
                }
            }, 3.3);
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 35 || CocosZ_1.cocosz.dataMgr.CurLevelId == 124) {
            this.isStart = true;
            this.isFirst = true;
            var v_3 = this.rb.linearVelocity;
            cc.log("=================");
            if (v_3.x == 0) {
                if (this.action) {
                    this.action.stop();
                }
                cc.tween(this.node)
                    .to(0.1, { position: this.startPos })
                    .call(function () {
                    v_3.x = 300;
                    _this.rb.linearVelocity = v_3;
                })
                    .start();
            }
            if (other.tag == 7) {
                contact.disabled = true;
                if (v_3.x != 0) {
                    v_3.x *= -1;
                    if (v_3.x < 0 && v_3.x > -300) {
                        v_3.x = -300;
                    }
                    else if (v_3.x > 0 && v_3.x < 300) {
                        v_3.x = 300;
                    }
                    this.rb.linearVelocity = v_3;
                }
            }
            if (other.tag == 0) {
                if (v_3.x != 0) {
                    v_3.x *= -1;
                    if (v_3.x < 0 && v_3.x > -300) {
                        v_3.x = -300;
                    }
                    else if (v_3.x > 0 && v_3.x < 300) {
                        v_3.x = 300;
                    }
                    this.rb.linearVelocity = v_3;
                }
            }
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 86) {
            this.isStart = true;
            this.isFirst = true;
            var v_4 = this.rb.linearVelocity;
            if (v_4.x == 0) {
                if (this.action) {
                    this.action.stop();
                }
                cc.tween(this.node)
                    .to(0.1, { position: this.startPos })
                    .call(function () {
                    v_4.x = 450;
                    _this.rb.linearVelocity = v_4;
                })
                    .start();
            }
            if (other.tag == 7) {
                contact.disabled = true;
                if (v_4.x != 0) {
                    v_4.x *= -1;
                    if (v_4.x < 0 && v_4.x > -450) {
                        v_4.x = -450;
                    }
                    else if (v_4.x > 0 && v_4.x < 450) {
                        v_4.x = 450;
                    }
                    this.rb.linearVelocity = v_4;
                }
            }
            if (other.tag == 0) {
                if (v_4.x != 0) {
                    v_4.x *= -1;
                    if (v_4.x < 0 && v_4.x > -450) {
                        v_4.x = -450;
                    }
                    else if (v_4.x > 0 && v_4.x < 450) {
                        v_4.x = 450;
                    }
                    this.rb.linearVelocity = v_4;
                }
            }
        }
        if (other.tag == Constant_1.tag.desPoint) {
            this.node.destroy();
        }
    };
    // LIFE-CYCLE CALLBACKS:
    bat.prototype.onLoad = function () {
        this.rb = this.node.getComponent(cc.RigidBody);
    };
    bat.prototype.start = function () {
        var _this = this;
        this.startPos = this.node.getPosition();
        var a = cc.tween().sequence(cc.tween().by(1, { position: cc.v2(0, 15) }), cc.tween().by(1, { position: cc.v2(0, -15) }));
        this.action = cc.tween(this.node)
            .repeatForever(a)
            .start();
        var b = cc.tween().sequence(cc.tween().by(0.1, { angle: 30 }), cc.tween().by(0.1, { angle: -30 }));
        cc.tween(this.node.getChildByName("bat_wing1"))
            .repeatForever(b)
            .start();
        var c = cc.tween().sequence(cc.tween().by(0.1, { angle: -30 }), cc.tween().by(0.1, { angle: 30 }));
        cc.tween(this.node.getChildByName("bat_wing2"))
            .repeatForever(c)
            .start();
        // if (cocosz.dataMgr.CurLevelId == 49) {
        //     if (this.isStart) return;
        //     this.isStart = true;
        //     if (this.action) {
        //         this.action.stop()
        //     }
        //     let v = this.rb.linearVelocity;
        //     v.x = 450;
        //     this.rb.linearVelocity = v;
        //     this.schedule(() => {
        //         cc.log("---------this.isRight---------", this.isRight)
        //         this.isRight = !this.isRight
        //         if (this.isRight) {
        //             v.x = -450;
        //             this.rb.linearVelocity = v;
        //         }
        //         else {
        //             v.x = 450;
        //             this.rb.linearVelocity = v;
        //         }
        //     }, 5)
        // }
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 35) {
            this.isStart = true;
            this.isFirst = true;
            var v_5 = this.rb.linearVelocity;
            if (v_5.x == 0) {
                if (this.action) {
                    this.action.stop();
                }
                cc.tween(this.node)
                    .to(0.1, { position: this.startPos })
                    .call(function () {
                    v_5.x = 300;
                    _this.rb.linearVelocity = v_5;
                })
                    .start();
            }
        }
    };
    bat.prototype.update = function (dt) {
        if (CocosZ_1.cocosz.dataMgr.CurLevelId != 35 && CocosZ_1.cocosz.dataMgr.CurLevelId != 124 && CocosZ_1.cocosz.dataMgr.CurLevelId != 32 && this.isStart && !this.isTwo) {
            var v = this.rb.linearVelocity;
            v.y = 0;
            this.rb.linearVelocity = v;
            cc.log("-------222");
        }
        else if (CocosZ_1.cocosz.dataMgr.CurLevelId == 49 && this.isStart) {
            var v = this.rb.linearVelocity;
            v.y = 0;
            if (v.x > 10 && v.x < 450) {
                v.x = 450;
            }
            else if (v.x < 10 && v.x > -450) {
                v.x = -450;
            }
            // if (this.isRight) {
            //     v.x = 450;
            //     this.rb.linearVelocity = v;
            // }
            // else {
            //     v.x = -450;
            //     this.rb.linearVelocity = v;
            // }
            cc.log("----211---222");
            this.rb.linearVelocity = v;
        }
    };
    bat = __decorate([
        ccclass
    ], bat);
    return bat;
}(cc.Component));
exports.default = bat;

cc._RF.pop();