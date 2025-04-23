import React from 'react'

export const Field = ({name, position, level, email, phone, twitter, instagram, image, description, subtext, date, time, category}) => {
  const fieldDetails = [name, position || description || subtext, level, email || date, phone || time, twitter || category, instagram, image]
  return (
    <div className='w-full h-[40px] flex items-center before:absolute relative before:bottom-0 before:w-full before:h-[1px] before:bg-gradient-to-r before:from-[#007AFF] before:to-[#FA8F21]'>
      <div className='w-[96%] h-full'>
        {
          fieldDetails.map((details, index) =>(
            <input type={index === 7 ? "text" : "image"} placeholder={details} />
          ))
        }
      </div>
      <div className='w-[50px] h-full'></div>
    </div>
  )
}
