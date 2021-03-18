
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/StaticDatas/DescribeTableData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU3RhdGljRGF0YXNcXERlc2NyaWJlVGFibGVEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQThEO0FBSTlEO0lBTUM7UUFDQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELHdDQUFZLEdBQVosVUFBYSxNQUFtQixFQUFFLE9BQXdDO1FBQXhDLHdCQUFBLEVBQUEsVUFBaUIsTUFBTSxDQUFDLGdCQUFnQjtRQUV6RSxJQUFJLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFlBQVk7UUFDMUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsSUFBSTtJQUN0QyxDQUFDO0lBSU0seUJBQU8sR0FBZCxVQUFlLEVBQVM7UUFFdkIsSUFBSSxPQUFPLEdBQUcsaUJBQWlCLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDN0MsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTSw0QkFBVSxHQUFqQjtRQUVDLElBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQzdCO1lBQ0MsaUJBQWlCLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxFQUE2QixDQUFDO1lBQ2pFLHVCQUFTLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztTQUM5RDtRQUNELE9BQU8saUJBQWlCLENBQUMsT0FBTyxDQUFDO0lBQ2xDLENBQUM7SUFFTSw2QkFBVyxHQUFsQjtRQUVDLE9BQU8sbUJBQW1CLENBQUE7SUFDM0IsQ0FBQztJQUVELG9DQUFRLEdBQVIsY0FBcUIsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLHNDQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ3BCLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFDRix3QkFBQztBQUFELENBOUNBLEFBOENDLElBQUE7QUE5Q1ksOENBQWlCO0FBOEM3QixDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhZFRhYmxlLCBUYWJsZVJlYWRlciB9IGZyb20gXCIuLi9Ub29scy9UYWJsZVJlYWRlclwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRGVzY3JpYmVUYWJsZURhdGFcclxue1xyXG5cdGlkOiBudW1iZXIgOyAvL0Rlc2NyaWJlSWRcclxuXHRzdHI6IHN0cmluZzsgLy/or7TmmI5cclxuXHRvdGhlcjogc3RyaW5nOyAvL+WFtuS7llxyXG5cdFxyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHR0aGlzLmlkID0gMDtcclxuXHRcdHRoaXMuc3RyID0gXCJcIjtcclxuXHRcdHRoaXMub3RoZXIgPSBcIlwiO1xyXG5cdH1cclxuXHRcclxuXHRyZWFkT3JpZ2luYWwoYnVmZmVyOiBUYWJsZVJlYWRlciwgdmVyc2lvbjpudW1iZXIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUilcclxuXHR7XHJcblx0XHR0aGlzLmlkID0gYnVmZmVyLmdldE51bWJlcigpOyAvL0Rlc2NyaWJlSWRcclxuXHRcdHRoaXMuc3RyID0gYnVmZmVyLmdldFN0cmluZygpOyAvL+ivtOaYjlxyXG5cdFx0dGhpcy5vdGhlciA9IGJ1ZmZlci5nZXRTdHJpbmcoKTsgLy/lhbbku5ZcclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIHN0YXRpYyBkYXRhTWFwOiBNYXA8bnVtYmVyLCBEZXNjcmliZVRhYmxlRGF0YT47XHJcblxyXG5cdHN0YXRpYyBnZXRCeUlkKGlkOm51bWJlcik6IERlc2NyaWJlVGFibGVEYXRhIFxyXG5cdHtcclxuXHRcdGxldCBkYXRhTWFwID0gRGVzY3JpYmVUYWJsZURhdGEuZ2V0RGF0YU1hcCgpO1xyXG5cdFx0cmV0dXJuIGRhdGFNYXAuZ2V0KGlkKTtcclxuXHR9XHJcblx0XHJcblx0c3RhdGljIGdldERhdGFNYXAoKTogTWFwPG51bWJlciwgRGVzY3JpYmVUYWJsZURhdGE+XHJcblx0e1xyXG5cdFx0aWYoIURlc2NyaWJlVGFibGVEYXRhLmRhdGFNYXApXHJcblx0XHR7XHJcblx0XHRcdERlc2NyaWJlVGFibGVEYXRhLmRhdGFNYXAgPSBuZXcgTWFwPG51bWJlciwgRGVzY3JpYmVUYWJsZURhdGE+KCk7XHJcblx0XHRcdFJlYWRUYWJsZShEZXNjcmliZVRhYmxlRGF0YS5nZXRGaWxlbmFtZSgpLCBEZXNjcmliZVRhYmxlRGF0YSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gRGVzY3JpYmVUYWJsZURhdGEuZGF0YU1hcDtcclxuXHR9XHJcblx0XHJcblx0c3RhdGljIGdldEZpbGVuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBcIkRlc2NyaWJlVGFibGVEYXRhXCJcclxuXHR9XHJcblxyXG5cdGlzQXV0b0lkKCk6Ym9vbGVhbiB7IHJldHVybiBmYWxzZTsgfVxyXG5cdGluc2VydERhdGEoaWQ6IG51bWJlcikge1xyXG5cdFx0RGVzY3JpYmVUYWJsZURhdGEuZGF0YU1hcC5zZXQoaWQsIHRoaXMpO1xyXG5cdH1cclxufTtcclxuIl19