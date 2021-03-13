const {
    ccclass,
    property
} = cc._decorator;
/**
 * MathUtil
 * @ author: SlowFeather
 * @ wechat: BackedByTheWT
 * @ data: 2020-07-06 10:31
 */
@ccclass
export default class MathUtil {


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
    public static randomInterger(min: number, max: number): number {
        return min + Math.floor(Math.random() * (max - min + 1));
    }

    /**
     * 产生随机数，包含下限值，但不包括上限值
     * @param {Number} lower 下限
     * @param {Number} upper 上限
     * @return {Number} 返回在下限到上限之间的一个随机数
     */
    public static randomExceptUpper(lower, upper) {
        return Math.random() * (upper - lower) + lower;
    }


    /**
     * 产生随机数，包含下限值，包括上限值
     * @param {Number} lower 下限
     * @param {Number} upper 上限
     * @return {Number} 返回在下限到上限之间的一个随机数
     */
    public static random(lower, upper) {
        //0-1
        return (Math.random() * (upper - lower + 1)) + lower;
    }

    /**
     * 得到两点间的距离
     *
     * @static
     * @param {cc.Vec2} p1
     * @param {cc.Vec2} p2
     * @returns {number}
     * @memberof MathUtil
     */
    public static getDisOfTwoPos(p1: cc.Vec2, p2: cc.Vec2): number {
        let l: number = p1.sub(p2).mag();
        return l;
    }

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
    public static reMap(num:number,x:number,y:number,a:number,b:number): number {
        let result=0;
        //算出比例
        let proportion=Math.abs(num/(y-x));
        let mapping=Math.abs((b-a)*proportion);
        //映射到新区间
        result=a+mapping;
        return result;
    }

}