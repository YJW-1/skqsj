import UIPage from "./UIPage";
import { cocosz } from "../Framework/CocosZ";
import Constant, { PageName } from "../Framework/Constant";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UiLoad extends UIPage {

    private _progress: cc.ProgressBar = null;
    private package1: boolean = false;
    private package2: boolean = false;

    private num: cc.Label = null;
    constructor() {
        super();
        this._init();
    }
    private _init() {
        lieyou_SdkManager.init(
            console.log("广告初始化完成！")
        );
        let Game: cc.Prefab = cocosz.resMgr.getRes(PageName.UiLoad, cc.Prefab);
        if (Game) {
            let node: cc.Node = cc.instantiate(Game);
            if (node) {
                this._page = node;
                cc.find("Canvas").addChild(node);
                node.active = false;
                node.position = cc.Vec3.ZERO;
                this._onLoad();
            }
        }
    }

    loadSubpackage(func) {
        var subpackages = [];
        var file_max = 0;//需要加载的文件总数
        var file_ach = 0;//已加载的文件数
        var _subpackages = cc.loader.downloader._subpackages;
        for (var a in _subpackages) {
            var subpackage = _subpackages[a];
            var len = 1;
            if (subpackage.uuids) {
                len = subpackage.uuids.length;
            }
            file_max += len;
            subpackages.push({ name: subpackage.name, file_num: len });
        }
        var loadsub = (index) => {
            if (subpackages.length == index) {
                func && func(1);//加载完成回调
                return;
            }
            console.log('加载分包', subpackages[index].name);
            cc.loader.downloader.loadSubpackage(subpackages[index].name, (res) => {
                //(已加载的文件数+当前分包加载进度*当前包文件数)/文件总数
                if (res) {
                    var progress = (file_ach + (res.progress / 100) * subpackages[index].file_num) / file_max;
                    if (progress < 1) (func && func(progress));//防止出现两次加载完成回调
                }
                else {
                    file_ach += subpackages[index].file_num;
                    var progress = (file_ach) / file_max;
                    if (progress < 1) (func && func(progress));//防止出现两次加载完成回调
                    loadsub(index + 1);
                }
            }, (err) => {
                if (err) {
                    console.log(err);
                    func && func(0);
                } else {
                    file_ach += subpackages[index].file_num;
                    var progress = (file_ach) / file_max;
                    if (progress < 1) (func && func(progress));//防止出现两次加载完成回调
                    loadsub(index + 1);
                }
            });
        }
        loadsub(0);
    }

    private _onLoad() {
        this._progress = this._page.getChildByName("scaleNode").getChildByName("ProgressBar").getComponent(cc.ProgressBar);
        this.num = this._page.getChildByName("scaleNode").getChildByName("num").getComponent(cc.Label);
        this._updateProgress(0);

        this.loadSubpackage((percent) => {
            cc.game.emit(Constant.E_GAME_LOGIC, { type: Constant.E_UPDATE_PROGRESS, data: percent });
            if (percent == 1) {
                console.log("完成分包加载！")
                cc.game.emit(Constant.E_LOAD_RES);
            }
        });
        
        // if (cc.sys.platform !== cc.sys.WECHAT_GAME) {
        //     lieyou_SdkManager.init();
        // }

        // cc.debug.setDisplayStats(true);
    }

    private _updateProgress(percent: number) {
        this._progress.progress = percent;
        this.num.string = Math.round(percent * 100) + "%"
    }

    protected onOpen() {
        this._registerEvent();
    }

    protected onClose() {
        this._unregisterEvent();
    }

    protected onDestroy() {
        cc.game.targetOff(this);
    }

    private _registerEvent() {
        cc.game.on(Constant.E_GAME_LOGIC, this._onGameMessageHandler, this);
    }

    private _unregisterEvent() {
        cc.game.targetOff(this);
    }

    private _onGameMessageHandler(event: any) {
        switch (event.type) {
            case Constant.E_UPDATE_PROGRESS: {
                this._updateProgress(event.data);
                break;
            }
        }
    }

}
