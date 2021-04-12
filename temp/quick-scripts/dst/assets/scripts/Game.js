
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
var UIDef_1 = require("./Def/UIDef");
var LoggerUtil_1 = require("./Tools/LoggerUtil");
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
        // StorageUtil.storageData(StorageDef.StarLight,3);
        // StorageUtil.storageData(StorageDef.Token,"Hello");
        // console.log(StorageUtil.getData("bool",false));
        // StorageUtil.removeData("bool");
        LoggerUtil_1.default.debug("Hello");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxxQ0FBb0M7QUFLcEMsaURBQXdDO0FBSXhDLHlDQUFvQztBQUU5QixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQWtDLHdCQUFZO0lBSTFDO2VBQWdCLGlCQUFPO0lBQUUsQ0FBQzthQUpULElBQUk7SUFLckIscUJBQU0sR0FBTjtRQUNJLE1BQUksQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUVuRCxDQUFDO0lBc0JELG9CQUFLLEdBQUw7UUFDSSwrQ0FBK0M7UUFFL0MsbURBQW1EO1FBQ25ELHFEQUFxRDtRQUVyRCxrREFBa0Q7UUFDbEQsa0NBQWtDO1FBRWxDLG9CQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RCLGdCQUFNLENBQUMsVUFBVSxDQUFDLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVuQyx5RUFBeUU7UUFDekUsK0JBQStCO1FBQy9CLE1BQU07UUFFTixxR0FBcUc7UUFDckcsbURBQW1EO1FBQ25ELDZCQUE2QjtRQUM3Qiw2Q0FBNkM7UUFDN0MseUZBQXlGO1FBQ3pGLDBCQUEwQjtRQUMxQiw2QkFBNkI7UUFDN0IsS0FBSztJQUVULENBQUM7O0lBekRnQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBNkR4QjtJQUFELFdBQUM7Q0E3REQsQUE2REMsQ0E3RGlDLEVBQUUsQ0FBQyxTQUFTLEdBNkQ3QztrQkE3RG9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yYWdlRGVmIH0gZnJvbSBcIi4vRGVmL1N0b3JhZ2VEZWZcIjtcbmltcG9ydCB7IFVJRGVmIH0gZnJvbSBcIi4vRGVmL1VJRGVmXCI7XG5pbXBvcnQgRHJpdmVNYW5hZ2VyIGZyb20gXCIuL01hbmFnZXIvRHJpdmVNYW5hZ2VyL0RyaXZlTWFuYWdlclwiO1xuaW1wb3J0IE1lc3NhZ2VEaXNwYXRjaGVyIGZyb20gXCIuL01hbmFnZXIvTWVzc2FnZURpc3BhdGNoZXIvTWVzc2FnZURpc3BhdGNoZXJcIjtcbi8vIGltcG9ydCB7IFByZUxvYWRDc3ZTeW5jLCBUYWJsZVJlYWRlciB9IGZyb20gXCIuL1Rvb2xzL1RhYmxlUmVhZGVyXCI7XG5pbXBvcnQgeyBIdHRwVXRpbCB9IGZyb20gXCIuL1Rvb2xzL0hUVFBVdGlsXCI7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuL1Rvb2xzL0xvZ2dlclV0aWxcIjtcbmltcG9ydCBTdG9yYWdlVXRpbCBmcm9tIFwiLi9Ub29scy9TdG9yYWdlVXRpbFwiO1xuaW1wb3J0IFRyYW5zZm9ybVV0aWwgZnJvbSBcIi4vVG9vbHMvVHJhbnNmb3JtVXRpbFwiO1xuaW1wb3J0IFVJTG9hZGVyIGZyb20gXCIuL1Rvb2xzL1VJTG9hZGVyXCI7XG5pbXBvcnQgVUlVdGlsIGZyb20gXCIuL1Rvb2xzL1VJVXRpbFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy8jcmVnaW9uIOWNleS+i1xuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U6IEdhbWU7XG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cbiAgICBvbkxvYWQoKTp2b2lke1xuICAgICAgICBHYW1lLkluc3RhbmNlPXRoaXM7XG4gICAgICAgIHRoaXMuR2FtZVNjZW5lPXRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlNjZW5lXCIpO1xuICAgICAgICB0aGlzLlVJUm9vdD10aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIik7XG5cbiAgICB9XG4gICAgLy8jZW5kcmVnaW9uXG5cbiAgICAvKipcbiAgICAgKiDmuLjmiI/lnLrmma/niLbniankvZNcbiAgICAgKlxuICAgICAqIEB0eXBlIHtjYy5Ob2RlfVxuICAgICAqIEBtZW1iZXJvZiBHYW1lXG4gICAgICovXG4gICAgcHVibGljIEdhbWVTY2VuZTpjYy5Ob2RlO1xuXG5cbiAgICAvKipcbiAgICAgKiBVSeeItueJqeS9k1xuICAgICAqXG4gICAgICogQHR5cGUge2NjLk5vZGV9XG4gICAgICogQG1lbWJlcm9mIEdhbWVcbiAgICAgKi9cbiAgICBwdWJsaWMgVUlSb290OmNjLk5vZGU7XG5cblxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBUcmFuc2Zvcm1VdGlsLkdldFdvcmxkUG9zdGF0aW9uMih0aGlzLm5vZGUpO1xuXG4gICAgICAgIC8vIFN0b3JhZ2VVdGlsLnN0b3JhZ2VEYXRhKFN0b3JhZ2VEZWYuU3RhckxpZ2h0LDMpO1xuICAgICAgICAvLyBTdG9yYWdlVXRpbC5zdG9yYWdlRGF0YShTdG9yYWdlRGVmLlRva2VuLFwiSGVsbG9cIik7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coU3RvcmFnZVV0aWwuZ2V0RGF0YShcImJvb2xcIixmYWxzZSkpO1xuICAgICAgICAvLyBTdG9yYWdlVXRpbC5yZW1vdmVEYXRhKFwiYm9vbFwiKTtcblxuICAgICAgICBMb2dnZXIuZGVidWcoXCJIZWxsb1wiKTtcbiAgICAgICAgVUlVdGlsLlNob3dCYXNlVUkoVUlEZWYuTG9hZGluZ1VJKTtcblxuICAgICAgICAvLyBIdHRwVXRpbC5HRVQoXCJodHRwOi8vMTI3LjAuMC4xOjgwODAvaGVsbG8ucGhwXCIse2lkOlwiMVwifSwoc3RhdGUsb2JqKT0+e1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coc3RhdGUrIG9iaik7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gVUlMb2FkZXIuSW5zdGFuY2UubG9hZFByZWZhYlJlcyhcImJhc2UvdWkvXCIgKyBcIkxvYWRpbmdVSVwiICsgXCIvXCIgKyBcIkxvYWRpbmdVSVwiICsgXCJcIiwgKGxvYWRlZHVpKSA9PiB7XG4gICAgICAgIC8vICAgICBsZXQgdWkgPSBjYy5pbnN0YW50aWF0ZShsb2FkZWR1aSkgYXMgY2MuTm9kZVxuICAgICAgICAvLyAgICAgdWkubmFtZSA9IFwiTG9hZGluZ1VJXCI7XG4gICAgICAgIC8vICAgICAvLyBsZXQgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xuICAgICAgICAvLyAgICAgbGV0IHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZShcIkdhbWVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIilcbiAgICAgICAgLy8gICAgIHVpLnNldFBhcmVudChzY2VuZSlcbiAgICAgICAgLy8gICAgIFVJVXRpbC51aUxpc3QuQWRkKHVpKTtcbiAgICAgICAgLy8gfSlcbiAgICAgICAgXG4gICAgfVxuXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19