import { List } from "./DataStructure/List";
import ResUtil from "./ResUtil";
import UILoader from "./UILoader";


const { ccclass, property } = cc._decorator;
/**
* UIUtil
* UI工具
* @ author: SlowFeather
* @ wechat: BackedByTheWT
* @ data: 2020-07-06 15:13
*/
@ccclass
export default class UIUtil {

    public static uiList:List<cc.Node> = new List<cc.Node>();

    /**
     * 显示一个UI
     * UIUtil.ShowUI("LoadingUI");
     * @static
     * @param {string} uiname
     * @param {Function} [callFun]
     * @memberof UIUtil
     */
    public static ShowUI(uiname:string, callFun?: Function) {
        for (let i = 0; i < this.uiList.Count; i++) {
            const element = this.uiList.Get(i);
            if (element.name==uiname) {
                element.active=true;
                if (callFun) {
                    callFun(element);
                }
                return;
            }
        }

        //直接加载 这里的unknow是因为vscode识别不出来是个node
        let node =cc.instantiate(ResUtil.ResDictionary[uiname]) as unknown as cc.Node;
        let scene = cc.director.getScene().getChildByName("Game").getChildByName("Canvas")
        node.setParent(scene)
        this.uiList.Add(node);
        if (callFun) {
            callFun(node);
        }


        //先下载再加载

        // UILoader.Instance.loadPrefabRes("prefabs/ui/" + uiname + "/" + uiname + "", (loadedui) => {
        //     let ui = cc.instantiate(loadedui) as cc.Node
        //     ui.name = uiname;
        //     // let scene = cc.director.getScene();
        //     let scene = cc.director.getScene().getChildByName("Game").getChildByName("Canvas")
        //     ui.setParent(scene)
        //     this.uiList.Add(ui);
        //     if (callFun) {
        //         callFun(ui);
        //     }
        //     console.log("ui->"+this.uiList.Count);
        // })
        
        
    }

    public static ShowBaseUI(uiname:string, callFun?: Function) {
        UILoader.Instance.loadPrefabRes("base/ui/" + uiname + "/" + uiname + "", (loadedui) => {
            let ui = cc.instantiate(loadedui) as cc.Node
            ui.name = uiname;
            // let scene = cc.director.getScene();
            let scene = cc.director.getScene().getChildByName("Game").getChildByName("Canvas")
            ui.setParent(scene)
            if (callFun) {
                callFun(ui);
            }
            this.uiList.Add(ui);
        })
    }

    
    /**
     * 隐藏一个UI
     *
     * @static
     * @param {string} uiname
     * @memberof UIUtil
     */
    public static HideUI(uiname:string){      
        for (let i = 0; i < this.uiList.Count; i++) {
            const element = this.uiList.Get(i);
            if (element.name==uiname) {
                element.active=false;
            }
        }
        // let scene = cc.director.getScene().getChildByName("Game").getChildByName("Canvas")
        // let ui = scene.getChildByName(uiname);
        // if (!ui) {
        //     console.error("没有这个UI：" + uiname);
        //     return
        // }
        // if (ui != null) ui.active=false;
    }

    
    /**
     * 移除一个UI
     *
     * @static
     * @param {string} uiname
     * @memberof UIUtil
     */
    public static RemoveUI(uiname:string) {
        for (let i = 0; i < this.uiList.Count; i++) {
            const element = this.uiList.Get(i);
            if (element.name==uiname) {
                this.uiList.Remove(element);
                element.destroy();
            }
        }
        //let scene = cc.director.getScene();
        // let scene = cc.director.getScene().getChildByName("Game").getChildByName("Canvas")
        // let ui = scene.getChildByName(uiname);
        // if (!ui) {
        //     console.error("没有这个UI：" + uiname);
        //     return
        // }
        // if (ui != null) ui.destroy();
    }

    public static GetUI(uiname:string){
        for (let i = 0; i < this.uiList.Count; i++) {
            const element = this.uiList.Get(i);
            if (element.name==uiname) {
                return element;
            }
        }
    }
}