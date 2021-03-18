"use strict";
cc._RF.push(module, 'ccc57Yu42NLRJ28Je9erH4d', 'CookieUtil');
// scripts/Tools/CookieUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CookieUtil = /** @class */ (function () {
    function CookieUtil() {
    }
    //private static UrlHead: string = "http://127.0.0.1:1111/";
    /**
     * 根据名称获取Cookie
     *
     * @static
     * @param {string} cookiename
     * @return {*}
     * @memberof CookieUtil
     */
    CookieUtil.GetCookie = function (cookiename) {
        var strcookie = document.cookie; //获取cookie字符串
        var arrcookie = strcookie.split("; "); //分割
        //遍历匹配
        for (var i = 0; i < arrcookie.length; i++) {
            var arr = arrcookie[i].split("=");
            if (arr[0] == cookiename) {
                return arr[1];
            }
        }
        return "";
    };
    CookieUtil.SetCookie = function (cookiename, cookievalue) {
        // 设置cookie
        document.cookie = cookiename + "=" + cookievalue;
    };
    return CookieUtil;
}());
exports.CookieUtil = CookieUtil;

cc._RF.pop();