import { cocosz, } from "../Framework/CocosZ";
import Constant, { tag, PanelName, PageName } from "../Framework/Constant";

import Msg from "../Framework/Msg";

import { uiGame } from "../Ui/UiGame";
const { ccclass, property } = cc._decorator;

@ccclass
export default class role extends cc.Component {



    @property(cc.Sprite)
    bodySp: cc.Sprite = null;
    @property(cc.Sprite)
    right_armSp: cc.Sprite = null;
    @property(cc.Sprite)
    left_armSp: cc.Sprite = null;
    @property(cc.Sprite)
    right_legSp: cc.Sprite = null;
    @property(cc.Sprite)
    left_legSp: cc.Sprite = null;


    @property(cc.Node)
    tie: cc.Node = null;
    @property(cc.Node)
    tie2: cc.Node = null;

    gameBg: cc.Node = null;
    ui: cc.Node = null


    //最后停下在地图数组中位置
    pos: any = null;
    //地图数组
    map: any = null;
    //方向列表
    angleList: any = null;
    //是否在动作中
    isAction: any = null;

    //摄像机移动动画
    cameraAction: any = null;
    //摄像机
    camera: cc.Node = null;
    //监听
    listen: cc.Node = null;
    //主角身体
    body: cc.Node = null;
    //主角头部
    head: cc.Node = null;


    //界面摄像头
    uiCamera: cc.Node = null;
    //背景摄像头
    bgCamera: cc.Node = null;

    //主角表情动画
    animation: cc.Animation = null;

    //动作返回值
    action: any = null;


    //是否正在移动
    isMove: boolean = false;

    //是否正在移动
    isMoveEffectType: boolean = false;


    //是否失败
    isFailed: boolean = false;

    //是否成功
    isSucceed: boolean = false;
    //是否成功
    isSucceed2: boolean = false;


    //是否需要传送
    isConveyorBelt: boolean = false;
    //是否在复活中
    isResurrection: boolean = false;


    //摄像机是否跟随
    isFollow: boolean = false;

    //碰到弹簧的类型
    springType: number = -1;

    //复活等待时间
    resurrectionDelayTime: number = 0;

    //记录失败前的位置
    lastPos: any = {};

    //人物角度
    angle: number = 0;

    //关卡数据的长度
    listLength1: number = 0;
    //关卡数据的宽度
    listLength2: number = 0;


    //传送间隔
    ConveyorBeltDelayTime: number = 0;

    //盾牌持续时间
    defTime: number = 0;

    //改变值
    changeDect: any = [];

    aTime: number = 0;


    levelNum: number = 2;


    getMapByPosX(x: number) {
        let num = 0;
        let a = [];
        while (num++ < 120) {
            let data = cocosz.resMgr.getRes("map" + num, cc.Prefab).data;
            // cc.log(data, num);
            for (let child of data.children) {
                if (child.name == "role") {
                    if (Math.abs(Math.round(child.x - x)) < 2) {
                        cc.log(child.x)
                        a.push(cocosz.resMgr.getRes("map" + num, cc.Prefab));
                    }
                }
            }
        }

        let idx = Math.floor(a.length * Math.random());
        cc.log(a, idx, "---------------------idx");
        return a[idx];
    }

