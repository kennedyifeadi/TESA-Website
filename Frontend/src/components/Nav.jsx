import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import TesaLogo from "../assets/images/tesaLogo.png"
import notification from "../assets/icons/notif.png"
import UserIcon from "../assets/icons/user.png"
import SearcgIcon from "../assets/icons/search.png"
import { NavItems } from "./NavItems"
import { NavItem } from './NavItem';
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt1 } from "react-icons/hi";


export const NavBar = () => {
  const [searchClicked, setSearchCliked] = useState(false)
  const [dialogClicked, setDialogClicked] = useState(false)
  const handleSearchClick = ()=>{
    setSearchCliked(!searchClicked)
  }
  const handleDialogClick = ()=>{
    setDialogClicked(!dialogClicked)
  }
  useEffect(()=>{
    console.log(searchClicked);
  })
  return (
    <div className='w-full h-[20dvh] md:h-[10dvh] flex px-4 absolute top-0 right-0 z-20'>
      <div className='flex h-full flex-col md:flex-row w-full md:w-[10%] items-center'>
        <div className='w-full justify-center md:w-[60%] h-[50%] md:h-full flex items-center cursor-pointer'>
          <NavLink to="/">
            <img src={TesaLogo} alt="" className='w-full h-full object-contain cursor-pointer' />
          </NavLink>
        </div>
        <div className='w-full md:w-[40%] h-[50%] md:h-full flex items-center justify-between'>
          <HiOutlineMenuAlt1 className='flex md:hidden text-5xl cursor-pointer' onClick={handleDialogClick}/>
          <img src={notification} alt=""  />
        </div>
      </div>
      <div className={`bg-gradient-to-r from-[#007AFF] to-[#FA8F21] md:bg-none flex md:flex-row flex-col h-screen justify-center ${dialogClicked ? "right-0" : "right-[-500px]"} w-[50%] ${searchClicked ? "md:w-[70%]": "md:w-[80%]"} duration-500 transition-all ease-in-out md:h-full items-start md:items-center border-b-[#07101B] border-b md:right-0 md:relative absolute`}>
      <IoMdClose className="flex md:hidden text-white absolute top-4 right-0 cursor-pointer text-5xl" onClick={handleDialogClick}/>
        {
          NavItems.map((nav, index)=>{
            return (
              <div key={index} className='w-full md:w-[20%] h-[10%] md:h-full text-none'>
                <NavItem NavUrl={nav.NavUrl} title={nav.Title} ids={nav.id}/>
              </div>
            )
          })
        }
      </div>
      <div className={`flex md:right-0 h-full w-[50%] justify-center  ${searchClicked ? "md:w-[20%]": "md:w-[10%]"} items-center duration-500 transition-all ease-in-out absolute ${dialogClicked ? "right-0" : "right-[-500px]"}  top-[140%] md:top-0 md:relative`}>
        <div className={`h-full hidden md:flex items-center w-[40%] ${searchClicked ? "md:w-[20%]": "md:w-[40%]"} duration-500 transition-all ease-in-out cursor-pointer`}>
          <img src={UserIcon} alt="" />
        </div>
        <div className={`h-full flex items-center w-[80%] ${searchClicked ? "md:w-[80%]": "md:w-[60%]"} duration-500 transition-all ease-in-out relative cursor-pointer`}>
          <input type="text" className={`${searchClicked ? "md:w-full md:h-[95%] md:border-2 md:p-2" : "md:w-0 md:h-0"} w-full p-2 h-[70%] bg-white md:bg-transparent outline-none duration-500 rounded-md transition-all ease-in-out  md:border-[#007AFF]`} />
          <img src={SearcgIcon} alt="" className={`absolute ${searchClicked ? "md:w-10 md:h-10 ": "md:-full md:h-full"} w-10 h-10 object-cover right-0 duration-500 transition-all ease-in-out`} onClick={handleSearchClick}/>
        </div>
      </div>
    </div>
  )
}
