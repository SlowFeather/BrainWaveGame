
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Tools/LoggerUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '592b6f/vJdMO56rTQQb0s1D', 'LoggerUtil');
// scripts/Tools/LoggerUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 日志等级枚举
 */
var LogLv;
(function (LogLv) {
    LogLv[LogLv["DEBUG"] = 0] = "DEBUG";
    LogLv[LogLv["INFO"] = 1] = "INFO";
    LogLv[LogLv["WARN"] = 2] = "WARN";
    LogLv[LogLv["ERROR"] = 3] = "ERROR";
})(LogLv = exports.LogLv || (exports.LogLv = {}));
var LogInfo = /** @class */ (function () {
    function LogInfo() {
    }
    return LogInfo;
}());
exports.LogInfo = LogInfo;
var Logger = /** @class */ (function () {
    function Logger() {
    }
    /**
     * 收集、打印调试等级的日志
     * @param tag
     * @param msg
     */
    Logger.debug = function (msg, tag) {
        if (tag === void 0) { tag = "default"; }
        if (Logger.level > LogLv.DEBUG) {
            return;
        }
        var logMsg = "[DEBUG] [" + tag + "] " + msg;
        Logger._addLog(LogLv.DEBUG, logMsg);
        cc.log(logMsg);
    };
    /**
        * 添加缓存日志
        * @param level
        * @param logMsg
    */
    Logger._addLog = function (level, logMsg) {
        if (Logger.logs.length >= Logger.MAX_LEN) {
            Logger.logs.splice(0, Logger.CLEAR_COUNT);
        }
        Logger.logs.push({
            level: level,
            msg: logMsg
        });
    };
    Logger.PrintLog = function () {
        console.dir(Logger.logs);
    };
    Logger.MAX_LEN = 100;
    /**
     *
     * 从第几个插入，如果是0则无线插入，如果是1则从第一个开始
     * @private
     * @static
     * @type {number}
     * @memberof Logger
     */
    Logger.CLEAR_COUNT = 1;
    Logger.level = 0;
    Logger.logs = [];
    return Logger;
}());
exports.default = Logger;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVG9vbHNcXExvZ2dlclV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNGLElBQVksS0FLWjtBQUxBLFdBQVksS0FBSztJQUNkLG1DQUFTLENBQUE7SUFDVCxpQ0FBSSxDQUFBO0lBQ0osaUNBQUksQ0FBQTtJQUNKLG1DQUFLLENBQUE7QUFDVCxDQUFDLEVBTFksS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBS2pCO0FBRUQ7SUFBQTtJQUVBLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSwwQkFBTztBQUlwQjtJQUFBO0lBa0RBLENBQUM7SUFoQ0c7Ozs7T0FJRztJQUNXLFlBQUssR0FBbkIsVUFBcUIsR0FBVyxFQUFDLEdBQXFCO1FBQXJCLG9CQUFBLEVBQUEsZUFBcUI7UUFDbEQsSUFBSSxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDNUIsT0FBTztTQUNWO1FBRUQsSUFBSSxNQUFNLEdBQUcsV0FBVyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNwQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFDRDs7OztNQUlFO0lBQ2EsY0FBTyxHQUF0QixVQUF1QixLQUFZLEVBQUUsTUFBYztRQUMvQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM3QztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2IsS0FBSyxFQUFFLEtBQUs7WUFDWixHQUFHLEVBQUUsTUFBTTtTQUNkLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDYSxlQUFRLEdBQXRCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQWhEYyxjQUFPLEdBQVcsR0FBRyxDQUFDO0lBRXJDOzs7Ozs7O09BT0c7SUFDWSxrQkFBVyxHQUFXLENBQUMsQ0FBQztJQUV4QixZQUFLLEdBQVcsQ0FBQyxDQUFDO0lBR2xCLFdBQUksR0FBbUIsRUFBRSxDQUFDO0lBa0M3QyxhQUFDO0NBbERELEFBa0RDLElBQUE7a0JBbERvQixNQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOaXpeW/l+etiee6p+aemuS4vlxyXG4gKi9cclxuIGV4cG9ydCBlbnVtIExvZ0x2IHtcclxuICAgIERFQlVHID0gMCxcclxuICAgIElORk8sXHJcbiAgICBXQVJOLFxyXG4gICAgRVJST1JcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ0luZm8ge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nZ2VyIHtcclxuICAgIHByaXZhdGUgc3RhdGljIE1BWF9MRU46IG51bWJlciA9IDEwMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiDku47nrKzlh6DkuKrmj5LlhaXvvIzlpoLmnpzmmK8w5YiZ5peg57q/5o+S5YWl77yM5aaC5p6c5pivMeWImeS7juesrOS4gOS4quW8gOWni1xyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqIEBzdGF0aWNcclxuICAgICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICAgKiBAbWVtYmVyb2YgTG9nZ2VyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc3RhdGljIENMRUFSX0NPVU5UOiBudW1iZXIgPSAxO1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGxldmVsOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICBcclxuICAgIHByaXZhdGUgc3RhdGljIGxvZ3M6IEFycmF5PExvZ0luZm8+ID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmlLbpm4bjgIHmiZPljbDosIPor5XnrYnnuqfnmoTml6Xlv5dcclxuICAgICAqIEBwYXJhbSB0YWdcclxuICAgICAqIEBwYXJhbSBtc2dcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBkZWJ1ZyggbXNnOiBzdHJpbmcsdGFnOiBzdHJpbmc9XCJkZWZhdWx0XCIsKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKExvZ2dlci5sZXZlbCA+IExvZ0x2LkRFQlVHKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBsZXQgbG9nTXNnID0gXCJbREVCVUddIFtcIiArIHRhZyArIFwiXSBcIiArIG1zZztcclxuICAgICAgICBMb2dnZXIuX2FkZExvZyhMb2dMdi5ERUJVRywgbG9nTXNnKTtcclxuICAgICAgICBjYy5sb2cobG9nTXNnKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICAgICog5re75Yqg57yT5a2Y5pel5b+XXHJcbiAgICAgICAgKiBAcGFyYW0gbGV2ZWxcclxuICAgICAgICAqIEBwYXJhbSBsb2dNc2dcclxuICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfYWRkTG9nKGxldmVsOiBMb2dMdiwgbG9nTXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoTG9nZ2VyLmxvZ3MubGVuZ3RoID49IExvZ2dlci5NQVhfTEVOKSB7XHJcbiAgICAgICAgICAgIExvZ2dlci5sb2dzLnNwbGljZSgwLCBMb2dnZXIuQ0xFQVJfQ09VTlQpO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIExvZ2dlci5sb2dzLnB1c2goe1xyXG4gICAgICAgICAgICBsZXZlbDogbGV2ZWwsXHJcbiAgICAgICAgICAgIG1zZzogbG9nTXNnXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIFByaW50TG9nKCl7XHJcbiAgICAgICAgY29uc29sZS5kaXIoTG9nZ2VyLmxvZ3MpO1xyXG4gICAgfVxyXG59Il19