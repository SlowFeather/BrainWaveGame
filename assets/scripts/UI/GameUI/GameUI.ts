import { MessageDef } from "../../Def/MessageDef";
import { UIDef } from "../../Def/UIDef";
import DriveManager from "../../Manager/DriveManager/DriveManager";
import MessageDispatcher from "../../Manager/MessageDispatcher/MessageDispatcher";
import SoundManager from "../../Manager/SoundManager";
import ResUtil from "../../Tools/ResUtil";
import UIUtil from "../../Tools/UIUtil";
import CountDown from "./CountDown";
import Dashboard from "./Dashboard";
import RadarChartBz from "./RadarChartBz";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameUI extends cc.Component {

    @property(CountDown)
    countDown:CountDown;

    @property(Dashboard)
    dashboard:Dashboard;

    @property(RadarChartBz)
    radarChartBz:RadarChartBz;
    
    onEnable(){
        this.countDown.StartCountDown(this.OnCountDownEndHandler);


        //发送游戏开始消息
        MessageDispatcher.Instance.Dispatch(MessageDef.BrainGameStart);

        MessageDispatcher.Instance.AddEventListener(MessageDef.BrainBlockMessage,this.BrainBlockMessageHandler,this);
        MessageDispatcher.Instance.AddEventListener(MessageDef.BrainNotConnectMessage,this.BrainNotConnectMessageHandler,this);

        //开始访问设备
        DriveManager.Instance.StartPinDrive();
    }

    onDisable(){
        //发送游戏结束消息
        MessageDispatcher.Instance.Dispatch(MessageDef.BrainGameEnd);


        //释放计时器
        this.countDown.ReleaseCountDown();
        //停止访问设备
        DriveManager.Instance.StopPingDrive();
        // DriveManager.Instance.OnBrainValueChangeEvent=null;

        
        MessageDispatcher.Instance.RemoveEventListener(MessageDef.BrainBlockMessage,this.BrainBlockMessageHandler,this);
        MessageDispatcher.Instance.RemoveEventListener(MessageDef.BrainNotConnectMessage,this.BrainNotConnectMessageHandler,this);

        // DriveManager.Instance.OnBrainNotConnectEvent=null;
    }

    start () {
        // console.log("-->进入GameUI start");
        
    }
    BrainNotConnectMessageHandler(){
        if (this.countDown.stoped) {
            
        }else{
            this.OnBlockBtnClick();
        }
    }
    BrainBlockMessageHandler(){
        this.OnBlockBtnClick();
    }


    OnCountDownEndHandler(){
        console.log("--> 游戏结束"+this.node.name);

        UIUtil.ShowUI(UIDef.ShowResultUI,()=>{
            UIUtil.HideUI(UIDef.GameUI);
        })
    }

    OnBackBtnClick(){
        console.log("--> 点击了回到主页面按钮");
        SoundManager.playEffect(2);

        UIUtil.ShowUI(UIDef.StartUI,()=>{
            UIUtil.HideUI(UIDef.GameUI);
        });
    }

    OnBlockBtnClick(){
        // console.log("--> 点击了断开连接按钮");
        this.countDown.StopCountDown();
        UIUtil.ShowUI(UIDef.DisConnectUI);
    }
    OnConnectBtnClick(){
        // console.log("--> 点击了恢复连接按钮");
        this.countDown.ContinueCountDown();
        UIUtil.HideUI(UIDef.DisConnectUI);
    }

    onDestroy(){
        
    }
    update (dt) {

    }
}
