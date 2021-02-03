import { cocosz } from "../Framework/CocosZ";
import Constant, { tag } from "../Framework/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class balloon extends cc.Component {

    isDef = false;

    private _rigidBody: cc.RigidBody = null;

    onBeginContact(contact, self, other) {
        if (other.tag == tag.thorn || other.tag == tag.stone || other.tag == tag.stone3 || other.tag == tag.honeybee ||
            other.tag == tag.floorThorn || other.tag == tag.rain || other.tag == tag.bat) {
            cocosz.gameMgr.onBalloonDes(this.node.parent.name);
            cocosz.audioMgr.playMetalStoneEffect2();
            cc.game.targetOff(this);
            cc.game.emit(Constant.E_PROP_BALLOONDES);
            this.node.parent.destroy();
        }
        else if (other.tag == tag.succeedPoint || other.tag == tag.faidPoint) {
            contact.disabled = true;
        }
        else if (other.tag == tag.carton) {
            if (this.isDef) return;
            this.isDef = true
            this._rigidBody.gravityScale -= 1;
        }
        else if (other.tag == 777) {
            cc.log("--------------99")
            if (this._rigidBody.gravityScale > -8) {
                this._rigidBody.gravityScale = -8;
            }
        }
        else if (other.tag == 1234) {
            cc.log("----------------------1234")
            this._rigidBody.linearVelocity = cc.v2(0, 0);
            // this.node.getComponent(cc.PhysicsCircleCollider).enabled = false
            // this.node.getComponent(cc.RigidBody).type = cc.RigidBodyType.Animated;
            // this.node.getComponent(cc.PhysicsCircleCollider).enabled = true
        }
        else if (cocosz.dataMgr.CurLevelId == 113 && (other.tag == 36 || other.tag == 0)) {
            cc.log("--------------99")
            if (this._rigidBody.gravityScale > -4) {
                this._rigidBody.gravityScale = -4;
            }
        }
    }

    onDesByLaser() {
        cocosz.gameMgr.onBalloonDes(this.node.parent.name);
        cocosz.audioMgr.playMetalStoneEffect2();
        cc.game.targetOff(this);
        cc.game.emit(Constant.E_PROP_BALLOONDES);
        this.node.parent.destroy();
    }

    // LIFE-CYCLE CALLBACKS:

    onDestroy() {
        // if (cc.sys.platform === cc.sys.WECHAT_GAME && cocosz.dataMgr.ShockOn) {
        //     window["wx"].vibrateShort();
        // }

        cc.game.targetOff(this);
    }

    onLoad() {
        this._rigidBody = this.node.getComponent(cc.RigidBody);
    }

    start() {
        cc.game.on(Constant.E_PROP_BALLOONDES, () => {
            this._rigidBody.gravityScale -= 1.9;
            if (cocosz.dataMgr.CurLevelId == 38) {
                this._rigidBody.gravityScale -= 0.5;
            }
            cc.game.targetOff(this);
        }, this)


        if (cocosz.dataMgr.CurLevelId == 85) {
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
        let sp = this.node.getChildByName("sp").getComponent(cc.Sprite);
        cc.log("balloon" + (cocosz.dataMgr.CurBallbonSkinId + 1));
        cc.log(cocosz.resMgr.getRes("balloon" + (cocosz.dataMgr.CurBallbonSkinId + 1), cc.SpriteFrame))
        sp.spriteFrame = cocosz.resMgr.getRes("balloon" + (cocosz.dataMgr.CurBallbonSkinId + 1), cc.SpriteFrame);
        // this.scheduleOnce(()=>{

        //     if (cocosz.sceneMgr.sceneName == "Game2") {
        //         let v = this._rigidBody.linearVelocity;
        //         v.y = 1000;
        //         this._rigidBody.linearVelocity =cc.v2(0,10000);
        //     }
        // },0.2)
        if (cocosz.sceneMgr.sceneName == "Game2") {
            this.schedule(() => {
                if (Math.random() > 0.5) {
                    this._rigidBody.linearVelocity = cc.v2(0, -300)
                }
            }, 5)
        }
    }

    update(dt) {
        if (cocosz.sceneMgr.sceneName != "Game2") return
        let v = this._rigidBody.linearVelocity;
        if (v.x != 0) {
            this._rigidBody.linearVelocity = cc.v2(0, v.y);
        }
    }
}
