
auto();
var appName = "手机淘宝";
var maxCount = 20;
var maxOther = 4;

device.keepScreenDim();
setScreenMetrics(1440,3040);
//openAppSetting(getPackageName(appName));
// var closeBth = textContains("强制停止");
// closeBth.waitFor();
// closeBth.click();
// textContains(appName).waitFor();
// click(1158,1124);
// id("button1").waitFor();

//while(!click("强制停止")){};

launchApp(appName);

//toastLog("qqq");
var btn = desc("捉猫猫");
btn.waitFor();
btn.click();

textContains("待兑换红包").waitFor();
click(1230,2300);

var count = 0;
var taskBtn1 = textContains("去进店");

events.observeToast();
events.onToast(function(){
  console.log("toast");
})
function a(){
  //  while(count<maxCount && taskBtn1.exist){
  taskBtn1.waitFor();
  taskBtn1.click();
  //  descContains("完成").waitFor();
  //   back();
  count = count + 1;
  // }
}

setInterval(function(){
  if(count!==0){back();}
  a();
},22000);

count = 0;
var taskBtn2 = textContains("去浏览");

function b(){
  // while(count < maxOther){
  taskBtn2.waitFor();
  taskBtn2.click();
  // desc("任务完成").waitFor();
  //  back();
  count = count + 1;
  // }
}
function c(){
  setInterval(function(){
    if(count !== 0){back();};
    b();
  }, 20000)

};

device.cancelKeepingAwake();
