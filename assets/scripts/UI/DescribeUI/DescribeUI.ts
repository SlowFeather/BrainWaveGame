import { UIDef } from "../../Def/UIDef";
import { DescribeTableData } from "../../StaticDatas/DescribeTableData";
import UIUtil from "../../Tools/UIUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DescribeUI extends cc.Component {

    //教程文件
    @property(cc.RichText)
    describeLab: cc.RichText = null;


    //动画
    describeTween:cc.Tween=null;

    onEnable(){

        console.log("-->进入教程页面");
        
        this.DescribeAnimation();
        this.describeLab.string=DescribeTableData.getById(1).str;
    }
    onDisable(){
        if (this.describeTween!=null) {
            this.describeTween.stop();
            this.describeLab.node.opacity=255;
            this.describeTween=null;
        }
    }
    start () {
        let map=DescribeTableData.getDataMap();
        let tableNumber=map.size;
        // console.log(tableNumber);
        // console.log(DescribeTableData.getById(1).str);

        this.describeLab.string=DescribeTableData.getById(1).str;
        //const animPath = SoundTableData.getById(soundId).path;
        

        
        //mytween.stop();
        
    }
    DescribeAnimation(){
        if (this.describeTween!=null) {
            console.log("动画未删除");
            
            return;
        }
        this.describeTween = cc.tween(this.describeLab.node)
        // 延迟 1s
        .delay(1)
        .to(1, { opacity : 0 })
        .to(1, { opacity: 255 })
        .to(1, { opacity: 0 })

        .call(()=>{
            //切换文字
            this.describeLab.string=DescribeTableData.getById(2).str;
            })

        .to(1, { opacity : 255 })
        .to(1, { opacity: 0 })
        .to(1, { opacity: 255 })
        .to(1, { opacity: 0 })
        .call(()=>{
            //切换文字
            this.describeLab.string=DescribeTableData.getById(3).str;
            })
            .to(1, { opacity : 255 })
            .to(1, { opacity: 0 })
            .to(1, { opacity: 255 })
        .call(()=>{
            //切换页面
            UIUtil.ShowUI(UIDef.GameUI,()=>{
                UIUtil.HideUI(UIDef.DescribeUI);
            });
        })
        .start();
    }
    OnBackBtnClick(){
        console.log("点击了返回主界面按钮");
        UIUtil.ShowUI(UIDef.StartUI,()=>{
            UIUtil.HideUI(UIDef.DescribeUI);
        });

    }
    OnSkipBtnClick(){
        console.log("点击了跳过按钮");
        UIUtil.ShowUI(UIDef.GameUI,()=>{
            UIUtil.HideUI(UIDef.DescribeUI);
        });
    }



    // update (dt) {}
}
