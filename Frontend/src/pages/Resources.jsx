import React from 'react'
import { ResourceLanding } from '../components/ResourceLanding'
import { FilterResources } from '../components/FilterResources'
import { FilteredResouces } from '../components/FilteredResouces'
import { ResoucesContextProvider } from '../context/ResoucesContext'

export const Resources = () => {
  return (
    <div
     className='w-full h-max flex flex-col'>
      <ResourceLanding/>
      <ResoucesContextProvider>
        <FilterResources/>
        <FilteredResouces/>
      </ResoucesContextProvider>
    </div>
  )
}
