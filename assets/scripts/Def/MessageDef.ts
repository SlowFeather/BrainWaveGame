
// export default class MessageDef {

//     /**
//      * 测试消息
//      *
//      * @static
//      * @type {string}
//      * @memberof MessageDef
//      */
//     public static M_FirstMessage:string="M_FirstMessage";

    
// }
export enum MessageDef {
    FirstMessage = "FirstMessage",


    /**
     * 脑电游戏开始
     */
    BrainGameStart="BrainGameStart",
    /**
     * 脑电游戏结束
     */
     BrainGameEnd="BrainGameEnd",

    /**
     * 脑机断开
     */
    BrainBlockMessage="BrainBlockMessage",

    /**
     * 脑机未连接
     */
    BrainNotConnectMessage="BrainNotConnectMessage",
    
    /**
     * 脑机连接
     */
    BrainConnectMessage="BrainConnectMessage",

    /**
     * 脑机值发生变化
     */
    BrainValueChangeMessage="BrainValueChangeMessage",

}