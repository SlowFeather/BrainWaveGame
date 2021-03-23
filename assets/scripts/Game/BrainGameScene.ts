import {
    MessageDef
} from "../Def/MessageDef";
import {
    BrainModel
} from "../Manager/DriveManager/DriveManager";
import MessageDispatcher from "../Manager/MessageDispatcher/MessageDispatcher";
import SoundManager from "../Manager/SoundManager";
import UserManager from "../Manager/UserManager/UserManager";
import ResUtil from "../Tools/ResUtil";
import ConstellationScript from "./Constellation/ConstellationScript";

const {
    ccclass,
    property
} = cc._decorator;

@ccclass
export default class BrainGameScene extends cc.Component {


    @property({
        type: [String]
    })
    AllAnimationNames: string[] = [];

    @property({
        type: cc.Node
    })
    SceneCamera: cc.Node;



    @property({
        type: [ConstellationScript]
    })
    AllStarScript: ConstellationScript[] = [];

    /**
     * 当前正在执行的星座脚本
     *
     * @type {ConstellationScript}
     * @memberof BrainGameScene
     */
    NowStarScript: ConstellationScript = null;

    BackgroundObject: cc.Node;

    /**
     * 是否正在切换星座动画中
     *
     * @type {boolean}
     * @memberof BrainGameScene
     */
    SwitchAnimationPlaying: boolean = false;


    /**
     * 固定值，甲方定的
     *
     * @type {number}
     * @memberof BrainGameScene
     */
    RelaxationValue: number = 55.51;

    onLoad() {
        MessageDispatcher.Instance.AddEventListener(MessageDef.BrainGameStart, this.BrainGameStartHandler, this);
        MessageDispatcher.Instance.AddEventListener(MessageDef.BrainGameEnd, this.BrainGameEndHandler, this);

        MessageDispatcher.Instance.AddEventListener(MessageDef.BrainValueChangeMessage, this.BrainValueChangeMessageHandler, this);

        MessageDispatcher.Instance.AddEventListener(MessageDef.ConstellationAnimationEnd, this.ConstellationAnimationEndHandler, this);

        MessageDispatcher.Instance.AddEventListener(MessageDef.BrainBlockMessage, this.BrainBlockMessageHandler, this);
        MessageDispatcher.Instance.AddEventListener(MessageDef.BrainNotConnectMessage, this.BrainNotConnectMessageHandler, this);

    }


    onDestroy() {
        MessageDispatcher.Instance.RemoveEventListener(MessageDef.BrainGameStart, this.BrainGameStartHandler, this);
        MessageDispatcher.Instance.RemoveEventListener(MessageDef.BrainGameEnd, this.BrainGameEndHandler, this);

        MessageDispatcher.Instance.RemoveEventListener(MessageDef.BrainValueChangeMessage, this.BrainValueChangeMessageHandler, this);
        MessageDispatcher.Instance.RemoveEventListener(MessageDef.ConstellationAnimationEnd, this.ConstellationAnimationEndHandler, this);

        MessageDispatcher.Instance.RemoveEventListener(MessageDef.BrainBlockMessage, this.BrainBlockMessageHandler, this);
        MessageDispatcher.Instance.RemoveEventListener(MessageDef.BrainNotConnectMessage, this.BrainNotConnectMessageHandler, this);
    }


