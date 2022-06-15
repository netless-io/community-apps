# Community Netless Apps

## App 列表

- [Leooeloel/TicTacToe](https://github.com/Leooeloel/TicTacToe/tree/react)：基于模版开发的 TicTacToe 互动小游戏

## 如何使用 App

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

## 添加你的 App

如果想在这里添加你的 App，请在 Pull Request 里编辑本 README 并添加一个项目到上面的列表，像这样：

- [your-username/your-app-name](https://github.com/your-username/your-app-name)：简要描述

请确保你是这个 app 的作者，并且上方的链接可以正确打开你的项目。

如果你不知道如何开始编写 Netless App，可以参考使用 [App 模版](https://github.com/netless-io/community-app-template)。
