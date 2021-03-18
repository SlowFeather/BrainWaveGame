
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UI/GameUI/RadarChart.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlcXEdhbWVVSVxcUmFkYXJDaGFydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXdDLDhCQUFZO0lBRHBEO1FBQUEscUVBMk1DO1FBcE1HLGlCQUFXLEdBQVEsQ0FBQyxDQUFDO1FBS3JCLGVBQVMsR0FBUSxDQUFDLENBQUM7UUFLbkIsZUFBUyxHQUFZLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUs3QyxxQkFBZSxHQUFZLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUVuRCxNQUFNO1FBRU4sZUFBUyxHQUFVLEVBQUUsQ0FBQztRQUV0Qjs7Ozs7V0FLRztRQUNGLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBQzdCOzs7O1dBSUc7UUFDSCxXQUFLLEdBQUcsRUFBRSxDQUFDOztJQW1LaEIsQ0FBQztJQWpLRywyQkFBTSxHQUFOO1FBQ0ksTUFBTTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCwwQkFBSyxHQUFMO1FBQ0ksUUFBUTtRQUNSLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCwyQkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7O09BSUc7SUFD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cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJhZGFyQ2hhcnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB0b29sdGlwOlwi5pWw5o2u5Liq5pWwXCJcbiAgICB9KVxuICAgIHBvaW50TnVtYmVyOm51bWJlcj04O1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdG9vbHRpcDpcIue6v+WuveW6plwiXG4gICAgfSlcbiAgICBsaW5lV2lkdGg6bnVtYmVyPTE7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuQ29sb3IsXG4gICAgICAgIHRvb2x0aXA6XCLnur/popzoibJcIlxuICAgIH0pXG4gICAgbGluZUNvbG9yOmNjLkNvbG9yID0gbmV3IGNjLkNvbG9yKDAsMCwwLDI1NSk7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuQ29sb3IsXG4gICAgICAgIHRvb2x0aXA6XCLlhoXpg6jpopzoibJcIlxuICAgIH0pXG4gICAgYmFja2dyb3VuZENvbG9yOmNjLkNvbG9yID0gbmV3IGNjLkNvbG9yKDAsMCwwLDI1NSk7XG5cbiAgICAvL+aVsOaNruaVsOe7hFxuICAgIEBwcm9wZXJ0eShbTnVtYmVyXSlcbiAgICBEYXRhQXJyYXk6bnVtYmVyW109W107XG5cbiAgICAvKipcbiAgICAgKiDmuLLmn5Pnu4Tku7ZcbiAgICAgKlxuICAgICAqIEB0eXBlIHtjYy5HcmFwaGljc31cbiAgICAgKiBAbWVtYmVyb2YgUmFkYXJDaGFydFxuICAgICAqL1xuICAgICBncmFwaGljczogY2MuR3JhcGhpY3MgPSBudWxsO1xuICAgICAvKipcbiAgICAgICog54K55pWw57uEXG4gICAgICAqXG4gICAgICAqIEBtZW1iZXJvZiBSYWRhckNoYXJ0XG4gICAgICAqL1xuICAgICBub2RlcyA9IFtdO1xuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgLy/mi7/liLDnu4Tku7ZcbiAgICAgICAgdGhpcy5ncmFwaGljcz10aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8v5Yib5bu66LSd5aGe5bCU54K5XG4gICAgICAgIHRoaXMuQ3JlYXRlQmV6aWVyTm9kZXMoKTtcbiAgICB9XG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIHRoaXMuVXBkYXRlQ29sb3JDeWNsZSgpO1xuICAgICAgICB0aGlzLlVwZGF0ZU5vZGVQb3MoKTtcbiAgICAgICAgdGhpcy5SZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliJvlu7rngrlcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBSYWRhckNoYXJ0XG4gICAgICovXG4gICAgQ3JlYXRlQmV6aWVyTm9kZXMgKCkge1xuICAgICAgICAvL+WIm+W7ujjkuKrpobbngrlcbiAgICAgICAgZm9yKHZhciBxdWFudGl0eSA9IDAsIGxlbiA9IHRoaXMucG9pbnROdW1iZXI7IHF1YW50aXR5IDwgbGVuOyBxdWFudGl0eSsrKSB7XG4gICAgICAgICAgICB2YXIgdGhldGEgPSBNYXRoLlBJICogMiAqIHF1YW50aXR5IC8gbGVuO1xuICAgICAgICAgICAgdmFyIHggPSAwO1xuICAgICAgICAgICAgdmFyIHkgPSAwO1xuICAgICAgICAgICAgdGhpcy5ub2Rlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB4OiB4LFxuICAgICAgICAgICAgICAgIHk6IHksXG4gICAgICAgICAgICAgICAgYW5nbGU6IHRoZXRhLFxuICAgICAgICAgICAgICAgIC8vYW5nbGU6IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMixcbiAgICAgICAgICAgICAgICAvL+W8p+W6plxuICAgICAgICAgICAgICAgIHRoZXRhOiB0aGV0YVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmm7TmlrDpopzoibLlkajmnJ9cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBSYWRhckNoYXJ0XG4gICAgICovXG4gICAgVXBkYXRlQ29sb3JDeWNsZSgpIHtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5zdHJva2VDb2xvcj10aGlzLmxpbmVDb2xvcjtcbiAgICAgICAgdGhpcy5ncmFwaGljcy5maWxsQ29sb3I9dGhpcy5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgICAgIHRoaXMubm9kZS5vcGFjaXR5PXRoaXMuZ3JhcGhpY3MuZmlsbENvbG9yLmE7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOabtOaWsOeCueS9jVxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIFJhZGFyQ2hhcnRcbiAgICAgKi9cbiAgICBVcGRhdGVOb2RlUG9zKCl7XG4gICAgICAgIGxldCBub2RlcyA9IHRoaXMubm9kZXM7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBub2Rlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gbm9kZXNbaW5kZXhdO1xuICAgICAgICAgICAgbm9kZS54ID0gdGhpcy5EYXRhQXJyYXlbaW5kZXhdKk1hdGguY29zKG5vZGUudGhldGEpO1xuICAgICAgICAgICAgbm9kZS55PSB0aGlzLkRhdGFBcnJheVtpbmRleF0qTWF0aC5zaW4obm9kZS50aGV0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmuLLmn5NcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBSYWRhckNoYXJ0XG4gICAgICovXG4gICAgUmVuZGVyKCkge1xuICAgICAgICBsZXQgbm9kZXMgPSB0aGlzLm5vZGVzO1xuICAgICAgICBsZXQgZ3JhcGhpY3MgPSB0aGlzLmdyYXBoaWNzO1xuICAgICAgICBsZXQgY29sb3IgPSB0aGlzLmxpbmVDb2xvcjtcbiAgICAgICAgbGV0IGJhY2tncm91bmRDb2xvcj10aGlzLmJhY2tncm91bmRDb2xvcjtcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCwgbmV4dEluZGV4LCB4YywgeWM7XG4gICAgICAgIFxuICAgICAgICBncmFwaGljcy5jbGVhcigpO1xuICAgICAgICAvL+S4i+mdouacieWkmuWwkeS4queCuemBjeWOhuWkmuWwkeasoSAgICAgICAgICAgICAgICBcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKG5vZGVzLCAobm9kZSwgaW5kZXgpID0+IHtcbiAgICBcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCA9IG5vZGVzW25vZGVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgLy/nrKww5Liqbm9kZVxuICAgICAgICAgICAgbmV4dEluZGV4ID0gbm9kZXNbMF07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHhjID0gY3VycmVudEluZGV4LnggKyAobmV4dEluZGV4LnggLSBjdXJyZW50SW5kZXgueCkgKiAwLjU7XG4gICAgICAgICAgICB5YyA9IGN1cnJlbnRJbmRleC55ICsgKG5leHRJbmRleC55IC0gY3VycmVudEluZGV4LnkpICogMC41O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IGNvbG9yO1xuICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gYmFja2dyb3VuZENvbG9yO1xuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVdpZHRoID10aGlzLmxpbmVXaWR0aDtcblxuICAgICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHhjLCB5Yyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIERyYXcgdGhyb3VnaCBOIHBvaW50c1xuICAgICAgICAgICAgZm9yKHZhciBOID0gMDsgTiA8IG5vZGVzLmxlbmd0aDsgTisrKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4ID0gbm9kZXNbTl07XG4gICAgICAgICAgICAgICAgbmV4dEluZGV4ID0gTiArIDEgPiBub2Rlcy5sZW5ndGggLSAxID8gbm9kZXNbTiAtIG5vZGVzLmxlbmd0aCArIDFdIDogbm9kZXNbTiArIDFdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHhjID0gY3VycmVudEluZGV4LnggKyAobmV4dEluZGV4LnggLSBjdXJyZW50SW5kZXgueCkgKiAwLjU7XG4gICAgICAgICAgICAgICAgeWMgPSBjdXJyZW50SW5kZXgueSArIChuZXh0SW5kZXgueSAtIGN1cnJlbnRJbmRleC55KSAqIDAuNTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGdyYXBoaWNzLnF1YWRyYXRpY0N1cnZlVG8oY3VycmVudEluZGV4LngsIGN1cnJlbnRJbmRleC55LCB4YywgeWMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbCgpO1xuICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgLy8jcmVnaW9uIOa4suafk+i0neWhnuWwlOaJi+afhFxuICAgICAgICAgICAgLy8gZ3JhcGhpY3MubGluZVdpZHRoID0gMTtcbiAgICAgICAgICAgIC8vIGdyYXBoaWNzLmxpbmVDYXAgPSBjYy5HcmFwaGljcy5MaW5lQ2FwLlJPVU5EO1xuICAgICAgICAgICAgLy8gZ3JhcGhpY3MubGluZUpvaW4gPSBjYy5HcmFwaGljcy5MaW5lSm9pbi5ST1VORDtcbiAgICAgICAgICAgIC8vIGdyYXBoaWNzLnN0cm9rZUNvbG9yLmZyb21IRVgoJyNhOWE5YTknKTtcbiAgICAgICAgICAgIC8vIGdyYXBoaWNzLmZpbGxDb2xvci5mcm9tSEVYKCcjYTlhOWE5Jyk7XG4gICAgICAgICAgICAvLyBEcmF3IHRocm91Z2ggTiBwb2ludHNcbiAgICAgICAgICAgIC8vIGZvcih2YXIgTiA9IDA7IE4gPCBub2Rlcy5sZW5ndGg7IE4rKykge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgIC8vIEZpcnN0IGFuY2hvclxuICAgICAgICAgICAgLy8gICAgIGN1cnJlbnRJbmRleCA9IG5vZGVzW05dO1xuICAgICAgICAgICAgLy8gICAgIG5leHRJbmRleCA9IE4gKyAxID4gbm9kZXMubGVuZ3RoIC0gMSA/IG5vZGVzW04gLSBub2Rlcy5sZW5ndGggKyAxXSA6IG5vZGVzW04gKyAxXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICAgICB4YyA9IGN1cnJlbnRJbmRleC54ICsgKG5leHRJbmRleC54IC0gY3VycmVudEluZGV4LngpICogMC44O1xuICAgICAgICAgICAgLy8gICAgIHljID0gY3VycmVudEluZGV4LnkgKyAobmV4dEluZGV4LnkgLSBjdXJyZW50SW5kZXgueSkgKiAwLjg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAgICAgZ3JhcGhpY3MubW92ZVRvKHhjLCB5Yyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAgICAgLy8gU2Vjb25kIGFuY2hvclxuICAgICAgICAgICAgLy8gICAgIGN1cnJlbnRJbmRleCA9IG5leHRJbmRleDtcbiAgICAgICAgICAgIC8vICAgICBuZXh0SW5kZXggPSBOICsgMiA+IG5vZGVzLmxlbmd0aCAtIDEgPyBub2Rlc1tOIC0gbm9kZXMubGVuZ3RoICsgMl0gOiBub2Rlc1tOICsgMl07IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgIHhjID0gY3VycmVudEluZGV4LnggKyAobmV4dEluZGV4LnggLSBjdXJyZW50SW5kZXgueCkgKiAwLjI7XG4gICAgICAgICAgICAvLyAgICAgeWMgPSBjdXJyZW50SW5kZXgueSArIChuZXh0SW5kZXgueSAtIGN1cnJlbnRJbmRleC55KSAqIDAuMjtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICAgICBncmFwaGljcy5saW5lVG8oeGMsIHljKTtcbiAgICAgICAgICAgIC8vICAgICBncmFwaGljcy5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICAgICAvLyBGaXJzdCBhbmNob3JcbiAgICAgICAgICAgIC8vICAgICBjdXJyZW50SW5kZXggPSBub2Rlc1tOXTtcbiAgICAgICAgICAgIC8vICAgICBuZXh0SW5kZXggPSBOICsgMSA+IG5vZGVzLmxlbmd0aCAtIDEgPyBub2Rlc1tOIC0gbm9kZXMubGVuZ3RoICsgMV0gOiBub2Rlc1tOICsgMV07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAgICAgeGMgPSBjdXJyZW50SW5kZXgueCArIChuZXh0SW5kZXgueCAtIGN1cnJlbnRJbmRleC54KSAqIDAuODtcbiAgICAgICAgICAgIC8vICAgICB5YyA9IGN1cnJlbnRJbmRleC55ICsgKG5leHRJbmRleC55IC0gY3VycmVudEluZGV4LnkpICogMC44O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgIGdyYXBoaWNzLmNpcmNsZSh4YywgeWMsIDIpO1xuICAgICAgICAgICAgLy8gICAgIGdyYXBoaWNzLmZpbGwoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gICAgIC8vIFNlY29uZCBhbmNob3JcbiAgICAgICAgICAgIC8vICAgICBjdXJyZW50SW5kZXggPSBuZXh0SW5kZXg7XG4gICAgICAgICAgICAvLyAgICAgbmV4dEluZGV4ID0gTiArIDIgPiBub2Rlcy5sZW5ndGggLSAxID8gbm9kZXNbTiAtIG5vZGVzLmxlbmd0aCArIDJdIDogbm9kZXNbTiArIDJdOyBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8vICAgICB4YyA9IGN1cnJlbnRJbmRleC54ICsgKG5leHRJbmRleC54IC0gY3VycmVudEluZGV4LngpICogMC4yO1xuICAgICAgICAgICAgLy8gICAgIHljID0gY3VycmVudEluZGV4LnkgKyAobmV4dEluZGV4LnkgLSBjdXJyZW50SW5kZXgueSkgKiAwLjI7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyAgICAgZ3JhcGhpY3MuY2lyY2xlKHhjLCB5YywgMik7XG4gICAgICAgICAgICAvLyAgICAgZ3JhcGhpY3MuZmlsbCgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8jZW5kcmVnaW9uXG5cbiAgICAgICAgfSlcbiAgICB9XG4gICAgXG59XG4iXX0=