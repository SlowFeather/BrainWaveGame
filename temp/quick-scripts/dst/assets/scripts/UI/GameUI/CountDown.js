
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UI/GameUI/CountDown.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlcXEdhbWVVSVxcQ291bnREb3duLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdNLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBdUMsNkJBQVk7SUFEbkQ7UUFBQSxxRUFnSUM7UUFwSEc7Ozs7O1dBS0c7UUFDSCxZQUFNLEdBQVMsSUFBSSxDQUFDO1FBMkVwQixXQUFLLEdBQVEsQ0FBQyxDQUFDOztJQW1DbkIsQ0FBQztJQWxHRywwQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELHlCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QsY0FBYztJQUVkLElBQUk7SUFDSixlQUFlO0lBRWYsSUFBSTtJQUVKOzs7O09BSUc7SUFDSCxrQ0FBYyxHQUFkLFVBQWUsUUFBaUI7UUFDNUIsS0FBSztRQUNMLHFCQUFxQjtRQUNyQixzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLGNBQWMsR0FBQyxRQUFRLENBQUM7SUFDakMsQ0FBQztJQUdEOzs7O09BSUc7SUFDSCxxQ0FBaUIsR0FBakI7UUFFSSxJQUFJLENBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBR0Q7Ozs7T0FJRztJQUNILGlDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNkLElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxvQ0FBZ0IsR0FBaEI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsQ0FBQztRQUNiLElBQUksQ0FBQyxjQUFjLEdBQUMsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFJRCwwQkFBTSxHQUFOLFVBQVEsRUFBRTtRQUNOLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxLQUFLLElBQUUsRUFBRSxDQUFDO1FBQ2YsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFFLENBQUMsRUFBRTtZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxDQUFDO1lBQ2Isc0JBQXNCO1lBQ3RCLHdFQUF3RTtZQUN4RSxPQUFPO1lBQ1AsSUFBSSxDQUFDLFVBQVUsSUFBRSxDQUFDLENBQUM7WUFDbkIsSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFDLENBQUMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLFVBQVUsSUFBRSxDQUFDLENBQUM7Z0JBQ25CLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBQyxDQUFDLEVBQUU7b0JBQ25CLHNCQUFzQjtvQkFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUM7b0JBQ2pCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTt3QkFDckIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO3FCQUN6QjtvQkFDRCxPQUFPO2lCQUNWO2dCQUNELElBQUksQ0FBQyxVQUFVLEdBQUMsRUFBRSxDQUFDO2FBQ3RCO1NBRUo7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxJQUFFLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsR0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN0RjthQUFJO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDckY7SUFDTCxDQUFDO0lBekhEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ0Q7SUFKRCxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBK0g3QjtJQUFELGdCQUFDO0NBL0hELEFBK0hDLENBL0hzQyxFQUFFLENBQUMsU0FBUyxHQStIbEQ7a0JBL0hvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZURlZiB9IGZyb20gXCIuLi8uLi9EZWYvTWVzc2FnZURlZlwiO1xuaW1wb3J0IE1lc3NhZ2VEaXNwYXRjaGVyIGZyb20gXCIuLi8uLi9NYW5hZ2VyL01lc3NhZ2VEaXNwYXRjaGVyL01lc3NhZ2VEaXNwYXRjaGVyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnREb3duIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHRpbWVMYWI6IGNjLkxhYmVsO1xuXG5cbiAgICB0aW1lTWludXRlOm51bWJlcjtcblxuICAgIHRpbWVTZWNvbmQ6bnVtYmVyO1xuXG4gICAgLyoqXG4gICAgICog6K6h5pe25Zmo5piv5ZCm5YGc5q2iXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Qm9vbGVhbn1cbiAgICAgKiBAbWVtYmVyb2YgQ291bnREb3duXG4gICAgICovXG4gICAgc3RvcGVkOkJvb2xlYW49dHJ1ZTtcblxuXG4gICAgLyoqXG4gICAgICog6K6h5pe257uT5p2f5pa55rOVXG4gICAgICpcbiAgICAgKiBAdHlwZSB7RnVuY3Rpb259XG4gICAgICogQG1lbWJlcm9mIENvdW50RG93blxuICAgICAqL1xuICAgIENsb2NrT3ZlckV2ZW50OkZ1bmN0aW9uO1xuICAgIFxuXG4gICAgb25Mb2FkKCl7XG5cbiAgICB9XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIFxuICAgIH1cbiAgICAvLyBvbkVuYWJsZSgpe1xuICAgICAgICBcbiAgICAvLyB9XG4gICAgLy8gb25EaXNhYmxlKCl7XG5cbiAgICAvLyB9XG5cbiAgICAvKipcbiAgICAgKiDlvIDlp4vorqHml7blmahcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb3VudERvd25cbiAgICAgKi9cbiAgICBTdGFydENvdW50RG93bihjYWxsYmFjazpGdW5jdGlvbil7XG4gICAgICAgIC8vM+WIhumSn1xuICAgICAgICAvLyB0aGlzLnRpbWVNaW51dGU9MDtcbiAgICAgICAgLy8gdGhpcy50aW1lU2Vjb25kPTUwO1xuICAgICAgICB0aGlzLnRpbWVNaW51dGU9MztcbiAgICAgICAgdGhpcy50aW1lU2Vjb25kPTA7XG4gICAgICAgIHRoaXMuc3RvcGVkPWZhbHNlO1xuICAgICAgICB0aGlzLkNsb2NrT3ZlckV2ZW50PWNhbGxiYWNrO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog57un57ut6K6h5pe25ZmoXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ291bnREb3duXG4gICAgICovXG4gICAgQ29udGludWVDb3VudERvd24oKXtcblxuICAgICAgICB0aGlzLnN0b3BlZD1mYWxzZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOWBnOatouiuoeaXtuWZqFxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvdW50RG93blxuICAgICAqL1xuICAgIFN0b3BDb3VudERvd24oKXtcbiAgICAgICAgaWYgKCF0aGlzLnN0b3BlZCkge1xuICAgICAgICAgICAgdGhpcy5zdG9wZWQ9dHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKipcbiAgICAgKiDlvbvlupXph4rmlL7orqHml7blmahcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb3VudERvd25cbiAgICAgKi9cbiAgICBSZWxlYXNlQ291bnREb3duKCl7XG4gICAgICAgIHRoaXMuc3RvcGVkPXRydWU7XG4gICAgICAgIHRoaXMudGltZXI9MDtcbiAgICAgICAgdGhpcy5DbG9ja092ZXJFdmVudD1udWxsO1xuICAgIH1cblxuICAgIHRpbWVyOm51bWJlcj0wO1xuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICBpZiAodGhpcy5zdG9wZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbWVyKz1kdDtcbiAgICAgICAgaWYgKHRoaXMudGltZXI+PTEpIHtcbiAgICAgICAgICAgIHRoaXMudGltZXI9MDtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLov4fkuobkuIDnp5JcIik7XG4gICAgICAgICAgICAvLyBNZXNzYWdlRGlzcGF0Y2hlci5JbnN0YW5jZS5EaXNwYXRjaChNZXNzYWdlRGVmLkJyYWluR2V0VmFsdWVNZXNzYWdlKTtcbiAgICAgICAgICAgIC8v5Y+W5LiA5qyh5pWw5o2uXG4gICAgICAgICAgICB0aGlzLnRpbWVTZWNvbmQtPTE7XG4gICAgICAgICAgICBpZiAodGhpcy50aW1lU2Vjb25kPDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVNaW51dGUtPTE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZU1pbnV0ZTwwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCLorqHml7bnu5PmnZ9cIik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcGVkPXRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLkNsb2NrT3ZlckV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkNsb2NrT3ZlckV2ZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVTZWNvbmQ9NTk7XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy50aW1lU2Vjb25kLnRvU3RyaW5nKCkubGVuZ3RoPT0xKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVMYWIuc3RyaW5nPVwiMFwiK3RoaXMudGltZU1pbnV0ZS50b1N0cmluZygpK1wiOjBcIit0aGlzLnRpbWVTZWNvbmQudG9TdHJpbmcoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnRpbWVMYWIuc3RyaW5nPVwiMFwiK3RoaXMudGltZU1pbnV0ZS50b1N0cmluZygpK1wiOlwiK3RoaXMudGltZVNlY29uZC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgfVxuXG59Il19