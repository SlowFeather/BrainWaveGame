import { List } from "./DataStructure/List";

export default class ResUtil {
    
    /**
     * 资源名称与资源列表
     *
     * @static
     * @type {{ [key: string]: cc.Asset }}
     * @memberof ResUtil
     */
    public static ResDictionary: { [key: string]: cc.Asset } = {} 

    public static prefabList:List<cc.Node> = new List<cc.Node>();


    public static LoadPrefab(prefabname: string, callfun?: Function) {

        for (let i = 0; i < this.prefabList.Count; i++) {
            const element = this.prefabList.Get(i);
            if (element.name==prefabname) {
                element.active=true;
                if (callfun) {
                    callfun(element);
                }
                return;
            }
        }

        //直接加载 这里的unknow是因为vscode识别不出来是个node
        let node =cc.instantiate(ResUtil.ResDictionary[prefabname]) as unknown as cc.Node;
        let scene = cc.director.getScene().getChildByName("Game").getChildByName("Scene");
        node.setParent(scene)
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
    }

    public static LoadAudioClip(path: string, callfun) {
        cc.loader.loadRes(path, cc.AudioClip, (err, audioclip) => {
            if (err) {
                console.error(err);
                return;
            }
            if (callfun) {
                callfun(audioclip);
            }
        });
    }


    public static LoadDir(dirpath: string, callfun,errorfun){
        cc.loader.loadResDir(dirpath, function (err, assets) {
            
            if (err) {
                errorfun();
            }
            if (callfun) {
                callfun(assets);
            }

        });
    }
    public static ReleaseRes(res){
        cc.loader.releaseAsset(res);
    }

}