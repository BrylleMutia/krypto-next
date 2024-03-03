"use client";
import React, { useState } from "react";
import Image from "next/image";
import { NAVLINKS } from "../constants";

const Navbar = () => {
   const [toggle, setToggle] = useState(false);

   return (
      <div className="flex justify-between overflow-hidden">
         <h2 className="font-outfit font-black p-6">Krypto.</h2>
         <ul className="sm:flex hidden">
            {NAVLINKS.map((link, index) => (
               <li className="flex items-center p-2" key={index}>
                  <a
                     href={`#${link.title.toLowerCase()}`}
                     className="text-md transition-all px-6 py-2 hover:bg-accent"
                  >
                     {link.title}
                  </a>
               </li>
            ))}
         </ul>

         <div className="sm:hidden flex flex-col">
            <Image
               src={toggle ? "/close.svg" : "/menu.svg"}
               alt="menu"
               className="h-[1.5rem] w-[1.5rem] object-contain self-end mt-6 mr-4"
               onClick={() => setToggle((prev) => !prev)}
               width={25}
               height={25}
            />
            <ul
               className={`flex-row absolute ${
                  toggle ? "navbar-show" : "navbar-hide"
               } bg-secondary w-[10rem]`}
            >
               {NAVLINKS.map((link, index) => (
                  <li className="hover:bg-accent h-[70px]" key={index}>
                     <a
                        href={`#${link.title.toLowerCase()}`}
                        className="text-md block h-full py-5 pl-4"
                     >
                        {link.title}
                     </a>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
};

export default Navbar;
