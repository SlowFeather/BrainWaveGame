import { MessageDef } from "../Def/MessageDef";
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

    }

    onDisable(){
        MessageDispatcher.Instance.RemoveEventListener(MessageDef.BrainGameStart,this.BrainGameStartHandler,this);
        MessageDispatcher.Instance.RemoveEventListener(MessageDef.BrainGameEnd,this.BrainGameEndHandler,this);
    }

    start () {
        // this.baiyang.armature().addEventListener(dragonBones.EventObject.COMPLETE,this.AnimationEventHandler,this);
    }

    BrainGameStartHandler(){
        //创建地形
        ResUtil.LoadPrefab("Background",(res)=>{
            this.BackgroundObject=res;
            //获取所有星座组件
            this.AllStarScript= this.node.getChildByName("Background").getComponentsInChildren(ConstellationScript);
            console.log(this.AllStarScript.length);
            //从第一颗星星开始
            this.AllStarScript[0].StartAnimation();
        });
    }
    BrainGameEndHandler(){
        this.BackgroundObject.destroy();
    }


    // update (dt) {}
}
