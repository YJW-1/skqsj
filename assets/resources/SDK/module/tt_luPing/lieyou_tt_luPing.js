
cc.Class({
    extends: cc.Component,

    properties: {
    },
    start () {
        this.bNode = cc.find('luPingBegin',this.node);
        this.eNode = cc.find('luPingEnd',this.node);
        this.luPing = false;
        var node = cc.find('luPingEnd/luPingEnd2',this.node);
        node.runAction(cc.repeatForever(cc.sequence(cc.fadeOut(0.4),cc.fadeIn(0.4))));
    },
    setColor(color = 'black'){
        var luPingBeginUrl = 'tt/luPingBegin';
        var luPingEndUrl = 'tt/luPingEnd';
        if(color == 'white'){
            luPingBeginUrl = 'tt/luPingBeginB';
            luPingEndUrl = 'tt/luPingEndB';
        }
        lieyou_load(luPingBeginUrl, (err, texture) => {
            cc.find('luPingBegin',this.node).getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        });
        lieyou_load(luPingEndUrl, (err, texture) => {
            cc.find('luPingEnd',this.node).getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        });
    },
    setData(callBack){
        this._callBack = callBack;
    },
    callBack(){
        var self = this;
        this.luPing = !this.luPing;
        if(this.luPing){
            lieyou_SdkManager.beginLuPing(30,function(type){
                if(self._callBack){
                    self._callBack(type);
                }
                
            });
            this.bNode.active = false;
            this.eNode.active = true;

        }else{
            lieyou_SdkManager.stopLuPing();
            this.bNode.active = true;
            this.eNode.active = false;
        }
    },

    stop(){
        this.luPing = false;
        this.bNode.active = true;
        this.eNode.active = false;
    },

    // update (dt) {},
});
