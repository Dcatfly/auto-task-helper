auto();

const appName = "京东";
const errorMessageForContinue = "请手动点击以进行下一步";
setScreenMetrics(1440, 3040);
const _findOne = (selector, timeout, message) => {
  const isExit = !!message;
  timeout = timeout || 10000;
  message = "脚本异常 " + (message || "已停止执行，请重新执行");
  const ret = selector.findOne(timeout);
  if (!ret) {
    console.log("L12: ", selector, message);
    toast(message);
    isExit && exit();
  }
  return ret;
};

launchApp(appName);
toast("开启app后如不在首页请手动返回首页。");

_findOne(desc("我的"));

const gotoActivityBtn = className("ImageView")
  .clickable(true)
  .depth(11)
  .indexInParent(2);
const getRedPacketBtn = className("android.view.View")
  .clickable(true)
  .depth(14)
  .indexInParent(1);
const getCoinBtn = className("android.view.View")
  .clickable(true)
  .depth(15)
  .indexInParent(2);

_findOne(gotoActivityBtn).click();

const redPacketBtn = _findOne(getRedPacketBtn, 3000, errorMessageForContinue);
if (redPacketBtn) {
  redPacketBtn.click();
}

sleep(1000);
const coinBtn = _findOne(getCoinBtn, 5000, errorMessageForContinue);
if (coinBtn) {
  coinBtn.click();
}

const save = desc("投喂包包");

// 任务
const tasks = ["逛逛好店", "精选好物", "精彩会场", "好玩互动", "看京品推荐"];

tasks.forEach(key => {
  toastLog("开始执行" + key + "任务");
  const taskBtn = _findOne(descContains(key));
  const regRet = taskBtn.desc().match(/.*（(\d*)[/](\d*).*/);
  const max = regRet[2] - regRet[1];
  let count = 0;
  while (count < max) {
    let backCount = 0;
    toastLog("开始执行第（" + (count + 1) + "/" + max + "）个" + key + "任务");
    taskBtn.click();
    sleep(3000);
    while (!descContains(key).exists()) {
      backCount = backCount + 1;
      if (backCount > 3) {
        toastLog("返回任务界面时，脚本异常，已停止执行，请重新执行");
        exit();
      }
      back();
      sleep(1000);
    }
    _findOne(desc("朕知道了")).click();
    count = count + 1;
  }
});

click(735, 640);

_findOne(save).click();
back();
back();
back();
back();
toastLog("已执行完全部任务，请检查。");
