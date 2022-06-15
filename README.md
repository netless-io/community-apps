# Community Netless Apps

## 「RTE 2022 编程挑战赛」作品 App 列表

作品名 | 仓库地址 | 简介
--- | --- | ---
TicTacToe 互动小游戏 | [Leooeloel/TicTacToe](https://github.com/Leooeloel/TicTacToe/tree/react) | 基于模版开发的 TicTacToe 互动小游戏

关于[「RTE 2022 编程挑战赛」]()

## 如何让你的 App 也出现在这里
如果想在[「RTE 2022 编程挑战赛」作品 App 列表](#rte-2022-编程挑战赛作品-app-列表)中添加你的 Apps，请向本仓库提交 Pull Request，编辑本 README 并按照格式添加一个项目到上面的表中，

注： ***请确保你是这个 app 的作者或者有权限这么做，并且添加的链接可以正确访问项目。对于优秀的参赛作品可以赢取大奖并且也有机会进入主仓库，把你的作品展示给更多的人。***

## 开始自己的 Netless App

### 方案一：通过模板快速开始

[Netless App 模版](https://github.com/netless-io/community-app-template) 快速开始。

### 方案二：开发自定义 APP

```js
import SomeApp from "some-app";
import { register } from "@netless/fastboard";

// 在进入房间前注册 App
register({ kind: SomeApp.kind, src: SomeApp });

// 进入房间后，向房间里插入 App
// const fastboard = await createFastboard(...)
fastboard.manager.addApp({ kind: SomeApp.kind });
```

更多有关如何使用 Netless App（互动白板插件）可以参考 [Netless App 文档](https://github.com/netless-io/window-manager/blob/master/docs/develop-app.md)。


## 进一步沟通
- 在[Issue](https://github.com/netless-io/community-apps/issues)发起沟通。
- 在[声网开发者社区](https://rtcdeveloper.agora.io/c/ask/128)发帖，发帖时选择`“rte2022编程大赛”`标签。

