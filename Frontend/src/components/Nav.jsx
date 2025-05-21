import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import TesaLogo from "../assets/images/logo.png";
import notification from "../assets/icons/notif.png";
import UserIcon from "../assets/icons/user.png";
import SearchIcon from "../assets/icons/search.png";
import { NavItems } from "./NavItems";
import { NavItem } from './NavItem';
import { IoMdClose } from "react-icons/io";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";

export const NavBar = () => {
  const [searchClicked, setSearchClicked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll-based background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdown = document.getElementById('mobileMenu');
      if (dropdown && !dropdown.contains(event.target) && !event.target.closest('.menuToggle')) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchClicked(!searchClicked);
  };

  return (
    <div className={`w-full h-16 fixed top-0 left-0 z-50 flex items-center transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'md:bg-transparent bg-white '
    }`}>
      <div className="w-full h-full max-w-7xl mx-auto px-4 flex items-center justify-between relative">
        
        {/* Mobile: Left Container */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            className="text-gray-800 focus:outline-none menuToggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <HiOutlineMenuAlt1 className="text-3xl" />
          </button>
          <img src={notification} alt="Notifications" className="w-14 h-14 object-contain" />
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 transform md:static md:transform-none">
          <NavLink to="/" className="block">
            <img src={TesaLogo} alt="TESA Logo" className="h-10 md:h-12 object-contain" />
          </NavLink>
        </div>

        {/* Desktop Nav Items */}
        <div className={`hidden md:flex items-center h-full ${
      scrolled ? ' ' : 'border-b'
    }`}>
          {NavItems.map((nav, index) => (
            <div key={index} className={`h-full flex items-center ${nav.id === 5 ? '' : 'border-r-1 border-black'}`}>
              <NavItem NavUrl={nav.NavUrl} title={nav.Title} ids={nav.id} />
            </div>
          ))}
        </div>

        {/* Desktop Right Side (Search + User) */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <button 
              className="focus:outline-none"
              onClick={toggleSearch}
              aria-label="Search"
            >
              <img src={SearchIcon} alt="Search" className="w-12 h-12 object-cover" />
            </button>

            <AnimatePresence>
              {searchClicked && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 240, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="absolute right-0 top-full mt-2"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-[#007AFF]"
                    autoFocus
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavLink to="/profile" className="block">
            <img src={UserIcon} alt="User Profile" className="w-12 h-12 object-contain" />
          </NavLink>
        </div>

        {/* Mobile: Right User Icon */}
        <div className="md:hidden">
          <NavLink to="/profile" className="block">
            <img src={UserIcon} alt="User Profile" className="w-12 h-12 object-contain" />
          </NavLink>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              id="mobileMenu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute left-0 top-full w-full bg-white shadow-lg rounded-b-lg overflow-hidden z-50"
            >
              {/* Search Input */}
              <div className="p-4 border-b border-gray-200">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-3 pl-10 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-[#007AFF]"
                  />
                  <img 
                    src={SearchIcon} 
                    alt="Search" 
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 object-contain" 
                  />
                </div>
              </div>

              {/* Mobile Nav Links */}
              <div className="py-2">
                {NavItems.map((nav, index) => (
                  <NavLink 
                    key={index} 
                    to={nav.NavUrl}
                    className={({ isActive }) => 
                      `block px-4 py-3 text-lg font-medium ${
                        isActive 
                          ? 'text-[#007AFF] bg-blue-50' 
                          : 'text-gray-800 hover:bg-gray-50'
                      }`
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {nav.Title}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
