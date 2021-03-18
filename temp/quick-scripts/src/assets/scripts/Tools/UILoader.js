"use strict";
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