
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UI/ShowResultUI/ShowResultUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlcXFNob3dSZXN1bHRVSVxcU2hvd1Jlc3VsdFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlDQUF3QztBQUN4Qyx3RUFBbUU7QUFDbkUsMkRBQXNEO0FBQ3RELHFFQUFnRTtBQUVoRSw2Q0FBd0M7QUFFbEMsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBWTtJQUR0RDtRQUFBLHFFQTZEQztRQTFERyxTQUFTO1FBRVQsZUFBUyxHQUFjLEVBQUUsQ0FBQzs7UUF1RDFCLGlCQUFpQjtJQUNyQixDQUFDO0lBbkRHLDZCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDMUIsT0FBTyxDQUFDLE1BQU0sR0FBQyxLQUFLLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUVJLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFekIsWUFBWTtRQUNaLHNCQUFZLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBR3RDLHlEQUF5RDtRQUN6RCxJQUFJLEtBQUssR0FBQyxxQkFBVyxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQztRQUcxRCxrQkFBa0I7UUFDbEIsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3hELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFZLENBQUM7WUFDL0MsSUFBSSxLQUFLLEdBQUMsS0FBSyxFQUFFO2dCQUNiLE9BQU8sQ0FBQyxNQUFNLEdBQUMsSUFBSSxDQUFDO2FBQ3ZCO1NBQ0o7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBQyxjQUFjLEdBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFDLElBQUksQ0FBQztJQUU5RCxDQUFDO0lBQ0QsZ0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztZQUMxQixPQUFPLENBQUMsTUFBTSxHQUFDLEtBQUssQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDRCw0QkFBSyxHQUFMO0lBRUEsQ0FBQztJQUNELDJDQUFvQixHQUFwQjtRQUNJLHNCQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRW5DLHdCQUF3QjtJQUNwQixDQUFDO0lBQ0Qsd0NBQWlCLEdBQWpCO1FBQ0ksc0JBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFM0IsZ0JBQU0sQ0FBQyxNQUFNLENBQUMsYUFBSyxDQUFDLE9BQU8sRUFBQztZQUN4QixnQkFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBckREO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO21EQUNNO0lBRzFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ0Q7SUFQRCxZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBNERoQztJQUFELG1CQUFDO0NBNURELEFBNERDLENBNUR5QyxFQUFFLENBQUMsU0FBUyxHQTREckQ7a0JBNURvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmFnZURlZiB9IGZyb20gXCIuLi8uLi9EZWYvU3RvcmFnZURlZlwiO1xuaW1wb3J0IHsgVUlEZWYgfSBmcm9tIFwiLi4vLi4vRGVmL1VJRGVmXCI7XG5pbXBvcnQgRHJpdmVNYW5hZ2VyIGZyb20gXCIuLi8uLi9NYW5hZ2VyL0RyaXZlTWFuYWdlci9Ecml2ZU1hbmFnZXJcIjtcbmltcG9ydCBTb3VuZE1hbmFnZXIgZnJvbSBcIi4uLy4uL01hbmFnZXIvU291bmRNYW5hZ2VyXCI7XG5pbXBvcnQgVXNlck1hbmFnZXIgZnJvbSBcIi4uLy4uL01hbmFnZXIvVXNlck1hbmFnZXIvVXNlck1hbmFnZXJcIjtcbmltcG9ydCBTdG9yYWdlVXRpbCBmcm9tIFwiLi4vLi4vVG9vbHMvU3RvcmFnZVV0aWxcIjtcbmltcG9ydCBVSVV0aWwgZnJvbSBcIi4uLy4uL1Rvb2xzL1VJVXRpbFwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3dSZXN1bHRVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvL+aJgOacieeahOWlluadr+eJqeS9k1xuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXG4gICAgYWxsVHJvcGh5OiBjYy5Ob2RlW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBqaWh1b0xhYjpjYy5MYWJlbDtcblxuICAgIG9uTG9hZCgpe1xuICAgICAgICB0aGlzLmFsbFRyb3BoeS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgZWxlbWVudC5hY3RpdmU9ZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRW5hYmxlKCl7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCItLT7ov5vlhaXnu5PmnpzpobXpnaJcIik7XG5cbiAgICAgICAgLy/lho3mrKHnoa7orqTlhbPpl61odHRwXG4gICAgICAgIERyaXZlTWFuYWdlci5JbnN0YW5jZS5TdG9wUGluZ0RyaXZlKCk7XG5cbiAgICAgICAgXG4gICAgICAgIC8vIGxldCBzY29yZT1TdG9yYWdlVXRpbC5nZXREYXRhKFN0b3JhZ2VEZWYuU3RhckxpZ2h0LDApO1xuICAgICAgICBsZXQgc2NvcmU9VXNlck1hbmFnZXIuSW5zdGFuY2UuQ3VycmVudENvbnN0ZWxsYXRpb25OdW1iZXI7XG5cblxuICAgICAgICAvL+WIpOaWreW9k+WJjeW+l+WIhu+8jOW+l+WHoOWIhuWwseW+l+WHoOS4quWlluadr1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5hbGxUcm9waHkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuYWxsVHJvcGh5W2luZGV4XSBhcyBjYy5Ob2RlO1xuICAgICAgICAgICAgaWYgKGluZGV4PHNjb3JlKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hY3RpdmU9dHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuamlodW9MYWIuc3RyaW5nPVwi5r+AIOa0uyDmmJ8g5bqnIOaVsCDph4/vvJpcIitzY29yZS50b1N0cmluZygpK1wiIOS4qlwiO1xuICAgICAgICBcbiAgICB9XG4gICAgb25EaXNhYmxlKCl7XG4gICAgICAgIHRoaXMuYWxsVHJvcGh5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFjdGl2ZT1mYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgXG4gICAgfVxuICAgIE9uU2hvd1Jlc3VsdEJ0bkNsaWNrKCl7XG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KDIpO1xuXG4vLyBwYXJlbnQuY2xvc2VJRnJhbWUoKTtcbiAgICB9XG4gICAgT25SZVN0YXJ0QnRuQ2xpY2soKXsgIFxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdCgyKTtcblxuICAgICAgICBVSVV0aWwuU2hvd1VJKFVJRGVmLlN0YXJ0VUksKCk9PntcbiAgICAgICAgICAgIFVJVXRpbC5IaWRlVUkoVUlEZWYuU2hvd1Jlc3VsdFVJKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=