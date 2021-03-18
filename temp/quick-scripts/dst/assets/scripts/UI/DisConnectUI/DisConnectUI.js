
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UI/DisConnectUI/DisConnectUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlcXERpc0Nvbm5lY3RVSVxcRGlzQ29ubmVjdFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF3QztBQUN4Qyx3RUFBbUU7QUFDbkUsNkNBQXdDO0FBQ3hDLDJDQUFzQztBQUVoQyxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQTBDLGdDQUFZO0lBRHREO1FBQUEscUVBOEJDO1FBM0JHLFFBQVE7UUFFUixpQkFBVyxHQUFnQixJQUFJLENBQUM7O1FBd0JoQyxpQkFBaUI7SUFDckIsQ0FBQztJQXZCRywrQkFBUSxHQUFSO1FBRUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUUzQixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsR0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFDRCxnQ0FBUyxHQUFUO0lBRUEsQ0FBQztJQUNELDRCQUFLLEdBQUw7SUFHQSxDQUFDO0lBQ0QsdUNBQWdCLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUNELHdDQUFpQixHQUFqQjtRQUNJLG9DQUFvQztRQUNwQyxJQUFJLE1BQU0sR0FBQyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxhQUFLLENBQUMsTUFBTSxDQUFXLENBQUM7UUFDaEQsTUFBTSxDQUFDLFlBQVksQ0FBQyxnQkFBTSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNwRCxDQUFDO0lBdEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7cURBQ1U7SUFKZixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBNkJoQztJQUFELG1CQUFDO0NBN0JELEFBNkJDLENBN0J5QyxFQUFFLENBQUMsU0FBUyxHQTZCckQ7a0JBN0JvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUlEZWYgfSBmcm9tIFwiLi4vLi4vRGVmL1VJRGVmXCI7XG5pbXBvcnQgRHJpdmVNYW5hZ2VyIGZyb20gXCIuLi8uLi9NYW5hZ2VyL0RyaXZlTWFuYWdlci9Ecml2ZU1hbmFnZXJcIjtcbmltcG9ydCBVSVV0aWwgZnJvbSBcIi4uLy4uL1Rvb2xzL1VJVXRpbFwiO1xuaW1wb3J0IEdhbWVVSSBmcm9tIFwiLi4vR2FtZVVJL0dhbWVVSVwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc0Nvbm5lY3RVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvL+aPkOekuuaWh+Wtl+aWh+S7tlxuICAgIEBwcm9wZXJ0eShjYy5SaWNoVGV4dClcbiAgICBkZXNjcmliZUxhYjogY2MuUmljaFRleHQgPSBudWxsO1xuXG4gICAgb25FbmFibGUoKXtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tPui/m+WFpeaWreW8gOi/nuaOpemhtemdolwiKTtcbiAgICAgICAgXG4gICAgICAgIERyaXZlTWFuYWdlci5JbnN0YW5jZS5PbkJyYWluQ29ubmVjdEV2ZW50PXRoaXMuT25Db25uZWN0SGFuZGxlci5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBvbkRpc2FibGUoKXtcbiAgICAgICAgXG4gICAgfVxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cbiAgICBPbkNvbm5lY3RIYW5kbGVyKCl7XG4gICAgICAgIHRoaXMuT25Db25uZWN0QnRuQ2xpY2soKTtcbiAgICB9XG4gICAgT25Db25uZWN0QnRuQ2xpY2soKXtcbiAgICAgICAgLy9VSVV0aWwuSGlkZVVJKFVJRGVmLkRpc0Nvbm5lY3RVSSk7XG4gICAgICAgIGxldCBnYW1lVUk9VUlVdGlsLkdldFVJKFVJRGVmLkdhbWVVSSlhcyBjYy5Ob2RlO1xuICAgICAgICBnYW1lVUkuZ2V0Q29tcG9uZW50KEdhbWVVSSkuT25Db25uZWN0QnRuQ2xpY2soKTtcbiAgICB9XG4gICAgXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==