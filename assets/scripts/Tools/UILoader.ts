// import { G } from "./GameGlobal";


export default class UILoader {
    
    static singleInstance: UILoader = null;
    static get Instance(): UILoader {
        if (UILoader.singleInstance == null) {
            UILoader.singleInstance = new UILoader();
        }
        return UILoader.singleInstance;
    }

    // 当前场景资源统计
    private m_sceneLoadResMap: Map<number, Map<string, number>> = new Map<number, Map<string, number>>();

    /** 加载 */
    public load = function (resources: string | string[] | {
        uuid?: string;
        url?: string;
        type?: string;
    }) {
        return new Promise((resolve, reject) => {
            cc.loader.load(resources, (err, asset) => {
                if (err) {
                    console.error(`[资源加载] 错误 ${err}`);
                    return;
                }
                resolve(asset);
            });
        });
    }

    // 
    public loadRes = function (url: string, type: typeof cc.Asset) {
        if (!url || !type) {
            console.error("参数错误", url, type);
            return;
        }
        return new Promise((resolve, reject) => {
            cc.loader.loadRes(url, type, (err, asset) => {
                if (err) {
                    console.error(`[资源加载] 错误 ${err}`);
                    return;
                }
                resolve(asset);
            });
        });

    }

    loadResArr(paths: Array<string>, callfun: Function) {
        cc.loader.loadResArray(paths, function (err, assets) {
            if (err) {
                console.error(err);
                return;
            }
            callfun(assets);
        }.bind(this));
    }


    loadStaticRes(url: string, type: typeof cc.Asset, tag: string, callback) {
        if (!url || !type || !callback) {
            console.error("参数错误");
            return;
        }
        cc.loader.loadRes(url, type, (err, asset) => {
            callback(asset);
            this._parseStaticRes(asset, tag);
        });
    }

    loadStaticResArr(paths: Array<string>, tag: string, callfun: Function) {
        if (!paths || !tag || !callfun) {
            console.error("参数错误");
            return;
        }

        cc.loader.loadResArray(paths, function (err, assets) {
            if (err) {
                console.error(err);
                return;
            }
            callfun(assets);
            assets.forEach((asset) => {
                this._parseStaticRes(asset, tag);
            });
        }.bind(this));
    }



    loadAudioClip(path: string, callfun) {
        cc.loader.loadRes(path, cc.AudioClip, (err, audioclip) => {
            if (err) {
                console.error(err);
                return;
            }
            callfun(audioclip);
        });
    }
    loadPrefabRes(path: string, callfun: Function, retainRes: boolean = false, curSceneRes: number = -1) {
        cc.loader.loadRes(path, cc.Prefab, (err, prefab) => {
            if (err) {
                console.error(err);
                return;
            }
            if (retainRes) {
                this.retatinRes(path);
                let deps = cc.loader.getDependsRecursively(prefab);
                if (deps) {
                    deps.forEach(url => {
                        this.loadCurSceneRes(curSceneRes, url);
                    });
                }
            }
            callfun(prefab);
        });
    }
    loadSpineInScene(path: string, callfun: Function,) {
        // this.loadSpineRes(path, callfun, true, G.curRunningScene)
        this.loadSpineRes(path, callfun, true, 0)

    }
    loadPrefabInScene(path: string, callfun: Function,) {
        // this.loadPrefabRes(path, callfun, true, G.curRunningScene)
        this.loadPrefabRes(path, callfun, true, 0)

    }
    loadSpriteFrameInScene(path: string, callfun: Function,) {
        // this.loadSpriteFrame(path, callfun, true, G.curRunningScene)
        this.loadPrefabRes(path, callfun, true, 0)

    }

    /**
     * 加载当前的SpriteFrame资源
     * @param path 当前SpriteFrame路径
     * @param callfun 加载成功回调
     * @param retainRes 释放开启资源计数（记录场景资源必须为ture）
     * @param curSceneRes 资源是否为当前场景资源
     */
    loadSpriteFrame(path: string, callfun: Function, retainRes: boolean = false, curSceneRes: number = -1) {
        cc.loader.loadRes(path, cc.SpriteFrame, (err, spriteFrame) => {
            if (err) {
                console.error(err);
                return;
            }
            if (retainRes) {
                this.retatinRes(spriteFrame._textureFilename);
                this.loadCurSceneRes(curSceneRes, spriteFrame._textureFilename);
            }
            callfun(spriteFrame);
        });
    }

