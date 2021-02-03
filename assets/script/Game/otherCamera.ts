
const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Camera)
    otherCamera: cc.Camera = null;


    mask: cc.Mask = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.mask = this.node.getComponent(cc.Mask);
        let sp = new cc.SpriteFrame;

        // sp.setTexture(this.otherCamera.targetTexture);
        // cc.log(this.mask);
        // cc.log(this.otherCamera.targetTexture)
        // this.mask.spriteFrame = sp;



        const texture = new cc.RenderTexture();
        texture.initWithSize(1280,720);
        const spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(texture);
        this.otherCamera.targetTexture = texture;
        this.mask.spriteFrame = spriteFrame;

    }

    start() {
    }

    // update (dt) {}
}
