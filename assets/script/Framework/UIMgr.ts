
import Constant, { PageName, SkinInfo, PanelName } from "./Constant";
import UIPage from "../Ui/UIPage";
import UiFailed from "../Ui/UiFailed";
import UiHome from "../Ui/UiHome";
import UiLoad from "../Ui/UiLoad";
import UiShop from "../Ui/UiShop";
import UiSucceed from "../Ui/UiSucceed";
import UiGame from "../Ui/UiGame";
import PausePanel from "../Ui/PausePanel";
// import CoinTipsPanel from "../Ui/CoinTipsPanel";
import UISign from "../Ui/UiSign";
// import TrialPanel from "../Ui/TrialPanel";
import UiSet from "../Ui/UiSet";
import LevelPanel from "../Ui/LevelPanel";
import UiLottery from "../Ui/UiLottery";
import UiBeforeSucceed from "../Ui/UiBeforeSucceed";
import UiResurrection from "../Ui/UiResurrection";
// import UiLoadGame from "../Ui/UiLoadGame";



const { ccclass, property } = cc._decorator;

@ccclass
export default class UIMgr extends cc.Component {

    

    private static _inst: UIMgr;
    public static get inst(): UIMgr {
        if (!UIMgr._inst) {
            UIMgr._inst = new UIMgr();
        }
        return UIMgr._inst;
    }

    private _pageDict: any = {};
    private _panelDict: any = {};


    /**打开界面*/
    public openPage(name: string) {
        this.closeAllPanel();
        cc.log(name, "----打开界面---------");
        for (let key in this._pageDict) {
            if (key && this._pageDict[key]) {
                this._pageDict[key].close();
            }
        }
        if (this._pageDict[name] && this._pageDict[name].isValid()) {
            this._pageDict[name].open();
        } else {
            let page: UIPage = this._createUI(name);
            if (page) {
                this._pageDict[name] = page;
                page.open();
            }
        }
    }
    //打开弹窗
    public openPanel(name: string) {
        if (this._panelDict[name] && this._panelDict[name].isValid()) {
            this._panelDict[name].open();
        } else {
            let panel: UIPage = this._createUI(name);
            if (panel) {
                this._panelDict[name] = panel;
                panel.open();
            }
        }
    }

    public closeAllPanel() {
        for (let key in this._panelDict) {
            if (key && this._panelDict[key]) {
                this._panelDict[key].close();
            }
        }
    }

    public closePanel(name: string) {
        if (this._panelDict[name] && this._panelDict[name].isValid()) {
            this._panelDict[name].close();
        }
    }

    private _createUI(name: string) {
        switch (name) {
            case PanelName.UiFailed: {
                return new UiFailed();
            }
            case PageName.UiHome: {
                return new UiHome();
            }
            case PageName.UiLoad: {
                return new UiLoad();
            }
            case PanelName.UiSucceed: {
                return new UiSucceed();
            }
            case PageName.UiGame: {
                return new UiGame();
            }
            case PanelName.UiShop: {
                return new UiShop();
            }
            case PanelName.UiSet: {
                return new UiSet();
            }
            case PanelName.LevelPanel: {
                return new LevelPanel();
            }
            case PanelName.PausePanel: {
                return new PausePanel();
            }
            case PanelName.CoinTipsPanel: {
                return new CoinTipsPanel();
            }
            case PanelName.UiSign: {
                return new UISign();
            }
            case PanelName.TrialPanel: {
                return new TrialPanel();
            }
            case PanelName.UiLottery: {
                return new UiLottery();
            }
            case PanelName.UiBeforeSucceed: {
                return new UiBeforeSucceed();
            }
            case PanelName.UiResurrection: {
                return new UiResurrection();
            }
            case PageName.UiLoadGame: {
                return new UiLoadGame();
            }
            default: {
                return null;
            }
        }
    }
}


