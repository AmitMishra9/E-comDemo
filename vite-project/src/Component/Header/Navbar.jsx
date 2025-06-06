import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import Search from '../Search/Search';
import cross from "../../assets/img/cross.png"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Get current location
    
    const toggleMenu = () => setIsOpen(!isOpen);
    
    const links = [
        { name: "Women", path: "/women" },
        { name: "Men", path: "/men" },
        { name: "About", path: "/about" },
        { name: "Everworld Stories", path: "/everworld" },
    ];

    const [isSearchDropdown, setShowDropDown] = useState(false);

    const handleSearchClick = () => {
        setShowDropDown(true);
    };
    
    const handleClose = () => {
        setShowDropDown(false);
    }

    useEffect(() => {
        if (isSearchDropdown) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isSearchDropdown])

    return (
        <div className="flex justify-between items-center border-b border-gray-300 px-3 py-4 pr-3">
            {/*Link Section  */}
            <div className="hidden md:flex gap-5 font-[Figtree] text-[0.85rem] font-semibold leading-[0.75rem]">
                {links.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className={`relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-[-20px] after:h-[2px] after:bg-black after:transition-all after:duration-300
                         ${location.pathname === link.path
                                ? "after:w-full"
                                : "after:w-0 hover:after:w-full"
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            <div>
                <span className='font-bold font-[Manrope] text-[1.30rem] leading-[1rem] mr-5'>E V E R L A N E</span>
            </div>

            <div className='flex items-center gap-5'>
                <FaSearch size={18} onClick={handleSearchClick} className='cursor-pointer' />
                <FaUser size={18} />
                <FaShoppingCart size={18} />
            </div>

{isSearchDropdown && (
  <div className='h-screen fixed inset-0 bg-white bg-opacity-40 md:top-10  z-50 overflow-y-auto scrollbar-hide'>
    
    {/* Cross icon aligned to right */}
    <div className='flex justify-end px-6 '>
      <img
        src={cross}
        alt="close"
        onClick={handleClose}
        className="h-4 w-4 cursor-pointer mb-3"
      />
    </div>

    {/* Your search component */}
    <div className="">
      <Search />
    </div>
    
  </div>
)}


            {/* Mobile Menu slide in from Right */}
            <div className='md:hidden'>
                <button onClick={toggleMenu}>
                    {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>
            </div>
            
            {isOpen && (
                <div className="md:hidden absolute top-12 right-0 bg-white shadow-md w-2/3 p-5 z-50 flex flex-col items-start gap-4 font-[Figtree] text-[0.95rem] font-semibold rounded-md border-2 border-gray-300">
                    {links.map((link) => (
                        <Link 
                            key={link.name} 
                            to={link.path} 
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Navbar