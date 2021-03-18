
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Tools/StorageUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a183bRrULhAhak3sju12N+R', 'StorageUtil');
// scripts/Tools/StorageUtil.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 存储名称
 *
 * @export
 * @enum {number}
 */
var StorageName;
(function (StorageName) {
    StorageName["testName"] = "testName";
})(StorageName = exports.StorageName || (exports.StorageName = {}));
/**
* StorageUtil
* @ author: SlowFeather
* @ wechat: BackedByTheWT
* @ data: 2020-07-18 14:52
*/
var StorageUtil = /** @class */ (function () {
    function StorageUtil() {
    }
    /**
     * 存储数据
     *
     * @static
     * @param {string} key
     * @param {*} data
     * @memberof StorageUtil
     */
    StorageUtil.storageData = function (key, data) {
        cc.sys.localStorage.setItem(key, data);
        console.log("-->Set--" + key + ":" + data);
    };
    /**
     * 拿到数据
     *
     * @static
     * @param {string} key
     * @returns {*}
     * @memberof StorageUtil
     */
    StorageUtil.getData = function (key, defualtValue) {
        if (defualtValue === void 0) { defualtValue = null; }
        var value = cc.sys.localStorage.getItem(key);
        if (value != undefined) {
            console.log("-->Get--" + key + ":" + value);
            return value;
        }
        else {
            console.log("-->Get--" + key + ": NULL");
            return defualtValue;
        }
    };
    /**
     * 移除数据
     *
     * @static
     * @param {string} key
     * @memberof StorageUtil
     */
    StorageUtil.removeData = function (key) {
        cc.sys.localStorage.removeItem(key);
    };
    /**
     * 是否存在某一个data
     *
     * @static
     * @param {string} key
     * @return {*}  {boolean}
     * @memberof StorageUtil
     */
    StorageUtil.hasData = function (key) {
        if (cc.sys.localStorage.getItem(key) == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    StorageUtil = __decorate([
        ccclass
    ], StorageUtil);
    return StorageUtil;
}());
exports.default = StorageUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVG9vbHNcXFN0b3JhZ2VVdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUc1Qzs7Ozs7R0FLRztBQUNILElBQVksV0FFWDtBQUZELFdBQVksV0FBVztJQUNuQixvQ0FBcUIsQ0FBQTtBQUN6QixDQUFDLEVBRlcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFFdEI7QUFFRDs7Ozs7RUFLRTtBQUVGO0lBQUE7SUE4REEsQ0FBQztJQTVERzs7Ozs7OztPQU9HO0lBQ0ksdUJBQVcsR0FBbEIsVUFBbUIsR0FBVyxFQUFFLElBQVM7UUFDckMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBRS9DLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksbUJBQU8sR0FBZCxVQUFlLEdBQVcsRUFBRSxZQUF3QjtRQUF4Qiw2QkFBQSxFQUFBLG1CQUF3QjtRQUNoRCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsSUFBSSxLQUFLLElBQUksU0FBUyxFQUFFO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDNUMsT0FBTyxLQUFLLENBQUM7U0FDaEI7YUFBTTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQztZQUN6QyxPQUFPLFlBQVksQ0FBQztTQUN2QjtJQUNMLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxzQkFBVSxHQUFqQixVQUFrQixHQUFXO1FBQ3pCLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBR0Q7Ozs7Ozs7T0FPRztJQUNJLG1CQUFPLEdBQWQsVUFBZSxHQUFXO1FBQ3RCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLFNBQVMsRUFBRTtZQUMvQyxPQUFPLEtBQUssQ0FBQztTQUNoQjthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUM7U0FDZjtJQUNMLENBQUM7SUE3RGdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E4RC9CO0lBQUQsa0JBQUM7Q0E5REQsQUE4REMsSUFBQTtrQkE5RG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5cbi8qKlxuICog5a2Y5YKo5ZCN56ewXG4gKlxuICogQGV4cG9ydFxuICogQGVudW0ge251bWJlcn1cbiAqL1xuZXhwb3J0IGVudW0gU3RvcmFnZU5hbWUge1xuICAgIHRlc3ROYW1lID0gXCJ0ZXN0TmFtZVwiLFxufVxuXG4vKipcbiogU3RvcmFnZVV0aWxcbiogQCBhdXRob3I6IFNsb3dGZWF0aGVyXG4qIEAgd2VjaGF0OiBCYWNrZWRCeVRoZVdUXG4qIEAgZGF0YTogMjAyMC0wNy0xOCAxNDo1MlxuKi9cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yYWdlVXRpbCB7XG5cbiAgICAvKipcbiAgICAgKiDlrZjlgqjmlbDmja5cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICogQHBhcmFtIHsqfSBkYXRhXG4gICAgICogQG1lbWJlcm9mIFN0b3JhZ2VVdGlsXG4gICAgICovXG4gICAgc3RhdGljIHN0b3JhZ2VEYXRhKGtleTogc3RyaW5nLCBkYXRhOiBhbnkpIHtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgZGF0YSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0+U2V0LS1cIiArIGtleSArIFwiOlwiICsgZGF0YSk7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmi7/liLDmlbDmja5cbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICogQG1lbWJlcm9mIFN0b3JhZ2VVdGlsXG4gICAgICovXG4gICAgc3RhdGljIGdldERhdGEoa2V5OiBzdHJpbmcsIGRlZnVhbHRWYWx1ZTogYW55ID0gbnVsbCk6IGFueSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICBpZiAodmFsdWUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tPkdldC0tXCIgKyBrZXkgKyBcIjpcIiArIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0+R2V0LS1cIiArIGtleSArIFwiOiBOVUxMXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGRlZnVhbHRWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOenu+mZpOaVsOaNrlxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAgKiBAbWVtYmVyb2YgU3RvcmFnZVV0aWxcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVtb3ZlRGF0YShrZXk6IHN0cmluZykge1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOaYr+WQpuWtmOWcqOafkOS4gOS4qmRhdGFcbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICogQHJldHVybiB7Kn0gIHtib29sZWFufVxuICAgICAqIEBtZW1iZXJvZiBTdG9yYWdlVXRpbFxuICAgICAqL1xuICAgIHN0YXRpYyBoYXNEYXRhKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4iXX0=