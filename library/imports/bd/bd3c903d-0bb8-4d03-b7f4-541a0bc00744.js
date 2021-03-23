"use strict";
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