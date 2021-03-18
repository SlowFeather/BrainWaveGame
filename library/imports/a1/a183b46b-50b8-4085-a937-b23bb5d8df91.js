"use strict";
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