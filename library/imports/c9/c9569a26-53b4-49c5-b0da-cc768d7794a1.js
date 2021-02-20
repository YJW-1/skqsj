"use strict";
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