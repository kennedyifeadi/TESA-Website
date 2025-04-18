import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const NavItem = ({ NavUrl, title, ids }) => {
  return (
    <div
      className={`w-full h-full flex ${
        ids === 5 ? "border-none" : "border-r border-r-[#07101B]"
      }`}
    >
      <NavLink to={NavUrl} className="w-full h-full flex">
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
              {title}
            </span>
          </motion.div>
        )}
      </NavLink>
    </div>
  );
};
