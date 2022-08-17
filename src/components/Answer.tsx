import React,{ useState,useEffect } from "react";
import { FC } from "react";

import { QuesItem,Clock } from './constant';
import { Question } from './Question';

export interface AnswerProps {
  
  data:QuesItem[],
  handleChecked:(param:number[])=>void
}

export const Answer: FC<AnswerProps> = ({data,handleChecked}) => {
  const [lists,setLists] = useState<Array<QuesItem>>([]);
  useEffect(()=>{
    if(data.length){
      setLists(data);
    }
  },[data])
  const [count,setCount] = useState<number>(Clock);
  useEffect(()=>{
    if(lists.length === 0) return;
    const timer = window.setInterval(() => {
      setCount((prevCount) => {
        return prevCount - 1;
      });
    }, 1000);
    if(count === 0 ){
       if(timer){
        clearInterval(timer);
        return;
       }
    }
    return () => {
      clearInterval(timer);
    };
  },[count,lists])
  return (
  <div className="answer-wrap">
    {
            <div className="answer-wrap">
              {
                count !== 0 ?(
                  <div className="answer-clock-wrap">
                    <div className="answer-clock">{count}</div>
                  </div>):(
                  <Question lists={lists}  chooseAnswer={handleChecked}/>
                )
              }
            </div>
    }  
  </div>
  );
};
