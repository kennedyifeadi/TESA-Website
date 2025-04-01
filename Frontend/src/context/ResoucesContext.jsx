import React, { createContext, useState } from 'react'

export const ResoucesContext = createContext()

export const ResoucesContextProvider = ({children}) => {
    const [level, setLevel] = useState(400);
    const [Department, setDepartment] = useState("Mechanical Engineering")
    const [link, setLink] = useState("")
  return (
        <ResoucesContext.Provider value={{level, setLevel, Department, setDepartment, link, setLink}}>
            {children}
        </ResoucesContext.Provider>
  )
}
