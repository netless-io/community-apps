import React,{ useEffect,useState,useCallback } from "react";
import { FC } from "react";
import {
  CloseCircleTwoTone
} from '@ant-design/icons';
import { QuesItem,StudentListsType,StudentType } from './constant';
import { convertOptions } from './utils';

export interface MonitorProps {
  goBack:()=>void,
  lists:QuesItem[],
  anLists:StudentListsType
}

export const Monitor: FC<MonitorProps> = ({goBack,lists,anLists}) => {
  
  const [userLists,setUserLists] = useState<Array<StudentType>>([]);
  useEffect(()=>{
    if(Object.keys(anLists).length){
      const res = [];
      for(let val of Object.values(anLists)){
        const selected = handleConversionAnswer(val) || '';
        const rate = handleCorrectRate(val) || 0;
        const temp = {...val,rate,selected}
        res.push(temp);
      }
      setUserLists(res);
    }
  },[anLists])

  const [correctAnswer,setCorrectAnswer] = useState<string>('');
  useEffect(()=>{
    if(lists?.length){
      const res = lists.map(item=>convertOptions(item?.answer))
      setCorrectAnswer(res.join(','))
    }
  },[lists])

  const handleConversionAnswer = (item:StudentType)=>{
    if(item?.answer?.length){
      const res = item.answer.map(item=>convertOptions(item))
      return (res.join(','))
    }
    return '';
  }

  const handleCorrectRate = (item:StudentType)=>{
    if((item?.answer?.length === lists?.length)){
      let count = 0,len = lists.length;
      item.answer.map((it,idx)=>{
        if(it === lists[idx].answer){
            count += 1;
        }
      })
      const temp = Number((count/len)*100).toFixed(0);
      return temp;
    }
    return 0;
  }

  return (
  <div className="monitor-wrap">
   <div className="question-res-btn">
        <CloseCircleTwoTone onClick={goBack} twoToneColor="#f00"/>
    </div> 
    <div className="monitor-table"> 
    <div className="monitor-table-item">
        <div className="monitor-title">用户</div>
        <div className="monitor-ans bRight">正确答案</div>
        <div className="monitor-ans  bRight">选择答案</div>
        <div className="monitor-ans">正确率</div>
    </div>
    {
        userLists?.length === 0 && (
          <div className="monitor-table-item">
            <div className="monitor-no-data">暂无数据</div>
          </div>
        )
    }
    {
        userLists?.length>0 && userLists.map((item,idx)=>(
            <div className="monitor-table-item" key={`${item.memberID}-${idx}`}>
             <div className="monitor-title bRight">{item.memberID}</div>
             <div className="monitor-ans bRight">{ correctAnswer }</div>
             <div className="monitor-ans bRight">{item.selected}</div>
             <div className="monitor-ans">
              <span className="monitor-per">{item.rate}</span>
              <span>%</span>
              </div>
            </div>
        ))
    }
    </div>
  </div>
  );
};
