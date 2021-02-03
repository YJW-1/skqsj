import { cocosz } from "../Framework/CocosZ";
import Constant from "../Framework/Constant";

const { ccclass, property } = cc._decorator;

const DIG_RADIUS = 40;
const DIG_FRAGMENT = 8;
const DIG_OPTIMIZE_SIZE = 1;

var earthRadiusMeters = 1;
var metersPerDegree = 2.0 * Math.PI * earthRadiusMeters / 360.0;
var radiansPerDegree = Math.PI / 180.0;
var degreesPerRadian = 180.0 / Math.PI;
var pointArr;
@ccclass
export default class sand extends cc.Component {
    @property(cc.Node)
    node_dirty: cc.Node = null;

    // graphics: cc.Graphics = null;

    edge: cc.Graphics = null;
    graphics: cc.Graphics = null;
    Tgraphics: cc.Graphics = null;

    lineWidth: 60;

    @property(cc.Mask)
    mask: cc.Mask = null;

    @property(cc.Graphics)
    line1: cc.Graphics = null;
    @property(cc.Graphics)
    line2: cc.Graphics = null;


    @property(cc.Mask)
    Tmask: cc.Mask = null;


    @property(cc.Node)
    listen: cc.Node = null;

    point: any = null;
    point2: any = null;


    event: any = null
    private _regions: number[][][] = [];
    private _regions2: any = [];

    private _regionsTemp: any = [];
    isFrist: boolean = true;
    id: any = -1;

    isDraw: boolean = false;

    time: number = 0;


    isEnbaled: boolean = false;

    list: any = null;

    frequency: number = 0;





    /*平面多边形面积*/
    PlanarPolygonAreaMeters2(points) {
        var a = 0;
        for (var i = 0; i < points.length; ++i) {
            var j = (i + 1) % points.length;
            var xi = points[i][0] * metersPerDegree * Math.cos(points[i][1] * radiansPerDegree);
            var yi = points[i][1] * metersPerDegree;
            var xj = points[j][0] * metersPerDegree * Math.cos(points[j][1] * radiansPerDegree);
            var yj = points[j][1] * metersPerDegree;
            a += xi * yj - xj * yi;
        }
        return Math.abs(a / 2);
    }



    init(list) {
        this.Tgraphics.moveTo(list[0][0], list[0][1]);
        for (let idx of list) {
            this.Tgraphics.lineTo(idx[0], idx[1]);
        }
        this.Tgraphics.lineTo(list[0][0], list[0][1]);
        this.Tgraphics.fill();
        // this.Tgraphics.stroke();


        this.line1.moveTo(list[0][0], list[0][1]);
        for (let idx = 0; idx < list.length; idx++) {
            if (idx == 0) continue;
            this.line1.lineTo(list[idx][0], list[idx][1]);
        }
        this.line1.lineTo(list[0][0], list[0][1]);
        this.line1.stroke();

        // if (!this.isDraw) {
        //     this.isDraw = true;
        // }

    }




