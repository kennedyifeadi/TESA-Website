import React, { useState } from 'react'
import TESA from "../../assets/images/logo.png"
import { Field } from './Field'

export const Adverts = () => {
  const titles = ['Name', 'Description', 'Image']
  
  const [adverts, setAdverts] = useState([
    { id: 1, name: "Name", description: "Description", image: true }
  ]);

  const addNewAdverts = () => {
    const newId = adverts.length > 0 ? Math.max(...adverts.map(advert => advert.id)) + 1 : 1;
    setAdverts([...adverts, { 
      id: newId, 
      name: "Name", 
      description: "Description", 
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
              <div key={index} className={`flex-1 flex justify-center items-center h-full ${index === 2 ? "border-r-none" : "border-r border-r-black"}`}>
                <h1 className='text-white cursor-default'>{title}</h1>
              </div>
            ))
          }
        </div>
        
        <div className='w-full flex flex-col gap-4'>
          {
            adverts.map((advert) => (
              <Field 
                key={advert.id}
                name={advert.name} 
                descrption={advert.description} 
                endpoint={"postAdvert"} 
                image={advert.image}
              />
            ))
          }
        </div>
        
        <div onClick={addNewAdverts} className='w-full h-[50px] border border-[#8080809f] cursor-pointer active:scale-90 duration-500 ease-in-out rounded-lg flex justify-center items-center bg-[#ffffffc2]'>
          Add New Adverts
        </div>
      </div>
    </div>
  )
}