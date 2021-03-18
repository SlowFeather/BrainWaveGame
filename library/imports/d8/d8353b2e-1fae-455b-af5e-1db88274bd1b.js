"use strict";
cc._RF.push(module, 'd8353suH65FW69eHbiCdL0b', 'RadarChart');
// scripts/UI/GameUI/RadarChart.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var RadarChart = /** @class */ (function (_super) {
    __extends(RadarChart, _super);
    function RadarChart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pointNumber = 8;
        _this.lineWidth = 1;
        _this.lineColor = new cc.Color(0, 0, 0, 255);
        _this.backgroundColor = new cc.Color(0, 0, 0, 255);
        //数据数组
        _this.DataArray = [];
        /**
         * 渲染组件
         *
         * @type {cc.Graphics}
         * @memberof RadarChart
         */
        _this.graphics = null;
        /**
         * 点数组
         *
         * @memberof RadarChart
         */
        _this.nodes = [];
        return _this;
    }
    RadarChart.prototype.onLoad = function () {
        //拿到组件
        this.graphics = this.node.getComponent(cc.Graphics);
    };
    RadarChart.prototype.start = function () {
        //创建贝塞尔点
        this.CreateBezierNodes();
    };
    RadarChart.prototype.update = function (dt) {
        this.UpdateColorCycle();
        this.UpdateNodePos();
        this.Render();
    };
    /**
     * 创建点
     *
     * @memberof RadarChart
     */
    RadarChart.prototype.CreateBezierNodes = function () {
        //创建8个顶点
        for (var quantity = 0, len = this.pointNumber; quantity < len; quantity++) {
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
    };
    /**
     * 更新颜色周期
     *
     * @memberof RadarChart
     */
    RadarChart.prototype.UpdateColorCycle = function () {
        this.graphics.strokeColor = this.lineColor;
        this.graphics.fillColor = this.backgroundColor;
        this.node.opacity = this.graphics.fillColor.a;
    };
    /**
     * 更新点位
     *
     * @memberof RadarChart
     */
    RadarChart.prototype.UpdateNodePos = function () {
        var nodes = this.nodes;
        for (var index = 0; index < nodes.length; index++) {
            var node = nodes[index];
            node.x = this.DataArray[index] * Math.cos(node.theta);
            node.y = this.DataArray[index] * Math.sin(node.theta);
        }
    };
    /**
     * 渲染
     *
     * @memberof RadarChart
     */
    RadarChart.prototype.Render = function () {
        var _this = this;
        var nodes = this.nodes;
        var graphics = this.graphics;
        var color = this.lineColor;
        var backgroundColor = this.backgroundColor;
        var currentIndex, nextIndex, xc, yc;
        graphics.clear();
        //下面有多少个点遍历多少次                
        [].forEach.call(nodes, function (node, index) {
            currentIndex = nodes[nodes.length - 1];
            //第0个node
            nextIndex = nodes[0];
            xc = currentIndex.x + (nextIndex.x - currentIndex.x) * 0.5;
            yc = currentIndex.y + (nextIndex.y - currentIndex.y) * 0.5;
            graphics.strokeColor = color;
            graphics.fillColor = backgroundColor;
            graphics.lineWidth = _this.lineWidth;
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
        });
    };
    __decorate([
        property({
            type: Number,
            tooltip: "数据个数"
        })
    ], RadarChart.prototype, "pointNumber", void 0);
    __decorate([
        property({
            type: Number,
            tooltip: "线宽度"
        })
    ], RadarChart.prototype, "lineWidth", void 0);
    __decorate([
        property({
            type: cc.Color,
            tooltip: "线颜色"
        })
    ], RadarChart.prototype, "lineColor", void 0);
    __decorate([
        property({
            type: cc.Color,
            tooltip: "内部颜色"
        })
    ], RadarChart.prototype, "backgroundColor", void 0);
    __decorate([
        property([Number])
    ], RadarChart.prototype, "DataArray", void 0);
    RadarChart = __decorate([
        ccclass
    ], RadarChart);
    return RadarChart;
}(cc.Component));
exports.default = RadarChart;

cc._RF.pop();