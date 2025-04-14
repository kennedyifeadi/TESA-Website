import React from 'react'
import { SideBar } from '../components/Admin/SideBar'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Admin/Navbar'

export const AdminLayout = () => {
  return (
    <div className='w-full h-screen flex overflow-y-hidden items-end'>
        <div className='fixed h-[10%] top-0 w-full md:hidden'>
            <Navbar/>
        </div>
        <div className='w-[200px] md:w-[20%] h-full absolute md:relative top-0'>
            <SideBar/>
        </div>
        <main className='h-[90%] md:h-full w-full md:w-[80%]'>
            <Outlet/>
        </main>
    </div>
  )
}
