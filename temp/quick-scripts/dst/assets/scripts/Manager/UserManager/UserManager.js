
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UserManager = /** @class */ (function (_super) {
    __extends(UserManager, _super);
    function UserManager() {
        var _this = _super.call(this) || this;
        //#endregion
        // host:string="http://127.0.0.1:8090";
        // param:any={};
        /**
         * 当前星座序号
         *
         * @type {number}
         * @memberof UserManager
         */
        _this.CurrentConstellationNumber = 0;
        return _this;
    }
    UserManager_1 = UserManager;
    UserManager.prototype.onLoad = function () {
        UserManager_1.Instance = this;
    };
    var UserManager_1;
    UserManager = UserManager_1 = __decorate([
        ccclass
    ], UserManager);
    return UserManager;
}(cc.Component));
exports.default = UserManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTWFuYWdlclxcVXNlck1hbmFnZXJcXFVzZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlNLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBeUMsK0JBQVk7SUFJakQ7UUFBQSxZQUFnQixpQkFBTyxTQUFHO1FBSTlCLFlBQVk7UUFFUix1Q0FBdUM7UUFDdkMsZ0JBQWdCO1FBRWhCOzs7OztXQUtHO1FBQ0gsZ0NBQTBCLEdBQVEsQ0FBQyxDQUFDOztJQWZYLENBQUM7b0JBSlQsV0FBVztJQUs1Qiw0QkFBTSxHQUFOO1FBQ0ksYUFBVyxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7SUFDOUIsQ0FBQzs7SUFQZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQXVCL0I7SUFBRCxrQkFBQztDQXZCRCxBQXVCQyxDQXZCd0MsRUFBRSxDQUFDLFNBQVMsR0F1QnBEO2tCQXZCb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1lc3NhZ2VEZWYgfSBmcm9tIFwiLi4vLi4vRGVmL01lc3NhZ2VEZWZcIjtcbmltcG9ydCB7IEh0dHBVdGlsIH0gZnJvbSBcIi4uLy4uL1Rvb2xzL0hUVFBVdGlsXCI7XG5pbXBvcnQgTWVzc2FnZURpc3BhdGNoZXIgZnJvbSBcIi4uL01lc3NhZ2VEaXNwYXRjaGVyL01lc3NhZ2VEaXNwYXRjaGVyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlck1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4vLyNyZWdpb24gSW5zdGFuY2VcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlOiBVc2VyTWFuYWdlcjtcbiAgICBjb25zdHJ1Y3RvcigpIHsgc3VwZXIoKTsgfVxuICAgIG9uTG9hZCgpOnZvaWR7XG4gICAgICAgIFVzZXJNYW5hZ2VyLkluc3RhbmNlPXRoaXM7XG4gICAgfVxuLy8jZW5kcmVnaW9uXG5cbiAgICAvLyBob3N0OnN0cmluZz1cImh0dHA6Ly8xMjcuMC4wLjE6ODA5MFwiO1xuICAgIC8vIHBhcmFtOmFueT17fTtcblxuICAgIC8qKlxuICAgICAqIOW9k+WJjeaYn+W6p+W6j+WPt1xuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgVXNlck1hbmFnZXJcbiAgICAgKi9cbiAgICBDdXJyZW50Q29uc3RlbGxhdGlvbk51bWJlcjpudW1iZXI9MDtcblxuXG5cbn1cbiAgIl19