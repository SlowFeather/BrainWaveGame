
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b7d2dUVG8RPGoAk0ov68rrP', 'Game');
// scripts/Game.ts

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
var StorageDef_1 = require("./Def/StorageDef");
var UIDef_1 = require("./Def/UIDef");
var StorageUtil_1 = require("./Tools/StorageUtil");
var UIUtil_1 = require("./Tools/UIUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        return _super.call(this) || this;
    }
    Game_1 = Game;
    Game.prototype.onLoad = function () {
        Game_1.Instance = this;
        this.GameScene = this.node.getChildByName("Scene");
        this.UIRoot = this.node.getChildByName("Canvas");
    };
    Game.prototype.start = function () {
        // TransformUtil.GetWorldPostation2(this.node);
        StorageUtil_1.default.storageData(StorageDef_1.StorageDef.StarLight, 3);
        // console.log(StorageUtil.getData("bool",false));
        // StorageUtil.removeData("bool");
        UIUtil_1.default.ShowBaseUI(UIDef_1.UIDef.LoadingUI);
        // HttpUtil.GET("http://127.0.0.1:8080/hello.php",{id:"1"},(state,obj)=>{
        //     console.log(state+ obj);
        // });
        // UILoader.Instance.loadPrefabRes("base/ui/" + "LoadingUI" + "/" + "LoadingUI" + "", (loadedui) => {
        //     let ui = cc.instantiate(loadedui) as cc.Node
        //     ui.name = "LoadingUI";
        //     // let scene = cc.director.getScene();
        //     let scene = cc.director.getScene().getChildByName("Game").getChildByName("Canvas")
        //     ui.setParent(scene)
        //     UIUtil.uiList.Add(ui);
        // })
    };
    var Game_1;
    Game = Game_1 = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBOEM7QUFDOUMscUNBQW9DO0FBS3BDLG1EQUE4QztBQUc5Qyx5Q0FBb0M7QUFFOUIsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUkxQztlQUFnQixpQkFBTztJQUFFLENBQUM7YUFKVCxJQUFJO0lBS3JCLHFCQUFNLEdBQU47UUFDSSxNQUFJLENBQUMsUUFBUSxHQUFDLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFbkQsQ0FBQztJQXNCRCxvQkFBSyxHQUFMO1FBQ0ksK0NBQStDO1FBRS9DLHFCQUFXLENBQUMsV0FBVyxDQUFDLHVCQUFVLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hELGtEQUFrRDtRQUNsRCxrQ0FBa0M7UUFHbEMsZ0JBQU0sQ0FBQyxVQUFVLENBQUMsYUFBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRW5DLHlFQUF5RTtRQUN6RSwrQkFBK0I7UUFDL0IsTUFBTTtRQUVOLHFHQUFxRztRQUNyRyxtREFBbUQ7UUFDbkQsNkJBQTZCO1FBQzdCLDZDQUE2QztRQUM3Qyx5RkFBeUY7UUFDekYsMEJBQTBCO1FBQzFCLDZCQUE2QjtRQUM3QixLQUFLO0lBRVQsQ0FBQzs7SUF2RGdCLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0EyRHhCO0lBQUQsV0FBQztDQTNERCxBQTJEQyxDQTNEaUMsRUFBRSxDQUFDLFNBQVMsR0EyRDdDO2tCQTNEb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JhZ2VEZWYgfSBmcm9tIFwiLi9EZWYvU3RvcmFnZURlZlwiO1xuaW1wb3J0IHsgVUlEZWYgfSBmcm9tIFwiLi9EZWYvVUlEZWZcIjtcbmltcG9ydCBEcml2ZU1hbmFnZXIgZnJvbSBcIi4vTWFuYWdlci9Ecml2ZU1hbmFnZXIvRHJpdmVNYW5hZ2VyXCI7XG5pbXBvcnQgTWVzc2FnZURpc3BhdGNoZXIgZnJvbSBcIi4vTWFuYWdlci9NZXNzYWdlRGlzcGF0Y2hlci9NZXNzYWdlRGlzcGF0Y2hlclwiO1xuLy8gaW1wb3J0IHsgUHJlTG9hZENzdlN5bmMsIFRhYmxlUmVhZGVyIH0gZnJvbSBcIi4vVG9vbHMvVGFibGVSZWFkZXJcIjtcbmltcG9ydCB7IEh0dHBVdGlsIH0gZnJvbSBcIi4vVG9vbHMvSFRUUFV0aWxcIjtcbmltcG9ydCBTdG9yYWdlVXRpbCBmcm9tIFwiLi9Ub29scy9TdG9yYWdlVXRpbFwiO1xuaW1wb3J0IFRyYW5zZm9ybVV0aWwgZnJvbSBcIi4vVG9vbHMvVHJhbnNmb3JtVXRpbFwiO1xuaW1wb3J0IFVJTG9hZGVyIGZyb20gXCIuL1Rvb2xzL1VJTG9hZGVyXCI7XG5pbXBvcnQgVUlVdGlsIGZyb20gXCIuL1Rvb2xzL1VJVXRpbFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy8jcmVnaW9uIOWNleS+i1xuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U6IEdhbWU7XG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cbiAgICBvbkxvYWQoKTp2b2lke1xuICAgICAgICBHYW1lLkluc3RhbmNlPXRoaXM7XG4gICAgICAgIHRoaXMuR2FtZVNjZW5lPXRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlNjZW5lXCIpO1xuICAgICAgICB0aGlzLlVJUm9vdD10aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIik7XG5cbiAgICB9XG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvKipcbiAgICAgKiDmuLjmiI/lnLrmma/niLbniankvZNcbiAgICAgKlxuICAgICAqIEB0eXBlIHtjYy5Ob2RlfVxuICAgICAqIEBtZW1iZXJvZiBHYW1lXG4gICAgICovXG4gICAgcHVibGljIEdhbWVTY2VuZTpjYy5Ob2RlO1xuXG5cbiAgICAvKipcbiAgICAgKiBVSeeItueJqeS9k1xuICAgICAqXG4gICAgICogQHR5cGUge2NjLk5vZGV9XG4gICAgICogQG1lbWJlcm9mIEdhbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgVUlSb290OmNjLk5vZGU7XG5cblxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBUcmFuc2Zvcm1VdGlsLkdldFdvcmxkUG9zdGF0aW9uMih0aGlzLm5vZGUpO1xuXG4gICAgICAgIFN0b3JhZ2VVdGlsLnN0b3JhZ2VEYXRhKFN0b3JhZ2VEZWYuU3RhckxpZ2h0LDMpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhTdG9yYWdlVXRpbC5nZXREYXRhKFwiYm9vbFwiLGZhbHNlKSk7XG4gICAgICAgIC8vIFN0b3JhZ2VVdGlsLnJlbW92ZURhdGEoXCJib29sXCIpO1xuXG5cbiAgICAgICAgVUlVdGlsLlNob3dCYXNlVUkoVUlEZWYuTG9hZGluZ1VJKTtcblxuICAgICAgICAvLyBIdHRwVXRpbC5HRVQoXCJodHRwOi8vMTI3LjAuMC4xOjgwODAvaGVsbG8ucGhwXCIse2lkOlwiMVwifSwoc3RhdGUsb2JqKT0+e1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coc3RhdGUrIG9iaik7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gVUlMb2FkZXIuSW5zdGFuY2UubG9hZFByZWZhYlJlcyhcImJhc2UvdWkvXCIgKyBcIkxvYWRpbmdVSVwiICsgXCIvXCIgKyBcIkxvYWRpbmdVSVwiICsgXCJcIiwgKGxvYWRlZHVpKSA9PiB7XG4gICAgICAgIC8vICAgICBsZXQgdWkgPSBjYy5pbnN0YW50aWF0ZShsb2FkZWR1aSkgYXMgY2MuTm9kZVxuICAgICAgICAvLyAgICAgdWkubmFtZSA9IFwiTG9hZGluZ1VJXCI7XG4gICAgICAgIC8vICAgICAvLyBsZXQgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xuICAgICAgICAvLyAgICAgbGV0IHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZShcIkdhbWVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIilcbiAgICAgICAgLy8gICAgIHVpLnNldFBhcmVudChzY2VuZSlcbiAgICAgICAgLy8gICAgIFVJVXRpbC51aUxpc3QuQWRkKHVpKTtcbiAgICAgICAgLy8gfSlcbiAgICAgICAgXG4gICAgfVxuXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19