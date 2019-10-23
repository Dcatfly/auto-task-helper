auto();

var appName="京东";
var maxCount = 20;
launchApp(appName);

var btn = className("android.widget.ImageView").desc("浮层icon").depth(8);

//btn.waitFor();
//btn.click();

var getCoinBtn = descContains("逛逛好");
var save = desc("投喂包包");
//var wait = text("好物正预售");
var wait = text("首页");
var count = 0;

while(count < maxCount){
  console.log(1);
  getCoinBtn.waitFor();
  getCoinBtn.click();
  console.log(2);
  text("首页").waitFor();
  back();
  desc("朕知道了").waitFor();
  desc("朕知道了").click();
//save.waitFor();
//save.click();
//console.log(3);
  count = count + 1;
}


