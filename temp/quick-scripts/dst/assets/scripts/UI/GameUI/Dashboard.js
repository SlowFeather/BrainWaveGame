
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UI/GameUI/Dashboard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c0558BklONJJbMOmlwH1kFx', 'Dashboard');
// scripts/UI/GameUI/Dashboard.ts

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
var DriveManager_1 = require("../../Manager/DriveManager/DriveManager");
var MessageDispatcher_1 = require("../../Manager/MessageDispatcher/MessageDispatcher");
var MathUtil_1 = require("../../Tools/MathUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Dashboard = /** @class */ (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pointer = null;
        _this.dataLab = null;
        _this.data = 0;
        _this.startNumber = 0;
        _this.endNumber = 0;
        _this.lerping = false;
        _this.timer = 0;
        return _this;
        // USLerp(start:number,end:number,time:number){
        //     return start+(end-start)*time;
        // }
    }
    // onLoad () {}
    Dashboard.prototype.onEnable = function () {
        this.data = 0;
        this.pointer.angle = 125;
        this.dataLab.string = this.data.toString();
        MessageDispatcher_1.default.Instance.AddEventListener(MessageDef_1.MessageDef.BrainValueChangeMessage, this.BrainValueChangeMessageHandler, this);
        // MessageDispatcher.Instance.AddEventListener(MessageDef.BrainConnectMessage,this.BrainConnectMessageHandler,this);
        // MessageDispatcher.Instance.AddEventListener(MessageDef.BrainNotConnectMessage,this.BrainNotConnectMessageHandler,this);
        // MessageDispatcher.Instance.AddEventListener(MessageDef.BrainBlockMessage,this.BrainBlockMessageHandler,this);
    };
    Dashboard.prototype.onDisable = function () {
        MessageDispatcher_1.default.Instance.RemoveEventListener(MessageDef_1.MessageDef.BrainValueChangeMessage, this.BrainValueChangeMessageHandler, this);
        // MessageDispatcher.Instance.RemoveEventListener(MessageDef.BrainConnectMessage,this.BrainConnectMessageHandler,this);
        // MessageDispatcher.Instance.RemoveEventListener(MessageDef.BrainNotConnectMessage,this.BrainNotConnectMessageHandler,this);
        // MessageDispatcher.Instance.RemoveEventListener(MessageDef.BrainBlockMessage,this.BrainBlockMessageHandler,this);
        this.data = 0;
        this.pointer.angle = 125;
        this.dataLab.string = this.data.toString();
    };
    Dashboard.prototype.BrainValueChangeMessageHandler = function (module) {
        // console.log("及拿来了");
        if (module == null) {
            return;
        }
        this.endNumber = Number(DriveManager_1.default.Instance.brainModel.brain[0].Concentration);
        // this.endNumber=Number(DriveManager.Instance.brainModel.brain[0].Relaxation);
        this.StartLerp();
    };
    Dashboard.prototype.start = function () {
        //this.data=0;
        // console.log();
        // this.pointer.angle=0 - this.Remap(this.data,0,100,-125,125);
        //this.pointer.angle=0 - MathUtil.reMap(this.data,0,100,-125,125);
        //this.dataLab.string=this.data.toString();
    };
    Dashboard.prototype.UpdateReadData = function () {
        if (DriveManager_1.default.Instance.brainModel == null) {
            return;
        }
        // this.data=Number(DriveManager.Instance.brainModel.brain[0].Relaxation);
        // this.pointer.angle=0 - MathUtil.reMap(this.data,0,100,-125,125);
        // this.dataLab.string=this.data.toString();
        //这里开始1s的计时，每刻都要给指针赋值
        //console.log(Number(DriveManager.Instance.brainModel.brain[0].Relaxation));
        this.endNumber = Number(DriveManager_1.default.Instance.brainModel.brain[0].Relaxation);
        // 100 -> 50
        // this.data -> endNum
        this.StartLerp();
        // var obj = { a: this.data }
        // cc.tween(obj)
        // .to(1, { a: Number(DriveManager.Instance.brainModel.brain[0].Relaxation) },{
        //     progress:(start, end, current, time)=>{
        //         console.log(current);
        //     }
        // })
        // .start()
        // cc.tween(sdk).to(1, { a: 10 }, {
        //     progress: (start, end, current, time) => {
        //         // this.lab.string = Math.round(start + (end - start) * time) + '';//修改页面上的值
        //         console.log('修改ing', start + (end - start) * time);
        //         return start + (end - start) * time;
        //     },
        //     // easing: "quintOut",
        // }).call(() => {
        //     console.log('结束了，看看值', sdk.a);
        // }).start();
    };
    Dashboard.prototype.update = function (dt) {
        //console.log(this.data);
        if (this.lerping) {
            this.timer += dt;
            if (this.timer >= 1) {
                this.lerping = false;
                this.timer = 0;
            }
            else {
                this.data = this.Lerp(this.data, this.endNumber, dt * 2);
                this.pointer.angle = 0 - MathUtil_1.default.reMap(this.data, 0, 100, -125, 125);
                this.dataLab.string = Math.floor(this.data).toString();
            }
        }
    };
    Dashboard.prototype.StartLerp = function () {
        this.lerping = true;
        this.timer = 0;
        // this.startNumber=this.data;
        // this.endNumber=0;
    };
    Dashboard.prototype.Lerp = function (start, end, time) {
        return start + (end - start) * time;
    };
    __decorate([
        property(cc.Node)
    ], Dashboard.prototype, "pointer", void 0);
    __decorate([
        property(cc.Label)
    ], Dashboard.prototype, "dataLab", void 0);
    __decorate([
        property(Number)
    ], Dashboard.prototype, "data", void 0);
    Dashboard = __decorate([
        ccclass
    ], Dashboard);
    return Dashboard;
}(cc.Component));
exports.default = Dashboard;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlcXEdhbWVVSVxcRGFzaGJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFrRDtBQUNsRCx3RUFBbUY7QUFDbkYsdUZBQWtGO0FBQ2xGLGlEQUE0QztBQUV0QyxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXVDLDZCQUFZO0lBRG5EO1FBQUEscUVBeUlDO1FBcklHLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFHeEIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUl6QixVQUFJLEdBQVEsQ0FBQyxDQUFDO1FBMEZkLGlCQUFXLEdBQUMsQ0FBQyxDQUFDO1FBQ2QsZUFBUyxHQUFDLENBQUMsQ0FBQztRQUNaLGFBQU8sR0FBQyxLQUFLLENBQUM7UUFDZCxXQUFLLEdBQUMsQ0FBQyxDQUFDOztRQTJCUiwrQ0FBK0M7UUFDL0MscUNBQXFDO1FBQ3JDLElBQUk7SUFJUixDQUFDO0lBN0hHLGVBQWU7SUFFZiw0QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBQyxDQUFDLENBQUM7UUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBQyxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN6QywyQkFBaUIsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsdUJBQVUsQ0FBQyx1QkFBdUIsRUFBQyxJQUFJLENBQUMsOEJBQThCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDekgsb0hBQW9IO1FBQ3BILDBIQUEwSDtRQUMxSCxnSEFBZ0g7SUFLcEgsQ0FBQztJQUVELDZCQUFTLEdBQVQ7UUFDSSwyQkFBaUIsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsdUJBQVUsQ0FBQyx1QkFBdUIsRUFBQyxJQUFJ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OEJBQThCO1FBQzlCLG9CQUFvQjtJQUN4QixDQUFDO0lBQ0Qsd0JBQUksR0FBSixVQUFLLEtBQVksRUFBQyxHQUFVLEVBQUMsSUFBVztRQUNwQyxPQUFPLEtBQUssR0FBQyxDQUFDLEdBQUcsR0FBQyxLQUFLLENBQUMsR0FBQyxJQUFJLENBQUM7SUFDbEMsQ0FBQztJQTlIRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNNO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ007SUFJekI7UUFEQyxRQUFRLENBQUMsTUFBTSxDQUFDOzJDQUNIO0lBVkcsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXdJN0I7SUFBRCxnQkFBQztDQXhJRCxBQXdJQyxDQXhJc0MsRUFBRSxDQUFDLFNBQVMsR0F3SWxEO2tCQXhJb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc3NhZ2VEZWYgfSBmcm9tIFwiLi4vLi4vRGVmL01lc3NhZ2VEZWZcIjtcbmltcG9ydCBEcml2ZU1hbmFnZXIsIHsgQnJhaW5Nb2RlbCB9IGZyb20gXCIuLi8uLi9NYW5hZ2VyL0RyaXZlTWFuYWdlci9Ecml2ZU1hbmFnZXJcIjtcbmltcG9ydCBNZXNzYWdlRGlzcGF0Y2hlciBmcm9tIFwiLi4vLi4vTWFuYWdlci9NZXNzYWdlRGlzcGF0Y2hlci9NZXNzYWdlRGlzcGF0Y2hlclwiO1xuaW1wb3J0IE1hdGhVdGlsIGZyb20gXCIuLi8uLi9Ub29scy9NYXRoVXRpbFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhc2hib2FyZCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwb2ludGVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBkYXRhTGFiOiBjYy5MYWJlbCA9IG51bGw7XG5cblxuICAgIEBwcm9wZXJ0eShOdW1iZXIpXG4gICAgZGF0YTpudW1iZXI9MDtcbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIG9uRW5hYmxlKCl7XG4gICAgICAgIHRoaXMuZGF0YT0wO1xuICAgICAgICB0aGlzLnBvaW50ZXIuYW5nbGU9MTI1O1xuICAgICAgICB0aGlzLmRhdGFMYWIuc3RyaW5nPXRoaXMuZGF0YS50b1N0cmluZygpO1xuICAgICAgICBNZXNzYWdlRGlzcGF0Y2hlci5JbnN0YW5jZS5BZGRFdmVudExpc3RlbmVyKE1lc3NhZ2VEZWYuQnJhaW5WYWx1ZUNoYW5nZU1lc3NhZ2UsdGhpcy5CcmFpblZhbHVlQ2hhbmdlTWVzc2FnZUhhbmRsZXIsdGhpcyk7XG4gICAgICAgIC8vIE1lc3NhZ2VEaXNwYXRjaGVyLkluc3RhbmNlLkFkZEV2ZW50TGlzdGVuZXIoTWVzc2FnZURlZi5CcmFpbkNvbm5lY3RNZXNzYWdlLHRoaXMuQnJhaW5Db25uZWN0TWVzc2FnZUhhbmRsZXIsdGhpcyk7XG4gICAgICAgIC8vIE1lc3NhZ2VEaXNwYXRjaGVyLkluc3RhbmNlLkFkZEV2ZW50TGlzdGVuZXIoTWVzc2FnZURlZi5CcmFpbk5vdENvbm5lY3RNZXNzYWdlLHRoaXMuQnJhaW5Ob3RDb25uZWN0TWVzc2FnZUhhbmRsZXIsdGhpcyk7XG4gICAgICAgIC8vIE1lc3NhZ2VEaXNwYXRjaGVyLkluc3RhbmNlLkFkZEV2ZW50TGlzdGVuZXIoTWVzc2FnZURlZi5CcmFpbkJsb2NrTWVzc2FnZSx0aGlzLkJyYWluQmxvY2tNZXNzYWdlSGFuZGxlcix0aGlzKTtcbiAgICAgICAgXG5cblxuXG4gICAgfVxuXG4gICAgb25EaXNhYmxlKCl7XG4gICAgICAgIE1lc3NhZ2VEaXNwYXRjaGVyLkluc3RhbmNlLlJlbW92ZUV2ZW50TGlzdGVuZXIoTWVzc2FnZURlZi5CcmFpblZhbHVlQ2hhbmdlTWVzc2FnZSx0aGlzLkJyYWluVmFsdWVDaGFuZ2VNZXNzYWdlSGFuZGxlcix0aGlzKTtcbiAgICAgICAgLy8gTWVzc2FnZURpc3BhdGNoZXIuSW5zdGFuY2UuUmVtb3ZlRXZlbnRMaXN0ZW5lcihNZXNzYWdlRGVmLkJyYWluQ29ubmVjdE1lc3NhZ2UsdGhpcy5CcmFpbkNvbm5lY3RNZXNzYWdlSGFuZGxlcix0aGlzKTtcbiAgICAgICAgLy8gTWVzc2FnZURpc3BhdGNoZXIuSW5zdGFuY2UuUmVtb3ZlRXZlbnRMaXN0ZW5lcihNZXNzYWdlRGVmLkJyYWluTm90Q29ubmVjdE1lc3NhZ2UsdGhpcy5CcmFpbk5vdENvbm5lY3RNZXNzYWdlSGFuZGxlcix0aGlzKTtcbiAgICAgICAgLy8gTWVzc2FnZURpc3BhdGNoZXIuSW5zdGFuY2UuUmVtb3ZlRXZlbnRMaXN0ZW5lcihNZXNzYWdlRGVmLkJyYWluQmxvY2tNZXNzYWdlLHRoaXMuQnJhaW5CbG9ja01lc3NhZ2VIYW5kbGVyLHRoaXMpO1xuICAgICAgICB0aGlzLmRhdGE9MDtcbiAgICAgICAgdGhpcy5wb2ludGVyLmFuZ2xlPTEyNTtcbiAgICAgICAgdGhpcy5kYXRhTGFiLnN0cmluZz10aGlzLmRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG5cblxuICAgIEJyYWluVmFsdWVDaGFuZ2VNZXNzYWdlSGFuZGxlcihtb2R1bGU6QnJhaW5Nb2RlbCl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5Y+K5ou/5p2l5LqGXCIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKG1vZHVsZT09bnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5kTnVtYmVyPU51bWJlcihEcml2ZU1hbmFnZXIuSW5zdGFuY2UuYnJhaW5Nb2RlbC5icmFpblswXS5Db25jZW50cmF0aW9uKTtcbiAgICAgICAgLy8gdGhpcy5lbmROdW1iZXI9TnVtYmVyKERyaXZlTWFuYWdlci5JbnN0YW5jZS5icmFpbk1vZGVsLmJyYWluWzBdLlJlbGF4YXRpb24pO1xuXG4gICAgICAgIHRoaXMuU3RhcnRMZXJwKCk7XG4gICAgfVxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy90aGlzLmRhdGE9MDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHRoaXMucG9pbnRlci5hbmdsZT0wIC0gdGhpcy5SZW1hcCh0aGlzLmRhdGEsMCwxMDAsLTEyNSwxMjUpO1xuICAgICAgICAvL3RoaXMucG9pbnRlci5hbmdsZT0wIC0gTWF0aFV0aWwucmVNYXAodGhpcy5kYXRhLDAsMTAwLC0xMjUsMTI1KTtcbiAgICAgICAgLy90aGlzLmRhdGFMYWIuc3RyaW5nPXRoaXMuZGF0YS50b1N0cmluZygpO1xuXG4gICAgfVxuXG5cbiAgICBVcGRhdGVSZWFkRGF0YSgpe1xuICAgICAgICBpZiAoRHJpdmVNYW5hZ2VyLkluc3RhbmNlLmJyYWluTW9kZWw9PW51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMuZGF0YT1OdW1iZXIoRHJpdmVNYW5hZ2VyLkluc3RhbmNlLmJyYWluTW9kZWwuYnJhaW5bMF0uUmVsYXhhdGlvbik7XG4gICAgICAgIC8vIHRoaXMucG9pbnRlci5hbmdsZT0wIC0gTWF0aFV0aWwucmVNYXAodGhpcy5kYXRhLDAsMTAwLC0xMjUsMTI1KTtcbiAgICAgICAgLy8gdGhpcy5kYXRhTGFiLnN0cmluZz10aGlzLmRhdGEudG9TdHJpbmcoKTtcblxuICAgICAgICAvL+i/memHjOW8gOWnizFz55qE6K6h5pe277yM5q+P5Yi76YO96KaB57uZ5oyH6ZKI6LWL5YC8XG4gICAgICAgIC8vY29uc29sZS5sb2coTnVtYmVyKERyaXZlTWFuYWdlci5JbnN0YW5jZS5icmFpbk1vZGVsLmJyYWluWzBdLlJlbGF4YXRpb24pKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZW5kTnVtYmVyPU51bWJlcihEcml2ZU1hbmFnZXIuSW5zdGFuY2UuYnJhaW5Nb2RlbC5icmFpblswXS5SZWxheGF0aW9uKTtcbiAgICAgICAgLy8gMTAwIC0+IDUwXG4gICAgICAgIC8vIHRoaXMuZGF0YSAtPiBlbmROdW1cbiAgICAgICAgdGhpcy5TdGFydExlcnAoKTtcblxuXG4gICAgICAgIC8vIHZhciBvYmogPSB7IGE6IHRoaXMuZGF0YSB9XG4gICAgICAgIC8vIGNjLnR3ZWVuKG9iailcbiAgICAgICAgLy8gLnRvKDEsIHsgYTogTnVtYmVyKERyaXZlTWFuYWdlci5JbnN0YW5jZS5icmFpbk1vZGVsLmJyYWluWzBdLlJlbGF4YXRpb24pIH0se1xuICAgICAgICAvLyAgICAgcHJvZ3Jlc3M6KHN0YXJ0LCBlbmQsIGN1cnJlbnQsIHRpbWUpPT57XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coY3VycmVudCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pXG4gICAgICAgIC8vIC5zdGFydCgpXG4gICAgICAgIC8vIGNjLnR3ZWVuKHNkaykudG8oMSwgeyBhOiAxMCB9LCB7XG4gICAgICAgIC8vICAgICBwcm9ncmVzczogKHN0YXJ0LCBlbmQsIGN1cnJlbnQsIHRpbWUpID0+IHtcbiAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLmxhYi5zdHJpbmcgPSBNYXRoLnJvdW5kKHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHRpbWUpICsgJyc7Ly/kv67mlLnpobXpnaLkuIrnmoTlgLxcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZygn5L+u5pS5aW5nJywgc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogdGltZSk7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHN0YXJ0ICsgKGVuZCAtIHN0YXJ0KSAqIHRpbWU7XG4gICAgICAgIC8vICAgICB9LFxuICAgICAgICAvLyAgICAgLy8gZWFzaW5nOiBcInF1aW50T3V0XCIsXG4gICAgICAgIC8vIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ+e7k+adn+S6hu+8jOeci+eci+WAvCcsIHNkay5hKTtcbiAgICAgICAgLy8gfSkuc3RhcnQoKTtcbiAgICB9XG5cblxuICAgIHN0YXJ0TnVtYmVyPTA7XG4gICAgZW5kTnVtYmVyPTA7XG4gICAgbGVycGluZz1mYWxzZTtcbiAgICB0aW1lcj0wO1xuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmRhdGEpO1xuICAgICAgICBpZiAodGhpcy5sZXJwaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVyKz1kdDtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyPj0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sZXJwaW5nPWZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMudGltZXI9MDtcblxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhPSB0aGlzLkxlcnAodGhpcy5kYXRhLHRoaXMuZW5kTnVtYmVyLGR0KjIpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludGVyLmFuZ2xlPTAgLSBNYXRoVXRpbC5yZU1hcCh0aGlzLmRhdGEsMCwxMDAsLTEyNSwxMjUpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YUxhYi5zdHJpbmc9TWF0aC5mbG9vcih0aGlzLmRhdGEpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgU3RhcnRMZXJwKCl7XG4gICAgICAgIHRoaXMubGVycGluZz10cnVlO1xuICAgICAgICB0aGlzLnRpbWVyPTA7XG5cbiAgICAgICAgLy8gdGhpcy5zdGFydE51bWJlcj10aGlzLmRhdGE7XG4gICAgICAgIC8vIHRoaXMuZW5kTnVtYmVyPTA7XG4gICAgfVxuICAgIExlcnAoc3RhcnQ6bnVtYmVyLGVuZDpudW1iZXIsdGltZTpudW1iZXIpe1xuICAgICAgICByZXR1cm4gc3RhcnQrKGVuZC1zdGFydCkqdGltZTtcbiAgICB9XG4gICAgLy8gVVNMZXJwKHN0YXJ0Om51bWJlcixlbmQ6bnVtYmVyLHRpbWU6bnVtYmVyKXtcbiAgICAvLyAgICAgcmV0dXJuIHN0YXJ0KyhlbmQtc3RhcnQpKnRpbWU7XG4gICAgLy8gfVxuXG4gICAgXG5cbn1cbiJdfQ==