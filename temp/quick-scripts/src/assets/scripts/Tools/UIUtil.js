"use strict";
cc._RF.push(module, 'c0192QYjy5DQJtX9HBHJC3D', 'UIUtil');
// scripts/Tools/UIUtil.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var List_1 = require("./DataStructure/List");
var ResUtil_1 = require("./ResUtil");
var UILoader_1 = require("./UILoader");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
* UIUtil
* UI工具
* @ author: SlowFeather
* @ wechat: BackedByTheWT
* @ data: 2020-07-06 15:13
*/
var UIUtil = /** @class */ (function () {
    function UIUtil() {
    }
    /**
     * 显示一个UI
     * UIUtil.ShowUI("LoadingUI");
     * @static
     * @param {string} uiname
     * @param {Function} [callFun]
     * @memberof UIUtil
     */
    UIUtil.ShowUI = function (uiname, callFun) {
        for (var i = 0; i < this.uiList.Count; i++) {
            var element = this.uiList.Get(i);
            if (element.name == uiname) {
                element.active = true;
                if (callFun) {
                    callFun(element);
                }
                return;
            }
        }
        //直接加载 这里的unknow是因为vscode识别不出来是个node
        var node = cc.instantiate(ResUtil_1.default.ResDictionary[uiname]);
        var scene = cc.director.getScene().getChildByName("Game").getChildByName("Canvas");
        node.setParent(scene);
        this.uiList.Add(node);
        if (callFun) {
            callFun(node);
        }
        //先下载再加载
        // UILoader.Instance.loadPrefabRes("prefabs/ui/" + uiname + "/" + uiname + "", (loadedui) => {
        //     let ui = cc.instantiate(loadedui) as cc.Node
        //     ui.name = uiname;
        //     // let scene = cc.director.getScene();
        //     let scene = cc.director.getScene().getChildByName("Game").getChildByName("Canvas")
        //     ui.setParent(scene)
        //     this.uiList.Add(ui);
        //     if (callFun) {
        //         callFun(ui);
        //     }
        //     console.log("ui->"+this.uiList.Count);
        // })
    };
    UIUtil.ShowBaseUI = function (uiname, callFun) {
        var _this = this;
        UILoader_1.default.Instance.loadPrefabRes("base/ui/" + uiname + "/" + uiname + "", function (loadedui) {
            var ui = cc.instantiate(loadedui);
            ui.name = uiname;
            // let scene = cc.director.getScene();
            var scene = cc.director.getScene().getChildByName("Game").getChildByName("Canvas");
            ui.setParent(scene);
            if (callFun) {
                callFun(ui);
            }
            _this.uiList.Add(ui);
        });
    };
    /**
     * 隐藏一个UI
     *
     * @static
     * @param {string} uiname
     * @memberof UIUtil
     */
    UIUtil.HideUI = function (uiname) {
        for (var i = 0; i < this.uiList.Count; i++) {
            var element = this.uiList.Get(i);
            if (element.name == uiname) {
                element.active = false;
            }
        }
        // let scene = cc.director.getScene().getChildByName("Game").getChildByName("Canvas")
        // let ui = scene.getChildByName(uiname);
        // if (!ui) {
        //     console.error("没有这个UI：" + uiname);
        //     return
        // }
        // if (ui != null) ui.active=false;
    };
    /**
     * 移除一个UI
     *
     * @static
     * @param {string} uiname
     * @memberof UIUtil
     */
    UIUtil.RemoveUI = function (uiname) {
        for (var i = 0; i < this.uiList.Count; i++) {
            var element = this.uiList.Get(i);
            if (element.name == uiname) {
                this.uiList.Remove(element);
                element.destroy();
            }
        }
        //let scene = cc.director.getScene();
        // let scene = cc.director.getScene().getChildByName("Game").getChildByName("Canvas")
        // let ui = scene.getChildByName(uiname);
        // if (!ui) {
        //     console.error("没有这个UI：" + uiname);
        //     return
        // }
        // if (ui != null) ui.destroy();
    };
    UIUtil.GetUI = function (uiname) {
        for (var i = 0; i < this.uiList.Count; i++) {
            var element = this.uiList.Get(i);
            if (element.name == uiname) {
                return element;
            }
        }
    };
    UIUtil.uiList = new List_1.List();
    UIUtil = __decorate([
        ccclass
    ], UIUtil);
    return UIUtil;
}());
exports.default = UIUtil;

cc._RF.pop();