const {ccclass, property} = cc._decorator;

@ccclass
export default class ConstellationScript extends cc.Component {

    @property({
        type:dragonBones.ArmatureDisplay,
        tooltip:"龙骨组件"
    })
    constellationArmatureDisplay:dragonBones.ArmatureDisplay;

    @property({
        type:Number,
        tooltip:"当前星座有多少个动画"
    })
    animationCount: number = 1;


    /**
     * 当前播放到第几个动画
     *
     * @type {number}
     * @memberof ConstellationScript
     */
    currentAnimationNumber:number=1;



    start () {
        this.constellationArmatureDisplay.armature().addEventListener(dragonBones.EventObject.COMPLETE,this.AnimationEventHandler,this);
        this.constellationArmatureDisplay.armature().addEventListener(dragonBones.EventObject.FADE_IN_COMPLETE,this.AnimationEventHandler,this);
        this.constellationArmatureDisplay.armature().addEventListener(dragonBones.EventObject.FADE_OUT_COMPLETE,this.AnimationEventHandler,this);

    }
    AnimationEventHandler(event) {
        //当动画淡出结束的时候
        // if (event.type === dragonBones.EventObject.FADE_OUT_COMPLETE){
        if (event.type === dragonBones.EventObject.COMPLETE){
            console.log(event.animationState.name);
            
            switch (event.animationState.name) {
                case "xingxing1":
                    console.log("111");

                    this.constellationArmatureDisplay.playAnimation("xingxing2", 1)
                    break;
                case "xingxing2":
                    this.constellationArmatureDisplay.playAnimation("xingxing3", 1)
                    break;
                case "xingxing3":
                    this.constellationArmatureDisplay.playAnimation("xingxing4", 1)
                    break;
                case "xingxing4":
                    this.constellationArmatureDisplay.playAnimation("xingxing5", 1)
                    break;
                default:
                    break;
            }
        }
    }

    /**
     * 开始播放第一个动画
     *
     * @memberof ConstellationScript
     */
    StartAnimation(){
        this.constellationArmatureDisplay.playAnimation("xingxing"+this.currentAnimationNumber,1);
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
