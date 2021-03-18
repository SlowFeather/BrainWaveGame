"use strict";
cc._RF.push(module, 'b8defojbOVCx70RVfAObGQ0', 'HTTPUtil');
// scripts/Tools/HTTPUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpUtil = /** @class */ (function () {
    function HttpUtil() {
    }
    /**
     * GET请求
     *
     * @static
     * @param {*} url
     * @param {object} [params={}]
     * @param {*} callback
     * @memberof HttpUtil
     */
    HttpUtil.GET = function (url, params, callback) {
        if (params === void 0) { params = {}; }
        var dataStr = '';
        Object.keys(params).forEach(function (key) {
            dataStr += key + '=' + encodeURIComponent(params[key]) + '&';
        });
        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
        // url = HttpUtil.baseUrl + url;
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                var response = xhr.responseText;
                if (xhr.status >= 200 && xhr.status < 300) {
                    var httpStatus = xhr.statusText;
                    // callback(true, JSON.parse(response));
                    callback(true, response);
                }
                else {
                    callback(false, response);
                }
            }
        };
        xhr.timeout = this.TimeOut;
        xhr.send();
    };
    /**
     * POST请求
     *
     * @static
     * @param {*} url
     * @param {object} [param={}]
     * @param {*} callback
     * @memberof HttpUtil
     */
    HttpUtil.POST = function (url, param, callback) {
        if (param === void 0) { param = {}; }
        // url = HttpUtil.baseUrl + url;
        var xhr = cc.loader.getXMLHttpRequest();
        var dataStr = '';
        Object.keys(param).forEach(function (key) {
            dataStr += key + '=' + encodeURIComponent(param[key]) + '&';
        });
        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
        }
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                var response = xhr.responseText;
                if (xhr.status >= 200 && xhr.status < 300) {
                    var httpStatus = xhr.statusText;
                    // callback(true, JSON.parse(response));
                    callback(true, response);
                }
                else {
                    callback(false, response);
                }
            }
        };
        xhr.send(dataStr);
    };
    HttpUtil.UrlHead = "http://127.0.0.1:1111/";
    /**
     * 延迟多久没回复就放弃
     *
     * @type {number}
     * @memberof DriveManager
     */
    HttpUtil.TimeOut = 100;
    return HttpUtil;
}());
exports.HttpUtil = HttpUtil;

cc._RF.pop();