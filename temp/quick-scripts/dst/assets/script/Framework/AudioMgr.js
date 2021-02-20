
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/Framework/AudioMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6977eg5+s1GuLj70mrNiWin', 'AudioMgr');
// script/Framework/AudioMgr.ts

Object.defineProperty(exports, "__esModule", { value: true });
var CocosZ_1 = require("./CocosZ");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AudioMgr = /** @class */ (function () {
    function AudioMgr() {
        this._curMusicId = -1;
        this._curMusicClip = null;
        this._videoOn = false;
    }
    AudioMgr_1 = AudioMgr;
    Object.defineProperty(AudioMgr, "inst", {
        get: function () {
            if (!AudioMgr_1._inst) {
                AudioMgr_1._inst = new AudioMgr_1();
            }
            return AudioMgr_1._inst;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioMgr.prototype, "videoOn", {
        get: function () {
            return this._videoOn;
        },
        set: function (value) {
            this._videoOn = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AudioMgr.prototype, "AudioOn", {
        get: function () {
            return CocosZ_1.cocosz.dataMgr.AudioOn;
        },
        set: function (value) {
            CocosZ_1.cocosz.dataMgr.AudioOn = value;
            if (value) {
                if (this._curMusicClip) {
                    this._curMusicId = this._play(this._curMusicClip, true, 1);
                }
                //console.log("播放BGM");
            }
            else {
                this.stopAll();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 播放背景音乐
     */
    AudioMgr.prototype.playGameMusic = function () {
        cc.audioEngine.stopAll();
        var clip = CocosZ_1.cocosz.resMgr.getRes("bgm", cc.AudioClip);
        if (clip) {
            if (this._curMusicId != -1) {
                cc.audioEngine.stopAll();
                this._curMusicId = -1;
                this._curMusicId = null;
            }
            this._curMusicClip = clip;
            // this._curMusicId = this._play(clip, true, 0.6);
            cc.audioEngine.playMusic(clip, true);
        }
        else {
            cc.log("AudioClip GameBgm is not found!");
        }
    };
    /**切换前后台用 */
    AudioMgr.prototype.HomeBtnEffect = function (onEnd, volume) {
        // setTimeout(() => {
        //     if (onEnd) {
        //         onEnd();
        //     }
        // }, 100);
        if (volume === void 0) { volume = 0; }
        // let clip: cc.AudioClip = cocosz.resMgr.getRes("jingyin", cc.AudioClip);
        // if (clip) {
        //     this._play(clip, false, volume);
        // } else {
        //     cc.log("AudioClip btnClick is not found!");
        // }
    };
    /**
     * 播放胜利音效
     */
    AudioMgr.prototype.playVectoryEffect = function () {
        var clip = CocosZ_1.cocosz.resMgr.getRes("Success", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        }
        else {
            cc.log("AudioClip Success is not found!");
        }
    };
    /**
     * 播放失败音效
     */
    AudioMgr.prototype.playFeildEffect = function () {
        var clip = CocosZ_1.cocosz.resMgr.getRes("Feild", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        }
        else {
            cc.log("AudioClip Feild is not found!");
        }
    };
    /**
     * 播放转盘音效
     */
    AudioMgr.prototype.playLotteryEffect = function () {
        var clip = CocosZ_1.cocosz.resMgr.getRes("turntable", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        }
        else {
            cc.log("AudioClip turntable is not found!");
        }
    };
    /**
     * 播放人物即将冲线音效
     */
    AudioMgr.prototype.playBeforeVectoryEffect = function () {
        var clip = CocosZ_1.cocosz.resMgr.getRes("mHeroGlad", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        }
        else {
            cc.log("AudioClip mHeroGlad is not found!");
        }
    };
    /**
     * 播放人物掉落音效
     */
    AudioMgr.prototype.playBeforeFeildEffect1 = function () {
        var clip = CocosZ_1.cocosz.resMgr.getRes("beforeFeild", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        }
        else {
            cc.log("AudioClip beforeFeild is not found!");
        }
    };
    /**
     * 播放人物被蜜蜂遮音效
     */
    AudioMgr.prototype.playBeforeFeildEffect2 = function () {
        var clip = CocosZ_1.cocosz.resMgr.getRes("mHeroDieBee", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        }
        else {
            cc.log("AudioClip mHeroDieBee is not found!");
        }
    };
    /**
     * 播放人物被吸入风扇音效
     */
    AudioMgr.prototype.playBeforeFeildEffect3 = function () {
        var clip = CocosZ_1.cocosz.resMgr.getRes("mHeroDieFan", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        }
        else {
            cc.log("AudioClip mHeroDieFan is not found!");
        }
    };
    /**
     * 播放刮沙音效
     */
    AudioMgr.prototype.playsandEffect = function () {
        var clip = CocosZ_1.cocosz.resMgr.getRes("sand", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        }
        else {
            cc.log("AudioClip sand is not found!");
        }
    };
    /**
     * 播放风扇音效
     */
    AudioMgr.prototype.playfanEffect = function () {
        var clip = CocosZ_1.cocosz.resMgr.getRes("mFan", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        }
        else {
            cc.log("AudioClip mFan is not found!");
        }
    };
    /**
     * 播放移动挡板音效
     */
    AudioMgr.prototype.playMoveFloorEffect = function () {
        var clip = CocosZ_1.cocosz.resMgr.getRes("MoveFloor", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        }
        else {
            cc.log("AudioClip MoveFloor is not found!");
        }
    };
    /**
     * 播放蜜蜂音效
     */
    AudioMgr.prototype.playbeeEffect = function () {
        var clip = CocosZ_1.cocosz.resMgr.getRes("mBee", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        }
        else {
            cc.log("AudioClip mBee is not found!");
        }
    };
    /**
     * 播放火箭启动音效
     */
    AudioMgr.prototype.playRocketEffect1 = function () {
        var clip = CocosZ_1.cocosz.resMgr.getRes("mRocketStart", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        }
        else {
            cc.log("AudioClip mRocketStart is not found!");
        }
    };
    /**
     * 播放火箭爆炸音效
     */
    AudioMgr.prototype.playRocketEffect2 = function () {
        var clip = CocosZ_1.cocosz.resMgr.getRes("mRocketExplode", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        }
        else {
            cc.log("AudioClip mRocketExplode is not found!");
        }
    };
    /**
     * 播放手枪音效
     */
    AudioMgr.prototype.playGunEffect = function () {
        var clip = CocosZ_1.cocosz.resMgr.getRes("gun", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 0.3);
        }
        else {
            cc.log("AudioClip gun is not found!");
        }
    };
    /**
     * 播放仙人掌音效
     */
    AudioMgr.prototype.playmCactusEffect2 = function () {
        var clip = CocosZ_1.cocosz.resMgr.getRes("mCactusShot", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        }
        else {
            cc.log("AudioClip mCactusShot is not found!");
        }
    };
    /**
     * 播放气球爆炸音效
     */
    AudioMgr.prototype.playMetalStoneEffect2 = function () {
        var clip = CocosZ_1.cocosz.resMgr.getRes("mMetalStone", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        }
        else {
            cc.log("AudioClip mMetalStone is not found!");
        }
    };
    /**
     * 播放蝙蝠音效
     */
    AudioMgr.prototype.playBatEffect = function () {
        var clip = CocosZ_1.cocosz.resMgr.getRes("mBatPrickle", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        }
        else {
            cc.log("AudioClip mBatPrickle is not found!");
        }
    };
    /**
     * 播放木箱破碎音效
     */
    AudioMgr.prototype.playBoxEffect = function () {
        var clip = CocosZ_1.cocosz.resMgr.getRes("mStoneWood", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        }
        else {
            cc.log("AudioClip mStoneWood is not found!");
        }
    };
    /**
     * 播放主角被扎音效
     */
    AudioMgr.prototype.playRoleGloomyEffect2 = function () {
        var clip = CocosZ_1.cocosz.resMgr.getRes("mHeroGloomy", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        }
        else {
            cc.log("AudioClip mHeroGloomy is not found!");
        }
    };
    /**
     * 按钮
     */
    AudioMgr.prototype.playbtnEffect = function () {
        var clip = CocosZ_1.cocosz.resMgr.getRes("ClickBtn", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        }
        else {
            cc.log("AudioClip ClickBtn is not found!");
        }
    };
    AudioMgr.prototype.stopAll = function () {
        cc.audioEngine.stopAll();
    };
    AudioMgr.prototype.resumAllMusic = function () {
        if (this.AudioOn) {
            if (this._curMusicClip) {
                if (!this._videoOn && !cc.audioEngine.isMusicPlaying()) {
                    cc.audioEngine.stopAll();
                    cc.audioEngine.play(this._curMusicClip, true, 1);
                }
            }
        }
    };
    AudioMgr.prototype._play = function (clip, loop, volume) {
        // if (!this.AudioOn) return -1;
        if (!CocosZ_1.cocosz.dataMgr.AudioEffectOn)
            return -1;
        return cc.audioEngine.play(clip, loop, volume);
    };
    var AudioMgr_1;
    AudioMgr = AudioMgr_1 = __decorate([
        ccclass
    ], AudioMgr);
    return AudioMgr;
}());
exports.default = AudioMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxGcmFtZXdvcmtcXEF1ZGlvTWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBa0M7QUFFNUIsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUU1QztJQURBO1FBWVksZ0JBQVcsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUN6QixrQkFBYSxHQUFpQixJQUFJLENBQUM7UUFDbkMsYUFBUSxHQUFZLEtBQUssQ0FBQztJQXlVdEMsQ0FBQztpQkF0Vm9CLFFBQVE7SUFJekIsc0JBQWtCLGdCQUFJO2FBQXRCO1lBQ0ksSUFBSSxDQUFDLFVBQVEsQ0FBQyxLQUFLLEVBQUU7Z0JBQ2pCLFVBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxVQUFRLEVBQUUsQ0FBQzthQUNuQztZQUNELE9BQU8sVUFBUSxDQUFDLEtBQUssQ0FBQztRQUMxQixDQUFDOzs7T0FBQTtJQUtELHNCQUFXLDZCQUFPO2FBR2xCO1lBQ0ksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7YUFMRCxVQUFtQixLQUFjO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBS0Qsc0JBQVcsNkJBQU87YUFBbEI7WUFDSSxPQUFPLGVBQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2xDLENBQUM7YUFDRCxVQUFtQixLQUFjO1lBQzdCLGVBQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUUvQixJQUFJLEtBQUssRUFBRTtnQkFDUCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7b0JBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDOUQ7Z0JBQ0QsdUJBQXVCO2FBRTFCO2lCQUFNO2dCQUNILElB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Q3BELEVBQUUsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQ3pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNwRDthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRU8sd0JBQUssR0FBYixVQUFjLElBQWtCLEVBQUUsSUFBYSxFQUFFLE1BQWM7UUFDM0QsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxlQUFNLENBQUMsT0FBTyxDQUFDLGFBQWE7WUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNuRCxDQUFDOztJQW5WZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXNWNUI7SUFBRCxlQUFDO0NBdFZELEFBc1ZDLElBQUE7a0JBdFZvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29jb3N6IH0gZnJvbSBcIi4vQ29jb3NaXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdWRpb01nciB7XHJcblxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0OiBBdWRpb01ncjtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3QoKTogQXVkaW9NZ3Ige1xyXG4gICAgICAgIGlmICghQXVkaW9NZ3IuX2luc3QpIHtcclxuICAgICAgICAgICAgQXVkaW9NZ3IuX2luc3QgPSBuZXcgQXVkaW9NZ3IoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIEF1ZGlvTWdyLl9pbnN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2N1ck11c2ljSWQ6IG51bWJlciA9IC0xO1xyXG4gICAgcHJpdmF0ZSBfY3VyTXVzaWNDbGlwOiBjYy5BdWRpb0NsaXAgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfdmlkZW9PbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIHNldCB2aWRlb09uKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fdmlkZW9PbiA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCB2aWRlb09uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92aWRlb09uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgQXVkaW9PbigpIHtcclxuICAgICAgICByZXR1cm4gY29jb3N6LmRhdGFNZ3IuQXVkaW9PbjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgQXVkaW9Pbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGNvY29zei5kYXRhTWdyLkF1ZGlvT24gPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXJNdXNpY0NsaXApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1ck11c2ljSWQgPSB0aGlzLl9wbGF5KHRoaXMuX2N1ck11c2ljQ2xpcCwgdHJ1ZSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIuaSreaUvkJHTVwiKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdG9wQWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+6IOM5pmv6Z+z5LmQXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwbGF5R2FtZU11c2ljKCkge1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcclxuICAgICAgICBsZXQgY2xpcDogY2MuQXVkaW9DbGlwID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJiZ21cIiwgY2MuQXVkaW9DbGlwKTtcclxuICAgICAgICBpZiAoY2xpcCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fY3VyTXVzaWNJZCAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VyTXVzaWNJZCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VyTXVzaWNJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fY3VyTXVzaWNDbGlwID0gY2xpcDtcclxuICAgICAgICAgICAgLy8gdGhpcy5fY3VyTXVzaWNJZCA9IHRoaXMuX3BsYXkoY2xpcCwgdHJ1ZSwgMC42KTtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKGNsaXAsIHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIkF1ZGlvQ2xpcCBHYW1lQmdtIGlzIG5vdCBmb3VuZCFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC8qKuWIh+aNouWJjeWQjuWPsOeUqCAqL1xyXG4gICAgcHVibGljIEhvbWVCdG5FZmZlY3Qob25FbmQ6IEZ1bmN0aW9uLCB2b2x1bWUgPSAwKSB7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGlmIChvbkVuZCkge1xyXG4gICAgICAgIC8vICAgICAgICAgb25FbmQoKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sIDEwMCk7XHJcblxyXG4gICAgICAgIC8vIGxldCBjbGlwOiBjYy5BdWRpb0NsaXAgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcImppbmd5aW5cIiwgY2MuQXVkaW9DbGlwKTtcclxuICAgICAgICAvLyBpZiAoY2xpcCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLl9wbGF5KGNsaXAsIGZhbHNlLCB2b2x1bWUpO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhcIkF1ZGlvQ2xpcCBidG5DbGljayBpcyBub3QgZm91bmQhXCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+6IOc5Yip6Z+z5pWIXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgcGxheVZlY3RvcnlFZmZlY3QoKSB7XHJcbiAgICAgICAgbGV0IGNsaXA6IGNjLkF1ZGlvQ2xpcCA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiU3VjY2Vzc1wiLCBjYy5BdWRpb0NsaXApO1xyXG4gICAgICAgIGlmIChjbGlwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXkoY2xpcCwgZmFsc2UsIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIkF1ZGlvQ2xpcCBTdWNjZXNzIGlzIG5vdCBmb3VuZCFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+5aSx6LSl6Z+z5pWIXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwbGF5RmVpbGRFZmZlY3QoKSB7XHJcbiAgICAgICAgbGV0IGNsaXA6IGNjLkF1ZGlvQ2xpcCA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiRmVpbGRcIiwgY2MuQXVkaW9DbGlwKTtcclxuICAgICAgICBpZiAoY2xpcCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5KGNsaXAsIGZhbHNlLCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJBdWRpb0NsaXAgRmVpbGQgaXMgbm90IGZvdW5kIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+6L2s55uY6Z+z5pWIXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBwbGF5TG90dGVyeUVmZmVjdCgpIHtcclxuICAgICAgICBsZXQgY2xpcDogY2MuQXVkaW9DbGlwID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJ0dXJudGFibGVcIiwgY2MuQXVkaW9DbGlwKTtcclxuICAgICAgICBpZiAoY2xpcCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5KGNsaXAsIGZhbHNlLCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJBdWRpb0NsaXAgdHVybnRhYmxlIGlzIG5vdCBmb3VuZCFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvuS6uueJqeWNs+WwhuWGsue6v+mfs+aViFxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHBsYXlCZWZvcmVWZWN0b3J5RWZmZWN0KCkge1xyXG4gICAgICAgIGxldCBjbGlwOiBjYy5BdWRpb0NsaXAgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcIm1IZXJvR2xhZFwiLCBjYy5BdWRpb0NsaXApO1xyXG4gICAgICAgIGlmIChjbGlwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXkoY2xpcCwgZmFsc2UsIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIkF1ZGlvQ2xpcCBtSGVyb0dsYWQgaXMgbm90IGZvdW5kIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvuS6uueJqeaOieiQvemfs+aViFxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHBsYXlCZWZvcmVGZWlsZEVmZmVjdDEoKSB7XHJcbiAgICAgICAgbGV0IGNsaXA6IGNjLkF1ZGlvQ2xpcCA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiYmVmb3JlRmVpbGRcIiwgY2MuQXVkaW9DbGlwKTtcclxuICAgICAgICBpZiAoY2xpcCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5KGNsaXAsIGZhbHNlLCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJBdWRpb0NsaXAgYmVmb3JlRmVpbGQgaXMgbm90IGZvdW5kIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvuS6uueJqeiiq+icnOicgumBrumfs+aViFxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHBsYXlCZWZvcmVGZWlsZEVmZmVjdDIoKSB7XHJcbiAgICAgICAgbGV0IGNsaXA6IGNjLkF1ZGlvQ2xpcCA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwibUhlcm9EaWVCZWVcIiwgY2MuQXVkaW9DbGlwKTtcclxuICAgICAgICBpZiAoY2xpcCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5KGNsaXAsIGZhbHNlLCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJBdWRpb0NsaXAgbUhlcm9EaWVCZWUgaXMgbm90IGZvdW5kIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvuS6uueJqeiiq+WQuOWFpemjjuaJh+mfs+aViFxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHBsYXlCZWZvcmVGZWlsZEVmZmVjdDMoKSB7XHJcbiAgICAgICAgbGV0IGNsaXA6IGNjLkF1ZGlvQ2xpcCA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwibUhlcm9EaWVGYW5cIiwgY2MuQXVkaW9DbGlwKTtcclxuICAgICAgICBpZiAoY2xpcCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5KGNsaXAsIGZhbHNlLCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJBdWRpb0NsaXAgbUhlcm9EaWVGYW4gaXMgbm90IGZvdW5kIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7liK7mspnpn7PmlYhcclxuICAgICAqL1xyXG5cclxuXHJcbiAgICBwdWJsaWMgcGxheXNhbmRFZmZlY3QoKSB7XHJcbiAgICAgICAgbGV0IGNsaXA6IGNjLkF1ZGlvQ2xpcCA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwic2FuZFwiLCBjYy5BdWRpb0NsaXApO1xyXG4gICAgICAgIGlmIChjbGlwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXkoY2xpcCwgZmFsc2UsIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIkF1ZGlvQ2xpcCBzYW5kIGlzIG5vdCBmb3VuZCFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7po47miYfpn7PmlYhcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBwbGF5ZmFuRWZmZWN0KCkge1xyXG4gICAgICAgIGxldCBjbGlwOiBjYy5BdWRpb0NsaXAgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcIm1GYW5cIiwgY2MuQXVkaW9DbGlwKTtcclxuICAgICAgICBpZiAoY2xpcCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5KGNsaXAsIGZhbHNlLCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJBdWRpb0NsaXAgbUZhbiBpcyBub3QgZm91bmQhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvuenu+WKqOaMoeadv+mfs+aViFxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHBsYXlNb3ZlRmxvb3JFZmZlY3QoKSB7XHJcbiAgICAgICAgbGV0IGNsaXA6IGNjLkF1ZGlvQ2xpcCA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiTW92ZUZsb29yXCIsIGNjLkF1ZGlvQ2xpcCk7XHJcbiAgICAgICAgaWYgKGNsaXApIHtcclxuICAgICAgICAgICAgdGhpcy5fcGxheShjbGlwLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MubG9nKFwiQXVkaW9DbGlwIE1vdmVGbG9vciBpcyBub3QgZm91bmQhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+6Jyc6JyC6Z+z5pWIXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgcGxheWJlZUVmZmVjdCgpIHtcclxuICAgICAgICBsZXQgY2xpcDogY2MuQXVkaW9DbGlwID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJtQmVlXCIsIGNjLkF1ZGlvQ2xpcCk7XHJcbiAgICAgICAgaWYgKGNsaXApIHtcclxuICAgICAgICAgICAgdGhpcy5fcGxheShjbGlwLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MubG9nKFwiQXVkaW9DbGlwIG1CZWUgaXMgbm90IGZvdW5kIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7ngavnrq3lkK/liqjpn7PmlYhcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBwbGF5Um9ja2V0RWZmZWN0MSgpIHtcclxuICAgICAgICBsZXQgY2xpcDogY2MuQXVkaW9DbGlwID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJtUm9ja2V0U3RhcnRcIiwgY2MuQXVkaW9DbGlwKTtcclxuICAgICAgICBpZiAoY2xpcCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5KGNsaXAsIGZhbHNlLCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJBdWRpb0NsaXAgbVJvY2tldFN0YXJ0IGlzIG5vdCBmb3VuZCFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7ngavnrq3niIbngrjpn7PmlYhcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBwbGF5Um9ja2V0RWZmZWN0MigpIHtcclxuICAgICAgICBsZXQgY2xpcDogY2MuQXVkaW9DbGlwID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJtUm9ja2V0RXhwbG9kZVwiLCBjYy5BdWRpb0NsaXApO1xyXG4gICAgICAgIGlmIChjbGlwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXkoY2xpcCwgZmFsc2UsIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIkF1ZGlvQ2xpcCBtUm9ja2V0RXhwbG9kZSBpcyBub3QgZm91bmQhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+5omL5p6q6Z+z5pWIXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgcGxheUd1bkVmZmVjdCgpIHtcclxuICAgICAgICBsZXQgY2xpcDogY2MuQXVkaW9DbGlwID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJndW5cIiwgY2MuQXVkaW9DbGlwKTtcclxuICAgICAgICBpZiAoY2xpcCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5KGNsaXAsIGZhbHNlLCAwLjMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIkF1ZGlvQ2xpcCBndW4gaXMgbm90IGZvdW5kIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOaSreaUvuS7meS6uuaOjOmfs+aViFxyXG4gICAgICovXHJcblxyXG4gICAgcHVibGljIHBsYXltQ2FjdHVzRWZmZWN0MigpIHtcclxuICAgICAgICBsZXQgY2xpcDogY2MuQXVkaW9DbGlwID0gY29jb3N6LnJlc01nci5nZXRSZXMoXCJtQ2FjdHVzU2hvdFwiLCBjYy5BdWRpb0NsaXApO1xyXG4gICAgICAgIGlmIChjbGlwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BsYXkoY2xpcCwgZmFsc2UsIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhcIkF1ZGlvQ2xpcCBtQ2FjdHVzU2hvdCBpcyBub3QgZm91bmQhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+5rCU55CD54iG54K46Z+z5pWIXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgcGxheU1ldGFsU3RvbmVFZmZlY3QyKCkge1xyXG4gICAgICAgIGxldCBjbGlwOiBjYy5BdWRpb0NsaXAgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcIm1NZXRhbFN0b25lXCIsIGNjLkF1ZGlvQ2xpcCk7XHJcbiAgICAgICAgaWYgKGNsaXApIHtcclxuICAgICAgICAgICAgdGhpcy5fcGxheShjbGlwLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MubG9nKFwiQXVkaW9DbGlwIG1NZXRhbFN0b25lIGlzIG5vdCBmb3VuZCFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7onZnonaDpn7PmlYhcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBwbGF5QmF0RWZmZWN0KCkge1xyXG4gICAgICAgIGxldCBjbGlwOiBjYy5BdWRpb0NsaXAgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcIm1CYXRQcmlja2xlXCIsIGNjLkF1ZGlvQ2xpcCk7XHJcbiAgICAgICAgaWYgKGNsaXApIHtcclxuICAgICAgICAgICAgdGhpcy5fcGxheShjbGlwLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MubG9nKFwiQXVkaW9DbGlwIG1CYXRQcmlja2xlIGlzIG5vdCBmb3VuZCFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmkq3mlL7mnKjnrrHnoLTnoo7pn7PmlYhcclxuICAgICAqL1xyXG5cclxuICAgIHB1YmxpYyBwbGF5Qm94RWZmZWN0KCkge1xyXG4gICAgICAgIGxldCBjbGlwOiBjYy5BdWRpb0NsaXAgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcIm1TdG9uZVdvb2RcIiwgY2MuQXVkaW9DbGlwKTtcclxuICAgICAgICBpZiAoY2xpcCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5KGNsaXAsIGZhbHNlLCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJBdWRpb0NsaXAgbVN0b25lV29vZCBpcyBub3QgZm91bmQhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog5pKt5pS+5Li76KeS6KKr5omO6Z+z5pWIXHJcbiAgICAgKi9cclxuXHJcbiAgICBwdWJsaWMgcGxheVJvbGVHbG9vbXlFZmZlY3QyKCkge1xyXG4gICAgICAgIGxldCBjbGlwOiBjYy5BdWRpb0NsaXAgPSBjb2Nvc3oucmVzTWdyLmdldFJlcyhcIm1IZXJvR2xvb215XCIsIGNjLkF1ZGlvQ2xpcCk7XHJcbiAgICAgICAgaWYgKGNsaXApIHtcclxuICAgICAgICAgICAgdGhpcy5fcGxheShjbGlwLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2MubG9nKFwiQXVkaW9DbGlwIG1IZXJvR2xvb215IGlzIG5vdCBmb3VuZCFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDmjInpkq5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHBsYXlidG5FZmZlY3QoKSB7XHJcbiAgICAgICAgbGV0IGNsaXA6IGNjLkF1ZGlvQ2xpcCA9IGNvY29zei5yZXNNZ3IuZ2V0UmVzKFwiQ2xpY2tCdG5cIiwgY2MuQXVkaW9DbGlwKTtcclxuICAgICAgICBpZiAoY2xpcCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wbGF5KGNsaXAsIGZhbHNlLCAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5sb2coXCJBdWRpb0NsaXAgQ2xpY2tCdG4gaXMgbm90IGZvdW5kIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0b3BBbGwoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXN1bUFsbE11c2ljKCkge1xyXG4gICAgICAgIGlmICh0aGlzLkF1ZGlvT24pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1ck11c2ljQ2xpcCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl92aWRlb09uICYmICFjYy5hdWRpb0VuZ2luZS5pc011c2ljUGxheWluZygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5fY3VyTXVzaWNDbGlwLCB0cnVlLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9wbGF5KGNsaXA6IGNjLkF1ZGlvQ2xpcCwgbG9vcDogYm9vbGVhbiwgdm9sdW1lOiBudW1iZXIpIHtcclxuICAgICAgICAvLyBpZiAoIXRoaXMuQXVkaW9PbikgcmV0dXJuIC0xO1xyXG4gICAgICAgIGlmICghY29jb3N6LmRhdGFNZ3IuQXVkaW9FZmZlY3RPbikgcmV0dXJuIC0xO1xyXG4gICAgICAgIHJldHVybiBjYy5hdWRpb0VuZ2luZS5wbGF5KGNsaXAsIGxvb3AsIHZvbHVtZSk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=