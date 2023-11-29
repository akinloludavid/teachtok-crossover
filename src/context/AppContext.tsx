import React, { createContext, useContext, useEffect, useState } from 'react'
import { useGetQuestions } from '../api'
import { IChildren } from '../utils/types'

const initialState = {
  answeredQuestions:[],
  setAnsweredQuestions: (e:any)=> {},
  questionIdx:0, 
  setQuestionIdx:(e:number)=> {},
  questionOptions:[], 
  setQuestionOptions:(e:any)=> {}
}

const AppContext = createContext(initialState)
export const useAppContext = () => useContext(AppContext)

export const AppContextProvider = ({children}:IChildren) => {

  const [questionIdx, setQuestionIdx]= useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<any[]>([])
  const { data: questionData } = useGetQuestions()
  const [questionOptions, setQuestionOptions] = useState<any[]>([])
console.log(answeredQuestions)

  useEffect(()=> {
    if(questionData){
      setAnsweredQuestions((prev:any)=> [...prev, questionData])
    }

  },[questionData, questionIdx])
  useEffect(()=> {
    if(answeredQuestions.length > 0){
      const newQuestionsOptions = answeredQuestions[questionIdx]?.options?.map((el: any) => ({
        ...el,
        answered: false,
    }))
    setQuestionOptions(newQuestionsOptions)
    }
  },[answeredQuestions])
  const values = {
    answeredQuestions,
    setAnsweredQuestions, 
    questionIdx, 
    setQuestionIdx, 
    questionOptions, 
    setQuestionOptions
  }
  return (
    <AppContext.Provider value={values}> 
      {children}
    </AppContext.Provider>
  )
}
