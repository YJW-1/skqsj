

const { ccclass, property } = cc._decorator;

@ccclass
export default class ResMgr {


    private static _inst: ResMgr;
    public static get inst(): ResMgr {
        if (!ResMgr._inst) {
            ResMgr._inst = new ResMgr();
        }
        return ResMgr._inst;
    }

    private _prefabDict: any = {};
    private _imgDic: any = {};
    private _audioDic: any = {};
    private _jsonDic: any = {};

    public loadResArray(urls: string[], type: typeof cc.Asset, progress: Function, complete: Function) {
        for (let i = 0; i < urls.length; i++) {
            this.loadRes(urls[i], type, progress, complete);
        }
    }

    public loadRes(url: string, type: typeof cc.Asset, progress: Function, complete: Function) {
        cc.loader.loadRes(url, type, (completedCount: number, totalCount: number, item: any) => {
            if (progress) {
                progress(completedCount, totalCount, item);
            }
        }, (error: Error, resource: any) => {
            if (type == cc.Prefab) {
                this._cachPrefab(resource);
            } else if (type == cc.SpriteFrame) {
                this._cachTexture(resource);
            } else if (type == cc.SpriteAtlas) {
                this._cachSpriteAtlas(resource);
            } else if (type == cc.AudioClip) {
                this._cachAudioClip(resource);
            } else if (type == cc.JsonAsset) {
                this._cachJsonAsset(resource);
            }
            if (complete) {
                complete(error, resource);
            }
        });
    }

    private _cachPrefab(res: any) {
        if (res) {
            this._prefabDict[res.name] = res;
            // cc.log(`缓存 ${res.name} 成功！`);
        }
    }

    private _cachTexture(res: any) {
        if (res) {
            this._imgDic[res.name] = res;
            // cc.log(`缓存 ${res.name} 成功！`);
        }

    }

    private _cachSpriteAtlas(res: cc.SpriteAtlas) {
        let spframes: cc.SpriteFrame[] = res.getSpriteFrames();
        for (let i = 0; i < spframes.length; i++) {
            this._cachTexture(spframes[i]);
        }
    }

    private _cachAudioClip(res: cc.AudioClip) {
        if (res) {
            this._audioDic[res.name] = res;
            // cc.log(`缓存 ${res.name} 成功！`);
        }
    }

    private _cachJsonAsset(res: cc.JsonAsset) {
        if (res) {
            this._jsonDic[res.name] = res;
        }
    }

    public releaseRes(resList: string[]) {

    }

    private releaseSingleRes(res: string) {

    }

    public getRes(name: string, type: typeof cc.Asset) {
        switch (type) {
            case cc.Prefab: {
                // cc.log(this._prefabDict);
                if (this._prefabDict[name]) {
                    return this._prefabDict[name];
                }
                return null;
            }
            case cc.SpriteFrame: {
                if (this._imgDic[name]) {
                    return this._imgDic[name];
                }
                return null;
            }
            case cc.AudioClip: {
                if (this._audioDic[name]) {
                    return this._audioDic[name];
                }
                return null;
            }
            case cc.JsonAsset: {
                if (this._jsonDic[name]) {
                    return this._jsonDic[name];
                }
                return null;
            }
            default: {
                return null;
            }
        }
    }


}
