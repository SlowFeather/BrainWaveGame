/**
* MessageDispatcher
* @ author: SlowFeather 参考 https://github.com/wyb10a10/cocos_creator_framework
* @ email: slowfeather@163.com
* @ data: 2020-09-08 16:04
*/
const {ccclass, property} = cc._decorator;

//#region MessageHelper
export type EventManagerCallFunc = (eventName: string, eventData: any) => void;
interface CallBackTarget {
    callBack: EventManagerCallFunc,
    target: any,
}
//#endregion

@ccclass
export default class MessageDispatcher extends cc.Component {

//#region 
    public static Instance: MessageDispatcher;
    constructor() { super(); }
    onLoad():void{
        MessageDispatcher.Instance=this;
    }
//#endregion
    
    /**
     * 消息列表
     *
     * @private
     * @type {{ [key: string]: CallBackTarget[] }}
     * @memberof MessageDispatcher
     */
    private _eventListeners: { [key: string]: CallBackTarget[] } = {};

    /**
     *
     * 添加全局监听
     * @param {string} name 消息名称
     * @param {(param?: any) => void} callBack 触发回调
     * @param {*} target this
     * @param {number} [weight=0] 0
     * @memberof LocalMessager
     */
    AddEventListener(name: string, callBack: (param?: any) => void, target: any, weight: number = 0) {
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
        let callTarget: CallBackTarget = { callBack: callBack, target: target };
        if (null == this._eventListeners[name]) {
            this._eventListeners[name] = [callTarget];

        } else {
            let index = this.getEventListenersIndex(name, callBack, target);
            if (-1 == index) {
                this._eventListeners[name].push(callTarget);
            }
        }

        return true;
    }

    /**
     * 发送全局消息
     *
     * @param {string} name 消息名称
     * @param {*} [param] 参数
     * @memberof LocalMessager
     */
    Dispatch(name: string, param?: any) {

        //console.log(`==================== raiseEvent ${name} begin | ${JSON.stringify(param)}`);
        if (null != this._eventListeners[name]) {
            // 将所有回调提取出来，再调用，避免调用回调的时候操作了事件的删除
            let callbackList: CallBackTarget[] = [];
            for (const iterator of this._eventListeners[name]) {
                callbackList.push({ callBack: iterator.callBack, target: iterator.target });
            }
            for (const iterator of callbackList) {
                iterator.callBack.call(iterator.target, param, name);
                //iterator.callBack.call(iterator.target, name, param);
                
            }
        }
        //console.log(`==================== raiseEvent ${name} end`);
    }
    /**
     * 移除全局消息
     *
     * @param {string} name 消息名称
     * @param {(param?: any) => void} callBack 消息回调
     * @param {*} target
     * @memberof LocalMessager
     */
    RemoveEventListener(name: string, callBack: (param?: any) => void, target: any) {
        if (null != this._eventListeners[name]) {
            let index = this.getEventListenersIndex(name, callBack, target);
            if (-1 != index) {
                this._eventListeners[name].splice(index, 1);
            }
        }
    }
    private SetEventListener(eventName: string, callBack: EventManagerCallFunc, target?: any): boolean {
        if (!eventName) {
            cc.warn("eventName is empty" + eventName);
            return;
        }

        if (null == callBack) {
            cc.log('setEventListener callBack is nil');
            return false;
        }
        let callTarget: CallBackTarget = { callBack: callBack, target: target };
        this._eventListeners[eventName] = [callTarget];
        return true;
    }

    private getEventListenersIndex(eventName: string, callBack: EventManagerCallFunc, target?: any): number {
        let index = -1;
        for (let i = 0; i < this._eventListeners[eventName].length; i++) {
            let iterator = this._eventListeners[eventName][i];
            if (iterator.callBack == callBack && (!target || iterator.target == target)) {
                index = i;
                break;
            }
        }
        return index;
    }
    
    onDestroy() {
        
    }
}