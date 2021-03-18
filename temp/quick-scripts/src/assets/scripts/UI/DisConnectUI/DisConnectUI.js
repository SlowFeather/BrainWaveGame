"use strict";
cc._RF.push(module, 'f0c23VZxO9HNI8NNV5CObnh', 'DisConnectUI');
// scripts/UI/DisConnectUI/DisConnectUI.ts

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
var DriveManager_1 = require("../../Manager/DriveManager/DriveManager");
var UIUtil_1 = require("../../Tools/UIUtil");
var GameUI_1 = require("../GameUI/GameUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DisConnectUI = /** @class */ (function (_super) {
    __extends(DisConnectUI, _super);
    function DisConnectUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //提示文字文件
        _this.describeLab = null;
        return _this;
        // update (dt) {}
    }
    DisConnectUI.prototype.onEnable = function () {
        console.log("-->进入断开连接页面");
        DriveManager_1.default.Instance.OnBrainConnectEvent = this.OnConnectHandler.bind(this);
    };
    DisConnectUI.prototype.onDisable = function () {
    };
    DisConnectUI.prototype.start = function () {
    };
    DisConnectUI.prototype.OnConnectHandler = function () {
        this.OnConnectBtnClick();
    };
    DisConnectUI.prototype.OnConnectBtnClick = function () {
        //UIUtil.HideUI(UIDef.DisConnectUI);
        var gameUI = UIUtil_1.default.GetUI(UIDef_1.UIDef.GameUI);
        gameUI.getComponent(GameUI_1.default).OnConnectBtnClick();
    };
    __decorate([
        property(cc.RichText)
    ], DisConnectUI.prototype, "describeLab", void 0);
    DisConnectUI = __decorate([
        ccclass
    ], DisConnectUI);
    return DisConnectUI;
}(cc.Component));
exports.default = DisConnectUI;

cc._RF.pop();