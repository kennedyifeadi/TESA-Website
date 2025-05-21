import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const NavItem = ({ NavUrl, title, ids }) => {
  return (
    <NavLink 
      to={NavUrl} 
      className="h-full flex items-center relative"
    >
      {({ isActive }) => (
        <div className={`h-full flex items-center relative md:hover:bg-[#392b1a] duration-500 ease-in-out px-4 ${isActive ? 'md:bg-[#392b1a]' : ''}`}>
          <span
            className={`text-lg md:text-2xl md:hover:text-white duration-500 ease-in-out font-medium ${isActive ? 'text-white' : ''}`}
            style={{ fontFamily: '"Aldrich", sans-serif' }}
          >
            {title}
          </span>
          
          {/* Active indicator */}
          {isActive && (
            <motion.div
              layoutId="activeIndicator"
              className="absolute bottom-0 left-0 w-full h-0.5 bg-[#007AFF]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
          
          {/* Hover indicator */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-0.5 bg-[#007AFF]"
            initial={{ scaleX: 0, opacity: 0 }}
            whileHover={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        </div>
      )}
    </NavLink>
  );
};