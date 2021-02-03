
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    start () {

    },
    onEnable(){
        if(this.enableCallBack){
            this.enableCallBack();
        }
    },
    onDisable(){
        if(this.destroyCallBack){
            this.destroyCallBack();
        }
    },

    update (dt) {
        this.updateCallBack&&this.updateCallBack();
    },
});
