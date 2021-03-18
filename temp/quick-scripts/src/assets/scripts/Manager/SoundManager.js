"use strict";
cc._RF.push(module, 'dd02ah6ihxMfLmUGLqRAzT5', 'SoundManager');
// scripts/Manager/SoundManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SoundTableData_1 = require("../StaticDatas/SoundTableData");
var SoundManager = /** @class */ (function () {
    function SoundManager() {
    }
    SoundManager.playMusic = function (soundId, volume) {
        var animPath = SoundTableData_1.SoundTableData.getById(soundId).path;
        cc.loader.loadRes(animPath, cc.AudioClip, function (err, clip) {
            var audioID = cc.audioEngine.playMusic(clip, true);
        });
        if (volume) {
            cc.audioEngine.setMusicVolume(volume);
        }
    };
    SoundManager.playEffect = function (soundId, volume) {
        var animPath = SoundTableData_1.SoundTableData.getById(soundId).path;
        cc.loader.loadRes(animPath, cc.AudioClip, function (err, clip) {
            var audioID = cc.audioEngine.playEffect(clip, false);
        });
        if (volume) {
            cc.audioEngine.setEffectsVolume(volume);
        }
    };
    SoundManager.stopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    SoundManager.SetMusicVolume = function (num) {
        cc.audioEngine.setMusicVolume(num);
    };
    SoundManager.SetSoundVolume = function (num) {
        cc.audioEngine.setEffectsVolume(num);
    };
    return SoundManager;
}());
exports.default = SoundManager;
;

cc._RF.pop();