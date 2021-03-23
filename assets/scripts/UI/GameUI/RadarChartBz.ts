import { MessageDef } from "../../Def/MessageDef";
import DriveManager, { BrainModel } from "../../Manager/DriveManager/DriveManager";
import MessageDispatcher from "../../Manager/MessageDispatcher/MessageDispatcher";
import MathUtil from "../../Tools/MathUtil";

const {
    ccclass,
    property
} = cc._decorator;

@ccclass
export default class RadarChartBz extends cc.Component {

    @property({
        type: Number,
        tooltip: "数据个数"
    })
    pointNumber: number = 8;

    //数据数组
    @property({
        type: [Number],
        tooltip: "数据数组"
    })
    dataArray: number[] = [];


    @property({
        type: Number,
        tooltip: "最大边界"
    })
    maxNumber: number = 100;

    //#region 贝塞尔雷达图
    @property({
        type: Number,
        tooltip: "线宽度"
    })
    lineWidth: number = 1;
    @property({
        type: cc.Color,
        tooltip: "线颜色"
    })
    lineColor: cc.Color ;
    @property({
        type: cc.Color,
        tooltip: "内部颜色"
    })
    backgroundColor: cc.Color;
//#endregion

    //#region 底板
    @property({
        type: Number,
        tooltip: "线宽度"
    })
    bglineWidth: number = 1;
    @property({
        type: cc.Color,
        tooltip: "线颜色"
    })
    bglineColor: cc.Color;
    @property({
        type: cc.Color,
        tooltip: "内部颜色"
    })
    bgbackgroundColor: cc.Color;
//#endregion
    



    /**
     * 渲染组件
     *
     * @type {cc.Graphics}
     * @memberof doodlets
     */
    graphics: cc.Graphics = null;
    /**
     * 点数组
     *
     * @memberof doodlets
     */
    nodes = [];

    onLoad() {
        //拿到组件
        this.graphics = this.node.getComponent(cc.Graphics);
    }

    onEnable(){
        this.dataArray[0]=0;
        this.dataArray[1]=0;
        this.dataArray[2]=0;
        this.dataArray[3]=0;
        this.dataArray[4]=0;
        this.dataArray[5]=0;
        this.dataArray[6]=0;
        this.dataArray[7]=0;
        this.updateNode();
        this.render();
        MessageDispatcher.Instance.AddEventListener(MessageDef.BrainValueChangeMessage,this.BrainValueChangeMessageHandler,this);

    }

    onDisable(){

    }


    LowAlpha:number=0;
    Theta:number=0;
    Delta:number=0;
    HighGamma:number=0;
    LowGamma:number=0;
    HighBeta:number=0;
    LowBeta:number=0;
    HighAlpha:number=0;


