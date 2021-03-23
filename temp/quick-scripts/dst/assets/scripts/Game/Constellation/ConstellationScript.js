
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/Constellation/ConstellationScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cf80dVi+a1EAZvELBHQxlvU', 'ConstellationScript');
// scripts/Game/Constellation/ConstellationScript.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var MessageDef_1 = require("../../Def/MessageDef");
var MessageDispatcher_1 = require("../../Manager/MessageDispatcher/MessageDispatcher");
var SoundManager_1 = require("../../Manager/SoundManager");
var UserManager_1 = require("../../Manager/UserManager/UserManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ConstellationScript = /** @class */ (function (_super) {
    __extends(ConstellationScript, _super);
    function ConstellationScript() {
        // @property({
        //     type:dragonBones.ArmatureDisplay,
        //     tooltip:"龙骨组件"
        // })
        // constellationArmatureDisplay:dragonBones.ArmatureDisplay;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.constellationNumber = 0;
        _this.allAnimation = [];
        /**
         * 当前播放到第几个动画
         *
         * @type {number}
         * @memberof ConstellationScript
         */
        _this.currentAnimationNumber = 0;
        /**
         * 当前是否正在播放动画
         *
         * @type {boolean}
         * @memberof ConstellationScript
         */
        _this.playing = false;
        return _this;
        // LIFE-CYCLE CALLBACKS:
        // onLoad () {}
        // update (dt) {}
    }
    ConstellationScript.prototype.start = function () {
        // this.constellationArmatureDisplay.armature().addEventListener(dragonBones.EventObject.COMPLETE,this.AnimationEventHandler,this);
        // this.constellationArmatureDisplay.armature().addEventListener(dragonBones.EventObject.FADE_IN_COMPLETE,this.AnimationEventHandler,this);
        // this.constellationArmatureDisplay.armature().addEventListener(dragonBones.EventObject.FADE_OUT_COMPLETE,this.AnimationEventHandler,this);
    };
    //============================================================================================
    // NewPlayStar(){
    //     this.allAnimation[this.currentAnimationNumber].play("TianChengStar_Start");
    //     this.allAnimation[this.currentAnimationNumber].node.active=true;
    //     this.currentAnimationNumber++;
    //     this.allAnimation[this.currentAnimationNumber].once('finished',()=>{
    //         if (this.allAnimation[this.currentAnimationNumber].currentClip.name=="TianChengStar_Start") {
    //             this.allAnimation[this.currentAnimationNumber].play("TianChengStar_Idle");
    //         }
    //     },this);
    // }
    //===========================================================================================
    /**
     * 初始化所有动画，相当于把所有子物体透明度都变成0
     *
     * @memberof ConstellationScript
     */
    ConstellationScript.prototype.InitAllAnimation = function () {
        this.allAnimation.forEach(function (element) {
            // console.log(element.node.name);
            element.node.opacity = 0;
        });
    };
    /**
     * 开始播放第一个动画
     *
     * @memberof ConstellationScript
     */
    // StartAnimation(){
    //     this.allAnimation[this.currentAnimationNumber].play("TianChengStar_Start");
    //     this.allAnimation[this.currentAnimationNumber].node.active=true;
    //     this.allAnimation[this.currentAnimationNumber].on('finished',this.OnFinished,this);
    // }
    ConstellationScript.prototype.OnFinished = function () {
        //console.log("播完了"+this.allAnimation[this.currentAnimationNumber].currentClip.name);
        this.playing = false;
        //先取消 监听
        this.allAnimation[this.currentAnimationNumber].off('finished', this.OnFinished, this);
        if (this.allAnimation[this.currentAnimationNumber].currentClip.name == "TianChengStar_Start") {
            this.allAnimation[this.currentAnimationNumber].play("TianChengStar_Idle");
            this.currentAnimationNumber++;
            return;
        }
    };
    ConstellationScript.prototype.PlayNextStar = function () {
        if (this.playing) {
            console.error("当前正在播放动画");
            return;
        }
        //检查是不是最后一个，如果是则发消息
        if (this.currentAnimationNumber >= this.allAnimation.length) {
            //console.log("当前星座所有动画播放完毕,增加星座计数");
            UserManager_1.default.Instance.CurrentConstellationNumber += 1;
            MessageDispatcher_1.default.Instance.Dispatch(MessageDef_1.MessageDef.ConstellationAnimationEnd, this.constellationNumber);
            return;
        }
        //如果是第一种动画
        // if (this.currentAnimationNumber==0) {
        //     this.playing=true;
        //     this.allAnimation[this.currentAnimationNumber].play("TianChengStar_Start");
        //     this.allAnimation[this.currentAnimationNumber].node.active=true;
        //     this.allAnimation[this.currentAnimationNumber].on('finished',this.OnFinished,this);
        //     return;
        // }
        // this.currentAnimationNumber++;
        this.playing = true;
        SoundManager_1.default.playEffect(3);
        UserManager_1.default.Instance.CurrentStarNumber += 1;
        if (this.allAnimation == null) {
            return;
        }
        if (this.allAnimation[this.currentAnimationNumber] == null) {
            return;
        }
        this.allAnimation[this.currentAnimationNumber].play("TianChengStar_Start");
        this.allAnimation[this.currentAnimationNumber].on('finished', this.OnFinished, this);
        this.allAnimation[this.currentAnimationNumber].node.active = true;
    };
    ConstellationScript.prototype.onDestroy = function () {
        // if (this.constellationArmatureDisplay==null) {
        //     return;
        // }
        // this.constellationArmatureDisplay.armature().removeEventListener(dragonBones.EventObject.COMPLETE,this.AnimationEventHandler,this);
        // this.constellationArmatureDisplay.armature().removeEventListener(dragonBones.EventObject.FADE_IN_COMPLETE,this.AnimationEventHandler,this);
        // this.constellationArmatureDisplay.armature().removeEventListener(dragonBones.EventObject.FADE_OUT_COMPLETE,this.AnimationEventHandler,this);
    };
    __decorate([
        property({
            type: Number,
            tooltip: "编号"
        })
    ], ConstellationScript.prototype, "constellationNumber", void 0);
    __decorate([
        property({
            type: [cc.Animation],
            tooltip: "全部组件"
        })
    ], ConstellationScript.prototype, "allAnimation", void 0);
    ConstellationScript = __decorate([
        ccclass
    ], ConstellationScript);
    return ConstellationScript;
}(cc.Component));
exports.default = ConstellationScript;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZVxcQ29uc3RlbGxhdGlvblxcQ29uc3RlbGxhdGlvblNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBa0Q7QUFDbEQsdUZBQWtGO0FBQ2xGLDJEQUFzRDtBQUN0RCxxRUFBZ0U7QUFFMUQsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUFpRCx1Q0FBWTtJQUQ3RDtRQUdJLGNBQWM7UUFDZCx3Q0FBd0M7UUFDeEMscUJBQXFCO1FBQ3JCLEtBQUs7UUFDTCw0REFBNEQ7UUFQaEUscUVBa0tDO1FBckpHLHlCQUFtQixHQUFRLENBQUMsQ0FBQztRQU03QixrQkFBWSxHQUFnQixFQUFFLENBQUM7UUFHL0I7Ozs7O1dBS0c7UUFDSCw0QkFBc0IsR0FBUSxDQUFDLENBQUM7UUFHaEM7Ozs7O1dBS0c7UUFDSCxhQUFPLEdBQVMsS0FBSyxDQUFDOztRQXNIdEIsd0JBQXdCO1FBRXhCLGVBQWU7UUFJZixpQkFBaUI7SUFDckIsQ0FBQztJQTNIRyxtQ0FBSyxHQUFMO1FBQ0ksbUlBQW1JO1FBQ25JLDJJQUEySTtRQUMzSSw0SUFBNEk7SUFFaEosQ0FBQztJQUNELDhGQUE4RjtJQUM5RixpQkFBaUI7SUFDakIsa0ZBQWtGO0lBQ2xGLHVFQUF1RTtJQUN2RSxxQ0FBcUM7SUFDckMsMkVBQTJFO0lBQzNFLHdHQUF3RztJQUN4Ryx5RkFBeUY7SUFDekYsWUFBWTtJQUNaLGVBQWU7SUFDZixJQUFJO0lBR0osNkZBQTZGO0lBQzdGOzs7O09BSUc7SUFDSCw4Q0FBZ0IsR0FBaEI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDN0Isa0NBQWtDO1lBQ2xDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFDLENBQUMsQ0FBQztRQUUzQixDQUFDLENBQUMsQ0FBQztJQUNQ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QixDQWlLdkM7SUFBRCwwQkFBQztDQWpLRCxBQWlLQyxDQWpLZ0QsRUFBRSxDQUFDLFNBQVMsR0FpSzVEO2tCQWpLb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZURlZiB9IGZyb20gXCIuLi8uLi9EZWYvTWVzc2FnZURlZlwiO1xuaW1wb3J0IE1lc3NhZ2VEaXNwYXRjaGVyIGZyb20gXCIuLi8uLi9NYW5hZ2VyL01lc3NhZ2VEaXNwYXRjaGVyL01lc3NhZ2VEaXNwYXRjaGVyXCI7XG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gXCIuLi8uLi9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xuaW1wb3J0IFVzZXJNYW5hZ2VyIGZyb20gXCIuLi8uLi9NYW5hZ2VyL1VzZXJNYW5hZ2VyL1VzZXJNYW5hZ2VyXCI7XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc3RlbGxhdGlvblNjcmlwdCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICAvLyBAcHJvcGVydHkoe1xuICAgIC8vICAgICB0eXBlOmRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSxcbiAgICAvLyAgICAgdG9vbHRpcDpcIum+memqqOe7hOS7tlwiXG4gICAgLy8gfSlcbiAgICAvLyBjb25zdGVsbGF0aW9uQXJtYXR1cmVEaXNwbGF5OmRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheTtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6TnVtYmVyLFxuICAgICAgICB0b29sdGlwOlwi57yW5Y+3XCJcbiAgICB9KVxuICAgIGNvbnN0ZWxsYXRpb25OdW1iZXI6bnVtYmVyPTA7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOltjYy5BbmltYXRpb25dLFxuICAgICAgICB0b29sdGlwOlwi5YWo6YOo57uE5Lu2XCJcbiAgICB9KVxuICAgIGFsbEFuaW1hdGlvbjpjYy5BbmltYXRpb25bXT1bXTtcblxuXG4gICAgLyoqXG4gICAgICog5b2T5YmN5pKt5pS+5Yiw56ys5Yeg5Liq5Yqo55S7XG4gICAgICpcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBtZW1iZXJvZiBDb25zdGVsbGF0aW9uU2NyaXB0XG4gICAgICovXG4gICAgY3VycmVudEFuaW1hdGlvbk51bWJlcjpudW1iZXI9MDtcblxuXG4gICAgLyoqXG4gICAgICog5b2T5YmN5piv5ZCm5q2j5Zyo5pKt5pS+5Yqo55S7XG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAbWVtYmVyb2YgQ29uc3RlbGxhdGlvblNjcmlwdFxuICAgICAqL1xuICAgIHBsYXlpbmc6Ym9vbGVhbj1mYWxzZTtcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8gdGhpcy5jb25zdGVsbGF0aW9uQXJtYXR1cmVEaXNwbGF5LmFybWF0dXJlKCkuYWRkRXZlbnRMaXN0ZW5lcihkcmFnb25Cb25lcy5FdmVudE9iamVjdC5DT01QTEVURSx0aGlzLkFuaW1hdGlvbkV2ZW50SGFuZGxlcix0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5jb25zdGVsbGF0aW9uQXJtYXR1cmVEaXNwbGF5LmFybWF0dXJlKCkuYWRkRXZlbnRMaXN0ZW5lcihkcmFnb25Cb25lcy5FdmVudE9iamVjdC5GQURFX0lOX0NPTVBMRVRFLHRoaXMuQW5pbWF0aW9uRXZlbnRIYW5kbGVyLHRoaXMpO1xuICAgICAgICAvLyB0aGlzLmNvbnN0ZWxsYXRpb25Bcm1hdHVyZURpc3BsYXkuYXJtYXR1cmUoKS5hZGRFdmVudExpc3RlbmVyKGRyYWdvbkJvbmVzLkV2ZW50T2JqZWN0LkZBREVfT1VUX0NPTVBMRVRFLHRoaXMuQW5pbWF0aW9uRXZlbnRIYW5kbGVyLHRoaXMpO1xuXG4gICAgfVxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBOZXdQbGF5U3Rhcigpe1xuICAgIC8vICAgICB0aGlzLmFsbEFuaW1hdGlvblt0aGlzLmN1cnJlbnRBbmltYXRpb25OdW1iZXJdLnBsYXkoXCJUaWFuQ2hlbmdTdGFyX1N0YXJ0XCIpO1xuICAgIC8vICAgICB0aGlzLmFsbEFuaW1hdGlvblt0aGlzLmN1cnJlbnRBbmltYXRpb25OdW1iZXJdLm5vZGUuYWN0aXZlPXRydWU7XG4gICAgLy8gICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbk51bWJlcisrO1xuICAgIC8vICAgICB0aGlzLmFsbEFuaW1hdGlvblt0aGlzLmN1cnJlbnRBbmltYXRpb25OdW1iZXJdLm9uY2UoJ2ZpbmlzaGVkJywoKT0+e1xuICAgIC8vICAgICAgICAgaWYgKHRoaXMuYWxsQW5pbWF0aW9uW3RoaXMuY3VycmVudEFuaW1hdGlvbk51bWJlcl0uY3VycmVudENsaXAubmFtZT09XCJUaWFuQ2hlbmdTdGFyX1N0YXJ0XCIpIHtcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmFsbEFuaW1hdGlvblt0aGlzLmN1cnJlbnRBbmltYXRpb25OdW1iZXJdLnBsYXkoXCJUaWFuQ2hlbmdTdGFyX0lkbGVcIik7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0sdGhpcyk7XG4gICAgLy8gfVxuXG5cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJbmiYDmnInliqjnlLvvvIznm7jlvZPkuo7miormiYDmnInlrZDniankvZPpgI/mmI7luqbpg73lj5jmiJAwXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29uc3RlbGxhdGlvblNjcmlwdFxuICAgICAqL1xuICAgIEluaXRBbGxBbmltYXRpb24oKXtcbiAgICAgICAgdGhpcy5hbGxBbmltYXRpb24uZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVsZW1lbnQubm9kZS5uYW1lKTtcbiAgICAgICAgICAgIGVsZW1lbnQubm9kZS5vcGFjaXR5PTA7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOW8gOWni+aSreaUvuesrOS4gOS4quWKqOeUu1xuICAgICAqXG4gICAgICogQG1lbWJlcm9mIENvbnN0ZWxsYXRpb25TY3JpcHRcbiAgICAgKi9cbiAgICAvLyBTdGFydEFuaW1hdGlvbigpe1xuXG4gICAgLy8gICAgIHRoaXMuYWxsQW5pbWF0aW9uW3RoaXMuY3VycmVudEFuaW1hdGlvbk51bWJlcl0ucGxheShcIlRpYW5DaGVuZ1N0YXJfU3RhcnRcIik7XG4gICAgLy8gICAgIHRoaXMuYWxsQW5pbWF0aW9uW3RoaXMuY3VycmVudEFuaW1hdGlvbk51bWJlcl0ubm9kZS5hY3RpdmU9dHJ1ZTtcblxuICAgIC8vICAgICB0aGlzLmFsbEFuaW1hdGlvblt0aGlzLmN1cnJlbnRBbmltYXRpb25OdW1iZXJdLm9uKCdmaW5pc2hlZCcsdGhpcy5PbkZpbmlzaGVkLHRoaXMpO1xuICAgIC8vIH1cblxuICAgIE9uRmluaXNoZWQoKXtcblxuICAgICAgICAvL2NvbnNvbGUubG9nKFwi5pKt5a6M5LqGXCIrdGhpcy5hbGxBbmltYXRpb25bdGhpcy5jdXJyZW50QW5pbWF0aW9uTnVtYmVyXS5jdXJyZW50Q2xpcC5uYW1lKTtcbiAgICAgICAgdGhpcy5wbGF5aW5nPWZhbHNlO1xuXG4gICAgICAgIC8v5YWI5Y+W5raIIOebkeWQrFxuICAgICAgICB0aGlzLmFsbEFuaW1hdGlvblt0aGlzLmN1cnJlbnRBbmltYXRpb25OdW1iZXJdLm9mZignZmluaXNoZWQnLHRoaXMuT25GaW5pc2hlZCx0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5hbGxBbmltYXRpb25bdGhpcy5jdXJyZW50QW5pbWF0aW9uTnVtYmVyXS5jdXJyZW50Q2xpcC5uYW1lPT1cIlRpYW5DaGVuZ1N0YXJfU3RhcnRcIikge1xuICAgICAgICAgICAgdGhpcy5hbGxBbmltYXRpb25bdGhpcy5jdXJyZW50QW5pbWF0aW9uTnVtYmVyXS5wbGF5KFwiVGlhbkNoZW5nU3Rhcl9JZGxlXCIpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uTnVtYmVyKys7XG4gIFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgUGxheU5leHRTdGFyKCl7XG4gICAgICAgIGlmICh0aGlzLnBsYXlpbmcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLlvZPliY3mraPlnKjmkq3mlL7liqjnlLtcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8v5qOA5p+l5piv5LiN5piv5pyA5ZCO5LiA5Liq77yM5aaC5p6c5piv5YiZ5Y+R5raI5oGvXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRBbmltYXRpb25OdW1iZXI+PXRoaXMuYWxsQW5pbWF0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIuW9k+WJjeaYn+W6p+aJgOacieWKqOeUu+aSreaUvuWujOavlSzlop7liqDmmJ/luqforqHmlbBcIik7XG4gICAgICAgICAgICBVc2VyTWFuYWdlci5JbnN0YW5jZS5DdXJyZW50Q29uc3RlbGxhdGlvbk51bWJlciArPSAxO1xuXG4gICAgICAgICAgICBNZXNzYWdlRGlzcGF0Y2hlci5JbnN0YW5jZS5EaXNwYXRjaChNZXNzYWdlRGVmLkNvbnN0ZWxsYXRpb25BbmltYXRpb25FbmQsdGhpcy5jb25zdGVsbGF0aW9uTnVtYmVyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5aaC5p6c5piv56ys5LiA56eN5Yqo55S7XG4gICAgICAgIC8vIGlmICh0aGlzLmN1cnJlbnRBbmltYXRpb25OdW1iZXI9PTApIHtcbiAgICAgICAgLy8gICAgIHRoaXMucGxheWluZz10cnVlO1xuICAgICAgICAgICAgXG4gICAgICAgIC8vICAgICB0aGlzLmFsbEFuaW1hdGlvblt0aGlzLmN1cnJlbnRBbmltYXRpb25OdW1iZXJdLnBsYXkoXCJUaWFuQ2hlbmdTdGFyX1N0YXJ0XCIpO1xuICAgICAgICAvLyAgICAgdGhpcy5hbGxBbmltYXRpb25bdGhpcy5jdXJyZW50QW5pbWF0aW9uTnVtYmVyXS5ub2RlLmFjdGl2ZT10cnVlO1xuXG4gICAgICAgIC8vICAgICB0aGlzLmFsbEFuaW1hdGlvblt0aGlzLmN1cnJlbnRBbmltYXRpb25OdW1iZXJdLm9uKCdmaW5pc2hlZCcsdGhpcy5PbkZpbmlzaGVkLHRoaXMpO1xuXG4gICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyB0aGlzLmN1cnJlbnRBbmltYXRpb25OdW1iZXIrKztcbiAgICAgICAgXG4gICAgICAgIHRoaXMucGxheWluZz10cnVlO1xuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdCgzKTtcbiAgICAgICAgVXNlck1hbmFnZXIuSW5zdGFuY2UuQ3VycmVudFN0YXJOdW1iZXIgKz0gMTtcblxuICAgICAgICBpZiAodGhpcy5hbGxBbmltYXRpb249PW51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5hbGxBbmltYXRpb25bdGhpcy5jdXJyZW50QW5pbWF0aW9uTnVtYmVyXT09bnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmFsbEFuaW1hdGlvblt0aGlzLmN1cnJlbnRBbmltYXRpb25OdW1iZXJdLnBsYXkoXCJUaWFuQ2hlbmdTdGFyX1N0YXJ0XCIpO1xuICAgICAgICB0aGlzLmFsbEFuaW1hdGlvblt0aGlzLmN1cnJlbnRBbmltYXRpb25OdW1iZXJdLm9uKCdmaW5pc2hlZCcsdGhpcy5PbkZpbmlzaGVkLHRoaXMpO1xuICAgICAgICB0aGlzLmFsbEFuaW1hdGlvblt0aGlzLmN1cnJlbnRBbmltYXRpb25OdW1iZXJdLm5vZGUuYWN0aXZlPXRydWU7XG4gICAgfVxuXG5cbiAgICBvbkRlc3Ryb3koKXtcbiAgICAgICAgLy8gaWYgKHRoaXMuY29uc3RlbGxhdGlvbkFybWF0dXJlRGlzcGxheT09bnVsbCkge1xuICAgICAgICAvLyAgICAgcmV0dXJuO1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIHRoaXMuY29uc3RlbGxhdGlvbkFybWF0dXJlRGlzcGxheS5hcm1hdHVyZSgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUsdGhpcy5BbmltYXRpb25FdmVudEhhbmRsZXIsdGhpcyk7XG4gICAgICAgIC8vIHRoaXMuY29uc3RlbGxhdGlvbkFybWF0dXJlRGlzcGxheS5hcm1hdHVyZSgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuRkFERV9JTl9DT01QTEVURSx0aGlzLkFuaW1hdGlvbkV2ZW50SGFuZGxlcix0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5jb25zdGVsbGF0aW9uQXJtYXR1cmVEaXNwbGF5LmFybWF0dXJlKCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihkcmFnb25Cb25lcy5FdmVudE9iamVjdC5GQURFX09VVF9DT01QTEVURSx0aGlzLkFuaW1hdGlvbkV2ZW50SGFuZGxlcix0aGlzKTtcbiAgICB9XG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge31cblxuXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19