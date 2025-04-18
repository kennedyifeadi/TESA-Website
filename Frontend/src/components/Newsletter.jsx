import React, { useRef, useState } from 'react';
import mailbox from '../assets/images/mailbox.png';
import cloud from '../assets/images/Union.png';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const formRef = useRef(null);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email field cannot be empty!");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    const serviceID = import.meta.env.VITE_REACT_SEVICE_ID;
    const templateID = import.meta.env.VITE_REACT_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_REACT_PUBLIC_KEY;
    const googleSheetURL = "https://script.google.com/macros/s/AKfycbzlMEc-OjcnRwCjV8EjSxJJWK8se_yzdgPYdOCzZzNi39J81KSqJfbpaAZPtdWFPuR2/exec";

    const templateParams = { email };

    try {
      // Send email via EmailJS
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      console.log(email);

      // Send email to Google Sheets
      const formData = new FormData();
      formData.append("Email", email);

      await fetch(googleSheetURL, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          toast.success("Thank you for subscribing! Check your inbox.");
        });

      setEmail("");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className='w-full h-[120dvh] md:h-[100dvh] flex flex-col md:flex-row px-2 md:px-8 bg-[#392B1A] justify-center items-center'>
      <Toaster position="top-center" reverseOrder={false} />

      <div className='w-full md:w-[30%] h-[50%] md:h-full flex justify-center items-center md:px-6 relative'>
        <div className='w-[90%] h-[80%] md:h-[50%] rounded-md' style={{background: "linear-gradient(90deg, #007AFF 0%, #FA8F21 100%)"}}></div>
        <div className='absolute w-full bottom-0 flex h-[70%] justify-center'>
          <div className='flex h-[10%] w-full top-0 absolute'>
            <img src={cloud} alt="" className='absolute top-3 left-10  w-[20%] h-full' />
            <img src={cloud} alt="" className='absolute top-[-15px] left-40 w-[20%] h-full'/>
            <img src={cloud} alt="" className='absolute top-3 right-10 w-[20%] h-full' />
          </div>
          <div className='h-[100%] w-full flex justify-center items-center'>
            <img src={mailbox} alt="" className='h-[90%] w-full object-cover' />
          </div>
        </div>
      </div>

      <div className='w-full md:w-[70%] flex gap-4 flex-col h-[50%] md:h-full justify-center p-4 md:px-10'>
        <h1 className='w-[50%] text-white text-2xl md:text-5xl font-semibold'>Subscribe to our Newsletter!</h1>
        <p className='text-[#908F8F] text-[18px]'>Be the first to get exclusive offers and the latest news</p>

        <form className='w-full mt-4 h-max flex flex-col gap-4' onSubmit={handleSubscribe} ref={formRef}>
          <input 
            type="text" 
            value={email}
            name='Email'
            onChange={(e) => setEmail(e.target.value)}
            className='w-full md:w-[50%] outline-none px-4 border-[#908F8F] border rounded-lg text-[#908F8F] h-[50px]' 
            placeholder='Enter your email address' 
          />

          <button 
            type="submit"
            className='w-full active:scale-75 duration-500 transition-all h-[50px] cursor-pointer rounded-sm font-medium text-white' 
            style={{background: "linear-gradient(90deg, #007AFF 0%, #FA8F21 100%)"}}
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};
