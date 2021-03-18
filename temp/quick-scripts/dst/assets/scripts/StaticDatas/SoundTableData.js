
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/StaticDatas/SoundTableData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU3RhdGljRGF0YXNcXFNvdW5kVGFibGVEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQThEO0FBRzlEO0lBTUM7UUFDQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNaLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQscUNBQVksR0FBWixVQUFhLE1BQW1CLEVBQUUsT0FBd0M7UUFBeEMsd0JBQUEsRUFBQSxVQUFpQixNQUFNLENBQUMsZ0JBQWdCO1FBRXpFLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsVUFBVTtRQUN4QyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU07UUFDdEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJO0lBQ3BDLENBQUM7SUFJTSxzQkFBTyxHQUFkLFVBQWUsRUFBUztRQUV2QixJQUFJLE9BQU8sR0FBRyxjQUFjLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDMUMsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTSx5QkFBVSxHQUFqQjtRQUVDLElBQUcsQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUMxQjtZQUNDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLEVBQTBCLENBQUM7WUFDM0QsdUJBQVMsQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDeEQ7UUFDRCxPQUFPLGNBQWMsQ0FBQyxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUVNLDBCQUFXLEdBQWxCO1FBRUMsT0FBTyxnQkFBZ0IsQ0FBQTtJQUN4QixDQUFDO0lBRUQsaUNBQVEsR0FBUixjQUFxQixPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDcEMsbUNBQVUsR0FBVixVQUFXLEVBQVU7UUFDcEIsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRixxQkFBQztBQUFELENBOUNBLEFBOENDLElBQUE7QUE5Q1ksd0NBQWM7QUE4QzFCLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFkVGFibGUsIFRhYmxlUmVhZGVyIH0gZnJvbSBcIi4uL1Rvb2xzL1RhYmxlUmVhZGVyXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNvdW5kVGFibGVEYXRhXHJcbntcclxuXHRpZDogbnVtYmVyIDsgLy9zb3VuZElkIFxyXG5cdHBhdGg6IHN0cmluZzsgLy/mlofku7bot6/lvoRcclxuXHRzdHI6IHN0cmluZzsgLy/or7TmmI5cclxuXHRcclxuXHRjb25zdHJ1Y3Rvcigpe1xyXG5cdFx0dGhpcy5pZCA9IDA7XHJcblx0XHR0aGlzLnBhdGggPSBcIlwiO1xyXG5cdFx0dGhpcy5zdHIgPSBcIlwiO1xyXG5cdH1cclxuXHRcclxuXHRyZWFkT3JpZ2luYWwoYnVmZmVyOiBUYWJsZVJlYWRlciwgdmVyc2lvbjpudW1iZXIgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUilcclxuXHR7XHJcblx0XHR0aGlzLmlkID0gYnVmZmVyLmdldE51bWJlcigpOyAvL3NvdW5kSWQgXHJcblx0XHR0aGlzLnBhdGggPSBidWZmZXIuZ2V0U3RyaW5nKCk7IC8v5paH5Lu26Lev5b6EXHJcblx0XHR0aGlzLnN0ciA9IGJ1ZmZlci5nZXRTdHJpbmcoKTsgLy/or7TmmI5cclxuXHR9XHJcblx0XHJcblx0cHJvdGVjdGVkIHN0YXRpYyBkYXRhTWFwOiBNYXA8bnVtYmVyLCBTb3VuZFRhYmxlRGF0YT47XHJcblxyXG5cdHN0YXRpYyBnZXRCeUlkKGlkOm51bWJlcik6IFNvdW5kVGFibGVEYXRhIFxyXG5cdHtcclxuXHRcdGxldCBkYXRhTWFwID0gU291bmRUYWJsZURhdGEuZ2V0RGF0YU1hcCgpO1xyXG5cdFx0cmV0dXJuIGRhdGFNYXAuZ2V0KGlkKTtcclxuXHR9XHJcblx0XHJcblx0c3RhdGljIGdldERhdGFNYXAoKTogTWFwPG51bWJlciwgU291bmRUYWJsZURhdGE+XHJcblx0e1xyXG5cdFx0aWYoIVNvdW5kVGFibGVEYXRhLmRhdGFNYXApXHJcblx0XHR7XHJcblx0XHRcdFNvdW5kVGFibGVEYXRhLmRhdGFNYXAgPSBuZXcgTWFwPG51bWJlciwgU291bmRUYWJsZURhdGE+KCk7XHJcblx0XHRcdFJlYWRUYWJsZShTb3VuZFRhYmxlRGF0YS5nZXRGaWxlbmFtZSgpLCBTb3VuZFRhYmxlRGF0YSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gU291bmRUYWJsZURhdGEuZGF0YU1hcDtcclxuXHR9XHJcblx0XHJcblx0c3RhdGljIGdldEZpbGVuYW1lKCk6IHN0cmluZ1xyXG5cdHtcclxuXHRcdHJldHVybiBcIlNvdW5kVGFibGVEYXRhXCJcclxuXHR9XHJcblxyXG5cdGlzQXV0b0lkKCk6Ym9vbGVhbiB7IHJldHVybiBmYWxzZTsgfVxyXG5cdGluc2VydERhdGEoaWQ6IG51bWJlcikge1xyXG5cdFx0U291bmRUYWJsZURhdGEuZGF0YU1hcC5zZXQoaWQsIHRoaXMpO1xyXG5cdH1cclxufTtcclxuIl19