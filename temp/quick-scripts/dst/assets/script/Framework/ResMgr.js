
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/ResMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXFJlc01nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRU0sSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1QztJQURBO1FBWVksZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFDdEIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUNsQixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBUSxFQUFFLENBQUM7SUE0Ry9CLENBQUM7ZUExSG9CLE1BQU07SUFJdkIsc0JBQWtCLGNBQUk7YUFBdEI7WUFDSSxJQUFJLENBQUMsUUFBTSxDQUFDLEtBQUssRUFBRTtnQkFDZixRQUFNLENBQUMsS0FBSyxHQUFHLElBQUksUUFBTSxFQUFFLENBQUM7YUFDL0I7WUFDRCxPQUFPLFFBQU0sQ0FBQyxLQUFLLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFPTSw2QkFBWSxHQUFuQixVQUFvQixJQUFjLEVBQUUsSUFBcUIsRUFBRSxRQUFrQixFQUFFLFFBQWtCO1FBQzdGLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDbkQ7SUFDTCxDQUFDO0lBRU0sd0JBQU8sR0FBZCxVQUFlLEdBQVcsRUFBRSxJQUFxQixFQUFFLFFBQWtCLEVBQUUsUUFBa0I7UUFBekYsaUJBcUJDO1FBcEJHLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBQyxjQUFzQixFQUFFLFVBQWtCLEVBQUUsSUFBUztZQUMvRSxJQUFJLFFBQVEsRUFBRTtnQkFDVixRQUFRLENBQUMsY0FBYyxFQUFFLFVB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LENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzdCO2dCQUNELE9BQU8sSUFBSSxDQUFDO2FBQ2Y7WUFDRCxLQUFLLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDZixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3RCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDL0I7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7YUFDZjtZQUNELEtBQUssRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNmLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUM5QjtnQkFDRCxPQUFPLElBQUksQ0FBQzthQUNmO1lBQ0QsT0FBTyxDQUFDLENBQUM7Z0JBQ0wsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO0lBQ0wsQ0FBQzs7SUF2SGdCLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0EwSDFCO0lBQUQsYUFBQztDQTFIRCxBQTBIQyxJQUFBO2tCQTFIb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc01nciB7XHJcblxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0OiBSZXNNZ3I7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBpbnN0KCk6IFJlc01nciB7XHJcbiAgICAgICAgaWYgKCFSZXNNZ3IuX2luc3QpIHtcclxuICAgICAgICAgICAgUmVzTWdyLl9pbnN0ID0gbmV3IFJlc01ncigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gUmVzTWdyLl9pbnN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3ByZWZhYkRpY3Q6IGFueSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBfaW1nRGljOiBhbnkgPSB7fTtcclxuICAgIHByaXZhdGUgX2F1ZGlvRGljOiBhbnkgPSB7fTtcclxuICAgIHByaXZhdGUgX2pzb25EaWM6IGFueSA9IHt9O1xyXG5cclxuICAgIHB1YmxpYyBsb2FkUmVzQXJyYXkodXJsczogc3RyaW5nW10sIHR5cGU6IHR5cGVvZiBjYy5Bc3NldCwgcHJvZ3Jlc3M6IEZ1bmN0aW9uLCBjb21wbGV0ZTogRnVuY3Rpb24pIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVybHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkUmVzKHVybHNbaV0sIHR5cGUsIHByb2dyZXNzLCBjb21wbGV0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkUmVzKHVybDogc3RyaW5nLCB0eXBlOiB0eXBlb2YgY2MuQXNzZXQsIHByb2dyZXNzOiBGdW5jdGlvbiwgY29tcGxldGU6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXModXJsLCB0eXBlLCAoY29tcGxldGVkQ291bnQ6IG51bWJlciwgdG90YWxDb3VudDogbnVtYmVyLCBpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgaWYgKHByb2dyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzcyhjb21wbGV0ZWRDb3VudCwgdG90YWxDb3VudCwgaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAoZXJyb3I6IEVycm9yLCByZXNvdXJjZTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09IGNjLlByZWZhYikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaFByZWZhYihyZXNvdXJjZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBjYy5TcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaFRleHR1cmUocmVzb3VyY2UpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gY2MuU3ByaXRlQXRsYXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hTcHJpdGVBdGxhcyhyZXNvdXJjZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBjYy5BdWRpb0NsaXApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hBdWRpb0NsaXAocmVzb3VyY2UpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT0gY2MuSnNvbkFzc2V0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoSnNvbkFzc2V0KHJlc291cmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29tcGxldGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlKGVycm9yLCByZXNvdXJjZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jYWNoUHJlZmFiKHJlczogYW55KSB7XHJcbiAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICB0aGlzLl9wcmVmYWJEaWN0W3Jlcy5uYW1lXSA9IHJlcztcclxuICAgICAgICAgICAgLy8gY2MubG9nKGDnvJPlrZggJHtyZXMubmFtZX0g5oiQ5Yqf77yBYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NhY2hUZXh0dXJlKHJlczogYW55KSB7XHJcbiAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICB0aGlzLl9pbWdEaWNbcmVzLm5hbWVdID0gcmVzO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coYOe8k+WtmCAke3Jlcy5uYW1lfSDmiJDlip/vvIFgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2NhY2hTcHJpdGVBdGxhcyhyZXM6IGNjLlNwcml0ZUF0bGFzKSB7XHJcbiAgICAgICAgbGV0IHNwZnJhbWVzOiBjYy5TcHJpdGVGcmFtZVtdID0gcmVzLmdldFNwcml0ZUZyYW1lcygpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BmcmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FjaFRleHR1cmUoc3BmcmFtZXNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jYWNoQXVkaW9DbGlwKHJlczogY2MuQXVkaW9DbGlwKSB7XHJcbiAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICB0aGlzLl9hdWRpb0RpY1tyZXMubmFtZV0gPSByZXM7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhg57yT5a2YICR7cmVzLm5hbWV9IOaIkOWKn++8gWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9jYWNoSnNvbkFzc2V0KHJlczogY2MuSnNvbkFzc2V0KSB7XHJcbiAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICB0aGlzLl9qc29uRGljW3Jlcy5uYW1lXSA9IHJlcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbGVhc2VSZXMocmVzTGlzdDogc3RyaW5nW10pIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWxlYXNlU2luZ2xlUmVzKHJlczogc3RyaW5nKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRSZXMobmFtZTogc3RyaW5nLCB0eXBlOiB0eXBlb2YgY2MuQXNzZXQpIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5QcmVmYWI6IHtcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyh0aGlzLl9wcmVmYWJEaWN0KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9wcmVmYWJEaWN0W25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ByZWZhYkRpY3RbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGNjLlNwcml0ZUZyYW1lOiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faW1nRGljW25hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ltZ0RpY1tuYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgY2MuQXVkaW9DbGlwOiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYXVkaW9EaWNbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fYXVkaW9EaWNbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIGNjLkpzb25Bc3NldDoge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2pzb25EaWNbbmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fanNvbkRpY1tuYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19