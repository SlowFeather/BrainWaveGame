"use strict";
cc._RF.push(module, '2f93ceb3iBB1LfqQu3U26AR', 'MessageDispatcher');
// scripts/Manager/MessageDispatcher/MessageDispatcher.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
* MessageDispatcher
* @ author: SlowFeather 参考 https://github.com/wyb10a10/cocos_creator_framework
* @ email: slowfeather@163.com
* @ data: 2020-09-08 16:04
*/
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
//#endregion
var MessageDispatcher = /** @class */ (function (_super) {
    __extends(MessageDispatcher, _super);
    function MessageDispatcher() {
        var _this = _super.call(this) || this;
        //#endregion
        /**
         * 消息列表
         *
         * @private
         * @type {{ [key: string]: CallBackTarget[] }}
         * @memberof MessageDispatcher
         */
        _this._eventListeners = {};
        return _this;
    }
    MessageDispatcher_1 = MessageDispatcher;
    MessageDispatcher.prototype.onLoad = function () {
        MessageDispatcher_1.Instance = this;
    };
    /**
     *
     * 添加全局监听
     * @param {string} name 消息名称
     * @param {(param?: any) => void} callBack 触发回调
     * @param {*} target this
     * @param {number} [weight=0] 0
     * @memberof LocalMessager
     */
    MessageDispatcher.prototype.AddEventListener = function (name, callBack, target, weight) {
        if (weight === void 0) { weight = 0; }
        //消息名不能为空
        if (!name) {
            cc.warn("eventName is empty" + name);
            return;
        }
        //事件不能为空
        if (null == callBack) {
            cc.log('addEventListener callBack is nil');
            return false;
        }
        var callTarget = { callBack: callBack, target: target };
        if (null == this._eventListeners[name]) {
            this._eventListeners[name] = [callTarget];
        }
        else {
            var index = this.getEventListenersIndex(name, callBack, target);
            if (-1 == index) {
                this._eventListeners[name].push(callTarget);
            }
        }
        return true;
    };
    /**
     * 发送全局消息
     *
     * @param {string} name 消息名称
     * @param {*} [param] 参数
     * @memberof LocalMessager
     */
    MessageDispatcher.prototype.Dispatch = function (name, param) {
        var e_1, _a, e_2, _b;
        //console.log(`==================== raiseEvent ${name} begin | ${JSON.stringify(param)}`);
        if (null != this._eventListeners[name]) {
            // 将所有回调提取出来，再调用，避免调用回调的时候操作了事件的删除
            var callbackList = [];
            try {
                for (var _c = __values(this._eventListeners[name]), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var iterator = _d.value;
                    callbackList.push({ callBack: iterator.callBack, target: iterator.target });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
            try {
                for (var callbackList_1 = __values(callbackList), callbackList_1_1 = callbackList_1.next(); !callbackList_1_1.done; callbackList_1_1 = callbackList_1.next()) {
                    var iterator = callbackList_1_1.value;
                    iterator.callBack.call(iterator.target, param, name);
                    //iterator.callBack.call(iterator.target, name, param);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (callbackList_1_1 && !callbackList_1_1.done && (_b = callbackList_1.return)) _b.call(callbackList_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        //console.log(`==================== raiseEvent ${name} end`);
    };
    /**
     * 移除全局消息
     *
     * @param {string} name 消息名称
     * @param {(param?: any) => void} callBack 消息回调
     * @param {*} target
     * @memberof LocalMessager
     */
    MessageDispatcher.prototype.RemoveEventListener = function (name, callBack, target) {
        if (null != this._eventListeners[name]) {
            var index = this.getEventListenersIndex(name, callBack, target);
            if (-1 != index) {
                this._eventListeners[name].splice(index, 1);
            }
        }
    };
    MessageDispatcher.prototype.SetEventListener = function (eventName, callBack, target) {
        if (!eventName) {
            cc.warn("eventName is empty" + eventName);
            return;
        }
        if (null == callBack) {
            cc.log('setEventListener callBack is nil');
            return false;
        }
        var callTarget = { callBack: callBack, target: target };
        this._eventListeners[eventName] = [callTarget];
        return true;
    };
    MessageDispatcher.prototype.getEventListenersIndex = function (eventName, callBack, target) {
        var index = -1;
        for (var i = 0; i < this._eventListeners[eventName].length; i++) {
            var iterator = this._eventListeners[eventName][i];
            if (iterator.callBack == callBack && (!target || iterator.target == target)) {
                index = i;
                break;
            }
        }
        return index;
    };
    MessageDispatcher.prototype.onDestroy = function () {
    };
    var MessageDispatcher_1;
    MessageDispatcher = MessageDispatcher_1 = __decorate([
        ccclass
    ], MessageDispatcher);
    return MessageDispatcher;
}(cc.Component));
exports.default = MessageDispatcher;

cc._RF.pop();