    reset(list) {
        this.point = list;
        this.point2 = list;
        this._regions = [

        ];
        cc.log(list, this.node.parent.y)
        let list3 = [];
        let list4 = [];

        let num = 1;
        if (cocosz.dataMgr.CurLevelId == 57 || cocosz.dataMgr.CurLevelId == 16 || cocosz.dataMgr.CurLevelId == 40 ||
            cocosz.dataMgr.CurLevelId == 34 || cocosz.dataMgr.CurLevelId == 108 || cocosz.dataMgr.CurLevelId == 60 ||
            cocosz.dataMgr.CurLevelId == 61 || cocosz.dataMgr.CurLevelId == 63 || cocosz.dataMgr.CurLevelId == 66 ||
            cocosz.dataMgr.CurLevelId == 86 || cocosz.dataMgr.CurLevelId == 90 || cocosz.dataMgr.CurLevelId == 92 ||
            cocosz.dataMgr.CurLevelId == 96 || cocosz.dataMgr.CurLevelId == 99 || cocosz.dataMgr.CurLevelId == 103 ||
            cocosz.dataMgr.CurLevelId == 114 || cocosz.dataMgr.CurLevelId == 119 || cocosz.dataMgr.CurLevelId == 122 || cocosz.dataMgr.CurLevelId == 130 || cocosz.dataMgr.CurLevelId == 136 ||
            cocosz.dataMgr.CurLevelId == 134 || (cocosz.dataMgr.CurLevelId == 136 && this.node.parent.y != 0) ||
            (cocosz.dataMgr.CurLevelId == 139 && this.node.parent.y == 1440)) num++;

        if (cocosz.dataMgr.CurLevelId == 32) num += 2;
        for (let idx of list) {
            let ll2 = [];
            for (let idx2 of idx) {
                let ll = [];

                ll.push(idx2.x);
                ll.push(idx2.y);
                ll2.push(ll);//-287.7516   -237.2374
            }


            if (num <= 0) {
                // this.node.getComponent("DrawMaskSc3").init(ll2);
                this.init(ll2);
            }
            else {
                list3.push(ll2)
            }
            num--;

            this._regions.push(ll2);
        }
        for (let list of list3) {
            let a = list.map((v, i) => {
                const v2 = cc.v2(v[0], v[1])
                return v2;
            });
            list4.push(a);
        }

        this._regions2 = list4;
    }
    onLoad() {
        console.log("---------------------沙")
        this.graphics = this.mask._graphics;
        this.Tgraphics = this.Tmask._graphics;


        this.Tgraphics.strokeColor = cc.Color.BLUE;
        // this.Tgraphics.lineWidth = 5;
        this.Tgraphics.lineCap = cc.Graphics.LineCap.ROUND;
        this.Tgraphics.lineJoin = cc.Graphics.LineJoin.ROUND;
        this.Tgraphics.clear();
        for (let index = 0; index < 20; index++) {
            const c = this.node_dirty.addComponent(cc.PhysicsChainCollider);
            c.loop = true;
            c.enabled = false;
        }
        this.graphics.strokeColor = cc.Color.BLUE;
        this.graphics.fillColor = cc.Color.BLUE;
        this.graphics.lineWidth = this.lineWidth;
        this.graphics.lineCap = cc.Graphics.LineCap.ROUND;
        this.graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
        this.graphics.clear();
        this.line1.lineWidth = 7;
        this.line2.lineWidth = 7;
        this.line1.strokeColor = cc.color(117, 102, 63, 255);
        this.line2.strokeColor = cc.color(117, 102, 63, 255);

        // this.graphics.close();
        // this.Tgraphics.close();

        // this.node_dirty.children[0].on(cc.Node.EventType.TOUCH_START, this._touchMove, this);
        // this.node_dirty.children[0].on(cc.Node.EventType.TOUCH_MOVE, this._touchMove, this);

        // this.listen.on(cc.Node.EventType.TOUCH_START, this._touchMove, this);
        // this.listen.on(cc.Node.EventType.TOUCH_MOVE, this._touchMove, this);
        // this.listen.on(cc.Node.EventType.TOUCH_END, this._touchENnd, this);
        // this.listen.on(cc.Node.EventType.TOUCH_CANCEL, this._touchENnd, this);



        cc.find("Canvas/gameBg").on(cc.Node.EventType.TOUCH_START, this._touchMove, this);
        cc.find("Canvas/gameBg").on(cc.Node.EventType.TOUCH_MOVE, this._touchMove, this);
        cc.find("Canvas/gameBg").on(cc.Node.EventType.TOUCH_END, this._touchENnd, this);
        cc.find("Canvas/gameBg").on(cc.Node.EventType.TOUCH_CANCEL, this._touchENnd, this);
        // cc.find("Canvas").on(cc.Node.EventType.TOUCH_END, this._touchMove, this);
        // cc.find("Canvas").on(cc.Node.EventType.TOUCH_CANCEL, this._touchMove, this);
        // this.listen.on(cc.Node.EventType.TOUCH_START, this._touchMove, this);
        // this.listen.on(cc.Node.EventType.TOUCH_MOVE, this._touchMove, this);

    }
    _touchENnd(touch: cc.Touch) {
        if (this.id == touch.getID()) {
            this.id = -1;
            this.frequency = 0;
        }
    }
    _touchMove(touch: cc.Touch) {
        // cc.log("------------------划沙子-",)
        // cc.log("-------1111111111111", touch.getID());
        // console.log("---------------------滑动沙子")
        // if (touch.getID() != 0) return;

        this.frequency++;

        if (this.frequency % 2 != 1) {
            // cc.log("-------------asdf")
            return
        }
        if (this.id == -1) {
            this.id = touch.getID();
        }
        else {
            if (this.id != touch.getID()) {
                return;
            }
        }
        const regions = [[]];

        let pp = touch.getLocation();

        pp.y += 1600 * cocosz.gameMgr.touchNum;

        const pos = this.node_dirty.convertToNodeSpaceAR(pp);
        let ret = false;
        for (let list of this._regions2) {
            if (cc.Intersection.pointInPolygon(pos, list)) {
                ret = true;
            }
        }
        if (!ret) return;


        // const regions = [[]];
        // const pos = this.graphics.node.convertToNodeSpaceAR(touch.getLocation());
        const delta = touch.getDelta();
        const count = DIG_FRAGMENT;
        if (delta.mag() < 5) {
            for (let index = 0; index < count; index++) {
                const r = 2 * Math.PI * index / count;
                const x = pos.x + DIG_RADIUS * Math.cos(r);
                const y = pos.y + DIG_RADIUS * Math.sin(r);
                regions[0].push(this._optimizePoint([x, y]));
            }
        } else {
            const startPos = pos.sub(delta);
            for (let index = 0; index < count; index++) {
                const r = 2 * Math.PI * index / count;
                let vec_x = DIG_RADIUS * Math.cos(r);
                let vec_y = DIG_RADIUS * Math.sin(r);
                let x, y;
                if (delta.dot(cc.v2(vec_x, vec_y)) > 0) {
                    x = pos.x + vec_x;
                    y = pos.y + vec_y;
                } else {
                    x = startPos.x + vec_x;
                    y = startPos.y + vec_y;
                }
                regions[0].push(this._optimizePoint([x, y]));
            }
        }












        // cocosz.audioMgr.playsandEffect();
        // const count = DIG_FRAGMENT;
        // for (let index = 0; index < count; index++) {
        //     const r = 2 * Math.PI * index / count;
        //     const x = pos.x + DIG_RADIUS * Math.cos(r);
        //     const y = pos.y + DIG_RADIUS * Math.sin(r);
        //     regions[0].push([x, y]);
        // }


        // const result = PolyBool.difference({
        //     regions: this._regions,
        //     inverted: false
        // }, {
        //     regions,
        //     inverted: false
        // });
        // cc.log(result.regions.toString() == this._regions.toString(), result.regions, this._regions)


        const seg1 = PolyBool.segments({
            regions: this._regions,
            inverted: false
        });
        const seg2 = PolyBool.segments({
            regions,
            inverted: false
        });
        const comb = PolyBool.combine(seg1, seg2);
        const result = PolyBool.polygon(PolyBool.selectDifference(comb));
        // cc.log(seg1, seg2, comb, result, this._regions)
        if (result.regions.toString() == this._regions.toString()) return;

        this._regions = result.regions;
        this.init(regions[0])

        if (this.time <= 0) {
            let prefab = cocosz.resMgr.getRes("sandEffect", cc.Prefab);
            let canvas = cc.find("Canvas");
            let node = cc.instantiate(prefab);
            let pp = canvas.convertToNodeSpaceAR(touch.getLocation());
            node.setPosition(pp);
            canvas.addChild(node);
            this.time = 0.2;
            cc.game.emit(Constant.E_TIPS_NEXT)
        }
        // for (let child of node.children) {
        // }
        // this._regionsTemp

        // cc.log(this.point, "---------this.point")
        // let list2 = [];
        // cc.log(this._regions);
        // let a = [];
        // for (let list of this._regions) {
        //     let b = this.PlanarPolygonAreaMeters2(list);
        //     if (b > 0.009) {
        //         a.push(list);
        //     }
        //     cc.log(b, "---------------Planar Polygon Area Meters2");
        // }

        // this._regions = a;
        // cc.log(this._regions);
        // this._optimizeRegions();


        this.draw();

    }


