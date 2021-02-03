// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    initPhysics() {
        let count = Math.ceil(this.colliderNode.width / GameData.COLLIDER_SPACE);
        for (let i = 0; i < count; i++) {
            let cld = this.colliderNode.addComponent(cc.PhysicsChainCollider);
            cld.points = [
                cc.v2(-360 + i * GameData.COLLIDER_SPACE, 0),
                cc.v2(-360 + i * GameData.COLLIDER_SPACE, -this.colliderNode.height)
            ];
            cld['apply']();
        }

        // let leftX = this.leftSide.points[0].x;
        // this.leftSide.points = [cc.v2(leftX, this.mapNode.height * (1 - this.mapNode.anchorY)), cc.v2(leftX, this.mapNode.height * (-this.mapNode.anchorY))];
        // this.leftSide['apply']();
        // let rightX = this.rightSide.points[0].x;
        // this.rightSide.points = [cc.v2(rightX, this.mapNode.height * (1 - this.mapNode.anchorY)), cc.v2(rightX, this.mapNode.height * (-this.mapNode.anchorY))];
        // this.rightSide['apply']();
    }

    onTouchStart(event: cc.Event.EventTouch) {

        if (event.getTouches().length > 1) return;
        // if (this.guideFinger.active) {
        //     this.guideFinger.active = false;
        // }
        this.brush.apply();
        let location = event.getLocation();
        let pos = this.mapNode.convertToNodeSpaceAR(location);
        pos.y += this.gameCamera.node.y;
        this.makeEraser(pos);

    }
    onTouchMove(event: cc.Event.EventTouch) {
        if (event.getTouches().length > 1) return;
        let location = event.getLocation();
        let pos = this.mapNode.convertToNodeSpaceAR(location);
        pos.y += this.gameCamera.node.y;
        this.makeEraser(pos);
    }
    onTouchEnd(event: cc.Event.EventTouch) {
        if (event.getTouches().length > 1) return;
        this.brush.apply();
    }

    checkInMaskView(pos: cc.Vec2) {
        if (pos.x < (this.maskNode.width * -this.maskNode.anchorX) ||
            pos.x > (this.maskNode.width * (1 - this.maskNode.anchorX)) ||
            pos.y < (this.maskNode.height * (-this.maskNode.anchorY)) ||
            pos.y > (this.maskNode.height * (1 - this.maskNode.anchorY))
        ) {
            return false;
        }
        return true;
    }

    makeEraser(pos: cc.Vec2, radius = 45, isLine = false) {
        if (!isLine && !this.checkInMaskView(pos)) {
            return;
        }
        let ep = pos
        let pointList = this.brush.draw({
            graphics: this.maskEraser.getGraphics(),
            x: pos.x,
            y: pos.y,
            radius: radius,
        });
        for (let i = 0; i < pointList.length; i++) {
            this.eraserLine(pointList[i], radius);
            // this.drawMaskCircle(pointList[i], radius);
        }
    }
    eraserLine(pos: cc.Vec2, radius: number) {
        let clds = this.colliderNode.getComponents(cc.PhysicsChainCollider);
        let colliderNode = this.colliderNode;
        if (clds && clds.length > 0) {
            for (let i = 0; i < clds.length; i++) {
                let cld: cc.PhysicsChainCollider = clds[i];
                if (cld.points.length > 0) {
                    let p0 = cld.points[0], p1 = cld.points[1];
                    if (cc.Intersection.pointLineDistance(pos, p0, p1, true) <= radius) {
                        if (p0.x > colliderNode.width * (1 - colliderNode.anchorX) ||
                            p0.x < colliderNode.width * -colliderNode.anchorX) {
                            return;
                        }
                        if (this.lineCircle(p0, p1, pos, radius) == 1) {
                            cld.points = [];
                            cld['apply']();
                        } else if (this.lineCircle(p0, p1, pos, radius) == 2) {
                            let height = Math.sqrt(radius * radius - (p0.x - pos.x) * (p0.x - pos.x));
                            let in1 = this.pointInLine(cc.v2(p0.x, height + pos.y), p0, p1);
                            let in2 = this.pointInLine(cc.v2(p0.x, -height + pos.y), p0, p1);
                            if (in1 && in2) {
                                let newCld = colliderNode.addComponent(cc.PhysicsChainCollider);
                                newCld.points = [p0, cc.v2(p0.x, height + pos.y)];
                                newCld['apply']();
                                cld.points = [cc.v2(p1.x, -height + pos.y), p1];
                                cld['apply']();
                            } else if (!in1 && in2) {
                                cld.points = [cc.v2(p1.x, -height + pos.y), p1];
                                cld['apply']();
                            } else if (in1 && !in2) {
                                cld.points = [cc.v2(p0), cc.v2(p0.x, height + pos.y)];
                                cld['apply']();
                            }
                        }
                    }
                }
            }
        }

    }



    pointInCircle(point, center, radius) {
        return point.sub(center).magSqr() < (radius * radius);
    }

    lineCircle(pos1, pos2, center, radius) {
        //在里面
        let in1 = this.pointInCircle(pos1, center, radius);
        let in2 = this.pointInCircle(pos2, center, radius)
        if (in1 && in2) {
            return 1;
        }
        if (!in1 && in2) {
            return 2;
        }
        if (in1 && !in2) {
            return 2;
        }

        if (cc.Intersection.pointLineDistance(center, pos1, pos2, true) <= radius) {
            return 2;
        }
        return 0;
    }

    pointInLine(point, pos1, pos2) {
        return pos1.sub(point).mag() + pos2.sub(point).mag() <= pos1.sub(pos2).mag() + 1;
    }


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    // update (dt) {}
}
