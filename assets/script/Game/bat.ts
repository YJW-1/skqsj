import { cocosz } from "../Framework/CocosZ";
import { tag } from "../Framework/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class bat extends cc.Component {

    rb: cc.RigidBody = null;

    action: any = null
    startPos: any = null

    isStart: boolean = false;

    isTwo: boolean = false;

    isRight: boolean = false

    isFirst: boolean = false;

    onBeginContact(contact, self, other) {
        if (cocosz.dataMgr.CurLevelId == 49 && this.isStart) return;

        if (!this.isFirst) {
            cocosz.audioMgr.playBatEffect();
        }
        if (cocosz.dataMgr.CurLevelId == 106) {
            this.isFirst = true;
            this.isStart = true;
            let v = this.rb.linearVelocity;
            if (v.x == 0) {
                if (this.action) {
                    this.action.stop()
                }
                cc.tween(this.node)
                    .to(0.1, { position: this.startPos })
                    .call(() => {
                        v.x = 450;
                        this.rb.linearVelocity = v;
                    })
                    .start()
            }
            if (other.tag == 0) {
                contact.disabled = true;
                if (v.x != 0) {
                    v.x *= -1;
                    if (v.x < 0 && v.x > -450) {
                        v.x = -450;
                    }
                    else if (v.x > 0 && v.x < 450) {
                        v.x = 450;
                    }
                    this.rb.linearVelocity = v;
                }
            }
            else if (other.tag == 123) {
                if (v.x != 0) {
                    v.x *= -1;
                    if (v.x < 0 && v.x > -450) {
                        v.x = -450;
                    }
                    else if (v.x > 0 && v.x < 450) {
                        v.x = 450;
                    }
                    this.rb.linearVelocity = v;
                }
            }
            else if (other.tag == 124) {
                this.isTwo = true;
                if (v.x != 0) {
                    v.x *= -1;
                    if (v.x < 0 && v.x > -450) {
                        v.x = -450;
                    }
                    else if (v.x > 0 && v.x < 450) {
                        v.x = 450;
                    }
                    this.rb.linearVelocity = v;
                }
            }

        }
        else if (cocosz.dataMgr.CurLevelId == 32) {
            this.isFirst = true;
            this.isStart = true
            let v = this.rb.linearVelocity;
            if (other.tag == tag.beforeSucceedPoint) return;
            if (v.x == 0) {
                if (this.action) {
                    this.action.stop()
                }
                v.y = 450;
                this.rb.linearVelocity = v;
            }
        }
        else if (cocosz.dataMgr.CurLevelId == 49 || cocosz.dataMgr.CurLevelId == 135) {
            this.isFirst = true;
            if (this.isStart) return;
            this.isStart = true;
            if (this.action) {
                this.action.stop()
            }
            let v = this.rb.linearVelocity;
            v.x = 450;
            this.rb.linearVelocity = v;
            this.schedule(() => {
                cc.log("---------this.isRight---------", this.isRight)
                this.isRight = !this.isRight
                if (this.isRight) {
                    v.x = -450;
                    this.rb.linearVelocity = v;
                }
                else {
                    v.x = 450;
                    this.rb.linearVelocity = v;
                }
            }, 3.3)
        }
        else if (cocosz.dataMgr.CurLevelId == 35 || cocosz.dataMgr.CurLevelId == 124) {
            this.isStart = true
            this.isFirst = true;
            let v = this.rb.linearVelocity;


            cc.log("=================")
            if (v.x == 0) {
                if (this.action) {
                    this.action.stop()
                }
                cc.tween(this.node)
                    .to(0.1, { position: this.startPos })
                    .call(() => {
                        v.x = 300;
                        this.rb.linearVelocity = v;
                    })
                    .start()
            }
            if (other.tag == 7) {
                contact.disabled = true;
                if (v.x != 0) {
                    v.x *= -1;
                    if (v.x < 0 && v.x > -300) {
                        v.x = -300;
                    }
                    else if (v.x > 0 && v.x < 300) {
                        v.x = 300;
                    }
                    this.rb.linearVelocity = v;
                }
            }
            if (other.tag == 0) {
                if (v.x != 0) {
                    v.x *= -1;
                    if (v.x < 0 && v.x > -300) {
                        v.x = -300;
                    }
                    else if (v.x > 0 && v.x < 300) {
                        v.x = 300;
                    }
                    this.rb.linearVelocity = v;
                }
            }
        }
        else if (cocosz.dataMgr.CurLevelId == 86) {
            this.isStart = true
            this.isFirst = true;
            let v = this.rb.linearVelocity;
            if (v.x == 0) {
                if (this.action) {
                    this.action.stop()
                }
                cc.tween(this.node)
                    .to(0.1, { position: this.startPos })
                    .call(() => {
                        v.x = 450;
                        this.rb.linearVelocity = v;
                    })
                    .start()
            }
            if (other.tag == 7) {
                contact.disabled = true;
                if (v.x != 0) {
                    v.x *= -1;
                    if (v.x < 0 && v.x > -450) {
                        v.x = -450;
                    }
                    else if (v.x > 0 && v.x < 450) {
                        v.x = 450;
                    }
                    this.rb.linearVelocity = v;
                }
            }
            if (other.tag == 0) {
                if (v.x != 0) {
                    v.x *= -1;
                    if (v.x < 0 && v.x > -450) {
                        v.x = -450;
                    }
                    else if (v.x > 0 && v.x < 450) {
                        v.x = 450;
                    }
                    this.rb.linearVelocity = v;
                }
            }
        }
        if (other.tag == tag.desPoint) {
            this.node.destroy();
        }
    }


    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.rb = this.node.getComponent(cc.RigidBody);
    }

    start() {

        this.startPos = this.node.getPosition();

        let a = cc.tween().sequence(
            cc.tween().by(1, { position: cc.v2(0, 15) }),
            cc.tween().by(1, { position: cc.v2(0, -15) })
        )

        this.action = cc.tween(this.node)
            .repeatForever(a)
            .start()



        let b = cc.tween().sequence(
            cc.tween().by(0.1, { angle: 30 }),
            cc.tween().by(0.1, { angle: -30 })
        )


        cc.tween(this.node.getChildByName("bat_wing1"))
            .repeatForever(b)
            .start()

        let c = cc.tween().sequence(
            cc.tween().by(0.1, { angle: -30 }),
            cc.tween().by(0.1, { angle: 30 })
        )


        cc.tween(this.node.getChildByName("bat_wing2"))
            .repeatForever(c)
            .start()
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

        if (cocosz.dataMgr.CurLevelId == 35) {
            this.isStart = true
            this.isFirst = true;
            let v = this.rb.linearVelocity;
            if (v.x == 0) {
                if (this.action) {
                    this.action.stop()
                }
                cc.tween(this.node)
                    .to(0.1, { position: this.startPos })
                    .call(() => {
                        v.x = 300;
                        this.rb.linearVelocity = v;
                    })
                    .start()
            }
        }
    }

    update(dt) {
        if (cocosz.dataMgr.CurLevelId != 35 && cocosz.dataMgr.CurLevelId != 124 && cocosz.dataMgr.CurLevelId != 32 && this.isStart && !this.isTwo) {
            let v = this.rb.linearVelocity;
            v.y = 0;
            this.rb.linearVelocity = v;
            cc.log("-------222")

        }
        else if (cocosz.dataMgr.CurLevelId == 49 && this.isStart) {
            let v = this.rb.linearVelocity;
            v.y = 0;
            if (v.x > 10 && v.x < 450) {
                v.x = 450
            }
            else if (v.x < 10 && v.x > -450) {
                v.x = -450
            }
            // if (this.isRight) {
            //     v.x = 450;
            //     this.rb.linearVelocity = v;
            // }
            // else {
            //     v.x = -450;
            //     this.rb.linearVelocity = v;
            // }
            cc.log("----211---222")
            this.rb.linearVelocity = v;
        }
    }
}
