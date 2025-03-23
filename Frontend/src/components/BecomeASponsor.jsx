import React, { useRef }  from 'react'
import background from "../assets/images/becomeaSponsorBG.jpg"
import { DynamicBackground } from './DynamicBackground'
import toast, { Toaster } from 'react-hot-toast';

export const BecomeASponsor = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://script.google.com/macros/s/AKfycbw5bdczvS36hONCGXmOE5_6-wfrAi49K1NvDO6TVm1gHs7gST7MryA8HBS0LsWJ9KiO/exec", {
      method: 'POST',
      body: new FormData(formRef.current),
    }).then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
        toast.error("Network response was not ok");
      }
      return res.json();
    })
      .then(data => {
        console.log(data);
        toast.success(data.msg)
      })
      .catch(err => {
        console.error('There was a problem with the fetch operation:', err);
        alert('Submission failed. Please try again.');
        toast.error('Submission failed. Please try again.')
      });
  };

  return (
    <div className='w-full h-screen relative' style={{ fontFamily: '"Poppins", sans-serif' }}>
      <Toaster position="top-center" reverseOrder={false} />
      <DynamicBackground imageUrl={background}/>
      <form onSubmit={handleSubmit}  ref={formRef} className='flex justify-center gap-8 absolute top-0 flex-col bg-[#222121c9] items-center w-full h-full p-14'>
        <h1 className='font-bold text-3xl'>Become a Sponsor</h1>
        <div className='w-full gap-8 h-[50px] flex justify-center'>
          <input type="text" name='Name' className=' rounded-md  border-2 pl-4 flex-1 h-full border-[#392B1A] outline-none bg-[#FFFFFF]' placeholder='Name' />
          <input type="text" name='Company' className=' rounded-md  border-2 pl-4 flex-1 h-full border-[#392B1A] outline-none bg-[#FFFFFF]' placeholder='Company Name' />
        </div>
        <div className='w-full gap-8 h-[50px] flex justify-center'>
          <input type="text" name='Mobile' className=' rounded-md  border-2 pl-4 flex-1 h-full border-[#392B1A] outline-none bg-[#FFFFFF]' placeholder='Mobile' />
          <input type="text" name='Email' className=' rounded-md  border-2 pl-4 flex-1 h-full border-[#392B1A] outline-none bg-[#FFFFFF]' placeholder='Email' />
        </div>
        <div className='w-full h-[200px] flex justify-center'>
          <textarea name="Message" id="" className=' rounded-md  border-2 pl-4 pt-2 w-full h-full border-[#392B1A] outline-none bg-[#FFFFFF]' placeholder='message'></textarea>
        </div>
        <div>
          <button className='cursor-pointer active:scale-75 transition-all bg-[#007AFF] flex justify-center items-center text-white w-[10rem] h-10 gap-2 font-medium rounded-md duration-500'>Submit</button>
        </div>
      </form>
    </div>
  )
}
// https://script.google.com/macros/s/AKfycbw5bdczvS36hONCGXmOE5_6-wfrAi49K1NvDO6TVm1gHs7gST7MryA8HBS0LsWJ9KiO/exec
