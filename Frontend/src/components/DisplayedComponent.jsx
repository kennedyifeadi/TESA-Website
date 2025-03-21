import React, { useContext } from 'react'
import { PageLoading } from './PageLoading'
import { NavBar } from './Nav'
import { AnimatedRoutes } from '../routes/AnimatedRoute'
import { NavContext } from '../context/NavContext'

export const DisplayedComponent = () => {
  const {isLoading} = useContext(NavContext)

  return (
    <div>
          <PageLoading/>
          <div className={`${isLoading ? "hidden" : "flex"} h-max flex-col relative overflow-x-hidden`}>
            <NavBar/>
            <AnimatedRoutes/>
         </div>
    </div>
  )
}
