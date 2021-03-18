
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
        //开始访问设备
        DriveManager_1.default.Instance.StartPinDrive();
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
        // DriveManager.Instance.OnBrainNotConnectEvent=null;
    };
    GameUI.prototype.start = function () {
        // console.log("-->进入GameUI start");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlcXEdhbWVVSVxcR2FtZVVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUFrRDtBQUNsRCx5Q0FBd0M7QUFDeEMsd0VBQW1FO0FBQ25FLHVGQUFrRjtBQUNsRiwyREFBc0Q7QUFFdEQsNkNBQXdDO0FBQ3hDLHlDQUFvQztBQUNwQyx5Q0FBb0M7QUFDcEMsK0NBQTBDO0FBRXBDLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBb0MsMEJBQVk7SUFBaEQ7O0lBNkZBLENBQUM7SUFsRkcseUJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRzFELFVBQVU7UUFDViwyQkFBaUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLHVCQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFL0QsMkJBQWlCLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLHVCQUFVLENBQUMsaUJBQWlCLEVBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdHLDJCQUFpQixDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBVSxDQUFDLHNCQUFzQixFQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUV2SCxRQUFRO1FBQ1Isc0JBQVksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELDBCQUFTLEdBQVQ7UUFDSSxVQUFVO1FBQ1YsMkJBQWlCLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyx1QkFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRzdELE9BQU87UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDbEMsUUFBUTtRQUNSLHNCQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3RDLHNEQUFzRDtRQUd0RCwyQkFBaUIsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsdUJBQVUsQ0FBQyxpQkFBaUIsRUFBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEgsMkJBQWlCLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLHVCQUFVLENBQUMsc0JBQXNCLEVBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFDLElBQUksQ0FBQyxDQUFDO1FBRTFILHFEQUFxRDtJQUN6RCxDQUFDO0lBRUQsc0JBQUssR0FBTDtRQUNJLG9DQUFvQztJQUV4QyxDQUFDO0lBQ0QsOENBQTZCLEdBQTdCO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTtTQUUxQjthQUFJO1lBQ0QsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUNELHlDQUF3QixHQUF4QjtRQUNJLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBR0Qsc0NBQXFCLEdBQXJCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV2QyxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFLLENBQUMsWUFBWSxFQUFDO1lBQzdCLGdCQUFNLENBQUMsTUFBTSxDQUFDLGFBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCwrQkFBYyxHQUFkO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLHNCQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTNCLGdCQUFNLENBQUMsTUFBTSxDQUFDLGFBQUssQ0FBQyxPQUFPLEVBQUM7WUFDeEIsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsYUFBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGdDQUFlLEdBQWY7UUFDSSxnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMvQixnQkFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELGtDQUFpQixHQUFqQjtRQUNJLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDbkMsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsYUFBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCwwQkFBUyxHQUFUO0lBRUEsQ0FBQztJQUNELHVCQUFNLEdBQU4sVUFBUSxFQUFFO0lBRVYsQ0FBQztJQXpGRDtRQURDLFFBQVEsQ0FBQyxtQkFBUyxDQUFDOzZDQUNBO0lBR3BCO1FBREMsUUFBUSxDQUFDLG1CQUFTLENBQUM7NkNBQ0E7SUFHcEI7UUFEQyxRQUFRLENBQUMsc0JBQVksQ0FBQztnREFDRztJQVRULE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0E2RjFCO0lBQUQsYUFBQztDQTdGRCxBQTZGQyxDQTdGbUMsRUFBRSxDQUFDLFNBQVMsR0E2Ri9DO2tCQTdGb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc3NhZ2VEZWYgfSBmcm9tIFwiLi4vLi4vRGVmL01lc3NhZ2VEZWZcIjtcbmltcG9ydCB7IFVJRGVmIH0gZnJvbSBcIi4uLy4uL0RlZi9VSURlZlwiO1xuaW1wb3J0IERyaXZlTWFuYWdlciBmcm9tIFwiLi4vLi4vTWFuYWdlci9Ecml2ZU1hbmFnZXIvRHJpdmVNYW5hZ2VyXCI7XG5pbXBvcnQgTWVzc2FnZURpc3BhdGNoZXIgZnJvbSBcIi4uLy4uL01hbmFnZXIvTWVzc2FnZURpc3BhdGNoZXIvTWVzc2FnZURpc3BhdGNoZXJcIjtcbmltcG9ydCBTb3VuZE1hbmFnZXIgZnJvbSBcIi4uLy4uL01hbmFnZXIvU291bmRNYW5hZ2VyXCI7XG5pbXBvcnQgUmVzVXRpbCBmcm9tIFwiLi4vLi4vVG9vbHMvUmVzVXRpbFwiO1xuaW1wb3J0IFVJVXRpbCBmcm9tIFwiLi4vLi4vVG9vbHMvVUlVdGlsXCI7XG5pbXBvcnQgQ291bnREb3duIGZyb20gXCIuL0NvdW50RG93blwiO1xuaW1wb3J0IERhc2hib2FyZCBmcm9tIFwiLi9EYXNoYm9hcmRcIjtcbmltcG9ydCBSYWRhckNoYXJ0QnogZnJvbSBcIi4vUmFkYXJDaGFydEJ6XCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShDb3VudERvd24pXG4gICAgY291bnREb3duOkNvdW50RG93bjtcblxuICAgIEBwcm9wZXJ0eShEYXNoYm9hcmQpXG4gICAgZGFzaGJvYXJkOkRhc2hib2FyZDtcblxuICAgIEBwcm9wZXJ0eShSYWRhckNoYXJ0QnopXG4gICAgcmFkYXJDaGFydEJ6OlJhZGFyQ2hhcnRCejtcbiAgICBcbiAgICBvbkVuYWJsZSgpe1xuICAgICAgICB0aGlzLmNvdW50RG93bi5TdGFydENvdW50RG93bih0aGlzLk9uQ291bnREb3duRW5kSGFuZGxlcik7XG5cblxuICAgICAgICAvL+WPkemAgea4uOaIj+W8gOWni+a2iOaBr1xuICAgICAgICBNZXNzYWdlRGlzcGF0Y2hlci5JbnN0YW5jZS5EaXNwYXRjaChNZXNzYWdlRGVmLkJyYWluR2FtZVN0YXJ0KTtcblxuICAgICAgICBNZXNzYWdlRGlzcGF0Y2hlci5JbnN0YW5jZS5BZGRFdmVudExpc3RlbmVyKE1lc3NhZ2VEZWYuQnJhaW5CbG9ja01lc3NhZ2UsdGhpcy5CcmFpbkJsb2NrTWVzc2FnZUhhbmRsZXIsdGhpcyk7XG4gICAgICAgIE1lc3NhZ2VEaXNwYXRjaGVyLkluc3RhbmNlLkFkZEV2ZW50TGlzdGVuZXIoTWVzc2FnZURlZi5CcmFpbk5vdENvbm5lY3RNZXNzYWdlLHRoaXMuQnJhaW5Ob3RDb25uZWN0TWVzc2FnZUhhbmRsZXIsdGhpcyk7XG5cbiAgICAgICAgLy/lvIDlp4vorr/pl67orr7lpIdcbiAgICAgICAgRHJpdmVNYW5hZ2VyLkluc3RhbmNlLlN0YXJ0UGluRHJpdmUoKTtcbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKXtcbiAgICAgICAgLy/lj5HpgIHmuLjmiI/nu5PmnZ/mtojmga9cbiAgICAgICAgTWVzc2FnZURpc3BhdGNoZXIuSW5zdGFuY2UuRGlzcGF0Y2goTWVzc2FnZURlZi5CcmFpbkdhbWVFbmQpO1xuXG5cbiAgICAgICAgLy/ph4rmlL7orqHml7blmahcbiAgICAgICAgdGhpcy5jb3VudERvd24uUmVsZWFzZUNvdW50RG93bigpO1xuICAgICAgICAvL+WBnOatouiuv+mXruiuvuWkh1xuICAgICAgICBEcml2ZU1hbmFnZXIuSW5zdGFuY2UuU3RvcFBpbmdEcml2ZSgpO1xuICAgICAgICAvLyBEcml2ZU1hbmFnZXIuSW5zdGFuY2UuT25CcmFpblZhbHVlQ2hhbmdlRXZlbnQ9bnVsbDtcblxuICAgICAgICBcbiAgICAgICAgTWVzc2FnZURpc3BhdGNoZXIuSW5zdGFuY2UuUmVtb3ZlRXZlbnRMaXN0ZW5lcihNZXNzYWdlRGVmLkJyYWluQmxvY2tNZXNzYWdlLHRoaXMuQnJhaW5CbG9ja01lc3NhZ2VIYW5kbGVyLHRoaXMpO1xuICAgICAgICBNZXNzYWdlRGlzcGF0Y2hlci5JbnN0YW5jZS5SZW1vdmVFdmVudExpc3RlbmVyKE1lc3NhZ2VEZWYuQnJhaW5Ob3RDb25uZWN0TWVzc2FnZSx0aGlzLkJyYWluTm90Q29ubmVjdE1lc3NhZ2VIYW5kbGVyLHRoaXMpO1xuXG4gICAgICAgIC8vIERyaXZlTWFuYWdlci5JbnN0YW5jZS5PbkJyYWluTm90Q29ubmVjdEV2ZW50PW51bGw7XG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIi0tPui/m+WFpUdhbWVVSSBzdGFydFwiKTtcbiAgICAgICAgXG4gICAgfVxuICAgIEJyYWluTm90Q29ubmVjdE1lc3NhZ2VIYW5kbGVyKCl7XG4gICAgICAgIGlmICh0aGlzLmNvdW50RG93bi5zdG9wZWQpIHtcbiAgICAgICAgICAgIFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuT25CbG9ja0J0bkNsaWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQnJhaW5CbG9ja01lc3NhZ2VIYW5kbGVyKCl7XG4gICAgICAgIHRoaXMuT25CbG9ja0J0bkNsaWNrKCk7XG4gICAgfVxuXG5cbiAgICBPbkNvdW50RG93bkVuZEhhbmRsZXIoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCItLT4g5ri45oiP57uT5p2fXCIrdGhpcy5ub2RlLm5hbWUpO1xuXG4gICAgICAgIFVJVXRpbC5TaG93VUkoVUlEZWYuU2hvd1Jlc3VsdFVJLCgpPT57XG4gICAgICAgICAgICBVSVV0aWwuSGlkZVVJKFVJRGVmLkdhbWVVSSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgT25CYWNrQnRuQ2xpY2soKXtcbiAgICAgICAgY29uc29sZS5sb2coXCItLT4g54K55Ye75LqG5Zue5Yiw5Li76aG16Z2i5oyJ6ZKuXCIpO1xuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdCgyKTtcblxuICAgICAgICBVSVV0aWwuU2hvd1VJKFVJRGVmLlN0YXJ0VUksKCk9PntcbiAgICAgICAgICAgIFVJVXRpbC5IaWRlVUkoVUlEZWYuR2FtZVVJKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgT25CbG9ja0J0bkNsaWNrKCl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiLS0+IOeCueWHu+S6huaWreW8gOi/nuaOpeaMiemSrlwiKTtcbiAgICAgICAgdGhpcy5jb3VudERvd24uU3RvcENvdW50RG93bigpO1xuICAgICAgICBVSVV0aWwuU2hvd1VJKFVJRGVmLkRpc0Nvbm5lY3RVSSk7XG4gICAgfVxuICAgIE9uQ29ubmVjdEJ0bkNsaWNrKCl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiLS0+IOeCueWHu+S6huaBouWkjei/nuaOpeaMiemSrlwiKTtcbiAgICAgICAgdGhpcy5jb3VudERvd24uQ29udGludWVDb3VudERvd24oKTtcbiAgICAgICAgVUlVdGlsLkhpZGVVSShVSURlZi5EaXNDb25uZWN0VUkpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpe1xuICAgICAgICBcbiAgICB9XG4gICAgdXBkYXRlIChkdCkge1xuXG4gICAgfVxufVxuIl19