
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Tools/TransformUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e7f9fgJZslDN7Tu1b72OP7G', 'TransformUtil');
// scripts/Tools/TransformUtil.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
* TransformUtil
* 移动工具
* @ author: SlowFeather
* @ wechat: BackedByTheWT
* @ data: 2020-07-14 13:44
*/
var TransformUtil = /** @class */ (function () {
    function TransformUtil() {
    }
    TransformUtil.convetOtherNodeSpaceAR = function (node, targetNode) {
        if (!node || !targetNode) {
            return null;
        }
        var worldPoint = this.localConvertWorldPointAR(node);
        return this.worldConvertLocalPointAR(targetNode, worldPoint);
    };
    TransformUtil.localConvertWorldPointAR = function (node) {
        if (node) {
            return node.convertToWorldSpaceAR(cc.v2(0, 0));
        }
        return null;
    };
    TransformUtil.worldConvertLocalPointAR = function (node, worldPoint) {
        if (node) {
            return node.convertToNodeSpaceAR(worldPoint);
        }
    };
    /**
     * 拿到世界坐标
     *
     * @static
     * @param {cc.Node} node
     * @returns {cc.Vec2}
     * @memberof TransformUtil
     */
    TransformUtil.GetWorldPostation2 = function (node) {
        if (node.parent == null)
            return node.getPosition();
        return node.parent.convertToWorldSpaceAR(node.getPosition());
    };
    /**
     * 拿到世界坐标
     *
     * @static
     * @param {cc.Node} node
     * @returns {cc.Vec3}
     * @memberof TransformUtil
     */
    TransformUtil.GetWorldPostation3 = function (node) {
        if (node.parent == null)
            return node.position;
        return node.parent.convertToWorldSpaceAR(node.position);
    };
    /**
     * 将世界坐标转换为当前node的坐标
     *
     * @static
     * @param {cc.Node} node 当前的node
     * @param {cc.Vec2} worldPos 世界坐标
     * @returns {cc.Vec2}
     * @memberof TransformUtil
     */
    TransformUtil.GetNodePostation2 = function (node, worldPos) {
        if (node.parent == null)
            return worldPos;
        return node.parent.convertToNodeSpaceAR(worldPos);
    };
    TransformUtil = __decorate([
        ccclass
    ], TransformUtil);
    return TransformUtil;
}());
exports.default = TransformUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVG9vbHNcXFRyYW5zZm9ybVV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBQzVDOzs7Ozs7RUFNRTtBQUVGO0lBQUE7SUEyRUEsQ0FBQztJQXhFaUIsb0NBQXNCLEdBQXBDLFVBQXFDLElBQWEsRUFBRSxVQUFVO1FBQzFELElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDdEIsT0FBTyxJQUFJLENBQUE7U0FDZDtRQUNELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUdhLHNDQUF3QixHQUF0QyxVQUF1QyxJQUFhO1FBQ2hELElBQUksSUFBSSxFQUFFO1lBQ04sT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUVsRDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFYSxzQ0FBd0IsR0FBdEMsVUFBdUMsSUFBYSxFQUFFLFVBQVU7UUFDNUQsSUFBSSxJQUFJLEVBQUU7WUFDTixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQTtTQUMvQztJQUNMLENBQUM7SUFXRDs7Ozs7OztPQU9HO0lBQ1csZ0NBQWtCLEdBQWhDLFVBQWlDLElBQWE7UUFDMUMsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUk7WUFBRSxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNsRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUE7SUFDaEUsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDVyxnQ0FBa0IsR0FBaEMsVUFBaUMsSUFBYTtRQUMxQyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSTtZQUFFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQTtRQUM3QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQzNELENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNXLCtCQUFpQixHQUEvQixVQUFnQyxJQUFhLEVBQUUsUUFBaUI7UUFDNUQsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUk7WUFBRSxPQUFPLFFBQVEsQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDckQsQ0FBQztJQXpFZ0IsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQTJFakM7SUFBRCxvQkFBQztDQTNFRCxBQTJFQyxJQUFBO2tCQTNFb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG4vKipcbiogVHJhbnNmb3JtVXRpbFxuKiDnp7vliqjlt6XlhbdcbiogQCBhdXRob3I6IFNsb3dGZWF0aGVyXG4qIEAgd2VjaGF0OiBCYWNrZWRCeVRoZVdUXG4qIEAgZGF0YTogMjAyMC0wNy0xNCAxMzo0NFxuKi9cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFuc2Zvcm1VdGlsIHtcblxuXG4gICAgcHVibGljIHN0YXRpYyBjb252ZXRPdGhlck5vZGVTcGFjZUFSKG5vZGU6IGNjLk5vZGUsIHRhcmdldE5vZGUpIHtcbiAgICAgICAgaWYgKCFub2RlIHx8ICF0YXJnZXROb2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgICAgIGxldCB3b3JsZFBvaW50ID0gdGhpcy5sb2NhbENvbnZlcnRXb3JsZFBvaW50QVIobm9kZSk7XG4gICAgICAgIHJldHVybiB0aGlzLndvcmxkQ29udmVydExvY2FsUG9pbnRBUih0YXJnZXROb2RlLCB3b3JsZFBvaW50KTtcbiAgICB9XG5cblxuICAgIHB1YmxpYyBzdGF0aWMgbG9jYWxDb252ZXJ0V29ybGRQb2ludEFSKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSk7XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHdvcmxkQ29udmVydExvY2FsUG9pbnRBUihub2RlOiBjYy5Ob2RlLCB3b3JsZFBvaW50KSB7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICByZXR1cm4gbm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvaW50KVxuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgLyoqXG4gICAgICog5ou/5Yiw5LiW55WM5Z2Q5qCHXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBub2RlXG4gICAgICogQHJldHVybnMge2NjLlZlYzJ9XG4gICAgICogQG1lbWJlcm9mIFRyYW5zZm9ybVV0aWxcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEdldFdvcmxkUG9zdGF0aW9uMihub2RlOiBjYy5Ob2RlKTogY2MuVmVjMiB7XG4gICAgICAgIGlmIChub2RlLnBhcmVudCA9PSBudWxsKSByZXR1cm4gbm9kZS5nZXRQb3NpdGlvbigpXG4gICAgICAgIHJldHVybiBub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZS5nZXRQb3NpdGlvbigpKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaLv+WIsOS4lueVjOWdkOagh1xuICAgICAqIFxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IG5vZGVcbiAgICAgKiBAcmV0dXJucyB7Y2MuVmVjM31cbiAgICAgKiBAbWVtYmVyb2YgVHJhbnNmb3JtVXRpbFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgR2V0V29ybGRQb3N0YXRpb24zKG5vZGU6IGNjLk5vZGUpOiBjYy5WZWMzIHtcbiAgICAgICAgaWYgKG5vZGUucGFyZW50ID09IG51bGwpIHJldHVybiBub2RlLnBvc2l0aW9uXG4gICAgICAgIHJldHVybiBub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZS5wb3NpdGlvbilcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlsIbkuJbnlYzlnZDmoIfovazmjaLkuLrlvZPliY1ub2Rl55qE5Z2Q5qCHXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBub2RlIOW9k+WJjeeahG5vZGVcbiAgICAgKiBAcGFyYW0ge2NjLlZlYzJ9IHdvcmxkUG9zIOS4lueVjOWdkOagh1xuICAgICAqIEByZXR1cm5zIHtjYy5WZWMyfVxuICAgICAqIEBtZW1iZXJvZiBUcmFuc2Zvcm1VdGlsXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBHZXROb2RlUG9zdGF0aW9uMihub2RlOiBjYy5Ob2RlLCB3b3JsZFBvczogY2MuVmVjMik6IGNjLlZlYzIge1xuICAgICAgICBpZiAobm9kZS5wYXJlbnQgPT0gbnVsbCkgcmV0dXJuIHdvcmxkUG9zO1xuICAgICAgICByZXR1cm4gbm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpXG4gICAgfVxuXG59Il19