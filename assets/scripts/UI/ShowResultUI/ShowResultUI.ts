import { StorageDef } from "../../Def/StorageDef";
import { UIDef } from "../../Def/UIDef";
import DriveManager from "../../Manager/DriveManager/DriveManager";
import SoundManager from "../../Manager/SoundManager";
import UserManager from "../../Manager/UserManager/UserManager";
import StorageUtil from "../../Tools/StorageUtil";
import UIUtil from "../../Tools/UIUtil";
import LoadingUI from "../LoadingUI/LoadingUI";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ShowResultUI extends cc.Component {

    //所有的奖杯物体
    @property([cc.Node])
    allTrophy: cc.Node[] = [];

    @property(cc.Label)
    jihuoLab:cc.Label;

    @property(cc.Label)
    zhuanzhuLab:cc.Label;


    jihuoxingzuoshuliangTxt:string="激 活 星 座 数 量：";
    xunlianjinduTxt:string="训 练 完 成 进 度：";


    onLoad(){
        this.allTrophy.forEach(element => {
            element.active=false;
        });
    }

    onEnable(){

        console.log("-->进入结果页面");

        //再次确认关闭http
        DriveManager.Instance.StopPingDrive();

        console.log("CurrentStarNumber:"+UserManager.Instance.CurrentStarNumber);
        console.log("CurrentConstellationNumber:"+UserManager.Instance.CurrentConstellationNumber);

        if (UserManager.Instance.CurrentStarNumber>85) {
            UserManager.Instance.CurrentConstellationNumber=5;
        }

        
        // let score=StorageUtil.getData(StorageDef.StarLight,0);
        //当前点亮的星座数量
        let score=UserManager.Instance.CurrentConstellationNumber;


        for (let index = 0; index < this.allTrophy.length; index++) {
            let element = this.allTrophy[index] as cc.Node;
            element.active=true;
            element.opacity=50;

        }
        //判断当前得分，得几分就得几个奖杯
        for (let index = 0; index < this.allTrophy.length; index++) {
            let element = this.allTrophy[index] as cc.Node;
            if (index<score) {
                // element.active=true;
                element.opacity=255;
            }
        }


        //计算出专注度得分
        UserManager.Instance.CurrentAbsorbedScore=Math.round(((UserManager.Instance.CurrentStarNumber+UserManager.Instance.CurrentConstellationNumber)/90)*100);
        if (UserManager.Instance.CurrentAbsorbedScore>=100) {
            UserManager.Instance.CurrentAbsorbedScore=100;
        }
        
        //这里修改专注度和激活星座数量
        //this.jihuoLab.string="激 活 星 座 数 量："+score.toString()+" 个";

        //最后星座比例
        let proportion:number=0;
        //最后得分 星座比例+得分 保留一位小数
        let numberofactive:string="0";
        
        switch (UserManager.Instance.CurrentConstellationNumber) {
            case 0:
                //第一颗星星是18
                proportion=UserManager.Instance.CurrentStarNumber/18;
                numberofactive=(UserManager.Instance.CurrentConstellationNumber+proportion).toFixed(1);
                this.jihuoLab.string=this.jihuoxingzuoshuliangTxt+numberofactive+" 个";
                this.zhuanzhuLab.string=this.xunlianjinduTxt+UserManager.Instance.CurrentAbsorbedScore.toString()+"%";
                break;
            case 1:
                //第二颗星星是19
                proportion=(UserManager.Instance.CurrentStarNumber-18)/19;
                numberofactive=(UserManager.Instance.CurrentConstellationNumber+proportion).toFixed(1);
                this.jihuoLab.string=this.jihuoxingzuoshuliangTxt+numberofactive+" 个";
                this.zhuanzhuLab.string=this.xunlianjinduTxt+UserManager.Instance.CurrentAbsorbedScore.toString()+"%";
                break;
            case 2:
                //第三颗星星是19
                proportion=(UserManager.Instance.CurrentStarNumber-18-19)/19;
                numberofactive=(UserManager.Instance.CurrentConstellationNumber+proportion).toFixed(1);
                this.jihuoLab.string=this.jihuoxingzuoshuliangTxt+numberofactive+" 个";
                this.zhuanzhuLab.string=this.xunlianjinduTxt+UserManager.Instance.CurrentAbsorbedScore.toString()+"%";
                break;
            case 3:
                //第四颗星星是18
                proportion=(UserManager.Instance.CurrentStarNumber-18-19-19)/18;
                numberofactive=(UserManager.Instance.CurrentConstellationNumber+proportion).toFixed(1);
                this.jihuoLab.string=this.jihuoxingzuoshuliangTxt+numberofactive+" 个";
                this.zhuanzhuLab.string=this.xunlianjinduTxt+UserManager.Instance.CurrentAbsorbedScore.toString()+"%";
                break;
            case 4:
                //第五颗星星是12
                proportion=(UserManager.Instance.CurrentStarNumber-18-19-19-18)/12;
                numberofactive=(UserManager.Instance.CurrentConstellationNumber+proportion).toFixed(1);
                this.jihuoLab.string=this.jihuoxingzuoshuliangTxt+numberofactive+" 个";
                this.zhuanzhuLab.string=this.xunlianjinduTxt+UserManager.Instance.CurrentAbsorbedScore.toString()+"%";
                break;
            case 5:
                //第五颗星星是0
                proportion=0;
                numberofactive="5";
                this.jihuoLab.string=this.jihuoxingzuoshuliangTxt+numberofactive+" 个";
                this.zhuanzhuLab.string=this.xunlianjinduTxt+"100"+"%";
                break;
            default:
                break;
        }
        // if (UserManager.Instance.CurrentConstellationNumber==0) {
            
        //     this.jihuoLab.string="激 活 星 座 数 量："+score.toString()+" 个";
        //     this.zhuanzhuLab.string="专 注 度 得 分："+score.toString()+" 分";
        // }
        // if (score==1) {
            
        // }
        
    }
    onDisable(){
        this.allTrophy.forEach(element => {
            element.active=false;
        });
    }
    start () {
        
    }
    OnShowResultBtnClick(){
        SoundManager.playEffect(2);
        UIUtil.ShowUI(UIDef.ProcessingUI,()=>{
            console.dir(UserManager.Instance.PostResultModel);

            UserManager.Instance.SendResult(this.SendCallBack); 
        });
        

// parent.closeIFrame();
    }

    SendCallBack(ended,response){
        // console.dir(response.data);
        if (ended) {
            console.log("跳转界面");
            
            //window.location.href=UserManager.Instance.JumpUrl;
            window.location.href="https://www.baidu.com/"+response.data;
        }else{
            console.log("上传失败");
            alert("上传失败，请重新上传");

        }
        UIUtil.HideUI(UIDef.ProcessingUI);
    }



    OnReStartBtnClick(){  
        SoundManager.playEffect(2);

        UIUtil.ShowUI(UIDef.StartUI,()=>{
            UIUtil.HideUI(UIDef.ShowResultUI);
        });
    }
    
    // update (dt) {}
}
