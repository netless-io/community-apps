import React from "react";
import { FC } from "react";

import {
  HomeTwoTone,FrownTwoTone
} from '@ant-design/icons';

export interface WaitingProps {
  
}

export const TeacherWaiting: FC<WaitingProps> = () => {

  return (
  <div className="answer-wrap">
    <div className="answer-no-data">
        <FrownTwoTone twoToneColor="#f00"/>
        <p className="answer-no-data-txt">正在等待对手加入,请等待</p>
    </div>    
  </div>
  );
};
