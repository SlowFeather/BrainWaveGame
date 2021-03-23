"use strict";
cc._RF.push(module, '54341v23PVOyZGPyJWkPGdt', 'CountDown');
// scripts/UI/GameUI/CountDown.ts

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
var CountDown = /** @class */ (function (_super) {
    __extends(CountDown, _super);
    function CountDown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 计时器是否停止
         *
         * @type {Boolean}
         * @memberof CountDown
         */
        _this.stoped = true;
        _this.timer = 0;
        return _this;
    }
    CountDown.prototype.onLoad = function () {
    };
    CountDown.prototype.start = function () {
    };
    // onEnable(){
    // }
    // onDisable(){
    // }
    /**
     * 开始计时器
     *
     * @memberof CountDown
     */
    CountDown.prototype.StartCountDown = function (callback) {
        //3分钟
        // this.timeMinute=0;
        // this.timeSecond=50;
        this.timeMinute = 3;
        this.timeSecond = 0;
        this.stoped = false;
        this.ClockOverEvent = callback;
    };
    /**
     * 继续计时器
     *
     * @memberof CountDown
     */
    CountDown.prototype.ContinueCountDown = function () {
        this.stoped = false;
    };
    /**
     * 停止计时器
     *
     * @memberof CountDown
     */
    CountDown.prototype.StopCountDown = function () {
        if (!this.stoped) {
            this.stoped = true;
        }
    };
    /**
     * 彻底释放计时器
     *
     * @memberof CountDown
     */
    CountDown.prototype.ReleaseCountDown = function () {
        this.stoped = true;
        this.timer = 0;
        this.ClockOverEvent = null;
    };
    CountDown.prototype.update = function (dt) {
        if (this.stoped) {
            return;
        }
        this.timer += dt;
        if (this.timer >= 1) {
            this.timer = 0;
            //console.log("过了一秒");
            // MessageDispatcher.Instance.Dispatch(MessageDef.BrainGetValueMessage);
            //取一次数据
            this.timeSecond -= 1;
            if (this.timeSecond < 0) {
                this.timeMinute -= 1;
                if (this.timeMinute < 0) {
                    //console.log("计时结束");
                    this.stoped = true;
                    if (this.ClockOverEvent) {
                        this.ClockOverEvent();
                    }
                    return;
                }
                this.timeSecond = 59;
            }
        }
        if (this.timeSecond.toString().length == 1) {
            this.timeLab.string = "0" + this.timeMinute.toString() + ":0" + this.timeSecond.toString();
        }
        else {
            this.timeLab.string = "0" + this.timeMinute.toString() + ":" + this.timeSecond.toString();
        }
    };
    __decorate([
        property(cc.Label)
    ], CountDown.prototype, "timeLab", void 0);
    CountDown = __decorate([
        ccclass
    ], CountDown);
    return CountDown;
}(cc.Component));
exports.default = CountDown;

cc._RF.pop();