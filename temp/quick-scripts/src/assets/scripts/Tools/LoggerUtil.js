"use strict";
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