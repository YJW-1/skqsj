"use strict";
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