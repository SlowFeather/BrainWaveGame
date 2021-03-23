"use strict";
cc._RF.push(module, '0c21ah5kZREqpWCzGI3FKvB', 'DescribeUI');
// scripts/UI/DescribeUI/DescribeUI.ts

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
var DescribeTableData_1 = require("../../StaticDatas/DescribeTableData");
var UIUtil_1 = require("../../Tools/UIUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var DescribeUI = /** @class */ (function (_super) {
    __extends(DescribeUI, _super);
    function DescribeUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //教程文件
        _this.describeLab = null;
        //动画
        _this.describeTween = null;
        //所有的提示文字
        _this.allTipTxt = [];
        return _this;
        // update (dt) {}
    }
    DescribeUI.prototype.onEnable = function () {
        console.log("-->进入教程页面");
        this.DescribeAnimation2();
        // this.describeLab.string = DescribeTableData.getById(1).str;
        this.allTipObj.opacity = 0;
        for (var index = 0; index < this.allTipTxt.length; index++) {
            var element = this.allTipTxt[index];
            element.active = false;
        }
    };
    DescribeUI.prototype.onDisable = function () {
        if (this.describeTween != null) {
            this.describeTween.stop();
            this.describeLab.node.opacity = 255;
            this.describeTween = null;
        }
    };
    DescribeUI.prototype.start = function () {
        var map = DescribeTableData_1.DescribeTableData.getDataMap();
        var tableNumber = map.size;
        // console.log(tableNumber);
        // console.log(DescribeTableData.getById(1).str);
        this.describeLab.string = DescribeTableData_1.DescribeTableData.getById(1).str;
        //const animPath = SoundTableData.getById(soundId).path;
        //mytween.stop();
    };
    DescribeUI.prototype.DescribeAnimation2 = function () {
        var _this = this;
        if (this.describeTween != null) {
            console.log("动画未删除");
            return;
        }
        this.describeTween = cc.tween(this.allTipObj)
            // 延迟 1s
            //.delay(1)
            .call(function () {
            _this.allTipTxt[0].active = true;
            // this.allTipTxt[0].opacity=255;
        })
            .to(2, {
            opacity: 255
        })
            .delay(2)
            .to(2, {
            opacity: 0
        })
            .call(function () {
            _this.allTipTxt[0].active = false;
            _this.allTipTxt[1].active = true;
            // this.allTipTxt[0].opacity=255;
        })
            .to(2, {
            opacity: 255
        })
            .delay(2)
            .to(2, {
            opacity: 0
        })
            .call(function () {
            _this.allTipTxt[1].active = false;
            _this.allTipTxt[2].active = true;
            // this.allTipTxt[0].opacity=255;
        })
            .to(2, {
            opacity: 255
        })
            .delay(2)
            .to(2, {
            opacity: 0
        })
            .call(function () {
            _this.allTipTxt[2].active = false;
            _this.allTipTxt[3].active = true;
            // this.allTipTxt[0].opacity=255;
        })
            .to(2, {
            opacity: 255
        })
            .delay(2)
            .to(2, {
            opacity: 0
        })
            .call(function () {
            //切换页面
            UIUtil_1.default.ShowUI(UIDef_1.UIDef.GameUI, function () {
                UIUtil_1.default.HideUI(UIDef_1.UIDef.DescribeUI);
            });
        })
            .start();
    };
    DescribeUI.prototype.DescribeAnimation = function () {
        var _this = this;
        if (this.describeTween != null) {
            console.log("动画未删除");
            return;
        }
        this.describeTween = cc.tween(this.describeLab.node)
            // 延迟 1s
            .delay(1)
            .to(1, {
            opacity: 0
        })
            .to(1, {
            opacity: 255
        })
            .to(1, {
            opacity: 0
        })
            .call(function () {
            //切换文字
            _this.describeLab.string = DescribeTableData_1.DescribeTableData.getById(2).str;
        })
            .to(1, {
            opacity: 255
        })
            .to(1, {
            opacity: 0
        })
            .to(1, {
            opacity: 255
        })
            .to(1, {
            opacity: 0
        })
            .call(function () {
            //切换文字
            _this.describeLab.string = DescribeTableData_1.DescribeTableData.getById(3).str;
        })
            .to(1, {
            opacity: 255
        })
            .to(1, {
            opacity: 0
        })
            .to(1, {
            opacity: 255
        })
            .call(function () {
            //切换页面
            UIUtil_1.default.ShowUI(UIDef_1.UIDef.GameUI, function () {
                UIUtil_1.default.HideUI(UIDef_1.UIDef.DescribeUI);
            });
        })
            .start();
    };
    DescribeUI.prototype.OnBackBtnClick = function () {
        SoundManager_1.default.playEffect(2);
        console.log("点击了返回主界面按钮");
        UIUtil_1.default.ShowUI(UIDef_1.UIDef.StartUI, function () {
            UIUtil_1.default.HideUI(UIDef_1.UIDef.DescribeUI);
        });
    };
    DescribeUI.prototype.OnSkipBtnClick = function () {
        console.log("点击了跳过按钮");
        UIUtil_1.default.ShowUI(UIDef_1.UIDef.GameUI, function () {
            UIUtil_1.default.HideUI(UIDef_1.UIDef.DescribeUI);
        });
    };
    __decorate([
        property(cc.RichText)
    ], DescribeUI.prototype, "describeLab", void 0);
    __decorate([
        property([cc.Node])
    ], DescribeUI.prototype, "allTipTxt", void 0);
    __decorate([
        property(cc.Node)
    ], DescribeUI.prototype, "allTipObj", void 0);
    DescribeUI = __decorate([
        ccclass
    ], DescribeUI);
    return DescribeUI;
}(cc.Component));
exports.default = DescribeUI;

cc._RF.pop();