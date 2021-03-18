import { SoundTableData } from "../../StaticDatas/SoundTableData";
import { PreLoadCsvSync } from "../../Tools/TableReader";

const { ccclass, property } = cc._decorator;

 
@ccclass
export default class LoadCSVExp extends cc.Component {
 
    public isLoaded: boolean = false;
    start() {
        //先写个idl然后拖拽到Serialization.exe上，会生成一个ts一个csv，一个cpp一个h，cpp和h文件删掉
        //csv放入resources下的StaticDatas下
 
        this.loadSceneTable()
 
        // PreLoadCsvSync('ItemTableData');
        // PreLoadCsvSync('SoundTableData');
        // PreLoadCsvSync('SceneTableData');
 
        //延迟5s执行
        //this.scheduleOnce(this.showTableData, 5);
    }
 
    async loadSceneTable() {
        console.log("hehh")
        //读取静态数据表
        await PreLoadCsvSync('staticdatas/SoundTableData',()=>{
            this.loadedSceneTable()
        });
        
    }
 
    loadedSceneTable() {
        let sceneData = SoundTableData.getById(1).path;
        console.log(sceneData)
    }
 
 
    // showTableData() {
    //     let itemData = ItemTableData.getById(1);
 
    //     let id = configValueManager.getConfigIntValue('id');
    //     let str = configValueManager.getConfigStringValue('name');
 
 
 
    //     let sceneData = SceneTableData.getById(1);
    //     console.log(sceneData)
    //     console.log(sceneData.str)
    // }
    // update (dt) {}
}
 