    BrainValueChangeMessageHandler(module:BrainModel){
        if (module==null) {
            return;
        }
        //0-16777216

        let lowAlpha=Number(module.brain[0].LowAlpha);
        let theta=Number(module.brain[0].Theta);
        let delta=Number(module.brain[0].Delta);
        let highGamma=Number(module.brain[0].HighGamma);
        let lowGamma=Number(module.brain[0].LowGamma);
        let highBeta=Number(module.brain[0].HighBeta);
        let lowBeta=Number(module.brain[0].LowBeta);
        let highAlpha=Number(module.brain[0].HighAlpha);

        let coefficient=100000;

        if (lowAlpha<=coefficient) {
            lowAlpha= lowAlpha*coefficient;
            if (lowAlpha>=16777216) {
                lowAlpha=16777216;
            }
        }
        if (theta<=coefficient) {
            theta= theta*coefficient;
            if (theta>=16777216) {
                theta=16777216;
            }
        }
        if (delta<=coefficient) {
            delta= delta*coefficient;
            if (delta>=16777216) {
                delta=16777216;
            }
        }
        if (highGamma<=coefficient) {
            highGamma= highGamma*coefficient;
            if (highGamma>=16777216) {
                highGamma=16777216;
            }
        }
        if (lowGamma<=coefficient) {
            lowGamma= lowGamma*coefficient;
            if (lowGamma>=16777216) {
                lowGamma=16777216;
            }
        }
        if (highBeta<=coefficient) {
            highBeta= highBeta*coefficient;
            if (highBeta>=16777216) {
                highBeta=16777216;
            }
        }
        if (lowBeta<=coefficient) {
            lowBeta= lowBeta*coefficient;
            if (lowBeta>=16777216) {
                lowBeta=16777216;
            }
        }
        if (highAlpha<=coefficient) {
            highAlpha= highAlpha*coefficient;
            if (highAlpha>=16777216) {
                highAlpha=16777216;
            }
        }




        this.LowAlpha=MathUtil.reMap(lowAlpha,0,16777216,0,100);
        this.Theta=MathUtil.reMap(theta,0,16777216,0,100) ;
        this.Delta=MathUtil.reMap(delta,0,16777216,0,100) ;
        this.HighGamma=MathUtil.reMap(highGamma,0,16777216,0,100) ;
        this.LowGamma=MathUtil.reMap(lowGamma,0,16777216,0,100) ;
        this.HighBeta=MathUtil.reMap(Number(highBeta),0,16777216,0,100) ;
        this.LowBeta=MathUtil.reMap(Number(lowBeta),0,16777216,0,100) ;
        this.HighAlpha=MathUtil.reMap(Number(highAlpha),0,16777216,0,100) ;
        ///console.log("--->LowAlpha 原："+Number(module.brain[0].LowAlpha)+"-后："+lowAlpha+"-最后："+this.LowAlpha);


        // this.Theta=Number(module.brain[0].Theta);
        // this.Delta=Number(module.brain[0].Delta);
        // this.HighGamma=Number(module.brain[0].HighGamma);
        // this.LowGamma=Number(module.brain[0].LowGamma);
        // this.HighBeta=Number(module.brain[0].HighBeta);
        // this.LowBeta=Number(module.brain[0].LowBeta);
        // this.HighAlpha=Number(module.brain[0].HighAlpha);

        // this.LowAlpha=Number(module.brain[0].LowAlpha);
        // this.Theta=Number(module.brain[0].Theta);
        // this.Delta=Number(module.brain[0].Delta);
        // this.HighGamma=Number(module.brain[0].HighGamma);
        // this.LowGamma=Number(module.brain[0].LowGamma);
        // this.HighBeta=Number(module.brain[0].HighBeta);
        // this.LowBeta=Number(module.brain[0].LowBeta);
        // this.HighAlpha=Number(module.brain[0].HighAlpha);

        // 0-16777216

    }


    start() {
        //更新颜色周期
        //this.updateColorCycle();
        //创建贝塞尔点
        this.createBezierNodes();
    }

    update(dt) {
        this.dataArray[0]=this.Lerp(this.dataArray[0],this.LowAlpha,dt*2);
        this.dataArray[1]=this.Lerp(this.dataArray[1],this.Theta,dt*2);
        this.dataArray[2]=this.Lerp(this.dataArray[2],this.Delta,dt*2);
        this.dataArray[3]=this.Lerp(this.dataArray[3],this.HighGamma,dt*2);
        this.dataArray[4]=this.Lerp(this.dataArray[4],this.LowGamma,dt*2);
        this.dataArray[5]=this.Lerp(this.dataArray[5],this.HighBeta,dt*2);
        this.dataArray[6]=this.Lerp(this.dataArray[6],this.LowBeta,dt*2);
        this.dataArray[7]=this.Lerp(this.dataArray[7],this.HighAlpha,dt*2);


        this.updateNode();
        this.render();
    }

    //创建贝塞尔点
    /**
     *
     *
     * @memberof doodlets
     */
    createBezierNodes() {
        //创建8个顶点
        for (var quantity = 0, len = this.pointNumber; quantity < len; quantity++) {
            var theta = Math.PI * 2 * quantity / len;
            var x = 0;
            var y = 0;
            this.nodes.push({
                x: x,
                y: y,
                //在圆上随机
                angle: theta,
                //angle: Math.random() * Math.PI * 2,
                //弧度                                
                theta: theta
            });
        }
    }