    /**
     * 加载当前的spine资源
     * @param path 当前spine路径
     * @param callfun 加载成功回调
     * @param retainRes 释放开启资源计数（记录场景资源必须为ture）
     * @param curSceneRes 资源是否为当前场景资源
     */
    loadSpineRes(path: string, callfun: Function, retainRes: boolean = false, curSceneRes: number = -1) {
        cc.loader.loadRes(path, sp.SkeletonData, (err, spine: sp.SkeletonData) => {
            if (err) {
                console.error(err);
                return;
            }
            if (retainRes) {
                spine.textures.forEach((texture, key) => {
                    this.retatinRes(texture.url);
                    this.loadCurSceneRes(curSceneRes, texture.url)
                });
            }
            callfun(spine);
        });
    }
    /**
     * 当加载资源记录为跟随场景释放时使用
     * @param curSceneRes 当前场景
     * @param resUrl 资源路径
     */
    private loadCurSceneRes(curSceneRes: number, resUrl: string) {
        if (curSceneRes > 0) {
            let resMap = this.m_sceneLoadResMap.get(curSceneRes);
            if (resMap) {
                let count = 1;
                let res = resMap.get(resUrl);
                if (res) {
                    count += resMap.get(resUrl);
                }
                resMap.set(resUrl, count);
            } else {
                resMap = new Map<string, number>();
                resMap.set(resUrl, 1);
                this.m_sceneLoadResMap.set(curSceneRes, resMap);
            }
        }
    }


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
    releaseSpriteFrameRes(spriteFrame: cc.SpriteFrame): void {
        if (spriteFrame) {
            this.releaseRes(spriteFrame['_textureFilename']);
            this.gc();
        }
    }
    /**
     * 释放当前spine资源引用
     * @param spine 当前的spine
     */
    releaseSpineRes(spine: sp.SkeletonData): void {
        if (spine.textures) {
            spine.textures.forEach((texture, key) => {
                this.releaseRes(texture.url);
            });
            this.gc();
        }
    }
    /**
     * 释放资源的预设或者UUID
     * @param prefab 预设或者UUID
     */
    releasePrefabRes(prefab: cc.Prefab | string): void {
        if (prefab) {
            let deps = cc.loader.getDependsRecursively(prefab);
            if (deps) {
                deps.forEach(url => {
                    this.releaseRes(url);
                });
            }
            this.gc();
        }
    }
    /**
     * 
     * 释放当前场景加载资源
     * 仅在加载资源时添加对应场景的资源才有效，等到场景切换时释放
     * @param curScene 当前场景
     */
    releaseCurSceneAllRes(curScene: number, callback?: Function): void {
        if (this.m_sceneLoadResMap.size > 0) {
            for (let [sceneIndex, resMap] of this.m_sceneLoadResMap) {
                if (sceneIndex == curScene) {
                    resMap.forEach((count: number, resUrl: string) => {
                        this.releaseRes(resUrl, count);
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
        if (callback) {
            callback();
        }
    }
    /**
     * 释放当前场景加载资源
     * @param curScene 当前场景
     * @param resUrl 资源的URL
     */
    releaseCurSceneRes(curScene: number, resUrl: string): void {
        if (this.m_sceneLoadResMap.size > 0) {
            let resMap = this.m_sceneLoadResMap.get(curScene);
            if (resMap) {
                let rescount = resMap.get(resUrl);
                if (rescount > 0) {
                    rescount -= 1;
                    if (rescount <= 0) {
                        resMap.delete(resUrl);
                    } else {
                        resMap.set(resUrl, rescount);
                    }
                    this.releaseRes(resUrl, 1);
                    this.gc();
                }
            }
        }
    }


    releaseMusicRes(res: string): void {
        this.releaseRes(res);
        this.gc();
    }



    releaseStaticRes(tag: string): void {
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
                console.log(`释放资源:${texturesInCache[asset].url}`);
                cc.loader.release(texturesInCache[asset].url);
            }
        }

        if (release_key.length > 0) {
            this._depthGC(release_key);
        }
    }




    getCacheCount() {
        return Object.keys(cc.loader["_cache"]).length;
    }



    retatinRes(res: string) {
        if (!cc.loader["_cache"][res]) {
            return;
        }

        if (!cc.loader["_cache"][res].bk_count) {
            cc.loader["_cache"][res].bk_count = 0;
        }
        cc.loader["_cache"][res].bk_count += 1;
    }

    retainArrayRes(res: string[]) {
        res.forEach((item) => {
            this.retatinRes(item);
        });
    }

    retainNodeRes(node: cc.Node) {
        this._parserNodeRes(node, 1);
    }

    releaseNodeRes(node: cc.Node) {
        this._parserNodeRes(node, -1);
    }

    releaseRes(res: string, count: number = 1) {
        if (!cc.loader["_cache"][res]) {
            return;
        }

        if (!cc.loader["_cache"][res].bk_count) {
            cc.loader["_cache"][res].bk_count = 0;
        }
        cc.loader["_cache"][res].bk_count -= count;
    }

    releaseArrayRes(res: string[]) {
        res.forEach((item) => {
            this.releaseRes(item);
        });
    }




    gc() {
        var texturesInCache = cc.loader["_cache"];
        var release_key = [];
        for (var asset in texturesInCache) {
            if (texturesInCache[asset].uStatic) {
                continue;
            }
            if (texturesInCache[asset].bk_count <= 0) {
                release_key.push(texturesInCache[asset].url);
                console.log(`释放资源:${texturesInCache[asset].url}`);
                cc.loader.release(texturesInCache[asset].url);
            }
        }

        if (release_key.length > 0) {
            this._depthGC(release_key);
        }
    }


    updateSpriteTexture(target: cc.Node, spriteFrame: cc.SpriteFrame) {
        if (!target || !spriteFrame || !target.getComponent(cc.Sprite)) {
            return;
        }
        let sprite = target.getComponent(cc.Sprite);
        this._replaceTagetTexture(sprite, "spriteFrame", spriteFrame);
        this.gc();
    }

    updateButtonTexture(target: cc.Node, normalSprite?: cc.SpriteFrame, pressedSprite?: cc.SpriteFrame, hoverSprite?: cc.SpriteFrame, disabledSprite?: cc.SpriteFrame) {
        if (!target || !normalSprite) {
            console.error("参数错误")
            return;
        }

        if (!target.getComponent(cc.Button)) {
            console.error("目标节点没有Button组件");
            return;
        }

        let button = target.getComponent(cc.Button);
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
    }

    _depthGC(strs: Array<string>) {
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
                    console.log(`释放资源:${texturesInCache[asset].url}`);
                    cc.loader.release(texturesInCache[asset].url);
                }
            }
        }

        if (release_json.length > 0) {
            this._depthGC(release_json);
        }
    }