    _touchStart(touch: cc.Touch) {
        this._touchMove(touch);

        const regions = [[]];
        const pos = this.node_dirty.convertToNodeSpaceAR(touch.getLocation());
        const count = DIG_FRAGMENT;
        for (let index = 0; index < count; index++) {
            const r = 2 * Math.PI * index / count;
            const x = pos.x + DIG_RADIUS * Math.cos(r);
            const y = pos.y + DIG_RADIUS * Math.sin(r);
            regions[0].push([x, y]);
        }
        // let points = regions[0].map((v, i) => {
        //     const v2 = cc.v2(v[0], v[1])
        //     return v2;
        // });
        this.init(regions[0])
        // cc.log(points)

    }
    draw() {
        // console.log("----------------------坐标计算")
        // this.otherCamconsole.log(era.render(this.otherCamera.node);
        const enabled_chains_points = []
        const chains = this.node_dirty.getComponents(cc.PhysicsChainCollider);
        chains.forEach((c) => {
            c.enabled = false;
        })
        for (let index = 0; index < this._regions.length; index++) {
            const pos = this._regions[index];
            let poly = chains[index];

            if (!poly) {
                poly = this.node_dirty.addComponent(cc.PhysicsChainCollider);
                poly.loop = true;
            }
            poly.points.length = 0;
            poly.points = pos.map((v, i) => {
                const v2 = cc.v2(v[0], v[1])
                return v2;
            });
            poly.enabled = true;
            enabled_chains_points[index] = poly.points;
        }

        // this.point = enabled_chains_points
        //cc.log(enabled_chains_points,chains,"----------chains")

        this.graphics.clear(true);
        const enabled_chains_points_sort = enabled_chains_points.map((curPoly, curPoly_i) => {
            const count = enabled_chains_points.reduce((pre, nextPoly, nextPoly_i) => {
                if ((curPoly_i != nextPoly_i)) {
                    const length = curPoly.length;
                    for (let i = 0; i < length; ++i) {
                        const p0 = curPoly[i];
                        if (!cc.Intersection.pointInPolygon(p0, nextPoly))
                            return pre;
                    }
                    return pre + 1;
                }
                return pre;
            }, 0);

            return { curPoly, count };
        }).sort((a, b) => {
            return a.count - b.count;
        })
        enabled_chains_points_sort.forEach(({ curPoly, count }) => {
            this.graphics.fillColor = count % 2 === 0 ? cc.Color.ORANGE : cc.Color.BLACK;
            this._drawPoly(this.graphics, curPoly);
            this._drawPoly(this.line2, curPoly);
            this.graphics.fill();

            this.line2.stroke();
        })
        // if (this.isFrist) {
        //     this.isFrist = false;
        //     enabled_chains_points_sort.forEach(({ curPoly, count }) => {
        //         this.graphics.fillColor = count % 2 === 0 ? cc.Color.ORANGE : cc.color(255, 255, 255, 0);
        //         this._drawPoly(this.graphics, curPoly);
        //         this.graphics.fill();
        //         cc.log("---------------------draw")
        //     })
        // }
    }
    private _drawPoly(ctx: cc.Graphics, poly) {
        poly.forEach((pos, i) => {
            if (i === 0)
                ctx.moveTo(pos.x, pos.y);
            else
                ctx.lineTo(pos.x, pos.y);
            ctx.close();
        })
    };
    private _drawPoly2(ctx: cc.Graphics, poly) {
        poly.forEach((pos, i) => {
            if (i === 0) {
                cocosz.audioMgr.playsandEffect();
            }
        })
    };

