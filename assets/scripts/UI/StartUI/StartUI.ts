import { MessageDef } from "../../Def/MessageDef";
import { UIDef } from "../../Def/UIDef";
import Game from "../../Game";
import MessageDispatcher from "../../Manager/MessageDispatcher/MessageDispatcher";
import SoundManager from "../../Manager/SoundManager";
import UserManager from "../../Manager/UserManager/UserManager";
import MathUtil from "../../Tools/MathUtil";
import ResUtil from "../../Tools/ResUtil";
import { TimeFormatType, TimeUtil } from "../../Tools/TimeUtil";
import UILoader from "../../Tools/UILoader";
import UIUtil from "../../Tools/UIUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class StartUI extends cc.Component {

    // @property(cc.Button)
    // startBtn: cc.Button = null;

    start () {

        SoundManager.playMusic(1);
        
        
        //cc.Node node=cc.instantiate( ResUtil.ResDictionary["StartUI"]);
        
        // ResUtil.ResDictionary["StartUI"];
        //初始化场景
        // UILoader.Instance.loadPrefabInScene("prefabs/game/Background",(obj:cc.Node)=>{
            
        //     console.log(obj.name);
        //     obj.setParent(Game.Instance.GameScene);
        // });

        
        // 加载 Prefab
        // cc.loader.loadRes("prefabs/game/Background", function (err, prefab) {
        //     this.CreateBackground(prefab);
            
        // }.bind(this));



    }

    // CreateBackground(prefab){
    //     console.log("生成地板");
        
    //     // var newNode = cc.instantiate(prefab);
    //     //cc.director.getScene().addChild(newNode);
    //     // newNode.setParent(Game.Instance.GameScene);
    // }

    OnStartBtnClick(){
        console.log("--> 点击了开始按钮");
        SoundManager.playEffect(2);

        //重置用户星座数量
        UserManager.Instance.CurrentConstellationNumber=0;

        UIUtil.ShowUI(UIDef.DescribeUI,()=>{
            UIUtil.HideUI(UIDef.StartUI);
        });
    }

    
    onDestroy(){
        
    }
    // update (dt) {}
}
