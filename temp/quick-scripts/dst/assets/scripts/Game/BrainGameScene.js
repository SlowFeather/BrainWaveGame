
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game/BrainGameScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZVxcQnJhaW5HYW1lU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBRTJCO0FBSTNCLG9GQUErRTtBQUMvRSx3REFBbUQ7QUFDbkQsa0VBQTZEO0FBQzdELDRDQUF1QztBQUN2QywyRUFBc0U7QUFFaEUsSUFBQSxrQkFHVyxFQUZiLG9CQUFPLEVBQ1Asc0JBQ2EsQ0FBQztBQUdsQjtJQUE0QyxrQ0FBWTtJQUR4RDtRQUFBLHFFQXdQQztRQWpQRyx1QkFBaUIsR0FBYSxFQUFFLENBQUM7UUFZakMsbUJBQWEsR0FBMEIsRUFBRSxDQUFDO1FBRTFDOzs7OztXQUtHO1FBQ0gsbUJBQWEsR0FBd0IsSUFBSSxDQUFDO1FBSTFDOzs7OztXQUtHO1FBQ0gsNEJBQXNCLEdBQVksS0FBSyxDQUFDO1FBR3hDOzs7OztXQUtHO1FBQ0gscUJBQWUsR0FBVyxLQUFLLENBQUM7UUE0RGhDLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsa0JBQVksR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTs7UUEySS9CLGlCQUFpQjtJQUNyQixDQUFDO0lBeE1HLCtCQUFNLEdBQU47UUFDSSwyQkFBaUIsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsdUJBQVUsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pHLDJCQUFpQixDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBVSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFckcsMkJBQWlCLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLHVCQUFVLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLDhCQUE4QixFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTNILDJCQUFpQixDQUFDLFFBQVEs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Iiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIE1lc3NhZ2VEZWZcbn0gZnJvbSBcIi4uL0RlZi9NZXNzYWdlRGVmXCI7XG5pbXBvcnQge1xuICAgIEJyYWluTW9kZWxcbn0gZnJvbSBcIi4uL01hbmFnZXIvRHJpdmVNYW5hZ2VyL0RyaXZlTWFuYWdlclwiO1xuaW1wb3J0IE1lc3NhZ2VEaXNwYXRjaGVyIGZyb20gXCIuLi9NYW5hZ2VyL01lc3NhZ2VEaXNwYXRjaGVyL01lc3NhZ2VEaXNwYXRjaGVyXCI7XG5pbXBvcnQgU291bmRNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xuaW1wb3J0IFVzZXJNYW5hZ2VyIGZyb20gXCIuLi9NYW5hZ2VyL1VzZXJNYW5hZ2VyL1VzZXJNYW5hZ2VyXCI7XG5pbXBvcnQgUmVzVXRpbCBmcm9tIFwiLi4vVG9vbHMvUmVzVXRpbFwiO1xuaW1wb3J0IENvbnN0ZWxsYXRpb25TY3JpcHQgZnJvbSBcIi4vQ29uc3RlbGxhdGlvbi9Db25zdGVsbGF0aW9uU2NyaXB0XCI7XG5cbmNvbnN0IHtcbiAgICBjY2NsYXNzLFxuICAgIHByb3BlcnR5XG59ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYWluR2FtZVNjZW5lIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogW1N0cmluZ11cbiAgICB9KVxuICAgIEFsbEFuaW1hdGlvbk5hbWVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgIH0pXG4gICAgU2NlbmVDYW1lcmE6IGNjLk5vZGU7XG5cblxuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogW0NvbnN0ZWxsYXRpb25TY3JpcHRdXG4gICAgfSlcbiAgICBBbGxTdGFyU2NyaXB0OiBDb25zdGVsbGF0aW9uU2NyaXB0W10gPSBbXTtcblxuICAgIC8qKlxuICAgICAqIOW9k+WJjeato+WcqOaJp+ihjOeahOaYn+W6p+iEmuacrFxuICAgICAqXG4gICAgICogQHR5cGUge0NvbnN0ZWxsYXRpb25TY3JpcHR9XG4gICAgICogQG1lbWJlcm9mIEJyYWluR2FtZVNjZW5lXG4gICAgICovXG4gICAgTm93U3RhclNjcmlwdDogQ29uc3RlbGxhdGlvblNjcmlwdCA9IG51bGw7XG5cbiAgICBCYWNrZ3JvdW5kT2JqZWN0OiBjYy5Ob2RlO1xuXG4gICAgLyoqXG4gICAgICog5piv5ZCm5q2j5Zyo5YiH5o2i5pif5bqn5Yqo55S75LitXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Ym9vbGVhbn1cbiAgICAgKiBAbWVtYmVyb2YgQnJhaW5HYW1lU2NlbmVcbiAgICAgKi9cbiAgICBTd2l0Y2hBbmltYXRpb25QbGF5aW5nOiBib29sZWFuID0gZmFsc2U7XG5cblxuICAgIC8qKlxuICAgICAqIOWbuuWumuWAvO+8jOeUsuaWueWumueahFxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKiBAbWVtYmVyb2YgQnJhaW5HYW1lU2NlbmVcbiAgICAgKi9cbiAgICBSZWxheGF0aW9uVmFsdWU6IG51bWJlciA9IDU1LjUxO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBNZXNzYWdlRGlzcGF0Y2hlci5JbnN0YW5jZS5BZGRFdmVudExpc3RlbmVyKE1lc3NhZ2VEZWYuQnJhaW5HYW1lU3RhcnQsIHRoaXMuQnJhaW5HYW1lU3RhcnRIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgTWVzc2FnZURpc3BhdGNoZXIuSW5zdGFuY2UuQWRkRXZlbnRMaXN0ZW5lcihNZXNzYWdlRGVmLkJyYWluR2FtZUVuZCwgdGhpcy5CcmFpbkdhbWVFbmRIYW5kbGVyLCB0aGlzKTtcblxuICAgICAgICBNZXNzYWdlRGlzcGF0Y2hlci5JbnN0YW5jZS5BZGRFdmVudExpc3RlbmVyKE1lc3NhZ2VEZWYuQnJhaW5WYWx1ZUNoYW5nZU1lc3NhZ2UsIHRoaXMuQnJhaW5WYWx1ZUNoYW5nZU1lc3NhZ2VIYW5kbGVyLCB0aGlzKTtcblxuICAgICAgICBNZXNzYWdlRGlzcGF0Y2hlci5JbnN0YW5jZS5BZGRFdmVudExpc3RlbmVyKE1lc3NhZ2VEZWYuQ29uc3RlbGxhdGlvbkFuaW1hdGlvbkVuZCwgdGhpcy5Db25zdGVsbGF0aW9uQW5pbWF0aW9uRW5kSGFuZGxlciwgdGhpcyk7XG5cbiAgICAgICAgTWVzc2FnZURpc3BhdGNoZXIuSW5zdGFuY2UuQWRkRXZlbnRMaXN0ZW5lcihNZXNzYWdlRGVmLkJyYWluQmxvY2tNZXNzYWdlLCB0aGlzLkJyYWluQmxvY2tNZXNzYWdlSGFuZGxlciwgdGhpcyk7XG4gICAgICAgIE1lc3NhZ2VEaXNwYXRjaGVyLkluc3RhbmNlLkFkZEV2ZW50TGlzdGVuZXIoTWVzc2FnZURlZi5CcmFpbk5vdENvbm5lY3RNZXNzYWdlLCB0aGlzLkJyYWluTm90Q29ubmVjdE1lc3NhZ2VIYW5kbGVyLCB0aGlzKTtcblxuICAgIH1cblxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBNZXNzYWdlRGlzcGF0Y2hlci5JbnN0YW5jZS5SZW1vdmVFdmVudExpc3RlbmVyKE1lc3NhZ2VEZWYuQnJhaW5HYW1lU3RhcnQsIHRoaXMuQnJhaW5HYW1lU3RhcnRIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgTWVzc2FnZURpc3BhdGNoZXIuSW5zdGFuY2UuUmVtb3ZlRXZlbnRMaXN0ZW5lcihNZXNzYWdlRGVmLkJyYWluR2FtZUVuZCwgdGhpcy5CcmFpbkdhbWVFbmRIYW5kbGVyLCB0aGlzKTtcblxuICAgICAgICBNZXNzYWdlRGlzcGF0Y2hlci5JbnN0YW5jZS5SZW1vdmVFdmVudExpc3RlbmVyKE1lc3NhZ2VEZWYuQnJhaW5WYWx1ZUNoYW5nZU1lc3NhZ2UsIHRoaXMuQnJhaW5WYWx1ZUNoYW5nZU1lc3NhZ2VIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgTWVzc2FnZURpc3BhdGNoZXIuSW5zdGFuY2UuUmVtb3ZlRXZlbnRMaXN0ZW5lcihNZXNzYWdlRGVmLkNvbnN0ZWxsYXRpb25BbmltYXRpb25FbmQsIHRoaXMuQ29uc3RlbGxhdGlvbkFuaW1hdGlvbkVuZEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgICAgIE1lc3NhZ2VEaXNwYXRjaGVyLkluc3RhbmNlLlJlbW92ZUV2ZW50TGlzdGVuZXIoTWVzc2FnZURlZi5CcmFpbkJsb2NrTWVzc2FnZSwgdGhpcy5CcmFpbkJsb2NrTWVzc2FnZUhhbmRsZXIsIHRoaXMpO1xuICAgICAgICBNZXNzYWdlRGlzcGF0Y2hlci5JbnN0YW5jZS5SZW1vdmVFdmVudExpc3RlbmVyKE1lc3NhZ2VEZWYuQnJhaW5Ob3RDb25uZWN0TWVzc2FnZSwgdGhpcy5CcmFpbk5vdENvbm5lY3RNZXNzYWdlSGFuZGxlciwgdGhpcyk7XG4gICAgfVxuXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgLy8gdGhpcy5iYWl5YW5nLmFybWF0dXJlKCkuYWRkRXZlbnRMaXN0ZW5lcihkcmFnb25Cb25lcy5FdmVudE9iamVjdC5DT01QTEVURSx0aGlzLkFuaW1hdGlvbkV2ZW50SGFuZGxlcix0aGlzKTtcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgfVxuICAgIG9uS2V5RG93bihldmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuU3dpdGNoQW5pbWF0aW9uUGxheWluZykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW9k+WJjeato+WcqOaSreaUvuWIh+aNouaYn+W6p+WKqOeUu1wiKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuTm93U3RhclNjcmlwdC5QbGF5TmV4dFN0YXIoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5oyJ5LqGQScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBCcmFpbkJsb2NrTWVzc2FnZUhhbmRsZXIoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8v5riF56m65Lik5Liq5pWw5a2XXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnZhbHVlU3VtTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVTdW1MaXN0W2luZGV4XT0wO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgfVxuICAgIEJyYWluTm90Q29ubmVjdE1lc3NhZ2VIYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgICAgICAvL+a4heepuuS4pOS4quaVsOWtl1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy52YWx1ZVN1bUxpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlU3VtTGlzdFtpbmRleF09MDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHZhbHVlMTpudW1iZXI9MDtcbiAgICAvLyB2YWx1ZTI6bnVtYmVyPTA7XG4gICAgdmFsdWVTdW1MaXN0OiBudW1iZXJbXSA9IFswLCAwXVxuXG4gICAgLyoqXG4gICAgICog5ou/5Yiw5LiA5qyh5pWw5o2u77yM6L+Z6YeM6KaB5Yik5pat5YC8XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0JyYWluTW9kZWx9IG1vZHVsZVxuICAgICAqIEBtZW1iZXJvZiBCcmFpbkdhbWVTY2VuZVxuICAgICAqL1xuICAgIEJyYWluVmFsdWVDaGFuZ2VNZXNzYWdlSGFuZGxlcihtb2R1bGU6IEJyYWluTW9kZWwpIHtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIi0tPiBcIiArIHRoaXMudmFsdWVTdW1MaXN0WzBdICsgXCItLVwiICsgdGhpcy52YWx1ZVN1bUxpc3RbMV0pO1xuXG4gICAgICAgIGlmICh0aGlzLnZhbHVlU3VtTGlzdFswXSA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlU3VtTGlzdFswXSA9IE51bWJlcihtb2R1bGUuYnJhaW5bMF0uUmVsYXhhdGlvbik7XG4gICAgICAgICAgICB0aGlzLnZhbHVlU3VtTGlzdFsxXSA9IDA7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZVN1bUxpc3RbMV0gPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVTdW1MaXN0WzFdID0gTnVtYmVyKG1vZHVsZS5icmFpblswXS5SZWxheGF0aW9uKTtcbiAgICAgICAgICAgICAgICAvL+WIpOaWreWAvOacieayoeaciei2hei/h+mYiOWAvO+8jOeEtuWQjuiwg+eUqFxuICAgICAgICAgICAgICAgIC8vIGlmIChOdW1iZXIobW9kdWxlLmJyYWluWzBdLlJlbGF4YXRpb24pPj10aGlzLlJlbGF4YXRpb25WYWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLk5vd1N0YXJTY3JpcHQuUGxheU5leHRTdGFyKCk7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICgoKHRoaXMudmFsdWVTdW1MaXN0WzBdICsgdGhpcy52YWx1ZVN1bUxpc3RbMV0pIC8gMikgPj0gdGhpcy5SZWxheGF0aW9uVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy/muIXnqbrkuKTkuKrmlbDlrZdcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudmFsdWVTdW1MaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZVN1bUxpc3RbaW5kZXhdPTA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLk5vd1N0YXJTY3JpcHQuUGxheU5leHRTdGFyKCk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvL+a4heepuuS4pOS4quaVsOWtl1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy52YWx1ZVN1bUxpc3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlU3VtTGlzdFtpbmRleF09MDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlU3VtTGlzdC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBCcmFpbkdhbWVTdGFydEhhbmRsZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5byA5aeL5Yib5bu65Zyw5b2iXCIpO1xuICAgICAgICB0aGlzLlNjZW5lQ2FtZXJhLnBvc2l0aW9uID0gbmV3IGNjLlZlYzMoMzM0LjI4MiwgMTc0LjY1NCk7XG5cbiAgICAgICAgdGhpcy5Td2l0Y2hBbmltYXRpb25QbGF5aW5nID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy52YWx1ZVN1bUxpc3QgPSBbMCwgMF07XG5cbiAgICAgICAgLy/liJvlu7rlnLDlvaJcbiAgICAgICAgUmVzVXRpbC5Mb2FkUHJlZmFiKFwiQmFja2dyb3VuZFwiLCAocmVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLkJhY2tncm91bmRPYmplY3QgPSByZXM7XG4gICAgICAgICAgICAvL+iOt+WPluaJgOacieaYn+W6p+e7hOS7tlxuICAgICAgICAgICAgdGhpcy5BbGxTdGFyU2NyaXB0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiQmFja2dyb3VuZFwiKS5nZXRDb21wb25lbnRzSW5DaGlsZHJlbihDb25zdGVsbGF0aW9uU2NyaXB0KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5LiA5YWx5piv5aSa5bCR5Liq5pif5pif77yaXCIgKyB0aGlzLkFsbFN0YXJTY3JpcHQubGVuZ3RoKTtcbiAgICAgICAgICAgIC8v5oqK5omA5pyJ55qE6YO95Yid5aeL5YyWXG4gICAgICAgICAgICB0aGlzLkFsbFN0YXJTY3JpcHQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LkluaXRBbGxBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jb25zdGVsbGF0aW9uTnVtYmVyID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ob3dTdGFyU2NyaXB0ID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICAgICAgLy/ku47nrKzkuIDpopfmmJ/mmJ/lvIDlp4vmkq3mlL7liqjnlLtcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLlN0YXJ0U3RhckFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAvL3JldHVybjtcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyB0aGlzLkFsbFN0YXJTY3JpcHRbMF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgQnJhaW5HYW1lRW5kSGFuZGxlcigpIHtcbiAgICAgICAgdGhpcy5CYWNrZ3JvdW5kT2JqZWN0LmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5Td2l0Y2hBbmltYXRpb25QbGF5aW5nID0gZmFsc2U7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmmJ/luqfliqjnlLvmkq3mlL7lrozkuobvvIzpnIDopoHliIfmjaLliLDkuIvkuIDkuKrmmJ/luqdcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBudW1cbiAgICAgKiBAcmV0dXJuIHsqfSBcbiAgICAgKiBAbWVtYmVyb2YgQnJhaW5HYW1lU2NlbmVcbiAgICAgKi9cbiAgICBDb25zdGVsbGF0aW9uQW5pbWF0aW9uRW5kSGFuZGxlcihudW06IG51bWJlcikge1xuICAgICAgICBpZiAobnVtICsgMSA+PSA1KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIui2hei/h+acgOWkp+aYn+W6p+mZkOWItlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8v5b2T5YmN5pif5bqnKzFcbiAgICAgICAgICAgIFVzZXJNYW5hZ2VyLkluc3RhbmNlLkN1cnJlbnRDb25zdGVsbGF0aW9uTnVtYmVyICs9IDE7XG5cbiAgICAgICAgICAgIC8v5YiH5o2i5Yiw5LiL5LiA5Liq77yM54S25ZCO5pKt5pS+5Yqo55S7XG4gICAgICAgICAgICB0aGlzLlN3aXRjaE5leHRBbmltYXRpb24obnVtICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorqnlvZPliY3mmJ/luqflvIDlp4vmkq3mlL7liqjnlLtcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBCcmFpbkdhbWVTY2VuZVxuICAgICAqL1xuICAgIFN0YXJ0U3RhckFuaW1hdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuTm93U3RhclNjcmlwdCA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW9k+WJjeaYn+W6p+S4ouWksVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLk5vd1N0YXJTY3JpcHQuU3RhcnRBbmltYXRpb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliIfmjaLliLDkuIvkuIDkuKrmmJ/luqfnmoTliqjnlLtcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuZXh0bnVtYmVyXG4gICAgICogQG1lbWJlcm9mIEJyYWluR2FtZVNjZW5lXG4gICAgICovXG4gICAgU3dpdGNoTmV4dEFuaW1hdGlvbihuZXh0bnVtYmVyOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5Td2l0Y2hBbmltYXRpb25QbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgLy/ov5nph4znrYkxc1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KDQpO1xuXG4gICAgICAgICAgICB0aGlzLlNjZW5lQ2FtZXJhLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkodGhpcy5BbGxBbmltYXRpb25OYW1lc1t0aGlzLk5vd1N0YXJTY3JpcHQuY29uc3RlbGxhdGlvbk51bWJlcl0pO1xuICAgICAgICAgICAgdGhpcy5TY2VuZUNhbWVyYS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5vbihcImZpbmlzaGVkXCIsIHRoaXMuU3dpdGNoQW5pbWF0aW9uRW5kLCB0aGlzKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICAgIFN3aXRjaEFuaW1hdGlvbkVuZCgpIHtcblxuICAgICAgICB0aGlzLlNjZW5lQ2FtZXJhLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLm9mZihcImZpbmlzaGVkXCIsIHRoaXMuU3dpdGNoQW5pbWF0aW9uRW5kLCB0aGlzKTtcbiAgICAgICAgY29uc29sZS5sb2coXCLliIfmjaLliqjnlLvnu5PmnZ9cIiArIHRoaXMuTm93U3RhclNjcmlwdC5jb25zdGVsbGF0aW9uTnVtYmVyICsgMSk7XG5cbiAgICAgICAgdGhpcy5Ob3dTdGFyU2NyaXB0ID0gdGhpcy5BbGxTdGFyU2NyaXB0W3RoaXMuTm93U3RhclNjcmlwdC5jb25zdGVsbGF0aW9uTnVtYmVyICsgMV07XG4gICAgICAgIHRoaXMuU3dpdGNoQW5pbWF0aW9uUGxheWluZyA9IGZhbHNlO1xuXG4gICAgICAgIC8v6Ieq5Yqo5pKt5pS+56ys5LiA5LiqXG4gICAgICAgIC8vIHRoaXMuU3RhcnRTdGFyQW5pbWF0aW9uKCk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59Il19