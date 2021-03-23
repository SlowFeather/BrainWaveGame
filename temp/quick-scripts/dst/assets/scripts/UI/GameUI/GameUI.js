
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UI/GameUI/GameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlcXEdhbWVVSVxcR2FtZVVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFrRDtBQUNsRCx5Q0FBd0M7QUFDeEMsd0VBQW1GO0FBQ25GLHVGQUFrRjtBQUNsRiwyREFBc0Q7QUFDdEQscUVBQXFHO0FBRXJHLGlEQUFnRDtBQUNoRCw2Q0FBd0M7QUFDeEMseUNBQW9DO0FBQ3BDLHlDQUFvQztBQUNwQywrQ0FBMEM7QUFFcEMsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQUFoRDs7SUEwSEEsQ0FBQztJQS9HRyx5QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFHMUQsVUFBVTtRQUNWLDJCQUFpQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsdUJBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUUvRCwyQkFBaUIsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsdUJBQVUsQ0FBQyxpQkFBaUIsRUFBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0csMkJBQWlCLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLHVCQUFVLENBQUMsc0JBQXNCLEVBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZILDJCQUFpQixDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBVSxDQUFDLHVCQUF1QixFQUFDLElBQUksQ0FBQyw4QkFBOEIsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUV6SCxRQUFRO1FBQ1Isc0JBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFdEMsU0FBUztRQUNULHFCQUFXLENBQUMsUUFBUSxDQUFDLG1CQUFtQixF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O1FBREMsUUFBUSxDQUFDLG1CQUFTLENBQUM7NkNBQ0E7SUFHcEI7UUFEQyxRQUFRLENBQUMsbUJBQVMsQ0FBQzs2Q0FDQTtJQUdwQjtRQURDLFFBQVEsQ0FBQyxzQkFBWSxDQUFDO2dEQUNHO0lBVFQsTUFBTTtRQUQxQixPQUFPO09BQ2EsTUFBTSxDQTBIMUI7SUFBRCxhQUFDO0NBMUhELEFBMEhDLENBMUhtQyxFQUFFLENBQUMsU0FBUyxHQTBIL0M7a0JBMUhvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZURlZiB9IGZyb20gXCIuLi8uLi9EZWYvTWVzc2FnZURlZlwiO1xuaW1wb3J0IHsgVUlEZWYgfSBmcm9tIFwiLi4vLi4vRGVmL1VJRGVmXCI7XG5pbXBvcnQgRHJpdmVNYW5hZ2VyLCB7IEJyYWluTW9kZWwgfSBmcm9tIFwiLi4vLi4vTWFuYWdlci9Ecml2ZU1hbmFnZXIvRHJpdmVNYW5hZ2VyXCI7XG5pbXBvcnQgTWVzc2FnZURpc3BhdGNoZXIgZnJvbSBcIi4uLy4uL01hbmFnZXIvTWVzc2FnZURpc3BhdGNoZXIvTWVzc2FnZURpc3BhdGNoZXJcIjtcbmltcG9ydCBTb3VuZE1hbmFnZXIgZnJvbSBcIi4uLy4uL01hbmFnZXIvU291bmRNYW5hZ2VyXCI7XG5pbXBvcnQgVXNlck1hbmFnZXIsIHsgUG9zdFJlc3VsdERhdGEsIFBvc3RSZXN1bHRNb2RlbCB9IGZyb20gXCIuLi8uLi9NYW5hZ2VyL1VzZXJNYW5hZ2VyL1VzZXJNYW5hZ2VyXCI7XG5pbXBvcnQgUmVzVXRpbCBmcm9tIFwiLi4vLi4vVG9vbHMvUmVzVXRpbFwiO1xuaW1wb3J0IHsgVGltZVV0aWwgfSBmcm9tIFwiLi4vLi4vVG9vbHMvVGltZVV0aWxcIjtcbmltcG9ydCBVSVV0aWwgZnJvbSBcIi4uLy4uL1Rvb2xzL1VJVXRpbFwiO1xuaW1wb3J0IENvdW50RG93biBmcm9tIFwiLi9Db3VudERvd25cIjtcbmltcG9ydCBEYXNoYm9hcmQgZnJvbSBcIi4vRGFzaGJvYXJkXCI7XG5pbXBvcnQgUmFkYXJDaGFydEJ6IGZyb20gXCIuL1JhZGFyQ2hhcnRCelwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoQ291bnREb3duKVxuICAgIGNvdW50RG93bjpDb3VudERvd247XG5cbiAgICBAcHJvcGVydHkoRGFzaGJvYXJkKVxuICAgIGRhc2hib2FyZDpEYXNoYm9hcmQ7XG5cbiAgICBAcHJvcGVydHkoUmFkYXJDaGFydEJ6KVxuICAgIHJhZGFyQ2hhcnRCejpSYWRhckNoYXJ0Qno7XG4gICAgXG4gICAgb25FbmFibGUoKXtcbiAgICAgICAgdGhpcy5jb3VudERvd24uU3RhcnRDb3VudERvd24odGhpcy5PbkNvdW50RG93bkVuZEhhbmRsZXIpO1xuXG5cbiAgICAgICAgLy/lj5HpgIHmuLjmiI/lvIDlp4vmtojmga9cbiAgICAgICAgTWVzc2FnZURpc3BhdGNoZXIuSW5zdGFuY2UuRGlzcGF0Y2goTWVzc2FnZURlZi5CcmFpbkdhbWVTdGFydCk7XG5cbiAgICAgICAgTWVzc2FnZURpc3BhdGNoZXIuSW5zdGFuY2UuQWRkRXZlbnRMaXN0ZW5lcihNZXNzYWdlRGVmLkJyYWluQmxvY2tNZXNzYWdlLHRoaXMuQnJhaW5CbG9ja01lc3NhZ2VIYW5kbGVyLHRoaXMpO1xuICAgICAgICBNZXNzYWdlRGlzcGF0Y2hlci5JbnN0YW5jZS5BZGRFdmVudExpc3RlbmVyKE1lc3NhZ2VEZWYuQnJhaW5Ob3RDb25uZWN0TWVzc2FnZSx0aGlzLkJyYWluTm90Q29ubmVjdE1lc3NhZ2VIYW5kbGVyLHRoaXMpO1xuICAgICAgICBNZXNzYWdlRGlzcGF0Y2hlci5JbnN0YW5jZS5BZGRFdmVudExpc3RlbmVyKE1lc3NhZ2VEZWYuQnJhaW5WYWx1ZUNoYW5nZU1lc3NhZ2UsdGhpcy5CcmFpblZhbHVlQ2hhbmdlTWVzc2FnZUhhbmRsZXIsdGhpcyk7XG5cbiAgICAgICAgLy/lvIDlp4vorr/pl67orr7lpIdcbiAgICAgICAgRHJpdmVNYW5hZ2VyLkluc3RhbmNlLlN0YXJ0UGluRHJpdmUoKTtcblxuICAgICAgICAvL+iusOW9leW8gOWni+aXtumXtOaIs1xuICAgICAgICBVc2VyTWFuYWdlci5JbnN0YW5jZS5Jbml0UG9zdFJlc3VsdE1vZGVsKCk7XG4gICAgICAgIFVzZXJNYW5hZ2VyLkluc3RhbmNlLlBvc3RSZXN1bHRNb2RlbC5zdGFydFRpbWU9VGltZVV0aWwuZ2V0WU1ESE1TKERhdGUubm93KCkpLnRvU3RyaW5nKCk7XG4gICAgICAgIC8vMjAyMS0wMy0xOSAxMjo0NTowMFxuICAgICAgICAvLyB2YXIgZGF0ZTIgPSBuZXcgRGF0ZShcIjIwMTYvMDEvMjcgMTI6MDA6MDBcIilcbiAgICAgICAgLy8gY29uc29sZS5sb2coKTtcbiAgICAgICAgIFxuICAgIH1cblxuICAgIG9uRGlzYWJsZSgpe1xuICAgICAgICAvL+WPkemAgea4uOaIj+e7k+adn+a2iOaBr1xuICAgICAgICBNZXNzYWdlRGlzcGF0Y2hlci5JbnN0YW5jZS5EaXNwYXRjaChNZXNzYWdlRGVmLkJyYWluR2FtZUVuZCk7XG5cblxuICAgICAgICAvL+mHiuaUvuiuoeaXtuWZqFxuICAgICAgICB0aGlzLmNvdW50RG93bi5SZWxlYXNlQ291bnREb3duKCk7XG4gICAgICAgIC8v5YGc5q2i6K6/6Zeu6K6+5aSHXG4gICAgICAgIERyaXZlTWFuYWdlci5JbnN0YW5jZS5TdG9wUGluZ0RyaXZlKCk7XG4gICAgICAgIC8vIERyaXZlTWFuYWdlci5JbnN0YW5jZS5PbkJyYWluVmFsdWVDaGFuZ2VFdmVudD1udWxsO1xuXG4gICAgICAgIFxuICAgICAgICBNZXNzYWdlRGlzcGF0Y2hlci5JbnN0YW5jZS5SZW1vdmVFdmVudExpc3RlbmVyKE1lc3NhZ2VEZWYuQnJhaW5CbG9ja01lc3NhZ2UsdGhpcy5CcmFpbkJsb2NrTWVzc2FnZUhhbmRsZXIsdGhpcyk7XG4gICAgICAgIE1lc3NhZ2VEaXNwYXRjaGVyLkluc3RhbmNlLlJlbW92ZUV2ZW50TGlzdGVuZXIoTWVzc2FnZURlZi5CcmFpbk5vdENvbm5lY3RNZXNzYWdlLHRoaXMuQnJhaW5Ob3RDb25uZWN0TWVzc2FnZUhhbmRsZXIsdGhpcyk7XG4gICAgICAgIE1lc3NhZ2VEaXNwYXRjaGVyLkluc3RhbmNlLlJlbW92ZUV2ZW50TGlzdGVuZXIoTWVzc2FnZURlZi5CcmFpblZhbHVlQ2hhbmdlTWVzc2FnZSx0aGlzLkJyYWluVmFsdWVDaGFuZ2VNZXNzYWdlSGFuZGxlcix0aGlzKTtcblxuXG4gICAgICAgIC8vIERyaXZlTWFuYWdlci5JbnN0YW5jZS5PbkJyYWluTm90Q29ubmVjdEV2ZW50PW51bGw7XG4gICAgICAgIC8v6K6w5b2V5ri45oiP57uT5p2f5pe26Ze05oizXG4gICAgICAgIC8vIFVzZXJNYW5hZ2VyLkluc3RhbmNlLlBvc3RSZXN1bHRNb2RlbC5lbmRUaW1lPURhdGUubm93KCkudG9TdHJpbmcoKTtcbiAgICAgICAgVXNlck1hbmFnZXIuSW5zdGFuY2UuUG9zdFJlc3VsdE1vZGVsLmVuZFRpbWU9VGltZVV0aWwuZ2V0WU1ESE1TKERhdGUubm93KCkpLnRvU3RyaW5nKCk7XG5cbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiLS0+6L+b5YWlR2FtZVVJIHN0YXJ0XCIpO1xuICAgICAgICBcbiAgICB9XG4gICAgQnJhaW5WYWx1ZUNoYW5nZU1lc3NhZ2VIYW5kbGVyKG1vZHVsZTpCcmFpbk1vZGVsKXtcbiAgICAgICAgdmFyIGRhdGVNb2R1bGU9bmV3IFBvc3RSZXN1bHREYXRhKCk7XG4gICAgICAgIGRhdGVNb2R1bGUuZGVsdGE9bW9kdWxlLmJyYWluWzBdLkRlbHRhO1xuICAgICAgICBkYXRlTW9kdWxlLnRoZXRhPW1vZHVsZS5icmFpblswXS5UaGV0YTtcbiAgICAgICAgZGF0ZU1vZHVsZS5sb3dBbHBoYT1tb2R1bGUuYnJhaW5bMF0uTG93QWxwaGE7XG4gICAgICAgIGRhdGVNb2R1bGUuaGlnaEFscGhhPW1vZHVsZS5icmFpblswXS5IaWdoQWxwaGE7XG4gICAgICAgIGRhdGVNb2R1bGUubG93QmV0YT1tb2R1bGUuYnJhaW5bMF0uTG93QmV0YTtcbiAgICAgICAgZGF0ZU1vZHVsZS5oaWdoQmV0YT1tb2R1bGUuYnJhaW5bMF0uSGlnaEJldGE7XG4gICAgICAgIGRhdGVNb2R1bGUubG93R2FtbWE9bW9kdWxlLmJyYWluWzBdLkxvd0dhbW1hO1xuICAgICAgICBkYXRlTW9kdWxlLmhpZ2hHYW1tYT1tb2R1bGUuYnJhaW5bMF0uSGlnaEdhbW1hO1xuICAgICAgICBkYXRlTW9kdWxlLmNvbmNlbnRyYXRpb249bW9kdWxlLmJyYWluWzBdLkNvbmNlbnRyYXRpb247XG4gICAgICAgIGRhdGVNb2R1bGUucmVsYXhhdGlvbj1tb2R1bGUuYnJhaW5bMF0uUmVsYXhhdGlvbjtcbiAgICAgICAgVXNlck1hbmFnZXIuSW5zdGFuY2UuUG9zdFJlc3VsdE1vZGVsLmRhdGEucHVzaChkYXRlTW9kdWxlKTtcbiAgICB9XG4gICAgQnJhaW5Ob3RDb25uZWN0TWVzc2FnZUhhbmRsZXIoKXtcbiAgICAgICAgaWYgKHRoaXMuY291bnREb3duLnN0b3BlZCkge1xuICAgICAgICAgICAgXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5PbkJsb2NrQnRuQ2xpY2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCcmFpbkJsb2NrTWVzc2FnZUhhbmRsZXIoKXtcbiAgICAgICAgdGhpcy5PbkJsb2NrQnRuQ2xpY2soKTtcbiAgICB9XG5cblxuICAgIE9uQ291bnREb3duRW5kSGFuZGxlcigpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tPiDmuLjmiI/nu5PmnZ9cIit0aGlzLm5vZGUubmFtZSk7XG5cbiAgICAgICAgVUlVdGlsLlNob3dVSShVSURlZi5TaG93UmVzdWx0VUksKCk9PntcbiAgICAgICAgICAgIFVJVXRpbC5IaWRlVUkoVUlEZWYuR2FtZVVJKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBPbkJhY2tCdG5DbGljaygpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIi0tPiDngrnlh7vkuoblm57liLDkuLvpobXpnaLmjInpkq5cIik7XG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KDIpO1xuXG4gICAgICAgIFVJVXRpbC5TaG93VUkoVUlEZWYuU3RhcnRVSSwoKT0+e1xuICAgICAgICAgICAgVUlVdGlsLkhpZGVVSShVSURlZi5HYW1lVUkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBPbkJsb2NrQnRuQ2xpY2soKXtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCItLT4g54K55Ye75LqG5pat5byA6L+e5o6l5oyJ6ZKuXCIpO1xuICAgICAgICB0aGlzLmNvdW50RG93bi5TdG9wQ291bnREb3duKCk7XG4gICAgICAgIFVJVXRpbC5TaG93VUkoVUlEZWYuRGlzQ29ubmVjdFVJKTtcbiAgICB9XG4gICAgT25Db25uZWN0QnRuQ2xpY2soKXtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCItLT4g54K55Ye75LqG5oGi5aSN6L+e5o6l5oyJ6ZKuXCIpO1xuICAgICAgICB0aGlzLmNvdW50RG93bi5Db250aW51ZUNvdW50RG93bigpO1xuICAgICAgICBVSVV0aWwuSGlkZVVJKFVJRGVmLkRpc0Nvbm5lY3RVSSk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCl7XG4gICAgICAgIFxuICAgIH1cbiAgICB1cGRhdGUgKGR0KSB7XG5cbiAgICB9XG59XG4iXX0=