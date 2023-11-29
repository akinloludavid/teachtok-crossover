import React, { createContext, useContext, useState } from 'react'
import { useGetQuestions } from '../api'
import { IChildren } from '../utils/types'

const initialState = {
  questionData:{}
}

const AppContext = createContext(initialState)
export const useAppContext = () => useContext(AppContext)
export const AppContextProvider = ({children}:IChildren) => {
  const { data: questionData } = useGetQuestions()

  const values = {
    questionData
  }
  return (
    <AppContext.Provider value={values}> 
      {children}
    </AppContext.Provider>
  )
}
