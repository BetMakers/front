"use client";
import Head from "next/head";
import { useState } from "react";


export default function Games() {
    const [expanded, setExpanded] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);


  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };
    return(
        <>
        <div className="px-4">
            <Head>
                <title>Games</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex flex-col items-center justify-center  py-2">
                <h1 className="text-3xl font-bold text-white font-poppins">
                    Next Games
                </h1>
            
          <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 rounded-lg p-4 my-4 shadow-md "> 
                <div className="flex justify-between items-center mx-4">
                  <img
                    src="./assets/city.png"
                    alt="Team Logo"
                    className="w-12 h-12"
                  />
                  <span className="text-lg text-gray-800 font-semibold">
                    VS
                  </span>
                  <img
                    src="./assets/liverpool.png"
                    alt="Team Logo"
                    className="w-12 h-12"
                  />
                </div>
                <p className="my-2 text-gray-700 font-poppins text-center font-semibold">
                  Nov, 23rd 2023
                </p>
                
              
              <button className="block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full mx-auto my-4 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg font-poppins">
                Start the bet!
              </button>
              <button className="block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full mx-auto my-4 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg font-poppins">
                See active bets for this match
              </button>
            </div>

            <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 rounded-lg p-4 my-4 shadow-md "> 
                <div className="flex justify-between items-center mx-4">
                  <img
                    src="./assets/city.png"
                    alt="Team Logo"
                    className="w-12 h-12"
                  />
                  <span className="text-lg text-gray-800 font-semibold">
                    VS
                  </span>
                  <img
                    src="./assets/inter.png"
                    alt="Team Logo"
                    className="w-12 h-12"
                  />
                </div>
                <p className="my-2 text-gray-700 font-poppins text-center font-semibold">
                  Dic, 12th 2023
                </p>
                
              
              <button className="block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full mx-auto my-4 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg font-poppins">
                Start the bet!
              </button>
              <button className="block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full mx-auto my-4 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg font-poppins">
                See active bets for this match
              </button>
            </div>


            <div className="bg-gradient-to-r from-blue-100 via-white to-blue-100 rounded-lg p-4 my-4 shadow-md "> 
                <div className="flex justify-between items-center mx-4">
                  <img
                    src="./assets/city.png"
                    alt="Team Logo"
                    className="w-12 h-12"
                  />
                  <span className="text-lg text-gray-800 font-semibold">
                    VS
                  </span>
                  <img
                    src="./assets/juve.png"
                    alt="Team Logo"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <p className="my-2 text-gray-700 font-poppins text-center font-semibold">
                  Feb, 23rd 2024
                </p>
                
              
              <button className="block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full mx-auto my-4 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg font-poppins">
                Start the bet!
              </button>
              <button className="block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full mx-auto my-4 transition duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg font-poppins">
                See active bets for this match
              </button>
            </div>

            
            </main> 
            </div>
        </>
    )
}


// id del partido, cantidad apuesta, address creator, a quien le apuesot (1 mio) 

// el del otro loco, por quien va apostar