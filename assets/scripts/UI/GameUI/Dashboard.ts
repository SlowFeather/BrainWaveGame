import { MessageDef } from "../../Def/MessageDef";
import DriveManager, { BrainModel } from "../../Manager/DriveManager/DriveManager";
import MessageDispatcher from "../../Manager/MessageDispatcher/MessageDispatcher";
import MathUtil from "../../Tools/MathUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Dashboard extends cc.Component {

    @property(cc.Node)
    pointer: cc.Node = null;

    @property(cc.Label)
    dataLab: cc.Label = null;


    @property(Number)
    data:number=0;
    // onLoad () {}

    onEnable(){
        this.data=0;
        this.pointer.angle=0;
        this.dataLab.string=this.data.toString();
        MessageDispatcher.Instance.AddEventListener(MessageDef.BrainValueChangeMessage,this.BrainValueChangeMessageHandler,this);
        // MessageDispatcher.Instance.AddEventListener(MessageDef.BrainConnectMessage,this.BrainConnectMessageHandler,this);
        // MessageDispatcher.Instance.AddEventListener(MessageDef.BrainNotConnectMessage,this.BrainNotConnectMessageHandler,this);
        // MessageDispatcher.Instance.AddEventListener(MessageDef.BrainBlockMessage,this.BrainBlockMessageHandler,this);
    }

    onDisable(){
        MessageDispatcher.Instance.RemoveEventListener(MessageDef.BrainValueChangeMessage,this.BrainValueChangeMessageHandler,this);
        // MessageDispatcher.Instance.RemoveEventListener(MessageDef.BrainConnectMessage,this.BrainConnectMessageHandler,this);
        // MessageDispatcher.Instance.RemoveEventListener(MessageDef.BrainNotConnectMessage,this.BrainNotConnectMessageHandler,this);
        // MessageDispatcher.Instance.RemoveEventListener(MessageDef.BrainBlockMessage,this.BrainBlockMessageHandler,this);
        this.data=0;
        this.pointer.angle=0;
        this.dataLab.string=this.data.toString();
    }


    BrainValueChangeMessageHandler(module:BrainModel){
        // console.log("及拿来了");
        
        if (module==null) {
            return;
        }
        this.endNumber=Number(DriveManager.Instance.brainModel.brain[0].Concentration);
        // this.endNumber=Number(DriveManager.Instance.brainModel.brain[0].Relaxation);

        this.StartLerp();
    }
    start () {
        //this.data=0;
        // console.log();
        
        // this.pointer.angle=0 - this.Remap(this.data,0,100,-125,125);
        //this.pointer.angle=0 - MathUtil.reMap(this.data,0,100,-125,125);
        //this.dataLab.string=this.data.toString();

    }


    UpdateReadData(){
        if (DriveManager.Instance.brainModel==null) {
            return;
        }

        // this.data=Number(DriveManager.Instance.brainModel.brain[0].Relaxation);
        // this.pointer.angle=0 - MathUtil.reMap(this.data,0,100,-125,125);
        // this.dataLab.string=this.data.toString();

        //这里开始1s的计时，每刻都要给指针赋值
        //console.log(Number(DriveManager.Instance.brainModel.brain[0].Relaxation));
        
        this.endNumber=Number(DriveManager.Instance.brainModel.brain[0].Relaxation);
        // 100 -> 50
        // this.data -> endNum
        this.StartLerp();


        // var obj = { a: this.data }
        // cc.tween(obj)
        // .to(1, { a: Number(DriveManager.Instance.brainModel.brain[0].Relaxation) },{
        //     progress:(start, end, current, time)=>{
        //         console.log(current);
                
        //     }
        // })
        // .start()
        // cc.tween(sdk).to(1, { a: 10 }, {
        //     progress: (start, end, current, time) => {
        //         // this.lab.string = Math.round(start + (end - start) * time) + '';//修改页面上的值
        //         console.log('修改ing', start + (end - start) * time);
        //         return start + (end - start) * time;
        //     },
        //     // easing: "quintOut",
        // }).call(() => {
        //     console.log('结束了，看看值', sdk.a);
        // }).start();
    }


    startNumber=0;
    endNumber=0;
    lerping=false;
    timer=0;
    update (dt) {
        //console.log(this.data);
        if (this.lerping) {
            this.timer+=dt;
            if (this.timer>=1) {
                this.lerping=false;
                this.timer=0;

            }else{
                this.data= this.Lerp(this.data,this.endNumber,dt*2);

                this.pointer.angle=0-MathUtil.reMap(this.data,0,100,0,250); 
                this.dataLab.string=Math.floor(this.data).toString();
                // console.log("角度："+this.pointer.angle+"数字："+this.endNumber);
                
            }
        }
    }
    StartLerp(){
        this.lerping=true;
        this.timer=0;

        // this.startNumber=this.data;
        // this.endNumber=0;
    }
    Lerp(start:number,end:number,time:number){
        return start+(end-start)*time;
    }
    // USLerp(start:number,end:number,time:number){
    //     return start+(end-start)*time;
    // }

    

}