    _parseStaticRes(item: typeof cc.Asset, tag: string) {
        if (item instanceof cc.Texture2D) {
            cc.loader["_cache"][item.url].uStatic = true;
            cc.loader["_cache"][item.url].uTag = tag;
        } else if (item instanceof cc.SpriteFrame) {
            cc.loader["_cache"][item["_textureFilename"]].uStatic = true;
            cc.loader["_cache"][item["_textureFilename"]].uTag = tag;
        } else if (item instanceof cc.Prefab) {
            this._parseStaticPrefab(item, tag);
        } else if (item instanceof cc.BitmapFont) {
            cc.loader["_cache"][item["spriteFrame"]._textureFilename].uStatic = true;
            cc.loader["_cache"][item["spriteFrame"]._textureFilename].uTag = tag;
        } else if (item instanceof cc.SpriteAtlas) {
            var keys = Object.keys(item["_spriteFrames"])
            keys.forEach((key) => {
                cc.loader["_cache"][item["_spriteFrames"][key]._textureFilename].uStatic = true;
                cc.loader["_cache"][item["_spriteFrames"][key]._textureFilename].uTag = tag;
            });
        } else if (item instanceof cc.AnimationClip) {
            console.error('AnimationClip 资源加载未做处理');
        } else if (item instanceof Object && item["name"]) {
            console.error('Object 资源加载未做处理');
        }
    }

