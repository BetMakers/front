
'use client'

import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const router = useRouter();
  
    const navigate = (path) => {
      router.push(path);
      setShowMenu(false); // Opcional: Cierra el menú después de navegar
    };

  return (
    <div className="text-white">
      <nav className="p-4 shadow-lg flex justify-between items-center ">
        <IoMenu className="text-2xl cursor-pointer" onClick={() => setShowMenu(!showMenu)} />
        <div className="flex items-center">
          <img src="./assets/logo.png" alt="logo" className="w-8 h-8" />
        </div>
      </nav>
      <div className={`absolute top-0 left-0 w-full bg-gradient-to-r from-[#3C88AE] to-[#072444] transition-transform transform ${showMenu ? "translate-y-14" : "-translate-y-full"}`}>
        <ul className="flex flex-col items-center">
        <li onClick={() => navigate('/feed')} className="p-2 cursor-pointer transition-all duration-300 hover:scale-110">My Team</li>
          <li onClick={() => navigate('/bets')} className="p-2 cursor-pointer transition-all duration-300 hover:scale-110">My Bets</li>
          <li onClick={() => navigate('/games')} className="p-2 cursor-pointer transition-all duration-300 hover:scale-110">Next Games</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
