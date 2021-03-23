import { MessageDef } from "../../Def/MessageDef";
import { UIDef } from "../../Def/UIDef";
import DriveManager, { BrainModel } from "../../Manager/DriveManager/DriveManager";
import MessageDispatcher from "../../Manager/MessageDispatcher/MessageDispatcher";
import SoundManager from "../../Manager/SoundManager";
import UserManager, { PostResultData, PostResultModel } from "../../Manager/UserManager/UserManager";
import ResUtil from "../../Tools/ResUtil";
import { TimeUtil } from "../../Tools/TimeUtil";
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
        MessageDispatcher.Instance.AddEventListener(MessageDef.BrainValueChangeMessage,this.BrainValueChangeMessageHandler,this);

        //开始访问设备
        DriveManager.Instance.StartPinDrive();

        //记录开始时间戳
        UserManager.Instance.InitPostResultModel();
        UserManager.Instance.PostResultModel.startTime=TimeUtil.getYMDHMS(Date.now()).toString();
        //2021-03-19 12:45:00
        // var date2 = new Date("2016/01/27 12:00:00")
        // console.log();
         
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
        MessageDispatcher.Instance.RemoveEventListener(MessageDef.BrainValueChangeMessage,this.BrainValueChangeMessageHandler,this);


        // DriveManager.Instance.OnBrainNotConnectEvent=null;
        //记录游戏结束时间戳
        // UserManager.Instance.PostResultModel.endTime=Date.now().toString();
        UserManager.Instance.PostResultModel.endTime=TimeUtil.getYMDHMS(Date.now()).toString();

    }

    start () {
        // console.log("-->进入GameUI start");
        
    }
    BrainValueChangeMessageHandler(module:BrainModel){
        var dateModule=new PostResultData();
        dateModule.delta=module.brain[0].Delta;
        dateModule.theta=module.brain[0].Theta;
        dateModule.lowAlpha=module.brain[0].LowAlpha;
        dateModule.highAlpha=module.brain[0].HighAlpha;
        dateModule.lowBeta=module.brain[0].LowBeta;
        dateModule.highBeta=module.brain[0].HighBeta;
        dateModule.lowGamma=module.brain[0].LowGamma;
        dateModule.highGamma=module.brain[0].HighGamma;
        dateModule.concentration=module.brain[0].Concentration;
        dateModule.relaxation=module.brain[0].Relaxation;
        UserManager.Instance.PostResultModel.data.push(dateModule);
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
