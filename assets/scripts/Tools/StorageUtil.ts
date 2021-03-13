const { ccclass, property } = cc._decorator;


/**
 * 存储名称
 *
 * @export
 * @enum {number}
 */
export enum StorageName {
    testName = "testName",
}

/**
* StorageUtil
* @ author: SlowFeather
* @ wechat: BackedByTheWT
* @ data: 2020-07-18 14:52
*/
@ccclass
export default class StorageUtil {

    /**
     * 存储数据
     *
     * @static
     * @param {string} key
     * @param {*} data
     * @memberof StorageUtil
     */
    static storageData(key: string, data: any) {
        cc.sys.localStorage.setItem(key, data);
        console.log("-->Set--" + key + ":" + data);

    }

    /**
     * 拿到数据
     *
     * @static
     * @param {string} key
     * @returns {*}
     * @memberof StorageUtil
     */
    static getData(key: string, defualtValue: any = null): any {
        var value = cc.sys.localStorage.getItem(key);
        if (value != undefined) {
            console.log("-->Get--" + key + ":" + value);
            return value;
        } else {
            console.log("-->Get--" + key + ": NULL");
            return defualtValue;
        }
    }

    /**
     * 移除数据
     *
     * @static
     * @param {string} key
     * @memberof StorageUtil
     */
    static removeData(key: string) {
        cc.sys.localStorage.removeItem(key);
    }


    /**
     * 是否存在某一个data
     *
     * @static
     * @param {string} key
     * @return {*}  {boolean}
     * @memberof StorageUtil
     */
    static hasData(key: string): boolean {
        if (cc.sys.localStorage.getItem(key) == undefined) {
            return false;
        } else {
            return true;
        }
    }
}

