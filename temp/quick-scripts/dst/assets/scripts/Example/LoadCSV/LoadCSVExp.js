
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Example/LoadCSV/LoadCSVExp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '01af7x8cchKe5iApv4VdIHr', 'LoadCSVExp');
// scripts/Example/LoadCSV/LoadCSVExp.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var SoundTableData_1 = require("../../StaticDatas/SoundTableData");
var TableReader_1 = require("../../Tools/TableReader");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadCSVExp = /** @class */ (function (_super) {
    __extends(LoadCSVExp, _super);
    function LoadCSVExp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isLoaded = false;
        return _this;
        // showTableData() {
        //     let itemData = ItemTableData.getById(1);
        //     let id = configValueManager.getConfigIntValue('id');
        //     let str = configValueManager.getConfigStringValue('name');
        //     let sceneData = SceneTableData.getById(1);
        //     console.log(sceneData)
        //     console.log(sceneData.str)
        // }
        // update (dt) {}
    }
    LoadCSVExp.prototype.start = function () {
        //先写个idl然后拖拽到Serialization.exe上，会生成一个ts一个csv，一个cpp一个h，cpp和h文件删掉
        //csv放入resources下的StaticDatas下
        this.loadSceneTable();
        // PreLoadCsvSync('ItemTableData');
        // PreLoadCsvSync('SoundTableData');
        // PreLoadCsvSync('SceneTableData');
        //延迟5s执行
        //this.scheduleOnce(this.showTableData, 5);
    };
    LoadCSVExp.prototype.loadSceneTable = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("hehh");
                        //读取静态数据表
                        return [4 /*yield*/, TableReader_1.PreLoadCsvSync('staticdatas/SoundTableData', function () {
                                _this.loadedSceneTable();
                            })];
                    case 1:
                        //读取静态数据表
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoadCSVExp.prototype.loadedSceneTable = function () {
        var sceneData = SoundTableData_1.SoundTableData.getById(1).path;
        console.log(sceneData);
    };
    LoadCSVExp = __decorate([
        ccclass
    ], LoadCSVExp);
    return LoadCSVExp;
}(cc.Component));
exports.default = LoadCSVExp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRXhhbXBsZVxcTG9hZENTVlxcTG9hZENTVkV4cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1FQUFrRTtBQUNsRSx1REFBeUQ7QUFFbkQsSUFBQSxrQkFBcUMsRUFBbkMsb0JBQU8sRUFBRSxzQkFBMEIsQ0FBQztBQUk1QztJQUF3Qyw4QkFBWTtJQURwRDtRQUFBLHFFQThDQztRQTNDVSxjQUFRLEdBQVksS0FBSyxDQUFDOztRQThCakMsb0JBQW9CO1FBQ3BCLCtDQUErQztRQUUvQywyREFBMkQ7UUFDM0QsaUVBQWlFO1FBSWpFLGlEQUFpRDtRQUNqRCw2QkFBNkI7UUFDN0IsaUNBQWlDO1FBQ2pDLElBQUk7UUFDSixpQkFBaUI7SUFDckIsQ0FBQztJQTFDRywwQkFBSyxHQUFMO1FBQ0ksK0RBQStEO1FBQy9ELDhCQUE4QjtRQUU5QixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7UUFFckIsbUNBQW1DO1FBQ25DLG9DQUFvQztRQUNwQyxvQ0FBb0M7UUFFcEMsUUFBUTtRQUNSLDJDQUEyQztJQUMvQyxDQUFDO0lBRUssbUNBQWMsR0FBcEI7Ozs7Ozt3QkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFBO3dCQUNuQixTQUFTO3dCQUNULHFCQUFNLDRCQUFjLENBQUMsNEJBQTRCLEVBQUM7Z0NBQzlDLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBOzRCQUMzQixDQUFDLENBQUMsRUFBQTs7d0JBSEYsU0FBUzt3QkFDVCxTQUVFLENBQUM7Ozs7O0tBRU47SUFFRCxxQ0FBZ0IsR0FBaEI7UUFDSSxJQUFJLFNBQVMsR0FBRywrQkFBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUMxQixDQUFDO0lBN0JnQixVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBNkM5QjtJQUFELGlCQUFDO0NBN0NELEFBNkNDLENBN0N1QyxFQUFFLENBQUMsU0FBUyxHQTZDbkQ7a0JBN0NvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU291bmRUYWJsZURhdGEgfSBmcm9tIFwiLi4vLi4vU3RhdGljRGF0YXMvU291bmRUYWJsZURhdGFcIjtcclxuaW1wb3J0IHsgUHJlTG9hZENzdlN5bmMgfSBmcm9tIFwiLi4vLi4vVG9vbHMvVGFibGVSZWFkZXJcIjtcclxuXHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG4gXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRDU1ZFeHAgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gXHJcbiAgICBwdWJsaWMgaXNMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIC8v5YWI5YaZ5LiqaWRs54S25ZCO5ouW5ou95YiwU2VyaWFsaXphdGlvbi5leGXkuIrvvIzkvJrnlJ/miJDkuIDkuKp0c+S4gOS4qmNzdu+8jOS4gOS4qmNwcOS4gOS4qmjvvIxjcHDlkoxo5paH5Lu25Yig5o6JXHJcbiAgICAgICAgLy9jc3bmlL7lhaVyZXNvdXJjZXPkuIvnmoRTdGF0aWNEYXRhc+S4i1xyXG4gXHJcbiAgICAgICAgdGhpcy5sb2FkU2NlbmVUYWJsZSgpXHJcbiBcclxuICAgICAgICAvLyBQcmVMb2FkQ3N2U3luYygnSXRlbVRhYmxlRGF0YScpO1xyXG4gICAgICAgIC8vIFByZUxvYWRDc3ZTeW5jKCdTb3VuZFRhYmxlRGF0YScpO1xyXG4gICAgICAgIC8vIFByZUxvYWRDc3ZTeW5jKCdTY2VuZVRhYmxlRGF0YScpO1xyXG4gXHJcbiAgICAgICAgLy/lu7bov581c+aJp+ihjFxyXG4gICAgICAgIC8vdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5zaG93VGFibGVEYXRhLCA1KTtcclxuICAgIH1cclxuIFxyXG4gICAgYXN5bmMgbG9hZFNjZW5lVGFibGUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoZWhoXCIpXHJcbiAgICAgICAgLy/or7vlj5bpnZnmgIHmlbDmja7ooahcclxuICAgICAgICBhd2FpdCBQcmVMb2FkQ3N2U3luYygnc3RhdGljZGF0YXMvU291bmRUYWJsZURhdGEnLCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVkU2NlbmVUYWJsZSgpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiBcclxuICAgIGxvYWRlZFNjZW5lVGFibGUoKSB7XHJcbiAgICAgICAgbGV0IHNjZW5lRGF0YSA9IFNvdW5kVGFibGVEYXRhLmdldEJ5SWQoMSkucGF0aDtcclxuICAgICAgICBjb25zb2xlLmxvZyhzY2VuZURhdGEpXHJcbiAgICB9XHJcbiBcclxuIFxyXG4gICAgLy8gc2hvd1RhYmxlRGF0YSgpIHtcclxuICAgIC8vICAgICBsZXQgaXRlbURhdGEgPSBJdGVtVGFibGVEYXRhLmdldEJ5SWQoMSk7XHJcbiBcclxuICAgIC8vICAgICBsZXQgaWQgPSBjb25maWdWYWx1ZU1hbmFnZXIuZ2V0Q29uZmlnSW50VmFsdWUoJ2lkJyk7XHJcbiAgICAvLyAgICAgbGV0IHN0ciA9IGNvbmZpZ1ZhbHVlTWFuYWdlci5nZXRDb25maWdTdHJpbmdWYWx1ZSgnbmFtZScpO1xyXG4gXHJcbiBcclxuIFxyXG4gICAgLy8gICAgIGxldCBzY2VuZURhdGEgPSBTY2VuZVRhYmxlRGF0YS5nZXRCeUlkKDEpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHNjZW5lRGF0YSlcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhzY2VuZURhdGEuc3RyKVxyXG4gICAgLy8gfVxyXG4gICAgLy8gdXBkYXRlIChkdCkge31cclxufVxyXG4gXHJcbiJdfQ==