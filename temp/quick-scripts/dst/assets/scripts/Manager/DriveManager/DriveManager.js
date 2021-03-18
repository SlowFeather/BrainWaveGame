
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
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWFuYWdlclxcRHJpdmVNYW5hZ2VyXFxEcml2ZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWtEO0FBQ2xELGlEQUFnRDtBQUNoRCw0RUFBdUU7QUFFakUsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBWTtJQUlsRDtRQUFBLFlBQWdCLGlCQUFPLFNBQUc7UUFJOUIsWUFBWTtRQUtSLHdDQUF3QztRQUN4Qyw0QkFBNEI7UUFHNUIsVUFBSSxHQUFRLGlDQUFpQyxDQUFDO1FBQzlDLFdBQUssR0FBSyxFQUFDLElBQUksRUFBQyxpQkFBaUIsRUFBQyxDQUFDO1FBSW5DOzs7OztXQUtHO1FBQ0gsZUFBUyxHQUFTLEtBQUssQ0FBQztRQUV4Qjs7Ozs7V0FLRztRQUNILGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCOzs7OztXQUtHO1FBQ0gsdUJBQWlCLEdBQVUsSUFBSSxDQUFDO1FBRWhDOzs7OztXQUtHO1FBQ0gseUJBQW1CLEdBQVUsSUFBSSxDQUFDO1FBR2xDOzs7OztXQUtHO1FBQ0gsNkJBQXVCLEdBQVUsSUFBSSxDQUFDO1FBR3RDOzs7OztXQUtHO1FBQ0gsNEJBQXNCLEdBQVUsSUFBSSxDQUFDO1FBbUVyQyxhQUFPLEdBQVMsS0FBSyxDQUFDO1FBV3RCLFdBQUssR0FBUSxDQUFDLENBQUM7O0lBaEpVLENBQUM7cUJBSlQsWUFBWTtJQUs3Qiw2QkFBTSxHQUFOO1FBQ0ksY0FBWSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7SUFDL0IsQ0FBQztJQWtFRCw0QkFBSyxHQUFMO1FBQ0ksaUJBQWlCO0lBQ3JCLENBQUM7SUFFRCxpQ0FBVSxHQUFWLFVBQVcsQ0FBUyxFQUFDLFFBQWU7UUFFaEMsSUFBSSxDQUFDLEVBQUU7WUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMs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QUNJLG1CQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQ2pFLENBQUM7O0lBbEtnQixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBbUtoQztJQUFELG1CQUFDO0NBbktELEFBbUtDLENBbkt5QyxFQUFFLENBQUMsU0FBUyxHQW1LckQ7a0JBbktvQixZQUFZO0FBc0tqQyxTQUFTO0FBQ1Q7SUFBQTtJQVdFLENBQUM7SUFBRCxZQUFDO0FBQUQsQ0FYRixBQVdHLElBQUE7QUFYVSxzQkFBSztBQWFoQixjQUFjO0FBQ2Q7SUFBQTtJQUVBLENBQUM7SUFBRCxpQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNzYWdlRGVmIH0gZnJvbSBcIi4uLy4uL0RlZi9NZXNzYWdlRGVmXCI7XG5pbXBvcnQgeyBIdHRwVXRpbCB9IGZyb20gXCIuLi8uLi9Ub29scy9IVFRQVXRpbFwiO1xuaW1wb3J0IE1lc3NhZ2VEaXNwYXRjaGVyIGZyb20gXCIuLi9NZXNzYWdlRGlzcGF0Y2hlci9NZXNzYWdlRGlzcGF0Y2hlclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERyaXZlTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbi8vI3JlZ2lvbiBJbnN0YW5jZVxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U6IERyaXZlTWFuYWdlcjtcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxuICAgIG9uTG9hZCgpOnZvaWR7XG4gICAgICAgIERyaXZlTWFuYWdlci5JbnN0YW5jZT10aGlzO1xuICAgIH1cbi8vI2VuZHJlZ2lvblxuXG5cblxuXG4gICAgLy8gaG9zdDpzdHJpbmc9XCJodHRwOi8vMTI3LjAuMC4xOjgwOTBcIjsgXG4gICAgLy8gcGFyYW06YW55PXtcInR5XCI6XCJicmFpblwifTtcblxuICAgIFxuICAgIGhvc3Q6c3RyaW5nPVwiaHR0cDovLzEyNy4wLjAuMToxMTExL2hlbGxvLnBocFwiO1xuICAgIHBhcmFtOmFueT17XCJpZFwiOlwieWluZ3hpYW5nc2hpamllXCJ9O1xuXG5cblxuICAgIC8qKlxuICAgICAqIOaYr+WQpuaYr+i/nuaOpeeKtuaAgVxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQG1lbWJlcm9mIERyaXZlTWFuYWdlclxuICAgICAqL1xuICAgIGNvbm5lY3RlZDpib29sZWFuPWZhbHNlO1xuXG4gICAgLyoqXG4gICAgICog5pWw5o2u57G7XG4gICAgICpcbiAgICAgKiBAdHlwZSB7QnJhaW5Nb2RlbH1cbiAgICAgKiBAbWVtYmVyb2YgRHJpdmVNYW5hZ2VyXG4gICAgICovXG4gICAgYnJhaW5Nb2RlbDpCcmFpbk1vZGVsPW51bGw7XG5cbiAgICAvKipcbiAgICAgKiDohJHmnLrmlq3lvIDlm57osINcbiAgICAgKlxuICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICAgKiBAbWVtYmVyb2YgRHJpdmVNYW5hZ2VyXG4gICAgICovXG4gICAgT25CcmFpbkJsb2NrRXZlbnQ6RnVuY3Rpb249bnVsbDtcblxuICAgIC8qKlxuICAgICAqIOiEkeacuui/nuaOpeWbnuiwg1xuICAgICAqXG4gICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAqIEBtZW1iZXJvZiBEcml2ZU1hbmFnZXJcbiAgICAgKi9cbiAgICBPbkJyYWluQ29ubmVjdEV2ZW50OkZ1bmN0aW9uPW51bGw7XG5cblxuICAgIC8qKlxuICAgICAqIOW9k+iEkeacuuWAvOaUueWPmOeahOaXtuWAmVxuICAgICAqXG4gICAgICogQHR5cGUge0Z1bmN0aW9ufVxuICAgICAqIEBtZW1iZXJvZiBEcml2ZU1hbmFnZXJcbiAgICAgKi9cbiAgICBPbkJyYWluVmFsdWVDaGFuZ2VFdmVudDpGdW5jdGlvbj1udWxsO1xuXG5cbiAgICAvKipcbiAgICAgKiDlvZPorr7lpIfmjIHnu63mlq3lvIDnmoTml7blgJnkuI3mlq3osIPnlKhcbiAgICAgKlxuICAgICAqIEB0eXBlIHtGdW5jdGlvbn1cbiAgICAgKiBAbWVtYmVyb2YgRHJpdmVNYW5hZ2VyXG4gICAgICovXG4gICAgT25CcmFpbk5vdENvbm5lY3RFdmVudDpGdW5jdGlvbj1udWxsO1xuXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vdGhpcy5QaW5Ib3N0KCk7XG4gICAgfVxuXG4gICAgR2V0SGFuZGxlcihiOmJvb2xlYW4scmVzcG9uc2U6c3RyaW5nKXtcbiAgICAgICAgXG4gICAgICAgIGlmIChiKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY29ubmVjdGVkKSB7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy/nrKzkuIDmrKHov5vpnIDopoHop6blj5FcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RlZD10cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6K6+5aSH6L+e5o6lXCIpO1xuXG4gICAgICAgICAgICAgICAgbGV0IGJyPUpTT04ucGFyc2UocmVzcG9uc2UpYXMgQnJhaW5Nb2RlbDtcbiAgICAgICAgICAgICAgICB0aGlzLmJyYWluTW9kZWw9YnI7XG5cbiAgICAgICAgICAgICAgICBNZXNzYWdlRGlzcGF0Y2hlci5JbnN0YW5jZS5EaXNwYXRjaChNZXNzYWdlRGVmLkJyYWluQ29ubmVjdE1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIE1lc3NhZ2VEaXNwYXRjaGVyLkluc3RhbmNlLkRpc3BhdGNoKE1lc3NhZ2VEZWYuQnJhaW5WYWx1ZUNoYW5nZU1lc3NhZ2UsdGhpcy5icmFpbk1vZGVsKTtcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLk9uQnJhaW5Db25uZWN0RXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5PbkJyYWluQ29ubmVjdEV2ZW50KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLk9uQnJhaW5WYWx1ZUNoYW5nZUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuT25CcmFpblZhbHVlQ2hhbmdlRXZlbnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGxldCBicj1KU09OLnBhcnNlKHJlc3BvbnNlKWFzIEJyYWluTW9kZWw7XG4gICAgICAgICAgICB0aGlzLmJyYWluTW9kZWw9YnI7XG4gICAgICAgICAgICBpZiAodGhpcy5PbkJyYWluVmFsdWVDaGFuZ2VFdmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuT25CcmFpblZhbHVlQ2hhbmdlRXZlbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgTWVzc2FnZURpc3BhdGNoZXIuSW5zdGFuY2UuRGlzcGF0Y2goTWVzc2FnZURlZi5CcmFpblZhbHVlQ2hhbmdlTWVzc2FnZSx0aGlzLmJyYWluTW9kZWwpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCItLT5cIit0aGlzLmJyYWluTW9kZWwuYnJhaW5bMF0uRGVsdGEpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5kaXIodGhpcy5icmFpbk1vZGVsLmJyYWluWzBdKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgICAgICAgICAgIC8v56ys5LiA5qyh6L+b6ZyA6KaB6Kem5Y+RXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLorr7lpIfmlq3lvIBcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0ZWQ9ZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5icmFpbk1vZGVsPW51bGw7XG4gICAgICAgICAgICAgICAgTWVzc2FnZURpc3BhdGNoZXIuSW5zdGFuY2UuRGlzcGF0Y2goTWVzc2FnZURlZi5CcmFpbkJsb2NrTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuT25CcmFpbkJsb2NrRXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5PbkJyYWluQmxvY2tFdmVudCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuYnJhaW5Nb2RlbD1udWxsO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6K6+5aSH5oyB57ut5pat5byAXCIpO1xuXG4gICAgICAgICAgICAgICAgTWVzc2FnZURpc3BhdGNoZXIuSW5zdGFuY2UuRGlzcGF0Y2goTWVzc2FnZURlZi5CcmFpbkJsb2NrTWVzc2FnZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5PbkJyYWluTm90Q29ubmVjdEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuT25CcmFpbk5vdENvbm5lY3RFdmVudCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBpbmdpbmc6Ym9vbGVhbj1mYWxzZTtcbiAgICBTdGFydFBpbkRyaXZlKCl7XG4gICAgICAgIHRoaXMucGluZ2luZz10cnVlO1xuICAgICAgICB0aGlzLnRpbWVyPTA7XG5cbiAgICB9XG5cbiAgICBTdG9wUGluZ0RyaXZlKCl7XG4gICAgICAgIHRoaXMucGluZ2luZz1mYWxzZTtcbiAgICAgICAgdGhpcy50aW1lcj0wO1xuICAgIH1cbiAgICB0aW1lcjpudW1iZXI9MDtcbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLnBpbmdpbmcpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXIrPWR0O1xuICAgICAgICAgICAgaWYgKHRoaXMudGltZXI+PTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyPTA7XG4gICAgICAgICAgICAgICAgIC8v5bCd6K+VcGlu5Li75py6XG4gICAgICAgICAgICAgICAgdGhpcy5QaW5Ib3N0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBQaW5Ib3N0KCl7XG4gICAgICAgIEh0dHBVdGlsLkdFVCh0aGlzLmhvc3QsdGhpcy5wYXJhbSx0aGlzLkdldEhhbmRsZXIuYmluZCh0aGlzKSlcbiAgICB9XG59XG5cblxuLypCcmFpbiovXG5leHBvcnQgY2xhc3MgQnJhaW4ge1xuICAgIERlbHRhOiBzdHJpbmc7XG4gICAgVGhldGE6IHN0cmluZztcbiAgICBMb3dBbHBoYTogc3RyaW5nO1xuICAgIEhpZ2hBbHBoYTogc3RyaW5nO1xuICAgIExvd0JldGE6IHN0cmluZztcbiAgICBIaWdoQmV0YTogc3RyaW5nO1xuICAgIExvd0dhbW1hOiBzdHJpbmc7XG4gICAgSGlnaEdhbW1hOiBzdHJpbmc7XG4gICAgUmVsYXhhdGlvbjogc3RyaW5nO1xuICAgIENvbmNlbnRyYXRpb246IHN0cmluZztcbiAgfVxuICBcbiAgLypCcmFpbk1vZGVsKi9cbiAgZXhwb3J0IGNsYXNzIEJyYWluTW9kZWwge1xuICAgIGJyYWluOiBCcmFpbltdO1xuICB9XG4gICJdfQ==