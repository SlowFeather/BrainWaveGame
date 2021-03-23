"use strict";
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