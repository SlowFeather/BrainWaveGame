const {ccclass, property} = cc._decorator;

@ccclass
export default class ConstellationScript extends cc.Component {

    // @property({
    //     type:dragonBones.ArmatureDisplay,
    //     tooltip:"龙骨组件"
    // })
    // constellationArmatureDisplay:dragonBones.ArmatureDisplay;


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



    start () {
        // this.constellationArmatureDisplay.armature().addEventListener(dragonBones.EventObject.COMPLETE,this.AnimationEventHandler,this);
        // this.constellationArmatureDisplay.armature().addEventListener(dragonBones.EventObject.FADE_IN_COMPLETE,this.AnimationEventHandler,this);
        // this.constellationArmatureDisplay.armature().addEventListener(dragonBones.EventObject.FADE_OUT_COMPLETE,this.AnimationEventHandler,this);

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
        //先取消 监听
        this.allAnimation[this.currentAnimationNumber].off('finished',this.OnFinished,this);

        if (this.allAnimation[this.currentAnimationNumber].currentClip.name=="TianChengStar_Start") {
            this.allAnimation[this.currentAnimationNumber].play("TianChengStar_Idle");

            this.PlayNextStar();
            return;
        }
        // if (this.allAnimation[this.currentAnimationNumber].currentClip.name=="TianChengStar_Idle") {
            
        // }

        
    }

    PlayNextStar(){
        this.currentAnimationNumber++;
        if (this.currentAnimationNumber>=this.allAnimation.length) {
            console.log("当前星座所有动画播放完毕");
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
