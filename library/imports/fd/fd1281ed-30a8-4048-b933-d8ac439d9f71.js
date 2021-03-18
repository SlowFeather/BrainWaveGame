"use strict";
cc._RF.push(module, 'fd128HtMKhASLkz2KxDnZ9x', 'MessageDef');
// scripts/Def/MessageDef.ts

"use strict";
// export default class MessageDef {
Object.defineProperty(exports, "__esModule", { value: true });
//     /**
//      * 测试消息
//      *
//      * @static
//      * @type {string}
//      * @memberof MessageDef
//      */
//     public static M_FirstMessage:string="M_FirstMessage";
// }
var MessageDef;
(function (MessageDef) {
    MessageDef["FirstMessage"] = "FirstMessage";
    /**
     * 脑电游戏开始
     */
    MessageDef["BrainGameStart"] = "BrainGameStart";
    /**
     * 脑电游戏结束
     */
    MessageDef["BrainGameEnd"] = "BrainGameEnd";
    /**
     * 某个星座播放完毕
     * number
     */
    MessageDef["ConstellationAnimationEnd"] = "ConstellationAnimationEnd";
    /**
     * 脑机断开
     */
    MessageDef["BrainBlockMessage"] = "BrainBlockMessage";
    /**
     * 脑机未连接
     */
    MessageDef["BrainNotConnectMessage"] = "BrainNotConnectMessage";
    /**
     * 脑机连接
     */
    MessageDef["BrainConnectMessage"] = "BrainConnectMessage";
    /**
     * 脑机值发生变化
     * BrainModule
     */
    MessageDef["BrainValueChangeMessage"] = "BrainValueChangeMessage";
})(MessageDef = exports.MessageDef || (exports.MessageDef = {}));

cc._RF.pop();