    _parseStaticPrefab(node, tag: string) {
        var prefab = node;
        if (node.data) {
            prefab = node.data;
        }

        if (!(prefab instanceof cc.Scene)) {
            this._parseStaticNode(prefab, tag);
        }
        let children = prefab._children;
        children.forEach((child) => {
            this._parseStaticNode(child, tag);
            this._parseStaticPrefab(child, tag);
        });
    }

    _retatinStaticRes(res: string, tag: string) {
        if (!cc.loader["_cache"][res]) {
            return;
        }

        if (!cc.loader["_cache"][res].bk_count) {
            cc.loader["_cache"][res].bk_count = 0;
        }
        cc.loader["_cache"][res].uStatic = true;
        cc.loader["_cache"][res].uTag = tag;
    }

    _parseStaticNode(node: cc.Node, tag: string) {
        // sprite 组件
        let sprite = node.getComponent(cc.Sprite);
        if (sprite && sprite.spriteFrame) {
            this._retatinStaticRes(sprite.spriteFrame["_textureFilename"], tag);
        }

        // button 组件
        let button = node.getComponent(cc.Button);
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
        let label = node.getComponent(cc.Label);
        if (label && label.font && label.font instanceof cc.BitmapFont && label.font["spriteFrame"]) {
            this._retatinStaticRes(label.font["spriteFrame"]._textureFilename, tag);
        }

        // richText 组件
        let richText = node.getComponent(cc.RichText);
        if (richText && richText.imageAtlas) {
            let keys = Object.keys(richText.imageAtlas["_spriteFrames"]);
            if (keys.length > 0) {
                this._retatinStaticRes(richText.imageAtlas["_spriteFrames"][keys[0]]._textureFilename, tag);
            }
        }

        // particleSystem 组件
        let particleSystem = node.getComponent(cc.ParticleSystem);
        if (particleSystem && particleSystem["_texture"]) {
            this._retatinStaticRes(particleSystem["_texture"], tag);
        }

        // pageViewIndicator 组件
        let pageViewIndicator = node.getComponent(cc.PageViewIndicator);
        if (pageViewIndicator && pageViewIndicator.spriteFrame) {
            this._retatinStaticRes(pageViewIndicator.spriteFrame["_textureFilename"], tag);
        }

        // editBox 组件
        let editBox = node.getComponent(cc.EditBox);
        if (editBox && editBox.backgroundImage) {
            this._retatinStaticRes(editBox.backgroundImage["_textureFilename"], tag);
        }

        // Mask
        let mask = node.getComponent(cc.Mask);
        if (mask && mask.spriteFrame) {
            this._retatinStaticRes(mask.spriteFrame["_textureFilename"], tag);
        }
    }



    _replaceTagetTexture(target: any, attrName: string, newNormalSprite: cc.SpriteFrame) {
        if (target[attrName] === newNormalSprite) {
            return;
        }
        if (target[attrName]) {
            this.releaseRes(target[attrName]._textureFilename);
        }
        this.retatinRes(newNormalSprite["_textureFilename"]);
        target[attrName] = newNormalSprite;
    }

    _parserNodeRes(node: cc.Node, number: number) {
        let children = node.children;
        this._parserNodeComponentRes(node, number);
        children.forEach((child) => {
            this._parserNodeRes(child, number);
        });
    }

    _parserNodeComponentRes(node: cc.Node, num: number) {
        this._parserComponentSprite(node, num);
        this._parserComponentButton(node, num);
        this._parserComponentLabel(node, num);
        this._parserComponentRichText(node, num);
        this._parserComponentParticleSystem(node, num);
        this._parserComponentPageViewIndicator(node, num);
        this._parserComponentEditBox(node, num);
        this._parserComponentMask(node, num);

        // TODO 释放其他组件附带的资源
    }

