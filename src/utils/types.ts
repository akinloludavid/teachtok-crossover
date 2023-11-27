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

export interface IChildren {
  children: React.ReactNode 
}