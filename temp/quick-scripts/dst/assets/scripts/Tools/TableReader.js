
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Tools/TableReader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bd3c9A9C7hNA7f0VBoLwAdE', 'TableReader');
// scripts/Tools/TableReader.ts

"use strict";
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
var CSV_DIR = "StaticDatas/";
// const CSV_DIR = "Data/";
function PreLoadAllCsv() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                        cc.loader.loadResDir(CSV_DIR, cc.TextAsset, function (error, resource, urls) {
                            //resolve();
                        });
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
//PreLoadAllCsv();
function PreLoadCsvSync(tableName, callback) {
    return __awaiter(this, void 0, Promise, function () {
        var ret;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, PreLoadCsv(tableName)];
                case 1:
                    ret = _a.sent();
                    if (callback) {
                        if (!ret) {
                            console.error("************表加载失败：", tableName);
                        }
                        callback(ret);
                    }
                    return [2 /*return*/, ret];
            }
        });
    });
}
exports.PreLoadCsvSync = PreLoadCsvSync;
function PreLoadCsv(tableName) {
    var assetName = tableName; // CSV_DIR + tableName;
    var asset = cc.loader.getRes(assetName, cc.TextAsset);
    if (asset) {
        return Promise.resolve(true);
    }
    return new Promise(function (resolve, reject) {
        cc.loader.loadRes(assetName, cc.TextAsset, function (error, resource) {
            if (error) {
                resolve(false);
            }
            else {
                resolve(true);
            }
        });
    });
}
exports.PreLoadCsv = PreLoadCsv;
function GetTableDataAsync(tableType, id) {
    return __awaiter(this, void 0, Promise, function () {
        var bLoad;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, PreLoadCsv(tableType.getFilename())];
                case 1:
                    bLoad = _a.sent();
                    if (!bLoad) {
                        return [2 /*return*/, Promise.resolve(null)];
                    }
                    return [2 /*return*/, Promise.resolve(tableType.getById(id))];
            }
        });
    });
}
exports.GetTableDataAsync = GetTableDataAsync;
var TableReader = /** @class */ (function () {
    function TableReader(str) {
        this.m_str = str;
        this.m_pos = 0;
    }
    TableReader.prototype.getChar = function (offset) {
        if (offset === void 0) { offset = 0; }
        return this.m_str[offset];
    };
    TableReader.prototype.readChar = function () {
        return this.getChar(this.m_pos++);
    };
    TableReader.prototype.getNumber = function () {
        return Number(this.readNextToken());
    };
    TableReader.prototype.getString = function () {
        return this.readNextToken();
    };
    TableReader.prototype.getBoolean = function () {
        return Boolean(this.readNextToken());
    };
    TableReader.prototype.getLen = function () {
        return this.m_str.length;
    };
    TableReader.prototype.getPos = function () {
        return this.m_pos;
    };
    TableReader.prototype.resetPos = function () {
        this.m_pos = 0;
    };
    TableReader.prototype.advance = function (num) {
        this.m_pos += num;
    };
    TableReader.prototype.readNextToken = function (isIgnoreNewline) {
        if (isIgnoreNewline === void 0) { isIgnoreNewline = false; }
        if (this.getPos() == this.getLen()) {
            return "";
        }
        else if (this.getPos() > this.getLen()) {
            throw new Error("readNextToken value.getPos=" + this.getPos() + " > value.getLen=" + this.getLen());
        }
        var strResult = "";
        var c = "";
        var isQuota = false;
        while (true) {
            if (this.getPos() >= this.getLen()) {
                break;
            }
            c = this.readChar();
            if (c == '\r')
                continue;
            if (!isQuota) {
                if (c == '\"' && strResult.length == 0) {
                    isQuota = true;
                }
                else if (c == ',') {
                    break;
                }
                else if (c == '\n') {
                    if (!isIgnoreNewline)
                        break;
                }
                else {
                    strResult += c;
                }
            }
            else {
                if (c == '\"') {
                    if (this.getPos() < this.getLen() && this.getChar() == '\"') {
                        strResult += '\"';
                        this.advance(1);
                    }
                    else {
                        isQuota = false;
                    }
                }
                else {
                    strResult += c;
                }
            }
        }
        return strResult;
    };
    return TableReader;
}());
exports.TableReader = TableReader;
function ReadTable(strTableName, TB) {
    var txtAsset = cc.loader.getRes(CSV_DIR + strTableName, cc.TextAsset);
    if (!txtAsset) {
        return;
    }
    //split line
    var lineArray = txtAsset.text.split("\r\n");
    var iID = 0;
    //skip first 3 lines
    for (var i = 3; i < lineArray.length; ++i) {
        if (lineArray[i].length == 0) {
            continue;
        }
        var line = new TableReader(lineArray[i]);
        var data = new TB;
        data.readOriginal(line);
        if (data.isAutoId()) {
            ++iID;
        }
        else {
            if (data.id <= 0) {
                console.error("Warning: " + strTableName + ":" + i + " id <= 0");
            }
            iID = data.id;
        }
        data.insertData(iID);
    }
}
exports.ReadTable = ReadTable;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVG9vbHNcXFRhYmxlUmVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNLE9BQU8sR0FBRyxjQUFjLENBQUM7QUFDL0IsMkJBQTJCO0FBRzNCLFNBQWUsYUFBYTs7Ozt3QkFDeEIscUJBQU0sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTTt3QkFDdkMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxLQUFZLEVBQUUsUUFBZSxFQUFFLElBQWM7NEJBQy9GLFlBQVk7d0JBQ2hCLENBQUMsQ0FBQyxDQUFBO29CQUNOLENBQUMsQ0FBQyxFQUFBOztvQkFKRixTQUlFLENBQUE7Ozs7O0NBQ0w7QUFDRCxrQkFBa0I7QUFFbEIsU0FBc0IsY0FBYyxDQUFDLFNBQWlCLEVBQUUsUUFBa0I7bUNBQUcsT0FBTzs7Ozt3QkFDdEUscUJBQU0sVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFBOztvQkFBakMsR0FBRyxHQUFHLFNBQTJCO29CQUNyQyxJQUFJLFFBQVEsRUFBRTt3QkFDVixJQUFJLENBQUMsR0FBRyxFQUFFOzRCQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsU0FBUyxDQUFDLENBQUE7eUJBQ2pEO3dCQUNELFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDakI7b0JBQ0Qsc0JBQU8sR0FBRyxFQUFDOzs7O0NBQ2Q7QUFURCx3Q0FTQztBQUVELFNBQWdCLFVBQVUsQ0FBQyxTQUFpQjtJQUN4QyxJQUFJLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQSx1QkFBdUI7SUFDakQsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztJ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U1ZfRElSID0gXCJTdGF0aWNEYXRhcy9cIjtcbi8vIGNvbnN0IENTVl9ESVIgPSBcIkRhdGEvXCI7XG5cblxuYXN5bmMgZnVuY3Rpb24gUHJlTG9hZEFsbENzdigpIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzRGlyKENTVl9ESVIsIGNjLlRleHRBc3NldCwgZnVuY3Rpb24gKGVycm9yOiBFcnJvciwgcmVzb3VyY2U6IGFueVtdLCB1cmxzOiBzdHJpbmdbXSkge1xuICAgICAgICAgICAgLy9yZXNvbHZlKCk7XG4gICAgICAgIH0pXG4gICAgfSlcbn1cbi8vUHJlTG9hZEFsbENzdigpO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUHJlTG9hZENzdlN5bmModGFibGVOYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGxldCByZXQgPSBhd2FpdCBQcmVMb2FkQ3N2KHRhYmxlTmFtZSk7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghcmV0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiKioqKioqKioqKioq6KGo5Yqg6L295aSx6LSl77yaXCIsIHRhYmxlTmFtZSlcbiAgICAgICAgfVxuICAgICAgICBjYWxsYmFjayhyZXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUHJlTG9hZENzdih0YWJsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGxldCBhc3NldE5hbWUgPSB0YWJsZU5hbWU7Ly8gQ1NWX0RJUiArIHRhYmxlTmFtZTtcbiAgICBsZXQgYXNzZXQgPSBjYy5sb2FkZXIuZ2V0UmVzKGFzc2V0TmFtZSwgY2MuVGV4dEFzc2V0KTtcbiAgICBpZiAoYXNzZXQpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhhc3NldE5hbWUsIGNjLlRleHRBc3NldCwgZnVuY3Rpb24gKGVycm9yOiBFcnJvciwgcmVzb3VyY2U6IGFueSkge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmludGVyZmFjZSBUYWxiZUZ1bmMgZXh0ZW5kcyBGdW5jdGlvbiB7XG4gICAgZ2V0QnlJZChpZDogbnVtYmVyKTogYW55O1xuICAgIGdldEZpbGVuYW1lKCk6IHN0cmluZztcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHZXRUYWJsZURhdGFBc3luYyh0YWJsZVR5cGU6IFRhbGJlRnVuYywgaWQ6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgbGV0IGJMb2FkID0gYXdhaXQgUHJlTG9hZENzdih0YWJsZVR5cGUuZ2V0RmlsZW5hbWUoKSk7XG4gICAgaWYgKCFiTG9hZCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRhYmxlVHlwZS5nZXRCeUlkKGlkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBUYWJsZVJlYWRlciB7XG4gICAgY29uc3RydWN0b3Ioc3RyOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5tX3N0ciA9IHN0cjtcbiAgICAgICAgdGhpcy5tX3BvcyA9IDA7XG4gICAgfVxuICAgIGdldENoYXIob2Zmc2V0OiBudW1iZXIgPSAwKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubV9zdHJbb2Zmc2V0XTtcbiAgICB9XG4gICAgcmVhZENoYXIoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2hhcih0aGlzLm1fcG9zKyspO1xuICAgIH1cbiAgICBnZXROdW1iZXIoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIE51bWJlcih0aGlzLnJlYWROZXh0VG9rZW4oKSk7XG4gICAgfVxuICAgIGdldFN0cmluZygpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWFkTmV4dFRva2VuKCk7XG4gICAgfVxuICAgIGdldEJvb2xlYW4oKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHRoaXMucmVhZE5leHRUb2tlbigpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0TGVuKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLm1fc3RyLmxlbmd0aDtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UG9zKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLm1fcG9zO1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNldFBvcygpIHtcbiAgICAgICAgdGhpcy5tX3BvcyA9IDA7XG4gICAgfVxuXG4gICAgcHVibGljIGFkdmFuY2UobnVtOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5tX3BvcyArPSBudW07XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJlYWROZXh0VG9rZW4oaXNJZ25vcmVOZXdsaW5lOiBib29sZWFuID0gZmFsc2UpOiBzdHJpbmcge1xuICAgICAgICBpZiAodGhpcy5nZXRQb3MoKSA9PSB0aGlzLmdldExlbigpKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0aGlzLmdldFBvcygpID4gdGhpcy5nZXRMZW4oKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGByZWFkTmV4dFRva2VuIHZhbHVlLmdldFBvcz0ke3RoaXMuZ2V0UG9zKCl9ID4gdmFsdWUuZ2V0TGVuPSR7dGhpcy5nZXRMZW4oKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3RyUmVzdWx0OiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBsZXQgYzogc3RyaW5nID0gXCJcIjtcbiAgICAgICAgbGV0IGlzUXVvdGEgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldFBvcygpID49IHRoaXMuZ2V0TGVuKCkpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGMgPSB0aGlzLnJlYWRDaGFyKCk7XG4gICAgICAgICAgICBpZiAoYyA9PSAnXFxyJylcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICghaXNRdW90YSkge1xuICAgICAgICAgICAgICAgIGlmIChjID09ICdcXFwiJyAmJiBzdHJSZXN1bHQubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaXNRdW90YSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGMgPT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChjID09ICdcXG4nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNJZ25vcmVOZXdsaW5lKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdHJSZXN1bHQgKz0gYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoYyA9PSAnXFxcIicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UG9zKCkgPCB0aGlzLmdldExlbigpICYmIHRoaXMuZ2V0Q2hhcigpID09ICdcXFwiJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RyUmVzdWx0ICs9ICdcXFwiJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWR2YW5jZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzUXVvdGEgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyUmVzdWx0ICs9IGM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0clJlc3VsdDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgbV9zdHI6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgbV9wb3M6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFRhYmxlSW50ZXJmYWNlIHtcbiAgICBpZD86IG51bWJlcjtcbiAgICByZWFkT3JpZ2luYWwoYnVmZmVyOiBUYWJsZVJlYWRlcik6IHZvaWQ7XG4gICAgaXNBdXRvSWQoKTogYm9vbGVhbjtcbiAgICBpbnNlcnREYXRhKGlkOiBudW1iZXIpOiB2b2lkO1xufVxuZXhwb3J0IGZ1bmN0aW9uIFJlYWRUYWJsZTxUIGV4dGVuZHMgVGFibGVJbnRlcmZhY2U+KHN0clRhYmxlTmFtZTogc3RyaW5nLCBUQjogbmV3ICgpID0+IFQpIHtcbiAgICBsZXQgdHh0QXNzZXQ6IGNjLlRleHRBc3NldCA9IGNjLmxvYWRlci5nZXRSZXMoQ1NWX0RJUiArIHN0clRhYmxlTmFtZSwgY2MuVGV4dEFzc2V0KSBhcyBjYy5UZXh0QXNzZXQ7XG4gICAgaWYgKCF0eHRBc3NldCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy9zcGxpdCBsaW5lXG4gICAgbGV0IGxpbmVBcnJheSA9IHR4dEFzc2V0LnRleHQuc3BsaXQoXCJcXHJcXG5cIik7XG4gICAgbGV0IGlJRDogbnVtYmVyID0gMDtcbiAgICAvL3NraXAgZmlyc3QgMyBsaW5lc1xuICAgIGZvciAobGV0IGkgPSAzOyBpIDwgbGluZUFycmF5Lmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChsaW5lQXJyYXlbaV0ubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxpbmUgPSBuZXcgVGFibGVSZWFkZXIobGluZUFycmF5W2ldKTtcbiAgICAgICAgbGV0IGRhdGE6IFQgPSBuZXcgVEI7XG4gICAgICAgIGRhdGEucmVhZE9yaWdpbmFsKGxpbmUpO1xuXG4gICAgICAgIGlmIChkYXRhLmlzQXV0b0lkKCkpIHtcbiAgICAgICAgICAgICsraUlEO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRhdGEuaWQgPD0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6ICR7c3RyVGFibGVOYW1lfToke2l9IGlkIDw9IDBgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaUlEID0gZGF0YS5pZDtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLmluc2VydERhdGEoaUlEKTtcbiAgICB9XG59Il19