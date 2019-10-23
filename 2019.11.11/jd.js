auto();

const appName = "京东";
setScreenMetrics(1440, 3040);

launchApp(appName);

desc("我的").waitFor();

click(730, 1780);

sleep(5000);
click(1086, 2130);
descContains("可翻倍").waitFor();
click(1290, 2380);

const save = desc("投喂包包");

// 任务和任务数量
const taskMap = {
  逛逛好店: 25,
  精选好物: 25,
  精彩会场: 3,
  好玩互动: 4,
  看京品推荐: 4
};

Object.keys(taskMap).forEach(key => {
  const getCoinBtn = descContains(key);
  const max = taskMap[key];
  let count = 0;
  while (count < max) {
    getCoinBtn.waitFor();
    getCoinBtn.click();
    sleep(5000);
    back();
    sleep(2000);
    desc("朕知道了").waitFor();
    desc("朕知道了").click();
    count = count + 1;
  }
});

click(735, 640);
save.waitFor();

save.click();
back();
back();
back();
back();
