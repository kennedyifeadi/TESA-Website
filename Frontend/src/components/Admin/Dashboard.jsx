import React from 'react'
import TESA from "../../assets/images/logo.png"
import { Field } from './Field'

export const Dashboard = () => {
  const titles = ['Name', 'Position', 'Level', 'Email', 'Phone no', 'Twitter', 'Instagram','Image']
  const positions = ["president", "vice president", "General Secretary", "A.General Secretary", "P.Relations Officer", "Social Director", "Financial Secretary", "Sports Director", "Tresurer"]
  return (
    <div className='w-full h-full relative'>
      <div className='absolute top-0 w-full h-full opacity-15' style={{ backgroundImage: `url(${TESA})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
      <div className='relative flex flex-col w-full h-full pt-14 px-6 gap-6'>
        <div className='w-full flex h-[70px] border-b border-b-black  bg-gradient-to-r from-[#007AFF] to-[#FA8F21]'>
          {
            titles.map((title, index) => (
              <div key={index} className={`flex-1 flex justify-center items-center h-full ${index === 7 ? "border-r-none" : "border-r border-r-black"}`}>
                <h1 className=' text-white cursor-default'>{title}</h1>
              </div>
            ))
          }
        </div>
        <div className='w-full flex flex-col h-max before:absolute relative before:right-0 before:w-[1px] before:h-full before:bg-gradient-to-b before:from-[#007AFF] before:to-[#FA8F21]
        after:absolute after:left-0 after:w-[1px] after:h-full after:bg-gradient-to-b after:from-[#007AFF] after:to-[#FA8F21]
        '>
          {
            positions.map((position, index) => (
              <Field name={"Name"} email={"Email"} position={position} twitter={"Twitter"} instagram={"Instagram"} level={"Level"} phone={"Phone no"} image={true}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}
