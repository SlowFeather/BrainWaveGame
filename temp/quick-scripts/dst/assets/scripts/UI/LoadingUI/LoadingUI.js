
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/UI/LoadingUI/LoadingUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8a7f0pfkzRJ95qvxDJ8ycLN', 'LoadingUI');
// scripts/UI/LoadingUI/LoadingUI.ts

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
var UIDef_1 = require("../../Def/UIDef");
var ResUtil_1 = require("../../Tools/ResUtil");
var UIUtil_1 = require("../../Tools/UIUtil");
var TableReader_1 = require("../../Tools/TableReader");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingUI = /** @class */ (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 进度条
         *
         * @type {cc.ProgressBar}
         * @memberof LoadingUI
         */
        _this.loadbar_progressbar = null;
        /**
         * 当前进度
         *
         * @type {cc.Label}
         * @memberof LoadingUI
         */
        _this.loadbar_txt = null;
        /**
         * 进度条进度
         *
         * @memberof LoadingUI
         */
        _this._processingValue = 0;
        /**
         * 进度条动画进度
         *
         * @memberof LoadingUI
         */
        _this._processingTweenValue = 0;
        return _this;
    }
    LoadingUI.prototype.start = function () {
        this.LoadAssets();
    };
    LoadingUI.prototype.LoadAssets = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this._processingValue = 0;
                //先加载表
                this.LoadTable();
                this.LoadRes();
                return [2 /*return*/];
            });
        });
    };
    LoadingUI.prototype.LoadRes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //加载所有UIPrefabs
                    return [4 /*yield*/, ResUtil_1.default.LoadDir("prefabs/ui", function (assets) {
                            // console.log(assets);
                            assets.forEach(function (element) {
                                //console.log(element.name);
                                ResUtil_1.default.ResDictionary[element.name] = element;
                                //cc.instantiate(element);
                            });
                            _this._processingValue += 10;
                            console.log("-->所有UIPrefabs加载完毕,共有" + assets.length + "个");
                        })];
                    case 1:
                        //加载所有UIPrefabs
                        _a.sent();
                        //加载所有GamePrefabs
                        return [4 /*yield*/, ResUtil_1.default.LoadDir("prefabs/game", function (assets) {
                                assets.forEach(function (element) {
                                    ResUtil_1.default.ResDictionary[element.name] = element;
                                });
                                _this._processingValue += 10;
                                console.log("-->所有GamePrefabs加载完毕,共有" + assets.length + "个");
                            })];
                    case 2:
                        //加载所有GamePrefabs
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    //表占80%
    LoadingUI.prototype.LoadTable = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tables, tableCount, i;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tables = this.getFilesByPath('StaticDatas/', cc.TextAsset);
                        tableCount = tables.length;
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < tableCount)) return [3 /*break*/, 4];
                        return [4 /*yield*/, TableReader_1.PreLoadCsvSync(tables[i], function (ret) {
                                if (ret) {
                                    _this._processingValue += (1 / tableCount) * 80;
                                }
                                else {
                                    console.log("Load Table Error!");
                                }
                                // this._processingValue += (1 / tableCount) * 100/tableCount;
                            })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // AnimSubpackSuccessfully(err){
    //     console.log(this)
    //     if (err) {
    //         return console.error(err);
    //     }
    //     console.log('load anim subpack successfully.');
    //     this._processingValue += 10;
    // }
    LoadingUI.prototype.ShowStartUI = function () {
        //显示开始界面
        // console.log(SoundTableData.getById(1));
        // console.log(SoundTableData.getById(1).path);
        // let asset = cc.loader.getRes("StaticDatas/DescribeTableData", cc.TextAsset);
        // console.dir(asset);
        UIUtil_1.default.ShowUI(UIDef_1.UIDef.StartUI, function () {
            UIUtil_1.default.RemoveUI(UIDef_1.UIDef.LoadingUI);
        });
        // this.InitData();
    };
    LoadingUI.prototype.update = function (dt) {
        if (this._processingTweenValue < this._processingValue) {
            //限制速度
            if (this._processingValue - this._processingTweenValue > 20) {
                this._processingTweenValue += 1.2;
            }
            else {
                this._processingTweenValue += 0.8;
            }
            if (this._processingTweenValue >= 100) {
                console.log("-->所有资源加载完毕");
                this.ShowStartUI();
                return;
            }
            this.loadbar_progressbar.progress = this._processingTweenValue / 100;
            this.loadbar_txt.string = "加载进度：" + Math.ceil(this._processingTweenValue) + "%";
        }
    };
    LoadingUI.prototype.getFilesByPath = function (url, type) {
        url = url || '';
        var urls = [];
        var assetTables = cc.loader['_assetTables'];
        var uuids = assetTables['assets']['getUuidArray'](url, type, urls);
        return urls;
    };
    __decorate([
        property({
            type: cc.ProgressBar,
            tooltip: "进度条"
        })
    ], LoadingUI.prototype, "loadbar_progressbar", void 0);
    __decorate([
        property({
            type: cc.Label,
            tooltip: "当前进度"
        })
    ], LoadingUI.prototype, "loadbar_txt", void 0);
    LoadingUI = __decorate([
        ccclass
    ], LoadingUI);
    return LoadingUI;
}(cc.Component));
exports.default = LoadingUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlcXExvYWRpbmdVSVxcTG9hZGluZ1VJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBS3hDLCtDQUEwQztBQUUxQyw2Q0FBd0M7QUFFeEMsdURBQXlEO0FBRW5ELElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFEbkQ7UUFBQSxxRUFnSkM7UUE3SUc7Ozs7O1dBS0c7UUFLSCx5QkFBbUIsR0FBbUIsSUFBSSxDQUFDO1FBRzNDOzs7OztXQUtHO1FBS0gsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFJN0I7Ozs7V0FJRztRQUNILHNCQUFnQixHQUFHLENBQUMsQ0FBQztRQUVyQjs7OztXQUlHO1FBQ0gsMkJBQXFCLEdBQUcsQ0FBQyxDQUFDOztJQXNHOUIsQ0FBQztJQW5HRyx5QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDSyw4QkFBVSxHQUFoQjs7O2dCQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7Z0JBQzFCLE1BQU07Z0JBQ04sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Ozs7S0FDbEI7SUFDSywyQkFBTyxHQUFiOzs7Ozs7b0JBQ0ksZUFBZTtvQkFDZixxQkFBTSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsVUFBQyxNQUFNOzRCQUN2Qyx1QkFBdUI7NEJBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO2dDQUNsQiw0QkFBNEI7Z0NBQzVCLGlCQUFPLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7Z0NBQzlDLDBC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LEdBQUcsR0FBRyxDQUFBO1lBQ3BFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLEdBQUcsQ0FBQTtTQUNsRjtJQUNMLENBQUM7SUFDRCxrQ0FBYyxHQUFkLFVBQWUsR0FBRyxFQUFFLElBQUk7UUFDcEIsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDaEIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUM1QyxJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuRSxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBbElEO1FBSkMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxXQUFXO1lBQ3BCLE9BQU8sRUFBRSxLQUFLO1NBQ2pCLENBQUM7MERBQ3lDO0lBYTNDO1FBSkMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxLQUFLO1lBQ2QsT0FBTyxFQUFFLE1BQU07U0FDbEIsQ0FBQztrREFDMkI7SUF6QlosU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQStJN0I7SUFBRCxnQkFBQztDQS9JRCxBQStJQyxDQS9Jc0MsRUFBRSxDQUFDLFNBQVMsR0ErSWxEO2tCQS9Jb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVJRGVmIH0gZnJvbSBcIi4uLy4uL0RlZi9VSURlZlwiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4uLy4uL0dhbWVcIjtcbmltcG9ydCBTb3VuZE1hbmFnZXIgZnJvbSBcIi4uLy4uL01hbmFnZXIvU291bmRNYW5hZ2VyXCI7XG5cblxuaW1wb3J0IFJlc1V0aWwgZnJvbSBcIi4uLy4uL1Rvb2xzL1Jlc1V0aWxcIjtcbmltcG9ydCB7IFRpbWVVdGlsIH0gZnJvbSBcIi4uLy4uL1Rvb2xzL1RpbWVVdGlsXCI7XG5pbXBvcnQgVUlVdGlsIGZyb20gXCIuLi8uLi9Ub29scy9VSVV0aWxcIjtcbmltcG9ydCB7IFNvdW5kVGFibGVEYXRhIH0gZnJvbSBcIi4uLy4uL1N0YXRpY0RhdGFzL1NvdW5kVGFibGVEYXRhXCI7XG5pbXBvcnQgeyBQcmVMb2FkQ3N2U3luYyB9IGZyb20gXCIuLi8uLi9Ub29scy9UYWJsZVJlYWRlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZ1VJIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIC8qKlxuICAgICAqIOi/m+W6puadoVxuICAgICAqXG4gICAgICogQHR5cGUge2NjLlByb2dyZXNzQmFyfVxuICAgICAqIEBtZW1iZXJvZiBMb2FkaW5nVUlcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5Qcm9ncmVzc0JhcixcbiAgICAgICAgdG9vbHRpcDogXCLov5vluqbmnaFcIlxuICAgIH0pXG4gICAgbG9hZGJhcl9wcm9ncmVzc2JhcjogY2MuUHJvZ3Jlc3NCYXIgPSBudWxsO1xuXG5cbiAgICAvKipcbiAgICAgKiDlvZPliY3ov5vluqZcbiAgICAgKlxuICAgICAqIEB0eXBlIHtjYy5MYWJlbH1cbiAgICAgKiBAbWVtYmVyb2YgTG9hZGluZ1VJXG4gICAgICovXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgIHRvb2x0aXA6IFwi5b2T5YmN6L+b5bqmXCJcbiAgICB9KVxuICAgIGxvYWRiYXJfdHh0OiBjYy5MYWJlbCA9IG51bGw7XG5cblxuXG4gICAgLyoqXG4gICAgICog6L+b5bqm5p2h6L+b5bqmXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgTG9hZGluZ1VJXG4gICAgICovXG4gICAgX3Byb2Nlc3NpbmdWYWx1ZSA9IDA7XG5cbiAgICAvKipcbiAgICAgKiDov5vluqbmnaHliqjnlLvov5vluqZcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBMb2FkaW5nVUlcbiAgICAgKi9cbiAgICBfcHJvY2Vzc2luZ1R3ZWVuVmFsdWUgPSAwO1xuXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5Mb2FkQXNzZXRzKCk7XG4gICAgfVxuICAgIGFzeW5jIExvYWRBc3NldHMoKSB7XG4gICAgICAgIHRoaXMuX3Byb2Nlc3NpbmdWYWx1ZSA9IDA7XG4gICAgICAgIC8v5YWI5Yqg6L296KGoXG4gICAgICAgIHRoaXMuTG9hZFRhYmxlKCk7XG4gICAgICAgIHRoaXMuTG9hZFJlcygpO1xuICAgIH1cbiAgICBhc3luYyBMb2FkUmVzKCkge1xuICAgICAgICAvL+WKoOi9veaJgOaciVVJUHJlZmFic1xuICAgICAgICBhd2FpdCBSZXNVdGlsLkxvYWREaXIoXCJwcmVmYWJzL3VpXCIsIChhc3NldHMpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFzc2V0cyk7XG4gICAgICAgICAgICBhc3NldHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGVsZW1lbnQubmFtZSk7XG4gICAgICAgICAgICAgICAgUmVzVXRpbC5SZXNEaWN0aW9uYXJ5W2VsZW1lbnQubmFtZV0gPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIC8vY2MuaW5zdGFudGlhdGUoZWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NpbmdWYWx1ZSArPSAxMDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0+5omA5pyJVUlQcmVmYWJz5Yqg6L295a6M5q+VLOWFseaciVwiICsgYXNzZXRzLmxlbmd0aCArIFwi5LiqXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL+WKoOi9veaJgOaciUdhbWVQcmVmYWJzXG4gICAgICAgIGF3YWl0IFJlc1V0aWwuTG9hZERpcihcInByZWZhYnMvZ2FtZVwiLCAoYXNzZXRzKSA9PiB7XG4gICAgICAgICAgICBhc3NldHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBSZXNVdGlsLlJlc0RpY3Rpb25hcnlbZWxlbWVudC5uYW1lXSA9IGVsZW1lbnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NpbmdWYWx1ZSArPSAxMDtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiLS0+5omA5pyJR2FtZVByZWZhYnPliqDovb3lrozmr5Us5YWx5pyJXCIgKyBhc3NldHMubGVuZ3RoICsgXCLkuKpcIik7XG5cbiAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgLy/ooajljaA4MCVcbiAgICBhc3luYyBMb2FkVGFibGUoKSB7XG4gICAgICAgIGxldCB0YWJsZXMgPSB0aGlzLmdldEZpbGVzQnlQYXRoKCdTdGF0aWNEYXRhcy8nLCBjYy5UZXh0QXNzZXQpO1xuICAgICAgICBsZXQgdGFibGVDb3VudCA9IHRhYmxlcy5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFibGVDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBhd2FpdCBQcmVMb2FkQ3N2U3luYyh0YWJsZXNbaV0sIChyZXQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmV0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NpbmdWYWx1ZSArPSAoMSAvIHRhYmxlQ291bnQpICogODA7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2FkIFRhYmxlIEVycm9yIVwiKTtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHRoaXMuX3Byb2Nlc3NpbmdWYWx1ZSArPSAoMSAvIHRhYmxlQ291bnQpICogMTAwL3RhYmxlQ291bnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBBbmltU3VicGFja1N1Y2Nlc3NmdWxseShlcnIpe1xuICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzKVxuICAgIC8vICAgICBpZiAoZXJyKSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihlcnIpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdsb2FkIGFuaW0gc3VicGFjayBzdWNjZXNzZnVsbHkuJyk7XG4gICAgLy8gICAgIHRoaXMuX3Byb2Nlc3NpbmdWYWx1ZSArPSAxMDtcbiAgICAvLyB9XG5cbiAgICBTaG93U3RhcnRVSSgpIHtcblxuICAgICAgICAvL+aYvuekuuW8gOWni+eVjOmdolxuICAgICAgICAvLyBjb25zb2xlLmxvZyhTb3VuZFRhYmxlRGF0YS5nZXRCeUlkKDEpKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhTb3VuZFRhYmxlRGF0YS5nZXRCeUlkKDEpLnBhdGgpO1xuICAgICAgICAvLyBsZXQgYXNzZXQgPSBjYy5sb2FkZXIuZ2V0UmVzKFwiU3RhdGljRGF0YXMvRGVzY3JpYmVUYWJsZURhdGFcIiwgY2MuVGV4dEFzc2V0KTtcbiAgICAgICAgLy8gY29uc29sZS5kaXIoYXNzZXQpO1xuXG4gICAgICAgIFVJVXRpbC5TaG93VUkoVUlEZWYuU3RhcnRVSSwgKCkgPT4ge1xuICAgICAgICAgICAgVUlVdGlsLlJlbW92ZVVJKFVJRGVmLkxvYWRpbmdVSSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHRoaXMuSW5pdERhdGEoKTtcbiAgICB9XG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLl9wcm9jZXNzaW5nVHdlZW5WYWx1ZSA8IHRoaXMuX3Byb2Nlc3NpbmdWYWx1ZSkge1xuICAgICAgICAgICAgLy/pmZDliLbpgJ/luqZcbiAgICAgICAgICAgIGlmICh0aGlzLl9wcm9jZXNzaW5nVmFsdWUgLSB0aGlzLl9wcm9jZXNzaW5nVHdlZW5WYWx1ZSA+IDIwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc2luZ1R3ZWVuVmFsdWUgKz0gMS4yO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9jZXNzaW5nVHdlZW5WYWx1ZSArPSAwLjg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9wcm9jZXNzaW5nVHdlZW5WYWx1ZSA+PSAxMDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tPuaJgOaciei1hOa6kOWKoOi9veWujOavlVwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLlNob3dTdGFydFVJKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb2FkYmFyX3Byb2dyZXNzYmFyLnByb2dyZXNzID0gdGhpcy5fcHJvY2Vzc2luZ1R3ZWVuVmFsdWUgLyAxMDBcbiAgICAgICAgICAgIHRoaXMubG9hZGJhcl90eHQuc3RyaW5nID0gXCLliqDovb3ov5vluqbvvJpcIiArIE1hdGguY2VpbCh0aGlzLl9wcm9jZXNzaW5nVHdlZW5WYWx1ZSkgKyBcIiVcIlxuICAgICAgICB9XG4gICAgfVxuICAgIGdldEZpbGVzQnlQYXRoKHVybCwgdHlwZSkge1xuICAgICAgICB1cmwgPSB1cmwgfHwgJyc7XG4gICAgICAgIHZhciB1cmxzID0gW107XG4gICAgICAgIHZhciBhc3NldFRhYmxlcyA9IGNjLmxvYWRlclsnX2Fzc2V0VGFibGVzJ107XG4gICAgICAgIHZhciB1dWlkcyA9IGFzc2V0VGFibGVzWydhc3NldHMnXVsnZ2V0VXVpZEFycmF5J10odXJsLCB0eXBlLCB1cmxzKTtcbiAgICAgICAgcmV0dXJuIHVybHM7XG4gICAgfVxufVxuIl19