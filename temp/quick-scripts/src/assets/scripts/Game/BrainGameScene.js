"use strict";
cc._RF.push(module, 'f73b4JZd5ND76FUX3hdIHQL', 'BrainGameScene');
// scripts/Game/BrainGameScene.ts

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
var MessageDef_1 = require("../Def/MessageDef");
var MessageDispatcher_1 = require("../Manager/MessageDispatcher/MessageDispatcher");
var SoundManager_1 = require("../Manager/SoundManager");
var UserManager_1 = require("../Manager/UserManager/UserManager");
var ResUtil_1 = require("../Tools/ResUtil");
var ConstellationScript_1 = require("./Constellation/ConstellationScript");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BrainGameScene = /** @class */ (function (_super) {
    __extends(BrainGameScene, _super);
    function BrainGameScene() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.AllAnimationNames = [];
        _this.AllStarScript = [];
        /**
         * 当前正在执行的星座脚本
         *
         * @type {ConstellationScript}
         * @memberof BrainGameScene
         */
        _this.NowStarScript = null;
        /**
         * 是否正在切换星座动画中
         *
         * @type {boolean}
         * @memberof BrainGameScene
         */
        _this.SwitchAnimationPlaying = false;
        /**
         * 固定值，甲方定的
         *
         * @type {number}
         * @memberof BrainGameScene
         */
        _this.RelaxationValue = 55.51;
        // value1:number=0;
        // value2:number=0;
        _this.valueSumList = [0, 0];
        return _this;
        // update (dt) {}
    }
    BrainGameScene.prototype.onLoad = function () {
        MessageDispatcher_1.default.Instance.AddEventListener(MessageDef_1.MessageDef.BrainGameStart, this.BrainGameStartHandler, this);
        MessageDispatcher_1.default.Instance.AddEventListener(MessageDef_1.MessageDef.BrainGameEnd, this.BrainGameEndHandler, this);
        MessageDispatcher_1.default.Instance.AddEventListener(MessageDef_1.MessageDef.BrainValueChangeMessage, this.BrainValueChangeMessageHandler, this);
        MessageDispatcher_1.default.Instance.AddEventListener(MessageDef_1.MessageDef.ConstellationAnimationEnd, this.ConstellationAnimationEndHandler, this);
        MessageDispatcher_1.default.Instance.AddEventListener(MessageDef_1.MessageDef.BrainBlockMessage, this.BrainBlockMessageHandler, this);
        MessageDispatcher_1.default.Instance.AddEventListener(MessageDef_1.MessageDef.BrainNotConnectMessage, this.BrainNotConnectMessageHandler, this);
    };
    BrainGameScene.prototype.onDestroy = function () {
        MessageDispatcher_1.default.Instance.RemoveEventListener(MessageDef_1.MessageDef.BrainGameStart, this.BrainGameStartHandler, this);
        MessageDispatcher_1.default.Instance.RemoveEventListener(MessageDef_1.MessageDef.BrainGameEnd, this.BrainGameEndHandler, this);
        MessageDispatcher_1.default.Instance.RemoveEventListener(MessageDef_1.MessageDef.BrainValueChangeMessage, this.BrainValueChangeMessageHandler, this);
        MessageDispatcher_1.default.Instance.RemoveEventListener(MessageDef_1.MessageDef.ConstellationAnimationEnd, this.ConstellationAnimationEndHandler, this);
        MessageDispatcher_1.default.Instance.RemoveEventListener(MessageDef_1.MessageDef.BrainBlockMessage, this.BrainBlockMessageHandler, this);
        MessageDispatcher_1.default.Instance.RemoveEventListener(MessageDef_1.MessageDef.BrainNotConnectMessage, this.BrainNotConnectMessageHandler, this);
    };
    BrainGameScene.prototype.start = function () {
        // this.baiyang.armature().addEventListener(dragonBones.EventObject.COMPLETE,this.AnimationEventHandler,this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    };
    BrainGameScene.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                if (this.SwitchAnimationPlaying) {
                    console.log("当前正在播放切换星座动画");
                    return;
                }
                this.NowStarScript.PlayNextStar();
                console.log('按了A');
                break;
        }
    };
    BrainGameScene.prototype.BrainBlockMessageHandler = function () {
        //清空两个数字
        for (var index = 0; index < this.valueSumList.length; index++) {
            this.valueSumList[index] = 0;
        }
    };
    BrainGameScene.prototype.BrainNotConnectMessageHandler = function () {
        //清空两个数字
        for (var index = 0; index < this.valueSumList.length; index++) {
            this.valueSumList[index] = 0;
        }
    };
    /**
     * 拿到一次数据，这里要判断值
     *
     * @param {BrainModel} module
     * @memberof BrainGameScene
     */
    BrainGameScene.prototype.BrainValueChangeMessageHandler = function (module) {
        // console.log("--> " + this.valueSumList[0] + "--" + this.valueSumList[1]);
        if (this.valueSumList[0] == 0) {
            this.valueSumList[0] = Number(module.brain[0].Relaxation);
            this.valueSumList[1] = 0;
            return;
        }
        else {
            if (this.valueSumList[1] == 0) {
                this.valueSumList[1] = Number(module.brain[0].Relaxation);
                //判断值有没有超过阈值，然后调用
                // if (Number(module.brain[0].Relaxation)>=this.RelaxationValue) {
                //     this.NowStarScript.PlayNextStar();
                // }
                if (((this.valueSumList[0] + this.valueSumList[1]) / 2) >= this.RelaxationValue) {
                    //清空两个数字
                    for (var index = 0; index < this.valueSumList.length; index++) {
                        this.valueSumList[index] = 0;
                    }
                    this.NowStarScript.PlayNextStar();
                }
                else {
                    //清空两个数字
                    for (var index = 0; index < this.valueSumList.length; index++) {
                        this.valueSumList[index] = 0;
                    }
                    this.valueSumList.forEach(function (element) {
                        element = 0;
                    });
                }
            }
        }
    };
    BrainGameScene.prototype.BrainGameStartHandler = function () {
        var _this = this;
        console.log("开始创建地形");
        this.SceneCamera.position = new cc.Vec3(334.282, 174.654);
        this.SwitchAnimationPlaying = false;
        this.valueSumList = [0, 0];
        //创建地形
        ResUtil_1.default.LoadPrefab("Background", function (res) {
            _this.BackgroundObject = res;
            //获取所有星座组件
            _this.AllStarScript = _this.node.getChildByName("Background").getComponentsInChildren(ConstellationScript_1.default);
            console.log("一共是多少个星星：" + _this.AllStarScript.length);
            //把所有的都初始化
            _this.AllStarScript.forEach(function (element) {
                element.InitAllAnimation();
                if (element.constellationNumber == 0) {
                    _this.NowStarScript = element;
                    //从第一颗星星开始播放动画
                    //this.StartStarAnimation();
                    //return;
                }
            });
            // this.AllStarScript[0]
        });
    };
    BrainGameScene.prototype.BrainGameEndHandler = function () {
        this.BackgroundObject.destroy();
        this.SwitchAnimationPlaying = false;
    };
    /**
     * 星座动画播放完了，需要切换到下一个星座
     *
     * @param {number} num
     * @return {*}
     * @memberof BrainGameScene
     */
    BrainGameScene.prototype.ConstellationAnimationEndHandler = function (num) {
        if (num + 1 >= 5) {
            console.log("超过最大星座限制");
            return;
        }
        else {
            //当前星座+1
            UserManager_1.default.Instance.CurrentConstellationNumber += 1;
            //切换到下一个，然后播放动画
            this.SwitchNextAnimation(num + 1);
        }
    };
    /**
     * 让当前星座开始播放动画
     *
     * @memberof BrainGameScene
     */
    BrainGameScene.prototype.StartStarAnimation = function () {
        if (this.NowStarScript == null) {
            console.log("当前星座丢失");
            return;
        }
        this.NowStarScript.StartAnimation();
    };
    /**
     * 切换到下一个星座的动画
     *
     * @param {number} nextnumber
     * @memberof BrainGameScene
     */
    BrainGameScene.prototype.SwitchNextAnimation = function (nextnumber) {
        var _this = this;
        this.SwitchAnimationPlaying = true;
        //这里等1s
        setTimeout(function () {
            SoundManager_1.default.playEffect(4);
            _this.SceneCamera.getComponent(cc.Animation).play(_this.AllAnimationNames[_this.NowStarScript.constellationNumber]);
            _this.SceneCamera.getComponent(cc.Animation).on("finished", _this.SwitchAnimationEnd, _this);
        }, 1000);
    };
    BrainGameScene.prototype.SwitchAnimationEnd = function () {
        this.SceneCamera.getComponent(cc.Animation).off("finished", this.SwitchAnimationEnd, this);
        console.log("切换动画结束" + this.NowStarScript.constellationNumber + 1);
        this.NowStarScript = this.AllStarScript[this.NowStarScript.constellationNumber + 1];
        this.SwitchAnimationPlaying = false;
        //自动播放第一个
        // this.StartStarAnimation();
    };
    __decorate([
        property({
            type: [String]
        })
    ], BrainGameScene.prototype, "AllAnimationNames", void 0);
    __decorate([
        property({
            type: cc.Node
        })
    ], BrainGameScene.prototype, "SceneCamera", void 0);
    __decorate([
        property({
            type: [ConstellationScript_1.default]
        })
    ], BrainGameScene.prototype, "AllStarScript", void 0);
    BrainGameScene = __decorate([
        ccclass
    ], BrainGameScene);
    return BrainGameScene;
}(cc.Component));
exports.default = BrainGameScene;

cc._RF.pop();