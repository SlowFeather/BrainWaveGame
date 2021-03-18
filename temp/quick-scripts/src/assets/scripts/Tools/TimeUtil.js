"use strict";
cc._RF.push(module, '67c47qFf9JGn4sAQuwLVkcq', 'TimeUtil');
// scripts/Tools/TimeUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TimeUtil = /** @class */ (function () {
    function TimeUtil() {
    }
    /**
    * format: string,
    * time:  秒
    */
    TimeUtil.formatDate = function (time, format, len) {
        if (format === void 0) { format = TimeFormatType.TIME_FORMAT_4; }
        if (len === void 0) { len = 2; }
        var day = time / (3600 * 24) >> 0;
        var hour = this.pad((time / 3600 >> 0) % 24, len);
        var min = this.pad((time % 3600 / 60) >> 0, len);
        var sec = this.pad(time % 60, len);
        var flags = {
            d: day,
            dd: day,
            D: day,
            DD: day,
            h: hour,
            hh: hour,
            H: hour,
            HH: hour,
            m: min,
            mm: min,
            M: min,
            MM: min,
            s: sec,
            ss: sec,
            S: sec,
            SS: sec,
        };
        format = format.replace(this.timeRegExp, function (str) {
            return flags[str];
        });
        return format;
    };
    /**
    * 获得时间格式 "yyyy-mm-dd HH:MM:ss",
    * @param timestamp //毫秒
    */
    TimeUtil.getYMDHMS = function (timestamp) {
        //timestamp是整数，否则要parseInt转换
        var time = new Date(timestamp);
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        return y + '-' + TimeUtil.pad(m) + '-' + TimeUtil.pad(d) + ' ' + TimeUtil.pad(h) + ':' + TimeUtil.pad(mm) + ':' + TimeUtil.pad(s);
    };
    /**
     * 获取剩余显示的时间.
     * 大于1天   : 显示  N 天
     * 小于1小时 : 显示  N 分钟
     * else     : 显示  N 小时
     */
    TimeUtil.getShowTimeDHMString = function (time) {
        var str = "";
        if (time > 24 * 3600) {
            str = this.formatDate(time, TimeFormatType.TIME_FORMAT_8, 1);
        }
        else if (time < 3600) {
            if (time < 60) {
                time = 60;
            }
            str = this.formatDate(time, TimeFormatType.TIME_FORMAT_9, 1);
        }
        else {
            str = this.formatDate(time, TimeFormatType.TIME_FORMAT_7, 1);
        }
        return str;
    };
    TimeUtil.pad = function (val, len) {
        if (len === void 0) { len = 2; }
        var val1 = String(val);
        while (val1.length < len) {
            val1 = '0' + val1;
        }
        return val1;
    };
    TimeUtil.defaultDateFormat = "yyyy-mm-dd HH:MM:ss";
    TimeUtil.timeRegExp = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsD])\1?|[LloSZWN]/g;
    return TimeUtil;
}());
exports.TimeUtil = TimeUtil;
var TimeFormatType;
(function (TimeFormatType) {
    TimeFormatType["TIME_FORMAT_1"] = "HH\u65F6MM\u5206";
    TimeFormatType["TIME_FORMAT_2"] = "MM\u5206";
    TimeFormatType["TIME_FORMAT_4"] = "HH:MM:ss";
    TimeFormatType["TIME_FORMAT_5"] = "MM:ss";
    TimeFormatType["TIME_FORMAT_6"] = "D\u5929HH\u65F6";
    TimeFormatType["TIME_FORMAT_7"] = "HH\u5C0F\u65F6";
    TimeFormatType["TIME_FORMAT_8"] = "D\u5929";
    TimeFormatType["TIME_FORMAT_9"] = "M\u5206\u949F";
    TimeFormatType["TIME_FORMAT_11"] = "HH\u5C0F\u65F6MM\u5206ss\u79D2";
    TimeFormatType["TIME_FORMAT_12"] = "dd\u65E5hh\u65F6";
    TimeFormatType["TIME_FORMAT_19"] = "HH:MM";
    TimeFormatType["TIME_FORMAT_20"] = "HH\u65F6MM\u5206ss\u79D2";
    TimeFormatType["TIME_FORMAT_21"] = "MM\u5206ss\u79D2";
    TimeFormatType["TIME_FORMAT_22"] = "dd\u5929HH\u65F6MM\u5206";
})(TimeFormatType = exports.TimeFormatType || (exports.TimeFormatType = {}));

cc._RF.pop();