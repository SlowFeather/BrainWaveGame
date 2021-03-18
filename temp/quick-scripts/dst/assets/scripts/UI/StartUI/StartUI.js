
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UI/StartUI/StartUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9a8e9pPwn1H3YwTMdRD22za', 'StartUI');
// scripts/UI/StartUI/StartUI.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var UIDef_1 = require("../../Def/UIDef");
var SoundManager_1 = require("../../Manager/SoundManager");
var UserManager_1 = require("../../Manager/UserManager/UserManager");
var UIUtil_1 = require("../../Tools/UIUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StartUI = /** @class */ (function (_super) {
    __extends(StartUI, _super);
    function StartUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @property(cc.Button)
    // startBtn: cc.Button = null;
    StartUI.prototype.start = function () {
        SoundManager_1.default.playMusic(1);
        //cc.Node node=cc.instantiate( ResUtil.ResDictionary["StartUI"]);
        // ResUtil.ResDictionary["StartUI"];
        //初始化场景
        // UILoader.Instance.loadPrefabInScene("prefabs/game/Background",(obj:cc.Node)=>{
        //     console.log(obj.name);
        //     obj.setParent(Game.Instance.GameScene);
        // });
        // 加载 Prefab
        // cc.loader.loadRes("prefabs/game/Background", function (err, prefab) {
        //     this.CreateBackground(prefab);
        // }.bind(this));
    };
    // CreateBackground(prefab){
    //     console.log("生成地板");
    //     // var newNode = cc.instantiate(prefab);
    //     //cc.director.getScene().addChild(newNode);
    //     // newNode.setParent(Game.Instance.GameScene);
    // }
    StartUI.prototype.OnStartBtnClick = function () {
        console.log("--> 点击了开始按钮");
        SoundManager_1.default.playEffect(2);
        //重置用户星座数量
        UserManager_1.default.Instance.CurrentConstellationNumber = 0;
        UIUtil_1.default.ShowUI(UIDef_1.UIDef.DescribeUI, function () {
            UIUtil_1.default.HideUI(UIDef_1.UIDef.StartUI);
        });
    };
    StartUI.prototype.onDestroy = function () {
    };
    StartUI = __decorate([
        ccclass
    ], StartUI);
    return StartUI;
}(cc.Component));
exports.default = StartUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlcXFN0YXJ0VUlcXFN0YXJ0VUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EseUNBQXdDO0FBR3hDLDJEQUFzRDtBQUN0RCxxRUFBZ0U7QUFLaEUsNkNBQXdDO0FBRWxDLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBcUMsMkJBQVk7SUFBakQ7O0lBd0RBLENBQUM7SUF0REcsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUU5Qix1QkFBSyxHQUFMO1FBRUksc0JBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFHMUIsaUVBQWlFO1FBRWpFLG9DQUFvQztRQUNwQyxPQUFPO1FBQ1AsaUZBQWlGO1FBRWpGLDZCQUE2QjtRQUM3Qiw4Q0FBOEM7UUFDOUMsTUFBTTtRQUdOLFlBQVk7UUFDWix3RUFBd0U7UUFDeEUscUNBQXFDO1FBRXJDLGlCQUFpQjtJQUlyQixDQUFDO0lBRUQsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUUzQiwrQ0FBK0M7SUFDL0Msa0RBQWtEO0lBQ2xELHFEQUFxRDtJQUNyRCxJQUFJO0lBRUosaUNBQWUsR0FBZjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDM0Isc0JBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFM0IsVUFBVTtRQUNWLHFCQUFXLENBQUMsUUFBUSxDQUFDLDBCQUEwQixHQUFDLENBQUMsQ0FBQztRQUVsRCxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFLLENBQUMsVUFBVSxFQUFDO1lBQzNCLGdCQUFNLENBQUMsTUFBTSxDQUFDLGFBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFHRCwyQkFBUyxHQUFUO0lBRUEsQ0FBQztJQXREZ0IsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQXdEM0I7SUFBRCxjQUFDO0NBeERELEFBd0RDLENBeERvQyxFQUFFLENBQUMsU0FBUyxHQXdEaEQ7a0JBeERvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZURlZiB9IGZyb20gXCIuLi8uLi9EZWYvTWVzc2FnZURlZlwiO1xuaW1wb3J0IHsgVUlEZWYgfSBmcm9tIFwiLi4vLi4vRGVmL1VJRGVmXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vLi4vR2FtZVwiO1xuaW1wb3J0IE1lc3NhZ2VEaXNwYXRjaGVyIGZyb20gXCIuLi8uLi9NYW5hZ2VyL01lc3NhZ2VEaXNwYXRjaGVyL01lc3NhZ2VEaXNwYXRjaGVyXCI7XG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gXCIuLi8uLi9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xuaW1wb3J0IFVzZXJNYW5hZ2VyIGZyb20gXCIuLi8uLi9NYW5hZ2VyL1VzZXJNYW5hZ2VyL1VzZXJNYW5hZ2VyXCI7XG5pbXBvcnQgTWF0aFV0aWwgZnJvbSBcIi4uLy4uL1Rvb2xzL01hdGhVdGlsXCI7XG5pbXBvcnQgUmVzVXRpbCBmcm9tIFwiLi4vLi4vVG9vbHMvUmVzVXRpbFwiO1xuaW1wb3J0IHsgVGltZUZvcm1hdFR5cGUsIFRpbWVVdGlsIH0gZnJvbSBcIi4uLy4uL1Rvb2xzL1RpbWVVdGlsXCI7XG5pbXBvcnQgVUlMb2FkZXIgZnJvbSBcIi4uLy4uL1Rvb2xzL1VJTG9hZGVyXCI7XG5pbXBvcnQgVUlVdGlsIGZyb20gXCIuLi8uLi9Ub29scy9VSVV0aWxcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydFVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIC8vIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgLy8gc3RhcnRCdG46IGNjLkJ1dHRvbiA9IG51bGw7XG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlNdXNpYygxKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvL2NjLk5vZGUgbm9kZT1jYy5pbnN0YW50aWF0ZSggUmVzVXRpbC5SZXNEaWN0aW9uYXJ5W1wiU3RhcnRVSVwiXSk7XG4gICAgICAgIFxuICAgICAgICAvLyBSZXNVdGlsLlJlc0RpY3Rpb25hcnlbXCJTdGFydFVJXCJdO1xuICAgICAgICAvL+WIneWni+WMluWcuuaZr1xuICAgICAgICAvLyBVSUxvYWRlci5JbnN0YW5jZS5sb2FkUHJlZmFiSW5TY2VuZShcInByZWZhYnMvZ2FtZS9CYWNrZ3JvdW5kXCIsKG9iajpjYy5Ob2RlKT0+e1xuICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhvYmoubmFtZSk7XG4gICAgICAgIC8vICAgICBvYmouc2V0UGFyZW50KEdhbWUuSW5zdGFuY2UuR2FtZVNjZW5lKTtcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgXG4gICAgICAgIC8vIOWKoOi9vSBQcmVmYWJcbiAgICAgICAgLy8gY2MubG9hZGVyLmxvYWRSZXMoXCJwcmVmYWJzL2dhbWUvQmFja2dyb3VuZFwiLCBmdW5jdGlvbiAoZXJyLCBwcmVmYWIpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuQ3JlYXRlQmFja2dyb3VuZChwcmVmYWIpO1xuICAgICAgICAgICAgXG4gICAgICAgIC8vIH0uYmluZCh0aGlzKSk7XG5cblxuXG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlQmFja2dyb3VuZChwcmVmYWIpe1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIueUn+aIkOWcsOadv1wiKTtcbiAgICAgICAgXG4gICAgLy8gICAgIC8vIHZhciBuZXdOb2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAvLyAgICAgLy9jYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmFkZENoaWxkKG5ld05vZGUpO1xuICAgIC8vICAgICAvLyBuZXdOb2RlLnNldFBhcmVudChHYW1lLkluc3RhbmNlLkdhbWVTY2VuZSk7XG4gICAgLy8gfVxuXG4gICAgT25TdGFydEJ0bkNsaWNrKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiLS0+IOeCueWHu+S6huW8gOWni+aMiemSrlwiKTtcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoMik7XG5cbiAgICAgICAgLy/ph43nva7nlKjmiLfmmJ/luqfmlbDph49cbiAgICAgICAgVXNlck1hbmFnZXIuSW5zdGFuY2UuQ3VycmVudENvbnN0ZWxsYXRpb25OdW1iZXI9MDtcblxuICAgICAgICBVSVV0aWwuU2hvd1VJKFVJRGVmLkRlc2NyaWJlVUksKCk9PntcbiAgICAgICAgICAgIFVJVXRpbC5IaWRlVUkoVUlEZWYuU3RhcnRVSSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIFxuICAgIG9uRGVzdHJveSgpe1xuICAgICAgICBcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==