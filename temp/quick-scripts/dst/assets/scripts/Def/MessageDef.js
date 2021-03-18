
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Def/MessageDef.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRGVmXFxNZXNzYWdlRGVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxvQ0FBb0M7O0FBRXBDLFVBQVU7QUFDVixjQUFjO0FBQ2QsU0FBUztBQUNULGlCQUFpQjtBQUNqQix3QkFBd0I7QUFDeEIsOEJBQThCO0FBQzlCLFVBQVU7QUFDViw0REFBNEQ7QUFHNUQsSUFBSTtBQUNKLElBQVksVUF3Q1g7QUF4Q0QsV0FBWSxVQUFVO0lBQ2xCLDJDQUE2QixDQUFBO0lBRzdCOztPQUVHO0lBQ0gsK0NBQStCLENBQUE7SUFDL0I7O09BRUc7SUFDSCwyQ0FBMkIsQ0FBQTtJQUUzQjs7O09BR0c7SUFDSCxxRUFBcUQsQ0FBQTtJQUVyRDs7T0FFRztJQUNILHFEQUFxQyxDQUFBO0lBRXJDOztPQUVHO0lBQ0gsK0RBQStDLENBQUE7SUFFL0M7O09BRUc7SUFDSCx5REFBeUMsQ0FBQTtJQUV6Qzs7O09BR0c7SUFDSCxpRUFBaUQsQ0FBQTtBQUVyRCxDQUFDLEVBeENXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBd0NyQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVzc2FnZURlZiB7XG5cbi8vICAgICAvKipcbi8vICAgICAgKiDmtYvor5Xmtojmga9cbi8vICAgICAgKlxuLy8gICAgICAqIEBzdGF0aWNcbi8vICAgICAgKiBAdHlwZSB7c3RyaW5nfVxuLy8gICAgICAqIEBtZW1iZXJvZiBNZXNzYWdlRGVmXG4vLyAgICAgICovXG4vLyAgICAgcHVibGljIHN0YXRpYyBNX0ZpcnN0TWVzc2FnZTpzdHJpbmc9XCJNX0ZpcnN0TWVzc2FnZVwiO1xuXG4gICAgXG4vLyB9XG5leHBvcnQgZW51bSBNZXNzYWdlRGVmIHtcbiAgICBGaXJzdE1lc3NhZ2UgPSBcIkZpcnN0TWVzc2FnZVwiLFxuXG5cbiAgICAvKipcbiAgICAgKiDohJHnlLXmuLjmiI/lvIDlp4tcbiAgICAgKi9cbiAgICBCcmFpbkdhbWVTdGFydD1cIkJyYWluR2FtZVN0YXJ0XCIsXG4gICAgLyoqXG4gICAgICog6ISR55S15ri45oiP57uT5p2fXG4gICAgICovXG4gICAgQnJhaW5HYW1lRW5kPVwiQnJhaW5HYW1lRW5kXCIsXG5cbiAgICAvKipcbiAgICAgKiDmn5DkuKrmmJ/luqfmkq3mlL7lrozmr5VcbiAgICAgKiBudW1iZXJcbiAgICAgKi9cbiAgICBDb25zdGVsbGF0aW9uQW5pbWF0aW9uRW5kPVwiQ29uc3RlbGxhdGlvbkFuaW1hdGlvbkVuZFwiLFxuXG4gICAgLyoqXG4gICAgICog6ISR5py65pat5byAXG4gICAgICovXG4gICAgQnJhaW5CbG9ja01lc3NhZ2U9XCJCcmFpbkJsb2NrTWVzc2FnZVwiLFxuXG4gICAgLyoqXG4gICAgICog6ISR5py65pyq6L+e5o6lXG4gICAgICovXG4gICAgQnJhaW5Ob3RDb25uZWN0TWVzc2FnZT1cIkJyYWluTm90Q29ubmVjdE1lc3NhZ2VcIixcbiAgICBcbiAgICAvKipcbiAgICAgKiDohJHmnLrov57mjqVcbiAgICAgKi9cbiAgICBCcmFpbkNvbm5lY3RNZXNzYWdlPVwiQnJhaW5Db25uZWN0TWVzc2FnZVwiLFxuXG4gICAgLyoqXG4gICAgICog6ISR5py65YC85Y+R55Sf5Y+Y5YyWXG4gICAgICogQnJhaW5Nb2R1bGVcbiAgICAgKi9cbiAgICBCcmFpblZhbHVlQ2hhbmdlTWVzc2FnZT1cIkJyYWluVmFsdWVDaGFuZ2VNZXNzYWdlXCIsXG5cbn0iXX0=