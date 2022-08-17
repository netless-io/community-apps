import React,{ useState,useEffect } from "react";
import { FC } from "react";

import { Input } from 'antd';
import {
  MinusCircleTwoTone
} from '@ant-design/icons';

const { TextArea } = Input;

import { convertOptions } from './utils';
import { DefaultOptionsNum } from './constant';

export interface AddQuesProps {
  lists:Array<string>,
  checkedNull:boolean,
  clearVal:boolean,
  saveData:(option:string[],answer:number)=>void,
}

export const AddQuesItem: FC<AddQuesProps> = ({lists,saveData,checkedNull,clearVal}) => {

  const [active,setActive] = useState<number>(0);
 
  const [options,setOptions] = useState<string[]>([]);

  useEffect(()=>{
    if(lists.length){
      if(options.length){
        setOptions([...options,lists.slice(-1)[0]]);
      }else{
        setOptions(lists);
      }
    }
  },[lists])  

  useEffect(()=>{
    if(clearVal){
      setOptions([...lists.slice(0,DefaultOptionsNum)]);
      setActive(0);
    }
  },[clearVal])

  const removeSel = (idx:number)=>{
    let res = [...options];
    res.splice(idx,1);
    setOptions(res);
    saveData(res,active);
  }

  const handleTextareaVal = (val:string,idx:number)=>{
    let res = [...options];
    res[idx] = val;
    setOptions(res);
    saveData(res,active);
  }

  const handleActive = (index:number)=>{
    setActive(index);
    saveData(options,index);
  }

  return (
    <>
    {
      options?.map((item,index)=>(
        <div className="add-ques-item-sel-wrap" key={index}>
        <div className="add-ques-item-sel-inner-left">
          <div className={!(active === index) ? "add-ques-item-sel-inner" :"add-ques-item-sel-inner-active"}>
            <div className="add-ques-item-sel-txt" onClick={()=>handleActive(index)}>
              {convertOptions(index)}
            </div>
            <TextArea autoSize={{minRows:2}}  value={item}
            onChange={(e)=>handleTextareaVal(e.target.value,index)}/>
          </div>
          {
            (item.length === 0 && checkedNull) && <div className="item-sel-error">请输入选项内容</div>
          }
          
        </div>
        {/* {
          options.length >2 && <MinusCircleTwoTone className="item-sel-btn" onClick={()=>removeSel(index)}/>
        } */}
      </div>
      ))
    }
  </>
  );
};
