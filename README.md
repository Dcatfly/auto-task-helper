# auto-task-helper

迫于双十一淘宝京东任务重复性太高，所以借助[Auto.js](https://github.com/hyb1996/Auto.js)（仅支持 Android），写了两个脚本来帮助我们自动完成任务。

## 如何使用

> 本脚本及软件在`三星s10`，`一加6t`，`vivo nex`上测试通过。（[CHANGELOG](./CHANGELOG.md)）

### 1.安装[Auto.js](https://github.com/hyb1996/Auto.js)

由于 Auto.js 作者停止发包，在项目的 release 中和应用商店已经无法下载官方 app。所以本项目提供了一个我自己编译的[debug 版本](./auto-debug.apk)的 app。

建议使用原项目自己编译。原项目 issue 中也有第三方提供的包，但同样无法确认是否为原版。

### 2. 导入 js

将本项目中的 js 文件导入安装好的`Auto.js`app，点击运行即可。

## 注意事项

1. Auto.js 需要无障碍服务权限.
2. 执行任务时，请先确定当前脚本在`Anto.js`中的`管理tab`中没有正在执行。
3. 任务中存在一些延时处理，最多可能延时 10s 左右，不要过早的人为介入。之后可能会继续执行，或者给出提示。
4. 执行异常时，可以在`Auto.js app`--> `脚本菜单`-->`日志`中获得最近一次执行日志，报 issue 时附加日志信息有助于分析异常。
