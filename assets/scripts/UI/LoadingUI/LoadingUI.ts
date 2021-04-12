import { UIDef } from "../../Def/UIDef";
import Game from "../../Game";
import SoundManager from "../../Manager/SoundManager";


import ResUtil from "../../Tools/ResUtil";
import { TimeUtil } from "../../Tools/TimeUtil";
import UIUtil from "../../Tools/UIUtil";
import { SoundTableData } from "../../StaticDatas/SoundTableData";
import { PreLoadCsvSync } from "../../Tools/TableReader";

const { ccclass, property } = cc._decorator;

@ccclass
export default class LoadingUI extends cc.Component {

    /**
     * 进度条
     *
     * @type {cc.ProgressBar}
     * @memberof LoadingUI
     */
    @property({
        type: cc.ProgressBar,
        tooltip: "进度条"
    })
    loadbar_progressbar: cc.ProgressBar = null;


    /**
     * 当前进度
     *
     * @type {cc.Label}
     * @memberof LoadingUI
     */
    @property({
        type: cc.Label,
        tooltip: "当前进度"
    })
    loadbar_txt: cc.Label = null;



    /**
     * 进度条进度
     *
     * @memberof LoadingUI
     */
    _processingValue = 0;

    /**
     * 进度条动画进度
     *
     * @memberof LoadingUI
     */
    _processingTweenValue = 0;


    start() {
        this.LoadAssets();
    }
    async LoadAssets() {
        this._processingValue = 0;
        //先加载表
        this.LoadTable();
        this.LoadRes();
    }
    async LoadRes() {
        //加载所有UIPrefabs
        await ResUtil.LoadDir("prefabs/ui", (assets) => {
            assets.forEach(element => {
                ResUtil.ResDictionary[element.name] = element;
            });
            this._processingValue += 10;
            console.log("-->所有UIPrefabs加载完毕,共有" + assets.length + "个");
        },()=>{
            console.log("-->加载UIPrefabs出现问题");
        });

        //加载所有GamePrefabs
        await ResUtil.LoadDir("prefabs/game", (assets) => {
            assets.forEach(element => {
                ResUtil.ResDictionary[element.name] = element;
            });
            this._processingValue += 10;
            console.log("-->所有GamePrefabs加载完毕,共有" + assets.length + "个");

        },()=>{
            console.log("-->加载GamePrefabs出现问题");
        });

    }
    //表占80%
    async LoadTable() {
        let tables = this.getFilesByPath('StaticDatas/', cc.TextAsset);
        let tableCount = tables.length;
        for (let i = 0; i < tableCount; i++) {
            await PreLoadCsvSync(tables[i], (ret) => {
                if (ret) {
                    this._processingValue += (1 / tableCount) * 80;
                } else {
                    console.log("Load Table Error!");
                }
            });
        }
    }

    ShowStartUI() {

        //显示开始界面
        // console.log(SoundTableData.getById(1));

        // console.log(SoundTableData.getById(1).path);
        // let asset = cc.loader.getRes("StaticDatas/DescribeTableData", cc.TextAsset);
        // console.dir(asset);

        UIUtil.ShowUI(UIDef.StartUI, () => {
            UIUtil.RemoveUI(UIDef.LoadingUI);
        });

        // this.InitData();
    }
    update(dt) {
        if (this._processingTweenValue < this._processingValue) {
            //限制速度
            if (this._processingValue - this._processingTweenValue > 20) {
                this._processingTweenValue += 1.2;
            } else {
                this._processingTweenValue += 0.8;
            }

            if (this._processingTweenValue >= 100) {
                console.log("-->所有资源加载完毕");
                this.ShowStartUI();
                return;
            }
            this.loadbar_progressbar.progress = this._processingTweenValue / 100
            this.loadbar_txt.string = "加载进度：" + Math.ceil(this._processingTweenValue) + "%"
        }
    }
    getFilesByPath(url, type) {
        url = url || '';
        var urls = [];
        var assetTables = cc.loader['_assetTables'];
        var uuids = assetTables['assets']['getUuidArray'](url, type, urls);
        return urls;
    }
}
