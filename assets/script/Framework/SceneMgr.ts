import { cocosz } from "./CocosZ";


const { ccclass, property } = cc._decorator;

@ccclass
export default class SceneMgr {


    private static _inst: SceneMgr;
    public static get inst(): SceneMgr {
        if (!SceneMgr._inst) {
            SceneMgr._inst = new SceneMgr();
        }
        return SceneMgr._inst;
    }

    private _activeScene: string = "";
    private _timeInterval: number = 0;
    public sceneName: string = "";

    public loadScene(name: string, onLunch: Function) {
        // cocosz.gameMgr.Num = 0;
        // cocosz.gameMgr.PlatformNum = 0;
        cocosz.unscheduleAllCallbacks();
        if (this._activeScene == name) {
            let curTime: number = (new Date()).getTime();
            if (curTime - this._timeInterval < 1000) {
                return;
            }
        }
        this._timeInterval = (new Date()).getTime();
        cc.director.loadScene(name, onLunch);
        if (this._activeScene == name) {
            return;
        }
        if (name == "Home") {
            // cocosz.audioMgr.stopAll();
            // cocosz.audioMgr.playHomeMusic();
        } else if (name == "Game") {
            // cocosz.audioMgr.playGameMusic();
            // cocosz.audioMgr.playHomeMusic();
        }
        this._activeScene = name;
        this.sceneName = this._activeScene
    }
}
