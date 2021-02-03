const { ccclass, property } = cc._decorator;

@ccclass
export default class UIPage {
    protected _page: cc.Node = null;

    public open(): void {
        if (this._page) {
            this._page.active = true;
            this.onOpen();
        } else {
            console.log("_page为空,没有界面");
        }
    }
    /**关闭 */
    public close(): void {
        if (this._page) {
            this._page.active = false;
        }
        this.onClose();
    }

    public destroy() {
        if (this._page) {
            this._page.destroy();
        }
        this.onDestroy();
    }

    protected getUIRoot(): cc.Node {
        return cc.find("Canvas");
    }

    public isValid(): boolean {
        return this._page && this._page.isValid;
    }

    protected onOpen(): void { }
    protected onClose(): void { }
    protected onDestroy(): void { }


}
