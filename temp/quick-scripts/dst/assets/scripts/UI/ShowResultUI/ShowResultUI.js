
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
        _this.jihuoxingzuoshuliangTxt = "激 活 星 座 数 量：";
        _this.xunlianjinduTxt = "训 练 完 成 进 度：";
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
        console.log("CurrentStarNumber:" + UserManager_1.default.Instance.CurrentStarNumber);
        console.log("CurrentConstellationNumber:" + UserManager_1.default.Instance.CurrentConstellationNumber);
        if (UserManager_1.default.Instance.CurrentStarNumber > 85) {
            UserManager_1.default.Instance.CurrentConstellationNumber = 5;
        }
        // let score=StorageUtil.getData(StorageDef.StarLight,0);
        //当前点亮的星座数量
        var score = UserManager_1.default.Instance.CurrentConstellationNumber;
        for (var index = 0; index < this.allTrophy.length; index++) {
            var element = this.allTrophy[index];
            element.active = true;
            element.opacity = 50;
        }
        //判断当前得分，得几分就得几个奖杯
        for (var index = 0; index < this.allTrophy.length; index++) {
            var element = this.allTrophy[index];
            if (index < score) {
                // element.active=true;
                element.opacity = 255;
            }
        }
        //计算出专注度得分
        UserManager_1.default.Instance.CurrentAbsorbedScore = Math.round(((UserManager_1.default.Instance.CurrentStarNumber + UserManager_1.default.Instance.CurrentConstellationNumber) / 90) * 100);
        if (UserManager_1.default.Instance.CurrentAbsorbedScore >= 100) {
            UserManager_1.default.Instance.CurrentAbsorbedScore = 100;
        }
        //这里修改专注度和激活星座数量
        //this.jihuoLab.string="激 活 星 座 数 量："+score.toString()+" 个";
        //最后星座比例
        var proportion = 0;
        //最后得分 星座比例+得分 保留一位小数
        var numberofactive = "0";
        switch (UserManager_1.default.Instance.CurrentConstellationNumber) {
            case 0:
                //第一颗星星是18
                proportion = UserManager_1.default.Instance.CurrentStarNumber / 18;
                numberofactive = (UserManager_1.default.Instance.CurrentConstellationNumber + proportion).toFixed(1);
                this.jihuoLab.string = this.jihuoxingzuoshuliangTxt + numberofactive + " 个";
                this.zhuanzhuLab.string = this.xunlianjinduTxt + UserManager_1.default.Instance.CurrentAbsorbedScore.toString() + "%";
                break;
            case 1:
                //第二颗星星是19
                proportion = (UserManager_1.default.Instance.CurrentStarNumber - 18) / 19;
                numberofactive = (UserManager_1.default.Instance.CurrentConstellationNumber + proportion).toFixed(1);
                this.jihuoLab.string = this.jihuoxingzuoshuliangTxt + numberofactive + " 个";
                this.zhuanzhuLab.string = this.xunlianjinduTxt + UserManager_1.default.Instance.CurrentAbsorbedScore.toString() + "%";
                break;
            case 2:
                //第三颗星星是19
                proportion = (UserManager_1.default.Instance.CurrentStarNumber - 18 - 19) / 19;
                numberofactive = (UserManager_1.default.Instance.CurrentConstellationNumber + proportion).toFixed(1);
                this.jihuoLab.string = this.jihuoxingzuoshuliangTxt + numberofactive + " 个";
                this.zhuanzhuLab.string = this.xunlianjinduTxt + UserManager_1.default.Instance.CurrentAbsorbedScore.toString() + "%";
                break;
            case 3:
                //第四颗星星是18
                proportion = (UserManager_1.default.Instance.CurrentStarNumber - 18 - 19 - 19) / 18;
                numberofactive = (UserManager_1.default.Instance.CurrentConstellationNumber + proportion).toFixed(1);
                this.jihuoLab.string = this.jihuoxingzuoshuliangTxt + numberofactive + " 个";
                this.zhuanzhuLab.string = this.xunlianjinduTxt + UserManager_1.default.Instance.CurrentAbsorbedScore.toString() + "%";
                break;
            case 4:
                //第五颗星星是12
                proportion = (UserManager_1.default.Instance.CurrentStarNumber - 18 - 19 - 19 - 18) / 12;
                numberofactive = (UserManager_1.default.Instance.CurrentConstellationNumber + proportion).toFixed(1);
                this.jihuoLab.string = this.jihuoxingzuoshuliangTxt + numberofactive + " 个";
                this.zhuanzhuLab.string = this.xunlianjinduTxt + UserManager_1.default.Instance.CurrentAbsorbedScore.toString() + "%";
                break;
            case 5:
                //第五颗星星是0
                proportion = 0;
                numberofactive = "5";
                this.jihuoLab.string = this.jihuoxingzuoshuliangTxt + numberofactive + " 个";
                this.zhuanzhuLab.string = this.xunlianjinduTxt + "100" + "%";
                break;
            default:
                break;
        }
        // if (UserManager.Instance.CurrentConstellationNumber==0) {
        //     this.jihuoLab.string="激 活 星 座 数 量："+score.toString()+" 个";
        //     this.zhuanzhuLab.string="专 注 度 得 分："+score.toString()+" 分";
        // }
        // if (score==1) {
        // }
    };
    ShowResultUI.prototype.onDisable = function () {
        this.allTrophy.forEach(function (element) {
            element.active = false;
        });
    };
    ShowResultUI.prototype.start = function () {
    };
    ShowResultUI.prototype.OnShowResultBtnClick = function () {
        var _this = this;
        SoundManager_1.default.playEffect(2);
        UIUtil_1.default.ShowUI(UIDef_1.UIDef.ProcessingUI, function () {
            console.dir(UserManager_1.default.Instance.PostResultModel);
            UserManager_1.default.Instance.SendResult(_this.SendCallBack);
        });
        // parent.closeIFrame();
    };
    ShowResultUI.prototype.SendCallBack = function (ended, response) {
        // console.dir(response.data);
        if (ended) {
            console.log("跳转界面");
            //window.location.href=UserManager.Instance.JumpUrl;
            window.location.href = "https://www.baidu.com/" + response.data;
        }
        else {
            console.log("上传失败");
            alert("上传失败，请重新上传");
        }
        UIUtil_1.default.HideUI(UIDef_1.UIDef.ProcessingUI);
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
    __decorate([
        property(cc.Label)
    ], ShowResultUI.prototype, "zhuanzhuLab", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlcXFNob3dSZXN1bHRVSVxcU2hvd1Jlc3VsdFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlDQUF3QztBQUN4Qyx3RUFBbUU7QUFDbkUsMkRBQXNEO0FBQ3RELHFFQUFnRTtBQUVoRSw2Q0FBd0M7QUFHbEMsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBWTtJQUR0RDtRQUFBLHFFQWdMQztRQTdLRyxTQUFTO1FBRVQsZUFBUyxHQUFjLEVBQUUsQ0FBQztRQVMxQiw2QkFBdUIsR0FBUSxjQUFjLENBQUM7UUFDOUMscUJBQWUsR0FBUSxjQUFjLENBQUM7O1FBZ0t0QyxpQkFBaUI7SUFDckIsQ0FBQztJQTlKRyw2QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQzFCLE9BQU8sQ0FBQyxNQUFNLEdBQUMsS0FBSyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFFSSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXpCLFlBQVk7UUFDWixzQkFBWSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUV0QyxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFDLHFCQUFXLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDekUsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBQyxxQkFBVyxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBRTNGLElBQUkscUJBQVcsQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEdBQUMsRUFBRSxFQUFFO1lBQzNDLHFCQUFXLENBQUMsUUFBUSxDQUFDLDBCQUEwQixHQUFDLENBQUMsQ0FBQztTQUNyRDtR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USxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ0U7SUFWSixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBK0toQztJQUFELG1CQUFDO0NBL0tELEFBK0tDLENBL0t5QyxFQUFFLENBQUMsU0FBUyxHQStLckQ7a0JBL0tvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmFnZURlZiB9IGZyb20gXCIuLi8uLi9EZWYvU3RvcmFnZURlZlwiO1xuaW1wb3J0IHsgVUlEZWYgfSBmcm9tIFwiLi4vLi4vRGVmL1VJRGVmXCI7XG5pbXBvcnQgRHJpdmVNYW5hZ2VyIGZyb20gXCIuLi8uLi9NYW5hZ2VyL0RyaXZlTWFuYWdlci9Ecml2ZU1hbmFnZXJcIjtcbmltcG9ydCBTb3VuZE1hbmFnZXIgZnJvbSBcIi4uLy4uL01hbmFnZXIvU291bmRNYW5hZ2VyXCI7XG5pbXBvcnQgVXNlck1hbmFnZXIgZnJvbSBcIi4uLy4uL01hbmFnZXIvVXNlck1hbmFnZXIvVXNlck1hbmFnZXJcIjtcbmltcG9ydCBTdG9yYWdlVXRpbCBmcm9tIFwiLi4vLi4vVG9vbHMvU3RvcmFnZVV0aWxcIjtcbmltcG9ydCBVSVV0aWwgZnJvbSBcIi4uLy4uL1Rvb2xzL1VJVXRpbFwiO1xuaW1wb3J0IExvYWRpbmdVSSBmcm9tIFwiLi4vTG9hZGluZ1VJL0xvYWRpbmdVSVwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3dSZXN1bHRVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvL+aJgOacieeahOWlluadr+eJqeS9k1xuICAgIEBwcm9wZXJ0eShbY2MuTm9kZV0pXG4gICAgYWxsVHJvcGh5OiBjYy5Ob2RlW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBqaWh1b0xhYjpjYy5MYWJlbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB6aHVhbnpodUxhYjpjYy5MYWJlbDtcblxuXG4gICAgamlodW94aW5nenVvc2h1bGlhbmdUeHQ6c3RyaW5nPVwi5r+AIOa0uyDmmJ8g5bqnIOaVsCDph4/vvJpcIjtcbiAgICB4dW5saWFuamluZHVUeHQ6c3RyaW5nPVwi6K6tIOe7gyDlrowg5oiQIOi/myDluqbvvJpcIjtcblxuXG4gICAgb25Mb2FkKCl7XG4gICAgICAgIHRoaXMuYWxsVHJvcGh5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFjdGl2ZT1mYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25FbmFibGUoKXtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIi0tPui/m+WFpee7k+aenOmhtemdolwiKTtcblxuICAgICAgICAvL+WGjeasoeehruiupOWFs+mXrWh0dHBcbiAgICAgICAgRHJpdmVNYW5hZ2VyLkluc3RhbmNlLlN0b3BQaW5nRHJpdmUoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIkN1cnJlbnRTdGFyTnVtYmVyOlwiK1VzZXJNYW5hZ2VyLkluc3RhbmNlLkN1cnJlbnRTdGFyTnVtYmVyKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJDdXJyZW50Q29uc3RlbGxhdGlvbk51bWJlcjpcIitVc2VyTWFuYWdlci5JbnN0YW5jZS5DdXJyZW50Q29uc3RlbGxhdGlvbk51bWJlcik7XG5cbiAgICAgICAgaWYgKFVzZXJNYW5hZ2VyLkluc3RhbmNlLkN1cnJlbnRTdGFyTnVtYmVyPjg1KSB7XG4gICAgICAgICAgICBVc2VyTWFuYWdlci5JbnN0YW5jZS5DdXJyZW50Q29uc3RlbGxhdGlvbk51bWJlcj01O1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIC8vIGxldCBzY29yZT1TdG9yYWdlVXRpbC5nZXREYXRhKFN0b3JhZ2VEZWYuU3RhckxpZ2h0LDApO1xuICAgICAgICAvL+W9k+WJjeeCueS6rueahOaYn+W6p+aVsOmHj1xuICAgICAgICBsZXQgc2NvcmU9VXNlck1hbmFnZXIuSW5zdGFuY2UuQ3VycmVudENvbnN0ZWxsYXRpb25OdW1iZXI7XG5cblxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5hbGxUcm9waHkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMuYWxsVHJvcGh5W2luZGV4XSBhcyBjYy5Ob2RlO1xuICAgICAgICAgICAgZWxlbWVudC5hY3RpdmU9dHJ1ZTtcbiAgICAgICAgICAgIGVsZW1lbnQub3BhY2l0eT01MDtcblxuICAgICAgICB9XG4gICAgICAgIC8v5Yik5pat5b2T5YmN5b6X5YiG77yM5b6X5Yeg5YiG5bCx5b6X5Yeg5Liq5aWW5p2vXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmFsbFRyb3BoeS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gdGhpcy5hbGxUcm9waHlbaW5kZXhdIGFzIGNjLk5vZGU7XG4gICAgICAgICAgICBpZiAoaW5kZXg8c2NvcmUpIHtcbiAgICAgICAgICAgICAgICAvLyBlbGVtZW50LmFjdGl2ZT10cnVlO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQub3BhY2l0eT0yNTU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8v6K6h566X5Ye65LiT5rOo5bqm5b6X5YiGXG4gICAgICAgIFVzZXJNYW5hZ2VyLkluc3RhbmNlLkN1cnJlbnRBYnNvcmJlZFNjb3JlPU1hdGgucm91bmQoKChVc2VyTWFuYWdlci5JbnN0YW5jZS5DdXJyZW50U3Rhck51bWJlcitVc2VyTWFuYWdlci5JbnN0YW5jZS5DdXJyZW50Q29uc3RlbGxhdGlvbk51bWJlcikvOTApKjEwMCk7XG4gICAgICAgIGlmIChVc2VyTWFuYWdlci5JbnN0YW5jZS5DdXJyZW50QWJzb3JiZWRTY29yZT49MTAwKSB7XG4gICAgICAgICAgICBVc2VyTWFuYWdlci5JbnN0YW5jZS5DdXJyZW50QWJzb3JiZWRTY29yZT0xMDA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8v6L+Z6YeM5L+u5pS55LiT5rOo5bqm5ZKM5r+A5rS75pif5bqn5pWw6YePXG4gICAgICAgIC8vdGhpcy5qaWh1b0xhYi5zdHJpbmc9XCLmv4Ag5rS7IOaYnyDluqcg5pWwIOmHj++8mlwiK3Njb3JlLnRvU3RyaW5nKCkrXCIg5LiqXCI7XG5cbiAgICAgICAgLy/mnIDlkI7mmJ/luqfmr5TkvotcbiAgICAgICAgbGV0IHByb3BvcnRpb246bnVtYmVyPTA7XG4gICAgICAgIC8v5pyA5ZCO5b6X5YiGIOaYn+W6p+avlOS+iyvlvpfliIYg5L+d55WZ5LiA5L2N5bCP5pWwXG4gICAgICAgIGxldCBudW1iZXJvZmFjdGl2ZTpzdHJpbmc9XCIwXCI7XG4gICAgICAgIFxuICAgICAgICBzd2l0Y2ggKFVzZXJNYW5hZ2VyLkluc3RhbmNlLkN1cnJlbnRDb25zdGVsbGF0aW9uTnVtYmVyKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgLy/nrKzkuIDpopfmmJ/mmJ/mmK8xOFxuICAgICAgICAgICAgICAgIHByb3BvcnRpb249VXNlck1hbmFnZXIuSW5zdGFuY2UuQ3VycmVudFN0YXJOdW1iZXIvMTg7XG4gICAgICAgICAgICAgICAgbnVtYmVyb2ZhY3RpdmU9KFVzZXJNYW5hZ2VyLkluc3RhbmNlLkN1cnJlbnRDb25zdGVsbGF0aW9uTnVtYmVyK3Byb3BvcnRpb24pLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5qaWh1b0xhYi5zdHJpbmc9dGhpcy5qaWh1b3hpbmd6dW9zaHVsaWFuZ1R4dCtudW1iZXJvZmFjdGl2ZStcIiDkuKpcIjtcbiAgICAgICAgICAgICAgICB0aGlzLnpodWFuemh1TGFiLnN0cmluZz10aGlzLnh1bmxpYW5qaW5kdVR4dCtVc2VyTWFuYWdlci5JbnN0YW5jZS5DdXJyZW50QWJzb3JiZWRTY29yZS50b1N0cmluZygpK1wiJVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIC8v56ys5LqM6aKX5pif5pif5pivMTlcbiAgICAgICAgICAgICAgICBwcm9wb3J0aW9uPShVc2VyTWFuYWdlci5JbnN0YW5jZS5DdXJyZW50U3Rhck51bWJlci0xOCkvMTk7XG4gICAgICAgICAgICAgICAgbnVtYmVyb2ZhY3RpdmU9KFVzZXJNYW5hZ2VyLkluc3RhbmNlLkN1cnJlbnRDb25zdGVsbGF0aW9uTnVtYmVyK3Byb3BvcnRpb24pLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5qaWh1b0xhYi5zdHJpbmc9dGhpcy5qaWh1b3hpbmd6dW9zaHVsaWFuZ1R4dCtudW1iZXJvZmFjdGl2ZStcIiDkuKpcIjtcbiAgICAgICAgICAgICAgICB0aGlzLnpodWFuemh1TGFiLnN0cmluZz10aGlzLnh1bmxpYW5qaW5kdVR4dCtVc2VyTWFuYWdlci5JbnN0YW5jZS5DdXJyZW50QWJzb3JiZWRTY29yZS50b1N0cmluZygpK1wiJVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIC8v56ys5LiJ6aKX5pif5pif5pivMTlcbiAgICAgICAgICAgICAgICBwcm9wb3J0aW9uPShVc2VyTWFuYWdlci5JbnN0YW5jZS5DdXJyZW50U3Rhck51bWJlci0xOC0xOSkvMTk7XG4gICAgICAgICAgICAgICAgbnVtYmVyb2ZhY3RpdmU9KFVzZXJNYW5hZ2VyLkluc3RhbmNlLkN1cnJlbnRDb25zdGVsbGF0aW9uTnVtYmVyK3Byb3BvcnRpb24pLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5qaWh1b0xhYi5zdHJpbmc9dGhpcy5qaWh1b3hpbmd6dW9zaHVsaWFuZ1R4dCtudW1iZXJvZmFjdGl2ZStcIiDkuKpcIjtcbiAgICAgICAgICAgICAgICB0aGlzLnpodWFuemh1TGFiLnN0cmluZz10aGlzLnh1bmxpYW5qaW5kdVR4dCtVc2VyTWFuYWdlci5JbnN0YW5jZS5DdXJyZW50QWJzb3JiZWRTY29yZS50b1N0cmluZygpK1wiJVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIC8v56ys5Zub6aKX5pif5pif5pivMThcbiAgICAgICAgICAgICAgICBwcm9wb3J0aW9uPShVc2VyTWFuYWdlci5JbnN0YW5jZS5DdXJyZW50U3Rhck51bWJlci0xOC0xOS0xOSkvMTg7XG4gICAgICAgICAgICAgICAgbnVtYmVyb2ZhY3RpdmU9KFVzZXJNYW5hZ2VyLkluc3RhbmNlLkN1cnJlbnRDb25zdGVsbGF0aW9uTnVtYmVyK3Byb3BvcnRpb24pLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5qaWh1b0xhYi5zdHJpbmc9dGhpcy5qaWh1b3hpbmd6dW9zaHVsaWFuZ1R4dCtudW1iZXJvZmFjdGl2ZStcIiDkuKpcIjtcbiAgICAgICAgICAgICAgICB0aGlzLnpodWFuemh1TGFiLnN0cmluZz10aGlzLnh1bmxpYW5qaW5kdVR4dCtVc2VyTWFuYWdlci5JbnN0YW5jZS5DdXJyZW50QWJzb3JiZWRTY29yZS50b1N0cmluZygpK1wiJVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIC8v56ys5LqU6aKX5pif5pif5pivMTJcbiAgICAgICAgICAgICAgICBwcm9wb3J0aW9uPShVc2VyTWFuYWdlci5JbnN0YW5jZS5DdXJyZW50U3Rhck51bWJlci0xOC0xOS0xOS0xOCkvMTI7XG4gICAgICAgICAgICAgICAgbnVtYmVyb2ZhY3RpdmU9KFVzZXJNYW5hZ2VyLkluc3RhbmNlLkN1cnJlbnRDb25zdGVsbGF0aW9uTnVtYmVyK3Byb3BvcnRpb24pLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5qaWh1b0xhYi5zdHJpbmc9dGhpcy5qaWh1b3hpbmd6dW9zaHVsaWFuZ1R4dCtudW1iZXJvZmFjdGl2ZStcIiDkuKpcIjtcbiAgICAgICAgICAgICAgICB0aGlzLnpodWFuemh1TGFiLnN0cmluZz10aGlzLnh1bmxpYW5qaW5kdVR4dCtVc2VyTWFuYWdlci5JbnN0YW5jZS5DdXJyZW50QWJzb3JiZWRTY29yZS50b1N0cmluZygpK1wiJVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIC8v56ys5LqU6aKX5pif5pif5pivMFxuICAgICAgICAgICAgICAgIHByb3BvcnRpb249MDtcbiAgICAgICAgICAgICAgICBudW1iZXJvZmFjdGl2ZT1cIjVcIjtcbiAgICAgICAgICAgICAgICB0aGlzLmppaHVvTGFiLnN0cmluZz10aGlzLmppaHVveGluZ3p1b3NodWxpYW5nVHh0K251bWJlcm9mYWN0aXZlK1wiIOS4qlwiO1xuICAgICAgICAgICAgICAgIHRoaXMuemh1YW56aHVMYWIuc3RyaW5nPXRoaXMueHVubGlhbmppbmR1VHh0K1wiMTAwXCIrXCIlXCI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIChVc2VyTWFuYWdlci5JbnN0YW5jZS5DdXJyZW50Q29uc3RlbGxhdGlvbk51bWJlcj09MCkge1xuICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICB0aGlzLmppaHVvTGFiLnN0cmluZz1cIua/gCDmtLsg5pifIOW6pyDmlbAg6YeP77yaXCIrc2NvcmUudG9TdHJpbmcoKStcIiDkuKpcIjtcbiAgICAgICAgLy8gICAgIHRoaXMuemh1YW56aHVMYWIuc3RyaW5nPVwi5LiTIOazqCDluqYg5b6XIOWIhu+8mlwiK3Njb3JlLnRvU3RyaW5nKCkrXCIg5YiGXCI7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKHNjb3JlPT0xKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gfVxuICAgICAgICBcbiAgICB9XG4gICAgb25EaXNhYmxlKCl7XG4gICAgICAgIHRoaXMuYWxsVHJvcGh5LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmFjdGl2ZT1mYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgXG4gICAgfVxuICAgIE9uU2hvd1Jlc3VsdEJ0bkNsaWNrKCl7XG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KDIpO1xuICAgICAgICBVSVV0aWwuU2hvd1VJKFVJRGVmLlByb2Nlc3NpbmdVSSwoKT0+e1xuICAgICAgICAgICAgY29uc29sZS5kaXIoVXNlck1hbmFnZXIuSW5zdGFuY2UuUG9zdFJlc3VsdE1vZGVsKTtcblxuICAgICAgICAgICAgVXNlck1hbmFnZXIuSW5zdGFuY2UuU2VuZFJlc3VsdCh0aGlzLlNlbmRDYWxsQmFjayk7IFxuICAgICAgICB9KTtcbiAgICAgICAgXG5cbi8vIHBhcmVudC5jbG9zZUlGcmFtZSgpO1xuICAgIH1cblxuICAgIFNlbmRDYWxsQmFjayhlbmRlZCxyZXNwb25zZSl7XG4gICAgICAgIC8vIGNvbnNvbGUuZGlyKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICBpZiAoZW5kZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6Lez6L2s55WM6Z2iXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL3dpbmRvdy5sb2NhdGlvbi5ocmVmPVVzZXJNYW5hZ2VyLkluc3RhbmNlLkp1bXBVcmw7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZj1cImh0dHBzOi8vd3d3LmJhaWR1LmNvbS9cIityZXNwb25zZS5kYXRhO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LiK5Lyg5aSx6LSlXCIpO1xuICAgICAgICAgICAgYWxlcnQoXCLkuIrkvKDlpLHotKXvvIzor7fph43mlrDkuIrkvKBcIik7XG5cbiAgICAgICAgfVxuICAgICAgICBVSVV0aWwuSGlkZVVJKFVJRGVmLlByb2Nlc3NpbmdVSSk7XG4gICAgfVxuXG5cblxuICAgIE9uUmVTdGFydEJ0bkNsaWNrKCl7ICBcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoMik7XG5cbiAgICAgICAgVUlVdGlsLlNob3dVSShVSURlZi5TdGFydFVJLCgpPT57XG4gICAgICAgICAgICBVSVV0aWwuSGlkZVVJKFVJRGVmLlNob3dSZXN1bHRVSSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19