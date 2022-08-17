import type { NetlessApp,Storage } from "@netless/window-manager";

import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/App";
import styles from "./style.css?inline";

import { TeacherStorage } from './constant';

const Quiz: NetlessApp = {
  kind: "Quiz",
  setup(context) {
    const box = context.getBox();
    box.mountStyles(styles);

    const storage = context.createStorage<TeacherStorage>("tearchModule");
    if (context.isAddApp) {
      storage.setState({ teacherID: context.getRoom()?.uid });
    } 
    const isTeacher = storage.state.teacherID === context.getRoom()?.uid;
   
    const $content = document.createElement("div");
    $content.className = "app-quiz";
    box.mountContent($content);

    const root = createRoot($content);

    root.render(<App 
      context={context} 
      isTeacher={isTeacher}/>);

    context.emitter.on("destroy", () => {
      root.unmount();
    });
  },
};

export default Quiz;
