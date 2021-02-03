import { cocosz } from "./CocosZ";
import Constant, { GameState } from "./Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameCtr extends cc.Component {


    protected _gameState: GameState = GameState.None;

    onLoad() {
        // cc.director.getPhysicsManager().debugDrawFlags = 1;

        let widget: cc.Widget = this.node.addComponent(cc.Widget);
        widget.isAlignTop = true;
        widget.isAlignBottom = true;
        widget.isAlignLeft = true;
        widget.isAlignRight = true;
        widget.top = 0;
        widget.bottom = 0;
        widget.left = 0;
        widget.right = 0;

        this.node.width = cc.find("Canvas").width;
        this.node.height = cc.find("Canvas").height;

        cc.game.on(Constant.E_TOUCH_SCREEN, () => {
            if (this._gameState == GameState.Prepare || this._gameState == GameState.Start) {
                this._handleInput();
            }
        }, this);


        cc.game.on(Constant.E_MUSIC_STOP, (tips) => {
            console.log("-----------------关闭音乐")
            cocosz.audioMgr.stopAll();
        }, this);
    }

    protected _handleInput() { }

}
