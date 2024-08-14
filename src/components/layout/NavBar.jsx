// // import { Avatar, Dropdown, Navbar } from "flowbite-react";
// // import React from 'react'


// // function NavBar() {
// //   return (
// //     <Navbar className="bg-black">
// //      <Navbar.Brand >
// //         <img src="/images/Logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
// //         <span className="self-center flex whitespace-nowrap text-xl font-semibold  text-white justify-center items-center gap-1">
// //         <FaUser fill="white" />
// //         Login
// //         </span>
// //       </Navbar.Brand>
// //       <div className="flex md:order-2">
// //         {/* <Dropdown arrowIcon={false} inline > </Dropdown> */}
// //         <Navbar.Toggle className="text-white">
// //           test
// //         </Navbar.Toggle>
// //       </div>
// //       <Navbar.Collapse>
// //         <Navbar.Link  active>
// //           Home
// //         </Navbar.Link>
// //         <Navbar.Link >About</Navbar.Link>
// //         <Navbar.Link >Services</Navbar.Link>
// //         <Navbar.Link >Pricing</Navbar.Link>
// //         <Navbar.Link >Contact</Navbar.Link>
// //       </Navbar.Collapse>

// //     </Navbar>
// //   )
// // }

// // export default NavBar



// import React, { useState } from 'react';
// import { BsThreeDots } from "react-icons/bs";
// import { FaUser } from "react-icons/fa6";
// import { IoSearchSharp } from "react-icons/io5";
// function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <nav className="bg-black  px-2 sm:px-4 py-2.5 ">
//       <div className="container flex flex-wrap justify-between items-center mx-auto">
//         <a href="/" className="flex items-center">
//           <img src="/images/Logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
//           <span className="self-center flex whitespace-nowrap text-xl font-semibold  text-white justify-center items-center gap-1">
//             <FaUser fill="white" />
//             Login
//           </span>
//         </a>



//         <div className="flex items-center">
//           <button
//             onClick={handleMenuToggle}
//             type="button"
//             className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
//           >
//             <span className="sr-only">Open main menu</span>
//             {/* Hamburger icon */}
//             <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>

//         <div
//           className={`w-full md:block md:w-auto ${isMobileMenuOpen ? '' : 'hidden'}`}
//           id="mobile-menu"
//         >
//           <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
//             <li>
//               <p
//                 className="block py-2 pr-4 pl-3 text-white"
//                 aria-current="page"
//               >
//                 Home
//               </p>
//             </li>
//             <li>
//               <p className="block py-2 pr-4 pl-3 text-white"
//               >
//                 News
//               </p>
//             </li>
//             <li>
//               <p
//                 className="block py-2 pr-4 pl-3 text-white"
//               >
//                 Sport
//               </p>
//             </li>
//             <li>
//               <p
//                 className="block py-2 pr-4 pl-3 text-white"
//               >
//                 Business
//               </p>
//             </li>
//             <li>
//               <p className="block py-2 pr-4 pl-3 text-white"
//               >
//                 Innovation
//               </p>
//             </li>
//             <li>
//               <p className="block py-2 pr-4 pl-3 text-white"
//               >
//                 Culture
//               </p>
//             </li>
//             <li>
//               <p className="block py-2 pr-4 pl-3 text-white"
//               >
//                 Travel
//               </p>
//             </li>
//             <li>
//               <p className="block py-2 pr-4 pl-3 text-white"
//               >
//                 <BsThreeDots />
//               </p>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <div className="max-w-md mx-auto bg-[#202224] w-full">
//             <div className="flex items-center px-5 py-2 gap-4 justify-evenly">
//             <IoSearchSharp fill="white" />
//               <span className="text-white">Search iPlayer</span>
//             </div>
//           </div>

//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
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
        <a key={item} className="hover:underline font-reithm text-sm">
          {item}
        </a>
      ))}
      <BsThreeDots />
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
