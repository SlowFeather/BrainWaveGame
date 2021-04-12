/**
 * 日志等级枚举
 */
 export enum LogLv {
    DEBUG = 0,
    INFO,
    WARN,
    ERROR
}

export class LogInfo {

}

export default class Logger {
    private static MAX_LEN: number = 100;

    /**
     *
     * 从第几个插入，如果是0则无线插入，如果是1则从第一个开始
     * @private
     * @static
     * @type {number}
     * @memberof Logger
     */
    private static CLEAR_COUNT: number = 1;

    private static level: number = 0;

     
    private static logs: Array<LogInfo> = [];

    /**
     * 收集、打印调试等级的日志
     * @param tag
     * @param msg
     */
    public static debug( msg: string,tag: string="default",): void {
        if (Logger.level > LogLv.DEBUG) {
            return;
        }
    
        let logMsg = "[DEBUG] [" + tag + "] " + msg;
        Logger._addLog(LogLv.DEBUG, logMsg);
        cc.log(logMsg);
    }
    /**
        * 添加缓存日志
        * @param level
        * @param logMsg
    */
    private static _addLog(level: LogLv, logMsg: string): void {
        if (Logger.logs.length >= Logger.MAX_LEN) {
            Logger.logs.splice(0, Logger.CLEAR_COUNT);
        }
    
        Logger.logs.push({
            level: level,
            msg: logMsg
        });
    }
    public static PrintLog(){
        console.dir(Logger.logs);
    }
}