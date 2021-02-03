

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        
    },

    start () {
        this.node.runAction(cc.repeatForever(cc.sequence(
            cc.rotateBy(0.03,-15),cc.rotateBy(0.03,0),cc.rotateBy(0.03,15),cc.rotateBy(0.03,0),
            cc.rotateBy(0.03,-10),cc.rotateBy(0.03,0),cc.rotateBy(0.03,10),cc.rotateBy(0.03,0),
            cc.rotateBy(0.03,-5),cc.rotateBy(0.03,0),cc.rotateBy(0.03,5),cc.rotateBy(0.03,0),
            cc.delayTime(2 + Math.random() * 1)))
        );
    },
    setData(callBack){
        this._callBack = callBack;
    },
    callBack(){
        cc.find('red',this.node).active = false;
        if(this._callBack){
            this._callBack();
        }
    },

    // update (dt) {},
});