    _parserComponentSprite(node: cc.Node, num: number) {
        let sprite = node.getComponent(cc.Sprite);
        if (!sprite) {
            return;
        }
        if (num > 0) {
            this.retatinRes(sprite.spriteFrame["_textureFilename"]);
            return;
        }
        this.releaseRes(sprite.spriteFrame["_textureFilename"]);
    }

    _parserComponentButton(node: cc.Node, num: number) {
        let button = node.getComponent(cc.Button);
        if (!button) {
            return;
        }

        if (button.normalSprite) {
            if (num > 0) {
                this.retatinRes(button.normalSprite["_textureFilename"]);
            } else {
                this.releaseRes(button.normalSprite["_textureFilename"]);
            }
        }

        if (button.pressedSprite) {
            if (num > 0) {
                this.retatinRes(button.pressedSprite["_textureFilename"]);
            } else {
                this.releaseRes(button.pressedSprite["_textureFilename"]);
            }

        }

        if (button.hoverSprite) {
            if (num > 0) {
                this.retatinRes(button.hoverSprite["_textureFilename"]);
            } else {
                this.releaseRes(button.hoverSprite["_textureFilename"]);
            }
        }

        if (button.disabledSprite) {
            if (num > 0) {
                this.retatinRes(button.disabledSprite["_textureFilename"]);
            } else {
                this.releaseRes(button.disabledSprite["_textureFilename"]);
            }
        }
    }

    _parserComponentLabel(node: cc.Node, num: number) {
        let label = node.getComponent(cc.Label);
        if (!label || !label.font || !(label.font instanceof cc.BitmapFont) || !label.font["spriteFrame"]) {
            return;
        }

        if (num > 0) {
            this.retatinRes(label.font["spriteFrame"]["_textureFilename"]);
            return;
        }
        this.releaseRes(label.font["spriteFrame"]["_textureFilename"]);
    }

    _parserComponentRichText(node: cc.Node, num: number) {
        let richText = node.getComponent(cc.RichText);
        if (!richText || !richText.imageAtlas) {
            return;
        }

        let keys = Object.keys(richText.imageAtlas["_spriteFrames"]);
        if (keys.length <= 0) {
            return;
        }

        if (num > 0) {
            this.retatinRes(richText.imageAtlas["_spriteFrames"][keys[0]]["_textureFilename"]);
            return;
        }
        this.releaseRes(richText.imageAtlas["_spriteFrames"][keys[0]]["_textureFilename"]);
    }

    _parserComponentParticleSystem(node: cc.Node, num: number) {
        let particleSystem = node.getComponent(cc.ParticleSystem);
        if (!particleSystem || !particleSystem["_texture"]) {
            return;
        }

        if (num > 0) {
            this.retatinRes(particleSystem["_texture"]);
            return;
        }
        this.releaseRes(particleSystem["_texture"]);
    }

    _parserComponentPageViewIndicator(node: cc.Node, num: number) {
        let pageViewIndicator = node.getComponent(cc.PageViewIndicator);
        if (!pageViewIndicator || !pageViewIndicator.spriteFrame) {
            return;
        }

        if (num > 0) {
            this.retatinRes(pageViewIndicator.spriteFrame["_textureFilename"]);
            return;
        }
        this.releaseRes(pageViewIndicator.spriteFrame["_textureFilename"]);
    }

    _parserComponentEditBox(node: cc.Node, num: number) {
        let editBox = node.getComponent(cc.EditBox);
        if (!editBox || !editBox.backgroundImage) {
            return;
        }

        if (num > 0) {
            this.retatinRes(editBox.backgroundImage["_textureFilename"]);
            return;
        }
        this.releaseRes(editBox.backgroundImage["_textureFilename"]);
    }

    _parserComponentMask(node: cc.Node, num: number) {
        let mask = node.getComponent(cc.Mask);
        if (!mask || !mask.spriteFrame) {
            return;
        }

        if (num > 0) {
            this.retatinRes(mask.spriteFrame["_textureFilename"]);
            return;
        }
        this.releaseRes(mask.spriteFrame["_textureFilename"]);

    }
}