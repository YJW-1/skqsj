import { cocosz } from "./CocosZ";

const { ccclass, property } = cc._decorator;
@ccclass
export default class AudioMgr {


    private static _inst: AudioMgr;
    public static get inst(): AudioMgr {
        if (!AudioMgr._inst) {
            AudioMgr._inst = new AudioMgr();
        }
        return AudioMgr._inst;
    }

    private _curMusicId: number = -1;
    private _curMusicClip: cc.AudioClip = null;
    private _videoOn: boolean = false;
    public set videoOn(value: boolean) {
        this._videoOn = value;
    }
    public get videoOn() {
        return this._videoOn;
    }

    public get AudioOn() {
        return cocosz.dataMgr.AudioOn;
    }
    public set AudioOn(value: boolean) {
        cocosz.dataMgr.AudioOn = value;

        if (value) {
            if (this._curMusicClip) {
                this._curMusicId = this._play(this._curMusicClip, true, 1);
            }
            //console.log("播放BGM");

        } else {
            this.stopAll();
        }
    }

    /**
     * 播放背景音乐
     */
    public playGameMusic() {
        cc.audioEngine.stopAll();
        let clip: cc.AudioClip = cocosz.resMgr.getRes("bgm", cc.AudioClip);
        if (clip) {
            if (this._curMusicId != -1) {
                cc.audioEngine.stopAll();
                this._curMusicId = -1;
                this._curMusicId = null;
            }
            this._curMusicClip = clip;
            // this._curMusicId = this._play(clip, true, 0.6);
            cc.audioEngine.playMusic(clip, true);
        } else {
            cc.log("AudioClip GameBgm is not found!");
        }

    }
    /**切换前后台用 */
    public HomeBtnEffect(onEnd: Function, volume = 0) {
        // setTimeout(() => {
        //     if (onEnd) {
        //         onEnd();
        //     }
        // }, 100);

        // let clip: cc.AudioClip = cocosz.resMgr.getRes("jingyin", cc.AudioClip);
        // if (clip) {
        //     this._play(clip, false, volume);
        // } else {
        //     cc.log("AudioClip btnClick is not found!");
        // }
    }
    /**
     * 播放胜利音效
     */

    public playVectoryEffect() {
        let clip: cc.AudioClip = cocosz.resMgr.getRes("Success", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        } else {
            cc.log("AudioClip Success is not found!");
        }
    }

    /**
     * 播放失败音效
     */
    public playFeildEffect() {
        let clip: cc.AudioClip = cocosz.resMgr.getRes("Feild", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        } else {
            cc.log("AudioClip Feild is not found!");
        }
    }


    /**
     * 播放转盘音效
     */
    public playLotteryEffect() {
        let clip: cc.AudioClip = cocosz.resMgr.getRes("turntable", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        } else {
            cc.log("AudioClip turntable is not found!");
        }
    }


    /**
     * 播放人物即将冲线音效
     */

    public playBeforeVectoryEffect() {
        let clip: cc.AudioClip = cocosz.resMgr.getRes("mHeroGlad", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        } else {
            cc.log("AudioClip mHeroGlad is not found!");
        }
    }
    /**
     * 播放人物掉落音效
     */

    public playBeforeFeildEffect1() {
        let clip: cc.AudioClip = cocosz.resMgr.getRes("beforeFeild", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        } else {
            cc.log("AudioClip beforeFeild is not found!");
        }
    }
    /**
     * 播放人物被蜜蜂遮音效
     */

    public playBeforeFeildEffect2() {
        let clip: cc.AudioClip = cocosz.resMgr.getRes("mHeroDieBee", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        } else {
            cc.log("AudioClip mHeroDieBee is not found!");
        }
    }
    /**
     * 播放人物被吸入风扇音效
     */

    public playBeforeFeildEffect3() {
        let clip: cc.AudioClip = cocosz.resMgr.getRes("mHeroDieFan", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        } else {
            cc.log("AudioClip mHeroDieFan is not found!");
        }
    }

    /**
     * 播放刮沙音效
     */


