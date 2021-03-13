
export class TimeUtil {

    private static defaultDateFormat = "yyyy-mm-dd HH:MM:ss";
    private static timeRegExp: RegExp = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsD])\1?|[LloSZWN]/g;


    /**
    * format: string,
    * time:  秒
    */
    public static formatDate(time: number, format: string = TimeFormatType.TIME_FORMAT_4, len: number = 2): string {
        let day = time / (3600 * 24) >> 0;
        let hour = this.pad((time / 3600 >> 0) % 24, len);
        let min = this.pad((time % 3600 / 60) >> 0, len);
        let sec = this.pad(time % 60, len);

        let flags: any = {
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
        format = format.replace(this.timeRegExp, (str: string) => {
            return flags[str];
        });
        return format;
    }

     /**
     * 获得时间格式 "yyyy-mm-dd HH:MM:ss",
     * @param timestamp //毫秒
     */
    public static getYMDHMS(timestamp: number): string {
        //timestamp是整数，否则要parseInt转换
        var time = new Date(timestamp);
        var y = time.getFullYear();
        var m = time.getMonth() + 1;
        var d = time.getDate();
        var h = time.getHours();
        var mm = time.getMinutes();
        var s = time.getSeconds();
        return y + '-' + TimeUtil.pad(m) + '-' + TimeUtil.pad(d) + ' ' + TimeUtil.pad(h) + ':' + TimeUtil.pad(mm) + ':' + TimeUtil.pad(s);
    }

    /**
     * 获取剩余显示的时间.
     * 大于1天   : 显示  N 天
     * 小于1小时 : 显示  N 分钟
     * else     : 显示  N 小时
     */
    public static getShowTimeDHMString(time: number): string {
        let str: string = "";
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
    }

    private static pad(val: number, len: number = 2): string {
        let val1 = String(val);
        while (val1.length < len) {
            val1 = '0' + val1;
        }
        return val1;
    }
}

export enum TimeFormatType {
    TIME_FORMAT_1 = "HH时MM分",
    TIME_FORMAT_2 = "MM分",
    TIME_FORMAT_4 = "HH:MM:ss",
    TIME_FORMAT_5 = "MM:ss",
    TIME_FORMAT_6 = "D天HH时",
    TIME_FORMAT_7 = "HH小时",
    TIME_FORMAT_8 = "D天",
    TIME_FORMAT_9 = "M分钟",
    TIME_FORMAT_11 = "HH小时MM分ss秒",
    TIME_FORMAT_12 = "dd日hh时",
    TIME_FORMAT_19 = "HH:MM",
    TIME_FORMAT_20 = "HH时MM分ss秒",
    TIME_FORMAT_21 = "MM分ss秒",
    TIME_FORMAT_22 = "dd天HH时MM分",
}