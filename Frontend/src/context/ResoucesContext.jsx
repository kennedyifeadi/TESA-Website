import React, { createContext, useState } from 'react'

export const ResoucesContext = createContext()

export const ResoucesContextProvider = ({children}) => {
    const [level, setLevel] = useState(100) // Set initial active level;
    const [Department, setDepartment] = useState()
    const [link, setLink] = useState("")
  return (
        <ResoucesContext.Provider value={{level, setLevel, Department, setDepartment, link, setLink}}>
            {children}
        </ResoucesContext.Provider>
  )
}
