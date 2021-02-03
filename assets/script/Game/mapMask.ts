import { cocosz } from "../Framework/CocosZ";

const { ccclass, property } = cc._decorator;

@ccclass
export default class mapMask extends cc.Component {
    isFirst = false;

    onEnable() {
        let component = this.node.getComponents(cc.PhysicsPolygonCollider);
        let list = [];
        for (let poly of component) {
            if (poly.points) {
                list.push(poly.points)
            }
        }

        cc.log("----------------------------地图启用",this.node.y,list)
        if (!this.isFirst) {
            this.isFirst = true;
            return
        };

        cc.log("----------------------------地图启用2")
        let mask: cc.Mask = this.node.getComponent(cc.Mask);
        cc.log(mask,this.node.parent,list)
        let graphics = mask._graphics;
        

        for (let point of list) {
            graphics.moveTo(point[0].x, point[0].y);
            for (let v2 of point) {
                graphics.lineTo(v2.x, v2.y);
            }
            graphics.fill();
        }
    }


    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
    }

    // update (dt) {}
}
