
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Tools/HTTPUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        try {
            var xhr_1 = cc.loader.getXMLHttpRequest();
            xhr_1.open("GET", url, true);
            xhr_1.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            xhr_1.onreadystatechange = function () {
                if (xhr_1.readyState === 4) {
                    var response = xhr_1.responseText;
                    if (xhr_1.status >= 200 && xhr_1.status < 300) {
                        var httpStatus = xhr_1.statusText;
                        // callback(true, JSON.parse(response));
                        callback(true, response);
                    }
                    else {
                        callback(false, response);
                    }
                }
            };
            xhr_1.timeout = this.TimeOut;
            xhr_1.send();
        }
        catch (error) {
            console.log("Get-->" + error);
        }
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
        try {
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
        }
        catch (error) {
            console.log("Post-->" + error);
        }
    };
    // private static UrlHead: string = "http://127.0.0.1:1111/";
    /**
     * 延迟多久没回复就放弃
     *
     * @type {number}
     * @memberof DriveManager
     */
    HttpUtil.TimeOut = 200;
    return HttpUtil;
}());
exports.HttpUtil = HttpUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVG9vbHNcXEhUVFBVdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQThGQSxDQUFDO0lBbkZHOzs7Ozs7OztPQVFHO0lBQ1csWUFBRyxHQUFqQixVQUFrQixHQUFHLEVBQUUsTUFBbUIsRUFBRSxRQUFRO1FBQTdCLHVCQUFBLEVBQUEsV0FBbUI7UUFDdEMsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztZQUMzQixPQUFPLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLE9BQU8sS0FBSyxFQUFFLEVBQUU7WUFDaEIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0RCxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUM7U0FDN0I7UUFDRCxnQ0FBZ0M7UUFDaEMsSUFBSTtZQUNBLElBQUksS0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN4QyxLQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDM0IsS0FBRyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSwwQkFBMEIsQ0FBQyxDQUFDO1lBQ2pFLEtBQUcsQ0FBQyxrQkFBa0IsR0FBRztnQkFDckIsSUFBSSxLQUFHLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtvQkFDdEIsSUFBSSxRQUFRLEdBQUcsS0FBRyxDQUFDLFlBQVksQ0FBQztvQkFDaEMsSUFBSSxLQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsSUFBSSxLQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTt3QkFDdkMsSUFBSSxVQUFVLEdBQUcsS0FBRyxDQUFDLFVBQVUsQ0FBQzt3QkFDaEMsd0NBQXdDO3dCQUN4QyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO3FCQUM1Qjt5QkFBTTt3QkFDSCxRQUFRLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO3FCQUM3QjtpQkFDSjtZQUNMLENBQUMsQ0FBQztZQUNGLEtBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUMzQixLQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0I7SUFFTCxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDVyxhQUFJLEdBQWxCLFVBQW1CLEdBQUcsRUFBRSxLQUFrQixFQUFFLFFBQVE7UUFBNUIsc0JBQUEsRUFBQSxVQUFrQjtRQUN0QyxnQ0FBZ0M7UUFDaEMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3hDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDMUIsT0FBTyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ2hFLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxPQUFPLEtBQUssRUFBRSxFQUFFO1lBQ2hCLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekQ7UUFDRCxJQUFJO1lBQ0EsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzVCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsbUNBQW1DLENBQUMsQ0FBQztZQUMxRSxHQUFHLENBQUMsa0JBQWtCLEdBQUc7Z0JBQ3JCLElBQUksR0FBRyxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7b0JBQ3RCLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7b0JBQ2hDLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7d0JBQ3ZDLElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7d0JBQ2hDLHdDQUF3Qzt3QkFDeEMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztxQkFDNUI7eUJBQU07d0JBQ0gsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztxQkFDN0I7aUJBQ0o7WUFDTCxDQUFDLENBQUM7WUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3JCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQztJQUVMLENBQUM7SUEzRkQsNkRBQTZEO0lBQzdEOzs7OztPQUtHO0lBQ1ksZ0JBQU8sR0FBUSxHQUFHLENBQUM7SUFxRnRDLGVBQUM7Q0E5RkQsQUE4RkMsSUFBQTtBQTlGWSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBIdHRwVXRpbCB7XG5cbiAgICAvLyBwcml2YXRlIHN0YXRpYyBVcmxIZWFkOiBzdHJpbmcgPSBcImh0dHA6Ly8xMjcuMC4wLjE6MTExMS9cIjtcbiAgICAvKipcbiAgICAgKiDlu7bov5/lpJrkuYXmsqHlm57lpI3lsLHmlL7lvINcbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIERyaXZlTWFuYWdlclxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIFRpbWVPdXQ6bnVtYmVyPTIwMDtcblxuICAgIC8qKlxuICAgICAqIEdFVOivt+axglxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7Kn0gdXJsXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXM9e31dXG4gICAgICogQHBhcmFtIHsqfSBjYWxsYmFja1xuICAgICAqIEBtZW1iZXJvZiBIdHRwVXRpbFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgR0VUKHVybCwgcGFyYW1zOiBvYmplY3QgPSB7fSwgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IGRhdGFTdHIgPSAnJztcbiAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBkYXRhU3RyICs9IGtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbXNba2V5XSkgKyAnJic7XG4gICAgICAgIH0pXG4gICAgICAgIGlmIChkYXRhU3RyICE9PSAnJykge1xuICAgICAgICAgICAgZGF0YVN0ciA9IGRhdGFTdHIuc3Vic3RyKDAsIGRhdGFTdHIubGFzdEluZGV4T2YoJyYnKSk7XG4gICAgICAgICAgICB1cmwgPSB1cmwgKyAnPycgKyBkYXRhU3RyO1xuICAgICAgICB9XG4gICAgICAgIC8vIHVybCA9IEh0dHBVdGlsLmJhc2VVcmwgKyB1cmw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgeGhyID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLThcIik7XG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGh0dHBTdGF0dXMgPSB4aHIuc3RhdHVzVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrKHRydWUsIEpTT04ucGFyc2UocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgeGhyLnRpbWVvdXQgPSB0aGlzLlRpbWVPdXQ7XG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJHZXQtLT5cIitlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuICAgIFxuICAgIC8qKlxuICAgICAqIFBPU1Tor7fmsYJcbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0geyp9IHVybFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW09e31dXG4gICAgICogQHBhcmFtIHsqfSBjYWxsYmFja1xuICAgICAqIEBtZW1iZXJvZiBIdHRwVXRpbFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgUE9TVCh1cmwsIHBhcmFtOiBvYmplY3QgPSB7fSwgY2FsbGJhY2spIHtcbiAgICAgICAgLy8gdXJsID0gSHR0cFV0aWwuYmFzZVVybCArIHVybDtcbiAgICAgICAgdmFyIHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICBsZXQgZGF0YVN0ciA9ICcnO1xuICAgICAgICBPYmplY3Qua2V5cyhwYXJhbSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgZGF0YVN0ciArPSBrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1ba2V5XSkgKyAnJic7XG4gICAgICAgIH0pXG4gICAgICAgIGlmIChkYXRhU3RyICE9PSAnJykge1xuICAgICAgICAgICAgZGF0YVN0ciA9IGRhdGFTdHIuc3Vic3RyKDAsIGRhdGFTdHIubGFzdEluZGV4T2YoJyYnKSk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGh0dHBTdGF0dXMgPSB4aHIuc3RhdHVzVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrKHRydWUsIEpTT04ucGFyc2UocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgeGhyLnNlbmQoZGF0YVN0cik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBvc3QtLT5cIitlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufSJdfQ==