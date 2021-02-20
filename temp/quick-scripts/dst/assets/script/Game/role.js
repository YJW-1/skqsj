
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Game/role.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c9569omU7RJxbDazHaNd5Sh', 'role');
// script/Game/role.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("../Framework/CocosZ");
var Constant_1 = require("../Framework/Constant");
var Msg_1 = require("../Framework/Msg");
var UiGame_1 = require("../Ui/UiGame");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var role = /** @class */ (function (_super) {
    __extends(role, _super);
    function role() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bodySp = null;
        _this.right_armSp = null;
        _this.left_armSp = null;
        _this.right_legSp = null;
        _this.left_legSp = null;
        _this.tie = null;
        _this.tie2 = null;
        _this.gameBg = null;
        _this.ui = null;
        //最后停下在地图数组中位置
        _this.pos = null;
        //地图数组
        _this.map = null;
        //方向列表
        _this.angleList = null;
        //是否在动作中
        _this.isAction = null;
        //摄像机移动动画
        _this.cameraAction = null;
        //摄像机
        _this.camera = null;
        //监听
        _this.listen = null;
        //主角身体
        _this.body = null;
        //主角头部
        _this.head = null;
        //界面摄像头
        _this.uiCamera = null;
        //背景摄像头
        _this.bgCamera = null;
        //主角表情动画
        _this.animation = null;
        //动作返回值
        _this.action = null;
        //是否正在移动
        _this.isMove = false;
        //是否正在移动
        _this.isMoveEffectType = false;
        //是否失败
        _this.isFailed = false;
        //是否成功
        _this.isSucceed = false;
        //是否成功
        _this.isSucceed2 = false;
        //是否需要传送
        _this.isConveyorBelt = false;
        //是否在复活中
        _this.isResurrection = false;
        //摄像机是否跟随
        _this.isFollow = false;
        //碰到弹簧的类型
        _this.springType = -1;
        //复活等待时间
        _this.resurrectionDelayTime = 0;
        //记录失败前的位置
        _this.lastPos = {};
        //人物角度
        _this.angle = 0;
        //关卡数据的长度
        _this.listLength1 = 0;
        //关卡数据的宽度
        _this.listLength2 = 0;
        //传送间隔
        _this.ConveyorBeltDelayTime = 0;
        //盾牌持续时间
        _this.defTime = 0;
        //改变值
        _this.changeDect = [];
        _this.aTime = 0;
        _this.levelNum = 2;
        return _this;
    }
    role.prototype.getMapByPosX = function (x) {
        var num = 0;
        var a = [];
        while (num++ < 120) {
            var data = CocosZ_1.cocosz.resMgr.getRes("map" + num, cc.Prefab).data;
            // cc.log(data, num);
            for (var _i = 0, _a = data.children; _i < _a.length; _i++) {
                var child = _a[_i];
                if (child.name == "role") {
                    if (Math.abs(Math.round(child.x - x)) < 2) {
                        cc.log(child.x);
                        a.push(CocosZ_1.cocosz.resMgr.getRes("map" + num, cc.Prefab));
                    }
                }
            }
        }
        var idx = Math.floor(a.length * Math.random());
        cc.log(a, idx, "---------------------idx");
        return a[idx];
    };
    role.prototype._initGame = function (map) {
        var Game = cc.find("Canvas/Game");
        cc.log(Game);
        for (var _i = 0, _a = Game.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child.name != "role") {
                child.destroy();
            }
        }
        Game.y += 3000;
        CocosZ_1.cocosz.gameMgr.isGameOver = false;
        CocosZ_1.cocosz.gameMgr.isLeftBalloon = false;
        CocosZ_1.cocosz.gameMgr.isrightBalloon = false;
        CocosZ_1.cocosz.gameMgr.isOpen = false;
        CocosZ_1.cocosz.gameMgr.isFeed = false;
        // let map: cc.Prefab = cocosz.resMgr.getRes("map" + (cocosz.dataMgr.CurLevelId + 1), cc.Prefab);
        for (var _b = 0, _c = map.data.children; _b < _c.length; _b++) {
            var child = _c[_b];
            if (child.name == "mapMaskPoint") {
                var component = child.getComponents(cc.PhysicsPolygonCollider);
                var list = [];
                for (var _d = 0, component_1 = component; _d < component_1.length; _d++) {
                    var poly = component_1[_d];
                    if (poly.points) {
                        list.push(poly.points);
                    }
                }
                var prefab = CocosZ_1.cocosz.resMgr.getRes("mapMask", cc.Prefab);
                var node = cc.instantiate(prefab);
                Game.addChild(node);
                node.zIndex -= 999;
                var mask = node.getComponent(cc.Mask);
                var graphics = mask._graphics;
                var graphics2 = node.getChildByName("line").getComponent(cc.Graphics);
                var rb = node.addComponent(cc.RigidBody);
                rb.type = cc.RigidBodyType.Static;
                for (var _e = 0, list_1 = list; _e < list_1.length; _e++) {
                    var point = list_1[_e];
                    var collider = node.addComponent(cc.PhysicsPolygonCollider);
                    // let collider = node.addComponent(cc.PhysicsChainCollider);
                    cc.log(collider.tag, "----------collider.tag");
                    collider.tag = 0;
                    collider.points = [].concat(point);
                    collider.apply();
                    graphics.moveTo(point[0].x, point[0].y);
                    for (var _f = 0, point_1 = point; _f < point_1.length; _f++) {
                        var v2 = point_1[_f];
                        graphics.lineTo(v2.x, v2.y);
                    }
                    graphics.fill();
                    graphics2.lineWidth = 15;
                    graphics2.strokeColor = new cc.Color(40, 33, 13, 255);
                    graphics2.moveTo(point[0].x, point[0].y);
                    for (var _g = 0, point_2 = point; _g < point_2.length; _g++) {
                        var v2 = point_2[_g];
                        graphics2.lineTo(v2.x, v2.y);
                    }
                    graphics2.lineTo(point[0].x, point[0].y);
                    graphics2.stroke();
                }
            }
            else if (child.name == "sandMaskPoint") {
                // let point = child.getComponent(cc.PhysicsPolygonCollider).points;
                var component = child.getComponents(cc.PhysicsPolygonCollider);
                var list = [];
                for (var _h = 0, component_2 = component; _h < component_2.length; _h++) {
                    var poly = component_2[_h];
                    if (poly.points) {
                        list.push(poly.points);
                    }
                }
                var prefab = CocosZ_1.cocosz.resMgr.getRes("sandMask", cc.Prefab);
                var node = cc.instantiate(prefab);
                Game.addChild(node);
                node.zIndex -= 998;
                if (CocosZ_1.cocosz.dataMgr.CurLevelId == 119) {
                    node.zIndex += 998;
                }
                ;
                var script = node.getChildByName("node_dirty").getComponent("test");
                script.reset(list);
                var mask = node.getComponent(cc.Mask);
                var graphics = mask._graphics;
                // graphics.moveTo(point[0].x, point[0].y);
                // for (let v2 of point) {
                //     graphics.lineTo(v2.x, v2.y);
                // }
                // graphics.fill();
                for (var _j = 0, list_2 = list; _j < list_2.length; _j++) {
                    var point = list_2[_j];
                    graphics.moveTo(point[0].x, point[0].y);
                    for (var _k = 0, point_3 = point; _k < point_3.length; _k++) {
                        var v2 = point_3[_k];
                        graphics.lineTo(v2.x, v2.y);
                    }
                    graphics.fill();
                }
            }
            else if (child.name == "baffle") {
                var prefab = CocosZ_1.cocosz.resMgr.getRes("baffle", cc.Prefab);
                var node = cc.instantiate(prefab);
                node.scale = child.scale;
                node.angle = child.angle;
                node.setPosition(child.getPosition());
                Game.addChild(node);
            }
            else if (child.name == "fan") {
                var prefab = CocosZ_1.cocosz.resMgr.getRes("fan", cc.Prefab);
                var node = cc.instantiate(prefab);
                node.scale = child.scale;
                node.angle = child.angle;
                node.setPosition(child.getPosition());
                Game.addChild(node);
            }
            else if (child.name == "handTips") {
                var prefab = CocosZ_1.cocosz.resMgr.getRes("handTips", cc.Prefab);
                var node = cc.instantiate(prefab);
                node.scale = child.scale;
                node.angle = child.angle;
                node.setPosition(child.getPosition());
                Game.addChild(node);
            }
            else if (child.name == "propMoveFloor" || child.name == "enemy" || child.name == "prop") {
                var parent = new cc.Node;
                parent.name == child.name;
                for (var _l = 0, _m = child.children; _l < _m.length; _l++) {
                    var child2 = _m[_l];
                    var prefab = CocosZ_1.cocosz.resMgr.getRes(child2.name, cc.Prefab);
                    var node = cc.instantiate(prefab);
                    if (child2.name == "carton") {
                        parent.zIndex += 1003;
                    }
                    node.scaleX = child2.scaleX;
                    node.scaleY = child2.scaleY;
                    node.width = child2.width;
                    node.angle = child2.angle;
                    if (child2.name == "nimiCactus") {
                        node.angle += 800 * Math.random();
                    }
                    if (child2.name == "floor11") {
                        node.getChildByName("rocket").scaleX = child2.getChildByName("rocket").scaleX;
                        // node.getChildByName("rocket").x = -child2.getChildByName("rocket").x;
                    }
                    if (child2.name == "floor17") {
                        var floor = child2.getChildByName("floor");
                        node.getChildByName("floor").angle = floor.angle;
                        node.getChildByName("floor").scaleX = floor.scaleX;
                        node.getChildByName("floor").scaleY = floor.scaleY;
                        node.getChildByName("floor").x = floor.x;
                        node.getChildByName("floor").y = floor.y;
                        // node.getChildByName("rocket").x = -child2.getChildByName("rocket").x;
                    }
                    if (child2.name == "floorRotetaCom") {
                        var floor = child2.getChildByName("floor");
                        var direction = child2.getChildByName("direction");
                        node.getChildByName("floor").angle = floor.angle;
                        node.getChildByName("floor").scaleX = floor.scaleX;
                        node.getChildByName("floor").scaleY = floor.scaleY;
                        node.getChildByName("direction").angle = direction.angle;
                        node.getChildByName("direction").scaleX = direction.scaleX;
                        node.getChildByName("direction").scaleY = direction.scaleY;
                    }
                    node.setPosition(child2.getPosition());
                    parent.addChild(node);
                }
                Game.addChild(parent);
            }
        }
    };
    role.prototype.onSucceed = function () {
        var _this = this;
        cc.log("游戏胜利");
        if (CocosZ_1.cocosz.gameMgr.isGameOver)
            return;
        CocosZ_1.cocosz.gameMgr.isGameOver = true;
        cc.log("---------cocosz.gameMgr.surplusLevelNum----", CocosZ_1.cocosz.gameMgr.surplusLevelNum);
        if (CocosZ_1.cocosz.gameMgr.surplusLevelNum > 0) {
            CocosZ_1.cocosz.gameMgr.surplusLevelNum--;
            CocosZ_1.cocosz.gameMgr.touchNum++;
            cc.find("Canvas/succeedPoint").y += 1600;
            cc.find("Canvas/beforeSucceedPoint").y += 1600;
            CocosZ_1.cocosz.gameMgr.isGameOver = false;
            this.animation.play("normal");
            this.onRefreshTure();
            cc.tween(this.camera)
                .by(1, { position: cc.v2(0, 1600) })
                .call(function () {
                _this.onRefreshFalse();
            })
                .start();
            // cc.tween(this.uiCamera)
            //     .by(1, { position: cc.v2(0, 1600) })
            //     .start()
            return;
        }
        CocosZ_1.cocosz.gameMgr.fraction = UiGame_1.uiGame.fraction;
        this.scheduleOnce(function () {
            if ((cc.sys.platform === cc.sys.VIVO_GAME || cc.sys.platform === cc.sys.OPPO_GAME) && CocosZ_1.cocosz.dataMgr.ShockOn) {
                lieyou_SdkManager.vibrateLong();
            }
            if (cc.sys.platform === cc.sys.WECHAT_GAME && CocosZ_1.cocosz.dataMgr.ShockOn) {
                window["wx"].vibrateLong();
            }
        }, 0.1);
        CocosZ_1.cocosz.audioMgr.playBeforeVectoryEffect();
        CocosZ_1.cocosz.unscheduleAllCallbacks();
        // if (cocosz.gameMgr.isOpenRewardLevel) {
        //     cocosz.gameMgr.isGameOver = false;
        //     if (cocosz.dataMgr.rewardType == 0) {
        //         cocosz.dataMgr.rewardType = 1
        //         cocosz.sceneMgr.loadScene("rewardLevel", () => {
        //             Msg.Show("奖励关卡来临")
        //         });
        //     }
        //     else {
        //         cocosz.dataMgr.rewardType = 0;
        //         cocosz.sceneMgr.loadScene("rewardLevel2", () => {
        //             Msg.Show("奖励关卡来临")
        //         });
        //     }
        //     return;
        // }
        if (CocosZ_1.cocosz.gameMgr.isOpenLottery) {
            CocosZ_1.cocosz.gameMgr.isOpenLottery = false;
            CocosZ_1.cocosz.gameMgr.LevelNum2 = 0;
            CocosZ_1.cocosz.audioMgr.playbtnEffect();
            CocosZ_1.cocosz.uiMgr.openPanel(Constant_1.PanelName.UiLottery);
            Msg_1.default.Show("一直抽一直爽");
            return;
        }
        this.scheduleOnce(function () {
            CocosZ_1.cocosz.uiMgr.openPanel(Constant_1.PanelName.UiBeforeSucceed);
        }, 1.5);
        // if (cc.sys.platform === cc.sys.VIVO_GAME && cocosz.dataMgr.ShockOn) {
        //     lieyou_SdkManager.vibrateLong();
        // }
    };
    role.prototype.onFailed = function () {
        if (CocosZ_1.cocosz.gameMgr.isGameOver)
            return;
        CocosZ_1.cocosz.gameMgr.isGameOver = true;
        CocosZ_1.cocosz.unscheduleAllCallbacks();
        this.scheduleOnce(function () {
            if ((cc.sys.platform === cc.sys.VIVO_GAME || cc.sys.platform === cc.sys.OPPO_GAME) && CocosZ_1.cocosz.dataMgr.ShockOn) {
                lieyou_SdkManager.vibrateLong();
            }
            if (cc.sys.platform === cc.sys.WECHAT_GAME && CocosZ_1.cocosz.dataMgr.ShockOn) {
                window["wx"].vibrateLong();
            }
        }, 0.1);
        this.scheduleOnce(function () {
            CocosZ_1.cocosz.uiMgr.openPanel(Constant_1.PanelName.UiFailed);
        }, 1.5);
    };
    // onBeginContactByRole(contact, self, other) {
    //     if (other.tag == tag.honeybee) {
    //         this.onFailed();
    //     }
    // }
    role.prototype.onSetPosition = function (pos) {
        if (this.ConveyorBeltDelayTime > 0)
            return;
        if (this.action) {
            this.action.stop();
            this.isAction = false;
        }
        this.ConveyorBeltDelayTime = 0.2;
        this.node.setPosition(pos);
        this.pos["x"] = Math.ceil(this.node.x / 100 + this.listLength1 / 2 - 1);
        this.pos["y"] = Math.ceil(Math.abs(this.node.y / 100 - this.listLength2 / 2));
    };
    role.prototype.getPosByAngle = function () {
    };
    role.prototype.onMoveBySpring = function () {
    };
    role.prototype.onCollisionEnter = function (other, self) {
        if (CocosZ_1.cocosz.gameMgr.isGameOver)
            return;
        if (other.tag == Constant_1.tag.beforeSucceedPoint) {
            this.animation.play("smile", 0);
        }
        else if (other.tag == Constant_1.tag.succeedPoint) {
            this.onSucceed();
        }
        else if (other.tag == Constant_1.tag.thorn) {
            if (this.aTime > 0)
                return;
            CocosZ_1.cocosz.audioMgr.playRoleGloomyEffect2();
            this.aTime = 3;
        }
        else if (other.tag == Constant_1.tag.honeybee) {
            this.animation.play("bee", 1);
            CocosZ_1.cocosz.audioMgr.playBeforeFeildEffect2();
            this.onFailed();
        }
        else if (other.tag == Constant_1.tag.bigFan && other.node.getComponent("propBigFan").intact == true) {
            // if (other.node.getComponent("propBigFan").intact.active == false) return;
            CocosZ_1.cocosz.audioMgr.playBeforeFeildEffect3();
            cc.tween(this.node)
                .to(0.5, { scale: 0 })
                .start();
            this.onFailed();
        }
    };
    role.prototype.initMap = function (map) {
        this.map = [].concat(map);
    };
    role.prototype.onDef = function () {
        var prefab = CocosZ_1.cocosz.resMgr.getRes("defEffect", cc.Prefab);
        var node = cc.instantiate(prefab);
        this.node.addChild(node);
    };
    role.prototype.onRefreshTure = function () {
        for (var _i = 0, _a = this.node.parent.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child.name == "sandMask" || child.name == "mapMask" || child.name == "propMoveFloor") {
                cc.log(child.y, CocosZ_1.cocosz.gameMgr.touchNum * 1600, child.y != CocosZ_1.cocosz.gameMgr.touchNum * 1600, child.name, "cocosz.gameMgr.touchNum * 1600");
                if (Math.floor(child.y) != CocosZ_1.cocosz.gameMgr.touchNum * 1600) {
                }
                else {
                    cc.log("-------显示-----", child.name, child.y);
                    child.active = true;
                }
            }
            else if (child.name == "baffle") {
                if (Math.floor(child.y) > CocosZ_1.cocosz.gameMgr.touchNum * 1600 + 800 || Math.floor(child.y) < CocosZ_1.cocosz.gameMgr.touchNum * 1600 - 800) {
                }
                else {
                    child.active = true;
                }
            }
            else if (child.name == "role")
                continue;
            else if (child.name == "enemy" || child.name == "prop") {
                for (var _b = 0, _c = child.children; _b < _c.length; _b++) {
                    var child2 = _c[_b];
                    if (Math.floor(child2.y) > CocosZ_1.cocosz.gameMgr.touchNum * 1600 + 800 || Math.floor(child2.y) < CocosZ_1.cocosz.gameMgr.touchNum * 1600 - 800) {
                    }
                    else {
                        cc.log(child2.y, child2.name, "---------------child2.name");
                        child2.active = true;
                    }
                }
            }
        }
    };
    role.prototype.onRefreshFalse = function () {
        if (CocosZ_1.cocosz.dataMgr.CurLevelId == 135 && CocosZ_1.cocosz.gameMgr.touchNum == 0)
            return;
        // if (cocosz.dataMgr.CurLevelId == 136) return;
        for (var _i = 0, _a = this.node.parent.children; _i < _a.length; _i++) {
            var child = _a[_i];
            if (child.name == "sandMask" || child.name == "mapMask" || child.name == "propMoveFloor") {
                if (child.y != CocosZ_1.cocosz.gameMgr.touchNum * 1600) {
                    cc.log("-------隐藏-----", child.name, child.y);
                    child.active = false;
                }
            }
            else if (child.name == "baffle") {
                if (child.y > CocosZ_1.cocosz.gameMgr.touchNum * 1600 + 800 || child.y < CocosZ_1.cocosz.gameMgr.touchNum * 1600 - 800) {
                    child.active = false;
                    cc.log("-------隐藏-----", child.name, child.y);
                }
            }
            else if (child.name == "role")
                continue;
            else if (child.name == "enemy" || child.name == "prop") {
                for (var _b = 0, _c = child.children; _b < _c.length; _b++) {
                    var child2 = _c[_b];
                    if (child2.y > CocosZ_1.cocosz.gameMgr.touchNum * 1600 + 800 || child2.y < CocosZ_1.cocosz.gameMgr.touchNum * 1600 - 800) {
                        child2.active = false;
                    }
                }
            }
        }
        // cocosz.gameMgr.touchNum++;
        // this.onRefreshTure();
    };
    // LIFE-CYCLE CALLBACKS:
    role.prototype.onDestroy = function () {
        this.unscheduleAllCallbacks();
        cc.game.targetOff(this);
    };
    role.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
        this.camera = cc.find("Canvas/Main Camera");
        this.listen = this.node.getChildByName("body").getChildByName("listen");
        this.body = this.node.getChildByName("body");
        this.animation = this.node.getChildByName("head").getChildByName("head").getComponent(cc.Animation);
        this.uiCamera = cc.find("Canvas/uiCamera");
        this.bgCamera = cc.find("Canvas/bgCamera");
    };
    role.prototype.start = function () {
        var _this = this;
        this.gameBg = cc.find("Canvas/gameBG");
        this.ui = cc.find("Canvas/ui");
        this.node.zIndex += 1000;
        this.listen.on(cc.Node.EventType.TOUCH_START, function () {
            cc.game.emit(Constant_1.default.E_ROLE_MOVE);
        });
        cc.game.on(Constant_1.default.E_ROLE_COLLISIONENTER, function (other, self) {
            _this.onCollisionEnter(other, self);
        }, this);
        cc.game.on(Constant_1.default.E_PROP_ALLBALLOONDES, function (other, self) {
            _this.animation.play("terrified");
        }, this);
        cc.game.on(Constant_1.default.E_GAME_FAID, function (other, self) {
            _this.onFailed();
        }, this);
        // cc.game.on(Constant.E_ROLE_CONTACTENTER, (contact, other, self) => {
        // this.onBeginContactByRole(contact, other, self);
        // }, this)
        cc.log(CocosZ_1.cocosz.gameMgr.surplusLevelNum, "--cocosz.gameMgr.surplusLevelNum");
        if ((CocosZ_1.cocosz.dataMgr.CurLevelId + 1) % 5 == 0 && CocosZ_1.cocosz.dataMgr.CurLevelId > 40) {
            this.scheduleOnce(function () {
                _this.onRefreshFalse();
            }, 1);
        }
        cc.log(CocosZ_1.cocosz.resMgr.getRes("body_" + (CocosZ_1.cocosz.dataMgr.CurSkinId + 1), cc.SpriteFrame));
        this.bodySp.spriteFrame = CocosZ_1.cocosz.resMgr.getRes("body_" + (CocosZ_1.cocosz.dataMgr.CurSkinId + 1), cc.SpriteFrame);
        this.right_armSp.spriteFrame = CocosZ_1.cocosz.resMgr.getRes("right_arm_" + (CocosZ_1.cocosz.dataMgr.CurSkinId + 1), cc.SpriteFrame);
        this.right_legSp.spriteFrame = CocosZ_1.cocosz.resMgr.getRes("right_leg_" + (CocosZ_1.cocosz.dataMgr.CurSkinId + 1), cc.SpriteFrame);
        this.left_legSp.spriteFrame = CocosZ_1.cocosz.resMgr.getRes("left_leg_" + (CocosZ_1.cocosz.dataMgr.CurSkinId + 1), cc.SpriteFrame);
        this.left_armSp.spriteFrame = CocosZ_1.cocosz.resMgr.getRes("left_arm_" + (CocosZ_1.cocosz.dataMgr.CurSkinId + 1), cc.SpriteFrame);
        if (CocosZ_1.cocosz.dataMgr.CurSkinId == 0) {
            this.tie.active = true;
        }
        else if (CocosZ_1.cocosz.dataMgr.CurSkinId == 4) {
            this.tie2.active = true;
        }
    };
    role.prototype.upDataCameraPos = function (pos) {
        var targetPos = cc.v2(pos.x, pos.y);
        var selfPos = cc.v2(this.camera.x, this.camera.y);
        selfPos = selfPos.lerp(targetPos, 0.1);
        this.camera.y = selfPos.y;
        this.camera.x = selfPos.x;
    };
    role.prototype.update = function (dt) {
        // cc.log(this.body.y)
        if (this.aTime > 0) {
            this.aTime -= dt;
        }
        if (this.body.y <= -600 && this.body.getComponent(cc.RigidBody).linearVelocity.y < 0) {
            this.onFailed();
        }
        if (this.body.getComponent(cc.RigidBody).linearVelocity.y > 200) {
            var v = this.body.getComponent(cc.RigidBody).linearVelocity;
            v.y = 200;
            this.body.getComponent(cc.RigidBody).linearVelocity = v;
        }
        // cc.log(this.body.y + this.node.y + this.node.parent.y)
        if (this.body.y + this.node.y + this.node.parent.y + 400 < 0)
            return;
        // this.camera.y += 1
        if (CocosZ_1.cocosz.gameMgr.isGameOver)
            return;
        // if (cocosz.sceneMgr.sceneName == "Game2") {
        //     this.camera.setPosition(cc.v2(0, this.body.y + this.node.y + this.node.parent.y + 400))
        //     this.ui.y = this.camera.y;
        //     this.gameBg.y = this.camera.y;
        // }
        // this.uiCamera.setPosition(cc.v2(this.body.x, this.body.y + this.node.y + this.node.parent.y))
        // if (this.isFollow) {
        //     this.camera.setPosition(cc.v2(this.body.x, this.body.y))
        // }
    };
    __decorate([
        property(cc.Sprite)
    ], role.prototype, "bodySp", void 0);
    __decorate([
        property(cc.Sprite)
    ], role.prototype, "right_armSp", void 0);
    __decorate([
        property(cc.Sprite)
    ], role.prototype, "left_armSp", void 0);
    __decorate([
        property(cc.Sprite)
    ], role.prototype, "right_legSp", void 0);
    __decorate([
        property(cc.Sprite)
    ], role.prototype, "left_legSp", void 0);
    __decorate([
        property(cc.Node)
    ], role.prototype, "tie", void 0);
    __decorate([
        property(cc.Node)
    ], role.prototype, "tie2", void 0);
    role = __decorate([
        ccclass
    ], role);
    return role;
}(cc.Component));
exports.default = role;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxHYW1lXFxyb2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBOEM7QUFDOUMsa0RBQTJFO0FBRTNFLHdDQUFtQztBQUVuQyx1Q0FBc0M7QUFDaEMsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQUFrQyx3QkFBWTtJQUQ5QztRQUFBLHFFQThwQkM7UUF4cEJHLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFFN0IsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFJN0IsU0FBRyxHQUFZLElBQUksQ0FBQztRQUVwQixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsUUFBRSxHQUFZLElBQUksQ0FBQTtRQUdsQixjQUFjO1FBQ2QsU0FBRyxHQUFRLElBQUksQ0FBQztRQUNoQixNQUFNO1FBQ04sU0FBRyxHQUFRLElBQUksQ0FBQztRQUNoQixNQUFNO1FBQ04sZUFBUyxHQUFRLElBQUksQ0FBQztRQUN0QixRQUFRO1FBQ1IsY0FBUSxHQUFRLElBQUksQ0FBQztRQUVyQixTQUFTO1FBQ1Qsa0JBQVksR0FBUSxJQUFJLENBQUM7UUFDekIsS0FBSztRQUNMLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsSUFBSTtRQUNKLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdkIsTUFBTTtRQUNOLFVBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsTUFBTTtRQUNOLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIsT0FBTztRQUNQLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsT0FBTztRQUNQLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsUUFBUTtRQUNSLGVBQVMsR0FBaUIsSUFBSSxD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RyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFBRSxPQUFPO1FBQ3JFLHFCQUFxQjtRQUNyQixJQUFJLGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVTtZQUFFLE9BQU87UUFDdEMsOENBQThDO1FBQzlDLDhGQUE4RjtRQUM5RixpQ0FBaUM7UUFDakMscUNBQXFDO1FBQ3JDLElBQUk7UUFFSixnR0FBZ0c7UUFDaEcsdUJBQXVCO1FBQ3ZCLCtEQUErRDtRQUMvRCxJQUFJO0lBQ1IsQ0FBQztJQXZwQkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt3Q0FDSztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzZDQUNVO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ1M7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDVTtJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzRDQUNTO0lBSTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cUNBQ0U7SUFFcEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzQ0FDRztJQW5CSixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBNnBCeEI7SUFBRCxXQUFDO0NBN3BCRCxBQTZwQkMsQ0E3cEJpQyxFQUFFLENBQUMsU0FBUyxHQTZwQjdDO2tCQTdwQm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2Nvc3osIH0gZnJvbSBcIi4uL0ZyYW1ld29yay9Db2Nvc1pcIjtcclxuaW1wb3J0IENvbnN0YW50LCB7IHRhZywgUGFuZWxOYW1lLCBQYWdlTmFtZSB9IGZyb20gXCIuLi9GcmFtZXdvcmsvQ29uc3RhbnRcIjtcclxuXHJcbmltcG9ydCBNc2cgZnJvbSBcIi4uL0ZyYW1ld29yay9Nc2dcIjtcclxuXHJcbmltcG9ydCB7IHVpR2FtZSB9IGZyb20gXCIuLi9VaS9VaUdhbWVcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJvbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGJvZHlTcDogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICByaWdodF9hcm1TcDogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBsZWZ0X2FybVNwOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIHJpZ2h0X2xlZ1NwOiBjYy5TcHJpdGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGxlZnRfbGVnU3A6IGNjLlNwcml0ZSA9IG51bGw7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGllOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdGllMjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgZ2FtZUJnOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIHVpOiBjYy5Ob2RlID0gbnVsbFxyXG5cclxuXHJcbiAgICAvL+acgOWQjuWBnOS4i+WcqOWcsOWbvuaVsOe7hOS4reS9jee9rlxyXG4gICAgcG9zOiBhbnkgPSBudWxsO1xyXG4gICAgLy/lnLDlm77mlbDnu4RcclxuICAgIG1hcDogYW55ID0gbnVsbDtcclxuICAgIC8v5pa55ZCR5YiX6KGoXHJcbiAgICBhbmdsZUxpc3Q6IGFueSA9IG51bGw7XHJcbiAgICAvL+aYr+WQpuWcqOWKqOS9nOS4rVxyXG4gICAgaXNBY3Rpb246IGFueSA9IG51bGw7XHJcblxyXG4gICAgLy/mkYTlg4/mnLrnp7vliqjliqjnlLtcclxuICAgIGNhbWVyYUFjdGlvbjogYW55ID0gbnVsbDtcclxuICAgIC8v5pGE5YOP5py6XHJcbiAgICBjYW1lcmE6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgLy/nm5HlkKxcclxuICAgIGxpc3RlbjogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvL+S4u+inkui6q+S9k1xyXG4gICAgYm9keTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvL+S4u+inkuWktOmDqFxyXG4gICAgaGVhZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG5cclxuICAgIC8v55WM6Z2i5pGE5YOP5aS0XHJcbiAgICB1aUNhbWVyYTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICAvL+iDjOaZr+aRhOWDj+WktFxyXG4gICAgYmdDYW1lcmE6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIC8v5Li76KeS6KGo5oOF5Yqo55S7XHJcbiAgICBhbmltYXRpb246IGNjLkFuaW1hdGlvbiA9IG51bGw7XHJcblxyXG4gICAgLy/liqjkvZzov5Tlm57lgLxcclxuICAgIGFjdGlvbjogYW55ID0gbnVsbDtcclxuXHJcblxyXG4gICAgLy/mmK/lkKbmraPlnKjnp7vliqhcclxuICAgIGlzTW92ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8v5piv5ZCm5q2j5Zyo56e75YqoXHJcbiAgICBpc01vdmVFZmZlY3RUeXBlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIC8v5piv5ZCm5aSx6LSlXHJcbiAgICBpc0ZhaWxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8v5piv5ZCm5oiQ5YqfXHJcbiAgICBpc1N1Y2NlZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8v5piv5ZCm5oiQ5YqfXHJcbiAgICBpc1N1Y2NlZWQyOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIC8v5piv5ZCm6ZyA6KaB5Lyg6YCBXHJcbiAgICBpc0NvbnZleW9yQmVsdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy/mmK/lkKblnKjlpI3mtLvkuK1cclxuICAgIGlzUmVzdXJyZWN0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAgIC8v5pGE5YOP5py65piv5ZCm6Lef6ZqPXHJcbiAgICBpc0ZvbGxvdzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8v56Kw5Yiw5by557Cn55qE57G75Z6LXHJcbiAgICBzcHJpbmdUeXBlOiBudW1iZXIgPSAtMTtcclxuXHJcbiAgICAvL+Wkjea0u+etieW+heaXtumXtFxyXG4gICAgcmVzdXJyZWN0aW9uRGVsYXlUaW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8v6K6w5b2V5aSx6LSl5YmN55qE5L2N572uXHJcbiAgICBsYXN0UG9zOiBhbnkgPSB7fTtcclxuXHJcbiAgICAvL+S6uueJqeinkuW6plxyXG4gICAgYW5nbGU6IG51bWJlciA9IDA7XHJcblxyXG4gICAgLy/lhbPljaHmlbDmja7nmoTplb/luqZcclxuICAgIGxpc3RMZW5ndGgxOiBudW1iZXIgPSAwO1xyXG4gICAgLy/lhbPljaHmlbDmja7nmoTlrr3luqZcclxuICAgIGxpc3RMZW5ndGgyOiBudW1iZXIgPSAwO1xyXG5cclxuXHJcbiAgICAvL+S8oOmAgemXtOmalFxyXG4gICAgQ29udmV5b3JCZWx0RGVsYXlUaW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8v55u+54mM5oyB57ut5pe26Ze0XHJcbiAgICBkZWZUaW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8v5pS55Y+Y5YC8XHJcbiAgICBjaGFuZ2VEZWN0OiBhbnkgPSBbXTtcclxuXHJcbiAgICBhVGltZTogbnVtYmVyID0gMDtcclxuXHJcblxyXG4gICAgbGV2ZWxOdW06IG51bWJlciA9IDI7XHJcblxyXG5cclxuICAgIGdldE1hcEJ5UG9zWCh4OiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgbnVtID0gMDtcclxuICAgICAgICBsZXQgYSA9IFtdO1xyXG4gICAgICAgIHdoaWxlIChudW0rKyA8IDEyMCkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwibWFwXCIgKyBudW0sIGNjLlByZWZhYikuZGF0YTtcclxuICAgICAgICAgICAgLy8gY2MubG9nKGRhdGEsIG51bSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNoaWxkIG9mIGRhdGEuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5uYW1lID09IFwicm9sZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKE1hdGgucm91bmQoY2hpbGQueCAtIHgpKSA8IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKGNoaWxkLngpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEucHVzaChjb2Nvc3oucmVzTWdyLmdldFJlcyhcIm1hcFwiICsgbnVtLCBjYy5QcmVmYWIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBpZHggPSBNYXRoLmZsb29yKGEubGVuZ3RoICogTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgY2MubG9nKGEsIGlkeCwgXCItLS0tLS0tLS0tLS0tLS0tLS0tLS1pZHhcIik7XHJcbiAgICAgICAgcmV0dXJuIGFbaWR4XTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9pbml0R2FtZShtYXApIHtcclxuICAgICAgICBsZXQgR2FtZSA9IGNjLmZpbmQoXCJDYW52YXMvR2FtZVwiKTtcclxuICAgICAgICBjYy5sb2coR2FtZSlcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBHYW1lLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZC5uYW1lICE9IFwicm9sZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEdhbWUueSArPSAzMDAwO1xyXG5cclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pc0dhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3IuaXNMZWZ0QmFsbG9vbiA9IGZhbHNlO1xyXG4gICAgICAgIGNvY29zei5nYW1lTWdyLmlzcmlnaHRCYWxsb29uID0gZmFsc2U7XHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3IuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgY29jb3N6LmdhbWVNZ3IuaXNGZWVkID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICAvLyBsZXQgbWFwOiBjYy5QcmVmYWIgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcIm1hcFwiICsgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgKyAxKSwgY2MuUHJlZmFiKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgbWFwLmRhdGEuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkLm5hbWUgPT0gXCJtYXBNYXNrUG9pbnRcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudCA9IGNoaWxkLmdldENvbXBvbmVudHMoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcG9seSBvZiBjb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9seS5wb2ludHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKHBvbHkucG9pbnRzKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJtYXBNYXNrXCIsIGNjLlByZWZhYilcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcclxuICAgICAgICAgICAgICAgIEdhbWUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnpJbmRleCAtPSA5OTk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWFzazogY2MuTWFzayA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLk1hc2spO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyYXBoaWNzID0gbWFzay5fZ3JhcGhpY3M7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JhcGhpY3MyOiBjYy5HcmFwaGljcyA9IG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsaW5lXCIpLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmIgPSBub2RlLmFkZENvbXBvbmVudChjYy5SaWdpZEJvZHkpO1xyXG4gICAgICAgICAgICAgICAgcmIudHlwZSA9IGNjLlJpZ2lkQm9keVR5cGUuU3RhdGljO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHBvaW50IG9mIGxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29sbGlkZXIgPSBub2RlLmFkZENvbXBvbmVudChjYy5QaHlzaWNzUG9seWdvbkNvbGxpZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgY29sbGlkZXIgPSBub2RlLmFkZENvbXBvbmVudChjYy5QaHlzaWNzQ2hhaW5Db2xsaWRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKGNvbGxpZGVyLnRhZywgXCItLS0tLS0tLS0tY29sbGlkZXIudGFnXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpZGVyLnRhZyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGlkZXIucG9pbnRzID0gW10uY29uY2F0KHBvaW50KTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xsaWRlci5hcHBseSgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBncmFwaGljcy5tb3ZlVG8ocG9pbnRbMF0ueCwgcG9pbnRbMF0ueSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHYyIG9mIHBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyh2Mi54LCB2Mi55KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBncmFwaGljczIubGluZVdpZHRoID0gMTU7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MyLnN0cm9rZUNvbG9yID0gbmV3IGNjLkNvbG9yKDQwLCAzMywgMTMsIDI1NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MyLm1vdmVUbyhwb2ludFswXS54LCBwb2ludFswXS55KTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB2MiBvZiBwb2ludCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFwaGljczIubGluZVRvKHYyLngsIHYyLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBncmFwaGljczIubGluZVRvKHBvaW50WzBdLngsIHBvaW50WzBdLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzMi5zdHJva2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkLm5hbWUgPT0gXCJzYW5kTWFza1BvaW50XCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgcG9pbnQgPSBjaGlsZC5nZXRDb21wb25lbnQoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcikucG9pbnRzO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudCA9IGNoaWxkLmdldENvbXBvbmVudHMoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcG9seSBvZiBjb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9seS5wb2ludHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKHBvbHkucG9pbnRzKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJzYW5kTWFza1wiLCBjYy5QcmVmYWIpXHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBHYW1lLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS56SW5kZXggLT0gOTk4O1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTE5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS56SW5kZXggKz0gOTk4O1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc2NyaXB0ID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcIm5vZGVfZGlydHlcIikuZ2V0Q29tcG9uZW50KFwidGVzdFwiKTtcclxuICAgICAgICAgICAgICAgIHNjcmlwdC5yZXNldChsaXN0KTtcclxuICAgICAgICAgICAgICAgIGxldCBtYXNrOiBjYy5NYXNrID0gbm9kZS5nZXRDb21wb25lbnQoY2MuTWFzayk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JhcGhpY3MgPSBtYXNrLl9ncmFwaGljcztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBncmFwaGljcy5tb3ZlVG8ocG9pbnRbMF0ueCwgcG9pbnRbMF0ueSk7XHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCB2MiBvZiBwb2ludCkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGdyYXBoaWNzLmxpbmVUbyh2Mi54LCB2Mi55KTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGdyYXBoaWNzLmZpbGwoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwb2ludCBvZiBsaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHBvaW50WzBdLngsIHBvaW50WzBdLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHYyIG9mIHBvaW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyh2Mi54LCB2Mi55KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQubmFtZSA9PSBcImJhZmZsZVwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiYmFmZmxlXCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNjYWxlID0gY2hpbGQuc2NhbGU7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFuZ2xlID0gY2hpbGQuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKGNoaWxkLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICAgICAgR2FtZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkLm5hbWUgPT0gXCJmYW5cIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IHByZWZhYiA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiZmFuXCIsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNjYWxlID0gY2hpbGQuc2NhbGU7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFuZ2xlID0gY2hpbGQuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKGNoaWxkLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICAgICAgR2FtZS5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkLm5hbWUgPT0gXCJoYW5kVGlwc1wiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJoYW5kVGlwc1wiLCBjYy5QcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zY2FsZSA9IGNoaWxkLnNjYWxlO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5hbmdsZSA9IGNoaWxkLmFuZ2xlO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihjaGlsZC5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgICAgIEdhbWUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZC5uYW1lID09IFwicHJvcE1vdmVGbG9vclwiIHx8IGNoaWxkLm5hbWUgPT0gXCJlbmVteVwiIHx8IGNoaWxkLm5hbWUgPT0gXCJwcm9wXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJlbnQgPSBuZXcgY2MuTm9kZTtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5uYW1lID09IGNoaWxkLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZDIgb2YgY2hpbGQuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoY2hpbGQyLm5hbWUsIGNjLlByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZDIubmFtZSA9PSBcImNhcnRvblwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC56SW5kZXggKz0gMTAwM1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBub2RlLnNjYWxlWCA9IGNoaWxkMi5zY2FsZVg7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zY2FsZVkgPSBjaGlsZDIuc2NhbGVZO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUud2lkdGggPSBjaGlsZDIud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hbmdsZSA9IGNoaWxkMi5hbmdsZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGQyLm5hbWUgPT0gXCJuaW1pQ2FjdHVzXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5hbmdsZSArPSA4MDAgKiBNYXRoLnJhbmRvbSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZDIubmFtZSA9PSBcImZsb29yMTFcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwicm9ja2V0XCIpLnNjYWxlWCA9IGNoaWxkMi5nZXRDaGlsZEJ5TmFtZShcInJvY2tldFwiKS5zY2FsZVg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyb2NrZXRcIikueCA9IC1jaGlsZDIuZ2V0Q2hpbGRCeU5hbWUoXCJyb2NrZXRcIikueDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkMi5uYW1lID09IFwiZmxvb3IxN1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmbG9vciA9IGNoaWxkMi5nZXRDaGlsZEJ5TmFtZShcImZsb29yXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiZmxvb3JcIikuYW5nbGUgPSBmbG9vci5hbmdsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImZsb29yXCIpLnNjYWxlWCA9IGZsb29yLnNjYWxlWDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImZsb29yXCIpLnNjYWxlWSA9IGZsb29yLnNjYWxlWTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImZsb29yXCIpLnggPSBmbG9vci54O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiZmxvb3JcIikueSA9IGZsb29yLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyb2NrZXRcIikueCA9IC1jaGlsZDIuZ2V0Q2hpbGRCeU5hbWUoXCJyb2NrZXRcIikueDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkMi5uYW1lID09IFwiZmxvb3JSb3RldGFDb21cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmxvb3IgPSBjaGlsZDIuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IGNoaWxkMi5nZXRDaGlsZEJ5TmFtZShcImRpcmVjdGlvblwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImZsb29yXCIpLmFuZ2xlID0gZmxvb3IuYW5nbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKS5zY2FsZVggPSBmbG9vci5zY2FsZVg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9vclwiKS5zY2FsZVkgPSBmbG9vci5zY2FsZVk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImRpcmVjdGlvblwiKS5hbmdsZSA9IGRpcmVjdGlvbi5hbmdsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5nZXRDaGlsZEJ5TmFtZShcImRpcmVjdGlvblwiKS5zY2FsZVggPSBkaXJlY3Rpb24uc2NhbGVYO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmdldENoaWxkQnlOYW1lKFwiZGlyZWN0aW9uXCIpLnNjYWxlWSA9IGRpcmVjdGlvbi5zY2FsZVk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24oY2hpbGQyLmdldFBvc2l0aW9uKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5hZGRDaGlsZChub2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEdhbWUuYWRkQ2hpbGQocGFyZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25TdWNjZWVkKCkge1xyXG4gICAgICAgIGNjLmxvZyhcIua4uOaIj+iDnOWIqVwiKTtcclxuICAgICAgICBpZiAoY29jb3N6LmdhbWVNZ3IuaXNHYW1lT3ZlcikgcmV0dXJuO1xyXG4gICAgICAgIGNvY29zei5nYW1lTWdyLmlzR2FtZU92ZXIgPSB0cnVlO1xyXG4gICAgICAgIGNjLmxvZyhcIi0tLS0tLS0tLWNvY29zei5nYW1lTWdyLnN1cnBsdXNMZXZlbE51bS0tLS1cIiwgY29jb3N6LmdhbWVNZ3Iuc3VycGx1c0xldmVsTnVtKTtcclxuXHJcbiAgICAgICAgaWYgKGNvY29zei5nYW1lTWdyLnN1cnBsdXNMZXZlbE51bSA+IDApIHtcclxuICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3Iuc3VycGx1c0xldmVsTnVtLS07XHJcbiAgICAgICAgICAgIGNvY29zei5nYW1lTWdyLnRvdWNoTnVtKys7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvc3VjY2VlZFBvaW50XCIpLnkgKz0gMTYwMDtcclxuICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9iZWZvcmVTdWNjZWVkUG9pbnRcIikueSArPSAxNjAwO1xyXG4gICAgICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pc0dhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnBsYXkoXCJub3JtYWxcIilcclxuICAgICAgICAgICAgdGhpcy5vblJlZnJlc2hUdXJlKCk7XHJcblxyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhbWVyYSlcclxuICAgICAgICAgICAgICAgIC5ieSgxLCB7IHBvc2l0aW9uOiBjYy52MigwLCAxNjAwKSB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25SZWZyZXNoRmFsc2UoKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICAvLyBjYy50d2Vlbih0aGlzLnVpQ2FtZXJhKVxyXG4gICAgICAgICAgICAvLyAgICAgLmJ5KDEsIHsgcG9zaXRpb246IGNjLnYyKDAsIDE2MDApIH0pXHJcbiAgICAgICAgICAgIC8vICAgICAuc3RhcnQoKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci5mcmFjdGlvbiA9IHVpR2FtZS5mcmFjdGlvbjtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLlZJVk9fR0FNRSB8fCBjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5PUFBPX0dBTUUpICYmIGNvY29zei5kYXRhTWdyLlNob2NrT24pIHtcclxuICAgICAgICAgICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnZpYnJhdGVMb25nKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5XRUNIQVRfR0FNRSAmJiBjb2Nvc3ouZGF0YU1nci5TaG9ja09uKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dbXCJ3eFwiXS52aWJyYXRlTG9uZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMC4xKVxyXG4gICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5QmVmb3JlVmVjdG9yeUVmZmVjdCgpO1xyXG4gICAgICAgIGNvY29zei51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgLy8gaWYgKGNvY29zei5nYW1lTWdyLmlzT3BlblJld2FyZExldmVsKSB7XHJcbiAgICAgICAgLy8gICAgIGNvY29zei5nYW1lTWdyLmlzR2FtZU92ZXIgPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgaWYgKGNvY29zei5kYXRhTWdyLnJld2FyZFR5cGUgPT0gMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgY29jb3N6LmRhdGFNZ3IucmV3YXJkVHlwZSA9IDFcclxuICAgICAgICAvLyAgICAgICAgIGNvY29zei5zY2VuZU1nci5sb2FkU2NlbmUoXCJyZXdhcmRMZXZlbFwiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgTXNnLlNob3coXCLlpZblirHlhbPljaHmnaXkuLRcIilcclxuICAgICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGVsc2Uge1xyXG5cclxuICAgICAgICAvLyAgICAgICAgIGNvY29zei5kYXRhTWdyLnJld2FyZFR5cGUgPSAwO1xyXG4gICAgICAgIC8vICAgICAgICAgY29jb3N6LnNjZW5lTWdyLmxvYWRTY2VuZShcInJld2FyZExldmVsMlwiLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgTXNnLlNob3coXCLlpZblirHlhbPljaHmnaXkuLRcIilcclxuICAgICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGlmIChjb2Nvc3ouZ2FtZU1nci5pc09wZW5Mb3R0ZXJ5KSB7XHJcbiAgICAgICAgICAgIGNvY29zei5nYW1lTWdyLmlzT3BlbkxvdHRlcnkgPSBmYWxzZTtcclxuICAgICAgICAgICAgY29jb3N6LmdhbWVNZ3IuTGV2ZWxOdW0yID0gMDtcclxuICAgICAgICAgICAgY29jb3N6LmF1ZGlvTWdyLnBsYXlidG5FZmZlY3QoKTtcclxuICAgICAgICAgICAgY29jb3N6LnVpTWdyLm9wZW5QYW5lbChQYW5lbE5hbWUuVWlMb3R0ZXJ5KTtcclxuXHJcbiAgICAgICAgICAgIE1zZy5TaG93KFwi5LiA55u05oq95LiA55u054i9XCIpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhbmVsKFBhbmVsTmFtZS5VaUJlZm9yZVN1Y2NlZWQpO1xyXG4gICAgICAgIH0sIDEuNSlcclxuXHJcblxyXG4gICAgICAgIC8vIGlmIChjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5WSVZPX0dBTUUgJiYgY29jb3N6LmRhdGFNZ3IuU2hvY2tPbikge1xyXG4gICAgICAgIC8vICAgICBsaWV5b3VfU2RrTWFuYWdlci52aWJyYXRlTG9uZygpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25GYWlsZWQoKSB7XHJcbiAgICAgICAgaWYgKGNvY29zei5nYW1lTWdyLmlzR2FtZU92ZXIpIHJldHVybjtcclxuICAgICAgICBjb2Nvc3ouZ2FtZU1nci5pc0dhbWVPdmVyID0gdHJ1ZTtcclxuICAgICAgICBjb2Nvc3oudW5zY2hlZHVsZUFsbENhbGxiYWNrcygpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLlZJVk9fR0FNRSB8fCBjYy5zeXMucGxhdGZvcm0gPT09IGNjLnN5cy5PUFBPX0dBTUUpICYmIGNvY29zei5kYXRhTWdyLlNob2NrT24pIHtcclxuICAgICAgICAgICAgICAgIGxpZXlvdV9TZGtNYW5hZ2VyLnZpYnJhdGVMb25nKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5wbGF0Zm9ybSA9PT0gY2Muc3lzLldFQ0hBVF9HQU1FICYmIGNvY29zei5kYXRhTWdyLlNob2NrT24pIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvd1tcInd4XCJdLnZpYnJhdGVMb25nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAwLjEpXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb2Nvc3oudWlNZ3Iub3BlblBhbmVsKFBhbmVsTmFtZS5VaUZhaWxlZCk7XHJcbiAgICAgICAgfSwgMS41KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBvbkJlZ2luQ29udGFjdEJ5Um9sZShjb250YWN0LCBzZWxmLCBvdGhlcikge1xyXG4gICAgLy8gICAgIGlmIChvdGhlci50YWcgPT0gdGFnLmhvbmV5YmVlKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMub25GYWlsZWQoKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG5cclxuXHJcbiAgICBvblNldFBvc2l0aW9uKHBvcykge1xyXG4gICAgICAgIGlmICh0aGlzLkNvbnZleW9yQmVsdERlbGF5VGltZSA+IDApIHJldHVybjtcclxuICAgICAgICBpZiAodGhpcy5hY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb24uc3RvcCgpO1xyXG4gICAgICAgICAgICB0aGlzLmlzQWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuQ29udmV5b3JCZWx0RGVsYXlUaW1lID0gMC4yXHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgdGhpcy5wb3NbXCJ4XCJdID0gTWF0aC5jZWlsKHRoaXMubm9kZS54IC8gMTAwICsgdGhpcy5saXN0TGVuZ3RoMSAvIDIgLSAxKTtcclxuICAgICAgICB0aGlzLnBvc1tcInlcIl0gPSBNYXRoLmNlaWwoTWF0aC5hYnModGhpcy5ub2RlLnkgLyAxMDAgLSB0aGlzLmxpc3RMZW5ndGgyIC8gMikpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRQb3NCeUFuZ2xlKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBvbk1vdmVCeVNwcmluZygpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uQ29sbGlzaW9uRW50ZXIob3RoZXIsIHNlbGYpIHtcclxuICAgICAgICBpZiAoY29jb3N6LmdhbWVNZ3IuaXNHYW1lT3ZlcikgcmV0dXJuXHJcbiAgICAgICAgaWYgKG90aGVyLnRhZyA9PSB0YWcuYmVmb3JlU3VjY2VlZFBvaW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnBsYXkoXCJzbWlsZVwiLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAob3RoZXIudGFnID09IHRhZy5zdWNjZWVkUG9pbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5vblN1Y2NlZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAob3RoZXIudGFnID09IHRhZy50aG9ybikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hVGltZSA+IDApIHJldHVyblxyXG4gICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheVJvbGVHbG9vbXlFZmZlY3QyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYVRpbWUgPSAzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChvdGhlci50YWcgPT0gdGFnLmhvbmV5YmVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0aW9uLnBsYXkoXCJiZWVcIiwgMSk7XHJcbiAgICAgICAgICAgIGNvY29zei5hdWRpb01nci5wbGF5QmVmb3JlRmVpbGRFZmZlY3QyKCk7XHJcbiAgICAgICAgICAgIHRoaXMub25GYWlsZWQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAob3RoZXIudGFnID09IHRhZy5iaWdGYW4gJiYgb3RoZXIubm9kZS5nZXRDb21wb25lbnQoXCJwcm9wQmlnRmFuXCIpLmludGFjdCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIChvdGhlci5ub2RlLmdldENvbXBvbmVudChcInByb3BCaWdGYW5cIikuaW50YWN0LmFjdGl2ZSA9PSBmYWxzZSkgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb2Nvc3ouYXVkaW9NZ3IucGxheUJlZm9yZUZlaWxkRWZmZWN0MygpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXHJcbiAgICAgICAgICAgICAgICAudG8oMC41LCB7IHNjYWxlOiAwIH0pXHJcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxyXG4gICAgICAgICAgICB0aGlzLm9uRmFpbGVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRNYXAobWFwKSB7XHJcbiAgICAgICAgdGhpcy5tYXAgPSBbXS5jb25jYXQobWFwKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlZigpIHtcclxuICAgICAgICBsZXQgcHJlZmFiID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJkZWZFZmZlY3RcIiwgY2MuUHJlZmFiKTtcclxuICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uUmVmcmVzaFR1cmUoKSB7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMubm9kZS5wYXJlbnQuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkLm5hbWUgPT0gXCJzYW5kTWFza1wiIHx8IGNoaWxkLm5hbWUgPT0gXCJtYXBNYXNrXCIgfHwgY2hpbGQubmFtZSA9PSBcInByb3BNb3ZlRmxvb3JcIikge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKGNoaWxkLnksIGNvY29zei5nYW1lTWdyLnRvdWNoTnVtICogMTYwMCwgY2hpbGQueSAhPSBjb2Nvc3ouZ2FtZU1nci50b3VjaE51bSAqIDE2MDAsIGNoaWxkLm5hbWUsIFwiY29jb3N6LmdhbWVNZ3IudG91Y2hOdW0gKiAxNjAwXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmZsb29yKGNoaWxkLnkpICE9IGNvY29zei5nYW1lTWdyLnRvdWNoTnVtICogMTYwMCkge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwiLS0tLS0tLeaYvuekui0tLS0tXCIsIGNoaWxkLm5hbWUsIGNoaWxkLnkpXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQubmFtZSA9PSBcImJhZmZsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5mbG9vcihjaGlsZC55KSA+IGNvY29zei5nYW1lTWdyLnRvdWNoTnVtICogMTYwMCArIDgwMCB8fCBNYXRoLmZsb29yKGNoaWxkLnkpIDwgY29jb3N6LmdhbWVNZ3IudG91Y2hOdW0gKiAxNjAwIC0gODAwKSB7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoaWxkLm5hbWUgPT0gXCJyb2xlXCIpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZC5uYW1lID09IFwiZW5lbXlcIiB8fCBjaGlsZC5uYW1lID09IFwicHJvcFwiKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZDIgb2YgY2hpbGQuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5mbG9vcihjaGlsZDIueSkgPiBjb2Nvc3ouZ2FtZU1nci50b3VjaE51bSAqIDE2MDAgKyA4MDAgfHwgTWF0aC5mbG9vcihjaGlsZDIueSkgPCBjb2Nvc3ouZ2FtZU1nci50b3VjaE51bSAqIDE2MDAgLSA4MDApIHtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmxvZyhjaGlsZDIueSwgY2hpbGQyLm5hbWUsIFwiLS0tLS0tLS0tLS0tLS0tY2hpbGQyLm5hbWVcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgb25SZWZyZXNoRmFsc2UoKSB7XHJcbiAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgPT0gMTM1ICYmIGNvY29zei5nYW1lTWdyLnRvdWNoTnVtID09IDApIHJldHVybjtcclxuICAgICAgICAvLyBpZiAoY29jb3N6LmRhdGFNZ3IuQ3VyTGV2ZWxJZCA9PSAxMzYpIHJldHVybjtcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLm5vZGUucGFyZW50LmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZC5uYW1lID09IFwic2FuZE1hc2tcIiB8fCBjaGlsZC5uYW1lID09IFwibWFwTWFza1wiIHx8IGNoaWxkLm5hbWUgPT0gXCJwcm9wTW92ZUZsb29yXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQueSAhPSBjb2Nvc3ouZ2FtZU1nci50b3VjaE51bSAqIDE2MDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCItLS0tLS0t6ZqQ6JePLS0tLS1cIiwgY2hpbGQubmFtZSwgY2hpbGQueSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQubmFtZSA9PSBcImJhZmZsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGQueSA+IGNvY29zei5nYW1lTWdyLnRvdWNoTnVtICogMTYwMCArIDgwMCB8fCBjaGlsZC55IDwgY29jb3N6LmdhbWVNZ3IudG91Y2hOdW0gKiAxNjAwIC0gODAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCItLS0tLS0t6ZqQ6JePLS0tLS1cIiwgY2hpbGQubmFtZSwgY2hpbGQueSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaGlsZC5uYW1lID09IFwicm9sZVwiKSBjb250aW51ZTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoY2hpbGQubmFtZSA9PSBcImVuZW15XCIgfHwgY2hpbGQubmFtZSA9PSBcInByb3BcIikge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hpbGQyIG9mIGNoaWxkLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkMi55ID4gY29jb3N6LmdhbWVNZ3IudG91Y2hOdW0gKiAxNjAwICsgODAwIHx8IGNoaWxkMi55IDwgY29jb3N6LmdhbWVNZ3IudG91Y2hOdW0gKiAxNjAwIC0gODAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkMi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29jb3N6LmdhbWVNZ3IudG91Y2hOdW0rKztcclxuICAgICAgICAvLyB0aGlzLm9uUmVmcmVzaFR1cmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XHJcbiAgICAgICAgY2MuZ2FtZS50YXJnZXRPZmYodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNhbWVyYSA9IGNjLmZpbmQoXCJDYW52YXMvTWFpbiBDYW1lcmFcIik7XHJcbiAgICAgICAgdGhpcy5saXN0ZW4gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJib2R5XCIpLmdldENoaWxkQnlOYW1lKFwibGlzdGVuXCIpO1xyXG4gICAgICAgIHRoaXMuYm9keSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJvZHlcIik7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaGVhZFwiKS5nZXRDaGlsZEJ5TmFtZShcImhlYWRcIikuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbik7XHJcblxyXG4gICAgICAgIHRoaXMudWlDYW1lcmEgPSBjYy5maW5kKFwiQ2FudmFzL3VpQ2FtZXJhXCIpO1xyXG4gICAgICAgIHRoaXMuYmdDYW1lcmEgPSBjYy5maW5kKFwiQ2FudmFzL2JnQ2FtZXJhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUJnID0gY2MuZmluZChcIkNhbnZhcy9nYW1lQkdcIik7XHJcbiAgICAgICAgdGhpcy51aSA9IGNjLmZpbmQoXCJDYW52YXMvdWlcIik7XHJcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCArPSAxMDAwO1xyXG4gICAgICAgIHRoaXMubGlzdGVuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmdhbWUuZW1pdChDb25zdGFudC5FX1JPTEVfTU9WRSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBjYy5nYW1lLm9uKENvbnN0YW50LkVfUk9MRV9DT0xMSVNJT05FTlRFUiwgKG90aGVyLCBzZWxmKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25Db2xsaXNpb25FbnRlcihvdGhlciwgc2VsZik7XHJcbiAgICAgICAgfSwgdGhpcylcclxuICAgICAgICBjYy5nYW1lLm9uKENvbnN0YW50LkVfUFJPUF9BTExCQUxMT09OREVTLCAob3RoZXIsIHNlbGYpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRpb24ucGxheShcInRlcnJpZmllZFwiKTtcclxuICAgICAgICB9LCB0aGlzKVxyXG5cclxuICAgICAgICBjYy5nYW1lLm9uKENvbnN0YW50LkVfR0FNRV9GQUlELCAob3RoZXIsIHNlbGYpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbkZhaWxlZCgpO1xyXG4gICAgICAgIH0sIHRoaXMpXHJcblxyXG4gICAgICAgIC8vIGNjLmdhbWUub24oQ29uc3RhbnQuRV9ST0xFX0NPTlRBQ1RFTlRFUiwgKGNvbnRhY3QsIG90aGVyLCBzZWxmKSA9PiB7XHJcbiAgICAgICAgLy8gdGhpcy5vbkJlZ2luQ29udGFjdEJ5Um9sZShjb250YWN0LCBvdGhlciwgc2VsZik7XHJcbiAgICAgICAgLy8gfSwgdGhpcylcclxuXHJcbiAgICAgICAgY2MubG9nKGNvY29zei5nYW1lTWdyLnN1cnBsdXNMZXZlbE51bSwgXCItLWNvY29zei5nYW1lTWdyLnN1cnBsdXNMZXZlbE51bVwiKVxyXG5cclxuICAgICAgICBpZiAoKGNvY29zei5kYXRhTWdyLkN1ckxldmVsSWQgKyAxKSAlIDUgPT0gMCAmJiBjb2Nvc3ouZGF0YU1nci5DdXJMZXZlbElkID4gNDApIHtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblJlZnJlc2hGYWxzZSgpXHJcbiAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYy5sb2coY29jb3N6LnJlc01nci5nZXRSZXMoXCJib2R5X1wiICsgKGNvY29zei5kYXRhTWdyLkN1clNraW5JZCArIDEpLCBjYy5TcHJpdGVGcmFtZSksKVxyXG4gICAgICAgIHRoaXMuYm9keVNwLnNwcml0ZUZyYW1lID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJib2R5X1wiICsgKGNvY29zei5kYXRhTWdyLkN1clNraW5JZCArIDEpLCBjYy5TcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgdGhpcy5yaWdodF9hcm1TcC5zcHJpdGVGcmFtZSA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwicmlnaHRfYXJtX1wiICsgKGNvY29zei5kYXRhTWdyLkN1clNraW5JZCArIDEpLCBjYy5TcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgdGhpcy5yaWdodF9sZWdTcC5zcHJpdGVGcmFtZSA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwicmlnaHRfbGVnX1wiICsgKGNvY29zei5kYXRhTWdyLkN1clNraW5JZCArIDEpLCBjYy5TcHJpdGVGcmFtZSk7XHJcbiAgICAgICAgdGhpcy5sZWZ0X2xlZ1NwLnNwcml0ZUZyYW1lID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJsZWZ0X2xlZ19cIiArIChjb2Nvc3ouZGF0YU1nci5DdXJTa2luSWQgKyAxKSwgY2MuU3ByaXRlRnJhbWUpO1xyXG4gICAgICAgIHRoaXMubGVmdF9hcm1TcC5zcHJpdGVGcmFtZSA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwibGVmdF9hcm1fXCIgKyAoY29jb3N6LmRhdGFNZ3IuQ3VyU2tpbklkICsgMSksIGNjLlNwcml0ZUZyYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKGNvY29zei5kYXRhTWdyLkN1clNraW5JZCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGllLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNvY29zei5kYXRhTWdyLkN1clNraW5JZCA9PSA0KSB7XHJcbiAgICAgICAgICAgIHRoaXMudGllMi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHVwRGF0YUNhbWVyYVBvcyhwb3MpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0UG9zID0gY2MudjIocG9zLngsIHBvcy55KTtcclxuICAgICAgICB2YXIgc2VsZlBvcyA9IGNjLnYyKHRoaXMuY2FtZXJhLngsIHRoaXMuY2FtZXJhLnkpO1xyXG4gICAgICAgIHNlbGZQb3MgPSBzZWxmUG9zLmxlcnAodGFyZ2V0UG9zLCAwLjEpO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnkgPSBzZWxmUG9zLnk7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEueCA9IHNlbGZQb3MueDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICAvLyBjYy5sb2codGhpcy5ib2R5LnkpXHJcbiAgICAgICAgaWYgKHRoaXMuYVRpbWUgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYVRpbWUgLT0gZHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmJvZHkueSA8PSAtNjAwICYmIHRoaXMuYm9keS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eS55IDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uRmFpbGVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmJvZHkuZ2V0Q29tcG9uZW50KGNjLlJpZ2lkQm9keSkubGluZWFyVmVsb2NpdHkueSA+IDIwMCkge1xyXG4gICAgICAgICAgICBsZXQgdiA9IHRoaXMuYm9keS5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eVxyXG4gICAgICAgICAgICB2LnkgPSAyMDBcclxuICAgICAgICAgICAgdGhpcy5ib2R5LmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gdlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2MubG9nKHRoaXMuYm9keS55ICsgdGhpcy5ub2RlLnkgKyB0aGlzLm5vZGUucGFyZW50LnkpXHJcbiAgICAgICAgaWYgKHRoaXMuYm9keS55ICsgdGhpcy5ub2RlLnkgKyB0aGlzLm5vZGUucGFyZW50LnkgKyA0MDAgPCAwKSByZXR1cm47XHJcbiAgICAgICAgLy8gdGhpcy5jYW1lcmEueSArPSAxXHJcbiAgICAgICAgaWYgKGNvY29zei5nYW1lTWdyLmlzR2FtZU92ZXIpIHJldHVybjtcclxuICAgICAgICAvLyBpZiAoY29jb3N6LnNjZW5lTWdyLnNjZW5lTmFtZSA9PSBcIkdhbWUyXCIpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5jYW1lcmEuc2V0UG9zaXRpb24oY2MudjIoMCwgdGhpcy5ib2R5LnkgKyB0aGlzLm5vZGUueSArIHRoaXMubm9kZS5wYXJlbnQueSArIDQwMCkpXHJcbiAgICAgICAgLy8gICAgIHRoaXMudWkueSA9IHRoaXMuY2FtZXJhLnk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZ2FtZUJnLnkgPSB0aGlzLmNhbWVyYS55O1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy51aUNhbWVyYS5zZXRQb3NpdGlvbihjYy52Mih0aGlzLmJvZHkueCwgdGhpcy5ib2R5LnkgKyB0aGlzLm5vZGUueSArIHRoaXMubm9kZS5wYXJlbnQueSkpXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaXNGb2xsb3cpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5jYW1lcmEuc2V0UG9zaXRpb24oY2MudjIodGhpcy5ib2R5LngsIHRoaXMuYm9keS55KSlcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn1cclxuIl19