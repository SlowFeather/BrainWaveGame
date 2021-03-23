"use strict";
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
        this.pointer.angle = 0;
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
        this.pointer.angle = 0;
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
                this.pointer.angle = 0 - MathUtil_1.default.reMap(this.data, 0, 100, 0, 250);
                this.dataLab.string = Math.floor(this.data).toString();
                // console.log("角度："+this.pointer.angle+"数字："+this.endNumber);
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