
# Manager
## MessageDispatcher
```typescript
start () {
    MessageDispatcher.Instance.AddEventListener(MessageDef.FirstMessage,this.FirstMessageHandler,this)
    MessageDispatcher.Instance.Dispatch(MessageDef.FirstMessage,"World");
}

FirstMessageHandler(arg){
    console.log("Get FirstMessage "+arg);
}

onDestroy(){
    MessageDispatcher.Instance.RemoveEventListener(MessageDef.FirstMessagethis.FirstMessageHandler,this)
}
```
## SoundManager
```typescript
//MusicID
SoundManager.playMusic(1);
```
# Utils

## HTTPUtil
```typescript
HttpUtil.GET("http://127.0.0.1:8080/hello.php",{id:"1"},(state,obj)=>{
    console.log(state+ obj);
});
HttpUtil.POST("http://127.0.0.1:8080/hello.php",{id:"1"},(state,obj)=>{
    console.log(state+ obj);
});
```

## UIUtil
```typescript
//加载主包内UI
UIUtil.ShowBaseUI(UIDef.LoadingUI);
//加载分包内UI
UIUtil.ShowUI(UIDef.StartUI);
//移除UI
UIUtil.RemoveUI(UIDef.LoadingUI);
//隐藏UI
UIUtil.HideUI(UIDef.StartUI);
```
## TransformUtil
```typescript
TransformUtil.GetWorldPostation2(this.node);
```
## StorageUtil
```typescript
//存储
StorageUtil.storageData("bool",true);
//读取
console.log(StorageUtil.getData("bool",false));
//移除
StorageUtil.removeData("bool");
```
## TimeUtil
```typescript
//2021-03-02 10:28:08
console.log(TimeUtil.getYMDHMS((new Date).getTime()));
//1小时
console.log(TimeUtil.getShowTimeDHMString(3600));
//00:58:20
console.log(TimeUtil.formatDate(3500,TimeFormatType.TIME_FORMAT_4));
```
## MathUtil
```typescript
//0 or 1
MathUtil.randomInterger(0,1);
//1 - 2
MathUtil.random(1,2);
```
# Def
## MessageDef
```typescript
export enum MessageDef {
    FirstMessage = "FirstMessage",
}
```

## UIDef
```typescript
export enum UIDef {
    TestUI = "TestUI",
    Test2UI = "Test2UI",
}
```
