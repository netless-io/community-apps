export interface TeacherStorage {
  teacherID:string;
}


export enum ModeType {
    Default,
    Input,
    Answer
}

export const DefaultOptionValue = {
    topic:'',
    options:['','',''],
    answer:0
}

export const DefaultOptionsNum:number = 3

export const MaxOptionsNum:number = 26

// 题目
export interface QuesItem {
    topic:string;
    options:string[];
    answer:number;
}


export const Clock:number = 3

export interface StudentType {
    memberID:string;
    isShowLogin:boolean;
    isShowWaiting:boolean;
    answer:number[];
  };
  
  export interface StudentListsType {
    [key:string]:StudentType
  };
  
  export type StudentStorage = {
    studentIdLists:StudentListsType
  };