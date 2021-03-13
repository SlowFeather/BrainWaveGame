const {ccclass, property} = cc._decorator;

@ccclass
export default class RadarChart extends cc.Component {

    @property({
        type: Number,
        tooltip:"数据个数"
    })
    pointNumber:number=8;
    @property({
        type: Number,
        tooltip:"线宽度"
    })
    lineWidth:number=1;
    @property({
        type: cc.Color,
        tooltip:"线颜色"
    })
    lineColor:cc.Color = new cc.Color(0,0,0,255);
    @property({
        type: cc.Color,
        tooltip:"内部颜色"
    })
    backgroundColor:cc.Color = new cc.Color(0,0,0,255);

    //数据数组
    @property([Number])
    DataArray:number[]=[];

    /**
     * 渲染组件
     *
     * @type {cc.Graphics}
     * @memberof RadarChart
     */
     graphics: cc.Graphics = null;
     /**
      * 点数组
      *
      * @memberof RadarChart
      */
     nodes = [];

    onLoad () {
        //拿到组件
        this.graphics=this.node.getComponent(cc.Graphics);
    }

    start () {
        //创建贝塞尔点
        this.CreateBezierNodes();
    }

    update (dt) {
        this.UpdateColorCycle();
        this.UpdateNodePos();
        this.Render();
    }

    /**
     * 创建点
     *
     * @memberof RadarChart
     */
    CreateBezierNodes () {
        //创建8个顶点
        for(var quantity = 0, len = this.pointNumber; quantity < len; quantity++) {
            var theta = Math.PI * 2 * quantity / len;
            var x = 0;
            var y = 0;
            this.nodes.push({
                x: x,
                y: y,
                angle: theta,
                //angle: Math.random() * Math.PI * 2,
                //弧度
                theta: theta
            });
        }
    }

    /**
     * 更新颜色周期
     *
     * @memberof RadarChart
     */
    UpdateColorCycle() {
        this.graphics.strokeColor=this.lineColor;
        this.graphics.fillColor=this.backgroundColor;
        this.node.opacity=this.graphics.fillColor.a;
    }
    /**
     * 更新点位
     *
     * @memberof RadarChart
     */
    UpdateNodePos(){
        let nodes = this.nodes;
        for (let index = 0; index < nodes.length; index++) {
            let node = nodes[index];
            node.x = this.DataArray[index]*Math.cos(node.theta);
            node.y= this.DataArray[index]*Math.sin(node.theta);
        }
    }

    /**
     * 渲染
     *
     * @memberof RadarChart
     */
    Render() {
        let nodes = this.nodes;
        let graphics = this.graphics;
        let color = this.lineColor;
        let backgroundColor=this.backgroundColor;
        var currentIndex, nextIndex, xc, yc;
        
        graphics.clear();
        //下面有多少个点遍历多少次                
        [].forEach.call(nodes, (node, index) => {
    
            currentIndex = nodes[nodes.length - 1];
            //第0个node
            nextIndex = nodes[0];
            
            xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.5;
            yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.5;
            
            graphics.strokeColor = color;
            graphics.fillColor = backgroundColor;
            graphics.lineWidth =this.lineWidth;

            graphics.moveTo(xc, yc);
            
            // Draw through N points
            for(var N = 0; N < nodes.length; N++) {
                
                currentIndex = nodes[N];
                nextIndex = N + 1 > nodes.length - 1 ? nodes[N - nodes.length + 1] : nodes[N + 1];
                
                xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.5;
                yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.5;
            
                graphics.quadraticCurveTo(currentIndex.x, currentIndex.y, xc, yc);
            }
             
            graphics.fill();
            graphics.stroke();
                        

            //#region 渲染贝塞尔手柄
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

        })
    }
    
}
