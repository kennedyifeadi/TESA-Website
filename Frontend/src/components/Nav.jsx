import React from 'react'
import { NavLink } from "react-router-dom";
import TesaLogo from "../assets/images/tesaLogo.png"
import notification from "../assets/icons/notif.png"
import UserIcon from "../assets/icons/user.png"
import SearcgIcon from "../assets/icons/search.png"
import { NavItems } from "./NavItems"
import { NavItem } from './NavItem';


export const NavBar = () => {
  return (
    <div className='w-full h-[10dvh] flex px-4 absolute top-0 right-0 z-20'>
      <div className='flex h-full w-[10%] items-center'>
        <div className='w-[60%] h-full flex items-center cursor-pointer'>
          <NavLink to="/">
            <img src={TesaLogo} alt="" className='w-full h-full cursor-pointer' />
          </NavLink>
        </div>
        <div className='w-[40%] h-full flex items-center justify-end cursor-pointer'>
          <img src={notification} alt="" />
        </div>
      </div>
      <div className='flex w-[80%] h-full items-center border-b-[#07101B] border-b'>
        {
          NavItems.map((nav, index)=>{
            return (
              <div key={index} className='w-[20%] h-full'>
                <NavItem NavUrl={nav.NavUrl} title={nav.Title} ids={nav.id}/>
              </div>
            )
          })
        }
      </div>
      <div className='flex h-full w-[10%] items-center'>
        <div className='h-full flex items-center w-[40%] cursor-pointer'>
          <img src={UserIcon} alt="" />
        </div>
        <div className='h-full flex items-center w-[60%] cursor-pointer'>
          <img src={SearcgIcon} alt="" />
        </div>
      </div>
    </div>
  )
}
