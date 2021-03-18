"use strict";
cc._RF.push(module, '634b7J9kJlMi6kQ3oX8T5f7', 'ShowResultUI');
// scripts/UI/ShowResultUI/ShowResultUI.ts

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
var SoundManager_1 = require("../../Manager/SoundManager");
var UserManager_1 = require("../../Manager/UserManager/UserManager");
var UIUtil_1 = require("../../Tools/UIUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ShowResultUI = /** @class */ (function (_super) {
    __extends(ShowResultUI, _super);
    function ShowResultUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //所有的奖杯物体
        _this.allTrophy = [];
        return _this;
        // update (dt) {}
    }
    ShowResultUI.prototype.onLoad = function () {
        this.allTrophy.forEach(function (element) {
            element.active = false;
        });
    };
    ShowResultUI.prototype.onEnable = function () {
        console.log("-->进入结果页面");
        //再次确认关闭http
        DriveManager_1.default.Instance.StopPingDrive();
        // let score=StorageUtil.getData(StorageDef.StarLight,0);
        var score = UserManager_1.default.Instance.CurrentConstellationNumber;
        //判断当前得分，得几分就得几个奖杯
        for (var index = 0; index < this.allTrophy.length; index++) {
            var element = this.allTrophy[index];
            if (index < score) {
                element.active = true;
            }
        }
        this.jihuoLab.string = "激 活 星 座 数 量：" + score.toString() + " 个";
    };
    ShowResultUI.prototype.onDisable = function () {
        this.allTrophy.forEach(function (element) {
            element.active = false;
        });
    };
    ShowResultUI.prototype.start = function () {
    };
    ShowResultUI.prototype.OnShowResultBtnClick = function () {
        SoundManager_1.default.playEffect(2);
        // parent.closeIFrame();
    };
    ShowResultUI.prototype.OnReStartBtnClick = function () {
        SoundManager_1.default.playEffect(2);
        UIUtil_1.default.ShowUI(UIDef_1.UIDef.StartUI, function () {
            UIUtil_1.default.HideUI(UIDef_1.UIDef.ShowResultUI);
        });
    };
    __decorate([
        property([cc.Node])
    ], ShowResultUI.prototype, "allTrophy", void 0);
    __decorate([
        property(cc.Label)
    ], ShowResultUI.prototype, "jihuoLab", void 0);
    ShowResultUI = __decorate([
        ccclass
    ], ShowResultUI);
    return ShowResultUI;
}(cc.Component));
exports.default = ShowResultUI;

cc._RF.pop();