import { UIDef } from "../../Def/UIDef";
import DriveManager from "../../Manager/DriveManager/DriveManager";
import UIUtil from "../../Tools/UIUtil";
import GameUI from "../GameUI/GameUI";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DisConnectUI extends cc.Component {

    //提示文字文件
    @property(cc.RichText)
    describeLab: cc.RichText = null;

    onEnable(){

        console.log("-->进入断开连接页面");
        
        DriveManager.Instance.OnBrainConnectEvent=this.OnConnectHandler.bind(this);
    }
    onDisable(){
        
    }
    start () {
        
        
    }
    OnConnectHandler(){
        this.OnConnectBtnClick();
    }
    OnConnectBtnClick(){
        //UIUtil.HideUI(UIDef.DisConnectUI);
        let gameUI=UIUtil.GetUI(UIDef.GameUI)as cc.Node;
        gameUI.getComponent(GameUI).OnConnectBtnClick();
    }
    
    // update (dt) {}
}
