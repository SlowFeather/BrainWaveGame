"use strict";
cc._RF.push(module, '1a108m/YXxKbZ2QTJSAOBsX', 'RadarChartBz');
// scripts/UI/GameUI/RadarChartBz.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var MessageDef_1 = require("../../Def/MessageDef");
var MessageDispatcher_1 = require("../../Manager/MessageDispatcher/MessageDispatcher");
var MathUtil_1 = require("../../Tools/MathUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RadarChartBz = /** @class */ (function (_super) {
    __extends(RadarChartBz, _super);
    function RadarChartBz() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pointNumber = 8;
        //数据数组
        _this.dataArray = [];
        _this.maxNumber = 100;
        //#region 贝塞尔雷达图
        _this.lineWidth = 1;
        //#endregion
        //#region 底板
        _this.bglineWidth = 1;
        //#endregion
        /**
         * 渲染组件
         *
         * @type {cc.Graphics}
         * @memberof doodlets
         */
        _this.graphics = null;
        /**
         * 点数组
         *
         * @memberof doodlets
         */
        _this.nodes = [];
        _this.LowAlpha = 0;
        _this.Theta = 0;
        _this.Delta = 0;
        _this.HighGamma = 0;
        _this.LowGamma = 0;
        _this.HighBeta = 0;
        _this.LowBeta = 0;
        _this.HighAlpha = 0;
        return _this;
    }
    RadarChartBz.prototype.onLoad = function () {
        //拿到组件
        this.graphics = this.node.getComponent(cc.Graphics);
    };
    RadarChartBz.prototype.onEnable = function () {
        this.dataArray[0] = 0;
        this.dataArray[1] = 0;
        this.dataArray[2] = 0;
        this.dataArray[3] = 0;
        this.dataArray[4] = 0;
        this.dataArray[5] = 0;
        this.dataArray[6] = 0;
        this.dataArray[7] = 0;
        this.updateNode();
        this.render();
        MessageDispatcher_1.default.Instance.AddEventListener(MessageDef_1.MessageDef.BrainValueChangeMessage, this.BrainValueChangeMessageHandler, this);
    };
    RadarChartBz.prototype.onDisable = function () {
    };
    RadarChartBz.prototype.BrainValueChangeMessageHandler = function (module) {
        if (module == null) {
            return;
        }
        //0-16777216
        var lowAlpha = Number(module.brain[0].LowAlpha);
        var theta = Number(module.brain[0].Theta);
        var delta = Number(module.brain[0].Delta);
        var highGamma = Number(module.brain[0].HighGamma);
        var lowGamma = Number(module.brain[0].LowGamma);
        var highBeta = Number(module.brain[0].HighBeta);
        var lowBeta = Number(module.brain[0].LowBeta);
        var highAlpha = Number(module.brain[0].HighAlpha);
        var coefficient = 100000;
        if (lowAlpha <= coefficient) {
            lowAlpha = lowAlpha * coefficient;
            if (lowAlpha >= 16777216) {
                lowAlpha = 16777216;
            }
        }
        if (theta <= coefficient) {
            theta = theta * coefficient;
            if (theta >= 16777216) {
                theta = 16777216;
            }
        }
        if (delta <= coefficient) {
            delta = delta * coefficient;
            if (delta >= 16777216) {
                delta = 16777216;
            }
        }
        if (highGamma <= coefficient) {
            highGamma = highGamma * coefficient;
            if (highGamma >= 16777216) {
                highGamma = 16777216;
            }
        }
        if (lowGamma <= coefficient) {
            lowGamma = lowGamma * coefficient;
            if (lowGamma >= 16777216) {
                lowGamma = 16777216;
            }
        }
        if (highBeta <= coefficient) {
            highBeta = highBeta * coefficient;
            if (highBeta >= 16777216) {
                highBeta = 16777216;
            }
        }
        if (lowBeta <= coefficient) {
            lowBeta = lowBeta * coefficient;
            if (lowBeta >= 16777216) {
                lowBeta = 16777216;
            }
        }
        if (highAlpha <= coefficient) {
            highAlpha = highAlpha * coefficient;
            if (highAlpha >= 16777216) {
                highAlpha = 16777216;
            }
        }
        this.LowAlpha = MathUtil_1.default.reMap(lowAlpha, 0, 16777216, 0, 100);
        this.Theta = MathUtil_1.default.reMap(theta, 0, 16777216, 0, 100);
        this.Delta = MathUtil_1.default.reMap(delta, 0, 16777216, 0, 100);
        this.HighGamma = MathUtil_1.default.reMap(highGamma, 0, 16777216, 0, 100);
        this.LowGamma = MathUtil_1.default.reMap(lowGamma, 0, 16777216, 0, 100);
        this.HighBeta = MathUtil_1.default.reMap(Number(highBeta), 0, 16777216, 0, 100);
        this.LowBeta = MathUtil_1.default.reMap(Number(lowBeta), 0, 16777216, 0, 100);
        this.HighAlpha = MathUtil_1.default.reMap(Number(highAlpha), 0, 16777216, 0, 100);
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
    };
    RadarChartBz.prototype.start = function () {
        //更新颜色周期
        //this.updateColorCycle();
        //创建贝塞尔点
        this.createBezierNodes();
    };
    RadarChartBz.prototype.update = function (dt) {
        this.dataArray[0] = this.Lerp(this.dataArray[0], this.LowAlpha, dt * 2);
        this.dataArray[1] = this.Lerp(this.dataArray[1], this.Theta, dt * 2);
        this.dataArray[2] = this.Lerp(this.dataArray[2], this.Delta, dt * 2);
        this.dataArray[3] = this.Lerp(this.dataArray[3], this.HighGamma, dt * 2);
        this.dataArray[4] = this.Lerp(this.dataArray[4], this.LowGamma, dt * 2);
        this.dataArray[5] = this.Lerp(this.dataArray[5], this.HighBeta, dt * 2);
        this.dataArray[6] = this.Lerp(this.dataArray[6], this.LowBeta, dt * 2);
        this.dataArray[7] = this.Lerp(this.dataArray[7], this.HighAlpha, dt * 2);
        this.updateNode();
        this.render();
    };
    //创建贝塞尔点
    /**
     *
     *
     * @memberof doodlets
     */
    RadarChartBz.prototype.createBezierNodes = function () {
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
    };
    RadarChartBz.prototype.updateNode = function () {
        //装了8个点
        var nodes = this.nodes;
        for (var index = 0; index < nodes.length; index++) {
            var node = nodes[index];
            node.x = this.dataArray[index] * Math.cos(node.theta) / 100 * this.maxNumber;
            node.y = this.dataArray[index] * Math.sin(node.theta) / 100 * this.maxNumber;
        }
    };
    /**
     * 更新颜色周期
     *
     * @memberof doodlets
     */
    RadarChartBz.prototype.updateColorCycle = function () {
        // let color = this.lineColor;
        // color.r=150;
        // color.g=150;
        // color.b=150;
        // color.a = 255;
    };
    RadarChartBz.prototype.render = function () {
        this.graphics.clear();
        this.BackgroundRender();
        this.RadarRender();
    };
    RadarChartBz.prototype.RadarRender = function () {
        var nodes = this.nodes;
        var graphics = this.graphics;
        var currentIndex, nextIndex, xc, yc;
        graphics.strokeColor = this.lineColor;
        graphics.strokeColor.setA(this.lineColor.a);
        graphics.fillColor = this.backgroundColor;
        graphics.fillColor.setA(this.backgroundColor.a);
        graphics.lineWidth = this.lineWidth;
        //下面有多少个点遍历多少次                
        [].forEach.call(nodes, function (node, index) {
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
    };
    RadarChartBz.prototype.BackgroundRender = function () {
        var graphics = this.graphics;
        graphics.strokeColor = this.bglineColor;
        graphics.strokeColor.setA(this.bglineColor.a);
        graphics.fillColor = this.bgbackgroundColor;
        graphics.fillColor.setA(this.bgbackgroundColor.a);
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
    };
    RadarChartBz.prototype.Lerp = function (start, end, time) {
        return start + (end - start) * time;
    };
    __decorate([
        property({
            type: Number,
            tooltip: "数据个数"
        })
    ], RadarChartBz.prototype, "pointNumber", void 0);
    __decorate([
        property({
            type: [Number],
            tooltip: "数据数组"
        })
    ], RadarChartBz.prototype, "dataArray", void 0);
    __decorate([
        property({
            type: Number,
            tooltip: "最大边界"
        })
    ], RadarChartBz.prototype, "maxNumber", void 0);
    __decorate([
        property({
            type: Number,
            tooltip: "线宽度"
        })
    ], RadarChartBz.prototype, "lineWidth", void 0);
    __decorate([
        property({
            type: cc.Color,
            tooltip: "线颜色"
        })
    ], RadarChartBz.prototype, "lineColor", void 0);
    __decorate([
        property({
            type: cc.Color,
            tooltip: "内部颜色"
        })
    ], RadarChartBz.prototype, "backgroundColor", void 0);
    __decorate([
        property({
            type: Number,
            tooltip: "线宽度"
        })
    ], RadarChartBz.prototype, "bglineWidth", void 0);
    __decorate([
        property({
            type: cc.Color,
            tooltip: "线颜色"
        })
    ], RadarChartBz.prototype, "bglineColor", void 0);
    __decorate([
        property({
            type: cc.Color,
            tooltip: "内部颜色"
        })
    ], RadarChartBz.prototype, "bgbackgroundColor", void 0);
    RadarChartBz = __decorate([
        ccclass
    ], RadarChartBz);
    return RadarChartBz;
}(cc.Component));
exports.default = RadarChartBz;

cc._RF.pop();