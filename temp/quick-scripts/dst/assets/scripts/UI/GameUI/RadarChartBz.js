
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
        console.log("--->LowAlpha 原：" + Number(module.brain[0].LowAlpha) + "-后：" + lowAlpha + "-最后：" + this.LowAlpha);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlcXEdhbWVVSVxcUmFkYXJDaGFydEJ6LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFrRDtBQUVsRCx1RkFBa0Y7QUFDbEYsaURBQTRDO0FBRXRDLElBQUEsa0JBR1csRUFGYixvQkFBTyxFQUNQLHNCQUNhLENBQUM7QUFHbEI7SUFBMEMsZ0NBQVk7SUFEdEQ7UUFBQSxxRUE4WkM7UUF2WkcsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFFeEIsTUFBTTtRQUtOLGVBQVMsR0FBYSxFQUFFLENBQUM7UUFPekIsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUV4QixnQkFBZ0I7UUFLaEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQVcxQixZQUFZO1FBRVIsWUFBWTtRQUtaLGlCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBVzVCLFlBQVk7UUFLUjs7Ozs7V0FLRztRQUNILGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBQzdCOzs7O1dBSUc7UUFDSCxXQUFLLEdBQUcsRUFBRSxDQUFDO1FBMkJYLGNBQVEsR0FBUSxDQUFDLENBQUM7UUFDbEIsV0FBSyxHQUFRLENBQUMsQ0FBQztRQUNmLFdBQUssR0FBUSxDQUFDLENBQUM7UUFDZixlQUFTLEdBQVEsQ0FBQyxDQUFDO1FBQ25CLGNBQVEsR0FBUSxDQUFDLENBQUM7UUFDbEIsY0FBUSxHQUFRLENBQUMsQ0FBQztRQUNsQixhQUFPLEdBQVEsQ0FBQyxDQUFDO1FBQ2pCLGVBQVMsR0FBUSxDQUFDLENBQUM7O0lBa1R2QixDQUFDO0lBbFZHLDZCQUFNLEdBQU47UUFDSSxNQUFNO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FB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QztZQUNkLE9BQU8sRUFBRSxNQUFNO1NBQ2xCLENBQUM7bURBQ3VCO0lBT3pCO1FBSkMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUUsTUFBTTtTQUNsQixDQUFDO21EQUNzQjtJQU94QjtRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxNQUFNO1lBQ1osT0FBTyxFQUFFLEtBQUs7U0FDakIsQ0FBQzttREFDb0I7SUFLdEI7UUFKQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUs7WUFDZCxPQUFPLEVBQUUsS0FBSztTQUNqQixDQUFDO21EQUNtQjtJQUtyQjtRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSztZQUNkLE9BQU8sRUFBRSxNQUFNO1NBQ2xCLENBQUM7eURBQ3dCO0lBUTFCO1FBSkMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUUsS0FBSztTQUNqQixDQUFDO3FEQUNzQjtJQUt4QjtRQUpDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsS0FBSztZQUNkLE9BQU8sRUFBRSxLQUFLO1NBQ2pCLENBQUM7cURBQ29CO0lBS3RCO1FBSkMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLO1lBQ2QsT0FBTyxFQUFFLE1BQU07U0FDbEIsQ0FBQzsyREFDMEI7SUF2RFgsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQTZaaEM7SUFBRCxtQkFBQztDQTdaRCxBQTZaQyxDQTdaeUMsRUFBRSxDQUFDLFNBQVMsR0E2WnJEO2tCQTdab0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc3NhZ2VEZWYgfSBmcm9tIFwiLi4vLi4vRGVmL01lc3NhZ2VEZWZcIjtcbmltcG9ydCBEcml2ZU1hbmFnZXIsIHsgQnJhaW5Nb2RlbCB9IGZyb20gXCIuLi8uLi9NYW5hZ2VyL0RyaXZlTWFuYWdlci9Ecml2ZU1hbmFnZXJcIjtcbmltcG9ydCBNZXNzYWdlRGlzcGF0Y2hlciBmcm9tIFwiLi4vLi4vTWFuYWdlci9NZXNzYWdlRGlzcGF0Y2hlci9NZXNzYWdlRGlzcGF0Y2hlclwiO1xuaW1wb3J0IE1hdGhVdGlsIGZyb20gXCIuLi8uLi9Ub29scy9NYXRoVXRpbFwiO1xuXG5jb25zdCB7XG4gICAgY2NjbGFzcyxcbiAgICBwcm9wZXJ0eVxufSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYWRhckNoYXJ0QnogZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB0b29sdGlwOiBcIuaVsOaNruS4quaVsFwiXG4gICAgfSlcbiAgICBwb2ludE51bWJlcjogbnVtYmVyID0gODtcblxuICAgIC8v5pWw5o2u5pWw57uEXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogW051bWJlcl0sXG4gICAgICAgIHRvb2x0aXA6IFwi5pWw5o2u5pWw57uEXCJcbiAgICB9KVxuICAgIGRhdGFBcnJheTogbnVtYmVyW10gPSBbXTtcblxuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB0b29sdGlwOiBcIuacgOWkp+i+ueeVjFwiXG4gICAgfSlcbiAgICBtYXhOdW1iZXI6IG51bWJlciA9IDEwMDtcblxuICAgIC8vI3JlZ2lvbiDotJ3loZ7lsJTpm7fovr7lm75cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHRvb2x0aXA6IFwi57q/5a695bqmXCJcbiAgICB9KVxuICAgIGxpbmVXaWR0aDogbnVtYmVyID0gMTtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5Db2xvcixcbiAgICAgICAgdG9vbHRpcDogXCLnur/popzoibJcIlxuICAgIH0pXG4gICAgbGluZUNvbG9yOiBjYy5Db2xvciA7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuQ29sb3IsXG4gICAgICAgIHRvb2x0aXA6IFwi5YaF6YOo6aKc6ImyXCJcbiAgICB9KVxuICAgIGJhY2tncm91bmRDb2xvcjogY2MuQ29sb3I7XG4vLyNlbmRyZWdpb25cblxuICAgIC8vI3JlZ2lvbiDlupXmnb9cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHRvb2x0aXA6IFwi57q/5a695bqmXCJcbiAgICB9KVxuICAgIGJnbGluZVdpZHRoOiBudW1iZXIgPSAxO1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLkNvbG9yLFxuICAgICAgICB0b29sdGlwOiBcIue6v+minOiJslwiXG4gICAgfSlcbiAgICBiZ2xpbmVDb2xvcjogY2MuQ29sb3I7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuQ29sb3IsXG4gICAgICAgIHRvb2x0aXA6IFwi5YaF6YOo6aKc6ImyXCJcbiAgICB9KVxuICAgIGJnYmFja2dyb3VuZENvbG9yOiBjYy5Db2xvcjtcbi8vI2VuZHJlZ2lvblxuICAgIFxuXG5cblxuICAgIC8qKlxuICAgICAqIOa4suafk+e7hOS7tlxuICAgICAqXG4gICAgICogQHR5cGUge2NjLkdyYXBoaWNzfVxuICAgICAqIEBtZW1iZXJvZiBkb29kbGV0c1xuICAgICAqL1xuICAgIGdyYXBoaWNzOiBjYy5HcmFwaGljcyA9IG51bGw7XG4gICAgLyoqXG4gICAgICog54K55pWw57uEXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgZG9vZGxldHNcbiAgICAgKi9cbiAgICBub2RlcyA9IFtdO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvL+aLv+WIsOe7hOS7tlxuICAgICAgICB0aGlzLmdyYXBoaWNzID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKXtcbiAgICAgICAgdGhpcy5kYXRhQXJyYXlbMF09MDtcbiAgICAgICAgdGhpcy5kYXRhQXJyYXlbMV09MDtcbiAgICAgICAgdGhpcy5kYXRhQXJyYXlbMl09MDtcbiAgICAgICAgdGhpcy5kYXRhQXJyYXlbM109MDtcbiAgICAgICAgdGhpcy5kYXRhQXJyYXlbNF09MDtcbiAgICAgICAgdGhpcy5kYXRhQXJyYXlbNV09MDtcbiAgICAgICAgdGhpcy5kYXRhQXJyYXlbNl09MDtcbiAgICAgICAgdGhpcy5kYXRhQXJyYXlbN109MDtcbiAgICAgICAgdGhpcy51cGRhdGVOb2RlKCk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIE1lc3NhZ2VEaXNwYXRjaGVyLkluc3RhbmNlLkFkZEV2ZW50TGlzdGVuZXIoTWVzc2FnZURlZi5CcmFpblZhbHVlQ2hhbmdlTWVzc2FnZSx0aGlzLkJyYWluVmFsdWVDaGFuZ2VNZXNzYWdlSGFuZGxlcix0aGlzKTtcblxuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpe1xuXG4gICAgfVxuXG5cbiAgICBMb3dBbHBoYTpudW1iZXI9MDtcbiAgICBUaGV0YTpudW1iZXI9MDtcbiAgICBEZWx0YTpudW1iZXI9MDtcbiAgICBIaWdoR2FtbWE6bnVtYmVyPTA7XG4gICAgTG93R2FtbWE6bnVtYmVyPTA7XG4gICAgSGlnaEJldGE6bnVtYmVyPTA7XG4gICAgTG93QmV0YTpudW1iZXI9MDtcbiAgICBIaWdoQWxwaGE6bnVtYmVyPTA7XG5cblxuICAgIEJyYWluVmFsdWVDaGFuZ2VNZXNzYWdlSGFuZGxlcihtb2R1bGU6QnJhaW5Nb2RlbCl7XG4gICAgICAgIGlmIChtb2R1bGU9PW51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLzAtMTY3NzcyMTZcblxuICAgICAgICBsZXQgbG93QWxwaGE9TnVtYmVyKG1vZHVsZS5icmFpblswXS5Mb3dBbHBoYSk7XG4gICAgICAgIGxldCB0aGV0YT1OdW1iZXIobW9kdWxlLmJyYWluWzBdLlRoZXRhKTtcbiAgICAgICAgbGV0IGRlbHRhPU51bWJlcihtb2R1bGUuYnJhaW5bMF0uRGVsdGEpO1xuICAgICAgICBsZXQgaGlnaEdhbW1hPU51bWJlcihtb2R1bGUuYnJhaW5bMF0uSGlnaEdhbW1hKTtcbiAgICAgICAgbGV0IGxvd0dhbW1hPU51bWJlcihtb2R1bGUuYnJhaW5bMF0uTG93R2FtbWEpO1xuICAgICAgICBsZXQgaGlnaEJldGE9TnVtYmVyKG1vZHVsZS5icmFpblswXS5IaWdoQmV0YSk7XG4gICAgICAgIGxldCBsb3dCZXRhPU51bWJlcihtb2R1bGUuYnJhaW5bMF0uTG93QmV0YSk7XG4gICAgICAgIGxldCBoaWdoQWxwaGE9TnVtYmVyKG1vZHVsZS5icmFpblswXS5IaWdoQWxwaGEpO1xuXG4gICAgICAgIGxldCBjb2VmZmljaWVudD0xMDAwMDA7XG5cbiAgICAgICAgaWYgKGxvd0FscGhhPD1jb2VmZmljaWVudCkge1xuICAgICAgICAgICAgbG93QWxwaGE9IGxvd0FscGhhKmNvZWZmaWNpZW50O1xuICAgICAgICAgICAgaWYgKGxvd0FscGhhPj0xNjc3NzIxNikge1xuICAgICAgICAgICAgICAgIGxvd0FscGhhPTE2Nzc3MjE2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGV0YTw9Y29lZmZpY2llbnQpIHtcbiAgICAgICAgICAgIHRoZXRhPSB0aGV0YSpjb2VmZmljaWVudDtcbiAgICAgICAgICAgIGlmICh0aGV0YT49MTY3NzcyMTYpIHtcbiAgICAgICAgICAgICAgICB0aGV0YT0xNjc3NzIxNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVsdGE8PWNvZWZmaWNpZW50KSB7XG4gICAgICAgICAgICBkZWx0YT0gZGVsdGEqY29lZmZpY2llbnQ7XG4gICAgICAgICAgICBpZiAoZGVsdGE+PTE2Nzc3MjE2KSB7XG4gICAgICAgICAgICAgICAgZGVsdGE9MTY3NzcyMTY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhpZ2hHYW1tYTw9Y29lZmZpY2llbnQpIHtcbiAgICAgICAgICAgIGhpZ2hHYW1tYT0gaGlnaEdhbW1hKmNvZWZmaWNpZW50O1xuICAgICAgICAgICAgaWYgKGhpZ2hHYW1tYT49MTY3NzcyMTYpIHtcbiAgICAgICAgICAgICAgICBoaWdoR2FtbWE9MTY3NzcyMTY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvd0dhbW1hPD1jb2VmZmljaWVudCkge1xuICAgICAgICAgICAgbG93R2FtbWE9IGxvd0dhbW1hKmNvZWZmaWNpZW50O1xuICAgICAgICAgICAgaWYgKGxvd0dhbW1hPj0xNjc3NzIxNikge1xuICAgICAgICAgICAgICAgIGxvd0dhbW1hPTE2Nzc3MjE2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChoaWdoQmV0YTw9Y29lZmZpY2llbnQpIHtcbiAgICAgICAgICAgIGhpZ2hCZXRhPSBoaWdoQmV0YSpjb2VmZmljaWVudDtcbiAgICAgICAgICAgIGlmIChoaWdoQmV0YT49MTY3NzcyMTYpIHtcbiAgICAgICAgICAgICAgICBoaWdoQmV0YT0xNjc3NzIxNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobG93QmV0YTw9Y29lZmZpY2llbnQpIHtcbiAgICAgICAgICAgIGxvd0JldGE9IGxvd0JldGEqY29lZmZpY2llbnQ7XG4gICAgICAgICAgICBpZiAobG93QmV0YT49MTY3NzcyMTYpIHtcbiAgICAgICAgICAgICAgICBsb3dCZXRhPTE2Nzc3MjE2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChoaWdoQWxwaGE8PWNvZWZmaWNpZW50KSB7XG4gICAgICAgICAgICBoaWdoQWxwaGE9IGhpZ2hBbHBoYSpjb2VmZmljaWVudDtcbiAgICAgICAgICAgIGlmIChoaWdoQWxwaGE+PTE2Nzc3MjE2KSB7XG4gICAgICAgICAgICAgICAgaGlnaEFscGhhPTE2Nzc3MjE2O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuXG5cbiAgICAgICAgdGhpcy5Mb3dBbHBoYT1NYXRoVXRpbC5yZU1hcChsb3dBbHBoYSwwLDE2Nzc3MjE2LDAsMTAwKTtcbiAgICAgICAgdGhpcy5UaGV0YT1NYXRoVXRpbC5yZU1hcCh0aGV0YSwwLDE2Nzc3MjE2LDAsMTAwKSA7XG4gICAgICAgIHRoaXMuRGVsdGE9TWF0aFV0aWwucmVNYXAoZGVsdGEsMCwxNjc3NzIxNiwwLDEwMCkgO1xuICAgICAgICB0aGlzLkhpZ2hHYW1tYT1NYXRoVXRpbC5yZU1hcChoaWdoR2FtbWEsMCwxNjc3NzIxNiwwLDEwMCkgO1xuICAgICAgICB0aGlzLkxvd0dhbW1hPU1hdGhVdGlsLnJlTWFwKGxvd0dhbW1hLDAsMTY3NzcyMTYsMCwxMDApIDtcbiAgICAgICAgdGhpcy5IaWdoQmV0YT1NYXRoVXRpbC5yZU1hcChOdW1iZXIoaGlnaEJldGEpLDAsMTY3NzcyMTYsMCwxMDApIDtcbiAgICAgICAgdGhpcy5Mb3dCZXRhPU1hdGhVdGlsLnJlTWFwKE51bWJlcihsb3dCZXRhKSwwLDE2Nzc3MjE2LDAsMTAwKSA7XG4gICAgICAgIHRoaXMuSGlnaEFscGhhPU1hdGhVdGlsLnJlTWFwKE51bWJlcihoaWdoQWxwaGEpLDAsMTY3NzcyMTYsMCwxMDApIDtcbiAgICAgICAgY29uc29sZS5sb2coXCItLS0+TG93QWxwaGEg5Y6f77yaXCIrTnVtYmVyKG1vZHVsZS5icmFpblswXS5Mb3dBbHBoYSkrXCIt5ZCO77yaXCIrbG93QWxwaGErXCIt5pyA5ZCO77yaXCIrdGhpcy5Mb3dBbHBoYSk7XG5cblxuICAgICAgICAvLyB0aGlzLlRoZXRhPU51bWJlcihtb2R1bGUuYnJhaW5bMF0uVGhldGEpO1xuICAgICAgICAvLyB0aGlzLkRlbHRhPU51bWJlcihtb2R1bGUuYnJhaW5bMF0uRGVsdGEpO1xuICAgICAgICAvLyB0aGlzLkhpZ2hHYW1tYT1OdW1iZXIobW9kdWxlLmJyYWluWzBdLkhpZ2hHYW1tYSk7XG4gICAgICAgIC8vIHRoaXMuTG93R2FtbWE9TnVtYmVyKG1vZHVsZS5icmFpblswXS5Mb3dHYW1tYSk7XG4gICAgICAgIC8vIHRoaXMuSGlnaEJldGE9TnVtYmVyKG1vZHVsZS5icmFpblswXS5IaWdoQmV0YSk7XG4gICAgICAgIC8vIHRoaXMuTG93QmV0YT1OdW1iZXIobW9kdWxlLmJyYWluWzBdLkxvd0JldGEpO1xuICAgICAgICAvLyB0aGlzLkhpZ2hBbHBoYT1OdW1iZXIobW9kdWxlLmJyYWluWzBdLkhpZ2hBbHBoYSk7XG5cbiAgICAgICAgLy8gdGhpcy5Mb3dBbHBoYT1OdW1iZXIobW9kdWxlLmJyYWluWzBdLkxvd0FscGhhKTtcbiAgICAgICAgLy8gdGhpcy5UaGV0YT1OdW1iZXIobW9kdWxlLmJyYWluWzBdLlRoZXRhKTtcbiAgICAgICAgLy8gdGhpcy5EZWx0YT1OdW1iZXIobW9kdWxlLmJyYWluWzBdLkRlbHRhKTtcbiAgICAgICAgLy8gdGhpcy5IaWdoR2FtbWE9TnVtYmVyKG1vZHVsZS5icmFpblswXS5IaWdoR2FtbWEpO1xuICAgICAgICAvLyB0aGlzLkxvd0dhbW1hPU51bWJlcihtb2R1bGUuYnJhaW5bMF0uTG93R2FtbWEpO1xuICAgICAgICAvLyB0aGlzLkhpZ2hCZXRhPU51bWJlcihtb2R1bGUuYnJhaW5bMF0uSGlnaEJldGEpO1xuICAgICAgICAvLyB0aGlzLkxvd0JldGE9TnVtYmVyKG1vZHVsZS5icmFpblswXS5Mb3dCZXRhKTtcbiAgICAgICAgLy8gdGhpcy5IaWdoQWxwaGE9TnVtYmVyKG1vZHVsZS5icmFpblswXS5IaWdoQWxwaGEpO1xuXG4gICAgICAgIC8vIDAtMTY3NzcyMTZcblxuICAgIH1cblxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8v5pu05paw6aKc6Imy5ZGo5pyfXG4gICAgICAgIC8vdGhpcy51cGRhdGVDb2xvckN5Y2xlKCk7XG4gICAgICAgIC8v5Yib5bu66LSd5aGe5bCU54K5XG4gICAgICAgIHRoaXMuY3JlYXRlQmV6aWVyTm9kZXMoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5kYXRhQXJyYXlbMF09dGhpcy5MZXJwKHRoaXMuZGF0YUFycmF5WzBdLHRoaXMuTG93QWxwaGEsZHQqMik7XG4gICAgICAgIHRoaXMuZGF0YUFycmF5WzFdPXRoaXMuTGVycCh0aGlzLmRhdGFBcnJheVsxXSx0aGlzLlRoZXRhLGR0KjIpO1xuICAgICAgICB0aGlzLmRhdGFBcnJheVsyXT10aGlzLkxlcnAodGhpcy5kYXRhQXJyYXlbMl0sdGhpcy5EZWx0YSxkdCoyKTtcbiAgICAgICAgdGhpcy5kYXRhQXJyYXlbM109dGhpcy5MZXJwKHRoaXMuZGF0YUFycmF5WzNdLHRoaXMuSGlnaEdhbW1hLGR0KjIpO1xuICAgICAgICB0aGlzLmRhdGFBcnJheVs0XT10aGlzLkxlcnAodGhpcy5kYXRhQXJyYXlbNF0sdGhpcy5Mb3dHYW1tYSxkdCoyKTtcbiAgICAgICAgdGhpcy5kYXRhQXJyYXlbNV09dGhpcy5MZXJwKHRoaXMuZGF0YUFycmF5WzVdLHRoaXMuSGlnaEJldGEsZHQqMik7XG4gICAgICAgIHRoaXMuZGF0YUFycmF5WzZdPXRoaXMuTGVycCh0aGlzLmRhdGFBcnJheVs2XSx0aGlzLkxvd0JldGEsZHQqMik7XG4gICAgICAgIHRoaXMuZGF0YUFycmF5WzddPXRoaXMuTGVycCh0aGlzLmRhdGFBcnJheVs3XSx0aGlzLkhpZ2hBbHBoYSxkdCoyKTtcblxuXG4gICAgICAgIHRoaXMudXBkYXRlTm9kZSgpO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIC8v5Yib5bu66LSd5aGe5bCU54K5XG4gICAgLyoqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBkb29kbGV0c1xuICAgICAqL1xuICAgIGNyZWF0ZUJlemllck5vZGVzKCkge1xuICAgICAgICAvL+WIm+W7ujjkuKrpobbngrlcbiAgICAgICAgZm9yICh2YXIgcXVhbnRpdHkgPSAwLCBsZW4gPSB0aGlzLnBvaW50TnVtYmVyOyBxdWFudGl0eSA8IGxlbjsgcXVhbnRpdHkrKykge1xuICAgICAgICAgICAgdmFyIHRoZXRhID0gTWF0aC5QSSAqIDIgKiBxdWFudGl0eSAvIGxlbjtcbiAgICAgICAgICAgIHZhciB4ID0gMDtcbiAgICAgICAgICAgIHZhciB5ID0gMDtcbiAgICAgICAgICAgIHRoaXMubm9kZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgICAgICB5OiB5LFxuICAgICAgICAgICAgICAgIC8v5Zyo5ZyG5LiK6ZqP5py6XG4gICAgICAgICAgICAgICAgYW5nbGU6IHRoZXRhLFxuICAgICAgICAgICAgICAgIC8vYW5nbGU6IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMixcbiAgICAgICAgICAgICAgICAvL+W8p+W6piAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhldGE6IHRoZXRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZU5vZGUoKSB7XG4gICAgICAgIC8v6KOF5LqGOOS4queCuVxuICAgICAgICBsZXQgbm9kZXMgPSB0aGlzLm5vZGVzO1xuXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBub2Rlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gbm9kZXNbaW5kZXhdO1xuICAgICAgICAgICAgbm9kZS54ID0gdGhpcy5kYXRhQXJyYXlbaW5kZXhdICogTWF0aC5jb3Mobm9kZS50aGV0YSkvMTAwKnRoaXMubWF4TnVtYmVyO1xuICAgICAgICAgICAgbm9kZS55ID0gdGhpcy5kYXRhQXJyYXlbaW5kZXhdICogTWF0aC5zaW4obm9kZS50aGV0YSkvMTAwKnRoaXMubWF4TnVtYmVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOabtOaWsOminOiJsuWRqOacn1xuICAgICAqXG4gICAgICogQG1lbWJlcm9mIGRvb2RsZXRzXG4gICAgICovXG4gICAgdXBkYXRlQ29sb3JDeWNsZSgpIHtcbiAgICAgICAgLy8gbGV0IGNvbG9yID0gdGhpcy5saW5lQ29sb3I7XG4gICAgICAgIC8vIGNvbG9yLnI9MTUwO1xuICAgICAgICAvLyBjb2xvci5nPTE1MDtcbiAgICAgICAgLy8gY29sb3IuYj0xNTA7XG4gICAgICAgIC8vIGNvbG9yLmEgPSAyNTU7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5jbGVhcigpO1xuICAgICAgICB0aGlzLkJhY2tncm91bmRSZW5kZXIoKTtcbiAgICAgICAgdGhpcy5SYWRhclJlbmRlcigpO1xuICAgIH1cbiAgICBSYWRhclJlbmRlcigpIHtcbiAgICAgICAgbGV0IG5vZGVzID0gdGhpcy5ub2RlcztcbiAgICAgICAgbGV0IGdyYXBoaWNzID0gdGhpcy5ncmFwaGljcztcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCwgbmV4dEluZGV4LCB4YywgeWM7XG5cbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSAgdGhpcy5saW5lQ29sb3I7XG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yLnNldEEodGhpcy5saW5lQ29sb3IuYSk7XG4gICAgICAgIGdyYXBoaWNzLmZpbGxDb2xvciA9IHRoaXMuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICBncmFwaGljcy5maWxsQ29sb3Iuc2V0QSh0aGlzLmJhY2tncm91bmRDb2xvci5hKTtcbiAgICAgICAgZ3JhcGhpY3MubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XG4gICAgICAgIFxuICAgICAgICAvL+S4i+mdouacieWkmuWwkeS4queCuemBjeWOhuWkmuWwkeasoSAgICAgICAgICAgICAgICBcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKG5vZGVzLCAobm9kZSwgaW5kZXgpID0+IHtcblxuICAgICAgICAgICAgLy/lvZPliY1ub2RlXG4gICAgICAgICAgICBjdXJyZW50SW5kZXggPSBub2Rlc1tub2Rlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIC8v56ysMOS4qm5vZGVcbiAgICAgICAgICAgIG5leHRJbmRleCA9IG5vZGVzWzBdO1xuXG4gICAgICAgICAgICB4YyA9IGN1cnJlbnRJbmRleC54ICsgKG5leHRJbmRleC54IC0gY3VycmVudEluZGV4LngpICogMC41O1xuICAgICAgICAgICAgeWMgPSBjdXJyZW50SW5kZXgueSArIChuZXh0SW5kZXgueSAtIGN1cnJlbnRJbmRleC55KSAqIDAuNTtcblxuICAgICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHhjLCB5Yyk7XG5cbiAgICAgICAgICAgIC8vIERyYXcgdGhyb3VnaCBOIHBvaW50c1xuICAgICAgICAgICAgZm9yICh2YXIgTiA9IDA7IE4gPCBub2Rlcy5sZW5ndGg7IE4rKykge1xuXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4ID0gbm9kZXNbTl07XG4gICAgICAgICAgICAgICAgbmV4dEluZGV4ID0gTiArIDEgPiBub2Rlcy5sZW5ndGggLSAxID8gbm9kZXNbTiAtIG5vZGVzLmxlbmd0aCArIDFdIDogbm9kZXNbTiArIDFdO1xuXG4gICAgICAgICAgICAgICAgeGMgPSBjdXJyZW50SW5kZXgueCArIChuZXh0SW5kZXgueCAtIGN1cnJlbnRJbmRleC54KSAqIDAuNTtcbiAgICAgICAgICAgICAgICB5YyA9IGN1cnJlbnRJbmRleC55ICsgKG5leHRJbmRleC55IC0gY3VycmVudEluZGV4LnkpICogMC41O1xuXG4gICAgICAgICAgICAgICAgZ3JhcGhpY3MucXVhZHJhdGljQ3VydmVUbyhjdXJyZW50SW5kZXgueCwgY3VycmVudEluZGV4LnksIHhjLCB5Yyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGdyYXBoaWNzLmZpbGwoKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAvLyNyZWdpb24g5omL5p+E57q/5p2hXG4gICAgICAgICAgICAvLyBncmFwaGljcy5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgLy8gZ3JhcGhpY3MubGluZUNhcCA9IGNjLkdyYXBoaWNzLkxpbmVDYXAuUk9VTkQ7XG4gICAgICAgICAgICAvLyBncmFwaGljcy5saW5lSm9pbiA9IGNjLkdyYXBoaWNzLkxpbmVKb2luLlJPVU5EO1xuICAgICAgICAgICAgLy8gZ3JhcGhpY3Muc3Ryb2tlQ29sb3IuZnJvbUhFWCgnI2E5YTlhOScpO1xuICAgICAgICAgICAgLy8gZ3JhcGhpY3MuZmlsbENvbG9yLmZyb21IRVgoJyNhOWE5YTknKTtcbiAgICAgICAgICAgIC8vIERyYXcgdGhyb3VnaCBOIHBvaW50c1xuICAgICAgICAgICAgLy8gZm9yKHZhciBOID0gMDsgTiA8IG5vZGVzLmxlbmd0aDsgTisrKSB7XG5cbiAgICAgICAgICAgIC8vICAgICAvLyBGaXJzdCBhbmNob3JcbiAgICAgICAgICAgIC8vICAgICBjdXJyZW50SW5kZXggPSBub2Rlc1tOXTtcbiAgICAgICAgICAgIC8vICAgICBuZXh0SW5kZXggPSBOICsgMSA+IG5vZGVzLmxlbmd0aCAtIDEgPyBub2Rlc1tOIC0gbm9kZXMubGVuZ3RoICsgMV0gOiBub2Rlc1tOICsgMV07XG5cbiAgICAgICAgICAgIC8vICAgICB4YyA9IGN1cnJlbnRJbmRleC54ICsgKG5leHRJbmRleC54IC0gY3VycmVudEluZGV4LngpICogMC44O1xuICAgICAgICAgICAgLy8gICAgIHljID0gY3VycmVudEluZGV4LnkgKyAobmV4dEluZGV4LnkgLSBjdXJyZW50SW5kZXgueSkgKiAwLjg7XG5cbiAgICAgICAgICAgIC8vICAgICBncmFwaGljcy5tb3ZlVG8oeGMsIHljKTtcblxuICAgICAgICAgICAgLy8gICAgIC8vIFNlY29uZCBhbmNob3JcbiAgICAgICAgICAgIC8vICAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XG4gICAgICAgICAgICAvLyAgICAgbmV4dEluZGV4ID0gTiArIDIgPiBub2Rlcy5sZW5ndGggLSAxID8gbm9kZXNbTiAtIG5vZGVzLmxlbmd0aCArIDJdIDogbm9kZXNbTiArIDJdOyBcblxuICAgICAgICAgICAgLy8gICAgIHhjID0gY3VycmVudEluZGV4LnggKyAobmV4dEluZGV4LnggLSBjdXJyZW50SW5kZXgueCkgKiAwLjI7XG4gICAgICAgICAgICAvLyAgICAgeWMgPSBjdXJyZW50SW5kZXgueSArIChuZXh0SW5kZXgueSAtIGN1cnJlbnRJbmRleC55KSAqIDAuMjtcblxuICAgICAgICAgICAgLy8gICAgIGdyYXBoaWNzLmxpbmVUbyh4YywgeWMpO1xuICAgICAgICAgICAgLy8gICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xuXG4gICAgICAgICAgICAvLyAgICAgLy8gRmlyc3QgYW5jaG9yXG4gICAgICAgICAgICAvLyAgICAgY3VycmVudEluZGV4ID0gbm9kZXNbTl07XG4gICAgICAgICAgICAvLyAgICAgbmV4dEluZGV4ID0gTiArIDEgPiBub2Rlcy5sZW5ndGggLSAxID8gbm9kZXNbTiAtIG5vZGVzLmxlbmd0aCArIDFdIDogbm9kZXNbTiArIDFdO1xuXG4gICAgICAgICAgICAvLyAgICAgeGMgPSBjdXJyZW50SW5kZXgueCArIChuZXh0SW5kZXgueCAtIGN1cnJlbnRJbmRleC54KSAqIDAuODtcbiAgICAgICAgICAgIC8vICAgICB5YyA9IGN1cnJlbnRJbmRleC55ICsgKG5leHRJbmRleC55IC0gY3VycmVudEluZGV4LnkpICogMC44O1xuXG4gICAgICAgICAgICAvLyAgICAgZ3JhcGhpY3MuY2lyY2xlKHhjLCB5YywgMik7XG4gICAgICAgICAgICAvLyAgICAgZ3JhcGhpY3MuZmlsbCgpO1xuXG4gICAgICAgICAgICAvLyAgICAgLy8gU2Vjb25kIGFuY2hvclxuICAgICAgICAgICAgLy8gICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcbiAgICAgICAgICAgIC8vICAgICBuZXh0SW5kZXggPSBOICsgMiA+IG5vZGVzLmxlbmd0aCAtIDEgPyBub2Rlc1tOIC0gbm9kZXMubGVuZ3RoICsgMl0gOiBub2Rlc1tOICsgMl07IFxuXG4gICAgICAgICAgICAvLyAgICAgeGMgPSBjdXJyZW50SW5kZXgueCArIChuZXh0SW5kZXgueCAtIGN1cnJlbnRJbmRleC54KSAqIDAuMjtcbiAgICAgICAgICAgIC8vICAgICB5YyA9IGN1cnJlbnRJbmRleC55ICsgKG5leHRJbmRleC55IC0gY3VycmVudEluZGV4LnkpICogMC4yO1xuXG4gICAgICAgICAgICAvLyAgICAgZ3JhcGhpY3MuY2lyY2xlKHhjLCB5YywgMik7XG4gICAgICAgICAgICAvLyAgICAgZ3JhcGhpY3MuZmlsbCgpO1xuXG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyNlbmRyZWdpb25cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgQmFja2dyb3VuZFJlbmRlcigpe1xuICAgICAgICBsZXQgZ3JhcGhpY3MgPSB0aGlzLmdyYXBoaWNzO1xuXG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yID0gdGhpcy5iZ2xpbmVDb2xvcjtcbiAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3Iuc2V0QSh0aGlzLmJnbGluZUNvbG9yLmEpO1xuICAgICAgICBncmFwaGljcy5maWxsQ29sb3IgPSB0aGlzLmJnYmFja2dyb3VuZENvbG9yO1xuICAgICAgICBncmFwaGljcy5maWxsQ29sb3Iuc2V0QSh0aGlzLmJnYmFja2dyb3VuZENvbG9yLmEpIDtcbiAgICAgICAgZ3JhcGhpY3MubGluZVdpZHRoID0gdGhpcy5iZ2xpbmVXaWR0aDtcbiAgICAgICAgXG4gICAgICAgIC8v56uW57q/XG4gICAgICAgIC8vIGdyYXBoaWNzLm1vdmVUbygwLCB0aGlzLm1heE51bWJlcik7XG4gICAgICAgIC8vIGdyYXBoaWNzLmxpbmVUbygwLC10aGlzLm1heE51bWJlcik7XG5cbiAgICAgICAgLy/mqKrnur9cbiAgICAgICAgLy8gZ3JhcGhpY3MubW92ZVRvKHRoaXMubWF4TnVtYmVyLCAwKTtcbiAgICAgICAgLy8gZ3JhcGhpY3MubGluZVRvKC10aGlzLm1heE51bWJlciwwKTtcblxuICAgICAgICAvL+S4remXtOWchuWciFxuICAgICAgICAvLyBncmFwaGljcy5jaXJjbGUoMCwwLHRoaXMubWF4TnVtYmVyKjAuOCk7XG4gICAgICAgIC8vIGdyYXBoaWNzLmNpcmNsZSgwLDAsdGhpcy5tYXhOdW1iZXIqMC43KTtcbiAgICAgICAgLy8gZ3JhcGhpY3MuY2lyY2xlKDAsMCx0aGlzLm1heE51bWJlciowLjYpO1xuICAgICAgICAvLyBncmFwaGljcy5jaXJjbGUoMCwwLHRoaXMubWF4TnVtYmVyKjAuNSk7XG4gICAgICAgIC8vIGdyYXBoaWNzLmNpcmNsZSgwLDAsdGhpcy5tYXhOdW1iZXIqMC40KTtcbiAgICAgICAgLy8gZ3JhcGhpY3MuY2lyY2xlKDAsMCx0aGlzLm1heE51bWJlciowLjMpO1xuICAgICAgICAvLyBncmFwaGljcy5jaXJjbGUoMCwwLHRoaXMubWF4TnVtYmVyKjAuMik7XG4gICAgICAgIC8vIGdyYXBoaWNzLmNpcmNsZSgwLDAsdGhpcy5tYXhOdW1iZXIqMC4xKTtcblxuICAgICAgICAvLyBncmFwaGljcy5maWxsKCk7XG4gICAgICAgIC8vIGdyYXBoaWNzLnN0cm9rZSgpO1xuICAgIH1cblxuICAgIExlcnAoc3RhcnQ6bnVtYmVyLGVuZDpudW1iZXIsdGltZTpudW1iZXIpe1xuICAgICAgICByZXR1cm4gc3RhcnQrKGVuZC1zdGFydCkqdGltZTtcbiAgICB9XG5cblxufSJdfQ==