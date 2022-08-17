import React,{ useState,useEffect } from "react";
import { FC } from "react";

import {
  PlusCircleTwoTone,
} from '@ant-design/icons';

import { Input} from 'antd';
import { QuesItem,DefaultOptionsNum,DefaultOptionValue,MaxOptionsNum } from './constant';

const { TextArea } = Input;

import { AddQuesItem } from './AddQuesItem';

export interface AddQuesProps {
  goBack:(lists:QuesItem[])=>void
}

export const AddQues: FC<AddQuesProps> = ({goBack}) => {
  const [topic,setTopic] = useState<string>('');
  const [lists,setLists] = useState<Array<string>>([]);
  const generateLists = (start = 0,end = DefaultOptionsNum)=>{
    const res = [...lists];
    for(let i = start;i<end;i++){
       res.push('');
    }
    setLists(res);
  }
  // 生成默认选项
  useEffect(()=>{
    generateLists();
  },[])

  // 添加选项
  const [allowAdd,setAllowAdd] = useState<boolean>(true);
  const addSel = ()=>{
    generateLists(lists.length - 1,lists.length);
  }
  useEffect(()=>{
    if(lists.length>=MaxOptionsNum){
      setAllowAdd(false);
    }else{
      setAllowAdd(true);
    }
  },[lists])

  //全部数据
 const [allItemData,setAllItemData] = useState<Array<QuesItem>>([]);
 // 当前添加的题目
 const [currentItemData,setCurrentItemData] = useState<QuesItem>(DefaultOptionValue);
 const saveOptions = (options:string[],answer:number)=>{
   const current = {
     topic,
     options,
     answer
   };
   setCurrentItemData(current);
 }

 const [checkedNull,setCheckedNull] = useState<boolean>(false);
 const [clearVal,setClearVal] = useState<boolean>(false);
 // 检验选项是否为空
 const checkedOptions = ()=>{
  const options = currentItemData.options;
  for(let i = 0;i<options.length;i++){
   if(options[i].length === 0){
      setCheckedNull(true);
      return false;
   }
  }
  setCheckedNull(false);
  return true;
 }
 // 初始化
 const init = ()=>{
    setTopic('');
    setClearVal(true);
    setCurrentItemData(DefaultOptionValue);
 }
 // 继续添加
const continueAdd = ()=>{
  if(checkedOptions()){
    const data = [...allItemData,currentItemData];
    setAllItemData(data);
    init();
  }
}
// 最多只能添加5个题目
const [limit,setLimit] = useState<boolean>(true);
useEffect(()=>{
  if(allItemData.length === 4){
    setLimit(false);
  }
},[allItemData])
// 确定
const finishAdd = ()=>{
  if(checkedOptions()){
    const data = [...allItemData,currentItemData];
    goBack(data);
  }
 
}
  // 初始化后重置状态
  useEffect(()=>{
    if(clearVal){
      setTimeout(()=>{
        setClearVal(false);
      },1000)
    }
  },[clearVal])
  

  return (
  <div className="add-ques-wrap">
      <div className="add-ques-item-wrap">
    <div className="add-ques-item-inner">
      <div className="space">题目内容</div>
      <div className="inner-textarea">
      <TextArea rows={4} value={topic} onChange={(e)=>setTopic(e.target.value)}/>
      </div>
      { (topic.length === 0 && checkedNull) && <div className="item-sel-error">请输入题目内容</div>}
    </div>
    <div className="add-ques-item-sel">
        <div className="add-ques-item-sel-header space">
          <div className="sel-txt-inner">
          选项
          <span className="item-tooltip">点击选项字母，设为正确答案</span>
          </div>
          {/* <div className="item-sel-txt">
            {
              allowAdd && <PlusCircleTwoTone className="item-sel-btn" onClick={addSel} />
            }
          </div> */}
        </div>
        <AddQuesItem lists={lists} saveData={saveOptions} clearVal={clearVal} checkedNull={checkedNull}/>
    </div> 
  </div>
    <div className="add-ques-ope">
      {limit && <div className="common-btn" onClick={continueAdd}>继续添加</div>} 
        <div className="common-btn" onClick={finishAdd }>确定</div>
    </div> 
  </div>
  );
};
