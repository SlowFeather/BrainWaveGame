import { StorageDef } from "../../Def/StorageDef";
import { UIDef } from "../../Def/UIDef";
import DriveManager from "../../Manager/DriveManager/DriveManager";
import UserManager from "../../Manager/UserManager/UserManager";
import StorageUtil from "../../Tools/StorageUtil";
import UIUtil from "../../Tools/UIUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShowResultUI extends cc.Component {

    //所有的奖杯物体
    @property([cc.Node])
    allTrophy: cc.Node[] = [];

    @property([cc.Label])
    jihuoLab:cc.Label;

    onLoad(){
        this.allTrophy.forEach(element => {
            element.active=false;
        });
    }

    onEnable(){

        console.log("-->进入结果页面");
        //再次确认关闭http
        DriveManager.Instance.StopPingDrive();

        
        // let score=StorageUtil.getData(StorageDef.StarLight,0);
        let score=UserManager.Instance.CurrentConstellationNumber;


        //判断当前得分，得几分就得几个奖杯
        for (let index = 0; index < this.allTrophy.length; index++) {
            let element = this.allTrophy[index] as cc.Node;
            if (index<score) {
                element.active=true;
            }
        }

        this.jihuoLab.string="激 活 星 座 数 量："+score.toString()+" 个";
        
    }
    onDisable(){
        this.allTrophy.forEach(element => {
            element.active=false;
        });
    }
    start () {
        
    }
    OnShowResultBtnClick(){

// parent.closeIFrame();
    }
    OnReStartBtnClick(){  
        UIUtil.ShowUI(UIDef.StartUI,()=>{
            UIUtil.HideUI(UIDef.ShowResultUI);
        });
    }
    
    // update (dt) {}
}
