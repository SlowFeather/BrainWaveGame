
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Tools/UILoader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef9c8hBxhBKv71Fe6gJ72+/', 'UILoader');
// scripts/Tools/UILoader.ts

"use strict";
// import { G } from "./GameGlobal";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UILoader = /** @class */ (function () {
    function UILoader() {
        // 当前场景资源统计
        this.m_sceneLoadResMap = new Map();
        /** 加载 */
        this.load = function (resources) {
            return new Promise(function (resolve, reject) {
                cc.loader.load(resources, function (err, asset) {
                    if (err) {
                        console.error("[\u8D44\u6E90\u52A0\u8F7D] \u9519\u8BEF " + err);
                        return;
                    }
                    resolve(asset);
                });
            });
        };
        // 
        this.loadRes = function (url, type) {
            if (!url || !type) {
                console.error("参数错误", url, type);
                return;
            }
            return new Promise(function (resolve, reject) {
                cc.loader.loadRes(url, type, function (err, asset) {
                    if (err) {
                        console.error("[\u8D44\u6E90\u52A0\u8F7D] \u9519\u8BEF " + err);
                        return;
                    }
                    resolve(asset);
                });
            });
        };
    }
    Object.defineProperty(UILoader, "Instance", {
        get: function () {
            if (UILoader.singleInstance == null) {
                UILoader.singleInstance = new UILoader();
            }
            return UILoader.singleInstance;
        },
        enumerable: true,
        configurable: true
    });
    UILoader.prototype.loadResArr = function (paths, callfun) {
        cc.loader.loadResArray(paths, function (err, assets) {
            if (err) {
                console.error(err);
                return;
            }
            callfun(assets);
        }.bind(this));
    };
    UILoader.prototype.loadStaticRes = function (url, type, tag, callback) {
        var _this = this;
        if (!url || !type || !callback) {
            console.error("参数错误");
            return;
        }
        cc.loader.loadRes(url, type, function (err, asset) {
            callback(asset);
            _this._parseStaticRes(asset, tag);
        });
    };
    UILoader.prototype.loadStaticResArr = function (paths, tag, callfun) {
        if (!paths || !tag || !callfun) {
            console.error("参数错误");
            return;
        }
        cc.loader.loadResArray(paths, function (err, assets) {
            var _this = this;
            if (err) {
                console.error(err);
                return;
            }
            callfun(assets);
            assets.forEach(function (asset) {
                _this._parseStaticRes(asset, tag);
            });
        }.bind(this));
    };
    UILoader.prototype.loadAudioClip = function (path, callfun) {
        cc.loader.loadRes(path, cc.AudioClip, function (err, audioclip) {
            if (err) {
                console.error(err);
                return;
            }
            callfun(audioclip);
        });
    };
    UILoader.prototype.loadPrefabRes = function (path, callfun, retainRes, curSceneRes) {
        var _this = this;
        if (retainRes === void 0) { retainRes = false; }
        if (curSceneRes === void 0) { curSceneRes = -1; }
        cc.loader.loadRes(path, cc.Prefab, function (err, prefab) {
            if (err) {
                console.error(err);
                return;
            }
            if (retainRes) {
                _this.retatinRes(path);
                var deps = cc.loader.getDependsRecursively(prefab);
                if (deps) {
                    deps.forEach(function (url) {
                        _this.loadCurSceneRes(curSceneRes, url);
                    });
                }
            }
            callfun(prefab);
        });
    };
    UILoader.prototype.loadSpineInScene = function (path, callfun) {
        // this.loadSpineRes(path, callfun, true, G.curRunningScene)
        this.loadSpineRes(path, callfun, true, 0);
    };
    UILoader.prototype.loadPrefabInScene = function (path, callfun) {
        // this.loadPrefabRes(path, callfun, true, G.curRunningScene)
        this.loadPrefabRes(path, callfun, true, 0);
    };
    UILoader.prototype.loadSpriteFrameInScene = function (path, callfun) {
        // this.loadSpriteFrame(path, callfun, true, G.curRunningScene)
        this.loadPrefabRes(path, callfun, true, 0);
    };
    /**
     * 加载当前的SpriteFrame资源
     * @param path 当前SpriteFrame路径
     * @param callfun 加载成功回调
     * @param retainRes 释放开启资源计数（记录场景资源必须为ture）
     * @param curSceneRes 资源是否为当前场景资源
     */
    UILoader.prototype.loadSpriteFrame = function (path, callfun, retainRes, curSceneRes) {
        var _this = this;
        if (retainRes === void 0) { retainRes = false; }
        if (curSceneRes === void 0) { curSceneRes = -1; }
        cc.loader.loadRes(path, cc.SpriteFrame, function (err, spriteFrame) {
            if (err) {
                console.error(err);
                return;
            }
            if (retainRes) {
                _this.retatinRes(spriteFrame._textureFilename);
                _this.loadCurSceneRes(curSceneRes, spriteFrame._textureFilename);
            }
            callfun(spriteFrame);
        });
    };
    /**
     * 加载当前的spine资源
     * @param path 当前spine路径
     * @param callfun 加载成功回调
     * @param retainRes 释放开启资源计数（记录场景资源必须为ture）
     * @param curSceneRes 资源是否为当前场景资源
     */
    UILoader.prototype.loadSpineRes = function (path, callfun, retainRes, curSceneRes) {
        var _this = this;
        if (retainRes === void 0) { retainRes = false; }
        if (curSceneRes === void 0) { curSceneRes = -1; }
        cc.loader.loadRes(path, sp.SkeletonData, function (err, spine) {
            if (err) {
                console.error(err);
                return;
            }
            if (retainRes) {
                spine.textures.forEach(function (texture, key) {
                    _this.retatinRes(texture.url);
                    _this.loadCurSceneRes(curSceneRes, texture.url);
                });
            }
            callfun(spine);
        });
    };
    /**
     * 当加载资源记录为跟随场景释放时使用
     * @param curSceneRes 当前场景
     * @param resUrl 资源路径
     */
    UILoader.prototype.loadCurSceneRes = function (curSceneRes, resUrl) {
        if (curSceneRes > 0) {
            var resMap = this.m_sceneLoadResMap.get(curSceneRes);
            if (resMap) {
                var count = 1;
                var res = resMap.get(resUrl);
                if (res) {
                    count += resMap.get(resUrl);
                }
                resMap.set(resUrl, count);
            }
            else {
                resMap = new Map();
                resMap.set(resUrl, 1);
                this.m_sceneLoadResMap.set(curSceneRes, resMap);
            }
        }
    };
    // loadSpriteFrames(paths: Array<string>, callfun: Function, retainRes: boolean = false) {
    //     cc.loader.loadResArray(paths, cc.SpriteFrame, function (err, spriteFrames) {
    //         if (err) {
    //             console.error(err);
    //             return;
    //         }
    //         if (retainRes) {
    //             spriteFrames.forEach((spriteFrame) => {
    //                 this.retatinRes(spriteFrame._textureFilename);
    //             });
    //         }
    //         callfun(spriteFrames);
    //     }.bind(this));
    // }
    /**
     * 释放当前SpriteFrame的资源引用
     * @param spriteFrame 当前的SpriteFrame
     */
    UILoader.prototype.releaseSpriteFrameRes = function (spriteFrame) {
        if (spriteFrame) {
            this.releaseRes(spriteFrame['_textureFilename']);
            this.gc();
        }
    };
    /**
     * 释放当前spine资源引用
     * @param spine 当前的spine
     */
    UILoader.prototype.releaseSpineRes = function (spine) {
        var _this = this;
        if (spine.textures) {
            spine.textures.forEach(function (texture, key) {
                _this.releaseRes(texture.url);
            });
            this.gc();
        }
    };
    /**
     * 释放资源的预设或者UUID
     * @param prefab 预设或者UUID
     */
    UILoader.prototype.releasePrefabRes = function (prefab) {
        var _this = this;
        if (prefab) {
            var deps = cc.loader.getDependsRecursively(prefab);
            if (deps) {
                deps.forEach(function (url) {
                    _this.releaseRes(url);
                });
            }
            this.gc();
        }
    };
    /**
     *
     * 释放当前场景加载资源
     * 仅在加载资源时添加对应场景的资源才有效，等到场景切换时释放
     * @param curScene 当前场景
     */
    UILoader.prototype.releaseCurSceneAllRes = function (curScene, callback) {
        var _this = this;
        var e_1, _a;
        if (this.m_sceneLoadResMap.size > 0) {
            try {
                for (var _b = __values(this.m_sceneLoadResMap), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = __read(_c.value, 2), sceneIndex = _d[0], resMap = _d[1];
                    if (sceneIndex == curScene) {
                        resMap.forEach(function (count, resUrl) {
                            _this.releaseRes(resUrl, count);
                        });
                        resMap.clear();
                        this.gc();
                        if (callback) {
                            callback();
                        }
                        return;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        if (callback) {
            callback();
        }
    };
    /**
     * 释放当前场景加载资源
     * @param curScene 当前场景
     * @param resUrl 资源的URL
     */
    UILoader.prototype.releaseCurSceneRes = function (curScene, resUrl) {
        if (this.m_sceneLoadResMap.size > 0) {
            var resMap = this.m_sceneLoadResMap.get(curScene);
            if (resMap) {
                var rescount = resMap.get(resUrl);
                if (rescount > 0) {
                    rescount -= 1;
                    if (rescount <= 0) {
                        resMap.delete(resUrl);
                    }
                    else {
                        resMap.set(resUrl, rescount);
                    }
                    this.releaseRes(resUrl, 1);
                    this.gc();
                }
            }
        }
    };
    UILoader.prototype.releaseMusicRes = function (res) {
        this.releaseRes(res);
        this.gc();
    };
    UILoader.prototype.releaseStaticRes = function (tag) {
        var texturesInCache = cc.loader["_cache"];
        var release_key = [];
        for (var asset in texturesInCache) {
            if (tag && texturesInCache[asset].uTag !== tag) {
                continue;
            }
            if (texturesInCache[asset].bk_count > 0 && texturesInCache[asset].uStatic) {
                // 移除 Static 标识, 
                texturesInCache[asset].uStatic == null;
                delete texturesInCache[asset].uStatic;
                continue;
            }
            if (texturesInCache[asset].bk_count <= 0) {
                release_key.push(texturesInCache[asset].url);
                console.log("\u91CA\u653E\u8D44\u6E90:" + texturesInCache[asset].url);
                cc.loader.release(texturesInCache[asset].url);
            }
        }
        if (release_key.length > 0) {
            this._depthGC(release_key);
        }
    };
    UILoader.prototype.getCacheCount = function () {
        return Object.keys(cc.loader["_cache"]).length;
    };
    UILoader.prototype.retatinRes = function (res) {
        if (!cc.loader["_cache"][res]) {
            return;
        }
        if (!cc.loader["_cache"][res].bk_count) {
            cc.loader["_cache"][res].bk_count = 0;
        }
        cc.loader["_cache"][res].bk_count += 1;
    };
    UILoader.prototype.retainArrayRes = function (res) {
        var _this = this;
        res.forEach(function (item) {
            _this.retatinRes(item);
        });
    };
    UILoader.prototype.retainNodeRes = function (node) {
        this._parserNodeRes(node, 1);
    };
    UILoader.prototype.releaseNodeRes = function (node) {
        this._parserNodeRes(node, -1);
    };
    UILoader.prototype.releaseRes = function (res, count) {
        if (count === void 0) { count = 1; }
        if (!cc.loader["_cache"][res]) {
            return;
        }
        if (!cc.loader["_cache"][res].bk_count) {
            cc.loader["_cache"][res].bk_count = 0;
        }
        cc.loader["_cache"][res].bk_count -= count;
    };
    UILoader.prototype.releaseArrayRes = function (res) {
        var _this = this;
        res.forEach(function (item) {
            _this.releaseRes(item);
        });
    };
    UILoader.prototype.gc = function () {
        var texturesInCache = cc.loader["_cache"];
        var release_key = [];
        for (var asset in texturesInCache) {
            if (texturesInCache[asset].uStatic) {
                continue;
            }
            if (texturesInCache[asset].bk_count <= 0) {
                release_key.push(texturesInCache[asset].url);
                console.log("\u91CA\u653E\u8D44\u6E90:" + texturesInCache[asset].url);
                cc.loader.release(texturesInCache[asset].url);
            }
        }
        if (release_key.length > 0) {
            this._depthGC(release_key);
        }
    };
    UILoader.prototype.updateSpriteTexture = function (target, spriteFrame) {
        if (!target || !spriteFrame || !target.getComponent(cc.Sprite)) {
            return;
        }
        var sprite = target.getComponent(cc.Sprite);
        this._replaceTagetTexture(sprite, "spriteFrame", spriteFrame);
        this.gc();
    };
    UILoader.prototype.updateButtonTexture = function (target, normalSprite, pressedSprite, hoverSprite, disabledSprite) {
        if (!target || !normalSprite) {
            console.error("参数错误");
            return;
        }
        if (!target.getComponent(cc.Button)) {
            console.error("目标节点没有Button组件");
            return;
        }
        var button = target.getComponent(cc.Button);
        if (normalSprite) {
            this._replaceTagetTexture(button, "normalSprite", normalSprite);
        }
        if (pressedSprite) {
            this._replaceTagetTexture(button, "pressedSprite", pressedSprite);
        }
        if (hoverSprite) {
            this._replaceTagetTexture(button, "hoverSprite", hoverSprite);
        }
        if (disabledSprite) {
            this._replaceTagetTexture(button, "disabledSprite", disabledSprite);
        }
        this.gc();
    };
    UILoader.prototype._depthGC = function (strs) {
        var texturesInCache = cc.loader["_cache"];
        var release_json = [];
        for (var asset in texturesInCache) {
            if (texturesInCache[asset].dependKeys && texturesInCache[asset].dependKeys.length > 0) {
                var is_release = false;
                for (var i = 0; i < texturesInCache[asset].dependKeys.length; i++) {
                    if (strs.indexOf(texturesInCache[asset].dependKeys[i]) !== -1) {
                        is_release = true;
                    }
                }
                if (is_release /*&& texturesInCache[asset].bk_count <= 0*/) {
                    release_json.push(texturesInCache[asset].url);
                    console.log("\u91CA\u653E\u8D44\u6E90:" + texturesInCache[asset].url);
                    cc.loader.release(texturesInCache[asset].url);
                }
            }
        }
        if (release_json.length > 0) {
            this._depthGC(release_json);
        }
    };
    UILoader.prototype._parseStaticRes = function (item, tag) {
        if (item instanceof cc.Texture2D) {
            cc.loader["_cache"][item.url].uStatic = true;
            cc.loader["_cache"][item.url].uTag = tag;
        }
        else if (item instanceof cc.SpriteFrame) {
            cc.loader["_cache"][item["_textureFilename"]].uStatic = true;
            cc.loader["_cache"][item["_textureFilename"]].uTag = tag;
        }
        else if (item instanceof cc.Prefab) {
            this._parseStaticPrefab(item, tag);
        }
        else if (item instanceof cc.BitmapFont) {
            cc.loader["_cache"][item["spriteFrame"]._textureFilename].uStatic = true;
            cc.loader["_cache"][item["spriteFrame"]._textureFilename].uTag = tag;
        }
        else if (item instanceof cc.SpriteAtlas) {
            var keys = Object.keys(item["_spriteFrames"]);
            keys.forEach(function (key) {
                cc.loader["_cache"][item["_spriteFrames"][key]._textureFilename].uStatic = true;
                cc.loader["_cache"][item["_spriteFrames"][key]._textureFilename].uTag = tag;
            });
        }
        else if (item instanceof cc.AnimationClip) {
            console.error('AnimationClip 资源加载未做处理');
        }
        else if (item instanceof Object && item["name"]) {
            console.error('Object 资源加载未做处理');
        }
    };
    UILoader.prototype._parseStaticPrefab = function (node, tag) {
        var _this = this;
        var prefab = node;
        if (node.data) {
            prefab = node.data;
        }
        if (!(prefab instanceof cc.Scene)) {
            this._parseStaticNode(prefab, tag);
        }
        var children = prefab._children;
        children.forEach(function (child) {
            _this._parseStaticNode(child, tag);
            _this._parseStaticPrefab(child, tag);
        });
    };
    UILoader.prototype._retatinStaticRes = function (res, tag) {
        if (!cc.loader["_cache"][res]) {
            return;
        }
        if (!cc.loader["_cache"][res].bk_count) {
            cc.loader["_cache"][res].bk_count = 0;
        }
        cc.loader["_cache"][res].uStatic = true;
        cc.loader["_cache"][res].uTag = tag;
    };
    UILoader.prototype._parseStaticNode = function (node, tag) {
        // sprite 组件
        var sprite = node.getComponent(cc.Sprite);
        if (sprite && sprite.spriteFrame) {
            this._retatinStaticRes(sprite.spriteFrame["_textureFilename"], tag);
        }
        // button 组件
        var button = node.getComponent(cc.Button);
        if (button && button.normalSprite) {
            this._retatinStaticRes(button.normalSprite["_textureFilename"], tag);
        }
        if (button && button.pressedSprite) {
            this._retatinStaticRes(button.pressedSprite["_textureFilename"], tag);
        }
        if (button && button.hoverSprite) {
            this._retatinStaticRes(button.hoverSprite["_textureFilename"], tag);
        }
        if (button && button.disabledSprite) {
            this._retatinStaticRes(button.disabledSprite["_textureFilename"], tag);
        }
        // label 组件
        var label = node.getComponent(cc.Label);
        if (label && label.font && label.font instanceof cc.BitmapFont && label.font["spriteFrame"]) {
            this._retatinStaticRes(label.font["spriteFrame"]._textureFilename, tag);
        }
        // richText 组件
        var richText = node.getComponent(cc.RichText);
        if (richText && richText.imageAtlas) {
            var keys = Object.keys(richText.imageAtlas["_spriteFrames"]);
            if (keys.length > 0) {
                this._retatinStaticRes(richText.imageAtlas["_spriteFrames"][keys[0]]._textureFilename, tag);
            }
        }
        // particleSystem 组件
        var particleSystem = node.getComponent(cc.ParticleSystem);
        if (particleSystem && particleSystem["_texture"]) {
            this._retatinStaticRes(particleSystem["_texture"], tag);
        }
        // pageViewIndicator 组件
        var pageViewIndicator = node.getComponent(cc.PageViewIndicator);
        if (pageViewIndicator && pageViewIndicator.spriteFrame) {
            this._retatinStaticRes(pageViewIndicator.spriteFrame["_textureFilename"], tag);
        }
        // editBox 组件
        var editBox = node.getComponent(cc.EditBox);
        if (editBox && editBox.backgroundImage) {
            this._retatinStaticRes(editBox.backgroundImage["_textureFilename"], tag);
        }
        // Mask
        var mask = node.getComponent(cc.Mask);
        if (mask && mask.spriteFrame) {
            this._retatinStaticRes(mask.spriteFrame["_textureFilename"], tag);
        }
    };
    UILoader.prototype._replaceTagetTexture = function (target, attrName, newNormalSprite) {
        if (target[attrName] === newNormalSprite) {
            return;
        }
        if (target[attrName]) {
            this.releaseRes(target[attrName]._textureFilename);
        }
        this.retatinRes(newNormalSprite["_textureFilename"]);
        target[attrName] = newNormalSprite;
    };
    UILoader.prototype._parserNodeRes = function (node, number) {
        var _this = this;
        var children = node.children;
        this._parserNodeComponentRes(node, number);
        children.forEach(function (child) {
            _this._parserNodeRes(child, number);
        });
    };
    UILoader.prototype._parserNodeComponentRes = function (node, num) {
        this._parserComponentSprite(node, num);
        this._parserComponentButton(node, num);
        this._parserComponentLabel(node, num);
        this._parserComponentRichText(node, num);
        this._parserComponentParticleSystem(node, num);
        this._parserComponentPageViewIndicator(node, num);
        this._parserComponentEditBox(node, num);
        this._parserComponentMask(node, num);
        // TODO 释放其他组件附带的资源
    };
    UILoader.prototype._parserComponentSprite = function (node, num) {
        var sprite = node.getComponent(cc.Sprite);
        if (!sprite) {
            return;
        }
        if (num > 0) {
            this.retatinRes(sprite.spriteFrame["_textureFilename"]);
            return;
        }
        this.releaseRes(sprite.spriteFrame["_textureFilename"]);
    };
    UILoader.prototype._parserComponentButton = function (node, num) {
        var button = node.getComponent(cc.Button);
        if (!button) {
            return;
        }
        if (button.normalSprite) {
            if (num > 0) {
                this.retatinRes(button.normalSprite["_textureFilename"]);
            }
            else {
                this.releaseRes(button.normalSprite["_textureFilename"]);
            }
        }
        if (button.pressedSprite) {
            if (num > 0) {
                this.retatinRes(button.pressedSprite["_textureFilename"]);
            }
            else {
                this.releaseRes(button.pressedSprite["_textureFilename"]);
            }
        }
        if (button.hoverSprite) {
            if (num > 0) {
                this.retatinRes(button.hoverSprite["_textureFilename"]);
            }
            else {
                this.releaseRes(button.hoverSprite["_textureFilename"]);
            }
        }
        if (button.disabledSprite) {
            if (num > 0) {
                this.retatinRes(button.disabledSprite["_textureFilename"]);
            }
            else {
                this.releaseRes(button.disabledSprite["_textureFilename"]);
            }
        }
    };
    UILoader.prototype._parserComponentLabel = function (node, num) {
        var label = node.getComponent(cc.Label);
        if (!label || !label.font || !(label.font instanceof cc.BitmapFont) || !label.font["spriteFrame"]) {
            return;
        }
        if (num > 0) {
            this.retatinRes(label.font["spriteFrame"]["_textureFilename"]);
            return;
        }
        this.releaseRes(label.font["spriteFrame"]["_textureFilename"]);
    };
    UILoader.prototype._parserComponentRichText = function (node, num) {
        var richText = node.getComponent(cc.RichText);
        if (!richText || !richText.imageAtlas) {
            return;
        }
        var keys = Object.keys(richText.imageAtlas["_spriteFrames"]);
        if (keys.length <= 0) {
            return;
        }
        if (num > 0) {
            this.retatinRes(richText.imageAtlas["_spriteFrames"][keys[0]]["_textureFilename"]);
            return;
        }
        this.releaseRes(richText.imageAtlas["_spriteFrames"][keys[0]]["_textureFilename"]);
    };
    UILoader.prototype._parserComponentParticleSystem = function (node, num) {
        var particleSystem = node.getComponent(cc.ParticleSystem);
        if (!particleSystem || !particleSystem["_texture"]) {
            return;
        }
        if (num > 0) {
            this.retatinRes(particleSystem["_texture"]);
            return;
        }
        this.releaseRes(particleSystem["_texture"]);
    };
    UILoader.prototype._parserComponentPageViewIndicator = function (node, num) {
        var pageViewIndicator = node.getComponent(cc.PageViewIndicator);
        if (!pageViewIndicator || !pageViewIndicator.spriteFrame) {
            return;
        }
        if (num > 0) {
            this.retatinRes(pageViewIndicator.spriteFrame["_textureFilename"]);
            return;
        }
        this.releaseRes(pageViewIndicator.spriteFrame["_textureFilename"]);
    };
    UILoader.prototype._parserComponentEditBox = function (node, num) {
        var editBox = node.getComponent(cc.EditBox);
        if (!editBox || !editBox.backgroundImage) {
            return;
        }
        if (num > 0) {
            this.retatinRes(editBox.backgroundImage["_textureFilename"]);
            return;
        }
        this.releaseRes(editBox.backgroundImage["_textureFilename"]);
    };
    UILoader.prototype._parserComponentMask = function (node, num) {
        var mask = node.getComponent(cc.Mask);
        if (!mask || !mask.spriteFrame) {
            return;
        }
        if (num > 0) {
            this.retatinRes(mask.spriteFrame["_textureFilename"]);
            return;
        }
        this.releaseRes(mask.spriteFrame["_textureFilename"]);
    };
    UILoader.singleInstance = null;
    return UILoader;
}());
exports.default = UILoader;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVG9vbHNcXFVJTG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBb0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHcEM7SUFBQTtRQVVJLFdBQVc7UUFDSCxzQkFBaUIsR0FBcUMsSUFBSSxHQUFHLEVBQStCLENBQUM7UUFFckcsU0FBUztRQUNGLFNBQUksR0FBRyxVQUFVLFNBSXZCO1lBQ0csT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO2dCQUMvQixFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBSztvQkFDakMsSUFBSSxHQUFHLEVBQUU7d0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyw2Q0FBYSxHQUFLLENBQUMsQ0FBQzt3QkFDbEMsT0FBTztxQkFDVjtvQkFDRCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUE7UUFFRCxHQUFHO1FBQ0ksWUFBTyxHQUFHLFVBQVUsR0FBVyxFQUFFLElBQXFCO1lBQ3pELElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNqQyxPQUFPO2FBQ1Y7WUFDRCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07Z0JBQy9CLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsS0FBSztvQkFDcEMsSUFBSSxHQUFHLEVBQUU7d0JBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyw2Q0FBYSxHQUFLLENBQUMsQ0FBQzt3QkFDbEMsT0FBTztxQkFDVjtv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RyxDQUFDLEVBQUU7WUFDVCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQ3RELE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFFMUQsQ0FBQztJQXR2Qk0sdUJBQWMsR0FBYSxJQUFJLENBQUM7SUF1dkIzQyxlQUFDO0NBenZCRCxBQXl2QkMsSUFBQTtrQkF6dkJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgRyB9IGZyb20gXCIuL0dhbWVHbG9iYWxcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUxvYWRlciB7XG4gICAgXG4gICAgc3RhdGljIHNpbmdsZUluc3RhbmNlOiBVSUxvYWRlciA9IG51bGw7XG4gICAgc3RhdGljIGdldCBJbnN0YW5jZSgpOiBVSUxvYWRlciB7XG4gICAgICAgIGlmIChVSUxvYWRlci5zaW5nbGVJbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBVSUxvYWRlci5zaW5nbGVJbnN0YW5jZSA9IG5ldyBVSUxvYWRlcigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBVSUxvYWRlci5zaW5nbGVJbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvLyDlvZPliY3lnLrmma/otYTmupDnu5/orqFcbiAgICBwcml2YXRlIG1fc2NlbmVMb2FkUmVzTWFwOiBNYXA8bnVtYmVyLCBNYXA8c3RyaW5nLCBudW1iZXI+PiA9IG5ldyBNYXA8bnVtYmVyLCBNYXA8c3RyaW5nLCBudW1iZXI+PigpO1xuXG4gICAgLyoqIOWKoOi9vSAqL1xuICAgIHB1YmxpYyBsb2FkID0gZnVuY3Rpb24gKHJlc291cmNlczogc3RyaW5nIHwgc3RyaW5nW10gfCB7XG4gICAgICAgIHV1aWQ/OiBzdHJpbmc7XG4gICAgICAgIHVybD86IHN0cmluZztcbiAgICAgICAgdHlwZT86IHN0cmluZztcbiAgICB9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZChyZXNvdXJjZXMsIChlcnIsIGFzc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBb6LWE5rqQ5Yqg6L29XSDplJnor68gJHtlcnJ9YCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShhc3NldCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gXG4gICAgcHVibGljIGxvYWRSZXMgPSBmdW5jdGlvbiAodXJsOiBzdHJpbmcsIHR5cGU6IHR5cGVvZiBjYy5Bc3NldCkge1xuICAgICAgICBpZiAoIXVybCB8fCAhdHlwZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuWPguaVsOmUmeivr1wiLCB1cmwsIHR5cGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyh1cmwsIHR5cGUsIChlcnIsIGFzc2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBb6LWE5rqQ5Yqg6L29XSDplJnor68gJHtlcnJ9YCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShhc3NldCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBsb2FkUmVzQXJyKHBhdGhzOiBBcnJheTxzdHJpbmc+LCBjYWxsZnVuOiBGdW5jdGlvbikge1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlc0FycmF5KHBhdGhzLCBmdW5jdGlvbiAoZXJyLCBhc3NldHMpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGZ1bihhc3NldHMpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH1cblxuXG4gICAgbG9hZFN0YXRpY1Jlcyh1cmw6IHN0cmluZywgdHlwZTogdHlwZW9mIGNjLkFzc2V0LCB0YWc6IHN0cmluZywgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCF1cmwgfHwgIXR5cGUgfHwgIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5Y+C5pWw6ZSZ6K+vXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHVybCwgdHlwZSwgKGVyciwgYXNzZXQpID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGFzc2V0KTtcbiAgICAgICAgICAgIHRoaXMuX3BhcnNlU3RhdGljUmVzKGFzc2V0LCB0YWcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkU3RhdGljUmVzQXJyKHBhdGhzOiBBcnJheTxzdHJpbmc+LCB0YWc6IHN0cmluZywgY2FsbGZ1bjogRnVuY3Rpb24pIHtcbiAgICAgICAgaWYgKCFwYXRocyB8fCAhdGFnIHx8ICFjYWxsZnVuKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwi5Y+C5pWw6ZSZ6K+vXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNBcnJheShwYXRocywgZnVuY3Rpb24gKGVyciwgYXNzZXRzKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxmdW4oYXNzZXRzKTtcbiAgICAgICAgICAgIGFzc2V0cy5mb3JFYWNoKChhc3NldCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3BhcnNlU3RhdGljUmVzKGFzc2V0LCB0YWcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfVxuXG5cblxuICAgIGxvYWRBdWRpb0NsaXAocGF0aDogc3RyaW5nLCBjYWxsZnVuKSB7XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHBhdGgsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgYXVkaW9jbGlwKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxmdW4oYXVkaW9jbGlwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxvYWRQcmVmYWJSZXMocGF0aDogc3RyaW5nLCBjYWxsZnVuOiBGdW5jdGlvbiwgcmV0YWluUmVzOiBib29sZWFuID0gZmFsc2UsIGN1clNjZW5lUmVzOiBudW1iZXIgPSAtMSkge1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhwYXRoLCBjYy5QcmVmYWIsIChlcnIsIHByZWZhYikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmV0YWluUmVzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXRhdGluUmVzKHBhdGgpO1xuICAgICAgICAgICAgICAgIGxldCBkZXBzID0gY2MubG9hZGVyLmdldERlcGVuZHNSZWN1cnNpdmVseShwcmVmYWIpO1xuICAgICAgICAgICAgICAgIGlmIChkZXBzKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlcHMuZm9yRWFjaCh1cmwgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQ3VyU2NlbmVSZXMoY3VyU2NlbmVSZXMsIHVybCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxmdW4ocHJlZmFiKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxvYWRTcGluZUluU2NlbmUocGF0aDogc3RyaW5nLCBjYWxsZnVuOiBGdW5jdGlvbiwpIHtcbiAgICAgICAgLy8gdGhpcy5sb2FkU3BpbmVSZXMocGF0aCwgY2FsbGZ1biwgdHJ1ZSwgRy5jdXJSdW5uaW5nU2NlbmUpXG4gICAgICAgIHRoaXMubG9hZFNwaW5lUmVzKHBhdGgsIGNhbGxmdW4sIHRydWUsIDApXG5cbiAgICB9XG4gICAgbG9hZFByZWZhYkluU2NlbmUocGF0aDogc3RyaW5nLCBjYWxsZnVuOiBGdW5jdGlvbiwpIHtcbiAgICAgICAgLy8gdGhpcy5sb2FkUHJlZmFiUmVzKHBhdGgsIGNhbGxmdW4sIHRydWUsIEcuY3VyUnVubmluZ1NjZW5lKVxuICAgICAgICB0aGlzLmxvYWRQcmVmYWJSZXMocGF0aCwgY2FsbGZ1biwgdHJ1ZSwgMClcblxuICAgIH1cbiAgICBsb2FkU3ByaXRlRnJhbWVJblNjZW5lKHBhdGg6IHN0cmluZywgY2FsbGZ1bjogRnVuY3Rpb24sKSB7XG4gICAgICAgIC8vIHRoaXMubG9hZFNwcml0ZUZyYW1lKHBhdGgsIGNhbGxmdW4sIHRydWUsIEcuY3VyUnVubmluZ1NjZW5lKVxuICAgICAgICB0aGlzLmxvYWRQcmVmYWJSZXMocGF0aCwgY2FsbGZ1biwgdHJ1ZSwgMClcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWKoOi9veW9k+WJjeeahFNwcml0ZUZyYW1l6LWE5rqQXG4gICAgICogQHBhcmFtIHBhdGgg5b2T5YmNU3ByaXRlRnJhbWXot6/lvoRcbiAgICAgKiBAcGFyYW0gY2FsbGZ1biDliqDovb3miJDlip/lm57osINcbiAgICAgKiBAcGFyYW0gcmV0YWluUmVzIOmHiuaUvuW8gOWQr+i1hOa6kOiuoeaVsO+8iOiusOW9leWcuuaZr+i1hOa6kOW/hemhu+S4unR1cmXvvIlcbiAgICAgKiBAcGFyYW0gY3VyU2NlbmVSZXMg6LWE5rqQ5piv5ZCm5Li65b2T5YmN5Zy65pmv6LWE5rqQXG4gICAgICovXG4gICAgbG9hZFNwcml0ZUZyYW1lKHBhdGg6IHN0cmluZywgY2FsbGZ1bjogRnVuY3Rpb24sIHJldGFpblJlczogYm9vbGVhbiA9IGZhbHNlLCBjdXJTY2VuZVJlczogbnVtYmVyID0gLTEpIHtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMocGF0aCwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXRhaW5SZXMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJldGF0aW5SZXMoc3ByaXRlRnJhbWUuX3RleHR1cmVGaWxlbmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkQ3VyU2NlbmVSZXMoY3VyU2NlbmVSZXMsIHNwcml0ZUZyYW1lLl90ZXh0dXJlRmlsZW5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGZ1bihzcHJpdGVGcmFtZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWKoOi9veW9k+WJjeeahHNwaW5l6LWE5rqQXG4gICAgICogQHBhcmFtIHBhdGgg5b2T5YmNc3BpbmXot6/lvoRcbiAgICAgKiBAcGFyYW0gY2FsbGZ1biDliqDovb3miJDlip/lm57osINcbiAgICAgKiBAcGFyYW0gcmV0YWluUmVzIOmHiuaUvuW8gOWQr+i1hOa6kOiuoeaVsO+8iOiusOW9leWcuuaZr+i1hOa6kOW/hemhu+S4unR1cmXvvIlcbiAgICAgKiBAcGFyYW0gY3VyU2NlbmVSZXMg6LWE5rqQ5piv5ZCm5Li65b2T5YmN5Zy65pmv6LWE5rqQXG4gICAgICovXG4gICAgbG9hZFNwaW5lUmVzKHBhdGg6IHN0cmluZywgY2FsbGZ1bjogRnVuY3Rpb24sIHJldGFpblJlczogYm9vbGVhbiA9IGZhbHNlLCBjdXJTY2VuZVJlczogbnVtYmVyID0gLTEpIHtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMocGF0aCwgc3AuU2tlbGV0b25EYXRhLCAoZXJyLCBzcGluZTogc3AuU2tlbGV0b25EYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXRhaW5SZXMpIHtcbiAgICAgICAgICAgICAgICBzcGluZS50ZXh0dXJlcy5mb3JFYWNoKCh0ZXh0dXJlLCBrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXRhdGluUmVzKHRleHR1cmUudXJsKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQ3VyU2NlbmVSZXMoY3VyU2NlbmVSZXMsIHRleHR1cmUudXJsKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGZ1bihzcGluZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDlvZPliqDovb3otYTmupDorrDlvZXkuLrot5/pmo/lnLrmma/ph4rmlL7ml7bkvb/nlKhcbiAgICAgKiBAcGFyYW0gY3VyU2NlbmVSZXMg5b2T5YmN5Zy65pmvXG4gICAgICogQHBhcmFtIHJlc1VybCDotYTmupDot6/lvoRcbiAgICAgKi9cbiAgICBwcml2YXRlIGxvYWRDdXJTY2VuZVJlcyhjdXJTY2VuZVJlczogbnVtYmVyLCByZXNVcmw6IHN0cmluZykge1xuICAgICAgICBpZiAoY3VyU2NlbmVSZXMgPiAwKSB7XG4gICAgICAgICAgICBsZXQgcmVzTWFwID0gdGhpcy5tX3NjZW5lTG9hZFJlc01hcC5nZXQoY3VyU2NlbmVSZXMpO1xuICAgICAgICAgICAgaWYgKHJlc01hcCkge1xuICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDE7XG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IHJlc01hcC5nZXQocmVzVXJsKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ICs9IHJlc01hcC5nZXQocmVzVXJsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzTWFwLnNldChyZXNVcmwsIGNvdW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzTWFwID0gbmV3IE1hcDxzdHJpbmcsIG51bWJlcj4oKTtcbiAgICAgICAgICAgICAgICByZXNNYXAuc2V0KHJlc1VybCwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5tX3NjZW5lTG9hZFJlc01hcC5zZXQoY3VyU2NlbmVSZXMsIHJlc01hcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC8vIGxvYWRTcHJpdGVGcmFtZXMocGF0aHM6IEFycmF5PHN0cmluZz4sIGNhbGxmdW46IEZ1bmN0aW9uLCByZXRhaW5SZXM6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgIC8vICAgICBjYy5sb2FkZXIubG9hZFJlc0FycmF5KHBhdGhzLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWVzKSB7XG4gICAgLy8gICAgICAgICBpZiAoZXJyKSB7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgICAgIGlmIChyZXRhaW5SZXMpIHtcbiAgICAvLyAgICAgICAgICAgICBzcHJpdGVGcmFtZXMuZm9yRWFjaCgoc3ByaXRlRnJhbWUpID0+IHtcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5yZXRhdGluUmVzKHNwcml0ZUZyYW1lLl90ZXh0dXJlRmlsZW5hbWUpO1xuICAgIC8vICAgICAgICAgICAgIH0pO1xuXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgICAgICBjYWxsZnVuKHNwcml0ZUZyYW1lcyk7XG4gICAgLy8gICAgIH0uYmluZCh0aGlzKSk7XG4gICAgLy8gfVxuXG5cbiAgICAvKipcbiAgICAgKiDph4rmlL7lvZPliY1TcHJpdGVGcmFtZeeahOi1hOa6kOW8leeUqFxuICAgICAqIEBwYXJhbSBzcHJpdGVGcmFtZSDlvZPliY3nmoRTcHJpdGVGcmFtZVxuICAgICAqL1xuICAgIHJlbGVhc2VTcHJpdGVGcmFtZVJlcyhzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpOiB2b2lkIHtcbiAgICAgICAgaWYgKHNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnJlbGVhc2VSZXMoc3ByaXRlRnJhbWVbJ190ZXh0dXJlRmlsZW5hbWUnXSk7XG4gICAgICAgICAgICB0aGlzLmdjKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6YeK5pS+5b2T5YmNc3BpbmXotYTmupDlvJXnlKhcbiAgICAgKiBAcGFyYW0gc3BpbmUg5b2T5YmN55qEc3BpbmVcbiAgICAgKi9cbiAgICByZWxlYXNlU3BpbmVSZXMoc3BpbmU6IHNwLlNrZWxldG9uRGF0YSk6IHZvaWQge1xuICAgICAgICBpZiAoc3BpbmUudGV4dHVyZXMpIHtcbiAgICAgICAgICAgIHNwaW5lLnRleHR1cmVzLmZvckVhY2goKHRleHR1cmUsIGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVsZWFzZVJlcyh0ZXh0dXJlLnVybCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuZ2MoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDph4rmlL7otYTmupDnmoTpooTorr7miJbogIVVVUlEXG4gICAgICogQHBhcmFtIHByZWZhYiDpooTorr7miJbogIVVVUlEXG4gICAgICovXG4gICAgcmVsZWFzZVByZWZhYlJlcyhwcmVmYWI6IGNjLlByZWZhYiB8IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAocHJlZmFiKSB7XG4gICAgICAgICAgICBsZXQgZGVwcyA9IGNjLmxvYWRlci5nZXREZXBlbmRzUmVjdXJzaXZlbHkocHJlZmFiKTtcbiAgICAgICAgICAgIGlmIChkZXBzKSB7XG4gICAgICAgICAgICAgICAgZGVwcy5mb3JFYWNoKHVybCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVsZWFzZVJlcyh1cmwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nYygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIOmHiuaUvuW9k+WJjeWcuuaZr+WKoOi9vei1hOa6kFxuICAgICAqIOS7heWcqOWKoOi9vei1hOa6kOaXtua3u+WKoOWvueW6lOWcuuaZr+eahOi1hOa6kOaJjeacieaViO+8jOetieWIsOWcuuaZr+WIh+aNouaXtumHiuaUvlxuICAgICAqIEBwYXJhbSBjdXJTY2VuZSDlvZPliY3lnLrmma9cbiAgICAgKi9cbiAgICByZWxlYXNlQ3VyU2NlbmVBbGxSZXMoY3VyU2NlbmU6IG51bWJlciwgY2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5tX3NjZW5lTG9hZFJlc01hcC5zaXplID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgW3NjZW5lSW5kZXgsIHJlc01hcF0gb2YgdGhpcy5tX3NjZW5lTG9hZFJlc01hcCkge1xuICAgICAgICAgICAgICAgIGlmIChzY2VuZUluZGV4ID09IGN1clNjZW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc01hcC5mb3JFYWNoKChjb3VudDogbnVtYmVyLCByZXNVcmw6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWxlYXNlUmVzKHJlc1VybCwgY291bnQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzTWFwLmNsZWFyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2MoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOmHiuaUvuW9k+WJjeWcuuaZr+WKoOi9vei1hOa6kFxuICAgICAqIEBwYXJhbSBjdXJTY2VuZSDlvZPliY3lnLrmma9cbiAgICAgKiBAcGFyYW0gcmVzVXJsIOi1hOa6kOeahFVSTFxuICAgICAqL1xuICAgIHJlbGVhc2VDdXJTY2VuZVJlcyhjdXJTY2VuZTogbnVtYmVyLCByZXNVcmw6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5tX3NjZW5lTG9hZFJlc01hcC5zaXplID4gMCkge1xuICAgICAgICAgICAgbGV0IHJlc01hcCA9IHRoaXMubV9zY2VuZUxvYWRSZXNNYXAuZ2V0KGN1clNjZW5lKTtcbiAgICAgICAgICAgIGlmIChyZXNNYXApIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzY291bnQgPSByZXNNYXAuZ2V0KHJlc1VybCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc2NvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXNjb3VudCAtPSAxO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzY291bnQgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzTWFwLmRlbGV0ZShyZXNVcmwpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzTWFwLnNldChyZXNVcmwsIHJlc2NvdW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbGVhc2VSZXMocmVzVXJsLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmVsZWFzZU11c2ljUmVzKHJlczogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVsZWFzZVJlcyhyZXMpO1xuICAgICAgICB0aGlzLmdjKCk7XG4gICAgfVxuXG5cblxuICAgIHJlbGVhc2VTdGF0aWNSZXModGFnOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdmFyIHRleHR1cmVzSW5DYWNoZSA9IGNjLmxvYWRlcltcIl9jYWNoZVwiXTtcbiAgICAgICAgdmFyIHJlbGVhc2Vfa2V5ID0gW107XG4gICAgICAgIGZvciAodmFyIGFzc2V0IGluIHRleHR1cmVzSW5DYWNoZSkge1xuICAgICAgICAgICAgaWYgKHRhZyAmJiB0ZXh0dXJlc0luQ2FjaGVbYXNzZXRdLnVUYWcgIT09IHRhZykge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGV4dHVyZXNJbkNhY2hlW2Fzc2V0XS5ia19jb3VudCA+IDAgJiYgdGV4dHVyZXNJbkNhY2hlW2Fzc2V0XS51U3RhdGljKSB7XG4gICAgICAgICAgICAgICAgLy8g56e76ZmkIFN0YXRpYyDmoIfor4YsIFxuICAgICAgICAgICAgICAgIHRleHR1cmVzSW5DYWNoZVthc3NldF0udVN0YXRpYyA9PSBudWxsO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0ZXh0dXJlc0luQ2FjaGVbYXNzZXRdLnVTdGF0aWM7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0ZXh0dXJlc0luQ2FjaGVbYXNzZXRdLmJrX2NvdW50IDw9IDApIHtcbiAgICAgICAgICAgICAgICByZWxlYXNlX2tleS5wdXNoKHRleHR1cmVzSW5DYWNoZVthc3NldF0udXJsKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg6YeK5pS+6LWE5rqQOiR7dGV4dHVyZXNJbkNhY2hlW2Fzc2V0XS51cmx9YCk7XG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLnJlbGVhc2UodGV4dHVyZXNJbkNhY2hlW2Fzc2V0XS51cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlbGVhc2Vfa2V5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2RlcHRoR0MocmVsZWFzZV9rZXkpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG4gICAgZ2V0Q2FjaGVDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGNjLmxvYWRlcltcIl9jYWNoZVwiXSkubGVuZ3RoO1xuICAgIH1cblxuXG5cbiAgICByZXRhdGluUmVzKHJlczogc3RyaW5nKSB7XG4gICAgICAgIGlmICghY2MubG9hZGVyW1wiX2NhY2hlXCJdW3Jlc10pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2MubG9hZGVyW1wiX2NhY2hlXCJdW3Jlc10uYmtfY291bnQpIHtcbiAgICAgICAgICAgIGNjLmxvYWRlcltcIl9jYWNoZVwiXVtyZXNdLmJrX2NvdW50ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBjYy5sb2FkZXJbXCJfY2FjaGVcIl1bcmVzXS5ia19jb3VudCArPSAxO1xuICAgIH1cblxuICAgIHJldGFpbkFycmF5UmVzKHJlczogc3RyaW5nW10pIHtcbiAgICAgICAgcmVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHRoaXMucmV0YXRpblJlcyhpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0YWluTm9kZVJlcyhub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIHRoaXMuX3BhcnNlck5vZGVSZXMobm9kZSwgMSk7XG4gICAgfVxuXG4gICAgcmVsZWFzZU5vZGVSZXMobm9kZTogY2MuTm9kZSkge1xuICAgICAgICB0aGlzLl9wYXJzZXJOb2RlUmVzKG5vZGUsIC0xKTtcbiAgICB9XG5cbiAgICByZWxlYXNlUmVzKHJlczogc3RyaW5nLCBjb3VudDogbnVtYmVyID0gMSkge1xuICAgICAgICBpZiAoIWNjLmxvYWRlcltcIl9jYWNoZVwiXVtyZXNdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNjLmxvYWRlcltcIl9jYWNoZVwiXVtyZXNdLmJrX2NvdW50KSB7XG4gICAgICAgICAgICBjYy5sb2FkZXJbXCJfY2FjaGVcIl1bcmVzXS5ia19jb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY2MubG9hZGVyW1wiX2NhY2hlXCJdW3Jlc10uYmtfY291bnQgLT0gY291bnQ7XG4gICAgfVxuXG4gICAgcmVsZWFzZUFycmF5UmVzKHJlczogc3RyaW5nW10pIHtcbiAgICAgICAgcmVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZVJlcyhpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cblxuXG4gICAgZ2MoKSB7XG4gICAgICAgIHZhciB0ZXh0dXJlc0luQ2FjaGUgPSBjYy5sb2FkZXJbXCJfY2FjaGVcIl07XG4gICAgICAgIHZhciByZWxlYXNlX2tleSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBhc3NldCBpbiB0ZXh0dXJlc0luQ2FjaGUpIHtcbiAgICAgICAgICAgIGlmICh0ZXh0dXJlc0luQ2FjaGVbYXNzZXRdLnVTdGF0aWMpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0ZXh0dXJlc0luQ2FjaGVbYXNzZXRdLmJrX2NvdW50IDw9IDApIHtcbiAgICAgICAgICAgICAgICByZWxlYXNlX2tleS5wdXNoKHRleHR1cmVzSW5DYWNoZVthc3NldF0udXJsKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhg6YeK5pS+6LWE5rqQOiR7dGV4dHVyZXNJbkNhY2hlW2Fzc2V0XS51cmx9YCk7XG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLnJlbGVhc2UodGV4dHVyZXNJbkNhY2hlW2Fzc2V0XS51cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlbGVhc2Vfa2V5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX2RlcHRoR0MocmVsZWFzZV9rZXkpO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICB1cGRhdGVTcHJpdGVUZXh0dXJlKHRhcmdldDogY2MuTm9kZSwgc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lKSB7XG4gICAgICAgIGlmICghdGFyZ2V0IHx8ICFzcHJpdGVGcmFtZSB8fCAhdGFyZ2V0LmdldENvbXBvbmVudChjYy5TcHJpdGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNwcml0ZSA9IHRhcmdldC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgdGhpcy5fcmVwbGFjZVRhZ2V0VGV4dHVyZShzcHJpdGUsIFwic3ByaXRlRnJhbWVcIiwgc3ByaXRlRnJhbWUpO1xuICAgICAgICB0aGlzLmdjKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlQnV0dG9uVGV4dHVyZSh0YXJnZXQ6IGNjLk5vZGUsIG5vcm1hbFNwcml0ZT86IGNjLlNwcml0ZUZyYW1lLCBwcmVzc2VkU3ByaXRlPzogY2MuU3ByaXRlRnJhbWUsIGhvdmVyU3ByaXRlPzogY2MuU3ByaXRlRnJhbWUsIGRpc2FibGVkU3ByaXRlPzogY2MuU3ByaXRlRnJhbWUpIHtcbiAgICAgICAgaWYgKCF0YXJnZXQgfHwgIW5vcm1hbFNwcml0ZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIuWPguaVsOmUmeivr1wiKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCLnm67moIfoioLngrnmsqHmnIlCdXR0b27nu4Tku7ZcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYnV0dG9uID0gdGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICBpZiAobm9ybWFsU3ByaXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXBsYWNlVGFnZXRUZXh0dXJlKGJ1dHRvbiwgXCJub3JtYWxTcHJpdGVcIiwgbm9ybWFsU3ByaXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmVzc2VkU3ByaXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXBsYWNlVGFnZXRUZXh0dXJlKGJ1dHRvbiwgXCJwcmVzc2VkU3ByaXRlXCIsIHByZXNzZWRTcHJpdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhvdmVyU3ByaXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXBsYWNlVGFnZXRUZXh0dXJlKGJ1dHRvbiwgXCJob3ZlclNwcml0ZVwiLCBob3ZlclNwcml0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlzYWJsZWRTcHJpdGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JlcGxhY2VUYWdldFRleHR1cmUoYnV0dG9uLCBcImRpc2FibGVkU3ByaXRlXCIsIGRpc2FibGVkU3ByaXRlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdjKCk7XG4gICAgfVxuXG4gICAgX2RlcHRoR0Moc3RyczogQXJyYXk8c3RyaW5nPikge1xuICAgICAgICB2YXIgdGV4dHVyZXNJbkNhY2hlID0gY2MubG9hZGVyW1wiX2NhY2hlXCJdO1xuICAgICAgICB2YXIgcmVsZWFzZV9qc29uID0gW107XG4gICAgICAgIGZvciAodmFyIGFzc2V0IGluIHRleHR1cmVzSW5DYWNoZSkge1xuICAgICAgICAgICAgaWYgKHRleHR1cmVzSW5DYWNoZVthc3NldF0uZGVwZW5kS2V5cyAmJiB0ZXh0dXJlc0luQ2FjaGVbYXNzZXRdLmRlcGVuZEtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBpc19yZWxlYXNlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0ZXh0dXJlc0luQ2FjaGVbYXNzZXRdLmRlcGVuZEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cnMuaW5kZXhPZih0ZXh0dXJlc0luQ2FjaGVbYXNzZXRdLmRlcGVuZEtleXNbaV0pICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNfcmVsZWFzZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzX3JlbGVhc2UgLyomJiB0ZXh0dXJlc0luQ2FjaGVbYXNzZXRdLmJrX2NvdW50IDw9IDAqLykge1xuICAgICAgICAgICAgICAgICAgICByZWxlYXNlX2pzb24ucHVzaCh0ZXh0dXJlc0luQ2FjaGVbYXNzZXRdLnVybCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDph4rmlL7otYTmupA6JHt0ZXh0dXJlc0luQ2FjaGVbYXNzZXRdLnVybH1gKTtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9hZGVyLnJlbGVhc2UodGV4dHVyZXNJbkNhY2hlW2Fzc2V0XS51cmwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZWxlYXNlX2pzb24ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5fZGVwdGhHQyhyZWxlYXNlX2pzb24pO1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBfcGFyc2VTdGF0aWNSZXMoaXRlbTogdHlwZW9mIGNjLkFzc2V0LCB0YWc6IHN0cmluZykge1xuICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIGNjLlRleHR1cmUyRCkge1xuICAgICAgICAgICAgY2MubG9hZGVyW1wiX2NhY2hlXCJdW2l0ZW0udXJsXS51U3RhdGljID0gdHJ1ZTtcbiAgICAgICAgICAgIGNjLmxvYWRlcltcIl9jYWNoZVwiXVtpdGVtLnVybF0udVRhZyA9IHRhZztcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtIGluc3RhbmNlb2YgY2MuU3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgIGNjLmxvYWRlcltcIl9jYWNoZVwiXVtpdGVtW1wiX3RleHR1cmVGaWxlbmFtZVwiXV0udVN0YXRpYyA9IHRydWU7XG4gICAgICAgICAgICBjYy5sb2FkZXJbXCJfY2FjaGVcIl1baXRlbVtcIl90ZXh0dXJlRmlsZW5hbWVcIl1dLnVUYWcgPSB0YWc7XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbSBpbnN0YW5jZW9mIGNjLlByZWZhYikge1xuICAgICAgICAgICAgdGhpcy5fcGFyc2VTdGF0aWNQcmVmYWIoaXRlbSwgdGFnKTtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtIGluc3RhbmNlb2YgY2MuQml0bWFwRm9udCkge1xuICAgICAgICAgICAgY2MubG9hZGVyW1wiX2NhY2hlXCJdW2l0ZW1bXCJzcHJpdGVGcmFtZVwiXS5fdGV4dHVyZUZpbGVuYW1lXS51U3RhdGljID0gdHJ1ZTtcbiAgICAgICAgICAgIGNjLmxvYWRlcltcIl9jYWNoZVwiXVtpdGVtW1wic3ByaXRlRnJhbWVcIl0uX3RleHR1cmVGaWxlbmFtZV0udVRhZyA9IHRhZztcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtIGluc3RhbmNlb2YgY2MuU3ByaXRlQXRsYXMpIHtcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoaXRlbVtcIl9zcHJpdGVGcmFtZXNcIl0pXG4gICAgICAgICAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGNjLmxvYWRlcltcIl9jYWNoZVwiXVtpdGVtW1wiX3Nwcml0ZUZyYW1lc1wiXVtrZXldLl90ZXh0dXJlRmlsZW5hbWVdLnVTdGF0aWMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNjLmxvYWRlcltcIl9jYWNoZVwiXVtpdGVtW1wiX3Nwcml0ZUZyYW1lc1wiXVtrZXldLl90ZXh0dXJlRmlsZW5hbWVdLnVUYWcgPSB0YWc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtIGluc3RhbmNlb2YgY2MuQW5pbWF0aW9uQ2xpcCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQW5pbWF0aW9uQ2xpcCDotYTmupDliqDovb3mnKrlgZrlpITnkIYnKTtcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtIGluc3RhbmNlb2YgT2JqZWN0ICYmIGl0ZW1bXCJuYW1lXCJdKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdPYmplY3Qg6LWE5rqQ5Yqg6L295pyq5YGa5aSE55CGJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcGFyc2VTdGF0aWNQcmVmYWIobm9kZSwgdGFnOiBzdHJpbmcpIHtcbiAgICAgICAgdmFyIHByZWZhYiA9IG5vZGU7XG4gICAgICAgIGlmIChub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIHByZWZhYiA9IG5vZGUuZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKHByZWZhYiBpbnN0YW5jZW9mIGNjLlNjZW5lKSkge1xuICAgICAgICAgICAgdGhpcy5fcGFyc2VTdGF0aWNOb2RlKHByZWZhYiwgdGFnKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2hpbGRyZW4gPSBwcmVmYWIuX2NoaWxkcmVuO1xuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fcGFyc2VTdGF0aWNOb2RlKGNoaWxkLCB0YWcpO1xuICAgICAgICAgICAgdGhpcy5fcGFyc2VTdGF0aWNQcmVmYWIoY2hpbGQsIHRhZyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9yZXRhdGluU3RhdGljUmVzKHJlczogc3RyaW5nLCB0YWc6IHN0cmluZykge1xuICAgICAgICBpZiAoIWNjLmxvYWRlcltcIl9jYWNoZVwiXVtyZXNdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWNjLmxvYWRlcltcIl9jYWNoZVwiXVtyZXNdLmJrX2NvdW50KSB7XG4gICAgICAgICAgICBjYy5sb2FkZXJbXCJfY2FjaGVcIl1bcmVzXS5ia19jb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY2MubG9hZGVyW1wiX2NhY2hlXCJdW3Jlc10udVN0YXRpYyA9IHRydWU7XG4gICAgICAgIGNjLmxvYWRlcltcIl9jYWNoZVwiXVtyZXNdLnVUYWcgPSB0YWc7XG4gICAgfVxuXG4gICAgX3BhcnNlU3RhdGljTm9kZShub2RlOiBjYy5Ob2RlLCB0YWc6IHN0cmluZykge1xuICAgICAgICAvLyBzcHJpdGUg57uE5Lu2XG4gICAgICAgIGxldCBzcHJpdGUgPSBub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBpZiAoc3ByaXRlICYmIHNwcml0ZS5zcHJpdGVGcmFtZSkge1xuICAgICAgICAgICAgdGhpcy5fcmV0YXRpblN0YXRpY1JlcyhzcHJpdGUuc3ByaXRlRnJhbWVbXCJfdGV4dHVyZUZpbGVuYW1lXCJdLCB0YWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYnV0dG9uIOe7hOS7tlxuICAgICAgICBsZXQgYnV0dG9uID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgaWYgKGJ1dHRvbiAmJiBidXR0b24ubm9ybWFsU3ByaXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXRhdGluU3RhdGljUmVzKGJ1dHRvbi5ub3JtYWxTcHJpdGVbXCJfdGV4dHVyZUZpbGVuYW1lXCJdLCB0YWcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChidXR0b24gJiYgYnV0dG9uLnByZXNzZWRTcHJpdGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JldGF0aW5TdGF0aWNSZXMoYnV0dG9uLnByZXNzZWRTcHJpdGVbXCJfdGV4dHVyZUZpbGVuYW1lXCJdLCB0YWcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChidXR0b24gJiYgYnV0dG9uLmhvdmVyU3ByaXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXRhdGluU3RhdGljUmVzKGJ1dHRvbi5ob3ZlclNwcml0ZVtcIl90ZXh0dXJlRmlsZW5hbWVcIl0sIHRhZyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJ1dHRvbiAmJiBidXR0b24uZGlzYWJsZWRTcHJpdGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3JldGF0aW5TdGF0aWNSZXMoYnV0dG9uLmRpc2FibGVkU3ByaXRlW1wiX3RleHR1cmVGaWxlbmFtZVwiXSwgdGFnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxhYmVsIOe7hOS7tlxuICAgICAgICBsZXQgbGFiZWwgPSBub2RlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGlmIChsYWJlbCAmJiBsYWJlbC5mb250ICYmIGxhYmVsLmZvbnQgaW5zdGFuY2VvZiBjYy5CaXRtYXBGb250ICYmIGxhYmVsLmZvbnRbXCJzcHJpdGVGcmFtZVwiXSkge1xuICAgICAgICAgICAgdGhpcy5fcmV0YXRpblN0YXRpY1JlcyhsYWJlbC5mb250W1wic3ByaXRlRnJhbWVcIl0uX3RleHR1cmVGaWxlbmFtZSwgdGFnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJpY2hUZXh0IOe7hOS7tlxuICAgICAgICBsZXQgcmljaFRleHQgPSBub2RlLmdldENvbXBvbmVudChjYy5SaWNoVGV4dCk7XG4gICAgICAgIGlmIChyaWNoVGV4dCAmJiByaWNoVGV4dC5pbWFnZUF0bGFzKSB7XG4gICAgICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHJpY2hUZXh0LmltYWdlQXRsYXNbXCJfc3ByaXRlRnJhbWVzXCJdKTtcbiAgICAgICAgICAgIGlmIChrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXRhdGluU3RhdGljUmVzKHJpY2hUZXh0LmltYWdlQXRsYXNbXCJfc3ByaXRlRnJhbWVzXCJdW2tleXNbMF1dLl90ZXh0dXJlRmlsZW5hbWUsIHRhZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXJ0aWNsZVN5c3RlbSDnu4Tku7ZcbiAgICAgICAgbGV0IHBhcnRpY2xlU3lzdGVtID0gbm9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pO1xuICAgICAgICBpZiAocGFydGljbGVTeXN0ZW0gJiYgcGFydGljbGVTeXN0ZW1bXCJfdGV4dHVyZVwiXSkge1xuICAgICAgICAgICAgdGhpcy5fcmV0YXRpblN0YXRpY1JlcyhwYXJ0aWNsZVN5c3RlbVtcIl90ZXh0dXJlXCJdLCB0YWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGFnZVZpZXdJbmRpY2F0b3Ig57uE5Lu2XG4gICAgICAgIGxldCBwYWdlVmlld0luZGljYXRvciA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLlBhZ2VWaWV3SW5kaWNhdG9yKTtcbiAgICAgICAgaWYgKHBhZ2VWaWV3SW5kaWNhdG9yICYmIHBhZ2VWaWV3SW5kaWNhdG9yLnNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXRhdGluU3RhdGljUmVzKHBhZ2VWaWV3SW5kaWNhdG9yLnNwcml0ZUZyYW1lW1wiX3RleHR1cmVGaWxlbmFtZVwiXSwgdGFnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVkaXRCb3gg57uE5Lu2XG4gICAgICAgIGxldCBlZGl0Qm94ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XG4gICAgICAgIGlmIChlZGl0Qm94ICYmIGVkaXRCb3guYmFja2dyb3VuZEltYWdlKSB7XG4gICAgICAgICAgICB0aGlzLl9yZXRhdGluU3RhdGljUmVzKGVkaXRCb3guYmFja2dyb3VuZEltYWdlW1wiX3RleHR1cmVGaWxlbmFtZVwiXSwgdGFnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1hc2tcbiAgICAgICAgbGV0IG1hc2sgPSBub2RlLmdldENvbXBvbmVudChjYy5NYXNrKTtcbiAgICAgICAgaWYgKG1hc2sgJiYgbWFzay5zcHJpdGVGcmFtZSkge1xuICAgICAgICAgICAgdGhpcy5fcmV0YXRpblN0YXRpY1JlcyhtYXNrLnNwcml0ZUZyYW1lW1wiX3RleHR1cmVGaWxlbmFtZVwiXSwgdGFnKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbiAgICBfcmVwbGFjZVRhZ2V0VGV4dHVyZSh0YXJnZXQ6IGFueSwgYXR0ck5hbWU6IHN0cmluZywgbmV3Tm9ybWFsU3ByaXRlOiBjYy5TcHJpdGVGcmFtZSkge1xuICAgICAgICBpZiAodGFyZ2V0W2F0dHJOYW1lXSA9PT0gbmV3Tm9ybWFsU3ByaXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldFthdHRyTmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZVJlcyh0YXJnZXRbYXR0ck5hbWVdLl90ZXh0dXJlRmlsZW5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmV0YXRpblJlcyhuZXdOb3JtYWxTcHJpdGVbXCJfdGV4dHVyZUZpbGVuYW1lXCJdKTtcbiAgICAgICAgdGFyZ2V0W2F0dHJOYW1lXSA9IG5ld05vcm1hbFNwcml0ZTtcbiAgICB9XG5cbiAgICBfcGFyc2VyTm9kZVJlcyhub2RlOiBjYy5Ob2RlLCBudW1iZXI6IG51bWJlcikge1xuICAgICAgICBsZXQgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuO1xuICAgICAgICB0aGlzLl9wYXJzZXJOb2RlQ29tcG9uZW50UmVzKG5vZGUsIG51bWJlcik7XG4gICAgICAgIGNoaWxkcmVuLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9wYXJzZXJOb2RlUmVzKGNoaWxkLCBudW1iZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfcGFyc2VyTm9kZUNvbXBvbmVudFJlcyhub2RlOiBjYy5Ob2RlLCBudW06IG51bWJlcikge1xuICAgICAgICB0aGlzLl9wYXJzZXJDb21wb25lbnRTcHJpdGUobm9kZSwgbnVtKTtcbiAgICAgICAgdGhpcy5fcGFyc2VyQ29tcG9uZW50QnV0dG9uKG5vZGUsIG51bSk7XG4gICAgICAgIHRoaXMuX3BhcnNlckNvbXBvbmVudExhYmVsKG5vZGUsIG51bSk7XG4gICAgICAgIHRoaXMuX3BhcnNlckNvbXBvbmVudFJpY2hUZXh0KG5vZGUsIG51bSk7XG4gICAgICAgIHRoaXMuX3BhcnNlckNvbXBvbmVudFBhcnRpY2xlU3lzdGVtKG5vZGUsIG51bSk7XG4gICAgICAgIHRoaXMuX3BhcnNlckNvbXBvbmVudFBhZ2VWaWV3SW5kaWNhdG9yKG5vZGUsIG51bSk7XG4gICAgICAgIHRoaXMuX3BhcnNlckNvbXBvbmVudEVkaXRCb3gobm9kZSwgbnVtKTtcbiAgICAgICAgdGhpcy5fcGFyc2VyQ29tcG9uZW50TWFzayhub2RlLCBudW0pO1xuXG4gICAgICAgIC8vIFRPRE8g6YeK5pS+5YW25LuW57uE5Lu26ZmE5bim55qE6LWE5rqQXG4gICAgfVxuXG4gICAgX3BhcnNlckNvbXBvbmVudFNwcml0ZShub2RlOiBjYy5Ob2RlLCBudW06IG51bWJlcikge1xuICAgICAgICBsZXQgc3ByaXRlID0gbm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgaWYgKCFzcHJpdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobnVtID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yZXRhdGluUmVzKHNwcml0ZS5zcHJpdGVGcmFtZVtcIl90ZXh0dXJlRmlsZW5hbWVcIl0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVsZWFzZVJlcyhzcHJpdGUuc3ByaXRlRnJhbWVbXCJfdGV4dHVyZUZpbGVuYW1lXCJdKTtcbiAgICB9XG5cbiAgICBfcGFyc2VyQ29tcG9uZW50QnV0dG9uKG5vZGU6IGNjLk5vZGUsIG51bTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBidXR0b24gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICBpZiAoIWJ1dHRvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJ1dHRvbi5ub3JtYWxTcHJpdGUpIHtcbiAgICAgICAgICAgIGlmIChudW0gPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXRhdGluUmVzKGJ1dHRvbi5ub3JtYWxTcHJpdGVbXCJfdGV4dHVyZUZpbGVuYW1lXCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWxlYXNlUmVzKGJ1dHRvbi5ub3JtYWxTcHJpdGVbXCJfdGV4dHVyZUZpbGVuYW1lXCJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChidXR0b24ucHJlc3NlZFNwcml0ZSkge1xuICAgICAgICAgICAgaWYgKG51bSA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJldGF0aW5SZXMoYnV0dG9uLnByZXNzZWRTcHJpdGVbXCJfdGV4dHVyZUZpbGVuYW1lXCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWxlYXNlUmVzKGJ1dHRvbi5wcmVzc2VkU3ByaXRlW1wiX3RleHR1cmVGaWxlbmFtZVwiXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChidXR0b24uaG92ZXJTcHJpdGUpIHtcbiAgICAgICAgICAgIGlmIChudW0gPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXRhdGluUmVzKGJ1dHRvbi5ob3ZlclNwcml0ZVtcIl90ZXh0dXJlRmlsZW5hbWVcIl0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbGVhc2VSZXMoYnV0dG9uLmhvdmVyU3ByaXRlW1wiX3RleHR1cmVGaWxlbmFtZVwiXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYnV0dG9uLmRpc2FibGVkU3ByaXRlKSB7XG4gICAgICAgICAgICBpZiAobnVtID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmV0YXRpblJlcyhidXR0b24uZGlzYWJsZWRTcHJpdGVbXCJfdGV4dHVyZUZpbGVuYW1lXCJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWxlYXNlUmVzKGJ1dHRvbi5kaXNhYmxlZFNwcml0ZVtcIl90ZXh0dXJlRmlsZW5hbWVcIl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3BhcnNlckNvbXBvbmVudExhYmVsKG5vZGU6IGNjLk5vZGUsIG51bTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBsYWJlbCA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgaWYgKCFsYWJlbCB8fCAhbGFiZWwuZm9udCB8fCAhKGxhYmVsLmZvbnQgaW5zdGFuY2VvZiBjYy5CaXRtYXBGb250KSB8fCAhbGFiZWwuZm9udFtcInNwcml0ZUZyYW1lXCJdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobnVtID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yZXRhdGluUmVzKGxhYmVsLmZvbnRbXCJzcHJpdGVGcmFtZVwiXVtcIl90ZXh0dXJlRmlsZW5hbWVcIl0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVsZWFzZVJlcyhsYWJlbC5mb250W1wic3ByaXRlRnJhbWVcIl1bXCJfdGV4dHVyZUZpbGVuYW1lXCJdKTtcbiAgICB9XG5cbiAgICBfcGFyc2VyQ29tcG9uZW50UmljaFRleHQobm9kZTogY2MuTm9kZSwgbnVtOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHJpY2hUZXh0ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpO1xuICAgICAgICBpZiAoIXJpY2hUZXh0IHx8ICFyaWNoVGV4dC5pbWFnZUF0bGFzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5rZXlzKHJpY2hUZXh0LmltYWdlQXRsYXNbXCJfc3ByaXRlRnJhbWVzXCJdKTtcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChudW0gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJldGF0aW5SZXMocmljaFRleHQuaW1hZ2VBdGxhc1tcIl9zcHJpdGVGcmFtZXNcIl1ba2V5c1swXV1bXCJfdGV4dHVyZUZpbGVuYW1lXCJdKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbGVhc2VSZXMocmljaFRleHQuaW1hZ2VBdGxhc1tcIl9zcHJpdGVGcmFtZXNcIl1ba2V5c1swXV1bXCJfdGV4dHVyZUZpbGVuYW1lXCJdKTtcbiAgICB9XG5cbiAgICBfcGFyc2VyQ29tcG9uZW50UGFydGljbGVTeXN0ZW0obm9kZTogY2MuTm9kZSwgbnVtOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHBhcnRpY2xlU3lzdGVtID0gbm9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pO1xuICAgICAgICBpZiAoIXBhcnRpY2xlU3lzdGVtIHx8ICFwYXJ0aWNsZVN5c3RlbVtcIl90ZXh0dXJlXCJdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobnVtID4gMCkge1xuICAgICAgICAgICAgdGhpcy5yZXRhdGluUmVzKHBhcnRpY2xlU3lzdGVtW1wiX3RleHR1cmVcIl0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVsZWFzZVJlcyhwYXJ0aWNsZVN5c3RlbVtcIl90ZXh0dXJlXCJdKTtcbiAgICB9XG5cbiAgICBfcGFyc2VyQ29tcG9uZW50UGFnZVZpZXdJbmRpY2F0b3Iobm9kZTogY2MuTm9kZSwgbnVtOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHBhZ2VWaWV3SW5kaWNhdG9yID0gbm9kZS5nZXRDb21wb25lbnQoY2MuUGFnZVZpZXdJbmRpY2F0b3IpO1xuICAgICAgICBpZiAoIXBhZ2VWaWV3SW5kaWNhdG9yIHx8ICFwYWdlVmlld0luZGljYXRvci5zcHJpdGVGcmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG51bSA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucmV0YXRpblJlcyhwYWdlVmlld0luZGljYXRvci5zcHJpdGVGcmFtZVtcIl90ZXh0dXJlRmlsZW5hbWVcIl0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVsZWFzZVJlcyhwYWdlVmlld0luZGljYXRvci5zcHJpdGVGcmFtZVtcIl90ZXh0dXJlRmlsZW5hbWVcIl0pO1xuICAgIH1cblxuICAgIF9wYXJzZXJDb21wb25lbnRFZGl0Qm94KG5vZGU6IGNjLk5vZGUsIG51bTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBlZGl0Qm94ID0gbm9kZS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XG4gICAgICAgIGlmICghZWRpdEJveCB8fCAhZWRpdEJveC5iYWNrZ3JvdW5kSW1hZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChudW0gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJldGF0aW5SZXMoZWRpdEJveC5iYWNrZ3JvdW5kSW1hZ2VbXCJfdGV4dHVyZUZpbGVuYW1lXCJdKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbGVhc2VSZXMoZWRpdEJveC5iYWNrZ3JvdW5kSW1hZ2VbXCJfdGV4dHVyZUZpbGVuYW1lXCJdKTtcbiAgICB9XG5cbiAgICBfcGFyc2VyQ29tcG9uZW50TWFzayhub2RlOiBjYy5Ob2RlLCBudW06IG51bWJlcikge1xuICAgICAgICBsZXQgbWFzayA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLk1hc2spO1xuICAgICAgICBpZiAoIW1hc2sgfHwgIW1hc2suc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChudW0gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJldGF0aW5SZXMobWFzay5zcHJpdGVGcmFtZVtcIl90ZXh0dXJlRmlsZW5hbWVcIl0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVsZWFzZVJlcyhtYXNrLnNwcml0ZUZyYW1lW1wiX3RleHR1cmVGaWxlbmFtZVwiXSk7XG5cbiAgICB9XG59Il19