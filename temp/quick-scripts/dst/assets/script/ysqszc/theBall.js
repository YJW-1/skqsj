
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/ysqszc/theBall.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ed69aY8n+ZCVaCGAMUET+/k', 'theBall');
// script/ysqszc/theBall.ts

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
var theBall = /** @class */ (function (_super) {
    __extends(theBall, _super);
    function theBall() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ball = null;
        _this.camera = null;
        _this.listen = null;
        _this.rb = null;
        _this.particle = null;
        _this.pos = null;
        _this.isMove = false;
        _this.moveNum = 0;
        return _this;
    }
    theBall.prototype.onBeginContact = function (contact, self, other) {
        cc.log(other.tag, other.node.name, other.node.parent.name);
        if (other.tag == Constant_1.tag.balloon || other.tag == Constant_1.tag.player || other.tag == Constant_1.tag.rope) {
            // contact.disabled = true;
            var v = this.rb.linearVelocity;
            v.x = 0;
            v.y = 0;
            this.rb.linearVelocity = v;
        }
        else if (other.tag == Constant_1.tag.stone || other.tag == Constant_1.tag.thorn || other.tag == Constant_1.tag.bat || other.node.name == "wooldenBox3") {
            // cc.log(other.node.getComponent(cc.RigidBody).gravityScale, "---------other.gravityScale")
            if (other.node.getComponent(cc.RigidBody).gravityScale == 0) {
                other.node.getComponent(cc.RigidBody).gravityScale = 1;
            }
            if (other.node.getComponent(cc.RigidBody).type == cc.RigidBodyType.Kinematic) {
                // cc.log(other.node);
                // if(other.tag=="")
                // return
                CocosZ_1.cocosz.scheduleOnce(function () {
                    // cc.log(other.node);
                    if (!other.node)
                        return;
                    other.node.getComponent(cc.RigidBody).type = cc.RigidBodyType.Dynamic;
                    if (other.node.name == "sBoard") {
                        other.node.getComponent(cc.PhysicsBoxCollider).apply();
                    }
                }, 0.1);
            }
        }
    };
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    theBall.prototype.start = function () {
        var _this = this;
        // this.listen.zIndex += 9999;
        this.listen.on(cc.Node.EventType.TOUCH_START, function (event) {
            if (+CocosZ_1.cocosz.dataMgr.isNovice == 0)
                return;
            // cc.game.emit(Constant.E_GAME_START);
        }, this);
        this.listen.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            var pos = event.getDelta();
            // this.ball.x += pos.x;
            // this.ball.y += pos.y
            if (((_this.ball.x < -cc.winSize.width / 2 + 50) && pos.x < 0) || ((_this.ball.x > cc.winSize.width / 2 - 50) && pos.x > 0))
                return;
            if (((_this.ball.y < -cc.winSize.height / 2 + 50) && pos.y < 0) || ((_this.ball.y > cc.winSize.height / 2 - 50) && pos.y > 0))
                return;
            var v = _this.rb.linearVelocity;
            // cc.log(v.x, v.y)
            v.x = pos.x * 130;
            v.y = pos.y * 130;
            // cc.log(v.x, v.y)
            _this.rb.linearVelocity = v;
            // if (this.isMove) return;
            _this.isMove = true;
            _this.moveNum++;
            // if (this.moveNum > 3) {
            //     this.moveNum = 0;
            //     this.particle.resetSystem();
            // }
            // this.schedule(() => {
            //     this.particle.resetSystem();
            // }, 1)
        }, this);
        this.listen.on(cc.Node.EventType.TOUCH_END, function (event) {
            _this.isMove = false;
            _this.rb.linearVelocity = cc.v2(0, 0);
        }, this);
        this.listen.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
            _this.isMove = false;
            _this.rb.linearVelocity = cc.v2(0, 0);
        }, this);
        this.pos = this.camera.getPosition();
    };
    theBall.prototype.lateUpdate = function (dt) {
        // if (!this.isMove) {
        var v = this.rb.linearVelocity;
        if (v.x != 0 || v.y != 0) {
            var prefab = CocosZ_1.cocosz.resMgr.getRes("ballParticle", cc.Prefab);
            var node = cc.instantiate(prefab);
            // node.x -= 10;
            // node.y += 10
            this.node.addChild(node);
            node.zIndex -= 100;
        }
        this.rb.linearVelocity = cc.v2(0, 0);
        // }
        // let x = this.camera.x - this.pos.x;
        // let y = this.camera.y - this.pos.y;
        // this.ball.x += x; this.ball.y += y;
        // this.pos = this.camera.getPosition();
        // this.ball.y += 0.000000001;
        // if (cocosz.sceneMgr.sceneName == "Game2") {
        //     if (this.node.y <= -3000 || Math.abs(this.node.x) > 500) {
        //         this.node.destroy()
        //         return
        //     };
        // }
    };
    __decorate([
        property(cc.Node)
    ], theBall.prototype, "ball", void 0);
    __decorate([
        property(cc.Node)
    ], theBall.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], theBall.prototype, "listen", void 0);
    __decorate([
        property(cc.RigidBody)
    ], theBall.prototype, "rb", void 0);
    __decorate([
        property(cc.ParticleSystem)
    ], theBall.prototype, "particle", void 0);
    theBall = __decorate([
        ccclass
    ], theBall);
    return theBall;
}(cc.Component));
exports.default = theBall;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFx5c3FzemNcXHRoZUJhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7O0FBRWxGLDhDQUE2QztBQUM3QyxrREFBc0Q7QUFFaEQsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFxQywyQkFBWTtJQURqRDtRQUFBLHFFQWdKQztRQTNJRyxVQUFJLEdBQVksSUFBSSxDQUFDO1FBR3JCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixRQUFFLEdBQWlCLElBQUksQ0FBQTtRQUd2QixjQUFRLEdBQXNCLElBQUksQ0FBQTtRQUdsQyxTQUFHLEdBQVEsSUFBSSxDQUFDO1FBRWhCLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFFeEIsYUFBTyxHQUFXLENBQUMsQ0FBQzs7SUF3SHhCLENBQUM7SUF0SEcsZ0NBQWMsR0FBZCxVQUFlLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSztRQUMvQixFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLENBQUE7UUFDM0QsSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLGNBQUcsQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxjQUFHLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksY0FBRyxDQUFDLElBQUksRUFBRTtZQUM5RSwyQkFBMkI7WUFFM0IsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDUixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNSLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztTQUM5QjthQUNJLElBQUksS0FBSyxDQUFDLEdBQUcsSUFBSSxjQUFHLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksY0FBRyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsR0FBRyxJQUFJLGNBQUcsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksYUFBYSxFQUFFO1lBQ25ILDRGQUE0RjtZQUU1RixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxZQUFZLElBQUksQ0FBQyxFQUFFO2dCQUN6RCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQzthQUMxRDtZQUNELElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRTtnQkFDMUUsc0JBQXNCO2dCQUN0QixvQkFBb0I7Z0JBQ3BCLFNBQVM7Z0JBQ1QsZUFBTSxDQUFDLFlBQVksQ0FBQztvQkFDaEIsc0JBQXNCO29CQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7d0JBQUUsT0FBTTtvQkFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQztvQkFDdEUsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLEVBQUU7d0JBQzdCLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFBO3FCQUN6RDtnQkFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7YUFDVjtTQUNKO0lBQ0wsQ0FBQztJQUVELHdCQUF3QjtJQUV4QixlQUFlO0lBRWYsdUJBQUssR0FBTDtRQUFBLGlCQW1EQztRQWxERyw4QkFBOEI7UUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBZTtZQUMxRCxJQUFJLENBQUMsZUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksQ0FBQztnQkFBRSxPQUFPO1lBQzFDLHVDQUF1QztRQUMzQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFFUixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsVUFBQyxLQUFlO1lBQ3pELElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUMzQix3QkFBd0I7WUFDeEIsdUJBQXVCO1lBQ3ZCLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFBRSxPQUFNO1lBQ2pJLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFBRSxPQUFNO1lBQ25JLElBQUksQ0FBQyxHQUFHLEtBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQy9CLG1CQUFtQjtZQUNuQixDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDbEIsbUJBQW1CO1lBQ25CLEtBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQTtZQUMxQiwyQkFBMkI7WUFFM0IsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7WUFDbEIsS0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBSWYsMEJBQTBCO1lBQzFCLHdCQUF3QjtZQUN4QixtQ0FBbUM7WUFDbkMsSUFBSTtZQUNKLHdCQUF3QjtZQUN4QixtQ0FBbUM7WUFDbkMsUUFBUTtRQUVaLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUVSLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxVQUFDLEtBQWU7WUFFeEQsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7WUFDbkIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDeEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRVIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLFVBQUMsS0FBZTtZQUUzRCxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtZQUNuQixLQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUN4QyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFFUixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7SUFHekMsQ0FBQztJQUVELDRCQUFVLEdBQVYsVUFBVyxFQUFFO1FBQ1Qsc0JBQXNCO1FBQ3RCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDO1FBRS9CLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFFdEIsSUFBSSxNQUFNLEdBQUcsZUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3RCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUM7U0FDdEI7UUFFRCxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUNwQyxJQUFJO1FBQ0osc0NBQXNDO1FBQ3RDLHNDQUFzQztRQUN0QyxzQ0FBc0M7UUFDdEMsd0NBQXdDO1FBRXhDLDhCQUE4QjtRQUM5Qiw4Q0FBOEM7UUFDOUMsaUVBQWlFO1FBQ2pFLDhCQUE4QjtRQUM5QixpQkFBaUI7UUFDakIsU0FBUztRQUNULElBQUk7SUFDUixDQUFDO0lBMUlEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0c7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSztJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNLO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7dUNBQ0E7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQzs2Q0FDTTtJQWhCakIsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQStJM0I7SUFBRCxjQUFDO0NBL0lELEFBK0lDLENBL0lvQyxFQUFFLENBQUMsU0FBUyxHQStJaEQ7a0JBL0lvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuaW1wb3J0IENvbnN0YW50LCB7IHRhZyB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uc3RhbnRcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0aGVCYWxsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBiYWxsOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIGNhbWVyYTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBsaXN0ZW46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5SaWdpZEJvZHkpXHJcbiAgICByYjogY2MuUmlnaWRCb2R5ID0gbnVsbFxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5QYXJ0aWNsZVN5c3RlbSlcclxuICAgIHBhcnRpY2xlOiBjYy5QYXJ0aWNsZVN5c3RlbSA9IG51bGxcclxuXHJcblxyXG4gICAgcG9zOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIGlzTW92ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG1vdmVOdW06IG51bWJlciA9IDA7XHJcblxyXG4gICAgb25CZWdpbkNvbnRhY3QoY29udGFjdCwgc2VsZiwgb3RoZXIpIHtcclxuICAgICAgICBjYy5sb2cob3RoZXIudGFnLCBvdGhlci5ub2RlLm5hbWUsIG90aGVyLm5vZGUucGFyZW50Lm5hbWUsKVxyXG4gICAgICAgIGlmIChvdGhlci50YWcgPT0gdGFnLmJhbGxvb24gfHwgb3RoZXIudGFnID09IHRhZy5wbGF5ZXIgfHwgb3RoZXIudGFnID09IHRhZy5yb3BlKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnRhY3QuZGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IHYgPSB0aGlzLnJiLmxpbmVhclZlbG9jaXR5O1xyXG4gICAgICAgICAgICB2LnggPSAwO1xyXG4gICAgICAgICAgICB2LnkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLnJiLmxpbmVhclZlbG9jaXR5ID0gdjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAob3RoZXIudGFnID09IHRhZy5zdG9uZSB8fCBvdGhlci50YWcgPT0gdGFnLnRob3JuIHx8IG90aGVyLnRhZyA9PSB0YWcuYmF0IHx8IG90aGVyLm5vZGUubmFtZSA9PSBcIndvb2xkZW5Cb3gzXCIpIHtcclxuICAgICAgICAgICAgLy8gY2MubG9nKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkuZ3Jhdml0eVNjYWxlLCBcIi0tLS0tLS0tLW90aGVyLmdyYXZpdHlTY2FsZVwiKVxyXG5cclxuICAgICAgICAgICAgaWYgKG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkuZ3Jhdml0eVNjYWxlID09IDApIHtcclxuICAgICAgICAgICAgICAgIG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkuZ3Jhdml0eVNjYWxlID0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAob3RoZXIubm9kZS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS50eXBlID09IGNjLlJpZ2lkQm9keVR5cGUuS2luZW1hdGljKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2cob3RoZXIubm9kZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZihvdGhlci50YWc9PVwiXCIpXHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm5cclxuICAgICAgICAgICAgICAgIGNvY29zei5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhvdGhlci5ub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW90aGVyLm5vZGUpIHJldHVyblxyXG4gICAgICAgICAgICAgICAgICAgIG90aGVyLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuRHluYW1pYztcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3RoZXIubm9kZS5uYW1lID09IFwic0JvYXJkXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXIubm9kZS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc0JveENvbGxpZGVyKS5hcHBseSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgMC4xKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8vIHRoaXMubGlzdGVuLnpJbmRleCArPSA5OTk5O1xyXG4gICAgICAgIHRoaXMubGlzdGVuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoZXZlbnQ6IGNjLlRvdWNoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgrY29jb3N6LmRhdGFNZ3IuaXNOb3ZpY2UgPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyBjYy5nYW1lLmVtaXQoQ29uc3RhbnQuRV9HQU1FX1NUQVJUKTtcclxuICAgICAgICB9LCB0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLmxpc3Rlbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAoZXZlbnQ6IGNjLlRvdWNoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSBldmVudC5nZXREZWx0YSgpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmJhbGwueCArPSBwb3MueDtcclxuICAgICAgICAgICAgLy8gdGhpcy5iYWxsLnkgKz0gcG9zLnlcclxuICAgICAgICAgICAgaWYgKCgodGhpcy5iYWxsLnggPCAtY2Mud2luU2l6ZS53aWR0aCAvIDIgKyA1MCkgJiYgcG9zLnggPCAwKSB8fCAoKHRoaXMuYmFsbC54ID4gY2Mud2luU2l6ZS53aWR0aCAvIDIgLSA1MCkgJiYgcG9zLnggPiAwKSkgcmV0dXJuXHJcbiAgICAgICAgICAgIGlmICgoKHRoaXMuYmFsbC55IDwgLWNjLndpblNpemUuaGVpZ2h0IC8gMiArIDUwKSAmJiBwb3MueSA8IDApIHx8ICgodGhpcy5iYWxsLnkgPiBjYy53aW5TaXplLmhlaWdodCAvIDIgLSA1MCkgJiYgcG9zLnkgPiAwKSkgcmV0dXJuXHJcbiAgICAgICAgICAgIGxldCB2ID0gdGhpcy5yYi5saW5lYXJWZWxvY2l0eTtcclxuICAgICAgICAgICAgLy8gY2MubG9nKHYueCwgdi55KVxyXG4gICAgICAgICAgICB2LnggPSBwb3MueCAqIDEzMDtcclxuICAgICAgICAgICAgdi55ID0gcG9zLnkgKiAxMzA7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyh2LngsIHYueSlcclxuICAgICAgICAgICAgdGhpcy5yYi5saW5lYXJWZWxvY2l0eSA9IHZcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuaXNNb3ZlKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzTW92ZSA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy5tb3ZlTnVtKys7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLm1vdmVOdW0gPiAzKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLm1vdmVOdW0gPSAwO1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5wYXJ0aWNsZS5yZXNldFN5c3RlbSgpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5wYXJ0aWNsZS5yZXNldFN5c3RlbSgpO1xyXG4gICAgICAgICAgICAvLyB9LCAxKVxyXG5cclxuICAgICAgICB9LCB0aGlzKVxyXG5cclxuICAgICAgICB0aGlzLmxpc3Rlbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIChldmVudDogY2MuVG91Y2gpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZlID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5yYi5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApXHJcbiAgICAgICAgfSwgdGhpcylcclxuXHJcbiAgICAgICAgdGhpcy5saXN0ZW4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCAoZXZlbnQ6IGNjLlRvdWNoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmlzTW92ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMucmIubGluZWFyVmVsb2NpdHkgPSBjYy52MigwLCAwKVxyXG4gICAgICAgIH0sIHRoaXMpXHJcblxyXG4gICAgICAgIHRoaXMucG9zID0gdGhpcy5jYW1lcmEuZ2V0UG9zaXRpb24oKTtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxhdGVVcGRhdGUoZHQpIHtcclxuICAgICAgICAvLyBpZiAoIXRoaXMuaXNNb3ZlKSB7XHJcbiAgICAgICAgbGV0IHYgPSB0aGlzLnJiLmxpbmVhclZlbG9jaXR5O1xyXG5cclxuICAgICAgICBpZiAodi54ICE9IDAgfHwgdi55ICE9IDApIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBwcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcImJhbGxQYXJ0aWNsZVwiLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgIC8vIG5vZGUueCAtPSAxMDtcclxuICAgICAgICAgICAgLy8gbm9kZS55ICs9IDEwXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgbm9kZS56SW5kZXggLT0gMTAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yYi5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGxldCB4ID0gdGhpcy5jYW1lcmEueCAtIHRoaXMucG9zLng7XHJcbiAgICAgICAgLy8gbGV0IHkgPSB0aGlzLmNhbWVyYS55IC0gdGhpcy5wb3MueTtcclxuICAgICAgICAvLyB0aGlzLmJhbGwueCArPSB4OyB0aGlzLmJhbGwueSArPSB5O1xyXG4gICAgICAgIC8vIHRoaXMucG9zID0gdGhpcy5jYW1lcmEuZ2V0UG9zaXRpb24oKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5iYWxsLnkgKz0gMC4wMDAwMDAwMDE7XHJcbiAgICAgICAgLy8gaWYgKGNvY29zei5zY2VuZU1nci5zY2VuZU5hbWUgPT0gXCJHYW1lMlwiKSB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLm5vZGUueSA8PSAtMzAwMCB8fCBNYXRoLmFicyh0aGlzLm5vZGUueCkgPiA1MDApIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KClcclxuICAgICAgICAvLyAgICAgICAgIHJldHVyblxyXG4gICAgICAgIC8vICAgICB9O1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufVxyXG4iXX0=