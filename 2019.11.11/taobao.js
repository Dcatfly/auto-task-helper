auto();
device.keepScreenDim();

const appName = "手机淘宝";
const WAIT_TIME = 23000;
let maxCount = 20;
let maxOther = 4;

setScreenMetrics(1440, 3040);

launchApp(appName);

const btn = desc("捉猫猫");
btn.waitFor();
btn.click();

textContains("待兑换红包").waitFor();
click(1230, 2300);

const worker = (fn, max) => {
  let count = 0;
  while (count < max) {
    fn();
  }
};

const enterShopTask = () => {
  const taskBtn = textContains("去进店");
  taskBtn.waitFor();
  taskBtn.click();
  sleep(WAIT_TIME);
  back();
};

const goExploreTask = () => {
  const taskBtn = textContains("去浏览");
  taskBtn.waitFor();
  taskBtn.click();
  sleep(WAIT_TIME);
  back();
};

worker(enterShopTask, maxCount);

worker(goExploreTask, maxOther);

device.cancelKeepingAwake();
