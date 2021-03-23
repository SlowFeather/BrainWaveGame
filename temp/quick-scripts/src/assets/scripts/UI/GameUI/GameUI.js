"use strict";
cc._RF.push(module, '8086c5Z25hKOZmo7WWJXqAJ', 'GameUI');
// scripts/UI/GameUI/GameUI.ts

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
var UIDef_1 = require("../../Def/UIDef");
var DriveManager_1 = require("../../Manager/DriveManager/DriveManager");
var MessageDispatcher_1 = require("../../Manager/MessageDispatcher/MessageDispatcher");
var SoundManager_1 = require("../../Manager/SoundManager");
var UserManager_1 = require("../../Manager/UserManager/UserManager");
var TimeUtil_1 = require("../../Tools/TimeUtil");
var UIUtil_1 = require("../../Tools/UIUtil");
var CountDown_1 = require("./CountDown");
var Dashboard_1 = require("./Dashboard");
var RadarChartBz_1 = require("./RadarChartBz");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameUI = /** @class */ (function (_super) {
    __extends(GameUI, _super);
    function GameUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameUI.prototype.onEnable = function () {
        this.countDown.StartCountDown(this.OnCountDownEndHandler);
        //发送游戏开始消息
        MessageDispatcher_1.default.Instance.Dispatch(MessageDef_1.MessageDef.BrainGameStart);
        MessageDispatcher_1.default.Instance.AddEventListener(MessageDef_1.MessageDef.BrainBlockMessage, this.BrainBlockMessageHandler, this);
        MessageDispatcher_1.default.Instance.AddEventListener(MessageDef_1.MessageDef.BrainNotConnectMessage, this.BrainNotConnectMessageHandler, this);
        MessageDispatcher_1.default.Instance.AddEventListener(MessageDef_1.MessageDef.BrainValueChangeMessage, this.BrainValueChangeMessageHandler, this);
        //开始访问设备
        DriveManager_1.default.Instance.StartPinDrive();
        //记录开始时间戳
        UserManager_1.default.Instance.InitPostResultModel();
        UserManager_1.default.Instance.PostResultModel.startTime = TimeUtil_1.TimeUtil.getYMDHMS(Date.now()).toString();
        //2021-03-19 12:45:00
        // var date2 = new Date("2016/01/27 12:00:00")
        // console.log();
    };
    GameUI.prototype.onDisable = function () {
        //发送游戏结束消息
        MessageDispatcher_1.default.Instance.Dispatch(MessageDef_1.MessageDef.BrainGameEnd);
        //释放计时器
        this.countDown.ReleaseCountDown();
        //停止访问设备
        DriveManager_1.default.Instance.StopPingDrive();
        // DriveManager.Instance.OnBrainValueChangeEvent=null;
        MessageDispatcher_1.default.Instance.RemoveEventListener(MessageDef_1.MessageDef.BrainBlockMessage, this.BrainBlockMessageHandler, this);
        MessageDispatcher_1.default.Instance.RemoveEventListener(MessageDef_1.MessageDef.BrainNotConnectMessage, this.BrainNotConnectMessageHandler, this);
        MessageDispatcher_1.default.Instance.RemoveEventListener(MessageDef_1.MessageDef.BrainValueChangeMessage, this.BrainValueChangeMessageHandler, this);
        // DriveManager.Instance.OnBrainNotConnectEvent=null;
        //记录游戏结束时间戳
        // UserManager.Instance.PostResultModel.endTime=Date.now().toString();
        UserManager_1.default.Instance.PostResultModel.endTime = TimeUtil_1.TimeUtil.getYMDHMS(Date.now()).toString();
    };
    GameUI.prototype.start = function () {
        // console.log("-->进入GameUI start");
    };
    GameUI.prototype.BrainValueChangeMessageHandler = function (module) {
        var dateModule = new UserManager_1.PostResultData();
        dateModule.delta = module.brain[0].Delta;
        dateModule.theta = module.brain[0].Theta;
        dateModule.lowAlpha = module.brain[0].LowAlpha;
        dateModule.highAlpha = module.brain[0].HighAlpha;
        dateModule.lowBeta = module.brain[0].LowBeta;
        dateModule.highBeta = module.brain[0].HighBeta;
        dateModule.lowGamma = module.brain[0].LowGamma;
        dateModule.highGamma = module.brain[0].HighGamma;
        dateModule.concentration = module.brain[0].Concentration;
        dateModule.relaxation = module.brain[0].Relaxation;
        UserManager_1.default.Instance.PostResultModel.data.push(dateModule);
    };
    GameUI.prototype.BrainNotConnectMessageHandler = function () {
        if (this.countDown.stoped) {
        }
        else {
            this.OnBlockBtnClick();
        }
    };
    GameUI.prototype.BrainBlockMessageHandler = function () {
        this.OnBlockBtnClick();
    };
    GameUI.prototype.OnCountDownEndHandler = function () {
        console.log("--> 游戏结束" + this.node.name);
        UIUtil_1.default.ShowUI(UIDef_1.UIDef.ShowResultUI, function () {
            UIUtil_1.default.HideUI(UIDef_1.UIDef.GameUI);
        });
    };
    GameUI.prototype.OnBackBtnClick = function () {
        console.log("--> 点击了回到主页面按钮");
        SoundManager_1.default.playEffect(2);
        UIUtil_1.default.ShowUI(UIDef_1.UIDef.StartUI, function () {
            UIUtil_1.default.HideUI(UIDef_1.UIDef.GameUI);
        });
    };
    GameUI.prototype.OnBlockBtnClick = function () {
        // console.log("--> 点击了断开连接按钮");
        this.countDown.StopCountDown();
        UIUtil_1.default.ShowUI(UIDef_1.UIDef.DisConnectUI);
    };
    GameUI.prototype.OnConnectBtnClick = function () {
        // console.log("--> 点击了恢复连接按钮");
        this.countDown.ContinueCountDown();
        UIUtil_1.default.HideUI(UIDef_1.UIDef.DisConnectUI);
    };
    GameUI.prototype.onDestroy = function () {
    };
    GameUI.prototype.update = function (dt) {
    };
    __decorate([
        property(CountDown_1.default)
    ], GameUI.prototype, "countDown", void 0);
    __decorate([
        property(Dashboard_1.default)
    ], GameUI.prototype, "dashboard", void 0);
    __decorate([
        property(RadarChartBz_1.default)
    ], GameUI.prototype, "radarChartBz", void 0);
    GameUI = __decorate([
        ccclass
    ], GameUI);
    return GameUI;
}(cc.Component));
exports.default = GameUI;

cc._RF.pop();