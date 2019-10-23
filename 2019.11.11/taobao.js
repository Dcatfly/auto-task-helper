auto();
device.keepScreenDim();

const appName = "手机淘宝";
const WAIT_TIME = 23000;
let maxCount = 20;
let maxOther = 4;
let count = 0;

setScreenMetrics(1440, 3040);

launchApp(appName);

const btn = desc("捉猫猫");
btn.waitFor();
btn.click();

textContains("待兑换红包").waitFor();
click(1230, 2300);

const worker = fn => {
  const timer = setInterval(() => {
    fn(timer);
  }, WAIT_TIME);
};

const enterShopTask = () => {
  const taskBtn1 = textContains("去进店");
  taskBtn1.waitFor();
  taskBtn1.click();
  count = count + 1;
};

const goExploreTask = () => {
  const taskBtn2 = textContains("去浏览");
  taskBtn2.waitFor();
  taskBtn2.click();
  count = count + 1;
};

worker(timer => {
  count !== 0 && back();

  if (count < maxCount) {
    enterShopTask();
  } else {
    count = 0;
    clearInterval(timer);
    worker(_timer => {
      count !== 0 && back();
      if (count < maxOther) {
        goExploreTask();
      } else {
        clearInterval(_timer);
        back();
        back();
      }
    });
  }
});

device.cancelKeepingAwake();
