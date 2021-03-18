"use strict";
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