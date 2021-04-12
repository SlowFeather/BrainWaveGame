
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Tools/ResUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '63cd2C1vwBIJJzRRORuoDkV', 'ResUtil');
// scripts/Tools/ResUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var List_1 = require("./DataStructure/List");
var ResUtil = /** @class */ (function () {
    function ResUtil() {
    }
    ResUtil.LoadPrefab = function (prefabname, callfun) {
        for (var i = 0; i < this.prefabList.Count; i++) {
            var element = this.prefabList.Get(i);
            if (element.name == prefabname) {
                element.active = true;
                if (callfun) {
                    callfun(element);
                }
                return;
            }
        }
        //直接加载 这里的unknow是因为vscode识别不出来是个node
        var node = cc.instantiate(ResUtil.ResDictionary[prefabname]);
        var scene = cc.director.getScene().getChildByName("Game").getChildByName("Scene");
        node.setParent(scene);
        this.prefabList.Add(node);
        if (callfun) {
            callfun(node);
        }
        // cc.loader.loadRes(path, cc.Prefab, (err, prefab) => {
        //     if (err) {
        //         console.error(err);
        //         return;
        //     }
        //     if (callfun) {
        //         callfun(prefab);
        //     }
        // });
    };
    ResUtil.LoadAudioClip = function (path, callfun) {
        cc.loader.loadRes(path, cc.AudioClip, function (err, audioclip) {
            if (err) {
                console.error(err);
                return;
            }
            if (callfun) {
                callfun(audioclip);
            }
        });
    };
    ResUtil.LoadDir = function (dirpath, callfun, errorfun) {
        cc.loader.loadResDir(dirpath, function (err, assets) {
            if (err) {
                errorfun();
            }
            if (callfun) {
                callfun(assets);
            }
        });
    };
    ResUtil.ReleaseRes = function (res) {
        cc.loader.releaseAsset(res);
    };
    /**
     * 资源名称与资源列表
     *
     * @static
     * @type {{ [key: string]: cc.Asset }}
     * @memberof ResUtil
     */
    ResUtil.ResDictionary = {};
    ResUtil.prefabList = new List_1.List();
    return ResUtil;
}());
exports.default = ResUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVG9vbHNcXFJlc1V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNEM7QUFFNUM7SUFBQTtJQTZFQSxDQUFDO0lBL0RpQixrQkFBVSxHQUF4QixVQUF5QixVQUFrQixFQUFFLE9BQWtCO1FBRTNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUUsVUFBVSxFQUFFO2dCQUMxQixPQUFPLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxPQUFPLEVBQUU7b0JBQ1QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNwQjtnQkFDRCxPQUFPO2FBQ1Y7U0FDSjtRQUVELG9DQUFvQztRQUNwQyxJQUFJLElBQUksR0FBRSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQXVCLENBQUM7UUFDbEYsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxPQUFPLEVBQUU7WUFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakI7UUFHRCx3REFBd0Q7UUFDeEQsaUJBQWlCO1FBQ2pCLDhCQUE4QjtRQUM5QixrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0IsUUFBUTtRQUNSLE1BQU07SUFDVixDQUFDO0lBRWEscUJBQWEsR0FBM0IsVUFBNEIsSUFBWSxFQUFFLE9BQU87UUFDN0MsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUUsU0FBUztZQUNqRCxJQUFJLEdBQUcsRUFBRTtnQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixPQUFPO2FBQ1Y7WUFDRCxJQUFJLE9BQU8sRUFBRTtnQkFDVCxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDdEI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFHYSxlQUFPLEdBQXJCLFVBQXNCLE9BQWUsRUFBRSxPQUFPLEVBQUMsUUFBUTtRQUNuRCxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxHQUFHLEVBQUUsTUFBTTtZQUUvQyxJQUFJLEdBQUcsRUFBRTtnQkFDTCxRQUFRLEVBQUUsQ0FBQzthQUNkO1lBQ0QsSUFBSSxPQUFPLEVBQUU7Z0JBQ1QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ25CO1FBRUwsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ2Esa0JBQVUsR0FBeEIsVUFBeUIsR0FBRztRQUN4QixFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBekVEOzs7Ozs7T0FNRztJQUNXLHFCQUFhLEdBQWdDLEVBQUUsQ0FBQTtJQUUvQyxrQkFBVSxHQUFpQixJQUFJLFdBQUksRUFBVyxDQUFDO0lBa0VqRSxjQUFDO0NBN0VELEFBNkVDLElBQUE7a0JBN0VvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdCB9IGZyb20gXCIuL0RhdGFTdHJ1Y3R1cmUvTGlzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNVdGlsIHtcbiAgICBcbiAgICAvKipcbiAgICAgKiDotYTmupDlkI3np7DkuI7otYTmupDliJfooahcbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAdHlwZSB7eyBba2V5OiBzdHJpbmddOiBjYy5Bc3NldCB9fVxuICAgICAqIEBtZW1iZXJvZiBSZXNVdGlsXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBSZXNEaWN0aW9uYXJ5OiB7IFtrZXk6IHN0cmluZ106IGNjLkFzc2V0IH0gPSB7fSBcblxuICAgIHB1YmxpYyBzdGF0aWMgcHJlZmFiTGlzdDpMaXN0PGNjLk5vZGU+ID0gbmV3IExpc3Q8Y2MuTm9kZT4oKTtcblxuXG4gICAgcHVibGljIHN0YXRpYyBMb2FkUHJlZmFiKHByZWZhYm5hbWU6IHN0cmluZywgY2FsbGZ1bj86IEZ1bmN0aW9uKSB7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByZWZhYkxpc3QuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMucHJlZmFiTGlzdC5HZXQoaSk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5uYW1lPT1wcmVmYWJuYW1lKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hY3RpdmU9dHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGZ1bikge1xuICAgICAgICAgICAgICAgICAgICBjYWxsZnVuKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL+ebtOaOpeWKoOi9vSDov5nph4znmoR1bmtub3fmmK/lm6DkuLp2c2NvZGXor4bliKvkuI3lh7rmnaXmmK/kuKpub2RlXG4gICAgICAgIGxldCBub2RlID1jYy5pbnN0YW50aWF0ZShSZXNVdGlsLlJlc0RpY3Rpb25hcnlbcHJlZmFibmFtZV0pIGFzIHVua25vd24gYXMgY2MuTm9kZTtcbiAgICAgICAgbGV0IHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZShcIkdhbWVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJTY2VuZVwiKTtcbiAgICAgICAgbm9kZS5zZXRQYXJlbnQoc2NlbmUpXG4gICAgICAgIHRoaXMucHJlZmFiTGlzdC5BZGQobm9kZSk7XG4gICAgICAgIGlmIChjYWxsZnVuKSB7XG4gICAgICAgICAgICBjYWxsZnVuKG5vZGUpO1xuICAgICAgICB9XG5cblxuICAgICAgICAvLyBjYy5sb2FkZXIubG9hZFJlcyhwYXRoLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAvLyAgICAgaWYgKGVycikge1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgLy8gICAgICAgICByZXR1cm47XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBpZiAoY2FsbGZ1bikge1xuICAgICAgICAvLyAgICAgICAgIGNhbGxmdW4ocHJlZmFiKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBMb2FkQXVkaW9DbGlwKHBhdGg6IHN0cmluZywgY2FsbGZ1bikge1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhwYXRoLCBjYy5BdWRpb0NsaXAsIChlcnIsIGF1ZGlvY2xpcCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FsbGZ1bikge1xuICAgICAgICAgICAgICAgIGNhbGxmdW4oYXVkaW9jbGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBwdWJsaWMgc3RhdGljIExvYWREaXIoZGlycGF0aDogc3RyaW5nLCBjYWxsZnVuLGVycm9yZnVuKXtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNEaXIoZGlycGF0aCwgZnVuY3Rpb24gKGVyciwgYXNzZXRzKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBlcnJvcmZ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbGxmdW4pIHtcbiAgICAgICAgICAgICAgICBjYWxsZnVuKGFzc2V0cyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBzdGF0aWMgUmVsZWFzZVJlcyhyZXMpe1xuICAgICAgICBjYy5sb2FkZXIucmVsZWFzZUFzc2V0KHJlcyk7XG4gICAgfVxuXG59Il19