
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
        // for (let index = 0; index < this.valueSumList.length; index++) {
        //     this.valueSumList[index]=0;
        // }
    };
    BrainGameScene.prototype.BrainNotConnectMessageHandler = function () {
        //清空两个数字
        // for (let index = 0; index < this.valueSumList.length; index++) {
        //     this.valueSumList[index]=0;
        // }
    };
    // valueCount=0;
    /**
     * 拿到一次数据，这里要判断值
     *
     * @param {BrainModel} module
     * @memberof BrainGameScene
     */
    BrainGameScene.prototype.BrainValueChangeMessageHandler = function (module) {
        // if (this.NowStarScript.playing) {
        //     return;
        // }
        // if (this.SwitchAnimationPlaying) {
        //     return;
        // }
        // this.valueCount++;
        // console.log(this.valueCount);
        if (this.valueSumList[0] == 0) {
            this.valueSumList[0] = Number(module.brain[0].Concentration);
            this.valueSumList[1] = 0;
            //console.log("-1-> " + this.valueSumList[0] + "--" + this.valueSumList[1]);
            return;
        }
        else {
            if (this.valueSumList[1] == 0) {
                this.valueSumList[1] = Number(module.brain[0].Concentration);
                //判断值有没有超过阈值，然后调用
                // if (Number(module.brain[0].Relaxation)>=this.RelaxationValue) {
                //     this.NowStarScript.PlayNextStar();
                // }
                if (((this.valueSumList[0] + this.valueSumList[1]) / 2) >= this.RelaxationValue) {
                    //console.log("-2-> " + this.valueSumList[0] + "--" + this.valueSumList[1]);
                    //清空两个数字
                    for (var index = 0; index < this.valueSumList.length; index++) {
                        this.valueSumList[index] = 0;
                    }
                    if (this.NowStarScript != null) {
                        //console.log("开始播放下一个星星动画");
                        //旧版逻辑
                        this.NowStarScript.PlayNextStar();
                    }
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
        // this.valueCount=0;
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
                }
            });
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
            //切换到下一个，然后播放动画
            this.SwitchNextAnimation(num + 1);
        }
    };
    /**
     * 切换到下一个星座的动画
     *
     * @param {number} nextnumber
     * @memberof BrainGameScene
     */
    BrainGameScene.prototype.SwitchNextAnimation = function (nextnumber) {
        this.SwitchAnimationPlaying = true;
        SoundManager_1.default.playEffect(4);
        this.SceneCamera.getComponent(cc.Animation).play(this.AllAnimationNames[this.NowStarScript.constellationNumber]);
        this.SceneCamera.getComponent(cc.Animation).on("finished", this.SwitchAnimationEnd, this);
    };
    BrainGameScene.prototype.SwitchAnimationEnd = function () {
        this.SceneCamera.getComponent(cc.Animation).off("finished", this.SwitchAnimationEnd, this);
        console.log("切换动画结束" + (Number(this.NowStarScript.constellationNumber) + 1));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZVxcQnJhaW5HYW1lU2NlbmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBRTJCO0FBSTNCLG9GQUErRTtBQUMvRSx3REFBbUQ7QUFFbkQsNENBQXVDO0FBQ3ZDLDJFQUFzRTtBQUVoRSxJQUFBLGtCQUdXLEVBRmIsb0JBQU8sRUFDUCxzQkFDYSxDQUFDO0FBR2xCO0lBQTRDLGtDQUFZO0lBRHhEO1FBQUEscUVBa1BDO1FBM09HLHVCQUFpQixHQUFhLEVBQUUsQ0FBQztRQVlqQyxtQkFBYSxHQUEwQixFQUFFLENBQUM7UUFFMUM7Ozs7O1dBS0c7UUFDSCxtQkFBYSxHQUF3QixJQUFJLENBQUM7UUFJMUM7Ozs7O1dBS0c7UUFDSCw0QkFBc0IsR0FBWSxLQUFLLENBQUM7UUFHeEM7Ozs7O1dBS0c7UUFDSCxxQkFBZSxHQUFXLEtBQUssQ0FBQztRQTBEaEMsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixrQkFBWSxHQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBOztJQXdJbkMsQ0FBQztJQWxNRywrQkFBTSxHQUFOO1FBQ0ksMkJBQWlCLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLHVCQUFVLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RywyQkFBaUIsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsdUJBQVUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXJHLDJCQUFpQixDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyx1QkFBVSxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUUzSCwyQkFBaUIsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsdUJBQVUsQ0FB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LG1CQUFtQixDQUFDLEdBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU3RSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDO1FBRXBDLFNBQVM7UUFDVCw2QkFBNkI7SUFDakMsQ0FBQztJQTFPRDtRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztTQUNqQixDQUFDOzZEQUMrQjtJQUtqQztRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSTtTQUNoQixDQUFDO3VEQUNtQjtJQU9yQjtRQUhDLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxDQUFDLDZCQUFtQixDQUFDO1NBQzlCLENBQUM7eURBQ3dDO0lBbEJ6QixjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBaVBsQztJQUFELHFCQUFDO0NBalBELEFBaVBDLENBalAyQyxFQUFFLENBQUMsU0FBUyxHQWlQdkQ7a0JBalBvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBNZXNzYWdlRGVmXG59IGZyb20gXCIuLi9EZWYvTWVzc2FnZURlZlwiO1xuaW1wb3J0IHtcbiAgICBCcmFpbk1vZGVsXG59IGZyb20gXCIuLi9NYW5hZ2VyL0RyaXZlTWFuYWdlci9Ecml2ZU1hbmFnZXJcIjtcbmltcG9ydCBNZXNzYWdlRGlzcGF0Y2hlciBmcm9tIFwiLi4vTWFuYWdlci9NZXNzYWdlRGlzcGF0Y2hlci9NZXNzYWdlRGlzcGF0Y2hlclwiO1xuaW1wb3J0IFNvdW5kTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9Tb3VuZE1hbmFnZXJcIjtcbmltcG9ydCBVc2VyTWFuYWdlciBmcm9tIFwiLi4vTWFuYWdlci9Vc2VyTWFuYWdlci9Vc2VyTWFuYWdlclwiO1xuaW1wb3J0IFJlc1V0aWwgZnJvbSBcIi4uL1Rvb2xzL1Jlc1V0aWxcIjtcbmltcG9ydCBDb25zdGVsbGF0aW9uU2NyaXB0IGZyb20gXCIuL0NvbnN0ZWxsYXRpb24vQ29uc3RlbGxhdGlvblNjcmlwdFwiO1xuXG5jb25zdCB7XG4gICAgY2NjbGFzcyxcbiAgICBwcm9wZXJ0eVxufSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFpbkdhbWVTY2VuZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IFtTdHJpbmddXG4gICAgfSlcbiAgICBBbGxBbmltYXRpb25OYW1lczogc3RyaW5nW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICB9KVxuICAgIFNjZW5lQ2FtZXJhOiBjYy5Ob2RlO1xuXG5cblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IFtDb25zdGVsbGF0aW9uU2NyaXB0XVxuICAgIH0pXG4gICAgQWxsU3RhclNjcmlwdDogQ29uc3RlbGxhdGlvblNjcmlwdFtdID0gW107XG5cbiAgICAvKipcbiAgICAgKiDlvZPliY3mraPlnKjmiafooYznmoTmmJ/luqfohJrmnKxcbiAgICAgKlxuICAgICAqIEB0eXBlIHtDb25zdGVsbGF0aW9uU2NyaXB0fVxuICAgICAqIEBtZW1iZXJvZiBCcmFpbkdhbWVTY2VuZVxuICAgICAqL1xuICAgIE5vd1N0YXJTY3JpcHQ6IENvbnN0ZWxsYXRpb25TY3JpcHQgPSBudWxsO1xuXG4gICAgQmFja2dyb3VuZE9iamVjdDogY2MuTm9kZTtcblxuICAgIC8qKlxuICAgICAqIOaYr+WQpuato+WcqOWIh+aNouaYn+W6p+WKqOeUu+S4rVxuICAgICAqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICogQG1lbWJlcm9mIEJyYWluR2FtZVNjZW5lXG4gICAgICovXG4gICAgU3dpdGNoQW5pbWF0aW9uUGxheWluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG5cbiAgICAvKipcbiAgICAgKiDlm7rlrprlgLzvvIznlLLmlrnlrprnmoRcbiAgICAgKlxuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQG1lbWJlcm9mIEJyYWluR2FtZVNjZW5lXG4gICAgICovXG4gICAgUmVsYXhhdGlvblZhbHVlOiBudW1iZXIgPSA1NS41MTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgTWVzc2FnZURpc3BhdGNoZXIuSW5zdGFuY2UuQWRkRXZlbnRMaXN0ZW5lcihNZXNzYWdlRGVmLkJyYWluR2FtZVN0YXJ0LCB0aGlzLkJyYWluR2FtZVN0YXJ0SGFuZGxlciwgdGhpcyk7XG4gICAgICAgIE1lc3NhZ2VEaXNwYXRjaGVyLkluc3RhbmNlLkFkZEV2ZW50TGlzdGVuZXIoTWVzc2FnZURlZi5CcmFpbkdhbWVFbmQsIHRoaXMuQnJhaW5HYW1lRW5kSGFuZGxlciwgdGhpcyk7XG5cbiAgICAgICAgTWVzc2FnZURpc3BhdGNoZXIuSW5zdGFuY2UuQWRkRXZlbnRMaXN0ZW5lcihNZXNzYWdlRGVmLkJyYWluVmFsdWVDaGFuZ2VNZXNzYWdlLCB0aGlzLkJyYWluVmFsdWVDaGFuZ2VNZXNzYWdlSGFuZGxlciwgdGhpcyk7XG5cbiAgICAgICAgTWVzc2FnZURpc3BhdGNoZXIuSW5zdGFuY2UuQWRkRXZlbnRMaXN0ZW5lcihNZXNzYWdlRGVmLkNvbnN0ZWxsYXRpb25BbmltYXRpb25FbmQsIHRoaXMuQ29uc3RlbGxhdGlvbkFuaW1hdGlvbkVuZEhhbmRsZXIsIHRoaXMpO1xuXG4gICAgICAgIE1lc3NhZ2VEaXNwYXRjaGVyLkluc3RhbmNlLkFkZEV2ZW50TGlzdGVuZXIoTWVzc2FnZURlZi5CcmFpbkJsb2NrTWVzc2FnZSwgdGhpcy5CcmFpbkJsb2NrTWVzc2FnZUhhbmRsZXIsIHRoaXMpO1xuICAgICAgICBNZXNzYWdlRGlzcGF0Y2hlci5JbnN0YW5jZS5BZGRFdmVudExpc3RlbmVyKE1lc3NhZ2VEZWYuQnJhaW5Ob3RDb25uZWN0TWVzc2FnZSwgdGhpcy5CcmFpbk5vdENvbm5lY3RNZXNzYWdlSGFuZGxlciwgdGhpcyk7XG5cbiAgICB9XG5cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgTWVzc2FnZURpc3BhdGNoZXIuSW5zdGFuY2UuUmVtb3ZlRXZlbnRMaXN0ZW5lcihNZXNzYWdlRGVmLkJyYWluR2FtZVN0YXJ0LCB0aGlzLkJyYWluR2FtZVN0YXJ0SGFuZGxlciwgdGhpcyk7XG4gICAgICAgIE1lc3NhZ2VEaXNwYXRjaGVyLkluc3RhbmNlLlJlbW92ZUV2ZW50TGlzdGVuZXIoTWVzc2FnZURlZi5CcmFpbkdhbWVFbmQsIHRoaXMuQnJhaW5HYW1lRW5kSGFuZGxlciwgdGhpcyk7XG5cbiAgICAgICAgTWVzc2FnZURpc3BhdGNoZXIuSW5zdGFuY2UuUmVtb3ZlRXZlbnRMaXN0ZW5lcihNZXNzYWdlRGVmLkJyYWluVmFsdWVDaGFuZ2VNZXNzYWdlLCB0aGlzLkJyYWluVmFsdWVDaGFuZ2VNZXNzYWdlSGFuZGxlciwgdGhpcyk7XG4gICAgICAgIE1lc3NhZ2VEaXNwYXRjaGVyLkluc3RhbmNlLlJlbW92ZUV2ZW50TGlzdGVuZXIoTWVzc2FnZURlZi5Db25zdGVsbGF0aW9uQW5pbWF0aW9uRW5kLCB0aGlzLkNvbnN0ZWxsYXRpb25BbmltYXRpb25FbmRIYW5kbGVyLCB0aGlzKTtcblxuICAgICAgICBNZXNzYWdlRGlzcGF0Y2hlci5JbnN0YW5jZS5SZW1vdmVFdmVudExpc3RlbmVyKE1lc3NhZ2VEZWYuQnJhaW5CbG9ja01lc3NhZ2UsIHRoaXMuQnJhaW5CbG9ja01lc3NhZ2VIYW5kbGVyLCB0aGlzKTtcbiAgICAgICAgTWVzc2FnZURpc3BhdGNoZXIuSW5zdGFuY2UuUmVtb3ZlRXZlbnRMaXN0ZW5lcihNZXNzYWdlRGVmLkJyYWluTm90Q29ubmVjdE1lc3NhZ2UsIHRoaXMuQnJhaW5Ob3RDb25uZWN0TWVzc2FnZUhhbmRsZXIsIHRoaXMpO1xuICAgIH1cblxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgIH1cbiAgICBvbktleURvd24oZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoIChldmVudC5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLlN3aXRjaEFuaW1hdGlvblBsYXlpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLlvZPliY3mraPlnKjmkq3mlL7liIfmjaLmmJ/luqfliqjnlLtcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLk5vd1N0YXJTY3JpcHQuUGxheU5leHRTdGFyKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aMieS6hkEnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEJyYWluQmxvY2tNZXNzYWdlSGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICAgICAgLy/muIXnqbrkuKTkuKrmlbDlrZdcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudmFsdWVTdW1MaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy52YWx1ZVN1bUxpc3RbaW5kZXhdPTA7XG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICB9XG4gICAgQnJhaW5Ob3RDb25uZWN0TWVzc2FnZUhhbmRsZXIoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8v5riF56m65Lik5Liq5pWw5a2XXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnZhbHVlU3VtTGlzdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMudmFsdWVTdW1MaXN0W2luZGV4XT0wO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgLy8gdmFsdWUxOm51bWJlcj0wO1xuICAgIC8vIHZhbHVlMjpudW1iZXI9MDtcbiAgICB2YWx1ZVN1bUxpc3Q6IG51bWJlcltdID0gWzAsIDBdXG5cbiAgICAvLyB2YWx1ZUNvdW50PTA7XG4gICAgLyoqXG4gICAgICog5ou/5Yiw5LiA5qyh5pWw5o2u77yM6L+Z6YeM6KaB5Yik5pat5YC8XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0JyYWluTW9kZWx9IG1vZHVsZVxuICAgICAqIEBtZW1iZXJvZiBCcmFpbkdhbWVTY2VuZVxuICAgICAqL1xuICAgIEJyYWluVmFsdWVDaGFuZ2VNZXNzYWdlSGFuZGxlcihtb2R1bGU6IEJyYWluTW9kZWwpIHtcblxuICAgICAgICAvLyBpZiAodGhpcy5Ob3dTdGFyU2NyaXB0LnBsYXlpbmcpIHtcbiAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAodGhpcy5Td2l0Y2hBbmltYXRpb25QbGF5aW5nKSB7XG4gICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gdGhpcy52YWx1ZUNvdW50Kys7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudmFsdWVDb3VudCk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy52YWx1ZVN1bUxpc3RbMF0gPT0gMCkge1xuICAgICAgICAgICAgdGhpcy52YWx1ZVN1bUxpc3RbMF0gPSBOdW1iZXIobW9kdWxlLmJyYWluWzBdLkNvbmNlbnRyYXRpb24pO1xuICAgICAgICAgICAgdGhpcy52YWx1ZVN1bUxpc3RbMV0gPSAwO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIi0xLT4gXCIgKyB0aGlzLnZhbHVlU3VtTGlzdFswXSArIFwiLS1cIiArIHRoaXMudmFsdWVTdW1MaXN0WzFdKTtcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVTdW1MaXN0WzFdID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlU3VtTGlzdFsxXSA9IE51bWJlcihtb2R1bGUuYnJhaW5bMF0uQ29uY2VudHJhdGlvbik7XG4gICAgICAgICAgICAgICAgLy/liKTmlq3lgLzmnInmsqHmnInotoXov4fpmIjlgLzvvIznhLblkI7osIPnlKhcbiAgICAgICAgICAgICAgICAvLyBpZiAoTnVtYmVyKG1vZHVsZS5icmFpblswXS5SZWxheGF0aW9uKT49dGhpcy5SZWxheGF0aW9uVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5Ob3dTdGFyU2NyaXB0LlBsYXlOZXh0U3RhcigpO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAoKCh0aGlzLnZhbHVlU3VtTGlzdFswXSArIHRoaXMudmFsdWVTdW1MaXN0WzFdKSAvIDIpID49IHRoaXMuUmVsYXhhdGlvblZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCItMi0+IFwiICsgdGhpcy52YWx1ZVN1bUxpc3RbMF0gKyBcIi0tXCIgKyB0aGlzLnZhbHVlU3VtTGlzdFsxXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy/muIXnqbrkuKTkuKrmlbDlrZdcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudmFsdWVTdW1MaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZVN1bUxpc3RbaW5kZXhdPTA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5Ob3dTdGFyU2NyaXB0IT1udWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwi5byA5aeL5pKt5pS+5LiL5LiA5Liq5pif5pif5Yqo55S7XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy/ml6fniYjpgLvovpFcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTm93U3RhclNjcmlwdC5QbGF5TmV4dFN0YXIoKTtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy/muIXnqbrkuKTkuKrmlbDlrZdcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudmFsdWVTdW1MaXN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZVN1bUxpc3RbaW5kZXhdPTA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZVN1bUxpc3QuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBCcmFpbkdhbWVTdGFydEhhbmRsZXIoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5byA5aeL5Yib5bu65Zyw5b2iXCIpO1xuICAgICAgICAvLyB0aGlzLnZhbHVlQ291bnQ9MDtcbiAgICAgICAgdGhpcy5TY2VuZUNhbWVyYS5wb3NpdGlvbiA9IG5ldyBjYy5WZWMzKDMzNC4yODIsIDE3NC42NTQpO1xuXG4gICAgICAgIHRoaXMuU3dpdGNoQW5pbWF0aW9uUGxheWluZyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMudmFsdWVTdW1MaXN0ID0gWzAsIDBdO1xuXG4gICAgICAgIC8v5Yib5bu65Zyw5b2iXG4gICAgICAgIFJlc1V0aWwuTG9hZFByZWZhYihcIkJhY2tncm91bmRcIiwgKHJlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5CYWNrZ3JvdW5kT2JqZWN0ID0gcmVzO1xuICAgICAgICAgICAgLy/ojrflj5bmiYDmnInmmJ/luqfnu4Tku7ZcbiAgICAgICAgICAgIHRoaXMuQWxsU3RhclNjcmlwdCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIkJhY2tncm91bmRcIikuZ2V0Q29tcG9uZW50c0luQ2hpbGRyZW4oQ29uc3RlbGxhdGlvblNjcmlwdCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS4gOWFseaYr+WkmuWwkeS4quaYn+aYn++8mlwiICsgdGhpcy5BbGxTdGFyU2NyaXB0Lmxlbmd0aCk7XG4gICAgICAgICAgICAvL+aKiuaJgOacieeahOmDveWIneWni+WMllxuICAgICAgICAgICAgdGhpcy5BbGxTdGFyU2NyaXB0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5Jbml0QWxsQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY29uc3RlbGxhdGlvbk51bWJlciA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuTm93U3RhclNjcmlwdCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEJyYWluR2FtZUVuZEhhbmRsZXIoKSB7XG4gICAgICAgIHRoaXMuQmFja2dyb3VuZE9iamVjdC5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuU3dpdGNoQW5pbWF0aW9uUGxheWluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaYn+W6p+WKqOeUu+aSreaUvuWujOS6hu+8jOmcgOimgeWIh+aNouWIsOS4i+S4gOS4quaYn+W6p1xuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG51bVxuICAgICAqIEByZXR1cm4geyp9IFxuICAgICAqIEBtZW1iZXJvZiBCcmFpbkdhbWVTY2VuZVxuICAgICAqL1xuICAgIENvbnN0ZWxsYXRpb25BbmltYXRpb25FbmRIYW5kbGVyKG51bTogbnVtYmVyKSB7XG5cbiAgICAgICAgaWYgKG51bSArIDEgPj0gNSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLotoXov4fmnIDlpKfmmJ/luqfpmZDliLZcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL+W9k+WJjeaYn+W6pysxXG5cbiAgICAgICAgICAgIC8v5YiH5o2i5Yiw5LiL5LiA5Liq77yM54S25ZCO5pKt5pS+5Yqo55S7XG4gICAgICAgICAgICB0aGlzLlN3aXRjaE5leHRBbmltYXRpb24obnVtICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDliIfmjaLliLDkuIvkuIDkuKrmmJ/luqfnmoTliqjnlLtcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuZXh0bnVtYmVyXG4gICAgICogQG1lbWJlcm9mIEJyYWluR2FtZVNjZW5lXG4gICAgICovXG4gICAgU3dpdGNoTmV4dEFuaW1hdGlvbihuZXh0bnVtYmVyOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5Td2l0Y2hBbmltYXRpb25QbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoNCk7XG5cbiAgICAgICAgdGhpcy5TY2VuZUNhbWVyYS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KHRoaXMuQWxsQW5pbWF0aW9uTmFtZXNbdGhpcy5Ob3dTdGFyU2NyaXB0LmNvbnN0ZWxsYXRpb25OdW1iZXJdKTtcbiAgICAgICAgdGhpcy5TY2VuZUNhbWVyYS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5vbihcImZpbmlzaGVkXCIsIHRoaXMuU3dpdGNoQW5pbWF0aW9uRW5kLCB0aGlzKTtcbiAgICB9XG4gICAgU3dpdGNoQW5pbWF0aW9uRW5kKCkge1xuXG4gICAgICAgIHRoaXMuU2NlbmVDYW1lcmEuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikub2ZmKFwiZmluaXNoZWRcIiwgdGhpcy5Td2l0Y2hBbmltYXRpb25FbmQsIHRoaXMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIuWIh+aNouWKqOeUu+e7k+adn1wiICsoTnVtYmVyKHRoaXMuTm93U3RhclNjcmlwdC5jb25zdGVsbGF0aW9uTnVtYmVyKSAgKyAxKSk7XG5cbiAgICAgICAgdGhpcy5Ob3dTdGFyU2NyaXB0ID0gdGhpcy5BbGxTdGFyU2NyaXB0W3RoaXMuTm93U3RhclNjcmlwdC5jb25zdGVsbGF0aW9uTnVtYmVyICsgMV07XG4gICAgICAgIHRoaXMuU3dpdGNoQW5pbWF0aW9uUGxheWluZyA9IGZhbHNlO1xuXG4gICAgICAgIC8v6Ieq5Yqo5pKt5pS+56ys5LiA5LiqXG4gICAgICAgIC8vIHRoaXMuU3RhcnRTdGFyQW5pbWF0aW9uKCk7XG4gICAgfVxufSJdfQ==