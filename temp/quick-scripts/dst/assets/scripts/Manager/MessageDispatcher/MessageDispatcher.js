
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Manager/MessageDispatcher/MessageDispatcher.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWFuYWdlclxcTWVzc2FnZURpc3BhdGNoZXJcXE1lc3NhZ2VEaXNwYXRjaGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7RUFLRTtBQUNJLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFRMUMsWUFBWTtBQUdaO0lBQStDLHFDQUFZO0lBSXZEO1FBQUEsWUFBZ0IsaUJBQU8sU0FBRztRQUk5QixZQUFZO1FBRVI7Ozs7OztXQU1HO1FBQ0sscUJBQWUsR0FBd0MsRUFBRSxDQUFDOztJQWJ6QyxDQUFDOzBCQUpULGlCQUFpQjtJQUtsQyxrQ0FBTSxHQUFOO1FBQ0ksbUJBQWlCLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQztJQUNwQyxDQUFDO0lBWUQ7Ozs7Ozs7O09BUUc7SUFDSCw0Q0FBZ0IsR0FBaEIsVUFBaUIsSUFBWSxFQUFFLFFBQStCLEVBQUUsTUFBVyxFQUFFLE1BQWtCO1FBQWxCLHVCQUFBLEVBQUEsVUFBa0I7UUFDM0YsU0FBUztRQUNULElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDUCxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ3JDLE9BQU87U0FDVjtRQUNELFFBQVE7UUFDUixJQUFJLElBQUksSUFBSSxRQUFRLEVBQUU7WUFDbEIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1lBQzNDLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsSUFBSSxVQUFVLEdBQW1CLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDeEUsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxH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QUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsRCxJQUFJLFFBQVEsQ0FBQyxRQUFRLElBQUksUUFBUSxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsRUFBRTtnQkFDekUsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFDVixNQUFNO2FBQ1Q7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRCxxQ0FBUyxHQUFUO0lBRUEsQ0FBQzs7SUExSGdCLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBMkhyQztJQUFELHdCQUFDO0NBM0hELEFBMkhDLENBM0g4QyxFQUFFLENBQUMsU0FBUyxHQTJIMUQ7a0JBM0hvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiogTWVzc2FnZURpc3BhdGNoZXJcbiogQCBhdXRob3I6IFNsb3dGZWF0aGVyIOWPguiAgyBodHRwczovL2dpdGh1Yi5jb20vd3liMTBhMTAvY29jb3NfY3JlYXRvcl9mcmFtZXdvcmtcbiogQCBlbWFpbDogc2xvd2ZlYXRoZXJAMTYzLmNvbVxuKiBAIGRhdGE6IDIwMjAtMDktMDggMTY6MDRcbiovXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuLy8jcmVnaW9uIE1lc3NhZ2VIZWxwZXJcbmV4cG9ydCB0eXBlIEV2ZW50TWFuYWdlckNhbGxGdW5jID0gKGV2ZW50TmFtZTogc3RyaW5nLCBldmVudERhdGE6IGFueSkgPT4gdm9pZDtcbmludGVyZmFjZSBDYWxsQmFja1RhcmdldCB7XG4gICAgY2FsbEJhY2s6IEV2ZW50TWFuYWdlckNhbGxGdW5jLFxuICAgIHRhcmdldDogYW55LFxufVxuLy8jZW5kcmVnaW9uXG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlRGlzcGF0Y2hlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbi8vI3JlZ2lvbiBcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlOiBNZXNzYWdlRGlzcGF0Y2hlcjtcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxuICAgIG9uTG9hZCgpOnZvaWR7XG4gICAgICAgIE1lc3NhZ2VEaXNwYXRjaGVyLkluc3RhbmNlPXRoaXM7XG4gICAgfVxuLy8jZW5kcmVnaW9uXG4gICAgXG4gICAgLyoqXG4gICAgICog5raI5oGv5YiX6KGoXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHt7IFtrZXk6IHN0cmluZ106IENhbGxCYWNrVGFyZ2V0W10gfX1cbiAgICAgKiBAbWVtYmVyb2YgTWVzc2FnZURpc3BhdGNoZXJcbiAgICAgKi9cbiAgICBwcml2YXRlIF9ldmVudExpc3RlbmVyczogeyBba2V5OiBzdHJpbmddOiBDYWxsQmFja1RhcmdldFtdIH0gPSB7fTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICog5re75Yqg5YWo5bGA55uR5ZCsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5raI5oGv5ZCN56ewXG4gICAgICogQHBhcmFtIHsocGFyYW0/OiBhbnkpID0+IHZvaWR9IGNhbGxCYWNrIOinpuWPkeWbnuiwg1xuICAgICAqIEBwYXJhbSB7Kn0gdGFyZ2V0IHRoaXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3dlaWdodD0wXSAwXG4gICAgICogQG1lbWJlcm9mIExvY2FsTWVzc2FnZXJcbiAgICAgKi9cbiAgICBBZGRFdmVudExpc3RlbmVyKG5hbWU6IHN0cmluZywgY2FsbEJhY2s6IChwYXJhbT86IGFueSkgPT4gdm9pZCwgdGFyZ2V0OiBhbnksIHdlaWdodDogbnVtYmVyID0gMCkge1xuICAgICAgICAvL+a2iOaBr+WQjeS4jeiDveS4uuepulxuICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJldmVudE5hbWUgaXMgZW1wdHlcIiArIG5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8v5LqL5Lu25LiN6IO95Li656m6XG4gICAgICAgIGlmIChudWxsID09IGNhbGxCYWNrKSB7XG4gICAgICAgICAgICBjYy5sb2coJ2FkZEV2ZW50TGlzdGVuZXIgY2FsbEJhY2sgaXMgbmlsJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNhbGxUYXJnZXQ6IENhbGxCYWNrVGFyZ2V0ID0geyBjYWxsQmFjazogY2FsbEJhY2ssIHRhcmdldDogdGFyZ2V0IH07XG4gICAgICAgIGlmIChudWxsID09IHRoaXMuX2V2ZW50TGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLl9ldmVudExpc3RlbmVyc1tuYW1lXSA9IFtjYWxsVGFyZ2V0XTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5nZXRFdmVudExpc3RlbmVyc0luZGV4KG5hbWUsIGNhbGxCYWNrLCB0YXJnZXQpO1xuICAgICAgICAgICAgaWYgKC0xID09IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnNbbmFtZV0ucHVzaChjYWxsVGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWPkemAgeWFqOWxgOa2iOaBr1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5raI5oGv5ZCN56ewXG4gICAgICogQHBhcmFtIHsqfSBbcGFyYW1dIOWPguaVsFxuICAgICAqIEBtZW1iZXJvZiBMb2NhbE1lc3NhZ2VyXG4gICAgICovXG4gICAgRGlzcGF0Y2gobmFtZTogc3RyaW5nLCBwYXJhbT86IGFueSkge1xuXG4gICAgICAgIC8vY29uc29sZS5sb2coYD09PT09PT09PT09PT09PT09PT09IHJhaXNlRXZlbnQgJHtuYW1lfSBiZWdpbiB8ICR7SlNPTi5zdHJpbmdpZnkocGFyYW0pfWApO1xuICAgICAgICBpZiAobnVsbCAhPSB0aGlzLl9ldmVudExpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgICAgLy8g5bCG5omA5pyJ5Zue6LCD5o+Q5Y+W5Ye65p2l77yM5YaN6LCD55So77yM6YG/5YWN6LCD55So5Zue6LCD55qE5pe25YCZ5pON5L2c5LqG5LqL5Lu255qE5Yig6ZmkXG4gICAgICAgICAgICBsZXQgY2FsbGJhY2tMaXN0OiBDYWxsQmFja1RhcmdldFtdID0gW107XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGl0ZXJhdG9yIG9mIHRoaXMuX2V2ZW50TGlzdGVuZXJzW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tMaXN0LnB1c2goeyBjYWxsQmFjazogaXRlcmF0b3IuY2FsbEJhY2ssIHRhcmdldDogaXRlcmF0b3IudGFyZ2V0IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBjYWxsYmFja0xpc3QpIHtcbiAgICAgICAgICAgICAgICBpdGVyYXRvci5jYWxsQmFjay5jYWxsKGl0ZXJhdG9yLnRhcmdldCwgcGFyYW0sIG5hbWUpO1xuICAgICAgICAgICAgICAgIC8vaXRlcmF0b3IuY2FsbEJhY2suY2FsbChpdGVyYXRvci50YXJnZXQsIG5hbWUsIHBhcmFtKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKGA9PT09PT09PT09PT09PT09PT09PSByYWlzZUV2ZW50ICR7bmFtZX0gZW5kYCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOenu+mZpOWFqOWxgOa2iOaBr1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUg5raI5oGv5ZCN56ewXG4gICAgICogQHBhcmFtIHsocGFyYW0/OiBhbnkpID0+IHZvaWR9IGNhbGxCYWNrIOa2iOaBr+Wbnuiwg1xuICAgICAqIEBwYXJhbSB7Kn0gdGFyZ2V0XG4gICAgICogQG1lbWJlcm9mIExvY2FsTWVzc2FnZXJcbiAgICAgKi9cbiAgICBSZW1vdmVFdmVudExpc3RlbmVyKG5hbWU6IHN0cmluZywgY2FsbEJhY2s6IChwYXJhbT86IGFueSkgPT4gdm9pZCwgdGFyZ2V0OiBhbnkpIHtcbiAgICAgICAgaWYgKG51bGwgIT0gdGhpcy5fZXZlbnRMaXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ2V0RXZlbnRMaXN0ZW5lcnNJbmRleChuYW1lLCBjYWxsQmFjaywgdGFyZ2V0KTtcbiAgICAgICAgICAgIGlmICgtMSAhPSBpbmRleCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzW25hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBTZXRFdmVudExpc3RlbmVyKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsQmFjazogRXZlbnRNYW5hZ2VyQ2FsbEZ1bmMsIHRhcmdldD86IGFueSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoIWV2ZW50TmFtZSkge1xuICAgICAgICAgICAgY2Mud2FybihcImV2ZW50TmFtZSBpcyBlbXB0eVwiICsgZXZlbnROYW1lKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChudWxsID09IGNhbGxCYWNrKSB7XG4gICAgICAgICAgICBjYy5sb2coJ3NldEV2ZW50TGlzdGVuZXIgY2FsbEJhY2sgaXMgbmlsJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNhbGxUYXJnZXQ6IENhbGxCYWNrVGFyZ2V0ID0geyBjYWxsQmFjazogY2FsbEJhY2ssIHRhcmdldDogdGFyZ2V0IH07XG4gICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzW2V2ZW50TmFtZV0gPSBbY2FsbFRhcmdldF07XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0RXZlbnRMaXN0ZW5lcnNJbmRleChldmVudE5hbWU6IHN0cmluZywgY2FsbEJhY2s6IEV2ZW50TWFuYWdlckNhbGxGdW5jLCB0YXJnZXQ/OiBhbnkpOiBudW1iZXIge1xuICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9ldmVudExpc3RlbmVyc1tldmVudE5hbWVdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgaXRlcmF0b3IgPSB0aGlzLl9ldmVudExpc3RlbmVyc1tldmVudE5hbWVdW2ldO1xuICAgICAgICAgICAgaWYgKGl0ZXJhdG9yLmNhbGxCYWNrID09IGNhbGxCYWNrICYmICghdGFyZ2V0IHx8IGl0ZXJhdG9yLnRhcmdldCA9PSB0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gICAgXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBcbiAgICB9XG59Il19