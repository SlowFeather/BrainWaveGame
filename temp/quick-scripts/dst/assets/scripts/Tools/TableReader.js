
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVG9vbHNcXFRhYmxlUmVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNLE9BQU8sR0FBRyxjQUFjLENBQUM7QUFFL0IsU0FBZSxhQUFhOzs7O3dCQUN4QixxQkFBTSxJQUFJLE9BQU8sQ0FBQyxVQUFVLE9BQU8sRUFBRSxNQUFNO3dCQUN2QyxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLEtBQVksRUFBRSxRQUFlLEVBQUUsSUFBYzs0QkFDL0YsWUFBWTt3QkFDaEIsQ0FBQyxDQUFDLENBQUE7b0JBQ04sQ0FBQyxDQUFDLEVBQUE7O29CQUpGLFNBSUUsQ0FBQTs7Ozs7Q0FDTDtBQUNELGtCQUFrQjtBQUVsQixTQUFzQixjQUFjLENBQUMsU0FBaUIsRUFBRSxRQUFrQjttQ0FBRyxPQUFPOzs7O3dCQUN0RSxxQkFBTSxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQUE7O29CQUFqQyxHQUFHLEdBQUcsU0FBMkI7b0JBQ3JDLElBQUksUUFBUSxFQUFFO3dCQUNWLElBQUksQ0FBQyxHQUFHLEVBQUU7NEJBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxTQUFTLENBQUMsQ0FBQTt5QkFDakQ7d0JBQ0QsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNqQjtvQkFDRCxzQkFBTyxHQUFHLEVBQUM7Ozs7Q0FDZDtBQVRELHdDQVNDO0FBRUQsU0FBZ0IsVUFBVSxDQUFDLFNBQWlCO0lBQ3hDLElBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxDQUFBLHVCQUF1QjtJQUNqRCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RELElBQUksS0FB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YXRpY0RhdGFzL1wiO1xuXG5hc3luYyBmdW5jdGlvbiBQcmVMb2FkQWxsQ3N2KCkge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNEaXIoQ1NWX0RJUiwgY2MuVGV4dEFzc2V0LCBmdW5jdGlvbiAoZXJyb3I6IEVycm9yLCByZXNvdXJjZTogYW55W10sIHVybHM6IHN0cmluZ1tdKSB7XG4gICAgICAgICAgICAvL3Jlc29sdmUoKTtcbiAgICAgICAgfSlcbiAgICB9KVxufVxuLy9QcmVMb2FkQWxsQ3N2KCk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQcmVMb2FkQ3N2U3luYyh0YWJsZU5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgbGV0IHJldCA9IGF3YWl0IFByZUxvYWRDc3YodGFibGVOYW1lKTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFyZXQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCIqKioqKioqKioqKirooajliqDovb3lpLHotKXvvJpcIiwgdGFibGVOYW1lKVxuICAgICAgICB9XG4gICAgICAgIGNhbGxiYWNrKHJldCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBQcmVMb2FkQ3N2KHRhYmxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgbGV0IGFzc2V0TmFtZSA9IHRhYmxlTmFtZTsvLyBDU1ZfRElSICsgdGFibGVOYW1lO1xuICAgIGxldCBhc3NldCA9IGNjLmxvYWRlci5nZXRSZXMoYXNzZXROYW1lLCBjYy5UZXh0QXNzZXQpO1xuICAgIGlmIChhc3NldCkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKGFzc2V0TmFtZSwgY2MuVGV4dEFzc2V0LCBmdW5jdGlvbiAoZXJyb3I6IEVycm9yLCByZXNvdXJjZTogYW55KSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuaW50ZXJmYWNlIFRhbGJlRnVuYyBleHRlbmRzIEZ1bmN0aW9uIHtcbiAgICBnZXRCeUlkKGlkOiBudW1iZXIpOiBhbnk7XG4gICAgZ2V0RmlsZW5hbWUoKTogc3RyaW5nO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdldFRhYmxlRGF0YUFzeW5jKHRhYmxlVHlwZTogVGFsYmVGdW5jLCBpZDogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICBsZXQgYkxvYWQgPSBhd2FpdCBQcmVMb2FkQ3N2KHRhYmxlVHlwZS5nZXRGaWxlbmFtZSgpKTtcbiAgICBpZiAoIWJMb2FkKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGFibGVUeXBlLmdldEJ5SWQoaWQpKTtcbn1cblxuZXhwb3J0IGNsYXNzIFRhYmxlUmVhZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzdHI6IHN0cmluZykge1xuICAgICAgICB0aGlzLm1fc3RyID0gc3RyO1xuICAgICAgICB0aGlzLm1fcG9zID0gMDtcbiAgICB9XG4gICAgZ2V0Q2hhcihvZmZzZXQ6IG51bWJlciA9IDApOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5tX3N0cltvZmZzZXRdO1xuICAgIH1cbiAgICByZWFkQ2hhcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDaGFyKHRoaXMubV9wb3MrKyk7XG4gICAgfVxuICAgIGdldE51bWJlcigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTnVtYmVyKHRoaXMucmVhZE5leHRUb2tlbigpKTtcbiAgICB9XG4gICAgZ2V0U3RyaW5nKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWROZXh0VG9rZW4oKTtcbiAgICB9XG4gICAgZ2V0Qm9vbGVhbigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4odGhpcy5yZWFkTmV4dFRva2VuKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRMZW4oKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubV9zdHIubGVuZ3RoO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQb3MoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubV9wb3M7XG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0UG9zKCkge1xuICAgICAgICB0aGlzLm1fcG9zID0gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgYWR2YW5jZShudW06IG51bWJlcikge1xuICAgICAgICB0aGlzLm1fcG9zICs9IG51bTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmVhZE5leHRUb2tlbihpc0lnbm9yZU5ld2xpbmU6IGJvb2xlYW4gPSBmYWxzZSk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmdldFBvcygpID09IHRoaXMuZ2V0TGVuKCkpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMuZ2V0UG9zKCkgPiB0aGlzLmdldExlbigpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYHJlYWROZXh0VG9rZW4gdmFsdWUuZ2V0UG9zPSR7dGhpcy5nZXRQb3MoKX0gPiB2YWx1ZS5nZXRMZW49JHt0aGlzLmdldExlbigpfWApO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzdHJSZXN1bHQ6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgIGxldCBjOiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICBsZXQgaXNRdW90YSA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UG9zKCkgPj0gdGhpcy5nZXRMZW4oKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYyA9IHRoaXMucmVhZENoYXIoKTtcbiAgICAgICAgICAgIGlmIChjID09ICdcXHInKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCFpc1F1b3RhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGMgPT0gJ1xcXCInICYmIHN0clJlc3VsdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpc1F1b3RhID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYyA9PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGMgPT0gJ1xcbicpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc0lnbm9yZU5ld2xpbmUpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN0clJlc3VsdCArPSBjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjID09ICdcXFwiJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRQb3MoKSA8IHRoaXMuZ2V0TGVuKCkgJiYgdGhpcy5nZXRDaGFyKCkgPT0gJ1xcXCInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJSZXN1bHQgKz0gJ1xcXCInO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZHZhbmNlKDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNRdW90YSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdHJSZXN1bHQgKz0gYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RyUmVzdWx0O1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBtX3N0cjogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBtX3BvczogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgVGFibGVJbnRlcmZhY2Uge1xuICAgIGlkPzogbnVtYmVyO1xuICAgIHJlYWRPcmlnaW5hbChidWZmZXI6IFRhYmxlUmVhZGVyKTogdm9pZDtcbiAgICBpc0F1dG9JZCgpOiBib29sZWFuO1xuICAgIGluc2VydERhdGEoaWQ6IG51bWJlcik6IHZvaWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gUmVhZFRhYmxlPFQgZXh0ZW5kcyBUYWJsZUludGVyZmFjZT4oc3RyVGFibGVOYW1lOiBzdHJpbmcsIFRCOiBuZXcgKCkgPT4gVCkge1xuICAgIGxldCB0eHRBc3NldDogY2MuVGV4dEFzc2V0ID0gY2MubG9hZGVyLmdldFJlcyhDU1ZfRElSICsgc3RyVGFibGVOYW1lLCBjYy5UZXh0QXNzZXQpIGFzIGNjLlRleHRBc3NldDtcbiAgICBpZiAoIXR4dEFzc2V0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvL3NwbGl0IGxpbmVcbiAgICBsZXQgbGluZUFycmF5ID0gdHh0QXNzZXQudGV4dC5zcGxpdChcIlxcclxcblwiKTtcbiAgICBsZXQgaUlEOiBudW1iZXIgPSAwO1xuICAgIC8vc2tpcCBmaXJzdCAzIGxpbmVzXG4gICAgZm9yIChsZXQgaSA9IDM7IGkgPCBsaW5lQXJyYXkubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKGxpbmVBcnJheVtpXS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbGluZSA9IG5ldyBUYWJsZVJlYWRlcihsaW5lQXJyYXlbaV0pO1xuICAgICAgICBsZXQgZGF0YTogVCA9IG5ldyBUQjtcbiAgICAgICAgZGF0YS5yZWFkT3JpZ2luYWwobGluZSk7XG5cbiAgICAgICAgaWYgKGRhdGEuaXNBdXRvSWQoKSkge1xuICAgICAgICAgICAgKytpSUQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5pZCA8PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogJHtzdHJUYWJsZU5hbWV9OiR7aX0gaWQgPD0gMGApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpSUQgPSBkYXRhLmlkO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuaW5zZXJ0RGF0YShpSUQpO1xuICAgIH1cbn0iXX0=