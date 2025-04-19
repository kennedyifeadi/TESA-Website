import React from "react";
import { DynamicBackground } from "../DynamicBackground";
import ConstructionTape from "../../assets/images/ConstructionTape.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FiUsers } from "react-icons/fi";
import { FiVideo } from "react-icons/fi";
import { FaRegSmile } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { FcAdvertising } from "react-icons/fc";
import { useAuth } from "../../context/AuthProvider";
import TesaLogo from "../../assets/images/logo.png";
import toast, { Toaster } from "react-hot-toast";


export const SideBar = () => {
  const {signout} = useAuth();

  const handleClick = () => {
    toast.success("The best faculty is TESA")
  }
  const sideBarLinks = [
    { name: "Excos Upload", path: "/admin/dashboard", icon: <FiUsers/> },
    { name: "Adverts", path: "/admin/adverts", icon: <FcAdvertising/> },
    { name: "Events", path: "/admin/events", icon: <FiVideo/> },
    { name: "Sponsors", path: "/admin/sponsors", icon: <FaRegSmile/> },
    { name: "Resources", path: "/admin/resources", icon: <IoBookOutline/> },
  ];
  return (
    <div className="w-full h-full rounded-tr-2xl rounded-br-2xl relative overflow-hidden">
      <DynamicBackground imageUrl={ConstructionTape} />
      <div className="flex flex-col w-full h-full justify-between relative bg-[#0000008c]">
        <Toaster position="top-center" reverseOrder={false} />
        <div className="w-full h-[10%] flex justify-center">
          <img src={TesaLogo} alt="" onClick={handleClick} className="cursor-pointer" />
        </div>
        <div className="w-full h-[70%] flex justify-around gap-2 flex-col">
          {sideBarLinks.map((link, index) => (
            <NavLink to={link.path} key={index}>
              {({isActive}) =>{
                return(
                  <motion.div className={`w-full relative before:absolute hover:before:bg-green-500 before:h-full before:w-[2px] before:right-4 before:rounded-full flex px-4 md:px-6 lg:px-8 flex-col gap-1 h-[60px] duration-500 ease-in-out transition-all hover:text-[white] text-sm ${isActive ? "text-[white] before:bg-green-500" : "text-[#ffffff71] before:bg-green-700"}`}>
                    <span>
                      {link.icon}
                    </span>
                    {link.name}
                  </motion.div>
                )
              }}
            </NavLink>
          ))}
        </div>
        <div className="w-full h-[10%] flex px-4 md:px-6 lg:px-8">
          <span  className='hover:text-red-600 cursor-pointer text-red-700 duration-500 ease-in-out' onClick={signout}>Logout</span>
        </div>
      </div>
    </div>
  );
};
