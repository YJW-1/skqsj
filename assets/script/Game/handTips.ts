import { cocosz } from "../Framework/CocosZ";
import Constant from "../Framework/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class handTips extends cc.Component {
    action: any = null;
    action2: any = null;
    startPos: any = null;
    step: number = 0;

    floor2: cc.Node = null;
    //根据值来进行下一步新手引导
    onNext() {
        cc.log(cocosz.gameMgr.handNum, "cocosz.gameMgr.handNum---------")
        if (this.action) {
            this.action.stop();
            this.node.opacity = 0;
        }
        if (this.action2) {
            // cc.log(this.node.parent.getChildByName("floorTips2"))
            this.node.parent.getChildByName("floorTips2").destroy()
            this.action2.stop();
            this.node.opacity = 0;
        }
        if (cocosz.gameMgr.handNum == 0) {
            if (cocosz.dataMgr.CurLevelId == 4) {
                let a = cc.tween().sequence(
                    cc.tween().delay(2),
                    cc.tween().call(() => {
                        this.node.setPosition(this.startPos);
                        this.node.opacity = 255;
                    }),
                    cc.tween().to(0.5, { position: cc.v2(-42, 24) }),
                    cc.tween().to(0.5, { position: cc.v2(90, -59) }),
                    cc.tween().to(0.5, { position: cc.v2(-18, -124) }),
                    cc.tween().to(0.5, { opacity: 0 }),
                    cc.tween().delay(2),
                )
                this.action = cc.tween(this.node)
                    .repeatForever(a)
                    .start()

                // cocosz.gameMgr.handNum++;
            }

            else if (cocosz.dataMgr.CurLevelId == 0 || cocosz.dataMgr.CurLevelId == 11 || cocosz.dataMgr.CurLevelId == 20) {
                this.node.opacity = 0;
                let a = cc.tween().sequence(
                    cc.tween().delay(1),
                    cc.tween().to(1, { opacity: 255 }),
                    cc.tween().to(1.5, { opacity: 0 }),
                    cc.tween().delay(2),
                )
                this.action = cc.tween(this.node)
                    .repeatForever(a)
                    .start()
            }
            else if (cocosz.dataMgr.CurLevelId == 1) {
                let a = cc.tween().sequence(
                    cc.tween().delay(2),
                    cc.tween().call(() => {
                        this.node.setPosition(this.startPos);
                        this.node.opacity = 255;
                    }),
                    cc.tween().to(1.5, { position: cc.v2(198, -113) }),
                    cc.tween().to(0.5, { opacity: 0 }),
                    cc.tween().delay(2),
                )
                this.action = cc.tween(this.node)
                    .repeatForever(a)
                    .start()

                // cocosz.gameMgr.handNum++;

            }
            else if (cocosz.dataMgr.CurLevelId == 2) {

                let a = cc.tween().sequence(
                    cc.tween().delay(2),
                    cc.tween().call(() => {
                        this.node.setPosition(this.startPos);
                        this.node.opacity = 255;
                    }),
                    cc.tween().by(1.5, { position: cc.v2(0, 250) }),
                    cc.tween().to(0.5, { opacity: 0 }),
                    cc.tween().delay(2),
                )
                this.action = cc.tween(this.node)
                    .repeatForever(a)
                    .start()

                // cocosz.gameMgr.handNum++;

            }
            else if (cocosz.dataMgr.CurLevelId == 3) {
                cc.log(this.node.scale)
                this.node.scale = 1.5


                let a = cc.tween().sequence(
                    cc.tween().delay(1),
                    cc.tween().to(1, { opacity: 255 }),
                    cc.tween().to(1.5, { opacity: 0 }),
                    cc.tween().delay(2),
                )
                this.action = cc.tween(this.node)
                    .repeatForever(a)
                    .start()
                // cocosz.gameMgr.handNum++;
            }
            else if (cocosz.dataMgr.CurLevelId == 27) {

                let a = cc.tween().sequence(
                    cc.tween().delay(1),
                    cc.tween().call(() => {
                        this.node.setPosition(this.startPos);
                    }),
                    cc.tween().to(1, { opacity: 255 }),
                    cc.tween().to(1, { position: cc.v2(66, -110) }),
                    cc.tween().to(1, { opacity: 0 }),
                    cc.tween().delay(2),
                )

                cc.tween(this.node)
                    .repeatForever(a)
                    .start()
                cocosz.gameMgr.handNum++;



            }
            else if (cocosz.dataMgr.CurLevelId == 5) {

                let a = cc.tween().sequence(
                    cc.tween().delay(2),
                    cc.tween().call(() => {
                        this.node.setPosition(this.startPos);
                        // this.node.opacity = 255;
                    }),
                    cc.tween().to(1, { opacity: 255 }),
                    cc.tween().to(1, { opacity: 0 }),
                    cc.tween().delay(2),
                )
                this.action = cc.tween(this.node)
                    .repeatForever(a)
                    .start()

                cocosz.gameMgr.handNum++;

            }
        }
        else if (cocosz.gameMgr.handNum == 1) {

            if (cocosz.dataMgr.CurLevelId == 4) {

                let a = cc.tween().sequence(
                    cc.tween().call(() => {
                        this.node.setPosition(cc.v2(55, -301));
                        this.node.opacity = 0;
                    }),
                    cc.tween().delay(2),
                    cc.tween().to(1, { opacity: 255 }),
                    cc.tween().to(1, { opacity: 0 }),
                    cc.tween().delay(2),
                )
                this.action = cc.tween(this.node)
                    .repeatForever(a)
                    .start()
            }
            else if (cocosz.dataMgr.CurLevelId == 0) {
                this.node.setPosition(cc.v2(83.549, -135.817 - 60 - 60))
                let a = cc.tween().sequence(
                    cc.tween().delay(1),
                    cc.tween().to(1, { opacity: 255 }),
                    cc.tween().to(1.5, { opacity: 0 }),
                    cc.tween().delay(2),
                )
                this.action = cc.tween(this.node)
                    .repeatForever(a)
                    .start()
            }
            else if (cocosz.dataMgr.CurLevelId == 1) {
                this.node.getChildByName("floorTips1").active = false;
                this.node.getChildByName("sp").active = true

                let a = cc.tween().sequence(
                    cc.tween().call(() => {
                        this.node.setPosition(cc.v2(-55, -301));
                        this.node.opacity = 0;
                    }),
                    cc.tween().delay(2),
                    cc.tween().to(1, { opacity: 255 }),
                    cc.tween().to(1, { opacity: 0 }),
                    cc.tween().delay(2),
                )
                this.action = cc.tween(this.node)
                    .repeatForever(a)
                    .start()
            }
            else if (cocosz.dataMgr.CurLevelId == 3) {

                let prefab = cocosz.resMgr.getRes("floorTips2", cc.Prefab);
                let node = cc.instantiate(prefab);
                node.setPosition(cc.v2(350, 186.5));
                this.floor2 = node;
                this.floor2.opacity = 0;
                this.node.parent.addChild(node);

                this.node.setPosition(cc.v2(357, 77));
                this.startPos = this.node.getPosition();
                this.node.opacity = 0;
                this.node.scale = 1;



                let a = cc.tween().sequence(
                    cc.tween().delay(1.5),
                    cc.tween().to(0.4, { opacity: 255 }),
                    cc.tween().to(0.6, { position: cc.v2(253.5, 133) }),
                    cc.tween().to(0.6, { position: cc.v2(357, 218) }),
                    cc.tween().to(0.6, { position: cc.v2(463.5, 133) }),
                    cc.tween().to(0.6, { position: this.startPos }),
                    cc.tween().to(0.4, { opacity: 0 }),
                    cc.tween().delay(1.5),
                )
                this.action = cc.tween(this.node)
                    .repeatForever(a)
                    .start()



                let b = cc.tween().sequence(
                    cc.tween().delay(1.5),
                    cc.tween().to(0.4, { opacity: 255 }),
                    cc.tween().by(2.4, { angle: -360 }),
                    cc.tween().to(0.4, { opacity: 0 }),
                    cc.tween().delay(1.5),
                )
                // if (this.floor2) {
                this.action2 = cc.tween(node)
                    .repeatForever(b)
                    .start()
                // }

            }
        }
        else if (cocosz.gameMgr.handNum == 2) {

            if (cocosz.dataMgr.CurLevelId == 1) {
                this.startPos = cc.v2(353, 44.5);
                this.node.removeAllChildren();

                let prefab = cocosz.resMgr.getRes("floorTips3", cc.Prefab)
                let node = cc.instantiate(prefab);
                this.node.addChild(node);
                this.node.opacity = 0;

                let a = cc.tween().sequence(
                    cc.tween().delay(2),
                    cc.tween().call(() => {
                        this.node.setPosition(this.startPos);
                        this.node.opacity = 255;
                    }),
                    cc.tween().to(0.7, { position: cc.v2(340, 44.5) }),
                    cc.tween().to(0.5, { opacity: 0 }),
                    cc.tween().delay(2),
                )
                this.action = cc.tween(this.node)
                    .repeatForever(a)
                    .start()

            }
            else if (cocosz.dataMgr.CurLevelId == 3) {
                cc.log(this.node.scale)
                this.node.scale = 1.5

                this.node.setPosition(cc.v2(222.322, -300))

                let a = cc.tween().sequence(
                    cc.tween().delay(1),
                    cc.tween().to(1, { opacity: 255 }),
                    cc.tween().to(1.5, { opacity: 0 }),
                    cc.tween().delay(2),
                )
                this.action = cc.tween(this.node)
                    .repeatForever(a)
                    .start()
                // cocosz.gameMgr.handNum++;
            }
        }
    }
    // LIFE-CYCLE CALLBACKS:

    onDestroy() {
        cc.game.targetOff(this);
    }

    // onLoad () {}

    start() {
        this.startPos = this.node.getPosition();
        this.node.zIndex += 9999;




        if (cocosz.dataMgr.CurLevelId == 1) {
            // this.node.getChildByName("sp").active = false;

            let prefab = cocosz.resMgr.getRes("floorTips1", cc.Prefab);
            let node = cc.instantiate(prefab);
            this.node.addChild(node);
            this.node.opacity = 0;
        }
        else if (cocosz.dataMgr.CurLevelId == 2 || cocosz.dataMgr.CurLevelId == 27 || cocosz.dataMgr.CurLevelId == 5 || cocosz.dataMgr.CurLevelId == 0) {
            this.node.opacity = 0;
        }

        this.onNext();

        cc.game.on(Constant.E_TIPS_NEXT, (other, self) => {

            this.onNext();

            // if (cocosz.gameMgr.handNum == 1 && cocosz.dataMgr.CurLevelId == 1) {
            //     cc.game.off(Constant.E_TIPS_NEXT);
            // }

            // else if (cocosz.gameMgr.handNum == 1 && cocosz.dataMgr.CurLevelId == 0) {
            //     cc.game.off(Constant.E_TIPS_NEXT);
            // }
        }, this)



        cc.game.on(Constant.E_TIPS_NEXT2, (other, self) => {

            cc.log("Constant.E_TIPS_NEXT2__------------------on")
            cocosz.gameMgr.handNum = 2;
            this.onNext();
        }, this)
    }

    // update (dt) {}
}
