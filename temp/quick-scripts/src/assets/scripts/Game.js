"use strict";
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