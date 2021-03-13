export class CookieUtil {

    //private static UrlHead: string = "http://127.0.0.1:1111/";


    /**
     * 根据名称获取Cookie
     *
     * @static
     * @param {string} cookiename
     * @return {*} 
     * @memberof CookieUtil
     */
    public static GetCookie(cookiename:string){
        var strcookie = document.cookie;//获取cookie字符串
        var arrcookie = strcookie.split("; ");//分割
        //遍历匹配
        for ( var i = 0; i < arrcookie.length; i++) {
            var arr = arrcookie[i].split("=");
            if (arr[0] == cookiename){
                return arr[1];
            }
        }
        return "";
    }
    public static SetCookie(cookiename:string,cookievalue:string){
        // 设置cookie
        document.cookie=cookiename+"="+cookievalue;
    }
    
    



}