
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
    /**
     * Test 让脑机获取数据
     */
    MessageDef["BrainGetValueMessage"] = "BrainGetValueMessage";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRGVmXFxNZXNzYWdlRGVmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxvQ0FBb0M7O0FBRXBDLFVBQVU7QUFDVixjQUFjO0FBQ2QsU0FBUztBQUNULGlCQUFpQjtBQUNqQix3QkFBd0I7QUFDeEIsOEJBQThCO0FBQzlCLFVBQVU7QUFDViw0REFBNEQ7QUFHNUQsSUFBSTtBQUNKLElBQVksVUE4Q1g7QUE5Q0QsV0FBWSxVQUFVO0lBQ2xCLDJDQUE2QixDQUFBO0lBRzdCOztPQUVHO0lBQ0gsK0NBQStCLENBQUE7SUFDL0I7O09BRUc7SUFDSCwyQ0FBMkIsQ0FBQTtJQUUzQjs7O09BR0c7SUFDSCxxRUFBcUQsQ0FBQTtJQUVyRDs7T0FFRztJQUNILHFEQUFxQyxDQUFBO0lBRXJDOztPQUVHO0lBQ0gsK0RBQStDLENBQUE7SUFFL0M7O09BRUc7SUFDSCx5REFBeUMsQ0FBQTtJQUV6Qzs7O09BR0c7SUFDSCxpRUFBaUQsQ0FBQTtJQUdqRDs7T0FFRztJQUNILDJEQUEyQyxDQUFBO0FBRS9DLENBQUMsRUE5Q1csVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUE4Q3JCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBleHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlRGVmIHtcblxuLy8gICAgIC8qKlxuLy8gICAgICAqIOa1i+ivlea2iOaBr1xuLy8gICAgICAqXG4vLyAgICAgICogQHN0YXRpY1xuLy8gICAgICAqIEB0eXBlIHtzdHJpbmd9XG4vLyAgICAgICogQG1lbWJlcm9mIE1lc3NhZ2VEZWZcbi8vICAgICAgKi9cbi8vICAgICBwdWJsaWMgc3RhdGljIE1fRmlyc3RNZXNzYWdlOnN0cmluZz1cIk1fRmlyc3RNZXNzYWdlXCI7XG5cbiAgICBcbi8vIH1cbmV4cG9ydCBlbnVtIE1lc3NhZ2VEZWYge1xuICAgIEZpcnN0TWVzc2FnZSA9IFwiRmlyc3RNZXNzYWdlXCIsXG5cblxuICAgIC8qKlxuICAgICAqIOiEkeeUtea4uOaIj+W8gOWni1xuICAgICAqL1xuICAgIEJyYWluR2FtZVN0YXJ0PVwiQnJhaW5HYW1lU3RhcnRcIixcbiAgICAvKipcbiAgICAgKiDohJHnlLXmuLjmiI/nu5PmnZ9cbiAgICAgKi9cbiAgICBCcmFpbkdhbWVFbmQ9XCJCcmFpbkdhbWVFbmRcIixcblxuICAgIC8qKlxuICAgICAqIOafkOS4quaYn+W6p+aSreaUvuWujOavlVxuICAgICAqIG51bWJlclxuICAgICAqL1xuICAgIENvbnN0ZWxsYXRpb25BbmltYXRpb25FbmQ9XCJDb25zdGVsbGF0aW9uQW5pbWF0aW9uRW5kXCIsXG5cbiAgICAvKipcbiAgICAgKiDohJHmnLrmlq3lvIBcbiAgICAgKi9cbiAgICBCcmFpbkJsb2NrTWVzc2FnZT1cIkJyYWluQmxvY2tNZXNzYWdlXCIsXG5cbiAgICAvKipcbiAgICAgKiDohJHmnLrmnKrov57mjqVcbiAgICAgKi9cbiAgICBCcmFpbk5vdENvbm5lY3RNZXNzYWdlPVwiQnJhaW5Ob3RDb25uZWN0TWVzc2FnZVwiLFxuICAgIFxuICAgIC8qKlxuICAgICAqIOiEkeacuui/nuaOpVxuICAgICAqL1xuICAgIEJyYWluQ29ubmVjdE1lc3NhZ2U9XCJCcmFpbkNvbm5lY3RNZXNzYWdlXCIsXG5cbiAgICAvKipcbiAgICAgKiDohJHmnLrlgLzlj5HnlJ/lj5jljJZcbiAgICAgKiBCcmFpbk1vZHVsZVxuICAgICAqL1xuICAgIEJyYWluVmFsdWVDaGFuZ2VNZXNzYWdlPVwiQnJhaW5WYWx1ZUNoYW5nZU1lc3NhZ2VcIixcblxuXG4gICAgLyoqXG4gICAgICogVGVzdCDorqnohJHmnLrojrflj5bmlbDmja5cbiAgICAgKi9cbiAgICBCcmFpbkdldFZhbHVlTWVzc2FnZT1cIkJyYWluR2V0VmFsdWVNZXNzYWdlXCJcblxufSJdfQ==