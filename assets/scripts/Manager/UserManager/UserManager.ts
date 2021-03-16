import { MessageDef } from "../../Def/MessageDef";
import { HttpUtil } from "../../Tools/HTTPUtil";
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
     * 当前星座序号
     *
     * @type {number}
     * @memberof UserManager
     */
    CurrentConstellationNumber:number=0;



}
  