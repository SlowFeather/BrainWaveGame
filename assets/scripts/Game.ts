import { StorageDef } from "./Def/StorageDef";
import { UIDef } from "./Def/UIDef";
import DriveManager from "./Manager/DriveManager/DriveManager";
import MessageDispatcher from "./Manager/MessageDispatcher/MessageDispatcher";
// import { PreLoadCsvSync, TableReader } from "./Tools/TableReader";
import { HttpUtil } from "./Tools/HTTPUtil";
import StorageUtil from "./Tools/StorageUtil";
import TransformUtil from "./Tools/TransformUtil";
import UILoader from "./Tools/UILoader";
import UIUtil from "./Tools/UIUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Game extends cc.Component {

    //#region 单例
    public static Instance: Game;
    constructor() { super(); }
    onLoad():void{
        Game.Instance=this;
        this.GameScene=this.node.getChildByName("Scene");
        this.UIRoot=this.node.getChildByName("Canvas");

    }
    //#endregion

    /**
     * 游戏场景父物体
     *
     * @type {cc.Node}
     * @memberof Game
     */
    public GameScene:cc.Node;


    /**
     * UI父物体
     *
     * @type {cc.Node}
     * @memberof Game
     */
    public UIRoot:cc.Node;



    start () {
        // TransformUtil.GetWorldPostation2(this.node);

        // StorageUtil.storageData(StorageDef.StarLight,3);
        // StorageUtil.storageData(StorageDef.Token,"Hello");

        // console.log(StorageUtil.getData("bool",false));
        // StorageUtil.removeData("bool");


        UIUtil.ShowBaseUI(UIDef.LoadingUI);

        // HttpUtil.GET("http://127.0.0.1:8080/hello.php",{id:"1"},(state,obj)=>{
        //     console.log(state+ obj);
        // });
        
        // UILoader.Instance.loadPrefabRes("base/ui/" + "LoadingUI" + "/" + "LoadingUI" + "", (loadedui) => {
        //     let ui = cc.instantiate(loadedui) as cc.Node
        //     ui.name = "LoadingUI";
        //     // let scene = cc.director.getScene();
        //     let scene = cc.director.getScene().getChildByName("Game").getChildByName("Canvas")
        //     ui.setParent(scene)
        //     UIUtil.uiList.Add(ui);
        // })
        
    }


    // update (dt) {}
}
