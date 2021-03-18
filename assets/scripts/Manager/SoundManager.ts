import { SoundTableData } from "../StaticDatas/SoundTableData";


export default class SoundManager {

    static playMusic(soundId: number, volume?: number) {
        const animPath = SoundTableData.getById(soundId).path;
        
        cc.loader.loadRes(animPath, cc.AudioClip, function (err, clip) {
            var audioID = cc.audioEngine.playMusic(clip, true);
        });
        if (volume) {
            cc.audioEngine.setMusicVolume(volume);
        }
    }
    static playEffect(soundId: number, volume?: number) {
        const animPath = SoundTableData.getById(soundId).path;

        cc.loader.loadRes(animPath, cc.AudioClip, function (err, clip) {
            var audioID = cc.audioEngine.playEffect(clip, false);
        });
        if (volume) {
            cc.audioEngine.setEffectsVolume(volume);
        }
    }
    static stopMusic() {
        cc.audioEngine.stopMusic();
    }

    static SetMusicVolume(num: number) {
        cc.audioEngine.setMusicVolume(num);
    }
    static SetSoundVolume(num: number) {
        cc.audioEngine.setEffectsVolume(num);
    }

};
