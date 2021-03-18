import { MessageDef } from "../../Def/MessageDef";
import MessageDispatcher from "../../Manager/MessageDispatcher/MessageDispatcher";
import SoundManager from "../../Manager/SoundManager";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ConstellationScript extends cc.Component {

    // @property({
    //     type:dragonBones.ArmatureDisplay,
    //     tooltip:"龙骨组件"
    // })
    // constellationArmatureDisplay:dragonBones.ArmatureDisplay;

    @property({
        type:Number,
        tooltip:"编号"
    })
    constellationNumber:number=0;

    @property({
        type:[cc.Animation],
        tooltip:"全部组件"
    })
    allAnimation:cc.Animation[]=[];


    /**
     * 当前播放到第几个动画
     *
     * @type {number}
     * @memberof ConstellationScript
     */
    currentAnimationNumber:number=0;


    /**
     * 当前是否正在播放动画
     *
     * @type {boolean}
     * @memberof ConstellationScript
     */
    playing:boolean=false;

    start () {
        // this.constellationArmatureDisplay.armature().addEventListener(dragonBones.EventObject.COMPLETE,this.AnimationEventHandler,this);
        // this.constellationArmatureDisplay.armature().addEventListener(dragonBones.EventObject.FADE_IN_COMPLETE,this.AnimationEventHandler,this);
        // this.constellationArmatureDisplay.armature().addEventListener(dragonBones.EventObject.FADE_OUT_COMPLETE,this.AnimationEventHandler,this);

    }
    

    /**
     * 初始化所有动画，相当于把所有子物体透明度都变成0
     *
     * @memberof ConstellationScript
     */
    InitAllAnimation(){
        this.allAnimation.forEach(element => {
            // console.log(element.node.name);
            element.node.opacity=0;
            
        });
    }
    /**
     * 开始播放第一个动画
     *
     * @memberof ConstellationScript
     */
    StartAnimation(){
        //this.constellationArmatureDisplay.playAnimation("xingxing"+this.currentAnimationNumber,1);
        this.allAnimation[this.currentAnimationNumber].play("TianChengStar_Start");
        this.allAnimation[this.currentAnimationNumber].node.active=true;

        this.allAnimation[this.currentAnimationNumber].on('finished',this.OnFinished,this);
    }

    OnFinished(){

        console.log("播完了"+this.allAnimation[this.currentAnimationNumber].currentClip.name);
        this.playing=false;

        //先取消 监听
        this.allAnimation[this.currentAnimationNumber].off('finished',this.OnFinished,this);

        if (this.allAnimation[this.currentAnimationNumber].currentClip.name=="TianChengStar_Start") {
            this.allAnimation[this.currentAnimationNumber].play("TianChengStar_Idle");
            this.currentAnimationNumber++;
            //this.PlayNextStar();
            //检查是不是最后一个，如果是则发消息
            if (this.currentAnimationNumber>=this.allAnimation.length) {
                console.log("当前星座所有动画播放完毕");
                MessageDispatcher.Instance.Dispatch(MessageDef.ConstellationAnimationEnd,this.constellationNumber);
                return;
            }

            return;
        }
        // if (this.allAnimation[this.currentAnimationNumber].currentClip.name=="TianChengStar_Idle") {
            
        // }

        
    }

    PlayNextStar(){
        if (this.playing) {
            console.log("当前正在播放动画");
            return;
        }
        //如果是第一种动画
        // if (this.currentAnimationNumber==0) {
        //     this.playing=true;
            
        //     this.allAnimation[this.currentAnimationNumber].play("TianChengStar_Start");
        //     this.allAnimation[this.currentAnimationNumber].node.active=true;

        //     this.allAnimation[this.currentAnimationNumber].on('finished',this.OnFinished,this);

        //     return;
        // }

        // this.currentAnimationNumber++;
        
        this.playing=true;
        SoundManager.playEffect(3);

        if (this.allAnimation[this.currentAnimationNumber]==null) {
            return;
        }
        
        this.allAnimation[this.currentAnimationNumber].play("TianChengStar_Start");
        this.allAnimation[this.currentAnimationNumber].on('finished',this.OnFinished,this);
        this.allAnimation[this.currentAnimationNumber].node.active=true;
        
        
    }


    onDestroy(){
        // if (this.constellationArmatureDisplay==null) {
        //     return;
        // }
        // this.constellationArmatureDisplay.armature().removeEventListener(dragonBones.EventObject.COMPLETE,this.AnimationEventHandler,this);
        // this.constellationArmatureDisplay.armature().removeEventListener(dragonBones.EventObject.FADE_IN_COMPLETE,this.AnimationEventHandler,this);
        // this.constellationArmatureDisplay.armature().removeEventListener(dragonBones.EventObject.FADE_OUT_COMPLETE,this.AnimationEventHandler,this);
    }
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}



    // update (dt) {}
}