    updateNode() {
        //装了8个点
        let nodes = this.nodes;

        for (let index = 0; index < nodes.length; index++) {
            let node = nodes[index];
            node.x = this.dataArray[index] * Math.cos(node.theta)/100*this.maxNumber;
            node.y = this.dataArray[index] * Math.sin(node.theta)/100*this.maxNumber;
        }
    }
    /**
     * 更新颜色周期
     *
     * @memberof doodlets
     */
    updateColorCycle() {
        // let color = this.lineColor;
        // color.r=150;
        // color.g=150;
        // color.b=150;
        // color.a = 255;
    }
    render() {
        this.graphics.clear();
        this.BackgroundRender();
        this.RadarRender();
    }
    RadarRender() {
        let nodes = this.nodes;
        let graphics = this.graphics;
        var currentIndex, nextIndex, xc, yc;

        graphics.strokeColor =  this.lineColor;
        graphics.strokeColor.setA(this.lineColor.a);
        graphics.fillColor = this.backgroundColor;
        graphics.fillColor.setA(this.backgroundColor.a);
        graphics.lineWidth = this.lineWidth;
        
        //下面有多少个点遍历多少次                
        [].forEach.call(nodes, (node, index) => {

            //当前node
            currentIndex = nodes[nodes.length - 1];
            //第0个node
            nextIndex = nodes[0];

            xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.5;
            yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.5;

            graphics.moveTo(xc, yc);

            // Draw through N points
            for (var N = 0; N < nodes.length; N++) {

                currentIndex = nodes[N];
                nextIndex = N + 1 > nodes.length - 1 ? nodes[N - nodes.length + 1] : nodes[N + 1];

                xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.5;
                yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.5;

                graphics.quadraticCurveTo(currentIndex.x, currentIndex.y, xc, yc);
            }

            graphics.fill();
            graphics.stroke();

            //#region 手柄线条
            // graphics.lineWidth = 1;
            // graphics.lineCap = cc.Graphics.LineCap.ROUND;
            // graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
            // graphics.strokeColor.fromHEX('#a9a9a9');
            // graphics.fillColor.fromHEX('#a9a9a9');
            // Draw through N points
            // for(var N = 0; N < nodes.length; N++) {

            //     // First anchor
            //     currentIndex = nodes[N];
            //     nextIndex = N + 1 > nodes.length - 1 ? nodes[N - nodes.length + 1] : nodes[N + 1];

            //     xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.8;
            //     yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.8;

            //     graphics.moveTo(xc, yc);

            //     // Second anchor
            //     currentIndex = nextIndex;
            //     nextIndex = N + 2 > nodes.length - 1 ? nodes[N - nodes.length + 2] : nodes[N + 2]; 

            //     xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.2;
            //     yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.2;

            //     graphics.lineTo(xc, yc);
            //     graphics.stroke();

            //     // First anchor
            //     currentIndex = nodes[N];
            //     nextIndex = N + 1 > nodes.length - 1 ? nodes[N - nodes.length + 1] : nodes[N + 1];

            //     xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.8;
            //     yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.8;

            //     graphics.circle(xc, yc, 2);
            //     graphics.fill();

            //     // Second anchor
            //     currentIndex = nextIndex;
            //     nextIndex = N + 2 > nodes.length - 1 ? nodes[N - nodes.length + 2] : nodes[N + 2]; 

            //     xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.2;
            //     yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.2;

            //     graphics.circle(xc, yc, 2);
            //     graphics.fill();

            // }
            //#endregion
        });
    }

    BackgroundRender(){
        let graphics = this.graphics;

        graphics.strokeColor = this.bglineColor;
        graphics.strokeColor.setA(this.bglineColor.a);
        graphics.fillColor = this.bgbackgroundColor;
        graphics.fillColor.setA(this.bgbackgroundColor.a) ;
        graphics.lineWidth = this.bglineWidth;
        
        //竖线
        // graphics.moveTo(0, this.maxNumber);
        // graphics.lineTo(0,-this.maxNumber);

        //横线
        // graphics.moveTo(this.maxNumber, 0);
        // graphics.lineTo(-this.maxNumber,0);

        //中间圆圈
        // graphics.circle(0,0,this.maxNumber*0.8);
        // graphics.circle(0,0,this.maxNumber*0.7);
        // graphics.circle(0,0,this.maxNumber*0.6);
        // graphics.circle(0,0,this.maxNumber*0.5);
        // graphics.circle(0,0,this.maxNumber*0.4);
        // graphics.circle(0,0,this.maxNumber*0.3);
        // graphics.circle(0,0,this.maxNumber*0.2);
        // graphics.circle(0,0,this.maxNumber*0.1);

        // graphics.fill();
        // graphics.stroke();
    }

    Lerp(start:number,end:number,time:number){
        return start+(end-start)*time;
    }


}