
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Tools/CookieUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVG9vbHNcXENvb2tpZVV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBa0NBLENBQUM7SUFoQ0csNERBQTREO0lBRzVEOzs7Ozs7O09BT0c7SUFDVyxvQkFBUyxHQUF2QixVQUF3QixVQUFpQjtRQUNyQyxJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUEsYUFBYTtRQUM3QyxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsSUFBSTtRQUMxQyxNQUFNO1FBQ04sS0FBTSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNsQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxVQUFVLEVBQUM7Z0JBQ3JCLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pCO1NBQ0o7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNkLENBQUM7SUFDYSxvQkFBUyxHQUF2QixVQUF3QixVQUFpQixFQUFDLFdBQWtCO1FBQ3hELFdBQVc7UUFDWCxRQUFRLENBQUMsTUFBTSxHQUFDLFVBQVUsR0FBQyxHQUFHLEdBQUMsV0FBVyxDQUFDO0lBQy9DLENBQUM7SUFNTCxpQkFBQztBQUFELENBbENBLEFBa0NDLElBQUE7QUFsQ1ksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29va2llVXRpbCB7XG5cbiAgICAvL3ByaXZhdGUgc3RhdGljIFVybEhlYWQ6IHN0cmluZyA9IFwiaHR0cDovLzEyNy4wLjAuMToxMTExL1wiO1xuXG5cbiAgICAvKipcbiAgICAgKiDmoLnmja7lkI3np7Dojrflj5ZDb29raWVcbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29va2llbmFtZVxuICAgICAqIEByZXR1cm4geyp9IFxuICAgICAqIEBtZW1iZXJvZiBDb29raWVVdGlsXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBHZXRDb29raWUoY29va2llbmFtZTpzdHJpbmcpe1xuICAgICAgICB2YXIgc3RyY29va2llID0gZG9jdW1lbnQuY29va2llOy8v6I635Y+WY29va2ll5a2X56ym5LiyXG4gICAgICAgIHZhciBhcnJjb29raWUgPSBzdHJjb29raWUuc3BsaXQoXCI7IFwiKTsvL+WIhuWJslxuICAgICAgICAvL+mBjeWOhuWMuemFjVxuICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBhcnJjb29raWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBhcnIgPSBhcnJjb29raWVbaV0uc3BsaXQoXCI9XCIpO1xuICAgICAgICAgICAgaWYgKGFyclswXSA9PSBjb29raWVuYW1lKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICBwdWJsaWMgc3RhdGljIFNldENvb2tpZShjb29raWVuYW1lOnN0cmluZyxjb29raWV2YWx1ZTpzdHJpbmcpe1xuICAgICAgICAvLyDorr7nva5jb29raWVcbiAgICAgICAgZG9jdW1lbnQuY29va2llPWNvb2tpZW5hbWUrXCI9XCIrY29va2lldmFsdWU7XG4gICAgfVxuICAgIFxuICAgIFxuXG5cblxufSJdfQ==