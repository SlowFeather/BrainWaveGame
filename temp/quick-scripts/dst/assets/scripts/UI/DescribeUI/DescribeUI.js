
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlcXERlc2NyaWJlVUlcXERlc2NyaWJlVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBRXlCO0FBQ3pCLDJEQUFzRDtBQUN0RCx5RUFFNkM7QUFHN0MsNkNBQXdDO0FBRWxDLElBQUEsa0JBR1csRUFGYixvQkFBTyxFQUNQLHNCQUNhLENBQUM7QUFNbEI7SUFBd0MsOEJBQVk7SUFEcEQ7UUFBQSxxRUErTEM7UUE1TEcsTUFBTTtRQUVOLGlCQUFXLEdBQWdCLElBQUksQ0FBQztRQUdoQyxJQUFJO1FBQ0osbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0IsU0FBUztRQUVULGVBQVMsR0FBYyxFQUFFLENBQUM7O1FBaUwxQixpQkFBaUI7SUFDckIsQ0FBQztJQTdLRyw2QkFBUSxHQUFSO1FBRUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV6QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQiw4REFBOEQ7UUFDOUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUMsQ0FBQyxDQUFDO1FBQ3pCLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN4RCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RDLE9BQU8sQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUNELDhCQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxFQUFFO1lBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FB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REMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ0E7SUFmRCxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBOEw5QjtJQUFELGlCQUFDO0NBOUxELEFBOExDLENBOUx1QyxFQUFFLENBQUMsU0FBUyxHQThMbkQ7a0JBOUxvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBVSURlZlxufSBmcm9tIFwiLi4vLi4vRGVmL1VJRGVmXCI7XG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gXCIuLi8uLi9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xuaW1wb3J0IHtcbiAgICBEZXNjcmliZVRhYmxlRGF0YVxufSBmcm9tIFwiLi4vLi4vU3RhdGljRGF0YXMvRGVzY3JpYmVUYWJsZURhdGFcIjtcblxuXG5pbXBvcnQgVUlVdGlsIGZyb20gXCIuLi8uLi9Ub29scy9VSVV0aWxcIjtcblxuY29uc3Qge1xuICAgIGNjY2xhc3MsXG4gICAgcHJvcGVydHlcbn0gPSBjYy5fZGVjb3JhdG9yO1xuXG5cbiAgICBcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlc2NyaWJlVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy/mlZnnqIvmlofku7ZcbiAgICBAcHJvcGVydHkoY2MuUmljaFRleHQpXG4gICAgZGVzY3JpYmVMYWI6IGNjLlJpY2hUZXh0ID0gbnVsbDtcblxuXG4gICAgLy/liqjnlLtcbiAgICBkZXNjcmliZVR3ZWVuOiBjYy5Ud2VlbiA9IG51bGw7XG5cbiAgICAvL+aJgOacieeahOaPkOekuuaWh+Wtl1xuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXG4gICAgYWxsVGlwVHh0OiBjYy5Ob2RlW10gPSBbXTtcbiAgICAvL+S4u+eJqeS9k1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGFsbFRpcE9iajpjYy5Ob2RlO1xuXG4gICAgb25FbmFibGUoKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCItLT7ov5vlhaXmlZnnqIvpobXpnaJcIik7XG5cbiAgICAgICAgdGhpcy5EZXNjcmliZUFuaW1hdGlvbjIoKTtcbiAgICAgICAgLy8gdGhpcy5kZXNjcmliZUxhYi5zdHJpbmcgPSBEZXNjcmliZVRhYmxlRGF0YS5nZXRCeUlkKDEpLnN0cjtcbiAgICAgICAgdGhpcy5hbGxUaXBPYmoub3BhY2l0eT0wO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5hbGxUaXBUeHQubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5hbGxUaXBUeHRbaW5kZXhdO1xuICAgICAgICAgICAgZWxlbWVudC5hY3RpdmU9ZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25EaXNhYmxlKCkge1xuICAgICAgICBpZiAodGhpcy5kZXNjcmliZVR3ZWVuICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpYmVUd2Vlbi5zdG9wKCk7XG4gICAgICAgICAgICB0aGlzLmRlc2NyaWJlTGFiLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpYmVUd2VlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGxldCBtYXAgPSBEZXNjcmliZVRhYmxlRGF0YS5nZXREYXRhTWFwKCk7XG4gICAgICAgIGxldCB0YWJsZU51bWJlciA9IG1hcC5zaXplO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0YWJsZU51bWJlcik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKERlc2NyaWJlVGFibGVEYXRhLmdldEJ5SWQoMSkuc3RyKTtcblxuICAgICAgICB0aGlzLmRlc2NyaWJlTGFiLnN0cmluZyA9IERlc2NyaWJlVGFibGVEYXRhLmdldEJ5SWQoMSkuc3RyO1xuICAgICAgICAvL2NvbnN0IGFuaW1QYXRoID0gU291bmRUYWJsZURhdGEuZ2V0QnlJZChzb3VuZElkKS5wYXRoO1xuXG5cblxuICAgICAgICAvL215dHdlZW4uc3RvcCgpO1xuXG4gICAgfVxuICAgIERlc2NyaWJlQW5pbWF0aW9uMigpe1xuICAgICAgICBpZiAodGhpcy5kZXNjcmliZVR3ZWVuICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yqo55S75pyq5Yig6ZmkXCIpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXNjcmliZVR3ZWVuID0gY2MudHdlZW4odGhpcy5hbGxUaXBPYmopXG4gICAgICAgICAgICAvLyDlu7bov58gMXNcbiAgICAgICAgICAgIC8vLmRlbGF5KDEpXG4gICAgICAgICAgICAuY2FsbCgoKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsVGlwVHh0WzBdLmFjdGl2ZT10cnVlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuYWxsVGlwVHh0WzBdLm9wYWNpdHk9MjU1O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50bygyLCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmRlbGF5KDIpXG4gICAgICAgICAgICAudG8oMix7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxUaXBUeHRbMF0uYWN0aXZlPWZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsVGlwVHh0WzFdLmFjdGl2ZT10cnVlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuYWxsVGlwVHh0WzBdLm9wYWNpdHk9MjU1O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50bygyLCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmRlbGF5KDIpXG4gICAgICAgICAgICAudG8oMix7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxUaXBUeHRbMV0uYWN0aXZlPWZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsVGlwVHh0WzJdLmFjdGl2ZT10cnVlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuYWxsVGlwVHh0WzBdLm9wYWNpdHk9MjU1O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50bygyLCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmRlbGF5KDIpXG4gICAgICAgICAgICAudG8oMix7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxUaXBUeHRbMl0uYWN0aXZlPWZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsVGlwVHh0WzNdLmFjdGl2ZT10cnVlO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuYWxsVGlwVHh0WzBdLm9wYWNpdHk9MjU1O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50bygyLCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmRlbGF5KDIpXG4gICAgICAgICAgICAudG8oMix7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvL+WIh+aNoumhtemdolxuICAgICAgICAgICAgICAgIFVJVXRpbC5TaG93VUkoVUlEZWYuR2FtZVVJLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFVJVXRpbC5IaWRlVUkoVUlEZWYuRGVzY3JpYmVVSSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuICAgIERlc2NyaWJlQW5pbWF0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5kZXNjcmliZVR3ZWVuICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yqo55S75pyq5Yig6ZmkXCIpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXNjcmliZVR3ZWVuID0gY2MudHdlZW4odGhpcy5kZXNjcmliZUxhYi5ub2RlKVxuICAgICAgICAgICAgLy8g5bu26L+fIDFzXG4gICAgICAgICAgICAuZGVsYXkoMSlcbiAgICAgICAgICAgIC50bygxLCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50bygxLCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMjU1XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRvKDEsIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy/liIfmjaLmloflrZdcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2NyaWJlTGFiLnN0cmluZyA9IERlc2NyaWJlVGFibGVEYXRhLmdldEJ5SWQoMikuc3RyO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLnRvKDEsIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudG8oMSwge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudG8oMSwge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50bygxLCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvL+WIh+aNouaWh+Wtl1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzY3JpYmVMYWIuc3RyaW5nID0gRGVzY3JpYmVUYWJsZURhdGEuZ2V0QnlJZCgzKS5zdHI7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRvKDEsIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAyNTVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudG8oMSwge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudG8oMSwge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDI1NVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAvL+WIh+aNoumhtemdolxuICAgICAgICAgICAgICAgIFVJVXRpbC5TaG93VUkoVUlEZWYuR2FtZVVJLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFVJVXRpbC5IaWRlVUkoVUlEZWYuRGVzY3JpYmVVSSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuICAgIE9uQmFja0J0bkNsaWNrKCkge1xuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdCgyKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIueCueWHu+S6hui/lOWbnuS4u+eVjOmdouaMiemSrlwiKTtcbiAgICAgICAgVUlVdGlsLlNob3dVSShVSURlZi5TdGFydFVJLCAoKSA9PiB7XG4gICAgICAgICAgICBVSVV0aWwuSGlkZVVJKFVJRGVmLkRlc2NyaWJlVUkpO1xuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBPblNraXBCdG5DbGljaygpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLngrnlh7vkuobot7Pov4fmjInpkq5cIik7XG4gICAgICAgIFVJVXRpbC5TaG93VUkoVUlEZWYuR2FtZVVJLCAoKSA9PiB7XG4gICAgICAgICAgICBVSVV0aWwuSGlkZVVJKFVJRGVmLkRlc2NyaWJlVUkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn0iXX0=