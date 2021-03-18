"use strict";
cc._RF.push(module, '55e48S2YzRJK4cD1GViifKC', 'List');
// scripts/Tools/DataStructure/List.ts

"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var List = /** @class */ (function () {
    function List(arr) {
        this.arr = [];
        if (arr) {
            this.arr = arr;
        }
    }
    List.prototype.Get = function (index) {
        return this.arr[index];
    };
    Object.defineProperty(List.prototype, "Count", {
        get: function () {
            return this.arr.length;
        },
        enumerable: true,
        configurable: true
    });
    List.prototype.Add = function (data) {
        if (data)
            this.arr.push(data);
    };
    List.prototype.AddRange = function (arr) {
        if (arr)
            this.arr = this.arr.concat(arr);
    };
    List.prototype.Clear = function () {
        while (this.arr.length > 0) {
            this.arr.pop();
        }
    };
    List.prototype.Remove = function (data) {
        if (data) {
            var index = this.arr.indexOf(data);
            if (index >= 0)
                this.arr.splice(index, 1);
        }
        return false;
    };
    List.prototype.RemoveAt = function (index) {
        if (index < 0 || index >= this.arr.length)
            return false;
        this.arr.splice(index, 1);
    };
    List.prototype.Insert = function (index, item) {
        this.arr.splice(index, 0, item);
    };
    List.prototype.Sort = function () {
        this.arr.sort();
    };
    List.prototype.Reverse = function () {
        this.arr.reverse();
    };
    List.prototype.ToArray = function () {
        var result = [];
        result.concat(this.arr);
        return result;
    };
    List.prototype.Contains = function (item) {
        return this.arr.indexOf(item) >= 0;
    };
    List.prototype.IndexOf = function (item) {
        return this.arr.indexOf(item);
    };
    List.prototype.LastIndexOf = function (item) {
        return this.arr.lastIndexOf(item);
    };
    List.prototype.ToString = function () {
        var e_1, _a;
        var result = "";
        try {
            for (var _b = __values(this.arr), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                result += item + " ";
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
    };
    return List;
}());
exports.List = List;

cc._RF.pop();