    start() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }
    onKeyDown(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                if (this.SwitchAnimationPlaying) {
                    console.log("当前正在播放切换星座动画");

                    return;
                }
                this.NowStarScript.PlayNextStar();
                console.log('按了A');
                break;
        }
    }

    BrainBlockMessageHandler() {
                    //清空两个数字
                    // for (let index = 0; index < this.valueSumList.length; index++) {
                    //     this.valueSumList[index]=0;
                    // }
    }
    BrainNotConnectMessageHandler() {
                    //清空两个数字
                    // for (let index = 0; index < this.valueSumList.length; index++) {
                    //     this.valueSumList[index]=0;
                    // }
    }

    // value1:number=0;
    // value2:number=0;
    valueSumList: number[] = [0, 0]

    // valueCount=0;
    /**
     * 拿到一次数据，这里要判断值
     *
     * @param {BrainModel} module
     * @memberof BrainGameScene
     */
    BrainValueChangeMessageHandler(module: BrainModel) {

        // if (this.NowStarScript.playing) {
        //     return;
        // }
        // if (this.SwitchAnimationPlaying) {
        //     return;
        // }
        // this.valueCount++;
        // console.log(this.valueCount);
        
        if (this.valueSumList[0] == 0) {
            this.valueSumList[0] = Number(module.brain[0].Concentration);
            this.valueSumList[1] = 0;
            //console.log("-1-> " + this.valueSumList[0] + "--" + this.valueSumList[1]);
            return;

        } else {
            if (this.valueSumList[1] == 0) {
                this.valueSumList[1] = Number(module.brain[0].Concentration);
                //判断值有没有超过阈值，然后调用
                // if (Number(module.brain[0].Relaxation)>=this.RelaxationValue) {
                //     this.NowStarScript.PlayNextStar();
                // }
                if (((this.valueSumList[0] + this.valueSumList[1]) / 2) >= this.RelaxationValue) {
                    //console.log("-2-> " + this.valueSumList[0] + "--" + this.valueSumList[1]);

                    //清空两个数字
                    for (let index = 0; index < this.valueSumList.length; index++) {
                        this.valueSumList[index]=0;
                    }

                    if (this.NowStarScript!=null) {
                        //console.log("开始播放下一个星星动画");
                        //旧版逻辑
                        this.NowStarScript.PlayNextStar();

                    }
                    

                } else {
                    //清空两个数字
                    for (let index = 0; index < this.valueSumList.length; index++) {
                        this.valueSumList[index]=0;
                    }
                    this.valueSumList.forEach(element => {
                        element = 0;
                    });
                }
            }
        }
    }

    BrainGameStartHandler() {
        console.log("开始创建地形");
        // this.valueCount=0;
        this.SceneCamera.position = new cc.Vec3(334.282, 174.654);

        this.SwitchAnimationPlaying = false;

        this.valueSumList = [0, 0];

        //创建地形
        ResUtil.LoadPrefab("Background", (res) => {
            this.BackgroundObject = res;
            //获取所有星座组件
            this.AllStarScript = this.node.getChildByName("Background").getComponentsInChildren(ConstellationScript);
            console.log("一共是多少个星星：" + this.AllStarScript.length);
            //把所有的都初始化
            this.AllStarScript.forEach(element => {
                element.InitAllAnimation();
                if (element.constellationNumber == 0) {
                    this.NowStarScript = element;
                }
            });
        });
    }

    BrainGameEndHandler() {
        this.BackgroundObject.destroy();
        this.SwitchAnimationPlaying = false;
    }

    /**
     * 星座动画播放完了，需要切换到下一个星座
     *
     * @param {number} num
     * @return {*} 
     * @memberof BrainGameScene
     */
    ConstellationAnimationEndHandler(num: number) {

        if (num + 1 >= 5) {
            console.log("超过最大星座限制");
            return;
        } else {
            //当前星座+1

            //切换到下一个，然后播放动画
            this.SwitchNextAnimation(num + 1);
        }
    }

    /**
     * 切换到下一个星座的动画
     *
     * @param {number} nextnumber
     * @memberof BrainGameScene
     */
    SwitchNextAnimation(nextnumber: number) {
        this.SwitchAnimationPlaying = true;
        SoundManager.playEffect(4);

        this.SceneCamera.getComponent(cc.Animation).play(this.AllAnimationNames[this.NowStarScript.constellationNumber]);
        this.SceneCamera.getComponent(cc.Animation).on("finished", this.SwitchAnimationEnd, this);
    }
    SwitchAnimationEnd() {

        this.SceneCamera.getComponent(cc.Animation).off("finished", this.SwitchAnimationEnd, this);
        console.log("切换动画结束" +(Number(this.NowStarScript.constellationNumber)  + 1));

        this.NowStarScript = this.AllStarScript[this.NowStarScript.constellationNumber + 1];
        this.SwitchAnimationPlaying = false;

        //自动播放第一个
        // this.StartStarAnimation();
    }
}