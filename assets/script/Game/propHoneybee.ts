import { cocosz } from "../Framework/CocosZ";
import { tag } from "../Framework/Constant";
const { ccclass, property } = cc._decorator;

@ccclass
export default class propHoneybee extends cc.Component {

    rb: cc.RigidBody = null;


    num: number = 0;
    direction: boolean = false;

    isLimit: boolean = false

    public isFan: boolean = false;
    onBeginContact(contact, self, other) {
        if (other.tag == tag.desPoint) {
            this.node.destroy();
        }
    }

    onRayCast() {

        let startPos = this.node.parent.convertToWorldSpaceAR(this.node.getPosition());
        //右
        let endPos = cc.v2(startPos.x + 1500, startPos.y);
        let result = cocosz.gameMgr.onRayCast(startPos, endPos);
        for (let physics of result) {
            let cTag = physics.collider.tag;
            if (cTag == tag.player || cTag == tag.balloon || cTag == tag.rope) {
                let v = this.rb.linearVelocity;
                if (v.x < 0) {
                    v.x += 700;
                }
                this.rb.linearVelocity = v;
                // cc.log("-----------------------右");
                this.isLimit = true;
                cocosz.gameMgr.isFeed = true;
                return
            }
            else if (cTag == tag.invisibleFloor) {
                continue;
            }
            else if (cTag == tag.thorn || cTag == tag.floorThorn || cTag == tag.moveFloor || cTag == tag.stone || cTag == 0) {
                break;
            }
        }
        //左
        let endPos2 = cc.v2(startPos.x - 1500, startPos.y);
        let result2 = cocosz.gameMgr.onRayCast(startPos, endPos2);
        for (let physics of result2) {
            let cTag = physics.collider.tag;
            if (cTag == tag.player || cTag == tag.balloon || cTag == tag.rope) {
                let v = this.rb.linearVelocity;
                if (v.x > 0) {
                    v.x -= 700;
                }
                this.rb.linearVelocity = v;
                this.isLimit = true
                cocosz.gameMgr.isFeed = true;
                return
            }
            else if (cTag == tag.invisibleFloor) {
                continue;
            }
            else if (cTag == tag.thorn || cTag == tag.floorThorn || cTag == tag.moveFloor || cTag == tag.stone || cTag == 0) {
                break;
            }
        }

        //上
        let endPos3 = cc.v2(startPos.x, startPos.y + 1500);
        let result3 = cocosz.gameMgr.onRayCast(startPos, endPos3);
        for (let physics of result3) {
            let cTag = physics.collider.tag;
            if (cTag == tag.player || cTag == tag.balloon || cTag == tag.rope || cTag == tag.balloon2) {
                let v = this.rb.linearVelocity;
                if (v.y < 0) {
                    v.y += 700;
                }
                this.rb.linearVelocity = v;
                this.isLimit = true
                cocosz.gameMgr.isFeed = true;
                return
            }
            else if (cTag == tag.invisibleFloor) {
                continue;
            }
            else if (cTag == tag.thorn || cTag == tag.floorThorn || cTag == tag.moveFloor || cTag == tag.stone || cTag == 0) {
                break;
            }
        }

        //下
        let endPos4 = cc.v2(startPos.x, startPos.y - 1500);
        let result4 = cocosz.gameMgr.onRayCast(startPos, endPos4);
        for (let physics of result4) {
            let cTag = physics.collider.tag;
            if (cTag == tag.player || cTag == tag.balloon || cTag == tag.rope) {
                let v = this.rb.linearVelocity;
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
                this.isLimit = true
                cocosz.gameMgr.isFeed = true;
                cc.log("-----------------------下")
                return
            }
            else if (cTag == tag.invisibleFloor) {
                continue;
            }
            else if (cTag == tag.thorn || cTag == tag.floorThorn || cTag == tag.moveFloor || cTag == 0 || cTag == tag.stone) {
                break;
            }
        }


    }

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.rb = this.node.getComponent(cc.RigidBody);
    }

    start() {
        let pos = cc.v2(this.node.x, this.node.y);
        let hd = cc.v2(0, 100).signAngle(pos) / 2;
        this.node.angle = Math.ceil(hd / Math.PI * 180);
        let v = this.rb.linearVelocity;
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
        this.schedule(() => {
            this.num++;
            let pos = cc.v2(this.node.x, this.node.y);
            let hd = cc.v2(0, 100).signAngle(pos) / 2;
            this.node.angle = Math.ceil(hd / Math.PI * 180);
            let v = this.rb.linearVelocity;
            v.x = Math.random() * 500 - 250;
            v.y = Math.random() * 300 - 150;
            if (this.node.y <= -600 && v.y < 0 || (this.node.y >= 700 && v.y > 0)) {
                v.y *= -1;
            }
            if (!(this.num % 4) && Math.random() > 0.5) {
                this.num = 0;
                this.direction = !this.direction;
                if (this.direction) {
                    v.x = 300;
                }
                else {
                    v.x = -300;
                }
            }
            if (cocosz.sceneMgr.sceneName == "rewardLevel2") {

                if (v.x < 0) {
                    v.x *= -1;
                    v.y *= 0;
                }
                this.rb.linearVelocity = v;
                return;
            }
            if (cocosz.dataMgr.CurLevelId == 57 || cocosz.dataMgr.CurLevelId == 134) {
                // cc.log(v.x, v.y, cocosz.gameMgr.isFeed)
                if (cocosz.gameMgr.isFeed) {
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
            else if (cocosz.dataMgr.CurLevelId == 61 || cocosz.dataMgr.CurLevelId == 130) {
                if (v.x < 0) {
                    v.x *= -1;
                }
            }
            else if (cocosz.dataMgr.CurLevelId == 66) {
                if (v.y > 0 && Math.random() > 0.3) {
                    v.y *= -1;
                }
            }
            this.rb.linearVelocity = v;
            this.onRayCast();
        }, 0.5)
    }

    update(dt) {

    }
}
