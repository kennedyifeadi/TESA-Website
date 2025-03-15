import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { NavContext } from "../context/NavContext";
import { motion } from "framer-motion";

export const NavItem = ({ NavUrl, title, ids }) => {
  const { setId } = useContext(NavContext);
  const handleClick = () => {
    setId(ids);
  };

  return (
    <div
      className={`w-full h-full flex justify-center items-center ${
        ids === 5 ? "border-none" : "border-r border-r-[#07101B]"
      }`}
    >
      <NavLink to={NavUrl} className="w-full h-full flex justify-center items-center">
        {({ isActive }) => (
          <motion.div
            animate={{ backgroundColor: isActive ? "#392B1A" : "", color: isActive ? "#fff" : "", borderBottom: isActive ? "2px solid #007AFF " : ""}}
            transition={{ duration: 0.3 }}
            className="w-full h-full flex justify-center items-center hover:bg-[#392B1A] text-[#000] hover:text-white duration-500 ease-in-out relative before:absolute before:w-full before:bottom-0 hover:before:h-[2px] before:h-0 before:bg-[#007AFF]"
            onClick={handleClick}
          >
            <span
              className="text-[30px] font-medium"
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
