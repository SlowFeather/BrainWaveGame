"use strict";
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