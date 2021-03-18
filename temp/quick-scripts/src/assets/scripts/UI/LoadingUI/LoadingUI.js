"use strict";
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