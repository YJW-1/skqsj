
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    refreshData(obj){
    },
    setData(data){
        try {
            cc.find('myNode',this.node).active = true;
            this._callBack = data.callBack;
            this.loadSpriteFrame(data.url,cc.find('myNode/imageBg/image/image',this.node));
            cc.find('myNode/wordBg/name',this.node).getComponent(cc.Label).string = this.getName(data.title);
        } catch (error) {
            
        }
        
    },
    getName(name){
        if(name.length <= 5){
            return name;
        }
        var name2 = '';
        for(var i = 0;i < 5;i++){
            name2 = name2 + name[i];
        }
        name2 = name2 + '...'
        return name2;
    },
    loadSpriteFrame: function(img,node){
        if(img == ''){
            return;
        }
        var loadFile = {
            url: img,
            type: "image"
        };
        cc.loader.load(loadFile, function (err, tex) {
            if (err) {
                return;
            }
            if(node && node.isValid){
                node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
            }
        });
    },

    start () {
        this.refreshData();
        this.node.runAction(cc.repeatForever(cc.sequence(
            cc.rotateBy(0.03,-15),cc.rotateBy(0.03,0),cc.rotateBy(0.03,15),cc.rotateBy(0.03,0),
            cc.rotateBy(0.03,-10),cc.rotateBy(0.03,0),cc.rotateBy(0.03,10),cc.rotateBy(0.03,0),
            cc.rotateBy(0.03,-5),cc.rotateBy(0.03,0),cc.rotateBy(0.03,5),cc.rotateBy(0.03,0),
            cc.delayTime(2 + Math.random() * 1)))
        );
        this.schedule(this.refreshData,5);
    },
    callBack: function(){
		this._callBack();
    },

    // update (dt) {},
});
