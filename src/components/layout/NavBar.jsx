import React, { useState } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import { PiLineVerticalThin } from "react-icons/pi";

const navItems = ["Home", "News", "Sport", "Business", "Innovation", "Culture", "Travel"];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const NavLinks = ({ className }) => (
    <div className={className}>
      <PiLineVerticalThin color='#7e7e7e' size={28} />
      {navItems.map((item) => (
        <p key={item} className=" border-b-[3px] border-transparent hover:border-white transition-all duration-300 cursor-pointer h-10 flex items-center font-reithm text-sm">
          {item}
        </p>
      ))}
      <BsThreeDots className=" border-b-[3px] border-transparent hover:border-white transition-all duration-300 cursor-pointer h-10 flex items-center " size={28} />
    </div>
  );

  return (
    <nav className="bg-black text-white font-reithm border-b-[0.1px] border-zinc-50/30">
      {/* Desktop View */}
      <div className="hidden lg:flex justify-evenly gap-12 items-center px-4  lg:w-10/12 mx-auto">
        <div className="flex items-center space-x-4 my-4 ">
          <img src="/images/Logo.svg" className="h-8" alt="BBC Logo" />
          <span className="flex items-center min-w-28  font-reith text-sm">
            <FaUser size={23} className="mr-1" />
            Sign in
          </span>
        </div>
        <div className="flex  items-center ">
        <NavLinks className="flex items-center   space-x-10 mx-5" />
          
        </div>
        <div className='bg-[#202224] text-white  flex py-1 items-center'>
          <IoSearchSharp size={25} className="ml-2" />
          <input
            type="text"
            placeholder="Search iPlayer"
            className="bg-transparent placeholder-slate-50 my-auto px-2 w-full hidden lg:flex py-1 border-none outline-none focus:outline-none"
          />
          </div>
      </div>

      {/* Tablet View */}
      <div className="hidden md:flex lg:hidden justify-between items-center  px-4 py-5">
        <img src="/images/Logo.svg" className="h-6" alt="BBC Logo" />
        <NavLinks className="flex items-center space-x-4 " />
        <IoSearchSharp className="text-2xl" />
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex justify-between items-center px-4 py-2">
        <FaUser className="text-xl" />
        <img src="/images/Logo.svg" className="h-6" alt="BBC Logo" />
        <div className="flex items-center space-x-4">
          <IoSearchSharp className="text-xl" />
          <button onClick={handleMenuToggle} className="text-2xl">≡</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 py-2">
          {navItems.map((item) => (
            <a key={item} className="block py-2">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
