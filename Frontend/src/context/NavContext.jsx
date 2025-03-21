import React, { createContext, useState } from 'react'
export const NavContext = createContext()
export const NavContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)

  return (
    <div>
        <NavContext.Provider value={{isLoading, setIsLoading}}>
            {children}
        </NavContext.Provider>
    </div>
  )
}
