import React from 'react'
import { ResourceLanding } from '../components/ResourceLanding'
import { FilterResources } from '../components/FilterResources'
import { FilteredResouces } from '../components/FilteredResouces'
import { ResoucesContextProvider } from '../context/ResoucesContext'
import { motion } from 'framer-motion' 

export const Resources = () => {
  return (
    <motion.div
    initial = {{x:300}}
    animate = {{x:0}}
    transition={{duration: 1}}
     className='w-full h-max flex flex-col'>
      <ResourceLanding/>
      <ResoucesContextProvider>
        <FilterResources/>
        <FilteredResouces/>
      </ResoucesContextProvider>
    </motion.div>
  )
}
