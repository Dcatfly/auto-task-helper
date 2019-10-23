# auto-task-help

迫于双十一淘宝京东任务重复性太高，所以借助[Auto.js](https://github.com/hyb1996/Auto.js)（仅支持 Android），写了两个脚本来帮助我们自动完成任务。

## 如何使用

### 1.安装[Auto.js](https://github.com/hyb1996/Auto.js)

由于 Auto.js 作者停止发包，在项目的 release 中和应用商店已经无法下载官方 app。所以本项目提供了一个我自己编译的[debug 版本](./auto-debug.apk)的 app。

建议使用原项目自己编译。原项目 issue 中也有第三方提供的包，但同样无法确认是否为原版。

### 2. 导入 js

将本项目中的 js 文件导入安装好的`Auto.js`app，点击运行即可。

## 注意事项

1. Auto.js 需要无障碍服务权限.
2. 如果执行任务中由于某些问题导致执行中断，目前需要手动改变代码中的任务数量。
