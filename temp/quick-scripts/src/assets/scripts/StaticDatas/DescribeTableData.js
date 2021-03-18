"use strict";
cc._RF.push(module, 'c5c3dKyhtFIxJKib9TZ0u7t', 'DescribeTableData');
// scripts/StaticDatas/DescribeTableData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TableReader_1 = require("../Tools/TableReader");
var DescribeTableData = /** @class */ (function () {
    function DescribeTableData() {
        this.id = 0;
        this.str = "";
        this.other = "";
    }
    DescribeTableData.prototype.readOriginal = function (buffer, version) {
        if (version === void 0) { version = Number.MAX_SAFE_INTEGER; }
        this.id = buffer.getNumber(); //DescribeId
        this.str = buffer.getString(); //说明
        this.other = buffer.getString(); //其他
    };
    DescribeTableData.getById = function (id) {
        var dataMap = DescribeTableData.getDataMap();
        return dataMap.get(id);
    };
    DescribeTableData.getDataMap = function () {
        if (!DescribeTableData.dataMap) {
            DescribeTableData.dataMap = new Map();
            TableReader_1.ReadTable(DescribeTableData.getFilename(), DescribeTableData);
        }
        return DescribeTableData.dataMap;
    };
    DescribeTableData.getFilename = function () {
        return "DescribeTableData";
    };
    DescribeTableData.prototype.isAutoId = function () { return false; };
    DescribeTableData.prototype.insertData = function (id) {
        DescribeTableData.dataMap.set(id, this);
    };
    return DescribeTableData;
}());
exports.DescribeTableData = DescribeTableData;
;

cc._RF.pop();