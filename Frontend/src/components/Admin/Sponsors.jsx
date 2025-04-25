import React, { useState } from 'react'
import TESA from "../../assets/images/logo.png"
import { Field } from './Field'

export const AdminSponsors = () => {
  const titles = ['Name', 'Position', 'Text', 'Image']
  
  // State to track sponsors
  const [sponsors, setSponsors] = useState([
    { id: 1, name: "Name", position: "Position", text: "Text", image: true }
  ]);
  
  // Function to add a new sponsor
  const addNewSponsor = () => {
    const newId = sponsors.length > 0 ? Math.max(...sponsors.map(sponsor => sponsor.id)) + 1 : 1;
    setSponsors([...sponsors, { 
      id: newId, 
      name: "Name", 
      position: "Position", 
      text: "Text", 
      image: true 
    }]);
  }

  return (
    <div className='w-full h-full relative'>
      <div className='absolute top-0 w-full h-full opacity-15' style={{ backgroundImage: `url(${TESA})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
      <div className='relative flex flex-col w-full h-full pt-14 px-6 gap-6'>
        <div className='w-full flex h-[70px] border-b border-b-black bg-gradient-to-r from-[#007AFF] to-[#FA8F21]'>
          {
            titles.map((title, index) => (
              <div key={index} className={`flex-1 flex justify-center items-center h-full ${index === 3 ? "border-r-none" : "border-r border-r-black"}`}>
                <h1 className='text-white cursor-default'>{title}</h1>
              </div>
            ))
          }
        </div>
        
        {/* Sponsor Fields */}
        <div className='w-full flex flex-col h-max before:absolute relative before:right-0 before:w-[1px] before:h-full before:bg-gradient-to-b before:from-[#007AFF] before:to-[#FA8F21]
        after:absolute after:left-0 after:w-[1px] after:h-full after:bg-gradient-to-b after:from-[#007AFF] after:to-[#FA8F21]
        '>
          {
            sponsors.map((sponsor) => (
              <Field 
                key={sponsor.id}
                name={sponsor.name} 
                position={sponsor.position} 
                text={sponsor.text}
                image={sponsor.image}
                endpoint={"postSponsor"}
              />
            ))
          }
        </div>
        
        {/* Add New Sponsor Button */}
        <div 
          onClick={addNewSponsor} 
          className='w-full h-[50px] border border-[#8080809f] cursor-pointer active:scale-90 duration-500 ease-in-out rounded-lg flex justify-center items-center bg-[#ffffffc2]'
        >
          Add New Sponsor
        </div>
      </div>
    </div>
  )
}