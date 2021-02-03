
cc.Class({
    extends: cc.Component,

    properties: {
        bossNode: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:
    scrollViewtouEnd(event){
        this.scrollViewContent.y+=event.getDelta().y;
        if(this.scrollViewContent.y < -400-(this.scrollViewContent.height-400)){
            this.scrollViewContent.y = -400-(this.scrollViewContent.height-400);
        }
        if(this.scrollViewContent.y > -400){
            this.scrollViewContent.y = -400;
        }
    },
    onLoad () {
        cc.find('node/node',this.node).scale = lieyou_SdkManager._SceneScale;
        this.bossNode.scale = lieyou_SdkManager._SceneScale;
        this.scrollViewContent = cc.find('node/node/ScrollView/view/content',this.node);
        this.scrollView = cc.find('node/node/ScrollView',this.node);
        this.scrollView.on(cc.Node.EventType.TOUCH_MOVE,(event)=>{
            this.scrollViewContent.y+=event.getDelta().y;
        })
        this.scrollView.on(cc.Node.EventType.TOUCH_END,(event)=>{
            this.scrollViewtouEnd(event);
        })
        this.scrollView.on(cc.Node.EventType.TOUCH_CANCEL,(event)=>{
            this.scrollViewtouEnd(event);
        })
        this.scrollView._touchListener.setSwallowTouches(false);
        this.titleArray = [];
        var winSize = cc.winSize;
        this.bossNode.x = cc.winSize.width*-0.5;
        this.bossNode.y = cc.winSize.height*0.5;

        // cc.find('node/node/ScrollView',this.node)._touchListener.setSwallowTouches(false);
    },

    start () {
        this.touchNum = 0;
        this.time = parseInt(getTime()/1000);
        this.bossNode.on(cc.Node.EventType.TOUCH_START, function(event){
            if (this.bossNode._touchListener) {
                this.bossNode._touchListener.setSwallowTouches(false);
            }
            this.touchNum++;
            var nowTime = parseInt(getTime()/1000);
            if(nowTime - this.time < 10){
                if(this.touchNum >= 7){
                    lieyou_showDebug = true;
                    cc.find('node/node/version',this.node).getComponent(cc.Label).string =' '+_SDKVersion+ '/' + lieyou_SdkManager.instance.getVersion();
                    this.touchNum = 0;
                    this.time = nowTime;
                    cc.find('node/node',this.node).active = true;
                }
            }else{
                this.touchNum = 0;
                this.time = nowTime;
            }
        }.bind(this));
    },


    addTitle(title = ''){
        if(!cc.find('node/node',this.node).active){
            return;
        }
        var fnode = this.scrollViewContent;
        var node = new cc.Node();
        node.width = 300;
        node.anchorX = 0;
        node.anchorY = 0;
        var label = node.addComponent(cc.Label);
        label.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
        label.string = title;
        label.fontSize = 25;
        fnode.addChild(node);
        // node.color = cc.color(0,0,0);
        // for(let i = 0;i < fnode.children.length;i++){
        //     if(fnode.children[i].y < 0){
        //         fnode.children[i].destroy();
        //     }
        // }

        // node.y = cc.find('node/node',this.node).height;
        // this.titleArray.pash(node);
    },

    closeCallBack(){
        cc.find('node/node',this.node).active = false;
    },
    clearCallBack(){
        this.scrollViewContent.removeAllChildren();
    },
    // update (dt) {},
});
