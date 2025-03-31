import React from 'react'
import { ResourceLanding } from '../components/ResourceLanding'
import { FilterResources } from '../components/FilterResources'
import { FilteredResouces } from '../components/FilteredResouces'

export const Resources = () => {
  return (
    <div className='w-full h-max flex flex-col'>
      <ResourceLanding/>
      <FilterResources/>
      <FilteredResouces/>
    </div>
  )
}