    private _initGame(map) {
        let Game = cc.find("Canvas/Game");
        cc.log(Game)
        for (let child of Game.children) {
            if (child.name != "role") {
                child.destroy();
            }
        }

        Game.y += 3000;

        cocosz.gameMgr.isGameOver = false;
        cocosz.gameMgr.isLeftBalloon = false;
        cocosz.gameMgr.isrightBalloon = false;
        cocosz.gameMgr.isOpen = false;
        cocosz.gameMgr.isFeed = false;


        // let map: cc.Prefab = cocosz.resMgr.getRes("map" + (cocosz.dataMgr.CurLevelId + 1), cc.Prefab);

        for (let child of map.data.children) {
            if (child.name == "mapMaskPoint") {
                let component = child.getComponents(cc.PhysicsPolygonCollider);
                let list = [];
                for (let poly of component) {
                    if (poly.points) {
                        list.push(poly.points)
                    }
                }

                let prefab = cocosz.resMgr.getRes("mapMask", cc.Prefab)
                let node = cc.instantiate(prefab);
                Game.addChild(node);
                node.zIndex -= 999;
                let mask: cc.Mask = node.getComponent(cc.Mask);
                let graphics = mask._graphics;
                let graphics2: cc.Graphics = node.getChildByName("line").getComponent(cc.Graphics);
                let rb = node.addComponent(cc.RigidBody);
                rb.type = cc.RigidBodyType.Static;

                for (let point of list) {
                    let collider = node.addComponent(cc.PhysicsPolygonCollider);
                    // let collider = node.addComponent(cc.PhysicsChainCollider);
                    cc.log(collider.tag, "----------collider.tag");
                    collider.tag = 0;
                    collider.points = [].concat(point);
                    collider.apply();

                    graphics.moveTo(point[0].x, point[0].y);

                    for (let v2 of point) {
                        graphics.lineTo(v2.x, v2.y);
                    }
                    graphics.fill();

                    graphics2.lineWidth = 15;
                    graphics2.strokeColor = new cc.Color(40, 33, 13, 255);
                    graphics2.moveTo(point[0].x, point[0].y);
                    for (let v2 of point) {
                        graphics2.lineTo(v2.x, v2.y);
                    }
                    graphics2.lineTo(point[0].x, point[0].y);
                    graphics2.stroke();
                }


            }
            else if (child.name == "sandMaskPoint") {

                // let point = child.getComponent(cc.PhysicsPolygonCollider).points;
                let component = child.getComponents(cc.PhysicsPolygonCollider);
                let list = [];
                for (let poly of component) {
                    if (poly.points) {
                        list.push(poly.points)
                    }
                }

                let prefab = cocosz.resMgr.getRes("sandMask", cc.Prefab)
                let node = cc.instantiate(prefab);
                Game.addChild(node);
                node.zIndex -= 998;
                if (cocosz.dataMgr.CurLevelId == 119) {
                    node.zIndex += 998;
                };

                let script = node.getChildByName("node_dirty").getComponent("test");
                script.reset(list);
                let mask: cc.Mask = node.getComponent(cc.Mask);
                let graphics = mask._graphics;

                // graphics.moveTo(point[0].x, point[0].y);
                // for (let v2 of point) {
                //     graphics.lineTo(v2.x, v2.y);
                // }
                // graphics.fill();

                for (let point of list) {
                    graphics.moveTo(point[0].x, point[0].y);
                    for (let v2 of point) {
                        graphics.lineTo(v2.x, v2.y);
                    }
                    graphics.fill();
                }
            }


            else if (child.name == "baffle") {

                let prefab = cocosz.resMgr.getRes("baffle", cc.Prefab);
                let node = cc.instantiate(prefab);
                node.scale = child.scale;
                node.angle = child.angle;
                node.setPosition(child.getPosition());
                Game.addChild(node);
            }


            else if (child.name == "fan") {
                let prefab = cocosz.resMgr.getRes("fan", cc.Prefab);
                let node = cc.instantiate(prefab);
                node.scale = child.scale;
                node.angle = child.angle;
                node.setPosition(child.getPosition());
                Game.addChild(node);
            }


            else if (child.name == "handTips") {
                let prefab = cocosz.resMgr.getRes("handTips", cc.Prefab);
                let node = cc.instantiate(prefab);
                node.scale = child.scale;
                node.angle = child.angle;
                node.setPosition(child.getPosition());
                Game.addChild(node);
            }


            else if (child.name == "propMoveFloor" || child.name == "enemy" || child.name == "prop") {
                let parent = new cc.Node;
                parent.name == child.name;
                for (let child2 of child.children) {
                    let prefab = cocosz.resMgr.getRes(child2.name, cc.Prefab);
                    let node = cc.instantiate(prefab);
                    if (child2.name == "carton") {
                        parent.zIndex += 1003
                    }
                    node.scaleX = child2.scaleX;
                    node.scaleY = child2.scaleY;
                    node.width = child2.width;
                    node.angle = child2.angle;
                    if (child2.name == "nimiCactus") {
                        node.angle += 800 * Math.random()
                    }
                    if (child2.name == "floor11") {
                        node.getChildByName("rocket").scaleX = child2.getChildByName("rocket").scaleX;
                        // node.getChildByName("rocket").x = -child2.getChildByName("rocket").x;
                    }
                    if (child2.name == "floor17") {
                        let floor = child2.getChildByName("floor");
                        node.getChildByName("floor").angle = floor.angle;
                        node.getChildByName("floor").scaleX = floor.scaleX;
                        node.getChildByName("floor").scaleY = floor.scaleY;
                        node.getChildByName("floor").x = floor.x;
                        node.getChildByName("floor").y = floor.y;
                        // node.getChildByName("rocket").x = -child2.getChildByName("rocket").x;
                    }
                    if (child2.name == "floorRotetaCom") {
                        let floor = child2.getChildByName("floor");
                        let direction = child2.getChildByName("direction");
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
    }
    onSucceed() {
        cc.log("游戏胜利");
        if (cocosz.gameMgr.isGameOver) return;
        cocosz.gameMgr.isGameOver = true;
        cc.log("---------cocosz.gameMgr.surplusLevelNum----", cocosz.gameMgr.surplusLevelNum);

        if (cocosz.gameMgr.surplusLevelNum > 0) {
            cocosz.gameMgr.surplusLevelNum--;
            cocosz.gameMgr.touchNum++;
            cc.find("Canvas/succeedPoint").y += 1600;
            cc.find("Canvas/beforeSucceedPoint").y += 1600;
            cocosz.gameMgr.isGameOver = false;
            this.animation.play("normal")
            this.onRefreshTure();

            cc.tween(this.camera)
                .by(1, { position: cc.v2(0, 1600) })
                .call(() => {
                    this.onRefreshFalse();
                })
                .start()
            // cc.tween(this.uiCamera)
            //     .by(1, { position: cc.v2(0, 1600) })
            //     .start()

            return;
        }
        cocosz.gameMgr.fraction = uiGame.fraction;

        this.scheduleOnce(() => {
            if ((cc.sys.platform === cc.sys.VIVO_GAME || cc.sys.platform === cc.sys.OPPO_GAME) && cocosz.dataMgr.ShockOn) {
                lieyou_SdkManager.vibrateLong();
            }

            if (cc.sys.platform === cc.sys.WECHAT_GAME && cocosz.dataMgr.ShockOn) {
                window["wx"].vibrateLong();
            }
        }, 0.1)
        cocosz.audioMgr.playBeforeVectoryEffect();
        cocosz.unscheduleAllCallbacks();
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




        if (cocosz.gameMgr.isOpenLottery) {
            cocosz.gameMgr.isOpenLottery = false;
            cocosz.gameMgr.LevelNum2 = 0;
            cocosz.audioMgr.playbtnEffect();
            cocosz.uiMgr.openPanel(PanelName.UiLottery);

            Msg.Show("一直抽一直爽");

            return;
        }

        this.scheduleOnce(() => {
            cocosz.uiMgr.openPanel(PanelName.UiBeforeSucceed);
        }, 1.5)


        // if (cc.sys.platform === cc.sys.VIVO_GAME && cocosz.dataMgr.ShockOn) {
        //     lieyou_SdkManager.vibrateLong();
        // }

    }

    onFailed() {
        if (cocosz.gameMgr.isGameOver) return;
        cocosz.gameMgr.isGameOver = true;
        cocosz.unscheduleAllCallbacks();

        this.scheduleOnce(() => {

            if ((cc.sys.platform === cc.sys.VIVO_GAME || cc.sys.platform === cc.sys.OPPO_GAME) && cocosz.dataMgr.ShockOn) {
                lieyou_SdkManager.vibrateLong();
            }



            if (cc.sys.platform === cc.sys.WECHAT_GAME && cocosz.dataMgr.ShockOn) {
                window["wx"].vibrateLong();
            }
        }, 0.1)
        this.scheduleOnce(() => {
            cocosz.uiMgr.openPanel(PanelName.UiFailed);
        }, 1.5)
    }


    // onBeginContactByRole(contact, self, other) {
    //     if (other.tag == tag.honeybee) {
    //         this.onFailed();
    //     }
    // }



    onSetPosition(pos) {
        if (this.ConveyorBeltDelayTime > 0) return;
        if (this.action) {
            this.action.stop();
            this.isAction = false;
        }
        this.ConveyorBeltDelayTime = 0.2
        this.node.setPosition(pos);
        this.pos["x"] = Math.ceil(this.node.x / 100 + this.listLength1 / 2 - 1);
        this.pos["y"] = Math.ceil(Math.abs(this.node.y / 100 - this.listLength2 / 2));
    }


    getPosByAngle() {

    }

    onMoveBySpring() {

    }

    public onCollisionEnter(other, self) {
        if (cocosz.gameMgr.isGameOver) return
        if (other.tag == tag.beforeSucceedPoint) {
            this.animation.play("smile", 0);
        }
        else if (other.tag == tag.succeedPoint) {
            this.onSucceed();
        }
        else if (other.tag == tag.thorn) {
            if (this.aTime > 0) return
            cocosz.audioMgr.playRoleGloomyEffect2();
            this.aTime = 3;
        }
        else if (other.tag == tag.honeybee) {
            this.animation.play("bee", 1);
            cocosz.audioMgr.playBeforeFeildEffect2();
            this.onFailed();
        }
        else if (other.tag == tag.bigFan && other.node.getComponent("propBigFan").intact == true) {
            // if (other.node.getComponent("propBigFan").intact.active == false) return;
            cocosz.audioMgr.playBeforeFeildEffect3();
            cc.tween(this.node)
                .to(0.5, { scale: 0 })
                .start()
            this.onFailed();
        }
    }

    initMap(map) {
        this.map = [].concat(map);
    }

    onDef() {
        let prefab = cocosz.resMgr.getRes("defEffect", cc.Prefab);
        let node = cc.instantiate(prefab);
        this.node.addChild(node);
    }

    onRefreshTure() {

        for (let child of this.node.parent.children) {
            if (child.name == "sandMask" || child.name == "mapMask" || child.name == "propMoveFloor") {
                cc.log(child.y, cocosz.gameMgr.touchNum * 1600, child.y != cocosz.gameMgr.touchNum * 1600, child.name, "cocosz.gameMgr.touchNum * 1600");

                if (Math.floor(child.y) != cocosz.gameMgr.touchNum * 1600) {
                }
                else {
                    cc.log("-------显示-----", child.name, child.y)
                    child.active = true;
                }

            }
            else if (child.name == "baffle") {
                if (Math.floor(child.y) > cocosz.gameMgr.touchNum * 1600 + 800 || Math.floor(child.y) < cocosz.gameMgr.touchNum * 1600 - 800) {
                }
                else {
                    child.active = true;
                }
            }
            else if (child.name == "role") continue;
            else if (child.name == "enemy" || child.name == "prop") {
                for (let child2 of child.children) {
                    if (Math.floor(child2.y) > cocosz.gameMgr.touchNum * 1600 + 800 || Math.floor(child2.y) < cocosz.gameMgr.touchNum * 1600 - 800) {
                    }
                    else {
                        cc.log(child2.y, child2.name, "---------------child2.name")
                        child2.active = true;
                    }
                }
            }
        }
    }



    onRefreshFalse() {
        if (cocosz.dataMgr.CurLevelId == 135 && cocosz.gameMgr.touchNum == 0) return;
        // if (cocosz.dataMgr.CurLevelId == 136) return;
        for (let child of this.node.parent.children) {
            if (child.name == "sandMask" || child.name == "mapMask" || child.name == "propMoveFloor") {

                if (child.y != cocosz.gameMgr.touchNum * 1600) {
                    cc.log("-------隐藏-----", child.name, child.y)

                    child.active = false;
                }
            }
            else if (child.name == "baffle") {
                if (child.y > cocosz.gameMgr.touchNum * 1600 + 800 || child.y < cocosz.gameMgr.touchNum * 1600 - 800) {
                    child.active = false
                    cc.log("-------隐藏-----", child.name, child.y)
                }
            }
            else if (child.name == "role") continue;
            else if (child.name == "enemy" || child.name == "prop") {
                for (let child2 of child.children) {
                    if (child2.y > cocosz.gameMgr.touchNum * 1600 + 800 || child2.y < cocosz.gameMgr.touchNum * 1600 - 800) {
                        child2.active = false
                    }
                }
            }
        }

        // cocosz.gameMgr.touchNum++;
        // this.onRefreshTure();
    }

    // LIFE-CYCLE CALLBACKS:

    onDestroy() {
        this.unscheduleAllCallbacks();
        cc.game.targetOff(this);
    }

    onLoad() {
        cc.director.getCollisionManager().enabled = true;
        this.camera = cc.find("Canvas/Main Camera");
        this.listen = this.node.getChildByName("body").getChildByName("listen");
        this.body = this.node.getChildByName("body");

        this.animation = this.node.getChildByName("head").getChildByName("head").getComponent(cc.Animation);

        this.uiCamera = cc.find("Canvas/uiCamera");
        this.bgCamera = cc.find("Canvas/bgCamera");
    }

    start() {
        this.gameBg = cc.find("Canvas/gameBG");
        this.ui = cc.find("Canvas/ui");
        this.node.zIndex += 1000;
        this.listen.on(cc.Node.EventType.TOUCH_START, () => {
            cc.game.emit(Constant.E_ROLE_MOVE);
        })
        cc.game.on(Constant.E_ROLE_COLLISIONENTER, (other, self) => {
            this.onCollisionEnter(other, self);
        }, this)
        cc.game.on(Constant.E_PROP_ALLBALLOONDES, (other, self) => {
            this.animation.play("terrified");
        }, this)

        cc.game.on(Constant.E_GAME_FAID, (other, self) => {
            this.onFailed();
        }, this)

        // cc.game.on(Constant.E_ROLE_CONTACTENTER, (contact, other, self) => {
        // this.onBeginContactByRole(contact, other, self);
        // }, this)

        cc.log(cocosz.gameMgr.surplusLevelNum, "--cocosz.gameMgr.surplusLevelNum")

        if ((cocosz.dataMgr.CurLevelId + 1) % 5 == 0 && cocosz.dataMgr.CurLevelId > 40) {
            this.scheduleOnce(() => {
                this.onRefreshFalse()
            }, 1)
        }

        cc.log(cocosz.resMgr.getRes("body_" + (cocosz.dataMgr.CurSkinId + 1), cc.SpriteFrame),)
        this.bodySp.spriteFrame = cocosz.resMgr.getRes("body_" + (cocosz.dataMgr.CurSkinId + 1), cc.SpriteFrame);
        this.right_armSp.spriteFrame = cocosz.resMgr.getRes("right_arm_" + (cocosz.dataMgr.CurSkinId + 1), cc.SpriteFrame);
        this.right_legSp.spriteFrame = cocosz.resMgr.getRes("right_leg_" + (cocosz.dataMgr.CurSkinId + 1), cc.SpriteFrame);
        this.left_legSp.spriteFrame = cocosz.resMgr.getRes("left_leg_" + (cocosz.dataMgr.CurSkinId + 1), cc.SpriteFrame);
        this.left_armSp.spriteFrame = cocosz.resMgr.getRes("left_arm_" + (cocosz.dataMgr.CurSkinId + 1), cc.SpriteFrame);

        if (cocosz.dataMgr.CurSkinId == 0) {
            this.tie.active = true;
        }
        else if (cocosz.dataMgr.CurSkinId == 4) {
            this.tie2.active = true;
        }
    }


    public upDataCameraPos(pos) {
        var targetPos = cc.v2(pos.x, pos.y);
        var selfPos = cc.v2(this.camera.x, this.camera.y);
        selfPos = selfPos.lerp(targetPos, 0.1);
        this.camera.y = selfPos.y;
        this.camera.x = selfPos.x;
    }

    update(dt) {
        // cc.log(this.body.y)
        if (this.aTime > 0) {
            this.aTime -= dt;
        }
        if (this.body.y <= -600 && this.body.getComponent(cc.RigidBody).linearVelocity.y < 0) {
            this.onFailed();
        }
        if (this.body.getComponent(cc.RigidBody).linearVelocity.y > 200) {
            let v = this.body.getComponent(cc.RigidBody).linearVelocity
            v.y = 200
            this.body.getComponent(cc.RigidBody).linearVelocity = v
        }

        // cc.log(this.body.y + this.node.y + this.node.parent.y)
        if (this.body.y + this.node.y + this.node.parent.y + 400 < 0) return;
        // this.camera.y += 1
        if (cocosz.gameMgr.isGameOver) return;
        // if (cocosz.sceneMgr.sceneName == "Game2") {
        //     this.camera.setPosition(cc.v2(0, this.body.y + this.node.y + this.node.parent.y + 400))
        //     this.ui.y = this.camera.y;
        //     this.gameBg.y = this.camera.y;
        // }

        // this.uiCamera.setPosition(cc.v2(this.body.x, this.body.y + this.node.y + this.node.parent.y))
        // if (this.isFollow) {
        //     this.camera.setPosition(cc.v2(this.body.x, this.body.y))
        // }
    }
}
