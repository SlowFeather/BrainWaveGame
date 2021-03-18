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