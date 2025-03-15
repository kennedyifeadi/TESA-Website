import React, { createContext, useState } from 'react'
export const NavContext = createContext()
export const NavContextProvider = ({children}) => {
    const [id, setId] = useState(null)
  return (
    <div>
        <NavContext.Provider value={{id, setId}}>
            {children}
        </NavContext.Provider>
    </div>
  )
}
