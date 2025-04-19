import React from "react";
import { DynamicBackground } from "../DynamicBackground";
import ConstructionTape from "../../assets/images/ConstructionTape.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
export const SideBar = () => {
  const sideBarLinks = [
    { name: "Excos Upload", path: "/admin/dashboard" },
    { name: "Adverts", path: "/admin/adverts" },
    { name: "Events", path: "/admin/events" },
    { name: "Sponsors", path: "/admin/sponsors" },
    { name: "Resources", path: "/admin/resources" },
  ];
  return (
    <div className="w-full h-full rounded-tr-2xl rounded-br-2xl relative overflow-hidden">
      <DynamicBackground imageUrl={ConstructionTape} />
      <div className="flex flex-col w-full h-full relative bg-[#0000008c]">
        <div className="w-full flex justify-center">
          <img src="" alt="" />
        </div>
        <div className="w-full flex justify-center flex-col">
          {sideBarLinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                "text-white text-xl font-bold py-2 px-4 hover:bg-[#0000008c] rounded-lg"
              }
            >
              {({ isActive }) => (
                <motion.div
                  animate={{
                    backgroundColor: isActive ? "#392B1A" : "rgba(0,0,0,0)",
                    color: isActive ? "#fff" : "#000",
                    borderBottom: isActive
                      ? "2px solid #007AFF"
                      : "0px solid transparent",
                  }}
                  whileHover={{
                    backgroundColor: "#392B1A",
                    color: "#fff",
                  }}
                  transition={{ duration: 0 }}
                  className="w-full h-full flex pr-4 md:pr-0 md:justify-center justify-end items-center duration-500 ease-in-out relative before:absolute before:right-0 before:w-full before:bottom-0 before:h-0 hover:before:h-[2px] before:bg-[#007AFF]"
                >
                  <span
                    className="text-[24px] font-medium"
                    style={{ fontFamily: '"Aldrich", sans-serif' }}
                  >
                    {link.name}
                  </span>
                </motion.div>
              )}
            </NavLink>
          ))}
        </div>
        <div className="w-full flex justify-center">
          <NavLink></NavLink>
        </div>
      </div>
    </div>
  );
};
