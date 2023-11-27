import { useQuery } from "@tanstack/react-query"
import axios, { Axios, AxiosError } from "axios"

export const getQuestions = async() => {
  try {
    const res = await axios.get(`https://cross-platform.rp.devfactory.com/for_you`)
    return res.data
  } catch (error:any){
    throw new Error(error.message)
  }
}

export const getAnswerById = async(id:string|number) => {
  try {
    const res = await axios.get(`https://cross-platform.rp.devfactory.com/reveal?id=${id}`)
    return res.data
  } catch (error:any) {
    throw new Error(error.message)
  }
}


export const useGetQuestions= () => {
  return useQuery({
    queryKey:['questions'],
    queryFn:getQuestions,
  })
}
export const useGetAnswer= (id:string|number) => {
  return useQuery({
    queryKey:[`answer-${id}`],
    queryFn:()=> getAnswerById(id),
    enabled:!!id
  })
}