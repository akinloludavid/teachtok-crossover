import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

type RootStackParamList = {
  Home: undefined;
  Others:undefined
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
export interface INavigation {
  navigation:any
}

export interface IAppContext {
  questionOptions:any[], 
  setQuestionOptions:(e:any) => void,
  answeredQuestions:any[],
  setAnsweredQuestions: (e:any)=> void,
  questionIdx:number, 
  setQuestionIdx:(e:number)=> void
}
export interface IChildren {
  children: React.ReactNode 
}