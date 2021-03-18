"use strict";
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