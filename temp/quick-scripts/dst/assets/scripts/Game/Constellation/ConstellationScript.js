
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
    ConstellationScript.prototype.StartAnimation = function () {
        //this.constellationArmatureDisplay.playAnimation("xingxing"+this.currentAnimationNumber,1);
        this.allAnimation[this.currentAnimationNumber].play("TianChengStar_Start");
        this.allAnimation[this.currentAnimationNumber].node.active = true;
        this.allAnimation[this.currentAnimationNumber].on('finished', this.OnFinished, this);
    };
    ConstellationScript.prototype.OnFinished = function () {
        console.log("播完了" + this.allAnimation[this.currentAnimationNumber].currentClip.name);
        this.playing = false;
        //先取消 监听
        this.allAnimation[this.currentAnimationNumber].off('finished', this.OnFinished, this);
        if (this.allAnimation[this.currentAnimationNumber].currentClip.name == "TianChengStar_Start") {
            this.allAnimation[this.currentAnimationNumber].play("TianChengStar_Idle");
            this.currentAnimationNumber++;
            //this.PlayNextStar();
            //检查是不是最后一个，如果是则发消息
            if (this.currentAnimationNumber >= this.allAnimation.length) {
                console.log("当前星座所有动画播放完毕");
                MessageDispatcher_1.default.Instance.Dispatch(MessageDef_1.MessageDef.ConstellationAnimationEnd, this.constellationNumber);
                return;
            }
            return;
        }
        // if (this.allAnimation[this.currentAnimationNumber].currentClip.name=="TianChengStar_Idle") {
        // }
    };
    ConstellationScript.prototype.PlayNextStar = function () {
        if (this.playing) {
            console.log("当前正在播放动画");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZVxcQ29uc3RlbGxhdGlvblxcQ29uc3RlbGxhdGlvblNjcmlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBa0Q7QUFDbEQsdUZBQWtGO0FBQ2xGLDJEQUFzRDtBQUVoRCxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQWlELHVDQUFZO0lBRDdEO1FBR0ksY0FBYztRQUNkLHdDQUF3QztRQUN4QyxxQkFBcUI7UUFDckIsS0FBSztRQUNMLDREQUE0RDtRQVBoRSxxRUFxSkM7UUF4SUcseUJBQW1CLEdBQVEsQ0FBQyxDQUFDO1FBTTdCLGtCQUFZLEdBQWdCLEVBQUUsQ0FBQztRQUcvQjs7Ozs7V0FLRztRQUNILDRCQUFzQixHQUFRLENBQUMsQ0FBQztRQUdoQzs7Ozs7V0FLRztRQUNILGFBQU8sR0FBUyxLQUFLLENBQUM7O1FBeUd0Qix3QkFBd0I7UUFFeEIsZUFBZTtRQUlmLGlCQUFpQjtJQUNyQixDQUFDO0lBOUdHLG1DQUFLLEdBQUw7UUFDSSxtSUFBbUk7UUFDbkksMklBQTJJO1FBQzNJLDRJQUE0STtJQUVoSixDQUFDO0lBR0Q7Ozs7T0FJRztJQUNILDhDQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTztZQUM3QixrQ0FBa0M7WUFDbEMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUMsQ0FBQyxDQUFDO1FBRTNCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNEOzs7O09BSUc7SUFDSCw0Q0FBYyxHQUFkO1FBQ0ksNEZBQTRGO1FBQzVGLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDM0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENB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QUMsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNuQixPQUFPLEVBQUMsTUFBTTtTQUNqQixDQUFDOzZEQUM2QjtJQWxCZCxtQkFBbUI7UUFEdkMsT0FBTztPQUNhLG1CQUFtQixDQW9KdkM7SUFBRCwwQkFBQztDQXBKRCxBQW9KQyxDQXBKZ0QsRUFBRSxDQUFDLFNBQVMsR0FvSjVEO2tCQXBKb0IsbUJBQW1CIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWVzc2FnZURlZiB9IGZyb20gXCIuLi8uLi9EZWYvTWVzc2FnZURlZlwiO1xuaW1wb3J0IE1lc3NhZ2VEaXNwYXRjaGVyIGZyb20gXCIuLi8uLi9NYW5hZ2VyL01lc3NhZ2VEaXNwYXRjaGVyL01lc3NhZ2VEaXNwYXRjaGVyXCI7XG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gXCIuLi8uLi9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0ZWxsYXRpb25TY3JpcHQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy8gQHByb3BlcnR5KHtcbiAgICAvLyAgICAgdHlwZTpkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXksXG4gICAgLy8gICAgIHRvb2x0aXA6XCLpvpnpqqjnu4Tku7ZcIlxuICAgIC8vIH0pXG4gICAgLy8gY29uc3RlbGxhdGlvbkFybWF0dXJlRGlzcGxheTpkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXk7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOk51bWJlcixcbiAgICAgICAgdG9vbHRpcDpcIue8luWPt1wiXG4gICAgfSlcbiAgICBjb25zdGVsbGF0aW9uTnVtYmVyOm51bWJlcj0wO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTpbY2MuQW5pbWF0aW9uXSxcbiAgICAgICAgdG9vbHRpcDpcIuWFqOmDqOe7hOS7tlwiXG4gICAgfSlcbiAgICBhbGxBbmltYXRpb246Y2MuQW5pbWF0aW9uW109W107XG5cblxuICAgIC8qKlxuICAgICAqIOW9k+WJjeaSreaUvuWIsOesrOWHoOS4quWKqOeUu1xuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQ29uc3RlbGxhdGlvblNjcmlwdFxuICAgICAqL1xuICAgIGN1cnJlbnRBbmltYXRpb25OdW1iZXI6bnVtYmVyPTA7XG5cblxuICAgIC8qKlxuICAgICAqIOW9k+WJjeaYr+WQpuato+WcqOaSreaUvuWKqOeUu1xuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQG1lbWJlcm9mIENvbnN0ZWxsYXRpb25TY3JpcHRcbiAgICAgKi9cbiAgICBwbGF5aW5nOmJvb2xlYW49ZmFsc2U7XG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIC8vIHRoaXMuY29uc3RlbGxhdGlvbkFybWF0dXJlRGlzcGxheS5hcm1hdHVyZSgpLmFkZEV2ZW50TGlzdGVuZXIoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUsdGhpcy5BbmltYXRpb25FdmVudEhhbmRsZXIsdGhpcyk7XG4gICAgICAgIC8vIHRoaXMuY29uc3RlbGxhdGlvbkFybWF0dXJlRGlzcGxheS5hcm1hdHVyZSgpLmFkZEV2ZW50TGlzdGVuZXIoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuRkFERV9JTl9DT01QTEVURSx0aGlzLkFuaW1hdGlvbkV2ZW50SGFuZGxlcix0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5jb25zdGVsbGF0aW9uQXJtYXR1cmVEaXNwbGF5LmFybWF0dXJlKCkuYWRkRXZlbnRMaXN0ZW5lcihkcmFnb25Cb25lcy5FdmVudE9iamVjdC5GQURFX09VVF9DT01QTEVURSx0aGlzLkFuaW1hdGlvbkV2ZW50SGFuZGxlcix0aGlzKTtcblxuICAgIH1cbiAgICBcblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMluaJgOacieWKqOeUu++8jOebuOW9k+S6juaKiuaJgOacieWtkOeJqeS9k+mAj+aYjuW6pumDveWPmOaIkDBcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBDb25zdGVsbGF0aW9uU2NyaXB0XG4gICAgICovXG4gICAgSW5pdEFsbEFuaW1hdGlvbigpe1xuICAgICAgICB0aGlzLmFsbEFuaW1hdGlvbi5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudC5ub2RlLm5hbWUpO1xuICAgICAgICAgICAgZWxlbWVudC5ub2RlLm9wYWNpdHk9MDtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5byA5aeL5pKt5pS+56ys5LiA5Liq5Yqo55S7XG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgQ29uc3RlbGxhdGlvblNjcmlwdFxuICAgICAqL1xuICAgIFN0YXJ0QW5pbWF0aW9uKCl7XG4gICAgICAgIC8vdGhpcy5jb25zdGVsbGF0aW9uQXJtYXR1cmVEaXNwbGF5LnBsYXlBbmltYXRpb24oXCJ4aW5neGluZ1wiK3RoaXMuY3VycmVudEFuaW1hdGlvbk51bWJlciwxKTtcbiAgICAgICAgdGhpcy5hbGxBbmltYXRpb25bdGhpcy5jdXJyZW50QW5pbWF0aW9uTnVtYmVyXS5wbGF5KFwiVGlhbkNoZW5nU3Rhcl9TdGFydFwiKTtcbiAgICAgICAgdGhpcy5hbGxBbmltYXRpb25bdGhpcy5jdXJyZW50QW5pbWF0aW9uTnVtYmVyXS5ub2RlLmFjdGl2ZT10cnVlO1xuXG4gICAgICAgIHRoaXMuYWxsQW5pbWF0aW9uW3RoaXMuY3VycmVudEFuaW1hdGlvbk51bWJlcl0ub24oJ2ZpbmlzaGVkJyx0aGlzLk9uRmluaXNoZWQsdGhpcyk7XG4gICAgfVxuXG4gICAgT25GaW5pc2hlZCgpe1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwi5pKt5a6M5LqGXCIrdGhpcy5hbGxBbmltYXRpb25bdGhpcy5jdXJyZW50QW5pbWF0aW9uTnVtYmVyXS5jdXJyZW50Q2xpcC5uYW1lKTtcbiAgICAgICAgdGhpcy5wbGF5aW5nPWZhbHNlO1xuXG4gICAgICAgIC8v5YWI5Y+W5raIIOebkeWQrFxuICAgICAgICB0aGlzLmFsbEFuaW1hdGlvblt0aGlzLmN1cnJlbnRBbmltYXRpb25OdW1iZXJdLm9mZignZmluaXNoZWQnLHRoaXMuT25GaW5pc2hlZCx0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5hbGxBbmltYXRpb25bdGhpcy5jdXJyZW50QW5pbWF0aW9uTnVtYmVyXS5jdXJyZW50Q2xpcC5uYW1lPT1cIlRpYW5DaGVuZ1N0YXJfU3RhcnRcIikge1xuICAgICAgICAgICAgdGhpcy5hbGxBbmltYXRpb25bdGhpcy5jdXJyZW50QW5pbWF0aW9uTnVtYmVyXS5wbGF5KFwiVGlhbkNoZW5nU3Rhcl9JZGxlXCIpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uTnVtYmVyKys7XG4gICAgICAgICAgICAvL3RoaXMuUGxheU5leHRTdGFyKCk7XG4gICAgICAgICAgICAvL+ajgOafpeaYr+S4jeaYr+acgOWQjuS4gOS4qu+8jOWmguaenOaYr+WImeWPkea2iOaBr1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEFuaW1hdGlvbk51bWJlcj49dGhpcy5hbGxBbmltYXRpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvZPliY3mmJ/luqfmiYDmnInliqjnlLvmkq3mlL7lrozmr5VcIik7XG4gICAgICAgICAgICAgICAgTWVzc2FnZURpc3BhdGNoZXIuSW5zdGFuY2UuRGlzcGF0Y2goTWVzc2FnZURlZi5Db25zdGVsbGF0aW9uQW5pbWF0aW9uRW5kLHRoaXMuY29uc3RlbGxhdGlvbk51bWJlcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgKHRoaXMuYWxsQW5pbWF0aW9uW3RoaXMuY3VycmVudEFuaW1hdGlvbk51bWJlcl0uY3VycmVudENsaXAubmFtZT09XCJUaWFuQ2hlbmdTdGFyX0lkbGVcIikge1xuICAgICAgICAgICAgXG4gICAgICAgIC8vIH1cblxuICAgICAgICBcbiAgICB9XG5cbiAgICBQbGF5TmV4dFN0YXIoKXtcbiAgICAgICAgaWYgKHRoaXMucGxheWluZykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvZPliY3mraPlnKjmkq3mlL7liqjnlLtcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy/lpoLmnpzmmK/nrKzkuIDnp43liqjnlLtcbiAgICAgICAgLy8gaWYgKHRoaXMuY3VycmVudEFuaW1hdGlvbk51bWJlcj09MCkge1xuICAgICAgICAvLyAgICAgdGhpcy5wbGF5aW5nPXRydWU7XG4gICAgICAgICAgICBcbiAgICAgICAgLy8gICAgIHRoaXMuYWxsQW5pbWF0aW9uW3RoaXMuY3VycmVudEFuaW1hdGlvbk51bWJlcl0ucGxheShcIlRpYW5DaGVuZ1N0YXJfU3RhcnRcIik7XG4gICAgICAgIC8vICAgICB0aGlzLmFsbEFuaW1hdGlvblt0aGlzLmN1cnJlbnRBbmltYXRpb25OdW1iZXJdLm5vZGUuYWN0aXZlPXRydWU7XG5cbiAgICAgICAgLy8gICAgIHRoaXMuYWxsQW5pbWF0aW9uW3RoaXMuY3VycmVudEFuaW1hdGlvbk51bWJlcl0ub24oJ2ZpbmlzaGVkJyx0aGlzLk9uRmluaXNoZWQsdGhpcyk7XG5cbiAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vIHRoaXMuY3VycmVudEFuaW1hdGlvbk51bWJlcisrO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wbGF5aW5nPXRydWU7XG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KDMpO1xuXG4gICAgICAgIGlmICh0aGlzLmFsbEFuaW1hdGlvblt0aGlzLmN1cnJlbnRBbmltYXRpb25OdW1iZXJdPT1udWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHRoaXMuYWxsQW5pbWF0aW9uW3RoaXMuY3VycmVudEFuaW1hdGlvbk51bWJlcl0ucGxheShcIlRpYW5DaGVuZ1N0YXJfU3RhcnRcIik7XG4gICAgICAgIHRoaXMuYWxsQW5pbWF0aW9uW3RoaXMuY3VycmVudEFuaW1hdGlvbk51bWJlcl0ub24oJ2ZpbmlzaGVkJyx0aGlzLk9uRmluaXNoZWQsdGhpcyk7XG4gICAgICAgIHRoaXMuYWxsQW5pbWF0aW9uW3RoaXMuY3VycmVudEFuaW1hdGlvbk51bWJlcl0ubm9kZS5hY3RpdmU9dHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuXG4gICAgb25EZXN0cm95KCl7XG4gICAgICAgIC8vIGlmICh0aGlzLmNvbnN0ZWxsYXRpb25Bcm1hdHVyZURpc3BsYXk9PW51bGwpIHtcbiAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyB0aGlzLmNvbnN0ZWxsYXRpb25Bcm1hdHVyZURpc3BsYXkuYXJtYXR1cmUoKS5yZW1vdmVFdmVudExpc3RlbmVyKGRyYWdvbkJvbmVzLkV2ZW50T2JqZWN0LkNPTVBMRVRFLHRoaXMuQW5pbWF0aW9uRXZlbnRIYW5kbGVyLHRoaXMpO1xuICAgICAgICAvLyB0aGlzLmNvbnN0ZWxsYXRpb25Bcm1hdHVyZURpc3BsYXkuYXJtYXR1cmUoKS5yZW1vdmVFdmVudExpc3RlbmVyKGRyYWdvbkJvbmVzLkV2ZW50T2JqZWN0LkZBREVfSU5fQ09NUExFVEUsdGhpcy5BbmltYXRpb25FdmVudEhhbmRsZXIsdGhpcyk7XG4gICAgICAgIC8vIHRoaXMuY29uc3RlbGxhdGlvbkFybWF0dXJlRGlzcGxheS5hcm1hdHVyZSgpLnJlbW92ZUV2ZW50TGlzdGVuZXIoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuRkFERV9PVVRfQ09NUExFVEUsdGhpcy5BbmltYXRpb25FdmVudEhhbmRsZXIsdGhpcyk7XG4gICAgfVxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cblxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==