    public playsandEffect() {
        let clip: cc.AudioClip = cocosz.resMgr.getRes("sand", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        } else {
            cc.log("AudioClip sand is not found!");
        }
    }
    /**
     * 播放风扇音效
     */

    public playfanEffect() {
        let clip: cc.AudioClip = cocosz.resMgr.getRes("mFan", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        } else {
            cc.log("AudioClip mFan is not found!");
        }
    }

    /**
     * 播放移动挡板音效
     */

    public playMoveFloorEffect() {
        let clip: cc.AudioClip = cocosz.resMgr.getRes("MoveFloor", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        } else {
            cc.log("AudioClip MoveFloor is not found!");
        }
    }
    /**
     * 播放蜜蜂音效
     */

    public playbeeEffect() {
        let clip: cc.AudioClip = cocosz.resMgr.getRes("mBee", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        } else {
            cc.log("AudioClip mBee is not found!");
        }
    }

    /**
     * 播放火箭启动音效
     */

    public playRocketEffect1() {
        let clip: cc.AudioClip = cocosz.resMgr.getRes("mRocketStart", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        } else {
            cc.log("AudioClip mRocketStart is not found!");
        }
    }
    /**
     * 播放火箭爆炸音效
     */

    public playRocketEffect2() {
        let clip: cc.AudioClip = cocosz.resMgr.getRes("mRocketExplode", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        } else {
            cc.log("AudioClip mRocketExplode is not found!");
        }
    }
    /**
     * 播放手枪音效
     */

    public playGunEffect() {
        let clip: cc.AudioClip = cocosz.resMgr.getRes("gun", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 0.3);
        } else {
            cc.log("AudioClip gun is not found!");
        }
    }
    /**
     * 播放仙人掌音效
     */

    public playmCactusEffect2() {
        let clip: cc.AudioClip = cocosz.resMgr.getRes("mCactusShot", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        } else {
            cc.log("AudioClip mCactusShot is not found!");
        }
    }
    /**
     * 播放气球爆炸音效
     */

    public playMetalStoneEffect2() {
        let clip: cc.AudioClip = cocosz.resMgr.getRes("mMetalStone", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        } else {
            cc.log("AudioClip mMetalStone is not found!");
        }
    }
    /**
     * 播放蝙蝠音效
     */

    public playBatEffect() {
        let clip: cc.AudioClip = cocosz.resMgr.getRes("mBatPrickle", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        } else {
            cc.log("AudioClip mBatPrickle is not found!");
        }
    }
    /**
     * 播放木箱破碎音效
     */

    public playBoxEffect() {
        let clip: cc.AudioClip = cocosz.resMgr.getRes("mStoneWood", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        } else {
            cc.log("AudioClip mStoneWood is not found!");
        }
    }
    /**
     * 播放主角被扎音效
     */

    public playRoleGloomyEffect2() {
        let clip: cc.AudioClip = cocosz.resMgr.getRes("mHeroGloomy", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        } else {
            cc.log("AudioClip mHeroGloomy is not found!");
        }
    }
    /**
     * 按钮
     */
    public playbtnEffect() {
        let clip: cc.AudioClip = cocosz.resMgr.getRes("ClickBtn", cc.AudioClip);
        if (clip) {
            this._play(clip, false, 1);
        } else {
            cc.log("AudioClip ClickBtn is not found!");
        }
    }

    public stopAll() {
        cc.audioEngine.stopAll();
    }

    public resumAllMusic() {
        if (this.AudioOn) {
            if (this._curMusicClip) {
                if (!this._videoOn && !cc.audioEngine.isMusicPlaying()) {
                    cc.audioEngine.stopAll();
                    cc.audioEngine.play(this._curMusicClip, true, 1);
                }
            }
        }
    }

    private _play(clip: cc.AudioClip, loop: boolean, volume: number) {
        // if (!this.AudioOn) return -1;
        if (!cocosz.dataMgr.AudioEffectOn) return -1;
        return cc.audioEngine.play(clip, loop, volume);
    }


}
