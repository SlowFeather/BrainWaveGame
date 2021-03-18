"use strict";
cc._RF.push(module, '623772S7tBEjq+UcnCGuPEk', 'SoundTableData');
// scripts/StaticDatas/SoundTableData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TableReader_1 = require("../Tools/TableReader");
var SoundTableData = /** @class */ (function () {
    function SoundTableData() {
        this.id = 0;
        this.path = "";
        this.str = "";
    }
    SoundTableData.prototype.readOriginal = function (buffer, version) {
        if (version === void 0) { version = Number.MAX_SAFE_INTEGER; }
        this.id = buffer.getNumber(); //soundId 
        this.path = buffer.getString(); //文件路径
        this.str = buffer.getString(); //说明
    };
    SoundTableData.getById = function (id) {
        var dataMap = SoundTableData.getDataMap();
        return dataMap.get(id);
    };
    SoundTableData.getDataMap = function () {
        if (!SoundTableData.dataMap) {
            SoundTableData.dataMap = new Map();
            TableReader_1.ReadTable(SoundTableData.getFilename(), SoundTableData);
        }
        return SoundTableData.dataMap;
    };
    SoundTableData.getFilename = function () {
        return "SoundTableData";
    };
    SoundTableData.prototype.isAutoId = function () { return false; };
    SoundTableData.prototype.insertData = function (id) {
        SoundTableData.dataMap.set(id, this);
    };
    return SoundTableData;
}());
exports.SoundTableData = SoundTableData;
;

cc._RF.pop();