import {
    UIDef
} from "../../Def/UIDef";
import SoundManager from "../../Manager/SoundManager";
import {
    DescribeTableData
} from "../../StaticDatas/DescribeTableData";


import UIUtil from "../../Tools/UIUtil";

const {
    ccclass,
    property
} = cc._decorator;


    

@ccclass
export default class DescribeUI extends cc.Component {

    //教程文件
    @property(cc.RichText)
    describeLab: cc.RichText = null;


    //动画
    describeTween: cc.Tween = null;

    //所有的提示文字
    @property([cc.Node])
    allTipTxt: cc.Node[] = [];
    //主物体
    @property(cc.Node)
    allTipObj:cc.Node;

    onEnable() {

        console.log("-->进入教程页面");

        this.DescribeAnimation2();
        // this.describeLab.string = DescribeTableData.getById(1).str;
        this.allTipObj.opacity=0;
        for (let index = 0; index < this.allTipTxt.length; index++) {
            const element = this.allTipTxt[index];
            element.active=false;
        }
    }
    onDisable() {
        if (this.describeTween != null) {
            this.describeTween.stop();
            this.describeLab.node.opacity = 255;
            this.describeTween = null;
        }
    }
    start() {
        let map = DescribeTableData.getDataMap();
        let tableNumber = map.size;
        // console.log(tableNumber);
        // console.log(DescribeTableData.getById(1).str);

        this.describeLab.string = DescribeTableData.getById(1).str;
        //const animPath = SoundTableData.getById(soundId).path;



        //mytween.stop();

    }
    DescribeAnimation2(){
        if (this.describeTween != null) {
            console.log("动画未删除");

            return;
        }
        this.describeTween = cc.tween(this.allTipObj)
            // 延迟 1s
            //.delay(1)
            .call(()=>{
                this.allTipTxt[0].active=true;
                // this.allTipTxt[0].opacity=255;
            })
            .to(2, {
                opacity: 255
            })
            .delay(2)
            .to(2,{
                opacity: 0
            })
            .call(()=>{
                this.allTipTxt[0].active=false;
                this.allTipTxt[1].active=true;
                // this.allTipTxt[0].opacity=255;
            })
            .to(2, {
                opacity: 255
            })
            .delay(2)
            .to(2,{
                opacity: 0
            })
            .call(()=>{
                this.allTipTxt[1].active=false;
                this.allTipTxt[2].active=true;
                // this.allTipTxt[0].opacity=255;
            })
            .to(2, {
                opacity: 255
            })
            .delay(2)
            .to(2,{
                opacity: 0
            })
            .call(()=>{
                this.allTipTxt[2].active=false;
                this.allTipTxt[3].active=true;
                // this.allTipTxt[0].opacity=255;
            })
            .to(2, {
                opacity: 255
            })
            .delay(2)
            .to(2,{
                opacity: 0
            })
            .call(() => {
                //切换页面
                UIUtil.ShowUI(UIDef.GameUI, () => {
                    UIUtil.HideUI(UIDef.DescribeUI);
                });
            })
            .start();
    }
    DescribeAnimation() {
        if (this.describeTween != null) {
            console.log("动画未删除");

            return;
        }
        this.describeTween = cc.tween(this.describeLab.node)
            // 延迟 1s
            .delay(1)
            .to(1, {
                opacity: 0
            })
            .to(1, {
                opacity: 255
            })
            .to(1, {
                opacity: 0
            })

            .call(() => {
                //切换文字
                this.describeLab.string = DescribeTableData.getById(2).str;
            })

            .to(1, {
                opacity: 255
            })
            .to(1, {
                opacity: 0
            })
            .to(1, {
                opacity: 255
            })
            .to(1, {
                opacity: 0
            })
            .call(() => {
                //切换文字
                this.describeLab.string = DescribeTableData.getById(3).str;
            })
            .to(1, {
                opacity: 255
            })
            .to(1, {
                opacity: 0
            })
            .to(1, {
                opacity: 255
            })
            .call(() => {
                //切换页面
                UIUtil.ShowUI(UIDef.GameUI, () => {
                    UIUtil.HideUI(UIDef.DescribeUI);
                });
            })
            .start();
    }
    OnBackBtnClick() {
        SoundManager.playEffect(2);

        console.log("点击了返回主界面按钮");
        UIUtil.ShowUI(UIDef.StartUI, () => {
            UIUtil.HideUI(UIDef.DescribeUI);
        });

    }
    OnSkipBtnClick() {
        console.log("点击了跳过按钮");
        UIUtil.ShowUI(UIDef.GameUI, () => {
            UIUtil.HideUI(UIDef.DescribeUI);
        });
    }



    // update (dt) {}
}