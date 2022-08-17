import type { AppContext,Storage } from "@netless/window-manager";
import React, { useEffect, useState,useMemo } from "react";

import {
  MemberIDType,
  useStorage,
  useMemberID
} from "./hooks";

import { ModeType,QuesItem,StudentListsType,StudentStorage } from './constant';

import { AddQues } from './AddQues';
import { Answer } from './Answer';
import { TeacherWaiting } from './TeacherWaiting';
import { Waiting } from './Waiting';
import { Monitor } from './Monitor';

export type IAppProps = {
  isTeacher: boolean;
  context:AppContext;
};

export interface SyncState {
  studentIdLists:StudentListsType;
  teacherId: MemberIDType | null;
  questionLists:QuesItem[];
  answerLists:number[];
  mode:number;
  restartStatus:boolean;
}

export function App({ context,isTeacher }: IAppProps) {

 const [syncState,setSyncState] = useStorage<SyncState>(
  context,
  'question',
  ()=>({
    teacherId:null,
    studentIdLists:{},
    questionLists:[],
    answerLists:[],
    mode:ModeType.Default,
    restartStatus:false
  })
 )
 const studentStorage = context.createStorage<StudentStorage>("studentModule",{
  studentIdLists:{}
 });

 const [stuIdLists,setStuIdLists] = useState<StudentListsType>({});
 useEffect(() => {
  return studentStorage.addStateChangedListener(() => {
    setStuIdLists(studentStorage.state.studentIdLists);
  });
},[studentStorage]);

 const memberID = useMemberID(context);

 const isEntering = useMemo(()=>{
  if(syncState.questionLists.length > 0){
       return true;
  }
  return false
},[syncState.questionLists])
 

 const teacherLogin = ()=>{
  setSyncState({ teacherId:memberID });
 }
 const studentLogin = ()=>{
  const students = Object.keys(studentStorage.state.studentIdLists);
  if(!students.length){
    setSyncState({ mode: ModeType.Input });
  }
  const list = {...studentStorage.state.studentIdLists}
  list[`${memberID}`] = {
    memberID,
    isShowLogin:true,
    isShowWaiting:true,  
    answer:[]
  };
  studentStorage.setState({ studentIdLists:list });
  }


const isShowTeacherLogin = useMemo(()=>{
  return !syncState.teacherId && isTeacher
},[syncState.teacherId])

// 获取题目列表
const finishedAdd = (lists:QuesItem[])=>{
  const len = lists.length;
  setSyncState({ questionLists: lists });
}

const collectAnswer = (lists:number[])=>{
  let studentIdLists = {...studentStorage.state.studentIdLists}
  studentIdLists[`${memberID}`].answer = lists;
  studentStorage.setState({ studentIdLists });

}

const goBack = ()=>{
  setSyncState({ restartStatus:true });
}

const restart = ()=>{
  setSyncState({ questionLists: [],restartStatus:false,mode:ModeType.Default });
  studentStorage.setState({ studentIdLists:{} });
  setStuIdLists({});
}

const isShowTeacherRestart = useMemo(()=>{
return syncState.restartStatus && isTeacher;
},[syncState.restartStatus])

const isShowTeacherWaitingCondition = useMemo(()=>{
  if(!Object.keys(studentStorage.state.studentIdLists).length && syncState.teacherId && isTeacher){
     return true;
  }
  return false;
},[syncState.teacherId,studentStorage.state.studentIdLists,isTeacher])

const isShowAddQuesCondition = useMemo(()=>{
  if(Object.keys(studentStorage.state.studentIdLists).length && !syncState.restartStatus &&  (syncState.mode === ModeType.Input) && (syncState.teacherId === memberID) && !isEntering) return true;
  return false;
},[syncState.restartStatus,syncState.mode,syncState.teacherId,memberID,isEntering])

const isShowMonitorCondition = useMemo(()=>{
  if(!syncState.restartStatus && syncState.teacherId === memberID  && isEntering) return true;
  return false;
},[syncState.restartStatus,syncState.teacherId,memberID,isEntering])




const [isContainerCurrentID,setIsContainerCurrentID] = useState<boolean>(false);
useEffect(()=>{
  setIsContainerCurrentID(!!studentStorage.state.studentIdLists[memberID]);
},[studentStorage.state.studentIdLists,memberID])

  return (
  <div className="questionwrap">
    {
      isShowTeacherLogin && <div className="common-btn" onClick={teacherLogin}>你问我答</div>
    }
    {
      isShowTeacherRestart && <div className="common-btn" onClick={restart}>重新开始</div>
    }
    {
      !isTeacher && !Object.keys(stuIdLists).includes(memberID) && <div className="common-btn" onClick={studentLogin}>你问我答</div>
    }
    {
      isShowTeacherWaitingCondition && <TeacherWaiting />
    }
    {
      Object.keys(stuIdLists).length > 0 && Object.keys(stuIdLists).map(k=>(
          <div key={k}>
            {
               !isEntering  && k === memberID && stuIdLists[k].isShowWaiting && <Waiting />
            }
            {
               isEntering  && isContainerCurrentID && k === memberID && (
                <Answer data={syncState.questionLists} handleChecked={collectAnswer}/>
               )
            }
          </div>
      ))
    }
    {
      isShowAddQuesCondition && (<AddQues goBack={finishedAdd}/>)
    } 
    {
      isShowMonitorCondition && <Monitor lists={syncState.questionLists} anLists={stuIdLists} 
      goBack={goBack} />
    }
  </div>  
  ) 
  
}
