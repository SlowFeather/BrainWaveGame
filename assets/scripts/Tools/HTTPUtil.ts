export class HttpUtil {

    private static UrlHead: string = "http://127.0.0.1:1111/";
    /**
     * 延迟多久没回复就放弃
     *
     * @type {number}
     * @memberof DriveManager
     */
    private static TimeOut:number=100;

    /**
     * GET请求
     *
     * @static
     * @param {*} url
     * @param {object} [params={}]
     * @param {*} callback
     * @memberof HttpUtil
     */
    public static GET(url, params: object = {}, callback) {
        let dataStr = '';
        Object.keys(params).forEach(key => {
            dataStr += key + '=' + encodeURIComponent(params[key]) + '&';
        })
        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
        // url = HttpUtil.baseUrl + url;

        let xhr = cc.loader.getXMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                let response = xhr.responseText;
                if (xhr.status >= 200 && xhr.status < 300) {
                    let httpStatus = xhr.statusText;
                    // callback(true, JSON.parse(response));
                    callback(true, response);
                } else {
                    callback(false, response);
                }
            }
        };
        xhr.timeout = this.TimeOut;
        xhr.send();
    }
    
    /**
     * POST请求
     *
     * @static
     * @param {*} url
     * @param {object} [param={}]
     * @param {*} callback
     * @memberof HttpUtil
     */
    public static POST(url, param: object = {}, callback) {
        // url = HttpUtil.baseUrl + url;
        var xhr = cc.loader.getXMLHttpRequest();
        let dataStr = '';
        Object.keys(param).forEach(key => {
            dataStr += key + '=' + encodeURIComponent(param[key]) + '&';
        })
        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
        }
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                let response = xhr.responseText;
                if (xhr.status >= 200 && xhr.status < 300) {
                    let httpStatus = xhr.statusText;
                    // callback(true, JSON.parse(response));
                    callback(true, response);

                } else {
                    callback(false, response);
                }
            }
        };
        xhr.send(dataStr);
    }
}