import React, { useContext, useEffect, useState } from 'react'
import { DynamicBackground } from './DynamicBackground'
import ResourceBG from "../assets/images/resourceBG.png"
import { ResoucesContext } from '../context/ResoucesContext';

const levels = [100, 200, 300, 400, 500]
const Departments = [
    {
        abb: "Agric",
        full: "Agricultural and Environmental Engineering",
        links:{
            100: "wewewew",
            200: "",
            300: "",
            400: "",
            500: ""
        }
    },
    {
        abb: "Automotive",
        full: "Automitive Engineering",
        links:{
            100: "",
            200: "",
            300: "",
            400: "",
            500: ""
        }
    },
    {
        abb: "Civil",
        full: "Civil Engineering",
        links:{
            100: "",
            200: "",
            300: "",
            400: "",
            500: ""
        }
    },
    {
        abb: "Elect",
        full: "Electrial and Electronic Engineering",
        links:{
            100: "",
            200: "",
            300: "",
            400: "",
            500: ""
        }
    },
    {
        abb: "Food Tech",
        full: "Food Technology",
        links:{
            100: "",
            200: "",
            300: "",
            400: "",
            500: ""
        }
    },
    {
        abb: "IPE",
        full: "Industrial and Production Engineering",
        links:{
            100: "",
            200: "",
            300: "",
            400: "",
            500: ""
        }
    },
    {
        abb: "Mech",
        full: "Mechanical Engineering",
        links:{
            100: "",
            200: "",
            300: "",
            400: "",
            500: ""
        }
    },
    {
        abb: "Petroleum",
        full: "Petroleum Engineering",
        links:{
            100: "",
            200: "",
            300: "",
            400: "",
            500: ""
        }
    },
    {
        abb: "Wood",
        full: "Wood and Biomaterial Engineering",
        links:{
            100: "",
            200: "",
            300: "",
            400: "",
            500: ""
        }
    },
]
export const FilterResources = () => {
    const [activeLevel, setActiveLevel] = useState(null);
    const [selectedLevel, setSelectedLevel] = useState(100);
    const [SelectedDepartment, setSelectedDepartment] = useState(Departments[0]);
    const [activeDepartment, setActiveDepartment] = useState(null);
    const {setLevel, setDepartment, setLink} = useContext(ResoucesContext)
    const handleApply = ()=>{
        setLevel(selectedLevel)
        setLink(()=> SelectedDepartment.links[selectedLevel]);
        setDepartment(SelectedDepartment.full)
        setActiveDepartment(null)
        setActiveLevel(null)
    }
    const handleReset = ()=>{
        setActiveDepartment(null)
        setActiveLevel(null)
        setLevel(400)
        setDepartment(Departments[0].full);
    }
    // useEffect(() => {
    //     if (SelectedDepartment.links) {
    //         console.log();
    //     }
    // }, [SelectedDepartment, selectedLevel]); 

  return (
    <div className='h-screen w-full flex relative'>
        <DynamicBackground imageUrl={ResourceBG}/>
        <div className='w-full h-full bg-[#392B1A] z-[-1] absolute top-0'></div>
        <div className='w-full h-full flex flex-col z-10'>
            <div className='w-full mt-10 flex flex-col gap-4'>
                <h1 className='w-full text-center underline text-[#392B1A] text-2xl md:text-5xl' style={{ fontFamily: '"Aldrich", sans-serif' }}>
                    Filter by category
                </h1>
                <p className='w-full text-center md:text-xl md:tracking-wider text-[15px] text-[#392B1A]' style={{ fontFamily: '"poppins", sans-serif' }}>
                    Kindly select from the toggle options below to access the right materials of your interest 
                </p>
            </div>
            <div className='px-4 md:px-24 gap-4 w-full h-[30%] flex flex-col justify-center font-bold' style={{ fontFamily: '"poppins", sans-serif' }}>
                <h1 className='text-2xl md:text-4xl w-max bg-gradient-to-r from-[#007AFF] to-[#FA8F21] bg-clip-text text-transparent h-[30%] border '>Level</h1>
                <span className='w-full flex flex-wrap md:justify-between gap-2 gap-y-4 h-max' style={{ fontFamily: '"poppins", sans-serif' }}>
                    {
                            levels.map((level, index)=>{
                                const isActive = activeLevel === level;
                                return (
                                    <span key={index} className={`w-[100px] md:w-[150px] cursor-pointer ${isActive ? "bg-[#007AFF] text-white border-[#007AFF]" : " bg-transparent text-black"} duration-500 ease-in-out active:scale-90 hover:bg-[#007AFF] hover:text-white hover:border-[#007AFF] h-[40px] flex justify-center items-center font-semibold border rounded-md text-xl md:text-3xl`} onClick={() => {setSelectedLevel(level); setActiveLevel(level)}}>{level}</span>

                                )
                            })

                    }
                </span>
            </div>
            <div className='px-4 md:px-24 gap-4 w-full h-[30%] flex flex-col justify-center font-bold' style={{ fontFamily: '"poppins", sans-serif' }}>
                <h1 className='text-2xl md:text-4xl w-max bg-gradient-to-r from-[#007AFF] to-[#FA8F21] bg-clip-text text-transparent'>Department</h1>
                <span className='w-full flex flex-wrap gap-2 md:gap-4 justify-center md:justify-between h-max' style={{ fontFamily: '"poppins", sans-serif' }}>
                    {
                        Departments.map((Department, index)=> {
                            const isActive = activeDepartment === Department.abb;
                            return(
                                <span key={index} className={`w-[30%] md:w-[30%] md:max-w-[200px] ${isActive ? "bg-[#007AFF] text-white border-[#007AFF]" : " bg-transparent text-black"} cursor-pointer duration-500 ease-in-out active:scale-90 hover:bg-[#007AFF] hover:text-white hover:border-[#007AFF] h-[40px] flex justify-center items-center font-semibold border rounded-md text-[15px] md:text-3xl`} onClick={() => {setSelectedDepartment(Department); setActiveDepartment(Department.abb)}}>{Department.abb}</span>
                            )
                        })
                    }
                </span>
            </div>
            <div className='w-full flex justify-center gap-4 h-[20%] items-center'>
                <span className='w-[10%] flex justify-center items-center rounded-md active:scale-90 duration-500 ease-in-out cursor-pointer hover:bg-[#ff00009f] h-[35px] min-w-[120px] text-white bg-[#FF000080]' onClick={handleReset}>Reset</span>
                <span className='w-[10%] flex justify-center items-center rounded-md active:scale-90 duration-500 ease-in-out cursor-pointer hover:bg-[#007bffd2] h-[35px] min-w-[120px] text-white bg-[#007AFF]' onClick={handleApply}>Apply</span>
            </div>
        </div>
    </div>
  )
}
