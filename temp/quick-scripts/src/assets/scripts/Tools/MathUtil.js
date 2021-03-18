"use strict";
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