
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UI/GameUI/RadarChartBz.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlcXEdhbWVVSVxcUmFkYXJDaGFydEJ6LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFrRDtBQUVsRCx1RkFBa0Y7QUFDbEYsaURBQTRDO0FBRXRDLElBQUEsa0JBR1csRUFGYixvQkFBTyxFQUNQLHNCQUNhLENBQUM7QUFHbEI7SUFBMEMsZ0NBQVk7SUFEdEQ7UUFBQSxxRUE4WkM7UUF2WkcsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFFeEIsTUFBTTtRQUtOLGVBQVMsR0FBYSxFQUFFLENBQUM7UUFPekIsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUV4QixnQkFBZ0I7UUFLaEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQVcxQixZQUFZO1FBRVIsWUFBWTtRQUtaLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBVzVCLFlBQVk7UUFLUjs7Ozs7V0FLRztRQUNILGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBQzdCOzs7O1dBSUc7UUFDSCxXQUFLLEdBQUcsRUFBRSxDQUFDO1FBMkJYLGNBQVEsR0FBUSxDQUFDLENBQUM7UUFDbEIsV0FBSyxHQUFRLENBQUMsQ0FBQztRQUNmLFdBQUssR0FBUSxDQUFDLENBQUM7UUFDZixlQUFTLEdBQVEsQ0FBQyxDQUFDO1FBQ25CLGNBQVEsR0FBUSxDQUFDLENBQUM7UUFDbEIsY0FBUSxHQUFRLENBQUMsQ0FBQztRQUNsQixhQUFPLEdBQVEsQ0FBQyxDQUFDO1FBQ2pCLGVBQVMsR0FBUSxDQUFDLENBQUM7O0lBa1R2QixDQUFDO0lBbFZHLDZCQUFNLEdBQU47UUFDSSxNQUFNO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FB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QUVELDZCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQyxFQUFFLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFD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WUFDTixJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxLQUFLO1NBQ2pCLENBQUM7bURBQ29CO0lBS3RCO1FBSkMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLO1lBQ2QsT0FBTyxFQUFFLEtBQUs7U0FDakIsQ0FBQzttREFDbUI7SUFLckI7UUFKQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUs7WUFDZCxPQUFPLEVBQUUsTUFBTTtTQUNsQixDQUFDO3lEQUN3QjtJQVExQjtRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLEtBQUs7U0FDakIsQ0FBQztxREFDc0I7SUFLeEI7UUFKQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUs7WUFDZCxPQUFPLEVBQUUsS0FBSztTQUNqQixDQUFDO3FEQUNvQjtJQUt0QjtRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSztZQUNkLE9BQU8sRUFBRSxNQUFNO1NBQ2xCLENBQUM7MkRBQzBCO0lBdkRYLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0E2WmhDO0lBQUQsbUJBQUM7Q0E3WkQsQUE2WkMsQ0E3WnlDLEVBQUUsQ0FBQyxTQUFTLEdBNlpyRDtrQkE3Wm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNzYWdlRGVmIH0gZnJvbSBcIi4uLy4uL0RlZi9NZXNzYWdlRGVmXCI7XG5pbXBvcnQgRHJpdmVNYW5hZ2VyLCB7IEJyYWluTW9kZWwgfSBmcm9tIFwiLi4vLi4vTWFuYWdlci9Ecml2ZU1hbmFnZXIvRHJpdmVNYW5hZ2VyXCI7XG5pbXBvcnQgTWVzc2FnZURpc3BhdGNoZXIgZnJvbSBcIi4uLy4uL01hbmFnZXIvTWVzc2FnZURpc3BhdGNoZXIvTWVzc2FnZURpc3BhdGNoZXJcIjtcbmltcG9ydCBNYXRoVXRpbCBmcm9tIFwiLi4vLi4vVG9vbHMvTWF0aFV0aWxcIjtcblxuY29uc3Qge1xuICAgIGNjY2xhc3MsXG4gICAgcHJvcGVydHlcbn0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFkYXJDaGFydEJ6IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdG9vbHRpcDogXCLmlbDmja7kuKrmlbBcIlxuICAgIH0pXG4gICAgcG9pbnROdW1iZXI6IG51bWJlciA9IDg7XG5cbiAgICAvL+aVsOaNruaVsOe7hFxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IFtOdW1iZXJdLFxuICAgICAgICB0b29sdGlwOiBcIuaVsOaNruaVsOe7hFwiXG4gICAgfSlcbiAgICBkYXRhQXJyYXk6IG51bWJlcltdID0gW107XG5cblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdG9vbHRpcDogXCLmnIDlpKfovrnnlYxcIlxuICAgIH0pXG4gICAgbWF4TnVtYmVyOiBudW1iZXIgPSAxMDA7XG5cbiAgICAvLyNyZWdpb24g6LSd5aGe5bCU6Zu36L6+5Zu+XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB0b29sdGlwOiBcIue6v+WuveW6plwiXG4gICAgfSlcbiAgICBsaW5lV2lkdGg6IG51bWJlciA9IDE7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuQ29sb3IsXG4gICAgICAgIHRvb2x0aXA6IFwi57q/6aKc6ImyXCJcbiAgICB9KVxuICAgIGxpbmVDb2xvcjogY2MuQ29sb3IgO1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLkNvbG9yLFxuICAgICAgICB0b29sdGlwOiBcIuWGhemDqOminOiJslwiXG4gICAgfSlcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGNjLkNvbG9yO1xuLy8jZW5kcmVnaW9uXG5cbiAgICAvLyNyZWdpb24g5bqV5p2/XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB0b29sdGlwOiBcIue6v+WuveW6plwiXG4gICAgfSlcbiAgICBiZ2xpbmVXaWR0aDogbnVtYmVyID0gMTtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5Db2xvcixcbiAgICAgICAgdG9vbHRpcDogXCLnur/popzoibJcIlxuICAgIH0pXG4gICAgYmdsaW5lQ29sb3I6IGNjLkNvbG9yO1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLkNvbG9yLFxuICAgICAgICB0b29sdGlwOiBcIuWGhemDqOminOiJslwiXG4gICAgfSlcbiAgICBiZ2JhY2tncm91bmRDb2xvcjogY2MuQ29sb3I7XG4vLyNlbmRyZWdpb25cbiAgICBcblxuXG5cbiAgICAvKipcbiAgICAgKiDmuLLmn5Pnu4Tku7ZcbiAgICAgKlxuICAgICAqIEB0eXBlIHtjYy5HcmFwaGljc31cbiAgICAgKiBAbWVtYmVyb2YgZG9vZGxldHNcbiAgICAgKi9cbiAgICBncmFwaGljczogY2MuR3JhcGhpY3MgPSBudWxsO1xuICAgIC8qKlxuICAgICAqIOeCueaVsOe7hFxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIGRvb2RsZXRzXG4gICAgICovXG4gICAgbm9kZXMgPSBbXTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy/mi7/liLDnu4Tku7ZcbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCl7XG4gICAgICAgIHRoaXMuZGF0YUFycmF5WzBdPTA7XG4gICAgICAgIHRoaXMuZGF0YUFycmF5WzFdPTA7XG4gICAgICAgIHRoaXMuZGF0YUFycmF5WzJdPTA7XG4gICAgICAgIHRoaXMuZGF0YUFycmF5WzNdPTA7XG4gICAgICAgIHRoaXMuZGF0YUFycmF5WzRdPTA7XG4gICAgICAgIHRoaXMuZGF0YUFycmF5WzVdPTA7XG4gICAgICAgIHRoaXMuZGF0YUFycmF5WzZdPTA7XG4gICAgICAgIHRoaXMuZGF0YUFycmF5WzddPTA7XG4gICAgICAgIHRoaXMudXBkYXRlTm9kZSgpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICBNZXNzYWdlRGlzcGF0Y2hlci5JbnN0YW5jZS5BZGRFdmVudExpc3RlbmVyKE1lc3NhZ2VEZWYuQnJhaW5WYWx1ZUNoYW5nZU1lc3NhZ2UsdGhpcy5CcmFpblZhbHVlQ2hhbmdlTWVzc2FnZUhhbmRsZXIsdGhpcyk7XG5cbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKXtcblxuICAgIH1cblxuXG4gICAgTG93QWxwaGE6bnVtYmVyPTA7XG4gICAgVGhldGE6bnVtYmVyPTA7XG4gICAgRGVsdGE6bnVtYmVyPTA7XG4gICAgSGlnaEdhbW1hOm51bWJlcj0wO1xuICAgIExvd0dhbW1hOm51bWJlcj0wO1xuICAgIEhpZ2hCZXRhOm51bWJlcj0wO1xuICAgIExvd0JldGE6bnVtYmVyPTA7XG4gICAgSGlnaEFscGhhOm51bWJlcj0wO1xuXG5cbiAgICBCcmFpblZhbHVlQ2hhbmdlTWVzc2FnZUhhbmRsZXIobW9kdWxlOkJyYWluTW9kZWwpe1xuICAgICAgICBpZiAobW9kdWxlPT1udWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8wLTE2Nzc3MjE2XG5cbiAgICAgICAgbGV0IGxvd0FscGhhPU51bWJlcihtb2R1bGUuYnJhaW5bMF0uTG93QWxwaGEpO1xuICAgICAgICBsZXQgdGhldGE9TnVtYmVyKG1vZHVsZS5icmFpblswXS5UaGV0YSk7XG4gICAgICAgIGxldCBkZWx0YT1OdW1iZXIobW9kdWxlLmJyYWluWzBdLkRlbHRhKTtcbiAgICAgICAgbGV0IGhpZ2hHYW1tYT1OdW1iZXIobW9kdWxlLmJyYWluWzBdLkhpZ2hHYW1tYSk7XG4gICAgICAgIGxldCBsb3dHYW1tYT1OdW1iZXIobW9kdWxlLmJyYWluWzBdLkxvd0dhbW1hKTtcbiAgICAgICAgbGV0IGhpZ2hCZXRhPU51bWJlcihtb2R1bGUuYnJhaW5bMF0uSGlnaEJldGEpO1xuICAgICAgICBsZXQgbG93QmV0YT1OdW1iZXIobW9kdWxlLmJyYWluWzBdLkxvd0JldGEpO1xuICAgICAgICBsZXQgaGlnaEFscGhhPU51bWJlcihtb2R1bGUuYnJhaW5bMF0uSGlnaEFscGhhKTtcblxuICAgICAgICBsZXQgY29lZmZpY2llbnQ9MTAwMDAwO1xuXG4gICAgICAgIGlmIChsb3dBbHBoYTw9Y29lZmZpY2llbnQpIHtcbiAgICAgICAgICAgIGxvd0FscGhhPSBsb3dBbHBoYSpjb2VmZmljaWVudDtcbiAgICAgICAgICAgIGlmIChsb3dBbHBoYT49MTY3NzcyMTYpIHtcbiAgICAgICAgICAgICAgICBsb3dBbHBoYT0xNjc3NzIxNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhldGE8PWNvZWZmaWNpZW50KSB7XG4gICAgICAgICAgICB0aGV0YT0gdGhldGEqY29lZmZpY2llbnQ7XG4gICAgICAgICAgICBpZiAodGhldGE+PTE2Nzc3MjE2KSB7XG4gICAgICAgICAgICAgICAgdGhldGE9MTY3NzcyMTY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlbHRhPD1jb2VmZmljaWVudCkge1xuICAgICAgICAgICAgZGVsdGE9IGRlbHRhKmNvZWZmaWNpZW50O1xuICAgICAgICAgICAgaWYgKGRlbHRhPj0xNjc3NzIxNikge1xuICAgICAgICAgICAgICAgIGRlbHRhPTE2Nzc3MjE2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChoaWdoR2FtbWE8PWNvZWZmaWNpZW50KSB7XG4gICAgICAgICAgICBoaWdoR2FtbWE9IGhpZ2hHYW1tYSpjb2VmZmljaWVudDtcbiAgICAgICAgICAgIGlmIChoaWdoR2FtbWE+PTE2Nzc3MjE2KSB7XG4gICAgICAgICAgICAgICAgaGlnaEdhbW1hPTE2Nzc3MjE2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChsb3dHYW1tYTw9Y29lZmZpY2llbnQpIHtcbiAgICAgICAgICAgIGxvd0dhbW1hPSBsb3dHYW1tYSpjb2VmZmljaWVudDtcbiAgICAgICAgICAgIGlmIChsb3dHYW1tYT49MTY3NzcyMTYpIHtcbiAgICAgICAgICAgICAgICBsb3dHYW1tYT0xNjc3NzIxNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaGlnaEJldGE8PWNvZWZmaWNpZW50KSB7XG4gICAgICAgICAgICBoaWdoQmV0YT0gaGlnaEJldGEqY29lZmZpY2llbnQ7XG4gICAgICAgICAgICBpZiAoaGlnaEJldGE+PTE2Nzc3MjE2KSB7XG4gICAgICAgICAgICAgICAgaGlnaEJldGE9MTY3NzcyMTY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvd0JldGE8PWNvZWZmaWNpZW50KSB7XG4gICAgICAgICAgICBsb3dCZXRhPSBsb3dCZXRhKmNvZWZmaWNpZW50O1xuICAgICAgICAgICAgaWYgKGxvd0JldGE+PTE2Nzc3MjE2KSB7XG4gICAgICAgICAgICAgICAgbG93QmV0YT0xNjc3NzIxNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaGlnaEFscGhhPD1jb2VmZmljaWVudCkge1xuICAgICAgICAgICAgaGlnaEFscGhhPSBoaWdoQWxwaGEqY29lZmZpY2llbnQ7XG4gICAgICAgICAgICBpZiAoaGlnaEFscGhhPj0xNjc3NzIxNikge1xuICAgICAgICAgICAgICAgIGhpZ2hBbHBoYT0xNjc3NzIxNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cblxuXG4gICAgICAgIHRoaXMuTG93QWxwaGE9TWF0aFV0aWwucmVNYXAobG93QWxwaGEsMCwxNjc3NzIxNiwwLDEwMCk7XG4gICAgICAgIHRoaXMuVGhldGE9TWF0aFV0aWwucmVNYXAodGhldGEsMCwxNjc3NzIxNiwwLDEwMCkgO1xuICAgICAgICB0aGlzLkRlbHRhPU1hdGhVdGlsLnJlTWFwKGRlbHRhLDAsMTY3NzcyMTYsMCwxMDApIDtcbiAgICAgICAgdGhpcy5IaWdoR2FtbWE9TWF0aFV0aWwucmVNYXAoaGlnaEdhbW1hLDAsMTY3NzcyMTYsMCwxMDApIDtcbiAgICAgICAgdGhpcy5Mb3dHYW1tYT1NYXRoVXRpbC5yZU1hcChsb3dHYW1tYSwwLDE2Nzc3MjE2LDAsMTAwKSA7XG4gICAgICAgIHRoaXMuSGlnaEJldGE9TWF0aFV0aWwucmVNYXAoTnVtYmVyKGhpZ2hCZXRhKSwwLDE2Nzc3MjE2LDAsMTAwKSA7XG4gICAgICAgIHRoaXMuTG93QmV0YT1NYXRoVXRpbC5yZU1hcChOdW1iZXIobG93QmV0YSksMCwxNjc3NzIxNiwwLDEwMCkgO1xuICAgICAgICB0aGlzLkhpZ2hBbHBoYT1NYXRoVXRpbC5yZU1hcChOdW1iZXIoaGlnaEFscGhhKSwwLDE2Nzc3MjE2LDAsMTAwKSA7XG4gICAgICAgIC8vL2NvbnNvbGUubG9nKFwiLS0tPkxvd0FscGhhIOWOn++8mlwiK051bWJlcihtb2R1bGUuYnJhaW5bMF0uTG93QWxwaGEpK1wiLeWQju+8mlwiK2xvd0FscGhhK1wiLeacgOWQju+8mlwiK3RoaXMuTG93QWxwaGEpO1xuXG5cbiAgICAgICAgLy8gdGhpcy5UaGV0YT1OdW1iZXIobW9kdWxlLmJyYWluWzBdLlRoZXRhKTtcbiAgICAgICAgLy8gdGhpcy5EZWx0YT1OdW1iZXIobW9kdWxlLmJyYWluWzBdLkRlbHRhKTtcbiAgICAgICAgLy8gdGhpcy5IaWdoR2FtbWE9TnVtYmVyKG1vZHVsZS5icmFpblswXS5IaWdoR2FtbWEpO1xuICAgICAgICAvLyB0aGlzLkxvd0dhbW1hPU51bWJlcihtb2R1bGUuYnJhaW5bMF0uTG93R2FtbWEpO1xuICAgICAgICAvLyB0aGlzLkhpZ2hCZXRhPU51bWJlcihtb2R1bGUuYnJhaW5bMF0uSGlnaEJldGEpO1xuICAgICAgICAvLyB0aGlzLkxvd0JldGE9TnVtYmVyKG1vZHVsZS5icmFpblswXS5Mb3dCZXRhKTtcbiAgICAgICAgLy8gdGhpcy5IaWdoQWxwaGE9TnVtYmVyKG1vZHVsZS5icmFpblswXS5IaWdoQWxwaGEpO1xuXG4gICAgICAgIC8vIHRoaXMuTG93QWxwaGE9TnVtYmVyKG1vZHVsZS5icmFpblswXS5Mb3dBbHBoYSk7XG4gICAgICAgIC8vIHRoaXMuVGhldGE9TnVtYmVyKG1vZHVsZS5icmFpblswXS5UaGV0YSk7XG4gICAgICAgIC8vIHRoaXMuRGVsdGE9TnVtYmVyKG1vZHVsZS5icmFpblswXS5EZWx0YSk7XG4gICAgICAgIC8vIHRoaXMuSGlnaEdhbW1hPU51bWJlcihtb2R1bGUuYnJhaW5bMF0uSGlnaEdhbW1hKTtcbiAgICAgICAgLy8gdGhpcy5Mb3dHYW1tYT1OdW1iZXIobW9kdWxlLmJyYWluWzBdLkxvd0dhbW1hKTtcbiAgICAgICAgLy8gdGhpcy5IaWdoQmV0YT1OdW1iZXIobW9kdWxlLmJyYWluWzBdLkhpZ2hCZXRhKTtcbiAgICAgICAgLy8gdGhpcy5Mb3dCZXRhPU51bWJlcihtb2R1bGUuYnJhaW5bMF0uTG93QmV0YSk7XG4gICAgICAgIC8vIHRoaXMuSGlnaEFscGhhPU51bWJlcihtb2R1bGUuYnJhaW5bMF0uSGlnaEFscGhhKTtcblxuICAgICAgICAvLyAwLTE2Nzc3MjE2XG5cbiAgICB9XG5cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICAvL+abtOaWsOminOiJsuWRqOacn1xuICAgICAgICAvL3RoaXMudXBkYXRlQ29sb3JDeWNsZSgpO1xuICAgICAgICAvL+WIm+W7uui0neWhnuWwlOeCuVxuICAgICAgICB0aGlzLmNyZWF0ZUJlemllck5vZGVzKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMuZGF0YUFycmF5WzBdPXRoaXMuTGVycCh0aGlzLmRhdGFBcnJheVswXSx0aGlzLkxvd0FscGhhLGR0KjIpO1xuICAgICAgICB0aGlzLmRhdGFBcnJheVsxXT10aGlzLkxlcnAodGhpcy5kYXRhQXJyYXlbMV0sdGhpcy5UaGV0YSxkdCoyKTtcbiAgICAgICAgdGhpcy5kYXRhQXJyYXlbMl09dGhpcy5MZXJwKHRoaXMuZGF0YUFycmF5WzJdLHRoaXMuRGVsdGEsZHQqMik7XG4gICAgICAgIHRoaXMuZGF0YUFycmF5WzNdPXRoaXMuTGVycCh0aGlzLmRhdGFBcnJheVszXSx0aGlzLkhpZ2hHYW1tYSxkdCoyKTtcbiAgICAgICAgdGhpcy5kYXRhQXJyYXlbNF09dGhpcy5MZXJwKHRoaXMuZGF0YUFycmF5WzRdLHRoaXMuTG93R2FtbWEsZHQqMik7XG4gICAgICAgIHRoaXMuZGF0YUFycmF5WzVdPXRoaXMuTGVycCh0aGlzLmRhdGFBcnJheVs1XSx0aGlzLkhpZ2hCZXRhLGR0KjIpO1xuICAgICAgICB0aGlzLmRhdGFBcnJheVs2XT10aGlzLkxlcnAodGhpcy5kYXRhQXJyYXlbNl0sdGhpcy5Mb3dCZXRhLGR0KjIpO1xuICAgICAgICB0aGlzLmRhdGFBcnJheVs3XT10aGlzLkxlcnAodGhpcy5kYXRhQXJyYXlbN10sdGhpcy5IaWdoQWxwaGEsZHQqMik7XG5cblxuICAgICAgICB0aGlzLnVwZGF0ZU5vZGUoKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvL+WIm+W7uui0neWhnuWwlOeCuVxuICAgIC8qKlxuICAgICAqXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgZG9vZGxldHNcbiAgICAgKi9cbiAgICBjcmVhdGVCZXppZXJOb2RlcygpIHtcbiAgICAgICAgLy/liJvlu7o45Liq6aG254K5XG4gICAgICAgIGZvciAodmFyIHF1YW50aXR5ID0gMCwgbGVuID0gdGhpcy5wb2ludE51bWJlcjsgcXVhbnRpdHkgPCBsZW47IHF1YW50aXR5KyspIHtcbiAgICAgICAgICAgIHZhciB0aGV0YSA9IE1hdGguUEkgKiAyICogcXVhbnRpdHkgLyBsZW47XG4gICAgICAgICAgICB2YXIgeCA9IDA7XG4gICAgICAgICAgICB2YXIgeSA9IDA7XG4gICAgICAgICAgICB0aGlzLm5vZGVzLnB1c2goe1xuICAgICAgICAgICAgICAgIHg6IHgsXG4gICAgICAgICAgICAgICAgeTogeSxcbiAgICAgICAgICAgICAgICAvL+WcqOWchuS4iumaj+aculxuICAgICAgICAgICAgICAgIGFuZ2xlOiB0aGV0YSxcbiAgICAgICAgICAgICAgICAvL2FuZ2xlOiBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDIsXG4gICAgICAgICAgICAgICAgLy/lvKfluqYgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoZXRhOiB0aGV0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVOb2RlKCkge1xuICAgICAgICAvL+ijheS6hjjkuKrngrlcbiAgICAgICAgbGV0IG5vZGVzID0gdGhpcy5ub2RlcztcblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbm9kZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IG5vZGVzW2luZGV4XTtcbiAgICAgICAgICAgIG5vZGUueCA9IHRoaXMuZGF0YUFycmF5W2luZGV4XSAqIE1hdGguY29zKG5vZGUudGhldGEpLzEwMCp0aGlzLm1heE51bWJlcjtcbiAgICAgICAgICAgIG5vZGUueSA9IHRoaXMuZGF0YUFycmF5W2luZGV4XSAqIE1hdGguc2luKG5vZGUudGhldGEpLzEwMCp0aGlzLm1heE51bWJlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDmm7TmlrDpopzoibLlkajmnJ9cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBkb29kbGV0c1xuICAgICAqL1xuICAgIHVwZGF0ZUNvbG9yQ3ljbGUoKSB7XG4gICAgICAgIC8vIGxldCBjb2xvciA9IHRoaXMubGluZUNvbG9yO1xuICAgICAgICAvLyBjb2xvci5yPTE1MDtcbiAgICAgICAgLy8gY29sb3IuZz0xNTA7XG4gICAgICAgIC8vIGNvbG9yLmI9MTUwO1xuICAgICAgICAvLyBjb2xvci5hID0gMjU1O1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5CYWNrZ3JvdW5kUmVuZGVyKCk7XG4gICAgICAgIHRoaXMuUmFkYXJSZW5kZXIoKTtcbiAgICB9XG4gICAgUmFkYXJSZW5kZXIoKSB7XG4gICAgICAgIGxldCBub2RlcyA9IHRoaXMubm9kZXM7XG4gICAgICAgIGxldCBncmFwaGljcyA9IHRoaXMuZ3JhcGhpY3M7XG4gICAgICAgIHZhciBjdXJyZW50SW5kZXgsIG5leHRJbmRleCwgeGMsIHljO1xuXG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yID0gIHRoaXMubGluZUNvbG9yO1xuICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvci5zZXRBKHRoaXMubGluZUNvbG9yLmEpO1xuICAgICAgICBncmFwaGljcy5maWxsQ29sb3IgPSB0aGlzLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yLnNldEEodGhpcy5iYWNrZ3JvdW5kQ29sb3IuYSk7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xuICAgICAgICBcbiAgICAgICAgLy/kuIvpnaLmnInlpJrlsJHkuKrngrnpgY3ljoblpJrlsJHmrKEgICAgICAgICAgICAgICAgXG4gICAgICAgIFtdLmZvckVhY2guY2FsbChub2RlcywgKG5vZGUsIGluZGV4KSA9PiB7XG5cbiAgICAgICAgICAgIC8v5b2T5YmNbm9kZVxuICAgICAgICAgICAgY3VycmVudEluZGV4ID0gbm9kZXNbbm9kZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAvL+esrDDkuKpub2RlXG4gICAgICAgICAgICBuZXh0SW5kZXggPSBub2Rlc1swXTtcblxuICAgICAgICAgICAgeGMgPSBjdXJyZW50SW5kZXgueCArIChuZXh0SW5kZXgueCAtIGN1cnJlbnRJbmRleC54KSAqIDAuNTtcbiAgICAgICAgICAgIHljID0gY3VycmVudEluZGV4LnkgKyAobmV4dEluZGV4LnkgLSBjdXJyZW50SW5kZXgueSkgKiAwLjU7XG5cbiAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyh4YywgeWMpO1xuXG4gICAgICAgICAgICAvLyBEcmF3IHRocm91Z2ggTiBwb2ludHNcbiAgICAgICAgICAgIGZvciAodmFyIE4gPSAwOyBOIDwgbm9kZXMubGVuZ3RoOyBOKyspIHtcblxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IG5vZGVzW05dO1xuICAgICAgICAgICAgICAgIG5leHRJbmRleCA9IE4gKyAxID4gbm9kZXMubGVuZ3RoIC0gMSA/IG5vZGVzW04gLSBub2Rlcy5sZW5ndGggKyAxXSA6IG5vZGVzW04gKyAxXTtcblxuICAgICAgICAgICAgICAgIHhjID0gY3VycmVudEluZGV4LnggKyAobmV4dEluZGV4LnggLSBjdXJyZW50SW5kZXgueCkgKiAwLjU7XG4gICAgICAgICAgICAgICAgeWMgPSBjdXJyZW50SW5kZXgueSArIChuZXh0SW5kZXgueSAtIGN1cnJlbnRJbmRleC55KSAqIDAuNTtcblxuICAgICAgICAgICAgICAgIGdyYXBoaWNzLnF1YWRyYXRpY0N1cnZlVG8oY3VycmVudEluZGV4LngsIGN1cnJlbnRJbmRleC55LCB4YywgeWMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBncmFwaGljcy5maWxsKCk7XG4gICAgICAgICAgICBncmFwaGljcy5zdHJva2UoKTtcblxuICAgICAgICAgICAgLy8jcmVnaW9uIOaJi+afhOe6v+adoVxuICAgICAgICAgICAgLy8gZ3JhcGhpY3MubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgIC8vIGdyYXBoaWNzLmxpbmVDYXAgPSBjYy5HcmFwaGljcy5MaW5lQ2FwLlJPVU5EO1xuICAgICAgICAgICAgLy8gZ3JhcGhpY3MubGluZUpvaW4gPSBjYy5HcmFwaGljcy5MaW5lSm9pbi5ST1VORDtcbiAgICAgICAgICAgIC8vIGdyYXBoaWNzLnN0cm9rZUNvbG9yLmZyb21IRVgoJyNhOWE5YTknKTtcbiAgICAgICAgICAgIC8vIGdyYXBoaWNzLmZpbGxDb2xvci5mcm9tSEVYKCcjYTlhOWE5Jyk7XG4gICAgICAgICAgICAvLyBEcmF3IHRocm91Z2ggTiBwb2ludHNcbiAgICAgICAgICAgIC8vIGZvcih2YXIgTiA9IDA7IE4gPCBub2Rlcy5sZW5ndGg7IE4rKykge1xuXG4gICAgICAgICAgICAvLyAgICAgLy8gRmlyc3QgYW5jaG9yXG4gICAgICAgICAgICAvLyAgICAgY3VycmVudEluZGV4ID0gbm9kZXNbTl07XG4gICAgICAgICAgICAvLyAgICAgbmV4dEluZGV4ID0gTiArIDEgPiBub2Rlcy5sZW5ndGggLSAxID8gbm9kZXNbTiAtIG5vZGVzLmxlbmd0aCArIDFdIDogbm9kZXNbTiArIDFdO1xuXG4gICAgICAgICAgICAvLyAgICAgeGMgPSBjdXJyZW50SW5kZXgueCArIChuZXh0SW5kZXgueCAtIGN1cnJlbnRJbmRleC54KSAqIDAuODtcbiAgICAgICAgICAgIC8vICAgICB5YyA9IGN1cnJlbnRJbmRleC55ICsgKG5leHRJbmRleC55IC0gY3VycmVudEluZGV4LnkpICogMC44O1xuXG4gICAgICAgICAgICAvLyAgICAgZ3JhcGhpY3MubW92ZVRvKHhjLCB5Yyk7XG5cbiAgICAgICAgICAgIC8vICAgICAvLyBTZWNvbmQgYW5jaG9yXG4gICAgICAgICAgICAvLyAgICAgY3VycmVudEluZGV4ID0gbmV4dEluZGV4O1xuICAgICAgICAgICAgLy8gICAgIG5leHRJbmRleCA9IE4gKyAyID4gbm9kZXMubGVuZ3RoIC0gMSA/IG5vZGVzW04gLSBub2Rlcy5sZW5ndGggKyAyXSA6IG5vZGVzW04gKyAyXTsgXG5cbiAgICAgICAgICAgIC8vICAgICB4YyA9IGN1cnJlbnRJbmRleC54ICsgKG5leHRJbmRleC54IC0gY3VycmVudEluZGV4LngpICogMC4yO1xuICAgICAgICAgICAgLy8gICAgIHljID0gY3VycmVudEluZGV4LnkgKyAobmV4dEluZGV4LnkgLSBjdXJyZW50SW5kZXgueSkgKiAwLjI7XG5cbiAgICAgICAgICAgIC8vICAgICBncmFwaGljcy5saW5lVG8oeGMsIHljKTtcbiAgICAgICAgICAgIC8vICAgICBncmFwaGljcy5zdHJva2UoKTtcblxuICAgICAgICAgICAgLy8gICAgIC8vIEZpcnN0IGFuY2hvclxuICAgICAgICAgICAgLy8gICAgIGN1cnJlbnRJbmRleCA9IG5vZGVzW05dO1xuICAgICAgICAgICAgLy8gICAgIG5leHRJbmRleCA9IE4gKyAxID4gbm9kZXMubGVuZ3RoIC0gMSA/IG5vZGVzW04gLSBub2Rlcy5sZW5ndGggKyAxXSA6IG5vZGVzW04gKyAxXTtcblxuICAgICAgICAgICAgLy8gICAgIHhjID0gY3VycmVudEluZGV4LnggKyAobmV4dEluZGV4LnggLSBjdXJyZW50SW5kZXgueCkgKiAwLjg7XG4gICAgICAgICAgICAvLyAgICAgeWMgPSBjdXJyZW50SW5kZXgueSArIChuZXh0SW5kZXgueSAtIGN1cnJlbnRJbmRleC55KSAqIDAuODtcblxuICAgICAgICAgICAgLy8gICAgIGdyYXBoaWNzLmNpcmNsZSh4YywgeWMsIDIpO1xuICAgICAgICAgICAgLy8gICAgIGdyYXBoaWNzLmZpbGwoKTtcblxuICAgICAgICAgICAgLy8gICAgIC8vIFNlY29uZCBhbmNob3JcbiAgICAgICAgICAgIC8vICAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XG4gICAgICAgICAgICAvLyAgICAgbmV4dEluZGV4ID0gTiArIDIgPiBub2Rlcy5sZW5ndGggLSAxID8gbm9kZXNbTiAtIG5vZGVzLmxlbmd0aCArIDJdIDogbm9kZXNbTiArIDJdOyBcblxuICAgICAgICAgICAgLy8gICAgIHhjID0gY3VycmVudEluZGV4LnggKyAobmV4dEluZGV4LnggLSBjdXJyZW50SW5kZXgueCkgKiAwLjI7XG4gICAgICAgICAgICAvLyAgICAgeWMgPSBjdXJyZW50SW5kZXgueSArIChuZXh0SW5kZXgueSAtIGN1cnJlbnRJbmRleC55KSAqIDAuMjtcblxuICAgICAgICAgICAgLy8gICAgIGdyYXBoaWNzLmNpcmNsZSh4YywgeWMsIDIpO1xuICAgICAgICAgICAgLy8gICAgIGdyYXBoaWNzLmZpbGwoKTtcblxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8jZW5kcmVnaW9uXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEJhY2tncm91bmRSZW5kZXIoKXtcbiAgICAgICAgbGV0IGdyYXBoaWNzID0gdGhpcy5ncmFwaGljcztcblxuICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IHRoaXMuYmdsaW5lQ29sb3I7XG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yLnNldEEodGhpcy5iZ2xpbmVDb2xvci5hKTtcbiAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gdGhpcy5iZ2JhY2tncm91bmRDb2xvcjtcbiAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yLnNldEEodGhpcy5iZ2JhY2tncm91bmRDb2xvci5hKSA7XG4gICAgICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9IHRoaXMuYmdsaW5lV2lkdGg7XG4gICAgICAgIFxuICAgICAgICAvL+erlue6v1xuICAgICAgICAvLyBncmFwaGljcy5tb3ZlVG8oMCwgdGhpcy5tYXhOdW1iZXIpO1xuICAgICAgICAvLyBncmFwaGljcy5saW5lVG8oMCwtdGhpcy5tYXhOdW1iZXIpO1xuXG4gICAgICAgIC8v5qiq57q/XG4gICAgICAgIC8vIGdyYXBoaWNzLm1vdmVUbyh0aGlzLm1heE51bWJlciwgMCk7XG4gICAgICAgIC8vIGdyYXBoaWNzLmxpbmVUbygtdGhpcy5tYXhOdW1iZXIsMCk7XG5cbiAgICAgICAgLy/kuK3pl7TlnIblnIhcbiAgICAgICAgLy8gZ3JhcGhpY3MuY2lyY2xlKDAsMCx0aGlzLm1heE51bWJlciowLjgpO1xuICAgICAgICAvLyBncmFwaGljcy5jaXJjbGUoMCwwLHRoaXMubWF4TnVtYmVyKjAuNyk7XG4gICAgICAgIC8vIGdyYXBoaWNzLmNpcmNsZSgwLDAsdGhpcy5tYXhOdW1iZXIqMC42KTtcbiAgICAgICAgLy8gZ3JhcGhpY3MuY2lyY2xlKDAsMCx0aGlzLm1heE51bWJlciowLjUpO1xuICAgICAgICAvLyBncmFwaGljcy5jaXJjbGUoMCwwLHRoaXMubWF4TnVtYmVyKjAuNCk7XG4gICAgICAgIC8vIGdyYXBoaWNzLmNpcmNsZSgwLDAsdGhpcy5tYXhOdW1iZXIqMC4zKTtcbiAgICAgICAgLy8gZ3JhcGhpY3MuY2lyY2xlKDAsMCx0aGlzLm1heE51bWJlciowLjIpO1xuICAgICAgICAvLyBncmFwaGljcy5jaXJjbGUoMCwwLHRoaXMubWF4TnVtYmVyKjAuMSk7XG5cbiAgICAgICAgLy8gZ3JhcGhpY3MuZmlsbCgpO1xuICAgICAgICAvLyBncmFwaGljcy5zdHJva2UoKTtcbiAgICB9XG5cbiAgICBMZXJwKHN0YXJ0Om51bWJlcixlbmQ6bnVtYmVyLHRpbWU6bnVtYmVyKXtcbiAgICAgICAgcmV0dXJuIHN0YXJ0KyhlbmQtc3RhcnQpKnRpbWU7XG4gICAgfVxuXG5cbn0iXX0=