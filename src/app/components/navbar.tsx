"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { useAccount } from "wagmi";
import ConnectButton from "./connectButton";
import { useWeb3Modal } from "@web3modal/wagmi/react";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const { open } = useWeb3Modal();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const navigate = (path) => {
    router.push(path);
    setShowMenu(false);
  };

  const { address, connector, isConnected } = useAccount();

  return (
    <div className="text-white">
      <nav className="p-4 shadow-lg flex justify-between items-center ">
        <IoMenu
          className="text-2xl cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        />
        <div className="flex items-center">
          <img src="./assets/logo.png" alt="logo" className="w-8 h-8" />
        </div>
      </nav>
      <div
        className={`absolute top-0 left-0 w-full bg-gradient-to-r from-[#3C88AE] to-[#072444] transition-transform transform ${
          showMenu ? "translate-y-14" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col items-center">
          <li
            onClick={() => navigate("/feed")}
            className="p-2 cursor-pointer transition-all duration-300 hover:scale-110"
          >
            My Team
          </li>
          <li
            onClick={() => navigate("/bets")}
            className="p-2 cursor-pointer transition-all duration-300 hover:scale-110"
          >
            My Bets
          </li>
          <li
            onClick={() => navigate("/games")}
            className="p-2 cursor-pointer transition-all duration-300 hover:scale-110"
          >
            Next Games
          </li>
        </ul>
        <div className="flex justify-center">
  {isClient && isConnected ? (
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-300 ease-in-out text-sm" onClick={() => open()}>
      {address}
    </button>
  ) : (
    <ConnectButton />
  )}
</div>
      </div>
    </div>
  );
};

