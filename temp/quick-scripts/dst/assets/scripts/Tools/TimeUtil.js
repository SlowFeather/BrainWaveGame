
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Tools/TimeUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVG9vbHNcXFRpbWVVdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7SUFBQTtJQXNGQSxDQUFDO0lBaEZHOzs7TUFHRTtJQUNZLG1CQUFVLEdBQXhCLFVBQXlCLElBQVksRUFBRSxNQUE2QyxFQUFFLEdBQWU7UUFBOUQsdUJBQUEsRUFBQSxTQUFpQixjQUFjLENBQUMsYUFBYTtRQUFFLG9CQUFBLEVBQUEsT0FBZTtRQUNqRyxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNsRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRW5DLElBQUksS0FBSyxHQUFRO1lBQ2IsQ0FBQyxFQUFFLEdBQUc7WUFDTixFQUFFLEVBQUUsR0FBRztZQUNQLENBQUMsRUFBRSxHQUFHO1lBQ04sRUFBRSxFQUFFLEdBQUc7WUFDUCxDQUFDLEVBQUUsSUFBSTtZQUNQLEVBQUUsRUFBRSxJQUFJO1lBQ1IsQ0FBQyxFQUFFLElBQUk7WUFDUCxFQUFFLEVBQUUsSUFBSTtZQUNSLENBQUMsRUFBRSxHQUFHO1lBQ04sRUFBRSxFQUFFLEdBQUc7WUFDUCxDQUFDLEVBQUUsR0FBRztZQUNOLEVBQUUsRUFBRSxHQUFHO1lBQ1AsQ0FBQyxFQUFFLEdBQUc7WUFDTixFQUFFLEVBQUUs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dkIsa0RBQXNCLENBQUE7SUFDdEIsMkNBQW9CLENBQUE7SUFDcEIsaURBQXFCLENBQUE7SUFDckIsbUVBQTZCLENBQUE7SUFDN0IscURBQXlCLENBQUE7SUFDekIsMENBQXdCLENBQUE7SUFDeEIsNkRBQTRCLENBQUE7SUFDNUIscURBQXlCLENBQUE7SUFDekIsNkRBQTRCLENBQUE7QUFDaEMsQ0FBQyxFQWZXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBZXpCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgVGltZVV0aWwge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgZGVmYXVsdERhdGVGb3JtYXQgPSBcInl5eXktbW0tZGQgSEg6TU06c3NcIjtcbiAgICBwcml2YXRlIHN0YXRpYyB0aW1lUmVnRXhwOiBSZWdFeHAgPSAvZHsxLDR9fG17MSw0fXx5eSg/Onl5KT98KFtIaE1zRF0pXFwxP3xbTGxvU1pXTl0vZztcblxuXG4gICAgLyoqXG4gICAgKiBmb3JtYXQ6IHN0cmluZyxcbiAgICAqIHRpbWU6ICDnp5JcbiAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZm9ybWF0RGF0ZSh0aW1lOiBudW1iZXIsIGZvcm1hdDogc3RyaW5nID0gVGltZUZvcm1hdFR5cGUuVElNRV9GT1JNQVRfNCwgbGVuOiBudW1iZXIgPSAyKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGRheSA9IHRpbWUgLyAoMzYwMCAqIDI0KSA+PiAwO1xuICAgICAgICBsZXQgaG91ciA9IHRoaXMucGFkKCh0aW1lIC8gMzYwMCA+PiAwKSAlIDI0LCBsZW4pO1xuICAgICAgICBsZXQgbWluID0gdGhpcy5wYWQoKHRpbWUgJSAzNjAwIC8gNjApID4+IDAsIGxlbik7XG4gICAgICAgIGxldCBzZWMgPSB0aGlzLnBhZCh0aW1lICUgNjAsIGxlbik7XG5cbiAgICAgICAgbGV0IGZsYWdzOiBhbnkgPSB7XG4gICAgICAgICAgICBkOiBkYXksXG4gICAgICAgICAgICBkZDogZGF5LFxuICAgICAgICAgICAgRDogZGF5LFxuICAgICAgICAgICAgREQ6IGRheSxcbiAgICAgICAgICAgIGg6IGhvdXIsXG4gICAgICAgICAgICBoaDogaG91cixcbiAgICAgICAgICAgIEg6IGhvdXIsXG4gICAgICAgICAgICBISDogaG91cixcbiAgICAgICAgICAgIG06IG1pbixcbiAgICAgICAgICAgIG1tOiBtaW4sXG4gICAgICAgICAgICBNOiBtaW4sXG4gICAgICAgICAgICBNTTogbWluLFxuICAgICAgICAgICAgczogc2VjLFxuICAgICAgICAgICAgc3M6IHNlYyxcbiAgICAgICAgICAgIFM6IHNlYyxcbiAgICAgICAgICAgIFNTOiBzZWMsXG4gICAgICAgIH07XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKHRoaXMudGltZVJlZ0V4cCwgKHN0cjogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZmxhZ3Nbc3RyXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBmb3JtYXQ7XG4gICAgfVxuXG4gICAgIC8qKlxuICAgICAqIOiOt+W+l+aXtumXtOagvOW8jyBcInl5eXktbW0tZGQgSEg6TU06c3NcIixcbiAgICAgKiBAcGFyYW0gdGltZXN0YW1wIC8v5q+r56eSXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRZTURITVModGltZXN0YW1wOiBudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICAvL3RpbWVzdGFtcOaYr+aVtOaVsO+8jOWQpuWImeimgXBhcnNlSW506L2s5o2iXG4gICAgICAgIHZhciB0aW1lID0gbmV3IERhdGUodGltZXN0YW1wKTtcbiAgICAgICAgdmFyIHkgPSB0aW1lLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIHZhciBtID0gdGltZS5nZXRNb250aCgpICsgMTtcbiAgICAgICAgdmFyIGQgPSB0aW1lLmdldERhdGUoKTtcbiAgICAgICAgdmFyIGggPSB0aW1lLmdldEhvdXJzKCk7XG4gICAgICAgIHZhciBtbSA9IHRpbWUuZ2V0TWludXRlcygpO1xuICAgICAgICB2YXIgcyA9IHRpbWUuZ2V0U2Vjb25kcygpO1xuICAgICAgICByZXR1cm4geSArICctJyArIFRpbWVVdGlsLnBhZChtKSArICctJyArIFRpbWVVdGlsLnBhZChkKSArICcgJyArIFRpbWVVdGlsLnBhZChoKSArICc6JyArIFRpbWVVdGlsLnBhZChtbSkgKyAnOicgKyBUaW1lVXRpbC5wYWQocyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5Ymp5L2Z5pi+56S655qE5pe26Ze0LlxuICAgICAqIOWkp+S6jjHlpKkgICA6IOaYvuekuiAgTiDlpKlcbiAgICAgKiDlsI/kuo4x5bCP5pe2IDog5pi+56S6ICBOIOWIhumSn1xuICAgICAqIGVsc2UgICAgIDog5pi+56S6ICBOIOWwj+aXtlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0U2hvd1RpbWVESE1TdHJpbmcodGltZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHN0cjogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgaWYgKHRpbWUgPiAyNCAqIDM2MDApIHtcbiAgICAgICAgICAgIHN0ciA9IHRoaXMuZm9ybWF0RGF0ZSh0aW1lLCBUaW1lRm9ybWF0VHlwZS5USU1FX0ZPUk1BVF84LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aW1lIDwgMzYwMCkge1xuICAgICAgICAgICAgaWYgKHRpbWUgPCA2MCkge1xuICAgICAgICAgICAgICAgIHRpbWUgPSA2MDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0ciA9IHRoaXMuZm9ybWF0RGF0ZSh0aW1lLCBUaW1lRm9ybWF0VHlwZS5USU1FX0ZPUk1BVF85LCAxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHN0ciA9IHRoaXMuZm9ybWF0RGF0ZSh0aW1lLCBUaW1lRm9ybWF0VHlwZS5USU1FX0ZPUk1BVF83LCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIHBhZCh2YWw6IG51bWJlciwgbGVuOiBudW1iZXIgPSAyKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IHZhbDEgPSBTdHJpbmcodmFsKTtcbiAgICAgICAgd2hpbGUgKHZhbDEubGVuZ3RoIDwgbGVuKSB7XG4gICAgICAgICAgICB2YWwxID0gJzAnICsgdmFsMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsMTtcbiAgICB9XG59XG5cbmV4cG9ydCBlbnVtIFRpbWVGb3JtYXRUeXBlIHtcbiAgICBUSU1FX0ZPUk1BVF8xID0gXCJISOaXtk1N5YiGXCIsXG4gICAgVElNRV9GT1JNQVRfMiA9IFwiTU3liIZcIixcbiAgICBUSU1FX0ZPUk1BVF80ID0gXCJISDpNTTpzc1wiLFxuICAgIFRJTUVfRk9STUFUXzUgPSBcIk1NOnNzXCIsXG4gICAgVElNRV9GT1JNQVRfNiA9IFwiROWkqUhI5pe2XCIsXG4gICAgVElNRV9GT1JNQVRfNyA9IFwiSEjlsI/ml7ZcIixcbiAgICBUSU1FX0ZPUk1BVF84ID0gXCJE5aSpXCIsXG4gICAgVElNRV9GT1JNQVRfOSA9IFwiTeWIhumSn1wiLFxuICAgIFRJTUVfRk9STUFUXzExID0gXCJISOWwj+aXtk1N5YiGc3Pnp5JcIixcbiAgICBUSU1FX0ZPUk1BVF8xMiA9IFwiZGTml6VoaOaXtlwiLFxuICAgIFRJTUVfRk9STUFUXzE5ID0gXCJISDpNTVwiLFxuICAgIFRJTUVfRk9STUFUXzIwID0gXCJISOaXtk1N5YiGc3Pnp5JcIixcbiAgICBUSU1FX0ZPUk1BVF8yMSA9IFwiTU3liIZzc+enklwiLFxuICAgIFRJTUVfRk9STUFUXzIyID0gXCJkZOWkqUhI5pe2TU3liIZcIixcbn0iXX0=