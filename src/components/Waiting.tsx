import React from "react";
import { FC } from "react";

import {
  HomeTwoTone,FrownTwoTone
} from '@ant-design/icons';

export interface WaitingProps {
  
}

export const Waiting: FC<WaitingProps> = () => {

  return (
  <div className="answer-wrap">
    <div className="answer-no-data">
        <FrownTwoTone twoToneColor="#f00"/>
        <p className="answer-no-data-txt">对手正在出题中，请稍等</p>
    </div>    
  </div>
  );
};
