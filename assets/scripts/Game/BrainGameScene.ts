import { MessageDef } from "../Def/MessageDef";
import { BrainModel } from "../Manager/DriveManager/DriveManager";
import MessageDispatcher from "../Manager/MessageDispatcher/MessageDispatcher";
import ResUtil from "../Tools/ResUtil";
import ConstellationScript from "./Constellation/ConstellationScript";

const {ccclass, property} = cc._decorator;

@ccclass
export default class BrainGameScene extends cc.Component {

    @property({
        type:[ConstellationScript]
    })
    AllStarScript:ConstellationScript[]=[];

    BackgroundObject:cc.Node;

    onEnable(){
        MessageDispatcher.Instance.AddEventListener(MessageDef.BrainGameStart,this.BrainGameStartHandler,this);
        MessageDispatcher.Instance.AddEventListener(MessageDef.BrainGameEnd,this.BrainGameEndHandler,this);

        MessageDispatcher.Instance.AddEventListener(MessageDef.BrainValueChangeMessage,this.BrainValueChangeMessageHandler,this);
    }

    onDisable(){
        MessageDispatcher.Instance.RemoveEventListener(MessageDef.BrainGameStart,this.BrainGameStartHandler,this);
        MessageDispatcher.Instance.RemoveEventListener(MessageDef.BrainGameEnd,this.BrainGameEndHandler,this);

        MessageDispatcher.Instance.RemoveEventListener(MessageDef.BrainValueChangeMessage,this.BrainValueChangeMessageHandler,this);

    }

    start () {
        // this.baiyang.armature().addEventListener(dragonBones.EventObject.COMPLETE,this.AnimationEventHandler,this);
    }

    /**
     * 拿到一次数据
     *
     * @param {BrainModel} module
     * @memberof BrainGameScene
     */
    BrainValueChangeMessageHandler(module:BrainModel){
        //判断值有没有超过阈值，然后
    }
    BrainGameStartHandler(){
        console.log("开始创建地形");
        
        //创建地形
        ResUtil.LoadPrefab("Background",(res)=>{
            this.BackgroundObject=res;
            //获取所有星座组件
            this.AllStarScript= this.node.getChildByName("Background").getComponentsInChildren(ConstellationScript);
            //console.log(this.AllStarScript.length);
            //从第一颗星星开始播放动画
            this.AllStarScript[0].StartAnimation();
        });
    }

    BrainGameEndHandler(){
        this.BackgroundObject.destroy();
    }




    // update (dt) {}
}
