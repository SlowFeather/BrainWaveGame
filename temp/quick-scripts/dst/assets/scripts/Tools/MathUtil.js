
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Tools/MathUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '03012z22rhFIpu3aYDUp2Ug', 'MathUtil');
// scripts/Tools/MathUtil.ts

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
 * MathUtil
 * @ author: SlowFeather
 * @ wechat: BackedByTheWT
 * @ data: 2020-07-06 10:31
 */
var MathUtil = /** @class */ (function () {
    function MathUtil() {
    }
    /**
     * 得到一个int随机数
     * 包括上限和下限
     *
     * @static
     * @param {number} min
     * @param {number} max
     * @returns {number}
     * @memberof MathUtil
     */
    MathUtil.randomInterger = function (min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    };
    /**
     * 产生随机数，包含下限值，但不包括上限值
     * @param {Number} lower 下限
     * @param {Number} upper 上限
     * @return {Number} 返回在下限到上限之间的一个随机数
     */
    MathUtil.randomExceptUpper = function (lower, upper) {
        return Math.random() * (upper - lower) + lower;
    };
    /**
     * 产生随机数，包含下限值，包括上限值
     * @param {Number} lower 下限
     * @param {Number} upper 上限
     * @return {Number} 返回在下限到上限之间的一个随机数
     */
    MathUtil.random = function (lower, upper) {
        //0-1
        return (Math.random() * (upper - lower + 1)) + lower;
    };
    /**
     * 得到两点间的距离
     *
     * @static
     * @param {cc.Vec2} p1
     * @param {cc.Vec2} p2
     * @returns {number}
     * @memberof MathUtil
     */
    MathUtil.getDisOfTwoPos = function (p1, p2) {
        var l = p1.sub(p2).mag();
        return l;
    };
    /**
     * 区间映射
     *
     * @static
     * @param {number} num 需要映射的值
     * @param {number} x 最小值
     * @param {number} y 最大值
     * @param {number} a 映射后最小值
     * @param {number} b 映射后最大值
     * @return {*}  {number} 映射后的值
     * @memberof MathUtil
     */
    MathUtil.reMap = function (num, x, y, a, b) {
        var result = 0;
        //算出比例
        var proportion = Math.abs(num / (y - x));
        var mapping = Math.abs((b - a) * proportion);
        //映射到新区间
        result = a + mapping;
        return result;
    };
    MathUtil = __decorate([
        ccclass
    ], MathUtil);
    return MathUtil;
}());
exports.default = MathUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVG9vbHNcXE1hdGhVdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxrQkFHVyxFQUZiLG9CQUFPLEVBQ1Asc0JBQ2EsQ0FBQztBQUNsQjs7Ozs7R0FLRztBQUVIO0lBQUE7SUEyRUEsQ0FBQztJQXhFRzs7Ozs7Ozs7O09BU0c7SUFDVyx1QkFBYyxHQUE1QixVQUE2QixHQUFXLEVBQUUsR0FBVztRQUNqRCxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDVywwQkFBaUIsR0FBL0IsVUFBZ0MsS0FBSyxFQUFFLEtBQUs7UUFDeEMsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ25ELENBQUM7SUFHRDs7Ozs7T0FLRztJQUNXLGVBQU0sR0FBcEIsVUFBcUIsS0FBSyxFQUFFLEtBQUs7UUFDN0IsS0FBSztRQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNXLHVCQUFjLEdBQTVCLFVBQTZCLEVBQVcsRUFBRSxFQUFXO1FBQ2pELElBQUksQ0FBQyxHQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDakMsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7SUFDVyxjQUFLLEdBQW5CLFVBQW9CLEdBQVUsRUFBQyxDQUFRLEVBQUMsQ0FBUSxFQUFDLENBQVEsRUFBQyxDQUFRO1FBQzlELElBQUksTUFBTSxHQUFDLENBQUMsQ0FBQztRQUNiLE1BQU07UUFDTixJQUFJLFVBQVUsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksT0FBTyxHQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLEdBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkMsUUFBUTtRQUNSLE1BQU0sR0FBQyxDQUFDLEdBQUMsT0FBTyxDQUFDO1FBQ2pCLE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUF6RWdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0EyRTVCO0lBQUQsZUFBQztDQTNFRCxBQTJFQyxJQUFBO2tCQTNFb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtcbiAgICBjY2NsYXNzLFxuICAgIHByb3BlcnR5XG59ID0gY2MuX2RlY29yYXRvcjtcbi8qKlxuICogTWF0aFV0aWxcbiAqIEAgYXV0aG9yOiBTbG93RmVhdGhlclxuICogQCB3ZWNoYXQ6IEJhY2tlZEJ5VGhlV1RcbiAqIEAgZGF0YTogMjAyMC0wNy0wNiAxMDozMVxuICovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0aFV0aWwge1xuXG5cbiAgICAvKipcbiAgICAgKiDlvpfliLDkuIDkuKppbnTpmo/mnLrmlbBcbiAgICAgKiDljIXmi6zkuIrpmZDlkozkuIvpmZBcbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIE1hdGhVdGlsXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21JbnRlcmdlcihtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gbWluICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDkuqfnlJ/pmo/mnLrmlbDvvIzljIXlkKvkuIvpmZDlgLzvvIzkvYbkuI3ljIXmi6zkuIrpmZDlgLxcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gbG93ZXIg5LiL6ZmQXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IHVwcGVyIOS4iumZkFxuICAgICAqIEByZXR1cm4ge051bWJlcn0g6L+U5Zue5Zyo5LiL6ZmQ5Yiw5LiK6ZmQ5LmL6Ze055qE5LiA5Liq6ZqP5py65pWwXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByYW5kb21FeGNlcHRVcHBlcihsb3dlciwgdXBwZXIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAodXBwZXIgLSBsb3dlcikgKyBsb3dlcjtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOS6p+eUn+maj+acuuaVsO+8jOWMheWQq+S4i+mZkOWAvO+8jOWMheaLrOS4iumZkOWAvFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBsb3dlciDkuIvpmZBcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gdXBwZXIg5LiK6ZmQXG4gICAgICogQHJldHVybiB7TnVtYmVyfSDov5Tlm57lnKjkuIvpmZDliLDkuIrpmZDkuYvpl7TnmoTkuIDkuKrpmo/mnLrmlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJhbmRvbShsb3dlciwgdXBwZXIpIHtcbiAgICAgICAgLy8wLTFcbiAgICAgICAgcmV0dXJuIChNYXRoLnJhbmRvbSgpICogKHVwcGVyIC0gbG93ZXIgKyAxKSkgKyBsb3dlcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlvpfliLDkuKTngrnpl7TnmoTot53nprtcbiAgICAgKlxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge2NjLlZlYzJ9IHAxXG4gICAgICogQHBhcmFtIHtjYy5WZWMyfSBwMlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIE1hdGhVdGlsXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXREaXNPZlR3b1BvcyhwMTogY2MuVmVjMiwgcDI6IGNjLlZlYzIpOiBudW1iZXIge1xuICAgICAgICBsZXQgbDogbnVtYmVyID0gcDEuc3ViKHAyKS5tYWcoKTtcbiAgICAgICAgcmV0dXJuIGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yy66Ze05pig5bCEXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG51bSDpnIDopoHmmKDlsITnmoTlgLxcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCDmnIDlsI/lgLxcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSDmnIDlpKflgLxcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYSDmmKDlsITlkI7mnIDlsI/lgLxcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYiDmmKDlsITlkI7mnIDlpKflgLxcbiAgICAgKiBAcmV0dXJuIHsqfSAge251bWJlcn0g5pig5bCE5ZCO55qE5YC8XG4gICAgICogQG1lbWJlcm9mIE1hdGhVdGlsXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZU1hcChudW06bnVtYmVyLHg6bnVtYmVyLHk6bnVtYmVyLGE6bnVtYmVyLGI6bnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHJlc3VsdD0wO1xuICAgICAgICAvL+eul+WHuuavlOS+i1xuICAgICAgICBsZXQgcHJvcG9ydGlvbj1NYXRoLmFicyhudW0vKHkteCkpO1xuICAgICAgICBsZXQgbWFwcGluZz1NYXRoLmFicygoYi1hKSpwcm9wb3J0aW9uKTtcbiAgICAgICAgLy/mmKDlsITliLDmlrDljLrpl7RcbiAgICAgICAgcmVzdWx0PWErbWFwcGluZztcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbn0iXX0=