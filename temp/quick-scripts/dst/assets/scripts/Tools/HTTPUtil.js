
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVG9vbHNcXEhUVFBVdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFBQTtJQXNGQSxDQUFDO0lBM0VHOzs7Ozs7OztPQVFHO0lBQ1csWUFBRyxHQUFqQixVQUFrQixHQUFHLEVBQUUsTUFBbUIsRUFBRSxRQUFRO1FBQTdCLHVCQUFBLEVBQUEsV0FBbUI7UUFDdEMsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztZQUMzQixPQUFPLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLE9BQU8sS0FBSyxFQUFFLEVBQUU7WUFDaEIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN0RCxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxPQUFPLENBQUM7U0FDN0I7UUFDRCxnQ0FBZ0M7UUFFaEMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQixHQUFHLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLDBCQUEwQixDQUFDLENBQUM7UUFDakUsR0FBRyxDQUFDLGtCQUFrQixHQUFHO1lBQ3JCLElBQUksR0FBRyxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQUM7Z0JBQ2hDLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUU7b0JBQ3ZDLElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUM7b0JBQ2hDLHdDQUF3QztvQkFDeEMsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDNUI7cUJBQU07b0JBQ0gsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDN0I7YUFDSjtRQUNMLENBQUMsQ0FBQztRQUNGLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMzQixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDVyxhQUFJLEdBQWxCLFVBQW1CLEdBQUcsRUFBRSxLQUFrQixFQUFFLFFBQVE7UUFBNUIsc0JBQUEsRUFBQSxVQUFrQjtRQUN0QyxnQ0FBZ0M7UUFDaEMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3hDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDMUIsT0FBTyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ2hFLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxPQUFPLEtBQUssRUFBRSxFQUFFO1lBQ2hCLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekQ7UUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUIsR0FBRyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1FBQzFFLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRztZQUNyQixJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO2dCQUN0QixJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO2dCQUNoQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO29CQUN2QyxJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO29CQUNoQyx3Q0FBd0M7b0JBQ3hDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7aUJBRTVCO3FCQUFNO29CQUNILFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7aUJBQzdCO2FBQ0o7UUFDTCxDQUFDLENBQUM7UUFDRixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFuRmMsZ0JBQU8sR0FBVyx3QkFBd0IsQ0FBQztJQUMxRDs7Ozs7T0FLRztJQUNZLGdCQUFPLEdBQVEsR0FBRyxDQUFDO0lBNkV0QyxlQUFDO0NBdEZELEFBc0ZDLElBQUE7QUF0RlksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSHR0cFV0aWwge1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgVXJsSGVhZDogc3RyaW5nID0gXCJodHRwOi8vMTI3LjAuMC4xOjExMTEvXCI7XG4gICAgLyoqXG4gICAgICog5bu26L+f5aSa5LmF5rKh5Zue5aSN5bCx5pS+5byDXG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBEcml2ZU1hbmFnZXJcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBUaW1lT3V0Om51bWJlcj0xMDA7XG5cbiAgICAvKipcbiAgICAgKiBHRVTor7fmsYJcbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0geyp9IHVybFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zPXt9XVxuICAgICAqIEBwYXJhbSB7Kn0gY2FsbGJhY2tcbiAgICAgKiBAbWVtYmVyb2YgSHR0cFV0aWxcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEdFVCh1cmwsIHBhcmFtczogb2JqZWN0ID0ge30sIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBkYXRhU3RyID0gJyc7XG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgZGF0YVN0ciArPSBrZXkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pICsgJyYnO1xuICAgICAgICB9KVxuICAgICAgICBpZiAoZGF0YVN0ciAhPT0gJycpIHtcbiAgICAgICAgICAgIGRhdGFTdHIgPSBkYXRhU3RyLnN1YnN0cigwLCBkYXRhU3RyLmxhc3RJbmRleE9mKCcmJykpO1xuICAgICAgICAgICAgdXJsID0gdXJsICsgJz8nICsgZGF0YVN0cjtcbiAgICAgICAgfVxuICAgICAgICAvLyB1cmwgPSBIdHRwVXRpbC5iYXNlVXJsICsgdXJsO1xuXG4gICAgICAgIGxldCB4aHIgPSBjYy5sb2FkZXIuZ2V0WE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLThcIik7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBodHRwU3RhdHVzID0geGhyLnN0YXR1c1RleHQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrKHRydWUsIEpTT04ucGFyc2UocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB4aHIudGltZW91dCA9IHRoaXMuVGltZU91dDtcbiAgICAgICAgeGhyLnNlbmQoKTtcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICogUE9TVOivt+axglxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7Kn0gdXJsXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbT17fV1cbiAgICAgKiBAcGFyYW0geyp9IGNhbGxiYWNrXG4gICAgICogQG1lbWJlcm9mIEh0dHBVdGlsXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBQT1NUKHVybCwgcGFyYW06IG9iamVjdCA9IHt9LCBjYWxsYmFjaykge1xuICAgICAgICAvLyB1cmwgPSBIdHRwVXRpbC5iYXNlVXJsICsgdXJsO1xuICAgICAgICB2YXIgeGhyID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIGxldCBkYXRhU3RyID0gJyc7XG4gICAgICAgIE9iamVjdC5rZXlzKHBhcmFtKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICBkYXRhU3RyICs9IGtleSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChwYXJhbVtrZXldKSArICcmJztcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGRhdGFTdHIgIT09ICcnKSB7XG4gICAgICAgICAgICBkYXRhU3RyID0gZGF0YVN0ci5zdWJzdHIoMCwgZGF0YVN0ci5sYXN0SW5kZXhPZignJicpKTtcbiAgICAgICAgfVxuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgdXJsLCB0cnVlKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBodHRwU3RhdHVzID0geGhyLnN0YXR1c1RleHQ7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrKHRydWUsIEpTT04ucGFyc2UocmVzcG9uc2UpKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSwgcmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHhoci5zZW5kKGRhdGFTdHIpO1xuICAgIH1cbn0iXX0=