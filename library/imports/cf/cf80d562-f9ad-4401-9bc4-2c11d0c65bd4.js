"use strict";
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