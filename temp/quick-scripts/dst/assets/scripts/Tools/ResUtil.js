
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
    ResUtil.LoadDir = function (dirpath, callfun) {
        cc.loader.loadResDir(dirpath, function (err, assets) {
            if (callfun) {
                callfun(assets);
            }
        });
    };
    ResUtil.ReleaseRes = function (res) {
        cc.loader.releaseAsset(res);
    };
    // public static 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVG9vbHNcXFJlc1V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNEM7QUFFNUM7SUFBQTtJQW1FQSxDQUFDO0lBM0RpQixrQkFBVSxHQUF4QixVQUF5QixVQUFrQixFQUFFLE9BQWtCO1FBRTNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUUsVUFBVSxFQUFFO2dCQUMxQixPQUFPLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQztnQkFDcEIsSUFBSSxPQUFPLEVBQUU7b0JBQ1QsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNwQjtnQkFDRCxPQUFPO2FBQ1Y7U0FDSjtRQUVELG9DQUFvQztRQUNwQyxJQUFJLElBQUksR0FBRSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQXVCLENBQUM7UUFDbEYsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxPQUFPLEVBQUU7WUFDVCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakI7UUFHRCx3REFBd0Q7UUFDeEQsaUJBQWlCO1FBQ2pCLDhCQUE4QjtRQUM5QixrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLHFCQUFxQjtRQUNyQiwyQkFBMkI7UUFDM0IsUUFBUTtRQUNSLE1BQU07SUFDVixDQUFDO0lBRWEscUJBQWEsR0FBM0IsVUFBNEIsSUFBWSxFQUFFLE9BQU87UUFDN0MsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUUsU0FBUztZQUNqRCxJQUFJLEdBQUcsRUFBRTtnQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQixPQUFPO2FBQ1Y7WUFDRCxJQUFJLE9BQU8sRUFBRTtnQkFDVCxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDdEI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFHYSxlQUFPLEdBQXJCLFVBQXNCLE9BQWUsRUFBRSxPQUFPO1FBQzFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxVQUFVLEdBQUcsRUFBRSxNQUFNO1lBRS9DLElBQUksT0FBTyxFQUFFO2dCQUNULE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNuQjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNhLGtCQUFVLEdBQXhCLFVBQXlCLEdBQUc7UUFDeEIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQS9ERCxpQkFBaUI7SUFDSCxxQkFBYSxHQUFnQyxFQUFFLENBQUE7SUFFL0Msa0JBQVUsR0FBaUIsSUFBSSxXQUFJLEVBQVcsQ0FBQztJQThEakUsY0FBQztDQW5FRCxBQW1FQyxJQUFBO2tCQW5Fb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3QgfSBmcm9tIFwiLi9EYXRhU3RydWN0dXJlL0xpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzVXRpbCB7XG4gICAgXG4gICAgLy8gcHVibGljIHN0YXRpYyBcbiAgICBwdWJsaWMgc3RhdGljIFJlc0RpY3Rpb25hcnk6IHsgW2tleTogc3RyaW5nXTogY2MuQXNzZXQgfSA9IHt9IFxuXG4gICAgcHVibGljIHN0YXRpYyBwcmVmYWJMaXN0Okxpc3Q8Y2MuTm9kZT4gPSBuZXcgTGlzdDxjYy5Ob2RlPigpO1xuXG5cbiAgICBwdWJsaWMgc3RhdGljIExvYWRQcmVmYWIocHJlZmFibmFtZTogc3RyaW5nLCBjYWxsZnVuPzogRnVuY3Rpb24pIHtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucHJlZmFiTGlzdC5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5wcmVmYWJMaXN0LkdldChpKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm5hbWU9PXByZWZhYm5hbWUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFjdGl2ZT10cnVlO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsZnVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxmdW4oZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8v55u05o6l5Yqg6L29IOi/memHjOeahHVua25vd+aYr+WboOS4unZzY29kZeivhuWIq+S4jeWHuuadpeaYr+S4qm5vZGVcbiAgICAgICAgbGV0IG5vZGUgPWNjLmluc3RhbnRpYXRlKFJlc1V0aWwuUmVzRGljdGlvbmFyeVtwcmVmYWJuYW1lXSkgYXMgdW5rbm93biBhcyBjYy5Ob2RlO1xuICAgICAgICBsZXQgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKFwiR2FtZVwiKS5nZXRDaGlsZEJ5TmFtZShcIlNjZW5lXCIpO1xuICAgICAgICBub2RlLnNldFBhcmVudChzY2VuZSlcbiAgICAgICAgdGhpcy5wcmVmYWJMaXN0LkFkZChub2RlKTtcbiAgICAgICAgaWYgKGNhbGxmdW4pIHtcbiAgICAgICAgICAgIGNhbGxmdW4obm9kZSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vIGNjLmxvYWRlci5sb2FkUmVzKHBhdGgsIGNjLlByZWZhYiwgKGVyciwgcHJlZmFiKSA9PiB7XG4gICAgICAgIC8vICAgICBpZiAoZXJyKSB7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAvLyAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGlmIChjYWxsZnVuKSB7XG4gICAgICAgIC8vICAgICAgICAgY2FsbGZ1bihwcmVmYWIpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIExvYWRBdWRpb0NsaXAocGF0aDogc3RyaW5nLCBjYWxsZnVuKSB7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHBhdGgsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgYXVkaW9jbGlwKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYWxsZnVuKSB7XG4gICAgICAgICAgICAgICAgY2FsbGZ1bihhdWRpb2NsaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZERpcihkaXJwYXRoOiBzdHJpbmcsIGNhbGxmdW4pe1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlc0RpcihkaXJwYXRoLCBmdW5jdGlvbiAoZXJyLCBhc3NldHMpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGNhbGxmdW4pIHtcbiAgICAgICAgICAgICAgICBjYWxsZnVuKGFzc2V0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIFJlbGVhc2VSZXMocmVzKXtcbiAgICAgICAgY2MubG9hZGVyLnJlbGVhc2VBc3NldChyZXMpO1xuICAgIH1cblxufSJdfQ==