
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
                            assets.forEach(function (element) {
                                ResUtil_1.default.ResDictionary[element.name] = element;
                            });
                            _this._processingValue += 10;
                            console.log("-->所有UIPrefabs加载完毕,共有" + assets.length + "个");
                        }, function () {
                            console.log("-->加载UIPrefabs出现问题");
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
                            }, function () {
                                console.log("-->加载GamePrefabs出现问题");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVUlcXExvYWRpbmdVSVxcTG9hZGluZ1VJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQXdDO0FBS3hDLCtDQUEwQztBQUUxQyw2Q0FBd0M7QUFFeEMsdURBQXlEO0FBRW5ELElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFBdUMsNkJBQVk7SUFEbkQ7UUFBQSxxRUFzSUM7UUFuSUc7Ozs7O1dBS0c7UUFLSCx5QkFBbUIsR0FBbUIsSUFBSSxDQUFDO1FBRzNDOzs7OztXQUtHO1FBS0gsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFJN0I7Ozs7V0FJRztRQUNILHNCQUFnQixHQUFHLENBQUMsQ0FBQztRQUVyQjs7OztXQUlHO1FBQ0gsMkJBQXFCLEdBQUcsQ0FBQyxDQUFDOztJQTRGOUIsQ0FBQztJQXpGRyx5QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDSyw4QkFBVSxHQUFoQjs7O2dCQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7Z0JBQzFCLE1BQU07Z0JBQ04sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Ozs7S0FDbEI7SUFDSywyQkFBTyxHQUFiOzs7Ozs7b0JBQ0ksZUFBZTtvQkFDZixxQkFBTSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsVUFBQyxNQUFNOzRCQUN2QyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztnQ0FDbEIsaUJBQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQzs0QkFDbEQsQ0FBQyxDQUFDLENBQUM7NEJBQ0gsS0FBSSxDQUFDLGdCQUFnQixJQUFJLEVBQUUsQ0FBQzs0QkFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDO3dCQUMvRCxDQUFDLEVBQUM7NEJBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO3dCQUN0QyxDQUFDLENBQUMsRUFBQTs7d0JBVEYsZUFBZTt3QkFDZixTQVFFLENBQUM7d0JBRUgsaUJBQWlCO3dCQUNqQixxQkFBTSxpQkFBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsVUFBQyxNQUFNO2dDQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztvQ0FDbEIsaUJBQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQztnQ0FDbEQsQ0FBQyxDQUFDLENBQUM7Z0NBQ0gsS0FBSSxDQUFDLGdCQUFnQixJQUFJLEVBQUUsQ0FBQztnQ0FDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDOzRCQUVqRSxDQUFDLEVBQUM7Z0NBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOzRCQUN4QyxDQUFDLENBQUMsRUFBQTs7d0JBVkYsaUJBQWlCO3dCQUNqQixTQVNFLENBQUM7Ozs7O0tBRU47SUFDRCxPQUFPO0lBQ0QsNkJBQVMsR0FBZjs7Ozs7Ozt3QkFDUSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUMzRCxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQzt3QkFDdEIsQ0FBQyxHQUFHLENBQUM7Ozs2QkFBRSxDQUFBLENBQUMsR0FBRyxVQUFVLENBQUE7d0JBQzFCLHFCQUFNLDRCQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLFVBQUMsR0FBRztnQ0FDaEMsSUFBSSxHQUFHLEVBQUU7b0NBQ0wsS0FBSSxDQUFDLGdCQUFnQixJQUFJLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQ0FDbEQ7cUNBQU07b0NBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO2lDQUNwQzs0QkFDTCxDQUFDLENBQUMsRUFBQTs7d0JBTkYsU0FNRSxDQUFDOzs7d0JBUHlCLENBQUMsRUFBRSxDQUFBOzs7Ozs7S0FTdEM7SUFFRCwrQkFBVyxHQUFYO1FBRUksUUFBUTtRQUNSLDBDQUEwQztRQUUxQywrQ0FBK0M7UUFDL0MsK0VBQStFO1FBQy9FLHNCQUFzQjtRQUV0QixnQkFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3pCLGdCQUFNLENBQUMsUUFBUSxDQUFDLGFBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztRQUVILG1CQUFtQjtJQUN2QixDQUFDO0lBQ0QsMEJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDcEQsTUFBTTtZQUNOLElBQUksSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxFQUFFLEVBQUU7Z0JBQ3pELElBQUksQ0FBQyxxQkFBcUIsSUFBSSxHQUFHLENBQUM7YUFDckM7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLHFCQUFxQixJQUFJLEdBQUcsQ0FBQzthQUNyQztZQUVELElBQUksSUFBSSxDQUFDLHFCQUFxQixJQUFJLEdBQUcsRUFBRTtnQkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNuQixPQUFPO2FBQ1Y7WUFDRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxHQUFHLENBQUE7WUFDcEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsR0FBRyxDQUFBO1NBQ2xGO0lBQ0wsQ0FBQztJQUNELGtDQUFjLEdBQWQsVUFBZSxHQUFHLEVBQUUsSUFBSTtRQUNwQixHQUFHLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQztRQUNoQixJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVDLElBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25FLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUF4SEQ7UUFKQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLFdBQVc7WUFDcEIsT0FBTyxFQUFFLEtBQUs7U0FDakIsQ0FBQzswREFDeUM7SUFhM0M7UUFKQyxRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLEtBQUs7WUFDZCxPQUFPLEVBQUUsTUFBTTtTQUNsQixDQUFDO2tEQUMyQjtJQXpCWixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBcUk3QjtJQUFELGdCQUFDO0NBcklELEFBcUlDLENBcklzQyxFQUFFLENBQUMsU0FBUyxHQXFJbEQ7a0JBcklvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUlEZWYgfSBmcm9tIFwiLi4vLi4vRGVmL1VJRGVmXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vLi4vR2FtZVwiO1xuaW1wb3J0IFNvdW5kTWFuYWdlciBmcm9tIFwiLi4vLi4vTWFuYWdlci9Tb3VuZE1hbmFnZXJcIjtcblxuXG5pbXBvcnQgUmVzVXRpbCBmcm9tIFwiLi4vLi4vVG9vbHMvUmVzVXRpbFwiO1xuaW1wb3J0IHsgVGltZVV0aWwgfSBmcm9tIFwiLi4vLi4vVG9vbHMvVGltZVV0aWxcIjtcbmltcG9ydCBVSVV0aWwgZnJvbSBcIi4uLy4uL1Rvb2xzL1VJVXRpbFwiO1xuaW1wb3J0IHsgU291bmRUYWJsZURhdGEgfSBmcm9tIFwiLi4vLi4vU3RhdGljRGF0YXMvU291bmRUYWJsZURhdGFcIjtcbmltcG9ydCB7IFByZUxvYWRDc3ZTeW5jIH0gZnJvbSBcIi4uLy4uL1Rvb2xzL1RhYmxlUmVhZGVyXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2FkaW5nVUkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICog6L+b5bqm5p2hXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Y2MuUHJvZ3Jlc3NCYXJ9XG4gICAgICogQG1lbWJlcm9mIExvYWRpbmdVSVxuICAgICAqL1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLlByb2dyZXNzQmFyLFxuICAgICAgICB0b29sdGlwOiBcIui/m+W6puadoVwiXG4gICAgfSlcbiAgICBsb2FkYmFyX3Byb2dyZXNzYmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XG5cblxuICAgIC8qKlxuICAgICAqIOW9k+WJjei/m+W6plxuICAgICAqXG4gICAgICogQHR5cGUge2NjLkxhYmVsfVxuICAgICAqIEBtZW1iZXJvZiBMb2FkaW5nVUlcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgdG9vbHRpcDogXCLlvZPliY3ov5vluqZcIlxuICAgIH0pXG4gICAgbG9hZGJhcl90eHQ6IGNjLkxhYmVsID0gbnVsbDtcblxuXG5cbiAgICAvKipcbiAgICAgKiDov5vluqbmnaHov5vluqZcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBMb2FkaW5nVUlcbiAgICAgKi9cbiAgICBfcHJvY2Vzc2luZ1ZhbHVlID0gMDtcblxuICAgIC8qKlxuICAgICAqIOi/m+W6puadoeWKqOeUu+i/m+W6plxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIExvYWRpbmdVSVxuICAgICAqL1xuICAgIF9wcm9jZXNzaW5nVHdlZW5WYWx1ZSA9IDA7XG5cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLkxvYWRBc3NldHMoKTtcbiAgICB9XG4gICAgYXN5bmMgTG9hZEFzc2V0cygpIHtcbiAgICAgICAgdGhpcy5fcHJvY2Vzc2luZ1ZhbHVlID0gMDtcbiAgICAgICAgLy/lhYjliqDovb3ooahcbiAgICAgICAgdGhpcy5Mb2FkVGFibGUoKTtcbiAgICAgICAgdGhpcy5Mb2FkUmVzKCk7XG4gICAgfVxuICAgIGFzeW5jIExvYWRSZXMoKSB7XG4gICAgICAgIC8v5Yqg6L295omA5pyJVUlQcmVmYWJzXG4gICAgICAgIGF3YWl0IFJlc1V0aWwuTG9hZERpcihcInByZWZhYnMvdWlcIiwgKGFzc2V0cykgPT4ge1xuICAgICAgICAgICAgYXNzZXRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgUmVzVXRpbC5SZXNEaWN0aW9uYXJ5W2VsZW1lbnQubmFtZV0gPSBlbGVtZW50O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLl9wcm9jZXNzaW5nVmFsdWUgKz0gMTA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tPuaJgOaciVVJUHJlZmFic+WKoOi9veWujOavlSzlhbHmnIlcIiArIGFzc2V0cy5sZW5ndGggKyBcIuS4qlwiKTtcbiAgICAgICAgfSwoKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLT7liqDovb1VSVByZWZhYnPlh7rnjrDpl67pophcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8v5Yqg6L295omA5pyJR2FtZVByZWZhYnNcbiAgICAgICAgYXdhaXQgUmVzVXRpbC5Mb2FkRGlyKFwicHJlZmFicy9nYW1lXCIsIChhc3NldHMpID0+IHtcbiAgICAgICAgICAgIGFzc2V0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIFJlc1V0aWwuUmVzRGljdGlvbmFyeVtlbGVtZW50Lm5hbWVdID0gZWxlbWVudDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc2luZ1ZhbHVlICs9IDEwO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCItLT7miYDmnIlHYW1lUHJlZmFic+WKoOi9veWujOavlSzlhbHmnIlcIiArIGFzc2V0cy5sZW5ndGggKyBcIuS4qlwiKTtcblxuICAgICAgICB9LCgpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0tPuWKoOi9vUdhbWVQcmVmYWJz5Ye6546w6Zeu6aKYXCIpO1xuICAgICAgICB9KTtcblxuICAgIH1cbiAgICAvL+ihqOWNoDgwJVxuICAgIGFzeW5jIExvYWRUYWJsZSgpIHtcbiAgICAgICAgbGV0IHRhYmxlcyA9IHRoaXMuZ2V0RmlsZXNCeVBhdGgoJ1N0YXRpY0RhdGFzLycsIGNjLlRleHRBc3NldCk7XG4gICAgICAgIGxldCB0YWJsZUNvdW50ID0gdGFibGVzLmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWJsZUNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGF3YWl0IFByZUxvYWRDc3ZTeW5jKHRhYmxlc1tpXSwgKHJldCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc2luZ1ZhbHVlICs9ICgxIC8gdGFibGVDb3VudCkgKiA4MDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvYWQgVGFibGUgRXJyb3IhXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgU2hvd1N0YXJ0VUkoKSB7XG5cbiAgICAgICAgLy/mmL7npLrlvIDlp4vnlYzpnaJcbiAgICAgICAgLy8gY29uc29sZS5sb2coU291bmRUYWJsZURhdGEuZ2V0QnlJZCgxKSk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coU291bmRUYWJsZURhdGEuZ2V0QnlJZCgxKS5wYXRoKTtcbiAgICAgICAgLy8gbGV0IGFzc2V0ID0gY2MubG9hZGVyLmdldFJlcyhcIlN0YXRpY0RhdGFzL0Rlc2NyaWJlVGFibGVEYXRhXCIsIGNjLlRleHRBc3NldCk7XG4gICAgICAgIC8vIGNvbnNvbGUuZGlyKGFzc2V0KTtcblxuICAgICAgICBVSVV0aWwuU2hvd1VJKFVJRGVmLlN0YXJ0VUksICgpID0+IHtcbiAgICAgICAgICAgIFVJVXRpbC5SZW1vdmVVSShVSURlZi5Mb2FkaW5nVUkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyB0aGlzLkluaXREYXRhKCk7XG4gICAgfVxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5fcHJvY2Vzc2luZ1R3ZWVuVmFsdWUgPCB0aGlzLl9wcm9jZXNzaW5nVmFsdWUpIHtcbiAgICAgICAgICAgIC8v6ZmQ5Yi26YCf5bqmXG4gICAgICAgICAgICBpZiAodGhpcy5fcHJvY2Vzc2luZ1ZhbHVlIC0gdGhpcy5fcHJvY2Vzc2luZ1R3ZWVuVmFsdWUgPiAyMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NpbmdUd2VlblZhbHVlICs9IDEuMjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc2luZ1R3ZWVuVmFsdWUgKz0gMC44O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5fcHJvY2Vzc2luZ1R3ZWVuVmFsdWUgPj0gMTAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCItLT7miYDmnInotYTmupDliqDovb3lrozmr5VcIik7XG4gICAgICAgICAgICAgICAgdGhpcy5TaG93U3RhcnRVSSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubG9hZGJhcl9wcm9ncmVzc2Jhci5wcm9ncmVzcyA9IHRoaXMuX3Byb2Nlc3NpbmdUd2VlblZhbHVlIC8gMTAwXG4gICAgICAgICAgICB0aGlzLmxvYWRiYXJfdHh0LnN0cmluZyA9IFwi5Yqg6L296L+b5bqm77yaXCIgKyBNYXRoLmNlaWwodGhpcy5fcHJvY2Vzc2luZ1R3ZWVuVmFsdWUpICsgXCIlXCJcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRGaWxlc0J5UGF0aCh1cmwsIHR5cGUpIHtcbiAgICAgICAgdXJsID0gdXJsIHx8ICcnO1xuICAgICAgICB2YXIgdXJscyA9IFtdO1xuICAgICAgICB2YXIgYXNzZXRUYWJsZXMgPSBjYy5sb2FkZXJbJ19hc3NldFRhYmxlcyddO1xuICAgICAgICB2YXIgdXVpZHMgPSBhc3NldFRhYmxlc1snYXNzZXRzJ11bJ2dldFV1aWRBcnJheSddKHVybCwgdHlwZSwgdXJscyk7XG4gICAgICAgIHJldHVybiB1cmxzO1xuICAgIH1cbn1cbiJdfQ==