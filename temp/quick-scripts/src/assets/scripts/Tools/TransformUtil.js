"use strict";
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