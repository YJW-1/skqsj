import { cocosz } from "../Framework/CocosZ";
import { tag } from "../Framework/Constant";


const { ccclass, property } = cc._decorator;

@ccclass
export default class propMoveFloor18 extends cc.Component {

    isTrue: boolean = false;
    onBeginContact(contact, self, other) {
        if (this.isTrue) return;
        if (other.tag == tag.thorn || other.tag == tag.balloon || other.tag == tag.balloon2 || other.tag == tag.stone) {
            this.isTrue = true;
            cc.log(cocosz.dataMgr.CurLevelId)
            if (cocosz.dataMgr.CurLevelId == 108) {
                // let floor1
                for (let child of this.node.parent.children) {
                    if (child.name == "floor19") {
                        if (child.angle == 0) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(128.8, -173.5) })
                                .start()
                        }
                        else if (child.angle == 180) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(-339, 271.5) })
                                .start()

                        }
                    }
                }

                let btn = this.node.getChildByName("btn1")
                cc.tween(btn)
                    .to(1, { position: cc.v2(0, -22) })
                    .start()
            }

            else if (cocosz.dataMgr.CurLevelId == 58) {
                // let floor1
                for (let child of this.node.parent.children) {
                    if (child.name == "floor19") {
                        if (child.angle == 0) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(337, 213.5) })
                                .start()
                        }
                        else if (child.angle == 180) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(-337, 213.5) })
                                .start()
                        }
                    }
                }

                let btn = this.node.getChildByName("btn1")
                cc.tween(btn)
                    .to(1, { position: cc.v2(0, -22) })
                    .start()
            }
            else if (cocosz.dataMgr.CurLevelId == 67 || cocosz.dataMgr.CurLevelId == 138) {
                // let floor1
                let btn = this.node.getChildByName("btn1")
                cc.tween(btn)
                    .to(1, { position: cc.v2(0, -22) })
                    .start()

                if (cocosz.dataMgr.CurLevelId == 138) {
                    for (let child of this.node.parent.children) {
                        if (cocosz.gameMgr.isOpen == false) {
                            cocosz.gameMgr.isOpen = true;
                            return;
                        }
                        if (child.name == "floor19") {
                            if (child.angle == 0) {
                                cc.tween(child)
                                    .to(1, { position: cc.v2(218, -113) })
                                    .start()
                            }
                            else if (child.angle == 180) {
                                cc.tween(child)
                                    .to(1, { position: cc.v2(-217, -113) })
                                    .start()
                            }
                        }
                    }
                    return;

                }


                for (let child of this.node.parent.children) {
                    if (cocosz.gameMgr.isOpen == false) {
                        cocosz.gameMgr.isOpen = true;
                        return;
                    }
                    if (child.name == "floor19") {
                        if (child.angle == 0) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(276, 269) })
                                .start()
                        }
                        else if (child.angle == 180) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(-283, 268) })
                                .start()
                        }
                    }
                }

            }
            else if (cocosz.dataMgr.CurLevelId == 86) {
                for (let child of this.node.parent.children) {
                    if (child.name == "floor19") {
                        cc.tween(child)
                            .to(1, { position: cc.v2(-318, 283) })
                            .start()
                    }
                }

                let btn = this.node.getChildByName("btn1")
                cc.tween(btn)
                    .to(1, { position: cc.v2(0, -22) })
                    .start()
            }
            else if (cocosz.dataMgr.CurLevelId == 91) {
                // let floor1
                for (let child of this.node.parent.children) {
                    if (cocosz.gameMgr.isOpen == false) {
                        cocosz.gameMgr.isOpen = true;
                        let btn = this.node.getChildByName("btn1")
                        cc.tween(btn)
                            .to(1, { position: cc.v2(0, -22) })
                            .start()
                        return;
                    }
                    if (child.name == "floor19") {
                        if (child.angle == 0) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(269, 284.5) })
                                .start()
                        }
                        else if (child.angle == 180) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(-276, 281.5) })
                                .start()
                        }
                    }
                }

                let btn = this.node.getChildByName("btn1")
                cc.tween(btn)
                    .to(1, { position: cc.v2(0, -22) })
                    .start()
            }



            else if (cocosz.dataMgr.CurLevelId == 131) {
                // let floor1
                for (let child of this.node.parent.children) {
                    if (cocosz.gameMgr.isOpen == false) {
                        cocosz.gameMgr.isOpen = true;
                        let btn = this.node.getChildByName("btn1")
                        cc.tween(btn)
                            .to(1, { position: cc.v2(0, -22) })
                            .start()
                        return;
                    }
                    if (child.name == "floor19") {
                        if (child.angle == 0) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(214, -440) })
                                .start()
                        }
                        else if (child.angle == 180) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(-208, -443) })
                                .start()
                        }
                    }
                }

                let btn = this.node.getChildByName("btn1")
                cc.tween(btn)
                    .to(1, { position: cc.v2(0, -22) })
                    .start()
            }
            else if (cocosz.dataMgr.CurLevelId == 97) {
                // let floor1
                for (let child of this.node.parent.children) {
                    if (cocosz.gameMgr.isOpen == false) {
                        cocosz.gameMgr.isOpen = true;
                        let btn = this.node.getChildByName("btn1")
                        cc.tween(btn)
                            .to(1, { position: cc.v2(0, -22) })
                            .start()
                        return;
                    }
                    if (child.name == "floor19") {
                        if (child.angle == 0) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(269, 284.5) })
                                .start()
                        }
                        else if (child.angle == 180) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(200, 266) })
                                .start()
                        }
                    }
                }

                let btn = this.node.getChildByName("btn1")
                cc.tween(btn)
                    .to(1, { position: cc.v2(0, -22) })
                    .start()
            }
            else if (cocosz.dataMgr.CurLevelId == 99) {
                // let floor1
                for (let child of this.node.parent.children) {
                    if (cocosz.gameMgr.isOpen == false) {
                        cocosz.gameMgr.isOpen = true;
                        let btn = this.node.getChildByName("btn1")
                        cc.tween(btn)
                            .to(1, { position: cc.v2(0, -22) })
                            .start()
                        return;
                    }
                    if (child.name == "floor19") {
                        if (child.angle == 0) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(-104, 295) })
                                .start()
                        }
                        else if (child.angle == 180) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(55, 295) })
                                .start()
                        }
                    }
                }

                let btn = this.node.getChildByName("btn1")
                cc.tween(btn)
                    .to(1, { position: cc.v2(0, -22) })
                    .start()
            }
            else if (cocosz.dataMgr.CurLevelId == 103) {
                for (let child of this.node.parent.children) {
                    if (cocosz.gameMgr.isOpen == false) {
                        cocosz.gameMgr.isOpen = true;
                        let btn = this.node.getChildByName("btn1")
                        cc.tween(btn)
                            .to(1, { position: cc.v2(0, -22) })
                            .start()
                        return;
                    }
                    if (child.name == "floor22") {
                        if (child.angle == 0) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(183, 283) })
                                .start()
                        }
                        else if (child.angle == 180) {
                            cc.tween(child)
                                .to(1, { position: cc.v2(-282, 283) })
                                .start()
                        }
                    }
                }
                let btn = this.node.getChildByName("btn1")
                cc.tween(btn)
                    .to(1, { position: cc.v2(0, -22) })
                    .start()
            }
        }


    }


    // LIFE-CYCLE CALLBACKS:

    onLoad() {
    }


    start() {

    }

    update(dt) {
    }
}
