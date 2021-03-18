
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Tools/DataStructure/List.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVG9vbHNcXERhdGFTdHJ1Y3R1cmVcXExpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFHSSxjQUFtQixHQUFjO1FBRnpCLFFBQUcsR0FBYSxFQUFFLENBQUM7UUFHdkIsSUFBSSxHQUFHLEVBQUU7WUFDTCxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNsQjtJQUNMLENBQUM7SUFFTSxrQkFBRyxHQUFWLFVBQVcsS0FBYTtRQUNwQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELHNCQUFXLHVCQUFLO2FBQWhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUVNLGtCQUFHLEdBQVYsVUFBVyxJQUFPO1FBQ2QsSUFBSSxJQUFJO1lBQ0osSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVNLHVCQUFRLEdBQWYsVUFBZ0IsR0FBYTtRQUN6QixJQUFJLEdBQUc7WUFDSCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFTSxvQkFBSyxHQUFaO1FBQ0ksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNsQjtJQUNMLENBQUM7SUFFTSxxQkFBTSxHQUFiLFVBQWMsSUFBTztRQUNqQixJQUFJLElBQUksRUFBRTtZQUNOLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLElBQUksS0FBSyxJQUFJLENBQUM7Z0JBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVNLHVCQUFRLEdBQWYsVUFBZ0IsS0FBYTtRQUN6QixJQUFJLEtBQUssR0FBRyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTTtZQUNyQyxPQUFPLEtBQUssQ0FBQztRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVNLHFCQUFNLEdBQWIsVUFBYyxLQUFhLEVBQUUsSUFBTztRQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTSxtQkFBSSxHQUFYO1FBQ0ksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRU0sc0JBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVNLHNCQUFPLEdBQWQ7UUFDSSxJQUFJLE1BQU0sR0FBYSxFQUFFLENBQUM7UUFDMUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEIsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVNLHVCQUFRLEdBQWYsVUFBZ0IsSUFBTztRQUNuQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sc0JBQU8sR0FBZCxVQUFlLElBQU87UUFDbEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sMEJBQVcsR0FBbEIsVUFBbUIsSUFBTztRQUN0QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSx1QkFBUSxHQUFmOztRQUNJLElBQUksTUFBTSxHQUFRLEVBQUUsQ0FBQzs7WUFDckIsS0FBZ0IsSUFBQSxLQUFBLFNBQUEsSUFBSSxDQUFDLEdBQUcsQ0FBQSxnQkFBQSw0QkFBQztnQkFBckIsSUFBSSxJQUFJLFdBQUE7Z0JBQ1IsTUFBTSxJQUFJLElBQUksR0FBRyxHQUFHLENBQUM7YUFDeEI7Ozs7Ozs7OztRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FyRkEsQUFxRkMsSUFBQTtBQXJGWSxvQkFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBMaXN0PFQ+e1xuICAgIHByaXZhdGUgYXJyOiBBcnJheTxUPiA9IFtdO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGFycj86IEFycmF5PFQ+KSB7XG4gICAgICAgIGlmIChhcnIpIHtcbiAgICAgICAgICAgIHRoaXMuYXJyID0gYXJyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIEdldChpbmRleDogbnVtYmVyKTogVCB7XG4gICAgICAgIHJldHVybiB0aGlzLmFycltpbmRleF07XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBDb3VudCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5hcnIubGVuZ3RoO1xuICAgIH1cblxuICAgIHB1YmxpYyBBZGQoZGF0YTogVCkge1xuICAgICAgICBpZiAoZGF0YSlcbiAgICAgICAgICAgIHRoaXMuYXJyLnB1c2goZGF0YSk7XG4gICAgfVxuXG4gICAgcHVibGljIEFkZFJhbmdlKGFycjogQXJyYXk8VD4pIHtcbiAgICAgICAgaWYgKGFycilcbiAgICAgICAgICAgIHRoaXMuYXJyID0gdGhpcy5hcnIuY29uY2F0KGFycik7XG4gICAgfVxuXG4gICAgcHVibGljIENsZWFyKCkge1xuICAgICAgICB3aGlsZSAodGhpcy5hcnIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5hcnIucG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgUmVtb3ZlKGRhdGE6IFQpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuYXJyLmluZGV4T2YoZGF0YSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMClcbiAgICAgICAgICAgICAgICB0aGlzLmFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgUmVtb3ZlQXQoaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuYXJyLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhpcy5hcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgSW5zZXJ0KGluZGV4OiBudW1iZXIsIGl0ZW06IFQpIHtcbiAgICAgICAgdGhpcy5hcnIuc3BsaWNlKGluZGV4LCAwLCBpdGVtKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgU29ydCgpIHtcbiAgICAgICAgdGhpcy5hcnIuc29ydCgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBSZXZlcnNlKCkge1xuICAgICAgICB0aGlzLmFyci5yZXZlcnNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIFRvQXJyYXkoKTogVFtdIHtcbiAgICAgICAgbGV0IHJlc3VsdDogQXJyYXk8VD4gPSBbXTtcbiAgICAgICAgcmVzdWx0LmNvbmNhdCh0aGlzLmFycik7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcHVibGljIENvbnRhaW5zKGl0ZW06IFQpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyLmluZGV4T2YoaXRlbSkgPj0gMDtcbiAgICB9XG5cbiAgICBwdWJsaWMgSW5kZXhPZihpdGVtOiBUKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyLmluZGV4T2YoaXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIExhc3RJbmRleE9mKGl0ZW06IFQpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5hcnIubGFzdEluZGV4T2YoaXRlbSk7XG4gICAgfVxuXG4gICAgcHVibGljIFRvU3RyaW5nKCk6IHN0cmluZ3tcbiAgICAgICAgbGV0IHJlc3VsdDpzdHJpbmc9XCJcIjtcbiAgICAgICAgZm9yKGxldCBpdGVtIG9mIHRoaXMuYXJyKXtcbiAgICAgICAgICAgIHJlc3VsdCArPSBpdGVtICsgXCIgXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59Il19