# Community Netless Apps

如果你不知道如何开始编写 Netless App，可以参考使用 [App 模版](https://github.com/netless-io/community-app-template)。

## 「RTE 2022 编程挑战赛」作品 App 列表
> 1）下表的第一列，请按照格式`项目序号-团队名-作品名(仓库地址)`来填写。
> 
> 2）请按照[「场景化白板插件应用开发」赛道：作品详细提交流程](https://github.com/netless-io/community-apps/wiki/%E3%80%8C%E5%9C%BA%E6%99%AF%E5%8C%96%E7%99%BD%E6%9D%BF%E6%8F%92%E4%BB%B6%E5%BA%94%E7%94%A8%E5%BC%80%E5%8F%91%E3%80%8D%E8%B5%9B%E9%81%93%EF%BC%9A%E4%BD%9C%E5%93%81%E8%AF%A6%E7%BB%86%E6%8F%90%E4%BA%A4%E6%B5%81%E7%A8%8B)来提交，在你的仓库中要有 README 文件，[README 撰写参考。](https://github.com/netless-io/community-apps/wiki/README-%E6%92%B0%E5%86%99%E5%8F%82%E8%80%83)

| 项目序号-团队名-作品名(仓库地址)                                                          | 简介                                |
| ------------------------------------------------------------------------- | ----------------------------------- |
| 项目0-Flat官方-[TicTacToe 互动小游戏](https://github.com/Leooeloel/TicTacToe/tree/react) | 这个官方提供的 Demo，基于模版开发的 TicTacToe 互动小游戏 |
| 项目43-万梦聚联-[MidiBoard](https://github.com/CorpDreams/app-midi-board) | MidiBoard - 音乐白板: 在线协同MIDI音乐制作App |
| 项目135-呆瓜小分队-[PK-Game](https://github.com/ldyjjm/community-apps/tree/pk-game) | PK-Game 基于模版开发的多人互动PK游戏 |
| 项目96-大音希声-[voice-less](https://github.com/AvailableForTheWorld/voice-less) | voice-less 一个可实时语言转文字的聊天应用 |
| 项目147-温瞳-[3dClassroom](https://github.com/Soul-Stone/3dClassroom) | 3dClassroom 一个3d模型展示应用 |
| 项目120-远程会议小助手-[VideoOnline](https://github.com/281690733/VideoOnline.git) | VideoOnline 可以提前布置会议模板的在线会议应用 |
| 项目72-代码搬运工-[谁是赢家](https://github.com/emojiiii/crazygame) | 一个平平无奇的多人实时互动游戏 |
| 项目3-云教室保洁员-[CloudOS云教室](https://github.com/kongkang/cloud-class) | 云教室是还原线下授课体验的新一代云端实操教学应用 |
| 项目245-mumu-[flow-demo](https://github.com/mumu72738/flow-demo) | 基于Netless App Template vue的流程图协作插件 |
| 项目155-xxx-[tiktik](https://github.com/ddddouleg/tiktik) | tiktik 一个简易白板节拍器 |
| 项目189-铭扬-[线上办公空间](https://github.com/lumochuan-code/community-apps-plugin.git) | 线上办公空间 场景化应用 |

关于[「RTE 2022 编程挑战赛」](https://www.agora.io/cn/rte-hackathon-2022)

## 如何让你的 App 也出现在这里

如果想在[「RTE 2022 编程挑战赛」作品 App 列表](#rte-2022-编程挑战赛作品-app-列表) 中添加你的 App，请向本仓库提交 Pull Request，编辑本 README 并按照格式添加一个项目到上面的表中，

注：**请确保你是这个 app 的作者或者有权限这么做，并且添加的链接可以正确访问项目。对于优秀的参赛作品可以赢取大奖并且也有机会进入主仓库，把你的作品展示给更多的人。**

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

## 进一步沟通

- 在 [Issues](https://github.com/netless-io/community-apps/issues) 发起沟通。
- 在 [声网开发者社区](https://rtcdeveloper.agora.io/c/ask/128) 发帖，发帖时选择 `“rte2022编程大赛”` 标签。
