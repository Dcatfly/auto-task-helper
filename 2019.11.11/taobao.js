auto();
device.keepScreenDim();

const appName = "手机淘宝";
const WAIT_TIME = 23000;

setScreenMetrics(1440, 3040);

launchApp(appName);

const btn = desc("捉猫猫");
btn.waitFor();
btn.click();

textContains("待兑换红包").waitFor();
click(1230, 2300);

const loopWorker = (fn, loop) => {
  let count = 0;
  while (count < loop) {
    fn();
    count = count + 1;
  }
};

const getTask = text => () => {
  const taskBtn = textContains(text);
  taskBtn.waitFor();
  taskBtn.click();
  sleep(WAIT_TIME);
  back();
  sleep(1000);
};

// 逛20个店铺
let maxCount = rawInput('请输入"去进店"任务的执行次数', 20);
loopWorker(getTask("去进店"), maxCount);

// 除了逛店铺外的几个任务
let maxOther = rawInput('请输入"去浏览"任务的执行次数', 8);
loopWorker(getTask("去浏览"), maxOther);

device.cancelKeepingAwake();