    private _optimizePoint(point) {
        return [Math.floor(point[0] * DIG_OPTIMIZE_SIZE) / DIG_OPTIMIZE_SIZE, Math.floor(point[1] * DIG_OPTIMIZE_SIZE) / DIG_OPTIMIZE_SIZE];
    }


    private _optimizeRegions() {
        const regions = [];
        for (let index = 0; index < this._regions.length; index++) {
            const pos = this._regions[index];
            const newPos = [];
            pos.forEach((p, i) => {
                p = this._optimizePoint(p);
                const p_pre = this._optimizePoint(pos[(i - 1 + pos.length) % pos.length]);
                const p_next = this._optimizePoint(pos[(i + 1) % pos.length]);
                const vec1 = cc.v2(p[0] - p_pre[0], p[1] - p_pre[1]);
                const vec2 = cc.v2(p_next[0] - p[0], p_next[1] - p[1]);
                if (vec1.mag() != 0 && vec2.mag() != 0 && vec1.cross(vec2) != 0) {
                    newPos.push(p);
                }
            })


            if (newPos.length > 2) {
                regions.push(newPos);
            }
        }
        this._regions = regions;
    }


    onEnable() {
        if (this.isEnbaled == false) {
            this.isEnbaled = true;
            return
        }

        this.scheduleOnce(() => {
            this.Tgraphics.clear();
            this.graphics.clear();

            this.reset(this.point2);

            let mask: cc.Mask = this.node.parent.getComponent(cc.Mask);
            let graphics = mask._graphics;

            for (let point of this.point2) {
                graphics.moveTo(point[0].x, point[0].y);
                for (let v2 of point) {
                    graphics.lineTo(v2.x, v2.y);
                }
                graphics.fill();
            }


            this.draw();
        }, 0.1)

    }

    start() {
        this.draw();
    }


    update(dt) {
        if (this.time > 0) {
            this.time -= dt;
        }
    }
}
