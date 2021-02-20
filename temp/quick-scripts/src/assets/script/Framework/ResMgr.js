"use strict";
cc._RF.push(module, '6284eNt0IRCz69K5gjMUFUY', 'ResMgr');
// script/Framework/ResMgr.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ResMgr = /** @class */ (function () {
    function ResMgr() {
        this._prefabDict = {};
        this._imgDic = {};
        this._audioDic = {};
        this._jsonDic = {};
    }
    ResMgr_1 = ResMgr;
    Object.defineProperty(ResMgr, "inst", {
        get: function () {
            if (!ResMgr_1._inst) {
                ResMgr_1._inst = new ResMgr_1();
            }
            return ResMgr_1._inst;
        },
        enumerable: true,
        configurable: true
    });
    ResMgr.prototype.loadResArray = function (urls, type, progress, complete) {
        for (var i = 0; i < urls.length; i++) {
            this.loadRes(urls[i], type, progress, complete);
        }
    };
    ResMgr.prototype.loadRes = function (url, type, progress, complete) {
        var _this = this;
        cc.loader.loadRes(url, type, function (completedCount, totalCount, item) {
            if (progress) {
                progress(completedCount, totalCount, item);
            }
        }, function (error, resource) {
            if (type == cc.Prefab) {
                _this._cachPrefab(resource);
            }
            else if (type == cc.SpriteFrame) {
                _this._cachTexture(resource);
            }
            else if (type == cc.SpriteAtlas) {
                _this._cachSpriteAtlas(resource);
            }
            else if (type == cc.AudioClip) {
                _this._cachAudioClip(resource);
            }
            else if (type == cc.JsonAsset) {
                _this._cachJsonAsset(resource);
            }
            if (complete) {
                complete(error, resource);
            }
        });
    };
    ResMgr.prototype._cachPrefab = function (res) {
        if (res) {
            this._prefabDict[res.name] = res;
            // cc.log(`缓存 ${res.name} 成功！`);
        }
    };
    ResMgr.prototype._cachTexture = function (res) {
        if (res) {
            this._imgDic[res.name] = res;
            // cc.log(`缓存 ${res.name} 成功！`);
        }
    };
    ResMgr.prototype._cachSpriteAtlas = function (res) {
        var spframes = res.getSpriteFrames();
        for (var i = 0; i < spframes.length; i++) {
            this._cachTexture(spframes[i]);
        }
    };
    ResMgr.prototype._cachAudioClip = function (res) {
        if (res) {
            this._audioDic[res.name] = res;
            // cc.log(`缓存 ${res.name} 成功！`);
        }
    };
    ResMgr.prototype._cachJsonAsset = function (res) {
        if (res) {
            this._jsonDic[res.name] = res;
        }
    };
    ResMgr.prototype.releaseRes = function (resList) {
    };
    ResMgr.prototype.releaseSingleRes = function (res) {
    };
    ResMgr.prototype.getRes = function (name, type) {
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
    };
    var ResMgr_1;
    ResMgr = ResMgr_1 = __decorate([
        ccclass
    ], ResMgr);
    return ResMgr;
}());
exports.default = ResMgr;

cc._RF.pop();