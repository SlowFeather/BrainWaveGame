import { MessageDef } from "../../Def/MessageDef";
import { HttpUtil } from "../../Tools/HTTPUtil";
import StorageUtil from "../../Tools/StorageUtil";
import MessageDispatcher from "../MessageDispatcher/MessageDispatcher";

const {ccclass, property} = cc._decorator;

@ccclass
export default class UserManager extends cc.Component {

//#region Instance
    public static Instance: UserManager;
    constructor() { super(); }
    onLoad():void{
        UserManager.Instance=this;
    }
//#endregion

    // host:string="http://127.0.0.1:8090";
    // param:any={};

    /**
     * 提交积分完成后跳转页面
     * 改完这里需要再看一下showresultui
     * @type {string}
     * @memberof UserManager
     */
    JumpUrl:string="http://www.baidu.com";


    /**
     * 积分提交url
     *
     * @type {string}
     * @memberof UserManager
     */
    PostUrl:string="http://test.yalixinli.com:9318/brain/game/save";

    /**
     * 当前游戏编号
     *
     * @type {string}
     * @memberof UserManager
     */
    GameCode:string="BRAIN_GAME_CONSTELLATION";


    /**
     *  Token
     *
     * @type {string}
     * @memberof UserManager
     */
    VerificationToken:string="";

    /**
     * 当前星座序号
     *
     * @type {number}
     * @memberof UserManager
     */
    CurrentConstellationNumber:number=0;


    /**
     * 当前星星数量
     *
     * @type {number}
     * @memberof UserManager
     */
    CurrentStarNumber:number=0;

    /**
     * 上传的专注度得分
     *
     * @type {number}
     * @memberof UserManager
     */
    CurrentAbsorbedScore:number=0;


    PostResultModel:PostResultModel=null;
    start(){
        //初始化拿到Token
        this.VerificationToken=StorageUtil.getData("LOGIN_KEY","HelloWorld");
    }

    InitPostResultModel(){
        this.PostResultModel=new PostResultModel();
        this.PostResultModel.data=[];
        this.CurrentConstellationNumber=0;
        this.CurrentStarNumber=0;
        this.CurrentAbsorbedScore=0;
    }

    SendResult(callback){
        this.PostResultModel.gameCode=this.GameCode;
        this.PostResultModel.finishCount=this.CurrentConstellationNumber.toString();
        this.PostResultModel.subCount=this.CurrentStarNumber.toString();
        this.PostResultModel.absorbedScore= this.CurrentAbsorbedScore.toString();

        this.POST(this.PostUrl,this.PostResultModel,callback);
        // JSON.parse(response)as BrainModel
        //JSON.stringify(this.PostResultModel.data);
    }

    POST(url, params, callback) {
        // let dataStr = '';
        // Object.keys(params).forEach(key => {
        //     dataStr += key + '=' + encodeURIComponent(params[key]) + '&';
        // })
        // if (dataStr !== '') {
        //     dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
        //     url = url + '?' + dataStr;
        // }
        // url = HttpUtil.baseUrl + url;

        let xhr = cc.loader.getXMLHttpRequest();
        xhr.open("POST", url, true);
        // xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        xhr.setRequestHeader("Token", this.VerificationToken);

        
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                let response = xhr.responseText;
                if (xhr.status >= 200 && xhr.status < 300) {
                    let httpStatus = xhr.statusText;
                    // callback(true, JSON.parse(response));
                    callback(true, response);
                    
                } else {
                    callback(false, response);
                }

            }
        };
        xhr.timeout = 50000;
        xhr.send(JSON.stringify(params));
    }
}

/*Data*/
export class PostResultData {
    delta: string;
    theta: string;
    lowAlpha: string;
    highAlpha: string;
    lowBeta: string;
    highBeta: string;
    lowGamma: string;
    highGamma: string;
    relaxation: string;
    concentration: string;
  }
  
  /*tsModel1*/
  export class PostResultModel {
    startTime: string;
    endTime: string;
    gameCode: string;
    /**
     * 最终星座得分
     *
     * @type {string}
     * @memberof PostResultModel
     */
    finishCount: string;
    /**
     * 点亮星星数量
     *
     * @type {string}
     * @memberof PostResultModel
     */
    subCount: string;
    /**
     * 最后计算专注度的得分
     *
     * @type {string}
     * @memberof PostResultModel
     */
    absorbedScore:string;
    data: PostResultData[];
  }
  