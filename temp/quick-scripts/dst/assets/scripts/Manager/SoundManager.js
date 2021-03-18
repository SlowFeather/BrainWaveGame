
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Manager/SoundManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWFuYWdlclxcU291bmRNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQStEO0FBRy9EO0lBQUE7SUFpQ0EsQ0FBQztJQS9CVSxzQkFBUyxHQUFoQixVQUFpQixPQUFlLEVBQUUsTUFBZTtRQUM3QyxJQUFNLFFBQVEsR0FBRywrQkFBYyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFdEQsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxHQUFHLEVBQUUsSUFBSTtZQUN6RCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLE1BQU0sRUFBRTtZQUNSLEVBQUUsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQztJQUNNLHVCQUFVLEdBQWpCLFVBQWtCLE9BQWUsRUFBRSxNQUFlO1FBQzlDLElBQU0sUUFBUSxHQUFHLCtCQUFjLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQztRQUV0RCxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLEdBQUcsRUFBRSxJQUFJO1lBQ3pELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksTUFBTSxFQUFFO1lBQ1IsRUFBRSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzQztJQUNMLENBQUM7SUFDTSxzQkFBUyxHQUFoQjtRQUNJLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVNLDJCQUFjLEdBQXJCLFVBQXNCLEdBQVc7UUFDN0IsRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNNLDJCQUFjLEdBQXJCLFVBQXNCLEdBQVc7UUFDN0IsRUFBRSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUwsbUJBQUM7QUFBRCxDQWpDQSxBQWlDQyxJQUFBOztBQUFBLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb3VuZFRhYmxlRGF0YSB9IGZyb20gXCIuLi9TdGF0aWNEYXRhcy9Tb3VuZFRhYmxlRGF0YVwiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNvdW5kTWFuYWdlciB7XG5cbiAgICBzdGF0aWMgcGxheU11c2ljKHNvdW5kSWQ6IG51bWJlciwgdm9sdW1lPzogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGFuaW1QYXRoID0gU291bmRUYWJsZURhdGEuZ2V0QnlJZChzb3VuZElkKS5wYXRoO1xuICAgICAgICBcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoYW5pbVBhdGgsIGNjLkF1ZGlvQ2xpcCwgZnVuY3Rpb24gKGVyciwgY2xpcCkge1xuICAgICAgICAgICAgdmFyIGF1ZGlvSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoY2xpcCwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodm9sdW1lKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSh2b2x1bWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBwbGF5RWZmZWN0KHNvdW5kSWQ6IG51bWJlciwgdm9sdW1lPzogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGFuaW1QYXRoID0gU291bmRUYWJsZURhdGEuZ2V0QnlJZChzb3VuZElkKS5wYXRoO1xuXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKGFuaW1QYXRoLCBjYy5BdWRpb0NsaXAsIGZ1bmN0aW9uIChlcnIsIGNsaXApIHtcbiAgICAgICAgICAgIHZhciBhdWRpb0lEID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodm9sdW1lKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKHZvbHVtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIHN0b3BNdXNpYygpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIFNldE11c2ljVm9sdW1lKG51bTogbnVtYmVyKSB7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKG51bSk7XG4gICAgfVxuICAgIHN0YXRpYyBTZXRTb3VuZFZvbHVtZShudW06IG51bWJlcikge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKG51bSk7XG4gICAgfVxuXG59O1xuIl19