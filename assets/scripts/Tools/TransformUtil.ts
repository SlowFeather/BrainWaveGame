const { ccclass, property } = cc._decorator;
/**
* TransformUtil
* 移动工具
* @ author: SlowFeather
* @ wechat: BackedByTheWT
* @ data: 2020-07-14 13:44
*/
@ccclass
export default class TransformUtil {


    public static convetOtherNodeSpaceAR(node: cc.Node, targetNode) {
        if (!node || !targetNode) {
            return null
        }
        let worldPoint = this.localConvertWorldPointAR(node);
        return this.worldConvertLocalPointAR(targetNode, worldPoint);
    }


    public static localConvertWorldPointAR(node: cc.Node) {
        if (node) {
            return node.convertToWorldSpaceAR(cc.v2(0, 0));

        }
        return null;
    }

    public static worldConvertLocalPointAR(node: cc.Node, worldPoint) {
        if (node) {
            return node.convertToNodeSpaceAR(worldPoint)
        }
    }










    /**
     * 拿到世界坐标
     *
     * @static
     * @param {cc.Node} node
     * @returns {cc.Vec2}
     * @memberof TransformUtil
     */
    public static GetWorldPostation2(node: cc.Node): cc.Vec2 {
        if (node.parent == null) return node.getPosition()
        return node.parent.convertToWorldSpaceAR(node.getPosition())
    }

    /**
     * 拿到世界坐标
     * 
     * @static
     * @param {cc.Node} node
     * @returns {cc.Vec3}
     * @memberof TransformUtil
     */
    public static GetWorldPostation3(node: cc.Node): cc.Vec3 {
        if (node.parent == null) return node.position
        return node.parent.convertToWorldSpaceAR(node.position)
    }

    /**
     * 将世界坐标转换为当前node的坐标
     *
     * @static
     * @param {cc.Node} node 当前的node
     * @param {cc.Vec2} worldPos 世界坐标
     * @returns {cc.Vec2}
     * @memberof TransformUtil
     */
    public static GetNodePostation2(node: cc.Node, worldPos: cc.Vec2): cc.Vec2 {
        if (node.parent == null) return worldPos;
        return node.parent.convertToNodeSpaceAR(worldPos)
    }

}