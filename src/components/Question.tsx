import React,{ useState,useEffect } from "react";
import { FC } from "react";

import { QuesItem } from './constant';
import { convertOptions } from './utils';
import { Result } from './Result';

export interface QuestionProps {
  
  lists:QuesItem[],
  chooseAnswer:(param:number[])=>void
}

export const Question: FC<QuestionProps> = ({lists,chooseAnswer}) => {
  const [current,setCurrent] = useState<number>(0);

  const [active,setActive] = useState<boolean>(false);

  const [currentAns,setCurrentAns] = useState<number>(-1);
 
  const [score,setScore] = useState<boolean[]>([]);
  const [answerLists,setAnswerLists] = useState<number[]>([]);

  const handleChecked = (item:QuesItem,idx:number)=>{
    setActive(true);
    const anLists = [...answerLists,idx];
    setAnswerLists(anLists);
    chooseAnswer(anLists);
    if(item.answer === idx){
      setScore([...score,true]);
    }else{
      setScore([...score,false]);
    }
    setCurrentAns(idx);
  }

  useEffect(()=>{
    if(active){
       setTimeout(()=>{
        setActive(false);
        setTimeout(()=>{
            setCurrent(pre=>pre+1);
            setCurrentAns(-1);
        },2000)
       },800);
    }
  },[active])
 
  return (
  <div className="question-wrap">
    {
        current !== lists.length ? (
            <div className="question-cxt-wrap">
            {
              lists.length > 0 && lists.map((item,idx:number)=>(
                current === idx && <div className="question-cxt-item" key={`${item.topic}-${idx}`}>
                    <div className="question-cxt-title">{idx+1}{'.'}{item.topic}</div>
                    <div className="question-cxt-option">
                        {
                            item.options?.length > 0 && item.options.map((option:string,oIdx:number)=>(
                                <div className={ 
                                    active ? (
                                        currentAns === oIdx ? "question-cxt-option-item-active":"question-cxt-option-item"
                                    ):(
                                        currentAns === -1  ? "question-cxt-option-item":(
                                            item.answer === oIdx ? "question-cxt-option-item-correct":"question-cxt-option-item-wrong"
                                        )  
                                    )
                                } key={`${option}-${oIdx}`} onClick={()=>handleChecked(item,oIdx)}>
                                    <>
                                    <div className="question-cxt-option-sel">{convertOptions(oIdx)}{'.'}</div>
                                    <div className="question-cxt-option-inner">{option}</div>
                                    </>
                                </div>
                            ))
                        }
                    </div>
                </div>
              ))
            }
            </div>
        ):(
        <Result lists={score}  />
        )
    }
  </div>
  );
};
