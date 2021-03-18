
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Tools/UIUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVG9vbHNcXFVJVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUE0QztBQUM1QyxxQ0FBZ0M7QUFDaEMsdUNBQWtDO0FBRzVCLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFDNUM7Ozs7OztFQU1FO0FBRUY7SUFBQTtJQTRIQSxDQUFDO0lBeEhHOzs7Ozs7O09BT0c7SUFDVyxhQUFNLEdBQXBCLFVBQXFCLE1BQWEsRUFBRSxPQUFrQjtRQUNsRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDeEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFFLE1BQU0sRUFBRTtnQkFDdEIsT0FBTyxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUM7Z0JBQ3BCLElBQUksT0FBTyxFQUFFO29CQUNULE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDcEI7Z0JBQ0QsT0FBTzthQUNWO1NBQ0o7UUFFRCxvQ0FBb0M7UUFDcEMsSUFBSSxJQUFJLEdBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxpQkFBTyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBdUIsQ0FBQztRQUM5RSxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDbEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJ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RTtnQkFDdEIsT0FBTyxPQUFPLENBQUM7YUFDbEI7U0FDSjtJQUNMLENBQUM7SUF6SGEsYUFBTSxHQUFpQixJQUFJLFdBQUksRUFBVyxDQUFDO0lBRnhDLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0E0SDFCO0lBQUQsYUFBQztDQTVIRCxBQTRIQyxJQUFBO2tCQTVIb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3QgfSBmcm9tIFwiLi9EYXRhU3RydWN0dXJlL0xpc3RcIjtcbmltcG9ydCBSZXNVdGlsIGZyb20gXCIuL1Jlc1V0aWxcIjtcbmltcG9ydCBVSUxvYWRlciBmcm9tIFwiLi9VSUxvYWRlclwiO1xuXG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG4vKipcbiogVUlVdGlsXG4qIFVJ5bel5YW3XG4qIEAgYXV0aG9yOiBTbG93RmVhdGhlclxuKiBAIHdlY2hhdDogQmFja2VkQnlUaGVXVFxuKiBAIGRhdGE6IDIwMjAtMDctMDYgMTU6MTNcbiovXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlVdGlsIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgdWlMaXN0Okxpc3Q8Y2MuTm9kZT4gPSBuZXcgTGlzdDxjYy5Ob2RlPigpO1xuXG4gICAgLyoqXG4gICAgICog5pi+56S65LiA5LiqVUlcbiAgICAgKiBVSVV0aWwuU2hvd1VJKFwiTG9hZGluZ1VJXCIpO1xuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdWluYW1lXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW2NhbGxGdW5dXG4gICAgICogQG1lbWJlcm9mIFVJVXRpbFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgU2hvd1VJKHVpbmFtZTpzdHJpbmcsIGNhbGxGdW4/OiBGdW5jdGlvbikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudWlMaXN0LkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLnVpTGlzdC5HZXQoaSk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5uYW1lPT11aW5hbWUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFjdGl2ZT10cnVlO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsRnVuKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxGdW4oZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8v55u05o6l5Yqg6L29IOi/memHjOeahHVua25vd+aYr+WboOS4unZzY29kZeivhuWIq+S4jeWHuuadpeaYr+S4qm5vZGVcbiAgICAgICAgbGV0IG5vZGUgPWNjLmluc3RhbnRpYXRlKFJlc1V0aWwuUmVzRGljdGlvbmFyeVt1aW5hbWVdKSBhcyB1bmtub3duIGFzIGNjLk5vZGU7XG4gICAgICAgIGxldCBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoXCJHYW1lXCIpLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpXG4gICAgICAgIG5vZGUuc2V0UGFyZW50KHNjZW5lKVxuICAgICAgICB0aGlzLnVpTGlzdC5BZGQobm9kZSk7XG4gICAgICAgIGlmIChjYWxsRnVuKSB7XG4gICAgICAgICAgICBjYWxsRnVuKG5vZGUpO1xuICAgICAgICB9XG5cblxuICAgICAgICAvL+WFiOS4i+i9veWGjeWKoOi9vVxuXG4gICAgICAgIC8vIFVJTG9hZGVyLkluc3RhbmNlLmxvYWRQcmVmYWJSZXMoXCJwcmVmYWJzL3VpL1wiICsgdWluYW1lICsgXCIvXCIgKyB1aW5hbWUgKyBcIlwiLCAobG9hZGVkdWkpID0+IHtcbiAgICAgICAgLy8gICAgIGxldCB1aSA9IGNjLmluc3RhbnRpYXRlKGxvYWRlZHVpKSBhcyBjYy5Ob2RlXG4gICAgICAgIC8vICAgICB1aS5uYW1lID0gdWluYW1lO1xuICAgICAgICAvLyAgICAgLy8gbGV0IHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcbiAgICAgICAgLy8gICAgIGxldCBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoXCJHYW1lXCIpLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpXG4gICAgICAgIC8vICAgICB1aS5zZXRQYXJlbnQoc2NlbmUpXG4gICAgICAgIC8vICAgICB0aGlzLnVpTGlzdC5BZGQodWkpO1xuICAgICAgICAvLyAgICAgaWYgKGNhbGxGdW4pIHtcbiAgICAgICAgLy8gICAgICAgICBjYWxsRnVuKHVpKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwidWktPlwiK3RoaXMudWlMaXN0LkNvdW50KTtcbiAgICAgICAgLy8gfSlcbiAgICAgICAgXG4gICAgICAgIFxuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgU2hvd0Jhc2VVSSh1aW5hbWU6c3RyaW5nLCBjYWxsRnVuPzogRnVuY3Rpb24pIHtcbiAgICAgICAgVUlMb2FkZXIuSW5zdGFuY2UubG9hZFByZWZhYlJlcyhcImJhc2UvdWkvXCIgKyB1aW5hbWUgKyBcIi9cIiArIHVpbmFtZSArIFwiXCIsIChsb2FkZWR1aSkgPT4ge1xuICAgICAgICAgICAgbGV0IHVpID0gY2MuaW5zdGFudGlhdGUobG9hZGVkdWkpIGFzIGNjLk5vZGVcbiAgICAgICAgICAgIHVpLm5hbWUgPSB1aW5hbWU7XG4gICAgICAgICAgICAvLyBsZXQgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xuICAgICAgICAgICAgbGV0IHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZShcIkdhbWVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIilcbiAgICAgICAgICAgIHVpLnNldFBhcmVudChzY2VuZSlcbiAgICAgICAgICAgIGlmIChjYWxsRnVuKSB7XG4gICAgICAgICAgICAgICAgY2FsbEZ1bih1aSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVpTGlzdC5BZGQodWkpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIFxuICAgIC8qKlxuICAgICAqIOmakOiXj+S4gOS4qlVJXG4gICAgICpcbiAgICAgKiBAc3RhdGljXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVpbmFtZVxuICAgICAqIEBtZW1iZXJvZiBVSVV0aWxcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIEhpZGVVSSh1aW5hbWU6c3RyaW5nKXsgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVpTGlzdC5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy51aUxpc3QuR2V0KGkpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubmFtZT09dWluYW1lKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hY3RpdmU9ZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gbGV0IHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKS5nZXRDaGlsZEJ5TmFtZShcIkdhbWVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJDYW52YXNcIilcbiAgICAgICAgLy8gbGV0IHVpID0gc2NlbmUuZ2V0Q2hpbGRCeU5hbWUodWluYW1lKTtcbiAgICAgICAgLy8gaWYgKCF1aSkge1xuICAgICAgICAvLyAgICAgY29uc29sZS5lcnJvcihcIuayoeaciei/meS4qlVJ77yaXCIgKyB1aW5hbWUpO1xuICAgICAgICAvLyAgICAgcmV0dXJuXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKHVpICE9IG51bGwpIHVpLmFjdGl2ZT1mYWxzZTtcbiAgICB9XG5cbiAgICBcbiAgICAvKipcbiAgICAgKiDnp7vpmaTkuIDkuKpVSVxuICAgICAqXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1aW5hbWVcbiAgICAgKiBAbWVtYmVyb2YgVUlVdGlsXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBSZW1vdmVVSSh1aW5hbWU6c3RyaW5nKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy51aUxpc3QuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMudWlMaXN0LkdldChpKTtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm5hbWU9PXVpbmFtZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudWlMaXN0LlJlbW92ZShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL2xldCBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XG4gICAgICAgIC8vIGxldCBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuZ2V0Q2hpbGRCeU5hbWUoXCJHYW1lXCIpLmdldENoaWxkQnlOYW1lKFwiQ2FudmFzXCIpXG4gICAgICAgIC8vIGxldCB1aSA9IHNjZW5lLmdldENoaWxkQnlOYW1lKHVpbmFtZSk7XG4gICAgICAgIC8vIGlmICghdWkpIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoXCLmsqHmnInov5nkuKpVSe+8mlwiICsgdWluYW1lKTtcbiAgICAgICAgLy8gICAgIHJldHVyblxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmICh1aSAhPSBudWxsKSB1aS5kZXN0cm95KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBHZXRVSSh1aW5hbWU6c3RyaW5nKXtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVpTGlzdC5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy51aUxpc3QuR2V0KGkpO1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubmFtZT09dWluYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19