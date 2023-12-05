import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';

type RootStackParamList = {
  Home: undefined;
  Others:undefined
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
export interface INavigation {
  navigation:Props
}

export interface IChildren {
  children: React.ReactNode 
}

export interface IAppContext {
  questionData: IPayloadObject | Record<string, any>,
  error:any
}

export interface IPayloadObject {
  type: string
  id: number
  playlist: string
  description: string
  image: string
  question: string
  options: Option[]
  user: User
}

export interface Option {
  id: string
  answer: string
}

export interface User {
  name: string
  avatar: string
}
