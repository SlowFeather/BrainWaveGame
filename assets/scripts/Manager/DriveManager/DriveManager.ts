import { MessageDef } from "../../Def/MessageDef";
import { HttpUtil } from "../../Tools/HTTPUtil";
import MessageDispatcher from "../MessageDispatcher/MessageDispatcher";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DriveManager extends cc.Component {

//#region Instance
    public static Instance: DriveManager;
    constructor() { super(); }
    onLoad():void{
        DriveManager.Instance=this;
    }
//#endregion


    // host:string="http://127.0.0.1:8090"; 
    // param:any={"ty":"brain"};

    
    host:string="http://127.0.0.1:1111/hello.php";
    param:any={"id":"yingxiangshijie"};


    /**
     * 是否是连接状态
     *
     * @type {boolean}
     * @memberof DriveManager
     */
    connected:boolean=false;

    /**
     * 数据类
     *
     * @type {BrainModel}
     * @memberof DriveManager
     */
    brainModel:BrainModel=null;

    /**
     * 脑机断开回调
     *
     * @type {Function}
     * @memberof DriveManager
     */
    OnBrainBlockEvent:Function=null;

    /**
     * 脑机连接回调
     *
     * @type {Function}
     * @memberof DriveManager
     */
    OnBrainConnectEvent:Function=null;


    /**
     * 当脑机值改变的时候
     *
     * @type {Function}
     * @memberof DriveManager
     */
    OnBrainValueChangeEvent:Function=null;


    /**
     * 当设备持续断开的时候不断调用
     *
     * @type {Function}
     * @memberof DriveManager
     */
    OnBrainNotConnectEvent:Function=null;



    start () {
        //this.PinHost();
        //MessageDispatcher.Instance.AddEventListener(MessageDef.BrainGetValueMessage,this.BrainGetValueMessageHandler,this);
    }
    // BrainGetValueMessageHandler(){
    //     this.PinHost();
    // }

    GetHandler(b:boolean,response:string){
        
        if (b) {
            if (!this.connected) {
                
                //第一次进需要触发
                this.connected=true;
                console.log("设备连接");

                let br=JSON.parse(response)as BrainModel;
                this.brainModel=br;

                MessageDispatcher.Instance.Dispatch(MessageDef.BrainConnectMessage);
                MessageDispatcher.Instance.Dispatch(MessageDef.BrainValueChangeMessage,this.brainModel);

                
                if (this.OnBrainConnectEvent) {
                    this.OnBrainConnectEvent();
                }
                if (this.OnBrainValueChangeEvent) {
                    this.OnBrainValueChangeEvent();
                }
                
                return;
            }

            //console.log(response);
            let br=JSON.parse(response)as BrainModel;
            this.brainModel=br;
            if (this.OnBrainValueChangeEvent) {
                this.OnBrainValueChangeEvent();
            }
            
            MessageDispatcher.Instance.Dispatch(MessageDef.BrainValueChangeMessage,this.brainModel);
            // console.log("-->"+this.brainModel.brain[0].Delta);
            // console.dir(this.brainModel.brain[0]);
        }else{
            
            if (this.connected) {
                //第一次进需要触发
                console.log("设备断开");
                this.connected=false;
                this.brainModel=null;
                MessageDispatcher.Instance.Dispatch(MessageDef.BrainBlockMessage);
                if (this.OnBrainBlockEvent) {
                    this.OnBrainBlockEvent();
                }
            }else{
                this.brainModel=null;
                console.log("设备持续断开");

                MessageDispatcher.Instance.Dispatch(MessageDef.BrainBlockMessage);

                if (this.OnBrainNotConnectEvent) {
                    this.OnBrainNotConnectEvent();
                }
            }
        }
    }

    pinging:boolean=false;
    StartPinDrive(){
        this.pinging=true;
        this.timer=0;

    }

    StopPingDrive(){
        this.pinging=false;
        this.timer=0;
    }
    timer:number=0;
    update (dt) {
        if (this.pinging) {
            this.timer+=dt;
            if (this.timer>=1) {
                this.timer=0;
                 //尝试pin主机
                this.PinHost();
            }
        }
    }

    PinHost(){
        HttpUtil.GET(this.host,this.param,this.GetHandler.bind(this))
    }
}


/*Brain*/
export class Brain {
    Delta: string;
    Theta: string;
    LowAlpha: string;
    HighAlpha: string;
    LowBeta: string;
    HighBeta: string;
    LowGamma: string;
    HighGamma: string;
    Relaxation: string;
    Concentration: string;
  }
  
  /*BrainModel*/
  export class BrainModel {
    brain: Brain[];
  }
  

