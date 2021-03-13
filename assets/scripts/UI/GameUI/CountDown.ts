const {ccclass, property} = cc._decorator;

@ccclass
export default class CountDown extends cc.Component {


    @property(cc.Label)
    timeLab: cc.Label;


    timeMinute:number;

    timeSecond:number;

    /**
     * 计时器是否停止
     *
     * @type {Boolean}
     * @memberof CountDown
     */
    stoped:Boolean=true;


    /**
     * 计时结束方法
     *
     * @type {Function}
     * @memberof CountDown
     */
    ClockOverEvent:Function;
    

    onLoad(){

    }

    start () {
        
    }
    onEnable(){
        
    }
    onDisable(){

    }

    /**
     * 开始计时器
     *
     * @memberof CountDown
     */
    StartCountDown(callback:Function){
        //3分钟
        this.timeMinute=3;
        this.timeSecond=0;
        this.stoped=false;
        this.ClockOverEvent=callback;
    }


    /**
     * 继续计时器
     *
     * @memberof CountDown
     */
    ContinueCountDown(){

        this.stoped=false;
    }


    /**
     * 停止计时器
     *
     * @memberof CountDown
     */
    StopCountDown(){
        if (!this.stoped) {
            this.stoped=true;
        }
    }
    
    /**
     * 彻底释放计时器
     *
     * @memberof CountDown
     */
    ReleaseCountDown(){
        this.stoped=true;
        this.timer=0;
        this.ClockOverEvent=null;
    }

    timer:number=0;

    update (dt) {
        if (this.stoped) {
            return;
        }
        this.timer+=dt;
        if (this.timer>=1) {
            this.timer=0;
            //console.log("过了一秒");
            this.timeSecond-=1;
            if (this.timeSecond<0) {
                this.timeMinute-=1;
                if (this.timeMinute<0) {
                    //console.log("计时结束");
                    this.stoped=true;
                    if (this.ClockOverEvent) {
                        this.ClockOverEvent();
                    }
                    return;
                }
                this.timeSecond=59;
            }
        }
        
        if (this.timeSecond.toString().length==1) {
            this.timeLab.string="0"+this.timeMinute.toString()+":0"+this.timeSecond.toString();
        }else{
            this.timeLab.string="0"+this.timeMinute.toString()+":"+this.timeSecond.toString();
        }
    }

}