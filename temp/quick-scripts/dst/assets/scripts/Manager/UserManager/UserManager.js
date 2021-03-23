
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Manager/UserManager/UserManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4bac7ac+3FN+ruDnItoQjYn', 'UserManager');
// scripts/Manager/UserManager/UserManager.ts

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
var StorageUtil_1 = require("../../Tools/StorageUtil");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UserManager = /** @class */ (function (_super) {
    __extends(UserManager, _super);
    function UserManager() {
        var _this = _super.call(this) || this;
        //#endregion
        // host:string="http://127.0.0.1:8090";
        // param:any={};
        /**
         * 提交积分完成后跳转页面
         * 改完这里需要再看一下showresultui
         * @type {string}
         * @memberof UserManager
         */
        _this.JumpUrl = "http://www.baidu.com";
        /**
         * 积分提交url
         *
         * @type {string}
         * @memberof UserManager
         */
        _this.PostUrl = "http://test.yalixinli.com:9318/brain/game/save";
        /**
         * 当前游戏编号
         *
         * @type {string}
         * @memberof UserManager
         */
        _this.GameCode = "BRAIN_GAME_CONSTELLATION";
        /**
         *  Token
         *
         * @type {string}
         * @memberof UserManager
         */
        _this.VerificationToken = "";
        /**
         * 当前星座序号
         *
         * @type {number}
         * @memberof UserManager
         */
        _this.CurrentConstellationNumber = 0;
        /**
         * 当前星星数量
         *
         * @type {number}
         * @memberof UserManager
         */
        _this.CurrentStarNumber = 0;
        /**
         * 上传的专注度得分
         *
         * @type {number}
         * @memberof UserManager
         */
        _this.CurrentAbsorbedScore = 0;
        _this.PostResultModel = null;
        return _this;
    }
    UserManager_1 = UserManager;
    UserManager.prototype.onLoad = function () {
        UserManager_1.Instance = this;
    };
    UserManager.prototype.start = function () {
        //初始化拿到Token
        this.VerificationToken = StorageUtil_1.default.getData("LOGIN_KEY", "HelloWorld");
    };
    UserManager.prototype.InitPostResultModel = function () {
        this.PostResultModel = new PostResultModel();
        this.PostResultModel.data = [];
        this.CurrentConstellationNumber = 0;
        this.CurrentStarNumber = 0;
        this.CurrentAbsorbedScore = 0;
    };
    UserManager.prototype.SendResult = function (callback) {
        this.PostResultModel.gameCode = this.GameCode;
        this.PostResultModel.finishCount = this.CurrentConstellationNumber.toString();
        this.PostResultModel.subCount = this.CurrentStarNumber.toString();
        this.PostResultModel.absorbedScore = this.CurrentAbsorbedScore.toString();
        this.POST(this.PostUrl, this.PostResultModel, callback);
        // JSON.parse(response)as BrainModel
        //JSON.stringify(this.PostResultModel.data);
    };
    UserManager.prototype.POST = function (url, params, callback) {
        // let dataStr = '';
        // Object.keys(params).forEach(key => {
        //     dataStr += key + '=' + encodeURIComponent(params[key]) + '&';
        // })
        // if (dataStr !== '') {
        //     dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
        //     url = url + '?' + dataStr;
        // }
        // url = HttpUtil.baseUrl + url;
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.open("POST", url, true);
        // xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.setRequestHeader("Token", this.VerificationToken);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                var response = xhr.responseText;
                if (xhr.status >= 200 && xhr.status < 300) {
                    var httpStatus = xhr.statusText;
                    // callback(true, JSON.parse(response));
                    callback(true, response);
                }
                else {
                    callback(false, response);
                }
            }
        };
        xhr.timeout = 50000;
        xhr.send(JSON.stringify(params));
    };
    var UserManager_1;
    UserManager = UserManager_1 = __decorate([
        ccclass
    ], UserManager);
    return UserManager;
}(cc.Component));
exports.default = UserManager;
/*Data*/
var PostResultData = /** @class */ (function () {
    function PostResultData() {
    }
    return PostResultData;
}());
exports.PostResultData = PostResultData;
/*tsModel1*/
var PostResultModel = /** @class */ (function () {
    function PostResultModel() {
    }
    return PostResultModel;
}());
exports.PostResultModel = PostResultModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWFuYWdlclxcVXNlck1hbmFnZXJcXFVzZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHVEQUFrRDtBQUc1QyxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBSWpEO1FBQUEsWUFBZ0IsaUJBQU8sU0FBRztRQUk5QixZQUFZO1FBRVIsdUNBQXVDO1FBQ3ZDLGdCQUFnQjtRQUVoQjs7Ozs7V0FLRztRQUNILGFBQU8sR0FBUSxzQkFBc0IsQ0FBQztRQUd0Qzs7Ozs7V0FLRztRQUNILGFBQU8sR0FBUSxnREFBZ0QsQ0FBQztRQUVoRTs7Ozs7V0FLRztRQUNILGNBQVEsR0FBUSwwQkFBMEIsQ0FBQztRQUczQzs7Ozs7V0FLRztRQUNILHVCQUFpQixHQUFRLEVBQUUsQ0FBQztRQUU1Qjs7Ozs7V0FLRztRQUNILGdDQUEwQixHQUFRLENBQUMsQ0FBQztRQUdwQzs7Ozs7V0FLRztRQUNILHVCQUFpQixHQUFRLENBQUMsQ0FBQztRQUUzQjs7Ozs7V0FLRztRQUNILDBCQUFvQixHQUFRLENBQUMsQ0FBQztRQUc5QixxQkFBZSxHQUFpQixJQUFJLENBQUM7O0lBckVaLENBQUM7b0JBSlQsV0FBVztJQUs1Qiw0QkFBTSxHQUFOO1FBQ0ksYUFBVyxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQW1FRCwyQkFBSyxHQUFMO1FBQ0ksWUFBWTtRQUNaLElBQUksQ0FBQyxpQkFBaUIsR0FBQyxxQkFBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUMsWUFBWSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELHlDQUFtQixHQUFuQjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUMsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksR0FBQyxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLDBCQUEwQixHQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsaUJBQWlCLEdBQUMsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxvQkFBb0IsR0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELGdDQUFVLEdBQVYsVUFBVyxRQUFRO1FBQ2YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM1QyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsR0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hFLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxHQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV6RSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLGVBQWUsRUFBQyxRQUFRLENBQUMsQ0FBQztRQUN0RCxvQ0FBb0M7UUFDcEMsNENBQTRDO0lBQ2hELENBQUM7SUFFRCwwQkFBSSxHQUFKLFVBQUssR0FBRyxFQUFFLE1BQU0sRUFBRSxRQUFRO1FBQ3RCLG9CQUFvQjtRQUNwQix1Q0FBdUM7UUFDdkMsb0VBQW9FO1FBQ3BFLEtBQUs7UUFDTCx3QkFBd0I7UUFDeEIsNkRBQTZEO1FBQzdELGlDQUFpQztRQUNqQyxJQUFJO1FBQ0osZ0NBQWdDO1FBRWhDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN4QyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUIsb0VBQW9FO1FBQ3BFLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztRQUV2RSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBR3RELEdBQUcsQ0FBQyxrQkFBa0IsR0FBRztZQUNyQixJQUFJLEdBQUcsQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO2dCQUN0QixJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUFDO2dCQUNoQyxJQUFJLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxFQUFFO29CQUN2QyxJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO29CQUNoQyx3Q0FBd0M7b0JBQ3hDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7aUJBRTVCO3FCQUFNO29CQUNILFFBQVEsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7aUJBQzdCO2FBRUo7UUFDTCxDQUFDLENBQUM7UUFDRixHQUFHLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNwQixHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDOztJQXJJZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXNJL0I7SUFBRCxrQkFBQztDQXRJRCxBQXNJQyxDQXRJd0MsRUFBRSxDQUFDLFNBQVMsR0FzSXBEO2tCQXRJb0IsV0FBVztBQXdJaEMsUUFBUTtBQUNSO0lBQUE7SUFXRSxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQVhGLEFBV0csSUFBQTtBQVhVLHdDQUFjO0FBYXpCLFlBQVk7QUFDWjtJQUFBO0lBMEJBLENBQUM7SUFBRCxzQkFBQztBQUFELENBMUJBLEFBMEJDLElBQUE7QUExQlksMENBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNzYWdlRGVmIH0gZnJvbSBcIi4uLy4uL0RlZi9NZXNzYWdlRGVmXCI7XG5pbXBvcnQgeyBIdHRwVXRpbCB9IGZyb20gXCIuLi8uLi9Ub29scy9IVFRQVXRpbFwiO1xuaW1wb3J0IFN0b3JhZ2VVdGlsIGZyb20gXCIuLi8uLi9Ub29scy9TdG9yYWdlVXRpbFwiO1xuaW1wb3J0IE1lc3NhZ2VEaXNwYXRjaGVyIGZyb20gXCIuLi9NZXNzYWdlRGlzcGF0Y2hlci9NZXNzYWdlRGlzcGF0Y2hlclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuLy8jcmVnaW9uIEluc3RhbmNlXG4gICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZTogVXNlck1hbmFnZXI7XG4gICAgY29uc3RydWN0b3IoKSB7IHN1cGVyKCk7IH1cbiAgICBvbkxvYWQoKTp2b2lke1xuICAgICAgICBVc2VyTWFuYWdlci5JbnN0YW5jZT10aGlzO1xuICAgIH1cbi8vI2VuZHJlZ2lvblxuXG4gICAgLy8gaG9zdDpzdHJpbmc9XCJodHRwOi8vMTI3LjAuMC4xOjgwOTBcIjtcbiAgICAvLyBwYXJhbTphbnk9e307XG5cbiAgICAvKipcbiAgICAgKiDmj5DkuqTnp6/liIblrozmiJDlkI7ot7PovazpobXpnaJcbiAgICAgKiDmlLnlrozov5nph4zpnIDopoHlho3nnIvkuIDkuItzaG93cmVzdWx0dWlcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBVc2VyTWFuYWdlclxuICAgICAqL1xuICAgIEp1bXBVcmw6c3RyaW5nPVwiaHR0cDovL3d3dy5iYWlkdS5jb21cIjtcblxuXG4gICAgLyoqXG4gICAgICog56ev5YiG5o+Q5LqkdXJsXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBVc2VyTWFuYWdlclxuICAgICAqL1xuICAgIFBvc3RVcmw6c3RyaW5nPVwiaHR0cDovL3Rlc3QueWFsaXhpbmxpLmNvbTo5MzE4L2JyYWluL2dhbWUvc2F2ZVwiO1xuXG4gICAgLyoqXG4gICAgICog5b2T5YmN5ri45oiP57yW5Y+3XG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBVc2VyTWFuYWdlclxuICAgICAqL1xuICAgIEdhbWVDb2RlOnN0cmluZz1cIkJSQUlOX0dBTUVfQ09OU1RFTExBVElPTlwiO1xuXG5cbiAgICAvKipcbiAgICAgKiAgVG9rZW5cbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFVzZXJNYW5hZ2VyXG4gICAgICovXG4gICAgVmVyaWZpY2F0aW9uVG9rZW46c3RyaW5nPVwiXCI7XG5cbiAgICAvKipcbiAgICAgKiDlvZPliY3mmJ/luqfluo/lj7dcbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIFVzZXJNYW5hZ2VyXG4gICAgICovXG4gICAgQ3VycmVudENvbnN0ZWxsYXRpb25OdW1iZXI6bnVtYmVyPTA7XG5cblxuICAgIC8qKlxuICAgICAqIOW9k+WJjeaYn+aYn+aVsOmHj1xuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgVXNlck1hbmFnZXJcbiAgICAgKi9cbiAgICBDdXJyZW50U3Rhck51bWJlcjpudW1iZXI9MDtcblxuICAgIC8qKlxuICAgICAqIOS4iuS8oOeahOS4k+azqOW6puW+l+WIhlxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgVXNlck1hbmFnZXJcbiAgICAgKi9cbiAgICBDdXJyZW50QWJzb3JiZWRTY29yZTpudW1iZXI9MDtcblxuXG4gICAgUG9zdFJlc3VsdE1vZGVsOlBvc3RSZXN1bHRNb2RlbD1udWxsO1xuICAgIHN0YXJ0KCl7XG4gICAgICAgIC8v5Yid5aeL5YyW5ou/5YiwVG9rZW5cbiAgICAgICAgdGhpcy5WZXJpZmljYXRpb25Ub2tlbj1TdG9yYWdlVXRpbC5nZXREYXRhKFwiTE9HSU5fS0VZXCIsXCJIZWxsb1dvcmxkXCIpO1xuICAgIH1cblxuICAgIEluaXRQb3N0UmVzdWx0TW9kZWwoKXtcbiAgICAgICAgdGhpcy5Qb3N0UmVzdWx0TW9kZWw9bmV3IFBvc3RSZXN1bHRNb2RlbCgpO1xuICAgICAgICB0aGlzLlBvc3RSZXN1bHRNb2RlbC5kYXRhPVtdO1xuICAgICAgICB0aGlzLkN1cnJlbnRDb25zdGVsbGF0aW9uTnVtYmVyPTA7XG4gICAgICAgIHRoaXMuQ3VycmVudFN0YXJOdW1iZXI9MDtcbiAgICAgICAgdGhpcy5DdXJyZW50QWJzb3JiZWRTY29yZT0wO1xuICAgIH1cblxuICAgIFNlbmRSZXN1bHQoY2FsbGJhY2spe1xuICAgICAgICB0aGlzLlBvc3RSZXN1bHRNb2RlbC5nYW1lQ29kZT10aGlzLkdhbWVDb2RlO1xuICAgICAgICB0aGlzLlBvc3RSZXN1bHRNb2RlbC5maW5pc2hDb3VudD10aGlzLkN1cnJlbnRDb25zdGVsbGF0aW9uTnVtYmVyLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuUG9zdFJlc3VsdE1vZGVsLnN1YkNvdW50PXRoaXMuQ3VycmVudFN0YXJOdW1iZXIudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5Qb3N0UmVzdWx0TW9kZWwuYWJzb3JiZWRTY29yZT0gdGhpcy5DdXJyZW50QWJzb3JiZWRTY29yZS50b1N0cmluZygpO1xuXG4gICAgICAgIHRoaXMuUE9TVCh0aGlzLlBvc3RVcmwsdGhpcy5Qb3N0UmVzdWx0TW9kZWwsY2FsbGJhY2spO1xuICAgICAgICAvLyBKU09OLnBhcnNlKHJlc3BvbnNlKWFzIEJyYWluTW9kZWxcbiAgICAgICAgLy9KU09OLnN0cmluZ2lmeSh0aGlzLlBvc3RSZXN1bHRNb2RlbC5kYXRhKTtcbiAgICB9XG5cbiAgICBQT1NUKHVybCwgcGFyYW1zLCBjYWxsYmFjaykge1xuICAgICAgICAvLyBsZXQgZGF0YVN0ciA9ICcnO1xuICAgICAgICAvLyBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgLy8gICAgIGRhdGFTdHIgKz0ga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHBhcmFtc1trZXldKSArICcmJztcbiAgICAgICAgLy8gfSlcbiAgICAgICAgLy8gaWYgKGRhdGFTdHIgIT09ICcnKSB7XG4gICAgICAgIC8vICAgICBkYXRhU3RyID0gZGF0YVN0ci5zdWJzdHIoMCwgZGF0YVN0ci5sYXN0SW5kZXhPZignJicpKTtcbiAgICAgICAgLy8gICAgIHVybCA9IHVybCArICc/JyArIGRhdGFTdHI7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gdXJsID0gSHR0cFV0aWwuYmFzZVVybCArIHVybDtcblxuICAgICAgICBsZXQgeGhyID0gY2MubG9hZGVyLmdldFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvcGxhaW47Y2hhcnNldD1VVEYtOFwiKTtcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLThcIik7XG5cbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJUb2tlblwiLCB0aGlzLlZlcmlmaWNhdGlvblRva2VuKTtcblxuICAgICAgICBcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGh0dHBTdGF0dXMgPSB4aHIuc3RhdHVzVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FsbGJhY2sodHJ1ZSwgSlNPTi5wYXJzZShyZXNwb25zZSkpO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHhoci50aW1lb3V0ID0gNTAwMDA7XG4gICAgICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xuICAgIH1cbn1cblxuLypEYXRhKi9cbmV4cG9ydCBjbGFzcyBQb3N0UmVzdWx0RGF0YSB7XG4gICAgZGVsdGE6IHN0cmluZztcbiAgICB0aGV0YTogc3RyaW5nO1xuICAgIGxvd0FscGhhOiBzdHJpbmc7XG4gICAgaGlnaEFscGhhOiBzdHJpbmc7XG4gICAgbG93QmV0YTogc3RyaW5nO1xuICAgIGhpZ2hCZXRhOiBzdHJpbmc7XG4gICAgbG93R2FtbWE6IHN0cmluZztcbiAgICBoaWdoR2FtbWE6IHN0cmluZztcbiAgICByZWxheGF0aW9uOiBzdHJpbmc7XG4gICAgY29uY2VudHJhdGlvbjogc3RyaW5nO1xuICB9XG4gIFxuICAvKnRzTW9kZWwxKi9cbiAgZXhwb3J0IGNsYXNzIFBvc3RSZXN1bHRNb2RlbCB7XG4gICAgc3RhcnRUaW1lOiBzdHJpbmc7XG4gICAgZW5kVGltZTogc3RyaW5nO1xuICAgIGdhbWVDb2RlOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICog5pyA57uI5pif5bqn5b6X5YiGXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBQb3N0UmVzdWx0TW9kZWxcbiAgICAgKi9cbiAgICBmaW5pc2hDb3VudDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIOeCueS6ruaYn+aYn+aVsOmHj1xuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgUG9zdFJlc3VsdE1vZGVsXG4gICAgICovXG4gICAgc3ViQ291bnQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiDmnIDlkI7orqHnrpfkuJPms6jluqbnmoTlvpfliIZcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFBvc3RSZXN1bHRNb2RlbFxuICAgICAqL1xuICAgIGFic29yYmVkU2NvcmU6c3RyaW5nO1xuICAgIGRhdGE6IFBvc3RSZXN1bHREYXRhW107XG4gIH1cbiAgIl19