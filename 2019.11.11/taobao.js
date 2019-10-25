auto();
device.keepScreenDim();

const appName = "手机淘宝";
const WAIT_TIME = 23000;

launchApp(appName);
toast("开启app后如不在首页请手动返回首页。");

const btn = desc("捉猫猫");
btn.waitFor();
btn.click();

textContains("待兑换红包").waitFor();
const getCatCoin = className("android.view.View")
  .clickable(true)
  .depth(18)
  .indexInParent(5);

getCatCoin.findOne().click();

const getTask = text => () => {
  const taskBtn = textContains(text);
  // taskBtn.waitFor();
  taskBtn.click();
  sleep(WAIT_TIME);
  back();
  sleep(1000);
};

const loopWorker = taskName => {
  const task = getTask(taskName);
  let count = 1;
  while (text(taskName).exists()) {
    toast(`开始执行第${count}个"${taskName}"任务`);
    task();
    toast(`已完成第${count}个"${taskName}"任务`);
    count = count + 1;
  }
};

//text('签到').findOne().click();
// 逛20个店铺
loopWorker("去进店");

// 除了逛店铺外的几个任务
loopWorker("去浏览");

toast("已执行完全部任务，请检查。");
device.cancelKeepingAwake();
