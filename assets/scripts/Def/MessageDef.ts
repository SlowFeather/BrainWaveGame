
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
     * 某个星座播放完毕
     * number
     */
    ConstellationAnimationEnd="ConstellationAnimationEnd",

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
     * BrainModule
     */
    BrainValueChangeMessage="BrainValueChangeMessage",


    /**
     * Test 让脑机获取数据
     */
    BrainGetValueMessage="BrainGetValueMessage"

}