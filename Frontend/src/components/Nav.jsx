import React, { useState, useEffect, useRef } from 'react';
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
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileSearchQuery, setMobileSearchQuery] = useState('');
  const [showDesktopSuggestions, setShowDesktopSuggestions] = useState(false);
  const [showMobileSuggestions, setShowMobileSuggestions] = useState(false);
  
  const desktopSearchRef = useRef(null);
  const mobileSearchRef = useRef(null);

  // Search options
  const searchOptions = [
    "Who is the current president",
    "Who is the vice president", 
    "Who is the general secretary",
    "Who is the assistant general secretary",
    "Who is the public relation officer",
    "Who is the sport director",
    "Who is the welfare director",
    "Who is the treasurer",
    "Who is the financial secretary"
  ];

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
      
      // Close desktop search when clicking outside
      if (desktopSearchRef.current && !desktopSearchRef.current.contains(event.target)) {
        setSearchClicked(false);
        setShowDesktopSuggestions(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchClicked(!searchClicked);
    if (!searchClicked) {
      setTimeout(() => {
        desktopSearchRef.current?.focus();
      }, 100);
    }
  };

  const handleDesktopSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setShowDesktopSuggestions(true);
  };

  const handleMobileSearchFocus = () => {
    setShowMobileSuggestions(true);
  };

  const handleMobileSearchChange = (e) => {
    setMobileSearchQuery(e.target.value);
  };

  const handleSuggestionClick = (suggestion, isMobile = false) => {
    if (isMobile) {
      setMobileSearchQuery(suggestion);
      setShowMobileSuggestions(false);
      setMenuOpen(false); // Close mobile menu when navigating
    } else {
      setSearchQuery(suggestion);
      setShowDesktopSuggestions(false);
      setSearchClicked(false); // Close desktop search when navigating
    }
    // Navigate to executives section
    window.location.href = '#executives';
  };

  const filteredSuggestions = searchOptions.filter(option =>
    option.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`w-full h-16 fixed top-0 left-0 z-50 flex items-center transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : menuOpen ? 'bg-white' : 'bg-transparent'
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
        <div className="absolute left-1/2 md:left-0 transform -translate-x-1/2 md:-translate-x-0 md:static md:transform-none">
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
        <div className="hidden md:flex items-center gap-4 relative">
          {/* Fixed container for search to maintain layout */}
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Search container that expands from the center */}
            <AnimatePresence mode="wait">
              {!searchClicked ? (
                <motion.button
                  key="search-icon"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="focus:outline-none w-12 h-12 flex items-center justify-center"
                  onClick={toggleSearch}
                  aria-label="Search"
                >
                  <img src={SearchIcon} alt="Search" className="w-12 h-12 object-cover" />
                </motion.button>
              ) : (
                <motion.div
                  key="search-input"
                  initial={{ width: 48, opacity: 0 }}
                  animate={{ width: 220, opacity: 1 }}
                  exit={{ width: 48, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute right-0 top-1/2 -translate-y-1/2"
                  style={{ transformOrigin: 'right center' }}
                >
                  <div className="relative">
                    <input
                      ref={desktopSearchRef}
                      type="text"
                      placeholder="Search for your executives..."
                      value={searchQuery}
                      onChange={handleDesktopSearchChange}
                      className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-[#007AFF] bg-white"
                      autoFocus
                    />
                    <img 
                      src={SearchIcon} 
                      alt="Search" 
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 object-contain cursor-pointer" 
                      onClick={() => {
                        if (searchQuery) {
                          window.location.href = '#executives';
                        }
                      }}
                    />
                    
                    {/* Desktop Search Suggestions */}
                    <AnimatePresence>
                      {showDesktopSuggestions && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50"
                        >
                          {filteredSuggestions.length > 0 ? (
                            filteredSuggestions.map((suggestion, index) => (
                              <a
                                key={index}
                                href="#executives"
                                className="block px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 text-gray-700 hover:text-[#007AFF] transition-colors no-underline"
                                onClick={() => handleSuggestionClick(suggestion)}
                              >
                                {suggestion}
                              </a>
                            ))
                          ) : (
                            <div className="px-4 py-3 text-gray-500 text-center">
                              No matching options found
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
              {/* Mobile Search Input */}
              <div className="p-4 border-b border-gray-200 relative">
                <div className="relative">
                  <input
                    ref={mobileSearchRef}
                    type="text"
                    placeholder="Search..."
                    value={mobileSearchQuery}
                    onChange={handleMobileSearchChange}
                    onFocus={handleMobileSearchFocus}
                    className="w-full p-3 pl-12 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-[#007AFF]"
                  />
                  <img 
                    src={SearchIcon} 
                    alt="Search" 
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 object-contain" 
                  />
                </div>

                {/* Mobile Search Suggestions */}
                {showMobileSuggestions && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-4 right-4 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-48 overflow-y-auto z-50"
                  >
                    {searchOptions.map((suggestion, index) => (
                      <a
                        key={index}
                        href="#executives"
                        className="block px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 text-gray-700 hover:text-[#007AFF] transition-colors no-underline"
                        onClick={() => {
                          handleSuggestionClick(suggestion, true);
                          setShowMobileSuggestions(false);
                        }}
                      >
                        {suggestion}
                      </a>
                    ))}
                  </motion.div>
                )}
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