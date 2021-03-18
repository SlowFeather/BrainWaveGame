
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UI/DescribeUI/DescribeUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        return _this;
        // update (dt) {}
    }
    DescribeUI.prototype.onEnable = function () {
        console.log("-->进入教程页面");
        this.DescribeAnimation();
        this.describeLab.string = DescribeTableData_1.DescribeTableData.getById(1).str;
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
    DescribeUI.prototype.DescribeAnimation = function () {
        var _this = this;
        if (this.describeTween != null) {
            console.log("动画未删除");
            return;
        }
        this.describeTween = cc.tween(this.describeLab.node)
            // 延迟 1s
            .delay(1)
            .to(1, { opacity: 0 })
            .to(1, { opacity: 255 })
            .to(1, { opacity: 0 })
            .call(function () {
            //切换文字
            _this.describeLab.string = DescribeTableData_1.DescribeTableData.getById(2).str;
        })
            .to(1, { opacity: 255 })
            .to(1, { opacity: 0 })
            .to(1, { opacity: 255 })
            .to(1, { opacity: 0 })
            .call(function () {
            //切换文字
            _this.describeLab.string = DescribeTableData_1.DescribeTableData.getById(3).str;
        })
            .to(1, { opacity: 255 })
            .to(1, { opacity: 0 })
            .to(1, { opacity: 255 })
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
    DescribeUI = __decorate([
        ccclass
    ], DescribeUI);
    return DescribeUI;
}(cc.Component));
exports.default = DescribeUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlcXERlc2NyaWJlVUlcXERlc2NyaWJlVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBQ3hDLDJEQUFzRDtBQUN0RCx5RUFBd0U7QUFHeEUsNkNBQXdDO0FBRWxDLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFEcEQ7UUFBQSxxRUErRkM7UUE1RkcsTUFBTTtRQUVOLGlCQUFXLEdBQWdCLElBQUksQ0FBQztRQUdoQyxJQUFJO1FBQ0osbUJBQWEsR0FBVSxJQUFJLENBQUM7O1FBcUY1QixpQkFBaUI7SUFDckIsQ0FBQztJQXBGRyw2QkFBUSxHQUFSO1FBRUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV6QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBQyxxQ0FBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQzdELENBQUM7SUFDRCw4QkFBUyxHQUFUO1FBQ0ksSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFFLElBQUksRUFBRTtZQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBQyxHQUFHLENBQUM7WUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBQyxJQUFJLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBQ0QsMEJBQUssR0FBTDtRQUNJLElBQUksR0FBRyxHQUFDLHFDQUFpQixDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3ZDLElBQUksV0FBVyxHQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDekIsNEJBQTRCO1FBQzVCLGlEQUFpRDtRQUVqRCxJQUFJLENB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Q1U7SUFKZixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBOEY5QjtJQUFELGlCQUFDO0NBOUZELEFBOEZDLENBOUZ1QyxFQUFFLENBQUMsU0FBUyxHQThGbkQ7a0JBOUZvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUlEZWYgfSBmcm9tIFwiLi4vLi4vRGVmL1VJRGVmXCI7XG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gXCIuLi8uLi9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xuaW1wb3J0IHsgRGVzY3JpYmVUYWJsZURhdGEgfSBmcm9tIFwiLi4vLi4vU3RhdGljRGF0YXMvRGVzY3JpYmVUYWJsZURhdGFcIjtcblxuXG5pbXBvcnQgVUlVdGlsIGZyb20gXCIuLi8uLi9Ub29scy9VSVV0aWxcIjtcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXNjcmliZVVJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIC8v5pWZ56iL5paH5Lu2XG4gICAgQHByb3BlcnR5KGNjLlJpY2hUZXh0KVxuICAgIGRlc2NyaWJlTGFiOiBjYy5SaWNoVGV4dCA9IG51bGw7XG5cblxuICAgIC8v5Yqo55S7XG4gICAgZGVzY3JpYmVUd2VlbjpjYy5Ud2Vlbj1udWxsO1xuXG4gICAgb25FbmFibGUoKXtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tPui/m+WFpeaVmeeoi+mhtemdolwiKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuRGVzY3JpYmVBbmltYXRpb24oKTtcbiAgICAgICAgdGhpcy5kZXNjcmliZUxhYi5zdHJpbmc9RGVzY3JpYmVUYWJsZURhdGEuZ2V0QnlJZCgxKS5zdHI7XG4gICAgfVxuICAgIG9uRGlzYWJsZSgpe1xuICAgICAgICBpZiAodGhpcy5kZXNjcmliZVR3ZWVuIT1udWxsKSB7XG4gICAgICAgICAgICB0aGlzLmRlc2NyaWJlVHdlZW4uc3RvcCgpO1xuICAgICAgICAgICAgdGhpcy5kZXNjcmliZUxhYi5ub2RlLm9wYWNpdHk9MjU1O1xuICAgICAgICAgICAgdGhpcy5kZXNjcmliZVR3ZWVuPW51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnQgKCkge1xuICAgICAgICBsZXQgbWFwPURlc2NyaWJlVGFibGVEYXRhLmdldERhdGFNYXAoKTtcbiAgICAgICAgbGV0IHRhYmxlTnVtYmVyPW1hcC5zaXplO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0YWJsZU51bWJlcik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKERlc2NyaWJlVGFibGVEYXRhLmdldEJ5SWQoMSkuc3RyKTtcblxuICAgICAgICB0aGlzLmRlc2NyaWJlTGFiLnN0cmluZz1EZXNjcmliZVRhYmxlRGF0YS5nZXRCeUlkKDEpLnN0cjtcbiAgICAgICAgLy9jb25zdCBhbmltUGF0aCA9IFNvdW5kVGFibGVEYXRhLmdldEJ5SWQoc291bmRJZCkucGF0aDtcbiAgICAgICAgXG5cbiAgICAgICAgXG4gICAgICAgIC8vbXl0d2Vlbi5zdG9wKCk7XG4gICAgICAgIFxuICAgIH1cbiAgICBEZXNjcmliZUFuaW1hdGlvbigpe1xuICAgICAgICBpZiAodGhpcy5kZXNjcmliZVR3ZWVuIT1udWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWKqOeUu+acquWIoOmZpFwiKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzY3JpYmVUd2VlbiA9IGNjLnR3ZWVuKHRoaXMuZGVzY3JpYmVMYWIubm9kZSlcbiAgICAgICAgLy8g5bu26L+fIDFzXG4gICAgICAgIC5kZWxheSgxKVxuICAgICAgICAudG8oMSwgeyBvcGFjaXR5IDogMCB9KVxuICAgICAgICAudG8oMSwgeyBvcGFjaXR5OiAyNTUgfSlcbiAgICAgICAgLnRvKDEsIHsgb3BhY2l0eTogMCB9KVxuXG4gICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAvL+WIh+aNouaWh+Wtl1xuICAgICAgICAgICAgdGhpcy5kZXNjcmliZUxhYi5zdHJpbmc9RGVzY3JpYmVUYWJsZURhdGEuZ2V0QnlJZCgyKS5zdHI7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgIC50bygxLCB7IG9wYWNpdHkgOiAyNTUgfSlcbiAgICAgICAgLnRvKDEsIHsgb3BhY2l0eTogMCB9KVxuICAgICAgICAudG8oMSwgeyBvcGFjaXR5OiAyNTUgfSlcbiAgICAgICAgLnRvKDEsIHsgb3BhY2l0eTogMCB9KVxuICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgLy/liIfmjaLmloflrZdcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpYmVMYWIuc3RyaW5nPURlc2NyaWJlVGFibGVEYXRhLmdldEJ5SWQoMykuc3RyO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50bygxLCB7IG9wYWNpdHkgOiAyNTUgfSlcbiAgICAgICAgICAgIC50bygxLCB7IG9wYWNpdHk6IDAgfSlcbiAgICAgICAgICAgIC50bygxLCB7IG9wYWNpdHk6IDI1NSB9KVxuICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgLy/liIfmjaLpobXpnaJcbiAgICAgICAgICAgIFVJVXRpbC5TaG93VUkoVUlEZWYuR2FtZVVJLCgpPT57XG4gICAgICAgICAgICAgICAgVUlVdGlsLkhpZGVVSShVSURlZi5EZXNjcmliZVVJKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9XG4gICAgT25CYWNrQnRuQ2xpY2soKXtcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoMik7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCLngrnlh7vkuobov5Tlm57kuLvnlYzpnaLmjInpkq5cIik7XG4gICAgICAgIFVJVXRpbC5TaG93VUkoVUlEZWYuU3RhcnRVSSwoKT0+e1xuICAgICAgICAgICAgVUlVdGlsLkhpZGVVSShVSURlZi5EZXNjcmliZVVJKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgT25Ta2lwQnRuQ2xpY2soKXtcbiAgICAgICAgY29uc29sZS5sb2coXCLngrnlh7vkuobot7Pov4fmjInpkq5cIik7XG4gICAgICAgIFVJVXRpbC5TaG93VUkoVUlEZWYuR2FtZVVJLCgpPT57XG4gICAgICAgICAgICBVSVV0aWwuSGlkZVVJKFVJRGVmLkRlc2NyaWJlVUkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==