import React, { createContext, useContext, useState } from 'react'
import { IChildren } from '../utils/types'

const initialState = {
  answeredQuestions:[],
  setAnsweredQuestions: (e:any)=> {}
}

const AppContext = createContext(initialState)
export const useAppContext = () => useContext(AppContext)
export const AppContextProvider = ({children}:IChildren) => {
  const [answeredQuestions, setAnsweredQuestions] = useState([])
  const values = {
    answeredQuestions,
    setAnsweredQuestions
  }
  return (
    <AppContext.Provider value={values}> 
      {children}
    </AppContext.Provider>
  )
}
