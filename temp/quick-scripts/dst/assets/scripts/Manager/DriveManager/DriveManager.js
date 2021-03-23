
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Manager/DriveManager/DriveManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0dfaapXJ0ZAfYpTwJg/e6Qb', 'DriveManager');
// scripts/Manager/DriveManager/DriveManager.ts

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
var HTTPUtil_1 = require("../../Tools/HTTPUtil");
var MessageDispatcher_1 = require("../MessageDispatcher/MessageDispatcher");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DriveManager = /** @class */ (function (_super) {
    __extends(DriveManager, _super);
    function DriveManager() {
        var _this = _super.call(this) || this;
        //#endregion
        // host:string="http://127.0.0.1:8090"; 
        // param:any={"ty":"brain"};
        _this.host = "http://127.0.0.1:1111/hello.php";
        _this.param = { "id": "yingxiangshijie" };
        /**
         * 是否是连接状态
         *
         * @type {boolean}
         * @memberof DriveManager
         */
        _this.connected = false;
        /**
         * 数据类
         *
         * @type {BrainModel}
         * @memberof DriveManager
         */
        _this.brainModel = null;
        /**
         * 脑机断开回调
         *
         * @type {Function}
         * @memberof DriveManager
         */
        _this.OnBrainBlockEvent = null;
        /**
         * 脑机连接回调
         *
         * @type {Function}
         * @memberof DriveManager
         */
        _this.OnBrainConnectEvent = null;
        /**
         * 当脑机值改变的时候
         *
         * @type {Function}
         * @memberof DriveManager
         */
        _this.OnBrainValueChangeEvent = null;
        /**
         * 当设备持续断开的时候不断调用
         *
         * @type {Function}
         * @memberof DriveManager
         */
        _this.OnBrainNotConnectEvent = null;
        _this.pinging = false;
        _this.timer = 0;
        return _this;
    }
    DriveManager_1 = DriveManager;
    DriveManager.prototype.onLoad = function () {
        DriveManager_1.Instance = this;
    };
    DriveManager.prototype.start = function () {
        //this.PinHost();
        //MessageDispatcher.Instance.AddEventListener(MessageDef.BrainGetValueMessage,this.BrainGetValueMessageHandler,this);
    };
    // BrainGetValueMessageHandler(){
    //     this.PinHost();
    // }
    DriveManager.prototype.GetHandler = function (b, response) {
        if (b) {
            if (!this.connected) {
                //第一次进需要触发
                this.connected = true;
                console.log("设备连接");
                var br_1 = JSON.parse(response);
                this.brainModel = br_1;
                MessageDispatcher_1.default.Instance.Dispatch(MessageDef_1.MessageDef.BrainConnectMessage);
                MessageDispatcher_1.default.Instance.Dispatch(MessageDef_1.MessageDef.BrainValueChangeMessage, this.brainModel);
                if (this.OnBrainConnectEvent) {
                    this.OnBrainConnectEvent();
                }
                if (this.OnBrainValueChangeEvent) {
                    this.OnBrainValueChangeEvent();
                }
                return;
            }
            //console.log(response);
            var br = JSON.parse(response);
            this.brainModel = br;
            if (this.OnBrainValueChangeEvent) {
                this.OnBrainValueChangeEvent();
            }
            MessageDispatcher_1.default.Instance.Dispatch(MessageDef_1.MessageDef.BrainValueChangeMessage, this.brainModel);
            // console.log("-->"+this.brainModel.brain[0].Delta);
            // console.dir(this.brainModel.brain[0]);
        }
        else {
            if (this.connected) {
                //第一次进需要触发
                console.log("设备断开");
                this.connected = false;
                this.brainModel = null;
                MessageDispatcher_1.default.Instance.Dispatch(MessageDef_1.MessageDef.BrainBlockMessage);
                if (this.OnBrainBlockEvent) {
                    this.OnBrainBlockEvent();
                }
            }
            else {
                this.brainModel = null;
                console.log("设备持续断开");
                MessageDispatcher_1.default.Instance.Dispatch(MessageDef_1.MessageDef.BrainBlockMessage);
                if (this.OnBrainNotConnectEvent) {
                    this.OnBrainNotConnectEvent();
                }
            }
        }
    };
    DriveManager.prototype.StartPinDrive = function () {
        this.pinging = true;
        this.timer = 0;
    };
    DriveManager.prototype.StopPingDrive = function () {
        this.pinging = false;
        this.timer = 0;
    };
    DriveManager.prototype.update = function (dt) {
        if (this.pinging) {
            this.timer += dt;
            if (this.timer >= 1) {
                this.timer = 0;
                //尝试pin主机
                this.PinHost();
            }
        }
    };
    DriveManager.prototype.PinHost = function () {
        HTTPUtil_1.HttpUtil.GET(this.host, this.param, this.GetHandler.bind(this));
    };
    var DriveManager_1;
    DriveManager = DriveManager_1 = __decorate([
        ccclass
    ], DriveManager);
    return DriveManager;
}(cc.Component));
exports.default = DriveManager;
/*Brain*/
var Brain = /** @class */ (function () {
    function Brain() {
    }
    return Brain;
}());
exports.Brain = Brain;
/*BrainModel*/
var BrainModel = /** @class */ (function () {
    function BrainModel() {
    }
    return BrainModel;
}());
exports.BrainModel = BrainModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWFuYWdlclxcRHJpdmVNYW5hZ2VyXFxEcml2ZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBQ2xELGlEQUFnRDtBQUNoRCw0RUFBdUU7QUFFakUsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBWTtJQUlsRDtRQUFBLFlBQWdCLGlCQUFPLFNBQUc7UUFJOUIsWUFBWTtRQUdSLHdDQUF3QztRQUN4Qyw0QkFBNEI7UUFHNUIsVUFBSSxHQUFRLGlDQUFpQyxDQUFDO1FBQzlDLFdBQUssR0FBSyxFQUFDLElBQUksRUFBQyxpQkFBaUIsRUFBQyxDQUFDO1FBR25DOzs7OztXQUtHO1FBQ0gsZUFBUyxHQUFTLEtBQUssQ0FBQztRQUV4Qjs7Ozs7V0FLRztRQUNILGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCOzs7OztXQUtHO1FBQ0gsdUJBQWlCLEdBQVUsSUFBSSxDQUFDO1FBRWhDOzs7OztXQUtHO1FBQ0gseUJBQW1CLEdBQVUsSUFBSSxDQUFDO1FBR2xDOzs7OztXQUtHO1FBQ0gsNkJBQXVCLEdBQVUsSUFBSSxDQUFDO1FBR3RDOzs7OztXQUtHO1FBQ0gsNEJBQXNCLEdBQVUsSUFBSSxDQUFDO1FBd0VyQyxhQUFPLEdBQVMsS0FBSyxDQUFDO1FBV3RCLFdBQUssR0FBUSxDQUFDLENBQUM7O0lBbEpVLENBQUM7cUJBSlQsWUFBWTtJQUs3Qiw2QkFBTSxHQUFOO1FBQ0ksY0FBWSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQWdFRCw0QkFBSyxHQUFMO1FBQ0ksaUJBQWlCO1FBQ2pCLHFIQUFxSDtJQUN6SCxDQUFDO0lBQ0QsaUNBQWlDO0lBQ2pDLHNCQUFzQjtJQUN0QixJQUFJO0lBRUosaUNBQVUsR0FBVixVQUFXLENBQVMsRUFBQyxRQUFlO1FB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LEVBQUUsQ0FBQzthQUNsQjtTQUNKO0lBQ0wsQ0FBQztJQUVELDhCQUFPLEdBQVA7UUFDSSxtQkFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUNqRSxDQUFDOztJQXBLZ0IsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQXFLaEM7SUFBRCxtQkFBQztDQXJLRCxBQXFLQyxDQXJLeUMsRUFBRSxDQUFDLFNBQVMsR0FxS3JEO2tCQXJLb0IsWUFBWTtBQXdLakMsU0FBUztBQUNUO0lBQUE7SUFXRSxDQUFDO0lBQUQsWUFBQztBQUFELENBWEYsQUFXRyxJQUFBO0FBWFUsc0JBQUs7QUFhaEIsY0FBYztBQUNkO0lBQUE7SUFFQSxDQUFDO0lBQUQsaUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZURlZiB9IGZyb20gXCIuLi8uLi9EZWYvTWVzc2FnZURlZlwiO1xuaW1wb3J0IHsgSHR0cFV0aWwgfSBmcm9tIFwiLi4vLi4vVG9vbHMvSFRUUFV0aWxcIjtcbmltcG9ydCBNZXNzYWdlRGlzcGF0Y2hlciBmcm9tIFwiLi4vTWVzc2FnZURpc3BhdGNoZXIvTWVzc2FnZURpc3BhdGNoZXJcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcml2ZU1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4vLyNyZWdpb24gSW5zdGFuY2VcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlOiBEcml2ZU1hbmFnZXI7XG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cbiAgICBvbkxvYWQoKTp2b2lke1xuICAgICAgICBEcml2ZU1hbmFnZXIuSW5zdGFuY2U9dGhpcztcbiAgICB9XG4vLyNlbmRyZWdpb25cblxuXG4gICAgLy8gaG9zdDpzdHJpbmc9XCJodHRwOi8vMTI3LjAuMC4xOjgwOTBcIjsgXG4gICAgLy8gcGFyYW06YW55PXtcInR5XCI6XCJicmFpblwifTtcblxuICAgIFxuICAgIGhvc3Q6c3RyaW5nPVwiaHR0cDovLzEyNy4wLjAuMToxMTExL2hlbGxvLnBocFwiO1xuICAgIHBhcmFtOmFueT17XCJpZFwiOlwieWluZ3hpYW5nc2hpamllXCJ9O1xuXG5cbiAgICAvKipcbiAgICAgKiDmmK/lkKbmmK/ov57mjqXnirbmgIFcbiAgICAgKlxuICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBEcml2ZU1hbmFnZXJcbiAgICAgKi9cbiAgICBjb25uZWN0ZWQ6Ym9vbGVhbj1mYWxzZTtcblxuICAgIC8qKlxuICAgICAqIOaVsOaNruexu1xuICAgICAqXG4gICAgICogQHR5cGUge0JyYWluTW9kZWx9XG4gICAgICogQG1lbWJlcm9mIERyaXZlTWFuYWdlclxuICAgICAqL1xuICAgIGJyYWluTW9kZWw6QnJhaW5Nb2RlbD1udWxsO1xuXG4gICAgLyoqXG4gICAgICog6ISR5py65pat5byA5Zue6LCDXG4gICAgICpcbiAgICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAgICogQG1lbWJlcm9mIERyaXZlTWFuYWdlclxuICAgICAqL1xuICAgIE9uQnJhaW5CbG9ja0V2ZW50OkZ1bmN0aW9uPW51bGw7XG5cbiAgICAvKipcbiAgICAgKiDohJHmnLrov57mjqXlm57osINcbiAgICAgKlxuICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICAgKiBAbWVtYmVyb2YgRHJpdmVNYW5hZ2VyXG4gICAgICovXG4gICAgT25CcmFpbkNvbm5lY3RFdmVudDpGdW5jdGlvbj1udWxsO1xuXG5cbiAgICAvKipcbiAgICAgKiDlvZPohJHmnLrlgLzmlLnlj5jnmoTml7blgJlcbiAgICAgKlxuICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICAgKiBAbWVtYmVyb2YgRHJpdmVNYW5hZ2VyXG4gICAgICovXG4gICAgT25CcmFpblZhbHVlQ2hhbmdlRXZlbnQ6RnVuY3Rpb249bnVsbDtcblxuXG4gICAgLyoqXG4gICAgICog5b2T6K6+5aSH5oyB57ut5pat5byA55qE5pe25YCZ5LiN5pat6LCD55SoXG4gICAgICpcbiAgICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAgICogQG1lbWJlcm9mIERyaXZlTWFuYWdlclxuICAgICAqL1xuICAgIE9uQnJhaW5Ob3RDb25uZWN0RXZlbnQ6RnVuY3Rpb249bnVsbDtcblxuXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vdGhpcy5QaW5Ib3N0KCk7XG4gICAgICAgIC8vTWVzc2FnZURpc3BhdGNoZXIuSW5zdGFuY2UuQWRkRXZlbnRMaXN0ZW5lcihNZXNzYWdlRGVmLkJyYWluR2V0VmFsdWVNZXNzYWdlLHRoaXMuQnJhaW5HZXRWYWx1ZU1lc3NhZ2VIYW5kbGVyLHRoaXMpO1xuICAgIH1cbiAgICAvLyBCcmFpbkdldFZhbHVlTWVzc2FnZUhhbmRsZXIoKXtcbiAgICAvLyAgICAgdGhpcy5QaW5Ib3N0KCk7XG4gICAgLy8gfVxuXG4gICAgR2V0SGFuZGxlcihiOmJvb2xlYW4scmVzcG9uc2U6c3RyaW5nKXtcbiAgICAgICAgXG4gICAgICAgIGlmIChiKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy/nrKzkuIDmrKHov5vpnIDopoHop6blj5FcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RlZD10cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6K6+5aSH6L+e5o6lXCIpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGJyPUpTT04ucGFyc2UocmVzcG9uc2UpYXMgQnJhaW5Nb2RlbDtcbiAgICAgICAgICAgICAgICB0aGlzLmJyYWluTW9kZWw9YnI7XG5cbiAgICAgICAgICAgICAgICBNZXNzYWdlRGlzcGF0Y2hlci5JbnN0YW5jZS5EaXNwYXRjaChNZXNzYWdlRGVmLkJyYWluQ29ubmVjdE1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIE1lc3NhZ2VEaXNwYXRjaGVyLkluc3RhbmNlLkRpc3BhdGNoKE1lc3NhZ2VEZWYuQnJhaW5WYWx1ZUNoYW5nZU1lc3NhZ2UsdGhpcy5icmFpbk1vZGVsKTtcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLk9uQnJhaW5Db25uZWN0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5PbkJyYWluQ29ubmVjdEV2ZW50KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLk9uQnJhaW5WYWx1ZUNoYW5nZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuT25CcmFpblZhbHVlQ2hhbmdlRXZlbnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGxldCBicj1KU09OLnBhcnNlKHJlc3BvbnNlKWFzIEJyYWluTW9kZWw7XG4gICAgICAgICAgICB0aGlzLmJyYWluTW9kZWw9YnI7XG4gICAgICAgICAgICBpZiAodGhpcy5PbkJyYWluVmFsdWVDaGFuZ2VFdmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuT25CcmFpblZhbHVlQ2hhbmdlRXZlbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgTWVzc2FnZURpc3BhdGNoZXIuSW5zdGFuY2UuRGlzcGF0Y2goTWVzc2FnZURlZi5CcmFpblZhbHVlQ2hhbmdlTWVzc2FnZSx0aGlzLmJyYWluTW9kZWwpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItLT5cIit0aGlzLmJyYWluTW9kZWwuYnJhaW5bMF0uRGVsdGEpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5kaXIodGhpcy5icmFpbk1vZGVsLmJyYWluWzBdKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIC8v56ys5LiA5qyh6L+b6ZyA6KaB6Kem5Y+RXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLorr7lpIfmlq3lvIBcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0ZWQ9ZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5icmFpbk1vZGVsPW51bGw7XG4gICAgICAgICAgICAgICAgTWVzc2FnZURpc3BhdGNoZXIuSW5zdGFuY2UuRGlzcGF0Y2goTWVzc2FnZURlZi5CcmFpbkJsb2NrTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuT25CcmFpbkJsb2NrRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5PbkJyYWluQmxvY2tFdmVudCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuYnJhaW5Nb2RlbD1udWxsO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6K6+5aSH5oyB57ut5pat5byAXCIpO1xuXG4gICAgICAgICAgICAgICAgTWVzc2FnZURpc3BhdGNoZXIuSW5zdGFuY2UuRGlzcGF0Y2goTWVzc2FnZURlZi5CcmFpbkJsb2NrTWVzc2FnZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5PbkJyYWluTm90Q29ubmVjdEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuT25CcmFpbk5vdENvbm5lY3RFdmVudCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBpbmdpbmc6Ym9vbGVhbj1mYWxzZTtcbiAgICBTdGFydFBpbkRyaXZlKCl7XG4gICAgICAgIHRoaXMucGluZ2luZz10cnVlO1xuICAgICAgICB0aGlzLnRpbWVyPTA7XG5cbiAgICB9XG5cbiAgICBTdG9wUGluZ0RyaXZlKCl7XG4gICAgICAgIHRoaXMucGluZ2luZz1mYWxzZTtcbiAgICAgICAgdGhpcy50aW1lcj0wO1xuICAgIH1cbiAgICB0aW1lcjpudW1iZXI9MDtcbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLnBpbmdpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIrPWR0O1xuICAgICAgICAgICAgaWYgKHRoaXMudGltZXI+PTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyPTA7XG4gICAgICAgICAgICAgICAgIC8v5bCd6K+VcGlu5Li75py6XG4gICAgICAgICAgICAgICAgdGhpcy5QaW5Ib3N0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBQaW5Ib3N0KCl7XG4gICAgICAgIEh0dHBVdGlsLkdFVCh0aGlzLmhvc3QsdGhpcy5wYXJhbSx0aGlzLkdldEhhbmRsZXIuYmluZCh0aGlzKSlcbiAgICB9XG59XG5cblxuLypCcmFpbiovXG5leHBvcnQgY2xhc3MgQnJhaW4ge1xuICAgIERlbHRhOiBzdHJpbmc7XG4gICAgVGhldGE6IHN0cmluZztcbiAgICBMb3dBbHBoYTogc3RyaW5nO1xuICAgIEhpZ2hBbHBoYTogc3RyaW5nO1xuICAgIExvd0JldGE6IHN0cmluZztcbiAgICBIaWdoQmV0YTogc3RyaW5nO1xuICAgIExvd0dhbW1hOiBzdHJpbmc7XG4gICAgSGlnaEdhbW1hOiBzdHJpbmc7XG4gICAgUmVsYXhhdGlvbjogc3RyaW5nO1xuICAgIENvbmNlbnRyYXRpb246IHN0cmluZztcbiAgfVxuICBcbiAgLypCcmFpbk1vZGVsKi9cbiAgZXhwb3J0IGNsYXNzIEJyYWluTW9kZWwge1xuICAgIGJyYWluOiBCcmFpbltdO1xuICB9XG4gIFxuXG4iXX0=